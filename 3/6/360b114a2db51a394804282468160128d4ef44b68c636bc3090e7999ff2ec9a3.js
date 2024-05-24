(function($, wgsdk) {

'use strict';

if (typeof window.is_auth_user !== 'function') {
    return;
}

var isUserAuthorized = window.is_auth_user();

if (isUserAuthorized) {
    wgsdk.account_info().queue(;
} else {
    pushUserInfo();
}

function pushUserInfo(spaId) {
    var veteranCookie = (window.VETERAN_COOKIE_NAME ? $.cookie(window.VETERAN_COOKIE_NAME) : '');

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        H_Login_Status: (isUserAuthorized ? '1' : '0'),
        S_Uvt_cookie: (veteranCookie ? '1' : '0'),
    });
}

})(jQuery, wgsdk);