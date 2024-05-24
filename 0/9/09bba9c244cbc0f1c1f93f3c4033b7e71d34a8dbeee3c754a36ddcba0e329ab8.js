!(function(_window, _document) {
  var findOutbrainAdvId = function() {
    //get the param from script suffix

    var script_name = "obPvTracker";
    var scripts = document.querySelectorAll(".ob-after-render-script");
    var scriptParams = {};
    if(!scripts) return null;

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && scripts[i].src.indexOf("/" + script_name) > -1) {
        // Get an array of key=value strings of params

        var pa = scripts[i].src
          .split("?")
          .pop()
          .split("&");

        // Split each key=value into array, the construct js object

        for (var j = 0; j < pa.length; j++) {
          var kv = pa[j].split("=");
          scriptParams[kv[0]] = kv[1];
        }
        break;
      }
    }
    if (scriptParams && scriptParams.advId) {
      if(scriptParams.advId.indexOf(',') > -1) {
        return scriptParams.advId.split(',');
      }
      return scriptParams.advId;
    }
    return null;
  };
  var OB_ADV_ID = findOutbrainAdvId();
  if (!OB_ADV_ID) return;
  if (_window.obApi) {
    var toArray = 
    _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(
      toArray(OB_ADV_ID)
    );
    return;
  }
  var api = (_window.obApi = ;
  api.version = "1.1";
  api.loaded = true;
  api.marketerId = OB_ADV_ID;
  api.queue = [];
  var tag = _document.createElement("script");
  tag.async = true;
  tag.src = "//amplify.outbrain.com/cp/obtp.js";
  tag.type = "text/javascript";
  var script = _document.getElementsByTagName("script")[0];
  script.parentNode.insertBefore(tag, script);
})(window, document);
obApi("track", "PAGE_VIEW");
