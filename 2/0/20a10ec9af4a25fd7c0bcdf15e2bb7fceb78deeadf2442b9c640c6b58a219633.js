(function ( a ) {
    window.advcake_repeater = window.advcake_repeater || 200;
    if (window.advcake_repeater === 200) {
        window.advcake_repeater++;
        var b = a.createElement("script");
        b.async = 1;
        b.src = "//code.acstat.com/?referer=" + encodeURIComponent(window.location.origin) + "&repeat=" + window.advcake_repeater;
        a = a.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b, a);
    }
})(window.document);
