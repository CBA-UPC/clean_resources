/*
	Alphonso main scripts
	2017
*/

jQuery(document).ready(function ($) {
	var s,
	BurgerBar = {
		settings: {
        	FooterElement: "[data-feature=footer]",
        	HeaderElement: "[data-feature=header]",
        	HeaderSearchBarElement: ".header__section--search__bar__container",
        	HomepageSlider: ".feature-content__inner",
        	HomepageSigninBox: "#signin-module .signin__wrapper .signin",
			SideMenuElement: ".sidemenu",
			/*SideMenuLinksElement: ".sidemenu__menu__section--primary--link > a",*/
			SideMenuLinksElement: ".sidemenu__menu .menu > ul > li > ul.children > li.page_item_has_children > a",
			/*SideMenuSubsection: ".sidemenu__menu__subsection",*/
			SideMenuSubLinksElement: ".sidemenu__menu__subsection--link > a",
			SideMenuOverlayElement: ".sidemenu__overlay",
			SideMenuClickElement: ".header__section--sidemenu",
			SideMenuCloseElement: ".sidemenu__menu__header .icon-close",
			SideMenuPrimaryActiveLinkElement: ".sidemenu__menu__section--primary--link:first a",
			SideMenuWidth: "270px",
        	TheAnimation: {
        	    duration: 550,
        	    queue: !1
        	}
		},
		init: function() {
			s = this.settings;
			s.SideMenuWidth = $(s.SideMenuElement).width()+"px";
			this.bindUIActions();
			$(window).on("scroll",function(){
				var v = {};
				v.ypos = $(window).scrollTop();
				v.contentTop = Math.floor($('#topHeader').position().top + $('#topHeader').height());
				if (v.ypos > v.contentTop) {
					$('#loginBar').addClass('scrolled');
				} else {
					$('#loginBar').removeClass('scrolled');
				}
			});
		},
		bindUIActions: function() {
			//console.log(s.SideMenuWidth);
			
			// open and close the side menu itself
			$(s.SideMenuClickElement).on('click', function(e) {
				e.preventDefault();BurgerBar.OpenSideMenu();
			});
			$(s.SideMenuCloseElement).on('click', ;

			// open and close primary menu sections
			$(s.SideMenuLinksElement).on('click', function(e) {
				e.stopImmediatePropagation();
				if ($(this).hasClass("open")) {
					$(this).css('border','1px solid red');
					BurgerBar.CloseSideMenuSection($(this));
				} else {
					e.preventDefault();
					BurgerBar.OpenSideMenuSection($(this));
				}
			});

			// open menu secondary subsection
			/*$(s.SideMenuSubLinksElement).on('click', function(e) {
				e.stopImmediatePropagation();
				BurgerBar.OpenSideMenuSubsection($(this));
			});*/
		},

		// open and close the side menu itself
        CloseSideMenu: function() {
            $(s.SideMenuElement).stop().animate({right:"-"+s.SideMenuWidth},s.TheAnimation).removeClass("open"),$(s.SideMenuOverlayElement).addClass("closed"),$(s.SideMenuCloseElement).addClass("close-animation"),setTimeout(550),$(s.SideMenuClickElement).find(".accessible-text").text("Show the Side Menu.")
        },
		OpenSideMenu: function() {
            $(s.SideMenuElement).removeClass("closed"),$(s.SideMenuElement).stop().animate({right:0,top:0},s.TheAnimation).addClass("open"),$(s.SideMenuOverlayElement).removeClass("closed"),$(s.SideMenuClickElement).find(".accessible-text").text("Hide the Side Menu.");
            
            BurgerBar.GetSideMenuSectionHeights();
		},

		// open and close primary menu sections
		CloseSideMenuSection: function(e) {
			var f = e.next(s.SideMenuSubsection);
			f.data('objHeight',f.height());
			f.stop().animate({height:0},s.TheAnimation);
			e.removeClass("open");
			e.next("ul").find(s.SideMenuSubLinksElement).removeClass("open");
		},
		OpenSideMenuSection: function(e) {
			// when opening subsection, close any other open subsections
			$(s.SideMenuLinksElement+".open").each(;
			// then add the open class, and roll out to stored default height
			e.addClass("open");
			var f = e.next(s.SideMenuSubsection);
			var h = f.data('objHeight');
			f.stop().css('height',0).animate({height:h+"px"},s.TheAnimation);
		},

		// open menu secondary subsection
		OpenSideMenuSubsection: function(e) {
			e.addClass("open");
			e.parent().parent().css('height','auto');
		}
	};

	// necessary to make the side menu work
	BurgerBar.init();

	$( 'a.story-panel--null' ).on('click', ;

	$( '#markets .row > div' ).on('click', function(e){
		if (! $(this).children('ul').hasClass('open') ) {
			$( '#markets ul.open' ).removeClass('open');
			$(this).children('ul').addClass('open');
		} else {
			$( '#markets ul.open' ).removeClass('open');
		}
	});
	
	// featured resources make image before link have the link
	$('.widget_media_image + .widget_alphonso_resource_single').each(function(){
		var theUrl = $(this).find("a").attr("href");
		var theLink = '<a target="_blank" href="'+theUrl+'"></a>';
		$(this).prev().wrapInner(theLink);
	});
	
	$('.wp-video').wrap('<div class="embed-wrapper"></div>');
	
	// smooth scrolling for anchor links
	$( "a[href*='#']:not([href='#']):not([role='button'])" ).on('click', function(event){
		var target = $(this.hash);
		if (this.hash.slice(1) == 'top') {
			$('html, body').animate({scrollTop : 0},800);
			event.preventDefault();
		}
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({scrollTop: target.offset().top}, 800);
			event.preventDefault();
		}
	});

	// remove all form input labels and replace with placeholders
	/*$("form :input").each(function(index, elem) {
		var eId = $(elem).attr("id");
		var label = null;
		if (eId && (label = $(elem).parents("form").find("label[for="+eId+"]")).length == 1) {
			$(elem).attr("placeholder", $(label).html());
			$(label).remove();
		}
	});
	$("#master form input[type='submit'], footer :submit").each(function(index, elem) {
		var eVal = $(elem).attr('value');
		$(elem).replaceWith("<button class='button cta'>"+eVal+"</button>");
	});*/
});

function initializeSliderButtons(slider) {
	var $xcd = 0;
	jQuery(slider).find( '.slides > li > a' ).each(function() {
	    $xcd++;
		var theUrl = jQuery(this).attr("href");
		var $theButton = jQuery(this).next('.caption-wrap').find(".caption .button");
		if ( theUrl && (! $theButton.hasClass('distinct')) ) {
		  $theButton.attr('href',theUrl);
		}
	});
}