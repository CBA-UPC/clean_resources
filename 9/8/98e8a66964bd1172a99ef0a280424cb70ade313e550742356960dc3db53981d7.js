/*! lozad.js - v1.9.0 - 2019-02-09
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2019 Apoorv Saxena; Licensed MIT */
!this,;
/*! lozad.js - v1.9.0 - 2019-02-09*/

//------ Searc
$('.control').click(function () {
   // var base_url = 'http://localhost/khabarnew/branches/dev/public/';
    var section = 'latest';
    var section1 = 'trending';
    $.ajax({ url: base_url + 'news/menus/section/' + section, cache: true, dataType: 'json', beforeSend: function () { $('#search_latest').html('<div style="width:100px;margin:0 auto;"><img src="' + base_url + 'static/images/loading.gif"></div>'); }, success: function (data) { var innerhtml = '<div class="s-tx"><h2 class="s-ttl">Latest News</h2></div><ul class="list">'; items_array = data; if (items_array) { $.each(items_array, function (key, item) { innerhtml += '<li class="lsm-li">'; innerhtml += '<a class="lsm-img" href="' + item['link'] + '">'; innerhtml += '<span class="img-gr"><picture><source srcset="' + item['story_image'] + '?" type="image/webp"><img alt="' + item['clean_title'] + '" src="' + item['story_image'] + '" border="0" data-tb-shadow-region-image="0"></picture></span></a><h2 class="lsm-txt"><a class="lsm-txt__con" href="' + item['link'] + '">' + item['clean_title'] + '</a></h2><div class="clear-fix"></div></li>'; }); } $('#search_latest').html(innerhtml); } });
    $.ajax({ url: base_url + 'news/menus/section/' + section1, cache: true, dataType: 'json', beforeSend:  success: function (data) { var innerhtml = '<div class="s-tx"><h2 class="s-ttl">Trending Tags</h2></div><div class="tg_wrp">'; items_array = data; if (items_array) { $.each(items_array, function (key, item) { innerhtml += '<a class="tg_lk" href="' + item['link'] + '">'; innerhtml += item['clean_title'] + '</a>'; }); } innerhtml += '</div>'; $('#trending').html(innerhtml); } });
    $('body').addClass('search-active');
    $('.input-search').focus();
    $(".ovl").fadeIn(0).addClass("js-ovl");
});

$('.icon-close').click(function () {
    $('body').removeClass("search-active");

});
$('.ovl').click(;



$(window).scroll(;


//-- Story tittle Sticky
var stk = {};
function StartHeader() {
    stk.baseContainer = $(".sp-hd");
    stk.contPanle = $(".sp-cn");
    stk.toolTip = $(".stk-t");
    stk.playerTop = -1;
    window.addEventListener("scroll", windowScroll, false);
    //updateLog("top:  " + stk.baseContainer.position().top)
}
StartHeader();

function windowScroll(e) {
    e.preventDefault();
    updateDivSticky($(".sp-cn"), "j-stk-dn");
    //updateDivSticky($(".trc_related_container"), "j-nxt-prv");
    return false;
}

function updateDivSticky(base, addRemClass) {
    var contPanel = base;// ;
    if (1 || typeof contPanel.offset() !== 'undefined') {
    var totalTop = (contPanel.offset().top - pageYOffset);
    //updateLog("=====top pos: " + " ;  totalTop: " + totalTop + " ;  height:  " + contPanel.height());
    if ((totalTop) < 0) {
        var maxReach = Math.abs(totalTop);
        //updateLog("maxReach:  " + maxReach)
        if (maxReach >= contPanel.height()) {
            $("body").removeClass(addRemClass)
        } else {
            $("body").addClass(addRemClass)
        }
    } else {
        $("body").removeClass(addRemClass);
    }
	}
    return false;
}




//------ footer sticky Scroll ------//
//$(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//
//    if (scroll >= 300) {
//        $(".foot-sticky.sstop").addClass("showon");   
//    } 
//    else if(scroll >= 0){
//        $(".foot-sticky").removeClass("showon");
//    }
//    else {
//        $(".foot-sticky.sstop").removeClass("showon");
//    }
//});
var executed = false;
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 1500) {
        if (!executed){ executed = true;
            $(".foot-sticky").removeClass("hideon");
         }
         } else {
			 executed = false;
			 $(".foot-sticky").addClass("hideon");
		}	 
 })

$(".dirt-arrow").click(function(){  
   $(".foot-sticky").toggleClass("hideon");  
});


//------ Image Load after few second
setTimeout(function (init) {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
    window.onload = init;

}, 6000);


//------ Comments Slidein
$(".cmt-ac").click(function () {
    $("body").addClass("js-op-cmt");
    setTimeout( 3000);
    //--- drop animation
    var pos = $(this).offset();
    $(".drp-wrp").css({ top: pos.top + "px", right: 0 + "px" });
    $(".cmt-cnt").fadeIn(0);
    $(".ovl").fadeIn(0).addClass("js-ovl");
});

$(".ovl, .cls-btn").click(function () {
    $("body").removeClass("js-op-cmt");
    $(".cmt-cnt").fadeIn(0).delay(1000).fadeOut(0);
    $(".ovl").fadeIn(0).removeClass("js-ovl").delay(100).fadeOut(0);
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.cmt-ac').fadeIn().addClass("cmt-dn");
    } else {
        $('.cmt-ac').removeClass("cmt-dn");
    }
});


//------====== 6. Trigger ======------//
$('.trigger').on('click', function () {

    var target = $(this).data('trigger');
    var toggleClass = $(this).data('class');

    $(target).toggleClass(toggleClass);
});




//------====== 7. Back to top ======------//

// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 60,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 400,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 600,
    //grab the "back to top" link
    $back_to_top = $('.back-to-top');

//hide or show the "back to top" link
$(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('js-back-to-top') : $back_to_top.removeClass('js-bkt-visible js-bkt-out');
    if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('js-bkt-out');
    }
});

//------ Back to top Button
$(".back-to-top").click(;

$('.nav_icn').click(function (event) {
    event.preventDefault();
    $(this).toggleClass('crsBt');
    $('nav.m-nv').toggleClass('navActv');
    return false;
});




$(window).bind('load', function() {
setInterval(function() {
var adwid = $('.add-rhs iframe').width();
if (adwid == 1260) {
 //$('.add-rhs iframe').css({ "margin-right": "-75px"});
}
else{
    $('.add-rhs iframe').css({ "margin-right": "0"});
}
}, 100); 
});
    $.fn.fontResize = function (options) {
        var settings = {
          normalBtn: $('#nrmlFntsz'),
          increaseBtn: $('#incfont'),
          decreaseBtn: $('#decfont')
        };
        options = $.extend(settings, options);
        return this.each(function () {
          var element = $(this);
          var incr = 0;
          var decr = 0;
          options.increaseBtn.on('click', function (e) {
            e.preventDefault();
            var baseFontSize = parseInt(element.css('font-size'));
            var baseLineHeight = parseInt(element.css('line-height'));
            if (incr < 3) {
              element.css('font-size', (baseFontSize + 2) + 'px');
              element.css('line-height', (baseLineHeight + 2) + 'px');
              incr++;
              if (decr > -3) { decr--; }
            }
          });
          options.decreaseBtn.on('click', function (e) {
            e.preventDefault();
            var baseFontSize = parseInt(element.css('font-size'));
            var baseLineHeight = parseInt(element.css('line-height'));
            if (decr < 3) {
              element.css('font-size', (baseFontSize - 2) + 'px');
              element.css('line-height', (baseLineHeight - 2) + 'px');
              decr++;
              if (incr > -3) { incr--; }
            }
          });
          options.normalBtn.on('click', function (e) {
            e.preventDefault();
            element.css('font-size', '');
            element.css('line-height', '');
            incr = 0;
            decr = 0;
          });
        });
      };
      $('.sp-ttl-wrp *, .trndngWdgt *, .sp-descp, .pst-by').fontResize();
$('.crclBtn').click(;

$(".st-social").detach().prependTo(".social_link");
$(".reltd").detach().prependTo(".reltd-main"); 

$(".lft-highlghts").detach().prependTo(".st-highlihts"); 

function coinswitchLogotracking(event,category,type,label){
   dataLayer.push({
            'event': event,
            'eventCategory': category,
            'eventAction': type,
            'eventLabel': label,
        });
    
}
function categoryRedirection(base_url, categ, subcateg){ var newloc= base_url + categ;if(subcateg!=='')newloc =base_url + subcateg;window.location = newloc;return;}
//function _rrCodeRun(arr) {
//    while (arr.length) {
//        var fnc = arr.splice(0, 1)[0];
//        fnc();
//    }
//}
//window._rrCodeSt = 0;
//window._rrCodeLoad = window._rrCodeLoad || [];
//window._rrCode = window._rrCode || [];
//_rrCodeRun(_rrCodeLoad);
//
//
//$(document).ready(function () {
//    $(window).scroll(function () {
//        if (!_rrCodeSt) {
//            _rrCodeSt = 1;
//            _rrCodeRun(_rrCode);
//        }
//    });    
//});
//
//function loadJSFile(filename) {
//    var jscodef = document.createElement('script');
//    jscodef.setAttribute("type", "text/javascript");
//    jscodef.setAttribute("src", filename);
//    document.body.appendChild(jscodef);
//}
//
//function loadCSSFile(filename) {
//    var csscodef = document.createElement('link');
//    csscodef.setAttribute("rel", "stylesheet");
//    csscodef.setAttribute("href", filename);
//    document.body.appendChild(csscodef);
//}
//

//function redir_to_election_state(base_url, categ, subcateg){var newloc= base_url + categ;if(subcateg!=='')newloc =base_url + categ + subcateg + '-previous-result-stats';window.location = newloc;return;}
///*not use in overall project : redir_to_election_constituencies*/
//function redir_to_election_constituencies(base_url, categ, subcateg){var newloc= base_url + categ;if(subcateg!=='')newloc =base_url + categ + subcateg ;window.location = newloc;return;}
//function redir_to_election_candidates(base_url, categ, subcateg){var newloc= base_url + categ ;if(subcateg!=='')newloc =base_url + categ + subcateg + '-candidates';window.location = newloc;return;}
//function onVideoEnd(blah){ var vid = window['__ids'].shift();var apikey = window['__apikey'];var player_version = window['__player_version'];var movie = 'https://www.ndtv.com/common/videos/flash/player/new-wrapper/NDTVVideoPlayerNew.swf?' + player_version;var title = '';var desc = '';var filename = '';var fullimage = '';var duration = '';var dateline = '';var foldername = '';var adformat = ''; var showcountry = '';$('#videoContainer').css('width', 'auto'); $.getJSON('/video/video-meta-data-for-special', { id:vid, sid:window['__sid'], page:window['__page']}, function(json) {title = json.title; desc = json.caption; filename = json.filename; fullimage = json.fullimage; duration = json.duration; dateline = json.dateline; foldername = json.foldername; showcountry = json.showcountry;  var adformat = window['__adformat']; if (adformat == undefined || adformat == '') { adformat = 'preroll|postroll|branded|overlay';} if (duration < 59) { adformat = 'postroll|branded|overlay'; } if (showcountry == 'showindiaonly' && cntry != 'IN') { jQuery('.player').html('<div style="float:left;padding-left:100px;padding-top:100px;font-weight:bold;">This video is only available in India.<br><br>If you are in India and have received this message, please click <a href="https://www.ndtv.com/convergence/ndtv/new/feedback.aspx">here</a></div>'); return; }  var player = '' + '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' + '<param name="allowScriptAccess" value="always" />'+ '<param name="allowFullScreen" value="true" />'+ '<param name="movie" value="'+movie+'" />'+ '<param name="quality" value="high" />'+ '<param name="bgcolor" value="#000000" />'+ '<param name="wmode" value="transparent">'+ '<param name="flashvars" value="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=415&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat+'&foldername='+foldername+'&rtmp=true&gTRVPlay=0">' + '<embed src="'+movie+'" width="100%" height="100%" flashvars="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=415&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat='+adformat+'&foldername='+foldername+'&rtmp=true&gTRVPlay=0" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' + '</object>'; if (vid * 1) { var _position = $('.player').css('position'); var _top = $('.player').css('top'); var _left = $('.player').css('left'); $('h2#title p').fadeOut('slow',function(){ $(this).html(title).fadeIn(); }); $('#videoplayer_big .date').fadeOut('slow',function(){ $(this).html(dateline).fadeIn(); }); $('#vid_cap_cont .vid_caption').fadeOut('slow',function(){ $(this).html(desc).fadeIn(); }); /*$('.player').hide().remove(); $('#playerPlaceholder').after(player);*/ 	    var video_supported = checkHTML5Video(filename);if(video_supported){NDTVPlayerInit(json, "html5Container", true);}else{$('.player').html(player);$('.player').css({position: _position,top: _top,left: _left});} }});}
//function showPhase(phaseid){$('.phase-tab').hide(); $('#phase_'+phaseid).show(); locate_tab('phase_'+phaseid);}
//function gup( name, href ) {name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]"); var regexS = "[\\?&]"+name+"=([^&#]*)"; var regex = new RegExp( regexS ); var results = (href == undefined)||(href == null)? regex.exec( window.location.href ): regex.exec(href); if( results == null )return ""; else return results[1];}
//function copypasteinit(){var copy_paste=new CopyPaste(); var share_url=document.location.href; share_url += (0 > share_url.indexOf('?') ? '?cp' : '&cp'); copy_paste.Init('<br><br>Read more at: <a href="'+share_url+'" target="_blank_">'+share_url+'</a>',60);}
//function play_video(id) {var data = document.getElementById('video_player_thumb_embed').value; document.getElementById(id).innerHTML = data; return false;}
//function show_comment(target_id, comment_form_id, comment_list_id) {var is_iframe_loaded = Number(document.getElementById('is_iframe_loaded').value); if (!is_iframe_loaded) {var form_data = document.getElementById(comment_form_id).value;form_data += '<div><table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td width="9"><img height="30" width="9" src="' + IMAGE_URL + 'comment_bar_l.gif"></td><td class="comment_bg"><table width="70%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td width="26"><img height="30" width="16" src="' + IMAGE_URL + 'comment_icon.gif"></td><td class="fbld fg fs12">Comments <a class="fs11 fbld fg fn fl" onclick="javascript:show_comment_form();" href="javascript:void(0);"></a></td></tr></tbody></table></td><td width="9"><img height="30" width="9" src="' + IMAGE_URL + 'comment_bar_r.gif"></td></tr></tbody></table></div>';form_data += document.getElementById(comment_list_id).value;document.getElementById(target_id).innerHTML = form_data;document.getElementById('is_iframe_loaded').value = 1;} return false;}
//function hide_show(hide_id, show_id) {document.getElementById(hide_id).style.display = 'none'; document.getElementById(show_id).style.display = 'block';}function story_pic_block_hide_show(hide_id, show_id) {$('.' + hide_id).css('display', 'none'); $('.' + show_id).css('display', 'block');}
//function change_element_class(source_id, target_class_name, target_id, source_class_name) {document.getElementById(source_id).setAttribute("class", target_class_name);document.getElementById(target_id).setAttribute("class", source_class_name);}
///*not use in overall project : newPopup*/
////function newPopup(url) {var centerWidth = (window.screen.width - 480) / 2; var centerHeight = (window.screen.height - 320) / 2; popupWindow = window.open(url,'popUpWindow','height=320,width=480,left='+centerWidth+',top='+centerHeight+',resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no')}
//function locate_tab(id) {/*location.hash = '#'+id;*/ $().scrollTo("#"+id, 1000);}var IMAGE_URL;function set_image_url(image_url) {IMAGE_URL = image_url;}
//function tw_click(args) {var longurl = (args['url'] == undefined) ? location.href : args['url']; var title = (args['title'] != undefined) ? args['title'] : ''; window.open('http://twitter.com/intent/tweet?text='+title+' '+longurl+' @ndtv','sharer','toolbar=0,status=0,width=756,height=436'); return false;}
//function JS_Mobile_Redirect() {user_mobile = (navigator.userAgent).toLowerCase(); var mobile_array=new Array('benq','bird','blackberry','bleu','dopod','fly','hp ipaq','hpipaq','htc','i-mate','lenovo-','lg-','lge-','mot-','moto', 'motorola','nec-','nokia','o2','opera mini','palm','panasonic','philips','samsung','sagem-','sch-','sec-','series60','sgh-','sharp','sony','sonyericsson','spice','spv-','symbian'); var op = ((mobile_article_page.indexOf('?') >= 0) ? '&' : '?'); for (i in mobile_array) {if (user_mobile.indexOf(mobile_array[i]) >= 0) { var device_param = (user_mobile.indexOf('iphone') >= 0 ? (op + 'device=' + mobile_array[i]) : ''); window.location=mobile_article_page + device_param; break;} }}
//function swap_tabs(active_tab) {var active_class = 'ins_tab_select';var deactive_class = 'ins_tab_unselect';var tabs = new Array('top_videos_tab', 'latest_tab', 'category_tab', 'channel_tab', 'shows_tab', 'special_tab', 'ndtv_classics_tab');var tabs_count = tabs.length;for(var i=0; i < tabs_count; i++) { if(tabs[i] == active_tab) { document.getElementById(active_tab).setAttribute("class", active_class); } else { document.getElementById(tabs[i]).setAttribute("class", deactive_class); }}}
//function hide_show_submenu(show_id) {var shows_array = new Array('category_video', 'channel_video', 'shows_video', 'live_video', 'ndtv_classics_video');for(var i=0; i < shows_array.length; i++) { if(show_id == shows_array[i]) { document.getElementById(show_id).style.display = 'block'; } else { document.getElementById(shows_array[i]).style.display = 'none'; }}}
//function vidshowhide_innerpagediv(b) {$('.divanchor').hide(); $('#'+b).show();}
///*not use in overall project : scroller*/
////function scroller(id) {$().scrollTo("#"+id, 1000);}
//function toggle_player(cntry){ var vid = window['__id'];var apikey = window['__apikey'];var switch_url = window['__switch_url'];var movie = window['__movie'];var skin = window['__skin'];var duration = window['__duration'];var player_type = window['__pl_type'];var remove_adformat = window['__adformat'];var adformat = '';var filename = window['__filename'];if (filename == undefined || filename == '') { filename = 'undefined' /*this will force the player to call api*/}var title = window['__title'];var desc = window['__desc'];var fullimage = window['__fullimage'];var player;var liveVideoName = '';if (duration != undefined) { if (duration > 59) { adformat = 'preroll|midroll|postroll|branded|overlay'; } else { adformat = 'postroll|branded|overlay'; }} else {adformat = 'preroll|midroll|branded|overlay';}if (remove_adformat == 'no_pre_roll') {adformat = 'postroll|branded|overlay';}if (vid == 'LIVE_BG24x7' || vid == 'LIVE_BGINDIA' || vid == 'LIVE_BGGT' || vid == 'LIVE_BGPROFIT' || vid == 'LIVE_BGHINDU'){adformat = 'preroll|midroll|overlay|branded';if (vid == 'LIVE_BG24x7') { liveVideoName = 'NDTV 24x7';}else if (vid == 'LIVE_BGINDIA'){ liveVideoName = 'NDTV India';}else if (vid == 'LIVE_BGGT'){ liveVideoName = 'NDTV Good Times';}else if (vid == 'LIVE_BGPROFIT'){ liveVideoName = 'NDTV Profit';}else if (vid == 'LIVE_BGHINDU'){ liveVideoName = 'NDTV Hindu';}}var param;if (vid == '194149') { adformat = '';}if (cntry.toLowerCase() != 'us') { if (player_type == 'vod') { param = ''; player = '' + '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' + '<param name="allowScriptAccess" value="always" />'+ '<param name="allowFullScreen" value="true" />'+ '<param name="movie" value="'+movie+'" />'+ '<param name="quality" value="high" />'+ '<param name="bgcolor" value="#000000" />'+ '<param name="wmode" value="transparent">'+ '<param name="flashvars" value="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=386&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat+'">' + '<embed src="'+movie+'" width="100%" height="100%" flashvars="videoid='+vid+'&channel=ndtv&pWidth=622&pHeight=386&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey='+apikey+'&title='+title+'&desc='+desc+'&filename='+filename+'&videoimage='+fullimage+'&lengthinsec='+duration+'&vdopiaAdFormat=' + adformat + '" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' + '</object>'; } else { if (__pl_type == 'old') { adformat = 'preroll|overlay'; param = '&countryCode='+cntry+'&switchurl='+switch_url+'&breakmsg='+liveVideoName+' is on an ad break right now.'; player = '' + '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="622" height="386" id="videoPlayer" align="middle">' + '<param name="allowScriptAccess" value="always" />'+ '<param name="allowFullScreen" value="true" />'+ '<param name="movie" value="'+movie+'" />'+ '<param name="quality" value="high" />'+ '<param name="bgcolor" value="#000000" />'+ '<param name="wmode" value="transparent">'+ '<param name="flashvars" value="videoid='+vid+'&skinpath='+skin+'&apikey='+apikey+'&autostart=1&adformats=' + adformat + '&videocategory=AU|TR|SC|SP|CR|MU|HC|PA|NE|BU|HE|SH|LF|PO|FI|EN&videoimage=&eapikey=be3e82ed32b1b1e70bdf125bb1f6f957&eplayerswfurl=https://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/player_vod_em.swf&eskinswfurl=https://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/skin_vod_em.swf'+param+'">' + '<embed src="'+movie+'" width="622" height="386" align="middle" quality="high" bgcolor="#000000" name="videoPlayer" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" flashvars="videoid='+vid+'&skinpath='+skin+'&apikey='+apikey+'&autostart=1&adformats=' + adformat + '&videocategory=AU|TR|SC|SP|CR|MU|HC|PA|NE|BU|HE|SH|LF|PO|FI|EN&videoimage=&eapikey=be3e82ed32b1b1e70bdf125bb1f6f957&eplayerswfurl=https://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/player_vod_em.swf&eskinswfurl=https://www.ndtv.com/common/videos/flash/player/ndtvapi/embed-418x385/skin_vod_em.swf'+param+'" />' + '</object>'; } else { adformat = 'preroll|midroll|overlay|branded'; param = '&countryCode='+cntry+'&switchurl='+switch_url+'&breakmsg='+liveVideoName+' is on an ad break right now.'; player = '' + '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle">' + '<param name="allowScriptAccess" value="always" />'+ '<param name="allowFullScreen" value="true" />'+ '<param name="movie" value="'+movie+'" />'+ '<param name="quality" value="high" />'+ '<param name="bgcolor" value="#000000" />'+ '<param name="wmode" value="transparent">'+ '<param name="flashvars" value="videoid='+vid+'&channel=ndtv&videoimage=&pWidth=622&pHeight=386&autostart=1&vdopiaApiKey='+apikey+'&vdopiaAdFormat=' + adformat + param+'">' + '<embed src="'+movie+'" flashvars="videoid='+vid+'&channel=ndtv&videoimage=&pWidth=622&pHeight=386&autostart=1&vdopiaApiKey='+apikey+'&vdopiaAdFormat=' + adformat + param + '" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/>' + '</object>'; }}}if(cntry.toLowerCase() == 'us'){$('.player.in').remove();$('.player.'+cntry.toLowerCase()).show();if ($('#videoPlayer').length > 0) { $('#videoPlayer').hide().remove();}} else {$('.player.us').remove();$('.player.in').after(player);$('.player.in').remove();}}
//function displayCompanionBanners(banners, tracking) {/*alert(banners+", "+tracking);*/tmDisplayBanner(banners, "videoAdMRec", 300, 250, null, tracking);}
//function writeIntoCompanionDiv(content, size) { document.getElementById("videoAdMRec").innerHTML = content; /* size not used for now*/}
//var featuredCurrentId = 1;
//function FeaturedNextPrev(selectedId, totalCnt, DivId, PagerId) {var j = featuredCurrentId;j = parseInt(selectedId); if (j > 0 && j < totalCnt + 1) {for (var i = 1; i <= totalCnt; i++) { if (document.getElementById(DivId + '-' + i)) { $('#' + DivId + '-' + i).hide(); /*document.getElementById(DivId + '-' + i).style.display = 'none';*/ document.getElementById(PagerId + '-' + i).className = 'deselect'; document.getElementById(DivId + '_thumb-' + i).className = 'deactive_p'; }}if (document.getElementById(DivId + '-' + selectedId)) { $('#' + DivId + '-' + selectedId).show('slow'); /*document.getElementById(DivId + '-' + selectedId).style.display = 'block';*/ document.getElementById(PagerId + '-' + selectedId).className = 'selectbullet'; document.getElementById(DivId + '_thumb-' + selectedId).className = 'select';}featuredCurrentId = j;}var nextDiv = parseInt(selectedId) + 1;clearTimeout(timeOut);timeOut = setTimeout("autoplay_ticker("+nextDiv+", "+totalCnt+", 'homepageFeaturedDiv', 'homepageFeaturedPager')", 3000);}var timeOut;
//function autoplay_ticker(currentDiv, totalcnt, divid, pagerid) {if (currentDiv > totalcnt) {currentDiv = 1;}FeaturedNextPrev(currentDiv, totalcnt, divid, pagerid);var nextDiv = currentDiv + 1;clearTimeout(timeOut);timeOut = setTimeout("autoplay_ticker("+nextDiv+", "+totalcnt+", 'homepageFeaturedDiv', 'homepageFeaturedPager')", 3000);}
//function getFlashVersion(){/* ie*/try { try { /* avoid fp6 minor version lookup issues see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/*/ var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6'); try {axo.AllowScriptAccess = 'always';} catch(e) {return '6,0,0';} } catch(e) {} return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1]; /* other browsers*/} catch(e) { try { if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){ return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]; } } catch(e) {}}return '0,0,0';}
//function hide_show_player_div(version) {if(version < 9){ var hideDiv = document.getElementById('videoContainer'); var displayDiv = document.getElementById('flashVersionUpdate'); hideDiv.style.display = 'none'; displayDiv.style.display = 'block';}else{ var hideDiv = document.getElementById('flashVersionUpdate'); var displayDiv = document.getElementById('videoContainer'); hideDiv.style.display = 'none'; displayDiv.style.display = 'block';}}
///*not use in overall project : getScrollY*/
////function getScrollY() {scrOfY = 0;if( typeof( window.pageYOffset ) == "number" ) { scrOfY = window.pageYOffset;} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) { scrOfY = document.body.scrollTop;} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) { scrOfY = document.documentElement.scrollTop;}return scrOfY;}
//function ios_device_detection() {var user_mobile=(navigator.userAgent).toLowerCase();var mobile_array=new Array('ipad', 'iphone');for (i in mobile_array){ if (user_mobile.indexOf(mobile_array[i]) >= 0){ return 1; }}return 0;}
//function ShowNavigationLevel2() {document.getElementById('topnavigation_level2').style.display="";document.getElementById('topnav_plusbut').style.display="none";document.getElementById('topnav_minusbut').style.display="";}
//function HideNavigationLevel2() {document.getElementById('topnavigation_level2').style.display="none";document.getElementById('topnav_plusbut').style.display="";document.getElementById('topnav_minusbut').style.display="none";}
//function trim(stringToTrim) {return stringToTrim.replace(/^\s+|\s+$/g,"");}
///*not use in overall project : ltrim & rtrim*/
////function ltrim(stringToTrim) {return stringToTrim.replace(/^\s+/,"");}
////function rtrim(stringToTrim) {return stringToTrim.replace(/\s+$/,"");}
//function textCounter(field_id, cntfield_id, maxlimit) {var field = document.getElementById(field_id);var cntfield = document.getElementById(cntfield_id);if (field.value.length > maxlimit) { field.value = field.value.substring(0, maxlimit);} else { cntfield.innerHTML = maxlimit - field.value.length;}return true;}
//function email_article_validation() {var toemail = document.getElementById('toemail');var fromname = document.getElementById('fromname');var textarea = document.getElementById('textarea');var captcha_field = document.getElementById('recaptcha_response_field');if (toemail.value.length == 0) { alert('Enter email of recipient'); toemail.focus(); return false;}if (!multiEmailValidation(toemail.value)) { toemail.focus(); return false;}if (!validateName(fromname.value)) { alert('Please enter alphabets only in name and it should not less than 3 and more than 30 chars'); fromname.focus(); return false;}if (textarea.value.length == 0) { alert('Enter a brief message'); textarea.focus(); return false;}if (captcha_field.value.length == 0) { alert('Please enter the captcha in captcha field'); captcha_field.focus(); return false;}return true;}
//function multiEmailValidation(email_field) {var email = email_field.split(',');for (var i = 0; i < email.length; i++) { if (trim(email[i]).length != 0 && !validateEmail(trim(email[i]))) { return false; }}return true;}
//function validateEmail(email) { var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;var address = trim(email);if(reg.test(address) == false) { alert('Invalid Email Address'); return false;}return true;}
//function validateName(strname) {var reg = /^[A-Za-z \u0900-\u097F]{3,30}$/; /*hindi code regular expression \u0900-\u097F*/var name = trim(strname);if (reg.test(name) == false) { return false;}return true;}
//function clean_search_text_box(elem_id) {if ($('#'+elem_id).val() == 'search') { $('#'+elem_id).val('');}}
//function highlightSearch(id, tagname, text, button) {try { var x = document.getElementById(id); var y = x.getElementsByTagName(tagname); var z = x.getElementsByTagName('span'); var searchVal = document.getElementById(text).value;if (searchVal.value == '') { button = 'clear'; }if (button == 'search') { for (i=0; i<y.length; i++) { y[i].style.display = "block";var patternMatch = new RegExp(searchVal, "i");if (!patternMatch.test(z[i].innerHTML)) { y[i].style.display = "none"; } } } else { for(i=0; i<y.length; i++) { y[i].style.display = "block"; } }}catch(err) { /*alert("NO SUCH "+id+" EXIT ");*/}}
//function submit_search_form(site) {if(site == 'news-bengali'){	var base_url = "https://www.ndtv.com/bengali/search/"; } else if(site == 'news-tamil'){var base_url = "https://www.ndtv.com/tamil/search/"; } else{var base_url = "https://www.ndtv.com/search?searchtext="; } var search_string = $('#s');var search_string_value = $('#s').val();var filtered_string = search_string_value.replace(/-/g, '~').replace(/[^a-zA-Z0-9~. ]/g, '').replace(/[^a-zA-Z0-9~.]/g, '-');if (filtered_string === '') { alert('Please enter search query'); search_string.focus();} else { window.location = base_url + filtered_string;}}
//function submit_topic_form(site) {submit_search_form(site);return false;}
//function get_site_url(site) {   return url; }	
//function remove_player(player_div) {document.getElementById(player_div).innerHTML = '';return false;}
///*not use in overall project : listFilter*/
////function listFilter(list) {$('#search_box').change( function () { var filter = $(this).val(); if(filter) { /* this finds all links in a list that contain the input, and hide the ones not containing the input while showing the ones that do*/ $(list).find(".last .schedule_name:not(:Contains(" + filter + "))").parent().parent().parent().parent().slideUp(); $(list).find(".last .schedule_name:Contains(" + filter + ")").parent().parent().parent().parent().slideDown(); } else { $(list).find("tr").slideDown(); } return false;}).keyup( function () { /* fire the above change event after every letter*/ $(this).change();});}
//function video_do_not_miss_widget() {var element_id = 'ndtv_videorhs';if (0 && $('#' + element_id + ' .dmplayicon').length > 0) { /*var display_icon = getCookie('video_do_not_miss_widget_icon'); var icon_display_status = 0; AB Testing Code Starts var variation = cxApi.chooseVariation(); alert('variation ' + variation);*/ var variation = cxApi.getChosenVariation(); if (variation == -1) { var variation = cxApi.chooseVariation(); cxApi.setChosenVariation(variation); } else { var variation = variation == 1 ? 0 : 1; cxApi.setChosenVariation(variation); }  var display_icon = variation; /* AB Testing Code Ends*/ var anchors = $('#' + element_id).find( 'a' ); if (display_icon == 1) { $('#' + element_id + ' .dmplayicon').show();  anchors.each(function(i) { var url = $(this).attr('href').replace(element_id, element_id + '_t_icon_' + parseInt(i+1)); $(this).attr('href', url); }); $('.dntmished').html('Must Watch'); } else { /*icon_display_status = 1;*/ anchors.each(function(i) { var url = $(this).attr('href').replace(element_id, element_id + '_t_' + parseInt(i+1)); $(this).attr('href', url); }); } /*setCookie('video_do_not_miss_widget_icon', icon_display_status, 0, 0, 30, '/', '.ndtv.com', false);*/}}
//function display_image_box() {var screenImage = $("#story_image_main");var theImage = new Image();theImage.src = screenImage.attr("src");var story_image_width = theImage.width;if (story_image_width > 360) { $('.story_img_big').css('display', 'block');} else if (story_image_width > 0 || story_image_width <= 360) { $('.story_img_small').css('display', 'block');}}
//function hide_show_three(hide_id, hide_id_two, show_id) {$('#'+hide_id).hide();$('#'+hide_id_two).hide();$('#'+show_id).show();if(show_id == 'press_release') { $("#iframediv").html('<iframe id="vidframe" src="https://www.ndtv.com/video/embed-player/?id=291871&amp;category=embed&amp;autostart=1&amp;pWidth=575&amp;pHeight=400&amp;embed_type=story;&show_related=0" scrolling="no" frameborder="0" allowtransparency="true" style="border:none; overflow:hidden; width:575px; height:410px; padding-bottom: 10px;padding-left:30px;"></iframe>'); }else { $("#iframediv").html(''); }}
//function change_element_class_three(source_id, target_class_name, target_id,target_id_second, source_class_name) {document.getElementById(source_id).setAttribute("class", target_class_name);document.getElementById(target_id).setAttribute("class", source_class_name);document.getElementById(target_id_second).setAttribute("class", source_class_name);}
///*not use in overall project : test*/
////function test() {alert('dsdsds')}
//function apps_swap_tabs(active_tab) {var active_class = 'select';var deactive_class = '';var tabs = new Array('apps-design', 'bilingual-design', 'live-design', 'weather-design', 'second-design', 'share-design', 'offline-design', 'more-design');var tabs_count = tabs.length;for(var i=0; i < tabs_count; i++) { if(tabs[i] == active_tab) { document.getElementById(active_tab).setAttribute("class", active_class); } else { document.getElementById(tabs[i]).setAttribute("class", deactive_class); }}}
//function apps_hide_show_submenu(show_id) {var shows_array = new Array('design-page', 'bilingual-page', 'livetv-radio-page', 'weather-page', 'secondscreen-page', 'sharecomment-page', 'offline-page', 'more-page');for(var i=0; i < shows_array.length; i++) { if(show_id == shows_array[i]) { document.getElementById(show_id).style.display = 'block'; } else { document.getElementById(shows_array[i]).style.display = 'none'; }}}
//function iphone_device_detection() {var user_mobile=(navigator.userAgent).toLowerCase();var mobile_array=new Array('iphone');for (i in mobile_array){ if (user_mobile.indexOf(mobile_array[i]) >= 0){ return 1; }}return 0;}
//function getval(sel) {var shows_array = new Array('design-page', 'bilingual-page', 'livetv-radio-page', 'weather-page', 'secondscreen-page', 'sharecomment-page', 'offline-page', 'more-page');var show_id = sel.value;for(var i=0; i < shows_array.length; i++) { if(show_id == shows_array[i]) { document.getElementById(show_id).style.display = 'block'; } else { document.getElementById(shows_array[i]).style.display = 'none'; }}}
//function geVersion(){var e=navigator.appVersion;var t=navigator.userAgent;var n=navigator.appName;var r=""+parseFloat(navigator.appVersion);var i=parseInt(navigator.appVersion,10);var s,o,u;if((o=t.indexOf("Safari"))!=-1){if(t.indexOf("Chrome")>-1){r=0;i=0}else{n="Safari";r=t.substring(o+7);if((o=t.indexOf("Version"))!=-1)r=t.substring(o+8);if((u=r.indexOf(";"))!=-1)r=r.substring(0,u);if((u=r.indexOf(" "))!=-1)r=r.substring(0,u);i=parseInt(""+r,10);if(isNaN(i)){r=""+parseFloat(navigator.appVersion);i=parseInt(navigator.appVersion,10)}}}else{r=0;i=0}return i}
//var token=""; if(geVersion() >= 7)checkPerms();
//function checkPerms(){var pResult=window.safari.pushNotification.permission("web.ndtv.website.test");if(pResult.permission==="default")requestPermissions();else if(pResult.permission==="granted")token=pResult.deviceToken;else if(pResult.permission==="denied");}
//function requestPermissions(){window.safari.pushNotification.requestPermission("https://play.ndtv.com/push/index","web.ndtv.website.test",null,function(c){if(c.permission==="granted")token=c.deviceToken;else if(c.permission==="denied");})};
//function isFlashEnabled() { var hasFlash = false; try { var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'); if(fo) hasFlash = true; } catch(e) { if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true; } return hasFlash; }
//function checkHTML5Video(path) {var extension = path.substring(path.lastIndexOf('.') + 1);var extension_info = get_mime(extension);var isHtml = false;if (supports_media(extension_info.mimetype, extension_info.container)) {isHtml = true;} else {    }return isHtml;}
//function insertCustomSymbols(){var c={pattern:/\bRs(\.|\b)/,rep_string:"Rs."},f=function(a){var d=0;if(a.nodeType==3&&a.nodeValue.search(c.pattern)!=-1){a.nodeValue=a.nodeValue.replace(c.pattern,c.rep_string);var e=a.data.indexOf(c.rep_string);if(e>=0){var b=document.createElement("span");d=document.createElement("span");b.className="rupee";a=a.splitText(e);a.splitText(c.rep_string.length);e=a.cloneNode(true);b.appendChild(e);a.parentNode.replaceChild(b,a);a=e.splitText(1);d.appendChild(a.cloneNode(true));a.parentNode.replaceChild(d,a);d=1}}else if(a.nodeType==1&&a.childNodes&&!/(script|style|iframe)/i.test(a.tagName) && (a.className.indexOf === 'function') && (a.className.indexOf("rupee")==-1))for(b=0;b<a.childNodes.length;++b)b+=f(a.childNodes[b]);return d};f(document.body)};
