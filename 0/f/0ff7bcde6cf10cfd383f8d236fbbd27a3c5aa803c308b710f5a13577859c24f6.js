(function() {
    'use strict';

    window.abp = window.abp || { installed: false, notified: false };
    var scripts = document.getElementsByTagName('script');
    var script = scripts[scripts.length - 1];
    var params = {};
    var param;
    var query;
    var i;

    if (script) {
        query = script.src.replace(/^[^\?]+\??/, '').split('&');
        for (i = 0; i < query.length; i++) {
            param = query[i].split('=');
            params[param[0]] = param[1];
        }

        if (params.ch == 1) { // eslint-disable-line eqeqeq
            window.abp.installed = true;
            var matches = document.cookie.match(new RegExp('(?:^|; )abp=([^;]*)'));
            window.abp.notified = matches ? matches[1] === '1' : false;
        } else if (params.ch == 2) { // eslint-disable-line eqeqeq
            window.abp.installed = false;
        }

        document.cookie = 'abp=' + (window.abp.installed ? '1' : '0') + '; path=/';
    }
})();
