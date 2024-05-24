(function () {

    console.log('VM Started');

    var sms_source = sms_get_uri_param('utm_source')
    if (sms_source == null) {
        sms_source = "";
    }

    var sms_campaign = sms_get_uri_param('utm_campaign')
    if (sms_campaign == null) {
        sms_campaign = "";
    }

    var the_referer = "";
    if (typeof sms_referer !== 'undefined') {
        the_referer = sms_referer;
    }

    var window_width = document.body.clientWidth;
    var sms_platform = "desktop";

    if (window_width > 420 && window_width < 800) {
        sms_platform = "tablet";
    }

    if (window_width <= 420) {
        sms_platform = "mobile";
    }

    if (typeof sms_catid === 'undefined') {
        sms_catid = 0;
    }
	
	if ( typeof sms_thumb === 'undefined' ) {
		sms_thumb = "";
	}

    const loc = document.location;

    const clean_url = loc.protocol + '//' + loc.host + loc.pathname;

    //console.log("SMS ID: " + sms_id);
    //console.log("SMS Title:" + sms_title);
    //console.log("SMS Date:" + sms_date);
    //console.log("SMS Type:" + sms_type);
    //console.log("SMS Source:" + sms_source);
    //console.log("SMS Category:" + sms_category);
    console.log("SMS URL:" + loc);
    console.log("SMS Location:" + clean_url);
    //console.log("SMS Referer:" +  the_referer );
    //console.log("SMS Platform:" + sms_platform);

    var sms_pixel = document.createElement('img');
    sms_pixel.src = '//views.2222.ro/harvest?url=' + encodeURI(clean_url) + '&id=' + sms_id + '&catid=' + sms_catid + '&thumb=' + encodeURI(sms_thumb)  + '&date=' + sms_date + '&platform=' + sms_platform + '&source=' + encodeURI(sms_source) + '&campaign=' + encodeURI(sms_campaign) + '&title=' + encodeURI(sms_title) + '&referer=' + encodeURI(the_referer);
    sms_pixel.width = '1';
    sms_pixel.height = '1';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(sms_pixel);


    function sms_get_uri_param(param) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString.replace(/&amp;/g, "&"));
        return urlParams.get(param)
    }

})();
