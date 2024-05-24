var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGglobal;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",fup.findInternal(this,a,c).v}},"es6","es3");
if(document.getElementById("widget_social_share")){var twitter_via=$("#social_share_data").attr("data_twitter_via"),social_share={},social_share_url=$("#social_share_data").attr("data_social_share_url");social_share.hash_text="";social_share.social_title=$('meta[property="og:title"]').attr("content");$("#breadcrumb-share-icon").click(function(){$(".os-breadcrumb").addClass("show-social")});$("#breadcrumb-close").click(function(){$(".os-breadcrumb").removeClass("show-social")});$("#breadcrumb-fb").click(function(){var a=
"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(social_share_url);window.open(a,"Share on Facebook","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")});$("#breadcrumb-twitter").click(function(){t_social_url=encodeURIComponent(social_share_url+"?utm_source=article&utm_medium=tweet-button&utm_campaign=article-tweet");var a="https://twitter.com/share?url="+t_social_url+"&via="+twitter_via+"&text="+encodeURIComponent(social_share.social_title)+"&related=&hashtags="+
social_share.hash_text;window.open(a,"Share on Twitter","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")});$("#breadcrumb-gplus").click(function(){var a="https://plus.google.com/share?url="+encodeURIComponent(social_share_url);window.open(a,"Share on gPlus","menubar=no,toolbar=no,resizable=no,scrollbars=no,height=400,width=600")})}
document.getElementById("mk-poll-popup")&&($("#mk-poll-btn").click(function(){$("#mk-poll-popup").show()}),$("#mk-poll-close").click(function(){$("#mk-poll-popup").hide()}),$(document).on("click",".poll-voting",function(){var a={match_id:$(this).attr("data-match-id"),question_id:$(this).attr("data-question-id"),option_key:$(this).attr("data-option-key"),param1:$(this).attr("data-param1"),param2:$(this).attr("data-param2")};$.ajax({url:"/src/index.php?section=cricket&part=predection&action=poll-voting",
dataType:"json",type:"post",data:a,beforeSend:function(){$("#ipl_predection_"+a.question_id+" .ipl-prediction-loading").show()},error:function(a){alert(a.statusText+a.responseText);$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:function(){$("#ipl_predection_"+a.question_id+" .ipl-prediction-loading").hide()},success:function(a){console.log(a);$("#poll_container_"+a.question_id).html(a.template)}})}));
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
290;$(".oi-scores-slider ul").animate({scrollLeft:a},900);$(".next-nav").removeClass("disabled");150>=a&&$(".prev-nav").addClass("disabled")}),setInterval(function(){var a=$("#widget_live_common_block_new").attr("data_lang");$.get("/dynamic_html_includes/cricket/desk/"+a+"/live_home_block_new.html",function(a){$("#widget_live_common_block_new").empty();$("#widget_live_common_block_new").html(a)})},3E4));
document.getElementById("widget_live_footer_block")&&(startInterVal(),lang=$("#widget_live_footer_block").attr("data_lang"),$.get("/dynamic_html_includes/cricket/desk/"+lang+"/live_footer_block.html",function(a){$("#widget_live_footer_block").html(a);a=$(".flip-main").length;var b=7E3;flip();setInterval(flip,a*b);$(".desktop-flip-block").hover(function(){b=null},function(){b=7E3});$(".mykhel-min-btn").click(function(){$(".desktop-flip-block").hide();$(".mykhel-result-minimised").show()});$(".mykhel-result-minimised").click(function(){$(".mykhel-result-minimised").hide();
$(".desktop-flip-block").show()})}),setInterval(function(){$.getJSON("/dynamic_html_includes/cricket/desk/live_footer_data.json",function(a){$.each(a,function(a,c){$("#match-"+a).html(c);i%2&&(url=location.protocol+"//"+location.host+location.pathname,console.log(url),googleAnalyticsCodeCommon())})});i+=1},3E4));
function flip(){var a=$(".flip-main"),b=a.length,c=-1;a.each(function(d){$thisflip=$(this);setTimeout(function(d){d=b-1;console.log(c);c<d?c++:c=0;a.removeClass("active").eq(c).addClass("active")},7E3*d,$thisflip)})}document.getElementById("widget_home_icc_ranking")&&requirejs(["idtabs"],function(){$(".id-tabs").idTabs()});
function openResults(a,b){var c;var d=document.getElementsByClassName("tabscontent");for(c=0;c<d.length;c++)d[c].style.display="none";d=document.getElementsByClassName("tablinks");for(c=0;c<d.length;c++)d[c].className=d[c].className.replace(" active","");document.getElementById(b).style.display="block";a.currentTarget.className+=" active"}
document.getElementById("widget_football_right_fixture_result")&&requirejs(["jquery"],function(){$(".os-sports-fr .os-sports-fr-b").on("click","ul li a",function(a){a.stopPropagation()});setInterval(function(){var a=$("#widget_football_right_fixture_result").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/football_right_fixture_result.html",function(a){$("#football_right_fixture_result").html(a)})},6E4);$(".os-sports-fr").on("click","ul li a",function(a){a.stopPropagation();a=
$(this).attr("id");var b=$(this).parents(".os-sports-fr");b.find(".os-sports-fr-b").hide();b.find(".os-sports-fr-b-"+a).show();b.find("ul li a").removeClass("active");$(this).addClass("active")});$(".os-choose-league-db span").click(function(){var a=$(this).next();a.hasClass("show")?a.removeClass("show"):a.addClass("show")});$(".os-choose-league-db").on("click","ul li a",function(a){a.stopPropagation();var b=$(this).attr("id");a=b.replace("cur","ul");var c=b.replace("res","ulr");b=b.search("cur");
$(".os-choose-league-db span").next().removeClass("show");0>b?($("#currentResult").html($(this).text()),$("#rslist ul").hide(),$(".os-sports-fr-b-results ul#"+c).show()):($("#currentLeague").html($(this).text()),$("#fxlist ul").hide(),$(".os-sports-fr-b-fixtures ul#"+a).show());console.log(a)})});
document.getElementById("widget_football_right_fixture_result_home")&&requirejs(["jquery"],function(){$(".os-sports-fr .os-sports-fr-b").on("click","ul li a",function(a){a.stopPropagation()});setInterval(function(){var a=$("#widget_football_right_fixture_result_home").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/football_right_fixture_result_home.html",function(a){$("#football_right_fixture_result_home").html(a);$(".os-sports-fr").on("click","ul li a",function(a){a.stopPropagation();
a=$(this).attr("id");$(".os-sports-fr-b").hide();$(".os-sports-fr-b-"+a).show();$(".os-sports-fr ul li a").removeClass("active");$(this).addClass("active")});$(".os-choose-league span").click(function(){var a=$(this).next();a.hasClass("show")?a.removeClass("show"):a.addClass("show")});$(".os-choose-league").on("click","ul li a",function(a){a.stopPropagation();a=$(this).attr("id");$(".os-sports-fr-b-fixtures ul.leagues-block").hide();$(".os-choose-league span").next().removeClass("show");$(".os-sports-fr-b-fixtures ul#"+
a+"-show").show()})})},6E4)});document.getElementById("widget_football_top_links")&&setInterval(function(){var a=$("#widget_football_top_links").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/football_top_link.html",function(a){$("#football_top_links").html(a)})},6E4);
document.getElementById("widget_football_points_table")&&setInterval(function(){var a=$("#widget_football_points_table").attr("data_lang");$.get("/dynamic_html_includes/football/desk/"+a+"/right_football_points_table.html",function(a){$("#football_points_table").html(a)})},6E4);document.getElementById("prokabaddi_home_widget")&&require(["jquery","bxslider"],function(){console.log("Prokabaddi Widget Inclded");$(".pk-slider__block ul").bxSlider({auto:!0,pager:!1})});
document.getElementById("widget_mykhel_auction_footer_block")&&(require(["jquery"],function(){var a=$("#widget_mykhel_auction_footer_block").attr("data_lang"),b=0;$.get("/dynamic_html_includes/cricket/desk/"+a+"/mykhel_auction_footer_block_inc.html",function(a){$("#widget_mykhel_auction_footer_block").html(a);b=a.length});setInterval(function(){1<b&&$.getJSON("/dynamic_html_includes/cricket/desk/"+a+"/mykhel_auction_footer_data.json",function(a){$.each($.parseJSON(a),function(a,b){$("#"+a).html(b)})})},
3E4)}),$(document).on("click",".ipl-auction-close-cube",function(){$("#ipl-auction-wrap").toggleClass("minimised")}));document.getElementById("ipl_auction_home_block")&&setInterval(function(){var a=$("#ipl_auction_home_block").attr("data_lang");$.get("/dynamic_html_includes/cricket/desk/"+a+"/ipl_auction_block.html",function(a){$("#ipl_auction_home_block").html(a)})},6E4);
document.getElementById("ques-block-1")&&(document.getElementById("ques-block-1").scrollIntoView({behavior:"auto",block:"center",inline:"center"}),runTimer());
if(document.getElementsByClassName(".mk-lisplayer.settings.tglifrmcntndsplyactv', true);\\ncmTag.set('player.settings.aduntldflbfruntld', true);\\ncmTag.set('player.settings.dtctprvtbrwsng', false);\\ncmTag.set('isUseNewViewabilityCalc', true);\\ncmTag.set('100viewPercent', 98);\\ncmTag.set('traceViewability100Seconds', 0);\\ncmTag.set('isChangePredictPointsWithAny', false);\\ncmTag.set('isCancelGetAdOnEligibilityLost.isActive', true);\\ncmTag.set('isCancelGetAdOnEligibilityLost.includeRVAny', true);\\ncmTag.set('isGetRv1OnlyForEligible.isActive', true);\\ncmTag.set('isGetRv1OnlyForEligible.delayPrediction', false);\\ncmTag.set('player.settings.vwclcflbkenbld', true);\\ncmTag.set('scrollEndTimeout', 500);\\ncmTag.set('player.settings.omid.isActive', true);\\n\\ncmTag.set('player.urls.organicContentVideosLocation', '//magazine-api.taboola.com/video-content');\\n\\n// Cookie sync predictor config\\ncmTag.set('predictors.time.cookieSync.isActive', true);\\ncmTag.set('predictors.time.cookieSync.lengthInSeconds', 20);\\ncmTag.set('predictors.time.cookieSync.repeat', 1);\\n\\ncmTag.set('components.CloseButtonView.delay', 0);\\n\\n\\ncmTag.push = cmTag.push || function() {};\\n\\ncmTag.set(\\\"player.settings.tmbtwfs\\\", function(successes, failures, store) {\\n  if (failures > 45) {\\n    return 999;\\n  }\\n  return store.get('time_between_waterfall');\\n});\\n\\n\\ncmTag.set('player.settings.mntmbtwfsf', function(successes, failures, store) {\\n  if (failures > 45) {\\n    return 999000;\\n  }\\n  return store.get('mintimwf');\\n});\\ncmTag.set('unitThrottlerFiltered', \\\"false\\\");\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n      key: 'preset.level',\\n      val: 1\\n    },\\n    {\\n      key: \\\"unitThrottlerFiltered\\\",\\n      val: true\\n    }\\n  ],\\n  settings: {\\n    'preset.level': 3\\n  }\\n});\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'countryIsoCode',\\n    val: 'bra'\\n  }],\\n  settings: {\\n    'player.settings.expxls.adimpression': 'https://sb.scorecardresearch.com/p?c1=2&c2=34311413&ns_ap_sv=2.1511.10&ns_type=hidden&ns_st_it=a&ns_st_sv=4.0.0&ns_st_ad=1&ns_st_sq=1&ns_st_id=%%impression_id%%&ns_st_ec=1&ns_st_cn=1&ns_st_ev=play&ns_st_ct=va00&ns_st_cl=%%duration%%&ns_st_pt=0&c3=2&c4=&c6=&ns_ts=%%timestamp%%',\\n    'player.settings.expxls.advideocomplete': 'https://sb.scorecardresearch.com/p?c1=2&c2=34311413&ns_ap_sv=2.1511.10&ns_type=hidden&ns_st_it=a&ns_st_sv=4.0.0&ns_st_ad=1&ns_st_sq=1&ns_st_id=%%impression_id%%&ns_st_ec=2&ns_st_cn=1&ns_st_ev=end&ns_st_ct=va00&ns_st_cl=%%duration%%&ns_st_pt=%%duration%%&c3=2&c4=&c6=&ns_ts=%%timestamp%%'\\n  }\\n});\\n\\n\\n\\n\\nif ('am' == 'sg' || 'am' == 'SG') {\\n  cmTag.set('player.settings.wf_base_path', '//sg-wf.taboola.com');\\n}\\n\\nif ('am' == 'hk' || 'am' == 'HK' || 'am' == 'ch' || 'am' == 'CH' || 'am' == 'us' || 'am' == 'US' || 'am' == 'la' || 'am' == 'LA') {\\n  cmTag.set('numOfWfUntilDcSwitch', 1);\\n  cmTag.set('player.settings.numOfWfUntilDcSwitch', 1);\\n}\\n\\nif ('am' == 'am' || 'am' == 'AM') {\\n  cmTag.set('numOfWfUntilDcSwitch', 2);\\n  cmTag.set('player.settings.numOfWfUntilDcSwitch', 2);\\n}\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    func: function(config) {\\n      return config.get('preroll.pubId') === 166717 || config.get('pubId') === 166717 || config.get('preroll.pubId') === 236525 || config.get('pubId') === 236525 || config.get('preroll.pubId') === 198827 || config.get('pubId') === 198827;\\n    }\\n  }],\\n  settings: {\\n    \\\"preroll.pubId\\\": 169497,\\n    \\\"preroll.pubTagId\\\": 953497,\\n    \\\"midroll.pubId\\\": 169497,\\n    \\\"midroll.pubTagId\\\": 953497,\\n    \\\"postroll.pubId\\\": 169497,\\n    \\\"postroll.pubTagId\\\": 953497,\\n    \\\"pubId\\\": 169497,\\n    \\\"pubTagId\\\": 953497,\\n    \\\"migratedwf\\\": 1,\\n    'abTest': '166721b_vA'\\n  }\\n});\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    func: function(config) {\\n      return config.get('preroll.pubId') === 236525 || config.get('pubId') === 236525;\\n    }\\n  }],\\n  settings: {\\n    \\\"migratedwf\\\": 3,\\n    'abTest': '166725b_vA'\\n  }\\n});\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    func: function(config) {\\n      return config.get('preroll.pubId') === 198827 || config.get('pubId') === 198827;\\n    }\\n  }],\\n  settings: {\\n    \\\"migratedwf\\\": 4,\\n    'abTest': '206725b_vA'\\n  }\\n});\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    func: function(config) {\\n      return config.get('preroll.pubId') === 292045 || config.get('pubId') === 292045;\\n    }\\n  }],\\n  settings: {\\n    \\\"preroll.pubId\\\": 208401,\\n    \\\"preroll.pubTagId\\\": 1047981,\\n    \\\"midroll.pubId\\\": 208401,\\n    \\\"midroll.pubTagId\\\": 1047981,\\n    \\\"postroll.pubId\\\": 208401,\\n    \\\"postroll.pubTagId\\\": 1047981,\\n    \\\"pubId\\\": 208401,\\n    \\\"pubTagId\\\": 1047981,\\n    \\\"migratedwf\\\": 2,\\n    'abTest': '166724b_vA'\\n  }\\n});\\n\\n\\n\\n  cmTag.set(\\\"player.settings.frcmtfrms\\\", true);\\ncmTag.set(\\\"player.settings.fire_piggies\\\", true);\\ncmTag.set(\\\"secondsBW\\\", 17);\\ncmTag.set(\\\"player.settings.adto\\\", 300000);\\ncmTag.set(\\\"player.settings.vakll\\\", 300000);\\ncmTag.set(\\\"noaop\\\", 3);\\ncmTag.set(\\\"player.settings.rstmrai\\\", true);\\ncmTag.set(\\\"player.settings.dsktmouttoadcmpltn\\\", 30000);\\ncmTag.set(\\\"player.settings.mprdct\\\", 0.033);\\ncmTag.set(\\\"category\\\", \\\"ShortContent\\\");\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n  cmTag.set('vForce.getAdTimeoutSeconds', 60);\\ncmTag.set('secondsToCloseGlobal', 0);\\ncmTag.set('predictors.distancePixels.isListenToScrollSpeedChange', true);\\ncmTag.set('predictors.playerReady.isActive', true);\\ncmTag.set('predictors.playerReady.predictPoint', 0);\\ncmTag.set('predictors.multiAd.isActive', true);\\ncmTag.set('predictors.multiAd.predictPoints.1.qState', 'q3');\\ncmTag.set('predictors.multiAd.predictPoints.0.qState', 'q1');\\ncmTag.set('predictors.getAdFail.isActive', true);\\ncmTag.set('predictors.distancePixels.isActive', true);\\ncmTag.set('predictors.distancePixels.predictPoints.1.pixelsFromSelectors', 10);\\ncmTag.set('vForce.isActive', true);\\ncmTag.set('isMultiAd', true);\\ncmTag.set('scrollEndTimeout', 500);\\ncmTag.set('playPriority.type', 'ppKey');\\ncmTag.set('playPriority.key', 1);\\ncmTag.set('isTestParentSelector', true);\\ncmTag.set('isReportToKibana', true);\\ncmTag.set('player.settings.rplvpdactv', true);\\ncmTag.set('player.settings.bllblevt', '1,21,22,23,24,25,30,32,42,33,41,205');\\ncmTag.set('bllblevt', '1,21,22,23,24,25,30,32,42,33,41,205');\\ncmTag.set('isOppsulaEnabled', true);\\ncmTag.set('psthdrs', 'text/plain');\\ncmTag.set('player.settings.cmbopps', true);\\ncmTag.set('cmbopps', true);\\ncmTag.set('verticalWidthThreshold', 480);\\ncmTag.set('predictors.distancePixels.maxPPS', 100);\\ncmTag.set('predictors.intersection.isActive', true);\\ncmTag.set('predictors.intersection.predictPoints.1.intersectionPercent', 50);\\ncmTag.set('predictors.intersection.isStartWF', true);\\ncmTag.set('predictors.emptyQueue.predictPoints', 0);\\ncmTag.set(\\\"predictors.getAdFail.allowedPredictPoints\\\", 0);\\ncmTag.set('player.settings.vwclcflbkenbld', true);\\ncmTag.set('player.settings.dwnlnktrshld', 2);\\ncmTag.set('player.settings.frdwnlnkpxls', 1);\\ncmTag.set('player.settings.rmvrvlwntwrk', true);\\ncmTag.set(\\\"components.adChoice.isTranslateText\\\", false);\\ncmTag.set(\\\"components.Repeat.isTranslateText\\\", true);\\ncmTag.set(\\\"language\\\", \\\"en\\\");\\ncmTag.set(\\\"player.settings.omidExcludedVendors\\\", []);\\ncmTag.set(\\\"mediatypesArraySkippingViewableCheckAtSendOppMoment\\\", [2]);\\ncmTag.set(\\\"stickyCard.restrictions.isActive.default\\\", true);\\ncmTag.set(\\\"player.settings.externalDelayedEvents\\\", ['AdImpression', 'AdVideoStart', 'AdStarted']);\\ncmTag.set('player.settings.jsDsbleErlyai', true);\\ncmTag.set('player.settings.vldtvwbfrcmp', false);\\n\\n\\ncmTag.set('sendBeacon', true);\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: \\\"iframeData.inDFP\\\",\\n    val: true\\n  }],\\n  settings: {\\n    \\\"isSkippedDistancePredict\\\": true\\n  }\\n});\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'frameType',\\n    val: 3\\n  }],\\n  settings: {\\n    'isChangePredictPointsWithAny': true,\\n    'predictors.intersection.isActive': true,\\n    'isUseAmpObserver': true\\n  }\\n});\\n  cmTag.set('predictors.distancePixels.isStartWF', true);\\ncmTag.set('player.settings.dlywf', true);\\ncmTag.set('predictors.playerReady.isStartWF', false);\\ncmTag.set('predictors.playerReady.isActive', false);\\ncmTag.set('predictors.firstScroll.isStartWF', true);\\ncmTag.set('predictors.firstScroll.isActive', true);\\ncmTag.set('predictors.firstScroll.predictPoints', [0, 0]);\\ncmTag.set('predictors.multiAd.predictPoints.0.qState', 'q0');\\ncmTag.set('predictors.distancePixels.predictPoints.1.pixelsFromSelectors', -170);\\ncmTag.set('isStayInIframe', true);\\ncmTag.set(\\\"player.settings.vakll\\\", 999999999);\\ncmTag.set(\\\"player.settings.rstmrai\\\", true);\\ncmTag.set(\\\"onTimerClose\\\", \\\"showReplay\\\");\\ncmTag.set(\\\"isPlayerOutOfViewport\\\", true);\\ncmTag.set(\\\"animation.onTransitionOpen\\\", true);\\ncmTag.set('vForce.getAdTimeoutSeconds', 60);\\ncmTag.set('playPriority.type', 'ppKey');\\ncmTag.set('playPriority.key', 1);\\ncmTag.set(\\\"additionalCss\\\", {\\n  \\\"z-index\\\": \\\"999 !important\\\"\\n});\\ncmTag.set(\\\"player.settings.max_ready_vpaid\\\", 6);\\ncmTag.set('maxNonRvVimpsInQueue', 4);\\ncmTag.set('isTestParentSelector', true);\\ncmTag.set('predictors.postRepeat.isActive', true);\\ncmTag.set(\\\"customization\\\", {\\n  \\\"unitContainer\\\": {\\n    \\\"transition\\\": \\\"none\\\"\\n  }\\n});\\ncmTag.set('player.settings.shwadmtebtn', false);\\ncmTag.set('components.volume.isActive', true);\\ncmTag.set('components.volume.isAlwaysBottom', true);\\ncmTag.set('secondsToCloseFeed', 3);\\ncmTag.set(\\\"cardsMinDistance\\\", 10);\\ncmTag.set(\\\"player.settings.mltads\\\", true);\\ncmTag.set(\\\"isMultiAd\\\", true);\\ncmTag.set(\\\"width\\\", 700);\\ncmTag.set(\\\"detachToSlider.isCheckForTopCard\\\", false);\\ncmTag.set('detachToSlider.components.disclosureText.text', 'Ad');\\ncmTag.set('player.settings.disctxt', '');\\ncmTag.set('components.disclosureText.isActive', false);\\ncmTag.set('components.adChoice.isActive', true);\\ncmTag.set(\\\"components.adChoice.title.isActive\\\", true);\\ncmTag.set('components.adChoice.position', 'below');\\ncmTag.set('components.adChoice.title.text', 'Sponsored');\\ncmTag.set('components.OptOut.hasOptOut', false);\\ncmTag.set('detachToSlider.components.disclosureText.isActive', false);\\ncmTag.set('isCallIDLE', true);\\ncmTag.set(\\\"player.settings.volume\\\", 0);\\ncmTag.set('isReplayAd', true);\\ncmTag.set('replayAdClick', 'all');\\ncmTag.set('isGetCardOnEligibility', true);\\ncmTag.set('isOpenInViewPort', true);\\ncmTag.set(\\\"viewPercent\\\", \\\"50\\\");\\ncmTag.set('isUseObserver', true);\\ncmTag.set('secondsToClose', 1000);\\ncmTag.set('predictors.fullEligibility.isActive', true);\\ncmTag.set('predictors.fullEligibility.maxPPS', 1);\\ncmTag.set('predictors.distancePixels.maxPPS', 100);\\ncmTag.set('isUseFloatingView', true);\\ncmTag.set('components.contentVideo.isActive', false);\\ncmTag.set('displayFiller.betweenAds', 'content');\\ncmTag.set('detachToSlider.forceDetach.isActive', true);\\ncmTag.set('detachToSlider.forceDetach.restrictions.rv', true);\\ncmTag.set('components.nativeAd.isActive', true);\\ncmTag.set('isForceSwapToRV', true);\\ncmTag.set('isRvPriority', false);\\ncmTag.set('predictors.mp4.isActive', true);\\ncmTag.set('predictors.mp4.predictPoint', 1);\\ncmTag.set('floatingNAS.isActive', true);\\ncmTag.set('disableExploreMoreVideo', false);\\ncmTag.set('exploreMoreConfig.clearAdsQ', true);\\ncmTag.set('exploreMoreConfig.maxNonRvVimpsInQueue', 5);\\ncmTag.set('secondsToCloseSingleAdFeed', 5);\\ncmTag.set('isGetRv1OnlyForEligible.delayPrediction', true);\\ncmTag.set('isSliderCutOff', true);\\ncmTag.set('SCMitigationFlow', 'true');\\ncmTag.set('cardNumForRV0', '5');\\n\\nvar isApp = isApp || false;\\nif (!isApp) {\\n  cmTag.set('player.settings.mintimwf', 2500);\\n  cmTag.set('player.settings.mntmbtwfsf', function(successes, failures, store) {\\n    return Math.max(2000 * (store.get('failsCount')) - 1500 - 10000 * (store.get('conversionsCount')), store.get('mintimwf'));\\n  });\\n} else {\\n  cmTag.set(\\\"isInAppBridgeOn\\\", true);\\n  cmTag.set(\\\"isUseObserver\\\", false);\\n}\\n\\nif (window.TRC) {\\n  if (!window.TRC.isAMP) {\\n    cmTag.set('continueToPlayInNexCard.isActive', true);\\n    cmTag.set('continueToPlayInNexCard.1', 'viewability');\\n  } else {\\n    cmTag.set('predictors.playerReady.isActive', true);\\n    cmTag.set('player.settings.dlywf', false);\\n    cmTag.set('predictors.playerReady.predictPoint', [0, 0]);\\n    cmTag.set('predictors.firstScroll.isActive', false);\\n  }\\n}\\n\\ncmTag.setByCondition({\\n  conditions: [{\\n    key: 'detachToSlider.isDetachToSlider',\\n    val: true\\n  }],\\n  settings: {\\n    'continueToPlayInNexCard.isActive': false,\\n    'detachToSlider.isDetachAbove': true\\n  }\\n});\\n\\n// If we don't have slider, set the feed container to be the video container. Resolves some scroll & z-index issues.\\ncmTag.setByCondition({\\n  conditions: [{\\n      key: 'detachToSlider.isStartFromSlider',\\n      val: false\\n    },\\n    {\\n      key: 'detachToSlider.isDetachToSlider',\\n      val: false\\n    }\\n  ],\\n  settings: {\\n    'videoContainerSelector': '.tbl-feed-container',\\n    'stickyCard.restrictions.rv': true,\\n    'stickyCard.isActive': true,\\n    'ontent=liteversion')>-1){
      cubeenableFlag=0; // For litversion page cube enable disable
  }
}


var icrflag = 1; // Ad will display if 1 or type 0 for not display
var domainArr4=['oneindia'];
if (domainArr4.indexOf(domainmiddle) > '-1') {
var backupAdFlag=0;
}
/*var domainArrRecoVideo=['filmibeat'];
if (domainArrRecoVideo.indexOf(domainmiddle) > '-1') {
loadRecomVideoFlag=null; // For VideoAI 0 for enable and 1 for disable
}*/
if(host1=='bengali.oneindia.com'){
    var jioAdsenabled = 0; // Jio Ads 
    var backupAdFlag=0;
}else{
    var jioAdsenabled = 0; // Jio Ads 
}
console.log("Back Up Ad Flag :"+backupAdFlag);
/* For MoMagic enable Disable*/
/*var MoMagicArrObj = ['filmibeat','oneindia','goodreturns','boldsky'];
if (MoMagicArrObj.indexOf(domainmiddle) > '-1') {
    if(host1=='kannada.oneindia.com'){
        momagicFlag=0
    }else{
        momagicFlag=1;
        if(host1=='www.filmibeat.com'){
            globalAdObj.sticky=0;
        }
        globalAdObj.interstitial=0;
    }
}*/
/* For MoMagic enable Disable*/
if((document.querySelector('head'))&&(document.querySelector('head').hasAttribute('data-growth-article'))){
    let growth_article_flag=document.querySelector('head').getAttribute('data-growth-article');
    if(growth_article_flag=='true'){
        backfillorder=0;
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            globalAdObj={gpt:1,gam1:1,gam2:2,gam3:0,gam4:0,gam5:0,outstream:0,cube:0,refinery:0,taboola:0,sticky:0,vuukle:0,performance:0,anymind:0,leaderboard:0,rightrail:0,mr1:0,mr2:0,rightsticky:0,interstitial:1};
        }else{
            globalAdObj={gpt:1,gam1:0,gam2:0,gam3:0,gam4:0,gam5:0,outstream:0,cube:0,refinery:0,taboola:0,sticky:0,vuukle:0,performance:0,anymind:0,leaderboard:1,rightrail:0,mr1:1,mr2:0,rightsticky:0,interstitial:1};
        }
        viroolFlag=0;
        loadRecomVideoFlag=null;
        refiner_live=0;
        globalAdObj.outstream=0;
        rssPromoNotificationTaboola=0;
        rssPromoNotification=0;
        mykhelSticky=0;
    }

}
var locurl = window.location.href;
if (locurl.includes('/buying-advice/')) {
    backfillorder=0;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        globalAdObj={gpt:1,gam1:1,gam2:2,gam3:0,gam4:0,gam5:0,outstream:0,cube:0,refinery:0,taboola:0,sticky:0,vuukle:0,performance:0,anymind:0,leaderboard:0,rightrail:0,mr1:0,mr2:0,rightsticky:0,interstitial:1};
    }else{
        globalAdObj={gpt:1,gam1:0,gam2:0,gam3:0,gam4:0,gam5:0,outstream:0,cube:0,refinery:0,taboola:0,sticky:0,vuukle:0,performance:0,anymind:0,leaderboard:1,rightrail:0,mr1:1,mr2:0,rightsticky:0,interstitial:1};
    }
    viroolFlag=0;
    loadRecomVideoFlag=null;
    refiner_live=0;
    globalAdObj.outstream=0;
    rssPromoNotificationTaboola=0;
    rssPromoNotification=0;
    mykhelSticky=0;
    console.log("URL contains '/buying-advice/'");
} else {
    console.log("URL does not contain '/buying-advice/'");
}
if((document.querySelector('head'))&&(document.querySelector('head').hasAttribute('data-globalAdConfig'))){
    var fetchedGlobalAdStr=document.querySelector('head').getAttribute('data-globalAdConfig');
    var tmpglobalAdObj=globalAdObj;
    if(fetchedGlobalAdStr!=''&&fetchedGlobalAdStr!=null&&fetchedGlobalAdStr!=undefined){
        const decodedString = decodeURIComponent(fetchedGlobalAdStr);
        var fetchedGlobalAdObj=JSON.parse(decodedString);
        const keysToKeep = ['gam4','gam5','taboola','outstream','cube','refinery','vuukle','performance'];
        const mergedObject = {...fetchedGlobalAdObj};
        for (const key of keysToKeep) {
          if (tmpglobalAdObj.hasOwnProperty(key)) {
            mergedObject[key] = tmpglobalAdObj[key];
          }
        }
        globalAdObj = mergedObject;
    }   
}
if((document.querySelector('head'))&&(document.querySelector('head').hasAttribute('data-promo-article'))){
    let promotion_article_flag=document.querySelector('head').getAttribute('data-promo-article');
    if(promotion_article_flag=='true'){
        loadRecomVideoFlag=null;
    }
}
if((document.querySelector('head'))&&(document.querySelector('head').hasAttribute('data-gpt-flag'))){
        let gpt_flag=document.querySelector('head').getAttribute('data-gpt-flag');
        if(gpt_flag=='false'){
            globalAdObj={gpt:0,gam1:0,gam2:0,gam3:0,gam4:0,gam5:0,anymind:0,taboola:1,outstream:0,cube:0,refinery:1,sticky:0,vuukle:0,performance:0,leaderboard:0,rightrail:0,mr1:0,mr2:0,rightsticky:0,interstitial:1};
            loadRecomVideoFlag=null;
        }
    }
//If refinary disabled from CMS plugins & default value is 1
if(cmsrefinerval==0){
    refiner_live=0;
}
// Output the merged object
console.log(globalAdObj);
console.log("BackFillOrder : "+backfillorder);
console.log("Slot4:"+adslot4+",Slot 5:"+adslot5+",Performance:"+adslotperformance+ ",Vuukle:"+adslotvuukle);
function fetchConsSts() {
    window.googlefc = window.googlefc || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    return new Promise(resolve => {
        googlefc.callbackQueue.push({
            'CONSENT_DATA_READY': function() {
                if(typeof googlefc.getAllowAdsStatus != 'undefined'){
                        resolve(googlefc.getAllowAdsStatus());
                }else{
                        resolve(1);
                }
            }
        });
    });
}
function globalSetTargetting(event){
    if(window.googletag && googletag.apiReady) {
        try{
            //googletag.cmd.push(function() {
                var slotId = event.slot.getSlotElementId();
                if(document.getElementById(slotId)){
                var isLoaded = document.getElementById(slotId).getAttribute('data-isloaded');
                  if(isLoaded==1){
                    event.slot.clearTargeting('first_hand');
                    event.slot.setTargeting('first_hand', 'off');
                  //  console.log(slotId+" First Hand "+event.slot.getTargeting('first_hand'));
                  }else{
                    event.slot.setTargeting('first_hand', 'on');
                    //console.log(slotId+" First Hand "+event.slot.getTargeting('first_hand'));
                  }
                  document.getElementById(slotId).setAttribute('data-isloaded',1);
              }
            //});
        }catch(err){
          console.log("Set Targetting Ad : "+err);
        }
    }
}

function backuprefinery(divId){
	return false;
    window.top.r89 = window.top.r89 || {};
    window.top.r89.callAds = window.top.r89.callAds || [];
    console.log(window.top.r89);
    window.top.r89.callAds.push(function() {
        window.top.r89.pushAd(divId,'mobile-sticky-footer', [[1,1],[2,2],[300,100],[300,50],[320,100],[320,180],[320,50]]);
    });
}

function backuprefineryATF(divId){
	 return false;
    window.top.r89 = window.top.r89 || {};
    window.top.r89.callAds = window.top.r89.callAds || [];
    window.top.r89.callAds.push(function() {
        window.top.r89.pushAd(divId, 'desktop-rectangle-atf', [[300,250]]);
    });
}

function backuprefineryMid(divId){
	 return false;
    window.top.r89 = window.top.r89 || {};
    window.top.r89.callAds = window.top.r89.callAds || [];
    window.top.r89.callAds.push(function() {
        window.top.r89.pushAd(divId, 'mobile-rectangle-mid', [[300,250]]);
    });
} 

function getQueryParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

if(jioAdsenabled==1){
if(host1.indexOf('filmibeat')>'-1' || host1.indexOf('oneindia')>'-1'){
	['https://mercury.akamaized.net/jioads/websdk/default/stable/jioAds.js'].forEach(function(src){
        var script=document.createElement('script');
        script.src=src;
        script.async='true';
        document.head.appendChild(script);
    });
}
}
var oicamppromo = 0;// For campgain Article Ad inarticle 1 and 2 promtion
if(utmParamVal != '' && utmParamVal.includes('utm_medium=camp123') || utmParamVal.includes('utm_medium=prodigital_1') || utmParamVal.includes('utm_medium=apex') || utmParamVal.includes('utm_medium=va') || utmParamVal.includes('utm_medium=proformics') || utmParamVal.includes('utm_medium=ad2click') || utmParamVal.includes('utm_medium=vmedia')){
icrflagad = true; 
var jioAdsenabled = 0; 
if(jioAdsenabled){
	['https://mercury.akamaized.net/jioads/websdk/default/stable/jioAds.js'].forEach(function(src){
        var script=document.createElement('script');
        script.src=src;
        script.async='true';
        document.head.appendChild(script);
    });
}
var domainArr1=[''];
console.log('ICR Domain Without Ad' + domainArr1)
if (domainArr1.indexOf(domainmiddle) > '-1') {
    var icrflag = 0; // Ad will display if 1 or type 0 for not display
}
}
// For campgain 2 Ads promotion in Filmibeat Goodreturns and Drivespark channels
var domainArrCamp=['filmibeat','drivespark','goodreturns','oneindia','boldsky','mykhel','careerindia','nativeplanet','gizbot'];
if(utmParamVal != '' && utmParamVal.includes('utm_medium=camp123') || utmParamVal.includes('utm_medium=prodigital_1') || utmParamVal.includes('utm_medium=apex') || utmParamVal.includes('utm_medium=va') || utmParamVal.includes('utm_medium=proformics') || utmParamVal.includes('utm_medium=ZMed') || utmParamVal.includes('utm_medium=vmedia') || utmParamVal.includes('utm_medium=camprrr')){
if (/Mobi|Android/i.test(navigator.userAgent)) {
if (domainArrCamp.indexOf(domainmiddle) > '-1') {
	
var jioAdsenabled = 0; 	
backupAdFlag=0;
icrflagad = false;

if(utmParamVal.includes('gam=0'))
{
console.log('No GAM AD');
var no_gam= 0;// GAM ad's will not load
icrflagad = true;
no_ad_flag = true;
var icrflag = 0; 	 // Ad will display if 1 or type 0 for not display
oicamppromo = 0;// For campgain Article Ad inarticle 1 and 2 promtion	
}
else{
var no_gam= 1;// GAM ad's will display
console.log('GAM Inarticle 1 and 2');
var icrflag = 1; 	 // Ad will display if 1 or type 0 for not display
oicamppromo = 1;// For campgain Article Ad inarticle 1 and 2 promtion	
}

}
}
}
// For campgain 2 Ads promotion in Oneindia Hindi channel
if(host1=='hindi.oneindia.com'){
if(utmParamVal != '' && utmParamVal.includes('utm_medium=camp123')){
if (/Mobi|Android/i.test(navigator.userAgent)) {
var jioAdsenabled = 0; 	
//icrflagad = false;
var icrflag = 1; 	 // Ad will display if 1 or type 0 for not display
oicamppromo = 1;// For campgain Article Ad inarticle 1 and 2 promtion
}
}
}
// For campgain 2 Ads promotion in Oneindia Tamil channel
if(host1=='tamil.oneindia.com'){
if(utmParamVal != '' && utmParamVal.includes('utm_medium=zmed')){
if (/Mobi|Android/i.test(navigator.userAgent)) {
var jioAdsenabled = 0; 	
icrflagad = false;
var icrflag = 1; 	 // Ad will display if 1 or type 0 for not display
oicamppromo = 1;// For campgain Article Ad inarticle 1 and 2 promtion
}
}
}
console.log(icrflag + ' : ICR Flag');

var refreshStatus = sessionStorage.getItem("refresh_status");
                if (refreshStatus == "" || refreshStatus == "undefined" || refreshStatus == null) {
                    refreshStatus = 0;
                    sessionStorage.setItem("refresh_status",refreshStatus);
                    var adTimAnymind=30;
                }else{
                    refreshStatus = parseInt(refreshStatus) + 1;
                    sessionStorage.setItem("refresh_status",refreshStatus);
                    var adTimAnymind=30;
                }
                console.log("Refresh Status :"+refreshStatus);


var domainArr2=['drivespark'];
if (domainArr2.indexOf(domainmiddle) > '-1') {
   adTimAnymind=15; // Anymind Ad will refresh after 30 seconds.
}
if(host1=='kannada.oneindia.com'){
var videoFlag=1;//1 for Dm,2 for YT,3 for PV
}
console.log(adTimeInterval + "Ad Time Interval");
if(window.location.search.indexOf('?content=liteversion')>-1){
oicamppromo=1;	
 console.log('Liter Version Page, only first and second ad will load...');
}
//For Refinery Ad Flag Code End

//For UTM content of lite version pages
var utmcontentFlag=0;
        if(window.location.search.indexOf('utm_content=1')>-1){
            utmcontentFlag=1;
        }else if(window.location.search.indexOf('utm_content=2')>-1){
            utmcontentFlag=2;
         
        }else if(window.location.search.indexOf('utm_content=3')>-1){
            utmcontentFlag=3;
            no_ad_flag=true;
            taboolalliteflag = 0;  // For disabling taboola on scrool.
         
        }else if(window.location.search.indexOf('utm_content=4')>-1){
            utmcontentFlag=4;
            no_ad_flag=true;
        }
        
//For UTM content of lite version pages
  
//For setTargetting values start

var targetlangParam = sitelang;
var targethostParam = sitehost;
var targetprefix = targethostParam+targetlangParam+'-';
var target_page_type_camp=targetprefix+'article';
var trackpagetype='article';
if((document.querySelector('head'))&&(document.querySelector('head').hasAttribute('data-content_type'))){ 
    target_page_type_camp=document.querySelector('head').getAttribute('data-content_type');
    if(target_page_type_camp!=''&&target_page_type_camp!=null&&target_page_type_camp!=undefined){
    target_page_type_camp=target_page_type_camp.toLowerCase();
    switch(target_page_type_camp) {
        case 'photos':
            target_page_type_camp=targetprefix+target_page_type_camp;
            trackpagetype='photos';
            break;
        case 'videos':
            target_page_type_camp=targetprefix+target_page_type_camp;
            trackpagetype='videos';
            break;
        case 'database':
            target_page_type_camp=targetprefix+target_page_type_camp;
            trackpagetype='database';
            break;
        case 'article':
            target_page_type_camp=targetprefix+target_page_type_camp;
            trackpagetype='article';
            break;
        case 'photo feature article':
            target_page_type_camp=targetprefix+'pf-article';
            trackpagetype='article';
            break;
        case 'live blog article':
            target_page_type_camp=targetprefix+'article';
            trackpagetype='article';
            break;
        case 'homepage':
            target_page_type_camp=targetprefix+'index';
            trackpagetype='home';
            break;
        default:
            target_page_type_camp=targetprefix+'index';
            trackpagetype='index';
            break;
        }
    }
}
var sectionValForGam='';
var userTrackerData = getUserCookie('dp_user_tracker_data');
var sectionVal='';
console.log("OICMS - User Tracker Data : "+userTrackerData);
if(userTrackerData!="" && userTrackerData!=undefined && userTrackerData!=null){
    var sectionJData=JSON.parse(userTrackerData);
    sectionVal = sectionJData.section;
    console.log("OICMS - User Tracker Section Data : "+sectionVal);
    if(sectionVal!="" && sectionVal!=undefined && sectionVal!=null){
        sectionValForGam = sectionVal.split(',');
    }
}
var utmcamp='';
var utmsrc='';
var utmmdm='';
var utmCamp='';
var utmSrc='';
var utmMdm='';
var utmFlag = 1;
var targetHost = ['oneindia','filmibeat','boldsky','goodreturns','careerindia','drivespark','mykhel','nativeplanet','gizbot'];
if(targetHost.includes(domainmiddle)){
        var qParams=window.location.search;
        if (qParams != '') {
            var utmArr=[];
                if(qParams.includes("utm_campaign=") && qParams.includes("utm_source=") && qParams.includes("utm_medium=")){
                  utmArr = qParams.split('&');
                    if(typeof getQueryParameterByName === 'function'){
                            utmsrc = getQueryParameterByName('utm_source');
                            utmcamp = getQueryParameterByName('utm_campaign');
                            utmmdm = getQueryParameterByName('utm_medium');
                            utmSrc = getQueryParameterByName('utm_source');
                            utmCamp = getQueryParameterByName('utm_campaign');
                            utmMdm = getQueryParameterByName('utm_medium');
                    }
              }
           /*if (qParams.indexOf('utm_source=desipearl')>-1 && qParams.indexOf('utm_campaign=desipearl')>-1 && qParams.indexOf('utm_medium=CAMPIKR')>-1) {
                console.log("UTM Medium : CAMPIKR");
                utmcamp = 'desipearl';
                utmsrc = 'desipearl';
                utmmdm = 'CAMPIKR';
            }
        else if (qParams.indexOf('utm_source=desipearl')>-1 && qParams.indexOf('utm_campaign=desipearl')>-1 && qParams.indexOf('utm_medium=CAMPRRR')>-1 && qParams.indexOf('utm_content=1')>-1){
                console.log("UTM Medium : CAMPRRR");
                utmcamp = 'desipearl';
                utmsrc = 'desipearl';
                utmmdm = 'CAMPRRR';
            }
        else if (qParams.indexOf('utm_source=desipearl')>-1 && qParams.indexOf('utm_campaign=desipearl')>-1 && qParams.indexOf('utm_medium=ICR')>-1 && qParams.indexOf('utm_content=1')>-1){
                console.log("UTM Medium : ICR");
                utmcamp = 'desipearl';
                utmsrc = 'desipearl';
                utmmdm = 'ICR';
            }
        else if (qParams.indexOf('utm_source=desipearl')>-1 && qParams.indexOf('utm_campaign=desipearl')>-1 && qParams.indexOf('utm_medium=CAMP123')>-1 && qParams.indexOf('utm_content=1')>-1){
                console.log("UTM Medium : CAMP123");
                utmcamp = 'desipearl';
                utmsrc = 'desipearl';
                utmmdm = 'CAMP123';
            }else if (qParams.indexOf('utm_source=desipearl')>-1 && qParams.indexOf('utm_campaign=desipearl')>-1 && qParams.indexOf('utm_medium=CAMPPRO')>-1 && qParams.indexOf('utm_content=1')>-1){
                console.log("UTM Medium : CAMPPRO");
                utmcamp = 'desipearl';
                utmsrc = 'desipearl';
                utmmdm = 'CAMPPRO';
            }else if (qParams.indexOf('utm_source=desipearl')>-1 && qParams.indexOf('utm_campaign=desipearl')>-1 && qParams.indexOf('utm_medium=CAMPADS')>-1 && qParams.indexOf('utm_content=1')>-1){
                console.log("UTM Medium : CAMPADS");
                utmcamp = 'desipearl';
                utmsrc = 'desipearl';
                utmmdm = 'CAMPADS';
            }*/
  
  
        }
        if(documentRef.indexOf('facebook') > -1){
             utmCamp = 'desipearl';
            utmSrc = 'boost';
            utmMdm = 'FacebookAds';
            utmcamp = 'desipearl';
            utmsrc = 'boost';
            utmmdm = 'FacebookAds';    
        }
        console.log(utmsrc+":Source,"+utmcamp+":campgain,"+utmmdm+":Medium");
    }

//For setTargetting values end
function taboola_common(){
    var tabJsfile = 'oneindiaenglish';
    if(liveProtocol=='www'){
        tabJsfile = 'oneindiaenglish';
    }else{
        tabJsfile = domainmiddle+liveProtocol;
    }
    window._taboola = window._taboola || [];
      _taboola.push({article:'auto'});
      !function (e, f, u, i) {
        if (!document.getElementById(i)){
          e.async = 1;
          e.src = u;
          e.id = i;
          f.parentNode.insertBefore(e, f);
        }
      }(document.createElement('script'),
      document.getElementsByTagName('script')[0],
    '//cdn.taboola.com/libtrc/oneindiadigital-'+tabJsfile+'/loader.js',
      'tb_loader_script');
      if(window.performance && typeof window.performance.mark == 'function')
        {window.performance.mark('tbl_ic');}
    }
if(liteflag==1 || globalAdObj.gpt==0){
    taboola_common();
}
if(trackpagetype=='database'){
    globalAdObj.gam4=0;
    globalAdObj.gam5=0;
    gutterFlag=1;
}

console.log(globalAdObj);
//Line Item New Code - Starts
var lineItemArr = [];
var sub_array = [];
var sub_array_refresh = [];
  var curHost = window.location.hostname;
  var today = new Date();
    var urlBurstP = today.getMinutes();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'max-age=0, no-cache, no-store, no-transform');
var options = {
    headers: headers
};
var refreshhost = window.location.hostname;
if(refreshhost!='' && refreshhost!=undefined){
  var domainPartsrefresh = refreshhost.split('.');
  var domainmiddlerefresh = domainPartsrefresh[1];
}
var lineItemRefreshVal = '';
var interstitialflag=0;//New Changes Softtonic
var dmflag=0;//New Changes For Video Flag
var apiUrl = 'https://rss.oneindia.com/cms/oi-line-item-temp.json?v='+urlBurstP;
    fetch(apiUrl)
    .then(response => {
      return response.json()
    })
    .then(data => {
        if(data != undefined && data !='' && data != null){
   //New Changes Softtonic
    if(data['interstritial'].hasOwnProperty('all')){
                    interstitialflag=data['interstritial']['all'];
              }else{
interstitialflag=data['interstritial'][refreshhost];
              }
    console.log("Softonic Interstritial Flag:"+interstitialflag);
                //New Changes Softtonic
                //New Changes For Video Flag
              if(data['daily_motion'].hasOwnProperty('all')){
                    dmflag=data['daily_motion']['all'];
              }else{
                    dmflag=data['daily_motion'][refreshhost];
              }
                console.log("Dm Video Flag:"+dmflag);
                //New Changes For Video Flag
              var jsondata =Object.values(data['line_items']);
              console.log(jsondata);
              var jsonLen = jsondata.length;
              for(j=0;j<jsonLen;j++){
                var webArr = jsondata[j]['websites'];
                if(webArr.includes(curHost) || webArr=='all'){
                  if(webArr=='all'){
                    lineItemRefreshVal = jsondata[j]['refresh']['all'];
                  }else{
                    lineItemRefreshVal = jsondata[j]['refresh'][domainmiddlerefresh];
                  }
sub_array.push({'lineitem':jsondata[j]['line_item'],'refreshval':lineItemRefreshVal});
                }
              }
              lineItemArr.push(sub_array);
             console.log(lineItemArr);
        }
    })
    .catch(err => {
      // Do something for an error here
    })
    //Line Item New Code - Ends 

/* Ad Blocker Code Starts */
function setUserCookie(name, value, expires, path, domain, secure) {
  var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60;
    }

    var expires_date = new Date(today.getTime() + (expires));

    document.cookie = name + '=' + escape(value) +
        ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
    ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
} 

function deleteUserCookie(name, path, domain) {
    if (getCookie(name)) document.cookie = name + '=' +
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}
function checkUserCookie(cookie_name) {
    var location_details = getUserCookie(cookie_name);
    if (location_details == null || location_details == "") {
        return false;
    } else if (location_details != "") {
        return true;
    }
}
function getUserCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        var dv = 'Mobile';
    }else{
        var dv = 'Desktop';
    }
    var adblockerflag = false;
    var host = window.location.hostname;
function trackingAdBlocker(blockerFlag){
    adblockerflag = blockerFlag;
    console.log('AdBlock Enabled Global: '+adblockerflag);
    var adblock_flag = getUserCookie('adblock_flag');
    if(adblock_flag=="" || adblock_flag=="undefined" || adblock_flag==null){
        adblock_flag = 0;
    }
    if(blockerFlag){
        
        /*if(host.indexOf('filmibeat')>'-1'){
            var scriptadblock=document.createElement('script');
            scriptadblock.src='https://servg1.net/o.js?uid=a32bdd40e639cb09a67162de';
            scriptadblock.async='true';
            document.head.appendChild(scriptadblock);
        }*/
        
      if(adblock_flag==0){
        if(document.getElementById("trackerimage")){
           document.getElementById("trackerimage").remove();
        }
        var img = document.createElement("img");
        img.src = 'https://'+host+'/images/tracker.jpg?tracker=oi-tracker-cms&adblockerenabled=true&device='+dv;
        img.setAttribute('id', 'trackerimage');
        document.head.appendChild(img);
        setUserCookie('adblock_flag',1,131400,'/','','');
      }
    }else{
      if(adblock_flag==1){
        if(document.getElementById("trackerimage")){
           document.getElementById("trackerimage").remove();
        }
        var img = document.createElement("img");
        img.src = 'https://'+host+'/images/tracker.jpg?tracker=oi-tracker-cms&adblockerenabled=false&device='+dv;
        img.setAttribute('id', 'trackerimage');
        document.head.appendChild(img);
        document.cookie = 'adblock_flag=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
    }
}
async function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = 'https://rss.oneindia.com/cms/oi-render-native-ad.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true;
  } finally {
    console.log(`AdBlock Enabled: ${adBlockEnabled}`)
    trackingAdBlocker(adBlockEnabled);
  }
}
detectAdBlock();
/*Ad Blocker Code Ends */
var triggerVdoAiFlag = 0;
function pingtoserverforVDOAItracker() {
        if(document.getElementById("trackerVdoAiimage")){
           document.getElementById("trackerVdoAiimage").remove(); 
        }
        if(triggerVdoAiFlag == 0){
            triggerVdoAiFlag=1;
            var currentHost = window.location.hostname;
            var rand_id = Math.floor(Date.now() + Math.random());
            if (/Mobi|Android/i.test(navigator.userAgent)) {
              var triggerDevice = 'mobile';//mobile/desktop
            }else{
              var triggerDevice = 'desktop';//mobile/desktop
            }
            var pagetype = trackpagetype;//Change accordingly home/index/article/photos/database
            var img = document.createElement("img");
            if(domainmiddle=='filmibeat'){
                img.src = 'https://'+currentHost+'/images/tracker.jpg?tracker=oi-tracker-cms&device='+triggerDevice+'&type=aniview&page='+pagetype+'&eventcategory=aniview&eventaction=performance&eventlebel=request-created&uid='+rand_id;
            }else{
                img.src = 'https://'+currentHost+'/images/tracker.jpg?tracker=oi-tracker-cms&device='+triggerDevice+'&type=vdoai&page='+pagetype+'&eventcategory=vdoai&eventaction=performance&eventlebel=request-created&uid='+rand_id;
            }
            img.setAttribute('id', 'trackerVdoAiimage');
            img.setAttribute('alt','VDO AI Tracker');
            img.setAttribute('width',1);
            img.setAttribute('height',1);
            img.style.display='none';
            document.body.appendChild(img);
        }
    }
var slno=0;
var defineBackup=0;
var backupslot=[];
var _oiAllAdUnitsMobi = [{"slotName":"/22637491760/oneindia_Mob__300x250","sizes":[[336, 280], [300, 250]],"slotID":"div-gpt-ad-1693991938157-0"},{"slotName":"/22637491760/oneindia__Mob_300x250_1","sizes":[[336, 280], [300, 250]],"slotID":"div-gpt-ad-1694421448141-0"},{"slotName":"/22637491760/oneindia__Mob_300x250_2","sizes":[[336, 280], [300, 250]],"slotID":"div-gpt-ad-1694421624471-0"},{"slotName":"/22637491760/oneindia__Mob_300x250_3","sizes":[[336, 280], [300, 250]],"slotID":"div-gpt-ad-1694421751005-0"}];
var _oiAllAdUnitsWeb = [{"slotName":"/22637491760/oneindia_DSK_300x250","sizes":[[300, 250],[336, 280]],"slotID":"div-gpt-ad-1693991634264-0"},{"slotName":"/22637491760/oneindia_DSK_300x250_1","sizes":[[336, 280], [300, 250]],"slotID":"div-gpt-ad-1694420712565-0"},{"slotName":"/22637491760/oneindia_DSK_300x250_2","sizes":[[336, 280], [300, 250]],"slotID":"div-gpt-ad-1694420792842-0"},{"slotName":"/22637491760/oneindia_DSK_300x250_3","sizes":[[336, 280], [300, 250]],"slotID":"div-gpt-ad-1694420876751-0"}];
var _oiAllAdUnitsTop = [{"slotName":"/22637491760/oneindia_DSK_728x90","sizes":[[728, 90],[468, 60],[970, 90]],"slotID":"div-gpt-ad-1693991070316-0"}];
var _oiAllAdUnitsBottom = [{"slotName":"/22637491760/oneindia_Mob_320x50","sizes":[[320, 50]],"slotID":"div-gpt-ad-1693991813229-0"}];
var slot_name='';
var slot_size='';
var slot_id='';
var slotArr=[];
function refreshBackupSlot(idx,divId,slot_id){
    return false;
    if(apsFlag!=2){
    document.getElementById(divId).innerHTML = '';
    document.getElementById(divId).style.display = 'block';
    if (document.getElementById(slot_id)) {
        //document.getElementById(slot_id).remove();
    }else{
        var tabDynamicDiv = document.createElement('div');
        tabDynamicDiv.id = slot_id;
        document.getElementById(divId).appendChild(tabDynamicDiv);
    }
    googletag.cmd.push(function() {
        console.log("Slot Refreshed..." + slot_id);
        googletag.pubads().refresh([backupslot[idx]]);
    });
    }
}
function defineBackupSlot(slot_name,slot_size,slot_id,divId,idx){
    return false;
    //console.log(slot_name+"Slot Name &"+slot_size+" &Slot Size"+slot_id);
    if(apsFlag!=2){
    if (document.getElementById(divId)) {
        if(slot_name!='' && slot_size!='' && slot_id!=''){
            var backuploaded = document.getElementById(divId).getAttribute('data-backuploaded');
            console.log(backuploaded + " : Backup Load");
            if (backuploaded == undefined || backuploaded == null) {
                document.getElementById(divId).innerHTML = '';
                document.getElementById(divId).style.display = 'block';
                
                if (document.getElementById(slot_id)) {
                    document.getElementById(slot_id).remove();
                }
                var tabDynamicDiv = document.createElement('div');
                tabDynamicDiv.id = slot_id;
                if (document.getElementById(divId)) {
                document.getElementById(divId).appendChild(tabDynamicDiv);
                googletag.cmd.push(function() {
                    backupslot[idx] = googletag.defineSlot(slot_name,slot_size, slot_id).addService(googletag.pubads());
                    googletag.pubads().setTargeting("host", location.hostname);
                    googletag.pubads().setTargeting("curl", window.location.href);
                    googletag.pubads().enableSingleRequest();
                    googletag.pubads().enableAsyncRendering();
                    googletag.pubads().setTargeting('domain', window.location.hostname);
                    googletag.pubads().setTargeting('lang', langParam);
                    googletag.enableServices();
                    googletag.display(slot_id);
                    googletag.pubads().refresh([backupslot[idx]]);
                    document.getElementById(divId).setAttribute('data-backuploaded', 1);
                    document.getElementById(divId).setAttribute('data-backupeid',idx);
                });
            }
            }
        }
    }
    }
}
function backupAdsGlobalTop(divId, zoneId, reviveId){
    return false;
    //console.log(divId + " : Back up Top ad Called " + slno);
    if (document.getElementById(divId)) {
    //if(slotIdentity==undefined||slotIdentity=='MR'){
            var backuploaded = document.getElementById(divId).getAttribute('data-backuploaded');
            var backupeid = document.getElementById(divId).getAttribute('data-backupeid');
            var idx = 0;
                var topArrLen = _oiAllAdUnitsTop.length;
                if (backuploaded == undefined || backuploaded == null) {
                    if(document.getElementById(divId).hasAttribute('data-elementid')){
                        if(idx<topArrLen){
                            slot_name = _oiAllAdUnitsTop[idx].slotName;
                            slot_size = _oiAllAdUnitsTop[idx].sizes;
                            slot_id = _oiAllAdUnitsTop[idx].slotID;
                            defineBackupSlot(slot_name,slot_size,slot_id,divId,idx);
                        }
                    }
                }else{
                    if(_oiAllAdUnitsTop[backupeid]){
                        var slid=_oiAllAdUnitsTop[backupeid].slotID;
                        refreshBackupSlot(backupeid,divId,slid);
                    }
                }
    }
}
function backupAdsGlobalBottom(divId, zoneId, reviveId){
    return false;
    console.log("Bottom Ad to Backfill");
    if (document.getElementById(divId)) {
        //console.log(divId + " : Back up Bottom ad Called " + slno);
    //if(slotIdentity==undefined||slotIdentity=='MR'){
            var backuploaded = document.getElementById(divId).getAttribute('data-backuploaded');
            var backupeid = document.getElementById(divId).getAttribute('data-backupeid');
            var idx = 0;
                var bottomArrLen = _oiAllAdUnitsBottom.length;
                if (backuploaded == undefined || backuploaded == null) {
                    if (document.getElementById(divId).classList.contains('bottomAdContainer')) {
                        if(idx<bottomArrLen){
                            slot_name = _oiAllAdUnitsBottom[idx].slotName;
                            slot_size = _oiAllAdUnitsBottom[idx].sizes;
                            slot_id = _oiAllAdUnitsBottom[idx].slotID;
                            defineBackupSlot(slot_name,slot_size,slot_id,divId,idx);
                        }
                    }
                }else{
                    if(_oiAllAdUnitsBottom[backupeid]){
                        var slid=_oiAllAdUnitsBottom[backupeid].slotID;
                        refreshBackupSlot(backupeid,divId,slid);
                    }
                }
    }
}
function backupAdsGlobalMiddle(divId, zoneId, reviveId){
    return false;
    if (document.getElementById(divId)) {
        //console.log(divId + " : Back up Middle ad Called " + slno);
    //if(slotIdentity==undefined||slotIdentity=='MR'){
            var backuploaded = document.getElementById(divId).getAttribute('data-backuploaded');
            var backupeid = document.getElementById(divId).getAttribute('data-backupeid');
            var idx = slno;
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                var mobiArrLen = _oiAllAdUnitsMobi.length;
                if (backuploaded == undefined || backuploaded == null) {
                    if(document.getElementById(divId).hasAttribute('data-elementid')){
                        if(idx<mobiArrLen){
                            slot_name = _oiAllAdUnitsMobi[idx].slotName;
                            slot_size = _oiAllAdUnitsMobi[idx].sizes;
                            slot_id = _oiAllAdUnitsMobi[idx].slotID;
                            defineBackupSlot(slot_name,slot_size,slot_id,divId,idx);
                        }
                    }
                }else{
                    if(_oiAllAdUnitsMobi[backupeid]){
                        var slid=_oiAllAdUnitsMobi[backupeid].slotID;
                        refreshBackupSlot(backupeid,divId,slid);
                    }
                }
            }else{
                var webArrLen = _oiAllAdUnitsWeb.length;
                if (backuploaded == undefined || backuploaded == null) {
                    if(document.getElementById(divId).hasAttribute('data-elementid')){
                        if(idx<webArrLen){
                            slot_name = _oiAllAdUnitsWeb[idx].slotName;
                            slot_size = _oiAllAdUnitsWeb[idx].sizes;
                            slot_id = _oiAllAdUnitsWeb[idx].slotID;
                            defineBackupSlot(slot_name,slot_size,slot_id,divId,idx);
                        }
                    }
                }else{
                    if(_oiAllAdUnitsWeb[backupeid]){
                        var slid=_oiAllAdUnitsWeb[backupeid].slotID;
                        refreshBackupSlot(backupeid,divId,slid);
                    }
                }
            }
            slno++;
    }
}
function backupAdsReviveTaboola(divId, zoneId, reviveId) {
    return false;
    if (document.getElementById(divId)) {
        console.log(divId + " : Back up ad Called " + slno);
    //if(slotIdentity==undefined||slotIdentity=='MR'){
            var backuploaded = document.getElementById(divId).getAttribute('data-backuploaded');
            var backupeid = document.getElementById(divId).getAttribute('data-backupeid');
            var idx = slno;
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                var mobiArrLen = _oiAllAdUnitsMobi.length;
                if (backuploaded == undefined || backuploaded == null) {
                    if(document.getElementById(divId).hasAttribute('data-elementid')){
                        if(idx<mobiArrLen){
                            slot_name = _oiAllAdUnitsMobi[idx].slotName;
                            slot_size = _oiAllAdUnitsMobi[idx].sizes;
                            slot_id = _oiAllAdUnitsMobi[idx].slotID;
                            defineBackupSlot(slot_name,slot_size,slot_id,divId,idx);
                        }
                    }
                }else{
                    if(_oiAllAdUnitsMobi[backupeid]){
                        var slid=_oiAllAdUnitsMobi[backupeid].slotID;
                        refreshBackupSlot(backupeid,divId,slid);
                    }
                }
            }else{
                var webArrLen = _oiAllAdUnitsWeb.length;
                if (backuploaded == undefined || backuploaded == null) {
                    if(document.getElementById(divId).hasAttribute('data-elementid')){
                        if(idx<webArrLen){
                            slot_name = _oiAllAdUnitsWeb[idx].slotName;
                            slot_size = _oiAllAdUnitsWeb[idx].sizes;
                            slot_id = _oiAllAdUnitsWeb[idx].slotID;
                            defineBackupSlot(slot_name,slot_size,slot_id,divId,idx);
                        }
                    }
                }else{
                    if(_oiAllAdUnitsWeb[backupeid]){
                        var slid=_oiAllAdUnitsWeb[backupeid].slotID;
                        refreshBackupSlot(backupeid,divId,slid);
                    }
                }
            }
            slno++;
    }
    
}

var dhConfigDetails = {
        userId:function(){
            var chars = "0123456789";
            var string_length = 26;
            var randomstring = '';
            for (var i=0; i<string_length; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomstring += chars.substring(rnum,rnum+1);
            }
            var ts = Math.round((new Date()).getTime() / 1000);
            return randomstring+'_'+ts;
        },
        getUserTrackerId:function(){
            var userTrackerId;
            var userTrackerIdCookie = getUserCookie('dp_user_tracker');
            if(userTrackerIdCookie=="" || userTrackerIdCookie=="undefined" || userTrackerIdCookie==null){
                userTrackerIdCookie="";
            }
            if(userTrackerIdCookie!=''){
                userTrackerId = userTrackerIdCookie;
            }else{
                userTrackerId=dhConfigDetails.userId();
                 var oi_tracker_cookie_lifespan = 87600;  // 3650 * 24
                var url = window.location.href;
                url_arr  = url.split('/');
                domain   = url_arr[2];
                lang_arr = domain.split('.');
                var cookie_domain = '.'+lang_arr[1]+'.'+lang_arr[2];
            }
            return userTrackerId;
        }
};
var target_page_type='article';
if((document.querySelector('head'))&&(document.querySelector('head').hasAttribute('data-content_type'))){
    target_page_type=document.querySelector('head').getAttribute('data-content_type');
    if(target_page_type=='videos'){
        target_page_type='videos';
    }else if(target_page_type=='photos'){
        target_page_type='photos';
    }else if(target_page_type=='database'){
        target_page_type='database';
    }else if(target_page_type=='Photo Feature Article'){
        target_page_type='article-pf';
    }else{
        target_page_type='article';
    }
}
console.log(target_page_type);
var target_words = [];
    var getUrlDetails = {
          cleanArray:function(item){
              var tempArr = [];
              for (var i = 0; i < item.length; i++) {
                  if (item[i] !== undefined && item[i] != "") {
                      tempArr.push(item[i]);
                  }
              }
              return tempArr;
          },
          createArrayFromUrl:function(){
              target_words = target_words.concat(window.location.hostname);
              var url_host = window.location.hostname.split('.');
              target_words = target_words.concat(url_host);
              var url_path = window.location.pathname.replace('.html','').split('/');
              target_words = target_words.concat(url_path);
              var pathArrLen = url_path.length;
              var subUrlPath = url_path[pathArrLen-1].split('-');
              target_words = target_words.concat(subUrlPath);
              target_words = getUrlDetails.cleanArray(target_words);
          }
      };
      getUrlDetails.createArrayFromUrl();
  console.log(target_words);
  var dynFlag = 0;
  function dynamicSlotExecute(){
function dynamicSlotDefineRefresh(el){
    console.log("Inside Dynamic Slot Define...");
  var defineStatus = slot[999];//el.getAttribute('data-defined');
  if(typeof slot[999] === 'undefined'){
  googletag.cmd.push(function() {
    oi_ad_config_dynamic_slot.forEach(function(config,idx) {
      var mapVal = config.mapping;
      var gptVal = config.gpt;
      if(gptVal){
        slot[999] = googletag.defineSlot(config.slotName, config.sizes, config.slotID).addService(googletag.pubads());
      }
    });
    googletag.pubads().enableSingleRequest();
     googletag.pubads().enableAsyncRendering();
     for (const key in targetingParams) {
    const value = targetingParams[key];
    if (value !== "" && value !== undefined && value !== null) {
      googletag.pubads().setTargeting(key, value);
    }
  }
  googletag.enableServices();
  googletag.display('are-slot-dynamic');
  const elements = document.querySelectorAll('.dynamic-slot');
  // Add a data attribute to each element
  elements.forEach((element, index) => {
    element.setAttribute('data-defined', '1');
  });
  });
}else{
  googletag.pubads().refresh([slot[999]]);
}
}
var pattern = /are-slot-\d+/;
var divs = document.getElementsByTagName('div');
var matchingDivs = [];
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
      if (pattern.test(div.id)) {
        if (!div.innerHTML.trim()) {
          div.classList.add('dynamic-slot');
          div.classList.remove('oi-axt');
          div.setAttribute('data-refreshed',0);
          matchingDivs.push(div);
        }
      }
}
function handleScroll() {
  var elements = document.querySelectorAll('.dynamic-slot');
  elements.forEach(function (elem) {
    const observerdynamic = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      var adDiv = '<div id="are-slot-dynamic"></div>';
      var adid = "are-slot-dynamic";
      var elemid = entry.target.getAttribute('id');
      if(elemid!='are-slot-6'){
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          var isRefreshed = entry.target.getAttribute('data-refreshed');
          entry.target.classList.add('in-viewport');
       entry.target.classList.remove('out-viewport'); // Remove the class or do something else 
          if(isRefreshed==0){// Add a class or do something else
              entry.target.innerHTML = adDiv;
              entry.target.style.display='block';
              dynamicSlotDefineRefresh(entry.target);
              entry.target.setAttribute('data-refreshed', 1);
              entry.target.setAttribute('data-status', 'true');
          }
        } else {
          entry.target.classList.add('out-viewport'); // Remove the class or do something else
          entry.target.setAttribute('data-status', 'false');
          entry.target.innerHTML = '';
          entry.target.setAttribute('data-refreshed', 0);
        }
        }
      });
    },{ threshold: 0.5 });
    observerdynamic.observe(elem);
  });
}
if(desipearlseven==0){
    window.addEventListener('scroll', handleScroll);
}
}
/*if(window.location.search.indexOf("gr=1") > -1){
// Check if the element with id "home_page_top_widget_db_data_inc" exists
var homePageTopWidget = document.getElementById("home_page_top_widget_db_data_inc");

if (homePageTopWidget) {
    // Define a function to fetch and update data
    var getHomePageGrTopWidget = function() {
        // Use the Fetch API to make a GET request
        fetch("/dynamic_html_includes/wap/widget/home_page_top_widget_db_data.html")
            .then(response => response.text())
            .then(data => {
                // Update the innerHTML of the element with the fetched data
                homePageTopWidget.innerHTML = data;
            })
            .catch(error => console.error("Error fetching data:", error));
    };

    // Call the function initially
    getHomePageGrTopWidget();

    // Set up an interval to call the function every 60000 milliseconds (1 minute)
    setInterval(getHomePageGrTopWidget, 60000);
}

}*/
</script> <style>
.oi-footer-bottom-ad-btns {
    z-index: 999999999;
}
#cubeIframe{
	z-index: 999999!important;
	bottom: 70px!important;
}
#rv_slb {
    z-index: 9999999999!important;
}
.listical-ad-left{
	height: auto!important;
    min-height: 250px;
}
.assigned_video:after {
  display:none!important;
}
.imgBorder {
height: auto;
}
.oiwb {
    word-break: break-word;
}
.amp-fx-flying-carpet {
    height: 350px!important;
}
.oi-add-block:empty {
    min-height: auto!important;
}
.left img {
    display: block;
}
#oi-mid-article-thumbnails{
    background: #f5f5f5;
    padding: 10px 0;
    text-align: center;
    min-height: 250px;
    margin-bottom: 10px;
    display: block!important;
}
#v-oneindia-v0-0{
	min-height: 250px;
    background: #f5f5f5;
    margin: 10px 0;
    padding: 10px 0;	
}

#v-filmibeat-v0{
	min-height: 250px;
    background: #f5f5f5;
    margin: 10px 0;
    padding: 10px 0;		
}
.mobi-primary-nav .notification-sub-block {
    display: none!important;
}

.inarticlead .oi-add-block1 {
    min-height: 250px;
    padding: 10px 0;
    margin-bottom: 10px;
    background: #f5f5f5;
    text-align: center;
}

#recommended_video:empty, #assigned_video:empty {
    min-height: 0;
}
.notification-sub-wrap,.footer-text1,.footer-text2 {
    display: none
}
#taboola-mid-home-stream-article{
	min-height: 85px;
}
#v-filmibeat-v0{
	display: none!important;
}
.filmibeat-top-ad{
	min-height:260px;
}
#open-app {
    display: none;
}
.open-app{
    display: none;	
}
.ele-promo-wrapper{display:block!important;}

.dynamic-slot.in-viewport::before {
    content: "Advertisement";
    display: block;
    font-size: 10px;
    font-family: arial;
    padding-bottom: 5px;
    color: #ccc;
    text-transform: uppercase;
}
.dynamic-slot.in-viewport {
    background: #f5f5f5;
    margin: 14px 0;
    min-height: 280px;
    text-align: center;
    padding: 12px 0;
}
</style> <script type="text/javascript">
if(window.location.hostname=='www.drivespark.com' || window.location.hostname=='tamil.drivespark.com'){
    var ref_logic={"refresh_all":true,"refresh_infinite":true,"idle_refresh_count":3,"anymind_idle_refresh_count":3};
}else{
    var ref_logic={"refresh_all":true,"refresh_infinite":true,"idle_refresh_count":5,"anymind_idle_refresh_count":3};
}
	console.log(ref_logic);
	var cnt = 0;
	var comscoreFlag = 0;
	var triggerComscrore;
	function startInterVal(){
		triggerComscrore = setInterval(function(){
                cnt++;
                if(cnt>=4){
                   comscoreFlag=1; 
                }
            },1000);
	}
	function killInterval(){
		clearInterval(triggerComscrore);
	}
	var pageStats = {
	  startInterVal() {
	    triggerComscrore = setInterval(function(){
	                cnt++;
	                if(cnt>=4){
	                   comscoreFlag=1; 
	                }
	            },1000);
	  },
	  killInterval() {
	    clearInterval(triggerComscrore);
	  }
	};
  
</script> <style>
#story .refreshInarticleAd iframe {
    width: auto;
    margin-top:0;
}
iframe#perIframe {
    background: none!important;
    width: 100%;
    margin: 0 auto;
}

	#div-insticator-ad-1 {
    width: 300px!important;
    overflow-x: hidden;
	}

#r89-mobile-sticky-header-1-0-wrapper{
    top: 0px!important;
    z-index: 9999999!important;
}

</style> <link rel="manifest" href="/browser.json?v=1.0.1"> <link href="https://www.google.com/analytics" rel="dns-prefetch" /> <link rel="preconnect" crossorigin href="https://c.amazon-adsystem.com/aax2/apstag.js" /> <link href="https://www.doubleclickbygoogle.com/" rel="dns-prefetch" /> <meta property="taboola-category" content="english" /> <script data-cfasync="false" type="text/javascript" data-pagespeed-no-defer>
var oi_ads_loaded = false;
var MyApi = {};
var VUUKLE_CONFIG={};
var target_words = [];
var gptadslots = [];
var slot = [];
var PREBID_TIMEOUT_DESK = 3000;
var PREBID_TIMEOUT_MOBI = 3000;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var photoGalleryGlobal = {};
var photoFeatureGlobal = {};
var clSliderGlobal = {};
var pf_mobi_slider;
var pfGlobalData={};
var oi_setting = new Object();
var social_share = new Object();
var _qevents = _qevents || [];
var twitter_via = "mykhelcom";
var author_page = new Object();
var gf_search_data = new Object();
var gaStopCounter = 10;//PV count for Slider
var enabled_noti;
var adPerSeen = 50;
var adPerSeenMobi=50;
var maxidleRefresh=3;
var bottomStickySlot;

if(document.querySelector('meta[property="article:author"]')){
	var ga_author_name=document.querySelector('meta[property="article:author"]').getAttribute('data-author').trim();
}
if(document.querySelector('meta[property="article:published_time"]')){
  var ga_published_date=document.querySelector('meta[property="article:published_time"]').getAttribute('data-published_date').trim();
}
if(document.querySelector('link[rel="canonical"]')){
  var canonical_url=document.querySelector('link[rel="canonical"]').getAttribute('href').trim();
}
var data_match_vdo = false;
if(document.querySelector('meta[property="article:author"]')){
    data_match_vdo = document.querySelector('meta[property="article:author"]').getAttribute('data-match-video').trim();
}
var direct_ad_refresh = localStorage.getItem("direct_ad");
if(direct_ad_refresh=="" || direct_ad_refresh=="undefined" || direct_ad_refresh==null){
direct_ad_refresh = "";
}

var gutter_ad = 0;
var non_gutter_ad = 1;
var ad_refresh= 1;
var com_cnt;
var ad_homerightrail = 1;


</script> <script type="text/javascript" data-pagespeed-no-defer> var promotional_details = { promoflag:0,promolink:['https://kannada.oneindia.com/topic/chikungunya','https://kannada.oneindia.com/news/india/dengue-chikungunya-grand-mother-s-giloy-decoction-a-powerful-home-remedy-122004.html','https://kannada.oneindia.com/news/hassan/chikungunya-creates-tension-in-hassan-distr'],promolimit:3 };</script>  <script data-cfasync="false" data-pagespeed-no-defer async src="https://www.googletagmanager.com/gtag/js?id=G-VEYN0E5XZR"></script> <script data-pagespeed-no-defer data-cfasync="false">
 var liveGA = 'G-VEYN0E5XZR';
 var rosGA= 'G-J1JVVS0C5V';
 var universalGA='G-09Y63T23W1';
 var gaconfig={};
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
 
 
 
  // gtag('config', rosGA);
   if(ga_author_name != undefined && ga_author_name != ""){
       gtag( 'set' , {'author' : ga_author_name} );
       gaconfig['author']=ga_author_name;
     }
        if(ga_published_date != undefined && ga_published_date != ""){
          gtag( 'set' , {'publish_date' : ga_published_date} );
         gaconfig['publish_date']=ga_published_date;
     }
     if(canonical_url!= undefined){
        if(canonical_url.length > 0){
            gtag( 'set' , {'url' : canonical_url} );
           gaconfig['url']=canonical_url;
         }
     }   
   
 
 
 var orgstory_value='';
 if((document.querySelector('head')) && (document.querySelector('head').hasAttribute('data-original_story'))){
   orgstory_value = document.querySelector('head').getAttribute('data-original_story');
   
   if(orgstory_value === 'yes' && canonical_url.length > 0){
       gtag( 'set' , {'original_story' : canonical_url} );
       gaconfig['original_story']=canonical_url;
   }
 }
 var dimensionValue = '';
 if((document.querySelector('head')) && (document.querySelector('head').hasAttribute('data-eng-tags'))){
 var art_tags = document.querySelector('head').getAttribute('data-eng-tags');
 if(art_tags != '' && art_tags != undefined && art_tags != null){
     var art_tags_Arr = art_tags.split(',');
         dimensionValue = art_tags_Arr[0];
         gtag( 'set' , {'topic' : dimensionValue} );
         gaconfig['topic']=dimensionValue;
            }
 }

var dimensionTags = '';
var headElement = document.querySelector('head');
if (headElement && headElement.hasAttribute('data-eng-tags')) {
  var art_tags = headElement.getAttribute('data-eng-tags');
  if (art_tags) {
    dimensionTags = art_tags;
    gtag('set', {'tags': dimensionTags});
    gaconfig['tags']=dimensionTags;
  }
}

if (document.querySelector('head') && document.querySelector('head').hasAttribute('data-category_name')) {
var oi_category_name = document.querySelector('head').getAttribute('data-category_name').trim();
gtag('set', {'category': oi_category_name});
gaconfig['category']=oi_category_name;
}

 var dimensionPageType = ga_page_type;
 if(dimensionPageType != undefined && dimensionPageType != ""){
 gtag( 'set' , {'page_type' : dimensionPageType} );
 gaconfig['page_type']=dimensionPageType;
 }
 
 //dimension9 for content src value start here
 var ga_content_src ='';
 if(document.querySelector('meta[property="article:author"]') && document.querySelector('meta[property="article:author"]').hasAttribute('data-content-src')){
 ga_content_src=document.querySelector('meta[property="article:author"]').getAttribute('data-content-src').trim();
 }
 if(ga_content_src != undefined && ga_content_src != ""){
   gtag( 'set' , {'content_src' : ga_content_src} );
   gaconfig['content_src']=ga_content_src;
 }
 //dimension9 for content src value start end
 
 //dimension10 custom dimension for freelance
 var ga_lekhaka_author ='';
 if(document.querySelector('meta[property="article:author"]') && document.querySelector('meta[property="article:author"]').hasAttribute('data-lekhaka-author')){
 ga_lekhaka_author=document.querySelector('meta[property="article:author"]').getAttribute('data-lekhaka-author').trim();
 }
 if(ga_lekhaka_author != undefined && ga_lekhaka_author != ""){
   gtag( 'set' , {'freelancer' : ga_lekhaka_author} );
   gaconfig['freelancer']=ga_lekhaka_author;
 }
 //dimension10 custom dimension for freelance
 
 //dimension11 custom dimension for Seoexpert
 var ga_seo_expert ='';
 if(document.querySelector('meta[property="article:author"]') && document.querySelector('meta[property="article:author"]').hasAttribute('data-seo-expert')){
 ga_seo_expert=document.querySelector('meta[property="article:author"]').getAttribute('data-seo-expert').trim();
 }
 if(ga_seo_expert != undefined && ga_seo_expert != ""){
   gtag( 'set' , {'seo_expert' : ga_seo_expert} );
   gaconfig['seo_expert']=ga_seo_expert;
 }
 //dimension11 custom dimension for Seoexpert
 gtag('set', 'linker', {'domains': ['www.oneindia.com, www.filmibeat.com, www.boldsky.com, www.gizbot.com, www.goodreturns.in, www.drivespark.com, www.mykhel.com, www.careerindia.com, www.nativeplanet.com, www.click.in']});
 //gtag('event', 'page_view', { 'send_to': rosGA }); // ROS Oneindia tracker.
 //gtag('event', 'page_view', { 'send_to': universalGA});
 console.log(gaconfig);
 if(gaconfig != undefined && gaconfig !=''){
   gtag('config', liveGA,gaconfig);
   gtag('config', rosGA,gaconfig);
   gtag('config', universalGA,gaconfig);
 }else{
   gtag('config', liveGA);
   gtag('config', rosGA);
   gtag('config', universalGA);
 }
 //GA4 Code End

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-110466-78', 'auto', {'name': 'mykhelen'});
ga('create', 'UA-110466-6', 'auto', {'name': 'rosmykhel'});  // ROS mykhel tracker.

if(ga_author_name != undefined && ga_author_name != ""){
    ga('mykhelen.set','dimension1', ga_author_name);
}
          if(ga_published_date != undefined && ga_published_date != ""){
    ga('mykhelen.set','dimension3',ga_published_date);
          }
	if(canonical_url.length > 0){
	     		ga('mykhelen.set','dimension4',canonical_url);
		}
var orgstory_value='';
if((document.querySelector('head')) && (document.querySelector('head').hasAttribute('data-original_story'))){
	orgstory_value = document.querySelector('head').getAttribute('data-original_story');
	
	if(orgstory_value === 'yes' && canonical_url.length > 0){
	
	   ga('mykhelen.set','dimension6',canonical_url);
	}
}
var dimensionPageType = ga_page_type;
ga('mykhelen.set', 'dimension8', dimensionPageType);
//dimension9 for content src value start here
var ga_content_src ='';
if(document.querySelector('meta[property="article:author"]') && document.querySelector('meta[property="article:author"]').hasAttribute('data-content-src')){
ga_content_src=document.querySelector('meta[property="article:author"]').getAttribute('data-content-src').trim();
}
if(ga_content_src != undefined && ga_content_src != ""){
    ga('mykhelen.set','dimension9',ga_content_src);
}
//dimension9 for content src value start end
//dimension10 custom dimension for freelance
var ga_lekhaka_author ='';
if(document.querySelector('meta[property="article:author"]') && document.querySelector('meta[property="article:author"]').hasAttribute('data-lekhaka-author')){
ga_lekhaka_author=document.querySelector('meta[property="article:author"]').getAttribute('data-lekhaka-author').trim();
}
if(ga_lekhaka_author != undefined && ga_lekhaka_author != ""){
    ga('mykhelen.set','dimension10',ga_lekhaka_author);
}
//dimension10 custom dimension for freelance

//dimension11 custom dimension for Seoexpert
var ga_seo_expert ='';
if(document.querySelector('meta[property="article:author"]') && document.querySelector('meta[property="article:author"]').hasAttribute('data-seo-expert')){
ga_seo_expert=document.querySelector('meta[property="article:author"]').getAttribute('data-seo-expert').trim();
}
if(ga_seo_expert != undefined && ga_seo_expert != ""){
    ga('mykhelen.set','dimension11',ga_seo_expert);
    ga('rosmykhel.set','dimension11',ga_seo_expert);
}
//dimension11 custom dimension for Seoexpert


ga('mykhelen.send', 'pageview');
ga('rosmykhel.send', 'pageview'); // Send page view for ROS mykhel.


ga('create', 'UA-18423815-11', 'auto', {
    'name': 'dhglobal',
    'allowLinker': true
});
ga('dhglobal.require', 'linker');
ga('dhglobal.linker:autoLink', ['www.oneindia.com, www.filmibeat.com, www.boldsky.com, www.gizbot.com, www.goodreturns.in, www.drivespark.com, www.mykhel.com, www.careerindia.com, www.nativeplanet.com, www.click.in'], false, true);
ga('dhglobal.send', 'pageview');


 var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "7732551" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();


 function gaTrackEvent(category, action, opt_label, opt_value) {
        if (typeof(opt_label)=="undefined" || opt_label==null || opt_label=='') {
            opt_label = '';
        }
        if (typeof(opt_value)=="undefined" || opt_value==null || opt_value=='') {
            opt_value = 0;
        }
        // track event
        var ga_lang  = gaGetDomainLang();
        ga('mykhel'+ga_lang+'.send', 'event', category, action, opt_label, opt_value);
        ga('rosmykhel.send', 'event', category, action, opt_label, opt_value);
     }

    function gaGetDomainLang() {
        var parts = location.hostname.split('.');
        var subdomain =parts.shift();
        var regionals = {"tamil":"ta","kannada":"kn","telugu":"te","gujarati":"gu","malayalam":"ml","bengali":"bn","hindi":"hi"};

        if(regionals[subdomain] != '' && typeof regionals[subdomain] !== 'undefined'){
            return regionals[subdomain];
        }
        else{
            return 'en';
        }
    }



function googleAnalyticsCodeCommon() {
              var main_url = document.querySelector('link[rel="canonical"]').getAttribute('href').trim();
            var url = document.location.href;
            var pattern = 'https://' + window.location.hostname;
            url = url.replace(pattern, "");
            var title = document.title;

            gtag('event', 'page_view', {
              page_location: main_url,
              page_path: url,
              send_to:  liveGA
            });
            gtag('event', 'page_view', {
              page_location: main_url,
              page_path: url,
              send_to:  rosGA
            });
             gtag('event', 'page_view', {
              page_location: main_url,
              page_path: url,
              send_to:  universalGA
            });

            // for comscore
         url = document.location.href;
            var jcode = 'var _comscore = _comscore || []; var comscoreParams = { c1: "2", c2: "7732551", c3: "", c4: "' + url + '", c5: "", c6: "", c15: "" }; _comscore.push(comscoreParams); var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; el.parentNode.insertBefore(s, el);';
            setTimeout(jcode, 500);

        }

var evtCat='Engagement';
var evtLebal='infinite scroll 1';
function googleAnalyticsCodeInfiniteScroll(evtCat, evtLebal) {

            gtag('event', 'scroll_load', {
              'event_category': evtCat,
                 'event_label': evtLebal,
               send_to:  liveGA
            });


            gtag('event', 'scroll_load', {
              'event_category': evtCat,
                 'event_label': evtLebal,
               send_to:  rosGA
            });


            gtag('event', 'scroll_load', {
              'event_category': evtCat,
                 'event_label': evtLebal,
               send_to:  universalGA
            });



            // for comscore
         url = document.location.href;
            var jcode = 'var comscore = comscore || []; var comscoreParams = { c1: "2", c2: "7732551", c3: "", c4: "' + url + '", c5: "", c6: "", c15: "" }; _comscore.push(comscoreParams); var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; el.parentNode.insertBefore(s, el);';
            setTimeout(jcode, 500);

        }  
function redirect_blank(url) {
var a = document.createElement('a');
a.target="_blank";
a.href=url;
a.click();
}
function eventTrackerSales(category, action, label) {
ga('mykhelen.send', 'event', category, action, label);
redirect_blank(label);
return false;
}
</script>  <noscript> <img src="https://b.scorecardresearch.com/p?c1=2&c2=7732551&cv=2.0&cj=1" /> </noscript>   <link href="/common/adaptive/css/font-awesome.min.css" rel="stylesheet" type="text/css"> <link href="/common/adaptive/css/header-footer-style.css?v=22" rel="stylesheet" type="text/css"> <link href="/common/adaptive/css/header-footer.css?v=49" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <link href="/common/adaptive/css/style.css?v=114" rel="stylesheet" type="text/css"> <script type="text/javascript">
    var d = new Date();
    var n = d.getMilliseconds();
    var urlburst = 'v='+n;
    if(window.location.search==='?staging'){
        var conFile = '/common/oijs/oiframework-desk-app-stag.js?'+urlburst;
    }else{
        var conFile = '/common/build/js/oiframework-desk-app.min.js?v=1.1.292';
    }
            [
                '/common/app/lib/require-latest.js',
		conFile
            ].forEach(function(src) {
                var script = document.createElement('script')
                script.src = src;
                script.async = false;
                document.head.appendChild(script);
            });
</script> <style>
body{
   max-width: 1349px;
   margin: 0 auto!important;
}

.os-header.fixed{
	  max-width: 1349px;
   margin: 0 auto;
}
@media screen and (max-width: 1280px) {
.breaking-newstext {

    margin: 20px 0px!important;
    width: 190px!important;
}
.notification-outerblock {

    width: 544px!important;

}
}
.headtohead-widget-count{ display:none; }
.headtohead-widget{display:none; }
.headtohead-widget-visible{display:block; }
.os-sports-article table td, .os-sports-article table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.os-sports-article table tr:nth-child(even){background-color: #f2f2f2;}

.os-sports-article table tr:hover {background-color: #ddd;}

.os-sports-article table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #6159d2;
  color: white;
}
.os-header.fixed{
	top:0;
}
.points_table-widget-count{ display:none; }
.points_table-widget{display:none; }
.points_table-widget-visible{display:block; }
.viroolVideo{
	clear:both;
}
#v-mykhel-0 {
    clear: both;
}
.os-menu-lists {
    z-index: 1!important;
}
.os-sports-wrapper .os-sports-article-lt ul li {
    list-style-type: disc!important;
    list-style-position: inside;
    line-height: 26px;
    padding: 5px 0px;
}
.os-sports-wrapper .os-sports-article-lt .gallery-embed-container-mykhel ul li {
    list-style-type: none!important;
    list-style-position: outside;
}
.os-sports-wrapper .os-sports-article-lt .slider-article-list-wrap ul li {
    list-style-type: none!important;
}
h3.ds-album-heading {
    padding-bottom: 5px;
}
.cmscontent-left-article{
    min-height: 250px;
}

.os-header-ad{
    min-height: 90px;
}

.cmscontent-right1 {
    min-height: 250px;
}
.os-sports-wrapper .os-sports-article-img img{
	clear:both;
}
.os-sports-article figure{
clear: both;
}
.poll-embed-container iframe {
    border: 0 none;
    min-height: 240px;
}
.os-sports-article-lt h2{
clear:both;
}

.os-sports-article-img {
    clear: both;
}
.os-sports-article-lt ol li {
    list-style-type: decimal;
    list-style-position: inside;
    line-height: 24px;
}
h2,h3 {
padding: 12px 0 0 0;
    line-height: 30px;
    font-size: 20px;
}
</style> <script data-pagespeed-no-defer data-cfasync="false" async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script> <script data-pagespeed-no-defer data-cfasync="false" async="async" src="/common/oijs/prebid.js?v=1.0.32"></script> <script pagespeed_no_defer data-cfasync="false">
  var url=window.location.href;
var googletag=googletag||{};
    googletag.cmd=googletag.cmd||[];
var PREBID_TIMEOUT=PREBID_TIMEOUT_DESK;
console.log(PREBID_TIMEOUT + "Prebid Timeout Value");
       var FAILSAFE_TIMEOUT = 3000;
       var pbjs = pbjs || {};
    pbjs.que = pbjs.que || [];
    const customConfigObject = {
          "buckets" : [{
              "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
              "min" : 0,
              "max" : 45,
              "increment" : 0.10  // from $0 to $5, 1-cent increments
            }
            ]
        };
    if(apsFlag==1){
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
}
var bidfloorArr={rubicon:0.01,ix:0.01,appnexus:0.01,pubmatic:'0.01',aol:0.01,openx:0.01,onetag:0.01};
var oi_tracker_id = dhConfigDetails.getUserTrackerId();
console.log("values are:"+oi_tracker_id);
var oi_lang = document.documentElement.lang;
var oi_domain = document.location.hostname;
var oi_category_name='';
if (document.querySelector('head') && document.querySelector('head').hasAttribute('data-category_name')) {
   oi_category_name = document.querySelector('head').getAttribute('data-category_name').trim();
}
console.log(oi_category_name);
if(screen.width >= 1440) {
        var defSizes = [[1, 1], [160, 600],[300, 600]];
    }else{
        var defSizes = [[1, 1], [160, 600]];
    }
if(trackpagetype=='article' || trackpagetype=='database' || trackpagetype=='photos'){
var oi_ad_config_common=[{slotName:"/1008496/mykhel-eng-home-728x90",sizes:[[728, 90],[970, 90],[970, 250]],gptsizes:[[728, 90],[970, 90],[970, 250]],mapping:"leaderboard",slotID:"are-slot-leaderboard",type:"banner",bidding:true,aps:true,gpt:true,refresh:true},
                  {slotName:"/1008496/mykhel-eng-home-300x250",sizes:[[300, 250],[300, 600]],gptsizes:[[300, 250],[300, 600]],mapping:"mr1",type:"banner",bidding:true,aps:true,gpt:true,slotID:"are-slot-mr1",refresh:true},
                  {slotName:"/1008496/mykhel-eng-home-300x250-1",sizes:[[300, 250],[300,600]],gptsizes:[[300, 250],[300,600]],mapping:"mr2",type:"banner",bidding:true,aps:true,gpt:true,slotID:"are-slot-mr2",refresh:true},
                  {slotName:"/1008496/mykhel-inside-eng-right-rail",sizes:defSizes,gptsizes:defSizes,mapping:"rightrail",type:"banner",bidding:true,aps:true,gpt:true,slotID:"are-slot-rightrail",refresh:true}
                  ];
var oi_ad_config_inside=[
                  {slotName:"/1008496/mykhel-eng-inarticle-300x250-1",sizes:[[300, 250], [336, 280]],gptsizes:[[300, 250], [336, 280]],mapping:"gam1",type:"banner",bidding:true,aps:true,gpt:true,refresh:true,slotID:"are-slot-1"},
                  {slotName:"/1008496/mykhel-eng-inarticle-300x250-2",sizes:[[300, 250], [336, 280]],gptsizes:[[300, 250], [336, 280]],mapping:"gam2",type:"banner",bidding:true,aps:true,gpt:true,refresh:true,slotID:"are-slot-2"},
                  {slotName:"/1008496/Virool-Inline-Video-RP-Mykhel",sizes:[[1, 1],[600, 450]],gptsizes:[[1, 1],[600, 450]],mapping:"outstream",type:"video",bidding:false,aps:false,gpt:true,refresh:false,slotID:"are-slot-3"},
                  {slotName:"/21622890900,1008496/SG_Mykhel.com_pc_article_right2_300x250//300x600",sizes:[[300, 250], [300, 600]],gptsizes:[[300, 250], [300, 600]],mapping:"anymind",type:"banner",bidding:false,aps:false,gpt:true,refresh:true,slotID:"are-slot-4"},
                  {slotName:"/1008496/vuukle-comments-300x250",sizes:[[300, 250], [336, 280]],gptsizes:[[300, 250], [336, 280]],mapping:"vuukle",type:"banner",bidding:true,aps:true,gpt:true,refresh:true,slotID:"are-slot-5"}
                  ];
}else{
      var gptflag=true;
      var bidflag=true;
      var amzflag=true;
   var oi_ad_config_common=[{slotName:"/1008496/mykhel-eng-home-728x90",sizes:[[728, 90],[970, 90],[970, 250]],gptsizes:[[728, 90],[970, 90],[970, 250]],mapping:"leaderboard",slotID:"are-slot-leaderboard",type:"banner",bidding:true,aps:true,gpt:true,refresh:true},
                  {slotName:"/1008496/mykhel-eng-home-300x250",sizes:[[300, 250]],gptsizes:[[300, 250]],mapping:"mr1",type:"banner",bidding:true,aps:true,gpt:true,slotID:"are-slot-mr1",refresh:true},
                  {slotName:"/1008496/mykhel-eng-home-300x250-1",sizes:[[300, 250]],gptsizes:[[300, 250]],mapping:"mr2",type:"banner",bidding:true,aps:true,gpt:true,slotID:"are-slot-mr2",refresh:true},
                  {slotName:"/1008496/mykhel-home-eng-right-rail",sizes:defSizes,gptsizes:defSizes,mapping:"rightrail",type:"banner",bidding:bidflag,aps:amzflag,gpt:gptflag,slotID:"are-slot-rightrail",refresh:true}
                  ];
var oi_ad_config_inside=[]; 
}
var user_agent=navigator.userAgent;
var oiconfiglength = oi_ad_config_inside.length;
var orilength = oi_ad_config_inside.length;
if (document.querySelector('head') && document.querySelector('head').hasAttribute('data-numads')) {
    oiconfiglength = document.querySelector('head').getAttribute('data-numads');
    oiconfiglength = parseInt(oiconfiglength);
}
function generateAdConfigArrayWithLast(numElements) {
  var adConfigArray = [];
  for (let i = 0; i < numElements; i++) {
    adConfigArray.push(oi_ad_config_inside[i]);
  }
  return adConfigArray;
}
if(orilength > oiconfiglength && oiconfiglength > 0){
  oi_ad_config_inside = generateAdConfigArrayWithLast(oiconfiglength);
}
if(oiconfiglength > 0){
	var oi_ad_config = oi_ad_config_common.concat(oi_ad_config_inside);
}else{
	var oi_ad_config = oi_ad_config_common;
}
console.log(oi_ad_config);
var _prebidAllAdUnitsAmazon = oi_ad_config.filter((item) => item.aps).map(({ slotName, sizes, slotID }) => ({ slotName, sizes, slotID }));
var adUnits = [];
for (let i = 0; i < oi_ad_config.length; i++) {
  var mapVal = oi_ad_config[i].mapping;
  var biddingVal = oi_ad_config[i].bidding;
  var globalMap = globalAdObj[mapVal];
  if(globalMap && biddingVal){
  adUnits.push({
    code: oi_ad_config[i].slotName,
    mediaTypes: {
      banner: {
        sizes: oi_ad_config[i].sizes,
      },
    },
    bids: [
      {
        bidder: 'appnexus',
        params: {
          placementId: mapVal === 'leaderboard' ? 17578043 : mapVal === 'rightrail' ? 17578039 : 17578041,
          reserve: bidfloorArr['appnexus'],
        },
      },
      {
        bidder: 'ix',
        params: {
          siteId: '410991',
          size: mapVal === 'leaderboard' ? [[728, 90],[970, 90],[970, 250]] : mapVal === 'rightrail'? [[160, 600],[120, 600],[300, 250],[300, 600]]: [[300, 250],[336, 280]],
        },
      },
      {
        bidder: 'rubicon',
        params: {
          accountId: '7523',
          siteId: '282770',
          zoneId: '1462144',
          floor: bidfloorArr['rubicon'],
        },
      },
      {
        bidder: 'pubmatic',
        params: {
          publisherId: '158367',
          adSlot: mapVal === 'leaderboard'
            ? 'Oneindia_728x90_DTP_RON_Prebid@728x90'
            : 'Oneindia_300x250_DTP_RON_Prebid@300x250',
          kadfloor: bidfloorArr['pubmatic'],
        },
      },
      {
        bidder: 'openx',
        params: {
          unit: '540958224',
          delDomain: 'one-india-d.openx.net',
          customFloor: bidfloorArr['openx'],
        },
      },
      {
        bidder: 'onetag',
        params: {
          pubId: '752da0c65b1ef40',
        },
      },
      {
        bidder: 'adtelligent',
        params: {
          aid: 848877,
        },
      },
    ],
  });
}
}
console.log(adUnits);
var apstagConfig = {
    pubID: '6bf45be4-2d7f-4640-926a-009ab96d0634',
    adServer: 'googletag',
};
var target_words = [];
var getUrlDetails = {
cleanArray:function(item){
  var tempArr = [];
  for (var i = 0; i < item.length; i++) {
      if (item[i] !== undefined && item[i] != "") {
          tempArr.push(item[i]);
      }
  }
  return tempArr;
},
createArrayFromUrl:function(){
  target_words = target_words.concat(window.location.hostname);
  var url_host = window.location.hostname.split('.');
  target_words = target_words.concat(url_host);
  var url_path = window.location.pathname.replace('.html','').split('/');
  target_words = target_words.concat(url_path);
  var pathArrLen = url_path.length;
  var subUrlPath = url_path[pathArrLen-1].split('-');
  target_words = target_words.concat(subUrlPath);
  target_words = getUrlDetails.cleanArray(target_words);
}
};
getUrlDetails.createArrayFromUrl();
console.log(target_words);

var article_tags = '';
var headElement1 = documC_6SaAQ#tblciGiD36Gzr_lpOwGFCbX4AvvL6R-AF6NMXQqygi3kSx5BG-SCU9lsopqaw9ZmC_6SaAQ","item-id":"~~V1~~-2954351501201427943~~KzKeu6kerm8I8bVPWpFhZ3OTzqGCufr2PpN5HB-cqF9w6cLzOYgYTH58zK8cIqqSn1OV0paklJAyh655pQ0hZ863Be4TlQpepLRUFiaWAAEwRobSSvFk6hPgwywgYxkxw9-tPlZ2aC6fcQUvLHUbBvJ8vvvuIvvO3IjIVEGeBzc","tblci":"GiD36Gzr_lpOwGFCbX4AvvL6R-AF6NMXQqygi3kSx5BG-SCU9lsopqaw9ZmC_6SaAQ","publisher":"adgravity--alfaromeoimp-sc"},{"ecpaPercentile":"0.05","all-thumbnails":"http://cdn.taboola.com/libtrc/static/thumbnails/9457787402ab59362fa2f12e4c4d4a15.jpg!-#@1067x600","origin":"default","description":"¡Este método para acelerar la pérdida de grasa lo deberían conocer todas las personas!","title":"Un médico aconseja: Hígado graso = michelines (Tómate esto cada mañana)","type":"text","published-date":"1706624017","branding-text":"goldentree.es","uic":"true","duration":"0","sig":"ad174740fd0f1d85ee29f352637a0aeb70f810540958","uploader":"","cta-text":"Más información","is-syndicated":"true","id":"~~V1~~8785429240618271583~~iZbYJzozTV2ir6fRXvYjl2oIvJPeYgqnvD8pLQRHNMrnoZueAsnM0UTkqRiz-o8u33UkHCb9V6-VgH4CA5YZrku7an8VqkvnxTtX7NBUjMzRKXmzzrBxWo_le0o32zHHwMY8FUYLCWbgEbJ-O09HrBoTeIrt5sx_ydDi9n2STzH16eamE162nyjz0sVUCdm3Jl6JZTUdqyvZGdolsw5-7w","views":"0","thrf":"true","thumbnail":"http://cdn.taboola.com/libtrc/static/thumbnails/9457787402ab59362fa2f12e4c4d4a15.jpg","tat":"TABOOLA","thumb-size":"1067x600","placement-label":"Explore More | Card 5","url":"https://app.goldentree.es/abt/lc-p11-ob?utm_source=taboola&utm_medium={{publisher_id}}&utm_campaign={33700859}&utm_content={{ad_id}}&utm_term={{section_id}}&native_campaign=Country:ES|Product:LC|Note:re-8563-Max|Date:30.01.2024|CampaignID:10660|Agent:Maj|Device:desktop|AbTestSlug:lc-p11-ob&native_term=Product:LC|Ad_Type:ad|Ad_Note:ad_note|CreativeID:0|MasterCreativeID:0|AbTestSlug:lc-p11-ob&refferalid=005&tblci={GiD36Gzr_lpOwGFCbX4AvvL6R-AF6NMXQqygi3kSx5BG-SDatV8ogYKhh92Rr8Qj}&tblci=GiD36Gzr_lpOwGFCbX4AvvL6R-AF6NMXQqygi3kSx5BG-SDatV8ogYKhh92Rr8Qj#tblciGiD36Gzr_lpOwGFCbX4AvvL6R-AF6NMXQqygi3kSx5BG-SDatV8ogYKhh92Rr8Qj","item-id":"~~V1~~8785429240618271583~~iZbYJzozTV2ir6fRXvYjl2oIvJPeYgqnvD8pLQRHNMrnoZueAsnM0UTkqRiz-o8u33UkHCb9V6-VgH4CA5YZrku7an8VqkvnxTtX7NBUjMzRKXmzzrBxWo_le0o32zHHwMY8FUYLCWbgEbJ-O09HrBoTeIrt5sx_ydDi9n2STzH16eamE162nyjz0sVUCdm3Jl6JZTUdqyvZGdolsw5-7w","tblci":"GiD36Gzr_lpOwGFCbX4AvvL6R-AF6NMXQqygi3kSx5BG-SDatV8ogYKhh92Rr8Qj","publisher":"tdg-popolnapostavadoo1732es-livercomplex"}],"fpl":"Explore More","cpad":"0px","fb":"1","dlt":"1"},{"ri":"bb17bf35768e9621f9699d6688fed0bf","uuip":"Feed - Explore More","uip":"Explore More | Card 6","ppb":"CMkD","m":"organic-thumbs-feed-y-em","v":[{"thumbnail":"https://www.goodreturns.in/img/2024/02/stockbig-1707147593.jpg","description":"Small cap company operating in Specialty Chemicals industry, Styrenix Performance Materials on February 3, 2024 announced an interim dividend of Rs 48 (480%) per equity share of Rs 10 each and fixed February 12, 2024 as the record date. Styrenix Performance Materials shares soared 32% in last 6-mont","title":"Rs 48/Share Dividend: Multibagger Specialty Chemicals Stock To Go Ex-Dividend Soon","type":"text","published-date":"1707147755","url":"https://www.goodreturns.in/personal-finance/rs-48-share-dividend-multibagger-specialty-chemicals-stock-to-go-ex-dividend-soon-1328671.html","duration":"0","sig":"f7e7b45d389b10df699d35b6b1c8413ac50a2bbbcedb","item-id":"5583940157056052206","uploader":"","id":"/personal-finance/rs-48-share-dividend-multibagger-specialty-chemicals-stock-to-go-ex-dividend-soon-1328671.html","category":"personal finance","views":"0"},{"thumbnail":"https://www.goodreturns.in/img/2024/02/dividend-1707022741.jpg","description":"After Fridays closing session, the construction company Rites Ltd. had a market worth of Rs 16,787.49 Cr. RITES is a significant player in the engineering and transportation consulting sectors in India, functioning as a debt-free company. The Navaratna stock is expected to be closely watched by inve","title":"Debt-Free Navaratna Stock To Hit Ex-Date This Week For Rs. 4.75/Share Dividend: Buy?","type":"text","published-date":"1707022944","url":"https://www.goodreturns.in/personal-finance/debt-free-navaratna-stock-to-hit-ex-date-this-week-for-rs-4-75-share-dividend-buy-1328369.html","duration":"0","sig":"b45237bfa2edf1120100eec44dfab1e2b977512d0a12","item-id":"-5290760113847132587","uploader":"","id":"/personal-finance/debt-free-navaratna-stock-to-hit-ex-date-this-week-for-rs-4-75-share-dividend-buy-1328369.html","category":"personal finance","views":"0"}],"fpl":"Explore More","cpad":"0px","fb":"1","dlt":"1"}],"tslt":{"p-video-overlay":{"cancel":"Cancel","goto":"Go To"},"read-more":{"DEFAULT_CAPTION":"Read%20More"},"next-up":{"BTN_TEXT":"Read Next Story"},"vignette":{"openBtn":"Learn More","closeBtn":"Close"},"time-ago":{"yesterday":"Yesterday","hours":"{0} hours ago","hour":"1 hour ago","minutes":"{0} minutes ago","now":"Now","today":"Today","days":"{0} days ago"},"explore-more":{"POPUP_TEXT":"More stories to check out before you go","TITLE_TEXT":"Keep on reading"},"adchoice":{"adChoiceBtn.title":"Why do I see this item?"},"userx":{"popover.content.questionnaire.options.uninteresting":"Uninteresting","popover.content.questionnaire.options.racy":"Vulgar/Racy","undoBtn.label":"Undo","popover.title.scRemoved":"Sponsored link removed","popover.content.questionnaire.options.repetitive":"Repetitive","popover.title.thankYou":"Thank You!","popover.title.removed":"Removed!","popover.content.questionnaire.options.offensive":"Offensive","popover.content.questionnaire.options.misleading":"Misleading","removeBtn.title":"Remove this item","popover.content.questionnaire.tellUsWhy":"Tell us why?","popover.content.questionnaire.options.other":"Other","popover.content.approval":"We will try not to show you this content anymore."}},"dcga":{"pubConfigOverride":{"border-color":"black","font-weight":"bold","inherit-title-color":"true","module-name":"cta-lazy-module","enable-call-to-action-creative-component":"true","disable-cta-on-custom-module":"true"}},"voil":"1","jst":["https://cdn.taboola.com/scripts/cds-pips.js"]}}rgeting(key, value);
    }
  }
  var pattern = /-gen-\d{5,}\.html/;
if (pattern.test(url)) {
  googletag.pubads().setTargeting("content_type", "ai"); 
} else {
  googletag.pubads().setTargeting("content_type", "hg"); 
}
if(browse_topic !='' && browse_topic != undefined && browse_topic != null){
      googletag.pubads().setTargeting("topics_api",browse_topic); 
    }
  googletag.pubads().enableSingleRequest();
    googletag.pubads().enableLazyLoad({
fetchMarginPercent: 500,
renderMarginPercent: 400,
mobileScaling: 2.0
});
    googletag.enableServices();
    oi_ad_config.forEach(function(config,idx) {
var mapVal = config.mapping;
var gptVal = config.gpt;
var globalMap = globalAdObj[mapVal];
var refresh_val = config.refresh; 
if(globalMap && gptVal){
  googletag.display(config.slotID);
    if(document.getElementById(config.slotID)){
      document.getElementById(config.slotID).setAttribute('data-elementid',idx);
      if(!refresh_val){
        document.getElementById(config.slotID).classList.remove('oi-axt');
      }
    }
}else{
 /*Dynamic Ad Load Function Call*/
  if(document.getElementById(config.slotID)){
      document.getElementById(config.slotID).classList.add('dynamic-slot');
      document.getElementById(config.slotID).setAttribute('data-refreshed',0);
    }
  /*Dynamic Ad Load Function Call*/
}
});
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    //Hands Free SetTargetting
    if(typeof globalSetTargetting === 'function'){
          globalSetTargetting(event);
      }
//Hands Free SetTargetting
        var slotId = event.slot.getSlotElementId();
        var res = event.slot.getResponseInformation();
        var roadBlockArr = ['are-slot-leaderboard','are-slot-mr1'];
        var slotName = event.slot.getAdUnitPath();
        if(roadBlockArr.includes(slotId)){
       if (document.getElementById(slotId)) {
          document.getElementById(slotId).setAttribute('data-isroadblock',true);
          document.getElementById(slotId).setAttribute('data-roadBlockTimeout',15000);
         }
        }else{
         if (document.getElementById(slotId)) {
          document.getElementById(slotId).setAttribute('data-isroadblock',false);
          document.getElementById(slotId).setAttribute('data-roadBlockTimeout',refreshTimeOut);
        }
     }
        if(res != null && res != '' && res != undefined){
                if (lineItemArr != null && lineItemArr != '' && lineItemArr != undefined && res.hasOwnProperty('sourceAgnosticLineItemId')) {
                        var lineItem = res['sourceAgnosticLineItemId'];
          var lineItemArrLen = lineItemArr[0].length;
          //Line Item New Changes - Starts
          var backfill = true;
            var norefreshval = 0;
            var timeoutval = adTimeInterval;
          if(lineItemArrLen>0){
            for(l=0;l<lineItemArrLen;l++){
              var tmplineItemArr=lineItemArr[0][l]['lineitem'];
              var tmprefreshval=lineItemArr[0][l]['refreshval'];
                  if (tmprefreshval != null && tmprefreshval != '' && tmprefreshval != undefined) {
                      if(tmprefreshval == 0) {
                        if (tmplineItemArr.includes(lineItem)) {
                            backfill = false;
                            norefreshval = 0;
                            timeoutval = 0;
                        }
                      } else if(tmprefreshval == 1) {
                            if (tmplineItemArr.includes(lineItem)) {
                                backfill = true;
                                norefreshval = 0;
                                timeoutval = adTimeInterval;
                            }
                      } else {
                            if (tmplineItemArr.includes(lineItem)) {
                                backfill = true;
                                norefreshval = 1;
                                timeoutval = tmprefreshval;
                            }
                      }
                  }
                  if (document.getElementById(slotId)) {
                    document.getElementById(slotId).setAttribute('data-timeout', timeoutval);
                    document.getElementById(slotId).setAttribute('data-norefresh', norefreshval);
                    document.getElementById(slotId).setAttribute('data-isbackfill',backfill);
                  }
            }
          }
          //Line Item New Changes - Ends
            }else{
               if (document.getElementById(slotId)) {
                  document.getElementById(slotId).setAttribute('data-timeout', adTimeInterval);
                  document.getElementById(slotId).setAttribute('data-norefresh', 0);
                }
                var backfill = true;
                if (document.getElementById(slotId)) {
                        document.getElementById(slotId).setAttribute('data-isbackfill',backfill);
                } 
            }
            if(document.getElementById(slotId)){
            document.getElementById(slotId).setAttribute('data-isbackfill',backfill);
            }
          }else{
            if (document.getElementById(slotId)) {
            var backfill = false;//res.isBackfill;
            document.getElementById(slotId).setAttribute('data-isbackfill',backfill);
        }
         }
        if(event.isEmpty){
            var eachSize = event.slot.getSizes()[0]['width']+'x'+event.slot.getSizes()[0]['height'];
                    var slotSizeArr = ['1x1'];
                    if(!slotSizeArr.includes(eachSize)){ 
          var topSlotSize=['728x90','970x90','970x250'];
          if(topSlotSize.includes(eachSize)){
            if(typeof backupAdsGlobalTop === 'function'){
                  backupAdsGlobalTop(slotId,43,'9de4f035bc8106094a8824fc0cfb6de3');
            }
          }else{
            if(typeof backupAdsGlobalMiddle === 'function'){
                backupAdsGlobalMiddle(slotId,43,'9de4f035bc8106094a8824fc0cfb6de3');
            }
          }
          }
        }
 /*Dynamic Ad Load Function Call*/
        if(dynFlag==0){
          if(typeof dynamicSlotExecute === 'function'){
              dynFlag=1;
              if(typeof oi_ad_config_dynamic_slot !== 'undefined' && oi_ad_config_dynamic_slot.length > 0){
                dynamicSlotExecute();
              }
          }
        }
        /*Dynamic Ad Load Function Call*/
});
});
</script> <style>
.inArticleAd{
  text-align: left;
}
.os-sports-wrapper .os-sports-article-rt .os-sports-related-articles{
  clear: both;
}
#div-gpt-ad-1506054776114-0{
  text-align: center;
}
#div-gpt-ad-1542196312003-0{
  clear: both;
}

.cmscontent-article1 {
        float: none;
        clear: both;
        text-align: center;
        width: 600px;
        min-height: 250px;
        padding: 10px 0;
        background: #f6f6f6;
        margin: 10px 0;
    }
    
    .cmscontent-article2 {
        float: none;
        clear: both;
        text-align: center;
        width: 600px;
        min-height: 250px;
        padding: 10px 0;
        background: #f6f6f6;
        margin: 10px 0;
    }
    
    .cmscontent-article1, .cmscontent-article2, .cmscontent-bottom {
        height: auto!important;
    }
    #are-slot-1, #are-slot-2, #are-slot-3, #are-slot-4, #are-slot-5 {
    background: #f5f5f5;
    margin: 14px 0;
    min-height: 280px;
    text-align: center;
    padding: 12px 0;
}

#are-slot-1::before, #are-slot-2::before, #are-slot-3::before, #are-slot-4::before, #are-slot-5::before {
    content: "Advertisement";
    display: block;
    font-size: 10px;
    font-family: arial;
    padding-bottom: 5px;
    color: #ccc;
    text-transform: uppercase;
}
.refreshInarticleAd{
  display: none!important;
}

</style> <style>
#tag-container {
    clear: both;
}

.listicalSliderContent{
	clear:both;
}
#adg_related_right li {
    border-bottom: none!important;
    padding-bottom: 0px;
}
#left-native-ad li {
height: 75px;
}
	.os-breadcrumb-nav div {
    display: inline-block;
        min-height: 27px;
}
.written-by, .posted-by{
	display: inline-block;
}
.os-sports-article figure{
	margin: 0;
	padding: 0;
}
.inArticleAd{
	width: 320px;
	float:left;
}

#twitter-widget-0 {
      width: 100% !important;
    }

#twitter-widget-0 > .EmbeddedTweet{
     max-width: 100% !important;
    }
.EmbeddedTweet{
	max-width: 100% !important;
	width: 100% !important;
}

.twitter-tweet{
	max-width: 100% !important;
	width: 100% !important;
}
figcaption{
	text-align: center;
}

.plr_right {
    /*margin-left: 300px;
    margin-top: -141px;
    width: 250px;*/
}
.cricketTabBlock {
    margin-bottom: 20px;
}
.cricTabsMain {
    height: 30px;
    clear: both;
}
.cricTabsMain ul {
    list-style-type: none;
    font-family: 'Oswald', Arial, Helvetica, sans-serif;
    padding: 0;
}
.cricTabsMain ul li {
    display: inline;
    width: 50%;
    float: left;
}
.cricTabsMain ul li a {
    display: block;
    text-align: center;
    color: #000;
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    background: #fff;
    outline: none;
}
.cricTabsMain ul li a.selected {
    background: #f8f8f8;
    border: 1px solid #dedede;
    border-bottom: 0 none;
}
.cricketTabContent {
    padding: 10px;
    border: 1px solid #dedede;
    background: #f8f8f8;
}
.imgBorder1 {
    border: 1px solid #CCCCCC;
    padding: 3px;
    box-shadow: 1px 1px 1px #ccc;
}
.cricLeftContent {
    float: left;
    overflow: hidden;
    width: 100px;
}
.cricRightContent {
    margin-left: 115px;
}
.cricRightContent ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.cricRightContent ul li a {
    background: #1f97cd;
    border: 1px solid #0074a2;
    color: #fff;
    display: inline;
    font-size: 14px;
    font-weight: bold;
    margin: 0 5px 5px 0;
    padding: 5px 20px;
    text-decoration: none;
    float: left;
    border-radius: 4px;
    line-height: 22px;
    text-align: center;
    box-shadow: 0 1px 0 rgba(120, 200, 230, 0.5) inset, 0 1px 0 rgba(0, 0, 0, 0.15);
    transition-duration: 1s;
    transition-property: color;
}
.cricRightContent ul li a:hover {
    background: #0d85bc;
}
.recent-match {
    color: #000;
    font-weight: bold;
    font-size: 14px;
    padding: 0;
    text-align: left;
    clear:both;
}
.recent-match a {
    color: #0066cc;
    font-weight: normal;
}
/* End of connector css */
.os-sports-article p{
	padding-bottom: 10px;
}
#div-gpt-ad-1470917625077-0{
	padding-top: 10px;
}
.tags_head {
    background: #ee163b;
    color: #fff;
    float: left;
    font-size: 14px;
    font-weight: normal;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 4px;
    padding-bottom: 5px;
}
#tag-container a {
    background: #e2e2e2 none repeat scroll 0 0;
    border: 1px solid #f1f1f1;
    color: #ee163b;
    display: inline-block;
    font-size: 14px;
    margin-right: 5px;
    padding: 8px;
}
.article-others a {color: #ee163b;}
.assigned_video{
        width:600px!important;
}
.assigned_video_heading{
padding: 10px 0 11px 0;
    font-weight: bold;
    font-size: 16px;
	text-align: center;
}
.listicalSliderContent {position: relative;overflow: hidden;display: block;margin: 0 auto;}

.listical-photo-share {

    background: #000;

    opacity: 0.7;

    border-radius: 50%;

    position: absolute;

    bottom: 15px;

    right: 5px;

    width: 35px;

    height: 35px;

    line-height: 35px;

    cursor: pointer;

    z-index: 1000;

    transition: right 0.8s ease-in-out 0s;

    font-size: 22px;

    color: #fff;

    text-align: center;

    display:none;

}

.listical-photo-share-links {

    background: #000;

    opacity: 0.7;

    position: absolute;

    bottom: 12px;

    right: -250px;

    text-align: center;

    padding: 5px 40px 5px 0;

    z-index: 10000;

    border-radius: 0;

    transition: right 0.8s ease-in-out 0s;

    width: auto;

    overflow: hidden;

    display:none;

}

.listical-photo-share-links a {

    color: #fff!important;

    font-size: 24px;

    margin: 0 8px;

    text-decoration: none!important;

}

.listicalSliderContainer.show-social .listical-photo-share-links {right: 0px;width:auto;}

.listicalSliderContainer.show-social .listical-photo-share {right: -250px;}

.listical-photo-share-close {

    position: absolute;

    cursor: pointer;

    color: #fff;

    font-size: 24px;

    right: 5px;

    top:5px;

}

.listical-ad-right {height:250px; margin:10px;width:300px;padding: 0;float: right;}

.listical-ad-left {
    clear: both;
    display: block;
    float: none;
    margin: 0 auto;
    text-align: center;
    background: #f6f6f6;
    width: 100%;
    padding: 10px 0;
}

.cmscontent-article2 {
    float: none;
    clear: both;
    width: 100%;
    display: block;
    background: #f6f6f6;
    padding: 10px 0;
    text-align: center;
}

.listical-top-ad {height:250px; margin: 0 20px 10px 0;width:300px;padding: 0;float: left;}

.listical-ad-center {height:250px; margin: 20px auto;width:300px; float: none;}
.giz-subscribe-textbox {
    width: 100%;
    line-height: 14px;
}
.os-sports-article-block.clearfix {
    display: flex;
}
.os-sports-article-rt.os-rt {
    padding-left: 40px;
}
.leftSideAdg {
    position: -webkit-sticky;
    position: sticky;
    height: 600px;
    top: 56px;
    width: 300px;
    margin-top: 10px;
}
body {
    background: #fbfbfb!important;
    }
    .os-vuukle-yt-share {clear: both;}
    .os-sports-wrapper{    padding: 0!important;}
    .os-sports-wrapper .os-sports-article-block{padding: 0!important}
    .written-by, .posted-by{
            float: left;
    font-size: 14px;
    padding-right: 10px;
    font-family: arial;
    line-height: 30px;
    color: #6c6360;
    }
    .os-sports-wrapper .os-breadcrumb,.os-breadcrumb{padding: 0!important}
.os-breadcrumb .os-posted-by span {
    color: #6c6360;
    display: block!important;
 padding-left: 0!important; 
     line-height: 30px;
}
.os-breadcrumb .os-posted-by a{ color: #6c6360!important;}
.os-breadcrumb .os-posted-by{    font-family: arial;padding: 0!important;}
.os-ad{    padding: 24px 0px 24px 0;}
.oi-header-ad {
    border-bottom: 1px solid #eceaeb;
}
.breadcrumb-arrow {
    position: relative;
    padding-left: 20px;
}
.os-breadcrumb .os-posted-by a strong,.author-profile.written-by strong {
    font-weight: normal;
}
.breadcrumb-arrow:before {
    background: url(/images/bredcrumb-arrow-grey.svg) no-repeat 0 0;
    width: 16px;
    height: 16px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    transform: rotate(180deg);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
}
.breadcrump a {
    color: #333;
    font-size: 13px;
}
.os-breadcrumb {
    color: #333;
    font-size: 13px;
    margin-top: 24px;
    clear: both;
}
.heading {
        font-size: 26px!important;
    color: #000;
    font-weight: 600!important;
    line-height: 34px;
    margin: 10px 0!important;
    padding: 0 !important;
}
.os-sports-article-block.clearfix{display: block!important;}
.os-sports-wrapper .os-sports-article-lt{
        font-size: 16px;
    width: 598px;
    padding: 0 20px;
    margin: 0 20px;
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
}
.os-sports-wrapper .os-sports-article-rt {
    width: 300px;
    float: left!important;
}

.os-sports-m-news-l{
        width: 980px!important;
    float: left;
}
.os-sports-article-rt.os-rt{padding-left:0!important;}
.gallery-embed-container-mykhel{    clear: both;}
iframe.instagram-media {
    width: 100%;
}
.deepLinkPromo {
    padding: 10px 20px;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    margin: 10px 0 10px 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 60px;
    background: #f2fafc;
}
.deepLinkPromo a{color: #262223}
.deepLinkPromoImg {
    float: left;
    padding-right: 10px;
   
}
.os-sports-wrapper .os-sports-article-lt p{
    color: #000;
    font-size: 16px;
    line-height: 30px;
    padding: 12px 0;
    font-weight: 400;
    letter-spacing: 0;
}
.os-sports-wrapper .os-sports-article-img{
    border-bottom: 0 none!important;
}
.image-text-links {
    position: relative;
    padding: 10px 20px 0;
    color: #727272;
    text-align: left;
    font-weight: 400;
    font-size: 15px;
}
/*new slider related css code*/
.oi-trendingarticle-wrapper ul::-webkit-scrollbar{display: none;}
.oi-trendingarticle-wrapper ul {scrollbar-width: none;}
.oi-trending-mainsection {overflow: hidden;position: relative;border-top: 1px solid #ebebeb;margin: 24px 0 0 0;}
.oi-trendingarticle-wrapper ul {
    white-space: nowrap;
    overflow-x: hidden;
    padding-bottom: 15px;
    width: 100%;
}
.oi-trendingarticle-wrapper ul li {display: inline-block;width: 250px;margin-right: 5px;vertical-align: top;box-shadow: 1px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.10);margin-left: 2px;background: var(--color-secondary);}
.article-thumb img {display: block;max-width: 100%;}
.article-title-wrap {padding: 10px 10px;font-size: 16px;color: #262223;font-weight: 400;text-align: left;height: 74px;white-space: initial;overflow: hidden;line-height: 26px;background: #ffffff;text-transform: capitalize;}
.article-title-wrap a {color: #262223 !important}
.oi-trendingarticle-wrapper {padding: 0 0px;}
.oi-category-wrap {
    position: relative;
}
.oi-category-headinwrap {padding: 24px 0 12px 0;}
.oi-heading {
    font-size: 20px;
    color: var(--font-color);
    font-weight: bold;
    text-transform: capitalize;
    position: relative;
    line-height: 25px;
}
.oi-prev-next-nav {position: absolute;right: 0;top: 24px;width: 90px;}                              
/* Navigation Click Scroll */
.next-nav {border-radius: 50%;position: absolute;right: 0px;top: 50%;background-color: rgba(51,51,51,.4);width: 36px;height: 36px;cursor: pointer;margin: auto;text-indent: -9999px;}
.next-nav::before {content: "";position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;background: url(/images/arrow-white-right.svg) no-repeat 0 0;width: 16px;height: 16px;}
.prev-nav {border-radius: 50%;position: absolute;left: 0px;top: 50%;background-color: rgba(51,51,51,.4);width: 36px;height: 36px;cursor: pointer;margin: auto;text-indent: -9999px;}
.prev-nav::before {content: "";position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;background: url(/images/arrow-white-right.svg) no-repeat 0 0;width: 16px;height: 16px;-webkit-transform: rotate(180deg);-moz-transform: rotate(180deg);transform: rotate(180deg);}

.next-nav:hover, .prev-nav:hover {background-color: #ff003c;}
.oi-scores-slider {position: relative;scroll-behavior: smooth;transition: all 0.8s ease 0s;-moz-transition: all 0.8s ease 0s;-o-transition: all 0.8s ease 0s;}
.disabled {display: none;}
.comments-wrap{display: none!important;}
.article-others a{    color: #06c;}
.article-story-pub-date, .article-others {
    font-size: 14px;
    color: #6c6360;
    line-height: 30px;
}
.cmscontent-left-article{margin-top:24px;}
.fantasypro {
    font-size: 16px!important;
    color: #000!important;
    background: #f2fafc;
    padding: 10px 20px!important;
    margin: 24px 0 32px 0;
}
.listical-ad-left,.cmscontent-article2{margin: 12px 0!important;}
.notification-outerblock{display: none!important;}
.oi-left-heading {
    font-size: 16px;
    font-weight: normal;
    text-transform: capitalize;
    margin: 12px 0 24px 0px !important;
    color: #fff;
}
.oi-left-heading a, .oi-left-heading span {color: #fff;padding: 8px 20px;background: #ff003c;display: inline-block;line-height: 24px;}
.oi-related ul {padding: 0;}
.oi-related ul li:last-child {border-bottom: 0 none;}
.oi-related ul li a {
    color: #000;
    font-size: 15px;
}
.oi-related .news-block-image {display: block;vertical-align: top;}
.oi-related .news-block-desc {font-size: 16px;color: #262223;padding: 12px 0 00px;line-height: 30px;}
.oi-related .oi-subnews-container li a {white-space: normal;display: block;}
.oi-subnews-container ul li {
    padding-bottom: 24px;
    border-bottom: 1px solid #ededed;
    margin-bottom: 24px;
}
#giz-subscribe,#giz-unsubscribe,#giz-emailsubscribe{display: none!important;}
#aniviewWrapper{    margin: 12px 0;}
</style> <link href="/common/adaptive/css/liveblog.css?v=6" rel="stylesheet" type="text/css"> <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage":{
    "@type":"WebPage",
    "@id":"https://www.mykhel.com/more-sports/75th-strandja-memorial-boxing-tournament-nikhat-zareen-arundhati-choudhary-enter-semis-gen-262983.html"
  },
  "headline": "75th Strandja Memorial Boxing Tournament: Nikhat Zareen, Arundhati Choudhary enter semis",
  "url":"https://www.mykhel.com/more-sports/75th-strandja-memorial-boxing-tournament-nikhat-zareen-arundhati-choudhary-enter-semis-gen-262983.html",
  "image": { 
    "@type": "ImageObject",
    "url": "https://www.mykhel.com/img/2024/02/nikhat-zareen-in-action-at-the-75th-strandja-memorial-tournament_1707406799092-1200x675-20240208220806.jpg",
    "height": 675,
    "width": 1200
  },
  "thumbnailUrl":"https://www.mykhel.com/img/128x50/2024/02/nikhat-zareen-in-action-at-the-75th-strandja-memorial-tournament_1707406799092-1200x675-20240208220806.jpg",
  "datePublished": "2024-02-08T22:26:08+05:30",
  "dateModified": "2024-02-08T22:26:08+05:30",
  "author": {
    "@type": "Person",
    "url": "https://www.mykhel.com/authors/natashaa-das.html",
    "name": "Natashaa Das"
  },
  "publisher": {
    "@type": "Organization",
    "name": "myKhel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mykhel.com/images/amp-mykhel-logo.png",
      "width": 204,
      "height": 60
    }
  },
  "articleSection":"More Sports",
  "description": "Nikhat Zareen and Arundhati Choudhary advance to semifinals, showcasing Indias boxing prowess on the international stage.",
  "keywords": "boxing, Strandja Memorial Tournament, Indian boxers, Nikhat Zareen, Arundhati Choudhary, indian Boxing, nikhat zareen boxing, arundhati choudhary boxing",
  "articleBody":"Sofia, (Bulgaria), Feb 8: The 75th Strandja Memorial Tournament has become a battleground for excellence and resilience as Indian boxers Nikhat Zareen and Arundhati Choudhary advance to the semifinals with commanding performances.The event, one of Europes oldest international sports competitions, is witnessing the participation of over 300 pugilists from 30 countries, showcasing the global appeal and competitive spirit of the sport.Nikhat Zareens Path to VictoryReigning World Champion Nikhat Zareen, competing in the 50kg category, faced a tough opponent in Frances Lkhadiri Wassila. The match was a nail-biter from the start, with both boxers demonstrating their readiness and tactical acumen.Nikhats agility and counter-attacking prowess allowed her to edge out Wassila in the initial rounds. The bouts climax saw Nikhat at her absolute best, outmaneuvering Wassilas aggressive attempts and securing a unanimous 5-0 victory. Her next challenge is against Bulgarias Zlatislava Chukanova in the semifinals.Arundhati Choudhary Dominates the RingArundhati Choudhary, competing in the 66kg weight class, displayed a similar dominance in her bout against Serbias Matovic Milena. The match began with both boxers measuring each other, but it was Arundhati who quickly seized control. Her aggressive tactics paid off, securing her a comfortable win in the first round.Maintaining her momentum and showcasing her defensive skills, Arundhati blocked her opponents desperate attempts in the final round, clinching a 5-0 victory and advancing to the semifinals where she will face Slovakias Jessica Triebeľov aacute;.Challenges and Upcoming MatchesWhile Nikhat and Arundhatis victories were highlights of the day, Sakshi (57kg) faced a heartbreaking 2-3 defeat against Uzbekistans Mamajonova Khumorabonu, bowing out of the tournament in the quarterfinals.However, the Indian contingent has more representation with Jugnoo (86kg), Sagar (+92kg), and Naveen (92kg) scheduled for their respective matches later tonight. Additionally, seven Indian pugilists, including Amit Panghal (51kg) and Deepak (75kg), are gearing up for their quarter-final matches on Friday, promising more action and potential victories for India.The 75th Strandja Memorial Tournament has proven to be a fruitful outing for the Indian boxing contingent so far, with notable performances and advancements. As the tournament progresses, the focus remains on the potential of Indian boxers to secure more victories and possibly clinch titles in this prestigious event.With the backing of their rigorous training and sheer determination, the Indian boxers are set to make their mark on the international stage, adding to the glory of Indian sports."
}
</script> <script type="application/ld+json">
{
        "@context" : "https://schema.org", 
        "@type": "WebPage",
        "description": "Nikhat Zareen and Arundhati Choudhary advance to semifinals, showcasing Indias boxing prowess on the international stage." ,
         "url":"https://www.mykhel.com/more-sports/75th-strandja-memorial-boxing-tournament-nikhat-zareen-arundhati-choudhary-enter-semis-gen-262983.html",
        "name": "75th Strandja Memorial Boxing Tournament: Nikhat Zareen, Arundhati Choudhary enter semis"
} 
</script> <script type="application/ld+json">
{ "@context" : "https://schema.org",
  "@type" : "Organization",
  "name" : "myKhel",
  "url" : "https://www.mykhel.com",
  "logo": {
      "@type": "ImageObject",
      "url": "https://www.mykhel.com/images/amp-mykhel-logo.png",
      "width": 204,
      "height": 60
    },
  "sameAs" : [ "https://www.facebook.com/mykhelcom/",
  "https://twitter.com/mykhelcom"]
}
</script> <script type="application/ld+json">
   {"@context":"https:\/\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https:\/\/www.mykhel.com"},{"@type":"ListItem","position":2,"name":"more-sports","item":"https:\/\/www.mykhel.com\/more-sports\/"}]}
</script> </head> <body> <div class="os-c-sports oi-wrapper">  <header> <div class="oi-header"> <div class="oi-header-top clearfix"> <div class="oi-header-lang"> <div class="oi-header-langtext"> <span class="oi-header-lang-selected">English Edition <i></i></span></div> <div class="oi-header-langsel">  <ul class="clearfix"> <li> <a href="https://telugu.mykhel.com/" target="_blank" class="lang-telugu">తెలుగు</a> </li> <li> <a href="https://hindi.mykhel.com/" target="_blank" class="lang-hindi">हिन्दी</a> </li> <li> <a href="https://kannada.mykhel.com/" target="_blank" class="lang-kannada">ಕನ್ನಡ</a> </li> <li> <a href="https://malayalam.mykhel.com/" target="_blank" class="lang-malayalam">മലയാളം</a> </li> <li> <a href="https://tamil.mykhel.com/" target="_blank" class="lang-tamil">தமிழ்</a> </li> <li> <a href="https://bengali.mykhel.com/" target="_blank" class="lang-tamil last">বাংলা</a> </li> </ul> </div> </div> <div class="oi-header-updated-datetime" style="min-width: 280px;"> <div class="oi-header-date" id="curDate" style="min-width: 120px;"> </div> <div class="oi-header-updatedtime" id="time" style="min-width: 140px;"> </div> </div>  <div class="oi-header-followus"> <div class="oi-header-social"><a href="https://www.facebook.com/mykhelcom?utm_medium=Desktop&amp;utm_source=MK-EN&amp;utm_campaign=menu-header"><i class="fa fa-facebook"></i></a> <a href="https://twitter.com/mykhelcom?utm_medium=Desktop&amp;utm_source=MK-EN&amp;utm_campaign=menu-header"><img src="/images/twitter-black.svg" alt="twitter" width="24" height="20"></a> <a href="https://www.youtube.com/channel/UCqTa3sNT6SfiQ2DQK_kuWlA?utm_medium=Desktop&amp;utm_source=MK-EN&amp;utm_campaign=menu-header" style="width: 24px;vertical-align:middle;margin-left: 8px;"> <img alt="YouTube" src="/images/youtube-icon-new.png" data-pagespeed-no-defer></a> </div> <style type="text/css">
        .overlay {position: fixed;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0,0,0,0.8);z-index: 100000;}
                        .addr-bar {position: fixed;left: 0;top: 0;z-index: 1000000;}
                        .arrow {position: fixed;left: 120px;top: 40px;z-index: 1000000;}
                        .click-unblock {position: fixed;left: 250px;padding: 20px 10px;background: #0c8043;border: 1px solid #fff;font-size: 14px;color: #fff;font-family: Arial, Helvetica, sans-serif;z-index: 1000000;top: 200px;border-radius: 5px;width: 320px;text-align: center;}
                        .click-unblock img {vertical-align: middle;}
                        .click-close {position: fixed;right: 100px;padding: 15px 30px;background: #4c4c4c;border: 1px solid #fff;font-size: 14px;color: #fff;font-family: Arial, Helvetica, sans-serif;z-index: 1000000;top: 120px;border-radius: 5px;cursor: pointer;}
                        .notf-sampletext {font-size: 16px;color: #fff;font-family: Arial, Helvetica, sans-serif;position: fixed;top: 110px;left: 250px;width: 320px;z-index: 1000000;line-height: 20px;}
                        .site {margin: o auto;text-align: center;}
                        .subscribe-box {text-align: center;position: fixed;left: 250px;top: 260px;width: 445px;height: 344px;margin: auto;z-index: 1000000;}
                        .manage-notification-block-top img {margin: 0;}
.manage-notification-block-firefox-content {
    width: 600px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 20px;
    background: #fff;
    z-index: 1000000000;
    height: 320px;
    font-family: Arial;
}
                        .manage-notification-block-top-firefox ul {margin-left: 20px;}
                        .manage-notification-block-top-firefox ul li {
    padding: 3px 0;
    font-size: 16px;
    color: #000;
    list-style-type: decimal;
}
.manage-notification-heading {font-weight: bold;}
.click-close-firefox {position: fixed;right: 100px;padding: 15px 30px;background: #4c4c4c;border: 1px solid #fff;font-size: 14px;color: #fff;font-family: Arial, Helvetica, sans-serif;z-index: 1000000000;top: 120px;border-radius: 5px;cursor: pointer;}
</style> <div class="nav-notification"> <a href="javascript:void(0);" class="notification-bell ismovement" style="cursor: pointer; margin: 0px 5px 0 5px; display: none; float: left;" id="notification_bell"><span class="notification-num" style="display: none;"></span><img data-pagespeed-no-defer src="/images/bell-new-2023.svg" width="25" height="25"></a> </div> <div class="nav-notification"> <a href="javascript:void(0);" class="notification-bell-inactive" style="cursor: pointer; margin: 0px 5px 0 5px; float: left; display: none;" id="notification_bell_inactive"><img data-pagespeed-no-defer src="/images/bell-1.svg" width="25" height="25"></a> </div> <div class="manage-notification" style="display: none;"> <div class="manage-notification-close"> <i class="fa fa-close"></i> </div>
You can manage your notification subscription by clicking on the icon
</div> <div class="manage-notification-block-top" style="display: none;"> <div class="addr-bar"><img src="https://images.oneindia.com/notification/images/addr-bar.png?q=1" alt data-pagespeed-no-defer /></div> <div class="overlay" style></div> <div class="arrow"><img src="https://images.oneindia.com/notification/images/arrow1.png" alt data-pagespeed-no-defer /></div> <div class="notf-sampletext">To start receiving timely alerts, as shown below click on the Green “lock” icon next to the address bar</div> <div class="click-unblock"><img src="https://images.oneindia.com/notification/images/lock.png" alt data-pagespeed-no-defer /> Click it and Unblock the Notifications</div> <div class="click-close">Close X</div> <div class="subscribe-box"><img src="https://images.oneindia.com/notification/images/subscribe-box.png" alt data-pagespeed-no-defer /></div> </div> <div class="manage-notification-block-top-firefox" style="display: none;"> <div class="overlay" style></div> <div class="click-close-firefox">Close X</div> <div class="manage-notification-block-firefox-content"> <div class="manage-notification-heading">To Start receiving timely alerts please follow the below steps:</div> <ul> <li>Click on the Menu icon of the browser, it opens up a list of options.</li> <li>Click on the “Options ”, it opens up the settings page,</li> <li>Here click on the “Privacy & Security” options listed on the left hand side of the page.</li> <li>Scroll down the page to the “Permission” section .</li> <li>Here click on the “Settings” tab of the Notification option.</li> <li>A pop up will open with all listed sites, select the option “ALLOW“, for the respective site under the status head to allow the notification.</li> <li>Once the changes is done, click on the “Save Changes” option to save the changes.</li> </ul> </div> </div> <div class="notification-wrapper" style="display: none;"> <div class="notification-arrow"></div> <div class="popup-notification-header clearfix"> <div class="popup-notification-text" id="popup-notification-text"> <i class="fa fa-arrow-left"></i> Notifications
</div> <div class="popup-notification-on-off onstate"> <span class="on-off-link"></span> </div> </div> <div class="notification-content"> <div id="notf-cont"> <div class="notification-clear"><a href="javascript:void(0);">Clear All</a></div> <ul id="not-content"></ul> </div> <div class="notification-text" style="display: none;">No Notifications</div> </div> </div> </div> </div> <div class="oi-header-navlogo clearfix"> <div class="oi-header-logo"><a href="/"><img src="/images/mykhel-logo.svg" alt="Mykhel" /></a></div> <div class="oi-header-navigation"> <ul class="clearfix"> <li class="mainclass"> <a href="https://www.mykhel.com/more-sports"> All Sports </a> </li>   <li class="mainclass"><a href="/kabaddi/pro-kabaddi/"> Pro Kabaddi </a></li> <li class="mainclass submenu"> <a href="https://www.mykhel.com/cricket/"> Cricket <span class="navarrow"></span></a> <div class="oi-nav-block subnav"> <ul> <li> <a href="https://www.mykhel.com/cricket/news/" target="_blank" class="submenu-link1"><span>News</span></a> </li> <li> <a href="https://www.mykhel.com/cricket/schedule/" target="_blank" class="submenu-link1"><span>Fixtures</span></a> </li> <li> <a href="https://www.mykhel.com/cricket/results/#page1" target="_blank" class="submenu-link1"><span>Results</span></a> </li> <li> <a href="https://www.mykhel.com/cricket/series/" target="_blank" class="submenu-link1"><span>Series</span></a> </li> <li> <a href="https://www.mykhel.com/cricket/teams/" target="_blank" class="submenu-link1"><span>Teams</span></a> </li> <li> <a href="https://www.mykhel.com/cricket/icc-rankings/" target="_blank" class="submenu-link1"><span>ICC Rankings</span></a> </li> <li> <a href="https://www.mykhel.com/cricket/records-stats/" target="_blank" class="submenu-link1"><span>Records</span></a> </li> <li> <a href="https://www.mykhel.com/cricket/live-scores/" target="_blank" class="submenu-link1"><span>Scores</span></a> </li> </ul> </div> </li> <li class="mainclass  submenu"> <a href="https://www.mykhel.com/football/"> Football <span class="navarrow"></span></a> <div class="oi-nav-block subnav"> <ul> <li> <a href="https://www.mykhel.com/football/news/" target="_blank" class="submenu-link1" itemprop="url"><span itemprop="name">News</span></a> </li> <li> <a href="https://www.mykhel.com/football/rumours/" target="_blank" class="submenu-link1" itemprop="url"><span itemprop="name">Rumours</span></a> </li> <li> <a href="https://www.mykhel.com/football/transfer-news/" target="_blank" class="submenu-link1" itemprop="url"><span itemprop="name">Transfers</span></a> </li> <li> <a href="https://www.mykhel.com/football/leagues/" target="_blank" class="submenu-link1" itemprop="url"><span itemprop="name">Leagues</span></a> </li> </ul> </div> </li> <li class="mainclass"> <a href="https://www.mykhel.com/hockey/news/"> Hockey </a> </li> <li class="mainclass"> <a href="https://games.mykhel.com/"> Gaming </a> </li>    <li class="more-links" title="More"> <a href="javascript:void(0);" class="more"><i></i></a> </li> </ul> </div> <div class="oi-header-searchblock"> <div class="oi-header-search os-header-rt-search-b"></div> </div> <div class="oi-header-searchbox"> <input type="text" name="search" id="oneindia_search" placeholder="Search Latest News, Photos, Videos" class="oi-header-searchtextbox"><span class="oi-header-closebtn"></span> </div> <div class="oi-header-morenavigation"> <ul> <li class="mainclass"> <a href="https://www.mykhel.com/webstories/"> Webstories </a> </li> <li class="mainclass"> <a href="https://www.mykhel.com/topic/wrestling"> Wrestling </a> </li> <li class="mainclass"> <a href="https://www.mykhel.com/motorsport/news/"> Motorsports </a> </li> <li class="mainclass"> <a href="https://www.mykhel.com/tennis/">Tennis</a> </li> <li class="mainclass"><a href="https://www.mykhel.com/badminton/news/"> Badminton </a></li> <li class> <a href="https://www.mykhel.com/kabaddi/news/">Kabaddi </a> </li> <li><a href="https://www.mykhel.com/wwe/news/" target="_blank"> WWE</a></li> <li class><a href="https://www.mykhel.com/indian-sports-leagues/" target="_blank">ISL</a></li> <li><a href="https://www.mykhel.com/photos/"> Photos </a></li> </ul> </div> </div> </header> <div class="cmscontent-top inhouse-content" id="cmscontent-top" data-zoneId="{&quot;backfill&quot;:&quot;37&quot;,&quot;inhouse&quot;:&quot;39&quot;}" data-reviveId="{&quot;backfill&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;,&quot;inhouse&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;}"> <div class="oi-header-ad" style="min-height: 90px;" data-zoneId="{&quot;backfill&quot;:&quot;37&quot;,&quot;inhouse&quot;:&quot;39&quot;}" data-reviveId="{&quot;backfill&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;,&quot;inhouse&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;}"> <div id="div-gpt-ad-1501582186001-5" class="oiad1 oi-axt oiadv" data-adval="0" data-elementid="0" data-exec="0"></div> <div id="div-gpt-ad-1501582186001-9" class="oiad1 oi-axt oiadv" data-adval="0" data-elementid="0" data-exec="0"></div> <div id="are-slot-leaderboard" class="oiad oi-axt oiadv"></div> </div> </div> <script type="text/javascript">
function setUserCookie(name, value, expires, path, domain, secure) {
    var chkcookiepolicy = getUserCookie('cookiePolicy');
  console.log(chkcookiepolicy);
  if(chkcookiepolicy !=0){
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60;
    }

    var expires_date = new Date(today.getTime() + (expires));

    document.cookie = name + '=' + escape(value) +
        ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
    ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ((secure) ? ';secure' : '');
    }
}

function deleteUserCookie(name, path, domain) {
    if (getCookie(name)) document.cookie = name + '=' +
        ((path) ? ';path=' + path : '') +
        ((domain) ? ';domain=' + domain : '') +
        ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}
function checkUserCookie(cookie_name) {
    var location_details = getUserCookie(cookie_name);
    if (location_details == null || location_details == "") {
        return false;
    } else if (location_details != "") {
        return true;
    }
}
function getUserCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}
</script> <style type="text/css">
#notify-subscribe {
    font-weight: bold;
    color: #0066cc;
    text-decoration: underline;
    cursor: pointer;
}
</style> <link type="text/css" rel="stylesheet" href="/common/adaptive/css/desktop-notification.css?v=1.0.10" />  <div class="notf-overlay"></div> <div class="instant-updates-bottom" id="oiNotification" style="display:none!important;"> <div class="instant-updates-mid"> <div class="instant-updates-left" id="enable-btn"> <div class="instant-updates-content"> <div class="instant-updates-bellicon"> <i class="updates-bellicon"></i> </div> <span>Get Instant News Updates</span> </div> <div class="instant-updates-arrow">Enable</div> </div> <span class="instant-updates-close">x</span> </div> </div> <div class="article-overlay"></div> <div class="notification-settings-popup"> <a href="javascript:void(0);" class="notification-settings notfset"><i class="fa fa-arrow-left"></i> Notification Settings</a> <a href="javascript:void(0);" class="article-popup-close">X</a> <div class="notification-overflow"> <div class="notification-settings-content"> <div class="notification-settings-heading">Time Settings</div> <div class="notification-settings-details clearfix"> <ul> <li><div class="compare-radio"> <label> <div class="squaredradio"> <input class="filter_by" name="block-radio" value="0" type="radio" checked="checked"> <i for="squaredradio"></i> </div> <span class="name">Don't Block</span> </label> </div> </li> <li><div class="compare-radio"> <label> <div class="squaredradio"> <input class="filter_by" name="block-radio" value="8" type="radio"> <i for="squaredradio"></i> </div> <span class="name">Block for 8 hours</span> </label> </div> </li> <li><div class="compare-radio"> <label> <div class="squaredradio"> <input class="filter_by" name="block-radio" value="12" type="radio"> <i for="squaredradio"></i> </div> <span class="name">Block for 12 hours</span> </label> </div> </li> <li><div class="compare-radio"> <label> <div class="squaredradio"> <input class="filter_by" name="block-radio" value="24" type="radio"> <i for="squaredradio"></i> </div> <span class="name">Block for 24 hours</span> </label> </div> </li> <li><div class="compare-radio"> <label> <div class="squaredradio"> <input class="filter_by" name="block-radio" value="1" type="radio"> <i for="squaredradio"></i> </div> <div class="name">
Dont send alerts during
<select class="alerts-time-selbox" id="block-from" name disabled="disabled"> <option value="1">1 am</option> <option value="2">2 am</option> <option value="3">3 am</option> <option value="4">4 am</option> <option value="5">5 am</option> <option value="6">6 am</option> <option value="7">7 am</option> <option value="8">8 am</option> <option value="9">9 am</option> <option value="10">10 am</option> <option value="11">11 am</option> <option value="12">12 pm</option> <option value="13">1 pm</option> <option value="14">2 pm</option> <option value="15">3 pm</option> <option value="16">4 pm</option> <option value="17">5 pm</option> <option value="18">6 pm</option> <option value="19">7 pm</option> <option value="20">8 pm</option> <option value="21">9 pm</option> <option value="22">10 pm</option> <option value="23">11 pm</option> <option value="24">12 am</option> </select>
to
<select class="alerts-time-selbox" id="block-to" name disabled="disabled"> <option value="1">1 am</option> <option value="2">2 am</option> <option value="3">3 am</option> <option value="4">4 am</option> <option value="5">5 am</option> <option value="6">6 am</option> <option value="7">7 am</option> <option value="8">8 am</option> <option value="9">9 am</option> <option value="10">10 am</option> <option value="11">11 am</option> <option value="12">12 pm</option> <option value="13">1 pm</option> <option value="14">2 pm</option> <option value="15">3 pm</option> <option value="16">4 pm</option> <option value="17">5 pm</option> <option value="18">6 pm</option> <option value="19">7 pm</option> <option value="20">8 pm</option> <option value="21">9 pm</option> <option value="22">10 pm</option> <option value="23">11 pm</option> <option value="24">12 am</option> </select> </div> </label> </div> </li> <li><div class="compare-radio"> <label> <div class="squaredradio"> <input class="filter_by" name="block-radio" value="9999" type="radio"> <i for="squaredradio"></i> </div> <span class="name">Switch Off</span> </label> </div> </li> </ul> </div> <span id="error_msg"></span> </div> <div class="notification-settings-bottomcontent"> <div class="notification-settings-clear"> <div class="notification-settings-heading" id="clear-inbox" style="display: none;">Clear My <a href="javascript:void(0);">notification inbox</a></div> </div> </div> <div class="notification-settings-btn">
Done
</div> </div> </div> <div class="notification-settings-clearbox"> <a href="javascript:void(0);" class="notification-settings clearnotf"><i class="fa fa-arrow-left"></i> Clear Notification</a> <a href="javascript:void(0);" class="article-popup-close">X</a> <div class="notification-overflow-clearbox"> <div class="notification-settings-heading">Do you want to clear all the notifications from your inbox?</div> </div> <div class="notification-settings-btn"> <a href="javascript:void(0);" class="yes">Yes</a> <a href="javascript:void(0);" class="no">No</a> </div> </div> <div class="article-slider-wrapper"> <a href="javascript:void(0);" class="article-popup-settings">Settings</a> <a href="javascript:void(0);" class="article-popup-close">X</a> <div class="article-slider"> <ul id="notification-content"> </ul> </div> <div class="article-slider-container" style="display: none;"> <div class="no-notification-wrapper"> <div class="no-notif-content"> <span>0</span> </div> <div class="no-notif-text">No New Notifications</div> </div> </div> </div> <script data-cfasync="false">  
function SetDay() {
  var thisDate = new Date();
  var day =  thisDate.toDateString();
  var todaytime = thisDate.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:true,});
    var today = day.split(/[ ,]/);
    var today1 = today.slice(1,3);
    var today2 = today1.join(" ");
  document.getElementById('curDate').innerHTML = today[0]+", " +today2+", " +today[3];
  document.getElementById('time').innerHTML = "Updated "+todaytime+" IST";

}
if (document.getElementById('curDate')) {
  SetDay();  
} 
</script>   <section><div id="containerMain" data-article-type data-content_id="262983" data-deeplink_flag="0" data-page_type="article" data-video-info data-video-position data-adcont_identity="false" data-comments="yes"></div> <div id="container" data-con_line="/more-sports/" data-category_name="more-sports" data-category_id="20546" data-parent_cat="more-sports" class="os-width os-sports-wrapper" data-content_id="262983" data-video-flag="false" data-slideshow="false"> <div class="os-sports-m-news clearfix"> <div class="os-sports-m-news-l os-lt clearfix"> <div class="os-sports-article clearfix"> <div class="os-sports-article-rt os-lt"> <div class="oi-related"> <h2 class="oi-left-heading"><span>Sporting Buzz</span> </h2> <section> <div class="oi-subnews-container"> <ul> <li class="clearfix"><a href="/cricket/u19-world-cup-final-is-india-u19-looking-to-avenge-senior-teams-loss-vs-australia-uday-saharan-reply-262985.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/ind-vs-aus-rohit-sharma-1707411172.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/ind-vs-aus-rohit-sharma-1707411172.jpg" alt="U19 World Cup Final: Is India U19 looking to avenge senior teams loss against Australia? Captain Uday Sharan answers" class="lazy" /> </picture> </div> <div class="news-block-desc"> U19 World Cup Final: Is India U19 looking to avenge senior teams loss against Australia? Captain Uday Sharan answers</div> </a> </li> <li class="clearfix"><a href="/football/al-hilal-vs-al-nassr-live-score-riyadh-season-cup-cristiano-ronaldo-updates-262981.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/alhilal-alnassr-live-score1-1707410027.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/alhilal-alnassr-live-score1-1707410027.jpg" alt="Al Hilal vs Al Nassr LIVE Score, Riyadh Season Cup Updates: Lineups Out, Match Starts at 11:30 pm IST" class="lazy" /> </picture> </div> <div class="news-block-desc"> Al Hilal vs Al Nassr LIVE Score, Riyadh Season Cup Updates: Lineups Out, Match Starts at 11:30 pm IST</div> </a> </li> <li class="clearfix"><a href="/cricket/pak-vs-aus-u19-world-cup-2024-semi-final-australia-beat-pakistan-in-a-nail-biting-thriller-262979.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/pak-vs-aus-u19-wc-1200-1707408725.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/pak-vs-aus-u19-wc-1200-1707408725.jpg" alt="PAK vs AUS, U19 World Cup 2024 Semi-Final: Tom Straker six-for, batters help Australia beat Pakistan in a nail-biting thriller; Ali Raza's heroics in vain" class="lazy" /> </picture> </div> <div class="news-block-desc"> PAK vs AUS, U19 World Cup 2024 Semi-Final: Tom Straker six-for, batters help Australia beat Pakistan in a nail-biting thriller; Ali Raza's heroics in vain</div> </a> </li> <li class="clearfix"><a href="/football/real-madrid-vs-girona-who-will-win-to-stay-top-of-la-liga-prediction-262895.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/real-madrid-vs-girona-fc-1707378208.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/real-madrid-vs-girona-fc-1707378208.jpg" alt="Real Madrid vs Girona: Can Los Blancos beat Girona to stay top of La Liga? Who Will Win the Match?" class="lazy" /> </picture> </div> <div class="news-block-desc"> Real Madrid vs Girona: Can Los Blancos beat Girona to stay top of La Liga? Who Will Win the Match?</div> </a> </li> <li class="clearfix"><a href="/badminton/paris-olympics-will-be-challenging-need-to-be-smarter-pv-sindhu-262969.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/pv-sindhu-olympics-1200-1707405246.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/pv-sindhu-olympics-1200-1707405246.jpg" alt="Paris Olympics will be challenging, need to be smarter: PV Sindhu" class="lazy" /> </picture> </div> <div class="news-block-desc"> Paris Olympics will be challenging, need to be smarter: PV Sindhu</div> </a> </li> <li class="clearfix"><a href="/football/erik-ten-hag-confident-man-utd-can-cope-without-injured-lisandro-martinez-262965.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/2_75243963.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/2_75243963.jpg" alt="Erik ten Hag confident Man Utd can cope without injured Lisandro Martinez" class="lazy" /> </picture> </div> <div class="news-block-desc"> Erik ten Hag confident Man Utd can cope without injured Lisandro Martinez</div> </a> </li> <li class="clearfix"><a href="/kabaddi/pkl-2023-24-bengal-warriors-begin-home-leg-against-gujarat-giants-262963.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/bengalwarriorsheadcoach-1707404426.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/bengalwarriorsheadcoach-1707404426.jpg" alt="PKL 2023-24: Bengal Warriors begin Home Leg against Gujarat Giants, Maninder appeals Home Support" class="lazy" /> </picture> </div> <div class="news-block-desc"> PKL 2023-24: Bengal Warriors begin Home Leg against Gujarat Giants, Maninder appeals Home Support</div> </a> </li> <li class="clearfix"><a href="/cricket/ipl-2024-tom-moody-explains-why-performance-of-players-will-be-crucial-in-indian-premier-league-262961.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/kkr-ipl-2024-1200-1707403667.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/kkr-ipl-2024-1200-1707403667.jpg" alt="IPL 2024: Tom Moody explains why performance of players will be crucial in Indian Premier League " class="lazy" /> </picture> </div> <div class="news-block-desc"> IPL 2024: Tom Moody explains why performance of players will be crucial in Indian Premier League </div> </a> </li> <li class="clearfix"><a href="/cricket/why-kkr-mentor-gautam-gambhir-apologized-to-brendon-mccullum-reason-revealed-262957.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/gambhir-baz-kkr-1707403036.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/gambhir-baz-kkr-1707403036.jpg" alt="Why KKR mentor Gautam Gambhir apologized to Brendon McCullum? Reason Revealed" class="lazy" /> </picture> </div> <div class="news-block-desc"> Why KKR mentor Gautam Gambhir apologized to Brendon McCullum? Reason Revealed</div> </a> </li> <li class="clearfix"><a href="/motorsport/formula-1-silverstone-british-grand-prix-new-10-year-deal-262953.html"> <div class="news-block-image"> <picture> <source srcset="https://images.mykhel.com/webp/fit-in/300x170/img/2024/02/2_32049192.jpg"> <img src="https://images.mykhel.com/fit-in/300x170/img/2024/02/2_32049192.jpg" alt="Formula 1: Silverstone signs new 10-year deal to host British Grand Prix" class="lazy" /> </picture> </div> <div class="news-block-desc"> Formula 1: Silverstone signs new 10-year deal to host British Grand Prix</div> </a> </li> </ul> </div> </section> </div> <div id="giz-subscribe"> <div class="giz-subscribe"> <div class="giz-subscribe-head">
For Quick Alerts
</div> <div class="giz-subscribe-block">
Subscribe Now
<a href="javascript:void(0);" class="notification-bell" id="notification_bell_left"> <i class="bell-icon">&nbsp;</i> </a> </div> <div class="giz-view-sample"> <div class="giz-sample-article"> <div class="sample-image"> <a href="https://www.mykhel.com/cricket/pak-vs-aus-u19-world-cup-2024-semi-final-australia-beat-pakistan-in-a-nail-biting-thriller-262979.html" target="_blank"> <picture> <source srcset="https://images.mykhel.com/webp/img/100x90x100/2024/02/pak-vs-aus-u19-wc-1200-1707408725.jpg"> <img src="https://images.mykhel.com/img/100x90x100/2024/02/pak-vs-aus-u19-wc-1200-1707408725.jpg" class="lazy" /> </picture> </a> </div> <div class="sample-text"> <a href="https://www.mykhel.com/cricket/pak-vs-aus-u19-world-cup-2024-semi-final-australia-beat-pakistan-in-a-nail-biting-thriller-262979.html" target="_blank">
U19 World Cup 2024 Semi-Final: Australia beat Pakistan in a nail-biting thriller
</a> </div> <div class="clearfix"></div> </div> <div class="gizbot-sample-link"> <a href="javascript:void(0);">View Sample</a> </div> </div> </div> </div> <div id="giz-unsubscribe"> <div class="giz-subscribe block"> <div class="giz-subscribe-head">
For Quick Alerts
</div> <div class="giz-subscribe-block">
ALLOW NOTIFICATIONS
<a href="javascript:void(0);" id="notification_bell_unsub" class="notification_bell_unsub"> <i class="bell-icon">&nbsp;</i> </a> </div> </div> </div> <div id="giz-emailsubscribe"> <div class="giz-subscribe block"> <div class="giz-subscribe-head">
For Daily Alerts
</div> <div class="giz-subscribe-block"> <form target="_blank" class="nospace" action="https://app5.saymails.com/cgi-bin/useradd.pl" method="post" name="newsletter_subscribeform" id="newsletter"> <input type="hidden" name="city" id="newsletter_city"> <input type="hidden" name="country" id="newsletter_country"> <input type="hidden" name="dbname1" value="b25laW5kaWE="> <input type="hidden" name="listname1" value="bXlraGVs"> <input type="hidden" name="action1" value="useradd"> <div class="giz-subscribe-textbox"> <input type="text" name="email" placeholder="Enter Your Email Address" class="newsletter-textbox" id="email"> </div> <div class="giz-subscribe-button"> <input type="submit" name="subscribe" value="Sign Up" onclick="return postformById('useradd',this.form);" class="sub-btn"> </div> </form> </div> </div> </div> <div class="cmscontent-left-article inhouse-content" id="cmscontent-left-article" data-zoneid="{&quot;inhouse&quot;:101,&quot;backfill&quot;:107}" data-reviveid="{&quot;inhouse&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;,&quot;backfill&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;}"> <div id="div-gpt-ad-1529386780795-0" class="oiad oi-axt oiadv" data-adval="0" data-elementid="3" data-exec="0"></div> <div id="are-slot-rightrail" class="oiad oi-axt oiadv"></div> </div>  </div> <div class="os-sports-article-lt os-lt"> <div class="os-breadcrumb "> <div class="os-h-b"> <div class="os-breadcrumb-nav clearfix" data-category="More Sports"> <nav> <div> <a href="/more-sports/"><span class="breadcrumb-arrow">More sports</span></a> </div>  </nav> </div> <h1 class="heading" style="clear:both;"> 75th Strandja Memorial Boxing Tournament: Nikhat Zareen, Arundhati Choudhary enter semis </h1> <div class="synopsis"><h2 itemprop="description" style="color: #666;font-size: 14px;font-weight: normal;line-height: 19px; padding: 5px 0;font-style:italic;">The 75th Strandja Memorial Tournament in Sofia, Bulgaria, has become a showcase of talent and determination, with Indian boxers Nikhat Zareen and Arundhati Choudhary advancing to the semifinals. Their standout performances among over 300 athletes from 30 countries highlight India's growing dominance in the sport of boxing. While Sakshi faces a setback, the Indian contingent remains strong with more matches to come.</h2> </div> <div class="os-posted-by" data-author="Natashaa Das"><div class="author-profile written-by">By <a rel="author" href="/authors/natashaa-das.html" title="Profile of Natashaa Das " target="_blank"><strong>Natashaa Das</strong></a></div> <span style="clear: both;"> <time datetime="2024-02-08T22:26:08+05:30" itemprop="dateModified">
Updated: Thursday, February 8, 2024, 22:26 [IST]
</time> </span> </div> </div> </div> <div class="os-vuukle-yt-share clearfix" style="min-height: 53px;"> <div class="os-lt"> <div class="vuukle-powerbar"></div> </div> </div> <div class="io-author" style="display: none">-Natashaa Das</div> <p>Sofia, (Bulgaria), Feb 8: The 75th Strandja Memorial Tournament has become a battleground for excellence and resilience as Indian boxers Nikhat Zareen and Arundhati Choudhary advance to the semifinals with commanding performances.</p> <div id="toptextpromo"></div> <div id="are-slot-1" class="oiad oi-axt oiadv"></div> <p>The event, one of Europe's oldest international sports competitions, is witnessing the participation of over 300 pugilists from 30 countries, showcasing the global appeal and competitive spirit of the sport.</p> <div class="promote_oi_articles"></div> <div id="are-slot-2" class="oiad oi-axt oiadv"></div> <div class="os-sports-article-img" data-cl-cnt="1" data-cnt-t="0" data-gal-src="/img/2024/02/nikhat-zareen-in-action-at-the-75th-strandja-memorial-tournament_1707406799092-600x338-20240208220816.jpg"> <figure> <div id="oi-vox" data-hyb-ssp-in-image-overlay="60fac30b4d506e181c9ee91b"><picture><source srcset="https://images.mykhel.com/webp/img/2024/02/nikhat-zareen-in-action-at-the-75th-strandja-memorial-tournament_1707406799092-600x338-20240208220816.jpg" /><img src="https://images.mykhel.com/img/2024/02/nikhat-zareen-in-action-at-the-75th-strandja-memorial-tournament_1707406799092-600x338-20240208220816.jpg" vspace="5" id="preview-img" hspace="5" class="image_listical c1" alt="Nikhat Zareen boxing match" width="600" height="338" title="Nikhat Zareen boxing match" data-cl-slideshow data-cl-title="Nikhat Zareen boxing match" data-cl-description data-cl-imageid="262983-1" /></picture></div> </figure> </div> <div id="deeplink_1" class="dynamic-deeplink c2"></div> <h2>Nikhat Zareen's Path to Victory</h2> <p>Reigning World Champion Nikhat Zareen, competing in the 50kg category, faced a tough opponent in France's Lkhadiri Wassila. The match was a nail-biter from the start, with both boxers demonstrating their readiness and tactical acumen.</p> <div id="are-slot-3" class="oiad oi-axt oiadv"></div> <p>Nikhat's agility and counter-attacking prowess allowed her to edge out Wassila in the initial rounds. The bout's climax saw Nikhat at her absolute best, outmaneuvering Wassila's aggressive attempts and securing a unanimous 5-0 victory. Her next challenge is against Bulgaria's Zlatislava Chukanova in the semifinals.</p> <div class="refreshInarticleAd listical-ad-left inarticlead" data-slno="0" data-refreshed="0" data-status="false" data-adval="1"></div> <div id="recommended_video" class="recommended_video"></div> <h2>Arundhati Choudhary Dominates the Ring</h2> <p>Arundhati Choudhary, competing in the 66kg weight class, displayed a similar dominance in her bout against Serbia's Matovic Milena. The match began with both boxers measuring each other, but it was Arundhati who quickly seized control. Her aggressive tactics paid off, securing her a comfortable win in the first round.</p> <div id="deeplink_2" class="dynamic-deeplink c2"></div> <p>Maintaining her momentum and showcasing her defensive skills, Arundhati blocked her opponent's desperate attempts in the final round, clinching a 5-0 victory and advancing to the semifinals where she will face Slovakia's Jessica Triebeľová.</p> <h2>Challenges and Upcoming Matches</h2> <p>While Nikhat and Arundhati's victories were highlights of the day, Sakshi (57kg) faced a heartbreaking 2-3 defeat against Uzbekistan's Mamajonova Khumorabonu, bowing out of the tournament in the quarterfinals.</p> <p>However, the Indian contingent has more representation with Jugnoo (86kg), Sagar (+92kg), and Naveen (92kg) scheduled for their respective matches later tonight. Additionally, seven Indian pugilists, including Amit Panghal (51kg) and Deepak (75kg), are gearing up for their quarter-final matches on Friday, promising more action and potential victories for India.</p> <div id="deeplink_3" class="dynamic-deeplink c2"></div> <p>The 75th Strandja Memorial Tournament has proven to be a fruitful outing for the Indian boxing contingent so far, with notable performances and advancements. As the tournament progresses, the focus remains on the potential of Indian boxers to secure more victories and possibly clinch titles in this prestigious event.</p> <p>With the backing of their rigorous training and sheer determination, the Indian boxers are set to make their mark on the international stage, adding to the glory of Indian sports.</p> <div id="widget_wc_prediction_article_block" data_lang="en"> </div>
<style type="text/css">
	.notifications-block {width: 300px;padding: 30px 0;margin: 0 auto;}
.allow-notifications {
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    padding: 0;
    background: #000;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    padding-right: 50px;
    position: relative;
    cursor: pointer;
    display: none;
}
.allow-notifications i {position: absolute;right: 5px;    top: 5px;width: 35px;height: 35px;color: #000;font-size: 32px;}
.already-subscribed {
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    padding: 0;
    background: #1b74e9;
    color: #ffffff;
    text-align: center;
    padding-right: 50px;
    position: relative;
    display: none;
}
.notification-settings-link {font-size: 14px;color: #0066cc;padding: 30px 0 0 0;font-weight: 600;text-align: center;display: none;}
.notification-settings-link a {color: #0066cc;}
.notification-settings-link a i {vertical-align: middle;}
.already-subscribed i {position: absolute;right: 5px;    top: 5px;width: 35px;height: 35px;color: #000;font-size: 32px;}
.notf-sub .already-subscribed, .notf-sub .notification-settings-link {display: block;}
.notf-sub .allow-notifications {display: none;}
.bell-icons {
    width: 40px;
    height: 36px;
    background: #fff url(/images/bell-icon.svg) no-repeat center;
    background-size: 60%;
    display: block;
    position: absolute;
    right: 2px;
    top: 2px;
}
.tick-icons {
    width: 40px;
    height: 36px;
    background: #fff url(/images/tick-icon.png) no-repeat center;
    background-size: 60%;
    display: block;
    position: absolute;
    right: 2px;
    top: 2px;
}
.notification-outerblock {
	background: #f2f2f2;
    padding: 10px;
    margin: 10px auto;
    float: left;
    width: 600px;
    box-sizing: border-box;
}
.breaking-newstext {font-size: 16px;text-align: center;float: left;margin: 20px 10px;width: 240px;}
.notifications-block {padding: 10px;float: left;clear: none;}
</style>
<div class="notification-outerblock clearfix" id="notification-articleblock" style="display: none;">
<div class="breaking-newstext">
Get breaking news alerts.
</div>
<div class="notifications-block clearfix">
<div class="allow-notifications" id="allow-notifications">
Allow Notifications <i class="bell-icons"></i>
</div>
<div class="already-subscribed" id="already-subscribed">
You have already subscribed <i class="tick-icons"></i>
</div>
</div>
</div>
<div id="fantasypro"></div> <div class="gap10" style="display: none;"> <div id="tag-container" class="tag-container" data-tags="nikhat zareen, boxing, women boxers" data-eng-tags="nikhat zareen, boxing, women boxers"> <span class="tags_head">Read more about: </span> <a title="nikhat zareen" href="/topic/nikhat-zareen">nikhat zareen</a> <a title="boxing" href="/topic/boxing">boxing</a> <a title="women boxers" href="/topic/women-boxers">women boxers</a> <div style="clear: both; padding-bottom: 5px;"></div> </div> </div> <div class="os-sports-video-vuukle"> </div> <div class="article-story-pub-date">
Story first published: Thursday, February 8, 2024, 22:26 [IST]
</div> <div class="article-others">
Other articles published on <a href="/2024/02/08/">Feb 8, 2024</a> </div> <div class="related-articles"><div class="comments-wrap" style="display:none;"><span id="text_change"><a class="vuuk_num" id="vuuk_num" data="vuukle-count" href="#vuukle-comments"></a><a href="#vuukle-comments"> Comments </a><i class="comments-icon"></i></span></div><div id="endofcontent"></div> <div id="oneliner-promo"></div> <div id="fantasypro"></div> <section> <div class="oi-trending-mainsection"> <div class="oi-category-wrap "> <div class="oi-category-headinwrap"> <div class="oi-heading" style="background: transparent;">
More From Mykhel
</div> </div> <div class="oi-prev-next-nav"> <div class="prev-nav disabled" id="slide">Prev</div> <div class="next-nav" id="slide">Next</div> </div> </div> </div> <div class="oi-article-wrapper"> <div class="oi-trendingarticle-wrapper clearfix"> <ul> <li> <a href="/more-sports/strandja-memorial-tournament-nikhat-zareen-sakshi-chaudhary-start-with-wins-262465.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2024/02/boxing-nikhat-sakshi-1707197967.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2024/02/boxing-nikhat-sakshi-1707197967.jpg" alt="Strandja Memorial Tournament: Nikhat Zareen, Sakshi Chaudhary start with Wins" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/strandja-memorial-tournament-nikhat-zareen-sakshi-chaudhary-start-with-wins-262465.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Strandja Memorial Tournament: Nikhat Zareen, Sakshi Chaudhary start with Wins
</a> </div> </li> <li> <a href="/more-sports/strandja-memorial-tournament-lovlina-borgohain-suffers-shock-loss-by-disqualification-262439.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2024/02/lovlina-borgohain-1200-1707154779.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2024/02/lovlina-borgohain-1200-1707154779.jpg" alt="Strandja Memorial Tournament 2024: Lovlina Borgohain Suffers Shock Loss By disqualification; Nikhat Zareen Progresses" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/strandja-memorial-tournament-lovlina-borgohain-suffers-shock-loss-by-disqualification-262439.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Strandja Memorial Tournament 2024: Lovlina Borgohain Suffers Shock Loss By disqualification; Nikhat Zareen Progresses
</a> </div> </li> <li> <a href="/more-sports/yearender-2023-top-five-indian-sportspersons-in-other-sports-252867.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/12/year-ender-2023-1200-1703167879.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/12/year-ender-2023-1200-1703167879.jpg" alt="Year-Ender 2023: Neeraj Chopra To Satwik-Chirag, Top Five Indian Sportspersons In Other Sports This Year" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/yearender-2023-top-five-indian-sportspersons-in-other-sports-252867.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Year-Ender 2023: Neeraj Chopra To Satwik-Chirag, Top Five Indian Sportspersons In Other Sports This Year
</a> </div> </li> <li> <a href="/more-sports/asian-games-boxing-preeti-pawar-settles-for-bronze-lovlina-borgohain-enters-semis-236859.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/10/preeti-boxing-asiad-1200-1696317151.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/10/preeti-boxing-asiad-1200-1696317151.jpg" alt="Asian Games Boxing: Preeti Pawar settles for bronze after losing in semis, Lovlina Borgohain secures Paris 2024 berth" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/asian-games-boxing-preeti-pawar-settles-for-bronze-lovlina-borgohain-enters-semis-236859.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Asian Games Boxing: Preeti Pawar settles for bronze after losing in semis, Lovlina Borgohain secures Paris 2024 berth
</a> </div> </li> <li> <a href="/more-sports/india-at-asian-games-2023-full-list-of-medals-won-by-indian-athletes-on-october-1-236647.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/10/asian-games-india-medal-winners-october-1-1696176850.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/10/asian-games-india-medal-winners-october-1-1696176850.jpg" alt="India at Asian Games 2023: Full List of Medals Won by Indian Athletes on October 1" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/india-at-asian-games-2023-full-list-of-medals-won-by-indian-athletes-on-october-1-236647.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">India at Asian Games 2023: Full List of Medals Won by Indian Athletes on October 1
</a> </div> </li> <li> <a href="/more-sports/asian-games-boxing-nikhat-zareen-enters-semi-finals-by-defeating-opponent-via-rsc-236037.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/09/nikhat-zareen-boxing-asian-games-1695992156.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/09/nikhat-zareen-boxing-asian-games-1695992156.jpg" alt="Asian Games Boxing: Nikhat Zareen enters semis by defeating opponent via RSC; secures Paris Olympic 2024 quota" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/asian-games-boxing-nikhat-zareen-enters-semi-finals-by-defeating-opponent-via-rsc-236037.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Asian Games Boxing: Nikhat Zareen enters semis by defeating opponent via RSC; secures Paris Olympic 2024 quota
</a> </div> </li> <li> <a href="/more-sports/asian-games-2023-live-updates-september-29-india-235943.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/09/asian-games-2023-live-updates-september-29-1200-1695949637.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/09/asian-games-2023-live-updates-september-29-1200-1695949637.jpg" alt="Asian Games 2023 Highlights, September 29: Nikhat Zareen qualifies for 2024 Paris Olympics, assures maiden Asiad medal" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/asian-games-2023-live-updates-september-29-india-235943.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Asian Games 2023 Highlights, September 29: Nikhat Zareen qualifies for 2024 Paris Olympics, assures maiden Asiad medal
</a> </div> </li> <li> <a href="/more-sports/asian-games-2023-boxing-schedule-september-24-235111.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/09/nikhat-zareen1-1695513026.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/09/nikhat-zareen1-1695513026.jpg" alt="Asian Games 2023: Boxing Schedule on September 24, Nikhat Zareen compete in opening round" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/asian-games-2023-boxing-schedule-september-24-235111.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Asian Games 2023: Boxing Schedule on September 24, Nikhat Zareen compete in opening round
</a> </div> </li> <li> <a href="/more-sports/asian-games-2023-nikhat-zareen-biography-achievements-records-all-you-need-to-know-234497.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/09/nikhatzareen-1695311808.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/09/nikhatzareen-1695311808.jpg" alt="Asian Games: Who is Nikhat Zareen? Biography, Achievements, All You Need to Know About Two-Time World Boxing Champion" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/asian-games-2023-nikhat-zareen-biography-achievements-records-all-you-need-to-know-234497.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Asian Games: Who is Nikhat Zareen? Biography, Achievements, All You Need to Know About Two-Time World Boxing Champion
</a> </div> </li> <li> <a href="/more-sports/asian-games-2023-india-boxing-contingent-complete-squad-live-stream-record-234413.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/09/india-boxing-squad-asian-games-2023-1695281594.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/09/india-boxing-squad-asian-games-2023-1695281594.jpg" alt="Asian Games 2023: India's Boxing Squad, Full Schedule, Record, Live Streaming" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/asian-games-2023-india-boxing-contingent-complete-squad-live-stream-record-234413.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Asian Games 2023: India's Boxing Squad, Full Schedule, Record, Live Streaming
</a> </div> </li> <li> <a href="/more-sports/asian-games-indian-boxing-team-head-for-china-full-squad-revealed-231347.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/09/india-boxing-asian-games-2022-1693839042.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/09/india-boxing-asian-games-2022-1693839042.jpg" alt="Asian Games: Indian Boxing team head for China, Full Squad Revealed" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/asian-games-indian-boxing-team-head-for-china-full-squad-revealed-231347.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">Asian Games: Indian Boxing team head for China, Full Squad Revealed
</a> </div> </li> <li> <a href="/more-sports/india-boxing-squad-asian-games-2022-nitu-ghanghas-amit-panghal-miss-out-220680.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider"> <div class="article-thumb"> <picture><source srcset="https://images.mykhel.com/webp/fit-in/250x140/img/2023/07/nitu-ghanghas-boxer-featured-1688279734.jpg"><img src="https://images.mykhel.com/fit-in/250x140/img/2023/07/nitu-ghanghas-boxer-featured-1688279734.jpg" alt="India Boxing Squad For Asian Games 2022: Nitu Ghanghas, Amit Panghal miss out on ticket to Hangzhou" /></picture> </div> </a> <div class="article-title-wrap"> <a href="/more-sports/india-boxing-squad-asian-games-2022-nitu-ghanghas-amit-panghal-miss-out-220680.html" class="oiHyperLink" data-uparam="ref_medium=Desktop&ref_source=MK-EN&ref_campaign=Similar-Topic-Slider">India Boxing Squad For Asian Games 2022: Nitu Ghanghas, Amit Panghal miss out on ticket to Hangzhou
</a> </div> </li> </ul> </div> </div> </section></div> </div> <div id="belowContent" style="padding-top:10px;    clear: both;"> <div id="oitaboola"></div> <div id="taboola-below-article-thumbnails"></div> </div> <div id="oitaboolacontainer1" class="os-sports-vuukle-comment"> <div id="vuukle-comments"> </div>  <div id="are-slot-5" class="oiad oi-axt oiadv"></div>  </div> </div> </div> <div class="os-sports-m-news-r os-rt"> <div class="os-ad" style="clear:both;"> <div class="cmscontent-right1 inhouse-content" style="display:block;" id="cmscontent-right1" data-zoneId="{&quot;backfill&quot;:&quot;107&quot;,&quot;inhouse&quot;:&quot;103&quot;}" data-reviveId="{&quot;backfill&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;,&quot;inhouse&quot;:&quot;9de4f035bc8106094a8824fc0cfb6de3&quot;}"> <div class="os-ad-c"> <div id="div-gpt-ad-1501582186001-7" data-exec="0" data-adval="0" data-elementid="2" class="oiad oi-axt oiadv"></div> <div id="are-slot-mr1" class="oiad oi-axt oiadv"></div> </div> </div> </div>   <style>
#right-links {
    background: #f0f0f0;
    border: 1px solid #dbdbdb;
    font-size:15px;
    display: none;
}
#right-native-ad li {
    height: auto!important;
}
div#rightTxtPromo1 {
    background: #f0f0f0;
    border: 1px solid #dbdbdb;
    font-size: 15px;
    display:none;
}
</style>      <div id="div-gpt-ad-1576810089699-0" class="oiadv"></div> <div id="are-slot-4" class="oiad oi-axt oiadv"></div>  <div class="os-ad" style="clear:both;"> <div class="os-ad-c"> <div id="div-gpt-ad-1501582186001-8" data-exec="0" data-adval="0" data-elementid="1" class="oiad1 oi-axt oiadv" style="min-height: 250px;"></div> <div id="are-slot-mr2" class="oiad oi-axt oiadv"></div> </div> </div> <div class="rightSideOut"> <div id="oitaboola"></div> <div id="taboola-right-rail-thumbnails"></div> </div>  </div> </div> </div> </section>  <div data-id="3" data-step="1" class="oneindia_widget_container" id="oneindia_widget_container_1328"></div> <script>
  var globalheaders = new Headers({
  "x-oigt-header" :"GITPL"
 });
if(window.location.pathname==='/kabaddi/news/'){
        if(document.getElementById('rightTxtPromo1'))
        {
        document.getElementById("rightTxtPromo1").style.display = "block";
        var promocontainer = document.getElementById('rightTxtPromo1');
         promocontainer.innerHTML = '<p style="padding:15px; border-bottom: 1px solid #000;">Bet on all major cricket events at  <a href="https://www.thetopbookies.com/betting-tips/cricket"  target="_blank">thetopbookies.com/betting-tips/cricket</a> Signup today and get a unique first deposit bonus of 100% </p><p style="padding:15px ;"><a  href="https://cashup.club/" target="_blank">Cashup Club </a></a></p></div>';
         }
                }


if(document.getElementById("cms-poll")){
var iframe = document.getElementById("cms-poll");
 iframe.onload = function(){
    	iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
	}
}


        if(no_ad_flag == true){
  	if(document.querySelector('.cms-videos-wrapper')){
          document.querySelector('.cms-videos-wrapper').style.display='none';
        }
        if(document.querySelector('.assigned_video_heading')){
          document.querySelector('.assigned_video_heading').style.display='none';
        }
	if(document.querySelector('#bottom-single-video-block1')){
        	document.querySelectorAll('#bottom-single-video-block1').forEach(e => e.remove());
	}
     if(document.querySelector('.os-header-ad')){
document.querySelector('.os-header-ad').style.minHeight=0;
}

if(document.querySelector('.cmscontent-right1')){
document.querySelector('.cmscontent-right1').style.minHeight=0;
}


if(document.querySelector('.cmscontent-left-article')){
document.querySelector('.cmscontent-left-article').style.minHeight=0;
}
}

if(window.location.search.indexOf('oirev_analyse')>-1){
        var today = new Date();
        var y = today.getFullYear();
        var m = today.getMonth() + 1;
        var d = today.getDate();
        var hr = today.getHours();
        var min = today.getMinutes();
        var urlBurstParam1 = y+''+m+''+d+''+hr+''+min;
        var tag1 = document.createElement('script');
        tag1.src = 'https://rss.oneindia.com/common/oi-debug.js?v='+urlBurstParam1;
        tag1.async = true;
        tag1.id = 'oiscripts1';
        var firstScriptTag1 = document.getElementsByTagName('script')[0];
        firstScriptTag1.parentNode.insertBefore(tag1, firstScriptTag1);
}

/*var qParam = document.referrer;
var currentHost = document.location.hostname;
 if(qParam != '' && qParam.indexOf(currentHost)==-1){
        (function(window, location) {
          var referrer = document.referrer;
          if(typeof history != 'undefined' && referrer && history.length > 1) {
              var stateObj = {}; //Just want to change the current history
              var goToHomeURL = location.origin+'?utm_medium=Desktop&utm_source=MK-EN&utm_campaign=Back-Home';
              //history.replaceState(stateObj, document.title, location.href + hash);
              history.pushState(stateObj, document.title, location.href);

              window.addEventListener("popstate", function() {
                  var referrer = document.referrer ? document.referrer : 'Blank';
                  location.replace(goToHomeURL);
              }, false);
          }
      }(window, location));
    }*/

	if(window.location.pathname==='/wwe/news/'){
		document.getElementById("right-links").style.display = "block";
	}

var ga_ad_block = "ad block";
var hostname = window.location.hostname;
var oiab_done = false;
function loadScript(path, callback) {
  var scr = document.createElement('script');
  scr.onerror = handleError;
  scr.async = true;
  scr.src = path;
  document.body.appendChild(scr);
  function handleError() {
    console.log('handleError');
    if (!oiab_done) {
      oiab_done = true;
      loadwhenAB();
    }
  }
}
loadScript("https://"+hostname+"/common/js/ads.js");
function loadwhenAB() {
  console.log('inside AB function');
  if (document.getElementById('zQyHLKpYGvgh')) {
        console.log('Without Ad Blocker');
  } else {
  	ga('mykhelen.set','dimension5',ga_ad_block);
        (function(){
            var today = new Date();
            var urlBurstParam = today.getHours();
            var commontag = document.createElement('script');
            commontag.src = 'https://rss.oneindia.com/common/oi-inhouse-scripts.js?lang=en&domain='+hostname;
            commontag.async = true;
            commontag.id = 'oiinhousescripts';
            var firstcommonScriptTag = document.getElementsByTagName('script')[0];
            firstcommonScriptTag.parentNode.insertBefore(commontag, firstcommonScriptTag);
        }());
}
}
</script> <div class="non-friendly-scatter"> <div id="zfdc989be-6f88-4988-819b-7591d265e95f" style="display:none"></div> </div> <iframe id="multisync-iframe" height="0" width="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=dfp&endpoint=apac" style="border: 0px; display: none;"></iframe> <script>
        if(document.getElementById("right-native-ad")) {
      var slotpos = 'rightInclude';
      var tcode = 'RB';
    }else if(document.getElementById("oiNativePromo1")) {
      var slotpos = 'homeInclude';
      var tcode = 'HP';
  }else{
      var slotpos = 'indexInclude';
      var tcode = 'IP';
    }
    (function(){
    var host = 'MKEN';
    var lang = 'en';
     var randomh=Math.random();
    var curl = window.location.href;
     var e = document.getElementsByTagName("script")[0];
     var d = document.createElement("script");
     //d.src = "https://rss.oneindia.com/cms/render-native-ad.js?slotpos="+slotpos+"&lang="+lang+"&host="+host+"&curl="+curl+"&trackcode="+tcode;
    d.src = "https://rss.oneindia.com/cms/render-native-ad.js?slotpos=" + slotpos + "&trackcode=" + tcode;
     d.type = "text/javascript";
     d.async = true;
     d.id = "nativeadjs";
     e.parentNode.insertBefore(d,e);
 })();
 
  function createCookie(name,value,days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
  }
  function eraseCookie(name) {
          createCookie(name,"",-1);
  }
  function removeCookies() {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++){
        eraseCookie(cookies[i].split("=")[0]);
      }
  }
var chkcookiepolicy = getUserCookie('cookiePolicy');
console.log(chkcookiepolicy+" : Country Found");
if(typeof(chkcookiepolicy) == "undefined" || chkcookiepolicy == null){
  setUserCookie('cookiePolicy',1,'', '/', '', '');
}

  (function() {
  var hidden = "hidden";
  // Standards:
  if (hidden in document)
    document.addEventListener("visibilitychange", onchange);
  else if ((hidden = "mozHidden") in document)
    document.addEventListener("mozvisibilitychange", onchange);
  else if ((hidden = "webkitHidden") in document)
    document.addEventListener("webkitvisibilitychange", onchange);
  else if ((hidden = "msHidden") in document)
    document.addEventListener("msvisibilitychange", onchange);
  // IE 9 and lower:
  else if ("onfocusin" in document)
    document.onfocusin = document.onfocusout = onchange;
  // All others:
  else
    window.onpageshow = window.onpagehide
    = window.onfocus = window.onblur = onchange;

  function onchange (evt) {
    var v = "visible", h = "hidden",
        evtMap = {
          focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
        };

    evt = evt || window.event;
    if (evt.type in evtMap)
      document.body.className = evtMap[evt.type];
    else
      document.body.className = this[hidden] ? "hidden" : "visible";
  }

  // set the initial state (but only if browser supports the Page Visibility API)
  if( document[hidden] !== undefined )
    onchange({type: document[hidden] ? "blur" : "focus"});
})();


//For All DFP Name:ID into Global Array Push

    var adElem = [];
  var adObj = {};
    googletag.cmd.push(function() {
      googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      var slotId = event.slot.getSlotElementId();
      var slotName = event.slot.getAdUnitPath();
        adObj[slotName] = slotId;
      });
      adElem.push(adObj);
  });
    console.log("DFP AD units: ");
    console.log(adElem);

//For All DFP Name:ID into Global Array Push



  var breakInt;
  var chkadcookie = getUserCookie('ad_display_status');
  var sub_id = localStorage.getItem("enmykhel_subscription_id");
  if(chkadcookie==null || chkadcookie == undefined || chkadcookie==''){
    chkadcookie = '';
  }
  var chkadcookiemor = localStorage.getItem('ad_display_status_mor');
  if(chkadcookiemor==null || chkadcookiemor == undefined || chkadcookiemor==''){
    chkadcookiemor = '';
  }
  var chkadcookieeve = localStorage.getItem('ad_display_status_eve');
  if(chkadcookieeve==null || chkadcookieeve == undefined || chkadcookieeve==''){
    chkadcookieeve = '';
  }
  var camp_id = localStorage.getItem("ad_campiagn");
  if(camp_id==null || camp_id == undefined || camp_id==''){
    camp_id = '';
  }
  var displayFlag = 0;
  var dynamicNotification = {
    createAdCookie:function(name,value,days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
    },
    displayNotification:function(body, icon, title, link, duration,slotFlg,currentDay,adCamp){
      link = link || 0; // Link is optional
        duration = duration || 3000; // Default duration is 5 seconds
        icon = icon+'?url='+link;
        var options = {
          body: body,
          icon: icon
        };
        navigator.serviceWorker.ready.then(function(registration) {
           registration.showNotification(title, options);
           if(slotFlg==0){
              localStorage.setItem('ad_display_status_mor',currentDay);
           }else{
              localStorage.setItem('ad_display_status_eve',currentDay);
           }
           localStorage.setItem('ad_campiagn',adCamp);
        });
    },
    displayTime:function(){
         var displayHourMor=[8,13];
      var displayHourEve =[15,23];
      var theDate=new Date();
      var currentDay = Math.abs(theDate.getDate());
      var currentHour = Math.abs(theDate.getHours());
        if ((currentHour>=displayHourMor[0] && currentHour<=displayHourMor[1])  && (chkadcookiemor == '' || chkadcookiemor != currentDay)){
          clearInterval(breakInt);
          dynamicNotification.checkStatus(0,currentDay);
        }
	if ((currentHour>=displayHourEve[0] && currentHour<=displayHourEve[1])  && (chkadcookieeve == '' || chkadcookieeve != currentDay)){
          clearInterval(breakInt);
          dynamicNotification.checkStatus(1,currentDay);
        }
    },
    trackImpression:function(impUrl){
      fetch(impUrl, {
          method: "post",
          headers : globalheaders
        }).catch(function(err){
          console.error('Inside Imp error:', err);
        });
    },
    fetchDynamicAd:function(sub_id,slotFlg,currentDay){
      var no_ads = 1;
      var device_type=1;
      fetch("/scripts/cms/controller.php?module=subscription&type=getBiddingAd&last_sub_id="+sub_id+"&device_type="+device_type+"&noAds="+no_ads+"&campid="+camp_id,{
        method: "post",
        headers : globalheaders
        }).then(function(e) {
            e.text().then(function(data){
          adgebraResponse = data;
          if(adgebraResponse !='' && adgebraResponse !=undefined){
          var adgRes = JSON.parse(adgebraResponse);
          if(adgRes[0] !='' && adgRes[0] != undefined && adgRes[0] != null){
              if(adgRes[0]['ad_provider']==='Veve'){
                var adgUrl = adgRes[0]['trackerUrl'];
                var impUrl = adgRes[0]['notificationImp'];
                var adgTitle = adgRes[0]['notificationMessage'];
                dynamicNotification.trackImpression(impUrl);
              }else{
                var adgUrl = decodeURIComponent(adgRes[0]['trackerUrl']).replace(/\+/g,' ');
                var adgTitle = decodeURIComponent(adgRes[0]['notificationMessage']).replace(/\+/g,' ');
              }
              var adgImg = adgRes[0]['notificationImage'];
              var adCamp = adgRes[0]['campId'];
              dynamicNotification.displayNotification(adgTitle,adgImg,adgTitle,adgUrl,3000,slotFlg,currentDay,adCamp);
            }
            }
          });
        })["catch"](function(e) {
            console.log("Fetch Error :-S", e)
        });
    },
    checkStatus:function(slotFlg,currentDay){
      if(sub_id != "" && sub_id != undefined && sub_id != null){
        dynamicNotification.fetchDynamicAd(sub_id,slotFlg,currentDay);
      }
    },
    init : function() {
       if ("Notification" in window) {
        var permission = Notification.permission;
        var userStatus = navigator.onLine;
        console.log(permission+" User is :"+userStatus);
          if (permission === "denied") {
            return;
          } else if(userStatus) {
            breakInt=setInterval("dynamicNotification.displayTime()",10000);
          }
       }
    }
};
var qparam = window.location.search;
//if(qparam.indexOf('oiad=1')>'-1'){
  //dynamicNotification.init();
//}

if(no_ad_flag==true){
        if(document.getElementById('cmscontent-right1')){
        document.getElementById('cmscontent-right1').style.display = 'none';
        }
        if(document.getElementById('cmscontent-article1')){
        document.getElementById('cmscontent-article1').style.display = 'none';
        }
        if(document.getElementById('cmscontent-article2')){
   document.getElementById('cmscontent-article2').style.display = 'none';
        }
	if(document.getElementById('cmscontent-top')){
   document.getElementById('cmscontent-top').style.display = 'none';
        }

        var elem = document.querySelectorAll('.refreshInarticleAd'),
            i = 0,
            l = elem.length;

        for (i; i < l; i++) {
            elem[i].style.display = 'none';
        }
}

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazy",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
</script> <script type="text/javascript">
  function smoothScroll() {
    window.scrollBy({top: 120,behavior: 'smooth'});
  }
if (/Mobi|Android/i.test(navigator.userAgent)) {
}else{
  if(window.location.search.indexOf('?sr=1') > -1 ){
    if(trackpagetype=='home'){
      setTimeout(function(){
        smoothScroll();
      },500);
    }
  }
}


if (window.matchMedia('(display-mode: standalone)').matches) {
    if(document.querySelector('.one-head-share')){
      document.querySelector('.one-head-share').style.cssText='display:block!important';
    }
}
function generateVPV(pagePath){
  if(pagePath=="" || pagePath=="undefined" || pagePath==null){
    pagePath = window.location.href;
  }
  var mainurl = window.location.href;
  if (document.querySelector('link[rel="canonical"]') && document.querySelector('link[rel="canonical"]').hasAttribute('href')) {
            mainurl = document.querySelector('link[rel="canonical"]').getAttribute('href'); //document.location.href;
  }
  var gaEventVal = domainmiddle+sitelang+'.send';
  ga(gaEventVal,{
        hitType: "pageview",
        page: pagePath,
        location: mainurl
    });
  gtag('event', 'page_view', {
    page_location: pagePath,
    page_path: pagePath,
    send_to: liveGA
  });
  gtag('event', 'page_view', {
    page_location: pagePath,
    page_path: pagePath,
    send_to: rosGA
  });
  gtag('event', 'page_view', {
    page_location: pagePath,
    page_path: pagePath,
    send_to: universalGA
  });
  var trackurl = pagePath;
  var jcode = 'var _comscore = _comscore || []; var comscoreParams = { c1: "2", c2: "7732551", c3: "", c4: "' + trackurl + '", c5: "", c6: "", c15: "" }; _comscore.push(comscoreParams); var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true; s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; el.parentNode.insertBefore(s, el);';
  setTimeout(jcode, 500);
}
function insertCodeInDiv() {
  /*if(domainmiddle=='mykhel'){
    var divElement = document.querySelector("#are-slot-6");
  }else{
    var divElement = document.querySelector(".fourthSlot");
  }*/
  var divElement = document.querySelector("#are-slot-6");
  if (divElement) {
     divElement.classList.remove('dynamic-slot');
     divElement.innerHTML='';
    // Create the script element
    const scriptElement = document.createElement("script");
    scriptElement.async = true;
    scriptElement.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6601380052549923";
    scriptElement.crossOrigin = "anonymous";
    const insElement = document.createElement("ins");
    insElement.className = "adsbygoogle";
    insElement.style.display = "inline-block";
    insElement.style.width = "300px";
    insElement.style.height = "250px";
    insElement.setAttribute("data-ad-client", "ca-pub-6601380052549923");
    insElement.setAttribute("data-ad-slot", "3671027678");
    const pushScript = document.createElement("script");
    pushScript.textContent = "(adsbygoogle = window.adsbygoogle || []).push({});";
    divElement.appendChild(scriptElement);
    divElement.appendChild(insElement);
    divElement.appendChild(pushScript);
  }
}
if (/Mobi|Android/i.test(navigator.userAgent)) {
var codeInserted = false;
window.addEventListener("scroll", function () {
  if (!codeInserted) {
    setTimeout(insertCodeInDiv, 1000); // Insert code after 1 second
    codeInserted = true; // Set the flag to true to prevent further insertions
  }
});
}
  /*VOX Code Starts*/
/* VOX ad code - Starts */

if(domainmiddle=='mykhel'){
  if(document.querySelector('.oi-footer-bottom-ad-close')){
    document.querySelector('.oi-footer-bottom-ad-close').style.display='none';
  }
    
}
var adsenseObj = {'oneindia':6500213837,'boldsky':5451350884,'gizbot':8951063454,'drivespark':2314299074,'filmibeat':5203390138,'goodreturns':3315593397,'careerindia':2385655101,'mykhel':2194083414,'nativeplanet':7446410097};
    var adsenseSlot = adsenseObj[domainmiddle];
var inImageCssWeb='<style>#oi-vox {position: relative;}.oiInImg{width:600px;margin:0 auto}.oiInImg{height:108px!important;position:absolute;bottom:0}.oiInImg ins{height:90px!important}#img-close-btn{border:1px solid #d7d4d4;border-bottom:none;border-radius:5px 5px 0 0;box-shadow:1px -2px 3px -1px #fff;background:#fff;padding:1px 10px;float:right;height:15px;opacity:0}#img-close-btn img{width:25px;top:-6px;position:relative}</style>';
    var inImageCssMobi='<style>#oi-vox {position: relative;}.oiInImg{width:100%;margin:0 auto;position:absolute;bottom:-4px;left:0;right:0}.resimg{width:100%;height:auto}#img-close-btn{border:1px solid #d7d4d4;border-bottom:none;border-radius:5px 5px 0 0;box-shadow:1px -2px 3px -1px #fff;background:#fff;padding:1px 10px;float:right;height:15px;opacity:0}#img-close-btn img{width:25px;top:-6px;position:relative}</style>';
    var inImageHtmlWeb='<span id="img-close-btn"><img src="https://www.oneindia.com/images/oi-black-cross.png"></span><ins id="oiInImgWrapper" class="adsbygoogle" style="display:inline-block;width:600px;height:90px;background:#f2f2f2" data-ad-client="ca-pub-6601380052549923" data-ad-slot="'+adsenseSlot+'"></ins>';
    var inImageHtmlMobi='<span id="img-close-btn"><img src="https://www.oneindia.com/images/oi-black-cross.png"></span><ins id="oiInImgWrapper" class="adsbygoogle" style="display:block;width:100%;height:60px!important;background:#f2f2f2;overflow:hidden;text-align:center;" data-ad-client="ca-pub-6601380052549923" data-ad-slot="'+adsenseSlot+'"></ins>';
    var finalHtmlCss = '';
    
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      finalHtmlCss = inImageCssMobi+inImageHtmlMobi;
    }else{
      finalHtmlCss = inImageCssWeb+inImageHtmlWeb;
    }

var backfillWidgets = {
  voxWidget: function(idx,elem) {
      if(liteflag==0){
      console.log("Vox Loading Flag :"+voxloadflag);
        if(document.getElementById("oi-vox")) {
          var sspflag = 0;
        window.addEventListener("scroll", function(){
            if(sspflag==0){
                if (typeof window._tx === "undefined") {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.async = true;
                    s.src = "https://st.hbrd.io/ssp.js?t=" + new Date().getTime();
                    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(s);
                  }
                  window._tx = window._tx || {};
                  window._tx.cmds = window._tx.cmds || [];
                  window._tx.cmds.push(function () {
                      window._tx.init({
                          onSuccessInImageLoad: function (data) {
                              console.log("onSuccessInImageLoad", data);
                          },
                          onFailInImageLoad: function (data) {
                              if(backfillorder==2){
                                backfillWidgets.adsenseWidget(finalHtmlCss,2,idx,elem);
                              }
                              console.log("onFailInImageLoad", data);
                          }
                      });
                  });
            }
          }, false);  
        }
    }
  },
  adsenseWidget:function(dynamicHtmlCSs,flg,idx,elem){
                  var scriptElement = document.createElement('script');
                  scriptElement.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6601380052549923';
                  scriptElement.async = true;
                  scriptElement.crossOrigin = 'anonymous';
                  document.head.appendChild(scriptElement);
                  var adsenseDiv = document.createElement('div');
                    adsenseDiv.id = 'oiInImg';
                    adsenseDiv.classList.add('oiInImg');
                    adsenseDiv.innerHTML = dynamicHtmlCSs;
                    elem.insertAdjacentElement('afterend', adsenseDiv);
                  (adsbygoogle = window.adsbygoogle || []).push({});
                    var adsenseInt = setInterval(function(){
                       if(document.getElementById('oiInImgWrapper')){
                          var filledStatus = document.getElementById('oiInImgWrapper').getAttribute('data-ad-status');
                          if(filledStatus==='filled'){
                            voxFlag=0;
                             //imageelem[g].setAttribute('data-adgdisplay',false);
                             if(document.getElementById("oiInImg")){
                                document.getElementById("oiInImg").style.display='block';
                                var imgCloseBtn = document.getElementById("img-close-btn");
                                imgCloseBtn.style.opacity = "1";
                                imgCloseBtn.addEventListener("click", function () {
                                  var oiInImg = document.querySelector(".oiInImg");
                                  oiInImg.innerHTML = "";
                                });
                             }
                            clearInterval(adsenseInt);
                          }else if(filledStatus==='unfilled'){
                            if(document.getElementById("oiInImg")){
                                document.getElementById("oiInImg").style.display='none';
                             }
                            //if(domainmiddle != 'gizbot' && host != 'hindi.oneindia.com'){
                              if(backfillorder==1 && flg==1){
                                backfillWidgets.voxWidget(idx,elem);
                              }
                            //}
                            clearInterval(adsenseInt);
                          }
                       }
                    },500);
  },
  adsmartifai:function(){
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://ssptag.smartifai.ai/?c=res&m=ads';
    scriptElement.async = true;
    scriptElement.onload = function() {
      tmv.appendAd({ placementId: 412, type: "inImage" });
    };
    document.head.appendChild(scriptElement);
  }
};
if(host.indexOf('bengali')>-1){
  backfillorder=2;
}
var voxloadflag=0;
var voxFlag=1;
var sspflagload = 0;
var gccflag=0;
var gccflagin=0;
window.addEventListener("scroll", function(){
if(sspflagload==0){
sspflagload=1;
var con_code = '';
var gcccountryCodes = ['BH','KW','OM','QA','SA','AE'];
var gcccountryCodesInd = ['IN'];
var countryInt;
countryInt = setInterval(function(){
if(document.body){
    var gapiDetails = document.body.getAttribute('data-gapi');
    if(gapiDetails){
        clearInterval(countryInt);
        var tmpgapijson = JSON.stringify(gapiDetails);
        var jdata = gapiDetails;
        jdata = JSON.parse(jdata);
        console.log(jdata);
        con_code = jdata.country_code;
        if(gcccountryCodes.includes(con_code)){
          gccflag=1333;
        }
        if(!gcccountryCodesInd.includes(con_code)){
          gccflagin=1;
          backfillorder=1;
        }
if(document.querySelector('.image_listical')){
  var imageelem = document.querySelectorAll('.image_listical');
    var imglen = imageelem.length;
    if(imglen>1){
        voxloadflag=1;
    }
    if(imglen > 0){
        for(g=0;g<imglen;g++){
            if(g==0){
                imageelem[0].setAttribute('data-adgdisplay',false);
                if(backfillorder==1 || backfillorder==3){
                  backfillWidgets.adsenseWidget(finalHtmlCss,1,g,imageelem[0]);
                }else if(backfillorder==2 || backfillorder==4){
                  //if(domainmiddle != 'gizbot' && host != 'hindi.oneindia.com'){
                    if(gccflag==1){
                      backfillWidgets.adsmartifai();
                    }else{
                      backfillWidgets.voxWidget(g,imageelem[g]);
                    }
                  //}
                }
            }else{
              if(g>0){
                  if(domainmiddle == 'boldsky' || domainmiddle=='goodreturns' || domainmiddle == 'oneindia' || domainmiddle=='filmibeat'){
                    if(g%2==0){
                        imageelem[g].setAttribute('data-adgdisplay',false);
                        if(backfillorder==2 || backfillorder==4){
                          //if(domainmiddle != 'gizbot' && host != 'hindi.oneindia.com'){
                            if(gccflag==1){
                              backfillWidgets.adsmartifai();
                            }else{
                              backfillWidgets.voxWidget(g,imageelem[g]);
                            }
                          //}
                        }
                    }
                    }else{
                        if(g%2==1){
                            imageelem[g].setAttribute('data-adgdisplay',false);
                            if(backfillorder==2 || backfillorder==4){
                              //if(domainmiddle != 'gizbot' && host != 'hindi.oneindia.com'){
                                if(gccflag==1){
                                  backfillWidgets.adsmartifai();
                                }else{
                                  backfillWidgets.voxWidget(g,imageelem[g]);
                                }
                              //}
                            }
                        }
                    }
              }
            }
        }
    }
}
}
}
},1000);
setTimeout(function(){
  clearInterval(countryInt);
},500);
}
});
if(document.querySelector('.myimg')){
  var imageelem = document.querySelectorAll('.myimg');
    var imglen = imageelem.length;
    if(imglen > 0){
        for(g=0;g<imglen;g++){
            if(g==0){
                imageelem[0].setAttribute('data-adgdisplay',false);
                if(backfillorder==1){
                  backfillWidgets.adsenseWidget(finalHtmlCss,2,g,imageelem[g]);
                }
            }
        }
    }
}

/*VOX Code Ends*/
var wcpromotion = 0;
if(wcpromotion==1){
if(trackpagetype=='article'){
  function oiinsertAfterWc(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
  function capitalizeFirstLetter(string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  if(liveProtocol=='www'){
    var wchost = 'English';
  }else{
    var wchost = capitalizeFirstLetter(liveProtocol);
  }
  var utm_wc_source = hostParam+wchost;
if(domainmiddle=='mykhel' || domainmiddle=='oneindia'){
    var titlearr = ['Explore Now: Cricket World Cup Action LIVE!'];
    var randtitle = titlearr[Math.random() * titlearr.length | 0];
    if(domainmiddle=='oneindia'){
         var wcPromoCssMobi='<style>.oi-wc-headingtxt,.oi-wc-smlogo{vertical-align:middle;display:inline-block}.theme-dark,.theme-light{--wc-pormo-bg:#2ca3ff;--wc-promo-color:#fff;--wc-sm-logo:url(https://www.mykhel.com/images/cwc-2023-logo-new.svg)}#wc-promotion{margin:12px 20px;font-family: Arial, Helvetica, sans-serif;}.oi-wc-promo-header{background:var(--wc-pormo-bg)}.oi-wc-smlogo{background:var(--wc-sm-logo) no-repeat 0 0;width:24px;height:27px}.oi-wc-headingtxt{font-size:15px;color:#fff;font-weight:600;margin:0 0 0 5px}.oi-wc-promolinks{padding:0;background:#f2f2f2;color:#333;font-size:15px;font-weight:400;text-align:center}.oi-wc-promolinks a{padding:20px 4px;font-size:15px;font-weight:400;position:relative;color:var(--wc-promolinks-color);display:inline-block}.theme-light{--wc-pormolinks-bg:#f2f2f2;--wc-promolinks-color:#333}.theme-dark{--wc-pormolinks-bg:#262322;--wc-promolinks-color:#d2d5d9}@media screen and (max-width:400px){.oi-wc-headingtxt,.oi-wc-promolinks,.oi-wc-promolinks a{font-size:13px;line-height:14px}}.oi-wc-promo-header{background:#2ca3ff;padding:10px 5px;text-align:center}</style>';
    }else{
      var wcPromoCssMobi="<style>#wc-promotion{margin:12px 20px;}.oi-wc-promo-wrapper{padding: 0px 0px 0px;}.oi-wc-promo-header{background:var(--wc-pormo-bg);padding:10px 5px;text-align:center}.oi-wc-smlogo{vertical-align:middle;display:inline-block;background:var(--wc-sm-logo) no-repeat 0 0;width:24px;height:27px}.oi-wc-headingtxt{font-size:15px;color:var(--wc-promo-color);font-weight:600;display:inline-block;vertical-align:middle;margin:0 0 0 5px}.oi-wc-promolinks{padding:0 0;background:var(--wc-pormolinks-bg);color:var(--wc-promolinks-color);font-size:15px;font-weight:400;text-align:center}.oi-wc-promolinks a{padding:20px 4px;font-size:15px;font-weight:400;position:relative;color:var(--wc-promolinks-color);display:inline-block}.theme-light{--wc-pormo-bg:#2ca3ff;--wc-promo-color:#fff;--wc-pormolinks-bg:#f2f2f2;--wc-promolinks-color:#333;--wc-sm-logo:url(https://www.mykhel.com/images/cwc-2023-logo-new.svg)}.theme-dark{--wc-pormo-bg:#2ca3ff;--wc-promo-color:#fff;--wc-pormolinks-bg:#262322;--wc-promolinks-color:#d2d5d9;--wc-sm-logo:url(https://www.mykhel.com/images/cwc-2023-logo-new.svg)}@media screen and (max-width:400px){.oi-wc-headingtxt{font-size:13px;line-height:14px;}.oi-wc-promolinks,.oi-wc-promolinks a{font-size:13px;line-height:14px;}}</style>";
    }
    
    var wcPromoCssWeb="<style>.oi-wc-headingtxt,.oi-wc-smlogo{vertical-align:middle;display:inline-block}.theme-dark,.theme-light{--wc-pormo-bg:#2ca3ff;--wc-promo-color:#fff;--wc-sm-logo:url(https://www.mykhel.com/images/cwc-2023-logo-new.svg)}#wc-promotion{margin:10px 0;font-family: Arial, Helvetica, sans-serif;}.oi-wc-promo-header{background:var(--wc-pormo-bg)}.oi-wc-smlogo{background:var(--wc-sm-logo) no-repeat 0 0;width:24px;height:27px}.oi-wc-headingtxt{font-size:15px;color:#fff;font-weight:600;margin:0 0 0 5px}.oi-wc-promolinks{padding:0;background:#f2f2f2;color:#333;font-size:15px;font-weight:400;text-align:center}.oi-wc-promolinks a{padding:20px 4px;font-size:15px;font-weight:400;position:relative;color:var(--wc-promolinks-color);display:inline-block}.theme-light{--wc-pormolinks-bg:#f2f2f2;--wc-promolinks-color:#333}.theme-dark{--wc-pormolinks-bg:#262322;--wc-promolinks-color:#d2d5d9}@media screen and (max-width:400px){.oi-wc-headingtxt,.oi-wc-promolinks,.oi-wc-promolinks a{font-size:13px;line-height:14px}}.oi-wc-promo-header{background:#2ca3ff;padding:10px 5px;text-align:center}</style>";
    if(domainmiddle=='oneindia'){
      var tmphost = host1.replace('oneindia','mykhel');
      var wcPromoHtmlMobi='<section><div id="wc-promotion"><div class="oi-wc-promo-wrapper"><div class="oi-wc-promo-header"><a href=https://'+tmphost+'/ipl-auction-2023/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction"><span class="oi-wc-headingtxt">IPL 2024 AUCTION</span></a></div><div class="oi-wc-promolinks"><a href="https://'+tmphost+'/ipl-auction-sold-players/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction">Sold Players</a>|<a href="https://'+tmphost+'/ipl-auction-unsold-players/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction">Unsold Players</a>|<a href="https://'+tmphost+'/ipl-auction-team-budget/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction">Team Budget</a></div></div></div></section>';
    }else{
      var wcPromoHtmlMobi='<section><div id="wc-promotion"><div class="oi-wc-promo-wrapper"><div class="oi-wc-promo-header"><a href="https://'+host1+'/ipl-auction-2023/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction"><span class="oi-wc-headingtxt">IPL 2024 AUCTION</span></a></div><div class="oi-wc-promolinks"><a href="https://'+host1+'/ipl-auction-sold-players/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction">Sold Players</a>|<a href=https://'+host1+'/ipl-auction-unsold-players/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction">Unsold Players</a>|<a href=https://'+host1+'/ipl-auction-team-budget/?utm_source=ArticlePage&utm_medium=MidArticle&utm_campaign=IPLAuction">Team Budget</a></div></div></div></section>';
    }

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      var wcflag = 0;
        window.addEventListener("scroll", function(){
        if(wcflag==0){
          if(document.querySelector('#are-slot-2')){
              var parent_div = document.querySelector('#are-slot-2');
              wcflag=1;
              var finalHtmlCssWc = wcPromoCssMobi+wcPromoHtmlMobi;
              //document.querySelector('#taboola-mid-home-stream-article').style.display='none';
              var wc_promotion_div = document.createElement('div');
              wc_promotion_div.id = 'ipl-promotion';
              wc_promotion_div.innerHTML=finalHtmlCssWc;
              oiinsertAfterWc(parent_div, wc_promotion_div);
          }
        }
    });
    }else{
        if(domainmiddle=='oneindia'){
          var conElem = document.querySelector('#taboola-mid-article-thumbnails');
        }else{
          var conElem = document.querySelector('#are-slot-1');
        }
        if(conElem){
              var parent_div = conElem;
              wcflag=1;
              var finalHtmlCssWc = wcPromoCssWeb+wcPromoHtmlMobi;
              //document.querySelector('#taboola-mid-home-stream-article').style.display='none';
              var wc_promotion_div = document.createElement('div');
              wc_promotion_div.id = 'ipl-promotion';
              wc_promotion_div.innerHTML=finalHtmlCssWc;
              oiinsertAfterWc(parent_div, wc_promotion_div);
          }
    }
}
}
}
</script> <script type="text/javascript" data-pagespeed-no-defer>
if(window.location.search.indexOf('?ao=1') > -1){
    var totalNoOfFolds=1,totalNoOfAds=0,avgFolds=1,adfetched=0,adfilled=0,lineitemid='NA',creativeid='NA';
    var globalDataObj={};
    mykhelSticky=0;
    refiner_live=0;
    globalAdObj.outstream=0;
    globalAdObj.cube=0;
    liteflag=1;
    // Initialize an array of script URLs
if(domainmiddle=='drivespark'){
    var scriptUrls = [
      { key: 'amazon', url: 'https://c.amazon-adsystem.com/aax2/apstag.js' },
      { key: 'prebid', url: '/common/oijs/prebid-without-appnex.js' },
      { key: 'gpt', url: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js' }
    ];
}else{
    var scriptUrls = [
      { key: 'amazon', url: 'https://c.amazon-adsystem.com/aax2/apstag.js' },
      { key: 'prebid', url: '/common/oijs/prebid.js' },
      { key: 'gpt', url: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js' }
    ];
}

var bidData = [];
var excludedSizes = []; // Sizes to exclude
function isSizeExcluded(bidSizes) {
  return bidSizes.some(function (bidSize) {
    return excludedSizes.some(function (excludedSize) {
      return (
        bidSize[0] === excludedSize[0] && bidSize[1] === excludedSize[1]
      );
    });
  });
}
// Define an array to store ad details
// Define an object to store ad details with ad unit names as keys
var adDetailsObject = {};
googletag.cmd.push(function() {
  function onAdResponse(adEvent) {
    var adUnit = adEvent.slot.getAdUnitPath();
    var isEmpty = adEvent.isEmpty;
    var lineItemId = adEvent.lineItemId;
    var creativeId = adEvent.creativeId;
    var slotId = adEvent.slot.getSlotElementId();

    // Create an object with ad details
    var adDetail = {
      isEmpty: isEmpty,
      lineItemId: lineItemId,
      creativeId: creativeId,
      slotId: slotId,
    };
    adDetailsObject[adUnit] = adDetail;
  }
  googletag.pubads().addEventListener('slotRenderEnded', onAdResponse);
});
function findMatchingObject(obj, value) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key].slotId === value) {
        return obj[key];
      }
    }
  }
  return 0; // Return null if no match is found
}

function getAdDetailsByUnitName(unitName,cpmval,displayval) {
  if (adDetailsObject[unitName]) {
    var adDetails = adDetailsObject[unitName];
    var isempty = adDetails.isEmpty;
      var lineitem_id = adDetails.lineItemId === null ? 'NA' : adDetails.lineItemId;
      var createive_id = adDetails.creativeId === null ? 'NA' : adDetails.creativeId;
      if(isempty==false){
        var tmpadfetched=1;
        var tmpadfilled=1;
        var tmplineitemid=lineitem_id;
        var tmpcreativeid=createive_id;
        globalDataObj[displayval] = {'name':unitName,'value':cpmval,'Ad_fetched':tmpadfetched,'Ad_display':tmpadfilled,'lineItem':tmplineitemid,'creativeId':tmpcreativeid};
      }else{
        globalDataObj[displayval] = {'name':unitName,'value':cpmval,'Ad_fetched':adfetched,'Ad_display':adfilled,'lineItem':lineitemid,'creativeId':creativeid};
      }
  } else {
    globalDataObj[displayval] = {'name':unitName,'value':cpmval,'Ad_fetched':adfetched,'Ad_display':adfilled,'lineItem':lineitemid,'creativeId':creativeid};
    var matchingObject = findMatchingObject(adDetailsObject, unitName);
    if(matchingObject!=0){
      var isempty = matchingObject.isEmpty;
      var lineitem_id = matchingObject.lineItemId === null ? 'NA' : matchingObject.lineItemId;
      var createive_id = matchingObject.creativeId === null ? 'NA' : matchingObject.creativeId;
      if(isempty==false){
        var tmpadfetched=1;
        var tmpadfilled=1;
        var tmplineitemid=lineitem_id;
        var tmpcreativeid=createive_id;
        globalDataObj[displayval] = {'name':unitName,'value':cpmval,'Ad_fetched':tmpadfetched,'Ad_display':tmpadfilled,'lineItem':tmplineitemid,'creativeId':tmpcreativeid};
      }
    }
    
  }
}

function fetchCPMvalue() {
  var output = {};
  function forEach(responses, cb) {
    Object.keys(responses).forEach(function (adUnitCode) {
      var response = responses[adUnitCode];
      response.bids.forEach(function (bid) {
        cb(adUnitCode, bid);
      });
    });
  }
  var winners = pbjs.getAllWinningBids();
  var winningLen = winners.length;
  forEach(pbjs.getBidResponses(), function (code, bid) {
    if (bid.cpm !== null && bid.cpm !== undefined) {
      var bidSizes = bid.sizes || []; // Use bid.sizes
      if (!output[code]) {
        output[code] = {
          cpm: bid.cpm,
          sizes: bidSizes, // Initialize an array to store sizes
        };
      } else {
        output[code].sizes = output[code].sizes.concat(bidSizes); // Add sizes to the existing sizes array
      }
    } else {
      if (!output[code]) {
        output[code] = {
          cpm: 0, // Default value of 0 when there is no bid
          sizes: [],
        };
      }
    }
  });

  forEach(pbjs.getNoBids && pbjs.getNoBids() || {}, function (code, bid) {
    var bidSizes = bid.sizes || []; // Use bid.sizes
    if (!isSizeExcluded(bidSizes)) {
      if (!output[code]) {
        output[code] = {
          cpm: 0,
          sizes: [],
        };
      }
    }
  });
  // Determine the number of ads on the page dynamically
  var outputObj = Object.keys(output);
  var numAdsOnPage = outputObj.length;
  // Create an array of ad unit names based on the number of ads
  var adUnitNames = [];
  for (var i = 0; i < numAdsOnPage; i++) {
    var slno_unit = parseInt(i)+1;
    adUnitNames.push("GAM" + slno_unit);
  }
  globalDataObj['no_of_ads_hb']=numAdsOnPage;
  // Create an array of objects with ad unit names, CPM values, and sizes (or empty array if no bid or size is excluded)
  adUnitNames.forEach(function (adUnitName,idx) {
    var adData = output[adUnitName] || { cpm: 0, sizes: [] };
    var adunitname = outputObj[idx];
    var cpmval = adData.cpm || 0;
    getAdDetailsByUnitName(adunitname,cpmval,adUnitName);
  });
}



function checkScriptStatus(urlObj) {
  var headScripts = document.head.getElementsByTagName('script');
  var bodyScripts = document.body.getElementsByTagName('script');
  for (var i = 0; i < headScripts.length; i++) {
    if (headScripts[i].src.indexOf(urlObj.url)>-1) {
      globalDataObj[urlObj.key] = 'Yes';
      return true;
    }
  }
  for (var i = 0; i < bodyScripts.length; i++) {
    if (bodyScripts[i].src.indexOf(urlObj.url) > -1) {
      globalDataObj[urlObj.key] = 'Yes';
      return true;
    }
  }
  globalDataObj[urlObj.key] = 'No'; // Set 'No' if the script is not found
  return false;
}

// Loop through the array of script URLs and check their status
for (var i = 0; i < scriptUrls.length; i++) {
  checkScriptStatus(scriptUrls[i]);
}
    if(document.getElementById('bottomAdWrapper')){
      document.getElementById('bottomAdWrapper').classList.add('oi-axt');
    }
    
    if(document.getElementById('taboola-mid-article-thumbnails')){
      document.getElementById('taboola-mid-article-thumbnails').classList.add('oiadv');
    }
    
    if(document.getElementById('oiNotification')){
      document.getElementById('oiNotification').remove();
    }
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        if(document.querySelector("header")){
          document.querySelector("header").style.cssText='display:none!important;clear:both;';
        }
    }else{
      if(document.querySelector(".header-nav")){
        document.querySelector(".header-nav").style.cssText='display:none!important;clear:both;';
      }
    }
    
    if(document.getElementById('grContainerMain')){
        var isscroll=0;
        function checkAdDbPage(){
          setTimeout(function() {
            /*if(document.querySelector("#taboola-mid-article-thumbnails")){
              document.querySelector("#taboola-mid-article-thumbnails").classList.add('oiad');
            }*/
            if(document.querySelector(".db-oiad")){
              document.querySelector(".db-oiad").style.cssText='position:static!important;clear:both;';
            }
            if(document.querySelector('.oiadv')){
                var adContainers = document.querySelectorAll('.oiadv');
            }else{
                var adContainers = document.querySelectorAll('.oi-axt');
            }
           totalNoOfAds =  adContainers.length;
          for (let i = 0; i < adContainers.length; i++) {
              if(document.querySelectorAll(".db-oiad")[i]){
                document.querySelectorAll(".db-oiad")[i].style.cssText='position:static!important;clear:both;';
              }
              const currentAdContainer = adContainers[i];
              var divWidth = currentAdContainer.clientWidth;
              var divHeight = currentAdContainer.clientHeight;
              const overlay = document.createElement("div");
              currentAdContainer.classList.remove('gr-db-ad-content','gr-db-content-dynamic-ad');
              currentAdContainer.style.cssText='display:block!important;position:relative;min-height:250px;min-width:300px;clear:both;';
              currentAdContainer.setAttribute('data-isbackfill','false');
              //currentAdContainer.innerHTML='';
              const topOffset = currentAdContainer.offsetTop;
              overlay.className = "ad-overlay1";
              overlay.style.width=divWidth+'px';
              //overlay.style.height=divHeight+'px';
              const slno = parseInt(i)+1;
              if(i==0){
                var distxt = '';
                overlay.innerHTML = "Advertisement: "+slno+"<br/>From Top: "+topOffset+" px<br/>"+distxt; // Customize overlay text
              }else{
                const currentAdContainer1 = adContainers[i-1];
                const nextAdContainer = adContainers[i];
                const currentBottom = currentAdContainer1.offsetTop + currentAdContainer1.offsetHeight;
                const nextTop = nextAdContainer.offsetTop;
                const distance = nextTop - currentBottom;
                const winhgt = window.innerHeight;
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                  const nofolds = Math.floor(parseInt(distance)/parseInt(winhgt));
                  var folds = `No Of Folds: ${nofolds} <br/>`;
                  var distxt = `Dist between Ad ${i} & Ad ${i + 1}: ${distance} px <br/>`;
                  totalNoOfFolds = totalNoOfFolds+parseInt(nofolds);
                  avgFolds = avgFolds+','+parseInt(nofolds);
                }else{
                  const nofolds = Math.floor(parseInt(topOffset)/parseInt(winhgt));
                  var folds = `No Of Folds: ${nofolds} <br/>`;
                  var distxt = '';
                  totalNoOfFolds = totalNoOfFolds+parseInt(nofolds);
                  avgFolds = avgFolds+','+parseInt(nofolds);
                }
                overlay.innerHTML = "Advertisement: "+slno+"<br/>"+folds+"From Top: "+topOffset+" px<br/>"+distxt; // Customize overlay text
                console.log(`Distance between Ad ${i} and Ad ${i + 1}: ${distance}px`);
              }
              //adContainer.parentNode.insertBefore(overlay, adContainer.nextSibling);
              currentAdContainer.appendChild(overlay);
              
          }
          //avgFolds = Math.floor(parseInt(totalNoOfFolds)/parseInt(totalNoOfAds));
          globalDataObj['no_of_ads'] = totalNoOfAds;
          globalDataObj['no_of_folds'] = totalNoOfFolds
          globalDataObj['avg_of_folds'] = avgFolds;
          fetchCPMvalue();
          var globaljsonString = JSON.stringify(globalDataObj);
          localStorage.setItem('globaldata',globaljsonString);
          console.table(globalDataObj);
        },2000);
    }
    window.addEventListener("scroll", function(){
        if(isscroll==0){
            isscroll=1;
              checkAdDbPage();
          }
      });
    }else{
    setTimeout(function() {
                if(document.querySelector('.oiadv')){
                    var adContainers = document.querySelectorAll('.oiadv');
                }else{
                    var adContainers = document.querySelectorAll('.oi-axt');
                }
        //document.addEventListener("DOMContentLoaded", function() {
          // Calculate and log the distances between ad containers
          totalNoOfAds =  adContainers.length;
          for (let i = 0; i < adContainers.length; i++) {
              const currentAdContainer = adContainers[i];
              var divWidth = currentAdContainer.clientWidth;
              var divHeight = currentAdContainer.clientHeight;
              const overlay = document.createElement("div");
                currentAdContainer.classList.remove('oi-axt');
                currentAdContainer.setAttribute('data-isbackfill','false');
      currentAdContainer.style.cssText='display:block!important;position:relative;min-height:250px;min-width:300px;clear:both;';
              //currentAdContainer.innerHTML='';
              const topOffset = currentAdContainer.offsetTop;
              overlay.className = "ad-overlay1";
              overlay.style.width=divWidth+'px';
              //overlay.style.height=divHeight+'px';
              const slno = parseInt(i)+1;
              if(i==0){
                var distxt = '';
                overlay.innerHTML = "Advertisement: "+slno+"<br/>From Top: "+topOffset+" px<br/>"+distxt; // Customize overlay text
              }else{
                const currentAdContainer1 = adContainers[i-1];
                const nextAdContainer = adContainers[i];
                const currentBottom = currentAdContainer1.offsetTop + currentAdContainer1.offsetHeight;
                const nextTop = nextAdContainer.offsetTop;
                const distance = nextTop - currentBottom;
                const winhgt = window.innerHeight;
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                  const nofolds = Math.floor(parseInt(distance)/parseInt(winhgt));
                  var folds = `No Of Folds: ${nofolds} <br/>`;
                  var distxt = `Dist between Ad ${i} & Ad ${i + 1}: ${distance} px <br/>`;
                  totalNoOfFolds = totalNoOfFolds+parseInt(nofolds);
                  avgFolds = avgFolds+','+parseInt(nofolds);
                }else{
                  const nofolds = Math.floor(parseInt(topOffset)/parseInt(winhgt));
                  var folds = `No Of Folds: ${nofolds} <br/>`;
                  var distxt = '';
                  totalNoOfFolds = totalNoOfFolds+parseInt(nofolds);
                  avgFolds = avgFolds+','+parseInt(nofolds);
                }
                overlay.innerHTML = "Advertisement: "+slno+"<br/>"+folds+"From Top: "+topOffset+" px<br/>"+distxt; // 
                console.log(`Distance between Ad ${i} and Ad ${i + 1}: ${distance}px`);
              }
              //adContainer.parentNode.insertBefore(overlay, adContainer.nextSibling);
              currentAdContainer.appendChild(overlay);
              
          }
          //avgFolds = Math.floor(parseInt(totalNoOfFolds)/parseInt(totalNoOfAds));
          globalDataObj['no_of_ads'] = totalNoOfAds;
          globalDataObj['no_of_folds'] = totalNoOfFolds
          globalDataObj['avg_of_folds'] = avgFolds;
          fetchCPMvalue();
          var globaljsonString = JSON.stringify(globalDataObj);
          localStorage.setItem('globaldata',globaljsonString);
          
          console.table(globalDataObj);
  },5000);
    }

  }
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; 
if(isAndroid) {
  if(document.getElementById('open-app')){
    document.getElementById('open-app').style.display='block';
  }else if(document.querySelector('.open-app')){
    document.querySelector('.open-app').style.display='block';
  }
}
if(window.location.search.indexOf('cms_pn=promo')>-1){
    var notifyCssWeb = '<style>.oi-noti-image{height:56px;width:100px;overflow:hidden;vertical-align:middle;border-radius:6px 0 0 6px;text-align:center;float:left;padding:6px 0}.oi-noti-image a{display:block;width:90px;height:56px;}.oi-noti-image img{max-width:100%;width:auto;height:100%}.oi-noti-site{color:grey;font-size:14px;line-height:14px;font-family:Arial}#oi-noti-wrapper{width:310px;border:0;bottom:10px;right:-200px;position:fixed;text-align:left;z-index:9999999999;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:400;border-radius:6px;-webkit-box-shadow:2px 2px 10px 2px hsla(0,0%,60%,.2);box-shadow:2px 2px 10px 2px hsla(0,0%,60%,.2);background-color:#fff;padding:5px;-moz-transition:all .27s ease-in;-o-transition:all .27s ease-in;-webkit-transition:all .27s ease-in;transition:all .27s ease-in;animation:mymove 2s;animation-fill-mode:forwards}@keyframes mymove{from{right:-200px}to{right:10px}}.oi-noti-content{float:right;width:200px;line-height: 18px;padding-top:5px;}.oi-noti-content p{padding:0;margin:0}.oi-noti-content a{text-decoration:none;font-size:14px}.oi-noti-image{height:56px;width:90px;overflow:hidden;vertical-align:middle;border-radius:6px 0 0 6px;text-align:center;float:left;padding-top:15px}#oi-noti-close{position:absolute;top:2px;right:2px;height:24px;width:24px;cursor:pointer;-webkit-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:.2s ease-in-out;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}#oi-noti-close:after{content:"";display:block;background-color:gray;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#oi-noti-close:before{content:"";display:block;background-color:gray;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#oi-noti-close:before{width:16px;height:2px}#oi-noti-close:after{height:16px;width:2px}.oi-noti-content p span{display:block;padding:2px 0}.oi-noti-time{font-size:10px;opacity:.6;color:grey;font-family:Arial}.oi-noti-head{color:#2d2d2d;font-size:13px;line-height:17px;font-family:Arial}.oi-noti-head a{color:#2d2d2d;text-decoration:none}.oibrand{font-family:Arial;font-size:10px;color:#bebebe;float:left;font-weight:400;width:135px;line-height: 15px;}.oispons{font-family:Arial;font-size:10px;color:#bebebe;float:right;padding-right:10px!important;line-height: 15px;}</style>';
var notifyCssMobi='<style>.oi-noti-image{height:56px;width:100px;overflow:hidden;vertical-align:middle;border-radius:6px 0 0 6px;text-align:center;float:left;padding:6px 0}.oi-noti-image a{display:block;width:90px;height:56px;}.oi-noti-image img{max-width:100%;width:auto;height:100%}.oi-noti-site{color:grey;font-size:14px;line-height:14px;font-family:Arial}#oi-noti-wrapper{width:99%;display:flex;margin:0 auto;border:0;top:-100px;left:0;right:0;position:fixed;text-align:left;z-index:99999999;-webkit-box-sizing:border-box;box-sizing:border-box;font-weight:400;border-radius:6px;-webkit-box-shadow:2px 2px 10px 2px hsla(0,0%,60%,.2);box-shadow:2px 2px 10px 2px hsla(0,0%,60%,.2);background-color:#fff;padding:5px;-moz-transition:all .27s ease-in;-o-transition:all .27s ease-in;-webkit-transition:all .27s ease-in;transition:all .27s ease-in;animation:mymove 2s;animation-fill-mode:forwards}@keyframes mymove{from{top:-100px}to{top:0px}}.oi-noti-content{float:left;width:215px;padding-top:6px;font-size:15px;padding-left: 10px;}.oi-noti-content p{padding:0;margin:0}#oi-noti-close{position:absolute;top:2px;right:2px;height:24px;width:24px;cursor:pointer;-webkit-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:.2s ease-in-out;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}#oi-noti-close:after{content:"";display:block;background-color:gray;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#oi-noti-close:before{content:"";display:block;background-color:gray;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}#oi-noti-close:before{width:16px;height:2px}#oi-noti-close:after{height:16px;width:2px}.oi-noti-content p span{display:block;padding:2px 0}.oi-noti-time{font-size:10px;opacity:.6;color:grey;font-family:Arial}.oi-noti-head{color:#2d2d2d;font-size:13px;line-height:17px;font-family:Arial}.oi-noti-head a{color:#2d2d2d;text-decoration:none}.oibrand{font-family:Arial;font-size:10px;color:#bebebe;float:left;font-weight:400;width:135px;line-height:15px;}.oispons{font-family:Arial;font-size:10px;color:#bebebe;float:right;padding-right:10px!important;line-height:15px;}</style>';
var notifyHtmlWeb = '';
    function trackShown(tab_vis,device_type){
    var link = tab_vis;
    var last_sub_id='';
    fetch("/scripts/cms/controller.php?module=subscription&type=notificationShown&url="+link+"&last_sub_id="+last_sub_id+"&device_type="+device_type+"&ntype=promarticle&dbId=", {
        method: "post"
      }).catch(function(err){
        console.error('Inside 1st error:', err);
      });
}
function trackClick(tab_vis,device_type){
    var link = tab_vis;
    var last_sub_id='';
    fetch("/scripts/cms/controller.php?module=subscription&type=notificationClicked&url="+link+"&last_sub_id="+last_sub_id+"&device_type="+device_type+"&ntype=promarticle&dbId=", {
        method: "post"
      }).catch(function(err){
        console.error('Inside 1st error:', err);
      });
}
function createPromoNotification(){
    var dvarr = [1,2];
    var flg = dvarr[Math.random() * dvarr.length | 0];
    
                        var tab_title = 'Apply for Bajaj Finserv Personal Loan up to Rs. 40 lakh with minimal paperwork';
                        var tab_url = 'https://www.bajajfinserv.in/personal-loan-for-salaried-individuals?utm_source=prime_oneIndia&utm_medium=Internalereff&utm_campaign=goodreturn';
                        var tab_vis = 'https://www.bajajfinserv.in/personal-loan-for-salaried-individuals';
                        var tab_img = '/images/bajaj4.jpg';
                        if (flg==2) {
                            notifyHtmlWeb+=notifyCssMobi;
                            var device_type = 'mobile';
                        }else{
                          notifyHtmlWeb+=notifyCssWeb;
                          var device_type='computer';
                        }
                        var ntype = 'promarticle';
                        notifyHtmlWeb+='<div id="oi-noti-wrapper"><div class="oi-noti-image"><a href="'+tab_url+'" target="_blank"><img data-pagespeed-no-defer src="'+tab_img+'"></a></div> <div class="oi-noti-content"> <p><a href="'+tab_url+'" target="_blank" class="tablink"><span class="oi-noti-site"></span> <span class="oi-noti-head">'+tab_title+'</span></a></p></div> <span id="oi-noti-close" onclick="oiNotioff()"></span></div>';
                          var popupDiv = document.createElement('div');
                          popupDiv.id = 'notifyDiv';
                          popupDiv.innerHTML = notifyHtmlWeb;
                          trackShown(tab_vis,device_type);
                          setTimeout(function(){
                              document.getElementsByTagName('body')[0].appendChild(popupDiv);
                              trackClick(tab_vis,device_type);
                              setTimeout(function(){
                                window.location.href = document.querySelector('.tablink').getAttribute('href');
                              },2000);
                            },1000);
}
//createPromoNotification();
function trackImp(impUrl){
  fetch(impUrl, {
          method: "GET"
        }).catch(function(err){
          console.error('Inside Imp error:', err);
        });
}
function getNotifyData(){
    var host = window.location.hostname;
    var dvarr = [2];
    var flg = dvarr[Math.random() * dvarr.length | 0];
  var no_ads = 1;
      var device_type=flg;
      fetch("https://"+host+"/scripts/cms/controller.php?module=subscription&type=getAdgebraAd&last_sub_id=&device_type="+device_type+"&noAds="+no_ads+"&campid=",{
        method: "post"
        }).then(function(e) {
            e.text().then(function(data){
          adgebraResponse = data;
          if(adgebraResponse !='' && adgebraResponse !=undefined){
          var adgRes = JSON.parse(adgebraResponse);
          if(adgRes[0] !='' && adgRes[0] != undefined && adgRes[0] != null){
            //if(adgRes !='' && adgRes != undefined && adgRes != null){
                  var adgUrl = decodeURIComponent(adgRes[0]['trackerUrl']).replace(/\+/g,' ');
                  var adgTitle = decodeURIComponent(adgRes[0]['notificationMessage']).replace(/\+/g,' ');
                  var adgImg = adgRes[0]['notificationImage'];
                  var adCamp = adgRes[0]['campId'];
                  if (flg==2) {
                      notifyHtmlWeb+=notifyCssMobi;
                  }else{
                    notifyHtmlWeb+=notifyCssWeb;
                  }
                  notifyHtmlWeb+='<div id="oi-noti-wrapper"><div class="oi-noti-image"><a href="'+adgUrl+'" target="_blank"><img data-pagespeed-no-defer src="'+adgImg+'"></a></div> <div class="oi-noti-content"> <p><span class="oi-noti-site"></span> <span class="oi-noti-head"><a href="'+adgUrl+'" target="_blank">'+adgTitle+'</a></span></p></div> <span id="oi-noti-close" onclick="oiNotioff()"></span></div>';
                    var popupDiv = document.createElement('div');
                    popupDiv.id = 'notifyDiv';
                    popupDiv.innerHTML = notifyHtmlWeb;
                    document.getElementsByTagName('body')[0].appendChild(popupDiv);
                      var impUrl = adgRes[0]['impressionTrackerUrl'];
                      trackImp(impUrl);
                    /*setTimeout(function(){
                     if(document.getElementById("notifyDiv")){
                            document.getElementById("notifyDiv").remove();
                        }
                    },15000);*/
                  
            }
            }
          });
        })["catch"](function(e) {
            console.log("Fetch Error :-S", e)
        });
}
getNotifyData();
}
//For Bot System
console.log(globalAdObj.gpt);
if(document.referrer.indexOf('/common/trendingarticles.html')>-1 && window.location.search.indexOf('organic=true')>-1){
//if(window.location.search.indexOf('organic=true')>-1){
function taboola_main1(){
    var tabJsfile1 = 'oneindiaenglish';
    if(liveProtocol=='www'){
        tabJsfile1 = 'oneindiaenglish';
    }else{
        tabJsfile1 = domainmiddle+liveProtocol;
    }
    window._taboola = window._taboola || [];
        _taboola.push({article:'auto'});
    !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
    }(document.createElement('script'),
    document.getElementsByTagName('script')[0],
    '//cdn.taboola.com/libtrc/oneindiadigital-'+tabJsfile1+'/loader.js',
    'tb_loader_script');
    if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
}
taboola_main1();


    function getTaboolaWidget1(mode,container,placement,target_type){
            window._taboola = window._taboola || [];
              _taboola.push({
                mode: mode,
                container: container,
                placement: placement,
                category:'same',
                target_type: target_type
              });
              
        }
        if(document.querySelector('.inarticlead')){
              if(document.querySelectorAll('.inarticlead')[0]){
                document.querySelectorAll('.inarticlead')[0].innerHTML='';
                var customCampElem1  = document.querySelectorAll('.inarticlead')[0];
                var oicustomCampDiv1 = document.createElement('div');
                oicustomCampDiv1.id = 'taboola-below-article-thumbnails';
                customCampElem1.insertAdjacentElement('afterbegin', oicustomCampDiv1);
                if (document.getElementById("taboola-below-article-thumbnails")) {
                          var mode = 'thumbs-feed-01-a';
                          var container = 'taboola-below-article-thumbnails';
                          var placement = 'Below Article Thumbnails';
                          var target_type = 'mix';
                          getTaboolaWidget1(mode,container,placement,target_type);
                }
              }
        }
        /*if(document.getElementById('containerMain')){
            var customCampElem1 = document.getElementById('containerMain');
            var oicustomCampDiv1 = document.createElement('div');
            oicustomCampDiv1.id = 'taboola-mid-home-stream-article';
            customCampElem1.insertAdjacentElement('afterbegin', oicustomCampDiv1);
            if (document.getElementById("taboola-mid-home-stream-article")) {
                      var mode = 'thumbs-feed-01-stream';
                      var container = 'taboola-mid-home-stream-article';
                      var placement = 'Taboola Mid Home Stream Article';
                      var target_type = 'mix';
                      getTaboolaWidget1(mode,container,placement,target_type);
            }
        }*/
        /*var bot_frame=document.createElement("iframe");
          bot_frame.src="https://rss.oneindia.com/common/taboolaiframe.html";
          bot_frame.scrolling="no";
          bot_frame.width='1px';
          bot_frame.height='1px';
          bot_frame.style.border='0 none';
          bot_frame.id='botIframe';
          document.getElementsByTagName("body")[0].appendChild(bot_frame);*/
        
}
/*if(globalAdObj.gpt==0 || window.location.search.indexOf("utm_content=555") > -1){
  function taboolaDynamicWidget(divelem,placement){
             window._taboola = window._taboola || [];
              _taboola.push({
                mode: 'thumbnails-a-mid',
                container: divelem,
                category: 'same',
                placement: placement,
                target_type: 'mix'
              });
        }
        function createTaboolaDynCon(elemTab,container,placement){
          elemTab.innerHTML='';
          var tabDynamicDiv = document.createElement('div');
          tabDynamicDiv.id = container;
          elemTab.appendChild(tabDynamicDiv);
          taboolaDynamicWidget(container,placement);
        }
        if(document.querySelector('.oi-axt')){
              var tabElem = document.querySelectorAll('.oi-axt');
              var tabLen = tabElem.length;
              if (/Mobi|Android/i.test(navigator.userAgent)) {
                if(tabLen > 0){
                    for(k=0;k<tabLen;k++){
                      var indexNo = parseInt(k)+1;
                      tabElem[k].innerHTML='';
                      var elemId = tabElem[k].getAttribute('id');
                      var container = tabElem[k];
                        var placement = 'Mid Article Thumbnails ADR '+indexNo;
                        taboolaDynamicWidget(container,placement);
                    }
                }
            }else{
                if(tabLen > 0){
                    for(k=0;k<tabLen;k++){
                      tabElem[k].innerHTML='';
                      var tabWidth = tabElem[k].clientWidth;
                      if(tabWidth>700 && k === 0){
                        var indexNo = parseInt(k)+1;
                        var elemId = tabElem[k].getAttribute('id');
                        var container = tabElem[k];
                        var placement = 'Mid Article Thumbnails ADR '+indexNo;
                        taboolaDynamicWidget(container,placement);
                      } else if (tabWidth <= 700) {
                        var indexNo = parseInt(k)+1;
                        var elemId = tabElem[k].getAttribute('id');
                        var container = tabElem[k];
                        var placement = 'Mid Article Thumbnails ADR '+indexNo;
                        taboolaDynamicWidget(container,placement);
                    }
                }
            }
        }
      }
}*/
//For Bot System
console.log("From RSS Page Type :"+target_page_type_camp);
/*if (/Mobi|Android/i.test(navigator.userAgent)) {
if(target_page_type_camp.indexOf('-article')>-1 || target_page_type_camp.indexOf('-index')>-1){
if(document.querySelector('.oi-axt')){
        var customElem = document.querySelectorAll('.oi-axt');
        var customLen = customElem.length;
        if(customLen > 0){
            for(k=0;k<customLen;k++){
                if(k==2){
                    if(customElem[k]!=undefined && customElem[k]!=''&&customElem[k]!=null){
                        customElem[k].setAttribute('data-isbackfill',false);
                        customElem[k].classList.remove('oiad','oi-axt');
                    }
                }
            }
        }
    }
}
}*/

/*Global Anchor Click*/
function globalAnchorClick(){
    if(document.querySelector('.oiHyperLink')){
        console.log("OI - CMS - Anchor Click Executed");
    var redirectAnchorLink = (tlink,tparam)=>{
        if(document.getElementById('globalanchor')){
                document.getElementById('globalanchor').remove();
            }
            var link = document.createElement('a');
            if(tparam=="_blank"){
                link.target="_blank";
            }
            link.id='globalanchor';
            link.href=tlink;
            document.body.appendChild(link);
            document.getElementById('globalanchor').click();
    }
    const clickedElem = document.querySelectorAll('.oiHyperLink');
    clickedElem.forEach(el => {
      el.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var origin = el;
      var utmParam='';
      var targetParam='';
      var targetLink='';
      if(origin.hasAttribute('data-uparam')){
        utmParam = origin.getAttribute('data-uparam');
      }
        if (window.event.ctrlKey) {
            targetParam = "_blank";
        }
      if(origin.hasAttribute('target')){
        targetParam = origin.getAttribute('target');
      }
      if(origin.hasAttribute('href')){
        var targetLink = origin.getAttribute('href');
        if(targetLink!='' && targetLink!='#' && targetLink!='javascript:void(0);' && !targetLink.includes('javascript:')){
            if(utmParam!=''){
                if(targetLink.indexOf('?')>'-1'){
                    var targetLinkFinal = targetLink+'&'+utmParam;
                }else{
                    if(utmParam.indexOf('?')>'-1'){
                        var targetLinkFinal = targetLink+utmParam;
                    }else{
                        var targetLinkFinal = targetLink+'?'+utmParam;
                    }
                }
            }
            /*if(targetParam==''){
                location.href=targetLinkFinal;
            }else{*/
                redirectAnchorLink(targetLinkFinal,targetParam);
            //}
        }
      }
      });
    });
}
}
globalAnchorClick();
/*Global Anchor Click*/

var servgObj = {'oneindia': 'https://servg1.net/o.js?uid=648fb0654c72b4237e00a9aa','filmibeat':'https://servg1.net/o.js?uid=a32bdd40e639cb09a67162de'};
var servgHost = ['filmibeat','oneindia'];
if(servgHost.includes(domainmiddle)){
//if(domainmiddle.indexOf('filmibeat')>-1){
    var adblockflagcode=0;
    window.addEventListener('scroll', function() {
        if(adblockflagcode==0){
            adblockflagcode=1;
            var scriptadblock=document.createElement('script');
            scriptadblock.src=servgObj[domainmiddle];//'https://servg1.net/o.js?uid=a32bdd40e639cb09a67162de';
            scriptadblock.async='true';
            document.head.appendChild(scriptadblock);
        }
    });
}

//Refinery Code Starts
var refineryObj = {'boldsky': 'https://tags.refinery89.com/boldskycom.js','careerindia':'https://tags.refinery89.com/careerindiacom-aniview.js','mykhel': 'https://tags.refinery89.com/mykhelcom-aniview.js','nativeplanet': 'https://tags.refinery89.com/nativeplanetcom-aniview.js',};
var refineryHost = ['boldsky','careerindia','mykhel','nativeplanet'];
if(refineryHost.includes(domainmiddle)){
var refineryflag=0;
 function loadrefinery(){
    var refinery = document.createElement("script");
    document.head.appendChild(refinery);
    refinery.async = true;
    refinery.src = refineryObj[domainmiddle];//"https://tags.refinery89.com/v2/filmibeatcom.js";
    sessionStorage.setItem("refinery_status",1);
         }
if(refiner_live){
window.addEventListener('scroll', function() {
    if(refineryflag==0){
        refineryflag=1;
       loadrefinery();
    }
});
}
}
//Refinery Code Ends
//VDO AI Code Starts
var vdoaiObj = {'boldsky':'v-boldsky-v0','drivespark':'v-drivespark-v0','oneindia':'v-oneindia-v1'};
var vdoaiHost = [];
//var vdoaiHost = ['oneindia'];
if(vdoaiHost.includes(domainmiddle)){
//if(domainmiddle=='oneindia'){
  //VDO AI Code Changes
/*if(loadRecomVideoFlag==0){
  var vdoaiElemObj = vdoaiObj[domainmiddle];
if(document.querySelector('#recommended_video') && !document.querySelector('.assigned_video')){
      function oiinsertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
      var parentIoVdoDiv = document.querySelector('#recommended_video');
      var oipromoIoVdoDiv = document.createElement('div');
      oipromoIoVdoDiv.id = vdoaiElemObj;
      //oipromoIoVdoDiv.innerHTML='<h2 class="news_headline engTxt assignVdoHead">Recommended Video</h2>';
      oiinsertAfter(parentIoVdoDiv, oipromoIoVdoDiv);
}
      var vdoioflag=0;
      function loadVdoAi(){
        if(document.getElementById(vdoaiElemObj)){
            var done = false;
            var ai=document.createElement('script');
            ai.defer =true
            ai.async=true;
            ai.src='https://a.vdo.ai/core/'+vdoaiElemObj+'/vdo.ai.js';
            document.head.appendChild(ai);
      }
    }
    window.addEventListener('scroll', function() {
        if(vdoioflag==0){
            vdoioflag=1;
            loadVdoAi();
          }
    });
}*/
}
/*if(document.querySelector('#are-slot-3')){
  document.querySelector('#are-slot-3').classList.add('removeStyleAd');
}*/
if(domainmiddle=='nativeplanet' || domainmiddle=='careerindia' || domainmiddle=='mykhel' || domainmiddle=='boldsky' || domainmiddle=='gizbot' || domainmiddle=='goodreturns' || domainmiddle=='drivespark'){
  var dpobj = {'EN':{'id':'AV654b642c6f46a0dbd208b57b','src':'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=654b642c6f46a0dbd208b57b&AV_PUBLISHERID=64f6f38a485702fa48020f90'},'HI':{'id':'AV654b644454f96ab44e09df47','src':'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=654b644454f96ab44e09df47&AV_PUBLISHERID=64f6f38a485702fa48020f90'},'KN':{'id':'AV654b6482ce6ba4ff680c1d75','src':'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=654b6482ce6ba4ff680c1d75&AV_PUBLISHERID=64f6f38a485702fa48020f90'},'ML':{'id':'AV654b649ce7a6f7d0460769c5','src':'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=654b649ce7a6f7d0460769c5&AV_PUBLISHERID=64f6f38a485702fa48020f90'},'TA':{'id':'AV654b6462f0fdfddbde035398','src':'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=654b6462f0fdfddbde035398&AV_PUBLISHERID=64f6f38a485702fa48020f90'},'TE':{'id':'AV654b64c27c583d89410eb8d4','src':'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=654b64c27c583d89410eb8d4&AV_PUBLISHERID=64f6f38a485702fa48020f90'}};
  if(loadRecomVideoFlag==0){
var vdoplayerdivId ='aniviewWrapper';
function oiinsertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
function placeDynamicDiv(pdiv,flg){
    var parentIoVdoDiv = pdiv;
      var oipromoIoVdoDiv = document.createElement('div');
      oipromoIoVdoDiv.id = vdoplayerdivId;
      if(flg==0){
        parentIoVdoDiv.appendChild(oipromoIoVdoDiv);
      }else{
        oiinsertAfter(parentIoVdoDiv, oipromoIoVdoDiv);
      }
      if(flg){
        if (parentIoVdoDiv) {
          parentIoVdoDiv.remove();
        }
      }
      
}
if(document.querySelector('#are-slot-3')){
  document.querySelector('#are-slot-3').classList.remove('oiad', 'oi-axt', 'oiadv', 'dynamic-slot');
  document.querySelector('#are-slot-3').classList.add('removeStyleAd');
  document.querySelector('#are-slot-3').style.display='block';
  placeDynamicDiv(document.querySelector('#are-slot-3'),0);
}else if(document.querySelector('#recommended_video') && !document.querySelector('.assigned_video')){
      placeDynamicDiv(document.querySelector('#recommended_video'),1);
}
if(domainmiddle=='boldsky'){
  if(document.querySelector('#v-boldsky-v0')){
      placeDynamicDiv(document.querySelector('#v-boldsky-v0'),1);
  }
}
      var vdoioflag=0;
      function loadVdoPlayer(){
        if(document.getElementById(vdoplayerdivId)){
        var done = false;
        var aniscript = document.createElement("script");
        aniscript.async = true;
        if(domainmiddle=='nativeplanet'){
          aniscript.id = "AV6524dccf7d99177ddf020df5";
          var scriptSrc = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=6524dccf7d99177ddf020df5&AV_PUBLISHERID=64f6f38a485702fa48020f90";
        }else if(domainmiddle=='careerindia'){
          aniscript.id = "AV6524dd0359d8e6a7020b2475";
          var scriptSrc = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=6524dd0359d8e6a7020b2475&AV_PUBLISHERID=64f6f38a485702fa48020f90";
        }else if(domainmiddle=='mykhel'){
          aniscript.id = "AV6524dd2842f7e9f2d604ca54";
          var scriptSrc = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=6524dd2842f7e9f2d604ca54&AV_PUBLISHERID=64f6f38a485702fa48020f90";
        }else if(domainmiddle=='boldsky'){
          aniscript.id = "AV652e2d92cfb6043e550803a4";
          var scriptSrc = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=652e2d92cfb6043e550803a4&AV_PUBLISHERID=64f6f38a485702fa48020f90";
        }else if(domainmiddle=='gizbot'){
          if(langParam=='TA'){
            aniscript.id = "AV6524dbf998951e38ab086a25";
            var scriptSrc = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=6524dbf998951e38ab086a25&AV_PUBLISHERID=64f6f38a485702fa48020f90";
          }else{
            aniscript.id = "AV6524db7ab1b56855e503ec05";
            var scriptSrc = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=6524db7ab1b56855e503ec05&AV_PUBLISHERID=64f6f38a485702fa48020f90";
          }
        }else if(domainmiddle=='goodreturns'){
          aniscript.id = "AV6524dc42be1b9bd4310e3734";
          var scriptSrc = "https://tg1.aniview.com/api/adserver/spt?AV_TAGID=6524dc42be1b9bd4310e3734&AV_PUBLISHERID=64f6f38a485702fa48020f90";
        }else if(domainmiddle=='drivespark'){
          const ch_id = dpobj[langParam]['id'];
          const ch_src = dpobj[langParam]['src'];
          aniscript.id = ch_id;
          var scriptSrc = ch_src;
        }
        aniscript.type = "text/javascript";
        aniscript.src = scriptSrc;
        document.head.appendChild(aniscript);
        sessionStorage.setItem("aniviewflag",1);
        }
      }
    window.addEventListener('scroll', function() {
        if(vdoioflag==0){
            vdoioflag=1;
            loadVdoPlayer();
          }
    });
}
}
/*if(document.querySelector('#are-slot-3')){
  document.querySelector('#are-slot-3').classList.remove('oiad', 'oi-axt', 'oiadv', 'dynamic-slot');
}*/
//VDO AI Code Ends
  var vdoflag1=0;
//window.addEventListener('scroll', function() {
    if(vdoflag1==0){
       vdoflag1=1;
  var qParams1=window.location.search;
  if (qParams1.indexOf('utm_medium=ICR')>-1 || qParams1.indexOf('utm_medium=CAMPIKR')>-1 || qParams1.indexOf('utm_medium=CAMP123')>-1 || qParams1.indexOf('utm_medium=CAMPRRR')>-1){
            console.log("Removing video block");
            if(document.getElementById('assigned_video')){
                document.getElementById('assigned_video').remove();
            }
            if(document.getElementById('recommended_video')){
                document.getElementById('recommended_video').remove();
            }
        }
    }
//});
var campDomArr=[];
                //if(window.location.search.indexOf('camplive=1')>-1){
                if(campDomArr.includes(domainmiddle)){
                    function displayCampaignTopMobile(){
                            //if(document.getElementById('oi-custom-camp')){
                                    googletag.cmd.push(function(){
                                        var campAd = googletag.defineSlot('/1008496/gb-320x50-1', [[320, 50]],'oi-custom-camp').addService(googletag.pubads());
                                        googletag.pubads().setTargeting('domain','gizbot.com');
                                        googletag.pubads().setTargeting('lang',langParam);
                                        googletag.pubads().enableSingleRequest();
                                        googletag.enableServices();
                                        googletag.display('oi-custom-camp');
                                        //googletag.pubads().refresh([campAd]);
                                    });
                            //}
                    }
                    function displayCampaignTopDesktop(){
                            //if(document.getElementById('oi-custom-camp')){
                                    googletag.cmd.push(function(){
                                        var campAd = googletag.defineSlot('/1008496/gizbot-970x60', [[970, 60]],'oi-custom-camp').addService(googletag.pubads());
                                        googletag.pubads().setTargeting('domain','gizbot.com');
                                        googletag.pubads().setTargeting('lang',langParam);
                                        googletag.pubads().enableSingleRequest();
                                        googletag.enableServices();
                                        googletag.display('oi-custom-camp');
                                        //googletag.pubads().refresh([campAd]);
                                    });
                            //}
                    }
                    if (/Mobi|Android/i.test(navigator.userAgent)) {
                        if(document.getElementById('containerMain')){
                            var customCampElem = document.getElementById('containerMain');
                            var oicustomCampDiv = document.createElement('div');
                            oicustomCampDiv.id = 'oi-custom-camp';
                            oicustomCampDiv.style.cssText = 'width: 320px;margin: 20px auto 0 auto;min-height: 52px;';
                            customCampElem.insertAdjacentElement('afterbegin', oicustomCampDiv);
                            console.log(googletag);
                            console.log("googletag");
                            setTimeout(function() {
                            if (window.googletag && googletag.apiReady) {
                            googletag.cmd.push(function(){
                                googletag.defineSlot('/1008496/gb-320x50-1', [[320, 50]],'oi-custom-camp').addService(googletag.pubads());
                                googletag.pubads().setTargeting('domain','gizbot.com');
                                googletag.pubads().setTargeting('lang',langParam);
                                googletag.pubads().enableSingleRequest();
                                googletag.enableServices();
                                googletag.display('oi-custom-camp');
                                //googletag.pubads().refresh([campAd]);
                            });
                            }
                            },100);
                        }
                    }else{
                        if(document.getElementById('div-gpt-ad-1435639807102-1')){
                            var customCampElem = document.getElementById('div-gpt-ad-1435639807102-1');
                            var oicustomCampDiv = document.createElement('div');
                            oicustomCampDiv.id = 'oi-custom-camp';
                            oicustomCampDiv.style.cssText = 'width: 970px;margin: 12px auto 10px auto;min-height: 60px;';
                            customCampElem.insertAdjacentElement('afterend', oicustomCampDiv);
                            setTimeout(function() {
                            if (window.googletag && googletag.apiReady) {
                            googletag.cmd.push(function(){
                                googletag.defineSlot('/1008496/gizbot-970x60', [[970, 60]],'oi-custom-camp').addService(googletag.pubads());
                                googletag.pubads().setTargeting('domain','gizbot.com');
                                googletag.pubads().setTargeting('lang',langParam);
                                googletag.pubads().enableSingleRequest();
                                googletag.enableServices();
                                googletag.display('oi-custom-camp');
                            });
                            }
                            },100);
                        }
                    }
                }                
/*var currentHost = window.location.hostname;
if(currentHost.indexOf('www.oneindia.com')>'-1'){
  var revupLoad = 0;
  window.addEventListener('scroll', function(e) {
      if(revupLoad==0){
        revupLoad=1;
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6622305925836088';
        scriptElement.async = true;
        scriptElement.crossOrigin = 'anonymous';
        document.head.appendChild(scriptElement);
      }
  });
}*/
/* For MoMagic Code*/
if(momagicFlag==1){
  var momagicObj={
  "oneindia": {
    "interstitial": "TR-3be4f6f0-3c08-11ee-beef-99e7b18386df",
    "sticky": "TR-8f3c1bd3-3c08-11ee-beef-415debf43c1b"
  },
  "filmibeat": {
    "interstitial": "cfec389c-3c0d-11ee-beef-ff628bfade29",
    "sticky": "TR-24ad9bde-3c0e-11ee-beef-0f6ee0d383cb"
  },
  "boldsky": {
    "interstitial": "TR-ff1ab835-3c08-11ee-beef-9be51a3b56e7",
    "sticky": "TR-d7351be7-3c0c-11ee-beef-9beee395997a"
  },
  "goodreturns": {
    "interstitial": "TR-7d5adf52-3c0e-11ee-beef-7fd5659aab21",
    "sticky": "TR-d07d86b6-3c0e-11ee-beef-afc84b0c35bd"
  }
};
  if (/Mobi|Android/i.test(navigator.userAgent)) {
      var curObj = momagicObj[domainmiddle];
      var div1 = document.createElement('div');
      div1.id = curObj.interstitial;
      document.body.appendChild(div1);
      if(host1=='www.filmibeat.com'){
          var div2 = document.createElement('div');
          div2.id = curObj.sticky;
          document.body.appendChild(div2);
          if(document.getElementById('bottomAdWrapper')){
            document.getElementById('bottomAdWrapper').innerHTML='';
          }
      }
      var scriptsrc = 'https://1437953666.rsc.cdn77.org/publisher/7ca85928-f5eb-11ec-83bf-afb6a6e8a7b0/truereachAdRender.js';
    
    
    function loadMoMagic() {
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.id = 'interactive_js_adcode';
          script.src = scriptsrc;
          document.head.appendChild(script);
    }
    var moMagic = 0;
    window.addEventListener('scroll', function(e) {
      if(moMagic==0){
          moMagic=1;
           loadMoMagic();
       }
    });
  }
}
/* For MoMagic Code*/

//if(currentHost.indexOf('mykhel')>'-1'){
    var mkad=[];
    function taboolaStickyWidget(divelem){
            return false;
             window._taboola = window._taboola || [];
              _taboola.push({
                mode: 'thumbs-feed-01-stream',
                container: divelem,
                category: 'same',
                placement: 'Header Sticky Stream',
                target_type: 'mix'
              });
        }
    function displayMykhelTopMobile(){
        googletag.cmd.push(function(){
            mkad[0] = googletag.defineSlot('/1008496/oi-300x100-slug', [300, 100], 'div-gpt-ad-1687238208587-0').addService(googletag.pubads());
            googletag.pubads().setTargeting('domain','mykhel.com');
            googletag.pubads().setTargeting('lang',langParam);
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.display('div-gpt-ad-1687238208587-0');
            googletag.pubads().refresh([mkad[0]]);
        });
    }
    function headadoff() {
        if(document.getElementById("popupMKDiv")){
            document.getElementById("popupMKDiv").remove();
        }
    } 
    var refineryStatus = sessionStorage.getItem("refinery_status");
    if (refineryStatus == "" || refineryStatus == "undefined" || refineryStatus == null) {
        refineryStatus = 0;
    }
    if(domainmiddle!='filmibeat'){
    if(liteflag==0){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      var taboola_notify_flag1 = getUserCookie('taboola_notify_flag');
      if(taboola_notify_flag1 == '' || taboola_notify_flag1 == null || taboola_notify_flag1 == "undefined"){
        taboola_notify_flag1=0;
      }

        /*if(currentHost.indexOf('mykhel')>'-1'){
          mykhelSticky=1;
        }*/
        var mkCssMobi = '<style>#oi-headad,#oiheadclose{text-align:center;right:0}@keyframes mymove{from{top:-150px}to{top:0}}#oi-headad{top:-160px;width:96%;margin:0 auto;border:0;left:0;position:fixed;z-index:9999999999;font-weight:400;background-color:#fff;padding:5px 2%;min-height:110px}#oi-headad .thumbBlock_holder {width: 40%!important;}#oiheadclose{position:absolute;bottom:-30px;z-index:9999;background:#fff;border-bottom-left-radius:10px;border-bottom:1px solid #ccc;border-left:1px solid #ccc;width:34px;height:30px;color:#ccc;cursor:pointer;line-height:30px;font-size:20px;font-family:helvetica;display:block;box-sizing:content-box}.oiheadTrans{-moz-transition:.27s ease-in;-o-transition:.27s ease-in;-webkit-transition:.27s ease-in;transition:.27s ease-in;animation:3s forwards mymove;display:block!important;}</style>';
        var mkHtmlMobi =mkCssMobi+'<div id="oi-headad"><div id="div-gpt-ad-1687238208587-0" style="height: 110px!important;overflow: hidden!important;"></div><span id="oiheadclose" onclick="headadoff()"><svg fill="none" viewBox="0 0 18 18" stroke="#bbb" style="margin: 3px 0px 0px 4px;"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></span></div>';
        var popupMKDiv = document.createElement('div');
        popupMKDiv.id = 'popupMKDiv';
        popupMKDiv.innerHTML = mkHtmlMobi;
        document.getElementsByTagName('body')[0].appendChild(popupMKDiv);
        var popupMkflag=0;
        window.addEventListener('scroll', function() {
            if(popupMkflag==0){
               popupMkflag=1;
               if(mykhelSticky==1){
                    if(currentHost.indexOf('mykhel')>'-1'){
                    displayMykhelTopMobile();
                    setTimeout(function(){
                        var stickyInt = setInterval(function(){
                            var parentDiv = document.getElementById("div-gpt-ad-1687238208587-0");
                            var innerDiv = parentDiv.querySelector("div");
                            if(innerDiv){
                              var innerHTML = innerDiv.innerHTML;
                                if(innerHTML!=''){
                                  document.getElementById("oi-headad").classList.add("oiheadTrans");
                                  clearInterval(stickyInt);
                              }else{
                                clearInterval(stickyInt);
                              }
                            } else{
                              clearInterval(stickyInt);
                            }
                      },1000);
                    },2000);
                  }
               }
            }
        });
    }
  }
}
//}
//Close Cube when Virool in Viewport
if (/Mobi|Android/i.test(navigator.userAgent)) {
var killCube=0;
function isElementAboutToEnterViewport(element, threshold) {
            var rect = element.getBoundingClientRect();
            return rect.top < (window.innerHeight + threshold);
        }

function checkElementVisibility(myElement,threshold) {
    if (isElementAboutToEnterViewport(myElement, threshold)) {
        return true;
    }
}
if(viroolFlag==0){
    if(recFlag==0){
        killCube=1;
        var checkElem = document.getElementById('recommended_video');
        console.log("Kill Cube Flag :"+killCube);
        window.addEventListener("scroll", function(){
            if(checkElem){
                var threshold = 100; // Set the threshold distance (in pixels)
               var vdoInViewPort = checkElementVisibility(checkElem,threshold);
                if(vdoInViewPort){
                    if(killCube==1){
                        if(document.getElementById('div-gpt-ad-1653012388909-0')){
                            document.getElementById('div-gpt-ad-1653012388909-0').remove();
                        }
                    }
                } 
            }
        });
    }
}else{
    try{
        var videounitArr = {'oneindia':'/1008496/oi-inline-video-mobi','filmibeat':'/1008496/fb-inline-video-mobi','gizbot':'/1008496/gb-inline-video-mobi','drivespark':'/1008496/ds-inline-video-mobi','mykhel':'/1008496/mk-inline-video-mobi','boldsky':'/1008496/bs-inline-video-mobi','goodreturns':'/1008496/gr-inline-video-mobi','careerindia':'/1008496/ci-inline-video-mobi','nativeplanet':'/1008496/np-inline-video-mobi'};
        var defineUnitName = videounitArr[domainmiddle];
        var checkElem = document.querySelector('.removeStyleAd');
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                var res = event.slot.getResponseInformation();
                var unitname=event.slot.getAdUnitPath();
                if(unitname==defineUnitName){
                if(res != null && res != '' && res != undefined){
                        var lineItem = res['sourceAgnosticLineItemId'];
                        console.log(unitname+'Virool'+lineItem);
                        if (lineItem != null && lineItem != '' && lineItem != undefined) {
                            killCube=1;
                        }
                    }
                console.log("Kill Cube Flag :"+killCube);
                if(killCube==1){
                 window.addEventListener("scroll", function(){
                    if(checkElem){
                        var threshold = 250; // Set the threshold distance (in pixels)
                       var vdoInViewPort = checkElementVisibility(checkElem,threshold);
                        if(vdoInViewPort){
                                if(document.getElementById('div-gpt-ad-1653012388909-0')){
                                    document.getElementById('div-gpt-ad-1653012388909-0').remove();
                                }
                        } 
                    }
                });
             }
             }
            });
        });
     }catch(err){
        console.log("Virool Ad  : "+err);
    }  
}
}
//Close Cube when Virool in Viewport
//Cube For Liteversion
function cubeWidgetLiteVersion(){
    if (window.googletag && googletag.apiReady) {
    var target_words_rss1 = [];
     var getUrlDetailsRss1 = {
          cleanArray:function(item){
              var tempArr = [];
              for (var i = 0; i < item.length; i++) {
                  if (item[i] !== undefined && item[i] != "") {
                      tempArr.push(item[i]);
                  }
              }
              return tempArr;
          },
       createArrayFromUrl:function(){
              target_words_rss1 = target_words_rss1.concat(window.location.hostname);
              var url_host = window.location.hostname.split('.');
              target_words_rss1 = target_words_rss1.concat(url_host);
              var url_path = window.location.pathname.replace('.html','').split('/');
              target_words_rss1 = target_words_rss1.concat(url_path);
              var pathArrLen = url_path.length;
              var subUrlPath = url_path[pathArrLen-1].split('-');
              target_words_rss1 = target_words_rss1.concat(subUrlPath);
              target_words_rss1 = getUrlDetailsRss1.cleanArray(target_words_rss1);
          }
      };
      getUrlDetailsRss1.createArrayFromUrl();
     console.log(target_words_rss1);
     var user_agent=navigator.userAgent;
    }

    try{
    googletag.cmd.push(function() {
      var cubeRotateCnt=0;
    var cubeInt = null;  // Declare the interval variable outside the function
      function startRotation() {
      if (cubeInt === null) {
        cubeInt = setInterval(function() {
          var cubeRotateStatus = sessionStorage.getItem("cube_rotate_status");
          if (cubeRotateStatus == "" || cubeRotateStatus == "undefined" || cubeRotateStatus == null) {
            cubeRotateStatus = 0;
          }
          if (cubeRotateStatus == 1) {
            googletag.pubads().refresh([slot[900]]);
            sessionStorage.setItem("cube_rotate_status", 0);
          }
        }, 1000);  // Increase the interval duration if needed, for example, to 2000 (2 seconds)
      }
    }
    if(document.getElementById('div-gpt-ad-1653012388909-0')){
      var mcanvasLineitem = [6300904212, 6361865235, 6300904224, 6361865406, 6300904218, 6361860951, 6300904215, 6361865262, 6302957251, 6361865436, 6302957248, 6361865412, 6302957245, 6361864221, 6300904221, 6361865274, 6303550016, 6361864242];
    slot[900] = googletag.defineSlot('/1008496/PMF-tracking-pixel-1x1', [1, 1], 'div-gpt-ad-1653012388909-0').addService(googletag.pubads());
        googletag.pubads().setTargeting("host",window.location.hostname);
        googletag.pubads().setTargeting("curl",window.location.href);
        googletag.pubads().setTargeting("topic",target_words_rss1);
        if(domainmiddle=='oneindia'){
            if(langParam=='or'){
              googletag.pubads().setTargeting('domain','www.oneindia.com');
            }else{
              googletag.pubads().setTargeting('domain',window.location.hostname);
            }
        }else if(domainmiddle=='goodreturns'){
            var domHost = domainmiddle+'.in';
            googletag.pubads().setTargeting('domain',domHost);
        }else{
            var domHost = domainmiddle+'.com';
            googletag.pubads().setTargeting('domain',domHost);
        }
        googletag.pubads().setTargeting('lang',langParam);
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.display('div-gpt-ad-1653012388909-0');
            googletag.pubads().refresh([slot[900]]);
            //if(domainmiddle=='gizbot' || domainmiddle=='oneindia'){
                googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                  var slotId1 = event.slot.getSlotElementId();
                  if(slotId1=='div-gpt-ad-1653012388909-0'){
                    if(cubeRefresh==1){
                        startRotation();
                    }
                  }
                  var res = event.slot.getResponseInformation();
                  if(res != null && res != '' && res != undefined){
                        var lineItem = res['sourceAgnosticLineItemId'];
                        if (lineItem != null && lineItem != '' && lineItem != undefined) {
                            if(mcanvasLineitem.includes(lineItem)){
                                if (document.getElementById('div-gpt-ad-1653012388909-0')) {
                                    setTimeout(function(){
                                      var iframe = document.querySelector('#div-gpt-ad-1653012388909-0 iframe');
                                        if (iframe) {
                                            iframe.style.height = '0';
                                        }
                                    },2000);
                                }
                            }
                        }
                    }
                });
            }
           //}
            /*googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                var res = event.slot.getResponseInformation();
                var unitname=event.slot.getAdUnitPath();
                if(unitname=='/1008496/PMF-tracking-pixel-1x1'){
                if(res != null && res != '' && res != undefined){
                        var lineItem = res['sourceAgnosticLineItemId'];
                        console.log(unitname+'Cube'+lineItem);
                        if (lineItem != null && lineItem != '' && lineItem != undefined) {
                            if(document.getElementById('div-gpt-ad-1653012388909-0')){
                                    document.getElementById('div-gpt-ad-1653012388909-0').remove();
                            }
                        }
                    }
                }
            });*/
        });
        }
        catch(err){
          console.log("Cube Ad  : "+err);
        }
} 
/*if(liteflag==1 && window.location.search.indexOf("utm_content=5") > -1){
  if(domainmiddle=='gizbot' || domainmiddle=='oneindia'){
    globalAdObj.cube=1;
  }
}*/

if(liteflag==1 && window.location.search.indexOf("utm_content=5") > -1){
if(globalAdObj.cube==1){
var cubePromoVal=0;
var cubeAdFlag=0;
  var today = new Date();
    var urlBurstP = Math.floor(Date.now() /1000);
var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('cache-control', 'max-age=0, no-cache, no-store, no-transform');
var options = {
    headers: headers
};

var apiUrl = 'https://rss.oneindia.com/cms/oi-line-item-temp.json?v='+urlBurstP;
    fetch(apiUrl)
    .then(response => {
      return response.json()
    })
    .then(data => {
        if(data != undefined && data !='' && data != null){
             if(data['cube'].hasOwnProperty('all')){
                cubePromoVal=data['cube']['all'];
            }else{
                cubePromoVal=data['cube'][liveHost];
            }
              console.log("Cube Promo Host:"+cubePromoVal);
              if(cubePromoVal){
                    if(document.querySelector('footer')){
                        function oiinsertAfter(referenceNode, newNode) {
                      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
                    }
                    var parentDiv = document.querySelector('footer');
                    if (/Mobi|Android/i.test(navigator.userAgent)) {
                        var cube_frame=document.createElement("div");
                        cube_frame.id='div-gpt-ad-1653012388909-0';
                        cube_frame.style.cssText = 'width:180px;position:fixed;bottom:60px;left:0;z-index:999999999';
                        oiinsertAfter(parentDiv, cube_frame); 
                        cubeWidgetLiteVersion();
                    }else{
                        var cube_frame=document.createElement("div");
                        cube_frame.id='div-gpt-ad-1653012388909-0';
                           cube_frame.style.cssText = 'width:180px;position:fixed;bottom:60px;left:160px;z-index:999999999';
                        oiinsertAfter(parentDiv, cube_frame);
                        cubeWidgetLiteVersion();
                    }
                    }
            }
        }
    })
    .catch(err => {
      // Do something for an error here
    })
}
}
//Live Blog Time Dynamically
function getTimeAgo(timestamp) {
  var currentDate = new Date(); // Current date and time
  var previousDate = new Date(timestamp); // Previous date and time

  // Calculate the time difference in milliseconds
  var timeDifference = currentDate.getTime() - previousDate.getTime();

  // Calculate the time difference in seconds, minutes, hours, and days
  var seconds = Math.floor(timeDifference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  if (days > 0) {
    if(days==1){
       return days + " day ago"; 
    }
    return days + " days ago";
  } else if (hours > 0) {
    if(hours==1){
       return hours + " hour ago"; 
    }
    return hours + " hours ago";
  } else if (minutes > 0) {
    if(minutes==1){
       return minutes + " minute ago"; 
    }
    return minutes + " minutes ago";
  }
}


if(document.querySelector('.liveblog_time')){
    if(document.getElementById('liveblog-oi-content') && document.getElementById('liveblog-oi-content').hasAttribute('data-liveblog-status')){
        var liveblogsts = document.getElementById('liveblog-oi-content').getAttribute('data-liveblog-status');
        if(liveblogsts=='yes'){
            var liveblogelem = document.querySelectorAll('.liveblog_time');
            var liveblogelemlen = liveblogelem.length;
            if(liveblogelemlen > 0){
                for(l=0;l<liveblogelemlen;l++){
                    var liveblogtime = liveblogelem[l].getAttribute('data-datetime');
                    if(liveblogtime!='' && liveblogtime!='undefined' && liveblogtime!=null){
                        var timeAgo = getTimeAgo(liveblogtime);
                        if(timeAgo!=''&&timeAgo!=undefined&&timeAgo!=null){
                            liveblogelem[l].innerHTML=timeAgo;
                        }
                    }
                }
            }
        }
    }
}
//Live Blog Time Dynamically
//Cube For Liteversion
var versionnum=2183;
//if(currentHost.indexOf('hindi.oneindia')>'-1'){
if (/Mobi|Android/i.test(navigator.userAgent)) {
var rssflag=0;
window.addEventListener('scroll', function() {
    if(rssflag==0){
       rssflag=1;
        (function(){
        var today = new Date();
        //var urlBurstParam = today.getDate();
        var urlBurstParam = today.getHours();
        var tag = document.createElement('script');
        tag.src = 'https://rss.oneindia.com/cms/oi-settings.js?v='+versionnum;
        tag.async = true;
        tag.id = 'oiscripts';
        var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        }());
}
}); 
}else{
    (function(){
        var today = new Date();
        //var urlBurstParam = today.getDate();
        var urlBurstParam = today.getHours();
        var tag = document.createElement('script');
        tag.src = 'https://rss.oneindia.com/cms/oi-settings.js?v='+versionnum;
        tag.async = true;
        tag.id = 'oiscripts';
        var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        }());
}
var triggerPageFlag = 0;
if (/Mobi|Android/i.test(navigator.userAgent)) {
    var triggerDevice = 'mobile';
    function pingtoserverfortracker(extraparam) {
        if(document.getElementById("trackerpageimage")){
           document.getElementById("trackerpageimage").remove(); 
        }
        if(triggerPageFlag == 0){
            triggerPageFlag=1;
            var img = document.createElement("img");
            img.src = 'https://'+currentHost+'/images/tracker.jpg?tracker=oi-tracker-cms&device='+triggerDevice+'&type=ad-convn'+extraparam;
            img.setAttribute('id', 'trackerpageimage');
            img.setAttribute('alt','Image Tracker');
            img.setAttribute('width',1);
            img.setAttribute('height',1);
            img.style.display='none';
            document.body.appendChild(img);
        }
    }
    var curTimeStamp = Math.round((new Date()).getTime() / 1000);
    if(window.location.search.indexOf("content=liteversion") > -1){
        var extraparam = '&timestamp='+curTimeStamp+'&cycle-process=0';
        pingtoserverfortracker(extraparam);
    }
    var pageReferrer = document.referrer;
    console.log(pageReferrer);
    if(pageReferrer.indexOf("content=liteversion") > -1){
        var extraparam = '&timestamp='+curTimeStamp+'&cycle-process=1&cycle-status=completed';
        pingtoserverfortracker(extraparam);
    }
    if(connectionType!='' && connectionRtt!=''){
            if(document.getElementById("trackerpagenetwork")){
               document.getElementById("trackerpagenetwork").remove(); 
            }
            var u_id = Math.floor(Date.now() + Math.random());
            var img = document.createElement("img");
            img.src = 'https://'+currentHost+'/images/tracker.jpg?tracker=oi-tracker-cms&type=networkspeed&connectiontype='+connectionType+'&connectionrtt='+connectionRtt+'&device='+triggerDevice+'&uid='+u_id;
            img.setAttribute('id', 'trackerpagenetwork');
            document.body.appendChild(img);
        }
    }else{
        var triggerDevice = 'desktop';
        if(connectionType!='' && connectionRtt!=''){
            if(document.getElementById("trackerpagenetwork")){
               document.getElementById("trackerpagenetwork").remove(); 
            }
            var u_id = Math.floor(Date.now() + Math.random());
            var img = document.createElement("img");
            img.src = 'https://'+currentHost+'/images/tracker.jpg?tracker=oi-tracker-cms&type=networkspeed&connectiontype='+connectionType+'&connectionrtt='+connectionRtt+'&device='+triggerDevice+'&uid='+u_id;
            img.setAttribute('id', 'trackerpagenetwork');
            document.body.appendChild(img);
        }
    }
    
    /*Tracking Gam Slot*/
/*if(currentHost=='kannada.oneindia.com'){
function displayTrackingAd(){
         if(document.getElementById('trackingIframe')){
            document.getElementById('trackingIframe').remove();
         }
          var tracking_frame=document.createElement("iframe");
          tracking_frame.src="https://"+currentHost+"/common/common-tracking.html";
          tracking_frame.scrolling="no";
          tracking_frame.width='1px';
          tracking_frame.height='1px';
          tracking_frame.style.border='0 none';
          tracking_frame.id='trackingIframe';
          tracking_frame.title='common Tracking';
          document.getElementsByTagName("body")[0].appendChild(tracking_frame);
}
displayTrackingAd(); 
var trackingCnt = 0;
var trackingInt = setInterval(function(){
        if(trackingCnt < 10){
            trackingCnt++;
            displayTrackingAd();
        }else{
        if(document.getElementById('trackingIframe')){
             document.getElementById('trackingIframe').remove();
             }
            clearInterval(trackingInt);
        }
},10000);
}*/
/*Tracking Gam Slot*/
if(window.location.search.indexOf("content=ua") > -1){
        var globalheaders = new Headers({
            "x-oigt-header" :"GITPL"
        });
        var apiurl = '/scripts/cms/ad-controller.php?module=subscription&type=track-notification';
        fetch(apiurl, {
          method: "post",
          headers : globalheaders
        }).catch(function(err){
          console.error('Inside Imp error:', err);
        });
        /*fetch('https://sb.scorecardresearch.com/beacon.js',{
            mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          }
      }
    ).then(function(resp) {
                console.log("IFFFFFFF");
                console.log(resp);
                resp.headers.forEach(function(val, key) { console.log(key + ' -> ' + val); });
        });*/
    }
</script> <style>
  .ad-overlay1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 350px;
  height: 250px;
  min-width: 300px;
  min-height: 250px;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  border: 2px solid red;
}
    #btmFlip{
        display: none!important;
    }
    #coronaflip{
        display: none!important;
    }
    #coflip{
        display: none!important;
    }
.oi-article-lt {
    margin-bottom: 7px!important;
}
#div-gpt-ad-1653012388909-0 iframe{
    width:180px;
    height:180px;
}
</style> <script>
var domainArrCamp=['filmibeat','drivespark','goodreturns','oneindia','boldsky','mykhel','careerindia','nativeplanet','gizbot'];
if(utmParamVal != '' && utmParamVal.includes('utm_medium=camp123') || utmParamVal.includes('utm_medium=prodigital_1') || utmParamVal.includes('utm_medium=apex') || utmParamVal.includes('utm_medium=va') || utmParamVal.includes('utm_medium=proformics') || utmParamVal.includes('utm_medium=ZMed') || utmParamVal.includes('utm_medium=vmedia')){
if (/Mobi|Android/i.test(navigator.userAgent)) {
if (domainArrCamp.indexOf(domainmiddle) > '-1') {
no_ad_flag = false;

}
}
}

    /*if(document.querySelector('.oicustomcontent1111')){
        var afterPara=0;
        var customElem = document.querySelectorAll('.oicustomcontent');
        var customLen = customElem.length;
        if(customLen > 0){
            for(k=0;k<customLen;k++){
                if(k==afterPara){
                    var oicustomDiv = document.createElement('div');
                    oicustomDiv.id = 'oi-custom-content';
                    customElem[afterPara].parentNode.insertBefore(oicustomDiv, customElem[afterPara].nextSibling);
                }
            }
        }
    }
    if(document.getElementById('oi-custom-content')){
        
        var customCssDesktop = '<style>#mainOutsreamVideoContainer{position:relative;width:600px;height:360px;margin: 0 auto 8px auto;}#adContainer{position:absolute;top:0;left:0;width:600px;height:360px;border:1px solid #000;background:#000}#contentOutsreamElement{width:600px;height:360px;overflow:hidden}.video-controls{position:absolute;left:0;right:0;bottom:0;z-index:10000000;background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.8));height:30px}.video-controlsinner{padding:5px;box-sizing:border-box;height:30px}.video-controls-fullscreen,.video-controls-playpause,.video-controls-volumebtn{float:left;margin:0 5px}.video-controls-timestamp{float:left;font-size:13px;color:#fff;line-height:22px;font-family: arial;}.video-controls-rightbtns{float:right}.btns{height:22px;display:inline-block;margin:0 5px;cursor:pointer;-webkit-appearance:none;appearance:none;padding:0;border:none;background:0 0}.btns>svg{width:100%;height:100%;filter:drop-shadow(0 0 14px rgba(0,0,0,.4));fill:#fff}</style>';
        var customCssMobile = '<style>#mainOutsreamVideoContainer{position:relative;width:320px;height:260px;margin: 0 auto 10px auto;}#adContainer{position:absolute;top:0;left:0;width:320px;height:260px;border:1px solid #000;background:#000}#contentOutsreamElement{width:320px;height:260px;overflow:hidden}.video-controls{position:absolute;left:0;right:0;bottom:0;z-index:10000000;background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.8));height:30px;padding: 5px 0;}.video-controlsinner{padding:5px;box-sizing:border-box;height:30px}.video-controls-fullscreen,.video-controls-playpause,.video-controls-volumebtn{float:left;margin:0 5px}.video-controls-timestamp{float:left;font-size:13px;color:#fff;line-height:22px;font-family: arial;}.video-controls-rightbtns{float:right}.btns{height:22px;display:inline-block;margin:0 5px;cursor:pointer;-webkit-appearance:none;appearance:none;padding:0;border:none;background:0 0}.btns>svg{width:100%;height:100%;filter:drop-shadow(0 0 14px rgba(0,0,0,.4));fill:#fff}</style>';
        var customHtml = '<div id="mainOutsreamVideoContainer" style="display:none;"><video id="contentOutsreamElement" muted controls></video><div class="video-controls"><div class="video-controls-playpause"><button class="btns playbtn" id="playButton" style="display:none"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg></button><span class="btns pausebtn" id="pauseButton"><svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span><button class="btns frefreshbtn" id="replayButton" style="display:none"><svg viewBox="0 0 24 24"><path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/></svg></button></div><div class="video-controls-timestamp">Ad(1 of 1) <span id="remainingtime">0:00</span></div><div class="video-controls-rightbtns"><div class="video-controls-volumebtn"><span class="btns mutebtn" id="mutebtn" style="display:none"><svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span><span class="btns unmutebtnvdo" id="unmutebtn"><svg viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span></div></div></div><div id="adContainer"></div></div>';
            if (/Mobi|Android/i.test(navigator.userAgent)) {
                customHtml = customCssMobile+customHtml;
                document.getElementById('oi-custom-content').innerHTML = customHtml;
            }else{
                customHtml = customCssDesktop+customHtml;
                document.getElementById('oi-custom-content').innerHTML = customHtml;
            }
        var adsManager;
var adsLoader;
var adDisplayContainer;
var intervalTimer;
var playButton;
var videoContent;
function init() {
  videoContent = document.getElementById('contentOutsreamElement');
  setUpIMA();
}

function setUpIMA() {
  createAdDisplayContainer();
  adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      onAdsManagerLoaded,
      false);
  adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdError,
      false);
  var contentEndedListener = function() {adsLoader.contentComplete();};
  videoContent.onended = contentEndedListener;
  var adsRequest = new google.ima.AdsRequest();
  adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/1008496/Pre-Roll-Testing&description_url=[placeholder]&tfcd=0&npa=0&sz=400x300%7C640x360%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&vpa=auto&correlator=';
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    adsRequest.linearAdSlotWidth = 320;
    adsRequest.linearAdSlotHeight = 260;
    adsRequest.nonLinearAdSlotWidth = 320;
    adsRequest.nonLinearAdSlotHeight = 150;
  }else{
    adsRequest.linearAdSlotWidth = 600;
    adsRequest.linearAdSlotHeight = 400;
    adsRequest.nonLinearAdSlotWidth = 600;
    adsRequest.nonLinearAdSlotHeight = 150;
  }
  
  adsRequest.setAdWillAutoPlay(true);
  adsLoader.requestAds(adsRequest);
}


function createAdDisplayContainer() {
  adDisplayContainer = new google.ima.AdDisplayContainer(
      document.getElementById('adContainer'));
}

function playAds() {
  adDisplayContainer.initialize();
  try {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        adsManager.init(320, 260, google.ima.ViewMode.NORMAL);
    }else{
        adsManager.init(600, 360, google.ima.ViewMode.NORMAL);
    }
    adsManager.start();
  } catch (adError) {
    adsManager.setVolume(0);
  }
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
  // Get the ads manager.
  var adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.uiElements = true;
  // videoContent should be set to the content video element.
  adsManager = adsManagerLoadedEvent.getAdsManager(
      videoContent, adsRenderingSettings);
  // Add listeners to the required events.
  adsManager.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdError);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
      onContentPauseRequested);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
      onContentResumeRequested);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
      onAdEvent);

  // Listen to any additional events, if necessary.
  adsManager.addEventListener(
      google.ima.AdEvent.Type.LOADED,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.STARTED,
      onAdEvent);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.COMPLETE,
      onAdEvent);
  playAds();
}

function onAdEvent(adEvent) {
    if(document.getElementById('mainOutsreamVideoContainer')){
            document.getElementById('mainOutsreamVideoContainer').style.display='block';
    }
  if(document.getElementById('playButton') && document.getElementById('playButton')){
    document.getElementById('playButton').onclick = function() {
      adsManager.resume();
      this.style.display='none';
      document.getElementById('pauseButton').style.display='block';
    };
    document.getElementById('pauseButton').onclick = function() {
      adsManager.pause();
      this.style.display='none';
      document.getElementById('playButton').style.display='block';
    };
  }
  if(document.getElementById('mutebtn') && document.getElementById('unmutebtn')){
      document.getElementById('mutebtn').onclick = function() {
        adsManager.setVolume(0);
        this.style.display='none';
        document.getElementById('unmutebtn').style.display='block';
      };
      document.getElementById('unmutebtn').onclick = function() {
        adsManager.setVolume(1);
        this.style.display='none';
        document.getElementById('mutebtn').style.display='block';
      };
  }
  var ad = adEvent.getAd();
  switch (adEvent.type) {
    case google.ima.AdEvent.Type.LOADED:
      if (!ad.isLinear()) {
        adsManager.setVolume(1);
      }
      break;
    case google.ima.AdEvent.Type.STARTED:
      if (ad.isLinear()) {
        intervalTimer = setInterval(
            function() {
              var remainingTime = adsManager.getRemainingTime();
              var time=parseInt(remainingTime);
              var minutes = Math.floor(time / 60);
              var seconds = time - minutes * 60;
              var remainTime = minutes+':'+seconds;
              if(document.getElementById('remainingtime')){
                if(remainTime!=undefined && remainTime!=null && remainTime !=''){
                  document.getElementById('remainingtime').innerHTML=remainTime;
                }
              }
            },
            1000);
      }
      break;
    case google.ima.AdEvent.Type.COMPLETE:
      if (ad.isLinear()) {
        adsManager.collapse();
        if(document.getElementById('adContainer')){
          document.getElementById('adContainer').innerHTML='';
        }
        if(document.getElementById('replayButton') && document.getElementById('playButton') && document.getElementById('playButton')){
          document.getElementById('replayButton').style.display='block';
          document.getElementById('playButton').style.display='none';
          document.getElementById('pauseButton').style.display='none';
          document.getElementById('replayButton').onclick = function() {
            init()
            this.style.display='none';
            document.getElementById('pauseButton').style.display='block';
          };
        }
        if(document.getElementById('mutebtn') && document.getElementById('unmutebtn')){
            document.getElementById('unmutebtn').style.display='block';
            document.getElementById('mutebtn').style.display='none';
        }
        clearInterval(intervalTimer);
      }
      break;
  }
}
function onAdError(adErrorEvent) {
  console.log(adErrorEvent.getError());
  if(document.getElementById('mainOutsreamVideoContainer')){
    document.getElementById('mainOutsreamVideoContainer').remove();
  }
  if(document.getElementById('oi-custom-content')){
    document.getElementById('oi-custom-content').innerHTML='';
  }
  //adsManager.destroy();
}
function onContentPauseRequested() {
}
function onContentResumeRequested() {
  adsManager.setVolume(0);
}
init();
    }*/
</script> <style type="text/css">
     .more-article-btn {
            position: absolute;
            bottom: 20px;
            z-index: 100;
            left: 0;
            right: 0;
            margin: auto;
            text-align: center;
        }

        .bounce {
            animation: bounce 2s infinite;
            -webkit-animation: bounce 2s infinite;
            -moz-animation: bounce 2s infinite;
            -o-animation: bounce 2s infinite;
            animation-iteration-count: 3;
        }

        @-webkit-keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                -webkit-transform: translateY(0);
            }

            40% {
                -webkit-transform: translateY(-30px);
            }

            60% {
                -webkit-transform: translateY(-15px);
            }
        }

        @-moz-keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                -moz-transform: translateY(0);
            }

            40% {
                -moz-transform: translateY(-30px);
            }

            60% {
                -moz-transform: translateY(-15px);
            }
        }

        @-o-keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                -o-transform: translateY(0);
            }

            40% {
                -o-transform: translateY(-30px);
            }

            60% {
                -o-transform: translateY(-15px);
            }
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }

            40% {
                transform: translateY(-30px);
            }

            60% {
                transform: translateY(-15px);
            }
        }

        .more-article-btn a {
            background: #2470ce;
            font-size: 16px;
            font-weight: bold;
            line-height: 1.6;
            width: 90px;
            margin: 0 auto;
            padding: 18px 45px;
            color: #fff;
            position: relative;
            border-radius: 30px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.16);
            text-align: center;
            font-family: arial;
        }
        #readMoreTaboolaGreadient {
    height: 80px;
    left: 0;
    top: -80px;
    right: 0;
    z-index: 2;
    position: absolute;
    text-align: center;
    width: 100%;
    background-color: rgba(255,255,255,1);
    background: linear-gradient(to bottom, transparent 0, #fff 95%);
}
        .expand-more-article {
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
        }

        .expand-btn-wrap {
            height: 200px;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 2;
            position: absolute;
            text-align: center;
            width: 100%;
            background-color: rgba(255,255,255,1);
            background: linear-gradient(to bottom, transparent 0, #fff 50%);
        }
        .oi-morenews-slider-wrapper.viewport {height: 270px;}
        #show-more a.morearticle {
            color: #fff!important;
        }
        .dsmore .more-article-btn a {
    background: #000;
    font-size: 16px;
    font-weight: bold;
    line-height: 17px;
    margin: 0 10px;
    padding: 16px 45px;
    color: #fff;
    position: relative;
    border-radius: 30px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.16);
    text-align: center;
    font-family: arial;
    display: block;
    width: auto;
}


        
.dsmore .view-arrow {
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    position: absolute;
    right: 25px;
    top: 16px;
}
.othermore .view-arrow {
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    position: absolute;
    right: 25px;
    top: 18px;
}
.view-arrow {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
#trackerpagenetwork,#trackerimage,#trackerpageimage{
    display: none;
}
</style> <script>
    var pctScrolled1=0;
    function getDocHeight1() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
function amountscrolled1(scrollElem){
    if(scrollElem != '' && scrollElem != undefined && scrollElem != null){
            var viewportHeight = window.innerHeight+500;
            var scrollTop = window.scrollY;
            var elementOffsetTop = scrollElem.offsetTop;
            var elementHeight = scrollElem.offsetHeight;
            var distance = scrollTop + viewportHeight - elementOffsetTop;
            var percentage = Math.round(
              distance / ((viewportHeight + elementHeight) / 100)
            );
            pctScrolled1 = Math.min(100, Math.max(0, percentage));
        }else{
            var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
            var docheight = getDocHeight1();
            var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var trackLength = docheight - winheight;
            pctScrolled1 = Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        }
    
}
    function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
    }
    /*VDO AI in viewport Check*/
    if(document.querySelector('#v-filmibeat-v0')){
      //console.log("Inside.........HHHHHHHHHHHHHHHHH");
      // Function to check if an element is in the viewport
        function isElementInViewportVdo(element) {
            var rect = element.getBoundingClientRect();

          return rect.bottom > 0 &&
          rect.right > 0 &&
          rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
          rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
        }
        var triggerVdoAiFlag1 = 0;
        function pingtoserverforVDOAIViewport(viewportsts) {
                if(document.getElementById("trackerVdoAiViewportimage")){
                   document.getElementById("trackerVdoAiViewportimage").remove(); 
                }
                if(triggerVdoAiFlag1 == 0){
                    triggerVdoAiFlag1=1;
                    var currentHost = window.location.hostname;
                    var rand_id = Math.floor(Date.now() + Math.random());
                    if (/Mobi|Android/i.test(navigator.userAgent)) {
                      var triggerDevice = 'mobile';//mobile/desktop
                    }else{
                      var triggerDevice = 'desktop';//mobile/desktop
                    }
                    var pagetype = trackpagetype;//Change accordingly home/index/article/photos/database
                    var img = document.createElement("img");
                    img.src = 'https://'+currentHost+'/images/tracker.jpg?tracker=oi-tracker-cms&device='+triggerDevice+'&type=vdoai&page='+pagetype+'&eventcategory=vdoai&eventaction=performance&eventlebel='+viewportsts+'&uid='+rand_id;
                    img.setAttribute('id', 'trackerVdoAiViewportimage');
                    img.setAttribute('alt','VDO AI Tracker Viewport');
                    img.setAttribute('width',1);
                    img.setAttribute('height',1);
                    img.style.display='none';
                    document.body.appendChild(img);
                }
            }
        let divInViewport = false;
        let divScrolled = false;
        let divStayed = false;
        let divLeftViewport = false;
        let executeOnce = false;
        var stayTimeout;
        function checkDivInViewport() {
            const targetDiv = document.getElementById('v-filmibeat-v0-0');
            if(targetDiv){
            if (isElementInViewportVdo(targetDiv)) {
                //console.log("Event : Inside Viewport");
                divInViewport = true;

                //const scrolledPercentage = (window.scrollY + window.innerHeight - targetDiv.offsetTop) / targetDiv.offsetHeight * 100;
                var viewportHeight = window.innerHeight+300;
                var scrollTop = window.scrollY;
                var elementOffsetTop = targetDiv.offsetTop;
                var elementHeight = targetDiv.offsetHeight;
                var distance = scrollTop + viewportHeight - elementOffsetTop;
                var percentage = Math.round(
                  distance / ((viewportHeight + elementHeight) / 100)
                );
                var scrolledPercentage = Math.min(100, Math.max(0, percentage));
                //console.log("Event : "+scrolledPercentage);
                if (scrolledPercentage >= 50) {
                  divScrolled = true;
                  if (!divStayed) {
                      stayTimeout = setTimeout(() => {
                          if (divInViewport && divScrolled && !divLeftViewport) {
                              // Trigger event when div has scrolled 50% and stayed for 2 seconds
                              if(!executeOnce){
                                executeOnce=1;
                                pingtoserverforVDOAIViewport('inviewport');
                                console.log('Event: Div scrolled 50% and stayed for 2 seconds');
                              }
                          }
                          divStayed = true;
                      }, 2000);
                  }
              } else {
                  clearTimeout(stayTimeout);
                  divScrolled = false;
                  divStayed = false;
              }
          } else {
              if (divStayed) {
                  // Trigger event if div goes out of viewport within 2 seconds
                  if(!executeOnce){
                      executeOnce=1;
                      pingtoserverforVDOAIViewport('outviewport');
                      console.log('Event: Div left viewport within 2 seconds');
                  }
                  divLeftViewport = true;
              }
              divInViewport = false;
              divScrolled = false;
              divStayed = false;
          }
      }
    }

      window.addEventListener('scroll', checkDivInViewport);

    }
    /*VDO AI in viewport Check*/
    //For liteversion Ad space removal
    if(window.location.search.indexOf('?content=liteversion')>-1){
      if(document.getElementById("homeVdoPromo")){
        document.getElementById("homeVdoPromo").remove();
      }
    if(desipearlseven==0){
      if(document.querySelector('.bottom-sticky-ad-openclose')){
        document.querySelector('.bottom-sticky-ad-openclose').style.display='none';
      }
      if(document.querySelector('.bottom-sticky-ad-content')){
          document.querySelector('.bottom-sticky-ad-content').style.display='none';
      }
    }
    setTimeout(function() {
    if(desipearlseven==1){
      if(document.querySelector('.dynamic-slot')){
          var elements = document.querySelectorAll('.dynamic-slot');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.cssText = 'display: none !important';
        }
      }
    }
    }, 2000);
    if(document.getElementById("taboola-mid-article-thumbnails")){
    document.getElementById("taboola-mid-article-thumbnails").remove();
    }
    if(document.getElementById("recommended_video")){
        document.getElementById("recommended_video").remove();
    }
    if(document.getElementById("div-gpt-ad-1528089750114-55")){
    document.getElementById("div-gpt-ad-1528089750114-55").remove();
    }
    if(document.getElementById("ad3")){
    document.getElementById("ad3").remove();
    }

    if(document.getElementById("ad4")){
        document.getElementById("ad4").remove();
    }

    if(document.getElementById('oi-mid-article-thumbnails')){
        document.getElementById('oi-mid-article-thumbnails').remove();
    }
    if(document.getElementsByClassName("oiad-txt").length){
    var liteHeading = document.getElementsByClassName("oiad-txt");
    while (liteHeading.length > 0) liteHeading[0].remove();
    }
    if(document.getElementsByClassName("oiad-txt1").length){
     var liteHeading1 = document.getElementsByClassName("oiad-txt1");
     while (liteHeading1.length > 0) liteHeading1[0].remove();
    }
    
        
    var targetHostLite = ['oneindia','filmibeat','drivespark','gizbot','careerindia','goodreturns','boldsky','mykhel','nativeplanet'];
    if(targetHostLite.includes(domainmiddle)){
        function taboolaMidWidget(divelem){
             window._taboola = window._taboola || [];
              _taboola.push({
                mode: 'thumbnails-a-mid',
                container: divelem,
                category: 'same',
                placement: 'Mid Article DPP',
                target_type: 'mix'
              });
        }
        function taboolaMidWidget1(divelem){
             window._taboola = window._taboola || [];
              _taboola.push({
                mode: 'thumbnails-a-mid',
                container: divelem,
                category: 'same',
                placement: 'Mid Article DPP 1',
                target_type: 'mix'
              });
        }
        if(window.location.search.indexOf('utm_content=1')>-1){
            console.log('UTM content 1');
            if(document.getElementById('taboola-below-article-thumbnails')){
              document.getElementById('taboola-below-article-thumbnails').remove();
            }
            if(document.getElementById('taboola-mid-home-stream-article')){
              document.getElementById('taboola-mid-home-stream-article').remove();
            }
            if(document.querySelector('.one-ad')){
                if(document.querySelectorAll('.one-ad')[2]){
                  var addivelem2 = document.querySelectorAll('.one-ad')[2];
                  addivelem2.innerHTML='';
                  addivelem2.remove();
                  /*var taboola_mid_widget=document.createElement("div");
                  taboola_mid_widget.id='taboola-mid-article-thumbnails2';
                  addivelem2.appendChild(taboola_mid_widget);
                  taboolaMidWidget('taboola-mid-article-thumbnails2');*/
                }
            }
            if(document.querySelector('.inarticlead')){
                if(document.querySelectorAll('.inarticlead')[2]){
                  var addivelem = document.querySelectorAll('.inarticlead')[2];
                  addivelem.innerHTML='';
                  addivelem.remove();
                  /*var taboola_mid_widget=document.createElement("div");
                  taboola_mid_widget.id='taboola-mid-article-thumbnails2';
                  addivelem.appendChild(taboola_mid_widget);
                  taboolaMidWidget('taboola-mid-article-thumbnails2');*/
                }
            }
        }else if(window.location.search.indexOf('utm_content=2')>-1){
            if(document.getElementById('taboola-below-article-thumbnails')){
              document.getElementById('taboola-below-article-thumbnails').remove();
            }
            if(document.getElementById('taboola-mid-home-stream-article')){
              document.getElementById('taboola-mid-home-stream-article').remove();
            }
            if(document.querySelector('.inarticlead')){
                if(document.querySelectorAll('.inarticlead')[1]){
                  var addivelem = document.querySelectorAll('.inarticlead')[1];
                  addivelem.innerHTML='';
                  addivelem.remove();
                  /*var taboola_mid_widget=document.createElement("div");
                  taboola_mid_widget.id='taboola-mid-article-thumbnails2';
                  addivelem.appendChild(taboola_mid_widget);
                  taboolaMidWidget('taboola-mid-article-thumbnails2');*/
                }
            }
            if(document.querySelector('.one-ad')){
                if(document.querySelectorAll('.one-ad')[1]){
                  var addivelem = document.querySelectorAll('.one-ad')[1];
                  addivelem.innerHTML='';
                  addivelem.remove();
                  /*var taboola_mid_widget=document.createElement("div");
                  taboola_mid_widget.id='taboola-mid-article-thumbnails2';
                  addivelem.appendChild(taboola_mid_widget);
                  taboolaMidWidget('taboola-mid-article-thumbnails2');*/
                }
                if(document.querySelectorAll('.one-ad')[2]){
                  var addivelem2 = document.querySelectorAll('.one-ad')[2];
                  addivelem2.innerHTML='';
                  addivelem2.remove();
                }
            }
            console.log('UTM content 2');
        }else if(window.location.search.indexOf('utm_content=3')>-1 || window.location.search.indexOf('utm_content=5')>-1){
            
            if(document.querySelector('.inarticlead')){
                if(document.querySelectorAll('.inarticlead')[0]){
                  var addivelem = document.querySelectorAll('.inarticlead')[0];
                  addivelem.innerHTML='';
                  //addivelem.remove();
                }
                if(document.querySelectorAll('.inarticlead')[1]){
                  var addivelem1 = document.querySelectorAll('.inarticlead')[1];
                  addivelem1.innerHTML='';
                  if(document.querySelector('.cmscontent-article2')){
                      document.querySelector('.cmscontent-article2').style.display='none';
                  }

                  if(domainmiddle=='gizbot'){
                    addivelem.remove();
                  }else{
                    var taboola_mid_widget1=document.createElement("div");
                    taboola_mid_widget1.id='taboola-mid-article-thumbnails3';
                    addivelem.appendChild(taboola_mid_widget1);
                    //taboolaMidWidget1('taboola-mid-article-thumbnails3');
                  }
                  
                  addivelem1.remove();
                }
            }
            if(document.querySelector('.one-ad')){
                if(document.querySelectorAll('.one-ad')[0]){
                  var addivelem = document.querySelectorAll('.one-ad')[0];
                  addivelem.innerHTML='';
                  //addivelem.remove();
                  if(domainmiddle=='gizbot'){
                    addivelem.remove();
                  }else{
                    var taboola_mid_widget1=document.createElement("div");
                    taboola_mid_widget1.id='taboola-mid-article-thumbnails3';
                    addivelem.appendChild(taboola_mid_widget1);
                    //taboolaMidWidget1('taboola-mid-article-thumbnails3');
                  }
                }
                if(document.querySelectorAll('.one-ad')[1]){
                  var addivelem1 = document.querySelectorAll('.one-ad')[1];
                  addivelem1.innerHTML='';
                  addivelem1.remove();
                }
                if(document.querySelectorAll('.one-ad')[2]){
                  var addivelem2 = document.querySelectorAll('.one-ad')[2];
                  addivelem2.innerHTML='';
                  addivelem2.remove();
                }
            }
            console.log('UTM content 3');
        }else if(window.location.search.indexOf('utm_content=4')>-1){
            if(document.getElementById('taboola-mid-home-stream-article')){
              document.getElementById('taboola-mid-home-stream-article').remove();
            }
            if(document.getElementById('taboola-below-article-thumbnails')){
              document.getElementById('taboola-below-article-thumbnails').remove();
            }
            if(document.querySelector('.inarticlead')){
              var oneadElemArt = document.querySelectorAll('.inarticlead');
              var oneadElemLenArt = oneadElemArt.length;
              if(oneadElemLenArt > 0){
                  for(k=0;k<oneadElemLenArt;k++){
                    oneadElemArt[k].remove();
                  }
              }
                /*if(document.querySelectorAll('.inarticlead')[0]){
                  var addivelem = document.querySelectorAll('.inarticlead')[0];
                  addivelem.classList.remove('oi-add-block');
                  addivelem.innerHTML='';
                  if(document.querySelector('.cmscontent-article1')){
                      document.querySelector('.cmscontent-article1').style.display='none';
                  }
                  addivelem.remove();
                }
                if(document.querySelectorAll('.inarticlead')[1]){
                  var addivelem1 = document.querySelectorAll('.inarticlead')[1];
                  addivelem1.innerHTML='';
                  addivelem1.remove();
                }*/
            }
            if(document.querySelector('.one-ad')){
              var oneadElem = document.querySelectorAll('.one-ad');
              var oneadElemLen = oneadElem.length;
              if(oneadElemLen > 0){
                  for(k=0;k<oneadElemLen;k++){
                    oneadElem[k].remove();
                  }
              }
            }
            console.log('UTM content 4');
        }
    }
    if (/Mobi|Android/i.test(navigator.userAgent) && liteflag==0) {
        if(domainmiddle=='goodreturns'){
            var placedElem = document.getElementById('inner-article-wrapper');
        }else if(domainmiddle=='drivespark' || domainmiddle=='boldsky'){
            var placedElem = document.getElementById('story');
        }else{
            var placedElem = document.getElementById('article-content-div');
        }
        
        if(placedElem){
            if(document.querySelector('.oiadv')){
                var lastIndx = document.querySelectorAll('.oiadv').length - 1;
                var adelem = document.querySelectorAll('.oiadv')[lastIndx];
                if(adelem){
                var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)+300;
                if(elDistanceToTop==0){
                    elDistanceToTop=3000;
                }
                    var banner_frame=document.createElement("div");
                    if(readMoreTaboola==1){
                    //if(window.location.search.indexOf('readmore=1')>-1){
                    if(document.getElementById('oitaboola')){
                        banner_frame.style.cssText='clear:both;position:absolute;width:100%;';
                        if(domainmiddle=='drivespark'){
                            banner_frame.innerHTML='<div class="dsmore"><div id="readMoreTaboolaGreadient"></div><div class="expand-btn-wrap" style="top: 190px;bottom: inherit;height:160px;"></div><div id="show-more" class="bounce more-article-btn" style="top: 280px;bottom: inherit;"><a class="morearticle" href="javascript:void(0);">Continue Reading <i class="view-arrow"></i></a></div></div>';
                        }else{
                            banner_frame.innerHTML='<div class="othermore"><div id="readMoreTaboolaGreadient"></div><div class="expand-btn-wrap" style="top: 190px;bottom: inherit;height:160px;"></div><div id="show-more" class="bounce more-article-btn" style="top: 280px;bottom: inherit;"><a class="morearticle" href="javascript:void(0);">Continue Reading<i class="view-arrow"></i></a></div></div>';
                        }
                       document.getElementById('oitaboola').appendChild(banner_frame);
                    }
                    }else{
                        if(domainmiddle=='drivespark'){
                        banner_frame.innerHTML='<div class="dsmore"><div class="expand-btn-wrap"></div><div id="show-more" class="bounce more-article-btn"><a class="morearticle" href="javascript:void(0);">Continue Reading<i class="view-arrow"></i></a></div></div>';
                        }else{
                            banner_frame.innerHTML='<div class="othermore"><div class="expand-btn-wrap"></div><div id="show-more" class="bounce more-article-btn"><a class="morearticle" href="javascript:void(0);">Continue Reading<i class="view-arrow"></i></a></div></div>';
                        }
                        placedElem.appendChild(banner_frame);
                    }
                        
                        placedElem.setAttribute("style", "height: "+elDistanceToTop+"px;overflow: hidden;position: relative;");
                        var el = document.querySelector(".morearticle"); // this element contains more than 1 DOMs.
                        el.onclick = function() {
                            placedElem.setAttribute("style", "height:auto;overflow: hidden;position: relative;");
                            document.querySelector(".morearticle").style.display='none';
                            document.querySelector(".expand-btn-wrap").style.display='none';
                            
                        }; 
                    if(document.getElementById('taboola-below-article-thumbnails')){
                        var gaEventVal = 'ros'+domainmiddle+'.send';
                        var tabscrollExecute=0;
                        var gaTriggerFlag=0;
                        window.addEventListener("scroll", function(){
                          if(tabscrollExecute==0){
                              var tabelemInViewPort = isElementInViewport(document.getElementById('taboola-below-article-thumbnails'));
                            if(tabelemInViewPort){
                            var tabcnt=0;
                            var taboolaInt = setInterval(function(){
                                var tabwidgetloaded = document.getElementById('taboola-below-article-thumbnails').getAttribute('tbl-data-mutation-observer');
                                tabcnt++;
                                if(tabwidgetloaded=='undefined'||tabwidgetloaded==''||tabwidgetloaded==null){
                                    tabwidgetloaded=0;
                                }
                                if(tabcnt>=7){
                                    if(tabwidgetloaded==0){
                                        if(gaTriggerFlag==0){
                                            gaTriggerFlag=1;
                                            ga(gaEventVal,'event','intraffic','dp','taboola-notloaded');
                                        }
                                        tabscrollExecute=1;
                                        clearInterval(taboolaInt);
                                    }else{
                                        if(gaTriggerFlag==0){
                                            gaTriggerFlag=1;
                                            ga(gaEventVal,'event','intraffic','dp','taboola-loaded');
                                        }
                                        tabscrollExecute=1;
                                        clearInterval(taboolaInt);
                                    }
                                }
                            },1000);
                        }
                    }
                        }, false);
                        }
            }
          }
        }
    }
}
if(domainmiddle=='oneindiatest' && liteflag==0){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        if(document.getElementById('taboola-below-article-thumbnails')){
        if(document.querySelector('.oi-morenews-slider-wrapper')){
            document.querySelector('.oi-morenews-slider-wrapper').classList.add('viewport');
        }
        var tabscrollExecute1=0;
        window.addEventListener("scroll", function(){
              var tabelemInViewPort1 = isElementInViewport(document.getElementById('taboola-below-article-thumbnails'));
            if(tabelemInViewPort1){
                if(tabscrollExecute1==0){
                setTimeout(function() {
                    tabscrollExecute1=1;
                if(document.querySelector('.oi-morenews-slider-wrapper')){
                    document.querySelector('.oi-morenews-slider-wrapper').classList.remove('viewport');
                }
                }, 2000);
            }
        }
        });
    }
    }
}
if(document.getElementById('oi-mid-article-thumbnails')){
    document.getElementById('oi-mid-article-thumbnails').classList.remove('oiad','oi-axt');
}
if(document.getElementById('taboola-mid-article-thumbnails')){
    document.getElementById('taboola-mid-article-thumbnails').classList.remove('oiad','oi-axt');
}
if(document.getElementById('div-gpt-ad-1506054776114-0')){
    document.getElementById('div-gpt-ad-1506054776114-0').classList.remove('oiad','oi-axt');
}

//if(window.location.search.indexOf('readmore=1')>-1){
if(readMoreEnableForNonLite==1){
var curday = new Date().getDay();
//if(curday==0||curday==6){
if(liteflag==0){
var readmoreflag1=0;
var enableFlag=0;
function commonReadmorefun(elDistanceToTopval,placedElem){
    if(elDistanceToTopval==0){
      elDistanceToTopval=3000;
    }
    if(readMoreTaboola==1){
    //if(window.location.search.indexOf('readmore=1')>-1){
    if(document.getElementById('oitaboola')){
        var banner_frame=document.createElement("div");
        banner_frame.style.cssText='clear:both;position:absolute;width:100%;';
        if(domainmiddle=='drivespark'){
            banner_frame.innerHTML='<div class="dsmore"><div id="readMoreTaboolaGreadient"></div><div class="expand-btn-wrap" style="top: 190px;bottom: inherit;height:160px;"></div><div id="show-more" class="bounce more-article-btn" style="top: 280px;bottom: inherit;"><a class="morearticle" href="javascript:void(0);">Continue Reading <i class="view-arrow"></i></a></div></div>';
        }else{
            banner_frame.innerHTML='<div class="othermore"><div id="readMoreTaboolaGreadient"></div><div class="expand-btn-wrap" style="top: 190px;bottom: inherit;height:160px;"></div><div id="show-more" class="bounce more-article-btn" style="top: 280px;bottom: inherit;"><a class="morearticle" href="javascript:void(0);">Continue Reading<i class="view-arrow"></i></a></div></div>';
        }
       document.getElementById('oitaboola').appendChild(banner_frame);
       placedElem.classList.add('conreadload');
    placedElem.setAttribute("style", "height: "+elDistanceToTopval+"px;overflow: hidden;position: relative;min-height:2000px;");
        var el = document.querySelector(".morearticle"); // this element contains more than 1 DOMs.
        el.onclick = function() {
            placedElem.setAttribute("style", "height:auto!important;overflow: hidden;position: relative;");
            placedElem.classList.remove('conreadload');
            placedElem.classList.add('conreadhgt');
            document.querySelector(".morearticle").style.display='none';
            document.querySelector(".expand-btn-wrap").style.display='none';
            document.querySelector("#readMoreTaboolaGreadient").style.display='none';
        }; 
    }
}else{
        var banner_frame=document.createElement("div");
        if(domainmiddle=='drivespark'){
    banner_frame.innerHTML='<div class="dsmore"><div class="expand-btn-wrap"></div><div id="show-more" class="bounce more-article-btn"><a class="morearticle" href="javascript:void(0);">Continue Reading<i class="view-arrow"></i></a></div></div>';
        }else{
           banner_frame.innerHTML='<div class="othermore"><div class="expand-btn-wrap"></div><div id="show-more" class="bounce more-article-btn"><a class="morearticle" href="javascript:void(0);">Continue Reading<i class="view-arrow"></i></a></div></div>'; 
        }
       placedElem.appendChild(banner_frame);
       placedElem.classList.add('conreadload');
        placedElem.setAttribute("style", "height: "+elDistanceToTopval+"px;overflow: hidden;position: relative;min-height:2000px;");
        var el = document.querySelector(".morearticle"); // this element contains more than 1 DOMs.
        el.onclick = function() {
            placedElem.setAttribute("style", "height:auto!important;overflow: hidden;position: relative;");
            placedElem.classList.remove('conreadload');
            placedElem.classList.add('conreadhgt');
            document.querySelector(".morearticle").style.display='none';
            document.querySelector(".expand-btn-wrap").style.display='none';
            
        }; 
    }
    
}
/*if(domainmiddle=='oneindia'){
    var readMoreStatus = sessionStorage.getItem("readmore_status");
    if (readMoreStatus == "" || readMoreStatus == "undefined" || readMoreStatus == null) {
        readMoreStatus = 0;
        sessionStorage.setItem("readmore_status",1);
    }
}else{
    readMoreStatus = 1;
}*/
readMoreStatus = 1;
if(domainmiddle=='goodreturns'){
    var placedElem = document.getElementById('inner-article-wrapper');
    var someElementsItems = document.querySelectorAll("#inner-article-wrapper .oi-add-block");
}else if(domainmiddle=='drivespark' || domainmiddle=='boldsky'){
    var placedElem = document.getElementById('story');
    var someElementsItems = document.querySelectorAll("#story .oi-add-block");
}else{
    var placedElem = document.getElementById('article-content-div');
    var someElementsItems = document.querySelectorAll("#article-content-div .oi-add-block");
}
var articlebottom=1;
window.addEventListener('scroll', function() {
    amountscrolled1();
    if(pctScrolled1>30){
    if(readmoreflag1==0){
       readmoreflag1=1;
if (/Mobi|Android/i.test(navigator.userAgent)) {
    if(target_page_type_camp.indexOf('-article')>-1 && readMoreStatus==1){
    //if(domainmiddle=='drivespark'){
    if(enableFlag==0){
            if(placedElem){
                if(articlebottom==1){
                    if(document.querySelector('#articleBottomSlider')){
                        adelem=document.querySelector('#articleBottomSlider');
                        if(host=='tamil.oneindia.com'){
                            var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)+50;
                            if(!document.getElementById("taboola-mid-home-stream-article")) {
                                elDistanceToTop = parseInt(elDistanceToTop)-140;
                            }
                        }else{
                            var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top);
                        }
                         commonReadmorefun(elDistanceToTop,placedElem);   
                    }else if(document.querySelector('.oi-related-articles')){
                        adelem=document.querySelector('.oi-related-articles');
                        var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)-200;
                        commonReadmorefun(elDistanceToTop,placedElem); 
                    }else if(document.querySelector('.oi-morenews-slider-wrapper')){
                        adelem=document.querySelector('.oi-morenews-slider-wrapper');
                        var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)-200;
                        commonReadmorefun(elDistanceToTop,placedElem); 
                    }else if(document.querySelector('.oi-trending-mainsection')){
                        adelem=document.querySelector('.oi-trending-mainsection');
                        var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)-200;
                        commonReadmorefun(elDistanceToTop,placedElem); 
                    }
                }else{
                var elemlen=0;
                if(document.querySelector('.oi-add-block')){
                    elemlen=document.querySelectorAll(".oi-add-block").length;
                }
                if(elemlen>3){
                    if(document.querySelector('.oi-add-block')){
                        adelem=someElementsItems[someElementsItems.length -1];
                        var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)+400;
                         commonReadmorefun(elDistanceToTop,placedElem);   
                    }
                }else{
                    if(document.querySelector('#oitaboolacontainer1 #taboola-mid-article-thumbnails')){
                            if(document.querySelector('.oi-add-block')){
                                adelem=someElementsItems[someElementsItems.length -1];
                                var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)+400;
                                 commonReadmorefun(elDistanceToTop,placedElem);   
                            }
                    }else{
                        if(document.querySelector('#taboola-mid-article-thumbnails')){
                        var adelem=document.querySelector('#taboola-mid-article-thumbnails');
                        var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)+450;
                            commonReadmorefun(elDistanceToTop,placedElem);
                        }
                    }
                }
            }
            }
    }else{
        console.log("Readmore : Enable Flag Code");
            if(placedElem){
                if(document.querySelector('#endofcontent')){
                    var adelem = document.querySelector('#endofcontent');
                    var elDistanceToTop = parseInt(window.pageYOffset + adelem.getBoundingClientRect().top)+150;
                    commonReadmorefun(elDistanceToTop,placedElem);
                }
            }
    }
    }
}
}
}
});
}
}
//}
if(domainmiddle=='filmibeat'){
  if(document.getElementById('taboola-mid-home-stream-article')){
    document.getElementById('taboola-mid-home-stream-article').remove();
  }
}
if(window.location.search.indexOf('?debugad=true') > -1){
  // Select all div elements on the page
const divElements = document.querySelectorAll('div');
let count = 0;
divElements.forEach((div) => {
  const id = div.id;
  if (id && id.startsWith('are-slot-')) {
    count++;
  }
});
console.log(`Prebid Details`);
console.table(adUnits);
console.log(`Number of divs with the pattern 'are-slot-': ${count} (For Mobile Number always be plus 1 as we are considering sticky ad with different div.) `);
var finalconfigArr = [];
oi_ad_config.forEach(function(config, idx) {
  var mapVal = config.mapping;
  var gptVal = config.gpt;
  var globalMap = globalAdObj[mapVal];

  if (globalMap && gptVal) {
    // Create a new object for each iteration
    var finalconfigArrTmp = {
      slotName: config.slotName,
      slotId: config.slotID,
      size: config.sizes,
    };

    finalconfigArr.push(finalconfigArrTmp);
  }
});
console.table(finalconfigArr);
}
//if(langParam=='EN'){
if ('browsingTopics' in document && document.featurePolicy.allowsFeature('browsing-topics')) {
      var iframe = document.createElement('iframe');
        iframe.src = '/common/browse-topic.html';
        iframe.id='topicFrame';
        iframe.scrolling='no';
        iframe.frameBorder=0;
        document.body.appendChild(iframe);
    } else {
      console.log('document.browsingTopics() not supported');
    }
//}       
</script> <style>#taboola-mid-home-stream-article {background: #f5f5f5;margin: 10px 0;padding: 10px;display: none;}#taboola-mid-home-stream-article .thumbBlock_holder {width: 100px!important;height: 56px;}#taboola-mid-home-stream-article span.video-label.video-title.trc_ellipsis {font-size: 14px;}#taboola-mid-home-stream-1 {padding: 10px 0;}
#oi-noti-close:before {
    content: none!important;
}

#oi-noti-close:after {
    content: none!important;
}
#oi-noti-close{
    background-image: url(/images/oi-close-button1.svg);
    -webkit-transform:none!important;
    transform:none!important;
}
#aniBox {
    background: #f2fafc;
    padding: 20px;
    margin: 24px 0;
}
#aniBox::before {
    content: "You May Also Like";
    display: inline-block;
    font-size: 18px;
    font-family: arial;
    padding-bottom: 12px;
    color: #000;
   
}
.conreadhgt {
    height: auto!important;
}
.conreadload{
  min-height:2000px!important;
}
#are-slot-1::before, #are-slot-2::before, #are-slot-3::before, #are-slot-4::before, #are-slot-5::before {
    display: block!important;
}
.removeStyleAd{
    min-height:0!important;
}

.removeStyleAd::before{
    content:''!important;
}
.oiadv {
    display: block!important;
}
.cms-videos-wrapper #aniBox::before {
    content: '' !important;
    margin-bottom: 0!important;
    padding-bottom: 0!important;
    display: none;
}

.cms-videos-wrapper #aniBox {
    background: none;
    padding: 0;
    margin: 0;
}
iframe#topicFrame {
    display: none;
}
.oiadv::before {
    display: block!important;
}
</style> <script type="text/javascript" data-pagespeed-no-defer>
//New Taboola Changes//
if (document.getElementById("taboola-below-category-thumbnails")) {
  var dynamicTaboolaMidDiv = document.createElement('div');
  dynamicTaboolaMidDiv.id = 'taboola-below-article-thumbnails';
  document.getElementById("taboola-below-category-thumbnails").insertAdjacentElement('afterend', dynamicTaboolaMidDiv);
  document.getElementById("taboola-below-category-thumbnails").remove();
}
if (document.getElementById("taboola-mid-category-thumbnails")) {
  var dynamicTaboolaMidDiv1 = document.createElement('div');
  dynamicTaboolaMidDiv1.id = 'taboola-mid-article-thumbnails';
  document.getElementById("taboola-mid-category-thumbnails").insertAdjacentElement('afterend', dynamicTaboolaMidDiv1);
  document.getElementById("taboola-mid-category-thumbnails").remove();
}
var taboolaPageType = 'category';
if(document.getElementById("containerMain")&&document.getElementById("containerMain").hasAttribute("data-page_type")){
    taboolaPageType=document.getElementById("containerMain").getAttribute("data-page_type");
    if(taboolaPageType=='dbpage' || taboolaPageType=='db-page'){
      taboolaPageType='article';
    }
}else if((document.querySelector('head'))&&(document.querySelector('head').hasAttribute('data-content_type'))){
    var pagecontenttype=document.querySelector('head').getAttribute('data-content_type');
    if(pagecontenttype=='database'){
      taboolaPageType='article';
    }
}
//New Taboola Changes//
function taboola_main(){
    window._taboola = window._taboola || [];
    if(taboolaPageType==='homepage'){
        _taboola.push({homepage:'auto'});
    }else if(taboolaPageType==='article'){
        _taboola.push({article:'auto'});
    }else{
        _taboola.push({article:'auto'});
    }
    //_taboola.push({article:'auto'});
    
    !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
    }(document.createElement('script'),
    document.getElementsByTagName('script')[0],
    '//cdn.taboola.com/libtrc/oneindiadigital-mykhelenglish/loader.js',
    'tb_loader_script');
    if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
}

 taboola_main();
          function getTaboolaWidget(mode,container,placement,target_type){
            window._taboola = window._taboola || [];
              _taboola.push({
                mode: mode,
                container: container,
                placement: placement,
                category:'english',
                target_type: target_type
              });
        }
        if (document.getElementById("taboola-below-article-thumbnails")) {
           var mode = 'thumbs-feed-01-a';
            var container = 'taboola-below-article-thumbnails';
            var placement = 'Below Article Thumbnails';
            var target_type = 'mix';
            getTaboolaWidget(mode,container,placement,target_type);
          }

   if (document.getElementById("taboola-mid-article-thumbnails")) {
            var mode = 'thumbnails-a-mid';
            var container = 'taboola-mid-article-thumbnails';
            var placement = 'Mid Article Thumbnails';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);
          }
   if (document.getElementById("taboola-right-rail-thumbnails")) {
            var mode = 'thumbnails-rr';
            var container = 'taboola-right-rail-thumbnails';
            var placement = 'Right Rail Thumbnails';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);
          }
  if (document.getElementById("taboola-below-category-thumbnails")) {
            var mode = 'thumbnails-a-section';
            var container = 'taboola-below-category-thumbnails';
            var placement = 'Below Category Thumbnails';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);
          } 

  if (document.getElementById("taboola-below-homepage-thumbnails")) {
            var mode = 'thumbnails-a-hp';
            var container = 'taboola-below-homepage-thumbnails';
            var placement = 'Below Homepage Thumbnails';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);
          }
        if(taboolaPageType==='homepage'){ 
if (document.getElementById("taboola-mid-home-stream-1")) {
            var mode = 'thumbs-feed-01-stream';
            var container = 'taboola-mid-home-stream-1';
            var placement = 'Mid Home Stream 1';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);
} 

if (document.getElementById("taboola-mid-home-stream-2")) {
            var mode = 'thumbs-feed-01-stream';
            var container = 'taboola-mid-home-stream-2';
            var placement = 'Mid Home Stream 2';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);
}
}
if (document.getElementById("taboola-mid-category-thumbnails")) {
            var mode = 'thumbnails-a-mid';
            var container = 'taboola-mid-category-thumbnails';
            var placement = 'Mid Category Thumbnails';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);
}
if (document.getElementById("taboola-below-home-thumbnails")) {
            var mode = 'alternating-thumbnails-a';
            var container = 'taboola-below-home-thumbnails';
            var placement = 'Below Home Thumbnails';
            var target_type = 'mix';
           getTaboolaWidget(mode,container,placement,target_type);

          }

  window._taboola = window._taboola || [];
  _taboola.push({flush: true});

var desipearljsflag=0;
 function loadDesipearlNano(){
    var dpaFtSc = document.createElement("script");
    dpaFtSc.id = "dpa_pixel_footer_script";
    document.head.appendChild(dpaFtSc);
    dpaFtSc.async = true;
    dpaFtSc.src = "https://www.desipearl.com/advertiser/dpas/dpas.js";
  }
window.addEventListener('scroll', function() {
    if(desipearljsflag==0){
        desipearljsflag=1;
if(document.getElementsByClassName("oidesiwrap").length){
        loadDesipearlNano();
      }
      }
});

    var oicontent_oneliner = {
            scriptUrl : 'https://content.oneindia.com/www/delivery/asyncjs.php',
            reviveId:'9de4f035bc8106094a8824fc0cfb6de3',
            generateInhouseScriptMobi : function(){
                var backupInhouse = document.createElement("script");
                backupInhouse.async=true;
                backupInhouse.type = "text/javascript";
                backupInhouse.src = oicontent_oneliner.scriptUrl;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(backupInhouse, s);
            },
            removeJSMobi : function(filename){
             var tags = document.getElementsByTagName('script');
             for (var i = tags.length; i >= 0; i--){
              if (tags[i] && tags[i].getAttribute('src') != null && tags[i].getAttribute('src').indexOf(filename) != -1)
               tags[i].parentNode.removeChild(tags[i]);
             }
            },
            createInhouseCampaignOneliner : function(zoneId,elemId){
                var ins_elem = document.createElement("ins");
                ins_elem.setAttribute("data-revive-target", "_blank");
                ins_elem.setAttribute("data-revive-zoneid",zoneId);
ins_elem.setAttribute("data-revive-id",oicontent_oneliner.reviveId);
                var refnode = document.getElementById(elemId);
                document.getElementById(elemId).innerHTML='';
document.getElementById(elemId).style.display='block';
document.getElementById(elemId).appendChild(ins_elem);
oicontent_oneliner.removeJSMobi(oicontent_oneliner.scriptUrl);
                oicontent_oneliner.generateInhouseScriptMobi();
            }
        };
if(document.getElementById('oneliner-promo')){
var scrollExecuteOneliner = 0;
window.addEventListener("scroll", function(){
          if(scrollExecuteOneliner==0){
              scrollExecuteOneliner=1;
oicontent_oneliner.createInhouseCampaignOneliner(177,'oneliner-promo');
          }
      }, false);
    }
//Fantasy Pro

if(document.getElementById('fantasypro')){
        var fantArr = ['<p class="fantasypro">Its game time - <a href="https://games.mykhel.com/?utm_source=MK-EN&utm_medium=ArticlePage&utm_campaign=Games" target="_blank" rel="noreferrer"> play now!</a> </p>'];
        var randText = fantArr[Math.random() * fantArr.length | 0];
        document.getElementById('fantasypro').innerHTML = randText;
}


//Fantasy Pro
</script> </div> <style>
.mykhel-webstories-slider-content .bx-wrapper .bx-controls.bx-has-controls-direction {background: #fff;height: 227px;position: absolute;right: 0;top: 0;width: 80px;margin-top:0;}

            .mykhel-webstories-sliderwrap {width:1280px; margin:0 auto; word-wrap: break-word;box-sizing: border-box;}
.mykhel-webstories-slider {width: 1174px;position: relative;min-height: 250px;padding: 10px 0;margin: 0 auto;display: flex;justify-content: center;align-items: center;}
.mykhel-webstories-slider-content {display: flex;overflow-x: hidden;position: relative;justify-content: start;padding: 0 100px 0 5px;width: auto;background: #fff;}
.mykhel-webstories-slider-contentinner {display: flex;overflow-x: auto;height: 100%;}
.mykhel-webstories-slider-player {display: flex;justify-content: center;align-items: center;padding-top: 4px;min-width: 80px;transform: translateY(-94%);}
.mykhel-slider-box {position: relative;transition: transform .3s;padding: 0 15px;}
.mykhel-slider-box a {color: #000;text-decoration: none;}
.mykhel-slider-img {background: linear-gradient(to left,#7439d5,#d5359b);border-radius: 100%;display: inline-table;}
.mykhel-slider-img img {width: 120px;height: 120px;border-radius: 100%;margin: 2px;background: #fff;border: none;padding: 3px;display: block;cursor: pointer;object-fit: cover;max-width: initial;}
.mykhel-slider-title {
    font-size: 15px;
    max-width: 120px;
    line-height: 18px;
    font-weight: 500;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: 2px;
    min-width: 130px;
}

.mykhel-webstories-slider-player {display: flex;justify-content: center;align-items: center;padding-top: 4px;min-width: 80px;transform: translateY(-94%);}          
.mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction a {cursor: pointer;background-repeat: no-repeat;background-position: 50%;background-size: 20px;border: 0;background-color: #202125;outline: transparent;height: 30px;width: 30px;border-radius: 50%;padding: 0;margin: 0 4px;box-shadow: 0 0 10px rgba(60,64,67,.1);font-size: 0;display: block;min-width: 30px;position: absolute;}
.mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction a:before {border: solid #fff;border-width: 0 2px 2px 0;display: inline-block;padding: 3px;position: absolute;left: 10px;top: 10px;content: '';}
.mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction a.bx-next:before {transform: rotate(-45deg);-webkit-transform: rotate(-45deg);}

.mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction a.bx-prev:before {transform: rotate(135deg);-webkit-transform: rotate(135deg);}
.mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction a.bx-prev {left: 0;}
.mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction a.bx-next {right: 0;}
.mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction {position: absolute;right: 0px;top: 50px;min-width: 80px;} 

@media only screen and (max-width: 600px) {
    .mykhel-webstories-slider-content .bx-wrapper .bx-controls-direction {top: 215px;margin: auto;left: 0;right: 0;width: 80px;}
    .mykhel-webstories-slider-content {padding: 0 5px 50px 5px;}
    .mykhel-webstories-slider-content .bx-wrapper .bx-controls.bx-has-controls-direction {position: inherit;height: auto;width: auto;}
}

#footerMain.stickyfooter {
    position: fixed;
    bottom: 0;
    z-index: 999999999;
    height: 193px;
    background: #fff;
    width: 100%;
}


	.oi-footer-bottom-ad-btns {
    margin: 0 auto;
    text-align: center;
    position: fixed;
    right: 173px;
    bottom: 100px;
    display: none;
}
.oi-footer-bottom-ad-btns a {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin: 0 5px;
    box-shadow: 0 3px 4px #a2a2a2;
    display: block;
    margin-bottom: 5px;
}
		.oi-footer-bottom-icon {background: url(/images/footer-bottom-arrow.svg) no-repeat 0 0;}
		.oi-footer-top-icon {background: url(/images/footer-top-arrow.svg) no-repeat 0 0;}
.oi-footer-close {
    background: url(/images/close-btn.svg) no-repeat center center;
    width: 30px;
    height: 30px;
    display: block;
    margin: 10px 0px 5px 5px;
    position: absolute;
    right: 0;
    bottom: 185px;
    cursor: pointer;
    z-index: 99999999999;
    display: none;
}

#footerMain.hidestickyfooter {
    position: fixed;
    bottom: 0;
    height: 0;
}
#footerMain{
	  moz-transition: all 0.27s ease-in;
    -o-transition: all 0.27s ease-in;
    -webkit-transition: all 0.27s ease-in;
    transition: all 0.27s ease-in;
}
.oi-footer-comment-icon {
    background: url(/images/cmtnewicon.svg) no-repeat 0 0;
    position: relative;
    z-index: 99999;
}
span.commentsToolTip {
    background: #FF4423;
    font-family: arial;
    color: #fff;
    float: left;
    width: 123px;
    padding: 3px 2px;
    border-radius: 14px;
    font-size: 13px;
    position: absolute;
    right: -300px;
    top: 6px;
    line-height: 16px;
    z-index: 99;
      webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all .4s cubic-bezier(.37, .15, .32, .94);
    -moz-transition: all .4s cubic-bezier(.37, .15, .32, .94);
    -ms-transition: all .4s cubic-bezier(.37, .15, .32, .94);
    transition: all .4s cubic-bezier(.37, .15, .32, .94);
    z-index: 99;
}


.displaytooltip {
    
    right: 32px!important;
  
}


span#text_change {
    background: #FF4423;
    border: 1px solid #FF4423;
    border-radius: 15px;
}
#text_change a {
    color: #fff;
}
.comments-icon {
    display: inline-block;
    margin-left: 5px;
    margin-top: 5px;
    background: url(/images/comment-new.svg) no-repeat 0 0;
    width: 16px;
    height: 20px;
    vertical-align: middle;
    margin-right: 8px;
}
span#text_change {
    width: 240px;
    margin-bottom: 10px;
}
#cmscontent-article1 {
    min-width: 300px;

}
.viroolVideo {
    clear: both;
}
footer#footerMain {
    width:100%;
}


</style> <div class="oi-footer-bottom-ad-btns"> <a href="#vuukle-comments" class="oi-footer-comment-icon"></a> <span class="commentsToolTip">Click to comments</span> <a href="javascript:void(0);" class="oi-footer-top-icon"></a> <a href="javascript:void(0);" class="oi-footer-bottom-icon"></a> </div> <div id="widget_mykhel_auction_footer_block" data_lang="en"></div> <footer id="footerMain"> <div class="np-footer-main"> <span class="oi-footer-close"></span> <div class="np-footer-content np-max-width"> <div class="np-footer-links" itemscope itemtype="https://www.schema.org/SiteNavigationElement"> <a href="/" itemprop="url"><span itemprop="name">Home</span></a> | <a href="/rss/" itemprop="url"><span itemprop="name">RSS Feeds</span></a> | <a href="https://coupons.oneindia.com/">Coupons</a> | <a href="https://www.facebook.com/mykhelcom/" rel="nofollow" itemprop="url"><span itemprop="name">Facebook | </span></a><a href="https://twitter.com/mykhelcom" rel="nofollow" itemprop="url"><span itemprop="name">Twitter</span></a> | <a href="/sitemap/" itemprop="url"><span itemprop="name">Sitemap</span></a> | <a href="https://www.greynium.com/feedback.html" rel="nofollow" itemprop="url"><span itemprop="name">Feedback</span></a> | <a href="https://www.oneindia.com/advertise/" rel="nofollow" itemprop="url"><span itemprop="name">Advertise with us </span></a> | <a href="https://www.greynium.com/about.html" itemprop="url"><span itemprop="name">About Us</span></a> | <a href="https://www.greynium.com/contact-us.html" itemprop="url"><span itemprop="name">Contact Us</span></a> | <a href="/common/cookies/change-cookie-settings.html" target="_blank" rel="nofollow">Cookie Policy</a> | <a href="https://www.greynium.com/code-of-business-conduct.html" target="_blank" rel="nofollow">Code of Business Conduct</a> | <a href="https://www.oneindia.com/grievance.html">Grievance</a> </div> <div class="np-copyright">
&copy; 2023 myKhel. All rights reserved. | <a href="https://www.greynium.com/terms-of-service.html" rel="nofollow" target="_blank">Terms of Service</a> and <a href="https://www.greynium.com/privacy-policy.html" rel="nofollow" target="_blank">Privacy Policy</a> </div> </div> </div> </footer>  <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"852683415ec0215c","b":1,"version":"2024.2.0","token":"d04751479ab44d5f8896619bf6c30f74"}' crossorigin="anonymous"></script>
</body> </html>