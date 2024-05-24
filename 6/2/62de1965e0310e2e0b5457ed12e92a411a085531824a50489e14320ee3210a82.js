.am-toast{position:fixed;z-index:1999;width:100%;font-size:14px;text-align:center}.am-toast.am-toast-mask{top:0;left:0;display:flex;align-items:center;justify-content:center;height:100%;transform:translateZ(1px);-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;z-index:10000000}.am-toast.am-toast-nomask{position:fixed;top:50%;left:50%;width:auto;max-width:50%;transform:translateZ(1px)}.am-toast.am-toast-nomask .am-toast-notice{transform:translateX(-50%) translateY(-50%)}.am-toast-notice-content .am-toast-text{min-width:60px;padding:10px 15px;line-height:1.5;color:#fff;background-color:rgba(58,58,58,.9);border-radius:3px}.am-toast-notice-content .am-toast-text.am-toast-text-icon{padding:15px;border-radius:5px}.am-toast-notice-content .am-toast-text.am-toast-text-icon .am-toast-text-info{margin-top:6px}.feedbackSuccess___ABqRJ{min-width:200px;max-width:235px;padding:10px 0}.hc-pc-toast{position:fixed;z-index:1999;width:100%;font-size:14px;text-align:center}.hc-pc-toast.hc-pc-toast-mask{top:0;left:0;display:flex;align-items:center;justify-content:center;height:100%;transform:translateZ(1px);-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center}.hc-pc-toast.hc-pc-toast-nomask{position:fixed;top:50%;left:50%;width:auto;max-width:50%;transform:translateZ(1px)}.hc-pc-toast.hc-pc-toast-nomask .hc-pc-toast-notice{transform:translateX(-50%) translateY(-50%)}.hc-pc-toast-notice-content .hc-pc-toast-text.hc-pc-toast-text-icon{padding:15px;border-radius:5px}.hc-pc-toast-notice-content .hc-pc-toast-text.hc-pc-toast-text-icon .hc-pc-toast-text-info{margin-top:6px}.toast___25dNG{box-sizing:border-box;width:440px;padding:40px 0;background:#fff;border-radius:3px;box-shadow:0 3px 10px rgba(0,0,0,.14)}.toast___25dNG .toast_text___K1NlN{padding:0 20px;font-size:16px;line-height:20px}.toast___25dNG .toast_icon___28KWc{height:52px;margin-bottom:12px}.toast___25dNG.success___Ata0A .toast_text___K1NlN{color:#30b566}.toast___25dNG.fail___378Zr .toast_text___K1NlN{color:#ee4d2d}:root{--primary-color:#ee4d2d}#helpcenterfe,body{color:rgba(0,0,0,.87);background:#f5f5f5;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-webkit-font-smoothing:antialiased}#helpcenterfe .ql-editor,body .ql-editor{font-family:Roboto,-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif}.g-dflex{display:flex}.g-justify-end{justify-content:flex-end}.g-justify-center{justify-content:center}.g-direction-column{flex-direction:column}.g-flex1{flex:1 1}.g-justify-space-between{justify-content:space-between}.g-align-end{align-items:flex-end}.g-align-center{align-items:center}.g-cp{cursor:pointer}.g-nowrap{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.g-mt10{margin-top:10px}#helpcenterfe,.g-layout,body,html{width:100%;height:100%}body.mobile{font-size:14px}@media screen and (max-width:767px){input,select,textarea{font-size:16px!important}});
          g.o.observe({ entryTypes: ["longtask"] });
        }
      })();
    </script>
    <script>
      (function (w, d, s, l, i) {
        var CONSENT_KEY_MAPPING = {
          1: "consent_analytical",
          2: "consent_functional",
          3: "consent_advertising",
          4: "consent_thirdparty_google",
          5: "consent_thirdparty_tiktok",
        };
        var hasGdpr = w.location.host.match(/\.shopee\.com\.br$/);
        var defaultConsent = hasGdpr ? "denied" : "granted";
        var defaultWaitTime = hasGdpr ? 15000 : 0;
        w[l] = w[l] || [];
        function gtag() {
          w[l].push(arguments);
        }
        gtag("consent", "default", {
          consent_analytical: defaultConsent,
          consent_functional: defaultConsent,
          consent_advertising: defaultConsent,
          consent_thirdparty_google: defaultConsent,
          consent_thirdparty_tiktok: defaultConsent,
          wait_for_update: defaultWaitTime,
        });
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var insertRowIndex = w[l].length;
        function loadGTM() {
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        }
        if (!hasGdpr) return loadGTM();
        fetch(
          "https://shopee.com.br/api/v4/account/cookie_get_preferences?version=1",
          { credentials: "include" }
        )
          .then(function (response) {
            if (response.status < 200 || response.status >= 300) return;
            return response.json();
          })
          .then(function (json) {
            var { error, data } = json;
            if (error || !data || data.need_consent) return;
            var consents = {};
            (data.preferences || []).forEach(function (pref) {
              if (pref.status !== 1) return;
              var mappedConsentKey = CONSENT_KEY_MAPPING[pref.category];
              if (!mappedConsentKey) return;
              consents[mappedConsentKey] = "granted";
            });
            function gtag() {
              w[l].splice(insertRowIndex + 1, 0, arguments);
            }
            gtag("consent", "update", consents);
          })
          .then(loadGTM)
          .catch(loadGTM);
      })(window, document, "script", "dataLayer", "GTM-WJZQSJF");
    </script>

    <script
      src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/common-resources/react/16.14.0/umd/react.production.min.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-sg/static/common-resources/react-dom/16.14.0/umd/react-dom.production.min.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-id/static/helpcenterfe/commonUtils.60b01cb9.async.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-id/static/helpcenterfe/async.994d4c7e.async.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-id/static/helpcenterfe/monitor.5e51b04c.async.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cs.deo.shopeemobile.com/shopee/shopee-cs-live-id/static/helpcenterfe/umi.2e4747b9.js"
      entry=""
      crossorigin="anonymous"
    ></script>
  </body>
</html>
