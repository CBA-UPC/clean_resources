var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:
$jscomp.getGlobal=$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=
$jscomp.polyfill("Array.prototype.find","es6","es3");
if(document.getElementById("widget_social_share")){var twitter_via=$("#social_share_data").attr("data_twitter_via"),social_share={},social_share_url=$("#social_share_data").attr("data_social_share_url");social_share.hash_text="";social_share.social_title=$('meta[property="og:title"]').attr("content");$("#breadcrumb-share-icon").click(function(){$(".os-breadcrumb").addClass("show-social")});$("#breadcrumb-close").click(function(){$(".os-breadcrumb").removeClass("show-social")});$("#breadcrumb-fb").click(function(){var a=
"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(social_share_url);window.open(a,"Share on Facebook","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")});$("#breadcrumb-twitter").click(function(){t_social_url=encodeURIComponent(social_share_url+"?utm_source=article&utm_medium=tweet-button&utm_campaign=article-tweet");var a="https://twitter.com/share?url="+t_social_url+"&via="+twitter_via+"&text="+encodeURIComponent(social_share.social_title)+"&related=&hashtags="+
social_share.hash_text;window.open(a,"Share on Twitter","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")});$("#breadcrumb-gplus").click(function(){var a="https://plus.google.com/share?url="+encodeURIComponent(social_share_url);window.open(a,"Share on gPlus","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")})}
document.getElementById("mk-poll-popup")&&($("#mk-poll-btn").click(function(){$("#mk-poll-popup").show()}),$("#mk-poll-close").click(function(){$("#mk-poll-popup").hide()}),$(document).on("click",".poll-voting",function(){var a={match_id:$(this).attr("data-match-id"),question_id:$(this).attr("data-question-id"),option_key:$(this).attr("data-option-key"),param1:$(this).attr("data-param1"),param2:$(this).attr("data-param2")};$.ajax({url:"/src/index.php?section=cricket&part=predection&action=poll-voting",
dataType:"json",type:"post",data:a,beforeSend:function(){$("#ipl_predection_"+a.question_id+" .ipl-prediction-loading").show()},error:function(a){alert(a.statusText+a.responseText);$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:success:function(a){console.log(a);$("#poll_container_"+a.question_id).html(a.template)}})}));
document.getElementById("widget_live_home_block")&&setInterval(function(){var a=$("#widget_live_home_block").attr("data_lang");$.get("/dynamic_html_includes/cricket/desk/"+a+"/live_block.html",function(a){$("#widget_live_home_block").html(a);$(".os-c-top-slider ul").bxSlider({pager:!1,slideWidth:300,slideMargin:20,infiniteLoop:!1,hideControlOnEnd:!1,minSlides:4,maxSlides:4,moveSlides:1,adaptiveHeight:!0});$(".os-c-top-menu-l ul li a").click(function(){var a=this.id;$(".os-c-top-menu-l ul li a").removeClass("active");
$(this).addClass("active");$(".os-c-top-slider").removeClass("active");$("#"+a+"-block").addClass("active");mainslider()})})},3E4);document.getElementById("widget_live_top_cricket_links")&&setInterval(function(){var a=$("#widget_live_top_cricket_links").attr("data_lang");$.get("/dynamic_html_includes/cricket/desk/"+a+"/live_top_links.html",function(a){$("#widget_live_top_cricket_links").html(a)})},5E5);
if(document.getElementById("widget_ipl_prediction_article_block")){var lang=$("#widget_ipl_prediction_article_block").attr("data_lang");$rand=Math.floor(2*Math.random()+1);1==$rand?$.get("/dynamic_html_includes/cricket/desk/"+lang+"/ipl_2020_prediction_widget_include.html",function(a){$("#widget_ipl_prediction_article_block").html(a)}):2==$rand&&$.get("/dynamic_html_includes/cricket/desk/"+lang+"/ipl_impact_widget_include.html",function(a){$("#widget_ipl_prediction_article_block").html(a)})}
document.getElementById("widget_wc_prediction_article_block")&&(lang=$("#widget_wc_prediction_article_block").attr("data_lang"),$.get("/dynamic_html_includes/cricket/desk/"+lang+"/wc_2019_prediction_widget_include.html",function(a){$("#widget_wc_prediction_article_block").html(a)}));
document.getElementById("widget_fifa_prediction_article_block")&&(lang=$("#widget_fifa_prediction_article_block").attr("data_lang"),$.get("/dynamic_html_includes/football/desk/"+lang+"/fifa_2018_prediction_widget_include.html",function(a){$("#widget_fifa_prediction_article_block").html(a)}));
document.getElementById("widget_football_prediction_article_block")&&(lang=$("#widget_football_prediction_article_block").attr("data_lang"),$.get("/dynamic_html_includes/football/desk/"+lang+"/league_prediction_widget_include.html",function(a){$("#widget_football_prediction_article_block").html(a)}));
document.getElementById("widget_cricket_right_fixture_result")&&(lang=$("#widget_cricket_right_fixture_result").attr("data_lang"),$.get("/dynamic_html_includes/cricket/desk/"+lang+"/fixture_result_block.html",function(a){$("#widget_cricket_right_fixture_result").html(a);$(".os-sports-fr").on("click","ul li a",function(a){a.stopPropagation();a=$(this).attr("id");$(".os-sports-fr-b").hide();$(".os-sports-fr-b-"+a).show();$(".os-sports-fr ul li a").removeClass("active");$(this).addClass("active")});
$(".os-sports-fr .os-sports-fr-b").on("click"," ul li a",function(a){a.stopPropagation()})}));
document.getElementById("widget_live_common_block")&&setInterval(function(){var a=$("#widget_live_common_block").attr("data_lang");$.get("/dynamic_html_includes/cricket/desk/"+a+"/live_home_block.html",function(a){$("#widget_live_common_block").html(a);$(".os-c-top-slider ul").bxSlider({pager:!1,slideWidth:300,slideMargin:20,infiniteLoop:!1,hideControlOnEnd:!1,minSlides:4,maxSlides:4,moveSlides:1,adaptiveHeight:!0});$(".os-c-top-menu-l ul li a").click(function(){var a=this.id;$(".os-c-top-menu-l ul li a").removeClass("active");
$(this).addClass("active");$(".os-c-top-slider").removeClass("active");$("#"+a+"-block").addClass("active");mainslider()})})},3E4);
if(document.getElementById("gmzop-js")){var numLi=$(".gamecard-slider-block ul").find("li").length,totalWidth=300*(numLi-2);$(".gnext-nav").click(function(a){a.preventDefault();a=parseFloat($(".gamecard-slider-block ul").scrollLeft())+300;$(".gamecard-slider-block ul").animate({scrollLeft:a},900);$(".gprev-nav").removeClass("disabled");totalWidth<=a&&$(".gnext-nav").addClass("disabled")});$(".gprev-nav").click(function(a){a.preventDefault();a=parseFloat($(".gamecard-slider-block ul").scrollLeft())-
300;$(".gamecard-slider-block ul").animate({scrollLeft:a},900);$(".gnext-nav").removeClass("disabled");280>=a&&$(".gprev-nav").addClass("disabled")})}
document.getElementById("widget_live_common_block_new")&&(numLi=$(".oi-scores-slider ul").find("li").length,totalWidth=290*(numLi-2),$(document).on("click",".next-nav",function(a){a.preventDefault();a=parseFloat($(".oi-scores-slider ul").scrollLeft())+290;$(".oi-scores-slider ul").animate({scrollLeft:a},900);$(".prev-nav").removeClass("disabled");totalWidth<=a&&$(".next-nav").addClass("disabled")}),$(document).on("click",".prev-nav",function(a){a.preventDefault();a=parseFloat($(".oi-scores-slider ul").scrollLeft())-
290;$(".oi-scores-slider ul").animate({scrollLeft:a},900);$(".next-nav").removeClass("disabled");150>=a&&$(".prev-nav").addClass("disabled")}),setInterval(function(){var a=$("#widget_live_common_block_new").attr("data_lang");$.get("/dynamic_html_includes/cricket/desk/"+a+"/live_home_block_new.html",},3E4));
document.getElementById("widget_live_footer_block")&&(startInterVal(),lang=$("#widget_live_footer_block").attr("data_lang"),$.get("/dynamic_html_includes/cricket/desk/"+lang+"/live_footer_block.html",function(a){$("#widget_live_footer_block").html(a);a=$(".flip-main").length;var b=7E3;flip();setInterval(flip,a*b);$(".desktop-flip-block").hover(function(){b=null},;$(".mykhel-min-btn").click(function(){$(".desktop-flip-block").hide();$(".mykhel-result-minimised").show()});$(".mykhel-result-minimised").click(}),setInterval(function(){$.getJSON("/dynamic_html_includes/cricket/desk/live_footer_data.json",function(a){$.each(a,function(a,c){$("#match-"+a).html(c);i%2&&(url=location.protocol+"//"+location.host+location.pathname,console.log(url),googleAnalyticsCodeCommon())})});i+=1},3E4));
function flip(){var a=$(".flip-main"),b=a.length,c=-1;a.each(function(d){$thisflip=$(this);setTimeout(function(d){d=b-1;console.log(c);c<d?c++:c=0;a.removeClass("active").eq(c).addClass("active")},7E3*d,$thisflip)})}document.getElementById("widget_home_icc_ranking")&&requirejs(["idtabs"],;
function openResults(a,b){var c;var d=document.getElementsByClassName("tabscontent");for(c=0;c<d.length;c++)d[c].style.display="none";d=document.getElementsByClassName("tablinks");for(c=0;c<d.length;c++)d[c].className=d[c].className.replace(" active","");document.getElementById(b).style.display="block";a.currentTarget.className+=" active"}
document.getElementById("widget_football_right_fixture_result")&&requirejs(["jquery"],function(){$(".os-sports-fr .os-sports-fr-b").on("click","ul li a",function(a){a.stopPropagation()});setInterval(function(){var a=$("#widget_football_right_fixture_result").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/football_right_fixture_result.html",function(a){$("#football_right_fixture_result").html(a)})},6E4);$(".os-sports-fr").on("click","ul li a",function(a){a.stopPropagation();a=
$(this).attr("id");var b=$(this).parents(".os-sports-fr");b.find(".os-sports-fr-b").hide();b.find(".os-sports-fr-b-"+a).show();b.find("ul li a").removeClass("active");$(this).addClass("active")});$(".os-choose-league-db span").click(function(){var a=$(this).next();a.hasClass("show")?a.removeClass("show"):a.addClass("show")});$(".os-choose-league-db").on("click","ul li a",function(a){a.stopPropagation();var b=$(this).attr("id");a=b.replace("cur","ul");var c=b.replace("res","ulr");b=b.search("cur");
$(".os-choose-league-db span").next().removeClass("show");0>b?($("#currentResult").html($(this).text()),$("#rslist ul").hide(),$(".os-sports-fr-b-results ul#"+c).show()):($("#currentLeague").html($(this).text()),$("#fxlist ul").hide(),$(".os-sports-fr-b-fixtures ul#"+a).show());console.log(a)})});
document.getElementById("widget_football_right_fixture_result_home")&&requirejs(["jquery"],function(){$(".os-sports-fr .os-sports-fr-b").on("click","ul li a",;setInterval(function(){var a=$("#widget_football_right_fixture_result_home").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/football_right_fixture_result_home.html",function(a){$("#football_right_fixture_result_home").html(a);$(".os-sports-fr").on("click","ul li a",function(a){a.stopPropagation();
a=$(this).attr("id");$(".os-sports-fr-b").hide();$(".os-sports-fr-b-"+a).show();$(".os-sports-fr ul li a").removeClass("active");$(this).addClass("active")});$(".os-choose-league span").click(;$(".os-choose-league").on("click","ul li a",function(a){a.stopPropagation();a=$(this).attr("id");$(".os-sports-fr-b-fixtures ul.leagues-block").hide();$(".os-choose-league span").next().removeClass("show");$(".os-sports-fr-b-fixtures ul#"+
a+"-show").show()})})},6E4)});document.getElementById("widget_football_top_links")&&setInterval(function(){var a=$("#widget_football_top_links").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/football_top_link.html",function(a){$("#football_top_links").html(a)})},6E4);
document.getElementById("widget_football_points_table")&&setInterval(function(){var a=$("#widget_football_points_table").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/right_football_points_table.html",function(a){$("#football_points_table").html(a)})},6E4);document.getElementById("prokabaddi_home_widget")&&require(["jquery","bxslider"],function(){console.log("Prokabaddi Widget Inclded");$(".pk-slider__block ul").bxSlider({auto:!0,pager:!1})});
document.getElementById("widget_mykhel_auction_footer_block")&&(require(["jquery"],function(){var a=$("#widget_mykhel_auction_footer_block").attr("data_lang"),b=0;$.get("/dynamic_html_includes/cricket/desk/"+a+"/mykhel_auction_footer_block_inc.html",function(a){$("#widget_mykhel_auction_footer_block").html(a);b=a.length});setInterval(function(){1<b&&$.getJSON("/dynamic_html_includes/cricket/desk/"+a+"/mykhel_auction_footer_data.json",function(a){$.each($.parseJSON(a),})},
3E4)}),$(document).on("click",".ipl-auction-close-cube",);document.getElementById("ipl_auction_home_block")&&setInterval(function(){var a=$("#ipl_auction_home_block").attr("data_lang");$.get("/dynamic_html_includes/cricket/desk/"+a+"/ipl_auction_block.html",},6E4);
document.getElementById("ques-block-1")&&(document.getElementById("ques-block-1").scrollIntoView({behavior:"auto",block:"center",inline:"center"}),runTimer());
if(document.getElementsByClassName(".mk-listicle-content")&&0<$(".mk-listicle-content").length){startInterVal();var curindex,mkcurrenturl=window.location.href,mkchangedurl=window.location.href,mkstarturl=window.location.href,mktriggerpoint,mkcounterElement,mklastScrollTop=0,mkqueryString=window.location.search;$(window).on("scroll",function(a){a=$(window).height();var b=$(window).scrollTop()+a;$(".mk-listicle-content").each(function(a,d){var c=$(d).outerHeight();d=$(d).offset().top;if(b>d&&b<d+c)return $(this).hasClass("element-visible")||
(mktriggerpoint=.8*$(window).height()+$(window).scrollTop(),mkcounterElement=$(this).offset().top,mknewTriggerpoint=mktriggerpoint+5,mktriggerpoint>mkcounterElement&&($(this).addClass("element-visible"),curindex=a,a=$("#mkslider"+curindex).attr("data-mk-title"),history.replaceState("","","#"+a),mkchangedurl=location.href)),!1});mkcurrenturl!==mkchangedurl&&(a=$(this).scrollTop(),a>mklastScrollTop?$("#mkslider"+(curindex-1)).removeClass("element-visible"):$("#mkslider"+(curindex+1)).removeClass("element-visible"),
mklastScrollTop=a,googleAnalyticsCodeCommon(),mkcurrenturl=mkchangedurl);if(50>=$(window).scrollTop())return history.replaceState("","",mkstarturl),mkcurrenturl=mkchangedurl=location.href,$("#mkslider0").removeClass("element-visible"),!1})}document.getElementById("db-ipl-faq")&&$(".ipl23-faq-ques").click(;
if(document.getElementById("db_js_quiz")){var click_flag;twitter_via=$("#quiz_social_share_data").attr("data_twitter_via");social_share={};social_share_url=$("#quiz_social_share_data").attr("data_social_share_url");social_share.hash_text="";social_share.social_title=$('meta[property="og:title"]').attr("content");$("#quiz_breadcrumb-fb").click(function(){var a="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(social_share_url);window.open(a,"Share on Facebook","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")});
$("#quiz_breadcrumb-twitter").click(function(){t_social_url=encodeURIComponent(social_share_url+"?utm_source=article&utm_medium=tweet-button&utm_campaign=article-tweet");var a="https://twitter.com/share?url="+t_social_url+"&via="+twitter_via+"&text="+encodeURIComponent(social_share.social_title)+"&related=&hashtags="+social_share.hash_text;window.open(a,"Share on Twitter","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")});$("#submit_login_btn").click(;
$("#next_level").click(function(){level=$("#level").val();cmd="getQuestions";window.location.href=quiz_url+"?cmd="+cmd+"&level="+level});$("#play_again").click(function(){cmd="play_again";window.location.href=quiz_url+"?cmd="+cmd});$("#next_qst").click(function(){click_flag=$("#click_flag").val();click_flag=$("#click_flag").val();$("#level").val();if(0==click_flag){UserUpdates(data_val_array[0],data_val_array[1],max_level,max_questions,quiz_url);var a=$("#level").val();var b="getQuestions";a>max_level&&
sno==max_questions?(b="endQuiz",window.location.href=quiz_url+"?cmd="+b):sno==max_questions?(b="EndLevel",window.location.href=quiz_url+"?cmd="+b):window.location.href=quiz_url+"?cmd="+b+"&level="+a;window.location.href=quiz_url+"?cmd="+b+"&level="+a}else a=$("#level").val(),window.location.href=a>max_level&&sno==max_questions?quiz_url+"?cmd=endQuiz":sno==max_questions?quiz_url+"?cmd=EndLevel":quiz_url+"?cmd=getQuestions&level="+a});$('[id^="ans_"]').click(function(){data_val_array=$(this).attr("data_item").split("-");
click_flag=$("#click_flag").val();0==click_flag&&UserUpdates(data_val_array[0],data_val_array[1],max_level,max_questions,quiz_url)})}function getQuestionAnswerKey(a){$.ajax({type:"POST",url:"/src/index.php?section=cricket&part=ajax&action=quiz_answerKey",async:!1,data:{question_id:a},success:function(a){a=$.trim(a);$("#ans_"+a).addClass("correct-answer")}})}
function UserUpdates(a,b,c,d,e){var f;0===a&&(a=$("#qst_id").val());$("#countdown").prop("id","countdown_stop");$("#myCanvas").prop("id","myCanvas_stop");$("#click_flag").val(1);$.ajax({type:"POST",url:"/src/index.php?section=cricket&part=ajax&action=quiz_userPlay",async:!1,data:{question_id:a,answer_id:b,max_questions:d,max_level:c},success:function(c){response_array=c.split("-");f=$("#level").val();1==response_array[1]&&(f++,$("#level").val(f));1==response_array[0]?$("#ans_"+b).addClass("correct-answer"):
($("#ans_"+b).addClass("wrong-answer ticked"),getQuestionAnswerKey(a))}})}function userLogIn(){var a=$("#name").val(),b=/^[A-Za-z ]+$/.test(a);""===a||" "===a?alert("Please Enter Name"):b?$.ajax({type:"POST",url:"/src/index.php?section=cricket&part=ajax&action=quiz_userLogIn",data:{name:a},success:function(a){1==a&&(window.location.href=quiz_url+"?cmd=getQuestions&level=1")}}):alert("Please Enter Valid Name")}
function runTimer(){$("#countdown").html("");var a=20,b=a,c=2/b,d=b;$("#countdown").html(a);b=document.getElementById("myCanvas").getContext("2d");b.beginPath();b.arc(95,95,50,0,2*Math.PI);b.lineWidth=15;b.strokeStyle="#2b31f1";b.stroke();downloadTimer=setInterval(function(){$("#countdown").html(a);var b=document.getElementById("myCanvas").getContext("2d");20!=a&&(b.beginPath(),b.fillRect(0,0,300,300),b.clearRect(0,0,300,300));b.beginPath();b.arc(95,95,50,0,(2-d)*Math.PI);b.lineWidth=15;b.strokeStyle=
"#2b31f1";b.stroke();0==a&&(clearInterval(downloadTimer),UserUpdates(0,0,max_level,max_questions,quiz_url));--a;d+=c},1E3)};