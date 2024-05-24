function lr(e, t) {
  for (var r = 0; r < t.length; r++) {
    const a = t[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const n in a)
        if (n !== "default" && !(n in e)) {
          const i = Object.getOwnPropertyDescriptor(a, n);
          i && Object.defineProperty(e, n, i.get ? i : {
            enumerable: !0,
            get: () => a[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var ta = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ra(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r = function() {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var n = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
function E(e) {
  return E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, E(e);
}
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: E
}, Symbol.toStringTag, { value: "Module" }));
function D(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
const aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D
}, Symbol.toStringTag, { value: "Module" }));
function gr(e, t) {
  if (E(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (E(a) != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function It(e) {
  var t = gr(e, "string");
  return E(t) == "symbol" ? t : String(t);
}
function Xe(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, It(a.key), a);
  }
}
function F(e, t, r) {
  return t && Xe(e.prototype, t), r && Xe(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
const ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F
}, Symbol.toStringTag, { value: "Module" }));
function z(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
const oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: z
}, Symbol.toStringTag, { value: "Module" }));
function Ue(e, t) {
  return Ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, n) {
    return a.__proto__ = n, a;
  }, Ue(e, t);
}
function ce(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Ue(e, t);
}
const sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" }));
function te(e, t) {
  if (t && (E(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return z(e);
}
const ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: te
}, Symbol.toStringTag, { value: "Module" }));
function U(e) {
  return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, U(e);
}
const fa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U
}, Symbol.toStringTag, { value: "Module" }));
function _(e, t, r) {
  return t = It(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _
}, Symbol.toStringTag, { value: "Module" }));
function Tt(e) {
  if (Array.isArray(e))
    return e;
}
function dr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function et(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++)
    a[r] = e[r];
  return a;
}
function Dt(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return et(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return et(e, t);
  }
}
function Ft() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hr(e) {
  return Tt(e) || dr(e) || Dt(e) || Ft();
}
function tt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
var vr = {
  type: "logger",
  log: function(t) {
    this.output("log", t);
  },
  warn: function(t) {
    this.output("warn", t);
  },
  error: function(t) {
    this.output("error", t);
  },
  output: function(t, r) {
    console && console[t] && console[t].apply(console, r);
  }
}, mr = function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    D(this, e), this.init(t, r);
  }
  return F(e, [{
    key: "init",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      this.prefix = a.prefix || "i18next:", this.logger = r || vr, this.options = a, this.debug = a.debug;
    }
  }, {
    key: "setDebug",
    value: function(r) {
      this.debug = r;
    }
  }, {
    key: "log",
    value: function() {
      for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
        a[n] = arguments[n];
      return this.forward(a, "log", "", !0);
    }
  }, {
    key: "warn",
    value: function() {
      for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
        a[n] = arguments[n];
      return this.forward(a, "warn", "", !0);
    }
  }, {
    key: "error",
    value: function() {
      for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
        a[n] = arguments[n];
      return this.forward(a, "error", "");
    }
  }, {
    key: "deprecate",
    value: function() {
      for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
        a[n] = arguments[n];
      return this.forward(a, "warn", "WARNING DEPRECATED: ", !0);
    }
  }, {
    key: "forward",
    value: function(r, a, n, i) {
      return i && !this.debug ? null : (typeof r[0] == "string" && (r[0] = "".concat(n).concat(this.prefix, " ").concat(r[0])), this.logger[a](r));
    }
  }, {
    key: "create",
    value: function(r) {
      return new e(this.logger, rt(rt({}, {
        prefix: "".concat(this.prefix, ":").concat(r, ":")
      }), this.options));
    }
  }, {
    key: "clone",
    value: function(r) {
      return r = r || this.options, r.prefix = r.prefix || this.prefix, new e(this.logger, r);
    }
  }]), e;
}(), M = new mr(), q = function() {
  function e() {
    D(this, e), this.observers = {};
  }
  return F(e, [{
    key: "on",
    value: function(r, a) {
      var n = this;
      return r.split(" ").forEach(function(i) {
        n.observers[i] = n.observers[i] || [], n.observers[i].push(a);
      }), this;
    }
  }, {
    key: "off",
    value: function(r, a) {
      if (!!this.observers[r]) {
        if (!a) {
          delete this.observers[r];
          return;
        }
        this.observers[r] = this.observers[r].filter(function(n) {
          return n !== a;
        });
      }
    }
  }, {
    key: "emit",
    value: function(r) {
      for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
        n[i - 1] = arguments[i];
      if (this.observers[r]) {
        var o = [].concat(this.observers[r]);
        o.forEach(function(u) {
          u.apply(void 0, n);
        });
      }
      if (this.observers["*"]) {
        var s = [].concat(this.observers["*"]);
        s.forEach(function(u) {
          u.apply(u, [r].concat(n));
        });
      }
    }
  }]), e;
}();
function ue() {
  var e, t, r = new Promise(function(a, n) {
    e = a, t = n;
  });
  return r.resolve = e, r.reject = t, r;
}
function nt(e) {
  return e == null ? "" : "" + e;
}
function yr(e, t, r) {
  e.forEach(function(a) {
    t[a] && (r[a] = t[a]);
  });
}
function Me(e, t, r) {
  function a(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function n() {
    return !e || typeof e == "string";
  }
  for (var i = typeof t != "string" ? [].concat(t) : t.split("."); i.length > 1; ) {
    if (n())
      return {};
    var o = a(i.shift());
    !e[o] && r && (e[o] = new r()), Object.prototype.hasOwnProperty.call(e, o) ? e = e[o] : e = {};
  }
  return n() ? {} : {
    obj: e,
    k: a(i.shift())
  };
}
function at(e, t, r) {
  var a = Me(e, t, Object), n = a.obj, i = a.k;
  n[i] = r;
}
function br(e, t, r, a) {
  var n = Me(e, t, Object), i = n.obj, o = n.k;
  i[o] = i[o] || [], a && (i[o] = i[o].concat(r)), a || i[o].push(r);
}
function xe(e, t) {
  var r = Me(e, t), a = r.obj, n = r.k;
  if (!!a)
    return a[n];
}
function it(e, t, r) {
  var a = xe(e, r);
  return a !== void 0 ? a : xe(t, r);
}
function $t(e, t, r) {
  for (var a in t)
    a !== "__proto__" && a !== "constructor" && (a in e ? typeof e[a] == "string" || e[a] instanceof String || typeof t[a] == "string" || t[a] instanceof String ? r && (e[a] = t[a]) : $t(e[a], t[a], r) : e[a] = t[a]);
  return e;
}
function X(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Or = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Sr(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, function(t) {
    return Or[t];
  }) : e;
}
var Le = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, wr = [" ", ",", "?", "!", ";"];
function jr(e, t, r) {
  t = t || "", r = r || "";
  var a = wr.filter(function(s) {
    return t.indexOf(s) < 0 && r.indexOf(s) < 0;
  });
  if (a.length === 0)
    return !0;
  var n = new RegExp("(".concat(a.map(function(s) {
    return s === "?" ? "\\?" : s;
  }).join("|"), ")")), i = !n.test(e);
  if (!i) {
    var o = e.indexOf(r);
    o > 0 && !n.test(e.substring(0, o)) && (i = !0);
  }
  return i;
}
function ot(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ot(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ot(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function xr(e) {
  var t = Pr();
  return function() {
    var a = U(e), n;
    if (t) {
      var i = U(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return te(this, n);
  };
}
function Pr() {
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
function At(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!!e) {
    if (e[t])
      return e[t];
    for (var a = t.split(r), n = e, i = 0; i < a.length; ++i) {
      if (!n || typeof n[a[i]] == "string" && i + 1 < a.length)
        return;
      if (n[a[i]] === void 0) {
        for (var o = 2, s = a.slice(i, i + o).join(r), u = n[s]; u === void 0 && a.length > i + o; )
          o++, s = a.slice(i, i + o).join(r), u = n[s];
        if (u === void 0)
          return;
        if (u === null)
          return null;
        if (t.endsWith(s)) {
          if (typeof u == "string")
            return u;
          if (s && typeof u[s] == "string")
            return u[s];
        }
        var f = a.slice(i + o).join(r);
        return f ? At(u, f, r) : void 0;
      }
      n = n[a[i]];
    }
    return n;
  }
}
var kr = function(e) {
  ce(r, e);
  var t = xr(r);
  function r(a) {
    var n, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    return D(this, r), n = t.call(this), Le && q.call(z(n)), n.data = a || {}, n.options = i, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.options.ignoreJSONStructure === void 0 && (n.options.ignoreJSONStructure = !0), n;
  }
  return F(r, [{
    key: "addNamespaces",
    value: function(n) {
      this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
    }
  }, {
    key: "removeNamespaces",
    value: function(n) {
      var i = this.options.ns.indexOf(n);
      i > -1 && this.options.ns.splice(i, 1);
    }
  }, {
    key: "getResource",
    value: function(n, i, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, f = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure, l = [n, i];
      o && typeof o != "string" && (l = l.concat(o)), o && typeof o == "string" && (l = l.concat(u ? o.split(u) : o)), n.indexOf(".") > -1 && (l = n.split("."));
      var c = xe(this.data, l);
      return c || !f || typeof o != "string" ? c : At(this.data && this.data[n] && this.data[n][i], o, u);
    }
  }, {
    key: "addResource",
    value: function(n, i, o, s) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        silent: !1
      }, f = this.options.keySeparator;
      f === void 0 && (f = ".");
      var l = [n, i];
      o && (l = l.concat(f ? o.split(f) : o)), n.indexOf(".") > -1 && (l = n.split("."), s = i, i = l[1]), this.addNamespaces(i), at(this.data, l, s), u.silent || this.emit("added", n, i, o, s);
    }
  }, {
    key: "addResources",
    value: function(n, i, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
        silent: !1
      };
      for (var u in o)
        (typeof o[u] == "string" || Object.prototype.toString.apply(o[u]) === "[object Array]") && this.addResource(n, i, u, o[u], {
          silent: !0
        });
      s.silent || this.emit("added", n, i, o);
    }
  }, {
    key: "addResourceBundle",
    value: function(n, i, o, s, u) {
      var f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
        silent: !1
      }, l = [n, i];
      n.indexOf(".") > -1 && (l = n.split("."), s = o, o = i, i = l[1]), this.addNamespaces(i);
      var c = xe(this.data, l) || {};
      s ? $t(c, o, u) : c = ye(ye({}, c), o), at(this.data, l, c), f.silent || this.emit("added", n, i, o);
    }
  }, {
    key: "removeResourceBundle",
    value: function(n, i) {
      this.hasResourceBundle(n, i) && delete this.data[n][i], this.removeNamespaces(i), this.emit("removed", n, i);
    }
  }, {
    key: "hasResourceBundle",
    value: function(n, i) {
      return this.getResource(n, i) !== void 0;
    }
  }, {
    key: "getResourceBundle",
    value: function(n, i) {
      return i || (i = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? ye(ye({}, {}), this.getResource(n, i)) : this.getResource(n, i);
    }
  }, {
    key: "getDataByLanguage",
    value: function(n) {
      return this.data[n];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function(n) {
      var i = this.getDataByLanguage(n), o = i && Object.keys(i) || [];
      return !!o.find(function(s) {
        return i[s] && Object.keys(i[s]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      return this.data;
    }
  }]), r;
}(q), Ut = {
  processors: {},
  addPostProcessor: function(t) {
    this.processors[t.name] = t;
  },
  handle: function(t, r, a, n, i) {
    var o = this;
    return t.forEach(function(s) {
      o.processors[s] && (r = o.processors[s].process(r, a, n, i));
    }), r;
  }
};
function st(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? st(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : st(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Lr(e) {
  var t = Nr();
  return function() {
    var a = U(e), n;
    if (t) {
      var i = U(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return te(this, n);
  };
}
function Nr() {
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
var ut = {}, ft = function(e) {
  ce(r, e);
  var t = Lr(r);
  function r(a) {
    var n, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return D(this, r), n = t.call(this), Le && q.call(z(n)), yr(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], a, z(n)), n.options = i, n.options.keySeparator === void 0 && (n.options.keySeparator = "."), n.logger = M.create("translator"), n;
  }
  return F(r, [{
    key: "changeLanguage",
    value: function(n) {
      n && (this.language = n);
    }
  }, {
    key: "exists",
    value: function(n) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      };
      if (n == null)
        return !1;
      var o = this.resolve(n, i);
      return o && o.res !== void 0;
    }
  }, {
    key: "extractFromKey",
    value: function(n, i) {
      var o = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
      o === void 0 && (o = ":");
      var s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, u = i.ns || this.options.defaultNS || [], f = o && n.indexOf(o) > -1, l = !this.options.userDefinedKeySeparator && !i.keySeparator && !this.options.userDefinedNsSeparator && !i.nsSeparator && !jr(n, o, s);
      if (f && !l) {
        var c = n.match(this.interpolator.nestingRegexp);
        if (c && c.length > 0)
          return {
            key: n,
            namespaces: u
          };
        var p = n.split(o);
        (o !== s || o === s && this.options.ns.indexOf(p[0]) > -1) && (u = p.shift()), n = p.join(s);
      }
      return typeof u == "string" && (u = [u]), {
        key: n,
        namespaces: u
      };
    }
  }, {
    key: "translate",
    value: function(n, i, o) {
      var s = this;
      if (E(i) !== "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), i || (i = {}), n == null)
        return "";
      Array.isArray(n) || (n = [String(n)]);
      var u = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, f = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, l = this.extractFromKey(n[n.length - 1], i), c = l.key, p = l.namespaces, g = p[p.length - 1], m = i.lng || this.language, O = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (m && m.toLowerCase() === "cimode") {
        if (O) {
          var v = i.nsSeparator || this.options.nsSeparator;
          return u ? (h.res = "".concat(g).concat(v).concat(c), h) : "".concat(g).concat(v).concat(c);
        }
        return u ? (h.res = c, h) : c;
      }
      var h = this.resolve(n, i), d = h && h.res, y = h && h.usedKey || c, S = h && h.exactUsedKey || c, w = Object.prototype.toString.apply(d), b = ["[object Number]", "[object Function]", "[object RegExp]"], k = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, N = !this.i18nFormat || this.i18nFormat.handleAsObject, L = typeof d != "string" && typeof d != "boolean" && typeof d != "number";
      if (N && d && L && b.indexOf(w) < 0 && !(typeof k == "string" && w === "[object Array]")) {
        if (!i.returnObjects && !this.options.returnObjects) {
          this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
          var j = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, d, C(C({}, i), {}, {
            ns: p
          })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
          return u ? (h.res = j, h) : j;
        }
        if (f) {
          var T = w === "[object Array]", V = T ? [] : {}, Re = T ? S : y;
          for (var H in d)
            if (Object.prototype.hasOwnProperty.call(d, H)) {
              var ge = "".concat(Re).concat(f).concat(H);
              V[H] = this.translate(ge, C(C({}, i), {
                joinArrays: !1,
                ns: p
              })), V[H] === ge && (V[H] = d[H]);
            }
          d = V;
        }
      } else if (N && typeof k == "string" && w === "[object Array]")
        d = d.join(k), d && (d = this.extendTranslation(d, n, i, o));
      else {
        var Q = !1, Y = !1, de = i.count !== void 0 && typeof i.count != "string", ie = r.hasDefaultValue(i), Ee = de ? this.pluralResolver.getSuffix(m, i.count, i) : "", J = i["defaultValue".concat(Ee)] || i.defaultValue;
        !this.isValidLookup(d) && ie && (Q = !0, d = J), this.isValidLookup(d) || (Y = !0, d = c);
        var he = i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey, ve = he && Y ? void 0 : d, oe = ie && J !== d && this.options.updateMissing;
        if (Y || Q || oe) {
          if (this.logger.log(oe ? "updateKey" : "missingKey", m, g, c, oe ? J : d), f) {
            var Ye = this.resolve(c, C(C({}, i), {}, {
              keySeparator: !1
            }));
            Ye && Ye.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
          }
          var se = [], me = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
          if (this.options.saveMissingTo === "fallback" && me && me[0])
            for (var _e = 0; _e < me.length; _e++)
              se.push(me[_e]);
          else
            this.options.saveMissingTo === "all" ? se = this.languageUtils.toResolveHierarchy(i.lng || this.language) : se.push(i.lng || this.language);
          var Ge = function(Z, Ie, Qe) {
            var Ze = ie && Qe !== d ? Qe : ve;
            s.options.missingKeyHandler ? s.options.missingKeyHandler(Z, g, Ie, Ze, oe, i) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(Z, g, Ie, Ze, oe, i), s.emit("missingKey", Z, g, Ie, d);
          };
          this.options.saveMissing && (this.options.saveMissingPlurals && de ? se.forEach(function(Ce) {
            s.pluralResolver.getSuffixes(Ce, i).forEach(function(Z) {
              Ge([Ce], c + Z, i["defaultValue".concat(Z)] || J);
            });
          }) : Ge(se, c, J));
        }
        d = this.extendTranslation(d, n, i, h, o), Y && d === c && this.options.appendNamespaceToMissingKey && (d = "".concat(g, ":").concat(c)), (Y || Q) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(g, ":").concat(c) : c, Q ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
      }
      return u ? (h.res = d, h) : d;
    }
  }, {
    key: "extendTranslation",
    value: function(n, i, o, s, u) {
      var f = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        n = this.i18nFormat.parse(n, C(C({}, this.options.interpolation.defaultVariables), o), s.usedLng, s.usedNS, s.usedKey, {
          resolved: s
        });
      else if (!o.skipInterpolation) {
        o.interpolation && this.interpolator.init(C(C({}, o), {
          interpolation: C(C({}, this.options.interpolation), o.interpolation)
        }));
        var l = typeof n == "string" && (o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), c;
        if (l) {
          var p = n.match(this.interpolator.nestingRegexp);
          c = p && p.length;
        }
        var g = o.replace && typeof o.replace != "string" ? o.replace : o;
        if (this.options.interpolation.defaultVariables && (g = C(C({}, this.options.interpolation.defaultVariables), g)), n = this.interpolator.interpolate(n, g, o.lng || this.language, o), l) {
          var m = n.match(this.interpolator.nestingRegexp), O = m && m.length;
          c < O && (o.nest = !1);
        }
        o.nest !== !1 && (n = this.interpolator.nest(n, function() {
          for (var d = arguments.length, y = new Array(d), S = 0; S < d; S++)
            y[S] = arguments[S];
          return u && u[0] === y[0] && !o.context ? (f.logger.warn("It seems you are nesting recursively key: ".concat(y[0], " in key: ").concat(i[0])), null) : f.translate.apply(f, y.concat([i]));
        }, o)), o.interpolation && this.interpolator.reset();
      }
      var v = o.postProcess || this.options.postProcess, h = typeof v == "string" ? [v] : v;
      return n != null && h && h.length && o.applyPostProcessor !== !1 && (n = Ut.handle(h, n, i, this.options && this.options.postProcessPassResolved ? C({
        i18nResolved: s
      }, o) : o, this)), n;
    }
  }, {
    key: "resolve",
    value: function(n) {
      var i = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, u, f, l, c;
      return typeof n == "string" && (n = [n]), n.forEach(function(p) {
        if (!i.isValidLookup(s)) {
          var g = i.extractFromKey(p, o), m = g.key;
          u = m;
          var O = g.namespaces;
          i.options.fallbackNS && (O = O.concat(i.options.fallbackNS));
          var v = o.count !== void 0 && typeof o.count != "string", h = v && !o.ordinal && o.count === 0 && i.pluralResolver.shouldUseIntlApi(), d = o.context !== void 0 && (typeof o.context == "string" || typeof o.context == "number") && o.context !== "", y = o.lngs ? o.lngs : i.languageUtils.toResolveHierarchy(o.lng || i.language, o.fallbackLng);
          O.forEach(function(S) {
            i.isValidLookup(s) || (c = S, !ut["".concat(y[0], "-").concat(S)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(c) && (ut["".concat(y[0], "-").concat(S)] = !0, i.logger.warn('key "'.concat(u, '" for languages "').concat(y.join(", "), `" won't get resolved as namespace "`).concat(c, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach(function(w) {
              if (!i.isValidLookup(s)) {
                l = w;
                var b = [m];
                if (i.i18nFormat && i.i18nFormat.addLookupKeys)
                  i.i18nFormat.addLookupKeys(b, m, w, S, o);
                else {
                  var k;
                  v && (k = i.pluralResolver.getSuffix(w, o.count, o));
                  var N = "".concat(i.options.pluralSeparator, "zero");
                  if (v && (b.push(m + k), h && b.push(m + N)), d) {
                    var L = "".concat(m).concat(i.options.contextSeparator).concat(o.context);
                    b.push(L), v && (b.push(L + k), h && b.push(L + N));
                  }
                }
                for (var j; j = b.pop(); )
                  i.isValidLookup(s) || (f = j, s = i.getResource(w, S, j, o));
              }
            }));
          });
        }
      }), {
        res: s,
        usedKey: u,
        exactUsedKey: f,
        usedLng: l,
        usedNS: c
      };
    }
  }, {
    key: "isValidLookup",
    value: function(n) {
      return n !== void 0 && !(!this.options.returnNull && n === null) && !(!this.options.returnEmptyString && n === "");
    }
  }, {
    key: "getResource",
    value: function(n, i, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(n, i, o, s) : this.resourceStore.getResource(n, i, o, s);
    }
  }], [{
    key: "hasDefaultValue",
    value: function(n) {
      var i = "defaultValue";
      for (var o in n)
        if (Object.prototype.hasOwnProperty.call(n, o) && i === o.substring(0, i.length) && n[o] !== void 0)
          return !0;
      return !1;
    }
  }]), r;
}(q);
function Te(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Rr = function() {
  function e(t) {
    D(this, e), this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = M.create("languageUtils");
  }
  return F(e, [{
    key: "getScriptPartFromCode",
    value: function(r) {
      if (!r || r.indexOf("-") < 0)
        return null;
      var a = r.split("-");
      return a.length === 2 || (a.pop(), a[a.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(a.join("-"));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function(r) {
      if (!r || r.indexOf("-") < 0)
        return r;
      var a = r.split("-");
      return this.formatLanguageCode(a[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function(r) {
      if (typeof r == "string" && r.indexOf("-") > -1) {
        var a = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], n = r.split("-");
        return this.options.lowerCaseLng ? n = n.map(function(i) {
          return i.toLowerCase();
        }) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), a.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Te(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), a.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Te(n[1].toLowerCase())), a.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Te(n[2].toLowerCase()))), n.join("-");
      }
      return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
    }
  }, {
    key: "isSupportedCode",
    value: function(r) {
      return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function(r) {
      var a = this;
      if (!r)
        return null;
      var n;
      return r.forEach(function(i) {
        if (!n) {
          var o = a.formatLanguageCode(i);
          (!a.options.supportedLngs || a.isSupportedCode(o)) && (n = o);
        }
      }), !n && this.options.supportedLngs && r.forEach(function(i) {
        if (!n) {
          var o = a.getLanguagePartFromCode(i);
          if (a.isSupportedCode(o))
            return n = o;
          n = a.options.supportedLngs.find(function(s) {
            if (s.indexOf(o) === 0)
              return s;
          });
        }
      }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
    }
  }, {
    key: "getFallbackCodes",
    value: function(r, a) {
      if (!r)
        return [];
      if (typeof r == "function" && (r = r(a)), typeof r == "string" && (r = [r]), Object.prototype.toString.apply(r) === "[object Array]")
        return r;
      if (!a)
        return r.default || [];
      var n = r[a];
      return n || (n = r[this.getScriptPartFromCode(a)]), n || (n = r[this.formatLanguageCode(a)]), n || (n = r[this.getLanguagePartFromCode(a)]), n || (n = r.default), n || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function(r, a) {
      var n = this, i = this.getFallbackCodes(a || this.options.fallbackLng || [], r), o = [], s = function(f) {
        !f || (n.isSupportedCode(f) ? o.push(f) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)));
      };
      return typeof r == "string" && r.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(r))) : typeof r == "string" && s(this.formatLanguageCode(r)), i.forEach(function(u) {
        o.indexOf(u) < 0 && s(n.formatLanguageCode(u));
      }), o;
    }
  }]), e;
}(), Er = [{
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
}], _r = {
  1: function(t) {
    return Number(t > 1);
  },
  2: function(t) {
    return Number(t != 1);
  },
  3: function(t) {
    return 0;
  },
  4: function(t) {
    return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2);
  },
  5: function(t) {
    return Number(t == 0 ? 0 : t == 1 ? 1 : t == 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5);
  },
  6: function(t) {
    return Number(t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2);
  },
  7: function(t) {
    return Number(t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2);
  },
  8: function(t) {
    return Number(t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3);
  },
  9: function(t) {
    return Number(t >= 2);
  },
  10: function(t) {
    return Number(t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4);
  },
  11: function(t) {
    return Number(t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3);
  },
  12: function(t) {
    return Number(t % 10 != 1 || t % 100 == 11);
  },
  13: function(t) {
    return Number(t !== 0);
  },
  14: function(t) {
    return Number(t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3);
  },
  15: function(t) {
    return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2);
  },
  16: function(t) {
    return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2);
  },
  17: function(t) {
    return Number(t == 1 || t % 10 == 1 && t % 100 != 11 ? 0 : 1);
  },
  18: function(t) {
    return Number(t == 0 ? 0 : t == 1 ? 1 : 2);
  },
  19: function(t) {
    return Number(t == 1 ? 0 : t == 0 || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3);
  },
  20: function(t) {
    return Number(t == 1 ? 0 : t == 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2);
  },
  21: function(t) {
    return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0);
  },
  22: function(t) {
    return Number(t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3);
  }
}, Cr = ["v1", "v2", "v3"], ct = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Ir() {
  var e = {};
  return Er.forEach(function(t) {
    t.lngs.forEach(function(r) {
      e[r] = {
        numbers: t.nr,
        plurals: _r[t.fc]
      };
    });
  }), e;
}
var Tr = function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    D(this, e), this.languageUtils = t, this.options = r, this.logger = M.create("pluralResolver"), (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Ir();
  }
  return F(e, [{
    key: "addRule",
    value: function(r, a) {
      this.rules[r] = a;
    }
  }, {
    key: "getRule",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(r, {
            type: a.ordinal ? "ordinal" : "cardinal"
          });
        } catch {
          return;
        }
      return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
    }
  }, {
    key: "needsPlural",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = this.getRule(r, a);
      return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function(r, a) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this.getSuffixes(r, n).map(function(i) {
        return "".concat(a).concat(i);
      });
    }
  }, {
    key: "getSuffixes",
    value: function(r) {
      var a = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(r, n);
      return i ? this.shouldUseIntlApi() ? i.resolvedOptions().pluralCategories.sort(function(o, s) {
        return ct[o] - ct[s];
      }).map(function(o) {
        return "".concat(a.options.prepend).concat(o);
      }) : i.numbers.map(function(o) {
        return a.getSuffix(r, o, n);
      }) : [];
    }
  }, {
    key: "getSuffix",
    value: function(r, a) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = this.getRule(r, n);
      return i ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(i.select(a)) : this.getSuffixRetroCompatible(i, a) : (this.logger.warn("no plural rule found for: ".concat(r)), "");
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function(r, a) {
      var n = this, i = r.noAbs ? r.plurals(a) : r.plurals(Math.abs(a)), o = r.numbers[i];
      this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
      var s = function() {
        return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString();
      };
      return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? "_plural_".concat(o.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? s() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function() {
      return !Cr.includes(this.options.compatibilityJSON);
    }
  }]), e;
}();
function lt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
var Dr = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    D(this, e), this.logger = M.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function(r) {
      return r;
    }, this.init(t);
  }
  return F(e, [{
    key: "init",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      r.interpolation || (r.interpolation = {
        escapeValue: !0
      });
      var a = r.interpolation;
      this.escape = a.escape !== void 0 ? a.escape : Sr, this.escapeValue = a.escapeValue !== void 0 ? a.escapeValue : !0, this.useRawValueToEscape = a.useRawValueToEscape !== void 0 ? a.useRawValueToEscape : !1, this.prefix = a.prefix ? X(a.prefix) : a.prefixEscaped || "{{", this.suffix = a.suffix ? X(a.suffix) : a.suffixEscaped || "}}", this.formatSeparator = a.formatSeparator ? a.formatSeparator : a.formatSeparator || ",", this.unescapePrefix = a.unescapeSuffix ? "" : a.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : a.unescapeSuffix || "", this.nestingPrefix = a.nestingPrefix ? X(a.nestingPrefix) : a.nestingPrefixEscaped || X("$t("), this.nestingSuffix = a.nestingSuffix ? X(a.nestingSuffix) : a.nestingSuffixEscaped || X(")"), this.nestingOptionsSeparator = a.nestingOptionsSeparator ? a.nestingOptionsSeparator : a.nestingOptionsSeparator || ",", this.maxReplaces = a.maxReplaces ? a.maxReplaces : 1e3, this.alwaysFormat = a.alwaysFormat !== void 0 ? a.alwaysFormat : !1, this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function() {
      this.options && this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function() {
      var r = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(r, "g");
      var a = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(a, "g");
      var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(n, "g");
    }
  }, {
    key: "interpolate",
    value: function(r, a, n, i) {
      var o = this, s, u, f, l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
      function c(v) {
        return v.replace(/\$/g, "$$$$");
      }
      var p = function(h) {
        if (h.indexOf(o.formatSeparator) < 0) {
          var d = it(a, l, h);
          return o.alwaysFormat ? o.format(d, void 0, n, $($($({}, i), a), {}, {
            interpolationkey: h
          })) : d;
        }
        var y = h.split(o.formatSeparator), S = y.shift().trim(), w = y.join(o.formatSeparator).trim();
        return o.format(it(a, l, S), w, n, $($($({}, i), a), {}, {
          interpolationkey: S
        }));
      };
      this.resetRegExp();
      var g = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler, m = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables, O = [{
        regex: this.regexpUnescape,
        safeValue: function(h) {
          return c(h);
        }
      }, {
        regex: this.regexp,
        safeValue: function(h) {
          return o.escapeValue ? c(o.escape(h)) : c(h);
        }
      }];
      return O.forEach(function(v) {
        for (f = 0; s = v.regex.exec(r); ) {
          var h = s[1].trim();
          if (u = p(h), u === void 0)
            if (typeof g == "function") {
              var d = g(r, s, i);
              u = typeof d == "string" ? d : "";
            } else if (i && i.hasOwnProperty(h))
              u = "";
            else if (m) {
              u = s[0];
              continue;
            } else
              o.logger.warn("missed to pass in variable ".concat(h, " for interpolating ").concat(r)), u = "";
          else
            typeof u != "string" && !o.useRawValueToEscape && (u = nt(u));
          var y = v.safeValue(u);
          if (r = r.replace(s[0], y), m ? (v.regex.lastIndex += u.length, v.regex.lastIndex -= s[0].length) : v.regex.lastIndex = 0, f++, f >= o.maxReplaces)
            break;
        }
      }), r;
    }
  }, {
    key: "nest",
    value: function(r, a) {
      var n = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, u = $({}, i);
      u.applyPostProcessor = !1, delete u.defaultValue;
      function f(g, m) {
        var O = this.nestingOptionsSeparator;
        if (g.indexOf(O) < 0)
          return g;
        var v = g.split(new RegExp("".concat(O, "[ ]*{"))), h = "{".concat(v[1]);
        g = v[0], h = this.interpolate(h, u);
        var d = h.match(/'/g), y = h.match(/"/g);
        (d && d.length % 2 === 0 && !y || y.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
        try {
          u = JSON.parse(h), m && (u = $($({}, m), u));
        } catch (S) {
          return this.logger.warn("failed parsing options string in nesting for key ".concat(g), S), "".concat(g).concat(O).concat(h);
        }
        return delete u.defaultValue, g;
      }
      for (; o = this.nestingRegexp.exec(r); ) {
        var l = [], c = !1;
        if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
          var p = o[1].split(this.formatSeparator).map(function(g) {
            return g.trim();
          });
          o[1] = p.shift(), l = p, c = !0;
        }
        if (s = a(f.call(this, o[1].trim(), u), u), s && o[0] === r && typeof s != "string")
          return s;
        typeof s != "string" && (s = nt(s)), s || (this.logger.warn("missed to resolve ".concat(o[1], " for nesting ").concat(r)), s = ""), c && (s = l.reduce(function(g, m) {
          return n.format(g, m, i.lng, $($({}, i), {}, {
            interpolationkey: o[1].trim()
          }));
        }, s.trim())), r = r.replace(o[0], s), this.regexp.lastIndex = 0;
      }
      return r;
    }
  }]), e;
}();
function pt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Fr(e) {
  var t = e.toLowerCase().trim(), r = {};
  if (e.indexOf("(") > -1) {
    var a = e.split("(");
    t = a[0].toLowerCase().trim();
    var n = a[1].substring(0, a[1].length - 1);
    if (t === "currency" && n.indexOf(":") < 0)
      r.currency || (r.currency = n.trim());
    else if (t === "relativetime" && n.indexOf(":") < 0)
      r.range || (r.range = n.trim());
    else {
      var i = n.split(";");
      i.forEach(function(o) {
        if (!!o) {
          var s = o.split(":"), u = hr(s), f = u[0], l = u.slice(1), c = l.join(":").trim().replace(/^'+|'+$/g, "");
          r[f.trim()] || (r[f.trim()] = c), c === "false" && (r[f.trim()] = !1), c === "true" && (r[f.trim()] = !0), isNaN(c) || (r[f.trim()] = parseInt(c, 10));
        }
      });
    }
  }
  return {
    formatName: t,
    formatOptions: r
  };
}
function ee(e) {
  var t = {};
  return function(a, n, i) {
    var o = n + JSON.stringify(i), s = t[o];
    return s || (s = e(n, i), t[o] = s), s(a);
  };
}
var $r = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    D(this, e), this.logger = M.create("formatter"), this.options = t, this.formats = {
      number: ee(function(r, a) {
        var n = new Intl.NumberFormat(r, a);
        return function(i) {
          return n.format(i);
        };
      }),
      currency: ee(function(r, a) {
        var n = new Intl.NumberFormat(r, W(W({}, a), {}, {
          style: "currency"
        }));
        return function(i) {
          return n.format(i);
        };
      }),
      datetime: ee(function(r, a) {
        var n = new Intl.DateTimeFormat(r, W({}, a));
        return function(i) {
          return n.format(i);
        };
      }),
      relativetime: ee(function(r, a) {
        var n = new Intl.RelativeTimeFormat(r, W({}, a));
        return function(i) {
          return n.format(i, a.range || "day");
        };
      }),
      list: ee(function(r, a) {
        var n = new Intl.ListFormat(r, W({}, a));
        return function(i) {
          return n.format(i);
        };
      })
    }, this.init(t);
  }
  return F(e, [{
    key: "init",
    value: function(r) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        interpolation: {}
      }, n = a.interpolation;
      this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
    }
  }, {
    key: "add",
    value: function(r, a) {
      this.formats[r.toLowerCase().trim()] = a;
    }
  }, {
    key: "addCached",
    value: function(r, a) {
      this.formats[r.toLowerCase().trim()] = ee(a);
    }
  }, {
    key: "format",
    value: function(r, a, n, i) {
      var o = this, s = a.split(this.formatSeparator), u = s.reduce(function(f, l) {
        var c = Fr(l), p = c.formatName, g = c.formatOptions;
        if (o.formats[p]) {
          var m = f;
          try {
            var O = i && i.formatParams && i.formatParams[i.interpolationkey] || {}, v = O.locale || O.lng || i.locale || i.lng || n;
            m = o.formats[p](f, v, W(W(W({}, g), i), O));
          } catch (h) {
            o.logger.warn(h);
          }
          return m;
        } else
          o.logger.warn("there was no format function for ".concat(p));
        return f;
      }, r);
      return u;
    }
  }]), e;
}();
function gt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Ar(e) {
  var t = Ur();
  return function() {
    var a = U(e), n;
    if (t) {
      var i = U(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return te(this, n);
  };
}
function Ur() {
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
function Kr(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
var Mr = function(e) {
  ce(r, e);
  var t = Ar(r);
  function r(a, n, i) {
    var o, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return D(this, r), o = t.call(this), Le && q.call(z(o)), o.backend = a, o.store = n, o.services = i, o.languageUtils = i.languageUtils, o.options = s, o.logger = M.create("backendConnector"), o.waitingReads = [], o.maxParallelReads = s.maxParallelReads || 10, o.readingCalls = 0, o.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, o.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(i, s.backend, s), o;
  }
  return F(r, [{
    key: "queueLoad",
    value: function(n, i, o, s) {
      var u = this, f = {}, l = {}, c = {}, p = {};
      return n.forEach(function(g) {
        var m = !0;
        i.forEach(function(O) {
          var v = "".concat(g, "|").concat(O);
          !o.reload && u.store.hasResourceBundle(g, O) ? u.state[v] = 2 : u.state[v] < 0 || (u.state[v] === 1 ? l[v] === void 0 && (l[v] = !0) : (u.state[v] = 1, m = !1, l[v] === void 0 && (l[v] = !0), f[v] === void 0 && (f[v] = !0), p[O] === void 0 && (p[O] = !0)));
        }), m || (c[g] = !0);
      }), (Object.keys(f).length || Object.keys(l).length) && this.queue.push({
        pending: l,
        pendingCount: Object.keys(l).length,
        loaded: {},
        errors: [],
        callback: s
      }), {
        toLoad: Object.keys(f),
        pending: Object.keys(l),
        toLoadLanguages: Object.keys(c),
        toLoadNamespaces: Object.keys(p)
      };
    }
  }, {
    key: "loaded",
    value: function(n, i, o) {
      var s = n.split("|"), u = s[0], f = s[1];
      i && this.emit("failedLoading", u, f, i), o && this.store.addResourceBundle(u, f, o), this.state[n] = i ? -1 : 2;
      var l = {};
      this.queue.forEach(function(c) {
        br(c.loaded, [u], f), Kr(c, n), i && c.errors.push(i), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach(function(p) {
          l[p] || (l[p] = {});
          var g = c.loaded[p];
          g.length && g.forEach(function(m) {
            l[p][m] === void 0 && (l[p][m] = !0);
          });
        }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
      }), this.emit("loaded", l), this.queue = this.queue.filter(function(c) {
        return !c.done;
      });
    }
  }, {
    key: "read",
    value: function(n, i, o) {
      var s = this, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, l = arguments.length > 5 ? arguments[5] : void 0;
      if (!n.length)
        return l(null, {});
      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: n,
          ns: i,
          fcName: o,
          tried: u,
          wait: f,
          callback: l
        });
        return;
      }
      return this.readingCalls++, this.backend[o](n, i, function(c, p) {
        if (s.readingCalls--, s.waitingReads.length > 0) {
          var g = s.waitingReads.shift();
          s.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
        }
        if (c && p && u < s.maxRetries) {
          setTimeout(function() {
            s.read.call(s, n, i, o, u + 1, f * 2, l);
          }, f);
          return;
        }
        l(c, p);
      });
    }
  }, {
    key: "prepareLoading",
    value: function(n, i) {
      var o = this, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 ? arguments[3] : void 0;
      if (!this.backend)
        return this.logger.warn("No backend was added via i18next.use. Will not load resources."), u && u();
      typeof n == "string" && (n = this.languageUtils.toResolveHierarchy(n)), typeof i == "string" && (i = [i]);
      var f = this.queueLoad(n, i, s, u);
      if (!f.toLoad.length)
        return f.pending.length || u(), null;
      f.toLoad.forEach(function(l) {
        o.loadOne(l);
      });
    }
  }, {
    key: "load",
    value: function(n, i, o) {
      this.prepareLoading(n, i, {}, o);
    }
  }, {
    key: "reload",
    value: function(n, i, o) {
      this.prepareLoading(n, i, {
        reload: !0
      }, o);
    }
  }, {
    key: "loadOne",
    value: function(n) {
      var i = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", s = n.split("|"), u = s[0], f = s[1];
      this.read(u, f, "read", void 0, void 0, function(l, c) {
        l && i.logger.warn("".concat(o, "loading namespace ").concat(f, " for language ").concat(u, " failed"), l), !l && c && i.logger.log("".concat(o, "loaded namespace ").concat(f, " for language ").concat(u), c), i.loaded(n, l, c);
      });
    }
  }, {
    key: "saveMissing",
    value: function(n, i, o, s, u) {
      var f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(i)) {
        this.logger.warn('did not save key "'.concat(o, '" as the namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        return;
      }
      o == null || o === "" || (this.backend && this.backend.create && this.backend.create(n, i, o, s, null, dt(dt({}, f), {}, {
        isUpdate: u
      })), !(!n || !n[0]) && this.store.addResource(n[0], i, o, s));
    }
  }]), r;
}(q);
function zr() {
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
    overloadTranslationOptionHandler: function(t) {
      var r = {};
      if (E(t[1]) === "object" && (r = t[1]), typeof t[1] == "string" && (r.defaultValue = t[1]), typeof t[2] == "string" && (r.tDescription = t[2]), E(t[2]) === "object" || E(t[3]) === "object") {
        var a = t[3] || t[2];
        Object.keys(a).forEach(function(n) {
          r[n] = a[n];
        });
      }
      return r;
    },
    interpolation: {
      escapeValue: !0,
      format: function(t, r, a, n) {
        return t;
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
function ht(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function vt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Br(e) {
  var t = Vr();
  return function() {
    var a = U(e), n;
    if (t) {
      var i = U(this).constructor;
      n = Reflect.construct(a, arguments, i);
    } else
      n = a.apply(this, arguments);
    return te(this, n);
  };
}
function Vr() {
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
function be() {
}
function Hr(e) {
  var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
  t.forEach(function(r) {
    typeof e[r] == "function" && (e[r] = e[r].bind(e));
  });
}
var Pe = function(e) {
  ce(r, e);
  var t = Br(r);
  function r() {
    var a, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (D(this, r), a = t.call(this), Le && q.call(z(a)), a.options = ht(n), a.services = {}, a.logger = M, a.modules = {
      external: []
    }, Hr(z(a)), i && !a.isInitialized && !n.isClone) {
      if (!a.options.initImmediate)
        return a.init(n, i), te(a, z(a));
      setTimeout(function() {
        a.init(n, i);
      }, 0);
    }
    return a;
  }
  return F(r, [{
    key: "init",
    value: function() {
      var n = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
      typeof i == "function" && (o = i, i = {}), !i.defaultNS && i.defaultNS !== !1 && i.ns && (typeof i.ns == "string" ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
      var s = zr();
      this.options = K(K(K({}, s), this.options), ht(i)), this.options.compatibilityAPI !== "v1" && (this.options.interpolation = K(K({}, s.interpolation), this.options.interpolation)), i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);
      function u(h) {
        return h ? typeof h == "function" ? new h() : h : null;
      }
      if (!this.options.isClone) {
        this.modules.logger ? M.init(u(this.modules.logger), this.options) : M.init(null, this.options);
        var f;
        this.modules.formatter ? f = this.modules.formatter : typeof Intl < "u" && (f = $r);
        var l = new Rr(this.options);
        this.store = new kr(this.options.resources, this.options);
        var c = this.services;
        c.logger = M, c.resourceStore = this.store, c.languageUtils = l, c.pluralResolver = new Tr(l, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        }), f && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (c.formatter = u(f), c.formatter.init(c, this.options), this.options.interpolation.format = c.formatter.format.bind(c.formatter)), c.interpolator = new Dr(this.options), c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        }, c.backendConnector = new Mr(u(this.modules.backend), c.resourceStore, c, this.options), c.backendConnector.on("*", function(h) {
          for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), S = 1; S < d; S++)
            y[S - 1] = arguments[S];
          n.emit.apply(n, [h].concat(y));
        }), this.modules.languageDetector && (c.languageDetector = u(this.modules.languageDetector), c.languageDetector.init(c, this.options.detection, this.options)), this.modules.i18nFormat && (c.i18nFormat = u(this.modules.i18nFormat), c.i18nFormat.init && c.i18nFormat.init(this)), this.translator = new ft(this.services, this.options), this.translator.on("*", function(h) {
          for (var d = arguments.length, y = new Array(d > 1 ? d - 1 : 0), S = 1; S < d; S++)
            y[S - 1] = arguments[S];
          n.emit.apply(n, [h].concat(y));
        }), this.modules.external.forEach(function(h) {
          h.init && h.init(n);
        });
      }
      if (this.format = this.options.interpolation.format, o || (o = be), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        p.length > 0 && p[0] !== "dev" && (this.options.lng = p[0]);
      }
      !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
      var g = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
      g.forEach(function(h) {
        n[h] = function() {
          var d;
          return (d = n.store)[h].apply(d, arguments);
        };
      });
      var m = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
      m.forEach(function(h) {
        n[h] = function() {
          var d;
          return (d = n.store)[h].apply(d, arguments), n;
        };
      });
      var O = ue(), v = function() {
        var d = function(S, w) {
          n.isInitialized && !n.initializedStoreOnce && n.logger.warn("init: i18next is already initialized. You should call init just once!"), n.isInitialized = !0, n.options.isClone || n.logger.log("initialized", n.options), n.emit("initialized", n.options), O.resolve(w), o(S, w);
        };
        if (n.languages && n.options.compatibilityAPI !== "v1" && !n.isInitialized)
          return d(null, n.t.bind(n));
        n.changeLanguage(n.options.lng, d);
      };
      return this.options.resources || !this.options.initImmediate ? v() : setTimeout(v, 0), O;
    }
  }, {
    key: "loadResources",
    value: function(n) {
      var i = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : be, s = o, u = typeof n == "string" ? n : this.language;
      if (typeof n == "function" && (s = n), !this.options.resources || this.options.partialBundledLanguages) {
        if (u && u.toLowerCase() === "cimode")
          return s();
        var f = [], l = function(g) {
          if (!!g) {
            var m = i.services.languageUtils.toResolveHierarchy(g);
            m.forEach(function(O) {
              f.indexOf(O) < 0 && f.push(O);
            });
          }
        };
        if (u)
          l(u);
        else {
          var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          c.forEach(function(p) {
            return l(p);
          });
        }
        this.options.preload && this.options.preload.forEach(function(p) {
          return l(p);
        }), this.services.backendConnector.load(f, this.options.ns, function(p) {
          !p && !i.resolvedLanguage && i.language && i.setResolvedLanguage(i.language), s(p);
        });
      } else
        s(null);
    }
  }, {
    key: "reloadResources",
    value: function(n, i, o) {
      var s = ue();
      return n || (n = this.languages), i || (i = this.options.ns), o || (o = be), this.services.backendConnector.reload(n, i, function(u) {
        s.resolve(), o(u);
      }), s;
    }
  }, {
    key: "use",
    value: function(n) {
      if (!n)
        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
      if (!n.type)
        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
      return n.type === "backend" && (this.modules.backend = n), (n.type === "logger" || n.log && n.warn && n.error) && (this.modules.logger = n), n.type === "languageDetector" && (this.modules.languageDetector = n), n.type === "i18nFormat" && (this.modules.i18nFormat = n), n.type === "postProcessor" && Ut.addPostProcessor(n), n.type === "formatter" && (this.modules.formatter = n), n.type === "3rdParty" && this.modules.external.push(n), this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function(n) {
      if (!(!n || !this.languages) && !(["cimode", "dev"].indexOf(n) > -1))
        for (var i = 0; i < this.languages.length; i++) {
          var o = this.languages[i];
          if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
            this.resolvedLanguage = o;
            break;
          }
        }
    }
  }, {
    key: "changeLanguage",
    value: function(n, i) {
      var o = this;
      this.isLanguageChangingTo = n;
      var s = ue();
      this.emit("languageChanging", n);
      var u = function(p) {
        o.language = p, o.languages = o.services.languageUtils.toResolveHierarchy(p), o.resolvedLanguage = void 0, o.setResolvedLanguage(p);
      }, f = function(p, g) {
        g ? (u(g), o.translator.changeLanguage(g), o.isLanguageChangingTo = void 0, o.emit("languageChanged", g), o.logger.log("languageChanged", g)) : o.isLanguageChangingTo = void 0, s.resolve(function() {
          return o.t.apply(o, arguments);
        }), i && i(p, function() {
          return o.t.apply(o, arguments);
        });
      }, l = function(p) {
        !n && !p && o.services.languageDetector && (p = []);
        var g = typeof p == "string" ? p : o.services.languageUtils.getBestMatchFromCodes(p);
        g && (o.language || u(g), o.translator.language || o.translator.changeLanguage(g), o.services.languageDetector && o.services.languageDetector.cacheUserLanguage(g)), o.loadResources(g, function(m) {
          f(m, g);
        });
      };
      return !n && this.services.languageDetector && !this.services.languageDetector.async ? l(this.services.languageDetector.detect()) : !n && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(l) : l(n), s;
    }
  }, {
    key: "getFixedT",
    value: function(n, i, o) {
      var s = this, u = function f(l, c) {
        var p;
        if (E(c) !== "object") {
          for (var g = arguments.length, m = new Array(g > 2 ? g - 2 : 0), O = 2; O < g; O++)
            m[O - 2] = arguments[O];
          p = s.options.overloadTranslationOptionHandler([l, c].concat(m));
        } else
          p = K({}, c);
        p.lng = p.lng || f.lng, p.lngs = p.lngs || f.lngs, p.ns = p.ns || f.ns, p.keyPrefix = p.keyPrefix || o || f.keyPrefix;
        var v = s.options.keySeparator || ".", h = p.keyPrefix ? "".concat(p.keyPrefix).concat(v).concat(l) : l;
        return s.t(h, p);
      };
      return typeof n == "string" ? u.lng = n : u.lngs = n, u.ns = i, u.keyPrefix = o, u;
    }
  }, {
    key: "t",
    value: function() {
      var n;
      return this.translator && (n = this.translator).translate.apply(n, arguments);
    }
  }, {
    key: "exists",
    value: function() {
      var n;
      return this.translator && (n = this.translator).exists.apply(n, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function(n) {
      this.options.defaultNS = n;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function(n) {
      var i = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.isInitialized)
        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
      if (!this.languages || !this.languages.length)
        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
      var s = this.resolvedLanguage || this.languages[0], u = this.options ? this.options.fallbackLng : !1, f = this.languages[this.languages.length - 1];
      if (s.toLowerCase() === "cimode")
        return !0;
      var l = function(g, m) {
        var O = i.services.backendConnector.state["".concat(g, "|").concat(m)];
        return O === -1 || O === 2;
      };
      if (o.precheck) {
        var c = o.precheck(this, l);
        if (c !== void 0)
          return c;
      }
      return !!(this.hasResourceBundle(s, n) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || l(s, n) && (!u || l(f, n)));
    }
  }, {
    key: "loadNamespaces",
    value: function(n, i) {
      var o = this, s = ue();
      return this.options.ns ? (typeof n == "string" && (n = [n]), n.forEach(function(u) {
        o.options.ns.indexOf(u) < 0 && o.options.ns.push(u);
      }), this.loadResources(function(u) {
        s.resolve(), i && i(u);
      }), s) : (i && i(), Promise.resolve());
    }
  }, {
    key: "loadLanguages",
    value: function(n, i) {
      var o = ue();
      typeof n == "string" && (n = [n]);
      var s = this.options.preload || [], u = n.filter(function(f) {
        return s.indexOf(f) < 0;
      });
      return u.length ? (this.options.preload = s.concat(u), this.loadResources(function(f) {
        o.resolve(), i && i(f);
      }), o) : (i && i(), Promise.resolve());
    }
  }, {
    key: "dir",
    value: function(n) {
      if (n || (n = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !n)
        return "rtl";
      var i = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
      return i.indexOf(this.services.languageUtils.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
    }
  }, {
    key: "cloneInstance",
    value: function() {
      var n = this, i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : be, s = K(K(K({}, this.options), i), {
        isClone: !0
      }), u = new r(s);
      (i.debug !== void 0 || i.prefix !== void 0) && (u.logger = u.logger.clone(i));
      var f = ["store", "services", "language"];
      return f.forEach(function(l) {
        u[l] = n[l];
      }), u.services = K({}, this.services), u.services.utils = {
        hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
      }, u.translator = new ft(u.services, u.options), u.translator.on("*", function(l) {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          p[g - 1] = arguments[g];
        u.emit.apply(u, [l].concat(p));
      }), u.init(s, o), u.translator.options = u.options, u.translator.backendConnector.services.utils = {
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
  }]), r;
}(q);
_(Pe, "createInstance", function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return new Pe(e, t);
});
var I = Pe.createInstance();
I.createInstance = Pe.createInstance;
var Jr = I.createInstance, Wr = I.init, qr = I.loadResources, Yr = I.reloadResources, Gr = I.use, Qr = I.changeLanguage, Zr = I.getFixedT, Xr = I.t, en = I.exists, tn = I.setDefaultNamespace, rn = I.hasLoadedNamespace, nn = I.loadNamespaces, an = I.loadLanguages;
const la = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I,
  changeLanguage: Qr,
  createInstance: Jr,
  exists: en,
  getFixedT: Zr,
  hasLoadedNamespace: rn,
  init: Wr,
  loadLanguages: an,
  loadNamespaces: nn,
  loadResources: qr,
  reloadResources: Yr,
  setDefaultNamespace: tn,
  t: Xr,
  use: Gr
}, Symbol.toStringTag, { value: "Module" }));
function Kt(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, i;
  for (i = 0; i < a.length; i++)
    n = a[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
const pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" }));
function G(e, t) {
  if (e == null)
    return {};
  var r = Kt(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      a = i[n], !(t.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, a) || (r[a] = e[a]));
  }
  return r;
}
const ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G
}, Symbol.toStringTag, { value: "Module" }));
var P = { exports: {} }, x = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mt = Object.getOwnPropertySymbols, on = Object.prototype.hasOwnProperty, sn = Object.prototype.propertyIsEnumerable;
function un(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function fn() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, r = 0; r < 10; r++)
      t["_" + String.fromCharCode(r)] = r;
    var a = Object.getOwnPropertyNames(t).map(function(i) {
      return t[i];
    });
    if (a.join("") !== "0123456789")
      return !1;
    var n = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(i) {
      n[i] = i;
    }), Object.keys(Object.assign({}, n)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var cn = fn() ? Object.assign : function(e, t) {
  for (var r, a = un(e), n, i = 1; i < arguments.length; i++) {
    r = Object(arguments[i]);
    for (var o in r)
      on.call(r, o) && (a[o] = r[o]);
    if (mt) {
      n = mt(r);
      for (var s = 0; s < n.length; s++)
        sn.call(r, n[s]) && (a[n[s]] = r[n[s]]);
    }
  }
  return a;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze = cn, re = 60103, Mt = 60106;
x.Fragment = 60107;
x.StrictMode = 60108;
x.Profiler = 60114;
var zt = 60109, Bt = 60110, Vt = 60112;
x.Suspense = 60113;
var Ht = 60115, Jt = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var A = Symbol.for;
  re = A("react.element"), Mt = A("react.portal"), x.Fragment = A("react.fragment"), x.StrictMode = A("react.strict_mode"), x.Profiler = A("react.profiler"), zt = A("react.provider"), Bt = A("react.context"), Vt = A("react.forward_ref"), x.Suspense = A("react.suspense"), Ht = A("react.memo"), Jt = A("react.lazy");
}
var yt = typeof Symbol == "function" && Symbol.iterator;
function ln(e) {
  return e === null || typeof e != "object" ? null : (e = yt && e[yt] || e["@@iterator"], typeof e == "function" ? e : null);
}
function le(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Wt = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qt = {};
function ne(e, t, r) {
  this.props = e, this.context = t, this.refs = qt, this.updater = r || Wt;
}
ne.prototype.isReactComponent = {};
ne.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(le(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
ne.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yt() {
}
Yt.prototype = ne.prototype;
function Be(e, t, r) {
  this.props = e, this.context = t, this.refs = qt, this.updater = r || Wt;
}
var Ve = Be.prototype = new Yt();
Ve.constructor = Be;
ze(Ve, ne.prototype);
Ve.isPureReactComponent = !0;
var He = { current: null }, Gt = Object.prototype.hasOwnProperty, Qt = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zt(e, t, r) {
  var a, n = {}, i = null, o = null;
  if (t != null)
    for (a in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Gt.call(t, a) && !Qt.hasOwnProperty(a) && (n[a] = t[a]);
  var s = arguments.length - 2;
  if (s === 1)
    n.children = r;
  else if (1 < s) {
    for (var u = Array(s), f = 0; f < s; f++)
      u[f] = arguments[f + 2];
    n.children = u;
  }
  if (e && e.defaultProps)
    for (a in s = e.defaultProps, s)
      n[a] === void 0 && (n[a] = s[a]);
  return { $$typeof: re, type: e, key: i, ref: o, props: n, _owner: He.current };
}
function pn(e, t) {
  return { $$typeof: re, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Je(e) {
  return typeof e == "object" && e !== null && e.$$typeof === re;
}
function gn(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var bt = /\/+/g;
function De(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? gn("" + e.key) : t.toString(36);
}
function we(e, t, r, a, n) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case re:
          case Mt:
            o = !0;
        }
    }
  if (o)
    return o = e, n = n(o), e = a === "" ? "." + De(o, 0) : a, Array.isArray(n) ? (r = "", e != null && (r = e.replace(bt, "$&/") + "/"), we(n, t, r, "", function(f) {
      return f;
    })) : n != null && (Je(n) && (n = pn(n, r + (!n.key || o && o.key === n.key ? "" : ("" + n.key).replace(bt, "$&/") + "/") + e)), t.push(n)), 1;
  if (o = 0, a = a === "" ? "." : a + ":", Array.isArray(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = a + De(i, s);
      o += we(i, t, r, u, n);
    }
  else if (u = ln(e), typeof u == "function")
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, u = a + De(i, s++), o += we(i, t, r, u, n);
  else if (i === "object")
    throw t = "" + e, Error(le(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return o;
}
function Oe(e, t, r) {
  if (e == null)
    return e;
  var a = [], n = 0;
  return we(e, a, "", "", function(i) {
    return t.call(r, i, n++);
  }), a;
}
function dn(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), e._status = 0, e._result = t, t.then(function(r) {
      e._status === 0 && (r = r.default, e._status = 1, e._result = r);
    }, function(r) {
      e._status === 0 && (e._status = 2, e._result = r);
    });
  }
  if (e._status === 1)
    return e._result;
  throw e._result;
}
var Xt = { current: null };
function B() {
  var e = Xt.current;
  if (e === null)
    throw Error(le(321));
  return e;
}
var hn = { ReactCurrentDispatcher: Xt, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: He, IsSomeRendererActing: { current: !1 }, assign: ze };
x.Children = { map: Oe, forEach: function(e, t, r) {
  Oe(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return Oe(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Oe(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Je(e))
    throw Error(le(143));
  return e;
} };
x.Component = ne;
x.PureComponent = Be;
x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hn;
x.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error(le(267, e));
  var a = ze({}, e.props), n = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = He.current), t.key !== void 0 && (n = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (u in t)
      Gt.call(t, u) && !Qt.hasOwnProperty(u) && (a[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1)
    a.children = r;
  else if (1 < u) {
    s = Array(u);
    for (var f = 0; f < u; f++)
      s[f] = arguments[f + 2];
    a.children = s;
  }
  return {
    $$typeof: re,
    type: e.type,
    key: n,
    ref: i,
    props: a,
    _owner: o
  };
};
x.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: Bt, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: zt, _context: e }, e.Consumer = e;
};
x.createElement = Zt;
x.createFactory = function(e) {
  var t = Zt.bind(null, e);
  return t.type = e, t;
};
x.createRef = function() {
  return { current: null };
};
x.forwardRef = function(e) {
  return { $$typeof: Vt, render: e };
};
x.isValidElement = Je;
x.lazy = function(e) {
  return { $$typeof: Jt, _payload: { _status: -1, _result: e }, _init: dn };
};
x.memo = function(e, t) {
  return { $$typeof: Ht, type: e, compare: t === void 0 ? null : t };
};
x.useCallback = function(e, t) {
  return B().useCallback(e, t);
};
x.useContext = function(e, t) {
  return B().useContext(e, t);
};
x.useDebugValue = function() {
};
x.useEffect = function(e, t) {
  return B().useEffect(e, t);
};
x.useImperativeHandle = function(e, t, r) {
  return B().useImperativeHandle(e, t, r);
};
x.useLayoutEffect = function(e, t) {
  return B().useLayoutEffect(e, t);
};
x.useMemo = function(e, t) {
  return B().useMemo(e, t);
};
x.useReducer = function(e, t, r) {
  return B().useReducer(e, t, r);
};
x.useRef = function(e) {
  return B().useRef(e);
};
x.useState = function(e) {
  return B().useState(e);
};
x.version = "17.0.2";
(function(e) {
  e.exports = x;
})(P);
const vn = /* @__PURE__ */ pr(P.exports), da = /* @__PURE__ */ lr({
  __proto__: null,
  default: vn
}, [P.exports]);
var mn = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
}, yn = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ot(e) {
  var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, r = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (r && (t.name = r[1], (mn[r[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var a = e.indexOf("-->");
    return { type: "comment", comment: a !== -1 ? e.slice(4, a) : "" };
  }
  for (var n = new RegExp(yn), i = null; (i = n.exec(e)) !== null; )
    if (i[0].trim())
      if (i[1]) {
        var o = i[1].trim(), s = [o, ""];
        o.indexOf("=") > -1 && (s = o.split("=")), t.attrs[s[0]] = s[1], n.lastIndex--;
      } else
        i[2] && (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
  return t;
}
var bn = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, On = /^\s*$/, Sn = /* @__PURE__ */ Object.create(null);
function er(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(r) {
        var a = [];
        for (var n in r)
          a.push(n + '="' + r[n] + '"');
        return a.length ? " " + a.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(er, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var wn = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = Sn);
  var r, a = [], n = [], i = -1, o = !1;
  if (e.indexOf("<") !== 0) {
    var s = e.indexOf("<");
    a.push({ type: "text", content: s === -1 ? e : e.substring(0, s) });
  }
  return e.replace(bn, function(u, f) {
    if (o) {
      if (u !== "</" + r.name + ">")
        return;
      o = !1;
    }
    var l, c = u.charAt(1) !== "/", p = u.startsWith("<!--"), g = f + u.length, m = e.charAt(g);
    if (p) {
      var O = Ot(u);
      return i < 0 ? (a.push(O), a) : ((l = n[i]).children.push(O), a);
    }
    if (c && (i++, (r = Ot(u)).type === "tag" && t.components[r.name] && (r.type = "component", o = !0), r.voidElement || o || !m || m === "<" || r.children.push({ type: "text", content: e.slice(g, e.indexOf("<", g)) }), i === 0 && a.push(r), (l = n[i - 1]) && l.children.push(r), n[i] = r), (!c || r.voidElement) && (i > -1 && (r.voidElement || r.name === u.slice(2, -1)) && (i--, r = i === -1 ? a : n[i]), !o && m !== "<" && m)) {
      l = i === -1 ? a : n[i].children;
      var v = e.indexOf("<", g), h = e.slice(g, v === -1 ? void 0 : v);
      On.test(h) && (h = " "), (v > -1 && i + l.length >= 0 || h !== " ") && l.push({ type: "text", content: h });
    }
  }), a;
}, stringify: function(e) {
  return e.reduce(function(t, r) {
    return t + er("", r);
  }, "");
} };
function je() {
  if (console && console.warn) {
    for (var e, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
      r[a] = arguments[a];
    typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])), (e = console).warn.apply(e, r);
  }
}
var St = {};
function ke() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  typeof t[0] == "string" && St[t[0]] || (typeof t[0] == "string" && (St[t[0]] = new Date()), je.apply(void 0, t));
}
var tr = function(t, r) {
  return function() {
    if (t.isInitialized)
      r();
    else {
      var a = function n() {
        setTimeout(function() {
          t.off("initialized", n);
        }, 0), r();
      };
      t.on("initialized", a);
    }
  };
};
function wt(e, t, r) {
  e.loadNamespaces(t, tr(e, r));
}
function jt(e, t, r, a) {
  typeof r == "string" && (r = [r]), r.forEach(function(n) {
    e.options.ns.indexOf(n) < 0 && e.options.ns.push(n);
  }), e.loadLanguages(t, tr(e, a));
}
function jn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = t.languages[0], n = t.options ? t.options.fallbackLng : !1, i = t.languages[t.languages.length - 1];
  if (a.toLowerCase() === "cimode")
    return !0;
  var o = function(u, f) {
    var l = t.services.backendConnector.state["".concat(u, "|").concat(f)];
    return l === -1 || l === 2;
  };
  return r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !o(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(a, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || o(a, e) && (!n || o(i, e)));
}
function xn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!t.languages || !t.languages.length)
    return ke("i18n.languages were undefined or empty", t.languages), !0;
  var a = t.options.ignoreJSONStructure !== void 0;
  return a ? t.hasLoadedNamespace(e, {
    lng: r.lng,
    precheck: function(i, o) {
      if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !o(i.isLanguageChangingTo, e))
        return !1;
    }
  }) : jn(e, t, r);
}
function rr(e) {
  return e.displayName || e.name || (typeof e == "string" && e.length > 0 ? e : "Unknown");
}
var Pn = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, kn = {
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
  "&#8230;": "\u2026",
  "&#x2F;": "/",
  "&#47;": "/"
}, Ln = function(t) {
  return kn[t];
}, Nn = function(t) {
  return t.replace(Pn, Ln);
};
function xt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
var Ke = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Nn
};
function nr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Ke = Pt(Pt({}, Ke), e);
}
function We() {
  return Ke;
}
var ar;
function ir(e) {
  ar = e;
}
function ae() {
  return ar;
}
var Rn = ["format"], En = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];
function kt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Fe(e, t) {
  if (!e)
    return !1;
  var r = e.props ? e.props.children : e.children;
  return t ? r.length > 0 : !!r;
}
function $e(e) {
  return e ? e.props ? e.props.children : e.children : [];
}
function _n(e) {
  return Object.prototype.toString.call(e) !== "[object Array]" ? !1 : e.every(function(t) {
    return P.exports.isValidElement(t);
  });
}
function fe(e) {
  return Array.isArray(e) ? e : [e];
}
function Cn(e, t) {
  var r = R({}, t);
  return r.props = Object.assign(e.props, t.props), r;
}
function or(e, t) {
  if (!e)
    return "";
  var r = "", a = fe(e), n = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return a.forEach(function(i, o) {
    if (typeof i == "string")
      r += "".concat(i);
    else if (P.exports.isValidElement(i)) {
      var s = Object.keys(i.props).length, u = n.indexOf(i.type) > -1, f = i.props.children;
      if (!f && u && s === 0)
        r += "<".concat(i.type, "/>");
      else if (!f && (!u || s !== 0))
        r += "<".concat(o, "></").concat(o, ">");
      else if (i.props.i18nIsDynamicList)
        r += "<".concat(o, "></").concat(o, ">");
      else if (u && s === 1 && typeof f == "string")
        r += "<".concat(i.type, ">").concat(f, "</").concat(i.type, ">");
      else {
        var l = or(f, t);
        r += "<".concat(o, ">").concat(l, "</").concat(o, ">");
      }
    } else if (i === null)
      je("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (E(i) === "object") {
      var c = i.format, p = G(i, Rn), g = Object.keys(p);
      if (g.length === 1) {
        var m = c ? "".concat(g[0], ", ").concat(c) : g[0];
        r += "{{".concat(m, "}}");
      } else
        je("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", i);
    } else
      je("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", i);
  }), r;
}
function In(e, t, r, a, n, i) {
  if (t === "")
    return [];
  var o = a.transKeepBasicHtmlNodesFor || [], s = t && new RegExp(o.join("|")).test(t);
  if (!e && !s)
    return [t];
  var u = {};
  function f(v) {
    var h = fe(v);
    h.forEach(function(d) {
      typeof d != "string" && (Fe(d) ? f($e(d)) : E(d) === "object" && !P.exports.isValidElement(d) && Object.assign(u, d));
    });
  }
  f(e);
  var l = wn.parse("<0>".concat(t, "</0>")), c = R(R({}, u), n);
  function p(v, h, d) {
    var y = $e(v), S = m(y, h.children, d);
    return _n(y) && S.length === 0 ? y : S;
  }
  function g(v, h, d, y, S) {
    v.dummy && (v.children = h), d.push(P.exports.cloneElement(v, R(R({}, v.props), {}, {
      key: y
    }), S ? void 0 : h));
  }
  function m(v, h, d) {
    var y = fe(v), S = fe(h);
    return S.reduce(function(w, b, k) {
      var N = b.children && b.children[0] && b.children[0].content && r.services.interpolator.interpolate(b.children[0].content, c, r.language);
      if (b.type === "tag") {
        var L = y[parseInt(b.name, 10)];
        !L && d.length === 1 && d[0][b.name] && (L = d[0][b.name]), L || (L = {});
        var j = Object.keys(b.attrs).length !== 0 ? Cn({
          props: b.attrs
        }, L) : L, T = P.exports.isValidElement(j), V = T && Fe(b, !0) && !b.voidElement, Re = s && E(j) === "object" && j.dummy && !T, H = E(e) === "object" && e !== null && Object.hasOwnProperty.call(e, b.name);
        if (typeof j == "string") {
          var ge = r.services.interpolator.interpolate(j, c, r.language);
          w.push(ge);
        } else if (Fe(j) || V) {
          var Q = p(j, b, d);
          g(j, Q, w, k);
        } else if (Re) {
          var Y = m(y, b.children, d);
          w.push(P.exports.cloneElement(j, R(R({}, j.props), {}, {
            key: k
          }), Y));
        } else if (Number.isNaN(parseFloat(b.name)))
          if (H) {
            var de = p(j, b, d);
            g(j, de, w, k, b.voidElement);
          } else if (a.transSupportBasicHtmlNodes && o.indexOf(b.name) > -1)
            if (b.voidElement)
              w.push(P.exports.createElement(b.name, {
                key: "".concat(b.name, "-").concat(k)
              }));
            else {
              var ie = m(y, b.children, d);
              w.push(P.exports.createElement(b.name, {
                key: "".concat(b.name, "-").concat(k)
              }, ie));
            }
          else if (b.voidElement)
            w.push("<".concat(b.name, " />"));
          else {
            var Ee = m(y, b.children, d);
            w.push("<".concat(b.name, ">").concat(Ee, "</").concat(b.name, ">"));
          }
        else if (E(j) === "object" && !T) {
          var J = b.children[0] ? N : null;
          J && w.push(J);
        } else
          b.children.length === 1 && N ? w.push(P.exports.cloneElement(j, R(R({}, j.props), {}, {
            key: k
          }), N)) : w.push(P.exports.cloneElement(j, R(R({}, j.props), {}, {
            key: k
          })));
      } else if (b.type === "text") {
        var he = a.transWrapTextNodes, ve = i ? a.unescape(r.services.interpolator.interpolate(b.content, c, r.language)) : r.services.interpolator.interpolate(b.content, c, r.language);
        he ? w.push(P.exports.createElement(he, {
          key: "".concat(b.name, "-").concat(k)
        }, ve)) : w.push(ve);
      }
      return w;
    }, []);
  }
  var O = m([{
    dummy: !0,
    children: e || []
  }], l, fe(e || []));
  return $e(O[0]);
}
function sr(e) {
  var t = e.children, r = e.count, a = e.parent, n = e.i18nKey, i = e.context, o = e.tOptions, s = o === void 0 ? {} : o, u = e.values, f = e.defaults, l = e.components, c = e.ns, p = e.i18n, g = e.t, m = e.shouldUnescape, O = G(e, En), v = p || ae();
  if (!v)
    return ke("You will need to pass in an i18next instance by using i18nextReactModule"), t;
  var h = g || v.t.bind(v) || function(V) {
    return V;
  };
  i && (s.context = i);
  var d = R(R({}, We()), v.options && v.options.react), y = c || h.ns || v.options && v.options.defaultNS;
  y = typeof y == "string" ? [y] : y || ["translation"];
  var S = f || or(t, d) || d.transEmptyNodeValue || n, w = d.hashTransKey, b = n || (w ? w(S) : S), k = u ? s.interpolation : {
    interpolation: R(R({}, s.interpolation), {}, {
      prefix: "#$?",
      suffix: "?$#"
    })
  }, N = R(R(R(R({}, s), {}, {
    count: r
  }, u), k), {}, {
    defaultValue: S,
    ns: y
  }), L = b ? h(b, N) : S, j = In(l || t, L, v, d, N, m), T = a !== void 0 ? a : d.defaultTransParent;
  return T ? P.exports.createElement(T, O, j) : j;
}
var Tn = {
  type: "3rdParty",
  init: function(t) {
    nr(t.options.react), ir(t);
  }
};
function Lt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
var pe = P.exports.createContext(), Dn = function() {
  function e() {
    D(this, e), this.usedNamespaces = {};
  }
  return F(e, [{
    key: "addUsedNamespaces",
    value: function(r) {
      var a = this;
      r.forEach(function(n) {
        a.usedNamespaces[n] || (a.usedNamespaces[n] = !0);
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function() {
      return Object.keys(this.usedNamespaces);
    }
  }]), e;
}();
function ur(e) {
  return function(t) {
    return new Promise(function(r) {
      var a = fr();
      e.getInitialProps ? e.getInitialProps(t).then(function(n) {
        r(Nt(Nt({}, n), a));
      }) : r(a);
    });
  };
}
function fr() {
  var e = ae(), t = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [], r = {}, a = {};
  return e.languages.forEach(function(n) {
    a[n] = {}, t.forEach(function(i) {
      a[n][i] = e.getResourceBundle(n, i) || {};
    });
  }), r.initialI18nStore = a, r.initialLanguage = e.language, r;
}
var Fn = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];
function Rt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function $n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rt(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rt(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function An(e) {
  var t = e.children, r = e.count, a = e.parent, n = e.i18nKey, i = e.context, o = e.tOptions, s = o === void 0 ? {} : o, u = e.values, f = e.defaults, l = e.components, c = e.ns, p = e.i18n, g = e.t, m = e.shouldUnescape, O = G(e, Fn), v = P.exports.useContext(pe) || {}, h = v.i18n, d = v.defaultNS, y = p || h || ae(), S = g || y && y.t.bind(y);
  return sr($n({
    children: t,
    count: r,
    parent: a,
    i18nKey: n,
    context: i,
    tOptions: s,
    values: u,
    defaults: f,
    components: l,
    ns: c || S && S.ns || d || y && y.options && y.options.defaultNS,
    i18n: y,
    t: g,
    shouldUnescape: m
  }, O));
}
function Un(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var a, n, i, o, s = [], u = !0, f = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (a = i.call(r)).done) && (s.push(a.value), s.length !== t); u = !0)
          ;
    } catch (l) {
      f = !0, n = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (f)
          throw n;
      }
    }
    return s;
  }
}
function Ne(e, t) {
  return Tt(e) || Un(e, t) || Dt(e, t) || Ft();
}
const ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" }));
function Et(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Et(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Et(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
var Kn = function(t, r) {
  var a = P.exports.useRef();
  return P.exports.useEffect(function() {
    a.current = r ? a.current : t;
  }, [t, r]), a.current;
};
function qe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.i18n, a = P.exports.useContext(pe) || {}, n = a.i18n, i = a.defaultNS, o = r || n || ae();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Dn()), !o) {
    ke("You will need to pass in an i18next instance by using initReactI18next");
    var s = function(L, j) {
      return typeof j == "string" ? j : j && E(j) === "object" && typeof j.defaultValue == "string" ? j.defaultValue : Array.isArray(L) ? L[L.length - 1] : L;
    }, u = [s, {}, !1];
    return u.t = s, u.i18n = {}, u.ready = !1, u;
  }
  o.options.react && o.options.react.wait !== void 0 && ke("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  var f = Ae(Ae(Ae({}, We()), o.options.react), t), l = f.useSuspense, c = f.keyPrefix, p = e || i || o.options && o.options.defaultNS;
  p = typeof p == "string" ? [p] : p || ["translation"], o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(p);
  var g = (o.isInitialized || o.initializedStoreOnce) && p.every(function(N) {
    return xn(N, o, f);
  });
  function m() {
    return o.getFixedT(t.lng || null, f.nsMode === "fallback" ? p : p[0], c);
  }
  var O = P.exports.useState(m), v = Ne(O, 2), h = v[0], d = v[1], y = p.join();
  t.lng && (y = "".concat(t.lng).concat(y));
  var S = Kn(y), w = P.exports.useRef(!0);
  P.exports.useEffect(function() {
    var N = f.bindI18n, L = f.bindI18nStore;
    w.current = !0, !g && !l && (t.lng ? jt(o, t.lng, p, function() {
      w.current && d(m);
    }) : wt(o, p, function() {
      w.current && d(m);
    })), g && S && S !== y && w.current && d(m);
    function j() {
      w.current && d(m);
    }
    return N && o && o.on(N, j), L && o && o.store.on(L, j), function() {
      w.current = !1, N && o && N.split(" ").forEach(function(T) {
        return o.off(T, j);
      }), L && o && L.split(" ").forEach(function(T) {
        return o.store.off(T, j);
      });
    };
  }, [o, y]);
  var b = P.exports.useRef(!0);
  P.exports.useEffect(function() {
    w.current && !b.current && d(m), b.current = !1;
  }, [o, c]);
  var k = [h, o, g];
  if (k.t = h, k.i18n = o, k.ready = g, g || !g && !l)
    return k;
  throw new Promise(function(N) {
    t.lng ? jt(o, t.lng, p, function() {
      return N();
    }) : wt(o, p, function() {
      return N();
    });
  });
}
var Mn = ["forwardedRef"];
function _t(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _t(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _t(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function zn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(a) {
    function n(o) {
      var s = o.forwardedRef, u = G(o, Mn), f = qe(e, Se(Se({}, u), {}, {
        keyPrefix: t.keyPrefix
      })), l = Ne(f, 3), c = l[0], p = l[1], g = l[2], m = Se(Se({}, u), {}, {
        t: c,
        i18n: p,
        tReady: g
      });
      return t.withRef && s ? m.ref = s : !t.withRef && s && (m.forwardedRef = s), P.exports.createElement(a, m);
    }
    n.displayName = "withI18nextTranslation(".concat(rr(a), ")"), n.WrappedComponent = a;
    var i = function(s, u) {
      return P.exports.createElement(n, Object.assign({}, s, {
        forwardedRef: u
      }));
    };
    return t.withRef ? P.exports.forwardRef(i) : n;
  };
}
var Bn = ["ns", "children"];
function Vn(e) {
  var t = e.ns, r = e.children, a = G(e, Bn), n = qe(t, a), i = Ne(n, 3), o = i[0], s = i[1], u = i[2];
  return r(o, {
    i18n: s,
    lng: s.language
  }, u);
}
function Hn(e) {
  var t = e.i18n, r = e.defaultNS, a = e.children, n = P.exports.useMemo(function() {
    return {
      i18n: t,
      defaultNS: r
    };
  }, [t, r]);
  return P.exports.createElement(pe.Provider, {
    value: n
  }, a);
}
function cr(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = r.i18n, n = P.exports.useContext(pe) || {}, i = n.i18n, o = a || i || ae();
  o.options && o.options.isClone || (e && !o.initializedStoreOnce && (o.services.resourceStore.data = e, o.options.ns = Object.values(e).reduce(function(s, u) {
    return Object.keys(u).forEach(function(f) {
      s.indexOf(f) < 0 && s.push(f);
    }), s;
  }, o.options.ns), o.initializedStoreOnce = !0, o.isInitialized = !0), t && !o.initializedLanguageOnce && (o.changeLanguage(t), o.initializedLanguageOnce = !0));
}
var Jn = ["initialI18nStore", "initialLanguage"];
function Ct(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ct(Object(r), !0).forEach(function(a) {
      _(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ct(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function qn() {
  return function(t) {
    function r(a) {
      var n = a.initialI18nStore, i = a.initialLanguage, o = G(a, Jn);
      return cr(n, i), P.exports.createElement(t, Wn({}, o));
    }
    return r.getInitialProps = ur(t), r.displayName = "withI18nextSSR(".concat(rr(t), ")"), r.WrappedComponent = t, r;
  };
}
var Yn = function() {
  return "";
}, Gn = function() {
  return "";
}, Qn = function() {
  return "";
}, Zn = function() {
  return "";
}, Xn = function() {
  return "";
}, ea = function() {
  return "";
};
const va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  date: Yn,
  time: Gn,
  number: Qn,
  select: Zn,
  plural: Xn,
  selectOrdinal: ea,
  Trans: An,
  TransWithoutContext: sr,
  useTranslation: qe,
  withTranslation: zn,
  Translation: Vn,
  I18nextProvider: Hn,
  withSSR: qn,
  useSSR: cr,
  initReactI18next: Tn,
  setDefaults: nr,
  getDefaults: We,
  setI18n: ir,
  getI18n: ae,
  I18nContext: pe,
  composeInitialProps: ur,
  getInitialProps: fr
}, Symbol.toStringTag, { value: "Module" }));
export {
  ca as A,
  ha as B,
  oa as C,
  la as D,
  ua as E,
  fa as F,
  sa as G,
  Hn as I,
  vn as R,
  An as T,
  _,
  ra as a,
  ga as b,
  ta as c,
  na as d,
  ia as e,
  Ue as f,
  pr as g,
  et as h,
  dr as i,
  Dt as j,
  aa as k,
  I as l,
  E as m,
  G as n,
  cn as o,
  Ne as p,
  F as q,
  P as r,
  z as s,
  Kt as t,
  qe as u,
  D as v,
  Tn as w,
  da as x,
  pa as y,
  va as z
};
