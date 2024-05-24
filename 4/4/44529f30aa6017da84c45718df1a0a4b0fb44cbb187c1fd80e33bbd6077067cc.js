!(function (_window, _document) {
  var selector;
  var elements;
  var scriptParams;
  var OB_ADV_ID = [];

  function getScriptParams() {
    if (scriptParams) {
      return scriptParams;
    }

    var script_name = "obConversionTracker";
    var scripts = document.querySelectorAll(".ob-after-render-script");
    scriptParams = {};
    for (var i = 0; i < scripts.length; i++) {
      var isScriptExist = scripts[i].src && scripts[i].src.indexOf("/" + script_name) > -1;
      if (isScriptExist) {
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

    if (scriptParams) {
      return scriptParams;
    }
    return null;
  }

  function getAdvIds() {
    var params = getScriptParams();
    if (params && params.advId) {
      if (params.advId.indexOf(',') > -1) {
        return params.advId.split(',');
      }
      return params.advId;
    }
    return null;
  }

  function getSelectorFromScript() {
    var params = getScriptParams();
    if (params && params.selector) {
      return params.selector;
    }
    return null;
  }

  function populateMarketerIds() {
    var marketerIds = _window.obApi.marketerId;
    var scriptAdvIds = getAdvIds();

    if(scriptAdvIds) {
      for (var i = 0; i < scriptAdvIds.length; i++) {
        if(marketerIds.indexOf(scriptAdvIds[i]) === -1) {
          marketerIds.push(scriptAdvIds[i]);
        }
      }
    }

    OB_ADV_ID.push(marketerIds);
  }

  function initFlow() {
    selector = getSelectorFromScript();
    populateMarketerIds();
    elements = _document.querySelectorAll(selector);
    if (!elements) return;
    for (var index = 0; index < elements.length; index++) {
      elements[index].addEventListener("click", reportClick);
    }
  }

  
  function updateObApi() {
    var api = (_window.obApi = ;


    api.version = "1.1";
    api.loaded = true;
    api.marketerId = OB_ADV_ID;
    api.queue = [];
  }

  function reportClick() {
    scriptParams && scriptParams.name 
            ? obApi("track", unescape(scriptParams.name))
            : obApi("track", "Buy now click");
  }

  if (!window.obApi) {
    updateObApi();
    insertScript();
  }

  initFlow();
})(window, document);
