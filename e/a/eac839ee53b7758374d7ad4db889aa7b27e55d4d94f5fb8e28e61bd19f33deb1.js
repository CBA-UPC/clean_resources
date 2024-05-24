(function(w, d) {
  // store document.currentScript as it is only accessible on first load
  var curScr = d.currentScript;
  if (!curScr)
    return;

  var checkObj = function(rmtq) {
    // break if rmt object is not loaded yet
    if (!rmtq || typeof rmtq !== 'object' || rmtq instanceof Array)
      return false;

    // break if vid is not initialized yet
    if (!rmtq.beaconParams || !rmtq.beaconParams.vid)
      return false;

    // break if rmt object is not ready to fire events yet
    if (!rmtq.invisibleDiv)
        return false;

    return true;
  };

  var fireIdSync = function(rmtq) {
    // break if bat.js APIs are missing
    if (!rmtq.fireBeaconImg || !rmtq.getCookie || !rmtq.setCookie)
      return;

    // break if not v2 with tag id set
    if (!rmtq.beaconParams || rmtq.beaconParams.Ver !== 2 || !rmtq.beaconParams.ti)
      return;

    // skip sync if id throttle cookie exists
    if (rmtq.getCookie('_rmt_an_idt', '', 1) === '0')
      return;

    // set id throttle cookie w/10-min expiration
    rmtq.setCookie('_rmt_an_idt', '0', 600, true, false, '', 1);

    // redirect URL is Microsoft server
    // TODO: use INT domain for INT server
    var r = 'https://c.bing.com/c.gif?cid=$UID&vid=' + rmtq.beaconParams.vid + '&Red3=RMT_AN_' + rmtq.beaconParams.ti;

    // fire beacon to channel with redirect URL (remote server will replace $UID$ with channel ID)
    rmtq.fireBeaconImg('https://ib.adnxs.com/getuid?' + r);
  };

  var r = 40;
  var checkLoad = function() {
    // retry 40 times max (10s)
    if (r-- < 1)
        return;

    // get uet object name passed in as data attribute
    var ueto = curScr.getAttribute('data-ueto');
    if (!ueto)
      return;

    // poll until rmt object is initialized
    var rmtq = w[ueto];
    if (!checkObj(rmtq)) {
        setTimeout(function () { checkLoad(); }, 250);
        return;
    }

    // call remote ID sync w/redirect
    fireIdSync(rmtq);
  };

  checkLoad();
})(window, document);
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
