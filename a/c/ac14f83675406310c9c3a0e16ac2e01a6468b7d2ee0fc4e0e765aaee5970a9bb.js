!self, (()=>(()=>{
    var e = {
        126: (e,t)=>{
            "use strict";
            var n = 
            
            
            
            var a, c = "0.0.29-alpha.16-1", u = function() {
                function e() {
                    this.id = new Date,
                    this.subs = [],
                    this.id = new Date,
                    this.subs = []
                }
                return e.prototype.defined = 
                ,
                e.prototype.notify = function() {
                    this.subs.forEach((function(e, t) {
                        if ("function" == typeof e.update)
                            try {
                                e.update.apply(e)
                            } catch (e) {
                                console.warn(e)
                            }
                    }
                    ))
                }
                ,
                e.watch = null,
                e
            }(), s = function() {
                function e(e, t) {
                    this.name = "",
                    this.id = new Date,
                    this.name = e,
                    this.id = new Date,
                    this.callBack = t
                }
                return e.prototype.add = 
                ,
                e.prototype.update = 
                ,
                e
            }(), d = (a = new u,
            function(e, t) {
                if ("historyChange" === e)
                    return function(e, t) {
                        var n = new s(e,t);
                        u.watch = n,
                        a.defined(),
                        u.watch = null
                    }
                    ;
                if ("pushState" === e || "replaceState" === e) {
                    var n = t.history[e];
                    return function() {
                        for (var e = [], r = 0; r < arguments.length; r++)
                            e[r] = arguments[r];
                        n.apply(t.history, e),
                        a.notify()
                    }
                }
            }
            ), l = ["SCRIPT", "STYLE", "META", "HEAD", "LINK"], p = {
                SVG: 2,
                IMG: 2,
                BACKGROUND_IMAGE: 2,
                CANVAS: 4,
                OBJECT: 4,
                EMBED: 4,
                VIDEO: 4
            }, m = window.innerWidth, f = window.innerHeight * 2, v = 100, h =  g = function(e, t) {
                void 0 === t && (t = v);
                var n = Date.now();
                return function() {
                    for (var r = [], a = 0; a < arguments.length; a++)
                        r[a] = arguments[a];
                    var c = Date.now();
                    if (t - (c - n) <= 0)
                        return n = Date.now(),
                        e.apply(void 0, i([], o(r), !1))
                }
            }, y = function() {
                function e(e, t) {
                    this.win = window,
                    this.isFirstLoad = !0,
                    this.perfConfig = {},
                    this.keyDomObserver = null,
                    this.performanceData = {},
                    this.perfCallback = null,
                    this.statusCollector = [],
                    this.fmpFlag = !0,
                    this.observer = null,
                    this.callbackCount = 0,
                    this.entries = {},
                    this.startTime = performance.now(),
                    this.firstInputTime = 0,
                    this.referer = [],
                    this.requestList = [],
                    this.sampleFlag = !1,
                    e && (this.perfConfig = e),
                    t && (this.perfCallback = t),
                    e.contentWindow && (this.win = e.contentWindow,
                    this.startTime = this.win.performance.now())
                }
                return e.prototype.performanceTrack = function(e) {
                    var t;
                    void 0 === e && (e = !1);
                    var n = this.performanceData
                      , r = n.selector
                      , o = n.domLoad
                      , i = n.isTracked
                      , a = n.pageLoad
                      , c = void 0 === a ? 0 : a
                      , u = (this.perfConfig || {}).manualTrack;
                    if (!i && (e || c && (!r || r && o))) {
                        var s = this.formatPerfData(e);
                        null === (t = this.perfCallback) || void 0 === t || t.call(this, s, this.statusCollector),
                        !u && this.trackData(s)
                    }
                }
                ,
                e.prototype.trackData = function(e) {
                    var t, r, a = this, c = e || {}, u = c.traceId, s = c.system, d = c.group, l = c.uploadType, p = e || {}, m = p.request, f = void 0 === m ? {} : m, v = p, ["request"]), h = {
                        system: s,
                        group: d,
                        traceId: u
                    };
                    4 !== l && (this.performanceData.isTracked = !0),
                    this.track("performance.track", "performance", v),
                    null === (t = Object.keys(f)) || void 0 === t || t.forEach((function(e) {
                        a.track("performance.track", "performance_request", n(n(n({}, h), {
                            requestUrl: e
                        }), f[e]))
                    }
                    ));
                    var g = null === (r = this.statusCollector) || void 0 === r ? void 0 : r.map((
                    ));
                    (null == g ? void 0 : g.length) && this.track("performance.track", "performance_detail", n(n({}, h), {
                        statusList: g,
                        refererList: i([], o(this.referer), !1)
                    }))
                }
                ,
                e.prototype.trackView = function() {
                    var e = this.perfConfig
                      , t = e.userId
                      , n = void 0 === t ? "" : t
                      , r = e.system
                      , o = void 0 === r ? "" : r
                      , i = e.group
                      , a = void 0 === i ? "" : i
                      , u = e.env
                      , s = void 0 === u ? "" : u
                      , d = this.getPathName();
                    this.track("performance.track", "view", {
                        userId: n,
                        system: o,
                        group: a,
                        env: s,
                        pageUrl: d,
                        version: c
                    })
                }
                ,
                e.prototype.resetPerformanceTrack = function(e) {
                    var t, n;
                    this.sampleFlag || (this.performanceData.isTracked || this.performanceTrack(!0),
                    this.win.performance.clearResourceTimings(),
                    this.performanceData = {},
                    this.startTime = this.win.performance.now(),
                    this.firstInputTime = 0,
                    this.isFirstLoad = e,
                    null === (t = this.observer) || void 0 === t || t.disconnect(),
                    null === (n = this.keyDomObserver) || void 0 === n || n.disconnect(),
                    this.statusCollector = [],
                    this.requestList = [],
                    this.fmpFlag = !0,
                    this.observer = null,
                    this.callbackCount = 0,
                    this.entries = {},
                    this.domLoadObserver(),
                    this.initObserver())
                }
                ,
                e.prototype.initTrack = function() {
                    var e = this
                      , t = this.perfConfig.tracesSampleRate
                      , n = void 0 === t ? 1 : t;
                    if (Math.random() > Number(n))
                        this.sampleFlag = !0;
                    else {
                        this.initOneTrack(),
                        this.initObserver(),
                        this.domLoadObserver(),
                        this.rewriteXHR(),
                        this.recordFetch();
                        var r = 
                        this.win.addHistoryListener = d("historyChange", this.win),
                        this.win.history.pushState = d("pushState", this.win),
                        "hash" === this.perfConfig.historyMethod && this.win.addEventListener("hashchange", g(r, 300)),
                        this.win.addHistoryListener("history", g(r, 300)),
                        this.win.addEventListener("click", (function() {
                            e.firstInputTime > v || (e.firstInputTime = e.getPerfTime())
                        }
                        ), !0)
                    }
                }
                ,
                e.prototype.initOneTrack = function(e) {
                    var t = this;
                    void 0 === e && (e = 3);
                    var n = this.perfConfig.appId
                      , r = void 0 === n ? "31000401679" : n;
                    r && this.track() ? this.track("performance.init", r) : e > 0 && this.win.setTimeout((
                    ), 1e3)
                }
                ,
                e.prototype.track = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var n = this.win.onetrack;
                    return n && e.length && n.apply(void 0, i([], o(e), !1)),
                    n
                }
                ,
                e.prototype.getPerfTime = function(e) {
                    return void 0 === e && (e = this.win.performance.now()),
                    this.isFirstLoad ? e : e - this.startTime
                }
                ,
                e.prototype.getObserverContainer = function() {
                    return this.perfConfig.container && this.win.document.querySelector(this.perfConfig.container) || this.win.document.body
                }
                ,
                e.prototype.getSelector = function() {
                    var e;
                    if (this.perfConfig.domObserver) {
                        var t = this.getPathName()
                          , n = this.perfConfig.domObserver[t];
                        if (!n) {
                            var r = null !== (e = Object.keys(this.perfConfig.domObserver).find((function(e) {
                                return !!e && new RegExp(e).test(t)
                            }
                            ))) && void 0 !== e ? e : "";
                            n = this.perfConfig.domObserver[r]
                        }
                        return n
                    }
                }
                ,
                e.prototype.domLoadObserver = function() {
                    var e = this
                      , t = this.getSelector();
                    t && (this.performanceData.selector = t,
                    this.keyDomObserver = new this.win.MutationObserver((function(n) {
                        var o, i, a;
                        try {
                            for (var c = r(n), u = c.next(); !u.done; u = c.next())
                                if (u.value.addedNodes.length && e.win.document.querySelector(t)) {
                                    var s = e.getPerfTime();
                                    s > v && (null === (a = e.keyDomObserver) || void 0 === a || a.disconnect(),
                                    e.performanceData.domLoad = s,
                                    e.performanceTrack());
                                    break
                                }
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (i = c.return) && i.call(c)
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                    }
                    )),
                    this.keyDomObserver.observe(this.getObserverContainer(), {
                        childList: !0,
                        subtree: !0
                    }))
                }
                ,
                e.prototype.isExcludeReq = function(e) {
                    var t;
                    return void 0 === e && (e = ""),
                    null === (t = this.perfConfig.excludeRequests) || void 0 === t ? void 0 : t.some((function(t) {
                        return "[object RegExp]" === Object.prototype.toString.call(t) ? new RegExp(t).test(e) : e.includes(String(t))
                    }
                    ))
                }
                ,
                e.prototype.getHttpTime = function() {
                    var e, t, n, o, i, a, c = this, u = this.win.performance.getEntries(), s = this.perfConfig.withResourceType, d = ["xmlhttprequest", "fetch"].concat(void 0 === s ? [] : s), l = u.filter((function(e) {
                        return d.includes(e.initiatorType) && e.startTime >= c.startTime
                    }
                    )), p = {};
                    try {
                        for (var m = r(l), f = m.next(); !f.done; f = m.next()) {
                            var v = f.value
                              , h = v.name
                              , g = v.startTime
                              , y = v.responseEnd
                              , _ = v.duration
                              , w = g - this.startTime
                              , b = y - this.startTime;
                            this.isExcludeReq(h) || (p[h] || (p[h] = {}),
                            p[h].requestStartTime = w,
                            p[h].requestEndTime = b,
                            p[h].requestDuration = _,
                            n || o ? (n = Math.min(n, w),
                            o = Math.max(o, b)) : (n = w,
                            o = b,
                            i = _,
                            a = h),
                            _ > i && (i = _,
                            a = h))
                        }
                    } catch (r) {
                        e = {
                            error: r
                        }
                    } finally {
                        try {
                            f && !f.done && (t = m.return) && t.call(m)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
                    return {
                        request: p,
                        min: n,
                        max: o,
                        maxDuration: i,
                        maxReqUrl: a
                    }
                }
                ,
                e.prototype.simpleNode = function(e) {
                    if (!e)
                        return "";
                    var t = e
                      , n = t.localName
                      , r = t.id
                      , o = void 0 === r ? "" : r
                      , i = t.className
                      , a = void 0 === i ? "" : i
                      , c = "string" == typeof a ? null == a ? void 0 : a.split(" ").join(".") : "";
                    return "".concat(n).concat(o ? "#" + o : "").concat(c ? "." + c : "")
                }
                ,
                e.prototype.getSnapShot = function(e) {
                    var t = this;
                    void 0 === e && (e = []);
                    var n = this.getPerfTime()
                      , r = this.perfConfig.container && this.win.document.querySelector(this.perfConfig.container) || this.win.document.body
                      , o = this.perfConfig.excludeNodes
                      , i = void 0 === o ? [] : o
                      , a = e.length
                      , c = !1;
                    try {
                        if (i.length && a) {
                            var u = a ? e[a - 1] : null
                              , s = this.simpleNode(null == u ? void 0 : u.target);
                            c = (c = 1 === a && i.includes(s)) || e.every((function(e) {
                                return i.some((function(n) {
                                    var r;
                                    return null === (r = t.win.document.querySelector(n)) || void 0 === r ? void 0 : r.contains(t.win.document.querySelector("".concat(n, " ").concat(t.simpleNode(e.target))))
                                }
                                ))
                            }
                            ))
                        }
                    } catch (e) {
                        console.warn("excludeNodes error", e)
                    }
                    c || this.statusCollector.push({
                        time: n,
                        now: this.win.performance.now(),
                        mutation: e.map((function(e) {
                            var n, r;
                            return {
                                target: t.simpleNode(null == e ? void 0 : e.target),
                                addedNodes: t.simpleNode(null === (n = null == e ? void 0 : e.addedNodes) || void 0 === n ? void 0 : n[0]),
                                removeNodes: t.simpleNode(null === (r = null == e ? void 0 : e.removedNodes) || void 0 === r ? void 0 : r[0])
                            }
                        }
                        ))
                    }),
                    !r || this.perfConfig.withoutFMP || c || this.setTag(r, this.callbackCount),
                    c || (this.callbackCount += 1)
                }
                ,
                e.prototype.initObserver = function() {
                    var e = this;
                    this.trackView(),
                    this.getSnapShot(),
                    this.referer.push(this.getPathName()),
                    this.observer = new this.win.MutationObserver((
                    )),
                    this.observer.observe(this.getObserverContainer(), {
                        childList: !0,
                        subtree: !0
                    }),
                    "complete" === this.win.document.readyState ? this.calculateFinalScore() : this.win.addEventListener("load", (function() {
                        e.calculateFinalScore()
                    }
                    ), !1)
                }
                ,
                e.prototype.calculateFinalScore = function() {
                    var e, t = this;
                    if (this.fmpFlag)
                        if (this.checkNeedCancel()) {
                            null === (e = this.observer) || void 0 === e || e.disconnect(),
                            this.fmpFlag = !1,
                            this.win.performance.getEntries().forEach((
                            ));
                            var n = this.perfConfig
                              , r = n.withoutFMP
                              , o = n.fmpOptions;
                            if (!r) {
                                var i = this.getTreeScore(this.win.document.body)
                                  , a = null;
                                if (i.dpss.forEach((function(e) {
                                    a && a.st ? a.st < e.st && (a = e) : a = e
                                }
                                )),
                                a) {
                                    var c;
                                    c = "function" == typeof (null == o ? void 0 : o.fmpFilter) ? o.fmpFilter(a.els) : this.filterResult(a.els),
                                    this.performanceData.fmp = this.getFmpTime(c)
                                }
                            }
                            this.performanceTrack()
                        } else
                            this.win.setTimeout((
                            ), 500)
                }
                ,
                e.prototype.getFmpTime = function(e) {
                    var t, n, o, i, a = 0, c = [], u = Object.keys(this.entries);
                    console.log(this.statusCollector, "statusCollector");
                    try {
                        for (var s = r(e), d = s.next(); !d.done; d = s.next()) {
                            var l = d.value
                              , m = this.perfConfig.fmpOptions
                              , f = (null == m ? void 0 : m.eleWeight) || p
                              , v = 0
                              , h = parseInt(l.$node.getAttribute("fmp-c") || "")
                              , g = "".concat(h, "-").concat(this.simpleNode(l.$node))
                              , y = l.$node.tagName
                              , _ = "IMG" === y
                              , w = "VIDEO" === y
                              , b = l.weight === f.BACKGROUND_IMAGE && !_ && !w
                              , S = !1;
                            if (1 === l.weight || ["SVG", "CANVAS"].includes(l.$node.tagName))
                                v = null === (o = this.statusCollector[h]) || void 0 === o ? void 0 : o.time,
                                S = 0 === h;
                            else if (_ || w || b) {
                                var I = this.getMediaUrl(l.$node, u, b);
                                v = this.entries[I] || this.entries[null === (i = l.$node) || void 0 === i ? void 0 : i.poster],
                                g = I || g
                            }
                            "number" != typeof v && (v = 0),
                            a < v && (a = v),
                            c = this.getFMPTopList(S ? 1 : v, c, g)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            d && !d.done && (n = s.return) && n.call(s)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                    return this.performanceData.fmpSlowComp = c,
                    a
                }
                ,
                e.prototype.getFMPTopList = function(e, t, n) {
                    var r = {
                        time: e,
                        domTag: n
                    };
                    if (!t.length)
                        return [r];
                    var a = -1
                      , c = t.length < 3;
                    return t.some((function(t, n) {
                        return e > t.time && (a = n,
                        !0)
                    }
                    )),
                    c && a < 0 ? t[t.length] = r : a > -1 && (t.length = c ? t.length : t.length - 1,
                    t.splice(a, 0, r)),
                    i([], o(t), !1)
                }
                ,
                e.prototype.getMediaUrl = function(e, t, n) {
                    var r = "";
                    if (n) {
                        var o = (h(e, "background-image") || "").match(/url\('(.*?)'\)/);
                        (null == o ? void 0 : o[1]) && (r = o[1]),
                        -1 === r.indexOf("http") && (r = this.win.location.protocol + r),
                        r = r.replace(/!.*/, "").replace(/\?.*/, "")
                    } else
                        r = ((null == e ? void 0 : e.src) || "").replace(/!.*/, "").replace(/\?.*/, "");
                    return t.find((function(e) {
                        return r && "".concat(e).indexOf(r) > -1
                    }
                    )) || ""
                }
                ,
                e.prototype.filterResult = function(e) {
                    if (1 === e.length)
                        return e;
                    var t = 0;
                    e.forEach((function(e) {
                        t += e.st
                    }
                    ));
                    var n = t / e.length;
                    return e.filter((
                    ))
                }
                ,
                e.prototype.checkNeedCancel = function() {
                    var e, t, n = this.getPerfTime(), r = this.statusCollector.length > 0 ? null === (e = this.statusCollector[this.statusCollector.length - 1]) || void 0 === e ? void 0 : e.time : 0, o = this.perfConfig.maxWait || 15e3, i = this.perfConfig.domWait || 2e3, a = !(null === (t = this.requestList) || void 0 === t ? void 0 : t.length), c = n > o || a && n - r > i;
                    return this.performanceData.pageLoadBak = r,
                    c && (this.performanceData.pageLoad = r),
                    c
                }
                ,
                e.prototype.getTreeScore = function(e) {
                    if (e) {
                        for (var t = [], n = e.children, r = 0; r < n.length; r++) {
                            var o = n[r];
                            if (o.getAttribute("fmp-c")) {
                                var i = this.getTreeScore(o);
                                i.st && t.push(i)
                            }
                        }
                        return this.calculateScore(e, t)
                    }
                    return {}
                }
                ,
                e.prototype.calculateScore = function(e, t) {
                    var n = e.getBoundingClientRect()
                      , r = n.width
                      , o = n.height
                      , i = n.left
                      , a = n.top
                      , c = !0;
                    (f < a || m < i) && (c = !1);
                    var u = 0;
                    t.forEach((
                    ));
                    var s = this.perfConfig.fmpOptions
                      , d = (null == s ? void 0 : s.eleWeight) || p
                      , l = d[e.tagName] || 1;
                    1 === l && h(e, "background-image") && h(e, "background-image").includes("url") && (l = d.BACKGROUND_IMAGE);
                    var v = c ? r * o * l : 0
                      , g = [{
                        $node: e,
                        st: v,
                        weight: l
                    }]
                      , y = e
                      , _ = this.calculateAreaParent(e);
                    return (u > v * _ || 0 === _) && (v = u,
                    g = [],
                    t.forEach((
                    ))),
                    {
                        dpss: t,
                        st: v,
                        els: g,
                        root: y
                    }
                }
                ,
                e.prototype.calculateAreaParent = function(e) {
                    var t = e.getBoundingClientRect()
                      , n = t.left
                      , r = t.right
                      , o = t.top
                      , i = t.bottom
                      , a = t.width
                      , c = t.height
                      , u = m
                      , s = f
                      , d = r - n + (u - 0) - (Math.max(r, u) - Math.min(n, 0))
                      , l = i - o + (s - 0) - (Math.max(i, s) - Math.min(o, 0));
                    return d <= 0 || l <= 0 ? 0 : d * l / (a * c)
                }
                ,
                e.prototype.setTag = function(e, t) {
                    var n, r = e.tagName, o = null == e ? void 0 : e.children;
                    if (-1 === l.indexOf(r) && (null == o ? void 0 : o.length)) {
                        var i = this.perfConfig.container && this.win.document.querySelector(this.perfConfig.container);
                        if (i) {
                            var a = i.className
                              , c = i.id;
                            e.className !== a && e.id !== c || null !== e.getAttribute("fmp-c") || e.setAttribute("fmp-c", "".concat(String(t)))
                        }
                        for (var u = o.length - 1; u >= 0; u--) {
                            var s = o[u];
                            if (null === s.getAttribute("fmp-c")) {
                                var d = s.getBoundingClientRect()
                                  , p = d.left
                                  , v = d.top
                                  , h = d.width
                                  , g = d.height
                                  , y = null === (n = this.win.getComputedStyle(s)) || void 0 === n ? void 0 : n.opacity;
                                if (f < v || m < p || 0 === h || 0 === g || "0" === y)
                                    continue;
                                s.setAttribute("fmp-c", "".concat(t))
                            }
                            this.setTag(s, t)
                        }
                    }
                }
                ,
                e.prototype.getPathName = function() {
                    return this.win.location.pathname + this.win.location.hash + (this.perfConfig.distinctSearch ? this.win.location.search : "")
                }
                ,
                e.prototype.guid = 
                ,
                e.prototype.getOpType = function(e) {
                    var t = this.requestList.length
                      , n = 0;
                    return e ? n = 4 : this.firstInputTime > v && t ? n = 3 : t ? n = 2 : this.firstInputTime > v && (n = 1),
                    n
                }
                ,
                e.prototype.formatPerfData = function(e) {
                    var t, r = this.performanceData, o = r.pageLoad, i = void 0 === o ? 0 : o, a = r.domLoad, u = void 0 === a ? 0 : a, s = r.pageLoadBak, d = void 0 === s ? 0 : s, l = r.fmpSlowComp, p = this.perfConfig, m = p.username, f = void 0 === m ? "" : m, v = p.userId, h = void 0 === v ? "" : v, g = p.system, y = void 0 === g ? "" : g, _ = p.group, w = void 0 === _ ? "" : _, b = p.tip, S = void 0 === b ? "1280.0.0.0.29371" : b, I = p.env, O = void 0 === I ? "" : I, E = this.getHttpTime(), T = E.request, x = E.min, C = E.max, N = E.maxDuration, A = E.maxReqUrl, k = this.getOpType(e), R = e ? (null === (t = this.referer.slice(-1)) || void 0 === t ? void 0 : t[0]) || "" : this.getPathName(), P = {
                        tip: S,
                        username: f,
                        userId: h,
                        system: y,
                        group: w,
                        env: O,
                        version: c,
                        uploadType: k,
                        pageUrl: R
                    }, M = this.win.navigator, D = M.hardwareConcurrency, L = M.platform, j = M.connection, q = void 0 === j ? {} : j, U = {
                        plat: L,
                        network: "type:".concat(q.effectiveType, "/downlink:").concat(q.downlink, "/rtt:").concat(q.rtt),
                        hardware: D
                    }, V = e && d > 500 && !i ? Math.round(d) : Math.round(i);
                    return n(n(n({}, P), U), {
                        pageLoad: V,
                        domLoad: Math.round(u),
                        FMP: Math.ceil(this.performanceData.fmp || 0),
                        timeOrigin: String(this.win.performance.timeOrigin + this.startTime),
                        title: this.win.document.title,
                        request: T,
                        requestStartTime: Math.round(x) || 0,
                        requestEndTime: Math.round(C) || 0,
                        requestDuration: Math.round(C - x) || 0,
                        maxRequestDuration: Math.round(N) || 0,
                        maxRequestUrl: A || "",
                        loadType: this.isFirstLoad ? "reload" : "navigate",
                        traceId: this.guid(),
                        fmpSlowComp: l
                    })
                }
                ,
                e.prototype.rewriteXHR = function() {
                    var e = this
                      , t = this.win.XMLHttpRequest
                      , n = t.prototype.open;
                    t.prototype.open = function(t, r) {
                        return e.isExcludeReq(r) || e.requestList.push(r),
                        n.apply(this, arguments)
                    }
                    ;
                    var r = t.prototype.send;
                    t.prototype.send = function() {
                        var t = this
                          , n = 
                        return this.addEventListener("loadend", n, !1),
                        this.addEventListener("timeout", n, !1),
                        r.apply(this, arguments)
                    }
                }
                ,
                e.prototype.recordFetch = function() {
                    var e = this
                      , t = this.win.fetch;
                    this.win.fetch = function() {
                        for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                        var o = n[0]
                          , i = {};
                        i = "Request"in Window && o instanceof Window.Request ? o : n[1] || i;
                        var a = "string" == typeof o ? o : i.url;
                        return e.isExcludeReq(a) || e.requestList.push(a),
                        t.apply(this, n).then((
                        ))
                    }
                }
                ,
                e.prototype.sameReq = function(e, t) {
                    return e === t || (null == t ? void 0 : t.includes(e))
                }
                ,
                e.prototype.getReqEndTime = function(e) {
                    var t, n = this, r = null !== (t = this.requestList.findIndex((
                    ))) && void 0 !== t ? t : -1, o = this.requestList[r];
                    o && this.sameReq(o, e) && this.requestList.splice(r, 1)
                }
                ,
                e.prototype.destory = function() {
                    var e, t;
                    for (var n in null === (e = this.observer) || void 0 === e || e.disconnect(),
                    null === (t = this.keyDomObserver) || void 0 === t || t.disconnect(),
                    this)
                        delete this[n]
                }
                ,
                e
            }();
            t.R = y
        }
        ,
        682: 
    }
      , t = {};
    
    n.d = 
    ,
    n.o = 
    var r = {};
    return (()=>{
        "use strict";
        n.d(r, {
            default: 
        });
        var e = n(682)
          , t = n(126)
          , o = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (c) {
                o = {
                    error: c
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , i = {
            in: [108, 121, 124, 124],
            id: [109, 126, 128, 128],
            de: [710, 711, 592, 592],
            nl: [579, 580, 591, 591],
            es: [138, 139, 605, 605],
            fr: [571, 572, 573, 573],
            it: [524, 525, 589, 589],
            uk: [577, 578, 590, 590],
            ru: [132, 575, 587, 587],
            hk: [103, 129, 604, 604],
            tw: [104, 120, 127, 127],
            default: [0, 0, 0, 0]
        }
          , a = {
            default: {
                APP_ID: "2882303761517399893",
                PRO_ID: "16"
            },
            pocoDefault: {
                APP_ID: "31000000334",
                PRO_ID: "16"
            }
        }
          , c = {
            fr: "high",
            nl: "high",
            es: "high",
            de: "high",
            it: "high",
            uk: "high",
            tr: "high",
            pl: "high",
            se: "high",
            global: "high",
            gr: "high"
        }
          , u = {
            in: !0,
            default: !0
        };
        function s(e) {
            var t = o(i[e] || i.default, 4);
            return {
                pc: t[0],
                m: t[1],
                app: t[2],
                ios: t[3]
            }
        }
        function d(e) {
            return a[e] || (document.domain.includes("po.co") ? a.pocoDefault : a.default)
        }
        var l = {
            ae: {
                currencyCode: "AED"
            },
            au: {
                currencyCode: "AUD"
            },
            bd: {
                currencyCode: "BDT"
            },
            be: {
                currencyCode: "EUR"
            },
            br: {
                currencyCode: "BRL"
            },
            ca: {
                currencyCode: "CAD"
            },
            cl: {
                currencyCode: "CLP"
            },
            cn: {
                currencyCode: "CNY"
            },
            co: {
                currencyCode: "COP"
            },
            cz: {
                currencyCode: "CZK"
            },
            de: {
                currencyCode: "EUR"
            },
            dk: {
                currencyCode: "DKK"
            },
            eg: {
                currencyCode: "EGP"
            },
            es: {
                currencyCode: "EUR"
            },
            fr: {
                currencyCode: "EUR"
            },
            gcc: {
                currencyCode: "AED"
            },
            global: {
                currencyCode: "USD"
            },
            gr: {
                currencyCode: "GRD"
            },
            hk: {
                currencyCode: "HKD"
            },
            hu: {
                currencyCode: "HUF"
            },
            id: {
                currencyCode: "IDR"
            },
            ie: {
                currencyCode: "EUR"
            },
            il: {
                currencyCode: "ILS"
            },
            ir: {
                currencyCode: "IRR"
            },
            in: {
                currencyCode: "INR"
            },
            it: {
                currencyCode: "EUR"
            },
            jp: {
                currencyCode: "JPY"
            },
            kr: {
                currencyCode: "KRW"
            },
            la: {
                currencyCode: "LAK"
            },
            lk: {
                currencyCode: "LKR"
            },
            lu: {
                currencyCode: "EUR"
            },
            ma: {
                currencyCode: "MAD"
            },
            mm: {
                currencyCode: "MMK"
            },
            mo: {
                currencyCode: "MOP"
            },
            mx: {
                currencyCode: "MXN"
            },
            my: {
                currencyCode: "MYR"
            },
            ng: {
                currencyCode: "NGN"
            },
            nl: {
                currencyCode: "EUR"
            },
            np: {
                currencyCode: "NPR"
            },
            nz: {
                currencyCode: "NZD"
            },
            ph: {
                currencyCode: "PHP"
            },
            pk: {
                currencyCode: "PKR"
            },
            pl: {
                currencyCode: "PLN"
            },
            pt: {
                currencyCode: "EUR"
            },
            ro: {
                currencyCode: "RON"
            },
            ru: {
                currencyCode: "RUB"
            },
            sa: {
                currencyCode: "SAR"
            },
            se: {
                currencyCode: "SEK"
            },
            sg: {
                currencyCode: "SGD"
            },
            th: {
                currencyCode: "THB"
            },
            tr: {
                currencyCode: "TRY"
            },
            tw: {
                currencyCode: "TWD"
            },
            ua: {
                currencyCode: "UAH"
            },
            uk: {
                currencyCode: "GBP"
            },
            us: {
                currencyCode: "USD"
            },
            vn: {
                currencyCode: "VND"
            },
            za: {
                currencyCode: "ZAR"
            }
        };
        function p(e) {
            return Object.assign({
                currencyCode: "USD"
            }, l[e] || {})
        }
        
        var f = 
          , v = 
          , h = 
          , g = 
          , y = 
          , _ = ["guserid", "instance_id", "muserid", "site_country", "tz", "app_platform", "ot_ua", "last_source", "utm_channel", "utm_content", "utm_term", "utm_type", "abtest_group"];
        function w() {
            return e.get("mstuid") || ""
        }
        function b(t) {
            var n = "1" === e.get("_ot_use_type")
              , r = re();
            return !n && w() ? r = w() : e.get("_ot_instance_id") ? r = e.get("_ot_instance_id") || r : e.set("_ot_instance_id", r, M(t, {
                expires: new Date(Date.now() + 34128e6)
            })),
            r
        }
        function S(e, t) {
            if (e instanceof Object) {
                var n = document.querySelector("html")
                  , r = document.querySelector("body")
                  , o = "";
                if (t)
                    try {
                        var i = t.closest("[data-ot-module]");
                        o = !!i && i.getAttribute("data-ot-module") || ""
                    } catch (ce) {}
                var a = [e.a || !!n && n.getAttribute("data-ot-project") || d("default").PRO_ID, e.b || !!r && r.getAttribute("data-ot-page") || 0, e.c || o || 0, e.d || 0, e.e || 0, Math.floor(Math.random() * Math.pow(10, 8))];
                return O(a) ? a.join(".") : ""
            }
            var c = (e || "").split(".");
            return O(c) ? g(g([], h(c.slice(0, 5)), !1), [Math.floor(Math.random() * Math.pow(10, 8))], !1).join(".") : ""
        }
        function I(e) {
            var t, n = e.split(".");
            if (O(n)) {
                var r = ""
                  , o = ""
                  , i = h(n, 5)
                  , a = i[1]
                  , c = i[2]
                  , u = i[3]
                  , s = i[4]
                  , d = c.split("|");
                return d.length > 0 && (r = (t = h(d, 2))[0],
                o = t[1]),
                {
                    tipB: a,
                    tipC: r,
                    tipC1: o || "",
                    tipD: u,
                    tipE: s
                }
            }
            return {
                tipB: "",
                tipC: "",
                tipC1: "",
                tipD: "",
                tipE: ""
            }
        }
        function O(e) {
            var t = !0;
            return e.length < 5 && (t = !1),
            e.slice(0, 2).some((function(e) {
                return 0 === Number(e || 0)
            }
            )) && (t = !1),
            z() && !t && console.warn("The tip code [".concat(e.join("."), "] is invalid!")),
            !!t
        }
        function E(t) {
            var n = x()
              , r = t.split(".")
              , o = h(r, 5)
              , i = o[0]
              , a = o[1]
              , c = o[2]
              , u = o[3]
              , s = o[4];
            n && e.set("_ot_ref_tip", r.length > 5 ? "".concat(i, ".").concat(a, ".").concat(c, ".").concat(u, ".").concat(s) : "", M(n))
        }
        
        function x() {
            var e = document.querySelector("html");
            return e && e.getAttribute("data-ot-local") || (window.location.pathname || "/").split("/")[1] || ""
        }
        function C() {
            var t = document.querySelector("html")
              , n = t && t.getAttribute("data-ot-platform")
              , r = j()
              , o = r.isOtherApp
              , i = r.isMihomeApp
              , a = r.isMicommunityApp;
            return o ? i ? "mihome" : a ? "micommunity" : "others" : "1" === e.get("ISAPP") ? "android" : "1" === e.get("ISIOS") ? "ios" : n || "m"
        }
        function N(t) {
            !function(t) {
                var n = Number(e.get("_ot_last_time") || 0);
                n && Date.now() - n > 18e5 && e.set("_ot_update_flag", "true", M(t));
                !function(t) {
                    e.set("_ot_last_time", String(Date.now()), M(t))
                }(t)
            }(t);
            var n = document.referrer || ""
              , r = ([M(t).domain, ".xiaomi.com", ".xiaomi.net"].some((
            )) ? e.get("_ot_last_source") : n) || ""
              , o = "true" === e.get("_ot_update_flag") ? "" : r;
            return e.set("_ot_last_source", o || "", M(t, {
                expires: new Date(Date.now() + 18e5)
            })),
            o
        }
        function A(t) {
            var n = document.location.href || ""
              , r = document.referrer || ""
              , o = e.get("_ot_prev_uri_path") || "";
            e.set("_ot_referrer_path", r || "", M(t)),
            e.set("_ot_prev_uri_path", o !== r ? r : o || "", M(t)),
            e.set("_ot_curr_uri_path", n, M(t))
        }
        function k(t) {
            var n = document.location.href || ""
              , r = document.referrer || ""
              , o = e.get("_ot_referrer_path") || ""
              , i = e.get("_ot_curr_uri_path") || "";
            return n !== i && (e.set("_ot_prev_uri_path", i, M(t)),
            e.set("_ot_curr_uri_path", n, M(t))),
            r === o && r ? e.get("_ot_prev_uri_path") || "" : (e.set("_ot_prev_uri_path", r, M(t)),
            r || "")
        }
        function R(t, n, r) {
            var o = r || e.get("_ot_".concat(n)) || ""
              , i = "true" === e.get("_ot_update_flag") ? "" : o;
            return e.set("_ot_".concat(n), i, M(t, {
                expires: new Date(Date.now() + 18e5)
            })),
            i
        }
        function P(t, n, r) {
            return (n instanceof Array ? n : [n]).forEach((
            ))
        }
        function M(e, t) {
            return Object.assign({
                sameSite: "strict",
                path: "/" + e,
                domain: ".".concat((window.location.hostname || "").split(".").slice("id" === e ? -3 : -2).join("."))
            }, t || {})
        }
        function D(t) {
            var n = e.get("_ot_session_id") || String(Date.now());
            return e.set("_ot_session_id", n, M(t, {
                expires: new Date(Date.now() + 18e5)
            })),
            n
        }
        function L(e) {
            return "string" != typeof e ? void 0 : e.replace(/^javascript:void\(0\)(;)?/g, "").replace(/^(http(s?):)?\/\//i, "".concat(window.location.protocol, "//"))
        }
        function j() {
            var t = "1" === e.get("ISAPP") || "1" === e.get("ISIOS")
              , n = !!~["community_sdk", "mihome_sdk"].indexOf(e.get("request_from") || "")
              , r = !!~["mihome_sdk"].indexOf(e.get("request_from") || "")
              , o = !!~["community_sdk"].indexOf(e.get("request_from") || "")
              , i = t && !n && Number(e.get("APPVERSION")) < 31500
              , a = t && !n && Number(e.get("IOSVERSION")) < 31e3
              , c = t && !n && Number(e.get("APPVERSION")) <= 40200
              , u = t && !n && Number(e.get("IOSVERSION")) <= 40100
              , s = t && !n && Number(e.get("APPVERSION")) >= 1e5;
            return {
                isInsideApp: t,
                isOldAPP: i,
                isOldIOS: a,
                isOtherApp: t && n,
                isUseMiCommand: t && !n && (Number(e.get("APPVERSION")) >= 31800 || Number(e.get("IOSVERSION")) >= 31300),
                isGAOldApp: c,
                isGAOldIOS: u,
                isPocoApp: s,
                isMihomeApp: r,
                isMicommunityApp: o
            }
        }
        function q(t, n) {
            try {
                var r = JSON.stringify({
                    eventType: t,
                    params: n
                })
                  , o = "xiaomi://MiEventTrackCommand?action=logGA&params=" + encodeURIComponent(r);
                "1" === e.get("ISIOS") ? Number(e.get("IOSVERSION")) >= 40503 ? window.webkit.messageHandlers.trackAction.postMessage({
                    url: o
                }) : window.location.assign(o) : "1" === e.get("ISAPP") && prompt(o)
            } catch (i) {
                console.warn("GA4: An error occurred in app!")
            }
        }
        function U(e) {
            var t = Object.assign({}, e);
            for (var n in t)
                if (void 0 === t[n])
                    delete t[n];
                else if (Array.isArray(t[n]))
                    for (var r = 0; r < t[n].length; r++)
                        t[n][r] = U(t[n][r]);
                else
                    "object" == typeof t[n] && (t[n] = U(t[n]));
            return t
        }
        function V(t, n) {
            var r, o, i;
            t = function(e) {
                var t = Object.assign({}, e);
                for (var n in t)
                    if (Array.isArray(t[n]))
                        for (var r = 0; r < t[n].length; r++)
                            t[n][r] = U(t[n][r]);
                    else
                        "object" == typeof t[n] ? t[n] = U(t[n]) : "string" == typeof t[n] && (_.includes(n) ? t[n] = t[n].substr(0, 36) : t[n] = t[n].substr(0, 100));
                return t
            }(t);
            var a = j()
              , c = a.isInsideApp
              , u = a.isGAOldApp
              , s = a.isGAOldIOS
              , d = a.isOtherApp
              , l = a.isPocoApp
              , p = c && !u && !s && !d && !l;
            if (!function(t) {
                var n = "1" === e.get("ISAPP")
                  , r = "1" === e.get("ISIOS")
                  , o = {
                    de: n && Number(e.get("APPVERSION")) < 40403 || r && Number(e.get("IOSVERSION")) < 40400,
                    es: n && Number(e.get("APPVERSION")) < 40300 || r && Number(e.get("IOSVERSION")) < 40400,
                    fr: n && Number(e.get("APPVERSION")) < 40300 || r && Number(e.get("IOSVERSION")) < 40400,
                    id: n && Number(e.get("APPVERSION")) < 40700 || r && Number(e.get("IOSVERSION")) < 40800,
                    in: n && Number(e.get("APPVERSION")) < 40600 || r && Number(e.get("IOSVERSION")) < 40700,
                    it: n && Number(e.get("APPVERSION")) < 40300 || r && Number(e.get("IOSVERSION")) < 40400,
                    jp: n && Number(e.get("APPVERSION")) < 40400 || r && Number(e.get("IOSVERSION")) < 40500,
                    mx: n && Number(e.get("APPVERSION")) < 40800 || r && Number(e.get("IOSVERSION")) < 40900,
                    nl: n && Number(e.get("APPVERSION")) < 40400 || r && Number(e.get("IOSVERSION")) < 40500,
                    pl: n && Number(e.get("APPVERSION")) < 40500 || r && Number(e.get("IOSVERSION")) < 40600,
                    ru: n && Number(e.get("APPVERSION")) < 40400 || r && Number(e.get("IOSVERSION")) < 40500,
                    tr: n && Number(e.get("APPVERSION")) < 40400 || r && Number(e.get("IOSVERSION")) < 40500,
                    uk: n && Number(e.get("APPVERSION")) < 40400 || r && Number(e.get("IOSVERSION")) < 40500,
                    default: !1
                };
                return o[t] || o.default
            }(x()))
                if (p) {
                    var m = Object.assign({}, t);
                    delete m.event;
                    try {
                        var f = n ? m.ecommerce : m;
                        f.page_location = window.location.href.replace("/app/", "/").replace("/ios/", "/").substring(0, 100),
                        f.page_referrer = null === (r = f.page_referrer) || void 0 === r ? void 0 : r.replace("/app/", "/").replace("/ios/", "/").substring(0, 100),
                        "page_view" === t.event ? (q("screen_view", JSON.stringify({
                            screen_name: f.page_type
                        })),
                        setTimeout((function() {
                            q(t.event, JSON.stringify(U(f)))
                        }
                        ), 800)) : q(t.event, JSON.stringify(U(f)))
                    } catch (v) {
                        console.warn("GA4: An error occurred in app!")
                    }
                } else
                    try {
                        n && (null === (o = window.dataLayer) || void 0 === o || o.push({
                            ecommerce: null
                        })),
                        null === (i = window.dataLayer) || void 0 === i || i.push(t)
                    } catch (v) {
                        console.warn("GA4: An error occurred in web!")
                    }
        }
        function B() {
            var t, n, r = (t = x(),
            (n = {
                in: !0,
                default: !1
            })[t] || n.default), o = "1" === e.get("ISAPP") && Number(e.get("APPVERSION")) > 40901 || "1" === e.get("ISIOS") && Number(e.get("IOSVERSION")) > 40900;
            return j().isInsideApp ? r && o : r
        }
        function F(t, n) {
            if (!B() && n.tip && Q()) {
                var r = j()
                  , o = r.isInsideApp
                  , i = r.isOldAPP
                  , a = r.isOldIOS
                  , c = r.isOtherApp;
                if (o && !i && !a && !c) {
                    var u = n.tip.split(".")
                      , s = {
                        b: u[1],
                        c: u[2],
                        d: u[3],
                        e: u[4],
                        location: window.location.href || "",
                        page: ee(),
                        title: window.document.title || "",
                        page_version: $()
                    };
                    Object.keys(n).forEach((function(e) {
                        "tip" !== e && (s[e.replace(/([A-Z])/g, "_$1").toLowerCase()] = n[e])
                    }
                    ));
                    try {
                        !function(t, n) {
                            if (j().isUseMiCommand && "1" === e.get("ISIOS")) {
                                var r = JSON.stringify({
                                    eventType: t,
                                    params: n
                                })
                                  , o = "xiaomi://MiEventTrackCommand?action=track&params=" + encodeURIComponent(r);
                                Number(e.get("IOSVERSION")) >= 40503 ? window.webkit.messageHandlers.trackAction.postMessage({
                                    url: o
                                }) : window.location.assign(o)
                            } else
                                window.WE && window.WE.trackEvent && "function" == typeof window.WE.trackEvent && window.WE.trackEvent(t, n)
                        }(t, JSON.stringify(K(s)))
                    } catch (d) {
                        console.warn("OneTrack: An error occurred in app!")
                    }
                } else
                    try {
                        "function" == typeof window.onetrack && window.onetrack("track", t, K(n))
                    } catch (d) {
                        console.warn("OneTrack: An error occurred in web!")
                    }
            }
        }
        function G(e) {
            return X({
                utm_type: "mi_type",
                utm_channel: "mi_channel",
                utm_campaign: "utm_campaign",
                utm_source: "mi_source",
                utm_medium: "mi_medium",
                utm_term: "mi_term",
                utm_content: "mi_content"
            }[e]) || X(e) || ""
        }
        function W(e, t) {
            var n = Object.assign({}, e);
            return t && "object" == typeof t && Object.keys(t).forEach((function(e) {
                n[e.replace(/([A-Z])/g, "_$1").toLowerCase()] = H(t[e], "")
            }
            )),
            n
        }
        function H(e, t) {
            return void 0 === e ? null : void 0 !== t ? e || t : e
        }
        function J(e, t) {
            return void 0 === e ? t || void 0 : void 0 !== t ? "".concat(e) ? e : e || t || void 0 : e
        }
        function K(e) {
            var t = Object.assign({}, e);
            return Object.keys(t).forEach((function(e) {
                ~[null, void 0].indexOf(t[e]) && delete t[e]
            }
            )),
            t
        }
        function z() {
            var e = document.querySelector("html")
              , t = e && e.getAttribute("data-ot-test");
            return (document.domain.includes("test") || document.domain.includes("dev")) && "true" === t
        }
        function $() {
            var e = "";
            try {
                e = "".concat(process.env.VERSION)
            } catch (ce) {}
            return e || "1.0.0"
        }
        
        function X(e, t) {
            var n = t || window.location.search || (window.location.hash || "").replace(/.+\?/g, "?").replace(/#.+/g, "");
            if (!n)
                return "";
            var r = n.slice(1).split("&").map((
            ));
            return (h(r.filter((function(t) {
                var n = h(t, 2)
                  , r = n[0];
                n[1];
                return r === e
            }
            )).map((
            )), 1)[0] || "").replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/gi, (
            ))
        }
        var Y = function() {
            return {
                instanceId: ("1" === e.get("_ot_use_type") ? e.get("_ot_instance_id") || "" : w()) || "",
                viewTip: e.get("_ot_view_tip") || "",
                refTip: e.get("_ot_ref_tip") || "",
                refB: e.get("_ot_ref_b") || "",
                sessionId: e.get("_ot_session_id") || "",
                lastSource: e.get("_ot_last_source") || "",
                utmType: e.get("_ot_utm_type") || "",
                utmChannel: e.get("_ot_utm_channel") || "",
                utmCampaign: e.get("_ot_utm_campaign") || "",
                utmSource: e.get("_ot_utm_source") || "",
                utmMedium: e.get("_ot_utm_medium") || "",
                utmTerm: e.get("_ot_utm_term") || "",
                utmContent: e.get("_ot_utm_content") || ""
            }
        };
        function Q() {
            var t = j().isInsideApp
              , n = x()
              , r = -1 !== window.location.hostname.indexOf("po.co")
              , o = n);
            return !!(t || r ? "0,1,2,3:" : e.get("notice_gdpr_prefs") || o).match(/3/)
        }
        function ee() {
            return (window.location.pathname || "/").replace(/^\/[a-z]+/, "").replace(/\/(index.html)?$/, "") || "/index"
        }
        function te(e, t, n, r) {
            return f(this, void 0, void 0, (function() {
                var o, i, a, c, u, s, d, l, p, m, f;
                return v(this, (function(v) {
                    switch (v.label) {
                    case 0:
                        switch (o = {},
                        i = J(r.ecommerce.pageType || !!document.body && document.body.getAttribute("data-ot-pageType") || void 0, ""),
                        a = J(t.itemListName, "") ? "".concat(i, ".").concat(J(t.itemListName, "")) : void 0,
                        c = J(t.itemListId, "") ? "".concat(i, ".").concat(J(t.itemListId, "")) : "".concat(i, ".").concat(n.tipC).concat(n.tipC1 ? "|".concat(n.tipC1) : ""),
                        e) {
                        case "view_item_list":
                            return [3, 1];
                        case "select_item":
                            return [3, 2];
                        case "view_item":
                            return [3, 3];
                        case "view_cart":
                            return [3, 6];
                        case "add_to_cart":
                            return [3, 9];
                        case "remove_from_cart":
                            return [3, 12];
                        case "begin_checkout":
                            return [3, 15];
                        case "add_shipping_info":
                            return [3, 18];
                        case "add_payment_info":
                            return [3, 21];
                        case "select_promotion":
                            return [3, 24];
                        case "view_promotion":
                            return [3, 25]
                        }
                        return [3, 26];
                    case 1:
                    case 2:
                        return o = {
                            item_list_name: J(a, ""),
                            item_list_id: J(c, ""),
                            index: Number(t.index || 0)
                        },
                        [3, 27];
                    case 3:
                        return u = {},
                        [4, ae("_ot_item_list_name")];
                    case 4:
                        return u.item_list_name = v.sent(),
                        [4, ae("_ot_item_list_id")];
                    case 5:
                        return u.item_list_id = v.sent(),
                        u.index = Number(t.index || 0),
                        o = u,
                        [3, 27];
                    case 6:
                        return s = {},
                        [4, ae("_ot_item_list_name")];
                    case 7:
                        return s.item_list_name = v.sent(),
                        [4, ae("_ot_item_list_id")];
                    case 8:
                        return s.item_list_id = v.sent(),
                        s.index = Number(t.index || 0),
                        o = s,
                        [3, 27];
                    case 9:
                        return d = {},
                        [4, ae("_ot_item_list_name")];
                    case 10:
                        return d.item_list_name = v.sent(),
                        [4, ae("_ot_item_list_id")];
                    case 11:
                        return d.item_list_id = v.sent(),
                        d.index = Number(t.index || 0),
                        o = d,
                        [3, 27];
                    case 12:
                        return l = {},
                        [4, ae("_ot_item_list_name")];
                    case 13:
                        return l.item_list_name = v.sent(),
                        [4, ae("_ot_item_list_id")];
                    case 14:
                        return l.item_list_id = v.sent(),
                        l.index = Number(t.index || 0),
                        o = l,
                        [3, 27];
                    case 15:
                        return p = {},
                        [4, ae("_ot_item_list_name")];
                    case 16:
                        return p.item_list_name = v.sent(),
                        [4, ae("_ot_item_list_id")];
                    case 17:
                        return p.item_list_id = v.sent(),
                        p.index = Number(t.index || 0),
                        o = p,
                        [3, 27];
                    case 18:
                        return m = {},
                        [4, ae("_ot_item_list_name")];
                    case 19:
                        return m.item_list_name = v.sent(),
                        [4, ae("_ot_item_list_id")];
                    case 20:
                        return m.item_list_id = v.sent(),
                        m.index = Number(t.index || 0),
                        o = m,
                        [3, 27];
                    case 21:
                        return f = {},
                        [4, ae("_ot_item_list_name")];
                    case 22:
                        return f.item_list_name = v.sent(),
                        [4, ae("_ot_item_list_id")];
                    case 23:
                        return f.item_list_id = v.sent(),
                        f.index = Number(t.index || 0),
                        o = f,
                        [3, 27];
                    case 24:
                    case 25:
                        return o = {
                            promotion_id: J(t.promotionId, ""),
                            promotion_name: J(t.promotionName, ""),
                            creative_name: J(t.creativeName, ""),
                            creative_slot: J(t.creativeSlot, ""),
                            index: Number(t.index || 0)
                        },
                        [3, 27];
                    case 26:
                        return [3, 27];
                    case 27:
                        return [2, o]
                    }
                }
                ))
            }
            ))
        }
        function ne(e, t) {
            for (var n = e.charCodeAt(0), r = t.charCodeAt(0), o = "", i = n; i <= r; i++)
                o += String.fromCharCode(i);
            return o
        }
        function re() {
            return function(e, t) {
                for (var n = "", r = 0; r < t; r++)
                    n += e[Math.floor(Math.random() * e.length)];
                return n
            }(ne("0", "9") + ne("a", "z"), 32)
        }
        function oe(e) {
            var t, n, r, o, i, a;
            try {
                for (var c = y(e), u = c.next(); !u.done; u = c.next()) {
                    var s = u.value;
                    if (s) {
                        var d = String(s).toLowerCase();
                        d.startsWith("spu") ? a = s : d.length >= 3 && d.length <= 6 ? i = s : d.startsWith("3") && d.length < 11 ? r = s : d.startsWith("4") && d.length < 26 && (o = s)
                    }
                }
            } catch (l) {
                t = {
                    error: l
                }
            } finally {
                try {
                    u && !u.done && (n = c.return) && n.call(c)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return {
                commodityId: r,
                itemId: o,
                productId: i,
                spuId: a
            }
        }
        function ie(t, n) {
            var r = j()
              , o = r.isInsideApp
              , i = r.isGAOldApp
              , a = r.isGAOldIOS
              , c = r.isOtherApp
              , u = r.isPocoApp;
            if (!(o && !i && !a && !c && !u) || Number(e.get("APPVERSION")) <= 40402 || Number(e.get("IOSVERSION")) <= 40504)
                e.set(t, n, M(x(), {
                    expires: 365
                }));
            else
                try {
                    "1" === e.get("ISIOS") ? window.webkit.messageHandlers.setStringPref.postMessage({
                        key: t.split("_ot_")[1],
                        value: n
                    }) : window.WE && window.WE.trackEvent && "function" == typeof window.WE.trackEvent && window.WE.setStringPref(t.split("_ot_")[1], n)
                } catch (s) {
                    console.log("set module name-id error")
                }
        }
        function ae(t) {
            var n = j()
              , r = n.isInsideApp
              , o = n.isGAOldApp
              , i = n.isGAOldIOS
              , a = n.isOtherApp
              , c = n.isPocoApp
              , u = "";
            if (!(r && !o && !i && !a && !c) || Number(e.get("APPVERSION")) <= 40402 || Number(e.get("IOSVERSION")) <= 40504)
                u = e.get(t) || void 0;
            else
                try {
                    "1" === e.get("ISIOS") ? (window.webkit.messageHandlers.getStringPref.postMessage(t.split("_ot_")[1]),
                    setTimeout((function() {
                        u = window.ITEM_LIST[t.split("_ot_")[1]] || void 0
                    }
                    ), 1e3)) : window.WE && window.WE.trackEvent && "function" == typeof window.WE.trackEvent && (u = window.WE.getStringPref(t.split("_ot_")[1]) || void 0)
                } catch (s) {
                    console.log("get module name-id error")
                }
            return new Promise((function(t) {
                try {
                    Number(e.get("IOSVERSION")) > 40504 && "1" === e.get("ISIOS") ? setTimeout((function() {
                        t(u)
                    }
                    ), 1e3) : t(u)
                } catch (s) {
                    t(u)
                }
            }
            ))
        }
        window.ITEM_LIST = {},
        window.getStringPref = 
        ;
        var ce, ue, se, de, le = function() {
            return le = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            le.apply(this, arguments)
        }, pe = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (c) {
                o = {
                    error: c
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, me = function(t) {
            if (!Q())
                return "";
            var n = document.querySelector("body")
              , r = pe(t.tip instanceof Object ? [0, t.tip.b] : String(t.tip || "").split("."), 2)[1];
            if (r && n && n.setAttribute("data-ot-page", String(r || 0)),
            t.pageType) {
                var o = t.pageType;
                n && n.setAttribute("data-ot-pageType", String(o || ""))
            }
            return function() {
                var n, r = S(t.tip) || "", o = {
                    tip: r || "",
                    commodity_id: H(t.commodityId, ""),
                    product_id: H(t.productId, ""),
                    goods_id: H(t.goodsId, ""),
                    tag: H(t.tag, ""),
                    version: H(t.version, ""),
                    exp_id: H(t.expId, "")
                };
                (t.viewTipDisabledB || t.viewTipEnabledE) && function(e) {
                    if (Z())
                        try {
                            sessionStorage.setItem("DISABLED_B", JSON.stringify(e.rangeB || [])),
                            sessionStorage.setItem("ENABLED_E", JSON.stringify(e.rangeE || []))
                        } catch (t) {
                            console.debug(t)
                        }
                }({
                    rangeB: t.viewTipDisabledB || [],
                    rangeE: t.viewTipEnabledE || []
                });
                var i, a, c = W(o, t.extra);
                if (Q() && function(t) {
                    var n = h(T().split("."), 2)[1]
                      , r = h((t || "").split("."), 2)[1]
                      , o = e.get("_ot_ref_b") || ""
                      , i = x();
                    n !== r && n === o || E(""),
                    i && e.set("_ot_ref_b", r || "", M(i))
                }(r),
                F("view", c),
                window.dataLayer && t.isOpenGA) {
                    var u = x()
                      , l = C()
                      , p = b(u)
                      , m = s(u)
                      , f = Number(m["pc" === l ? "pc" : "m"])
                      , v = le({
                        event: "page_view",
                        muserid: e.get("mUserId") || void 0,
                        guserid: e.get("guserid") || void 0,
                        instance_id: p || void 0,
                        app_id: d(c.local).APP_ID || void 0,
                        tip: r,
                        ref_tip: T() || void 0,
                        page: ee(),
                        page_version: $() || void 0,
                        tz: (i = (new Date).getTimezoneOffset(),
                        a = Math.abs(i),
                        "GMT".concat(i > 0 ? "-" : "+").concat("00".concat(Math.floor(a / 60)).slice(-2), ":").concat("00".concat(a % 60).slice(-2)) || void 0),
                        site_country: u || void 0,
                        last_source: N(u) || void 0,
                        app_platform: l || void 0,
                        ot_ua: (null === (n = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === n ? void 0 : n.userAgent) || void 0,
                        utm_channel: R(u, "utm_channel", G("utm_channel")) || void 0,
                        utm_content: R(u, "utm_content", G("utm_content")) || void 0,
                        utm_term: R(u, "utm_term", G("utm_term")) || void 0,
                        utm_type: R(u, "utm_type", G("utm_type")) || void 0,
                        page_type: J(t.pageType || void 0, ""),
                        page_referrer: k(u) || void 0,
                        domain_id: "".concat(f) || void 0,
                        category_id: J(t.categoryId, ""),
                        category_name: J(t.categoryName, ""),
                        parent_category_id: J(t.parentCategoryId, ""),
                        parent_category_name: J(t.parentCategoryName, ""),
                        moe_enable: J(t.moeEnable, !1),
                        abtest_group: e.get("xm_user_bucket") || void 0
                    }, I(r));
                    V(Object.assign({}, v, {
                        event: "basic_config"
                    })),
                    setTimeout((
                    ), 0)
                }
                return r
            }()
        }, fe = function() {
            return fe = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            fe.apply(this, arguments)
        }, ve = function(e, t) {
            var n = S(e.tip, t) || "";
            if (!n && "login" !== e.event || !Q())
                return "";
            var r = Object.assign({}, e)
              , o = x()
              , i = oe([r.commodityId, r.productId, r.itemId, r.spuId].filter((function(e) {
                return !!e
            }
            )));
            window.dataLayer && V(fe({
                event: r.event,
                element_name: J(r.elementName, ""),
                element_title: J(r.elementTitle, ""),
                tip: n,
                link: J(L(r.linkUrl || r.link), ""),
                ref_tip: T() || void 0,
                page_type: J(r.pageType || !!document.body && document.body.getAttribute("data-ot-pageType") || void 0, ""),
                page_version: $() || void 0,
                asset_link: J(L(r.assetLink), ""),
                asset_id: J(r.assetId, ""),
                live_id: J(r.liveId, ""),
                alg: J(r.alg, ""),
                alg_ver: J(r.algVer, ""),
                alg_group: J(r.algGroup, ""),
                activity_id: J(r.activityId || r.eventId, ""),
                search_result: J(r.searchResult || r.result, ""),
                search_word: J(r.searchWord, ""),
                search_type: J(r.searchType, ""),
                commodity_id: J(i.commodityId, "") ? "".concat(J(i.commodityId, "")) : void 0,
                coupon_list: J(r.couponList, ""),
                coupon_status: J(r.couponStatus, ""),
                product_id: J(i.productId, "") ? "".concat(J(i.productId, "")) : void 0,
                tag: J(r.tag, ""),
                spu_id: J(i.spuId, "") ? "".concat(J(i.spuId, "")) : void 0,
                item_name: J(r.itemName, ""),
                item_id: J(i.itemId, "") ? "".concat(J(i.itemId, "")) : void 0,
                version: J(r.version, ""),
                exp_id: J(r.expId, ""),
                commentNbrofTotal: Number(r.commentNbrofTotal || 0),
                page_referrer: k(o) || void 0,
                category_id: J(r.categoryId, ""),
                category_name: J(r.categoryName, ""),
                parent_category_id: J(r.parentCategoryId, ""),
                parent_category_name: J(r.parentCategoryName, ""),
                product_total_count: J(r.productTotalCount),
                type: J(r.type, ""),
                model: J(r.model, ""),
                moe_enable: J(r.moeEnable, !1),
                notify_me_click_date: J(r.notifyMeClickDate, ""),
                button_name: J(r.buttonName, ""),
                guserid: J(r.guserid, ""),
                card_type: J(r.cardType, ""),
                order_delivery_date: J(r.orderDeliveryDate, ""),
                order_address: J(r.orderAddress, ""),
                order_city: J(r.orderCity, ""),
                coupon_applied: J(r.couponApplied, "")
            }, I(n)));
            return n
        }, he = function(t) {
            if (t.userId) {
                var n = "1" === e.get("isFromPassport");
                if (P(t.local, "isFromPassport", {
                    path: "/"
                }),
                "function" == typeof window.onetrack) {
                    if (B())
                        return;
                    window.onetrack("login", t.userId, t.accountType, t.extraParams, !n)
                }
                n && ve({
                    event: "login",
                    tip: "",
                    guserid: e.get("guserid") || void 0,
                    pageType: "login"
                })
            }
        }, ge = function(e) {
            if ("function" == typeof window.onetrack) {
                if (B())
                    return;
                window.onetrack("logout", e)
            }
            "function" == typeof window.gtag && window.gtag("event", "logout", e)
        }, ye = -1, _e =  we =  be =  Se =  Ie =  Oe =  Ee =  Te =  xe =  Ce = -1, Ne =  Ae =  ke = function() {
            addEventListener("visibilitychange", Ae, !0),
            addEventListener("prerenderingchange", Ae, !0)
        }, Re =  Pe =  Me =  De = [1800, 3e3], Le =  je = [.1, .25], qe = {
            passive: !0,
            capture: !0
        }, Ue = new Date, Ve =  Be =  Fe =  Ge =  We = [100, 300], He = [2500, 4e3], Je = {}, Ke = [800, 1800], ze =  $e =  Ze = {
            "product-station": [{
                matchType: "include",
                file: "html",
                rule: "",
                entryType: "navigation",
                initiatorType: "navigation"
            }, {
                matchType: "reg",
                file: "static.js",
                rule: new RegExp(/\/static\//),
                entryType: "resource",
                initiatorType: "script"
            }, {
                matchType: "reg",
                file: "getgoodsinformation",
                rule: new RegExp(/getgoodsinformation/),
                entryType: "resource",
                initiatorType: "xmlhttprequest"
            }, {
                matchType: "reg",
                file: "img",
                rule: new RegExp(/800x800/),
                entryType: "resource",
                initiatorType: "img"
            }]
        }, Xe = {
            NAVIGATION: "navigation",
            RESOURCE: "resource"
        }, Ye = "P", Qe = "B", et = "H", tt = "L", nt = "C", rt = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (c) {
                o = {
                    error: c
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }, ot = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                    r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        };
        function it() {
            var e, t, n, r, o, i, a, c = function() {
                var e = performance.getEntriesByType(Xe.NAVIGATION)[0] || {};
                e = Object.assign({
                    startTime: 0,
                    domainLookupEnd: 0,
                    domainLookupStart: 0,
                    connectEnd: 0,
                    connectStart: 0,
                    secureConnectionStart: 0,
                    requestStart: 0,
                    responseStart: 0,
                    responseEnd: 0
                }, e);
                var t = Math.trunc(e.startTime)
                  , n = Math.trunc(e.domainLookupEnd - e.domainLookupStart)
                  , r = Math.trunc(e.secureConnectionStart - e.connectStart)
                  , o = Math.trunc(e.connectEnd - e.secureConnectionStart)
                  , i = Math.trunc(e.responseStart - (e.requestStart || 0))
                  , a = Math.trunc(e.responseEnd - e.responseStart);
                return {
                    htmlStartTime: t,
                    htmlEndTime: Math.trunc(e.responseEnd),
                    htmlDNS: n,
                    htmlTCP: r,
                    htmlSSL: o,
                    htmlResponse: i,
                    htmlDownload: a
                }
            }(), u = function() {
                var e = {
                    whitelistMark: ["spps_files", "dist"]
                }
                  , t = []
                  , n = []
                  , r = []
                  , o = []
                  , i = [];
                (performance.getEntriesByType(Xe.RESOURCE) || []).filter((function(t) {
                    return e.whitelistMark.some((
                    ))
                }
                )).forEach((function(e) {
                    var a;
                    t.push(e.startTime),
                    n.push(e.responseEnd),
                    r.push(e.responseStart - (e.requestStart || 0)),
                    o.push(e.responseEnd - e.responseStart),
                    i.push("transferSize"in (a = e) ? 0 === a.transferSize ? "c" : "n" : "o")
                }
                ));
                var a = Math.trunc(Math.min.apply(Math, ot([], rt(t), !1)))
                  , c = Math.trunc(Math.max.apply(Math, ot([], rt(t), !1)))
                  , u = Math.trunc(Math.min.apply(Math, ot([], rt(n), !1)))
                  , s = Math.trunc(Math.max.apply(Math, ot([], rt(n), !1)))
                  , d = Math.trunc(Math.max.apply(Math, ot([], rt(r), !1)))
                  , l = Math.trunc(Math.max.apply(Math, ot([], rt(o), !1)));
                return {
                    jsStartTimeMin: a,
                    jsStartTimeMax: c,
                    jsEndTimeMin: u,
                    jsEndTimeMax: s,
                    jsCacheStatus: i[0],
                    jsHttpResponseMax: d,
                    jsHttpDownloadMax: l
                }
            }(), s = (e = "go.buy.mi.com",
            t = "cookie-config",
            n = [],
            r = [],
            o = [],
            i = [],
            a = performance.getEntriesByType(Xe.RESOURCE).filter((function(t) {
                return ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) && t.name.includes(e)
            }
            )).filter((
            )),
            a.forEach((function(e) {
                n.push(e.startTime),
                r.push(e.responseEnd),
                o.push(e.responseStart - (e.requestStart || 0)),
                i.push(e.responseEnd - e.responseStart)
            }
            )),
            {
                fxStartTimeMin: Math.trunc(Math.min.apply(Math, ot([], rt(n), !1))),
                fxStartTimeMax: Math.trunc(Math.max.apply(Math, ot([], rt(n), !1))),
                fxEndTimeMin: Math.trunc(Math.min.apply(Math, ot([], rt(r), !1))),
                fxEndTimeMax: Math.trunc(Math.max.apply(Math, ot([], rt(r), !1))),
                fxHttpResponseMax: Math.trunc(Math.max.apply(Math, ot([], rt(o), !1))),
                fxHttpDownloadMax: Math.trunc(Math.max.apply(Math, ot([], rt(i), !1)))
            });
            return {
                htmlTime: c,
                jsTime: u,
                fxTime: s
            }
        }
        function at(e) {
            var t;
            if (e && e.length > 0) {
                var n = (null === (t = e[0].domTag) || void 0 === t ? void 0 : t.split("/")) || [];
                return n[n.length - 1]
            }
            return ""
        }
        var ct = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (ce) {
                        i(ce)
                    }
                }
                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (ce) {
                        i(ce)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , ut = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(u) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (ce) {
                                c = [6, ce],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, u])
                }
            }
        }
          , st = function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , r = 0;
            if (n)
                return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
          , dt = function() {
            var t = this;
            this.platform = C(),
            this._format = function(e, t) {
                return void 0 === t && (t = 0),
                e ? e.toFixed(t).valueOf() : void 0
            }
            ,
            this._getWebVitals = function() {
                return ct(t, void 0, void 0, (function() {
                    var e, t = this;
                    return ut(this, (function(n) {
                        return e = function(e) {
                            var n, r;
                            if ("TTFB" === e.name && (null === (n = e.entries) || void 0 === n ? void 0 : n.length) > 0) {
                                var o = (null === (r = e.entries[0]) || void 0 === r ? void 0 : r.requestStart) || 0;
                                t.metrics[e.name] = e.value - o
                            } else
                                t.metrics[e.name] = e.value
                        }
                        ,
                        e, {
                            reportAllChanges: !0
                        }),
                        e, {
                            reportAllChanges: !0
                        }),
                        e, {
                            reportAllChanges: !0
                        }),
                        Le(e, {
                            reportAllChanges: !0
                        }),
                        $e(e),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            this._getIRL = function() {
                var e, n;
                try {
                    for (var r = st(performance.getEntriesByType("resource")), o = r.next(); !o.done; o = r.next()) {
                        var i = o.value;
                        "img" === i.initiatorType && (t.metrics.IRL = i.duration + (t.metrics.IRL || 0))
                    }
                } catch (a) {
                    e = {
                        error: a
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
            }
            ,
            this._getUSP = function() {
                var e, n = "User stays on the page";
                return performance.measure(n),
                t.metrics.USP = (null === (e = performance.getEntriesByName(n)[0]) || void 0 === e ? void 0 : e.duration) || 0,
                t.metrics.USP
            }
            ,
            this._customProductStation = function() {
                var e = !!document.body && document.body.getAttribute("data-ot-pageType") || void 0;
                e && Ze[e].forEach((function(e) {
                    var n, r;
                    try {
                        for (var o = st(performance.getEntries()), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            a.entryType === e.entryType && a.initiatorType === e.initiatorType && ("include" === e.matchType || "reg" === e.matchType && e.rule.test(a.name)) && t.customArray.push({
                                name: a.name,
                                startTime: t._format(a.startTime),
                                duration: t._format(a.duration),
                                responseEnd: t._format(a.responseEnd)
                            })
                        }
                    } catch (c) {
                        n = {
                            error: c
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                ))
            }
            ,
            this.collectStart = 
            ,
            this.collectEnd = function() {
                "product-station" === (!!document.body && document.body.getAttribute("data-ot-pageType") || void 0) && "m" === t.platform && t._customProductStation(),
                t._getUSP()
            }
            ,
            this.reportPerf = function(n) {
                var r, o, i, a, c, u, s, d, l, p, m, f, v, h, g, y, _, w, S, I, O, E, T, N, A, R, P, M, D, L, j, q, U, B, F, G;
                t.collectEnd();
                var W = x()
                  , H = C()
                  , J = b(W)
                  , K = !!document.body && document.body.getAttribute("data-ot-pageType") || void 0
                  , z = (null === (r = window.performanceResult) || void 0 === r ? void 0 : r.fmpSlowComp) || []
                  , $ = Math.ceil((null === (o = z[0]) || void 0 === o ? void 0 : o.time) || 0)
                  , Z = function() {
                    var e, t = [];
                    for (var n in Xe) {
                        var r = Xe[n] || "";
                        (null === (e = null === PerformanceObserver || void 0 === PerformanceObserver ? void 0 : PerformanceObserver.supportedEntryTypes) || void 0 === e ? void 0 : e.length) && PerformanceObserver.supportedEntryTypes.includes(r) || t.push(r[0])
                    }
                    return t.join(",")
                }()
                  , X = {
                    P: $,
                    V: "0116",
                    H: (null === (a = null === (i = window.performanceResultDetail) || void 0 === i ? void 0 : i.htmlTime) || void 0 === a ? void 0 : a.htmlEndTime) || 0,
                    HR: (null === (u = null === (c = window.performanceResultDetail) || void 0 === c ? void 0 : c.htmlTime) || void 0 === u ? void 0 : u.htmlResponse) || 0,
                    HD: (null === (d = null === (s = window.performanceResultDetail) || void 0 === s ? void 0 : s.htmlTime) || void 0 === d ? void 0 : d.htmlDownload) || 0,
                    EX: Z,
                    L: n
                }
                  , Y = {
                    j: (null === (p = null === (l = window.performanceResultDetail) || void 0 === l ? void 0 : l.jsTime) || void 0 === p ? void 0 : p.jsStartTimeMin) || 0,
                    s: (null === (f = null === (m = window.performanceResultDetail) || void 0 === m ? void 0 : m.jsTime) || void 0 === f ? void 0 : f.jsStartTimeMax) || 0,
                    J: (null === (h = null === (v = window.performanceResultDetail) || void 0 === v ? void 0 : v.jsTime) || void 0 === h ? void 0 : h.jsEndTimeMin) || 0,
                    S: (null === (y = null === (g = window.performanceResultDetail) || void 0 === g ? void 0 : g.jsTime) || void 0 === y ? void 0 : y.jsEndTimeMax) || 0,
                    C: (null === (w = null === (_ = window.performanceResultDetail) || void 0 === _ ? void 0 : _.jsTime) || void 0 === w ? void 0 : w.jsCacheStatus) || void 0,
                    JR: (null === (I = null === (S = window.performanceResultDetail) || void 0 === S ? void 0 : S.jsTime) || void 0 === I ? void 0 : I.jsHttpResponseMax) || 0,
                    JD: (null === (E = null === (O = window.performanceResultDetail) || void 0 === O ? void 0 : O.jsTime) || void 0 === E ? void 0 : E.jsHttpDownloadMax) || 0
                }
                  , Q = {
                    f: (null === (N = null === (T = window.performanceResultDetail) || void 0 === T ? void 0 : T.fxTime) || void 0 === N ? void 0 : N.fxStartTimeMin) || 0,
                    x: (null === (R = null === (A = window.performanceResultDetail) || void 0 === A ? void 0 : A.fxTime) || void 0 === R ? void 0 : R.fxStartTimeMax) || 0,
                    F: (null === (M = null === (P = window.performanceResultDetail) || void 0 === P ? void 0 : P.fxTime) || void 0 === M ? void 0 : M.fxEndTimeMin) || 0,
                    X: (null === (L = null === (D = window.performanceResultDetail) || void 0 === D ? void 0 : D.fxTime) || void 0 === L ? void 0 : L.fxEndTimeMax) || 0,
                    FR: (null === (q = null === (j = window.performanceResultDetail) || void 0 === j ? void 0 : j.jsTime) || void 0 === q ? void 0 : q.fxHttpResponseMax) || 0,
                    FD: (null === (B = null === (U = window.performanceResultDetail) || void 0 === U ? void 0 : U.jsTime) || void 0 === B ? void 0 : B.fxHttpDownloadMax) || 0,
                    LD: at((null === (F = window.performanceResult) || void 0 === F ? void 0 : F.fmpSlowComp) || [])
                }
                  , te = {
                    event: "performance",
                    perf: JSON.stringify(X),
                    perf1: JSON.stringify(Y),
                    perf2: JSON.stringify(Q),
                    alg: "",
                    alg_group: "",
                    alg_ver: "",
                    search_result: "",
                    search_word: "",
                    search_type: "",
                    page_version: "",
                    muserid: e.get("mUserId") || void 0,
                    guserid: e.get("guserid") || void 0,
                    instance_id: J || void 0,
                    page: ee(),
                    site_country: W || void 0,
                    app_platform: H || void 0,
                    ot_ua: (null === (G = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === G ? void 0 : G.userAgent) || void 0,
                    page_referrer: k(W) || void 0,
                    page_type: K
                }
                  , ne = "";
                if ("product-station" === K && "m" === t.platform) {
                    var re = {};
                    t.customArray.forEach((function(e, t) {
                        re["p".concat(t + 1, "_ST")] = e.startTime,
                        re["p".concat(t + 1, "_DR")] = e.duration,
                        re["p".concat(t + 1, "_RE")] = e.responseEnd
                    }
                    )),
                    ne = JSON.stringify(re),
                    te.alg = ne.substring(0, 100),
                    te.alg_group = ne.substring(100, 200),
                    te.alg_ver = ne.substring(200, 300),
                    te.search_result = ne.substring(300, 400),
                    te.search_word = ne.substring(400, 500),
                    te.search_type = ne.substring(500, 600),
                    te.page_version = ne.substring(600, 700)
                }
                return V(te),
                te
            }
            ,
            this.metrics = {},
            this.customArray = [],
            this.customPerf = {}
        }
          , lt = function() {
            var e = new dt;
            return e.collectStart(),
            e.reportPerf
        }
          , pt = function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (c) {
                o = {
                    error: c
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
          , mt = function(n, r) {
            var o;
            if (Q()) {
                if (window.dataLayer = window.dataLayer || [],
                window.dataLayer.push({
                    event: "dle_consent_update"
                }),
                !("object" == typeof window && "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype))
                    (b = document.createElement("script")).src = "//i01.appmifile.com/webfile/globalweb/stat/js/IntersectionObserver.min.js",
                    document.head.appendChild(b);
                var i, a, c, u, l = document.querySelector("#xmot"), p = j(), m = p.isOldAPP, f = p.isOldIOS, v = p.isOtherApp, h = p.isMihomeApp, g = p.isMicommunityApp;
                if (!(B() || l && window.onetrack)) {
                    window.onetrack = window.onetrack || function() {
                        (window.onetrack.q = window.onetrack.q || []).push(arguments)
                    }
                    ;
                    var y = z() ? "cn" : n.region || n.local || "cn"
                      , _ = v || m || f ? e.get("DEVICEID") || "undefined" : (i = n.local,
                    a = "1" === e.get("_ot_use_type"),
                    c = w(),
                    u = !a && !!c,
                    e.set("_ot_use_type", u ? "0" : "1", M(i, {
                        expires: 730
                    })),
                    e.get("_ot_instance_id") || e.set("_ot_instance_id", re(), M(i, {
                        expires: new Date(Date.now() + 34128e6)
                    })),
                    u ? c : {
                        type: "cookie",
                        name: "_ot_instance_id",
                        options: M(i, {
                            expires: new Date(Date.now() + 34128e6)
                        })
                    });
                    window.onetrack("init", n.appId || d(n.local).APP_ID, "default", y, _ || void 0);
                    var b;
                    (b = document.createElement("script")).src = "//ssl-cdn.static.browser.mi-img.com/mistat-data/onetrack/onetrack.js",
                    b.async = !0,
                    b.id = "xmot",
                    document.head.appendChild(b)
                }
                if (!window.pubsub) {
                    window.pubsub = window.pubsub || 
                    ,
                    window.pubsub("init", n.local.toUpperCase(), "4c17b4d1cfa2fb108700a15027ff54139f56ed9a", "mi-store-pubsub", "xiaomi-mistore-pubsub");
                    var S = document.createElement("script");
                    S.type = "text/javascript",
                    S.src = "//i02.appmifile.com/i18n/pubsub/i18n-pubsub.js",
                    S.setAttribute("async", "async"),
                    document.body.appendChild(S)
                }
                window.gtag || (window.gtag = window.gtag || function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    (window.dataLayer = window.dataLayer || []).push(e)
                }
                );
                var I = v ? h ? "mihome" : g ? "micommunity" : "others" : "1" === e.get("ISAPP") ? "android" : "1" === e.get("ISIOS") ? "ios" : n.platform || (window.innerWidth <= 720 ? "m" : "pc")
                  , O = document.querySelector("html")
                  , E = pt(n.tip instanceof Object ? [n.tip.a] : String(n.tip || "").split("."), 1)[0];
                O && O.setAttribute("data-ot-project", String(E || d(n.local).PRO_ID || 0)),
                O && O.setAttribute("data-ot-local", n.local),
                O && O.setAttribute("data-ot-platform", I),
                "cn" === n.region && O && O.setAttribute("data-ot-test", "true"),
                B() ? function(e) {
                    A(e),
                    P(e, "_ot_update_flag"),
                    D(e);
                    var t = ["utm_type", "utm_channel", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content"];
                    t.map(G).some((function(e) {
                        return !!e
                    }
                    )) && P(e, t.map((function(e) {
                        return "_ot_".concat(e)
                    }
                    )))
                }(n.local) : function(e, t, n) {
                    var r = s(t)
                      , o = Number(r["pc" === n ? "pc" : "m"]);
                    A(t),
                    P(t, "_ot_update_flag"),
                    D(t),
                    e.onetrack("set", "ref_tip", (function() {
                        return T()
                    }
                    )),
                    e.onetrack("set", "site_country", t),
                    e.onetrack("set", "domain_id", o),
                    e.onetrack("set", "app_platform", n),
                    e.onetrack("set", "page", (function() {
                        return ee()
                    }
                    )),
                    e.onetrack("set", "page_version", $()),
                    e.onetrack("set", "lastsource", (function() {
                        return N(t)
                    }
                    )),
                    e.onetrack("set", "session_id", (
                    ));
                    var i = ["utm_type", "utm_channel", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content"]
                      , a = i.map(G);
                    a.some((function(e) {
                        return !!e
                    }
                    )) && P(t, i.map((
                    )));
                    i.forEach((function(n, r) {
                        e.onetrack("set", n, (
                        ))
                    }
                    ))
                }(window, n.local, I),
                r && r instanceof Function && r(window, n.local);
                var x = e.get("mUserId") || "";
                if (x)
                    he({
                        local: n.local,
                        userId: x
                    });
                else if ()) {
                    (localStorage.getItem("_onetrack_uid") || "") && ge()
                }
                if (n.tip) {
                    var C = Object.assign(n, {
                        tip: n.tip
                    });
                    me(C)
                }
                var k = new t.R({
                    system: "海外小米网",
                    group: "BJ-MICOM",
                    env: z() ? "test" : "pro",
                    withoutFMP: !1,
                    container: "#root",
                    excludeNodes: ["span#teconsent.text-with-inline-end-border", ".product__article", ".buy-container", ".lazy", ".pin-spacer", "div.product-result-item_figure"],
                    maxWait: 8e3,
                    domWait: 2e3,
                    manualTrack: !0,
                    fmpOptions: {
                        eleWeight: {
                            SVG: 2,
                            IMG: 7,
                            CANVAS: 4,
                            OBJECT: 4,
                            EMBED: 4,
                            VIDEO: 4
                        },
                        fmpFilter: function(e) {
                            return 1 === e.length ? e : e.filter((function(e) {
                                var t = e.$node.getBoundingClientRect()
                                  , n = t.width
                                  , r = t.height;
                                return n > 30 && r > 12
                            }
                            ))
                        }
                    }
                 }
                ));
                window.isInitTrack || (k.initTrack(),
                window.isInitTrack = 1,
                console.log("initTrack had run"));
                var L = null
                  , q = !1
                  , U = "";
                window.addEventListener("load", (function() {
                    q = !0,
                    U = tt,
                    window.performanceResultDetail = it(),
                    L = lt(),
                    "1" === e.get("ISAPP") && L(U)
                }
                )),
                (null === (o = window.document) || void 0 === o ? void 0 : o.addEventListener) && window.document.addEventListener("readystatechange", (function() {
                    var e;
                    "complete" === (null === (e = window.document) || void 0 === e ? void 0 : e.readyState) && (q = !0,
                    U = nt,
                    window.performanceResultDetail = it())
                }
                ));
                var V, F, W, H = !1;
                V = function() {
                    if (window.currentPath !== window.location.pathname) {
                        window.currentPath = window.location.pathname;
                        var e = q ? U : Ye;
                        L && "function" == typeof L ? L(e) : (L = lt())(e)
                    }
                }
                ,
                F = window.history,
                W = function(e) {
                    var t = F[e];
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                        var o = new Event(e.toLowerCase());
                        return t.apply(F, n),
                        window.dispatchEvent(o),
                        t
                    }
                }
                ,
                window.history.pushState = W("pushState"),
                window.history.replaceState = W("replaceState"),
                window.addEventListener("pushstate", V, !1),
                window.addEventListener("replacestate", V, !1),
                window.addEventListener("popstate", V, !1),
                window.onbeforeunload = function() {
                    H = !0,
                    window.performanceResultDetail = it();
                    var e = q ? U : Qe;
                    L && "function" == typeof L ? L(e) : (L = lt())(e)
                }
                ,
                window.onpagehide = function() {
                    if (!H) {
                        var e = q ? U : et;
                        L && "function" == typeof L ? L(e) : (L = lt())(e)
                    }
                }
                ,
                window.currentPath = window.location.pathname
            }
        };
        var ft = function(t, n) {
            var r, o, i, a, c, u, s, d = S(t.tip, n) || "";
            if (F("click", W({
                tip: d,
                module_pos: H(t.modulePos),
                module_title: H(t.moduleTitle, ""),
                element_name: H(t.elementName, ""),
                element_title: H(t.elementTitle, ""),
                link: H(L(t.linkUrl || t.link), ""),
                asset_link: H(L(t.assetLink), ""),
                commodity_id: H(t.commodityId, ""),
                product_id: H(t.productId, ""),
                goods_id: H(t.goodsId, ""),
                tag: H(t.tag, ""),
                version: H(t.version, ""),
                exp_id: H(t.expId, ""),
                sub_module_pos: H(t.subModulePos),
                sub_module_name: H(t.subModuleName, ""),
                sub_module_title: H(t.subModuleTitle, ""),
                button_name: H(t.buttonName, ""),
                notify_me_click_date: H(t.notifyMeClickDate, ""),
                moe_enable: H(t.moeEnable, !1)
            }, t.extra)),
            window.dataLayer && t.isOpenGA) {
                var l = Object.assign({}, t, t.extra, {
                    event: "click"
                });
                ve(l, n)
            }
            return d && (t.linkUrl || t.link) && !t.isNotJump && (E(d),
            r = d,
            o = x(),
            i = h((r || "").split("."), 5),
            a = i[1],
            c = i[4],
            u = Z() ? JSON.parse(sessionStorage.getItem("DISABLED_B") || "[]").map((function(e) {
                return Number(e || 0)
            }
            )) : [],
            s = Z() ? JSON.parse(sessionStorage.getItem("ENABLED_E") || "        }
            )) : [],
            (!~u.indexOf(Number(a || 0)) || ~s.indexOf(Number(c || 0))) && o && e.set("_ot_view_tip", r || "", M(o))),
            d
        }
          , vt = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.beforeReport
              , o = n.afterReport;
            Array.from(document.querySelectorAll(e.targetSelector || "[data-ot-click]")).forEach((function(n) {
                var i = n && n.getAttribute("data-ot-tip") || ""
                  , a = n && n.getAttribute(e.targetDataAttr || "data-ot-click") || "{}"
                  , c = {};
                try {
                    c = JSON.parse(a)
                } catch (ce) {
                    z() && console.warn("JSON string [".concat(a, "] is invalid!"))
                }
                var u = "function" == typeof t ? t(c, n) : c
                  , s = !0;
                if ("function" == typeof r && (s = r(u, n)),
                s) {
                    var d = Object.assign(u, i ? {
                        tip: i
                    } : {});
                    n.addEventListener("click", (function(e) {
                        ft(d, e.currentTarget || void 0),
                        "function" == typeof o && o(u, n)
                    }
                    ))
                }
            }
            ))
        }
          , ht = function() {
            return ht = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            ht.apply(this, arguments)
        }
          , gt = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (ce) {
                        i(ce)
                    }
                }
                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (ce) {
                        i(ce)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , yt = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(c) {
                return function(u) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; i && (i = 0,
                        c[0] && (a = 0)),
                        a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        a.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(c);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                c = t.call(e, a)
                            } catch (ce) {
                                c = [6, ce],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, u])
                }
            }
        }
          , _t = function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , r = 0;
            if (n)
                return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
          , wt = function(e) {
            var t, n;
            return gt(this, void 0, void 0, (function() {
                var r, o, i, a, c, u, s, d, l, f, v, h, g, y, _, w, b, O, E, C, N, A;
                return yt(this, (function(R) {
                    switch (R.label) {
                    case 0:
                        if (!(r = S(e.tip || (null === (t = e.ecommerce) || void 0 === t ? void 0 : t.tip)) || "") || !Q())
                            return [2, ""];
                        if (o = {},
                        o = e.ecommerce ? e : {
                            event: e.event,
                            ecommerce: ht({
                                items: [ht({}, e)]
                            }, e)
                        },
                        i = Object.assign({}, o),
                        a = [i.ecommerce.commodityId || i.ecommerce.commodity_id, i.ecommerce.productId || i.ecommerce.product_id, i.ecommerce.items[0].itemId || i.ecommerce.items[0].item_id, i.ecommerce.spuId || i.ecommerce.spu_id        }
                        )),
                        c = oe(a),
                        !window.dataLayer)
                            return [3, 11];
                        if (u = x(),
                        s = I(r),
                        d = [],
                        !i.ecommerce || !i.ecommerce.items)
                            return [3, 8];
                        R.label = 1;
                    case 1:
                        R.trys.push([1, 6, 7, 8]),
                        l = _t(i.ecommerce.items),
                        f = l.next(),
                        R.label = 2;
                    case 2:
                        return f.done ? [3, 5] : (v = f.value,
                        h = v.itemName ? v.itemName.toLowerCase().includes("poco") ? "poco" : v.itemName.toLowerCase().includes("redmi") ? "redmi" : "mi" : "mi",
                        "select_item" === i.event && (g = J(i.ecommerce.pageType || !!document.body && document.body.getAttribute("data-ot-pageType") || void 0, ""),
                        y = J(v.itemListName, "") ? "".concat(g, ".").concat(J(v.itemListName, "")) : void 0,
                        _ = J(v.itemListId, "") ? "".concat(g, ".").concat(J(v.itemListId, "")) : "".concat(g, ".").concat(s.tipC).concat(s.tipC1 ? "|".concat(s.tipC1) : ""),
                        ie("_ot_item_list_name", J(y, "")),
                        ie("_ot_item_list_id", J(_, ""))),
                        [4, te(i.event, v, s, i)]);
                    case 3:
                        w = R.sent(),
                        E = ht({
                            price: m(u) ? Number(v.price || 0) : 0,
                            item_brand: J(v.itemBrand || v.item_brand || h, ""),
                            item_category: J(v.itemCategory || v.item_ategory, ""),
                            item_variant: J(v.itemVariant || v.item_variant, ""),
                            quantity: Number(v.quantity || 0),
                            item_category2: J(v.itemCategory2, ""),
                            item_id: J(c.itemId, "") ? "".concat(J(c.itemId, "")) : "undefined",
                            item_name: (null === (n = J(v.itemName || v.item_name, "")) || void 0 === n ? void 0 : n.replace(/<.*?>/g, " ").replace(/ +/g, " ")) || "undefined",
                            promotion_id: J(v.promotionId || v.promotion_id, ""),
                            promotion_name: J(v.promotionName || v.promotion_name, ""),
                            creative_name: J(v.creativeName || v.creative_name, ""),
                            creative_slot: J(v.creativeSlot || v.creative_slot, "")
                        }, w),
                        d.push(E),
                        R.label = 4;
                    case 4:
                        return f = l.next(),
                        [3, 2];
                    case 5:
                        return [3, 8];
                    case 6:
                        return b = R.sent(),
                        N = {
                            error: b
                        },
                        [3, 8];
                    case 7:
                        try {
                            f && !f.done && (A = l.return) && A.call(l)
                        } finally {
                            if (N)
                                throw N.error
                        }
                        return [7];
                    case 8:
                        return i.ecommerce.items && 0 !== i.ecommerce.items.length ? [3, 10] : [4, te(i.event, {}, s, i)];
                    case 9:
                        O = R.sent(),
                        E = ht({
                            price: 0,
                            item_brand: void 0,
                            item_category: void 0,
                            item_variant: void 0,
                            quantity: 0,
                            item_category2: void 0,
                            item_id: "undefined",
                            item_name: "undefined",
                            promotion_id: void 0,
                            promotion_name: void 0,
                            creative_name: void 0,
                            creative_slot: void 0
                        }, O),
                        d.push(E),
                        R.label = 10;
                    case 10:
                        C = i.ecommerce || {},
                        V({
                            event: i.event,
                            ecommerce: ht({
                                currency: p(u).currencyCode,
                                alg: J(C.alg, ""),
                                alg_ver: J(C.algVer, ""),
                                alg_group: J(C.algGroup, ""),
                                transation_id: J(C.transationId, ""),
                                status: J(C.status, ""),
                                payment_type: J(C.paymentType, ""),
                                tag: J(C.tag, ""),
                                stock: J(C.stock, ""),
                                shipping_tier: J(C.shippingTier, ""),
                                search_result: J(C.searchResult || C.result, ""),
                                search_word: J(C.searchWord, ""),
                                search_type: J(C.searchType, ""),
                                shipping: m(u) ? Number(C.shipping || 0) : 0,
                                tax: m(u) ? Number(C.tax || 0) : 0,
                                link: J(L(C.linkUrl || C.link), ""),
                                tr_promo_code: J(C.trPromoCode, ""),
                                tr_promo_price: m(u) ? Number(C.trPromoPrice || 0) : 0,
                                value: m(u) ? Number(C.value || 0) : 0,
                                page_referrer: k(u) || void 0,
                                page_version: $() || void 0,
                                version: J(C.version, ""),
                                spu_id: J(c.spuId, "") ? "".concat(J(c.spuId, "")) : void 0,
                                product_id: J(c.productId, "") ? "".concat(J(c.productId, "")) : void 0,
                                commodity_id: J(c.commodityId, "") ? "".concat(J(c.commodityId, "")) : void 0,
                                tip: r,
                                ref_tip: T() || void 0,
                                element_name: J(C.elementName, ""),
                                element_title: J(C.elementTitle, ""),
                                promo_code: J(C.promoCode || C.promo_code, ""),
                                promo_price: m(u) ? Number(C.promoPrice || 0) : 0,
                                page_type: J(C.pageType || !!document.body && document.body.getAttribute("data-ot-pageType") || void 0, ""),
                                button_name: J(C.buttonName, ""),
                                image_url: J(C.imageUrl, ""),
                                category_name: J(C.categoryName, ""),
                                category_id: J(C.categoryId, ""),
                                parent_category_id: J(C.parentCategoryId, ""),
                                parent_category_name: J(C.parentCategoryName, ""),
                                source: J(C.source, ""),
                                revenue: J(C.revenue, "") ? "".concat(J(C.revenue, "")) : void 0,
                                the_final_amount_user_pays: J(C.ThefinalAmountUserPays, ""),
                                discount_vaue: J(C.discountVaue, "") ? "".concat(J(C.discountVaue, "")) : void 0,
                                order_pin_code: J(C.orderPinCode, "") ? "".concat(J(C.orderPinCode, "")) : void 0,
                                number_of_search_resuts: m(u) ? Number(C.numberOfSearchResuts || 0) : 0,
                                purchase_amount: J(C.purchaseAmount, ""),
                                items: d
                            }, s),
                            moe_enable: J(C.moeEnable, "")
                        }, !0),
                        R.label = 11;
                    case 11:
                        return [2, r]
                    }
                }
                ))
            }
            ))
        }
          , bt = function() {
            return bt = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            bt.apply(this, arguments)
        }
          , St = function(e, t) {
            var n = S(e.tip, t) || "";
            if (F("expose", W({
                tip: n,
                module_pos: H(e.modulePos),
                module_title: H(e.moduleTitle, ""),
                element_name: H(e.elementName, ""),
                element_title: H(e.elementTitle, ""),
                link: H(L(e.linkUrl || e.link), ""),
                asset_link: H(L(e.assetLink), ""),
                commodity_id: H(e.commodityId, ""),
                product_id: H(e.productId, ""),
                goods_id: H(e.goodsId, ""),
                tag: H(e.tag, ""),
                version: H(e.version, ""),
                exp_id: H(e.expId, ""),
                sub_module_pos: H(e.subModulePos),
                sub_module_name: H(e.subModuleName, ""),
                sub_module_title: H(e.subModuleTitle, ""),
                button_name: H(e.buttonName, "")
            }, e.extra)),
            window.dataLayer && e.isOpenGA) {
                var r = Object.assign({}, e, e.extra, {
                    event: "expose"
                });
                ve(r, t)
            }
            return n
        }
          , It = function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.beforeReport
              , o = n.afterReport
              , i = Array.from((e.targetNodeWrapper || document).querySelectorAll(e.targetNodeSelector || "[data-ot-expose]"));
            if ("function" == typeof IntersectionObserver) {
                var a = {
                    root: e.targetRootSelector && document.querySelector(e.targetRootSelector) || null,
                    rootMargin: e.targetRootMargin || "0px",
                    threshold: void 0 === e.exposeThreshold ? .3 : e.exposeThreshold
                }
                  , c = new IntersectionObserver((function(n) {
                    n.forEach((function(n) {
                        if (!(n.intersectionRatio <= 0) && n.isIntersecting) {
                            var i = n.target || {}
                              , a = i && i.getAttribute("data-ot-tip") || ""
                              , u = i && i.getAttribute(e.targetNodeDataAttr || "data-ot-expose") || "{}"
                              , s = {};
                            try {
                                s = JSON.parse(u)
                            } catch (ce) {
                                z() && console.warn("JSON string [".concat(u, "] is invalid!"))
                            }
                            var d = "function" == typeof t ? t(s, i) : s
                              , l = !0;
                            if ("function" == typeof r && (l = r(d, i)),
                            l) {
                                if (St(Object.assign({}, d, a ? {
                                    tip: a
                                } : {}, {
                                    isOpenGA: !1
                                }), i),
                                window.dataLayer) {
                                    var p = Object.assign(d, a ? {
                                        tip: a
                                    } : {});
                                    if (d.isOpenGA)
                                        if ("ecommerce" === p.eventType) {
                                            var m = {
                                                event: p.event,
                                                ecommerce: p.ecommerce
                                            };
                                            p.ecommerce || (m = {
                                                event: p.event,
                                                ecommerce: bt({
                                                    items: [bt({}, p)]
                                                }, p)
                                            }),
                                            wt(m, i)
                                        } else
                                            p.event = p.event || "expose",
                                            ve(p, i)
                                }
                                "function" == typeof o && o(d, i),
                                !e.isInfinite && c.unobserve(i)
                            }
                        }
                    }
                    ))
                }
                ),a);
                return i.forEach((function(e) {
                    c.observe(e)
                }
                )),
                c
            }
            console.warn("Loading polyfill for IntersectionObserver")
        }
          , Ot = function(e) {
            var t = S(e.tip) || "";
            return F("slide", W({
                tip: t,
                link: H(L(e.linkUrl || e.link), ""),
                asset_link: H(L(e.assetLink), ""),
                asset_id: H(e.assetId, ""),
                commodity_id: H(e.commodityId, ""),
                product_id: H(e.productId, ""),
                goods_id: H(e.goodsId, ""),
                tag: H(e.tag, ""),
                alg: H(e.alg, ""),
                alg_ver: H(e.algVer, ""),
                alg_group: H(e.algGroup, "")
            }, e.extra)),
            t
        }
          , Et = function(e) {
            var t = S(e.tip) || "";
            return F("add_cart", W({
                tip: t,
                commodity_id: H(e.commodityId, ""),
                product_id: H(e.productId, ""),
                goods_id: H(e.goodsId, ""),
                tag: H(e.tag, ""),
                goods_count: H(e.goodsCount, 1),
                goods_amount: H(e.goodsAmount, 0),
                parent_goods_id: H(e.parentGoodsId, 0),
                bundle_id: H(e.bundleId, 0)
            }, e.extra)),
            t
        }
               }
          , xt = function(e, t) {
            var n = S(t.tip) || ""
              , r = {
                tip: n
            };
            Object.keys(t).forEach((function(e) {
                r[e.replace(/([A-Z])/g, "_$1").toLowerCase()] = H(t[e])
            }
            )),
            r.tip = n,
            F(e, r)
        }
          , Ct = function(t) {
            if (Q() && window.pubsub) {
                var n = x()
                  , r = C()
                  , o = b(n)
                  , i = window.navigator.userAgent
                  , a = i.match(/Android.*; ?(.*(?= Build))/)
                  , c = i.match(/iPhone OS .*?(?= )/)
                  , u = a && a[1]
                  , s = c && c[0]
                  , d = {
                    fr: "EU",
                    es: "EU",
                    it: "EU",
                    uk: "EU",
                    nl: "EU",
                    pl: "EU",
                    de: "EU",
                    in: "IN",
                    ru: "RU",
                    default: "SG"
                }
                  , l = {
                    B: {
                        instance_id: "1" === e.get("ISIOS") ? e.get("DEVICEID") || void 0 : "1" === e.get("ISAPP") ? e.get("RECOMMENDID") || e.get("DEVICEID") || void 0 : o,
                        item_id: t.itemId,
                        Device: void 0,
                        "Device model": i.includes("Android") ? u : i.includes("iPhone") ? s : void 0,
                        app_platform: r || void 0,
                        event_name: t.eventName,
                        page_type: t.pageType
                    },
                    attributes: {
                        region: x().toUpperCase(),
                        area: d[x()] || d.default
                    }
                };
                !function(t) {
                    var n = j()
                      , r = n.isUseMiCommand
                      , o = n.isOtherApp
                      , i = n.isPocoApp
                      , a = "xiaomi://MiEventTrackCommand?action=logPubSub&params=" + encodeURIComponent(t);
                    !o && r && !i && "1" === e.get("ISIOS") && Number(e.get("IOSVERSION")) >= 40802 ? window.location.assign(a) : !o && !i && "1" === e.get("ISAPP") && Number(e.get("APPVERSION")) >= 40800 ? prompt(a) : null === window || void 0 === window || window.pubsub("pub", t)
                }(JSON.stringify(l))
            }
        };
        const Nt = function() {
            var e = window.xmot && window.xmot.q;
            window.xmot = At,
            e instanceof Array && !!e.length && e        }
            ));
            return At
        }();
        function At(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = {
                init: mt,
                view: me,
                click: ft,
                clickWith: vt,
                expose: St,
                exposeWith: It,
                slide: Ot,
                addCart: Et,
                login: he,
                logout: ge,
                exit: Tt,
                performance: lt,
                default: xt,
                custom: ve,
                ecommerce: wt,
                getSettings: Y,
                pubSubPush: Ct
            };
            return (r[e] || r.default).apply(void 0, t)
        }
    }
    )(),
    r = r.default
}
)()));
