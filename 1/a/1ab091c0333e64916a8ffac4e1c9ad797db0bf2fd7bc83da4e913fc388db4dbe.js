/*! (c)2017 AppNexus, Inc. v1.910.0 master */
!(([
  function (t, e, i) {
    var r = i(1),
      s = i(10),
      n = i(7),
      o = i(11),
      a = i(13),
      d = i(43),
      l = i(45),
      u = i(50),
      c = i(52),
      h = i(53),
      p = i(55),
      f = i(42),
      g = i(48),
      m = i(56),
      v = i(51),
      _ = i(57),
      b = i(58),
      y = i(59),
      A = i(8).createLogger('js.VPAIDWrapper', 'VPAIDWrapper'),
      w = i(54),
      E = function () {
        'use strict'
        var t = new v().getOS().name
        ;(this.attributes = {
          width: 0,
          height: 0,
          version: '2.0',
          viewMode: null,
          bitrate: null,
          volume: 1,
          duration: m.Unknown,
          isIOS: 'iOS' === t,
          isMobile:
            [
              'iOS',
              'Android',
              'Windows Phone',
              'Windows Mobile',
              'BlackBerry'
            ].indexOf(t) !== -1
        }),
          (this.urlParams = null),
          (this.dom = {
            slot: null,
            videoSlot: null,
            skip: { container: null, text: null, icon: null, style: null }
          }),
          (this.internalLogger = null),
          (this.anxvvModule = null),
          (this.disposeAttributes = {
            globalDelay: 500,
            globalTimeout: null,
            cycleDelay: 50,
            cycleTimeout: null
          }),
          (this.disposeFlags = {
            target: !1,
            trackingManager: !1,
            internalLogger: !1
          }),
          (this.hasDisposed = !1),
          (this.adPlaybackStopped = !1),
          (this.adPlaybackSkipped = !1),
          (this.hasStarted = !1),
          (this.target = null),
          (this.targetAttributes = { isTargetVPAID: !1, version: null }),
          (this.ad = null),
          (this.media = null),
          (this.trackingManager = null),
          (this.timer = null),
          (this.timerDelay = 200),
          (this.skip = {
            skipOffset: null,
            skipTimer: !1,
            skippable: !1,
            currentCountDown: null
          }),
          (this.progress = { progressEvents: null, progressTimer: !1 }),
          (this.stopTimeout = null),
          (this.skipTimeout = null),
          (this.domObserver = null),
          (this.lastObsState = { videoWidth: 0, slotWidth: 0 }),
          (this.eventManager = new s()),
          (this.playerAttributes = { version: null }),
          (this.adIcons = new p()),
          (this.adIconsList = null),
          (this.adIconTimer = null),
          (this.adIconTimerDelay = 1e3),
          (this.adIconCounter = null),
          (this.hasIcons = !1),
          (this.nielsen = null),
          A.info('VPAIDWrapper', { branch: 'master', version: 910 })
      }
    ;(E.prototype = {
      getAdLinear: function () {
        'use strict'
        return !0
      },
      getAdWidth: function () {
        'use strict'
        return this.attributes.width
      },
      getAdHeight: function () {
        'use strict'
        return this.attributes.height
      },
      getAdExpanded: function () {
        'use strict'
        return this.target
          ? this.target.getAdExpanded()
          : 'fullscreen' === this.attributes.viewMode
      },
      getAdSkippableState: function () {
        'use strict'
        return !!this.target && this.target.getAdSkippableState()
      },
      getAdRemainingTime: function () {
        'use strict'
        return this.target ? this.target.getAdRemainingTime() : m.Unknown
      },
      getAdDuration: function () {
        'use strict'
        return this.target
          ? '2.0' == this.targetAttributes.version
            ? this.target.getAdDuration()
            : this.target.getAdRemainingTime()
          : m.Unknown
      },
      getAdVolume: function () {
        'use strict'
        if (this.target) {
          var t = this.target.getAdVolume()
          if (t >= 0 && t <= 1) return t
        }
        return this.attributes.volume
      },
      setAdVolume: function (t) {
        'use strict'
        'number' == typeof t &&
          ((t = this.validateVolume(t)),
          null !== t &&
            (this.volumeHandle(t),
            this.target && this.target.setAdVolume(t),
            this.anxvvModule &&
              this.anxvvModule.notifyEvent(o.Ad_Volume_Change)))
      },
      getAdCompanions: function () {
        'use strict'
        return this.ad
          ? '' !== this.ad.companion
            ? this.ad.companion
            : this.target
            ? this.target.getAdCompanions()
            : ''
          : ''
      },
      get adCompanions
      getAdIcons: function () {
        'use strict'
        try {
          return !!this.hasIcons || !!this.target.getAdIcons()
        } catch (t) {
          return !1
        }
      },
      handshakeVersion: function (t) {
        'use strict'
        return (
          (this.playerAttributes.version = t),
          A.debug('handshakeVersion', {
            playerVersion: t,
            wrapper: this.attributes.version
          }),
          this.attributes.version
        )
      },
      initAd: function (t, e, i, s, o, l) {
        'use strict'
        if (
          (A.debug('initAd', {
            width: t,
            height: e,
            viewMode: i,
            desiredBitrate: s
          }),
          (this.urlParams = new d(o)),
          (this.internalLogger = new _(this.urlParams.internalLogConfig)),
          this.internalLogger.sendInternalError(n.Init_Ad()),
          null !== this.urlParams.hasError)
        )
          return void this.notifyError(this.urlParams.hasError)
        if (this.urlParams.viewabilityConfiguration) {
          var u = function () {
              return this.attributes.viewMode
            },
            c =           this.anxvvModule = new r(
            this.urlParams.viewabilityConfiguration,
            c.bind(this),
            u.bind(this)
          )
        }
        ;(this.trackingManager = new a(
          this.internalLogger.sendInternalError.bind(this.internalLogger)
        )),
          (this.attributes.width = this.validateDimension(t)),
          (this.attributes.height = this.validateDimension(e)),
          this.applyViewMode(i),
          (this.attributes.bitrate = s),
          this.urlParams.overrideBitrate &&
            ((this.attributes.bitrate = 1500),
            A.info('initAd', { overrideBitrate: this.attributes.bitrate })),
          (this.dom.slot = l.slot),
          (this.dom.videoSlot = l.videoSlot),
          this.stylish(),
          (this.domObserver = setInterval(
            this.observerCallback.bind(this),
            1e3
          )),
          this.loadAd(),
          setTimeout(this.asyncUsersync.bind(this), 0),
          setTimeout(this.asyncWhiteOps.bind(this), 0)
      },
      resizeAd: function (t, e, i) {
        'use strict'
        A.debug('resizeAd', { width: t, height: e, viewMode: i }),
          (t = this.validateDimension(t)),
          (e = this.validateDimension(e)),
          this.applyViewMode(i),
          (this.attributes.width !== t && t >= 0) ||
          (this.attributes.height !== e && e >= 0)
            ? ((this.attributes.width = t),
              (this.attributes.height = e),
              this.target &&
                this.target.resizeAd(
                  this.attributes.width,
                  this.attributes.height,
                  this.attributes.viewMode
                ))
            : A.debug('resizeAd', { msg: 'no resize - unchanged dimensions' })
      },
      startAd: function () {
        'use strict'
        A.debug('startAd'),
          (this.hasStarted = !0),
          this.target && this.target.startAd()
      },
      stopAd: function () {
        'use strict'
        A.debug('stopAd'),
          this.hasDisposed
            ? A.debug('stopAd', { message: 'Ad already disposed' })
            : (this.target
                ? (this.target.stopAd(),
                  'Creative' !== this.target.type &&
                    (this.stopTimeout = setTimeout(
                      function () {
                        A.warn('Timeout stopAd', {
                          message: 'Manually disposed after timeout'
                        }),
                          this.vpaidEventHandler(o.Ad_Stopped)
                      }.bind(this),
                      600
                    )))
                : this.dispose(o.Ad_Stopped),
              A.debug('stopAd', { message: 'Ad Stopped' }))
      },
      pauseAd: function () {
        'use strict'
        clearInterval(this.timer),
          clearInterval(this.adIconTimer),
          this.target && this.target.pauseAd()
      },
      resumeAd: function () {
        'use strict'
        ;(this.timer = setInterval(
          this.checkTimer.bind(this),
          this.timerDelay
        )),
          (this.adIconTimer = setInterval(
            this.adIconsRendering.bind(this),
            this.adIconTimerDelay
          )),
          this.target && this.target.resumeAd()
      },
      expandAd: function () {
        'use strict'
        this.target && this.target.expandAd()
      },
      collapseAd: function () {
        'use strict'
        this.target && this.target.collapseAd()
      },
      skipAd: function () {
        'use strict'
        A.debug('skipAd'),
          this.hasDisposed
            ? A.debug('skipAd', { message: 'Ad already disposed' })
            : (this.target
                ? (this.target.skipAd(),
                  'Creative' !== this.target.type &&
                    (this.skipTimeout = setTimeout(
                      function () {
                        A.warn('Timeout skip', {
                          message: 'Manually disposed after timeout'
                        }),
                          this.vpaidEventHandler(o.Ad_Skipped)
                      }.bind(this),
                      600
                    )))
                : this.dispose(o.Ad_Skipped),
              A.debug('skipAd', { message: 'Ad Skipped' }))
      },
      subscribe: function (t, e, i) {
        'use strict'
        this.eventManager.subscribe(t, e, i)
      },
      unsubscribe: function (t, e, i) {
        'use strict'
        this.eventManager.unsubscribe(t, e, i)
      },
      stylish: function () {
        'use strict'
        ;(this.dom.slot.style.margin = 0),
          (this.dom.slot.style.padding = 0),
          '' === this.dom.slot.id &&
            A.logLevel !== A.levelNames.none &&
            (this.dom.slot.id = 'AdSlot')
        try {
          ;(window.frameElement.style.border = '0 none'),
            (window.frameElement.frameborder = 0),
            (window.frameElement.style.margin = 0),
            (window.frameElement.style.padding = 0),
            (document.body.style.margin = 0),
            (document.body.style.padding = 0),
            (document.body.style.width = '100%'),
            (document.body.style.height = '100%'),
            (window.frameElement.allowfullscreen = 'true'),
            (window.frameElement.webkitallowfullscreen = 'true'),
            (window.frameElement.mozallowfullscreen = 'true'),
            (window.frameElement.scrolling = 'no'),
            (this.dom.videoSlot.style['pointer-events'] = 'auto'),
            (this.dom.slot.style['pointer-events'] = 'auto')
        } catch (t) {}
      },
      loadAd: function () {
        'use strict'
        if (null !== this.urlParams.vast) {
          var t = new l(
            this.vastResultHandler.bind(this),
            this.vastErrorHandler.bind(this),
            this.urlParams.xhrCookieCredentials
          )
          t.handler(0, this.urlParams.vast)
        } else this.notifyError(n.Missing_Vast_Config_Error())
      },
      vastResultHandler: function (t) {
        'use strict'
        if (this.hasDisposed)
          return void A.debug(
            'cancel vast result due to dispose state:' + this.hasDisposed
          )
        ;(this.ad = t),
          this.ad.extensions.nielsen &&
            !this.attributes.isMobile &&
            (this.nielsen = new b(this.dom.slot, this.ad.extensions.nielsen)),
          setTimeout(
            function () {
              try {
                for (
                  var t = y.validate(this.ad.adVerifications), e = 0;
                  e < t.length;
                  e++
                )
                  this.internalLogger.sendInternalError(t[e])
              } catch (i) {
                A.error('Exception', { exception: i, message: i.message })
              }
            }.bind(this),
            0
          ),
          this.initTrackingEvents()
        var e = new u(this.ad.mediaFiles, this.dom.videoSlot)
        if (
          (this.attributes.bitrate <= 0 &&
            (this.attributes.bitrate = e.defaultBitrate),
          (this.media = e.getMedia(
            this.attributes.width,
            this.attributes.height,
            this.attributes.bitrate
          )),
          !this.media)
        )
          return void this.notifyError(n.Media_File_Mime_Type_Error())
        if ((this.initTarget(), this.anxvvModule)) {
          var i = this.targetAttributes.isTargetVPAID ? void 0 : this.media.url
          this.anxvvModule.initMoat(
            this.selectWatchedElement(),
            this.ad.duration.toSecond(),
            i,
            this.internalLogger
          )
        }
        this.stylishForClickthrough()
      },
      vastErrorHandler: function (t, e) {
        'use strict'
        switch (t.severity) {
          case n.SEVERITY.FATAL:
            e && ((this.ad = { errors: e }), this.initTrackingEvents()),
              this.notifyError(t)
            break
          default:
            this.internalLogger.sendInternalError(t)
        }
      },
      initTarget: function () {
        'use strict'
        ;(this.targetAttributes.isTargetVPAID =
          'apiFramework' in this.media &&
          'vpaid' == this.media.apiFramework.toLowerCase()),
          this.targetAttributes.isTargetVPAID
            ? this.media.type.toLowerCase().indexOf('javascript') > -1
              ? ((this.target = new c(this.media.url, this)),
                this.target.loadProxy())
              : this.notifyError(n.Media_File_Mime_Type_Error(this.media.url))
            : ((this.targetAttributes.version = '2.0'),
              (this.target = new h(this.media.url, this)),
              this.target.loadPlayer())
      },
      vpaidEventHandler: function (t, e, i, r) {
        'use strict'
        if (this.eventManager.alreadySent(t))
          return void A.debug('vpaidEventHandler', {
            message: 'Event ' + t + ' already dispatched'
          })
        if (
          !(
            (this.adPlaybackStopped && t !== o.Ad_Stopped) ||
            this.adPlaybackSkipped
          )
        ) {
          if (
            ((t != o.Ad_Stopped &&
              t != o.Ad_Skipped &&
              t != o.Ad_Video_Complete) ||
              (this.adPlaybackStopped = !0),
            t == o.Ad_Skipped &&
              ((this.adPlaybackSkipped = !0),
              this.nielsen && this.nielsen.stopSurvey()),
            t == o.Ad_Click_Thru)
          )
            (r = this.clickThruHandle(e, r)),
              setTimeout(
                bind(this),
                500
              )
          else if (t == o.Ad_Video_Start)
            this.initViewability(), this.nielsen || this.videoStartHandle()
          else if (t == o.Ad_Volume_Change) {
            var s = 0
            if (
              (void 0 !== e
                ? ((s = this.validateVolume(e)), (e = void 0))
                : this.target &&
                  (s = this.validateVolume(this.target.getAdVolume())),
              null !== s &&
                (this.anxvvModule &&
                  this.anxvvModule.notifyEvent(o.Ad_Volume_Change),
                this.volumeHandle(s)),
              !this.hasStarted)
            )
              return
          } else if (t == o.Ad_Size_Change) {
            if (this.target)
              if ('Creative' == this.target.type)
                'fullscreen' === this.attributes.viewMode
                  ? this.applyViewMode('fullscreen')
                  : this.applyViewMode('normal')
              else {
                var n = this.validateDimension(this.target.getAdWidth()),
                  a = this.validateDimension(this.target.getAdHeight())
                this.attributes.width !== n &&
                  n > 0 &&
                  this.attributes.height !== a &&
                  a > 0 &&
                  ((this.attributes.width = n),
                  (this.attributes.height = a),
                  (this.target.attributes.viewMode =
                    'normal' === this.target.attributes.viewMode
                      ? 'fullscreen'
                      : 'normal'),
                  this.applyViewMode(this.target.attributes.viewMode))
              }
          } else if (t == o.Ad_Skippable_State_Change) {
            if (this.urlParams.skipEnabled)
              return (
                this.displaySkipArea(),
                void (this.skip.skipTimer && (this.skip.skipTimer = !1))
              )
            this.skip.skippable = !0
          } else if (t == o.Ad_Loaded && this.target) {
            var d = this.target.getAdDuration(),
              l = this.target.getAdRemainingTime()
            d > 0
              ? (this.attributes.duration = d)
              : l > 0 && (this.attributes.duration = l),
              A.debug('Duration loaded', { duration: this.attributes.duration })
          }
          if (
            (t == o.Ad_Video_Complete
              ? (this.stopTimeout = setTimeout(
                  bind(this),
                  600
                ))
              : t == o.Ad_Stopped && this.stopTimeout
              ? clearTimeout(this.stopTimeout)
              : t == o.AdSkipped &&
                this.skipTimeout &&
                clearTimeout(this.skipTimeout),
            this.anxvvModule && this.anxvvModule.notifyEvent(t),
            this.nielsen &&
              [
                o.Ad_Video_Start,
                o.Ad_Impression,
                o.Ad_Playing,
                o.Ad_Video_Complete,
                o.Ad_Stopped
              ].indexOf(t) != -1)
          )
            if (t == o.Ad_Video_Start)
              this.target.pauseAd(),
                this.nielsen.renderSurvey(
                  function () {
                    this.target.resumeAd(),
                      this.videoStartHandle(),
                      this.anxvvModule &&
                        this.anxvvModule.notifyEvent(o.Ad_Video_Start),
                      this.trackingManager.notifyTrackingEvent(o.Ad_Impression),
                      this.eventManager.sendEvent(o.Ad_Impression)
                  }.bind(this)
                )
            else {
              if (t == o.Ad_Video_Complete)
                return void this.nielsen.renderSurvey(
                  function () {
                    this.trackingManager.notifyTrackingEvent(
                      o.Ad_Video_Complete
                    ),
                      this.eventManager.sendEvent(o.Ad_Video_Complete),
                      this.dispose(o.Ad_Stopped)
                  }.bind(this)
                )
              if (t != o.Ad_Playing) return
              if (!this.nielsen.canPlayAd()) return void this.target.pauseAd()
            }
          t == o.Ad_Error
            ? this.adPlaybackStopped ||
              (A.error('vpaidEventHandler', { error: i, message: e }),
              this.nielsen && this.nielsen.stopSurvey(),
              this.trackingManager.notifyTrackingEvent(t, i.message),
              this.internalLogger.sendInternalError(i))
            : this.trackingManager.notifyTrackingEvent(t),
            this.adPlaybackStopped && t == o.Ad_Error
              ? this.dispose(o.Ad_Stopped)
              : t == o.Ad_Stopped || t == o.Ad_Skipped
              ? this.dispose(t)
              : t == o.Ad_Error
              ? this.dispose(t, e, i.message)
              : this.eventManager.sendEvent(t, e, i, r)
        }
      },
      clickThruHandle: function (t, e) {
        'use strict'
        if (e) {
          if (
            ('' !== this.ad.videoClicks.clickThrough &&
              (t = this.ad.videoClicks.clickThrough),
            t)
          ) {
            if ('about:blank' == t) return !0
            var i = null
            try {
              i = window.open(t, '_blank')
            } catch (r) {
              return (
                this.internalLogger.sendInternalError(
                  n.ClickThru_Error(r.toString())
                ),
                !0
              )
            }
            return (
              null === i &&
              (this.internalLogger.sendInternalError(n.ClickThru_Error()), !0)
            )
          }
          return !0
        }
        return !1
      },
      initViewability: function () {
        'use strict'
        var t = 0,
          e = 0
        if (
          (this.target &&
            ((t = this.target.getAdDuration()),
            (e = this.target.getAdRemainingTime())),
          t > 0)
        )
          this.attributes.duration = t
        else if (e > 0) this.attributes.duration = e
        else if (this.attributes.duration <= 0) {
          var i = this.ad.duration.toSecond()
          this.attributes.duration = i !== -1 ? i : 0
        }
        if (this.anxvvModule)
          try {
            var r = this.selectWatchedElement()
            r ||
              (this.internalLogger.sendInternalError(
                n.Viewability_Element_Error()
              ),
              A.info('No usable element for viewability. Watched element', {
                selectedObject: 'videoSlot fallback'
              }),
              (r = this.dom.videoSlot)),
              this.anxvvModule.initAppNexus(
                r,
                this.dom.videoSlot,
                this.dom.slot,
                this.attributes.duration,
                this.internalLogger
              )
          } catch (s) {
            this.internalLogger.sendInternalError(n.Core_Js_Error())
          }
        else
          this.internalLogger.sendInternalError(n.Missing_View_Config_Error())
      },
      videoStartHandle: function () {
        'use strict'
        var t = Math.floor(1e3 * this.attributes.duration)
        if (
          ((this.skip.skipOffset = new g(this.ad.skip, t)),
          this.skip.skipOffset.toSecond() >= 0 && (this.skip.skipTimer = !0),
          this.ad.trackingEvents.hasOwnProperty('progress'))
        ) {
          this.progress.progressEvents = this.ad.trackingEvents.progress
          for (var e = 0; e < this.progress.progressEvents.length; e++) {
            this.progress.progressEvents[e].sent = !1
            var i = this.progress.progressEvents[e].offset
            ;(this.progress.progressEvents[e].offset = new g(i, t)),
              this.progress.progressEvents[e].offset.toSecond() < 0 &&
                (this.progress.progressEvents[e].sent = !0)
          }
          this.progress.progressTimer = !0
        }
        ;(this.skip.skipTimer || this.progress.progressTimer) &&
          (this.timer = setInterval(
            this.checkTimer.bind(this),
            this.timerDelay
          )),
          this.adIconSetup()
      },
      volumeHandle: function (t) {
        'use strict'
        t !== this.attributes.volume &&
          (0 === t
            ? (A.debug('volumeHandle', { status: 'Mute' }),
              this.trackingManager.notifyTrackingEvent('Mute'))
            : 0 !== t &&
              0 === this.attributes.volume &&
              (A.debug('volumeHandle', { status: 'Unmute' }),
              this.trackingManager.notifyTrackingEvent('Unmute')),
          (this.attributes.volume = t))
      },
      checkTimer: function () {
        'use strict'
        var t = !0
        if (this.progress.progressTimer) {
          for (var e = 0; e < this.progress.progressEvents.length; e++)
            if (!this.progress.progressEvents[e].sent) {
              var i = this.progress.progressEvents[e].offset.decrease(
                this.timerDelay
              )
              if (i) {
                var r = this.progress.progressEvents[e].url
                ;(this.progress.progressEvents[e].sent = !0),
                  (r = f.replaceMacro(r)),
                  this.trackingManager.send(r)
              } else t = !1
            }
          t && (this.progress.progressTimer = !1)
        }
        if (this.skip.skipTimer && !this.skip.skippable) {
          this.skip.skippable = this.skip.skipOffset.decrease(this.timerDelay)
          var s = this.skip.skipOffset.toSecond()
          this.skip.skippable ||
            this.skip.currentCountDown == s ||
            (this.displaySkipArea(s), (this.skip.currentCountDown = s)),
            this.skip.skippable
              ? this.urlParams.skipEnabled
                ? (this.displaySkipArea(),
                  (this.skip.skippable = !1),
                  (this.skip.skipTimer = !1))
                : (A.info('checkTimer', {
                    eventType: o.Ad_Skippable_State_Change
                  }),
                  this.eventManager.sendEvent(o.Ad_Skippable_State_Change))
              : (t = !1)
        }
        t && clearInterval(this.timer)
      },
      dispose: function (t, e, i) {
        'use strict'
        A.debug('dispose', { willDispose: !this.hasDisposed })
        try {
          if (
            this.hasDisposed ||
            (t !== o.Ad_Stopped && t !== o.Ad_Skipped && t !== o.Ad_Error)
          )
            this.hasDisposed &&
              t === o.Ad_Stopped &&
              this.eventManager.sendEvent(o.Ad_Stopped)
          else {
            ;(this.hasDisposed = !0),
              clearInterval(this.timer),
              clearInterval(this.domObserver),
              this.adIconTimer &&
                ((this.adIconCounter = this.attributes.duration),
                this.adIconsRendering()),
              this.disposeSkipArea(),
              this.target
                ? this.target.dispose()
                : (this.disposeFlags.target = !0),
              this.trackingManager
                ? this.trackingManager.dispose(this)
                : (this.disposeFlags.trackingManager = !0),
              this.internalLogger
                ? this.internalLogger.dispose(this)
                : (this.disposeFlags.internalLogger = !0)
            var r = function () {
              for (var r in this.disposeFlags)
                if (!this.disposeFlags[r]) return !1
              return (
                this.disposeAttributes.globalTimeout &&
                  (clearTimeout(this.disposeAttributes.globalTimeout),
                  (this.disposeAttributes.globalTimeout = null)),
                this.disposeAttributes.cycleTimeout &&
                  (clearInterval(this.disposeAttributes.cycleTimeout),
                  (this.disposeAttributes.cycleTimeout = null)),
                this.eventManager.sendEvent(t, e, i),
                t === o.Ad_Skipped && this.eventManager.sendEvent(o.Ad_Stopped),
                !0
              )
            }.bind(this)
            r() ||
              ((this.disposeAttributes.cycleTimeout = setInterval(
                r,
                this.disposeAttributes.cycleDelay
              )),
              (this.disposeAttributes.globalTimeout = setTimeout(
                function () {
                  this.disposeAttributes.cycleTimeout &&
                    (clearInterval(this.disposeAttributes.cycleTimeout),
                    (this.disposeAttributes.cycleTimeout = null)),
                    (this.disposeAttributes.globalTimeout = null),
                    this.eventManager.sendEvent(t, e, i)
                }.bind(this),
                this.disposeAttributes.globalDelay
              )))
          }
        } catch (s) {
          throw (A.error('dispose exception:' + s), s)
        }
      },
      notifyError: function (t) {
        'use strict'
        this.trackingManager &&
          this.trackingManager.notifyTrackingEvent(o.Ad_Error, t.code),
          this.internalLogger.sendInternalError(t),
          this.dispose(o.Ad_Error, '', t.code)
      },
      initTrackingEvents: function () {
        'use strict'
        'errors' in this.ad &&
          this.trackingManager.addTrackingEvent('error', this.ad.errors),
          'impressions' in this.ad &&
            this.trackingManager.addTrackingEvent(
              'impression',
              this.ad.impressions
            ),
          'trackingEvents' in this.ad &&
            this.trackingManager.addTrackingEvents(this.ad.trackingEvents),
          'videoClicks' in this.ad &&
            this.trackingManager.addTrackingEvent(
              'clickTracking',
              this.ad.videoClicks.clickTracking
            )
      },
      validateVolume: function (t) {
        'use strict'
        return 'number' == typeof t
          ? ((t = Math.floor(100 * t) / 100),
            t <= 0 ? (t = 0) : t >= 1 && (t = 1),
            t)
          : null
      },
      validateDimension: function (t) {
        'use strict'
        if ('number' == typeof t) return t
        if ('string' == typeof t) {
          var e = t.match(/^(\d+)px$/)
          if (e && e[1]) return e[1]
        }
        return 0
      },
      applyViewMode: function (t) {
        'use strict'
        return (
          (t =
            'string' != typeof t || t.search(/normal|fullscreen/i) === -1
              ? 'normal'
              : t.toLowerCase()),
          this.attributes.viewMode != t &&
            ((this.attributes.viewMode = t),
            'fullscreen' === t
              ? this.trackingManager.notifyTrackingEvent('Expand')
              : this.trackingManager.notifyTrackingEvent('Collapse'),
            (this.attributes.viewMode = t),
            this.anxvvModule && this.anxvvModule.notifyEvent(o.Ad_Size_Change)),
          t
        )
      },
      selectWatchedElement: function () {
        'use strict'
        return this.dom.slot
        var t = function (t, e, i) {
            return (
              !!t &&
              !(
                (t.clientWidth !== e && t.offsetWidth !== e) ||
                (t.clientHeight !== i && t.offsetHeight !== i)
              )
            )
          },
          e = this.dom.videoSlot
        try {
          document.body.contains(e)
        } catch (i) {
          A.debug('Fake video element detected', i), (e = null)
        }
        if (e && t(e, this.attributes.width, this.attributes.height))
          return A.info('Watched element', { selectedObject: 'videoSlot' }), e
        var r = this.dom.slot
        try {
          document.body.contains(r)
        } catch (i) {
          A.debug('Fake div element detected', i), (r = null)
        }
        if (r && t(r, this.attributes.width, this.attributes.height))
          return A.info('Watched element', { selectedObject: 'slot' }), r
        var s = document.body
        try {
          document.body.contains(s)
        } catch (i) {
          A.debug('Fake body element detected', i), (s = null)
        }
        return s && t(s, this.attributes.width, this.attributes.height)
          ? (A.info('Watched element', { selectedObject: 'body' }), s)
          : e
          ? (A.info('Watched element', {
              selectedObject: 'videoSlot fallback'
            }),
            e)
          : r
          ? (A.info('Watched element', { selectedObject: 'slot fallback' }), r)
          : null
      },
      observerCallback: function () {
        'use strict'
        if (
          this.attributes.isIOS &&
          void 0 !== this.dom.videoSlot.webkitDisplayingFullscreen
        ) {
          if (
            this.dom.videoSlot.webkitDisplayingFullscreen !==
            ('fullscreen' === this.attributes.viewMode)
          ) {
            A.debug('Resize observer', { source: 'ios fullscreen' })
            var t = this.dom.videoSlot.webkitDisplayingFullscreen
              ? 'fullscreen'
              : 'normal'
            this.applyViewMode(t),
              this.target &&
                this.target.resizeAd(
                  this.attributes.width,
                  this.attributes.height,
                  t
                )
          }
        } else {
          var e = {
              width: 0,
              height: 0,
              viewmode: this.attributes.viewMode,
              changed: !1
            },
            i = {
              width: 0,
              height: 0,
              viewmode: this.attributes.viewMode,
              changed: !1
            }
          this.hasResized(this.dom.videoSlot, e),
            this.hasResized(this.dom.slot, i),
            e.changed && this.lastObsState.videoWidth != e.width
              ? (A.debug('Resize observer', { source: 'video tag' }),
                this.resizeAd(e.width, e.height, e.viewmode))
              : i.changed &&
                this.lastObsState.slotWidth != i.width &&
                (A.debug('Resize observer', { source: 'slot div' }),
                this.resizeAd(i.width, i.height, i.viewmode)),
            (this.lastObsState.videoWidth = e.width),
            (this.lastObsState.slotWidth = i.width)
        }
      },
      hasResized: function (t, e) {
        'use strict'
        if (
          t &&
          ((t.clientWidth && t.clientHeight) ||
            (t.offsetWidth && t.offsetHeight))
        ) {
          var i = 10
          t.clientWidth && t.clientHeight
            ? ((e.width = t.clientWidth), (e.height = t.clientHeight))
            : t.offsetWidth &&
              t.offsetHeight &&
              ((e.width = t.offsetWidth), (e.height = t.offsetHeight)),
            Math.abs(e.width - this.attributes.width) > i &&
              Math.abs(e.height - this.attributes.height) > i &&
              (e.changed = !0),
            e.width > this.attributes.width
              ? (e.viewmode = 'fullscreen')
              : e.width < this.attributes.width && (e.viewmode = 'normal')
        }
      },
      adIconSetup: function () {
        'use strict'
        if (0 !== this.ad.icons.length) {
          if (this.target && this.target.getAdIcons())
            return void A.debug('adIconSetup', {
              message: 'Client already have icons'
            })
          if (
            (this.adIcons.init(this.ad.icons),
            (this.adIconsList = this.adIcons.getIcons()),
            !this.adIconsList || 0 === this.adIconsList.length)
          )
            return
          ;(this.hasIcons = !0),
            (this.adIconCounter = 0.1),
            this.adIconsRendering(),
            (this.adIconTimer = setInterval(
              this.adIconsRendering.bind(this),
              this.adIconTimerDelay
            ))
        }
      },
      adIconsTrackingCallback: function (t) {
        A.debug('icon tracking callback', { eventKey: t })
        var e = t.split('_')
        if (2 === e.length)
          for (var i = 0; i < this.adIconsList.length; i++)
            if (this.adIconsList[i].program === e[1]) {
              var r = []
              'IconViewTracking' === e[0]
                ? (r = this.adIconsList[i].IconViewTracking)
                : 'IconClickTracking' === e[0] &&
                  (r = this.adIconsList[i].IconClickTracking)
              for (var s = 0; s < r.length; s++)
                this.trackingManager.send(f.replaceMacro(r[s]))
            }
      },
      adIconsClickCallback: function (t) {
        if (
          (A.debug('icon click callback', { url: t }),
          t && 'string' == typeof t && 'about:blank' !== t)
        ) {
          var e = null
          try {
            e = window.open(t, '_blank')
          } catch (i) {
            this.internalLogger.sendInternalError(n.Icon_ClickThru_Error())
          }
          null === e &&
            this.internalLogger.sendInternalError(n.Icon_ClickThru_Error())
        }
      },
      adIconsRendering: function () {
        this.adIconCounter > this.attributes.duration &&
          clearInterval(this.adIconTimer),
          this.adIcons.renderIcons(
            this.adIconsTrackingCallback.bind(this),
            this.adIconsClickCallback.bind(this),
            this.dom.slot,
            0,
            0,
            this.adIconCounter,
            this.attributes.duration
          ),
          this.adIconCounter++
      },
      asyncUsersync: function () {
        'use strict'
        try {
          if (
            this.urlParams &&
            this.urlParams.dropUsersync &&
            this.urlParams.usersyncUrl &&
            '' !== this.urlParams.usersyncUrl
          ) {
            var t = window.document.createElement('iframe')
            ;(t.src = this.urlParams.usersyncUrl),
              (t.width = '1'),
              (t.height = '1'),
              (t.frameborder = '0'),
              (t.scrolling = 'no'),
              (t.marginheight = '0'),
              (t.marginwidth = '0'),
              (t.topmargin = '0'),
              (t.leftmargin = '0'),
              (t.style.position = 'absolute'),
              (t.style.overflow = 'hidden'),
              (t.style.clip = 'rect(0 0 0 0)'),
              (t.style.height = '1px'),
              (t.style.width = '1px'),
              (t.style.margin = '-1px'),
              (t.style.padding = '0'),
              (t.style.border = '0'),
              window.document.body.appendChild(t),
              A.info('dropUsersync')
          }
        } catch (e) {
          A.error('dropUsersync', {
            message: 'Error while dropping usersync',
            error: e.message
          })
        }
      },
      asyncWhiteOps: function () {
        'use strict'
        try {
          if (
            this.urlParams &&
            this.urlParams.whiteOpsUrl &&
            '' !== this.urlParams.whiteOpsUrl
          ) {
            var t = this.dom.slot.ownerDocument.createElement('script')
            ;(t.type = 'text/javascript'),
              (t.src = this.urlParams.whiteOpsUrl),
              this.dom.slot.appendChild(t),
              this.internalLogger.sendInternalError(n.WhiteOps_Dropped())
          }
        } catch (e) {
          A.error('dropWhiteOps', {
            message: 'Error while dropping WhiteOps JS',
            error: e.message
          })
        }
      },
      displaySkipArea: function (t) {
        'use strict'
        if (this.urlParams.skipEnabled) {
          if (!this.dom.skip.style) {
            ;(this.dom.skip.style = this.dom.slot.ownerDocument.createElement(
              'style'
            )),
              this.dom.skip.style.appendChild(
                this.dom.slot.ownerDocument.createTextNode('')
              ),
              this.dom.slot.appendChild(this.dom.skip.style)
            var e = this.dom.skip.style.sheet,
              i = '#anSkipButton',
              r = '#anSkipText',
              s = '#anSkipIcon'
            this.dom.slot.id && (i = '#' + this.dom.slot.id + '>' + i)
            for (
              var n = [
                  {
                    selector: i,
                    rule:
                      'white-space: nowrap; text-align:center; min-width:130px; position:absolute; bottom:35px; right:5px; margin:0; padding:5px; border:1px solid white; border-radius:10px; background:black; color:white; cursor:default; opacity:0.7;'
                  },
                  {
                    selector: i + '>' + r,
                    rule:
                      'margin:0; padding:0; line-height:18px; font-family:Arial,Helvetica,sans-serif; font-size:15px; font-style:normal; font-weight:lighter;'
                  },
                  {
                    selector: i + '>' + s,
                    rule:
                      'margin:0 0 0 10px; padding:0; width:11px; height:11px;'
                  },
                  {
                    selector: i + '.skippable',
                    rule:
                      'cursor: pointer; z-index: ' + w.SKIP_BUTTON_ZINDEX + ';'
                  }
                ],
                o = 0;
              o < n.length;
              o++
            ) {
              var a = n[o]
              'addRule' in e
                ? e.addRule(a.selector, a.rule, 0)
                : 'insertRule' in e &&
                  e.insertRule(a.selector + '{' + a.rule + '}', 0)
            }
          }
          if (!this.dom.skip.container) {
            var d = document.createElement('div')
            ;(d.id = 'anSkipButton'),
              this.dom.slot.appendChild(d),
              (this.dom.skip.container = d)
          }
          if (!this.dom.skip.text) {
            var l = document.createElement('span')
            ;(l.id = 'anSkipText'),
              this.dom.skip.container.appendChild(l),
              (this.dom.skip.text = l)
          }
          if (
            (t
              ? (this.dom.skip.text.innerHTML = 'You can skip in ' + t + 's')
              : (this.dom.skip.text.innerHTML = 'Skip Ad'),
            !this.dom.skip.icon && !t)
          ) {
            var u = document.createElement('img')
            ;(u.id = 'anSkipIcon'),
              (u.src =
                'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDMwNiAzMDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwNiAzMDY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0ic2tpcC1uZXh0Ij4KCQk8cGF0aCBkPSJNMCwzMDZsMjE2Ljc1LTE1M0wwLDBWMzA2eiBNMjU1LDB2MzA2aDUxVjBIMjU1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='),
              this.dom.skip.container.appendChild(u),
              (this.dom.skip.icon = u),
              this.dom.skip.container.classList.add('skippable'),
              this.dom.skip.container.addEventListener(
                'click',
                this.skipAd.bind(this)
              )
          }
        }
      },
      disposeSkipArea: function () {
        'use strict'
        this.dom.skip.container &&
          (this.dom.skip.container.removeEventListener(
            'click',
            this.skipAd.bind(this)
          ),
          this.dom.slot.removeChild(this.dom.skip.container),
          (this.dom.skip.container = null),
          (this.dom.skip.text = null),
          (this.dom.skip.icon = null)),
          this.dom.skip.style &&
            (this.dom.slot.removeChild(this.dom.skip.style),
            (this.dom.skip.style = null))
      },
      skipHandler: function (t) {
        'use strict'
        t.stopImmediatePropagation(), this.skipAd()
      },
      stylishForClickthrough: function () {
        'use strict'
        try {
          if (this.ad.videoClicks.clickThrough) {
            var t = window.getComputedStyle(this.dom.slot).cursor
            ;(t && 'auto' !== t) || (this.dom.slot.style.cursor = 'pointer')
          }
        } catch (e) {}
      }
    }),
      (getVPAIDAd = 
  },
  function (t, e, i) {
    var r = i(2),
      s = i(2).Moat.ERROR_CODE,
      n = i(7),
      o = i(8).createLogger('js.viewability.ANXVVModule', 'ANXVVModule'),
      a = function (t, e, i) {
        'use strict'
        ;(this.view = null), (this.viewMode = 'normal'), this.configure(t, e, i)
      }
    ;(a.prototype = {
      configure: function (t, e, i) {
        'use strict'
        var s = {
          loggerCallback: this.log,
          getVolumeCallback: e,
          getViewModeCallback: i
        }
        this.view = new r(t, s)
      },
      initAppNexus: function (t, e, i, s, a) {
        'use strict'
        var d = { duration: s },
          l = {
            errorCallback: function (t, e) {
              this.log(r.LOG_LEVEL.ERROR, e + ' Module ERROR_CODE=' + t),
                a && a.sendInternalError(n.Core_Js_Error())
            }.bind(this),
            videoElementsCallback:           }
        this.view.initAppNexus(t, d, void 0, l),
          o.info('initAppNexus', { duration: s })
      },
      initMoat: function (t, e, i, o) {
        'use strict'
        var a = { duration: e },
          d = {
            errorCallback: function (t, e) {
              switch (
                (this.log(
                  r.LOG_LEVEL.DEBUG,
                  '[MOAT/' + e.mode + '] error=' + t,
                  e
                ),
                t)
              ) {
                case s.BAD_CONFIG:
                  o.sendInternalError(n.Moat_Config_Error())
                  break
                case s.LIBRARY_LOADING_ERROR:
                  o.sendInternalError(n.Moat_Loading_Error())
                  break
                case s.INITIALIZATION_ERROR:
                  o.sendInternalError(n.Moat_Error())
              }
            }.bind(this)
          }
        this.view.initMoat(t, a, i, d)
      },
      notifyEvent: 
      log: function (t, e, i) {
        'use strict'
        var r = { message: e }
        i && (r.data = i),
          o[t]
            ? o[t]('ViewJS Proxy', r)
            : ((r.level = t), o.warn('ViewJS Proxy lost message', r))
      }
    }),
      (t.exports = a)
  },
  function (t, e, i) {
    !(function () {
      'use strict'
      var e = i(3)
      t.exports = e
    })()
  },
  function (t, e, i) {
    'use strict'
    var r = i(4),
      s = i(6),
      n = i(5).LOG_LEVEL,
      o = i(5).VIEW_EVENT,
      a = i(5).VPAID_EVENT,
      d = i(5).VIEW_MODE,
      l = i(5).MODULE,
      u =     ;(u.prototype = {
      initAppNexus: function (t, e, i, r) {
        try {
          this._private.initAppNexus(t, e, i, r)
        } catch (s) {
          this._private, _debug && console.error('exception in initAppNexus', s)
        }
        return this
      },
      initMoat: function (t, e, i, r) {
        try {
          this._private.initMoat(t, e, i, r)
        } catch (s) {
          this._private._debug && console.error('exception in initMoat', s)
        }
        return this
      },
      notifyEvent: function (t) {
        try {
          this._private.notifyEvent(t)
        } catch (e) {
          this._private._debug && console.error('exception in notifyEvent', e)
        }
        return this
      }
    }),
      (t.exports = u),
      (t.exports.LOG_LEVEL = n),
      (t.exports.VIEW_EVENT = o),
      (t.exports.VPAID_EVENT = a),
      (t.exports.VIEW_MODE = d),
      (t.exports.MODULE = l),
      (t.exports.AppNexus = r),
      (t.exports.Moat = s)
    var c = function () {
        ;(this._debug = !1),
          (this._viewabilityParams = {}),
          (this._viewabilityModules = {}),
          (this._service = {})
      },
      h = function (t, e) {
        try {
          ;(this._private = new c()),
            (this._private._service = e),
            t && this._private.configure(t)
        } catch (i) {
          this.log(n.ERROR, "'_init' failed:", i)
        }
      }
    c.prototype = {
      log: function (t, e, i) {
        try {
          if (this._service.loggerCallback)
            try {
              this._service.loggerCallback(t, '[VVAdaptor] ' + e, i)
            } catch (r) {
              this._debug && console.trace(r)
            }
          else this._debug && console.log(t + ': ' + e, i)
        } catch (r) {
          this._debug && console.trace(r)
        }
      },
      configure: function (t) {
        ;(this._viewabilityParams = {}), (this._viewabilityModules = {})
        try {
          t.hasOwnProperty('config') &&
            '' !== t.config &&
            (this._viewabilityParams[l.APPNEXUS] = t.config)
        } catch (e) {
          this.log(n.ERROR, "'configure' failed for MODULE.APPNEXUS: ", e)
        }
        try {
          if (t.hasOwnProperty('marketplace_clearing_event_addon')) {
            var i = t.marketplace_clearing_event_addon
            i.hasOwnProperty('name') &&
              'ETV_Moat_Video_AddOn' === i.name &&
              i.hasOwnProperty('config') &&
              '' !== i.config &&
              (this._viewabilityParams[l.MOAT_ETMP] = i.config)
          }
        } catch (e) {
          this.log(n.ERROR, "'configure' failed for MODULE.MOAT_ETMP: ", e)
        }
        if (!this._viewabilityParams[l.MOAT_ETMP])
          try {
            if (t.hasOwnProperty('third_party_providers')) {
              var r = t.third_party_providers
              for (var s in r)
                r[s].hasOwnProperty('code') &&
                  'moat' === r[s].code &&
                  r[s].hasOwnProperty('config') &&
                  '' !== r[s].config &&
                  (this._viewabilityParams[l.MOAT_ANALYTICS] = r[s].config)
            }
          } catch (e) {
            this.log(
              n.ERROR,
              "'configure' failed for MODULE.MOAT_ANALYTICS: ",
              e
            )
          }
      },
      initAppNexus: function (t, e, i, s) {
        try {
          this._viewabilityModules[l.APPNEXUS] = null
          var o = this._viewabilityParams[l.APPNEXUS]
          if (o && s) {
            s.loggerCallback = this._service.loggerCallback
            var a = this.getVolume(),
              d = this.getViewMode()
            ;(this._viewabilityModules[l.APPNEXUS] = new r(
              o,
              t,
              e,
              i,
              a,
              d,
              s
            )),
              a && (this.lastKnownVolume = a),
              d && (this.lastKnownViewMode = d)
          }
        } catch (u) {
          this.log(n.ERROR, "'initAppNexus' failed:", u)
        }
      },
      initMoat: function (t, e, i, r) {
        ;(this._viewabilityModules[l.MOAT_ANALYTICS] = null),
          (this._viewabilityModules[l.MOAT_ETMP] = null)
        var o
        try {
          ;(o = this._viewabilityParams[l.MOAT_ANALYTICS]),
            o &&
              r &&
              ((r.loggerCallback = this._service.loggerCallback),
              (r.getVolumeCallback = this._service.getVolumeCallback),
              (this._viewabilityModules[l.MOAT_ANALYTICS] = new s(
                e ? e.duration : 0,
                i,
                t,
                o,
                s.MODE.ANALYTICS,
                r,
                this._debug
              )))
        } catch (a) {
          this.log(n.ERROR, "'initMoat' failed for MODULE.MOAT_ANALYTICS: ", a)
        }
        try {
          ;(o = this._viewabilityParams[l.MOAT_ETMP]),
            o &&
              r &&
              ((r.loggerCallback = this._service.loggerCallback),
              (r.getVolumeCallback = this._service.getVolumeCallback),
              (this._viewabilityModules[l.MOAT_ETMP] = new s(
                e ? e.duration : 0,
                i,
                t,
                o,
                s.MODE.ETMP,
                r,
                this._debug
              )))
        } catch (a) {
          this.log(n.ERROR, "'initMoat' failed for MODULE.MOAT_ETMP: ", a)
        }
      },
      notifyEvent: function (t) {
        var e = null,
          i = null
        if (this._viewabilityModules[l.APPNEXUS])
          try {
            var r = null
            switch (t) {
              case a.Ad_Video_Start:
                r = o.START
                break
              case a.Ad_Stopped:
              case a.Ad_Skipped:
                r = o.STOP
                break
              case a.Ad_Paused:
                r = o.PAUSE
                break
              case a.Ad_Playing:
                r = o.RESUME
                break
              case a.Ad_Click_Thru:
                r = o.CLICK
                break
              case a.Ad_Size_Change:
              case a.Ad_Expanded_Change:
              case a.Ad_User_Minimize:
                ;(i = null !== i ? i : this.getNewViewMode()),
                  null !== i &&
                    this._viewabilityModules[l.APPNEXUS].onViewModeChange(i)
                break
              case a.Ad_Volume_Change:
                ;(e = null !== e ? e : this.getNewVolume()),
                  null !== e &&
                    this._viewabilityModules[l.APPNEXUS].onVolumeChange(e)
                break
              case o.START:
              case o.STOP:
              case o.PAUSE:
              case o.RESUME:
              case o.CLICK:
                r = t
                break
              case o.FULL_SCREEN:
              case o.EXIT_FULL_SCREEN:
                ;(i = null !== i ? i : this.getNewViewMode()),
                  null !== i &&
                    this._viewabilityModules[l.APPNEXUS].onViewModeChange(i)
                break
              case o.SOUND_OFF:
              case o.SOUND_ON:
                ;(e = null !== e ? e : this.getNewVolume()),
                  null !== e &&
                    this._viewabilityModules[l.APPNEXUS].onVolumeChange(e)
            }
            null !== r && this._viewabilityModules[l.APPNEXUS].notifyEvent(r)
          } catch (s) {
            this.log(
              n.ERROR,
              "'notifyEvent' failed for event '" +
                t +
                "' with MODULE.APPNEXUS: " +
                s.message,
              s.stack
            )
          }
        if (
          this._viewabilityModules[l.MOAT_ANALYTICS] ||
          this._viewabilityModules[l.MOAT_ETMP]
        ) {
          var d = null
          switch (t) {
            case o.START:
              d = a.Ad_Video_Start
              break
            case o.STOP:
              d = a.Ad_Stopped
              break
            case o.PAUSE:
              d = a.Ad_Paused
              break
            case o.RESUME:
              d = a.Ad_Playing
              break
            case o.FULL_SCREEN:
            case o.EXIT_FULL_SCREEN:
              ;(i = null !== i ? i : this.getNewViewMode()),
                null !== i && (d = a.Ad_Expanded_Change)
              break
            case o.CLICK:
              d = a.Ad_Click_Thru
              break
            case o.SOUND_OFF:
            case o.SOUND_ON:
              ;(e = null !== e ? e : this.getNewVolume()),
                null !== e && (d = a.Ad_Volume_Change)
              break
            case a.Ad_Loaded:
            case a.Ad_Started:
            case a.Ad_Stopped:
            case a.Ad_Skipped:
            case a.Ad_Skippable_State_Change:
            case a.Ad_Linear_Change:
            case a.Ad_Duration_Change:
            case a.Ad_Remaining_Time_Change:
            case a.Ad_Impression:
            case a.Ad_Video_Start:
            case a.Ad_Video_First_Quartile:
            case a.Ad_Video_Midpoint:
            case a.Ad_Video_Third_Quartile:
            case a.Ad_Video_Complete:
            case a.Ad_Click_Thru:
            case a.Ad_Interaction:
            case a.Ad_User_Accept_Invitation:
            case a.Ad_User_Close:
            case a.Ad_Paused:
            case a.Ad_Playing:
            case a.Ad_Log:
            case a.Ad_Error:
              d = t
              break
            case a.Ad_Volume_Change:
              ;(e = null !== e ? e : this.getNewVolume()), null !== e && (d = t)
              break
            case a.Ad_Size_Change:
            case a.Ad_Expanded_Change:
            case a.Ad_User_Minimize:
            case o.EXIT_FULL_SCREEN:
              ;(i = null !== i ? i : this.getNewViewMode()),
                null !== i && (d = t)
          }
          try {
            null !== d &&
              this._viewabilityModules[l.MOAT_ANALYTICS] &&
              this._viewabilityModules[l.MOAT_ANALYTICS].notifyVPAIDEvent(d)
          } catch (s) {
            this.log(
              n.ERROR,
              "'notifyEvent' failed for event '" +
                d +
                "' with MODULE.MOAT_ANALYTICS: ",
              s
            )
          }
          try {
            null !== d &&
              this._viewabilityModules[l.MOAT_ETMP] &&
              this._viewabilityModules[l.MOAT_ETMP].notifyVPAIDEvent(d)
          } catch (s) {
            this.log(
              n.ERROR,
              "'notifyEvent' failed for event '" +
                d +
                "' with MODULE.MOAT_ETMP: ",
              s
            )
          }
        }
        null !== e && (this.lastKnownVolume = e),
          null !== i && (this.lastKnownViewMode = i)
      },
      lastKnownVolume: -1,
      getVolume: function () {
        var t = this._service.getVolumeCallback()
        return 'number' == typeof t ? t : null
      },
      getNewVolume: function () {
        var t = this.getVolume()
        return null !== t && t !== this.lastKnownVolume ? t : null
      },
      lastKnownViewMode: d.NORMAL,
      getViewMode: function () {
        var t = this._service.getViewModeCallback()
        if ('string' == typeof t) {
          switch (t) {
            case d.NORMAL:
            case d.FULL_SCREEN:
              break
            default:
              t = d.NORMAL
          }
          return t
        }
        return null
      },
      getNewViewMode: function () {
        var t = this.getViewMode()
        return null !== t && t !== this.lastKnownViewMode ? t : null
      }
    }
  },
  function (t, e, i) {
    var r = i(5).LOG_LEVEL,
      s = i(5).VIEW_MODE,
      n = {
        NO_VIEWABILITY_DATA: 100,
        MISSING_MANDATORY_PARAMETER_JS: 101,
        FAILED_TO_LOAD_VIEWABILITY_JS: 102,
        INITIALIZATION_FAILED: 103,
        MISSING_MANDATORY_PARAMETER_CB: 104,
        MISSING_MANDATORY_PARAMETER_RDCB: 105,
        MISSING_MANDATORY_PARAMETER_VC: 106
      },
      o = function (t, e, i, s, o, a, d) {
        'use strict'
        if (
          ((this.contextKey = s),
          (this.service = d || {}),
          (this.adUID =
            'WR_' + new Date().getTime() + Math.round(1e3 * Math.random())),
          (this.viewabilityMeasurementActive = !0),
          (this.viewabilityData = this.decodePayload(t)),
          !this.viewabilityData)
        )
          return void (this.viewabilityMeasurementActive = !1)
        if (
          this.contextKey &&
          '' !== this.contextKey &&
          (this.log(
            r.INFO,
            'contextKey is set in this app, checking contextKey in viewability config'
          ),
          !this.viewabilityData.hasOwnProperty('contextKey') ||
            this.viewabilityData.contextKey.indexOf(this.contextKey) === -1)
        )
          return (
            this.log(
              r.INFO,
              "contextKey doesn't match, disabling viewability measurement"
            ),
            void (this.viewabilityMeasurementActive = !1)
          )
        var l = ''
        try {
          'object' == typeof e
            ? ((this.videoNodeDocument = e.ownerDocument),
              (this.videoNodeWindow =
                this.videoNodeDocument.defaultView ||
                this.videoNodeDocument.videoNodeWindow),
              '' === e.id && (e.id = 'an_video_' + this.adUID),
              (l = e.id))
            : ((l = e),
              (this.videoNodeDocument = document),
              (this.videoNodeWindow = window))
        } catch (u) {
          ;(this.videoNodeDocument = document), (this.videoNodeWindow = window)
        }
        var c = {}
        'function' == typeof this.service.videoElementsCallback &&
          (c = this.service.videoElementsCallback()),
          (this.videoInfo = this.decodeVideoInfos(i))
        var h = {
          DomID: l,
          adUID: this.adUID,
          Duration: this.videoInfo.duration,
          Payload: t,
          Dimension: { w: this.videoInfo.w, h: this.videoInfo.h },
          Position: { x: this.videoInfo.x, y: this.videoInfo.y }
        }
        'undefined' != typeof c.videoElement &&
          (h.videoElement = c.videoElement),
          'undefined' != typeof c.videoContainer &&
            (h.videoContainer = c.videoContainer),
          this.log(r.INFO, 'ANVideoViewabilityTracker start with parameters', h)
        try {
          if ('undefined' == typeof this.videoNodeWindow.anxVVAPICache) {
            this.videoNodeWindow.anxVVAPICache = {
              events: Array(),
              init: Array()
            }
            var p = this.videoNodeDocument.createElement('script')
            ;(p.type = 'text/javascript'),
              (p.async = !0),
              (p.src = this.viewabilityData.vjs),
              p.readyState &&
                (p.onreadystatechange = function () {
                  ;('loaded' != p.readyState && 'complete' != p.readyState) ||
                    (p.onreadystatechange = null)
                }),
              (p.onerror = function () {
                this.log(r.DEBUG, 'script load onerror'),
                  this.error(
                    n.FAILED_TO_LOAD_VIEWABILITY_JS,
                    'ANVideoViewabilityTracker failed to load viewability script (' +
                      p.src +
                      ').'
                  ),
                  (this.viewabilityMeasurementActive = !1)
              }.bind(this))
            var f = this.videoNodeDocument.getElementsByTagName('head')[0]
            f.appendChild(p)
          }
        } catch (u) {
          this.error(n.INITIALIZATION_FAILED, {
            message: 'ANVideoViewabilityTracker initialization failed',
            exception: u
          })
        }
        if (
          (this.extractVersionModule(this.viewabilityData),
          'undefined' == typeof this.videoNodeWindow.anxVVAPI)
        ) {
          var g = {
            a: this.adUID,
            params: this.viewabilityData.viewParams,
            id: l,
            v: this.VIEWABILITY_MODULE_VERSION,
            dur: this.videoInfo.duration,
            w: this.videoInfo.w,
            h: this.videoInfo.h,
            x: this.videoInfo.x,
            y: this.videoInfo.y
          }
          'undefined' != typeof c.videoElement &&
            (g.videoElement = c.videoElement),
            'undefined' != typeof c.videoContainer &&
              (g.videoContainer = c.videoContainer),
            this.videoNodeWindow.anxVVAPICache.init.push(g)
        } else
          this.videoNodeWindow.anxVVAPI.initializeFromParams(
            this.viewabilityData.viewParams,
            l,
            this.adUID,
            this.VIEWABILITY_MODULE_VERSION,
            this.videoInfo.duration,
            this.videoInfo.w,
            this.videoInfo.h,
            this.videoInfo.x,
            this.videoInfo.y,
            c.videoElement,
            c.videoContainer
          )
        null !== o && this.onVolumeChange(o),
          null !== a && this.onViewModeChange(a)
      }
    ;(o.prototype = {
      VIEWABILITY_MODULE_VERSION: 1,
      log: function (t, e, i) {
        'use strict'
        if (this.service.loggerCallback)
          try {
            this.service.loggerCallback(t, '[AppNexus] ' + e, i)
          } catch (r) {
            console.trace(r)
          }
      },
      error: function (t, e, i) {
        'use strict'
        if (this.service.errorCallback)
          try {
            this.service.errorCallback(t, e, i)
          } catch (s) {
            console.trace(s)
          }
        else this.log(r.ERROR, 'ERR-' + t + ': ' + e, i)
      },
      parseUrl: function (t) {
        'use strict'
        var e = { http: '', params: '' }
        try {
          if (t && 'string' == typeof t) {
            var i = t.split(/:/)
            if (
              (2 === i.length && ((t = i[1]), (e.http = i[0])),
              (i = t.split(/\?/)),
              2 === i.length
                ? (e.params = i[1])
                : ('' === e.http || '//' !== t.substr(0, 2)) &&
                  t.indexOf('=') > -1 &&
                  (e.params = i[0]),
              '' !== e.params)
            ) {
              ;(i = e.params.split(/&/)), (e.params = {})
              for (var s in i) {
                var n = i[s].split(/=/)
                if (2 === n.length) e.params[n[0]] = decodeURIComponent(n[1])
                else if (n.length > 2) {
                  for (var o = '', a = 1; a < n.length; a++) o += '=' + n[a]
                  e.params[n[0]] = decodeURIComponent(o.substr(1))
                } else e.params[n[0]] = ''
              }
            }
          }
        } catch (d) {
          this.log(r.DEBUG, d)
        }
        return e
      },
      parseConfigs: function (t) {
        'use strict'
        try {
          if (t && 'string' == typeof t) {
            '<![CDATA[' === t.substring(0, 9) &&
              (t = t.substring(9, t.length - 3))
            var e = this.parseUrl(t)
            if (e.hasOwnProperty('params') && '' !== e.params) return e.params
          }
        } catch (i) {
          return (
            this.log(r.DEBUG, 'Error parsing config:' + t),
            void this.log(r.DEBUG, i)
          )
        }
        return (
          this.error(n.NO_VIEWABILITY_DATA, 'No viewability data provided'),
          null
        )
      },
      createViewabilityConfig: function (t) {
        var e,
          i = [],
          r = !1
        for (e in t) {
          var s = t[e]
          switch (e) {
            case 'cb':
              s ||
                (this.error(
                  n.MISSING_MANDATORY_PARAMETER_CB,
                  'Missing mandatory parameter: ' + e + '.'
                ),
                (r = !0))
              break
            case 'rdcb':
              s ||
                (this.error(
                  n.MISSING_MANDATORY_PARAMETER_RDCB,
                  'Missing mandatory parameter: ' + e + '.'
                ),
                (r = !0))
              break
            case 'vc':
              s ||
                (this.error(
                  n.MISSING_MANDATORY_PARAMETER_VC,
                  'Missing mandatory parameter: ' + e + '.'
                ),
                (r = !0))
              var o = s.split(/;/)
              i.push('vc=' + encodeURIComponent(o[0]))
              for (var a = 1; a < o.length; a++) i.push(o[a])
              continue
          }
          i.push(e + '=' + encodeURIComponent(s))
        }
        return r === !0 ? null : (i.sort(), i.join('&'))
      },
      decodePayload: function (t) {
        'use strict'
        var e = this.parseConfigs(t)
        if (!e) return null
        var i = this.createViewabilityConfig(e)
        if (!i) return null
        var r = { viewParams: i }
        return e.hasOwnProperty('vjs') && '' !== e.vjs
          ? ((r.vjs = e.vjs),
            e.hasOwnProperty('vid_context') && (r.contextKey = e.vid_context),
            r)
          : (this.error(
              n.MISSING_MANDATORY_PARAMETER_JS,
              'no viewability script js to load'
            ),
            (this.viewabilityMeasurementActive = !1),
            null)
      },
      decodeVideoInfos: function (t) {
        'use strict'
        var e = { duration: 0, w: 0, h: 0, x: 0, y: 0 }
        return (
          ('number' == typeof t.duration || t.duration > 0) &&
            (e.duration = t.duration),
          ('number' == typeof t.w || t.w > 0) && (e.w = t.w),
          ('number' == typeof t.h || t.h > 0) && (e.h = t.h),
          ('number' == typeof t.x || t.x > 0) && (e.x = t.x),
          ('number' == typeof t.y || t.y > 0) && (e.y = t.y),
          e
        )
      },
      extractVersionModule: function (t) {
        'use strict'
        if (t) {
          var e = /.+\/(\d+)\/trk\.js/,
            i = e.exec(t.viewJS)
          i && i[1] && (this.VIEWABILITY_MODULE_VERSION = i[1])
        }
      },
      notifyEvent: function (t) {
        'use strict'
        if (!this.viewabilityMeasurementActive)
          return void this.log(
            r.INFO,
            'notifyEvent cancelled because viewability is not active'
          )
        switch (
          (this.log(r.INFO, 'notifyEvent: [' + t + ']'),
          'an_outstream' == this.contextKey &&
            'sound_off' == t &&
            (t = 'sound_on'),
          t)
        ) {
          case 'fullscreen':
            t = 'expand'
            break
          case 'exitFullscreen':
            t = 'collapse'
            break
          case 'expand':
          case 'collapse':
            return
        }
        var e = new Date().getTime()
        try {
          if ('undefined' == typeof this.videoNodeWindow.anxVVAPI) {
            var i = { a: this.adUID, c: t, d: e }
            this.videoNodeWindow.anxVVAPICache.events.push(i)
          } else this.videoNodeWindow.anxVVAPI.notifyEvent(this.adUID, t)
        } catch (s) {
          this.log(r.DEBUG, { message: 'notifyEvent failed', exception: s })
        }
      },
      lastKnownVolume: -1,
      onVolumeChange: function (t) {
        'use strict'
        return this.viewabilityMeasurementActive
          ? (t > 1 && (t = 1),
            t < 0 && (t = 0),
            void (
              t !== this.lastKnownVolume &&
              (t > 0
                ? this.notifyEvent('sound_on')
                : this.notifyEvent('sound_off'),
              (this.lastKnownVolume = t))
            ))
          : void this.log(
              r.INFO,
              'onVolumeChange cancelled because viewability is not active'
            )
      },
      onViewModeChange: function (t) {
        'use strict'
        return this.viewabilityMeasurementActive
          ? void (t == s.NORMAL
              ? this.notifyEvent('exitFullscreen')
              : this.notifyEvent('fullscreen'))
          : void this.log(
              r.INFO,
              'onViewModeChange cancelled because viewability is not active'
            )
      }
    }),
      (t.exports = o),
      (t.exports.LOG_LEVEL = r),
      (t.exports.ERROR_CODE = n)
  },
  function (t, e) {
    var i = { DEBUG: 'debug', INFO: 'info', ERROR: 'error' },
      r = {
        START: 'start',
        STOP: 'stop',
        PAUSE: 'pause',
        RESUME: 'resume',
        FULL_SCREEN: 'fullscreen',
        EXIT_FULL_SCREEN: 'exitFullscreen',
        CLICK: 'click',
        SOUND_OFF: 'sound_off',
        SOUND_ON: 'sound_on'
      },
      s = {
        Ad_Loaded: 'AdLoaded',
        Ad_Started: 'AdStarted',
        Ad_Stopped: 'AdStopped',
        Ad_Skipped: 'AdSkipped',
        Ad_Skippable_State_Change: 'AdSkippableStateChange',
        Ad_Size_Change: 'AdSizeChange',
        Ad_Linear_Change: 'AdLinearChange',
        Ad_Duration_Change: 'AdDurationChange',
        Ad_Expanded_Change: 'AdExpandedChange',
        Ad_Remaining_Time_Change: 'AdRemainingTimeChange',
        Ad_Volume_Change: 'AdVolumeChange',
        Ad_Impression: 'AdImpression',
        Ad_Video_Start: 'AdVideoStart',
        Ad_Video_First_Quartile: 'AdVideoFirstQuartile',
        Ad_Video_Midpoint: 'AdVideoMidpoint',
        Ad_Video_Third_Quartile: 'AdVideoThirdQuartile',
        Ad_Video_Complete: 'AdVideoComplete',
        Ad_Click_Thru: 'AdClickThru',
        Ad_Interaction: 'AdInteraction',
        Ad_User_Accept_Invitation: 'AdUserAcceptInvitation',
        Ad_User_Minimize: 'AdUserMinimize',
        Ad_User_Close: 'AdUserClose',
        Ad_Paused: 'AdPaused',
        Ad_Playing: 'AdPlaying',
        Ad_Log: 'AdLog',
        Ad_Error: 'AdError'
      },
      n = { NORMAL: 'normal', FULL_SCREEN: 'fullscreen' },
      o = { APPNEXUS: 1, MOAT_ANALYTICS: 2, MOAT_ETMP: 3 }
    ;(t.exports.LOG_LEVEL = i),
      (t.exports.VIEW_EVENT = r),
      (t.exports.VPAID_EVENT = s),
      (t.exports.VIEW_MODE = n),
      (t.exports.MODULE = o)
  },
  function (t, e, i) {
    var r = i(5).LOG_LEVEL,
      s = { BAD_CONFIG: 1, LIBRARY_LOADING_ERROR: 2, INITIALIZATION_ERROR: 3 },
      n = {
        ANALYTICS: {
          id: 1,
          name: 'analytics',
          parameters: {
            advid: 'level1',
            cpgid: 'level2',
            cpid: 'level3',
            crid: 'level4',
            buyid: 'zMoatMBRID',
            selid: 'zMoatSELL',
            pubid: 'zMoatPUB',
            tagid: 'zMoatTAG'
          }
        },
        ETMP: {
          id: 2,
          name: 'ETMP',
          parameters: {
            buyid: 'level1',
            advid: 'level2',
            cpgid: 'level3',
            cpid: 'level4',
            selid: 'slicer1',
            pubid: 'slicer2',
            tagid: 'slicer3',
            crid: 'zMoatCRID',
            aet: 'zMoatAET',
            aecb: 'zMoatAECB'
          }
        }
      },
      o = { partnerCode: '' },
      a = function (t, e, i, o, a, d, l) {
        'use strict'
        ;(this.debug = l),
          (this.hasError = !1),
          (this.config = {}),
          (this.service = d || {}),
          (this.modeName = '-')
        var u = { container: i, param: o, mode: a, service: d }
        for (var c in u)
          u.hasOwnProperty(c) &&
            (u[c] ||
              ((this.hasError = !0),
              this.log(
                r.ERROR,
                "Invalid parameter '" + c + "'='" + u[c] + "'"
              )))
        if (a)
          switch (a.id) {
            case n.ANALYTICS.id:
            case n.ETMP.id:
              this.modeName = a.name
              break
            default:
              ;(this.hasError = !0),
                this.log(r.ERROR, "Invalid 'mode' value='" + a.id + "'")
          }
        return d &&
          ((d.loggerCallback && 'function' == typeof d.loggerCallback) ||
            ((this.hasError = !0),
            this.log(r.ERROR, "Service do not implement 'loggerCallback' API")),
          (d.getVolumeCallback && 'function' == typeof d.getVolumeCallback) ||
            ((this.hasError = !0),
            this.log(
              r.ERROR,
              "Service do not implement 'getVolumeCallback' API"
            )),
          !d.errorCallback || 'function' != typeof d.errorCallback)
          ? ((this.hasError = !0),
            void this.log(
              r.ERROR,
              "Service do not implement 'errorCallback' API"
            ))
          : this.hasError
          ? void this.service.errorCallback(s.BAD_CONFIG, {
              mode: this.modeName,
              message: 'Invalid parameter'
            })
          : ((this.container = i),
            (this.duration = t),
            (this.mediaUrl = e),
            (this.config = this.parseParams(o, a)),
            (this.moatApiInstance = null),
            this.log(r.INFO, 'MoatViewabilityTracker start with parameters', {
              Dom: this.container ? this.container.id : 'undefined',
              mediaUrl: this.mediaUrl,
              duration: this.duration,
              config: this.config
            }),
            void (this.config && this.config.hasOwnProperty('partnerCode')
              ? (this.init(), this.log(r.DEBUG, 'Module initialized'))
              : (this.log(
                  r.ERROR,
                  'Unable to initialize module (missing config)'
                ),
                this.service.errorCallback(s.BAD_CONFIG, {
                  mode: this.modeName,
                  message: 'Unable to initialize module (missing config)',
                  config: o
                }))))
      }
    ;(a.prototype = {
      log: function (t, e, i) {
        'use strict'
        if (this.service.loggerCallback)
          try {
            this.service.loggerCallback(
              t,
              '[MOAT/' + this.modeName + '] ' + e,
              i
            )
          } catch (r) {
            this.debug && console.trace(r)
          }
        else this.debug && console.log(t + ': ' + e, i)
      },
      init: function () {
        'use strict'
        try {
          ;(this.moatApiInstance = this.initMoatTracking(
            this.container,
            this.config.moatConfig,
            this.duration,
            this.config.partnerCode,
            this.mediaUrl
          )),
            this.moatApiInstance
              ? this.log(r.DEBUG, 'Module loading done')
              : (this.log(r.ERROR, 'Module loading failed'),
                this.service.errorCallback(s.LIBRARY_LOADING_ERROR, {
                  mode: this.modeName,
                  message: 'Module loading failed'
                }))
        } catch (t) {
          this.log(r.ERROR, 'Module initialization failed:', t),
            this.service.errorCallback(s.INITIALIZATION_ERROR, {
              mode: this.modeName,
              message: t.message
            })
        }
      },
      notifyVPAIDEvent: function (t) {
        'use strict'
        this.moatApiInstance &&
          (this.log(r.INFO, 'notifyVPAIDEvent: [' + t + ']'),
          this.moatApiInstance.dispatchEvent({
            type: t,
            adVolume: this.service.getVolumeCallback()
          }))
      },
      parseParams: function (t, e) {
        'use strict'
        if (
          (this.debug &&
            this.log(r.DEBUG, 'Received params', { params: t, mode: e.name }),
          t && 'string' == typeof t)
        ) {
          var i = {},
            s = t.split(/&/)
          for (var o in s) {
            var a = s[o].split(/=/)
            2 == a.length ? (i[a[0]] = a[1]) : (i[a[0]] = '')
          }
          var d = !0,
            l = { partnerCode: null, mode: e, moatConfig: {} },
            u = 'partnercode'
          this.sanityCheck(u, i)
            ? (l.partnerCode = i[u])
            : e.id == n.ANALYTICS.id
            ? ((l.partnerCode = 'appnexusvpaidvideo274177211956'),
              (l.moatConfig.slicer1 = ''),
              (l.moatConfig.slicer2 = ''))
            : ((d = !1),
              this.log(
                r.ERROR,
                "Invalid parameter detected '" + u + "'='" + i[u] + "'"
              ))
          var u = 'mbrid'
          this.sanityCheck(u, i) && (i.buyid = i[u])
          for (
            var c = {}, h = Object.keys(e.parameters), p = 0;
            p < h.length;
            p++
          )
            c[h[p]] = e.parameters[h[p]]
          h = Object.keys(c)
          for (var f = 0; f < h.length; f++) {
            var g = h[f],
              m = c[g]
            this.sanityCheck(g, i)
              ? (l.moatConfig[m] = decodeURIComponent(i[g]))
              : (this.log(
                  r.ERROR,
                  "Invalid parameter detected: '" +
                    g +
                    "', value='" +
                    i[g] +
                    "'"
                ),
                (d = !1))
          }
          if (d) return l
        }
        return this.log(r.ERROR, 'Invalid parameters received/parsed'), null
      },
      sanityCheck: function (t, e) {
        'use strict'
        return e.hasOwnProperty(t) && '' !== e[t]
      },
      initMoatTracking: function (t, e, i, r, s, n) {
        var o = document.createElement('script'),
          a = []
        ;(e = {
          adData: { ids: e, duration: i, url: s },
          dispatchEvent: 
          clientCallback: n
        }),
          (i = '_moatApi' + Math.floor(1e8 * Math.random()))
        var d, l
        try {
          ;(d = t.ownerDocument), (l = d.defaultView || d.parentWindow)
        } catch (u) {
          ;(d = document), (l = window)
        }
        return (
          (l[i] = e),
          (o.type = 'text/javascript'),
          t && t.insertBefore(o, t.childNodes[0] || null),
          (o.src = 'https://z.moatads.com/' + r + '/moatvideo.js#' + i),
          e
        )
      }
    }),
      (t.exports = a),
      (t.exports.LOG_LEVEL = r),
      (t.exports.ERROR_CODE = s),
      (t.exports.MODE = n),
      (t.exports.MODE_PARAMETERS = o)
  },
  function (t, e) {
    for (
      var i = 0,
        r = 1,
        s = 2,
        n = 3,
        o = 4,
        a = {
          Xml_Parsing_Error: [100, i],
          Vast_Validation_Error: [101, i],
          Ad_Type_Error: [200, i],
          General_Wrapper_Error: [300, i],
          Missing_Vast_Error: [303, i],
          General_Linear_Error: [400, i],
          Media_File_Mime_Type_Error: [403, i],
          Media_File_Display_Error: [405, i],
          Init_Ad: [1200, n],
          Missing_AdParameters_Error: [1211, i],
          Json_Parsing_Error: [1212, i],
          Json_Empty_Error: [1213, i],
          No_Ads_Error: [1214, i],
          Missing_Vast_Config_Error: [1215, i],
          Vast_Parser_Error: [1220, i],
          Core_Js_Error: [1300, r],
          Missing_View_Config_Error: [1302, r],
          Viewability_Element_Error: [1303, r],
          Moat_Error: [1310, r],
          Moat_Config_Error: [1311, r],
          Moat_Loading_Error: [1312, r],
          ClickThru_Error: [1500, r],
          Url_Sending_Error: [1501, s],
          Pixel_Sending_Error: [1502, s],
          Icon_ClickThru_Error: [1505, r],
          Proxy_HTML5_Not_Loaded: [1600, i],
          Proxy_Script_Loading_Error: [1601, i],
          JS_Loading_Interface_Error: [1610, i],
          JS_Starting_Interface_Error: [1620, i],
          JS_Playing_Interface_Error: [1630, r],
          Video_Load_Error: [1802, i],
          Video_Volume_Error: [1803, r],
          Video_Play_Error: [1804, i],
          Video_Pause_Error: [1805, r],
          Video_Remove_Event_Error: [1806, r],
          Video_Metadata_Error: [1807, i],
          Video_Timing_Error: [1808, r],
          Video_Tag_Loading_Default_Error: [1810, i],
          Video_Tag_Loading_Abort_Error: [1811, i],
          Video_Tag_Stalled_Error: [1812, s],
          Video_Network_Error: [1813, s],
          Video_Src_Not_Supported_Error: [1814, i],
          Video_Tag_Starting_Default_Error: [1820, i],
          Video_Tag_Starting_Abort_Error: [1821, i],
          Video_Tag_Playing_Default_Error: [1830, i],
          Video_Tag_Playing_Abort_Error: [1831, i],
          Video_Network_Error_While_Playing: [1833, s],
          Video_Src_Not_Supported_Error_While_Playing: [1834, s],
          Media_File_Display_Error_While_Playing: [1835, s],
          Vast_OMID_AdVerifications_Node_Present: [1900, o],
          Vast_OMID_Extensions_AdVerifications_Node_Present: [1901, o],
          Vast_OMID_AdVerification_APIFramework_Not_OMID: [1902, o],
          Multiple_Vast_Ads: [1910, o],
          WhiteOps_Dropped: [1911, o],
          External_Loading_Error: [2300, i],
          External_Starting_Error: [2400, i],
          External_Playing_Error: [2500, i],
          External_Dispose_Error: [2600, i]
        },
        d = Object.keys(a),
        l = 0;
      l < d.length;
      l++
    ) {
      var u = a[d[l]]
      ;(a[d[l]] = (function (t) {
        return function (e) {
          return { code: t[0], severity: t[1], message: e || '' }
        }
      })(a[d[l]])),
        (a[d[l]].code = u[0]),
        (a[d[l]].severity = u[1])
    }
    ;(t.exports = a),
      (t.exports.SEVERITY = { FATAL: i, ERROR: r, WARN: s, INFO: n, DEBUG: o }),
      (t.exports.equals = 
  },
  function (t, e, i) {
    var r = i(9),
      s = function (t, e) {
        'use strict'
        if (
          ((this.name = { package: t, module: e }),
          (this.level = {
            debug: !1,
            info: !1,
            warn: !1,
            error: !1,
            fatal: !1
          }),
          (this.levelNames = {
            debug: 'debug',
            info: 'info',
            warn: 'warn',
            error: 'error',
            fatal: 'fatal',
            none: 'none'
          }),
          (this.logLevel =
            r.getANWrapperParameter('wrapperLogLevel') || this.levelNames.none),
          this.logLevel !== this.levelNames.none)
        )
          switch (
            (this.levelNames.hasOwnProperty(this.logLevel) ||
              (this.logLevel = this.levelNames.none),
            this.logLevel)
          ) {
            case this.levelNames.debug:
              this.level.debug = !0
            case this.levelNames.info:
              this.level.info = !0
            case this.levelNames.warn:
              this.level.warn = !0
            case this.levelNames.error:
              this.level.error = !0
            case this.levelNames.fatal:
              this.level.fatal = !0
          }
      }
    ;(s.prototype = {
      debug: function (t, e) {
        this.level.debug &&
          this.log(this.levelNames.debug, Date.now(), t, e || {})
      },
      info: function (t, e) {
        this.level.info &&
          this.log(this.levelNames.info, Date.now(), t, e || {})
      },
      warn: function (t, e) {
        this.level.warn &&
          this.log(this.levelNames.warn, Date.now(), t, e || {})
      },
      error: function (t, e) {
        this.level.error &&
          this.log(this.levelNames.error, Date.now(), t, e || {})
      },
      fatal: function (t, e) {
        this.level.fatal &&
          this.log(this.levelNames.fatal, Date.now(), t, e || {})
      },
      log: function (t, e, i, r) {
        try {
          'undefined' != typeof window && window && window.top
            ? window.top.postMessage(
                JSON.stringify(
                  {
                    origin: 'devnxs',
                    id: e,
                    loggerName: this.name['package'],
                    loggerShortName: this.name.module,
                    level: t,
                    message: i,
                    parameters: r,
                    time: e
                  },
                  function (t, e) {
                    if (void 0 === e) return 'undefined'
                    if (e && 'object' == typeof e) {
                      if (
                        'number' == typeof e.nodeType &&
                        'string' == typeof e.nodeName
                      )
                        return { type: e.nodeName, id: e.id }
                      if (
                        'undefined' != typeof e.duration &&
                        'undefined' != typeof e.ended &&
                        'undefined' != typeof e.paused &&
                        'undefined' != typeof e.playbackRate &&
                        'undefined' != typeof e.src &&
                        'function' == typeof e.canPlayType
                      )
                        return {
                          type: 'fakeHTMLVideolement',
                          id: e.id || void 0
                        }
                    }
                    return e
                  }
                ),
                '*'
              )
            : console.error(
                'Unable to postMessage (window[.top] no longer available. Message: [' +
                  this.name.module +
                  '] ' +
                  i
              )
        } catch (s) {
          console.error('Error during postMessage:' + s)
        }
      }
    }),
      (s.createLogger = ,
      (t.exports = s)
  },
  function (t, e) {
    t.exports = {
      getANWrapperParameter: function (t) {
        var e = null
        try {
          for (
            var i = document.getElementsByTagName('script'), r = 0;
            r < i.length;
            r++
          )
            i[r].src.indexOf('anwrapper') !== -1 &&
              i[r].src
                .split('?')[1]
                .split('&')
                .forEach( this)
        } catch (s) {}
        return e
      }
    }
  },
  function (t, e, i) {
    var r = i(11),
      s = i(12),
      n = i(8).createLogger('js.vpaidEvent.VPAIDEvent', 'VPAIDEvent'),
      o = function () {
        'use strict'
        ;(this.tagLabel = 'an_context_tag'),
          (this.tagWord = 'an_tag_'),
          (this.tagCount = 0),
          (this.events = {
            Ad_Loaded: [],
            Ad_Started: [],
            Ad_Stopped: [],
            Ad_Skipped: [],
            Ad_Skippable_State_Change: [],
            Ad_Size_Change: [],
            Ad_Linear_Change: [],
            Ad_Duration_Change: [],
            Ad_Expanded_Change: [],
            Ad_Remaining_Time_Change: [],
            Ad_Volume_Change: [],
            Ad_Impression: [],
            Ad_Video_Start: [],
            Ad_Video_First_Quartile: [],
            Ad_Video_Midpoint: [],
            Ad_Video_Third_Quartile: [],
            Ad_Video_Complete: [],
            Ad_Click_Thru: [],
            Ad_Interaction: [],
            Ad_User_Accept_Invitation: [],
            Ad_User_Minimize: [],
            Ad_User_Close: [],
            Ad_Paused: [],
            Ad_Playing: [],
            Ad_Log: [],
            Ad_Error: []
          }),
          (this.onlyOnce = {
            Ad_Loaded: !1,
            Ad_Started: !1,
            Ad_Stopped: !1,
            Ad_Skipped: !1,
            Ad_Skippable_State_Change: !1,
            Ad_Linear_Change: !1,
            Ad_Impression: !1,
            Ad_Video_Start: !1,
            Ad_Video_First_Quartile: !1,
            Ad_Video_Midpoint: !1,
            Ad_Video_Third_Quartile: !1,
            Ad_Video_Complete: !1,
            Ad_Click_Thru: !1,
            Ad_User_Close: !1,
            Ad_Error: !1
          })
      }
    ;(o.prototype = {
      subscribe: function (t, e, i) {
        'use strict'
        if ('function' != typeof t || 'string' != typeof e)
          return void n.warn('subscribe', {
            message: 'unsupported arguments type'
          })
        if ('object' != typeof i && null !== i && void 0 !== i)
          return void n.warn('subscribe', {
            message: 'cannot register : bad context for ' + e
          })
        var r = s.toEventNameSyntax(e)
        if (r in this.events) {
          this.tagContext(i)
          var o = this.findContext(i, t, this.events[r]),
            a = { context: i || null, callback: t }
          o === !1
            ? this.events[r].push(a)
            : n.warn('Event ' + e + ' already set for this context')
        } else n.warn('subscribe', { message: 'unknown eventName : ' + e })
      },
      unsubscribe: function (t, e, i) {
        'use strict'
        if ('function' != typeof t || 'string' != typeof e)
          return void n.warn('unsubscribe', {
            message: 'unsupported arguments type'
          })
        var r = s.toEventNameSyntax(e)
        if (r in this.events) {
          var o = this.findContext(i, t, this.events[r])
          o !== !1
            ? this.events[r].splice(o, 1)
            : n.warn(
                'Event ' +
                  e +
                  ' already removed or not set for this context, or unknown context'
              )
        } else n.warn('unsubscribe', { message: 'unknown eventName : ' + e })
      },
      tagContext: function (t) {
        'use strict'
        t &&
          !t.hasOwnProperty(this.tagLabel) &&
          ((t[this.tagLabel] = this.tagWord + this.tagCount), this.tagCount++)
      },
      findContext: function (t, e, i) {
        'use strict'
        if (
          null !== i &&
          'object' == typeof i &&
          i.length >= 0 &&
          'function' == typeof e
        )
          for (
            var r = t && t.hasOwnProperty(this.tagLabel), s = 0;
            s < i.length;
            s++
          )
            if (i[s].callback.toString() === e.toString())
              if (r) {
                if (
                  i[s].context &&
                  i[s].context[this.tagLabel] === t[this.tagLabel]
                )
                  return s
              } else if (!i[s].context) return s
        return !1
      },
      sendEvent: function (t, e, i, o) {
        'use strict'
        var a = s.toEventNameSyntax(t)
        if (
          (a in this.onlyOnce && (this.onlyOnce[a] = !0),
          a in this.events && 0 !== this.events[a].length)
        ) {
          switch (
            (t != r.Ad_Remaining_Time_Change &&
              n.info('sendEvent', { event: t }),
            t)
          ) {
            case r.Ad_Click_Thru:
              this.events[a].forEach(function (t) {
                setTimeout( 0)
              })
              break
            case r.Ad_Interaction:
              this.events[a].forEach(function (t) {
                setTimeout(function () {
                  t.callback.call(t.context, e)
                }, 0)
              })
              break
            case r.Ad_Log:
              this.events[a].forEach(function (t) {
                setTimeout( 0)
              })
              break
            case r.Ad_Error:
              this.events[a].forEach(function (t) {
                setTimeout( 0)
              })
              break
            default:
              this.events[a].forEach(
          }
          return !0
        }
        return (
          t != r.Ad_Remaining_Time_Change &&
            n.debug('sendEvent', { notSubscribe: t }),
          !1
        )
      },
      alreadySent: function (t) {
        'use strict'
        var e = s.toEventNameSyntax(t)
        return e in this.onlyOnce && this.onlyOnce[e]
      }
    }),
      (t.exports = o)
  },
  
  function (t, e) {
    t.exports = {
      toEventNameSyntax: function (t) {
        'use strict'
        return (
          !('string' != typeof t || !t.match(/^([A-Z][a-z]+)+$/g)) &&
          t.replace(/([a-z])([A-Z])/g, '$1_$2')
        )
      },
      validateAdClickThruData: function (t, e, i) {
        'use strict'
        return 'string' != typeof t ||
          (0 !== t.indexOf('http') && 0 !== t.indexOf('//') && '' !== t)
          ? ['', '', !1]
          : 'boolean' == typeof i
          ? 'string' == typeof e
            ? [t, e, i]
            : [t, '', i]
          : [t, '', !1]
      },
      validateAdInteractionData: function (t) {
        'use strict'
        return 'string' == typeof t ? t : ''
      },
      validateAdLogData: function (t, e) {
        'use strict'
        return 'string' == typeof t ? t : 'string' == typeof e ? e : ''
      },
      validateAdErrorData: function (t, e) {
        'use strict'
        if ('number' == typeof e && 'string' == typeof t) return [t, e]
        if ('number' == typeof t && 'string' == typeof e) {
          var i = e
          return (e = t), [i, e]
        }
        return 'number' == typeof e
          ? ['', e]
          : 'number' == typeof t
          ? ['', t]
          : 'string' == typeof t && t.match(/\d+/)
          ? ((e = parseInt(t.match(/\d+/)[0])), [t, e])
          : 'string' == typeof e && e.match(/\d+/)
          ? ((t = e), (e = parseInt(t.match(/\d+/)[0])), [t, e])
          : ['', 900]
      }
    }
  },
  function (t, e, i) {
    var r = i(14),
      s = i(11),
      n = i(42),
      o = function (t) {
        'use strict'
        ;(this.urls = {}),
          (this.pendingPixelsCount = 0),
          (this.disposeDelay = 50),
          (this.disposeTimeout = null),
          (this.onlyOnce = {
            creativeView: !1,
            start: !1,
            firstQuartile: !1,
            midpoint: !1,
            thirdQuartile: !1,
            complete: !1,
            skip: !1,
            error: !1,
            impression: !1
          }),
          (this.urlSender = new r(this.callback.bind(this))),
          (this.errorCallback = t)
      }
    ;(o.prototype = {
      addTrackingEvent: function (t, e) {
        'use strict'
        t in this.urls
          ? (this.urls[t] = this.urls[t].concat(e))
          : (this.urls[t] = e)
      },
      addTrackingEvents: function (t) {
        'use strict'
        var e = Object.keys(t)
        for (var i in e) this.addTrackingEvent(e[i], t[e[i]])
      },
      notifyTrackingEvent: function (t, e) {
        'use strict'
        var i = []
        switch (t) {
          case s.Ad_Started:
            i.push('creativeView')
            break
          case s.Ad_Skipped:
            i.push('skip')
            break
          case s.Ad_Impression:
            i.push('impression')
            break
          case s.Ad_Video_Start:
            i.push('start')
            break
          case s.Ad_Video_First_Quartile:
            i.push('firstQuartile')
            break
          case s.Ad_Video_Midpoint:
            i.push('midpoint')
            break
          case s.Ad_Video_Third_Quartile:
            i.push('thirdQuartile')
            break
          case s.Ad_Video_Complete:
            i.push('complete')
            break
          case s.Ad_Click_Thru:
            i.push('clickTracking')
            break
          case s.Ad_User_Accept_Invitation:
            i.push('acceptInvitationLinear')
            break
          case s.Ad_User_Close:
            i.push('closeLinear')
            break
          case s.Ad_Paused:
            i.push('pause')
            break
          case s.Ad_Playing:
            i.push('resume')
            break
          case s.Ad_Error:
            i.push('error')
            break
          case 'Mute':
            i.push('mute')
            break
          case 'Unmute':
            i.push('unmute')
            break
          case 'Rewind':
            i.push('rewind')
            break
          case 'Expand':
            i.push('expand'), i.push('fullscreen')
            break
          case 'Collapse':
            i.push('collapse'), i.push('exitFullscreen')
        }
        for (var r in i) {
          var o = !1
          if (
            (i[r] in this.onlyOnce && !this.onlyOnce[i[r]]
              ? ((this.onlyOnce[i[r]] = !0), (o = !0))
              : i[r] in this.onlyOnce || (o = !0),
            o)
          )
            for (var a in this.urls[i[r]]) {
              var d = this.urls[i[r]][a]
              ;(d = n.replaceMacro(d, e)), this.send(d)
            }
        }
      },
      send: function (t) {
        'use strict'
        'about:blank' != t &&
          (this.pendingPixelsCount++, this.urlSender.send(t))
      },
      callback: function (t) {
        'use strict'
        this.pendingPixelsCount--, null !== t && this.errorCallback(t)
      },
      dispose: function (t) {
        'use strict'
        return 0 == this.pendingPixelsCount
          ? void (t.disposeFlags.trackingManager = !0)
          : void (this.disposeTimeout = setInterval(
              function () {
                0 == this.pendingPixelsCount &&
                  ((t.disposeFlags.trackingManager = !0),
                  clearInterval(this.disposeTimeout))
              }.bind(this),
              this.disposeDelay
            ))
      }
    }),
      (t.exports = o)
  },
  function (t, e, i) {
    var r = i(15),
      s = i(7),
      n = i(8).createLogger('js.utils.UrlRequestUtils', 'UrlRequestUtils'),
      o = function (t, e, i) {
        'use strict'
        ;(this.sendingStatus = !1),
          (this.sendingTimeout = 5e3),
          (this.gettingTimeout = 1e4),
          (this.retried = !1),
          (this.url = ''),
          (this.xhrCredentials = !!i),
          (this.validStatus = [200, 204]),
          (this.responseCallback = t),
          (this.debugCallback = e || function () {})
      }
    ;(o.prototype = {
      send: function (t) {
        'use strict'
        try {
          this.sendPixel(t)
        } catch (e) {
          this.responseCallback(s.Url_Sending_Error())
        }
      },
      sendBeacon: function (t) {
        'use strict'
        return !!navigator.sendBeacon && navigator.sendBeacon(t)
      },
      sendXHR: function (t) {
        'use strict'
        ;(this.sendingStatus = !0),
          r.get(
            { url: t, timeout: this.sendingTimeout },
            this.sendXHRCallback.bind(this, t)
          )
      },
      sendXHRCallback: function (t, e, i, r) {
        'use strict'
        ;(this.sendingStatus = !1),
          e
            ? (n.error('xhrCallback', { error: e.message }), this.sendPixel(t))
            : this.validStatus.indexOf(i.statusCode) == -1
            ? (n.error('xhrCallback', { http_status: i.statusCode }),
              this.sendPixel(t))
            : (n.debug('send', { msg: 'send via xhr' }),
              this.responseCallback(0))
      },
      sendPixel: function (t) {
        'use strict'
        n.debug('send', { msg: 'send via pixel' })
        try {
          var e = document.createElement('img')
          ;(e.style.width = '1px'),
            (e.style.height = '1px'),
            (e.onload = function () {
              this.responseCallback(null)
            }.bind(this)),
            (e.onerror = bind(this)),
            (e.src = t),
            document.body.appendChild(e)
        } catch (i) {
          this.responseCallback(s.Pixel_Sending_Error())
        }
      },
      getXHR: function (t) {
        'use strict'
        this.url = t
        var e = !1
        if ('string' == typeof t && '' !== t) {
          var i = t.match(/.*?:\/\/(.*?)\/.*/)
          i && i[1] && (e = i[1].indexOf('adnxs.com') !== -1)
        }
        ;(this.xhrCredentials = e || this.xhrCredentials),
          this.retried && (this.xhrCredentials = !1),
          (this.sendingStatus = !0),
          r.get(
            {
              url: t,
              timeout: this.gettingTimeout,
              withCredentials: this.xhrCredentials
            },
            this.getXHRCallback.bind(this)
          )
      },
      getXHRCallback: function (t, e, i) {
        'use strict'
        ;(this.sendingStatus = !1),
          t || this.validStatus.indexOf(e.statusCode) == -1
            ? (n.error('getXHRCallback', {
                xhrError: !!t,
                http_status: e.statusCode
              }),
              !this.retried && this.xhrCredentials
                ? (n.warn('getXHRCallback', { message: 'credential retry' }),
                  (this.retried = !0),
                  this.getXHR(this.url))
                : this.responseCallback(s.Missing_Vast_Error()))
            : this.responseCallback(null, i)
      }
    }),
      (t.exports = o)
  },
  function (t, e, i) {
    'use strict'
                    function a(t) {
                              if ('undefined' == typeof t.callback)
        throw new Error('callback argument missing')
      var a = !1,
        l = 
        u = t.xhr || null
      u ||
        (u =
          t.cors || t.useXDR ? new o.XDomainRequest() : new o.XMLHttpRequest())
      var c,
        p,
        f,
        g = (u.url = t.uri || t.url),
        m = (u.method = t.method || 'GET'),
        v = t.body || t.data,
        _ = (u.headers = t.headers || {}),
        b = !!t.sync,
        y = !1,
        A = {
          body: void 0,
          headers: {},
          statusCode: 0,
          method: m,
          url: g,
          rawRequest: u
        }
      if (
        ('json' in t &&
          t.json !== !1 &&
          ((y = !0),
          _.accept || _.Accept || (_.Accept = 'application/json'),
          'GET' !== m &&
            'HEAD' !== m &&
            (_['content-type'] ||
              _['Content-Type'] ||
              (_['Content-Type'] = 'application/json'),
            (v = JSON.stringify(t.json === !0 ? v : t.json)))),
        (u.onreadystatechange = e),
        (u.onload = n),
        (u.onerror = r),
        (u.onprogress = function () {}),
        (u.onabort = ,
        (u.ontimeout = r),
        u.open(m, g, !b, t.username, t.password),
        b || (u.withCredentials = !!t.withCredentials),
        !b &&
          t.timeout > 0 &&
          (f = setTimeout(function () {
            if (!p) {
              ;(p = !0), u.abort('timeout')
              var t = new Error('XMLHttpRequest timeout')
              ;(t.code = 'ETIMEDOUT'), r(t)
            }
          }, t.timeout)),
        u.setRequestHeader)
      )
        for (c in _) _.hasOwnProperty(c) && u.setRequestHeader(c, _[c])
      else if (t.headers && !s(t.headers))
        throw new Error('Headers cannot be set on an XDomainRequest object')
      return (
        'responseType' in t && (u.responseType = t.responseType),
        'beforeSend' in t &&
          'function' == typeof t.beforeSend &&
          t.beforeSend(u),
        u.send(v || null),
        u
      )
    }
            var u = i(16),
      c = i(17),
      h = i(18),
      p = i(41)
    ;(t.exports = o),
      (t.exports['default'] = o),
      (o.XMLHttpRequest = u.XMLHttpRequest || l),
      (o.XDomainRequest =
        'withCredentials' in new o.XMLHttpRequest()
          ? o.XMLHttpRequest
          : u.XDomainRequest),
      r(['get', 'put', 'post', 'patch', 'head', 'delete'], 
  },
  function (t, e) {
    ;(call(
      e,
      (function () {
        return this
      })()
    ))
  },
  
  
  
  
  
  function (t, e, i) {
    'use strict'
    var r = i(23),
      s = 'function' == typeof Symbol && 'symbol' == typeof Symbol('foo'),
      n = Object.prototype.toString,
      o = Array.prototype.concat,
      a = Object.defineProperty,
      d = 
      l = 
      u = a && l(),
      c = function (t, e, i, r) {
        ;(!(e in t) || (d(r) && r())) &&
          (u
            ? a(t, e, {
                configurable: !0,
                enumerable: !1,
                value: i,
                writable: !0
              })
            : (t[e] = i))
      },
      h =     ;(h.supportsDescriptors = !!u), (t.exports = h)
  },
  
  
  
  
  function (t, e, i) {
    'use strict'
    var r = i(28),
      s = r('%Object%'),
      n = r('%TypeError%'),
      o = r('%String%'),
      a = i(29),
      d = i(31),
      l = i(32),
      u = i(33),
      c = i(34),
      h = i(35),
      p = i(36),
      f = i(30),
      g = {
        ToPrimitive: p,
        ToBoolean: 
        ToNumber: 
        ToInteger: 
        ToInt32: 
        ToUint32: 
        ToUint16: 
        ToString: 
        ToObject: 
        CheckObjectCoercible: 
        IsCallable: h,
        SameValue: 
        Type: 
        IsPropertyDescriptor: 
        IsAccessorDescriptor: function (t) {
          return (
            'undefined' != typeof t &&
            (a(this, 'Property Descriptor', 'Desc', t),
            !(!f(t, '[[Get]]') && !f(t, '[[Set]]')))
          )
        },
        IsDataDescriptor: function (t) {
          return (
            'undefined' != typeof t &&
            (a(this, 'Property Descriptor', 'Desc', t),
            !(!f(t, '[[Value]]') && !f(t, '[[Writable]]')))
          )
        },
        IsGenericDescriptor: function (t) {
          return (
            'undefined' != typeof t &&
            (a(this, 'Property Descriptor', 'Desc', t),
            !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t))
          )
        },
        FromPropertyDescriptor: function (t) {
          if ('undefined' == typeof t) return t
          if (
            (a(this, 'Property Descriptor', 'Desc', t),
            this.IsDataDescriptor(t))
          )
            return {
              value: t['[[Value]]'],
              writable: !!t['[[Writable]]'],
              enumerable: !!t['[[Enumerable]]'],
              configurable: !!t['[[Configurable]]']
            }
          if (this.IsAccessorDescriptor(t))
            return {
              get: t['[[Get]]'],
              set: t['[[Set]]'],
              enumerable: !!t['[[Enumerable]]'],
              configurable: !!t['[[Configurable]]']
            }
          throw new n(
            'FromPropertyDescriptor must be called with a fully populated Property Descriptor'
          )
        },
        ToPropertyDescriptor:       }
    t.exports = g
  },
  function (t, e) {
    'use strict'
    var i,
      r,
      s,
      n,
      o = Object.getOwnPropertyDescriptor
        ? (()
        : 
      a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
      d =
        Object.getPrototypeOf ||
        
      l = r ? d(r) : i,
      u = s ? s.constructor : i,
      c = n ? d(n) : i,
      h = n ? n() : i,
      p = 'undefined' == typeof Uint8Array ? i : d(Uint8Array),
      f = {
        '$ %Array%': Array,
        '$ %ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? i : ArrayBuffer,
        '$ %ArrayBufferPrototype%':
          'undefined' == typeof ArrayBuffer ? i : ArrayBuffer.prototype,
        '$ %ArrayIteratorPrototype%': a ? d([][Symbol.iterator]()) : i,
        '$ %ArrayPrototype%': Array.prototype,
        '$ %ArrayProto_entries%': Array.prototype.entries,
        '$ %ArrayProto_forEach%': Array.prototype.forEach,
        '$ %ArrayProto_keys%': Array.prototype.keys,
        '$ %ArrayProto_values%': Array.prototype.values,
        '$ %AsyncFromSyncIteratorPrototype%': i,
        '$ %AsyncFunction%': u,
        '$ %AsyncFunctionPrototype%': u ? u.prototype : i,
        '$ %AsyncGenerator%': n ? d(h) : i,
        '$ %AsyncGeneratorFunction%': c,
        '$ %AsyncGeneratorPrototype%': c ? c.prototype : i,
        '$ %AsyncIteratorPrototype%':
          h && a && Symbol.asyncIterator ? h[Symbol.asyncIterator]() : i,
        '$ %Atomics%': 'undefined' == typeof Atomics ? i : Atomics,
        '$ %Boolean%': Boolean,
        '$ %BooleanPrototype%': Boolean.prototype,
        '$ %DataView%': 'undefined' == typeof DataView ? i : DataView,
        '$ %DataViewPrototype%':
          'undefined' == typeof DataView ? i : DataView.prototype,
        '$ %Date%': Date,
        '$ %DatePrototype%': Date.prototype,
        '$ %decodeURI%': decodeURI,
        '$ %decodeURIComponent%': decodeURIComponent,
        '$ %encodeURI%': encodeURI,
        '$ %encodeURIComponent%': encodeURIComponent,
        '$ %Error%': Error,
        '$ %ErrorPrototype%': Error.prototype,
        '$ %eval%': eval,
        '$ %EvalError%': EvalError,
        '$ %EvalErrorPrototype%': EvalError.prototype,
        '$ %Float32Array%':
          'undefined' == typeof Float32Array ? i : Float32Array,
        '$ %Float32ArrayPrototype%':
          'undefined' == typeof Float32Array ? i : Float32Array.prototype,
        '$ %Float64Array%':
          'undefined' == typeof Float64Array ? i : Float64Array,
        '$ %Float64ArrayPrototype%':
          'undefined' == typeof Float64Array ? i : Float64Array.prototype,
        '$ %Function%': Function,
        '$ %FunctionPrototype%': Function.prototype,
        '$ %Generator%': r ? d(r()) : i,
        '$ %GeneratorFunction%': l,
        '$ %GeneratorPrototype%': l ? l.prototype : i,
        '$ %Int8Array%': 'undefined' == typeof Int8Array ? i : Int8Array,
        '$ %Int8ArrayPrototype%':
          'undefined' == typeof Int8Array ? i : Int8Array.prototype,
        '$ %Int16Array%': 'undefined' == typeof Int16Array ? i : Int16Array,
        '$ %Int16ArrayPrototype%':
          'undefined' == typeof Int16Array ? i : Int8Array.prototype,
        '$ %Int32Array%': 'undefined' == typeof Int32Array ? i : Int32Array,
        '$ %Int32ArrayPrototype%':
          'undefined' == typeof Int32Array ? i : Int32Array.prototype,
        '$ %isFinite%': isFinite,
        '$ %isNaN%': isNaN,
        '$ %IteratorPrototype%': a ? d(d([][Symbol.iterator]())) : i,
        '$ %JSON%': JSON,
        '$ %JSONParse%': JSON.parse,
        '$ %Map%': 'undefined' == typeof Map ? i : Map,
        '$ %MapIteratorPrototype%':
          'undefined' != typeof Map && a ? d(new Map()[Symbol.iterator]()) : i,
        '$ %MapPrototype%': 'undefined' == typeof Map ? i : Map.prototype,
        '$ %Math%': Math,
        '$ %Number%': Number,
        '$ %NumberPrototype%': Number.prototype,
        '$ %Object%': Object,
        '$ %ObjectPrototype%': Object.prototype,
        '$ %ObjProto_toString%': Object.prototype.toString,
        '$ %ObjProto_valueOf%': Object.prototype.valueOf,
        '$ %parseFloat%': parseFloat,
        '$ %parseInt%': parseInt,
        '$ %Promise%': 'undefined' == typeof Promise ? i : Promise,
        '$ %PromisePrototype%':
          'undefined' == typeof Promise ? i : Promise.prototype,
        '$ %PromiseProto_then%':
          'undefined' == typeof Promise ? i : Promise.prototype.then,
        '$ %Promise_all%': 'undefined' == typeof Promise ? i : Promise.all,
        '$ %Promise_reject%':
          'undefined' == typeof Promise ? i : Promise.reject,
        '$ %Promise_resolve%':
          'undefined' == typeof Promise ? i : Promise.resolve,
        '$ %Proxy%': 'undefined' == typeof Proxy ? i : Proxy,
        '$ %RangeError%': RangeError,
        '$ %RangeErrorPrototype%': RangeError.prototype,
        '$ %ReferenceError%': ReferenceError,
        '$ %ReferenceErrorPrototype%': ReferenceError.prototype,
        '$ %Reflect%': 'undefined' == typeof Reflect ? i : Reflect,
        '$ %RegExp%': RegExp,
        '$ %RegExpPrototype%': RegExp.prototype,
        '$ %Set%': 'undefined' == typeof Set ? i : Set,
        '$ %SetIteratorPrototype%':
          'undefined' != typeof Set && a ? d(new Set()[Symbol.iterator]()) : i,
        '$ %SetPrototype%': 'undefined' == typeof Set ? i : Set.prototype,
        '$ %SharedArrayBuffer%':
          'undefined' == typeof SharedArrayBuffer ? i : SharedArrayBuffer,
        '$ %SharedArrayBufferPrototype%':
          'undefined' == typeof SharedArrayBuffer
            ? i
            : SharedArrayBuffer.prototype,
        '$ %String%': String,
        '$ %StringIteratorPrototype%': a ? d(''[Symbol.iterator]()) : i,
        '$ %StringPrototype%': String.prototype,
        '$ %Symbol%': a ? Symbol : i,
        '$ %SymbolPrototype%': a ? Symbol.prototype : i,
        '$ %SyntaxError%': SyntaxError,
        '$ %SyntaxErrorPrototype%': SyntaxError.prototype,
        '$ %ThrowTypeError%': o,
        '$ %TypedArray%': p,
        '$ %TypedArrayPrototype%': p ? p.prototype : i,
        '$ %TypeError%': TypeError,
        '$ %TypeErrorPrototype%': TypeError.prototype,
        '$ %Uint8Array%': 'undefined' == typeof Uint8Array ? i : Uint8Array,
        '$ %Uint8ArrayPrototype%':
          'undefined' == typeof Uint8Array ? i : Uint8Array.prototype,
        '$ %Uint8ClampedArray%':
          'undefined' == typeof Uint8ClampedArray ? i : Uint8ClampedArray,
        '$ %Uint8ClampedArrayPrototype%':
          'undefined' == typeof Uint8ClampedArray
            ? i
            : Uint8ClampedArray.prototype,
        '$ %Uint16Array%': 'undefined' == typeof Uint16Array ? i : Uint16Array,
        '$ %Uint16ArrayPrototype%':
          'undefined' == typeof Uint16Array ? i : Uint16Array.prototype,
        '$ %Uint32Array%': 'undefined' == typeof Uint32Array ? i : Uint32Array,
        '$ %Uint32ArrayPrototype%':
          'undefined' == typeof Uint32Array ? i : Uint32Array.prototype,
        '$ %URIError%': URIError,
        '$ %URIErrorPrototype%': URIError.prototype,
        '$ %WeakMap%': 'undefined' == typeof WeakMap ? i : WeakMap,
        '$ %WeakMapPrototype%':
          'undefined' == typeof WeakMap ? i : WeakMap.prototype,
        '$ %WeakSet%': 'undefined' == typeof WeakSet ? i : WeakSet,
        '$ %WeakSetPrototype%':
          'undefined' == typeof WeakSet ? i : WeakSet.prototype
      }
    t.exports = function (t, e) {
      if (arguments.length > 1 && 'boolean' != typeof e)
        throw new TypeError('"allowMissing" argument must be a boolean')
      var i = '$ ' + t
      if (!(i in f))
        throw new SyntaxError('intrinsic ' + t + ' does not exist!')
      if ('undefined' == typeof f[i] && !e)
        throw new TypeError(
          'intrinsic ' +
            t +
            ' exists, but is not available. Please file an issue!'
        )
      return f[i]
    }
  },
  
  
  
  function (t, e) {
    var i =
      Number.isNaN ||
          t.exports =
      Number.isFinite ||
        },
  
  
  function (t, e) {
    'use strict'
    var i = Function.prototype.toString,
      r = /^\s*class\b/,
      s = 
      n = 
      o = Object.prototype.toString,
      a = '[object Function]',
      d = '[object GeneratorFunction]',
      l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag
    t.exports = function (t) {
      if (!t) return !1
      if ('function' != typeof t && 'object' != typeof t) return !1
      if ('function' == typeof t && !t.prototype) return !0
      if (l) return n(t)
      if (s(t)) return !1
      var e = o.call(t)
      return e === a || e === d
    }
  },
  function (t, e, i) {
    'use strict'
    var r = Object.prototype.toString,
      s = i(37),
      n = i(35),
      o = {
        '[[DefaultValue]]': function (t) {
          var e
          if (
            ((e =
              arguments.length > 1
                ? arguments[1]
                : '[object Date]' === r.call(t)
                ? String
                : Number),
            e === String || e === Number)
          ) {
            var i,
              o,
              a =
                e === String ? ['toString', 'valueOf'] : ['valueOf', 'toString']
            for (o = 0; o < a.length; ++o)
              if (n(t[a[o]]) && ((i = t[a[o]]()), s(i))) return i
            throw new TypeError('No default value')
          }
          throw new TypeError('invalid [[DefaultValue]] hint supplied')
        }
      }
    t.exports =   },
  
  function (t, e, i) {
    'use strict'
    var r = i(26),
      s = '\u200b'
    t.exports = function () {
      return String.prototype.trim && s.trim() === s ? String.prototype.trim : r
    }
  },
  
  function (t, e, i) {
    'use strict'
    var r = i(35),
      s = Object.prototype.toString,
      n = Object.prototype.hasOwnProperty,
      o = 
      a = 
      d = 
      l =     t.exports = l
  },
  
  function (t, e) {
    t.exports = {
      macroConst: {
        error: '[ERRORCODE]',
        contentPlayHead: '[CONTENTPLAYHEAD]',
        cacheBusting: '[CACHEBUSTING]',
        assetUri: '[ASSETURI]',
        timestamp: '[TIMESTAMP]',
        correlator: '[timestamp]'
      },
      replaceMacro: function (t, e, i, r) {
        'use strict'
        return (
          e && (t = this.replaceError(t, e)),
          i && (t = this.replaceContentPlayHead(t, i)),
          r && (t = this.replaceAssetUri(t, r)),
          (t = this.replaceTimeStamp(t))
        )
      },
      replaceError: function (t, e) {
        'use strict'
        return t.search(this.macroConst.error) > -1 && 'number' == typeof e
          ? t.replace(this.macroConst.error, e)
          : t
      },
      replaceContentPlayHead: function (t, e) {
        'use strict'
        return t.search(this.macroConst.contentPlayHead) > -1 &&
          e &&
          'string' == typeof e &&
          e.match(/\d{2,}:\d{2,}:\d{2,}\.\d{3}/)
          ? t.replace(this.macroConst.contentPlayHead, encodeURIComponent(e))
          : t
      },
      replaceTimeStamp: function (t) {
        'use strict'
        return (
          t.search(this.macroConst.cacheBusting) > -1 &&
            (t = t.replace(
              this.macroConst.cacheBusting,
              String(Date.now()).substr(-8)
            )),
          t.search(this.macroConst.timestamp) > -1 &&
            (t = t.replace(
              this.macroConst.timestamp,
              encodeURIComponent(new Date().toISOString())
            )),
          t.search(this.macroConst.correlator) > -1 &&
            (t = t.replace(this.macroConst.correlator, String(Date.now()))),
          t
        )
      },
      replaceAssetUri: function (t, e) {
        'use strict'
        return t.search(this.macroConst.assetUri) > -1 &&
          e &&
          'string' == typeof e
          ? t.replace(this.macroConst.assetUri, encodeURIComponent(e))
          : t
      }
    }
  },
  function (t, e, i) {
    var r = i(44).Base64,
      s = i(7),
      n = i(8).createLogger(
        'js.utils.WrapperParametersUtils',
        'WrapperParametersUtils'
      ),
      o = function (t) {
        'use strict'
        ;(this.vast = null),
          (this.viewabilityConfiguration = null),
          (this.internalLogConfig = null),
          (this.dropUsersync = !0),
          (this.usersyncUrl = ''),
          (this.whiteOpsUrl = ''),
          (this.xhrCookieCredentials = !1),
          (this.skipEnabled = !1),
          (this.overrideBitrate = !1),
          (this.hasError = null),
          (this.internalParameters = {}),
          this.parseParameters(t)
      }
    ;(o.prototype = {
      parseParameters: function (t) {
        'use strict'
        if (
          !t ||
          'object' != typeof t ||
          !t.hasOwnProperty('AdParameters') ||
          'string' != typeof t.AdParameters
        )
          return void (this.hasError = s.Missing_AdParameters_Error())
        var e = String(t.AdParameters).replace(/^(\s+)/g, ''),
          i = null
        try {
          i = JSON.parse(e)
        } catch (o) {
          return (
            n.error('Failed parsing json content', o),
            void (this.hasError = s.Json_Parsing_Error())
          )
        }
        if (null === i) return void (this.hasError = s.Json_Empty_Error())
        var a = '',
          d = {}
        if (!i.hasOwnProperty('ads'))
          return void (this.hasError = s.No_Ads_Error())
        for (var l in i.ads) {
          var u = i.ads[l]
          u.hasOwnProperty('content_source') &&
            'rtb' === u.content_source &&
            (u.hasOwnProperty('rtb') &&
              (u.rtb.hasOwnProperty('content_b64') &&
                '' !== u.rtb.content_b64 &&
                (this.vast = r.decode(u.rtb.content_b64)),
              u.rtb.hasOwnProperty('video') &&
                u.rtb.video.hasOwnProperty('content_b64') &&
                '' !== u.rtb.video.content_b64 &&
                (this.vast = r.decode(u.rtb.video.content_b64))),
            u.hasOwnProperty('viewability') &&
              ((this.viewabilityConfiguration = u.viewability),
              u.viewability.hasOwnProperty('config') &&
                '' !== u.viewability.config &&
                (d = this.parseConfigs(u.viewability.config))),
            u.hasOwnProperty('buyer_member_id') &&
              '' !== u.buyer_member_id &&
              (a = u.buyer_member_id),
            u.hasOwnProperty('usersync_url') &&
              '' !== u.usersync_url &&
              (this.usersyncUrl = decodeURIComponent(u.usersync_url)),
            u.hasOwnProperty('whiteops_fraud_sensor_js_url') &&
              '' !== u.whiteops_fraud_sensor_js_url &&
              (this.whiteOpsUrl = decodeURIComponent(
                u.whiteops_fraud_sensor_js_url
              )))
        }
        if (((this.internalParameters = d), d.hasOwnProperty('vc'))) {
          var c = d.vc.split(/;/),
            h = [],
            p = !1
          for (var f in c) {
            if (
              ('vid_nous' == c[f] && (this.dropUsersync = !1),
              c[f].indexOf('vid_ccr') != -1)
            ) {
              var g = c[f].split(/=/)
              h.push(parseInt(g[1]))
            }
            if (c[f].indexOf('vid_skip') != -1 && !p) {
              var m = c[f].split(/=/)
              '0' != m[1]
                ? (this.skipEnabled = !0)
                : ((p = !0), (this.skipEnabled = !1))
            }
            'vid_espn' == c[f] && (this.overrideBitrate = !0)
          }
          if (0 !== h.length) {
            this.xhrCookieCredentials = !0
            for (var v = 0; v < h.length; v++)
              this.xhrCookieCredentials = this.xhrCookieCredentials && !!h[v]
          }
        }
        d.hasOwnProperty('rblog') &&
          ((this.internalLogConfig = d.rblog),
          '' !== a &&
            this.internalLogConfig.indexOf('bm=') == -1 &&
            (this.internalLogConfig += ';bm=' + a))
      },
      parseConfigs: function (t) {
        'use strict'
        if (t && 'string' == typeof t) {
          var e = {},
            i = t.split(/&/)
          for (var r in i) {
            var s = i[r].split(/=/)
            if (2 == s.length) e[s[0]] = decodeURIComponent(s[1])
            else if (s.length > 2) {
              for (var n = '', o = 1; o < s.length; o++) n += '=' + s[o]
              e[s[0]] = decodeURIComponent(n.substr(1))
            } else e[s[0]] = ''
          }
          if (e !== {}) return e
        }
        return {}
      }
    }),
      (t.exports = o)
  },
  function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__
    ;(function (global) {
      !((
        'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : this,
        function (global) {
          'use strict'
          global = global || {}
          var _Base64 = global.Base64,
            version = '2.5.1',
            buffer
          if ('undefined' != typeof module && module.exports)
            try {
              buffer = eval("require('buffer').Buffer")
            } catch (err) {
              buffer = void 0
            }
          var b64chars =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            b64tab = ((b64chars),
            fromCharCode = String.fromCharCode,
            cb_utob = 
            re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
            utob = function (t) {
              return t.replace(re_utob, cb_utob)
            },
            cb_encode = 
            btoa = global.btoa
              ? function (t) {
                  return global.btoa(t)
                }
              : function (t) {
                  return t.replace(/[\s\S]{1,3}/g, cb_encode)
                },
            _encode = buffer
              ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from
                ?                 :               : function (t) {
                  return btoa(utob(t))
                },
            encode = 
            encodeURI = 
            re_btou = new RegExp(
              [
                '[\xc0-\xdf][\x80-\xbf]',
                '[\xe0-\xef][\x80-\xbf]{2}',
                '[\xf0-\xf7][\x80-\xbf]{3}'
              ].join('|'),
              'g'
            ),
            cb_btou = function (t) {
              switch (t.length) {
                case 4:
                  var e =
                      ((7 & t.charCodeAt(0)) << 18) |
                      ((63 & t.charCodeAt(1)) << 12) |
                      ((63 & t.charCodeAt(2)) << 6) |
                      (63 & t.charCodeAt(3)),
                    i = e - 65536
                  return (
                    fromCharCode((i >>> 10) + 55296) +
                    fromCharCode((1023 & i) + 56320)
                  )
                case 3:
                  return fromCharCode(
                    ((15 & t.charCodeAt(0)) << 12) |
                      ((63 & t.charCodeAt(1)) << 6) |
                      (63 & t.charCodeAt(2))
                  )
                default:
                  return fromCharCode(
                    ((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1))
                  )
              }
            },
            btou = 
            cb_decode = 
            _atob = global.atob
              ?               : 
            atob = 
            _decode = buffer
              ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from
                ?                 :               : 
            decode = 
            noConflict =           if (
            ((global.Base64 = {
              VERSION: version,
              atob: atob,
              btoa: btoa,
              fromBase64: decode,
              toBase64: encode,
              utob: utob,
              encode: encode,
              encodeURI: encodeURI,
              btou: btou,
              decode: decode,
              noConflict: noConflict,
              __buffer__: buffer
            }),
            'function' == typeof Object.defineProperty)
          ) {
            var noEnum =             global.Base64.extendString =           }
          return (
            global.Meteor && (Base64 = global.Base64),
            'undefined' != typeof module && module.exports
              ? (module.exports.Base64 = global.Base64)
              : ((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                (__WEBPACK_AMD_DEFINE_RESULT__ = apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
                !(
                  void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ &&
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
                )),
            { Base64: global.Base64 }
          )
        }
      )
    }.call(
      exports,
      (()
    ))
  },
  function (t, e, i) {
    var r = i(14),
      s = i(46),
      n = i(7),
      o = i(42),
      a = i(8).createLogger('js.vastLoader.VastLoader', 'VastLoader'),
      d = function (t, e, i) {
        'use strict'
        ;(this.urlRequestUtils = null),
          (this.xhrCredentialsConfig = i),
          (this.vastParser = new s()),
          (this.vast = {}),
          (this.loading = !1),
          (this.resultCallback = t),
          (this.errorCallback = e),
          (this.debugAlreadySent = !1),
          (this.adsCountLog = !1),
          this.initVastResult()
      }
    ;(d.prototype = {
      initVastResult: function () {
        'use strict'
        this.vast = {
          duration: null,
          errors: [],
          impressions: [],
          trackingEvents: {},
          videoClicks: { clickThrough: '', clickTracking: [] },
          mediaFiles: [],
          adParameters: '',
          companion: '',
          skip: null,
          icons: [],
          adVerifications: [],
          extensions: {}
        }
      },
      getVAST: function (t) {
        'use strict'
        ;(this.urlRequestUtils = new r(
          this.handler.bind(this),
          this.debugHandler.bind(this),
          this.xhrCredentialsConfig
        )),
          this.urlRequestUtils.getXHR(t)
      },
      debugHandler: function (t) {
        'use strict'
        this.debugAlreadySent ||
          (this.errorCallback(t), (this.debugAlreadySent = !0))
      },
      adCountHandler: function (t) {
        'use strict'
        t > 1 &&
          (this.errorCallback(n.Multiple_Vast_Ads()), (this.adsCountLog = !0))
      },
      handler: function (t, e) {
        'use strict'
        if ((this.loading || this.initVastResult(), t))
          this.errorCallback(t, this.vastParser.errorTrackers),
            (this.loading = !1)
        else {
          this.loading = !0
          var i = null
          try {
            i = this.vastParser.parse(e, this.adCountHandler.bind(this))
          } catch (r) {
            return (
              r instanceof Error
                ? (a.error('handler', { error: r, message: r.message }),
                  this.errorCallback(
                    n.Vast_Parser_Error(),
                    this.vastParser.errorTrackers
                  ))
                : this.errorCallback(r, this.vastParser.errorTrackers),
              void (this.loading = !1)
            )
          }
          if (!(i && i.ads && this.isSupportedAd(i.ads)))
            return (
              this.errorCallback(
                n.Ad_Type_Error(),
                this.vastParser.errorTrackers
              ),
              void (this.loading = !1)
            )
          ;(this.vast.errors = this.vast.errors.concat(i.ads.errors)),
            (this.vast.impressions = this.vast.impressions.concat(
              i.ads.impressions
            )),
            this.registerAdElements(i.ads),
            i.ads.isWrapper
              ? this.getVAST(o.replaceMacro(i.ads.vastAdTagURI))
              : (this.vastResult(i.ads), (this.loading = !1))
        }
      },
      registerAdElements: function (t) {
        'use strict'
        var e = this.vastParser.getFirstLinear(t.creatives)
        if (e) {
          ;(this.vast.videoClicks.clickTracking = this.vast.videoClicks.clickTracking.concat(
            e.videoClicks.clickTracking
          )),
            t.isWrapper ||
              (this.vast.videoClicks.clickThrough = e.videoClicks.clickThrough)
          for (
            var i = Object.keys(e.trackingEvents), r = 0;
            r < i.length;
            r++
          ) {
            var s = i[r]
            this.vast.trackingEvents.hasOwnProperty(s) ||
              (this.vast.trackingEvents[s] = []),
              (this.vast.trackingEvents[s] = this.vast.trackingEvents[s].concat(
                e.trackingEvents[s]
              ))
          }
        }
        var n = this.vastParser.getFirstCompanion(t.creatives)
        '' !== n && (this.vast.companion = n),
          (this.vast.adVerifications = this.vast.adVerifications.concat(
            t.adVerifications
          ))
        for (var o = Object.keys(t.extensions), a = 0; a < o.length; a++)
          this.vast.extensions[o[a]] = t.extensions[o[a]]
      },
      vastResult: function (t) {
        'use strict'
        var e = this.vastParser.getFirstLinear(t.creatives)
        ;(this.vast.mediaFiles = e.mediaFiles),
          (this.vast.adParameters = e.adParameters),
          (this.vast.skip = e.skipOffset),
          (this.vast.duration = e.duration),
          (this.vast.icons = e.icons),
          this.resultCallback(this.vast)
      },
      isSupportedAd: function (t) {
        'use strict'
        return (
          t &&
          (t.isWrapper || null !== this.vastParser.getFirstLinear(t.creatives))
        )
      }
    }),
      (t.exports = d)
  },
  function (t, e, i) {
    var r = i(47),
      s = i(48),
      n = i(49),
      o = i(7),
      a = i(8).createLogger('js.vastLoader.VastParser', 'VastParser'),
      d = function () {
        'use strict'
        ;(this.isWrapper = !1), (this.errorTrackers = [])
      }
    ;(d.prototype = {
      parse: function (t, e) {
        'use strict'
        var i = new r().parse(t)
        if (((this.isWrapper = !1), null === i))
          throw (
            (a.error('parse', { message: 'Empty or malformed VAST content' }),
            o.Xml_Parsing_Error())
          )
        if (i.root && i.root.name === n.Vast_Node_Name) {
          i = i.root
          var s = '',
            d = null
          i.attributes[n.Version_Attribute_Name] &&
            (s = i.attributes[n.Version_Attribute_Name]),
            e && e(this.getAdsCount(i))
          var l = this.getFirstChild(i, n.Ad_Node_Name)
          if (!l) throw o.Vast_Validation_Error()
          return (d = this.parseAd(l)), { version: s, ads: d }
        }
        throw o.Vast_Validation_Error()
      },
      parseAd: function (t) {
        'use strict'
        var e = {
            adInfo: {
              id: this.getAttributeToString(t.attributes, n.Id_Attribute_Name),
              adSystem: {}
            },
            isWrapper: !1,
            vastAdTagURI: '',
            creatives: [],
            errors: [],
            impressions: [],
            adVerifications: [],
            extensions: {}
          },
          i = this.getFirstChild(t, n.Inline_Node_Name)
        if (i) e.adInfo = this.concatObj(e.adInfo, this.parseInline(i))
        else {
          if (((i = this.getFirstChild(t, n.Wrapper_Node_Name)), !i))
            throw o.Vast_Validation_Error()
          e.isWrapper = !0
        }
        for (var r = i.children, s = 0; s < r.length; s++)
          r[s].name === n.Impression_Node_Name && '' !== r[s].content
            ? e.impressions.push(r[s].content)
            : r[s].name === n.Error_Node_Name &&
              '' !== r[s].content &&
              (e.errors.push(r[s].content),
              this.errorTrackers.push(r[s].content))
        e.isWrapper && (e.vastAdTagURI = this.parseWrapper(i))
        var d = this.getFirstChild(i, n.Adsystem_Node_Name)
        if (
          (d && (e.adInfo.adSystem = this.parseAdSystem(d)),
          (d = this.getFirstChild(i, n.Creatives_Node_Name)))
        ) {
          for (var l = 0; l < d.children.length; l++) {
            var u = this.parseCreative(d.children[l])
            u && e.creatives.push(u)
          }
          if (!e.creatives.length && !e.isWrapper)
            throw o.General_Linear_Error()
        } else if (!e.isWrapper) throw o.Vast_Validation_Error()
        if ((d = this.getFirstChild(i, n.Ad_Verifications_Node_Name)))
          for (var c = 0; c < d.children.length; c++)
            try {
              var h = this.parseVerification(d.children[c])
              h &&
                ((h.nodeLocation = n.Ad_Verifications_Node_Name),
                e.adVerifications.push(h))
            } catch (p) {
              a.error('parse', {
                message: 'Empty or malformed ADVerification content',
                value: d.children[c]
              })
            }
        return (
          (d = this.getFirstChild(i, n.Extensions_Node_Name)),
          d && (e.extensions = this.parseExtensions(d.children)),
          e.extensions.adVerifications &&
            ((e.adVerifications = e.adVerifications.concat(
              e.extensions.adVerifications
            )),
            delete e.extensions.adVerifications),
          e
        )
      },
      parseInline: function (t) {
        'use strict'
        var e = {},
          i = this.getFirstChild(t, n.Description_Node_Name)
        return (
          i && (e.description = i.content),
          (i = this.getFirstChild(t, n.Survey_Node_Name)),
          i && (e.survey = i.content),
          (i = this.getFirstChild(t, n.Adtitle_Node_Name)),
          i && (e.title = i.content),
          e
        )
      },
      parseWrapper: function (t) {
        'use strict'
        if (((t = this.getFirstChild(t, n.Vast_Ad_Tag_Uri_Node_Name)), !t))
          throw o.General_Wrapper_Error()
        var e = t.content
        if (e && '' !== e) return (this.isWrapper = !0), e
        throw o.General_Wrapper_Error()
      },
      parseAdSystem: function (t) {
        'use strict'
        return {
          version: this.getAttributeToString(
            t.attributes,
            n.Version_Attribute_Name
          ),
          value: t.content
        }
      },
      parseCreative: function (t) {
        'use strict'
        var e = {
            id: this.getAttributeToString(t.attributes, n.Id_Attribute_Name),
            adId: this.getAttributeToString(
              t.attributes,
              n.Adid_Attribute_Name
            ),
            sequence: null
          },
          i = this.getAttributeToNumber(t.attributes, n.Sequence_Attribute_Name)
        isNaN(i) || (e.sequence = i)
        var r = this.getFirstChild(t, n.Linear_Node_Name),
          s = this.getFirstChild(t, n.Companion_Ads_Node_Name)
        if (r) (e.type = n.Linear), (e.linear = this.parseLinear(r))
        else if (s)
          (e.type = n.Companion), (e.companion = this.serializeToXml(s))
        else if (!this.isWrapper) return null
        return e
      },
      parseLinear: function (t) {
        'use strict'
        var e = {
            duration: new s(),
            skipOffset: this.getAttributeToString(
              t.attributes,
              n.Skip_Offset_Attribute_Name
            ),
            trackingEvents: {},
            videoClicks: { clickThrough: '', clickTracking: [] },
            mediaFiles: [],
            adParameters: '',
            icons: []
          },
          i = this.getFirstChild(t, n.Duration_Node_Name)
        if (i) {
          var r = i.content
          '' !== r && (e.duration = new s(r))
        }
        return (
          (i = this.getFirstChild(t, n.Tracking_Events_Node_Name)),
          i && (e.trackingEvents = this.parseTrackingEvent(i.children)),
          (i = this.getFirstChild(t, n.Video_Clicks_Node_Name)),
          i && (e.videoClicks = this.parseVideoClicks(i.children)),
          (i = this.getFirstChild(t, n.Media_Files_Node_Name)),
          i &&
            !this.isWrapper &&
            (e.mediaFiles = this.parseMediaFile(i.children)),
          (i = this.getFirstChild(t, n.Ad_Parameters_Node_Name)),
          i && !this.isWrapper && (e.adParameters = i.content),
          (i = this.getFirstChild(t, n.Icons_Node_Name)),
          i && (e.icons = this.parseIcons(i.children)),
          e
        )
      },
      parseTrackingEvent: function (t) {
        'use strict'
        for (var e = {}, i = 0; i < t.length; i++)
          if (t[i].name === n.Tracking_Node_Name) {
            var r = this.getAttributeToString(
              t[i].attributes,
              n.Event_Attribute_Name
            )
            if (r && n.Available_Events.indexOf(r) !== -1) {
              e.hasOwnProperty(r) || (e[r] = [])
              var s = t[i].content
              '' !== s &&
                ('progress' != r
                  ? e[r].push(s)
                  : e[r].push({
                      url: s,
                      offset: this.getAttributeToString(
                        t[i].attributes,
                        n.Offset_Attribute_Name
                      )
                    }))
            }
          }
        return e
      },
      parseVideoClicks: function (t) {
        'use strict'
        for (
          var e = { clickThrough: '', clickTracking: [] }, i = 0;
          i < t.length;
          i++
        ) {
          var r = '',
            s = t[i]
          s.name === n.Click_Through_Node_Name &&
            '' === e.clickThrough &&
            ((r = s.content), '' !== r && (e.clickThrough = r)),
            s.name === n.Click_Tracking_Node_Name &&
              ((r = s.content), '' !== r && e.clickTracking.push(r))
        }
        return e
      },
      parseMediaFile: function (t) {
        'use strict'
        var e = []
        if (0 === t.length) throw o.Vast_Validation_Error()
        for (var i = 0; i < t.length; i++)
          if (t[i].name === n.Media_File_Node_Name) {
            var r = !0,
              s = t[i].attributes,
              a = { id: this.getAttributeToString(s, n.Id_Attribute_Name) },
              d = this.getAttributeToString(s, n.Delivery_Attribute_Name)
            ;(d && n.Supported_Delivery_Type.indexOf(d) !== -1) ||
              (d = n.Supported_Delivery_Type[0]),
              (a.delivery = d),
              (d = this.getAttributeToString(s, n.Type_Attribute_Name)),
              (d && n.Supported_Video_Type.indexOf(d.toLowerCase()) !== -1) ||
                (r = !1),
              (a.type = d.toLowerCase()),
              (d = this.getAttributeToNumber(s, n.Bitrate_Attribute_Name)),
              (d < 0 || null === d) && (d = 0),
              (a.bitrate = d),
              (d = this.getAttributeToNumber(s, n.Width_Attribute_Name)),
              (d < 0 || null === d) && (d = 0),
              (a.width = d),
              (d = this.getAttributeToNumber(s, n.Height_Attribute_Name)),
              (d < 0 || null === d) && (d = 0),
              (a.height = d),
              (a.scalable = this.getAttributeToBoolean(
                s,
                n.Scalable_Attribute_Name
              )),
              null === a.scalable && (a.scalable = !0),
              (a.maintainAspectRatio = this.getAttributeToBoolean(
                s,
                n.Maintain_Aspect_Ratio_Attribute_Name
              )),
              null === a.maintainAspectRatio && (a.maintainAspectRatio = !0),
              (d = this.getAttributeToString(
                s,
                n.Api_Framework_Attribute_Name
              )),
              d &&
                ((d = d.toUpperCase()),
                d === n.Vpaid_Api &&
                n.Supported_Vpaid_Type.indexOf(a.type) !== -1
                  ? (a.apiFramework = d)
                  : (r = !1)),
              (d = t[i].content),
              d || (r = !1),
              (a.url = d),
              r && e.push(a)
          }
        return e
      },
      parseIcons: function (t) {
        for (var e = [], i = 0; i < t.length; i++)
          if (t[i].name === n.Icon_Node_Name) {
            var r = t[i].attributes,
              o = {
                program: '',
                width: 0,
                height: 0,
                xPosition: 0,
                yPosition: 0,
                apiFramework: '',
                offset: new s(),
                duration: new s(),
                IconClickThrough: '',
                IconClickTracking: [],
                IconViewTracking: [],
                StaticResource: { type: null, src: null },
                IFrameResource: null,
                HTMLResource: null
              },
              a = this.getAttributeToString(r, n.Program_Attribute_Name)
            if ('' !== a && null !== a) {
              for (var d = !1, l = 0; l < e.length; l++)
                e[l].program === a && (d = !0)
              if (d) continue
              o.program = a
            }
            if ('' === o.program) continue
            if (
              ((a = this.getAttributeToNumber(r, n.Width_Attribute_Name)),
              !(a > 0 && null !== a))
            )
              continue
            if (
              ((o.width = a),
              (a = this.getAttributeToNumber(r, n.Height_Attribute_Name)),
              !(a > 0 && null !== a))
            )
              continue
            if (
              ((o.height = a),
              (a = this.getAttributeToString(r, n.X_Position_Attribute_Name)),
              '' !== a && null !== a)
            ) {
              var u = parseInt(a)
              'left' === a || 'right' === a
                ? (o.xPosition = a)
                : a >= 0 && null !== a && (o.xPosition = u)
            }
            if (
              ((a = this.getAttributeToString(r, n.Y_Position_Attribute_Name)),
              '' !== a && null !== a)
            ) {
              var c = parseInt(a)
              'top' === a || 'bottom' === a
                ? (o.yPosition = a)
                : a >= 0 && null !== a && (o.yPosition = c)
            }
            ;(a = this.getAttributeToString(r, n.Api_Framework_Attribute_Name)),
              '' !== a && null !== a && (o.apiFramework = a),
              (a = this.getAttributeToString(r, n.Offset_Attribute_Name)),
              '' !== a && null !== a && (o.offset = new s(a)),
              (a = this.getAttributeToString(r, n.Duration_Attribute_Name)),
              '' !== a && null !== a && (o.duration = new s(a))
            var h = this.getFirstChild(t[i], n.Icon_Clicks_Node_Name)
            if (h)
              for (var p = 0; p < h.children.length; p++) {
                a = ''
                var f = h.children[p]
                f.name === n.Icon_Click_Through_Node_Name &&
                  '' === o.IconClickThrough &&
                  ((a = f.content), '' !== a && (o.IconClickThrough = a)),
                  f.name === n.Icon_Click_Tracking_Node_Name &&
                    ((a = f.content), '' !== a && o.IconClickTracking.push(a))
              }
            for (var g = 0; g < t[i].children.length; g++) {
              var m = t[i].children[g]
              m.name === n.Icon_View_Tracking_Node_Name &&
                ((a = m.content), '' !== a && o.IconViewTracking.push(a))
            }
            var v = this.getFirstChild(t[i], n.Static_Resource_Node_Name)
            if (v) {
              if (
                ((a = this.getAttributeToString(
                  v.attributes,
                  n.Creative_Type_Attribute_Name
                )),
                '' === a ||
                  null === a ||
                  n.Supported_Icon_Type.indexOf(a.toLowerCase()) === -1)
              )
                continue
              ;(o.StaticResource.type = a.toLowerCase()),
                (o.StaticResource.src = v.content)
            }
            ;(v = this.getFirstChild(t[i], n.Iframe_Resource_Node_Name)),
              v && (o.IFrameResource = v.content),
              (v = this.getFirstChild(t[i], n.Html_Resource_Node_Name)),
              v && (o.HTMLResource = v.content),
              e.push(o)
          }
        return e
      },
      parseVerification: function (t) {
        'use strict'
        var e = {
            vendor: '',
            src: '',
            apiFramework: '',
            browserOptional: !1,
            trackingEvents: {},
            verificationParameters: '',
            nodeLocation: ''
          },
          i = this.getAttributeToString(t.attributes, n.Vendor_Attribute_Name)
        if ('' === i || null === i) return null
        e.vendor = i
        var r = this.getFirstChild(t, n.JavaScript_Resource_Node_Name)
        if (!r) return null
        if (
          ((i = r.content),
          '' !== i && (e.src = i),
          (i = this.getAttributeToString(
            r.attributes,
            n.Api_Framework_Attribute_Name
          )),
          '' !== i && null !== i && (e.apiFramework = i),
          (i = this.getAttributeToString(
            r.attributes,
            n.Browser_Optional_Attribute_Name
          )),
          '' !== i &&
            null !== i &&
            ('true' === i
              ? (e.browserOptional = !0)
              : 'false' === i && (e.browserOptional = !1)),
          (r = this.getFirstChild(t, n.Verification_Parameters_Node_Name)),
          r && ((i = r.content), '' !== i && (e.verificationParameters = i)),
          (r = this.getFirstChild(t, n.Tracking_Events_Node_Name)))
        )
          for (var s = r.children, o = 0; o < s.length; o++) {
            var a = this.getAttributeToString(
              s[o].attributes,
              n.Event_Attribute_Name
            )
            if (a && n.Available_Verification_Events.indexOf(a) !== -1) {
              e.trackingEvents.hasOwnProperty(a) || (e.trackingEvents[a] = [])
              var d = s[o].content
              '' !== d && e.trackingEvents[a].push(d)
            }
          }
        return e
      },
      parseExtensions: function (t) {
        'use strict'
        for (var e = {}, i = 0; i < t.length; i++) {
          var r = t[i]
          if (r.name === n.Extension_Node_Name) {
            var s = this.getAttributeToString(
              r.attributes,
              n.Type_Attribute_Name
            )
            if (s == n.Omid_Extension_Type) {
              e.adVerifications = []
              var o = this.getFirstChild(r, n.Ad_Verifications_Node_Name)
              if (o)
                for (var d = 0; d < o.children.length; d++)
                  try {
                    var l = this.parseVerification(o.children[d])
                    l &&
                      ((l.nodeLocation = n.Extension_Node_Name),
                      e.adVerifications.push(l))
                  } catch (u) {
                    a.error('parse', {
                      message: 'Empty or malformed ADVerification content',
                      value: o.children[d]
                    })
                  }
            } else
              1 == r.children.length &&
                r.children[0].name === n.Nielsen_Node_Name &&
                (e.nielsen = r.children[0].content)
          }
        }
        return e
      },
      getAdsCount: function (t) {
        'use strict'
        var e = 0
        if (!t) return 0
        for (var i = 0; i < t.children.length; i++)
          t.children[i].name === n.Ad_Node_Name && e++
        return e
      },
      getFirstChild: function (t, e) {
        'use strict'
        if (!t || !e) return null
        for (var i = 0; i < t.children.length; i++)
          if (t.children[i].name === e) return t.children[i]
        return null
      },
      getAttributeToString: function (t, e) {
        'use strict'
        if (t.hasOwnProperty(e)) {
          var i = t[e]
          return 'string' == typeof i && (i = i.trim()), String(i)
        }
        return null
      },
      getAttributeToNumber: function (t, e) {
        'use strict'
        var i = this.getAttributeToString(t, e)
        return (i = parseInt(i)), isNaN(i) ? null : i
      },
      getAttributeToBoolean: function (t, e) {
        'use strict'
        var i = this.getAttributeToString(t, e)
        return i
          ? ((i = i.toLowerCase()),
            'false' !== i &&
              ('true' === i || ((i = parseInt(i)), !isNaN(i) && 0 !== i)))
          : null
      },
      concatObj: function () {
        for (var t = {}, e = arguments.length, i = 0; i < e; i++) {
          if ('object' != typeof arguments[i]) return {}
          for (var r in arguments[i])
            arguments[i].hasOwnProperty(r) && (t[r] = arguments[i][r])
        }
        return t
      },
      getFirstLinear: function (t) {
        'use strict'
        for (var e = 0; e < t.length; e++)
          if (t[e].type === n.Linear) return t[e].linear
        return null
      },
      getFirstCompanion: function (t) {
        'use strict'
        for (var e = 0; e < t.length; e++)
          if (t[e].type === n.Companion) return t[e].companion
        return ''
      },
      serializeToXml: function (t) {
        var e = ''
        if (((e += '<' + t.name), '{}' !== t.attributes.toString()))
          for (var i in t.attributes)
            e += ' ' + i + '="' + t.attributes[i] + '"'
        if (((e += '>'), 0 === t.children.length))
          e += t.content
            ? '<![CDATA[' +
              t.content.replace(/\]\]>/g, ']]]]><![CDATA[>') +
              ']]>'
            : t.content
        else
          for (var r = 0; r < t.children.length; r++)
            e += this.serializeToXml(t.children[r])
        return (
          0 === t.children.length && '' === t.content
            ? (e = e.substr(0, e.length - 1) + '/>')
            : (e += '</' + t.name + '>'),
          e
        )
      }
    }),
      (t.exports = d)
  },
  function (t, e) {
    var i = 2,
      r = 3,
      s = 4,
      n = 5,
      o = function () {
        'use strict'
        ;(this.xml = ''), (this.hasError = 0)
      }
    ;(o.prototype = {
      parse: function (t) {
        'use strict'
        if (!t) return null
        this.xml = t.trim().replace(/<!--[\s\S]*?-->|[\t\n\r]\s*/g, ' ')
        var e = this.declaration()
        if (this.hasError) return null
        var i = this.tag()
        return this.hasError
          ? null
          : i
          ? { declaration: e, root: i }
          : ((this.hasError = n), null)
      },
      declaration: function () {
        'use strict'
        var t = this.match(/^<\?xml\s*/)
        if (!t) return null
        for (var e = { attributes: {} }; !this.eos() && !this.is('?>'); ) {
          var i = this.attribute()
          if (!i) {
            if (this.hasError) return null
            break
          }
          e.attributes[i.name] = i.value
        }
        return this.match(/^\?>\s*/) ? e : ((this.hasError = r), null)
      },
      tag: function () {
        'use strict'
        var t = this.match(/^<([\w-:.]+)\s*/)
        if (!t) return null
        if (this.is('<')) return (this.hasError = r), null
        for (
          var e = { name: t[1], attributes: {}, children: [], content: '' };
          !(this.eos() || this.is('>') || this.is('?>') || this.is('/>'));

        ) {
          var i = this.attribute()
          if (!i) {
            if (this.hasError) return null
            break
          }
          e.attributes[i.name] = i.value
        }
        if (this.match(/^\s*\/>\s*/)) return e
        if (!this.match(/^>\s*/)) return (this.hasError = r), null
        if (
          ((e.content = this.content()),
          0 !== e.children.length && '' !== e.content)
        )
          return (this.hasError = CONTENT_ASIDE_CHILD), null
        for (var n = !1; !n; ) {
          var o = this.tag()
          if (o) e.children.push(o)
          else {
            if (this.hasError) return null
            n = !0
          }
        }
        return this.match(new RegExp('^</' + e.name + '>\\s*'))
          ? e
          : ((this.hasError = s), null)
      },
      content: function () {
        'use strict'
        var t,
          e = ''
        if (this.is('<![CDATA[')) {
          for (var i = '', r = !1; !r; )
            this.is('<![CDATA[')
              ? ((t = this.match(/^(<!\[CDATA\[\s*.*?\s*\]\]>\s*)/)),
                t ? (i += t[1].trim()) : (r = !0))
              : (r = !0)
          ;(i = i.replace(/\s*\]\]>\s*<!\[CDATA\[\s*/g, '')),
            (e = i.substr(9, i.length - 12).trim())
        } else
          (t = this.match(/^([^<]*)/)),
            t && ((e = t[1].trim()), e && (e = this.decodeXml_(e)))
        return e
      },
      attribute: function () {
        'use strict'
        var t = this.match(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|)\s*/)
        return t
          ? ('' !== t[2] &&
              t[2].indexOf('=') == -1 &&
              t[2].indexOf('>') == -1) ||
            this.xml.match(/^([\?\/]?>|[\w:-]+\s*=)/)
            ? { name: t[1], value: this.strip(t[2]).trim() }
            : ((this.hasError = i), null)
          : null
      },
      strip: function (t) {
        'use strict'
        return 'string' != typeof t ? null : t.replace(/^['"]|['"]$/g, '')
      },
      match: function (t) {
        'use strict'
        if (!(t instanceof RegExp)) return null
        var e = this.xml.match(t)
        return e ? ((this.xml = this.xml.slice(e[0].length)), e) : null
      },
      eos: function () {
        'use strict'
        return 0 === this.xml.length
      },
      is: function (t) {
        'use strict'
        return 'string' == typeof t && '' !== t && 0 === this.xml.indexOf(t)
      },
      decodeXml_: function (t) {
        return t.replace(/(&apos;|&quot;|&lt;|&gt;|&amp;)/g, function (t, e) {
          return {
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': "'",
            '&lt;': '<',
            '&gt;': '>'
          }[e]
        })
      }
    }),
      (t.exports = o)
  },
  function (t, e) {
    var i = function (t, e) {
      'use strict'
      ;(this.hours = 0),
        (this.minutes = 0),
        (this.seconds = 0),
        (this.milliseconds = 0),
        (this.isInitialized = !1),
        this.parse(t, e)
    }
    ;(i.prototype = {
      parse: function (t, e) {
        'use strict'
        if (t || 0 === t) {
          if ('number' == typeof t) return void this.parseMillisecond(t)
          if ('string' == typeof t)
            if (t.indexOf(':') !== -1) {
              var i = t.split(':')
              if (3 != i.length) return
              ;(this.hours = this.validateNumber(i[0])),
                (this.minutes = this.validateNumber(i[1])),
                (i = i[2].split('.')),
                (this.seconds = this.validateNumber(i[0])),
                (this.milliseconds = this.validateNumber(i[1])),
                (this.isInitialized = !0),
                this.parseMillisecond(this.toMillisecond())
            } else
              t.indexOf('%') !== -1 &&
                'number' == typeof e &&
                (this.parseMillisecond(e), this.percentTime(t))
        }
      },
      parseMillisecond: function (t) {
        'use strict'
        return (!t && 0 !== t) || 'number' != typeof t || t < 0
          ? void (this.isInitialized = !1)
          : ((this.milliseconds = t % 1e3),
            (this.seconds = Math.floor(t / 1e3) % 60),
            (this.minutes = Math.floor(t / 6e4) % 60),
            (this.hours = Math.floor(t / 36e5)),
            void (this.isInitialized = !0))
      },
      validateNumber: function (t) {
        'use strict'
        var e = parseInt(t)
        return isNaN(e) || e < 0 ? 0 : e
      },
      toString: function () {
        'use strict'
        return (
          (this.hours < 10 ? '0' : '') +
          this.hours +
          ':' +
          (this.minutes < 10 ? '0' : '') +
          this.minutes +
          ':' +
          (this.seconds < 10 ? '0' : '') +
          this.seconds +
          '.' +
          (this.milliseconds < 100 ? '0' : '') +
          (this.milliseconds < 10 ? '0' : '') +
          this.milliseconds
        )
      },
      toSecond: function () {
        'use strict'
        if (this.isInitialized) {
          var t = this.seconds
          return (
            0 !== this.minutes && (t += 60 * this.minutes),
            0 !== this.hours && (t += 3600 * this.hours),
            t
          )
        }
        return -1
      },
      toMillisecond: function () {
        'use strict'
        return this.isInitialized
          ? 1e3 * this.toSecond() + this.milliseconds
          : -1
      },
      decrease: function (t) {
        'use strict'
        if (this.isInitialized) {
          if (!t || 'number' != typeof t || t < 0) return !1
          var e = 1e3 * this.toSecond() + this.milliseconds - t
          if (e <= 0) return this.parseMillisecond(0), !0
          this.parseMillisecond(e)
        }
        return !1
      },
      percentTime: function (t) {
        'use strict'
        if (
          !t ||
          'string' != typeof t ||
          0 === t.length ||
          t.indexOf('%') !== t.length - 1 ||
          isNaN(Number(t.substr(0, t.length - 1)))
        )
          return this.parseMillisecond(0), void (this.isInitialized = !1)
        t = Number(t.substr(0, t.length - 1))
        var e = this.toMillisecond()
        ;(e *= t / 100), this.parseMillisecond(Math.floor(e))
      }
    }),
      (t.exports = i)
  },
  function (t, e) {
    t.exports = {
      Vast_Node_Name: 'VAST',
      Ad_Node_Name: 'Ad',
      Inline_Node_Name: 'InLine',
      Wrapper_Node_Name: 'Wrapper',
      Adsystem_Node_Name: 'AdSystem',
      Creatives_Node_Name: 'Creatives',
      Creative_Node_Name: 'Creative',
      Error_Node_Name: 'Error',
      Impression_Node_Name: 'Impression',
      Description_Node_Name: 'Description',
      Survey_Node_Name: 'Survey',
      Adtitle_Node_Name: 'AdTitle',
      Vast_Ad_Tag_Uri_Node_Name: 'VASTAdTagURI',
      Ad_Parameters_Node_Name: 'AdParameters',
      Linear_Node_Name: 'Linear',
      Duration_Node_Name: 'Duration',
      Tracking_Events_Node_Name: 'TrackingEvents',
      Tracking_Node_Name: 'Tracking',
      Video_Clicks_Node_Name: 'VideoClicks',
      Media_Files_Node_Name: 'MediaFiles',
      Media_File_Node_Name: 'MediaFile',
      Click_Through_Node_Name: 'ClickThrough',
      Click_Tracking_Node_Name: 'ClickTracking',
      Companion_Ads_Node_Name: 'CompanionAds',
      Icons_Node_Name: 'Icons',
      Icon_Node_Name: 'Icon',
      Icon_Clicks_Node_Name: 'IconClicks',
      Icon_Click_Through_Node_Name: 'IconClickThrough',
      Icon_Click_Tracking_Node_Name: 'IconClickTracking',
      Icon_View_Tracking_Node_Name: 'IconViewTracking',
      Static_Resource_Node_Name: 'StaticResource',
      Iframe_Resource_Node_Name: 'IFrameResource',
      Html_Resource_Node_Name: 'HTMLResource',
      Extensions_Node_Name: 'Extensions',
      Extension_Node_Name: 'Extension',
      Ad_Verifications_Node_Name: 'AdVerifications',
      Verification_Node_Name: 'Verification',
      JavaScript_Resource_Node_Name: 'JavaScriptResource',
      Verification_Parameters_Node_Name: 'VerificationParameters',
      Nielsen_Node_Name: 'NielsenOBE',
      Version_Attribute_Name: 'version',
      Id_Attribute_Name: 'id',
      Sequence_Attribute_Name: 'sequence',
      Adid_Attribute_Name: 'AdID',
      Event_Attribute_Name: 'event',
      Delivery_Attribute_Name: 'delivery',
      Type_Attribute_Name: 'type',
      Bitrate_Attribute_Name: 'bitrate',
      Width_Attribute_Name: 'width',
      Height_Attribute_Name: 'height',
      Offset_Attribute_Name: 'offset',
      Skip_Offset_Attribute_Name: 'skipoffset',
      Maintain_Aspect_Ratio_Attribute_Name: 'maintainAspectRatio',
      Api_Framework_Attribute_Name: 'apiFramework',
      Scalable_Attribute_Name: 'scalable',
      Program_Attribute_Name: 'program',
      X_Position_Attribute_Name: 'xPosition',
      Y_Position_Attribute_Name: 'yPosition',
      Duration_Attribute_Name: 'duration',
      Creative_Type_Attribute_Name: 'creativeType',
      Vendor_Attribute_Name: 'vendor',
      Browser_Optional_Attribute_Name: 'browserOptional',
      Linear: 'linear',
      Companion: 'companion',
      Non_Linear: 'nonLinear',
      Available_Events: [
        'creativeView',
        'start',
        'firstQuartile',
        'midpoint',
        'thirdQuartile',
        'complete',
        'mute',
        'unmute',
        'pause',
        'rewind',
        'resume',
        'fullscreen',
        'exitFullscreen',
        'expand',
        'collapse',
        'acceptInvitation',
        'acceptInvitationLinear',
        'close',
        'closeLinear',
        'skip',
        'progress'
      ],
      Available_Verification_Events: ['verificationNotExecuted'],
      Omid_Extension_Type: 'AdVerifications',
      Supported_Delivery_Type: ['progressive', 'streaming'],
      Supported_Video_Type: [
        'video/mpeg',
        'video/mp4',
        'video/webm',
        'video/quicktime',
        'video/x-msvideo',
        'application/x-javascript',
        'application/javascript'
      ],
      Supported_Vpaid_Type: [
        'application/x-javascript',
        'application/javascript'
      ],
      Not_Supported_Video_Type: [
        'video/x-flv',
        'video/flv',
        'video/3gpp',
        'video/x-ms-wmv',
        'application/x-mpegURL',
        'video/MP2T'
      ],
      Vpaid_Api: 'VPAID',
      Supported_Icon_Type: ['image/jpeg', 'image/jpg', 'image/gif', 'image/png']
    }
  },
  function (t, e, i) {
    var r = i(51),
      s = i(8).createLogger(
        'js.vastLoader.RenditionSelector',
        'RenditionSelector'
      ),
      n = 0,
      o = 1,
      a = 800,
      d = 400,
      l = function (t, e) {
        'use strict'
        ;(this.uaParser = new r()),
          (this.availableTypes = {
            html5: [
              'video/mp4',
              'video/webm',
              'video/ogg',
              'application/javascript',
              'application/x-javascript'
            ]
          }),
          (this.preference = { bitrate: o }),
          (this.videoSlot = e || {}),
          (this.mediaFilesVPAIDJs = []),
          (this.mediaFilesVideo = []),
          (this.defaultBitrate = a),
          t && (this.filterTypeByBrowser(), this.mediaListsInit(t))
      }
    ;(l.prototype = {
      filterTypeByBrowser: function () {
        this.defaultBitrate = a
        var t = !!this.videoSlot.canPlayType
        try {
          if (t) {
            var e = !0,
              i = !0,
              r = !0,
              n = this.videoSlot.canPlayType('video/ogg')
            ;('' !== n && 'no' !== n && void 0 !== n) ||
              (this.removeSupport('html5', 'video/ogg'), (e = !1)),
              (n = this.videoSlot.canPlayType('video/mp4')),
              ('' !== n && 'no' !== n && void 0 !== n) ||
                (this.removeSupport('html5', 'video/mp4'), (i = !1)),
              (n = this.videoSlot.canPlayType('video/webm')),
              ('' !== n && 'no' !== n && void 0 !== n) ||
                (this.removeSupport('html5', 'video/webm'), (r = !1)),
              s.debug('filterTypeByBrowser', {
                ogg: this.videoSlot.canPlayType('video/ogg'),
                mp4: this.videoSlot.canPlayType('video/mp4'),
                webm: this.videoSlot.canPlayType('video/webm')
              }),
              e ||
                i ||
                r ||
                ((t = !1),
                (this.availableTypes.html5 = [
                  'video/mp4',
                  'video/webm',
                  'video/ogg',
                  'application/javascript',
                  'application/x-javascript'
                ]))
          }
        } catch (o) {
          s.error('filterTypeByBrowser', { error: o.message }), (t = !1)
        }
        var l = this.uaParser.getBrowser(),
          u = this.uaParser.getOS()
        if (
          (s.debug('filterTypeByBrowser', {
            browser: l.name,
            version: l.major,
            os: u.name
          }),
          !t)
        )
          switch (l.name) {
            case 'IE':
              l.major &&
                l.major < 9 &&
                this.removeSupport('html5', 'video/mp4'),
                this.removeSupport('html5', 'video/webm'),
                this.removeSupport('html5', 'video/ogg')
              break
            case 'IE Mobile':
              l.major &&
                l.major < 8 &&
                this.removeSupport('html5', 'video/mp4'),
                this.removeSupport('html5', 'video/webm'),
                this.removeSupport('html5', 'video/ogg')
              break
            case 'Edge':
              l.major &&
                l.major < 14 &&
                this.removeSupport('html5', 'video/webm'),
                this.removeSupport('html5', 'video/ogg')
              break
            case 'Safari':
            case 'Mobile Safari':
              this.removeSupport('html5', 'video/webm'),
                this.removeSupport('html5', 'video/ogg')
              break
            case 'Android Browser':
              this.removeSupport('html5', 'video/ogg')
              break
            case 'Opera Mini':
              this.removeSupport('html5', 'video/mp4'),
                this.removeSupport('html5', 'video/webm'),
                this.removeSupport('html5', 'video/ogg')
          }
        switch (u.name) {
          case 'Android':
          case 'iOS':
          case 'Windows Phone':
          case 'Windows Mobile':
          case 'BlackBerry':
            return void (this.defaultBitrate = d)
        }
      },
      removeSupport: function (t, e) {
        if (this.availableTypes.hasOwnProperty(t)) {
          var i = this.availableTypes[t].indexOf(e)
          i !== -1 && this.availableTypes[t].splice(i, 1)
        }
      },
      mediaListsInit: function (t) {
        'use strict'
        if (
          ((this.mediaFilesVPAIDJs = []),
          (this.mediaFilesVideo = []),
          t && t.length)
        )
          for (var e = 0; e < t.length; e++) {
            var i = t[e]
            i.hasOwnProperty('type') &&
              i.hasOwnProperty('url') &&
              '' !== i.url &&
              ((!i.hasOwnProperty('width') ||
                'number' != typeof i.width ||
                i.width < 0) &&
                (i.width = 0),
              (!i.hasOwnProperty('height') ||
                'number' != typeof i.height ||
                i.height < 0) &&
                (i.height = 0),
              (!i.hasOwnProperty('bitrate') ||
                'number' != typeof i.bitrate ||
                i.bitrate < 0) &&
                (i.bitrate = 2147483647),
              i.hasOwnProperty('apiFramework') &&
              0 === i.apiFramework.toLowerCase().indexOf('vpaid')
                ? this.isHtml5Type(i.type) && this.mediaFilesVPAIDJs.push(i)
                : this.isHtml5Type(i.type) && this.mediaFilesVideo.push(i))
          }
      },
      getMedia: function (t, e, i, r) {
        'use strict'
        if (this.mediaFilesVPAIDJs.length > 0) return this.mediaFilesVPAIDJs[0]
        if (this.mediaFilesVideo.length > 0) {
          this.setPreference(r),
            (!i || i <= 0) && (i = this.defaultBitrate),
            (this.mediaFilesVideo = this.orderBitRate(this.mediaFilesVideo))
          var s = this.selectMediaFile(t, i, this.mediaFilesVideo)
          if (s) return s
        }
        return null
      },
      selectMediaFile: function (t, e, i) {
        'use strict'
        for (var r = {}, o = 0; o < i.length && i[o].width >= t; o++)
          r.hasOwnProperty(i[o].width) || (r[i[o].width] = []),
            r[i[o].width].push(i[o])
        var a = Object.keys(r).sort(
        if (!(a.length > 0))
          return i.length > 0 ? this.selectMediaFile(i[0].width, e, i) : null
        r = r[a[0]]
        var d = null
        if (1 === r.length) d = r[0]
        else {
          for (var l = 0; l < r.length; l++) {
            if (!(r[l].bitrate >= e)) {
              this.preference.bitrate === n && (d = r[l])
              break
            }
            d = r[l]
          }
          null === d && (d = r[0])
        }
        return (
          s.debug('selectedMedia', {
            width: d.width,
            height: d.height,
            bitrate: d.bitrate,
            type: d.type
          }),
          d
        )
      },
      setPreference: function (t) {
        'use strict'
        ;(this.preference.bitrate = -1),
          t &&
            'object' == typeof t &&
            t.hasOwnProperty('bitrate') &&
            'string' == typeof t.bitrate &&
            ('lowest' === t.bitrate.toLowerCase()
              ? (this.preference.bitrate = n)
              : 'highest' === t.bitrate.toLowerCase() &&
                (this.preference.bitrate = o)),
          this.preference.bitrate == -1 && (this.preference.bitrate = o)
      },
      orderBitRate: function (t) {
        'use strict'
        var e = t.sort(function (t, e) {
          if (t.width >= e.width) {
            if (t.bitrate > e.bitrate) return -1
            if (t.bitrate < e.bitrate) return 1
          } else if (t.width < e.width) return 1
          return 0
        })
        return e
      },
      isHtml5Type: function (t) {
        'use strict'
        return this.availableTypes.html5.indexOf(t) > -1
      }
    }),
      (t.exports = l),
      (t.exports.DEFAULT_BITRATE_DESKTOP = a),
      (t.exports.DEFAULT_BITRATE_MOBILE = d)
  },
  function (t, e, i) {
    var r
    !(function (s, n) {
      'use strict'
      var o = '0.7.21',
        a = '',
        d = '?',
        l = 'function',
        u = 'undefined',
        c = 'object',
        h = 'string',
        p = 'major',
        f = 'model',
        g = 'name',
        m = 'type',
        v = 'vendor',
        _ = 'version',
        b = 'architecture',
        y = 'console',
        A = 'mobile',
        w = 'tablet',
        E = 'smarttv',
        S = 'wearable',
        k = 'embedded',
        C = {
          extend: 
          has: 
          lowerize: function (t) {
            return t.toLowerCase()
          },
          major: 
          trim:         },
        T = {
          rgx: 
          str:         },
        I = {
          browser: {
            oldsafari: {
              version: {
                '1.0': '/8',
                1.2: '/1',
                1.3: '/3',
                '2.0': '/412',
                '2.0.2': '/416',
                '2.0.3': '/417',
                '2.0.4': '/419',
                '?': '/'
              }
            }
          },
          device: {
            amazon: { model: { 'Fire Phone': ['SD', 'KF'] } },
            sprint: {
              model: { 'Evo Shift 4G': '7373KT' },
              vendor: { HTC: 'APA', Sprint: 'Sprint' }
            }
          },
          os: {
            windows: {
              version: {
                ME: '4.90',
                'NT 3.11': 'NT3.51',
                'NT 4.0': 'NT4.0',
                2000: 'NT 5.0',
                XP: ['NT 5.1', 'NT 5.2'],
                Vista: 'NT 6.0',
                7: 'NT 6.1',
                8: 'NT 6.2',
                8.1: 'NT 6.3',
                10: ['NT 6.4', 'NT 10.0'],
                RT: 'ARM'
              }
            }
          }
        },
        N = {
          browser: [
            [
              /(opera\smini)\/([\w\.-]+)/i,
              /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
              /(opera).+version\/([\w\.]+)/i,
              /(opera)[\/\s]+([\w\.]+)/i
            ],
            [g, _],
            [/(opios)[\/\s]+([\w\.]+)/i],
            [[g, 'Opera Mini'], _],
            [/\s(opr)\/([\w\.]+)/i],
            [[g, 'Opera'], _],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
              /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
              /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
              /(?:ms|\()(ie)\s([\w\.]+)/i,
              /(rekonq)\/([\w\.]*)/i,
              /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
            ],
            [g, _],
            [/(konqueror)\/([\w\.]+)/i],
            [[g, 'Konqueror'], _],
            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
            [[g, 'IE'], _],
            [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
            [[g, 'Edge'], _],
            [/(yabrowser)\/([\w\.]+)/i],
            [[g, 'Yandex'], _],
            [/(Avast)\/([\w\.]+)/i],
            [[g, 'Avast Secure Browser'], _],
            [/(AVG)\/([\w\.]+)/i],
            [[g, 'AVG Secure Browser'], _],
            [/(puffin)\/([\w\.]+)/i],
            [[g, 'Puffin'], _],
            [/(focus)\/([\w\.]+)/i],
            [[g, 'Firefox Focus'], _],
            [/(opt)\/([\w\.]+)/i],
            [[g, 'Opera Touch'], _],
            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
            [[g, 'UCBrowser'], _],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[g, /_/g, ' '], _],
            [/(windowswechat qbcore)\/([\w\.]+)/i],
            [[g, 'WeChat(Win) Desktop'], _],
            [/(micromessenger)\/([\w\.]+)/i],
            [[g, 'WeChat'], _],
            [/(brave)\/([\w\.]+)/i],
            [[g, 'Brave'], _],
            [/(qqbrowserlite)\/([\w\.]+)/i],
            [g, _],
            [/(QQ)\/([\d\.]+)/i],
            [g, _],
            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
            [g, _],
            [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
            [g, _],
            [/(2345Explorer)[\/\s]?([\w\.]+)/i],
            [g, _],
            [/(MetaSr)[\/\s]?([\w\.]+)/i],
            [g],
            [/(LBBROWSER)/i],
            [g],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
            [_, [g, 'MIUI Browser']],
            [/;fbav\/([\w\.]+);/i],
            [_, [g, 'Facebook']],
            [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
            [g, _],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [_, [g, 'Chrome Headless']],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [[g, /(.+)/, '$1 WebView'], _],
            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
            [[g, /(.+(?:g|us))(.+)/, '$1 $2'], _],
            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
            [_, [g, 'Android Browser']],
            [/(sailfishbrowser)\/([\w\.]+)/i],
            [[g, 'Sailfish Browser'], _],
            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [g, _],
            [/(dolfin)\/([\w\.]+)/i],
            [[g, 'Dolphin'], _],
            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
            [[g, '360 Browser']],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [[g, 'Chrome'], _],
            [/(coast)\/([\w\.]+)/i],
            [[g, 'Opera Coast'], _],
            [/fxios\/([\w\.-]+)/i],
            [_, [g, 'Firefox']],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [_, [g, 'Mobile Safari']],
            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
            [_, g],
            [
              /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i
            ],
            [[g, 'GSA'], _],
            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [g, [_, T.str, I.browser.oldsafari.version]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [g, _],
            [/(navigator|netscape)\/([\w\.-]+)/i],
            [[g, 'Netscape'], _],
            [
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
              /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
              /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
              /(links)\s\(([\w\.]+)/i,
              /(gobrowser)\/?([\w\.]*)/i,
              /(ice\s?browser)\/v?([\w\._]+)/i,
              /(mosaic)[\/\s]([\w\.]+)/i
            ],
            [g, _]
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
            [[b, 'amd64']],
            [/(ia32(?=;))/i],
            [[b, C.lowerize]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[b, 'ia32']],
            [/windows\s(ce|mobile);\sppc;/i],
            [[b, 'arm']],
            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
            [[b, /ower/, '', C.lowerize]],
            [/(sun4\w)[;\)]/i],
            [[b, 'sparc']],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
            ],
            [[b, C.lowerize]]
          ],
          device: [
            [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
            [f, v, [m, w]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [f, [v, 'Apple'], [m, w]],
            [/(apple\s{0,1}tv)/i],
            [
              [f, 'Apple TV'],
              [v, 'Apple'],
              [m, E]
            ],
            [
              /(archos)\s(gamepad2?)/i,
              /(hp).+(touchpad)/i,
              /(hp).+(tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /\s(nook)[\w\s]+build\/(\w+)/i,
              /(dell)\s(strea[kpr\s\d]*[\dko])/i
            ],
            [v, f, [m, w]],
            [/(kf[A-z]+)\sbuild\/.+silk\//i],
            [f, [v, 'Amazon'], [m, w]],
            [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
            [
              [f, T.str, I.device.amazon.model],
              [v, 'Amazon'],
              [m, A]
            ],
            [/android.+aft([bms])\sbuild/i],
            [f, [v, 'Amazon'], [m, E]],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [f, v, [m, A]],
            [/\((ip[honed|\s\w*]+);/i],
            [f, [v, 'Apple'], [m, A]],
            [
              /(blackberry)[\s-]?(\w+)/i,
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
              /(hp)\s([\w\s]+\w)/i,
              /(asus)-?(\w+)/i
            ],
            [v, f, [m, A]],
            [/\(bb10;\s(\w+)/i],
            [f, [v, 'BlackBerry'], [m, A]],
            [
              /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i
            ],
            [f, [v, 'Asus'], [m, w]],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [
              [v, 'Sony'],
              [f, 'Xperia Tablet'],
              [m, w]
            ],
            [
              /android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [f, [v, 'Sony'], [m, A]],
            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
            [v, f, [m, y]],
            [/android.+;\s(shield)\sbuild/i],
            [f, [v, 'Nvidia'], [m, y]],
            [/(playstation\s[34portablevi]+)/i],
            [f, [v, 'Sony'], [m, y]],
            [/(sprint\s(\w+))/i],
            [
              [v, T.str, I.device.sprint.vendor],
              [f, T.str, I.device.sprint.model],
              [m, A]
            ],
            [
              /(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,
              /(zte)-(\w*)/i,
              /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
            ],
            [v, [f, /_/g, ' '], [m, A]],
            [/(nexus\s9)/i],
            [f, [v, 'HTC'], [m, w]],
            [
              /d\/huawei([\w\s-]+)[;\)]/i,
              /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i
            ],
            [f, [v, 'Huawei'], [m, A]],
            [/android.+(bah2?-a?[lw]\d{2})/i],
            [f, [v, 'Huawei'], [m, w]],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [v, f, [m, A]],
            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
            [f, [v, 'Microsoft'], [m, y]],
            [/(kin\.[onetw]{3})/i],
            [
              [f, /\./g, ' '],
              [v, 'Microsoft'],
              [m, A]
            ],
            [
              /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
              /mot[\s-]?(\w*)/i,
              /(XT\d{3,4}) build\//i,
              /(nexus\s6)/i
            ],
            [f, [v, 'Motorola'], [m, A]],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [f, [v, 'Motorola'], [m, w]],
            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
            [
              [v, C.trim],
              [f, C.trim],
              [m, E]
            ],
            [/hbbtv.+maple;(\d+)/i],
            [
              [f, /^/, 'SmartTV'],
              [v, 'Samsung'],
              [m, E]
            ],
            [/\(dtv[\);].+(aquos)/i],
            [f, [v, 'Sharp'], [m, E]],
            [
              /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
              /((SM-T\w+))/i
            ],
            [[v, 'Samsung'], f, [m, w]],
            [/smart-tv.+(samsung)/i],
            [v, [m, E], f],
            [
              /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
              /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
              /sec-((sgh\w+))/i
            ],
            [[v, 'Samsung'], f, [m, A]],
            [/sie-(\w*)/i],
            [f, [v, 'Siemens'], [m, A]],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
            [[v, 'Nokia'], f, [m, A]],
            [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
            [f, [v, 'Acer'], [m, w]],
            [/android.+([vl]k\-?\d{3})\s+build/i],
            [f, [v, 'LG'], [m, w]],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [[v, 'LG'], f, [m, w]],
            [/(lg) netcast\.tv/i],
            [v, f, [m, E]],
            [
              /(nexus\s[45])/i,
              /lg[e;\s\/-]+(\w*)/i,
              /android.+lg(\-?[\d\w]+)\s+build/i
            ],
            [f, [v, 'LG'], [m, A]],
            [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
            [v, f, [m, w]],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [f, [v, 'Lenovo'], [m, w]],
            [/(lenovo)[_\s-]?([\w-]+)/i],
            [v, f, [m, A]],
            [/linux;.+((jolla));/i],
            [v, f, [m, A]],
            [/((pebble))app\/[\d\.]+\s/i],
            [v, f, [m, S]],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [v, f, [m, A]],
            [/crkey/i],
            [
              [f, 'Chromecast'],
              [v, 'Google'],
              [m, E]
            ],
            [/android.+;\s(glass)\s\d/i],
            [f, [v, 'Google'], [m, S]],
            [/android.+;\s(pixel c)[\s)]/i],
            [f, [v, 'Google'], [m, w]],
            [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
            [f, [v, 'Google'], [m, A]],
            [
              /android.+;\s(\w+)\s+build\/hm\1/i,
              /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
              /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
              /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
            ],
            [
              [f, /_/g, ' '],
              [v, 'Xiaomi'],
              [m, A]
            ],
            [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
            [
              [f, /_/g, ' '],
              [v, 'Xiaomi'],
              [m, w]
            ],
            [/android.+;\s(m[1-5]\snote)\sbuild/i],
            [f, [v, 'Meizu'], [m, A]],
            [/(mz)-([\w-]{2,})/i],
            [[v, 'Meizu'], f, [m, A]],
            [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
            [f, [v, 'OnePlus'], [m, A]],
            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
            [f, [v, 'RCA'], [m, w]],
            [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
            [f, [v, 'Dell'], [m, w]],
            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
            [f, [v, 'Verizon'], [m, w]],
            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
            [[v, 'Barnes & Noble'], f, [m, w]],
            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
            [f, [v, 'NuVision'], [m, w]],
            [/android.+;\s(k88)\sbuild/i],
            [f, [v, 'ZTE'], [m, w]],
            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
            [f, [v, 'Swiss'], [m, A]],
            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
            [f, [v, 'Swiss'], [m, w]],
            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
            [f, [v, 'Zeki'], [m, w]],
            [
              /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
              /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i
            ],
            [[v, 'Dragon Touch'], f, [m, w]],
            [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
            [f, [v, 'Insignia'], [m, w]],
            [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
            [f, [v, 'NextBook'], [m, w]],
            [
              /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i
            ],
            [[v, 'Voice'], f, [m, A]],
            [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
            [[v, 'LvTel'], f, [m, A]],
            [/android.+;\s(PH-1)\s/i],
            [f, [v, 'Essential'], [m, A]],
            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
            [f, [v, 'Envizen'], [m, w]],
            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
            [v, f, [m, w]],
            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
            [f, [v, 'MachSpeed'], [m, w]],
            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
            [v, f, [m, w]],
            [/android.+[;\/]\s*TU_(1491)\s+build/i],
            [f, [v, 'Rotor'], [m, w]],
            [/android.+(KS(.+))\s+build/i],
            [f, [v, 'Amazon'], [m, w]],
            [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
            [v, f, [m, w]],
            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [[m, C.lowerize], v, f],
            [/[\s\/\(](smart-?tv)[;\)]/i],
            [[m, E]],
            [/(android[\w\.\s\-]{0,9});.+build/i],
            [f, [v, 'Generic']]
          ],
          engine: [
            [/windows.+\sedge\/([\w\.]+)/i],
            [_, [g, 'EdgeHTML']],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [_, [g, 'Blink']],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
              /(icab)[\/\s]([23]\.[\d\.]+)/i
            ],
            [g, _],
            [/rv\:([\w\.]{1,9}).+(gecko)/i],
            [_, g]
          ],
          os: [
            [/microsoft\s(windows)\s(vista|xp)/i],
            [g, _],
            [
              /(windows)\snt\s6\.2;\s(arm)/i,
              /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
              /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ],
            [g, [_, T.str, I.os.windows.version]],
            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
            [
              [g, 'Windows'],
              [_, T.str, I.os.windows.version]
            ],
            [/\((bb)(10);/i],
            [[g, 'BlackBerry'], _],
            [
              /(blackberry)\w*\/?([\w\.]*)/i,
              /(tizen|kaios)[\/\s]([\w\.]+)/i,
              /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
            ],
            [g, _],
            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
            [[g, 'Symbian'], _],
            [/\((series40);/i],
            [g],
            [/mozilla.+\(mobile;.+gecko.+firefox/i],
            [[g, 'Firefox OS'], _],
            [
              /(nintendo|playstation)\s([wids34portablevu]+)/i,
              /(mint)[\/\s\(]?(\w*)/i,
              /(mageia|vectorlinux)[;\s]/i,
              /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
              /(hurd|linux)\s?([\w\.]*)/i,
              /(gnu)\s?([\w\.]*)/i
            ],
            [g, _],
            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
            [[g, 'Chromium OS'], _],
            [/(sunos)\s?([\w\.\d]*)/i],
            [[g, 'Solaris'], _],
            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
            [g, _],
            [/(haiku)\s(\w+)/i],
            [g, _],
            [
              /cfnetwork\/.+darwin/i,
              /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i
            ],
            [
              [_, /_/g, '.'],
              [g, 'iOS']
            ],
            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
            [
              [g, 'Mac OS'],
              [_, /_/g, '.']
            ],
            [
              /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
              /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
              /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
              /(unix)\s?([\w\.]*)/i
            ],
            [g, _]
          ]
        },
        x =       ;(x.VERSION = o),
        (x.BROWSER = { NAME: g, MAJOR: p, VERSION: _ }),
        (x.CPU = { ARCHITECTURE: b }),
        (x.DEVICE = {
          MODEL: f,
          VENDOR: v,
          TYPE: m,
          CONSOLE: y,
          MOBILE: A,
          SMARTTV: E,
          TABLET: w,
          WEARABLE: S,
          EMBEDDED: k
        }),
        (x.ENGINE = { NAME: g, VERSION: _ }),
        (x.OS = { NAME: g, VERSION: _ }),
        typeof e !== u
          ? (typeof t !== u && t.exports && (e = t.exports = x),
            (e.UAParser = x))
          : ((r = call(e, i, e, t)),
            !(r !== n && (t.exports = r)))
      var P = s && (s.jQuery || s.Zepto)
      if (P && !P.ua) {
        var M = new x()
        ;(P.ua = M.getResult()),
          (P.ua.get = ,
          (P.ua.set = 
      }
    })('object' == typeof window ? window : this)
  },
  function (t, e, i) {
    var r = i(11),
      s = i(7),
      n = i(12),
      o = i(8).createLogger('js.client.proxyHTML5.ProxyHTML5', 'ProxyHTML5'),
      a = 1,
      d = 2,
      l = 3,
      u = 4,
      c = function (t, e) {
        'use strict'
        ;(this.type = 'Proxy HTML5'),
          o.info('ProxyHTML5', { type: this.type }),
          (this.wrapper = e),
          (this.dom = {
            slot: e.dom.slot,
            videoSlot: e.dom.videoSlot,
            iframe: null
          }),
          (this.target = null),
          (this.targetUrl = t),
          (this.attributes = { version: null, volume: 0 }),
          (this.status = a),
          (this.missingVolume = !1),
          (this.volumeListeners = bind(this))
      }
    ;(c.prototype = {
      loadProxy: function () {
        'use strict'
        this.loadJS(
          this.jsLoadedHandle.bind(this),
          this.jsLoadingError.bind(this)
        )
      },
      loadJS: function (t, e) {
        'use strict'
        var i = this.dom.slot.ownerDocument.createElement('iframe')
        ;(i.style.position = this.dom.slot.style.position || 'absolute'),
          (i.style.width = 0),
          (i.style.height = 0),
          (i.style.border = '0 none'),
          (i.frameborder = 0),
          navigator.userAgent.indexOf('Firefox') != -1 &&
            (i.src = 'javascript:void;'),
          this.dom.slot.appendChild(i),
          (this.dom.iframe = i)
        var r = i.contentWindow.document.createElement('script')
        ;(r.type = 'text/javascript'),
          (r.src = this.targetUrl),
          r.readyState
            ? (r.onreadystatechange = function () {
                ;('loaded' != r.readyState && 'complete' != r.readyState) ||
                  ((r.onreadystatechange = null), t())
              })
            : (r.onload = function () {
                t()
              }),
          (r.onerror = ,
          i.contentWindow.document.body.appendChild(r)
      },
      jsLoadedHandle: function () {
        'use strict'
        try {
          this.target = this.dom.iframe.contentWindow.getVPAIDAd()
        } catch (t) {
          return void this.notifyError(s.Proxy_HTML5_Not_Loaded(t.toString()))
        }
        void 0 !== this.target && null !== this.target
          ? (this.dom.videoSlot.addEventListener(
              'volumechange',
              this.volumeListeners,
              !0
            ),
            this.updateVolume(!0),
            this.handshakeVersion(this.wrapper.attributes.version),
            this.initAd())
          : (o.error('jsLoadedHandle', { error: 'VPAID HTML5 not loaded' }),
            this.notifyError(s.Proxy_HTML5_Not_Loaded()))
      },
      jsLoadingError: function () {
        'use strict'
        this.notifyError(s.Proxy_Script_Loading_Error(this.targetUrl))
      },
      getAdLinear: function () {
        'use strict'
        return this.sendToJS('getAdLinear')
      },
      getAdWidth: function () {
        'use strict'
        return this.sendToJS('getAdWidth')
      },
      getAdHeight: function () {
        'use strict'
        return this.sendToJS('getAdHeight')
      },
      getAdExpanded: function () {
        'use strict'
        return this.sendToJS('getAdExpanded')
      },
      getAdSkippableState: function () {
        'use strict'
        return this.sendToJS('getAdSkippableState')
      },
      getAdRemainingTime: function () {
        'use strict'
        return this.sendToJS('getAdRemainingTime')
      },
      getAdDuration: function () {
        'use strict'
        return this.sendToJS('getAdDuration')
      },
      getAdVolume: function () {
        'use strict'
        return this.sendToJS('getAdVolume')
      },
      setAdVolume: function (t) {
        'use strict'
        this.sendToJS('setAdVolume', [t])
      },
      getAdCompanions: function () {
        'use strict'
        return this.sendToJS('getAdCompanions')
      },
      getAdIcons: function () {
        'use strict'
        return this.sendToJS('getAdIcons')
      },
      handshakeVersion: function (t) {
        'use strict'
        ;(this.attributes.version = this.sendToJS('handshakeVersion', [t])),
          (this.wrapper.targetAttributes.version = this.attributes.version),
          o.debug('handshakeVersion', {
            wrapper: t,
            vpaid: this.attributes.version
          })
      },
      initAd: function () {
        'use strict'
        o.debug('initAd', { target: 'vpaid HTML5' }), this.sendSubscribe()
        var t = { AdParameters: this.wrapper.ad.adParameters || '' },
          e = { slot: this.dom.slot, videoSlot: this.dom.videoSlot }
        this.sendToJS('initAd', [
          this.wrapper.attributes.width,
          this.wrapper.attributes.height,
          this.wrapper.attributes.viewMode,
          this.wrapper.attributes.bitrate,
          t,
          e
        ])
      },
      resizeAd: function (t, e, i) {
        'use strict'
        ;(this.dom.slot.style.width = t + 'px'),
          (this.dom.slot.style.height = e + 'px'),
          (this.dom.videoSlot.style &&
            this.dom.videoSlot.style.width &&
            this.dom.videoSlot.style.height) ||
          !this.dom.videoSlot.width ||
          !this.dom.videoSlot.height
            ? this.dom.videoSlot.style &&
              ((this.dom.videoSlot.style.width = t + 'px'),
              (this.dom.videoSlot.style.height = e + 'px'))
            : ((this.dom.videoSlot.width = t + 'px'),
              (this.dom.videoSlot.height = e + 'px')),
          this.sendToJS('resizeAd', [t, e, i])
      },
      startAd: function () {
        'use strict'
        this.sendToJS('startAd')
      },
      stopAd: function () {
        'use strict'
        this.sendToJS('stopAd'), this.sendUnsubscribe()
      },
      pauseAd: function () {
        'use strict'
        this.sendToJS('pauseAd')
      },
      resumeAd: function () {
        'use strict'
        this.sendToJS('resumeAd')
      },
      expandAd: function () {
        'use strict'
        this.sendToJS('expandAd')
      },
      collapseAd: function () {
        'use strict'
        this.sendToJS('collapseAd')
      },
      skipAd: function () {
        'use strict'
        this.sendToJS('skipAd')
      },
      sendSubscribe: function () {
        'use strict'
        for (var t in r)
          this.target.subscribe(this[r[t]].bind(this), r[t], this)
      },
      sendUnsubscribe: function () {
        'use strict'
        for (var t in r)
          this.target.unsubscribe(this[r[t]].bind(this), r[t], this)
      },
      dispose: function () {
        'use strict'
        this.dom.videoSlot.removeEventListener(
          'volumechange',
          this.volumeListeners,
          !0
        ),
          this.dom.slot.removeChild(this.dom.iframe),
          (this.target = null),
          (this.wrapper.disposeFlags.target = !0)
      },
      notifyError: function (t) {
        setTimeout(
          bind(this),
          0
        )
      },
      sendToJS: function (t, e) {
        'use strict'
        if (this.target) {
          'getAdDuration' != t &&
            'getAdRemainingTime' != t &&
            o.debug('sendToJS', { called: t }),
            void 0 === e && (e = [])
          var i = null
          try {
            this.target[t]
              ? (i = this.target[t].apply(this.target, e))
              : o.warn('sendToJS', { message: 'Unknwon method name : ' + t })
          } catch (r) {
            if (
              (o.error('sendToJS', {
                message: "Can't send request to JS",
                method: t,
                error: r.message
              }),
              ['getAdRemainingTime', 'getAdVolume', 'setAdVolume'].indexOf(t) ==
                -1)
            )
              switch (this.status) {
                case a:
                  this.notifyError(s.JS_Loading_Interface_Error(t))
                  break
                case d:
                  this.notifyError(s.JS_Starting_Interface_Error(t))
                  break
                case l:
                  this.notifyError(s.JS_Playing_Interface_Error(t))
              }
          }
          if (null !== i && void 0 !== i) return i
        } else 'stopAd' == t && this.AdStopped()
      },
      updateVolume: function (t) {
        'use strict'
        try {
          var e = 0
          if (this.dom.videoSlot.muted) e = 0
          else if (
            ((e = this.dom.videoSlot.volume),
            null === e || isNaN(e) || e < 0 || e > 1)
          )
            return
          var i = e !== this.attributes.volume
          ;(i || t) &&
            ((this.attributes.volume = e),
            setTimeout(
              bind(this),
              10
            ))
        } catch (n) {
          this.missingVolume ||
            (this.wrapper.internalLogger.sendInternalError(
              s.Video_Volume_Error()
            ),
            (this.missingVolume = !0))
        }
      },
      AdLoaded: function () {
        'use strict'
        ;(this.status = d), this.wrapper.vpaidEventHandler(r.Ad_Loaded)
      },
      AdStarted: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Started)
      },
      AdStopped: function () {
        'use strict'
        ;(this.status = u), this.wrapper.vpaidEventHandler(r.Ad_Stopped)
      },
      AdSkipped: function () {
        'use strict'
        ;(this.status = u), this.wrapper.vpaidEventHandler(r.Ad_Skipped)
      },
      AdSkippableStateChange: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Skippable_State_Change)
      },
      AdSizeChange: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Size_Change)
      },
      AdLinearChange: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Linear_Change)
      },
      AdDurationChange: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Duration_Change)
      },
      AdExpandedChange: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Expanded_Change)
      },
      AdRemainingTimeChange: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Remaining_Time_Change)
      },
      AdVolumeChange: 
      AdImpression: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Impression)
      },
      AdVideoStart: function () {
        'use strict'
        ;(this.status = l), this.wrapper.vpaidEventHandler(r.Ad_Video_Start)
      },
      AdVideoFirstQuartile: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Video_First_Quartile)
      },
      AdVideoMidpoint: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Video_Midpoint)
      },
      AdVideoThirdQuartile: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Video_Third_Quartile)
      },
      AdVideoComplete: function () {
        'use strict'
        ;(this.status = u), this.wrapper.vpaidEventHandler(r.Ad_Video_Complete)
      },
      AdClickThru: function (t, e, i) {
        'use strict'
        var s = n.validateAdClickThruData(t, e, i)
        this.wrapper.vpaidEventHandler(r.Ad_Click_Thru, s[0], s[1], s[2])
      },
      AdInteraction: function (t) {
        'use strict'
        var e = n.validateAdInteractionData(t)
        this.wrapper.vpaidEventHandler(r.Ad_Interaction, e)
      },
      AdUserAcceptInvitation: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_User_Accept_Invitation)
      },
      AdUserMinimize: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_User_Minimize)
      },
      AdUserClose: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_User_Close)
      },
      AdPaused: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Paused)
      },
      AdPlaying: function () {
        'use strict'
        this.wrapper.vpaidEventHandler(r.Ad_Playing)
      },
      AdLog: function (t) {
        'use strict'
        var e = n.validateAdLogData(t)
        this.wrapper.vpaidEventHandler(r.Ad_Log, e)
      },
      AdError: function (t, e) {
        'use strict'
        var i = n.validateAdErrorData(t, e),
          o = i[1]
        switch (this.status) {
          case a:
            o = s.External_Loading_Error(i[1])
            break
          case d:
            o = s.External_Starting_Error(i[1])
            break
          case l:
            o = s.External_Playing_Error(i[1])
            break
          default:
            o = s.External_Dispose_Error(i[1])
        }
        this.wrapper.vpaidEventHandler(r.Ad_Error, i[0], o)
      }
    }),
      (t.exports = c)
  },
  function (t, e, i) {
    var r = i(7),
      s = i(11),
      n = i(51),
      o = i(8).createLogger(
        'js.client.internalVideoPlayer.InternalVideoPlayer',
        'InternalVideoPlayer'
      ),
      a = i(54),
      d = 0,
      l = 1,
      u = 2,
      c = 3,
      h = 4,
      p = 5,
      f = 6,
      g = 7,
      m = 8,
      v = 9,
      _ = function (t, e) {
        'use strict'
        var i = new n()
        ;(this.type = 'Creative'),
          o.info('InternalVideoPlayer', { type: this.type }),
          o.debug('InternalVideoPlayer', { media: t }),
          (this.wrapper = e),
          (this.attributes = {
            version: '2.0',
            duration: this.wrapper.ad.duration.toSecond() || -1,
            remainingTime: this.wrapper.ad.duration.toSecond() || 0,
            currentTime: 0,
            width: e.attributes.width,
            height: e.attributes.height,
            volume: 1,
            browser: i.getBrowser(),
            os: i.getOS().name
          }),
          (this.isNaNDuration = !0),
          (this.quartiles = { first: !1, midPoint: !1, third: !1 }),
          (this.listeners = {}),
          (this.listenerSlot = null),
          (this.videoSlot = null),
          (this.playButton = null),
          (this.playButtonStyle = null),
          (this.targetUrl = t),
          (this.status = d),
          (this.stalledTimeout = null),
          (this.lastTimeUpdate = null),
          (this.missingVolume = !1)
      }
    ;(_.prototype = {
      loadPlayer: function () {
        'use strict'
        ;(this.videoSlot = this.wrapper.dom.videoSlot),
          (this.videoSlot.src = this.targetUrl),
          this.resizeVideoSlot(),
          this.videoUpdateVolume()
        try {
          this.initListeners(),
            (this.status = l),
            o.debug('loadPlayer', { initAd: 'creative' }),
            this.videoSlot.load(),
            (this.stalledTimeout = setTimeout(
              function () {
                'Edge' == this.attributes.browser.name ||
                'IE' == this.attributes.browser.name
                  ? (o.warn('Edge/IE load timeout'),
                    (this.status = c),
                    this.notifyEvent(s.Ad_Loaded))
                  : (o.debug('Stalled timeout', {
                      isStalled: this.status === l
                    }),
                    this.status === l && this.videoStalledError())
              }.bind(this),
              3500
            ))
        } catch (t) {
          setTimeout(
            function () {
              this.wrapper.notifyError(r.Video_Load_Error())
            }.bind(this),
            0
          )
        }
      },
      getAdExpanded: function () {
        'use strict'
        return 'fullscreen' === this.wrapper.attributes.viewMode
      },
      getAdSkippableState: function () {
        'use strict'
        return this.wrapper.skip.skippable
      },
      getAdRemainingTime: function () {
        'use strict'
        return this.attributes.remainingTime
      },
      getAdDuration: function () {
        'use strict'
        return this.attributes.duration
      },
      getAdVolume: 
      setAdVolume: function (t) {
        'use strict'
        if (this.videoSlot && 'number' == typeof t)
          try {
            t < 0 ? (t = 0) : t > 1 && (t = 1),
              (this.videoSlot.volume = t),
              t > 0 && this.videoSlot.muted
                ? (this.videoSlot.muted = !1)
                : 0 != t ||
                  ('iOS' != this.attributes.os &&
                    'Android' != this.attributes.os) ||
                  (this.videoSlot.muted = !0)
          } catch (e) {
            this.missingVolume ||
              (this.wrapper.internalLogger.sendInternalError(
                r.Video_Volume_Error()
              ),
              (this.missingVolume = !0))
          }
      },
      getAdCompanions: 
      getAdIcons: 
      handshakeVersion: 
      initAd: function () {
        'use strict'
      },
      resizeAd: function (t, e, i) {
        'use strict'
        ;(this.attributes.width = t),
          (this.attributes.height = e),
          this.videoSlot &&
            (this.resizeVideoSlot(), this.notifyEvent(s.Ad_Size_Change))
      },
      startAd: function () {
        'use strict'
        if (this.videoSlot) {
          if (this.status === c) {
            this.notifyEvent(s.Ad_Started), (this.status = h)
            try {
              var t = this.videoSlot.play()
              void 0 !== t &&
                t['catch'](
                  function (t) {
                    ;(t && 'NotSupportedError' === t.name) ||
                      (o.debug('startAd', {
                        message: 'autoplay is blocked by Webkit'
                      }),
                      (this.status = p),
                      this.showPlayButton())
                  }.bind(this)
                )
            } catch (e) {
              setTimeout(
                function () {
                  this.wrapper.notifyError(r.Video_Play_Error())
                }.bind(this),
                0
              )
            }
          }
          this.status === u && this.notifyEvent(s.Ad_Started)
        }
      },
      stopAd: function () {
        'use strict'
        !this.videoSlot ||
          (this.status !== c &&
            this.status !== h &&
            this.status !== f &&
            this.status !== g &&
            this.status !== m &&
            this.status !== v) ||
          (this.pauseAd(), this.videoStop()),
          this.status !== m && (this.status = v)
      },
      pauseAd: function () {
        'use strict'
        if (this.videoSlot)
          try {
            this.videoSlot.pause()
          } catch (t) {
            setTimeout(
              function () {
                this.wrapper.notifyError(r.Video_Pause_Error())
              }.bind(this),
              0
            )
          }
      },
      resumeAd: function () {
        'use strict'
        this.videoSlot && this.videoSlot.play()
      },
      expandAd: function () {
        'use strict'
      },
      collapseAd: 
      skipAd: function () {
        'use strict'
        ;(this.status = m), this.stopAd()
      },
      dispose: function () {
        'use strict'
        this.hidePlayButton(),
          this.removeListeners(),
          (this.wrapper.disposeFlags.target = !0)
      },
      notifyError: function (t) {
        'use strict'
        this.status === f || this.status === g
          ? this.wrapper.internalLogger.sendInternalError(t)
          : (setTimeout(
              function () {
                this.wrapper.notifyError(t)
              }.bind(this),
              0
            ),
            (this.status = v))
      },
      notifyEvent: function (t, e, i, r) {
        'use strict'
        setTimeout(
          bind(this),
          0
        )
      },
      resizeVideoSlot: function () {
        'use strict'
        try {
          this.videoSlot &&
            this.videoSlot.style &&
            ((this.videoSlot.style.width && this.videoSlot.style.height) ||
            !this.videoSlot.width ||
            !this.videoSlot.height
              ? ((this.videoSlot.style.width = this.attributes.width + 'px'),
                (this.videoSlot.style.height = this.attributes.height + 'px'))
              : ((this.videoSlot.width = this.attributes.width),
                (this.videoSlot.height = this.attributes.height)))
        } catch (t) {
          o.warn('resizeVideoSlot', { err: 'video dimension unreachable' })
        }
      },
      initListeners: function () {
        'use strict'
        ;(this.listeners.abort = function () {
          this.videoAbortError()
        }.bind(this)),
          (this.listeners.canplay = function () {
            this.videoLoaded()
          }.bind(this)),
          (this.listeners.ended = function () {
            this.videoStop()
          }.bind(this)),
          (this.listeners.error = function () {
            this.videoError()
          }.bind(this)),
          (this.listeners.loadedmetadata = function () {
            this.videoMetaData()
          }.bind(this)),
          (this.listeners.pause = function () {
            this.videoPause()
          }.bind(this)),
          (this.listeners.play = function () {
            this.videoStarted()
          }.bind(this)),
          (this.listeners.playing = function () {
            this.videoPlaying()
          }.bind(this)),
          (this.listeners.stalled = function () {
            this.videoStalledError()
          }.bind(this)),
          (this.listeners.timeupdate = function () {
            this.videoUpdateTime()
          }.bind(this)),
          (this.listeners.volumechange = function () {
            this.videoUpdateVolume()
          }.bind(this)),
          (this.listeners.click = function () {
            this.videoClick()
          }.bind(this))
        for (var t in this.listeners)
          this.listeners.hasOwnProperty(t) &&
            this.videoSlot.addEventListener(t, this.listeners[t])
        ;(this.listenerSlot = function () {
          this.videoClick()
        }.bind(this)),
          this.wrapper.dom.slot.addEventListener('click', this.listenerSlot)
      },
      removeListeners: function () {
        'use strict'
        try {
          if (this.videoSlot) {
            for (var t in this.listeners)
              this.listeners.hasOwnProperty(t) &&
                this.listeners[t] &&
                (this.videoSlot.removeEventListener(t, this.listeners[t]),
                (this.listeners[t] = null))
            this.listenerSlot &&
              (this.wrapper.dom.slot.removeEventListener(
                'click',
                this.listenerSlot
              ),
              (this.listenerSlot = null))
          }
        } catch (e) {
          this.wrapper.internalLogger.sendInternalError(
            r.Video_Remove_Event_Error()
          )
        }
      },
      videoLoaded: function () {
        'use strict'
        if (
          (this.stalledTimeout &&
            (clearTimeout(this.stalledTimeout), (this.stalledTimeout = null)),
          this.status === l &&
            (this.notifyEvent(s.Ad_Loaded),
            this.isNaNDuration && this.videoUpdateDuration(),
            (this.status = c)),
          this.status === u)
        ) {
          ;(this.status = h), this.videoMetaData()
          try {
            this.videoSlot.play()
          } catch (t) {
            setTimeout(
              function () {
                this.wrapper.notifyError(r.Video_Play_Error())
              }.bind(this),
              0
            )
          }
        }
      },
      videoStarted: function () {
        'use strict'
        this.hidePlayButton(),
          this.status === p &&
            (this.notifyEvent(s.Ad_Impression),
            this.notifyEvent(s.Ad_Video_Start),
            (this.status = f))
      },
      videoError: function () {
        'use strict'
        var t = 'void'
        if (
          (this.status === l || this.status === u || this.status === c
            ? (t = 'loading')
            : this.status === h || this.status === p
            ? (t = 'starting')
            : (this.status !== f && this.status !== g) || (t = 'playing'),
          this.videoSlot.error)
        )
          try {
            switch (this.videoSlot.error.code + '|' + t) {
              case this.videoSlot.error.MEDIA_ERR_ABORTED + '|starting':
                this.notifyError(r.Video_Tag_Starting_Abort_Error())
                break
              case this.videoSlot.error.MEDIA_ERR_ABORTED + '|playing':
                this.notifyError(r.Video_Tag_Playing_Abort_Error())
                break
              case this.videoSlot.error.MEDIA_ERR_NETWORK + '|loading':
              case this.videoSlot.error.MEDIA_ERR_NETWORK + '|starting':
                this.notifyError(r.Video_Network_Error())
                break
              case this.videoSlot.error.MEDIA_ERR_NETWORK + '|playing':
                this.notifyError(r.Video_Network_Error_While_Playing())
                break
              case this.videoSlot.error.MEDIA_ERR_DECODE + '|loading':
              case this.videoSlot.error.MEDIA_ERR_DECODE + '|starting':
                this.notifyError(r.Media_File_Display_Error(this.targetUrl))
                break
              case this.videoSlot.error.MEDIA_ERR_DECODE + '|playing':
                this.notifyError(
                  r.Media_File_Display_Error_While_Playing(this.targetUrl)
                )
                break
              case this.videoSlot.error.MEDIA_ERR_SRC_NOT_SUPPORTED +
                '|loading':
              case this.videoSlot.error.MEDIA_ERR_SRC_NOT_SUPPORTED +
                '|starting':
                this.notifyError(
                  r.Video_Src_Not_Supported_Error(this.targetUrl)
                )
                break
              case this.videoSlot.error.MEDIA_ERR_SRC_NOT_SUPPORTED +
                '|playing':
                this.notifyError(
                  r.Video_Src_Not_Supported_Error_While_Playing(this.targetUrl)
                )
            }
            return
          } catch (e) {}
        'loading' == t
          ? this.notifyError(r.Video_Tag_Loading_Default_Error())
          : 'starting' == t
          ? this.notifyError(r.Video_Tag_Starting_Default_Error())
          : 'playing' == t &&
            this.notifyError(r.Video_Tag_Playing_Default_Error())
      },
      videoAbortError: function () {
        'use strict'
        this.status === h || this.status === p
          ? this.notifyError(r.Video_Tag_Starting_Abort_Error())
          : (this.status !== f && this.status !== g) ||
            this.notifyError(r.Video_Tag_Playing_Abort_Error())
      },
      videoStalledError: function () {
        'use strict'
        this.stalledTimeout &&
          (clearTimeout(this.stalledTimeout), (this.stalledTimeout = null)),
          this.status === l &&
            (this.wrapper.internalLogger.sendInternalError(
              r.Video_Tag_Stalled_Error()
            ),
            this.notifyEvent(s.Ad_Loaded),
            (this.status = u))
      },
      videoPause: function () {
        'use strict'
        this.status !== f ||
          this.videoSlot.ended ||
          (this.notifyEvent(s.Ad_Paused), (this.status = g))
      },
      videoPlaying: function () {
        'use strict'
        this.status === h
          ? (this.notifyEvent(s.Ad_Impression),
            this.notifyEvent(s.Ad_Video_Start),
            (this.status = f))
          : this.status === g &&
            (this.notifyEvent(s.Ad_Playing), (this.status = f))
      },
      videoStop: function () {
        'use strict'
        if (this.status === m) this.notifyEvent(s.Ad_Skipped)
        else if (this.status === f || this.status === g) {
          if (
            this.wrapper.attributes.isIOS &&
            Math.abs(this.attributes.duration - this.attributes.currentTime) >
              0.1
          )
            return (
              this.videoSlot.pause(),
              (this.videoSlot.currentTime = this.attributes.currentTime),
              void this.videoSlot.play()
            )
          this.removeListeners(),
            Math.abs(this.attributes.duration - this.videoSlot.currentTime) <=
              0.1 && this.notifyEvent(s.Ad_Video_Complete),
            this.notifyEvent(s.Ad_Stopped)
        }
        this.status = d
      },
      videoMetaData: function () {
        'use strict'
        this.videoUpdateDuration(), this.videoUpdateVolume()
      },
      videoUpdateDuration: function () {
        'use strict'
        try {
          isNaN(this.videoSlot.duration) ||
            ((this.attributes.duration = this.videoSlot.duration),
            (this.attributes.remainingTime = this.videoSlot.duration),
            (this.isNaNDuration = !1))
        } catch (t) {
          setTimeout(
            function () {
              this.wrapper.notifyError(r.Video_Metadata_Error())
            }.bind(this),
            0
          )
        }
      },
      videoUpdateTime: function () {
        'use strict'
        try {
          if (
            (this.status === u &&
              (o.debug('Unstalled iOS'),
              this.videoMetaData(),
              (this.status = c)),
            this.status === h &&
              (this.notifyEvent(s.Ad_Impression),
              this.notifyEvent(s.Ad_Video_Start),
              (this.status = f)),
            this.status === f || this.status === g)
          ) {
            this.isNaNDuration &&
              !this.quartiles.first &&
              this.videoUpdateDuration()
            var t = !0
            if (this.wrapper.attributes.isIOS) {
              var e = 1e5,
                i = Date.now()
              this.lastTimeUpdate &&
                ((e = (i - this.lastTimeUpdate) / 1e3), (e += 0.1)),
                (this.lastTimeUpdate = i),
                Math.abs(
                  this.videoSlot.currentTime - this.attributes.currentTime
                ) > e &&
                  ((this.videoSlot.currentTime = this.attributes.currentTime),
                  (t = !1))
            }
            t &&
              ((this.attributes.currentTime = this.videoSlot.currentTime),
              (this.attributes.remainingTime =
                this.attributes.duration - this.videoSlot.currentTime),
              this.videoSlot.currentTime >= this.attributes.duration / 4 &&
              !this.quartiles.first
                ? ((this.quartiles.first = !0),
                  this.notifyEvent(s.Ad_Video_First_Quartile))
                : this.videoSlot.currentTime >= this.attributes.duration / 2 &&
                  !this.quartiles.midPoint
                ? ((this.quartiles.midPoint = !0),
                  this.notifyEvent(s.Ad_Video_Midpoint))
                : this.videoSlot.currentTime >=
                    (3 * this.attributes.duration) / 4 &&
                  !this.quartiles.third &&
                  ((this.quartiles.third = !0),
                  this.notifyEvent(s.Ad_Video_Third_Quartile)))
          }
        } catch (n) {
          setTimeout(
            bind(this),
            0
          )
        }
      },
      videoUpdateVolume: function () {
        'use strict'
        try {
          this.videoSlot.muted
            ? (this.attributes.volume = 0)
            : isNaN(this.videoSlot.volume) ||
              null === this.videoSlot.volume ||
              ((this.attributes.volume = this.videoSlot.volume),
              this.attributes.volume < 0
                ? (this.attributes.volume = 0)
                : this.attributes.volume > 1 && (this.attributes.volume = 1)),
            this.notifyEvent(s.Ad_Volume_Change)
        } catch (t) {
          this.missingVolume ||
            (this.wrapper.internalLogger.sendInternalError(
              r.Video_Volume_Error()
            ),
            (this.missingVolume = !0))
        }
      },
      videoClick: function () {
        'use strict'
        this.status === f || this.status === g
          ? this.wrapper.vpaidEventHandler(s.Ad_Click_Thru, '', '', !0)
          : this.status === p && (this.hidePlayButton(), this.videoSlot.play())
      },
      showPlayButton: function () {
        'use strict'
        if (!this.playButtonStyle) {
          ;(this.playButtonStyle = this.wrapper.dom.slot.ownerDocument.createElement(
            'style'
          )),
            this.playButtonStyle.appendChild(
              this.wrapper.dom.slot.ownerDocument.createTextNode('')
            ),
            this.wrapper.dom.slot.appendChild(this.playButtonStyle)
          var t = this.playButtonStyle.sheet,
            e = '.anPlayButton'
          this.wrapper.dom.slot.id &&
            (e = '#' + this.wrapper.dom.slot.id + '>' + e)
          for (
            var i = [
                {
                  selector: e,
                  rule:
                    'width: 0;height:32px;top:50%;left:50%;background-color:transparent;border:1px solid black;position:relative;transform:translate(-16px, -16px);cursor:pointer; z-index: ' +
                    a.PLAY_BUTTON_ZINDEX +
                    ';'
                },
                {
                  selector: e + '::before',
                  rule:
                    "content: '';position:absolute;top:0px;left:1px;width:0;height:0;border-style:solid;border-width:16px 0 16px 34px;border-color:transparent transparent transparent black;"
                },
                {
                  selector: e + '::after',
                  rule:
                    "content:'';position:absolute;top:0;left:0;width:0;height:0;border:16px solid transparent;border-left:16px solid white;border-style:solid;border-width: 16px 0 16px 34px;border-color:transparent transparent transparent white;"
                },
                {
                  selector: e + ':hover::after',
                  rule: 'border-left-color:rgb(128,128,128);'
                }
              ],
              r = 0;
            r < i.length;
            r++
          ) {
            var s = i[r]
            'addRule' in t
              ? t.addRule(s.selector, s.rule, 0)
              : 'insertRule' in t &&
                t.insertRule(s.selector + '{' + s.rule + '}', 0)
          }
        }
        this.playButton ||
          ((this.playButton = this.wrapper.dom.slot.ownerDocument.createElement(
            'div'
          )),
          this.playButton.setAttribute('class', 'anPlayButton'),
          this.wrapper.dom.slot.appendChild(this.playButton))
      },
      hidePlayButton: function () {
        'use strict'
        this.playButtonStyle &&
          (this.wrapper.dom.slot.removeChild(this.playButtonStyle),
          (this.playButtonStyle = null)),
          this.playButton &&
            (this.wrapper.dom.slot.removeChild(this.playButton),
            (this.playButton = null))
      }
    }),
      (t.exports = _)
  },
  
  function (t, e, i) {
    var r = i(8).createLogger('js.trackingEvent.AdIcons', 'AdIcons'),
      s = i(54),
      n = 
      o = {
        getMsecTime:       },
      a = function () {
        var t = 5,
          e = function (t) {
            for (var e = 0; e < t.length; e++) {
              var i = ['image/gif', 'image/jpeg', 'image/png'],
                r = ['application/x-shockwave-flash'],
                s = t[e].StaticResource
              if (s && s.type) {
                n('setContents for ' + t[e].program)
                var o = t[e].width,
                  a = t[e].height
                i.indexOf(s.type.toLowerCase()) >= 0 &&
                  (t[e].content =
                    "<img src='" +
                    s.src +
                    "' width='" +
                    o +
                    "' height='" +
                    a +
                    "'>"),
                  r.indexOf(s.type.toLowerCase()) >= 0 &&
                    (t[e].content =
                      "<object type='application/x-shockwave-flash' data='" +
                      s.src +
                      "' width='" +
                      o +
                      "' height='" +
                      a +
                      "' style='width:" +
                      o +
                      ';height:' +
                      a +
                      ";'><param name='allowScriptAccess' value='always'><param name='allowNetworking' value='all'><param name='allowNetworking' value='all'><param name='mode' value='opaque'><param name='allowFullScreen' value='true'></object>"),
                  (t[e].isDisplay = !1)
              }
            }
            return t
          }
        ;(this.icons = []),
          (this.init = function (t) {
            n('initalize ad icon'), t && (this.icons = e(t))
          }),
          (this.getIcons = ,
          (this.renderIcons = function (e, i, r, a, d, l, u) {
            var c = this.getIcons(),
              h = this
            if (((d = 0 !== d ? d + t : d), c && !(c.length < 1))) {
              var p,
                f = function (t) {
                  return function (r) {
                    r.stopPropagation(),
                      i(t.IconClickThrough),
                      e('IconClickTracking_' + t.program),
                      n('fire IconClickTracking for ' + t.program)
                  }
                },
                g = function (t) {
                  setTimeout( 500)
                }
              for (p = 0; p < c.length; p++) {
                var m,
                  v,
                  _ = c[p],
                  b = _.htmlReference
                if (
                  (_ &&
                    (_.duration && (m = o.getMsecTime(_.duration)),
                    _.offset && (v = o.getMsecTime(_.offset))),
                  m <= 0 && (m = u),
                  !(l < v) && 0 !== l)
                ) {
                  var y
                  if (u > 0 && l >= u) {
                    for (y = 0; y < c.length; y++) {
                      var A = c[y],
                        w = A.htmlReference
                      w && ((w.style.display = 'none'), (A.isDisplay = !1))
                    }
                    return void n(
                      'hide whole ad icons because video is finished by ' +
                        l +
                        'ms'
                    )
                  }
                  if (l > v + m && _.isDisplay && b) b.style.display = 'none'
                  else if (!_.isDisplay) {
                    var E = 'left',
                      S = Number(S) < 0 ? 0 : S,
                      k = 'top',
                      C = Number(S) < 0 ? 0 : S,
                      T = Number(a) > 0 ? a : 0,
                      I = Number(d) > 0 ? d : 0
                    _ && 'left' === _.xPosition && ((E = 'left'), (S = 0)),
                      _ && 'right' === _.xPosition && ((E = 'right'), (S = 0)),
                      _ &&
                        Number(_.xPosition) >= 0 &&
                        ((E = 'left'), (S = Number(_.xPosition))),
                      _ &&
                        'bottom' === _.yPosition &&
                        ((k = 'bottom'), (C = 0), (C += I)),
                      _ &&
                        'top' === _.yPosition &&
                        ((k = 'top'), (C = 0), (C += T)),
                      _ &&
                        Number(_.yPosition) >= 0 &&
                        ((k = 'top'), (C = Number(_.yPosition)), (C += T))
                    var N
                    b
                      ? ((N = b), n('reuse ad icon for ' + _.program))
                      : ((N = r.ownerDocument.createElement('div')),
                        n('create ad icon for ' + _.program)),
                      r.appendChild(N),
                      N.setAttribute('name', 'adicon'),
                      (N.id = 'adicon_' + _.program),
                      (N.innerHTML = _.content),
                      (N.style.position = 'absolute'),
                      (N.style.cursor = 'pointer'),
                      (N.style[E] = S + 'px'),
                      (N.style[k] = C + 'px'),
                      (N.style.zIndex = s.AD_ICON_ZINDEX),
                      (N.style.display = 'block'),
                      (N.style.width = _.width + 'px'),
                      (N.style.height = _.height + 'px'),
                      (_.isDisplay = !0),
                      (_.htmlReference = N),
                      (_.document = r.ownerDocument),
                      (_.originalStyle = {}),
                      (_.originalStyle[E] = S),
                      (_.originalStyle[k] = C),
                      _.clickRegisterd ||
                        (N.addEventListener('click', f(_)),
                        (_.clickRegisterd = !0),
                        n('ad icon click handler registered for ' + _.program)),
                      (c[p] = _),
                      e &&
                        'function' == typeof e &&
                        (e('IconViewTracking_' + _.program),
                        n('check and fire IconViewTracking for ' + _.program)),
                      p === c.length - 1 && g(c)
                  }
                }
              }
            }
          }),
          (this.elementsFromPoint = function (t, e, i) {
            try {
              if (i.elementsFromPoint) return i.elementsFromPoint(t, e)
              var r = [],
                s = void 0
              do
                s !== i.elementFromPoint(t, e)
                  ? ((s = i.elementFromPoint(t, e)),
                    r.push(s),
                    s && s.style && (s.style.pointerEvents = 'none'))
                  : (s = !1)
              while (s)
              return (
                r.forEach(function (t) {
                  var e
                  return t && t.style && (e = t.style.pointerEvents = 'all'), e
                }),
                r
              )
            } catch (o) {
              return n(o), null
            }
          })
        var i = function (t) {
          var e = 0
          return (
            t && Number(t) >= 0 && (e = Number(t)),
            t &&
              'string' == typeof t &&
              t.toLowerCase() &&
              t.indexOf('px') &&
              ((e = Number(t.replace('px', ''))), (e = e > 0 ? e : 0)),
            e
          )
        }
        ;(this.resolveCollision = function (t) {
          var e,
            r = this,
            s = function (t, e) {
              var r
              for (r = 0; r < t.length; r++) {
                var s = t[r]
                if (s && 'adicon' === s.getAttribute('name') && e != s) {
                  var n = i(s.clientWidth),
                    o = i(s.clientHeight),
                    a = i(s.style.left),
                    d = i(s.style.right)
                  return { result: !0, width: n, height: o, left: a, right: d }
                }
              }
              return { result: !1, width: 0, height: 0, left: 0, right: 0 }
            },
            o = function (t, e, i, n, o, a, d, l, u) {
              var c, h
              'left' === t && ((c = e - a - 1), (h = i - a - 1)),
                'right' === t && ((c = e + a + 1), (h = i + a + 1))
              var p = r.elementsFromPoint(c, n, l),
                f = r.elementsFromPoint(h, n, l),
                g = r.elementsFromPoint(h, o, l),
                m = r.elementsFromPoint(c, o, l),
                v = s(p, u),
                _ = s(f, u),
                b = s(g, u),
                y = s(m, u)
              return {
                newSpaceOwner_topLeft: v,
                newSpaceOwner_topRight: _,
                newSpaceOwner_bootomRight: b,
                newSpaceOwner_bootomLeft: y,
                next_left: c,
                next_right: h
              }
            }
          for (e = 1; e < t.length; e++) {
            var a = t[e]
            if (a.htmlReference) {
              var d = a.htmlReference.getBoundingClientRect(),
                l = d.left,
                u = d.top,
                c = d.right,
                h = d.bottom,
                p = r.elementsFromPoint(l, u, a.document),
                f = r.elementsFromPoint(c, u, a.document),
                g = r.elementsFromPoint(c, h, a.document),
                m = r.elementsFromPoint(l, h, a.document),
                v = s(p, a.htmlReference),
                _ = s(f, a.htmlReference),
                b = s(g, a.htmlReference),
                y = s(m, a.htmlReference),
                A = a.program
              if (v.result || b.result || _.result || y.result) {
                n('collision detection starts for ad icon program - ' + A)
                var w = v.width || b.width || _.width || y.width,
                  E = v.height || b.height || _.height || y.height,
                  S = v.left || b.left || _.left || y.left
                w += S
                var k = !1,
                  C = o('left', l, c, u, h, w, E, a.document, a.htmlReference)
                k === !1 &&
                  C.newSpaceOwner_topLeft.result === !1 &&
                  C.newSpaceOwner_topRight.result === !1 &&
                  C.newSpaceOwner_bootomRight.result === !1 &&
                  C.newSpaceOwner_bootomLeft.result === !1 &&
                  C.next_left >= 0 &&
                  (n(
                    'collision resolved by moving icon to left for ad icon program - ' +
                      A
                  ),
                  (a.htmlReference.style.left = C.next_left + 'px'),
                  (k = !0)),
                  (C = o(
                    'right',
                    l,
                    c,
                    u,
                    h,
                    w,
                    E,
                    a.document,
                    a.htmlReference
                  )),
                  k === !1 &&
                    C.newSpaceOwner_topLeft.result === !1 &&
                    C.newSpaceOwner_topRight.result === !1 &&
                    C.newSpaceOwner_bootomRight.result === !1 &&
                    C.newSpaceOwner_bootomLeft.result === !1 &&
                    (n(
                      'collision resolved by moving icon to right for ad icon program - ' +
                        A
                    ),
                    (a.htmlReference.style.left = C.next_left + 'px'),
                    (k = !0)),
                  k === !1 &&
                    (n(
                      'hide ad-icon due to no way to avoid collision for ad icon program - ' +
                        A
                    ),
                    (a.htmlReference.style.display = 'none')),
                  n('collision detection end for ad icon program - ' + A)
              }
            }
          }
        }),
          (this.redraw = function (t) {
            n('start reposition'), n('offsetHeight: ' + t)
            var e
            for (e = 0; e < this.icons.length; e++) {
              var i = this.icons[e],
                r = i.htmlReference,
                s = i.originalStyle
              if (s) {
                var o = s.bottom
                ;(o || 0 === o) &&
                  ('bottom' === o && (o = 0), (r.style.bottom = o + t + 'px'))
              }
            }
            n('end reposition')
          })
      }
    t.exports = a
  },
  function (t, e) {
    t.exports = { Not_Implemented: -1, Unknown: -2 }
  },
  function (t, e, i) {
    var r = i(15),
      s = i(7),
      n = i(9),
      o = i(8).createLogger(
        'js.utils.InternalErrorUtils',
        'InternalErrorUtils'
      ),
      a = 10,
      d =
        'https://rb.adnxs.com/pack?log=log_rb_vpaid_wrapper_signals&format=json',
      l = function (t, e) {
        'use strict'
        try {
          parent.XMLHttpRequest && (r.XMLHttpRequest = parent.XMLHttpRequest)
        } catch (i) {
          o.warn('unable to get parent XHR')
        }
        ;(this.xhr = e || r),
          (this.count = 0),
          (this.auctionID = 1),
          (this.buyerMemberID = 0),
          (this.sellerMemberID = 0),
          (this.creativeID = 0),
          (this.placementID = 0),
          (this.pendingLogsCount = 0),
          (this.disposeDelay = 50),
          (this.disposeTimeout = null),
          this.init(t)
      }
    ;(l.prototype = {
      sendInternalError: function (t) {
        'use strict'
        var e = this.postMessage(t)
        switch (t.severity) {
          case s.SEVERITY.INFO:
          case s.SEVERITY.DEBUG:
            o.debug('sendInternalError', e)
            break
          case s.SEVERITY.WARN:
            o.warn('sendInternalError', e)
            break
          default:
            o.error('sendInternalError', e)
        }
        return e
      },
      sendDebug: function (t) {
        'use strict'
        var e = this.postMessage({
          code: 0,
          severity: s.SEVERITY.DEBUG,
          message: t
        })
        return o.debug('sendDebug', e), e
      },
      postMessage: function (t) {
        'use strict'
        if (this.count++ >= a) return o.error('Max internal log reached', t), {}
        var e = {
            auction_id_64: this.auctionID,
            buyer_member_id: this.buyerMemberID,
            seller_member_id: this.sellerMemberID,
            creative_id: this.creativeID,
            tag_id: this.placementID,
            version: 910,
            severity: t.severity,
            code: t.code,
            message: String(t.message)
          },
          i = JSON.stringify(e).replace(
            /"auction_id_64":"(\d+)"/,
            '"auction_id_64":$1'
          )
        if (navigator.sendBeacon)
          try {
            var r = navigator.sendBeacon(d, i)
            r || o.error('Beacon request not queued in the navigator')
          } catch (s) {
            o.error('Error caught on Beacon method', { error: s.message })
          }
        else {
          o.debug('Send internal log using XHR'), this.pendingLogsCount++
          try {
            this.xhr(
              { uri: d, body: i, method: 'POST' },
              function (t, e, i) {
                this.pendingLogsCount--,
                  t &&
                    o.error('Unable to send internal log to ratbait', {
                      error: t.message
                    })
              }.bind(this)
            )
          } catch (s) {
            o.error('Error caught on XHR method', { error: s.message }),
              this.pendingLogsCount--
          }
        }
        return e
      },
      init: function (t) {
        'use strict'
        var e = n.getANWrapperParameter('ratbaitEndPoint')
        return (
          e &&
            ((d = decodeURIComponent(e)),
            o.debug('Ratbait endpoint', { endpoint: d })),
          t
            ? (o.info('Init internal logger', { rblog: t }),
              void this.parseInternalLogConfig(t))
            : void o.warn('No internal log config set')
        )
      },
      parseInternalLogConfig: function (t) {
        'use strict'
        for (var e = String(t).split(/;/g), i = 0; i < e.length; i++) {
          var r = e[i].split(/=/)
          if (2 == r.length)
            try {
              this.saveKeyValuePair(r[0], r[1])
            } catch (s) {
              o.warn(
                'Saving key-value pair failed when configuring internal logs',
                s
              )
            }
        }
      },
      saveKeyValuePair: function (t, e) {
        'use strict'
        return t
          ? ('auc' === t &&
              null !== e &&
              void 0 !== e &&
              '' !== e &&
              '0' != e &&
              (/^[0-9]+$/.test(e)
                ? (this.auctionID = e)
                : (this.auctionID = 1)),
            'bm' === t && (this.buyerMemberID = parseInt(e) || 0),
            'sm' === t && (this.sellerMemberID = parseInt(e) || 0),
            'cr' === t && (this.creativeID = parseInt(e) || 0),
            void ('pl' === t && (this.placementID = parseInt(e) || 0)))
          : void o.warn('Trying to save an empty config')
      },
      dispose: function (t) {
        'use strict'
        return 0 == this.pendingLogsCount
          ? void (t.disposeFlags.internalLogger = !0)
          : void (this.disposeTimeout = setInterval(
              function () {
                0 == this.pendingLogsCount &&
                  ((t.disposeFlags.internalLogger = !0),
                  clearInterval(this.disposeTimeout))
              }.bind(this),
              this.disposeDelay
            ))
      }
    }),
      (t.exports = l)
  },
  function (t, e, i) {
    var r = i(8).createLogger('js.vpaidEvent.NielsenSurvey', 'NielsenSurvey'),
      s = 'InitAd',
      n = 'StartAd',
      o = 'StopAd',
      a = 'AdReady',
      d = 'AdLoaded',
      l = 'AdStopped',
      u =
        '//secure-gl.imrworldwide.com/u/t/[CP_URL]/video_tag.html?cr=[CR]&ce=appnexus&pc=[TAG]&am=3&show=1&timer=1&view=300x300&r=[CB]&uuid=[UUID]',
      c =
        '//secure-gl.imrworldwide.com/u/ad?ca=[CP]&am=3&ce=appnexus&cr=[CR]&pc=[TAG]&r=[CB]',
      h = 0,
      p = 1,
      f = 2,
      g = 3,
      m = 4,
      v = 'ca',
      _ = 'cr',
      b = 'pc',
      y = function (t, e) {
        'use strict'
        ;(this.slot = t),
          (this.iframe = null),
          (this.timer = null),
          (this.config = {
            campaignID: '',
            urlCampaignID: '',
            creativeID: '',
            placementID: '',
            uuid: ''
          }),
          (this.receivedEvents = []),
          (this.state = h),
          (this.finishCallback = null),
          this.parseConfigs(e),
          this.generateUUID(),
          r.debug('init', this.config)
      }
    ;(y.prototype = {
      parseConfigs: function (t) {
        'use strict'
        if ('string' != typeof t)
          return void r.error('parseConfigs', {
            message: 'bad configuration type'
          })
        t = t.split('&')
        for (var e = {}, i = 0; i < t.length; i++) {
          var s = t[i].split('=')
          void 0 !== s[1] && (e[s[0]] = String(s[1]))
        }
        if (e[v]) {
          for (var n = e[v]; n.length < 8; ) n = '0' + n
          ;(this.config.urlCampaignID = n.match(/..?/g).join('/')),
            (this.config.campaignID = e[v])
        }
        e[_] && (this.config.creativeID = e[_]),
          e[b] && (this.config.placementID = e[b])
      },
      renderSurvey: function (t) {
        'use strict'
        return 'function' != typeof t
          ? (r.error('renderSurvey', { message: 'Bad callback type' }), !1)
          : ((this.finishCallback = t),
            this.state == h
              ? (this.state = p)
              : this.state == f && (this.state = g),
            void (this.state == p || this.state == g
              ? (r.debug('renderSurvey'), this.createIframe())
              : (r.error('renderSurvey', { message: "can't render survey" }),
                this.finishCallback(),
                (this.finishCallback = null))))
      },
      canPlayAd: function () {
        'use strict'
        return !(this.state == p || this.state == g)
      },
      stopSurvey: function () {
        'use strict'
        ;(this.state != p && this.state != g) ||
          (r.debug('stopSurvey'), (this.state = h), this.sendMessage(o))
      },
      sendMessage: function (t) {
        'use strict'
        r.debug('sendMessage', { event: t }),
          this.iframe.contentWindow.postMessage(
            JSON.stringify({ type: t, UUID: this.config.uuid }),
            '*'
          )
      },
      receiveMessage: function (t) {
        'use strict'
        if (t.data && 'string' == typeof t.data && t.data.indexOf('UUID') != -1)
          try {
            if (((t = JSON.parse(t.data)), t.UUID == this.config.uuid)) {
              if (this.receivedEvents.indexOf(t.type) != -1)
                return void r.warn('receiveMessage', {
                  message: t.type + ' already received'
                })
              switch (
                (this.receivedEvents.push(t.type),
                r.debug('receiveMessage', { event: t.type }),
                t.type)
              ) {
                case a:
                  clearTimeout(this.timer),
                    (this.timer = null),
                    this.sendMessage(s)
                  break
                case d:
                  this.sendMessage(n)
                  break
                case l:
                  this.state == p && this.sendPixel(),
                    this.state == p
                      ? (this.state = f)
                      : this.state == g && (this.state = m),
                    this.clearSurvey()
              }
            }
          } catch (e) {
            r.error('Nielsen parsing error', { message: e.message })
          }
      },
      createIframe: function () {
        'use strict'
        this.slot.ownerDocument.defaultView.addEventListener(
          'message',
          this.receiveMessage.bind(this),
          !1
        ),
          (this.receivedEvents = []),
          (this.iframe = this.slot.ownerDocument.createElement('iframe')),
          (this.iframe.style.position = 'absolute'),
          (this.iframe.style.width = '300px'),
          (this.iframe.style.height = '300px'),
          (this.iframe.style.border = '0 none'),
          (this.iframe.style.zIndex = 2147483647),
          (this.iframe.frameborder = 0),
          (this.iframe.src = this.replaceUrl(u)),
          (this.timer = setTimeout(
            function () {
              ;(this.timer = null), (this.state = m), this.clearSurvey()
            }.bind(this),
            5e3
          )),
          this.slot.appendChild(this.iframe),
          setTimeout(
            function () {
              ;(this.iframe.style.top =
                Math.floor(
                  (this.slot.clientHeight - this.iframe.clientHeight) / 2
                ) + 'px'),
                (this.iframe.style.left =
                  Math.floor(
                    (this.slot.clientWidth - this.iframe.clientWidth) / 2
                  ) + 'px')
            }.bind(this),
            100
          )
      },
      clearSurvey: function () {
        'use strict'
        this.slot.removeChild(this.iframe),
          (this.iframe = null),
          this.slot.ownerDocument.defaultView.removeEventListener(
            'message',
            this.receiveMessage.bind(this),
            !1
          ),
          (this.state != f && this.state != m) || this.finishCallback(),
          (this.finishCallback = null)
      },
      sendPixel: function () {
        'use strict'
        var t = this.slot.ownerDocument.createElement('img')
        ;(t.width = 1),
          (t.height = 1),
          (t.style.display = 'none'),
          (t.src = this.replaceUrl(c)),
          this.slot.appendChild(t),
          r.debug('sendPixel')
      },
      generateUUID: function () {
        'use strict'
        var t = function (t) {
          var e = (16 * Math.random()) | 0
          return t ? ((3 & e) | 8).toString(16) : e.toString(16)
        }
        this.config.uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
                  )
      },
      replaceUrl: function (t) {
        'use strict'
        return t
          .replace(/\[CP\]/, this.config.campaignID)
          .replace(/\[CP_URL\]/, this.config.urlCampaignID)
          .replace(/\[CR\]/, this.config.creativeID)
          .replace(/\[TAG\]/, this.config.placementID)
          .replace(/\[CB\]/, Date.now())
          .replace(/\[UUID\]/, this.config.uuid)
      }
    }),
      (t.exports = y)
  },
  function (t, e, i) {
    var r = i(49),
      s = i(7)
    t.exports = {
      validate: function (t) {
        var e = []
        if (0 !== t.length)
          for (var i = 0; i < t.length; i++) {
            var n = t[i]
            n.nodeLocation === r.Ad_Verifications_Node_Name
              ? e.push(s.Vast_OMID_AdVerifications_Node_Present())
              : n.nodeLocation === r.Extension_Node_Name &&
                e.push(s.Vast_OMID_Extensions_AdVerifications_Node_Present()),
              'omid' !== n.apiFramework &&
                e.push(s.Vast_OMID_AdVerification_APIFramework_Not_OMID())
          }
        return e
      }
    }
  }
])
