var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:
$jscomp.getGlobal=$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=
$jscomp.polyfill("Array.prototype.find","es6","es3");$("#chooseLeague li").on("click",function(){$("#fxlist ul").css("display","none");$("#currentLeague").html($("#cur"+this.id).html());$("#ul"+this.id).show()});$("#chooseLeagueResult li").on("click",function(){$("#rslist ul").css("display","none");$("#currentResult").html($("#res"+this.id).html());$("#ulr"+this.id).show()});
document.getElementById("db-football-faq")&&$(".football23-faq-ques").click(function(a){$(this).parent().toggleClass("show")});
document.getElementById("db_js_fifa_fixtureresults")&&(requirejs(["idtabs"],function(){$(".format-class").click(function(){$(".filter-rows").show()});$("#os-23-ranking-tabs").idTabs();$("#os-5-ranking-tabs").idTabs();$("#os-22-ranking-tabs").idTabs();$("#os-21-ranking-tabs").idTabs();$("#os-750-ranking-tabs").idTabs();$("#os-8-ranking-tabs").idTabs();$("#os-ranking-tabs").idTabs();$("#os-team-tabs").idTabs()}),$("#os-team-tabs ul li a").click(function(a){0<window.location.href.indexOf("?")&&(comp_string_array=
$(this).attr("href").split("-"),comp_id=comp_string_array[0].replace("#",""),history.pushState("","","?"+comp_id))}));document.getElementById("db-ipl-faq")&&$(".ipl23-faq-ques").click(;
document.getElementById("db_js_team_squad")&&(requirejs(["idtabs"],function(){$("#os-ranking-tabs").idTabs()}),$("#os-ranking-tabs ul li a").click(function(a){0<window.location.href.indexOf("?")&&(comp_string_array=$(this).attr("href").split("-"),comp_id=comp_string_array[0].replace("#",""),history.pushState("","","?"+comp_id))}));
document.getElementById("db_js_player_profile")&&requirejs(["jquery","jqueryUI","idtabs"],function(){$("#tabs").idTabs();var a=$("#player_id").val(),b=$("#competition_id").val(),c=$("#season_id").val(),d=$("#team_id").val();loadProfileWidget(a,b,c,d);$("#tabs ul li a").on("click",function(){var a=$(this).attr("data-cmp-id").split("-"),b=$("#"+a[0]+"-player-widget-"+a[1]).attr("data-player-id"),c=a[0],d=a[1],h=$("#"+a+"-player-widget-"+a[1]).attr("data-team-id");""==$.trim($("#"+a[0]+"-player-widget-"+
d).html())?loadProfileWidget(b,c,d,h):($("."+c+"-os-ranking-tabs li a").removeClass("selected"),$("."+c+"-os-ranking-tabs li:first a").addClass("selected"))})});
function loadProfileWidget(a,b,c,d){$.ajax({url:"/src/football/ajax_common_controller.php?action=player_season_stat_widget&comp_id="+b+"&season_id="+c+"&player_id="+a,beforeSend:function(){$("#loading").addClass("show");$("#loading").removeClass("hide")},error:function(a){alert("Error occured.please try again");$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:function(){$("#loading").removeClass("show");$("#loading").addClass("hide")},success:function(a){$("#"+
b+"-player-widget-"+c).html(a);$("."+b+"-os-ranking-tabs-"+c).idTabs()}})}if(document.getElementById("db_js_transfer"))$("#club-select").on("change",function(){$(".inner-table").hide();var a=$(this).val();0==a?$(".inner-table").show():$("#club-"+a).show()});
document.getElementById("db_js_team_stats")&&(requirejs(["idtabs"],function(){$(".os-ranking-tabs").idTabs();$("#os-team-tabs").idTabs();$("#os-23-ranking-tabs").idTabs();$("#os-8-ranking-tabs").idTabs();$("#os-5-ranking-tabs").idTabs();$("#os-22-ranking-tabs").idTabs();$("#os-21-ranking-tabs").idTabs();$("#os-750-ranking-tabs").idTabs();$("#os-23-team-stats-tabs").idTabs();$("#os-5-team-stats-tabs").idTabs();$("#os-22-team-stats-tabs").idTabs();$("#os-21-team-stats-tabs").idTabs();$("#os-750-team-stats-tabs").idTabs();
$("#os-8-team-stats-tabs").idTabs()}),$("#os-team-tabs ul li a").click(function(a){0<window.location.href.indexOf("?")&&(comp_string_array=$(this).attr("href").split("-"),comp_id=comp_string_array[0].replace("#",""),history.pushState("","","?"+comp_id))}));
document.getElementById("db_js_football_head_to_head")&&($(".click").click(,$(".top-sel").on("click",function(a){$(this).hasClass("active")?$(this).removeClass("active").siblings(".selteam").slideUp("fast"):(a.preventDefault(),$(".selteam").hide(),$(this).toggleClass("active").siblings(".selteam").slideToggle("fast"),$(this).parent().siblings().find(".top-sel").removeClass("active").siblings(".selteam").slideUp())}));
if(document.getElementById("db_js_football_head_to_head_team")){var selhide=function(a){"top-sel"!=a&&$(".top-sel").removeClass("active").siblings(".football-selteam").slideUp("fast");"top-sel1"!=a&&$(".top-sel1").removeClass("active").siblings(".football-selteam").slideUp("fast");$("."+a).toggleClass("active").siblings(".football-selteam").slideToggle("fast");$("."+a).find(".arrow").toggleClass("rotate");$("."+a).find(".arrow").toggleClass("rotate-reset")},myFunction$0=function(a,b){var c;a=document.getElementById(a);
a=a.value.toUpperCase();b=document.getElementById(b).getElementsByTagName("li");for(c=0;c<b.length;c++){var d=b[c].getElementsByTagName("a")[0];d=d.attributes["data-id"];d=d.textContent||d.innerText;-1<d.toUpperCase().indexOf(a)?b[c].style.display="":b[c].style.display="none"}},highest=0;$(".seasion-box").each(;$(".seasion-box").css({height:highest})}
function myFunction(a,b){var c;a=document.getElementById(a);a=a.value.toUpperCase();b=document.getElementById(b).getElementsByTagName("li");for(c=0;c<b.length;c++){var d=b[c].getElementsByTagName("a")[0];d=d.attributes["data-id"];d=d.textContent||d.innerText;-1<d.toUpperCase().indexOf(a)?b[c].style.display="":b[c].style.display="none"}}
document.getElementById("db_js_football_match_home")&&($("#match_tab,#preview_tab").hide(),$("#match_link").on("click",function(){$("#match_tab,#preview_tab").hide();$("#match_link,#preview_link").removeClass("active");$("#match_link").addClass("active");$("#match_tab").show()}),$("#preview_link").on("click",function(){$("#match_tab,#preview_tab").hide();$("#match_link,#preview_link").removeClass("active");$("#preview_link").addClass("active");$("#preview_tab").show()}),document.getElementById("db_js_prematch")&&
preMatch(),document.getElementById("db_js_prematch_else")&&preMatchElse());function preMatch(){$("#match_tab").hide();$("#preview_tab").show();$("#match_link,#preview_link").removeClass("active");$("#preview_link").addClass("active")}function preMatchElse(){$("#match_tab").show();$("#preview_tab").hide();$("#match_link,#preview_link").removeClass("active");$("#match_link").addClass("active")}
document.getElementById("db_js_social_feed")&&requirejs(["lazy_load_js"],function(){$(".lazy").lazy();var a=$("#team1_id").val(),b=$("#team2_id").val(),c=parseInt($("#offset").val()),d=parseInt($("#limit").val()),e=$("#date_start_date").val(),f=$("#date_end_date").val(),g=!1,k=!0;$("#loading").removeClass("show");$("#loading").addClass("hide");$(window).scroll(function(){var h=$("#social_feed li").last().position().top;$(window).scrollTop()>=h&&!g&&k&&(g=!0,c+=d,$.ajax({url:"/src/football/ajax_common_controller.php?action=social_feed&team1_id="+
a+"&team2_id="+b+"&limit="+d+"&offset="+c+"&since="+e+"&until="+f,beforeSend:function(){$("#loading").addClass("show");$("#loading").removeClass("hide")},error:function(a){alert("Error occured.please try again");$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:success:function(a){$("#social_feed").append(a);$("#social_feed li").slice(parseInt($("#total").val())+10).hide();
g=!1;""===a&&(k=!1,$("#total").val($("ul#social_feed li").length))}}))});$(".social-buttons a").click(function(){window.open($(this).attr("href"),"title","width=800, height=400");return!1});$("#social_tab,#preview_tab").hide();$("#social_link").on("click",function(){$("#social_tab,#preview_tab").hide();$("#social_link,#preview_link").removeClass("active");$("#social_link").addClass("active");$("#social_tab").show()});$("#preview_link").on("click",function(){$("#social_tab,#preview_tab").hide();$("#social_link,#preview_link").removeClass("active");
$("#preview_link").addClass("active");$("#preview_tab").show()});document.getElementById("db_js_preMatch")&&dbPreMatch();document.getElementById("db_js_preMatch_else")&&dbPreMatchElse()});function dbPreMatch(){$("#preview_tab").hide();$("#social_tab").show();$("#social_link,#preview_link").removeClass("active");$("#social_link").addClass("active")}
function dbPreMatchElse(){$("#social_tab").show();$("#preview_tab").hide();$("#social_link,#preview_link").removeClass("active");$("#social_link").addClass("active")}
document.getElementById("db_js_match_line_up")&&($("#preview_tab").hide(),$("#lineup_link").on("click",function(){$("#lineup_tab,#preview_tab").hide();$("#lineup_link,#preview_link").removeClass("active");$("#lineup_link").addClass("active");$("#lineup_tab").show()}),$("#preview_link").on("click",function(){$("#lineup_tab,#preview_tab").hide();$("#lineup_link,#preview_link").removeClass("active");$("#preview_link").addClass("active");$("#preview_tab").show()}));
document.getElementById("db_js_league_points_table")&&($("#preview_tab").hide(),$("#lineup_link").on("click",function(){$("#lineup_tab,#preview_tab").hide();$("#lineup_link,#preview_link").removeClass("active");$("#lineup_link").addClass("active");$("#lineup_tab").show()}),$("#preview_link").on("click",function(){$("#lineup_tab,#preview_tab").hide();$("#lineup_link,#preview_link").removeClass("active");$("#preview_link").addClass("active");$("#preview_tab").show()}));
document.getElementById("db_js_fixture")&&require(["jqueryUI"],function(){$("#load-more-fixture").on("click",function(){$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-fixture",date:$("#loadmore_date").val(),comp_id:$("#comp_id").val(),team_id:$("#team_id").val(),venue_id:$("#venue_id").val(),page:$("#page").val(),fdate:$("#date").val()},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];var c=b[1];b=b[2];$("#loadmore_date").val("");
$("#fixture-listing").append(a);$("#loadmore_date").val(c);0==b?$("#load-more-fixture").hide():$("#load-more-fixture").show()}})});$("#competition").on("change",function(){$("#comp_id").val(this.value);$("#select_comp").html($("#competition option:selected").text());$("#team_id,#venue_id,#date").val(0);$("#datepicker1").val("");$("#datepicker1").val($("#label_date").val());$("#select_venue,#select_team").html("");$("#select_venue").html($("#label_venue").val());$("#select_team").html($("#label_team").val());
$("#no-result").hide();$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-fixture-filter",comp_id:this.value,team_id:$("#team_id").val(),venue_id:$("#venue_id").val(),page:$("#page").val(),fdate:$("#date").val()},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];var c=b[1];b=b[2];$("#fixture-listing").html("");$("#fixture-listing").html(a);$("#loadmore_date").val(c);0==b?$("#load-more-fixture").hide():$("#load-more-fixture").show()}});
$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-select-box",comp_id:this.value,team_id:$("#team_id").val(),venue_id:$("#venue_id").val(),page:$("#page").val()},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];b=b[1];$("#team").html("");$("#team").html(b);$("#venue").html("");$("#venue").html(a)}})});$("#group").on("change",function(){$("#group_id").val(this.value);$("#select_group").html($("#group option:selected").text());$("#no-result").hide();
$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-fixture-filter",date:$("#loadmore_date").val(),comp_id:$("#comp_id").val(),group_id:this.value,team_id:$("#team_id").val(),page:$("#page").val(),venue_id:$("#venue_id").val(),fdate:$("#date").val()},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];var c=b[1];b=b[2];$("#fixture-listing").html("");$("#fixture-listing").html(a);$("#loadmore_date").val(c);0==b?$("#load-more-fixture").hide():
$("#load-more-fixture").show()}});$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-select-box",comp_id:$("#comp_id").val(),group_id:this.value,team_id:$("#team_id").val(),venue_id:$("#venue_id").val(),page:$("#page").val()},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];b=b[1];$("#team").html("");$("#team").html(b);$("#venue").html("");$("#venue").html(a)}})});$("#team").on("change",function(){$("#team_id").val(this.value);
$("#select_team").html($("#team option:selected").text());$("#no-result").hide();$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-fixture-filter",date:$("#loadmore_date").val(),comp_id:$("#comp_id").val(),team_id:this.value,group_id:$("#group_id").val(),page:$("#page").val(),venue_id:$("#venue_id").val(),fdate:$("#date").val()},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];var c=b[1];b=b[2];$("#fixture-listing").html("");$("#fixture-listing").html(a);
$("#loadmore_date").val(c);0==b?$("#load-more-fixture").hide():$("#load-more-fixture").show()}})});$("#venue").on("change",function(){$("#venue_id").val(this.value);$("#select_venue").html($("#venue option:selected").text());$("#no-result").hide();$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-fixture-filter",date:$("#loadmore_date").val(),comp_id:$("#comp_id").val(),team_id:$("#team_id").val(),group_id:$("#group_id").val(),venue_id:this.value,page:$("#page").val(),
fdate:$("#date").val()},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];var c=b[1];b=b[2];$("#fixture-listing").html("");$("#fixture-listing").html(a);$("#loadmore_date").val(c);0==b?$("#load-more-fixture").hide():$("#load-more-fixture").show()}})});$(".clear-date").on("click",function(){$("#datepicker1").datepicker("setDate",null);$("#date").val(this.value);$("#no-result").hide();$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-fixture-filter",
date:$("#loadmore_date").val(),comp_id:$("#comp_id").val(),team_id:$("#team_id").val(),group_id:$("#group_id").val(),venue_id:$("#venue_id").val(),page:$("#page").val(),fdate:this.value},dataType:"html",error:function(){},success:function(a){var b=a.split(" @@@ ");a=b[0];var c=b[1];b=b[2];$("#fixture-listing").html("");$("#fixture-listing").html(a);$("#loadmore_date").val(c);0==b?$("#load-more-fixture").hide():$("#load-more-fixture").show()}})});$("#datepicker1").datepicker({dateFormat:"yy-mm-dd"});
$("#datepicker1").datepicker().on("change",function(a){$("#date").val(this.value);$("#no-result").hide();$.ajax({type:"GET",url:"/src/football/ajax_common_controller.php",data:{action:"ajax-fixture-filter",date:$("#loadmore_date").val(),comp_id:$("#comp_id").val(),group_id:$("#group_id").val(),team_id:$("#team_id").val(),venue_id:$("#venue_id").val(),page:$("#page").val(),fdate:this.value},dataType:"html",error:success:function(a){var b=a.split(" @@@ ");a=b[0];var d=b[1];b=b[2];$("#fixture-listing").html("");
$("#fixture-listing").html(a);$("#loadmore_date").val(d);0==b?$("#load-more-fixture").hide():$("#load-more-fixture").show()}})})});
document.getElementById("db_js_prediction")&&requirejs(["jquery"],function(){$(".fifa-voting").click(function(){var a={match_id:$(this).attr("data-match-id"),competition_id:$(this).attr("data-series-id"),team_id:$(this).attr("data-team-id"),param1:$(this).attr("data-param1"),param2:$(this).attr("data-param2")};$.ajax({url:"/src/index.php?section=football&part=prediction&action=league_voting",dataType:"json",type:"post",data:a,beforeSend:function(){$("#fifa_prediction_"+a.match_id+" .fifa-prediction-loading").show()},
error:function(a){alert(a.statusText+a.responseText);$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:function(){$("#fifa_prediction_"+a.match_id+" .fifa-prediction-loading").hide()},success:function(a){console.log(a);$("#fifa_prediction_"+a.match_id).html(a.template)}})})});
document.getElementById("db_js_fifa_prediction")&&requirejs(["jquery"],function(){$(document).on("click",".fifa-voting",function(){var a={match_id:$(this).attr("data-match-id"),competition_id:$(this).attr("data-series-id"),team_id:$(this).attr("data-team-id"),param1:$(this).attr("data-param1"),param2:$(this).attr("data-param2")};$.ajax({url:"/src/index.php?section=football&part=prediction&action=voting",dataType:"json",type:"post",data:a,beforeSend:function(){$("#fifa_prediction_"+a.match_id+" .fifa-prediction-loading").show()},
error:function(a){alert(a.statusText+a.responseText);$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:success:function(a){console.log(a);$("#fifa_prediction_"+a.match_id).html(a.template)}})});$(document).ready(function(){$('meta[name="twitter:domain"]').attr("content").replace(".mykhel",".mykhel");$.ajax({url:"/src/index.php?section=football&part=prediction&action=load-fifa-prediction",
success:function(a){$("#fifa_prediction-load").html(a)}})})});document.getElementById("db_js_leauge_stats")&&requirejs(["idtabs"],;
document.getElementById("db_js_team_ranking")&&(console.log("Team Ranking Page"),requirejs(["idtabs"],function(){if(""!==window.location.hash.substr(1)){var a=window.location.hash.substr(1)+"-block";$(".os-ranking-tabs").idTabs(a)}else $(".os-ranking-tabs").idTabs();$(".os-ranking-tabs").idTabs()}),$(".os-more-feed").click(function(){var a=$(this).attr("id"),b=$("#league_id").val(),c=$("#season_id").val(),d=parseInt($("#"+a+"_limit").val()),e=parseInt($("#"+a+"_offset").val());$("#loading").removeClass("show");
$("#loading").addClass("hide");e+=d;$.ajax({url:"/src/index.php?section=football&part=leagues&action=stats&stats_type=player&season_id="+c+"&league_id="+b+"&limit="+d+"&offset="+e+"&tab="+a,beforeSend:function(){$("#"+a+"loading").addClass("show");$("#"+a+"loading").removeClass("hide")},error:function(a){alert("Error occured.please try again");$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:function(){$("#"+a+"loading").removeClass("show");$("#"+
a+"loading").addClass("hide")},success:function(b){$("#"+a+"_loading_body").append(b);$("#"+a+"_offset").val(e);""===$.trim(b)&&$("#"+a).hide()}})}));document.getElementById("db_js_fifa_ranking")&&$("#fifa-rank-more").click(function(){var a=parseInt($("#ranking_count").val()),b=parseInt($("#offset").val()),c=parseInt($("#limit").val());b+=1;$("#offset").val(b);a/c<=b+1&&$("#fifa-rank-more").hide();$.ajax({url:"/src/index.php?section=football&part=load-ranking&limit="+c+"&offset="+b,success:)});
document.getElementById("db_js_nonopta_fixture")&&($("#team_filter").change(function(){filter_team($(this))}),$("#venue_filter").change(function(){filter_venue($(this))}),$("#group_filter").change(,$(".os-football-fixtures-c ul li.os-football-show-details").click(function(){var a=$(this).attr("id"),b=a.split("data-")[1].split("-"),c=b[0];b=b[1];var d=a.replace("data","content"),e=a.replace("data","loader");0==$(this).attr("is_data")&&$.ajax({url:"/src/index.php?section=football&part=leagues&action=nonopta-result-summary&league_id="+
c+"&match_id="+b,beforeSend:function(){$("#"+e).show()},error:function(a){alert("Error occured.please try again");$(placeholder).append(a.statusText+a.responseText);$(placeholder).removeClass("loading")},complete:success:function(b){$("#"+d).append(b);$("#"+a).attr("is_data","1");status=!0;""==b&&(ajax_status=!1)}});c=$(this).next("li");$(".os-football-fixtures-c ul li.os-football-show-details").removeClass("active");c.hasClass("show")?(c.removeClass("show"),c.find("div").slideUp(500)):
($(this).addClass("active"),$(".os-football-hide-details").removeClass("show"),$(".os-football-hide-details div").slideUp(500),c.addClass("show"),c.find("div").slideDown(500))}));function filter_team(a){a=a.val();"0"==a?$(".filter-rows").show():($(".filter-rows").hide(),$(".team1-"+a).show(),$(".team2-"+a).show());$("#select_team").html($("#team_filter option:selected").text())}
function filter_venue(a){a=a.val();"0"==a?$(".filter-rows").show():($(".filter-rows").hide(),$(".venue-"+a).show());$("#select_venue").html($("#venue_filter option:selected").text())}function filter_group(a){a=a.val();"0"==a?$(".filter-rows").show():($(".filter-rows").hide(),$(".group-"+a).show());$("#select_group").html($("#group_filter option:selected").text())};
