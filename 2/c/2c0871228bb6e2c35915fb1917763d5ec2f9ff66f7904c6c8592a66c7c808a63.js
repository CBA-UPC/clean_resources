// register tcf v2 api
(function () {
  if (typeof window.__tcfapi === "function") {
    return;
  }

  var locateFrame = function (frameName) {
    var frame = window,
      cmpFrame = null;
    while (!cmpFrame) {
      try {
        if (frame.frames[frameName]) {
          cmpFrame = frame;
        }
      } catch (e) {}
      if (frame === window.top) break;
      frame = frame.parent;
    }
    return cmpFrame;
  };

  var cmpFrame,
    returnFieldName,
    cmpCallbacks = {};
  if ((cmpFrame = locateFrame("__tcfapiLocator"))) {
    returnFieldName = "__tcfapiReturn";
    window.__tcfapi = function (cmd, version, callback, arg) {
      var callId = Math.random() + "";
      var msg = {
        __tcfapiCall: {
          command: cmd,
          parameter: arg,
          version: version,
          callId: callId,
        },
      };

      cmpCallbacks[callId] = callback;
      cmpFrame.postMessage(msg, "*");
    };
  } else {
    // nothing to do
    return;
  }

  // add event listener message

  var postMessageHandler = function (event) {
    var json = {};
    try {
      json =
        typeof event.data === "string" ? JSON.parse(event.data) : event.data;
    } catch (ignore) {}
    var payload = json[returnFieldName];
    if (payload) {
      if (typeof cmpCallbacks[payload.callId] === "function") {
        cmpCallbacks[payload.callId](payload.returnValue, payload.success);
        delete cmpCallbacks[payload.callId];
      }
    }
  };

  window.addEventListener("message", postMessageHandler, false);
})();

(function () {
  try {
    if (
      !("browsingTopics" in document) ||
      !document.featurePolicy?.allowsFeature("browsing-topics")
    ) {
      return;
    }

    function addPixel(href) {
      var b = new Image();
      b.src = href;
      b.onload = function () {
        return;
      };
    }

    function wrapSrcParams(callback) {
      if (!document.currentScript?.src) {
        return callback;
      }

      const src = new URL(document.currentScript.src);

      return function (url) {
        for (const [key, value] of src.searchParams) {
          url.searchParams.set(key, value);
        }

        callback(url);
      };
    }

    function wrapGDPR(callback) {
      if (typeof window.__tcfapi !== "function") {
        return callback;
      }

      return function (url) {
        if (url.searchParams.has("gdpr")) {
          return callback(url);
        }

        const unregister = function (tcData) {
          window.__tcfapi(
            "removeEventListener",
            2,
            () => {},
            tcData.listenerId
          );
        };

        window.__tcfapi("addEventListener", 2, (tcData, success) => {
          if (!success) {
            url.searchParams.set("gdpr_cmp_failure", "1");

            callback(url);

            return;
          }

          if (
            tcData.gdprApplies === false ||
            tcData.eventStatus === "tcloaded" ||
            tcData.eventStatus === "useractioncomplete"
          ) {
            if (tcData.gdprApplies) {
              url.searchParams.set("gdpr", "1");
              url.searchParams.set("gdpr_consent", tcData.tcString || "");
            } else {
              url.searchParams.set("gdpr", "0");
            }

            callback(url);

            unregister(tcData);

            return;
          }
        });
      };
    }

    var domain = "gt.frontend.weborama.fr",
      preprodDomain = "gt.frontend-preprod.weborama.fr";

    if (document.currentScript?.src) {
      var src = new URL(document.currentScript.src);

      if (src.hostname.endsWith(".weborama-tech.ru")) {
        domain = "gt-frontend.weborama-tech.ru";
        preprodDomain = "gt-frontend-preprod.weborama-tech.ru";
      }
    }

    function addPixelInProdAndPreprod(url) {
      addPixel(url.href);

      const mod_date = Date.now() % 100;
      if (mod_date == 0) {
        const preprodURL = new URL(url);
        preprodURL.hostname = preprodDomain;

        addPixel(preprodURL.href);
      }
    }

    const addPixelWithGDPRParameters = wrapSrcParams(
      wrapGDPR(addPixelInProdAndPreprod)
    );

    const promise = document.browsingTopics();

    promise.then((topics) => {
      const jsonTopics = JSON.stringify(topics),
        dst = new URL(`https://${domain}/tpcs`);

      dst.searchParams.set("t", jsonTopics);
      dst.searchParams.set("pu", document.location);

      addPixelWithGDPRParameters(dst);
    });
  } catch (e) {}
})();
