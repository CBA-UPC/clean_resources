/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),window,;

/*!
 * Packery PACKAGED v2.1.1
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!window,,window,,this,,window,,window,,window,,window,,window,,window,,window,,window,;

jQuery(document).ready(function(){
	if (jQuery(window).width() >= 768) {
		var $grid = jQuery('.grid').imagesLoaded( ;
	}

	jQuery(window).on('resize', function (event) {
		var $window = jQuery(window);

		if ($window.width() < 768) {
			var $masonryTarget = $('.packery-container'),
			$hasMasonry = $masonryTarget.data('masonry') ? true : false;

			if ($masonryTarget.length > 0 && $hasMasonry) {
				$masonryTarget.packery('destroy');
			}
		} else {
			jQuery('.grid').packery({
				itemSelector: '.art',
				gutter: 0,
			});
		}
	});
});
