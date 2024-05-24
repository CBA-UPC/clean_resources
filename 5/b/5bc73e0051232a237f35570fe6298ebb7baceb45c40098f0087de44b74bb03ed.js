define(['jquery','mage/cookies'],function($){'use strict';return function(config){var allowServices=false,allowedCookies,allowedWebsites;if(config.isCookieRestrictionModeEnabled){allowedCookies=$.mage.cookies.get(config.cookieName);if(allowedCookies!==null){allowedWebsites=JSON.parse(allowedCookies);if(allowedWebsites[config.currentWebsite]===1){allowServices=true;}}}else{allowServices=true;}
if(allowServices){(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create',config.pageTrackingData.accountId,'auto');if(config.pageTrackingData.isAnonymizedIpActive){ga('set','anonymizeIp',true);}
if(config.ordersTrackingData.hasOwnProperty('currency')){ga('require','ec','ec.js');ga('set','currencyCode',config.ordersTrackingData.currency);if(config.ordersTrackingData.products){$.each(config.ordersTrackingData.products,function(index,value){ga('ec:addProduct',value);});}
if(config.ordersTrackingData.orders){$.each(config.ordersTrackingData.orders,function(index,value){ga('ec:setAction','purchase',value);});}
ga('send','pageview');}else{ga('send','pageview'+config.pageTrackingData.optPageUrl);}}}});ner.contains(target)) {
            return;
        }

        if (config.onlyIfVisible) {
            if (!_.isNull(container.offsetParent) && isVisible(container)) {
                callback();
            }
        } else {
            callback();
        }
    }

    /**
     * Prepares configuration for the binding based
     * on a default properties and provided options.
     *
     * @param {(Object|Function)} [options={}]
     * @returns {Object}
     */
    function buildConfig(options) {
        var config = {};

        if (_.isFunction(options)) {
            options = {
                callback: options
            };
        } else if (!_.isObject(options)) {
            options = {};
        }

        return _.extend(config, defaults, options);
    }

    ko.bindingHandlers.outerClick = {

        /**
         * Initializes outer click binding.
         */
        init: function (element, valueAccessor) {
            var config = buildConfig(valueAccessor()),
                outerClick = onOuterClick.bind(null, element, config),
                isTouchDevice = typeof document.ontouchstart !== 'undefined';

            if (isTouchDevice) {
                $(document).on('touchstart', outerClick);

                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $(document).off('touchstart', outerClick);
                });
            } else {
                $(document).on('click', outerClick);

                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $(document).off('click', outerClick);
                });
            }
        }
    };

    renderer.addAttribute('outerClick');
});
