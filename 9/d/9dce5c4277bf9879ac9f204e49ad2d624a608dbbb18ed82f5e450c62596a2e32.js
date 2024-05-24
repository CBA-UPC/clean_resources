//click-add
var initial_items = 11;
var next_items = 3;
var $grid = $('.cards__row').isotope({
	itemSelector: '.cards__item',
	layoutMode: 'masonry',
});
function showNextItems(pagination) {
	var itemsMax = $('.visible_item').length;
	var itemsCount = 0;
	$('.visible_item').each(function () {
		if (itemsCount < pagination) {
			$(this).removeClass('visible_item');
			itemsCount++;
		}
	});
	if (itemsCount >= itemsMax) {
		$('.cards__btn-add-wrapper').hide();
	}
	$grid.isotope('layout');
}
function hideItems(pagination) {
	var itemsMax = $('.cards__item').length;
	var itemsCount = 0;
	$('.cards__item').each(function () {
		if (itemsCount >= pagination) {
			$(this).addClass('visible_item');
		}
		itemsCount++;
	});
	if (itemsCount < itemsMax || initial_items >= itemsMax) {
		$('.cards__btn-add-wrapper').hide();
	}
	$grid.isotope('layout');
}
$('.cards__btn-add-wrapper').on('click', ;
hideItems(initial_items);










//count
var block_show = false;
function scrollTracking() {
	if (block_show) {
		return false;
	}
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	
	var elm1 = document.getElementsByClassName('digits')[0];
	if(elm1 != null)	{ 
		var et = $('.digits').offset().top;
		var eh = $('.digits').outerHeight();
		var dh = $(document).height();
		if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
			block_show = true;

			// Код анимации
			$(document).ready(function () {
				$('.count-dig	});
				});
			});
		}
	}
}
$(window).scroll(function () {
	scrollTracking();
});

$(documcking();
});




var block_show1 = false;
function scrollTracking4() {
	if (block_show1) {
		return false;
	}
	var wt = $(window).scrollTop();
	var wh = $(window).height();	
	var et = $('.card').offset().top;
	var eh = $('.card').outerHeight();
	var dh = $(document).height();
	if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
		block_show1 = true;

		// Код анимации
		$(document).ready(function () {
			$('.count-card').each(function () {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 1000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		});
	}
}
$(window).scroll(function () {
	var elm2 = document.getElementsByClassName('card')[0];
	if(elm2 != null)	{ 		
		scrollTracking4();
	}
});

$(document).ready(function () {
	var elm2 = document.getElementsByClassName('card')[0];
	if(elm2 != null)	{ 		
		scrollTracking4();
	}
});






//RADIO
$(document).ready(function () {
	$.each($('.radiobuttons__item'), function (index, val) {
		if ($(this).find('input').prop('checked') == true) {
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function (event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	});
});



