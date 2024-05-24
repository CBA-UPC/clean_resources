//click-add
var ww = $(window).width();
if (ww > 768) {
	
	var initial_items = 6;
	var next_items = 2;
	
	var $grid = $('.channels-block__items').isotope({
		itemSelector: '.channels-block__item',
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
			$('.channels-block__btn-plus').hide();
		}
		$grid.isotope('layout');
	}

	function hideItems(pagination) {
		var itemsMax = $('.channels-block__item').length;
		var itemsCount = 0;
		$('.channels-block__item').each(function () {
			if (itemsCount >= pagination) {
				$(this).addClass('visible_item');
			}
			itemsCount++;
		});
		if (itemsCount < itemsMax || initial_items >= itemsMax) {
			$('.channels-block__btn-plus').hide();
		}
		$grid.isotope('layout');
	}

	$('.channels-block__btn-plus').on('click', ;

	hideItems(initial_items);
} else if (ww < 769) {
	$('.channels-block__btn-plus').click(function () {
		$('.channels-block__item-hidden:hidden').eq(0).show(300);
		$('.channels-block__item-hidden:hidden').length < 1 ? $('.channels-block__btn-plus').hide() : false;
	});
}


$(".channels-block__btn-show").click(;
$(".card__body-close").click(;




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

