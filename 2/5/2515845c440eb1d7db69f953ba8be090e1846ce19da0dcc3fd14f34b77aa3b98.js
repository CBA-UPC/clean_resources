$(document).ready(function(){
	$('.top_banner_close').click(function(){
		$("#top_banner").slideToggle(200).remove();
		$(".panel_top_banner").slideToggle(200).remove();
		$('.is_stuck').css('margin-top', 0);
		$('#nav.is_stuck').css('padding-top', 0);
		$("#top_billboard").css("padding-top", 0);
		$(document.body).trigger("sticky_kit:recalc");
	});
	$('.bottom_banner_close').click(function(){
		$("#bottom_banner").slideToggle(200).remove();
		$(".bottom_banner_bar").slideToggle(200).remove();
		$('#breaking_news').css('margin-bottom', 15);
		$("#live_tv").css("margin-bottom", 0);
		$(document.body).trigger("sticky_kit:recalc");
	});
	$('.otp_banner_close').click(function(){
		$("#otp_banner").remove();
	});
	/*$("#otp_banner").delay(2000).fadeIn();
	$("#otp_banner").delay(100000).fadeOut();*/

	$("#otp_banner").delay(30000).fadeOut();

	$("#sto_banner").delay(30000).fadeOut();

	$('.close_sto').click(;
	
	$('.bill_banner_close').click(function(){
		$(".bb_show").slideUp(100);
		$(".bb_hide").show(); 
	});
	$('.bb_hide').click(;

	// IMPROVEMENTS
	if (($('#top_banner').length > 0) && ($('#top_billboard').length > 0))
	{
	    $("#top_billboard").css("padding-top", 50);
	    $(".is_stuck").css("margin-top",50);
	}

	if ($('#bottom_banner').length > 0)
	{
	    $("#live_tv").css("margin-bottom", 50);
	    $("#breaking_news.is_stuck").css("margin-bottom", 65);
	}

});