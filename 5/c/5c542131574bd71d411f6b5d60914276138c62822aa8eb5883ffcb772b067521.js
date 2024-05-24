(function (d, l, u, i) {
  var itm = window.itm || (function () {
    var a = d.getElementsByTagName("script");
    var b = (a[a.length - 1] || {}).dataset;
    return {id: b.id, partner: typeof b.partner === u ? true : b.partner == "1"}
  })();
  if (typeof itm.partner === u) itm.partner = true;
  d.writeln("<iframe id='itmwidget' frameborder='0' width='" + (itm.partner ? "210" : "1") + "' " +
    "height=" + (itm.partner ? "210" : "1") + " scrolling='no' style='margin:0' " +
    "src='" + i + "/members/" + (itm.id || 0) + "/widget?pn=" + (itm.partner || 1) + "&url=" + l.href + "'></iframe>")
})(document, window.top.location, 'undefined', 'https://i-tm.com.tw');
