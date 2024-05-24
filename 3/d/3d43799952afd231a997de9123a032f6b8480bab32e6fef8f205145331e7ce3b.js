jQuery(document).ready(;

var revealer = document.querySelectorAll('.anim');
var getViewportSize = 
var getCurrentScroll = 
var getElemInfo = function(elem) {
    var offsetTop = 0;
    var offsetLeft = 0;
    var offsetHeight = elem.offsetHeight;
    var offsetWidth = elem.offsetWidth;

    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
        if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
        }
    } while ((elem = elem.offsetParent) !== null);

    return {
        top: offsetTop,
        left: offsetLeft,
        height: offsetHeight,
        width: offsetWidth
    };
};
var checkVisibility = function(elem) {
    var viewportSize = getViewportSize();
    var currentScroll = getCurrentScroll();
    var elemInfo = getElemInfo(elem);
    var spaceOffset = 0.2;
    var elemHeight = elemInfo.height;
    var elemWidth = elemInfo.width;
    var elemTop = elemInfo.top;
    var elemLeft = elemInfo.left;
    var elemBottom = elemTop + elemHeight;
    var elemRight = elemLeft + elemWidth;

    var checkBoundaries = function() {
        // Defining the element boundaries and extra space offset
        var top = elemTop + elemHeight * spaceOffset;
        var left = elemLeft + elemWidth * spaceOffset;
        var bottom = elemBottom - elemHeight * spaceOffset;
        var right = elemRight - elemWidth * spaceOffset;

        // Defining the window boundaries and window offset
        var wTop = currentScroll.y + 0;
        var wLeft = currentScroll.x + 0;
        var wBottom = currentScroll.y - 0 + viewportSize.height;
        var wRight = currentScroll.x - 0 + viewportSize.width;

        // Check if the element is within boundary
        return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
    };

    return checkBoundaries();
};
var toggleElement = function() {
    for (var i = 0; i < revealer.length; i++) {
        if (checkVisibility(revealer[i])) {
        	if (revealer[i].classList.contains('revealed')) {
			} else {
	            revealer[i].classList.add('revealed');
    	        var $animcanvas = document.createElement("canvas");
	            revealer[i].getElementsByClassName('anim_wrapper')[0].appendChild($animcanvas);
	            if (revealer[i].classList.contains('anim3')) {
    	          window.drawNubs(3, $animcanvas.getContext('2d'));
    	        }
	            if (revealer[i].classList.contains('anim4')) {
    	          window.drawNubs(4, $animcanvas.getContext('2d'));
    	        }
	            if (revealer[i].classList.contains('anim5')) {
    	          window.drawNubs(5, $animcanvas.getContext('2d'));
    	        }
	            if (revealer[i].classList.contains('anim6')) {
    	          window.drawNubs(6, $animcanvas.getContext('2d'));
    	        }
	            if (revealer[i].classList.contains('anim7')) {
    	          window.drawNubs(7, $animcanvas.getContext('2d'));
    	        }
	            if (revealer[i].classList.contains('anim8')) {
    	          window.drawNubs(8, $animcanvas.getContext('2d'));
    	        }
    	    }
        } else {
            var cnw = revealer[i].getElementsByClassName('anim_wrapper');
        	var cnv = cnw[0].getElementsByTagName('canvas');
        	if (cnv.length) { cnw[0].removeChild(cnv[0]); }
            revealer[i].classList.remove('revealed');
        }
    }
};
var scrollHandler = _.throttle(function() {
    requestAnimationFrame(toggleElement);
}, 300);

var resizeHandler = _.throttle( 300);

if (window.addEventListener) {
    addEventListener('scroll', scrollHandler, false);
    addEventListener('resize', resizeHandler, false);
} else if (window.attachEvent) {
    window.attachEvent('onscroll', scrollHandler);
    window.attachEvent('onresize', resizeHandler);
} else {
    window.onscroll = scrollHandler;
    window.onresize = resizeHandler;
}


	function onHomePageSlideChanged(slider) {
		jQuery('#anim8').remove();
		var activeSlide = jQuery(slider).find(".flex-active-slide");
		var $anim8 = jQuery('<canvas id="anim8" width="100" height="60"></canvas>');
		activeSlide.append($anim8);
		window.drawNubs(8, document.getElementById('anim8').getContext('2d'))
	}

	CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius, fill, stroke) {
		if (typeof stroke == "undefined") { stroke = true; }
		if (typeof radius === "undefined") { radius = 5; }
		this.beginPath();
		this.moveTo(x + radius, y);
		this.lineTo(x + width - radius, y);
		this.quadraticCurveTo(x + width, y, x + width, y + radius);
		this.lineTo(x + width, y + height - radius);
		this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		this.lineTo(x + radius, y + height);
		this.quadraticCurveTo(x, y + height, x, y + height - radius);
		this.lineTo(x, y + radius);
		this.quadraticCurveTo(x, y, x + radius, y);
		this.closePath();
		if (stroke) { this.stroke(); }
		if (fill) { this.fill(); }
	};

	function drawNubs(numNubs, ctx){
		// populate the array with heights
		var data = [];
		data.nh = [];
		data.nc = [];
		for (var i = 0; i < numNubs; i++) {
			data.nc[i] = '#CC0500';
			switch(i) {
				case 2: data.nc[i] = '#FF6A00'; break;
				case 0:
				case 5:
				case 7: data.nc[i] = '#FF9E00'; break;
			}
			data.nh[i] = (Math.random() * 40);
		}
	
		//ctx.strokeStyle='white';
		ctx.lineWidth=0;
		ctx.save();
		ctx.clearRect(0,0,numNubs*12.5,60);

		// count to numNubs
		for (var i = 0; i < numNubs; i++) {
			var j = 0;
			setTimeout(function(){
				if (j < i){
					drawSingle(j, ctx, data);
				}
				j++;
			}, 180 * i);
		}
		ctx.restore();	
	}

	function drawSingle(n,ctx,data){
		ctx.fillStyle = data.nc[n];
		var k = 0;
		for (var k=0; k<12; k++) {
			h = data.nh[n] / 12 * k;
			ctx.clearRect(11*n,0,12,60);
			ctx.roundRect(11*n,50-h,8,10+h,3,true,0);
		}
	}