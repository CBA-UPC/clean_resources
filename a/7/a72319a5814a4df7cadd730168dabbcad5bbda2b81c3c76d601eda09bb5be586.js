/* info: http://bitly2019.com/wp-includes/js/jquery/jquery.js */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!"undefined"!=typeof window?window:this,;
jQuery.noConflict();
/* info: http://bitly2019.com/wp-includes/js/jquery/jquery-migrate.min.js */
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),;
(function () {
    if (typeof EventTarget !== "undefined") {
        let func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.func = func;
            if(typeof capture !== "boolean"){
                capture = capture || {};
                capture.passive = false;
            }
            this.func(type, fn, capture);
        };
    };
}());