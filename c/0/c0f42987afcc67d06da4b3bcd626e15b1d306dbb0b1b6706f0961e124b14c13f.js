(function(w, d) {
  try {
    d = w.top.document || d; w = w.top.document ? w.top : w;
  } catch (e) {}
  var ttag = function() {
    w.teads.page(81735).placement(88471, {slider: {allow_corner_position: false, allow_top_position: false}, "css":"margin: 20px auto; max-width: 550px;","format":"inread","slot":{"btf":false,"selector":".player_dynad_tv","minimum":1}}).serve();
  };
  if (w.teads && w.teads.page) { ttag(); }
  else if (!w.teadsscript) {
    var s = document.createElement('script');
    s.src = 'https://a.teads.tv/media/format/v3/teads-format.min.js';
    s.async = true; s.onload = ttag; w.teadsscript = d.getElementsByTagName('head')[0].appendChild(s);
  } else {
    w.teadsscript.addEventListener('load', ttag);
  }
})(window, document);