/* AOne common tag */
"use strict";
!function(e,r,t,a){if(!e.a1tracker){var n=e.a1tracker={};n.VERSION="v0.6.5",n.queue=n.queue||[];for(var s=0;s<t.length;s++){var u=t[s];n[u]=n[u]||function(e){return function(){for(var r=arguments.length,t=Array(r),a=0;a<r;a++)t[a]=arguments[a];n.queue.push({name:e,arguments:t.slice()})}}(u)}var c=r.createElement("script"),i=r.getElementsByTagName("script")[0];c.async=!0,c.src="//img.ak.impact-ad.jp/ut/a1/tracking.min.js",i.parentNode.insertBefore(c,i)}}(window,document,["ready","send","sendEvent","setParams","initParams","sendCustomerId","getSegments","getUserId"]);
/* F1H DMP Plugin(AOne) */
(function(w){
  /* AOne owner id hash */
  var a1_id = 'bb5e8db7c2720d69';
  /* AOne owner id hash */
  var f1h_lib = '__ASL__';
  var f1h_cb = function(error, data) {
    if (!error) {
      var adProvider = w[f1h_lib];
      if (adProvider && typeof adProvider['processDmp'] === 'function') adProvider['processDmp'].call(w, data.segments);
    }
  };

  /* modified Anoe sample code */
  if (a1tracker.completeDcCall) {
    a1tracker.getSegments(a1_id, f1h_cb);
  } else {
    a1tracker.send(a1_id, f1h_cb);
    a1tracker.completeDcCall = true;
  }
})(window);', 
		'error_text': 'Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu.',
		'no_more_text': 'Keine weiteren Galerien & Videos gefunden.',
		
		'sliderbox' : 'cbsiSliderbox',
		'boxElement' : 'cbsiSliderbox',
		'currentPage': 1,
		'baseURL': null
	};
	
	// Initialize a single Carousel
	var initSliderBox = function(){
    	var currentSliderBox = this;
    	
    	if($.data(this, options.sliderbox).initialized === true){
    		return true;
    	}
    	
   		$.data(this, options.sliderbox).navNext = $(this).find($.data(this, options.sliderbox).selector_nav_next);
   		$.data(this, options.sliderbox).navPrev = $(this).find($.data(this, options.sliderbox).selector_nav_prev);
   		$.data(this, options.sliderbox).pages = $(this).find($.data(this, options.sliderbox).selector_nav_page);
		$.data(this, options.sliderbox).numPages = $.data(this, options.sliderbox).pages.length;
		
		$($.data(this, options.sliderbox).navNext).parent().css('display', '');
		
		var counter = 1;
		$.data(this, options.sliderbox).pages.each(function(){
			var currentCount = counter
			$(this).addClass('ajaxPage' + currentCount);
			$(this).click(function(){publicMethods.gotoPage.apply(currentSliderBox, [event, currentCount]);});
			
			if($(this).hasClass($.data(currentSliderBox, options.sliderbox).class_nav_page_selected) === true){
				$.data(currentSliderBox, options.sliderbox).currentPage = currentCount;
			}
			counter++;
		});
		
		$.data(this, options.sliderbox).navNext.click(function(event){publicMethods.gotoPage.apply(currentSliderBox, [event, $.data(currentSliderBox, options.sliderbox).currentPage+1]);});
		$.data(this, options.sliderbox).navPrev.click(function(event){publicMethods.gotoPage.apply(currentSliderBox, [event, $.data(currentSliderBox, options.sliderbox).currentPage-1]);});
		
		$.data(this, options.sliderbox).slider = $(this).find($.data(this, options.sliderbox).selector_slider);
		
		$.data(this, options.sliderbox).content = [];
		$.data(this, options.sliderbox).content[1] = $(this).find($.data(this, options.sliderbox).selector_slider_items)[0];
		$.data(this, options.sliderbox).content[2] = $(this).find($.data(this, options.sliderbox).selector_slider_items)[1]; 
		$.data(this, options.sliderbox).content[3]  =  $(this).find($.data(this, options.sliderbox).selector_slider_items)[2];
		
		$.data(this, options.sliderbox).contentWidth = $($.data(this, options.sliderbox).content[1]).width();
		
		$.data(this, options.sliderbox).slider.append($.data(this, options.sliderbox).content[2]);
		$.data(this, options.sliderbox).slider.prepend($.data(this, options.sliderbox).content[3]);
		
		$.data(this, options.sliderbox).slider.css('left', ($.data(this, options.sliderbox).contentWidth*-1) );
		
    	$.data(this, options.sliderbox).initialized  = true;
	}
	
	var publicMethods = {
		// Init the sliderboxs on the page	
		init: function(newOptions){ 
			this.each(function(){
				options = $.extend({}, options, newOptions);
				$.data(this, options.sliderbox, $.extend({}, $.data(this, options.sliderbox) || options) );
				initSliderBox.apply(this);
			});
			return this;
		},
		
		gotoPage: function(event, pageNum){
			var currentSliderBox = this;
			var currentTarget = null
			if(typeof event == 'object'){
				try{
					event.preventDefault();
					event.stopPropagation();
				} catch(e){
					// do Nothin
				}
				currentTarget = event.target;
			}
			
			if($.data(this, options.sliderbox).running === true)
				return false;
				
			$.data(this, options.sliderbox).running = true;
			
			var nextPage = pageNum;
			if(isNaN(pageNum)){
				nextPage = 1;	
			}
			
			if(nextPage < 1){
				nextPage = $.data(currentSliderBox, options.sliderbox).numPages;
			}
			else if(nextPage > $.data(currentSliderBox, options.sliderbox).numPages){
				nextPage = 1;
			}
			
			if(nextPage < $.data(currentSliderBox, options.sliderbox).currentPage){
				direction = 'right';		
			}
			else{
				direction = 'left';
			}
			
			if($(currentTarget).hasClass( $.data(currentSliderBox, options.sliderbox).class_nav_next) === true){
				direction = 'left';
			}
			if($(currentTarget).hasClass( $.data(currentSliderBox, options.sliderbox).class_nav_prev) === true){
				direction = 'right';
			}
			
			var pages = [1,2,3];
			var key = pages.indexOf(nextPage);
			pages.splice(key, 1);
			var key = pages.indexOf($.data(this, options.sliderbox).currentPage);
			pages.splice(key, 1);
			prevPage = pages.pop();
			
			if(direction == 'left'){
				$.data(this, options.sliderbox).slider.prepend($.data(this, options.sliderbox).content[prevPage]);
				$.data(this, options.sliderbox).slider.append($.data(this, options.sliderbox).content[nextPage]);
				
				$.data(currentSliderBox, options.sliderbox).slider.animate({
					'left': (-2*($.data(currentSliderBox, options.sliderbox).contentWidth +1))
					}, 
					$.data(currentSliderBox, options.sliderbox).transition_time,
					function(){
						$.data(currentSliderBox, options.sliderbox).slider.empty().append($.data(currentSliderBox, options.sliderbox).content[prevPage], $.data(currentSliderBox, options.sliderbox).content[nextPage]);
						$.data(currentSliderBox, options.sliderbox).slider.css('left', ($.data(currentSliderBox, options.sliderbox).contentWidth*-1));
						$.data(currentSliderBox, options.sliderbox).currentPage = nextPage;
						$.data(currentSliderBox, options.sliderbox).pages.removeClass('on');
						$.data(currentSliderBox, options.sliderbox).pages.eq( ($.data(currentSliderBox, options.sliderbox).currentPage-1) ).addClass('on');
						$.data(currentSliderBox, options.sliderbox).running = false;
					}
				);
			}
			
			if(direction == 'right'){
				$.data(this, options.sliderbox).slider.prepend($.data(this, options.sliderbox).content[nextPage]);
				$.data(this, options.sliderbox).slider.append($.data(this, options.sliderbox).content[prevPage]);
				
				$.data(currentSliderBox, options.sliderbox).slider.animate({
					'left': 0
					}, 
					$.data(currentSliderBox, options.sliderbox).transition_time,
					function(){
						$.data(currentSliderBox, options.sliderbox).slider.empty().append($.data(currentSliderBox, options.sliderbox).content[prevPage],$.data(currentSliderBox, options.sliderbox).content[nextPage]);
						$.data(currentSliderBox, options.sliderbox).slider.css('left', ($.data(currentSliderBox, options.sliderbox).contentWidth*-1));
						$.data(currentSliderBox, options.sliderbox).currentPage = nextPage;
						$.data(currentSliderBox, options.sliderbox).pages.removeClass('on');
						$.data(currentSliderBox, options.sliderbox).pages.eq( ($.data(currentSliderBox, options.sliderbox).currentPage-1) ).addClass('on');
						$.data(currentSliderBox, options.sliderbox).running = false;
					}
				);	
			}
		}
	}

	$.fn.nmiSliderBox = function(method){
		var currentObjects = $(this);
		
		// Method calling logic
		if ( publicMethods[method] ) {
			return publicMethods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return publicMethods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.cbsiCarousel' );
		}
	}

})(jQuery);