"use strict";

var spPopupsLoadedEvent = new CustomEvent('spPopupsLoaded');
function createScriptElement(src) {
  return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.setAttribute('async', '');
    script.src = src;
    document.getElementsByTagName('body')[0].appendChild(script);
    script.onload = 
  });
}
function insert() {
  var _window, _window$sp, _window$sp$popups;
  var popupsAlreadyLoaded = (_window = window) === null || _window === void 0 ? void 0 : (_window$sp = _window.sp) === null || _window$sp === void 0 ? void 0 : (_window$sp$popups = _window$sp.popups) === null || _window$sp$popups === void 0 ? void 0 : _window$sp$popups.projectId;
  if (popupsAlreadyLoaded) return;
  var widget = document.querySelector('[data-chats-widget-id]');
  window.sp = _objectSpread(_objectSpread({}, window.sp), {}, {
    popups: {
      projectId: widget.dataset.chatsWidgetId
    }
  });
  createScriptElement(scriptSrc()).then(function () {
    var popup = document.getElementsByTagName('sp-popups').item(0);
    popup.style.zIndex = '2147483647';
    popup.style.position = 'fixed';
    setTimeout(;
  });
}
function scriptSrc() {
  var widget = document.querySelector('[data-chats-widget-id]');
  var src = widget.getAttribute('src');
  var domain = src.split('/')[2];
  if (domain.includes('localhost')) {
    return "http://".concat(domain, "/build/bundle.js");
  }
  return "https://".concat(domain, "/bundle.js.gz");
}
insert();