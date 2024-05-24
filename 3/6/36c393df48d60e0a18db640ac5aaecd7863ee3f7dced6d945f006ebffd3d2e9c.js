function load_admiral() {

    return new Promise((resolve, reject) => {

        console.log("ADS load_admiral");

        // Call script
        !(function (o, n, t) { t = o.createElement(n), o = o.getElementsByTagName(n)[0], t.async = 1, t.src = SITE_INFO['admiral_url_1'], o.parentNode.insertBefore(t, o) })(document, "script"), (function (o, n) { o[n] = o[n] || })(window, "admiral"); !(function (c, e, o, t, n) { function r(o, t) { (function n() { try { return 0 < (localStorage.getItem("v4ac1eiZr0") || "").split(",")[4] } catch (o) { } return !1 })() && (t = c[e].pubads()) && t.setTargeting("admiral-engaged", "true") } (n = c[e] = c[e] || {}).cmd = n.cmd || [], typeof n.pubads === o ? r() : typeof n.cmd.unshift === o ? n.cmd.unshift(r) : n.cmd.push(r) })(window, "googletag", "function");;; !(function (a, i, t, e) { var n = i[t]; !(function r() { if (!window.frames[e]) { var t = a.body; if (t) { var n = a.createElement("iframe"); n.style.display = "none", n.name = e, t.appendChild(n) } else setTimeout(r, 5) } })(); var c = []; function o(i) { if (i && i.data) { var e, t = "__tcfapiCall", c = "string" == typeof i.data && 0 <= i.data.indexOf(t); (e = c ? ((function a(t) { try { return JSON.parse(t) } catch (n) { } })(i.data) || {})[t] : (i.data || {})[t]) && n(e.command, e.version,  e.parameter) } } "function" != typeof n && (n = i[t] = i[t] || function f() { for (var t = [], n = 0; n < arguments.length; n++)t.push(arguments[n]); if (!t.length) return c; "ping" === t[0] ? t[2]({ gdprAppliesGlobally: !!i.__cmpGdprAppliesGlobally, cmpLoaded: !1, cmpStatus: "stub" }) : 0 < t.length && c.push(t) }, i.addEventListener ? i.addEventListener("message", o, !1) : i.attachEvent && i.attachEvent("onmessage", o)) })(document, window, "__tcfapi", "__tcfapiLocator");; !(function (t, n, i, u, e, o) { var a = n[i]; function r(t) { if (t) { var u = (t.data || {})[i + "Call"]; u && n[i](u.command, u.version,  } } if ((function c() { if (!window.frames[u]) { var n = t.body; if (n) { var i = t.createElement("iframe"); i.style.display = "none", i.name = u, n.appendChild(i) } else setTimeout(c, 5) } })(), "function" != typeof a) { var s = { getUSPData: function (n, i) { return n !== 1 ? i && i(null, !1) : i && i({ version: null, uspString: null }, !1) } }; a = n[i] =  n.addEventListener ? n.addEventListener("message", r, !1) : n.attachEvent && n.attachEvent("onmessage", r) } o = t.createElement(e), t = t.getElementsByTagName(e)[0], o.src = SITE_INFO['admiral_url_2'], t.parentNode.insertBefore(o, t) })(document, window, "__uspapi", "__uspapiLocator", "script");

        // Create callback
        admiral("after", "cmp.loaded", function (data) {

            var gdpr_applies = false;
            if (data.gdprAppliesGlobally || data.euVisitor) {
                gdpr_applies = true;
            }
            // Keep track of whether GPT tag was loaded

            if (gdpr_applies && !data.consentKnown) {
                // If GDPR applies based on your configuration, but
                // no choice has been made, then don't load GPT tag
                // until the user has made a choice
                admiral("after", "cmp.updated", ;
            } else {
                // If GDPR doesn't apply based on your configuration,
                // or if there is prior consent, then load the GPT tag
                // addGPTTag();
                console.log("ADS load_admiral resolve", data);
                resolve(data);
            }
        });

    });
} 

export default load_admiral;