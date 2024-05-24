
<!DOCTYPE html>
<body style="margin:0px;">
    <script async type="application/javascript" src="https://a.magsrv.com/build-iframe-js-url.js?idzone=5126332"></script>
    <script async type="application/javascript" src="https://a.magsrv.com/ad-provider.js"></script>
</body>
ed = true,\n";
var_tesmq0wwq0 += "ad_new_tab = false,\n";
var_tesmq0wwq0 += "ad_frequency_period = 60,\n";
var_tesmq0wwq0 += "ad_frequency_count = 1,\n";
var_tesmq0wwq0 += "ad_trigger_method = 3,\n";
var_tesmq0wwq0 += "ad_trigger_delay = 0\n";
var_tesmq0wwq0 += "ad_t_venor = false;\n";
var_tesmq0wwq0 += "<"+"/script>\n";
var_tesmq0wwq0 += "<"+"script type=\"application/javascript\" src=\"https://a.pemsrv.com/popunder1000.js\"><"+"/script>\n";
document.write(var_tesmq0wwq0);
00);
});


$("#like_btn").click(function(e) {
		$("#message_result").html('');
	    $.ajax({
	        url: '/inc/add_like.php',
	        type: 'POST',
	        data: {
	        	gallery_id: $("#gallery_id").val(),
	        },
	        success:function(response){

	           var like_count = $("#like_btn span").html();
	           var new_like_count = parseInt(like_count)+1;

	           var response_split = response.split(",");
	           var response = response_split[0];

	           if(response == 'already') {
					$('#dlike_btn').prop('disabled', true);
	           		$('#like_btn').prop('disabled', true);
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You already rated this gallery. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           }
	           else if(response == 'success') {
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i> Thanks for your like! <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           		$('#like_btn span').html(new_like_count);
	           		$('#like_btn').attr('disabled', true);
	           		$('#dlike_btn').prop('disabled', true);
	           }
	           else {
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem voting on this gallery, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           }

	        },
	        error: function(xhr, textStatus, error){
				$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem voting on this gallery, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
			}
	   });
	   return false;
	});

$("#dlike_btn").click(function(e) {
		$("#message_result").html('');
	    $.ajax({
	        url: '/inc/add_dlike.php',
	        type: 'POST',
	        data: {
	        	gallery_id: $("#gallery_id").val(),
	        },
	        success:function(response){

	           var dlike_count = $("#dlike_btn span").html();
	           var new_dlike_count = parseInt(dlike_count)+1;

	           var response_split = response.split(",");
	           var response = response_split[0];
				
			   if(response == 'not_logged') {
					$('#dlike_btn').prop('disabled', true);
					$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You have to be logged in for dislike this gallery. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
			   }
	           else if(response == 'already') {
					$('#dlike_btn').prop('disabled', true);
	           		$('#like_btn').prop('disabled', true);
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You already rated this gallery. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           }
	           else if(response == 'success') {
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i> We are sad to know :( but thanks for your dislike. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           		$('#dlike_btn span').html(new_dlike_count);
	           		$('#dlike_btn').prop('disabled', true);
	           		$('#like_btn').prop('disabled', true);
	           }
	           else {
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem voting on this gallery, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           }

	        },
	        error: function(xhr, textStatus, error){
				$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem voting on this gallery, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
			}
	   });
	   return false;
	});
	
	$("#dl_new").click(function(e) {
		$("#message_result").html('');
	    $.ajax({
	        url: '/inc/dl_new.php',
	        type: 'POST',
	        data: {
	        	gallery_id: $("#gallery_id").val(),
	        	load_id: $("#load_id").val(),
	        	load_dir: $("#load_dir").val(),
	        	gallery_title: $("#gallery_title").val(),
	        },
	        success:function(response){

	           var dl_text = $("#dl_new span").html();
	           var new_dl_count = parseInt(dl_text)+1;

	           var response_split = response.split(",");
	           var response = response_split[0];
			   var link = response_split[1];
			   if(response == 'not_logged') {
					$('#dl_new').prop('disabled', true);
					$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You have to be logged in for downloading this gallery. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
			   }
	           else if(response == 'success') {
	           		window.location.href = link;
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i> If your download doesn\'t start automatically, please <a target="_blank" href="'+link+'">click here</a>! <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           		$('#dl_new span').html(new_dl_count);
	           		$('#dl_new').prop('disabled', true);
	           }
			   else if(response == 'wait') {
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You need to wait '+link+' seconds to download this gallery. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
	           }
	           else {
	           		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem downloading this gallery, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
					$('#dl_new').prop('disabled', true);
	           }

	        },
	        error: function(xhr, textStatus, error){
				$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem downloading this gallery, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
				$('#dl_new').prop('disabled', true);
			}
	   });
	   return false;
	});
	
$("#connect_imh").click(function(e) {
	$("#linkacc_msg").html('');
	$.ajax({
		url: '/inc/link_acc.php?id=imh',
		type: 'POST',
		data: {
			he_imh_key: $("#he_imh_key").val(),
		},
		beforeSend: function() {
			$("#connect_imh").prop('disabled', true);
			$("#spinner_imh").show();
		},
		success:function(response){
		   if(response == 'not_logged') {
				$('#connect_imh').prop('disabled', true);
				$("#spinner_imh").hide();
				$("#linkacc_msg").html('<div style="margin:20px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You have to be logged in for link an account. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
		   }
		   else if(response == 'key_wrong') {
				$("#connect_imh").prop('disabled', false);
				$("#linkacc_msg").html('<div style="margin:20px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You have entered a wrong key, please try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
		   }
		   else {
				$('#connect_imh').hide();
				$('#he_imh_key').hide();
				$("#linkacc_msg").html('<div style="margin:20px 0 0 0" class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i> You have linked your <b>HentaiEra</b> account successfully! <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
		   }

		},
		complete: function() {
			$("#spinner_imh").hide();
		},
		error: function(xhr, textStatus, error){
			$("#spinner_imh").hide();
			$("#linkacc_msg").html('<div style="margin:20px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem linking this account, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
			$('#connect_imh').prop('disabled', true);
		}
   });
   return false;
});

var pathname = window.location.pathname; 
var url      = window.location.href;
var origin   = window.location.origin;

split_res = pathname.split("/");
var id = split_res[2];
var current_page = split_res[3];
var Pages = parseInt($("#pages").val());
var image_dir = $("#image_dir").val();
var u_id = $("#u_id").val();
var s_id = $("#s_id").val();
var gallery_id = $("#gallery_id").val();
//var servers = ['m1.hentaiera.com'];
//var random_server = servers[Math.floor(Math.random() * servers.length)];
if(u_id > 0 && u_id <= 274825) { random_server = 'm1.hentaiera.com'; }
if(u_id > 274825 && u_id <= 403818) { random_server = 'm2.hentaiera.com'; }
if(u_id > 403818 && u_id <= 527143) { random_server = 'm3.hentaiera.com'; }
if(u_id > 527143 && u_id <= 632481) { random_server = 'm4.hentaiera.com'; }
if(u_id > 632481 && u_id <= 815858) { random_server = 'm5.hentaiera.com'; }
if(u_id > 815858 && u_id <= 969848) { random_server = 'm6.hentaiera.com'; }
if(u_id > 969848 && u_id <= 1120799) { random_server = 'm7.hentaiera.com'; }
if(u_id > 1120799) { random_server = 'm8.hentaiera.com'; }
var start_one = parseInt(current_page)+1;
var start_two = parseInt(current_page)+2;
var start_three = parseInt(current_page)+3;

$.fn.preload = function() {

	this.each(function(){
		$('<img/>')[0].src = this;
	});

	console.log("Preloading " + this[0]);

};

window.jumpPage = function(x) {
    var entered_Page = prompt("Please enter a page between 1 and "+x);

    var numeric = $.isNumeric(entered_Page);
    if(numeric == true) {

	    if(entered_Page == 0) {
	    	var entered_Page = 1;
	    }
	    else if(entered_Page > x) {
	    	var entered_Page = x;
	    }
	    else if(entered_Page == null) {
	    	
	    }

		var title = document.getElementsByTagName("title")[0].innerHTML;
		var count_dashes = ((title.match(/-/g) || []).length);
		if(count_dashes == 2) {
			var title_split = title.split("-");
			var g_title = title_split[0].trim();
		}
		if(count_dashes > 2) {
			
			var to_split = count_dashes - 1;
			var title_split = title.split("-");
			var removed = title_split.splice(0,to_split);
			var g_title = removed.join("-");

		}
		document.title = g_title+" - Page "+entered_Page+" - HentaiEra";
		
		$(".gallery_view h1 span").html(entered_Page);

	    var CurrentImage = $('#gimg').attr('class');
		var CurImg = CurrentImage.split("_");
		var CurImg = CurImg[1];

		ginfc = g_th[entered_Page];
		var ginfc_split = ginfc.split(",");
		var iext_c = ginfc_split[0];
		var iwidth = ginfc_split[1];
		var iheight = ginfc_split[2];
		if(iext_c == 'j') { var iext_nx = 'jpg'; }
		if(iext_c == 'p') { var iext_nx = 'png'; }
		if(iext_c == 'b') { var iext_nx = 'bmp'; }
		if(iext_c == 'g') { var iext_nx = 'gif'; }

		$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
		$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
		$('#gimg').attr('class','image_'+ entered_Page +'');
		$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+entered_Page+"."+iext_nx+"");

		var entered_one = parseInt(entered_Page)+1;
		var entered_two = parseInt(entered_Page)+2;
		var entered_three = parseInt(entered_Page)+3;

		if(entered_Page == 1) {

			if(Pages >= 2) {
				var iext_two = g_thumb('2');
				$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/2.'+iext_two+'']).preload();
			}
			if(Pages >= 3) {
				var iext_three = g_thumb('3');
				$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/3.'+iext_three+'']).preload();
			}
			if(Pages >= 4) {
				var iext_four = g_thumb('4');
				$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/4.'+iext_four+'']).preload();
			}
		}
		else
		{

			if(entered_one <= Pages) {
				var iext_sone = g_thumb(entered_one);
				$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+entered_one+'.'+iext_sone+'']).preload();
			}
			if(entered_two <= Pages) {
				var iext_stwo = g_thumb(entered_two);
				$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+entered_two+'.'+iext_stwo+'']).preload();
			}
			if(entered_three <= Pages) {
				var iext_sthree = g_thumb(entered_three);
				$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+entered_three+'.'+iext_sthree+'']).preload();
			}
		}

		if(entered_Page == 1) {		
			$('.nav_first_r').prop('disabled', true);
			$('.nav_prev').prop('disabled', true);
			$('.nav_last').prop('disabled', false);
			$('.nav_next').prop('disabled', false);
		}
		if(entered_Page > 1 && entered_Page < Pages) {
			$('.nav_first_r').prop('disabled', false);
			$('.nav_prev').prop('disabled', false);
			$('.nav_last').prop('disabled', false);
			$('.nav_next').prop('disabled', false);
		}
		if(entered_Page == Pages) {
			$('.nav_first_r').prop('disabled', false);
			$('.nav_prev').prop('disabled', false);
			$('.nav_last').prop('disabled', true);
			$('.nav_next').prop('disabled', true);
		}

		$(".nav_pagination .current").text(entered_Page);
		
		window.history.pushState('Title', 'Title', '/view/'+id+'/'+entered_Page+'/');
		
		$(".gallery_view h1 span").html(entered_Page);

		if ("ga" in window) {
	    tracker = ga.getAll()[0];
		    if(tracker)
		    tracker.send("pageview", "/view/"+ id +"/"+ entered_Page +"/");
		}

	}
}

function g_thumb(x) {
	gt_inf = g_th[x];
	var gt_inf_split = gt_inf.split(",");
	var gt_inf_iext = gt_inf_split[0];
	if(gt_inf_iext == 'j') { var gt_iext = 'jpg'; }
	if(gt_inf_iext == 'p') { var gt_iext = 'png'; }
	if(gt_inf_iext == 'b') { var gt_iext = 'bmp'; }
	if(gt_inf_iext == 'g') { var gt_iext = 'gif'; }
	return gt_iext;
}

if(current_page == 1) {

	if(Pages >= 2) {
		var iext_two = g_thumb('2');
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/2.'+iext_two+'']).preload();
	}
	if(Pages >= 3) {
		var iext_three = g_thumb('3');
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/3.'+iext_three+'']).preload();
	}
	if(Pages >= 4) {
		var iext_four = g_thumb('4');
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/4.'+iext_four+'']).preload();
	}
}
else
{

	if(start_one <= Pages) {
		var iext_sone = g_thumb(start_one);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+start_one+'.'+iext_sone+'']).preload();
	}
	if(start_two <= Pages) {
		var iext_stwo = g_thumb(start_two);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+start_two+'.'+iext_stwo+'']).preload();
	}
	if(start_three <= Pages) {
		var iext_sthree = g_thumb(start_three);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+start_three+'.'+iext_sthree+'']).preload();
	}
}

$(function(next_img){
				
var next_img_c = function(next_img){
var $self = $(this);

$(window).scrollTop($('#gimg').offset().top-0);
	
var CurrentImage = $('#gimg').attr('class');
var CurImg = CurrentImage.split("_");
var CurImg = CurImg[1];
var PrevImg = parseInt(CurImg) - 1;
var NextImg = parseInt(CurImg) + 1;

var ChangePrev = parseInt(CurImg);
var ChangeNext = parseInt(CurImg) + 2;

var NextOne = parseInt(CurImg) + 1;
var NextTwo = parseInt(CurImg) + 2;
var PreloadNext = parseInt(CurImg) + 4;

var title = document.getElementsByTagName("title")[0].innerHTML;
var count_dashes = ((title.match(/-/g) || []).length);
if(count_dashes == 2) {
	var title_split = title.split("-");
	var g_title = title_split[0].trim();
}
if(count_dashes > 2) {
	
	var to_split = count_dashes - 1;
	var title_split = title.split("-");
	var removed = title_split.splice(0,to_split);
	var g_title = removed.join("-");

}

if(CurImg == Pages) {
	var NextOne = Pages;
}
document.title = g_title+" - Page "+NextOne+" - HentaiEra";

$(".gallery_view h1 span").html(NextOne);

if(CurImg == Pages) {

	window.location.href = 'https://hentaiera.com/gallery/'+id+'/';

}
else {

	if(PreloadNext <= Pages) {

		ginf = g_th[PreloadNext];
		var ginf_split = ginf.split(",");
		var iext = ginf_split[0];
		var iwidth = ginf_split[1];
		var iheight = ginf_split[2];
		if(iext == 'j') { var iext_pr = 'jpg'; }
		if(iext == 'p') { var iext_pr = 'png'; }
		if(iext == 'b') { var iext_pr = 'bmp'; }
		if(iext == 'g') { var iext_pr = 'gif'; }

	}

	$("iframe").attr("src", function ( i, val ) { return val; });	
	$(".tracker").attr("src", function ( i, val ) { return val; });
	if ("ga" in window) {
    tracker = ga.getAll()[0];
	    if(tracker)
	    tracker.send("pageview", "/view/"+ id +"/"+ NextImg +"/");
	}

	$('.nav_first_r').prop('disabled', false);
	$('.nav_prev').prop('disabled', false);

	if(NextOne == Pages) {
		$('.nav_last').prop('disabled', true);
		$('.nav_next').prop('disabled', true);
	}
	
	ginfc = g_th[NextImg];
	var ginfc_split = ginfc.split(",");
	var iext_c = ginfc_split[0];
	var iwidth = ginfc_split[1];
	var iheight = ginfc_split[2];
	if(iext_c == 'j') { var iext_nx = 'jpg'; }
	if(iext_c == 'p') { var iext_nx = 'png'; }
	if(iext_c == 'b') { var iext_nx = 'bmp'; }
	if(iext_c == 'g') { var iext_nx = 'gif'; }

	$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('#gimg').attr('class','image_'+ NextImg +'');
	$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+NextImg+"."+iext_nx+"");

	if(NextOne == Pages) {
		//console.log("Preload finished");
	}
	else {
		if(PreloadNext <= Pages) {
			$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PreloadNext+'.'+iext_pr+'']).preload();
		}
	}
	
	$(".nav_pagination .current").text(NextOne);
	
	window.history.pushState('Title', 'Title', '/view/'+id+'/'+NextOne+'/');
	
}

$self.unbind("click"); //unbind 

setTimeout(function(){
  $self.click(next_img_c);
}, 500); //rebind after 500ms

};

$(".next_img").click(next_img_c); 
	
});


$(function(next_nav){
				
var next_nav_c = function(next_nav){
var $self = $(this);
	
$(window).scrollTop($('#gimg').offset().top-0);
	
var CurrentImage = $('#gimg').attr('class');
var CurImg = CurrentImage.split("_");
var CurImg = CurImg[1];
var PrevImg = parseInt(CurImg) - 1;
var NextImg = parseInt(CurImg) + 1;

var ChangePrev = parseInt(CurImg);
var ChangeNext = parseInt(CurImg) + 2;

var NextOne = parseInt(CurImg) + 1;
var NextTwo = parseInt(CurImg) + 2;
var PreloadNext = parseInt(CurImg) + 4;

var title = document.getElementsByTagName("title")[0].innerHTML;
var count_dashes = ((title.match(/-/g) || []).length);
if(count_dashes == 2) {
	var title_split = title.split("-");
	var g_title = title_split[0].trim();
}
if(count_dashes > 2) {
	
	var to_split = count_dashes - 1;
	var title_split = title.split("-");
	var removed = title_split.splice(0,to_split);
	var g_title = removed.join("-");

}
if(CurImg == Pages) {
	var NextOne = Pages;
}
document.title = g_title+" - Page "+NextOne+" - HentaiEra";

$(".gallery_view h1 span").html(NextOne);

if(CurImg == Pages) {

	window.location.href = 'https://hentaiera.com/gallery/'+id+'/';

}
else {

	if(PreloadNext <= Pages) {

		ginf = g_th[PreloadNext];
		var ginf_split = ginf.split(",");
		var iext = ginf_split[0];
		var iwidth = ginf_split[1];
		var iheight = ginf_split[2];
		if(iext == 'j') { var iext_pr = 'jpg'; }
		if(iext == 'p') { var iext_pr = 'png'; }
		if(iext == 'b') { var iext_pr = 'bmp'; }
		if(iext == 'g') { var iext_pr = 'gif'; }

	}

	$("iframe").attr("src", function ( i, val ) { return val; });	
	$(".tracker").attr("src", function ( i, val ) { return val; });
	if ("ga" in window) {
    tracker = ga.getAll()[0];
	    if(tracker)
	    tracker.send("pageview", "/view/"+ id +"/"+ NextImg +"/");
	}
	
	$('.nav_first_r').prop('disabled', false);
	$('.nav_prev').prop('disabled', false);
	

	if(NextOne == Pages) {
		$('.nav_last').prop('disabled', true);
		$('.nav_next').prop('disabled', true);
	}
	
	ginfc = g_th[NextImg];
	var ginfc_split = ginfc.split(",");
	var iext_c = ginfc_split[0];
	var iwidth = ginfc_split[1];
	var iheight = ginfc_split[2];
	if(iext_c == 'j') { var iext_nx = 'jpg'; }
	if(iext_c == 'p') { var iext_nx = 'png'; }
	if(iext_c == 'b') { var iext_nx = 'bmp'; }
	if(iext_c == 'g') { var iext_nx = 'gif'; }
	
	$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('#gimg').attr('class','image_'+ NextImg +'');
	$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+NextImg+"."+iext_nx+"");

	if(NextOne == Pages) {
		//console.log("Preload finished");
	}
	else {
		if(PreloadNext <= Pages) {
			$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PreloadNext+'.'+iext_pr+'']).preload();
		}
	}
	
	$(".nav_pagination .current").text(NextOne);
	
	window.history.pushState('Title', 'Title', '/view/'+id+'/'+NextOne+'/');
	
}

$self.unbind("click"); //unbind 

setTimeout(function(){
  $self.click(next_nav_c);
}, 500); //rebind after 500ms

};

$(".next_nav").click(next_nav_c);
$(".nav_next").click(next_nav_c); 
	
});



$(function(prev_nav){
				
var prev_nav_c = function(prev_nav){
var $self = $(this);

$(window).scrollTop($('#gimg').offset().top-0);
	
var CurrentImage = $('#gimg').attr('class');
var CurImg = CurrentImage.split("_");
var CurImg = CurImg[1];
var PrevImg = parseInt(CurImg) - 1;

var ChangePrev = parseInt(CurImg) - 2;
var ChangeNext = parseInt(CurImg);

var PrevOne = parseInt(CurImg) - 1;
var PrevTwo = parseInt(CurImg) - 2;
var PrevThree = parseInt(CurImg) - 3;
var PrevFour = parseInt(CurImg) - 4;

var title = document.getElementsByTagName("title")[0].innerHTML;
var count_dashes = ((title.match(/-/g) || []).length);
if(count_dashes == 2) {
	var title_split = title.split("-");
	var g_title = title_split[0].trim();
}
if(count_dashes > 2) {
	
	var to_split = count_dashes - 1;
	var title_split = title.split("-");
	var removed = title_split.splice(0,to_split);
	var g_title = removed.join("-");

}
if(PrevOne == '0') {
	var PrevOne = '1';
}
document.title = g_title+" - Page "+PrevOne+" - HentaiEra";

$(".gallery_view h1 span").html(PrevOne);

if(CurImg == 1) {

}
else {

	if(CurImg <= 3) {

	}
	$("iframe").attr("src", function ( i, val ) { return val; });	
	$(".tracker").attr("src", function ( i, val ) { return val; });
	if ("ga" in window) {
    tracker = ga.getAll()[0];
	    if(tracker)
	    tracker.send("pageview", "/view/"+ id +"/"+ PrevImg +"/");
	}

	if(PrevImg == 1) {
		$('.nav_first_r').prop('disabled', true);
		$('.nav_prev').prop('disabled', true);
	}

	$('.nav_last').prop('disabled', false);
	$('.nav_next').prop('disabled', false);
	
	ginfc = g_th[PrevImg];
	var ginfc_split = ginfc.split(",");
	var iext_c = ginfc_split[0];
	var iwidth = ginfc_split[1];
	var iheight = ginfc_split[2];
	if(iext_c == 'j') { var iext_nx = 'jpg'; }
	if(iext_c == 'p') { var iext_nx = 'png'; }
	if(iext_c == 'b') { var iext_nx = 'bmp'; }
	if(iext_c == 'g') { var iext_nx = 'gif'; }
	
	$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('#gimg').attr('class','image_'+ PrevImg +'');
	$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevImg+"."+iext_nx+"");

	if(PrevTwo > 0) {
		var iext_prevtwo = g_thumb(PrevTwo);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevTwo+'.'+iext_prevtwo+'']).preload();
	}
	if(PrevThree > 0) {
		var iext_prevthree = g_thumb(PrevThree);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevThree+'.'+iext_prevthree+'']).preload();
	}
	if(PrevFour > 0) {
		var iext_prevfour = g_thumb(PrevFour);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevFour+'.'+iext_prevfour+'']).preload();
	}

	
	if(PrevImg == 0) {
		var PrevImg = 1;
	}
	$(".nav_pagination .current").text(PrevImg);

	if(PrevOne == 0) {
		var PrevOne = 1;
	}
	
	window.history.pushState('Title', 'Title', '/view/'+id+'/'+PrevOne+'/');
	
}

$self.unbind("click"); //unbind 

setTimeout(function(){
  $self.click(prev_nav_c);
}, 500); //rebind after 500ms

};

$(".prev_nav").click(prev_nav_c);
$(".nav_prev").click(prev_nav_c);
	
});


$(function(first_nav){
				
var first_nav_c = function(first_nav){
var $self = $(this);

$(window).scrollTop($('#gimg').offset().top-0);
	
var CurrentImage = $('#gimg').attr('class');
var CurImg = CurrentImage.split("_");
var CurImg = CurImg[1];
var PrevImg = parseInt(CurImg) - 1;

var ChangePrev = parseInt(CurImg) - 2;
var ChangeNext = parseInt(CurImg);

var PrevOne = parseInt(CurImg) - 1;
var PrevTwo = parseInt(CurImg) - 2;
var PrevThree = parseInt(CurImg) - 3;
var PrevFour = parseInt(CurImg) - 4;

var title = document.getElementsByTagName("title")[0].innerHTML;
var count_dashes = ((title.match(/-/g) || []).length);
if(count_dashes == 2) {
	var title_split = title.split("-");
	var g_title = title_split[0].trim();
}
if(count_dashes > 2) {
	
	var to_split = count_dashes - 1;
	var title_split = title.split("-");
	var removed = title_split.splice(0,to_split);
	var g_title = removed.join("-");

}
document.title = g_title+" - Page 1 - HentaiEra";

$(".gallery_view h1 span").html('1');

if(CurImg == 1) {
	
}
else {

	$("iframe").attr("src", function ( i, val ) { return val; });	
	$(".tracker").attr("src", function ( i, val ) { return val; });
	if ("ga" in window) {
    tracker = ga.getAll()[0];
	    if(tracker)
	    tracker.send("pageview", "/view/"+ id +"/1/");
	}
	
	ginfc = g_th['1'];
	var ginfc_split = ginfc.split(",");
	var iext_c = ginfc_split[0];
	var iwidth = ginfc_split[1];
	var iheight = ginfc_split[2];
	if(iext_c == 'j') { var iext_nx = 'jpg'; }
	if(iext_c == 'p') { var iext_nx = 'png'; }
	if(iext_c == 'b') { var iext_nx = 'bmp'; }
	if(iext_c == 'g') { var iext_nx = 'gif'; }
	
	$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('#gimg').attr('class','image_1');
	$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/1.'+iext_nx+'');
	
	$('.nav_first_r').prop('disabled', true);
	$('.nav_prev').prop('disabled', true);
	$('.nav_last').prop('disabled', false);
	$('.nav_next').prop('disabled', false);
	
	$(".nav_pagination .current").text('1');

	window.history.pushState('Title', 'Title', '/view/'+id+'/1/');
	
}

$self.unbind("click"); //unbind 

setTimeout(function(){
  $self.click(first_nav_c);
}, 500); //rebind after 500ms

};

$(".nav_first_r").click(first_nav_c);
	
});


$(function(last_nav){
				
var last_nav_c = function(last_nav){
var $self = $(this);

$(window).scrollTop($('#gimg').offset().top-0);
	
var CurrentImage = $('#gimg').attr('class');
var CurImg = CurrentImage.split("_");
var CurImg = CurImg[1];

var title = document.getElementsByTagName("title")[0].innerHTML;
var count_dashes = ((title.match(/-/g) || []).length);
if(count_dashes == 2) {
	var title_split = title.split("-");
	var g_title = title_split[0].trim();
}
if(count_dashes > 2) {
	
	var to_split = count_dashes - 1;
	var title_split = title.split("-");
	var removed = title_split.splice(0,to_split);
	var g_title = removed.join("-");

}
document.title = g_title+" - Page "+Pages+" - HentaiEra";

$(".gallery_view h1 span").html(Pages);

if(CurImg == Pages) {
	
}
else {

	$("iframe").attr("src", function ( i, val ) { return val; });	
	$(".tracker").attr("src", function ( i, val ) { return val; });
	if ("ga" in window) {
    tracker = ga.getAll()[0];
	    if(tracker)
	    tracker.send("pageview", "/view/"+ id +"/"+ Pages +"/");
	}
	
	ginfc = g_th[Pages];
	var ginfc_split = ginfc.split(",");
	var iext_c = ginfc_split[0];
	var iwidth = ginfc_split[1];
	var iheight = ginfc_split[2];
	if(iext_c == 'j') { var iext_nx = 'jpg'; }
	if(iext_c == 'p') { var iext_nx = 'png'; }
	if(iext_c == 'b') { var iext_nx = 'bmp'; }
	if(iext_c == 'g') { var iext_nx = 'gif'; }
	
	$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('#gimg').attr('class','image_'+Pages+'');
	$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+Pages+'.'+iext_nx+'');
	
	$('.nav_first_r').prop('disabled', false);
	$('.nav_prev').prop('disabled', false);
	$('.nav_last').prop('disabled', true);
	$('.nav_next').prop('disabled', true);
	
	$(".nav_pagination .current").text(Pages);

	window.history.pushState('Title', 'Title', '/view/'+id+'/'+Pages+'/');
	
}

$self.unbind("click"); //unbind 

setTimeout(function(){
  $self.click(last_nav_c);
}, 500); //rebind after 500ms

};

$(".nav_last").click(last_nav_c);
	
});

function left_arrow() {

$(window).scrollTop($('#gimg').offset().top-0);
	
var CurrentImage = $('#gimg').attr('class');
var CurImg = CurrentImage.split("_");
var CurImg = CurImg[1];
var PrevImg = parseInt(CurImg) - 1;

var ChangePrev = parseInt(CurImg) - 2;
var ChangeNext = parseInt(CurImg);

var PrevOne = parseInt(CurImg) - 1;
var PrevTwo = parseInt(CurImg) - 2;
var PrevThree = parseInt(CurImg) - 3;
var PrevFour = parseInt(CurImg) - 4;

var title = document.getElementsByTagName("title")[0].innerHTML;
var count_dashes = ((title.match(/-/g) || []).length);
if(count_dashes == 2) {
	var title_split = title.split("-");
	var g_title = title_split[0].trim();
}
if(count_dashes > 2) {
	
	var to_split = count_dashes - 1;
	var title_split = title.split("-");
	var removed = title_split.splice(0,to_split);
	var g_title = removed.join("-");

}
if(PrevOne == '0') {
	var PrevOne = '1';
}
document.title = g_title+" - Page "+PrevOne+" - HentaiEra";

$(".gallery_view h1 span").html(PrevOne);

if(CurImg == 1) {

}
else {

	if(CurImg <= 3) {

	}
	$("iframe").attr("src", function ( i, val ) { return val; });	
	$(".tracker").attr("src", function ( i, val ) { return val; });
	if ("ga" in window) {
    tracker = ga.getAll()[0];
	    if(tracker)
	    tracker.send("pageview", "/view/"+ id +"/"+ PrevOne +"/");
	}

	if(PrevImg == 1) {		
		$('.nav_first_r').prop('disabled', true);
		$('.nav_prev').prop('disabled', true);	
	}

	$('.nav_last').prop('disabled', false);
	$('.nav_next').prop('disabled', false);
	
	ginfc = g_th[PrevImg];
	var ginfc_split = ginfc.split(",");
	var iext_c = ginfc_split[0];
	var iwidth = ginfc_split[1];
	var iheight = ginfc_split[2];
	if(iext_c == 'j') { var iext_nx = 'jpg'; }
	if(iext_c == 'p') { var iext_nx = 'png'; }
	if(iext_c == 'b') { var iext_nx = 'bmp'; }
	if(iext_c == 'g') { var iext_nx = 'gif'; }
	
	$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('#gimg').attr('class','image_'+ PrevImg +'');
	$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevImg+"."+iext_nx+"");

	if(PrevTwo > 0) {
		var iext_prevtwo = g_thumb(PrevTwo);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevTwo+'.'+iext_prevtwo+'']).preload();
	}
	if(PrevThree > 0) {
		var iext_prevthree = g_thumb(PrevThree);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevThree+'.'+iext_prevthree+'']).preload();
	}
	if(PrevFour > 0) {
		var iext_prevfour = g_thumb(PrevFour);
		$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PrevFour+'.'+iext_prevfour+'']).preload();
	}

	
	if(PrevImg == 0) {
		var PrevImg = 1;
	}
	$(".nav_pagination .current").text(PrevImg);

	if(PrevOne == 0) {
		var PrevOne = 1;
	}
	
	window.history.pushState('Title', 'Title', '/view/'+id+'/'+PrevOne+'/');

}

}

function right_arrow() {

$(window).scrollTop($('#gimg').offset().top-0);
	
var CurrentImage = $('#gimg').attr('class');
var CurImg = CurrentImage.split("_");
var CurImg = CurImg[1];
var PrevImg = parseInt(CurImg) - 1;
var NextImg = parseInt(CurImg) + 1;

var ChangePrev = parseInt(CurImg);
var ChangeNext = parseInt(CurImg) + 2;

var NextOne = parseInt(CurImg) + 1;
var NextTwo = parseInt(CurImg) + 2;
var PreloadNext = parseInt(CurImg) + 4;

var title = document.getElementsByTagName("title")[0].innerHTML;
var count_dashes = ((title.match(/-/g) || []).length);
if(count_dashes == 2) {
	var title_split = title.split("-");
	var g_title = title_split[0].trim();
}
if(count_dashes > 2) {
	
	var to_split = count_dashes - 1;
	var title_split = title.split("-");
	var removed = title_split.splice(0,to_split);
	var g_title = removed.join("-");

}
if(CurImg == Pages) {
	var NextOne = Pages;
}
document.title = g_title+" - Page "+NextOne+" - HentaiEra";

$(".gallery_view h1 span").html(NextOne);

if(CurImg == Pages) {

	window.location.href = 'https://hentaiera.com/gallery/'+id+'/';

}
else {

	if(PreloadNext <= Pages) {

		ginf = g_th[PreloadNext];
		var ginf_split = ginf.split(",");
		var iext = ginf_split[0];
		var iwidth = ginf_split[1];
		var iheight = ginf_split[2];
		if(iext == 'j') { var iext_pr = 'jpg'; }
		if(iext == 'p') { var iext_pr = 'png'; }
		if(iext == 'b') { var iext_pr = 'bmp'; }
		if(iext == 'g') { var iext_pr = 'gif'; }

	}

	$("iframe").attr("src", function ( i, val ) { return val; });	
	$(".tracker").attr("src", function ( i, val ) { return val; });
	if ("ga" in window) {
    tracker = ga.getAll()[0];
	    if(tracker)
	    tracker.send("pageview", "/view/"+ id +"/"+ NextOne +"/");
	}

	$('.nav_first_r').prop('disabled', false);
	$('.nav_prev').prop('disabled', false);

	if(NextOne == Pages) {
		$('.nav_last').prop('disabled', true);
		$('.nav_next').prop('disabled', true);
	}
	
	ginfc = g_th[NextImg];
	var ginfc_split = ginfc.split(",");
	var iext_c = ginfc_split[0];
	var iwidth = ginfc_split[1];
	var iheight = ginfc_split[2];
	if(iext_c == 'j') { var iext_nx = 'jpg'; }
	if(iext_c == 'p') { var iext_nx = 'png'; }
	if(iext_c == 'b') { var iext_nx = 'bmp'; }
	if(iext_c == 'g') { var iext_nx = 'gif'; }
	
	$('#gimg').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('.pre_img').css({ "max-width": iwidth+'px', "max-height": iheight+'px' });
	$('#gimg').attr('class','image_'+ NextImg +'');
	$('#gimg').attr('src','//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+NextImg+"."+iext_nx+"");

	if(NextOne == Pages) {
		//console.log("Preload finished");
	}
	else {
		if(PreloadNext <= Pages) {
			$(['//'+random_server+'/'+image_dir+'/'+gallery_id+'/'+PreloadNext+'.'+iext_pr+'']).preload();
		}
	}
	
	$(".nav_pagination .current").text(NextOne);
	
	window.history.pushState('Title', 'Title', '/view/'+id+'/'+NextOne+'/');

}

}

var href_url = window.location.href;
var gallery_url =href_url.match(/view/g);

if(gallery_url == 'view') {

var self = this;
var keyHold = false;
var keyHoldCode = false;
$(document).keydown(function(e) {
	if ($(e.target).is('input')) {
		return;
	}
	if (!keyHold && !e.ctrlKey && !e.altKey) {
		if (e.keyCode == 37 || e.keyCode == 65) {
			e.preventDefault();
			left_arrow();
		} else if (e.keyCode == 39 || e.keyCode == 68) {
			e.preventDefault();
			right_arrow();
		} else if (e.keyCode == 38 || e.keyCode == 87) {
			e.preventDefault();
			if ($(window).scrollTop() > 0) {
				keyHold = true;
				keyHoldCode = setInterval(function() {
					window.scrollBy(0 * 5, -1 * 5);
				}, 5);
			}
			return false;
		} else if (e.keyCode == 40 || e.keyCode == 83) {
			e.preventDefault();
			keyHold = true;
			keyHoldCode = setInterval(function() {
				window.scrollBy(0 * 5, 1 * 5);
			}, 5);
			return false;
		}
	}
});

$(document).keyup(function (e) {
    if (keyHold && (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 87 || e.keyCode == 83)) {
        clearInterval(keyHoldCode);
        keyHold = false;
    }
});

}

$('#cats_toggle').on("click", function(){
    $('.cats_mt').slideToggle();
    $('.langs_mt').hide();
    $('.sort_mt').hide();
});
$('#langs_toggle').on("click", function(){
    $('.langs_mt').slideToggle();
    $('.cats_mt').hide();
    $('.sort_mt').hide();
});
$('#sort_toggle').on("click", function(){
    $('.sort_mt').slideToggle();
    $('.cats_mt').hide();
    $('.langs_mt').hide();
});


});


function toggle_category(b) {
	
    var a = document.getElementById("am_" + b);
    var c = parseInt(a.value);

    if (c) {		
        a.value = 0;
        document.getElementById("a_" + b).classList.add("disabled");
    } else {
        a.value = 1;
        document.getElementById("a_" + b).classList.remove("disabled");
    }

};

function toggle_lang(b) {
	
    var a = document.getElementById("am_" + b);
    var c = parseInt(a.value);

    if (c) {		
        a.value = 0;
        document.getElementById("a_" + b).classList.add("disabled");
    } else {
        a.value = 1;
        document.getElementById("a_" + b).classList.remove("disabled");
    }

};

function toggle_filter(b) {

    var a = document.getElementById("am_" + b);
    var c = parseInt(a.value);

    if(b == 'latest') {	
    	a.value = 1;
    	document.getElementById("a_latest").classList.add("active");
        document.getElementById("a_popular").classList.remove("active");
        document.getElementById("am_popular").value = 0;
        document.getElementById("a_downloaded").classList.remove("active");
        document.getElementById("am_downloaded").value = 0;
        document.getElementById("a_toprated").classList.remove("active");
        document.getElementById("am_toprated").value = 0;
    }
    if(b == 'downloaded') {
    	a.value = 1;
    	document.getElementById("a_downloaded").classList.add("active");
    	document.getElementById("a_latest").classList.remove("active");
    	document.getElementById("am_latest").value = 0;
        document.getElementById("a_popular").classList.remove("active");
        document.getElementById("am_popular").value = 0;
        document.getElementById("a_toprated").classList.remove("active");
        document.getElementById("am_toprated").value = 0;
    }
    if(b == 'popular') {
    	a.value = 1;
    	document.getElementById("a_popular").classList.add("active");
    	document.getElementById("a_latest").classList.remove("active");
    	document.getElementById("am_latest").value = 0;
        document.getElementById("a_downloaded").classList.remove("active");
        document.getElementById("am_downloaded").value = 0;
        document.getElementById("a_toprated").classList.remove("active");
        document.getElementById("am_toprated").value = 0;
    }
    if(b == 'toprated') {
    	a.value = 1;
    	document.getElementById("a_toprated").classList.add("active");
    	document.getElementById("a_latest").classList.remove("active");
    	document.getElementById("am_latest").value = 0;
        document.getElementById("a_downloaded").classList.remove("active");
        document.getElementById("am_downloaded").value = 0;
        document.getElementById("a_popular").classList.remove("active");
        document.getElementById("am_popular").value = 0;
    }
};

$(function() {

	$(document).on('change', ':file', function() {
	var input = $(this),
	    numFiles = input.get(0).files ? input.get(0).files.length : 1,
	    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	input.trigger('fileselect', [numFiles, label]);
	});

	$(document).ready( function() {
	  $(':file').on('fileselect', function(event, numFiles, label) {
	      var input = $(this).parents('.input-group').find(':text'),
	      log = numFiles > 1 ? numFiles + ' files selected' : label;
	      if( input.length ) {
	          input.val(log);
	      } else {
	          if(log) alert(log);
	      }
	  });
	});

});

	$(document).ready(function() {

		$(".overlay_loader, .spanner_loader").addClass('show_loader');
		$("#results").load("/user/fav_pags.php", function(response,status,xhr) {
		    	if(status == 'error') {
		    		$("#message_result").html('');
		    		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem displaying your favorites, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
		    	}
		    	if(status == 'success') {
		    		$(".overlay_loader, .spanner_loader").removeClass('show_loader');
		    	}
		});
		
		
		$(document).on("click", "#sqfav_btn", function (e) {
			e.preventDefault();
							
			var page = $(this).attr("data-page");
			var sq_input = $(".sq_fav_input").val();
			
			// Check if sq_input is empty, and if so, do not proceed
			if (sq_input.trim() === "") {
				return false;
			}
			$(".overlay_loader, .spanner_loader").addClass('show_loader');

			sq_input_splitted = sq_input.split(/[ ,]+/).join(',');

			// Store the value in a variable before the AJAX request
			var originalValue = sq_input;

			$("#results").load("/user/fav_pags.php?q=" + sq_input_splitted, { "page": page }, function () {
				$(".overlay_loader, .spanner_loader").removeClass('show_loader');
				
				$(".reset_sqfav").show();

				// Set the original value back to the input field
				$(".sq_fav_input").val(originalValue);
				
				var key = "favs_bulk";
				var existingData = JSON.parse(localStorage.getItem(key)) || [];

				if (Array.isArray(existingData)) {
					var count = existingData.length;
					if(count > 0) {
						$("#remove_bulk_favs").show();
						$("#clear_bulk_favs").show();
					}
				}
				
			});
		});

		$(document).on("keyup", ".sq_fav_input", function (e) {
			if (e.key === "Enter") {
				e.preventDefault();

				// Check if sq_input is empty before triggering the click event
				var sq_input = $(".sq_fav_input").val();
				if (sq_input.trim() === "") {
					return false;
				} else {
					$("#sqfav_btn").click(); // Trigger the click event of #sqfav_btn
				}
			}
		});
		
		$(document).on("click", "#reset_sqfav", function (e) {
			e.preventDefault();
			var page = $(this).attr("data-page");
			var sq_input = $(".sq_fav_input").val();
			
			// Check if sq_input is empty, and if so, do not proceed
			if (sq_input.trim() === "") {
				return false;
			}
			$(".overlay_loader, .spanner_loader").addClass('show_loader');

			$("#results").load("/user/fav_pags.php", { "page": page }, function () {
				$(".overlay_loader, .spanner_loader").removeClass('show_loader');
				
				var key = "favs_bulk";
				var existingData = JSON.parse(localStorage.getItem(key)) || [];

				if (Array.isArray(existingData)) {
					var count = existingData.length;
					if(count > 0) {
						$("#remove_bulk_favs").show();
						$("#clear_bulk_favs").show();
					}
			}
				
			});	
			
		});

		$(document).on("click", "#remove_bulk_favs", function (e) {
	
			if(confirm("Are you sure you want to remove selected galleries from favorites?")) {
				
					$("#message_result").html('');
					
					var key = "favs_bulk";
					var existingData = localStorage.getItem(key);
				
					$(".overlay_loader, .spanner_loader").addClass('show_loader');
					$.ajax({
						url: '/user/remove_fav.php?act=bulk',
						type: 'POST',
						data: {
							galleries_ids: existingData,
						},
						success:function(response){
						   if(response == 'not_logged') {
								$("#message_result").html('<div style="margin:30px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You have to be logged in for removing selected galleries from favorites. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
						   }
						   else if(response == 'not_exists') {
								$("#message_result").html('<div style="margin:30px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> One of selected galleries doesn\'t exists, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
						   }
						   else if(response == 'temp_disabled') {
								$('#remove_bulk_favs').prop('disabled', true);
								$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> This feature is temporary disabled. We are working to fix favorites bug. Please try again later. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
						   }
						   else if(response == 'success') {
								// Check if existingData exists in local storage
								if (existingData) {
									var galleryIds = JSON.parse(existingData); // Parse JSON data into an array

									// Calculate the number of galleries removed
									var galleriesRemoved = galleryIds.length;

									// Iterate through galleryIds and remove elements with corresponding IDs
									galleryIds.forEach(function (id) {
										var selector = '.thumbid_' + id;
										$(selector).remove();
									});

									// Clear the local storage
									localStorage.removeItem(key);

									// Decrement the count in the <h3> element
									var favoText = $(".favo_text");
									var currentCount = parseInt(favoText.text().match(/\d+/)[0]);
									var newCount = currentCount - galleriesRemoved;
									favoText.text(favoText.text().replace(/\d+/, newCount));

									// Hide buttons
									$("#remove_bulk_favs").hide();
									$("#clear_bulk_favs").hide();
								}
								$("#message_result").html('<div style="margin:30px 0 0 0" class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i> You have removed selected galleries from favorites. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
								
						   }
						   else {
								$("#message_result").html('<div style="margin:30px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem removing selected galleries from favorites, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
						   }
						   $(".overlay_loader, .spanner_loader").removeClass('show_loader');
						},
						error: function(xhr, textStatus, error){
							$(".overlay_loader, .spanner_loader").removeClass('show_loader');
							$("#message_result").html('<div style="margin:30px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem removing selected galleries from favorites, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
						}
				   });
				}
				return false;

		});
		
		
		$("#log_results").load("/user/log.php", function(response,status,xhr) {
		    	if(status == 'error') {
		    		$(".overlay_loader, .spanner_loader").removeClass('show_loader');
		    		$("#message_result").html('');
		    		$("#message_result").html('<div style="margin:0 0 20px 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem displaying your log, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
		    	}
		    	if(status == 'success') {
		    		$(".overlay_loader, .spanner_loader").removeClass('show_loader');
		    	}
		});

		
		$("#log_results").on( "click", ".pagination a", function (e){
			e.preventDefault();
			$(".overlay_loader, .spanner_loader").addClass('show_loader');
			var page = $(this).attr("data-page");
			$("#log_results").load("/user/log.php",{"page":page}, function(){
				$(".overlay_loader, .spanner_loader").removeClass('show_loader');
			});
			
		});

		$("#rps_game" ).load( "/games/rps_game.php");
		
		$("#rps_game").on( "click", ".pagination a", function (e){
			e.preventDefault();
			$(".overlay_loader, .spanner_loader").addClass('show_loader');
			var page = $(this).attr("data-page");
			$("#rps_game").load("/ga,es/rps_game.php",{"page":page}, function(){
				$(".overlay_loader, .spanner_loader").removeClass('show_loader');
			});
			
		});


		$("#f_social_media").click(function() {
	    	$("#f_social_media_ul").slideToggle(200);
	    	$('#f_social_media').toggleClass('f_active');
	    });
	    $("#f_galleries").click(function() {
	    	$("#f_galleries_ul").slideToggle(200);
	    	$('#f_galleries').toggleClass('f_active');
	    });
	    $("#f_useful_links").click(function() {
	    	$("#f_useful_links_ul").slideToggle(200);
	    	$('#f_useful_links').toggleClass('f_active');
	    });
	    $("#f_partners").click(function() {
	    	$("#f_partners_ul").slideToggle(200);
	    	$('#f_partners').toggleClass('f_active');
	    });
	    $("#f_contact").click(function() {
	    	$("#f_contact_ul").slideToggle(200);
	    	$('#f_contact').toggleClass('f_active');
	    });

	    $("#em_smile").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-)'); 
	    });
	    $("#em_grin").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-D'); 
	    });
	    $("#em_silly").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + '8-}'); 
	    });
	    $("#em_wink").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ';-)'); 
	    });
	    $("#em_blush").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + '=^}'); 
	    });
	    $("#em_sad").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-('); 
	    });
	    $("#em_cool").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + 'B-)'); 
	    });
	    $("#em_angry").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + 'X-('); 
	    });
	    $("#em_surprised").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-O'); 
	    });
	    $("#em_speechless").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-|'); 
	    });
	    $("#em_nerd").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-B'); 
	    });
	    $("#em_tease").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-P'); 
	    });
	    $("#em_upset").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + '>.<'); 
	    });
	    $("#em_crying").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-(('); 
	    });
	    $("#em_devil").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + '>:)'); 
	    });
	    $("#em_angel").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + 'O:-)'); 
	    });
	    $("#em_sick").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-&'); 
	    });
	    $("#em_annoyed").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':/'); 
	    });
	    $("#em_please").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':\'('); 
	    });
	    $("#em_guilty").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-\"'); 
	    });
	    $("#em_kiss").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-*'); 
	    });
	    $("#em_sleeping").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + '|-)'); 
	    });
	    $("#em_love").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-X'); 
	    });
	    $("#em_bored").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + '@-@'); 
	    });
	    $("#em_laugh").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + ':-))'); 
	    });
	    $("#em_heart").click(function() {
		    var currentVal = $('#comment_text').val();
		    $('#comment_text').val(currentVal + '<3'); 
	    });


	});