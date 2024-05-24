// JavaScript Document

var slider;
var slider03;
var slider08;
// var slider03_student;
var slider05;
var slider07;
var slider02;
// var slider02_student;
var slider04;
var slider06;
var slider09;
var slider10;
var slider11;
var slider12;
var slider13;
var slider14;
var slider15;
var slider16;

$(window).on('load', function(){

	/* スムーズスクロール */
	$('.anq').click(function() {

		// $('.drawer').drawer('close');

    var pdt = 0;
    var hcss = $('header').css('position');
    if (hcss == 'fixed') {
      pdt = $('header').outerHeight();
    }

		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - pdt;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});


	jQuery(function(){
	 jQuery('.tab li').on('click',function(){
	   jQuery('.tab li').removeClass("active");
	   jQuery(this).addClass("active");
	   var id=jQuery(this).attr('id');
	   jQuery('.tab_cnt div').removeClass("active");
	   jQuery('#'+id+'_cnt').addClass("active");
		 slider.update();
		 slider03.update();
		 slider08.update();
		 // slider03_student.update();
		 slider05.update();
		 // slider07.update();
		 slider02.update();
		 // slider02_student.update();
		 slider04.update();
		 // slider06.update();
		 slider09.update();
		 slider10.update();
		 slider11.update();
 		 slider12.update();
		 slider16.update();

	 });
	});

});


$(function() {
  //スライダー
  slider = new Swiper('.slider', {
		initialSlide: 1,
    loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
    navigation: {
      nextEl: '.swiper-button-next-01',
      prevEl: '.swiper-button-prev-01',
    },
		pagination: {
			el: '.swiper-pagination-01',
			type: 'bullets',
		},
		// simulateTouch: false
  });
	slider03 = new Swiper('.slider03', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-03',
			prevEl: '.swiper-button-prev-03',
		},
		pagination: {
			el: '.swiper-pagination-03',
			type: 'bullets',
			simulateTouch: false
		},
		// simulateTouch: false
	});
	slider08 = new Swiper('.slider08', {
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-08',
			prevEl: '.swiper-button-prev-08',
		},
		pagination: {
			el: '.swiper-pagination-08',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	// slider03_student = new Swiper('.slider03_student', {
	// 	loop: true,
	// 	slidesPerView: 1,
	// 	paginationClickable: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next-03_student',
	// 		prevEl: '.swiper-button-prev-03_student',
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination-03_student',
	// 		type: 'bullets',
	// 	},
	// });





  $('.modal').modaal({
		hide_close: true,
		overlay_close: false,
    after_open: function() {
			setTimeout(function(){
				slider.update();
			},50);
      // slider.update();
    }
  });
	$('.close_btn01').on('click', function() {
		$('.modal').modaal('close');
		$('.modal04').modaal('close');
	});

	slider05 = new Swiper('.slider05', {
		initialSlide: 2,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-05',
			prevEl: '.swiper-button-prev-05',
		},
		pagination: {
			el: '.swiper-pagination-05',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	// slider07 = new Swiper('.slider07', {
	// 	loop: true,
	// 	slidesPerView: 1,
	// 	paginationClickable: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next-07',
	// 		prevEl: '.swiper-button-prev-07',
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination-07',
	// 		type: 'bullets',
	// 	},
	// });

	slider02 = new Swiper('.slider02', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-02',
			prevEl: '.swiper-button-prev-02',
		},
		pagination: {
			el: '.swiper-pagination-02',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	$('.modal02').modaal({
		hide_close: true,
		overlay_close: false,
		after_open: function() {
			setTimeout(function(){
				slider02.update();
			},200);
      // slider.update();
    }
	});
	$('.close_btn02').on('click', function() {
		$('.modal02').modaal('close');
		$('.modal03').modaal('close');
	});

	// slider02_student = new Swiper('.slider02_student', {
	// 	loop: true,
	// 	slidesPerView: 1,
	// 	paginationClickable: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next-02_student',
	// 		prevEl: '.swiper-button-prev-02_student',
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination-02_student',
	// 		type: 'bullets',
	// 	},
	// });
	// $('.modal02.student').modaal({
	// 	hide_close: true,
	// 	overlay_close: false,
	// 	after_open: function() {
	// 		setTimeout(function(){
	// 			slider02_student.update();
	// 		},200);
	// 		// slider.update();
	// 	}
	// });


	$('.modal03').modaal({
		hide_close: true,
		overlay_close: false,
		after_open: function() {
			setTimeout(function(){
				slider13.update();
			},200);
      // slider.update();
    }
	});
	$('.modal04').modaal({
		hide_close: true,
		overlay_close: false,
		after_open: function() {
			setTimeout(function(){
				slider14.update();
			},200);
      // slider.update();
    }
	});
	$('.modal05').modaal({
		hide_close: true,
		overlay_close: false,
		after_open: function() {
			setTimeout(function(){
				slider15.update();
			},200);
      // slider.update();
    }
	});

	// $('.close_btn02').on('click', function() {
	// 	$('.modal02.student').modaal('close');
	// });

	slider04 = new Swiper('.slider04', {
		initialSlide: 2,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-04',
			prevEl: '.swiper-button-prev-04',
		},
		pagination: {
			el: '.swiper-pagination-04',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	$('.modal07').modaal({
		hide_close: true,
		overlay_close: false,
		after_open: function() {
			setTimeout(function(){
				slider04.update();
			},200);
      // slider.update();
    }
	});
	$(dal05').modaal('close');
	});

	// slider06 = new Swiper('.slider06', {
	// 	loop: true,
	// 	slidesPerView: 1,
	// 	paginationClickable: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next-06',
	// 		prevEl: '.swiper-button-prev-06',
	// 	},
	// 	pagination: {
	// 		el: '.swiper-pagination-06',
	// 		type: 'bullets',
	// 	},
	// });
	$('.modal08').modaal({
		hide_close: true,
		overlay_close: false,
		after_open: function() {
			setTimeout(function(){
				slider06.update();
			},50);
      // slider.update();
    }
	});
	$('.close_btn09').on('click', function() {
		$('.modal09').modaal('close');
	});
	$('.modal09').modaal({
		hide_close: true,
		overlay_  // slider.update();
    }
	});
	$(dal09').modaal('close');
	});

	slider09 = new Swiper('.slider09', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-09',
			prevEl: '.swiper-button-prev-09',
		},
		pagination: {
			el: '.swiper-pagination-09',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	slider10 = new Swiper('.slider10', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-10',
			prevEl: '.swiper-button-prev-10',
		},
		pagination: {
			el: '.swiper-pagination-10',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	slider11 = new Swiper('.slider11', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-11',
			prevEl: '.swiper-button-prev-11',
		},
		pagination: {
			el: '.swiper-pagination-11',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	slider12 = new Swiper('.slider12', {
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-12',
			prevEl: '.swiper-button-prev-12',
		},
		pagination: {
			el: '.swiper-pagination-12',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	slider13 = new Swiper('.slider13', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-13',
			prevEl: '.swiper-button-prev-13',
		},
		pagination: {
			el: '.swiper-pagination-13',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	slider14 = new Swiper('.slider14', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-14',
			prevEl: '.swiper-button-prev-14',
		},
		pagination: {
			el: '.swiper-pagination-14',
			type: 'bullets',
		},
		// simulateTouch: false
	});
	slider15 = new Swiper('.slider15', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-15',
			prevEl: '.swiper-button-prev-15',
		},
		pagination: {
			el: '.swiper-pagination-15',
			type: 'bullets',
		},
		// simulateTouch: false
	});

	slider16 = new Swiper('.slider16', {
		initialSlide: 1,
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		paginationClickable: true,
		navigation: {
			nextEl: '.swiper-button-next-16',
			prevEl: '.swiper-button-prev-16',
		},
		pagination: {
			el: '.swiper-pagination-16',
			type: 'bullets',
		},
		// simulateTouch: false
	});

	objectFitImages('img.object-fit');





});
