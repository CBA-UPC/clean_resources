/*=0=../../js/front/common.js*/

$(function() { $(document).on('click', function(e) { if (e.target.id == 'topnav_section') {$('#topnav').show();} else {$('#topnav').hide(175);$('#share_on_top').hide(175);}});});
function home_news_tabs(f,i){var g=new Array("badi-khabar","khel-news","desh-se","duniya-se","business-news","zara-hatke");var h=g.length;for(var j=0;j<h;j++)if(f==g[j]){$("#"+g[j]).css("display","block");$("#"+g[j]+"_arrow").css("display","block");$("#"+g[j]+"_tab").replaceWith('<span id="'+g[j]+'_tab">'+i+"</span>")}else{$("#"+g[j]).css("display","none");$("#"+g[j]+"_arrow").css("display","none");$("#"+g[j]+"_tab").replaceWith('<a id="'+g[j]+'_tab" href="javascript:void(0)">'+$("#"+g[j]+"_tab").text()+"</a>")}}
function sensex_tabs(b){if(b=="bse"){$("#"+b+"_graph").css("display","block");$("#"+b+"_arrow").css("display","block");$("#"+b+"_tab").replaceWith('<span id="'+b+'_tab">BSE</span>');$("#nse_graph").css("display","none");$("#nse_arrow").css("display","none");$("#nse_tab").replaceWith('<a id="nse_tab" href="javascript:void(0)">NSE</a>')}else{$("#"+b+"_graph").css("display","block");$("#"+b+"_arrow").css("display","block");$("#"+b+"_tab").replaceWith('<span id="'+b+'_tab">NSE</span>');$("#bse_graph").css("display","none"); $("#bse_arrow").css("display","none");$("#bse_tab").replaceWith('<a id="bse_tab" href="javascript:void(0)">BSE</a>')}}
function video_tabs(g,j,l){var h=new Array("latest","news","entertainment","sports","shows","live_tv","special");var i=h.length;for(var k=0;k<i;k++)if(g==h[k]){if($("#"+h[k]+"_navigation"))$("#"+h[k]+"_navigation").css("display","block");if($("#"+h[k]+"_arrow"))$("#"+h[k]+"_arrow").css("display","block");if($("#"+h[k]+"_tab")){$(".live_tv").addClass("active_3");$("#"+h[k]+"_tab").replaceWith('<span id="'+h[k]+'_tab">'+j+"</span>")}if($("#"+h[k]+"_navigation_alphabats"))$("#"+h[k]+"_navigation_alphabats").css("display","block")}else{if($("#"+h[k]+"_navigation"))$("#"+h[k]+"_navigation").css("display","none");if($("#"+h[k]+"_navigation_alphabats"))$("#"+h[k]+"_navigation_alphabats").css("display","none");if($("#"+h[k]+"_main_navigation"))$("#"+h[k]+"_main_navigation").css("display","none");if($("#"+h[k]+"_arrow"))$("#"+h[k]+"_arrow").css("display","none");if($("#"+h[k]+"_tab"))if("#"+h[k]+"_tab"=="#live_tv_tab"){$(".live_tv").removeClass("active_3");$("#"+h[k]+"_tab").replaceWith('<a id="'+h[k]+'_tab" href="javascript:void(0)"><span>'+ $("#"+h[k]+"_tab").text()+"</span></a>")}else $("#"+h[k]+"_tab").replaceWith('<a id="'+h[k]+'_tab" href="javascript:void(0)">'+$("#"+h[k]+"_tab").text()+"</a>")}}unction play_video(c){var d=document.getElementById("video_player_thumb_embed").value;document.getElementById(c).innerHTML=d;return false}
function hide_show(c,d){if(document.getElementById(c))document.getElementById(c).style.display="none";if(document.getElementById(d))document.getElementById(d).style.display="block"}function change_market_graph(b){$(".market_graph").hide();$("#"+b+"_graph").show()}
function sidebar_most_read_commented_tabs(f,i){var g=new Array("read","commented");var h=g.length;for(var j=0;j<h;j++)if(f==g[j]){$("#"+g[j]).css("display","block");$("#"+g[j]+"_arrow").css("display","block");$("#"+g[j]+"_tab").replaceWith('<span id="'+g[j]+'_tab">'+i+"</span>")}else{$("#"+g[j]).css("display","none");$("#"+g[j]+"_arrow").css("display","none");$("#"+g[j]+"_tab").replaceWith('<a id="'+g[j]+'_tab" href="javascript:void(0)">'+$("#"+g[j]+"_tab").text()+"</a>")}}

//$('#h_search_menu').click(function fn(){$('#searchdrop').toggle()});
$('.navigation_search').click(;


function onVideoEnd(h) {
    var vid = window['__ids'].shift();
    var player_version = window['__player_version'];
    var apikey = window.__apikey;
    var movie = "http://www.ndtv.com/common/videos/flash/player/new-wrapper/NDTVVideoPlayerNew.swf" + player_version;
    var title = "";
    var desc = "";
    var filename = '';
    var fullimage = '';
    var duration = '';
    var dateline = '';
    var foldername = '';
    var adformat = '';
    var showcountry = '';
    $.getJSON(base_url + "videos/video-meta-data-for-special/id/"+vid, {   
        id:vid,
        sid:window['__sid'],
        page:window['__page']},    
        function(json) {
                title = json.title; desc = json.caption;
                filename = json.filename; 
                fullimage = json.fullimage;
                duration = json.duration; 
                dateline = json.dateline;             
                foldername = json.foldername; 
                showcountry = json.showcountry; 
                var adformat = window['__adformat']; 
                if (adformat == undefined || adformat == '') 
                { adformat = 'preroll|postroll|branded|overlay';} 
                if (duration < 45) { adformat = 'postroll|branded|overlay';}             
            //NDTVPlayerInit
            NDTVPlayerInit(json, window['__html5playerid'],true);
            $('h1').fadeOut('slow',function(){ $(this).html(title).fadeIn(); });
            $('.video_detail_caption').fadeOut('slow',function(){ $(this).html(desc).fadeIn(); });
            $('.ins_dateline').fadeOut('slow',function(){ $(this).html(dateline).fadeIn(); });
            if (showcountry == 'showindiaonly' && cntry != 'IN') { 
                    jQuery('.player').html('<div style="float:left;padding-left:100px;padding-top:100px;font-weight:bold;">This video is only available in India.<br><br>If you are in India and have received this message, please click <a href="https://www.ndtv.com/convergence/ndtv/new/feedback.aspx">here</a></div>'); 
                    return; }                
          var m = '<object class="player" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="player" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="movie" value="' + c + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent"><param name="flashvars" value="videoid=' +
                    j + "&channel=ndtv&pWidth=622&pHeight=415&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&vdopiaApiKey=" + f + "&title=" + i + "&foldername=" + r + "&desc=" + g + "&filename=" + a + "&videoimage=" + b + "&lengthinsec=" + d + "&vdopiaAdFormat=" + l + '"><embed src="' + c + '" width="100%" height="100%" flashvars="videoid=' + j + "&channel=ndtv&pWidth=622&pHeight=415&autostart=1&vdopiaSkinWidth=961&vdopiaSkinHeight=386&useGUT=false&vdopiaApiKey=" + f + "&title=" + i + "&foldername=" + r + "&desc=" + g + "&filename=" + a + "&videoimage=" + b + "&lengthinsec=" + d + "&vdopiaAdFormat=" + l + '" quality="high" bgcolor="#ffffff" width="100%" height="100%" name="player" align="middle" allowScriptAccess="always" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"/></object>';
                if (j * 1) {var k = $(".player").css("position");var p = $(".player").css("top");var o = $(".player").css("left");$(".story_heading").fadeOut("slow", function() {$(this).html(i).fadeIn()});$(".story .dateline").fadeOut("slow", function() {$(this).html(e).fadeIn()});$(".video_detail_caption").fadeOut("slow", ;$(".player").html(m);$(".player").css({position: k,top: p,left: o});}});}
function business_search(){$(document).ready(function(){$("#business_search_anchor").bind("click",function(){$("#business_search_anchor").href="http://profit.ndtv.com/News/Search/"+encodeURIComponent($("#business_search").val())+"/1"});$("input").keypress(function(a){if(a.which==13)window.location="http://profit.ndtv.com/News/Search/"+encodeURIComponent($("#business_search").val())+"/1"})})}var str=document.domain;if(str.search("hindisamachar.tk")>-1)window.location="https://ndtv.in/";
function setCookie(a,c,b,f,g,h,i,j){var e=new Date;e.setTime(e.getTime());var d=0;if(b)d+=b*1E3*60;if(f)d+=f*1E3*60*60;if(g)d+=g*1E3*60*60*24;b=new Date(e.getTime()+d);document.cookie=a+"="+escape(c)+(d?";expires="+b.toGMTString():"")+(h?";path="+h:"")+(i?";domain="+i:"")+(j?";secure":"")}(();
function render(){gapi.signin.render("customBtn",{"callback":"onSignInCallback","accesstype":"offline","apppackagename":"com.july.ndtv","clientid":"72129834489-uk4o358ag2ievntn375ab6a4spltimn3.apps.googleusercontent.com","cookiepolicy":"http://ndtv.com","requestvisibleactions":"http://schemas.google.com/AddActivity","scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"})}var authResult=undefined;
function googlePlusLogout(){$.ajax({type:"POST",url:"http://www.ndtv.com/widget/google-plus-login/debug/1",data:{action:"logout"},success:function(result){$("#google_plus_results").attr("style","display: none;");$("#customBtn").attr("style","display: inline-block");console.log(result)}})}
function onSignInCallback(authResult){if(authResult["code"]){$("#customBtn").attr("style","display: none");var code=authResult["code"];$.ajax({type:"POST",url:base_url+"leaf/google-plus-login",data:{code:code},success:function(result){result=$.parseJSON(result);if(result.id){$("#google_plus_results").attr("style","display: inline-block");$("#google_plus_results").html("Hi, "+result.name.givenName)}else{$("#customBtn").attr("style","display: block");$("#google_plus_results").attr("style","display: inline-block;")}}})}}

function resizeIframe(iframe) {iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";}

var win = null;
function NewWindow(mypage, myname, w, h, scroll, pos) {if (pos == "random") {LeftPosition = (screen.width) ? Math.floor(Math.random() * (screen.width - w)) : 100;TopPosition = (screen.height) ? Math.floor(Math.random() * ((screen.height - h) - 75)) : 100;} if (pos == "center") {LeftPosition = (screen.width) ? (screen.width - w) / 2 : 100;TopPosition = (screen.height) ? (screen.height - h) / 2 : 100;} else if ((pos != "center" && pos != "random") || pos == null) {LeftPosition = 0;TopPosition = 20}settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';win = window.open(mypage, myname, settings);}
function _resizeIframe(iframe) {iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";}
/*np.js*/
(function(e){if(typeof module!=="undefined"&&module.exports){module.exports=e()}else if(typeof define==="function"&&define.amd){define(e)}else{this.NProgress=e()}})(function(){;e.version="0.1.3";var t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:true,trickleRate:.02,trickleSpeed:800,showSpinner:true,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};e.configure=e.status=null;e.set=e.isStarted=e.start=e.done=e.inc=e.trickle=(function(){var t=0,n=0;e.promise=function(r){if(!r||r.state()=="resolved"){return this}if(n==0){e.start()}t++;n++;r.always(function(){n--;if(n==0){t=0;e.done()}else{e.set((t-n)/t)}});return this}})();e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");a(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress";i.innerHTML=t.template;var s=i.querySelector(t.barSelector),u=n?"-100":r(e.status||0),f;o(s,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"});if(!t.showSpinner){f=i.querySelector(t.spinnerSelector);f&&c(f)}document.body.appendChild(i);return i};e.remove=function(){f(document.documentElement,"nprogress-busy");var e=document.getElementById("nprogress");e&&c(e)};e.isRendered=e.getPositioningCSS=var s=function(){ar e=[];return ();var o=function(){e=["Webkit","O","Moz","ms"],t={};return ();return e})

function insertCustomSymbols(){var c={pattern:/\bRs(\.|\b)/,rep_string:"Rs."},f=function(a){var d=0;if(a.nodeType==3&&a.nodeValue.search(c.pattern)!=-1){a.nodeValue=a.nodeValue.replace(c.pattern,c.rep_string);var e=a.data.indexOf(c.rep_string);if(e>=0){var b=document.createElement("span");d=document.createElement("span");b.className="rupee";a=a.splitText(e);a.splitText(c.rep_string.length);e=a.cloneNode(true);b.appendChild(e);a.parentNode.replaceChild(b,a);a=e.splitText(1);d.appendChild(a.cloneNode(true));
a.parentNode.replaceChild(d,a);d=1}}else if(a.nodeType==1&&a.childNodes&&!/(script|style|iframe)/i.test(a.tagName)&&a.className.indexOf("rupee")==-1)for(b=0;b<a.childNodes.length;++b)b+=f(a.childNodes[b]);return d};f(document.body)};

$(document).ready(; $(; 
/* taboola code */
if(typeof(rhs_dont_miss) !== 'undefined' && rhs_dont_miss == 1){
window._taboola = window._taboola || []; _taboola.push({mode: 'vertical-a',container: 'taboola-right-rail-thumbnails-3rd',placement: 'Right Rail Thumbnails 3rd - Khabar',target_type: 'mix'});
}
if(typeof(rhs_1) !== 'undefined' && rhs_1 == 1){
window._taboola = window._taboola || []; _taboola.push({mode: 'thumbnails-b',container: 'taboola-right-rail-thumbnails',placement: 'Right Rail Thumbnails - Khabar',target_type: 'video'});
window._taboola = window._taboola || []; _taboola.push({mode: 'organic-thumbnails-b',container: 'taboola-right-rail-thumbnails-2nd',placement: 'Right Rail Thumbnails 2nd - Khabar',target_type: 'mix'});
}
if(typeof(rhs_2) !== 'undefined' && rhs_2 == 1){
window._taboola = window._taboola || []; _taboola.push({mode: taboola_rhs_mode1, container: 'taboola-below-'+taboola_rhs_type+'-thumbnails',placement: 'Below '+taboola_rhs_type_name+' Thumbnails - Khabar',target_type: 'video'});
window._taboola = window._taboola || []; _taboola.push({mode: taboola_rhs_mode2, container: 'taboola-below-'+taboola_rhs_type+'-thumbnails-2nd',placement: 'Below '+taboola_rhs_type_name+' Thumbnails 2nd - Khabar',target_type: 'mix'});
}
if(typeof(listing_taboola_1) !== 'undefined' && listing_taboola_1 == 1){
window._taboola = window._taboola || []; _taboola.push({mode: 'thumbnails-f',container: 'taboola-native-mid-main-column-thumbnails-1st',placement: 'Native Mid Main Column Thumbnails 1st - Khabar',target_type: 'mix'});
}
if(typeof(listing_taboola_2) !== 'undefined' && listing_taboola_2 == 1){
window._taboola = window._taboola || []; _taboola.push({mode: 'thumbnails-f',container: 'taboola-native-mid-main-column-thumbnails-2nd',placement: 'Native Mid Main Column Thumbnails 2nd - Khabar',target_type: 'mix'});
}
if(typeof(elections_taboola) !== 'undefined' && elections_taboola == 1){
window._taboola = window._taboola || []; _taboola.push({mode: 'thumbnails-e', container: 'taboola-main-column-thumbnails',placement: 'Main Column Thumbnails - Khabar',target_type: 'mix'});
}


/*=1=../../js/theia-sticky-sidebar.js*/

!);
//# sourceMappingURL=maps/ResizeSensor.min.js.map
!jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map

