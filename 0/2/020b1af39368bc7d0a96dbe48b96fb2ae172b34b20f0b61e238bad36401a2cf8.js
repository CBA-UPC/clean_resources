var getCookie = function (name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length === 2) return parts.pop().split(";").shift();
};

var cookieVal = getCookie('ndrEmbeds');
var substring = "tracking";

// Nur dann nicht ausliefern, wenn "tracking" im Cookie steht
if (decodeURIComponent(cookieVal).indexOf(substring) === -1) {
	var pianoAnalytics = function (U) {
		"use strict";
		var B = {
			site: "595937",
			collectDomain: "https://log.xiti.com",
			path: "event",
			visitorStorageMode: "fixed",
			storageLifetimeVisitor: 395,
			storageLifetimeUser: 395,
			storageLifetimePrivacy: 395,
			privacyDefaultMode: "optin",
			sendEventWhenOptout: !0,
			isVisitorClientSide: !0,
			enableCallbacks: !0,
			cookieDomain: "",
			cookieSecure: !0,
			cookiePath: "/",
			cookieSameSite: "lax",
			encodeStorageBase64: !1,
			addEventURL: "withoutQS",
			clickAutoManagement: !0,
			enableUTMTracking: !0,
			campaignPrefix: ["at_"],
			storageVisitor: "pa_vid",
			storageUser: "pa_user",
			version: "6.8.2",
			minHeartbeat: 5,
			minBufferingHeartbeat: 1,
			queueVarName: "_paq",
			privacy: {
				storageKey: "pa_privacy",
				legacyKeys: {pa_vid: !0, pa_privacy: !0, atuserid: !0},
				storageKeys: {pa_user: !0},
				modes: {
					optin: {
						name: "optin",
						properties: {
							include: {visitor_privacy_consent: !0, visitor_privacy_mode: "optin"},
							allowed: {"*": {"*": !0}},
							forbidden: {"*": {}}
						},
						storage: {allowed: {"*": !0}, forbidden: {}},
						events: {allowed: {"*": !0}, forbidden: {}}
					},
					optout: {
						name: "optout",
						visitorId: "OPT-OUT",
						properties: {
							include: {visitor_privacy_consent: !1, visitor_privacy_mode: "optout"},
							allowed: {"*": {}},
							forbidden: {"*": {}}
						},
						storage: {allowed: {pa_vid: !0, pa_privacy: !0}, forbidden: {}},
						events: {allowed: {"*": !0}, forbidden: {}}
					},
					"no-consent": {
						name: "no-consent",
						visitorId: "no-consent",
						properties: {
							include: {visitor_privacy_consent: !1, visitor_privacy_mode: "no-consent"},
							allowed: {"*": {}},
							forbidden: {"*": {}}
						},
						storage: {allowed: {}, forbidden: {"*": !0}},
						events: {allowed: {"*": !0}, forbidden: {}}
					},
					"no-storage": {
						name: "no-storage",
						visitorId: "no-storage",
						properties: {
							include: {visitor_privacy_consent: !1, visitor_privacy_mode: "no-storage"},
							allowed: {"*": {"*": !0}},
							forbidden: {"*": {}}
						},
						storage: {allowed: {}, forbidden: {"*": !0}},
						events: {allowed: {"*": !0}, forbidden: {}}
					},
					exempt: {
						name: "exempt",
						properties: {
							include: {visitor_privacy_consent: !1, visitor_privacy_mode: "exempt"}, allowed: {
								"*": {
									app_crash: !0,
									app_crash_class: !0,
									app_crash_screen: !0,
									app_version: !0,
									browser: !0,
									browser_cookie_acceptance: !0,
									browser_group: !0,
									browser_version: !0,
									click: !0,
									click_chapter1: !0,
									click_chapter2: !0,
									click_chapter3: !0,
									click_full_name: !0,
									connection_monitor: !0,
									connection_organisation: !0,
									date: !0,
									date_day: !0,
									date_daynumber: !0,
									date_month: !0,
									date_monthnumber: !0,
									date_week: !0,
									date_year: !0,
									date_yearofweek: !0,
									device_brand: !0,
									device_display_height: !0,
									device_display_width: !0,
									device_name: !0,
									device_name_tech: !0,
									device_screen_diagonal: !0,
									device_screen_height: !0,
									device_screen_width: !0,
									device_type: !0,
									event_collection_platform: !0,
									event_collection_version: !0,
									event_hour: !0,
									event_id: !0,
									event_minute: !0,
									event_position: !0,
									event_second: !0,
									event_time: !0,
									event_time_utc: !0,
									event_url: !0,
									event_url_domain: !0,
									event_url_full: !0,
									exclusion_cause: !0,
									exclusion_type: !0,
									geo_city: !0,
									geo_continent: !0,
									geo_country: !0,
									geo_metro: !0,
									geo_region: !0,
									goal_type: !0,
									hit_time_utc: !0,
									os: !0,
									os_group: !0,
									os_version: !0,
									os_version_name: !0,
									page: !0,
									page_chapter1: !0,
									page_chapter2: !0,
									page_chapter3: !0,
									page_duration: !0,
									page_full_name: !0,
									page_position: !0,
									page_title_html: !0,
									pageview_id: !0,
									previous_url: !0,
									privacy_status: !0,
									site: !0,
									site_env: !0,
									site_id: !0,
									site_platform: !0,
									src: !0,
									src_detail: !0,
									src_direct_access: !0,
									src_organic: !0,
									src_organic_detail: !0,
									src_portal_domain: !0,
									src_portal_site: !0,
									src_portal_site_id: !0,
									src_portal_url: !0,
									src_referrer_site_domain: !0,
									src_referrer_site_url: !0,
									src_referrer_url: !0,
									src_se: !0,
									src_se_category: !0,
									src_se_country: !0,
									src_type: !0,
									src_url: !0,
									src_url_domain: !0,
									src_webmail: !0
								}
							}, forbidden: {"*": {}}
						},
						storage: {allowed: {pa_vid: !0, pa_privacy: !0, atuserid: !0}, forbidden: {}},
						events: {
							allowed: {
								"click.exit": !0,
								"click.navigation": !0,
								"click.download": !0,
								"click.action": !0,
								"page.display": !0
							}, forbidden: {}
						}
					},
					"*": {
						properties: {
							allowed: {
								"*": {
									connection_type: !0,
									device_timestamp_utc: !0,
									visitor_privacy_consent: !0,
									visitor_privacy_mode: !0,
									"ch_ua*": !0
								}
							}, forbidden: {"*": {}}
						}, storage: {allowed: {}, forbidden: {}}, events: {allowed: {}, forbidden: {}}
					}
				}
			}
		};

		
		
		
		var I = 
		var L, R = {
			post: 		}, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", V = {
			encodeURIComponent: window.encodeURIComponent, utf8: {
				encode:  decode: 			}, base64: {
				encode:  decode: 			}
		}, K = (L = window.crypto || window.msCrypto, {
			v4: 		});

		
		
		function q(r, e, t) {
			this.properties = I(r._properties), this.setProperty =  this.getConfiguration = t.getConfiguration, this.setConfiguration = t.setConfiguration, this.options = e.options || {}, this.visitorId = null, this.build = {
				url: "",
				data: {}
			}, this.events = e.events || []
		}

		
		
		function W(e, t, n, r, o) {
			var i, a = function (e, t, n) {
				for (var r = {}, o = new RegExp("[&#?]{1}([^&=#?]*)=([^&#]*)?", "g"), i = o.exec(t); null !== i;) 0 === i[1].indexOf(e) && (r[n + i[1].substring(e.length)] = i[2]), i = o.exec(t);
				return r
			}(r, n, o), s = !1;
			for (i in a) Object.prototype.hasOwnProperty.call(a, i) && !t.properties[i] && t.setProperty(i, a[i], {persistent: !0}), s = !0;
			return s
		}

		
		var y = 

		
		
		
		function s() {
			for (var e = (new Date).getTime().toString(36); e.length < 16;) e += Math.round(2147483647 * Math.random()).toString(36);
			return e.substr(0, 16)
		}

		function X() {
			var t = {};
			return {
				add:  values: function () {
					return Object.keys(t)
				}
			}
		}

		
		
		function Q(e) {
			return pe(e, 
		}

		
		
		
		function re(o, i) {
			var e;
			return void 0 === i && (i = Oe), o ? (e = {}, o.products && (Array.isArray(o.products) ? e.products = o.products.reduce( []) : i("consent.products: should be an array")), o.defaultPreset && (e.defaultPreset = Object.keys(o.defaultPreset).reduce( {})), e) : null
		}

		
		
		
		
		
		
		function le(e) {
			return Array.isArray(e) ? e : e.split(",").map(
		}

		
		var r, fe, o = t("anon"), de = function (e) {
				return null != e
			}, pe = function (n, t) {
				return n && Object.keys(n).filter(.reduce( {})
			}, ve = function (o, i) {
				return "object" !== c(o) ? o : Object.keys(o).reduce( {})
			}, ge =  me =  he =  ye =  i = y(y({}, t(null)), {
				init:  refresh: Q, set: 			}), _e = "pdl", f =  be = y(y({}, e()), {
				init:  refresh: ee, update: ee, set: function (e, t, n) {
					return n({protect: !0}), e
				}
			}), a = y(y({}, t(null, "_pcid")), {
				init:  update:  set: 			}), u = ["PA", "DMP", "COMPOSER", "ID", "VX", "ESP", "Social Flow", "DL"].map(, we = u.reduce( {}), ke = ["opt-in", "opt-out", "essential"], Ce = ["include", "exclude", "obfuscate"],
			Pe =  Oe =  Ae =  xe = function (e, i) {
				void 0 === i && (i = Oe);
				var t = e.source, e = e.patches || [];
				return Ae(t) || (i(Pe("source", ke)), t = "opt-in"), Array.isArray(e) || (i('"patches" should be an array'), e = []), {
					source: t,
					patches: e = e.reduce(function (e, t, n) {
						var r, o;
						return "object" !== c(t) || Array.isArray(t) ? i("patch[".concat(n, "]: should be type of {action, item, with?}")) : (r = t.action, o = t.item, Ce.includes(r) ? o && "object" === c(o) && o.key && o.type ? e.push(t) : i("patch[".concat(n, ']: "item" should be type of {key, type}')) : i("patch[".concat(n, "]: ") + Pe("action", Ce))), e
					}, [])
				}
			}, Se = G(re), Ie = function (o, i) {
				return void 0 === i && (i = Oe), Object.keys(o || {}).reduce( {})
			}, De = ["opt-in", "essential", "opt-out"].reduce( {}),
			Me = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 2, 2, 2, 2, 0], [1, 2, 2, 2, 2, 2, 2, 1], [0, 2, 0, 2, 2, 2, 0, 0], [1, 2, 2, 2, 2, 2, 1, 1], [2, 0, 0, 2, 2, 2, 2, 0], [2, 0, 2, 2, 2, 2, 2, 0], [2, 2, 2, 2, 2, 2, 0, 2], [2, 2, 0, 0, 0, 0, 2, 0], [2, 2, 1, 2, 1, 2, 2, 1], [2, 2, 1, 1, 2, 2, 2, 1]],
			je = Me.map(, Ne = Z(function () {
				var e;
				return null == (e = Se(f().consent)) ? void 0 : e.defaultPreset
			}), Ee = (r = je, function () {
				return Ne(function (n) {
					r = z([], je, !0), n && (r[0] = {
						id: 0,
						preset: y({}, r[0].preset)
					}, Object.keys(n).forEach()
				}), r
			}), Te = Z(, Ue = (fe = u, , d = y(y({}, t(null, "_pprv")), {
				init:  set: function (e, t) {
					var n, o, r;
					return se() ? null != e && (n = "number" == typeof e ? (null == (n = Ee()[e]) ? void 0 : n.preset) || null : Array.isArray(e) ? (r = null, e.forEach(, r && oe(r)) : (o = e, Object.keys(o).reduce( null))) ? ue(y(y({}, t), n)) : t : null
				}, get: G(function (o) {
					return o && Object.keys(o).reduce( {})
				}, ae)
			}), Be = y(y({}, e()), {init: Ee, set: Ee}), p = y(y({}, e()), {init: Ue, set: Ue}), He = y(y({}, e(null)), {
				readonly: !0, set: function () {
					return null
				}, get: ae
			}), Le = {
				id: n,
				type: n,
				zone: n,
				createdAt: ce,
				modifiedAt: ce,
				authors: le,
				section: n,
				tags: le,
				keywords: le,
				title: n,
				description: n,
				isNative: ge
			}, Re = function (e) {
				return "first" === e
			}, Ve = 

		
		
		function Fe(e) {
			var t = e.replace(/DAY/g, "(0?[1-9]|[12][0-9]|3[01])").replace(/MONTHLONG/g, "(" + Object.keys(ze).join("|") + ")").replace(/MONTH/g, "(0?[1-9]|1[012])").replace(/YEAR2/g, "([0-9][0-9])").replace(/YEAR/g, "(197[1-9]|19[8-9][0-9]|20[0-9][0-9])").replace(/TIME/g, "([0-9][0-9]):([0-9][0-9]):([0-9][0-9])(?:\\.[0-9][0-9][0-9])?([zZ]|[+-][0-9][0-9](?::?[0-9][0-9])?)?"),
				e = e.replace(/.*?([YMD])(EAR|ONTH|AY).*?/g, "$1").substring(0, 3);
			return [new RegExp(t), e]
		}

		
		g = null;
		var g, qe = {
				refresh:  find: 			}, Je =  _ = function (e, t, n) {
				var r, o = Le[t];
				!Boolean(e[t]) && o && (o = (r = ("function" == typeof n ? n : function () {
					return (Array.isArray(n) ? Je : Ye)(n)
				})()) && o(r)) && (e[t] = o)
			}, We =  $e =  ze = {
				januar: "01",
				january: "01",
				jan: "01",
				februar: "02",
				february: "02",
				feb: "02",
				mars: "03",
				march: "03",
				mar: "03",
				april: "04",
				apr: "04",
				mai: "05",
				may: "05",
				juni: "06",
				june: "06",
				jun: "06",
				juli: "07",
				july: "07",
				jul: "07",
				august: "08",
				aug: "08",
				september: "09",
				sept: "09",
				sep: "09",
				oktober: "10",
				october: "10",
				okt: "10",
				oct: "10",
				november: "11",
				nov: "11",
				desember: "12",
				december: "12",
				dec: "12",
				des: "12"
			},
			Xe = ["\\bDAY\\.MONTH\\.YEAR\\b", "\\bDAY\\.?\\s{0,3}MONTHLONG\\.?\\s{1,3}YEAR\\b", "\\bYEAR-MONTH-DAY(?:[tT]|\\b)", "\\bMONTHLONG\\.?\\s{0,3}DAY(?:st|nd|rd|th)?,?\\s{1,3}YEAR\\b", "\\bDAY(?:st|nd|rd|th|\\.)?\\s{0,3}MONTHLONG\\.?,?\\s{1,3}YEAR\\b", "\\bYEAR[/年]MONTH[/月]DAY(?=\\b|日)", "\\bDAY\\.MONTH\\.YEAR2\\b", "\\bDAY/MONTH/YEAR\\b"].map(Fe),
			Ge = Fe("YEAR-MONTH-DAY[tT]TIME")[0l
		}

		var)
		)
	)
	)
	)
	t
		}

		function ot(e) {
			return 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), vt(e)
		}

		var it, at = [tt({
				attr: ["name", "property", "itemprop"],
				names: ["cxenseparse:publishtime", "cxenseparse:recs:publishtime", "article:published_time", "date", "dc.date", "dc.date.created", "dc.terms.issued", "pub_date", "article.published", "datepublished", "og:article:published_time"]
			}), tt({
				selector: "time.published[datetime],time[pubdate][datetime]", getContent: function (e) {
					return e.getAttribute("datetime")
				}
			}), tt({
				selector: "time[datetime]", getContent: function (e) {
					return e.getAttribute("datetime")
				}
			})], st = {selector: 'meta[property="article:modified_time"]'}, ut = [{
				attr: ["property", "name"],
				names: ["cxenseparse:author", "og:article:author", "article:author", "og:book:author", "book:author", "author", "dc.creator", "article.author"],
				take: "all",
				getCon				}
			}], ct = [b({names: ["cxenseparse:keywords"]}), b({
				attr: ["property", "name"],
				names: ["news_keywords"]
			}), b({names: ["keywords"]})], lt = [b({names: ["cxenseparse:description"]}), b({
				attr: ["property"],
				names: ["og:description"]
			}), b({names: ["description"]})],
			ft = [{names: ["cxenseparse:title"]}, tt({attr: ["property", "name"], names: ["og:title"]})],
			dt = y(y({}, e(null)), {
				init: rt,				}
			}), be = {
				pageViewId: be,
				browserId: a,
				users: i,
				userStatus: o,
				siteId: t(),
				consent: d,
				consentPresets: Be,
				products: p,
				consentModifiers: He,
				content: dt
			}, pt = function (e) {
				function t(e) {
					e && r.setDate(r.getDate() + e)
				}

				var n, r = new Date;
				return e instanceof Date ? r = e : "number" == typeof e ? t(e) : (n = e.days, e = e.minutes, t(n), e && r.setMinutes(r.getMinutes() + e)), r
			},
			}, w = (it = "_cookie_test", {
				set: mt, get: yt, getNames: function () {
					var t = [];
					return ht(function (e) {
						t.push(e)
					}), t
				}, remove: _t, getTopLevelDo				}, __private__: {_generateCookieString: gt}
			});

		function gt(e, t, n) {
			var r = (n = void 0 === n ? {} : n).path, o = n.domain, i = n.expires, a = n.secure, s = n.samesite;
			return ((n = n.raw) ? e : encodeURIComponent(e)) + "=" + (n ? t : encodeURIComponent(t)) + (i ? "; expires=".concat(pt(i).toUTCString()) : "") + (r ? "; path=".concat(r) : "") + (o ? "; domain=".concat(o) : "") + (a ? "; secure" : "") + (s ? "boolean" == typeof s ? "; sameSite" : "; sameSite=".concat(s) : "")
	)
		}

		function ht(e) {
			for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
				var r = t[n].split("=");
				if (e(vt(r[0]), r[1] || "")) return
			}
	o
		}

		function _t(e, t) {
			mt(e, "", Object.assign({}, t, {expires: -1}))
	}
		}

		function wt(e)
			
			}

			var o = e.cookieName, t = e.consent, i = w.get(o), a = !!i, s = At(i, e), u = s.fixedMode, c = a, l = null,
				f = y({}, Ot), d = null				}				}				};
			return s.onC
			}), {
				get cookieName() {
					return o
				}, get cookieE				}, get consent() {
					return t
				},				},				}, remove: g, setCookieOpt				}, setCookieEna				}, lazyAc				}, setFixedMode: function (e) {
					s.setFixedMode(e)
				}
			}
		}

		var k, kt, Ct, C, P, Pt, Ot = {
			path: "/",
			expires: 395,
			samesite: "lax",
			secure: "https:" === window.location.protocol,
			domain: w.getTopLevelDomain(["pantheon.io", "go-vip.net", "go-vip.co"])
		}, At = function (e, t) {
			var n = t.cookieName, r = t.encode, o = t.decode, i = !1, a = null, s = null,
				t = null == (t = o(e || "")) ? void 0 : t._t;
			if (t) try {
				a = new Date(parseInt(String(t), 36)), i = !!a
			} catch (e) {
			
			}

			return {
				get fixedMode() {
					return i
				}, onCh				}, setFixedMode: function (e) {
					var t = i;
					(i = e) !== t && (a = null) != s && s(i)
				}, bindOpt				}, de				}, encode: function (e, t) {
					return i && (a = u(t)) && (e._t = a.getTime().toString(36)), r(e)
				}
			}
		}, a = {exports: {}]
		}

		i = a, k = String.fromCharCode, kt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", Ct = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", C = {}, o = P = {
			compressToBa
			}, decompressFromBa
			}, compressToU
			}, decompressFromU
			}, compressToUint8A
			}, decompressFromUint8A
			}, compressToEncodedURICompo
			}, decompressFromEncodedURICompo
			}, comp
			}, _comp
			}, decomp
			}, _decomp
			}
		}, null != i && (i.exports = o), (d = Pt = Pt || {}).URI = "URI", d.COM = "COM", d.B64 = "B64";

		function St(e, t) {
			var n = Xt();
			try {
				Object.defineProperty(window, Gt, {
					configurable: !1, set: function (e) {
						var t = e();
						t === Zt ? e(n) : t === Qt && (n = Xt())
					}
				})
			} catch (e) {
			}
			return window[
			}, n(e, t)
		}

		function It(t) {
			return Object.keys(t).filter(en).map(function (e) {
				return tn(e, t[e])
			})
	}
	n
	l
		}

		function Nt(o) {
			var e, i = y(y({}, sn), Ie(null == (e = f()) ? void 0 : e.migration));
			Object.keys(i).forEach(function (e) {
				var t = o.params.get(e), n = i[e] === sn[e], r = null == (r = i[e]) ? void 0 : r.source,
					r = r && (null == (r = an[r]) ? void 0 : r[e]) || [];
				t && r.length && ((r = on(r)) && (t.readonly = !1, o.updateValues(e, r, !0), t.readonly = !n))
			})
		}

		function Et() {
			function n(e) {
				return ve(e, {
					path: String, domain: String, secure: ge, exp				}, same				}
				})
			}

			var r = y({}, window[_e]);
			return null != r && r.cookies && (r.cookies = Object.keys(r.cookies).r
			}, {})), null != r && r.cookieDefault && (r.cookieDefault = n(r.cookieDefault)), r
		}

		function Tt(n)
			}

			function t(e) {
				var t, r = ln(), o = null == (t = n.getConnection()) ? void 0 : t.registeredCookiesWrapper;
				o && (t = Object.keys(o				}), i(t, e).fo				}))
			}

			var r = Object.keys($t).r
			}, {}), i = rn({items: r, type: "cookie", getConsent: e}), o = e();
			n.addChangeListener("cons
			}), t(o)
		}

		var Ut, Bt, O, Ht, Lt, A, Rt, x, S, D, Vt, M, j, Kt, Yt, Ft, qt, N, Jt = {
				URI: {
					prefix: "{u}",
					compress: a.exports.compressToEncodedURIComponent,
					decompress: a.exports.decompressFromEncodedURIComponent
				},
				COM: {prefix: "{c}", compress: a.exports.compress, decompress: a.exports.decompress},
				B64: {prefix: "{b}", compress: a.exports.compressToBase64, decompress: a.exports.decompressFromBase64}
			}, Wt = Object.keys(Jt).r
			}, {}), Be = {
				cookieName: "_pctx", consent: "mandatory", en				}, decode: function (e) {
							}(e || "");
					return "object" !== c(e) ? null : e
				}
			}, $t = {
				_pprv: bt("_pprv", "mandatory", !!(null == (p = null == (p = f().cookies) ? void 0 : p._pprv) || !p.jsonOnly)),
				_pcid: bt("_pcid", "essential"),
				_pctx: Be
			}, He = (Ut = $t, Object.keys(Ut).r
			}, {})), zt = {}, Xt = function () {
				function r(e, t) {
					var n, r, o, i, a = {}, s = {}, u = (Object.keys(t).fo				}), d || f), c = y(y({}, d), s);
					return (n = c) === (r = u) || n && r && (o = Object.keys(n), i = Object.keys(r), o.length === i.length && !o				})) || (l.set(c, u), d = c, v.fo				})), 0 < Object.keys(a).length ? a : null
				}

				function o(r, o, i) {
					void 0 === i && (i = !1);
					var a = [];
					return Object.keys(o).fo				}), 0 < a.length ? a : null
				}

				a = null;
				var a, l = {
					registerConfig: function (e) {
						return (a = {
							fields: y(y({}, e.fields), a && a.fields),
							cookieByName: y(y({}, e.cookieByName), a && a.cookieByName)
						}).cookieByName
					}, get registeredCookiesW				}, get: function () {
						var t = {};
						return a && Object.keys(a.cookieByName).forEach(function (e) {
							t = y(y({}, t), null == a ? void 0 : a.cookieByName[e].get())
						}), t
					}, set: function (r, o) {
						void 0 === o && (o = null);
						var i = {};
						Object.keys(r).forEach(function (e) {
							var t = r[e], n = null == a ? void 0 : a.fields[e];
							n && (i[n] || (i[n] = {
								wrapper: null == a ? void 0 : a.cookieByName[n],
								wrapperData: {},
								needUpdate: !1
							}), i[n].wrapperData[e] = t, o && (i[n].needUpdate || t === o[e]) || (i[n].needUpdate = !0))
						}), Object.keys(i).forEach(function (e) {
							var e = i[e], t = e.wrapper, n = e.wrapperData;
							e.needUpdate && t.set(n)
						})
					}
				}, f = {}, d = null, i = new Map, p = new Map, v = [];
				return function (e, t) {
					var n = s();
					return i.set(n, e), t && l.registerConfig(t), f = y(y({}, l.get()), f), {
						getInitCookieData: function () {
							return f
						}, getCached				}, setProtectionData: function (e) {
							return o(n, e)
						}, setProtectionDataUn				}, updateData: function (e) {
							return r(0, e)
						}, onUpdate				}, termi				}, setCookieOptions: function () {
							return null
						}, setCookieEna				}, get registeredCookiesWrapper() {
							return l.registeredCookiesWrapper
						}
					}
				}
			}, Gt = "__pctx_connection__", Zt = "uvm42pas28m", Qt = "mrlqf5trgho", en = function (e) {
				return e.includes("*")
			},
			},
			}, rn = function (c) {
				function l(e) {
					return t[e] || nn(e, n) || "optional"
				}

				var t = Object.assign({}, c.items), n = It(t);
				return function (e, t) {
					var o, i, n, r = f().requireConsent, a = !Array.isArray(e), s = a ? [e] : e,
						e = (n = t || c.getConsent()) ? "custom" === n.mode ? (o = function (e, t, n) {
							t = t && xe(t, n);
							if (!t) return null;
							for (var r = [], o = {}, i = 0, a = t.patches; i < a.length; i++) {
								var s = a[i], u = s.action, c = s.with, s = s.item;
								s.type === e && (o[s.key] = u = {
									action: u,
									data: void 0 === c ? null : c
								}, en(s.key) && r.push(tn(s.key, u)))
							}
							return {
								source: t.source, getModifier: function (e) {
									return o[e] || nn(e, r)
								}
							}
						}(c.type, n.modifier, c.log)) ? (i = o.source, 				})) : u() : s.map(function (e) {
							return {name: e, allowed: Dt(n.mode, l(e))}
						}) : u();
				}

					return a ? e[0] : e
				}
			}, dt = Object.freeze({
				__proto__: null,
				createCheckConsentWrapper: rn,
				createMask: tn,
				getByMask: nn,
				isMask: en,
				itemsToMask: It
			}), on = (Bt = {
				pa				}, atus				}

			}), i = [{ls: "_cX_P"}, "cX_P"], an = {PA: {browserId: z(["pa_vid", "atuserid"], i, !0)}, DMP: {browserId: i}},
			sn = {browserId: {source: "DMP"}}, un = "@@Data-layer/update_value", cn = "@@Data-layer/refresh_value",
		
			}, E = 
			}, Lt = O = be, o = o = He, Rt = {
				fields: Object.keys(Lt).r				}, {}), cookieByName: o
			}, x = St("data-layer", Rt), S = !1, D = new Map, Vt = new Set, M = new Map
			},
			},
			}, Ft = function () {
				function t(r) {
					return Object.keys(o).r				}, {})
				}

				var o = {};
				return {
								}, call: function () {
						var e;
						e = t("protect"), 0 < Object.keys(e).length && j().setProtectionData(e), e = t("protectUnsafe"), 0 < Object.keys(e).length && j().setProtectionDataUnsafe(e)
					}
				}
			}, qt = function (o, i) {
				return Object.keys(o).r				}, {})
			}, N = function (e, t, n) {
				void 0 === n && (n = !1);
				var r, i = e, a = X(), s = ("string" == typeof e && ((r = {})[e] = t, i = r), Ft()), u = Ft(),
					i = Object.keys(i).r				}, {}), e = (Yt(a.values()), s.call(), j().updateData(i));
				return e && n && (t = Object.keys(e).r				}, {}), j().setProtectionDataUnsafe(t), j().updateData(i)), u.call(), e && qt(e)
			}, {
				init: function (e) {
					var a, s, o, i, u, c;
					void 0 === e && (e = {}), S || (x = x || St("data-layer", Rt), a = y(y({}, e), Et()), s = a.cookieDefault, Kt(function (i) {
						Object.keys(i).fo				})
					}), S = !0, Object.keys(O).fo				}), o = !1, i = j().getInitCookieData(), u = j().getCachedData(), c = Ft(), e = Object.keys(O).r				}, {}), A = e, o && j().updateData(e), c.call(), j().onUpdateData(dn), null != Ht && Ht(fn()))
				}, set: function (e, t) {
					return N(e, t, !1)
				}, get: pn, up				}, ref				}, pro				}, addChangeListener: mn, removeChangeList				}, terminate: function () {
					null != x && x.terminate(), D.clear(), Vt.clear(), x = null, S = !1
				}, setUn				}, protectUn				}, updateUn				}, setCookieEnabled: function (r) {
					Kt(function (n) {
						var e = Object.keys(r);
						e.length ? e.fo				}) : Object.keys(n).forEach(function (e) {
							n[e].setCookieEnabled(r)
						})
					})
				}, updateMigra				}, get cookieEnabled() {
					return e = null, Kt(function (n) {
						e = Object.keys(n).r				}, {})
					}), e;
					var e
				}, get isReady() {
					return S
				}, utils: {validateModifier: xe, validateConsent: re, checkConsent: dt}
			}}
		}

		function dn(r) {
			var o = !1;
			Object.keys(r).forEach(function (e) {
				var t, n = M.get(e);
				n && (t = r[e], A[e] !== t && (A[e] = t, o = !0, null != (e = D.get(e)) && e.fo				})))
			}), o && Vt.fo
			})
		}

		function pn(e) {
			var n = X(), t = "string" == typeof e,
				r = void 0 === e ? A : t ? ((r = {})[e] = A[e], r) : e.r				}, {});
			return r = 
			}), Yt(n.values()), t ? r[e] : r
		}

		function vn(e, t) {
			void 0 === t && (t = !1);
			var n = e;
			return Array.isArray(e) || (n = [e]), N(n.r
			}, {}), void 0, t)
		}

		function gn(e, t, n) {
			var r, n = (n = void 0 === n ? !1 : n) ? j().setProtectionDataUnsafe : j().setProtectionData, o = e;
			return "string" == typeof e && ((r = {})[e] = t, o = r), n(o)
		}

		function mn(e, t) {
			var n;
			"string" == typeof e ? null != (n = D.get(e)) && n.add(t) : Vt.add(e)
		}

		function hn(t, o, n) {
			o.setProperty("event_collection_platform", "js"), o.setProperty("event_collection_version", o.getConfiguration("version"));
			var e, r = new Date,
				i = (o.setProperty("device_timestamp_utc", r.getTime()), o.setProperty("device_local_hour", r.getTime()), o.setProperty("device_hour", r.getHours()), E.get("content"));
			for (e in i) Object.prototype.hasOwnProperty.call(i, e) && ("createdAt" === e || "tags" === e ? o.setProperty({
				createdAt: "content_publication_date",
				tags: "tags_array"
			}[e], i[e]) : o.setProperty("content_".concat(e).replace(/[\w]([A-Z
			}).toLowerCase(), i[e]));
			o.setProperty("has_access", E.get("userStatus")), o.setProperty("pageview_id", E.get("pageViewId")), o.setProperty("device_screen_width", window.screen.width), o.setProperty("device_screen_height", window.screen.height), o.setProperty("device_display_width", window.innerWidth || document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : ""), o.setProperty("device_display_height", window.innerHeight || document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : "");
	
			}(window.navigator ? window.navigator.language || window.navigator.userLanguage : "", ["-", "_"]), o.setProperty("browser_language", r[0]), o.setProperty("browser_language_local", r[1]), o.setProperty("previous_url", document.referrer || ""), document.title && o.setProperty("page_title_html", document.title), r = "true" === o.getConfiguration("addEventURL").toString();
			!r && "withoutQS" !== o.getConfiguration("addEventURL") || o.setProperty("page_url", r ? window.location.href.split("#")[0] : "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname));
			try {
				window.navigator.userAgentData.getHighEntropyValues(["architecture", "bitness", "brands", "mobile", "model", "platform", "platformVersion", "uaFullVersion", "fullVersionList"]).then(function (e) {				}

					var n = [{metric: "brands", property: "ch_ua"}, {
						metric: "architecture",
						property: "ch_ua_arch"
					}, {metric: "bitness", property: "ch_ua_bitness"}, {
						metric: "fullVersionList",
						property: "ch_ua_full_version_list"
					}, {metric: "mobile", property: "ch_ua_mobile"}, {
						metric: "model",
						property: "ch_ua_model"
					}, {metric: "platform", property: "ch_ua_platform"}, {
						metric: "platformVersion",
						property: "ch_ua_platform_version"
					}, {metric: "uaFullVersion", property: "ch_ua_full_version"}];
					if (t(e)) for (var r = 0; r < n.length; r++) t(n[r].metric) && o.setProperty(n[r].property, e[n[r].metric])
				}).fi				})
			} catch (e) {
				h(t, o, n)
			}
		}

		function yn(t, n, r) {
			function e(e) {
				h(t, n, r, e)
			}

			n.options && n.options.onBeforeBuild ? n.options.onBeforeBuild(t, n, e) : e()
	)
	)
		}

		function wn(e, t, n) {
			var r, o = [];
			for (r in t.properties) if (Object.prototype.hasOwnProperty.call(t.properties, r)) {
				var i, a = !1, s = m(t.events);
				try {
					for (s.s(); !(i = s.n()).done;) {
						var u = i.value, c = !1, l = t.properties[r].options.events;
						if (l) if (-1 < l.indexOf(u.name)) c = !0; else {
							var f, d = m(l);
							try {
								for (d.s(); !(f = d.n()).done;) {
									var p = f.value;
									if ("*" === p.charAt(p.length - 1) && 0 === u.name.indexOf(p.substring(0, p.length - 1))) {
										c = !0;
										break
									}
								}
							} catch (e) {
								d.e(e)
							} finally {
								d.f()
							}
						} else c = !0;
						c && (u.data[r] = t.properties[r].value, a = !0)
					}
				} catch (e) {
					s.e(e)
				} finally {
					s.f()
				}
				a && !t.properties[r].options.persistent && o.push(r)
			}
			for (var v = 0, g = o; v < g.length; v++) delete e._properties[g[v]];
			h(e, t, n)
	)
	)
		}

		function Pn(n, r, o) {
			n._storage.getItem(r.getConfiguration("storageVisitor"), function (e) {
				var t;
				r.getConfiguration("isVisitorClientSide") && (r.visitorId = r.getConfiguration("visitorId") || E.get("browserId"), r.getConfiguration("isLegacyPrivacy") || "opt-out" !== n.consent.getMode() || (r.visitorId = "OPT-OUT"), t = "OPT-OUT" !== r.visitorId && "no-consent" !== r.visitorId && "no-storage" !== r.visitorId && r.visitorId !== r.getConfiguration("visitorId"), r.visitorId !== E.get("browserId") && t && (r.visitorId = r.visitorId + "-NO")), h(n, r, o)
			})
		}

		var On,}
		}, xn = Object.defineProperty, Sn = {}, In = {
			cookie: function () {
				return En
			}, localStorage: function () {
				return Yn
			}, sessionSto
			}
		};
		for (On in In) xn(Sn, On, {get: In[On], enumerable: !0})
		}

		var Mn,r
		},)
		}, En = (Mn = "_cookie_test", {
			set: Un, get: Hn, getN
			}, remove: Ln, getTopLevelDomain: function (e) {
				void 0 === e && (e = []);
				for (var t = window.location.hostname.split("."), n = (new Date).getTime().toString(36) + Math.round(2147483647 * Math.random()).toString(36), r = 0; r < t.length; r++) try {
					var o = t.slice(-(r + 1)).join(".");
					if (!e.includes(o)) {
						Un(Mn, n, {expires: 1, path: "/", domain: o});
						var i = Hn(Mn) === n;
						if (Ln(Mn, {path: "/", domain: o}), i) return o
					}
				} catch (e) {
				}
			}, __private__: {_generateCookieString: Tn}
		})
		}

		function Un(e, t, n, r) {
			void 0 !== r && encodeURI(t).split(/%(?:u[\dA-F]{2})?[\dA-F]{2}|./).length - 1 > r || (document.cookie = Tn(e, t, n))
	}
		}

		function Hn(n) {
			var r = null, o = {};
			return Bn(function (e, t) {
				if (n && e === n) return r = Dn(t), 1;
				o[e] = Dn(t)
			}), n ? r : o
	)
		}

		Rn = "_ls_ttl", Vn = function () {
			var e = window.localStorage.getItem(Rn);
			if (e) try {
				return JSON.parse(e)
			} catch (e) {
			}
			return {}
		},)
		}, Fn();
		var Rn, Vn, Kn, Yn = {
			get: function (e) {
				return Fn(), null != (e = window.localStorage.getItem(e)) ? e : null
			}, set: function (e, t, n) {
				var r, o;
				r = e, n = (n = void 0 === n ? {} : n).expires, o = Vn() || {}, (void 0 === n ? (delete o[r], Kn(o), !0) : (n = jn(n).getTime()) > Date.now() && (o[r] = n.toString(36), Kn(o), !0)) && window.localStorage.setItem(e, t)
			}, getNames: function () {
				return Object.keys(window.localStorage)
			}, remove: function (e) {
				window.localStorage.removeItem(e)
			}, expires: Fn
		};

		function Fn() {
			var n = Vn() || {}, r = {};
			Object.keys(n).forEach(function (e) {
				var t = n[e] ? parseInt(n[e], 36) : null;
				!(t = t) || t > Date.now() ? r[e] = n[e] : window.localStorage.removeItem(e)
			}), JSON.stringify(n) !== JSON.stringify(r) && Kn(r)
		}

		function qn(e, t) {
			return [new RegExp("^" + e.replace(/\*/g, ".*") + "$"), t]
		}

		function Jn(o, e, t) {
			function n(e) {
				null != (e = i(ir(t.items, o.getNames), e)) && e.fo				})
			}

			var r = zn(t), i = or({items: t.items, type: e, getConsent: r});
			return e = void 0 === t.checkConsentOnInit && t.enableAutoRemove, t.enableAutoRemove && Xn(t, n), e && n(r()), Object.assign({}, o, {
				set: function (e, t, n) {
					var r = i(e);
					null != r && r.allowed && o.set.apply(null, n ? [e, t, n] : [e, t])
				}, check: i
			})
		}

		function Wn(e, t) {
			return {check: or({items: t.items, type: e, getConsent: zn(t)})}
		}

		var $n = {
		
			},
			}, getN
			}, re
			}
		},}
		},}
		},)
		}, Zn = function (t) {
			return Object.keys(t).filter(Gn
			})
		}, Qn = function (e, t) {
			for (var n = 0; n < t.length; n++) if (t[n][0].test(e)) return t[n][1];
			return null
		}, er = function (e, t) {
			if (!t) return null;
			for (var n = [], r = {}, o = 0; o < t.patches.length; o++) {
				var i = t.patches[o], a = i.action, s = i.with, i = i.item;
				i.type === e && (r[i.key] = a = {
					action: a,
					data: void 0 === s ? null : s
				}, Gn(i.key) && n.push(qn(i.key, a)))
			}
			return {
				source: t.source, getModi				}
			}
		}, tr = function (e, t) {
			switch (e) {
				case"opt-in":
					return !0;
				case"essential":
					return "essential" === t || "mandatory" === t;
				case"opt-out":
					return "mandatory" === t;
				default:
					return !0
			}
		},}
		},l
		}, or = function (u)
			}

			var t = Object.assign({}, u.items), n = Zn(t);
			return function (e, t) {
				var r, o, n, i = !Array.isArray(e), a = i ? [e] : e,
					e = (n = t || u.getConsent()) ? "custom" === n.mode ? (r = er(u.type, n.modifier)) ? (o = r.source, a.map(function (e) {
						var t = r.getModifier(e), n = rr(null == t ? void 0 : t.action, null == t ? void 0 : t.data),
							t = {name: e, allowed: null != t && t.action ? nr(t.action) : tr(o, c(e))};
						return null !== n && (t.data = n), t
					})) : s() : 				}) : s();

				function s() {
					return 				})
				}

				return i ? e[0] : e
			}
		}, ir = function (e, t) {
			var n = Zn(e), e = Object.keys(e);
			return n.length ? t().f
			}).concat(e.f
			})) : e
		}, ar = {
			createLocalStorage: function (e) {
				return Jn(Yn, "localStorage", e)
			}, createProperty: function (e) {
				return Wn("property", e)
			}, createCookie: function (t) {
				function e(e) {
					null != (e = i(ir(t.items, En.getNames), e)) && e.fo				})
				}

				var n, r = zn(t), o = {}, i = or({items: t.items, type: "cookie", getConsent: r});
				return n = !(void 0 !== t.checkConsentOnInit || !t.enableAutoRemove), t.enableAutoRemove && (o = t.enableAutoRemove, Xn(t, e)), n && e(r()), Object.assign({}, En, {
					check: i,
								}
				})
			}, createSessionSto
			}, createE
			}
		}, sr = {"*": "optional", pa_vid: "mandatory", pa_privacy: "mandatory", atuserid: "essential"}, ur = {
			"click.exit": "mandatory",
			"click.navigation": "mandatory",
			"click.download": "mandatory",
			"click.action": "mandatory",
			"page.display": "mandatory"
		}, cr = {
			"*": "optional",
			connection_type: "mandatory",
			device_timestamp_utc: "mandatory",
			visitor_privacy_consent: "mandatory",
			visitor_privacy_mode: "mandatory",
			ch_ua: "mandatory",
			ch_ua_arch: "mandatory",
			ch_ua_bitness: "mandatory",
			ch_ua_full_version: "mandatory",
			ch_ua_full_version_list: "mandatory",
			ch_ua_mobile: "mandatory",
			ch_ua_model: "mandatory",
			ch_ua_platform: "mandatory",
			ch_ua_platform_version: "mandatory",
			app_crash: "essential",
			app_crash_class: "essential",
			app_crash_screen: "essential",
			app_version: "essential",
			browser: "essential",
			browser_cookie_acceptance: "essential",
			browser_group: "essential",
			browser_version: "essential",
			click: "essential",
			click_chapter1: "essential",
			click_chapter2: "essential",
			click_chapter3: "essential",
			click_full_name: "essential",
			connection_monitor: "essential",
			connection_organisation: "essential",
			date: "essential",
			date_day: "essential",
			date_daynumber: "essential",
			date_month: "essential",
			date_monthnumber: "essential",
			date_week: "essential",
			date_year: "essential",
			date_yearofweek: "essential",
			device_brand: "essential",
			device_display_height: "essential",
			device_display_width: "essential",
			device_name: "essential",
			device_name_tech: "essential",
			device_screen_diagonal: "essential",
			device_screen_height: "essential",
			device_screen_width: "essential",
			device_type: "essential",
			event_collection_platform: "essential",
			event_collection_version: "essential",
			event_hour: "essential",
			event_id: "essential",
			event_minute: "essential",
			event_position: "essential",
			event_second: "essential",
			event_time: "essential",
			event_time_utc: "essential",
			event_url: "essential",
			event_url_domain: "essential",
			event_url_full: "essential",
			exclusion_cause: "essential",
			exclusion_type: "essential",
			geo_city: "essential",
			geo_continent: "essential",
			geo_country: "essential",
			geo_metro: "essential",
			geo_region: "essential",
			goal_type: "essential",
			hit_time_utc: "essential",
			os: "essential",
			os_group: "essential",
			os_version: "essential",
			os_version_name: "essential",
			page: "essential",
			page_chapter1: "essential",
			page_chapter2: "essential",
			page_chapter3: "essential",
			page_duration: "essential",
			page_full_name: "essential",
			page_position: "essential",
			page_title_html: "essential",
			pageview_id: "essential",
			previous_url: "essential",
			privacy_status: "essential",
			site: "essential",
			site_env: "essential",
			site_id: "essential",
			site_platform: "essential",
			src: "essential",
			src_detail: "essential",
			src_direct_access: "essential",
			src_organic: "essential",
			src_organic_detail: "essential",
			src_portal_domain: "essential",
			src_portal_site: "essential",
			src_portal_site_id: "essential",
			src_portal_url: "essential",
			src_referrer_site_domain: "essential",
			src_referrer_site_url: "essential",
			src_referrer_url: "essential",
			src_se: "essential",
			src_se_category: "essential",
			src_se_country: "essential",
			src_type: "essential",
			src_url: "essential",
			src_url_domain: "essential",
			src_webmail: "essential"
		e
	)
	)
	)
	)
	}
	}
	}
	)
	)
		}

		T.prototype.setPrope)
		}, T.prototype.setPropert)
		}, T.prototype.deletePrope]
		}, T.prototype.sendEv)
		}, T.prototype.sendEve)
		}, T.prototype.getVisiton
		}, T.prototype.setVisito)
		}, T.prototype.setU)
		}, T.prototype.getU)
		}, T.prototype.deleteU)
		}, (T.prototype.PA = T).prototype.refr)
		}, T.prototype.setContentPrope)
		}, T.prototype.setContentPropert)
		};
		d = new T(B), window && !window.pa && (window.pa = d);
		a = d;
		return U.pianoAnalytics = a, Object.defineProperty(U, "__esModule", {value: !0}), U
	}({});
}
