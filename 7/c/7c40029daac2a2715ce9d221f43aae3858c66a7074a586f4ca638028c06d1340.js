var bt = Object.defineProperty;
var St = (t, r, n) => r in t ? bt(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var ne = (t, r, n) => (St(t, typeof r != "symbol" ? r + "" : r, n), n);
function $(t) {
  return $ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $(t);
}
function L(t, r) {
  if (!(t instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function $e(t, r) {
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
  }
}
function R(t, r, n) {
  return r && $e(t.prototype, r), n && $e(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function F(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function we(t, r) {
  return we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, e) {
    return a.__proto__ = e, a;
  }, we(t, r);
}
function fe(t, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), r && we(t, r);
}
function X(t, r) {
  if (r && ($(r) === "object" || typeof r == "function"))
    return r;
  if (r !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return F(t);
}
function I(t) {
  return I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, I(t);
}
function _(t, r, n) {
  return r in t ? Object.defineProperty(t, r, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = n, t;
}
function Ot(t) {
  if (Array.isArray(t))
    return t;
}
function Pt(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Fe(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var n = 0, a = new Array(r); n < r; n++)
    a[n] = t[n];
  return a;
}
function kt(t, r) {
  if (!!t) {
    if (typeof t == "string")
      return Fe(t, r);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Fe(t, r);
  }
}
function xt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tt(t) {
  return Ot(t) || Pt(t) || kt(t) || xt();
}
function De(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Ae(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? De(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
var Lt = {
  type: "logger",
  log: function(r) {
    this.output("log", r);
  },
  warn: function(r) {
    this.output("warn", r);
  },
  error: function(r) {
    this.output("error", r);
  },
  output: function(r, n) {
    console && console[r] && console[r].apply(console, n);
  }
}, Rt = function() {
  function t(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    L(this, t), this.init(r, n);
  }
  return R(t, [{
    key: "init",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = a.prefix || "i18next:", this.logger = n || Lt, this.options = a, this.debug = a.debug;
    }
  }, {
    key: "setDebug",
    value: function(n) {
      this.debug = n;
    }
  }, {
    key: "log",
    value: function() {
      for (var n = arguments.length, a = new Array(n), e = 0; e < n; e++)
        a[e] = arguments[e];
      return this.forward(a, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var n = arguments.length, a = new Array(n), e = 0; e < n; e++)
        a[e] = arguments[e];
      return this.forward(a, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var n = arguments.length, a = new Array(n), e = 0; e < n; e++)
        a[e] = arguments[e];
      return this.forward(a, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var n = arguments.length, a = new Array(n), e = 0; e < n; e++)
        a[e] = arguments[e];
      return this.forward(a, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(n, a, e, o) {
      return o && !this.debug ? null : (typeof n[0] == "string" && (n[0] = "".concat(e).concat(this.prefix, " ").concat(n[0])), this.logger[a](n));
    }
  }, {
    key: "create",
    value: function(n) {
      return new t(this.logger, Ae(Ae({}, {
        prefix: "".concat(this.prefix, ":").concat(n, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(n) {
      return n = n || this.options, n.prefix = n.prefix || this.prefix, new t(this.logger, n);
    }
  }]), t;
}(), j = new Rt(), D = function() {
  function t() {
    L(this, t), this.observers = {};
  }
  return R(t, [{
    key: "on",
    value: function(n, a) {
      var e = this;
      return n.split(" ").forEach(function(o) {
        e.observers[o] = e.observers[o] || [], e.observers[o].push(a);
      }), this;
    }
  }, {
    key: "off",
    value: function(n, a) {
      if (!!this.observers[n]) {
        if (!a) {
          delete this.observers[n];
          return;
        }
        this.observers[n] = this.observers[n].filter(function(e) {
          return e !== a;
        });
      }
    }
  }, {
    key: "emit",
    value: function(n) {
      for (var a = arguments.length, e = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
        e[o - 1] = arguments[o];
      if (this.observers[n]) {
        var i = [].concat(this.observers[n]);
        i.forEach(function(u) {
          u.apply(void 0, e);
        });
      }
      if (this.observers["*"]) {
        var s = [].concat(this.observers["*"]);
        s.forEach(function(u) {
          u.apply(u, [n].concat(e));
        });
      }
    }
  }]), t;
}();
function Q() {
  var t, r, n = new Promise(function(a, e) {
    t = a, r = e;
  });
  return n.resolve = t, n.reject = r, n;
}
function Ue(t) {
  return t == null ? "" : "" + t;
}
function Nt(t, r, n) {
  t.forEach(function(a) {
    r[a] && (n[a] = r[a]);
  });
}
function Oe(t, r, n) {
  function a(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function e() {
    return !t || typeof t == "string";
  }
  for (var o = typeof r != "string" ? [].concat(r) : r.split("."); o.length > 1; ) {
    if (e())
      return {};
    var i = a(o.shift());
    !t[i] && n && (t[i] = new n()), Object.prototype.hasOwnProperty.call(t, i) ? t = t[i] : t = {};
  }
  return e() ? {} : {
    obj: t,
    k: a(o.shift())
  };
}
function Ke(t, r, n) {
  var a = Oe(t, r, Object), e = a.obj, o = a.k;
  e[o] = n;
}
function jt(t, r, n, a) {
  var e = Oe(t, r, Object), o = e.obj, i = e.k;
  o[i] = o[i] || [], a && (o[i] = o[i].concat(n)), a || o[i].push(n);
}
function le(t, r) {
  var n = Oe(t, r), a = n.obj, e = n.k;
  if (!!a)
    return a[e];
}
function Ve(t, r, n) {
  var a = le(t, n);
  return a !== void 0 ? a : le(r, n);
}
function at(t, r, n) {
  for (var a in r)
    a !== "__proto__" && a !== "constructor" && (a in t ? typeof t[a] == "string" || t[a] instanceof String || typeof r[a] == "string" || r[a] instanceof String ? n && (t[a] = r[a]) : at(t[a], r[a], n) : t[a] = r[a]);
  return t;
}
function B(t) {
  return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var It = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Ct(t) {
  return typeof t == "string" ? t.replace(/[&<>"'\/]/g, function(r) {
    return It[r];
  }) : t;
}
var de = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, _t = [" ", ",", "?", "!", ";"];
function Et(t, r, n) {
  r = r || "", n = n || "";
  var a = _t.filter(function(s) {
    return r.indexOf(s) < 0 && n.indexOf(s) < 0;
  });
  if (a.length === 0)
    return !0;
  var e = new RegExp("(".concat(a.map(function(s) {
    return s === "?" ? "\\?" : s;
  }).join("|"), ")")), o = !e.test(t);
  if (!o) {
    var i = t.indexOf(n);
    i > 0 && !e.test(t.substring(0, i)) && (o = !0);
  }
  return o;
}
function Be(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ae(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Be(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function $t(t) {
  var r = Ft();
  return function() {
    var a = I(t), e;
    if (r) {
      var o = I(this).constructor;
      e = Reflect.construct(a, arguments, o);
    } else
      e = a.apply(this, arguments);
    return X(this, e);
  };
}
function Ft() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ot(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!!t) {
    if (t[r])
      return t[r];
    for (var a = r.split(n), e = t, o = 0; o < a.length; ++o) {
      if (!e || typeof e[a[o]] == "string" && o + 1 < a.length)
        return;
      if (e[a[o]] === void 0) {
        for (var i = 2, s = a.slice(o, o + i).join(n), u = e[s]; u === void 0 && a.length > o + i; )
          i++, s = a.slice(o, o + i).join(n), u = e[s];
        if (u === void 0)
          return;
        if (u === null)
          return null;
        if (r.endsWith(s)) {
          if (typeof u == "string")
            return u;
          if (s && typeof u[s] == "string")
            return u[s];
        }
        var c = a.slice(o + i).join(n);
        return c ? ot(u, c, n) : void 0;
      }
      e = e[a[o]];
    }
    return e;
  }
}
var Dt = function(t) {
  fe(n, t);
  var r = $t(n);
  function n(a) {
    var e, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return L(this, n), e = r.call(this), de && D.call(F(e)), e.data = a || {}, e.options = o, e.options.keySeparator === void 0 && (e.options.keySeparator = "."), e.options.ignoreJSONStructure === void 0 && (e.options.ignoreJSONStructure = !0), e;
  }
  return R(n, [{
    key: "addNamespaces",
    value: function(e) {
      this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
    }
  }, {
    key: "removeNamespaces",
    value: function(e) {
      var o = this.options.ns.indexOf(e);
      o > -1 && this.options.ns.splice(o, 1);
    }
  }, {
    key: "getResource",
    value: function(e, o, i) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, c = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure, f = [e, o];
      i && typeof i != "string" && (f = f.concat(i)), i && typeof i == "string" && (f = f.concat(u ? i.split(u) : i)), e.indexOf(".") > -1 && (f = e.split("."));
      var l = le(this.data, f);
      return l || !c || typeof i != "string" ? l : ot(this.data && this.data[e] && this.data[e][o], i, u);
    }
  }, {
    key: "addResource",
    value: function(e, o, i, s) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, c = this.options.keySeparator;
      c === void 0 && (c = ".");
      var f = [e, o];
      i && (f = f.concat(c ? i.split(c) : i)), e.indexOf(".") > -1 && (f = e.split("."), s = o, o = f[1]), this.addNamespaces(o), Ke(this.data, f, s), u.silent || this.emit("added", e, o, i, s);
    }
  }, {
    key: "addResources",
    value: function(e, o, i) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var u in i)
        (typeof i[u] == "string" || Object.prototype.toString.apply(i[u]) === "[object Array]") && this.addResource(e, o, u, i[u], {
          silent: !0
        });
      s.silent || this.emit("added", e, o, i);
    }
  }, {
    key: "addResourceBundle",
    value: function(e, o, i, s, u) {
      var c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, f = [e, o];
      e.indexOf(".") > -1 && (f = e.split("."), s = i, i = o, o = f[1]), this.addNamespaces(o);
      var l = le(this.data, f) || {};
      s ? at(l, i, u) : l = ae(ae({}, l), i), Ke(this.data, f, l), c.silent || this.emit("added", e, o, i);
    }
  }, {
    key: "removeResourceBundle",
    value: function(e, o) {
      this.hasResourceBundle(e, o) && delete this.data[e][o], this.removeNamespaces(o), this.emit("removed", e, o);
    }
  }, {
    key: "hasResourceBundle",
    value: function(e, o) {
      return this.getResource(e, o) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function(e, o) {
      return o || (o = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? ae(ae({}, {}), this.getResource(e, o)) : this.getResource(e, o);
    }
  }, {
    key: "getDataByLanguage",
    value: function(e) {
      return this.data[e];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(e) {
      var o = this.getDataByLanguage(e), i = o && Object.keys(o) || [];
      return !!i.find(function(s) {
        return o[s] && Object.keys(o[s]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      return this.data;
    }
  }]), n;
}(D), it = {
  processors: {},
  addPostProcessor: function(r) {
    this.processors[r.name] = r;
  },
  handle: function(r, n, a, e, o) {
    var i = this;
    return r.forEach(function(s) {
      i.processors[s] && (n = i.processors[s].process(n, a, e, o));
    }), n;
  }
};
function We(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function O(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? We(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function At(t) {
  var r = Ut();
  return function() {
    var a = I(t), e;
    if (r) {
      var o = I(this).constructor;
      e = Reflect.construct(a, arguments, o);
    } else
      e = a.apply(this, arguments);
    return X(this, e);
  };
}
function Ut() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
var Me = {}, He = function(t) {
  fe(n, t);
  var r = At(n);
  function n(a) {
    var e, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return L(this, n), e = r.call(this), de && D.call(F(e)), Nt(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], a, F(e)), e.options = o, e.options.keySeparator === void 0 && (e.options.keySeparator = "."), e.logger = j.create("translator"), e;
  }
  return R(n, [{
    key: "changeLanguage",
    value: function(e) {
      e && (this.language = e);
    }
  }, {
    key: "exists",
    value: function(e) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (e == null)
        return !1;
      var i = this.resolve(e, o);
      return i && i.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(e, o) {
      var i = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
      i === void 0 && (i = ":");
      var s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, u = o.ns || this.options.defaultNS || [], c = i && e.indexOf(i) > -1, f = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !Et(e, i, s);
      if (c && !f) {
        var l = e.match(this.interpolator.nestingRegexp);
        if (l && l.length > 0)
          return {
            key: e,
            namespaces: u
          };
        var d = e.split(i);
        (i !== s || i === s && this.options.ns.indexOf(d[0]) > -1) && (u = d.shift()), e = d.join(s);
      }
      return typeof u == "string" && (u = [u]), {
        key: e,
        namespaces: u
      };
    }
  }, {
    key: "translate",
    value: function(e, o, i) {
      var s = this;
      if ($(o) !== "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), o || (o = {}), e == null)
        return "";
      Array.isArray(e) || (e = [String(e)]);
      var u = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, c = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, f = this.extractFromKey(e[e.length - 1], o), l = f.key, d = f.namespaces, p = d[d.length - 1], v = o.lng || this.language, m = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (v && v.toLowerCase() === "cimode") {
        if (m) {
          var y = o.nsSeparator || this.options.nsSeparator;
          return u ? (h.res = "".concat(p).concat(y).concat(l), h) : "".concat(p).concat(y).concat(l);
        }
        return u ? (h.res = l, h) : l;
      }
      var h = this.resolve(e, o), g = h && h.res, S = h && h.usedKey || l, b = h && h.exactUsedKey || l, x = Object.prototype.toString.apply(g), C = ["[object Number]", "[object Function]", "[object RegExp]"], A = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, H = !this.i18nFormat || this.i18nFormat.handleAsObject, G = typeof g != "string" && typeof g != "boolean" && typeof g != "number";
      if (H && g && G && C.indexOf(x) < 0 && !(typeof A == "string" && x === "[object Array]")) {
        if (!o.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var U = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, g, O(O({}, o), {}, {
            ns: d
          })) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (h.res = U, h) : U;
        }
        if (c) {
          var Re = x === "[object Array]", ee = Re ? [] : {}, yt = Re ? b : S;
          for (var K in g)
            if (Object.prototype.hasOwnProperty.call(g, K)) {
              var Ne = "".concat(yt).concat(c).concat(K);
              ee[K] = this.translate(Ne, O(O({}, o), {
                joinArrays: !1,
                ns: d
              })), ee[K] === Ne && (ee[K] = g[K]);
            }
          g = ee;
        }
      } else if (H && typeof A == "string" && x === "[object Array]")
        g = g.join(A), g && (g = this.extendTranslation(g, e, o, i));
      else {
        var te = !1, Y = !1, je = o.count !== void 0 && typeof o.count != "string", pe = n.hasDefaultValue(o), vt = je ? this.pluralResolver.getSuffix(v, o.count, o) : "", z = o["defaultValue".concat(vt)] || o.defaultValue;
        !this.isValidLookup(g) && pe && (te = !0, g = z), this.isValidLookup(g) || (Y = !0, g = l);
        var mt = o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, wt = mt && Y ? void 0 : g, J = pe && z !== g && this.options.updateMissing;
        if (Y || te || J) {
          if (this.logger.log(J ? "updateKey" : "missingKey", v, p, l, J ? z : g), c) {
            var Ie = this.resolve(l, O(O({}, o), {}, {
              keySeparator: !1
            }));
            Ie && Ie.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var q = [], re = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && re && re[0])
            for (var he = 0; he < re.length; he++)
              q.push(re[he]);
          else
            this.options.saveMissingTo === "all" ? q = this.languageUtils.toResolveHierarchy(o.lng || this.language) : q.push(o.lng || this.language);
          var Ce = function(V, ye, _e) {
            var Ee = pe && _e !== g ? _e : wt;
            s.options.missingKeyHandler ? s.options.missingKeyHandler(V, p, ye, Ee, J, o) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(V, p, ye, Ee, J, o), s.emit("missingKey", V, p, ye, g);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && je ? q.forEach(function(ge) {
            s.pluralResolver.getSuffixes(ge, o).forEach(function(V) {
              Ce([ge], l + V, o["defaultValue".concat(V)] || z);
            });
          }) : Ce(q, l, z));
        }
        g = this.extendTranslation(g, e, o, h, i), Y && g === l && this.options.appendNamespaceToMissingKey && (g = "".concat(p, ":").concat(l)), (Y || te) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(p, ":").concat(l) : l, te ? g : void 0) : g = this.options.parseMissingKeyHandler(g));
      }
      return u ? (h.res = g, h) : g;
    }
  }, {
    key: "extendTranslation",
    value: function(e, o, i, s, u) {
      var c = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        e = this.i18nFormat.parse(e, O(O({}, this.options.interpolation.defaultVariables), i), s.usedLng, s.usedNS, s.usedKey, {
          resolved: s
        });
      else if (!i.skipInterpolation) {
        i.interpolation && this.interpolator.init(O(O({}, i), {
          interpolation: O(O({}, this.options.interpolation), i.interpolation)
        }));
        var f = typeof e == "string" && (i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), l;
        if (f) {
          var d = e.match(this.interpolator.nestingRegexp);
          l = d && d.length;
        }
        var p = i.replace && typeof i.replace != "string" ? i.replace : i;
        if (this.options.interpolation.defaultVariables && (p = O(O({}, this.options.interpolation.defaultVariables), p)), e = this.interpolator.interpolate(e, p, i.lng || this.language, i), f) {
          var v = e.match(this.interpolator.nestingRegexp), m = v && v.length;
          l < m && (i.nest = !1);
        }
        i.nest !== !1 && (e = this.interpolator.nest(e, function() {
          for (var g = arguments.length, S = new Array(g), b = 0; b < g; b++)
            S[b] = arguments[b];
          return u && u[0] === S[0] && !i.context ? (c.logger.warn("It seems you are nesting recursively key: ".concat(S[0], " in key: ").concat(o[0])), null) : c.translate.apply(c, S.concat([o]));
        }, i)), i.interpolation && this.interpolator.reset();
      }
      var y = i.postProcess || this.options.postProcess, h = typeof y == "string" ? [y] : y;
      return e != null && h && h.length && i.applyPostProcessor !== !1 && (e = it.handle(h, e, o, this.options && this.options.postProcessPassResolved ? O({
        i18nResolved: s
      }, i) : i, this)), e;
    }
  }, {
    key: "resolve",
    value: function(e) {
      var o = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, u, c, f, l;
      return typeof e == "string" && (e = [e]), e.forEach(function(d) {
        if (!o.isValidLookup(s)) {
          var p = o.extractFromKey(d, i), v = p.key;
          u = v;
          var m = p.namespaces;
          o.options.fallbackNS && (m = m.concat(o.options.fallbackNS));
          var y = i.count !== void 0 && typeof i.count != "string", h = y && !i.ordinal && i.count === 0 && o.pluralResolver.shouldUseIntlApi(), g = i.context !== void 0 && (typeof i.context == "string" || typeof i.context == "number") && i.context !== "", S = i.lngs ? i.lngs : o.languageUtils.toResolveHierarchy(i.lng || o.language, i.fallbackLng);
          m.forEach(function(b) {
            o.isValidLookup(s) || (l = b, !Me["".concat(S[0], "-").concat(b)] && o.utils && o.utils.hasLoadedNamespace && !o.utils.hasLoadedNamespace(l) && (Me["".concat(S[0], "-").concat(b)] = !0, o.logger.warn('key "'.concat(u, '" for languages "').concat(S.join(", "), `" won't get resolved as namespace "`).concat(l, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), S.forEach(function(x) {
              if (!o.isValidLookup(s)) {
                f = x;
                var C = [v];
                if (o.i18nFormat && o.i18nFormat.addLookupKeys)
                  o.i18nFormat.addLookupKeys(C, v, x, b, i);
                else {
                  var A;
                  y && (A = o.pluralResolver.getSuffix(x, i.count, i));
                  var H = "".concat(o.options.pluralSeparator, "zero");
                  if (y && (C.push(v + A), h && C.push(v + H)), g) {
                    var G = "".concat(v).concat(o.options.contextSeparator).concat(i.context);
                    C.push(G), y && (C.push(G + A), h && C.push(G + H));
                  }
                }
                for (var U; U = C.pop(); )
                  o.isValidLookup(s) || (c = U, s = o.getResource(x, b, U, i));
              }
            }));
          });
        }
      }), {
        res: s,
        usedKey: u,
        exactUsedKey: c,
        usedLng: f,
        usedNS: l
      };
    }
  }, {
    key: "isValidLookup",
    value: function(e) {
      return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
    }
  }, {
    key: "getResource",
    value: function(e, o, i) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, o, i, s) : this.resourceStore.getResource(e, o, i, s);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(e) {
      var o = "defaultValue";
      for (var i in e)
        if (Object.prototype.hasOwnProperty.call(e, i) && o === i.substring(0, o.length) && e[i] !== void 0)
          return !0;
      return !1;
    }
  }]), n;
}(D);
function ve(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
var Kt = function() {
  function t(r) {
    L(this, t), this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = j.create("languageUtils");
  }
  return R(t, [{
    key: "getScriptPartFromCode",
    value: function(n) {
      if (!n || n.indexOf("-") < 0)
        return null;
      var a = n.split("-");
      return a.length === 2 || (a.pop(), a[a.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(a.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function(n) {
      if (!n || n.indexOf("-") < 0)
        return n;
      var a = n.split("-");
      return this.formatLanguageCode(a[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function(n) {
      if (typeof n == "string" && n.indexOf("-") > -1) {
        var a = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], e = n.split("-");
        return this.options.lowerCaseLng ? e = e.map(function(o) {
          return o.toLowerCase();
        }) : e.length === 2 ? (e[0] = e[0].toLowerCase(), e[1] = e[1].toUpperCase(), a.indexOf(e[1].toLowerCase()) > -1 && (e[1] = ve(e[1].toLowerCase()))) : e.length === 3 && (e[0] = e[0].toLowerCase(), e[1].length === 2 && (e[1] = e[1].toUpperCase()), e[0] !== "sgn" && e[2].length === 2 && (e[2] = e[2].toUpperCase()), a.indexOf(e[1].toLowerCase()) > -1 && (e[1] = ve(e[1].toLowerCase())), a.indexOf(e[2].toLowerCase()) > -1 && (e[2] = ve(e[2].toLowerCase()))), e.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
    }
  }, {
    key: "isSupportedCode",
    value: function(n) {
      return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (n = this.getLanguagePartFromCode(n)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(n) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function(n) {
      var a = this;
      if (!n)
        return null;
      var e;
      return n.forEach(function(o) {
        if (!e) {
          var i = a.formatLanguageCode(o);
          (!a.options.supportedLngs || a.isSupportedCode(i)) && (e = i);
        }
      }), !e && this.options.supportedLngs && n.forEach(function(o) {
        if (!e) {
          var i = a.getLanguagePartFromCode(o);
          if (a.isSupportedCode(i))
            return e = i;
          e = a.options.supportedLngs.find(function(s) {
            if (s.indexOf(i) === 0)
              return s;
          });
        }
      }), e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]), e;
    }
  }, {
    key: "getFallbackCodes",
    value: function(n, a) {
      if (!n)
        return [];
      if (typeof n == "function" && (n = n(a)), typeof n == "string" && (n = [n]), Object.prototype.toString.apply(n) === "[object Array]")
        return n;
      if (!a)
        return n.default || [];
      var e = n[a];
      return e || (e = n[this.getScriptPartFromCode(a)]), e || (e = n[this.formatLanguageCode(a)]), e || (e = n[this.getLanguagePartFromCode(a)]), e || (e = n.default), e || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(n, a) {
      var e = this, o = this.getFallbackCodes(a || this.options.fallbackLng || [], n), i = [], s = function(c) {
        !c || (e.isSupportedCode(c) ? i.push(c) : e.logger.warn("rejecting language code not found in supportedLngs: ".concat(c)));
      };
      return typeof n == "string" && n.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(n)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(n)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(n))) : typeof n == "string" && s(this.formatLanguageCode(n)), o.forEach(function(u) {
        i.indexOf(u) < 0 && s(e.formatLanguageCode(u));
      }), i;
    }
  }]), t;
}(), Vt = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Bt = {
  1: function(r) {
    return Number(r > 1);
  },
  2: function(r) {
    return Number(r != 1);
  },
  3: function(r) {
    return 0;
  },
  4: function(r) {
    return Number(r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2);
  },
  5: function(r) {
    return Number(r == 0 ? 0 : r == 1 ? 1 : r == 2 ? 2 : r % 100 >= 3 && r % 100 <= 10 ? 3 : r % 100 >= 11 ? 4 : 5);
  },
  6: function(r) {
    return Number(r == 1 ? 0 : r >= 2 && r <= 4 ? 1 : 2);
  },
  7: function(r) {
    return Number(r == 1 ? 0 : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2);
  },
  8: function(r) {
    return Number(r == 1 ? 0 : r == 2 ? 1 : r != 8 && r != 11 ? 2 : 3);
  },
  9: function(r) {
    return Number(r >= 2);
  },
  10: function(r) {
    return Number(r == 1 ? 0 : r == 2 ? 1 : r < 7 ? 2 : r < 11 ? 3 : 4);
  },
  11: function(r) {
    return Number(r == 1 || r == 11 ? 0 : r == 2 || r == 12 ? 1 : r > 2 && r < 20 ? 2 : 3);
  },
  12: function(r) {
    return Number(r % 10 != 1 || r % 100 == 11);
  },
  13: function(r) {
    return Number(r !== 0);
  },
  14: function(r) {
    return Number(r == 1 ? 0 : r == 2 ? 1 : r == 3 ? 2 : 3);
  },
  15: function(r) {
    return Number(r % 10 == 1 && r % 100 != 11 ? 0 : r % 10 >= 2 && (r % 100 < 10 || r % 100 >= 20) ? 1 : 2);
  },
  16: function(r) {
    return Number(r % 10 == 1 && r % 100 != 11 ? 0 : r !== 0 ? 1 : 2);
  },
  17: function(r) {
    return Number(r == 1 || r % 10 == 1 && r % 100 != 11 ? 0 : 1);
  },
  18: function(r) {
    return Number(r == 0 ? 0 : r == 1 ? 1 : 2);
  },
  19: function(r) {
    return Number(r == 1 ? 0 : r == 0 || r % 100 > 1 && r % 100 < 11 ? 1 : r % 100 > 10 && r % 100 < 20 ? 2 : 3);
  },
  20: function(r) {
    return Number(r == 1 ? 0 : r == 0 || r % 100 > 0 && r % 100 < 20 ? 1 : 2);
  },
  21: function(r) {
    return Number(r % 100 == 1 ? 1 : r % 100 == 2 ? 2 : r % 100 == 3 || r % 100 == 4 ? 3 : 0);
  },
  22: function(r) {
    return Number(r == 1 ? 0 : r == 2 ? 1 : (r < 0 || r > 10) && r % 10 == 0 ? 2 : 3);
  }
}, Wt = ["v1", "v2", "v3"], Ge = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Mt() {
  var t = {};
  return Vt.forEach(function(r) {
    r.lngs.forEach(function(n) {
      t[n] = {
        numbers: r.nr,
        plurals: Bt[r.fc]
      };
    });
  }), t;
}
var Ht = function() {
  function t(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    L(this, t), this.languageUtils = r, this.options = n, this.logger = j.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Mt();
  }
  return R(t, [{
    key: "addRule",
    value: function(n, a) {
      this.rules[n] = a;
    }
  }, {
    key: "getRule",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(n, {
            type: a.ordinal ? "ordinal" : "cardinal"
          });
        } catch {
          return;
        }
      return this.rules[n] || this.rules[this.languageUtils.getLanguagePartFromCode(n)];
    }
  }, {
    key: "needsPlural",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = this.getRule(n, a);
      return this.shouldUseIntlApi() ? e && e.resolvedOptions().pluralCategories.length > 1 : e && e.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(n, a) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(n, e).map(function(o) {
        return "".concat(a).concat(o);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(n) {
      var a = this, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = this.getRule(n, e);
      return o ? this.shouldUseIntlApi() ? o.resolvedOptions().pluralCategories.sort(function(i, s) {
        return Ge[i] - Ge[s];
      }).map(function(i) {
        return "".concat(a.options.prepend).concat(i);
      }) : o.numbers.map(function(i) {
        return a.getSuffix(n, i, e);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(n, a) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = this.getRule(n, e);
      return o ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(o.select(a)) : this.getSuffixRetroCompatible(o, a) : (this.logger.warn("no plural rule found for: ".concat(n)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(n, a) {
      var e = this, o = n.noAbs ? n.plurals(a) : n.plurals(Math.abs(a)), i = n.numbers[o];
      this.options.simplifyPluralSuffix && n.numbers.length === 2 && n.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
      var s = function() {
        return e.options.prepend && i.toString() ? e.options.prepend + i.toString() : i.toString();
      };
      return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? "_plural_".concat(i.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && n.numbers.length === 2 && n.numbers[0] === 1 ? s() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !Wt.includes(this.options.compatibilityJSON);
    }
  }]), t;
}();
function Ye(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function T(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ye(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
var Gt = function() {
  function t() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    L(this, t), this.logger = j.create("interpolator"), this.options = r, this.format = r.interpolation && r.interpolation.format || function(n) {
      return n;
    }, this.init(r);
  }
  return R(t, [{
    key: "init",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      n.interpolation || (n.interpolation = {
        escapeValue: !0
      });
      var a = n.interpolation;
      this.escape = a.escape !== void 0 ? a.escape : Ct, this.escapeValue = a.escapeValue !== void 0 ? a.escapeValue : !0, this.useRawValueToEscape = a.useRawValueToEscape !== void 0 ? a.useRawValueToEscape : !1, this.prefix = a.prefix ? B(a.prefix) : a.prefixEscaped || "{{", this.suffix = a.suffix ? B(a.suffix) : a.suffixEscaped || "}}", this.formatSeparator = a.formatSeparator ? a.formatSeparator : a.formatSeparator || ",", this.unescapePrefix = a.unescapeSuffix ? "" : a.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : a.unescapeSuffix || "", this.nestingPrefix = a.nestingPrefix ? B(a.nestingPrefix) : a.nestingPrefixEscaped || B("$t("), this.nestingSuffix = a.nestingSuffix ? B(a.nestingSuffix) : a.nestingSuffixEscaped || B(")"), this.nestingOptionsSeparator = a.nestingOptionsSeparator ? a.nestingOptionsSeparator : a.nestingOptionsSeparator || ",", this.maxReplaces = a.maxReplaces ? a.maxReplaces : 1e3, this.alwaysFormat = a.alwaysFormat !== void 0 ? a.alwaysFormat : !1, this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function() {
      this.options && this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function() {
      var n = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(n, "g");
      var a = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(a, "g");
      var e = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(e, "g");
    }
  }, {
    key: "interpolate",
    value: function(n, a, e, o) {
      var i = this, s, u, c, f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function l(y) {
        return y.replace(/\$/g, "$$$$");
      }
      var d = function(h) {
        if (h.indexOf(i.formatSeparator) < 0) {
          var g = Ve(a, f, h);
          return i.alwaysFormat ? i.format(g, void 0, e, T(T(T({}, o), a), {}, {
            interpolationkey: h
          })) : g;
        }
        var S = h.split(i.formatSeparator), b = S.shift().trim(), x = S.join(i.formatSeparator).trim();
        return i.format(Ve(a, f, b), x, e, T(T(T({}, o), a), {}, {
          interpolationkey: b
        }));
      };
      this.resetRegExp();
      var p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, v = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, m = [{
        regex: this.regexpUnescape,
        safeValue: function(h) {
          return l(h);
        }
      }, {
        regex: this.regexp,
        safeValue: function(h) {
          return i.escapeValue ? l(i.escape(h)) : l(h);
        }
      }];
      return m.forEach(function(y) {
        for (c = 0; s = y.regex.exec(n); ) {
          var h = s[1].trim();
          if (u = d(h), u === void 0)
            if (typeof p == "function") {
              var g = p(n, s, o);
              u = typeof g == "string" ? g : "";
            } else if (o && o.hasOwnProperty(h))
              u = "";
            else if (v) {
              u = s[0];
              continue;
            } else
              i.logger.warn("missed to pass in variable ".concat(h, " for interpolating ").concat(n)), u = "";
          else
            typeof u != "string" && !i.useRawValueToEscape && (u = Ue(u));
          var S = y.safeValue(u);
          if (n = n.replace(s[0], S), v ? (y.regex.lastIndex += u.length, y.regex.lastIndex -= s[0].length) : y.regex.lastIndex = 0, c++, c >= i.maxReplaces)
            break;
        }
      }), n;
    }
  }, {
    key: "nest",
    value: function(n, a) {
      var e = this, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, s, u = T({}, o);
      u.applyPostProcessor = !1, delete u.defaultValue;
      function c(p, v) {
        var m = this.nestingOptionsSeparator;
        if (p.indexOf(m) < 0)
          return p;
        var y = p.split(new RegExp("".concat(m, "[ ]*{"))), h = "{".concat(y[1]);
        p = y[0], h = this.interpolate(h, u);
        var g = h.match(/'/g), S = h.match(/"/g);
        (g && g.length % 2 === 0 && !S || S.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
        try {
          u = JSON.parse(h), v && (u = T(T({}, v), u));
        } catch (b) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(p), b), "".concat(p).concat(m).concat(h);
        }
        return delete u.defaultValue, p;
      }
      for (; i = this.nestingRegexp.exec(n); ) {
        var f = [], l = !1;
        if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
          var d = i[1].split(this.formatSeparator).map(function(p) {
            return p.trim();
          });
          i[1] = d.shift(), f = d, l = !0;
        }
        if (s = a(c.call(this, i[1].trim(), u), u), s && i[0] === n && typeof s != "string")
          return s;
        typeof s != "string" && (s = Ue(s)), s || (this.logger.warn("missed to resolve ".concat(i[1], " for nesting ").concat(n)), s = ""), l && (s = f.reduce(function(p, v) {
          return e.format(p, v, o.lng, T(T({}, o), {}, {
            interpolationkey: i[1].trim()
          }));
        }, s.trim())), n = n.replace(i[0], s), this.regexp.lastIndex = 0;
      }
      return n;
    }
  }]), t;
}();
function ze(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function E(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ze(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Yt(t) {
  var r = t.toLowerCase().trim(), n = {};
  if (t.indexOf("(") > -1) {
    var a = t.split("(");
    r = a[0].toLowerCase().trim();
    var e = a[1].substring(0, a[1].length - 1);
    if (r === "currency" && e.indexOf(":") < 0)
      n.currency || (n.currency = e.trim());
    else if (r === "relativetime" && e.indexOf(":") < 0)
      n.range || (n.range = e.trim());
    else {
      var o = e.split(";");
      o.forEach(function(i) {
        if (!!i) {
          var s = i.split(":"), u = Tt(s), c = u[0], f = u.slice(1), l = f.join(":").trim().replace(/^'+|'+$/g, "");
          n[c.trim()] || (n[c.trim()] = l), l === "false" && (n[c.trim()] = !1), l === "true" && (n[c.trim()] = !0), isNaN(l) || (n[c.trim()] = parseInt(l, 10));
        }
      });
    }
  }
  return {
    formatName: r,
    formatOptions: n
  };
}
function W(t) {
  var r = {};
  return function(a, e, o) {
    var i = e + JSON.stringify(o), s = r[i];
    return s || (s = t(e, o), r[i] = s), s(a);
  };
}
var zt = function() {
  function t() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    L(this, t), this.logger = j.create("formatter"), this.options = r, this.formats = {
      number: W(function(n, a) {
        var e = new Intl.NumberFormat(n, a);
        return function(o) {
          return e.format(o);
        };
      }),
      currency: W(function(n, a) {
        var e = new Intl.NumberFormat(n, E(E({}, a), {}, {
          style: "currency"
        }));
        return function(o) {
          return e.format(o);
        };
      }),
      datetime: W(function(n, a) {
        var e = new Intl.DateTimeFormat(n, E({}, a));
        return function(o) {
          return e.format(o);
        };
      }),
      relativetime: W(function(n, a) {
        var e = new Intl.RelativeTimeFormat(n, E({}, a));
        return function(o) {
          return e.format(o, a.range || "day");
        };
      }),
      list: W(function(n, a) {
        var e = new Intl.ListFormat(n, E({}, a));
        return function(o) {
          return e.format(o);
        };
      })
    }, this.init(r);
  }
  return R(t, [{
    key: "init",
    value: function(n) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, e = a.interpolation;
      this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(n, a) {
      this.formats[n.toLowerCase().trim()] = a;
    }
  }, {
    key: "addCached",
    value: function(n, a) {
      this.formats[n.toLowerCase().trim()] = W(a);
    }
  }, {
    key: "format",
    value: function(n, a, e, o) {
      var i = this, s = a.split(this.formatSeparator), u = s.reduce(function(c, f) {
        var l = Yt(f), d = l.formatName, p = l.formatOptions;
        if (i.formats[d]) {
          var v = c;
          try {
            var m = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, y = m.locale || m.lng || o.locale || o.lng || e;
            v = i.formats[d](c, y, E(E(E({}, p), o), m));
          } catch (h) {
            i.logger.warn(h);
          }
          return v;
        } else
          i.logger.warn("there was no format function for ".concat(d));
        return c;
      }, n);
      return u;
    }
  }]), t;
}();
function Je(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function qe(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Je(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Jt(t) {
  var r = qt();
  return function() {
    var a = I(t), e;
    if (r) {
      var o = I(this).constructor;
      e = Reflect.construct(a, arguments, o);
    } else
      e = a.apply(this, arguments);
    return X(this, e);
  };
}
function qt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qt(t, r) {
  t.pending[r] !== void 0 && (delete t.pending[r], t.pendingCount--);
}
var Xt = function(t) {
  fe(n, t);
  var r = Jt(n);
  function n(a, e, o) {
    var i, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return L(this, n), i = r.call(this), de && D.call(F(i)), i.backend = a, i.store = e, i.services = o, i.languageUtils = o.languageUtils, i.options = s, i.logger = j.create("backendConnector"), i.waitingReads = [], i.maxParallelReads = s.maxParallelReads || 10, i.readingCalls = 0, i.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, i.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, i.state = {}, i.queue = [], i.backend && i.backend.init && i.backend.init(o, s.backend, s), i;
  }
  return R(n, [{
    key: "queueLoad",
    value: function(e, o, i, s) {
      var u = this, c = {}, f = {}, l = {}, d = {};
      return e.forEach(function(p) {
        var v = !0;
        o.forEach(function(m) {
          var y = "".concat(p, "|").concat(m);
          !i.reload && u.store.hasResourceBundle(p, m) ? u.state[y] = 2 : u.state[y] < 0 || (u.state[y] === 1 ? f[y] === void 0 && (f[y] = !0) : (u.state[y] = 1, v = !1, f[y] === void 0 && (f[y] = !0), c[y] === void 0 && (c[y] = !0), d[m] === void 0 && (d[m] = !0)));
        }), v || (l[p] = !0);
      }), (Object.keys(c).length || Object.keys(f).length) && this.queue.push({
        pending: f,
        pendingCount: Object.keys(f).length,
        loaded: {},
        errors: [],
        callback: s
      }), {
        toLoad: Object.keys(c),
        pending: Object.keys(f),
        toLoadLanguages: Object.keys(l),
        toLoadNamespaces: Object.keys(d)
      };
    }
  }, {
    key: "loaded",
    value: function(e, o, i) {
      var s = e.split("|"), u = s[0], c = s[1];
      o && this.emit("failedLoading", u, c, o), i && this.store.addResourceBundle(u, c, i), this.state[e] = o ? -1 : 2;
      var f = {};
      this.queue.forEach(function(l) {
        jt(l.loaded, [u], c), Qt(l, e), o && l.errors.push(o), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(function(d) {
          f[d] || (f[d] = {});
          var p = l.loaded[d];
          p.length && p.forEach(function(v) {
            f[d][v] === void 0 && (f[d][v] = !0);
          });
        }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
      }), this.emit("loaded", f), this.queue = this.queue.filter(function(l) {
        return !l.done;
      });
    }
  }, {
    key: "read",
    value: function(e, o, i) {
      var s = this, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, f = arguments.length > 5 ? arguments[5] : void 0;
      if (!e.length)
        return f(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: e,
          ns: o,
          fcName: i,
          tried: u,
          wait: c,
          callback: f
        });
        return;
      }
      return this.readingCalls++, this.backend[i](e, o, function(l, d) {
        if (s.readingCalls--, s.waitingReads.length > 0) {
          var p = s.waitingReads.shift();
          s.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
        }
        if (l && d && u < s.maxRetries) {
          setTimeout(function() {
            s.read.call(s, e, o, i, u + 1, c * 2, f);
          }, c);
          return;
        }
        f(l, d);
      });
    }
  }, {
    key: "prepareLoading",
    value: function(e, o) {
      var i = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), u && u();
      typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof o == "string" && (o = [o]);
      var c = this.queueLoad(e, o, s, u);
      if (!c.toLoad.length)
        return c.pending.length || u(), null;
      c.toLoad.forEach(function(f) {
        i.loadOne(f);
      });
    }
  }, {
    key: "load",
    value: function(e, o, i) {
      this.prepareLoading(e, o, {}, i);
    }
  }, {
    key: "reload",
    value: function(e, o, i) {
      this.prepareLoading(e, o, {
        reload: !0
      }, i);
    }
  }, {
    key: "loadOne",
    value: function(e) {
      var o = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", s = e.split("|"), u = s[0], c = s[1];
      this.read(u, c, "read", void 0, void 0, function(f, l) {
        f && o.logger.warn("".concat(i, "loading namespace ").concat(c, " for language ").concat(u, " failed"), f), !f && l && o.logger.log("".concat(i, "loaded namespace ").concat(c, " for language ").concat(u), l), o.loaded(e, f, l);
      });
    }
  }, {
    key: "saveMissing",
    value: function(e, o, i, s, u) {
      var c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(o)) {
        this.logger.warn('did not save key "'.concat(i, '" as the namespace "').concat(o, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      i == null || i === "" || (this.backend && this.backend.create && this.backend.create(e, o, i, s, null, qe(qe({}, c), {}, {
        isUpdate: u
      })), !(!e || !e[0]) && this.store.addResource(e[0], o, i, s));
    }
  }]), n;
}(D);
function Zt() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(r) {
      var n = {};
      if ($(r[1]) === "object" && (n = r[1]), typeof r[1] == "string" && (n.defaultValue = r[1]), typeof r[2] == "string" && (n.tDescription = r[2]), $(r[2]) === "object" || $(r[3]) === "object") {
        var a = r[3] || r[2];
        Object.keys(a).forEach(function(e) {
          n[e] = a[e];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: function(r, n, a, e) {
        return r;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function Qe(t) {
  return typeof t.ns == "string" && (t.ns = [t.ns]), typeof t.fallbackLng == "string" && (t.fallbackLng = [t.fallbackLng]), typeof t.fallbackNS == "string" && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t;
}
function Xe(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function N(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Xe(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function er(t) {
  var r = tr();
  return function() {
    var a = I(t), e;
    if (r) {
      var o = I(this).constructor;
      e = Reflect.construct(a, arguments, o);
    } else
      e = a.apply(this, arguments);
    return X(this, e);
  };
}
function tr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function oe() {
}
function rr(t) {
  var r = Object.getOwnPropertyNames(Object.getPrototypeOf(t));
  r.forEach(function(n) {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
}
var ce = function(t) {
  fe(n, t);
  var r = er(n);
  function n() {
    var a, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (L(this, n), a = r.call(this), de && D.call(F(a)), a.options = Qe(e), a.services = {}, a.logger = j, a.modules = {
      external: []
    }, rr(F(a)), o && !a.isInitialized && !e.isClone) {
      if (!a.options.initImmediate)
        return a.init(e, o), X(a, F(a));
      setTimeout(function() {
        a.init(e, o);
      }, 0);
    }
    return a;
  }
  return R(n, [{
    key: "init",
    value: function() {
      var e = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
      typeof o == "function" && (i = o, o = {}), !o.defaultNS && o.defaultNS !== !1 && o.ns && (typeof o.ns == "string" ? o.defaultNS = o.ns : o.ns.indexOf("translation") < 0 && (o.defaultNS = o.ns[0]));
      var s = Zt();
      this.options = N(N(N({}, s), this.options), Qe(o)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = N(N({}, s.interpolation), this.options.interpolation)), o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator), o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
      function u(h) {
        return h ? typeof h == "function" ? new h() : h : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? j.init(u(this.modules.logger), this.options) : j.init(null, this.options);
        var c;
        this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = zt);
        var f = new Kt(this.options);
        this.store = new Dt(this.options.resources, this.options);
        var l = this.services;
        l.logger = j, l.resourceStore = this.store, l.languageUtils = f, l.pluralResolver = new Ht(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), c && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (l.formatter = u(c), l.formatter.init(l, this.options), this.options.interpolation.format = l.formatter.format.bind(l.formatter)), l.interpolator = new Gt(this.options), l.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, l.backendConnector = new Xt(u(this.modules.backend), l.resourceStore, l, this.options), l.backendConnector.on("*", function(h) {
          for (var g = arguments.length, S = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
            S[b - 1] = arguments[b];
          e.emit.apply(e, [h].concat(S));
        }), this.modules.languageDetector && (l.languageDetector = u(this.modules.languageDetector), l.languageDetector.init(l, this.options.detection, this.options)), this.modules.i18nFormat && (l.i18nFormat = u(this.modules.i18nFormat), l.i18nFormat.init && l.i18nFormat.init(this)), this.translator = new He(this.services, this.options), this.translator.on("*", function(h) {
          for (var g = arguments.length, S = new Array(g > 1 ? g - 1 : 0), b = 1; b < g; b++)
            S[b - 1] = arguments[b];
          e.emit.apply(e, [h].concat(S));
        }), this.modules.external.forEach(function(h) {
          h.init && h.init(e);
        });
      }
      if (this.format = this.options.interpolation.format, i || (i = oe), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var p = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      p.forEach(function(h) {
        e[h] = function() {
          var g;
          return (g = e.store)[h].apply(g, arguments);
        };
      });
      var v = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      v.forEach(function(h) {
        e[h] = function() {
          var g;
          return (g = e.store)[h].apply(g, arguments), e;
        };
      });
      var m = Q(), y = function() {
        var g = function(b, x) {
          e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), m.resolve(x), i(b, x);
        };
        if (e.languages && e.options.compatibilityAPI !== "v1" && !e.isInitialized)
          return g(null, e.t.bind(e));
        e.changeLanguage(e.options.lng, g);
      };
      return this.options.resources || !this.options.initImmediate ? y() : setTimeout(y, 0), m;
    }
  }, {
    key: "loadResources",
    value: function(e) {
      var o = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : oe, s = i, u = typeof e == "string" ? e : this.language;
      if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return s();
        var c = [], f = function(p) {
          if (!!p) {
            var v = o.services.languageUtils.toResolveHierarchy(p);
            v.forEach(function(m) {
              c.indexOf(m) < 0 && c.push(m);
            });
          }
        };
        if (u)
          f(u);
        else {
          var l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          l.forEach(function(d) {
            return f(d);
          });
        }
        this.options.preload && this.options.preload.forEach(function(d) {
          return f(d);
        }), this.services.backendConnector.load(c, this.options.ns, function(d) {
          !d && !o.resolvedLanguage && o.language && o.setResolvedLanguage(o.language), s(d);
        });
      } else
        s(null);
    }
  }, {
    key: "reloadResources",
    value: function(e, o, i) {
      var s = Q();
      return e || (e = this.languages), o || (o = this.options.ns), i || (i = oe), this.services.backendConnector.reload(e, o, function(u) {
        s.resolve(), i(u);
      }), s;
    }
  }, {
    key: "use",
    value: function(e) {
      if (!e)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!e.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && it.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function(e) {
      if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
        for (var o = 0; o < this.languages.length; o++) {
          var i = this.languages[o];
          if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
            this.resolvedLanguage = i;
            break;
          }
        }
    }
  }, {
    key: "changeLanguage",
    value: function(e, o) {
      var i = this;
      this.isLanguageChangingTo = e;
      var s = Q();
      this.emit("languageChanging", e);
      var u = function(d) {
        i.language = d, i.languages = i.services.languageUtils.toResolveHierarchy(d), i.resolvedLanguage = void 0, i.setResolvedLanguage(d);
      }, c = function(d, p) {
        p ? (u(p), i.translator.changeLanguage(p), i.isLanguageChangingTo = void 0, i.emit("languageChanged", p), i.logger.log("languageChanged", p)) : i.isLanguageChangingTo = void 0, s.resolve(function() {
          return i.t.apply(i, arguments);
        }), o && o(d, function() {
          return i.t.apply(i, arguments);
        });
      }, f = function(d) {
        !e && !d && i.services.languageDetector && (d = []);
        var p = typeof d == "string" ? d : i.services.languageUtils.getBestMatchFromCodes(d);
        p && (i.language || u(p), i.translator.language || i.translator.changeLanguage(p), i.services.languageDetector && i.services.languageDetector.cacheUserLanguage(p)), i.loadResources(p, function(v) {
          c(v, p);
        });
      };
      return !e && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(f) : f(e), s;
    }
  }, {
    key: "getFixedT",
    value: function(e, o, i) {
      var s = this, u = function c(f, l) {
        var d;
        if ($(l) !== "object") {
          for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), m = 2; m < p; m++)
            v[m - 2] = arguments[m];
          d = s.options.overloadTranslationOptionHandler([f, l].concat(v));
        } else
          d = N({}, l);
        d.lng = d.lng || c.lng, d.lngs = d.lngs || c.lngs, d.ns = d.ns || c.ns, d.keyPrefix = d.keyPrefix || i || c.keyPrefix;
        var y = s.options.keySeparator || ".", h = d.keyPrefix ? "".concat(d.keyPrefix).concat(y).concat(f) : f;
        return s.t(h, d);
      };
      return typeof e == "string" ? u.lng = e : u.lngs = e, u.ns = o, u.keyPrefix = i, u;
    }
  }, {
    key: "t",
    value: function() {
      var e;
      return this.translator && (e = this.translator).translate.apply(e, arguments);
    }
  }, {
    key: "exists",
    value: function() {
      var e;
      return this.translator && (e = this.translator).exists.apply(e, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function(e) {
      this.options.defaultNS = e;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function(e) {
      var o = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var s = this.resolvedLanguage || this.languages[0], u = this.options ? this.options.fallbackLng : !1, c = this.languages[this.languages.length - 1];
      if (s.toLowerCase() === "cimode")
        return !0;
      var f = function(p, v) {
        var m = o.services.backendConnector.state["".concat(p, "|").concat(v)];
        return m === -1 || m === 2;
      };
      if (i.precheck) {
        var l = i.precheck(this, f);
        if (l !== void 0)
          return l;
      }
      return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(s, e) && (!u || f(c, e)));
    }
  }, {
    key: "loadNamespaces",
    value: function(e, o) {
      var i = this, s = Q();
      return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach(function(u) {
        i.options.ns.indexOf(u) < 0 && i.options.ns.push(u);
      }), this.loadResources(function(u) {
        s.resolve(), o && o(u);
      }), s) : (o && o(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(e, o) {
      var i = Q();
      typeof e == "string" && (e = [e]);
      var s = this.options.preload || [], u = e.filter(function(c) {
        return s.indexOf(c) < 0;
      });
      return u.length ? (this.options.preload = s.concat(u), this.loadResources(function(c) {
        i.resolve(), o && o(c);
      }), i) : (o && o(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(e) {
      if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
        return "rtl";
      var o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      return o.indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var e = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : oe, s = N(N(N({}, this.options), o), {
        isClone: !0
      }), u = new n(s);
      (o.debug !== void 0 || o.prefix !== void 0) && (u.logger = u.logger.clone(o));
      var c = ["store", "services", "language"];
      return c.forEach(function(f) {
        u[f] = e[f];
      }), u.services = N({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new He(u.services, u.options), u.translator.on("*", function(f) {
        for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
          d[p - 1] = arguments[p];
        u.emit.apply(u, [f].concat(d));
      }), u.init(s, i), u.translator.options = u.options, u.translator.backendConnector.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u;
    }
  }, {
    key: "toJSON",
    value: function() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]), n;
}(D);
_(ce, "createInstance", function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return new ce(t, r);
});
var P = ce.createInstance();
P.createInstance = ce.createInstance;
P.createInstance;
P.init;
P.loadResources;
P.reloadResources;
P.use;
P.changeLanguage;
P.getFixedT;
P.t;
P.exists;
P.setDefaultNamespace;
P.hasLoadedNamespace;
P.loadNamespaces;
P.loadLanguages;
var Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Pe = { exports: {} }, w = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z = Symbol.for("react.element"), ar = Symbol.for("react.portal"), or = Symbol.for("react.fragment"), ir = Symbol.for("react.strict_mode"), sr = Symbol.for("react.profiler"), ur = Symbol.for("react.provider"), lr = Symbol.for("react.context"), cr = Symbol.for("react.forward_ref"), fr = Symbol.for("react.suspense"), dr = Symbol.for("react.memo"), pr = Symbol.for("react.lazy"), Ze = Symbol.iterator;
function hr(t) {
  return t === null || typeof t != "object" ? null : (t = Ze && t[Ze] || t["@@iterator"], typeof t == "function" ? t : null);
}
var st = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ut = Object.assign, lt = {};
function M(t, r, n) {
  this.props = t, this.context = r, this.refs = lt, this.updater = n || st;
}
M.prototype.isReactComponent = {};
M.prototype.setState = function(t, r) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t, r, "setState");
};
M.prototype.forceUpdate = function(t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function ct() {
}
ct.prototype = M.prototype;
function ke(t, r, n) {
  this.props = t, this.context = r, this.refs = lt, this.updater = n || st;
}
var xe = ke.prototype = new ct();
xe.constructor = ke;
ut(xe, M.prototype);
xe.isPureReactComponent = !0;
var et = Array.isArray, ft = Object.prototype.hasOwnProperty, Te = { current: null }, dt = { key: !0, ref: !0, __self: !0, __source: !0 };
function pt(t, r, n) {
  var a, e = {}, o = null, i = null;
  if (r != null)
    for (a in r.ref !== void 0 && (i = r.ref), r.key !== void 0 && (o = "" + r.key), r)
      ft.call(r, a) && !dt.hasOwnProperty(a) && (e[a] = r[a]);
  var s = arguments.length - 2;
  if (s === 1)
    e.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    e.children = u;
  }
  if (t && t.defaultProps)
    for (a in s = t.defaultProps, s)
      e[a] === void 0 && (e[a] = s[a]);
  return { $$typeof: Z, type: t, key: o, ref: i, props: e, _owner: Te.current };
}
function gr(t, r) {
  return { $$typeof: Z, type: t.type, key: r, ref: t.ref, props: t.props, _owner: t._owner };
}
function Le(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Z;
}
function yr(t) {
  var r = { "=": "=0", ":": "=2" };
  return "$" + t.replace(/[=:]/g, function(n) {
    return r[n];
  });
}
var tt = /\/+/g;
function me(t, r) {
  return typeof t == "object" && t !== null && t.key != null ? yr("" + t.key) : r.toString(36);
}
function se(t, r, n, a, e) {
  var o = typeof t;
  (o === "undefined" || o === "boolean") && (t = null);
  var i = !1;
  if (t === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Z:
          case ar:
            i = !0;
        }
    }
  if (i)
    return i = t, e = e(i), t = a === "" ? "." + me(i, 0) : a, et(e) ? (n = "", t != null && (n = t.replace(tt, "$&/") + "/"), se(e, r, n, "", function(c) {
      return c;
    })) : e != null && (Le(e) && (e = gr(e, n + (!e.key || i && i.key === e.key ? "" : ("" + e.key).replace(tt, "$&/") + "/") + t)), r.push(e)), 1;
  if (i = 0, a = a === "" ? "." : a + ":", et(t))
    for (var s = 0; s < t.length; s++) {
      o = t[s];
      var u = a + me(o, s);
      i += se(o, r, n, u, e);
    }
  else if (u = hr(t), typeof u == "function")
    for (t = u.call(t), s = 0; !(o = t.next()).done; )
      o = o.value, u = a + me(o, s++), i += se(o, r, n, u, e);
  else if (o === "object")
    throw r = String(t), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ie(t, r, n) {
  if (t == null)
    return t;
  var a = [], e = 0;
  return se(t, a, "", "", function(o) {
    return r.call(n, o, e++);
  }), a;
}
function vr(t) {
  if (t._status === -1) {
    var r = t._result;
    r = r(), r.then(function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n);
    }, function(n) {
      (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n);
    }), t._status === -1 && (t._status = 0, t._result = r);
  }
  if (t._status === 1)
    return t._result.default;
  throw t._result;
}
var k = { current: null }, ue = { transition: null }, mr = { ReactCurrentDispatcher: k, ReactCurrentBatchConfig: ue, ReactCurrentOwner: Te };
w.Children = { map: ie, forEach: function(t, r, n) {
  ie(t, function() {
    r.apply(this, arguments);
  }, n);
}, count: function(t) {
  var r = 0;
  return ie(t, function() {
    r++;
  }), r;
}, toArray: function(t) {
  return ie(t, function(r) {
    return r;
  }) || [];
}, only: function(t) {
  if (!Le(t))
    throw Error("React.Children.only expected to receive a single React element child.");
  return t;
} };
w.Component = M;
w.Fragment = or;
w.Profiler = sr;
w.PureComponent = ke;
w.StrictMode = ir;
w.Suspense = fr;
w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mr;
w.cloneElement = function(t, r, n) {
  if (t == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
  var a = ut({}, t.props), e = t.key, o = t.ref, i = t._owner;
  if (r != null) {
    if (r.ref !== void 0 && (o = r.ref, i = Te.current), r.key !== void 0 && (e = "" + r.key), t.type && t.type.defaultProps)
      var s = t.type.defaultProps;
    for (u in r)
      ft.call(r, u) && !dt.hasOwnProperty(u) && (a[u] = r[u] === void 0 && s !== void 0 ? s[u] : r[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    a.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    a.children = s;
  }
  return { $$typeof: Z, type: t.type, key: e, ref: o, props: a, _owner: i };
};
w.createContext = function(t) {
  return t = { $$typeof: lr, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: ur, _context: t }, t.Consumer = t;
};
w.createElement = pt;
w.createFactory = function(t) {
  var r = pt.bind(null, t);
  return r.type = t, r;
};
w.createRef = function() {
  return { current: null };
};
w.forwardRef = function(t) {
  return { $$typeof: cr, render: t };
};
w.isValidElement = Le;
w.lazy = function(t) {
  return { $$typeof: pr, _payload: { _status: -1, _result: t }, _init: vr };
};
w.memo = function(t, r) {
  return { $$typeof: dr, type: t, compare: r === void 0 ? null : r };
};
w.startTransition = function(t) {
  var r = ue.transition;
  ue.transition = {};
  try {
    t();
  } finally {
    ue.transition = r;
  }
};
w.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
w.useCallback = function(t, r) {
  return k.current.useCallback(t, r);
};
w.useContext = function(t) {
  return k.current.useContext(t);
};
w.useDebugValue = function() {
};
w.useDeferredValue = function(t) {
  return k.current.useDeferredValue(t);
};
w.useEffect = function(t, r) {
  return k.current.useEffect(t, r);
};
w.useId = function() {
  return k.current.useId();
};
w.useImperativeHandle = function(t, r, n) {
  return k.current.useImperativeHandle(t, r, n);
};
w.useInsertionEffect = function(t, r) {
  return k.current.useInsertionEffect(t, r);
};
w.useLayoutEffect = function(t, r) {
  return k.current.useLayoutEffect(t, r);
};
w.useMemo = function(t, r) {
  return k.current.useMemo(t, r);
};
w.useReducer = function(t, r, n) {
  return k.current.useReducer(t, r, n);
};
w.useRef = function(t) {
  return k.current.useRef(t);
};
w.useState = function(t) {
  return k.current.useState(t);
};
w.useSyncExternalStore = function(t, r, n) {
  return k.current.useSyncExternalStore(t, r, n);
};
w.useTransition = function() {
  return k.current.useTransition();
};
w.version = "18.2.0";
(function(t) {
  t.exports = w;
})(Pe);
const Kn = /* @__PURE__ */ nr(Pe.exports);
var wr = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230);/g, br = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "\xA9",
  "&#169;": "\xA9",
  "&reg;": "\xAE",
  "&#174;": "\xAE",
  "&hellip;": "\u2026",
  "&#8230;": "\u2026"
}, Sr = function(r) {
  return br[r];
}, Or = function(r) {
  return r.replace(wr, Sr);
};
function rt(t, r) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    r && (a = a.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function nt(t) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? rt(Object(n), !0).forEach(function(a) {
      _(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
var be = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Or
}, ht, Vn = Pe.exports.createContext();
function Pr() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  be = nt(nt({}, be), t);
}
function Bn() {
  return be;
}
var Wn = function() {
  function t() {
    L(this, t), this.usedNamespaces = {};
  }
  return R(t, [{
    key: "addUsedNamespaces",
    value: function(n) {
      var a = this;
      n.forEach(function(e) {
        a.usedNamespaces[e] || (a.usedNamespaces[e] = !0);
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function() {
      return Object.keys(this.usedNamespaces);
    }
  }]), t;
}();
function kr(t) {
  ht = t;
}
function Mn() {
  return ht;
}
var xr = {
  type: "3rdParty",
  init: function(r) {
    Pr(r.options.react), kr(r);
  }
};
const Tr = "Optional", Lr = "Preview", Rr = "Surveys", Nr = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: Tr,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: Lr,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Rr,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, jr = "Optional", Ir = "Preview", Cr = "Surveys", _r = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: jr,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: Ir,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Cr,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, Er = "Optional", $r = "Preview", Fr = "Surveys", Dr = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: Er,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: $r,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Fr,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, Ar = "Optional", Ur = "Preview", Kr = "Surveys", Vr = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: Ar,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: Ur,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Kr,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, Br = "Optional", Wr = "Preview", Mr = "Surveys", Hr = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: Br,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: Wr,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Mr,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, Gr = "Optional", Yr = "Preview", zr = "Surveys", Jr = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: Gr,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: Yr,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: zr,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, qr = "Optional", Qr = "Preview", Xr = "Surveys", Zr = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: qr,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: Qr,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Xr,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, en = "Optional", tn = "Preview", rn = "Surveys", nn = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: en,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: tn,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: rn,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, an = "Optional", on = "Preview", sn = "Surveys", un = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: an,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: on,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: sn,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, ln = "Optional", cn = "Preview", fn = "Surveys", dn = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: ln,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: cn,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: fn,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, pn = "Optional", hn = "Preview", gn = "Surveys", yn = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: pn,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: hn,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: gn,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, vn = "Optional", mn = "Preview", wn = "Surveys", bn = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: vn,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: mn,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: wn,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, Sn = "Optional", On = "Preview", Pn = "Surveys", kn = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: Sn,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: On,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Pn,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, xn = "Optional", Tn = "Preview", Ln = "Surveys", Rn = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: xn,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: Tn,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: Ln,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, Nn = "Optional", jn = "Preview", In = "Surveys", Cn = {
  "If you still need help, please reach out again.": "If you still need help, please reach out again.",
  "Leave a comment...": "Leave a comment...",
  Optional: Nn,
  "Please, provide an answer to proceed": "Please, provide an answer to proceed",
  "Powered by GoTo\xAE": "Powered by GoTo\xAE",
  Preview: jn,
  "Select an option": "Select an option",
  "Send feedback": "Send feedback",
  "Something went wrong": "Something went wrong",
  "Sorry, we couldn't find this survey.": "Sorry, we couldn't find this survey.",
  Surveys: In,
  "Thank you for your response": "Thank you for your response",
  "There seems to be something wrong with the link.": "There seems to be something wrong with the link.",
  "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.": "This is a preview of your survey. It allows you to interact with it like your customer would, but your answers are not registered.",
  "Try again": "Try again",
  "We couldn\u2019t load this survey. Please try again.": "We couldn\u2019t load this survey. Please try again.",
  "Your feedback has been submitted.": "Your feedback has been submitted.",
  "{{surveyName}} ": "{{surveyName}} "
}, _n = {
  "de-DE": {
    translation: {
      ...Nr
    }
  },
  "en-AU": {
    translation: {
      ..._r
    }
  },
  "en-CA": {
    translation: {
      ...Dr
    }
  },
  "en-GB": {
    translation: {
      ...Vr
    }
  },
  "en-IE": {
    translation: {
      ...Hr
    }
  },
  "en-US": {
    translation: {
      ...Jr
    }
  },
  "es-ES": {
    translation: {
      ...Zr
    }
  },
  "es-MX": {
    translation: {
      ...nn
    }
  },
  "fr-CA": {
    translation: {
      ...un
    }
  },
  "fr-FR": {
    translation: {
      ...dn
    }
  },
  "it-IT": {
    translation: {
      ...yn
    }
  },
  "ja-JP": {
    translation: {
      ...bn
    }
  },
  "ko-KR": {
    translation: {
      ...kn
    }
  },
  "pt-BR": {
    translation: {
      ...Rn
    }
  },
  "zh-CN": {
    translation: {
      ...Cn
    }
  }
}, Se = P.createInstance(), En = (t) => {
  Se.use(xr).init({
    resources: _n,
    lng: t,
    fallbackLng: "en-US",
    nsSeparator: !1,
    keySeparator: !1,
    interpolation: {
      escapeValue: !1
    },
    react: {
      useSuspense: !1
    }
  });
}, gt = () => window, Hn = () => gt().document.head, $n = () => gt().shell, Fn = () => $n().i18n.selectedLocale.replace("_", "-");
class Dn {
  constructor() {
    ne(this, "id", "@ucc/cc-surveys");
    ne(this, "name", "Surveys");
    ne(this, "componentId", "cc-surveys");
  }
  async initialize() {
    if (!Se.isInitialized) {
      const r = Fn();
      En(r);
    }
  }
  getComponentById() {
    return import("./surveys-extension.shell.entry.78c7ecd0.mjs");
  }
  getMetadata() {
    return {
      id: this.id,
      name: this.name,
      version: "1.1.1"
    };
  }
  getModules() {
    return [
      {
        componentId: this.componentId,
        displayNameKey: this.name,
        routes: [/\/cc-surveys(\/.*)?/gi],
        shellConfig: {
          hideSidebar: !0,
          hideTopbar: !0
        }
      }
    ];
  }
  getNavigationItems() {
    return [];
  }
  getSettings() {
    return [];
  }
  getString(r, ...n) {
    return Se.t(r);
  }
  registerNamespaces() {
    return Promise.resolve();
  }
}
const Gn = new Dn();
export {
  Vn as I,
  Wn as R,
  Ot as _,
  kt as a,
  xt as b,
  _ as c,
  Mn as d,
  Un as e,
  Kn as f,
  Bn as g,
  gt as h,
  we as i,
  Se as j,
  Fn as k,
  Hn as l,
  Gn as m,
  Pe as r,
  En as s
};
//# sourceMappingURL=extension.3bc87f5d.mjs.map
