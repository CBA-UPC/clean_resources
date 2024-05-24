function titleex_run_experiment(){try{var fetch={};var find=0;if("titlexproShouldRunExp"in window){if(!window.titlexproShouldRunExp()){jQuery("img.wpexpro-image").removeClass("wpexpro-image");wpex_show_body();var matches=jQuery("body").attr("class").match(/\bpostid-(\d+)\b/);if(matches){var id=matches[1];var $spans=jQuery("[data-wpex-title-id='"+id+"']");if($spans.length){titleex_update_title(Base64.decode($spans.data("original")));}}
return;}}
var $titles=jQuery("[data-wpex-title-id]:not([data-wpex-done])");for(var i=$titles.length-1;i>=0;i--){var $title=jQuery($titles[i]);var id=$title.data("wpex-title-id");$title.attr("data-wpex-done",1);fetch[id]=1;find=1;}
if(find){var id_class=document.body.className.match(/\bpostid-(\d+)\b/);if(id_class){cur_id=id_class[1];}else{cur_id=-1;}
jQuery.post(wpex.ajaxurl,{action:'wpex_titles',id:Object.keys(fetch),cur_id:cur_id},function(res){for(var id in res.titles){var $elm=jQuery("[data-wpex-title-id="+id+"]");var new_title='';if(!res.titles[id]&&$elm.data("original")){new_title=Base64.decode($elm.data("original"));}else{new_title=res.titles[id];}
$elm.html(new_title);if(jQuery("body.postid-"+id).length>0){titleex_update_title(new_title);}}
for(var id in res.images){if(res.images[id].old&&res.images[id].new){var $img=jQuery("img[data-wpex-post-id='"+res.images[id].old+"']");$img.removeAttr("srcset");$img.attr("src",res.images[id].new);$img.removeClass("wpexpro-image");}}
jQuery("img.wpexpro-image").removeClass("wpexpro-image");wpex_show_body();},'json');}else{jQuery("img.wpexpro-image").removeClass("wpexpro-image");wpex_show_body();}}catch(err){wpex_show_body();}}
function titleex_update_title(new_title){var $title=jQuery("title");var title=$title.text();title=title.replace(String.fromCharCode(27)+String.fromCharCode(28)+String.fromCharCode(29),new_title);jQuery("title").text(title);}
var $wpex_body=jQuery("html,body");function wpex_hide_body(){$wpex_body.css('visibility','hidden');}
if(wpex.hide_body){wpex_hide_body();}
jQuery(document).ready(titleex_run_experiment);var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:decode:_utf8_encode:_utf8_decode: