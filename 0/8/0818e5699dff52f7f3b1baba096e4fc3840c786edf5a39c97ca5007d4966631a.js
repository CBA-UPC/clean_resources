try { 
	webengage.onReady(function() {
  webengage.webPersonalization.onOpen(function(data) {
    if (data.webPersonalizationId === '~daj2ia') {
      console.log("data", data);

      function scrollCarousel() {
        var viewport = document.querySelector('.carousel__viewport');
        var slideWidth = viewport.scrollWidth / (viewport.childElementCount || 1);
        var scrollDuration = 2000; // Adjust the duration as needed

        function scrollToNext() {
          var currentScroll = viewport.scrollLeft;
          var nextScroll = currentScroll + slideWidth;

          if (nextScroll >= viewport.scrollWidth - viewport.offsetWidth) {
            //  last slide cautiously
            viewport.scrollTo({
              left: viewport.scrollWidth - viewport.offsetWidth,
              behavior: 'smooth'
            });

            // scrolling back to the beginning
            setTimeout( scrollDuration);
          } else {
            viewport.scrollBy({
              left: slideWidth,
              behavior: 'smooth'
            });
          }
        }

        setInterval(scrollToNext, scrollDuration); //  scrolling
      }

      scrollCarousel();
    }
  });
});

 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~a61h7di');
	 }
 }
