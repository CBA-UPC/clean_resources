function subscribeEvent(event, listener, useCapture) {
  if (document.addEventListener) {
    document.addEventListener(event, listener, useCapture);
  } else if (document.attachEvent) {
    document.attachEvent(event, listener, useCapture);
  }
}
}
};

document.documentElement.onmousemove = startActivityHandler;
subscribeEvent("touchstart", startActivityHandler, false);

function placeCheckerRequest() {
  var stt1 = getMetatagContent("VirtualFolder");
  var stt2 = "layouts/system/VIChecker.aspx";
  var stt3 = addTstampAndSiteToQueryString(getMetatagContent("VIcurrentDateTime"));

  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', stt1 + stt2 + stt3);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

function placeCssAspxRequest() {
  var st1 = getMetatagContent("VirtualFolder");
  var st2 = "layouts/system/VisitorIdentificationCSS.aspx";
  var st3 = addTstampAndSiteToQueryString(new Date().getTime());

  var fileref = document.createElement('link');
  fileref.setAttribute('rel', 'stylesheet');
  fileref.setAttribute('type', 'text/css');
  fileref.setAttribute('href', st1 + st2 + st3);
  document.getElementsByTagName("head")[0].appendChild(fileref);

  timeoutSleep(30000, placeCheckerRequest);
}
}

function getMetatagContent(metatagName) {
  var metas = document.getElementsByTagName('meta');

  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metatagName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}
}
