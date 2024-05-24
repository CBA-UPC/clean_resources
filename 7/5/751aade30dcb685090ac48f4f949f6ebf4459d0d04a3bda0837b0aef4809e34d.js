/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], function (e) { return t(e, window) }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window) }(;

/*! jQuery.browser pollyfill */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (s, n) {
        var matched, browser;

        s.uaMatch = 

        matched = s.uaMatch(navigator.userAgent);
        browser = {};

        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }

        // Chrome is Webkit, but Webkit is also Safari.
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }

        s.browser = browser;
    });

(function (jQuery) {
    var oldParseJSON = jQuery.parseJSON;

	// Let $.parseJSON(falsy_value) return null
	jQuery.parseJSON = function (json) {
		if (!json && json !== null) {
			return null;
		}
		return oldParseJSON.apply(this, arguments);
	};

	// Ensure that $.ajax gets the new parseJSON defined in core.js
	jQuery.ajaxSetup({
		converters: {
			"text json": jQuery.parseJSON
		}
	});
})(jQuery);
