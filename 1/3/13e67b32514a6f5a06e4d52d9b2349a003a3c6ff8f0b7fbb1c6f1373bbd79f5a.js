{"mid":"50745479003722819481296100027788920050"}ompatible = true, loaderPath, configAtt;
//IE11 compatibility check
if(document.currentScript) {
  loaderPath = document.currentScript.src;
  configAtt = document.currentScript.getAttribute('data-clsconfig');
} else {
  var currentScript = document.querySelector('[src$="detector-dom.min.js"]');
  loaderPath = currentScript.src;
  configAtt = currentScript.getAttribute('data-clsconfig');
}
var lastSeparatorIndex = loaderPath.lastIndexOf('/');
var configPath = loaderPath.substring(0, lastSeparatorIndex + 1);
// Check for detector supported browser feature
if (typeof String.prototype.replaceAll !== "function") {
  detectorSupportedBrowsersCompatible = false;
}
function loadGBScript(id, src, type, callback, configAtt) {
  var script = document.createElement('script');
  script.id = id;
  script.src = src;
  if(type) {
    script.type = type;
  }
  if(configAtt) {
    script.setAttribute('data-clsconfig', configAtt);
  }
  if(callback) {
    script.onload = callback;
  }
  document.head.appendChild(script);
 }
 loadGBScript('gbConfig', configPath + 'config.js', undefined, function() {
    //Config has loaded, now load and run detector
    //Load new lazy loaded detector only if modern browser
  if(detectorSupportedBrowsersCompatible) {
    loadGBScript('_cls_detector', _cls_config.detectorPath + 'detector-bootstrap.min.js', "module", undefined, configAtt);
  } else {
    loadGBScript('_cls_detector_es5', _cls_config.detectorPath + 'detector-bootstrap_es5.min.js', "text/javascript", undefined, configAtt);
  }
  });