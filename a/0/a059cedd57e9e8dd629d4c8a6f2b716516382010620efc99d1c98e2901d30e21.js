/* global pysOptions */

// https://bitbucket.org/pixelyoursite/pys_pro_7/issues/7/possible-ie-11-error
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: }
    });
}

!function ($, options) {

    if (options.debug) {
        console.log('PYS:', options);
    }

    var dummyPinterest = function () {

        /**
         * Public API
         */
        return {

            isEnabled: function () {
            },

            disable: function () {
            },

            loadPixel: function () {
            },

            fireEvent: function (name, data) {
                return false;
            },

            onCommentEvent: function () {
            },

            onDownloadEvent: function (params) {
            },

            onFormEvent: function (params) {
            },

            onWooAddToCartOnButtonEvent: function (product_id) {
            },

            onWooAddToCartOnSingleEvent: function (product_id, qty, is_variable, is_external, $form) {
            },

            onWooRemoveFromCartEvent: function (cart_item_hash) {
            },

            onEddAddToCartOnButtonEvent: function (download_id, price_index, qty) {
            },

            onEddRemoveFromCartEvent: function (item) {
            },
            onPageScroll: function (event) {},
            onTime: function (event) {

            },

        }

    }();

    var dummyBing = function () {

        /**
         * Public API
         */
        return {

            isEnabled: function () {
            },

            disable: function () {
            },

            loadPixel: function () {
            },

            fireEvent},

            onAdSenseEvent: function () {
            },

            onClickEvent: function (params) {
            },

            onWatchVideo: function (params) {
            },

            onCommentEvent: function () {
            },

            onFormEvent: function (params) {
            },

            onDownloadEvent: function (params) {
            },

            onWooAddToCartOnButtonEvent: function (product_id) {
            },

            onWooAddToCartOnSingleEvent},

            onWooRemoveFromCartEvent: function (cart_item_hash) {
            },

            onWooAffiliateEvent: function (product_id) {
            },

            onWooPayPalEvent: function () {
            },

            onEddAddToCartOnButtonEvent},

            onEddRemoveFromCartEvent: function (item) {
            },

            onPageScroll: function (event) {
            },

            onTime},

        }

    }();

    var Utils = function (options) {

        var Pinterest = dummyPinterest;

        var Bing = dummyBing;

        var gtag_loaded = false;

        function loadPixels() {

            if (!options.gdpr.all_disabled_by_api) {

                if (!options.gdpr.facebook_disabled_by_api) {
                    Facebook.loadPixel();
                }

                if (!options.gdpr.analytics_disabled_by_api) {
                    Analytics.loadPixel();
                }

                if (!options.gdpr.pinterest_disabled_by_api) {
                    Pinterest.loadPixel();
                }

                if (!options.gdpr.bing_disabled_by_api) {
                    Bing.loadPixel();
                }
            }

        }

        /**
         * PUBLIC API
         */
        return {
            PRODUCT_SIMPLE : 0,
            PRODUCT_VARIABLE : 1,
            PRODUCT_BUNDLE : 2,
            PRODUCT_GROUPED : 3,
            fireEventForAllPixel:function(functionName,events){
                if (events.hasOwnProperty(Facebook.tag()))
                    Facebook[functionName](events[Facebook.tag()]);
                if (events.hasOwnProperty(Analytics.tag()))
                    Analytics[functionName](events[Analytics.tag()]);
                if (events.hasOwnProperty(Pinterest.tag()))
                    Pinterest[functionName](events[Pinterest.tag()]);
                if (events.hasOwnProperty(Bing.tag()))
                    Bing[functionName](events[Bing.tag()]);
            },

            setupPinterestObject: function () {
                Pinterest = window.pys.Pinterest || Pinterest;
                return Pinterest;
            },

            setupBingObject: function () {
                Bing = window.pys.Bing || Bing;
                return Bing;
            },

            // Clone all object members to another and return it
            copyProperties: function (from, to) {
                for (var key in from) {
                    if("function" == typeof from[key]) {
                        continue;
                    }
                    to[key] = from[key];
                }
                return to;
            },
            // clone object
            clone: function(obj) {
                var copy;

                // Handle the 3 simple types, and null or undefined
                if (null == obj || "object" != typeof obj) return obj;

                // Handle Date
                if (obj instanceof Date) {
                    copy = new Date();
                    copy.setTime(obj.getTime());
                    return copy;
                }

                // Handle Array
                if (obj instanceof Array) {
                    copy = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        if("function" == typeof obj[i]) {
                            continue;
                        }
                        copy[i] = Utils.clone(obj[i]);
                    }
                    return copy;
                }

                // Handle Object
                if (obj instanceof Object) {
                    copy = {};
                    for (var attr in obj) {
                        if (obj.hasOwnProperty(attr)) {
                            if("function" == typeof obj[attr]) {
                                continue;
                            }
                            copy[attr] = Utils.clone(obj[attr]);
                        }
                    }
                    return copy;
                }

                return obj;
            },

            // Returns array of elements with given tag name
            getTagsAsArray},

            getRequestParams},

            /**
             * CUSTOM EVENTS
             */

            setupMouseOverClickEvents: function (eventId, triggers) {

                // Non-default binding used to avoid situations when some code in external js
                // stopping events propagation, eg. returns false, and our handler will never called
                $(document).onFirst('mouseover', triggers.join(','), function () {

                    // do not fire event multiple times
                    if ($(this).hasClass('pys-mouse-over-' + eventId)) {
                        return true;
                    } else {
                        $(this).addClass('pys-mouse-over-' + eventId);
                    }

                    Utils.fireDynamicEvent(eventId);

                });

            },

            setupCSSClickEvents: function (eventId, triggers) {

                // Non-default binding used to avoid situations when some code in external js
                // stopping events propagation, eg. returns false, and our handler will never called
                $(document).onFirst('click', triggers.join(','), function () {
                    Utils.fireTriggerEvent(eventId);
                });
            },

            setupURLClickEvents: function () {

                // Non-default binding used to avoid situations when some code in external js
                // stopping events propagation, eg. returns false, and our handler will never called
                $('a[data-pys-event-id]').onFirst('click', function (evt) {

                    $(this).attr('data-pys-event-id').split(',').forEach(function (eventId) {

                        eventId = parseInt(eventId);

                        if (isNaN(eventId) === false) {
                            Utils.fireTriggerEvent(eventId);
                        }

                    });

                });


            },

            setupScrollPosEvents: function (eventId, triggers) {

                var scrollPosThresholds = {},
                    docHeight = $(document).height() - $(window).height();

                // convert % to absolute positions
                $.each(triggers, function (index, scrollPos) {

                    // convert % to pixels
                    scrollPos = docHeight * scrollPos / 100;
                    scrollPos = Math.round(scrollPos);

                    scrollPosThresholds[scrollPos] = eventId;

                });

                $(document).on("scroll",function () {

                    var scrollPos = $(window).scrollTop();

                    $.each(scrollPosThresholds, function (threshold, eventId) {

                        // position has not reached yes
                        if (scrollPos <= threshold) {
                            return true;
                        }

                        // fire event only once
                        if (eventId === null) {
                            return true;
                        } else {
                            scrollPosThresholds[threshold] = null;
                        }

                        Utils.fireTriggerEvent(eventId);

                    });

                });


            },
            setupCommentEvents : function (eventId,triggers) {
                $('form.comment-form').on("submit});
            },

            /**
             * Events
             */

            fireTriggerEvent: function (eventId) {

                if (!options.triggerEvents.hasOwnProperty(eventId)) {
                    return;
                }

                var event = {};
                var events = options.triggerEvents[eventId];

                if (events.hasOwnProperty('facebook')) {
                    event = events.facebook;
                    Facebook.fireEvent(event.name, event);
                }

                if (events.hasOwnProperty('ga')) {
                    event = events.ga;
                    Analytics.fireEvent(event.name, event);
                }

                if (events.hasOwnProperty('pinterest')) {
                    event = events.pinterest;
                    Pinterest.fireEvent(event.name, event);
                }

                if (events.hasOwnProperty('bing')) {
                    event = events.bing;
                    Bing.fireEvent(event.name, event);
                }
            },

            fireStaticEvents: function (pixel) {

                if (options.staticEvents.hasOwnProperty(pixel)) {

                    $.each(options.staticEvents[pixel], function (eventName, events) {
                        $.each(events, function (index, eventData) {

                            eventData.fired = eventData.fired || false;

                            if (!eventData.fired) {

                                var fired = false;

                                // fire event
                                if ('facebook' === pixel) {
                                    fired = Facebook.fireEvent(eventData.name, eventData);
                                } else if ('ga' === pixel) {
                                    fired = Analytics.fireEvent(eventData.name, eventData);
                                } else if ('pinterest' === pixel) {
                                    fired = Pinterest.fireEvent(eventData.name, eventData);
                                } else if ('bing' === pixel) {
                                    fired = Bing.fireEvent(eventData.name, eventData);
                                }

                                // prevent event double event firing
                                eventData.fired = fired;

                            }

                        });
                    });

                }

            },

            /**
             * Load tag's JS
             *
             * @link: https://developers.google.com/analytics/devguides/collection/gtagjs/
             * @link: https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets
             */
            loadGoogleTag: function (id) {

                if (!gtag_loaded) {

                    (function (window, document, src) {
                        var a = document.createElement('script'),
                            m = document.getElementsByTagName('script')[0];
                        a.async = 1;
                        a.src = src;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, '//www.googletagmanager.com/gtag/js?id=' + id);

                    window.dataLayer = window.dataLayer || [];
                    window.gtag = window.gtag |};

                    gtag('js', new Date());

                    gtag_loaded = true;

                }

            },

            /**
             * GDPR
             */

            loadPixels: function () {

                if (options.gdpr.ajax_enabled && !options.gdpr.consent_magic_integration_enabled) {

                    // retrieves actual PYS GDPR filters values which allow to avoid cache issues
                    $.get({
                        url: options.ajaxUrl,
                        dataType: 'json',
                        data: {
                            action: 'pys_get_gdpr_filters_values'
                        },
                        success: function (res) {

                            if (res.success) {

                                options.gdpr.all_disabled_by_api = res.data.all_disabled_by_api;
                                options.gdpr.facebook_disabled_by_api = res.data.facebook_disabled_by_api;
                                options.gdpr.analytics_disabled_by_api = res.data.analytics_disabled_by_api;
                                options.gdpr.google_ads_disabled_by_api = res.data.google_ads_disabled_by_api;
                                options.gdpr.pinterest_disabled_by_api = res.data.pinterest_disabled_by_api;
                                options.gdpr.bing_disabled_by_api = res.data.bing_disabled_by_api;

                            }

                            loadPixels();

                        }
                    });

                } else {
                    loadPixels();
                }

            },

            consentGiven: function (pixel) {

                /**
                 * ConsentMagic
                 */
                if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {

                    var cs_cookie = Cookies.get('cs_viewed_cookie_policy'+test_prefix);

                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cs_cookie === 'undefined' || cs_cookie === 'yes') {
                            return true;
                        }
                    } else {
                        if (typeof cs_cookie === 'undefined' || cs_cookie === 'yes') {
                            return true;
                        }
                    }

                    return false;

                }

                /**
                 * Real Cookie Banner
                 */
                if(options.gdpr.real_cookie_banner_integration_enabled) {
                    var consentApi = window.consentApi;
                    if (consentApi) {
                        switch (pixel) {
                            case "analytics":
                                return consentApi.consentSync("http", "_ga", "*").cookieOptIn;
                            case "facebook":
                                return consentApi.consentSync("http", "_fbp", "*").cookieOptIn;
                            case "pinterest":
                                return consentApi.consentSync("http", "_pinterest_sess", ".pinterest.com").cookieOptIn;
                            default:
                                return true;
                        }
                    }
                }

                /**
                 * Cookiebot
                 */
                if (options.gdpr.cookiebot_integration_enabled && typeof Cookiebot !== 'undefined') {

                    var cookiebot_consent_category = options.gdpr['cookiebot_' + pixel + '_consent_category'];

                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (Cookiebot.consented === false || Cookiebot.consent[cookiebot_consent_category]) {
                            return true;
                        }
                    } else {
                        if (Cookiebot.consent[cookiebot_consent_category]) {
                            return true;
                        }
                    }

                    return false;

                }

                /**
                 * Cookie Notice
                 */
                if (options.gdpr.cookie_notice_integration_enabled && typeof cnArgs !== 'undefined') {

                    var cn_cookie = Cookies.get(cnArgs.cookieName);

                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cn_cookie === 'undefined' || cn_cookie === 'true') {
                            return true;
                        }
                    } else {
                        if (cn_cookie === 'true') {
                            return true;
                        }
                    }

                    return false;

                }

                /**
                 * Cookie Law Info
                 */
                if (options.gdpr.cookie_law_info_integration_enabled) {

                    var cli_cookie = Cookies.get('viewed_cookie_policy');

                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cli_cookie === 'undefined' || cli_cookie === 'yes') {
                            return true;
                        }
                    } else {
                        if (cli_cookie === 'yes') {
                            return true;
                        }
                    }

                    return false;

                }

                return true;

            },

            setupGdprCallbacks: function () {
                /**
                 * ConsentMagic
                 */
                if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                    var test_prefix = CS_Data.test_prefix,
                        cs_refresh_after_consent = false,
                        substring = "cs_enabled_cookie_term";

                    if (CS_Data.cs_refresh_after_consent == 1) {
                        cs_refresh_after_consent = CS_Data.cs_refresh_after_consent;
                    }

                    if (!cs_refresh_after_consent) {
                        var theCookies = document.cookie.split(';');
                        for (var i = 1 ; i <= theCookies.length; i++) {
                            if (theCookies[i-1].indexOf(substring) !== -1) {
                                var categoryCookie = theCookies[i-1].replace('cs_enabled_cookie_term'+test_prefix+'_','');
                                categoryCookie = Number(categoryCookie.replace(/\D+/g,""));
                                var cs_cookie_val = Cookies.get('cs_enabled_cookie_term'+test_prefix+'_'+categoryCookie);
                                if(cs_cookie_val == 'yes') {
                                    if (categoryCookie === CS_Data.cs_script_cat.facebook) {
                                        Facebook.loadPixel();
                                    } 
                                    
                                    if (categoryCookie === CS_Data.cs_script_cat.bing) {
                                        Bing.loadPixel();
                                    } 
                                    
                                    if (categoryCookie === CS_Data.cs_script_cat.analytics) {
                                        Analytics.loadPixel();
                                    } 
                                    
                                     if (categoryCookie === CS_Data.cs_script_cat.pinterest) {
                                        Pinterest.loadPixel();
                                    }
                                } else {
                                    if (categoryCookie === CS_Data.cs_script_cat.facebook) {
                                        Facebook.disable();
                                    } 
                                    
                                     if (categoryCookie === CS_Data.cs_script_cat.bing) {
                                        Bing.disable();
                                    } 
                                    
                                     if (categoryCookie === CS_Data.cs_script_cat.analytics) {
                                        Analytics.disable();
                                    } 
                                    
                                     if (categoryCookie === CS_Data.cs_script_cat.pinterest) {
                                        Pinterest.disable();
                                    }
                                }
                                if (Cookies.get('cs_enabled_advanced_matching') == 'yes') {
                                    Facebook.loadPixel();
                                }
                            }
                        }

                        $(document).on('click','.cs_action_btn',function(e) {
                            e.preventDefault();
                            var elm = $(this),
                                button_action = elm.attr('data-cs_action');

                            if(button_action === 'allow_all') {
                                Facebook.loadPixel();
                                Bing.loadPixel();
                                Analytics.loadPixel();
                                Pinterest.loadPixel();
                            } else if(button_action === 'disable_all') {
                                Facebook.disable();
                                Bing.disable();
                                Analytics.disable();
                                Pinterest.disable();
                            }
                        });
                    }
                }
                /**
                 * Real Cookie Banner
                 */
                if(options.gdpr.real_cookie_banner_integration_enabled) {
                    var consentApi = window.consentApi;
                    if (consentApi) {
                        consentApi.consent("http", "_ga", "*")
                            .then(Analytics.loadPixel.bind(Analytics), Analytics.disable.bind(Analytics));
                        consentApi.consent("http", "_fbp", "*")
                            .then(Facebook.loadPixel.bind(Facebook), Facebook.disable.bind(Facebook));
                        consentApi.consent("http", "_pinterest_sess", ".pinterest.com")
                            .then(Pinterest.loadPixel.bind(Pinterest), Pinterest.disable.bind(Pinterest));
                    }
                }
                /**
                 * Cookiebot
                 */
                if (options.gdpr.cookiebot_integration_enabled && typeof Cookiebot !== 'undefined') {

                    window.addEventListener("CookiebotOnConsentReady", function() {
                        if (Cookiebot.consent.marketing) {
                            Facebook.loadPixel();
                            Bing.loadPixel();
                            Pinterest.loadPixel();

                        }
                        if (Cookiebot.consent.statistics) {
                            Analytics.loadPixel();
                        }
                        if (!Cookiebot.consent.marketing) {
                            Facebook.disable();
                            Pinterest.disable();
                            Bing.disable()
                        }
                        if (!Cookiebot.consent.statistics) {
                            Analytics.disable();
                        }
                    });

                }

                /**
                 * Cookie Notice
                 */
                if (options.gdpr.cookie_notice_integration_enabled) {

                    $(document).onFirst('click', '.cn-set-cookie', function () {

                        if ($(this).data('cookie-set') === 'accept') {
                            Facebook.loadPixel();
                            Analytics.loadPixel();
                            Pinterest.loadPixel();
                            Bing.loadPixel();
                        } else {
                            Facebook.disable();
                            Analytics.disable();
                            Pinterest.disable();
                            Bing.disable();
                        }

                    });

                    $(document).onFirst('click', '.cn-revoke-cookie', function () {
                        Facebook.disable();
                        Analytics.disable();
                        Pinterest.disable();
                        Bing.disable();
                    });

                }

                /**
                 * Cookie Law Info
                 */
                if (options.gdpr.cookie_law_info_integration_enabled) {

                    $(document).onFirst('click', '#cookie_action_close_header', function () {
                        Facebook.loadPixel();
                        Analytics.loadPixel();
                        Pinterest.loadPixel();
                        Bing.loadPixel();
                    });

                    $(document).onFirst('click', '#cookie_action_close_header_reject'});

                }

            },

            /**
             * DOWNLOAD DOCS
             */

            getLinkExtension: function (link) {

                // Remove anchor, query string and everything before last slash
                link = link.substring(0, (link.indexOf("#") === -1) ? link.length : link.indexOf("#"));
                link = link.substring(0, (link.indexOf("?") === -1) ? link.length : link.indexOf("?"));
                link = link.substring(link.lastIndexOf("/") + 1, link.length);

                // If there's a period left in the URL, then there's a extension
                if (link.length > 0 && link.indexOf('.') !== -1) {
                    link = link.substring(link.indexOf(".") + 1); // Remove everything but what's after the first period
                    return link;
                } else {
                    return "";
                }
            },

            getLinkFilename: function (link) {

                // Remove anchor, query string and everything before last slash
                link = link.substring(0, (link.indexOf("#") === -1) ? link.length : link.indexOf("#"));
                link = link.substring(0, (link.indexOf("?") === -1) ? link.length : link.indexOf("?"));
                link = link.substring(link.lastIndexOf("/") + 1, link.length);

                // If there's a period left in the URL, then there's a extension
                if (link.length > 0 && link.indexOf('.') !== -1) {
                    return link;
                } else {
                    return "";
                }
            }

        };

    }(options);

    var Facebook = function (options) {


        var defaultEventTypes = [
            'PageView',
            'ViewContent',
            'Search',
            'AddToCart',
            'AddToWishlist',
            'InitiateCheckout',
            'AddPaymentInfo',
            'Purchase',
            'Lead',

            'Subscribe',
            'CustomizeProduct',
            'FindLocation',
            'StartTrial',
            'SubmitApplication',
            'Schedule',
            'Contact',
            'Donate'
        ];

        var initialized = false;

        // fire server side event gdpr plugin installed
        var isApiDisabled = options.gdpr.all_disabled_by_api ||
            options.gdpr.facebook_disabled_by_api ||
            options.gdpr.cookiebot_integration_enabled ||
            options.gdpr.consent_magic_integration_enabled ||
            options.gdpr.cookie_notice_integration_enabled ||
            options.gdpr.cookie_law_info_integration_enabled;

        function fireEvent(name, allData) {

            if(typeof window.pys_event_data_filter === "function" && window.pys_disable_event_filter(name,'facebook')) {
                return;
            }

            var actionType = defaultEventTypes.includes(name) ? 'track' : 'trackCustom';
            var data = allData.params;
            var params = {};
            var arg = {};
            Utils.copyProperties(data, params);

            if(options.facebook.serverApiEnabled) {

                var isAddToCartFromJs =  options.woo.hasOwnProperty("addToCartCatchMethod")
                    && options.woo.addToCartCatchMethod === "add_cart_js";

                if(allData.e_id === "woo_remove_from_cart"
                    || (isAddToCartFromJs && allData.e_id === "woo_add_to_cart_on_button_click"))
                {
                    Facebook.updateEventId(allData.name);
                    allData.eventID = Facebook.getEventId(allData.name);
                } else  if(  options.facebook.ajaxForServerEvent
                                || isApiDisabled
                                || allData.delay > 0
                                || allData.type !== "static")
                { // send event from server if they was bloc by gdpr or need send with delay
                    allData.eventID = pys_generate_token(36);
                    var json = {
                        action: 'pys_api_event',
                        pixel: 'facebook',
                        event: name,
                        data:data,
                        ids:options.facebook.pixelIds,
                        eventID:allData.eventID,
                        url:window.location.href,
                    };
                    if(allData.hasOwnProperty('woo_order')) {
                        json['woo_order'] = allData.woo_order;
                    }
                    if(allData.hasOwnProperty('edd_order')) {
                        json['edd_order'] = allData.edd_order;
                    }

                    if(allData.delay > 0) {
                        jQuery.ajax( {
                            type: 'POST',
                            url: options.ajaxUrl,
                            data: json,
                            headers: {
                                'Cache-Control': 'no-cache'
                            },
                            success: function(){},
                        });
                    } else {
                       // if(name != "AddToCart") { // AddToCart call from hook
                            setTimeout(function (json) {
                                jQuery.ajax({
                                    type: 'POST',
                                    url: options.ajaxUrl,
                                    data: json,
                                    headers: {
                                        'Cache-Control': 'no-cache'
                                    },
                                    success},
                                });
                            }, 500, json);
                        //}
                    }
                }
            }


            if("hCR" === name) {
                return;
            }

            if (options.debug) {
                console.log('[Facebook] ' + name, params,"eventID",allData.eventID);
            }

            if(allData.hasOwnProperty('eventID')) {
                arg.eventID = allData.eventID;
            }

            fbq(actionType, name, params,arg);
        }

        /**
         * Public API
         */
        return {
            tag: function() {
                return "facebook";
            },
            isEnabled: function () {
                return options.hasOwnProperty('facebook');
            },

            disable: function () {
                initialized = false;
            },

            /**
             * Load pixel's JS
             */
            loadPixel: function () {

                if (initialized || !this.isEnabled() || !Utils.consentGiven('facebook')) {
                    return;
                }

                !function (f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.agent = 'dvpixelyoursite';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window,
                    document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

                // initialize pixel
                options.facebook.pixelIds.forEach(function (pixelId) {

                    if (options.facebook.removeMetadata) {
                        fbq('set', 'autoConfig', false, pixelId);
                    }
                    if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                        if(options.facebook.advancedMatching.length === 0) {
                            fbq('init', pixelId);
                        } else {
                            var cs_advanced_matching = Cookies.get('cs_enabled_advanced_matching'+test_prefix);
                            if (jQuery('#cs_enabled_advanced_matching'+test_prefix).length > 0) {
                                if (cs_advanced_matching == 'yes') {
                                    fbq('init', pixelId, options.facebook.advancedMatching);
                                } else {
                                    fbq('init', pixelId);
                                }
                            } else {
                                fbq('init', pixelId, options.facebook.advancedMatching);
                            }
                        }
                    } else {
                        if (options.facebook.advancedMatching.length === 0) {
                            fbq('init', pixelId);
                        } else {
                            fbq('init', pixelId, options.facebook.advancedMatching);
                        }
                    }
                });

                initialized = true;

                Utils.fireStaticEvents('facebook');

            },

            fireEvent: function (name, data) {

                if (!initialized || !this.isEnabled()) {
                    return false;
                }

                data.delay = data.delay || 0;
                data.params = data.params || {};

                if (data.delay === 0) {

                    fireEvent(name, data);

                } else {

                    setTimeout(function (name, params) {
                        fireEvent(name, params);
                    }, data.delay * 1000, name, data);

                }

                return true;

            },

            onCommentEvent: function (event) {
                this.fireEvent(event.name, event);
            },

            onDownloadEvent: function (event) {
                this.fireEvent(event.name, event);
            },

            onFormEvent: function (event) {

                this.fireEvent(event.name, event);

            },

            onWooAddToCartOnButtonEvent: function (product_id) {

                if(!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()];

                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('facebook')) {
                        event = Utils.copyProperties(event, {})
                        Utils.copyProperties(window.pysWooProductData[product_id]['facebook'].params, event.params)
                        this.fireEvent(event.name, event);
                    }
                }
            },

            onWooAddToCartOnSingleEvent: function (product_id, qty, product_type, $form) {

                window.pysWooProductData = window.pysWooProductData || [];
                if(!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);

                if (product_type === Utils.PRODUCT_VARIABLE && !options.facebook.wooVariableAsSimple) {
                    product_id = parseInt($form.find('input[name="variation_id"]').val());
                }

                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('facebook')) {


                        Utils.copyProperties(window.pysWooProductData[product_id]['facebook'].params, event.params);

                        var groupValue = 0;
                        if(product_type === Utils.PRODUCT_GROUPED ) {
                            $form.find(".woocommerce-grouped-product-list .qty").each(function(index){
                                var childId = $(this).attr('name').replaceAll("quantity[","").replaceAll("]","");
                                var quantity = parseInt($(this).val());
                                if(isNaN(quantity)) {
                                    quantity = 0;
                                }
                                var childItem = window.pysWooProductData[product_id]['facebook'].grouped[childId];

                                if(quantity == 0) {
                                    event.params.content_ids.forEach(function(el,index,array) {
                                        if(el == childItem.content_id) {
                                            array.splice(index, 1);
                                        }
                                    });
                                }

                                if(event.params.hasOwnProperty('contents')) {
                                    event.params.contents.forEach(function(el,index,array) {
                                        if(el.id == childItem.content_id) {
                                            if(quantity > 0){
                                                el.quantity = quantity;
                                            } else {
                                                array.splice(index, 1);
                                            }
                                        }
                                    });
                                }


                                groupValue += childItem.price * quantity;
                            });
                            if(groupValue == 0) return; // skip if no items selected
                        }

                        // maybe customize value option
                        if (options.woo.addToCartOnButtonValueEnabled && options.woo.addToCartOnButtonValueOption !== 'global') {

                            if(product_type === Utils.PRODUCT_GROUPED) {
                                event.params.value = groupValue;
                            } else if(product_type === Utils.PRODUCT_BUNDLE) {
                                var data = $(".bundle_form .bundle_data").data("bundle_form_data");
                                var items_sum = getBundlePriceOnSingleProduct(data);
                                event.params.value = (parseInt(data.base_price) + items_sum )* qty;
                            } else {
                                event.params.value = event.params.value * qty;
                            }
                        }

                        // only when non Facebook for WooCommerce logic used
                        if (event.params.hasOwnProperty('contents') && product_type !== Utils.PRODUCT_GROUPED) {
                            event.params.contents[0].quantity = qty;
                        }

                        this.fireEvent(event.name, event);

                    }
                }
            },

            onWooRemoveFromCartEvent: function (event) {
                this.fireEvent(event.name, event);
            },

            onEddAddToCartOnButtonEvent: function (download_id, price_index, qty) {

                if(!options.dynamicEvents.edd_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.edd_add_to_cart_on_button_click[this.tag()]);

                if (window.pysEddProductData.hasOwnProperty(download_id)) {

                    var index;

                    if (price_index) {
                        index = download_id + '_' + price_index;
                    } else {
                        index = download_id;
                    }

                    if (window.pysEddProductData[download_id].hasOwnProperty(index)) {
                        if (window.pysEddProductData[download_id][index].hasOwnProperty('facebook')) {


                            Utils.copyProperties(window.pysEddProductData[download_id][index]['facebook']["params"], event.params)

                            // maybe customize value option
                            if (options.edd.addToCartOnButtonValueEnabled && options.edd.addToCartOnButtonValueOption !== 'global') {
                                event.params.value = event.params.value * qty;
                            }

                            // update contents qty param
                            var contents = event.params.contents;
                            contents[0].quantity = qty;
                            event.params.contents = contents;

                            this.fireEvent(event.name,event);

                        }
                    }

                }

            },

            onEddRemoveFromCartEvent: function (event) {
                this.fireEvent(event.name, event);
            },
            onPageScroll: function (event) {
                this.fireEvent(event.name, event);
            },
            onTime: function (event) {
                this.fireEvent(event.name, event);
            },
            initEventIdCookies: function (key) {
                var ids = {};
                ids[key] = pys_generate_token(36)
                Cookies.set('pys_fb_event_id', JSON.stringify(ids));
            },
            updateEventId:function(key) {
                var cooData = Cookies.get("pys_fb_event_id")
                if(data === undefined) {
                    this.initEventIdCookies(key);
                } else {
                    var data = JSON.parse(cooData);
                    data[key] = pys_generate_token(36);
                    Cookies.set('pys_fb_event_id', JSON.stringify(data) );
                }
            },

            getEventId:function (key) {
                var data = Cookies.get("pys_fb_event_id");
                if(data === undefined) {
                    this.initEventIdCookies(key);
                    data = Cookies.get("pys_fb_event_id");
                }
                return JSON.parse(data)[key];
            },
        };

    }(options);

    var Analytics = function (options) {

        var initialized = false;

        /**
         * Fires event
         *
         * @link: https://developers.google.com/analytics/devguides/collection/gtagjs/sending-data
         * @link: https://developers.google.com/analytics/devguides/collection/gtagjs/events
         * @link: https://developers.google.com/gtagjs/reference/event
         * @link: https://developers.google.com/gtagjs/reference/parameter
         *
         * @link: https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets
         *
         * @param name
         * @param data
         */
        function fireEvent(name, data) {

            if(typeof window.pys_event_data_filter === "function" && window.pys_disable_event_filter(name,'ga')) {
                return;
            }

            var eventParams = Utils.copyProperties(data, {});

            var _fireEvent = function (tracking_id,name,params) {

                params['send_to'] = tracking_id;

                if (options.debug) {
                    console.log('[Google Analytics #' + tracking_id + '] ' + name, params);
                }

                gtag('event', name, params);

            };

            options.ga.trackingIds.forEach(function (tracking_id) {
                var copyParams = Utils.copyProperties(eventParams, {}); // copy params because mapParamsTov4 can modify it
                var params = mapParamsTov4(tracking_id,name,copyParams)
                _fireEvent(tracking_id,name,params);
            });

        }
        function mapParamsTov4(tag,name,param) {
            if(isv4(tag)) {
                delete param.traffic_source;
                delete param.event_category;
                delete param.event_label;
                delete param.ecomm_prodid;
                delete param.ecomm_pagetype;
                delete param.ecomm_totalvalue;
                if(name === 'search') {
                    param['search'] = param.search_term;
                    delete param.search_term;
                    delete param.non_interaction;
                    delete param.dynx_itemid;
                    delete param.dynx_pagetype;
                    delete param.dynx_totalvalue;
                }
            } else {
                //delete standard params
                delete param.page_title;
                delete param.post_type;
                delete param.post_id;
                delete param.plugin;
                delete param.page_title;
                delete param.event_url;
                delete param.user_role;
                delete param.cartlows;
                delete param.cartflows_flow;
                delete param.cartflows_step;

                if(name === 'Signal') {
                    switch (param.event_action) {
                        case 'External Click':
                        case 'Internal Click':
                        case 'Tel':
                        case 'Email': {
                            let params = {
                                event_category: name,
                                event_action: param.event_action,
                                non_interaction: param.non_interaction,
                            }
                            if(options.trackTrafficSource) {
                                params['traffic_source'] = param.traffic_source
                            }
                            return params;
                        }break;
                        case 'Video': {
                            let params = {
                                event_category: name,
                                event_action: param.event_action,
                                event_label: param.video_title,
                                non_interaction: param.non_interaction,
                            }
                            if(options.trackTrafficSource) {
                                params['traffic_source'] = param.traffic_source
                            }
                            return params;
                        }break;
                        case 'Comment': {
                            let params = {
                                event_category: name,
                                event_action: param.event_action,
                                event_label: document.location.href,
                                non_interaction: param.non_interaction,
                            }
                            if(options.trackTrafficSource) {
                                params['traffic_source'] = param.traffic_source
                            }
                            return params;
                        }break;
                        case 'Form': {
                            var params = {
                                event_category: name,
                                event_action: param.event_action,
                                non_interaction: param.non_interaction,
                            };
                            if(options.trackTrafficSource) {
                                params['traffic_source'] = param.traffic_source
                            }
                            var formClass = (typeof param.form_class != 'undefined') ? 'class: ' + param.form_class : '';
                            if(formClass != "") {
                                params["event_label"] = formClass;
                            }
                            return params;
                        }break;
                        case 'Download': {
                            return {
                                event_category: name,
                                event_action: param.event_action,
                                event_label: param.download_name,
                                non_interaction: param.non_interaction,
                            }
                        }break;
                    }
                    if(param.event_action.indexOf('Scroll') === 0){
                        var scroll_percent = param.event_action.substring(
                            param.event_action.indexOf(' ')+1,
                            param.event_action.indexOf('%')
                        );
                        let params =  {
                            event_category: name,
                            event_action: param.event_action,
                            event_label: scroll_percent,
                            non_interaction: param.non_interaction,
                        }
                        if(options.trackTrafficSource) {
                            params['traffic_source'] = param.traffic_source
                        }
                        return params;
                    }
                    if(param.event_action.indexOf('Time on page') === 0) {
                        let time_on_page = param.event_action.substring(
                            14,
                            param.event_action.indexOf(' seconds')
                        );
                        let params = {
                            event_category: name,
                            event_action: param.event_action,
                            event_label: time_on_page,
                            non_interaction: param.non_interaction,

                        };
                        if(options.trackTrafficSource) {
                            params['traffic_source'] = param.traffic_source
                        }
                        return params
                    }
                }

            }
            return param;
        }

      }

        /**
         * Public API
         */
        return {
            tag},
            isEnabled},

            disable},

            loadPixel: function () {

                if (initialized || !this.isEnabled() || !Utils.consentGiven('analytics')) {
                    return;
                }

                Utils.loadGoogleTag(options.ga.trackingIds[0]);

                var config = {
                    'link_attribution': options.ga.enhanceLinkAttr,
                    'anonymize_ip': options.ga.anonimizeIP
                };

                // Cross-Domain tracking
                if (options.ga.crossDomainEnabled) {
                    config.linker = {
                        accept_incoming: options.ga.crossDomainAcceptIncoming,
                        domains: options.ga.crossDomainDomains
                    };
                }



                // configure tracking ids
                options.ga.trackingIds.forEach(function (trackingId,index) {
                    if(options.ga.isDebugEnabled.includes("index_"+index)) {
                        config.debug_mode = true;
                    } else {
                        config.debug_mode = false;
                    }
                    if(isv4(trackingId)) {
                        if(options.ga.disableAdvertisingFeatures) {
                            config.allow_google_signals = false
                        }
                        if(options.ga.disableAdvertisingPersonalization) {
                            config.allow_ad_personalization_signals = false
                        }
                    }
                    gtag('config', trackingId, config);
                });

                initialized = true;

                Utils.fireStaticEvents('ga');

            },

            fireEvent: function (name, data) {

                if (!initialized || !this.isEnabled()) {
                    return false;
                }

                data.delay = data.delay || 0;
                data.params = data.params || {};

                if (data.delay === 0) {

                    fireEvent(name, data.params);

                } else {

                    setTimeou}, data.delay * 1000, name, data.params);

                }

                return true;

            },

            onCommentEvent: function (event) {
                this.fireEvent(event.name, event);
            },

            onDownloadEvent: function (event) {
                this.fireEvent(event.name, event);
            },

            onFormEvent: function (event) {
                this.fireEvent(event.name, event);
            },

            onWooAddToCartOnButtonEvent: function (product_id) {

                if(!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);

                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('ga')) {
                        Utils.copyProperties(window.pysWooProductData[product_id]['ga'].params, event.params)
                        this.fireEvent(event.name, event);
                    }
                }


            },

            onWooAddToCartOnSingleEvent: function (product_id, qty, product_type, $form) {

                window.pysWooProductData = window.pysWooProductData || [];

                if(!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);

                if (product_type === Utils.PRODUCT_VARIABLE && !options.ga.wooVariableAsSimple) {
                    product_id = parseInt($form.find('input[name="variation_id"]').val());
                }

                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('ga')) {

                        Utils.copyProperties(window.pysWooProductData[product_id]['ga'].params, event.params);
                        if(product_type === Utils.PRODUCT_GROUPED ) {
                            var groupValue = 0;
                            $form.find(".woocommerce-grouped-product-list .qty").each(function(index){
                                var childId = $(this).attr('name').replaceAll("quantity[","").replaceAll("]","");
                                var quantity = parseInt($(this).val());
                                if(isNaN(quantity)) {
                                    quantity = 0;
                                }
                                var childItem = window.pysWooProductData[product_id]['ga'].grouped[childId];
                                // update quantity
                                event.params.items.forEach(function(el,index,array) {
                                    if(el.id == childItem.content_id) {
                                        if(quantity > 0){
                                            el.quantity = quantity;
                                        } else {
                                            array.splice(index, 1);
                                        }
                                    }
                                });
                                groupValue += childItem.price * quantity;
                            });
                            if(options.woo.addToCartOnButtonValueEnabled &&
                                options.woo.addToCartOnButtonValueOption !== 'global' &&
                                event.params.hasOwnProperty('ecomm_totalvalue')) {
                                event.params.ecomm_totalvalue = groupValue;
                            }

                            if(groupValue == 0) return; // skip if no items selected
                        } else {
                            // update items qty param
                            event.params.items[0].quantity = qty;
                        }

                        // maybe customize value option
                        if (options.woo.addToCartOnButtonValueEnabled &&
                            options.woo.addToCartOnButtonValueOption !== 'global' &&
                            product_type !== Utils.PRODUCT_GROUPED)
                        {
                            if(event.params.hasOwnProperty('ecomm_totalvalue')) {
                                event.params.ecomm_totalvalue = event.params.items[0].price * qty;
                            }

                        }


                        this.fireEvent(event.name, event);
                    }
                }

            },

            onWooRemoveFromCartEvent: function (event) {

                this.fireEvent(event.name, event);

            },

            onEddAddToCartOnButtonEvent: function (download_id, price_index, qty) {

                if(!options.dynamicEvents.edd_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.edd_add_to_cart_on_button_click[this.tag()]);


                if (window.pysEddProductData.hasOwnProperty(download_id)) {

                    var index;

                    if (price_index) {
                        index = download_id + '_' + price_index;
                    } else {
                        index = download_id;
                    }

                    if (window.pysEddProductData[download_id].hasOwnProperty(index)) {
                        if (window.pysEddProductData[download_id][index].hasOwnProperty('ga')) {

                            Utils.copyProperties(window.pysEddProductData[download_id][index]['ga'].params, event.params);

                            // update items qty param
                            event.params.items[0].quantity = qty;

                            this.fireEvent(event.name,event);

                        }
                    }

                }

            },

            onEddRemoveFromCartEvent: function (event) {
                this.fireEvent(event.name, event);
            },
            onPageScroll: function (event) {
                this.fireEvent(event.name, event);
            },
            onTime},

        };

    }(options);

    window.pys = window.pys || {};
    window.pys.Facebook = Facebook;
    window.pys.Analytics = Analytics;
    window.pys.Utils = Utils;




    $(document).ready(function () {

        if($("#pys_late_event").length > 0) {
            var events =  JSON.parse($("#pys_late_event").attr("dir"));
            for(var key in events) {
                var event = {};
                event[events[key].e_id] = [events[key]];
                if(options.staticEvents.hasOwnProperty(key)) {
                    Object.assign(options.staticEvents[key], event);
                } else {
                    options.staticEvents[key] = event;
                }

            }
        }

        var Pinterest = Utils.setupPinterestObject();
        var Bing = Utils.setupBingObject();

        Utils.setupGdprCallbacks();
        // page scroll event
        if (options.dynamicEvents.hasOwnProperty("signal_page_scroll")) {

            var singlePageScroll = function () {


                var docHeight = $(document).height() - $(window).height();
                var isFired = false;
                var pixels = Object.keys(options.dynamicEvents.signal_page_scroll);

                for(var i = 0;i<pixels.length;i++) {
                    var event = Utils.clone(options.dynamicEvents.signal_page_scroll[pixels[i]]);
                    var scroll = Math.round(docHeight * event.scroll_percent / 100)// convert % to absolute positions

                    if(scroll < $(window).scrollTop()) {
                        Utils.copyProperties(Utils.getRequestParams(), event.params);
                        getPixelBySlag(pixels[i]).onPageScroll(event);
                        isFired = true
                    }
                }
                if(isFired) {
                    $(document).off("scroll",singlePageScroll);
                }
            }
            $(document).on("scroll",singlePageScroll);
        }
        // page on time
        if (options.dynamicEvents.hasOwnProperty("signal_time_on_page")) {
            var pixels = Object.keys(options.dynamicEvents.signal_time_on_page);
            var time = options.dynamicEvents.signal_time_on_page[pixels[0]].time_on_page; // the same for all pixel
            setTimeout(function(){
                for(var i = 0;i<pixels.length;i++) {
                    var event = Utils.clone(options.dynamicEvents.signal_time_on_page[pixels[i]]);
                    Utils.copyProperties(Utils.getRequestParams(), event.params);
                    getPixelBySlag(pixels[i]).onTime(event);
                }
            },time*1000);
        }

        // setup Click Event
        if (options.dynamicEvents.hasOwnProperty("signal_download")) {

            $(document).onFirst('click', 'a, button, input[type="button"], input[type="submit"]', function (e) {

                var $elem = $(this);

                // Download
                if (options.dynamicEvents.hasOwnProperty("signal_download")) {
                    var isFired = false;
                    if ($elem.is('a')) {
                        var href = $elem.attr('href');
                        if (typeof href !== "string") {
                            return;
                        }
                        href = href.trim();
                        var extension = Utils.getLinkExtension(href);
                        var track_download = false;

                        if (extension.length > 0) {
                            var pixels = Object.keys(options.dynamicEvents.signal_download);
                            for (var i = 0; i < pixels.length; i++) {
                                var event = Utils.clone(options.dynamicEvents.signal_download[pixels[i]]);
                                var extensions = event.extensions;
                                if (extensions.includes(extension)) {
                                    if(options.enable_remove_download_url_param) {
                                        href = href.split('?')[0];
                                    }
                                    event.params.download_url = href;
                                    event.params.download_type = extension;
                                    event.params.download_name = Utils.getLinkFilename(href);

                                    getPixelBySlag(pixels[i]).onDownloadEvent(event);
                                    isFired = true;
                                }
                            }
                        }
                    }
                    if (isFired) { // prevent duplicate events on the same element
                        return;
                    }
                }
            });
        }


        // setup Dynamic events
        $.each(options.triggerEventTypes, function (triggerType, events) {

            $.each(events, function (eventId, triggers) {

                switch (triggerType) {
                    case 'url_click':
                        //@see: Utils.setupURLClickEvents()
                        break;

                    case 'css_click':
                        Utils.setupCSSClickEvents(eventId, triggers);
                        break;

                    case 'css_mouseover':
                        Utils.setupMouseOverClickEvents(eventId, triggers);
                        break;

                    case 'scroll_pos':
                        Utils.setupScrollPosEvents(eventId, triggers);
                        break;
                    case 'comment':
                        Utils.setupCommentEvents(eventId, triggers);
                        break;
                }

            });

        });
        // setup WooCommerce events
        if (options.woo.enabled) {

            // WooCommerce AddToCart
            if (options.dynamicEvents.hasOwnProperty("woo_add_to_cart_on_button_click")
                && options.woo.hasOwnProperty("addToCartCatchMethod")
                && options.woo.addToCartCatchMethod === "add_cart_js"
            ) {

                // Loop, any kind of "simple" product, except external
                $('.add_to_cart_button:not(.product_type_variable,.product_type_bundle,.single_add_to_cart_button)').on("click",function (e) {

                    var product_id = $(this).data('product_id');

                    if (typeof product_id !== 'undefined') {
                        Facebook.onWooAddToCartOnButtonEvent(product_id);
                        Analytics.onWooAddToCartOnButtonEvent(product_id);
                        Pinterest.onWooAddToCartOnButtonEvent(product_id);
                        Bing.onWooAddToCartOnButtonEvent(product_id);
                    }

                });

                // Single Product
                // tap try to https://stackoverflow.com/questions/30990967/on-tap-click-event-firing-twice-how-to-avoid-it
                //  $(document) not work
                $('body').onFirst('click','button.single_add_to_cart_button,.single_add_to_cart_button',function (e) {

                    var $button = $(this);

                    if ($button.hasClass('disabled')) {
                        return;
                    }

                    var $form = $button.closest('form');

                    var product_type = Utils.PRODUCT_SIMPLE;

                    if ($form.length === 0) {
                        return ;
                    } else if ($form.hasClass('variations_form')) {
                        product_type = Utils.PRODUCT_VARIABLE;
                    } else if($form.hasClass('bundle_form')) {
                        product_type = Utils.PRODUCT_BUNDLE;
                    } else if($form.hasClass('grouped_form')) {
                        product_type = Utils.PRODUCT_GROUPED;
                    }




                    var product_id;
                    var qty;

                    if (product_type === Utils.PRODUCT_GROUPED) {
                        qty = 1;
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                    } else if (product_type === Utils.PRODUCT_VARIABLE) {
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                        var qtyTag = $form.find('input[name="quantity"]');
                        if(qtyTag.length <= 0) {
                            qtyTag = $form.find('select[name="quantity"]');
                        }
                        qty = parseInt(qtyTag.val());
                    } else {
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                        var qtyTag = $form.find('input[name="quantity"]');
                        if(qtyTag.length <= 0) {
                            qtyTag = $form.find('select[name="quantity"]');
                        }
                        qty = parseInt(qtyTag.val());
                    }

                    Facebook.onWooAddToCartOnSingleEvent(product_id, qty, product_type, $form);
                    Analytics.onWooAddToCartOnSingleEvent(product_id, qty, product_type, $form);

                    Pinterest.onWooAddToCartOnSingleEvent(product_id, qty, product_type, false, $form);
                    Bing.onWooAddToCartOnSingleEvent(product_id, qty, product_type, false, $form);

                });

            }

            // WooCommerce RemoveFromCart
            if (options.dynamicEvents.hasOwnProperty("woo_remove_from_cart")) {

                $('body').on('click', options.woo.removeFromCartSelector, function (e) {

                    var $a = $(e.currentTarget),
                        href = $a.attr('href');

                    // extract cart item hash from remove button URL
                    var regex = new RegExp("[\\?&]remove_item=([^&#]*)"),
                        results = regex.exec(href);

                    if (results !== null) {

                        var item_hash = results[1];

                        if (options.dynamicEvents["woo_remove_from_cart"].hasOwnProperty(item_hash)) {
                            var events = options.dynamicEvents["woo_remove_from_cart"][item_hash];
                            Utils.fireEventForAllPixel("onWooRemoveFromCartEvent",events)
                        }

                    }

                });
            }
        }

        // setup EDD events
        if (options.edd.enabled) {

            // EDD AddToCart
            if (options.dynamicEvents.hasOwnProperty("edd_add_to_cart_on_button_click")) {

                $('form.edd_download_purchase_form .edd-add-to-cart').on("click",function (e) {

                    var $button = $(this);
                    var $form = $button.closest('form');
                    var variable_price = $button.data('variablePrice'); // yes/no
                    var price_mode = $button.data('priceMode'); // single/multi
                    var ids = [];
                    var quantities = [];
                    var qty;
                    var id;

                    if (variable_price === 'yes' && price_mode === 'multi') {

                        id = $form.find('input[name="download_id"]').val();

                        // get selected variants
                        $.each($form.find('input[name="edd_options[price_id][]"]:checked'), function (i, el) {
                            ids.push(id + '_' + $(el).val());
                        });

                        // get qty for selected variants
                        $.each(ids, function (i, variant_id) {

                            var variant_index = variant_id.split('_', 2);
                            qty = $form.find('input[name="edd_download_quantity_' + variant_index[1] + '"]').val();

                            if (typeof qty !== 'undefined') {
                                quantities.push(qty);
                            } else {
                                quantities.push(1);
                            }

                        });

                    } else if (variable_price === 'yes' && price_mode === 'single') {

                        id = $form.find('input[name="download_id"]').val();
                        ids.push(id + '_' + $form.find('input[name="edd_options[price_id][]"]:checked').val());

                        qty = $form.find('input[name="edd_download_quantity"]').val();

                        if (typeof qty !== 'undefined') {
                            quantities.push(qty);
                        } else {
                            quantities.push(1);
                        }

                    } else {

                        ids.push($button.data('downloadId'));

                        qty = $form.find('input[name="edd_download_quantity"]').val();

                        if (typeof qty !== 'undefined') {
                            quantities.push(qty);
                        } else {
                            quantities.push(1);
                        }
                    }

                    // fire event for each download/variant
                    $.each(ids, function (i, download_id) {

                        var q = parseInt(quantities[i]);
                        var variant_index = download_id.toString().split('_', 2);
                        var price_index;

                        if (variant_index.length === 2) {
                            download_id = variant_index[0];
                            price_index = variant_index[1];
                        }

                        Facebook.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Analytics.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Pinterest.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Bing.onEddAddToCartOnButtonEvent(download_id, price_index, q);

                    });

                });

            }


            // EDD RemoveFromCart
            if (options.dynamicEvents.hasOwnProperty("edd_remove_from_cart") ) {

                $('form#edd_checkout_cart_form .edd_cart_remove_item_btn').on("click",function (e) {

                    var href = $(this).attr('href');
                    var key = href.substring(href.indexOf('=') + 1).charAt(0);

                    if (options.dynamicEvents.edd_remove_from_cart.hasOwnProperty(key)) {
                        var events = options.dynamicEvents.edd_remove_from_cart[key];
                        Utils.fireEventForAllPixel("onEddRemoveFromCartEvent",events)
                    }

                });

            }

        }

        // setup Comment Event
        if (options.dynamicEvents.hasOwnProperty("signal_comment")) {

            $('form.comment-form').on("submit",function () {

                var pixels = Object.keys(options.dynamicEvents.signal_comment);
                for(var i = 0;i<pixels.length;i++) {
                    var event = Utils.clone(options.dynamicEvents.signal_comment[pixels[i]]);
                    Utils.copyProperties(Utils.getRequestParams(), event.params);
                    getPixelBySlag(pixels[i]).onCommentEvent(event);
                }
            });

        }


        // setup Form Event
        if ( options.dynamicEvents.hasOwnProperty("signal_form")) {

            $(document).onFirst('submit', 'form', function (e) {

                var $form = $(this);

                // exclude WP forms
                if ($form.hasClass('comment-form') || $form.hasClass('search-form') || $form.attr('id') === 'adminbarsearch') {
                    return;
                }

                // exclude Woo forms
                if ($form.hasClass('woocommerce-product-search') || $form.hasClass('cart') || $form.hasClass('woocommerce-cart-form') ||
                    $form.hasClass('woocommerce-shipping-calculator') || $form.hasClass('checkout') || $form.hasClass('checkout_coupon')) {
                    return;
                }

                // exclude EDD forms
                if ($form.hasClass('edd_form') || $form.hasClass('edd_download_purchase_form')) {
                    return;
                }

                var params = {
                    form_id: $form.attr('id'),
                    form_class: $form.attr('class'),
                    text: $form.find('[type="submit"]').is('input') ?
                        $form.find('[type="submit"]').val() : $form.find('[type="submit"]').text()
                };
                var pixels = Object.keys(options.dynamicEvents.signal_form);
                for(var i = 0;i<pixels.length;i++) {
                    var event = Utils.clone(options.dynamicEvents.signal_form[pixels[i]]);
                    Utils.copyProperties(params,event.params,)
                    Utils.copyProperties(Utils.getRequestParams(), event.params);
                    getPixelBySlag(pixels[i]).onFormEvent(event);
                }
            });

            //Forminator
            $(document).on( 'forminator:form:submit:success', function( formData ){
                var params = {
                    form_id: $(formData.target).find('input[name="form_id"]').val(),
                    text: $(formData.target).find('.forminator-button-submit').text()
                };

                var pixels = Object.keys(options.dynamicEvents.signal_form);
                for(var i = 0;i<pixels.length;i++) {
                    var event = Utils.clone(options.dynamicEvents.signal_form[pixels[i]]);
                    Utils.copyProperties(params,event.params)
                    Utils.copyProperties(Utils.getRequestParams(), event.params);
                    getPixelBySlag(pixels[i]).onFormEvent(event);
                }
            });

            // Ninja Forms
            $(document).onFirst('nfFormSubmitResponse', function (e, data) {

                var params = {
                    form_id: data.response.data.form_id,
                    text: data.response.data.settings.title
                };

                var pixels = Object.keys(options.dynamicEvents.signal_form);
                for(var i = 0;i<pixels.length;i++) {
                    var event = Utils.clone(options.dynamicEvents.signal_form[pixels[i]]);
                    Utils.copyProperties(params,event.params)
                    Utils.copyProperties(Utils.getRequestParams(), event.params);
                    getPixelBySlag(pixels[i]).onFormEvent(event);
                }

            });

        }


        // load pixel APIs
        Utils.loadPixels();

    });

}(jQuery, pysOptions);

function pys_generate_token(length){
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

function getBundlePriceOnSingleProduct(data) {
    var items_sum = 0;
    jQuery(".bundle_form .bundled_product").each(function(index){
        var id = jQuery(this).find(".cart").data("bundled_item_id");
        var item_price = data.prices[id];
        var item_quantity = jQuery(this).find(".bundled_qty").val();
        if(!jQuery(this).hasClass("bundled_item_optional") ||
            jQuery(this).find(".bundled_product_optional_checkbox input").prop('checked')) {
            items_sum += item_price*item_quantity;
        }
    });
    return items_sum;
}}
