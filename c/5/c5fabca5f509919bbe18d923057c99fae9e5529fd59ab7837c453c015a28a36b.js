(function ($) {

	"use strict";

	jQuery(window).on('load', function (e) {
		/*
		 * Pre-Loading
		 * */
		jQuery("#pageloader").fadeOut(500);

		if (jQuery('body').hasClass('adult-content')) {
			var cookie_adult = window.wpmanga.getCookie('wpmanga-adault');
			if(cookie_adult != 1){
				jQuery('#adult_modal').modal({backdrop: 'static', keyboard: false});
			} else {
				jQuery('body').removeClass('censored');
			}
		}

	});

	jQuery("body").removeClass("preload");

	jQuery(document).ready(function () {

		jQuery( 'ul.c-user_menu > li' ).each(;

		if (jQuery('body').hasClass('manga-reading-paged-style')) {

			$(document).on("click", ".page-prev-link", function () {
				var prev_page_button = $('.main-col-inner .c-blog-post .wp-manga-nav .nav-links a.prev_page');
				if (typeof prev_page_button !== 'undefined' && prev_page_button.length > 0 && prev_page_button.is(":visible")) {
					$(prev_page_button[0]).trigger('click');
				}
			});

			$(document).on("click", ".page-next-link", function () {
				var next_page_button = $('.main-col-inner .c-blog-post .wp-manga-nav .nav-links a.next_page');
				if (typeof next_page_button !== 'undefined' && next_page_button.length > 0 && next_page_button.is(":visible")) {
					$(next_page_button[0]).trigger('click');
				}
			});

			jQuery(window).on('mousemove', function (e) {

				var prev_page_button = $('.main-col-inner .c-blog-post .wp-manga-nav .nav-links a.prev_page');
				var next_page_button = $('.main-col-inner .c-blog-post .wp-manga-nav .nav-links a.next_page');

				var halfScreen = $(this).width() / 2;

				var originURL = jQuery('.reading-content-wrap').attr('data-site-url');

				var cursorImage = e.pageX < halfScreen ? madara.cursorPrev : madara.cursorNext;

				//Left Screen & Previous Page
				if (e.pageX < halfScreen) {
					if (typeof prev_page_button !== 'undefined' && prev_page_button.length > 0 && prev_page_button.is(":visible")) {
						$('body.reading-manga .reading-content .page-prev-link').css({"cursor": "url(" + cursorImage + "), auto"});
					} else {
						$('body.reading-manga .reading-content .page-prev-link').css({"cursor": "initial !important;"});
					}

				} else {

					if (typeof next_page_button !== 'undefined' && next_page_button.length > 0 && next_page_button.is(":visible")) {
						$('body.reading-manga .reading-content .page-next-link').css({"cursor": "url(" + cursorImage + "), auto"});
					} else {
						$('body.reading-manga .reading-content .page-next-link').css({"cursor": "initial"});
					}
				}

			});

		}

		var siteUrl = jQuery('#adult_modal').attr('data-site-url');
		$('.btn-not-adult').on('click', ;

		if (jQuery('body').hasClass('censored')) {
			jQuery('.btn-adult-confirm').on('click', function (e) {
				window.wpmanga.setCookie('wpmanga-adault', 1, 7);
				jQuery('body').removeClass('censored');
			});
		}

		/*sub-header*/
		$('li.menu-item-has-children a[href^="#"]').on('touchend click', function (e) {
			var $this = $(this);
			if ($this.parents('.c-sub-header-nav').length) {
				e.preventDefault();
				$this.parent().toggleClass('active');
			} else {
				e.preventDefault();
			}
		});

		/*menu off-canvas*/

		jQuery(".off-canvas ul > li.menu-item-has-children").addClass("hiden-sub-canvas");
		jQuery(".off-canvas ul >li.menu-item-has-children").append('<i class="fa fa-caret-right" aria-hidden="true"></i>');
		var menu_open = $('.menu_icon__open');
		var menu_close = $('.menu_icon__close');
		var menu_slide = $('.off-canvas');
		var menu_sign_in = $('.mobile-menu .btn-active-modal');

		menu_open.on('click', ;

		menu_close.on('click', function (e) {
			e.preventDefault();
			menu_open.removeClass('active');
			menu_slide.removeClass('active');
			$('body').removeClass('open_canvas');
		});

		menu_sign_in.on('click', function (e) {
			e.preventDefault();
			menu_open.removeClass('active');
			menu_slide.removeClass('active');
			$('body').removeClass('open_canvas');
		});

		$(".off-canvas ul >li.menu-item-has-children > i").on('click', function () {
			var $this = $(this).parent("li");
			$this.toggleClass("active").children("ul").slideToggle();
			return false;
		});
		$(document).on(" touchend click", function (e) {
			if (!$(e.target).hasClass('menu_icon__open') && !$(e.target).closest('.off-canvas').hasClass('active')) {
				menu_slide.removeClass('active');
				menu_open.removeClass("active");
				$('body').removeClass('open_canvas');
			}
		});
		/**
		 * Sticky Menu
		 * @type {Window}
		 */

		var stickyNavigation = $('.c-sub-header-nav').length > 0 ? $('.c-sub-header-nav').offset().top : 0;
		var cloneHeader = $("<div>", {
			class: "clone-header"
		})
		$(cloneHeader).insertBefore(".c-sub-header-nav");
		var navigationHeight = $('.c-sub-header-nav').outerHeight(true);

		/**
		 * Compare scrollTop position to add .sticky class
		 */
		var madara_need_add_sticky = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop - stickyNavigation > 750 && $("body").hasClass("sticky-enabled")) {
				$(cloneHeader).css('height', navigationHeight);
				$('.c-sub-header-nav').addClass('sticky');
				$('body').addClass('sticky__active');
				$('.c-sub-header-nav').fadeIn(300, 'linear');
			}
			else if (scrollTop - stickyNavigation <= navigationHeight + 5 && $("body").hasClass("sticky-enabled")) {
				// $(cloneHeader).remove();
				$(cloneHeader).css('height', 0);
				$('.c-sub-header-nav').removeClass('sticky');
				$('body').removeClass('sticky__active');
			}

		}

		/**
		 * Detect scrolling up or down, to add .sticky class
		 */
		var stickyNav = function () {
			if (typeof stickyNav.x == 'undefined') {
				stickyNav.x = window.pageXOffset;
				stickyNav.y = window.pageYOffset;
			}
			;

			var diffX = stickyNav.x - window.pageXOffset;
			var diffY = stickyNav.y - window.pageYOffset;


			if (diffX < 0) {
				// Scroll right
			} else if (diffX > 0) {
				// Scroll left
			} else if (diffY < 0) {
				// Scroll down
				if ($('body').hasClass('sticky-style-2')) {
					$('.c-sub-header-nav').removeClass('sticky');
					$('body').removeClass('sticky__active');
					$('.clone-header').css('height', 0);


				} else {
					madara_need_add_sticky();
				}
			} else if (diffY > 0) {
				// Scroll up

				madara_need_add_sticky();
			} else {
				// First scroll event
			}

			stickyNav.x = window.pageXOffset;
			stickyNav.y = window.pageYOffset;
		};

		if ($('body').hasClass('sticky-enabled')) {
			$(window).on('scroll', function () {
				if ($(window).width() >= 768 || $('body').hasClass('sticky-for-mobile')) {
					stickyNav();
				}
			});
		}
        
        // event on wide screens
		if ($(window).width() >= 768) {
			$('body').delegate('.page-item-detail .item-thumb.hover-details', 'mousemove', (function (e) {
				var postID = $(this).attr('data-post-id');
				var currentPostID;
				var hoverPostID;
				currentPostID = 'manga-item-' + postID;
				hoverPostID = 'manga-hover-' + postID;
				var check_bar = $('body').hasClass('admin-bar');
				var parentOffset = $(this).offset();
				var relativeXPosition = (e.pageX); //offset -> method allows you to retrieve the current position of an element 'relative' to the document
				var relativeYPosition = (e.pageY);
				var _width_infor = $("#hover-infor").width();
				var infor_left = (relativeXPosition - 15) - _width_infor;
				var infor_right = relativeXPosition + 15;
				var infor_top = check_bar ? (relativeYPosition - 32) : (relativeYPosition);
				var body_outerW = ($(window).outerWidth() / 2);

				$("#hover-infor").addClass('active');
				$("#hover-infor").show();
				$(".icon-load-info").css({
					"position": "absolute",
					"top": infor_top - 20,
					"left": relativeXPosition - 20,
					"display": "inline-block",
					"z-index": "99999",
					"width": "40px",
					"height": "40px",
				});
				$("#hover-infor").css({
					"position": "absolute",
					"top": infor_top,
					"display": "inline-block",
					"z-index": "99999",
				});
				if (relativeXPosition >= body_outerW) {
					$("#hover-infor").css({
						"left": infor_left,
					});
				}
				else {
					$("#hover-infor").css({
						"left": infor_right,
					});
				}
			})).mouseout(;
		} else {
            // event on small/mobile screens
            $('.off-menu ul.navbar-nav > .dropdown > a[href]').click(function() {
                var dropdown = $(this).next('.dropdown-menu');
                if (this.href && this.href != '#' && this.href != 'javascript:void(0)') {
                    location.href = this.href;
                }
            });
        }


		//Go To Top
		jQuery('.go-to-top').on('click', ;
		jQuery(window).on('scroll', function () {
			if (jQuery(window).scrollTop() >= (window.innerHeight * 0.5)) {
				if (!jQuery('.go-to-top').hasClass('active')) {
					jQuery('.go-to-top').addClass('active');
				}
				;
			} else {
				jQuery('.go-to-top').removeClass('active');
			}
			;
		});
        
		// search
		$('.main-menu-search .open-search-main-menu').on('click', function () {
			var $this = $(this);

			if ($this.hasClass('search-open')) {
				$this.parents('.c-header__top').find('.search-main-menu').removeClass('active');
				setTimeout(function () {
					$this.parents('.c-header__top').find('.search-main-menu').find('input[type="text"]').blur();
				}, 200);
				$this.removeClass('search-open');
				
				if($('body').hasClass('mobile')){
					var $adv_search_link = $('.link-adv-search', $('#blog-post-search'));
					if($adv_search_link.length > 0){
						$adv_search_link.remove();
					}
				}
			} else {
				$this.parents('.c-header__top').find('.search-main-menu').addClass('active');
				setTimeout( 200);
				$this.addClass('search-open');
				
				if($('body').hasClass('mobile')){
					var $adv_search_link = $('.link-adv-search', $this.closest('.widget-manga-search'));
					if($adv_search_link.length > 0){
						$('#blog-post-search').append($adv_search_link.clone());
					}
				}
			}
			;
		});

		$(".genres_wrap .btn-genres").click(function () {
			var $this = $(this);
			var $this_parent;
			$this.toggleClass("active");
			$this_parent = $this.parents(".genres_wrap");
			$this_parent.find(".genres__collapse").slideToggle(300);
			$this_parent.find(".c-blog__heading.style-3").toggleClass("active");
		});


		// accordion view chap
		$(".listing-chapters_wrap ul.main > li.has-child").on('click', function (e) {
			var $this = $(this);
			$(e.target).toggleClass("active").children("ul").slideToggle(300);
		});

		$(".listing-chapters_wrap ul.main > li a.has-child").on('click', function (e) {
			var $this = $(this);
			$(e.target).next("ul").slideToggle(300);
			$(e.target).parent().toggleClass("active");
		});

		$("#checkall").click(function () {
			$('table.list-bookmark input:checkbox').not(this).prop('checked', this.checked);
		});

		// header slider
		$(".manga-slider .slider__container").each(function () {

			var $this = $(this);
			var style = $(this).parents(".manga-slider").attr('data-style');
			var autoplay = $(this).parents(".manga-slider").attr('data-autoplay');
			autoplay = autoplay == "1" ? true : false;
			var manga_slidesToShow = parseInt($(this).parents(".manga-slider").attr('data-count'));
			var check_style = $this.parents(".style-3").length;
			var check_rtl = (jQuery("body").css('direction') === "rtl");
			var manga_style_1 = {
				dots: true,
				infinite: true,
				speed: 500,
				centerMode: (((manga_slidesToShow % 2 !== 0) && (!check_style)) ? true : false),
				slidesToShow: manga_slidesToShow,
				slidesToScroll: 1,
				arrows: false,
				rtl: check_rtl,
				autoplay: autoplay,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: (manga_slidesToShow == 1) ? 1 : 2,
						slidesToScroll: 1,
						infinite: true,
						centerMode: false,
						dots: true
					}
				}, {
					breakpoint: 660,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						variableWidth: false,
						dots: true
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						variableWidth: false,
					}
				}]
			}
			var manga_style_2 = {
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: manga_slidesToShow,
				slidesToScroll: 1,
				arrows: false,
				rtl: check_rtl,
				autoplay: autoplay,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: (manga_slidesToShow == 1) ? 1 : 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				}]
			}
			var manga_style_3 = {
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: manga_slidesToShow,
				slidesToScroll: 1,
				arrows: false,
				rtl: check_rtl,
				autoplay: autoplay,
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: (manga_slidesToShow == 1) ? 1 : 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				}]
			}

			switch (style) {
				case 'style-1':
					$this.slick(manga_style_1);
					break;
				case 'style-2':
					$this.slick(manga_style_2);
					break;
				case 'style-4':
					$this.slick(manga_style_3);
					break;
			}

		});

		// popular slider
		$(".popular-slider .slider__container").each(function () {
			var manga_slidesToShow = parseInt($(this).parents(".popular-slider").attr('data-count'));
			var check_rtl = (jQuery("body").css('direction') === "rtl");
			var autoplay = $(this).parents(".popular-slider").attr('data-autoplay');
			autoplay = autoplay == "1" ? true : false;
			var popular_style_2 = {
				dots: false,
				infinite: true,
				speed: 500,
				slidesToShow: manga_slidesToShow,
				arrows: true,
				rtl: check_rtl,
				autoplay: autoplay,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1700,
						settings: {
							slidesToShow: (manga_slidesToShow == 1) ? 1 : 4,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: (manga_slidesToShow == 1) ? 1 : 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: (manga_slidesToShow == 1) ? 1 : 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				]
			}
			var popular_style_1 = {
				dots: false,
				infinite: true,
				speed: 500,
				slidesToShow: manga_slidesToShow,
				arrows: true,
				rtl: check_rtl,
				autoplay: autoplay,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1700,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
				]
			}

			var popular_style_3 = popular_style_1;

			var $this = $(this);
			var style = $(this).parents(".popular-slider").attr('data-style');
			switch (style) {
				case 'style-1':
					$this.slick(popular_style_1);
					break;
				case 'style-2':
					$this.slick(popular_style_2);
					break;
				case 'style-3':
					$this.slick(popular_style_3);
					break;
			}

		});

		if ($('body').has('.summary__content.show-more').length) {
			var text = $('.summary__content.show-more'),
				btn = $('.content-readmore'),
				h = text[0].scrollHeight;
			if (h > 120) {
				btn.addClass('less');
				btn.css('display', 'inline-block');
			} else {
				btn.css('display', 'none');
				$('.description-summary').addClass('hide_show-more');
			}

			btn.click(function (e) {
				e.stopPropagation();

				if (btn.hasClass('less')) {
					btn.removeClass('less');
					btn.addClass('more');

					if( typeof single_manga_show_more !== 'undefined' ){
						btn.text( single_manga_show_more.show_less );
					}else{
						btn.text('Show less  ');
					}

					text.addClass('active');
					text.animate({'height': h});
				} else {
					btn.addClass('less');
					btn.removeClass('more');
					text.removeClass('active');

					if( typeof single_manga_show_more !== 'undefined' ){
						btn.text( single_manga_show_more.show_more );
					}else{
						btn.text('Show more  ');
					}

					text.animate({'height': '120px'});
				}
			});
		}
		
		$(document).on('wp_manga_after_load_chapters_list', function(){
			if ($('body').has('.listing-chapters_wrap.show-more .version-chap').length) {
				var text_chap = $('.listing-chapters_wrap.show-more .version-chap');
				var btn_chap = $('.listing-chapters_wrap.show-more .chapter-readmore');
				var height_parent = text_chap.height();
				var check_show_btn = function () {
					if (height_parent >= 550) {
						btn_chap.addClass('less-chap');
						btn_chap.fadeIn(300);
						$('.listing-chapters_wrap.show-more').addClass('show');
						text_chap.addClass('active');
					} else {
						btn_chap.fadeOut(300);
						$('.listing-chapters_wrap.show-more').removeClass('show');
						text_chap.removeClass('active')
					}
				}
				$(".listing-chapters_wrap.show-more ul.main > li.has-child").on('click', function (e) {
					var $this = $(this);
					setTimeout(function () {
						height_parent = $this.parents('.version-chap').height();
						check_show_btn();
					}, 300);
				});
				check_show_btn();
				btn_chap.click(function (e) {
					e.stopPropagation();
					if (btn_chap.hasClass('less-chap')) {
						btn_chap.removeClass('less-chap');
						btn_chap.fadeOut(300);
						text_chap.addClass('loading');
						$('.listing-chapters_wrap.show-more').removeClass('show');
						setTimeout(function () {
							btn_chap.remove();
							text_chap.animate({'max-height': '100%'});
							text_chap.removeClass('loading');
							text_chap.addClass('loaded');
						}, 1000);
					}
				});
			}
			
			$('.btn-reverse-order').on('click', function(e){
				var main_lists = $('.main.version-chap');
				main_lists.each(function(idx){
					var listItems = $(this).children('li');
					$(this).append(listItems.get().reverse());
				});
				
				var sub_lists = $('.sub-chap.list-chap');
				sub_lists.each(function(idx){
					var listItems = $(this).children('li');
					$(this).append(listItems.get().reverse());
				});
				
				return false;
			});
		});

		//Mobile Collapse Genres
		$(document).on('click', '.c-sub-header-nav .mobile-icon', function (e) {
			var $this = $(this);

			if ($this.parent().hasClass('active')) {
				$this.parent().removeClass('active');
			} else {
				$this.parent().addClass('active');
			}
		});

		var mobile_pagination_btn_attach_click = function(){
			var pagination_btn = $(".mobile-nav-btn");
			var select_pagination = $(".select-pagination");
			
			// unbind event first
			pagination_btn.unbind('click');
			pagination_btn.on('click', function (e) {

				e.preventDefault();
				if (select_pagination.parent().hasClass('active')) {
					select_pagination.parent().removeClass('active');
				} else {
					select_pagination.parent().addClass('active');
				}

			});
		};
		mobile_pagination_btn_attach_click();
		
		// re-attach click event after ajax loading chapter
		$(document).on('wp_manga_on_chapter_navlinks_click', function(){
			mobile_pagination_btn_attach_click();
		});

		$('#btn_view_full_image').on('click', function(e){
			$('.container').css({'width': 'auto', 'max-width':'initial'});

			$(this).hide();

			e.preventDefault();
			e.stopPropagation();
		});
		
		$('#btn-read-first').on('click', function(e){
			var the_link;
			the_link = $('.listing-chapters_wrap .wp-manga-chapter:eq(0) > a');
			if(the_link.attr('href') != '#'){
				location.href = the_link.attr('href');
			}
			
			the_link.trigger('click');
			
			return false;
		});
		
		$('#btn-read-last').on('click', function(e){
			var count = $('.listing-chapters_wrap .wp-manga-chapter').length - 1;
			var the_link;
			the_link = $('.listing-chapters_wrap .wp-manga-chapter:eq(' + count + ') > a');
			
			if(the_link.attr('href') != '#'){
				location.href = the_link.attr('href');
			}
			
			the_link.trigger('click');
			
			return false;
		});
	});


	function shortString() {
		var shorts = document.querySelectorAll('.short');
		if (shorts) {
			Array.prototype.forEach.call(shorts, function (ele) {
				var str = ele.innerText,
					indt = '...';

				if (ele.hasAttribute('data-limit')) {
					if (str.length > ele.dataset.limit) {
						var result = str.substring(0, ele.dataset.limit - indt.length).trim() + indt;
						ele.innerText = result;
						str = null;
						result = null;
					}
				} else {
					throw Error('Cannot find attribute \'data-limit\'');
				}
			});
		}
	}

	window.onload = 
})(jQuery);
