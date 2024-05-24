(function(a){var b=parseInt((location.hostname||"local").substring(0,10),36),c="sifi_att_"+b;if("undefined"!=typeof a[c])return void a[c].run();class SifiCmpCompliance{constructor(a){this.tcData=a,this.sifiVendorId="73"}checkConsent(){return this.outOfBandConsent()||this.inBandConsent()}inBandConsent(){return this.purpose()&&this.vendor()&&this.customPurpose()&&this.noRestrictions()}outOfBandConsent(){return this.tcData.outOfBand&&this.tcData.outOfBand.allowedVendors&&this.tcData.outOfBand.allowedVendors[this.sifiVendorId]&&this.tcData.outOfBand.disclosedVendors&&this.tcData.outOfBand.disclosedVendors[this.sifiVendorId]}purpose(){return this.tcData.purpose&&this.tcData.purpose.consents&&!Object.values(this.tcData.purpose.consents).includes(!1)&&this.tcData.purpose.legitimateInterests&&!Object.values(this.tcData.purpose.legitimateInterests).includes(!1)}vendor(){return this.tcData.vendor&&this.tcData.vendor.consents&&this.tcData.vendor.consents[this.sifiVendorId]}customPurpose(){return this.tcData.customPurpose&&this.tcData.customPurpose.consents&&!Object.values(this.tcData.customPurpose.consents).includes(!1)&&this.tcData.customPurpose.legitimateInterests&&!Object.values(this.tcData.customPurpose.legitimateInterests).includes(!1)||!this.tcData.customPurpose}noRestrictions(){return this.tcData.restrictions&&!Object.values(this.tcData.restrictions).some(a=>Object.keys(a).includes(this.sifiVendorId))||!this.tcData.restrictions}}var d={pixels_url:"//i.simpli.fi/p?",pixels:[],matching_pixels:[],protocol:"https:",pixels_to_drop:[],dropping_pixels:!1,rescue_pixel:null,company_id:"137728",run:function(){d._cmpPresent()?d._dropPixelsOnCmpConfirmation():d.drop_pixels()},drop_pixels:function(){d.already_dropped_matching||d.url_contains_email_address()?d._drop_matching_pixels():d.get_matching_pixels()},get_matching_pixels:function(){var a=document.createElement("script");a.async=!0,a.src=d.protocol+d.pixels_url+"cid="+d.company_id+"&cb="+c+"._hp",document.body.appendChild(a)},_cmpPresent:function(){return"function"==typeof __tcfapi},_dropPixelsOnCmpConfirmation:function(){__tcfapi("addEventListener",2,d._tcDataCallback)},_tcDataCallback:function(a,b){b&&"tcloaded"===a.eventStatus&&(d._checkCmpConsent(a)&&d.drop_pixels(),__tcfapi("removeEventListener",2,()=>{},a.listenerId))},_checkCmpConsent:function(a){return new SifiCmpCompliance(a).checkConsent()},_hp:function(a){d.matching_pixels=a&&a.pixels||[],d._drop_matching_pixels()},_drop_matching_pixels:function(){if(!d.already_dropped_matching){for(var a,b=d.matching_pixels.length-1;0<=b;b--)a=new Image,a.src=d.protocol+d.matching_pixels[b];d.already_dropped_matching=!0}},url_contains_email_address:function(){return /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(d.unescaped_url())},unescaped_url:function(){for(var a=document.location.href,b=decodeURIComponent(a);a!==b;)a=b,b=decodeURIComponent(a);return a}};a[c]=d,"complete"==document.readyState?d.run():window.addEventListener("load",d.run)})(window);
';
  font-style: normal;
  font-weight: 500;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCRc4EsA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfABc4EsA.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCBc4EsA.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBxc4EsA.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfCxc4EsA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfChc4EsA.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

</style>
<link rel="stylesheet" type="text/css" href="https://www.gstatic.com/recaptcha/releases/MHBiAvbtvk5Wb2eTZHoP1dUd/styles__ltr.css">
<script nonce="pr2o2ZHc1q2qd1HWKf0y5A" type="text/javascript">window['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/';</script>
<script type="text/javascript" src="https://www.gstatic.com/recaptcha/releases/MHBiAvbtvk5Wb2eTZHoP1dUd/recaptcha__en.js" nonce="pr2o2ZHc1q2qd1HWKf0y5A">
      
    </script></head>
<body><div id="rc-anchor-alert" class="rc-anchor-alert"></div>
<input type="hidden" id="recaptcha-token" value="03AFcWeA6eecNdAx_GjQBdO_saEFH1FlUuMEja3tKFYmc6b_IInaYvzlBvD97WzBZXSMzicBN6XyCYfMJMn2ieZVuvY6r4-HQ07F6xlEk_FToPeDBAm0B9Jf29p-bnrWWq1s2motcMFI04BOgJw8wqPdo_cI3zGpXhaWhC_mhX1Qsj99b0N4IklIaCfXztaecxNW5vChDQA7LU7XfEZW2TTx226j--noe7Q06cWEchc8h01i7HOQqWp6n7enHXprn3reDu65yiTpgDb1S1KCoSgBhakq0THWW_TpTwT2Ete-TsESBcgakGcC9GuJBS6Tc-MbWpnxfQuFiaSZviT7Ti4GQpB0J8GiNWUnoIJ3l8iloTzWTYLmQtLwbqDp0l1Den5A15eZk4ZFR7ewLDA-A_5gZb2BcuupDy_mpY_nB7OJ3Yw1URrjxNx8X-wotQTGATDUKnqjUbW-dB1-qthi837e4oOtTgTz1WskGXL_G3mAMn3KRaAley04iuVF25NxzMEo6nBXmDgGBC7mn1PIU0YJg8qUDWAe59jaA1kRAbuTBC-b0JwNEWygoTsLmHkqFAi0pGU-CEmkRn8Iv-haMSdmT0XLuawEZG0Fr4RBv_dseXCT3MnVjNeI91gc8mGO3JgJcbsq5GQTV_oJPFdi00afhgIDZhOKNr5YAauyL8IMzzowcPM0yZ8gnHgLwSlzRHgOt6_QjDpVKp9YKhcAj-JiT-5z_J-9bOg8304BYrFzXaenZQUg0X6eyOWxBuK45noBLTfvpewc6xZ6tqNMgV21oJoeppY3blL1eDJHTp0jtBcw9GW1dKSf5rYksDc-li6dNAyk4djAbDVXob_QmgBvXLavDqhjqXf6gOJRBcm9YjVMTr1KadEQQgxBUZtTwVFvXeTbev8lcM5AWxtDFchdgrE05cpmxZNr7ZFLRPjvG0DBbxQZMzjrSbOil6o2tDKlCxrlFurExA-fl--Tx-rHzID8baEyPJOSsEycnd1uu10wRCfrB3UH2kT0pWKXZLnoPkLPNOWf8iBBZ-VprvwdKWhDJpIFGXWTNA5z7OAdaSV5H8POl7J-yi5M_sxIBcB9do3pXb61osFd_CJNzven273U_UpUhsWzhsk6FJWj3v_EvM30FzmWjyf--eIpoHmExQy87Y          cors_use_newrelic_header: void 0,
                        cors_use_tracecontext_headers: void 0,
                        allowed_origins: void 0
                     },
                     session: {
                        domain: void 0,
                        expiresMs: d.oD,
                        inactiveMs: d.Hb
                     },
                     ssl: void 0,
                     obfuscate: void 0,
                     jserrors: {
                        enabled: !0,
                        harvestTimeSeconds: 10,
                        autoStart: !0
                     },
                     metrics: {
                        enabled: !0,
                        autoStart: !0
                     },
                     page_action: {
                        enabled: !0,
                        harvestTimeSeconds: 30,
                        autoStart: !0
                     },
                     page_view_event: {
                        enabled: !0,
                        autoStart: !0
                     },
                     page_view_timing: {
                        enabled: !0,
                        harvestTimeSeconds: 30,
                        long_task: !1,
                        autoStart: !0
                     },
                     session_trace: {
                        enabled: !0,
                        harvestTimeSeconds: 10,
                        autoStart: !0
                     },
                     harvest: {
                        tooManyRequestsDelay: 60
                     },
                     session_replay: {
                        autoStart: !0,
                        enabled: !1,
                        harvestTimeSeconds: 60,
                        sampling_rate: 50,
                        error_sampling_rate: 50,
                        collect_fonts: !1,
                        inline_images: !1,
                        inline_stylesheet: !0,
                        mask_all_inputs: !0,
                        get mask_text_selector() {
                           return e.mask_selector
                        },
                        set mask_text_selector(t) {
                           u(t) ? e.mask_selector = t + ",[data-nr-mask]" : null === t ? e.mask_selector = t : (0, l.Z)("An invalid session_replay.mask_selector was provided and will not be used", t)
                        },
                        get block_class() {
                           return "nr-block"
                        },
                        get ignore_class() {
                           return "nr-ignore"
                        },
                        get mask_text_class() {
                           return "nr-mask"
                        },
                        get block_selector() {
                           return e.block_selector
                        },
                        set block_selector(t) {
                           u(t) ? e.block_selector += ",".concat(t) : "" !== t && (0, l.Z)("An invalid session_replay.block_selector was provided and will not be used", t)
                        },
                        get mask_input_options() {
                           return e.mask_input_options
                        },
                        set mask_input_options(t) {
                           t && "object" == typeof t ? e.mask_input_options = {
                              ...t,
                              password: !0
                           } : (0, l.Z)("An invalid session_replay.mask_input_option was provided and will not be used", t)
                        }
                     },
                     spa: {
                        enabled: !0,
                        harvestTimeSeconds: 10,
                        autoStart: !0
                     }
                  }
               },
               h = {},
               p = "All configuration objects require an agent identifier!";

            function g(e) {
               if (!e) throw new Error(p);
               if (!h[e]) throw new Error("Configuration for ".concat(e, " was never set"));
               return h[e]
            }

            function m(e, t) {
               if (!e) throw new Error(p);
               h[e] = (0, i.D)(t, f()), (0, n.Qy)(e, h[e], "config")
            }

            function v(e, t) {
               if (!e) throw new Error(p);
               var r = g(e);
               if (r) {
                  for (var n = t.split("."), i = 0; i < n.length - 1; i++)
                     if ("object" != typeof (r = r[n[i]])) return;
                  r = r[n[n.length - 1]]
               }
               return r
            }
            const b = {
                  accountID: void 0,
                  trustKey: void 0,
                  agentID: void 0,
                  licenseKey: void 0,
                  applicationID: void 0,
                  xpid: void 0
               },
               y = {};

            function A(e) {
               if (!e) throw new Error("All loader-config objects require an agent identifier!");
               if (!y[e]) throw new Error("LoaderConfig for ".concat(e, " was never set"));
               return y[e]
            }

            function w(e, t) {
               if (!e) throw new Error("All loader-config objects require an agent identifier!");
               y[e] = (0, i.D)(t, b), (0, n.Qy)(e, y[e], "loader_config")
            }
            const x = (0, n.mF)().o;
            var E = r(385),
               _ = r(6818);
            const T = {
                  buildEnv: _.Re,
                  customTransaction: void 0,
                  disabled: !1,
                  distMethod: _.gF,
                  isolatedBacklog: !1,
                  loaderType: void 0,
                  maxBytes: 3e4,
                  offset: Math.floor(E._A?.performance?.timeOrigin || E._A?.performance?.timing?.navigationStart || Date.now()),
                  onerror: void 0,
                  origin: "" + E._A.location,
                  ptid: void 0,
                  releaseIds: {},
                  session: void 0,
                  xhrWrappable: "function" == typeof E._A.XMLHttpRequest?.prototype?.addEventListener,
                  version: _.q4,
                  denyList: void 0
               },
               S = {};

            function D(e) {
               if (!e) throw new Error("All runtime objects require an agent identifier!");
               if (!S[e]) throw new Error("Runtime for ".concat(e, " was never set"));
               return S[e]
            }

            function j(e, t) {
               if (!e) throw new Error("All runtime objects require an agent identifier!");
               S[e] = (0, i.D)(t, T), (0, n.Qy)(e, S[e], "runtime")
            }

            function N(e) {
               return function (e) {
                  try {
                     const t = s(e);
                     return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID
                  } catch (e) {
                     return !1
                  }
               }(e)
            }
         },
         9567: (e, t, r) => {
            r.d(t, {
               D: () => i
            });
            var n = r(50);

            function i(e, t) {
               try {
                  if (!e || "object" != typeof e) return (0, n.Z)("Setting a Configurable requires an object as input");
                  if (!t || "object" != typeof t) return (0, n.Z)("Setting a Configurable requires a model to set its initial properties");
                  const r = Object.create(Object.getPrototypeOf(t), Object.getOwnPropertyDescriptors(t)),
                     o = 0 === Object.keys(r).length ? e : r;
                  for (let a in o)
                     if (void 0 !== e[a]) try {
                        Array.isArray(e[a]) && Array.isArray(t[a]) ? r[a] = Array.from(new Set([...e[a], ...t[a]])) : "object" == typeof e[a] && "object" == typeof t[a] ? r[a] = i(e[a], t[a]) : r[a] = e[a]
                     } catch (e) {
                        (0, n.Z)("An error occurred while setting a property of a Configurable", e)
                     }
                  return r
               } catch (e) {
                  (0, n.Z)("An error occured while setting a Configurable", e)
               }
            }
         },
         6818: (e, t, r) => {
            r.d(t, {
               Re: () => i,
               gF: () => o,
               lF: () => a,
               q4: () => n
            });
            const n = "1.246.0",
               i = "PROD",
               o = "CDN",
               a = "2.0.0-alpha.11"
         },
         385: (e, t, r) => {
            r.d(t, {
               FN: () => s,
               IF: () => d,
               Nk: () => f,
               Tt: () => c,
               _A: () => o,
               cv: () => h,
               iS: () => a,
               il: () => n,
               ux: () => u,
               v6: () => i,
               w1: () => l
            });
            const n = "undefined" != typeof window && !!window.document,
               i = "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self.navigator instanceof WorkerNavigator || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis.navigator instanceof WorkerNavigator),
               o = n ? window : "undefined" != typeof WorkerGlobalScope && ("undefined" != typeof self && self instanceof WorkerGlobalScope && self || "undefined" != typeof globalThis && globalThis instanceof WorkerGlobalScope && globalThis),
               a = Boolean("hidden" === o?.document?.visibilityState),
               s = "" + o?.location,
               c = /iPad|iPhone|iPod/.test(o.navigator?.userAgent),
               u = c && "undefined" == typeof SharedWorker,
               d = (() => {
                  const e = o.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
                  return Array.isArray(e) && e.length >= 2 ? +e[1] : 0
               })(),
               l = Boolean(n && window.document.documentMode),
               f = !!o.navigator?.sendBeacon,
               h = Math.floor(o?.performance?.timeOrigin || o?.performance?.timing?.navigationStart || Date.now())
         },
         1117: (e, t, r) => {
            r.d(t, {
               w: () => o
            });
            var n = r(50);
            const i = {
               agentIdentifier: "",
               ee: void 0
            };
            class o {
               constructor(e) {
                  try {
                     if ("object" != typeof e) return (0, n.Z)("shared context requires an object as input");
                     this.sharedContext = {}, Object.assign(this.sharedContext, i), Object.entries(e).forEach((e => {
                        let [t, r] = e;
                        Object.keys(i).includes(t) && (this.sharedContext[t] = r)
                     }))
                  } catch (e) {
                     (0, n.Z)("An error occured while setting SharedContext", e)
                  }
               }
            }
         },
         8e3: (e, t, r) => {
            r.d(t, {
               L: () => d,
               R: () => c
            });
            var n = r(8325),
               i = r(1284),
               o = r(4322),
               a = r(3325);
            const s = {};

            function c(e, t) {
               const r = {
                  staged: !1,
                  priority: a.p[t] || 0
               };
               u(e), s[e].get(t) || s[e].set(t, r)
            }

            function u(e) {
               e && (s[e] || (s[e] = new Map))
            }

            function d() {
               let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "feature";
               if (u(e), !e || !s[e].get(t)) return a(t);
               s[e].get(t).staged = !0;
               const r = [...s[e]];

               function a(t) {
                  const r = e ? n.ee.get(e) : n.ee,
                     a = o.X.handlers;
                  if (r.backlog && a) {
                     var s = r.backlog[t],
                        c = a[t];
                     if (c) {
                        for (var u = 0; s && u < s.length; ++u) l(s[u], c);
                        (0, i.D)(c, (function (e, t) {
                           (0, i.D)(t, (function (t, r) {
                              r[0].on(e, r[1])
                           }))
                        }))
                     }
                     delete a[t], r.backlog[t] = null, r.emit("drain-" + t, [])
                  }
               }
               r.every((e => {
                  let [t, r] = e;
                  return r.staged
               })) && (r.sort(((e, t) => e[1].priority - t[1].priority)), r.forEach((t => {
                  let [r] = t;
                  s[e].delete(r), a(r)
               })))
            }

            function l(e, t) {
               var r = e[1];
               (0, i.D)(t[r], (function (t, r) {
                  var n = e[0];
                  if (r[0] === n) {
                     var i = r[1],
                        o = e[3],
                        a = e[2];
                     i.apply(o, a)
                  }
               }))
            }
         },
         8325: (e, t, r) => {
            r.d(t, {
               A: () => c,
               ee: () => u
            });
            var n = r(8632),
               i = r(2210),
               o = r(234);
            class a {
               constructor(e) {
                  this.contextId = e
               }
            }
            var s = r(3117);
            const c = "nr@context:".concat(s.a),
               u = function e(t, r) {
                  var n = {},
                     s = {},
                     d = {},
                     f = !1;
                  try {
                     f = 16 === r.length && (0, o.OP)(r).isolatedBacklog
                  } catch (e) {}
                  var h = {
                     on: g,
                     addEventListener: g,
                     removeEventListener: function (e, t) {
                        var r = n[e];
                        if (!r) return;
                        for (var i = 0; i < r.length; i++) r[i] === t && r.splice(i, 1)
                     },
                     emit: function (e, r, n, i, o) {
                        !1 !== o && (o = !0);
                        if (u.aborted && !i) return;
                        t && o && t.emit(e, r, n);
                        for (var a = p(n), c = m(e), d = c.length, l = 0; l < d; l++) c[l].apply(a, r);
                        var f = b()[s[e]];
                        f && f.push([h, e, r, a]);
                        return a
                     },
                     get: v,
                     listeners: m,
                     context: p,
                     buffer: function (e, t) {
                        const r = b();
                        if (t = t || "feature", h.aborted) return;
                        Object.entries(e || {}).forEach((e => {
                           let [n, i] = e;
                           s[i] = t, t in r || (r[t] = [])
                        }))
                     },
                     abort: l,
                     aborted: !1,
                     isBuffering: function (e) {
                        return !!b()[s[e]]
                     },
                     debugId: r,
                     backlog: f ? {} : t && "object" == typeof t.backlog ? t.backlog : {}
                  };
                  return h;

                  function p(e) {
                     return e && e instanceof a ? e : e ? (0, i.X)(e, c, (() => new a(c))) : new a(c)
                  }

                  function g(e, t) {
                     n[e] = m(e).concat(t)
                  }

                  function m(e) {
                     return n[e] || []
                  }

                  function v(t) {
                     return d[t] = d[t] || e(h, t)
                  }

                  function b() {
                     return h.backlog
                  }
      YbTAyUkc4dTl0d0NjQmNsdW5iY2xJUTByOGJtbEdPWG5WWFp3eUZpQlBEcjBlRnA0T2xXU2hneDk3ZjRMVE41RlR1WXFGaysrMzdualBB\x22,\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\x22],null,[\x22conf\x22,null,\x226LeFGh8TAAAAAA6lQx6cSAfOHbCl-M4h0iEPlIGO\x22,0,null,null,null,0,[21,73,95,87,41,43,42,83,102],[-5022042,427],0,null,null,null,25,0,null,0,null,700],\x22https://aap.planmygift.org:443\x22,[\x22ctask\x22,[[\x22hctask\x22,\x221f664273\x22,\x2230aa1909a21cc252fabed834a33243f92220789b733e252a1f0a85307b6dc113\x22,0,100],[\x22hctask\x22,\x222a3016f4\x22,\x22ebf454026e8028202e72350aac35a158206e8b20413b8974970e77941fb5f5d8\x22,0,100],[\x22hctask\x22,\x2212ae3307\x22,\x22f47ca8abe5eb5f7be77fb4ab227f369e79d20cd92bcb140005187b7a0c2ee14f\x22,0,100]]],[1,1,1],null,null,null,0,3600,[\x22https://www.google.com/intl/en/policies/privacy/\x22,\x22https://www.google.com/intl/en/policies/terms/\x22],\x22kg3Fibv3qiihu1CvUrMIDzmwhp/m+HrX+m+haBcp6qE\\u003d\x22,0,0,null,1,1707180819385,0,0,[123],null,[136,70],\x22RC-32R11pcWGDdl_Q\x22,null,0]");
    </script></body></html>ieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #ffffff;
  border-color: #cccccc;
}
.btn-default .badge {
  color: #ffffff;
  background-color: #333333;
}
.btn-primary {
  color: #ffffff;
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #ffffff;
  background-color: #3071a9;
  border-color: #285e8e;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-image: none;
}
.btn-primary.disabled,
.btn-primary[disabled],
fieldset[disabled] .btn-primary,
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #428bca;
  border-color: #357ebd;
}
.btn-primary .badge {
  color: #428bca;
  background-color: #ffffff;
}
.btn-success {
  color: #ffffff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  color: #ffffff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  background-image: none;
}
.btn-success.disabled,
.btn-success[disabled],
fieldset[disabled] .btn-success,
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #ffffff;
}
.btn-info {
  color: #ffffff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  color: #ffffff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  background-image: none;
}
.btn-info.disabled,
.btn-info[disabled],
fieldset[disabled] .btn-info,
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #ffffff;
}
.btn-warning {
  color: #ffffff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  color: #ffffff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  background-image: none;
}
.btn-warning.disabled,
.btn-warning[disabled],
fieldset[disabled] .btn-warning,
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #ffffff;
}
.btn-danger {
  color: #ffffff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  color: #ffffff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  background-image: none;
}
.btn-danger.disabled,
.btn-danger[disabled],
fieldset[disabled] .btn-danger,
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #ffffff;
}
.btn-link {
  color: #428bca;
  font-weight: normal;
  cursor: pointer;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
  border-color: transparent;
}
.btn-link:hover,
.btn-link:focus {
  color: #2a6496;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #777777;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 5px;
}
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}
.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  -o-transition: height 0.35s ease;
  transition: height 0.35s ease;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.dropdown {
  position: relative;
}
.dropdown-toggle:focus {
  outline: 0;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #ffffff;
  text-decoration: none;
  outline: 0;
  background-color: #428bca;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #777777;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  cursor: not-allowed;
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  left: auto;
  right: 0;
}
.dropdown-menu-left {
  left: 0;
  right: auto;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777777;
  white-space: nowrap;
}
.dropdown-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  border-top: 0;
  border-bottom: 4px solid;
  content: "";
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    left: auto;
    right: 0;
  }
  .navbar-right .dropdown-menu-left {
    left: 0;
    right: auto;
  }
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus {
  outline: 0;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child > .btn:last-child,
.btn-group > .btn-group:first-child > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn-group:last-child > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn .caret {
  margin-left: 0;
}
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
  float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  float: none;
  display: table-cell;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
[data-toggle="buttons"] > .btn > input[type="radio"],
[data-toggle="buttons"] > .btn > input[type="checkbox"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  filter: alpha(opacity=0);
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-left: 0;
  padding-right: 0;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 6px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.input-group-addon:last-child {
  border-left: 0;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.input-group-btn > .btn {
  position: relative;
}
.input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  margin-left: -1px;
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  background-color: transparent;
  cursor: not-allowed;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #428bca;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #dddddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #dddddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-bottom-color: transparent;
  cursor: default;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #dddddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #dddddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #ffffff;
  }
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 4px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #ffffff;
  background-color: #428bca;
}
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
.nav-justified {
  width: 100%;
}
.nav-justified > li {
  float: none;
}
.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs-justified {
  border-bottom: 0;
}
.nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
  border: 1px solid #dddddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #dddddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #ffffff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}
@media (min-width: 768px) {
  .navbar {
    border-radius: 4px;
  }
}
@media (min-width: 768px) {
  .navbar-header {
    float: left;
  }
}
.navbar-collapse {
  overflow-x: visible;
  padding-right: 15px;
  padding-left: 15px;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 768px) {
  .navbar-static-top {
    border-radius: 0;
  }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
@media (min-width: 768px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
.navbar-brand {
  float: left;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
  height: 50px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}
@media (min-width: 768px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}
.navbar-toggle {
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 9px 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: 0;
}
.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }
}
.navbar-nav {
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
  }
  .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}
@media (min-width: 768px) {
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .navbar-nav.navbar-right:last-child {
    margin-right: -15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  }
}
.navbar-form {
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px 15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: 8px;
  margin-bottom: 8px;
}
@media (min-width: 768px) {
  .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn,
  .navbar-form .input-group .form-control {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio,
  .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio label,
  .navbar-form .checkbox label {
    padding-left: 0;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}
@media (max-width: 767px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .navbar-form.navbar-right:last-child {
    margin-right: -15px;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-left: 15px;
    margin-right: 15px;
  }
  .navbar-text.navbar-right:last-child {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777777;
}
.navbar-default .navbar-nav > li > a {
  color: #777777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #cccccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #dddddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #dddddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background-color: #e7e7e7;
  color: #555555;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #cccccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777777;
}
.navbar-default .navbar-link:hover {
  color: #333333;
}
.navbar-default .btn-link {
  color: #777777;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333333;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #cccccc;
}
.navbar-inverse {
  background-color: #222222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #777777;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #ffffff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #777777;
}
.navbar-inverse .navbar-nav > li > a {
  color: #777777;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #ffffff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #ffffff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #ffffff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #080808;
  color: #ffffff;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #777777;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #ffffff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #ffffff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #777777;
}
.navbar-inverse .navbar-link:hover {
  color: #ffffff;
}
.navbar-inverse .btn-link {
  color: #777777;
}
.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
  color: #ffffff;
}
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444444;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  content: "/\00a0";
  padding: 0 5px;
  color: #cccccc;
}
.breadcrumb > .active {
  color: #777777;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.42857143;
  text-decoration: none;
  color: #428bca;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  margin-left: -1px;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  color: #2a6496;
  background-color: #eeeeee;
  border-color: #dddddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #ffffff;
  background-color: #428bca;
  border-color: #428bca;
  cursor: default;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777777;
  background-color: #ffffff;
  border-color: #dddddd;
  cursor: not-allowed;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  list-style: none;
  text-align: center;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.pager .next > a,
.pager .next > span {
  float: right;
}
.pager .previous > a,
.pager .previous > span {
  float: left;
}
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #777777;
  background-color: #ffffff;
  cursor: not-allowed;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
a.label:hover,
a.label:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
.label:empty {
  display: none;
}
.btn .label {
  position: relative;
  top: -1px;
}
.label-default {
  background-color: #777777;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #5e5e5e;
}
.label-primary {
  background-color: #428bca;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #3071a9;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  line-height: 1;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  background-color: #777777;
  border-radius: 10px;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.btn-xs .badge {
  top: 0;
  padding: 1px 5px;
}
a.badge:hover,
a.badge:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
a.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #428bca;
  background-color: #ffffff;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eeeeee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.jumbotron > hr {
  border-top-color: #d5d5d5;
}
.container .jumbotron {
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron {
    padding-left: 60px;
    padding-right: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-left: auto;
  margin-right: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #428bca;
}
.thumbnail .caption {
  padding: 9px;
  color: #333333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #31708f;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  background-color: #fcf8e3;
  border-color: #faebcc;
  color: #8a6d3b;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  overflow: hidden;
  height: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;
  background-color: #428bca;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar[aria-valuenow="1"],
.progress-bar[aria-valuenow="2"] {
  min-width: 30px;
}
.progress-bar[aria-valuenow="0"] {
  color: #777777;
  min-width: 30px;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.media {
  margin-top: 15px; }
  .media:first-child {
    margin-top: 0; }

.media,
.media-body {
  zoom: 1;
  overflow: hidden; }

.media-body {
  width: 10000px; }

.media-object {
  display: block; }
  .media-object.img-thumbnail {
    max-width: none; }

.media-right,
.media > .pull-right {
  padding-left: 10px; }

.media-left,
.media > .pull-left {
  padding-right: 10px; }

.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top; }

.media-middle {
  vertical-align: middle; }

.media-bottom {
  vertical-align: bottom; }

.media-heading {
  margin-top: 0;
  margin-bottom: 5px; }

.media-list {
  padding-left: 0;
  list-style: none; }
.list-group {
  margin-bottom: 20px;
  padding-left: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
}
.list-group-item:first-child {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
a.list-group-item {
  color: #555555;
}
a.list-group-item .list-group-item-heading {
  color: #333333;
}
a.list-group-item:hover,
a.list-group-item:focus {
  text-decoration: none;
  color: #555555;
  background-color: #f5f5f5;
}
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  background-color: #eeeeee;
  color: #777777;
}
.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #777777;
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #ffffff;
  background-color: #428bca;
  border-color: #428bca;
}
.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #e1edf7;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
a.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
a.list-group-item-success.active:hover,
a.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
a.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
a.list-group-item-info.active:hover,
a.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
a.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
a.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}
.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
.panel {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #dddddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
  margin-bottom: 0;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 3px;
}
.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 3px;
}
.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive {
  border-top: 1px solid #dddddd;
}
.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}
.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
  border: 0;
}
.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}
.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}
.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}
.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}
.panel > .table-responsive {
  border: 0;
  margin-bottom: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body {
  border-top: 1px solid #dddddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #dddddd;
}
.panel-default {
  border-color: #dddddd;
}
.panel-default > .panel-heading {
  color: #333333;
  background-color: #f5f5f5;
  border-color: #dddddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #dddddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #dddddd;
}
.panel-primary {
  border-color: #428bca;
}
.panel-primary > .panel-heading {
  color: #ffffff;
  background-color: #428bca;
  border-color: #428bca;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #428bca;
}
.panel-primary > .panel-heading .badge {
  color: #428bca;
  background-color: #ffffff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #428bca;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
.embed-responsive.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive.embed-responsive-4by3 {
  padding-bottom: 75%;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, 0.15);
}
.well-lg {
  padding: 24px;
  border-radius: 6px;
}
.well-sm {
  padding: 9px;
  border-radius: 3px;
}
.close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000000;
  text-shadow: 0 1px 0 #ffffff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}
.close:hover,
.close:focus {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.modal-open {
  overflow: hidden;
}
.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transform: translate3d(0, -25%, 0);
  transform: translate3d(0, -25%, 0);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}
.modal.in .modal-dialog {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #999999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000000;
}
.modal-backdrop.fade {
  opacity: 0;
  filter: alpha(opacity=0);
}
.modal-backdrop.in {
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.42857143px;
}
.modal-header .close {
  margin-top: -2px;
}
.modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.modal-body {
  position: relative;
  padding: 15px;
}
.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  visibility: visible;
  font-size: 12px;
  line-height: 1.4;
  opacity: 0;
  filter: alpha(opacity=0);
}
.tooltip.in {
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.tooltip.top {
  margin-top: -3px;
  padding: 5px 0;
}
.tooltip.right {
  margin-left: 3px;
  padding: 0 5px;
}
.tooltip.bottom {
  margin-top: 3px;
  padding: 5px 0;
}
.tooltip.left {
  margin-left: -3px;
  padding: 0 5px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background-color: #000000;
  border-radius: 4px;
}
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  left: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000000;
}
.tooltip.top-right .tooltip-arrow {
  bottom: 0;
  right: 5px;
  border-width: 5px 5px 0;
  border-top-color: #000000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  left: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  right: 5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  text-align: left;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #cccccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  white-space: normal;
}
.popover.top {
  margin-top: -10px;
}
.popover.right {
  margin-left: 10px;
}
.popover.bottom {
  margin-top: 10px;
}
.popover.left {
  margin-left: -10px;
}
.popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: normal;
  line-height: 18px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}
.popover-content {
  padding: 9px 14px;
}
.popover > .arrow,
.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover > .arrow {
  border-width: 11px;
}
.popover > .arrow:after {
  border-width: 10px;
  content: "";
}
.popover.top > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999999;
  border-top-color: rgba(0, 0, 0, 0.25);
  bottom: -11px;
}
.popover.top > .arrow:after {
  content: " ";
  bottom: 1px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #ffffff;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999999;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.popover.right > .arrow:after {
  content: " ";
  left: 1px;
  bottom: -10px;
  border-left-width: 0;
  border-right-color: #ffffff;
}
.popover.bottom > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
.popover.bottom > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #ffffff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.popover.left > .arrow:after {
  content: " ";
  right: 1px;
  border-right-width: 0;
  border-left-color: #ffffff;
  bottom: -10px;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-inner > .item {
  display: none;
  position: relative;
  -webkit-transition: 0.6s ease-in-out left;
  -o-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
}
.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
  display: block;
}
.carousel-inner > .active {
  left: 0;
}
.carousel-inner > .next,
.carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}
.carousel-inner > .next {
  left: 100%;
}
.carousel-inner > .prev {
  left: -100%;
}
.carousel-inner > .next.left,
.carousel-inner > .prev.right {
  left: 0;
}
.carousel-inner > .active.left {
  left: -100%;
}
.carousel-inner > .active.right {
  left: 100%;
}
.carousel-control {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  opacity: 0.5;
  filter: alpha(opacity=50);
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
}
.carousel-control.right {
  left: auto;
  right: 0;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
}
.carousel-control:hover,
.carousel-control:focus {
  outline: 0;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
}
.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  font-family: serif;
}
.carousel-control .icon-prev:before {
  content: '\2039';
}
.carousel-control .icon-next:before {
  content: '\203a';
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  margin-left: -30%;
  padding-left: 0;
  list-style: none;
  text-align: center;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000 \9;
  background-color: rgba(0, 0, 0, 0);
}
.carousel-indicators .active {
  margin: 0;
  width: 12px;
  height: 12px;
  background-color: #ffffff;
}
.carousel-caption {
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 20px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-caption .btn {
  text-shadow: none;
}
@media screen and (min-width: 768px) {
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -15px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -15px;
  }
  .carousel-caption {
    left: 20%;
    right: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-footer:before,
.modal-footer:after {
  content: " ";
  display: table;
}
.clearfix:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-footer:after {
  clear: both;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.invisible {
  visibility: hidden;
}
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.hidden {
  display: none;
  visibility: hidden;
}
.affix {
  position: fixed;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
@-ms-viewport {
  width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}
@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }
  table.visible-xs {
    display: table;
  }
  tr.visible-xs {
    display: table-row !important;
  }
  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }
  table.visible-sm {
    display: table;
  }
  tr.visible-sm {
    display: table-row !important;
  }
  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }
  table.visible-md {
    display: table;
  }
  tr.visible-md {
    display: table-row !important;
  }
  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }
  table.visible-lg {
    display: table;
  }
  tr.visible-lg {
    display: table-row !important;
  }
  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
.visible-print {
  display: none !important;
}
@media print {
  .visible-print {
    display: block !important;
  }
  table.visible-print {
    display: table;
  }
  tr.visible-print {
    display: table-row !important;
  }
  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}
.visible-print-block {
  display: none !important;
}
@media print {
  .visible-print-block {
    display: block !important;
  }
}
.visible-print-inline {
  display: none !important;
}
@media print {
  .visible-print-inline {
    display: inline !important;
  }
}
.visible-print-inline-block {
  display: none !important;
}
@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}
@media print {
  .hidden-print {
    display: none !important;
  }
}
