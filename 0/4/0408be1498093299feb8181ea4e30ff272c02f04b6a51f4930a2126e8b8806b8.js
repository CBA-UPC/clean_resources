(function ($) {
	'use strict';
	/**
	 * Progress Bar Init
	 */

	//Testimonials
	var check_rtl = (jQuery("body").css('direction') === "rtl");

	jQuery('.c-testimonials').each(function () {
		var $this = jQuery(this);
		$this.imagesLoaded(function () {

			var testimonialsId = $this.attr('data-id');
			var dataBullets = $this.attr('data-bullets');
			var dataAutoplay = $this.attr('data-autoplay');
			var dataArrows = $this.attr('data-arrows');
			var dataStyle = $this.attr('data-style');
			var bm_slidesToShow = $this.attr('data-item-per-row');
			var breakpoint_1024_slidesToShow = 3;
			var breakpoint_768_slidesToShow = 2;
			var breakpoint_480_slidesToShow = 1;

			dataBullets = parseInt(dataBullets);
			dataAutoplay = parseInt(dataAutoplay);
			dataAutoplay = parseInt(dataAutoplay);
			bm_slidesToShow = parseInt(bm_slidesToShow);

			if (dataStyle != '1') {
				bm_slidesToShow = 1;
				breakpoint_1024_slidesToShow = 1;
				breakpoint_768_slidesToShow = 1;
				breakpoint_480_slidesToShow = 1;
			} else {
				if (bm_slidesToShow == 1) {
					breakpoint_1024_slidesToShow = 1;
					breakpoint_768_slidesToShow = 1;
					breakpoint_480_slidesToShow = 1;
				} else if (bm_slidesToShow == 2) {
					breakpoint_1024_slidesToShow = 2;
					breakpoint_768_slidesToShow = 2;
					breakpoint_480_slidesToShow = 1;
				} else {
					breakpoint_1024_slidesToShow = 1;
					breakpoint_768_slidesToShow = 1;
					breakpoint_480_slidesToShow = 1;
				}
			}


			var testimonialsInit = '#' + testimonialsId + ' ' + '.block-group';

			jQuery(testimonialsInit).slick({

				lazyLoad: 'ondemand',
				fade: bm_slidesToShow == 1 ? true : false,
				cssEase: 'ease-out',
				dots: dataBullets == 1 ? true : false,
				autoplay: dataAutoplay == 1 ? true : false,
				arrows: dataArrows == 1 ? true : false,
				autoplaySpeed: 5000,
				infinite: true,
				speed: 300,
				rtl: true,
				slidesToShow: bm_slidesToShow,
				slidesToScroll: 1,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: parseInt(breakpoint_1024_slidesToShow),
							slidesToScroll: parseInt(breakpoint_1024_slidesToShow),
							infinite: true,
							dots: true,
							fade: false,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: parseInt(breakpoint_768_slidesToShow),
							slidesToScroll: parseInt(breakpoint_768_slidesToShow),
							fade: false,
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: parseInt(breakpoint_480_slidesToShow),
							slidesToScroll: parseInt(breakpoint_480_slidesToShow),
							fade: false,
						}
					}
				]
			});
		});
	});

	var ct_progress_items = [];

	jQuery(document).ready(function () {
		//Progress

		if (typeof ProgressBar !== 'undefined') {
			jQuery('.c-progress-item').each(function () {
				var $this = jQuery(this);
				var progressItemID = $this.attr('data-id');
				var ProgressType = $this.attr('data-type');
				var ProgressPercent = $this.attr('data-percent');
				var valueText = $this.attr('data-value-text');
				var textColor = $this.attr('data-text-color');
				var bgColor = $this.attr('data-bg-color');
				var fontFamily = $this.attr('data-font-family');
				var fontSize = $this.attr('data-font-size');
				var bm_trailColor = $this.attr('data-trail-color');
				var bm_trailWidth = $this.attr('data-trail-width');
				var bm_strokeWidth = $this.attr('data-stroke-width');
				var bm_duration = $this.attr('data-duration');
				bm_trailWidth = parseInt(bm_trailWidth);
				bm_strokeWidth = parseInt(bm_strokeWidth);


				if (bm_trailColor == '') {
					if (ProgressType === 'bar') {
						bm_trailColor = '#eee';
					} else {
						bm_trailColor = '#32211c';
					}
				}

				if (fontSize == '') {
					if (ProgressType === 'bar') {
						fontSize = "14px";
					} else {
						fontSize = "36px";
					}
				}

				if (!bm_trailWidth || bm_trailWidth == '') {
					if (ProgressType === 'bar') {
						bm_trailWidth = 0.1;
					} else {
						bm_trailWidth = 8;
					}
				}

				if (!bm_strokeWidth || bm_strokeWidth == '') {
					if (ProgressType === 'bar') {
						bm_strokeWidth = 2;
					} else {
						bm_strokeWidth = 8;
					}
				}

				if (bm_duration == '') {
					if (ProgressType === 'bar') {
						bm_duration = 1400;
					} else {
						bm_duration = 2000;
					}
				}

				var progressInit;

				progressItemID = document.getElementById(progressItemID);
				var doProgress = $(progressItemID);

				if (progressItemID) {

					if (ProgressType === 'bar') {
						progressInit = new ProgressBar.Line(progressItemID, {
							color: bgColor,
							strokeWidth: bm_strokeWidth,
							trailWidth: bm_trailWidth,
							trailColor: bm_trailColor,
							easing: 'easeInOut',
							duration: bm_duration,
							svgStyle: {
								width: '100%',
								height: '100%'
							},

							text: {
								style: {
									color: textColor,
									position: 'absolute',
									right: '0',
									top: '30px',
									padding: 0,
									margin: 0,
									transform: null
								},
								autoStyleContainer: false
							},

							from: {
								color: bgColor,
								width: bm_strokeWidth,
							},
							to: {
								color: bgColor,
								width: bm_strokeWidth,
							},

							step: function (state, bar) {
								bar.setText(Math.round(bar.value() * 100));
							}

						});

						progressInit.path.style.strokeLinecap = 'round';

					} else if (ProgressType === 'circle') {
						progressInit = new ProgressBar.Circle(progressItemID, {


							color: textColor,
							strokeWidth: bm_strokeWidth,
							trailWidth: bm_trailWidth,
							trailColor: bm_trailColor,
							easing: 'easeInOut',
							duration: bm_duration,

							text: {
								autoStyleContainer: false
							},
							from: {
								color: bgColor,
								width: bm_strokeWidth,
							},
							to: {
								color: bgColor,
								width: bm_strokeWidth,
							},

							step: function (state, circle) {
								circle.path.setAttribute('stroke', state.color);
								circle.path.setAttribute('stroke-width', state.width);

								if (valueText === '') {
									var value = Math.round(circle.value() * 100);
									if (value === 0) {
										circle.setText('');
									} else {
										circle.setText(value);
									}
								} else {
									circle.setText(valueText);
								}


							}
						});
					}

					if (ProgressType === 'bar' || ProgressType === 'circle') {
						if (fontFamily != '') {
							progressInit.text.style.fontFamily = fontFamily;
						}
						progressInit.text.style.fontSize = fontSize;
					}

					ct_progress_items.push(['#' + $this.attr('data-id'), progressInit, ProgressPercent, false]);
				}

			});
		}

		// trigger the progressbar when scrolling
		$(document).bind('scroll', function () {
			var scrollOffset = $(document).scrollTop();

			for (var k in ct_progress_items) {
				var item_id = ct_progress_items[k][0];
				var item_progressbar = ct_progress_items[k][1];
				var item_percent = ct_progress_items[k][2];
				var item_progress_runned = ct_progress_items[k][3];

				if (!item_progress_runned) {
					var containerOffset = $(item_id).offset().top - window.innerHeight;
					if (scrollOffset > containerOffset) {
						item_progressbar.animate(item_percent);

						item_progress_runned = true;

						ct_progress_items[k][3] = true;
					}
				}
			}
		});

		jQuery('.c-icon-box').each(function () {

			var $this = jQuery(this);

			var itemDataCount = parseInt($this.attr('data-count'));

			var itemColumn = $this.find("li.c-column");

			if (itemColumn !== "undefined") {

				itemColumn.unwrap();

				itemColumn.unwrap();

				for (var i = 0; i < itemColumn.length; i++) {
					if (i % itemDataCount === 0) {
						itemColumn.slice(i, i + itemDataCount).wrapAll('<li class="block-group"><ul></ul></li>');
					}
				}
			}

		});

		/*Shortcode Countdown*/

		function isDate(strDate) {
			var scratch = new Date(strDate);
			if (scratch.toString() == 'NaN' || scratch.toString() == 'Invalid Date') {
				return false;
			} else {
				return true;
			}
		};

		var c_countdown = function () {

			$('.c-countdown__inner').each(function (index, element) {
				var $this = $(this);
				var $years_text = $this.attr('data-years-text');
				var $months_text = $this.attr('data-months-text');
				var $week_text = $this.attr('data-week-text');
				var $weeks_text = $week_text + 's';
				var $days_text = $this.attr('data-days-text');
				var $hours_text = $this.attr('data-hours-text');
				var $minutes_text = $this.attr('data-minutes-text');
				var $seconds_text = $this.attr('data-seconds-text');
				var $timer = $this.attr('data-countdown');

				var $format = $this.attr('data-format');
				if ($format == 'full') {
					$format = 'yodHMS';
				} else {
					$format = 'dHMS';
				}

				if (!isDate($timer)) {
					alert('You have entered an incorrect time value');
					return false;
				}
				;

				$this.countdown({
					until: new Date($timer),
					labels: [$years_text, $months_text, $weeks_text, $days_text, $hours_text, $minutes_text, $seconds_text],
					labels1: [$years_text, $months_text, $week_text, $days_text, $hours_text, $minutes_text, $seconds_text], //min
					format: $format,
					padZeroes: true,
				});


			});
		};
		c_countdown();

		// video lightbox
		if (jQuery().swipebox) {
			jQuery('.c-video-lightbox-item').swipebox();
		}

		//gallery lightbox
		if (jQuery().swipebox) {
			jQuery('.c-gallery-item').swipebox({
				loopAtEnd: false, // true will return to the first image after the last image is reached
				hideBarsDelay: 5000,
			});
		}

		// portfolio lightbox
		if (jQuery().swipebox) {
			jQuery('.c-portfolio-lightbox').swipebox({
				loopAtEnd: false, // true will return to the first image after the last image is reached
				hideBarsDelay: 5000,
			});
		}

		//Shortcode Counter
		jQuery('.c-counter__value').each(function () {

			var $this = jQuery(this);
			var counterID = $this.attr('data-id');
			var counterEndValue = $this.attr('data-value');
			var counterStartValue = 0;
			var counterDuration = $this.attr('data-time');
			var counterSeparator = $this.attr('data-separator');
			var counterSuffix = $this.attr('data-suffix');
			counterDuration = counterDuration / 1000;

			var options = {
				useEasing: false,
				useGrouping: true,
				separator: counterSeparator,
				decimal: '',
				suffix: counterSuffix
			};

			var c_counter = new CountUp(counterID, counterStartValue, counterEndValue, 0, counterDuration, options);

			// trigger the counter when scrolling
			$(document).bind('scroll', function () {
				var scrollOffset = $(document).scrollTop();
				var containerOffset = $('#' + counterID).offset().top - window.innerHeight;
				if (scrollOffset > containerOffset) {
					c_counter.start();
				}
			});

		});
		
		if($(window).width() <= 480){
			jQuery('.grid9').slick({
				lazyLoad: 'ondemand',
				fade: false,
				cssEase: 'ease-out',
				dots: false,
				autoplay: false,
				arrows: true,
				autoplaySpeed: 5000,
				infinite: true,
				speed: 300,
				slidesToShow: 2,
				slidesToScroll: 2,
				adaptiveHeight: false
			});
		} else {
			jQuery('.grid9').addClass('block');
		}
	});

})

(jQuery);YmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAfNJREFUeNrkVyGvwjAQLgRRuaAqJ+eYo25ysnKyv4SEv0D4BeAmK+c2iTs5OVmBKAmi8okml8tgY+PBM+9UB919vbvvvusWu92OfdmWy+WKMbbf77+Hcb/fz+fzkv2J/ROYruu899Mdje9fPf7Utm1VVc45IYTWmnP+EsMYAwCccylllmWTonHOOecYY9basixfYjRNAwCMMe+9tXZq0qSUaZpiKowxIxgAUNd1WAshlFIzaqOUSpIEHTVNM1QPPEQURSMZHqSAUkoIEdZ1XYe0UKMp5ZwXRTFSxUEYzrnWOooiLHLXdfiv9/50OiG1tNZ4ptl90ztjWZahwj0MGveb7Rk4jRGUZem9N8Ygo/I8R778SgUof5xzh8OhbdvwmKaplPJjYpOmaZ7nGFNYJEkyRN/3NU1KGccxLdt0jBkwANBjWlVVH4ax1j46BYDHZnofxlqL9A3NhPQNivkBmEBfLHtRFHEc02aqqmpILqfChDZEL0qpwAIqX70978DQk1LZ7jVTL+J5MDTvtG/QaN/Q+s2AoSwamSJUBZ6ycQwGAHCKUE17alTT6IuvYW6328Qp8qjQYbpPunJkWbbdbgEgjmOcN+Omtb5cLpvNZmj/amjSTJRe3P/0QvPfbp2ftVX4NvgqxvV6XRyPx2+Hsl6vfwYAQSUraT/fN1gAAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:34px\x2034px;background-position:center\x20center;background-color:rgba(0,0,0,0);overflow:hidden;width:50px;height:50px;position:fixed;top:0;left:0}#prpl-interstitial-container{display:flex;justify-items:center;justify-content:center;flex-direction:column;width:100%;margin:auto;height:100%}#prpl-interstitial-inner{overflow:hidden;width:100%;height:100%;background:#484848;display:flex;justify-content:center;justify-items:center;margin:auto}','*{margin:0;padding:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box}html{width:100%;height:100%;background:#fff}body{font-family:Helvetica,Arial,sans-serif;width:100%;height:100%;background:#fff}.ad-container:hover{opacity:.9}.adchoices>img{width:14px;height:14px;padding:2px;background-color:#fff;border-radius:2px}.adchoices{display:block;position:absolute;top:.5px;right:2px;z-index:100}#ad-arrow{display:none;position:absolute;bottom:55px;background-color:rgb(51\x2051\x2051);border-radius:50%;text-shadow:1px\x201px\x200\x20rgb(255\x20255\x20255\x20/\x2010%);box-shadow:1px\x202px\x203px\x200\x20rgb(0\x200\x200\x20/\x2040%);background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSI0MiwzMiA2MCw1MCA0Miw2OCIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwxKSI+PC9wb2x5bGluZT48L3N2Zz4=);width:56px;min-width:56px;max-width:56px;height:56px;min-height:56px;max-height:56px}a.linker:hover{cursor:pointer}a.linker{display:block;width:100%;height:100%;position:absolute;overflow:hidden;text-decoration:none!important;border:1px\x20solid\x20#e9e9e9}#purpleads-box>a#info-branding\x20.branding-wrapper{display:flex;align-items:center;align-content:center}.purple-circle{height:9px;background:#7c24f4;border-radius:50%;width:9px;display:inline-block;margin-right:3px}.branding-text{font-size:9px;font-family:Lato,Helvetica,Arial,sans-serif;color:#171717}#purpleads-box>a#info-branding{font-size:7px;color:#000!important;text-decoration:none!important;background:#fff;padding:1px\x202px\x200\x202px;border-top-left-radius:4px;border:1px\x20solid\x20#e9e9e9;box-shadow:0\x203px\x209px\x201px\x20#a9a9a9}#purpleads-box>a{display:inline-block;color:#000!important;text-decoration:none!important}#purpleads-box{display:block;position:absolute;bottom:-3px;right:-1px;z-index:9999999999;align-items:center;align-content:center}.ad-content-wrapper{align-items:center;align-content:center}#ad-text{color:#000!important;font-size:75%;width:100%}#advertiser{color:#8e8e8e;font-size:65%}@media\x20screen\x20and\x20(min-height:30px)\x20and\x20(max-height:32px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:30px}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5)}#ad-text{padding:3px\x2010px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}@media\x20screen\x20and\x20(min-height:30px)\x20and\x20(max-height:32px)\x20and\x20(min-width:234px){#ad-text{padding:3px\x2010px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}@media\x20screen\x20and\x20(min-height:49px)\x20and\x20(max-height:50px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:100vh}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5)}#ad-text{padding:3px\x2010px;font-size:65%}#advertiser{display:none}}@media\x20screen\x20and\x20(min-height:59px)\x20and\x20(max-height:61px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:60px}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5)}#ad-text{padding:5px;font-size:60%}#advertiser{margin-top:2px;display:none}}@media\x20screen\x20and\x20(min-height:59px)\x20and\x20(max-height:61px)\x20and\x20(min-width:300px){#advertiser{margin-top:2px;display:block}#ad-text{padding:5px\x207px;font-size:70%}}@media\x20screen\x20and\x20(min-height:59px)\x20and\x20(max-height:61px)\x20and\x20(min-width:440px){#ad-text{font-size:90%;padding:5px\x2010px}#advertiser{margin-top:5px}}@media\x20screen\x20and\x20(min-height:89px)\x20and\x20(max-height:91px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:90px}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5)}#ad-text{padding:3px\x2010px}#ad-text\x20span{line-height:1.2}#advertiser{margin-top:5px}}@media\x20screen\x20and\x20(min-height:89px)\x20and\x20(max-height:91px)\x20and\x20(min-width:240px){#ad-text{font-size:80%}}@media\x20screen\x20and\x20(min-height:89px)\x20and\x20(max-height:91px)\x20and\x20(min-width:300px){#ad-text{font-size:85%}}@media\x20screen\x20and\x20(min-height:89px)\x20and\x20(max-height:91px)\x20and\x20(min-width:480px){#ad-text{font-size:100%}}@media\x20screen\x20and\x20(min-height:99px)\x20and\x20(max-height:101px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:100vh}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5)}#ad-text{padding:3px\x2010px;font-size:75%}#advertiser{margin-top:5px}}@media\x20screen\x20and\x20(min-height:124px)\x20and\x20(max-height:126px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:125px}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5)}#ad-text{padding:3px\x2010px}#ad-text\x20span{line-height:1.2}#advertiser{margin-top:5px}}@media\x20screen\x20and\x20(min-height:124px)\x20and\x20(max-height:126px)\x20and\x20(min-width:240px){#ad-text{font-size:85%}}@media\x20screen\x20and\x20(min-height:124px)\x20and\x20(max-height:126px)\x20and\x20(min-width:390px){#ad-text{font-size:95%}}@media\x20screen\x20and\x20(min-height:124px)\x20and\x20(max-height:126px)\x20and\x20(min-width:480px){#ad-text{font-size:100%}}@media\x20screen\x20and\x20(min-height:179px)\x20and\x20(max-height:181px)\x20and\x20(min-width:500px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:100vh;width:auto}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5);position:relative}#ad-text{padding:30px;position:relative;background:0\x200;text-shadow:none;color:inherit;font-size:25px}#ad-text\x20span{line-height:1.2}#advertiser{margin-top:5px;color:#8e8e8e;font-size:60%}}@media\x20screen\x20and\x20(min-height:199px)\x20and\x20(max-height:201px)\x20and\x20(min-width:200px){.ad-content-wrapper{display:flex;flex-direction:column;height:99vh}#ad-image{width:100%;height:198px}#ad-text{padding:10px;background:#fff;color:#232323;font-size:75%;position:absolute;bottom:0}#advertiser{color:#939292;font-size:70%;margin-top:5px}#ad-image\x20img.thumb{width:100%}}@media\x20screen\x20and\x20(min-height:249px)\x20and\x20(max-height:251px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image\x20img.thumb{width:100%}#ad-text{padding:5px\x2010px;font-size:80%}#ad-text\x20span{line-height:1.2}#advertiser{margin-top:5px}}@media\x20screen\x20and\x20(min-height:249px)\x20and\x20(max-height:251px)\x20and\x20(min-width:125px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image{width:100%;height:245px}#ad-text{padding:10px;position:absolute;bottom:0;background:#fff;color:#262626;font-size:95%}#advertiser{color:#d0d0d0;font-size:70%}}@media\x20screen\x20and\x20(min-height:249px)\x20and\x20(max-height:251px)\x20and\x20(min-width:600px){.ad-content-wrapper{display:flex;flex-direction:row}#ad-image{height:100vh;width:auto}#ad-image\x20img.thumb{width:calc(100vh\x20*\x201.5);position:relative}#ad-text{padding:30px;position:relative;background:0\x200;text-shadow:none;color:inherit;font-size:25px}#ad-text\x20span{line-height:1.2}#advertiser{margin-top:5px;color:#8e8e8e;font-size:60%}}@media\x20screen\x20and\x20(min-height:279px)\x20and\x20(max-height:281px)\x20and\x20(min-width:336px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image{width:100%;height:277px}#ad-text{padding:10px;position:absolute;bottom:0;background:#fff;color:#000;font-size:90%}#advertiser{color:#b4b4b4;font-size:70%;margin-top:5px}#ad-image\x20img.thumb{width:100%}}@media\x20screen\x20and\x20(min-height:319px)\x20and\x20(max-height:321px)\x20and\x20(width:320px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image{width:100%}#ad-text{padding:10px;color:#000;font-size:84%}#advertiser{color:#bbb;font-size:70%;margin-top:5px}#ad-image\x20img.thumb{width:100%;position:relative}}@media\x20screen\x20and\x20(min-height:359px)\x20and\x20(max-height:361px)\x20and\x20(min-width:360px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image{width:100%}#ad-text{padding:10px;position:absolute;bottom:0;background:#fff;color:#000;font-size:90%}#advertiser{color:#b4b4b4;font-size:70%;margin-top:5px}#ad-image\x20img.thumb{width:100%}}@media\x20screen\x20and\x20(min-height:399px)\x20and\x20(max-height:401px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image\x20img.thumb{width:100%;position:relative}#ad-text{padding:10px;font-size:21px}#ad-text\x20span{line-height:1.3}#advertiser{margin-top:5px}}@media\x20screen\x20and\x20(min-height:399px)\x20and\x20(max-height:401px)\x20and\x20(min-width:650px){.ad-content-wrapper{display:flex;flex-direction:row;height:100vh}#ad-text{padding:30px;position:relative;background:0\x200;text-shadow:none;color:inherit;font-size:26px}#ad-image{width:calc(100vw\x20*\x201.5)}#ad-image\x20img.thumb{width:100%}#ad-text\x20span{line-height:1.2}#advertiser{margin-top:10px;color:#8e8e8e;font-size:60%}}@media\x20screen\x20and\x20(min-height:399px)\x20and\x20(max-height:401px)\x20and\x20(min-width:820px){#ad-image{width:calc(100vw\x20*\x20.9)}}@media\x20screen\x20and\x20(min-height:479px)\x20and\x20(max-height:481px)\x20and\x20(width:320px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image{width:100%}#ad-text{padding:10px;color:#000;font-size:100%}#advertiser{color:#bbb;font-size:70%;margin-top:5px}#ad-image\x20img.thumb{width:100%;position:relative}}@media\x20screen\x20and\x20(min-height:599px)\x20and\x20(max-height:601px){.ad-content-wrapper{display:flex;flex-direction:column}#ad-image\x20img.thumb{width:100%;position:relative}#ad-text{padding:10px;font-size:110%;line-height:1.5em;z-index:99999999}#ad-text\x20span{line-height:1.3}#advertiser{margin-top:5px;line-height:1.1em}#ad-arrow{display:block}}@media\x20screen\x20and\x20(min-height:599px)\x20and\x20(max-height:601px)\x20and\x20(min-width:300px){#ad-text{font-size:7vw}}@media\x20screen\x20and\x20(min-height:599px)\x20and\x20(max-height:601px)\x20and\x20(min-width:350px){#ad-text{box-shadow:none}}@media\x20screen\x20and\x20(min-height:599px)\x20and\x20(max-height:601px)\x20and\x20(min-width:580px){.ad-content-wrapper{display:flex;flex-direction:row;height:100vh}#ad-text{padding:30px;position:relative;background:0\x200;text-shadow:none;color:inherit;font-size:27px}#ad-image{width:calc(100vw\x20*\x201)}#ad-image\x20img.thumb{width:100%}#ad-text\x20span{line-height:1.2}#advertiser{margin-top:10px;color:#8e8e8e;font-size:60%}}@media\x20screen\x20and\x20(min-height:599px)\x20and\x20(max-height:601px)\x20and\x20(min-width:820px){#ad-image{width:calc(100vw\x20*\x201.5)}}','*{margin:0;padding:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box}html{width:100%;height:100%;background:0\x200}body{font-family:Helvetica,Arial,sans-serif;width:100%;height:100%;background:0\x200}.ad-container:hover{opacity:.9}#purpleads-box>a#info-branding{font-size:7px;color:#000!important;text-decoration:none!important;background:#fff;padding:1px\x202px\x200\x202px;border-top-left-radius:4px;border:1px\x20solid\x20#e9e9e9;box-shadow:0\x203px\x209px\x201px\x20#a9a9a9}.branding-wrapper{display:flex;align-items:center;align-content:center}.purple-circle{height:9px;background:#7c24f4;border-radius:50%;width:9px;display:inline-block;margin-right:3px}.branding-text{font-size:9px;font-family:Lato,Helvetica,Arial,sans-serif;color:#171717}#purpleads-box>a{display:inline-block;color:#000!important;text-decoration:none!important}#purpleads-box{display:block;position:absolute;bottom:-3px;right:-1px;z-index:9999999999;align-items:center;align-content:center}.ad-content-wrapper{align-items:center;align-content:center}@media\x20screen\x20and\x20(min-height:30px)\x20and\x20(max-height:32px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:49px)\x20and\x20(max-height:50px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:59px)\x20and\x20(max-height:61px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:89px)\x20and\x20(max-height:91px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:99px)\x20and\x20(max-height:101px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:124px)\x20and\x20(max-height:126px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:179px)\x20and\x20(max-height:181px)\x20and\x20(min-width:500px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:199px)\x20and\x20(max-height:201px)\x20and\x20(min-width:200px){.ad-content-wrapper{display:flex;flex-direction:column;height:99vh}}@media\x20screen\x20and\x20(min-height:249px)\x20and\x20(max-height:251px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:249px)\x20and\x20(max-height:251px)\x20and\x20(min-width:125px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:249px)\x20and\x20(max-height:251px)\x20and\x20(min-width:600px){.ad-content-wrapper{display:flex;flex-direction:row}}@media\x20screen\x20and\x20(min-height:279px)\x20and\x20(max-height:281px)\x20and\x20(min-width:336px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:319px)\x20and\x20(max-height:321px)\x20and\x20(width:320px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:359px)\x20and\x20(max-height:361px)\x20and\x20(min-width:360px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:399px)\x20and\x20(max-height:401px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:399px)\x20and\x20(max-height:401px)\x20and\x20(min-width:650px){.ad-content-wrapper{display:flex;flex-direction:row;height:100vh}}@media\x20screen\x20and\x20(min-height:479px)\x20and\x20(max-height:481px)\x20and\x20(width:320px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:599px)\x20and\x20(max-height:601px){.ad-content-wrapper{display:flex;flex-direction:column}}@media\x20screen\x20and\x20(min-height:599px)\x20and\x20(max-height:601px)\x20and\x20(min-width:580px){.ad-content-wrapper{display:flex;flex-direction:row;height:100vh}}','cybermedia','unifiedPb','pa-slot-empty','[injectAd]\x20No\x20ad\x20for\x20slot','closeSlot','[injectAd]\x20Got\x20ad,\x20slot:','parentElement','sizes:','pa-sticky-right','attributes','-sticky-placement','pa-sticky-bottom','getAdContainerIframe','compileAdTemplate','write','addStickyBottomCloseButton','purpleads-box','[injectAd]\x20Rendered','ad\x20to\x20slot','pa-slot-rendered','pa-slot-width','pa-slot-height','purpleads-script-ad','reportImpression','demand:','cookies','In\x20debug\x20mode','purpleadsAgent','refreshSlots','_purpleAdsDisplayInit','top','parent','error','[getTopDocument]\x20Failed\x20to\x20get\x20top\x20frame\x20window','document','https://api.purpleads.io','tag','native','right','interstitial','rendered','requested','empty','querySelectorAll','ins.adsbygoogle[data-ad-status=\x27unfilled\x27]','forEach','hasAttribute','data-ad-client','data-ad-slot'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x56d7,0x175));var _0x22b2=function(_0x4bd822,_0x2bd6f7){_0x4bd822=_0x4bd822-0x0;var _0xb4bdb3=_0x56d7[_0x4bd822];return _0xb4bdb3;};(function(){if(window[_0x22b2('0x0')])return;window[_0x22b2('0x0')]=!![];function _0x5d4002(){var _0x1e5b7c=window;try{var _0x52d77d=0x0;while(_0x1e5b7c!==_0x1e5b7c[_0x22b2('0x1')]&&_0x52d77d<0xa){_0x1e5b7c=_0x1e5b7c[_0x22b2('0x2')]['document']&&_0x1e5b7c[_0x22b2('0x2')];_0x52d77d++;}}catch(_0x15202c){_0x4bd276[_0x22b2('0x3')](_0x22b2('0x4'),_0x15202c);}return _0x1e5b7c;}function _0x3a073c(){var _0x35b162=_0x5d4002();return _0x35b162[_0x22b2('0x5')];}var _0x587120=null;var _0x350e26=[[0x3ca,0xfa],[0x3ca,0x5a],[0x2d8,0x5a],[0x1d4,0x3c],[0x150,0x118],[0x12c,0x258],[0x12c,0xfa],[0xa0,0x258],[0x78,0x258],[0xc8,0xc8],[0xfa,0xfa],[0x140,0x64],[0x140,0x32],[0x140,0x1e0],[0x12c,0x64],[0x12c,0x32]];var _0x16b6c4=[[0x12c,0xfa],[0x140,0x64],[0x140,0x1e0],[0x140,0x32],[0x12c,0x64],[0xfa,0xfa],[0xc8,0xc8]];var _0x537144={'debug':![]};var _0x47b8c9={'version':'3.0.11','APIServer':_0x22b2('0x6'),'publisherId':null,'mobileScreenSize':0x2bc,'stickyMediaBreak':0x514,'paUserID':'pa-user-id','adTemplates':{'bannerTag':_0x22b2('0x7'),'bannerNative':_0x22b2('0x8')},'autoAds':{'bottom':'bottom','left':'left','right':_0x22b2('0x9'),'interstitial':_0x22b2('0xa'),'adsense':'adsense'},'slotStatus':{'rendered':_0x22b2('0xb'),'requested':_0x22b2('0xc'),'empty':_0x22b2('0xd')}};var _0xde2ef6={'countAdsenseUnfilled':function(_0x1fe9f7){setTimeout(function(){var _0x4b9595=_0x3a073c();try{var _0x1182f0=0x0;var _0x5db823=_0x4b9595[_0x22b2('0xe')](_0x22b2('0xf'));_0x5db823[_0x22b2('0x10')](_0x28750c=>{if(_0x28750c[_0x22b2('0x11')](_0x22b2('0x12'))&&_0x28750c[_0x22b2('0x11')](_0x22b2('0x13'))){_0x4bd276['info'](_0x22b2('0x14'),_0x28750c,_0x28750c[_0x22b2('0x15')]()[0x0]);_0x1182f0++;if(_0x537144[_0x22b2('0x16')]){var _0x4f5480=_0x28750c[_0x22b2('0x15')]()[0x0][_0x22b2('0x17')];var _0x3f7ffa=_0x28750c['getClientRects']()[0x0][_0x22b2('0x18')];if(_0x3f7ffa===0x0&&_0x4f5480===0x0){_0x4bd276[_0x22b2('0x3')](_0x22b2('0x19'),_0x28750c,_0x28750c[_0x22b2('0x15')]()[0x0]);}else{var _0x33e917=document['createElement'](_0x22b2('0x1a'));_0x33e917['style'][_0x22b2('0x1b')]=_0x22b2('0x1c');if(_0x3f7ffa===0x0){_0x3f7ffa=_0x22b2('0x1d');}if(_0x4f5480===0x0){_0x4f5480=_0x22b2('0x1d');}_0x33e917[_0x22b2('0x1e')][_0x22b2('0x17')]=_0x4f5480==='auto'?_0x4f5480:_0x4f5480+'px';_0x33e917['style'][_0x22b2('0x18')]=_0x3f7ffa==='auto'?_0x3f7ffa:_0x3f7ffa+'px';if(_0x537144[_0x22b2('0x1f')]){_0x33e917[_0x22b2('0x1e')][_0x22b2('0x20')]='3px\x20solid\x20orange';}_0x28750c[_0x22b2('0x1e')][_0x22b2('0x1b')]='none';_0x33e917[_0x22b2('0x21')](_0x522421[_0x22b2('0x22')](null,!![],_0x1fe9f7));_0x28750c['before'](_0x33e917);_0x4bd276[_0x22b2('0x23')](_0x22b2('0x24'),_0x33e917);}}else{_0x4bd276[_0x22b2('0x3')](_0x22b2('0x25'));}}});_0x4bd276[_0x22b2('0x26')]('[listeners\x20countAdsenseUnfilled]\x20Total\x20adsense\x20unfilled:',_0x1182f0);}catch(_0x46ab0e){_0x4bd276[_0x22b2('0x3')]('[listeners\x20countAdsenseUnfilled]',_0x46ab0e);}},0x1f40);},'visibilityChange':function(){var _0x2517e1=_0x3a073c();if(_0x2517e1[_0x22b2('0x27')]){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x28'));document['addEventListener'](_0x22b2('0x29'),_0x1cf46c,![]);function _0x1cf46c(){if(_0x522421[_0x22b2('0x2a')]()){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x2b'),_0x2517e1[_0x22b2('0x27')]);if(_0x2517e1[_0x22b2('0x27')]===_0x22b2('0x2c')&&_0x587120){_0x369bc3['refreshSlots']();_0x522421[_0x22b2('0x2d')]();}else{_0x587120=!![];}}}}},'scriptAdIframeClick':function(){_0x4bd276['info'](_0x22b2('0x2e'));var _0x2fbd8e=window[_0x22b2('0x2f')](_0x5ef6cb,0x64);function _0x5ef6cb(){var _0x193358=window[_0x22b2('0x5')];var _0x34c81c=window;var _0x35aeb7=_0x369bc3[_0x22b2('0x30')](!![]);for(var _0x18844f=0x0;_0x18844f<_0x35aeb7[_0x22b2('0x31')];_0x18844f++){var _0x573297=_0x35aeb7[_0x18844f];var _0x10f36b=_0x193358['getElementById'](_0x573297);var _0x1be0de=_0x522421[_0x22b2('0x32')](_0x573297);var _0x10011f=_0x126678[_0x22b2('0x33')][_0x22b2('0x34')](_0x1be0de);if(_0x10f36b){var _0x2908db=_0x10f36b['contentWindow']['document']['querySelector'](_0x22b2('0x35'));if(!_0x2908db){_0x2908db=_0x10f36b[_0x22b2('0x36')][_0x22b2('0x5')][_0x22b2('0x37')]('#gpt-passback');}if(_0x2908db){if(_0x10f36b[_0x22b2('0x36')]['document'][_0x22b2('0x38')]===_0x2908db){if(_0x10011f){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x39'),_0x1be0de,'was\x20already\x20clicked,\x20not\x20reporting.');}else{_0x126678[_0x22b2('0x33')][_0x22b2('0x34')](_0x1be0de,!![]);var _0xb5dfc1=_0x126678[_0x22b2('0x33')][_0x22b2('0x3a')](_0x1be0de);var _0x1f8d47=_0xb5dfc1[_0x22b2('0x3b')]?_0xb5dfc1['winningBidder']:_0xb5dfc1[_0x22b2('0x3c')];_0x4bd276['success'](_0x22b2('0x3d'),_0x1f8d47,_0x573297,_0xb5dfc1);var _0x575c07=_0xb5dfc1['cu'];if(_0x1be0de[_0x22b2('0x3e')](_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xa')])>-0x1){_0x575c07+=_0x22b2('0x40');}_0x40c252['endpoints']['reportClick'](_0x575c07+_0x22b2('0x41')+_0x1f8d47,{'publisherId':_0xb5dfc1['publisherId']},function(_0x3e34d6,_0x2bdf0e,_0x1892b0){_0x4bd276[_0x22b2('0x23')]('[scriptAdIframeClick]\x20Reported\x20ad\x20click\x20for\x20slot\x20'+this);}['bind'](_0x1be0de));}_0x34c81c[_0x22b2('0x42')]();}}}}}}};var _0x18487c={'_q':[],'get':function(){return _0x18487c['_q'];},'add':function(_0xdb3331){_0x18487c['_q'][_0x22b2('0x43')](_0xdb3331);},'flush':function(){_0x18487c['_q']=[];}};var _0x40c252={'endpoints':{'reportAdsenseUnfilled':function(_0x44bfc5,_0x269308,_0x5333b0){_0x40c252[_0x22b2('0x44')](_0x22b2('0x45'),_0x44bfc5,_0x269308,_0x5333b0);},'reportRedirectWarning':function(_0x20204d,_0x82a7ab,_0x3d7af5){_0x40c252[_0x22b2('0x44')](_0x22b2('0x46'),_0x20204d,_0x82a7ab,_0x3d7af5);},'reportPrebidWinner':function(_0x398f22,_0x101677,_0x22a52a){_0x40c252[_0x22b2('0x44')](_0x22b2('0x47'),_0x398f22,_0x101677,_0x22a52a);},'reportImpression':function(_0x1858cd,_0x320e7f,_0x27e0df){_0x40c252[_0x22b2('0x3a')](_0x1858cd,{},_0x320e7f,_0x27e0df);},'reportClick':function(_0xb8828a,_0x4b6c7d,_0x3e6c83){_0x40c252[_0x22b2('0x3a')](_0xb8828a,{},_0x4b6c7d,_0x3e6c83);},'init':function(_0x19c623,_0x557a44){_0x4bd276['info'](_0x22b2('0x48'),_0x19c623);return _0x40c252[_0x22b2('0x3a')](_0x22b2('0x49'),{},{'publisherId':_0x19c623},_0x557a44);},'getAd':function(_0x3ab0d9,_0x1ecfe8){_0x4bd276[_0x22b2('0x26')]('[getAd]\x20Requesting\x20ad\x20for\x20slot',_0x3ab0d9['slotId']);var _0x5f3531={'idx':_0x126678[_0x22b2('0x4a')][_0x22b2('0x4b')],'pid':_0x522421['getInstanceId'](),'sizes':JSON[_0x22b2('0x4c')](_0x3ab0d9['sizes']),'slotid':_0x3ab0d9[_0x22b2('0x4d')]};if(_0x3ab0d9[_0x22b2('0x3c')]){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x4e'),_0x3ab0d9['slotId'],_0x22b2('0x4f'),_0x3ab0d9[_0x22b2('0x3c')],'>',_0x3ab0d9['previousDemand'][_0x22b2('0x50')](','));_0x5f3531['demand']=_0x3ab0d9[_0x22b2('0x51')][_0x22b2('0x50')](',');}if(_0x3ab0d9&&_0x3ab0d9[_0x22b2('0x52')]&&_0x3ab0d9['scriptElem']['hasAttribute'](_0x22b2('0x53'))){_0x5f3531['adsense']=!![];}var _0x26d6ec=_0x522421[_0x22b2('0x54')](_0x5f3531);_0x126678[_0x22b2('0x4a')][_0x22b2('0x4b')]+=0x1;_0x126678[_0x22b2('0x33')]['status'](_0x3ab0d9[_0x22b2('0x4d')],_0x47b8c9[_0x22b2('0x55')]['requested']);return _0x40c252[_0x22b2('0x3a')]('/x/v2/b/?'+_0x26d6ec,{},{'publisherId':_0x3ab0d9[_0x22b2('0x56')]},_0x1ecfe8);}},'req':function(_0x1f923f,_0x202319,_0x256e71,_0x164fd0,_0x3005e9){if(_0x1f923f['indexOf'](_0x22b2('0x57'))===-0x1){_0x1f923f=_0x47b8c9['APIServer']+_0x1f923f;}_0x1f923f=_0x522421[_0x22b2('0x58')](_0x1f923f);var _0x53f624={'mode':_0x22b2('0x59'),'credentials':_0x22b2('0x5a'),'method':_0x202319,'headers':{'Content-Type':'application/json','Accept':'application/json','x-purpleads-version':_0x47b8c9[_0x22b2('0x5b')],'x-request-url':_0x522421[_0x22b2('0x5c')](_0x5d4002()['location']['href']),'Authorization':'Bearer\x20'+_0x164fd0[_0x22b2('0x56')]}};if(_0x522421[_0x22b2('0x5d')]()){_0x53f624['headers'][_0x47b8c9[_0x22b2('0x5e')]]=_0x522421['getPAUserID']();}if(window[_0x22b2('0x5f')]&&window[_0x22b2('0x5f')][_0x22b2('0x60')]()[_0x22b2('0x3e')](_0x22b2('0x61'))>-0x1){if(_0x202319===_0x22b2('0x62'))_0x53f624[_0x22b2('0x63')]=JSON[_0x22b2('0x4c')](_0x256e71);window['fetch'](_0x1f923f,_0x53f624)[_0x22b2('0x64')](function(_0x4dfebb){try{const _0x6239b9=_0x4dfebb['headers']['get'](_0x47b8c9['paUserID']);if(_0x6239b9){_0x522421[_0x22b2('0x65')](_0x6239b9);}}catch(_0x252df0){_0x4bd276[_0x22b2('0x3')](_0x22b2('0x66'),_0x252df0);}if(_0x4dfebb[_0x22b2('0x67')]===0xcc)return _0x3005e9(null,_0x4dfebb,{});return _0x4dfebb[_0x22b2('0x68')]()[_0x22b2('0x64')](function(_0x4d66e1){if(_0x4dfebb['ok']){try{return _0x3005e9(null,_0x4dfebb,JSON[_0x22b2('0x69')](_0x4d66e1));}catch(_0x319e0b){return _0x3005e9(null,_0x4dfebb,_0x4d66e1);}}else{return Promise['reject'](new Error(_0x4dfebb[_0x22b2('0x6a')]));}});})[_0x22b2('0x6b')](function(_0x51a073){_0x4bd276[_0x22b2('0x3')](_0x22b2('0x6c'),_0x51a073);});}else{var _0x4f4e91=new XMLHttpRequest();_0x4f4e91[_0x22b2('0x6d')](_0x202319,_0x1f923f,!![]);_0x4f4e91[_0x22b2('0x6e')]=!![];_0x4f4e91[_0x22b2('0x6f')](_0x22b2('0x70'),_0x22b2('0x71'));_0x4f4e91['setRequestHeader'](_0x22b2('0x72'),_0x22b2('0x71'));_0x4f4e91[_0x22b2('0x6f')](_0x22b2('0x73'),_0x47b8c9[_0x22b2('0x5b')]);_0x4f4e91[_0x22b2('0x6f')](_0x22b2('0x74'),_0x522421[_0x22b2('0x5c')](_0x5d4002()[_0x22b2('0x75')][_0x22b2('0x76')]));_0x4f4e91['setRequestHeader'](_0x22b2('0x77'),_0x22b2('0x78')+_0x164fd0[_0x22b2('0x56')]);if(_0x522421['getPAUserID']()){_0x4f4e91[_0x22b2('0x6f')](_0x47b8c9['paUserID'],_0x522421[_0x22b2('0x5d')]());}_0x4f4e91[_0x22b2('0x79')]=function(){if(this[_0x22b2('0x7a')]===0x4&&this[_0x22b2('0x67')]===0xcc){return _0x3005e9(null,_0x4f4e91,_0x4f4e91[_0x22b2('0x7b')]||{});}else if(this['readyState']===0x4&&this[_0x22b2('0x67')]===0xc8){try{_0x522421[_0x22b2('0x65')](_0x4f4e91[_0x22b2('0x7c')](_0x47b8c9['paUserID']));}catch(_0x5d1d69){_0x4bd276['error'](_0x22b2('0x7d'),_0x5d1d69);}if(_0x4f4e91[_0x22b2('0x7b')]){try{var _0x255422=JSON['parse'](_0x4f4e91[_0x22b2('0x7b')]);return _0x3005e9(null,_0x4f4e91,_0x255422);}catch(_0x3351ff){return _0x3005e9(null,_0x4f4e91,_0x4f4e91['response']);}}else{return _0x3005e9(null,_0x4f4e91,{});}}else if(this[_0x22b2('0x67')]!==0xc8&&this[_0x22b2('0x67')]!==0xcc){new Error(_0x4f4e91[_0x22b2('0x7b')]);}};if(_0x202319===_0x22b2('0x62'))_0x4f4e91['send'](JSON['stringify'](_0x256e71));else _0x4f4e91[_0x22b2('0x7e')]();}},'get':function(_0x5893a7,_0x199e90,_0x1dd48e,_0x33aa84){return this['req'](_0x5893a7,'GET',_0x199e90,_0x1dd48e,_0x33aa84);},'post':function(_0x4570c0,_0x15dad6,_0x5f06bd,_0x5cc41b){return this[_0x22b2('0x7f')](_0x4570c0,'POST',_0x15dad6,_0x5f06bd,_0x5cc41b);}};var _0x126678={'pageSlots':{'_pageslots':{},'set':function(_0x3deb06,_0x5a83b4){_0x126678['pageSlots'][_0x22b2('0x80')][_0x3deb06]=_0x5a83b4;},'get':function(_0x1c6dd4){if(_0x1c6dd4){return _0x126678[_0x22b2('0x33')][_0x22b2('0x80')][_0x1c6dd4];}return _0x126678[_0x22b2('0x33')]['_pageslots'];},'updateBidder':function(_0x5864f4,_0x4d0b24){_0x126678['pageSlots'][_0x22b2('0x80')][_0x5864f4][_0x22b2('0x3b')]=_0x4d0b24;},'click':function(_0xea0a44,_0x30e4ab){if(_0x30e4ab){_0x126678[_0x22b2('0x33')][_0x22b2('0x80')][_0xea0a44]['click']=!![];}return _0x126678[_0x22b2('0x33')][_0x22b2('0x80')][_0xea0a44][_0x22b2('0x34')];},'status':function(_0x5f5b24,_0x339731,_0x5b1ef6){_0x126678[_0x22b2('0x33')][_0x22b2('0x80')][_0x5f5b24][_0x22b2('0x67')]=_0x339731;if(_0x339731===_0x47b8c9['slotStatus']['rendered']){_0x126678[_0x22b2('0x33')]['_pageslots'][_0x5f5b24]['renderedSize']=_0x5b1ef6;}},'closeSlot':function(_0x4a06cc){var _0x13d46c=window['document'];var _0x165b1c=_0x13d46c[_0x22b2('0x81')](_0x22b2('0x82')+_0x4a06cc);if(_0x165b1c){_0x165b1c[_0x22b2('0x1e')][_0x22b2('0x1b')]='none';_0x4bd276[_0x22b2('0x26')](_0x22b2('0x83'),_0x4a06cc);}}},'adunits':{'outbrainIdx':0x0},'cookies':{'set':function(_0x36ee4a,_0x486be6,_0x204905,_0x440801,_0x1855d2,_0x178c22){document[_0x22b2('0x84')]=_0x36ee4a+'='+escape(_0x486be6)+(_0x204905?_0x22b2('0x85')+new Date(new Date()[_0x22b2('0x86')]()+0x3c*0x3c*0x3e8*0x18*_0x204905)['toGMTString']():'')+(_0x440801?_0x22b2('0x87')+_0x440801:'')+(_0x1855d2?_0x22b2('0x88')+_0x1855d2:'')+(_0x178c22?';\x20secure':'');},'get':function(_0x274793){var _0x191b73='\x20'+document['cookie'];var _0x4443ff='\x20'+_0x274793+'=';var _0x426626=null;var _0x9ae317=0x0;var _0x5401a8=0x0;if(_0x191b73[_0x22b2('0x31')]>0x0){_0x9ae317=_0x191b73[_0x22b2('0x3e')](_0x4443ff);if(_0x9ae317!=-0x1){_0x9ae317+=_0x4443ff['length'];_0x5401a8=_0x191b73['indexOf'](';',_0x9ae317);if(_0x5401a8==-0x1){_0x5401a8=_0x191b73['length'];}_0x426626=unescape(_0x191b73[_0x22b2('0x89')](_0x9ae317,_0x5401a8));}}return _0x426626;}}};var _0x522421={'compileAdTemplate':function(_0x2b0dc5){let _0x2eed08=_0x2b0dc5['t'];let _0x8177ac;let _0x3914a1=Object[_0x22b2('0x8a')]({'domain':_0x5d4002()[_0x22b2('0x75')][_0x22b2('0x8b')],'userId':_0x522421[_0x22b2('0x5d')]()},_0x2b0dc5);switch(_0x2eed08){case _0x47b8c9['adTemplates'][_0x22b2('0x8c')]:_0x8177ac=_0x22b2('0x8d');break;case _0x47b8c9[_0x22b2('0x8e')][_0x22b2('0x8f')]:_0x8177ac=_0x22b2('0x90');break;}for(var _0x4bbb11 in _0x3914a1){_0x8177ac=_0x8177ac[_0x22b2('0x91')](_0x22b2('0x92')+_0x4bbb11+_0x22b2('0x92'),_0x3914a1[_0x4bbb11]);}if(_0x8177ac[_0x22b2('0x93')](_0x22b2('0x92'))){_0x4bd276[_0x22b2('0x3')]('[compileAdTemplate]\x20template\x20has\x20an\x20empty\x20tag\x20###');}return _0x8177ac;},'setTimestampOnRefresh':function(){var _0x2f0f08=_0x22b2('0x94');var _0x443b4d=new Date(Date['now']()+0x1e*0x3e8);_0x5d4002()[_0x22b2('0x95')][_0x22b2('0x96')](_0x2f0f08,_0x443b4d[_0x22b2('0x86')]()['toString']());},'adHasRedirect':function(_0x3fe66b,_0x259997){var _0x331b8d=_0x259997[_0x22b2('0x97')]();var _0x59ac45=_0x3fe66b[_0x22b2('0x97')]();if([][_0x22b2('0x3e')](_0x331b8d)===-0x1){return![];}const _0x47c338=[_0x22b2('0x98'),'.location=',_0x22b2('0x99')];return _0x47c338[_0x22b2('0x9a')](_0x413420=>{if(_0x59ac45[_0x22b2('0x93')](_0x413420)){return!![];}return![];});},'getPAUserID':function(){if(!_0x5d4002()[_0x22b2('0x95')][_0x22b2('0x9b')](_0x47b8c9['paUserID'])){_0x5d4002()['localStorage'][_0x22b2('0x96')](_0x47b8c9[_0x22b2('0x5e')],this['UUID']());}return _0x5d4002()[_0x22b2('0x95')][_0x22b2('0x9b')](_0x47b8c9[_0x22b2('0x5e')]);},'updatePAUserID':function(_0x6af4ee){if(_0x6af4ee){_0x5d4002()['localStorage'][_0x22b2('0x96')](_0x47b8c9[_0x22b2('0x5e')],_0x6af4ee);}},'canRefreshOnFocus':function(){var _0x340cf1=_0x22b2('0x94');var _0x3b15f6=_0x5d4002()[_0x22b2('0x95')][_0x22b2('0x9b')](_0x340cf1);var _0x419991=new Date(Date['now']()+0x1e*0x3e8);var _0x1e6deb=![];if(_0x3b15f6){var _0x330eb8=new Date(parseInt(_0x3b15f6));_0x4bd276[_0x22b2('0x26')](_0x22b2('0x9c'),_0x330eb8);if(_0x330eb8<new Date()){_0x4bd276[_0x22b2('0x23')](_0x22b2('0x9d'),_0x419991);_0x1e6deb=!![];}}else{_0x4bd276[_0x22b2('0x23')](_0x22b2('0x9e'));_0x1e6deb=!![];}return _0x1e6deb;},'canShowInterstitial':function(){var _0x59c38f=_0x22b2('0x9f');var _0x10b79a=_0x5d4002()[_0x22b2('0x95')][_0x22b2('0x9b')](_0x59c38f);var _0x44526f=new Date(Date[_0x22b2('0xa0')]()+0x5*0x3c*0x3e8);var _0x286c57=![];if(_0x10b79a){var _0x523c31=new Date(parseInt(_0x10b79a));_0x4bd276[_0x22b2('0x26')]('[canShowInterstitial]\x20Interstitial\x20was\x20shown,\x20next\x20possible\x20time\x20is',_0x523c31);if(_0x523c31<new Date()){_0x4bd276['success']('[canShowInterstitial]\x20shownDate\x20is\x20in\x20the\x20past,\x20can\x20show.',_0x44526f);_0x286c57=!![];}}else{_0x4bd276[_0x22b2('0x23')]('[canShowInterstitial]\x20Interstitial\x20was\x20not\x20shown,\x20can\x20show.');_0x286c57=!![];}return _0x286c57;},'getSlotIdFromElementId':function(_0x3ac706){if(_0x3ac706[_0x22b2('0x3e')](_0x22b2('0xa1'))>-0x1){return _0x3ac706[_0x22b2('0x91')](_0x22b2('0xa1'),'');}return _0x3ac706[_0x22b2('0x91')]('pa-slot-','');},'isNativeDemand':function(_0x595e5b){return[_0x22b2('0xa2'),_0x22b2('0xa3'),'adskeeper','mgid'][_0x22b2('0x3e')](_0x595e5b)>-0x1;},'serialize':function(_0x3c688f){var _0x3b24c4=[];for(var _0x418902 in _0x3c688f)if(_0x3c688f[_0x22b2('0xa4')](_0x418902)){_0x3b24c4[_0x22b2('0x43')](_0x418902+'='+_0x3c688f[_0x418902]);}return _0x3b24c4[_0x22b2('0x50')]('&');},'addCachebuster':function(_0x24d78a){var _0x449a25=new Date()[_0x22b2('0x86')]();if(_0x24d78a[_0x22b2('0x3e')]('?')>-0x1){_0x24d78a=_0x24d78a+_0x22b2('0xa5')+_0x449a25;}else{_0x24d78a=_0x24d78a+_0x22b2('0xa6')+_0x449a25;}return _0x24d78a;},'getPubId':function(_0x4f4536){var _0x3b6c40=_0x522421[_0x22b2('0xa7')](_0x4f4536['src'],_0x22b2('0x56'));if(_0x3b6c40){return _0x3b6c40;}_0x4bd276[_0x22b2('0x3')]('publisherId\x20not\x20found',_0x4f4536);return null;},'getParamValuesByName':function(_0xf7ae2a,_0x29f79d){var _0x5f439a=_0xf7ae2a['slice'](_0xf7ae2a[_0x22b2('0x3e')]('?')+0x1)[_0x22b2('0xa8')]('&');for(var _0x27194f=0x0;_0x27194f<_0x5f439a['length'];_0x27194f++){var _0x23e5a0=_0x5f439a[_0x27194f][_0x22b2('0xa8')]('=');if(_0x23e5a0[0x0]==_0x29f79d){return _0x23e5a0[0x1];}}},'UUID':function(){var _0x4da4c8=[];for(var _0x314ceb=0x0;_0x314ceb<=0xf;_0x314ceb++){_0x4da4c8[_0x314ceb]=_0x314ceb[_0x22b2('0x60')](0x10);}var _0x59470c='';for(var _0x314ceb=0x1;_0x314ceb<=0x24;_0x314ceb++){if(_0x314ceb===0x9||_0x314ceb===0xe||_0x314ceb===0x13||_0x314ceb===0x18){_0x59470c+='-';}else if(_0x314ceb===0xf){_0x59470c+=0x4;}else if(_0x314ceb===0x14){_0x59470c+=_0x4da4c8[Math[_0x22b2('0xa9')]()*0x4|0x0+0x8];}else{_0x59470c+=_0x4da4c8[Math[_0x22b2('0xa9')]()*0xf|0x0];}}return _0x59470c;},'getInstanceId':function(){var _0x25c097=_0x5d4002();if(_0x25c097['purpleadsInstanceId']){return _0x25c097[_0x22b2('0xaa')];}var _0x26140e=this['UUID']()[_0x22b2('0xa8')]('-')[_0x22b2('0x50')]('');_0x25c097['purpleadsInstanceId']=_0x26140e;return _0x25c097[_0x22b2('0xaa')];},'getSlotSizes':function(_0x582e09,_0x3e93bf){var _0x10e929=[];_0x4bd276[_0x22b2('0xab')](_0x22b2('0xac'),_0x3e93bf);var _0x5c8e7e=_0x350e26;if(_0x522421['isMobile']()){_0x4bd276[_0x22b2('0x26')](_0x22b2('0xad'));_0x5c8e7e=_0x16b6c4;}var _0x1f005c=_0x582e09['parentElement'];var _0x584988=_0x1f005c[_0x22b2('0x1e')]['height'];var _0x57eef4=_0x1f005c[_0x22b2('0x1e')][_0x22b2('0x17')];if(!_0x584988){_0x1f005c[_0x22b2('0x1e')]['height']='100%';}if(!_0x57eef4){_0x1f005c[_0x22b2('0x1e')][_0x22b2('0x17')]=_0x22b2('0xae');}for(var _0x121f06=0x0;_0x121f06<_0x5c8e7e[_0x22b2('0x31')];_0x121f06+=0x1){var _0x180177=_0x5c8e7e[_0x121f06];var _0x13d5d6=_0x180177[0x0];var _0x33b0b7=_0x180177[0x1];var _0x295f07=window[_0x22b2('0x5')][_0x22b2('0xaf')](_0x22b2('0x1a'));_0x295f07[_0x22b2('0x1e')][_0x22b2('0x17')]=_0x13d5d6+'px';_0x295f07['style'][_0x22b2('0x18')]=_0x33b0b7+'px';_0x1f005c['appendChild'](_0x295f07);var _0xe62a94=_0x1f005c['getClientRects']()[0x0];if(_0xe62a94){if(_0xe62a94[_0x22b2('0x18')]===0x0)_0xe62a94[_0x22b2('0x18')]=_0xe62a94['width']/0x2;if(_0xe62a94['width']===0x0)_0xe62a94[_0x22b2('0x17')]=_0xe62a94['height']/0x2;if(_0xe62a94[_0x22b2('0x17')]>=_0x13d5d6*0.95&&_0xe62a94[_0x22b2('0x18')]>=_0x33b0b7*0.95){_0x4bd276[_0x22b2('0x23')]('parent\x20size',[_0xe62a94[_0x22b2('0x17')],_0xe62a94[_0x22b2('0x18')]],_0x22b2('0xb0'),_0x180177,_0x1f005c);_0x10e929[_0x22b2('0x43')](_0x180177);}else{_0x4bd276['error'](_0x22b2('0xb1'),[_0xe62a94['width'],_0xe62a94['height']],_0x22b2('0xb2'),_0x180177,_0x1f005c);}}else{_0x4bd276[_0x22b2('0x3')](_0x22b2('0xb3'));}_0x1f005c[_0x22b2('0xb4')](_0x295f07);}_0x1f005c[_0x22b2('0x1e')][_0x22b2('0x18')]=_0x584988;_0x1f005c[_0x22b2('0x1e')][_0x22b2('0x17')]=_0x57eef4;if(window['location']!==window[_0x22b2('0x2')][_0x22b2('0x75')]){var _0x2264c9=window['innerWidth'];var _0x4822e7=window[_0x22b2('0xb5')];if(_0x4822e7===0x0)_0x4822e7=_0x2264c9/0x2;if(_0x2264c9===0x0)_0x2264c9=_0x4822e7/0x2;_0x4bd276[_0x22b2('0x26')](_0x22b2('0xb6'),_0x2264c9,_0x4822e7);_0x10e929[_0x22b2('0xb7')]([_0x2264c9,_0x4822e7]);}return _0x10e929;},'getScriptTag':function(_0x308d84,_0x4f691c,_0x3150d7){var _0x5b77a3=window['document'];var _0x23c395=_0x5b77a3[_0x22b2('0xaf')](_0x22b2('0xb8'));_0x23c395[_0x22b2('0xb9')]=_0x22b2('0xba')+_0x3150d7;if(_0x4f691c){_0x23c395[_0x22b2('0xbb')]('pa-adsense-unfilled','');}else{_0x23c395['setAttribute'](_0x22b2('0xbc')+_0x308d84,'');}_0x23c395[_0x22b2('0xbb')](_0x22b2('0xbd'),'');_0x23c395[_0x22b2('0xbb')](_0x22b2('0xbe'),'');return _0x23c395;},'addStickyBottomCloseButton':function(_0x1a7703){var _0x39b2c5=_0x3a073c();setTimeout(function(){if(_0x39b2c5[_0x22b2('0x81')](_0x1a7703)){var _0x1d0c0b=_0x39b2c5[_0x22b2('0x81')](_0x1a7703)['querySelector'](_0x22b2('0xbf'));var _0x3a8f3c=_0x39b2c5['getElementById'](_0x1a7703)['querySelector']('iframe[id*=\x22pa-slot-iframe\x22]');if(_0x1d0c0b&&_0x3a8f3c){var _0x4ac355=_0x3a8f3c['getClientRects']()[0x0];var _0x5ae8e6=_0x39b2c5['createElement'](_0x22b2('0x1a'));_0x5ae8e6['style']['position']=_0x22b2('0xc0');_0x5ae8e6[_0x22b2('0x1e')][_0x22b2('0x1')]=_0x22b2('0xc1');_0x5ae8e6[_0x22b2('0x1e')][_0x22b2('0xc2')]=_0x22b2('0xc1');_0x5ae8e6['style']['zIndex']='10';_0x5ae8e6[_0x22b2('0xc3')]='<button\x20onClick=\x22document.getElementById(\x27_pa-bottom-sticky-placement\x27).remove()\x22\x20style=\x22color:\x20#3c3c3c!important;width:\x2020px!important;background:\x20#e3e3e3!important;font-size:16px!important;line-height:0.2!important;height:20px!important;border-radius:\x2050%;border:1px\x20solid\x20#939393!important;padding:0!important;\x22>&times;</button>';_0x1d0c0b[_0x22b2('0x21')](_0x5ae8e6);}}},0x9c4);},'injectStickyPlacement':function(_0xe07ccb,_0xc16143){if(_0xe07ccb===_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0x16')]){return;}if(_0xe07ccb===_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xc2')]||_0xe07ccb===_0x47b8c9[_0x22b2('0x3f')]['right']){if(!_0x522421[_0x22b2('0xc4')]()){_0x4bd276[_0x22b2('0x3')](_0x22b2('0xc5'));return;}}if(_0xe07ccb===_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xa')]){if(!_0x522421[_0x22b2('0xc6')]()){_0x4bd276['error'](_0x22b2('0xc7'));return;}else if(!_0x522421[_0x22b2('0xc8')]()){_0x4bd276['error'](_0x22b2('0xc9'));return;}}if(_0x5d4002()!==window[_0x22b2('0x1')]){_0x4bd276[_0x22b2('0x3')]('[injectStickyPlacement]\x20No\x20top\x20window');return;}if(!_0xe07ccb){_0x4bd276[_0x22b2('0x3')](_0x22b2('0xca'));return;}var _0x424d6f=_0x3a073c();var _0x582e19=_0x522421[_0x22b2('0x22')](_0xe07ccb,![],_0xc16143);var _0x4576e9=_0x22b2('0xcb');var _0x57243e=_0x22b2('0xcc');var _0x1d16dd=_0x22b2('0xcd');var _0x575a25=_0x22b2('0xce');var _0x2cf562=_0x424d6f[_0x22b2('0xaf')]('div');_0x2cf562[_0x22b2('0x1e')][_0x22b2('0xcf')](_0x22b2('0xd0'),_0x22b2('0xd1'));_0x2cf562[_0x22b2('0x1e')][_0x22b2('0xcf')](_0x22b2('0xd2'),_0x22b2('0xd3'));_0x2cf562[_0x22b2('0x1e')][_0x22b2('0xcf')](_0x22b2('0x1b'),_0x22b2('0xd4'));_0x2cf562['style']['setProperty'](_0x22b2('0xd5'),_0x22b2('0xd6'));_0x2cf562['style'][_0x22b2('0xcf')]('margin',_0x22b2('0x1d'));_0x2cf562['style'][_0x22b2('0xcf')](_0x22b2('0xd7'),_0x22b2('0xd6'));switch(_0xe07ccb){case _0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xc2')]:if(_0x424d6f['getElementById'](_0x57243e))return;_0x2cf562['id']=_0x57243e;_0x2cf562['style']['height']=_0x22b2('0xd8');_0x2cf562['style'][_0x22b2('0x17')]=_0x22b2('0xd9');_0x2cf562[_0x22b2('0x1e')]['left']=_0x22b2('0xda');_0x2cf562['style'][_0x22b2('0x1')]='100px';_0x2cf562[_0x22b2('0x21')](_0x582e19);_0x424d6f[_0x22b2('0x63')][_0x22b2('0x21')](_0x2cf562);break;case _0x47b8c9[_0x22b2('0x3f')][_0x22b2('0x9')]:if(_0x424d6f['getElementById'](_0x4576e9))return;_0x2cf562['id']=_0x4576e9;_0x2cf562[_0x22b2('0x1e')][_0x22b2('0x18')]=_0x22b2('0xd8');_0x2cf562[_0x22b2('0x1e')]['width']='160px';_0x2cf562[_0x22b2('0x1e')][_0x22b2('0x9')]=_0x22b2('0xda');_0x2cf562['style'][_0x22b2('0x1')]=_0x22b2('0xdb');_0x2cf562[_0x22b2('0x21')](_0x582e19);_0x424d6f['body'][_0x22b2('0x21')](_0x2cf562);break;case _0x47b8c9[_0x22b2('0x3f')]['bottom']:if(_0x424d6f['getElementById'](_0x1d16dd))return;_0x2cf562['id']=_0x1d16dd;_0x2cf562[_0x22b2('0x1e')][_0x22b2('0xc2')]=_0x22b2('0xdc');_0x2cf562[_0x22b2('0x1e')]['bottom']=_0x22b2('0xdd');_0x2cf562[_0x22b2('0x1e')]['transform']=_0x22b2('0xde');_0x2cf562[_0x22b2('0x1e')][_0x22b2('0x18')]=_0x22b2('0xdb');_0x2cf562[_0x22b2('0x1e')]['margin']=_0x22b2('0xdf');_0x2cf562['style'][_0x22b2('0xe0')]='0';_0x2cf562[_0x22b2('0x21')](_0x582e19);_0x424d6f['body'][_0x22b2('0x21')](_0x2cf562);break;case _0x47b8c9['autoAds'][_0x22b2('0xa')]:if(_0x424d6f['getElementById'](_0x575a25))return;_0x2cf562['id']=_0x575a25;_0x2cf562[_0x22b2('0xc3')]='<div\x20id=\x22prpl-interstitial\x22>'+_0x22b2('0xe1')+_0x22b2('0xe2');_0x2cf562[_0x22b2('0xe3')][_0x22b2('0xe4')](_0x22b2('0xe5'));_0x2cf562[_0x22b2('0x1e')][_0x22b2('0xcf')](_0x22b2('0xe6'),'hidden');_0x2cf562[_0x22b2('0x1e')][_0x22b2('0xcf')](_0x22b2('0xd0'),_0x22b2('0xe7'));_0x424d6f[_0x22b2('0x63')]['appendChild'](_0x2cf562);_0x424d6f[_0x22b2('0x81')](_0x22b2('0xe8'))[_0x22b2('0x21')](_0x582e19);break;}_0x4bd276[_0x22b2('0x23')](_0x22b2('0xe9'),_0xe07ccb,_0x22b2('0xea'),_0x2cf562);},'getMainContainer':function(_0x44b655,_0x549f2a){var _0x3cd86b=_0x549f2a[_0x22b2('0x4d')];var _0x17826c=_0x549f2a[_0x22b2('0x56')];var _0x410086=window['document'];var _0x48fef1=_0x22b2('0x82')+_0x3cd86b;var _0x2abcc4=_0x410086['getElementById'](_0x48fef1);if(!_0x2abcc4){_0x2abcc4=_0x410086[_0x22b2('0xaf')](_0x22b2('0x1a'));}_0x2abcc4['id']=_0x48fef1;_0x2abcc4[_0x22b2('0x1e')][_0x22b2('0x1b')]=_0x22b2('0xeb');_0x2abcc4[_0x22b2('0x1e')][_0x22b2('0xec')]=_0x22b2('0xed');_0x2abcc4['style'][_0x22b2('0x20')]=_0x22b2('0xee');_0x2abcc4[_0x22b2('0x1e')]['border']=_0x22b2('0xee');_0x2abcc4['style']['padding']=_0x22b2('0xdd');_0x2abcc4[_0x22b2('0x1e')][_0x22b2('0xef')]=_0x22b2('0xdd');_0x2abcc4[_0x22b2('0x1e')][_0x22b2('0xf0')]=_0x22b2('0xf1');_0x2abcc4[_0x22b2('0x1e')]['width']=_0x44b655[0x0]+'px';_0x2abcc4[_0x22b2('0x1e')][_0x22b2('0x18')]=_0x44b655[0x1]+'px';_0x2abcc4[_0x22b2('0x1e')]['margin']=_0x22b2('0x1d');_0x2abcc4[_0x22b2('0xbb')](_0x22b2('0xf2'),'');_0x2abcc4[_0x22b2('0xbb')](_0x22b2('0xf3'),_0x17826c);if(_0x537144[_0x22b2('0x1f')]){var _0x4e69e1=document[_0x22b2('0xaf')](_0x22b2('0x1a'));_0x4e69e1['id']='pa-slot-demand-'+_0x3cd86b;_0x4e69e1['style'][_0x22b2('0xd2')]=_0x22b2('0xc0');_0x4e69e1[_0x22b2('0x1e')][_0x22b2('0xf0')]='10';if(document[_0x22b2('0x81')](_0x22b2('0xf4')+_0x3cd86b)){_0x4e69e1=document[_0x22b2('0x81')](_0x22b2('0xf4')+_0x3cd86b);}else{var _0x5274a6=document[_0x22b2('0xaf')](_0x22b2('0x1a'));_0x5274a6[_0x22b2('0x1e')]['display']=_0x22b2('0xd4');_0x5274a6[_0x22b2('0x1e')][_0x22b2('0xf0')]='20';_0x5274a6[_0x22b2('0xc3')]=_0x22b2('0xf5')+_0x549f2a[_0x22b2('0x4d')]+_0x22b2('0xf6');_0x4e69e1[_0x22b2('0x21')](_0x5274a6);}_0x2abcc4['style'][_0x22b2('0xf7')]='2px';_0x2abcc4[_0x22b2('0x1e')][_0x22b2('0xf8')]='#8d00ff';_0x2abcc4[_0x22b2('0x1e')][_0x22b2('0xf9')]=_0x22b2('0xfa');var _0x460e86=document[_0x22b2('0xaf')](_0x22b2('0x1a'));_0x460e86[_0x22b2('0x1e')][_0x22b2('0x1b')]=_0x22b2('0xfb');_0x460e86[_0x22b2('0x1e')][_0x22b2('0xd2')]=_0x22b2('0xfc');_0x460e86[_0x22b2('0x1e')]['marginRight']=_0x22b2('0xfd');_0x460e86[_0x22b2('0xc3')]=_0x22b2('0xfe')+_0x549f2a['demand']+_0x22b2('0xf6');_0x4e69e1['appendChild'](_0x460e86);_0x2abcc4[_0x22b2('0x21')](_0x4e69e1);}return _0x2abcc4;},'getAdContainerIframe':function(_0x52ef86,_0x31303f){var _0x50cfa7=window[_0x22b2('0x5')];var _0x30cce1=_0x22b2('0xa1')+_0x31303f;var _0x292130=_0x50cfa7['getElementById'](_0x30cce1);if(!_0x292130){_0x292130=_0x50cfa7[_0x22b2('0xaf')](_0x22b2('0xff'));}_0x292130['id']=_0x30cce1;_0x292130[_0x22b2('0x100')]='0';_0x292130[_0x22b2('0x101')]='0';_0x292130[_0x22b2('0x102')]='no';_0x292130[_0x22b2('0x103')]='true';_0x292130[_0x22b2('0x17')]=_0x52ef86[0x0];_0x292130[_0x22b2('0x18')]=_0x52ef86[0x1];_0x292130[_0x22b2('0x104')]=_0x22b2('0xd6');_0x292130[_0x22b2('0x1e')][_0x22b2('0x17')]=_0x52ef86[0x0]+'px';_0x292130[_0x22b2('0x1e')][_0x22b2('0x18')]=_0x52ef86[0x1]+'px';_0x292130[_0x22b2('0x1e')][_0x22b2('0x105')]=_0x22b2('0x1d');_0x292130[_0x22b2('0x1e')][_0x22b2('0xd2')]='relative';_0x292130['style'][_0x22b2('0x101')]='0';_0x292130[_0x22b2('0xbb')]('pa-slot-iframe-container','');return _0x292130;},'getViewportSize':function(){var _0x995344,_0x3ec6af,_0x1ed907;try{_0x1ed907=_0x3a073c()[_0x22b2('0x106')];_0x3ec6af=(_0x995344=_0x1ed907[_0x22b2('0x63')])&&_0x1ed907[_0x22b2('0x107')]&&_0x1ed907[_0x22b2('0x108')];}catch(_0x45501c){_0x1ed907=document[_0x22b2('0x106')];_0x3ec6af=(_0x45501c=document[_0x22b2('0x63')])&&document['clientWidth']&&document['clientHeight'];}var _0xf90812=[];_0x1ed907&&_0x1ed907['clientWidth']&&_0x1ed907['clientHeight']&&(_0x22b2('0x109')==document[_0x22b2('0x10a')]||!_0x3ec6af)?_0xf90812=[_0x1ed907['clientWidth'],_0x1ed907[_0x22b2('0x108')]]:_0x3ec6af&&(_0xf90812=[_0x1ed907[_0x22b2('0x107')],_0x1ed907[_0x22b2('0x108')]]);return _0xf90812;},'shouldInjectSticky':function(){var _0x1c62b7=!![];if(_0x522421[_0x22b2('0x10b')]()[0x0]<=_0x47b8c9['stickyMediaBreak']){_0x1c62b7=![];}return _0x1c62b7;},'isMobile':function(){var _0x44085b=![];(function(_0x191afa){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i[_0x22b2('0x10c')](_0x191afa)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i['test'](_0x191afa[_0x22b2('0x10d')](0x0,0x4)))_0x44085b=!![];}(navigator['userAgent']||navigator[_0x22b2('0x10e')]||window[_0x22b2('0x10f')]));if(_0x522421[_0x22b2('0x10b')]()[0x0]<=_0x47b8c9[_0x22b2('0x110')]){_0x44085b=!![];}return _0x44085b;},'toBase64':function(_0x337143){return btoa(unescape(encodeURIComponent(_0x337143)));}};var _0x4bd276={'getArgs':function(_0x437b98,_0x198bc5){var _0x2f5d4c=new Date()[_0x22b2('0x111')]()+':'+new Date()[_0x22b2('0x112')]()+':'+new Date()[_0x22b2('0x113')]();var _0x247f7b=Array[_0x22b2('0x114')]['slice'][_0x22b2('0x115')](_0x437b98);switch(_0x198bc5){case _0x22b2('0x3'):_0x247f7b[_0x22b2('0xb7')]('❌');break;case'success':_0x247f7b[_0x22b2('0xb7')]('✅');break;}if(_0x522421[_0x22b2('0x116')]())_0x247f7b['unshift']('['+_0x522421[_0x22b2('0x116')]()+']');_0x247f7b[_0x22b2('0xb7')]('['+_0x2f5d4c+']');_0x247f7b['unshift'](_0x22b2('0x117'));_0x247f7b[_0x22b2('0xb7')]('%cPurpleAds\x20Display');return _0x247f7b;},'log':function(_0xb5fd81,_0x1133cb){var _0x754f5f=this['getArgs'](_0xb5fd81,_0x1133cb);window[_0x22b2('0x118')][_0x22b2('0x119')][_0x22b2('0x11a')](window['console'],_0x754f5f);},'error':function(){if(_0x537144[_0x22b2('0x1f')]){this[_0x22b2('0x119')](arguments,_0x22b2('0x3'));}},'success':function(){if(_0x537144['debug']){this[_0x22b2('0x119')](arguments,'success');}},'info':function(){if(_0x537144[_0x22b2('0x1f')]){this[_0x22b2('0x119')](arguments,_0x22b2('0x26'));}},'out':function(){this[_0x22b2('0x119')](arguments);},'groupEnd':function(){if(_0x537144[_0x22b2('0x1f')]){window['console'][_0x22b2('0x11b')][_0x22b2('0x11a')](window[_0x22b2('0x118')],arguments);}},'group':function(){if(_0x537144[_0x22b2('0x1f')]){var _0x42b4d8=Array['prototype'][_0x22b2('0x11c')]['call'](arguments);_0x42b4d8['unshift'](_0x22b2('0x11d'));_0x42b4d8['unshift'](_0x22b2('0x11e'));window['console'][_0x22b2('0x119')]['apply'](window[_0x22b2('0x118')],_0x42b4d8);}}};var _0x369bc3={'init':function(){var _0x40b221=_0x522421[_0x22b2('0xa7')](document[_0x22b2('0x11f')]['src'],_0x22b2('0x56'));_0x4bd276[_0x22b2('0x120')](_0x22b2('0x121'),_0x47b8c9[_0x22b2('0x5b')]);_0x4bd276[_0x22b2('0x26')](_0x22b2('0x122'),_0x522421[_0x22b2('0x116')]());_0x4bd276[_0x22b2('0x26')](_0x22b2('0x123'),_0x40b221);_0x4bd276[_0x22b2('0x26')](_0x22b2('0x124'),_0x522421['getPAUserID']());_0x369bc3[_0x22b2('0x125')]();_0x369bc3[_0x22b2('0x126')]();_0x369bc3['injectPageStyles']();_0xde2ef6[_0x22b2('0x127')]();_0xde2ef6[_0x22b2('0x128')]();_0xde2ef6[_0x22b2('0x129')](_0x40b221);_0x522421[_0x22b2('0x2d')]();},'injectPageStyles':function(){var _0x13d071=_0x3a073c();if(_0x13d071['getElementById'](_0x22b2('0x12a')))return;_0x4bd276[_0x22b2('0x26')](_0x22b2('0x12b'));var _0x3bf38d=_0x13d071[_0x22b2('0xaf')](_0x22b2('0x1e'));_0x3bf38d[_0x22b2('0xc3')]=_0x369bc3[_0x22b2('0x12c')](null,_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xa')]);_0x3bf38d['id']=_0x22b2('0x12a');_0x13d071[_0x22b2('0x12d')]['appendChild'](_0x3bf38d);},'checkStickySlots':function(){var _0x216124=_0x522421[_0x22b2('0xa7')](document[_0x22b2('0x11f')]['src'],_0x22b2('0x56'));_0x4bd276[_0x22b2('0x26')](_0x22b2('0x12e'),_0x216124);_0x40c252['endpoints'][_0x22b2('0x12f')](_0x216124,function(_0x5f4be6,_0x3a5686,_0x274626){var _0x2a963b=_0x274626[_0x22b2('0x130')];var _0x3f922e=this[_0x22b2('0x131')];if(_0x2a963b[_0x22b2('0x3f')]){if(_0x2a963b[_0x22b2('0x3f')]['adsense']){_0x537144[_0x22b2('0x16')]=!![];}Object[_0x22b2('0x132')](_0x2a963b[_0x22b2('0x3f')])[_0x22b2('0x10')](function(_0x58c079){if(_0x2a963b[_0x22b2('0x3f')][_0x58c079]===!![]){_0x522421[_0x22b2('0x133')](_0x58c079,_0x3f922e);}});}}[_0x22b2('0x134')]({'pubId':_0x216124}));},'getPageSlotStatus':function(_0x316e2a){return _0x126678[_0x22b2('0x33')][_0x22b2('0x3a')](_0x316e2a);},'reportAdagioView':function(_0x115c74,_0x2bd953,_0x40338d,_0x22d438){try{var _0x1ce4c9=_0x5d4002();_0x1ce4c9[_0x22b2('0x135')]=_0x1ce4c9[_0x22b2('0x135')]||{};_0x1ce4c9[_0x22b2('0x135')][_0x22b2('0x136')]=_0x1ce4c9['ADAGIO']['queue']||[];_0x1ce4c9[_0x22b2('0x135')][_0x22b2('0x136')][_0x22b2('0x43')]({'action':_0x22b2('0x137'),'data':{'eventName':_0x22b2('0x138'),'args':{'isEmpty':_0x115c74,'elementId':_0x2bd953,'creativeId':_0x40338d||null,'creativeSize':_0x22d438}},'ts':Date['now']()});_0x4bd276[_0x22b2('0x26')](_0x22b2('0x139'),_0x115c74,_0x2bd953,_0x40338d,_0x22d438);}catch(_0x3e6b92){_0x4bd276[_0x22b2('0x3')]('[reportAdagioView]:\x20failed\x20to\x20report\x20winner\x20to\x20adagio',_0x115c74,_0x2bd953,_0x40338d,_0x22d438);}},'gptRenderEnded':function(_0x14d204,_0x1bf1cc,_0x118fc4){_0x4bd276['info'](_0x22b2('0x13a'),_0x14d204,'slotId:',_0x1bf1cc);var _0xc3b503=_0x118fc4&&_0x118fc4[_0x22b2('0x5')]||window[_0x22b2('0x5')];var _0x54313f=_0x126678[_0x22b2('0x33')][_0x22b2('0x3a')](_0x1bf1cc);var _0x16f042=![];if(_0x54313f&&_0x54313f[_0x22b2('0x52')]&&_0x54313f['scriptElem']['hasAttribute']('pa-adsense-unfilled')){_0x16f042=!![];}if(_0x14d204['isEmpty']){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x13b'));_0x4bd276[_0x22b2('0x26')](_0x22b2('0x13c'));var _0x31623b=_0xc3b503['getElementById'](_0x22b2('0x82')+_0x1bf1cc)||_0x3a073c()['getElementById'](_0x22b2('0x82')+_0x1bf1cc);_0x369bc3['reportAdagioView'](!![],_0x22b2('0x82')+_0x1bf1cc,null,null);if(!_0x54313f){_0x54313f=_0x5d4002()[_0x22b2('0x13d')][_0x1bf1cc];_0x31623b[_0x22b2('0x13e')]();}_0x18487c[_0x22b2('0xe4')](_0x54313f);}else{var _0x11f6cc=_0xc3b503[_0x22b2('0x81')](_0x22b2('0x82')+_0x1bf1cc);var _0x2d6998=_0xc3b503['getElementById'](_0x22b2('0xa1')+_0x1bf1cc);try{if(_0x2d6998[_0x22b2('0x36')][_0x22b2('0x13f')]){var _0x577121=_0x2d6998[_0x22b2('0x36')][_0x22b2('0x13f')][_0x22b2('0x140')]();_0x577121&&_0x577121[_0x22b2('0x31')]>0x0?_0x577121=_0x577121[0x0]:null;const _0x9b9a23={'demand':_0x577121[_0x22b2('0x141')],'cpm':_0x577121[_0x22b2('0x142')],'adunit':'banner','params':_0x577121[_0x22b2('0x143')]&&_0x577121[_0x22b2('0x143')]['length']>0x0?_0x577121[_0x22b2('0x143')][0x0]:{}};if(_0x1bf1cc&&_0x1bf1cc[_0x22b2('0x3e')](_0x47b8c9['autoAds'][_0x22b2('0xa')])>-0x1){_0x9b9a23['product']=_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xa')];var _0x4f1984=_0x22b2('0x9f');var _0x5f31f7=new Date(Date[_0x22b2('0xa0')]()+0x5*0x3c*0x3e8);_0x5d4002()[_0x22b2('0x95')][_0x22b2('0x96')](_0x4f1984,_0x5f31f7['getTime']()[_0x22b2('0x60')]());_0x4bd276['info']('[gptRenderEnded]\x20Marked\x20interstitial\x20as\x20shown,\x20next\x20time\x20is',new Date(_0x5f31f7));}if(_0x16f042){_0x9b9a23[_0x22b2('0x144')]=_0x47b8c9['autoAds'][_0x22b2('0x16')];}_0x369bc3[_0x22b2('0x145')](![],_0x22b2('0x82')+_0x1bf1cc,_0x577121[_0x22b2('0x146')]||_0x577121['adId'],_0x14d204['size']);_0x4bd276[_0x22b2('0x26')]('⭐️\x20[gptRenderEnded\x20Prebid]:',_0x1bf1cc,_0x9b9a23,_0x22b2('0x147'),_0x577121?_0x577121[_0x22b2('0x148')]:_0x22b2('0x149'),_0x22b2('0x14a'),_0x577121?_0x577121[_0x22b2('0x142')]:'No\x20Bid');_0x40c252[_0x22b2('0x14b')][_0x22b2('0x14c')](_0x9b9a23,{'publisherId':_0x54313f[_0x22b2('0x56')]},function(_0x30bc29,_0x3e25f9,_0x32ced3){_0x4bd276['success'](_0x22b2('0x14d'));});if(_0x577121['ad']&&_0x522421[_0x22b2('0x14e')](_0x577121['ad'],_0x577121[_0x22b2('0x141')])){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x14f'),_0x577121['ad']);_0x40c252[_0x22b2('0x14b')][_0x22b2('0x150')]({'demand':_0x577121['bidderCode'],'adunit':_0x22b2('0x151'),'winner':_0x577121},{'publisherId':_0x54313f['publisherId']},function(_0x12b463,_0x13b2b7,_0xca13a0){_0x4bd276[_0x22b2('0x23')]('[gptRenderEnded\x20Prebid]:\x20Reported\x20ad\x20creative\x20redirection\x20code');});}_0x126678[_0x22b2('0x33')][_0x22b2('0x152')](_0x1bf1cc,_0x577121[_0x22b2('0x148')]);}}catch(_0x16f836){_0x4bd276['error'](_0x22b2('0x153'),_0x2d6998,_0x16f836);}var _0x38b90a=_0x14d204[_0x22b2('0x154')][0x0]+'px';var _0x3ae535=_0x14d204['size'][0x1]+'px';_0x11f6cc[_0x22b2('0x1e')][_0x22b2('0xcf')]('width',_0x38b90a,_0x22b2('0x155'));_0x11f6cc[_0x22b2('0x1e')][_0x22b2('0xcf')](_0x22b2('0x18'),_0x3ae535,'important');_0x2d6998['style'][_0x22b2('0xcf')](_0x22b2('0x17'),_0x38b90a,'important');_0x2d6998['style'][_0x22b2('0xcf')](_0x22b2('0x18'),_0x3ae535,_0x22b2('0x155'));if(_0x1bf1cc['indexOf'](_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xa')])>-0x1){setTimeout(function(){var _0x538bc9=_0x3a073c()[_0x22b2('0x81')](_0x22b2('0xce'));if(!_0x538bc9){_0x4bd276[_0x22b2('0x3')](_0x22b2('0x156'));return;}_0x538bc9[_0x22b2('0x1e')][_0x22b2('0xe6')]=_0x22b2('0x2c');setTimeout(function(){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x157'));_0x538bc9['remove']();},0x1770);},0x3e8);}setTimeout(function(){var _0x471f19=null;try{_0x471f19=_0x2d6998[_0x22b2('0x36')][_0x22b2('0x5')][_0x22b2('0x37')](_0x22b2('0x158'));if(_0x471f19){_0x471f19[_0x22b2('0x36')][_0x22b2('0x5')]['body'][_0x22b2('0x1e')]['margin']='0';}}catch(_0x51c68c){_0x4bd276['error'](_0x22b2('0x159'),_0x471f19,err);}},0xfa);var _0x258d8c=_0x54313f['iu'];_0x40c252['endpoints']['reportImpression'](_0x258d8c,{'publisherId':_0x54313f['publisherId']},function(_0x8fee33,_0x3dfb40,_0x114174){_0x4bd276[_0x22b2('0x23')]('[gptRenderEnded]\x20Reported\x20ad\x20impression\x20for\x20slot\x20'+this);}['bind'](_0x1bf1cc));}},'refreshSlots':function(){setTimeout(function(){_0x4bd276[_0x22b2('0x26')]('[refreshSlots]\x20Refreshing\x20slots...');var _0x3c1ced=_0x369bc3['getPageSlots'](!![]);for(var _0x1833fc=0x0;_0x1833fc<_0x3c1ced[_0x22b2('0x31')];_0x1833fc++){var _0x3db12a=_0x3c1ced[_0x1833fc];var _0x404f09=_0x3db12a[_0x22b2('0x52')];var _0x4f31b5=_0x3db12a[_0x22b2('0x4d')];var _0x4cee5b=_0x3a073c()['querySelector'](_0x22b2('0x15a')+_0x4f31b5)||document[_0x22b2('0x37')](_0x22b2('0x15a')+_0x4f31b5);_0x4cee5b[_0x22b2('0x13e')]();if(_0x522421['getPubId'](_0x404f09)){_0x404f09[_0x22b2('0xbb')](_0x22b2('0x15b'),_0x4f31b5);_0x18487c[_0x22b2('0xe4')](_0x3db12a);}}_0x369bc3['checkSlotsQueue']();},0x3e8);},'getPageSlotsContainers':function(_0x557736){var _0x2e2b7c=[];var _0x56417e=window[_0x22b2('0x5')]['querySelectorAll']('div[id*=\x22pa-slot-\x22][pa-slot-container]');if(_0x557736){_0x56417e=window[_0x22b2('0x5')]['querySelectorAll'](_0x22b2('0x15c'));}for(var _0x28a7da=0x0;_0x28a7da<_0x56417e[_0x22b2('0x31')];_0x28a7da++){_0x2e2b7c['push'](_0x56417e[_0x28a7da]['id']);}return _0x2e2b7c;},'getPageSlots':function(_0x35df48){var _0x268702=[];var _0x5d1219=window[_0x22b2('0x5')][_0x22b2('0xe')]('script[src*=\x27cdn.purpleads.io/agent.js\x27]:not([data-pa-tag])');for(var _0x518f0f=0x0;_0x518f0f<_0x5d1219[_0x22b2('0x31')];_0x518f0f++){var _0x20b782=_0x5d1219[_0x518f0f];_0x20b782[_0x22b2('0xbb')]('data-pa-tag','');}var _0x79b8ba=window[_0x22b2('0x5')][_0x22b2('0xe')](_0x22b2('0x15d'));if(_0x35df48){_0x79b8ba=window[_0x22b2('0x5')]['querySelectorAll']('script[data-pa-tag]');}for(var _0x4453c4=0x0;_0x4453c4<_0x79b8ba[_0x22b2('0x31')];_0x4453c4++){var _0x3e7ff7=_0x79b8ba[_0x4453c4];if(_0x522421[_0x22b2('0x15e')](_0x3e7ff7)){var _0x20fa31=_0x522421['getPubId'](_0x3e7ff7);var _0x1919ab={};_0x1919ab[_0x22b2('0x4d')]=_0x3e7ff7['getAttribute'](_0x22b2('0x15b'))||_0x522421[_0x22b2('0x15f')]();_0x1919ab[_0x22b2('0x56')]=_0x20fa31;_0x1919ab[_0x22b2('0x52')]=_0x3e7ff7;_0x1919ab['sizes']=_0x522421['getSlotSizes'](_0x3e7ff7,_0x1919ab[_0x22b2('0x4d')]);if(_0x1919ab[_0x22b2('0x160')][_0x22b2('0x31')]){_0x268702[_0x22b2('0x43')](_0x1919ab);}else{_0x4bd276[_0x22b2('0x3')]('Slot\x20has\x20no\x20size:\x20',_0x1919ab['slotId'],_0x3e7ff7);}}}return _0x268702;},'findSlots':function(){setInterval(function(){var _0x206d15=_0x369bc3[_0x22b2('0x161')]();for(var _0x1ff9e0=0x0;_0x1ff9e0<_0x206d15[_0x22b2('0x31')];_0x1ff9e0++){var _0x2ca32d=_0x206d15[_0x1ff9e0];var _0x5673f8=_0x2ca32d[_0x22b2('0x52')];var _0x10354c=_0x2ca32d[_0x22b2('0x4d')];if(_0x5673f8['parentElement']['id']['indexOf'](_0x47b8c9[_0x22b2('0x3f')][_0x22b2('0xa')])>-0x1){_0x10354c=_0x2ca32d['slotId']=_0x22b2('0x162')+_0x10354c;}_0x5673f8['setAttribute'](_0x22b2('0x15b'),_0x10354c);_0x18487c[_0x22b2('0xe4')](_0x2ca32d);_0x5d4002()[_0x22b2('0x13d')][_0x2ca32d[_0x22b2('0x4d')]]=_0x2ca32d;}_0x369bc3[_0x22b2('0x163')]();},0xc8);},'checkSlotsQueue':function(){if(!_0x18487c['_q']['length']){return;}_0x4bd276[_0x22b2('0x26')](_0x22b2('0x164'),_0x18487c['_q'][_0x22b2('0x31')]);var _0x37cf67=_0x18487c[_0x22b2('0x3a')]();_0x18487c['flush']();for(var _0x4f80a7=0x0;_0x4f80a7<_0x37cf67[_0x22b2('0x31')];_0x4f80a7++){var _0x25a434=_0x37cf67[_0x4f80a7];var _0x2de695=function(_0x3e242a,_0x27faed,_0x378f05){this['demand']=_0x378f05[_0x22b2('0x3c')];this[_0x22b2('0x51')]?this['previousDemand'][_0x22b2('0x43')](_0x378f05[_0x22b2('0x3c')]):this[_0x22b2('0x51')]=[_0x378f05[_0x22b2('0x3c')]];this['iu']=_0x378f05['iu'];this['cu']=_0x378f05['cu'];this[_0x22b2('0x165')]=_0x378f05[_0x22b2('0x165')];_0x5d4002()['globalSlots'][this[_0x22b2('0x4d')]]=this;_0x126678['pageSlots']['set'](this['slotId'],this);_0x369bc3[_0x22b2('0x166')](this,_0x378f05);}[_0x22b2('0x134')](_0x25a434);_0x126678[_0x22b2('0x33')][_0x22b2('0x167')](_0x25a434[_0x22b2('0x4d')],_0x25a434);_0x5d4002()[_0x22b2('0x13d')][_0x25a434[_0x22b2('0x4d')]]=_0x25a434;_0x40c252[_0x22b2('0x14b')][_0x22b2('0x168')](_0x25a434,_0x2de695);}},'getStylesForSlot':function(_0x28c99f,_0x286670){if(_0x286670){if(_0x286670===_0x47b8c9['autoAds']['interstitial']){return _0x22b2('0x169');}}const _0x38d91b=_0x22b2('0x16a');const _0x43939a=_0x22b2('0x16b');if([_0x22b2('0x16c'),'adplus',_0x22b2('0x16d')][_0x22b2('0x3e')](_0x28c99f)>-0x1)return _0x43939a;else return _0x38d91b;},'injectAd':function(_0x28fa20,_0x1e0717){var _0x1b8cd1=_0x28fa20['scriptElem'];var _0x4a64d9=_0x28fa20[_0x22b2('0x4d')];var _0x2b15b0=_0x28fa20[_0x22b2('0x160')];if(!_0x1e0717['t']||!_0x1e0717['demand']){_0x1b8cd1[_0x22b2('0xbb')](_0x22b2('0x16e'),!![]);_0x4bd276[_0x22b2('0x3')](_0x22b2('0x16f'),_0x4a64d9);_0x126678[_0x22b2('0x33')][_0x22b2('0x67')](_0x4a64d9,_0x47b8c9['slotStatus'][_0x22b2('0xd')]);_0x126678[_0x22b2('0x33')][_0x22b2('0x170')](_0x4a64d9);return;}_0x4bd276[_0x22b2('0x23')](_0x22b2('0x171'),_0x28fa20);var _0x3b19ec=_0x1b8cd1[_0x22b2('0x172')];_0x4bd276[_0x22b2('0x26')]('[injectAd]\x20Sizes\x20that\x20fit\x20slot:',_0x4a64d9,_0x22b2('0x173'),_0x2b15b0);var _0x32781e=_0x2b15b0[0x0];if(!_0x32781e){_0x4bd276[_0x22b2('0x3')]('[injectAd]\x20No\x20size\x20for\x20slot',_0x4a64d9);_0x126678['pageSlots'][_0x22b2('0x67')](_0x4a64d9,_0x47b8c9[_0x22b2('0x55')][_0x22b2('0xd')]);return;}if(_0x522421['isNativeDemand'](_0x28fa20[_0x22b2('0x3c')])){if(_0x1b8cd1['attributes'][_0x22b2('0x174')]||_0x1b8cd1[_0x22b2('0x175')]['pa-sticky-left']){_0x32781e=[0x78,0x258];if(_0x1b8cd1[_0x22b2('0x172')]&&_0x1b8cd1[_0x22b2('0x172')]['id'][_0x22b2('0x3e')](_0x22b2('0x176'))){_0x1b8cd1['parentElement'][_0x22b2('0x1e')]['width']='120px';}}else if(_0x1b8cd1[_0x22b2('0x175')][_0x22b2('0x177')]&&!_0x522421[_0x22b2('0xc6')]()){_0x32781e=[0x2d8,0x5a];}}var _0x65fa15=_0x32781e[_0x22b2('0x50')]('x');var _0x2b2ab7=_0x522421['getMainContainer'](_0x32781e,_0x28fa20);var _0x3bc1dc=_0x522421[_0x22b2('0x178')](_0x32781e,_0x4a64d9);_0x2b2ab7[_0x22b2('0x21')](_0x3bc1dc);_0x3b19ec[_0x22b2('0x21')](_0x2b2ab7);var _0x5240f0=_0x3bc1dc[_0x22b2('0x36')][_0x22b2('0x5')];var _0x2ebe15=document[_0x22b2('0xaf')](_0x22b2('0x1e'));_0x2ebe15['innerHTML']=_0x369bc3[_0x22b2('0x12c')](_0x28fa20[_0x22b2('0x3c')]);var _0x403a28=_0x522421[_0x22b2('0x179')](_0x1e0717);_0x5240f0[_0x22b2('0x17a')](_0x403a28);_0x5240f0[_0x22b2('0x12d')][_0x22b2('0x21')](_0x2ebe15);if(_0x1b8cd1[_0x22b2('0x175')][_0x22b2('0x177')]){_0x522421[_0x22b2('0x17b')](_0x22b2('0xcd'));}if(_0x28fa20['whitelabel']){_0x5240f0[_0x22b2('0x81')](_0x22b2('0x17c'))[_0x22b2('0x1e')][_0x22b2('0xe6')]='hidden';}_0x5240f0['close']();_0x4bd276[_0x22b2('0x23')](_0x22b2('0x17d'),'['+_0x65fa15+']',_0x22b2('0x17e'),_0x4a64d9);_0x126678[_0x22b2('0x33')][_0x22b2('0x67')](_0x4a64d9,_0x47b8c9[_0x22b2('0x55')][_0x22b2('0xb')],_0x32781e);_0x1b8cd1['setAttribute'](_0x22b2('0x17f'),!![]);_0x1b8cd1[_0x22b2('0xbb')](_0x22b2('0x180'),_0x32781e[0x0]);_0x1b8cd1['setAttribute'](_0x22b2('0x181'),_0x32781e[0x1]);_0x1b8cd1[_0x22b2('0xbb')]('pa-pub-id',_0x28fa20[_0x22b2('0x56')]);if(_0x403a28&&_0x403a28['indexOf'](_0x22b2('0x182'))===-0x1&&_0x28fa20['iu']){_0x40c252[_0x22b2('0x14b')][_0x22b2('0x183')](_0x28fa20['iu'],{'publisherId':_0x28fa20[_0x22b2('0x56')]},function(_0x5ecc27,_0x20fb9b,_0x1e0717){_0x4bd276[_0x22b2('0x23')]('[injectAd]\x20Reported\x20ad\x20impression\x20for\x20slot\x20'+this[_0x22b2('0x4d')],_0x22b2('0x184'),this[_0x22b2('0x3c')]);}['bind']({'slotId':_0x4a64d9,'demand':_0x28fa20[_0x22b2('0x3c')]}));}}};if(_0x126678[_0x22b2('0x185')]['get']('purpleads_debug')==='true'){_0x4bd276[_0x22b2('0x26')](_0x22b2('0x186'));_0x4bd276[_0x22b2('0x26')]('PAGE\x20URL',_0x5d4002()[_0x22b2('0x75')]['href']);_0x537144[_0x22b2('0x1f')]=!![];}_0x5d4002()[_0x22b2('0x13d')]=_0x5d4002()[_0x22b2('0x13d')]||{};_0x369bc3[_0x22b2('0x12f')]();if(!_0x5d4002()['purpleadsAgent']){_0x5d4002()[_0x22b2('0x187')]=_0x369bc3;}if(window['top']===window){_0x5d4002()[_0x22b2('0x187')]=_0x369bc3;}if(!window['purpleadsAgent']){window['purpleadsAgent']=_0x369bc3;}setInterval(_0x369bc3[_0x22b2('0x188')],0x3c*0x7d0);}());