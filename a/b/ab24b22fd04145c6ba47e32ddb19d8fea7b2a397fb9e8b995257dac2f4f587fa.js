var htls = $('#top_banner').outerHeight(true) || 0;
var htb = $('#top_billboard').outerHeight(true) || 0;
var hnv = $('#nav').outerHeight(true) || 0;
var hhs = hnv+htls+htb+10;

function recalc_async(){
	setTimeout(function(){
		$(document.body).trigger("sticky_kit:recalc");
		console.log('recalc');
	}, 1000);
}

function make_sticky_top_bb() {
	$("#top_billboard").stick_in_parent({
        parent: "#sticky_top_bill",
        offset_top: 0,
        inner_scrolling: false,
        spacer:false,
        // recalc_every:1
    })
    .on('sticky_kit:bottom', function(e) {
        $(this).parent().css('position', 'static');
    })
    .on('sticky_kit:unbottom', function(e) {
        $(this).parent().css('position', 'relative');
    });
    $('body').delay(500).queue(function() {
       $(document.body).trigger("sticky_kit:recalc");
    });
    if ($('#top_banner').length > 0)
	{
	    $("#header").css({
	    	"padding-top": 50
	    });
	    $(".is_stuck").css("margin-top",50);
	    $("#nav").css("top",htls);
	    $(document.body).trigger("sticky_kit:recalc");

	}
}

function skinner_async(){
	var hdz = $('#header').outerHeight();
	$('.bn_skin').css("top",hdz);
}

$(document).ready(function(){

	make_sticky_top_bb();
	detectWidthTB();
	parallax();
	skinner_async();
});

function sto_async(){
	$('.close_sto').click(function(){
		$("#sto_banner").remove();
	});
	$("#sto_banner").delay(30000).fadeOut();
}
function otp_async(){
	$('.close_otp').click(function(){
		$("#otp_banner").remove();
	});
	$("#otp_banner").delay(30000).fadeOut();
	if ($('#top_banner').length > 0)
	{
	    $("#otp_banner").css({
	    	"top": "20%"
	    });
	}
}

function tb_frame_async(){
	$('.close_tb').click(function(){
		$("#top_banner").slideToggle(200).remove();
		$(".panel_top_banner").slideToggle(200).remove();
		$('.is_stuck').css('margin-top', 0);
		$('#nav.is_stuck').css('padding-top', 0);
		$('.bn_skin').removeClass("bn_stucked");
		$("#header").css({
	    	"padding-top": 0
	    });

		skinner_async();

	    $("#otp_banner").css({
	    	"top": "30%"
	    });
		$(document.body).trigger("sticky_kit:recalc");
	});
	if ($('#top_banner').length > 0)
	{
	    $("#header").css({
	    	"padding-top": 50
	    });
		skinner_async();
	    // $(".is_stuck").css("margin-top",50);
	    // $("#nav").css("top",htls);
	    // $(document.body).trigger("sticky_kit:recalc");

	}
	if ($('#top_banner').length) {
		    var tbId=document.querySelector(".top_banner");
			var tbWidth= tbId.clientWidth / 2;
			$(".top_banner").css({"left" : "calc(50% - " + tbWidth + "px)","opacity":"1"});
		}
}

function tbot_frame_async(){
	$('.close_tbot').click(function(){
		$('footer').css("padding-bottom",0);
		$("#bottom_banner").slideToggle(200).remove();
	});
	if ($('#bottom_banner').length > 0)
	{
	    $("#live_tv").css("margin-bottom", 50);
	    $("#breaking_newsa").css("margin-bottom", 55);
	    $("#box_breaking_news").css("margin-bottom", -55);
	    $('footer').css("padding-bottom",50);
	}

	if ($('#bottom_banner').length) {
	    var bbId=document.querySelector(".bottom_banner");
		var bbWidth= bbId.clientWidth / 2;
		$(".bottom_banner").css({"left" : "calc(50% - " + bbWidth + "px)","opacity":"1"});
	}

}

function billboard_async(){
	$('.show_billboard').click(function(){
		$(".bb_banner").slideDown(100);
		$(".show_billboard").hide();
		$(".hide_billboard").show();
		$(document.body).trigger("sticky_kit:recalc");
	});
	$('.hide_billboard').click(function(){
		$(".bb_banner").slideUp(100);
		$(".show_billboard").show();
		$(".hide_billboard").hide();
		$(document.body).trigger("sticky_kit:recalc");
	});
}

function detectWidthTB() {
	if ($('#top_banner').length) {
	    var tbId=document.querySelector(".top_banner");
		var tbWidth= tbId.clientWidth / 2;
		var tbHeight= tbId.clientHeight;
		$(".top_banner").css({"left" : "calc(50% - " + tbWidth + "px)","opacity":"1"});
	}
	if ($('#bottom_banner').length) {
	    var bbId=document.querySelector(".bottom_banner");
		var bbWidth= bbId.clientWidth / 2;
		var bbHeight= bbId.clientHeight;
		$(".bottom_banner").css({"left" : "calc(50% - " + bbWidth + "px)","opacity":"1"});
	}
}
function nullLB() {
	$('.leaderboard_container').remove();
}
function VRScript() {
	var lbId=document.getElementById("leaderboard");
	var tbId=document.getElementById("top_banner");
	var headerHeight = $('.r_content').offset().top;
	var windowTop = $(window).scrollTop();
	if ($(this).scrollTop() >= headerHeight) {
        $('.leaderboard').addClass('is_floating');
        if ($('.leaderboard_container').length) {
	        if ($('#top_banner').length) {
	        	$('#top_banner .top_banner').addClass('d_marginTB');
		    }
        }
    } else {
        $( '.leaderboard' ).fadeIn( 300 );
        $('.leaderboard').removeClass('is_floating');
        if ($('.leaderboard_container').length) {
	        if ($('#top_banner').length) {
	        	$('#top_banner .top_banner').removeClass('d_marginTB');
		    }
        }
    }
}
function parallax() {
  $('.parallax').each(function () {
      var elem = $(this);
      var elemB = $(this).find('.parallax_container');
      var parallaxHeight= elemB.innerHeight();
      var parallaxOffset = elem.offset().top;
      var wHeight = $(window).height();
      $(window).scroll(function () {
          var top = $(window).scrollTop();
          var scrolled = -(parallaxOffset-top) / (wHeight-(parallaxHeight*2));
          if (top > parallaxOffset - parallaxHeight && top < parallaxOffset + parallaxHeight) {
              elemB.css({top: scrolled *  (wHeight - parallaxHeight) + 'px', bottom:'auto'});
              if (top > parallaxOffset) {
                elemB.css({top: '0px', bottom:'auto'});
              }
          } else {
              elemB.css({top: 'auto', bottom:'auto'});
          }
      });
  });
}
$(document).scroll(function() {
	VRScript();
});

// scroll action
$(window).scroll(function() {
	// skinner 1
	if ($('.bn_skin').length > 0){
		if($(window).scrollTop() >= hhs) {
	        $('.bn_skin').addClass("bn_stucked");
	    }
	    else {
	        $('.bn_skin').removeClass("bn_stucked");
	    }

	    $('body').delay(500).queue(function() {
	       $(document.body).trigger("sticky_kit:recalc");
	    });
	}
});n,
            },
            success: function (d) {
                console.log(d);
            }
        });
    });
  }

  resendToken();
  requestPermission();

