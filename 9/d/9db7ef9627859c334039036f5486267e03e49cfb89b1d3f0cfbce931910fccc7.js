function elseInfo(url,id,morelistid){
	$.get(url, function(data) {
		if (morelistid==undefined) morelistid = "";
		document.getElementById('morelist' + morelistid).innerHTML += data;
		$(".morebutton_"+morelistid+id).remove(); //css('display','none');
	});
	return false;
}

$(function() {

	var loadAds = function() {
		var blocks = window['utroCallbacks'];
		if (blocks) {
			while (true) {
				var block = blocks.pop();
				if (block) {
					block();
				} else {
					break;
				}
			}
		}
	};
	$(window).scroll(loadAds);

	// lightbox.option({
 //       'wrapAround': true,
 //       'disableScrolling': true
 //    });
    
	(function() {
		var $sliderNews = $(".slider-news");

		if(!$sliderNews.length) {
			return;
		}

		$sliderNews.each(function() {
			var $root = $(this),
				$prev = $(".slider-news__prev", $root),
				$next = $(".slider-news__next", $root),
				$ul   = $(".slider-news__list", $root),
				slider,
				sliderWidth;

		    sliderWidth = $root.outerWidth();
			slider = $ul.bxSlider(getParams(sliderWidth, $prev, $next));

		    $(window).on('resize', function() {
		    	var w = $root.outerWidth();
		    	
		        if(sliderWidth != w) {
		          	sliderWidth = w;
		          	slider.reloadSlider(getParams(sliderWidth, $prev, $next));
		        }
		    });
		});

		function getParams(width, $prev, $next) {
			var qnt = 3;

			if(Modernizr.mq('(min-width: 1260px)')) {
				qnt = 4;
			}

			var w = Math.ceil(width / qnt);

			return {
				prevSelector: $prev,
				nextSelector: $next,
				prevText: '',
				nextText: '',

				minSlides: qnt,
				maxSlides: qnt,
				moveSlides: 1,
				slideMargin: 0,
				slideWidth: w,

				infiniteLoop: !1,
				hideControlOnEnd: !0,
				touchEnabled: false,
				
				pager: !1
			}
		}
	}());
	
	(function() {
		$('.js-mediator-article img:not(.sys_img)').each(function() {
		    var img = $(this);
			if (img.parents("figure")[0] || !img.attr("alt")) return true;
			
		    img.wrap( "<figure class='news__media'></figure>" );
		    img.parent().append("<figcaption>" + img.attr("alt") + "</figcaption>");
		});
	}());

	(function() {
		var $sliderNews = $(".slider-short-news");

		if(!$sliderNews.length) {
			return;
		}

		var $prev = $(".slider-short-news__prev"),
			$next = $(".slider-short-news__next"),
			$list = $("._slider", $sliderNews),
			$width= $(".slider-short-news__content"),
			slider,
			sliderWidth;

	    sliderWidth = $width.outerWidth();
		slider = $list.bxSlider(getParams(sliderWidth, $prev, $next));

	    $(window).on('resize', function() {
	    	var w = $width.outerWidth();
	    	
	        if(sliderWidth != w) {
	          	sliderWidth = w;
	          	slider.reloadSlider(getParams(sliderWidth, $prev, $next));
	        }
	    });

		function getParams(width, $prev, $next) {
			var qnt = 2,
				margin = 20;

			if(Modernizr.mq('(min-width: 1260px)')) {
				qnt = 3;
				margin = 35;
			}
			// } else if (Modernizr.mq('(min-width: 1441px)')) {
			// 	qnt = 4;
			// 	margin = 72;
			// }

			var w = Math.ceil(width / qnt);

			return {
				prevSelector: $prev,
				nextSelector: $next,
				prevText: '',
				nextText: '',

				minSlides: qnt,
				maxSlides: qnt,
				moveSlides: 1,
				slideMargin: margin,
				slideWidth: w,

				infiniteLoop: !1,
				hideControlOnEnd: !0,
				touchEnabled: false,

				pager: !1
			}
		}
	}());

	$(".toggle-search").on("click", function(e) {
		e.preventDefault();

		var $search = $(".header__search"),
			$input = $search.find(".header__search-input");

		if($search.hasClass("show-form")) {
			if($input.val()) {
				$search.find("form").submit();
			} else {
				$search.removeClass("show-form");
			}
		} else {
			$search.addClass("show-form");
			$input.focus();
		}
	});

	// $(".header__search-input").on("blur", function() {

	// });

	$(".toggle-drop-navi").on("click", function(e) {
		e.preventDefault();
		if (!$(".header").hasClass("show-drop-navi")) {
			var closeMenu = function() {
				$(".header").removeClass("show-drop-navi");
				$(window).off("click", closeMenu);
			}
			$(window).on("click", closeMenu);
		}

		$(".header").toggleClass("show-drop-navi");
		return false;
	});
	
	(function() {
		var $pluso = $(".fly-social-wrap");

		if(!$pluso.length) {
			return;
		}

		var diff     = $(".header").outerHeight() + 8,
			top1     = $pluso.offset().top,
			top2     = $(".stop-fly").offset().top,
			height   = Math.max($(".fly-social").outerHeight(), 326),
			startFly = top1 - diff,
			stopFly  = top2 - diff - height,
			paddingTop = top2 - top1 - height;

		$(window)
			.on("load resize", function() {
				diff     = $(".header").outerHeight() + 8;
				top1     = $pluso.offset().top;
				top2     = $(".stop-fly").offset().top;
				height   = Math.max($(".fly-social").outerHeight(), 326);
				startFly = top1 - diff;
				stopFly  = top2 - diff - height;
				paddingTop = top2 - top1 - height;
			}).on("scroll", function() {
				var st = $(window).scrollTop();

				if(st > startFly && st < stopFly) {
					$pluso.addClass("start-fly");
					$pluso.removeClass("stop-fly");
					$pluso.css("padding-top", 0);
				} else if (st >= stopFly) {
					$pluso.removeClass("start-fly");
					$pluso.addClass("stop-fly");
					$pluso.css("padding-top", paddingTop);
				} else {
					$pluso.removeClass("start-fly stop-fly");
					$pluso.css("padding-top", 0);
				}
			});
	}());
	
	(function() {
		var $flyAside = $(".layout-two-column__aside");

		if(!$flyAside.length) {
			return;
		}

		var $root, $flyElem, winHeight, rootHeight, flyHeight, startFly, stopFly, diff;
		setParams();

		$(window)
			.on("load resize", setParams)
			.on("scroll", function() {
				var st = $(window).scrollTop();

				if(st >= startFly && st < stopFly) {
					$flyAside.addClass("start-fly");
					$flyAside.removeClass("stop-fly");
					$flyElem.css("top", "auto");
				} else if (st >= stopFly) {
					$flyAside.removeClass("start-fly");
					$flyAside.addClass("stop-fly");
					$flyElem.css("top", diff);
				} else {
					$flyAside.removeClass("start-fly stop-fly");
					$flyElem.css("top", "auto");
				}
			});

		function setParams() {
			$root    = $(".layout-two-column");
			$flyElem = $("._inner-fly");
			winHeight= $(window).height();
			rootHeight = $root.outerHeight();
			flyHeight  = $flyElem.outerHeight();
			startFly = $flyAside.offset().top + flyHeight - winHeight + 30;
			stopFly  = $root.offset().top + rootHeight - winHeight;
			diff     = rootHeight - flyHeight - 30;
		}
	}());
});

function headerBig () {
	$('.header').css('height', '76px');

    $('.header__logo').css('line-height', '68px');

    $('.header__logo img').css('height', '46px');

    $('.header__currency').css('height', '68px');

    $('.header__currency li').css('line-height', '68px');
    $('.header__currency li').css('font-size', '20px');

    $('.header__search').css('height', '68px');
    $('.header__search').css('width', '68px');
    $('.header__search').css('margin-left', '10px');

    $('.header__search form').css('height', '64px');
    $('.header__search form').css('right', '66px');

    $('.header__search for input').css('line-height', '64px');
    $('.header__search for input').css('font-size', '20px');

    $('.header__search.show-form form').css('width', '250px');

    $('.header__drop-navi').css('font-size', '24px');

    $('.toggle-search').css('width', '64px');
    $('.toggle-search').css('height', '64px');

    $('.icon-search').css('height', '24px');
    $('.icon-search').css('width', '24px');
    $('.icon-search').css('background-size', '24px 24px');
    $('.icon-search').css('top', '3px');

    $('.toggle-drop-navi').css('height', '68px');
    $('.toggle-drop-navi').css('padding', '22px 20px');

    $('.toggle-drop-navi i').css('width', '36px');
    $('.toggle-drop-navi i').css('margin-top', '6px');

    $('.primary-nav').css('height', '68px');
    $('.primary-nav').css('font-size', '20px');
    $('.primary-nav').css('margin-left', '20px');

    $('.primary-nav li a').css('line-height', '68px');
    $('.primary-nav li a').css('padding', '0 20px');
    
    $('.toggle-drop-navi').css('background', 'url(/static/img/fifa/ball.png) no-repeat center !important');
};

function headerSmall () {
	$('.header').css('height', '48px');

    $('.header__logo').css('line-height', '40px');

    $('.header__logo img').css('height', '26px');

    $('.header__currency').css('height', '40px');

    $('.header__currency li').css('line-height', '40px');
    $('.header__currency li').css('font-size', '16px');

    $('.header__search').css('height', '40px');
    $('.header__search').css('width', '40px');
    $('.header__search').css('margin-left', '0');

    $('.header__search form').css('height', '36px');
    $('.header__search form').css('right', '38px');

    $('.header__search for input').css('line-height', '36px');
    $('.header__search for input').css('font-size', '16px');

    $('.header__search.show-form form').css('width', '220px');

    $('.header__drop-navi').css('font-size', '18px');

    $('.toggle-search').css('width', '36px');
    $('.toggle-search').css('height', '36px');

    $('.icon-search').css('height', '18px');
    $('.icon-search').css('width', '18px');
    $('.icon-search').css('background-size', '18px 18px');
    $('.icon-search').css('top', '0');

    $('.toggle-drop-navi').css('height', '40px');
    $('.toggle-drop-navi').css('padding', '0 12px');

    $('.toggle-drop-navi i').css('width', '19px');
    $('.toggle-drop-navi i').css('margin-top', '5px');

    $('.primary-nav').css('height', '40px');
    $('.primary-nav').css('font-size', '16px');
    $('.primary-nav').css('margin-left', '12px');

    $('.primary-nav li a').css('line-height', '40px');
    $('.primary-nav li a').css('padding', '0 15px');
    
    $('.toggle-drop-navi').css('background', 'url(/static/img/fifa/ball_small.png) no-repeat center');
};

$(document).ready(function () {
    var ctrl = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: 10,
        offset: 10
    })
    .addTo(ctrl)
    .on("progress", function (event) {
        //console.log(event);
        if (window.innerWidth >= 1341) {
            if (event.scrollDirection == 'REVERSE') {
            	$("#header-bar").removeClass("small");
            } else if (event.scrollDirection == 'FORWARD') {
            	$("#header-bar").addClass("small");
            }
        } else {
        	$("#header-bar").addClass("small");
        }
    });

	new ScrollMagic.Scene({
        duration: $(document).height(),
        offset: window.innerHeight/2
    })
    .addTo(ctrl)
    .on("progress", function (event) {
        //console.log(event);

        if (event.scrollDirection == 'REVERSE') {
            //$('#header-bar').css('display', 'block');
        } else if (event.scrollDirection == 'FORWARD') {
            //$('#header-bar').css('display', 'none');
        }
    });
	
	if ($("#wrap.brendpage")[0]) {
	    new ScrollMagic.Scene({
	        duration: 200,
	        offset: 0
	    })
	    .addTo(ctrl)
	    .on("progress", function (event) {
    		var top = 200 - $(window).scrollTop();
    		if (top < 0) top = 0;
    		$('#header-bar').css('top', top + "px");
	    });
	}
});