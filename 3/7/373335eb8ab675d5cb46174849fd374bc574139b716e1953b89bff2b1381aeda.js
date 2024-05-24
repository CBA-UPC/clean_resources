try { 
	webengage.onReady(function () {
  webengage.webPersonalization.onOpen(function (data) {
    if (data.webPersonalizationId === '~177ohdb' || data.webPersonalizationId === '~10l2bcp' || data.webPersonalizationId === '~qd5mr3' || data.webPersonalizationId === '~1afl601' || data.webPersonalizationId === '23piemc') {
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
	 	webengage.eLog(null, 'error', data, 'cwc-error','cwc', '3k9e69i');
	 }
 }
t-caption,.wp-playlist-item-meta{display:block;font-size:14px;line-height:1.5}.wp-playlist .mejs-container{margin:0;max-width:100%}.wp-playlist .mejs-controls .mejs-button button{outline:0}.wp-playlist-light{background:#fff;color:#000}.wp-playlist-dark{color:#fff;background:#000}.wp-playlist-caption{max-width:88%}.wp-playlist-item .wp-playlist-caption{text-decoration:none;color:#000;max-width:-webkit-calc(100% - 40px);max-width:calc(100% - 40px)}.wp-playlist-item-title{font-size:14px;line-height:1.5}.wp-playlist-item-album{font-style:italic}.wp-playlist-item-artist{font-size:12px;text-transform:uppercase}.wp-playlist-item-length{position:absolute;right:3px;top:0;font-size:14px;line-height:1.5}.rtl .wp-playlist-item-length{left:3px;right:auto}.wp-playlist-tracks{margin-top:10px}.wp-playlist-item{position:relative;cursor:pointer;padding:0 3px;border-bottom:1px solid #ccc}.wp-playlist-item:last-child{border-bottom:0}.wp-playlist-light .wp-playlist-caption{color:#333}.wp-playlist-dark .wp-playlist-caption{color:#ddd}.wp-playlist-playing{font-weight:700;background:#f7f7f7}.wp-playlist-light .wp-playlist-playing{background:#fff;color:#000}.wp-playlist-dark .wp-playlist-playing{background:#000;color:#fff}.wp-playlist-current-item{overflow:hidden;margin-bottom:10px;height:60px}.wp-playlist .wp-playlist-current-item img{float:left;max-width:60px;height:auto;margin-right:10px;padding:0;border:0}.rtl .wp-playlist .wp-playlist-current-item img{float:right;margin-left:10px;margin-right:0}.wp-audio-playlist .me-cannotplay span{padding:5px 15px}