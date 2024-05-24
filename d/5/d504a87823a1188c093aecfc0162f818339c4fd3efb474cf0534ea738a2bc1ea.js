/**
 * @file
 * Back To Top behaviors.
 */
(function ($, Drupal, once, drupalSettings) {

  var scrollTo = function (to, duration) {
    var element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startTs = performance.now(),
      easeOutQuart = 
      animateScroll = function (ts) {
        var currentTime = ts - startTs;
        element.scrollTop = parseInt(easeOutQuart(currentTime, start, change, duration));
        if (currentTime < duration) {
          frame = requestAnimationFrame(animateScroll);
        } else {
          element.scrollTop = to;
        }
      };
    requestAnimationFrame(animateScroll);
  };

  Drupal.behaviors.backtotop = {
    attach: function (context, settings) {
      let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
      if (!(settings.back_to_top.back_to_top_prevent_on_mobile && isMobile)) {
        var exist = $('#backtotop').length;
        if (exist == 0) {
          $(once('backtotop', 'body'), context).each(;
        }
      }

      backToTop();
      $(window).scroll(;

      $(once('backtotop', '#backtotop'), context).each(;

      /**
       * Hide show back to top links.
       */
          }
  };
})(jQuery, Drupal, once, drupalSettings);
