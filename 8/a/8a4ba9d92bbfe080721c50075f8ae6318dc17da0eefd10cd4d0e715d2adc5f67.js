/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all(); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
right:.5em}.menu-item img._after,.rtl .menu-item img._before{margin-left:.5em}.menu-item ._svg{width:1em}.rtl .menu-item i._before{margin-right:0}.rtl .menu-item i._after{margin-left:0}.visuallyhidden{overflow:hidden;clip:rect(0 0 0 0);position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0}.menu-item i.elusive{margin-top:-.3em}.dashicons-admin-site:before{content:"\f319"!important}.dashicons-welcome-view-site:before{content:"\f115"!important}