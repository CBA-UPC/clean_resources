$(document).ready(function () {
  $('#newsTicker1').breakingNews({
    effect: 'slide-right'
  });
  // cache the element
  var $navBar = $('.navi');
  // find original navigation bar position
  var navPos = $navBar.offset().top;
  // on scroll
  $(window).scroll(function () {
    // get scroll position from top of the page
    var scrollPos = $(this).scrollTop();
    // check if scroll position is >= the nav position
    if (scrollPos >= navPos) {
      $navBar.addClass('fixed');
    } else {
      $navBar.removeClass('fixed');
    }
  });
  $(".hamburger").click(;
});
//SCORE CARD TAB JS START HERE

// Get the element with id="defaultOpen" and click on it
var tagelement = document.getElementById("scoreOpen");
if(typeof(tagelement) != 'undefined' && tagelement != null){
	tagelement.click();
}

//To scroll down to comment box from page top
$("ul.navbarcntr li a").click(function() {
  if($('#scorcardm').length){
    $('html, body').animate({
      scrollTop: $("#scorcardm").offset().top-130
    }, 2000);
  }
});

// hamburger
$(document).ready(function () {
  $(".navopen").click(function () {
    $(".menuopenbox").slideToggle();
  })

  setTimeout(function (){
    $(window).scroll(function () {
      if($(".taboola").length){
        var taboola_content = $(".taboola").html();
        if(taboola_content){
          var top = window.pageYOffset;
          var distance = top - $(".taboola").offset().top;
          if (distance > 1270 ){
            $(".zeeft-sticky:visible").length > 0 && ($(".zeeft-sticky").css({ transform: "translateY(0%)" }));
          }
          else{
            $(".zeeft-sticky").is(":visible") && ($(".zeeft-sticky").css({ transform: "translateY(120%)" }));
          }
        }
      }
      else{
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
          $(".zeeft-sticky:visible").length > 0 && ($(".zeeft-sticky").css({ transform: "translateY(0%)" }));
        }
        else{
          $(".zeeft-sticky").is(":visible") && ($(".zeeft-sticky").css({ transform: "translateY(120%)" }));
        }
      }
    })
  }, 500);

  var url = window.location.pathname,
  urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there

  if($('ul.subnavbarul li').length){
    // now grab every link from the navigation
    $('ul.subnavbarul li a').each(function(){
        // and test its normalized href against the url pathname regexp
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
          $(this).parent('li').addClass('sub-active');
        }
    });
  }

  if($(".navbar ul.navbarcon li").length){
    var no_match = true;
    // now grab every link from the navigation
    $('.navbar ul.navbarcon li a').slice(2).each(function(){
      // and test its normalized href against the url pathname regexp
      // // Making Kerala and Photos active on their detail pages
      if( (urlRegExp.test(this.href.replace(/\/$/,''))) || (window.location.href.indexOf(this.href) > -1 ) ){
        $(this).parent('li').addClass('activenav');
        $(this).find('span').addClass('active');
        $(this).find('i').addClass('active');
        no_match = false;
      }
    });

    if(no_match || '/malayalam' == url ){
      $("ul.navbarcon li.first-nav").addClass('activenav');
      $("ul.navbarcon li.first-nav").find('span').addClass('active');
      $("ul.navbarcon li.first-nav").find('i:first').addClass('active');
    }
  }

  //For opening Search box on click of search icon
  $(".navbarright .searchicon").click(;
	$(function () {
    var s = document.createElement("script");
    (s.type = "text/javascript"), (s.src = "https://malayalam.cdn.zeenews.com/malayalam/sites/all/themes/desktop_main_th/js/common_head.js"), $("head").append(s);
	});
  //Flushing Taboola Feed If Exist
  //if(typeof _taboola == 'object'){
  //  window._taboola = window._taboola || [];
  //  _taboola.push({flush: true});
  //}
});
