window.isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(navigator.userAgent);

(function() {

	// FIXES

	$(window).resize($.throttle(250, function() {
		if($(window).width() < 992) {
			return;
		}

		// HIDE OPEN MOBILE SUBMENU ON RESIZE
		$(".menu-mobile, .menu-mobile ul").removeClass("active");
	}));

	// SHOW MOBILE MENU
	$(".header-mobile-menu").click(function() {
		$(".menu-mobile").addClass("active");
	});
	// HIDE MENU
	$(".menu-mobile-top button").click(;
	// SHOW MOBILE SUBMENU
	$(".menu-mobile ul li .icon-arrow-right").click(;
	// HIDE MOBILE SUBMENU
	$(".menu-mobile ul li ul li .menu-back").click(;

	/*
	// FAST MESSAGES SHARING BUTTONS SHOW/HIDE
	$(".fast-messages-list li .fast-message-perex").click(function(data, handler) {
		if (data.target == this || $(data.target).hasClass("fast-message-img-info")) {
			$(this).toggleClass("share-active");
		}
	});

	// FAST MESSAGES MOBILE MENU FILTER
	$(".fast-messages-filter .fast-message-filter-menu i").click(function() {
		$(".fast-messages-filter form").slideToggle();
	});
	*/

	// SEARCH FORM
	/*
	$(".menu-content form input").focus(function() {
		$(".menu-content form").addClass("active");
	}).blur(function() {
		$(".menu-content form").removeClass("active");
	});
	*/
	var input_text;
	$(".menu-content form input").blur(function() {
		input_text = $(this).val().trim();
	});

	$(".menu-content form button").click(function() {
		if(!input_text) {
			$(".menu-content form").addClass("active");
		} else {
			 $(".menu-content form").submit();
		}
	});

	$(document).mouseup(;

	// MENU HOVER FUNCTION

	var initialActiveMenu, activeMenuTimeout, activeMenuTimeoutValue = 2e3;
	var unsetActiveMenu = 
	var setActiveMenu = function() {
		unsetActiveMenu();
		activeMenuTimeout = setTimeout(function() {
			var menu = $("ul.menu li");
			var submenu = $("ul.submenu");
			menu.removeClass("active");
			submenu.removeClass("active");
			menu.eq(initialActiveMenu).addClass("active");
			submenu.eq(initialActiveMenu).addClass("active");
		}, activeMenuTimeoutValue);
	};

	$.each($(".menu li"), function(index, value) {
		if($(value).hasClass("active")) initialActiveMenu = index;
	});

	// https://github.com/briancherne/jquery-hoverIntent/blob/master/jquery.hoverIntent.js

	var isTablet = window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 991px)").matches;
	$(".menu li")[isTablet ? "click" : "mouseenter"](function(event) { // ked mas touch a nemas mys
		unsetActiveMenu();
		var returnFalse = isTablet && !$(event.target).parent().hasClass("active");
		var menu_number = $(this).data("menu");
		var submenu = $('[data-submenu="' + menu_number + '"]');
		$("ul.menu li").removeClass("active");
		$("ul.submenu").removeClass("active");
		$(this).addClass("active");
		submenu.addClass("active");
		if(returnFalse) return false;
	}).mouseleave(setActiveMenu());

	$("ul.menu, ul.submenu").mouseenter(unsetActiveMenu).mouseleave(setActiveMenu);

	// SHOW / HIDE HEADER ON SCROLL

	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll($.throttle(250, function() {
		var st = $(this).scrollTop();

		if(Math.abs(lastScrollTop - st) <= delta) {
			return;
		}

		if (st > lastScrollTop && st > navbarHeight) {
			$('header').removeClass('nav-down').addClass('nav-up');
		} else if(st + $(window).height() < $(document).height()) {
			$('header').removeClass('nav-up').addClass('nav-down');
		}

		lastScrollTop = st;
	}));

	// POLL
	//FIXME: kod prebraty z aktualnych magazinov, urcite by si zasluzil refactoring

	function anketa() {
		var id = this.id;
		var tmp = id.split('poll-vote-',2)[1].split("-");
		var pid = tmp[0];
		var paid = tmp[1];
		var msg = "Nastala chyba in.";
		var parent = $(this).parent();

		$("a", parent).each(function(){
			var $t = jQuery(this);
			$t.after($t.text());
			$t.remove();
		});

		$.post("/ajax/poll/vote/" + pid + "/" + paid, { cookie: "cookie" }, function(data){
			if(data.msg) {
				msg = data.msg;
			}
			var alert = $("#poll-alert-" + pid);
			alert.hide();
			alert.html(msg);
			alert.fadeIn("slow");
		}, "json");

		return false;
	}

	function anketa2() {
		var id = this.id;
		var tmp = id.split('poll-vote-',2)[1].split("-");
		var pid = tmp[0];
		var paid = tmp[1];
		var msg = "Nastala chyba in.";
		var parent = $(this).parent();

		$.post("/ajax/poll/vote/" + pid + "/" + paid, { cookie: "cookie" }, function(data){
			if(data.msg) {
				msg = data.msg;
			}
			var alert = $("#poll-alert-" + pid);
			alert.hide();
			alert.html(msg);
			alert.fadeIn("slow");
		}, "json");

		return false;
	}

	$(".poll a").click(anketa);
	$(".poll2 a").click(anketa2);

	// reklama hack na odstranenie prazdnych pozicii
	var intervalCounter = 0;
	var interval = setInterval(function() {
		$(".box-advertisement *:hidden").remove();
		if(intervalCounter > 20) clearInterval(interval);
		else intervalCounter++;
	}, .5e3);

})();

