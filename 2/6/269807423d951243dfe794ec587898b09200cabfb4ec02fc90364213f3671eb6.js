/*! quc@6.8.4 2020-02-12T14:06:02+08:00 */
!(([
  function (e, t, n) {
    ;(function (e) {
      /*! DISABLE_QSTATIC_MIN */
      n(158),
        n(163),
        n(165),
        n(166),
        n(167),
        n(168),
        n(169),
        n(170),
        n(171),
        n(172),
        n(176),
        n(177),
        n(178),
        n(179),
        n(180),
        n(181),
        n(182),
        n(183),
        n(184),
        n(185),
        n(186),
        n(187),
        n(188),
        n(189),
        n(190),
        n(199),
        n(200),
        n(202),
        n(205),
        n(206),
        n(208),
        n(209),
        n(211),
        n(212),
        n(214),
        n(215),
        n(217),
        n(218),
        n(220),
        n(215),
        n(217),
        n(221),
        n(223),
        n(224),
        n(226),
        n(227),
        n(229),
        n(230),
        n(231),
        n(232),
        n(233),
        (myQHPass.showControlPanel = function () {
          var t = new myQHPass.utils.Panel({ size: 'large', type: 'message' }),
            i =
              'showControlPanel setNickname setSecEmail setUsername signIn signUp setEmail fillProfile bindMobile modifyPassword',
            r = n(234),
            o = e.template(r),
            a = o({ methods: e.split(i, ' ') })
          t.setTitle('\u63a7\u5236\u9762\u677f').setContent($(a)).show(),
            t.$el.on('click', '.quc-button', function () {
              t.hide()
            })
        })
    }.call(t, n(2)))
  },
  ,
  function (e, t, n) {
    e.exports = n(3)
  },
  function (e, t, n) {
    ;(function (t) {
      function t(e) {
        return this instanceof t
          ? ((this.__value = e), void (this.__chain = !1))
          : new t(e)
      }
      var i = n(4)
      ;(e.exports = i.extend(t, i)),
        n(6)(t),
        n(7)(t),
        n(8)(t),
        n(9)(t),
        n(10)(t),
        n(12)(t),
        n(13)(t),
        t.mixin(t, t)
    }.call(t, n(2)))
  },
  function (e, t, n) {
    function i(e) {
      if (null != e) return e.length
    }
    function r(e, t) {
      var n = i(e)
      if (n && d.fn(t)) for (var r = 0; r < n && !1 !== t(e[r], r, e); r++);
      return e
    }
    function o(e, t) {
      var n = -1
      return (
        r(e, ,
        n
      )
    }
        function c(e) {
      if (e) {
        var t = h.call(arguments, 1)
        r(t, function (t) {
          f(t, 
        })
      }
      return e
    }
        function u(e, t) {
      return d.string(e)
        ? e.indexOf(t)
        : o(e, 
    }
    function l(e, t, n) {
      return (
        r(e, ,
        n
      )
    }
    function f(e, t) {
      if (e) for (var n in e) if (d.owns(e, n) && !1 === t(e[n], n, e)) break
      return e
    }
        var d = n(5),
      h = [].slice,
      m = t
    ;(m.is = d),
      (m.extend = m.assign = c),
      (m.each = r),
      (m.map = function (e, t) {
        var n = []
        return (
          r(e, function (e, i, r) {
            n[i] = t(e, i, r)
          }),
          n
        )
      }),
      (m.filter = function (e, t) {
        var n = []
        return (
          r(e, function (e, i, r) {
            var o = t(e, i, r)
            o && n.push(e)
          }),
          n
        )
      }),
      (m.some = function (e, t) {
        return -1 != o(e, t)
      }),
      (m.every = function (e, t) {
        return -1 == o(e, s(t))
      }),
      (m.reduce = l),
      (m.findIndex = o),
      (m.find = function (e, t) {
        var n = m.findIndex(e, t)
        if (-1 != n) return e[n]
      }),
      (m.indexOf = u),
      (m.includes = function (e, t) {
        return -1 != u(e, t)
      }),
      (m.toArray = a),
      (m.slice = function (e, t, n) {
        var r = [],
          o = i(e)
        return (
          o >= 0 &&
            ((t = t || 0),
            0 !== n && (n = n || o),
            d.fn(e.slice) || (e = a(e)),
            (r = e.slice(t, n))),
          r
        )
      }),
      (m.negate = s),
      (m.forIn = f),
      (m.keys = p)
    var g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    ;(m.trim = ,
      (m.noop = function () {}),
      (m.len = i)
  },
  function (e, t) {
    ;(function (e) {
      function n(e) {
        var t = a.toString.call(e)
        return t.substring(8, t.length - 1).toLowerCase()
      }
                  var o = t,
        a = Object.prototype
      e = e || {}
      var c = e.navigator
      ;(o.browser = function () {
        return !(o.wechatApp() || !c || e.window != e)
      }),
        (o.h5 = function () {
          return !(!o.browser() || !c.geolocation)
        }),
        (o.mobile = function () {
          return !(!o.browser() || !/mobile/i.test(c.userAgent))
        }),
        (o.wechatApp = function () {
          return !('object' != typeof wx || !wx || !o.fn(wx.createVideoContext))
        }),
        (o._class = n),
        (o._type = i),
        (o.owns = r),
        (o.nan = ,
        (o.bool = function (e) {
          return 'boolean' == n(e)
        }),
        (o.infinite = function (e) {
          return e == 1 / 0 || e == -(1 / 0)
        }),
        (o.number = function (e) {
          return !isNaN(e) && 'number' == n(e)
        }),
        (o.iod = function (e) {
          return !(!o.number(e) || o.infinite(e))
        }),
        (o.decimal = function (e) {
          return !!o.iod(e) && 0 != e % 1
        }),
        (o.integer = function (e) {
          return !!o.iod(e) && 0 == e % 1
        }),
        (o.oof = function (e) {
          if (e) {
            var t = i(e)
            return 'object' == t || 'function' == t
          }
          return !1
        }),
        (o.object = function (e) {
          return o.oof(e) && 'function' != n(e)
        }),
        (o.hash = o.plainObject = function (e) {
          return !(!e || 'object' != n(e)) && !e.nodeType && !e.setInterval
        }),
        (o.undef = function (e) {
          return 'undefined' == i(e)
        }),
        (o.fn = function (e) {
          return 'function' == n(e)
        }),
        (o.string = function (e) {
          return 'string' == n(e)
        }),
        (o.nos = ,
        (o.array = function (e) {
          return 'array' == n(e)
        }),
        (o.arraylike = function (e) {
          if (!o.window(e) && o.object(e)) {
            var t = e.length
            if (o.integer(t) && t >= 0) return !0
          }
          return !1
        }),
        (o.window = ,
        (o.empty = function (e) {
          if (o.string(e) || o.arraylike(e)) return 0 === e.length
          if (o.hash(e)) for (var t in e) if (r(e, t)) return !1
          return !0
        }),
        (o.element = ,
        (o.regexp = 
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.isString = t.string),
        (e.isArray = t.array),
        (e.isArrayLike = t.arraylike),
        (e.isBoolean = t.bool),
        (e.isElement = t.element),
        (e.isEmpty = t.empty),
        (e.isFunction = t.fn),
        (e.isInteger = t.integer),
        (e.isNaN = t.nan),
        (e.isNumber = t.number),
        (e.isObject = t.object),
        (e.isPlainObject = t.plainObject),
        (e.isRegExp = t.regexp),
        (e.isString = t.string),
        (e.isUndefined = t.undef)
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.now = function () {
        return +new Date()
      }),
        (e.constant = function (e) {
          return function () {
            return e
          }
        }),
        (e.identity = function (e) {
          return e
        }),
        (e.random = function (e, t) {
          return e + Math.floor(Math.random() * (t - e + 1))
        }),
        (e.mixin = function (n, i, r) {
          var o = e.functions(i)
          if (n)
            if (t.fn(n)) {
              r = r || {}
              var a = n.prototype
              e.each(o, function (e) {
                var t = i[e]
                a[e] = function () {
                  var e = this,
                    n = [e.__value]
                  n.push.apply(n, arguments)
                  var i = t.apply(e, n)
                  return e.__chain ? ((e.__value = i), e) : i
                }
              })
            } else
              e.each(o, function (e) {
                n[e] = i[e]
              })
          return n
        }),
        (e.chain = function (t) {
          var n = e(t)
          return (n.__chain = !0), n
        }),
        (e.value = function () {
          return (this.__chain = !1), this.__value
        })
      var n = 0
      e.uniqueId = function (t) {
        return n++, e.toString(t) + n
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, n) {
        var i = e.size(n)
        return t < 0 && (t += i), t < 0 && (t = 0), t > i && (t = i), t || 0
      }
      function n(t, n) {
        var i = [],
          r = e.len(n)
        if (r)
          for (
            n = n.sort(function (e, t) {
              return e - t
            });
            r--;

          ) {
            var o = n[r]
            i.push(a.splice.call(t, o, 1)[0])
          }
        return i.reverse(), i
      }
      var i = (e.forEach = e.each),
        r = e.includes,
        o = e.is,
        a = Array.prototype
      ;(e.reject = function (t, n) {
        return e.filter(t, function (e, t, i) {
          return !n(e, t, i)
        })
      }),
        (e.without = function (t) {
          var n = e.slice(arguments, 1)
          return e.difference(t, n)
        }),
        (e.difference = function (t, n) {
          var i = []
          return (
            e.each(t, function (e) {
              r(n, e) || i.push(e)
            }),
            i
          )
        }),
        (e.pluck = function (t, n) {
          return e.map(t, function (e) {
            if (e) return e[n]
          })
        }),
        (e.nth = function (n, i) {
          ;(i = t(i, n)), (i = i || 0)
          var r
          return (r = e.isString(n) ? n.charAt(i) : n[i])
        }),
        (e.first = function (t) {
          if (t) return e.nth(t, 0)
        }),
        (e.last = function (t) {
          var n = e.len(t)
          if (n) return e.nth(t, n - 1)
        }),
        (e.asyncMap = function (e, t, n) {
          var r,
            o,
            a = [],
            c = 0
          i(e, function (i, s) {
            ;(o = !0),
              t(i, function (t, i) {
                if (!r) {
                  if ((c++, t)) return (r = !0), n(t)
                  ;(a[s] = i), c == e.length && ((r = !0), n(null, a))
                }
              })
          }),
            o || n(null)
        }),
        (e.uniq = function (t) {
          return e.uniqBy(t)
        }),
        (e.uniqBy = function (e, t) {
          var n = [],
            a = []
          return (
            o.fn(t) || (t = null),
            i(e, function (e) {
              var i = e
              t && (i = t(e)), r(a, i) || (a.push(i), n.push(e))
            }),
            n
          )
        }),
        (e.flatten = function (e) {
          var t = []
          return (
            i(e, function (e) {
              o.arraylike(e)
                ? i(e, function (e) {
                    t.push(e)
                  })
                : t.push(e)
            }),
            t
          )
        }),
        (e.union = function () {
          return e.uniq(e.flatten(arguments))
        }),
        (e.sampleSize = function (t, n) {
          for (
            var i = e.toArray(t), r = i.length, o = Math.min(n || 1, r), a = 0;
            a < r;
            a++
          ) {
            var c = e.random(a, r - 1),
              s = i[c]
            ;(i[c] = i[a]), (i[a] = s)
          }
          return (i.length = o), i
        }),
        (e.sample = function (t) {
          return e.first(e.sampleSize(t, 1))
        }),
        (e.shuffle = function (t) {
          return e.sampleSize(t, 1 / 0)
        }),
        (e.compact = function (t) {
          return e.filter(t, e.identity)
        }),
        (e.rest = function (t) {
          return e.slice(t, 1)
        }),
        (e.invoke = function () {
          var t = arguments,
            n = t[0],
            i = t[1],
            r = o.fn(i)
          return (
            (t = e.slice(t, 2)),
            e.map(n, function (e) {
              if (r) return i.apply(e, t)
              if (null != e) {
                var n = e[i]
                if (o.fn(n)) return n.apply(e, t)
              }
            })
          )
        }),
        (e.partition = function (t, n) {
          var i = e.groupBy(t, function (e, t, i) {
            var r = n(e, t, i)
            return r ? 1 : 2
          })
          return [i[1] || [], i[2] || []]
        }),
        (e.groupBy = function (t, n) {
          var i = {}
          return (
            e.each(t, function (e, t, r) {
              var o = n(e, t, r)
              ;(i[o] = i[o] || []), i[o].push(e)
            }),
            i
          )
        }),
        (e.range = function () {
          var t = arguments
          if (t.length < 2) return e.range(t[1], t[0])
          var n = t[0] || 0,
            i = t[1] || 0,
            r = t[2]
          o.number(r) || (r = 1)
          var a = i - n
          0 != r && (a /= r)
          for (var c = [], s = n, u = 0; u < a; u++) c.push(s), (s += r)
          return c
        }),
        (e.pullAt = function (t) {
          var i = e.slice(arguments, 1)
          return n(t, i)
        }),
        (e.remove = function (t, i) {
          for (var r = e.len(t) || 0, o = []; r--; ) i(t[r], r, t) && o.push(r)
          return n(t, o)
        }),
        (e.fill = function (n, i, r, o) {
          var a = e.size(n)
          ;(r = t(r, n) || 0), (o = t(o, n) || a)
          for (var c = r; c < o; c++) n[c] = i
          return n
        }),
        (e.size = function (t) {
          var n = 0
          if (t) {
            var i = t.length
            e.isInteger(i) && i >= 0
              ? (n = i)
              : e.isObject(t) && (n = e.keys(t).length)
          }
          return n
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t) {
        if (n.array(t)) return t
        var i = []
        return (
          e.toString(t).replace(r, function (e, t, n, r) {
            var a = t || e
            n && (a = r.replace(o, '$1')), i.push(a)
          }),
          i
        )
      }
      var n = e.is,
        i = e.forIn
      ;(e.only = function (t, i) {
        return (
          (t = t || {}),
          n.string(i) && (i = i.split(/ +/)),
          e.reduce(
            i,
            function (e, n) {
              return null != t[n] && (e[n] = t[n]), e
            },
            {}
          )
        )
      }),
        (e.values = function (t) {
          return e.map(e.keys(t), function (e) {
            return t[e]
          })
        }),
        (e.pick = function (t, r) {
          if (!n.fn(r))
            return e.pick(t, function (e, t) {
              return t == r
            })
          var o = {}
          return (
            i(t, function (e, t, n) {
              r(e, t, n) && (o[t] = e)
            }),
            o
          )
        }),
        (e.functions = function (t) {
          return e.keys(
            e.pick(t, function (e) {
              return n.fn(e)
            })
          )
        }),
        (e.mapKeys = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              var o = t(e, i, r)
              n[o] = e
            }),
            n
          )
        }),
        (e.mapObject = e.mapValues = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              n[i] = t(e, i, r)
            }),
            n
          )
        }),
        (e.get = function (n, i) {
          if (((i = t(i)), i.length)) {
            var r = e.every(i, function (e) {
              if (null != n) return (n = n[e]), !0
            })
            if (r) return n
          }
        }),
        (e.has = function (i, r) {
          if (((r = t(r)), r.length)) {
            var o = e.every(r, function (e) {
              if (null != i && n.owns(i, e)) return (i = i[e]), !0
            })
            if (o) return !0
          }
          return !1
        }),
        (e.set = function (i, r, o) {
          r = t(r)
          var a = i
          return (
            e.every(r, function (e, t) {
              if (n.oof(a)) {
                if (t + 1 != r.length) {
                  var i = a[e]
                  if (null == i) {
                    var i = {}
                    ~~e == e && (i = [])
                  }
                  return (a = a[e] = i), !0
                }
                a[e] = o
              }
            }),
            i
          )
        }),
        (e.create = (function () {
          function t() {}
          return function (n, i) {
            return (
              'object' != typeof n && (n = null),
              (t.prototype = n),
              e.extend(new t(), i)
            )
          }
        })()),
        (e.defaults = function () {
          var t = arguments,
            i = t[0],
            r = e.slice(t, 1)
          return (
            i &&
              e.each(r, function (t) {
                e.mapObject(t, function (e, t) {
                  n.undef(i[t]) && (i[t] = e)
                })
              }),
            i
          )
        }),
        (e.isMatch = function (e, t) {
          var n = !0
          return (
            (e = e || {}),
            i(t, function (t, i) {
              if (t !== e[i]) return (n = !1), !1
            }),
            n
          )
        }),
        (e.toPlainObject = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[n] = e
            }),
            t
          )
        }),
        (e.invert = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[e] = n
            }),
            t
          )
        })
      var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        o = /\\(\\)?/g
    }
  },
  function (e, t, n) {
    e.exports = function (e) {
      function t(e) {
        function n() {
          var t = arguments,
            n = t[0]
          if (!i.has(n)) {
            var r = e.apply(this, t)
            i.set(n, r)
          }
          return i.get(n)
        }
        var i = new t.Cache()
        return (n.cache = i), n
      }
      var i = e.is,
        r = e.slice
      ;(e.bind = function (t, n) {
        if (i.string(n)) {
          var o = t
          ;(t = o[n]), (n = o)
        }
        if (!i.fn(t)) return t
        var a = r(arguments, 2)
        return (
          (n = n || this),
          function () {
            return t.apply(n, e.flatten([a, arguments]))
          }
        )
      }),
        (e.inherits = function (t, n) {
          ;(t.super_ = n),
            (t.prototype = e.create(n.prototype, { constructor: t }))
        }),
        (e.delay = function (t, n) {
          var i = e.slice(arguments, 2)
          return setTimeout(function () {
            t.apply(this, i)
          }, n)
        }),
        (e.before = function (e, t) {
          return function () {
            if (e > 1) return e--, t.apply(this, arguments)
          }
        }),
        (e.once = function (t) {
          return e.before(2, t)
        }),
        (e.after = function (e, t) {
          return function () {
            return e > 1 ? void e-- : t.apply(this, arguments)
          }
        }),
        (e.throttle = function (t, n, i) {
          return (
            (n = n || 0),
            (i = e.extend({ leading: !0, trailing: !0, maxWait: n }, i)),
            e.debounce(t, n, i)
          )
        }),
        (e.debounce = function (t, n, i) {
          function r() {
            return !(p - l > n) && !(u && p - f > u)
          }
          function o(t, n, i) {
            return (l = e.now()), t.apply(n, i)
          }
          function a() {
            s && (clearTimeout(s), (s = null))
          }
          function c() {
            p = e.now()
            var c = r()
            f = p
            var u = this,
              l = arguments
            a(),
              c
                ? i.trailing &&
                  (s = e.delay(function () {
                    o(t, u, l)
                  }, n))
                : o(t, u, l)
          }
          ;(n = n || 0), (i = e.extend({ leading: !1, trailing: !0 }, i))
          var s,
            u = i.maxWait,
            l = 0,
            f = 0,
            p = e.now()
          return i.leading || (l = p), (c.cancel = a), c
        }),
        (t.Cache = n(11)),
        (e.memoize = t),
        (e.wrap = function (e, t) {
          return function () {
            var n = [e]
            return n.push.apply(n, arguments), t.apply(this, n)
          }
        }),
        (e.curry = function (t) {
          function n(r) {
            return function () {
              var o = r.concat(e.slice(arguments))
              return o.length >= i ? ((o.length = i), t.apply(this, o)) : n(o)
            }
          }
          var i = t.length
          return n([])
        })
    }
  },
  function (e, t, n) {
    function i() {
      this.data = {}
    }
    var r = n(4),
      o = r.is
    e.exports = i
    var a = i.prototype
    ;(a.has = function (e) {
      return o.owns(this.data, e)
    }),
      (a.get = function (e) {
        return this.data[e]
      }),
      (a.set = function (e, t) {
        this.data[e] = t
      }),
      (a['delete'] = function (e) {
        delete this.data[e]
      })
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, i) {
        t = n(t) || ' '
        var r = Math.floor(i / t.length) + 1
        return e.repeat(t, r).slice(0, i)
      }
      function n(e) {
        return e || 0 == e ? e + '' : ''
      }
      e.tostr = e.toString = n
      var i = e.indexOf
      ;(e.split = function (e, t, i) {
        return (e = n(e)), e.split(t, i)
      }),
        (e.capitalize = function (e) {
          return (
            (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
          )
        }),
        (e.upperFirst = function (e) {
          return (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1)
        }),
        (e.lowerFirst = function (e) {
          return (e = n(e)), e.charAt(0).toLowerCase() + e.substr(1)
        }),
        (e.camelCase = function (t) {
          t = n(t)
          var i = t.split(/[^\w]|_+/)
          return (
            (i = e.map(i, function (t) {
              return e.capitalize(t)
            })),
            e.lowerFirst(i.join(''))
          )
        }),
        (e.startsWith = function (e, t) {
          return 0 == i(e, t)
        }),
        (e.endsWith = function (t, n) {
          return (n += ''), n == e.slice(t, e.len(t) - e.len(n))
        }),
        (e.toLower = e.lower = function (e) {
          return n(e).toLowerCase()
        }),
        (e.toUpper = e.upper = function (e) {
          return n(e).toUpperCase()
        }),
        (e.repeat = function (t, n) {
          return e
            .map(e.range(n), function () {
              return t
            })
            .join('')
        }),
        (e.padStart = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return t(r, o) + e
        }),
        (e.padEnd = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return e + t(r, o)
        })
      var r = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&#39' }
      ;(e.escape = function (e) {
        return n(e).replace(/[&<>"']/g, function (e) {
          return r[e] || e
        })
      }),
        (e.template = function (t) {
          function n(t) {
            var n = e.first(t)
            if ('=' === n || '-' === n) {
              var i = e.slice(t, 1)
              '-' === n && (i = '_.escape(' + i + ')'), r.push('ret += ' + i)
            } else r.push(t)
          }
          function i(e) {
            r.push(
              'ret += "' +
                e
                  .replace(/('|"|\\)/g, '\\$1')
                  .replace(/\r/g, '\\r')
                  .replace(/\n/g, '\\n') +
                '"'
            )
          }
          var r = ['with(data) {var ret = ""']
          e.each(e.split(t, '<%'), function (t, r) {
            var o = t.split('%>')
            return o[1] ? (n(e.trim(o[0])), i(o[1])) : void i(o[0])
          }),
            r.push('return ret}')
          var o = new Function('data', r.join('\n')),
            a = { _: e },
            c = function (t) {
              return o(e.extend({}, a, t))
            }
          return c
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      ;(e.sum = function (t) {
        return e.reduce(
          t,
          function (e, t) {
            return e + t
          },
          0
        )
      }),
        (e.max = function (t, n) {
          var i = -1,
            r = -(1 / 0)
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e > r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        }),
        (e.min = function (t, n) {
          var i = -1,
            r = 1 / 0
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e < r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        })
    }
  },
  function (e, t, n) {
    var i = n(15)
    e.exports = t = i.getLogger()
  },
  function (e, t, n) {
    function i(e) {
      var t = this
      a.string(e) && (e = { name: e }), (e = e || {})
      var n = e.name || 'default'
      ;(t.name = n),
        (t.Level = c),
        (t.sdk = f),
        (t.enabled = f.isNameEnabled(n)),
        (t.color = e.color || t.sdk.getRandomColor(n)),
        (t.util = u),
        (t._ = o),
        (t.qs = l)
    }
    function r(e) {
      var t = f.loggers,
        n = t[e]
      return n || (n = t[e] = new i(e)), n
    }
    var o = n(2),
      a = o.is,
      c = n(16),
      s = n(17),
      u = n(25),
      l = n(26),
      f = new s()
    e.exports = t = i
    var p = o.map(o.keys(c), function (e) {
        return o.lower(e)
      }),
      d = i.prototype
    ;(d.getLogger = i.getLogger = r),
      (d.output = function (e, t) {
        var n = this,
          i = {
            level: e,
            name: n.name,
            enabled: n.enabled,
            timestamp: o.now(),
            data: t,
            color: n.color,
            done: !1
          }
        f.output(i)
      }),
      o.each(p, function (e) {
        var t = c.toCode(e)
        d[e] =         var n = 'is' + o.capitalize(e) + 'Enabled'
        d[n] =       })
    var h = 'setOptions setOutputer setName setLevel setHistorySize getHistory disableHistory clear save setColors'.split(
      ' '
    )
    o.each(h, ,
      (d.getLevelFunction = function (e) {
        var t = this,
          n = c.toCode(e) || c.DEBUG
        return       })
  },
  function (e, t, n) {
    var i = n(2),
      r = 'verbose debug log info warn error fatal off'.split(' ')
    i.each(r, function (e, n) {
      t[i.upper(e)] = n + 1
    }),
      (t.toCode = ,
      (t.toName = function (e) {
        return i.find(r, function (n) {
          return t[i.upper(n)] === e
        })
      })
  },
  function (e, t, n) {
    function i() {
      var e = this
      ;(e.history = []),
        (e.pendingItems = []),
        (e.Level = o),
        (e.loggers = {}),
        (e.level = null),
        (e.prefix = ''),
        (e.pattern = {}),
        (e.lastItem = null),
        (e.outputers = a),
        (e.colorMap = {}),
        (e.colors = 'lightseagreen forestgreen goldenrod dodgerblue darkorchid crimson'.split(
          ' '
        )),
        (e.colorIndex = 0),
        (e.historySize = 3e3),
        e.setOutputer(u.noop),
        e.autoInit()
    }
    function r(e) {
      var t = [],
        n = []
      return (
        e &&
          l.string(e) &&
          u.each(e.split(/[\s,]+/), function (e) {
            e = e.replace(/\*/g, '.*?')
            var i = e.charAt(0)
            '-' === i
              ? t.push(new RegExp('^' + u.slice(e, 1) + '$'))
              : n.push(new RegExp('^' + e + '$'))
          }),
        { skips: t, names: n }
      )
    }
    var o = n(16),
      a = n(18),
      c = n(20),
      s = n(25),
      u = n(2),
      l = u.is
    e.exports = i
    var f = i.prototype
    ;(f.autoInit = function () {
      var e = this,
        t = e.getDefaultOptions(),
        n = e.getUserOptions(),
        i = u.extend({}, t, n)
      e.setOptions(i)
    }),
      (f.setOptions = function (e) {
        var t = this
        t.setName(e.name), t.setLevel(e.level), t.setOutputer(e.outputer)
      }),
      (f.getDefaultOptions = function () {
        var e = this,
          t = { level: o.INFO, outputer: e.autoChooseOutputer(), name: '*' }
        return t
      }),
      (f.getUserOptions = function () {
        var e = s.getUserOptions('log_name log_level log_outputer'.split(' '))
        return {
          name: e.log_name,
          level: e.log_level,
          outputer: e.log_outputer
        }
      }),
      (f.autoChooseOutputer = function () {
        var e = u.noop
        return (
          c.hasConsole() &&
            (e = s.supportBrowserColor() ? 'browser_console' : 'node_console'),
          e
        )
      }),
      (f.setOutputer = function (e) {
        var t = this,
          n = null
        l.string(e) ? (n = t.outputers[e]) : l.fn(e) && (n = { handler: e }),
          n &&
            ((t.outputer = n),
            l.fn(n.init) && n.init(t),
            l.fn(n.ready) &&
              n.ready(function () {
                u.each(t.pendingItems, function (e) {
                  e.done === !1 && (n.handler(e), (e.done = !0))
                }),
                  (t.pendingItems.length = 0)
              }))
      }),
      (f.output = function (e) {
        var t = this
        if (e.enabled && t.isLevelEnabled(e.level)) {
          var n = t.outputer
          n.isReady === !1
            ? t.pendingItems.push(e)
            : (n.handler(e, t), (e.done = !0)),
            (t.lastItem = e)
        }
        t.appendHistory(e)
      }),
      (f.setPrefix = ,
      (f.isLevelEnabled = function (e) {
        var t = this
        return e >= t.level
      }),
      (f.getRandomColor = function (e) {
        var t = this,
          n = t.colorMap[e]
        if (!n) {
          var i = t.colors
          n = t.colorMap[e] = i[t.colorIndex++ % i.length]
        }
        return n
      }),
      (f.setName = ,
      (f.setColors = function (e) {
        this.colors = e
      }),
      (f.setNamePattern = function (e) {
        var t = this
        ;(t.pattern = r(e)),
          u.forIn(t.loggers, 
      }),
      (f.isNameEnabled = function (e) {
                var n = this,
          i = n.pattern
        return !u.some(i.skips, t) && !!u.some(i.names, t)
      }),
      (f.setLevel = ,
      (f.appendHistory = function (e) {
        var t = this
        t.history.push(e), t.history.length > t.historySize && t.history.shift()
      }),
      (f.setHistorySize = function (e) {
        this.historySize = e
      }),
      (f.getHistory = function () {
        return this.history
      }),
      (f.disableHistory = ,
      (f.clear = ,
      (f.save = function () {
        var e = this
        return u
          .map(e.history, function (e) {
            return u
              .map(e.data, 
              .join(' ')
          })
          .join('\r\n')
      })
  },
  function (e, t, n) {
    ;(t.console = n(19)),
      (t.browser_console = n(21)),
      (t.node_console = n(22)),
      (t.file = n(23)),
      (t.browser_html = n(24)),
      (t.vconsole = n(27)),
      (t.eruda = n(39))
  },
  function (e, t, n) {
    var i = n(16),
      r = n(20)
    t.handler = function (e) {
      var t = e.level
      t < i.DEBUG ? (t = i.DEBUG) : t > i.ERROR && (t = i.ERROR)
      var n = i.toName(t)
      r.console(n, e.data)
    }
  },
  function (e, t) {
    ;(function (e) {
      t.getConsole =       var n = (t.globalConsole = t.getConsole())
      ;(t.hasConsole = ,
        (t.console = function (e, t) {
          var i = Function.prototype.apply || n[e].apply
          i.call(n[e], n, t)
        })
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    var i = n(2),
      r = n(20),
      o = 'color:inherit'
    t.handler = function (e, t) {
      var n = t.lastItem || {},
        a = n.timestamp || e.timestamp,
        c = e.timestamp - a,
        s = 'color:' + e.color,
        u = t.prefix + e.name,
        l = '%c' + u + '%c',
        f = [null, s, o]
      i.each(e.data, ,
        f.push(s),
        (l += '%c +' + c + 'ms'),
        (f[0] = l),
        r.console('log', f)
    }
  },
  function (e, t, n) {
    var i = n(20)
    t.handler =   },
  
  function (e, t, n) {
    ;(function (t) {
      function i() {
        ;(this.inited = !1), (this.box = null)
      }
      var r = n(2),
        o = n(25),
        a = i.prototype
      ;(a.init = function (e) {
        if (!this.inited) {
          this.inited = !0
          var n = t.document
          if (n) {
            ;(this.box = n.createElement('div')),
              (this.box.style.cssText =
                'z-index:999;padding:16px;height:300px;overflow:auto;line-height:1.4;background:#242424;color:#fff;font-size:16px; font-family: monospace,consolas,"Hiragino Sans GB","Microsoft YaHei","\u5fae\u8f6f\u96c5\u9ed1",Arial,sans-serif;border:none;text-align:left')
            var i = n.body || n.documentElement
            i.insertBefore(this.box, i.firstChild)
          }
        }
      }),
        (a.handler = function (e, n) {
          if (t.document) {
            var i = n.lastItem || {},
              a = i.timestamp || e.timestamp,
              c = e.timestamp - a,
              s = n.prefix + e.name,
              u = [s]
            r.each(e.data, ,
              u.push('+' + c + 'ms')
            var l = document.createElement('div')
            o.text(l, u.join(' ')),
              (l.style.color = e.color),
              this.box.appendChild(l)
          }
        }),
        (e.exports = new i())
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    ;(function (e) {
      function i() {
        return !(!f.browser() || !/Trident/i.test(navigator.userAgent))
      }
      function r(e, t) {
        var n = !1,
          i = l.now()
        e = e.replace('__now__', i)
        var r = document.createElement('script')
        ;(r.onload = r.onreadystatechange = function () {
          n ||
            ('complete' !== this.readyState && this.readyState) ||
            ((n = !0), t())
        }),
          (r.type = 'text/javascript'),
          (r.src = e),
          (r.async = 1)
        var o = document.getElementsByTagName('script')[0]
        o.parentNode.insertBefore(r, o)
      }
      function o() {
        return !!f.wechatApp() || (!i() && !!f.browser())
      }
      function a(e, t) {
        var n = 'textContent'
        f.owns(e, n) || (n = 'innerText'), (e[n] = t)
      }
      function c(e) {
        try {
          e = JSON.stringify(e, 0, 4)
        } catch (t) {
          e += ''
        }
        return e
      }
      function s(t) {
        var n = []
        if (e.location) {
          var i = p.parse(l.slice(location.search, 1))
          n.push(i)
        }
        try {
          e.localStorage && n.push(localStorage)
        } catch (r) {}
        var o = l.get(e, ['process', 'env'])
        o && n.push(o)
        var a = l.find(n, function (e) {
          var n
          try {
            n = u(e, t)
          } catch (i) {
            n = null
          }
          if (n) return n
        })
        return a || {}
      }
      function u(e, t) {
        var n = {},
          i = !1
        if (
          (l.each(t, function (t) {
            f.owns(e, t) && ((i = !0), (n[t] = e[t]))
          }),
          i)
        )
          return n
      }
      var l = n(2),
        f = l.is,
        p = n(26)
      ;(t.isIE = i),
        (t.supportBrowserColor = o),
        (t.safeStringify = c),
        (t.text = a),
        (t.getUserOptions = s),
        (t.loadScript = r)
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    function i(e, t, n) {
      return (
        (n = r.find(arguments, function (e) {
          return o.object(e)
        })),
        (e = o.nos(e) ? e : void 0),
        (t = o.nos(t) ? t : void 0),
        (n = r.extend({}, a, n, { sep: e, eq: t }))
      )
    }
    var r = n(2),
      o = r.is,
      a = {
        sep: '&',
        eq: '=',
        encode: encodeURIComponent,
        decode: decodeURIComponent,
        keepRaw: !1,
        sort: null,
        ignoreValues: [void 0]
      }
    ;(t.parse = function (e, t, n, o) {
      ;(e += ''), (o = i(t, n, o))
      var a = o.decode
      return (
        (e = e.split(o.sep)),
        r.reduce(
          e,
          function (e, t) {
            if (((t = t.split(o.eq)), 2 == t.length)) {
              var n = t[0],
                i = t[1]
              if (!o.keepRaw)
                try {
                  ;(n = a(n)), (i = a(i))
                } catch (r) {}
              e[n] = i
            }
            return e
          },
          {}
        )
      )
    }),
      (t.stringify = function (e, t, n, a) {
        a = i(t, n, a)
        var c = r.keys(e),
          s = a.sort
        s && (o.fn(s) ? c.sort(s) : c.sort())
        var u = a.encode,
          l = []
        return (
          r.each(c, function (t) {
            var n = e[t]
            r.includes(a.ignoreValues, n) ||
              ((o.nan(n) || null == n) && (n = ''),
              a.keepRaw || ((t = u(t)), (n = u(n))),
              l.push(t + a.eq + n))
          }),
          l.join(a.sep)
        )
      })
  },
  function (e, t, n) {
    function i() {
      ;(this.inited = !1), (this.isReady = !1)
    }
    var r = n(19),
      o = n(25),
      a = n(28)(),
      c = i.prototype
    ;(c.init = function () {
      var e = this
      if (!e.inited) {
        e.inited = !0
        var t = '//s.url.cn/qqun/qun/qqweb/m/qun/confession/js/vconsole.min.js'
        o.loadScript(t, 
      }
    }),
      (c.ready = function (e) {
        a.queue(e)
      }),
      (c.run = function () {
        try {
          vConsole.show(), (this.isReady = !0), a.open()
        } catch (e) {}
      }),
      (c.handler = r.handler),
      (e.exports = new i())
  },
  function (e, t, n) {
    ;(function (t) {
      function i(e) {
        var t = this
        return t instanceof i
          ? ((t.queueList = e || []), void t.close())
          : new i(e)
      }
      var r = n(29),
        o = r.is
      e.exports = i
      var a = i.prototype
      ;(a.queue = function () {
        var e = this,
          t = arguments
        e.isOpen ? e.exec(t) : e.queueList.push(t)
      }),
        (a.close = ,
        (a.open = function () {
          ;(this.isOpen = !0), this.execAll()
        }),
        (a.execAll = function () {
          var e = this,
            t = e.queueList
          r.each(t, function (t) {
            e.exec(t)
          }),
            (t.length = 0)
        }),
        (a.exec = function (e) {
          var t,
            n = r.first(e),
            i = this.ctx
          if (((t = o.fn(n) ? n : r.get(i, n)), o.fn(t)))
            try {
              t.apply(i, r.slice(e, 1))
            } catch (a) {}
        }),
        (a.overwriteQueue = function (e) {
          var n = this
          t[e] = function () {
            n.queue.apply(n, arguments)
          }
        })
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    e.exports = n(30)
  },
  function (e, t, n) {
    ;(function (t) {
      function t(e) {
        return this instanceof t
          ? ((this.__value = e), void (this.__chain = !1))
          : new t(e)
      }
      var i = n(4)
      ;(e.exports = i.extend(t, i)),
        n(31)(t),
        n(32)(t),
        n(33)(t),
        n(34)(t),
        n(35)(t),
        n(37)(t),
        n(38)(t),
        t.mixin(t, t)
    }.call(t, n(29)))
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.isString = t.string),
        (e.isArray = t.array),
        (e.isArrayLike = t.arraylike),
        (e.isBoolean = t.bool),
        (e.isElement = t.element),
        (e.isEmpty = t.empty),
        (e.isFunction = t.fn),
        (e.isInteger = t.integer),
        (e.isNaN = t.nan),
        (e.isNumber = t.number),
        (e.isObject = t.object),
        (e.isPlainObject = t.plainObject),
        (e.isRegExp = t.regexp),
        (e.isString = t.string),
        (e.isUndefined = t.undef)
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.now = function () {
        return +new Date()
      }),
        (e.constant = function (e) {
          return function () {
            return e
          }
        }),
        (e.identity = function (e) {
          return e
        }),
        (e.random = function (e, t) {
          return e + Math.floor(Math.random() * (t - e + 1))
        }),
        (e.mixin = function (n, i, r) {
          var o = e.functions(i)
          if (n)
            if (t.fn(n)) {
              r = r || {}
              var a = n.prototype
              e.each(o, function (e) {
                var t = i[e]
                a[e] = function () {
                  var e = this,
                    n = [e.__value]
                  n.push.apply(n, arguments)
                  var i = t.apply(e, n)
                  return e.__chain ? ((e.__value = i), e) : i
                }
              })
            } else
              e.each(o, function (e) {
                n[e] = i[e]
              })
          return n
        }),
        (e.chain = function (t) {
          var n = e(t)
          return (n.__chain = !0), n
        }),
        (e.value = function () {
          return (this.__chain = !1), this.__value
        })
      var n = 0
      e.uniqueId = function (t) {
        return n++, e.toString(t) + n
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, n) {
        var i = e.size(n)
        return t < 0 && (t += i), t < 0 && (t = 0), t > i && (t = i), t || 0
      }
      function n(t, n) {
        var i = [],
          r = e.len(n)
        if (r)
          for (
            n = n.sort(function (e, t) {
              return e - t
            });
            r--;

          ) {
            var o = n[r]
            i.push(a.splice.call(t, o, 1)[0])
          }
        return i.reverse(), i
      }
      var i = (e.forEach = e.each),
        r = e.includes,
        o = e.is,
        a = Array.prototype
      ;(e.reject = function (t, n) {
        return e.filter(t, function (e, t, i) {
          return !n(e, t, i)
        })
      }),
        (e.without = function (t) {
          var n = e.slice(arguments, 1)
          return e.difference(t, n)
        }),
        (e.difference = function (t, n) {
          var i = []
          return (
            e.each(t, function (e) {
              r(n, e) || i.push(e)
            }),
            i
          )
        }),
        (e.pluck = function (t, n) {
          return e.map(t, function (e) {
            if (e) return e[n]
          })
        }),
        (e.nth = function (n, i) {
          ;(i = t(i, n)), (i = i || 0)
          var r
          return (r = e.isString(n) ? n.charAt(i) : n[i])
        }),
        (e.first = function (t) {
          if (t) return e.nth(t, 0)
        }),
        (e.last = function (t) {
          var n = e.len(t)
          if (n) return e.nth(t, n - 1)
        }),
        (e.asyncMap = function (e, t, n) {
          var r,
            o,
            a = [],
            c = 0
          i(e, function (i, s) {
            ;(o = !0),
              t(i, function (t, i) {
                if (!r) {
                  if ((c++, t)) return (r = !0), n(t)
                  ;(a[s] = i), c == e.length && ((r = !0), n(null, a))
                }
              })
          }),
            o || n(null)
        }),
        (e.uniq = function (t) {
          return e.uniqBy(t)
        }),
        (e.uniqBy = function (e, t) {
          var n = [],
            a = []
          return (
            o.fn(t) || (t = null),
            i(e, function (e) {
              var i = e
              t && (i = t(e)), r(a, i) || (a.push(i), n.push(e))
            }),
            n
          )
        }),
        (e.flatten = function (e) {
          var t = []
          return (
            i(e, function (e) {
              o.arraylike(e)
                ? i(e, function (e) {
                    t.push(e)
                  })
                : t.push(e)
            }),
            t
          )
        }),
        (e.union = function () {
          return e.uniq(e.flatten(arguments))
        }),
        (e.sampleSize = function (t, n) {
          for (
            var i = e.toArray(t), r = i.length, o = Math.min(n || 1, r), a = 0;
            a < r;
            a++
          ) {
            var c = e.random(a, r - 1),
              s = i[c]
            ;(i[c] = i[a]), (i[a] = s)
          }
          return (i.length = o), i
        }),
        (e.sample = function (t) {
          return e.first(e.sampleSize(t, 1))
        }),
        (e.shuffle = function (t) {
          return e.sampleSize(t, 1 / 0)
        }),
        (e.compact = function (t) {
          return e.filter(t, e.identity)
        }),
        (e.rest = function (t) {
          return e.slice(t, 1)
        }),
        (e.invoke = function () {
          var t = arguments,
            n = t[0],
            i = t[1],
            r = o.fn(i)
          return (
            (t = e.slice(t, 2)),
            e.map(n, function (e) {
              if (r) return i.apply(e, t)
              if (null != e) {
                var n = e[i]
                if (o.fn(n)) return n.apply(e, t)
              }
            })
          )
        }),
        (e.partition = function (t, n) {
          var i = e.groupBy(t, function (e, t, i) {
            var r = n(e, t, i)
            return r ? 1 : 2
          })
          return [i[1] || [], i[2] || []]
        }),
        (e.groupBy = function (t, n) {
          var i = {}
          return (
            e.each(t, function (e, t, r) {
              var o = n(e, t, r)
              ;(i[o] = i[o] || []), i[o].push(e)
            }),
            i
          )
        }),
        (e.range = function () {
          var t = arguments
          if (t.length < 2) return e.range(t[1], t[0])
          var n = t[0] || 0,
            i = t[1] || 0,
            r = t[2]
          o.number(r) || (r = 1)
          var a = i - n
          0 != r && (a /= r)
          for (var c = [], s = n, u = 0; u < a; u++) c.push(s), (s += r)
          return c
        }),
        (e.pullAt = function (t) {
          var i = e.slice(arguments, 1)
          return n(t, i)
        }),
        (e.remove = function (t, i) {
          for (var r = e.len(t) || 0, o = []; r--; ) i(t[r], r, t) && o.push(r)
          return n(t, o)
        }),
        (e.fill = function (n, i, r, o) {
          var a = e.size(n)
          ;(r = t(r, n) || 0), (o = t(o, n) || a)
          for (var c = r; c < o; c++) n[c] = i
          return n
        }),
        (e.size = function (t) {
          var n = 0
          if (t) {
            var i = t.length
            e.isInteger(i) && i >= 0
              ? (n = i)
              : e.isObject(t) && (n = e.keys(t).length)
          }
          return n
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t) {
        if (n.array(t)) return t
        var i = []
        return (
          e.toString(t).replace(r, function (e, t, n, r) {
            var a = t || e
            n && (a = r.replace(o, '$1')), i.push(a)
          }),
          i
        )
      }
      var n = e.is,
        i = e.forIn
      ;(e.only = function (t, i) {
        return (
          (t = t || {}),
          n.string(i) && (i = i.split(/ +/)),
          e.reduce(
            i,
            function (e, n) {
              return null != t[n] && (e[n] = t[n]), e
            },
            {}
          )
        )
      }),
        (e.values = function (t) {
          return e.map(e.keys(t), function (e) {
            return t[e]
          })
        }),
        (e.pick = function (t, r) {
          if (!n.fn(r))
            return e.pick(t, function (e, t) {
              return t == r
            })
          var o = {}
          return (
            i(t, function (e, t, n) {
              r(e, t, n) && (o[t] = e)
            }),
            o
          )
        }),
        (e.functions = function (t) {
          return e.keys(
            e.pick(t, function (e) {
              return n.fn(e)
            })
          )
        }),
        (e.mapKeys = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              var o = t(e, i, r)
              n[o] = e
            }),
            n
          )
        }),
        (e.mapObject = e.mapValues = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              n[i] = t(e, i, r)
            }),
            n
          )
        }),
        (e.get = function (n, i) {
          if (((i = t(i)), i.length)) {
            var r = e.every(i, function (e) {
              if (null != n) return (n = n[e]), !0
            })
            if (r) return n
          }
        }),
        (e.has = function (i, r) {
          if (((r = t(r)), r.length)) {
            var o = e.every(r, function (e) {
              if (null != i && n.owns(i, e)) return (i = i[e]), !0
            })
            if (o) return !0
          }
          return !1
        }),
        (e.set = function (i, r, o) {
          r = t(r)
          var a = i
          return (
            e.every(r, function (e, t) {
              if (n.oof(a)) {
                if (t + 1 != r.length) {
                  var i = a[e]
                  if (null == i) {
                    var i = {}
                    ~~e == e && (i = [])
                  }
                  return (a = a[e] = i), !0
                }
                a[e] = o
              }
            }),
            i
          )
        }),
        (e.create = (function () {
          function t() {}
          return function (n, i) {
            return (
              'object' != typeof n && (n = null),
              (t.prototype = n),
              e.extend(new t(), i)
            )
          }
        })()),
        (e.defaults = function () {
          var t = arguments,
            i = t[0],
            r = e.slice(t, 1)
          return (
            i &&
              e.each(r, function (t) {
                e.mapObject(t, function (e, t) {
                  n.undef(i[t]) && (i[t] = e)
                })
              }),
            i
          )
        }),
        (e.isMatch = function (e, t) {
          var n = !0
          return (
            (e = e || {}),
            i(t, function (t, i) {
              if (t !== e[i]) return (n = !1), !1
            }),
            n
          )
        }),
        (e.toPlainObject = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[n] = e
            }),
            t
          )
        }),
        (e.invert = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[e] = n
            }),
            t
          )
        })
      var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        o = /\\(\\)?/g
    }
  },
  function (e, t, n) {
    e.exports = function (e) {
      function t(e) {
        function n() {
          var t = arguments,
            n = t[0]
          if (!i.has(n)) {
            var r = e.apply(this, t)
            i.set(n, r)
          }
          return i.get(n)
        }
        var i = new t.Cache()
        return (n.cache = i), n
      }
      var i = e.is,
        r = e.slice
      ;(e.bind = function (t, n) {
        if (i.string(n)) {
          var o = t
          ;(t = o[n]), (n = o)
        }
        if (!i.fn(t)) return t
        var a = r(arguments, 2)
        return (
          (n = n || this),
          function () {
            return t.apply(n, e.flatten([a, arguments]))
          }
        )
      }),
        (e.inherits = function (t, n) {
          ;(t.super_ = n),
            (t.prototype = e.create(n.prototype, { constructor: t }))
        }),
        (e.delay = function (t, n) {
          var i = e.slice(arguments, 2)
          return setTimeout(function () {
            t.apply(this, i)
          }, n)
        }),
        (e.before = function (e, t) {
          return function () {
            if (e > 1) return e--, t.apply(this, arguments)
          }
        }),
        (e.once = function (t) {
          return e.before(2, t)
        }),
        (e.after = function (e, t) {
          return function () {
            return e > 1 ? void e-- : t.apply(this, arguments)
          }
        }),
        (e.throttle = function (t, n, i) {
          return (
            (n = n || 0),
            (i = e.extend({ leading: !0, trailing: !0, maxWait: n }, i)),
            e.debounce(t, n, i)
          )
        }),
        (e.debounce = function (t, n, i) {
          function r() {
            return !(p - l > n) && !(u && p - f > u)
          }
          function o(t, n, i) {
            return (l = e.now()), t.apply(n, i)
          }
          function a() {
            s && (clearTimeout(s), (s = null))
          }
          function c() {
            p = e.now()
            var c = r()
            f = p
            var u = this,
              l = arguments
            a(),
              c
                ? i.trailing &&
                  (s = e.delay(function () {
                    o(t, u, l)
                  }, n))
                : o(t, u, l)
          }
          ;(n = n || 0), (i = e.extend({ leading: !1, trailing: !0 }, i))
          var s,
            u = i.maxWait,
            l = 0,
            f = 0,
            p = e.now()
          return i.leading || (l = p), (c.cancel = a), c
        }),
        (t.Cache = n(36)),
        (e.memoize = t),
        (e.wrap = function (e, t) {
          return function () {
            var n = [e]
            return n.push.apply(n, arguments), t.apply(this, n)
          }
        }),
        (e.curry = function (t) {
          function n(r) {
            return function () {
              var o = r.concat(e.slice(arguments))
              return o.length >= i ? ((o.length = i), t.apply(this, o)) : n(o)
            }
          }
          var i = t.length
          return n([])
        })
    }
  },
  function (e, t, n) {
    function i() {
      this.data = {}
    }
    var r = n(4),
      o = r.is
    e.exports = i
    var a = i.prototype
    ;(a.has = function (e) {
      return o.owns(this.data, e)
    }),
      (a.get = function (e) {
        return this.data[e]
      }),
      (a.set = function (e, t) {
        this.data[e] = t
      }),
      (a['delete'] = function (e) {
        delete this.data[e]
      })
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, i) {
        t = n(t) || ' '
        var r = Math.floor(i / t.length) + 1
        return e.repeat(t, r).slice(0, i)
      }
      function n(e) {
        return e || 0 == e ? e + '' : ''
      }
      e.tostr = e.toString = n
      var i = e.indexOf
      ;(e.split = function (e, t, i) {
        return (e = n(e)), e.split(t, i)
      }),
        (e.capitalize = function (e) {
          return (
            (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
          )
        }),
        (e.upperFirst = function (e) {
          return (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1)
        }),
        (e.lowerFirst = function (e) {
          return (e = n(e)), e.charAt(0).toLowerCase() + e.substr(1)
        }),
        (e.camelCase = function (t) {
          t = n(t)
          var i = t.split(/[^\w]|_+/)
          return (
            (i = e.map(i, function (t) {
              return e.capitalize(t)
            })),
            e.lowerFirst(i.join(''))
          )
        }),
        (e.startsWith = function (e, t) {
          return 0 == i(e, t)
        }),
        (e.endsWith = function (t, n) {
          return (n += ''), n == e.slice(t, e.len(t) - e.len(n))
        }),
        (e.toLower = e.lower = function (e) {
          return n(e).toLowerCase()
        }),
        (e.toUpper = e.upper = function (e) {
          return n(e).toUpperCase()
        }),
        (e.repeat = function (t, n) {
          return e
            .map(e.range(n), function () {
              return t
            })
            .join('')
        }),
        (e.padStart = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return t(r, o) + e
        }),
        (e.padEnd = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return e + t(r, o)
        })
      var r = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&#39' }
      ;(e.escape = function (e) {
        return n(e).replace(/[&<>"']/g, function (e) {
          return r[e] || e
        })
      }),
        (e.template = function (t) {
          function n(t) {
            var n = e.first(t)
            if ('=' === n || '-' === n) {
              var i = e.slice(t, 1)
              '-' === n && (i = '_.escape(' + i + ')'), r.push('ret += ' + i)
            } else r.push(t)
          }
          function i(e) {
            r.push(
              'ret += "' +
                e
                  .replace(/('|"|\\)/g, '\\$1')
                  .replace(/\r/g, '\\r')
                  .replace(/\n/g, '\\n') +
                '"'
            )
          }
          var r = ['with(data) {var ret = ""']
          e.each(e.split(t, '<%'), function (t, r) {
            var o = t.split('%>')
            return o[1] ? (n(e.trim(o[0])), i(o[1])) : void i(o[0])
          }),
            r.push('return ret}')
          var o = new Function('data', r.join('\n')),
            a = { _: e },
            c = function (t) {
              return o(e.extend({}, a, t))
            }
          return c
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      ;(e.sum = function (t) {
        return e.reduce(
          t,
          function (e, t) {
            return e + t
          },
          0
        )
      }),
        (e.max = function (t, n) {
          var i = -1,
            r = -(1 / 0)
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e > r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        }),
        (e.min = function (t, n) {
          var i = -1,
            r = 1 / 0
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e < r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        })
    }
  },
  function (e, t, n) {
    function i() {
      ;(this.inited = !1), (this.isReady = !1)
    }
    var r = n(19),
      o = n(25),
      a = n(28)(),
      c = i.prototype
    ;(c.init = function () {
      var e = this
      if (!e.inited) {
        e.inited = !0
        var t = '//cdn.jsdelivr.net/npm/eruda'
        o.loadScript(t, 
      }
    }),
      (c.ready = function (e) {
        a.queue(e)
      }),
      (c.run = function () {
        try {
          eruda.init(), (this.isReady = !0), a.open()
        } catch (e) {}
      }),
      (c.handler = r.handler),
      (e.exports = new i())
  },
  function (e, t, n) {
    function i(e, t) {
      var n = ''
      return (
        (e = e.replace(t, ),
        [n, e]
      )
    }
    function r(e, t) {
      var n = [],
        i = c.indexOf(e, t)
      return (
        -1 == i
          ? (n[0] = e)
          : ((n[0] = e.slice(0, i)), (n[1] = e.slice(i + t.length))),
        n
      )
    }
    function o(e) {
      var t = r(e, '@'),
        n = t[0],
        i = t[1]
      return i || ((i = t[0]), (n = null)), [n, i]
    }
    var a = n(26),
      c = n(2)
    t.parse = function (e, t) {
      if ('string' != typeof e) return e
      var n,
        s,
        u = {}
      ;(u.href = e),
        (n = r(e, '#')),
        (s = n[0]),
        n[1] && (u.hash = '#' + n[1]),
        (n = i(s, /^[a-zA-Z][a-zA-Z0-9+-.]*:/)),
        (s = n[1]),
        (u.protocol = n[0].toLowerCase()),
        (n = r(s, '?')),
        (s = n[0])
      var l = n[1]
      if (
        (t && (l = a.parse(l)), (u.query = l), '/' != s.charAt(0) && u.schema)
      )
        return (u.opaque = s), u
      if (c.startsWith(s, '//')) {
        ;(s = s.slice(2)),
          (n = r(s, '/')),
          (u.pathname = '/' + unescape(n[1] || '')),
          (n = o(n[0])),
          (u.auth = n[0])
        var f = n[1]
        ;(n = r(f, ':')), (u.hostname = n[0]), (u.port = ~~n[1])
      }
      return u
    }
    var s = 'http https ftp gopher file'.split(' ')
    ;(t.format = function (e) {
      if (!e || 'object' != typeof e) return e
      var t = e.protocol,
        n = [t]
      ;(t && !c.includes(s, t.slice(0, t.length - 1))) || n.push('//'),
        e.auth && n.push(e.auth, '@'),
        n.push(e.hostname),
        e.port && n.push(':', e.port),
        n.push(e.pathname)
      var i = e.query
      i && ('string' != typeof i && (i = a.stringify(i)), i && n.push('?', i)),
        n.push(e.hash)
      for (var r = [], o = 0; o < n.length; o++) n[o] && r.push(n[o])
      return r.join('')
    }),
      (t.appendQuery = function (e, t) {
        var n = r(e, '#')
        e = n[0]
        var i = n[1]
        return (
          c.isObject(t) && (t = a.stringify(t)),
          c.includes(e, '?')
            ? c.endsWith(e, '&') || c.endsWith(e, '?') || (t && (t = '&' + t))
            : t && (t = '?' + t),
          t && (e += t),
          i && (e += '#' + i),
          e
        )
      })
  },
  function (e, t, n) {
    var i = n(42),
      r = n(52)
    ;(r.resolve = n(54)),
      (r.reject = n(55)),
      (r.prototype['catch'] = r.prototype.caught = ,
      (r.prototype.delay = function (e) {
        var t
        return this.then(.then(function () {
          return t
        })
      }),
      (r.delay = ,
      (r.all = function (e) {
        var t = [],
          n = i.size(e),
          o = 0
        return new r(function (a, c) {
          0 === n && a(t),
            i.each(e, function (e, i) {
              r.resolve(e).then(
                function (e) {
                  ;(t[i] = e), o++, o === n && a(t)
                },
                function (e) {
                  c(e)
                }
              )
            })
        })
      }),
      (r.race = function (e) {
        return new r(function (t, n) {
          i.each(e, function (e) {
            r.resolve(e).then(
              function (e) {
                t(e)
              },
              function (e) {
                n(e)
              }
            )
          })
        })
      }),
      (e.exports = r)
  },
  function (e, t, n) {
    e.exports = n(43)
  },
  function (e, t, n) {
    ;(function (t) {
      function t(e) {
        return this instanceof t
          ? ((this.__value = e), void (this.__chain = !1))
          : new t(e)
      }
      var i = n(4)
      ;(e.exports = i.extend(t, i)),
        n(44)(t),
        n(45)(t),
        n(46)(t),
        n(47)(t),
        n(48)(t),
        n(50)(t),
        n(51)(t),
        t.mixin(t, t)
    }.call(t, n(42)))
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.isString = t.string),
        (e.isArray = t.array),
        (e.isArrayLike = t.arraylike),
        (e.isBoolean = t.bool),
        (e.isElement = t.element),
        (e.isEmpty = t.empty),
        (e.isFunction = t.fn),
        (e.isInteger = t.integer),
        (e.isNaN = t.nan),
        (e.isNumber = t.number),
        (e.isObject = t.object),
        (e.isPlainObject = t.plainObject),
        (e.isRegExp = t.regexp),
        (e.isString = t.string),
        (e.isUndefined = t.undef)
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.now = function () {
        return +new Date()
      }),
        (e.constant = function (e) {
          return function () {
            return e
          }
        }),
        (e.identity = function (e) {
          return e
        }),
        (e.random = function (e, t) {
          return e + Math.floor(Math.random() * (t - e + 1))
        }),
        (e.mixin = function (n, i, r) {
          var o = e.functions(i)
          if (n)
            if (t.fn(n)) {
              r = r || {}
              var a = n.prototype
              e.each(o, function (e) {
                var t = i[e]
                a[e] = function () {
                  var e = this,
                    n = [e.__value]
                  n.push.apply(n, arguments)
                  var i = t.apply(e, n)
                  return e.__chain ? ((e.__value = i), e) : i
                }
              })
            } else
              e.each(o, function (e) {
                n[e] = i[e]
              })
          return n
        }),
        (e.chain = function (t) {
          var n = e(t)
          return (n.__chain = !0), n
        }),
        (e.value = function () {
          return (this.__chain = !1), this.__value
        })
      var n = 0
      e.uniqueId = function (t) {
        return n++, e.toString(t) + n
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, n) {
        var i = e.size(n)
        return t < 0 && (t += i), t < 0 && (t = 0), t > i && (t = i), t || 0
      }
      function n(t, n) {
        var i = [],
          r = e.len(n)
        if (r)
          for (
            n = n.sort(function (e, t) {
              return e - t
            });
            r--;

          ) {
            var o = n[r]
            i.push(a.splice.call(t, o, 1)[0])
          }
        return i.reverse(), i
      }
      var i = (e.forEach = e.each),
        r = e.includes,
        o = e.is,
        a = Array.prototype
      ;(e.reject = function (t, n) {
        return e.filter(t, function (e, t, i) {
          return !n(e, t, i)
        })
      }),
        (e.without = function (t) {
          var n = e.slice(arguments, 1)
          return e.difference(t, n)
        }),
        (e.difference = function (t, n) {
          var i = []
          return (
            e.each(t, function (e) {
              r(n, e) || i.push(e)
            }),
            i
          )
        }),
        (e.pluck = function (t, n) {
          return e.map(t, function (e) {
            if (e) return e[n]
          })
        }),
        (e.nth = function (n, i) {
          ;(i = t(i, n)), (i = i || 0)
          var r
          return (r = e.isString(n) ? n.charAt(i) : n[i])
        }),
        (e.first = function (t) {
          if (t) return e.nth(t, 0)
        }),
        (e.last = function (t) {
          var n = e.len(t)
          if (n) return e.nth(t, n - 1)
        }),
        (e.asyncMap = function (e, t, n) {
          var r,
            o,
            a = [],
            c = 0
          i(e, function (i, s) {
            ;(o = !0),
              t(i, function (t, i) {
                if (!r) {
                  if ((c++, t)) return (r = !0), n(t)
                  ;(a[s] = i), c == e.length && ((r = !0), n(null, a))
                }
              })
          }),
            o || n(null)
        }),
        (e.uniq = function (t) {
          return e.uniqBy(t)
        }),
        (e.uniqBy = function (e, t) {
          var n = [],
            a = []
          return (
            o.fn(t) || (t = null),
            i(e, function (e) {
              var i = e
              t && (i = t(e)), r(a, i) || (a.push(i), n.push(e))
            }),
            n
          )
        }),
        (e.flatten = function (e) {
          var t = []
          return (
            i(e, function (e) {
              o.arraylike(e)
                ? i(e, function (e) {
                    t.push(e)
                  })
                : t.push(e)
            }),
            t
          )
        }),
        (e.union = function () {
          return e.uniq(e.flatten(arguments))
        }),
        (e.sampleSize = function (t, n) {
          for (
            var i = e.toArray(t), r = i.length, o = Math.min(n || 1, r), a = 0;
            a < r;
            a++
          ) {
            var c = e.random(a, r - 1),
              s = i[c]
            ;(i[c] = i[a]), (i[a] = s)
          }
          return (i.length = o), i
        }),
        (e.sample = function (t) {
          return e.first(e.sampleSize(t, 1))
        }),
        (e.shuffle = function (t) {
          return e.sampleSize(t, 1 / 0)
        }),
        (e.compact = function (t) {
          return e.filter(t, e.identity)
        }),
        (e.rest = function (t) {
          return e.slice(t, 1)
        }),
        (e.invoke = function () {
          var t = arguments,
            n = t[0],
            i = t[1],
            r = o.fn(i)
          return (
            (t = e.slice(t, 2)),
            e.map(n, function (e) {
              if (r) return i.apply(e, t)
              if (null != e) {
                var n = e[i]
                if (o.fn(n)) return n.apply(e, t)
              }
            })
          )
        }),
        (e.partition = function (t, n) {
          var i = e.groupBy(t, function (e, t, i) {
            var r = n(e, t, i)
            return r ? 1 : 2
          })
          return [i[1] || [], i[2] || []]
        }),
        (e.groupBy = function (t, n) {
          var i = {}
          return (
            e.each(t, function (e, t, r) {
              var o = n(e, t, r)
              ;(i[o] = i[o] || []), i[o].push(e)
            }),
            i
          )
        }),
        (e.range = function () {
          var t = arguments
          if (t.length < 2) return e.range(t[1], t[0])
          var n = t[0] || 0,
            i = t[1] || 0,
            r = t[2]
          o.number(r) || (r = 1)
          var a = i - n
          0 != r && (a /= r)
          for (var c = [], s = n, u = 0; u < a; u++) c.push(s), (s += r)
          return c
        }),
        (e.pullAt = function (t) {
          var i = e.slice(arguments, 1)
          return n(t, i)
        }),
        (e.remove = function (t, i) {
          for (var r = e.len(t) || 0, o = []; r--; ) i(t[r], r, t) && o.push(r)
          return n(t, o)
        }),
        (e.fill = function (n, i, r, o) {
          var a = e.size(n)
          ;(r = t(r, n) || 0), (o = t(o, n) || a)
          for (var c = r; c < o; c++) n[c] = i
          return n
        }),
        (e.size = function (t) {
          var n = 0
          if (t) {
            var i = t.length
            e.isInteger(i) && i >= 0
              ? (n = i)
              : e.isObject(t) && (n = e.keys(t).length)
          }
          return n
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t) {
        if (n.array(t)) return t
        var i = []
        return (
          e.toString(t).replace(r, function (e, t, n, r) {
            var a = t || e
            n && (a = r.replace(o, '$1')), i.push(a)
          }),
          i
        )
      }
      var n = e.is,
        i = e.forIn
      ;(e.only = function (t, i) {
        return (
          (t = t || {}),
          n.string(i) && (i = i.split(/ +/)),
          e.reduce(
            i,
            function (e, n) {
              return null != t[n] && (e[n] = t[n]), e
            },
            {}
          )
        )
      }),
        (e.values = function (t) {
          return e.map(e.keys(t), function (e) {
            return t[e]
          })
        }),
        (e.pick = function (t, r) {
          if (!n.fn(r))
            return e.pick(t, function (e, t) {
              return t == r
            })
          var o = {}
          return (
            i(t, function (e, t, n) {
              r(e, t, n) && (o[t] = e)
            }),
            o
          )
        }),
        (e.functions = function (t) {
          return e.keys(
            e.pick(t, function (e) {
              return n.fn(e)
            })
          )
        }),
        (e.mapKeys = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              var o = t(e, i, r)
              n[o] = e
            }),
            n
          )
        }),
        (e.mapObject = e.mapValues = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              n[i] = t(e, i, r)
            }),
            n
          )
        }),
        (e.get = function (n, i) {
          if (((i = t(i)), i.length)) {
            var r = e.every(i, function (e) {
              if (null != n) return (n = n[e]), !0
            })
            if (r) return n
          }
        }),
        (e.has = function (i, r) {
          if (((r = t(r)), r.length)) {
            var o = e.every(r, function (e) {
              if (null != i && n.owns(i, e)) return (i = i[e]), !0
            })
            if (o) return !0
          }
          return !1
        }),
        (e.set = function (i, r, o) {
          r = t(r)
          var a = i
          return (
            e.every(r, function (e, t) {
              if (n.oof(a)) {
                if (t + 1 != r.length) {
                  var i = a[e]
                  if (null == i) {
                    var i = {}
                    ~~e == e && (i = [])
                  }
                  return (a = a[e] = i), !0
                }
                a[e] = o
              }
            }),
            i
          )
        }),
        (e.create = (function () {
          function t() {}
          return function (n, i) {
            return (
              'object' != typeof n && (n = null),
              (t.prototype = n),
              e.extend(new t(), i)
            )
          }
        })()),
        (e.defaults = function () {
          var t = arguments,
            i = t[0],
            r = e.slice(t, 1)
          return (
            i &&
              e.each(r, function (t) {
                e.mapObject(t, function (e, t) {
                  n.undef(i[t]) && (i[t] = e)
                })
              }),
            i
          )
        }),
        (e.isMatch = function (e, t) {
          var n = !0
          return (
            (e = e || {}),
            i(t, function (t, i) {
              if (t !== e[i]) return (n = !1), !1
            }),
            n
          )
        }),
        (e.toPlainObject = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[n] = e
            }),
            t
          )
        }),
        (e.invert = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[e] = n
            }),
            t
          )
        })
      var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        o = /\\(\\)?/g
    }
  },
  function (e, t, n) {
    e.exports = function (e) {
      function t(e) {
        function n() {
          var t = arguments,
            n = t[0]
          if (!i.has(n)) {
            var r = e.apply(this, t)
            i.set(n, r)
          }
          return i.get(n)
        }
        var i = new t.Cache()
        return (n.cache = i), n
      }
      var i = e.is,
        r = e.slice
      ;(e.bind = function (t, n) {
        if (i.string(n)) {
          var o = t
          ;(t = o[n]), (n = o)
        }
        if (!i.fn(t)) return t
        var a = r(arguments, 2)
        return (
          (n = n || this),
          function () {
            return t.apply(n, e.flatten([a, arguments]))
          }
        )
      }),
        (e.inherits = function (t, n) {
          ;(t.super_ = n),
            (t.prototype = e.create(n.prototype, { constructor: t }))
        }),
        (e.delay = function (t, n) {
          var i = e.slice(arguments, 2)
          return setTimeout(function () {
            t.apply(this, i)
          }, n)
        }),
        (e.before = function (e, t) {
          return function () {
            if (e > 1) return e--, t.apply(this, arguments)
          }
        }),
        (e.once = function (t) {
          return e.before(2, t)
        }),
        (e.after = function (e, t) {
          return function () {
            return e > 1 ? void e-- : t.apply(this, arguments)
          }
        }),
        (e.throttle = function (t, n, i) {
          return (
            (n = n || 0),
            (i = e.extend({ leading: !0, trailing: !0, maxWait: n }, i)),
            e.debounce(t, n, i)
          )
        }),
        (e.debounce = function (t, n, i) {
          function r() {
            return !(p - l > n) && !(u && p - f > u)
          }
          function o(t, n, i) {
            return (l = e.now()), t.apply(n, i)
          }
          function a() {
            s && (clearTimeout(s), (s = null))
          }
          function c() {
            p = e.now()
            var c = r()
            f = p
            var u = this,
              l = arguments
            a(),
              c
                ? i.trailing &&
                  (s = e.delay(function () {
                    o(t, u, l)
                  }, n))
                : o(t, u, l)
          }
          ;(n = n || 0), (i = e.extend({ leading: !1, trailing: !0 }, i))
          var s,
            u = i.maxWait,
            l = 0,
            f = 0,
            p = e.now()
          return i.leading || (l = p), (c.cancel = a), c
        }),
        (t.Cache = n(49)),
        (e.memoize = t),
        (e.wrap = function (e, t) {
          return function () {
            var n = [e]
            return n.push.apply(n, arguments), t.apply(this, n)
          }
        }),
        (e.curry = function (t) {
          function n(r) {
            return function () {
              var o = r.concat(e.slice(arguments))
              return o.length >= i ? ((o.length = i), t.apply(this, o)) : n(o)
            }
          }
          var i = t.length
          return n([])
        })
    }
  },
  function (e, t, n) {
    function i() {
      this.data = {}
    }
    var r = n(4),
      o = r.is
    e.exports = i
    var a = i.prototype
    ;(a.has = function (e) {
      return o.owns(this.data, e)
    }),
      (a.get = function (e) {
        return this.data[e]
      }),
      (a.set = function (e, t) {
        this.data[e] = t
      }),
      (a['delete'] = function (e) {
        delete this.data[e]
      })
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, i) {
        t = n(t) || ' '
        var r = Math.floor(i / t.length) + 1
        return e.repeat(t, r).slice(0, i)
      }
      function n(e) {
        return e || 0 == e ? e + '' : ''
      }
      e.tostr = e.toString = n
      var i = e.indexOf
      ;(e.split = function (e, t, i) {
        return (e = n(e)), e.split(t, i)
      }),
        (e.capitalize = function (e) {
          return (
            (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
          )
        }),
        (e.upperFirst = function (e) {
          return (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1)
        }),
        (e.lowerFirst = function (e) {
          return (e = n(e)), e.charAt(0).toLowerCase() + e.substr(1)
        }),
        (e.camelCase = function (t) {
          t = n(t)
          var i = t.split(/[^\w]|_+/)
          return (
            (i = e.map(i, function (t) {
              return e.capitalize(t)
            })),
            e.lowerFirst(i.join(''))
          )
        }),
        (e.startsWith = function (e, t) {
          return 0 == i(e, t)
        }),
        (e.endsWith = function (t, n) {
          return (n += ''), n == e.slice(t, e.len(t) - e.len(n))
        }),
        (e.toLower = e.lower = function (e) {
          return n(e).toLowerCase()
        }),
        (e.toUpper = e.upper = function (e) {
          return n(e).toUpperCase()
        }),
        (e.repeat = function (t, n) {
          return e
            .map(e.range(n), function () {
              return t
            })
            .join('')
        }),
        (e.padStart = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return t(r, o) + e
        }),
        (e.padEnd = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return e + t(r, o)
        })
      var r = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&#39' }
      ;(e.escape = function (e) {
        return n(e).replace(/[&<>"']/g, function (e) {
          return r[e] || e
        })
      }),
        (e.template = function (t) {
          function n(t) {
            var n = e.first(t)
            if ('=' === n || '-' === n) {
              var i = e.slice(t, 1)
              '-' === n && (i = '_.escape(' + i + ')'), r.push('ret += ' + i)
            } else r.push(t)
          }
          function i(e) {
            r.push(
              'ret += "' +
                e
                  .replace(/('|"|\\)/g, '\\$1')
                  .replace(/\r/g, '\\r')
                  .replace(/\n/g, '\\n') +
                '"'
            )
          }
          var r = ['with(data) {var ret = ""']
          e.each(e.split(t, '<%'), function (t, r) {
            var o = t.split('%>')
            return o[1] ? (n(e.trim(o[0])), i(o[1])) : void i(o[0])
          }),
            r.push('return ret}')
          var o = new Function('data', r.join('\n')),
            a = { _: e },
            c = function (t) {
              return o(e.extend({}, a, t))
            }
          return c
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      ;(e.sum = function (t) {
        return e.reduce(
          t,
          function (e, t) {
            return e + t
          },
          0
        )
      }),
        (e.max = function (t, n) {
          var i = -1,
            r = -(1 / 0)
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e > r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        }),
        (e.min = function (t, n) {
          var i = -1,
            r = 1 / 0
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e < r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        })
    }
  },
  function (e, t, n) {
    ;(function (t, i, r) {
      function t(e) {
        var t = this
        ;(t.handlers = {}), (t.children = []), (t.state = u), (t.spread = !1)
        var n = d(t, l),
          i = m(t, f)
        if (!s.fn(e)) throw new TypeError('expecting a function')
        try {
          e(
            function (e) {
              n(e)
            },
                      )
        } catch (r) {
          i(r)
        }
      }
      function o(e, t, n) {
        a(function () {
          var i = e.handlers[t]
          if (s.fn(i)) {
            var r
            try {
              r = e.spread ? i.apply(null, n) : i(n)
            } catch (o) {
              return h(e, f, o)
            }
            p(e, l, r)
          } else p(e, t, n)
        })
      }
      function a(e) {
        i.process && r.nextTick ? r.nextTick(e) : setTimeout(e)
      }
      var c = n(42),
        s = c.is,
        u = 0,
        l = 1,
        f = -1
      ;(e.exports = t),
        (t.prototype.then = function (e, n) {
          var i = this,
            r = new t(c.noop)
          r.spread = this.spread
          var a = r.handlers
          return (
            (a[l] = e),
            (a[f] = n),
            u == i.state ? i.children.push(r) : o(r, i.state, i.result),
            r
          )
        })
      var p = function (e, t, n) {
          if (e === n) return p(e, f, new TypeError('circle promise'))
          var i
          if (s.oof(n))
            try {
              i = n.then
            } catch (r) {
              return h(e, f, r)
            }
          if (s.fn(i)) {
            var o = c.once(function (t, n) {
              t == f ? h(e, t, n) : p(e, t, n)
            })
            try {
              i.call(
                n,
                function (e) {
                  o(l, e)
                },
                              )
            } catch (a) {
              o(f, a)
            }
          } else h(e, t, n)
        },
        d = c.curry(p),
        h = function (e, t, n) {
          e.state == u &&
            ((e.state = t),
            (e.result = n),
            c.each(e.children, )
        },
        m = c.curry(h)
    }.call(
      t,
      n(41),
      (function () {
        return this
      })(),
      n(53)
    ))
  },
  function (e, t) {
    function n() {
      throw new Error('setTimeout has not been defined')
    }
                    function c() {
      if (!m) {
        var e = r(a)
        m = !0
        for (var t = h.length; t; ) {
          for (d = h, h = []; ++g < t; ) d && d[g].run()
          ;(g = -1), (t = h.length)
        }
        ;(d = null), (m = !1), o(e)
      }
    }
    function s(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function u() {}
    var l,
      f,
      p = (e.exports = {})
    !(()
    var d,
      h = [],
      m = !1,
      g = -1
    ;(p.nextTick = ,
      (s.prototype.run = ,
      (p.title = 'browser'),
      (p.browser = !0),
      (p.env = {}),
      (p.argv = []),
      (p.version = ''),
      (p.versions = {}),
      (p.on = u),
      (p.addListener = u),
      (p.once = u),
      (p.off = u),
      (p.removeListener = u),
      (p.removeAllListeners = u),
      (p.emit = u),
      (p.prependListener = u),
      (p.prependOnceListener = u),
      (p.listeners = ,
      (p.binding = function (e) {
        throw new Error('process.binding is not supported')
      }),
      (p.cwd = function () {
        return '/'
      }),
      (p.chdir = ,
      (p.umask = 
  },
  function (e, t, n) {
    var i = n(52)
    e.exports = function (e) {
      return new i(function (t, n) {
        t(e)
      })
    }
  },
  function (e, t, n) {
    var i = n(52)
    e.exports =   },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    function i() {
      var e = this
      ;(e.resources = {}), (e.resource = {})
      var t = []
      'object' == typeof navigator &&
        (t = navigator.languages || [navigator.language]),
        e.setLocales(t)
    }
    var r = n(2),
      o = i.prototype
    ;(o.is = function (e) {
      return r.includes(r.lower(this.locale), r.lower(e))
    }),
      (o.setResource = function (e, t) {
        this.resources[e] = t
      }),
      (o.setResources = ,
      (o.setLocale = function (e) {
        var t = this
        if (e) {
          t.locale = e
          var n = i.matchLocale(r.keys(t.resources), e)
          return (t.resource = t.resources[n] || {}), n
        }
      }),
      (o.setLocales = function (e) {
        ;(this.locales = e), this.setLocale(r.first(e))
      }),
      (o.translate = ,
      (o.t = o.translate),
      (i.matchLocale = function (e, t) {
        e = r
          .map(e, 
          .sort(
        var n = r.last(e) || {}
        return n.raw
      }),
      (i.getSimilar = function (e, t) {
        var n = 0
        return (
          (e = i.parseLocale(r.lower(e))),
          (t = i.parseLocale(r.lower(t))),
          e.language && e.language == t.language && (n += 50),
          e.country && e.country == t.country && (n += 40),
          e.language && e.language == t.country && (n += 20),
          t.language && t.language == e.country && (n += 20),
          n
        )
      }),
      (i.parseLocale = function (e) {
        var t = e.split(/[^a-zA-Z]+/),
          n = { language: t[0], country: t[1] }
        return n
      })
    var a = new i()
    e.exports = t = a
  },
  function (e, t, n) {
    ;(function (e) {
      function i(t) {
        e.isString(t) && c('head').append('<style>' + t + '</style>')
      }
      function r() {
        var e
        try {
          window.top.document && window.top.myQHPass && (e = window.top)
        } catch (t) {
          e = null
        }
        return (e = e || window)
      }
      function o(t) {
        return e.isObject(t) && (t = t.areaCode + t.mobileNumber), t
      }
      function a(t) {
        var n = t
        return (
          e.isString(t) && (n = { mobileNumber: t }),
          n.regExp ||
            (n = e.extend({}, n, { areaCode: '+86', regExp: '^1d{10}$' })),
          n
        )
      }
      var c = n(106)
      ;(t.addStyle = e.once(i)),
        (t.getTopWindow = r),
        (t.getMobileStr = o),
        (t.normalizeMobileObj = a)
    }.call(t, n(2)))
  },
  function (e, t, n) {
    ;(function (t) {
      var i = n(107),
        r = t.jQuery || i
      e.exports = r
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    ;(function (i) {
      function r(e, t) {
        if (l.fn(e)) return r(u).ready(e)
        if (!(this instanceof r)) return new r(e, t)
        if (((this.length = 0), e)) {
          l.string(e) && (e = -1 == e.indexOf('<') ? c(e, t) : a.html(e)),
            l.arraylike(e) || (e = [e])
          for (var n = e.length, i = 0; i < n; i++) this[i] = e[i]
          this.length = n
        }
      }
      var o = n(108),
        a = n(118),
        c = n(129),
        s = n(130)
      s.prefix = 'minJQ-'
      var u = i.document,
        l = o.is
      e.exports = t = r
      var f = (r.fn = r.prototype)
      ;(r.extend = f.extend = function () {
        var e = arguments
        return 1 == e.length ? o.extend(this, e[0]) : o.extend.apply(o, e)
      }),
        f.extend({ jquery: !0 }),
        n(131)
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    e.exports = n(109)
  },
  function (e, t, n) {
    ;(function (t) {
      function t(e) {
        return this instanceof t
          ? ((this.__value = e), void (this.__chain = !1))
          : new t(e)
      }
      var i = n(4)
      ;(e.exports = i.extend(t, i)),
        n(110)(t),
        n(111)(t),
        n(112)(t),
        n(113)(t),
        n(114)(t),
        n(116)(t),
        n(117)(t),
        t.mixin(t, t)
    }.call(t, n(108)))
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.isString = t.string),
        (e.isArray = t.array),
        (e.isArrayLike = t.arraylike),
        (e.isBoolean = t.bool),
        (e.isElement = t.element),
        (e.isEmpty = t.empty),
        (e.isFunction = t.fn),
        (e.isInteger = t.integer),
        (e.isNaN = t.nan),
        (e.isNumber = t.number),
        (e.isObject = t.object),
        (e.isPlainObject = t.plainObject),
        (e.isRegExp = t.regexp),
        (e.isString = t.string),
        (e.isUndefined = t.undef)
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.now = function () {
        return +new Date()
      }),
        (e.constant = function (e) {
          return function () {
            return e
          }
        }),
        (e.identity = function (e) {
          return e
        }),
        (e.random = function (e, t) {
          return e + Math.floor(Math.random() * (t - e + 1))
        }),
        (e.mixin = function (n, i, r) {
          var o = e.functions(i)
          if (n)
            if (t.fn(n)) {
              r = r || {}
              var a = n.prototype
              e.each(o, function (e) {
                var t = i[e]
                a[e] = function () {
                  var e = this,
                    n = [e.__value]
                  n.push.apply(n, arguments)
                  var i = t.apply(e, n)
                  return e.__chain ? ((e.__value = i), e) : i
                }
              })
            } else
              e.each(o, function (e) {
                n[e] = i[e]
              })
          return n
        }),
        (e.chain = function (t) {
          var n = e(t)
          return (n.__chain = !0), n
        }),
        (e.value = function () {
          return (this.__chain = !1), this.__value
        })
      var n = 0
      e.uniqueId = function (t) {
        return n++, e.toString(t) + n
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, n) {
        var i = e.size(n)
        return t < 0 && (t += i), t < 0 && (t = 0), t > i && (t = i), t || 0
      }
      function n(t, n) {
        var i = [],
          r = e.len(n)
        if (r)
          for (
            n = n.sort(function (e, t) {
              return e - t
            });
            r--;

          ) {
            var o = n[r]
            i.push(a.splice.call(t, o, 1)[0])
          }
        return i.reverse(), i
      }
      var i = (e.forEach = e.each),
        r = e.includes,
        o = e.is,
        a = Array.prototype
      ;(e.reject = function (t, n) {
        return e.filter(t, function (e, t, i) {
          return !n(e, t, i)
        })
      }),
        (e.without = function (t) {
          var n = e.slice(arguments, 1)
          return e.difference(t, n)
        }),
        (e.difference = function (t, n) {
          var i = []
          return (
            e.each(t, function (e) {
              r(n, e) || i.push(e)
            }),
            i
          )
        }),
        (e.pluck = function (t, n) {
          return e.map(t, function (e) {
            if (e) return e[n]
          })
        }),
        (e.nth = function (n, i) {
          ;(i = t(i, n)), (i = i || 0)
          var r
          return (r = e.isString(n) ? n.charAt(i) : n[i])
        }),
        (e.first = function (t) {
          if (t) return e.nth(t, 0)
        }),
        (e.last = function (t) {
          var n = e.len(t)
          if (n) return e.nth(t, n - 1)
        }),
        (e.asyncMap = function (e, t, n) {
          var r,
            o,
            a = [],
            c = 0
          i(e, function (i, s) {
            ;(o = !0),
              t(i, function (t, i) {
                if (!r) {
                  if ((c++, t)) return (r = !0), n(t)
                  ;(a[s] = i), c == e.length && ((r = !0), n(null, a))
                }
              })
          }),
            o || n(null)
        }),
        (e.uniq = function (t) {
          return e.uniqBy(t)
        }),
        (e.uniqBy = function (e, t) {
          var n = [],
            a = []
          return (
            o.fn(t) || (t = null),
            i(e, function (e) {
              var i = e
              t && (i = t(e)), r(a, i) || (a.push(i), n.push(e))
            }),
            n
          )
        }),
        (e.flatten = function (e) {
          var t = []
          return (
            i(e, function (e) {
              o.arraylike(e)
                ? i(e, function (e) {
                    t.push(e)
                  })
                : t.push(e)
            }),
            t
          )
        }),
        (e.union = function () {
          return e.uniq(e.flatten(arguments))
        }),
        (e.sampleSize = function (t, n) {
          for (
            var i = e.toArray(t), r = i.length, o = Math.min(n || 1, r), a = 0;
            a < r;
            a++
          ) {
            var c = e.random(a, r - 1),
              s = i[c]
            ;(i[c] = i[a]), (i[a] = s)
          }
          return (i.length = o), i
        }),
        (e.sample = function (t) {
          return e.first(e.sampleSize(t, 1))
        }),
        (e.shuffle = function (t) {
          return e.sampleSize(t, 1 / 0)
        }),
        (e.compact = function (t) {
          return e.filter(t, e.identity)
        }),
        (e.rest = function (t) {
          return e.slice(t, 1)
        }),
        (e.invoke = function () {
          var t = arguments,
            n = t[0],
            i = t[1],
            r = o.fn(i)
          return (
            (t = e.slice(t, 2)),
            e.map(n, function (e) {
              if (r) return i.apply(e, t)
              if (null != e) {
                var n = e[i]
                if (o.fn(n)) return n.apply(e, t)
              }
            })
          )
        }),
        (e.partition = function (t, n) {
          var i = e.groupBy(t, function (e, t, i) {
            var r = n(e, t, i)
            return r ? 1 : 2
          })
          return [i[1] || [], i[2] || []]
        }),
        (e.groupBy = function (t, n) {
          var i = {}
          return (
            e.each(t, function (e, t, r) {
              var o = n(e, t, r)
              ;(i[o] = i[o] || []), i[o].push(e)
            }),
            i
          )
        }),
        (e.range = function () {
          var t = arguments
          if (t.length < 2) return e.range(t[1], t[0])
          var n = t[0] || 0,
            i = t[1] || 0,
            r = t[2]
          o.number(r) || (r = 1)
          var a = i - n
          0 != r && (a /= r)
          for (var c = [], s = n, u = 0; u < a; u++) c.push(s), (s += r)
          return c
        }),
        (e.pullAt = function (t) {
          var i = e.slice(arguments, 1)
          return n(t, i)
        }),
        (e.remove = function (t, i) {
          for (var r = e.len(t) || 0, o = []; r--; ) i(t[r], r, t) && o.push(r)
          return n(t, o)
        }),
        (e.fill = function (n, i, r, o) {
          var a = e.size(n)
          ;(r = t(r, n) || 0), (o = t(o, n) || a)
          for (var c = r; c < o; c++) n[c] = i
          return n
        }),
        (e.size = function (t) {
          var n = 0
          if (t) {
            var i = t.length
            e.isInteger(i) && i >= 0
              ? (n = i)
              : e.isObject(t) && (n = e.keys(t).length)
          }
          return n
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t) {
        if (n.array(t)) return t
        var i = []
        return (
          e.toString(t).replace(r, function (e, t, n, r) {
            var a = t || e
            n && (a = r.replace(o, '$1')), i.push(a)
          }),
          i
        )
      }
      var n = e.is,
        i = e.forIn
      ;(e.only = function (t, i) {
        return (
          (t = t || {}),
          n.string(i) && (i = i.split(/ +/)),
          e.reduce(
            i,
            function (e, n) {
              return null != t[n] && (e[n] = t[n]), e
            },
            {}
          )
        )
      }),
        (e.values = function (t) {
          return e.map(e.keys(t), function (e) {
            return t[e]
          })
        }),
        (e.pick = function (t, r) {
          if (!n.fn(r))
            return e.pick(t, function (e, t) {
              return t == r
            })
          var o = {}
          return (
            i(t, function (e, t, n) {
              r(e, t, n) && (o[t] = e)
            }),
            o
          )
        }),
        (e.functions = function (t) {
          return e.keys(
            e.pick(t, function (e) {
              return n.fn(e)
            })
          )
        }),
        (e.mapKeys = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              var o = t(e, i, r)
              n[o] = e
            }),
            n
          )
        }),
        (e.mapObject = e.mapValues = function (e, t) {
          var n = {}
          return (
            i(e, function (e, i, r) {
              n[i] = t(e, i, r)
            }),
            n
          )
        }),
        (e.get = function (n, i) {
          if (((i = t(i)), i.length)) {
            var r = e.every(i, function (e) {
              if (null != n) return (n = n[e]), !0
            })
            if (r) return n
          }
        }),
        (e.has = function (i, r) {
          if (((r = t(r)), r.length)) {
            var o = e.every(r, function (e) {
              if (null != i && n.owns(i, e)) return (i = i[e]), !0
            })
            if (o) return !0
          }
          return !1
        }),
        (e.set = function (i, r, o) {
          r = t(r)
          var a = i
          return (
            e.every(r, function (e, t) {
              if (n.oof(a)) {
                if (t + 1 != r.length) {
                  var i = a[e]
                  if (null == i) {
                    var i = {}
                    ~~e == e && (i = [])
                  }
                  return (a = a[e] = i), !0
                }
                a[e] = o
              }
            }),
            i
          )
        }),
        (e.create = (function () {
          function t() {}
          return function (n, i) {
            return (
              'object' != typeof n && (n = null),
              (t.prototype = n),
              e.extend(new t(), i)
            )
          }
        })()),
        (e.defaults = function () {
          var t = arguments,
            i = t[0],
            r = e.slice(t, 1)
          return (
            i &&
              e.each(r, function (t) {
                e.mapObject(t, function (e, t) {
                  n.undef(i[t]) && (i[t] = e)
                })
              }),
            i
          )
        }),
        (e.isMatch = function (e, t) {
          var n = !0
          return (
            (e = e || {}),
            i(t, function (t, i) {
              if (t !== e[i]) return (n = !1), !1
            }),
            n
          )
        }),
        (e.toPlainObject = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[n] = e
            }),
            t
          )
        }),
        (e.invert = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[e] = n
            }),
            t
          )
        })
      var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        o = /\\(\\)?/g
    }
  },
  function (e, t, n) {
    e.exports = function (e) {
      function t(e) {
        function n() {
          var t = arguments,
            n = t[0]
          if (!i.has(n)) {
            var r = e.apply(this, t)
            i.set(n, r)
          }
          return i.get(n)
        }
        var i = new t.Cache()
        return (n.cache = i), n
      }
      var i = e.is,
        r = e.slice
      ;(e.bind = function (t, n) {
        if (i.string(n)) {
          var o = t
          ;(t = o[n]), (n = o)
        }
        if (!i.fn(t)) return t
        var a = r(arguments, 2)
        return (
          (n = n || this),
          function () {
            return t.apply(n, e.flatten([a, arguments]))
          }
        )
      }),
        (e.inherits = function (t, n) {
          ;(t.super_ = n),
            (t.prototype = e.create(n.prototype, { constructor: t }))
        }),
        (e.delay = function (t, n) {
          var i = e.slice(arguments, 2)
          return setTimeout(function () {
            t.apply(this, i)
          }, n)
        }),
        (e.before = function (e, t) {
          return function () {
            if (e > 1) return e--, t.apply(this, arguments)
          }
        }),
        (e.once = function (t) {
          return e.before(2, t)
        }),
        (e.after = function (e, t) {
          return function () {
            return e > 1 ? void e-- : t.apply(this, arguments)
          }
        }),
        (e.throttle = function (t, n, i) {
          return (
            (n = n || 0),
            (i = e.extend({ leading: !0, trailing: !0, maxWait: n }, i)),
            e.debounce(t, n, i)
          )
        }),
        (e.debounce = function (t, n, i) {
          function r() {
            return !(p - l > n) && !(u && p - f > u)
          }
          function o(t, n, i) {
            return (l = e.now()), t.apply(n, i)
          }
          function a() {
            s && (clearTimeout(s), (s = null))
          }
          function c() {
            p = e.now()
            var c = r()
            f = p
            var u = this,
              l = arguments
            a(),
              c
                ? i.trailing &&
                  (s = e.delay(function () {
                    o(t, u, l)
                  }, n))
                : o(t, u, l)
          }
          ;(n = n || 0), (i = e.extend({ leading: !1, trailing: !0 }, i))
          var s,
            u = i.maxWait,
            l = 0,
            f = 0,
            p = e.now()
          return i.leading || (l = p), (c.cancel = a), c
        }),
        (t.Cache = n(115)),
        (e.memoize = t),
        (e.wrap = function (e, t) {
          return function () {
            var n = [e]
            return n.push.apply(n, arguments), t.apply(this, n)
          }
        }),
        (e.curry = function (t) {
          function n(r) {
            return function () {
              var o = r.concat(e.slice(arguments))
              return o.length >= i ? ((o.length = i), t.apply(this, o)) : n(o)
            }
          }
          var i = t.length
          return n([])
        })
    }
  },
  function (e, t, n) {
    function i() {
      this.data = {}
    }
    var r = n(4),
      o = r.is
    e.exports = i
    var a = i.prototype
    ;(a.has = function (e) {
      return o.owns(this.data, e)
    }),
      (a.get = function (e) {
        return this.data[e]
      }),
      (a.set = function (e, t) {
        this.data[e] = t
      }),
      (a['delete'] = function (e) {
        delete this.data[e]
      })
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, i) {
        t = n(t) || ' '
        var r = Math.floor(i / t.length) + 1
        return e.repeat(t, r).slice(0, i)
      }
      function n(e) {
        return e || 0 == e ? e + '' : ''
      }
      e.tostr = e.toString = n
      var i = e.indexOf
      ;(e.split = function (e, t, i) {
        return (e = n(e)), e.split(t, i)
      }),
        (e.capitalize = function (e) {
          return (
            (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
          )
        }),
        (e.upperFirst = function (e) {
          return (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1)
        }),
        (e.lowerFirst = function (e) {
          return (e = n(e)), e.charAt(0).toLowerCase() + e.substr(1)
        }),
        (e.camelCase = function (t) {
          t = n(t)
          var i = t.split(/[^\w]|_+/)
          return (
            (i = e.map(i, function (t) {
              return e.capitalize(t)
            })),
            e.lowerFirst(i.join(''))
          )
        }),
        (e.startsWith = function (e, t) {
          return 0 == i(e, t)
        }),
        (e.endsWith = function (t, n) {
          return (n += ''), n == e.slice(t, e.len(t) - e.len(n))
        }),
        (e.toLower = e.lower = function (e) {
          return n(e).toLowerCase()
        }),
        (e.toUpper = e.upper = function (e) {
          return n(e).toUpperCase()
        }),
        (e.repeat = function (t, n) {
          return e
            .map(e.range(n), function () {
              return t
            })
            .join('')
        }),
        (e.padStart = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return t(r, o) + e
        }),
        (e.padEnd = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return e + t(r, o)
        })
      var r = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&#39' }
      ;(e.escape = function (e) {
        return n(e).replace(/[&<>"']/g, function (e) {
          return r[e] || e
        })
      }),
        (e.template = function (t) {
          function n(t) {
            var n = e.first(t)
            if ('=' === n || '-' === n) {
              var i = e.slice(t, 1)
              '-' === n && (i = '_.escape(' + i + ')'), r.push('ret += ' + i)
            } else r.push(t)
          }
          function i(e) {
            r.push(
              'ret += "' +
                e
                  .replace(/('|"|\\)/g, '\\$1')
                  .replace(/\r/g, '\\r')
                  .replace(/\n/g, '\\n') +
                '"'
            )
          }
          var r = ['with(data) {var ret = ""']
          e.each(e.split(t, '<%'), function (t, r) {
            var o = t.split('%>')
            return o[1] ? (n(e.trim(o[0])), i(o[1])) : void i(o[0])
          }),
            r.push('return ret}')
          var o = new Function('data', r.join('\n')),
            a = { _: e },
            c = function (t) {
              return o(e.extend({}, a, t))
            }
          return c
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      ;(e.sum = function (t) {
        return e.reduce(
          t,
          function (e, t) {
            return e + t
          },
          0
        )
      }),
        (e.max = function (t, n) {
          var i = -1,
            r = -(1 / 0)
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e > r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        }),
        (e.min = function (t, n) {
          var i = -1,
            r = 1 / 0
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e < r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        })
    }
  },
  function (e, t, n) {
    ;(function (e) {
      function i(e) {
        e = r.trim(e + '')
        var t,
          n,
          i = e.replace(c, function (e, i, r, o) {
            return (
              n && i && (t = 0),
              (t = 0) ? e : ((n = r || i), (t += !o - !r), '')
            )
          })
        if ((i = r.trim(i))) throw new Error('Invalid JSON: ' + e)
        return Function('return ' + e)()
      }
      var r = n(119),
        o = r.is
      ;(t.html = function (e, t) {
        if (o.str(e)) {
          t = t || document
          var n = t.createElement('div')
          return (n.innerHTML = e + ''), n.childNodes
        }
        return []
      }),
        (t.xml = function (t, n) {
          t += ''
          var i, r
          try {
            if (e.DOMParser) {
              var a = new DOMParser()
              i = a.parseFromString(t, 'text/xml')
            } else
              (i = new ActiveXObject('Microsoft.XMLDOM')),
                (i.async = 'false'),
                i.loadXML(t)
          } catch (c) {
            r = c
          }
          if (!r)
            if (i)
              if (i.documentElement) {
                var s = i.getElementsByTagName('parsererror')[0]
                if (s) {
                  var u = s.textContent
                  r = new Error(u)
                }
              } else {
                var l = i.parseError
                l && (r = new Error('line ' + l.line + ': ' + l.reason))
              }
            else r = new Error('parse error')
          return o.fn(n) && n(r, i), i
        })
      var a = e.JSON || {}
      t.json = a.parse || i
      var c = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  
  function (e, t, n) {
    ;(function (t) {
            var i = n(4)
      ;(e.exports = i.extend(t, i)),
        n(121)(t),
        n(122)(t),
        n(123)(t),
        n(124)(t),
        n(125)(t),
        n(127)(t),
        n(128)(t),
        t.mixin(t, t)
    }.call(t, n(119)))
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.isString = t.string),
        (e.isArray = t.array),
        (e.isArrayLike = t.arraylike),
        (e.isBoolean = t.bool),
        (e.isElement = t.element),
        (e.isEmpty = t.empty),
        (e.isFunction = t.fn),
        (e.isInteger = t.integer),
        (e.isNaN = t.nan),
        (e.isNumber = t.number),
        (e.isObject = t.object),
        (e.isPlainObject = t.plainObject),
        (e.isRegExp = t.regexp),
        (e.isString = t.string),
        (e.isUndefined = t.undef)
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = e.is
      ;(e.now = ,
        (e.constant = ,
        (e.identity = ,
        (e.random = ,
        (e.mixin = function (n, i, r) {
          var o = e.functions(i)
          if (n)
            if (t.fn(n)) {
              r = r || {}
              var a = n.prototype
              e.each(o, function (e) {
                var t = i[e]
                a[e] = function () {
                  var e = this,
                    n = [e.__value]
                  n.push.apply(n, arguments)
                  var i = t.apply(e, n)
                  return e.__chain ? ((e.__value = i), e) : i
                }
              })
            } else
              e.each(o, 
          return n
        }),
        (e.chain = ,
        (e.value = 
      var n = 0
      e.uniqueId = function (t) {
        return n++, e.toString(t) + n
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, n) {
        var i = e.size(n)
        return t < 0 && (t += i), t < 0 && (t = 0), t > i && (t = i), t || 0
      }
      function n(t, n) {
        var i = [],
          r = e.len(n)
        if (r)
          for (
            n = n.sort(;
            r--;

          ) {
            var o = n[r]
            i.push(a.splice.call(t, o, 1)[0])
          }
        return i.reverse(), i
      }
      var i = (e.forEach = e.each),
        r = e.includes,
        o = e.is,
        a = Array.prototype
      ;(e.reject = function (t, n) {
        return e.filter(t, 
      }),
        (e.without = function (t) {
          var n = e.slice(arguments, 1)
          return e.difference(t, n)
        }),
        (e.difference = function (t, n) {
          var i = []
          return (
            e.each(t, ,
            i
          )
        }),
        (e.pluck = function (t, n) {
          return e.map(t, 
        }),
        (e.nth = function (n, i) {
          ;(i = t(i, n)), (i = i || 0)
          var r
          return (r = e.isString(n) ? n.charAt(i) : n[i])
        }),
        (e.first = ,
        (e.last = function (t) {
          var n = e.len(t)
          if (n) return e.nth(t, n - 1)
        }),
        (e.asyncMap = function (e, t, n) {
          var r,
            o,
            a = [],
            c = 0
          i(e, function (i, s) {
            ;(o = !0),
              t(i, function (t, i) {
                if (!r) {
                  if ((c++, t)) return (r = !0), n(t)
                  ;(a[s] = i), c == e.length && ((r = !0), n(null, a))
                }
              })
          }),
            o || n(null)
        }),
        (e.uniq = function (t) {
          return e.uniqBy(t)
        }),
        (e.uniqBy = function (e, t) {
          var n = [],
            a = []
          return (
            o.fn(t) || (t = null),
            i(e, function (e) {
              var i = e
              t && (i = t(e)), r(a, i) || (a.push(i), n.push(e))
            }),
            n
          )
        }),
        (e.flatten = function (e) {
          var t = []
          return (
            i(e, function (e) {
              o.arraylike(e)
                ? i(e, function (e) {
                    t.push(e)
                  })
                : t.push(e)
            }),
            t
          )
        }),
        (e.union = ,
        (e.sampleSize = function (t, n) {
          for (
            var i = e.toArray(t), r = i.length, o = Math.min(n || 1, r), a = 0;
            a < r;
            a++
          ) {
            var c = e.random(a, r - 1),
              s = i[c]
            ;(i[c] = i[a]), (i[a] = s)
          }
          return (i.length = o), i
        }),
        (e.sample = ,
        (e.shuffle = ,
        (e.compact = ,
        (e.rest = ,
        (e.invoke = function () {
          var t = arguments,
            n = t[0],
            i = t[1],
            r = o.fn(i)
          return (
            (t = e.slice(t, 2)),
            e.map(n, function (e) {
              if (r) return i.apply(e, t)
              if (null != e) {
                var n = e[i]
                if (o.fn(n)) return n.apply(e, t)
              }
            })
          )
        }),
        (e.partition = function (t, n) {
          var i = e.groupBy(t, function (e, t, i) {
            var r = n(e, t, i)
            return r ? 1 : 2
          })
          return [i[1] || [], i[2] || []]
        }),
        (e.groupBy = function (t, n) {
          var i = {}
          return (
            e.each(t, function (e, t, r) {
              var o = n(e, t, r)
              ;(i[o] = i[o] || []), i[o].push(e)
            }),
            i
          )
        }),
        (e.range = function () {
          var t = arguments
          if (t.length < 2) return e.range(t[1], t[0])
          var n = t[0] || 0,
            i = t[1] || 0,
            r = t[2]
          o.number(r) || (r = 1)
          var a = i - n
          0 != r && (a /= r)
          for (var c = [], s = n, u = 0; u < a; u++) c.push(s), (s += r)
          return c
        }),
        (e.pullAt = function (t) {
          var i = e.slice(arguments, 1)
          return n(t, i)
        }),
        (e.remove = function (t, i) {
          for (var r = e.len(t) || 0, o = []; r--; ) i(t[r], r, t) && o.push(r)
          return n(t, o)
        }),
        (e.fill = function (n, i, r, o) {
          var a = e.size(n)
          ;(r = t(r, n) || 0), (o = t(o, n) || a)
          for (var c = r; c < o; c++) n[c] = i
          return n
        }),
        (e.size = function (t) {
          var n = 0
          if (t) {
            var i = t.length
            e.isInteger(i) && i >= 0
              ? (n = i)
              : e.isObject(t) && (n = e.keys(t).length)
          }
          return n
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t) {
        if (n.array(t)) return t
        var i = []
        return (
          e.toString(t).replace(r, function (e, t, n, r) {
            var a = t || e
            n && (a = r.replace(o, '$1')), i.push(a)
          }),
          i
        )
      }
      var n = e.is,
        i = e.forIn
      ;(e.only = function (t, i) {
        return (
          (t = t || {}),
          n.string(i) && (i = i.split(/ +/)),
          e.reduce(
            i,
            
            {}
          )
        )
      }),
        (e.values = ,
        (e.pick = function (t, r) {
          if (!n.fn(r))
            return e.pick(t, 
          var o = {}
          return (
            i(t, ,
            o
          )
        }),
        (e.functions = function (t) {
          return e.keys(
            e.pick(t, function (e) {
              return n.fn(e)
            })
          )
        }),
        (e.mapKeys = function (e, t) {
          var n = {}
          return (
            i(e, ,
            n
          )
        }),
        (e.mapObject = e.mapValues = function (e, t) {
          var n = {}
          return (
            i(e, ,
            n
          )
        }),
        (e.get = function (n, i) {
          if (((i = t(i)), i.length)) {
            var r = e.every(i, function (e) {
              if (null != n) return (n = n[e]), !0
            })
            if (r) return n
          }
        }),
        (e.has = function (i, r) {
          if (((r = t(r)), r.length)) {
            var o = e.every(r, function (e) {
              if (null != i && n.owns(i, e)) return (i = i[e]), !0
            })
            if (o) return !0
          }
          return !1
        }),
        (e.set = function (i, r, o) {
          r = t(r)
          var a = i
          return (
            e.every(r, function (e, t) {
              if (n.oof(a)) {
                if (t + 1 != r.length) {
                  var i = a[e]
                  if (null == i) {
                    var i = {}
                    ~~e == e && (i = [])
                  }
                  return (a = a[e] = i), !0
                }
                a[e] = o
              }
            }),
            i
          )
        }),
        (e.create = (function () {
                    return function (n, i) {
            return (
              'object' != typeof n && (n = null),
              (t.prototype = n),
              e.extend(new t(), i)
            )
          }
        })()),
        (e.defaults = function () {
          var t = arguments,
            i = t[0],
            r = e.slice(t, 1)
          return (
            i &&
              e.each(r, function (t) {
                e.mapObject(t, 
              }),
            i
          )
        }),
        (e.isMatch = function (e, t) {
          var n = !0
          return (
            (e = e || {}),
            i(t, ,
            n
          )
        }),
        (e.toPlainObject = function (e) {
          var t = {}
          return (
            i(e, function (e, n) {
              t[n] = e
            }),
            t
          )
        }),
        (e.invert = function (e) {
          var t = {}
          return (
            i(e, ,
            t
          )
        })
      var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        o = /\\(\\)?/g
    }
  },
  function (e, t, n) {
    e.exports = function (e) {
      function t(e) {
        function n() {
          var t = arguments,
            n = t[0]
          if (!i.has(n)) {
            var r = e.apply(this, t)
            i.set(n, r)
          }
          return i.get(n)
        }
        var i = new t.Cache()
        return (n.cache = i), n
      }
      var i = e.is,
        r = e.slice
      ;(e.bind = function (t, n) {
        if (i.string(n)) {
          var o = t
          ;(t = o[n]), (n = o)
        }
        if (!i.fn(t)) return t
        var a = r(arguments, 2)
        return (
          (n = n || this),
          function () {
            return t.apply(n, e.flatten([a, arguments]))
          }
        )
      }),
        (e.inherits = function (t, n) {
          ;(t.super_ = n),
            (t.prototype = e.create(n.prototype, { constructor: t }))
        }),
        (e.delay = function (t, n) {
          var i = e.slice(arguments, 2)
          return setTimeout( n)
        }),
        (e.before = function (e, t) {
          return function () {
            if (e > 1) return e--, t.apply(this, arguments)
          }
        }),
        (e.once = ,
        (e.after = function (e, t) {
          return function () {
            return e > 1 ? void e-- : t.apply(this, arguments)
          }
        }),
        (e.throttle = function (t, n, i) {
          return (
            (n = n || 0),
            (i = e.extend({ leading: !0, trailing: !0, maxWait: n }, i)),
            e.debounce(t, n, i)
          )
        }),
        (e.debounce = function (t, n, i) {
          function r() {
            return !(p - l > n) && !(u && p - f > u)
          }
          function o(t, n, i) {
            return (l = e.now()), t.apply(n, i)
          }
                    function c() {
            p = e.now()
            var c = r()
            f = p
            var u = this,
              l = arguments
            a(),
              c
                ? i.trailing &&
                  (s = e.delay( n))
                : o(t, u, l)
          }
          ;(n = n || 0), (i = e.extend({ leading: !1, trailing: !0 }, i))
          var s,
            u = i.maxWait,
            l = 0,
            f = 0,
            p = e.now()
          return i.leading || (l = p), (c.cancel = a), c
        }),
        (t.Cache = n(126)),
        (e.memoize = t),
        (e.wrap = function (e, t) {
          return function () {
            var n = [e]
            return n.push.apply(n, arguments), t.apply(this, n)
          }
        }),
        (e.curry = function (t) {
          function n(r) {
            return function () {
              var o = r.concat(e.slice(arguments))
              return o.length >= i ? ((o.length = i), t.apply(this, o)) : n(o)
            }
          }
          var i = t.length
          return n([])
        })
    }
  },
  function (e, t, n) {
        var r = n(4),
      o = r.is
    e.exports = i
    var a = i.prototype
    ;(a.has = ,
      (a.get = ,
      (a.set = ,
      (a['delete'] = 
  },
  function (e, t) {
    e.exports = function (e) {
      function t(t, i) {
        t = n(t) || ' '
        var r = Math.floor(i / t.length) + 1
        return e.repeat(t, r).slice(0, i)
      }
      function n(e) {
        return e || 0 == e ? e + '' : ''
      }
      e.tostr = e.toString = n
      var i = e.indexOf
      ;(e.split = ,
        (e.capitalize = function (e) {
          return (
            (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
          )
        }),
        (e.upperFirst = function (e) {
          return (e = n(e)), e.charAt(0).toUpperCase() + e.substr(1)
        }),
        (e.lowerFirst = ,
        (e.camelCase = function (t) {
          t = n(t)
          var i = t.split(/[^\w]|_+/)
          return (
            (i = e.map(i, ),
            e.lowerFirst(i.join(''))
          )
        }),
        (e.startsWith = ,
        (e.endsWith = function (t, n) {
          return (n += ''), n == e.slice(t, e.len(t) - e.len(n))
        }),
        (e.toLower = e.lower = function (e) {
          return n(e).toLowerCase()
        }),
        (e.toUpper = e.upper = ,
        (e.repeat = function (t, n) {
          return e
            .map(e.range(n), function () {
              return t
            })
            .join('')
        }),
        (e.padStart = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return t(r, o) + e
        }),
        (e.padEnd = function (e, i, r) {
          ;(e = n(e)), (i = i || 0)
          var o = i - e.length
          return e + t(r, o)
        })
      var r = { '&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&#39' }
      ;(e.escape = ,
        (e.template = function (t) {
          function n(t) {
            var n = e.first(t)
            if ('=' === n || '-' === n) {
              var i = e.slice(t, 1)
              '-' === n && (i = '_.escape(' + i + ')'), r.push('ret += ' + i)
            } else r.push(t)
          }
          function i(e) {
            r.push(
              'ret += "' +
                e
                  .replace(/('|"|\\)/g, '\\$1')
                  .replace(/\r/g, '\\r')
                  .replace(/\n/g, '\\n') +
                '"'
            )
          }
          var r = ['with(data) {var ret = ""']
          e.each(e.split(t, '<%'), function (t, r) {
            var o = t.split('%>')
            return o[1] ? (n(e.trim(o[0])), i(o[1])) : void i(o[0])
          }),
            r.push('return ret}')
          var o = new Function('data', r.join('\n')),
            a = { _: e },
            c =           return c
        })
    }
  },
  function (e, t) {
    e.exports = function (e) {
      ;(e.sum = ,
        (e.max = function (t, n) {
          var i = -1,
            r = -(1 / 0)
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e > r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        }),
        (e.min = function (t, n) {
          var i = -1,
            r = 1 / 0
          return (
            (n = n || e.identity),
            e.each(t, function (e, t) {
              ;(e = n(e)), e < r && ((r = e), (i = t))
            }),
            i > -1 ? t[i] : r
          )
        })
    }
  },
  function (e, t) {
    ;(function (n) {
      function i(e, n) {
        n = n || a
        var i,
          c = []
        if (e && n.getElementsByTagName) {
          if (((e += ''), o.test(e))) i = n.getElementsByTagName(e)
          else {
            var s = e.substr(1)
            if (a == n && '#' == e.charAt(0) && o.test(s)) {
              var u = a.getElementById(s)
              if (u) return [u]
            } else {
              var l = t.custom || r
              try {
                i = l(e, n)
              } catch (f) {}
            }
          }
          if (i) for (var p = i.length || 0, d = 0; d < p; d++) c.push(i[d])
        }
        return c
      }
            e.exports = t = i
      var o = /^[-\w]+$/,
        a = n.document
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t) {
    function n(e) {
      e = e || 7
      var n = Math.random().toString(35).substr(2, e)
      return t.prefix + n
    }
    ;(e.exports = t = n), (t.prefix = '')
  },
  
  function (e, t, n) {
    ;(function (e) {
      var t = n(107),
        i = n(108),
        r = n(118),
        o = i.is,
        a = 'boolean number string function array date regexp object error'.split(
          ' '
        )
      t.extend({
        noop: i.noop,
        toArray: 
        each: function (e, t) {
          return (
            i.each(e, ,
            e
          )
        },
        grep: i.filter,
        inArray: i.includes,
        isArray: o.arr,
        isEmptyObject: o.empty,
        isFunction: o.fn,
        isNumeric: o.num,
        isPlainObject: o.hash,
        isWindow: 
        makeArray: i.slice,
        map: i.map,
        merge: function (e, t) {
          e = e || []
          var n = e.length || 0
          return (
            i.each(t, function (t, i) {
              e.length++, (e[n + i] = t)
            }),
            e
          )
        },
        now: i.now,
        parseHTML: r.html,
        parseJSON: r.json,
        parseXML: r.xml,
        proxy: i.bind,
        trim: i.trim,
        type: function (e) {
          var t = o._class(e)
          return i.includes(a, t) || (t = 'object'), t
        }
      })
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    function i(e, t, n) {
      e.addEventListener
        ? e.addEventListener(t, n, !1)
        : e.attachEvent && e.attachEvent('on' + t, n)
    }
        var o = n(107),
      a = n(108),
      c = a.is,
      s = 'events'
    ;(o.Event = function (e, t) {
      return this instanceof o.Event
        ? ((e = e || {}),
          'string' == typeof e && (e = { type: e }),
          (this.originalEvent = e),
          (this.type = e.type),
          (this.target = e.target || e.srcElement),
          void (t && o.extend(this, t)))
        : new o.Event(e, t)
    }),
      o.extend({
        one: function (e, t, n, i, r) {
          if (c.fn(n)) {
            var s = a.once(function () {
              o.off(e, t, s), (s = null), n.apply(this, arguments)
            })
            return o.on(e, t, s, i, r)
          }
        },
        on: function (e, t, n, r, a) {
          var c = o._data(e, s),
            u = t.split('.')
          t = u[0]
          var l = u[1]
          c || ((c = {}), o._data(e, s, c))
          var f = o._data(e, 'handler')
          f ||
            ((f = ,
            o._data(e, 'handler', f)),
            c[t] || ((c[t] = []), i(e, t, f))
          var p = c[t],
            d = { handler: n, namespace: l, selector: a, type: t }
          p.push(d)
        },
        trigger: function (e, t) {
          var n = o._data(e, s)
          'string' == typeof t && (t = o.Event(t, { target: e }))
          var i = n[t.type]
          if (i) {
            i = i.slice()
            for (var r = i.length, a = 0; a < r; a++) {
              var c = i[a],
                u = c.handler.call(e, t)
              !1 === u &&
                ((t = t.originalEvent || t),
                t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
                t.stopPropagation && t.stopPropagation(),
                (t.cancelBubble = !0))
            }
          }
        },
        off: function (e, t, n) {
          var i = o._data(e, s)
          if (i)
            if (((t = t || ''), t && '.' != t.charAt(0))) {
              var a = t.split('.'),
                c = a[0],
                u = a[1],
                l = i[c]
              if (l) {
                for (var f = l.length - 1; f >= 0; f--) {
                  var p = l[f],
                    d = !0
                  u && u != p.namespace && (d = !1),
                    n && n != p.handler && (d = !1),
                    d && l.splice(f, 1)
                }
                i[c].length || (r(e, c, o._data(e, 'handler')), (i[c] = null))
              }
            } else for (var h in i) o.off(e, h + t, n)
        }
      }),
      o.fn.extend({
        eventHandler: function (e, t, n) {
          return e
            ? ((e = e.split(' ')),
              this.each(function () {
                for (var i = 0; i < e.length; i++) n(this, e[i], t)
              }))
            : this.each(
        },
        on: function (e, t) {
          return this.eventHandler(e, t, o.on)
        },
        one: function (e, t) {
          return this.eventHandler(e, t, o.one)
        },
        off: function (e, t) {
          return this.eventHandler(e, t, o.off)
        },
        trigger:       })
  },
  function (e, t, n) {
    ;(function (e) {
      function t() {
        return s && 'complete' == s.readyState
          ? ((o.ctx = r), o.open())
          : (r(s).on(a, i), void r(e).on(c, i))
      }
      function i() {
        r(e).off(a, i), r(s).off(c, i), (o.ctx = r), o.open()
      }
      var r = n(107),
        o = n(28)(),
        a = 'DOMContentLoaded',
        c = 'load',
        s = e.document
      r.fn.extend({
        ready:       }),
        setTimeout(t)
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    var i = n(107),
      r = n(108),
      o = r.is
    i.fn.extend({
      toArray: 
      pushStack: function (e) {
        var t = i(e)
        return (t.prevObject = this), (t.context = this.context), t
      },
      get: function (e) {
        return o.num(e)
          ? e > 0
            ? this[e]
            : this.get(e + this.length)
          : this.toArray()
      },
      each: function (e) {
        return (
          r.each(this, function (t, n) {
            return e.call(t, n, t, this)
          }),
          this
        )
      },
      map: function (e) {
        var t = r.map(this, function (t, n) {
          return e.call(t, n, t, this)
        })
        return this.pushStack(t)
      },
      filter: function (e) {
        var t = r.filter(this, 
        return this.pushStack(t)
      },
      end: 
      eq: function (e) {
        return e < 0 ? this.eq(e + this.length) : this.pushStack([this[e]])
      },
      first: 
      last: 
      slice: function (e, t) {
        var n = r.slice(this, e, t)
        return this.pushStack(n)
      },
      find: function (e) {
        var t = r.map(this, 
        return this.pushStack(r.union.apply(r, t))
      }
    })
  },
  function (e, t, n) {
    ;(function (e) {
      var t = n(108),
        i = n(107),
        r = n(137),
        o = (n(130), t.is, new r()),
        a = new r(),
        c =
          e.getComputedStyle ||
                i.extend({
        expando: a.expando,
        access: function (e, t, n, r, o) {
          var a = 0
          if (n && 'object' == typeof n)
            for (a in n) i.access(e, t, a, n[a], !0)
          else if (void 0 === r) {
            var c
            if ((e[0] && (c = t(e[0], n)), !o)) return c
          } else for (a = 0; a < e.length; a++) t(e[a], n, r)
          return e
        },
        attr: function (e, t, n) {
          return void 0 === n
            ? e.getAttribute(t)
            : null === n
            ? e.removeAttribute(t)
            : void e.setAttribute(t, '' + n)
        },
        text: function (e, t, n) {
          if (void 0 !== n) return (e.textContent = '' + n)
          var r = e.nodeType
          if (3 == r || 4 == r) return e.nodeValue
          if ('string' == typeof e.textContent) return e.textContent
          var o = ''
          for (e = e.firstChild; e; e = e.nextSibling) o += i.text(e)
          return o
        },
        html: function (e, t, n) {
          return void 0 === n ? e.innerHTML : void (e.innerHTML = '' + n)
        },
        prop: function (e, t, n) {
          return void 0 === n ? e[t] : void (e[t] = n)
        },
        css: function (e, t, n) {
          var i = e.style || {}
          if (void 0 === n) {
            var r = i[t]
            return r ? r : c(e, null)[t]
          }
          i[t] = n
        },
        data: function (e, t, n) {
          if (void 0 !== n) o.set(e, t, n)
          else {
            if (!t || 'object' != typeof t)
              return t ? o.get(e, t) : o.getData(e, !0)
            for (var r in t) i.data(e, r, t[r])
          }
        },
        _data: function (e, t, n) {
          if (void 0 !== n) a.set(e, t, n)
          else {
            if (!t || 'object' != typeof t) return a.get(e, t)
            for (var r in t) i._data(e, r, t[r])
          }
        },
        removeData:       }),
        i.fn.extend({
          text: function (e) {
            return i.access(this, i.text, null, e)
          },
          html: 
          attr: function (e, t) {
            return i.access(this, i.attr, e, t)
          },
          prop: function (e, t) {
            return i.access(this, i.prop, e, t)
          },
          css: function (e, t) {
            return i.access(this, i.css, e, t)
          },
          data: function (e, t) {
            return i.access(this, i.data, e, t)
          },
          _data: function (e, t) {
            return i.access(this, i.data, e, t)
          },
          removeData: function (e) {
            return i.access(this, i.removeData, e, void 0, !0)
          }
        })
    }.call(
      t,
      (function () {
        return this
      })()
    ))
  },
  function (e, t, n) {
    function i() {
      ;(this.expando = r()), (this.cache = [null])
    }
    var r = n(130)
    e.exports = i
    var o = i.prototype
    ;(o.get = function (e, t) {
      var n = this.getData(e)
      return null == t ? n : n[t]
    }),
      (o.set = function (e, t, n) {
        var i = this.getData(e, !0)
        return (i[t] = n), e
      }),
      (o.remove = function (e, t) {
        if (void 0 === t) this.discard(e)
        else {
          var n = this.getData(e)
          delete n[t]
        }
        return e
      }),
      (o.getData = function (e, t) {
        var n = {}
        if (e) {
          var i = e[this.expando],
            r = this.cache
          if (i) return r[i]
          t && ((e[this.expando] = r.length), r.push(n))
        }
        return n
      }),
      (o.discard = function (e) {
        e && e[this.expando] && (e[this.expando] = void 0)
      })
  },
  function (e, t, n) {
    var i = (n(108), n(107))
    ;(i.buildFragment = function (e, t) {
      t = t || document
      for (var n, r = t.createDocumentFragment(), o = 0; (n = e[o++]); ) {
        var a = []
        if ('string' == typeof n)
          if (n.indexOf('<') == -1) a.push(t.createTextNode(n))
          else {
            var c = document.createElement('div')
            ;(c.innerHTML = n), i.toArray(c.childNodes, a)
          }
        else 'object' == typeof n && (n.nodeType ? a.push(n) : i.toArray(n, a))
      }
      for (var s, o = 0; (s = a[o++]); ) r.appendChild(s)
      return r
    }),
      i.fn.extend({
        domManip: function (e, t) {
          return this.each(function () {
            var n = i.buildFragment(e)
            t.call(this, n)
          })
        },
        remove: function () {
          return this.domManip(arguments, 
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            e.parentNode && e.parentNode.insertBefore(e, this)
          })
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            e.parentNode && e.parentNode.insertBefore(e, this.nextSibling)
          })
        },
        append: function () {
          return this.domManip(arguments, 
        }
      })
  },
  function (e, t, n) {
    var i = n(107),
      r = n(108),
      o = 'display'
    r.each('show hide toggle'.split(' '), function (e) {
      i.fn[e] = function () {
        return this.each(function (t, n) {
          var r = e,
            a = i.css(n, o),
            c = 'none' == a
          if (
            ('toggle' == e && ((r = 'hide'), c && (r = 'show')),
            'show' == r && c)
          ) {
            var s = i._data(n, o) || ''
            i.css(n, o, s)
          } else 'hide' != r || c || (i._data(n, o, a), i.css(n, o, 'none'))
        })
      }
    })
  },
  function (e, t, n) {
    ;(function (e) {
      function t(e, t, n) {
        function i(e) {
          if (a) {
            if (n) {
              var t = { status: 200 }
              e && (t = { status: 0 }), n(e, t)
            }
            ;(a.onload = a.onerror = a.onreadystatechange = null),
              o.removeChild(a),
              (a = null)
          }
        }
        function r() {
          ;(a.async = !0),
            (a.src = e),
            (a.onload = a.onerror = a.onreadystatechange = function (e) {
              var t = a.readyState
              e && 'error' == e.type
                ? i('error')
                : (t && !/loaded|complete/.test(t)) || i(null)
            }),
            o.appendChild(a)
        }
        var o = c('head')[0],
          a = document.createElement('script')
        return {
          abort: function () {
            ;(n = null), i()
          },
          send: r
        }
      }
      function i(n, i, a) {
        'function' == typeof i && ((a = i), (i = {}))
        var s,
          u = !1,
          f = function (e, t, n) {
            u || ((a = a || c.noop), (u = !0), a(e, t, n))
          },
          p = i.dataType || 'text',
          d = !1
        if ('jsonp' == p) {
          d = !0
          var h = i.jsonp || l.jsonp,
            m = i.jsonpCallback || [c.expando, c.now(), Math.random()].join('_')
          m = m.replace(/[^\w|$]/g, '')
          var g = h + '=?',
            v = c.extend({}, i.data)
          n.indexOf(g) != -1 ? n.replace(g, h + '=' + m) : (v[h] = m),
            i.cache || (v._ = c.now()),
            (n = o(n, v)),
            (p = 'script'),
            (e[m] = function (t) {
              f(null, { status: 200 }, t), (e[m] = null)
            })
        }
        'script' == p
          ? (s = t(n, i, d ? null : f))
          : /html|text/.test(p) && (s = r(n, i, f)),
          s.send(),
          i.timeout &&
            setTimeout(function () {
              s.abort(),
                f('timeout', {
                  status: 0,
                  readyState: 0,
                  statusText: 'timeout'
                }),
                d && (window[m] = c.noop)
            }, i.timeout)
      }
      function r(e, t, n) {
        function i() {
          if (a) {
            var i = t.type || 'GET'
            ;(e = o(e, t.data)),
              a.open(i, e, !n.async),
              s in a && ((u.cors = !0), (a[s] = !0))
            var r = t.headers
            if (r) for (var c in r) a.setRequestHeader(c, r[c])
            a.send(t.data || null)
            var l = function () {
              l &&
                4 === a.readyState &&
                ((l = void 0), n && n(null, a, a.responseText))
            }
            !1 === t.async
              ? l()
              : 4 === a.readyState
              ? setTimeout(l)
              : (a.onreadystatechange = l)
          }
        }
        function r() {
          a && ((n = null), a.abort())
        }
        var a = l.xhr()
        return { send: i, abort: r }
      }
      function o(e, t) {
        if ((t = a.stringify(t))) {
          ;-1 == e.indexOf('?') && (e += '?')
          var n = e.charAt(e.length - 1)
          '&' != n && '?' != n && (e += '&'), (e += t)
        }
        return e
      }
      var a = n(26),
        c = n(107),
        s = (n(130), 'withCredentials'),
        u = {}
      c.support = u
      var l = {
        xhr: function () {
          try {
            return window.XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject('Microsoft.XMLHTTP')
          } catch (e) {}
        },
        jsonp: 'callback'
      }
      ;(c.ajaxSetting = l),
        (c.ajax = function (e) {
          var t = {}
          return (
            (e = e || {}),
            i(e.url, e, function (n, i, r) {
              i = i || {}
              var o = {
                status: i.status,
                statusText: i.statusText,
                readyState: i.readyState
              }
              c.extend(t, o)
              var a = 'success'
              n || 200 != t.status
                ? ((a = 'error'),
                  'timeout' == n && (a = 'timeout'),
                  e.error && e.error(t, a, i.statusText))
                : e.success && e.success(r || i.responseText, a, t),
                e.complete && e.complete(t, a)
            }),
            t
          )
        }),
        c.each(['get', 'post'], function (e, t) {
          c[t] = function (e, n, i, r) {
            'function' == typeof n && ((r = i), (i = n), (n = void 0)),
              c.ajax({ url: e, type: t, dataType: r, data: n, success: i })
          }
        })
    }.call(
      t,
      (()
    ))
  },
  function (e, t, n) {
    var i = n(107),
      r = n(108)
    r.each('width height'.split(' '), function (e) {
      r.each(['inner', 'outer', ''], function (t) {
        var n = e,
          r = e.charAt(0).toUpperCase() + e.substr(1)
        t && (n = t + r),
          (i.fn[n] = function () {
            var e = this[0]
            if (e) {
              var n = 0
              return (
                (n = 'outer' == t ? e['offset' + r] : e['offset' + r]),
                parseFloat(n) || 0
              )
            }
          })
      })
    }),
      (i.fn.offset = function () {
        var e = this[0]
        if (e) {
          var t = e.getBoundingClientRect()
          return r.only(t, 'left top')
        }
      })
  },
  function (e, t, n) {
        function r(e) {
      return o.trim(e.className).split(/\s+/)
    }
    var o = n(108),
      a = n(107),
      c = i.prototype
    o.extend(c, {
      add: function () {
        var e = r(this)
        this.className = o.union(e, arguments).join(' ')
      },
      remove: function () {
        var e = r(this)
        this.className = o.difference(e, arguments).join(' ')
      },
      contains: 
      toggle: function (e, t) {
        var n = c.contains.call(this, e),
          i = 'add'
        1 != t && (n || 0 == t) && (i = 'remove'), c[i].call(this, e)
      }
    }),
      o.each('add remove toggle'.split(' '), function (e) {
        a.fn[e + 'Class'] = function () {
          var t = arguments
          return this.each(
        }
      }),
      (a.fn.hasClass = function (e) {
        return o.every(this, 
      })
  },
  function (e, t, n) {
        var r = n(108),
      o = n(107),
      a = {
        children: function (e) {
          for (var t = [], n = e.firstChild; n; n = n.nextSibling)
            1 == n.nodeType && t.push(n)
          return t
        },
        parent:       }
    r.each('children parent'.split(' '), function (e) {
      o.fn[e] = function () {
        return i(
          r.map(this, 
        )
      }
    })
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    function i() {
      window._smConf = {
        organization: 'BsHKz7OMBibZYAoy3ZCA',
        staticHost: 'report.passport.360.cn',
        apiHost: 'report.passport.360.cn',
        apiPath: ''
      }
      var e = (function () {
          var e = _smConf.staticHost + '/static2',
            t = 'https:' === document.location.protocol,
            n = t ? 'https://' : 'http://',
            i = '/fpv2.js',
            r = n + _smConf.staticHost + i,
            o = navigator.userAgent.toLowerCase(),
            a = /windows\s(?:nt\s5.1)|(?:xp)/.test(o),
            c = /msie\s[678]\.0/.test(o)
          return t && a && c && (r = n + e + i), r
        })(),
        t = document.createElement('script'),
        n = document.getElementsByTagName('script')[0]
      ;(t.src = e), n.parentNode.insertBefore(t, n)
    }
    var r = n(14).getLogger('shumei'),
      o = !1
    ;(t.load = function () {
      o || ((o = !0), r.debug('load'), i())
    }),
      (t.getShumeiDeviceId = function () {
        var e
        try {
          e = SMSdk.getDeviceId()
        } catch (t) {
          e = ''
        }
        return e
      })
  },
  ,
  ,
  function (e, t, n) {
    ;(function (e) {
      !(function () {
        function t() {
          var e = i()
          e < 8 ||
            setTimeout(function () {
              r.debug('addStatisticsForSafe')
              var e = document.createElement('iframe'),
                t = document.getElementsByTagName('body')[0]
              ;(e.width = 0),
                (e.height = 0),
                (e.style.display = 'none'),
                (e.id = 'quc_hijack_monitor'),
                (e.src = location.protocol + '//s.360.cn/0kee/a.html'),
                t.appendChild(e)
            }, 3e3)
        }
        function i(e) {
          var t = new RegExp('MSIE (\\d+\\.\\d+)')
          t.test(e || navigator.userAgent)
          var n = parseFloat(RegExp.$1)
          return n
        }
        var r = n(14).getLogger('core'),
          o = n(159),
          a = n(26),
          c = n(40),
          s = n(105)
        r.sdk.prefix = 'quc:jssdk:'
        var u = (window.myQHPass = {
          VERSION: '6.8.4',
          $: jQuery,
          _: e,
          qs: a,
          Url: c,
          utils: {},
          plugin: {},
          ui: {},
          tool: o,
          log: r.getLogger('qhpass')
        })
        ;(u.version = u.VERSION),
          r.debug('version', u.version),
          (u.isI360 = ,
          (u.DEBUG = !1)
        var l = n(161)
        e.includes(['i.360.cn', 'e.360.cn'], location.host) &&
          l.init({
            id: 360,
            uin: 'crash',
            random: 1,
            repeat: 2,
            url: '//i.360.cn/clogo.gif',
            offlineLog: !1
          }),
          (window.QUC = window.QUC || {}),
          (QUC.t6 = +new Date()),
          (u.init = function (i) {
            ;(window.QUC = window.QUC || {}),
              (QUC.t7 = +new Date()),
              r.debug('init', i)
            var a = u.$
            if (
              ('string' == typeof i && (i = { src: i }),
              a.isPlainObject(i) && u.setConfig(i),
              !u._isInit)
            ) {
              u.getConfig('disableSecurityCheck') || t()
              var c = n(162)
              c = c.replace(/__now__/g, e.now())
              var l = u.getConfig('primaryColor')
              l && (c = c.replace(/#36B447/gi, l)),
                s.addStyle(c),
                (u._isInit = !0),
                u.events.trigger('init.core'),
                u.events.on('afterShow.* DOMUpdated.*', function (e, t) {
                  setTimeout(function () {
                    u.utils.initPlaceholder(a(t).find('[placeholder]')),
                      r.debug('try add placeholder')
                  }, 0)
                }),
                o.bindGlobalEvent()
            }
          })
      })()
    }.call(t, n(2)))
  },
  function (e, t, n) {
    ;(function (e, i) {
      var r = n(14).getLogger('tool'),
        o = n(104),
        a = n(40),
        c = t
      ;(c.bindGlobalEvent = e.once(function () {
        var e = $(document)
        e.on('click', ,
          e.on('click', '.quc-input-zone', ,
          e.on('click', '.quc-select', 
      })),
        (c.initMobileStates = function (t) {
          var n = t
          n.model.prepareMobileState().then(
            function (t) {
              function i(t) {
                var i = e.find(o, 
                if (i) {
                  var r = i.state
                  e.size(i.state) > 5 && (r = e.slice(i.state, 0, 4) + '...')
                  var a = n.$el.find('.quc-activeState')
                  a.text(r).data('quc-area-code', i.zone),
                    a
                      .parents('.quc-field')
                      .find('input')
                      .data({ regExp: i.pattern, areaCode: i.zone })
                }
              }
              var r = n.$el.find('.quc-mobile-Statelist'),
                o = t.data
              e.each(o, function (e) {
                var t = $('<li>')
                t.addClass('quc-option'), t.data('areaCode', e.zone)
                var n = $('<span>').text(e.zone),
                  i = $('<span>').addClass('quc-right').text(e.state)
                t.append(i).append(n), r.append(t)
              }),
                r.on('click', '.quc-option', function (e) {
                  var t = $(this),
                    n = t.data('areaCode')
                  i(n)
                })
              var a = e.first(o)
              a && i(a.zone),
                setTimeout(function () {
                  n.$el.find('.quc-list-item').eq(0).click(),
                    n.$el.find('.quc-mobile-Statelist').hide()
                }, 0)
            },
                      )
        }),
        (c.initView = function (t) {
          function n(e) {
            var n = myQHPass.utils.getErrorType(e)
            'mobile' === n &&
              'signIn' === t.model.name &&
              myQHPass.getConfig('signIn.normal.onlyMobile') &&
              (n = 'userName')
            var r = i.find('[name=' + n + ']'),
              o = r.parents('.quc-field')
            return o
          }
          var i = t.$el,
            o = $('<input>')[0]
          i
            .on('submit', '.quc-form', function () {
              var n = $(this),
                o = i.find('[type=submit]')
              c.showButtonLoading(o),
                t.model.one('invalid', function () {
                  c.clearButtonLoading(o)
                })
              var a = n.serializeArray(),
                s = {}
              e.each(a, ,
                n.find('[type=checkbox]').each(function () {
                  var e = $(this)
                  s[e.attr('name')] = e.prop('checked')
                })
              var u = i.find('.quc-activeState')
              if (u[0]) {
                var l = u.parents('.quc-field'),
                  f = l.find('input'),
                  p = f.data('regExp'),
                  d = f.data('areaCode'),
                  h = { mobileNumber: f.val(), regExp: p, areaCode: d }
                s.mobile = h
              }
              var m = !!i.find('[name=captcha]:visible')[0]
              ;(s.isNeedCheckCaptcha = m),
                r.debug('submit', s),
                e.forIn(s, 
              try {
                t.model.submit()
              } catch (g) {
                r.error('submit crash', g.message)
              }
              return !1
            })
            .on(null === o.oninput ? 'input' : 'keyup', 'input', function () {
              var e = $(this).parents('.quc-field')
              c.setFieldStatus(e), c.clearTip(i)
            }),
            t.model.on('invalid', function (r, o) {
              o = o || {}
              var a = o.errmsg,
                s = o.field
              e.isEmpty(o.field) && (s = n(o.errno)),
                s[0] ? c.setFieldStatus(s, 'error', a) : c.showTipError(a, i),
                t.model.one('afterShow.changeType', 
            })
        }),
        (c.setFieldStatus = function (e, t, n) {
          var i = 'quc-form-item-error',
            r = 'quc-form-item-has-error'
          if ((e.removeClass(r), e.find('.' + i).remove(), 'error' === t)) {
            e.addClass(r).show()
            var o = $('<div>').addClass(i)
            o.html(n), e.find('.quc-form-item-content').append(o)
          }
        }),
        (c.gotoPage = ,
        (c.showTipSuccess = function (e, t) {
          c.clearTip(t)
          var n = $(t).find('.quc-tip')
          e && (n.addClass('quc-tip-success'), n.append(e).show())
        }),
        (c.showTipError = function (e, t) {
          c.clearTip(t)
          var n = $(t).find('.quc-tip')
          e &&
            (n.addClass('quc-tip-error'),
            n
              .append('<i class="quc-icon quc-icon-warning">&#xe696;</i>')
              .append(e)
              .show())
        }),
        (c.clearTip = function (e) {
          var t = $(e).find('.quc-tip')
          t.empty()
            .removeClass('quc-tip-error')
            .removeClass('quc-tip-success')
            .hide()
        }),
        (c.showButtonLoading = function (e) {
          $(e).prop('disabled', !0)
          var t = $(e).val()
          $(e).val(t + '\u4e2d...')
        }),
        (c.clearButtonLoading = function (e) {
          $(e).prop('disabled', !1)
          var t = $(e).val()
          $(e).val(t.replace('\u4e2d...', ''))
        }),
        (c.tryHandleAbnormalPassword = function (e, t) {
          return new i(function (i, a) {
            if (e) {
              var c = e.weakInfo
              if (c) {
                if ((t = c.password || t)) {
                  var s = myQHPass.validate.checkPasswordFrontendSync({
                    password: t
                  })
                  ;(c.checkResult = s),
                    (c.password = t),
                    s.reason && (c.isWeak = !0)
                }
                r.debug('weak info', c)
                var u = c.isLeak && c.noticeWhenLeak,
                  l = c.isWeak && c.noticeWhenWeak
                if ((c.ignoreWeak && (l = !1), u || l)) {
                  var f,
                    p = {
                      onconfirm: function () {
                        r.debug('confirm'),
                          f.hide(!0),
                          i({ shouldChangePassword: !0 })
                      },
                      oncancel: function () {
                        r.debug('cancel'),
                          f.hide(!0),
                          u
                            ? c.limitWhenLeak
                              ? a(
                                  new Error(
                                    'user reject change password and not login'
                                  )
                                )
                              : i()
                            : l &&
                              (c.limitWhenWeak
                                ? a(
                                    new Error(
                                      'user reject change password and not login'
                                    )
                                  )
                                : i())
                      },
                      confirmButtonText: o.t('\u4fee\u6539\u5bc6\u7801'),
                      cancelButtonText: o.t('\u53d6\u6d88'),
                      title: o.t('\u5e10\u53f7\u5f02\u5e38'),
                      content: o.t('weak password warning')
                    }
                  u && (p.content = o.t('leak password warning'))
                  var d = n(160)
                  f = new myQHPass.utils.Panel({
                    type: 'message',
                    title: p.title,
                    content: d,
                    status: 'warning'
                  })
                  var h = f.$el
                  return (
                    h
                      .find('.quc-panel-message-inner')
                      .html(
                        '<i class="quc-icon quc-icon-sad"></i>' + p.content
                      ),
                    h.find('.quc-panel-close').on('click', p.oncancel),
                    h
                      .find('.quc-button-cancel')
                      .text(p.cancelButtonText)
                      .on('click', p.oncancel),
                    h
                      .find('.quc-button-confirm')
                      .text(p.confirmButtonText)
                      .on('click', p.onconfirm),
                    void f.show()
                  )
                }
              }
            }
            i()
          })
        }),
        (c.checkBindMobile = function (e) {
          return i.resolve(myQHPass.sync.bindMobileCheck(e)).then(function (e) {
            return (
              r.debug('bind mobile check result', e),
              (e = e || {}),
              new i(function (t, i) {
                function r() {
                  s.hide(!0), i(new Error('user reject override mobile'))
                }
                if (0 == e.errno) {
                  var a = e.status
                  if (2 == a) {
                    var c = n(160),
                      s = new myQHPass.utils.Panel({
                        type: 'message',
                        title: ' ',
                        content: c
                      }),
                      u = s.$el
                    u
                      .find('.quc-panel-message-inner')
                      .html(o.t('override phone warning')),
                      u
                        .find('.quc-panel-title')
                        .html(o.t('\u64cd\u4f5c\u63d0\u9192')),
                      u.find('.quc-panel-close').on('click', r),
                      u
                        .find('.quc-button-cancel')
                        .text('\u53d6\u6d88')
                        .on('click', r),
                      u
                        .find('.quc-button-confirm')
                        .text('\u7ee7\u7eed\u7ed1\u5b9a')
                        .on('click', function () {
                          s.hide(!0), t({ condition: 0, status: a })
                        }),
                      s.show()
                  } else (0 != a && 1 != a) || t({ condition: 2, status: a })
                }
              })
            )
          })
        }),
        (c.appendSearchParams = function (t) {
          var n = e.slice(location.search, 1)
          return a.appendQuery(t, n)
        }),
        (c.gotoPageWithSearchParams = 
    }.call(t, n(2), n(41)))
  },
  
  function (e, t, n) {
    var i = (function (e) {
      if (e.BJ_REPORT) return e.BJ_REPORT
      var t = [],
        n = {},
        r = {
          id: 0,
          uin: 0,
          url: '',
          offline_url: '',
          offline_auto_url: '',
          ext: null,
          level: 4,
          ignore: [],
          random: 1,
          delay: 1e3,
          submit: null,
          repeat: 5,
          offlineLog: !1,
          offlineLogExp: 5,
          offlineLogAuto: !1
        },
        o = {
          db: null,
          ready: function (e) {
            var t = this
            if (!window.indexedDB || !r.offlineLog)
              return (r.offlineLog = !1), e()
            if (this.db)
              return void setTimeout(function () {
                e(null, t)
              }, 0)
            var n = 1,
              i = window.indexedDB.open('badjs', n)
            return i
              ? ((i.onerror = function (t) {
                  return (
                    e(t),
                    (r.offlineLog = !1),
                    console.log('indexdb request error'),
                    !0
                  )
                }),
                (i.onsuccess = function (n) {
                  ;(t.db = n.target.result),
                    setTimeout( 500)
                }),
                void (i.onupgradeneeded = )
              : ((r.offlineLog = !1), e())
          },
          insertToDB: function (e) {
            var t = this.getStore()
            t.add(e)
          },
          addLog: 
          addLogs: function (e) {
            if (this.db) for (var t = 0; t < e.length; t++) this.addLog(e[t])
          },
          getLogs: function (e, t) {
            if (this.db) {
              var n = this.getStore(),
                i = n.openCursor(),
                r = []
              ;(i.onsuccess = function (n) {
                var i = n.target.result
                i
                  ? (i.value.time >= e.start &&
                      i.value.time <= e.end &&
                      i.value.id == e.id &&
                      i.value.uin == e.uin &&
                      r.push(i.value),
                    i['continue']())
                  : t(null, r)
              }),
                (i.onerror = 
            }
          },
          clearDB: function (e) {
            if (this.db) {
              var t = this.getStore()
              if (!e) return void t.clear()
              var n = Date.now() - 24 * (e || 2) * 3600 * 1e3,
                i = t.openCursor()
              i.onsuccess = function (e) {
                var i = e.target.result
                i &&
                  (i.value.time < n || !i.value.time) &&
                  (t['delete'](i.primaryKey), i['continue']())
              }
            }
          },
          getStore: function () {
            var e = this.db.transaction('logs', 'readwrite')
            return e.objectStore('logs')
          }
        },
        a = {
          isOBJByType: function (e, t) {
            return (
              Object.prototype.toString.call(e) ===
              '[object ' + (t || 'Object') + ']'
            )
          },
          isOBJ: function (e) {
            var t = typeof e
            return 'object' === t && !!e
          },
          isEmpty: function (e) {
            return null === e || (!a.isOBJByType(e, 'Number') && !e)
          },
          extend: 
          processError: function (e) {
            try {
              if (e.stack) {
                var t = e.stack.match('https?://[^\n]+')
                t = t ? t[0] : ''
                var n = t.match(':(\\d+):(\\d+)')
                n || (n = [0, 0, 0])
                var i = a.processStackMsg(e)
                return {
                  msg: i,
                  rowNum: n[1],
                  colNum: n[2],
                  target: t.replace(n[0], ''),
                  _orgMsg: e.toString()
                }
              }
              return e.name && e.message && e.description
                ? { msg: JSON.stringify(e) }
                : e
            } catch (r) {
              return e
            }
          },
          processStackMsg: function (e) {
            var t = e.stack
                .replace(/\n/gi, '')
                .split(/\bat\b/)
                .slice(0, 9)
                .join('@')
                .replace(/\?[^:]+/gi, ''),
              n = e.toString()
            return t.indexOf(n) < 0 && (t = n + '@' + t), t
          },
          isRepeat: function (e) {
            if (!a.isOBJ(e)) return !0
            var t = e.msg,
              i = (n[t] = (parseInt(n[t], 10) || 0) + 1)
            return i > r.repeat
          }
        },
        c = e.onerror
      e.onerror = function (t, n, i, r, o) {
        var s = t
        o && o.stack && (s = a.processStackMsg(o)),
          a.isOBJByType(s, 'Event') &&
            (s += s.type
              ? '--' +
                s.type +
                '--' +
                (s.target ? s.target.tagName + '::' + s.target.src : '')
              : ''),
          g.push({ msg: s, target: n, rowNum: i, colNum: r, _orgMsg: t }),
          m(),
          c && c.apply(e, arguments)
      }
      var s = function (e, t) {
          var n = [],
            i = [],
            o = []
          if (a.isOBJ(e)) {
            e.level = e.level || r.level
            for (var c in e) {
              var s = e[c]
              if (!a.isEmpty(s)) {
                if (a.isOBJ(s))
                  try {
                    s = JSON.stringify(s)
                  } catch (u) {
                    s =
                      '[BJ_REPORT detect value stringify error] ' + u.toString()
                  }
                o.push(c + ':' + s),
                  n.push(c + '=' + encodeURIComponent(s)),
                  i.push(c + '[' + t + ']=' + encodeURIComponent(s))
              }
            }
          }
          return [i.join('&'), o.join(','), n.join('&')]
        },
        u = [],
        l = function (e, t) {
          return (
            (t = a.extend({ id: r.id, uin: r.uin, time: new Date() - 0 }, t)),
            o.db
              ? void o.addLog(t)
              : (o.db ||
                  u.length ||
                  o.ready(function (e, t) {
                    t && u.length && (t.addLogs(u), (u = []))
                  }),
                void u.push(t))
          )
        },
        f = function () {
          var e = document.createElement('script')
          ;(e.src =
            r.offline_auto_url ||
            r.url.replace(/badjs$/, 'offlineAuto') +
              '?id=' +
              r.id +
              '&uin=' +
              r.uin),
            (window._badjsOfflineAuto = ,
            document.head.appendChild(e)
        },
        p = [],
        d = 0,
        h = function () {
          if ((clearTimeout(d), p.length)) {
            var e =
              r._reportUrl +
              p.join('&') +
              '&count=' +
              p.length +
              '&_t=' +
              +new Date()
            if (r.submit) r.submit(e)
            else {
              var t = new Image()
              t.src = e
            }
            ;(d = 0), (p = [])
          }
        },
        m = function (e) {
          if (r._reportUrl) {
            for (var n = Math.random() >= r.random; t.length; ) {
              var i = !1,
                o = t.shift()
              if (
                ((o.msg = (o.msg + '' || '').substr(0, 500)), !a.isRepeat(o))
              ) {
                var c = s(o, p.length)
                if (a.isOBJByType(r.ignore, 'Array'))
                  for (var u = 0, f = r.ignore.length; u < f; u++) {
                    var m = r.ignore[u]
                    if (
                      (a.isOBJByType(m, 'RegExp') && m.test(c[1])) ||
                      (a.isOBJByType(m, 'Function') && m(o, c[1]))
                    ) {
                      i = !0
                      break
                    }
                  }
                i ||
                  (r.offlineLog && l('badjs_' + r.id + r.uin, o),
                  n ||
                    20 == o.level ||
                    (p.push(c[0]), r.onReport && r.onReport(r.id, o)))
              }
            }
            e ? h() : d || (d = setTimeout(h, r.delay))
          }
        },
        g = (e.BJ_REPORT = {
          push: function (e) {
            var n = a.isOBJ(e) ? a.processError(e) : { msg: e }
            if (
              (r.ext && !n.ext && (n.ext = r.ext),
              n.from || (n.from = location.href),
              n._orgMsg)
            ) {
              var i = n._orgMsg
              delete n._orgMsg, (n.level = 2)
              var o = a.extend({}, n)
              ;(o.level = 4), (o.msg = i), t.push(n), t.push(o)
            } else t.push(n)
            return m(), g
          },
          report: function (e, t) {
            return e && g.push(e), t && m(!0), g
          },
          info: function (e) {
            return e
              ? (a.isOBJ(e) ? (e.level = 2) : (e = { msg: e, level: 2 }),
                g.push(e),
                g)
              : g
          },
          debug: function (e) {
            return e
              ? (a.isOBJ(e) ? (e.level = 1) : (e = { msg: e, level: 1 }),
                g.push(e),
                g)
              : g
          },
          reportOfflineLog: function () {
            return window.indexedDB
              ? void o.ready(function (e, t) {
                  if (t) {
                    var n = new Date() - 0 - 24 * r.offlineLogExp * 3600 * 1e3,
                      i = new Date() - 0
                    t.getLogs(
                      { start: n, end: i, id: r.id, uin: r.uin },
                      function (e, t) {
                        var o = document.createElement('iframe')
                        ;(o.name = 'badjs_offline_' + (new Date() - 0)),
                          (o.frameborder = 0),
                          (o.height = 0),
                          (o.width = 0),
                          (o.src = 'javascript:false;'),
                          (o.onload = function () {
                            var e = document.createElement('form')
                            ;(e.style.display = 'none'),
                              (e.target = o.name),
                              (e.method = 'POST'),
                              (e.action =
                                r.offline_url ||
                                r.url.replace(/badjs$/, 'offlineLog')),
                              (e.enctype.method = 'multipart/form-data')
                            var a = document.createElement('input')
                            ;(a.style.display = 'none'),
                              (a.type = 'hidden'),
                              (a.name = 'offline_log'),
                              (a.value = JSON.stringify({
                                logs: t,
                                userAgent: navigator.userAgent,
                                startDate: n,
                                endDate: i,
                                id: r.id,
                                uin: r.uin
                              })),
                              o.contentDocument.body.appendChild(e),
                              e.appendChild(a),
                              e.submit(),
                              setTimeout( 1e4),
                              (o.onload = null)
                          }),
                          document.body.appendChild(o)
                      }
                    )
                  }
                })
              : void i.info('unsupport offlineLog')
          },
          offlineLog: function (e) {
            return e
              ? (a.isOBJ(e) ? (e.level = 20) : (e = { msg: e, level: 20 }),
                g.push(e),
                g)
              : g
          },
          init: function (e) {
            if (a.isOBJ(e)) for (var n in e) r[n] = e[n]
            var i = parseInt(r.id, 10)
            return (
              i &&
                (/qq\.com$/gi.test(location.hostname) &&
                  (r.url || (r.url = '//badjs2.qq.com/badjs'),
                  r.uin ||
                    (r.uin = parseInt(
                      (document.cookie.match(/\buin=\D+(\d+)/) || [])[1],
                      10
                    ))),
                (r._reportUrl =
                  (r.url || '/badjs') + '?id=' + i + '&uin=' + r.uin + '&')),
              t.length && m(),
              o._initing ||
                ((o._initing = !0),
                o.ready(function (e, t) {
                  t &&
                    setTimeout(function () {
                      t.clearDB(r.offlineLogExp),
                        setTimeout( 5e3)
                    }, 1e3)
                })),
              g
            )
          },
          __onerror__: e.onerror
        })
      return (
        'undefined' != typeof console &&
          console.error &&
          setTimeout(function () {
            var e = ((location.hash || '').match(/([#&])BJ_ERROR=([^&$]+)/) ||
              [])[2]
            e &&
              console.error(
                'BJ_ERROR',
                decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g, '$1\n')
              )
          }, 0),
        g
      )
    })(window)
    e.exports = i
  },
  function (e, t) {
    e.exports =
      '.quc-wrapper{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;*font-family:SimSun,sans-serif;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-size:14px;line-height:1.5;background-color:#fff;color:#6f6f6f;position:relative;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-weight:400}.quc-wrapper,.quc-wrapper *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.quc-wrapper ol,.quc-wrapper p,.quc-wrapper ul{margin:0;padding:0}.quc-wrapper ol,.quc-wrapper ul{list-style:none}.quc-wrapper div,.quc-wrapper h1,.quc-wrapper h2,.quc-wrapper h3,.quc-wrapper h4,.quc-wrapper h5,.quc-wrapper h6,.quc-wrapper p,.quc-wrapper span{margin:0;font-weight:400}.quc-wrapper a{text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects;-webkit-tap-highlight-color:transparent;outline:none}.quc-wrapper button,.quc-wrapper input,.quc-wrapper select,.quc-wrapper textarea{color:inherit}.quc-wrapper table{border-collapse:collapse;border-spacing:0}.quc-wrapper button,.quc-wrapper input,.quc-wrapper select,.quc-wrapper textarea{margin:0;padding:0;border:none;outline:none;font-family:inherit;font-size:inherit;line-height:inherit;background-color:inherit}.quc-wrapper [type=button],.quc-wrapper [type=reset],.quc-wrapper [type=submit],.quc-wrapper button,.quc-wrapper textarea{-webkit-appearance:button}.quc-wrapper textarea{width:100%;resize:none}.quc-wrapper ::-ms-clear{display:none}.quc-wrapper ::-webkit-contacts-auto-fill-button{visibility:hidden;display:none!important;pointer-events:none;position:absolute;right:0}.quc-wrapper :-ms-input-placeholder{color:#999!important}.quc-wrapper ::-webkit-input-placeholder{color:#999!important}.quc-wrapper ::-moz-placeholder{color:#999!important}.quc-wrapper ::placeholder{color:#999!important}.quc-wrapper input:-webkit-autofill,.quc-wrapper input:-webkit-autofill:active,.quc-wrapper input:-webkit-autofill:focus,.quc-wrapper input:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 30px #fff inset;box-shadow:inset 0 0 0 30px #fff}.quc-wrapper a{color:inherit;*color:#6f6f6f;cursor:pointer}.quc-wrapper a:hover{color:#36b447}.quc-wrapper b,.quc-wrapper strong{color:#333;font-weight:500}.quc-wrapper .quc-clearfix{*zoom:1}.quc-wrapper .quc-clearfix:after,.quc-wrapper .quc-clearfix:before{display:table;content:""}.quc-wrapper .quc-clearfix:after{clear:both}.quc-wrapper .quc-right{float:right}.quc-wrapper .quc-left{float:left}.quc-wrapper .quc-hide{display:none}.quc-wrapper .quc-primary{color:#36b447}.quc-wrapper .quc-error{color:#f36903}.quc-wrapper .quc-success{color:#38b919}.quc-wrapper .quc-text-center{text-align:center}.quc-wrapper .quc-link{color:#36b447;cursor:pointer}.quc-wrapper .quc-link.quc-button-disabled{color:#999}.quc-wrapper .quc-text-primary{color:#333}.quc-wrapper .quc-dot-list li{padding-left:6px}.quc-wrapper .quc-dot-list li:before{content:"\xb7";font-size:14px;padding-right:3px;width:6px;margin-left:-6px}@font-face{font-family:quc-icon;src:url(//s1.ssl.qhimg.com/static/c5ad2cc0efb72de5.eot?t=__now__);src:url(//s1.ssl.qhimg.com/static/c5ad2cc0efb72de5.eot?t=__now__#iefix) format("embedded-opentype"),url(//s3.ssl.qhimg.com/static/ef61370030425682.woff) format("woff"),url(//s5.ssl.qhimg.com/static/40d932e215321ea2.ttf) format("truetype"),url(//s1.ssl.qhimg.com/static/02b31c73c2181dca.svg) format("svg")}.quc-icon{font-family:quc-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.quc-wrapper .quc-button{-webkit-font-smoothing:auto;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:none;white-space:nowrap;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:40px;line-height:40px;border:1px solid transparent;font-size:16px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;text-align:center;width:100%;cursor:pointer;-webkit-filter:chroma(color=#000);filter:chroma(color=#000);display:inline-block;*display:inline;*zoom:1;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.quc-wrapper .quc-button:hover{opacity:.9}.quc-wrapper .quc-button:active{opacity:1}.quc-wrapper .quc-button .quc-icon{margin-right:5px}.quc-wrapper .quc-button-primary{border-color:#36b447;background-color:#36b447;color:#fff}.quc-wrapper .quc-button-primary:hover{color:#fff}.quc-wrapper input.quc-button-primary{*border:none}.quc-wrapper .quc-button-outline-primary{border-color:#36b447;color:#36b447}.quc-wrapper .quc-button-outline-primary:hover{color:#36b447}.quc-wrapper .quc-button-list{margin-top:10px}.quc-wrapper .quc-select{z-index:400;cursor:pointer}.quc-wrapper .quc-select:hover input{cursor:pointer;border-color:#36b447}.quc-wrapper .quc-input{position:relative;width:100%}.quc-wrapper .quc-input .quc-input-clear{font-size:12px;cursor:pointer}.quc-wrapper .quc-input .quc-input-clear:hover{color:#6f6f6f}.quc-wrapper .quc-input input{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;outline:none;width:100%;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;border:1px solid #ddd;font-size:14px;display:inline-block;*display:inline;*zoom:1;color:#333;height:20px;line-height:20px;padding:10px}.quc-wrapper .quc-input input:focus{border-color:#36b447}.quc-wrapper .quc-input .quc-input-inner-custom{position:absolute;line-height:1;left:10px;top:13px}.quc-wrapper .quc-input .quc-input-prefix{left:1px}.quc-wrapper .quc-input .quc-input-suffix{right:1px}.quc-wrapper .quc-input .quc-input-append,.quc-wrapper .quc-input .quc-input-prefix,.quc-wrapper .quc-input .quc-input-suffix{position:absolute;top:1px;*top:2px;width:40px;text-align:center;height:40px;line-height:40px;color:#ccc}.quc-wrapper .quc-input .quc-option-wrapper{z-index:100;background:#fff;border:1px solid #d8d8d8;border-top:0;max-height:180px;overflow-x:hidden;overflow-y:auto;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;font-size:12px;position:absolute;*top:43px;right:0;left:0}.quc-wrapper .quc-input .quc-option-wrapper .quc-option{line-height:30px;color:#333;padding:0 10px;cursor:pointer;*padding-right:30px}.quc-wrapper .quc-input .quc-option-wrapper .quc-option.quc-option-active,.quc-wrapper .quc-input .quc-option-wrapper .quc-option:hover{background-color:#fafafa;color:#36b447}.quc-wrapper .quc-input .quc-input-zone{width:116px;text-align:left;cursor:pointer;white-space:nowrap}.quc-wrapper .quc-input .quc-input-zone .quc-activeState{display:inline-block;*display:inline;*zoom:1;padding-left:10px;width:70px;color:#333}.quc-wrapper .quc-input .quc-input-zone .quc-icon{display:inline-block;*display:inline;*zoom:1;text-align:center;vertical-align:middle;font-size:12px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:-o-transform .3s;-moz-transition:transform .3s,-moz-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s,-moz-transform .3s,-o-transform .3s;width:36px}.quc-wrapper .quc-input .quc-input-zone-active .quc-icon{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg)}.quc-wrapper .quc-input .quc-input-zone-active .quc-option-wrapper{display:block}.quc-wrapper .quc-input .quc-input-append{right:1px;background-color:#fafafa;text-align:center;border-left:1px solid #ddd;width:120px}.quc-wrapper .quc-form{position:relative;z-index:2}.quc-wrapper .quc-form-item{margin-bottom:20px}.quc-wrapper .quc-form-item:first-child{margin-top:0}.quc-wrapper .quc-form-item-content{position:relative}.quc-wrapper .quc-form-item-has-error .quc-input input{border-color:#f36903}.quc-wrapper .quc-form-item-error,.quc-wrapper .quc-tip-error{color:#f36903}.quc-wrapper .quc-tip-success{color:#38b919}.quc-wrapper .quc-form-item-error{font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0}.quc-wrapper .quc-form-tips{margin-top:10px;color:#6f6f6f;font-size:14px}.quc-wrapper .quc-form-item-img-captcha{*zoom:1}.quc-wrapper .quc-form-item-img-captcha:after,.quc-wrapper .quc-form-item-img-captcha:before{display:table;content:""}.quc-wrapper .quc-form-item-img-captcha:after{clear:both}.quc-wrapper .quc-form-item-img-captcha .quc-input{display:inline-block;*display:inline;*zoom:1;width:auto;float:left}.quc-wrapper .quc-form-item-img-captcha .quc-input input{width:120px}.quc-wrapper .quc-form-item-img-captcha img{cursor:pointer;border:1px solid #ddd;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;height:40px;width:100px;position:relative;*top:1px;float:left;margin-left:10px}.quc-wrapper .quc-form-item-img-captcha span{float:right;display:inline-block;*display:inline;*zoom:1;white-space:nowrap;line-height:42px}.quc-wrapper .quc-form-item-checkbox{color:#6f6f6f;font-size:12px;margin-bottom:0}.quc-wrapper .quc-form-item-checkbox input{margin-right:5px;vertical-align:middle;margin-bottom:1px}.quc-wrapper .quc-form .quc-button-list{margin-top:10px}.quc-wrapper .quc-tab-list{display:inline-block;*display:inline;*zoom:1;line-height:1;text-align:center;vertical-align:middle}.quc-wrapper .quc-tab-item{float:left}.quc-wrapper .quc-tab-item:first-child .quc-tab-sep{display:none}.quc-wrapper .quc-tab-item-inner{float:left;padding-bottom:4px;border-bottom:1px solid transparent}.quc-wrapper .quc-tab-sep{float:left;border-right:1px solid #e3e3e3}.quc-wrapper .quc-tab-item-active .quc-tab-item-inner{color:#36b447;border-bottom:1px solid #36b447}.quc-wrapper .quc-panel-title,.quc-wrapper .quc-panel-title .quc-tab-item-inner{font-weight:500}.quc-wrapper .quc-panel-title .quc-tab-list{font-size:20px;color:#333}.quc-wrapper .quc-panel-title .quc-tab-sep{margin:2px 16px 0;height:16px}.quc-wrapper .quc-entrance .quc-tab-list{font-size:14px;color:#6f6f6f}.quc-wrapper .quc-entrance .quc-tab-sep{margin:1px 10px 0;height:12px}.quc-panel{margin:0 auto;width:420px}.quc-panel .quc-main{position:relative}.quc-panel-popup{z-index:4001}.quc-panel-middle{width:420px}.quc-panel-middle .quc-button,.quc-panel-middle .quc-mobile-Statelist{width:298px}.quc-panel-middle .quc-button-list-double .quc-button{width:138px}.quc-panel-middle .quc-main{margin:0 auto;padding-top:30px;padding-bottom:40px;width:300px}.quc-panel-middle .quc-input input{width:278px}.quc-panel-middle .quc-input-has-prefix input{padding-left:40px;width:248px}.quc-panel-middle .quc-input-has-suffix input{padding-right:40px;width:248px}.quc-panel-middle .quc-input-has-zone{z-index:2}.quc-panel-middle .quc-input-has-zone input{padding-left:116px;width:172px}.quc-panel-middle .quc-input-has-both input{padding-left:40px;padding-right:40px;width:218px}.quc-panel-middle .quc-input-has-prefix-append input{padding-left:40px;padding-right:131px;width:127px}.quc-panel-middle .quc-form-item-img-captcha .quc-input input{width:114px}.quc-panel-middle .quc-form-item-img-captcha .quc-input-has-prefix input{width:74px}.quc-panel-large{width:450px}.quc-panel-large .quc-button,.quc-panel-large .quc-mobile-Statelist{width:328px}.quc-panel-large .quc-button-list-double .quc-button{width:153px}.quc-panel-large .quc-main{margin:0 auto;padding-top:30px;padding-bottom:40px;width:330px}.quc-panel-large .quc-input input{width:308px}.quc-panel-large .quc-input-has-prefix input{padding-left:40px;width:278px}.quc-panel-large .quc-input-has-suffix input{padding-right:40px;width:278px}.quc-panel-large .quc-input-has-zone{z-index:2}.quc-panel-large .quc-input-has-zone input{padding-left:116px;width:202px}.quc-panel-large .quc-input-has-both input{padding-left:40px;padding-right:40px;width:248px}.quc-panel-large .quc-input-has-prefix-append input{padding-left:40px;padding-right:131px;width:157px}.quc-panel-large .quc-form-item-img-captcha .quc-input input{width:144px}.quc-panel-large .quc-form-item-img-captcha .quc-input-has-prefix input{width:104px}.quc-panel-small{width:360px}.quc-panel-small .quc-button,.quc-panel-small .quc-mobile-Statelist{width:298px}.quc-panel-small .quc-button-list-double .quc-button{width:138px}.quc-panel-small .quc-main{margin:0 auto;padding-top:30px;padding-bottom:40px;width:300px}.quc-panel-small .quc-input input{width:278px}.quc-panel-small .quc-input-has-prefix input{padding-left:40px;width:248px}.quc-panel-small .quc-input-has-suffix input{padding-right:40px;width:248px}.quc-panel-small .quc-input-has-zone{z-index:2}.quc-panel-small .quc-input-has-zone input{padding-left:116px;width:172px}.quc-panel-small .quc-input-has-both input{padding-left:40px;padding-right:40px;width:218px}.quc-panel-small .quc-input-has-prefix-append input{padding-left:40px;padding-right:131px;width:127px}.quc-panel-small .quc-form-item-img-captcha .quc-input input{width:114px}.quc-panel-small .quc-form-item-img-captcha .quc-input-has-prefix input{width:74px}.quc-panel-message{width:450px}.quc-panel-message .quc-main{width:330px;margin:0 auto;padding-top:30px;padding-bottom:40px}.quc-wrapper .quc-logo{height:35px;width:auto;margin-bottom:10px}.quc-wrapper .quc-panel-hd{color:#333;-webkit-font-smoothing:auto}.quc-wrapper .quc-panel-close{color:#d2d0d0;font-size:16px}.quc-wrapper .quc-panel-close:hover{color:#9a9a9a}.quc-wrapper .quc-panel-message-inner{color:#6f6f6f;font-size:14px}.quc-wrapper .quc-panel-message-has-status .quc-panel-message-inner{margin-left:36px}.quc-wrapper .quc-panel-status{float:left;padding-right:10px;padding-left:2px}.quc-wrapper .quc-panel-status .quc-icon{vertical-align:top;font-size:24px}.quc-wrapper .quc-panel-message-title{font-size:18px;color:#333}.quc-wrapper .quc-panel-message-desc{margin-top:4px}.quc-wrapper .quc-login-switch{position:absolute;bottom:8px;right:8px;width:40px;height:40px;line-height:40px;color:#9a9a9a;cursor:pointer}.quc-wrapper .quc-login-switch .quc-btn-web{display:none}.quc-wrapper .quc-login-switch .quc-icon{cursor:pointer;font-size:40px}.quc-wrapper .quc-tip{font-size:14px}.quc-wrapper .quc-tip .quc-icon{padding-right:8px;font-size:14px}.quc-wrapper .quc-tip-absolute{line-height:1;font-size:12px;position:absolute;top:12px;left:0}.quc-panel-login-qrcode .quc-login-switch .quc-btn-web{display:block}.quc-panel-login-qrcode .quc-login-switch .quc-btn-qrcode{display:none}.quc-panel-message .quc-panel-hd{text-align:left;background-color:#fcfcfc;font-size:16px;color:#333;border-bottom:1px solid #eaeaea;padding:13px 20px;-webkit-border-radius:4px 4px 0 0;-moz-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.quc-panel-message .quc-panel-close{position:absolute;right:20px;top:13px}.quc-panel-message .quc-button-list{margin-top:24px}.quc-panel-dialog .quc-panel-hd{padding-top:40px;text-align:center}.quc-panel-dialog .quc-panel-close{position:absolute;right:20px;top:20px}.quc-panel-dialog .quc-button{font-size:18px}.quc-wrapper .quc-third{margin-top:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.quc-wrapper .quc-third-hd{border-bottom:1px solid #e3e3e3;text-align:center;font-size:14px;line-height:1;color:#999;margin-bottom:20px}.quc-wrapper .quc-third-hd span{position:relative;padding:0 5px;top:7px;background-color:#fff}.quc-wrapper .quc-third-bd{text-align:center;letter-spacing:-3px}.quc-wrapper .quc-third-bd table{width:100%}.quc-wrapper .quc-third-bd td{text-align:center}.quc-wrapper .quc-third-item{cursor:pointer;display:inline-block;*display:inline;*zoom:1;width:40px;height:40px;line-height:40px;border:1px solid transparent;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;text-align:center;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out;font-size:22px;letter-spacing:0;vertical-align:middle}.quc-wrapper .quc-third-item:hover{opacity:.9;filter:alpha(opacity=90)}.quc-wrapper .quc-icon-qq{color:#4e9ff9}.quc-wrapper .quc-icon-wechat{color:#5ec12a}.quc-wrapper .quc-icon-weibo{color:#f65d6b}.quc-wrapper .quc-icon-renren{color:#005eac}:root *>.quc-third-item{border-color:#e3e3e3!important}.quc-wrapper .quc-qrcode{position:relative}.quc-wrapper .quc-qrcode-active:hover .quc-qrcode-inner{left:-70px}.quc-wrapper .quc-qrcode-active:hover .quc-qrcode-help{opacity:1;filter:alpha(opacity=100);-webkit-filter:none;filter:none}.quc-wrapper .quc-qrcode-active .quc-qrcode-expired{display:none}.quc-wrapper .quc-qrcode-icon{top:64px;left:64px;width:32px;height:32px;position:absolute}.quc-wrapper .quc-qrcode-inner{-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out;display:inline-block;*display:inline;*zoom:1;padding:5px;border:1px solid #e3e3e3;left:0;line-height:1;height:148px;width:148px;position:relative}.quc-wrapper .quc-qrcode-inner .quc-qrcode-img{width:148px;height:148px}.quc-wrapper .quc-qrcode-inner .quc-qrcode-expired{position:absolute;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,100%,.9);text-align:center}.quc-wrapper .quc-qrcode-inner .quc-qrcode-expired .quc-qrcode-expired-text{margin-top:50px;font-size:16px;color:#6f6f6f}.quc-wrapper .quc-qrcode-inner .quc-qrcode-expired .quc-button{margin-top:20px;width:118px;font-size:16px}.quc-wrapper .quc-qrcode-title{margin-top:26px;line-height:1;font-size:16px;color:#6f6f6f}.quc-wrapper .quc-qrcode-desc{line-height:1;font-size:14px;color:#6f6f6f;margin-top:10px;position:absolute;width:100%;left:0;top:auto}.quc-wrapper .quc-qrcode-help{-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;transition:all .3s ease-in-out;position:absolute;right:0;top:0;width:122px;height:174px;opacity:0;filter:alpha(opacity=0);background-repeat:no-repeat}.quc-wrapper .quc-entrance{margin-top:64px}.quc-wrapper .quc-mod-identify .quc-identify-method{margin-top:20px;margin-bottom:10px}.quc-wrapper .quc-mod-identify b{margin-right:10px}.quc-wrapper .quc-mod-identify .quc-form-tips{font-size:12px}.quc-wrapper .quc-mod-identify select{vertical-align:baseline}.quc-wrapper .quc-mod-active-email .quc-top-tip{margin-bottom:14px}.quc-wrapper .quc-mod-active-email .quc-tip{margin-top:6px}.quc-wrapper .quc-mod-active-email .quc-button{width:155px;margin-top:16px;margin-bottom:18px}.quc-wrapper .quc-mod-active-email hr{margin:0;border:none;border-bottom:1px dashed #eaeaea}.quc-wrapper .quc-mod-active-email .quc-resend{margin-top:16px}.quc-wrapper .quc-mod-active-email .quc-link-jump,.quc-wrapper .quc-mod-active-email .quc-resend-result{margin-left:18px}.quc-wrapper .quc-field-has-option{z-index:400;position:relative}.quc-wrapper .quc-identify-title{line-height:1;margin:18px 0 9px}.quc-ie-placeholder{color:#999!important}.quc-mask{position:fixed;z-index:4000;top:0;right:0;left:0;bottom:0;background-color:#000;opacity:.3;filter:alpha(opacity=30)}.quc-loading{position:fixed;background-image:url(//p4.ssl.qhimg.com/t01d0a2195eaa0dab4d.png);background-repeat:no-repeat;-webkit-background-size:100% 100%;-moz-background-size:100%;background-size:100%;width:36px;height:36px;top:50%;left:50%;margin-top:-36px;margin-left:-36px;z-index:5000;-webkit-animation:quc-rotate 1.2s linear infinite;-moz-animation:quc-rotate 1.2s linear infinite;-o-animation:quc-rotate 1.2s linear infinite;animation:quc-rotate 1.2s linear infinite}.quc-mod-quick-sign-in .quc-sign-in-iframe{width:100%;height:280px}.quc-alternative-wrapper{font-size:12px}.quc-alternative-wrapper .quc-alternatives{line-height:1}.quc-alternative-wrapper .quc-alternatives .quc-link{margin-right:1em}@-webkit-keyframes quc-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);transform:rotate(-1turn)}}@-moz-keyframes quc-rotate{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(-1turn);transform:rotate(-1turn)}}@-o-keyframes quc-rotate{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@keyframes quc-rotate{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(-1turn);-moz-transform:rotate(-1turn);transform:rotate(-1turn)}}'
  },
  function (e, t, n) {
    ;(function (e) {
      function t(t) {
        var n = e.get(t, 'data') || {}
        return n.o + '.' + n.m
      }
      function i(e) {
        return (
          d.each(e, function (t, n) {
            'boolean' == d.type(n) && (e[t] = n ? 1 : 0)
          }),
          e
        )
      }
      function r(e, t) {
        t.url && ((t.action = t.url), delete t.url), (t.method = 'post')
        var n = d('<form>').attr(t).hide()
        return (
          d.each(e, function (e, t) {
            d('<input>').attr({ type: 'hidden', name: e, value: t }).appendTo(n)
          }),
          n[0]
        )
      }
      function o(e) {
        return e && 32 != e.length ? p.utils.md5(e) : e
      }
      function a(e) {
        return function (t) {
          var n = d.Deferred(),
            i = Object.prototype.toString
              .call(t)
              .replace(/\[object (\w+)\]$/, '$1')
          return (
            'Array' == i && (t = { errno: 0, data: t }),
            t.errno.toString().indexOf('login_captcha') == -1
              ? (t.errno = parseInt(t.errno, 10))
              : (t.errno = p.ERROR.CAPTCHA_INVALID.errno),
            t.errno === e
              ? n.resolve(t)
              : ((t.errmsg = p.utils.getErrorMsg(
                  t.errno,
                  t.errmsg || t.msg || ''
                )),
                n.reject(t)),
            n.promise()
          )
        }
      }
            var s = n(155),
        u = n(164),
        l = n(40),
        f = n(14).getLogger('request'),
        p = myQHPass,
        d = p.$,
        h = !1,
        m = n(105),
        g = function (e, t, n) {
          n = n || 'https' == p.getConfig('protocol').toLowerCase()
          var r = (this.protocol = n && !h ? 'https' : 'http'),
            o = {
              src: p.getConfig('src'),
              from: p.getConfig('src'),
              charset: p.getConfig('charset'),
              requestScema: r,
              quc_sdk_version: myQHPass.version,
              quc_sdk_name: 'jssdk'
            },
            a = {
              url: r + '://login.360.cn',
              type: 'GET',
              dataType: 'jsonp',
              timeout: 1e4
            }
          ;(e = e || {}),
            (t = t || {}),
            (this.protocol = r),
            (this.param = d.extend(o, i(e))),
            (this.ajaxOpt = d.extend({ data: this.param }, a, t)),
            (this.I360 = r + '://i.360.cn')
        }
      d.extend(g.prototype, {
        get: function (n) {
          var i = this,
            r = e.extend(this.ajaxOpt, { url: n }),
            o = d.ajax(r),
            a = this.ajaxOpt.data.m,
            c = myQHPass.getConfig('mainDomain', []),
            s = n ? n.replace(/(http|https):\/\/login./gi, '') : ''
          return (
            o.done(function (e) {
              f.debug('get', t(i.ajaxOpt), r, e)
            }),
            o.then(this.done, function (e) {
              if ('setcookie' == a && d.inArray(s, c) == -1) {
                var t = { errno: 0, errmsg: '', domain: 'not mainDomain' }
                return i.done(t)
              }
              return i.fail({ method: 'get', url: n, status: e })
            })
          )
        },
        post: function (e) {
          var n = this,
            i = d.Deferred(),
            o = null,
            a = p.utils.getGuid(),
            c = 'QiUserJsonp' + a,
            s = 'QucI360Form' + a,
            u = 'QucI360Iframe' + a,
            l = d('<iframe name="' + u + '">').hide(),
            h = d.extend({}, this.param, {
              proxy: p.getConfig('proxy'),
              callback: c,
              func: c
            }),
            m = r(h, { name: s, target: u, url: e || this.ajaxOpt.url })
          return (
            (window[c] = function (e) {
              clearTimeout(o)
              var r
              for (var a in e)
                e.hasOwnProperty(a) &&
                  ((r = decodeURIComponent(e[a])),
                  r.match(/^(\{.*\})|(\[.*\])$/) && (r = d.parseJSON(r)),
                  (e[a] = r))
              i.resolve(e), f.debug('post', t(n.ajaxOpt), n.ajaxOpt, e)
            }),
            (o = setTimeout(function () {
              f.error('psp_jump \u8d85\u65f6'),
                i.reject({
                  method: 'post',
                  url: e,
                  status: {
                    status: 0,
                    statusText: 'post \u8bf7\u6c42\u8d85\u65f6'
                  }
                })
            }, this.ajaxOpt.timeout)),
            i.always(,
            d(document.body).append(l).append(m),
            d(m).submit(),
            i.then(this.done, p.utils.bind(this.fail, this))
          )
        },
        done: a(0),
        fail: function (e) {
          if (
            'https' == this.protocol &&
            'http:' == location.protocol &&
            p.getConfig('retryWithHttp', !0)
          )
            return (
              'sso' == this.ajaxOpt.data.o &&
                'getToken' == this.ajaxOpt.data.m &&
                (h = !0),
              this.retryHttp(e)
            )
          var t = d.Deferred()
          return (
            t.reject({
              errno: 999999,
              errmsg: 'string' == d.type(e) ? e : '\u7f51\u7edc\u9519\u8bef'
            }),
            p.events.trigger('error.sync', e.url || this.ajaxOpt.url),
            t.promise()
          )
        },
        getDomainApi: function (e) {
          return (
            (e = e || location.hostname.replace(/^(?:.+\.)?(\w+\.\w+)$/, '$1')),
            this.protocol + '://login.' + e
          )
        },
        retryHttp: function (e) {
          ;(this.protocol = 'http'),
            (this.ajaxOpt.url = this.ajaxOpt.url.replace(/^https/, 'http')),
            (this.I360 = 'http://i.360.cn')
          var t = e.url && e.url.replace(/^https/, 'http')
          return (
            p.events.trigger('retryHttp.sync', t || this.ajaxOpt.url),
            this[e.method](t)
          )
        }
      })
      var v = null
      ;(p.getUserInfoCache = function () {
        return v
      }),
        (p.sync = {
          getRd: function () {
            var e = new g({ o: 'sso', m: 'getRd' })
            return (
              (e.done = function (e) {
                var t = d.Deferred()
                return (
                  e.rd
                    ? t.resolve(e)
                    : t.reject({
                        errno: '999999',
                        errmsg: '\u8bf7\u767b\u5f55\u5e10\u53f7'
                      }),
                  t.promise()
                )
              }),
              e.get()
            )
          },
          getToken: function (e) {
            var t = new g(
              { o: 'sso', m: 'getToken', userName: e },
              { jsonp: 'func' },
              !0
            )
            return t.get()
          },
          actualGetUserInfo: function (t) {
            t = e.extend({ o: 'sso', m: 'info' }, t)
            var n = new g(t)
            return (
              (n.done = ,
              n.get()
            )
          },
          getUserInfo: function (e, t) {
            var n = p.getConfig('headSize', '100_100'),
              i = p.getConfig('currentDomain', ''),
              r = {
                '20_20': 'a',
                '48_48': 's',
                '50_50': 'e',
                '64_64': 'm',
                '70_70': 'i',
                '100_100': 'b',
                '150_150': 'q'
              }
            if (
              (void 0 === e
                ? (e = !0)
                : 'boolean' != d.type(e) && ((t = e), (e = !1)),
              e && v && void 0 === t)
            )
              return d.Deferred().resolve(v).promise()
            var o = new g({
              o: 'sso',
              m: 'info',
              show_name_flag: '1',
              head_type: r[n]
            })
            return (
              (o.done = function (e) {
                var n = d.Deferred()
                return (
                  e.qid
                    ? (void 0 === t && (v = e), n.resolve(e))
                    : n.reject({
                        errno: '999999',
                        errmsg:
                          '\u65e0\u6cd5\u83b7\u53d6\u767b\u5f55\u72b6\u6001'
                      }),
                  n.promise()
                )
              }),
              p.getConfig('ignoreCookie')
                ? o.get()
                : i && p.utils.getCookie('Q')
                ? o.get(o.getDomainApi(i))
                : p.utils.getCookie('Q')
                ? o.get(o.getDomainApi(t))
                : d.Deferred().reject(p.ERROR.NOT_SIGNED_IN).promise()
            )
          },
          getUserSecInfo: function (e) {
            var t = new g({ crumb: e })
            return t.get(t.I360 + '/security/getUserSecInfo')
          },
          getIdentifyMethod: function (e, t) {
            var n = { o: 'User', m: 'getSecWays', crumb: e, sensop: t },
              i = new g(n)
            return i.post()
          },
          checkWeakPwd: function (e) {
            var t = new g({ password: o(e) })
            return t.get(t.I360 + '/reg/checkWeakPwd')
          },
          modifyPassword: function (e, t) {
            var n = new g(
              {
                o: 'user',
                m: 'modifyPwd',
                newPwd: o(t),
                rePwd: o(t),
                crumb: e
              },
              {},
              !0
            )
            return n.post()
          },
          getCaptchaUrl: function (e) {
            var t = p.getConfig('captchaAppId', 'i360'),
              n = new g({ captchaScene: e, captchaApp: t, border: 'none' })
            return n.get(n.I360 + '/QuCapt/getQuCaptUrl')
          },
          checkEmailExist: function (e) {
            var t = new g({ o: 'User', m: 'checkemail', loginEmail: e })
            return (t.done = a(202)), t.get()
          },
          checkUsernameExist: function (e) {
            var t = new g({ o: 'User', m: 'checkuser', userName: e })
            return (t.done = a(1e4)), t.get()
          },
          checkNicknameExist: function (e) {
            var t = new g({ o: 'User', m: 'checknickname', nickName: e })
            return (t.done = a(259)), t.get()
          },
          checkMobileNumberExist: function (e, t, n) {
            ;(e = t ? t + e : e), (n = n || '')
            var i = new g({ o: 'User', m: 'checkmobile', mobile: e, type: n })
            return i.get()
          },
          checkEmailStatus: function (e) {
            var t = new g({ crumb: e })
            return t.get(t.I360 + '/active/checkLoginEmailStatus')
          },
          getMobileState: function () {
            var e = new g({ o: 'user', m: 'getStateList', quc_lang: '' })
            return e.get()
          },
          checkMobileLogin: function (e) {
            var t = new g({
              o: 'user',
              m: 'checkLoginMethod',
              acctype: 2,
              lm: 1,
              account: e
            })
            return t.get()
          },
          checkSignUpCaptchaRequired: function () {
            var e = new g({ captchaApp: p.getConfig('captchaAppId', 'i360') })
            return e.get(e.I360 + '/reg/checkcap')
          },
          checkSignInCaptchaRequired: function (e) {
            var t = {
                o: 'sso',
                m: 'checkNeedCaptcha',
                account: e,
                captchaApp: p.getConfig('captchaAppId', 'i360')
              },
              n = new g(t)
            return n.get()
          },
          identify: function (e, t, n, i, r) {
            var a = {
              o: 'User',
              m: 'checkSecWay',
              crumb: e,
              vtype: n,
              sensop: t
            }
            'pwd' == n && ((i = o(i)), (a.captcha = r)), (a.vc = i)
            var c = new g(a, {}, !0)
            return c.post()
          },
          setUsername: function (e, t) {
            var n = new g(
              { o: 'User', m: 'modifyUserName', userName: t, crumb: e },
              {},
              !0
            )
            return n.post().done(function () {
              c()
            })
          },
          setNickname: function (e, t) {
            var n = new g(
              { o: 'User', m: 'modifyNickName', nickName: t, crumb: e },
              {},
              !0
            )
            return n.post().done(function () {
              c()
            })
          },
          setEmail: function (e, t) {
            var n = new g({ crumb: e, loginEmail: t }, {}, !0)
            return n.post(n.I360 + '/active/doSetLoginEmail').done(function () {
              c()
            })
          },
          setSecEmail: function (e, t) {
            var n = new g({ crumb: e, secemail: t }, {}, !0)
            return n.post(n.I360 + '/profile/dosetsecemail').done(function () {
              c()
            })
          },
          setLoginMethod: function (e, t) {
            var n = new g(
              {
                o: 'user',
                m: 'modifyLoginMethod',
                loginMethod: 1,
                crumb: e,
                toValue: t
              },
              {},
              !0
            )
            return n.post().done(function () {
              c()
            })
          },
          setCookie: function (e, t) {
            f.debug('set cookie', e, t)
            var n = p.getConfig('supportHttps'),
              i = 'https' == p.getConfig('protocol', null).toLowerCase()
            ;(e = decodeURIComponent(e)),
              void 0 === t
                ? (t = p.getConfig('domainList', []))
                : d.isArray(t) || (t = [t])
            var r,
              o = []
            return (
              d.each(t, function (t, a) {
                d.inArray(a, n) > -1
                  ? ((r = new g(
                      { o: 'sso', m: 'setcookie', s: e },
                      { jsonp: 'func' },
                      !0
                    )),
                    o.push(r.get(r.getDomainApi(a))))
                  : i ||
                    ((r = new g(
                      { o: 'sso', m: 'setcookie', s: e },
                      { jsonp: 'func' }
                    )),
                    o.push(r.get(r.getDomainApi(a))))
              }),
              d.when.apply(d, o)
            )
          },
          bindMobileCheck: function (e) {
            var t = { o: 'User', mobile: e, m: 'bindMobileCheck' },
              n = new g(t)
            return n.get()
          },
          sendSmsTokenNeedPhrase: function (e, t, n, i, r, o) {
            var a = ''
            'boolean' == typeof e &&
              ((n = t), (t = e), (i = n), (r = i), (e = null)),
              'login' == o
                ? (a = u.SMS_SCENE_LOGIN)
                : 'reg' == o && (a = u.SMS_SCENE_REG)
            var c = t ? u.SMS_CONDITION_EXIST : u.SMS_CONDITION_NOT_EXIST,
              s = {
                condition: c,
                account: n,
                crumb: e,
                sms_scene: a,
                captcha: i,
                vt: r
              }
            return p.sync.sendSmsCodeNew(s)
          },
          sendSmsCodeNew: function (t) {
            t = e.extend({ o: 'User', m: 'sendSmsCodeNew' }, t)
            var n = new g(t)
            return n.post()
          },
          sendSmsToken: function (t, n, i, r) {
            var o = ''
            'boolean' == typeof t && ((i = n), (n = t), (t = null)),
              'object' == typeof i && (i = i.areaCode + i.mobileNumber),
              'findpwd' == r && (o = u.SMS_SCENE_FINDPWD)
            var a
            a = e.isNumber(n)
              ? n
              : n
              ? u.SMS_CONDITION_EXIST
              : u.SMS_CONDITION_NOT_EXIST
            var c = {
                o: 'User',
                m: 'sendSmsCode',
                condition: a,
                account: i,
                crumb: t,
                sms_scene: o
              },
              s = new g(c)
            return s.post()
          },
          sendEmailToken: function (e, t) {
            var n = {
                o: 'User',
                m: 'sendEmsCode',
                condition: 1,
                crumb: e,
                vtype: t
              },
              i = new g(n)
            return i.post()
          },
          sendActivationEmail: function (e) {
            var t = new g({ crumb: e })
            return t.post(t.I360 + '/active/doSendActiveEmail')
          },
          sendSecActivationEmail: function (e) {
            var t = new g({ crumb: e })
            return t.post(t.I360 + '/profile/resendSecurityEmail')
          },
          sendSignUpActivationEmail: 
          bindMobile: function (e, t, n) {
            t = t.areaCode + t.mobileNumber
            var i = new g(
              { o: 'user', m: 'bindMobile', crumb: e, mobile: t, smscode: n },
              {},
              !0
            )
            return i.post().done(function () {
              c()
            })
          },
          bindMobileNew: function (e, t, n, i) {
            t = t.areaCode + t.mobileNumber
            var r = new g(
              {
                o: 'user',
                m: 'bindMobileNew',
                crumb: e,
                mobile: t,
                smscode: n,
                force_bind: i ? 1 : 0
              },
              {},
              !0
            )
            return r.post().done(function () {
              c()
            })
          },
          signUp: function (e) {
            var t = {
              captchaFlag: !0,
              captchaApp: p.getConfig('captchaAppId', 'i360'),
              smDeviceId: s.getShumeiDeviceId()
            }
            ;(e = d.extend(t, e)),
              (e.password = o(e.password)),
              (e.rePassword = o(e.rePassword) || e.password)
            var n = new g(e, {}, !0)
            return n.post(n.I360 + '/reg/doregAccount').done(function () {
              c()
            })
          },
          signIn: function (e) {
            var t = {
              o: 'sso',
              m: 'login',
              lm: 'mobile' == e.type ? 1 : 0,
              captFlag: 1,
              rtype: 'data',
              validatelm: p.getConfig('signIn.mobile.isMustUseMobileSignIn', !1)
                ? 1
                : 0,
              isKeepAlive: !1,
              captchaApp: p.getConfig('captchaAppId', 'i360'),
              userName: e.account,
              smDeviceId: s.getShumeiDeviceId()
            }
            return (
              'mobile' == e.type
                ? (e.acctype = 2)
                : (e.password = o(e.password)),
              d
                .when()
                .then(function () {
                  return (
                    e.token ||
                    p.sync.getToken(e.account).done(function (t) {
                      e.token = t.token
                    })
                  )
                })
                .then(function () {
                  var n = new g(d.extend(t, e), {}, !0)
                  return n.post().done(function () {
                    c()
                  })
                })
            )
          },
          signOut: function (e) {
            var t = p.getConfig('supportHttps'),
              n = 'https' == p.getConfig('protocol', null).toLowerCase()
            void 0 === e || e === !0
              ? (e = p.getConfig('domainList', []))
              : d.isArray(e) || (e = [e])
            var i,
              r = []
            return (
              d.each(e, function (e, o) {
                d.inArray(o, t) > -1
                  ? ((i = new g(
                      { o: 'sso', m: 'logout' },
                      { jsonp: 'func' },
                      !0
                    )),
                    r.push(i.get(i.getDomainApi(o))))
                  : n ||
                    ((i = new g({ o: 'sso', m: 'logout' }, { jsonp: 'func' })),
                    r.push(i.get(i.getDomainApi(o))))
              }),
              c(),
              d.when.apply(d, r)
            )
          },
          fillProfile: function (e, t, n, i, r) {
            i = i || n
            var a = new g(
              {
                o: 'User',
                m: 'perfectInfo',
                crumb: e,
                userName: t,
                captcha: r,
                password: o(n),
                rePassword: o(i)
              },
              {},
              !0
            )
            return a.post().done(function () {
              c()
            })
          },
          perfectMobile: function (e, t, n, i, r) {
            var a = new g(
              {
                o: 'user',
                m: 'perfectMobile',
                crumb: e,
                mobile: t,
                password: o(n),
                rePassword: o(n),
                smscode: i,
                force_bind: r ? 1 : 0
              },
              {}
            )
            return a.post()
          },
          checkQrCodeSignInStatus: function () {
            var e = p.getConfig('currentDomain', ''),
              t = new g({ o: 'sso', m: 'qrLogin' }, { jsonp: 'func' })
            return t.get(t.getDomainApi(e))
          },
          getAuthenticationStatus: function (e) {
            var t = new g({ o: 'User', m: 'getShiMingStatus', crumb: e })
            return t.get()
          },
          submitAuthenMobile: function (e, t, n) {
            var i = new g(
              {
                o: 'User',
                m: 'verifyShiMingCaptcha',
                mobile: e,
                captcha: t,
                crumb: n
              },
              {},
              !0
            )
            return i.post()
          },
          fillAuthenInfo: function (e, t, n) {
            var i = new g(
              { o: 'User', m: 'verifyShiMingSmsCode', vt: e, vc: t, crumb: n },
              {},
              !0
            )
            return i.post()
          },
          authSendSmsToken: function (e, t) {
            var n = new g(
              { o: 'User', m: 'sendShiMingSmsCode', crumb: e, vt: t },
              {},
              !0
            )
            return n.post()
          },
          authBindMobile: function (e, t) {
            var n = l.parse(location.href, !0),
              i = n.query,
              r = {
                mobile: m.getMobileStr(e),
                smscode: t,
                f: i.f,
                c: i.c,
                type: i.type
              }
            return d
              .ajax({ url: '/oauth/mobileBind', method: 'POST', data: r })
              .then(function (e) {
                var t = d.Deferred()
                return (
                  e && 0 === parseInt(e.errno) ? t.resolve(e) : t.reject(e),
                  t.promise()
                )
              })
          },
          mpAuthBindMobile: function (t, n) {
            var i = l.parse(location.href, !0),
              r = i.query
            ;(t = t || {}), (n = n || {})
            var o = new g(
              e.extend(
                {
                  o: 'sso',
                  m: 'oauthLogin',
                  fill_info: 1,
                  use_mp: 1,
                  platform: 'weixin',
                  openid: r.openid,
                  ticket: r.ticket
                },
                t
              ),
              e.extend({ url: '//login.360.cn' }, n),
              !0
            )
            return o.get()
          }
        })
      var q = {}
      d.each(p.sync, function (e, t) {
        var n = function () {
          var n = arguments[0],
            i =
              e +
              (d.isPlainObject(n)
                ? p.utils.JSON.stringify(n)
                : [].join.apply(arguments)),
            r = q[i]
          return r
            ? q[i]
            : ((r = q[i] = t.apply(p.sync, arguments)),
              r.always(,
              r)
        }
        ;(n.funcName = t.funcName = 'sync.' + e), (p.sync[e] = n)
      }),
        (p.Sync = g)
    }.call(t, n(2)))
  },
  function (e, t) {
    ;(t.SMS_CONDITION_ALWAYS = 0),
      (t.SMS_CONDITION_EXIST = 1),
      (t.SMS_CONDITION_NOT_EXIST = 2),
      (t.SMS_SCENE_LOGIN = 0),
      (t.SMS_SCENE_FINDPWD = 1),
      (t.SMS_SCENE_REG = 2),
      (t.SMS_SCENE_BIND_MOBILE = 5),
      (t.SMS_SCENE_UNBIND_MOBILE = 6),
      (t.SMS_SCENE_MODIFY_MOBILE = 7),
      (t.SMS_SCENE_SET_EMAIL = 8),
      (t.SMS_SCENE_MODIFY_EMAIL = 9),
      (t.SMS_SCENE_MODIFY_PASS = 10),
      (t.SMS_SCENE_CANCEL_ACCOUNT = 11),
      (t.SMS_SCENE_OAUTH_BIND_MOBILE = 12),
      (t.SMS_SCENE_MODIFY_SECEMAIL = 13),
      (t.SMS_SCENE_SET_SECEMAIL = 14),
      (t.SMS_SCENE_OTHER = 99)
  },
  function (e, t, n) {
    !(function (e) {
      var t = n(14).getLogger('config'),
        i = e.$,
        r = [
          '360.cn',
          '360pay.cn',
          'so.com',
          'qiku.com',
          '360shouji.com',
          '360.com'
        ],
        o = {
          charset:
            document.charset ||
            document.defaultCharset ||
            document.characterSet ||
            'UTF-8',
          supportHttps: r,
          domainList: r,
          protocol: location.protocol.replace(':', ''),
          proxy: location.protocol + '//' + location.host + '/psp_jump.html',
          ignoreCookie: !1,
          disableSecurityCheck: !1,
          useMonitor: !0,
          maskZIndex: 4e3,
          signIn: {
            hideKeepAlive: !0,
            accountPlaceholder:
              '\u624b\u673a\u53f7/\u7528\u6237\u540d/\u90ae\u7bb1',
            mobilePlaceholder: '\u624b\u673a\u53f7',
            passwordPlaceholder: '\u5bc6\u7801',
            signUpTip: '\u5feb\u901f\u6ce8\u518c',
            findPwdTip: '\u627e\u56de\u5bc6\u7801',
            keepAliveTip: '\u8bb0\u4f4f\u6211',
            normal: { onlyMobile: !1 },
            qrcode: {
              panelTitle: '360\u5e10\u53f7\u626b\u7801\u767b\u5f55',
              icon: '//p4.ssl.qhimg.com/t013668e3d403844d04.png',
              appLegendUrl: '//p5.ssl.qhimg.com/t017d5686aa6ea6224d.png',
              appName: '360\u5e10\u53f7\u536b\u58eb',
              appUrl: '//i.360.cn/security/accountguard',
              description:
                '\u6253\u5f00 360\u5e10\u53f7\u536b\u58eb \u70b9\u51fb\u626b\u7801\u767b\u5f55'
            }
          },
          signUp: {
            types: ['mobile'],
            hideUsername: !0,
            hideNickname: !0,
            hidePasswordAgain: !0,
            mobilePlaceholder: '\u624b\u673a\u53f7',
            emailPlaceholder: '\u90ae\u7bb1',
            captchaPlaceholder: '\u9a8c\u8bc1\u7801',
            smscodePlaceholder: '\u77ed\u4fe1\u9a8c\u8bc1\u7801',
            passwordPlaceholder:
              '\u5bc6\u7801\uff088-20\u4e2a\u5b57\u7b26\uff09',
            nickNamePlaceholder: '\u6635\u79f0',
            userNamePlaceholder: '\u7528\u6237\u540d',
            protocolText: '360\u7528\u6237\u670d\u52a1\u6761\u6b3e',
            protocolUrl: '//i.360.cn/pub/protocol.html',
            privacyText: '360\u7528\u6237\u9690\u79c1\u653f\u7b56',
            privacyUrl: '//i.360.cn/reg/privacy'
          },
          fillProfile: { hidePasswordAgain: !0, type: 'mobile' },
          bindMobile: { showMoBileZone: !0 }
        }
      ;(e.getConfig = function (e, n) {
        n = void 0 !== n ? n : null
        for (var r, a = o, c = e.split('.'); c.length > 0; )
          if (((r = c.shift()), 0 != r.length)) {
            if (void 0 === a[r] || (c.length > 0 && !i.isPlainObject(a[r])))
              return n
            a = a[r]
          }
        var s = i.isPlainObject(a) ? i.extend({}, a) : a
        return t.verbose('get config', { key: e, value: s }), s
      }),
        (e.setConfig = function (t, n) {
          if (!t)
            return (
              e.events.trigger(
                'warn.config',
                'setConfig parameter key is null or undefined'
              ),
              e
            )
          if (i.isPlainObject(t)) return a(!0, o, t), e
          for (var r, c, s = o, u = t.split('.'), l = !1; u.length > 0; ) {
            if (
              ((c = u.shift()),
              void 0 === s[c] && (s[c] = {}),
              !i.isPlainObject(s[c]) && u.length > 0)
            ) {
              l = !0
              break
            }
            ;(r = s), (s = s[c])
          }
          return (
            l
              ? e.events.trigger(
                  'warn.config',
                  'setConfig cannot be set on ' + t
                )
              : (r[c] = n),
            e
          )
        })
      var a = function () {
        var e,
          t,
          n,
          r,
          o,
          c = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1
        for (
          'boolean' == typeof c && ((l = c), (c = arguments[1] || {}), (s = 2)),
            'object' == typeof c || i.isFunction(c) || (c = {});
          s < u;
          s++
        )
          if (null != (r = arguments[s]))
            for (n in r)
              (e = c[n]),
                (t = r[n]),
                c !== t &&
                  (l && t && i.isPlainObject(t)
                    ? ((o = e && i.isPlainObject(e) ? e : {}),
                      (c[n] = a(l, o, t)))
                    : void 0 !== t && (c[n] = t))
        return c
      }
    })(myQHPass)
  },
  function (e, t, n) {
    !(function (e) {
      var t = n(14).getLogger('events'),
        i = e.$,
        r = i({})
      ;(e.events = {
        trigger: function (e, n) {
          t.debug('trigger', e), (e = e.toLowerCase()), r.triggerHandler(e, n)
          var i = e.match(/^([^.]+)\.(.*)$/)
          i &&
            ((e = i[1] + '.\\*'),
            (n = { namespace: i[2], data: n }),
            r.triggerHandler(e, n))
        },
        getHandler: function (e) {
          e = e.toLowerCase(e + '')
          var t = e.split('.'),
            n = t[0],
            o = i._data(r[0]).events,
            a = o[n]
          return a
        }
      }),
        i.each(['on', 'off', 'one'], function (t, n) {
          e.events[n] = function () {
            var t,
              o,
              a = [].slice.apply(arguments)
            ;(a[0] = a[0].toLowerCase()),
              a[0].match(/\.\*$/) &&
                ((o = a.pop()),
                (t = function (e, t) {
                  ;(e.namespace = e.namespace.replace(/\\\*/, t.namespace)),
                    (e.isWildcard = !0),
                    o.call(this, e, t.data)
                }),
                (t.guid = o.guid || (o.guid = e.utils.getGuid())),
                a.push(t)),
              i.fn[n].apply(r, a)
          }
        })
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = e.utils,
        i = parseInt(new Date().getTime().toString().substr(4), 10)
      ;(n.isExisted = function (e) {
        var t = e.length
        return t > 0
      }),
        (n.addRandomParam = function () {
          var n = e.utils.md5,
            i = t('a'),
            r = /\//,
            o = /\?/,
            a = /#/,
            c = ''
          t.each(i, function () {
            var e = t(this).attr('href'),
              i = r.test(e),
              s = o.test(e),
              u = a.test(e),
              l = Math.random() + ''
            i &&
              !u &&
              ((c = s ? '&sb_param=' + n(l) : '?sb_param=' + n(l)),
              t(this).attr('href', e + c))
          })
        }),
        (n.getGuid = 
      var r = 'quc-ie-placeholder'
      if (
        ((n.initPlaceholder = function (e) {
          t(e).placeholder({ customClass: r })
        }),
        (n.resetPlaceholder = function (e) {
          t(e).each(function () {
            var e = t(this)
            if (e.hasClass(r)) {
              e.removeData('placeholderEnabled'), e.val(''), e.removeClass(r)
              var n = e.data('placeholder-password')
              n && (e.remove(), n.removeData().show()), e.removeData()
            }
          })
        }),
        (n.parseCallback = function (e) {
          return 'function' == t.type(e)
            ? e
            : e === !0
            ? function () {
                location.reload()
              }
            : 'string' == t.type(e) && 0 === e.indexOf('http')
            ?             : function () {}
        }),
        (n.setCookie = function (e, t, n) {
          var i = new Date()
          ;(n = void 0 !== n ? n : 2),
            i.setTime(i.getTime() + 864e5 * n),
            (document.cookie =
              e +
              '=' +
              encodeURIComponent(t) +
              ';expires=' +
              i.toGMTString() +
              ';path=/')
        }),
        (n.getCookie = function (e) {
          var t = null,
            n = new RegExp('(^| )' + e + '=([^;]*)(;|$)'),
            i = document.cookie.match(n)
          return i && (t = decodeURIComponent(i[2])), t
        }),
        (n.throttle = function (e, t, n, i) {
          var r,
            o,
            a,
            c = +new Date(),
            s = 0,
            u = 0,
            l = null,
            f = function () {
              ;(u = c), e.apply(o, a)
            }
          return function () {
            ;(c = +new Date()),
              (o = this),
              (a = arguments),
              (r = c - (i ? s : u) - t),
              clearTimeout(l),
              i
                ? n
                  ? (l = setTimeout(f, t))
                  : r >= 0 && f()
                : r >= 0
                ? f()
                : n && (l = setTimeout(f, -r)),
              (s = c)
          }
        }),
        (n.debounce = ,
        (n.bind = function (e, n) {
          if (e.bind && e.bind === Function.prototype.bind) return e.bind(n)
          if (!t.isFunction(e)) throw new TypeError()
          var i = [].slice.call(arguments, 2),
            r = function () {
              var t = [].slice.apply(arguments)
              if (!(this instanceof r)) return e.apply(n, i.concat(t))
              var o = function () {}
              o.prototype = e.prototype
              var a = new o()
              o.prototype = null
              var c = e.apply(a, i.concat(t))
              return Object(c) === c ? c : a
            }
          return r
        }),
        (n.initInputId = function (e) {
          t(e)
            .find('.quc-input:not([id])')
            .each(function (e, i) {
              var r = t(i),
                o = r.parent()
              if (
                ((o = 'LABEL' == o[0].tagName ? o : o.siblings('label')),
                o.length)
              ) {
                var a = 'quc_' + r.attr('name') + '_' + n.getGuid()
                r.attr('id', a), o.attr('for', a)
              }
            })
        }),
        (n.selectText = function (e, n, i) {
          var r = t(e),
            o = r.val().length
          for (n = parseInt(n) || 0, i = parseInt(i) || o; n < 0; ) n += o
          r.each(function (e, t) {
            if (t.createTextRange) {
              var r = t.createTextRange()
              r.collapse(!0),
                r.moveStart('character', n),
                r.moveEnd('character', i),
                r.select()
            } else if (t.setSelectionRange) t.setSelectionRange(n, i)
            else {
              if (!t.selectionStart) return !1
              ;(t.selectionStart = n), (t.selectionEnd = i)
            }
          }),
            r.focus()
        }),
        (n.JSON = {
          parse: t.parseJSON,
          stringify:
            window.JSON && JSON.stringify
              ? JSON.stringify
              : function (e) {
                  var n = function (e) {
                      var i = typeof e,
                        r = t.isArray(e)
                      if ('string' == i) return '"' + e.replace(/"/g, '"') + '"'
                      if ('number' == i || 'boolean' == i) return e
                      if (r || t.isPlainObject(e)) {
                        var o = t
                          .map(e, function (e, t) {
                            return r
                              ? n(e)
                              : '"' +
                                  t.toString().replace(/"/g, '"') +
                                  '":' +
                                  n(e)
                          })
                          .join()
                        return r ? '[' + o + ']' : '{' + o + '}'
                      }
                      return null
                    },
                    i = n(e)
                  return i && i.toString()
                }
        }),
        (n.support = t.extend({ fixed: !1 }, t.support)),
        t(function () {
          try {
            var e = t(document.body),
              i = t('<div>').height(3e3),
              r = t('<div>')
                .css({ position: 'fixed', top: 100 })
                .html('x')
                .appendTo(i),
              o = e.scrollTop()
            i.appendTo(e)
            var a = t(document.documentElement).position().top
            ;(a = a > 0 ? a : 0), e.scrollTop(500)
            var c = r[0].offsetTop
            ;(n.support.fixed = c - a === 100), i.remove(), e.scrollTop(o)
          } catch (s) {}
        }),
        (n.browser = (function () {
          var e = window.navigator,
            t = e.userAgent.toLowerCase(),
            n = /(msie|webkit|gecko|presto|opera|safari|firefox|chrome|maxthon|android|ipad|iphone|webos|hpwos|trident)[ \/os]*([\d_.]+)/gi,
            i = { platform: e.platform }
          if (
            (t.replace(n, ,
            i.opera &&
              t.replace(/opera.*version\/([\d.]+)/, function (e, t) {
                i.opera = t
              }),
            !i.msie &&
              i.trident &&
              t.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/gi, function (e, t) {
                i.msie = t
              }),
            i.msie)
          ) {
            i.ie = i.msie
            var r = parseInt(i.msie, 10)
            i['ie' + r] = !0
          }
          return i
        })()),
        n.browser.ie && n.browser.ie6)
      )
        try {
          document.execCommand('BackgroundImageCache', !1, !0)
        } catch (o) {}
      e.events.on('afterShow.* DOMUpdated.*', 
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = window.document,
        i = {
          set: function (e, t) {
            localStorage.setItem(e, t)
          },
          get: function (e, t) {
            var n = localStorage.getItem(e)
            return null !== n ? n : t
          },
          remove: function (e) {
            localStorage.removeItem(e)
          }
        },
        r = {
          set: function (e, t) {
            sessionStorage.setItem(e, t)
          },
          get: function (e, t) {
            var n = sessionStorage.getItem(e)
            return null !== n ? n : t
          },
          remove: function (e) {
            sessionStorage.removeItem(e)
          }
        },
        o = {
          set: function (e, t, i) {
            i = i || {}
            var r = i.expires
            'number' == typeof r &&
              ((r = new Date()), r.setTime(r.getTime() + i.expires))
            try {
              return (
                (n.cookie =
                  e +
                  '=' +
                  escape(t) +
                  (r ? ';expires=' + r.toGMTString() : '') +
                  (i.path ? ';path=' + i.path : '') +
                  (i.domain ? '; domain=' + i.domain : '')),
                !0
              )
            } catch (o) {
              return !1
            }
          },
          get: function (e, t) {
            try {
              var i = new RegExp('(^| )' + e + '=([^;]*)(;|$)'),
                r = n.cookie.match(i)
              if (r) return unescape(r[2])
            } catch (o) {}
            return t
          },
          remove:         },
        a = (e.utils.isCookieEnabled = function () {
          if (!n.cookie && !navigator.cookieEnabled) return !1
          var e = 'test_cookie_enable',
            t = 'test' + Math.random(),
            i = o.set(e, t)
          if (!i) return !1
          var r = o.get(e)
          return o.remove(e), t == r
        }),
        c = {
          storeName: 'qucUserDataStore',
          init: function () {
            var i = this
            if (!i.isInit) {
              i.isInit = !0
              var r = (i.object = t.extend(!0, {}, s))
              r.init(),
                t(function () {
                  var o = 'QhpassUserData',
                    a = e.getConfig('proxy') + '?fun=' + o,
                    c = t('<iframe>').attr('src', a).hide()
                  t(n.body).append(c),
                    (window[o] = function () {
                      clearTimeout(s), delete i.object
                      var e = c[0].contentWindow,
                        n = e.document,
                        o = (i.store = n.createElement('input'))
                      setTimeout(function () {
                        o.addBehavior('#default#userData'),
                          n.body.appendChild(o),
                          o.load(i.storeName),
                          t.each(r.data, function (e, t) {
                            o.setAttribute(e, t)
                          }),
                          o.save(i.storeName)
                      }, 30)
                    })
                  var s = setTimeout(function () {
                    c.remove()
                  }, 2e4)
                })
            }
          },
          set: function (e, t) {
            this.object
              ? this.object.set(e, t)
              : (this.store.load(this.storeName),
                this.store.setAttribute(e, t),
                this.store.save(this.storeName))
          },
          get: function (e, t) {
            if (this.object) return this.object.get(e, t)
            this.store.load(this.storeName)
            var n = this.store.getAttribute(e)
            return null !== n ? n : t
          },
          remove:         },
        s = {
          init: 
          set: function (e, t) {
            this.data[e] = t
          },
          get: function (e, t) {
            var n = this.data[e]
            return void 0 !== n ? n : t
          },
          remove: function (e) {
            delete this.data[e]
          }
        },
        u = navigator.userAgent.toLowerCase(),
        l = u.match(/msie ([\d.]+)/),
        f = l && l[1],
        p = 6 == f || 7 == f
      ;(e.utils.storage = function (e) {
        var t
        switch (e) {
          default:
          case 'local':
            try {
              t = window.localStorage ? i : p ? c : s
            } catch (n) {
              t = s
            }
            break
          case 'session':
            try {
              t = window.sessionStorage ? r : s
            } catch (n) {
              t = s
            }
            break
          case 'cookie':
            t = a() ? o : s
            break
          case 'page':
            t = s
        }
        return t.init && t.init(), t
      }),
        p && c.init()
    })(myQHPass)
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
        var n = t.$ || window.$,
          i =
            '<a class="quc-link quc-link-login" href="//i.360.cn/login" target="_blank">\u7acb\u5373\u767b\u5f55</a>',
          r = {
            REALNAME_EMPTY: {
              errno: 204,
              errmsg: '\u8bf7\u8f93\u5165\u60a8\u7684\u771f\u5b9e\u59d3\u540d',
              errmsg_en: 'Please enter actual name'
            },
            REALNAME_INVALID: {
              errno: 227,
              errmsg:
                '\u8bf7\u786e\u8ba4\u60a8\u8f93\u5165\u7684\u771f\u5b9e\u59d3\u540d\u662f\u5426\u6709\u8bef',
              errmsg_en: 'Actual name error'
            },
            ACCOUNT_EMPTY: {
              errno: 1030,
              errmsg: '\u8bf7\u8f93\u5165360\u5e10\u53f7',
              errmsg_en: 'Please enter your account'
            },
            ACCOUNT_INVALID: {
              errno: 1035,
              errmsg:
                '\u8bf7\u786e\u8ba4\u60a8\u7684\u5e10\u53f7\u8f93\u5165\u662f\u5426\u6709\u8bef',
              errmsg_en: 'Account error'
            },
            ACCOUNT_NOT_EXIST: {
              errno: 1036,
              errmsg: '\u5e10\u53f7\u4e0d\u5b58\u5728'
            },
            ACCOUNT_DUPLICATE: {
              errno: 1037,
              errmsg: '\u8be5\u5e10\u53f7\u5df2\u7ecf\u6ce8\u518c\uff0c' + i,
              errmsg_en: 'Account occupied'
            },
            USERNAME_DUPLICATE: {
              errno: 213,
              errmsg:
                '\u7528\u6237\u540d\u5df2\u7ecf\u88ab\u4f7f\u7528\uff0c' + i,
              errmsg_en: 'Username occupied'
            },
            USERNAME_EMPTY: {
              errno: 215,
              errmsg: '\u8bf7\u8f93\u5165\u7528\u6237\u540d',
              errmsg_en: 'Please enter username'
            },
            USERNAME_INAPPROPRIATE: {
              errno: 225,
              errmsg:
                '\u7528\u6237\u540d\u5305\u542b\u4e0d\u9002\u5f53\u5185\u5bb9',
              errmsg_en: ''
            },
            USERNAME_INVALID: {
              errno: 199,
              errmsg:
                '\u7528\u6237\u540d\u5e94\u4e3a2-14\u4e2a\u5b57\u7b26,\u652f\u6301\u4e2d\u82f1\u6587\u3001\u6570\u5b57\u6216"_"',
              errmsg_en: 'Username error'
            },
            USERNAME_NUMBER: {
              errno: 200,
              errmsg: '\u7528\u6237\u540d\u4e0d\u80fd\u5168\u4e3a\u6570\u5b57',
              errmsg_en: ''
            },
            NICKNAME_EMPTY: {
              errno: 205,
              errmsg: '\u8bf7\u8f93\u5165\u6635\u79f0',
              errmsg_en: 'Please enter nickname'
            },
            NICKNAME_DUPLICATE: {
              errno: 260,
              errmsg: '\u6635\u79f0\u5df2\u7ecf\u88ab\u5360\u7528',
              errmsg_en: 'Nickname occupied'
            },
            NICKNAME_INAPPROPRIATE: {
              errno: 226,
              errmsg: '\u6635\u79f0\u5305\u542b\u4e0d\u9002\u5f53\u5185\u5bb9',
              errmsg_en: ''
            },
            NICKNAME_NUMBER: {
              errno: 262,
              errmsg: '\u6635\u79f0\u4e0d\u80fd\u5168\u90e8\u662f\u6570\u5b57',
              errmsg_en: ''
            },
            NICKNAME_INVALID: {
              errno: 15e3,
              errmsg:
                '\u6635\u79f0\u5e94\u4e3a2-14\u4e2a\u5b57\u7b26,\u652f\u6301\u4e2d\u82f1\u6587\u3001\u6570\u5b57\u3001"_"\u6216"."',
              errmsg_en: ''
            },
            EMAIL_EMPTY: {
              errno: 203,
              errmsg: '\u8bf7\u8f93\u5165\u90ae\u7bb1',
              errmsg_en: 'Please enter mail address'
            },
            EMAIL_INVALID: {
              errno: 1532,
              errmsg: '\u90ae\u7bb1\u683c\u5f0f\u6709\u8bef',
              errmsg_en: 'E-mail format error'
            },
            EMAIL_NOT_ACTIVATED: { errno: 2e4 },
            MOBILE_EMPTY: {
              errno: 1107,
              errmsg: '\u8bf7\u8f93\u5165\u624b\u673a\u53f7',
              errmsg_en: 'Please enter phone number'
            },
            MOBILE_INVALID: {
              errno: 1100,
              errmsg: '\u624b\u673a\u53f7\u683c\u5f0f\u6709\u8bef',
              errmsg_en: 'Phone number error'
            },
            MOBILE_DUPLICATE: {
              errno: 1106,
              errmsg:
                '\u8be5\u624b\u673a\u53f7\u5df2\u7ecf\u6ce8\u518c\uff0c' + i,
              errmsg_en: 'Phone number occupied'
            },
            MOBILE_NOT_EXIST: {
              errno: 1105,
              errmsg:
                '\u8be5\u624b\u673a\u53f7\u672a\u6ce8\u518c360\u5e10\u53f7'
            },
            CAPTCHA_INVALID: {
              errno: 78e3,
              errmsg:
                '\u9a8c\u8bc1\u7801\u9519\u8bef\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en: 'Please enter the verification code'
            },
            CAPTCHA_INVALID_OLD: {
              errno: 1670,
              errmsg:
                '\u9a8c\u8bc1\u7801\u9519\u8bef\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en: 'Please enter the verification code'
            },
            CAPTCHA_EMPTY: {
              errno: 78002,
              errmsg: '\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801',
              errmsg_en: 'Please enter the verification code'
            },
            CAPTCHA_APPID_INVALID: {
              errno: 1300,
              errmsg: '\u9a8c\u8bc1\u7801\u683c\u5f0f\u6709\u8bef',
              errmsg_en: 'Incorrect Verification Code'
            },
            SMS_TOKEN_EMPTY: {
              errno: 1350,
              errmsg: '\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801',
              errmsg_en: 'Please enter the verification code'
            },
            SMS_TOKEN_INCORRECT: {
              errno: 1351,
              errmsg: '\u9a8c\u8bc1\u7801\u8f93\u5165\u6709\u8bef',
              errmsg_en: 'Verification Code Error'
            },
            PASSWORD_TOO_SHORT: {
              errno: 51066,
              errmsg:
                '\u5bc6\u7801\u4e0d\u80fd\u5c11\u4e8e8\u4f4d\u5b57\u7b26\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en:
                "The password can't be less than 8 characters, please reenter"
            },
            PASSWORD_TOO_LONG: {
              errno: 51067,
              errmsg:
                '\u5bc6\u7801\u6700\u5927\u957f\u5ea6\u4e3a20\u4f4d\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en:
                'The password maximum length is 20 characters, please reenter'
            },
            PASSWORD_TOO_SIMPLE: {
              errno: 51068,
              errmsg:
                '\u81f3\u5c11\u5305\u542b\u6570\u5b57/\u5b57\u6bcd/\u5b57\u7b26\u4e24\u79cd\u7ec4\u5408\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en:
                'Contain at least two combinations of number/letter/character, please reenter'
            },
            PASSWORD_HAS_EMPTY: {
              errno: 51069,
              errmsg:
                '\u5bc6\u7801\u4e0d\u5141\u8bb8\u6709\u7a7a\u683c\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en:
                "The password isn't allowed to have Spaces, please reenter"
            },
            PASSWORD_CHAR_INVALID: {
              errno: 51070,
              errmsg:
                '\u4e0d\u80fd\u542b\u6709\u975e\u6cd5\u5b57\u7b26\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en: "Can't contain illegal characters, please reenter"
            },
            PASSWORD_ACCOUNT_INCLUDES: {
              errno: 51071,
              errmsg:
                '\u60a8\u7684\u5bc6\u7801\u4e0e\u7528\u6237\u540d\u8fc7\u4e8e\u76f8\u4f3c\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en:
                'Your password is too similar to the user name, please reenter'
            },
            PASSWORD_EMPTY: {
              errno: 211,
              errmsg: '\u8bf7\u8f93\u5165\u5bc6\u7801',
              errmsg_en: "You can't leave password empty"
            },
            PASSWORD_INVALID: {
              errno: 1065,
              errmsg:
                '\u5bc6\u7801\u957f\u5ea6\u5e94\u4e3a8-20\u4e2a\u5b57\u7b26',
              errmsg_en: 'Use at least 8 characters'
            },
            PASSWORD_LEVEL_LOW: {
              errno: 54999,
              errmsg: '\u5bc6\u7801\u5b89\u5168\u7ea7\u522b\u8fc7\u4f4e',
              errmsg_en: 'These passwords are easy to guess'
            },
            PASSWORD_WEAK: {
              errno: 54999,
              errmsg:
                '\u5bc6\u7801\u5f31\uff0c\u6709\u98ce\u9669\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en: 'These passwords are easy to guess'
            },
            PASSWORD_ORDERED: {
              errno: 54999,
              errmsg: '\u5bc6\u7801\u4e0d\u80fd\u4e3a\u8fde\u7eed\u5b57\u7b26',
              errmsg_en: 'These passwords are easy to guess'
            },
            PASSWORD_CHAR_REPEAT: {
              errno: 54999,
              errmsg:
                '\u5bc6\u7801\u4e0d\u80fd\u5168\u4e3a\u76f8\u540c\u5b57\u7b26',
              errmsg_en: 'These passwords are easy to guess'
            },
            PASSWORD_WRONG: {
              errno: 220,
              errmsg:
                '\u767b\u5f55\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165',
              errmsg_en: "These passwords don't match"
            },
            PASSWORD_NOT_MATCH: {
              errno: 1091,
              errmsg: '\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4',
              errmsg_en: "These passwords don't match"
            },
            PASSWORD_FULL_SHARP: {
              errno: 54e3,
              errmsg:
                '\u5bc6\u7801\u4e0d\u80fd\u5305\u542b\u4e2d\u6587\u5b57\u7b26\uff0c\u8bf7\u91cd\u65b0\u8bbe\u7f6e',
              errmsg_en: 'Please use only letters (a-z), numbers, and periods.'
            },
            IDENTIFY_EXPIRE: { errno: 153e3 },
            NOT_SIGNED_IN: {
              errno: 1501,
              errmsg: '\u7528\u6237\u672a\u767b\u9646',
              errmsg_en: ''
            },
            UNKNOWN_ERROR: {
              errno: 999999,
              errmsg: '\u672a\u77e5\u9519\u8bef',
              errmsg_en: ''
            },
            SUCCESS: {
              errno: 0,
              errmsg: '\u64cd\u4f5c\u6210\u529f',
              errmsg_en: ''
            },
            TIME_OUT: {
              errno: 1,
              errmsg: '\u7f51\u7edc\u8d85\u65f6',
              errmsg_en: ''
            }
          },
          o = 'errmsg',
          a = window.i18n
        a && a.is('en') && (o = 'errmsg_en')
        var c = (t.ERROR = e.forIn(r, ),
          s = (t.utils = t.utils || {}),
          u = {
            1402: '\u624b\u673a\u53f7\u5f53\u5929\u53d1\u9001\u77ed\u4fe1\u6b21\u6570\u8d85\u9650',
            201: '\u8be5\u90ae\u7bb1\u5df2\u7ecf\u6ce8\u518c\uff0c' + i,
            3e4: '\u8be5\u624b\u673a\u53f7\u5df2\u7ecf\u6ce8\u518c\uff0c\u8bf7\u76f4\u63a5\u7528\u624b\u673a\u53f7\u767b\u5f55',
            30007: '\u8be5\u624b\u673a\u53f7\u5df2\u7ecf\u6ce8\u518c\uff0c\u8bf7\u76f4\u63a5\u7528\u624b\u673a\u53f7\u767b\u5f55',
            65002: '\u8be5\u5e10\u53f7\u672a\u5f00\u542f\u77ed\u4fe1\u767b\u5f55\u529f\u80fd\uff0c<a class="quc-link" href="//i.360.cn/security/setloginmethod" target="_blank">\u7acb\u5373\u5f00\u542f</a>',
            65001: '\u8be5\u5e10\u53f7\u53ea\u80fd\u901a\u8fc7\u77ed\u4fe1\u767b\u5f55\uff0c<a class="quc-link quc-link-login" href="//i.360.cn/security/setloginmethod" target="_blank">\u5173\u95ed\u6b64\u529f\u80fd</a>',
            221: '\u5e10\u53f7\u88ab\u5c01\u7981\uff0c<a class="quc-link quc-link-login" href="//i.360.cn/complaint" target="_blank">\u70b9\u6b64\u8054\u7cfb\u5ba2\u670d</a>',
            78001: '\u63d0\u4ea4\u8fc7\u4e8e\u9891\u7e41\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
          }
        n.each(c, function (e, t) {
          t.errmsg && t.errmsg.length > 0 && (u[t.errno] = t.errmsg)
        }),
          (s.isSameError = function (e, t) {
            return (
              void 0 !== e.errno && void 0 !== t.errno && e.errno === t.errno
            )
          }),
          (s.defineError = function (e, t) {
            var n
            for (var i in c)
              c.hasOwnProperty(i) &&
                c[i].errno == e &&
                ((n = c[i]), (n.errmsg = t))
            u[e] = t
          }),
          (s.getErrorMsg = function (e, t) {
            return (
              n.isPlainObject(e) && ((t = e.errmsg), (e = e.errno)),
              u[e] ||
                t
                  .replace(/\+/g, ' ')
                  .replace(/class=(['"]).+?\1/, 'class="quc-link"')
            )
          }),
          (s.getErrorType = function (e) {
            if (null != e) {
              switch ((e = e.errno || e)) {
                case c.MOBILE_EMPTY.errno:
                case c.MOBILE_INVALID.errno:
                case c.MOBILE_DUPLICATE.errno:
                case c.MOBILE_NOT_EXIST.errno:
                  return 'mobile'
                case c.EMAIL_EMPTY.errno:
                case c.EMAIL_INVALID.errno:
                  return 'email'
                case c.ACCOUNT_EMPTY.errno:
                case c.USERNAME_EMPTY.errno:
                case c.USERNAME_INVALID.errno:
                case c.USERNAME_DUPLICATE.errno:
                case c.USERNAME_NUMBER.errno:
                case c.USERNAME_INAPPROPRIATE.errno:
                case c.ACCOUNT_NOT_EXIST.errno:
                  return 'userName'
                case c.NICKNAME_EMPTY.errno:
                case c.NICKNAME_INVALID.errno:
                case c.NICKNAME_DUPLICATE.errno:
                case c.NICKNAME_INAPPROPRIATE.errno:
                case c.NICKNAME_NUMBER.errno:
                  return 'nickName'
                case c.ACCOUNT_INVALID.errno:
                case c.ACCOUNT_DUPLICATE.errno:
                  return 'account'
                case c.PASSWORD_INVALID.errno:
                case c.PASSWORD_EMPTY.errno:
                case c.PASSWORD_CHAR_REPEAT.errno:
                case c.PASSWORD_WRONG.errno:
                case c.PASSWORD_ORDERED.errno:
                case c.PASSWORD_WEAK.errno:
                case c.PASSWORD_LEVEL_LOW.errno:
                  return 'password'
                case c.PASSWORD_NOT_MATCH.errno:
                  return 'rePassword'
                case c.CAPTCHA_INVALID.errno:
                case c.CAPTCHA_EMPTY.errno:
                case c.CAPTCHA_APPID_INVALID.errno:
                case c.CAPTCHA_INVALID_OLD.errno:
                  return 'captcha'
                case c.SMS_TOKEN_EMPTY.errno:
                case c.SMS_TOKEN_INCORRECT.errno:
                  return 'smscode'
              }
              return (
                (e -= e > 9e5 ? 9e5 : 0),
                e >= 1e4 && e < 15e3
                  ? 'userName'
                  : e >= 15e3 && e < 2e4
                  ? 'nickName'
                  : e >= 2e4 && e < 3e4
                  ? 'email'
                  : e >= 3e4 && e < 45e3
                  ? 'mobile'
                  : (e >= 5e4 && e < 55e3) || 1070 == e
                  ? 'password'
                  : e >= 55e3 && e < 6e4
                  ? 'secemail'
                  : e >= 65e3 && e < 75e3
                  ? 'account'
                  : e >= 78e3 && e < 79e3
                  ? 'captcha'
                  : 'other'
              )
            }
          })
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t) {
    !(function (e) {
                                                function s(e, n) {
        ;(e[n >> 5] |= 128 << n % 32), (e[(((n + 64) >>> 9) << 4) + 14] = n)
        var i,
          s,
          u,
          l,
          f,
          p = 1732584193,
          d = -271733879,
          h = -1732584194,
          m = 271733878
        for (i = 0; i < e.length; i += 16)
          (s = p),
            (u = d),
            (l = h),
            (f = m),
            (p = r(p, d, h, m, e[i], 7, -680876936)),
            (m = r(m, p, d, h, e[i + 1], 12, -389564586)),
            (h = r(h, m, p, d, e[i + 2], 17, 606105819)),
            (d = r(d, h, m, p, e[i + 3], 22, -1044525330)),
            (p = r(p, d, h, m, e[i + 4], 7, -176418897)),
            (m = r(m, p, d, h, e[i + 5], 12, 1200080426)),
            (h = r(h, m, p, d, e[i + 6], 17, -1473231341)),
            (d = r(d, h, m, p, e[i + 7], 22, -45705983)),
            (p = r(p, d, h, m, e[i + 8], 7, 1770035416)),
            (m = r(m, p, d, h, e[i + 9], 12, -1958414417)),
            (h = r(h, m, p, d, e[i + 10], 17, -42063)),
            (d = r(d, h, m, p, e[i + 11], 22, -1990404162)),
            (p = r(p, d, h, m, e[i + 12], 7, 1804603682)),
            (m = r(m, p, d, h, e[i + 13], 12, -40341101)),
            (h = r(h, m, p, d, e[i + 14], 17, -1502002290)),
            (d = r(d, h, m, p, e[i + 15], 22, 1236535329)),
            (p = o(p, d, h, m, e[i + 1], 5, -165796510)),
            (m = o(m, p, d, h, e[i + 6], 9, -1069501632)),
            (h = o(h, m, p, d, e[i + 11], 14, 643717713)),
            (d = o(d, h, m, p, e[i], 20, -373897302)),
            (p = o(p, d, h, m, e[i + 5], 5, -701558691)),
            (m = o(m, p, d, h, e[i + 10], 9, 38016083)),
            (h = o(h, m, p, d, e[i + 15], 14, -660478335)),
            (d = o(d, h, m, p, e[i + 4], 20, -405537848)),
            (p = o(p, d, h, m, e[i + 9], 5, 568446438)),
            (m = o(m, p, d, h, e[i + 14], 9, -1019803690)),
            (h = o(h, m, p, d, e[i + 3], 14, -187363961)),
            (d = o(d, h, m, p, e[i + 8], 20, 1163531501)),
            (p = o(p, d, h, m, e[i + 13], 5, -1444681467)),
            (m = o(m, p, d, h, e[i + 2], 9, -51403784)),
            (h = o(h, m, p, d, e[i + 7], 14, 1735328473)),
            (d = o(d, h, m, p, e[i + 12], 20, -1926607734)),
            (p = a(p, d, h, m, e[i + 5], 4, -378558)),
            (m = a(m, p, d, h, e[i + 8], 11, -2022574463)),
            (h = a(h, m, p, d, e[i + 11], 16, 1839030562)),
            (d = a(d, h, m, p, e[i + 14], 23, -35309556)),
            (p = a(p, d, h, m, e[i + 1], 4, -1530992060)),
            (m = a(m, p, d, h, e[i + 4], 11, 1272893353)),
            (h = a(h, m, p, d, e[i + 7], 16, -155497632)),
            (d = a(d, h, m, p, e[i + 10], 23, -1094730640)),
            (p = a(p, d, h, m, e[i + 13], 4, 681279174)),
            (m = a(m, p, d, h, e[i], 11, -358537222)),
            (h = a(h, m, p, d, e[i + 3], 16, -722521979)),
            (d = a(d, h, m, p, e[i + 6], 23, 76029189)),
            (p = a(p, d, h, m, e[i + 9], 4, -640364487)),
            (m = a(m, p, d, h, e[i + 12], 11, -421815835)),
            (h = a(h, m, p, d, e[i + 15], 16, 530742520)),
            (d = a(d, h, m, p, e[i + 2], 23, -995338651)),
            (p = c(p, d, h, m, e[i], 6, -198630844)),
            (m = c(m, p, d, h, e[i + 7], 10, 1126891415)),
            (h = c(h, m, p, d, e[i + 14], 15, -1416354905)),
            (d = c(d, h, m, p, e[i + 5], 21, -57434055)),
            (p = c(p, d, h, m, e[i + 12], 6, 1700485571)),
            (m = c(m, p, d, h, e[i + 3], 10, -1894986606)),
            (h = c(h, m, p, d, e[i + 10], 15, -1051523)),
            (d = c(d, h, m, p, e[i + 1], 21, -2054922799)),
            (p = c(p, d, h, m, e[i + 8], 6, 1873313359)),
            (m = c(m, p, d, h, e[i + 15], 10, -30611744)),
            (h = c(h, m, p, d, e[i + 6], 15, -1560198380)),
            (d = c(d, h, m, p, e[i + 13], 21, 1309151649)),
            (p = c(p, d, h, m, e[i + 4], 6, -145523070)),
            (m = c(m, p, d, h, e[i + 11], 10, -1120210379)),
            (h = c(h, m, p, d, e[i + 2], 15, 718787259)),
            (d = c(d, h, m, p, e[i + 9], 21, -343485551)),
            (p = t(p, s)),
            (d = t(d, u)),
            (h = t(h, l)),
            (m = t(m, f))
        return [p, d, h, m]
      }
                                    function h(e) {
        return unescape(encodeURIComponent(e))
      }
      function m(e) {
        return f(h(e))
      }
                        e.utils.md5 =     })(myQHPass)
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
                function r(e, t, n) {
          var r = i(e)
          return t <= r && r <= n
        }
        function o(e) {
          return (e = void 0 === e ? '' : e), 0 == e.length
        }
        function a(e) {
          e = String(e)
          for (var t, n = e.length, i = null, r = 1; r < n; r++) {
            if (
              ((t = e.charCodeAt(r) - e.charCodeAt(r - 1)),
              (null !== i && i !== t) || Math.abs(t) > 1)
            )
              return !1
            i = t
          }
          return !0
        }
        function c(e) {
          e = String(e)
          var t,
            n = e.length,
            i = e.split(''),
            r = l.unique(i)
          if (n >= 21 || n <= 5) return -1
          if (1 == r.length) return -2
          if (a(e)) return -3
          if (p.join('#').indexOf('#' + e + '#') > -1) return -4
          var o = { d: 0, c: 0, o: 0 }
          return (
            l.each(r, function (e, t) {
              ;/\d/.test(t)
                ? (o.d = 1)
                : /[a-zA-Z]/.test(t)
                ? (o.c = 1)
                : (o.o = 1)
            }),
            (t = o.d + o.c + o.o + (n > 9 ? 2 : 1)),
            (t = Math.max(3, t))
          )
        }
        var s = window.logger || n(14),
          u = s.getLogger('validate'),
          l = t.$ || window.$,
          f = t.ERROR,
          p = [
            '',
            'abcabc',
            'abc123',
            'a1b2c3',
            'aaa111',
            '123abc',
            '123456abc',
            'abc123456',
            'qwerty',
            'qwertyuiop',
            'qweasd',
            '123qwe',
            '1qaz2wsx',
            '1q2w3e4r',
            '1q2w3e4r5t',
            'asdasd',
            'asdfgh',
            'asdfghjkl',
            'zxcvbn',
            'qazwsxedc',
            'qq123456',
            'admin',
            'password',
            'p@ssword',
            'passwd',
            'Password',
            'Passwd',
            'Iloveyou',
            'Woaini',
            'iloveyou',
            'Wodemima',
            'Woaiwojia',
            'tamade',
            'nimade',
            '123789',
            '1234560',
            '123465',
            '123321',
            '102030',
            '100200',
            '4655321',
            '987654',
            '123123',
            '123123123',
            '121212',
            '111222',
            '12301230',
            '168168',
            '456456',
            '321321',
            '521521',
            '5201314',
            '520520',
            '201314',
            '211314',
            '7758258',
            '7758521',
            '1314520',
            '1314521',
            '147258369',
            '147852369',
            '159357',
            '741852',
            '741852963',
            '654321',
            '852963',
            '963852741',
            '115415',
            '123000',
            ''
          ],
          d = ['erotontrans.@163.com'],
          h = (myQHPass.validate = {
            checkRealName: function (e) {
              return (
                (e = l.trim(e)),
                o(e)
                  ? f.REALNAME_EMPTY
                  : !/^[\u4e00-\u9fa5]{2,5}$/.test(e) && f.REALNAME_INVALID
              )
            },
            checkUsername: function (e) {
              return (
                (e = l.trim(e)),
                o(e)
                  ? f.USERNAME_EMPTY
                  : !/^[\w\u4e00-\u9fa5\.]{2,14}$/.test(e) && f.USERNAME_INVALID
              )
            },
            checkNickname: function (e) {
              return (
                (e = l.trim(e)),
                o(e)
                  ? f.NICKNAME_EMPTY
                  : r(e, 2, 14)
                  ? !/^[\w\u4e00-\u9fa5\.]{2,14}$/.test(e) && f.NICKNAME_INVALID
                  : f.NICKNAME_TOO_SHORT
              )
            },
            isInEmailWhiteList: function (t, n) {
              return e.includes(t, n)
            },
            checkEmail: function (e) {
              var t = /^[a-z0-9](?:[\w.\-+]*[a-z0-9])?@[a-z0-9][\w.-]*\.[a-z]{2,8}$/i
              return (
                (e = l.trim(e)),
                o(e)
                  ? f.EMAIL_EMPTY
                  : !t.test(e) && !h.isInEmailWhiteList(d, e) && f.EMAIL_INVALID
              )
            },
            checkMobile: function (e, t) {
              var n, i, r
              return (
                t
                  ? ((n = l.trim(e.mobileNumber)),
                    (i = e.regExp || '^1\\d{10}$'),
                    (r = new RegExp(i)))
                  : ((n = l.trim(e)), (r = /^0?1[3456789]\d{9}$/)),
                o(n) ? f.MOBILE_EMPTY : !r.test(n) && f.MOBILE_INVALID
              )
            },
            checkAccount: function (t) {
              return e.isEmpty(t)
                ? f.ACCOUNT_EMPTY
                : !!(
                    this.checkUsername(t) &&
                    this.checkEmail(t) &&
                    this.checkMobile(t)
                  ) && f.ACCOUNT_INVALID
            },
            checkCaptcha: function (e) {
              return (
                (e = l.trim(e)),
                o(e)
                  ? f.CAPTCHA_EMPTY
                  : !/^([a-z0-9]{4,7}|\d{1,3}|[\u4E00-\u9FA5]{1,5})$/i.test(
                      e
                    ) && f.CAPTCHA_INVALID
              )
            },
            checkSmsToken: function (e) {
              return (
                (e = l.trim(e)),
                o(e)
                  ? f.SMS_TOKEN_EMPTY
                  : !(6 == e.length && !isNaN(e)) && f.SMS_TOKEN_INCORRECT
              )
            },
            isInWeakPasswordPool: 
            checkPasswordFrontend: function (t, n) {
              e.isString(t) && (t = { password: t }), (t = t || {})
              var i = t.password
              h.checkWeakPasswordRule(t, function (r, o) {
                ;(o.isInWeakPool = h.isInWeakPasswordPool(i)),
                  o.isInWeakPool &&
                    (r ||
                      ((o.level = -4),
                      (r = o.reason = e.extend(
                        { detail: '\u5728\u5f31\u5bc6\u7801\u5e93\u4e2d' },
                        f.PASSWORD_WEAK
                      )))),
                  u.debug('check password frontend', t, o),
                  n(r, o)
              })
            },
            checkPasswordFrontendSync: function (e) {
              var t
              return (
                h.checkPasswordFrontend(e, ,
                t
              )
            },
            checkWeakPasswordRule: function (t, n) {
              t = t || {}
              var i = t.password || '',
                r = null,
                o = 0,
                a = !1,
                c = i.length,
                s = { number: 0, letter: 0, other: 0 }
              e.each(e.split(i, ''), function (e) {
                ;/\d/.test(e)
                  ? s.number++
                  : /[a-zA-Z]/.test(e)
                  ? s.letter++
                  : s.other++
              })
              var u = e.filter(e.keys(s), 
              if (
                (c < 8
                  ? (r = f.PASSWORD_TOO_SHORT)
                  : c > 20
                  ? (r = f.PASSWORD_TOO_LONG)
                  : / /.test(i)
                  ? (r = f.PASSWORD_HAS_EMPTY)
                  : /[^\x00-\xff]/.test(i)
                  ? (r = f.PASSWORD_CHAR_INVALID)
                  : u.length < 2 && (r = f.PASSWORD_TOO_SIMPLE),
                !r)
              ) {
                var l = t.userName
                if (l) {
                  var p = Math.abs(l.length - i.length)
                  p <= 1 &&
                    (e.includes(l, i) || e.includes(i, l)) &&
                    (r = f.PASSWORD_ACCOUNT_INCLUDES)
                }
              }
              r && (a = !0)
              var d = {
                isWeakRule: a,
                complexLevel: o,
                reason: r,
                charTypes: u,
                charCount: s
              }
              d.isWeakRule ? n(d.reason, d) : n(null, d)
            },
            checkPassword: function (e, t) {
              if (((e = String(e)), o(e))) return f.PASSWORD_EMPTY
              if (e.match(/[^\x00-\xff]/)) return f.PASSWORD_FULL_SHARP
              if (!t) return !1
              switch (c(e)) {
                case -1:
                  return f.PASSWORD_INVALID
                case -2:
                  return f.PASSWORD_CHAR_REPEAT
                case -3:
                  return f.PASSWORD_ORDERED
                case -4:
                  return f.PASSWORD_WEAK
                default:
                  return !1
              }
            },
            evaluatePassword: 
            checkPasswordConfirm: function (e, t) {
              return e !== t && f.PASSWORD_NOT_MATCH
            }
          })
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t, n) {
    ;(function (e, t) {
      !(function (i) {
        var r = n(105),
          o = i.$,
          a = n(173),
          c = {
            title: '\u6b22\u8fce\u767b\u5f55360',
            wrapper: null,
            content: '',
            closeSelector: '.quc-panel-close',
            titleSelector: '.quc-panel-title',
            contentSelector: '.quc-panel-bd',
            closeRemove: !0,
            showMask: !0,
            fixed: !0,
            tpl: a,
            status: null,
            size: 'large',
            type: 'dialog'
          },
          s = function (e) {
            ;(this.opt = o.extend({}, c, e)), this._init(), this._initEvent()
          }
        o.extend(s.prototype, {
          _init: function () {
            var e = this.opt,
              t = e.tpl
            e.title && (t = t.replace('{title}', e.title)),
              e.content && (t = t.replace('{content}', e.content)),
              (this.$el = o(t)),
              this.$el
                .addClass('quc-panel-' + e.size)
                .addClass('quc-panel-' + e.type),
              e.wrapper ||
                this.$el
                  .addClass('quc-panel-popup')
                  .css('z-index', i.getConfig('maskZIndex')),
              (this.$hd = this.$el.find(e.titleSelector)),
              (this.$bd = this.$el.find(e.contentSelector)),
              this.setStatus(e.status)
          },
          _initEvent: function () {
            var e = this
            this.$el.on('click', this.opt.closeSelector, 
            var t = i.utils.throttle(e.adjustPosition, 10, !0)
            this._adjustPosition =             var n = o(r.getTopWindow())
            n.on('resize', this._adjustPosition),
              this.opt.fixed &&
                !i.utils.support.fixed &&
                n.on('scroll', this._adjustPosition),
              this.$el.on(
                'DOMNodeInserted DOMNodeRemoved',
                this._adjustPosition
              )
          },
          setMask: function () {
            var e = r.getTopWindow()
            if (this.opt.showMask) {
              s.$mask = s.$mask || o(n(174))
              var t = parseInt(this.$el.css('z-index'))
              if (
                (s.$mask.css('z-index', t - 1),
                o(e.document.body).append(s.$mask),
                !i.utils.support.fixed)
              ) {
                var a = o(e.document.body)
                s.$mask.css({ height: a.height(), width: a.width() })
              }
            }
            return this
          },
          removeMask: function () {
            if (this.opt.showMask && s.$mask) {
              if (e.first(this.$lastPanel)) {
                var t = parseInt(this.$lastPanel.css('z-index'))
                if (t > 0) return void s.$mask.css('z-index', t - 1)
              }
              s.$mask.remove()
            }
            return this
          },
          removeClose: function () {
            return this.$el.find(this.opt.closeSelector).remove(), this
          },
          setStatus: function (e) {
            var t = this.$el.find('.quc-panel-status')
            if (e) {
              var n = o('<i>').addClass('quc-icon')
              n.html('&#xe698;')
              var i = 'quc-error',
                r = 'quc-icon-reminder'
              'success' === e &&
                ((i = 'quc-success'),
                (r = 'quc-icon-success'),
                n.html('&#xe697;')),
                this.$el
                  .find('.quc-main')
                  .addClass('quc-panel-message-has-status'),
                n.addClass(r),
                t.addClass(i).append(n)
            }
          },
          setTitle: function (e) {
            return (
              'string' == o.type(e) && '<' != o.trim(e).substr(0, 1)
                ? this.$hd.html(e)
                : this.$hd.empty().append(o(e)),
              this
            )
          },
          setContent: function (e) {
            var t = o(e)
            return (
              this.$bd.empty().append(t),
              this.adjustPosition(),
              t.on('QucDOMUpdated', this._adjustPosition),
              this
            )
          },
          setSize: function (e, t) {
            return (
              e && this.$el.width(e),
              t && this.$bd.height(t),
              this.adjustPosition(),
              this
            )
          },
          adjustPosition: function (e, t) {
            if (!this.opt.wrapper) {
              var n = r.getTopWindow(),
                a = o(n),
                c = this.opt.fixed && this.$el.height() <= a.height(),
                u = i.utils.support.fixed
              if (0 == this.$el.parents('body').length) return this
              if (
                (e && 'center' != e
                  ? (e = parseInt(e, 10))
                  : ((e = (a.height() - this.$el.height()) / 2),
                    (e = e < 0 ? 0 : e)),
                t && 'center' != t
                  ? (t = parseInt(t, 10))
                  : ((t = (a.width() - this.$el.width()) / 2),
                    (t = t < 0 ? 0 : t)),
                (c && u) || ((e += a.scrollTop()), (t += a.scrollLeft())),
                this.$el.css({ top: e, left: t }),
                u)
              )
                this.$el.css('position', c ? 'fixed' : 'absolute')
              else if (
                (a.off('scroll', this._adjustPosition),
                c && a.on('scroll', this._adjustPosition),
                this.opt.showMask)
              ) {
                var l = o(n.document.body)
                s.$mask.css({ height: l.height(), width: l.width() })
              }
              return this
            }
          },
          show: function () {
            var e = this.opt.wrapper
            if (e)
              o(e).empty().append(this.$el),
                this.$el.find(this.opt.closeSelector).hide()
            else {
              this.$lastPanel = o('.quc-panel')
              var t = parseInt(this.$lastPanel.css('z-index'))
              t && this.$el.css('z-index', t + 2), this.setMask()
              var n = r.getTopWindow()
              this.$el.hide(),
                0 == this.$el.parent().length &&
                  this.$el.appendTo(n.document.body),
                this.adjustPosition(),
                this.$el.show()
            }
            return this
          },
          hide: function (e) {
            return (
              this.removeMask(),
              e === !0 || this.opt.closeRemove
                ? this.remove()
                : (e !== !1 && this.opt.closeRemove) || this.$el.hide(),
              this
            )
          },
          remove: function () {
            return (
              this.$hd.detach(),
              this.$bd.detach(),
              this.$el.remove(),
              o(r.getTopWindow()).off('resize', this._adjustPosition),
              this
            )
          }
        }),
          (i.utils.Panel = s),
          (i.$message = function (e) {
            return new t(function (t, r) {
              var o = n(175),
                a = new i.utils.Panel({
                  type: 'message',
                  title: e.title,
                  content: o,
                  status: e.status
                }),
                c = a.$el
              c.find('.quc-panel-message-inner').html(e.content),
                a.show(),
                setTimeout( 3e3)
            })
          }),
          (i.$alert = function () {}),
          (i.$confirm = function () {}),
          (i.$prompt = function () {})
      })(myQHPass)
    }.call(t, n(2), n(41)))
  },
  function (e, t) {
    e.exports =
      '<div class="quc-panel quc-wrapper"><div class=quc-panel-hd><div class=quc-panel-title>{title}</div><a class=quc-panel-close href=javascript:;><i class="quc-icon quc-icon-close">&#xe695;</i></a></div><div class=quc-panel-bd>{content}</div></div>'
  },
  function (e, t) {
    e.exports = '<div class=quc-mask></div>'
  },
  function (e, t) {
    e.exports =
      '<div class=quc-main><div class=quc-panel-status></div><div class=quc-panel-message-inner></div></div>'
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = function (e) {
          ;(this.timeOut = e || 120),
            (this.timeLeft = this.timeOut),
            (this.timeStep = 1e3),
            (this.running = !1)
        }
      t.extend(n.prototype, {
        start: function () {
          t(this).trigger('timer_start', this.timeLeft),
            this.running ||
              ((this.running = !0),
              (this.interval = setInterval(
                e.utils.bind(function () {
                  this.timeLeft--,
                    this.timeLeft <= 0
                      ? this.stop()
                      : t(this).trigger('timer_tick', this.timeLeft)
                }, this),
                this.timeStep
              )))
        },
        resume: 
        pause: function () {
          ;(this.running = !1),
            clearInterval(this.interval),
            t(this).trigger('timer_pause', this.timeLeft)
        },
        stop: function () {
          clearInterval(this.interval),
            (this.running = !1),
            this.reset(),
            t(this).trigger('timer_stop')
        },
        reset: 
        setTimeOut: function (e) {
          this.timeOut = e
        },
        isRunning: function () {
          return this.running
        },
        on: function () {
          t().on.apply(t(this), arguments)
        }
      })
      var i = {}
      e.utils.getTimer = function (e, t) {
        return i[e] || (i[e] = new n(t)), i[e]
      }
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$
      e.utils.changeRT = function (e, n, i) {
        var r = t(e)
        isNaN(n) && ((i = n), (n = 30)),
          r.on('QucChangeRT', i),
          r.each(function (e, i) {
            function r() {
              var e = c.val()
              o !== e &&
                (c.trigger('QucChangeRT', { oldValue: o, newValue: e }),
                (o = e))
            }
            if ('TEXTAREA' == i.tagName || 'INPUT' == i.tagName) {
              var o,
                a,
                c = t(i)
              c.focus(function () {
                ;(o = c.val()), (a = setInterval(r, n))
              }),
                c.blur(function () {
                  clearInterval(a), r(), (o = null)
                })
            }
          })
      }
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      e(jQuery)
    })(function (e) {
                  function i(i) {
        var r,
          o = this,
          a = e(this),
          s = o.id
        if (!i || 'blur' !== i.type || !a.hasClass(d.customClass))
          if ('' === o.value) {
            if ('password' === o.type) {
              if (!a.data('placeholder-textinput')) {
                try {
                  r = a.clone().prop({ type: 'text' })
                } catch (u) {
                  r = e('<input>').attr(e.extend(t(this), { type: 'text' }))
                }
                r
                  .removeAttr('name')
                  .data({
                    'placeholder-enabled': !0,
                    'placeholder-password': a,
                    'placeholder-id': s
                  })
                  .bind('focus.placeholder', n),
                  a
                    .data({ 'placeholder-textinput': r, 'placeholder-id': s })
                    .before(r)
              }
              ;(o.value = ''),
                (a = a
                  .removeAttr('id')
                  .hide()
                  .prevAll('input[type="text"]:first')
                  .attr('id', a.data('placeholder-id'))
                  .show())
            } else {
              var l = a.data('placeholder-password')
              l &&
                ((l[0].value = ''),
                a
                  .attr('id', a.data('placeholder-id'))
                  .show()
                  .nextAll('input[type="password"]:last')
                  .hide()
                  .removeAttr('id'))
            }
            a.addClass(d.customClass),
              (a[0].value = a.attr(c ? 'placeholder-x' : 'placeholder'))
          } else a.removeClass(d.customClass)
      }
            var o,
        a,
        c = !1,
        s =
          '[object OperaMini]' ===
          Object.prototype.toString.call(window.operamini),
        u = 'placeholder' in document.createElement('input') && !s && !c,
        l = 'placeholder' in document.createElement('textarea') && !s && !c,
        f = e.valHooks,
        p = e.propHooks,
        d = {}
      u && l
        ? ((a = e.fn.placeholder = function () {
            return this
          }),
          (a.input = !0),
          (a.textarea = !0))
        : ((a = e.fn.placeholder = ,
          (a.input = u),
          (a.textarea = l),
          (o = {
            get: 
            set:           }),
          u || ((f.input = o), (p.value = o)),
          l || ((f.textarea = o), (p.value = o)),
          e(,
          e(window).bind('beforeunload.placeholder', )
    })
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = 'quc-option-active'
      e.utils.emailHint = function (i, r) {
        function o(e) {
          var i = t('<div class="quc-option-wrapper"></div>'),
            r = i,
            o = function () {
              var t = e.val()
              ;(c && t.indexOf('@') < 0) || !t.match(/^[\w._]+@?[\w.]*$/)
                ? r.hide()
                : (r.show(),
                  setTimeout(function () {
                    0 == r.find('.' + n + ':visible').length &&
                      (r.find('.' + n).removeClass(n),
                      r.children(':visible').first().addClass(n))
                  }, 30))
            },
            a = function (e) {
              switch (e.which) {
                case 38:
                  s(!0)
                  break
                case 40:
                  s()
                  break
                case 13:
                case 32:
                  var t = r.find('.' + n)
                  t.length > 0 && t.mousedown()
                  break
                case 27:
                  l(0)
                  break
                default:
                  return
              }
              e.preventDefault()
            },
            s = function (e) {
              var t = r.find('.' + n)
              0 == t.length
                ? (t = r.children(':visible').first())
                : t.removeClass(n)
              var i = e
                ? t.prevAll(':visible').first()
                : t.nextAll(':visible').first()
              0 == i.length &&
                (i = e
                  ? r.children(':visible').last()
                  : r.children(':visible').first()),
                i.addClass(n)
            },
            l = function (t) {
              e.off('blur', l),
                e.trigger('blur'),
                setTimeout(
                  
                  isNaN(t) ? 100 : t
                )
            }
          e.on('QucChangeRT', o),
            e.on('keydown', a),
            e.on('blur', l),
            o(),
            t.each(u, function (i, o) {
              var a = t('<a>')
                  .attr('href', '#')
                  .attr('tabindex', -1)
                  .addClass('quc-option')
                  .appendTo(r)
                  .click(function (e) {
                    e.preventDefault()
                  })
                  .mousedown(function () {
                    e.val(e.val().split('@')[0] + '@' + o),
                      setTimeout( 30),
                      l(0)
                  })
                  .on('selectstart', function (e) {
                    e.preventDefault()
                  })
                  .on('mouseover', function () {
                    a.addClass(n)
                      .siblings('.' + n)
                      .removeClass(n)
                  }),
                c = function () {
                  var t = e.val().split('@')
                  a.html(
                    t[0].replace(/^(.{10}).{2,}(.{7})$/, '$1...$2') + '@' + o
                  ),
                    t[1] && o.indexOf('.' + t[1]) == -1 && 0 !== o.indexOf(t[1])
                      ? (a.hide(),
                        a.hasClass(n) &&
                          (a.removeClass(n),
                          r.children(':visible').first().addClass(n)))
                      : a.css('display', 'block')
                }
              e.on('QucChangeRT', c),
                e.one('blur', ,
                c()
            }),
            e.after(i)
        }
        var a = t(i),
          c = 'account' == r,
          s = a.filter(':text').add(a.find(':text')),
          u = e.getConfig('emailHint', [
            'sina.com',
            '163.com',
            'qq.com',
            '126.com',
            'vip.sina.com',
            'sina.cn',
            'hotmail.com',
            'gmail.com',
            'sohu.com',
            'yahoo.com',
            '139.com',
            '189.cn'
          ])
        s.on('focus', ,
          0 != s.length && e.utils.changeRT(s)
      }
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = {
          wrapper: t('<div>').css({ lineHeight: 1.2, fontSize: 12 }),
          init: function () {
            var e = this
            t(function () {
              var n = t('<div>')
                .css({
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  zIndex: 2e5,
                  background: 'lightyellow',
                  border: '1px orange solid',
                  padding: 5
                })
                .appendTo(document.body)
              t('<a>')
                .attr('href', '#')
                .css({ marginRight: 5, color: 'blue' })
                .html('\u663e\u793a\u65e5\u5fd7')
                .click(function (i) {
                  i.preventDefault(), n.remove()
                  var r = window.open(
                    'about:blank',
                    'Quc_JS_SDK_Console',
                    'width=800,height=600,location=0,menubar=0,status=0,toolbar=0'
                  )
                  t(r.document.body).append(e.wrapper)
                })
                .appendTo(n),
                t('<a>')
                  .attr('href', '#')
                  .css({ color: 'blue' })
                  .html('\u5173\u95ed')
                  .click(
                  .appendTo(n)
            }),
              (this.init = function () {})
          },
          log: function (e, n) {
            this.init(),
              n &&
                (e = e.replace(
                  /%c(.*)$/g,
                  '<span style="' + n + '">$1</span>'
                )),
              t('<p>')
                .css({ margin: 0, padding: 0 })
                .html(e)
                .appendTo(this.wrapper)
          },
          clear: function () {
            this.wrapper.clear()
          },
          trace:         },
        i = window.console ? window.console : n,
        r = (e.DEBUG_LEVEL = {
          ERROR: 1,
          FATAL: 1,
          WARN: 2,
          WARNING: 2,
          DEBUG: 4,
          INFO: 8,
          WARN_OR_UPPER: 3,
          WARNING_OR_UPPER: 3,
          DEBUG_OR_UPPER: 7,
          INFO_OR_UPPER: 15,
          ALL: 15
        }),
        o = function () {
          var t = e.DEBUG
          return isNaN(parseInt(t, 10)) ? (t && r[t]) || r.DEBUG_OR_UPPER : t
        },
        a = (e.logger = {
          history: [],
          log: function (e, t) {
            if (myQHPass.DEBUG) {
              t = t || null
              var n = new Date(),
                r = n.getHours(),
                o = n.getMinutes(),
                a = n.getSeconds(),
                c = n.getMilliseconds()
              ;(e =
                (r < 10 ? '0' : '') +
                r +
                ':' +
                (o < 10 ? '0' : '') +
                o +
                ':' +
                (a < 10 ? '0' : '') +
                a +
                '.' +
                (c < 100 ? (c < 10 ? '00' : '0') : '') +
                c +
                ' QHPASS ' +
                e),
                t ? i.log('%c' + e, 'color:' + t) : i.log('LOG: ' + e)
            }
          },
          info: function (e) {
            this.history.push({ time: new Date(), level: r.INFO, message: e }),
              o() & r.INFO && this.log('INFO: ' + e, 'blue')
          },
          debug: function (e) {
            this.history.push({ time: new Date(), level: r.DEBUG, message: e }),
              o() & r.DEBUG && this.log('DEBUG: ' + e, 'green')
          },
          warn: function (e) {
            this.history.push({ time: new Date(), level: r.WARN, message: e }),
              o() & r.WARN && this.log('WARN: ' + e, 'orange')
          },
          error: function (e) {
            if (
              (this.history.push({
                time: new Date(),
                level: r.ERROR,
                message: e
              }),
              o() & r.ERROR)
            )
              throw new Error(e)
          },
          download: function (e, n, i) {
            var r = this.history
            ;(n = n && n.getTime()),
              (i = i && i.getTime()),
              (r = e
                ? t.grep(r, function (t) {
                    return t.level & e
                  })
                : r),
              (r = n
                ? t.grep(r, function (e) {
                    return n <= e.time.getTime()
                  })
                : r),
              (r = i
                ? t.grep(r, function (e) {
                    return i <= e.time.getTime()
                  })
                : r),
              (r = t.map(r, function (e) {
                var t = e.time,
                  n = t.getFullYear(),
                  i = t.getMonth(),
                  r = t.getDate(),
                  o = t.getHours(),
                  a = t.getMinutes(),
                  c = t.getSeconds(),
                  s = t.getMilliseconds()
                return (
                  n +
                  '-' +
                  (i < 10 ? '0' : '') +
                  i +
                  '-' +
                  (r < 10 ? '0' : '') +
                  r +
                  ' ' +
                  (o < 10 ? '0' : '') +
                  o +
                  ':' +
                  (a < 10 ? '0' : '') +
                  a +
                  ':' +
                  (c < 10 ? '0' : '') +
                  c +
                  '.' +
                  (s < 100 ? (s < 10 ? '00' : '0') : '') +
                  s +
                  ' ' +
                  e.message
                )
              }))
            try {
              var o = t('<a>')
                  .attr(
                    'download',
                    'QHPass_log_' + new Date().getTime() + '.txt'
                  )
                  .attr('href', URL.createObjectURL(new Blob([r.join('\r\n')])))
                  .click(),
                a = document.createEvent('HTMLEvents')
              a.initEvent('click', !1, !1), o[0].dispatchEvent(a)
            } catch (c) {
              var s = window.open('about:blank', 'QHPass Log')
              s.document.write(r.join('\r\n'))
            }
          }
        })
      e.events.on('init.core', function () {
        a.info('\u521d\u59cb\u5316')
      }),
        e.events.on('readConfig.config', function (t, n) {
          var i = n.value
          a.info(
            '\u8bfb\u53d6\u914d\u7f6e Key:' +
              n.key +
              ' Value:' +
              e.utils.JSON.stringify(i)
          )
        }),
        e.events.on('get.sync post.sync', function (t, n) {
          a.info(
            '\u53d1\u9001\u6570\u636e Method:' +
              t.type +
              ' Data:' +
              e.utils.JSON.stringify(n.opt.data) +
              ' Url:' +
              (n.url || n.opt.url)
          )
        }),
        e.events.on('receive.sync', function (t, n) {
          a.info('\u63a5\u6536\u6570\u636e Data:' + e.utils.JSON.stringify(n))
        }),
        e.events.on('error.sync', function (e, t) {
          a.warn('\u53d1\u9001\u6570\u636e\u5931\u8d25 Url:' + t)
        }),
        e.events.on('retryHttp.sync', ,
        e.events.on('init.*', function (e) {
          a.info('\u6a21\u5757\u521d\u59cb\u5316 Module:' + e.namespace)
        }),
        e.events.on('show.*', function (e) {
          a.info('\u663e\u793a\u754c\u9762 Module:' + e.namespace)
        }),
        e.events.on('hide.*', function (e) {
          a.info('\u9690\u85cf\u754c\u9762 Module:' + e.namespace)
        }),
        e.events.on('showLoading.*', function (e) {
          a.info('\u51c6\u5907\u754c\u9762 Module:' + e.namespace)
        }),
        e.events.on('hideLoading.*', ,
        e.events.on('invalid.*', function (e, t) {
          a.debug(
            '\u7528\u6237\u8f93\u5165\u6821\u9a8c\u9519\u8bef Module:' +
              e.namespace +
              ' ErrorCode:' +
              t.errno +
              ' ErrorMessage:' +
              t.errmsg
          )
        }),
        e.events.on('warn.* warning.*', function (e, t) {
          t.errno && (t = '(' + t.errno + ')' + t.errmsg),
            a.warn(' Module:' + e.namespace + ' Message:' + t)
        }),
        e.events.on('error.* fatal.*', function (e, t) {
          t.errno && (t = '(' + t.errno + ')' + t.errmsg),
            a.error(' Module:' + e.namespace + ' Message:' + t)
        }),
        (e.debug = {
          exportLog: function () {
            a.download.apply(a, arguments)
          },
          clearLog:         })
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$
      ;(t && t.fn && t.fn.jquery) ||
        e.logger.error(
          '\u672a\u68c0\u6d4b\u5230jQuery\uff0cQHPass\u4f9d\u8d56jQuery\u5e93\uff0c\u8bf7\u52a0\u8f7djQuery 1.8+'
        )
      var n = parseInt(
          t.fn.jquery.replace(/\.(\d+)/g, function (e, t) {
            return ('0' + t).slice(-2)
          })
        ),
        i = 10800
      n < i &&
        e.logger.error(
          'jQuery\u7248\u672c\u8fc7\u4f4e\uff0c\u76ee\u524d\u52a0\u8f7d\u7684\u7248\u672c:' +
            t.fn.jquery +
            '\uff0c\u9700\u8981\u7248\u672c1.8.0+'
        )
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = e.events,
        i = window,
        r = (function () {
          function t(e) {
            var t = 0,
              n = 0,
              i = e.length - 1
            for (i; i >= 0; i--) {
              var r = parseInt(e.charCodeAt(i), 10)
              ;(t = ((t << 6) & 268435455) + r + (r << 14)),
                0 != (n = 266338304 & t) && (t ^= n >> 21)
            }
            return t
          }
          function n() {
            for (
              var e = navigator,
                n = [
                  e.appName,
                  e.version,
                  e.language || e.browserLanguage,
                  e.platform,
                  e.userAgent,
                  screen.width,
                  'x',
                  screen.height,
                  screen.colorDepth,
                  document.referrer
                ].join(''),
                r = n.length,
                o = i.history.length;
              o;

            )
              n += o-- ^ r++
            return 2147483647 * (Math.round(2147483647 * Math.random()) ^ t(n))
          }
          var r = '__guid',
            o = e.utils.storage('cookie'),
            a = document.domain,
            c = o.get(r)
          if (!c) {
            c = [t(a), n(), +new Date() + Math.random() + Math.random()].join(
              '.'
            )
            var s = {
              expires: 2592e7,
              path: '/',
              domain: a.toLowerCase().replace(/^(?:.+\.)?(\w+\.\w+)$/, '.$1')
            }
            o.set(r, c, s)
          }
          return function () {
            return c
          }
        })()
      e.utils.monitor = {}
      var o = (i.__quc_moitor_imgs = {}),
        a = (e.utils.monitor.send = function (n) {
          if (!e.DEBUG && e.getConfig('useMonitor')) {
            var i = e.getConfig(
                'monitorUrl',
                e.getConfig('protocol') + '://s.360.cn/i360/qhpass.htm'
              ),
              a = 'moitor_img+' + e.utils.getGuid(),
              c = (o[a] = new Image())
            ;(n = t.param(
              t.extend(
                { src: e.getConfig('src'), version: e.version, guid: r() },
                n
              )
            )),
              (i += (i.indexOf('?') > 0 ? '&' : '?') + n),
              (c.onload = c.onerror = function () {
                o && o[a] && ((o[a] = null), delete o[a])
              }),
              (c.src = i)
          }
        })
      n.on('init.core', function () {
        var t = i.screen
        a({
          action: 'init',
          resolution: [t.width, t.height].join('x'),
          color: t.colorDepth,
          language: navigator.language,
          isCookieEnabled: e.utils.isCookieEnabled()
        })
      }),
        n.on('retryHttp.sync', function (e, t) {
          ;(t = t.replace(/\?.*/, '')), a({ action: 'retryHttp', api: t })
        }),
        n.on('error.sync', function (e, t) {
          ;(t = t.replace(/\?.*/, '')), a({ action: 'netError', api: t })
        }),
        n.on('show.*', function (e) {
          a({ action: 'show', module: e.namespace })
        }),
        n.on('beforeSubmit.*', function (e) {
          a({ action: 'submit', module: e.namespace })
        }),
        n.on('success.*', ,
        n.on('changeType.*', function (e, t) {
          var n =
            'change' +
            e.namespace.replace(/^./, function (e) {
              return e.toUpperCase()
            }) +
            'Type'
          a({ action: n, module: e.namespace, type: t })
        }),
        n.on('invalid.*', function (e, t) {
          a({
            action: 'invalid',
            module: e.namespace,
            errno: t.errno,
            errmsg: t.errmsg
          })
        }),
        n.on('warn.* warning.*', function (e, t) {
          t.errno && (t = '(' + t.errno + ')' + t.errmsg),
            a({ action: 'warn', module: e.namespace, message: t })
        }),
        n.on('error.* fatal.*', function (e, t) {
          t.errno && (t = '(' + t.errno + ')' + t.errmsg),
            a({ action: 'error', module: e.namespace, message: t })
        }),
        Math.random() < 0.01 &&
          t.get(
            e.getConfig('proxy'),
            function (e) {
              var t = e.match(/version\s*=\s*['"]?([\d.]+)['"]?/i),
                n = (t && t[1]) || 'old version'
              a({ action: 'pspJumpInit', jumpVersion: n })
            },
            'text'
          ),
        n.on('init.core', function () {
          e.getConfig('preventClickPenetrate', !0) &&
            n.on('afterShow.*', ,
            n.on('afterShow.*', function (e) {
              t('.quc-wrapper').on('click', 'a', function () {
                var n = this
                n.href.match(/[^#]$/) &&
                  '_blank' == n.target &&
                  a({
                    action: 'click',
                    module: e.namespace,
                    title: t(n).text(),
                    link: n.href
                  })
              })
            })
        })
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      function t(e, t) {
        return !e || (r.isFunction(e) ? e(t) : t === e)
      }
      function n(e, t) {
        if (!e) return !1
        var n = 0
        return (
          r.each(e.match(/(\d+[wdhms]?)/g), function (e, t) {
            var i = parseInt(t, 10),
              r = t.substr(t.length - 1)
            n += c[r] ? i * c[r] : i
          }),
          new Date().getTime() - t >= n
        )
      }
      function i(e) {
        return r
          .map(e, 
          .join()
      }
      var r = e.$,
        o = 'quc.funcCache',
        a = {}
      e.utils.cache = {
        read: function (c, s, u) {
          function l() {
            ;(m[h] = m[h] || {}),
              (m[h][g] = p),
              f.set(o, e.utils.JSON.stringify(m))
          }
          r.isPlainObject(s) && (u = s), (u = u || {})
          var f,
            p,
            d,
            h = c.funcName
          h
            ? (f = e.utils.storage('local'))
            : ((h = c.qucGuid || (c.qucGuid = e.utils.getGuid())),
              (f = e.utils.storage('page')))
          var m = e.utils.JSON.parse(f.get(o, '{}')),
            g = i(s)
          return (d = a[h] && a[h][g])
            ? d
            : ((p = m[h] && m[h][g]),
              !p || n(u.expire, p.date)
                ? ((p = {
                    data: c.apply(u.context || null, s),
                    date: new Date().getTime()
                  }),
                  p.data.done && p.data.fail
                    ? (((a[h] = a[h] || {})[g] = p),
                      p.data
                        .done(function (e) {
                          t(u.condition, !0) &&
                            ((p.data = e), (p.promise = 'resolve'), l())
                        })
                        .fail(function (e) {
                          t(u.condition, !1) &&
                            ((p.data = e), (p.promise = 'reject'), l())
                        })
                        .always()
                    : (t(u.condition, p.data) && l(), p.data))
                : p.promise
                ? r.Deferred()[p.promise](p.data).promise()
                : p.data)
        },
        clear: function (t, n) {
          t
            ? cache[t] && n
              ? delete a[t][i(n)]
              : delete a[t]
            : ((a = {}),
              e.utils.storage('page'.remove(o)),
              e.utils.storage('local'.remove(o)))
        }
      }
      var c = { s: 1e3, m: 6e4, h: 36e5, d: 864e5, w: 6048e5 }
    })(myQHPass)
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
        var i = t.$,
          r = n(40),
          o = null,
          a = function (e) {
            ;(this.name = 'func_' + t.utils.getGuid()),
              this.extend(e),
              (this._initFlag = !1),
              (this._data = {})
          }
        i.extend(a.prototype, {
          init: function () {
            var e = this
            return (
              e._initFlag
                ? e.reset()
                : ((e._initFlag = !0),
                  e.setUI(t.ui[e.name]),
                  e.setDeferred(),
                  e.trigger('init'),
                  e.on('show', function () {
                    e._isShown = !0
                  }),
                  e.on('hide', ),
              (e._passThrough = o),
              (o = null),
              e
            )
          },
          reset: function () {
            return (
              this._isShown && this.trigger('hide'), this.setDeferred(), this
            )
          },
          isInit: function () {
            return this._initFlag
          },
          get: 
          set: function (e, t) {
            return (
              i.isPlainObject(e)
                ? i.extend(this._data, e)
                : (this._data[e] = t),
              this
            )
          },
          setDeferred: function (e) {
            var n = this
            return (
              (n._deferred = e || i.Deferred()),
              n._deferred.done(function (e) {
                n._callback && t.utils.parseCallback(n._callback)(e)
              }),
              n
            )
          },
          resolve: 
          getCallback: function () {
            return this._callback
          },
          setCallback: 
          clear: 
          getUI: function () {
            return this.ui
          },
          setUI: function (e) {
            return (this.ui = e), e.init(this), this
          },
          getPassThrough: 
          setPassThrough: 
          reportError: function (e, n, i) {
            ;(n = n ? 'Msg:' + n + ' ' : ''),
              e.errno
                ? (n = n + 'Error:(' + e.errno + ')' + e.errmsg)
                : (n += e.toString()),
              t.events.trigger((i ? 'warn.' : 'error.') + this.name, n)
          },
          reportWarn: 
          extend: function () {
            var e = [].slice.apply(arguments)
            e.unshift(this), i.extend.apply(null, e)
          },
          setCaptchaUrl: 
          getCaptchaUrl: function (n, o) {
            var a = this,
              c = a._captchaUrl,
              s = i.Deferred()
            return (
              !o && c
                ? ((c = r.appendQuery(c, { _: e.now(), border: 'none' })),
                  s.resolve(c))
                : t.sync.getCaptchaUrl(n).then(function (e) {
                    ;(c = a._captchaUrl = e.captchaUrl),
                      (c += '&_=' + new Date().getTime()),
                      s.resolve(c)
                  }),
              s.promise()
            )
          }
        }),
          i.each(['on', 'one', 'off', 'trigger'], function (e, n) {
            a.prototype[n] = function () {
              return (
                (arguments[0] = arguments[0].replace(
                  /( |$)/g,
                  '.' + this.name + '$1'
                )),
                t.events[n].apply(null, arguments),
                this
              )
            }
          }),
          (t.getLogic = 
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t) {
    !(function (e) {
      var t = e.$
      e.getUserInfo = function (n, i, r) {
        return (
          'function' == t.type(n) && ((r = i), (i = n), (n = void 0)),
          e.sync
            .getUserInfo(n)
            .done(function (e) {
              i && i(e)
            })
            .fail(
        )
      }
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      e.getUserSecInfo = function (t) {
        e.sync
          .getUserInfo()
          .then(function (t) {
            return e.sync.getUserSecInfo(t.crumb)
          })
          .always(t)
      }
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      e.getEmailStatus = function (t) {
        e.sync
          .getUserInfo()
          .then(function (t) {
            return e.sync.checkEmailStatus(t.crumb)
          })
          .always(t)
      }
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t,
        n = e.$
      e.getQuickLoginStatus = function (i, r) {
        if ((n.isFunction(i) && ((r = i), (i = 2e4)), !t)) {
          var o = e.getConfig('protocol'),
            a = o + '://axlogin.passport.360.cn/ptlogin.php',
            c =
              a +
              '?nextUrl=' +
              e.getConfig('proxy') +
              '&us=1&func=myQHPass.getQuickLoginUserLength',
            s = n('<iframe>').attr('src', c).hide().appendTo(document.body)
          t = n.Deferred()
          var u = setTimeout(function () {
            t.reject()
          }, i)
          ;(e.getQuickLoginUserLength = function (e) {
            t.resolve(e)
          }),
            t.always(function () {
              ;(t = null), clearTimeout(u), s.remove()
            })
        }
        t.then(
          function (t) {
            r(
              n.extend({}, e.ERROR.SUCCESS, {
                status: t.us > 0 ? 1 : 2,
                userLength: t.us
              })
            )
          },
          function () {
            r(n.extend({}, e.ERROR.TIME_OUT))
          }
        )
      }
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      e.signOut = function (t, n) {
        void 0 === n && ((n = t), (t = !0)),
          e.sync.signOut(t).done(function () {
            e.events.trigger('success.signOut'), e.utils.parseCallback(n)()
          })
      }
    })(myQHPass)
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
        var i = t.$,
          r = n(14).getLogger('signIn'),
          o = n(191),
          a = n(192),
          c = n(193),
          s = n(194),
          u = n(195),
          l = n(159),
          f = n(196),
          p = {},
          d = 0,
          h = {
            init: function (n) {
              var r = t.getConfig('signIn')
              ;(this.loginTpl = {
                normal: e.template(o)(r),
                mobile: e.template(a)(r),
                loginSwitch: u,
                qrcode: e.template(c)(r),
                quick:
                  '<iframe class="quc-sign-in-iframe" src="about:blank" frameborder="0" scrolling="no" allowtransparency></iframe>'
              }),
                (p = {}),
                (this.model = n),
                (this.$el = i(s)),
                this.initForm(),
                l.initView(this),
                this.initFooterLink(),
                this.initThirdPartSignIn(),
                this.initModelEvent(),
                this.initSmsToken(),
                this.initQrCode(),
                this.initCaptcha()
            },
            bindEvent: function (e) {
              var n = this
              e.on('click', '.quc-login-switch', function () {
                'qrcode' == n.getCurrentType()
                  ? n.changeType('normal')
                  : n.changeType('qrcode')
              }),
                e.on('click', '[data-login-type]', function (e) {
                  var t = i(this).data('login-type')
                  t && n.changeType(t)
                }),
                e.on('click', '.quc-link-sign-up', function (e) {
                  var i = t.getConfig('signUp.url')
                  i ? window.open(i, '_blank') : n.onSignUp()
                }),
                e.on('click', '.quc-third-item', function (e) {
                  var t = i(this).data('third')
                  n.model.thirdPartSignIn(t)
                })
            },
            reset: function () {
              ;(p = {}),
                this.initQuickSignIn(),
                (d = 0),
                (this.signInType = null),
                l.clearTip(this.$el),
                this.initCaptcha()
            },
            changeType: function (e) {
              var n,
                r = this,
                o = r.model,
                a = p[e]
              if (
                (r.$el.attr(
                  'class',
                  'quc-mod-sign-in quc-mod-' + e + '-sign-in'
                ),
                !a)
              ) {
                a = p[e] = i(r.loginTpl[e])
                var c = this.model.get('saveAccount')
                c &&
                  e == c.type &&
                  (n = a
                    .find('.quc-input-account,.quc-input-mobile')
                    .val(c.account))
              }
              var s = r.$el.find('.quc-login-content')
              t.utils.resetPlaceholder(s.find('input, textarea'))
              var u = t.getConfig('signIn.hideKeepAlive')
              u === !1 &&
                a.find('[name=isKeepAlive]').parents('.quc-field').show(),
                s.empty().append(a),
                o.trigger('DOMUpdated', this.$el),
                (r.signInType = e)
              var l = r.getTitle()
              r.$nav.replaceWith(l),
                (r.$nav = l),
                a.find('.quc-input').each(function (e, t) {
                  var r = i(t)
                  if (!r.val())
                    return (
                      o.one('changeType afterShow', ,
                      !1
                    )
                }),
                o.trigger('afterShow.changeType', r.$el[0]),
                o.trigger('changeType', e),
                o.trigger('changeType:' + e),
                o.set('userType', e),
                setTimeout(function () {
                  var t = 'quc-panel-login-qrcode'
                  'qrcode' === e
                    ? r.panel.$el.addClass(t)
                    : r.panel.$el.removeClass(t)
                }, 0)
            },
            initQuickSignIn: function () {
              if (this.model.isQuickSignInAvailable()) {
                var e = i(this.loginTpl.quick)
                e.attr('src', this.model.getQuickSignInUrl()), (p.quick = e)
              }
            },
            initForm: function () {
              var e = this
              e.model.on('changeType', function (n, i) {
                'quick' != i &&
                  t.getConfig('signIn.showEmailHint', !0) &&
                  t.utils.emailHint(e.$el.find('[name=userName]'), 'account')
              })
            },
            initFooterLink: function () {
              var e = this,
                t = this.$el.find('.quc-footer')
              this.$el
                .find('.quc-link-quick-sign-in')
                .click(
                .end()
                .find('.quc-link-normal-sign-in')
                .click(function (t) {
                  t.preventDefault(), e.changeType(e.model.getSignInTypes()[0])
                }),
                e.model.on('changeType', function (n, i) {
                  'quick' == i
                    ? 0 == e.model.getSignInTypes().length && t.hide()
                    : e.model.isQuickSignInAvailable() ||
                      t.find('.quc-link-quick-sign-in').hide()
                })
            },
            initQrCode: function () {
              function n() {
                u.model.listenQrcodeLogin().done(
              }
              function o() {
                ;(a = u.model.getDomainApi()),
                  s.show().find('.quc-qrcode-expired-text').html(f),
                  c.hide(),
                  c.off('load').on('load', function () {
                    c.show(),
                      u.$el.find('.quc-qrcode').addClass('quc-qrcode-active'),
                      s.hide(),
                      (d = new Date().getTime()),
                      (p = setInterval(n, 2e3)),
                      (h = setTimeout( l))
                  }),
                  c.off('error').on('error', function () {
                    s
                      .find('.quc-qrcode-expired-text')
                      .html('\u4e8c\u7ef4\u7801\u83b7\u53d6\u5931\u8d25'),
                      s
                        .find('.quc-qrcode-refresh')
                        .css('cursor', 'pointer')
                        .show(),
                      s
                        .off('click')
                        .one('click', '.quc-qrcode-refresh', function () {
                          s
                            .find('.quc-qrcode-expired-text')
                            .html('\u4e8c\u7ef4\u7801\u52a0\u8f7d\u4e2d...'),
                            i(this).hide(),
                            o()
                        })
                        .show()
                  }),
                  c.attr('src', a)
              }
              var a,
                c,
                s,
                u = this,
                l = 1e3 * t.getConfig('signIn.qrCodeTTL', 120),
                f = '\u4e8c\u7ef4\u7801\u52a0\u8f7d\u4e2d...',
                p = 0,
                h = 0,
                m = e.includes(u.model.getSignInTypes(), 'qrcode')
              if (m) {
                var g = i(u.loginTpl.loginSwitch)
                this.$el.append(g)
              }
              u.model
                .on('changeType:qrcode', function () {
                  ;(c = u.$el.find('.quc-qrcode .quc-qrcode-img')),
                    (s = u.$el.find('.quc-qrcode-expired')),
                    new Date().getTime() - d >= l
                      ? o()
                      : (s.hide(), (p = setInterval(n, 2e3))),
                    u.model.on('changeType', 
                })
                .on('clearQrTime', function () {
                  ;(d = 0), clearTimeout(h), clearInterval(p)
                })
                .on('timeout', function () {
                  r.debug('qrcode timeout'),
                    clearInterval(p),
                    u.$el.find('.quc-qrcode').removeClass('quc-qrcode-active'),
                    s
                      .find('.quc-qrcode-expired-text')
                      .html('\u4e8c\u7ef4\u7801\u5df2\u5931\u6548'),
                    s
                      .find('.quc-qrcode-refresh')
                      .css('cursor', 'pointer')
                      .show(),
                    s
                      .off('click')
                      .one('click', '.quc-qrcode-refresh', function () {
                        s
                          .find('.quc-qrcode-expired-text')
                          .html('\u4e8c\u7ef4\u7801\u52a0\u8f7d\u4e2d...'),
                          i(this).hide(),
                          o()
                      })
                      .show()
                })
            },
            initSmsToken: function () {
              var e,
                n,
                r,
                o = this,
                a = t.utils.getTimer('sign_in')
              a.on('timer_start', function (e, t) {
                r.removeClass('quc-link'),
                  r.html(t + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
              }),
                a.on('timer_tick', function (e, t) {
                  r.html(t + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
                }),
                a.on('timer_stop', 
              var c = function (t) {
                t.preventDefault(),
                  r.hasClass('quc-link') &&
                    (o.model.set('mobile', e.val()),
                    o.model.set('captcha', n.val()),
                    r.html('\u53d1\u9001\u4e2d...'),
                    r.removeClass('quc-link'),
                    o.model
                      .sendSmsToken()
                      .done(function (e) {
                        l.showTipSuccess('\u53d1\u9001\u6210\u529f', o.$el),
                          i('[name=smscode]').one('change', function () {
                            l.clearTip(o.$el)
                          }),
                          a.start(),
                          o.model.set('token', e.vt),
                          o.model.trigger('dealCaptcha')
                      })
                      .fail(function (e) {
                        r.html('\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                          r.addClass('quc-link'),
                          (e.field = o.$el
                            .find('[name=mobile]')
                            .parents('quc-field'))
                        var t = e.errdetail && e.errdetail.captchaUrl
                        t && ((e.fromServer = !0), o.model.setCaptchaUrl(t)),
                          o.model.trigger('invalid', e)
                      }))
              }
              this.model.on('changeType:mobile', function () {
                ;(e = o.$el.find('[name=mobile]')),
                  (n = o.$el.find('[name=captcha]')),
                  (r = o.$el.find('.quc-get-token')),
                  r.off('click', c).on('click', c),
                  a.isRunning() && a.resume()
              })
            },
            initThirdPartSignIn: function () {
              var t = this
              t.model.on('changeType:normal changeType:mobile', function () {
                var i = t.model.getThirdPartProviders(),
                  r = {
                    sina: {
                      title: '\u65b0\u6d6a\u5fae\u535a',
                      iconName: 'quc-icon-weibo',
                      iconCode: '&#xe694;'
                    },
                    tencent: {
                      title: 'QQ',
                      iconName: 'quc-icon-qq',
                      iconCode: '&#xe692;'
                    },
                    weixin: {
                      title: '\u5fae\u4fe1',
                      iconName: 'quc-icon-wechat',
                      iconCode: '&#xe693;'
                    }
                  },
                  o = e.compact(
                    e.map(i, function (t) {
                      if (r[t]) return e.extend({ name: t }, r[t])
                    })
                  )
                if (i.length > 0) {
                  var a = n(197),
                    c = e.template(a)
                  t.$el.find('form').after(c({ thirdPartyList: o }))
                } else t.$el.find('.quc-field-third-part').hide()
              })
            },
            initModelEvent: function () {
              var e = this
              e.model
                .on('show', function (t, n) {
                  e.show(n && n.wrapper)
                })
                .on('success', function () {
                  var e = t.getConfig('signInBoxWrapper', ''),
                    n = t.getConfig('signInBoxOpts', {})
                  e &&
                    t.plugin.signInBox &&
                    i(e).empty().html(t.plugin.signInBox(n))
                })
                .on('hide', function () {
                  e.hide()
                })
                .on('afterhide', function () {
                  'qrcode' == e.getCurrentType() &&
                    e.model.trigger('clearQrTime')
                })
                .on('close', function () {
                  'qrcode' == e.getCurrentType() &&
                    e.model.trigger('clearQrTime')
                })
                .on('dealCaptcha', function () {
                  var t = e.$el.find('[name=captcha]').parents('.quc-field')
                  t.hide(),
                    e.$el.find('[name=captcha]').val(''),
                    e.$el
                      .find('[name=mobile]')
                      .off('change')
                      .on('change', function () {
                        t.show()
                        try {
                          e.$el
                            .find('.quc-captcha-change')
                            .filter(':visible')
                            .eq(0)
                            .trigger('click')
                        } catch (n) {}
                        e.model.set('token', null),
                          e.model.trigger('timer_stop')
                      })
                })
            },
            onSignUp: function () {
              this.model.signUp()
            },
            initCaptcha: function () {
              var e,
                n,
                r,
                o = this,
                a = !1
              if (!o._captcha_Initialized) {
                o._captcha_Initialized = !0
                var c = function (t, n) {
                    void 0 === n && (n = !0),
                      o.model.getCaptchaUrl('login', n).then(function (n) {
                        e.find('.quc-captcha-img').attr('src', n)
                        var i = e.find('[name=captcha]').val('')
                        if (t) {
                          var r = f.detect(navigator.userAgent)
                          'IE' !== r.browserName && i.focus()
                        }
                      })
                  },
                  s = function (n, i) {
                    var r = 'captcha' == t.utils.getErrorType(i)
                    a && i.fromServer && o.signInType == i.signInType
                      ? c(r)
                      : r && (e.show(), a || c(!0), (a = !0))
                  },
                  u = function (e) {
                    l(e),
                      n.show(),
                      o.$el
                        .find('.quc-captcha-change')
                        .off('click')
                        .off('mousedown')
                        .on('mousedown', function (e) {
                          e.preventDefault()
                        })
                        .on('click', function (t) {
                          t.preventDefault(),
                            l(e),
                            n.find('[name=captcha]').focus()
                        })
                  },
                  l = function (e) {
                    var t = 'mobile' == e ? 'strictreg' : 'reg'
                    o.model.getCaptchaUrl(t, !0).then(function (e) {
                      n.find('.quc-captcha-img').attr('src', e),
                        n.find('[name=captcha]').val('')
                    })
                  },
                  p = function (e, n) {
                    var i = n.type || 'mobile'
                    r || 'captcha' != t.utils.getErrorType(n)
                      ? n.fromServer && l(i)
                      : ((r = !0), u(i))
                  },
                  d = t.utils.debounce(
                    function () {
                      var t = i.trim(i(this).val())
                      t &&
                        o.model.checkIsCaptchaRequired(t).done(function (t) {
                          t ? (e.show(), c(!1, !1)) : e.hide(),
                            (a = t),
                            o.$el.triggerHandler('QucDOMUpdated')
                        })
                    },
                    100,
                    !0
                  )
                o.model.on('changeType', function (t, i) {
                  o.model.off('invalid', s),
                    o.model.off('invalid', p),
                    'normal' == i
                      ? ((e = o.$el.find('.quc-field-captcha')),
                        o.$el
                          .find('[name=userName]')
                          .off('blur', d)
                          .blur(d)
                          .filter(':visible')
                          .trigger('blur'),
                        o.$el
                          .find('.quc-captcha-change')
                          .off('click')
                          .off('mousedown')
                          .click(
                          .filter(':visible')
                          .eq(0)
                          .trigger('click'),
                        o.model.on('invalid', s))
                      : 'mobile' == i &&
                        (o.model.set('token', null),
                        (n = o.$el.find('.quc-field-captcha')),
                        o.model.on('invalid', p))
                })
              }
            },
            getCurrentType: function () {
              return (
                this.signInType ||
                  (this.signInType = this.model.isQuickSignInAvailable()
                    ? 'quick'
                    : this.model.getSignInTypes()[0]),
                this.signInType
              )
            },
            getTitle: function () {
              var r = this,
                o = i('<div>'),
                a = t.getConfig('signIn.panelLogo')
              if (a) {
                var c = i('<img>').attr('src', a).addClass('quc-logo')
                o.append(i('<div>').append(c))
              }
              var s = [
                  {
                    name: 'quick',
                    title: t.getConfig(
                      'signIn.quick.panelTitle',
                      '\u5feb\u901f\u767b\u5f55'
                    )
                  },
                  {
                    name: 'normal',
                    title: t.getConfig(
                      'signIn.normal.panelTitle',
                      '360\u5e10\u53f7\u767b\u5f55'
                    )
                  },
                  {
                    name: 'mobile',
                    title: t.getConfig(
                      'signIn.mobile.panelTitle',
                      '\u77ed\u4fe1\u767b\u5f55'
                    )
                  },
                  {
                    name: 'qrcode',
                    title: t.getConfig(
                      'signIn.qrcode.panelTitle',
                      '360\u5e10\u53f7\u626b\u7801\u767b\u5f55'
                    )
                  },
                  {
                    name: 'onekey',
                    title: t.getConfig(
                      'signIn.onekey.panelTitle',
                      '\u4e00\u952e\u767b\u5f55'
                    )
                  }
                ],
                u = r.getCurrentType(),
                l = []
              'qrcode' === u
                ? (l = e.filter(s, function (e) {
                    return e.name === u
                  }))
                : ((l = e.uniq(r.model.getSignInTypes())),
                  (l = e.difference(l, ['qrcode', 'onekey', 'quick'])),
                  (l = e.compact(
                    e.map(l, 
                  )))
              var f = n(198),
                p = e.template(f)({
                  types: l,
                  currentTypeName: u,
                  opt: 'login'
                })
              return o.append(p), o
            },
            show: function (e) {
              var n = this
              this.reset(),
                (this.$nav = this.getTitle()),
                this.changeType(this.getCurrentType())
              var r = {
                  size: t.getConfig('signIn.panelSize', 'small'),
                  wrapper: e
                },
                o = (this.panel = this.model.panel = new t.utils.Panel(r))
              o.setTitle(this.$nav),
                o.setContent(this.$el),
                this.model.trigger('beforeShow', this.$el[0]),
                n.bindEvent(o.$el),
                o.show(),
                i(o).on(
                  'close',
                  t.getConfig('signIn.panelCloseHandler', i.noop)
                ),
                i(o).on('close', ,
                this.model.trigger('afterShow', this.$el[0])
            },
            hide: function () {
              this.model.trigger('beforeHide', this.$el[0]),
                this.panel &&
                  (e.get(this.panel, 'opt.wrapper') || this.panel.hide()),
                this.model.trigger('afterHide', this.$el[0])
            }
          }
        t.ui.signIn = {
          init: function () {
            h.init.apply(h, arguments)
          },
          changeType: function (e) {
            h.changeType(e)
          },
          setOnSignUpCallback:         }
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t) {
    e.exports =
      '<form method=POST class=quc-form autocomplete=off><div class="quc-form-item quc-field quc-field-has-option"><div class=quc-form-item-content><div class=quc-input><input name=userName placeholder="<%= normal.onlyMobile ? mobilePlaceholder : accountPlaceholder %>"></div></div></div><div class="quc-form-item quc-field"><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder="<%= passwordPlaceholder %>"></div></div></div><div class="quc-form-item quc-field quc-field-captcha" style="display: none"><label class=quc-label></label><div class="quc-form-item-content quc-form-item-img-captcha"><div class=quc-input><input placeholder=\u9a8c\u8bc1\u7801 name=captcha maxlength=7 autocomplete=new-password></div><img class="quc-captcha-change quc-captcha-img"> <span class="quc-captcha-change quc-link">\u6362\u4e00\u5f20</span></div></div><div class="quc-form-item quc-field quc-form-item-checkbox" style="display: none"><div class=quc-form-item-content><label><input type=checkbox name=isKeepAlive checked><%= keepAliveTip %> </label></div></div><div class=quc-button-list><input type=submit value=\u767b\u5f55 class="quc-button-submit quc-button quc-button-primary"></div><div class="quc-form-tips quc-clearfix"><a href=//i.360.cn/findpwd/ class=quc-right target=_blank><%= findPwdTip %></a><a href=javascript:; class="quc-link-sign-up quc-left"><%= signUpTip %></a></div></form>'
  },
  function (e, t) {
    e.exports =
      '<form method=POST class=quc-form autocomplete=off><div class="quc-form-item quc-field"><div class=quc-form-item-content><div class=quc-input><input name=mobile placeholder="<%= mobilePlaceholder %>" maxlength=11></div></div></div><div class="quc-form-item quc-field quc-field-captcha" style="display: none"><label class=quc-label></label><div class="quc-form-item-content quc-form-item-img-captcha"><div class=quc-input><input placeholder=\u9a8c\u8bc1\u7801 maxlength=7 name=captcha autocomplete=new-password></div><img class="quc-captcha-change quc-captcha-img"> <span class="quc-captcha-change quc-link">\u6362\u4e00\u5f20</span></div></div><div class="quc-form-item quc-field"><div class=quc-form-item-content><div class=quc-input><input name=smscode placeholder=\u77ed\u4fe1\u9a8c\u8bc1\u7801 autocomplete=new-password><div class=quc-input-append><span class="quc-link quc-get-token">\u83b7\u53d6\u9a8c\u8bc1\u7801</span></div></div></div></div><div class="quc-form-item quc-field quc-form-item-checkbox" style="display: none"><div class=quc-form-item-content><label><input type=checkbox name=isKeepAlive checked><%= keepAliveTip %> </label></div></div><div class=quc-button-list><input type=submit value=\u767b\u5f55 class="quc-button quc-button-primary"></div><div class="quc-form-tips quc-clearfix"><a href=//i.360.cn/findpwd/ class=quc-right target=_blank><%= findPwdTip %></a><a href=javascript:; class="quc-left quc-link-sign-up"><%= signUpTip %></a></div></form>'
  },
  function (e, t) {
    e.exports =
      '<div class=quc-text-center><div class="quc-qrcode quc-qrcode-active"><div class=quc-qrcode-help style="background-image: url(<%= qrcode.appLegendUrl%>)"></div><div class=quc-qrcode-inner><img class=quc-qrcode-img> <img class=quc-qrcode-icon src=<%= qrcode.icon %>><div class=quc-qrcode-expired><div class=quc-qrcode-expired-text>\u4e8c\u7ef4\u7801\u5df2\u5931\u6548</div><a href=javascript:; class="quc-button quc-button-primary quc-qrcode-refresh"><i class="quc-icon quc-icon-refresh">&#xe69b;</i>\u70b9\u51fb\u5237\u65b0</a></div></div></div><p class=quc-qrcode-title><span>\u8bf7\u4f7f\u7528&nbsp;</span><a target=_blank href=<%= qrcode.appUrl %> class=quc-link><%= qrcode.appName %></a><span>&nbsp;\u626b\u7801\u5b89\u5168\u767b\u5f55</span><p class=quc-qrcode-desc><%= qrcode.description %><div class=quc-entrance><div class=quc-tab-list><div class=quc-tab-item><span class=quc-tab-sep></span> <a class="quc-tab-item-inner quc-link-sign-up" href=javascript:;><%= signUpTip %></a></div><div class=quc-tab-item><span class=quc-tab-sep></span> <a class=quc-tab-item-inner href=javascript:; data-login-type=normal>\u5e10\u53f7\u767b\u5f55</a></div></div></div></div>'
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-sign-in><div class=quc-main><div><div class="quc-tip quc-tip-absolute"></div><div class=quc-login-content></div></div></div></div>'
  },
  function (e, t) {
    e.exports =
      '<div class=quc-login-switch><a href=javascript:;><i class="quc-icon quc-icon-quccode quc-btn-qrcode">&#xe699;</i></a> <a href=javascript:;><i class="quc-icon quc-icon-qucweb quc-btn-web">&#xe69a;</i></a></div>'
  },
  function (e, t) {
    function n() {}
    function i(e, t) {
      var n = new RegExp(e + '[. /]*([0-9.]+)'),
        i = n.exec(t)
      return i ? i[1] : null
    }
    ;(n.detect = function (e) {
      e += ''
      for (
        var t = [
            'MSIE',
            'Trident',
            'Windows NT',
            'Firefox',
            'Safari',
            'Chrome',
            'Edge',
            'AppleWebKit'
          ],
          n = {},
          r = 0;
        r < t.length;
        r++
      ) {
        var o = t[r],
          a = i(o, e)
        n[o] = a
      }
      var c,
        s = null
      if (n.MSIE) (s = 'IE'), (c = n.MSIE)
      else if (n.Trident) (s = 'IE'), (c = parseFloat(n.Trident) + 4)
      else
        for (
          var u = 'Edge Firefox Chrome Safari'.split(' '), r = 0;
          r < u.length;
          r++
        )
          s || (n[u[r]] && ((s = u[r]), (c = n[u[r]])))
      return (c = parseFloat(c)), { browserName: s, browserVersion: c }
    }),
      (e.exports = n)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-third><div class=quc-third-hd><span>\u5176\u4ed6\u767b\u5f55\u65b9\u5f0f</span></div><div class=quc-third-bd><table><tr> <% _.each(thirdPartyList, function(thirdParty) { %> <td><i data-third="<%= thirdParty.name %>" class="quc-third-item quc-icon <%= thirdParty.iconName %>"><%= thirdParty.iconCode %></i></td> <% }) %> </table></div></div>'
  },
  function (e, t) {
    e.exports =
      '<div class=quc-tab-list> <% if (_.size(types) === 1) { %> <div class=quc-tab-item><span data- <%= opt %> -type="<%= types[0].name %>" class="quc-tab-item-inner quc-primary"><%= types[0].title %></span></div> <% } else { %> <% _.each(types, function(type, i) { %> <div class="quc-tab-item <% if (type.name === currentTypeName) { %>quc-tab-item-active<% } %>"> <% if (i !== 0) { %><span class="quc-tab-sep <%=opt%>"></span><% } %> <a href=javascript:; <%= \'data-\' + opt + \'-type\' %>="<%= type.name %>" class=quc-tab-item-inner><%= type.title %></a></div> <% }) %> <% } %> </div>'
  },
  function (e, t, n) {
    ;(function (e, t) {
      var i = n(155),
        r = n(164)
      !(function (o) {
        var a,
          c = o.$,
          s = n(14).getLogger('signIn'),
          u = n(159),
          l = o.getLogic({
            name: 'signIn',
            validate: function (e, t) {
              var n = o.validate,
                i = !1
              switch (((t = t || this.get(e)), e)) {
                case 'userName':
                  i = o.getConfig('signIn.normal.onlyMobile')
                    ? n.checkMobile(t)
                    : n.checkAccount(t)
                  break
                case 'password':
                  ;(i = n.checkPassword(t)),
                    i &&
                      (i = o.utils.isSameError(i, o.ERROR.PASSWORD_EMPTY)
                        ? i
                        : o.ERROR.PASSWORD_WRONG)
                  break
                case 'mobile':
                  i = n.checkMobile(t)
                  break
                case 'smscode':
                  i = n.checkSmsToken(t)
                  break
                case 'captcha':
                  i = n.checkCaptcha(t)
              }
              return i
            },
            getSignInTypes: function () {
              return c.grep(o.getConfig('signIn.types'), 
            },
            getThirdPartProviders: function () {
              var e = o.getConfig('src'),
                t = [
                  'pcw_so_wenda',
                  'pcw_so_baike',
                  'pcw_so_image',
                  'pcw_so_music',
                  'pcw_so',
                  'pcw_so_map',
                  'pcw_so_adunion',
                  'pcw_so_zc',
                  'pcw_so_zhanzhang',
                  'pcw_open_app',
                  'pcw_wan',
                  'pcw_wan_youxi',
                  'pcw_wan_tg'
                ]
              return c.inArray(e, t) > -1
                ? o.getConfig('signIn.thirdPart.providers', [
                    'tencent',
                    'weixin',
                    'sina'
                  ]) || []
                : o.getConfig('signIn.thirdPart.providers', [
                    'tencent',
                    'weixin',
                    'sina'
                  ]) || []
            },
            prepareQuickSignIn: function (e) {
              var t = this,
                n = c.Deferred()
              return (
                (void 0 !== a && !e) ||
                c.inArray('quick', o.getConfig('signIn.types')) == -1
                  ? n.resolve()
                  : ((o.ptLogin = function (e) {
                      0 == e.s
                        ? o.sync
                            .getRd()
                            .then(function (e) {
                              return o.sync.setCookie(e.rd)
                            })
                            .then(function () {
                              return o.getUserInfo(!1)
                            })
                            .then(function (e) {
                              t.trigger('hide').trigger('success', e).resolve(e)
                            })
                        : 2 == e.s &&
                          ((a = !1), t.trigger('quickSignInFailed'), n.reject())
                    }),
                    o.getQuickLoginStatus(function (e) {
                      ;(a = 0 == e.errno && e.status < 2), n.resolve()
                    })),
                n.promise()
              )
            },
            isQuickSignInAvailable: 
            sendSmsToken: function () {
              var e = this.get('mobile'),
                t = this.get('captcha'),
                n = this.get('token'),
                i = this.validate('mobile', e)
              return i
                ? c.Deferred().reject(i).promise()
                : o.sync.sendSmsCodeNew({
                    condition: r.SMS_CONDITION_EXIST,
                    sms_scene: r.SMS_SCENE_LOGIN,
                    account: e,
                    captcha: t,
                    vt: n
                  })
            },
            run: function (e) {
              s.debug('sign in')
              var t = this
              t.isInit() ||
                t.set('isKeepAlive', o.getConfig('signIn.defaultKeepAlive')),
                t.init().trigger('showLoading')
              var n = o.utils.storage().get('lastSignInAccount', '').split(',')
              n[2] && new Date().getTime() <= n[2]
                ? t.set('saveAccount', { type: n[1], account: n[0] })
                : o.utils.storage().remove('lastSignInAccount'),
                t.prepareQuickSignIn().always(function () {
                  t.trigger('hideLoading').trigger('show', { wrapper: e })
                })
            },
            submit: function () {
              var n,
                i = this,
                r = i.get('userType'),
                a = { type: r },
                c = i.get('isNeedCheckCaptcha', !1)
              return (
                this.trigger('beforeSubmit'),
                'mobile' == r
                  ? ((a.account = i.get('mobile')),
                    (a.password = i.get('smscode')),
                    (n =
                      i.validate('mobile') ||
                      (c && i.validate('captcha')) ||
                      i.validate('smscode')))
                  : ((c = i.get('isNeedCheckCaptcha')),
                    (a.account = i.get('userName')),
                    o.getConfig('signIn.normal.onlyMobile') &&
                      (e.startsWith(a.account, '+') ||
                        (a.account = '+86' + a.account)),
                    (a.password = i.get('password')),
                    (a.captcha = i.get('captcha')),
                    (n =
                      i.validate('userName') ||
                      i.validate('password') ||
                      (c && i.validate('captcha')))),
                (a.isKeepAlive = i.get('isKeepAlive')),
                n
                  ? ((n.signInType = r), void i.trigger('invalid', n))
                  : void t
                      .resolve(o.sync.signIn(a))
                      .then(function (e) {
                        return e && 0 === e.errno
                          ? (i.trigger('hide'),
                            o.sync.setCookie(e.s).then()
                          : t.reject(new Error('login fail'))
                      })
                      .then(function (r) {
                        var a
                        return (
                          (a =
                            o.isI360() &&
                            e.startsWith(location.pathname, '/oauth/bind')
                              ? t.resolve()
                              : u.tryHandleAbnormalPassword(
                                  r,
                                  i.get('password')
                                )),
                          a
                            .then(function (e) {
                              if (e && e.shouldChangePassword)
                                return o.isI360()
                                  ? (u.gotoPageWithSearchParams(
                                      '/profile/chuserpwd?op=modifyPwd'
                                    ),
                                    t.reject(
                                      new Error('auto goto change pwd page')
                                    ))
                                  : new t(function (e, t) {
                                      o.modifyPassword(function () {
                                        s.debug('change password success'),
                                          o
                                            .$message({
                                              title:
                                                '\u5bc6\u7801\u4fee\u6539\u6210\u529f',
                                              content:
                                                '\u5bc6\u7801\u4fee\u6539\u6210\u529f, \u8bf7\u60a8\u4f7f\u7528\u65b0\u5bc6\u7801\u767b\u5f55',
                                              status: 'success'
                                            })
                                            .then(
                                      }),
                                        i.trigger('invalid', n)
                                    })
                            })
                            .caught(function (e) {
                              return (
                                /goto/i.test(e.message) ||
                                  (s.debug('sign out'),
                                  o.signOut(function () {
                                    s.debug('sign out success')
                                  })),
                                t.reject(e)
                              )
                            })
                        )
                      })
                      .then(function () {
                        return o.getUserInfo(!1)
                      })
                      .then(
                        function (e) {
                          var t = o.getConfig('signIn.saveAccount', 604800)
                          if (t && 'normal' == r) {
                            var n = new Date().getTime() + 1e3 * t
                            o.utils
                              .storage()
                              .set(
                                'lastSignInAccount',
                                [a.account, r, n].join(',')
                              )
                          }
                          i.trigger('success', e).resolve(e)
                        },
                        function (e) {
                          s.debug('login fail', e),
                            (e.fromServer = !0),
                            (e.signInType = r)
                          var t = e.errdetail && e.errdetail.captchaUrl
                          t && i.setCaptchaUrl(t), i.trigger('invalid', e)
                        }
                      )
              )
            },
            checkIsCaptchaRequired: function (e) {
              var t = c.Deferred(),
                n = this
              return (
                o.sync.checkSignInCaptchaRequired(e).always(function (e) {
                  e.captchaUrl && n.setCaptchaUrl(e.captchaUrl),
                    t.resolve(!!e.captchaFlag)
                }),
                t.promise()
              )
            },
            getQuickSignInUrl: function () {
              var e = c
                  .map(o.getConfig('domainList', []), 
                  .join(','),
                t = o.getConfig('protocol'),
                n = o.getConfig('signIn.quick.showUserNum', 3),
                i = o.getConfig('signIn.quick.stylesheet', ''),
                r = o.getConfig('signIn.quick.mode', 'picture')
              return (
                t +
                '://axlogin.passport.360.cn/ptlogin.php?displayType=' +
                r +
                '&custUserNum=' +
                n +
                '&nextUrl=' +
                encodeURIComponent(o.getConfig('proxy')) +
                '&requestScema=' +
                t +
                '&custStyleUrl=' +
                encodeURIComponent(i) +
                '&src=' +
                o.getConfig('src') +
                '&domain_list=' +
                e +
                '&t=' +
                new Date().getTime()
              )
            },
            thirdPartSignIn: function (t, n) {
              var i,
                r = this,
                a = o.getConfig('signIn.thirdPart', {}),
                s = 'jump' == a.mode,
                u = this.get('callback'),
                l =
                  (s && a.jumpUrl) ||
                  (s && 'string' == typeof u && u) ||
                  location.href,
                f = {
                  sina: 'Sina',
                  renren: 'RenRen',
                  msn: 'Msn',
                  fetion: 'Fetion',
                  telecom: 'Telecom',
                  tencent: 'qq',
                  weixin: 'weixin'
                }
              e.isFunction(n) && r.setCallback(n),
                (l = s
                  ? l.replace(/(?:http(s?):\/\/)?(.*)/, 'http$1://$2')
                  : l.replace(/((?:https?:\/\/)?[\w.:]*\/?).*/, '$1'))
              var p = l,
                d =
                  o.getConfig('protocol') +
                  '://i.360.cn/oauth/loginByOauth?c=' +
                  f[t] +
                  '&type=' +
                  (s ? 'normal' : 'pop') +
                  '&destUrl=' +
                  encodeURIComponent(p) +
                  '&f=' +
                  o.getConfig('src') +
                  '&r=' +
                  new Date().getTime()
              if (s) location.href = d
              else {
                var h = ''
                if ('tab' != a.mode) {
                  var m = c(window),
                    g = 520,
                    v = 800,
                    q = Math.max(Math.round((m.outerWidth() - v) / 2), 0),
                    w = Math.max(Math.round((m.outerHeight() - g) / 2), 0)
                  h =
                    'height=' +
                    g +
                    ',width=' +
                    v +
                    ',left=' +
                    q +
                    ',top=' +
                    w +
                    ',alwaysRaised=yes'
                }
                i = window.open(d, 'oauthlogin', h)
              }
              o.thirdLoginSuccess = function () {
                o.sync
                  .getRd()
                  .then(function (e) {
                    return o.sync.setCookie(e.rd)
                  })
                  .then(function () {
                    return o.getUserInfo(!1)
                  })
                  .then(
                    function (e) {
                      i.close()
                      var t = r.trigger('hide').trigger('success', e)
                      t.resolve(e)
                    },
                    function (e) {
                      o.reportWarn(e), r.trigger('invalid', e)
                    }
                  )
              }
            },
            getDomainApi: function () {
              var e = o.getConfig('currentDomain', ''),
                t =
                  e || location.hostname.replace(/^(?:.+\.)?(\w+\.\w+)$/, '$1'),
                n =
                  o.getConfig('protocol') +
                  '://login.' +
                  t +
                  '/?o=sso&m=getLoginQrcode&s=3'
              return o.getConfig('signIn.qrCodeUrl', n) + '&t=' + Math.random()
            },
            signUp: function () {
              var e = this.getCallback()
              o.signUp
                ? (this.trigger('hide'), o.signUp(e))
                : (location.href =
                    '//i.360.cn/reg/?src=' +
                    o.getConfig('src') +
                    '&destUrl=' +
                    encodeURIComponent(
                      'string' == typeof e ? e : location.href
                    ))
            },
            listenQrcodeLogin: function () {
              var e = this
              if (o.utils.getCookie('i360QRKEY'))
                return o.sync.checkQrCodeSignInStatus().done(function (t) {
                  return o.sync
                    .setCookie(t.s)
                    .then(function () {
                      return o.getUserInfo(!1)
                    })
                    .then(
                      function (t) {
                        e.trigger('hide').trigger('success', t).resolve(t)
                      },
                                          )
                })
            }
          })
        ;(o.thirdPartSignIn = ,
          o.events.on('init.core', function () {
            o.getConfig('signIn.prepareQuick', !1) && l.prepareQuickSignIn()
          }),
          (o.signIn = function (e, t) {
            i.load(),
              !e ||
                1 == e.nodeType ||
                e instanceof c ||
                ((t = e), (e = void 0)),
              l.setCallback(t).run(e)
          })
        var f = ['quick', 'normal', 'mobile']
        o.setConfig({ signIn: { types: f, defaultKeepAlive: !0 } })
      })(myQHPass)
    }.call(t, n(2), n(41)))
  },
  function (e, t, n) {
    var i = n(14).getLogger('modifyPassword')
    !(function (e) {
      'use strict'
      var t = e.$,
        r = n(201),
        o = n(159),
        a = {
          init: function (e) {
            ;(this.model = e),
              (this.$el = t(r)),
              this.initModelEvent(),
              this.initElementEvent(),
              o.initView(this)
          },
          reset: function () {
            i.debug('reset'), this.$el && this.$el.html(t(r).html())
          },
          initElementEvent: function () {
            var e = this
            e.$el
              .find('.quc-input')
              .focus(
              .blur(function () {
                t(this).parent().removeClass('quc-input-bg-focus'),
                  e.model.set(
                    'password',
                    e.$el.find('.quc-input-password').val()
                  ),
                  e.model.set(
                    'rePassword',
                    e.$el.find('.quc-input-rePassword').val()
                  )
              })
              .blur(function () {
                var n,
                  i = t(this).val(),
                  r = t(this).attr('name')
                i.length > 0 &&
                  ('password' == r
                    ? (n = e.model
                        .validate(r, !0)
                        .done(function (t) {
                          e.model.set('weakError', !1), e.model.set('oldpwd', i)
                        })
                        .fail(function (t) {
                          t &&
                            (e.model.set('weakError', t),
                            e.showTip(t.errmsg, t.errno))
                        }))
                    : ((n = e.model.validate(r)),
                      n
                        ? e.showTip(n.errmsg, n.errno)
                        : (n = e.model
                            .validate('password', !0)
                            .done(
                            .fail(function (t) {
                              t &&
                                (e.model.set('weakError', t),
                                e.showTip(t.errmsg, t.errno))
                            }))))
              })
          },
          initModelEvent: function () {
            var e = this
            e.model
              .on('show', function (t, n) {
                e.show(n && n.wrapper)
              })
              .on('hide', function () {
                e.hide()
              })
              .on('reset', function () {
                e.$el
                  .find('.quc-button-submit')
                  .prop('disabled', !1)
                  .val('\u63d0\u4ea4')
              })
          },
          show: function (n) {
            if ((this.reset(), i.debug('show panel'), n))
              this.model.trigger('beforeShow', this.$el[0]),
                t(n).addClass('quc-wrapper quc-page').empty().append(this.$el)
            else {
              var r = (this.panel = this.model.panel = new e.utils.Panel({
                type: 'message'
              }))
              r.setTitle(
                e.getConfig(
                  'modifyPassword.panelTitle',
                  '\u4fee\u6539\u5bc6\u7801'
                )
              ),
                r.setContent(this.$el),
                this.model.trigger('beforeShow', this.$el[0]),
                r.show(),
                t(r).on(
                  'close',
                  e.getConfig('modifyPassword.panelCloseHandler', t.noop)
                )
            }
            this.model.trigger('afterShow', this.$el[0])
          },
          hide: function () {
            i.debug('hide panel'),
              this.model.trigger('beforeHide', this.$el[0]),
              this.panel && this.panel.hide(),
              this.model.trigger('afterHide', this.$el[0])
          }
        }
      e.ui.modifyPassword = {
        init: function () {
          a.init.apply(a, arguments)
        }
      }
    })(myQHPass),
      (function (e) {
        'use strict'
        var t = e.getLogic({
          name: 'modifyPassword',
          validate: function (t, n) {
            i.debug('validate', t, n)
            var r,
              o = this.get('password'),
              a = this.get('rePassword')
            switch (t) {
              case 'password':
                var c = e.getUserInfoCache() || {},
                  s = e.validate.checkPasswordFrontendSync({
                    password: o,
                    userName: c.userName
                  })
                ;(r = s.reason), !r && a && (r = this.validate('rePassword'))
                break
              case 'rePassword':
                r = e.validate.checkPasswordConfirm(o, a)
            }
            if (!n) return r
            var u = $.Deferred()
            if (r) return u.reject(r)
            switch (t.toLowerCase()) {
              case 'password':
                return this.get('oldpwd') != o
                  ? e.sync.checkWeakPwd(o)
                  : u.resolve(this.get('weakError'))
            }
          },
          run: function (t) {
            var n = this
            n.init().trigger('showLoading'),
              i.debug('show loading and identify'),
              e
                .identify(n)
                .always(function () {
                  n.trigger('hideLoading')
                })
                .done(function () {
                  n.trigger('show', { wrapper: t })
                })
          },
          submit: function () {
            var t = this,
              n = !1
            i.debug('submit'),
              this.trigger('beforeSubmit'),
              $.each(['password', 'rePassword'], function (e, i) {
                if ((n = t.validate(i))) return t.trigger('invalid', n), !1
              }),
              n ||
                (i.debug('validate pass'),
                e
                  .getUserInfo()
                  .then(function (n) {
                    return e.sync.modifyPassword(n.crumb, t.get('password'))
                  })
                  .then(
                    
                                      ))
          }
        })
        e.modifyPassword = function (e, n) {
          i.debug('run'),
            'function' == typeof e && ((n = e), (e = void 0)),
            t.setCallback(n).run(e)
        }
      })(myQHPass)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-modify-password><div class=quc-main><div class="quc-tip quc-tip-absolute"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder=\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801\uff088-20\u4e2a\u5b57\u7b26\uff09></div></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class=quc-input><input type=password name=rePassword placeholder=\u8bf7\u518d\u6b21\u8f93\u5165\u65b0\u5bc6\u7801></div></div></div><div class=quc-button-list><input type=submit value=\u63d0\u4ea4 class="quc-button-submit quc-button quc-button-primary"></div></form></div></div>'
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
        var i = t.$,
          r = n(203),
          o = n(159),
          a = {},
          c = {
            init: function (e) {
              ;(this.model = e),
                (this.supportSignUpTypes = [
                  {
                    name: 'mobile',
                    title: t.getConfig(
                      'signUp.mobile.panelTitle',
                      '\u624b\u673a\u53f7\u6ce8\u518c'
                    ),
                    fields: [
                      'mobile',
                      'captcha',
                      'smscode',
                      'userName',
                      'nickName',
                      'password',
                      'rePassword'
                    ]
                  },
                  {
                    name: 'email',
                    title: t.getConfig(
                      'signUp.email.panelTitle',
                      '\u90ae\u7bb1\u6ce8\u518c'
                    ),
                    fields: [
                      'email',
                      'userName',
                      'nickName',
                      'password',
                      'rePassword',
                      'captcha'
                    ]
                  },
                  {
                    name: 'username',
                    title: t.getConfig(
                      'signUp.username.panelTitle',
                      '\u7528\u6237\u540d\u6ce8\u518c'
                    ),
                    fields: [
                      'userName',
                      'nickName',
                      'password',
                      'rePassword',
                      'captcha'
                    ]
                  }
                ]),
                this.initModelEvent(),
                this.initCaptcha(),
                this.initSmsToken()
            },
            bindEvent: function (e) {
              var t = this
              e.on('click', '[data-signup-type]', function (e) {
                var n = i(this).data('signup-type')
                n && t.changeType(n)
              }),
                e.on('click', '.quc-link-sign-in, .quc-link-login', 
            },
            setElement: function () {
              a = {}
              var n = this
              n.$el && n.$el.remove(),
                (n.$el = i(e.template(r)(t.getConfig('signUp'))))
            },
            initModelEvent: function () {
              var e = this
              e.model
                .on('show', function (t, n) {
                  e.show(n && n.wrapper)
                })
                .on('success', function () {
                  var e = t.getConfig('signInBoxWrapper', ''),
                    n = t.getConfig('signInBoxOpts', {})
                  e &&
                    t.plugin.signInBox &&
                    i(e).empty().html(t.plugin.signInBox(n))
                })
                .on('hide', function () {
                  e.hide()
                })
                .on('dealCaptcha', function () {
                  var t = e.$el.find('[name=captcha]').parents('.quc-field')
                  t.hide(),
                    e.$el.find('[name=captcha]').val(''),
                    e.$el
                      .find('[name=mobile]')
                      .off('change')
                      .on('change', function () {
                        t.show(),
                          e.$el.find('.quc-captcha-change').trigger('click'),
                          e.model.set('token', null),
                          e.model.trigger('timer_stop')
                      })
                })
            },
            initCaptcha: function () {
              var e,
                n,
                r = this,
                o = function (e) {
                  var t = 'mobile' == e ? 'strictreg' : 'reg'
                  r.model.getCaptchaUrl(t, !0).then(function (e) {
                    n.find('.quc-captcha-img').attr('src', e),
                      n.find('[name=captcha]').val(''),
                      n
                        .find('.quc-tip')
                        .removeClass('quc-tip-error')
                        .html(function () {
                          return i(this).attr('data-default-tip')
                        }),
                      n
                        .find('.quc-tip-icon')
                        .removeClass(
                          'quc-tip-icon-incorrect quc-tip-icon-correct'
                        )
                  })
                },
                a = function (e) {
                  o(e),
                    n.show(),
                    n
                      .find('.quc-captcha-change')
                      .on('mousedown', function (e) {
                        e.preventDefault()
                      })
                      .on('click', function (t) {
                        t.preventDefault(),
                          o(e),
                          n.find('[name=captcha]').val('').focus()
                      })
                }
              r.model.on('changeType', function (t, i) {
                ;(n = r.$el.find('.quc-field-captcha')),
                  0 != n.length &&
                    (e || (e = r.model.isCaptchaRequired()) || 'mobile' == i) &&
                    a(i)
              }),
                this.model.on('invalid', function (n, i) {
                  var r = i.type || 'reg'
                  e || 'captcha' != t.utils.getErrorType(i)
                    ? i.fromServer && o(r)
                    : ((e = !0), a(r))
                })
            },
            initSmsToken: function () {
              var e,
                n,
                i,
                r,
                o = this,
                a = 'quc-button-disabled',
                c = t.utils.getTimer('sign_up')
              c.on('timer_start', function (e, t) {
                n.addClass(a),
                  n.html(t + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
              }),
                c.on('timer_tick', function (e, t) {
                  n.html(t + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
                }),
                c.on('timer_stop', function () {
                  n.html('\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                    n.removeClass(a)
                }),
                o.model.on('timer_stop', function () {
                  c.stop()
                })
              var s = function (t) {
                t.preventDefault()
                var s = n.siblings('.quc-tip-icon')
                n.hasClass(a) ||
                  (o.model.set('mobile', e.val()),
                  o.model.set('captcha', r.val()),
                  n.html('\u53d1\u9001\u4e2d...'),
                  n.addClass(a),
                  s.hide(),
                  o.model.trigger('afterShow.changeType'),
                  o.model
                    .sendSmsToken()
                    .done(function (e) {
                      var t = i.find('.quc-tip')
                      t
                        .addClass('quc-tip-success')
                        .html('\u53d1\u9001\u6210\u529f')
                        .show(),
                        i.find('.quc-input').one('change', ,
                        s.show(),
                        c.start(),
                        o.model.set('token', e.vt),
                        o.model.trigger('dealCaptcha')
                    })
                    .fail(function (e) {
                      s.show(),
                        n.html('\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                        n.removeClass(a),
                        (e.type = 'mobile')
                      var t = e.errdetail && e.errdetail.captchaUrl
                      t && ((e.fromServer = !0), o.model.setCaptchaUrl(t)),
                        o.model.trigger('invalid', e)
                    }))
              }
              this.model.on('changeType', function () {
                ;(i = o.$form.find('[name=smscode]').parents('.quc-field')),
                  (e = o.$form.find('[name=mobile]')),
                  (r = o.$form.find('[name=captcha]')),
                  (n = i.find('.quc-get-token')),
                  0 != i.length &&
                    (n.off('click', s).on('click', s),
                    c.isRunning() && c.resume())
              })
            },
            getTitle: function () {
              var r = this,
                o = i('<div>'),
                a = t.getConfig('signUp.panelLogo')
              if (a) {
                var c = i('<img>').attr('src', a).addClass('quc-logo')
                o.append(i('<div>').append(c))
              }
              var s = e.uniq(r.model.getTypes())
              s = e.compact(
                e.map(s, 
              )
              var u = r.currentType,
                l = n(198),
                f = e.template(l)({
                  types: s,
                  currentTypeName: u,
                  opt: 'signup'
                })
              return o.append(f), o
            },
            onSignIn: 
            getFormEl: function (r) {
              var c = this
              if (!a[r]) {
                var s = i(e.template(n(204))(t.getConfig('signUp'))),
                  u = e.find(c.supportSignUpTypes, function (e) {
                    return e.name === r
                  }),
                  l = i('<div>')
                if (u) {
                  var f = u.fields
                  ;(f = e.filter(f, function (e) {
                    return (
                      ('userName' !== e ||
                        !t.getConfig('signUp.hideUsername')) &&
                      ('nickName' !== e ||
                        !t.getConfig('signUp.hideNickname')) &&
                      ('rePassword' !== e ||
                        !t.getConfig('signUp.hidePasswordAgain'))
                    )
                  })),
                    e.each(f, function (e) {
                      var t = s.find('[name=' + e + ']')
                      t[0] && l.append(t.parents('.quc-form-item'))
                    }),
                    (a[r] = l),
                    t.utils.emailHint(l.find('[name=email]')),
                    l
                      .find('.quc-input input')
                      .on('focus', 
                      .on('blur', function () {
                        var e = i(this).parents('.quc-form-item')
                        c.validate(e),
                          e.is('[name=password]') &&
                            c.validate(e.siblings('[name=rePassword]')),
                          e.is('[name=rePassword]') &&
                            c.validate(e.siblings('[name=password]'))
                      })
                }
              }
              return a[r][0]
            },
            changeType: function (n) {
              var r = this
              ;(r.currentType = n || e.first(r.model.getTypes())),
                r.panel.setTitle(r.getTitle()),
                this.$el
                  .find('.quc-panel-title .quc-tab-item')
                  .removeClass('quc-tab-item-active'),
                this.$form && this.$form.detach(),
                (this.$form = i(this.getFormEl(r.currentType))),
                this.$el.find('.quc-signup-content').append(this.$form),
                this.model.trigger('DOMUpdated', this.$el),
                this.$el.triggerHandler('QucDOMUpdated'),
                t.utils.resetPlaceholder(this.$el.find('[placeholder]')),
                this.model.trigger('afterShow.changeType', this.$el[0]),
                this.model.trigger('changeType', r.currentType),
                this.$form
                  .find('.quc-field .quc-tip')
                  .attr('data-default-tip', function () {
                    return i(this).html()
                  }),
                this.model.clear(),
                r.model.set('userType', r.currentType)
            },
            validate: function (e) {
              var t = this,
                n = e.find('.quc-input input'),
                i = n.attr('data-name') || n.attr('name'),
                r = n.val()
              0 != e.length &&
                0 != r.length &&
                (n.trigger('quc-validate'),
                o.setFieldStatus(e),
                t.model
                  .validate(i, r, !0)
                  .done(function () {
                    o.setFieldStatus(e)
                  })
                  .fail(function (n) {
                    ;(n.field = e), t.model.trigger('invalid', n)
                  }))
            },
            show: function (e) {
              var n = this
              if ((this.setElement(), o.initView(this), e))
                this.model.trigger('beforeShow', this.$el[0]),
                  i(e).addClass('quc-wrapper quc-page').empty().append(this.$el)
              else {
                var r = (this.panel = this.model.panel = new t.utils.Panel())
                ;(this.model.panel = r),
                  r.setContent(this.$el),
                  this.changeType(),
                  this.model.trigger('beforeShow', this.$el[0]),
                  n.bindEvent(r.$el),
                  r.show(),
                  r.$el.addClass('quc-panel-large'),
                  i(r).on(
                    'close',
                    t.getConfig('signUp.panelCloseHandler', i.noop)
                  )
                var a = t.utils.browser
                ;(a.ie6 || a.ie7) && r.setSize(a.ie6 ? 564 : 544)
              }
              this.model.trigger('afterShow', this.$el[0])
            },
            hide: function () {
              this.model.trigger('beforeHide', this.$el[0]),
                this.panel && this.panel.hide(),
                this.model.trigger('afterHide', this.$el[0])
            }
          }
        t.ui.signUp = {
          init: function () {
            c.init.apply(c, arguments)
          },
          changeType: function (e) {
            c.changeType(e)
          }
        }
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-sign-up><div class=quc-main><div><div class="quc-tip quc-tip-absolute"></div><form method=POST class=quc-form autocomplete=off action=https://i.360.cn/signUp/dosignUpAccount><div class=quc-signup-content></div><div class="quc-form-item quc-field quc-form-item-checkbox"><label><input type=checkbox name=is_agree>\u9605\u8bfb\u5e76\u540c\u610f<a href=<%= protocolUrl %> target=_blank class=quc-link>\u300a<%= protocolText %>\u300b</a>\u548c<a href=<%= privacyUrl %> target=_blank class=quc-link>\u300a<%= privacyText %>\u300b</a></label></div><div class=quc-button-list><input type=submit value=\u6ce8\u518c class="quc-button quc-button-primary"></div><div class="quc-form-tips quc-clearfix"><div class=quc-right>\u5df2\u6709\u5e10\u53f7\uff0c<a class="quc-link quc-link-sign-in">\u76f4\u63a5\u767b\u5f55</a></div><div class=quc-left></div></div></form></div></div></div>'
  },
  function (e, t) {
    e.exports =
      '<div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix"><input name=mobile placeholder="<%= mobilePlaceholder %>"><div class=quc-input-prefix><i class="quc-icon quc-icon-phone">&#xe68d;</i></div></div></div></div><div class="quc-form-item quc-field quc-field-captcha" style="display: none"><label class=quc-label></label><div class="quc-form-item-content quc-form-item-img-captcha"><div class="quc-input quc-input-has-prefix"><div class=quc-input-prefix><i class="quc-icon quc-icon-code">&#xe68e;</i></div><input name=captcha placeholder="<%= captchaPlaceholder %>" maxlength=7 autocomplete=new-password></div><img class="quc-captcha-change quc-captcha-img"> <span class="quc-captcha-change quc-link">\u6362\u4e00\u5f20</span></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix-append"><div class=quc-input-prefix><i class="quc-icon quc-icon-message">&#xe690;</i></div><input name=smscode autocomplete=new-password placeholder="<%= smscodePlaceholder %>"><div class=quc-input-append><span class="quc-link quc-get-token">\u83b7\u53d6\u9a8c\u8bc1\u7801</span></div></div></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix"><div class=quc-input-prefix><i class="quc-icon quc-icon-message">&#xe690;</i></div><input name=email placeholder="<%= emailPlaceholder %>"></div></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix"><div class=quc-input-prefix><i class="quc-icon quc-icon-user">&#xe691;</i></div><input maxlength=14 name=userName placeholder="<%= userNamePlaceholder %>"></div></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix"><div class=quc-input-prefix><i class="quc-icon quc-icon-user">&#xe691;</i></div><input maxlength=14 name=nickName placeholder="<%= nickNamePlaceholder %>"></div></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix"><div class=quc-input-prefix><i class="quc-icon quc-icon-password">&#xe68f;</i></div><input type=password autocomplete=new-password name=password placeholder="<%= passwordPlaceholder %>"></div></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix"><div class=quc-input-prefix><i class="quc-icon quc-icon-password">&#xe68f;</i></div><input type=password name=rePassword autocomplete=new-password placeholder=\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801></div></div></div>'
  },
  function (e, t, n) {
    var i = n(155)
    !(function (e) {
      var t,
        r = e.$,
        o = n(164),
        a = { email: 1, mobile: 2, username: 4 },
        c = e.getLogic({
          name: 'signUp',
          validate: function (t, n, i) {
            var o,
              a = e.validate
            switch (('boolean' == typeof n && (n = this.get(t)), t)) {
              case 'mobile':
                o = a.checkMobile(n)
                break
              case 'email':
                o = a.checkEmail(n)
                break
              case 'userName':
                this.set('userName', n), (o = a.checkUsername(n))
                break
              case 'nickName':
                o = a.checkNickname(n)
                break
              case 'password':
                this.set('password', n)
                var c = a.checkPasswordFrontendSync({
                  password: n,
                  userName: this.get('userName')
                })
                o = c.reason
                break
              case 'rePassword':
                o = a.checkPasswordConfirm(this.get('password'), n)
                break
              case 'captcha':
                o = a.checkCaptcha(n)
                break
              case 'smscode':
                o = a.checkSmsToken(n)
            }
            if (!i) return o
            var s = e.sync,
              u = r.Deferred()
            if (o) return u.reject(o)
            switch (t.toLowerCase()) {
              case 'mobile':
                return s.checkMobileNumberExist(n)
              case 'email':
                return s.checkEmailExist(n)
              case 'userName':
                return s.checkUsernameExist(n)
              case 'nickName':
                return s.checkNicknameExist(n)
              default:
                return u.resolve()
            }
          },
          isCaptchaRequired: 
          prepareCaptcha: function () {
            var n = this
            return e.sync.checkSignUpCaptchaRequired().then(
              function (e) {
                ;(t = e.captchaFlag), n.setCaptchaUrl(e.captchaUrl)
              },
              function () {
                return (t = !0), r.Deferred().resolve().promise()
              }
            )
          },
          isShowField: function (t, n) {
            var i = r.inArray(t, ['userName', 'nickName', 'rePassword']) >= 0,
              o = 'signUp.hide' + t.substr(0, 1).toUpperCase() + t.substr(1)
            return !i || n == t || !e.getConfig(o, !1)
          },
          sendSmsToken: function () {
            var t = this.get('mobile'),
              n = this.get('captcha'),
              i = this.get('token'),
              a =
                this.validate('mobile', t) ||
                (!i && this.validate('captcha', n))
            return a
              ? r.Deferred().reject(a).promise()
              : e.sync.sendSmsCodeNew({
                  condition: o.SMS_CONDITION_NOT_EXIST,
                  account: t,
                  crumb: null,
                  sms_scene: o.SMS_SCENE_REG,
                  captcha: n,
                  vt: i
                })
          },
          run: function (t) {
            var n = this
            n.init().trigger('showLoading'),
              n
                .prepareCaptcha()
                .then(
                .done(function () {
                  n.trigger('hideLoading').trigger('show', { wrapper: t })
                })
          },
          getTypes: 
          submit: function () {
            var n = this,
              i = n.get('userType'),
              o = n.get('isNeedCheckCaptcha', !1),
              c = a[i]
            if (!c)
              return void n.model.reportWarn(
                '\u672a\u5b9a\u4e49\u7684\u7c7b\u522b typeConf:' + i
              )
            this.trigger('beforeSubmit')
            var s = {
              acctype: c,
              account: n.get(i),
              password: n.get('password')
            }
            ;(s.loginEmailActiveFlag = e.getConfig(
              'signUp.sendActiveEmail',
              !0
            )),
              r.each(
                ['userName', 'nickName', 'rePassword', 'smscode', 'is_agree'],
                function (e, t) {
                  var i = n.get(t, void 0)
                  void 0 !== i && (s[t] = i)
                }
              ),
              o && (s.captcha = n.get('captcha'))
            var u = !1,
              l = { mobile: n.get('mobile'), email: n.get('email') }
            r.each(r.extend({}, s, l), function (e, t) {
              var i = n.validate(e, t)
              i && n.trigger('invalid', i), (u = u || i)
            }),
              !u &&
                e.sync
                  .signUp(s)
                  .then(function (t) {
                    var i = r.Deferred()
                    return (
                      t.activeurl
                        ? ((t.email = n.get('email')),
                          e.activeEmail(t, function () {
                            e.sync
                              .getRd()
                              .done(
                              .fail(function () {
                                n.signIn()
                              })
                          }))
                        : ((t.rd = encodeURIComponent(t.rd)), i.resolve(t)),
                      i.promise()
                    )
                  })
                  .then(
                  .then(function () {
                    return e.getUserInfo(!1)
                  })
                  .done(function (e) {
                    n.trigger('hide').trigger('success', e).resolve(e)
                  })
                  .fail(function (e) {
                    e.fromServer = !0
                    var i = e.errdetail && e.errdetail.captchaUrl
                    i && ((t = !0), n.setCaptchaUrl(i)), n.trigger('invalid', e)
                  })
          },
          signIn: function () {
            var t = this.getCallback()
            e.signIn
              ? (this.trigger('hide'), e.signIn(t))
              : (location.href =
                  '//i.360.cn/login/?src=' +
                  e.getConfig('src') +
                  '&destUrl=' +
                  encodeURIComponent('string' == typeof t ? t : location.href))
          }
        })
      ;(e.signUp = function (e, t) {
        i.load(),
          !e || 1 == e.nodeType || e instanceof r || ((t = e), (e = void 0)),
          c.setCallback(t).run(e)
      }),
        e.setConfig('signUp.hideNickname', !0)
    })(myQHPass)
  },
  function (e, t, n) {
    !(function (e) {
      var t = e.$,
        i = n(207),
        r = n(159),
        o = '<a href="#" class="quc-link"></a>',
        a = {
          init: function (e) {
            ;(this.model = e),
              (this.$el = t(i)),
              r.initView(this),
              this.initModelEvent()
          },
          reset: function () {
            this.$el && this.$el.html(t(i).html())
          },
          initModelEvent: function () {
            var t = this
            t.model
              .on('show', function (e, n) {
                t.show(n && n.wrapper)
              })
              .on('hide', function () {
                t.hide()
              })
              .on('invalid', function (n, i) {
                e.utils.isSameError(i, e.ERROR.USERNAME_DUPLICATE) &&
                  t.model.get('alternatives', []).length > 0 &&
                  (r.setFieldStatus(
                    t.$el.find('[name=userName]').parents('.quc-field')
                  ),
                  t.showAlternatives())
              })
          },
          setUsername: function (e) {
            this.$el.find('[name=userName]').val(e).focus()
          },
          showAlternatives: function () {
            var e,
              n = this,
              i = this.model.get('alternatives', []),
              r = this.$el.find('.quc-tip')
            if (!(i.length <= 0)) {
              var a = this.$el.find('.quc-alternatives'),
                c = function (e) {
                  return function (t) {
                    t.preventDefault(), n.setUsername(e)
                  }
                }
              a.empty()
              for (var s = 0, u = i.length; s < u; s++)
                (e = i[s]), t(o).html(e).on('click', c(e)).appendTo(a)
              a.parent().show(),
                r.hide(),
                this.$el.find('[name=userName]').on('change', function (e) {
                  var n = t(this)
                  t.inArray(n.val(), i) == -1 &&
                    (a.parent().hide(), r.show(), n.off(e))
                })
            }
          },
          show: function (n) {
            if (n)
              this.model.trigger('beforeShow', this.$el[0]),
                t(n).addClass('quc-wrapper quc-page').empty().append(this.$el)
            else {
              this.panel && this.reset()
              var i = (this.panel = this.model.panel = new e.utils.Panel({
                type: 'message'
              }))
              i.setTitle(
                e.getConfig(
                  'setUsername.panelTitle',
                  '\u8bbe\u7f6e\u7528\u6237\u540d'
                )
              ),
                i.setContent(this.$el),
                this.model.trigger('beforeShow', this.$el[0]),
                i.show(),
                t(i).on(
                  'close',
                  e.getConfig('setUsername.panelCloseHandler', t.noop)
                )
            }
            this.model.trigger('afterShow', this.$el[0])
          },
          hide: function () {
            this.model.trigger('beforeHide', this.$el[0]),
              this.panel && this.panel.hide(),
              this.model.trigger('afterHide', this.$el[0])
          }
        }
      e.ui.setUsername = {
        init: function () {
          a.init.apply(a, arguments)
        }
      }
    })(myQHPass)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-set-username><div class=quc-main><div class="quc-tip quc-tip-absolute"></div><form class=quc-form autocomplete=off><div class="quc-form-item quc-field"><div class=quc-form-item-content><div class=quc-input><input name=userName placeholder=\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff1a2-14\u4e2a\u5b57\u7b26,\u652f\u6301\u4e2d\u82f1\u6587 maxlength=14 autocomplete=off></div></div><div class=quc-alternative-wrapper style="display: none"><p class=quc-tip-error>\u7528\u6237\u540d\u5df2\u7ecf\u88ab\u5360\u7528\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u4ee5\u4e0b\u7528\u6237\u540d\uff1a<div class=quc-alternatives></div></div></div><div class=quc-button-list><input type=submit value=\u4fdd\u5b58 class="quc-button-submit quc-button quc-button-primary"></div></form></div></div>'
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = e.getLogic({
          name: 'setUsername',
          validate: function (t) {
            return (t = t || this.get('userName')), e.validate.checkUsername(t)
          },
          run: 
          submit: function () {
            var n = this,
              i = t.Deferred(),
              r = n.validate()
            return (
              this.trigger('beforeSubmit'),
              r ? i.reject(r) : i.resolve(),
              i
                .then(
                .then(function (t) {
                  return e.sync.setUsername(t.crumb, n.get('userName'))
                })
                .done(function (e) {
                  n.trigger('hide').trigger('success').resolve(e)
                })
                .fail(
            )
          }
        })
      e.setUsername = function (e, i) {
        !e || 1 == e.nodeType || e instanceof t || ((i = e), (e = void 0)),
          n.setCallback(i).run(e)
      }
    })(myQHPass)
  },
  function (e, t, n) {
    !(function (e) {
      var t = e.$,
        i = n(210),
        r = n(159),
        o = '<a href="#" class="quc-link"></a>',
        a = {
          init: function (e) {
            ;(this.model = e),
              (this.$el = t(i)),
              r.initView(this),
              this.initModelEvent()
          },
          reset: function () {
            this.$el && this.$el.html(t(i).html()), this.model.reset()
          },
          initModelEvent: function () {
            var t = this
            t.model
              .on('show', function (e, n) {
                t.show(n && n.wrapper)
              })
              .on('hide', function () {
                t.hide()
              })
              .on('invalid', function (n, i) {
                e.utils.isSameError(i, e.ERROR.NICKNAME_DUPLICATE) &&
                  t.model.get('alternatives', []).length > 0 &&
                  (r.setFieldStatus(
                    t.$el.find('[name=nickName]').parents('.quc-field')
                  ),
                  t.showAlternatives())
              })
          },
          setNickname: 
          showAlternatives: function () {
            var e,
              n = this,
              i = this.model.get('alternatives', []),
              r = this.$el.find('.quc-tip')
            if (!(i.length <= 0)) {
              var a = this.$el.find('.quc-alternatives'),
                c =               a.empty()
              for (var s = 0, u = i.length; s < u; s++)
                (e = i[s]), t(o).html(e).on('click', c(e)).appendTo(a)
              a.parent().show(),
                r.hide(),
                this.$el.find('[name=nickName]').on('change', function (e) {
                  var n = t(this)
                  t.inArray(n.val(), i) == -1 &&
                    (a.parent().hide(), r.show(), n.off(e))
                })
            }
          },
          show: function (n) {
            var i = this.model.get('nickName')
            if (n)
              this.model.trigger('beforeShow', this.$el[0]),
                t(n).addClass('quc-wrapper quc-page').empty().append(this.$el)
            else {
              this.panel && this.reset()
              var r = (this.panel = this.model.panel = new e.utils.Panel({
                type: 'message'
              }))
              r.setTitle(
                e.getConfig(
                  'setNickname.panelTitle',
                  i ? '\u4fee\u6539\u6635\u79f0' : '\u8bbe\u7f6e\u6635\u79f0'
                )
              ),
                r.setContent(this.$el),
                this.model.trigger('beforeShow', this.$el[0]),
                r.show(),
                t(r).on(
                  'close',
                  e.getConfig('setNickname.panelCloseHandler', t.noop)
                )
            }
            this.$el.find('[name=nickName]').val(i),
              this.model.trigger('aftershow', this.$el[0])
          },
          hide: function () {
            this.model.trigger('beforehide', this.$el[0]),
              this.panel && this.panel.hide(),
              this.model.trigger('afterhide', this.$el[0])
          }
        }
      e.ui.setNickname = {
        init: function () {
          a.init.apply(a, arguments)
        }
      }
    })(myQHPass)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-set-nickname><div class=quc-main><div class="quc-tip quc-tip-absolute"></div><form class=quc-form autocomplete=off><div class="quc-form-item quc-field"><div class=quc-form-item-content><div class=quc-input><input name=nickName placeholder=\u8bf7\u8f93\u5165\u6635\u79f0\uff1a2-14\u4e2a\u5b57\u7b26,\u652f\u6301\u4e2d\u82f1\u6587 maxlength=14 autocomplete=off></div></div><div class=quc-alternative-wrapper style="display: none"><p class=quc-tip-error>\u6635\u79f0\u5df2\u7ecf\u88ab\u5360\u7528\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350\u4ee5\u4e0b\u6635\u79f0\uff1a<div class=quc-alternatives></div></div></div><div class=quc-button-list><input type=submit value=\u4fdd\u5b58 class="quc-button-submit quc-button quc-button-primary"></div></form></div></div>'
  },
  function (e, t) {
    !(function (e) {
      var t,
        n = e.$,
        i = e.getLogic({
          name: 'setNickname',
          validate: function (t) {
            return (t = t || this.get('nickName')), e.validate.checkNickname(t)
          },
          run: function (n) {
            var i = this
            i.init().trigger('showLoading'),
              e
                .getUserInfo()
                .always(function () {
                  i.trigger('hideLoading')
                })
                .done(function (e) {
                  var r = e.nickname
                  r && (i.set('nickName', r), (t = r)),
                    i.trigger('show', { wrapper: n })
                })
          },
          submit: function () {
            var i = this,
              r = n.Deferred(),
              o = i.validate()
            return (
              this.trigger('beforeSubmit'),
              o ? r.reject(o) : r.resolve(),
              r
                .then(function () {
                  return e.getUserInfo()
                })
                .then(function (t) {
                  return e.sync.setNickname(t.crumb, i.get('nickName'))
                })
                .done(function () {
                  var e = { oldValue: t, newValue: i.get('nickName') }
                  ;(t = e.newValue),
                    i.trigger('hide').trigger('success').resolve(e)
                })
                .fail(function (t) {
                  e.utils.isSameError(e.ERROR.NICKNAME_DUPLICATE, t) &&
                    i.set('alternatives', t.userinfo),
                    i.trigger('invalid', t)
                })
            )
          }
        })
      e.setNickname = function (e, t) {
        !e || 1 == e.nodeType || e instanceof n || ((t = e), (e = void 0)),
          i.setCallback(t).run(e)
      }
    })(myQHPass)
  },
  function (e, t, n) {
    !(function (e) {
      var t = e.$,
        i = n(213),
        r = n(159),
        o = {
          init: function (n) {
            ;(this.model = n),
              (this.$el = t(i)),
              (this._$el = this.$el),
              this.initModelEvent(),
              r.initView(this),
              e.utils.emailHint(this.$el.find('[name=email]'))
          },
          reset: function () {
            ;(this.$el = this._$el),
              r.clearButtonLoading(this.$el.find('.quc-button'))
          },
          initModelEvent: function () {
            var e = this
            this.model
              .on('show', function (t, n) {
                e.show(n && n.wrapper)
              })
              .on('hide', function () {
                e.hide()
              })
          },
          show: function (n) {
            if ((this.reset(), n))
              this.model.trigger('beforeshow', this.$el[0]),
                n.addClass('quc-wrapper quc-page').empty().append(this.$el)
            else {
              var i = (this.panel = this.model.panel = new e.utils.Panel({
                type: 'message'
              }))
              i.setTitle(
                e.getConfig(
                  'setEmail.panelTitle',
                  '\u8bbe\u7f6e\u767b\u5f55\u90ae\u7bb1'
                )
              ),
                i.setContent(this.$el),
                this.model.trigger('beforeshow', this.$el[0]),
                i.show(),
                t(i).on(
                  'close',
                  e.getConfig('setEmail.panelCloseHandler', t.noop)
                )
            }
            this.model.trigger('aftershow', this.$el[0])
          },
          hide: function () {
            this.model.trigger('beforehide', this.$el[0]),
              this.panel && this.panel.hide(),
              this.model.trigger('afterhide', this.$el[0])
          }
        }
      e.ui.setEmail = {
        init: function () {
          o.init.apply(o, arguments)
        }
      }
    })(myQHPass)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-set-email><div class=quc-main><div class="quc-tip quc-tip-absolute"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class="quc-form-item quc-field"><div class=quc-form-item-content><div class=quc-input><input name=email placeholder=\u8bf7\u8f93\u5165\u60a8\u7684\u767b\u5f55\u90ae\u7bb1 autocomplete=off></div></div></div><div class=quc-button-list><input type=submit value=\u63d0\u4ea4 class="quc-button-submit quc-button quc-button-primary"></div></form></div></div>'
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = e.getLogic({
          name: 'setEmail',
          validate: function (t) {
            return (t = t || this.get('email')), e.validate.checkEmail(t)
          },
          run: function (t) {
            var n = this
            n.init().trigger('showLoading'),
              e
                .identify(n)
                .then(function () {
                  return e.activeEmail.prepare(n)
                })
                .always(function () {
                  n.trigger('hideLoading')
                })
                .done(function () {
                  n.trigger('show', { wrapper: t })
                })
          },
          submit: function () {
            var n = this,
              i = t.Deferred(),
              r = n.validate()
            return (
              this.trigger('beforeSubmit'),
              r ? i.reject(r) : i.resolve(),
              i
                .then(function () {
                  return e.getUserInfo()
                })
                .then(function (t) {
                  return e.sync.setEmail(t.crumb, n.get('email'))
                })
                .then(function (i) {
                  n.trigger('next')
                  var r = t.Deferred()
                  return (
                    e.activeEmail(i, function () {
                      r.resolve()
                    }),
                    r.promise()
                  )
                })
                .then(
                  function (e) {
                    n.trigger('hide').trigger('success').resolve(e)
                  },
                  function (e) {
                    n.trigger('invalid', e)
                  }
                )
            )
          }
        })
      e.setEmail = function (e, i) {
        !e || 1 == e.nodeType || e instanceof t || ((i = e), (e = void 0)),
          n.setCallback(i).run(e)
      }
    })(myQHPass)
  },
  function (e, t, n) {
    !(function (e) {
      var t = e.$,
        i = n(216),
        r = n(159),
        o = {
          init: function (e) {
            ;(this.model = e),
              (this.$el = t(i)),
              this.initModelEvent(),
              r.initView(this)
          },
          initModelEvent: function () {
            var e = this
            e.model
              .on('show', function (t, n) {
                e.show(n && n.wrapper)
              })
              .on('hide', function () {
                e.hide()
              })
          },
          show: function (n) {
            if (n)
              this.model.trigger('beforeShow', this.$el[0]),
                t(n).addClass('quc-wrapper quc-page').empty().append(this.$el)
            else {
              this.panel && this.$el.html(t(i).html())
              var r = (this.panel = this.model.panel = new e.utils.Panel({
                type: 'message'
              }))
              r.setTitle(
                e.getConfig(
                  'setSecEmail.panelTitle',
                  '\u8bbe\u7f6e\u5bc6\u4fdd\u90ae\u7bb1'
                )
              ),
                r.setContent(this.$el),
                e.utils.emailHint(this.$el.find('[name=secemail]')),
                this.model.trigger('beforeShow', this.$el[0]),
                r.show(),
                t(r).on(
                  'close',
                  e.getConfig('setSecEmail.panelCloseHandler', t.noop)
                )
            }
            this.model.trigger('afterShow', this.$el[0])
          },
          hide: function () {
            this.model.trigger('beforeHide', this.$el[0]),
              this.panel && this.panel.hide(),
              this.model.trigger('afterHide', this.$el[0])
          }
        }
      e.ui.setSecEmail = {
        init: function () {
          o.init.apply(o, arguments)
        }
      }
    })(myQHPass)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-set-sec-email><div class=quc-main><div class="quc-tip quc-tip-absolute"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class="quc-form-item quc-field"><div class=quc-form-item-content><div class=quc-input><input name=secemail placeholder=\u8bf7\u8f93\u5165\u5bc6\u4fdd\u90ae\u7bb1 autocomplete=off></div></div></div><div class=quc-button-list><input type=submit value=\u63d0\u4ea4 class="quc-button-submit quc-button quc-button-primary"></div></form></div></div>'
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = e.getLogic({
          name: 'setSecEmail',
          validate: function (t) {
            return (t = t || this.get('secemail')), e.validate.checkEmail(t)
          },
          run: function (t) {
            var n = this
            n.init().trigger('showLoading'),
              e
                .identify(n)
                .then(
                .always(function () {
                  n.trigger('hideLoading')
                })
                .done(
          },
          submit: function () {
            var n = this,
              i = t.Deferred(),
              r = n.validate()
            return (
              this.trigger('beforeSubmit'),
              r ? i.reject(r) : i.resolve(),
              i
                .then(function () {
                  return e.getUserInfo()
                })
                .then(
                .then(function (i) {
                  n.trigger('next')
                  var r = t.Deferred()
                  return (
                    e.activeEmail(i, ,
                    r.promise()
                  )
                })
                .then(
                  
                  function (e) {
                    n.trigger('invalid', e)
                  }
                )
            )
          }
        })
      e.setSecEmail = function (e, i) {
        !e || 1 == e.nodeType || e instanceof t || ((i = e), (e = void 0)),
          n.setCallback(i).run(e)
      }
    })(myQHPass)
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
        var i = n(14).getLogger('bindMobile'),
          r = t.$,
          o = n(219),
          a = n(159),
          c = n(105),
          s = {
            init: function (e) {
              ;(this.model = e),
                (this.$el = r(this.getCompiledHtml())),
                this.initModelEvent(),
                this.initSmsToken(),
                a.initView(this),
                a.initMobileStates(this),
                this.initTips()
            },
            reset: function () {
              i.debug('reset ui'),
                this.$el
                  ? this.$el.html(r(this.getCompiledHtml()).html())
                  : (this.$el = r('<div>')),
                a.initMobileStates(this),
                this.initTips()
            },
            getCompiledHtml: function () {
              var n = e.extend(
                { fromSocial: this.model.fromSocial || !1 },
                t.getConfig('signUp'),
                t.getConfig('bindMobile')
              )
              return e.template(o)(n)
            },
            initTips: function () {
              this.$el
                .find('.quc-field .quc-tip')
                .attr('data-default-tip', 
            },
            iePlaceholder: 
            initSmsToken: function () {
              var e,
                n,
                o = this,
                s = 'quc-button-disabled',
                u = t.utils.getTimer('bind_mobile')
              u.on('timer_start', function (e, t) {
                n.addClass(s),
                  n.html(t + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
              }),
                u.on('timer_tick', ,
                u.on('timer_stop', 
              var l = function (t) {
                t.preventDefault()
                var r = e.val(),
                  l = e.data('areaCode'),
                  f = e.data('regExp')
                o.model.set(
                  'mobile',
                  c.normalizeMobileObj({
                    mobileNumber: r,
                    regExp: f,
                    areaCode: l
                  })
                ),
                  o.model.set('captcha', o.$el.find('[name=captcha]').val()),
                  n.hasClass(s) ||
                    (n.html('\u53d1\u9001\u4e2d...'),
                    n.addClass(s),
                    o.model
                      .bindMobileCheck()
                      .then(
                      .then(function (e) {
                        var t = o.$el
                            .find('[name=mobile]')
                            .parents('.quc-field'),
                          n = t.find('.quc-tip')
                        n
                          .removeClass('quc-tip-error')
                          .addClass('quc-tip-success')
                          .html('\u53d1\u9001\u6210\u529f')
                          .show(),
                          t
                            .find('.quc-input')
                            .on('change', function () {
                              n
                                .removeClass('quc-tip-success')
                                .html(n.attr('data-default-tip')),
                                t
                                  .find('.quc-tip-icon')
                                  .removeClass('quc-tip-icon-correct')
                            })
                            .parent()
                            .removeClass('quc-input-bg-incorrect'),
                          t
                            .find('.quc-tip-icon')
                            .removeClass('quc-tip-icon-incorrect')
                            .addClass('quc-tip-icon-correct'),
                          u.start(),
                          a.setFieldStatus(t),
                          o.model.set('token', e.vt),
                          o.model.trigger('dealCaptcha')
                      })
                      .caught(function (e) {
                        if (
                          (i.debug('get validate code fail', e),
                          n.html('\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                          n.removeClass(s),
                          e.errmsg)
                        ) {
                          e.field = o.$el
                            .find('[name=mobile]')
                            .parents('quc-field')
                          var t = e.errdetail && e.errdetail.captchaUrl
                          t && ((e.fromServer = !0), o.model.setCaptchaUrl(t)),
                            o.model.trigger('invalid', e)
                        }
                      }))
              }
              o.model
                .on('show', function () {
                  ;(e = o.$el.find('[name=mobile]')),
                    (n = o.$el.find('.quc-get-token')),
                    n.off('click', l).on('click', l),
                    u.isRunning() && u.resume()
                })
                .on('invalid', function (e, t) {
                  t.fromServer && f()
                })
                .on('dealCaptcha', function () {
                  var e = o.$el.find('[name=captcha]').parents('.quc-field')
                  e.hide(),
                    o.$el.find('[name=captcha]').val(''),
                    o.$el
                      .find('[name=mobile]')
                      .off('change')
                      .on('change', function () {
                        e.show(),
                          o.$el.find('.quc-captcha-change').trigger('click'),
                          o.model.set('token', null),
                          o.model.trigger('timer_stop')
                      })
                })
              var f = function () {
                  o.model.getCaptchaUrl().then(function (e) {
                    var t = o.$el.find('[name=captcha]').parents('.quc-field')
                    t.find('.quc-captcha-img').attr('src', e),
                      t.find('[name=captcha]').val(''),
                      t
                        .find('.quc-tip')
                        .removeClass('quc-tip-error')
                        .html(function () {
                          return r(this).attr('data-default-tip')
                        }),
                      t
                        .find('.quc-tip-icon')
                        .removeClass('quc-tip-icon-incorrect'),
                      t.show()
                  })
                },
                p = function () {
                  var e = o.$el.find('[name=captcha]').parents('.quc-field')
                  e.find('.quc-captcha-change')
                    .on('mousedown', function (e) {
                      e.preventDefault()
                    })
                    .on('click', function (t) {
                      t.preventDefault(), f(), e.find('[name=captcha]').focus()
                    })
                }
              p()
            },
            initModelEvent: function () {
              var e = this
              e.model
                .on('show', 
                .on('hide', 
            },
            show: function (e) {
              var n = this
              if ((i.debug('show panel'), e))
                n.model.trigger('beforeShow', n.$el[0]),
                  r(e).addClass('quc-wrapper quc-page').empty().append(n.$el)
              else {
                n.panel && n.reset()
                var o = (n.panel = this.model.panel = new t.utils.Panel({
                  type: 'message'
                }))
                o.setTitle(
                  t.getConfig(
                    'bindMobile.panelTitle',
                    '\u7ed1\u5b9a\u624b\u673a\u53f7'
                  )
                ),
                  o.setContent(this.$el),
                  n.model.trigger('beforeShow', n.$el[0]),
                  o.show(),
                  r(o).on(
                    'close',
                    t.getConfig('bindMobile.panelCloseHandler', r.noop)
                  )
              }
              n.model.trigger('afterShow', this.$el[0])
            }
          }
        t.ui.bindMobile = {
          init:         }
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-bind-mobile><div class=quc-main><div class="quc-tip quc-tip-absolute"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class="quc-form-item quc-field quc-field-has-option"><div class=quc-form-item-content><div class="quc-input <% if (showMoBileZone) { %>quc-input-has-prefix quc-input-has-zone<% } %>"> <% if (showMoBileZone) { %> <div class="quc-input-prefix quc-input-zone"><span class=quc-activeState></span><i class="quc-state-arrow quc-icon quc-icon-arrow_down">&#xe69e;</i><ul class="quc-mobile-Statelist quc-option-wrapper"></ul></div> <% } %> <input name=mobile placeholder=\u8bf7\u8f93\u5165\u624b\u673a\u53f7></div></div></div><div class="quc-form-item quc-field quc-field-captcha" style="display: none"><label class=quc-label></label><div class="quc-form-item-content quc-form-item-img-captcha"><div class=quc-input><input placeholder=\u9a8c\u8bc1\u7801 name=captcha maxlength=7 autocomplete=new-password></div><img class="quc-captcha-change quc-captcha-img"> <span class="quc-captcha-change quc-link">\u6362\u4e00\u5f20</span></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-append"><input name=smscode placeholder=\u77ed\u4fe1\u9a8c\u8bc1\u7801><div class=quc-input-append><span class="quc-link quc-get-token">\u83b7\u53d6\u9a8c\u8bc1\u7801</span></div></div></div></div> <% if (fromSocial) { %><div class="quc-link create-account-btn" style="margin: -10px 0 10px 0; float: right">\u8df3\u8fc7</div><% } %> <div class=quc-button-list><input type=submit value="<%= fromSocial ? \'\u540c\u610f\u5e76\u7ed1\u5b9a\' : \'\u63d0\u4ea4\' %>" class="quc-button-submit quc-button quc-button-primary"> <% if (fromSocial) { %> <div style="font-size: 12px; margin-top: 10px">\u9605\u8bfb\u5e76\u540c\u610f<a href=<%= protocolUrl %> target=_blank class=quc-link>\u300a<%= protocolText %>\u300b</a>\u548c<a href=<%= privacyUrl %> target=_blank class=quc-link>\u300a<%= privacyText %>\u300b</a></div> <% } %> </div></form></div></div>'
  },
  function (e, t, n) {
    ;(function (e, t) {
      !(function (i) {
        var r = n(164),
          o = n(14).getLogger('bindMobile'),
          a = n(105),
          c = i.$,
          s = {},
          u = i.getLogic({
            name: 'bindMobile',
            validate: function (e, t, n) {
              o.debug('validate')
              var r,
                u = i.validate
              if (
                (('boolean' != typeof t && void 0 !== t) || (t = this.get(e)),
                /mobile/i.test(e) &&
                  ((t = a.normalizeMobileObj(t)), t && t.mobileNumber))
              )
                return !!n && c.Deferred().resolve()
              switch (e.toLowerCase()) {
                case 'mobile':
                  r = u.checkMobile(t, !0)
                  break
                case 'smscode':
                  r = u.checkSmsToken(t)
              }
              if (n) {
                var l,
                  f = i.sync
                if (r) (l = c.Deferred()), l.reject(r)
                else if ('mobile' == e) {
                  var p = t.mobileNumber,
                    d = t.areaCode,
                    h = s[p]
                  if (h) return h
                  ;(l = f.checkMobileNumberExist(p, d)), (s[p] = l.promise())
                } else (l = c.Deferred()), l.resolve()
                return l.promise()
              }
              return r
            },
            run: function (e) {
              o.debug('run')
              var t = this
              t.init(),
                this.fromSocial
                  ? t.trigger('show', { wrapper: e })
                  : (t.trigger('showLoading'),
                    i
                      .identify(t)
                      .then(
                        
                        function (e) {
                          if ('1552' == e.errno)
                            return (
                              o.debug('shadow account fill profile first'),
                              i.fillProfile(
                            )
                        }
                      )
                      .always()
            },
            prepareMobileState: 
            submit: function () {
              var e = this,
                t = c.Deferred()
              o.debug('logic submit'), this.trigger('beforeSubmit')
              var n = e.validate('mobile') || e.validate('smscode')
              return (
                n ? t.reject(n) : t.resolve(),
                (t = u.fromSocial
                  ? t.then(function () {
                      return u.fromWechatMP
                        ? i.sync.mpAuthBindMobile({
                            mobile: a.getMobileStr(e.get('mobile')),
                            smscode: e.get('smscode')
                          })
                        : i.sync.authBindMobile(
                            e.get('mobile'),
                            e.get('smscode')
                          )
                    })
                  : t
                      .then(
                      .then(function (t) {
                        return i.sync.bindMobileNew(
                          t.crumb,
                          e.get('mobile'),
                          e.get('smscode'),
                          e.get('canForceBind')
                        )
                      })),
                t
                  .done(function () {
                    i.isI360() ||
                      i.$message({
                        title: '\u7ed1\u5b9a\u624b\u673a\u53f7\u6210\u529f',
                        content:
                          '\u7ed1\u5b9a\u624b\u673a\u53f7\u6210\u529f, \u60a8\u4ee5\u540e\u53ef\u4ee5\u4f7f\u7528\u8be5\u624b\u673a\u53f7\u8fdb\u884c\u767b\u5f55\u5566',
                        status: 'success'
                      }),
                      e.trigger('hide').trigger('success').resolve()
                  })
                  .fail(
              )
            },
            bindMobileCheck: function () {
              if (u.fromSocial)
                return e.resolve({ condition: r.SMS_CONDITION_ALWAYS })
              var t = this,
                n = t.get('mobile')
              o.debug('bind mobile check', n)
              var a = t.validate('mobile')
              if (a) return e.reject(a)
              var c = n.areaCode + n.mobileNumber
              return (
                t.set('canForceBind', !1),
                i.tool.checkBindMobile(c).then(function (e) {
                  return 0 == e.condition && t.set('canForceBind', !0), e
                })
              )
            },
            sendSmsToken: function (e) {
              o.debug('send sms token', e)
              var n = this,
                s = n.validate('mobile')
              return s
                ? c.Deferred().reject(s).promise()
                : u.fromSocial
                ? i.sync.sendSmsCodeNew({
                    condition: t.get(e, 'condition'),
                    account: a.getMobileStr(n.get('mobile')),
                    captcha: n.get('captcha'),
                    vt: n.get('token'),
                    sms_scene: r.SMS_SCENE_OAUTH_BIND_MOBILE
                  })
                : i.getUserInfo().then(function (o) {
                    return i.sync.sendSmsCodeNew({
                      condition: t.get(e, 'condition'),
                      account: a.getMobileStr(n.get('mobile')),
                      captcha: n.get('captcha'),
                      vt: n.get('token'),
                      sms_scene: r.SMS_SCENE_BIND_MOBILE
                    })
                  })
            }
          })
        ;(i.bindMobile = function (e, t) {
          !e || 1 == e.nodeType || e instanceof c || ((t = e), (e = void 0)),
            u.setCallback(t).run(e)
        }),
          (i.bindMobileFromSocial = function (e, t, n) {
            !e || 1 == e.nodeType || e instanceof c || ((t = e), (e = void 0)),
              o.debug('from social'),
              (u.fromSocial = !0),
              (u.fromWechatMP = n),
              u.setCallback(t).run(e)
          })
      })(myQHPass)
    }.call(t, n(41), n(2)))
  },
  function (e, t, n) {
    !(function (e) {
      var t = e.$,
        i = n(159),
        r = n(222),
        o = {
          init: function (e) {
            ;(this.model = e),
              this.initModelEvent(),
              this.initCaptcha(),
              this.initSmsToken()
          },
          initCaptcha: function () {
            var e,
              n = this,
              i = function () {
                n.model.getCaptchaUrl().then(function (n) {
                  e.find('.quc-captcha-img').attr('src', n),
                    e.find('[name=captcha]').val(''),
                    e
                      .find('.quc-tip')
                      .removeClass('quc-tip-error')
                      .html(,
                    e
                      .find('.quc-tip-icon')
                      .removeClass('quc-tip-icon-incorrect')
                })
              },
              r = function () {
                i(),
                  e
                    .find('.quc-captcha-change')
                    .on('mousedown', 
                    .on('click', function (t) {
                      t.preventDefault(), i(), e.find('[name=captcha]').focus()
                    })
              }
            this.model
              .on('show', function () {
                ;(e = n.$el.find('.quc-field-captcha')), r()
              })
              .on('invalid', 
              .on('dealCaptcha', function () {
                var e = n.$el.find('[name=captcha]').parents('.quc-field')
                e.hide(),
                  n.$el.find('[name=captcha]').val(''),
                  n.$el
                    .find('[name=mobile]')
                    .off('change')
                    .on('change', function () {
                      e.show(),
                        n.$el.find('.quc-captcha-change').trigger('click'),
                        n.model.set('token', null),
                        n.model.trigger('timer_stop')
                    })
              })
          },
          initSmsToken: function () {
            var t,
              n,
              i,
              r,
              o = this,
              a = 'quc-button-disabled',
              c = e.utils.getTimer('sign_up')
            c.on('timer_start', function (e, t) {
              n.addClass(a), n.html(t + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
            }),
              c.on('timer_tick', function (e, t) {
                n.html(t + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
              }),
              c.on('timer_stop', function () {
                n.html('\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                  n.removeClass(a)
              }),
              o.model.on('timer_stop', function () {
                c.stop()
              })
            var s = function (e) {
              e.preventDefault()
              var s = n.siblings('.quc-tip-icon')
              if (!n.hasClass(a)) {
                var u = t.val(),
                  l = t.data('areaCode'),
                  f = t.data('regExp')
                o.model.set('mobile', {
                  mobileNumber: u,
                  regExp: f,
                  areaCode: l
                }),
                  o.model.set('captcha', r.val()),
                  n.html('\u53d1\u9001\u4e2d...'),
                  n.addClass(a),
                  s.hide(),
                  o.model.trigger('afterShow.changeType'),
                  o.model
                    .sendSmsToken()
                    .done(function (e) {
                      var t = i.find('.quc-tip'),
                        n = i.find('.quc-tip-icon'),
                        r = i.find('.quc-input-bg')
                      t
                        .addClass('quc-tip-success')
                        .html('\u53d1\u9001\u6210\u529f')
                        .show(),
                        r.removeClass('quc-input-bg-incorrect'),
                        n
                          .removeClass('quc-tip-icon-incorrect')
                          .addClass('quc-tip-icon-correct'),
                        i.find('.quc-input').one('change', function () {
                          t.removeClass('quc-tip-success').html(
                            t.attr('data-default-tip')
                          )
                        }),
                        s.show(),
                        c.start(),
                        o.model.set('token', e.vt),
                        o.model.trigger('dealCaptcha')
                    })
                    .fail(function (e) {
                      s.show(),
                        n.html('\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                        n.removeClass(a),
                        (e.type = 'mobile')
                      var t = e.errdetail && e.errdetail.captchaUrl
                      t &&
                        ((e.fromServer = !0),
                        o.model.setCaptchaUrl(t),
                        o.$el
                          .find('.quc-field-captcha .quc-tip-icon')
                          .removeClass('quc-tip-icon-correct')),
                        o.model.trigger('invalid', e)
                    })
              }
            }
            this.model.on('show', function () {
              ;(t = o.$el.find('[name=mobile]')),
                (r = o.$el.find('[name=captcha]')),
                (n = o.$el.find('.quc-get-token')),
                (i = n.parents('.quc-field')),
                n.off('click', s).on('click', s),
                c.isRunning() && c.resume()
            })
          },
          setElement: function () {
            var n = this
            n.$el && n.$el.remove(), (n.$el = t(r))
            var i = n.model.isFillProfileByMobile()
            i &&
              (n.$el
                .find('[name=mobile], [name=smscode]')
                .parents('.quc-field')
                .show(),
              n.$el.find('[name=userName]').parents('.quc-field').hide()),
              n.model.isShowPasswordAgain() ||
                n.$el.find('.quc-field-password-again').remove(),
              n.$el
                .find(':text,:password')
                .focus(function () {
                  var e = t(this).parent(),
                    i = e.siblings('.quc-tip'),
                    r = n.$el.find('.quc-global-error .quc-tip')
                  r.hide(),
                    e.addClass('quc-input-bg-focus'),
                    i
                      .removeClass('quc-tip-success')
                      .html(i.attr('data-default-tip'))
                })
                .blur(function () {
                  var i = t(this),
                    r = i.parents('.quc-field'),
                    o = r.siblings('.quc-field-password-again'),
                    a = r.siblings('.quc-field-password')
                  i.parent().removeClass('quc-input-bg-focus'),
                    n.validate(r),
                    r.hasClass('quc-field-password') &&
                      e.utils.isExisted(o) &&
                      n.validate(o),
                    r.hasClass('quc-field-password-again') &&
                      e.utils.isExisted(a) &&
                      n.validate(a)
                }),
              n.$el.find('.quc-go-signIn').on('click', function () {
                n.model.signin()
              }),
              this.$el
                .find('.quc-field .quc-tip')
                .attr('data-default-tip', function () {
                  return t(this).html()
                })
          },
          validate: function (e) {
            var t = this,
              n = e.find('.quc-input input'),
              r = n.attr('data-name') || n.attr('name'),
              o = n.data('areaCode'),
              a = n.data('regExp'),
              c =
                'mobile' == r
                  ? { mobileNumber: n.val(), regExp: a, areaCode: o }
                  : n.val()
            0 == c.length ||
              ('mobile' == r && 0 == n.val().length) ||
              (n.trigger('quc-validate'),
              i.setFieldStatus(e),
              t.model
                .validate(r, c, !0)
                .done(function () {
                  i.setFieldStatus(e)
                })
                .fail(function (n) {
                  ;(n.field = e), t.model.trigger('invalid', n)
                }))
          },
          initModelEvent: function () {
            var e = this
            e.model
              .on('show', function (t, n) {
                e.show(n && n.wrapper)
              })
              .on('hide', function () {
                e.hide()
              })
          },
          show: function (n) {
            if (
              (this.setElement(), i.initView(this), i.initMobileStates(this), n)
            )
              this.model.trigger('beforeShow', this.$el[0]),
                t(n).addClass('quc-wrapper quc-page').empty().append(this.$el)
            else {
              var r = (this.panel = this.model.panel = new e.utils.Panel({
                type: 'message'
              }))
              r.setTitle(
                e.getConfig(
                  'fillProfile.panelTitle',
                  '\u5b8c\u5584\u5e10\u53f7\u8d44\u6599'
                )
              ),
                r.setContent(this.$el),
                this.model.trigger('beforeShow', this.$el[0]),
                r.show(),
                t(r).on(
                  'close',
                  e.getConfig('fillProfile.panelCloseHandler', t.noop)
                )
            }
            this.model.trigger('afterShow', this.$el[0])
          },
          hide: function () {
            this.model.trigger('beforeHide', this.$el[0]),
              this.panel && this.panel.hide(),
              this.model.trigger('afterHide', this.$el[0])
          }
        }
      e.ui.fillProfile = {
        init: function () {
          o.init.apply(o, arguments)
        }
      }
    })(myQHPass)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-fill-profile><div class=quc-main><div class="quc-tip quc-tip-absolute"></div><div class=quc-alternatives></div><form class=quc-form autocomplete=off><div class="quc-form-item quc-field quc-field-has-option"><div class=quc-form-item-content><div class="quc-input quc-input-has-prefix quc-input-has-zone"><div class="quc-input-prefix quc-input-zone"><span class=quc-activeState></span><i class="quc-state-arrow quc-icon quc-icon-arrow_down">&#xe69e;</i><ul class="quc-mobile-Statelist quc-option-wrapper"></ul></div><input name=mobile placeholder=\u8bf7\u8f93\u5165\u624b\u673a\u53f7 autocomplete=new-password></div></div></div><div class="quc-form-item quc-field quc-field-captcha"><label class=quc-label></label><div class="quc-form-item-content quc-form-item-img-captcha"><div class=quc-input><input placeholder=\u9a8c\u8bc1\u7801 name=captcha maxlength=7 autocomplete=new-password></div><img class="quc-captcha-change quc-captcha-img"> <span class="quc-captcha-change quc-link">\u6362\u4e00\u5f20</span></div></div><div class="quc-form-item quc-field" style="display: none"><label class=quc-label></label><div class=quc-form-item-content><div class="quc-input quc-input-has-append"><input name=smscode placeholder=\u77ed\u4fe1\u9a8c\u8bc1\u7801><div class=quc-input-append><span class="quc-link quc-get-token">\u83b7\u53d6\u9a8c\u8bc1\u7801</span></div></div></div></div><div class="quc-form-item quc-field"><label class=quc-label></label><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder=\u5bc6\u7801\uff088-20\u4e2a\u5b57\u7b26\uff09 autocomplete=new-password></div></div></div><div class=quc-button-list><input type=submit value=\u6ce8\u518c class="quc-button-submit quc-button quc-button-primary"></div></form></div></div>'
  },
  function (e, t, n) {
    !(function (e) {
      var t = e.$,
        i = n(164),
        r = {},
        o = e.getLogic({
          name: 'fillProfile',
          validate: function (n, i, o) {
            var a,
              c = e.validate
            switch (
              (('boolean' != typeof i && void 0 !== i) || (i = this.get(n)), n)
            ) {
              case 'userName':
                this.set('userName', i), (a = c.checkUsername(i))
                break
              case 'password':
                this.set('password', i)
                var s = c.checkPasswordFrontendSync({
                  password: i,
                  userName: this.get('userName')
                })
                a = s.reason
                break
              case 'rePassword':
                a = c.checkPasswordConfirm(this.get('password'), i)
                break
              case 'mobile':
                a = c.checkMobile(i, !0)
                break
              case 'smscode':
                a = c.checkSmsToken(i)
                break
              case 'captcha':
                a = c.checkCaptcha(i)
            }
            if (o) {
              var u,
                l = e.sync,
                f = t.Deferred()
              if (a) (f = t.Deferred()), f.reject(a)
              else if ('userName' == n) {
                if ((u = r[i])) return u
                ;(f = l.checkUsernameExist(i)), (r[i] = f.promise())
              } else if ('mobile' == n) {
                var p = i.mobileNumber,
                  d = i.areaCode
                if ((u = r[p])) return u
                ;(f = l.checkMobileNumberExist(p, d, 'fillProfile')),
                  (r[p] = f.promise())
              } else (f = t.Deferred()), f.resolve()
              return f.promise()
            }
            return a
          },
          sendSmsToken: function () {
            var n = this.get('mobile'),
              r = this.get('captcha'),
              o = this.get('token'),
              a =
                this.validate('mobile', n) ||
                (!o && this.validate('captcha', r))
            return a
              ? t.Deferred().reject(a).promise()
              : ((n = n.areaCode + n.mobileNumber),
                e.getUserInfo().then(function (t) {
                  return e.sync.sendSmsCodeNew({
                    condition: i.SMS_CONDITION_NOT_EXIST,
                    account: n,
                    crumb: t.crumb,
                    sms_scene: i.SMS_SCENE_OAUTH_BIND_MOBILE,
                    captcha: r,
                    vt: o
                  })
                }))
          },
          prepareMobileState: function () {
            return e.sync.getMobileState()
          },
          prepareCaptcha: function () {
            var n = this,
              i = '',
              r = this.isFillProfileByMobile()
            return (
              (i = r ? 'strictreg' : ''),
              e.sync.getCaptchaUrl(i).then(
                
                              )
            )
          },
          run: function (e) {
            var t = this
            t.init().trigger('showLoading'),
              t.prepareCaptcha().done(function () {
                t.trigger('hideLoading').trigger('show', { wrapper: e })
              })
          },
          submit: function () {
            var n,
              i = this,
              r = [],
              o = i.isFillProfileByMobile(),
              a = i.get('mobile'),
              c = i.get('smscode'),
              s = i.get('password'),
              u = i.get('captcha'),
              l = i.get('userName')
            if ((this.trigger('beforeSubmit'), o)) {
              var f = i.get('isNeedCheckCaptcha', !1)
              ;(r = ['mobile', 'smscode', 'password']), f && r.push('captcha')
            } else r = ['password', 'captcha']
            i.isShowPasswordAgain() && r.push('rePassword'),
              t.each(r, function (e, t) {
                var r = i.validate(t)
                r && i.trigger('invalid', r), (n = n || r)
              }),
              !n &&
                e
                  .getUserInfo()
                  .then(function (t) {
                    return o
                      ? ((a = a.areaCode + a.mobileNumber),
                        e.sync.perfectMobile(t.crumb, a, s, c))
                      : e.sync.fillProfile(
                          t.crumb,
                          l,
                          s,
                          i.get('rePassword', void 0),
                          u
                        )
                  })
                  .done(function () {
                    i.trigger('hide').trigger('success').resolve()
                  })
                  .fail(function (e) {
                    e.fromServer = !0
                    var t = e.errdetail && e.errdetail.captchaUrl
                    t && i.setCaptchaUrl(t), i.trigger('invalid', e)
                  })
          },
          signin: function () {
            var t = this.getCallback()
            e.signIn
              ? (this.trigger('hide'), e.signIn(t))
              : (location.href =
                  '//i.360.cn/reg/?src=' +
                  e.getConfig('src') +
                  '&destUrl=' +
                  encodeURIComponent('string' == typeof t ? t : location.href))
          },
          isShowPasswordAgain: 
          isFillProfileByMobile: function () {
            var t = e.getConfig('fillProfile.type'),
              n = 'mobile' === t
            return n
          }
        })
      e.fillProfile = function (e, n) {
        !e || 1 == e.nodeType || e instanceof t || ((n = e), (e = void 0)),
          o.setCallback(n).run(e)
      }
    })(myQHPass)
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
        var i = t.$,
          r = n(225),
          o = n(159),
          a = {
            init: function (e) {
              ;(this.model = e),
                this.initModelEvent(),
                this.initMethods(),
                this.initToken()
            },
            selElement: function () {
              this.$el && this.$el.remove(),
                (this.$el = i(r)),
                this.initElementEvent()
            },
            initToken: function () {
              var e,
                n = this,
                i = t.utils.getTimer('identify'),
                r = 'quc-button-disabled'
              i.on('timer_start', function (t, n) {
                e.addClass(r),
                  e.html(n + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
              }),
                i.on('timer_tick', function (t, n) {
                  e.html(n + '\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')
                }),
                i.on('timer_stop', function () {
                  e.html('\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                    e.removeClass(r)
                })
              var o = function (t) {
                t.preventDefault(),
                  e.hasClass(r) ||
                    (e.html('\u53d1\u9001\u4e2d...'),
                    e.addClass(r),
                    n.model
                      .sendToken()
                      .done(function () {
                        i.start(),
                          n.$el
                            .find('.quc-tip-wrapper .quc-tip')
                            .removeClass('quc-tip-error')
                            .addClass('quc-tip-success')
                            .html(
                              '\u53d1\u9001\u6210\u529f\uff0c\u8bf7\u67e5\u6536\uff01'
                            )
                      })
                      .fail(function (t) {
                        e.html('\u83b7\u53d6\u9a8c\u8bc1\u7801'),
                          e.removeClass(r),
                          n.model.trigger('invalid', t)
                      }))
              }
              n.model.on('show', function () {
                ;(e = n.$el.find('.quc-get-token')),
                  e.on('click', o),
                  i.isRunning() && i.resume()
              })
            },
            initElementEvent: function () {
              var e = this
              this.$el.find('.quc-select-method').on('change', function () {
                var t = i(this).val()
                'secMobile' == t
                  ? e.$el
                      .find('.quc-sec-help')
                      .children('a')
                      .attr(
                        'href',
                        '//i.360.cn/findpwd/customerhelper#mobiledisabled'
                      )
                  : e.$el
                      .find('.quc-sec-help')
                      .children('a')
                      .attr(
                        'href',
                        '//i.360.cn/findpwd/customerhelper#recieveemailcode'
                      )
              })
            },
            initMethods: function () {
              var t = this
              this.model.on('show', function () {
                var n = t.model.getMethods(),
                  r = e.map(e.keys(n), ,
                  a = t.$el.find('[name=way]').parents('.quc-select'),
                  c = a.find('.quc-option-wrapper')
                e.each(r, function (e) {
                  var t = e.name
                  'pwd' !== e.way &&
                    (t += ' <span class="quc-primary">(' + e.value + ')</span>')
                  var n = i('<li class="quc-option"></li>')
                    .attr({ way: e.way })
                    .html(t)
                  c.append(n)
                }),
                  o.bindGlobalEvent(),
                  a.on('click', '.quc-option', function () {
                    var e = i(this),
                      r = e.attr('way'),
                      o = n[r]
                    o &&
                      (t.changeMethod(r, o.captchaUrl),
                      a.find('.quc-input-inner-custom').html(e.html()))
                  }),
                  a.find('.quc-option').eq(0).trigger('click')
              })
            },
            changeMethod: function (e, t) {
              var n = this.$el.find('.quc-token-tip'),
                i = this.$el.find('.quc-field-captcha'),
                r = this,
                o = function (e) {
                  r.model.getCaptchaUrl('login').then(function (t) {
                    i.find('.quc-captcha-img').attr('src', t)
                    var n = i.find('[name=captcha]').val('')
                    i.show(), e && n.focus()
                  })
                }
              'pwd' == e
                ? (r.$el
                    .find('[name=password]')
                    .parents('.quc-form-item')
                    .show(),
                  t && (this.model.setCaptchaUrl(t), o()),
                  this.$el.find('.quc-captcha-change').click(function (e) {
                    e.preventDefault(), o()
                  }))
                : (r.$el.find('[name=token]').parents('.quc-form-item').show(),
                  'secMobile' == e
                    ? n
                        .attr(
                          'href',
                          '//i.360.cn/findpwd/customerhelper#mobiledisabled'
                        )
                        .html(
                          '\u6536\u4e0d\u5230\u77ed\u4fe1\u9a8c\u8bc1\u7801\u600e\u4e48\u529e\uff1f'
                        )
                    : n
                        .attr(
                          'href',
                          '//i.360.cn/findpwd/customerhelper#recieveemailcode'
                        )
                        .html(
                          '\u6536\u4e0d\u5230\u90ae\u4ef6\u9a8c\u8bc1\u7801\u600e\u4e48\u529e\uff1f'
                        )),
                this.model.set('method', e),
                this.model.on('invalid', function (t, n) {
                  n.fromServer && 'pwd' === e && o()
                })
            },
            initModelEvent: function () {
              var e = this
              e.model
                .on('show', function (t, n) {
                  e.show(n)
                })
                .on('hide', function () {
                  e.hide()
                })
            },
            show: function (e) {
              if (
                ((this.$orgForm = i(e)),
                this.selElement(),
                o.initView(this),
                this.model.trigger('beforeShow', this.$el[0]),
                this.$orgForm.parents('.quc-panel').length > 0)
              )
                this.$orgForm.hide().before(this.$el)
              else {
                var n = (this.panel = this.model.panel = new t.utils.Panel({
                  type: 'message'
                }))
                n.setTitle(
                  t.getConfig(
                    'identify.panelTitle',
                    '\u9700\u8981\u6821\u9a8c\u60a8\u7684\u8eab\u4efd'
                  )
                )
                  .setContent(this.$el)
                  .show()
              }
              this.$orgForm.triggerHandler('QucDOMUpdated'),
                this.model.trigger('afterShow', this.$el[0])
            },
            hide: function () {
              this.model.trigger('beforeHide', this.$el[0]),
                this.panel
                  ? this.panel.hide()
                  : (this.$el.remove(), this.$orgForm.show()),
                this.$orgForm.triggerHandler('QucDOMUpdated'),
                this.model.trigger('afterHide', this.$el[0])
            }
          }
        t.ui.identify = {
          init: function () {
            a.init.apply(a, arguments)
          }
        }
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-identify><div class=quc-main><div class=quc-description>\u4e3a\u4e86\u4fdd\u62a4\u60a8\u7684\u5e10\u53f7\u5b89\u5168\uff0c\u64cd\u4f5c\u524d\u8bf7\u60a8\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1</div><div class=quc-tip></div><form class=quc-form autocomplete=off><div class=quc-identify-title><b>\u9a8c\u8bc1\u65b9\u5f0f</b></div><div class="quc-form-item quc-field quc-field-has-option"><div class=quc-form-item-content><div class=quc-select><div class="quc-input quc-input-has-suffix"><div class=quc-input-suffix><i class="quc-state-arrow quc-icon quc-icon-arrow_down">&#xe69e;</i></div><div class=quc-input-inner-custom></div><input readonly name=way><ul class=quc-option-wrapper style="display: none"></ul></div></div></div></div><div class="quc-form-item quc-field" style="display: none"><div class=quc-form-item-content><div class=quc-input><input name=token placeholder=\u9a8c\u8bc1\u7801 autocomplete=new-password><div class=quc-input-append><span class="quc-link quc-get-token">\u83b7\u53d6\u9a8c\u8bc1\u7801</span></div></div></div></div><div class="quc-form-item quc-field" style="display: none"><div class=quc-form-item-content><div class=quc-input><input type=password name=password placeholder=\u5bc6\u7801 autocomplete=new-password></div></div></div><div class="quc-form-item quc-field quc-field-captcha" style="display: none"><label class=quc-label></label><div class="quc-form-item-content quc-form-item-img-captcha"><div class=quc-input><input placeholder=\u9a8c\u8bc1\u7801 name=captcha maxlength=7 autocomplete=new-password></div><img class="quc-captcha-change quc-captcha-img"> <span class="quc-captcha-change quc-link">\u6362\u4e00\u5f20</span></div></div><div class="quc-form-tips quc-clearfix"><a class="quc-token-tip quc-right quc-link" href=//i.360.cn/complaint target=_blank>\u9a8c\u8bc1\u65b9\u5f0f\u90fd\u4e0d\u80fd\u7528\u4e86\uff1f</a></div><div class=quc-button-list><input type=submit value=\u63d0\u4ea4 class="quc-button-submit quc-button quc-button-primary"></div></form></div></div>'
  },
  function (e, t, n) {
    ;(function (e) {
      !(function (t) {
        var i,
          r,
          o = n(14).getLogger('identify'),
          a = n(164),
          c = t.$,
          s = {},
          u = t.getLogic({
            name: 'identify',
            validate: function (e, n) {
              var i,
                r = t.validate
              switch (((n = n || this.get(e)), e.toLowerCase())) {
                case 'token':
                  i = r.checkSmsToken(n)
                  break
                case 'password':
                  ;(i = r.checkPassword(n)),
                    i &&
                      (i = t.utils.isSameError(i, t.ERROR.PASSWORD_EMPTY)
                        ? i
                        : t.ERROR.PASSWORD_WRONG)
                  break
                case 'captcha':
                  i = r.checkCaptcha(n)
              }
              return i
            },
            getMethods: 
            prepareMethods: function (e) {
              return t
                .getUserInfo()
                .then(
                .done(function (t) {
                  s[e] = t.ways
                })
            },
            sendToken: function (e) {
              var n = this
              return (
                (e = e || this.get('method')),
                t
                  .getUserInfo()
                  .then(function (n) {
                    return 'secMobile' == e
                      ? t.sync.sendSmsCodeNew({
                          condition: a.SMS_CONDITION_EXIST,
                          crumb: n.crumb,
                          sms_scene: r,
                          m: 'sendSmsCode'
                        })
                      : t.sync.sendEmailToken(n.crumb, e)
                  })
                  .fail(function (e) {
                    n.trigger('invalid', e)
                  })
              )
            },
            run: function (t, n) {
              o.debug('run')
              var a = this
              a.init(), (i = t.sensop), (r = t.scene)
              var c = a.getMethods(),
                s = e.keys(c)
              o.debug('identify ways', s),
                'bindMobile' === i && 1 === s.length && 'pwd' === s[0]
                  ? o.debug('no need identify')
                  : (o.debug('need identify'), a.trigger('show', n))
            },
            submit: function () {
              o.debug('submit')
              var e = this,
                n = e.get('token'),
                r = e.get('method'),
                a = e.get('password'),
                s = e.get('captcha'),
                u = c.Deferred()
              this.trigger('beforeSubmit')
              var l =
                'pwd' == r
                  ? e.validate('password') || e.validate('captcha')
                  : e.validate('token')
              return (
                l ? u.reject(l) : u.resolve(),
                u
                  .then(function () {
                    return t.getUserInfo()
                  })
                  .then(function (e) {
                    var o = 'pwd' == r ? a : n
                    return t.sync.identify(e.crumb, i, r, o, s)
                  })
                  .done(
                  .fail(function (t) {
                    o.debug('fail')
                    var n = t.errdetail && t.errdetail.captchaUrl
                    n && e.setCaptchaUrl(n),
                      (t.fromServer = !0),
                      e.trigger('invalid', t)
                  })
              )
            }
          }),
          l = {
            bindMobile: {
              sensop: 'bindMobile',
              scene: a.SMS_SCENE_BIND_MOBILE
            },
            modifyMobile: {
              sensop: 'modifyMobile',
              scene: a.SMS_SCENE_MODIFY_MOBILE
            },
            delBindMobile: {
              sensop: 'delMobile',
              scene: a.SMS_SCENE_UNBIND_MOBILE
            },
            setEmail: { sensop: 'setLoginEmail', scene: a.SMS_SCENE_SET_EMAIL },
            modifyEmail: {
              sensop: 'modifyLoginEmail',
              scene: a.SMS_SCENE_MODIFY_EMAIL
            },
            identifyEmail: {
              sensop: 'verifyLoginEmail',
              scene: a.SMS_SCENE_OTHER
            },
            setSecEmail: {
              sensop: 'setSecEmail',
              scene: a.SMS_SCENE_SET_SECEMAIL
            },
            modifySecEmail: {
              sensop: 'modifySecEmail',
              scene: a.SMS_SCENE_MODIFY_SECEMAIL
            },
            modifyPassword: {
              sensop: 'modifyPwd',
              scene: a.SMS_SCENE_MODIFY_PASS
            },
            setCommonArea: { sensop: 'setComArea', scene: a.SMS_SCENE_OTHER },
            closeTextLogin: {
              sensop: 'closeCodeLogin',
              scene: a.SMS_SCENE_OTHER
            },
            secwarnopen: { sensop: 'secwarnopen', scene: a.SMS_SCENE_OTHER },
            secwarnclose: { sensop: 'secwarnclose', scene: a.SMS_SCENE_OTHER },
            cancelAccount: {
              sensop: 'cancelAccount',
              scene: a.SMS_SCENE_CANCEL_ACCOUNT
            }
          }
        t.identify = function (e) {
          o.debug('should identify')
          var n,
            i = l[e.name]
          return (
            e.one('beforeShow', function (e, t) {
              ;(n = t), u.run(i, t)
            }),
            e.on('invalid', function (e, r) {
              t.utils.isSameError(r, t.ERROR.IDENTIFY_EXPIRE) && u.run(i, n)
            }),
            e.on('reset', function () {
              u.run(i, n)
            }),
            u.prepareMethods(i.sensop)
          )
        }
      })(myQHPass)
    }.call(t, n(2)))
  },
  function (e, t, n) {
    !(function (e) {
      var t = e.$,
        i = n(228),
        r = {
          init: function (e) {
            ;(this.model = e), this.initModelEvent()
          },
          initModelEvent: function () {
            var e = this
            e.model
              .on('show', function (t, n) {
                e.show(n)
              })
              .on('hide', function () {
                e.hide()
              })
              .on('resendSuccess', function () {
                e.$el
                  .find('.quc-resend-result')
                  .removeClass('quc-resending quc-tip-error')
                  .html('\u53d1\u9001\u6210\u529f\uff01')
                  .show()
              })
              .on('resendFail', function (t, n) {
                e.$el
                  .find('.quc-resend-result')
                  .removeClass('quc-resending')
                  .addClass('quc-tip-error')
                  .html(n.errmsg)
                  .show()
              })
          },
          selElement: function () {
            var e = this
            e.$el && e.$el.remove(), (e.$el = t(i))
            var n = this.model.getEmailInfo()
            n.site && e.$el.find('.quc-link-jump').attr('href', n.site).show(),
              'signUp' == n.type && e.$el.find('.quc-modify-wrapper').hide(),
              e.$el.find('.quc-email-address').text(n.email),
              e.$el.find('.quc-link-resend').click(function (t) {
                t.preventDefault(),
                  e.model.resend(),
                  e.$el
                    .find('.quc-resend-result')
                    .addClass('quc-resending')
                    .html('\u53d1\u9001\u4e2d...')
                    .show()
              }),
              e.$el.find('.quc-link-modify').click(function (t) {
                t.preventDefault(), e.hide()
                var n = e.model.getEmailInfo().model.name
                myQHPass[n]()
              }),
              e.$el.find('.quc-button-activated').click(function (i) {
                i.preventDefault()
                var r = t(this)
                r
                  .html('\u68c0\u67e5\u6fc0\u6d3b\u72b6\u6001...')
                  .addClass('quc-button-disabled'),
                  e.model.checkActive().fail(function () {
                    var t = n.site
                      ? '<a class="quc-link" href="' +
                        n.site +
                        '" target="_blank">\u767b\u5f55\u90ae\u7bb1</a>'
                      : '\u767b\u5f55\u90ae\u7bb1'
                    e.$el
                      .find('.quc-tip')
                      .addClass('quc-tip-error')
                      .html(
                        '\u60a8\u4f3c\u4e4e\u8fd8\u6ca1\u6709\u6fc0\u6d3b\uff0c\u8bf7' +
                          t +
                          '\uff0c\u5e76\u6309\u90ae\u4ef6\u5185\u7684\u63d0\u793a\u64cd\u4f5c\u3002'
                      ),
                      r
                        .html('\u5df2\u5b8c\u6210\u6fc0\u6d3b')
                        .removeClass('quc-button-disabled')
                  })
              })
          },
          show: function () {
            ;(this.$orgForm = t(this.model.getEmailInfo().el)),
              this.selElement(),
              this.model.trigger('beforeShow', this.$el[0])
            var n = this.model.getEmailInfo().model.panel
            n && n.hide()
            var i = (this.panel = this.model.panel = new e.utils.Panel({
              type: 'message'
            }))
            i
              .setTitle('\u8bf7\u6fc0\u6d3b\u60a8\u7684\u90ae\u7bb1')
              .setContent(this.$el)
              .show(),
              this.$orgForm.triggerHandler('QucDOMUpdated'),
              this.model.trigger('afterShow', this.$el[0])
          },
          hide: function () {
            this.model.trigger('beforeHide', this.$el[0]),
              this.panel
                ? this.panel.hide()
                : (this.$el.remove(), this.$orgForm.show()),
              this.$orgForm.triggerHandler('QucDOMUpdated'),
              this.model.trigger('afterHide', this.$el[0])
          }
        }
      e.ui.activeEmail = {
        init: function () {
          r.init.apply(r, arguments)
        }
      }
    })(myQHPass)
  },
  function (e, t) {
    e.exports =
      '<div class=quc-mod-active-email><div class=quc-main><div class=quc-top-tip>\u9a8c\u8bc1\u90ae\u4ef6\u5df2\u7ecf\u53d1\u9001\u5230\u60a8\u7684\u90ae\u7bb1:</div><div><span class="quc-primary quc-email-address"></span> <a href=javascript:; class="quc-link quc-link-jump" target=_blank>\u53bb\u6fc0\u6d3b</a></div><div class=quc-tip>\u8bf7\u60a8\u572848\u5c0f\u65f6\u5185\u767b\u5f55\u90ae\u7bb1\u5b8c\u6210\u9a8c\u8bc1</div><div><a class="quc-button quc-button-primary quc-button-activated">\u5df2\u5b8c\u6210\u6fc0\u6d3b</a></div><hr><div class=quc-resend><div>\u6ca1\u6536\u5230\u90ae\u4ef6\u600e\u4e48\u529e\uff1f</div><ul class=quc-dot-list><li class=quc-modify-wrapper>\u90ae\u7bb1\u586b\u9519\u4e86\uff0c<a href=javascript:; class="quc-link quc-link-modify">\u91cd\u65b0\u8bbe\u7f6e\u90ae\u7bb1</a><li><a class="quc-link quc-link-resend">\u91cd\u65b0\u53d1\u9001</a>\u9a8c\u8bc1\u90ae\u4ef6<span class=quc-resend-result></span><li>\u4f9d\u7136\u6536\u4e0d\u5230\u90ae\u4ef6\uff0c<a class=quc-link target=_blank href=//i.360.cn/findpwd/customerhelper#recieveemailcode>\u67e5\u770b\u5e2e\u52a9</a></ul></div></div></div>'
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = {},
        i = e.getLogic({
          name: 'activeEmail',
          run: function (t) {
            var i = this,
              r = e.getConfig('activeEmail.destUrl', location.href)
            if ((i.init(), 'signUp' == n.type)) {
              if (
                ((n.activeUrl =
                  t.activeurl + '&destUrl=' + encodeURIComponent(r)),
                (n.email = t.email),
                n.wrapper)
              )
                return void (location.href = n.activeUrl)
              e.sync.sendSignUpActivationEmail(n.activeUrl).then(function (e) {
                ;(n.site = e.goToMail), i.trigger('show')
              })
            } else {
              if ('setEmail' == n.type) n.email = t.loginEmailUnactivated
              else {
                if ('setSecEmail' != n.type)
                  return void this.trigger('error', '')
                n.email = t.safeSecEmail
              }
              ;(n.site = t.mailHostUrl), i.trigger('show')
            }
          },
          getEmailInfo: function () {
            return n
          },
          resend: function () {
            var i = this,
              r = t.when()
            return (
              'signUp' == n.type
                ? (r = e.sync.sendSignUpActivationEmail(n.activeUrl))
                : 'setEmail' == n.type
                ? (r = e.getUserInfo().then(function (t) {
                    return e.sync.sendActivationEmail(t.crumb)
                  }))
                : 'setSecEmail' == n.type &&
                  (r = e.getUserInfo().then(function (t) {
                    return e.sync.sendSecActivationEmail(t.crumb)
                  })),
              r
                .done(function (e) {
                  i.trigger('resendSuccess', e)
                })
                .fail(function (e) {
                  i.trigger('resendFail', e)
                })
            )
          },
          modify: function () {
            n.model.trigger('reset')
          },
          checkActive: function () {
            var i = this,
              r = t.Deferred()
            return (
              'signUp' == n.type
                ? e.sync.checkEmailExist(n.email).always(function (t) {
                    e.utils.isSameError(t, e.ERROR.EMAIL_NOT_ACTIVATED)
                      ? r.reject()
                      : r.resolve()
                  })
                : 'setEmail' == n.type
                ? e.getEmailStatus(function (e) {
                    e.loginEmail ? r.resolve() : r.reject()
                  })
                : e.getUserSecInfo(function (e) {
                    e.safeSecEmail ? r.resolve() : r.reject()
                  }),
              r.then(,
              r.promise()
            )
          }
        })
      ;(e.activeEmail = ,
        (e.activeEmail.prepare = function (e, t) {
          ;(n.model = e),
            (n.wrapper = t),
            (n.type = e.name),
            e.on('beforeShow', function (e, t) {
              n.el = t
            })
        })
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$,
        n = (e.ui.loading = {
          $el: t('<div class="quc-mask"></div><div class="quc-loading"></div>'),
          show: 
          hide:         })
      e.events.on('showLoading.*', n.show), e.events.on('hideLoading.*', n.hide)
    })(myQHPass)
  },
  function (e, t) {
    !(function (e) {
      var t = e.$
      e.when = {
        signIn: function (t) {
          var n = function (n) {
            'bind' == n.type && 0 == n.userName.indexOf('360U')
              ? e.fillProfile(
              : t(n)
          }
          e.getUserInfo(!1, n, function () {
            e.signIn(n)
          })
        },
        username: function (t) {
          this.signIn(function (n) {
            0 == n.username.indexOf('360U') ? e.setUsername(t) : t()
          })
        },
        nickname: function (t) {
          this.signIn(function (n) {
            n.nickname ? t() : e.setNickname(t)
          })
        },
        email: function (t) {
          this.signIn(function () {
            e.getEmailStatus(function (n) {
              n.loginEmail ? t() : e.setEmail(t)
            })
          })
        },
        secEmail: function (t) {
          this.signIn(function () {
            e.getUserSecInfo(function (n) {
              n.safeSecEmail ? t() : e.setSecEmail(t)
            })
          })
        },
        mobile: function (t) {
          this.signIn(function () {
            e.getUserSecInfo(
          })
        },
        emailOrMobile: function (n, i) {
          this.signIn(function () {
            var r = t.Deferred(),
              o = t.Deferred()
            e.getUserSecInfo(function (e) {
              e.safeSecMobile ? o.reject() : o.resolve()
            }),
              e.getEmailStatus(,
              t.when(r, o).then( n)
          })
        },
        mobileOrEmail: function (e, t) {
          this.emailOrMobile(e, !t)
        },
        authenticate: function (t) {
          this.signIn(function (n) {
            var i = n.crumb
            e.sync.getAuthenticationStatus(i).then(function (n) {
              var i = n.details && n.details.mobile,
                r = n.details && n.details.isNeedAuthen
              r ? e.authenticate(t) : t && t(i)
            })
          })
        }
      }
    })(myQHPass)
  },
  function (e, t, n) {
    function i() {
      r.setResources(o), r.setLocale('zh_CN')
    }
    var r = n(104)
    e.exports = r
    var o = {
      zh_CN: {
        '\u53d6\u6d88': '\u53d6\u6d88',
        'override phone warning':
          '\u8be5\u624b\u673a\u53f7\u5df2\u88ab\u4f7f\u7528\uff0c\u70b9\u51fb\u201c\u7ee7\u7eed\u7ed1\u5b9a\u201d\u6309\u94ae\uff0c\u624b\u673a\u53f7\u5c06\u4e0e\u539f\u5e10\u53f7\u89e3\u9664\u7ed1\u5b9a\uff0c<b>\u539f\u5e10\u53f7\u5c06\u65e0\u6cd5\u4f7f\u7528\u6b64\u624b\u673a\u53f7\u767b\u5f55\uff0c\u4e5f\u53ef\u80fd\u65e0\u6cd5\u518d\u6b21\u627e\u56de\u539f\u5e10\u53f7</b>\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002',
        'weak password warning':
          '\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u5e10\u53f7\u5b89\u5168\u7b49\u7ea7\u8f83\u4f4e\uff0c\u5efa\u8bae\u7acb\u5373\u4fee\u6539\u5bc6\u7801',
        'leak password warning':
          '\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u5e10\u53f7\u5b58\u5728\u5b89\u5168\u98ce\u9669\uff0c\u8bf7\u5148\u4fee\u6539\u5bc6\u7801'
      },
      en: {
        '\u53d6\u6d88': 'Cancel',
        '\u4fee\u6539\u5bc6\u7801': 'Set',
        'weak password warning':
          'Weak password, please change the password first',
        'leak password warning':
          'Your account has security risk, please change the password first',
        '\u7ee7\u7eed\u7ed1\u5b9a': 'Continue',
        'override phone warning':
          'This phone number has been associated with another 360 account, <b>click "continue" will disassociate it and associate with the current account</b>, operate with cautions.'
      }
    }
    i()
  },
  function (e, t, n) {
    ;(function (e, t) {
      function i() {
        var t = o.parse(e.slice(location.search, 1))
        if (myQHPass.isI360() && '/' === location.pathname) {
          var n = s.parse(document.referrer, !0)
          if ('/oauth/bind' === n.pathname && 'dobind' !== n.query.a) return r()
          t.checkPwd && r()
        }
      }
      function r() {
        return t
          .resolve(myQHPass.sync.actualGetUserInfo({ need_weak_info: 1 }))
          .then(
          .then(
          .caught(function () {
            a.debug('sign out'),
              myQHPass.signOut(function () {
                myQHPass.isI360() &&
                  '/login' !== location.pathname &&
                  c.gotoPage('/login')
              })
          })
      }
      var o = n(26),
        a = n(14).getLogger('request'),
        c = n(159),
        s = n(40)
      i()
    }.call(t, n(2), n(41)))
  },
  function (e, t) {
    e.exports =
      '<div class=control-panel><div class=quc-main> <% _.each(methods, function(item) { %> <a href="javascript: QHPass[\'<%= item %>\']();" class="quc-button quc-button-primary" style="margin: 10px 0">QHPass.<%= item %></a> <% }) %> </div></div>'
  }
])
;