﻿(function (j, h, c, g, d, k, f) {/*! Jssor */
    new (function () { }); var e = j.$Jease$ = { $Swing}, $Linear}, $InQuad}, $OutQuad}, $InOutQuad}, $InCubic}, $OutCubic}, $InOutCubic}, $InQuart}, $OutQuart}, $InOutQuart}, $InQuint}, $OutQuint}, $InOutQuint}, $InSine}, $OutSine}, $InOutSine}, $InExpo}, $OutExpo}, $InOutExpo}, $InCirc}, $OutCirc}, $InOutCirc}, $InElastic}, $OutElastic}, $InOutElastic}, $InBack}, $OutBack}, $InOutBack}, $InBounce}, $OutBounce}, $InOutBounce}, $GoBack}, $InWave}, $OutWave}, $OutJump}, $InJump}, $Early: c.ceil, $Late: c.floor }; var b = j.$Jssor$ = new function () { var i = this, zb = /\S+/g, M = 1, jb = 2, mb = 3, lb = 4, pb = 5, N, t = 0, l = 0, u = 0, B = 0, C = 0, F = navigator, ub = F.appName, o = F.userAgent, A = h.documentElement, q = parseFloat} function w(g) { if (!t) { t = -1; if (ub == "Microsoft Internet Explorer" && !!j.attachEvent && !!j.ActiveXObject) { var e = o.indexOf("MSIE"); t = M; u = q(o.substring(e + 5, o.indexOf(";", e)));/*@cc_on B=@_jscript_version@*/; l = h.documentMode || u } else if (ub == "Netscape" && !!j.addEventListener) { var d = o.indexOf("Firefox"), b = o.indexOf("Safari"), f = o.indexOf("Chrome"), c = o.indexOf("AppleWebKit"); if (d >= 0) { t = jb; l = q(o.substring(d + 8)) } else if (b >= 0) { var i = o.substring(0, b).lastIndexOf("/"); t = f >= 0 ? lb : mb; l = q(o.substring(i + 1, b)) } else { var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o); if (a) { t = M; l = u = q(a[1]) } } if (c >= 0) C = q(o.substring(c + 12)) } else { var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o); if (a) { t = pb; l = q(a[2]) } } } return g == t } function r() { return w(M) } function Ab() { return w(jb) } function kb() { return w(mb) } function Db() { return w(lb) } var O = db("transform")} var qb = {}; n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"]})} function p(a, b) { return { x: a, y: b } } function E(b, d, c) { var a = !b || b == "inherit" ? "" : b; n(d}); a && (c += (!a.indexOf(" ") ? "" : " ") + a); return c } function Hb(a, b) { if (a === f) a = b; return a } i.$Device = Ib; i.$IsBrowserIE = r; i.$IsBrowserIeQuirks = ib; i.$IsBrowserFireFox = Ab; i.$IsBrowserSafari = kb; i.$IsBrowserChrome = Db; i.$IsBrowserOpera = ob; i.Ff = I; fb("transform"); i.$BrowserVersion = function () { return l }; i.$BrowserEngineVersion }; i.$WebKitVersion }; i.$Delay = xb; i.Ef }} i.gc = Z; i.$GetElement }} i.Sd = v; i.$EvtSrc }; i.Rd }; i.$WindowSize }} function bb(b, c, a, d) { if (a === f) { a = q(x(b, c)); isNaN(a) && (a = g); return a } if (a == g) a = ""; else d && (a += "px"); x(b, c, a) } var P = { $Rotate: ["rotate"], $RotateX: ["rotateX"], $RotateY: ["rotateY"], $SkewX: ["skewX"], $SkewY: ["skewY"] }; if (!I()) P = G(P, { $ScaleX: ["scaleX", 2], $ScaleY: ["scaleY", 2], $TranslateZ: ["translateZ", 1] }); function Q(d, a) { var c = ""; if (a) { if (r() && l && l < 10) { delete a.$RotateX; delete a.$RotateY; delete a.$TranslateZ } b.$Each(a}); if (I()) { if (a.$TranslateX || a.$TranslateY || a.$TranslateZ != f) c += " translate3d(" + (a.$TranslateX || 0) + "px," + (a.$TranslateY || 0) + "px," + (a.$TranslateZ || 0) + "px)"; if (a.$ScaleX == f) a.$ScaleX = 1; if (a.$ScaleY == f) a.$ScaleY = 1; if (a.$ScaleX != 1 || a.$ScaleY != 1) c += " scale3d(" + a.$ScaleX + ", " + a.$ScaleY + ", 1)" } } d.style[O(d)] = c } i.xf = m("transformOrigin", 4); i.vf = m("backfaceVisibility", 4); i.tf = m("transformStyle", 4); i.uf = m("perspective", 6); i.Uf = m("perspectiveOrigin", 4); i.Vf = function (b, a) { if (r() && u < 9 || u < 10 && ib()) b.style.zoom = a == 1 ? "" : a; else { var c = O(b), f = a == 1 ? "" : "scale(" + a + ")", e = b.style[c], g = new RegExp(/[\s]*scale\(.*?\)/g), d = E(e, [g], f); b.style[c] = d } }; i.$AddEvent = function (a, c, d, b) { a = i.$GetElement(a); if (a.addEventListener) { c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b); a.addEventListener(c, d, b) } else if (a.attachEvent) { a.attachEvent("on" + c, d); b && a.setCapture && a.setCapture() } }; i.T }; i.$FireEvent = function (c, b) { var a; if (h.createEvent) { a = h.createEvent("HTMLEvents"); a.initEvent(b, k, k); c.dispatchEvent(a) } else { var d = "on" + b; a = h.createEventObject(); c.fireEvent(d, a) } }; i.$CancelEvent }; i.$StopEvent }; i.$CreateCallback }; i.$InnerText }; i.$InnerHtml }; i.$ClearInnerHtml }; i.$Children }} i.$FindChild = sb} i.If = nb; i.Qf }; i.Gb = function (a, f, d) { d = d || "u"; var e; do { if (a.nodeType == 1) { var c = b.$AttributeEx(a, d); if (c && c == Hb(f, c)) { e = a; break } } a = b.nc(a) } while (a && a != h.body); return e }} i.s = G} i.Xd = function (a) { return H(a) == "function" }; i.qf }; i.cc }; i.$Each = n; i.Yd = D} i.$CreateElement = U; i.$CreateDiv = function () { return U("DIV") }; i.Of }; i.Cd }} i.$Attribute = y; i.$AttributeEx = X; i.ac = function (d, b, c) { var a = i.Zc(y(d, b)); if (isNaN(a)) a = c; return a }} function wb(b) { var a = {}; n(b, function (b) { if (b != f) a[b] = b }); return a } i.Nf = wb; i.Pf = yb} i.nc }; i.U }; i.D }; i.Kf = function (b, a) { b.removeAttribute(a) }; i.Lf }; i.Xf }; i.W }; i.$AppendChild }; i.Bb }; i.Qb }; i.wf }; i.sc }; i.qd = function (a, b) { var c = i.nc(a); b & 1 && i.z(a, (i.$CssWidth(c) - i.$CssWidth(a)) / 2); b & 2 && i.C(a, (i.$CssHeight(c) - i.$CssHeight(a)) / 2) }; var V = { $Top: g, $Right: g, $Bottom: g, $Left: g, u: g, v: g }; i.sf = function (a) { var b = i.$CreateDiv(); s(b, { rf: "block", mb: i.K(a), $Top: 0, $Left: 0, u: 0, v: 0 }); var d = i.pd(a, V); i.Bb(b, a); i.$AppendChild(b, a); var e = i.pd(a, V), c = {}; n(d, function (b, a) { if (b == e[a]) c[a] = b }); s(b, V); s(b, c); s(a, { $Top: 0, $Left: 0 }); return c }; i.Oc }; i.Zc = q} i.$CloneNode = Y; i.Ib = function (e, f) { var a = new Image} if (ob() && l < 11.6 || !e) b(!e); else { i.$AddEvent(a, "load", b); i.$AddEvent(a, "abort", c); i.$AddEvent(a, "error", c); if (/(.jpg|.jpeg|.png|.gif|.ico){1}/.test(e)) { a.src = e } else { a.src ='https://nwzimg.wezhan.cn/error.jpg'} } }; i.Gf }; i.md }; function Fb(a) { var l = this, p = "", r = ["av", "pv", "ds", "dn"], d = [], q, k = 0, g = 0, e = 0; function j() { K(a, q, (d[e || g & 2 || g] || "") + " " + (d[k] || "")); b.$Css(a, "pointer-events", e ? "none" : "") } function c() { k = 0; j(); i.T(h, "mouseup", c); i.T(h, "touchend", c); i.T(h, "touchcancel", c) } function o(a) { if (e) i.$CancelEvent(a); else { k = 4; j(); i.$AddEvent(h, "mouseup", c); i.$AddEvent(h, "touchend", c); i.$AddEvent(h, "touchcancel", c) } } l.id }; l.$Enable }; l.$Elmt = a = i.$GetElement(a); y(a, "data-jssor-button", "1"); var m = b.Pf(z(a)); if (m) p = m.shift(); n(r}); q = cb(" ", d); d.unshift(""); i.$AddEvent(a, "mousedown", o); i.$AddEvent(a, "touchstart", o) } i.Rb }; i.$Css = x; i.xb = m("overflow"); i.C = m("top", 2); i.sg = m("right", 2); i.vg = m("bottom", 2); i.z = m("left", 2); i.$CssWidth = m("width", 2); i.$CssHeight = m("height", 2); i.Bf = m("marginLeft", 2); i.rg = m("marginTop", 2); i.K = m("position"); i.nb = m("display"); i.A = m("zIndex", 1); i.Ic }; i.$CssCssText }; i.ug }; var L; i.xg = L = { $Opacity: i.Ic, $Top: i.C, $Right: i.sg, $Bottom: i.vg, $Left: i.z, u: i.$CssWidth, v: i.$CssHeight, mb: i.K, rf: i.nb, $ZIndex: i.A }; i.pd = function (c, b) { var a = {}; n(b, function (d, b) { if (L[b]) a[b] = L[b](c) }); return a }; function s(h, l) { var e = gb(), b = I(), d = eb(), j = O(h); function k(b, d, a) { var e = b.jb(p(-d / 2, -a / 2)), f = b.jb(p(d / 2, -a / 2)), g = b.jb(p(d / 2, a / 2)), h = b.jb(p(-d / 2, a / 2)); b.jb(p(300, 300)); return p(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2) } function a(d, a) { a = a || {}; var n = a.$TranslateZ || 0, p = (a.$RotateX || 0) % 360, q = (a.$RotateY || 0) % 360, u = (a.$Rotate || 0) % 360, l = a.$ScaleX, m = a.$ScaleY, g = a.sh; if (l == f) l = 1; if (m == f) m = 1; if (g == f) g = 1; if (e) { n = 0; p = 0; q = 0; g = 0 } var c = new Bb(a.$TranslateX, a.$TranslateY, n); c.$RotateX(p); c.$RotateY(q); c.gg(u); c.cg(a.$SkewX, a.$SkewY); c.$Scale(l, m, g); if (b) { c.$Move(a.B, a.E); d.style[j] = c.eg() } else if (!B || B < 9) { var o = "", h = { x: 0, y: 0 }; if (a.$OriginalWidth) h = k(c, a.$OriginalWidth, a.$OriginalHeight); i.rg(d, h.y); i.Bf(d, h.x); o = c.ig(); var s = d.style.filter, t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), r = E(s, [t], o); T(d, r) } } s = function (e, c) { c = c || {}; var j = c.B, k = c.E, h; n(L}); i.Xf(e, c.$Clip); if (!b) { j != f && i.z(e, (c.wd || 0) + j); k != f && i.C(e, (c.sd || 0) + k) } if (c.jg) if (d) xb(i.$CreateCallback(g, Q, e, c)); else a(e, c) }; if (d); if (e); else if (!b) a = Q; i.G = s; s(h, l) } i.G = s; function Bb(j, k, o) { var d = this, b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1], i = c.sin, h = c.cos, l = c.tan} d.$Scale }; d.$Move }; d.$RotateX }; d.$RotateY }; d.gg }; d.cg }; d.jb }; d.eg }; d.ig } } new (function () { var a = this} a.$ScaleX }; a.$ScaleY }; a.vd }; a.jb } }); var R = { wd: 0, sd: 0, B: 0, E: 0, $Zoom: 1, $ScaleX: 1, $ScaleY: 1, $Rotate: 0, $RotateX: 0, $RotateY: 0, $TranslateX: 0, $TranslateY: 0, $TranslateZ: 0, $SkewX: 0, $SkewY: 0 }; i.Hc = function (c, d) { var a = c || {}; if (c) if (b.Xd(c)) a = { Z: a }; else if (b.Xd(c.$Clip)) a.$Clip = { Z: c.$Clip }; a.Z = a.Z || d; if (a.$Clip) a.$Clip.Z = a.$Clip.Z || d; return a }} i.ae = vb; i.Qc = function (n, j, s, t, B, C, o) { var a = j; if (n) { a = {}; for (var i in j) { var D = C[i] || 1, z = B[i] || [0, 1], h = (s - z[0]) / z[1]; h = c.min(c.max(h, 0), 1); h = h * D; var x = c.floor(h); if (h != x) h -= x; var k = t.Z || e.$Linear, m, E = n[i], q = j[i]; if (b.cc(q)) { k = t[i] || k; var A = k(h); m = E + q * A } else { m = b.s({ bc: {} }, n[i]); var y = t[i] || {}; b.$Each(q.bc || q}) } a[i] = m } var w = b.$Each(j}); w && b.$Each(R}); if (w) { if (a.$Zoom) a.$ScaleX = a.$ScaleY = a.$Zoom; a.$OriginalWidth = o.$OriginalWidth; a.$OriginalHeight = o.$OriginalHeight; if (r() && l >= 11 && (j.B || j.E) && s != 0 && s != 1) a.$Rotate = a.$Rotate || 1e-8; a.jg = d } } if (j.$Clip && o.$Move) { var p = a.$Clip.bc, v = (p.$Top || 0) + (p.$Bottom || 0), u = (p.$Left || 0) + (p.$Right || 0); a.$Left = (a.$Left || 0) + u; a.$Top = (a.$Top || 0) + v; a.$Clip.$Left -= u; a.$Clip.$Right -= u; a.$Clip.$Top -= v; a.$Clip.$Bottom -= v } if (a.$Clip && b.Lf() && !a.$Clip.$Top && !a.$Clip.$Left && !a.$Clip.E && !a.$Clip.B && a.$Clip.$Right == o.$OriginalWidth && a.$Clip.$Bottom == o.$OriginalHeight) a.$Clip = g; return a } }} var l = function (A, D, g, L, O, J) { A = A || 0; var a = this, p, m, n, t, B = 0, H, I, G, C, z = 0, h = 0, l = 0, y, i, e, f, o, x, v = [], w} function s(p) { var j = p; if (o) if (!x && (j >= f || j < e) || x && j >= e) j = ((j - e) % o + o) % o + e; if (!y || t || h != j) { var k = c.min(j, f); k = c.max(k, e); if (!y || t || k != l) { if (J) { var m = (k - i) / (D || 1); if (g.$Reverse) m = 1 - m; var n = b.Qc(O, J, m, H, G, I, g); if (w) b.$Each(n}); else b.G(L, n) } a.Nc(l - i, k - i); var r = l, q = l = k; b.$Each(v, function (b, c) { var a = !y && x || j <= h ? v[v.length - c - 1] : b; a.F(l - z) }); h = j; y = d; a.dc(r, q) } } } var u = j.requestAnimationFrame || j.webkitRequestAnimationFrame || j.mozRequestAnimationFrame || j.msRequestAnimationFrame; if (b.$IsBrowserSafari() && b.$BrowserVersion() < 7 || !u) u }} a.$Play }; a.Pc = r; a.sb = M; a.Be = function (a) { r(a) }; a.bb = function () { return h }; a.Bd = function () { return m }; a.Eb = function () { return l }; a.F = s; a.me }; a.$Move }; a.$IsPlaying = function () { return p }; a.fe = function (a) { o = a }; a.$Shift = P; a.P }; a.yc }; a.hd }; a.fc = function () { return e }; a.lb = function () { return f }; a.dc = a.Yc = a.ed = a.Nc = b.Cd; a.Jc = b.W(); g = b.s({ $Interval: 16, gd: 50 }, g); o = g.Lc; x = g.cf; w = g.Ze; e = i = A; f = A + D; I = g.$Round || {}; G = g.$During || {}; H = b.Hc(g.$Easing) }; var m = { Mb: "data-scale", vc: "data-scale-ratio", rb: "data-autocenter" }, n = new function () { var a = this; a.R }; a.Xb } }, q = j.$JssorSlideshowFormations$ = new function () { var h = this, b = 0, a = 1, f = 2, e = 3, s = 1, r = 2, t = 4, q = 8, w = 256, x = 512, v = 1024, u = 2048, j = u + s, i = u + r, o = x + s, m = x + r, n = w + t, k = w + q, l = v + t, p = v + q; function y(a) { return (a & r) == r } h.$FormationStraight }; h.$FormationSwirl }; h.$FormationZigZag }; h.$FormationStraightStairs }; h.$FormationSquare = function (i) { var a = i.$Cols || 1, b = i.$Rows || 1, j = [], d, e, f, h, k; f = a < b ? (b - a) / 2 : 0; h = a > b ? (a - b) / 2 : 0; k = c.round(c.max(a / 2, b / 2)) + 1; for (d = 0; d < a; d++)for (e = 0; e < b; e++)g(j, k - c.min(d + 1 + f, e + 1 + h, a - d + f, b - e + h), [e, d]); return j }; h.$FormationRectangle }; h.$FormationRandom }; h.$FormationCircle }; h.$FormationCross }; h.$FormationRectangleCross } }; j.$JssorSlideshowRunner$ = function (m, s, p, u, z, A) { var a = this, v, h, f, y = 0, x = u.$TransitionsOrder, r, i = 8; function t(a) { if (a.$Top) a.E = a.$Top; if (a.$Left) a.B = a.$Left; b.$Each(a}) } function j(h, f, g) { var a = { $Interval: f, $Duration: 1, $Delay: 0, $Cols: 1, $Rows: 1, $Opacity: 0, $Zoom: 0, $Clip: 0, $Move: k, $SlideOut: k, $Reverse: k, $Formation: q.$FormationRandom, $Assembly: 1032, $ChessMode: { $Column: 0, $Row: 0 }, $Easing: e.$Linear, $Round: {}, Yb: [], $During: {} }; b.s(a, h); if (a.$Rows == 0) a.$Rows = c.round(a.$Cols * g); t(a); a.Ob = a.$Cols * a.$Rows; a.$Easing = b.Hc(a.$Easing, e.$Linear); a.Me = c.ceil(a.$Duration / a.$Interval); a.Le }; if (a.$Brother) { a.$Brother = j(a.$Brother, f, g); a.$SlideOut = d } return a } function n(z, i, a, v, n, l) { var y = this, t, u = {}, h = {}, m = [], f, e, r, p = a.$ChessMode.$Column || 0, q = a.$ChessMode.$Row || 0, g = a.Le(n, l), o = B(a), C = o.length - 1, s = a.$Duration + a.$Delay * C, w = v + s, j = a.$SlideOut, x; w += 50} y.fd = w; y.Zb }; i = b.$CloneNode(i); A(i, 0, 0); b.$Each(o, function (i, m) { b.$Each(i, function (G) { var I = G[0], H = G[1], v = I + "," + H, o = k, s = k, x = k; if (p && H % 2) { if (p & 3) o = !o; if (p & 12) s = !s; if (p & 16) x = !x } if (q && I % 2) { if (q & 3) o = !o; if (q & 12) s = !s; if (q & 16) x = !x } a.$Top = a.$Top || a.$Clip & 4; a.$Bottom = a.$Bottom || a.$Clip & 8; a.$Left = a.$Left || a.$Clip & 1; a.$Right = a.$Right || a.$Clip & 2; var C = s ? a.$Bottom : a.$Top, z = s ? a.$Top : a.$Bottom, B = o ? a.$Right : a.$Left, A = o ? a.$Left : a.$Right; a.$Clip = C || z || B || A; r = {}; e = { E: 0, B: 0, $Opacity: 1, u: n, v: l }; f = b.s({}, e); t = b.s({}, g[v]); if (a.$Opacity) e.$Opacity = 2 - a.$Opacity; if (a.$ZIndex) { e.$ZIndex = a.$ZIndex; f.$ZIndex = 0 } var K = a.$Cols * a.$Rows > 1 || a.$Clip; if (a.$Zoom || a.$Rotate) { var J = d; if (J) { e.$Zoom = a.$Zoom ? a.$Zoom - 1 : 1; f.$Zoom = 1; var N = a.$Rotate || 0; e.$Rotate = N * 360 * (x ? -1 : 1); f.$Rotate = 0 } } if (K) { var i = t.bc = {}; if (a.$Clip) { var w = a.$ScaleClip || 1; if (C && z) { i.$Top = g.v / 2 * w; i.$Bottom = -i.$Top } else if (C) i.$Bottom = -g.v * w; else if (z) i.$Top = g.v * w; if (B && A) { i.$Left = g.u / 2 * w; i.$Right = -i.$Left } else if (B) i.$Right = -g.u * w; else if (A) i.$Left = g.u * w } r.$Clip = t; f.$Clip = g[v] } var L = o ? 1 : -1, M = s ? 1 : -1; if (a.x) e.B += n * a.x * L; if (a.y) e.E += l * a.y * M; b.$Each(e}); u[v] = j ? f : e; var D = a.Me, y = c.round(m * a.$Delay / a.$Interval); h[v] = new Array(y); h[v].Oe = y; h[v].Ne = y + D - 1; for (var F = 0; F <= D; F++) { var E = b.Qc(f, r, F / D, a.$Easing, a.$During, a.$Round, { $Move: a.$Move, $OriginalWidth: n, $OriginalHeight: l }); E.$ZIndex = E.$ZIndex || 1; h[v].push(E) } }) }); o.reverse(); b.$Each(o}) } a.Fe }; a.Ce = function (x, y, k, l, b, t) { a.ub(); r = b; b = j(b, i, t); var g = l.rd, e = k.rd; g["no-image"] = !l.ic; e["no-image"] = !k.ic; var o = g, q = e, w = b, d = b.$Brother || j({}, i, t); if (!b.$SlideOut) { o = e; q = g } var u = d.$Shift || 0; h = new n(m, q, d, c.max(u - d.$Interval, 0), s, p); f = new n(m, o, w, c.max(d.$Interval - u, 0), s, p); h.Zb(0); f.Zb(0); v = c.max(h.fd, f.fd); a.tb = x }; a.ub }; a.Ke }; if (z && b.$WebKitVersion() < 537) i = 16; o.call(a); l.call(a, -1e7, 1e7) }; var p = { kc: 1 }; j.$JssorBulletNavigator$ = function (a, E) { var f = this; o.call(f); a = b.$GetElement(a); var u, C, B, t, l = 0, e, q, j, y, z, i, h, s, r, D = [], A = []} f.$Elmt = a; f.pc }; f.qc = function (c) { b.D(a, c) }; var w; f.Mc = function (x) { if (!w) { u = c.ceil(x / q); l = 0; var n = s + y, o = r + z, m = c.ceil(u / j) - 1; C = s + n * (!i ? m : j - 1); B = r + o * (i ? m : j - 1); b.$CssWidth(a, C); b.$CssHeight(a, B); for (var f = 0; f < u; f++) { var t = b.Of(); b.$InnerText(t, f + 1); var k = b.md(h, "numbertemplate", t, d); b.K(k, "absolute"); var p = f % (m + 1); b.z(k, !i ? n * p : f % j * n); b.C(k, i ? o * p : c.floor(f / (m + 1)) * o); b.$AppendChild(a, k); D[f] = k; e.$ActionMode & 1 && b.$AddEvent(k, "click", b.$CreateCallback(g, v, f)); e.$ActionMode & 2 && b.$AddEvent(k, "mouseenter", b.$CreateCallback(g, v, f)); A[f] = b.Rb(k) } w = d } }; f.Vb = e = b.s({ $SpacingX: 10, $SpacingY: 10, $Orientation: 1, $ActionMode: 1 }, E); h = b.$FindChild(a, "prototype"); s = b.$CssWidth(h); r = b.$CssHeight(h); b.Qb(h, a); q = e.$Steps || 1; j = e.$Rows || 1; y = e.$SpacingX; z = e.$SpacingY; i = e.$Orientation - 1; e.$Scale == k && n.R(a, m.Mb, 1); e.$AutoCenter && n.R(a, m.rb, e.$AutoCenter); n.Xb(a) }; j.$JssorArrowNavigator$ = function (a, f, i) { var c = this; o.call(c); var t, e, h, j; b.$CssWidth(a); b.$CssHeight(a); var r, q} function u() { r.$Enable(i.$Loop || e > 0); q.$Enable(i.$Loop || e < t - i.$Cols) } c.pc = function (b, a, c) { if (c) e = a; else { e = b; u() } }; c.qc = v; var s; c.Mc = function (c) { t = c; e = 0; if (!s) { b.$AddEvent(a, "click", b.$CreateCallback(g, l, -j)); b.$AddEvent(f, "click", b.$CreateCallback(g, l, j)); r = b.Rb(a); q = b.Rb(f); s = d } }; c.Vb = h = b.s({ $Steps: 1 }, i); j = h.$Steps; if (h.$Scale == k) { n.R(a, m.Mb, 1); n.R(f, m.Mb, 1) } if (h.$AutoCenter) { n.R(a, m.rb, h.$AutoCenter); n.R(f, m.rb, h.$AutoCenter) } n.Xb(a); n.Xb(f) }; j.$JssorThumbnailNavigator$ = function (h, D) { var j = this, A, s, a, x = [], B, z, e, t, u, w, v, r, l, f, q; o.call(j); h = b.$GetElement(h); function C(o, f) { var h = this, c, n, m} function i(g) { if (g || !l.re()) { var a = e - f % e, b = l.bd((f + a) / e - 1), c = b * e + e - a; j.k(p.kc, c, k, d) } } h.tb = f; h.dd = r; m = o.oe || o.ic || b.$CreateDiv(); h.mc = c = b.md(q, "thumbnailtemplate", m, d); n = b.Rb(c); a.$ActionMode & 1 && b.$AddEvent(c, "click", b.$CreateCallback(g, i, 0)); a.$ActionMode & 2 && b.$AddEvent(c, "mouseenter", b.$CreateCallback(g, i, 1)) } j.pc = function (b, d, f) { var a = s; s = b; a != -1 && x[a].dd(); x[b].dd(); !f && l.$PlayTo(l.bd(c.floor(d / e))) }; j.qc = function (a) { b.D(h, a) }; var y; j.Mc = function (G, D) { if (!y) { A = G; c.ceil(A / e); s = -1; r = c.min(r, D.length); var g = a.$Orientation & 1, o = w + (w + t) * (e - 1) * (1 - g), n = v + (v + u) * (e - 1) * g, q = o + (o + t) * (r - 1) * g, p = n + (n + u) * (r - 1) * (1 - g); b.K(f, "absolute"); b.xb(f, "hidden"); b.z(f, (B - q) / 2); b.C(f, (z - p) / 2); b.$CssWidth(f, q); b.$CssHeight(f, p); var m = []; b.$Each(D}); var F = b.s({ $AutoPlay: 0, $NaviQuitDrag: k, $SlideWidth: o, $SlideHeight: n, $SlideSpacing: t * g + u * (1 - g), $MinDragOffsetToSlide: 12, $SlideDuration: 200, $PauseOnHover: 1, $PlayOrientation: a.$Orientation, $DragOrientation: a.$NoDrag || a.$DisableDrag ? 0 : a.$Orientation }, a); l = new i(h, F); j.Jf = l.Jf; y = d } }; j.Vb = a = b.s({ $SpacingX: 0, $SpacingY: 0, $Cols: 1, $Orientation: 1, $ActionMode: 1 }, D); B = b.$CssWidth(h); z = b.$CssHeight(h); f = b.$FindChild(h, "slides", d); q = b.$FindChild(f, "prototype"); w = b.$CssWidth(q); v = b.$CssHeight(q); b.Qb(q, f); e = a.$Rows || 1; t = a.$SpacingX; u = a.$SpacingY; r = a.$Cols; a.$Scale == k && n.R(h, m.Mb, 1); a.$AutoCenter &= a.$Orientation; a.$AutoCenter && n.R(h, m.rb, a.$AutoCenter); n.Xb(h) }; function r(e, d, c) { var a = this; l.call(a, 0, c); a.cd = b.Cd; a.Wc = 0; a.Vc = c } j.$JssorCaptionSlideo$ = function (v, j, u, E) { var a = this, w, o = {}, p = j.$Transitions, s = j.$Controls, m = new l(0, 0), q = [], h = [], D = E, f = D ? 1e8 : 0; l.call(a, 0, 0)} function t(d, e) { var a = [], c = b.$Children(d); b.$Each(c, function (c) { var h = b.$AttributeEx(c, "u") == "caption"; if (h) { var d = b.$AttributeEx(c, "t"), g = p[b.Oc(d)] || p[d], f = { $Elmt: c, Kc: g }; a.push(f) } a = a.concat(t(c, e + 1)) }); return a } function n(c, e) { var a = q[c]; if (a == g) { a = q[c] = { X: c, wc: [], Ud: [] }; var d = 0; !b.$Each(h, function (a, b) { d = b; return a.X > c }) && d++; h.splice(d, 0, a) } return a } function z(t, u, h) { var a, e; if (s) { var o = b.$AttributeEx(t, "c"); if (o) { var m = s[b.Oc(o)]; if (m) { a = n(m.r, 0); a.Mf = m.e || 0 } } } b.$Each(u, function (i) { var g = b.s(d, {}, r(i)), j = b.Hc(g.$Easing); delete g.$Easing; if (g.$Left) { g.B = g.$Left; j.B = j.$Left; delete g.$Left } if (g.$Top) { g.E = g.$Top; j.E = j.$Top; delete g.$Top } var o = { $Easing: j, $OriginalWidth: h.u, $OriginalHeight: h.v }, k = new l(i.b, i.d, o, t, h, g); f = c.max(f, i.b + i.d); if (a) { if (!e) e = new l(i.b, 0); e.P(k) } else { var m = n(i.b, i.b + i.d); m.wc.push(k) } h = b.ae(h, g) }); if (a && e) { e.me(); var i = e, k, j = e.fc(), p = e.lb(), q = c.max(p, a.Mf); if (a.X < p) { if (a.X > j) { i = new l(j, a.X - j); i.P(e, d) } else i = g; k = new l(a.X, q - j, { Lc: q - a.X, cf: d }); k.P(e, d) } i && a.wc.push(i); k && a.Ud.push(k) } return h } function A(e) { var c = m.fc(), d = 0; b.$Each(e, function (e, f) { e = b.s({ d: u }, e); B(e, c, d); c = e.b; d += e.d; if (!f || e.t == 2) { a.Wc = c; a.Vc = c + e.d } }) } function i(k, d, e) { var g = d.length; if (g > 4) for (var m = c.ceil(g / 4), a = 0; a < m; a++) { var h = d.slice(a * 4, c.min(a * 4 + 4, g)), j = new l(h[0].X, 0); i(j, h, e); k.P(j) } else b.$Each(d, function (a) { b.$Each(e ? a.Ud : a.wc, function (a) { e && a.hd(f - a.lb()); k.P(a) }) }) } a.cd }; w = [e.$Linear, e.$Swing, e.$InQuad, e.$OutQuad, e.$InOutQuad, e.$InCubic, e.$OutCubic, e.$InOutCubic, e.$InQuart, e.$OutQuart, e.$InOutQuart, e.$InQuint, e.$OutQuint, e.$InOutQuint, e.$InSine, e.$OutSine, e.$InOutSine, e.$InExpo, e.$OutExpo, e.$InOutExpo, e.$InCirc, e.$OutCirc, e.$InOutCirc, e.$InElastic, e.$OutElastic, e.$InOutElastic, e.$InBack, e.$OutBack, e.$InOutBack, e.$InBounce, e.$OutBounce, e.$InOutBounce, e.$Early, e.$Late]; var C = { $Top: "y", $Left: "x", $Bottom: "m", $Right: "t", $Rotate: "r", $RotateX: "rX", $RotateY: "rY", $ScaleX: "sX", $ScaleY: "sY", $TranslateX: "tX", $TranslateY: "tY", $TranslateZ: "tZ", $SkewX: "kX", $SkewY: "kY", $Opacity: "o", $Easing: "e", $ZIndex: "i", $Clip: "c" }; b.$Each(C}); y(t(v, 1)); i(m, h); var x = j.$Breaks || [], k = [].concat(x[b.Oc(b.$AttributeEx(v, "b"))] || []); k.push({ b: f, d: k.length ? 0 : u }); A(k); f = c.max(f, a.lb()); i(a, h, d); a.F(-1) }; var i = j.$JssorSlider$ = function () { var a = this; b.Ef(a, o); var ub = "data-jssor-slider", Sb = "data-jssor-thumb", w, n, X, fb, V, jb, U, eb, H, G, Kb, fc, jc = 1, ec = 1, Tb = 1, Xb = {}, z, R, sb, Mb, Jb, ib, wb, vb, db, s = -1, N, yb, q, K, I, Gb, ob, pb, qb, t, S, x, P, Ib, Z = [], bc, cc, Yb, kc, Fc, v, gb, F, ac, nb, xb, zb, mb, Ab, L, hb, Q, J = 1, T, D, Y, Bb = 0, Cb = 0, M, kb, lb, Nb, y, bb, A, Db, ab = [], Ob = b.$Device(), Fb = Ob.qg, B = [], C, O, E, tb, Rb, W; function sc(e, n, o) { var k = this, h = { $Top: 2, $Right: 1, $Bottom: 2, $Left: 1 }, l = { $Top: "top", $Right: "right", $Bottom: "bottom", $Left: "left" }, g, a, f, i, j = {}; k.$Elmt = e; k.$ScaleSize = function (q, k) { var p, s = q, r = k; if (!f) { f = b.sf(e); g = e.parentNode; i = { $Scale: b.ac(e, m.Mb, 1), $AutoCenter: b.ac(e, m.rb) }; b.$Each(l}); a = e; if (n) { a = b.$CloneNode(g, d); b.G(a, { $Top: 0, $Left: 0 }); b.$AppendChild(a, e); b.$AppendChild(g, a) } } if (o) p = q > k ? q : k; else s = r = p = c.pow(H < G ? k : q, i.$Scale); b.Vf(a, p); b.$Attribute(a, m.vc, p); b.$CssWidth(g, f.u * s); b.$CssHeight(g, f.v * r); var t = b.$IsBrowserIE() && b.$BrowserEngineVersion() < 9 || b.$BrowserEngineVersion() < 10 && b.$IsBrowserIeQuirks() ? p : 1, u = (s - t) * f.u / 2, v = (r - t) * f.v / 2; b.z(a, u); b.C(a, v); b.$Each(f, function (d, a) { if (h[a] && d) { var e = (h[a] & 1) * c.pow(q, j[a]) * d + (h[a] & 2) * c.pow(k, j[a]) * d / 2; b.xg[a](g, e) } }); b.qd(g, i.$AutoCenter) } } function Ec() { var b = this; l.call(b, -1e8, 2e8); b.Wf = function () { var a = b.Eb(), d = c.floor(a), f = u(d), e = a - c.floor(a); return { tb: f, Yf: d, mb: e } }; b.dc = function (e, b) { var f = c.floor(b); if (f != b && b > e) f++; dc(f, d); a.k(i.$EVT_POSITION_CHANGE, u(b), u(e), b, e) } } function uc(o, m) { var b = this, e, f, h, j, c; l.call(b, -1e8, 2e8, { gd: 100 }); b.Yc }; b.ed = function () { T = k; j = k; var b = y.Wf(); a.k(i.$EVT_SWIPE_END, u(y.bb()), y.bb()); !b.mb && Gc(b.Yf, s) }; b.dc }; b.jc }; b.pf }; b.of }; y = new Ec; y.P(o); y.P(m) } function Bc(m, f) { var e = this, r, L, y, j, z = [], x, D, T, H, P, F, J, h, w, p; l.call(e, -t, t + 1, {}); function E(a) { r && r.cd(); S(m, a, 0); F = d; r = new V.$Class(m, V, b.Zc(b.$AttributeEx(m, "idle")) || ac, !v); r.F(0) } function U(g, b, c, d) { if (d == Y && s == f && v) if (!Fc) { var a = u(g); C.Ce(a, f, b, e, c, I / K); b.zf(); bb.$Shift(a - bb.fc() - 1); bb.F(a); A.jc(a, a, 0) } } function Z(b) { if (b == Y && s == f) { if (!h) { var a = g; if (C) if (C.tb == f) a = C.Ke(); else C.ub(); W(); h = new Ac(m, f, a, r); h.Md(p) } !h.$IsPlaying() && h.Ac() } } function G(a, d, k) { if (a == f) { if (a != d) B[d] && B[d].Qd(); else !k && h && h.tg(); p && p.$Enable(); var l = Y = b.W(); e.Ib(b.$CreateCallback(g, Z, l)) } else { var j = c.min(f, a), i = c.max(f, a), o = c.min(i - j, j + q - i), m = t + n.$LazyLoading - 1; (!P || o <= m) && e.Ib() } } e.Ib = function (e, c) { c = c || y; if (z.length && !H) { b.D(c); if (!T) { T = d; a.k(i.$EVT_LOAD_START, f); b.$Each(z, function (a) { if (!b.$Attribute(a, "src")) { a.src = b.$AttributeEx(a, "src2") || ""; b.nb(a, a["display-origin"]) } }) } b.Gf(z, j, b.$CreateCallback(g, N, e, c)) } else N(e, c) }; e.og = function () { if (q == 1) { e.Qd(); G(f, f) } else if (C) { var a = C.Fe(q); if (a) { var h = Y = b.W(), c = f + gb, d = B[u(c)]; return d.Ib(b.$CreateCallback(g, U, c, d, a, h), y) } } else Hb(gb) }; e.Bc }; e.Qd }; e.zf = function () { b.U(m) }; e.Zd }; e.hg }; function S(a, f, c, h) { if (b.$Attribute(a, ub)) return; if (!F) { if (a.tagName == "IMG") { z.push(a); if (!b.$Attribute(a, "src")) { P = d; a["display-origin"] = b.nb(a); b.U(a) } } var e = b.ug(a); if (e) { var g = new Image; b.$AttributeEx(g, "src2", e); z.push(g) } c && b.A(a, (b.A(a) || 0) + 1) } var i = b.$Children(a); b.$Each(i, function (a) { var e = a.tagName, g = b.$AttributeEx(a, "u"); if (g == "player" && !w) { w = a; if (w.pInstance) O(); else b.$AddEvent(w, "dataavailable", O) } if (g == "caption") { if (f) { b.xf(a, b.$AttributeEx(a, "to")); b.vf(a, b.$AttributeEx(a, "bf")); J && b.$AttributeEx(a, "3d") && b.tf(a, "preserve-3d") } } else if (!F && !c && !j) { if (e == "A") { if (b.$AttributeEx(a, "u") == "image") j = b.If(a, "IMG"); else j = b.$FindChild(a, "image", d); if (j) { x = a; b.nb(x, "block"); b.G(x, db); D = b.$CloneNode(x, d); b.K(x, "relative"); b.Ic(D, 0); b.$Css(D, "backgroundColor", "#000") } } else if (e == "IMG" && b.$AttributeEx(a, "u") == "image") j = a; if (j) { j.border = 0; b.G(j, db) } } S(a, f, c + 1, h) }) } e.Nc }; e.tb = f; o.call(e); J = b.$AttributeEx(m, "p"); b.uf(m, J); b.Uf(m, b.$AttributeEx(m, "po")); var M = b.$FindChild(m, "thumb", d); if (M) { e.oe = b.$CloneNode(M); b.U(M) } b.D(m); y = b.$CloneNode(R); b.A(y, 1e3); b.$AddEvent(m, "click", X); E(d); e.ic = j; e.Vd = D; e.rd = m; e.mc = L = m; b.$AppendChild(L, y); a.$On(203, G); a.$On(28, cb); a.$On(24, ab) } function Ac(z, g, p, q) { var c = this, n = 0, u = 0, h, j, f, e, m, t, r, o = B[g]; l.call(c, 0, 0)} c.Ac = function () { var b = c.Eb(); if (!D && !T && !r && s == g) { if (!b) { if (h && !m) { m = d; c.Jd(d); a.k(i.$EVT_SLIDESHOW_START, g, n, u, h, e) } w() } var k, p = i.$EVT_STATE_CHANGE; if (b != e) if (b == f) k = e; else if (b == j) k = f; else if (!b) k = j; else k = c.Bd(); a.k(p, g, b, n, j, f, e); var l = v && (!F || J); if (b == e) (f != e && !(F & 12) || l) && o.og(); else (l || b != f) && c.Pc(k, x) } }; c.tg }; c.kg }; c.Jd }; c.Nc }; c.Md }; p && c.yc(p); h = c.lb(); c.yc(q); j = h + q.Wc; e = c.lb(); f = v ? h + q.Vc : e } function ic(c, b) { var a = x > 0 ? x : X, d = ob * b * (a & 1), e = pb * b * (a >> 1 & 1); Ub(c, d, e) } function lc(f) { if (!D && (J || !(F & 12)) && !A.$IsPlaying()) { var b = y.bb(), a = c.ceil(E); if (f && c.abs(M) >= n.$MinDragOffsetToSlide) { a = c.ceil(b); a += lb } if (!(L & 1)) a = c.min(q - t, c.max(a, 0)); var d = c.abs(a - b); if (d < 1 && n.$SlideEasing != e.$Linear) d = 1 - c.pow(1 - d, 5); if (!Q && tb) A.Be(Rb); else if (b == a) { yb.hg(); yb.Bc() } else A.jc(b, a, d * nb) } } function hc(c, j) { c = b.Sd(c); var e = b.$EvtSrc(c); Ib = k; var l = b.Gb(e, "1", Sb); if ((!l || l === w) && !P && (!j || c.touches.length == 1) && !b.Gb(e, "nodrag") && zc()) { var n = b.Gb(e, f, m.vc); if (n) Tb = b.$Attribute(n, m.vc); if (j) { var p = c.touches[0]; Bb = p.clientX; Cb = p.clientY } else { var o = b.Rd(c); Bb = o.x; Cb = o.y } D = d; Y = g; b.$AddEvent(h, j ? "touchmove" : "mousemove", Lb); b.W(); Q = 0; mc(); if (!tb) x = 0; M = 0; kb = 0; lb = 0; a.k(i.$EVT_DRAG_START, u(E), E, c) } } function Lb(a) { if (D) { a = b.Sd(a); var e; if (a.type != "mousemove") if (a.touches.length == 1) { var m = a.touches[0]; e = { x: m.clientX, y: m.clientY } } else cb(); else e = b.Rd(a); if (e) { var f = e.x - Bb, g = e.y - Cb; if (x || c.abs(f) > 1.5 || c.abs(g) > 1.5) { if (c.floor(E) != E) x = x || X & P; if ((f || g) && !x) if (P == 3) if (c.abs(g) > c.abs(f)) x = 2; else x = 1; else { x = P; var n = [0, c.abs(f), c.abs(g)], p = n[x], o = n[~x & 3]; if (o > p) Ib = d } if (x && !Ib) { var l = g, h = pb; if (x == 1) { l = f; h = ob } if (M - kb < -1.5) lb = 0; else if (M - kb > 1.5) lb = -1; kb = M; M = l; W = E - M / h / Tb; if (!(L & 1)) { var j = 0, i = [-E, 0, E - q + t]; b.$Each(i, function (b, d) { if (b > 0) { var a = c.pow(b, 1 / 1.6); a = c.tan(a * c.PI / 2); j = (a - b) * (d - 1) } }); var k = j + W; i = [-k, 0, k - q + t]; b.$Each(i, function (a, b) { if (a > 0) { a = c.min(a, h); a = c.atan(a) * 2 / c.PI; a = c.pow(a, 1.6); W = a * (b - 1); if (b) W += q - t } }) } b.$CancelEvent(a); if (!T) A.pf(W); else A.of(W) } } } } } function cb() { wc(); if (D) { D = k; Q = M; b.W(); b.T(h, "mousemove", Lb); b.T(h, "touchmove", Lb); Q && v & 8 && (v = 0); A.sb(); var c = y.bb(); a.k(i.$EVT_DRAG_END, u(c), c, u(E), E); F & 12 && Zb(); lc(d) } } function rc(c) { var a = b.$EvtSrc(c), d = b.Gb(a, "1", ub); if (w === d) if (Q) { b.$StopEvent(c); while (a && w !== a) { (a.tagName == "A" || b.$Attribute(a, "data-jssor-button")) && b.$CancelEvent(c); a = a.parentNode } } else v & 4 && (v = 0) } function nc(a) { B[s]; s = u(a); yb = B[s]; y.F(s); dc(s); return s } function Gc(b, c) { x = 0; nc(b); if (v & 2 && (gb > 0 && s == q - 1 || gb < 0 && !s)) v = 0; a.k(i.$EVT_PARK, s, c) } function zc() { var b = i.Hd || 0, a = hb; if (Fb) a & 1 && (a &= 1); i.Hd |= a; return P = a & ~b } function u(b, a) { a = a || q || 1; return (b % a + a) % a } function rb(c, a, b) { v & 8 && (v = 0); Pb(c, nb, a, b) } function pc() { if (!J) { J = 1; Eb(); if (!D) { F & 12 && lc(); F & 3 && B[s] && B[s].Bc() } } a.k(i.$EVT_MOUSE_LEAVE) } function oc() { if (J) { J = 0; Eb(); D || !(F & 12) || mc() } a.k(i.$EVT_MOUSE_ENTER) } function qc() { b.$Each(ab, function (a) { b.G(a, db); b.K(a, "absolute"); b.xb(a, "hidden"); b.U(a) }); b.G(R, db) } function Pb(h, g, m, o) { if (Ab && (!D && (J || !(F & 12)) || n.$NaviQuitDrag)) { T = d; D = k; A.sb(); if (g == f) g = nb; var e = Nb.Eb(), b = h; if (m) { b = N + h; if (h > 0) b = c.ceil(b); else b = c.floor(b) } var a = b; if (!(L & 1)) if (o) a = u(a); else if (L & 2 && (a < 0 && !N || a > q - t && N >= q - t)) a = a < 0 ? q - t : 0; else a = c.max(0, c.min(a, q - t)); var l = (a - e) % q; a = e + l; var i = e == a ? 0 : g * c.abs(l), j = 1; if (t > 1) j = (X & 1 ? wb : vb) / qb; i = c.min(i, g * j * 1.5); A.jc(e, a, i || 1) } } a.$SlidesCount }; a.$CurrentIndex = function () { return s }; a.$AutoPlay = function (a) { if (a == f) return a; if (a != v) { v = a; v && B[s] && B[s].Bc() } }; a.$IsDragging = function () { return D }; a.$IsSliding = function () { return T }; a.$IsMouseOver }; a.re = function () { return Q }; a.$OriginalWidth = function () { return H }; a.$OriginalHeight }; a.$ScaleHeight }; a.$ScaleWidth = function (b) { if (b == f) return Kb || H; a.$ScaleSize(b,  G) }; a.$ScaleSize = function (c, a) { b.$CssWidth(w, c); b.$CssHeight(w, a); jc = c / H; ec = a / G; b.$Each(Xb}); if (!Kb) { b.Bb(S, z); b.C(S, 0); b.z(S, 0) } Kb = c; fc = a }; a.$PlayTo = Pb; a.$GoTo }; a.$Next }; a.$Prev }; a.$Pause }; a.$Play }; a.$SetSlideshowTransitions }; a.$SetCaptionTransitions }; a.bd = function (a) { var d = c.ceil(u(mb / qb)), b = u(a - N + d); if (b > t) { if (a - N > q / 2) a -= q; else if (a - N <= -q / 2) a += q } else a = N + b - d; if (!(L & 1)) a = u(a); return a }; a.gc = function (y, l) { a.$Elmt = w = b.$GetElement(y); H = b.$CssWidth(w); G = b.$CssHeight(w); n = b.s({ $FillMode: 0, $LazyLoading: 1, $ArrowKeyNavigation: 1, $StartIndex: 0, $AutoPlay: 0, $Loop: 1, $HWA: d, $NaviQuitDrag: d, $AutoPlaySteps: 1, $AutoPlayInterval: 3e3, $PauseOnHover: 1, $SlideDuration: 500, $SlideEasing: e.$OutQuad, $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $Cols: 1, $Align: 0, $UISearchMode: 1, $PlayOrientation: 1, $DragOrientation: 1 }, l); n.$HWA = n.$HWA && b.Ff(); if (n.$Idle != f) n.$AutoPlayInterval = n.$Idle; if (n.$ParkingPosition != f) n.$Align = n.$ParkingPosition; X = n.$PlayOrientation & 3; fb = n.$SlideshowOptions; V = b.s({ $Class: r }, n.$CaptionSliderOptions); jb = n.$BulletNavigatorOptions; U = n.$ArrowNavigatorOptions; eb = n.$ThumbnailNavigatorOptions; !n.$UISearchMode; var m = b.$Children(w); b.$Each(m, function (a, d) { var c = b.$AttributeEx(a, "u"); if (c == "loading") R = a; else { if (c == "slides") z = a; if (c == "navigator") sb = a; if (c == "arrowleft") Mb = a; if (c == "arrowright") Jb = a; if (c == "thumbnavigator") ib = a; if (a.tagName == "DIV" || a.tagName == "SPAN") Xb[c || d] = new sc(a, c == "slides", b.Nf(["slides", "thumbnavigator"])[c]) } }); R = R || b.$CreateDiv(h); wb = b.$CssWidth(z); vb = b.$CssHeight(z); K = n.$SlideWidth || wb; I = n.$SlideHeight || vb; db = { u: K, v: I, $Top: 0, $Left: 0 }; Gb = n.$SlideSpacing; ob = K + Gb; pb = I + Gb; qb = X & 1 ? ob : pb; gb = n.$AutoPlaySteps; F = n.$PauseOnHover; ac = n.$AutoPlayInterval; nb = n.$SlideDuration; Db = new vc; v = n.$AutoPlay & 63; a.Vb = l; b.$Attribute(w, ub, "1"); b.A(z, b.A(z) || 0); b.K(z, "absolute"); S = b.$CloneNode(z, d); b.Bb(S, z); bb = new Cc; b.$AppendChild(S, bb.mc); b.xb(z, "hidden"); F &= Fb ? 10 : 5; var o = b.$Children(z); b.$Each(o, function (a) { a.tagName == "DIV" && !b.$AttributeEx(a, "u") && ab.push(a); b.A(a, (b.A(a) || 0) + 1) }); O = gc(); b.$Css(O, "backgroundColor", "#000"); b.Ic(O, 0); b.A(O, 0); b.Bb(O, z.firstChild, z); q = ab.length; t = c.min(n.$Cols, q); Ab = t < q; L = Ab ? n.$Loop : 0; if (q) { qc(); if (fb) { kc = fb.$ShowLink; xb = fb.$Class; zb = t == 1 && q > 1 && xb && (!b.$IsBrowserIE() || b.$BrowserVersion() >= 9) } mb = zb || t >= q || !(L & 1) ? 0 : n.$Align; hb = (t > 1 || mb ? X : -1) & n.$DragOrientation; Ob.Fd && b.$Css(z, Ob.Fd, ([g, "pan-y", "pan-x", "none"])[hb] || ""); if (zb) C = new xb(Db, K, I, fb, Fb, Ub); for (var k = 0; k < ab.length; k++) { var s = ab[k], x = new Bc(s, k); B.push(x) } b.U(R); Nb = new Dc; A = new uc(Nb, bb); b.$AddEvent(w, "click", rc, d); b.$AddEvent(w, "mouseleave", pc); b.$AddEvent(w, "mouseenter", oc); if (hb) { b.$AddEvent(w, "mousedown", hc); b.$AddEvent(w, "touchstart", yc); b.$AddEvent(w, "dragstart", Qb); b.$AddEvent(w, "selectstart", Qb); b.$AddEvent(j, "mouseup", cb); b.$AddEvent(h, "mouseup", cb); b.$AddEvent(h, "touchend", cb); b.$AddEvent(h, "touchcancel", cb); b.$AddEvent(j, "blur", cb) } if (sb && jb) { bc = new jb.$Class(sb, jb, H, G); Z.push(bc) } if (U && Mb && Jb) { U.$Loop = L; U.$Cols = t; cc = new U.$Class(Mb, Jb, U, H, G); Z.push(cc) } if (ib && eb) { eb.$StartIndex = n.$StartIndex; Yb = new eb.$Class(ib, eb); b.$Attribute(ib, Sb, "1"); Z.push(Yb) } b.$Each(Z}); b.$Css(w, "visibility", "visible"); a.$ScaleSize(H, G); Eb(); n.$ArrowKeyNavigation && b.$AddEvent(h, "keydown", function (a) { if (a.keyCode == 37) rb(-n.$ArrowKeyNavigation, d); else a.keyCode == 39 && rb(n.$ArrowKeyNavigation, d) }); var i = n.$StartIndex; i = u(i); A.jc(i, i, 0) } }; b.gc(a) }; i.$EVT_CLICK = 21; i.$EVT_DRAG_START = 22; i.$EVT_DRAG_END = 23; i.$EVT_SWIPE_START = 24; i.$EVT_SWIPE_END = 25; i.$EVT_LOAD_START = 26; i.$EVT_LOAD_END = 27; i.ze = 28; i.$EVT_MOUSE_ENTER = 31; i.$EVT_MOUSE_LEAVE = 32; i.$EVT_POSITION_CHANGE = 202; i.$EVT_PARK = 203; i.$EVT_SLIDESHOW_START = 206; i.$EVT_SLIDESHOW_END = 207; i.$EVT_PROGRESS_CHANGE = 208; i.$EVT_STATE_CHANGE = 209
})(window, document, Math, null, true, false)