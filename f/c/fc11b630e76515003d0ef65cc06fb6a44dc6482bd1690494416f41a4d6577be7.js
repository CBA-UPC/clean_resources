$(document).ready(function () {
  var one = $('.index-similar').html();
  $('.index-similar-res').append(one);

  function SpotResize() {

    var width = $('.thumb-bl').width();

    if ($(window).width() < 501 && ($('.head-wrapper').hasClass('head-wrapper-models') || $('.head-wrapper').hasClass('head-wrapper-chanels'))) {
      width *= 2;
    }

    $('.bn-new iframe, .player-bn iframe, .bn-new video, .bn-new img, .player-bn img').each(recountSpots);
    if ($(window).width() < 800) {
      $('.player-bn video').parent().each(recountSpots);
    }




    function recountSpots(index, elem) {
      var spot_height = $(elem).height();
      var spot_width = $(elem).width();
      var y = (width - 2) / spot_width;

      if (y < 1) {
        var mar_h = ((spot_height * y) - spot_height) / 2;
        var mar_w = ((spot_width * y) - spot_width) / 2;
        $(elem).css({
          transform: "scale(" + y + ")",
          "margin": "" + mar_h + "px 0 0 " + mar_w + "px",
        });
      } else if (y > 1) {
        var mar_h = ((spot_height * y) - spot_height) / 2;
        $(elem).css({
          transform: "scale(" + y + ")",
          "margin": "" + mar_h + "px 0 0 0px",
        });
      }

      var h_spot = spot_height * y;

      $(elem).closest('.bn.bn-new, .player-bn').css({
        "height": "" + h_spot + "px"
      });
    }

    // if ($('.player-bn iframe, .player-bn video, .player-bn img').length) {
    //   // var y = width / 300;
    //   var y = (width - 2) / 300;

    //   var mar_h = ((250 * y) - 250) / 2;
    //   var mar_w = ((300 * y) - 300) / 2;

    //   if (y < 1) {

    //     $('.player-bn iframe, .player-bn video, .player-bn img').css({
    //       transform: "scale(" + y + ")",
    //       "margin": "" + mar_h + "px 0 0 " + mar_w + "px",
    //     });
    //   } else if (y > 1) {

    //     $('.player-bn iframe, .player-bn video, .player-bn img').css({
    //       transform: "scale(" + y + ")",
    //       "margin": "" + mar_h + "px 0 0 0px",
    //     });
    //   }

    //   var h_spot = 250 * y;

    //   $('.player-bn').css({
    //     "height": "" + h_spot + "px"
    //   })
    // }



    // $('.player-bn .on_country video, .player-bn .on_country img, .player-bn .on_country iframe, .player-bn .not_country video').each(function (index, elem) {
    //   if ($(window).width() < 501) {
    //     var spot_height = $(elem).height();
    //     var spot_width = $(elem).width();
    //     var y = (width - 2) / spot_width;

    //     if (y < 1) {
    //       var mar_h = ((spot_height * y) - spot_height) / 2;
    //       var mar_w = ((spot_width * y) - spot_width) / 2;
    //       $(elem).css({
    //         transform: "scale(" + y + ")",
    //         "margin": "" + mar_h + "px 0 0 " + mar_w + "px",
    //       });
    //     } else if (y > 1) {
    //       var mar_h = ((spot_height * y) - spot_height) / 2;
    //       $(elem).css({
    //         transform: "scale(" + y + ")",
    //         "margin": "" + mar_h + "px 0 0 0px",
    //       });
    //     }

    //     var h_spot = spot_height * y;

    //     $(elem).closest('.player-bn').css({
    //       "height": "" + h_spot + "px"
    //     });
    //   }
    // });
  };

  SpotResize();
  setTimeout(SpotResize, 500);
  setTimeout(SpotResize, 1000);

  $(window).on("resize", function () {
    SpotResize();
  })

  $(window).on("scroll", 

});