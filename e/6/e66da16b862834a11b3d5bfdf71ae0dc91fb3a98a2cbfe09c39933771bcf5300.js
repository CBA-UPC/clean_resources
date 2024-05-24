/*!
 * Copyright Zendesk, Inc.
 * 
 * By downloading or accessing this software, You agree to the Zendesk Terms of Service (https://www.zendesk.com/company/terms) and Application Developer and API License Agreement (https://www.zendesk.com/company/application-developer-and-api-license-agreement) and acknowledge that such terms govern Your use of and access to the software.
 * 
 */
!window, function () {
  return function (e) {
        var n = {};
    t.m = e;
    t.c = n;
    t.d = 
    t.r = 
    t.t = 
    t.n = 
    t.o = 
    t.p = "../../bin/";
    return t(t.s = 50);
  }([   function (e, t, n) {
                var s = n(1), a = n(4), c = n(2), u = n(46), l = n(21), d = ), f = "https://v2.zopim.com/widget", h = f + "/images", p = u.map([".zopim.com", ".zopim.org", ".zdch.at", ".zd-dev.com", ".bre-zd.com"], l.escape), m = new RegExp("^[a-z][a-z0-9_-]*(\\.[a-z][a-z0-9_-]*)*(" + p.join("|") + ")(:\\d+)?$", "i"), g = /^([a-z][a-z0-9_-]*)(:\d+)?$/i;
    s(a.baseURL, !0) && (a.baseURL = c.secureURL(d.baseURL));
    var _ = {
      ASSETS_URL: f,
      IMAGES_URL: h,
      SOUNDS_URL: "https://v2.zopim.com/widget/sounds",
      FONTS_URL: "https://v2.zopim.com/widget/fonts",
      ASSETS_LEGACY: document.location.protocol + "//cdn.zopim.com/assets",
      BRANDING_URL: "https://www.zopim.com",
      AVATARS: {
        CONCIERGE: h + "/avatar_simple_agent.png",
        AGENT: h + "/avatar_simple_agent.png",
        VISITOR: h + "/avatar_simple_visitor.png",
        DEFAULT: h + "/avatar_simple_visitor.png"
      },
      ACCOUNT_KEY: d.accountKey,
      BRAND_DOMAIN: d.brandDomain,
      COUNTRY_CODE: ),
      AUTH_URL: "https://www.zopim.com/auth/$NAME/$KEY-$MID",
      AUTH_LOGOUT_URL: "https://www.zopim.com/auth/logout/$KEY-$MID",
      AUTH_SERVER_URL: o(),
      IS_POPOUT: window.$zopim_popout,
      POPOUT_WINDOW_PREFIX: "zlivechatpopout_",
      POPOUT_URL: d.rootURL + "/widget/livechat.html",
      CALLBACK_FILE_UPLOAD_PATH: "/client/widget/upload",
      FILE_UPLOAD_PATH: "/client/widget/uploads",
      FILE_UPLOAD_MAX: 20971520,
      RESEND_MSG_TIMEOUT: 5e3,
      FILE_REPLACE_SOURCE: /^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,
      FILE_REPLACE_RESULT: "$1io$2",
      CHAT_LOG_REMEMBER_COUNT: 10,
      getAuthServerURL: o,
      getMediatorHost: r
    };
    e.exports = _;
  },  function (e, t) {
    function n(e) {
      return "function" == typeof e;
    }
    e.exports = n;
  }, function (e, t, n) {
                                                        function g(e) {
      return q.test(e);
    }
                                            function L(e, t, n) {
      return S.AUTH_URL.replace("$NAME", e).replace("$KEY", t).replace("$MID", n);
    }
    var x, A = n(2), I = n(1), R = n(11), C = n(16), S = n(3), D = "-webkit- -moz- -o- -ms- ".split(" "), N = "webkit Moz O ms ".split(" "), P = ["transition", "MozTransition", "OTransition", "WebkitTransition"], M = ["transitionend", "transitionend", "otransitionend", "webkitTransitionEnd"], V = ["animationend", "animationend", "oanimationend", "webkitAnimationEnd"], j = {
      contains: ),
      onTransitionEnd: i(!0, M),
      unTransitionEnd: i(!1, M),
      onAnimationEnd: i(!0, V),
      unAnimationEnd: i(!1, V),
      css_prefixes: D,
      cssom_prefixes: N,
      isStyleSupported: ),
      pick: o,
      shallowExtend: r,
      fullyExtend: s,
      fullyDelete: a,
      computedHeightBoxSizingBug: c,
      getComputedHeight: l,
      hoverFix: d,
      getEffectiveTLD: m,
      descendsObj: f,
      insertObj: p,
      getValueByReference: h,
      isDefaultName: _,
      getKeys: v,
      supportsDataURI: y,
      isIE: ),
      pad: w,
      formatMinutesAsHours: b,
      replaceFileHostname: $,
      getLastLogEntries: E,
      writeNode: k,
      isAgentNick: g,
      refocusActiveElement: T,
      warnBadEmbed: O,
      getAuthLoginUrl: L
    }, U = /^Visitor [0-9]{3,}$/, q = /^agent:[0-9]+/i;
    e.exports = j;
  },    function (e, t, n) {
                        var c = n(1), u = n(7), l = !c(window) && window.JSON || {
      parse: a,
      stringify: r
    }, d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, f = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "\\": "\\\\",
      '"': '\\"'
    }, h = new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))', "g"), p = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"), m = {
      '"': '"',
      "/": "/",
      "\\": "\\",
      b: "\b",
      f: "\f",
      n: "\n",
      r: "\r",
      t: "\t"
    }, g = new String(""), _ = "\\";
    e.exports = l;
  },  function (e, t) {
    function n(e) {
      return "string" == typeof e;
    }
    e.exports = n;
  },   function (e, t, n) {
    function i() {
      var e = this;
      this.arr = [];
      this.validate = y.bind(this.validate, this);
      $.concat(["validateAndThrow", "validateAndLog"]).forEach(;
      return this.validate;
    }
    function o(e) {
      return function (t) {
        if (0 === e.length) return !1;
        for (var n = 0, i = e.length; n < i; n++) {
          if (!(0, e[n])(t)) return !1;
        }
        return new _('Expect "' + t + '" to fulfill at least one condition', t);
      };
    }
    function r(e) {
      return 
    }
    function s(e, t) {
      return function (n) {
        if ("object" != typeof n || !n) return new _('Expect "' + n + '" to be an object', n);
        if (t && t.requiredKeys) for (var i = 0, o = t.requiredKeys.length; i < o; i++) {
          var r = t.requiredKeys[i];
          if (!(r in n)) {
            var s = new _('Expect key "' + r + '" to be defined', n);
            return s.unshiftPath(r);
          }
        }
        for (var a in n) if (Object.prototype.hasOwnProperty.call(n, a)) {
          var c, u = n[a], l = e[a];
          if (l) c = l(u); else {
            if (t && !t.whitelistedKeysOnly) continue;
            c = new _('The key "' + a + '" is not whitelisted', n);
          }
          if (c) return c.unshiftPath(a);
        }
      };
    }
    function a(e) {
      return 
    }
    function c() {
      return 
    }
    function u(e) {
      return function (t) {
        e.lastIndex = 0;
        if (!e.test(t)) return new _('Expect "' + t + '" to match predefined format', t);
      };
    }
    function l(e) {
      return 
    }
    function d(e) {
      return 
    }
    function f() {
      return 
    }
    function h(e) {
      return function (t) {
        var n;
        if (!v(t)) return new _('Expect "' + t + '" to be an Array', t);
        for (var i = 0, o = t.length; i < o; i++) {
          n = e(t[i]);
          if (n) return n.unshiftPath(i);
        }
      };
    }
    function p(e, t) {
      return 
    }
        function g(e) {
      var t = window.console;
      t.error ? t.error(e) : t.log && t.log(e);
    }
    function _(e, t) {
      this.message = e;
      this.actual = t;
      this.paths = void 0;
      this.unshiftPath = function (e) {
        this.paths || (this.paths = []);
        this.paths.unshift(e);
        return this;
      };
    }
    var v = n(7), y = n(9), w = window.Error, b = {
      any: o,
      equal: r,
      obj: s,
      type: a,
      ok: c,
      chain: m,
      regex: u,
      minLength: l,
      maxLength: d,
      array: f,
      each: h,
      predicate: p
    }, $ = Object.keys(b), E = i.prototype;
    $.forEach(function (e) {
      var t = b[e];
      i[e] = E[e] = function () {
        if (!(this instanceof i)) {
          var n = new i();
          return n[e].apply(n, arguments);
        }
        var o = t.apply(null, arguments);
        this.arr.push(o);
        return this.validate;
      };
    });
    E.validate = function (e) {
      for (var t, n, i = 0, o = this.arr.length; i < o; i++) {
        t = this.arr[i];
        n = t(e);
        if (n) return n;
      }
    };
    E.validateAndThrow = function (e, t) {
      var n = this.validate(e);
      t = t ? t + " - " : "";
      if (n) throw new w(t + n.message);
    };
    E.validateAndLog = function (e, t) {
      var n = this.validate(e);
      t = t ? t + " - " : "";
      if (n) {
        g(new w(t + n.message));
        return n;
      }
    };
    e.exports = i;
    _.prototype = Object.create(w.prototype);
    _.prototype.name = "ValidationError";
  },         function (e, t) {
    function n(e, t) {
      c = e.$("connection");
      u = t.$("tmp");
      f = c.$("status$string");
      h = c.$("socket_status$string");
      p = c.$("disconnection_status$string");
      m = c.$("socket_resume_timestamp$int");
      g = c.$("socket_open_timestamp$int");
      _ = c.$("client_reattached_timestamp$int");
      v = e.$("livechat").$("account").$("status$string");
      y = e.$("visitor").$("auth_status$string");
      c.bindValue(r);
    }
        function o() {
      i();
      l = clearTimeout(l);
      c = u = null;
      f = h = p = m = g = _ = v = y = null;
      d = void 0;
    }
    function r(e) {
      e && "resume" == e.socket_status$string && (l = setTimeout(r, 1e3));
      var t = s();
      if (t && t !== d) {
        u.update({
          friendly_connection_status$string: t
        });
        d = t;
      }
    }
    function s() {
      var e = +new Date(), t = f.getValue(), n = h.getValue(), i = p.getValue(), o = m.getValue(), r = g.getValue(), s = _.getValue();
      if ((n || t || i) && "disconnecting" !== i) {
        if ("break" == n) {
          if (w.indexOf(t) > -1) return "closed";
          if ("disconnected" === i) return "closed";
        }
        return (null === n || "reconnect" == n || "resume" == n && e - o >= 1e3) && "reattached" === t && r <= s ? "connected" : "connecting";
      }
    }
    function a() {
      var e = f.getValue(), t = v.getValue(), n = p.getValue(), i = y.getValue();
      return "banned" === t ? "banned" : "disconnected" === n ? "failed" === i ? "authentication_failed" : "logged_out" : "idle_disconnect" === e ? "idle_disconnect" : "error" === e || "shutdown" === e ? "server_error" : "unknown";
    }
    var c, u, l, d, f, h, p, m, g, _, v, y, w = ["idle_disconnect", "shutdown", "error"], b = {
      init: n,
      reset: o,
      destroy: i,
      getConnectionClosedReason: a
    };
    e.exports = b;
  },                function (e, t, n) {
    function i(e) {
      var t = e.type, n = u[t];
      if (!n) return t ? new Error(t + " type is not supported. Please upgrade the Web SDK version.") : new Error('Structured message object should contain "type" property');
      var i = n(e);
      if (i) {
        var o = i.paths && "type" === i.paths.pop(), r = o && i.actual ? i.actual + " type is not supported. Please upgrade the Web SDK version." : i.message;
        return new Error(r);
      }
    }
    var o = n(15), r = {
      QUICK_REPLIES: "QUICK_REPLIES",
      BUTTON_TEMPLATE: "BUTTON_TEMPLATE",
      PANEL_TEMPLATE: "PANEL_TEMPLATE",
      PANEL_TEMPLATE_CAROUSEL: "PANEL_TEMPLATE_CAROUSEL",
      LIST_TEMPLATE: "LIST_TEMPLATE"
    }, s = {
      QUICK_REPLY_ACTION: "QUICK_REPLY_ACTION",
      LINK_ACTION: "LINK_ACTION"
    }, a = o.obj({
      text: o.type("string"),
      action: o.obj({
        type: o.any([o.equal(s.QUICK_REPLY_ACTION), o.equal(s.LINK_ACTION)]),
        value: o.type("string")
      }, {
        requiredKeys: ["type", "value"],
        whitelistedKeysOnly: !0
      })
    }, {
      requiredKeys: ["text", "action"],
      whitelistedKeysOnly: !0
    }), c = o.obj({
      type: o.equal(r.PANEL_TEMPLATE),
      panel: o.obj({
        heading: o.type("string"),
        paragraph: o.type("string"),
        image_url: o.type("string"),
        action: o.obj({
          type: o.equal(s.LINK_ACTION),
          value: o.type("string")
        }, {
          requiredKeys: ["type", "value"],
          whitelistedKeysOnly: !0
        })
      }, {
        requiredKeys: ["heading"],
        whitelistedKeysOnly: !0
      }),
      buttons: o.each(a)
    }, {
      requiredKeys: ["type", "panel"],
      whitelistedKeysOnly: !0
    }), u = {
      QUICK_REPLIES: o.obj({
        type: o.equal(r.QUICK_REPLIES),
        msg: o.type("string"),
        quick_replies: o.each(o.obj({
          text: o.type("string"),
          action: o.obj({
            type: o.equal(s.QUICK_REPLY_ACTION),
            value: o.type("string")
          }, {
            requiredKeys: ["type", "value"],
            whitelistedKeysOnly: !0
          })
        }, {
          requiredKeys: ["text", "action"],
          whitelistedKeysOnly: !0
        }))
      }, {
        requiredKeys: ["type", "msg", "quick_replies"],
        whitelistedKeysOnly: !0
      }),
      BUTTON_TEMPLATE: o.obj({
        type: o.equal(r.BUTTON_TEMPLATE),
        msg: o.type("string"),
        buttons: o.each(a)
      }, {
        requiredKeys: ["type", "msg", "buttons"],
        whitelistedKeysOnly: !0
      }),
      PANEL_TEMPLATE: c,
      PANEL_TEMPLATE_CAROUSEL: o.obj({
        type: o.equal(r.PANEL_TEMPLATE_CAROUSEL),
        items: o.each(c).minLength(2).maxLength(10)
      }, {
        requiredKeys: ["type", "items"],
        whitelistedKeysOnly: !0
      }),
      LIST_TEMPLATE: o.obj({
        type: o.equal(r.LIST_TEMPLATE),
        items: o.each(o.obj({
          heading: o.type("string"),
          paragraph: o.type("string"),
          image_url: o.type("string"),
          action: o.obj({
            type: o.equal(s.LINK_ACTION),
            value: o.type("string")
          }, {
            requiredKeys: ["type", "value"],
            whitelistedKeysOnly: !0
          })
        }, {
          requiredKeys: ["heading", "paragraph", "action"],
          whitelistedKeysOnly: !0
        })),
        buttons: o.each(a)
      }, {
        requiredKeys: ["type", "items"],
        whitelistedKeysOnly: !0
      })
    }, l = {
      validate: i,
      STRUCTURED_MSG_VALIDATOR: u,
      STRUCTURED_MSG_TYPE: r
    };
    e.exports = l;
  },       function (e, t) {
    function n(e, t) {
      this.name = e;
      this.leaf = /\$[a-z]+$/.test(e);
      this.parentNode = t;
      if (!this.leaf) {
        this.deleted = !1;
        this.childNodes = {};
        this.keys = {};
      }
    }
            n.prototype.fqname = 
    n.prototype.path = 
    n.prototype._getOrCreateChildNode = function (e) {
      var t;
      if (i(this.childNodes, e)) t = this.childNodes[e]; else {
        t = new n(e, this);
        this.childNodes[e] = t;
        this.deleted && t.undeleteParents();
      }
      return t;
    };
    n.prototype.descend = function (e) {
      var t, n, i = this;
      "string" == typeof e && (e = e.split("."));
      for (t = 0, n = e.length; t < n; t++) i = i._getOrCreateChildNode(e[t]);
      return i;
    };
    n.prototype.$$ = n.prototype.descend;
    n.prototype.$ = 
    n.prototype.update = function (e, t) {
      var n, i, o, r, s;
      null != e && this.undeleteParents();
      if (this.leaf) {
        if (this.value !== e) {
          this.value = e;
          r = !0;
          this.notifyListeners(e, t);
        }
      } else if (null == e) {
        if (!this.deleted) {
          r = null;
          this.deleted = !0;
          for (n in this.childNodes) this.childNodes[n].update(null, !0);
          this.notifyListeners(r, t);
        }
      } else {
        if (this.deleted) {
          this.deleted = !1;
          r = e;
          for (n in e) this.$(n).update(e[n], !0);
        } else for (n in e) {
          o = this.$(n);
          i = e[n];
          if (o.leaf) {
            if (o.update(i, !0)) {
              r || (r = {});
              r[n] = i;
            }
          } else if (void 0 !== (s = o.update(i, !0))) {
            r || (r = {});
            r[n] = s;
          }
        }
        r && this.notifyListeners(r, t);
      }
      return r;
    };
    n.prototype.replace = function (e, t) {
      var n, o, r, s, a;
      null != e && this.undeleteParents();
      if (this.leaf) {
        if (this.value !== e) {
          this.value = e;
          s = !0;
          this.notifyListeners(e, t);
        }
      } else if (null == e) {
        if (!this.deleted) {
          s = null;
          this.deleted = !0;
          for (n in this.childNodes) this.childNodes[n].replace(null, !0);
          this.notifyListeners(s, t);
        }
      } else {
        if (this.deleted) {
          this.deleted = !1;
          s = e;
          for (n in e) this.$(n).replace(e[n], !0);
        } else {
          for (n in this.childNodes) if (!i(e, n)) {
            r = this.childNodes[n];
            if (r.leaf) {
              if (r.replace(null, !0)) {
                s || (s = {});
                s[n] = null;
              }
            } else if (void 0 !== (a = r.replace(null, !0))) {
              s || (s = {});
              s[n] = null;
            }
          }
          for (n in e) {
            r = this.$(n);
            o = e[n];
            if (r.leaf) {
              if (r.replace(o, !0)) {
                s || (s = {});
                s[n] = o;
              }
            } else if (void 0 !== (a = r.replace(o, !0))) {
              s || (s = {});
              s[n] = a;
            }
          }
        }
        s && this.notifyListeners(s, t);
      }
      return s;
    };
    n.prototype.undeleteParents = function () {
      for (var e = this.parentNode; e && e.deleted;) {
        e.deleted = !1;
        e = e.parentNode;
      }
    };
    n.prototype.write = function (e, t, n) {
      if ("function" == typeof t) {
        n = t;
        t = !1;
      }
      var i = {
        path: this.path(),
        value: e
      };
      "function" == typeof n && (i.func = n);
      this.update(e, t || !1);
      for (var o = this; o.parentNode;) o = o.parentNode;
      o.notifyWriteListeners(i);
    };
    n.prototype.bindWrite = 
    n.prototype.getValueListeners = function () {
      this.listeners_value || (this.listeners_value = []);
      return this.listeners_value;
    };
    n.prototype.getWriteListeners = function () {
      this.listeners_write || (this.listeners_write = []);
      return this.listeners_write;
    };
    n.prototype.getKeysListeners = function () {
      this.listeners_keys || (this.listeners_keys = []);
      return this.listeners_keys;
    };
    n.prototype.bindValue = 
    n.prototype.bindKeys = 
    n.prototype.unbindValue = function (e) {
      for (var t = this.getValueListeners(), n = 0; n < t.length; n++) if (t[n] == e) {
        t.splice(n, 1);
        return;
      }
    };
    n.prototype.unbindKeys = function (e) {
      if (!this.leaf) for (var t = this.getKeysListeners(), n = 0; n < t.length; n++) if (t[n] == e) {
        t.splice(n, 1);
        return;
      }
    };
    n.prototype.on = function (e, t) {
      switch (e) {
        case "value":
          this.bindValue(t);
          break;

        case "keys":
          this.bindKeys(t);
      }
    };
    n.prototype.un = 
    n.prototype.notifyListeners = function (e, t) {
      var n, o, r, s;
      if (!this.leaf) if (e) {
        for (n in e) if (null != e[n]) {
          if (!i(this.keys, n)) {
            this.keys[n] = 1;
            o || (o = []);
            o.push(n);
          }
        } else if (i(this.keys, n)) {
          delete this.keys[n];
          r || (r = []);
          r.push(n);
        }
      } else for (n in this.keys) {
        delete this.keys[n];
        r || (r = []);
        r.push(n);
      }
      if (this.listeners_value) {
        s = this.getValueListeners().concat();
        for (var a = 0, c = s.length; a < c; a++) try {
          s[a](e);
        } catch (e) { }
      }
      if (!this.leaf) {
        if (this.listeners_keys && (o || r)) {
          s = this.getKeysListeners().concat();
          for (a = 0, c = s.length; a < c; a++) try {
            s[a](o || [], r || []);
          } catch (e) { }
        }
        if (!t && this.parentNode) {
          var u = {};
          u[this.name] = e;
          this.parentNode.notifyListeners(u, t);
        }
      }
    };
    n.prototype.notifyWriteListeners = 
    n.prototype.getValue = function (e) {
      if (e) return this.descend(e).getValue();
      if (this.leaf) return this.value;
      if (this.deleted) return null;
      var t, n, i = {};
      for (var o in this.childNodes) if (null != (n = this.childNodes[o].getValue())) {
        i[o] = n;
        t = !0;
      }
      return t ? i : null;
    };
    n.prototype.hasKey = 
    n.prototype.getKeys = 
    n.prototype.gc = 
    n.DataNode = n;
    e.exports = n;
  },  function (e, t, n) {
    function i(e) {
      de([ct], [e], "logout") || (Be.isAuthenticated() ? o(e) : le(new Error("This API is only applicable for authenticated visitors"), "logout"));
    }
    function o(e) {
      be.destroy();
      a();
      Be.clearIdentity();
      Ge.clearIdentity();
      Je = !1;
      e && setTimeout(;
    }
    function r(e) {
      ke && et.un("data", ke);
      ke = 
      et.on("data", ke);
      if (Je) le(new Error("Zendesk Chat Web SDK has already been initialized. Please ensure that zChat.init() is only called once in your code"), "init"); else if (Le.isIE <= 10) le(new Error("The current browser you are on is not supported by the Web SDK. Please refer to the documentation to learn about the system requirements for Zendesk Chat."), "init"); else {
        var t = it.obj({
          account_key: it.type("string").ok(),
          suppress_console_error: it.type("boolean"),
          override_auth_server_host: it.type("string").ok(),
          override_proxy: it.type("string").ok(),
          authentication: it.obj({
            jwt_fn: it.type("function").ok()
          }, {
            requiredKeys: ["jwt_fn"]
          }),
          activity_window: it.type("object").chain(lt),
          popout: it.type("boolean")
        }, {
          requiredKeys: ["account_key"]
        });
        if (!de([t], [e], "init")) {
          var n = new Ne("root"), i = new Ne("root"), o = {
            livechat: {
              settings: De.clone(He.livechat.settings)
            }
          };
          n.update(o);
          i.update(o);
          je() && n.$("livechat").$("ui").$("mobile$bool").update(!0);
          Ve.ACCOUNT_KEY = e.account_key;
          if (e.authentication) {
            Be.setOverrideHost(e.override_auth_server_host);
            Be.setSiteJWTFunc(e.authentication.jwt_fn);
            Be.setDataNode(n);
            Be.authenticate(;
          } else s(e, Fe, n, i);
        }
      }
    }
    function s(e, t, n, i) {
      be = t;
      $e = n;
      Ee = i;
      Xe.init($e, Ee);
      te();
      Te = 
      be.on("message", Te);
      Oe = e.suppress_console_error || !1;
      Ge.init(e.activity_window);
      switch (Ge.DOM.getVariable("account_status")) {
        case "invalid_account_key":
          Ue.warnBadEmbed();

        case "banned":
          return;
      }
      be.init({
        root: $e,
        overrideProxy: e.override_proxy,
        isCookieDenied: 
        source: tt,
        lastHost: Ge.DOM.getVariable("web_sdk_last_host"),
        source_ver: xe.release_tag,
        activity_window: e.activity_window,
        gd_compatible: 1
      });
      $e.$("connection").$("server$string").bindValue(function (e) {
        e && Ge.DOM.saveVariable("web_sdk_last_host", e);
      });
      Ee.$("livechat").$("account").$("status$string").bindValue(;
      We.init($e, be);
      Ye.init($e, e.activity_window);
      Je = !0;
    }
    function a() {
      et.un("data", ke);
      Xe.destroy();
      be.un("message", Te);
      ke = null;
      Te = null;
      Oe = void 0;
    }
        function u() {
      "invalid_account_key" !== Ge.DOM.getVariable("account_status") ? "closed" === Qe.getConnectionStatus() ? ft() : le(new Error("Call has been ignored due to invalid connection status"), "reconnect") : Ue.warnBadEmbed();
    }
            function f(e, t) {
      if (!de([it.obj({
        display_name: it.any([it.equal(""), it.type("string").regex(st).maxLength(255)]),
        email: it.any([it.equal(""), it.type("string").regex(Pe.email)]),
        phone: at
      }), ct], [e, t], "setVisitorInfo")) {
        var n = {};
        t = t || nt;
        "display_name" in e && (n.display_name$string = e.display_name);
        "email" in e && (n.email$string = e.email);
        "phone" in e && (n.phone$string = e.phone);
        $e.$("livechat").$("profile").write(n, pe(t));
      }
    }
    function h(e, t) {
      if (!de([it.type("string").regex(st), ct], [e, t], "sendChatMsg")) {
        t = t || nt;
        We.sendChatMsg({
          msg: e.trim()
        }, null, pe(t));
      }
    }
    function p(e, t) {
      de([it.chain(fe), ct], [e, t], "sendFile") || m(e, t);
    }
    function m(e, t) {
      t = t || nt;
      Fe.reconnectIfServerRetired(;
    }
    function g(e) {
      var t = it.type("number"), n = Ee.$("livechat");
      if (!de([t], [e], "getDepartment")) {
        n.$("account").$("departments_migrated$bool").getValue() && n.$("dg_mappings").hasKey(e) && console.warn("legacy department id is deprecated, use group id %s instead", n.$("dg_mappings").$(e).$("group_id$int").getValue());
        return _(e);
      }
    }
        function v() {
      var e = {}, t = Ee.$("livechat");
      e = t.$("account").$("departments_migrated$bool").getValue() ? t.$("groups").getValue() : t.$("departments").getValue();
      return re(e, yt);
    }
    function y() {
      var e = Ee.$("livechat").$("profile").$("department_id$int"), t = e.getValue();
      return Ie(t) ? t : void 0;
    }
    function w(e, t) {
      if (!de([it.type("number").chain(he), ct], [e, t], "setVisitorDefaultDepartment")) {
        t = t || nt;
        $e.$("livechat").$("profile").write({
          department_id$int: e
        }, pe(t));
      }
    }
    function b(e) {
      if (!de([ct], [e], "clearVisitorDefaultDepartment")) {
        e = e || nt;
        $e.$("livechat").$("profile").write({
          department_id$int: null
        }, pe(e));
      }
    }
    function $(e, t) {
      k("added$string", e, "addTag", t);
    }
    function E(e, t) {
      k("removed$string", e, "removeTag", t);
    }
    function k(e, t, n, i) {
      if (!de([it.type("string").regex(st).chain(ut), ct], [t, i], n)) {
        i = i || nt;
        var o = {};
        o[e] = t.trim();
        $e.$("livechat").$("channel").$("tags").write(o, pe(i));
      }
    }
    function T(e, t) {
      L("added$string", e, "addTags", t);
    }
        function L(e, t, n, i) {
      if (!de([it.each(it.type("string").regex(st).chain(ut)).minLength(1), ct], [t, i], n)) {
        i = i || nt;
        for (var o = 0, r = t.length; o < r; o++) t[o] = t[o].trim();
        var s = {};
        s[e] = t.join(",");
        $e.$("livechat").$("channel").$("tags").write(s, pe(i));
      }
    }
    function x(e, t) {
      if (!de([it.obj({
        title: it.type("string").regex(st),
        url: it.type("string").regex(rt)
      }, {
        requiredKeys: ["title", "url"]
      }), ct], [e, t], "sendVisitorPath")) {
        t = t || nt;
        $e.$("livechat").$("session").$("page_path").write({
          url$string: e.url,
          title$string: e.title
        }, pe(t));
      }
    }
    function A() {
      var e = Ee.$("livechat").$("channel").$("rating$string").getValue(), t = Ee.$("livechat").$("channel").$("comment$string").getValue(), n = {};
      Re(e) || (n.rating = e);
      Re(t) || (n.comment = t);
      return n;
    }
    function I(e, t) {
      if (!de([it.any([it.equal(null), it.equal("good"), it.equal("bad")]), ct], [e, t], "sendChatRating")) {
        t = t || nt;
        $e.$("livechat").$("channel").write({
          rating$string: e
        }, pe(t));
      }
    }
    function R(e, t) {
      if (!de([it.type("string"), ct], [e, t], "sendChatComment")) {
        t = t || nt;
        $e.$("livechat").$("channel").write({
          comment$string: e
        }, pe(t));
      }
    }
    function C(e, t) {
      var n = it.obj({
        clear_dept_id_on_chat_ended: it.type("boolean")
      }), i = $e.$("livechat").$("channel");
      if ("function" == typeof e) {
        t = e;
        e = {};
      } else void 0 === e && (e = {});
      if (!de([n, ct], [e, t], "endChat")) {
        t = t || nt;
        i.write({
          chatting$bool: !1
        }, pe(t));
        e.clear_dept_id_on_chat_ended && We.clearChatDepartmentID();
      }
    }
        function D() {
      return re(Ee.$("livechat").$("agents").getValue(), wt);
    }
        function P() {
      var e = Ee.$("livechat"), t = e.$("settings"), n = t.$("operating_hours");
      if (t.hasKey("operating_hours")) {
        var i = n.$("type$string").getValue(), o = {
          enabled: n.$("enabled$bool").getValue(),
          type: i,
          timezone: t.$("timezone$string").getValue() || "UTC"
        };
        if ("account" == i) o.account_schedule = me(n.$("schedule").getValue() || {}); else if ("department" == i) {
          var r = e.$("dg_mappings").getValue(), s = ge(n.$("schedules").getValue(), e.$("departments").getKeys());
          e.$("account").$("departments_migrated$bool").getValue() && r && (s = Object.keys(s).reduce(function (e, t) {
            t in r ? e[r[t].group_id$int] = s[t] : e[t] = s[t];
            return e;
          }, {}));
          o.department_schedule = s;
        }
        return o;
      }
    }
    function M(e, t) {
      if (!de([it.obj({
        name: it.type("string").regex(st).maxLength(255),
        email: it.type("string").regex(Pe.email),
        message: it.type("string").regex(st),
        phone: at
      }, {
        requiredKeys: ["name", "email", "message"]
      }), ct], [e, t], "sendOfflineMsg")) {
        t = t || nt;
        var n = {
          name: {
            name$string: "name",
            value$string: e.name
          },
          email: {
            name$string: "email",
            value$string: e.email
          },
          message: {
            name$string: "message",
            value$string: e.message
          }
        };
        "phone" in e && (n.phone = {
          name$string: "phone",
          value$string: e.phone
        });
        "department" in e && (n.department = {
          name$string: "department_id",
          value$string: e.department
        });
        $e.$("livechat").$("settings").$("forms").$("offline_form").$("form_submitted").write(n, pe(t));
      }
    }
    function V(e) {
      var t = $e.$("livechat").$("channel").$("typing"), n = t.$("typing$bool").getValue(), i = it.type("boolean");
      n !== e && (de([i], [e], "sendTyping") || t.write({
        typing$bool: e
      }));
    }
    function j(e, t) {
      var n = it.type("string").regex(Pe.email), i = !!Ee.$("livechat").$("channel").$("log").getKeys().length;
      if (!de([n, ct], [e, t], "sendEmailTranscript")) {
        t = t || nt;
        Ee.$("livechat").$("channel").$("chatting$bool").getValue() || !1 ? $e.$("livechat").$("channel").write({
          email_transcript$string: e
        }, pe(t)) : Be.isAuthenticated() || i ? $e.$("livechat").$("channel").write({
          email_last_transcript$string: e
        }, pe(t)) : le(new Error("There were no past chat to send a transcript of"), "sendEmailTranscript");
      }
    }
    function U(e, t) {
      return {
        id: parseInt(t, 10)
      };
    }
    function q(e) {
      return Object.prototype.hasOwnProperty.call(e, "typing$bool") ? {
        type: "typing"
      } : null;
    }
    function z(e) {
      var t = Object.prototype.hasOwnProperty.call(e, "typing$bool"), n = {
        type: "typing",
        nick: "agent:trigger"
      };
      return t ? n : null;
    }
    function K(e) {
      return Object.prototype.hasOwnProperty.call(e, "timestamp$int") ? {
        type: "last_read"
      } : null;
    }
        function W(e) {
      if (!e.type$string) return null;
      if (!e.nick$string) return null;
      var t = {
        nick: F(e.nick$string),
        type: e.type$string
      }, n = e.msg$string;
      e.first$bool && (t.first = e.first$bool);
      switch (e.type$string) {
        case "chat.msg":
          if ("attachment" in e) {
            if (!0 === e.unverified$bool) return null;
            var i, o = e.attachment, r = {
              mime_type: o.mime_type$string,
              name: o.name$string,
              size: o.size$int,
              url: o.url$string
            };
            if ("metadata" in o) {
              i = o.metadata;
              r.metadata = {
                width: i.width$int,
                height: i.height$int
              };
            }
            "deleted$bool" in o && (r.deleted = o.deleted$bool);
            return De.extend(t, {
              type: "chat.file",
              display_name: e.display_name$string,
              attachment: r
            });
          }
          if ("structured_msg" in e) {
            var s = ue(e.structured_msg);
            ye(s, ["items", "buttons", "quick_replies"]);
            var a = Ke.validate(s);
            a ? le(a, 'Unsupported structured message in "chat.msg" event') : t.structured_msg = s;
          }
          ;
          return De.extend(t, {
            display_name: e.display_name$string,
            msg: n,
            options: e.options$string ? e.options$string.split("/") : []
          });

        case "chat.rating":
          return De.extend(t, {
            display_name: e.display_name$string,
            new_rating: e.new_rating$string,
            rating: e.rating$string
          });

        case "chat.comment":
          return De.extend(t, {
            display_name: e.display_name$string,
            comment: e.comment$string,
            new_comment: e.new_comment$string
          });

        case "chat.memberleave":
          return De.extend(t, {
            display_name: e.display_name$string
          });

        case "chat.memberjoin":
        case "chat.request.rating":
          return De.extend(t, {
            display_name: e.display_name$string
          });

        case "chat.event":
          var c, u = /Please wait while our agents attend to you. There are currently (\d+) visitor\(s\) waiting to be served\./;
          return "agent:system" === e.nick$string && (c = u.exec(n)) ? {
            type: "chat.wait_queue",
            nick: "system.queue",
            wait_queue: parseInt(c[1], 10)
          } : null;

        case "chat.join":
          var l = e.history;
          if (l && l[0]) {
            var d = De.extend({}, l[0]), f = d.timestamp$int;
            d.type$string = d.__type$string;
            d.display_name$string = d.name$string;
            f *= 1e3;
            d.timestamp$int = f;
            return W(d);
          }
          return null;

        case "chat.file.update":
        default:
          return null;
      }
    }
    function H() {
      var e, t, n, i = ["type$string", "timestamp$int"], o = Ee.$("livechat").$("channel").$("log").getValue(), r = [];
      for (var s in o) if (Object.prototype.hasOwnProperty.call(o, s)) {
        if (o[s].type$string) e = o[s]; else {
          e = $e.$("livechat").$("channel").$("log").$(s).getValue();
          if ("chat.msg" === e.type$string && (!0 === e.unverified$bool || !0 === e.failed$bool)) continue;
        }
        var a = W(e);
        if (null === a) continue;
        for (var c = 0; c < i.length; c++) {
          t = i[c];
          n = ce(t);
          n in a || (a[n] = e[t]);
        }
        r.push(a);
      }
      return r;
    }
    function B() {
      if (!Ee) return "closed";
      var e = Ee.$("tmp").$("friendly_connection_status$string").getValue();
      return gt(e)[0];
    }
    function G() {
      var e = Ee.$("livechat").$("account").$("status$string").getValue();
      return _t(e)[0];
    }
    function Y() {
      return Ee.$("livechat").$("channel").$("queue_position$int").getValue() || 0;
    }
    function X(e) {
      if (!de([ct], [e], "fetchChatHistory")) if (Be.isAuthenticated()) {
        var t = Ee.$("livechat").$("history"), n = $e.$("livechat").$("history"), i = n.$("in_progress$bool").getValue(), o = t.$("has_more$bool").getValue(), r = t.$("cursor$string").getValue();
        if (i) le(new Error("Previous fetching of history is still in progress"), "fetchChatHistory"); else if (!1 !== o) {
          e = e || nt;
          n.$("in_progress$bool").update(!0);
          n.write({
            cursor$string: r || ""
          }, pe(e));
        } else le(new Error("No more history to load"), "fetchChatHistory");
      } else le(new Error("This API is not available for unauthenticated visitors"), "fetchChatHistory");
    }
    function Z() {
      S() && $e.$("livechat").$("ui").$("chat").write({
        read_ts$int: +new Date()
      });
    }
    function Q(e, t, n) {
      return function (i, o) {
        if (null === i) return {};
        for (var r = {}, s = 0, a = e.length; s < a; s++) {
          var c = e[s];
          c in i && (r[ce(c)] = i[c]);
        }
        Ce(t) && Object.keys(r).length && (r[t] = o);
        if (Se(n)) {
          var u = n(i, o);
          return null === u ? {} : De.extend(r, u);
        }
        return r;
      };
    }
            function te() {
      J("connection_update", "tmp.friendly_connection_status$string", gt);
      J("account_status", "livechat.account.status$string", ie(mt));
      J("visitor_update", "livechat.profile", se(["email$string", "phone$string", "display_name$string"], d));
      J("department_update", "livechat.departments", ae(["name$string", "status$string"], _));
      J("agent_update", "livechat.agents", ae(["avatar_path$string", "display_name$string", "title$string"], N));
      J("chat", "livechat.channel.log", oe(Et));
      J("chat", "livechat.agents", oe(bt));
      J("chat", "livechat.triggers.agents", oe($t));
      J("chat", "livechat.channel.queue_position$int", ne);
      J("history", "livechat.history.log", oe(Et));
      J("chat", "livechat.channel.last_read", oe(kt));
    }
                    function se(e, t) {
      return 
    }
    function ae(e, t) {
      return function (n) {
        var i = [];
        for (var o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
          var r = n[o], s = e.some(;
          s && i.push(t(o));
        }
        return i;
      };
    }
            function le(e, t, n) {
      var i = t ? t + ": " : "";
      e = new Error("Zendesk Chat Web SDK: Error: " + i + e.message);
      e.context = t;
      e.extra = n;
      Oe || window.console && window.console.error && console.error(e.message);
      ee("error", e);
    }
    function de(e, t, n) {
      for (var i = 0; i < e.length; i++) {
        var o = e[i], r = o(t[i]);
        if (r) {
          le(r, n);
          return !0;
        }
      }
      return !1;
    }
                function me(e) {
      for (var t, n, i = {}, o = 0; o < 7; o++) {
        var r = e[o] || {};
        if (r.enabled$bool) {
          t = [];
          n = r.periods;
          for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && t.push({
            start: n[s].start$int,
            end: n[s].end$int
          });
          i[o] = we(t);
        } else i[o] = [];
      }
      return i;
    }
    function ge(e, t) {
      var n, i = {}, o = ve(e), r = _e(e, t);
      t.forEach(function (e) {
        var t = r[e];
        i[e] = {};
        for (n = 0; n < 7; n++) i[e][n] = [];
        t.forEach(;
        for (n = 0; n < 7; n++) {
          var s = i[e][n];
          s.length > 1 && (i[e][n] = we(s));
        }
      });
      return i;
    }
    function _e(e, t) {
      var n, i = {};
      t.forEach(;
      for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        n = e[o];
        for (var r in n.departments) if (Object.prototype.hasOwnProperty.call(n.departments, r)) {
          if (!n.departments[r]) continue;
          var s = ce(r);
          if (!i[s]) continue;
          i[s].push(o);
        }
      }
      return i;
    }
    function ve(e) {
      var t, n, i = {};
      for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        n = e[o];
        if (Object.prototype.hasOwnProperty.call(n, "deleted_ts$int")) continue;
        if (!n.departments) continue;
        if (!n.enabled$bool) continue;
        t = {};
        for (var r = 0; r < 7; r++) {
          var s = n[r], a = [];
          if (s.enabled$bool && s.periods) {
            var c = s.periods;
            for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && a.push({
              start: c[u].start$int,
              end: c[u].end$int
            });
            a.length && (t[r] = a);
          }
        }
        Object.keys(t).length && (i[o] = t);
      }
      return i;
    }
    function ye(e, t) {
      for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        -1 !== t.indexOf(n) && (e[n] = re(e[n], );
        "object" == typeof e[n] && ye(e[n], t);
      }
    }
    function we(e) {
      if (e.length <= 1) return e;
      var t = [];
      e.forEach(function (e) {
        t[e.start] = void 0 !== t[e.start] ? t[e.start] + 1 : 1;
        t[e.end] = void 0 !== t[e.end] ? t[e.end] - 1 : -1;
      });
      return function (e) {
        var t, n = [], i = 0;
        e.forEach(function (e, o) {
          e > 0 && !t && (t = o);
          if (e) {
            i += e;
            if (0 === i) {
              n.push({
                start: t,
                end: o
              });
              t = void 0;
            }
          }
        });
        return n;
      }(t);
    }
    var be, $e, Ee, ke, Te, Oe, Le = n(2), xe = n(4), Ae = n(0), Ie = n(22), Re = n(1), Ce = n(12), Se = n(5), De = n(48), Ne = n(47), Pe = n(21), Me = n(20), Ve = n(3), je = n(45), Ue = n(6), qe = n(15), ze = n(41), Ke = n(40), Fe = n(39), We = n(29), He = n(26), Be = n(13), Ge = n(14), Ye = n(25), Xe = n(24), Ze = {
      init: r,
      reconnect: u,
      getFirehose: l,
      setVisitorInfo: f,
      getVisitorInfo: d,
      setVisitorDefaultDepartment: w,
      getVisitorDefaultDepartment: y,
      getAllDepartments: v,
      getDepartment: g,
      clearVisitorDefaultDepartment: b,
      addTag: $,
      removeTag: E,
      addTags: T,
      removeTags: O,
      sendChatMsg: h,
      sendFile: p,
      sendVisitorPath: x,
      sendChatComment: R,
      sendChatRating: I,
      getChatInfo: A,
      endChat: C,
      isChatting: S,
      getServingAgentsInfo: D,
      sendOfflineMsg: M,
      sendTyping: Me.debounceExceptFirst(V, 300),
      sendEmailTranscript: j,
      getChatLog: H,
      getConnectionStatus: B,
      getAccountStatus: G,
      getOperatingHours: P,
      getQueuePosition: Y,
      fetchChatHistory: X,
      markAsRead: Me.throttle(Z, 2e3),
      logout: i,
      EMAIL_REGEX: Pe.email
    }, Qe = Ae.extend(Ze), Je = !1, et = Ae.extend({}), tt = "web_sdk", nt =  it = qe, ot = /[0-9]+/, rt = /^(https?|ftps?):\/\//i, st = /\S/, at = it.any([it.equal(""), it.type("string").regex(ot).maxLength(25)]), ct = it.any([it.equal(void 0), it.type("function")]), ut = it.predicate( "not contain any comma character"), lt = it.predicate( "be a valid window object"), dt = {
      interval: 6e5,
      limit: 10,
      callback:     }, ft = ze.rateLimit(c, dt), ht = ["email$string", "phone$string", "display_name$string"], pt = {
      connected: "connected",
      connecting: "connecting",
      closed: "closed"
    }, mt = {
      online: "online",
      offline: "offline",
      away: "away",
      invalid_account_key: null,
      banned: null
    }, gt = ie(pt), _t = ie(mt), vt = Q(ht), yt = Q(["name$string", "status$string"], "id", U), wt = Q(["avatar_path$string", "display_name$string", "title$string"], "nick"), bt = Q(["typing$bool"], "nick", q), $t = Q(["typing$bool"], "display_name", z), Et = Q(["timestamp$int"], null, W), kt = Q(["timestamp$int"], "nick", K), Tt = (Q(["banner", "behavior", "branding", "bubble", "chat_button", "chat_window", "concierge", "file_sending", "forms", "greetings", "language", "login", "rating", "sound", "theme", "timezone$string"]),
      ["on", "un", "fire", "unextendEvents", "init", "getFirehose", "getConnectionStatus"]);
    for (var Ot in Qe) Object.prototype.hasOwnProperty.call(Qe, Ot) && -1 === Tt.indexOf(Ot) && Se(Qe[Ot]) && (Qe[Ot] = Ot, Qe[Ot]));
    e.exports = Qe;
  }, function (e, t, n) {
    var i = n(49), o = i;
    e.exports = o;
  }]);
});
  //# sourceMappingURL=web_sdk.map