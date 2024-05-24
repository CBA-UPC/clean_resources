(function(d,w,i){function f(){var m;if(d.createElement&&(m=d.createElement('meta'))){m.content=i;m.name='advmeta-cc';d.getElementsByTagName('head').item(0).appendChild(m);}}if(w.attachEvent){w.attachEvent('onload',f);}else if(w.addEventListener){w.addEventListener('load',f,false);}w.advCC=i;})(document,window,'0000000');
h ) {
		myScroller = new scroller();
		myScroller.init();
		
		$('.down-arrow').click(function() {
			myScroller.arrowDown();
		});
	}
	
	
	$('header .hamburger').click(function() {
		$(this).toggleClass('active');
		$('header .user-menu-wrapper').removeClass('active');
		$('header .user-menu-wrapper').hide();
		$('header .hamburger-content-wrapper').show();
		/*if ($(this).hasClass('active'))
			$('.header-hirlevel').hide();
		else
			$('.header-hirlevel').show();*/
	});
	
	$('header .user-menu').click(function() {
		$('header .user-menu-wrapper').toggleClass('active');
		$('header .hamburger').removeClass('active');
		$('header .hamburger-content-wrapper').hide();
		$('header .user-menu-wrapper').show();
		//$('.header-hirlevel').show();
	});
	
	
	$('.hamburger-content span').click(function() {
		var type = $(this).attr('data-type');		
		$('.menu-contents .menu-tab-container[data-type="'+type+'"]').addClass('active');
		$('header .hamburger').removeClass('active');		
		$('header .hamburger').hide(400);
		$('header .hamburger-content-wrapper').hide(400);
		//$('.header-hirlevel').show(400);
		setTimeout(function() {
			$('.menu-contents .menu-tab-container[data-type="'+type+'"]').addClass('anim-in');
		},10);
		setTimeout(function() {
			$('.menu-contents .close').addClass('active');
		},400);
	});
	
	$('.button.error-report').click(function() {
		var type = $(this).attr('data-type');
		var parent = $(this).parent();
		$('.menu-contents .menu-tab-container[data-type="'+type+'"]').addClass('active');
		parent.removeClass('anim-in');
		$('.menu-contents .close').removeClass('active');
		
		setTimeout(function() {
			$('.menu-contents .menu-tab-container[data-type="'+type+'"]').addClass('anim-in');
			parent.removeClass('active');
		},350);
		setTimeout(function() {
			$('.menu-contents .close').addClass('active');
		},700);
	});
	
	$('.menu-tab-container.help .button.gray').click(function() {
		var type = $(this).attr('data-type');
		var parent = $(this).closest('.menu-tab-container');
		
		$('.menu-contents .close').removeClass('active');
		parent.removeClass('anim-in');		
		
		setTimeout(function() {
			$('.menu-contents .menu-tab-container[data-type="'+type+'"]').addClass('active');
			parent.removeClass('active');
		},350);
		setTimeout(function() {
			$('.menu-contents .menu-tab-container[data-type="'+type+'"]').addClass('anim-in');
		},360);
		setTimeout(function() {
			$('.menu-contents .close').addClass('active');
		},700);
	});
	
	$('.menu-contents .close').click(function() {
		var item = $('.menu-tab-container.active');
		item.removeClass('anim-in');
		
		if (item.attr('data-type') == "help") {
			$('.searchbar-wrapper form input[type=text]').val("");
		}
		
		$('.menu-contents .close').removeClass('active');
		$('header .hamburger-content-wrapper').show(350);
		$('header .hamburger').show(350);
		setTimeout(function() {
			item.removeClass('active');
		},350);
	});
	
	$('.searchbar-wrapper form').submit(function(e) {
	});
	
	setTimeout(function() {
		$('.grid').masonry({
		  gutter: 10,
		  itemSelector: '.item-container',
		  columnWidth: '.item-container',
		  fitWidth: true
		});
	},500);
});
		
var scroller = function() {
	var isScrollable = 1;
	var isBottomScrolled = 0;
	var isTopScrolled = 0;
	
	this.init = function() {
		var wrapper = $('<div class="paginator"></div>');
		for (i=0;i<$('.scroller-section').length;i++) {
			wrapper.append('<div></div>');
		}
		
		wrapper.find('div').on('click', function (e) {
			var index = $('section.active').index('section');
			var new_index = $(this).index('.paginator div');
			scrollSection(index,new_index);
		});
		
		wrapper.find('div:first-child').addClass('active');
		$('.scroller-section').eq(0).addClass('active');
		$('body').append(wrapper);
		
		
		$(window).on('keydown', function (e) {
			var code;
			if (e.keyCode != undefined) {
				code = (e.keyCode ? e.keyCode : e.which);
				
				if (code == 40) {
					$(".scroller-section").trigger( "keyScroll", [{direction:1}] );					
				} else if (code == 38) {
					$(".scroller-section").trigger( "keyScroll", [{direction:-1}] );					
				}
			}

		});
		
		$(".scroller-section").on('mousewheel DOMMouseScroll keyScroll', function (e,i) {
			if (!isScrollable) return;
			var direction,delta;
										
			if (i != undefined) {
				direction = i.direction;
			}
			else {
				delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
				if (delta < 0) {
					direction = 1;
				}
				else if (delta > 0) {
					direction = -1;
				}
			}
			
			if (Math.floor($('section.active').scrollTop()) + Math.floor($('section.active').height()) ==  $('section.active')[0].scrollHeight) {
				isBottomScrolled = 1;							
			}
			if ($('section.active').scrollTop() == 0) {
				isTopScrolled = 1;
			}
			if ( (direction == 1 && isBottomScrolled) || (direction == -1 && isTopScrolled) || !isSectionScrollable()) {
				var index = $('section.active').index('section');
				var new_index = index + direction;
				scrollSection(index,new_index);
			}
			else if (isSectionScrollable) {
				if (direction == 1) {
					isTopScrolled = 0;					
				}
				else {
					isBottomScrolled = 0;
				}
				if (i != undefined) {
					if (direction == 1) {
						$(".scroller-section.active").stop().animate({ scrollTop: $(".scroller-section.active").scrollTop() + 150 }, 100);
					}
					else {
						$(".scroller-section.active").stop().animate({ scrollTop: $(".scroller-section.active").scrollTop() - 150 }, 100);
					}
				}
			}
		});
		
	};
	
	var isSectionScrollable = function() {
		return $('section.active')[0].scrollHeight > $('section.active')[0].clientHeight;
	};
	
	this.arrowDown = function() {
		scrollSection(0,1);
	};
	
	var scrollSection = function(index,new_index) {
		var length = $('section').length;
		if (new_index < length && new_index > -1) {
			isScrollable = 0;
			if (new_index > index) {
				$('section').eq(index).addClass('trans-top');
			}
			else {
				$('section').eq(index).addClass('trans-bottom');
			}
			$('section.active').removeClass('active');
			$('.paginator div.active').removeClass('active');
			setTimeout(function() {						
				$('section').removeClass('trans-top trans-bottom');
				isScrollable = 1;
				isBottomScrolled = 0;			
				isTopScrolled = 0;
			},1000);
			$('section').eq(new_index).addClass('active');
			$('.paginator div').eq(new_index).addClass('active');
			if ($('section').eq(new_index).attr('data-menu-color') == "black") {
				$('header .hamburger').addClass('black');
			}
			else {
				$('header .hamburger').removeClass('black');
			}
			isBottomScrolled = 0;
			isTopScrolled = 0;
		}
	};
	
};