function burgerMenu(e){e.preventDefault();var t=e.currentTarget;if("click"==e.type||13===e.keyCode){document.querySelector(".main-header-btns-search").classList.remove("active"),document.querySelector(".submenu-search").classList.remove("active"),document.querySelector("#header-overlay").classList.remove("active");for(var i=document.querySelectorAll(".mobile-menu-submenu"),n=0;n<i.length;n++)i[n].classList.remove("active");t.classList.contains("active")?(t.classList.remove("active"),document.querySelector(".mobile-menu").classList.remove("active"),document.querySelector("#header-overlay").classList.remove("active")):(t.classList.add("active"),document.querySelector(".mobile-menu").classList.add("active"),document.querySelector("#header-overlay").classList.add("active"))}}function mobileMenuArrow(e){e.preventDefault();var t=e.currentTarget;"click"!=e.type&&13!==e.keyCode||t.nextElementSibling.classList.add("active")}function mobileMenuBack(e){e.preventDefault();var t=e.currentTarget;"click"!=e.type&&13!==e.keyCode||t.closest(".mobile-menu-submenu").classList.remove("active")}function mainHeaderSearch(e){e.preventDefault();var t=e.currentTarget;if("click"==e.type||13===e.keyCode){document.querySelector(".submenu-search").classList.remove("active"),document.querySelector(".burger-menu").classList.remove("active"),document.querySelector(".mobile-menu").classList.remove("active");for(var i=document.querySelectorAll(".mobile-menu-submenu"),n=0;n<i.length;n++)i[n].classList.remove("active");t.classList.contains("active")?(t.classList.remove("active"),document.querySelector(".submenu-search").classList.remove("active"),document.querySelector("#header-overlay").classList.remove("active")):(t.classList.add("active"),document.querySelector(".submenu-search").classList.add("active"),document.querySelector("#header-overlay").classList.add("active"),document.querySelector("#submenu-search").focus())}}$(document).ready(function(e){var t;$(function(){$("select").selectpicker()}),$(function(){var e;$(window).scroll(function(){10<=(e=$(window).scrollTop())?$(".main-header-bottom").addClass("scrolled-nav"):e<10&&$(".main-header-bottom").removeClass("scrolled-nav")})}),$(".header-search-open").click(function(){$(".header-search-form").show()}),$(".header-search-close").click(function(){$(".header-search-form").hide()}),$(".burger-menu").click(function(){$(this).toggleClass("active"),$(".main-header-right").toggleClass("active"),$("body").toggleClass("overflow-hidden"),$("html").toggleClass("overflow-hidden")}),window.matchMedia("(max-width: 991px)").matches&&$(".has-submenu > a").click(function(){event.preventDefault(),$(this).parent().find(".submenu").addClass("active")}),window.onresize=function(){window.matchMedia("(max-width: 991px)").matches?$(".has-submenu > a").click(function(){event.preventDefault(),$(this).parent().find(".submenu").addClass("active")}):$(".has-submenu > a").click(function(e){window.location=e.target.href})},$(".submenu-back").click(function(){$(this).parent().removeClass("active")}),$(".main-footer-title").click(function(){$(window).width()<992&&($(this).parent().hasClass("active")?$(".main-footer-col").removeClass("active").find(".main-footer-links").stop().slideUp():($(".main-footer-col").removeClass("active").find(".main-footer-links").stop().slideUp(),$(this).parent().addClass("active").find(".main-footer-links").stop().slideDown()))}),$(".main-header-bottom nav ul li a").on("click",function(){$(this).parent().toggleClass("active")}),$(".submenu").each(function(){$(this).find("a").last().on("focusout",function(){$(this).parents().find(".active").removeClass("active")})}),$(".smooth-scroller").click(function(e){var t=$(".main-header").height(),e=(e.preventDefault(),this.hash);$("html, body").animate({scrollTop:$(e).offset().top-t},2e3)}),-1!=navigator.userAgent.indexOf("Mac OS X")&&(-1!=navigator.appVersion.indexOf("Mac")&&(OSName="MacOS"),t=!!window.chrome,"MacOS"==OSName)&&1==t&&$("body").addClass("chrome-mac"),$(function(){-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("body").addClass("safari-mac")}),-1!=navigator.appVersion.indexOf("Win")&&$("body").addClass("windows-os"),navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)&&$("body").addClass("browser-ios"),$('a[href^="http"]').attr("target",function(){if(this.host!==location.host)return"_blank"}).attr("rel",function(){if(this.host!==location.host)return"noopener noreferrer"}),$(window).scroll(function(){768<$(window).width()&&$(".scrollToTop")&&(700<$(this).scrollTop()?($(".scroll-block").removeClass("hidden"),$(".scrollToTop").fadeIn()):($(".scrollToTop").fadeOut(),$(".scroll-block").addClass("hidden")))}),$(".scrollToTop").on("click",function(e){var t=$(".scroll-section");t.length&&$("html, body").stop().animate({scrollTop:t.offset().top-150},3e3)});"3722"==$('form input[name="_wpcf7"]').val()&&document.addEventListener("wpcf7mailsent",function(e){window.location.href="/thank-you"},!1);var i='<div class="col-12 text-center reload"><div class="load-circle"></div></div>';$("#filter-insights .js-load").click(function(){arg.post_type=[],arg.tax_query=[],arg.paged=1;var e=[];(0<$("#filter-insights input:checked").length||0<$("#filter-insights .selectpicker option:selected").val().length)&&($("#filter-insights input:checked").each(function(){arg.post_type.push($(this).attr("name"))}),0<$("#filter-insights .selectpicker option:selected").val().length&&(e.push($("#filter-insights .selectpicker option:selected").val()),arg.tax_query.push({taxonomy:"topic",field:"slug",terms:e})),$(".js-insights-listing .row").html(i),o(arg))});let n=!0;function o(t){n=!1,t.action="insights_filter",$.ajax({url:"/wp-admin/admin-ajax.php",type:"POST",data:t,success:function(e){$(".reload").remove(),1==t.paged?($(".js-insights-listing .row").html(e),e||$(".js-insights-listing .row").html('<div class="col-sm-12"><p>There are no posts to display.</p></div>')):$(".js-insights-listing .row").append(e),function(e){e=e.slice(e.search("posts-count")),e=e.slice(13,e.search(" ")-3);return Number(e)}(e)==t.posts_per_page&&(n=!0)}})}$(window).on("scroll",function(){0<$("#finish-insights").length&&function(){var e=$("#finish-insights").offset().top,t=$("#finish-insights").offset().top+$("#finish-insights").outerHeight(),i=$(window).scrollTop()+$(window).innerHeight(),n=$(window).scrollTop();if(e<i&&n<t)return 1}()&&n&&(arg.paged++,$(".js-insights-listing .row").append(i),o(arg))})}),$(document).on("click",'a[href^="#"]',function(e){var t=$($.attr(this,"href")),i=$.attr(this,"data-toggle");0<$(t).length&&!["collapse","tab"].includes(i)&&!["#listItems"].includes(t)&&(i=t,"none"!=$(i).css("display"))&&"hidden"!=$(i).css("visibility")&&"collapse"!=$(i).css("visibility")&&"fixed"!=$(i).css("position")&&$("html, body").animate({scrollTop:$(t).offset().top-100},500)}),$(document).ready(function(){var e,t;("true"==Cookies.get("international")?$("input[name=toggle][value='international']"):$("input[name=toggle][value='usa']")).prop("checked",!0),$('input[name="toggle"]').change(function(){"international"==$(this).val()&&(Cookies.set("international","true",{expires:30}),window.setTimeout(function(){window.location.href="/international/"},500)),"usa"==$(this).val()&&(Cookies.set("international","false",{expires:30}),window.setTimeout(function(){window.location.href="/"},500))}),$(".switcher-modal").find(".close").on("click",function(){$(".switcher-modal").removeClass("show")}),$(document).on("click",function(e){0<$(e.target).closest(".modal-content").length||0<$(e.target).closest(".cky-consent-bar").length||$(".switcher-modal").removeClass("show")}),$(".switcher-modal .colored").click(function(){Cookies.set("international","true",{expires:30}),window.setTimeout(function(){window.location.href="/international/"},500)}),$(".switcher-modal .incolored").click(function(){Cookies.set("international","false",{expires:30}),window.setTimeout(function(){window.location.href="/"},500)}),$(".f-file").change(function(e){e=e.target.files?.[0]?.name;$(this).parent().parent().find(".file-name").text(e)}),$(".fancybox-video").fancybox({type:"iframe"}),(0<$(".page-template-insightsListing .pagination").length||0<$(".tax-topic .pagination").length)&&(e=$(".pagination li.text-item:first a"),t=$(".pagination li.page-1:first a"),0<$(e).length&&$(e).attr("href",$(e).attr("href")+"#filterBlock"),0<$(t).length)&&$(t).attr("href",$(t).attr("href")+"#filterBlock")}),$(function(){var i=$(".main-header");$(window).on("scroll load",function(){var e,t=$(window).scrollTop();0<$(".home").length?(e=$(".section")[$(".section").length-1],$(e).offset().top+$(e).height()<t?i.addClass("main-header--active"):i.removeClass("main-header--active")):0<t?i.addClass("main-header--active"):i.removeClass("main-header--active")})}),$("#filterForm").change(function(){$(".filterListJs").each(function(){$(this).val()&&$("#filterForm").attr("action","/insights/"+$(this).val())})}),(-1<window.location.href.indexOf("refresh=on")||-1<window.location.href.indexOf("/page/"))&&$(document).ready(function(){0<$("#filterBlock").length&&$("html, body").animate({scrollTop:$("#filterBlock").offset().top},1e3)}),jQuery(function(e){function t(e){e.show(),e.addClass("show")}function i(e){e.hide(),e.removeClass("show")}var n,o,a,s,c,l;e("body").hasClass("page-template-contactTemplate")&&(e(document).ready(function(){}),e(".f-support").change(function(){s=e(".f-support > select").val(),e(".f-region > select").val(""),e(".f-who > select").val(""),e(".f-interest > select").val(""),e(".f-volume").val(""),e(".f-content-link").val(""),i(e("#region")),i(e("#who")),i(e("#who_americas")),i(e("#interest")),i(e("#interest_americas")),i(e("#volume")),i(e("#content-link")),"Yes"==s?window.location="/support":t(e("#region"))}),e(".f-region").change(function(){n=e(".f-region > select").val(),e(".f-who > select").val(""),e(".f-interest > select").val(""),e(".f-volume").val(""),e(".f-content-link").val(""),i(e("#who")),i(e("#who_americas")),i(e("#interest")),i(e("#interest_americas")),i(e("#volume")),i(e("#content-link")),t(e("Americas"==n?"#who_americas":"#who"))}),e(".who.f-who").change(function(){e(".f-interest > select").val(""),e(".f-volume").val(""),e(".f-content-link").val(""),a=e(".who.f-who > select").val(),t(e("#interest")),i(e("#interest_americas")),i(e("#volume")),i(e("#content-link"))}),e(".who-americas.f-who").change(function(){e(".f-interest > select").val(""),e(".f-volume").val(""),e(".f-content-link").val(""),o=e(".who-americas.f-who > select").val(),i(e("#interest")),i(e("#interest_americas")),i(e("#volume")),i(e("#content-link")),t(e("Americas"==n?"#interest_americas":"#interest"))}),e(".interest-americas.f-interest").change(function(){l=e(".interest-americas.f-interest > select").val(),"Publisher"==o&&"Data Partnership Opportunities"==l&&(t(e("#volume")),t(e("#content-link"))),"Publisher"==o&&"Tech Partnership Opportunities"==l&&(t(e("#volume")),t(e("#content-link")))}),e(".interest.f-interest").change(function(){c=e(".interest.f-interest > select").val(),"Publisher"==a&&"Data Partnership Opportunities"==c&&(t(e("#volume")),t(e("#content-link"))),"Publisher"==a&&"Tech Partnership Opportunities"==c&&(t(e("#volume")),t(e("#content-link")))}))}),jQuery(function(e){var t;e("body").hasClass("page-template-supportTemplate")&&e(".f-client-type").change(function(){t=e(".f-client-type > select").val(),e(".f-file").val(""),e(".f-program > select").val(""),"Agency"!=t&&"Cable"!=t&&"Radio"!=t&&"TV"!=t||(window.location="https://service.gotostrata.com/s/contactsupport")})});for(var menuOpen=document.querySelectorAll(".main-footer-menu-open"),i=0;i<menuOpen.length;i++)menuOpen[i].addEventListener("click",function(e){this.parentNode.parentNode.classList.contains("active")?closeFooterMenu():(closeFooterMenu(),this.parentNode.parentNode.classList.toggle("active"))});function closeFooterMenu(){for(var e=document.querySelectorAll(".main-footer-menu"),t=0;t<e.length;t++)e[t].classList.remove("active")}$(document).ready(function(){$(".fancybox").fancybox()}),$(document).ready(function(){var t=new Swiper(".quote-slider .swiper-container",{slidesPerView:1,spaceBetween:10,autoplay:{delay:9e3,disableOnInteraction:!1},pagination:{el:".quote-slider .quote-slider-pagination",clickable:!0}});$(".carousel-toggle-button").on("click",function(e){$(this).hasClass("play")?($(this).removeClass("play"),$(this).addClass("pause"),$(this).attr("aria-label","Start automatic slide show"),t.autoplay.stop()):($(this).removeClass("pause"),$(this).addClass("play"),$(this).attr("aria-label","Stop automatic slide show"),t.autoplay.start())})});