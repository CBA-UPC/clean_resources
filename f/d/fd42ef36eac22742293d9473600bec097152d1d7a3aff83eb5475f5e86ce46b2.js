/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, drupalSettings) {

  'use strict';

  $(document).ready(function () {
    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.matomo && tarteaucitron.state !== undefined) {
      var regex = new RegExp("!matomohightrack" + "=", "g");
      var cookie = tarteaucitron.cookie.read().replace(regex, "");

      if (cookie !== "true") {
        _paq.push(['disableCookies']);
      }
      else {
        _paq.push(["enableLinkTracking"]);
        _paq.push(['trackPageView']);
      }
    }
  });

})(jQuery, drupalSettings);
