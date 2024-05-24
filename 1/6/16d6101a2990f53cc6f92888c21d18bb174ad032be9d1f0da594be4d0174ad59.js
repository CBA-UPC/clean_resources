if (!iBeatPgTrend) {
  function ib_loadHud() {
    if (
      (console.log('hud loaded'), !window.document.getElementById('ib_hud'))
    ) {
      var e = document.createElement('script');
      (e.type = 'text/javascript'),
        (e.src =
          'https://agi-static.indiatimes.com/cms-common/ibeat-hud.min.js'),
        document.head.appendChild(e);
    }
  }
  async function ib_posTrack(e) {
    let t = iBeatPgTrend.getXPath(e.target),
      i = e.target;
    if (t.includes('/a')) {
      if ('A' != e.target.tagName) {
        for (; 'A' != i.tagName; ) i = i.parentNode;
        t = iBeatPgTrend.getXPath(i);
      }
      let n = 'ib_pos',
        o = `${t}::${i.href}::${window.location.href}`,
        a = 'ib_pos_exp',
        r = localStorage.getItem(n);
      if (null != r && r.includes(o))
        return void ib_saveToStorage(a, new Date().getTime() + 6e4);
      ib_saveToStorage(n, (o = null != r ? `${r},${o}` : `${o}`)),
        ib_saveToStorage(a, new Date().getTime() + 6e4);
    }
  }
  async function ib_cleanUpStorage() {
    let e = localStorage.getItem('ib_pos');
    if (null != e) {
      let t = +localStorage.getItem('ib_pos_exp');
      null == t || new Date(t).getTime() < new Date().getTime()
        ? (localStorage.removeItem('ib_pos'),
          localStorage.removeItem('ib_pos_exp'))
        : e.length > 2e3 &&
          (localStorage.removeItem('ib_pos'),
          localStorage.removeItem('ib_pos_exp'));
    }
  }
    function ib_calcPageTimeSpent() {
    let e = 0;
    if (void 0 !== iBeatPgTrend.eventArray) {
      if (1 == iBeatPgTrend.eventArray.length) return 5e3;
      for (let t = 0; t < iBeatPgTrend.eventArray.length - 1; t++) {
        let i = iBeatPgTrend.eventArray[t];
        iBeatPgTrend.eventArray[t + 1] - i <= 1e4
          ? (e += iBeatPgTrend.eventArray[t + 1] - i)
          : iBeatPgTrend.eventArray[t + 1] - i > 1e4 && (e += 1e4);
      }
    }
    return e;
  }
  !(function () {
    var e,
      t,
      i,
      n = 0,
      o = [];
    for (t = 0; t < 256; t++) o[t] = (t + 256).toString(16).substr(1);
    function a() {
      var t =
        (16,
        (!e || n + 16 > r.BUFFER_SIZE) &&
          ((n = 0), (e = r.randomBytes(r.BUFFER_SIZE))),
        e.slice(n, (n += 16)));
      return (t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128), t;
    }
        (r.BUFFER_SIZE = 4096),
      (r.bin = a),
      (r.clearBuffer = ,
      (r.test = ,
      'undefined' != typeof crypto
        ? (i = crypto)
        : 'undefined' != typeof window &&
          void 0 !== window.msCrypto &&
          (i = window.msCrypto),
      'undefined' != typeof module && 'function' == typeof require
        ? ((i = i || require('crypto')), (module.exports = r))
        : 'undefined' != typeof window && (window.uuid = r),
      (r.randomBytes = (function () {
        if (i) {
          if (i.randomBytes) return i.randomBytes;
          if (i.getRandomValues)
            return 
        }
        return 
      })());
  })(),
    'true' === localStorage.getItem('ibeat_hud') && ib_loadHud(),
    (ib_addDefaultListener = ,
    (ib_addbeforeUnloadEvent = function () {
      window.addEventListener('beforeunload', () => {
        let e = new Date().getTime();
        (iBeatPgTrend.lastEventTime = e),
          iBeatPgTrend.eventArray.push(e),
          iBeatPgTrend.logibevent(1, 'px');
      });
    }),
    (ib_eventReceived = function (e) {
      let t = new Date().getTime();
      (iBeatPgTrend.lastEventTime = t),
        (iBeatPgTrend.eventArray[iBeatPgTrend.eventArray.length - 1] <
          t - 2e3 ||
          0 == iBeatPgTrend.eventArray.length) &&
          iBeatPgTrend.eventArray.push(t),
        ('click' !== e.type && 'contextmenu' !== e.type) || ib_posTrack(e);
    });
  var na = [
    ib_addDefaultListener,
    ib_addbeforeUnloadEvent,
    ib_calcPageTimeSpent,
  ];
  na[1](),
    na[0]('click'),
    na[0]('focus'),
    na[0]('keydown'),
    na[0]('mousedown'),
    na[0]('scroll'),
    na[0]('mousemove'),
    na[0]('contextmenu');
  var iBeatPgTrend = {
    version: 1.1,
    eventArray: [],
    url: '',
    sessionId: void 0,
    visitorType: 4,
    agentType: '',
    referer: '',
    action: '1',
    lastEventTime: new Date().getTime(),
    lastHitTime: '',
    trackingEnabled: !1,
    totalTimeSpent: 0,
    pageOpenTime: new Date().getTime(),
    totalActiveTime: 0,
    loggedin: 0,
    sCookie: !0,
    obj: void 0,
    orijHisF: void 0,
    orijRHisF: void 0,
    aTags: [],
    pathName: '',
    xPath: void 0,
    init: function (e) {},
    initialize: async function (e, t, i, n) {
      if (
        (ib_cleanUpStorage(),
        null != window._ibeat_track &&
          ((this.obj = window._ibeat_track),
          null != this.obj.sCookie && (this.sCookie = this.obj.sCookie)),
        null != e &&
          null == this.obj &&
          ((this.obj = {}),
          null != e.sCookie && 0 == e.sCookie && (this.sCookie = !1),
          null != e.contentType && (this.obj.ct = e.contentType),
          null != e.pubT
            ? (this.obj.pubt = e.pubT)
            : null != e.pubt
            ? (this.obj.pubt = e.pubt)
            : null != e.articledt && (this.obj.pubt = e.articledt),
          null != e.author && (this.obj.au = e.author),
          null != e.channel && (this.obj.ag = e.channel),
          null != e.articleId && (this.obj.aid = e.articleId),
          null != e.cat && (this.obj.cat = e.cat),
          null != e.catIds && (this.obj.ctIds = e.catIds)),
        (i && this.pathName == window.location.pathname) ||
          ((this.pageOpenTime = new Date().getTime()),
          (this.totalActiveTime = 0),
          (this.eventArray = []),
          (this.totalTimeSpent = 0)),
        i && this.pathName != window.location.pathname
          ? ((this.referer = this.url), (n = 'po'))
          : i || (this.referer = getValidatedValue(document.referrer, '')),
        (this.pathName = window.location.pathname),
        (this.url = window.location.href),
        void 0 === this.sessionId)
      ) {
        var o = this.readCookie('_iibeat_session', this.sCookie);
        o
          ? (this.sessionId = o)
          : ((this.sessionId = this.guid()),
            this.sCookie &&
              this.createCookie(
                '_iibeat_session',
                this.sessionId,
                262800,
                '/',
              ));
      }
      this.setVisitorType(),
        this.readCookie('ssoid', !0) && (this.loggedin = 1),
        (this.agentType = navigator.userAgent),
        0 != this.validate() &&
          ((this.logServer = 'api.ibeat-analytics.com'),
          t && this.logibevent(this.action, n));
    },
    y: setInterval( 15e3),
    x: setTimeout(() => {
      clearInterval(iBeatPgTrend.y),
        window.removeEventListener('click', eventReceived),
        window.removeEventListener('focus', eventReceived),
        window.removeEventListener('mousedown', eventReceived),
        window.removeEventListener('scroll', eventReceived),
        window.removeEventListener('mousemove', eventReceived),
        window.removeEventListener('keydown', eventReceived);
    }, 72e5),
    activityOnPage: function () {
      (state = new Date().getTime()),
        this.lastEventTime < state && this.lastEventTime >= state - 21e3
          ? this.logibevent(this.action, 'ue')
          : this.lastHitTime < new Date().getTime() - 3e5 &&
            this.logibevent(this.action, 'ue');
    },
    logaction: 
    setVisitorType: function () {
      let e = this.readCookie('_iibeat_vt', this.sCookie);
      if (e) {
        let t = new Date();
        t.setHours(0, 0, 0, 0);
        let i = 1e4 * t.getFullYear() + 100 * t.getMonth() + t.getDate(),
          n = new Date();
        n.setHours(0, 0, 0, 0), n.setDate(n.getDate() - 16);
        let o = 1e4 * n.getFullYear() + 100 * n.getMonth() + n.getDate();
        this.visitorType = 2;
        let a = e.split(',');
        e = '';
        let r = !1,
          s = 0;
        a.forEach((t) => {
          let n = Number(t);
          r || n !== i || (r = !0),
            n > o && (s++, (e = '' == e ? n : e + ',' + n));
        }),
          r
            ? this.createCookie('_iibeat_vt', e, 43200, '/')
            : this.createCookie('_iibeat_vt', e + ',' + i, 43200, '/'),
          s > 8 && (this.visitorType = 3);
      } else if (this.sCookie) {
        let e = new Date();
        e.setHours(0, 0, 0, 0);
        let t = 1e4 * e.getFullYear() + 100 * e.getMonth() + e.getDate();
        this.createCookie('_iibeat_vt', t, 43200, '/'), (this.visitorType = 1);
      }
    },
    logibevent: function (e, t) {
      null == this.obj &&
        null != window._ibeat_track &&
        ((this.obj = window._ibeat_track),
        iBeatPgTrend.initialize(void 0, !0, !1, t)),
        (this.url = window.location.href),
        (this.action = e);
      var i = 'https://' + this.logServer + '/ping?';
      (i += '&url=' + encodeURIComponent(this.url)),
        (i += '&et=' + encodeURIComponent(t)),
        (i += '&sid=' + encodeURIComponent(this.sessionId)),
        (i += '&ua=' + encodeURIComponent(this.agentType)),
        (i += '&ln=' + encodeURIComponent(this.loggedin)),
        (i += '&ref=' + encodeURIComponent(this.referer)),
        (i += '&ut=' + encodeURIComponent(this.visitorType)),
        (i += '&pot=' + encodeURIComponent(this.pageOpenTime)),
        'po' == t
          ? iBeatPgTrend.eventArray.push(new Date().getTime())
          : 'px' == t &&
            (i += '&pct=' + encodeURIComponent(new Date().getTime())),
        (totalTimeSpentNow = na[2]()),
        (i +=
          '&at=' +
          encodeURIComponent(totalTimeSpentNow - iBeatPgTrend.totalTimeSpent)),
        (totalActiveTimeNow = new Date().getTime() - iBeatPgTrend.pageOpenTime),
        (i +=
          '&tt=' +
          encodeURIComponent(
            totalActiveTimeNow - iBeatPgTrend.totalActiveTime,
          )),
        null != this.obj &&
          (i += '&obj=' + encodeURIComponent(JSON.stringify(this.obj))),
        (iBeatPgTrend.totalActiveTime = totalActiveTimeNow),
        (iBeatPgTrend.totalTimeSpent = totalTimeSpentNow),
        (iBeatPgTrend.lastHitTime = new Date().getTime()),
        null != iBeatPgTrend.referer &&
          '' != iBeatPgTrend.referer &&
          null != localStorage.getItem('ib_pos') &&
          null == iBeatPgTrend.xPath &&
          (iBeatPgTrend.xPath = localStorage
            .getItem('ib_pos')
            .includes(window.location.href)
            ? localStorage.getItem('ib_pos')
            : ''),
        null != iBeatPgTrend.xPath &&
          '' != iBeatPgTrend.xPath &&
          (i += '&xpt=' + encodeURIComponent(iBeatPgTrend.xPath)),
        this.sendRequest(i);
    },
    sendRequest: 
    guid: 
    createCookie: function (e, t, i, n) {
      n || (n = '/');
      var o = '';
      if (i) {
        var a = new Date();
        a.setTime(a.getTime() + 60 * i * 1e3),
          (o = ';expires=' + a.toGMTString());
      }
      document.cookie = e + '=' + t + o + ';path=' + n;
    },
    readCookie: function (e, t) {
      if (!t) return null;
      for (
        var i = e + '=', n = document.cookie.split(';'), o = 0;
        o < n.length;
        o++
      ) {
        for (var a = n[o]; ' ' == a.charAt(0); ) a = a.substring(1, a.length);
        if (0 == a.indexOf(i)) {
          var r = a.substring(e.length + 1, a.length);
          return (
            '_iibeat_session' === e && this.createCookie(e, r, 262800, '/'), r
          );
        }
      }
      return null;
    },
    validate: 
    getXPath: function (e) {
      if (!e) return null;
      if (e.id) return `//*[@id=${e.id}]`;
      if ('BODY' === e.tagName) return '/html/body';
      {
        const t = Array.from(e.parentNode.childNodes).filter(
            
          ),
          i = t.indexOf(e);
        return (
          iBeatPgTrend.getXPath(e.parentNode) +
          '/' +
          e.tagName.toLowerCase() +
          (t.length > 1 ? `[${i + 1}]` : '')
        );
      }
    },
  };
      (iBeatPgTrend.orijHisF = window.history.pushState),
    (function (e) {
      var t = iBeatPgTrend.orijHisF;
      e.pushState = function (i) {
        return (
          'function' == typeof e.onpushstate && e.onpushstate({ state: i }),
          t.apply(e, arguments),
          iBeatPgTrend.initialize(void 0, !0, !0, 'ue')
        );
      };
    })(window.history),
    (iBeatPgTrend.orijRHisF = window.history.replaceState),
    (function (e) {
      var t = iBeatPgTrend.orijRHisF;
      e.replaceState = function (i) {
        return (
          'function' == typeof e.onreplacestate &&
            e.onreplacestate({ state: i }),
          t.apply(e, arguments),
          iBeatPgTrend.initialize(void 0, !0, !0, 'ue')
        );
      };
    })(window.history),
    iBeatPgTrend.initialize(void 0, !0, !1, 'po');
}
