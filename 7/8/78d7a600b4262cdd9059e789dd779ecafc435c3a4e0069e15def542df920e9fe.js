try { 
	webengage.onReady(function () {
  webengage.webPersonalization.onOpen(function (data) {
    if (data.webPersonalizationId === '~2o260d6') {
        console.log("data",data);
 // window.addEventListener("DOMContentLoaded", function (data) {
      webengage.util.withWeJquery(function () {
            var carouselInner = document.querySelector("body > div:nth-child(9) > div > div.content-area > div.stroy-870 > div > div.text-formatted.field.field--name-body.field--type-text-with-summary.field--label-hidden.field__item > div:nth-child(6) > div > div > div > div.caro1 > div");
            var carouselItems = document.querySelectorAll("body > div:nth-child(9) > div > div.content-area > div.stroy-870 > div > div.text-formatted.field.field--name-body.field--type-text-with-summary.field--label-hidden.field__item > div:nth-child(6) > div > div > div > div.caro1 > div > div");
            var isPaused = false;
            var currentItemIndex = 0;
            var interval;
        console.log('carouselInner', carouselInner);
        console.log('carouselItems', carouselItems);
console.log("Beforefunction", carouselInner);
            function updateCarousel() {
                carouselInner.style.transform = "translateX(-" + currentItemIndex * 100 + "%)";
               console.log("Infunction", carouselInner);
            }
console.log("Outfunction", carouselInner);
            function showNextItem() {
                currentItemIndex++;
                if (currentItemIndex >= carouselItems.length) {
                    currentItemIndex = 0;
                }
                updateCarousel();
            }
        console.log("updateCarousel", updateCarousel());

            function showPreviousItem() {
                currentItemIndex--;
                if (currentItemIndex < 0) {
                    currentItemIndex = carouselItems.length - 1;
                }
                updateCarousel();
            }

            interval = setInterval(showNextItem, 3000); // Change slide every 3 seconds
     //  });
      });
       }

});

       
});


 } catch(e) { 
 	if (e instanceof Error) { 
		var data = e.stack || e.description;
		data = (data.length > 900 ? data.substring(0, 900) : data);
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '~5bjla6f');
	 }
 }
