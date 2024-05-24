(function ($) {

letroUgcSet.prototype.setMediaDisplay = function(data){
  var self = this;
  if( self.settings.nextPage ){
    self.settings.wrapper.addClass('letroUgcsetHasNext');
  }
}

})($letroUgcsetJQ);orEach(function(entry) {
        if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        if (typeof lazyImage.dataset.srcset === "undefined") {
        }else{
            lazyImage.srcset = lazyImage.dataset.srcset;
        }
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
        }
    });
    });

    lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
    });
} else {
    // Possibly fall back to a more compatible method here
}