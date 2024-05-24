var var_joshfqsejy = '';
var_joshfqsejy += "<"+"iframe width=\"728\" height=\"90\" frameborder=\"0\" scrolling=\"no\" src=\"//tsyndicate.com/iframes2/960de0e6a0cf41498a2648942a887758.html?\"><"+"/iframe>\n";
document.write(var_joshfqsejy);
/ad-provider.js"></script>
</body>
   $.ajax({
            url: '/inc/add_comment.php?act=normal',
            type: 'POST',
            headers : {
                'X-Csrf-Token': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                gallery_id: $("#gallery_id").val(),
                comment_text: $("#comment_text").val()
            },
            success:function(response_main){

                var response_split = response_main.split(",");
				var response = response_split[0];

                if(response == 'not_logged') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You have to be logged in for commenting to this gallery. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'empty') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Where is your comment? <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'too_less') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Your comment must contain at least 6 characters. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'too_much') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Your comment must not contain more than 5000 characters. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
				else if(response == 'duplicated') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You are not allowed to enter duplicated comment. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'common_error') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem adding this gallery to favorites, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'success') {
                    var coins = response_split[1];
                    $(".head a").hide();
                    $("#c_comments").html(new_c_count);
                    $("#comment_text").hide();
                    $("#save_comment").hide();
                    $(".emoji").hide();
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i> Your comment has been posted successfully! <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                    listComment();
					var cleanCoins = $('.coin_text').text().replace(/,/g, '');
					var reward = coins - cleanCoins;
					$(".reward").html('+'+new Intl.NumberFormat().format(reward));
					if(reward > 0){
						$(".reward").show();
						$(".reward").effect( "bounce", "slow" );
						$(".reward").fadeOut('fast',function(){ });
						$(".coin_text").text(new Intl.NumberFormat().format(coins));
					}
                }
                else {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem adding this gallery to favorites, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }


            },
            error: function(xhr, textStatus, error){
                $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem adding your comment, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
            }
       });
       return false;
    });
	

});

function postReply(commentID) {
	
	$(document).ready(function () {

    $("#comment_text").val('');
    $("#comment_text").show();
    $(".emoji").show();
    $("#comment_text").focus();
    var user_text = $("#user_text_"+commentID).text();

    $("#comment_text").attr("placeholder", "Enter your reply for "+ user_text +" here...");

    $("#save_comment").hide();
    $("#save_reply").show();
    $("#cancel_reply").show();

    $("#save_reply").unbind( "click");
    $("#save_reply").bind( "click");
    $("#cancel_reply").bind( "click");

    $("#cancel_reply").click(function(e) {

        $("#comment_text").attr("placeholder", "Enter your comment here...");

        $("#save_reply").bind( "click");
        $("#save_reply").unbind( "click");
        $("#cancel_reply").unbind( "click");

        $("#save_comment").show();
        $("#save_reply").hide();
        $("#cancel_reply").hide();

    });

    $("#save_reply").click(function(e) {
        e.preventDefault();
        $("#message_comment").html('');
        var new_c_count = parseInt($("#c_comments").html())+1;
        $.ajax({
            url: '/inc/add_comment.php?act=reply',
            type: 'POST',
            headers : {
                'X-Csrf-Token': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                reply_to: commentID,
                gallery_id: $("#gallery_id").val(),
                comment_text: $("#comment_text").val()
            },
            beforeSend:function(response_main) {

            },
            success:function(response_main){

                var response_split = response_main.split(",");
                var response = response_split[0];

                if(response == 'not_logged') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You have to be logged in for commenting to this gallery. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'empty') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Where is your comment? <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'too_less') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Your comment must contain at least 6 characters. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'too_much') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Your comment must not contain more than 5000 characters. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
				else if(response == 'duplicated') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> You are not allowed to enter duplicated comment. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'common_error') {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem adding this gallery to favorites, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
                else if(response == 'success') {
                    var coins = response_split[1];
                    $(".head a").hide();
                    $("#c_comments").html(new_c_count);
                    $("#comment_text").hide();
                    $("#save_reply").hide();
                    $("#cancel_reply").hide();
                    $(".emoji").hide();
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-success"><i class="fa fa-check" aria-hidden="true"></i> Your comment has been posted successfully! <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                    listComment();
					var cleanCoins = $('.coin_text').text().replace(/,/g, '');
					var reward = coins - cleanCoins;
					$(".reward").html('+'+new Intl.NumberFormat().format(reward));
					if(reward > 0){
						$(".reward").show();
						$(".reward").effect( "bounce", "slow" );
						$(".reward").fadeOut('fast',function(){ });
						$(".coin_text").text(new Intl.NumberFormat().format(coins));
					}
                }
                else {
                    $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem adding this gallery to favorites, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
                }
            },
            error: function(xhr, textStatus, error){
                $("#message_comment").html('<div style="margin:5px 0 0 0" class="alert alert-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> There was a problem adding your comment, please refresh page and try again. <i id="alert_close" class="fa fa-times" aria-hidden="true"></i></div>');
            },
            complete:function(response) {

            }
       });
       return false;
    });
	
	});

}

listComment();

function listComment() {
	
$(document).ready(function () {

$.post("/inc/comments.php",
        function (data) {
			
			if(data == 'common_error') {
				console.log('There was a problem listing comments for this gallery, please refresh page and try again.');
			}
			else if(data == 'empty') {
				console.log('Empty response.');
			}
			else {
			   
            var data = JSON.parse(data);
			            
            var comments = "";
            var replies = "";
            var item = "";
            var parent = -1;
            var results = new Array();

            var list = $("<ul>");
            var item = $("<li>").html(comments);

            for (var i = 0; (i < data.length); i++)
            {
                var commentId = data[i]['comment_id'];
                parent = data[i]['parent'];
                user_name = data[i]['user_name'];
                comment = data[i]['comment'];
                avatar = data[i]['user_avatar'];
                colored_username = data[i]['colored_username'];
                custom_title = data[i]['custom_title'];
				
                if(colored_username == 'true') {
                    var user_class = 'colored';
                }
                else {
                    var user_class = 'normal';
                }
                if(custom_title == 'false') {
                    var custom_ttl = '';
                }
                else if(custom_title == null) {
                    var custom_ttl = '';
                }
                else {
                    var custom_ttl = custom_title;
                }

                if (parent == null)
                {
                    if(avatar == null) {
                        var avatar = 'default.png';
                    }
                    comments = "<div class='comment'>"+
                    "<div class='left'>"+			
					"<div style='background:url(/uploads/avatars/" + avatar + ") no-repeat;width:50px;height:50px;margin:4px 0 0 0;padding:0;background-position:center center;background-size:cover;image-rendering:-webkit-optimize-contrast;'></div>"+
                    "</div>"+
                    "<div class='col col-xs-10 col-sm-11 col-md-11'>"+
                    "<div class='head'><span class='"+user_class+"' id='user_text_"+commentId+"'>"+ data[i]['user_name'] + "</span><span class='posted'>" + data[i]['posted_on'] + " <a onClick='postReply(" + commentId + "); return false;'>Reply</a></div>"+
                    "<div class='custom_ttl'>"+custom_ttl+"</div>"+
                    "<div class='text'>"+ data[i]['comment'] + "</div>"+
                    "</div>"+
                    "<div class='clear'></div>";

                    var item = $("<li class='master_c'>").html(comments);
                    list.append(item);
                    var reply_list = $('<ul>');
                    item.append(reply_list);
                    listReplies(commentId, data, reply_list);
                }
            }
			
            $("#comments").html(list);

           }

            
        });
		
		});
}


            function listReplies(commentId, data, list) {
				
				$(document).ready(function () {


                for (var i = 0; (i < data.length); i++)
                {

                    if (commentId == data[i]['parent'])
                    {

                        colored_username = data[i]['colored_username'];
                        custom_title = data[i]['custom_title'];
                        avatar_reply = data[i]['user_avatar'];

                        if(colored_username == 'true') {
                            var user_class = 'colored';
                        }
                        else {
                            var user_class = 'normal';
                        }
                        if(custom_title == 'false') {
                            var custom_ttl = '';
                        }
                        else if(custom_title == null) {
                            var custom_ttl = '';
                        }
                        else {
                            var custom_ttl = custom_title;
                        }

                        if(avatar_reply == null) {
                            var avatar_reply = 'default.png';
                        }

                        var comments = "<div class='comment'>"+
                        "<div class='left_ch'>"+
						"<div style='background:url(/uploads/avatars/" + avatar_reply + ") no-repeat;width:50px;height:50px;margin:4px 0 0 0;padding:0;background-position:center center;background-size:cover;image-rendering:-webkit-optimize-contrast;'></div>"+
                        "</div>"+
                        "<div class='col col-xs-10 col-sm-11 col-md-11'>"+
                        "<div class='head'><span class='"+user_class+"' id='user_text_"+data[i]['comment_id']+"'>"+ data[i]['user_name'] + "</span><span class='posted'>" + data[i]['posted_on'] + " <a onClick='postReply(" + data[i]['comment_id'] + "); return false;'>Reply</a></div>"+
                        "<div class='custom_ttl'>"+custom_ttl+"</div>"+
                        "<div class='text'>"+ data[i]['comment'] + "</div>"+
                        "</div>"+
                        "<div class='clear'></div>"+
                        "</div>";

                        var item = $("<li class='reply_c' id='comment_"+data[i]['comment_id']+"'>").html(comments);
                        var reply_list = $('<ul>');
                        list.append(item);
                        item.append(reply_list);
                        listReplies(data[i].comment_id, data, reply_list);
                    }
                }
				
				});
				
            }
			
			
