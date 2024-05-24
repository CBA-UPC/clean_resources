<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link href="/cdn-cgi/assets/css/static-pages-2.6.0.css" rel="stylesheet"><link rel="icon" type="image/x-icon" href="//DOMAIN/favicon.ico"><title></title></head><body><section class="error-section error-section--waiting error-section--ltr error-section--hide" id="en"><div class="container"><div class="error-section__wrapper error-section__wrapper--waiting"><div class="error-section__information"><h1 class="error-section__title"></h1><h1 class="error-section__subtitle error-section__subtitle--waiting">Checking your browser before accessing the website...</h1><div class="error-section__contents"><p class="error-section__content">Please complete the security check before accessing the website.</p></div><div class="redirect__captcha" id="captcha"></div></div></div></div></section><section class="error-section error-section--waiting error-section--hide" id="fa"><div class="container"><div class="error-section__wrapper error-section__wrapper--waiting"><div class="error-section__information"><h1 class="error-section__title"></h1><h1 class="error-section__subtitle error-section__subtitle--waiting">در حال بررسی مرورگر، پیش از انتقال به سایت هستیم ...</h1><div class="error-section__contents"><p class="error-section__content">برای دسترسی به وب‌سایت موردنظر، گزینه زیر را تایید کنید.</p></div><div class="redirect__captcha" id="captcha_element"></div></div></div></div></section><script>"use strict";

var isTehranTimezone = function isTehranTimezone() {
  try {
    var intlName = window.Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (intlName) {
      return intlName.toLowerCase().includes('tehran');
    }
  } catch (e) {}

  var now = new Date();
  return now.toString().toLowerCase().includes('iran');
};

var showPage = function showPage() {
  var errorPage;
  var headTitleElement = document.getElementsByTagName('title');

  if (isTehranTimezone()) {
    errorPage = document.getElementById('fa');
  } else {
    errorPage = document.getElementById('en');
  }

  var lang;
  if (isTehranTimezone()) {
    lang = 'fa';
  } else {
    lang = 'en';
  }

  var pageTitle = errorPage.getElementsByClassName('error-section__title')[0].textContent;
  headTitleElement[0].innerHTML = pageTitle;
  errorPage.classList.remove('error-section--hide');
  afterShowPage(errorPage, lang)
};

window.addEventListener("load", showPage);</script><script type="text/javascript">window.AR_SiteKey = '6Le8dMkUAAAAAEzy7WYOlWbYh0eun-xK0j5aXt6W';
window.AR_Key = '__arcsrc'
window.AR_Domain = 'flightio.com'
window.AR_Age = '3600'
window.AR_SameSite = '; SameSite=Lax'</script><script type="text/javascript" src="/cdn-cgi/assets/js/recaptcha.js"></script><script id="arvanRecaptcha" defer="defer" async="async"></script></body></html>   toast(data);
            },
            error: function (data) {

            },
            data: { 'phone': $('#reset_pass_phone').val(), 'server': $('#rest_pass_server').val(), 'site_language': $('#site_language').val() }

        });
    }
});

$('#new_pass_btn').click(function () {
    if ($('#new___pass').val() == '') {
        let res = {
            'msg': ($('#site_language').val() == 'en' ? 'Enter the password' : 'کلمه عبور را وارد کنيد'),
            'status': 'Err'
        };
        toast(res);
        return;
    }
    $.ajax({
        type: "POST",
        //crossDomain:true,
        //headers: {  'Access-Control-Allow-Origin': '*' },
        //dataType: "jsonp",
        data: $("#new_pass_form").serialize() + '&site_language=' + $('#site_language').val(),
        url: "https://lab1.avisapp.dev/auth/reset_pass_token",
        success: function (data) {
            if (typeof data !== 'object') {
                data = JSON.parse(data);
            }

            toast(data);

            if (data.success) {
                if ($('input').hasClass('new_pass_front')) {
                    let redirect = $('#redirect_path').val();
                    window.setTimeout(function () {
                        if (redirect)
                            location.href = redirect;
                        else
                            location.reload();
                    }, 2000);
                } else {
                    window.setTimeout(function () {
                        window.location = window.location.protocol + "//" + window.location.host + '/backend/web/site/login';
                    }, 2000);
                }
            }

        }

    });

});

$('#reset_password_front').click(function () {
    $('#login_hide').slideUp();
    window.setTimeout(function () {
        $('#reset_pass_hide').slideDown('slow');
    }, 500);


});("click",function(t){$(t.target).closest(".select-list").length||($(this).find(".select-list").slideToggle(),$(this).find("i").toggleClass("rotate"));});var $selectItem=$(".select-list li").html();$(".select-list li").on("click",function(){var t=$(this).html();$(".select span").html(t);}),$("body").on("click",function(t){$(t.target).closest(".select").length||($(".select-list").slideUp(),$(".select i").removeClass("rotate"));}),$(".colorbtn").on("click",function(){$(".colorlist").slideToggle();}),$("body").on("click",function(t){$(t.target).closest(".colorlist , .colorbtn").length||$(".colorlist").slideUp();});var $darkMode=$("#body"),$darkBtn=$(".darkbtn i");console.log(localStorage.getItem("darkMode")),"true"===localStorage.getItem("darkMode")&&($darkMode.addClass("dark"),$darkBtn.addClass("icon-sun-14")),$("#darkmode").on("click",function(){$darkMode.toggleClass("dark"),$(".darkbtn i").toggleClass("icon-sun-14"),localStorage.setItem("darkMode",$darkMode.hasClass("dark","icon-sun-14"));});var buttons=document.getElementsByClassName("color"),activeSheet=document.getElementById("active-stylesheet");localStorage.getItem("ColorStorage")&&activeSheet.setAttribute("href",localStorage.getItem("ColorStorage"));for(var i=0;i<buttons.length;i++)buttons[i].addEventListener("click",switchStyle);function switchStyle(){var t=this.getAttribute("data-stylesheet");activeSheet.setAttribute("href",t),localStorage.setItem("ColorStorage",t);}
var $myRole=$(".role");$($myRole).on("DOMSubtreeModified",function(){console.log("changed"),$(this).each(function(){var t=$(this).find(".tr-pric").text().replace(",",""),e=$(this).attr("data-pric-old").replace(",","");if(/[+-]?\d+(\.\d+)?/.test(t)){var s=parseFloat(t),a=parseFloat(e);s>a?($(this).parent().addClass("greenbg").css({"animation-play-state":"running"}),$(this).parent().removeClass("redbg")):s<a&&($(this).parent().addClass("redbg").css({"animation-play-state":"running"}),$(this).parent().removeClass("greenbg"));}});});let airDrop=$(".airdrop");-1==document.cookie.indexOf("popupShown=true")&&((document.cookie="popupShown=true; max-age=86400"),$(window).on("load",function(){setTimeout(function(){airDrop.css("bottom","20px");},3e3);}),$(".close-airdrop").on("click",function(){airDrop.css("bottom","calc(-100% + -30px)"),setTimeout(function(){airDrop.css("display","none");},1600);})),$(".close-alarm").on("click",function(){alarm.fadeOut();}),$(".alarm-modalbox").on("click",function(t){$(t.target).closest(".alarm-modal").length||alarm.fadeOut();});const playerFix=$(".player-fix");"true"===localStorage.getItem("FixPlayer")&&playerFix.addClass("active"),$(".player-close").on("click",function(){playerFix.toggleClass("active"),localStorage.setItem("FixPlayer",playerFix.hasClass("active"));}),$(".more-hd").on("click",function(){$(this).siblings("ul").slideToggle(),$(this).toggleClass("active");}),$(".togglebox").on("click",function(){$(this).toggleClass("active");});var $tabtActive=$(".tab").on("click",function(t){t.preventDefault(),$tabtActive.not(this).removeClass("active"),$(this).toggleClass("active");var e=this.getAttribute("data-toggle-target");$(".tab-content").removeClass("active").filter(e).addClass("active");});$(".tab-item").on("click",function(){$(this).toggleClass("active"),$(this).siblings(".tab-item").removeClass("active");}),$(".timeslider .swiper-slide").on("click",function(){$(this).toggleClass("active"),$(this).siblings(".swiper-slide").removeClass("active");}),$(".upimg .image").show(),$(".upimg .image").change(function(){var t=$(this).val();$(this).parents().siblings(".filenameinput").html(t);}),$("body").on("click",function(t){$(t.target).closest(".selectcity, .inputselect").length||$(".selectcity").slideUp();}),$(".mobile-num").on("click",function(){let t=$(this).text();$(".mobilenum").val(t);}),$(".car-faq-item-title").on("click",function(){$(this).next(".car-faq-item-text").slideToggle(),$(this).find(".icon").toggleClass("rotate"),$(this).parents(".car-faq-item").toggleClass("active"),$(this).parents(".car-faq-item").siblings(".car-faq-item").removeClass("active"),$(this).parents(".car-faq-item").siblings(".car-faq-item").find(".car-faq-item-text").slideUp(),$(this).parents(".car-faq-item").siblings(".car-faq-item").find("i").removeClass("rotate");}),$(".showtext").on("click",function(){$(this).parent().siblings(".text-hide").toggleClass("open"),$(".text-hide").hasClass("open")?($(this).parent().siblings(".text-hide").css("max-height","fit-content"),$(this).html('<i class="icon-arrow-up-2"></i> مشاهده کمتر')):($(this).parent().siblings(".text-hide").css("max-height","180px"),$(this).html('<i class="icon-arrow-down-1"></i> مشاهده بیشتر'));});var iframes=$("iframe");if(iframes.length>0){var scrollBarElement=$("#scrollBar")[0];$(document).ready(function(){for(var i=0;i<iframes.length;i++){var src=iframes[i].src;$(iframes[i]).data("src",src);}});$(window).scroll(function(){var t=((window.pageYOffset)/(document.documentElement.scrollHeight-document.documentElement.clientHeight))*100;scrollBarElement.style.width=t+"%";});}
$("[data-shortext]").each(function(){var maxLength=$(this).data("shortext");var commentText=$(this).text();if(commentText.length>maxLength){var textlast=$.trim(commentText).substring(0,maxLength)+" "+"...";$(this).text(textlast)}});$(document).ready(function(){const $textarea=$("textarea");$textarea.on("paste",function(e){e.preventDefault();alert("امکان paste کردن در اینجا مجاز نمی‌باشد.");});});