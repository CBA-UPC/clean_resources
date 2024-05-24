(function (w, c) {
    if (!c) return;
    var co = function (u) { return u && typeof u === 'object' && !(u instanceof Array) && u.fireBeaconImg && u.invisibleDiv; };
    var r = 40;
    var cl = function () {
        if (r-- < 1) return;
        var uo = c.getAttribute('data-ueto');
        if (!uo) return;
        var u = w[uo];
        if (!co(u)) { setTimeout( 250); return; }
        u.fireBeaconImg('https://c.tagdelivery.com/c.gif?from=uet');
    };
    cl();
})(window, document.currentScript);
