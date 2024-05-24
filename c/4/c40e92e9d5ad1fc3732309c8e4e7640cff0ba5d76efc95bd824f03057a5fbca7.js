/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
(function($) {

    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };

    $.rightofscreen = 

    $.leftofscreen = 

    $.inviewport = 

    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {threshold : parseInt(m[3]) || 0});
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {threshold : parseInt(m[3]) || 0});
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {threshold : parseInt(m[3]) || 0});
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {threshold : parseInt(m[3]) || 0});
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {threshold : parseInt(m[3]) || 0});
        }
    });


})(jQuery);