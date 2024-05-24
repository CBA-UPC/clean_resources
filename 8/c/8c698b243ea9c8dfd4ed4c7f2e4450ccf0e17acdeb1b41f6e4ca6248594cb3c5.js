!(function () {
    "use strict";
    
    var e = { useMraid: !1, inAO: !1, inGDE: !1, isModNew: "undefined" != typeof ado && "new" === ado.mode },
        t = document.currentScript,
        s = 
        h = {
            scriptBegin: /^\s*<script\b((?:\s+[\w_:][-\w_.:]*\s*(?:=\s*(?:\"[^\"]*\"|\'[^\']*\'|[^\s\"\'>][^\s>]*))?)*)[^\w>]*>/i,
            scriptEnd: /(<\/script(?![\w:.-])[^>]*>)/i,
            scriptTagStart: /<script/i,
            attr: /([\w:][-\w.:]*(?![-\w.:]))(?:\s*=\s*(?:\"([^\"]*)\"|\'([^\']*)\'|([^\s\"\'>][^\s>]*)))?/g,
            comment: /<!--.*?-->/g,
        },
        r = "___ZNACZNIK___",
        n = { busy: { configurable: !0 } };
    (n.busy.set = function (t) {
        var i = this.s;
        (this.s = !!t), (this.i.busy = this.s), !this.s && i && this.i.beginMonitorNext();
    }),
        (n.busy.get = ,
        (i.prototype.print = function (t, i) {
            (t = o.deleteComments(t)), o.containScripts(t) ? e.isModNew || (this.queue.push({ htmlCode: t, target: i }), this.o()) : o.print(t, i);
        }),
        (i.prototype.beginMonitor = ,
        (i.prototype.n = function () {
            var t = window.gao || (window.gao = {});
            return (
                void 0 === t.bufferQueue && (t.bufferQueue = []),
                void 0 === t.beginMonitorNext &&
                    (t.beginMonitorNext = function () {
                        t.bufferQueue && t.bufferQueue.length && t.bufferQueue.shift().beginMonitor();
                    }),
                t
            );
        }),
        (i.prototype.e = function () {
            for (var t = 0; t < this.i.bufferQueue.length; ++t) if (this.i.bufferQueue[t] === this) return;
            this.i.bufferQueue.push(this);
        }),
        (i.prototype.o = ,
        (i.prototype.h = function () {
            this.busy ? this.i.busy && this.e() : this.t();
        }),
        (i.prototype.t = ,
        Object.defineProperties(i.prototype, n),
        (i.NOT_INITIALIZED = 3),
        (i.AWAITING_DOM_READY = 4),
        (i.INITIALIZED = 5);
    var o = 
    (o.containScripts = ,
        (o.deleteComments = ,
        (o.print = function (t, i) {
            "string" == typeof i && (i = document.getElementById(i)), i && i.insertAdjacentHTML("beforeend", t);
        }),
        (o.prototype.setNewTarget = function (t) {
            (this.target = "string" == typeof t ? document.getElementById(t) : t), (this.r = ""), (this.u = "");
        }),
        (o.prototype.process = ,
        (o.prototype.getBuffer = ,
        (o.prototype.updateInputBuffer = ,
        (o.prototype.$continueProcessing = function () {
            for (this.a(), this.d(); h.scriptBegin.test(this.r) && h.scriptEnd.test(this.r); ) {
                if (9 === this.scriptProcessor.process()) return;
                this.a(), this.d();
            }
            (this.u += this.r.replace(r, "")), (this.r = ""), this.f(), "function" == typeof this.c && this.c();
        }),
        (o.prototype.a = ,
        (o.prototype.d = function () {
            var t,
                i = h.scriptTagStart.exec(this.r);
            i && ((t = this.r.indexOf(i[0])), (this.u += this.r.substr(0, t).replace(r, "")), (this.r = this.r.substr(t)));
        }),
        (o.prototype.f = ;
    var u = 
    (u.prototype.process = function () {
        this.m(), (this.l = this.htmlProc.getBuffer()), (this.u = "");
        var t = h.scriptBegin.exec(this.l),
            i = this.p(t[1]);
        if (this.w(i)) {
            if (i.src) {
                var n = "async" in i && ("null" === i.async || "true" === i.async);
                return this.g(t, i.src, i.charset, n);
            }
            this.b(t);
        } else this.y();
    }),
        (u.prototype.p = ,
        (u.prototype.w = function (t) {
            if (void 0 !== t.defer) return !1;
            var i = "",
                n = "";
            return t.language && (i = t.language.toLowerCase()), t.type && (n = t.type.split(";")[0]), "vbscript" !== i && !/\/vbscript$/i.test(n);
        }),
        (u.prototype.b = ,
        (u.prototype.y = function () {
            var t = h.scriptEnd.exec(this.l);
            (this.l = this.l.substr(t.index + t[0].length)), this.x();
        }),
        (u.prototype.g = function (t, i, n, s) {
            void 0 === s && (s = !1), (this.l = this.l.substr(t[0].length));
            var o = h.scriptEnd.exec(this.l);
            return (this.l = r + this.l.substr(o.index + o[0].length)), this._(i, n, s);
        }),
        (u.prototype._ = function (t, i, n) {
            var s = this;
            void 0 === i && (i = null), void 0 === n && (n = !1);
            var o;
            if (-1 < (o = t.indexOf("javascript:"))) return this.k(t.substr(o)), void this.x();
            var h,
                e,
                r = document.createElement("script");
            if (
                (n ||
                    ((h = !1),
                    (e = ,
                    r.addEventListener("load", e),
                    (r.onerror = e)),
                i && (r.charset = i),
                (r.src = t),
                this.htmlProc.target.appendChild(r),
                !n)
            )
                return 9;
            this.x();
        }),
        (u.prototype.x = ,
        (u.prototype.m = function () {
            document.write !== this.v && ((document.write = this.v), (document.writeln = this.v));
        }),
        (u.prototype.k = ;
    
    var a = window.gao || (window.gao = {}),
        d = a.htmlHandler || (a.htmlHandler = new i()),
        f = "corner";
    (c.create = ,
        (c.defineGDECreativeLibrary = function (s, o, h) {
            window._gdeaq.push([
                "define",
                function () {
                    var n = function (t, i) {
                        if ((void 0 === i && (i = 0), o) && !document.getElementById(t.targetID) && "number" == typeof i && ((window.ado && window.ado.busy) || (window.gao && window.gao.busy)))
                            return void (
                                i < 60 &&
                                setTimeout( 60)
                            );
                        new c(s, o, h).displayNewGDECreative(t);
                    };
                    return n;
                },
            ]);
        }),
        (c.prototype.setCreativeBuilder = function (t) {
            "function" == typeof t && (this.z = t.bind(this));
        }),
        (c.prototype.appendExtraHtml = function () {
            var t,
                i,
                n = this.config;
            n.additionalHtml &&
                ((i = !0 === n.extraHtmlRootId && this.I ? document.getElementById(n.targetID).parentNode : ((t = !0 === n.extraHtmlRootId ? n.targetID : n.extraHtmlRootId), document.getElementById(t))),
                d.print(n.additionalHtml, i),
                (n.additionalHtml = ""));
        }),
        (c.prototype.startInscreenMeasurement = function (t) {
            var i;
            void 0 === t && (t = null),
                t && (this.config.inscreenTarget = t),
                this.inAO
                    ? "object" == typeof gao && "function" == typeof gao.inscreenRegisterElement && gao.inscreenRegisterElement(this.config.getInscreenTarget(), this.config.unique)
                    : this.inGDE &&
                      this.config.inscreenHiturl &&
                      (((i = document.createElement("i")).id = this.config.unique + "_inscreen"),
                      this.config.getInscreenTarget().appendChild(i),
                      window._gdeaq.push(["viewableFiF", this.config.targetWindow, this.config.inscreenHiturl, i.id]));
        }),
        (c.prototype.setCreativeConfig = ,
        (c.prototype.displayNewAoCreative = function () {
            var t = this;
            this.inAO = e.inAO = !0;
            
            var n,
                s,
                o,
                h = gao[f].pop();
            this.I ? this.D(i, h) : (e.isModNew && h.additionalHtml && ((s = (n = this.A(h.additionalHtml)).additionalHtml), (o = n.iNode), document.write("<div>" + s + "</div>"), (h.additionalHtml = o)), i());
        }),
        (c.prototype.displayNewGDECreative = ,
        (c.prototype.A = ,
        (c.prototype.D = ,
        (c.prototype.T = function (t) {
            return "object" == typeof this.manualLoading ? !this.manualLoading[t] : !this.manualLoading;
        }),
        (c.NAMESPACE = f),
        (c.TERMINATE = 1);
    
    var v,
        m,
        p,
        w = function (t, i, n) {
            for (var s in ("string" == typeof t && (t = document.getElementById("element")), i))
                n || ((h = i[(o = s)]), (e = t), (r = void 0), -1 < v.indexOf(o) && (e.style["webkit" + (r = o).charAt(0).toUpperCase() + r.slice(1)] = h)), (t.style[s] = i[s]);
            var o, h, e, r;
            return t;
        },
        g =
            ((p = !(v = ["backfaceVisibility", "transformStyle", "transformOrigin", "transform", "perspective", "animation"])),
            (m = navigator.userAgent || navigator.vendor || window.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                m
            ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    m.substr(0, 4)
                )) &&
                (p = !0),
            p);
    function b(t, i) {
        return void 0 === t && (t = ""), void 0 === i && (i = ""), "" === (t = "string" == typeof t ? t : String(t)) ? i : t + (l(t) ? "px" : "");
    }
    function y(t, i) {
        var n = (function (t) {
            if (Object.assign) return Object.assign({}, t);
            var i = {};
            for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
            return i;
        })(t);
        for (var s in i) i.hasOwnProperty(s) && ("boolean" == typeof i[s] || "number" == typeof i[s] || i[s]) && (n[s] = i[s]);
        return n;
    }
    function k(t, i, n) {
        void 0 === n && (n = !0),
            i &&
                (t.addEventListener("click", function () {
                    var t;
                    (t = i) && window.open(t, "_blank");
                }),
                n && (t.style.cursor = "pointer"));
    }
    function x(t, i) {
        void 0 === i && (i = null), (this.rootElem = i || document.createElement("div")), (this.rootElement = this.rootElem), (this.config = t), this.M(), this.S();
    }
    function _(t, i, n, s) {
        var o,
            h = document.createElement("iframe");
        (h.src =
            t +
            (s
                ? ""
                : (o = i) && "object" == typeof o
                ? "#" +
                  Object.keys(o)
                      .map(
                      .join("&")
                : o && "string" == typeof o
                ? "#" + o
                : "")),
            (h.scrolling = "no"),
            (h.style.borderWidth = "0");
        var e,
            r = document.createElement("div");
        return (
            (r.style.position = "relative"),
            r.appendChild(h),
            w(h, { display: "block", width: "100%", height: "100%" }),
            n && w(r, n),
            s && ((e = document.createElement("div")), w(e, { position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }), k(e, i), r.appendChild(e), w(h, { pointerEvents: "none" })),
            r
        );
    }
    function I() {
        var n = document.createElement("iframe");
        return (
            (n.src = "about:blank"),
            (n.scrolling = "no"),
            (n.style.borderWidth = "0"),
            {
                getRootElement: 
                appendTo: 
                writeSync: 
            }
        );
    }
    (x.create = function (t, i, n) {
        void 0 === i && (i = null), void 0 === n && (n = null);
        var s = new x(t, i);
        return n && s.addContent(n), s.rootElem;
    }),
        (x.prototype.addContent = function (t) {
            w(t, { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", padding: "0", border: "none", margin: "0" }), this.rootElem.appendChild(t);
        }),
        (x.prototype.M = function () {
            var t = this.config.width,
                i = this.config.height;
            l(t) && l(i) && this.config.responsive ? this.O(t, i) : w(this.rootElem, { width: t + (l(t) ? "px" : ""), height: i + (l(i) ? "px" : "") });
        }),
        (x.prototype.O = function (t, i) {
            w(this.rootElem, { width: "100%", maxWidth: t + "px", height: "auto" });
            var n = document.createElement("div");
            (n.style.paddingTop = (i / t) * 100 + "%"), this.rootElem.appendChild(n);
        }),
        (x.prototype.S = function () {
            var t = "0 auto";
            switch (this.config.align) {
                case x.LEFT:
                    t = "0";
                    break;
                case x.RIGHT:
                    t = "0 0 0 auto";
            }
            (this.rootElem.style.position = "relative"), (this.rootElem.style.margin = t), this.config.zIndex && (this.rootElem.style.zIndex = this.config.zIndex);
        }),
        (x.LEFT = "0"),
        (x.CENTER = "1"),
        (x.RIGHT = "2");
    var j = (function (n) {
            
            return (
                n && (t.__proto__ = n),
                (((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.appendSelfTo = function (t, i) {
                    ("string" != typeof t && "number" != typeof t) || (t = document.getElementById(t)), t && t.appendChild(this.rootElem), this.initialize(i);
                }),
                (t.prototype.initialize = function (t) {
                    void 0 === t && (t = {});
                    var i = t.writeFiF;
                    void 0 === i && (i = !0), i && this.C && this.C.writeSync(this.config.htmlFiFCode);
                }),
                (t.prototype.$ = function () {
                    var t = this.config;
                    t.html5
                        ? this.addContent(_(t.html5, t.clickTagOverlay ? t.clickTag : t.redirection, null, t.clickTagOverlay))
                        : t.htmlFiFCode
                        ? ((this.C = I()), this.addContent(this.C.getRootElement()))
                        : t.image &&
                          this.addContent(
                              ((t.image, t.clickTag)
                          );
                }),
                t
            );
        })(x),
        z = "corner",
        T = "_ado-",
        E = T + z + "-hover",
        D = ".%n {opacity: 0.7;} .%n:hover {opacity: 1}".replace(/%n/g, E),
        A = {
            HOVER: 1,
            styleId: "ado_" + z,
            targetDocument: document,
            styleElement: [],
            add: function (t, i) {
                void 0 === i && (i = this.targetDocument), this.q(i), this.F(this.P(t));
            },
            getClass: function () {
                for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
                return 1 <
                    (t = t.map(function (t) {
                        return 1 === t ? E : T + z + "-" + t;
                    })).length
                    ? t
                    : t[0];
            },
            P: function (t) {
                return 1 === t ? D : t.replace(new RegExp(T, "g"), T + z + "-");
            },
            q: function (t) {
                var i;
                this.H(t) || ((i = t.getElementById(this.styleId)) || (((i = document.createElement("style")).id = this.styleId), (i.className = "ado-template-styles"), t.head.appendChild(i)), this.styleElement.push({ doc: t, style: i }));
            },
            F: function (t, i) {
                void 0 === i && (i = this.targetDocument);
                var n = this.H(i);
                -1 < n.textContent.indexOf(t) || (n.textContent += t);
            },
            H: 
        };
    A.add(A.HOVER);
    function M(t) {
        var i = this;
        (this.config = t || {}),
            (this.rootElem = document.createElement("div")),
            this.rootElem.classList.add(A.getClass(A.HOVER)),
            (this.clickCallback = null),
            (this.N = ,
            this.enable();
    }
    (M.prototype.hide = function () {
        this.rootElem.style.display = "none";
    }),
        (M.prototype.show = ,
        (M.prototype.onClick = ,
        (M.prototype.enable = function () {
            this.rootElem.addEventListener("click", this.N);
        }),
        (M.prototype.disable = ,
        (M.prototype.R = function (t) {
            var i = new Image();
            return (i.src = this.config.altImage), (i.style.display = "block"), (i.style.width = t || "100%"), (i.style.height = "auto"), (i.alt = "X"), i;
        });
    function S(t) {
        (this.config = t),
            (this.container = document.createElement("div")),
            (this.billboard = new j(this.config)),
            (this.dimmer = null),
            (this.animatedAngle = null),
            (this.expanded = !1),
            (this.mobileCollapseHandler = this.V.bind(this)),
            this.Z(),
            this.B(),
            this.G(),
            this.K(),
            this.L(),
            this.W();
    }
    var O = (function (n) {
        function t(t) {
            n.call(this, t), this.rootElem.setAttribute("data-ao-type", "close");
            var i = this.config || {};
            (i.size = parseInt(i.size, 10) || 18),
                (i.thickness = i.thickness || i.size / 4),
                (i.fillColor = i.fillColor || "white"),
                (i.strokeColor = i.stokeColor || "black"),
                (i.leftPosition = i.leftPosition || !1),
                (i.altImage = i.altImage || !1),
                (i.padding = "number" == typeof i.padding ? i.padding : 3),
                (i.zIndex = i.zIndex || 9999),
                this.X();
        }
        return (
            n && (t.__proto__ = n),
            (((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.X = function () {
                var t = {
                    width: this.config.size + "px",
                    padding: this.config.padding + "px",
                    position: "absolute",
                    top: this.config.margin || "0px",
                    cursor: "pointer",
                    zIndex: void 0 !== this.config.zIndex ? this.config.zIndex : "auto",
                    boxSizing: "content-box",
                };
                (t[this.config.leftPosition ? "left" : "right"] = this.config.margin || "0px"),
                    w(this.rootElem, t),
                    "string" == typeof this.config.id && (this.rootElem.id = this.config.id),
                    this.config.altImage ? this.rootElem.appendChild(this.R()) : ((this.rootElem.style.height = this.config.size + "px"), (this.rootElem.innerHTML = this.Y()));
            }),
            (t.prototype.Y = function () {
                for (
                    var t = this.config,
                        i = t.thickness / Math.sqrt(2),
                        n = t.size / 2 - 1,
                        s = [
                            [n, n - i],
                            [2 * n - i, 0],
                            [2 * n, i],
                            [n + i, n],
                            [2 * n, 2 * n - i],
                            [2 * n - i, 2 * n],
                            [n, n + i],
                            [i, 2 * n],
                            [0, 2 * n - i],
                            [n - i, n],
                            [0, i],
                            [i, 0],
                        ],
                        o = '<svg style="display:block;width:100%;height:100%;"><polygon points="',
                        h = 0;
                    h < s.length;
                    ++h
                ) {
                    var e = s[h];
                    o += e[0] + 1 + "," + (e[1] + 1) + " ";
                }
                return (o += '" style="fill:' + t.fillColor + ";stroke:" + t.strokeColor + ';stroke-width:1;" /></svg>');
            }),
            t
        );
    })(M);
    (S.prototype.display = function () {
        this.billboard.appendSelfTo(this.container), document.body.appendChild(this.container), this.J();
    }),
        (S.prototype.close = function () {
            document.body.removeEventListener("click", this.mobileCollapseHandler), this.container.parentNode.removeChild(this.container), (this.config = null), (this.container = null), (this.billboard = null), (this.dimmer = null);
        }),
        (S.prototype.Z = function () {
            var t = this;
            w(this.container, { transitionProperty: "width, height", transitionDuration: this.config.expandTime + "ms", transitionTimingFunction: "ease-in-out", transitionDelay: "0ms" }),
                this.config.manualExpand ||
                    (g
                        ? (this.container.addEventListener("click", function () {
                              return t.Q();
                          }),
                          (this.billboard.rootElem.style.pointerEvents = "none"))
                        : (this.container.addEventListener("mouseenter", function () {
                              return t.U();
                          }),
                          this.container.addEventListener("mouseleave", function () {
                              return t.tt();
                          })));
        }),
        (S.prototype.B = function () {
            var t;
            switch (this.config.position) {
                case "0":
                    t = { top: "0", left: "0" };
                    break;
                case "1":
                    t = { top: "0", right: "0" };
                    break;
                case "2":
                    t = { right: "0", bottom: "0" };
                    break;
                default:
                    t = { bottom: "0", left: "0" };
            }
            w(this.container, y({ position: "fixed",visibility: "hidden", width: b(this.config.smallWidth), height: b(this.config.smallHeight), overflow: "hidden", zIndex: this.config.containerZIndex || "auto" }, t)),
                w(this.billboard.rootElem, y({ position: "absolute" }, t)),
                this.config.effects.shadow && w(this.container, { boxShadow: this.config.effects.shadowString });
        }),
        (S.prototype.G = function () {
            var t,
                i = this;
            this.config.close.display &&
                (((t = new O(this.config.close)).rootElem.style.pointerEvents = "auto"),
                t.onClick(,
                this.billboard.rootElem.appendChild(t.rootElem));
        }),
        (S.prototype.K = function () {
            this.config.effects.dimmer &&
                ((this.dimmer = document.createElement("div")),
                w(this.dimmer, {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    transition: "opacity " + this.config.expandTime + "ms ease-in-out",
                    backgroundColor: "black",
                    zIndex: "999",
                    pointerEvents: "none",
                    opacity: this.config.effects.maxOpacity,
                }),
                this.container.appendChild(this.dimmer));
        }),
        (S.prototype.L = function () {
            var t, i;
            this.config.effects.curve &&
                ((t = { 0: "border-bottom-right-radius", 1: "border-bottom-left-radius", 2: "border-top-left-radius", 3: "border-top-right-radius" }),
                (i = Math.min(parseInt(this.config.smallWidth, 10), parseInt(this.config.smallHeight, 10))),
                (this.animatedAngle = { property: t[this.config.position] || t[3], value: this.config.effects.customRadius || 0.1 * i + "px" }),
                (this.container.style.transitionProperty += ", " + this.animatedAngle.property),
                (this.container.style[this.animatedAngle.property] = this.animatedAngle.value));
        }),
        (S.prototype.J = function () {
            var t;
            this.config.html5 || this.config.image || !this.config.htmlCode || ((t = I(this.config.htmlCode)), this.billboard.addContent(t.getRootElement()), t.writeSync(this.config.htmlCode));
        }),
        (S.prototype.Q = function () {
            this.expanded || ((this.expanded = !0), (this.billboard.rootElem.style.pointerEvents = "auto"), document.documentElement.addEventListener("click", this.mobileCollapseHandler), this.U());
        }),
        (S.prototype.V = function (t) {
            this.expanded &&
                t.target !== this.container &&
                !this.container.contains(t.target) &&
                ((this.expanded = !1), (this.billboard.rootElem.style.pointerEvents = "none"), document.documentElement.removeEventListener("click", this.mobileCollapseHandler), this.tt());
        }),
        (S.prototype.U = function () {
            var t;
            w(this.container, { width: b(this.config.width), height: b(this.config.height), transitionDelay: "0ms" }),
                this.dimmer && (this.dimmer.style.opacity = 0),
                this.animatedAngle && (this.container.style[this.animatedAngle.property] = "0"),
                (t = this.config.expandHitUrl) && (-1 === t.indexOf("[TIMESTAMP]") && (t = t.replace("redot.gif", "_[TIMESTAMP]/redot.gif")), (new Image().src = t.replace("[TIMESTAMP]", new Date().getTime())));
        }),
        (S.prototype.tt = function () {
            var t = this.container.clientWidth,
                i = parseInt(this.config.width, 10);
            w(this.container, { width: b(this.config.smallWidth), height: b(this.config.smallHeight), transitionDelay: g || i !== t ? "0ms" : this.config.expandTime + "ms" }),
                this.dimmer && (this.dimmer.style.opacity = this.config.effects.maxOpacity),
                this.animatedAngle && (this.container.style[this.animatedAngle.property] = this.animatedAngle.value);
        }),
        c.create(
            function (t) {
                t.expandTime = Math.round(1e3 * parseFloat(t.expandTime));
                var i = "corner_" + t.unique,
                    n = new S(t);
                (n.container.id = i), n.display(), (t.extraHtmlRootId = t.inscreenTargetId = i);
            },
            !(S.prototype.W = function () {
                var t = this;
                (this.config.api.expand = this.config.api.doexpand = function () {
                    return t.U();
                }),
                    (this.config.api.collapse = this.config.api.dolittle = function () {
                        return t.tt();
                    }),
                    (this.config.api.close = ;
            })
        );
})();
