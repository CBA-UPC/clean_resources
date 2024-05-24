$}, 700);
        return false;
    });


    function liquid($param1) {
        var lqd = $($param1);
        $(lqd).each(function(index){
            var data_img_src = $(this).find('img').attr( "data-src" );
            var img_src = $(this).find('img').attr( "src" );
            if($param1 == ".lqd"){
                $(this).find('img').hide();
                $(this).css('background-image', 'url(' + data_img_src + ')');
            }
            else {
                $(this).append('<div class="lqd_img" style="background-image:url(' + img_src + ');"></div>');
            }
        });
        return;
    }

    window.onload = function() {
        //$(".lqd").liquid('block');
        liquid('.lqd');
        liquid('.lqd_block');
        make_sticky_menu();
        make_sticky_side();
        make_sticky_share();
        // trending_slide();
    };


    


    //DROPDOWN MENU
    $(".dropdown.hover").hover(
        function() {
            $(this).addClass("aktif");
        },
        function() {
            $(this).removeClass("aktif");   
    });

    $(".dropdown.click > a").click(function(event){
        if (!($(this).parent().hasClass("aktif"))) {
            $(".dropdown").removeClass("aktif");
        }
        $(this).parent().toggleClass("aktif");
        return false;
    });
    $(document).mouseup(function (e)
    {
        var container = $("#search_form");
    
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $("body").removeClass("search_on");
        }

        var container_drop = $(".dropdown");
        var dropmenu = $(".dropdown > a");
    
        if (!dropmenu.is(e.target) // if the target of the click isn't the container...
            && container_drop.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container_drop.removeClass("aktif");
        }  

    });

    // SEARCH
    $("#nav_search > a").click(function() {
        $("body").addClass("search_on");
        $("#search_form > input").focus();
        return false;
    });
    $("#nav_search_close").click(function() {
        $("body").removeClass("search_on");
        return false;
    });

    // // STICKY KIT
    // $("#top_billboard").stick_in_parent({
    //     parent: "#sticky_top_bill",
    //     offset_top: 0,
    //     inner_scrolling: false
    // })
    // .on('sticky_kit:bottom', function(e) {
    //     $(this).parent().css('position', 'static');
    // })
    // .on('sticky_kit:unbottom', function(e) {
    //     $(this).parent().css('position', 'relative');
    // })

    // $("#nav").stick_in_parent({
    //     parent: "body",
    //     offset_top: 0,
    //     inner_scrolling: false
    // })
    // .on('sticky_kit:bottom', function(e) {
    //     $(this).parent().css('position', 'static');
    // })
    // .on('sticky_kit:unbottom', function(e) {
    //     $(this).parent().css('position', 'relative');
    // })

    // return $("[data-sticky_column]").stick_in_parent({
    //     parent: "[data-sticky_parent]",
    //     offset_top: 70,
    //     inner_scrolling: false
    // })
    // .on('sticky_kit:bottom', function(e) {
    //     $(this).parent().css('position', 'static');
    // })
    // .on('sticky_kit:unbottom', function(e) {
    //     $(this).parent().css('position', 'relative');
    // });

    // $('body').delay(1500).queue(function() {
    //    $(document.body).trigger("sticky_kit:recalc");
    // });

    var htls = $('#top_banner').outerHeight(true);

    function make_sticky_menu() {
      $("#nav").stick_in_parent({
            parent: "body",
            offset_top: 0,
            inner_scrolling: false,
            spacer:false,
            // recalc_every:1,
        })
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        })
        .on('sticky_kit:stick', function(e) {
            $('#top_banner').addClass("stucked");
            $(this).addClass("floating");
        })
        .on('sticky_kit:unstick', function(e) {
            $('#top_banner').removeClass("stucked");
            $(this).removeClass("floating");
        })

        $('body').delay(500).queue(function() {
           $(document.body).trigger("sticky_kit:recalc");
        });
    }


    function make_sticky_side() {
        return $("[data-sticky_column]").stick_in_parent({
          parent: "[data-sticky_parent]",
          // recalc_every: 1,
          offset_top: htls + 55,
          inner_scrolling:false,
          spacer:false
        })
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        })
        .on('sticky_kit:stick', function(e) {
            if ($("#top_banner").hasClass("top_banner_bar")) {
               $(".is_stuck").css("margin-top",0);
            }
        })
        .on('sticky_kit:unstick', function(e) {
            if ($("#top_banner").hasClass("top_banner_bar")) {
               $(".sticky").css("margin-top",0);
            }
        });
        $('body').delay(1500).queue(function() {
           $(document.body).trigger("sticky_kit:recalc");
        });
    }
    function make_sticky_share() {
        $("#sticky_share").stick_in_parent({
          // parent: "[data-sticky_parent]",
          offset_top: htls + 55,
          inner_scrolling:false,
          // recalc_every:1,
        })
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        })
    }

});

function trendingSlide(){
    $('#trending .list_tag').slick({
        infinite:false,
        slidesToShow: 6,
        variableWidth: true,
        slidesToScroll: 1,
    });
}

iFrameResize({
    log                     : true,                  // Enable console logging
    enablePublicMethods     : true,                  // Enable methods within iframe hosted page
    enableInPageLinks       : true,
    resizedCallback         : function(messageData){ // Callback fn when resize is received
        $('p#callback').html(
            '<b>Frame ID:</b> '    + messageData.iframe.id +
            ' <b>Height:</b> '     + messageData.height +
            ' <b>Width:</b> '      + messageData.width +
            ' <b>Event type:</b> ' + messageData.type
        );
    },
    messageCallback         : function(messageData){ // Callback fn when message is received
        $('p#callback').html(
            '<b>Frame ID:</b> '    + messageData.iframe.id +
            ' <b>Message:</b> '    + messageData.message
        );
        alert(messageData.message + ' (' + messageData.iframe.id + ')' );
    },
    closedCallback         : function(id){ // Callback fn when iFrame is closed
        $('p#callback').html(
            '<b>IFrame (</b>'    + id +
            '<b>) removed from page.</b>'
        );
    }
},'.iFramePasangMata'); 
// iFrameResize({ log: true }, '.iFramePasangMata')



// $(window).bind('scroll', function() {
//     if($(window).scrollTop() >= 200) {
//         $("#header").addClass("nav_mini");
//     }
//     else {
//         $("#header").removeClass("nav_mini");
//     }
// });



// $(window).bind('scroll', function() {
//     if($(window).scrollTop() >= $('#header').offset().top + $('#header').outerHeight()) {
//         $("#top_sticky_box").addClass("nav_stick");
//         $(document.body).trigger("sticky_kit:recalc");
//     }
//     else {
//         $("#top_sticky_box").removeClass("nav_stick");
//         $(document.body).trigger("sticky_kit:recalc");
//     }
// });

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  }

//TABS QUIZ LAINNYA
$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab__content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })
})   trim())}),$("#readtoogtm").hasClass("list__other__item")?(selector=$("#readtoogtm h5 a"),set=!0):(selector=$("#readtoogtm a"),set=!1),selector.click(function(){var a;$("h2",this).length&&(a=$("h2",this).text().trim()),$("h3",this).length&&(a=$("h3",this).text().trim()),$("h4",this).length&&(a=$("h4 strong",this).length?$("h4 strong",this).text().trim():$("h4",this).text().trim()),!0==set&&(a=$(this).text().trim()),$("h6",this).length&&(a=$("h6",this).text().trim()),pushEvent("bacajuga",$(this).attr("href"),a)})});
</script>
<script type="text/javascript" src="https://awscdn.detik.net.id/libs/livecounter/detikLiveUserCounterResponse.js?v=2024011905" defer></script>

        <!--s:dtkprv-->
<!-- S: (script) Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NG6BTJ');</script>
<!-- E: (script) Google Tag Manager -->
<!--e:dtkprv-->
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link type="image/x-icon" rel="shortcut icon" href="https://awscdn.detik.net.id/pemilu2/images/favicon.ico?v=2024011905220">

        <!--s:dtkprv-->
<!--e:dtkprv-->
        
                    <link href="https://awscdn.detik.net.id/pemilu2/css/style.css?v=2024011905220" rel="stylesheet">
                <link href="https://awscdn.detik.net.id/assets/css/placeholder.css?v=2024011905220" rel="stylesheet">

        <!-- S:taghead --><link rel="stylesheet" type="text/css" href="https://awscdn.detik.net.id/commerce/desktop/css/detik.ads-new.css">
<script src="https://awscdn.detik.net.id/commerce/commerce/dtk_commerce.js"></script>


<!-- START PUBMATIC -->  
<script type="text/javascript">
                var PWT={}; //Initialize Namespace
                var googletag = googletag || {};
                googletag.cmd = googletag.cmd || [];
                var gptRan = false;
                PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
                    loadGPT();
                };
                var loadGPT = function() {
                    // Check the gptRan flag
                    if (!gptRan) {
                        gptRan = true;
                        var gads = document.createElement('script');
                        var useSSL = 'https:' == document.location.protocol;
                        gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                        var node = document.getElementsByTagName('script')[0];
                        node.parentNode.insertBefore(gads, node);
                    }
                };
                // Failsafe to call gpt
                setTimeout(loadGPT, 500);
(function() {
	var purl = window.location.href;
	var url = '//ads.pubmatic.com/AdServer/js/pwt/156981/927';
	var profileVersionId = '';
	if(purl.indexOf('pwtv=')>0){
		var regexp = /pwtv=(.*?)(&|$)/g;
		var matches = regexp.exec(purl);
		if(matches.length >= 2 && matches[1].length > 0){
			profileVersionId = '/'+matches[1];
		}
	}
	var wtads = document.createElement('script');
	wtads.async = true;
	wtads.type = 'text/javascript';
	wtads.src = url+profileVersionId+'/pwt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(wtads, node);
})();
</script>

<!-- END PUBMATIC -->  

<!-- Start Tag DFP -->
<script>
 dfp_keywords = getKeywords();
  googletag.cmd.push(function() {

//Adslot 1 declaration
    var REFRESH_KEY = 'refresh';
    var REFRESH_VALUE = 'true';
    // This slot is allowed to refresh, as it contains the targeting keys which have been declared for refresh.
    


    // Number of seconds to wait after the slot becomes viewable.
    var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;
    googletag.pubads().addEventListener('impressionViewable', function(event) {
      var slot = event.slot;
      if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
        setTimeout(function() {
          googletag.pubads().refresh([slot]);
        }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
      }
    });

gpt_balloon = "";
//googletag.defineSlot('/4905536/detik_desktop/pemilu/balloon_ads', [[300, 500], [400, 250], [300, 600]], 'div-gpt-ad-1659433002573-0').addService(googletag.pubads());

gpt_topframe = "";
//googletag.defineSlot('/4905536/detik_desktop/pemilu/topframe', [970, 50], 'div-gpt-ad-1659433757412-0').addService(googletag.pubads());

gpt_billboard = googletag.defineSlot('/4905536/detik_desktop/pemilu/billboard', [970, 250], 'div-gpt-ad-1659433103597-0').addService(googletag.pubads());

gpt_billboardtop = "";

gpt_leaderboard = "";
//googletag.defineSlot('/4905536/detik_desktop/pemilu/leaderboard', [728, 90], 'div-gpt-ad-1659433238918-0').addService(googletag.pubads());

gpt_bottomframe = "";
//googletag.defineSlot('/4905536/detik_desktop/pemilu/bottomframe', [[970, 50], [728, 90]], 'div-gpt-ad-1659433164548-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/pemilu/newsfeed1', ['fluid'], 'div-gpt-ad-1659433390802-0').addService(googletag.pubads());

//googletag.defineOutOfPageSlot('/4905536/detik_desktop/pemilu/newsfeed1', 'div-gpt-ad-1659433428054-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/pemilu/newsfeed2', ['fluid'], 'div-gpt-ad-1659433482101-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/pemilu/pop_ups', [785, 440], 'div-gpt-ad-1659433557779-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/pemilu/promobox', [400, 250], 'div-gpt-ad-1659433614070-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/pemilu/skinner_left', [160, 600], 'div-gpt-ad-1659433661667-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/pemilu/skinner_right', [160, 600], 'div-gpt-ad-1659433695264-0').addService(googletag.pubads());



 googletag.pubads().addEventListener('slotRenderEnded', function(event) {
 try {  
     if(event.slot == gpt_billboard && !event.isEmpty){
          $(document).ready(function(){
             $('#billboard_banner').show();
             Billboard_Sticky();
          });
     }

      if (event.slot == gpt_balloon && !event.isEmpty) {
   var containsAdBalloon = !event.isEmpty,
   widthBalloon = event.size[0],
   heightBalloon = event.size[1];
    $('.balloon').show();
    $('.balloon_close').show();
   if (heightBalloon == 600 && widthBalloon == 300){
      $('.balloon').css({'height':'600px','width':'300px'});
     }
 }  
      if (event.slot == gpt_topframe && !event.isEmpty ){
            $('.top_banner_bar').height('50px');
            $('.close_tb').show();
}     
    if(event.slot == gpt_billboardtop && !event.isEmpty){
        $("#megabillboard-desktop").height('250px');
        }
     if (event.slot == gpt_bottomframe && !event.isEmpty){
            $('.close_tbot').show();
            $('.bottom_banner_bar').show();
     }
     if(event.slot == gpt_leaderboard && event.isEmpty){
           removeElement('header__leaderboard');
     }
} 
catch (e) {
     console.log(e);
}
});
   /*E- Custom DFP */


    googletag.pubads().enableSingleRequest(); 
    googletag.pubads().setTargeting('site', ['detikcom']);
    googletag.pubads().setTargeting('section', ['hot']);
    googletag.pubads().setTargeting('medium', ['desktop']);
    googletag.pubads().setTargeting('keyvalue', dfp_keywords);
    googletag.pubads().setTargeting('militaryconflict', dfp_keywords);
    googletag.pubads().setTargeting('ilegal_drugs', dfp_keywords);
    googletag.pubads().setTargeting('adult', dfp_keywords);
    googletag.pubads().setTargeting('death_injury', dfp_keywords);
    googletag.pubads().setTargeting('hate_speech', dfp_keywords);
    googletag.pubads().setTargeting('spam_harmfulsite', dfp_keywords);
    googletag.pubads().setTargeting('tobacco', dfp_keywords);
    googletag.pubads().setTargeting('disaster', dfp_keywords);
    googletag.pubads().setTargeting('politic', dfp_keywords);
    googletag.pubads().setTargeting('obscenity', dfp_keywords);
    googletag.pubads().setTargeting('terorism', dfp_keywords);
    googletag.pubads().setTargeting('arms', dfp_keywords);
    googletag.pubads().setTargeting('crime', dfp_keywords);
    googletag.pubads().setTargeting('online_piracy', dfp_keywords);
    googletag.pubads().collapseEmptyDivs(true);
    googletag.enableServices();
  });

function removeElement(classname) {
   var elem = document.getElementsByClassName(classname)[0];
   return elem.parentNode.removeChild(elem);
 }

</script>
<!-- End Tag DFP -->




<!-- Start Forkmedia Outstream -->

<script>
    var _ContextAdsPublisher = window.parent.document.createElement('script');
    _ContextAdsPublisher.type = 'text/javascript';
    _ContextAdsPublisher.async = true;
    _ContextAdsPublisher.src = window.parent.document.location.protocol +
        '//pubs.contextads.live/detik/detik/generic.js';
    var _scripter = window.parent.document.getElementsByTagName('script')[0];
    _scripter.parentNode.insertBefore(_ContextAdsPublisher, _scripter);
</script>
        
        
<!-- End Forkmedia Outstream -->

<!-- CMP (Consent Management Platform) GDPR -->

<script>(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},l=this||self,m=/^[\w+/_-]+[=]{0,2}$/,p=null,q=function(){},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var v=function(a,b){Object.defineProperty(l,a,{configurable:!1,get:function(){return b},set:q})};var y=function(a,b){this.b=a===w&&b||"";this.a=x},x={},w={};var aa=function(a,b){a.src=b instanceof y&&b.constructor===y&&b.a===x?b.b:"type_error:TrustedResourceUrl";if(null===p)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&m.test(b)){p=b;break b}p=""}b=p;b&&a.setAttribute("nonce",b)};var z=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)};var A=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},B=function(a){this.a=a||l.document||document};B.prototype.appendChild=function(a,b){a.appendChild(b)};var C=function(a,b,c,d,e,f){try{var k=a.a,h=A(a.a,"SCRIPT");h.async=!0;aa(h,b);k.head.appendChild(h);h.addEventListener("load",function(){e();d&&k.head.removeChild(h)});h.addEventListener("error",function(){0<c?C(a,b,c-1,d,e,f):(d&&k.head.removeChild(h),f())})}catch(n){f()}};var ba=l.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),ca=l.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),da=l.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),ea=function(a,b,c){this.b=a;this.f=new B(this.b);this.a=null;this.c=[];this.g=!1;this.i=b;this.h=c},F=function(a){if(a.b.body&&!a.g){var b=
function(){D(a);l.setTimeout(function(){return E(a,3)},50)};C(a.f,a.i,2,!0,function(){l[a.h]||b()},b);a.g=!0}},D=function(a){for(var b=G(1,5),c=0;c<b;c++){var d=H(a);a.b.body.appendChild(d);a.c.push(d)}b=H(a);b.style.bottom="0";b.style.left="0";b.style.position="fixed";b.style.width=G(100,110).toString()+"%";b.style.zIndex=G(2147483544,2147483644).toString();b.style["background-color"]=I(249,259,242,252,219,229);b.style["box-shadow"]="0 0 12px #888";b.style.color=I(0,10,0,10,0,10);b.style.display=
"flex";b.style["justify-content"]="center";b.style["font-family"]="Roboto, Arial";c=H(a);c.style.width=G(80,85).toString()+"%";c.style.maxWidth=G(750,775).toString()+"px";c.style.margin="24px";c.style.display="flex";c.style["align-items"]="flex-start";c.style["justify-content"]="center";d=A(a.f.a,"IMG");d.className=z();d.src=ba;d.style.height="24px";d.style.width="24px";d.style["padding-right"]="16px";var e=H(a),f=H(a);f.style["font-weight"]="bold";f.textContent=ca;var k=H(a);k.textContent=da;J(a,
e,f);J(a,e,k);J(a,c,d);J(a,c,e);J(a,b,c);a.a=b;a.b.body.appendChild(a.a);b=G(1,5);for(c=0;c<b;c++)d=H(a),a.b.body.appendChild(d),a.c.push(d)},J=function(a,b,c){for(var d=G(1,5),e=0;e<d;e++){var f=H(a);b.appendChild(f)}b.appendChild(c);c=G(1,5);for(d=0;d<c;d++)e=H(a),b.appendChild(e)},G=function(a,b){return Math.floor(a+Math.random()*(b-a))},I=function(a,b,c,d,e,f){return"rgb("+G(Math.max(a,0),Math.min(b,255)).toString()+","+G(Math.max(c,0),Math.min(d,255)).toString()+","+G(Math.max(e,0),Math.min(f,
255)).toString()+")"},H=function(a){a=A(a.f.a,"DIV");a.className=z();return a},E=function(a,b){0>=b||null!=a.a&&0!=a.a.offsetHeight&&0!=a.a.offsetWidth||(fa(a),D(a),l.setTimeout(function(){return E(a,b-1)},50))},fa=function(a){var b=a.c;var c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];b=c?c.call(b):{next:g(b)};for(c=b.next();!c.done;c=b.next())(c=c.value)&&c.parentNode&&c.parentNode.removeChild(c);a.c=[];(b=a.a)&&b.parentNode&&b.parentNode.removeChild(b);a.a=null};var ia=function(a,b,c,d,e){var f=ha(c),k=function(n){n.appendChild(f);l.setTimeout(function(){f?(0!==f.offsetHeight&&0!==f.offsetWidth?b():a(),f.parentNode&&f.parentNode.removeChild(f)):a()},d)},h=function(n){document.body?k(document.body):0<n?l.setTimeout(function(){h(n-1)},e):b()};h(3)},ha=function(a){var b=document.createElement("div");b.className=a;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left="-10000px";b.style.top="-10000px";b.style.zIndex="-10000";return b};var K={},L=null;var M=function(){},N="function"==typeof Uint8Array,O=function(a,b){a.b=null;b||(b=[]);a.j=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var c=a.a[b];if(!(null===c||"object"!=typeof c||Array.isArray(c)||N&&c instanceof Uint8Array)){a.g=b-a.f;a.c=c;break a}}a.g=Number.MAX_VALUE}a.i={}},P=[],Q=function(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===P?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===P?a.c[b]=[]:c},R=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=Q(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};
M.prototype.h=N?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!L){L={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));K[e]=f;for(var k=0;k<f.length;k++){var h=f[k];void 0===L[h]&&(L[h]=k)}}}b=K[b];c=[];for(d=0;d<this.length;d+=3){var n=this[d],t=(e=d+1<this.length)?this[d+1]:0;h=(f=d+2<this.length)?this[d+2]:0;k=n>>2;n=(n&
3)<<4|t>>4;t=(t&15)<<2|h>>6;h&=63;f||(h=64,e||(t=64));c.push(b[k],b[n],b[t]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,S)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,S)};var S=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};M.prototype.toString=function(){return this.a.toString()};var T=function(a){O(this,a)};u(T,M);var U=function(a){O(this,a)};u(U,M);var ja=function(a,b){this.c=new B(a);var c=R(b,T,5);c=new y(w,Q(c,4)||"");this.b=new ea(a,c,Q(b,4));this.a=b},ka=function(a,b,c,d){b=new T(b?JSON.parse(b):null);b=new y(w,Q(b,4)||"");C(a.c,b,3,!1,c,function(){ia(function(){F(a.b);d(!1)},function(){d(!0)},Q(a.a,2),Q(a.a,3),Q(a.a,1))})};var la=function(a,b){V(a,"internal_api_load_with_sb",function(c,d,e){ka(b,c,d,e)});V(a,"internal_api_sb",function(){F(b.b)})},V=function(a,b,c){a=l.btoa(a+b);v(a,c)},W=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];e=l.btoa(a+b);e=l[e];if("function"==r(e))e.apply(null,d);else throw Error("API not exported.");};var X=function(a){O(this,a)};u(X,M);var Y=function(a){this.h=window;this.a=a;this.b=Q(this.a,1);this.f=R(this.a,T,2);this.g=R(this.a,U,3);this.c=!1};Y.prototype.start=function(){ma();var a=new ja(this.h.document,this.g);la(this.b,a);na(this)};
var ma=function(){var a=function(){if(!l.frames.googlefcPresent)if(document.body){var b=document.createElement("iframe");b.style.display="none";b.style.width="0px";b.style.height="0px";b.style.border="none";b.style.zIndex="-1000";b.style.left="-1000px";b.style.top="-1000px";b.name="googlefcPresent";document.body.appendChild(b)}else l.setTimeout(a,5)};a()},na=function(a){var b=Date.now();W(a.b,"internal_api_load_with_sb",a.f.h(),function(){var c;var d=a.b,e=l[l.btoa(d+"loader_js")];if(e){e=l.atob(e);
e=parseInt(e,10);d=l.btoa(d+"loader_js").split(".");var f=l;d[0]in f||"undefined"==typeof f.execScript||f.execScript("var "+d[0]);for(;d.length&&(c=d.shift());)d.length?f[c]&&f[c]!==Object.prototype[c]?f=f[c]:f=f[c]={}:f[c]=null;c=Math.abs(b-e);c=1728E5>c?0:c}else c=-1;0!=c&&(W(a.b,"internal_api_sb"),Z(a,Q(a.a,6)))},function(c){Z(a,c?Q(a.a,4):Q(a.a,5))})},Z=function(a,b){a.c||(a.c=!0,a=new l.XMLHttpRequest,a.open("GET",b,!0),a.send())};(function(a,b){l[a]=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];l[a]=q;b.apply(null,d)}})("__d3lUW8vwsKlB__",function(a){"function"==typeof window.atob&&(a=window.atob(a),a=new X(a?JSON.parse(a):null),(new Y(a)).start())});}).call(this);

window.__d3lUW8vwsKlB__("WyJkOWU3MGQ2ODJmMjY0YjI3IixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2YvQUdTS1d4VmFjMURaRkpNcWZhdmZKSnJfcjdMc3VlcWxNaDZWZ01QWll1VzUwbzBRVXcwR1VueW01VXliTWJBRmFMZ0JGaW5WMzZHX0tmbDNCU2xac3NHVUt5MFx1MDAzZCJdCixbMjAsImRpdi1ncHQtYWQiLDEwMCwiWkRsbE56QmtOamd5WmpJMk5HSXlOd1x1MDAzZFx1MDAzZCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL3d3dy5nc3RhdGljLmNvbS8wZW1uL2YvcC9kOWU3MGQ2ODJmMjY0YjI3LmpzP3VzcXBcdTAwM2RDQUUiXQpdCiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hVeWExclRVTXJ5eFFqUXA2czI4dDRCVlU4TTV1ZjJzNFl3WXpuYklURHlIdkNmS3FkaXRQZ3RxMDdvRnhEZVhwN1JxOC1WcVE3TzBpYk1SYVZPP2FiXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4WFRvQkdWMk9DLTI1MW9yU1VzZ2VOU0JIV1lFNzREZDVpajAyYWlxUjBfNUg1WDlCbHd5VDR2V3hsT3VFVnB5NlFkalN2azFrRkd0c2c0ZmlubD9hYlx1MDAzZDJcdTAwMjZzYmZcdTAwM2QxIiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hWNldFam8yNHdjYUxPMzBGRXluem93SF81MURkeU0wdFhXVFhDckZac0VZTXlnemk0eHZ0RTV5dkRXbDQ0REx0SHJDZ0hXOEx5NDdibnltSGpIP3NiZlx1MDAzZDIiXQo=");</script>
<!-- E:taghead -->
        <script type="text/javascript">
    var baseurl    = "https://news.detik.com/pemilu",
        asset_url  = "https://awscdn.detik.net.id/pemilu2",
        site_id    = "64",
        channel_id = "2006",
        responsive = false</script>

<!--profile_ad:detik_pemilu-->
<!--layout_type:desktop-->
        
                <script type="text/javascript" src="https://awscdn.detik.net.id/pemilu2/js/slickslider.js?v=2024011905220"></script>
    </head>

    <body>
        <!--s:dtkprv-->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NG6BTJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!--e:dtkprv-->

<h1 class="head-1">Berita Terkini Pemilu Pilpres Pileg Indonesia 2024 - Pemilu detik</h1>

<link rel="stylesheet" href="https://awscdn.detik.net.id/assets/css/framebar/framebar.css?v=2024011905220" type="text/css">
<link rel="stylesheet" href="https://awscdn.detik.net.id/assets/css/framebar/autocomplete.css?v=2024011905220" type="text/css">
<script type="text/javascript">
 var dc_params={client_id:64,ui:'popup',site_id:64}
 var asset_common = "https://awscdn.detik.net.id/assets";
 var framebar_url = {"profile":"https:\/\/connect.detik.com\/dashboard\/","logout":"https:\/\/connect.detik.com\/oauth\/signout?redirectUrl=https%3A%2F%2Fnews.detik.com%2Fpemilu%2F","register":"https:\/\/connect.detik.com\/accounts\/register?clientId=3&redirectUrl=https%3A%2F%2Fnews.detik.com%2Fpemilu%2F&ui=popup&parentURI=https:\/\/news.detik.com\/pemilu\/","login":"https:\/\/connect.detik.com\/oauth\/authorize?clientId=3&redirectUrl=https%3A%2F%2Fnews.detik.com%2Fpemilu%2F&ui=popup&parentURI=https:\/\/news.detik.com\/pemilu\/"};
 var mpc_qc_url = "https://connect.detik.com/api/mpc/quickcard/html?ci=3";
</script>
<div class="framebar-desktop">
 <div class="dtkframebar">
 <div class="dtkframebar__bg">
 <div class="dtkframebar__wrapper">
 <div class="dtkframebar__menu dtkframebar__clearfix pull-left">
 <a href="#" class="dtkframebar__menu__icon pull-left" id="dtkframebar-menu">
 <span></span>
 <span></span>
 <span></span>
 </a>
 <span class="dtkframebar__menu__text">MENU</span>
 </div>
 <div class="dtkframebar__menu__kanal framebarasset-lazy">
 <ul class="newlist">
 <li class="pb10">
 <a href="https://www.detik.com/?tagfrom=framebar">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detikcom">
 <img data-src="https://awscdn.detik.net.id/assets/images/framebar/favicon-detikcom.png?v=2024011905220" alt=""></span> detikcom
 </a>
 </li>
 <ul class="newlist-double">
 <li class="sub_list"><a href="https://www.detik.com/terpopuler" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_Most-3x.webp" alt="">
 </span>
 Terpopuler </a></li>
 <li class="sub_list"><a href="https://news.detik.com/kolom/kirim" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_kirim_tulisan-3x.webp" alt="">
 </span>
 Kirim Tulisan </a></li>
 <li class="sub_list"><a href="https://20.detik.com/live/" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_livetv.webp" alt="">
 </span>
 Live TV </a></li>
 <li class="sub_list"><a href="https://news.detik.com/pemilu/" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_pemilu-3x.webp" alt="">
 </span>
 detikPemilu <span class="kanal__new">NEW</span>
 </a></li>
 </ul>
 </ul>
 <div class="kat_divide">
 Kategori Berita
 </div>
 <ul class="newlist-double">
 <li>
 <a href="https://news.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_detik-3x.webp" alt=""></span> detikNews </a>
 </li>
 <li>
 <a href="https://finance.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_finance-3x.webp" alt=""></span> detikFinance </a>
 </li>
 <li>
 <a href="https://inet.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_inet-3x.webp" alt=""></span> detikInet </a>
 </li>
 <li>
 <a href="https://hot.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_hot-3x.webp" alt=""></span> detikHot </a>
 </li>
 <li>
 <a href="https://sport.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_sport-3x.webp" alt=""></span> detikSport </a>
 </li>
 <li>
 <a href="https://sport.detik.com/sepakbola" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_sepakbola-3x.webp" alt=""></span> Sepakbola </a>
 </li>
 <li>
 <a href="https://oto.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_oto-3x.webp" alt=""></span> detikOto </a>
 </li>
 <li>
 <a href="https://travel.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_travel-3x.webp" alt=""></span> detikTravel </a>
 </li>
 <li>
 <a href="https://food.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_food-3x.webp" alt=""></span> detikFood </a>
 </li>
 <li>
 <a href="https://health.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_health-3x.webp" alt=""></span> detikHealth </a>
 </li>
 <li>
 <a href="https://wolipop.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_wolipop-3x.webp" alt=""></span> Wolipop </a>
 </li>
 <li>
 <a href="https://news.detik.com/x/" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_X-3x.webp" alt=""></span> detikX </a>
 </li>
 <li>
 <a href="https://20.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_20D-3x.webp" alt=""></span> 20Detik </a>
 </li>
 <li>
 <a href="https://foto.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_foto.webp" alt=""></span> detikFoto </a>
 </li>
 <li>
 <a href="https://www.detik.com/edu/" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_edu-3x.webp" alt=""></span> detikEdu </a>
 </li>
 <li>
 <a href="https://www.detik.com/hikmah/" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_Hikmah.webp" alt=""></span> detikHikmah </a>
 </li>
 <li>
 <a href="https://www.detik.com/properti/" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/icproperti.webp" alt=""></span> detikProperti </a>
 </li>
 </ul>
 <div class="kat_divide">
 Daerah
 </div>
 <ul class="newlist-double">
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikJateng" dtr-ttl="menu hamburger" href="https://www.detik.com/jateng" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_jateng-3x.webp" alt=""></span> detikJateng </a>
 </li>
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikJatim" dtr-ttl="menu hamburger" href="https://www.detik.com/jatim" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_jatim-3x.webp" alt=""></span> detikJatim </a>
 </li>
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikJabar" dtr-ttl="menu hamburger" href="https://www.detik.com/jabar" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_jabar-3x.webp" alt=""></span> detikJabar </a>
 </li>
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikSulsel" dtr-ttl="menu hamburger" href="https://www.detik.com/sulsel" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_sulsel-2x.webp" alt=""></span> detikSulsel </a>
 </li>
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikSumut" dtr-ttl="menu hamburger" href="https://www.detik.com/sumut" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_sumut-3x.webp" alt=""></span> detikSumut </a>
 </li>
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikBali" dtr-ttl="menu hamburger" href="https://www.detik.com/bali" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/icondetikbali.webp" alt=""></span> detikBali </a>
 </li>
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikSumbagsel" dtr-ttl="menu hamburger" href="https://www.detik.com/sumbagsel" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_sumbagsel-3x.webp" alt=""></span> detikSumbagsel </a>
 </li>
 <li>
 <a dtr-evt="header" dtr-sec="" dtr-act="menu" onclick="_pt(this)" dtr-idx="detikJogja" dtr-ttl="menu hamburger" href="https://www.detik.com/jogja" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_detiknews">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_jogja.webp" alt=""></span> detikJogja <span class="kanal__new">NEW</span>
 </a>
 </li>
 </ul>
 <div class="kat_divide">
 Layanan
 </div>
 <ul class="newlist-double">
 <li>
 <a href="https://pasangmata.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_pasang_mata-3x.webp" alt=""></span> Pasang Mata </a>
 </li>
 <li>
 <a href="https://adsmart.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_adsmart-3x.webp" alt=""></span> adsmart </a>
 </li>
 <li>
 <a href="https://forum.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_forum-3x.webp" alt=""></span> Forum </a>
 </li>
 <li>
 <a href="https://event.detik.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_event-3x.webp" alt=""></span> detikEvent </a>
 </li>
 <li>
 <a href="https://www.transentertainment.com/transsnow" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_trans_snow_latest.webp" alt=""></span> Trans Snow World </a>
 </li>
 <li>
 <a href="https://www.transentertainment.com/transstudio" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_trans_studio_latest.webp" alt=""></span> Trans Studio </a>
 </li>
 <li>
 <a href="https://www.berbuatbaik.id/?utm_source=detikcom&utm_medium=framebar&utm_campaign=layanan" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/logo-berbuatbaikid.webp" alt=""></span> berbuatbaik.id </a>
 </li>
 <li>
 <a href="https://ziswafctarsa.id/" target="_blank">
 <span class="dtkframebar__menu__kanal__icon gtm_link_pasangmata">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_ziswafok.webp" alt=""></span> ziswafctarsa.id </a>
 </li>
 </ul>
 <div class="kat_divide">
 Detik Network
 </div>
 <ul class="newlist-double">
 <li>
 <a href="https://www.cnnindonesia.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_cnn-3x.webp" alt=""></span> CNN Indonesia </a>
 </li>
 <li>
 <a href="https://www.cnbcindonesia.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_CNBC-3x.webp" alt=""></span> CNBC Indonesia </a>
 </li>
 <li>
 <a href="https://www.haibunda.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_hai_bunda-3x.webp" alt=""></span> Hai Bunda </a>
 </li>
 <li>
 <a href="https://www.insertlive.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_insert-3x.webp" alt=""></span> InsertLive </a>
 </li>
 <li>
 <a href="https://www.beautynesia.id" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_beautynesia-1.webp" alt=""></span> Beautynesia </a>
 </li>
 <li>
 <a href="https://www.femaledaily.com" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_female_daily.webp" alt=""></span> Female Daily </a>
 </li>
 <li>
 <a href="https://cxomedia.id" target="_blank">
 <span class="dtkframebar__menu__kanal__icon">
 <img data-src="https://awscdn.detik.net.id/framebarasset/ic_cxo.webp" alt=""></span> CXO Media </a>
 </li>
 </ul>
 </div>
 <div class="dtkframebar__search pull-left gtm_framebardc_search">
 <div class="dtkframebar__search__input gtm_framebardc_btn_search">
 <form id="search_navbar" action="https://www.detik.com/search/searchall?">
 <input name="query" type="text" class="text" placeholder="Cari Berita" autocomplete="off">
 <input name="siteid" type="hidden" value="64">
 <button class="dtkframebar__icons dtkframebar__icons-search"></button>
 </form>
 </div>
 </div>
 <div class="dtkframebar__user pull-right">
 <div class="dtkframebar__user__login" style="border-left:none;">
 <div id="status_user_nf">
 <div class="dtkframebar__user__login__in">
 <div style="display:inline; padding-right:200px;">
 <div class="ph-item">
 <div class="ph-col-12">
 <div class="ph-row">
 <div class="ph-col-12 big" style="margin-top: 3px;margin-bottom: 0px;height: 25px;border-radius: 12px;"></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div class="dtkframebar__bg__inner"></div>
 </div>
 </div>
 </div>
</div>
<script type="text/javascript">
 var click = $("#dtkframebar-menu");
 click.click(function(e) {
 var framebarasset = document.getElementsByClassName("framebarasset-lazy");
 if(framebarasset.length != 0) {
 var imgframebarasset = framebarasset[0].querySelectorAll("[data-src]");
 for (let i = 0; i < imgframebarasset.length; i++) {
 imgframebarasset[i].setAttribute("src", imgframebarasset[i].getAttribute("data-src"));
 imgframebarasset[i].removeAttribute("data-src")
 }
 }
 });
</script>
<!--cached @ 1705616430--><!--replaced-->
<!-- S:skinner --> <!-- E:skinner --><!-- S:topframe --> <!-- E:topframe --><!-- S:prestitial --> <!-- E:prestitial -->
<header class="header">
	<div class="container">
		<div class="grid-row no-gutter flex-between">
            <div class="column-auto header__logo">
                <a href='https://news.detik.com/pemilu' dtr-evt="header pemilu" dtr-sec="logo pemilu" dtr-act="logo pemilu" onclick="_pt(this)"><img src='https://awsimages.detik.net.id/community/media/visual/2022/08/01/logo-detikpemilu.gif?d=1' title='' alt='Pemilu' class='logodetik' /></a>            </div>
			<!-- S:leaderboard --> <!-- E:leaderboard -->        </div>
    </div>
</header>

<div class="navbar-sticky-top"></div>
<div class="navbar-sticky">
    <div class="navbar-border"></div>
    <div class="container">
        <nav class="navbar-first">
            <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-ttl="logo detikcom"                href="https://www.detik.com/" class="navbar-logo">
                <img src="https://awscdn.detik.net.id/assets/images/favicon/favicon-detik-big.png?v=2024011905220" alt="">
            </a>
            <a href="https://news.detik.com/pemilu/" class="navbar-logo-kanal">
                <img src="https://awscdn.detik.net.id/pemilu2/images/animasi-logo-detikpemilu-flip.gif?v=2024011905220" width="98" height="25.82" alt="DetikPemilu">
            </a>
            <ul class="nav font-heading">
                                                    <li class="nav__item nav__item--active ">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="1" dtr-ttl="HOME"                            href="https://news.detik.com/pemilu/">
                            HOME                        </a>
                    </li>
											<!-- S:navbar --> <!-- E:navbar -->						<!-- S:navbar2 --> <!-- E:navbar2 -->					                                    <li class="nav__item  ">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="2" dtr-ttl="DETIKNEWS"                            href="https://news.detik.com">
                            DETIKNEWS                        </a>
                    </li>
					                                    <li class="nav__item  nav__item--new">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="3" dtr-ttl="Debat Pilpres"                            href="https://news.detik.com/pemilu/debat">
                            Debat Pilpres                        </a>
                    </li>
					                                    <li class="nav__item  nav__item--new">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="4" dtr-ttl="PANTAU PEMILU"                            href="https://news.detik.com/pemilu/pantau-pemilu/tokoh-pilpres">
                            PANTAU PEMILU                        </a>
                    </li>
					                                    <li class="nav__item  ">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="5" dtr-ttl="AGENDA PEMILU"                            href="https://news.detik.com/pemilu/agenda">
                            AGENDA PEMILU                        </a>
                    </li>
					                                    <li class="nav__item  ">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="6" dtr-ttl="ADU PERSPEKTIF"                            href="https://news.detik.com/pemilu/adu-perspektif">
                            ADU PERSPEKTIF                        </a>
                    </li>
					                                    <li class="nav__item  ">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="7" dtr-ttl="VIDEO"                            href="https://news.detik.com/pemilu/video">
                            VIDEO                        </a>
                    </li>
					                                    <li class="nav__item  ">
                        <a dtr-evt="header pemilu" dtr-sec="navbar" dtr-act="navbar" onclick="_pt(this)" dtr-idx="8" dtr-ttl="INDEKS"                            href="https://news.detik.com/pemilu/indeks">
                            INDEKS                        </a>
                    </li>
					                            </ul>
        </nav>
    </div>
</div>

<div class="mgb-16">
    <div class="container">
        <div class="navbar">
            <nav class="navbar-second">
                <div class="display-flex-wrap flex-center">
                    <span class="font-xxs font-heading">Topik Terpopuler :</span>
                    <ul class="nav">
 <li class="nav__item ">
 <a dtr-evt="header pemilu" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="1" dtr-ttl="demi indonesia" href="https://www.detik.com/tag/demi-indonesia">
 demi indonesia </a>
 
 </li>
 <li class="nav__item ">
 <a dtr-evt="header pemilu" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="2" dtr-ttl="anies" href="https://www.detik.com/tag/anies">
 anies </a>
 
 </li>
 <li class="nav__item ">
 <a dtr-evt="header pemilu" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="3" dtr-ttl="prabowo" href="https://www.detik.com/tag/prabowo">
 prabowo </a>
 
 </li>
 <li class="nav__item ">
 <a dtr-evt="header pemilu" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="4" dtr-ttl="ganjar" href="https://www.detik.com/tag/ganjar">
 ganjar </a>
 
 </li>
 <li class="nav__item ">
 <a dtr-evt="header pemilu" dtr-sec="second navbar" dtr-act="second navbar" onclick="_pt(this)" dtr-idx="5" dtr-ttl="survei" href="https://www.detik.com/tag/survei">
 survei </a>
 
 </li>
 </ul>
<!--cached @ 1705616430--><!--replaced-->                </div>
            </nav>
        </div>
    </div>
</div>

<script type="text/javascript" src="https://awscdn.detik.net.id/assets/js/navbar-sticky-event.js?v=2024011905220"></script>
<!-- S:billboard --><script>
 var bill_gpt = $("#div-gpt-ad-1659433103597-0");
</script>
<div id="billboard_banner" alt="billboard_wp" class="box-ads text-center">
   <div class="bb_banner">
<!-- /4905536/detik_desktop/pemilu/billboard -->
<div id='div-gpt-ad-1659433103597-0'>
  <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1659433103597-0'); });
  </script>
</div>
   </div>
</div>    <!-- E:billboard -->
<div id="notification_newsfeed" popup-notif="enable" class="notification-overlay" style="display:none">
    <span id="count_newsfeed">0</span>&nbsp;Berita Terbaru
    <a dtr-evt="updateberita" dtr-sec="update notifikasi" dtr-act="update notifikasi berita terbaru" onclick="_pt(this)"        href="https://news.detik.com/pemilu/" class="btn btn--sm btn--orange-light-1 mgl-24 mgr-12">
        <i class="icon icon-refresh"></i> UPDATE
    </a>
    <a dtr-evt="updateberita" dtr-sec="tutup notifikasi" dtr-act="tutup notifikasi berita terbaru" onclick="_pt(this)"        href="#" class="js-notification-update notification-overlay__close" >
        <i class="icon icon-close"></i>
    </a>
</div>
<script type="text/javascript">
    $(function() {
      $(".js-notification-update").click(function(e){
          e.preventDefault();
          $(this).parent(".notification-overlay").hide();
          $('#notification_newsfeed').attr('popup-notif','disable');
      });
    });
</script>

<div class="container bg-flag">
    <div class="grid-row headline-block">
        <div class="column-8">
                        
    <div class="headline">
        <article class="media media--text-overlay block-link">
            <div class="media__image">

                
                <a dtr-evt="headline pemilu" dtr-sec="artikel hl" dtr-act="artikel hl" onclick="_pt(this)" dtr-id="7149122" dtr-ttl="Cak Imin Sebut AMIN Dapat Dukungan Kiai Thoifur dan Keluarga"                    href="https://news.detik.com/pemilu/d-7149122/cak-imin-sebut-amin-dapat-dukungan-kiai-thoifur-dan-keluarga"
                    class="media__link">
                    <span class="ratiobox ratiobox--16-9 lqd">
                         <img src="https://awsimages.detik.net.id/community/media/visual/2024/01/19/anies-muhaimin-1_169.png?w=700&q=90" alt="Cak Imin Sebut AMIN Dapat Dukungan Kiai Thoifur dan Keluarga" title="Cak Imin Sebut AMIN Dapat Dukungan Kiai Thoifur dan Keluarga" class="" />                    </span>
                </a>
            </div>
            <div class="media__text">

                
                <h2 class="media__title">
                    <a dtr-evt="headline pemilu" dtr-sec="artikel hl" dtr-act="artikel hl" onclick="_pt(this)" dtr-id="7149122" dtr-ttl="Cak Imin Sebut AMIN Dapat Dukungan Kiai Thoifur dan Keluarga"                        href="https://news.detik.com/pemilu/d-7149122/cak-imin-sebut-amin-dapat-dukungan-kiai-thoifur-dan-keluarga"
                        class="media__link">
                        Cak Imin Sebut AMIN Dapat Dukungan Kiai Thoifur dan Keluarga                    </a>
                </h2>
                <div class="media__date mgt-4"><span d-time="1705609206" title="Jumat, 19 Jan 2024 03:20 WIB">2 jam yang lalu</span></div>
            </div>
        </article>
    </div>
</div>
<div class="column-4">
        <div class="berita-utama mgb-12">
        <div class="list-content">
                            <div class="list-content__item">
    <article class="media media--text-overlay media--image-radius block-link">
        <div class="media__image">
            <a dtr-evt="headline pemilu" dtr-sec="berita terkait hl" dtr-act="berita terkait" onclick="_pt(this)" dtr-idx="1" dtr-id="7149119" dtr-ttl="Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata"                href="https://news.detik.com/pemilu/d-7149119/ke-ponpes-darut-tauhid-purworejo-cak-imin-kemenangan-nampak-di-ujung-mata"
                class="media__link">
                <span class="ratiobox ratiobox--16-9 lqd">
                     <img src="https://awsimages.detik.net.id/community/media/visual/2024/01/19/anies-muhaimin_169.jpeg?w=250&q=90" alt="Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata" title="Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata" class="" />                </span>
            </a>
        </div>
        <div class="media__text">
                        <h2 class="media__title">
                <a dtr-evt="headline pemilu" dtr-sec="berita terkait hl" dtr-act="berita terkait" onclick="_pt(this)" dtr-idx="1" dtr-id="7149119" dtr-ttl="Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata"                    href="https://news.detik.com/pemilu/d-7149119/ke-ponpes-darut-tauhid-purworejo-cak-imin-kemenangan-nampak-di-ujung-mata"
                    class="media__link">
                    Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata                </a>
            </h2>
            <div class="media__date mgt-4">
                <span d-time="1705606689" title="Jumat, 19 Jan 2024 02:38 WIB">2 jam yang lalu</span>            </div>
        </div>
    </article>
</div>
                            <div class="list-content__item">
    <article class="media media--text-overlay media--image-radius block-link">
        <div class="media__image">
            <a dtr-evt="headline pemilu" dtr-sec="berita terkait hl" dtr-act="berita terkait" onclick="_pt(this)" dtr-idx="2" dtr-id="7149051" dtr-ttl="Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan"                href="https://news.detik.com/pemilu/d-7149051/silaturahmi-ke-konferensi-wali-gereja-anies-janji-akan-adil-dalam-kebijakan"
                class="media__link">
                <span class="ratiobox ratiobox--16-9 lqd">
                     <img src="https://awsimages.detik.net.id/community/media/visual/2024/01/18/anies-baswedan-bersilaturahmi-ke-konferensi-wali-gereja-indonesia-kwi-jakpus-rumondangdetikcom_169.jpeg?w=250&q=90" alt="Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan" title="Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan" class="" />                </span>
            </a>
        </div>
        <div class="media__text">
                        <h2 class="media__title">
                <a dtr-evt="headline pemilu" dtr-sec="berita terkait hl" dtr-act="berita terkait" onclick="_pt(this)" dtr-idx="2" dtr-id="7149051" dtr-ttl="Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan"                    href="https://news.detik.com/pemilu/d-7149051/silaturahmi-ke-konferensi-wali-gereja-anies-janji-akan-adil-dalam-kebijakan"
                    class="media__link">
                    Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan                </a>
            </h2>
            <div class="media__date mgt-4">
                <span d-time="1705595262" title="Kamis, 18 Jan 2024 23:27 WIB">5 jam yang lalu</span>            </div>
        </div>
    </article>
</div>
                    </div>
    </div>
    </div>
    </div>
    <div class="grid-row mgt-16 mgb-16">
        <div class="column-8">
            <div class="section nhl">
    <div class="section__header">
        <h2 class="section__title">News Feed</h2>
        <a dtr-evt="newsfeed pemilu" dtr-sec="indeksberita" dtr-act="indeks berita" onclick="_pt(this)"            href="https://news.detik.com/pemilu/indeks"
            class="font-xxs">
            Indeks Berita <i class="icon icon-chevron-right"></i>
        </a>
    </div>

    

    <div class="list-content">

                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='0'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/19/anies-muhaimin_169.jpeg'
i-info='<span d-time="1705606689" title="Jumat, 19 Jan 2024 02:38 WIB">2 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149119/ke-ponpes-darut-tauhid-purworejo-cak-imin-kemenangan-nampak-di-ujung-mata'
i-img-qs='?w=250&q=90'
i-type='artikel 1'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="1" dtr-id="7149119" dtr-ttl="Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata"                href="https://news.detik.com/pemilu/d-7149119/ke-ponpes-darut-tauhid-purworejo-cak-imin-kemenangan-nampak-di-ujung-mata" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="1" dtr-id="7149119" dtr-ttl="Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata"                    href="https://news.detik.com/pemilu/d-7149119/ke-ponpes-darut-tauhid-purworejo-cak-imin-kemenangan-nampak-di-ujung-mata" class="media__link">
                    <div class="replace_title">
                        Ke Ponpes Darut Tauhid Purworejo, Cak Imin: Kemenangan Nampak di Ujung Mata                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705606689" title="Jumat, 19 Jan 2024 02:38 WIB">2 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

                        <!-- S:newsfeed1 --> <!-- E:newsfeed1 -->            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='1'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/19/aliansi-pegiat-pemilu-app-jakarta-melaporkan-alat-peraga-kampanye-apk-tersebut-yang-terpasang-di-tempat-tempat-terlarang-seper_169.jpeg'
i-info='<span d-time="1705604807" title="Jumat, 19 Jan 2024 02:06 WIB">3 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149110/bikin-lansia-celaka-bendera-parpol-di-flyover-kuningan-diadukan-ke-bawaslu'
i-img-qs='?w=250&q=90'
i-type='artikel 2'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="2" dtr-id="7149110" dtr-ttl="Bikin Lansia Celaka, Bendera Parpol di Flyover Kuningan Diadukan ke Bawaslu"                href="https://news.detik.com/pemilu/d-7149110/bikin-lansia-celaka-bendera-parpol-di-flyover-kuningan-diadukan-ke-bawaslu" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="2" dtr-id="7149110" dtr-ttl="Bikin Lansia Celaka, Bendera Parpol di Flyover Kuningan Diadukan ke Bawaslu"                    href="https://news.detik.com/pemilu/d-7149110/bikin-lansia-celaka-bendera-parpol-di-flyover-kuningan-diadukan-ke-bawaslu" class="media__link">
                    <div class="replace_title">
                        Bikin Lansia Celaka, Bendera Parpol di Flyover Kuningan Diadukan ke Bawaslu                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705604807" title="Jumat, 19 Jan 2024 02:06 WIB">3 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='2'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/19/airlangga-hartarto-di-pontianak_169.jpeg'
i-info='<span d-time="1705601205" title="Jumat, 19 Jan 2024 01:06 WIB">4 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149091/pimpin-yel-yel-di-hadapan-kader-airlangga-sekali-putaran-hindari-kata-satu'
i-img-qs='?w=250&q=90'
i-type='artikel 3'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="3" dtr-id="7149091" dtr-ttl="Pimpin Yel-yel di Hadapan Kader, Airlangga: Sekali Putaran, Hindari Kata Satu"                href="https://news.detik.com/pemilu/d-7149091/pimpin-yel-yel-di-hadapan-kader-airlangga-sekali-putaran-hindari-kata-satu" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="3" dtr-id="7149091" dtr-ttl="Pimpin Yel-yel di Hadapan Kader, Airlangga: Sekali Putaran, Hindari Kata Satu"                    href="https://news.detik.com/pemilu/d-7149091/pimpin-yel-yel-di-hadapan-kader-airlangga-sekali-putaran-hindari-kata-satu" class="media__link">
                    <div class="replace_title">
                        Pimpin Yel-yel di Hadapan Kader, Airlangga: Sekali Putaran, Hindari Kata Satu                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705601205" title="Jumat, 19 Jan 2024 01:06 WIB">4 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
                        <div d-widget="kabar_dari_daerah" d-params=""><div class="dwidget_desktop ph-horizontal"><div class="ph-item"><div class="ph-col-4"><div class="ph-picture"></div></div><div><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8"></div><div class="ph-col-4 empty"></div></div></div></div><div class="ph-item"><div class="ph-col-4"><div class="ph-picture"></div></div><div><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8"></div><div class="ph-col-4 empty"></div></div></div></div><div class="ph-item"><div class="ph-col-4"><div class="ph-picture"></div></div><div><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8"></div><div class="ph-col-4 empty"></div></div></div></div></div><img style="display:none" /></div>
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='3'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/19/wakil-komandan-tim-kampanye-nasional-tkn-fanta-bidang-pemilih-muda-sona-maesana_169.jpeg'
i-info='<span d-time="1705598005" title="Jumat, 19 Jan 2024 00:13 WIB">5 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149076/cari-yang-lanjutkan-program-jokowi-relawan-gpn-08-dukung-prabowo-gibran'
i-img-qs='?w=250&q=90'
i-type='artikel 4'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="4" dtr-id="7149076" dtr-ttl="Cari yang Lanjutkan Program Jokowi, Relawan GPN 08 Dukung Prabowo-Gibran"                href="https://news.detik.com/pemilu/d-7149076/cari-yang-lanjutkan-program-jokowi-relawan-gpn-08-dukung-prabowo-gibran" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="4" dtr-id="7149076" dtr-ttl="Cari yang Lanjutkan Program Jokowi, Relawan GPN 08 Dukung Prabowo-Gibran"                    href="https://news.detik.com/pemilu/d-7149076/cari-yang-lanjutkan-program-jokowi-relawan-gpn-08-dukung-prabowo-gibran" class="media__link">
                    <div class="replace_title">
                        Cari yang Lanjutkan Program Jokowi, Relawan GPN 08 Dukung Prabowo-Gibran                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705598005" title="Jumat, 19 Jan 2024 00:13 WIB">5 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='4'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/ganjar-pranowo_169.jpeg'
i-info='<span d-time="1705597340" title="Jumat, 19 Jan 2024 00:02 WIB">5 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149073/dapat-keluhan-soal-subsidi-pupuk-ganjar-tawarkan-solusi-lewat-ktp-sakti'
i-img-qs='?w=250&q=90'
i-type='artikel 5'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="5" dtr-id="7149073" dtr-ttl="Dapat Keluhan soal Subsidi Pupuk, Ganjar Tawarkan Solusi Lewat KTP Sakti"                href="https://news.detik.com/pemilu/d-7149073/dapat-keluhan-soal-subsidi-pupuk-ganjar-tawarkan-solusi-lewat-ktp-sakti" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="5" dtr-id="7149073" dtr-ttl="Dapat Keluhan soal Subsidi Pupuk, Ganjar Tawarkan Solusi Lewat KTP Sakti"                    href="https://news.detik.com/pemilu/d-7149073/dapat-keluhan-soal-subsidi-pupuk-ganjar-tawarkan-solusi-lewat-ktp-sakti" class="media__link">
                    <div class="replace_title">
                        Dapat Keluhan soal Subsidi Pupuk, Ganjar Tawarkan Solusi Lewat KTP Sakti                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705597340" title="Jumat, 19 Jan 2024 00:02 WIB">5 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='5'
i-img='https://awsimages.detik.net.id/community/media/visual/2023/12/23/ketum-golkar-airlangga-hartarto_169.jpeg'
i-info='<span d-time="1705597044" title="Kamis, 18 Jan 2024 23:57 WIB">5 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149071/airlangga-ungkap-kampanye-terakhir-golkar-akan-digelar-di-ikn'
i-img-qs='?w=250&q=90'
i-type='artikel 6'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="6" dtr-id="7149071" dtr-ttl="Airlangga Ungkap Kampanye Terakhir Golkar Akan Digelar di IKN"                href="https://news.detik.com/pemilu/d-7149071/airlangga-ungkap-kampanye-terakhir-golkar-akan-digelar-di-ikn" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="6" dtr-id="7149071" dtr-ttl="Airlangga Ungkap Kampanye Terakhir Golkar Akan Digelar di IKN"                    href="https://news.detik.com/pemilu/d-7149071/airlangga-ungkap-kampanye-terakhir-golkar-akan-digelar-di-ikn" class="media__link">
                    <div class="replace_title">
                        Airlangga Ungkap Kampanye Terakhir Golkar Akan Digelar di IKN                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705597044" title="Kamis, 18 Jan 2024 23:57 WIB">5 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='6'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/sejumlah-notaris-dan-ppat-mendeklarasikan-dukungan-untuk-anies-baswedan-dan-muhaimin-iskandar-cak-imin-dwi-rahmawatidetikcom_169.jpeg'
i-info='<span d-time="1705596367" title="Kamis, 18 Jan 2024 23:46 WIB">5 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149065/terima-dukungan-dari-notaris-dan-ppat-np3ba-timnas-amin-ajak-jaga-tps'
i-img-qs='?w=250&q=90'
i-type='artikel 7'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="7" dtr-id="7149065" dtr-ttl="Terima Dukungan dari Notaris dan PPAT NP3BA, Timnas AMIN Ajak Jaga TPS"                href="https://news.detik.com/pemilu/d-7149065/terima-dukungan-dari-notaris-dan-ppat-np3ba-timnas-amin-ajak-jaga-tps" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="7" dtr-id="7149065" dtr-ttl="Terima Dukungan dari Notaris dan PPAT NP3BA, Timnas AMIN Ajak Jaga TPS"                    href="https://news.detik.com/pemilu/d-7149065/terima-dukungan-dari-notaris-dan-ppat-np3ba-timnas-amin-ajak-jaga-tps" class="media__link">
                    <div class="replace_title">
                        Terima Dukungan dari Notaris dan PPAT NP3BA, Timnas AMIN Ajak Jaga TPS                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705596367" title="Kamis, 18 Jan 2024 23:46 WIB">5 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

                            <!-- S:center1 --><!-- E:center1 -->                <!-- S:parallax1 --><!-- E:parallax1 -->            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='7'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/reaksi-ganjar-pranowo-saat-balihonya-dicoret-ndasmu_169.jpeg'
i-info='<span d-time="1705595769" title="Kamis, 18 Jan 2024 23:36 WIB">5 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149056/sri-mulyani-disebut-siap-mundur-dari-kabinet-ganjar-saya-kurang-tahu'
i-img-qs='?w=250&q=90'
i-type='artikel 8'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="8" dtr-id="7149056" dtr-ttl="Sri Mulyani Disebut Siap Mundur dari Kabinet, Ganjar: Saya Kurang Tahu"                href="https://news.detik.com/pemilu/d-7149056/sri-mulyani-disebut-siap-mundur-dari-kabinet-ganjar-saya-kurang-tahu" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="8" dtr-id="7149056" dtr-ttl="Sri Mulyani Disebut Siap Mundur dari Kabinet, Ganjar: Saya Kurang Tahu"                    href="https://news.detik.com/pemilu/d-7149056/sri-mulyani-disebut-siap-mundur-dari-kabinet-ganjar-saya-kurang-tahu" class="media__link">
                    <div class="replace_title">
                        Sri Mulyani Disebut Siap Mundur dari Kabinet, Ganjar: Saya Kurang Tahu                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705595769" title="Kamis, 18 Jan 2024 23:36 WIB">5 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
                            <!-- S:newsfeed2 --> <!-- E:newsfeed2 -->            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='8'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/anies-baswedan-bersilaturahmi-ke-konferensi-wali-gereja-indonesia-kwi-jakpus-rumondangdetikcom_169.jpeg'
i-info='<span d-time="1705595262" title="Kamis, 18 Jan 2024 23:27 WIB">5 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149051/silaturahmi-ke-konferensi-wali-gereja-anies-janji-akan-adil-dalam-kebijakan'
i-img-qs='?w=250&q=90'
i-type='artikel 9'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="9" dtr-id="7149051" dtr-ttl="Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan"                href="https://news.detik.com/pemilu/d-7149051/silaturahmi-ke-konferensi-wali-gereja-anies-janji-akan-adil-dalam-kebijakan" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="9" dtr-id="7149051" dtr-ttl="Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan"                    href="https://news.detik.com/pemilu/d-7149051/silaturahmi-ke-konferensi-wali-gereja-anies-janji-akan-adil-dalam-kebijakan" class="media__link">
                    <div class="replace_title">
                        Silaturahmi ke Konferensi Wali Gereja, Anies Janji Akan Adil dalam Kebijakan                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705595262" title="Kamis, 18 Jan 2024 23:27 WIB">5 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='9'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/ganjar-pranowo_169.jpeg'
i-info='<span d-time="1705593774" title="Kamis, 18 Jan 2024 23:02 WIB">6 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149046/ganjar-sebut-permasalahan-pupuk-akan-dibahas-mahfud-di-debat-keempat'
i-img-qs='?w=250&q=90'
i-type='artikel 10'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="10" dtr-id="7149046" dtr-ttl="Ganjar Sebut Permasalahan Pupuk Akan Dibahas Mahfud di Debat Keempat"                href="https://news.detik.com/pemilu/d-7149046/ganjar-sebut-permasalahan-pupuk-akan-dibahas-mahfud-di-debat-keempat" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="10" dtr-id="7149046" dtr-ttl="Ganjar Sebut Permasalahan Pupuk Akan Dibahas Mahfud di Debat Keempat"                    href="https://news.detik.com/pemilu/d-7149046/ganjar-sebut-permasalahan-pupuk-akan-dibahas-mahfud-di-debat-keempat" class="media__link">
                    <div class="replace_title">
                        Ganjar Sebut Permasalahan Pupuk Akan Dibahas Mahfud di Debat Keempat                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705593774" title="Kamis, 18 Jan 2024 23:02 WIB">6 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='10'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/11/siti-atikoh_169.jpeg'
i-info='<span d-time="1705591374" title="Kamis, 18 Jan 2024 22:22 WIB">6 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7149029/pemprov-sulut-bantah-kerahkan-dharma-wanita-saat-istri-ganjar-ke-manado'
i-img-qs='?w=250&q=90'
i-type='artikel 11'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="11" dtr-id="7149029" dtr-ttl="Pemprov Sulut Bantah Kerahkan Dharma Wanita saat Istri Ganjar ke Manado"                href="https://news.detik.com/pemilu/d-7149029/pemprov-sulut-bantah-kerahkan-dharma-wanita-saat-istri-ganjar-ke-manado" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="11" dtr-id="7149029" dtr-ttl="Pemprov Sulut Bantah Kerahkan Dharma Wanita saat Istri Ganjar ke Manado"                    href="https://news.detik.com/pemilu/d-7149029/pemprov-sulut-bantah-kerahkan-dharma-wanita-saat-istri-ganjar-ke-manado" class="media__link">
                    <div class="replace_title">
                        Pemprov Sulut Bantah Kerahkan Dharma Wanita saat Istri Ganjar ke Manado                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705591374" title="Kamis, 18 Jan 2024 22:22 WIB">6 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
                            <!-- S:center2 --><!-- E:center2 -->            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='11'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/12/anies-baswedan-tiba-di-tapteng-sumut-dwidetikcom_169.jpeg'
i-info='<span d-time="1705588617" title="Kamis, 18 Jan 2024 21:36 WIB">7 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148993/anies-soal-isu-wadas-harus-duduk-bersama-proses-negosiasi-panjang'
i-img-qs='?w=250&q=90'
i-type='artikel 12'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="12" dtr-id="7148993" dtr-ttl="Anies soal Isu Wadas: Harus Duduk Bersama, Proses Negosiasi Panjang"                href="https://news.detik.com/pemilu/d-7148993/anies-soal-isu-wadas-harus-duduk-bersama-proses-negosiasi-panjang" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="12" dtr-id="7148993" dtr-ttl="Anies soal Isu Wadas: Harus Duduk Bersama, Proses Negosiasi Panjang"                    href="https://news.detik.com/pemilu/d-7148993/anies-soal-isu-wadas-harus-duduk-bersama-proses-negosiasi-panjang" class="media__link">
                    <div class="replace_title">
                        Anies soal Isu Wadas: Harus Duduk Bersama, Proses Negosiasi Panjang                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705588617" title="Kamis, 18 Jan 2024 21:36 WIB">7 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='12'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/12/pemilu-makin-dekat-intip-kesibukan-di-gudang-logistik-kpu-kota-tangsel_169.jpeg'
i-info='<span d-time="1705588593" title="Kamis, 18 Jan 2024 21:36 WIB">7 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148992/ppln-kuala-lumpur-bantah-intimidasi-wni-tak-terdaftar-di-dpt-pemilu-2024'
i-img-qs='?w=250&q=90'
i-type='artikel 13'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="13" dtr-id="7148992" dtr-ttl="PPLN Kuala Lumpur Bantah Intimidasi WNI Tak Terdaftar di DPT Pemilu 2024"                href="https://news.detik.com/pemilu/d-7148992/ppln-kuala-lumpur-bantah-intimidasi-wni-tak-terdaftar-di-dpt-pemilu-2024" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="13" dtr-id="7148992" dtr-ttl="PPLN Kuala Lumpur Bantah Intimidasi WNI Tak Terdaftar di DPT Pemilu 2024"                    href="https://news.detik.com/pemilu/d-7148992/ppln-kuala-lumpur-bantah-intimidasi-wni-tak-terdaftar-di-dpt-pemilu-2024" class="media__link">
                    <div class="replace_title">
                        PPLN Kuala Lumpur Bantah Intimidasi WNI Tak Terdaftar di DPT Pemilu 2024                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705588593" title="Kamis, 18 Jan 2024 21:36 WIB">7 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='13'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/survei-ipe.jpeg'
i-info='<span d-time="1705587990" title="Kamis, 18 Jan 2024 21:26 WIB">7 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148983/survei-ipe-elektabilitas-ganjar-teratas-naik-ungguli-prabowo-anies'
i-img-qs='?w=250&q=90'
i-type='artikel 14'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="14" dtr-id="7148983" dtr-ttl="Survei IPE: Elektabilitas Ganjar Teratas Naik Ungguli Prabowo &amp; Anies"                href="https://news.detik.com/pemilu/d-7148983/survei-ipe-elektabilitas-ganjar-teratas-naik-ungguli-prabowo-anies" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="14" dtr-id="7148983" dtr-ttl="Survei IPE: Elektabilitas Ganjar Teratas Naik Ungguli Prabowo &amp; Anies"                    href="https://news.detik.com/pemilu/d-7148983/survei-ipe-elektabilitas-ganjar-teratas-naik-ungguli-prabowo-anies" class="media__link">
                    <div class="replace_title">
                        Survei IPE: Elektabilitas Ganjar Teratas Naik Ungguli Prabowo & Anies                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705587990" title="Kamis, 18 Jan 2024 21:26 WIB">7 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='14'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/06/wakil-ketua-dewan-pakar-tim-kampanye-nasional-tkn-prabowo-subianto-gibran-rakabuming-raka-budiman-sudjatmiko-saat-di-purwokert-1.jpeg'
i-info='<span d-time="1705587042" title="Kamis, 18 Jan 2024 21:10 WIB">8 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148972/budiman-sudjatmiko-dorong-warga-desa-jadi-pengelola-industri-pertanian'
i-img-qs='?w=250&q=90'
i-type='artikel 15'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="15" dtr-id="7148972" dtr-ttl="Budiman Sudjatmiko Dorong Warga Desa Jadi Pengelola Industri Pertanian"                href="https://news.detik.com/pemilu/d-7148972/budiman-sudjatmiko-dorong-warga-desa-jadi-pengelola-industri-pertanian" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="15" dtr-id="7148972" dtr-ttl="Budiman Sudjatmiko Dorong Warga Desa Jadi Pengelola Industri Pertanian"                    href="https://news.detik.com/pemilu/d-7148972/budiman-sudjatmiko-dorong-warga-desa-jadi-pengelola-industri-pertanian" class="media__link">
                    <div class="replace_title">
                        Budiman Sudjatmiko Dorong Warga Desa Jadi Pengelola Industri Pertanian                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705587042" title="Kamis, 18 Jan 2024 21:10 WIB">8 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
                            <!-- S:center3 --><!-- E:center3 -->            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='15'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/17/capres-nomor-urut-1-anies-baswedan-saat-kampanye-di-bone-sulsel-1_169.jpeg'
i-info='<span d-time="1705586551" title="Kamis, 18 Jan 2024 21:02 WIB">8 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148969/pilih-jis-jadi-lokasi-kampanye-akbar-anies-simbol-keringat-anak-indonesia'
i-img-qs='?w=250&q=90'
i-type='artikel 16'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="16" dtr-id="7148969" dtr-ttl="Pilih JIS Jadi Lokasi Kampanye Akbar, Anies: Simbol Keringat Anak Indonesia"                href="https://news.detik.com/pemilu/d-7148969/pilih-jis-jadi-lokasi-kampanye-akbar-anies-simbol-keringat-anak-indonesia" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="16" dtr-id="7148969" dtr-ttl="Pilih JIS Jadi Lokasi Kampanye Akbar, Anies: Simbol Keringat Anak Indonesia"                    href="https://news.detik.com/pemilu/d-7148969/pilih-jis-jadi-lokasi-kampanye-akbar-anies-simbol-keringat-anak-indonesia" class="media__link">
                    <div class="replace_title">
                        Pilih JIS Jadi Lokasi Kampanye Akbar, Anies: Simbol Keringat Anak Indonesia                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705586551" title="Kamis, 18 Jan 2024 21:02 WIB">8 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='16'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/leo-alfian-lintang-selaku-kabid-organisasi-abj_169.jpeg'
i-info='<span d-time="1705586339" title="Kamis, 18 Jan 2024 20:58 WIB">8 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148966/ke-bawaslu-relawan-jokowi-persoalkan-dugaan-sekda-kerahkan-massa-kampanye'
i-img-qs='?w=250&q=90'
i-type='artikel 17'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="17" dtr-id="7148966" dtr-ttl="Ke Bawaslu, Relawan Jokowi Persoalkan Dugaan Sekda Kerahkan Massa Kampanye"                href="https://news.detik.com/pemilu/d-7148966/ke-bawaslu-relawan-jokowi-persoalkan-dugaan-sekda-kerahkan-massa-kampanye" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="17" dtr-id="7148966" dtr-ttl="Ke Bawaslu, Relawan Jokowi Persoalkan Dugaan Sekda Kerahkan Massa Kampanye"                    href="https://news.detik.com/pemilu/d-7148966/ke-bawaslu-relawan-jokowi-persoalkan-dugaan-sekda-kerahkan-massa-kampanye" class="media__link">
                    <div class="replace_title">
                        Ke Bawaslu, Relawan Jokowi Persoalkan Dugaan Sekda Kerahkan Massa Kampanye                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705586339" title="Kamis, 18 Jan 2024 20:58 WIB">8 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='17'
i-img='https://awsimages.detik.net.id/community/media/visual/2023/12/06/ketua-komisi-iv-dpr-ri-budisatrio-djiwandono_169.jpeg'
i-info='<span d-time="1705586122" title="Kamis, 18 Jan 2024 20:55 WIB">8 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148961/tkn-ungkap-jurus-prabowo-gibran-kejar-target-nol-emisi-karbon'
i-img-qs='?w=250&q=90'
i-type='artikel 18'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="18" dtr-id="7148961" dtr-ttl="TKN Ungkap Jurus Prabowo-Gibran Kejar Target Nol Emisi Karbon"                href="https://news.detik.com/pemilu/d-7148961/tkn-ungkap-jurus-prabowo-gibran-kejar-target-nol-emisi-karbon" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="18" dtr-id="7148961" dtr-ttl="TKN Ungkap Jurus Prabowo-Gibran Kejar Target Nol Emisi Karbon"                    href="https://news.detik.com/pemilu/d-7148961/tkn-ungkap-jurus-prabowo-gibran-kejar-target-nol-emisi-karbon" class="media__link">
                    <div class="replace_title">
                        TKN Ungkap Jurus Prabowo-Gibran Kejar Target Nol Emisi Karbon                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705586122" title="Kamis, 18 Jan 2024 20:55 WIB">8 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
                            <!-- S:parallax2 --><!-- E:parallax2 -->            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='18'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/17/capres-nomor-urut-1-anies-baswedan-saat-kampanye-di-bone-sulsel-2_169.jpeg'
i-info='<span d-time="1705585304" title="Kamis, 18 Jan 2024 20:41 WIB">8 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148948/anies-ogah-tanggapi-imbauan-gus-ipul-tak-pilih-capres-yang-didukung-baasyir'
i-img-qs='?w=250&q=90'
i-type='artikel 19'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="19" dtr-id="7148948" dtr-ttl="Anies Ogah Tanggapi Imbauan Gus Ipul Tak Pilih Capres Yang Didukung Ba&#039;asyir"                href="https://news.detik.com/pemilu/d-7148948/anies-ogah-tanggapi-imbauan-gus-ipul-tak-pilih-capres-yang-didukung-baasyir" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="19" dtr-id="7148948" dtr-ttl="Anies Ogah Tanggapi Imbauan Gus Ipul Tak Pilih Capres Yang Didukung Ba&#039;asyir"                    href="https://news.detik.com/pemilu/d-7148948/anies-ogah-tanggapi-imbauan-gus-ipul-tak-pilih-capres-yang-didukung-baasyir" class="media__link">
                    <div class="replace_title">
                        Anies Ogah Tanggapi Imbauan Gus Ipul Tak Pilih Capres Yang Didukung Ba'asyir                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705585304" title="Kamis, 18 Jan 2024 20:41 WIB">8 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='19'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/17/capres-nomor-urut-1-anies-baswedan-saat-kampanye-di-bone-sulsel-4_169.jpeg'
i-info='<span d-time="1705584268" title="Kamis, 18 Jan 2024 20:24 WIB">8 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148916/ini-yang-dibicarakan-anies-ke-warga-kampung-bayam-saat-acara-desak-anies'
i-img-qs='?w=250&q=90'
i-type='artikel 20'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="20" dtr-id="7148916" dtr-ttl="Ini yang Dibicarakan Anies ke Warga Kampung Bayam saat Acara Desak Anies"                href="https://news.detik.com/pemilu/d-7148916/ini-yang-dibicarakan-anies-ke-warga-kampung-bayam-saat-acara-desak-anies" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="20" dtr-id="7148916" dtr-ttl="Ini yang Dibicarakan Anies ke Warga Kampung Bayam saat Acara Desak Anies"                    href="https://news.detik.com/pemilu/d-7148916/ini-yang-dibicarakan-anies-ke-warga-kampung-bayam-saat-acara-desak-anies" class="media__link">
                    <div class="replace_title">
                        Ini yang Dibicarakan Anies ke Warga Kampung Bayam saat Acara Desak Anies                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705584268" title="Kamis, 18 Jan 2024 20:24 WIB">8 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='20'
i-img='https://awsimages.detik.net.id/community/media/visual/2019/04/11/41ad2f04-ec70-474c-9617-e5e840e930e9_169.jpeg'
i-info='<span d-time="1705583004" title="Kamis, 18 Jan 2024 20:03 WIB">9 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148885/janji-parpol-di-dki-rapikan-bendera-yang-bikin-penuh-flyover'
i-img-qs='?w=250&q=90'
i-type='artikel 21'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="21" dtr-id="7148885" dtr-ttl="Janji Parpol di DKI Rapikan Bendera yang Bikin Penuh Flyover"                href="https://news.detik.com/pemilu/d-7148885/janji-parpol-di-dki-rapikan-bendera-yang-bikin-penuh-flyover" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="21" dtr-id="7148885" dtr-ttl="Janji Parpol di DKI Rapikan Bendera yang Bikin Penuh Flyover"                    href="https://news.detik.com/pemilu/d-7148885/janji-parpol-di-dki-rapikan-bendera-yang-bikin-penuh-flyover" class="media__link">
                    <div class="replace_title">
                        Janji Parpol di DKI Rapikan Bendera yang Bikin Penuh Flyover                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705583004" title="Kamis, 18 Jan 2024 20:03 WIB">9 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='21'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/relawan-pasukan-pendukung-pandu-02-prabowo-gibran-mendeklarasikan-dukungan-kepada-paslon-nomor-urut-02-itu-di-pilpres-2024-fir_169.jpeg'
i-info='<span d-time="1705582596" title="Kamis, 18 Jan 2024 19:56 WIB">9 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148862/relawan-pandu-02-deklarasi-dukung-prabowo-gibran-di-kertanegara'
i-img-qs='?w=250&q=90'
i-type='artikel 22'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="22" dtr-id="7148862" dtr-ttl="Relawan Pandu 02 Deklarasi Dukung Prabowo-Gibran di Kertanegara"                href="https://news.detik.com/pemilu/d-7148862/relawan-pandu-02-deklarasi-dukung-prabowo-gibran-di-kertanegara" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="22" dtr-id="7148862" dtr-ttl="Relawan Pandu 02 Deklarasi Dukung Prabowo-Gibran di Kertanegara"                    href="https://news.detik.com/pemilu/d-7148862/relawan-pandu-02-deklarasi-dukung-prabowo-gibran-di-kertanegara" class="media__link">
                    <div class="replace_title">
                        Relawan Pandu 02 Deklarasi Dukung Prabowo-Gibran di Kertanegara                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705582596" title="Kamis, 18 Jan 2024 19:56 WIB">9 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='22'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/relawan-bergerak-1912_169.jpeg'
i-info='<span d-time="1705580602" title="Kamis, 18 Jan 2024 19:23 WIB">9 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148810/relawan-bergerak-1912-papua-barat-daya-deklarasi-dukung-prabowo-gibran'
i-img-qs='?w=250&q=90'
i-type='artikel 23'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="23" dtr-id="7148810" dtr-ttl="Relawan Bergerak 1912 Papua Barat Daya Deklarasi Dukung Prabowo-Gibran"                href="https://news.detik.com/pemilu/d-7148810/relawan-bergerak-1912-papua-barat-daya-deklarasi-dukung-prabowo-gibran" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="23" dtr-id="7148810" dtr-ttl="Relawan Bergerak 1912 Papua Barat Daya Deklarasi Dukung Prabowo-Gibran"                    href="https://news.detik.com/pemilu/d-7148810/relawan-bergerak-1912-papua-barat-daya-deklarasi-dukung-prabowo-gibran" class="media__link">
                    <div class="replace_title">
                        Relawan Bergerak 1912 Papua Barat Daya Deklarasi Dukung Prabowo-Gibran                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705580602" title="Kamis, 18 Jan 2024 19:23 WIB">9 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='23'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/15/penuhi-undangan-erick-prabowo-hadiri-perayaan-natal-kementerian-bumn_169.jpeg'
i-info='<span d-time="1705580506" title="Kamis, 18 Jan 2024 19:21 WIB">10 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148795/tkn-fanta-nilai-tak-ada-pelanggaran-pemilu-prabowo-hadiri-natal-bersama-bumn'
i-img-qs='?w=250&q=90'
i-type='artikel 24'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="24" dtr-id="7148795" dtr-ttl="TKN Fanta Nilai Tak Ada Pelanggaran Pemilu Prabowo Hadiri Natal Bersama BUMN"                href="https://news.detik.com/pemilu/d-7148795/tkn-fanta-nilai-tak-ada-pelanggaran-pemilu-prabowo-hadiri-natal-bersama-bumn" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="24" dtr-id="7148795" dtr-ttl="TKN Fanta Nilai Tak Ada Pelanggaran Pemilu Prabowo Hadiri Natal Bersama BUMN"                    href="https://news.detik.com/pemilu/d-7148795/tkn-fanta-nilai-tak-ada-pelanggaran-pemilu-prabowo-hadiri-natal-bersama-bumn" class="media__link">
                    <div class="replace_title">
                        TKN Fanta Nilai Tak Ada Pelanggaran Pemilu Prabowo Hadiri Natal Bersama BUMN                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705580506" title="Kamis, 18 Jan 2024 19:21 WIB">10 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
                            <!-- S:newsfeed3 --><!-- E:newsfeed3 -->            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='24'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/acara-desak-anies-di-hallf-patiunus-kebayoran-baru-jaksel-dwi-rdetikcom_169.jpeg'
i-info='<span d-time="1705579485" title="Kamis, 18 Jan 2024 19:04 WIB">10 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148770/diminta-nilai-kinerja-kementerian-lhk-begini-respons-anies'
i-img-qs='?w=250&q=90'
i-type='artikel 25'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="25" dtr-id="7148770" dtr-ttl="Diminta Nilai Kinerja Kementerian LHK, Begini Respons Anies"                href="https://news.detik.com/pemilu/d-7148770/diminta-nilai-kinerja-kementerian-lhk-begini-respons-anies" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="25" dtr-id="7148770" dtr-ttl="Diminta Nilai Kinerja Kementerian LHK, Begini Respons Anies"                    href="https://news.detik.com/pemilu/d-7148770/diminta-nilai-kinerja-kementerian-lhk-begini-respons-anies" class="media__link">
                    <div class="replace_title">
                        Diminta Nilai Kinerja Kementerian LHK, Begini Respons Anies                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705579485" title="Kamis, 18 Jan 2024 19:04 WIB">10 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='25'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/06/menteri-koordinator-menko-bidang-perekonomian-airlangga-hartarto-brigitta-beliadetikcom_169.jpeg'
i-info='<span d-time="1705579393" title="Kamis, 18 Jan 2024 19:03 WIB">10 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148756/airlangga-gibran-siap-debat-cawapres-kedua-sudah-ada-tim-yang-briefing'
i-img-qs='?w=250&q=90'
i-type='artikel 26'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="26" dtr-id="7148756" dtr-ttl="Airlangga: Gibran Siap Debat Cawapres Kedua, Sudah Ada Tim yang Briefing"                href="https://news.detik.com/pemilu/d-7148756/airlangga-gibran-siap-debat-cawapres-kedua-sudah-ada-tim-yang-briefing" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="26" dtr-id="7148756" dtr-ttl="Airlangga: Gibran Siap Debat Cawapres Kedua, Sudah Ada Tim yang Briefing"                    href="https://news.detik.com/pemilu/d-7148756/airlangga-gibran-siap-debat-cawapres-kedua-sudah-ada-tim-yang-briefing" class="media__link">
                    <div class="replace_title">
                        Airlangga: Gibran Siap Debat Cawapres Kedua, Sudah Ada Tim yang Briefing                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705579393" title="Kamis, 18 Jan 2024 19:03 WIB">10 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='26'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/17/dipasang-sembarangan-bendera-parpol-rusak-estetika-kota-3_169.jpeg'
i-info='<span d-time="1705577533" title="Kamis, 18 Jan 2024 18:32 WIB">10 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148679/satpol-pp-dki-sebut-pasang-alat-kampanye-di-flyover-langgar-aturan-kpu'
i-img-qs='?w=250&q=90'
i-type='artikel 27'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="27" dtr-id="7148679" dtr-ttl="Satpol PP DKI Sebut Pasang Alat Kampanye di Flyover Langgar Aturan KPU"                href="https://news.detik.com/pemilu/d-7148679/satpol-pp-dki-sebut-pasang-alat-kampanye-di-flyover-langgar-aturan-kpu" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="27" dtr-id="7148679" dtr-ttl="Satpol PP DKI Sebut Pasang Alat Kampanye di Flyover Langgar Aturan KPU"                    href="https://news.detik.com/pemilu/d-7148679/satpol-pp-dki-sebut-pasang-alat-kampanye-di-flyover-langgar-aturan-kpu" class="media__link">
                    <div class="replace_title">
                        Satpol PP DKI Sebut Pasang Alat Kampanye di Flyover Langgar Aturan KPU                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705577533" title="Kamis, 18 Jan 2024 18:32 WIB">10 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='27'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/ketua-umum-partai-golkar-airlangga-hartarto_169.jpeg'
i-info='<span d-time="1705577355" title="Kamis, 18 Jan 2024 18:29 WIB">10 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148667/konsolidasi-di-kalbar-airlangga-tekankan-prabowo-gibran-menang-1-putaran'
i-img-qs='?w=250&q=90'
i-type='artikel 28'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="28" dtr-id="7148667" dtr-ttl="Konsolidasi di Kalbar, Airlangga Tekankan Prabowo-Gibran Menang 1 Putaran"                href="https://news.detik.com/pemilu/d-7148667/konsolidasi-di-kalbar-airlangga-tekankan-prabowo-gibran-menang-1-putaran" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="28" dtr-id="7148667" dtr-ttl="Konsolidasi di Kalbar, Airlangga Tekankan Prabowo-Gibran Menang 1 Putaran"                    href="https://news.detik.com/pemilu/d-7148667/konsolidasi-di-kalbar-airlangga-tekankan-prabowo-gibran-menang-1-putaran" class="media__link">
                    <div class="replace_title">
                        Konsolidasi di Kalbar, Airlangga Tekankan Prabowo-Gibran Menang 1 Putaran                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705577355" title="Kamis, 18 Jan 2024 18:29 WIB">10 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
                            <!-- S:newsfeed4 --><!-- E:newsfeed4 -->            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='28'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/relawan-baraya-gemoy-mendeklarasikan-dukungan-kepada-paslon-nomor-urut-02-prabowo-gibran-firdadetikcom_169.jpeg'
i-info='<span d-time="1705576813" title="Kamis, 18 Jan 2024 18:20 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148662/relawan-baraya-gemoy-dukung-prabowo-gibran-harap-perluas-lapangan-kerja'
i-img-qs='?w=250&q=90'
i-type='artikel 29'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="29" dtr-id="7148662" dtr-ttl="Relawan Baraya Gemoy Dukung Prabowo-Gibran, Harap Perluas Lapangan Kerja"                href="https://news.detik.com/pemilu/d-7148662/relawan-baraya-gemoy-dukung-prabowo-gibran-harap-perluas-lapangan-kerja" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="29" dtr-id="7148662" dtr-ttl="Relawan Baraya Gemoy Dukung Prabowo-Gibran, Harap Perluas Lapangan Kerja"                    href="https://news.detik.com/pemilu/d-7148662/relawan-baraya-gemoy-dukung-prabowo-gibran-harap-perluas-lapangan-kerja" class="media__link">
                    <div class="replace_title">
                        Relawan Baraya Gemoy Dukung Prabowo-Gibran, Harap Perluas Lapangan Kerja                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705576813" title="Kamis, 18 Jan 2024 18:20 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='29'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/ganjar-pranowo-dialog-dengan-warga-di-ngawi-jawa-tengah_169.jpeg'
i-info='<span d-time="1705576776" title="Kamis, 18 Jan 2024 18:19 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148660/dialog-dengan-warga-ngawi-soal-stunting-ganjar-jangan-nikah-muda'
i-img-qs='?w=250&q=90'
i-type='artikel 30'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="30" dtr-id="7148660" dtr-ttl="Dialog dengan Warga Ngawi soal Stunting, Ganjar: Jangan Nikah Muda"                href="https://news.detik.com/pemilu/d-7148660/dialog-dengan-warga-ngawi-soal-stunting-ganjar-jangan-nikah-muda" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="30" dtr-id="7148660" dtr-ttl="Dialog dengan Warga Ngawi soal Stunting, Ganjar: Jangan Nikah Muda"                    href="https://news.detik.com/pemilu/d-7148660/dialog-dengan-warga-ngawi-soal-stunting-ganjar-jangan-nikah-muda" class="media__link">
                    <div class="replace_title">
                        Dialog dengan Warga Ngawi soal Stunting, Ganjar: Jangan Nikah Muda                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705576776" title="Kamis, 18 Jan 2024 18:19 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='30'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/menteri-pertahanan-menhan-prabowo-subianto-di-lapangan-kridosono-kabupaten-blora-kamis-1812024-1_169.jpeg'
i-info='<span d-time="1705576396" title="Kamis, 18 Jan 2024 18:13 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148645/massa-minta-joget-prabowo-tidak-ada-band-maka-saya-tidak-joget'
i-img-qs='?w=250&q=90'
i-type='artikel 31'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="31" dtr-id="7148645" dtr-ttl="Massa Minta Joget, Prabowo: Tidak Ada Band Maka Saya Tidak Joget"                href="https://news.detik.com/pemilu/d-7148645/massa-minta-joget-prabowo-tidak-ada-band-maka-saya-tidak-joget" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="31" dtr-id="7148645" dtr-ttl="Massa Minta Joget, Prabowo: Tidak Ada Band Maka Saya Tidak Joget"                    href="https://news.detik.com/pemilu/d-7148645/massa-minta-joget-prabowo-tidak-ada-band-maka-saya-tidak-joget" class="media__link">
                    <div class="replace_title">
                        Massa Minta Joget, Prabowo: Tidak Ada Band Maka Saya Tidak Joget                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705576396" title="Kamis, 18 Jan 2024 18:13 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='31'
i-img='https://awsimages.detik.net.id/community/media/visual/2022/08/25/direktur-eksekutif-indikator-politik-indonesia-burhanuddin-muhtadi-1_169.jpeg'
i-info='<span d-time="1705575916" title="Kamis, 18 Jan 2024 18:05 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148617/bos-indikator-jika-ganjar-di-bawah-20-potensi-1-putaran-terbuka'
i-img-qs='?w=250&q=90'
i-type='artikel 32'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="32" dtr-id="7148617" dtr-ttl="Bos Indikator: Jika Ganjar di Bawah 20%, Potensi 1 Putaran Terbuka"                href="https://news.detik.com/pemilu/d-7148617/bos-indikator-jika-ganjar-di-bawah-20-potensi-1-putaran-terbuka" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="32" dtr-id="7148617" dtr-ttl="Bos Indikator: Jika Ganjar di Bawah 20%, Potensi 1 Putaran Terbuka"                    href="https://news.detik.com/pemilu/d-7148617/bos-indikator-jika-ganjar-di-bawah-20-potensi-1-putaran-terbuka" class="media__link">
                    <div class="replace_title">
                        Bos Indikator: Jika Ganjar di Bawah 20%, Potensi 1 Putaran Terbuka                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705575916" title="Kamis, 18 Jan 2024 18:05 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='32'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/pmi-lapor-ke-dkpp-soal-wni-di-malaysia-tak-masuk-dpt_169.jpeg'
i-info='<span d-time="1705575610" title="Kamis, 18 Jan 2024 18:00 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148610/sejumlah-pmi-lapor-ke-dkpp-soal-wni-di-malaysia-tak-masuk-dpt'
i-img-qs='?w=250&q=90'
i-type='artikel 33'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="33" dtr-id="7148610" dtr-ttl="Sejumlah PMI Lapor ke DKPP soal WNI di Malaysia Tak Masuk DPT"                href="https://news.detik.com/pemilu/d-7148610/sejumlah-pmi-lapor-ke-dkpp-soal-wni-di-malaysia-tak-masuk-dpt" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="33" dtr-id="7148610" dtr-ttl="Sejumlah PMI Lapor ke DKPP soal WNI di Malaysia Tak Masuk DPT"                    href="https://news.detik.com/pemilu/d-7148610/sejumlah-pmi-lapor-ke-dkpp-soal-wni-di-malaysia-tak-masuk-dpt" class="media__link">
                    <div class="replace_title">
                        Sejumlah PMI Lapor ke DKPP soal WNI di Malaysia Tak Masuk DPT                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705575610" title="Kamis, 18 Jan 2024 18:00 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='33'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/05/potret-ahmad-sahroni-jadi-host-di-acara-resolusi-indonesia-4_169.jpeg'
i-info='<span d-time="1705575386" title="Kamis, 18 Jan 2024 17:56 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148600/sahroni-posting-foto-bareng-gibran-rakabuming-ada-apa'
i-img-qs='?w=250&q=90'
i-type='artikel 34'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="34" dtr-id="7148600" dtr-ttl="Sahroni Posting Foto Bareng Gibran Rakabuming, Ada Apa?"                href="https://news.detik.com/pemilu/d-7148600/sahroni-posting-foto-bareng-gibran-rakabuming-ada-apa" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="34" dtr-id="7148600" dtr-ttl="Sahroni Posting Foto Bareng Gibran Rakabuming, Ada Apa?"                    href="https://news.detik.com/pemilu/d-7148600/sahroni-posting-foto-bareng-gibran-rakabuming-ada-apa" class="media__link">
                    <div class="replace_title">
                        Sahroni Posting Foto Bareng Gibran Rakabuming, Ada Apa?                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705575386" title="Kamis, 18 Jan 2024 17:56 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='34'
i-img='https://awsimages.detik.net.id/community/media/visual/2023/12/23/ketum-pbnu-yahya-cholil-staquf_169.jpeg'
i-info='<span d-time="1705574075" title="Kamis, 18 Jan 2024 17:34 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148557/pbnu-segera-keluarkan-sk-penonaktifan-khofifah-yang-resmi-dukung-prabowo'
i-img-qs='?w=250&q=90'
i-type='artikel 35'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="35" dtr-id="7148557" dtr-ttl="PBNU Segera Keluarkan SK Penonaktifan Khofifah yang Resmi Dukung Prabowo"                href="https://news.detik.com/pemilu/d-7148557/pbnu-segera-keluarkan-sk-penonaktifan-khofifah-yang-resmi-dukung-prabowo" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="35" dtr-id="7148557" dtr-ttl="PBNU Segera Keluarkan SK Penonaktifan Khofifah yang Resmi Dukung Prabowo"                    href="https://news.detik.com/pemilu/d-7148557/pbnu-segera-keluarkan-sk-penonaktifan-khofifah-yang-resmi-dukung-prabowo" class="media__link">
                    <div class="replace_title">
                        PBNU Segera Keluarkan SK Penonaktifan Khofifah yang Resmi Dukung Prabowo                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705574075" title="Kamis, 18 Jan 2024 17:34 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='35'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/mardiono.jpeg'
i-info='<span d-time="1705573530" title="Kamis, 18 Jan 2024 17:25 WIB">11 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148532/mardiono-optimistis-pasangan-ganjar-mahfud-bisa-berantas-korupsi'
i-img-qs='?w=250&q=90'
i-type='artikel 36'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="36" dtr-id="7148532" dtr-ttl="Mardiono Optimistis Pasangan Ganjar-Mahfud Bisa Berantas Korupsi"                href="https://news.detik.com/pemilu/d-7148532/mardiono-optimistis-pasangan-ganjar-mahfud-bisa-berantas-korupsi" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="36" dtr-id="7148532" dtr-ttl="Mardiono Optimistis Pasangan Ganjar-Mahfud Bisa Berantas Korupsi"                    href="https://news.detik.com/pemilu/d-7148532/mardiono-optimistis-pasangan-ganjar-mahfud-bisa-berantas-korupsi" class="media__link">
                    <div class="replace_title">
                        Mardiono Optimistis Pasangan Ganjar-Mahfud Bisa Berantas Korupsi                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705573530" title="Kamis, 18 Jan 2024 17:25 WIB">11 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='36'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/17/capres-cawapres-paparkan-program-antikorupsi-di-kpk-2.jpeg'
i-info='<span d-time="1705573285" title="Kamis, 18 Jan 2024 17:21 WIB">12 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148525/elektabilitas-ganjar-mahfud-melonjak-usai-debat-buntuti-prabowo-gibran'
i-img-qs='?w=250&q=90'
i-type='artikel 37'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="37" dtr-id="7148525" dtr-ttl="Elektabilitas Ganjar-Mahfud Melonjak Usai Debat, Buntuti Prabowo-Gibran"                href="https://news.detik.com/pemilu/d-7148525/elektabilitas-ganjar-mahfud-melonjak-usai-debat-buntuti-prabowo-gibran" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="37" dtr-id="7148525" dtr-ttl="Elektabilitas Ganjar-Mahfud Melonjak Usai Debat, Buntuti Prabowo-Gibran"                    href="https://news.detik.com/pemilu/d-7148525/elektabilitas-ganjar-mahfud-melonjak-usai-debat-buntuti-prabowo-gibran" class="media__link">
                    <div class="replace_title">
                        Elektabilitas Ganjar-Mahfud Melonjak Usai Debat, Buntuti Prabowo-Gibran                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705573285" title="Kamis, 18 Jan 2024 17:21 WIB">12 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='37'
i-img='https://awsimages.detik.net.id/community/media/visual/2024/01/18/alumni-trisakti-deklarasi-dukung-anies-muhaimin-di-pilpres-2024-annisa-aulia-rahimdetikcom.jpeg'
i-info='<span d-time="1705573281" title="Kamis, 18 Jan 2024 17:21 WIB">12 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148524/alumni-trisakti-deklarasi-dukung-anies-cak-imin-di-pilpres-2024'
i-img-qs='?w=250&q=90'
i-type='artikel 38'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="38" dtr-id="7148524" dtr-ttl="Alumni Trisakti Deklarasi Dukung Anies-Cak Imin di Pilpres 2024"                href="https://news.detik.com/pemilu/d-7148524/alumni-trisakti-deklarasi-dukung-anies-cak-imin-di-pilpres-2024" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="38" dtr-id="7148524" dtr-ttl="Alumni Trisakti Deklarasi Dukung Anies-Cak Imin di Pilpres 2024"                    href="https://news.detik.com/pemilu/d-7148524/alumni-trisakti-deklarasi-dukung-anies-cak-imin-di-pilpres-2024" class="media__link">
                    <div class="replace_title">
                        Alumni Trisakti Deklarasi Dukung Anies-Cak Imin di Pilpres 2024                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705573281" title="Kamis, 18 Jan 2024 17:21 WIB">12 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='38'
i-img='https://awsimages.detik.net.id/community/media/visual/2023/11/11/jubir-tim-pemenangan-nasional-tpn-ganjar-mahfud-chicco-hakim_169.jpeg'
i-info='<span d-time="1705572795" title="Kamis, 18 Jan 2024 17:13 WIB">12 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148504/tpn-soal-ganjar-disalip-anies-di-survei-beda-dengan-hitungan-internal'
i-img-qs='?w=250&q=90'
i-type='artikel 39'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="39" dtr-id="7148504" dtr-ttl="TPN soal Ganjar Disalip Anies di Survei: Beda dengan Hitungan Internal"                href="https://news.detik.com/pemilu/d-7148504/tpn-soal-ganjar-disalip-anies-di-survei-beda-dengan-hitungan-internal" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="39" dtr-id="7148504" dtr-ttl="TPN soal Ganjar Disalip Anies di Survei: Beda dengan Hitungan Internal"                    href="https://news.detik.com/pemilu/d-7148504/tpn-soal-ganjar-disalip-anies-di-survei-beda-dengan-hitungan-internal" class="media__link">
                    <div class="replace_title">
                        TPN soal Ganjar Disalip Anies di Survei: Beda dengan Hitungan Internal                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705572795" title="Kamis, 18 Jan 2024 17:13 WIB">12 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
                    
            
                            <article class="ph_newsfeed_d article_inview list-content__item"
i-loop='39'
i-img='https://awsimages.detik.net.id/community/media/visual/2023/02/24/kasatpol-pp-dki-arifin_169.jpeg'
i-info='<span d-time="1705572653" title="Kamis, 18 Jan 2024 17:10 WIB">12 jam yang lalu</span>'
i-link='https://news.detik.com/pemilu/d-7148500/satpol-pp-dki-parpol-sepakat-turunkan-alat-kampanye-timbulkan-kerawanan'
i-img-qs='?w=250&q=90'
i-type='artikel 40'
i-img-ratio='43'
i-dtre='true'>
    <div class="media media--left media--image-radius" d-append-class="block-link">
        <div class="media__image">
                                                
            <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="40" dtr-id="7148500" dtr-ttl="Satpol PP DKI: Parpol Sepakat Turunkan Alat Kampanye Timbulkan Kerawanan"                href="https://news.detik.com/pemilu/d-7148500/satpol-pp-dki-parpol-sepakat-turunkan-alat-kampanye-timbulkan-kerawanan" class="media__link">
                <span class="ratiobox ratiobox--4-3 ai_lqd ph-item" d-append-class="lqd">
                    <div class="ai_img ph-picture"></div>
                </span>
            </a>
        </div>
        <div class="media__text ph-item">
                        <h3 class="media__title">
                <a dtr-evt="newsfeed pemilu" dtr-sec="artikel newsfeed" dtr-act="artikel" onclick="_pt(this)" dtr-idx="40" dtr-id="7148500" dtr-ttl="Satpol PP DKI: Parpol Sepakat Turunkan Alat Kampanye Timbulkan Kerawanan"                    href="https://news.detik.com/pemilu/d-7148500/satpol-pp-dki-parpol-sepakat-turunkan-alat-kampanye-timbulkan-kerawanan" class="media__link">
                    <div class="replace_title">
                        Satpol PP DKI: Parpol Sepakat Turunkan Alat Kampanye Timbulkan Kerawanan                    </div>
                </a>
            </h3>
             <div class="media__date">
                 <span d-time="1705572653" title="Kamis, 18 Jan 2024 17:10 WIB">12 jam yang lalu</span>             </div>
        </div>
    </div></article>
                        

            
            
            

            
            
            
            
            
            
            
            </div>
    <div class="mgt-24 mgb-24 text-center">
      <a dtr-evt="indeks berita pemilu" dtr-sec="buttonindeksberita" dtr-act="button indeks berita" onclick="_pt(this)" href="https://news.detik.com/pemilu/indeks" class="btn btn--blue-light-1">Indeks Berita <i class="icon icon-arrow-right"></i></a>
    </div>
</div>
        </div>

        <div class="column-4">

            <div d-widget="agenda_pemilu" d-params=""><div class="dwidget_desktop ph-vertical"><div class="ph-item ph-title"><div class="ph-row"><div class="ph-col-12 big"></div></div></div><div class="ph-item"><div class="in-left ph-col-4"><div class="ph-picture"></div></div><div class="in-right"><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8 big"></div><div class="ph-col-4 big empty"></div><div class="ph-col-4"></div><div class="ph-col-8 empty"></div></div></div></div></div><img style="display:none" /></div>

            <!-- S:mediumrectangle3 --><!-- E:mediumrectangle3 -->            <!-- S:mediumrectangle4 --><!-- E:mediumrectangle4 -->
            

            <div d-widget="aduperspektif" d-params=""><div class="dwidget_desktop ph-vertical"><div class="ph-item ph-title"><div class="ph-row"><div class="ph-col-12 big"></div></div></div><div class="ph-item"><div class="in-left ph-col-4"><div class="ph-picture"></div></div><div class="in-right"><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8 big"></div><div class="ph-col-4 big empty"></div><div class="ph-col-4"></div><div class="ph-col-8 empty"></div></div></div></div><div class="ph-item"><div class="in-left ph-col-4"><div class="ph-picture"></div></div><div class="in-right"><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8 big"></div><div class="ph-col-4 big empty"></div><div class="ph-col-4"></div><div class="ph-col-8 empty"></div></div></div></div></div><img style="display:none" /></div>

            <!-- S:mediumrectangle1 --><!-- E:mediumrectangle1 -->            <!-- S:mediumrectangle2 --><!-- E:mediumrectangle2 -->
            <div d-widget="tag_populer" d-params=""><div class="dwidget_desktop ph-list"><div class="ph-item ph-title"><div class="ph-row"><div class="ph-col-12 big"></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> </div> <img style="display:none"/></div>

            <div d-widget="video" d-params=""><div class="dwidget_desktop ph-vertical"><div class="ph-item ph-title"><div class="ph-row"><div class="ph-col-12 big"></div></div></div><div class="ph-item"><div class="in-left ph-col-4"><div class="ph-picture"></div></div><div class="in-right"><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8 big"></div><div class="ph-col-4 big empty"></div><div class="ph-col-4"></div><div class="ph-col-8 empty"></div></div></div></div><div class="ph-item"><div class="in-left ph-col-4"><div class="ph-picture"></div></div><div class="in-right"><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8 big"></div><div class="ph-col-4 big empty"></div><div class="ph-col-4"></div><div class="ph-col-8 empty"></div></div></div></div><div class="ph-item"><div class="in-left ph-col-4"><div class="ph-picture"></div></div><div class="in-right"><div class="ph-row"><div class="ph-col-12 big"></div><div class="ph-col-8 big"></div><div class="ph-col-4 big empty"></div><div class="ph-col-4"></div><div class="ph-col-8 empty"></div></div></div></div></div><img style="display:none" /></div>

            <!-- S:partner_box_wp --><!-- E:partner_box_wp -->
            


            <!-- S:mediumrectangle5 --><!-- E:mediumrectangle5 -->            <!-- S:mediumrectangle6 --><!-- E:mediumrectangle6 -->
            <div class="box cb-mostpop sticky">
                <div d-widget="most_popular" d-params=""><div class="dwidget_desktop ph-list"><div class="ph-item ph-title"><div class="ph-row"><div class="ph-col-12 big"></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> <div class="ph-item"><div class="ph-col-12"><div class="ph-row"><div class="ph-col-8 big"></div><div class="ph-col-4 empty"></div></div></div></div> </div> <img style="display:none"/></div>
            </div>

        </div>
    </div>
</div>

<script type="text/javascript" src="https://awscdn.detik.net.id/assets/js/detik.v3.2.js?v=2024011905220"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $("[d-time]").detikTime()
    })
</script>

<footer>
	<div class="footer">
		<div class="container">
            <div class="footer__border"></div>
			<div class="grid-row flex-between">
				<div class="column-auto">
					<div class="footer__logo">
						<a href="https://news.detik.com/pemilu/">
							<img src="https://awscdn.detik.net.id/pemilu2/images/logo_detikpemilu.png?v=2024011905220" alt="img-alt" title="img-title">
						</a>
					</div>
					<div class="footer-title footer-title__partof">part of <img src="https://awscdn.detik.net.id/assets/images/logo_detiknetwork.png?v=2024011905220" alt="img-alt" title="img-title"></div>

				</div>

                <div class="column-auto">
                    <div class="footer__social">
						<div class="footer-title footer-title__connect">Connect With Us</div>
                        <a dtr-evt="footer" dtr-sec="sharefooter" dtr-act="share footer" onclick="_pt(this)" dtr-ttl="whatsapp"                            target="_blank" href="https://www.whatsapp.com/channel/0029Va87gcMEwEjrcI2Hd92i" class="icon-item icon-item__wa">
							<i class="icon icon-whatsapp"></i>
						</a>
						<a dtr-evt="footer pemilu" dtr-sec="sharefooter" dtr-act="share footer" onclick="_pt(this)" dtr-ttl="facebook"							target="_blank" href="https://www.facebook.com/detikcom"  class="icon-item icon-item__fb">
                            <i class="icon icon-facebook"></i>
						</a>
						<a dtr-evt="footer pemilu" dtr-sec="sharefooter" dtr-act="share footer" onclick="_pt(this)" dtr-ttl="twitter"							target="_blank" href="https://twitter.com/detikcom"  class="icon-item icon-item__tw">
                            <i class="icon icon-twitter"></i>
						</a>
						<a dtr-evt="footer pemilu" dtr-sec="sharefooter" dtr-act="share footer" onclick="_pt(this)" dtr-ttl="instagram"							target="_blank" href="https://www.instagram.com/detikcom/"  class="icon-item icon-item__ig">
                            <i class="icon icon-instagram"></i>
						</a>
						<a dtr-evt="footer pemilu" dtr-sec="sharefooter" dtr-act="share footer" onclick="_pt(this)" dtr-ttl="linkedin"							target="_blank" href="https://www.linkedin.com/company/detik-com/"  class="icon-item icon-item__in">
                            <i class="icon icon-linkedin"></i>
						</a>
						<a dtr-evt="footer pemilu" dtr-sec="sharefooter" dtr-act="share footer" onclick="_pt(this)" dtr-ttl="youtube"							target="_blank" href="https://www.youtube.com/detikcom" class="icon-item icon-item__yt">
                            <i class="icon icon-youtube"></i>
						</a>
                        <a dtr-evt="footer pemilu" dtr-sec="sharefooter" dtr-act="share footer" onclick="_pt(this)" dtr-ttl="tiktok"							target="_blank" href="https://www.tiktok.com/@detikcom" class="icon-item icon-item__tk">
							<i class="icon icon-tiktok"></i>
						</a>

					</div>
                </div>
			</div>

            <hr>

            <ul class="nav nav--center">
                                <li class="nav__item">
                    <a dtr-evt="footer pemilu" dtr-sec="menufooter" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="menu redaksi"                        href="https://www.detik.com/dapur/redaksi" >
                        Redaksi                    </a>
                </li>
                                <li class="nav__item">
                    <a dtr-evt="footer pemilu" dtr-sec="menufooter" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="menu pedoman media siber"                        href="https://www.detik.com/dapur/pedoman-media" >
                        Pedoman Media Siber                    </a>
                </li>
                                <li class="nav__item">
                    <a dtr-evt="footer pemilu" dtr-sec="menufooter" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="menu karir"                        href="https://karir.detik.com/" >
                        Karir                    </a>
                </li>
                                <li class="nav__item">
                    <a dtr-evt="footer pemilu" dtr-sec="menufooter" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="menu kotak pos"                        href="https://www.detik.com/dapur/kotak-pos" >
                        Kotak Pos                    </a>
                </li>
                                <li class="nav__item">
                    <a dtr-evt="footer pemilu" dtr-sec="menufooter" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="menu info iklan"                        href="https://www.detik.com/info-iklan" >
                        Info Iklan                    </a>
                </li>
                                <li class="nav__item">
                    <a dtr-evt="footer pemilu" dtr-sec="menufooter" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="menu privacy policy"                        href="https://www.detik.com/dapur/privacy-policy" >
                        Privacy Policy                    </a>
                </li>
                                <li class="nav__item">
                    <a dtr-evt="footer pemilu" dtr-sec="menufooter" dtr-act="menu footer" onclick="_pt(this)" dtr-ttl="menu disclaimer"                        href="https://www.detik.com/dapur/disclaimer" >
                        Disclaimer                    </a>
                </li>
                            </ul>

            <div class="footer-title footer-title__copyright">Copyright @ 2024 detikcom. All right reserved</div>

		</div>
	</div>
</footer>

        
<!-- S:balloonads --> <!-- E:balloonads -->
<!-- S:bottomframe --> <!-- E:bottomframe -->
<script type="text/javascript" src="https://awscdn.detik.net.id/assets/js/oembed.itp.v2.js?v=2024011905220"></script>


    <!--widget:popout_notif-->
<!-- S:tagfoot -->
<script>
var loadScriptAsync = function(uri){
  return new Promise((resolve, reject) => {
    var tag = document.createElement('script');
    tag.src = uri;
    tag.async = true;
    tag.onload = () => {
      resolve();
    };
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
}
var scriptLoaded = loadScriptAsync('https://newrevive.detik.com/delivery/asyncjs.php');

scriptLoaded.then(function(){
 window.reviveAsync["0cceecb9cae9f51a31123c541910d59b"].addEventListener('afterRenderBanner',rvCallbackBanner);

 function rvCallbackBanner(data){

  for(i=0;i<data.detail.length;i++){
  }

 }
});

function checkBannerAvailable(dataDetail, checkZone, callFunc, available = false){
	try {
		var show = available ? 1 : 0;
		if(show == 0){
          if (dataDetail.zoneid == checkZone && dataDetail.bannerid == show) {
            callFunc();
            console.log('zone id adjustment : ' + checkZone);
          }
        }
        if(show == 1){
          if (dataDetail.zoneid == checkZone && dataDetail.bannerid >= show) {
            callFunc();
            console.log('zone id adjustment : ' + checkZone);
          }
        }
	} catch(e) {
		console.log(e);
	}
}

</script>


<!-- Pixel Tag Audience DFP -->  

<script type='text/javascript'>
var axel = Math.random() + '';
var a = axel * 10000000000000;
document.write('<img src="https://pubads.g.doubleclick.net/activity;dc_iu=/4905536/DFPAudiencePixel;ord=' + a + ';dc_seg=1010791389;gen=Male?" width=1 height=1 border=0/>');
</script>
<noscript>
<img src="https://pubads.g.doubleclick.net/activity;dc_iu=/4905536/DFPAudiencePixel;ord=1;dc_seg=1010791389;gen=Male?" width=1 height=1 border=0/>
</noscript>

<script type='text/javascript'>
var axel = Math.random() + '';
var a = axel * 10000000000000;
document.write('<img src="https://pubads.g.doubleclick.net/activity;dc_iu=/4905536/DFPAudiencePixel;ord=' + a + ';dc_seg=1009875724;gen=Female?" width=1 height=1 border=0/>');
</script>
<noscript>
<img src="https://pubads.g.doubleclick.net/activity;dc_iu=/4905536/DFPAudiencePixel;ord=1;dc_seg=1009875724;gen=Female?" width=1 height=1 border=0/>
</noscript>

<!-- End Pixel Tag Audience DFP -->  
<!-- E:tagfoot -->        <script type="text/javascript" src="https://awscdn.detik.net.id/pemilu2/js/liquidimage.js?v=2024011905220"></script>
                <script type="text/javascript" src="https://awscdn.detik.net.id/pemilu2/js/tab.js?v=2024011905220"></script>
    </body>

</html>
<!--replaced-->