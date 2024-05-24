//click-add
var ww = $(window).width();
if (ww > 768) {
	
	var initial_items1 = 6;
	var next_items1 = 3;
	
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
			$('.advertising-block__btn-plus').hide();
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
		if (itemsCount < itemsMax || initial_items1 >= itemsMax) {
			$('.advertising-block__btn-plus').hide();
		}
		$grid.isotope('layout');
	}

	$('.advertising-block__btn-plus').on('click', ;

	hideItems(initial_items1);
} else if (ww < 769) {
	$('.advertising-block__btn-plus').click(function () {
		$('.channels-block__item-hidden:hidden').eq(0).show(300);
		$('.channels-block__item-hidden:hidden').length < 1 ? $('.advertising-block__btn-plus').hide() : false;
	});
}
