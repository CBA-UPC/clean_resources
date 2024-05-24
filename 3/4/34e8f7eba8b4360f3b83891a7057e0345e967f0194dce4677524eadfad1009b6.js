/*
	Alphonso secondary scripts
	may require dependencies
	2017
*/

jQuery(document).ready(function ($) {
	
	var addChromeFixToSlider = 

	var resizeShiftsHomepageSlides = _.throttle(function() {
	  if (960 > window.document.documentElement.clientWidth){
		var elli = $( '.slides > li.flex-active-slide' );
		var difw = elli.find("img").width() - elli.width();
		console.log('diff: '+difw);
		$( '.slides > li' ).each(function(){
			var theimg = $(this).find("img");
			/* var difw = theimg.width() - $(this).width(); */
			if (difw > 0 && (! $(this).hasClass('slide-886') )) {
				theimg.css('left', '-' + difw/2 + 'px')
			} else {
				theimg.css('left','');
			}
		});
	  } else {
	    $('.slides > li img').css('left','');
	  }
	}, 300);

	if (window.addEventListener) {
	    addEventListener('resize', resizeShiftsHomepageSlides, false);
	    addEventListener('load', resizeShiftsHomepageSlides, false);
	    addEventListener('load', addChromeFixToSlider, false);
	} else if (window.attachEvent) {
	    window.attachEvent('onresize', resizeShiftsHomepageSlides);
	    window.attachEvent('onload', resizeShiftsHomepageSlides);
	    window.attachEvent('onload', addChromeFixToSlider);
	} else {
	    window.onresize = resizeShiftsHomepageSlides;
	    window.onload = resizeShiftsHomepageSlides;
	    window.onload = addChromeFixToSlider;
	}

	
	$('.news--list .box h3 a').each(;
	
	// resource boxes each have one link - make the whole box a link
	$('.resource-item').each(function(){
		var linkEl = $(this).find("a");
		var theUrl = linkEl.attr("href");
		var isVideo = $(this).hasClass('video');
		var isFeaturedVideo = $(this).hasClass('featured-video');
		if ( theUrl && (! $(this).hasClass('nolink')) ) {
			$(this).css('cursor','pointer').on('click',function(e){
				e.preventDefault();
				if (isVideo || isFeaturedVideo) {
					linkEl.trigger("click");
				} else {
					window.location = theUrl;
				}
			});
		}
	});
	
});