(function(w, d) {
  try {
    d = w.top.document || d; w = w.top.document ? w.top : w;
  } catch (e) {}
  var ttag = function() {
    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	//this is for mobile
	_tt_slot = ".leaf-article-inner #leaf-#outbrain_widget_0 .ob-widget .ob_what";
}else{
	//this is for desktop
	_tt_slot = '#outbrain_widget_0 .ob-widget .ob_what';
	min_slot = 2;
}
    w.teads.page(68076).placement(72999, {slider: {allow_corner_position: false, allow_top_position: false}, "css":"max-width: 750px; margin-bottom: 10px; ","format":"inread","slot":{"insertBefore":true,"btf":false,"selector":".article_body > p","minimum":3,"minimumTextLength":600,"imageFilter":"slot","videoFilter":"slot"}}).serve();
    w.teads.page(68076).placement(79616, {slider: {allow_corner_position: false, allow_top_position: false}, "css":"max-width: 750px;  margin-bottom: 10px;","format":"inread","slot":{"selector":".article_body > p","minimum":7,"minimumTextLength":600,"imageFilter":"slot","videoFilter":"article"}}).serve();
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