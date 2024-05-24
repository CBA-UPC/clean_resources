/**
 * @file
 * Initialize Eloqua tracking.
 */

var _elqQ = _elqQ || [];

(function ($) {

  Drupal.behaviors.eloquaTracking = {
    attach: function (context, settings) {

      _elqQ.push(['elqSetSiteId', Drupal.settings.eloqua.siteId]);
      if (Drupal.settings.eloqua.siteId !== '0' && Drupal.settings.eloqua.siteId !== 'undefined') {
        if (Drupal.settings.eloqua.FirstPartyCookie !== '' && Drupal.settings.eloqua.FirstPartyCookie !== 'undefined') {
          _elqQ.push(['elqUseFirstPartyCookie', Drupal.settings.eloqua.FirstPartyCookie]);
        }
      }
      _elqQ.push(['elqTrackPageView', window.location.href]);

            if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', async_load, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', async_load);
      }
    }
  };
})(jQuery);
