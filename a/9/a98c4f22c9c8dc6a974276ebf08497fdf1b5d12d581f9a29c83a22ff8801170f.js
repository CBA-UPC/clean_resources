(function() {
    var domain = 'a.mgid.com'; var muidn = '';

    var host = "//" + domain + "/pixel.gif";
    var utmSource;
    var utmMedium;
    var utmCampaign;
    var utmContent;
    var utmTerm;
    var frpt = '';

    var dataSent = false;

    /**
     * @param {EventTarget} elem
     * @param {string} type
     * @param {Function} handler
     */
    var addEvent = 
    /**
     * @param {string} name
     * @param {string} value
     * @param {?number} days
     */
    var setCookie = 
    /**
     * Set utm
     */
    var populateUtmData = function () {
        var queryParts = {};

        var sArray = location.search.substr(1).split("&");

        for (var i = 0, len = sArray.length; i < len; i++) {
            var pair = sArray[i];
            if (pair === "")  {
                continue;
            }
            var parts = pair.split("=");
            queryParts[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, " "));
        }

        utmSource = (queryParts['utm_source'] != undefined) ? queryParts['utm_source'] : "";
        utmMedium = (queryParts['utm_medium'] != undefined) ? queryParts['utm_medium'] : "";
        utmCampaign = (queryParts['utm_campaign'] != undefined) ? queryParts['utm_campaign'] : "";
        utmContent = (queryParts['utm_content'] != undefined) ? queryParts['utm_content'] : "";
        utmTerm = (queryParts['utm_term'] != undefined) ? queryParts['utm_term'] : "";
    };

    /**
     * Send utm data
     */
    var sendData = function() {
        var src = host + "?utm_content=" + utmContent;
        src += '&utm_term=' + utmTerm;
        src += '&utm_source=' + utmSource;
        src += '&utm_campaign=' + utmCampaign;
        src += '&utm_medium=' + utmMedium;
        src += '&frpt=' + frpt;

        setCookie('frpt', frpt, 1);

        (new Image).src = src;

        dataSent = true;
    };

    populateUtmData();

    addEvent(document, 'frpt', function (event) {
        if (event.detail && !event.detail.error) {
            frpt = event.detail.hash;
        }

        if (!dataSent) {
            sendData();
        }
    });

    setTimeout( 3000);
})();
