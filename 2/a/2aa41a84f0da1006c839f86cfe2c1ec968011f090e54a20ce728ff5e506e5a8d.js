try { 
	webengage.onReady(function () {
  webengage.webPersonalization.onOpen(function (data) {
    if (data.webPersonalizationId === '~3g084b'|| data.webPersonalizationId === '~13srkjp' || data.webPersonalizationId === 'mi1fs0' || data.webPersonalizationId === '9ff3r6' || data.webPersonalizationId === '~daj2ia') {
        //console.log("data",data);
      webengage.util.withWeJquery(function () {
            var carouselInner = document.querySelector("#caro-inner");
            var carouselItems = document.querySelectorAll("#caro-item");
            var isPaused = false;
            var currentItemIndex = 0;
            var interval;
        //console.log('carouselInner', carouselInner);
        //console.log('carouselItems', carouselItems);
//console.log("Beforefunction", carouselInner);
            function updateCarousel() {
                carouselInner.style.transform = "translateX(-" + currentItemIndex * 100 + "%)";
               //console.log("Infunction", carouselInner);
            }
//console.log("Outfunction", carouselInner);
            function showNextItem() {
                currentItemIndex++;
                if (currentItemIndex >= carouselItems.length) {
                    currentItemIndex = 0;
                }
                updateCarousel();
            }
        //console.log("updateCarousel", updateCarousel());

            function showPreviousItem() {
                currentItemIndex--;
                if (currentItemIndex < 0) {
                    currentItemIndex = carouselItems.length - 1;
                }
                updateCarousel();
            }

            function pauseCarousel() {
                if (!isPaused) {
                    clearInterval(interval);
                    isPaused = true;
                } else {
                    interval = setInterval(showNextItem, 3000); // Change slide every 5 seconds
                    isPaused = false;
                }
            }
            carouselInner.addEventListener("mouseleave", showNextItem);
            carouselInner.addEventListener("mouseenter", pauseCarousel);

            interval = setInterval(showNextItem, 3000); // Change slide every 5 seconds
      });
       }

});

       
});
 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', 'd8h61ac');
	 }
 }
