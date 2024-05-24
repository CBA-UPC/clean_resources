var bg_a;
var bg_aa = bg_aa || {},
    bg_b = this;


function bg_ba(a, b) {
    for (var c = a.split("."), d = b || bg_b, e; e = c.shift();)
        if (null != d[e]) d = d[e];
        else return null;
    return d
}

function bg_d() {}


function bg_f(a) {
    return "array" == bg_e(a)
}



function bg_ca(a) {
    return "number" == typeof a
}



var bg_ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
    bg_fa = 0;




var bg_l = Date.now || 

function bg_m(a, b) {
    var c = a.split("."),
        d = bg_b;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());) !c.length && bg_c(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
}



var bg_ja = 0,
    bg_ka = {};
bg_o.prototype.u = !1;
bg_o.prototype.J = function() {
    if (!this.u && (this.u = !0, this.s(), 0 != bg_ja)) {
        var a = bg_da(this);
        delete bg_ka[a]
    }
};

function bg_p(a, b) {
    var c = bg_ia(bg_la, b);
    a.u ? bg_c(void 0) ? c.call(void 0) : c() : (a.w || (a.w = []), a.w.push(bg_c(void 0) ? bg_k(c, void 0) : c))
}
bg_o.prototype.s = 


var bg_ma;
var bg_na = String.prototype.trim ? : 

var bg_qa = /&/g,
    bg_ra = /</g,
    bg_sa = />/g,
    bg_ta = /"/g,
    bg_ua = /'/g,
    bg_va = /\x00/g,
    bg_pa = /[\x00&<>"']/;





var bg_s = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : 
    bg_ya = Array.prototype.lastIndexOf ? : function(a, b, c) {
        c = null == c ? a.length - 1 : c;
        0 > c && (c = Math.max(0, a.length + c));
        if (bg_h(a)) return bg_h(b) && 1 == b.length ? a.lastIndexOf(b,
            c) : -1;
        for (; 0 <= c; c--)
            if (c in a && a[c] === b) return c;
        return -1
    },
    bg_t = Array.prototype.forEach ? : 
    bg_za = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    } : 
    bg_Aa = Array.prototype.some ? function(a,
        b, c) {
        return Array.prototype.some.call(a, b, c)
    } : 
    bg_Ba = Array.prototype.every ? : 

function bg_Ca(a) {
    if (!bg_f(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0
}




var bg_u;
a: {
    var bg_Ga = bg_b.navigator;
    if (bg_Ga) {
        var bg_Ha = bg_Ga.userAgent;
        if (bg_Ha) {
            bg_u = bg_Ha;
            break a
        }
    }
    bg_u = ""
};
var bg_v = {
    is: 
    forEach: 
    filter: 
    map: 
    some: 
    every: 
    i: 
    Qb: 
    Rb: 
    contains: 
    j: 
    m: 
    oc: function(a, b) {
        for (var c = bg_g(b), d = c ? b : arguments, c = c ? 0 : 1; c < d.length && (a = a[d[c]], bg_c(a)); c++);
        return a
    },
    D: 
    I: 
    ib: 
    Ob: function(a, b, c) {
        return (b =
            bg_v.ib(a, b, c)) && a[b]
    },
    B: 
    clear: 
    remove: 
    add: function(a, b, c) {
        if (a && b in a) throw Error('The object already contains the key "' + b + '"');
        bg_v.set(a, b, c)
    },
    get: function(a, b, c) {
        return a && b in a ? a[b] : c
    },
    set: 
    Ic: 
    Rc: 
    qa: 
    clone: 
    Bb: function(a) {
        var b = bg_e(a);
        if ("object" == b || "array" == b) {
            if (bg_i(a.clone)) return a.clone();
            var b = "array" == b ? [] : {},
                c;
            for (c in a) b[c] = bg_v.Bb(a[c]);
            return b
        }
        return a
    },
    Ab: 
    Aa: "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    extend: function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d =
                arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < bg_v.Aa.length; f++) c = bg_v.Aa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    },
    create: function(a) {
        var b = arguments.length;
        if (1 == b && bg_f(arguments[0])) return bg_v.create.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    },
    Z: function(a) {
        var b = arguments.length;
        if (1 == b && bg_f(arguments[0])) return bg_v.Z.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    },
    Kb: 
    vc: 
    Pb: function(a, b) {
        if (!a) return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return bg_v.m(a);
        for (var c = {}, d = a; d && (d !== Object.prototype || b);) {
            for (var e = Object.getOwnPropertyNames(d), f = 0; f < e.length; f++) c[e[f]] = !0;
            d = Object.getPrototypeOf(d)
        }
        return bg_v.m(c)
    }
};

bg_Ia[" "] = bg_d;


var bg_w = bg_q(bg_u, "Opera"),
    bg_x = bg_q(bg_u, "Trident") || bg_q(bg_u, "MSIE"),
    bg_Ka = bg_q(bg_u, "Edge"),
    bg_y = bg_q(bg_u, "Gecko") && !(bg_q(bg_u.toLowerCase(), "webkit") && !bg_q(bg_u, "Edge")) && !(bg_q(bg_u, "Trident") || bg_q(bg_u, "MSIE")) && !bg_q(bg_u, "Edge"),
    bg_z = bg_q(bg_u.toLowerCase(), "webkit") && !bg_q(bg_u, "Edge");

var bg_Ma;
a: {
    var bg_Na = "",
        bg_Oa = );bg_Oa && (bg_Na = bg_Oa ? bg_Oa[1] : "");
    if (bg_x) {
        var bg_Pa = bg_La();
        if (null != bg_Pa && bg_Pa > parseFloat(bg_Na)) {
            bg_Ma = String(bg_Pa);
            break a
        }
    }
    bg_Ma = bg_Na
}
var bg_Qa = {};

function bg_A(a) {
    if (Object.prototype.hasOwnProperty.call(bg_Qa, a)) a = bg_Qa[a];
    else {
        for (var b = 0, c = bg_na(String(bg_Ma)).split("."), d = bg_na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; !b && f < e; f++) {
            var g = c[f] || "",
                h = d[f] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                b = bg_wa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || bg_wa(0 == g[2].length, 0 == h[2].length) || bg_wa(g[2], h[2]);
                g = g[3];
                h =
                    h[3]
            } while (!b)
        }
        a = bg_Qa[a] = 0 <= b
    }
    return a
}
var bg_B;
var bg_Ra = bg_b.document;
bg_B = bg_Ra && bg_x ? bg_La() || ("CSS1Compat" == bg_Ra.compatMode ? parseInt(bg_Ma, 10) : 5) : void 0;
var bg_Sa = !bg_x || 9 <= Number(bg_B);
var bg_Ta = bg_v.Z("area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr");

function bg_C() {
    this.a = bg_Ua
}
bg_C.prototype.K = !0;
bg_C.prototype.H = function() {
    return ""
};
bg_C.prototype.toString = function() {
    return "Const{}"
};

function bg_Va(a) {
    return a instanceof bg_C && a.constructor === bg_C && a.a === bg_Ua ? "" : "type_error:Const"
}
var bg_Ua = {};

function bg_D() {
    this.a = "";
    this.b = bg_Wa
}
bg_D.prototype.K = !0;
var bg_Wa = {};
bg_D.prototype.H = function() {
    return this.a
};

function bg_Xa(a) {
    var b = new bg_D;
    b.a = a;
    return b
}
var bg_Ya = bg_Xa("");
bg_D.create = function(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        if (null != d) {
            if (d instanceof bg_C) d = bg_Va(d);
            else if (bg_Za.test(d)) {
                for (var e = !0, f = !0, g = 0; g < d.length; g++) {
                    var h = d.charAt(g);
                    "'" == h && f ? e = !e : '"' == h && e && (f = !f)
                }
                e && f || (d = "zClosurez")
            } else d = "zClosurez";
            b += c + ":" + d + ";"
        }
    }
    return b ? bg_Xa(b) : bg_Ya
};
var bg_Za = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;

function bg_E() {
    this.a = "";
    this.b = bg__a
}
bg_E.prototype.K = !0;
var bg__a = {};
bg_E.prototype.H = function() {
    return this.a
};

function bg_0a(a) {
    var b = new bg_E;
    b.a = a;
    return b
}
bg_0a("");

bg_F.prototype.K = !0;
bg_F.prototype.H = function() {
    return this.a
};
bg_F.prototype.va = !0;
bg_F.prototype.R = function() {
    return 1
};
var bg_2a = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
    bg_1a = {};

bg_3a("about:blank");

bg_G.prototype.K = !0;
bg_G.prototype.H = function() {
    return ""
};
bg_G.prototype.va = !0;
bg_G.prototype.R = 
var bg_4a = {};

bg_H.prototype.va = !0;
bg_H.prototype.R = function() {
    return this.b
};
bg_H.prototype.K = !0;
bg_H.prototype.H = function() {
    return this.a
};

var bg_7a = /^[a-zA-Z0-9-]+$/,
    bg_8a = bg_v.Z("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"),
    bg_9a = bg_v.Z("APPLET", "BASE", "EMBED", "IFRAME", "LINK", "MATH", "META", "OBJECT", "SCRIPT", "STYLE", "SVG", "TEMPLATE");
bg_H.create = function(a, b, c) {
    var d = String(a);
    if (!bg_7a.test(d)) throw Error("Invalid tag name \x3c" + d + "\x3e.");
    if (d.toUpperCase() in bg_9a) throw Error("Tag name \x3c" + d + "\x3e is not allowed for SafeHtml.");
    a = String(a);
    var d = null,
        e, f = "\x3c" + a,
        g = "";
    if (b)
        for (e in b) {
            if (!bg_7a.test(e)) throw Error('Invalid attribute name "' + e + '".');
            var h = b[e];
            if (null != h) {
                var k, l = a;
                k = e;
                if (h instanceof bg_C) h = bg_Va(h);
                else if ("style" == k.toLowerCase()) {
                    if (!bg_j(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                        typeof h + " given: " + h);
                    h instanceof bg_D || (h = bg_D.create(h));
                    h instanceof bg_D && h.constructor === bg_D && h.b === bg_Wa ? h = h.a : (bg_e(h), h = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + h + '" given.');
                    if (k.toLowerCase() in bg_8a)
                        if (h instanceof bg_G) h instanceof bg_G && h.constructor === bg_G && h.a === bg_4a ? h = "" : (bg_e(h), h = "type_error:TrustedResourceUrl");
                        else if (h instanceof bg_F) h instanceof bg_F && h.constructor === bg_F && h.b === bg_1a ? h = h.a : (bg_e(h),
                        h = "type_error:SafeUrl");
                    else if (bg_h(h)) h instanceof bg_F || (h = h.K ? h.H() : String(h), bg_2a.test(h) || (h = "about:invalid#zClosurez"), h = bg_3a(h)), h = h.H();
                    else throw Error('Attribute "' + k + '" on tag "' + l + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + h + '" given.');
                }
                h.K && (h = h.H());
                k = k + '\x3d"' + bg_oa(String(h)) + '"';
                g += " " + k
            }
        }
    e = f + g;
    null != c ? bg_f(c) || (c = [c]) : c = [];
    !0 === bg_Ta[a.toLowerCase()] ? e += "\x3e" : (c = bg_$a(c), e += "\x3e" + bg_6a(c) + "\x3c/" + a + "\x3e", d = c.R());
    (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ?
        d = 0 : d = null);
    return bg_I(e, d)
};

function bg_$a(a) {
    function b(a) {
        if (bg_f(a)) bg_t(a, b);
        else {
            var e;
            a instanceof bg_H ? e = a : (e = null, a.va && (e = a.R()), a = bg_oa(a.K ? a.H() : String(a)), e = bg_I(a, e));
            d += bg_6a(e);
            e = e.R();
            0 == c ? c = e : 0 != e && c != e && (c = null)
        }
    }
    var c = 0,
        d = "";
    bg_t(arguments, b);
    return bg_I(d, c)
}
var bg_5a = {};

bg_I("\x3c!DOCTYPE html\x3e", 0);
bg_I("", 0);
bg_I("\x3cbr\x3e", 0);

bg_a = bg_J.prototype;
bg_a.clone = function() {
    return new bg_J(this.x, this.y)
};
bg_a.qa = 

bg_a.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
bg_a.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
bg_a.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function bg_K(a, b) {
    this.width = a;
    this.height = b
}
bg_a = bg_K.prototype;
bg_a.clone = function() {
    return new bg_K(this.width, this.height)
};
bg_a.B = 
bg_a.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
bg_a.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
bg_a.round = 

var bg_bb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};






function bg_fb(a, b) {
    var c = String(b[0]),
        d = b[1];
    if (!bg_Sa && d && (d.name || d.type)) {
        c = ["\x3c", c];
        d.name && c.push(' name\x3d"', bg_oa(d.name), '"');
        if (d.type) {
            c.push(' type\x3d"', bg_oa(d.type), '"');
            var e = {};
            bg_v.extend(e, d);
            delete e.type;
            d = e
        }
        c.push("\x3e");
        c = c.join("")
    }
    var f = a.createElement(c);
    d && (bg_h(d) ? f.className = d : bg_f(d) ? f.className = d.join(" ") : bg_v.forEach(d, function(a, b) {
        "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : bg_bb.hasOwnProperty(b) ? f.setAttribute(bg_bb[b], a) : b.lastIndexOf("aria-",
            0) && b.lastIndexOf("data-", 0) ? f[b] = a : f.setAttribute(b, a)
    }));
    if (2 < b.length)
        for (d = function(b) {
                b && f.appendChild(bg_h(b) ? a.createTextNode(b) : b)
            }, c = 2; c < b.length; c++)
            if (e = b[c], !bg_g(e) || bg_j(e) && 0 < e.nodeType) d(e);
            else {
                var g;
                a: {
                    if ((g = e) && "number" == typeof g.length) {
                        if (bg_j(g)) {
                            g = "function" == typeof g.item || "string" == typeof g.item;
                            break a
                        }
                        if (bg_i(g)) {
                            g = "function" == typeof g.item;
                            break a
                        }
                    }
                    g = !1
                }
                bg_t(g ? bg_Fa(e) : e, d)
            } return f
}





bg_a = bg_M.prototype;
bg_a.F = function(a) {
    return bg_h(a) ? this.a.getElementById(a) : a
};
bg_a.getElementsByTagName = 

function bg_ib(a, b) {
    var c;
    c = a.a;
    var d = b && "*" != b ? String(b).toUpperCase() : "";
    c.querySelectorAll && c.querySelector && d ? c = c.querySelectorAll(d + "") : c = c.getElementsByTagName(d || "*");
    return c
}
bg_a.Fa = 
bg_a.appendChild = 
bg_a.canHaveChildren = 
bg_a.removeNode = bg_gb;
bg_a.contains = bg_hb;
var bg_jb = !bg_x || 9 <= Number(bg_B),
    bg_kb = bg_x && !bg_A("9");

bg_R.prototype.c = 

function bg_S(a, b) {
    bg_R.call(this, a ? a.type : "");
    this.a = this.target = null;
    this.clientY = this.clientX = 0;
    this.b = null;
    if (a) {
        this.type = a.type;
        var c = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        var d = a.relatedTarget;
        d && bg_y && bg_Ja(d, "nodeName");
        c ? (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY);
        this.b = a;
        a.defaultPrevented &&
            this.c()
    }
}
bg_n(bg_S, bg_R);
bg_S.prototype.c = 
var bg_lb = "closure_listenable_" + (1E6 * Math.random() | 0);

var bg_nb = 0;




bg_qb.prototype.add = 
bg_qb.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.a)) return !1;
    var e = this.a[a];
    b = bg_rb(e, b, c, d);
    return -1 < b ? (bg_pb(e[b]), Array.prototype.splice.call(e, b, 1), e.length || (delete this.a[a], this.b--), !0) : !1
};

function bg_sb(a, b) {
    var c = b.type;
    c in a.a && bg_Da(a.a[c], b) && (bg_pb(b), a.a[c].length || (delete a.a[c], a.b--))
}



var bg_ub = "closure_lm_" + (1E6 * Math.random() | 0),
    bg_vb = {},
    bg_wb = 0;

function bg_xb(a, b, c, d, e) {
    if (bg_f(b)) {
        for (var f = 0; f < b.length; f++) bg_xb(a, b[f], c, d, e);
        return null
    }
    c = bg_yb(c);
    return bg_mb(a) ? a.g(b, c, d, e) : bg_zb(a, b, c, !1, d, e)
}

function bg_zb(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = !!e,
        h = bg_Ab(a);
    h || (a[bg_ub] = h = new bg_qb(a));
    c = h.add(b, c, d, e, f);
    if (c.a) return c;
    var k = bg_Bb,
        l = bg_jb ? : 
    d = l;
    c.a = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) a.addEventListener(b.toString(), d, g);
    else if (a.attachEvent) a.attachEvent(bg_Cb(b.toString()), d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    bg_wb++;
    return c
}

function bg_Db(a, b, c, d, e) {
    if (bg_f(b))
        for (var f = 0; f < b.length; f++) bg_Db(a, b[f], c, d, e);
    else c = bg_yb(c), bg_mb(a) ? a.b.add(String(b), c, !0, d, e) : bg_zb(a, b, c, !0, d, e)
}

function bg_Eb(a, b, c, d, e) {
    if (bg_f(b))
        for (var f = 0; f < b.length; f++) bg_Eb(a, b[f], c, d, e);
    else c = bg_yb(c), bg_mb(a) ? a.M(b, c, d, e) : a && (a = bg_Ab(a)) && (b = bg_tb(a, b, c, !!d, e)) && bg_Fb(b)
}

function bg_Fb(a) {
    if (!bg_ca(a) && a && !a.O) {
        var b = a.src;
        if (bg_mb(b)) bg_sb(b.b, a);
        else {
            var c = a.type,
                d = a.a;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(bg_Cb(c), d);
            bg_wb--;
            (c = bg_Ab(b)) ? (bg_sb(c, a), c.b || (c.src = null, b[bg_ub] = null)) : bg_pb(a)
        }
    }
}




function bg_Bb(a, b) {
    if (a.O) return !0;
    if (!bg_jb) {
        var c = b || bg_ba("window.event"),
            d = new bg_S(c, this),
            e = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            a: {
                var f = !1;
                if (!c.keyCode) try {
                    c.keyCode = -1;
                    break a
                } catch (k) {
                    f = !0
                }
                if (f || void 0 == c.returnValue) c.returnValue = !0
            }
            c = [];
            for (f = d.a; f; f = f.parentNode) c.push(f);
            for (var f = a.type, g = c.length - 1; 0 <= g; g--) {
                d.a = c[g];
                var h = bg_Gb(c[g], f, !0, d),
                    e = e && h
            }
            for (g = 0; g < c.length; g++) d.a = c[g],
            h = bg_Gb(c[g], f, !1, d),
            e = e && h
        }
        return e
    }
    return bg_Hb(a, new bg_S(b, this))
}

var bg_Ib = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);



bg_n(bg_T, bg_o);
var bg_Jb = [];
bg_T.prototype.g = 
bg_T.prototype.M = function(a, b, c, d, e) {
    if (bg_f(b))
        for (var f = 0; f < b.length; f++) this.M(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.b || this, c = bg_yb(c), d = !!d, b = bg_mb(a) ? bg_tb(a.b, String(b), c, d, e) : a ? (a = bg_Ab(a)) ? bg_tb(a, b, c, d, e) : null : null, b && (bg_Fb(b), delete this.a[b.Oa]);
    return this
};
bg_T.prototype.s = function() {
    bg_T.A.s.call(this);
    bg_v.forEach(this.a,  this);
    this.a = {}
};
bg_T.prototype.handleEvent = 

bg_n(bg_U, bg_o);
bg_U.prototype[bg_lb] = !0;
bg_U.prototype.removeEventListener = 

function bg_V(a, b) {
    var c, d = a.na;
    if (d)
        for (c = []; d; d = d.na) c.push(d);
    var d = a.ab,
        e = b,
        f = e.type || e;
    if (bg_h(e)) e = new bg_R(e, d);
    else if (e instanceof bg_R) e.target = e.target || d;
    else {
        var g = e,
            e = new bg_R(f, d);
        bg_v.extend(e, g)
    }
    var g = !0,
        h;
    if (c)
        for (var k = c.length - 1; 0 <= k; k--) h = e.a = c[k], g = bg_Kb(h, f, !0, e) && g;
    h = e.a = d;
    g = bg_Kb(h, f, !0, e) && g;
    g = bg_Kb(h, f, !1, e) && g;
    if (c)
        for (k = 0; k < c.length; k++) h = e.a = c[k], g = bg_Kb(h, f, !1, e) && g
}
bg_U.prototype.s = 
bg_U.prototype.g = 
bg_U.prototype.M = 


var bg_W = {
    Y: };
bg_W.Db = bg_W.Y(!1);
bg_W.fb = bg_W.Y(!0);
bg_W.Eb = bg_W.Y(null);
bg_W.sc = 
bg_W.error = 
bg_W.Nb = 
bg_W.lock = 
bg_W.zc = 
bg_W.Cc = 
bg_W.Zc = 
bg_W.Mb = 
bg_W.Jb = 
bg_W.xb = 
bg_W.Fb = 
bg_W.Ac = 
bg_W.yc = 
bg_W.create = 
bg_W.Xa = !0;
bg_W.Hb = function(a) {
    var b = !1,
        c;
    return function() {
        if (!bg_W.Xa) return a();
        b || (c = a(), b = !0);
        return c
    }
};
bg_W.once = 
bg_W.Lb = function(a, b, c) {
    var d = 0;
    return };
bg_W.Tc = function(a, b, c) {
    
        var f = 0,
        g = !1,
        h = [];
    return };
bg_W.Dc = function(a, b, c) {
        var e = 0;
    return function(f) {
        e || (e = bg_b.setTimeout(d, b), a.apply(c, arguments))
    }
};
var bg_Lb = bg_b.JSON.parse,
    bg_Mb = bg_b.JSON.stringify;

function bg_Nb() {
    return bg_z ? "Webkit" : bg_y ? "Moz" : bg_x ? "ms" : bg_w ? "O" : null
};

var bg_Pb = bg_d;

function bg_X(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
bg_a = bg_X.prototype;
bg_a.clone = function() {
    return new bg_X(this.top, this.right, this.bottom, this.left)
};
bg_a.contains = 
bg_a.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
bg_a.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
bg_a.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};

bg_a = bg_Qb.prototype;
bg_a.clone = 
bg_a.contains = 
bg_a.sa = function() {
    return new bg_K(this.width, this.height)
};
bg_a.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
bg_a.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
bg_a.round = 
var bg_ = {
    Nc: function(a, b, c) {
        if (bg_h(b)) bg_.Ta(a, c, b);
        else
            for (var d in b) bg_.Ta(a, b[d], d)
    },
    Ta: function(a, b, c) {
        (c = bg_.Ma(a, c)) && (a.style[c] = b)
    },
    Ua: {},
    Ma: function(a, b) {
        var c = bg_.Ua[b];
        if (!c) {
            var d = bg_r(b),
                c = d;
            void 0 === a.style[d] && (d = bg_Nb() + bg_xa(d), void 0 !== a.style[d] && (c = d));
            bg_.Ua[b] = c
        }
        return c
    },
    rb: function(a, b) {
        var c = bg_r(b);
        return void 0 === a.style[c] && (c = bg_Nb() + bg_xa(c), void 0 !== a.style[c]) ? (bg_z ? "-webkit" : bg_y ? "-moz" : bg_x ? "-ms" : bg_w ? "-o" : null) + "-" + b : b
    },
    mc: function(a, b) {
        var c = a.style[bg_r(b)];
        return "undefined" !== typeof c ? c : a.style[bg_.Ma(a, b)] || ""
    },
    getComputedStyle: 
    ba: 
    l: 
    Ub: function(a) {
        return bg_.l(a, "boxSizing") || bg_.l(a, "MozBoxSizing") || bg_.l(a, "WebkitBoxSizing") || null
    },
    Yb: function(a) {
        return bg_.l(a,
            "position")
    },
    Sb: function(a) {
        return bg_.l(a, "backgroundColor")
    },
    Wb: function(a) {
        return bg_.l(a, "overflowX")
    },
    Xb: function(a) {
        return bg_.l(a, "overflowY")
    },
    $b: function(a) {
        return bg_.l(a, "zIndex")
    },
    Zb: function(a) {
        return bg_.l(a, "textAlign")
    },
    Vb: function(a) {
        return bg_.l(a, "cursor")
    },
    mb: function(a) {
        var b = bg_.rb(a, "transform");
        return bg_.l(a, b) || bg_.l(a, "transform")
    },
    setPosition: function(a, b, c) {
        var d;
        b instanceof bg_J ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = bg_.fa(d, !1);
        a.style.top = bg_.fa(b, !1)
    },
    jc: function(a) {
        return new bg_J(a.offsetLeft,
            a.offsetTop)
    },
    lb: 
    qc: function(a) {
        var b = a.body;
        a = a.documentElement;
        return new bg_J(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
    },
    aa: function(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        bg_x && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    },
    qb: function(a) {
        if (bg_x && !(8 <= Number(bg_B))) return a.offsetParent;
        var b = bg_N(a),
            c = bg_.l(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = bg_.l(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    },
    rc: function(a) {
        for (var b = new bg_X(0, Infinity, Infinity, 0), c = bg_L(a), d = c.a.body, e = c.a.documentElement,
                f = bg_O(c.a); a = bg_.qb(a);)
            if (!(bg_x && !a.clientWidth || bg_z && !a.clientHeight && a == d) && a != d && a != e && "visible" != bg_.l(a, "overflow")) {
                var g = bg_.G(a),
                    h = bg_.kb(a);
                g.x += h.x;
                g.y += h.y;
                b.top = Math.max(b.top, g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            } d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = (bg_P(c.a) || window).document;
        c = bg_Q(c) ? c.documentElement : c.body;
        c = new bg_K(c.clientWidth, c.clientHeight);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    },
    nb: function(a, b, c) {
        var d = b || bg_O(document),
            e = bg_.G(a),
            f = bg_.G(d),
            g = bg_.$(d);
        d == bg_O(document) ? (b = e.x - d.scrollLeft, e = e.y - d.scrollTop, !bg_x || 10 <= Number(bg_B) || (b += g.left, e += g.top)) : (b = e.x - f.x - g.left, e = e.y - f.y - g.top);
        g = bg_.La(a);
        a = d.clientWidth - g.width;
        g = d.clientHeight - g.height;
        f = d.scrollLeft;
        d = d.scrollTop;
        c ? (f += b - a / 2, d += e - g / 2) : (f += Math.min(b, Math.max(b - a, 0)),
            d += Math.min(e, Math.max(e - g, 0)));
        return new bg_J(f, d)
    },
    Ec: function(a, b, c) {
        b = b || bg_O(document);
        a = bg_.nb(a, b, c);
        b.scrollLeft = a.x;
        b.scrollTop = a.y
    },
    kb: function(a) {
        return new bg_J(a.clientLeft, a.clientTop)
    },
    G: function(a) {
        var b = bg_N(a),
            c = new bg_J(0, 0),
            d = bg_.lb(b);
        if (a == d) return c;
        a = bg_.aa(a);
        b = bg_cb(bg_L(b).a);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    },
    hc: function(a) {
        return bg_.G(a).x
    },
    ic: 
    ob: function(a, b) {
        var c = new bg_J(0, 0),
            d = bg_db(bg_N(a));
        if (!bg_Ja(d, "parent")) return c;
        var e =
            a;
        do {
            var f = d == b ? bg_.G(e) : bg_.Ja(e);
            c.x += f.x;
            c.y += f.y
        } while (d && d != b && d != d.parent && (e = d.frameElement) && (d = d.parent));
        return c
    },
    Xc: function(a, b, c) {
        if (b.a != c.a) {
            var d = b.a.body;
            c = bg_.ob(d, bg_P(c.a));
            c = bg_ab(c, bg_.G(d));
            !bg_x || 9 <= Number(bg_B) || bg_Q(b.a) || (c = bg_ab(c, bg_cb(b.a)));
            a.left += c.x;
            a.top += c.y
        }
    },
    kc: function(a, b) {
        var c = bg_.Ia(a),
            d = bg_.Ia(b);
        return new bg_J(c.x - d.x, c.y - d.y)
    },
    Ja: function(a) {
        a = bg_.aa(a);
        return new bg_J(a.left, a.top)
    },
    Ia: function(a) {
        if (1 == a.nodeType) return bg_.Ja(a);
        a = a.changedTouches ?
            a.changedTouches[0] : a;
        return new bg_J(a.clientX, a.clientY)
    },
    Lc: function(a, b, c) {
        var d = bg_.G(a);
        b instanceof bg_J && (c = b.y, b = b.x);
        bg_.setPosition(a, a.offsetLeft + (b - d.x), a.offsetTop + (Number(c) - d.y))
    },
    setSize: function(a, b, c) {
        if (b instanceof bg_K) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        bg_.zb(a, b);
        bg_.yb(a, c)
    },
    fa: 
    yb: function(a, b) {
        a.style.height = bg_.fa(b, !0)
    },
    zb: 
    sa: 
    Ga: function(a, b) {
        if ("none" != bg_.l(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        var g = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return g
    },
    La: function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = bg_z && !b && !c;
        return bg_c(b) && !d || !a.getBoundingClientRect ? new bg_K(b, c) : (a = bg_.aa(a), new bg_K(a.right - a.left, a.bottom - a.top))
    },
    nc: function(a) {
        if (!a.getBoundingClientRect) return null;
        a = bg_.Ga(bg_.aa, a);
        return new bg_K(a.right - a.left, a.bottom - a.top)
    },
    Tb: function(a) {
        var b = bg_.G(a);
        a = bg_.sa(a);
        return new bg_Qb(b.x, b.y, a.width, a.height)
    },
    Uc: 
    Vc: 
    gc: 
    Kc: function(a, b) {
        var c = a.style;
        "opacity" in
        c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * Number(b) + ")")
    },
    Pc: function(a, b) {
        var c = a.style;
        bg_x && !bg_A("8") ? c.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src\x3d"' + b + '", sizingMethod\x3d"crop")' : (c.backgroundImage = "url(" + b + ")", c.backgroundPosition = "top left", c.backgroundRepeat = "no-repeat")
    },
    Ib: 
    Sc: 
    S: 
    uc: 
    tc: 
    tb: function(a, b) {
        var c = bg_L(b),
            d, e = c.a;
        bg_x && e.createStyleSheet ? (d = e.createStyleSheet(), bg_.xa(d, a)) : (e = bg_ib(c, "HEAD")[0], e || (d = bg_ib(c, "BODY")[0], e = c.Fa("HEAD"), d.parentNode.insertBefore(e, d)), d = c.Fa("STYLE"), bg_.xa(d, a), c.appendChild(e, d));
        return d
    },
    Yc: 
    Oc: 
    xa: function(a, b) {
        var c;
        b instanceof bg_E && b.constructor ===
            bg_E && b.b === bg__a ? c = b.a : (bg_e(b), c = "type_error:SafeStyleSheet");
        bg_x && bg_c(a.cssText) ? a.cssText = c : a.innerHTML = c
    },
    Mc: function(a) {
        a = a.style;
        bg_x && !bg_A("8") ? (a.whiteSpace = "pre", a.wordWrap = "break-word") : a.whiteSpace = bg_y ? "-moz-pre-wrap" : "pre-wrap"
    },
    Jc: function(a) {
        a = a.style;
        a.position = "relative";
        bg_x && !bg_A("8") ? (a.zoom = "1", a.display = "inline") : a.display = "inline-block"
    },
    wc: };
bg_.ya = bg_y ? "MozUserSelect" : bg_z || bg_Ka ? "WebkitUserSelect" : null;
bg_.xc = function(a) {
    return bg_.ya ? "none" == a.style[bg_.ya].toLowerCase() : bg_x || bg_w ? "on" == a.getAttribute("unselectable") : !1
};
bg_.Qc = function(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    var d = bg_.ya;
    if (d) {
        if (b = b ? "none" : "", a.style && (a.style[d] = b), c) {
            a = 0;
            for (var e; e = c[a]; a++) e.style && (e.style[d] = b)
        }
    } else if (bg_x || bg_w)
        if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
            for (a = 0; e = c[a]; a++) e.setAttribute("unselectable", b)
};
bg_.jb = 
bg_.Fc = function(a, b) {
    var c = bg_Q(bg_L(bg_N(a)).a);
    if (!bg_x || bg_A("10") || c && bg_A("8")) bg_.Sa(a, b, "border-box");
    else {
        var d = a.style;
        if (c) {
            var c = bg_.ra(a),
                e = bg_.$(a);
            d.pixelWidth = b.width - e.left - c.left - c.right - e.right;
            d.pixelHeight = b.height - e.top - c.top - c.bottom - e.bottom
        } else d.pixelWidth = b.width, d.pixelHeight = b.height
    }
};
bg_.ac = function(a) {
    var b = bg_N(a),
        c = bg_x && a.currentStyle;
    if (c && bg_Q(bg_L(b).a) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = bg_.N(a, c.width, "width", "pixelWidth"), a = bg_.N(a, c.height, "height", "pixelHeight"), new bg_K(b, a);
    c = bg_.jb(a);
    b = bg_.ra(a);
    a = bg_.$(a);
    return new bg_K(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
};
bg_.Gc = function(a, b) {
    var c = bg_Q(bg_L(bg_N(a)).a);
    if (!bg_x || bg_A("10") || c && bg_A("8")) bg_.Sa(a, b, "content-box");
    else {
        var d = a.style;
        if (c) d.pixelWidth = b.width, d.pixelHeight = b.height;
        else {
            var c = bg_.ra(a),
                e = bg_.$(a);
            d.pixelWidth = b.width + e.left + c.left + c.right + e.right;
            d.pixelHeight = b.height + e.top + c.top + c.bottom + e.bottom
        }
    }
};
bg_.Sa = function(a, b, c) {
    a = a.style;
    bg_y ? a.MozBoxSizing = c : bg_z ? a.WebkitBoxSizing = c : a.boxSizing = c;
    a.width = Math.max(b.width, 0) + "px";
    a.height = Math.max(b.height, 0) + "px"
};
bg_.N = 
bg_.da = function(a, b) {
    var c = bg_.ba(a, b);
    return c ? bg_.N(a, c, "left", "pixelLeft") : 0
};
bg_.Ha = function(a, b) {
    if (bg_x) {
        var c = bg_.da(a, b + "Left"),
            d = bg_.da(a, b + "Right"),
            e = bg_.da(a, b + "Top"),
            f = bg_.da(a, b + "Bottom");
        return new bg_X(e, d, f, c)
    }
    c = bg_.getComputedStyle(a, b + "Left");
    d = bg_.getComputedStyle(a, b + "Right");
    e = bg_.getComputedStyle(a, b + "Top");
    f = bg_.getComputedStyle(a, b + "Bottom");
    return new bg_X(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
};
bg_.ra = function(a) {
    return bg_.Ha(a, "padding")
};
bg_.fc = 
bg_.Pa = {
    thin: 2,
    medium: 4,
    thick: 6
};
bg_.ca = function(a, b) {
    if ("none" == bg_.ba(a, b + "Style")) return 0;
    var c = bg_.ba(a, b + "Width");
    return c in bg_.Pa ? bg_.Pa[c] : bg_.N(a, c, "left", "pixelLeft")
};
bg_.$ = function(a) {
    if (bg_x && !(9 <= Number(bg_B))) {
        var b = bg_.ca(a, "borderLeft"),
            c = bg_.ca(a, "borderRight"),
            d = bg_.ca(a, "borderTop");
        a = bg_.ca(a, "borderBottom");
        return new bg_X(d, c, a, b)
    }
    b = bg_.getComputedStyle(a, "borderLeftWidth");
    c = bg_.getComputedStyle(a, "borderRightWidth");
    d = bg_.getComputedStyle(a, "borderTopWidth");
    a = bg_.getComputedStyle(a, "borderBottomWidth");
    return new bg_X(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
};
bg_.dc = function(a) {
    var b = bg_N(a),
        c = "";
    if (b.body.createTextRange && bg_hb(b, a)) {
        b = b.body.createTextRange();
        b.moveToElementText(a);
        try {
            c = b.queryCommandValue("FontName")
        } catch (d) {
            c = ""
        }
    }
    c || (c = bg_.l(a, "fontFamily"));
    a = c.split(",");
    1 < a.length && (c = a[0]);
    a: for (a = 0; 2 > a; a++)
        if (b = "\"'".charAt(a), c.charAt(0) == b && c.charAt(c.length - 1) == b) {
            c = c.substring(1, c.length - 1);
            break a
        }
    return c
};
bg_.ub = /[^\d]+$/;
bg_.pb = function(a) {
    return (a = a.match(bg_.ub)) && a[0] || null
};
bg_.Wa = {
    cm: 1,
    "in": 1,
    mm: 1,
    pc: 1,
    pt: 1
};
bg_.Ya = {
    em: 1,
    ex: 1
};
bg_.ec = function(a) {
    var b = bg_.l(a, "fontSize"),
        c = bg_.pb(b);
    if (b && "px" == c) return parseInt(b, 10);
    if (bg_x) {
        if (String(c) in bg_.Wa) return bg_.N(a, b, "left", "pixelLeft");
        if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in bg_.Ya) return a = a.parentNode, c = bg_.l(a, "fontSize"), bg_.N(a, b == c ? "1em" : b, "left", "pixelLeft")
    }
    c = bg_eb("SPAN", {
        style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
    });
    a.appendChild(c);
    b = c.offsetHeight;
    bg_gb(c);
    return b
};
bg_.Bc = function(a) {
    var b = {};
    bg_t(a.split(/\s*;\s*/), ;
    return b
};
bg_.Wc = function(a) {
    var b = [];
    bg_v.forEach(a, function(a, d) {
        b.push(String(d).replace(/([A-Z])/g, "-$1").toLowerCase(), ":", a, ";")
    });
    return b.join("")
};
bg_.Hc = function(a, b) {
    a.style[bg_x ? "styleFloat" : "cssFloat"] = b
};
bg_.cc = function(a) {
    return a.style[bg_x ? "styleFloat" : "cssFloat"] || ""
};
bg_.lc = function(a) {
    var b = document.createElement("DIV");
    a && (b.className = a);
    b.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
    a = document.createElement("DIV");
    bg_.setSize(a, "200px", "200px");
    b.appendChild(a);
    document.body.appendChild(b);
    a = b.offsetWidth - b.clientWidth;
    bg_gb(b);
    return a
};
bg_.cb = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
bg_.bc = function(a) {
    a = bg_.mb(a);
    return a ? (a = a.match(bg_.cb)) ? new bg_J(parseFloat(a[1]), parseFloat(a[2])) : new bg_J(0, 0) : new bg_J(0, 0)
};

function bg_Y(a, b) {
    bg_o.call(this);
    b && b instanceof bg_M ? (this.a = b, this.b = {}) : (this.b = b || {}, this.a = this.b.domHelper instanceof bg_M ? this.b.domHelper : bg_L(bg_j(a) && 1 == a.nodeType ? a : null));
    null != a ? this.F = : this.F = bg_d;
    var c = bg_P(this.a.a);
    bg_p(this, (new bg_T(this)).g(c, "message", this.c))
}
bg_n(bg_Y, bg_o);

function bg_Z(a, b) {
    var c = bg_ba(b, a.b);
    return null != c ? c : !0
}
bg_Y.prototype.c = function(a) {
    var b = a.b,
        c;
    c = b.origin;
    var d = this.F();

        c = b.source;
        var e;
        a: {
            d = this.F();
            try {
                e = d.contentWindow || (d.contentDocument ? bg_db(d.contentDocument) : null);
                break a
            } catch (g) {}
            e = null
        }
        c = c === e

    if (c) try {
        var f = bg_Lb(b.data);
        if (f) {
            if (bg_Z(this, "autoMessageHandle")) switch (f.command) {
                case "resize":
                    bg_Z(this, "autoResize") && this.setSize(bg_Z(this, "autoResizeWidth") ? f.width : null, bg_Z(this, "autoResizeHeight") ? f.height : null);
                    break;
                case "show":
                    bg_Z(this, "autoDisplay") && this.show();
                    break;
                case "hide":
                    bg_Z(this, "autoDisplay") && this.hide();
                    break;
                case "updateURLHash":
                    bg_Z(this, "autoHashUpdate") && (this.a.a.location.hash = f.hash)
            }
            this.onMessage(f)
        }
    } catch (g) {
        this.onException(a)
    }
};
bg_Y.prototype.onResize = bg_d;
bg_Y.prototype.onShow = bg_d;
bg_Y.prototype.onHide = bg_d;
bg_Y.prototype.onMessage = bg_d;
bg_Y.prototype.onException = bg_d;
bg_Y.prototype.setSize = function(a, b) {
    var c = this.F();
    bg_j(c) && 1 == c.nodeType && (null != a && (c.width = a), null != b && (c.height = b));
    this.onResize(a, b)
};
bg_Y.prototype.hide = function() {
    var a = this.F();
    bg_j(a) && 1 == a.nodeType && bg_.S(a, !1);
    this.onHide()
};
bg_Y.prototype.show = function() {
    var a = this.F();
    null != a && bg_.S(a, !0);
    this.onShow()
};
bg_m("IFrameApi", bg_Y);
bg_Y.prototype.destroy = 

bg_n(bg__, bg_U);
bg__.prototype.f = !1;
bg__.prototype.a = null;
bg__.prototype.C = function() {
    if (this.f) {
        var a = bg_l() - this.v;
        0 < a && a < .8 * this.h ? this.a = this.c.setTimeout(this.o, this.h - a) : (this.a && (this.c.clearTimeout(this.a), this.a = null), bg_V(this, "tick"), this.f && (this.a = this.c.setTimeout(this.o, this.h), this.v = bg_l()))
    }
};
bg__.prototype.start = 

bg__.prototype.s = 



function bg_Tb(a) {
    return a.i && "function" == typeof a.i ? a.i() : bg_g(a) || bg_h(a) ? a.length : bg_v.i(a)
}

function bg_Ub(a) {
    if (a.j && "function" == typeof a.j) return a.j();
    if (bg_h(a)) return a.split("");
    if (bg_g(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return bg_v.j(a)
}

function bg_Vb(a) {
    if (a.m && "function" == typeof a.m) return a.m();
    if (!a.j || "function" != typeof a.j) {
        if (bg_g(a) || bg_h(a)) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b
        }
        return bg_v.m(a)
    }
}

function bg_Wb(a, b, c) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
    else if (bg_g(a) || bg_h(a)) bg_t(a, b, c);
    else
        for (var d = bg_Vb(a), e = bg_Ub(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
}

function bg_Xb(a, b) {
    if ("function" == typeof a.every) return a.every(b, void 0);
    if (bg_g(a) || bg_h(a)) return bg_Ba(a, b, void 0);
    for (var c = bg_Vb(a), d = bg_Ub(a), e = d.length, f = 0; f < e; f++)
        if (!b.call(void 0, d[f], c && c[f], a)) return !1;
    return !0
};

function bg_0(a, b) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof bg_0 ? (c = a.m(), d = a.j()) : (c = bg_v.m(a), d = bg_v.j(a));
        for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
    }
}
bg_a = bg_0.prototype;
bg_a.i = function() {
    return this.c
};
bg_a.j = 
bg_a.m = 
bg_a.D = 
bg_a.I = 
bg_a.qa = function(a, b) {
    if (this === a) return !0;
    if (this.c != a.i()) return !1;
    var c = b || bg_Zb;
    bg_Yb(this);
    for (var d, e = 0; d = this.a[e]; e++)
        if (!c(this.get(d), a.get(d))) return !1;
    return !0
};

bg_a.B = 
bg_a.clear = 
bg_a.remove = 

bg_a.get = 
bg_a.set = 
bg_a.forEach = 
bg_a.clone = function() {
    return new bg_0(this)
};
bg_a.Ab = 


var bg__b = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function bg_2(a, b) {
    this.u = this.h = this.g = "";
    this.w = null;
    this.c = this.b = "";
    this.f = !1;
    var c;
    a instanceof bg_2 ? (this.f = bg_c(b) ? b : a.f, bg_0b(bg_1b(bg_2b(bg_3b(bg_4b(bg_5b(this, a.g), a.h), a.u), a.w), a.b), a.a.clone()).c = a.c) : a && (c = String(a).match(bg__b)) ? (this.f = !!b, bg_0b(bg_1b(bg_2b(bg_3b(bg_4b(bg_5b(this, c[1] || "", !0), c[2] || "", !0), c[3] || "", !0), c[4]), c[5] || "", !0), c[6] || "", !0).c = bg_6b(c[7] || "")) : (this.f = !!b, this.a = new bg_7b(null, 0, this.f))
}
bg_2.prototype.toString = 
bg_2.prototype.clone = function() {
    return new bg_2(this)
};

function bg_5b(a, b, c) {
    a.g = c ? bg_6b(b, !0) : b;
    a.g && (a.g = a.g.replace(/:$/, ""));
    return a
}

function bg_4b(a, b, c) {
    a.h = c ? bg_6b(b) : b;
    return a
}

function bg_3b(a, b, c) {
    a.u = c ? bg_6b(b, !0) : b;
    return a
}

function bg_2b(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.w = b
    } else a.w = null;
    return a
}


function bg_0b(a, b, c) {
    b instanceof bg_7b ? (a.a = b, b = a.a, (c = a.f) && !b.g && (bg_3(b), b.c = null, b.a.forEach( b)), b.g = c) : (c || (b = bg_8b(b, bg_cc)), a.a = new bg_7b(b, 0, a.f));
    return a
}

bg_2.create = function(a, b, c, d, e, f, g, h) {
    h = new bg_2(null, h);
    a && bg_5b(h, a);
    b && bg_4b(h, b);
    c && bg_3b(h, c);
    d && bg_2b(h, d);
    e && bg_1b(h, e);
    f && bg_0b(h, f);
    g && (h.c = g);
    return h
};

function bg_ec(a, b) {
    a instanceof bg_2 || (a = bg_dc(a));
    b instanceof bg_2 || (b = bg_dc(b));
    var c = a,
        d = b,
        e = c.clone(),
        f = !!d.g;
    f ? bg_5b(e, d.g) : f = !!d.h;
    f ? bg_4b(e, d.h) : f = !!d.u;
    f ? bg_3b(e, d.u) : f = null != d.w;
    var g = d.b;
    if (f) bg_2b(e, d.w);
    else if (f = !!d.b)
        if ("/" != g.charAt(0) && (c.u && !c.b ? g = "/" + g : (c = e.b.lastIndexOf("/"), -1 != c && (g = e.b.substr(0, c + 1) + g))), c = g, ".." == c || "." == c) g = "";
        else if (bg_q(c, "./") || bg_q(c, "/.")) {
        for (var g = !c.lastIndexOf("/", 0), c = c.split("/"), h = [], k = 0; k < c.length;) {
            var l = c[k++];
            "." == l ? g && k == c.length && h.push("") :
                ".." == l ? ((1 < h.length || 1 == h.length && "" != h[0]) && h.pop(), g && k == c.length && h.push("")) : (h.push(l), g = !0)
        }
        g = h.join("/")
    } else g = c;
    f ? bg_1b(e, g) : f = "" !== d.a.toString();
    f ? bg_0b(e, d.a.clone()) : f = !!d.c;
    f && (e.c = d.c);
    return e
}



var bg_9b = /[#\/\?@]/g,
    bg_ac = /[\#\?:]/g,
    bg_$b = /[\#\?]/g,
    bg_cc = /[\#\?@]/g,
    bg_bc = /#/g;

function bg_7b(a, b, c) {
    this.b = this.a = null;
    this.c = a || null;
    this.g = !!c
}

function bg_3(a) {
    if (!a.a && (a.a = new bg_0, a.b = 0, a.c)) {
        var b = a.c;
        if (b)
            for (var b = b.split("\x26"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("\x3d"),
                    e, f = null;
                0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                a.add(decodeURIComponent(e.replace(/\+/g, " ")), f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
            }
    }
}
bg_a = bg_7b.prototype;
bg_a.i = 
bg_a.add = 
bg_a.remove = 
bg_a.clear = 
bg_a.B = 
bg_a.D = 
bg_a.I = 
bg_a.m = 
bg_a.j = 
bg_a.set = 
bg_a.get = 
bg_a.toString = 
bg_a.clone = 

bg_a.extend = 



function bg_hc(a) {
    this.a = new bg_0;
    if (a) {
        a = bg_Ub(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    }
}

function bg_ic(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + bg_da(a) : b.charAt(0) + a
}
bg_a = bg_hc.prototype;
bg_a.i = function() {
    return this.a.i()
};
bg_a.add = 
bg_a.remove = function(a) {
    return this.a.remove(bg_ic(a))
};
bg_a.clear = 
bg_a.B = function() {
    return this.a.B()
};
bg_a.contains = 
bg_a.j = 
bg_a.clone = 
bg_a.qa = function(a) {
    var b;
    if (b = this.i() == bg_Tb(a)) {
        var c = a;
        a = bg_Tb(c);
        this.i() > a ? b = !1 : (!(c instanceof bg_hc) && 5 < a && (c = new bg_hc(c)), b = bg_Xb(this, function(a) {
            var b = c;
            return b.contains && "function" == typeof b.contains ? b.contains(a) : b.I && "function" == typeof b.I ? b.I(a) : bg_g(b) || bg_h(b) ? 0 <= bg_s(b, a) : bg_v.I(b, a)
        }))
    }
    return b
};

function bg_jc() {}
bg_jc.prototype.a = null;
var bg_kc;

bg_n(bg_lc, bg_jc);


function bg_oc(a) {
    var b = {};
    bg_nc(a) && (b[0] = !0, b[1] = !0);
    return b
}

bg_kc = new bg_lc;

function bg_pc(a) {
    bg_U.call(this);
    this.headers = new bg_0;
    this.U = a || null;
    this.c = !1;
    this.T = this.a = null;
    this.bb = this.ma = "";
    this.h = 0;
    this.ha = "";
    this.f = this.la = this.L = this.ka = !1;
    this.o = 0;
    this.ia = null;
    this.C = bg_qc;
    this.oa = this.v = !1
}
bg_n(bg_pc, bg_U);
var bg_qc = "",
    bg_rc = /^https?$/i,
    bg_sc = ["POST", "PUT"];
bg_a = bg_pc.prototype;
bg_a.Ka = function() {
    return this.C
};
bg_a.Na = 
bg_a.Va = 


bg_a.abort = 
bg_a.s = 
bg_a.Qa = 
bg_a.wb = 

function bg_wc(a) {
    if (a.c && "undefined" != typeof bg_aa && (!a.T[1] || 4 != bg_5(a) || 2 != bg_xc(a)))
        if (a.L && 4 == bg_5(a)) bg_Sb(a.Qa, 0, a);
        else if (bg_V(a, "readystatechange"), 4 == bg_5(a)) {
        a.c = !1;
        try {
            if (bg_yc(a)) bg_V(a, "complete"), bg_V(a, "success");
            else {
                a.h = 6;
                var b;
                try {
                    b = 2 < bg_5(a) ? a.a.statusText : ""
                } catch (c) {
                    b = ""
                }
                a.ha = b + " [" + bg_xc(a) + "]";
                bg_uc(a)
            }
        } finally {
            bg_vc(a)
        }
    }
}


function bg_zc(a) {
    a.a && a.oa && (a.a.ontimeout = null);
    bg_ca(a.ia) && (bg_b.clearTimeout(a.ia), a.ia = null)
}

function bg_yc(a) {
    var b = bg_xc(a),
        c;
    if (!(c = bg_gc(b))) {
        if (b = !b) a = String(a.ma).match(bg__b)[1] || null, !a && bg_b.self && bg_b.self.location && (a = bg_b.self.location.protocol, a = a.substr(0, a.length - 1)), b = !bg_rc.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}



function bg_Ac(a) {
    if (a.a && 4 == bg_5(a)) return a = a.a.getResponseHeader("Date"), null === a ? void 0 : a
};


function bg_Cc(a) {
    a.b.length || (a.b = a.a, a.b.reverse(), a.a = []);
    return a.b.pop()
}
bg_a = bg_Bc.prototype;
bg_a.i = 
bg_a.B = 
bg_a.clear = 
bg_a.contains = function(a) {
    return 0 <= bg_s(this.b, a) || 0 <= bg_s(this.a, a)
};
bg_a.remove = function(a) {
    var b;
    b = this.b;
    var c = bg_ya(b, a);
    0 <= c ? (Array.prototype.splice.call(b, c, 1), b = !0) : b = !1;
    return b || bg_Da(this.a, a)
};
bg_a.j = function() {
    for (var a = [], b = this.b.length - 1; 0 <= b; --b) a.push(this.b[b]);
    for (var c = this.a.length, b = 0; b < c; ++b) a.push(this.a[b]);
    return a
};

function bg_Dc(a, b) {
    bg_o.call(this);
    this.h = a || 0;
    this.c = b || 10;
    if (this.h > this.c) throw Error(bg_Ec);
    this.a = new bg_Bc;
    this.b = new bg_hc;
    this.f = null;
    this.V()
}
bg_n(bg_Dc, bg_o);
var bg_Ec = "[goog.structs.Pool] Min can not be greater than max";
bg_a = bg_Dc.prototype;
bg_a.ea = function() {
    var a = bg_l();
    if (!(null != this.f && 0 > a - this.f)) {
        for (var b; 0 < this.a.i() && (b = bg_Cc(this.a), !this.wa(b));) this.V();
        !b && this.i() < this.c && (b = this.pa());
        b && (this.f = a, this.b.add(b));
        return b
    }
};
bg_a.P = 
bg_a.V = function() {
    for (var a = this.a; this.i() < this.h;) {
        var b = this.pa();
        a.a.push(b)
    }
    for (; this.i() > this.c && 0 < this.a.i();) bg_Fc(bg_Cc(a))
};
bg_a.pa = 

function bg_Fc(a) {
    if ("function" == typeof a.J) a.J();
    else
        for (var b in a) a[b] = null
}
bg_a.wa = 
bg_a.contains = 
bg_a.i = 
bg_a.B = 
bg_a.s = 

bg_Gc.prototype.clone = 

function bg_Hc(a) {
    this.a = [];
    if (a) a: {
        var b;
        if (a instanceof bg_Hc) {
            if (b = a.m(), a = a.j(), 0 >= this.i()) {
                for (var c = this.a, d = 0; d < b.length; d++) c.push(new bg_Gc(b[d], a[d]));
                break a
            }
        } else b = bg_v.m(a),
        a = bg_v.j(a);
        for (d = 0; d < b.length; d++) bg_Ic(this, b[d], a[d])
    }
}

bg_a = bg_Hc.prototype;
bg_a.remove = function() {
    var a = this.a,
        b = a.length,
        c = a[0];
    if (!(0 >= b)) {
        if (1 == b) bg_Ca(a);
        else {
            a[0] = a.pop();
            for (var a = 0, b = this.a, d = b.length, e = b[a]; a < d >> 1;) {
                var f = 2 * a + 1,
                    g = 2 * a + 2,
                    f = g < d && b[g].a < b[f].a ? g : f;
                if (b[f].a > e.a) break;
                b[a] = b[f];
                a = f
            }
            b[a] = e
        }
        return c.b
    }
};
bg_a.j = function() {
    for (var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].b);
    return b
};
bg_a.m = 
bg_a.I = function(a) {
    return bg_Aa(this.a, function(b) {
        return b.b == a
    })
};
bg_a.D = function(a) {
    return bg_Aa(this.a, 
};
bg_a.clone = function() {
    return new bg_Hc(this)
};
bg_a.i = 
bg_a.B = 
bg_a.clear = 

bg_n(bg_Jc, bg_Hc);

function bg_6(a, b) {
    this.g = new bg_Jc;
    bg_Dc.call(this, a, b)
}
bg_n(bg_6, bg_Dc);
bg_a = bg_6.prototype;
bg_a.ea = function(a, b) {
    if (!a) return bg_6.A.ea.call(this);
    bg_Ic(this.g, bg_c(b) ? b : 100, a);
    this.ua()
};
bg_a.ua = function() {
    for (var a = this.g; 0 < a.i();) {
        var b = this.ea();
        if (b) a.remove().apply(this, [b]);
        else break
    }
};
bg_a.P = 
bg_a.V = 
bg_a.s = function() {
    bg_6.A.s.call(this);
    bg_b.clearTimeout(void 0);
    this.g.clear();
    this.g = null
};

bg_n(bg_Kc, bg_6);
bg_Kc.prototype.pa = 
bg_Kc.prototype.wa = 

function bg_7(a, b, c, d, e, f) {
    bg_U.call(this);
    this.h = bg_c(a) ? a : 1;
    this.o = bg_c(e) ? Math.max(0, e) : 0;
    this.v = !!f;
    this.c = new bg_Kc(b, c, d, f);
    this.a = new bg_0;
    this.f = new bg_T(this)
}
bg_n(bg_7, bg_U);
var bg_Lc = "ready complete success error abort timeout".split(" ");
bg_7.prototype.abort = function(a, b) {
    var c = this.a.get(a);
    if (c) {
        var d = c.ja;
        c.Ba = !0;
        b && (d && (this.f.M(d, bg_Lc, c.za), bg_Db(d, "ready",  !1, this)), this.a.remove(a));
        d && d.abort()
    }
};
bg_7.prototype.C = function(a, b) {
    var c = this.a.get(a);
    c && !c.ja ? (this.f.g(b, bg_Lc, c.za), b.o = Math.max(0, this.o), b.C = c.Ka(), b.v = c.Na(), c.ja = b, bg_V(this, new bg_8("ready", this, a, b)), bg_Mc(this, a, b), c.Ba && b.abort()) : (c = this.c, c.b.remove(b) && c.P(b))
};
bg_7.prototype.L = function(a, b) {
    var c = b.target;
    switch (b.type) {
        case "ready":
            bg_Mc(this, a, c);
            break;
        case "complete":
            a: {
                var d = this.a.get(a);
                if (7 == c.h || bg_yc(c) || d.W > d.ta)
                    if (bg_V(this, new bg_8("complete", this, a, c)), d && (d.Ea = !0, d.Da)) {
                        c = d.Da.call(c, b);
                        break a
                    } c = null
            }
            return c;
        case "success":
            bg_V(this, new bg_8("success", this, a, c));
            break;
        case "timeout":
        case "error":
            d = this.a.get(a);
            d.W > d.ta && bg_V(this, new bg_8("error", this, a, c));
            break;
        case "abort":
            bg_V(this, new bg_8("abort", this, a, c))
    }
    return null
};

function bg_Mc(a, b, c) {
    var d = a.a.get(b);
    if (!d || d.Ea || d.W > d.ta) {
        d && (a.f.M(c, bg_Lc, d.za), a.a.remove(b));
        var e = a.c;
        e.b.remove(c) && e.P(c)
    } else a: {
        d.W++,
        a = d.Cb;
        var f = d.vb;b = d.hb;
        var g = d.sb;
        if (c.a) throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + c.ma + "; newUri\x3d" + a);d = f ? f.toUpperCase() : "GET";c.ma = a;c.ha = "";c.h = 0;c.bb = d;c.ka = !1;c.c = !0;c.a = c.U ? bg_mc(c.U) : bg_mc(bg_kc);c.U ? (f = c.U, f = f.a || (f.a = bg_oc(f))) : f = bg_kc.a || (bg_kc.a = bg_oc(bg_kc));c.T = f;c.a.onreadystatechange = bg_k(c.Qa, c);
        try {
            c.la = !0, c.a.open(d, String(a), !0), c.la = !1
        } catch (m) {
            bg_tc(c, m);
            break a
        }
        a = b || "";
        var h = c.headers.clone();g && bg_Wb(g, function(a, b) {
            h.set(b, a)
        });b = h.m();b: {
            for (var g = b.length, f = bg_h(b) ? b.split("") : b, k = 0; k < g; k++) {
                var l;
                if (l = k in f) l = "content-type" == f[k].toLowerCase();
                if (l) {
                    g = k;
                    break b
                }
            }
            g = -1
        }
        b = 0 > g ? null : bg_h(b) ? b.charAt(g) : b[g];g = bg_b.FormData && a instanceof bg_b.FormData;!(0 <= bg_s(bg_sc, d)) || b || g || h.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");h.forEach( c);c.C && (c.a.responseType = c.C);
        "withCredentials" in c.a && c.a.withCredentials !== c.v && (c.a.withCredentials = c.v);
        try {
            bg_zc(c), 0 < c.o && (e = c.a, c.oa = bg_x && bg_A(9) && bg_ca(e.timeout) && bg_c(e.ontimeout), c.oa ? (c.a.timeout = c.o, c.a.ontimeout = bg_k(c.Va, c)) : c.ia = bg_Sb(c.Va, c.o, c)), c.L = !0, c.a.send(a), c.L = !1
        } catch (m) {
            bg_tc(c, m)
        }
    }
}
bg_7.prototype.s = 

bg_n(bg_8, bg_R);

function bg_Nc(a, b, c, d, e, f, g, h, k) {
    this.Cb = a;
    this.vb = c || "GET";
    this.hb = d;
    this.sb = e || null;
    this.ta = bg_c(g) ? g : 1;
    this.W = 0;
    this.Ba = this.Ea = !1;
    this.za = b;
    this.Da = f;
    this.a = h || bg_qc;
    this.b = !!k;
    this.ja = null
}
bg_Nc.prototype.Na = function() {
    return this.b
};
bg_Nc.prototype.Ka = function() {
    return this.a
};

function bg_Oc(a, b) {
    bg_U.call(this);
    bg_Pc.set(this.c, this);
    this.o = bg_dc(a);
    this.c = String(bg_da(this.o));
    this.v = bg_k(this.L, this);
    this.a = new bg__(b);
    bg_p(this, this.a);
    bg_p(this, (new bg_T(this)).g(this.a, "tick", this.h));
    this.f = new bg_7;
    bg_p(this, this.f)
}
bg_n(bg_Oc, bg_U);
bg_Oc.prototype.start = 
bg_Oc.prototype.h = function() {
    var a = this.f.a.m();
    if (!(0 <= bg_s(a, this.c))) {
        this.C = bg_l();
        var b = this.o.clone();
        b.a.set("cb", this.C);
        var a = this.f,
            c = this.c,
            b = b.toString(),
            d = this.v;
        if (a.a.get(c)) throw Error("[goog.net.XhrManager] ID in use");
        b = new bg_Nc(b, bg_k(a.L, a, c), "GET", void 0, {
            "Cache-Control": "no-cache"
        }, d, bg_c(void 0) ? void 0 : a.h, "text", bg_c(void 0) ? void 0 : a.v);
        a.a.set(c, b);
        c = bg_k(a.C, a, c);
        a.c.ea(c, void 0)
    }
};
bg_Oc.prototype.L = function(a) {
    if ("complete" == a.type) {
        bg_l();
        var b = a.target,
            c;
        if (bg_gc(bg_xc(b))) {
            c = new bg_Qc(bg_Rc, this);
            a = b.a ? bg_Lb(b.a.responseText) : void 0;
            a ? c.data = a : c.data = null;
            try {
                bg_Ac(b), c.g = new Date(bg_Ac(b))
            } catch (d) {}
        } else c = new bg_Qc(bg_Sc, this), c.u = a.target;
        bg_V(this, c)
    }
};

function bg_Qc(a, b, c) {
    bg_R.call(this, a, b);
    c && (this.data = c)
}
bg_n(bg_Qc, bg_R);
var bg_Rc = "success",
    bg_Sc = "failure",
    bg_Pc = new bg_0;


function bg_Uc(a) {
    return a.classList ? a.classList.contains("loading") : 0 <= bg_s(bg_Tc(a), "loading")
};

function bg_9(a, b, c) {
    bg_o.call(this);
    this.window = a;
    this.b = b || "*";
    this.onMessage = c || bg_d;
    this.onUpdateURLHash = this.onException = this.onHide = this.onShow = bg_d;
    bg_p(this, (new bg_T(this)).g(this.window, "message", this.a))
}
bg_n(bg_9, bg_o);
bg_9.prototype.sendMessage = function(a) {
    this.window && bg_i(this.window.postMessage) && this.window.parent.postMessage(bg_Mb(a), this.b)
};
bg_9.create = 
bg_9.prototype.a = 
bg_9.prototype.resize = 
bg_9.prototype.show = function() {
    this.sendMessage({
        command: "show"
    })
};
bg_9.prototype.hide = 
bg_m("WindowApi", bg_9);

function bg_$(a, b) {
    bg_o.call(this);
    this.window = a;
    this.c = b;
    this.g = bg_L(this.window);
    this.a = new bg_0;
    this.f = new bg_9(a);
    bg_p(this, this.f)
}
bg_n(bg_$, bg_o);
bg_$.prototype.start = function() {
    throw Error("unimplemented abstract method");
};

function bg_Vc(a, b) {
    var c = a.c[b];
    if (c) return c;
    throw Error("The " + b + " configuration was not specified. This is a required property.");
}

function bg_Wc(a, b, c) {
    return a.c[b] ? a.c[b] : c
}
bg_$.prototype.M = function(a) {
    var b = new bg_Y(a, this.g);
    b.onMessage = bg_k(function(a) {
        switch (a.command) {
            case "resize":
                bg_Xc(this);
                break;
            default:
                this.f.sendMessage(a)
        }
    }, this);
    bg_p(this, b);
    this.a.set(a.getAttribute("name"), {
        element: a,
        Ca: b
    })
};

function bg_Xc(a) {
    var b = a.g.F("main");
    b && a.f.resize(null, Math.max(bg_.sa(b).height, 288))
}

function bg_Yc(a) {
    bg_Zc(a);
    bg_t(bg_ib(a.g, "IFRAME"), a.M, a)
}
bg_$.prototype.h = function(a) {
    var b = a.name;
    if (this.a.D(b)) {
        var c = this.a.get(b);
        if (c.element) {
            bg_.S(c.element, !0);
            var b = bg_ec(this.c.host, "/betstream-view/" + a.component + "/" + a.product + "/html" + this.window.location.search),
                d = new bg_2(c.element.src);
            if (d.b != b.b || d.a.toString() != b.a.toString()) bg_xb(c.element, ["load"], function() {
                var a = c.element;
                a.classList ? a.classList.remove("loading") : bg_Uc(a) && (a.className = bg_za(bg_Tc(a), .join(" "))
            }), bg_ca(a.forceHeight) && c.Ca.setSize(null,
                a.forceHeight), a = c.element, a.classList ? a.classList.add("loading") : bg_Uc(a) || (a.className += 0 < a.className.length ? " loading" : "loading"), c.element.src = b.toString()
        }
    }
};

function bg__c(a, b) {
    bg_t(bg_za(bg_Wc(a, "iframes", []), b || bg_W.fb), a.h, a)
}

function bg_Zc(a) {
    bg_Wb(a.a, ;
    a.a.clear()
}
bg_$.prototype.s = 

function bg_0c(a, b) {
    bg_$.call(this, a, b);
    this.b = new bg_Oc(bg_ec(bg_Wc(this, "host", null), bg_Vc(this, "sportFeed")), bg_Wc(this, "sportFeedFrequency", 1E3));
    bg_p(this, this.b);
    bg_p(this, (new bg_T(this)).g(this.b, bg_Rc, this.v).g(this.b, bg_Sc, this.o))
}
bg_n(bg_0c, bg_$);
bg_m("betgenius.pages.SportPage", bg_0c);
bg_0c.prototype.start = function() {
    bg_Yc(this);
    this.b.start();
    bg__c(this, ;
    var a = this.a.get("scorecentre");
    null != a && a.element && bg_.S(a.element, !1);
    bg_Xc(this)
};
var bg_1c = {
    Za: "SourceFixtureId",
    eb: "BetgeniusFixtureStartTime",
    $a: "ScheduledForCoverage"
};
bg_0c.prototype.v = function(a) {
    var b = bg_Wc(this, "fixtureParamKey", "eventId"),
        c;
    c = bg_dc(this.window.location).a.get(b);
    var d = a.g;
    null != c && (bg_Aa(a.data, function(a) {
        return !!(a[bg_1c.Za] == c && new Date(a[bg_1c.eb]) < d && a[bg_1c.$a])
    }, this) ? (bg__c(this, , a = this.b, a.f.abort(a.c, !0), bg_Rb(a.a)) : bg_2c(this))
};
bg_0c.prototype.o = function(a) {
    switch (bg_xc(a.u)) {
        case 408:
            break;
        default:
            bg_2c(this)
    }
};

function bg_2c(a) {
    a.h({
        name: "scorecentre",
        component: "fixtureheader",
        product: bg_Vc(a, "productName"),
        forceHeight: 60
    })
};

function bg_3c(a, b) {
    bg_$.call(this, a, b)
}
bg_n(bg_3c, bg_$);
bg_m("betgenius.pages.HomePage", bg_3c);
bg_3c.prototype.start = function() {
    bg_Yc(this);
    bg__c(this)
};

bg_n(bg_4c, bg_$);
bg_m("betgenius.pages.FixturePage", bg_4c);
bg_4c.prototype.start = 