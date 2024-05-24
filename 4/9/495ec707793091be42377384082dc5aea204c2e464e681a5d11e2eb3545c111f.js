/* ----------------------------------------------------------
 * Plugins
 * ---------------------------------------------------------- */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  
  
  /*!
   * GSAP 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _suppressOverwrites,
      _reverting,
      _context,
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = 
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = 
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[^,'"\[\]\s]+/gi,
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = 
      _missingPlugin = 
      _warn = 
      _addGlobal = 
      _emptyFunc = 
      _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  },
      _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  },
      _revertConfig = {
    suppressEvents: true
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = 
      _getCache = 
      _getProperty = 
      _forEachName = 
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
  },
      _parseRelative = 
      _arrayContainsAny = 
      _lazyRender = 
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && _lazyRender();
  },
      _numericIfPossible = 
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = 
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = 
      _copyExcluding = 
      _inheritDefaults = 
      _arraysMatch = 
      _addLinkedListItem = 
      _removeLinkedListItem = 
      _removeFromParent = 
      _uncache = 
      _recacheAncestors = 
      _rewindStartAt = 
      _hasNoPausedAncestors = 
      _elapsedCycleDuration = 
      _animationCycle = 
      _parentToChildTotalTime = 
      _setEnd = 
      _alignPlayhead = 
      _postAddChecks = 
      _addToTimeline = 
      _scrollTrigger = 
      _attemptInitTween = 
      _parentPlayheadIsBeforeStart = 
      _isFromOrFromStart = 
      _renderZeroDurationTween = 
      _findNextPauseTween = 
      _setDuration = 
      _onUpdateTotalDuration = 
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  },
      _parsePosition = 
      _createTweenType = 
      _conditionalReturn = 
      _clamp = 
      getUnit = 
      clamp = 
      _slice = [].slice,
      _isArrayLike = 
      _flatten = 
      toArray = 
      selector = 
      shuffle = 
      distribute = 
      _roundModifier = 
      snap = 
      random = 
      pipe = 
      unitize = 
      normalize = 
      _wrapArray = 
      wrap = 
      wrapYoyo = 
      _replaceRandom = 
      mapRange = 
      interpolate = 
      _getLabelInDirection = 
      _callback = 
      _interrupt = 
      _quickTween,
      _createPlugin = 
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = 
      splitColor = 
      _colorOrderData = 
      _formatColors = 
      _colorExp = ),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = 
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1000 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = 

    _self = {
      time: 0,
      frame: 0,
      tick: 
      deltaRatio: 
      wake: 
      sleep: 
      lagSmoothing: 
      fps: 
      add: 
      remove: 
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = 
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = 
      _valueInParentheses = 
      _configEaseFromString = 
      _invertEase = 
      _propagateYoyoEase = 
      _parseEase = 
      _insertEase = 
      _easeInOutFromOut = 
      _configElastic = 
      _configBack = 

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", ;

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  ((7.5625, 2.75);

  _insertEase("Expo", ;

  _insertEase("Circ", ;

  _insertEase("Sine", ;

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config:   };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", ;

  var GSCache = 
  var Animation = function () {
    
    var _proto = Animation.prototype;

    _proto.delay = 

    _proto.duration = 

    _proto.totalDuration = 

    _proto.totalTime = 

    _proto.time = 

    _proto.totalProgress = 

    _proto.progress = 

    _proto.iteration = 

    _proto.timeScale = 

    _proto.paused = 

    _proto.startTime = 

    _proto.endTime = 

    _proto.rawTime = 

    _proto.revert = 

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return !this.parent && this.vars.immediateRender ? -1 : time;
    };

    _proto.repeat = 

    _proto.repeatDelay = 

    _proto.yoyo = 

    _proto.seek = 

    _proto.restart = 

    _proto.play = 

    _proto.reverse = 

    _proto.pause = 

    _proto.resume = 

    _proto.reversed = 

    _proto.invalidate = 

    _proto.isActive = 

    _proto.eventCallback = 

    _proto.then = 

    _proto.kill = 

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    
    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);

      return this;
    };

    _proto2.from = 

    _proto2.fromTo = 

    _proto2.set = 

    _proto2.call = 

    _proto2.staggerTo = 

    _proto2.staggerFrom = 

    _proto2.staggerFromTo = 

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }

            dur = this._dur;
            tDur = this._tDur;

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }

        if (!prevTime && time && !suppressEvents) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = 

    _proto2.getChildren = 

    _proto2.getById = 

    _proto2.remove = 

    _proto2.totalTime = 

    _proto2.addLabel = 

    _proto2.removeLabel = 

    _proto2.addPause = 

    _proto2.removePause = 

    _proto2.killTweensOf = 

    _proto2.getTweensOf = 

    _proto2.tweenTo = 

    _proto2.tweenFromTo = 

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = 

    _proto2.previousLabel = 

    _proto2.currentLabel = 

    _proto2.shiftChildren = 

    _proto2.invalidate = 

    _proto2.clear = 

    _proto2.totalDuration = 

    Timeline.updateRoot = 

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = 
      _addPropTween = 
      _processVars = 
      _checkPlugin = 
      _overwritingTween,
      _forceAllPropTweens,
      _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
        autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    tween._from = !tl && !!vars.runBackwards;

    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);

      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        tween._startAt._dp = 0;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);

        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          tween._startAt._dp = 0;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(;

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  },
      _updatePropTweens = 
      _addAliasesToVars = 
      _parseKeyframe = 
      _parseFuncOrString = 
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      _staggerPropsToSkip = {};

  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
    return _staggerPropsToSkip[name] = 1;
  });

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    
    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          isNegative = totalTime < 0,
          tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }

          if (prevTime !== this._time) {
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        if (time && !prevTime && !suppressEvents) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = 

    _proto3.resetTo = 

    _proto3.kill = 

    Tween.to = 

    Tween.from = 

    Tween.delayedCall = 

    Tween.fromTo = 

    Tween.set = 

    Tween.killTweensOf = 

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", ;

  var _setterPlain = 
      _setterFunc = 
      _setterFuncWithParam = 
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = 
      _renderPlain = 
      _renderBoolean = 
      _renderComplexString = 
      _renderPropTweens = 
      _addPluginModifier = 
      _killPropTweensOf = 
      _setterWithModifier = 
      _sortPropTweensByPriority = 

  var PropTween = );

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;

  var _media = [],
      _listeners = {},
      _emptyArray = [],
      _lastMediaTime = 0,
      _dispatch = 
      _onMediaChange = 

  var Context = function () {
    function Context(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      func && this.add(func);
    }

    var _proto5 = Context.prototype;

    _proto5.add = 

    _proto5.ignore = 

    _proto5.getTweens = 

    _proto5.clear = 

    _proto5.kill = function kill(revert, matchMedia) {
      var _this4 = this;

      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(;
        tweens.map(.sort(.forEach(;
        this.data.forEach(;

        this._r.forEach(function (f) {
          return f(revert, _this4);
        });

        this.isReverted = true;
      } else {
        this.data.forEach(;
      }

      this.clear();

      if (matchMedia) {
        var i = _media.indexOf(this);

        !!~i && _media.splice(i, 1);
      }
    };

    _proto5.revert = function revert(config) {
      this.kill(config || {});
    };

    return Context;
  }();

  var MatchMedia = function () {
    
    var _proto6 = MatchMedia.prototype;

    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context = new Context(0, scope || this.scope),
          cond = context.conditions = {},
          mq,
          p,
          active;
      this.contexts.push(context);
      func = context.add("onMatch", func);
      context.queries = conditions;

      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);

          if (mq) {
            _media.indexOf(context) < 0 && _media.push(context);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }

      active && func(context);
      return this;
    };

    _proto6.revert = 

    _proto6.kill = 

    return MatchMedia;
  }();

  var _gsap = {
    registerPlugin: 
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: 
    getProperty: 
    quickSetter: 
    quickTo: 
    isTweening: 
    defaults: 
    config: 
    registerEffect: 
    registerEase: 
    parseEase: 
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: 
    context: 
    matchMedia: 
    matchMediaRefresh: 
    addEventListener: 
    removeEventListener: 
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      selector: selector,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: 
      suppressOverwrites:     }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", ;

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = 
      _addModifiers = 
      _buildModifierPlugin = 

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: 
    render:   }, {
    name: "endArray",
    init:   }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.11.3";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _reverting$1,
      _windowExists$1 = 
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = 
      _renderPropWithEnd = 
      _renderCSSPropWithBeginning = 
      _renderRoundedCSSProp = 
      _renderNonTweeningValue = 
      _renderNonTweeningValueOnlyAtEnd = 
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = 
      _setterTransform = 
      _setterScale = 
      _setterScaleWithRender = 
      _setterTransformWithRender = 
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;

    var target = this.target,
        style = target.style;

    if (property in _transformProps) {
      this.tfm = this.tfm || {};

      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach( : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      }

      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }

      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }

      property = _transformProp;
    }

    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  },
      _removeIndependentTransforms = 
      _revertStyle = function _revertStyle() {
    var props = this.props,
        target = this.target,
        style = target.style,
        cache = target._gsap,
        i,
        p;

    for (i = 0; i < props.length; i += 3) {
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
    }

    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }

      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }

      i = _reverting$1();

      if (i && !i.isStart && !style[_transformProp]) {
        _removeIndependentTransforms(style);

        cache.uncache = 1;
      }
    }
  },
      _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
      target: target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    properties && properties.split(",").forEach(function (p) {
      return saver.save(p);
    });
    return saver;
  },
      _supports3D,
      _createElement = 
      _getComputedProperty = 
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = 
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting$1 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = 
      _getAttributeFallbacks = 
      _getBBox = 
      _isSVG = 
      _removeProperty = 
      _addNonTweeningPT = 
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _nonStandardLayouts = {
    grid: 1,
    flex: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = 
      _tweenComplexCSSString = 
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = 
      _renderClearProps = 
      _specialProps = {
    clearProps:   },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = 
      _getComputedTransformMatrixAsArray = 
      _getMatrix = 
      _applySVGOrigin = 
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        cs = getComputedStyle(target),
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));

    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }

      style.scale = style.rotate = style.translate = "none";
    }

    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = 
      _addPxTranslate = 
      _renderNon3DTransforms = 
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = 
      _renderSVGTransforms = 
      _addRotationalPropTween = 
      _assign = 
      _addRawTransformPTs = 

  _forEachName("padding,margin,Width,Radius", ;

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: 
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startAt = tween.vars.startAt,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority,
          inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;

          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }

          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }

          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              inlineProps.push("visibility", 0, style.visibility);

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            this.styles.save(p);

            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }

          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }

      hasPriority && _sortPropTweensByPriority(this);
    },
    render: 
    get: _get,
    aliases: _propertyAliases,
    getSetter: 
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;

  (("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", ;

  gsap.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

((this, jQuery);
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, );

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, );

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( ( window, ;

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(  window, );

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(  window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = 

// ----- modulo ----- //

utils.modulo = 

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = 

// ----- removeFrom ----- //

utils.removeFrom = 

// ----- getParent ----- //

utils.getParent = 

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = 

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    // START UNCODE EDIT
    // if ( !( elem instanceof HTMLElement ) ) {
    if ( !( elem instanceof HTMLElement ) && !SiteParameters.is_frontend_editor ) {
    // END UNCODE EDIT
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = 

// ----- docReady ----- //

utils.docReady = 

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = 

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = 

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

(  window, );

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

(  window, );

/**
 * Isotope Item
**/

(  window, );

/**
 * Isotope LayoutMode
 */

(  window, );

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(  window, );

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

(  window, );

/**
 * fitRows layout mode
 */

(  window, );

/**
 * vertical layout mode
 */

(  window, );

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

(  window, );

/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

/**
 * Rect
 * low-level utility class for basic geometry
 */

(  window, function factory() {


// -------------------------- Rect -------------------------- //


Rect.defaults = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};

var proto = Rect.prototype;

/**
 * Determines whether or not this rectangle wholly encloses another rectangle or point.
 * @param {Rect} rect
 * @returns {Boolean}
**/
proto.contains = 

/**
 * Determines whether or not the rectangle intersects with another.
 * @param {Rect} rect
 * @returns {Boolean}
**/
proto.overlaps = 

/**
 * @param {Rect} rect - the overlapping rect
 * @returns {Array} freeRects - rects representing the area around the rect
**/
proto.getMaximalFreeRects = 

proto.canFit = 

return Rect;

}));

/**
 * Packer
 * bin-packing algorithm
 */

(  window, function factory( Rect ) {


// -------------------------- Packer -------------------------- //

/**
 * @param {Number} width
 * @param {Number} height
 * @param {String} sortDirection
 *   topLeft for vertical, leftTop for horizontal
 */

var proto = Packer.prototype;

proto.reset = 

// change x and y of rect to fit with in Packer's available spaces
proto.pack = 

proto.columnPack = function( rect ) {
  for ( var i=0; i < this.spaces.length; i++ ) {
    var space = this.spaces[i];
    var canFitInSpaceColumn = space.x <= rect.x &&
      space.x + space.width >= rect.x + rect.width &&
      space.height >= rect.height - 0.01; // fudge number for rounding error
    if ( canFitInSpaceColumn ) {
      rect.y = space.y;
      this.placed( rect );
      break;
    }
  }
};

proto.rowPack = 

proto.placeInSpace = 

// update spaces with placed rect
proto.placed = 

proto.mergeSortSpaces = 

// add a space back
proto.addSpace = 

// -------------------------- utility functions -------------------------- //

/**
 * Remove redundant rectangle from array of rectangles
 * @param {Array} rects: an array of Rects
 * @returns {Array} rects: an array of Rects
**/
Packer.mergeRects = 


// -------------------------- sorters -------------------------- //

// functions for sorting rects in order
var sorters = {
  // top down, then left to right
  downwardLeftToRight: function( a, b ) {
    return a.y - b.y || a.x - b.x;
  },
  // left to right, then top down
  rightwardTopToBottom: };


// --------------------------  -------------------------- //

return Packer;

}));

/**
 * Packery Item Element
**/

(  window, function factory( Outlayer, Rect ) {


// -------------------------- Item -------------------------- //

var docElemStyle = document.documentElement.style;

var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

// sub-class Item
var Item = 

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var __create = proto._create;
proto._create = 

var _moveTo = proto.moveTo;
proto.moveTo = 

// -------------------------- placing -------------------------- //

proto.enablePlacing = 

proto.disablePlacing = 

// -----  ----- //

// remove element from DOM
proto.removeElem = 

// ----- dropPlaceholder ----- //

proto.showDropPlaceholder = 

proto.positionDropPlaceholder = 

proto.hideDropPlaceholder = 

// -----  ----- //

return Item;

}));

/*!
 * Packery v2.0.0
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2016 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'packery/js/packery',[
        'get-size/get-size',
        'outlayer/outlayer',
        './rect',
        './packer',
        './item'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer'),
      require('./rect'),
      require('./packer'),
      require('./item')
    );
  } else {
    // browser global
    window.Packery = factory(
      window.getSize,
      window.Outlayer,
      window.Packery.Rect,
      window.Packery.Packer,
      window.Packery.Item
    );
  }

}( window, function factory( getSize, Outlayer, Rect, Packer, Item ) {


// ----- Rect ----- //

// allow for pixel rounding errors IE8-IE11 & Firefox; #227
Rect.prototype.canFit = 

// -------------------------- Packery -------------------------- //

// create an Outlayer layout class
var Packery = Outlayer.create('packery');
Packery.Item = Item;

var proto = Packery.prototype;

proto._create = 


// ----- init & layout ----- //

/**
 * logic before any new layout
 */
proto._resetLayout = 

/**
 * update columnWidth, rowHeight, & gutter
 * @private
 */
proto._getMeasurements = 

proto._getItemLayoutPosition = 

proto.shiftLayout = 

proto._getPackMethod = 


/**
 * set max X and Y value, for size of container
 * @param {Packery.Rect} rect
 * @private
 */
proto._setMaxXY = 

/**
 * set the width and height of a rect, applying columnWidth and rowHeight
 * @param {Element} elem
 * @param {Packery.Rect} rect
 */
proto._setRectSize = 

/**
 * fits item to columnWidth/rowHeight and adds gutter
 * @param {Number} measurement - item width or height
 * @param {Number} gridSize - columnWidth or rowHeight
 * @returns measurement
 */
proto._applyGridGutter = 

proto._getContainerSize = 


// -------------------------- stamp -------------------------- //

/**
 * makes space for element
 * @param {Element} elem
 */
proto._manageStamp = 

// -------------------------- methods -------------------------- //

function verticalSorter( a, b ) {
  return a.position.y - b.position.y || a.position.x - b.position.x;
}


proto.sortItemsByPosition = 

/**
 * Fit item element in its current position
 * Packery will position elements around it
 * useful for expanding elements
 *
 * @param {Element} elem
 * @param {Number} x - horizontal destination position, optional
 * @param {Number} y - vertical destination position, optional
 */
proto.fit = 

/**
 * emit event when item is fit and other items are laid out
 * @param {Packery.Item} item
 * @private
 */
proto._bindFitEvents = 

// -------------------------- resize -------------------------- //

// debounced, layout on resize
proto.resize = 

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = 

proto.resizeShiftPercentLayout = 

// -------------------------- drag -------------------------- //

/**
 * handle an item drag start event
 * @param {Element} elem
 */
proto.itemDragStart = 

proto.updateShiftTargets = function( dropItem ) {
  this.shiftPacker.reset();

  // pack stamps
  this._getBoundingRect();
  var isOriginLeft = this._getOption('originLeft');
  var isOriginTop = this._getOption('originTop');
  this.stamps.forEach(  this );

  // reset shiftTargets
  var isHorizontal = this._getOption('horizontal');
  var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
  var measure = isHorizontal ? 'height' : 'width';

  this.shiftTargetKeys = [];
  this.shiftTargets = [];
  var boundsSize;
  var segment = this[ segmentName ];
  segment = segment && segment + this.gutter;

  if ( segment ) {
    var segmentSpan = Math.ceil( dropItem.rect[ measure ] / segment );
    var segs = Math.floor( ( this.shiftPacker[ measure ] + this.gutter ) / segment );
    boundsSize = ( segs - segmentSpan ) * segment;
    // add targets on top
    for ( var i=0; i < segs; i++ ) {
      this._addShiftTarget( i * segment, 0, boundsSize );
    }
  } else {
    boundsSize = ( this.shiftPacker[ measure ] + this.gutter ) - dropItem.rect[ measure ];
    this._addShiftTarget( 0, 0, boundsSize );
  }

  // pack each item to measure where shiftTargets are
  var items = this._getItemsForLayout( this.items );
  var packMethod = this._getPackMethod();
  items.forEach(  this );

};

proto._addShiftTarget = 

// -------------------------- drop -------------------------- //

proto.shift = 


// -------------------------- drag move -------------------------- //

var DRAG_THROTTLE_TIME = 120;

/**
 * handle an item drag move event
 * @param {Element} elem
 * @param {Number} x - horizontal change in position
 * @param {Number} y - vertical change in position
 */
proto.itemDragMove = 

// -------------------------- drag end -------------------------- //

/**
 * handle an item drag end event
 * @param {Element} elem
 */
proto.itemDragEnd = 

/**
 * binds Draggabilly events
 * @param {Draggabilly} draggie
 */
proto.bindDraggabillyEvents = function( draggie ) {
  this._bindDraggabillyEvents( draggie, 'on' );
};

proto.unbindDraggabillyEvents = function( draggie ) {
  this._bindDraggabillyEvents( draggie, 'off' );
};

proto._bindDraggabillyEvents = 

/**
 * binds jQuery UI Draggable events
 * @param {jQuery} $elems
 */
proto.bindUIDraggableEvents = function( $elems ) {
  this._bindUIDraggableEvents( $elems, 'on' );
};

proto.unbindUIDraggableEvents = 

proto._bindUIDraggableEvents = 

// ----- destroy ----- //

var _destroy = proto.destroy;
proto.destroy = 

// -----  ----- //

Packery.Rect = Rect;
Packery.Packer = Packer;

return Packery;

}));

/*!
 * Packery layout mode v2.0.1
 * sub-classes Packery
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {

  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'isotope-layout/js/layout-mode',
        'packery/js/packery'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('isotope-layout/js/layout-mode'),
      require('packery')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Packery
    );
  }

}( window, function factor( LayoutMode, Packery ) {


  // create an Outlayer layout class
  var PackeryMode = LayoutMode.create('packery');
  var proto = PackeryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    _getMeasurement: true
  };

  // inherit Packery prototype
  for ( var method in Packery.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Packery.prototype[ method ];
    }
  }

  // set packer in _resetLayout
  var _resetLayout = proto._resetLayout;
  proto._resetLayout = 

  var _getItemLayoutPosition = proto._getItemLayoutPosition;
  proto._getItemLayoutPosition = 

  // needsResizeLayout for vertical or horizontal
  var _needsResizeLayout = proto.needsResizeLayout;
  proto.needsResizeLayout = function() {
    if ( this._getOption('horizontal') ) {
      return this.needsVerticalResizeLayout();
    } else {
      return _needsResizeLayout.call( this );
    }
  };

  // point to mode options for horizontal
  var _getOption = proto._getOption;
  proto._getOption = 

  return PackeryMode;

}));

/*!
 * cellsByRows layout mode for Isotope
 * v1.1.3
 * http://isotope.metafizzy.co/layout-modes/cellsbyrow.html
 */

/*jshint browser: true, devel: false, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
        'isotope/js/layout-mode'
      ],
      factory );
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      require('isotope-layout/js/layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
  'use strict';

  var CellsByRow = LayoutMode.create( 'cellsByRow' );
  var proto = CellsByRow.prototype;

  proto._resetLayout = 

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    var col = this.itemIndex % this.cols;
    var row = Math.floor( this.itemIndex / this.cols );
    // center item within cell
    var x = ( col + 0.5 ) * this.columnWidth - item.size.outerWidth / 2;
    var y = ( row + 0.5 ) * this.rowHeight - item.size.outerHeight / 2;
    this.itemIndex++;
    return { x: x, y: y };
  };

  proto._getContainerSize = 

  return CellsByRow;

}));
/*global jQuery: true */

/*!
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.1.0
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + Documentation: http://infinite-scroll.com/
*/

// Uses AMD or browser globals to create a jQuery plugin.
(function ($, undefined) {
    'use strict';

    $.infinitescroll = 

    $.infinitescroll.defaults = {
        loading: {
            finished: undefined,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: 'data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7',
            msg: null,
            msgText: '<em>Loading the next set of posts...</em>',
            selector: null,
            speed: 'fast',
            start: undefined
        },
        state: {
            isDuringAjax: false,
            isInvalidPage: false,
            isDestroyed: false,
            isDone: false, // For when it goes all the way through the archive.
            isPaused: false,
            isBeyondMaxPage: false,
            currPage: 1
        },
        debug: false,
        behavior: undefined,
        binder: $(window), // used to cache the selector
        nextSelector: 'div.navigation a:first',
        navSelector: 'div.navigation',
        contentSelector: null, // rename to pageFragment
        extraScrollPx: 150,
        itemSelector: 'div.post',
        animate: false,
        pathParse: undefined,
        dataType: 'html',
        appendCallback: true,
        bufferPx: 40,
        errorCallback: function () { },
        infid: 0, //Instance ID
        pixelsFromNavToBottom: undefined,
        path: undefined, // Either parts of a URL as an array (e.g. ["/page/", "/"] or a function that takes in the page number and returns a URL
        prefill: false, // When the document is smaller than the window, load data until the document is larger or links are exhausted
        maxPage: undefined // to manually control maximum page (when maxPage is undefined, maximum page limitation is not work)
    };

    $.infinitescroll.prototype = {

        /*
            ----------------------------
            Private methods
            ----------------------------
            */

        // Bind or unbind from scroll
        _binding: 

        // Fundamental aspects of the plugin are initialized
        _create: 

        _prefill: function infscr_prefill() {
            var instance = this;
            var $window = $(window);

            
            this._prefill = 

            // Call self after setting up the new function
            this._prefill();
        },

        // Console log wrapper
        _debug: 

        // find the number to increment in the path.
        _determinepath: 

        // Custom error
        _error: 

        // Load Callback
        _loadcallback: function infscr_loadcallback(box, data, url) {
            var opts = this.options,
            callback = this.options.callback, // GLOBAL OBJECT FOR CALLBACK
            result = (opts.state.isDone) ? 'done' : (!opts.appendCallback) ? 'no-append' : 'append',
            frag;

            // if behavior is defined and this function is extended, call that instead of default
            if (!!opts.behavior && this['_loadcallback_'+opts.behavior] !== undefined) {
                this['_loadcallback_'+opts.behavior].call(this,box,data);
                return;
            }

            switch (result) {
                case 'done':
                    this._showdonemsg();
                    return false;

                case 'no-append':
                    if (opts.dataType === 'html') {
                        data = '<div>' + data + '</div>';
                        data = $(data).find(opts.itemSelector);
                    }

                    // if it didn't return anything
                    if (data.length === 0) {
                        return this._error('end');
                    }

                    break;

                case 'append':
                    var children = box.children();
                    // if it didn't return anything
                    if (children.length === 0) {
                        return this._error('end');
                    }

                    // use a documentFragment because it works when content is going into a table or UL
                    frag = document.createDocumentFragment();
                    while (box[0].firstChild) {
                        frag.appendChild(box[0].firstChild);
                    }

                    this._debug('contentSelector', $(opts.contentSelector)[0]);
                    $(opts.contentSelector)[0].appendChild(frag);
                    // previously, we would pass in the new DOM element as context for the callback
                    // however we're now using a documentfragment, which doesn't have parents or children,
                    // so the context is the contentContainer guy, and we pass in an array
                    // of the elements collected as the first argument.

                    data = children.get();
                    break;
            }

            // loadingEnd function
            opts.loading.finished.call($(opts.contentSelector)[0],opts);

            // smooth scroll to ease in the new content
            if (opts.animate) {
                var scrollTo = $(window).scrollTop() + $(opts.loading.msg).height() + opts.extraScrollPx + 'px';
                $('html,body').animate({ scrollTop: scrollTo }, 800, ;
            }

            if (!opts.animate) {
                // once the call is done, we can allow it again.
                opts.state.isDuringAjax = false;
            }

            callback(this, data, url);

            if (opts.prefill) {
                this._prefill();
            }
        },

        _nearbottom: 

        // Pause / temporarily disable plugin from firing
        _pausing: 

        // Behavior is determined
        // If the behavior option is undefined, it will set to default and bind to scroll
        _setup: 

        // Show done message
        _showdonemsg: 

        // grab each selector option and see if any fail
        _validate: 

        /*
            ----------------------------
            Public methods
            ----------------------------
            */

        // Bind to scroll
        bind: function infscr_bind() {
            this._binding('bind');
        },

        // Destroy current instance of plugin
        destroy: 

        // Set pause value to false
        pause: function infscr_pause() {
            this._pausing('pause');
        },

        // Set pause value to false
        resume: function infscr_resume() {
            this._pausing('resume');
        },

        beginAjax: function infscr_ajax(opts) {
            var instance = this,
                path = opts.path,
                box, desturl, method, condition;

            // increment the URL bit. e.g. /page/3/
            opts.state.currPage++;

            // Manually control maximum page
            if ( opts.maxPage !== undefined && opts.state.currPage > opts.maxPage ){
                opts.state.isBeyondMaxPage = true;
                this.destroy();
                return;
            }

            // if we're dealing with a table we can't use DIVs
            box = $(opts.contentSelector).is('table, tbody') ? $('<tbody/>') : $('<div/>');

            desturl = (typeof path === 'function') ? path(opts.state.currPage) : path.join(opts.state.currPage);
            instance._debug('heading into ajax', desturl);

            method = (opts.dataType === 'html' || opts.dataType === 'json' ) ? opts.dataType : 'html+callback';
            if (opts.appendCallback && opts.dataType === 'html') {
                method += '+callback';
            }

            switch (method) {
                case 'html+callback':
                    instance._debug('Using HTML via .load() method');
                    box.load(desturl + ' ' + opts.itemSelector, undefined, ;

                    break;

                case 'html':
                    instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
                    $.ajax({
                        // params
                        url: desturl,
                        dataType: opts.dataType,
                        complete:                     });

                    break;
                case 'json':
                    instance._debug('Using ' + (method.toUpperCase()) + ' via $.ajax() method');
                    $.ajax({
                        dataType: 'json',
                        type: 'GET',
                        url: desturl,
                        success: 
                        error:                     });

                    break;
            }
        },

        // Retrieve next set of content items
        retrieve: 

        // Check to see next page is needed
        scroll: 

        // Toggle pause value
        toggle: 

        // Unbind from scroll
        unbind: 

        // update options
        update:     };


    /*
        ----------------------------
        Infinite Scroll function
        ----------------------------

        Borrowed logic from the following...

        jQuery UI
        - https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js

        jCarousel
        - https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

        Masonry
        - https://github.com/desandro/masonry/blob/master/jquery.masonry.js

*/

    $.fn.infinitescroll = 



    /*
     * smartscroll: debounced scroll event for jQuery *
     * https://github.com/lukeshumard/smartscroll
     * Based on smartresize by @louis_remi: https://github.com/lrbabe/jquery.smartresize.js *
     * Copyright 2011 Louis-Remi & Luke Shumard * Licensed under the MIT license. *
     */

    var event = $.event,
    scrollTimeout;

    event.special.smartscroll = {
        setup: function () {
            $(this).bind('scroll', event.special.smartscroll.handler);
        },
        teardown: 
        handler:     };

    $.fn.smartscroll = 

}));

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
())
;())
;())
;())
;())
;
/*!
Waypoints Inview Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/}())
;

/*
 * SmartMenus jQuery v0.9.6
 * http://www.smartmenus.org/
 *
 * Copyright 2014 Vasil Dinkov, Vadikom Web Ltd.
 * http://vadikom.com/
 *
 * Released under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function($) {

	var menuTrees = [],
		IE = !!window.createPopup, // we need to detect it, unfortunately
		IElt9 = IE && !document.defaultView,
		IElt8 = IE && !document.querySelector,
		IE6 = IE && typeof document.documentElement.currentStyle.minWidth == 'undefined',
		mouse = false, // optimize for touch by default - we will detect for mouse input
		mouseDetectionEnabled = false;

	// Handle detection for mouse input (i.e. desktop browsers, tablets with a mouse, etc.)
	function initMouseDetection(disable) {
		if (!mouseDetectionEnabled && !disable) {
			// if we get two consecutive mousemoves within 2 pixels from each other and within 300ms, we assume a real mouse/cursor is present
			// in practice, this seems like impossible to trick unintentianally with a real mouse and a pretty safe detection on touch devices (even with older browsers that do not support touch events)
			var firstTime = true,
				lastMove = null;
			$(document).bind({
				'mousemove.smartmenus_mouse'},
				'touchstart.smartmenus_mouse pointerover.smartmenus_mouse MSPointerOver.smartmenus_mouse': function(e) {
					if (!/^(4|mouse|pen)$/.test(e.originalEvent.pointerType)) {
						mouse = false;
					}
				}
			});
			mouseDetectionEnabled = true;
		} else if (mouseDetectionEnabled && disable) {
			$(document).unbind('.smartmenus_mouse');
			mouseDetectionEnabled = false;
		}
	};

	$.SmartMenus = function(elm, options) {
		this.$root = $(elm);
		this.opts = options;
		this.rootId = ''; // internal
		this.$subArrow = null;
		this.subMenus = []; // all sub menus in the tree (UL elms) in no particular order (only real - e.g. UL's in mega sub menus won't be counted)
		this.activatedItems = []; // stores last activated A's for each level
		this.visibleSubMenus = []; // stores visible sub menus UL's
		this.showTimeout = 0;
		this.hideTimeout = 0;
		this.scrollTimeout = 0;
		this.clickActivated = false;
		this.zIndexInc = 0;
		this.$firstLink = null; // we'll use these for some tests
		this.$firstSub = null; // at runtime so we'll cache them
		this.disabled = false;
		this.$disableOverlay = null;
		this.init();
	};

	$.extend($.SmartMenus, {
		hideAll},
		destroy},
		prototype: {
			init: function(refresh) {
				var self = this;

				if (!refresh) {
					menuTrees.push(this);

					this.rootId = (new Date().getTime() + Math.random() + '').replace(/\D/g, '');

					if (this.$root.hasClass('sm-rtl')) {
						this.opts.rightToLeftSubMenus = true;
					}

					// init root (main menu)
					this.$root
						.data('smartmenus', this)
						.attr('data-smartmenus-id', this.rootId)
						.dataSM('level', 1)
						.bind({
							'mouseover.smartmenus focusin.smartmenus': $.proxy(this.rootOver, this),
							'mouseout.smartmenus focusout.smartmenus': $.proxy(this.rootOut, this)
						})
						.delegate('a, div.logo-container', {
							'mouseenter.smartmenus': $.proxy(this.itemEnter, this),
							'mouseleave.smartmenus': $.proxy(this.itemLeave, this),
							'mousedown.smartmenus': $.proxy(this.itemDown, this),
							'focus.smartmenus': $.proxy(this.itemFocus, this),
							'blur.smartmenus': $.proxy(this.itemBlur, this),
							'click.smartmenus': $.proxy(this.itemClick, this),
							'touchend.smartmenus': $.proxy(this.itemTouchEnd, this)
						});

					var eNamespace = '.smartmenus' + this.rootId;
					// hide menus on tap or click outside the root UL
					if (this.opts.hideOnClick) {
							$(document).on('touchstart' + eNamespace, $.proxy(this.docTouchStart, this))
								.on('touchmove' + eNamespace, $.proxy(this.docTouchMove, this))
								.on('touchend' + eNamespace, $.proxy(this.docTouchEnd, this))
								// for Opera Mobile < 11.5, webOS browser, etc. we'll check click too
								.on('click' + eNamespace, $.proxy(this.docClick, this));
					}
					// hide sub menus on resize
					$(window).on('resize' + eNamespace + ' orientationchange' + eNamespace, $.proxy(this.winResize, this));
					$(window).on('scroll' + eNamespace + ' orientationchange' + eNamespace, $.proxy(this.winResize, this));

					if (this.opts.subIndicators) {
						this.$subArrow = $('<span/>').addClass('sub-arrow');
						if (this.opts.subIndicatorsText) {
							this.$subArrow.html(this.opts.subIndicatorsText);
						}
					}

					// make sure mouse detection is enabled
					initMouseDetection();
				}

				// init sub menus
				this.$firstSub = this.$root.find('ul').eac}).eq(0);

				this.$firstLink = this.$root.find('a').eq(0);

				// find current item
				if (this.opts.markCurrentItem) {
					var reDefaultDoc = /(index|default)\.[^#\?\/]*/i,
						reHash = /#.*/,
						locHref = window.location.href.replace(reDefaultDoc, ''),
						locHrefNoHash = locHref.replace(reHash, '');
					this.$root.find('a').each(function() {
						var href = this.href.replace(reDefaultDoc, ''),
							$this = $(this);
						if (href == locHref || href == locHrefNoHash) {
							$this.addClass('current');
							if (self.opts.markCurrentTree) {
								$this.parents('li').eac});
							}
						}
					});
				}
			},
			destroy: function() {
				this.menuHideAll();
				this.$root
					.removeData('smartmenus')
					.removeAttr('data-smartmenus-id')
					.removeDataSM('level')
					.unbind('.smartmenus')
					.undelegate('.smartmenus');
				var eNamespace = '.smartmenus' + this.rootId;
				$(document).unbind(eNamespace);
				$(window).unbind(eNamespace);
				if (this.opts.subIndicators) {
					this.$subArrow = null;
				}
				var self = this;
				$.each(this.subMenus, function() {
					if (this.hasClass('mega-menu')) {
						this.find('ul').removeDataSM('in-mega');
					}
					if (this.dataSM('shown-before')) {
						if (IElt8) {
							this.children().css({ styleFloat: '', width: '' });
						}
						if (self.opts.subMenusMinWidth || self.opts.subMenusMaxWidth) {
							if (!IE6) {
								this.css({ width: '', minWidth: '', maxWidth: '' }).removeClass('sm-nowrap');
							} else {
								this.css({ width: '', overflowX: '', overflowY: '' }).children().children('a').css('white-space', '');
							}
						}
						if (this.dataSM('scroll-arrows')) {
							this.dataSM('scroll-arrows').remove();
						}
						this.css({ zIndex: '', top: '', left: '', marginLeft: '', marginTop: '', display: '' });
					}
					if (self.opts.subIndicators) {
						this.dataSM('parent-a').removeClass('has-submenu').children('span.sub-arrow').remove();
					}
					this.removeDataSM('shown-before')
						.removeDataSM('ie-shim')
						.removeDataSM('scroll-arrows')
						.removeDataSM('parent-a')
						.removeDataSM('level')
						.removeDataSM('beforefirstshowfired')
						.parent().removeDataSM('sub');
				});
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.$root = null;
				this.$firstLink = null;
				this.$firstSub = null;
				if (this.$disableOverlay) {
					this.$disableOverlay.remove();
					this.$disableOverlay = null;
				}
				menuTrees.splice($.inArray(this, menuTrees), 1);
			},
			disable: function(noOverlay) {
				if (!this.disabled) {
					this.menuHideAll();
					// display overlay over the menu to prevent interaction
					if (!noOverlay && !this.opts.isPopup && this.$root.is(':visible')) {
						var pos = this.$root.offset();
						this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>').css({
							position: 'absolute',
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight(),
							zIndex: this.getStartZIndex() + 1,
							opacity: 0
						}).appendTo(document.body);
					}
					this.disabled = true;
				}
			},
			docClick: function(e) {
				// hide on any click outside the menu or on a menu link
				if (this.visibleSubMenus.length && !$.contains(this.$root[0], e.target) || $(e.target).is('a')) {
					this.menuHideAll($(e.target));
				}
			},
			docTouchEnd: function(e) {
				if (!this.lastTouch) {
					return;
				}
				if (this.visibleSubMenus.length && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !$.contains(this.$root[0], this.lastTouch.target))) {
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}
					// hide with a delay to prevent triggering accidental unwanted click on some page element
					var self = this;
					this.hideTimeout = setTimeou}, 350);
				}
				this.lastTouch = null;
			},
			docTouchMove},
			docTouchStart},
			enable},
			getHeight},
			// returns precise width/height float values in IE9+, FF4+, recent WebKit
			// http://vadikom.com/dailies/offsetwidth-offsetheight-useless-in-ie9-firefox4/
			getOffset: function($elm, height) {
				var old,
					$win = $(window),
					winW = $win.width();
				if ($elm.css('display') == 'none') {
					old = { position: $elm[0].style.position, visibility: $elm[0].style.visibility };
					$elm.css({ position: 'absolute', visibility: 'hidden' }).show();
					if ( 
						($('body').hasClass('menu-mobile-off-canvas') && winW < 960 && $elm.closest('.main-menu-container').length)
						||
						($('body').hasClass('vmenu-offcanvas-overlay') && winW >= 960 && $elm.closest('.main-menu-container').length)
					) {
						$elm.closest('li').addClass('smartmenu-open-item');
					}
				}
				var defaultView = $elm[0].ownerDocument.defaultView,
					compStyle = defaultView && defaultView.getComputedStyle && defaultView.getComputedStyle($elm[0], null),
					val = compStyle && parseFloat(compStyle[height ? 'height' : 'width']);
				if (val) {
					val += parseFloat(compStyle[height ? 'paddingTop' : 'paddingLeft'])
	 					+ parseFloat(compStyle[height ? 'paddingBottom' : 'paddingRight'])
	 					+ parseInt(compStyle[height ? 'borderTopWidth' : 'borderLeftWidth'])
	 					+ parseInt(compStyle[height ? 'borderBottomWidth' : 'borderRightWidth']);
				} else {
					val = height ? $elm[0].offsetHeight : $elm[0].offsetWidth;
				}
				if (old) {
					$elm.hide().css(old);
				}
				return val;
			},
			getWidth},
			getStartZIndex},
			handleEvents},
			handleItemEvents},
			isCollapsible: function() {
				return this.$firstSub.css('position') == 'static';
			},
			isCSSOn: function() {
				return this.$firstLink.css('display') == 'block' || this.$firstLink.css('display') == 'flex' || this.$firstLink.css('display') == 'inline-flex' || this.$firstLink.css('display') == 'table-cell' || this.$firstLink.css('display') == 'inline';
			},
			isFixed},
			isLinkInMegaMenu},
			isTouchMode},
			itemActivate: function($a) {
				var $li = $a.parent(),
					$ul = $li.parent(),
					level = $ul.dataSM('level');
				// if for some reason the parent item is not activated (e.g. this is an API call to activate the item), activate all parent items first
				if (level > 1 && (!this.activatedItems[level - 2] || this.activatedItems[level - 2][0] != $ul.dataSM('parent-a')[0])) {
					var self = this;
					$($ul.parentsUntil('[data-smartmenus-id]', 'ul').get().reverse()).add($ul).eac});
				}
				// hide any visible deeper level sub menus
				if (this.visibleSubMenus.length > level) {
					for (var i = this.visibleSubMenus.length - 1, l = !this.activatedItems[level - 1] || this.activatedItems[level - 1][0] != $a[0] ? level - 1 : level; i > l; i--) {
						//if ( !this.visibleSubMenus[i].closest('.menu-accordion').length ) {
							this.menuHide(this.visibleSubMenus[i]);
						//}
					}
				}
				// save new active item and sub menu for this level
				this.activatedItems[level - 1] = $a;
				this.visibleSubMenus[level - 1] = $ul;
				if (this.$root.triggerHandler('activate.smapi', $a[0]) === false) {
					return;
				}
				// show the sub menu if this item has one
				var $sub = $li.dataSM('sub');
				if ($sub && (this.isTouchMode() || (!this.opts.showOnClick || this.clickActivated))) {
					this.menuShow($sub);
				}
			},
			itemBlur},
			itemClick: function(e) {
				var $a = $(e.currentTarget);

				if (!this.handleItemEvents($a)) {
					return;
				}
				$a.removeDataSM('mousedown');
				if (this.$root.triggerHandler('click.smapi', $a[0]) === false) {
					return false;
				}
				var $sub = $a.parent().dataSM('sub');
				if (this.isTouchMode()) {
					// undo fix: prevent the address bar on iPhone from sliding down when expanding a sub menu
					if ($a.dataSM('href')) {
						$a.attr('href', $a.dataSM('href')).removeDataSM('href');
					}
					// if the sub is not visible
					if ($sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'))) {
						// try to activate the item and show the sub
						this.itemActivate($a);
						// if "itemActivate" showed the sub, prevent the click so that the link is not loaded
						// if it couldn't show it, then the sub menus are disabled with an !important declaration (e.g. via mobile styles) so let the link get loaded
						if ($sub.is(':visible')) {
							return false;
						}
					}
				} else if (this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 && $sub) {
					this.clickActivated = true;
					this.menuShow($sub);
					return false;
				}
				if ($a.hasClass('disabled')) {
					return false;
				}
				if (this.$root.triggerHandler('select.smapi', $a[0]) === false) {
					return false;
				}
			},
			itemDown},
			itemEnter: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
					var self = this;
					this.showTimeout = setTimeout(function() { self.itemActivate($a); }, this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 ? 1 : this.opts.showTimeout);
				}
				this.$root.triggerHandler('mouseenter.smapi', $a[0]);
			},
			itemFocus: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				// fix (the mousedown check): in some browsers a tap/click produces consecutive focus + click events so we don't need to activate the item on focus
				if ((!this.isTouchMode() || !$a.dataSM('mousedown')) && (!this.activatedItems.length || this.activatedItems[this.activatedItems.length - 1][0] != $a[0])) {
					this.itemActivate($a);
				}
				this.$root.triggerHandler('focus.smapi', $a[0]);
			},
			itemLeave: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					if ($a[0].blur) {
						$a[0].blur();
					}
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
				}
				$a.removeDataSM('mousedown');
				this.$root.triggerHandler('mouseleave.smapi', $a[0]);
			},
			itemTouchEnd: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				// prevent the address bar on iPhone from sliding down when expanding a sub menu
				var $sub = $a.parent().dataSM('sub');
				if ($a.attr('href').charAt(0) !== '#' && $sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'))) {
					$a.dataSM('href', $a.attr('href'));
					$a.attr('href', '#');
				}
			},
			menuFixLayout: function($ul) {
				// fixes a menu that is being shown for the first time
				if (!$ul.dataSM('shown-before')) {
					$ul.hide().dataSM('shown-before', true);
					// fix the layout of the items in IE<8
					if (IElt8) {
						$ul.children().css({ styleFloat: 'left', width: '100%' });
					}
				}
			},
			menuHide: function($sub) {
				if (this.$root.triggerHandler('beforehide.smapi', $sub[0]) === false) {
					return;
				}
				$sub.stop(true, true);
				if ($sub.is(':visible')) {
					var complete = function() {
						// unset z-index
						if (IElt9) {
							$sub.parent().css('z-index', '');
						} else {
							$sub.css('z-index', '');
						}
					};
					// if sub is collapsible (mobile view)
					if (this.isCollapsible()) {
						if (this.opts.collapsibleHideFunction) {
							this.opts.collapsibleHideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.collapsibleHideDuration, complete);
						}
					} else {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.hideDuration, complete);
						}
					}
					// remove IE iframe shim
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').remove();
					}
					// deactivate scrolling if it is activated for this sub
					if ($sub.dataSM('scroll')) {
						$sub.unbind('.smartmenus_scroll').removeDataSM('scroll').dataSM('scroll-arrows').hide();
					}
					// unhighlight parent item
					$sub.dataSM('parent-a').removeClass('highlighted');
					var level = $sub.dataSM('level');
					this.activatedItems.splice(level - 1, 1);
					this.visibleSubMenus.splice(level - 1, 1);
					this.$root.triggerHandler('hide.smapi', $sub[0]);
				}
			},
			menuHideAll: function($item) {
				if ($item != undefined && $item.parent().hasClass('menu-item') && !$item.parent().hasClass('menu-item-has-children')) return;
				var $win = $(window),
					winW = $win.width();
				if (this.showTimeout) {
					clearTimeout(this.showTimeout);
					this.showTimeout = 0;
				}
				// hide all subs
				for (var i = this.visibleSubMenus.length - 1; i > 0; i--) {
					if ( this.visibleSubMenus[i].closest('.smartmenu-open-item').length ) {
						if ( $item != undefined && $item.closest('.smartmenu-open-item').length ) {
							this.menuHide(this.visibleSubMenus[i]);
							$(this.visibleSubMenus[i]).closest('.smartmenu-open-item').removeClass('smartmenu-open-item');
						} else {
							return;
						}
					} else {
						this.menuHide(this.visibleSubMenus[i]);
					}
				}
				// hide root if it's popup
				if (this.opts.isPopup) {
					this.$root.stop(true, true);
					if (this.$root.is(':visible')) {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, this.$root);
						} else {
							this.$root.hide(this.opts.hideDuration);
						}
						// remove IE iframe shim
						if (this.$root.dataSM('ie-shim')) {
							this.$root.dataSM('ie-shim').remove();
						}
					}
				}
				this.activatedItems = [];
				this.visibleSubMenus = [];
				this.clickActivated = false;
				// reset z-index increment
				this.zIndexInc = 0;
			},
			menuIframeShim},
			menuInit: function($ul) {
				if (!$ul.dataSM('in-mega')) {
					this.subMenus.push($ul);
					// mark UL's in mega drop downs (if any) so we can neglect them
					if ($ul.hasClass('mega-menu')) {
						$ul.find('ul').dataSM('in-mega', true);
					}
					// get level (much faster than, for example, using parentsUntil)
					var level = 2,
						par = $ul[0];
					while (par != null && par.parentNode != null && ( par = par.parentNode.parentNode) != this.$root[0]) {
						level++;
					}
					// cache stuff
					$ul.dataSM('parent-a', $ul.prevAll('a').eq(-1))
						.dataSM('level', level)
						.parent().dataSM('sub', $ul);
					// add sub indicator to parent item
					if (this.opts.subIndicators) {
						$ul.dataSM('parent-a').addClass('has-submenu')[this.opts.subIndicatorsPos](this.$subArrow.clone());
					}
				}
			},
			menuPosition: function($sub) {
				var fixIE = $('html.ie').length;
				// if (fixIE) {
				// 	var $rowParent = $($sub).closest('.main-menu-container');
				// 	$rowParent.height($rowParent.height());
				// }
				var $a = $sub.dataSM('parent-a'),
					$li = $sub.parent(),
					$ul = $sub.parent().parent(),
					// $container = $ul.closest('.row-menu-inner').length ? ( $('body').hasClass('megamenu-side-to-side') ? ( $('body').hasClass('boxed-width') ? $ul.closest('.row-menu') : $(window) ) : $ul.closest('.row-menu-inner') ) : $ul.closest('.uncol'),
					$container = $ul.closest('.row-menu-inner').length ? ( $('body').hasClass('megamenu-side-to-side') ? $ul.closest('.row-menu') : $ul.closest('.row-menu-inner') ) : $ul.closest('.uncol'),
					level = $sub.dataSM('level'),
					subW = this.getWidth($sub),
					subH = this.getHeight($sub),
					itemOffset = $a.offset(),
					itemX = itemOffset.left,
					itemY = itemOffset.top,
					itemW = this.getWidth($a),
					itemH = this.getHeight($a),
					$win = $(window),
					winX = $win.scrollLeft(),
					winY = $win.scrollTop(),
					winW = $win.width(),
					winH = $win.height(),
					containerW = $container.width(),
					containerOffsetX = containerW + ((winW - containerW) / 2),
					horizontalParent = $ul.hasClass('sm') && !$ul.hasClass('sm-vertical'),
					subOffsetX = level == 2 ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
					subOffsetY = level == 2 ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY,
					x, y, leftPos;

				if (horizontalParent) {
					x = this.opts.rightToLeftSubMenus ? itemW - subW - subOffsetX : subOffsetX;
					y = this.opts.bottomToTopSubMenus ? -subH - subOffsetY : itemH + subOffsetY;
				} else {
					x = this.opts.rightToLeftSubMenus ? subOffsetX - subW : subW - subOffsetX;
					y = this.opts.bottomToTopSubMenus ? itemH - subOffsetY - subH : subOffsetY;
				}
				if (this.opts.keepInViewport && !this.isCollapsible()) {
					if (this.isFixed()) {
						itemX -= winX;
						itemY -= winY;
						winX = winY = 0;
					}
					var absX = itemX + x,
						absY = itemY + y;
					if (this.opts.rightToLeftSubMenus && absX < winX) {
						x = horizontalParent ? winX - absX + x : itemW - subOffsetX;
					} else if (!this.opts.rightToLeftSubMenus && absX + subW > winX + containerOffsetX ) {
						x = horizontalParent ? winX + containerOffsetX - subW - absX + x : subOffsetX - subW;
					}
					if (!horizontalParent) {
						if (subH < winH && absY + subH > winY + winH) {
							y += winY + winH - subH - absY;
						} else if (subH >= winH || absY < winY) {
							y += winY - absY;
						}
					}
					// do we need scrolling?
					// 0.49 added for the sake of IE9/FF4+ where we might be dealing with float numbers for "subH"
					if (mouse && (horizontalParent && (absY + subH > winY + winH + 0.49 || absY < winY) || !horizontalParent && subH > winH + 0.49)) {
						var self = this;
						if (!$sub.dataSM('scroll-arrows')) {
							$sub.dataSM('scroll-arrows', $([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], $('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]])
								.bind({
									mouseenter},
									mouseleave},
									'mousewheel DOMMouseScroll'}
								})
								.insertAfter($sub)
							);
						}
						// bind events to show/hide arrows on hover and save scrolling data for this sub
						var vportY = winY - (itemY + itemH);
						$sub.dataSM('scroll', {
								vportY: vportY,
								subH: subH,
								winH: winH,
								step: 1
							})
							.bind({
								'mouseover.smartmenus_scroll': function(e) { self.menuScrollOver($sub, e); },
								'mouseout.smartmenus_scroll': function(e) { self.menuScrollOut($sub, e); },
								'mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll'}
							})
							.dataSM('scroll-arrows').css({ top: 'auto', left: '0', marginLeft: x + (parseInt($sub.css('border-left-width')) || 0), width: this.getWidth($sub) - (parseInt($sub.css('border-left-width')) || 0) - (parseInt($sub.css('border-right-width')) || 0), zIndex: this.getStartZIndex() + this.zIndexInc })
							.eq(0).css('margin-top', vportY).end()
							.eq(1).css('margin-top', vportY + winH - this.getHeight($sub.dataSM('scroll-arrows').eq(1))).end()
							.eq(horizontalParent && this.opts.bottomToTopSubMenus ? 0 : 1).show();
					}
				}
				if ( !$sub.closest('.menu-accordion').length ) {
					var rightPos = 'auto';
					if ( $sub.closest('.grid-filters').length ) {
						if ( $sub.closest('.text-right').length ) {
							leftPos = '0px';
							rightPos = 'auto';
						} else {
							leftPos = 'auto';
							rightPos = '0px';
						}
						x = 0;
					} else {
						if ( $sub.hasClass('mega-menu-inner') ) {
							$sub.css({ width: containerW});
							leftPos = -1 * (parseFloat($sub.closest('ul.menu-smart').offset().left) - parseFloat($sub.closest('.row-menu').offset().left));
							if ( ! $('body').hasClass('megamenu-side-to-side') ) {
								leftPos += parseFloat($sub.closest('.row-menu-inner').css('paddingLeft'));
							}
							x = 0;
						} else {
							leftPos = (level > 2 ? $li.position().left - parseFloat($li.closest('ul').css('paddingLeft')) : $li.position().left ) + 'px';
							x = (level > 2 && x >= 0) ? x + 1 : x - 1;
						}
					}
				}

				// $sub.css({ top: (level > 2) ? $a[0].offsetTop : (fixIE ? itemH : '100%'), left: leftPos, right: rightPos, marginLeft: x, marginTop: (level > 2) ? 0 : y - itemH + ($sub.closest('.menu-borders').length ? 1 : 0) });
				$sub.css({ top: (level > 2) ? $a[0].offsetTop : (fixIE ? itemH : '100%'), left: leftPos, right: rightPos, marginLeft: x, marginTop: (level > 2) ? 0 : y - itemH + ($sub.closest('.menu-borders').length && !$sub.closest('.menu-borders.needs-after').length ? 1 : 0) });
				// IE iframe shim
				this.menuIframeShim($sub);
				if ($sub.dataSM('ie-shim')) {
					$sub.dataSM('ie-shim').css({ zIndex: $sub.css('z-index'), width: subW, height: subH, marginLeft: x, marginTop: y - itemH + ($sub.closest('.menu-mini').length ? 0 : 1) });
				}
			},
			menuScroll: function($sub, up, wheel) {
				var y = parseFloat($sub.css('margin-top')),
					scroll = $sub.dataSM('scroll'),
					end = scroll.vportY + (up ? 0 : scroll.winH - scroll.subH),
					step = wheel || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor($sub.dataSM('scroll').step);
				$sub.add($sub.dataSM('ie-shim')).css('margin-top', Math.abs(end - y) > step ? y + (up ? step : -step) : end);
				y = parseFloat($sub.css('margin-top'));
				// show opposite arrow if appropriate
				if (up && y + scroll.subH > scroll.vportY + scroll.winH || !up && y < scroll.vportY) {
					$sub.dataSM('scroll-arrows').eq(up ? 1 : 0).show();
				}
				// accelerate when not using mousewheel to scroll
				if (!wheel && this.opts.scrollAccelerate && $sub.dataSM('scroll').step < this.opts.scrollStep) {
					$sub.dataSM('scroll').step += 0.5;
				}
				// "y" and "end" might be float numbers in IE9/FF4+ so this weird way to check is used
				if (Math.abs(y - end) < 1) {
					$sub.dataSM('scroll-arrows').eq(up ? 0 : 1).hide();
					$sub.dataSM('scroll').step = 1;
				} else if (!wheel) {
					var self = this;
					this.scrollTimeout = setTimeou}, this.opts.scrollInterval);
				}
			},
			menuScrollMousewheel: function($sub, e) {
				var $closestSub = $(e.target).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if ($closestSub[0] == $sub[0]) {
					var up = (e.originalEvent.wheelDelta || -e.originalEvent.detail) > 0;
					if ($sub.dataSM('scroll-arrows').eq(up ? 0 : 1).is(':visible')) {
						this.menuScroll($sub, up, true);
					}
				}
				e.preventDefault();
			},
			menuScrollOut: function($sub, e) {
				var reClass = /^scroll-(up|down)/,
					$closestSub = $(e.relatedTarget).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if (!reClass.test((e.relatedTarget || '').className) && ($sub[0] != e.relatedTarget && !$.contains($sub[0], e.relatedTarget) || $closestSub[0] != $sub[0])) {
					$sub.dataSM('scroll-arrows').css('visibility', 'hidden');
				}
			},
			menuScrollOver: function($sub, e) {
				var reClass = /^scroll-(up|down)/,
					$closestSub = $(e.target).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if (!reClass.test(e.target.className) && $closestSub[0] == $sub[0]) {
					$sub.dataSM('scroll-arrows').css('visibility', 'visible');
				}
			},
			menuScrollStop: function($sub) {
				if (this.scrollTimeout) {
					clearTimeout(this.scrollTimeout);
					this.scrollTimeout = 0;
					$sub.dataSM('scroll').step = 1;
				}
			},
			menuShow: function($sub) {
				if (!$sub.dataSM('beforefirstshowfired')) {
					$sub.dataSM('beforefirstshowfired', true);
					if (this.$root.triggerHandler('beforefirstshow.smapi', $sub[0]) === false) {
						return;
					}
				}
				if (this.$root.triggerHandler('beforeshow.smapi', $sub[0]) === false) {
					return;
				}
				this.menuFixLayout($sub);
				$sub.stop(true, true);
				if (!$sub.is(':visible')) {
					$sub.css({
						'visibility': 'visible',
						'pointer-events': 'auto',
					});
					// set z-index - for IE < 9 set it to the parent LI
					var zIndex = this.getStartZIndex() + (++this.zIndexInc);
					if (IElt9) {
						$sub.parent().css('z-index', zIndex);
					} else {
						$sub.css('z-index', zIndex);
					}
					// highlight parent item
					if (this.opts.keepHighlighted || this.isCollapsible()) {
						if ($sub.dataSM('parent-a').attr('data-type') != 'title')
							$sub.dataSM('parent-a').addClass('highlighted');
					}
					// min/max-width fix - no way to rely purely on CSS as all UL's are nested
					if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
						if (!IElt8) {
							$sub.css({ width: ($sub.hasClass('mega-menu-inner')) ? $('.box-container').outerWidth() + 'px' : 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
							if (this.opts.subMenusMinWidth) {
							 	$sub.css('min-width', this.opts.subMenusMinWidth);
							}
							if (this.opts.subMenusMaxWidth) {
							 	var noMaxWidth = this.getWidth($sub);
							 	if ( ! $sub.hasClass('mega-menu-inner') ) {
								 	$sub.css('max-width', this.opts.subMenusMaxWidth);
							 	}
								if (noMaxWidth > this.getWidth($sub)) {
									$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
								}
							}
						// IE6,7
 						} else {
							$sub.children().css('styleFloat', 'none');
							if (IE6) {
								$sub.width(this.opts.subMenusMinWidth ? this.opts.subMenusMinWidth : 1)
									.children().children('a').css('white-space', 'nowrap');
							} else { // IE7
								$sub.css({ width: ($sub.hasClass('mega-menu-inner')) ? $('.box-container').outerWidth() + 'px' : 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
								if (this.opts.subMenusMinWidth) {
									$sub.css('min-width', this.opts.subMenusMinWidth);
								}
							}
							if (this.opts.subMenusMaxWidth) {
								var noMaxWidth = $sub.width();
								if (IE6) {
							 		var maxWidth = $sub.css({ width: this.opts.subMenusMaxWidth, overflowX: 'hidden', overflowY: 'hidden' }).width();
									if (noMaxWidth > maxWidth) {
										$sub.css({ width: maxWidth, overflowX: 'visible', overflowY: 'visible' }).children().children('a').css('white-space', '');
									} else {
										$sub.css({ width: noMaxWidth, overflowX: 'visible', overflowY: 'visible' });
									}
								} else { // IE7
								 	if ( ! $sub.hasClass('mega-menu-inner') ) {
									 	$sub.css('max-width', this.opts.subMenusMaxWidth);
								 	}
									if (noMaxWidth > $sub.width()) {
										$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
									} else {
										$sub.width(noMaxWidth);
									}
								}
							} else {
							 	$sub.width($sub.width());
							}
							$sub.children().css('styleFloat', 'left');
						}
					}
					this.menuPosition($sub);
					// insert IE iframe shim
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').insertBefore($sub);
					}
					var complete };
					// if sub is collapsible (mobile view)
					if (this.isCollapsible()) {
						if (this.opts.collapsibleShowFunction) {
							this.opts.collapsibleShowFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.collapsibleShowDuration, complete);
						}
					} else {
						if (this.opts.showFunction) {
							this.opts.showFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.showDuration, complete);
						}
					}
					// save new sub menu for this level
					this.visibleSubMenus[$sub.dataSM('level') - 1] = $sub;
					this.$root.triggerHandler('show.smapi', $sub[0]);
				}
			},
			popupHide},
			popupShow: function(left, top) {
				if (!this.opts.isPopup) {
					alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				this.menuFixLayout(this.$root);
				this.$root.stop(true, true);
				if (!this.$root.is(':visible')) {
					this.$root.css({ left: left, top: top });
					// IE iframe shim
					this.menuIframeShim(this.$root);
					if (this.$root.dataSM('ie-shim')) {
						this.$root.dataSM('ie-shim').css({ zIndex: this.$root.css('z-index'), width: this.getWidth(this.$root), height: this.getHeight(this.$root), left: left, top: top }).insertBefore(this.$root);
					}
					// show menu
					if (this.opts.showFunction) {
						this.opts.showFunction.call(this, this.$root);
					} else {
						this.$root.show(this.opts.showDuration);
					}
					this.visibleSubMenus[0] = this.$root;
				}
			},
			refresh: function() {
				this.menuHideAll();
				this.$root.find('ul').each(function() {
						var $this = $(this);
						if ($this.dataSM('scroll-arrows')) {
							$this.dataSM('scroll-arrows').remove();
						}
					})
					.removeDataSM('in-mega')
					.removeDataSM('shown-before')
					.removeDataSM('ie-shim')
					.removeDataSM('scroll-arrows')
					.removeDataSM('parent-a')
					.removeDataSM('level')
					.removeDataSM('beforefirstshowfired');
				this.$root.find('a.has-submenu').removeClass('has-submenu')
					.parent().removeDataSM('sub');
				if (this.opts.subIndicators) {
					this.$root.find('span.sub-arrow').remove();
				}
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.subMenus = [];
				this.init(true);
			},
			rootOut},
			rootOver},
			winResize: function(e) {
				if (!this.handleEvents()) {
					// we still need to resize the disable overlay if it's visible
					if (this.$disableOverlay) {
						var pos = this.$root.offset();
	 					this.$disableOverlay.css({
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight()
						});
					}
					return;
				}
				// hide sub menus on resize - on mobile do it only on orientation change
				if (!this.isCollapsible() && (!('onorientationchange' in window) || e.type == 'orientationchange')) {
					if (this.activatedItems.length) {
						this.activatedItems[this.activatedItems.length - 1][0].blur();
					}
					this.menuHideAll();
				}
			}
		}
	});

	$.fn.dataSM }

	$.fn.removeDataSM }

	$.fn.smartmenus }

	// default settings
	$.fn.smartmenus.defaults = {
		isPopup:		false,		// is this a popup menu (can be shown via the popupShow/popupHide methods) or a permanent menu bar
		mainMenuSubOffsetX:	0,		// pixels offset from default position
		mainMenuSubOffsetY:	0,		// pixels offset from default position
		subMenusSubOffsetX:	0,		// pixels offset from default position
		subMenusSubOffsetY:	0,		// pixels offset from default position
		subMenusMinWidth:	false, //'10em',		// min-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subMenusMaxWidth:	false, //'20em',		// max-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subIndicators: 		true,		// create sub menu indicators - creates a SPAN and inserts it in the A
		subIndicatorsPos: 	'prepend',	// position of the SPAN relative to the menu item content ('prepend', 'append')
		subIndicatorsText:	'+',		// [optionally] add text in the SPAN (e.g. '+') (you may want to check the CSS for the sub indicators too)
		scrollStep: 		30,		// pixels step when scrolling long sub menus that do not fit in the viewport height
		scrollInterval:		30,		// interval between each scrolling step
		scrollAccelerate:	true,		// accelerate scrolling or use a fixed step
		showTimeout:		250,		// timeout before showing the sub menus
		hideTimeout:		500,		// timeout before hiding the sub menus
		showDuration:		0,		// duration for show animation - set to 0 for no animation - matters only if showFunction:null
		showFunction:		null,		// custom function to use when showing a sub menu (the default is the jQuery 'show')
							// don't forget to call complete() at the end of whatever you do
							// e.g.: function($ul, complete) { $ul.fadeIn(250, complete); }
		hideDuration:		0,		// duration for hide animation - set to 0 for no animation - matters only if hideFunction:null
		hideFunction:},	// custom function to use when hiding a sub menu (the default is the jQuery 'hide')
							// don't forget to call complete() at the end of whatever you do
							// e.g.: function($ul, complete) { $ul.fadeOut(250, complete); }
		collapsibleShowDuration:0,		// duration for show animation for collapsible sub menus - matters only if collapsibleShowFunction:null
		collapsibleShowFunction:function($ul, complete) { $ul.slideDown(200, complete); },	// custom function to use when showing a collapsible sub menu
							// (i.e. when mobile styles are used to make the sub menus collapsible)
		collapsibleHideDuration:0,		// duration for hide animation for collapsible sub menus - matters only if collapsibleHideFunction:null
		collapsibleHideFunction:function($ul, complete) { $ul.slideUp(200, complete); },	// custom function to use when hiding a collapsible sub menu
							// (i.e. when mobile styles are used to make the sub menus collapsible)
		showOnClick:		false,		// show the first-level sub menus onclick instead of onmouseover (matters only for mouse input)
		hideOnClick:		true,		// hide the sub menus on click/tap anywhere on the page
		keepInViewport:		true,		// reposition the sub menus if needed to make sure they always appear inside the viewport
		keepHighlighted:	true,		// keep all ancestor items of the current sub menu highlighted (adds the 'highlighted' class to the A's)
		markCurrentItem:	false,		// automatically add the 'current' class to the A element of the item linking to the current URL
		markCurrentTree:	true,		// add the 'current' class also to the A elements of all ancestor items of the current item
		rightToLeftSubMenus:	false,		// right to left display of the sub menus (check the CSS for the sub indicators' position)
		bottomToTopSubMenus:	false,		// bottom to top display of the sub menus
		overlapControlsInIE:	true		// make sure sub menus appear on top of special OS controls in IE (i.e. SELECT, OBJECT, EMBED, etc.)
	};

})(jQuery);
/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery.easing/master/LICENSE
*/

/* globals jQuery, define, module, require */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(['jquery'], function ($) {
			return factory($);
		});
	} else if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function($){

	// Preserve the original jQuery "swing" easing as "jswing"
	if (typeof $.easing !== 'undefined') {
		$.easing['jswing'] = $.easing['swing'];
	}

	var pow = Math.pow,
		sqrt = Math.sqrt,
		sin = Math.sin,
		cos = Math.cos,
		PI = Math.PI,
		c1 = 1.70158,
		c2 = c1 * 1.525,
		c3 = c1 + 1,
		c4 = ( 2 * PI ) / 3,
		c5 = ( 2 * PI ) / 4.5;

	// x is the fraction of animation progress, in the range 0..	}

	$.extend( $.easing, {
		def: 'easeOutQuad',
		swin	},
		easeInQua	},
		easeOutQua	},
		easeInOutQua	},
		easeInCubi	},
		easeOutCubic: function (x) {
			return 1 - pow( 1 - x, 3 );
		},
		easeInOutCubi	},
		easeInQuar	},
		easeOutQuart: function (x) {
			return 1 - pow( 1 - x, 4 );
		},
		easeInOutQuar	},
		easeInQuin	},
		easeOutQuin	},
		easeInOutQuin	},
		easeInSin	},
		easeOutSin	},
		easeInOutSin	},
		easeInExp	},
		easeOutExp	},
		easeInOutExp	},
		easeInCir	},
		easeOutCir	},
		easeInOutCir	},
		easeInElasti	},
		easeOutElasti	},
		easeInOutElasti	},
		easeInBac	},
		easeOutBac	},
		easeInOutBac	},
		easeInBounce: function (x) {
			return 1 - bounceOut( 1 - x );
		},
		easeOutBounce: bounceOut,
		easeInOutBounc	}
	});
	return $;
});

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 *
})(jQuery);
/**
 * jQuery iLightBox - Revolutionary Lightbox Plugin
 * http://www.ilightbox.net/
 *
 * @version: 2.2.4 - October 14, 2017
 *
 * @author: iProDev (Hemn Chawroka)
 *          http://www.iprodev.com/
 *
 */
(function($, window, undefined) {

	var extensions = {
			flash: ['swf'],
			image: ['bmp', 'gif', 'jpeg', 'jpg', 'png', 'tiff', 'tif', 'jfif', 'jpe', 'webp'],
			iframe: ['asp', 'aspx', 'cgi', 'cfm', 'htm', 'html', 'jsp', 'php', 'pl', 'php3', 'php4', 'php5', 'phtml', 'rb', 'rhtml', 'shtml', 'txt'],
			video: ['avi', 'mov', 'mpg', 'mpeg', 'movie', 'mp4', 'webm', 'ogv', 'ogg', '3gp', 'm4v']
		},

		// Global DOM elements
		$win = $(window),
		$doc = $(document),

		// Support indicators
		browser,
		transform,
		gpuAcceleration,
		fullScreenApi = '',
		userAgent = navigator.userAgent || navigator.vendor || window.opera,
        supportTouch = "ontouchstart" in window || navigator.msMaxTouchPoints || (navigator.maxTouchPoints && navigator.userAgent.indexOf('Windows') > -1),
        ishybrid = navigator.maxTouchPoints && navigator.userAgent.indexOf('Windows') > -1,
        isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)),

		// Events
		clickEvent = ishybrid ? "itap.iLightBox click.iLightBox" : supportTouch ? "itap.iLightBox" : "click.iLightBox",
		touchStartEvent = ishybrid ? "touchstart.iLightBox mousedown.iLightBox" : supportTouch ? "touchstart.iLightBox" : "mousedown.iLightBox",
		touchStopEvent = ishybrid ? "touchend.iLightBox mouseup.iLightBox" : supportTouch ? "touchend.iLightBox" : "mouseup.iLightBox",
		touchMoveEvent = ishybrid ? "touchmove.iLightBox mousemove.iLightBox" : supportTouch ? "touchmove.iLightBox" : "mousemove.iLightBox",

		// Math shorthands
		abs = Math.abs,
		sqrt = Math.sqrt,
		round = Math.round,
		max = Math.max,
		min = Math.min,
		floor = Math.floor,
		random = Math.random,

		pluginspages = {
			quicktime: 'http://www.apple.com/quicktime/download',
			flash: 'http://www.adobe.com/go/getflash'
		},

		iLightBox = function(el, options, items, instant) {
			var iL = this;

			iL.options = options,
				iL.selector = options.selector || el,
				iL.context = document,
				iL.instant = instant;

			if (items.length < 1) iL.attachItems();
			else iL.items = items;

			iL.vars = {
				total: iL.items.length,
				start: 0,
				current: null,
				next: null,
				prev: null,
				BODY: $('body'),
				loadRequests: 0,
				overlay: $('<div class="ilightbox-overlay"></div>'),
				loader: $('<div class="ilightbox-loader"><div></div></div>'),
				toolbar: $('<div class="ilightbox-toolbar"></div>'),
				innerToolbar: $('<div class="ilightbox-inner-toolbar"></div>'),
				title: $('<div class="ilightbox-title"></div>'),
				closeButton: $('<a class="ilightbox-close" title="' + iL.options.text.close + '"></a>'),
				fullScreenButton: $('<a class="ilightbox-fullscreen" title="' + iL.options.text.enterFullscreen + '"></a>'),
				innerPlayButton: $('<a class="ilightbox-play" title="' + iL.options.text.slideShow + '"></a>'),
				innerNextButton: $('<a class="ilightbox-next-button" title="' + iL.options.text.next + '"></a>'),
				innerPrevButton: $('<a class="ilightbox-prev-button" title="' + iL.options.text.previous + '"></a>'),
				holder: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
				nextPhoto: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
				prevPhoto: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
				nextButton: $('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + iL.options.text.next + '"><span></span></a>'),
				prevButton: $('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + iL.options.text.previous + '"><span></span></a>'),
				thumbnails: $('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
				thumbs: false,
				nextLock: false,
				prevLock: false,
				hashLock: false,
				isMobile: false,
				mobileMaxWidth: 980,
				isInFullScreen: false,
				isSwipe: false,
				mouseID: 0,
				cycleID: 0,
				isPaused: 0,
				captionHeight: 39,
			};

			// Hideable elements with mousemove event
			iL.vars.hideableElements = iL.vars.nextButton.add(iL.vars.prevButton);

			iL.normalizeItems();

			//Check necessary plugins
			iL.availPlugins();

			//Set startFrom
			iL.options.startFrom = (iL.options.startFrom > 0 && iL.options.startFrom >= iL.vars.total) ? iL.vars.total - 1 : iL.options.startFrom;

			//If randomStart
			iL.options.startFrom = (iL.options.randomStart) ? floor(random() * iL.vars.total) : iL.options.startFrom;
			iL.vars.start = iL.options.startFrom;

			if (instant) iL.instantCall();
			else iL.patchItemsEvents();

			if (iL.options.linkId) {
				iL.hashChangeHandler();
				$win.iLightBoxHashChange(function() {
					iL.hashChangeHandler();
				});
			}

			if (supportTouch) {
				var RegExp = /(click|mouseenter|mouseleave|mouseover|mouseout)/ig,
					replace = "itap";
				iL.options.caption.show = iL.options.caption.show.replace(RegExp, replace),
					iL.options.caption.hide = iL.options.caption.hide.replace(RegExp, replace),
					iL.options.social.show = iL.options.social.show.replace(RegExp, replace),
					iL.options.social.hide = iL.options.social.hide.replace(RegExp, replace);
			}

			if (iL.options.controls.arrows || $(window).width() < UNCODE.mediaQuery) {
				$.extend(iL.options.styles, {
					nextOffsetX: ($(window).width() > UNCODE.mediaQuery) ? 36 : 4,
					prevOffsetX: ($(window).width() > UNCODE.mediaQuery) ? 36 : 4,
					nextOpacity: 0,
					prevOpacity: 0
				});
			}
		};

	//iLightBox helpers
	iLightBox.prototype = {
		showLoade	},

		hideLoade	},

		createU	},

		attachItems: function() {
			var iL = this,
				itemsObject = new Array(),
				items = new Array();

			$(iL.selector, iL.context).each(function() {
				var t = $(this),
					URL = t.attr(iL.options.attr) || null,
					options = t.data("options") && eval("({" + t.data("options") + "})") || {},
					caption = t.data('caption'),
					title = t.data('title'),
					type = t.data('type') || getTypeByExtension(URL),
					clone = t.data('lbox-clone') || false;

				//Uncode addition ##START##
				if (type === false) {
					return;
				}
				//Uncode addition ##END##

				if (t.data('lbox-clone') != undefined) return;

				//Uncode addition ##START##
				if ( typeof t.attr('data-album') != 'undefined' && t.attr('data-album') != '' ) {
					var ALBUM_URLS = JSON.parse(t.attr('data-album')),
						URL_i,
						URLS_LENGHT = ALBUM_URLS.length;

					for (URL_i = 0; URL_i < URLS_LENGHT; URL_i++) {
						if ( typeof ALBUM_URLS[URL_i].url !== 'undefined' && ALBUM_URLS[URL_i].url != '' ) {
							var item_opts = 'width:' + ALBUM_URLS[URL_i].width + ',height:' + ALBUM_URLS[URL_i].height + ',thumbnail: \'' + ALBUM_URLS[URL_i].thumbnail + '\'';
							item_opts = item_opts && eval("({" + item_opts + "})") || {},
							items.push({
								URL: ALBUM_URLS[URL_i].url,
								caption: ALBUM_URLS[URL_i].caption,
								title: ALBUM_URLS[URL_i].title,
								type: getTypeByExtension(ALBUM_URLS[URL_i].url),
								options: item_opts,
								clone: clone
							});
							var newT = t;
							newT.attr('href',ALBUM_URLS[URL_i].url);
							if (!iL.instant) itemsObject.push(newT);
						}
					}
				} else {
				//Uncode addition ##END##
					items.push({
						URL: URL,
						caption: caption,
						title: title,
						type: type,
						options: options,
						clone: clone
					});
				}


				if (iL.vars != undefined) iL.vars.total = items.length;

				if (!iL.instant) itemsObject.push(t);
			});

			iL.items = items,
				iL.itemsObject = itemsObject;

		},

		normalizeItems: function() {
			var iL = this,
				newItems = new Array();

			$.each(iL.items, function(key, val) {

				if (typeof val == "string") val = {
					url: val
				};

				var URL = val.url || val.URL || null,
					options = val.options || {},
					caption = val.caption || null,
					title = val.title || null,
					type = (val.type) ? val.type.toLowerCase() : getTypeByExtension(URL),
					ext = (typeof URL != 'object') ? getExtension(URL) : '';

				options.thumbnail = options.thumbnail || ((type == "image") ? URL : null),
				options.videoType = options.videoType || null,
				options.skin = options.skin || iL.options.skin,
				options.width = options.width || null,
				options.height = options.height || null,
				options.mousewheel = (typeof options.mousewheel != 'undefined') ? options.mousewheel : true,
				options.swipe = (typeof options.swipe != 'undefined') ? options.swipe : true,
				options.social = (typeof options.social != 'undefined') ? options.social : iL.options.social.buttons && $.extend({}, {}, iL.options.social.buttons);

				if (type == "video") {
					options.html5video = (typeof options.html5video != 'undefined') ? options.html5video : {};

					options.html5video.webm = options.html5video.webm || options.html5video.WEBM || null;
					options.html5video.controls = (typeof options.html5video.controls != 'undefined') ? options.html5video.controls : "controls";
					options.html5video.preload = options.html5video.preload || "metadata";
					options.html5video.autoplay = (typeof options.html5video.autoplay != 'undefined') ? options.html5video.autoplay : false;
					//UNCODE addition
					options.html5video.loop = (typeof options.html5video.loop != 'undefined') ? options.html5video.loop : false;
				}

				if (!options.width || !options.height) {
					if (type == "video") options.width = 1280, options.height = 720;
					else if (type == "iframe") options.width = '100%', options.height = '90%';
					else if (type == "flash") options.width = 1280, options.height = 720;
				}

				delete val.url;
				val.index = key;
				val.URL = URL;
				val.caption = caption;
				val.title = title;
				val.type = type;
				val.options = options;
				val.ext = ext;

				newItems.push(val);
			});

			iL.items = newItems;
		},

		instantCal	},

		addContents: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				viewport = getViewport(),
				path = opts.path.toLowerCase(),
				recognizingItems = vars.total > 0 && iL.items.filt	}),
				needRecognition = recognizingItems.length > 0;

			if (opts.mobileOptimizer && !opts.innerToolbar)
				vars.isMobile = viewport.width <= vars.mobileMaxWidth;

			vars.overlay.addClass(opts.skin).hide().css('opacity', opts.overlay.opacity);

			if (opts.linkId)
				vars.overlay[0].setAttribute('linkid', opts.linkId);

			//Add Toolbar Buttons
			if (opts.controls.toolbar) {
				vars.toolbar.addClass(opts.skin).append(vars.closeButton);
				if (opts.controls.fullscreen)
					vars.toolbar.append(vars.fullScreenButton);
				if (opts.controls.slideshow)
					vars.toolbar.append(vars.innerPlayButton);
				if (vars.total > 1)
					vars.toolbar.append(vars.innerPrevButton).append(vars.innerNextButton);
			}

			//Append elements to body
			vars.BODY.addClass('ilightbox-noscroll').append(vars.overlay).append(vars.loader).append(vars.holder).append(vars.nextPhoto).append(vars.prevPhoto);

			if (!opts.innerToolbar)
				vars.BODY.append(vars.toolbar);
			if (opts.controls.arrows)
				vars.BODY.append(vars.nextButton).append(vars.prevButton);

			if (opts.controls.thumbnail && vars.total > 1) {
				vars.BODY.append(vars.thumbnails);
				vars.thumbnails.addClass(opts.skin).addClass('ilightbox-' + path);
				$('div.ilightbox-thumbnails-grid', vars.thumbnails).empty();
				vars.thumbs = true;
			}

			//Configure loader and arrows
			var loaderCss = (opts.path.toLowerCase() == "horizontal") ? {
				left: parseInt((viewport.width / 2) - (vars.loader.outerWidth() / 2))
			} : {
				top: parseInt((viewport.height / 2) - (vars.loader.outerHeight() / 2))
			};
			vars.loader.addClass(opts.skin).css(loaderCss);
			vars.nextButton.add(vars.prevButton).addClass(opts.skin);
			if (path == "horizontal")
				vars.loader.add(vars.nextButton).add(vars.prevButton).addClass('horizontal');

			// Configure arrow buttons
			vars.BODY[vars.isMobile ? 'addClass' : 'removeClass']('isMobile');

			if (!opts.infinite) {
				vars.prevButton.add(vars.prevButton).add(vars.innerPrevButton).add(vars.innerNextButton).removeClass('disabled');

				if (vars.current == 0)
					vars.prevButton.add(vars.innerPrevButton).addClass('disabled');
				if (vars.current >= vars.total - 1)
					vars.nextButton.add(vars.innerNextButton).addClass('disabled');
			}

			if (opts.show.effect) {
				vars.overlay.stop().fadeIn(opts.show.speed);
				vars.toolbar.stop().fadeIn(opts.show.speed);
			} else {
				vars.overlay.show();
				vars.toolbar.show();
			}

			var length = recognizingItems.length;
			if (needRecognition) {
				iL.showLoader();

				$.each(recognizingItems, function(key, val) {
					var resultFnc = function(result) {
							var key = -1,
								filter = iL.items.filt	}),
								self = iL.items[key];

							if (result)
								$.extend(true, self, {
									URL: result.source,
									type: result.type,
									recognized: true,
									options: {
										html5video: result.html5video,
										width: (result.type == "image") ? 0 : (result.width || self.width),
										height: (result.type == "image") ? 0 : (result.height || self.height),
										thumbnail: self.options.thumbnail || result.thumbnail
									}
								});

							length--;

							if (length == 0) {
								iL.hideLoader();

								vars.dontGenerateThumbs = false;
								iL.generateThumbnails();

								if (opts.show.effect)
									setTimeout(function() {
										iL.generateBoxes();
									}, opts.show.speed);
								else
									iL.generateBoxes();
							}
						};

					iL.ogpRecognition(this, resultFnc);
				});
			}
			else {
				if (opts.show.effect)
					setTimeout(function() {
						iL.generateBoxes();
					}, opts.show.speed);
				else
					iL.generateBoxes();
			}

			iL.createUI();

			window.iLightBox = {
				close: function() {
					iL.closeAction();
				},
				fullscreen: function() {
					iL.fullScreenAction();
				},
				moveNext: function() {
					iL.moveTo('next');
				},
				movePrev: function() {
					iL.moveTo('prev');
				},
				goTo: function(index) {
					iL.goTo(index);
				},
				refresh: function() {
					iL.refresh();
				},
				reposition: function() {
					(arguments.length > 0) ? iL.repositionPhoto(true): iL.repositionPhoto();
				},
				setOption: function(options) {
					iL.setOption(options);
				},
				destroy: function() {
					iL.closeAction();
					iL.dispatchItemsEvents();
				}
			};

			if (opts.linkId) {
				vars.hashLock = true;
				window.location.hash = opts.linkId + '/' + vars.current;
				setTimeout(function() {
					vars.hashLock = false;
				}, 55);
			}

			if (!opts.slideshow.startPaused) {
				iL.resume();
				vars.innerPlayButton.removeClass('ilightbox-play').addClass('ilightbox-pause');
			}

			//Trigger the onOpen callback
			if (typeof iL.options.callback.onOpen == 'function') iL.options.callback.onOpen.call(iL);
		},

		loadContent: function(obj, opt, speed) {
			var iL = this,
				holder, item;

			iL.createUI();

			obj.speed = speed || iL.options.effects.loadedFadeSpeed;

			if (opt == 'current') {
				if (!obj.options.mousewheel) iL.vars.lockWheel = true;
				else iL.vars.lockWheel = false;

				if (!obj.options.swipe) iL.vars.lockSwipe = true;
				else iL.vars.lockSwipe = false;
			}

			switch (opt) {
				case 'current':
					holder = iL.vars.holder, item = iL.vars.current;
					break;
				case 'next':
					holder = iL.vars.nextPhoto, item = iL.vars.next;
					break;
				case 'prev':
					holder = iL.vars.prevPhoto, item = iL.vars.prev;
					break;
			}

			holder.removeAttr('style class').addClass('ilightbox-holder' + (supportTouch ? ' supportTouch' : '')).addClass(obj.options.skin);
			$('div.ilightbox-inner-toolbar', holder).remove();

			if (obj.title || iL.options.innerToolbar) {
				var innerToolbar = iL.vars.innerToolbar.clone();
				if (obj.title && iL.options.show.title) {
					var title = iL.vars.title.clone();
					title.empty().html(obj.title);
					innerToolbar.append(title);
				}
				if (iL.options.innerToolbar) {
					innerToolbar.append((iL.vars.total > 1) ? iL.vars.toolbar.clone() : iL.vars.toolbar);
				}
				holder.prepend(innerToolbar);
			}

			//console.warn('loadContent', arguments);

			iL.loadSwitcher(obj, holder, item, opt);
		},

		loadSwitche	},

		configureHolde	},

		generateBoxes: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options;

			if (opts.infinite && vars.total >= 3) {
				if (vars.current == vars.total - 1) vars.next = 0;
				if (vars.current == 0) vars.prev = vars.total - 1;
			} else opts.infinite = false;

			//UNCODE addition
			if ( typeof iL.items[vars.current] == 'undefined' )
				vars.current = 0;

			iL.loadContent(iL.items[vars.current], 'current', opts.show.speed);

			if (iL.items[vars.next]) iL.loadContent(iL.items[vars.next], 'next', opts.show.speed);
			if (iL.items[vars.prev]) iL.loadContent(iL.items[vars.prev], 'prev', opts.show.speed);
		},

		generateThumbnail	},

		positionThumbnail	},

		loadImag	},

		patchItemsEvents: function() {
			var iL = this,
				vars = iL.vars,
				clickEvent = ishybrid ? "itap.iL click.iL" : supportTouch ? "itap.iL" : "click.iL",
				vEvent = ishybrid ? "click.iL itap.iL" : supportTouch ? "click.iL" : "itap.iL";

			if (iL.context && iL.selector) {
				var $items = $(iL.selector, iL.context);

				$(iL.context).on(clickEvent, iL.selector, function() {
					var $this = $(this),
						//UNCODE addition
						key = typeof $(this).data('lb-index') !== '' && $(this).closest('.owl-item').length ? $(this).data('lb-index') : $items.index($this);
					if (UNCODE.isMobile) {
						var isCarousel = $this.closest('.owl-carousel');
						if (isCarousel.length) {
							if (isCarousel.hasClass('owl-translating')) return false;
						}
					}

					vars.current = key;
					vars.next = iL.items[key + 1] ? key + 1 : null;
					vars.prev = iL.items[key - 1] ? key - 1 : null;

					//UNCODE addition
					if ( vars.BODY.hasClass('fp-slide-scrolling') )
						return false;

					iL.addContents();
					iL.patchEvents();

					return false;
				}).on(vEvent, iL.selector, function() {
					return false;
				});
			} else
				$.each(iL.itemsObjec	});
		},

		dispatchItemsEvent	},

		refres	},

		patchEvents: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				holders = $('.ilightbox-holder'),
				fullscreenEvent = fullScreenApi.fullScreenEventName + '.iLightBox',
				durationThreshold = 1000,
				horizontalDistanceThreshold =
				verticalDistanceThreshold = 100,
				buttonsArray = [vars.nextButton[0], vars.prevButton[0], vars.nextButton[0].firstChild, vars.prevButton[0].firstChild];

			$win.bind('resize.iLightBox	}).bind('keydown.iLightBox	});

			if (fullScreenApi.supportsFullScreen) $win.bind(fullscreenEvent, function() {
				iL.doFullscreen();
			});

			var holderEventsArr = [opts.caption.show + '.iLightBox', opts.caption.hide + '.iLightBox', opts.social.show + '.iLightBox', opts.social.hide + '.iLightBox'].filt	}),
				holderEvents = "";

			$.each(holderEventsAr	});

			$doc.on(clickEvent, '.ilightbox-overlay	}).on(clickEvent, '.ilightbox-next, .ilightbox-next-button', function() {
				iL.moveTo('next');
			}).on(clickEvent, '.ilightbox-prev, .ilightbox-prev-button', function() {
				iL.moveTo('prev');
			}).on(clickEvent, '.ilightbox-thumbnail	}).on(holderEvents, '.ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)	}).on('mouseenter.iLightBox mouseleave.iLightBox', '.ilightbox-wrapper	}).on(clickEvent, '.ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause	}).on(touchMoveEvent, '.ilightbox-overlay, .ilightbox-thumbnails-container', function(e) {
				// prevent scrolling
				e.preventDefault();
			});

	}

			if (opts.controls.arrows && !supportTouch) $doc.on('mousemove.iLightBox', mouseMoveHandler);

			if (opts.controls.slideshow && opts.slideshow.pauseOnHover) $doc.on('mouseenter.iLightBox mouseleave.iLightBox', '.ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)	});

			var switchers = $('.ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails'),
				delay = false;

			if (opts.controls.mousewheel) switchers.on('mousewheel.iLightBox', function(event, delta) {
				event.preventDefault();
				if (delay) return;
				delay = true;
				if (!vars.lockWheel) {
					event.preventDefault();
					if (delta < 0) {
						iL.moveTo('next');
					} else if (delta > 0) {
						iL.moveTo('prev');
					}
				}
				setTimeout(function(){
					delay = false;
				}, 2000);
			});

			if (opts.controls.swipe) holders.on(touchStartEven	});

		},

		goT	},

		moveTo: function(side) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				viewport = getViewport(),
				switchSpeed = opts.effects.switchSpeed;

			if (vars.nextLock || vars.prevLock) return false;
			else {

				var item = (side == "next") ? vars.next : vars.prev;

				if (opts.linkId) {
					vars.hashLock = true;
					window.location.hash = opts.linkId + '/' + item;
				}

				if (side == "next") {
					if (!iL.items[item]) return false;
					var firstHolder = vars.nextPhoto,
						secondHolder = vars.holder,
						lastHolder = vars.prevPhoto,
						firstClass = 'ilightbox-prev',
						secondClass = 'ilightbox-next';
				} else if (side == "prev") {
					if (!iL.items[item]) return false;
					var firstHolder = vars.prevPhoto,
						secondHolder = vars.holder,
						lastHolder = vars.nextPhoto,
						firstClass = 'ilightbox-next',
						secondClass = 'ilightbox-prev';
				}

				//Trigger the onBeforeChange callback
				if (typeof opts.callback.onBeforeChange == 'function')
					opts.callback.onBeforeChange.call(iL, iL.ui);

				(side == "next") ? vars.nextLock = true: vars.prevLock = true;

				var captionFirst = $('div.ilightbox-caption', secondHolder),
					socialFirst = $('div.ilightbox-social', secondHolder);

				if (captionFirst.length)
					captionFirst.stop().fadeOut(switchSpeed, function() {
						$(this).remove();
					});
				if (socialFirst.length)
					socialFirst.stop().fadeOut(switchSpeed, function() {
						$(this).remove();
					});

				if (iL.items[item].caption) {
					iL.setCaption(iL.items[item], firstHolder);
					var caption = $('div.ilightbox-caption', firstHolder),
						percent = parseInt((caption.outerHeight() / firstHolder.outerHeight()) * 100);
					if (opts.caption.start && percent <= 50) caption.fadeIn(switchSpeed);
				}

				var social = iL.items[item].options.social;
				if (social) {
					iL.setSocial(social, iL.items[item].URL, firstHolder);
					if (opts.social.start) $('div.ilightbox-social', firstHolder).fadeIn(opts.effects.fadeSpeed);
				}

				$.each([firstHolder, secondHolder, lastHolder], function(key, val) {
					val.removeClass('ilightbox-next ilightbox-prev');
				});

				var firstOffset = firstHolder.data('offset'),
					winW = (viewport.width - (opts.styles.pageOffsetX)),
					winH = (viewport.height - (opts.styles.pageOffsetY)),
					width = firstOffset.newDims.width,
					height = firstOffset.newDims.height,
					thumbsOffset = firstOffset.thumbsOffset,
					diff = firstOffset.diff,
					top = parseInt((winH / 2) - (height / 2) - diff.H - (thumbsOffset.H / 2)),
					left = parseInt((winW / 2) - (width / 2) - diff.W - (thumbsOffset.W / 2));

				var secondOffset = secondHolder.data('offset'),
					object = secondOffset.object;

				/*if (object.item.caption && !isNaN(width) && !isNaN(height) && UNCODE.wwidth > UNCODE.mediaQuery) {
					var objRatio = width / height;
					height = height - vars.captionHeight;
					width = height * objRatio;
					top = path == 'horizontal' ? parseInt((winH / 2) - (height / 2) - diff.H - (thumbsOffset.H / 2)) : top,
					left = parseInt((winW / 2) - (width / 2) - diff.W - (thumbsOffset.W / 2));
				}*/

				firstHolder.show().css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: 1
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', function() {
					firstHolder.css(transform, '');
				});

				$('div.ilightbox-container', firstHolder).animate({
					width: width,
					height: height
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc');

				diff = secondOffset.diff;

				width = secondOffset.newDims.width,
					height = secondOffset.newDims.height;

				width = parseInt(width * opts.styles[side == 'next' ? 'prevScale' : 'nextScale']),
					height = parseInt(height * opts.styles[side == 'next' ? 'prevScale' : 'nextScale']),
					top = (path == 'horizontal') ? parseInt((winH / 2) - object.offsetY - (height / 2) - diff.H - (thumbsOffset.H / 2)) : parseInt(winH - object.offsetX - diff.H - (thumbsOffset.H / 2));

				if (side == 'prev')
					left = (path == 'horizontal') ? parseInt(winW - object.offsetX - diff.W - (thumbsOffset.W / 2)) : parseInt((winW / 2) - (width / 2) - diff.W - object.offsetY - (thumbsOffset.W / 2));
				else {
					top = (path == 'horizontal') ? top : parseInt(object.offsetX - diff.H - height - (thumbsOffset.H / 2)),
					left = (path == 'horizontal') ? parseInt(object.offsetX - diff.W - width - (thumbsOffset.W / 2)) : parseInt((winW / 2) - object.offsetY - (width / 2) - diff.W - (thumbsOffset.W / 2));
				}

				/*if (object.item.caption && !isNaN(width) && !isNaN(height) && UNCODE.wwidth > UNCODE.mediaQuery) {
					var objRatio = width / height;
					height = height - vars.captionHeight;
					width = height * objRatio;
					top = path == 'horizontal' ? parseInt((winH / 2) - (height / 2) - diff.H - (thumbsOffset.H / 2)) : top;
				}*/

				$('div.ilightbox-container', secondHolder).animate({
					width: width,
					height: height
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc');

				secondHolder.addClass(firstClass).css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: opts.styles.prevOpacity,
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc	});

				top = (path == 'horizontal') ? getPixel(lastHolder, 'top') : ((side == "next") ? parseInt(-(winH / 2) - lastHolder.outerHeight()) : parseInt(top * 2)),
					left = (path == 'horizontal') ? ((side == "next") ? parseInt(-(winW / 2) - lastHolder.outerWidth()) : parseInt(left * 2)) : getPixel(lastHolder, 'left');

				lastHolder.css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: opts.styles.nextOpacity
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', function() {
					lastHolder.css(transform, '');
				}).addClass(secondClass);
			}
		},

		setCaptio	},

		normalizeSocial: function(obj, url) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				baseURL = window.location.href;

			$.each(obj, function(key, value) {
				if (!value)
					return true;

				var item = key.toLowerCase(),
					source, text;

				switch (item) {
					case 'facebook':
						source = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}",
							text = "Share on Facebook";
						break;
					case 'twitter':
						source = "http://twitter.com/home?status={URL}",
							text = "Share on Twitter";
						break;
					case 'digg':
						source = "http://digg.com/submit?phase=2&url={URL}",
							text = "Share on Digg";
						break;
					case 'reddit':
						source = "http://reddit.com/submit?url={URL}",
							text = "Share on reddit";
						break;
				}

				obj[key] = {
					URL: value.URL && absolutizeURI(baseURL, value.URL) || opts.linkId && window.location.href || typeof url !== 'string' && baseURL || url && absolutizeURI(baseURL, url) || baseURL,
					source: value.source || source || value.URL && absolutizeURI(baseURL, value.URL) || url && absolutizeURI(baseURL, url),
					text: value.text || text || "Share on " + key,
					width: (typeof(value.width) != 'undefined' && !isNaN(value.width)) ? parseInt(value.width) : 640,
					height: value.height || 360
				};

			});

			return obj;
		},

		setSocial: function(obj, url, target) {
			var iL = this,
				socialBar = $('<div class="ilightbox-social"></div>'),
				buttons = '<ul>';

			obj = iL.normalizeSocial(obj, url);

			$.each(obj, function(key, value) {
				var item = key.toLowerCase(),
					source = value.source.replace(/\{URL\}/g, encodeURIComponent(value.URL).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+'));
				buttons += '<li class="' + key + '"><a href="' + source + '" onclick="javascript:window.open(this.href' + ((value.width <= 0 || value.height <= 0) ? '' : ', \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=' + value.height + ',width=' + value.width + ',left=40,top=40\'') + ');return false;" title="' + value.text + '" target="_blank"></a></li>';
			});

			buttons += '</ul>';

			socialBar.html(buttons);
			$('div.ilightbox-container', target).append(socialBar);
		},

		fullScreenActio	},

		doFullscree	},

		closeAction: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options;

			$win.unbind('.iLightBox');
			$doc.off('.iLightBox');

			if (vars.isInFullScreen) fullScreenApi.cancelFullScreen(document.documentElement);

			$('.ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails').off('.iLightBox');

			if (opts.hide.effect) vars.overlay.stop().fadeOut(opts.hide.spee	});
			else {
				vars.overlay.remove();
				vars.BODY.removeClass('ilightbox-noscroll').off('.iLightBox');
			}

			var fadeOuts = [vars.toolbar, vars.holder, vars.nextPhoto, vars.prevPhoto, vars.nextButton, vars.prevButton, vars.loader, vars.thumbnails];

			$.each(fadeOut	});

			vars.dontGenerateThumbs = vars.isInFullScreen = false;

			window.iLightBox = null;

			if (opts.linkId) {
				vars.hashLock = true;
				removeHash();
				setTimeo	}, 55);
			}

			vars.nextButton.add(vars.prevButton).add(vars.innerPrevButton).add(vars.innerNextButton).removeClass('disabled');

			//Trigger the onHide callback
			if (typeof opts.callback.onHide == 'function') opts.callback.onHide.call(iL, iL.ui);
		},

		repositionPhoto: function() {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				viewport = getViewport(),
				winWidth = viewport.width,
				winHeight = viewport.height;

			if (viewport.width < UNCODE.mediaQuery) opts.styles.nextOffsetX = 0;

			var thumbsOffsetW = (vars.isInFullScreen && opts.fullAlone || vars.isMobile) ? 0 : ((path == 'horizontal') ? 0 : vars.thumbnails.outerWidth()),
				thumbsOffsetH = vars.isMobile ? vars.toolbar.outerHeight() : ((vars.isInFullScreen && opts.fullAlone) ? 0 : ((path == 'horizontal') ? vars.thumbnails.outerHeight() : 0)),
				width = (vars.isInFullScreen && opts.fullAlone) ? winWidth : (winWidth - (opts.styles.pageOffsetX)),
				height = (vars.isInFullScreen && opts.fullAlone) ? winHeight : (winHeight - (opts.styles.pageOffsetY)),
				offsetW = (path == 'horizontal') ? parseInt((iL.items[vars.next] || iL.items[vars.prev]) ? ((opts.styles.nextOffsetX + opts.styles.prevOffsetX)) * 2 : (((width / 10) <= 30) ? 30 : (width / 10))) : parseInt(((width / 10) <= 30) ? 30 : (width / 10)) + thumbsOffsetW,
				offsetH = (path == 'horizontal') ? parseInt(((height / 10) <= 30) ? 30 : (height / 10)) + thumbsOffsetH : parseInt((iL.items[vars.next] || iL.items[vars.prev]) ? ((opts.styles.nextOffsetX + opts.styles.prevOffsetX)) * 2 : (((height / 10) <= 30) ? 30 : (height / 10)));

			var elObject = {
				type: 'current',
				width: width,
				height: height,
				item: iL.items[vars.current],
				offsetW: offsetW,
				offsetH: offsetH,
				thumbsOffsetW: thumbsOffsetW,
				thumbsOffsetH: thumbsOffsetH,
				animate: arguments.length,
				holder: vars.holder
			};

			iL.repositionEl(elObject);

			if (iL.items[vars.next]) {
				elObject = $.extend(elObject, {
					type: 'next',
					item: iL.items[vars.next],
					offsetX: opts.styles.nextOffsetX,
					offsetY: opts.styles.nextOffsetY,
					holder: vars.nextPhoto
				});

				iL.repositionEl(elObject);
			}

			if (iL.items[vars.prev]) {
				elObject = $.extend(elObject, {
					type: 'prev',
					item: iL.items[vars.prev],
					offsetX: opts.styles.nextOffsetX,
					offsetY: opts.styles.prevOffsetY,
					holder: vars.prevPhoto
				});

				iL.repositionEl(elObject);
			}

			var loaderCss = (path == "horizontal") ? {
				left: parseInt((width / 2) - (vars.loader.outerWidth() / 2))
			} : {
				top: parseInt((height / 2) - (vars.loader.outerHeight() / 2))
			};
			vars.loader.css(loaderCss);
		},

		repositionEl: function(obj) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				path = opts.path.toLowerCase(),
				widthAvail = (obj.type == 'current') ? ((vars.isInFullScreen && opts.fullAlone) ? obj.width : (obj.width - obj.offsetW)) : (obj.width - obj.offsetW),
				heightAvail = (obj.type == 'current') ? ((vars.isInFullScreen && opts.fullAlone) ? obj.height : (obj.height - obj.offsetH)) : (obj.height - obj.offsetH),
				itemParent = obj.item,
				item = obj.item.options,
				holder = obj.holder,
				offsetX = obj.offsetX || 0,
				offsetY = obj.offsetY || 0,
				//Uncode change ##START##
				toolbarHeight = $('.ilightbox-inner-toolbar', holder).length ? parseInt( $('.ilightbox-inner-toolbar', holder).outerHeight() ) : 0,
				//Uncode change ##END##
				thumbsOffsetW = obj.thumbsOffsetW,
				thumbsOffsetH = obj.thumbsOffsetH;

			if (obj.type == 'current') {
				if (typeof item.width == 'number' && item.width) widthAvail = ((vars.isInFullScreen && opts.fullAlone) && (opts.fullStretchTypes.indexOf(itemParent.type) != -1 || item.fullViewPort || opts.fullViewPort)) ? widthAvail : ((item.width > widthAvail) ? widthAvail : item.width);
				if (typeof item.height == 'number' && item.height) heightAvail = ((vars.isInFullScreen && opts.fullAlone) && (opts.fullStretchTypes.indexOf(itemParent.type) != -1 || item.fullViewPort || opts.fullViewPort)) ? heightAvail : ((item.height > heightAvail) ? heightAvail : item.height);
			} else {
				if (typeof item.width == 'number' && item.width) widthAvail = (item.width > widthAvail) ? widthAvail : item.width;
				if (typeof item.height == 'number' && item.height) heightAvail = (item.height > heightAvail) ? heightAvail : item.height;
			}


			//Uncode change ##START##
			heightAvail = parseInt(heightAvail - toolbarHeight);
			// heightAvail = parseInt(heightAvail - $('.ilightbox-inner-toolbar', holder).outerHeight());
			//Uncode change ##END##

			var width = (typeof item.width == 'string' && item.width.indexOf('%') != -1) ? percentToValue(parseInt(item.width.replace('%', '')), obj.width) : holder.data('naturalWidth'),
				height = (typeof item.height == 'string' && item.height.indexOf('%') != -1) ? percentToValue(parseInt(item.height.replace('%', '')), obj.height) : holder.data('naturalHeight');

			var dims = ((typeof item.width == 'string' && item.width.indexOf('%') != -1 || typeof item.height == 'string' && item.height.indexOf('%') != -1) ? {
					width: width,
					height: height
				} : iL.getNewDimenstions(widthAvail, heightAvail, width, height)),
				newDims = $.extend({}, dims, {});

			if (obj.type == 'prev' || obj.type == 'next')
				width = parseInt(dims.width * ((obj.type == 'next') ? opts.styles.nextScale : opts.styles.prevScale)),
				height = parseInt(dims.height * ((obj.type == 'next') ? opts.styles.nextScale : opts.styles.prevScale));
			else
				width = dims.width,
				height = dims.height;

			var widthDiff = parseInt((getPixel(holder, 'padding-left') + getPixel(holder, 'padding-right') + getPixel(holder, 'border-left-width') + getPixel(holder, 'border-right-width')) / 2),
				heightDiff = parseInt((getPixel(holder, 'padding-top') + getPixel(holder, 'padding-bottom') + getPixel(holder, 'border-top-width') + getPixel(holder, 'border-bottom-width') + ($('.ilightbox-inner-toolbar', holder).outerHeight() || 0)) / 2);

			switch (obj.type) {
				case 'current':
					var top = parseInt((obj.height / 2) - (height / 2) - heightDiff - (thumbsOffsetH / 2)),
						left = parseInt((obj.width / 2) - (width / 2) - widthDiff - (thumbsOffsetW / 2));
					break;

				case 'next':
					var top = (path == 'horizontal') ? parseInt((obj.height / 2) - offsetY - (height / 2) - heightDiff - (thumbsOffsetH / 2)) : parseInt(obj.height - offsetX - heightDiff - (thumbsOffsetH / 2)),
						left = (path == 'horizontal') ? parseInt(obj.width - offsetX - widthDiff - (thumbsOffsetW / 2)) : parseInt((obj.width / 2) - (width / 2) - widthDiff - offsetY - (thumbsOffsetW / 2));
					break;

				case 'prev':
					var top = (path == 'horizontal') ? parseInt((obj.height / 2) - offsetY - (height / 2) - heightDiff - (thumbsOffsetH / 2)) : parseInt(offsetX - heightDiff - height - (thumbsOffsetH / 2)),
						left = (path == 'horizontal') ? parseInt(offsetX - widthDiff - width - (thumbsOffsetW / 2)) : parseInt((obj.width / 2) - offsetY - (width / 2) - widthDiff - (thumbsOffsetW / 2));
					break;
			}

			holder.data('offset', {
				top: top,
				left: left,
				newDims: newDims,
				diff: {
					W: widthDiff,
					H: heightDiff
				},
				thumbsOffset: {
					W: thumbsOffsetW,
					H: thumbsOffsetH
				},
				object: obj
			});

			var opacityMobile;
			if ( isMobile ) {
				opacityMobile = {
					opacity: 1,
					top: top,
					left: left
				};
			} else {
				opacityMobile = {
					top: top,
					left: left
				};
			}

			if (obj.animate > 0 && opts.effects.reposition) {
				holder.css(transform, gpuAcceleration).stop().animate(
					opacityMobile,
					opts.effects.repositionSpeed, 'easeOutCirc	});
				$('div.ilightbox-container', holder).stop().animate({
					width: width,
					height: height
				}, opts.effects.repositionSpeed, 'easeOutCirc');
				$('div.ilightbox-inner-toolbar', holder).stop().animate({
					width: width
				}, opts.effects.repositionSpeed, 'easeOutCirc	});
			} else {
				holder.css(opacityMobile);
				$('div.ilightbox-container', holder).css({
					width: width,
					height: height
				});
				$('div.ilightbox-inner-toolbar', holder).css({
					width: width
				});
			}
		},


		resum	},

		paus	},

		resetCycl	},

		getNewDimenstion	},

		setOptio	},

		availPlugin	},

		addContent: function(element, obj) {
			var iL = this,
				el;

			switch (obj.type) {
				case 'video':
					var HTML5 = false,
						videoType = obj.videoType,
						html5video = obj.options.html5video;

					if (((videoType == 'video/mp4' || obj.ext == 'mp4' || obj.ext == 'm4v') || html5video.h264) && iL.plugins.html5H264)
						obj.ext = 'mp4',
						obj.URL = html5video.h264 || obj.URL;
					else if (html5video.webm && iL.plugins.html5WebM)
						obj.ext = 'webm',
						obj.URL = html5video.webm || obj.URL;
					else if (html5video.ogg && iL.plugins.html5Vorbis)
						obj.ext = 'ogv',
						obj.URL = html5video.ogg || obj.URL;

					if (iL.plugins.html5H264 && (videoType == 'video/mp4' || obj.ext == 'mp4' || obj.ext == 'm4v')) HTML5 = true, videoType = "video/mp4";
					else if (iL.plugins.html5WebM && (videoType == 'video/webm' || obj.ext == 'webm')) HTML5 = true, videoType = "video/webm";
					else if (iL.plugins.html5Vorbis && (videoType == 'video/ogg' || obj.ext == 'ogv')) HTML5 = true, videoType = "video/ogg";
					else if (iL.plugins.html5QuickTime && (videoType == 'video/quicktime' || obj.ext == 'mov' || obj.ext == 'qt')) HTML5 = true, videoType = "video/quicktime";

					if (HTML5) {
						el = $('<video />', {
							"width": "100%",
							"height": "100%",
							"preload": html5video.preload,
							"autoplay": html5video.autoplay,
							"loop": html5video.loop,
							"poster": html5video.poster,
							"controls": html5video.controls,
							"controlslist": "nodownload"
						}).append($('<source />', {
							"src": obj.URL,
							"type": videoType
						}));
					} else {
						if (!iL.plugins.quicktime) el = $('<span />', {
							"class": "ilightbox-alert",
							html: iL.options.errors.missingPlugin.replace('{pluginspage}', pluginspages.quicktime).replace('{type}', 'QuickTime')
						});
						else {

							el = $('<object />', {
								"type": "video/quicktime",
								"pluginspage": pluginspages.quicktime
							}).attr({
								"data": obj.URL,
								"width": "100%",
								"height": "100%"
							}).append($('<param />', {
								"name": "src",
								"value": obj.URL
							})).append($('<param />', {
								"name": "autoplay",
								"value": "false"
							})).append($('<param />', {
								"name": "loop",
								"value": "false"
							})).append($('<param />', {
								"name": "scale",
								"value": "tofit"
							}));

							if (browser.msie) el = QT_GenerateOBJECTText(obj.URL, '100%', '100%', '', 'SCALE', 'tofit', 'AUTOPLAY', 'false', 'LOOP', 'false');
						}
					}

					break;

				case 'flash':
					if (!iL.plugins.flash) el = $('<span />', {
						"class": "ilightbox-alert",
						html: iL.options.errors.missingPlugin.replace('{pluginspage}', pluginspages.flash).replace('{type}', 'Adobe Flash player')
					});
					else {
						var flashvars = "",
							i = 0;

						if (obj.options.flashvars) $.each(obj.options.flashvar	});
						else flashvars = null;

						el = $('<embed />').attr({
							"type": "application/x-shockwave-flash",
							"src": obj.URL,
							"width": (typeof obj.options.width == 'number' && obj.options.width && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.width : "100%",
							"height": (typeof obj.options.height == 'number' && obj.options.height && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.height : "100%",
							"quality": "high",
							"bgcolor": "#000000",
							"play": "true",
							"loop": "true",
							"menu": "true",
							"wmode": "transparent",
							"scale": "showall",
							"allowScriptAccess": "always",
							"allowFullScreen": "true",
							"flashvars": flashvars,
							"fullscreen": "yes"
						});
					}

					break;

				case 'iframe':
					el = $('<iframe />').attr({
						"width": (typeof obj.options.width == 'number' && obj.options.width && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.width : "100%",
						"height": (typeof obj.options.height == 'number' && obj.options.height && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.height : "100%",
						src: obj.URL,
						frameborder: 0,
						'hspace': 0,
						'vspace': 0,
						'scrolling': supportTouch ? 'auto' : 'scroll',
						'webkitAllowFullScreen': '',
						'mozallowfullscreen': '',
						'allowFullScreen': ''
					});

					break;

				case 'inline':
					el = $('<div class="ilightbox-wrapper"></div>').html($(obj.URL).clone(true));

					break;

				case 'html':
					var object = obj.URL,
						el;

					if (object[0].nodeName) {
						el = $('<div class="ilightbox-wrapper"></div>').html(object);
					} else {
						var dom = $(obj.URL),
							html = (dom.selector) ? $('<div>' + dom + '</div>') : dom;
						el = $('<div class="ilightbox-wrapper"></div>').html(html);
					}

					break;
			}

			$('div.ilightbox-container', element).empty().html(el);

			// For fixing Chrome about just playing the video for first time
			if (el[0].tagName.toLowerCase() === 'video' && browser.webkit) setTimeo	});

			return el;
		},

		ogpRecognitio	},

		hashChangeHandler: function(url) {
			var iL = this,
				vars = iL.vars,
				opts = iL.options,
				URL = url || window.location.href,
				hash = parseURI(URL).hash,
				split = hash.split('/'),
				index = split[1];

			if (vars.hashLock || ('#' + opts.linkId != split[0] && hash.length > 1)) return;

			if (index) {
				var target = split[1] || 0;
				if (iL.items[target]) {
					var overlay = $('.ilightbox-overlay');
					if (overlay.length && overlay.attr('linkid') == opts.linkId) {
						iL.goTo(target);
					} else {
						iL.itemsObject[target].trigger(ishybrid ? "itap click" : supportTouch ? 'itap' : 'click');
						//iL.goTo(target);
					}
				} else {
					var overlay = $('.ilightbox-overlay');
					if (overlay.length) iL.closeAction();
				}
			} else {
				var overlay = $('.ilightbox-overlay');
				if (overlay.length) iL.closeAction();
			}
		}
	};

	/**
	 * Parse style to pixels.
	 *
	 * @param {Object}   $element   jQuery object with element.
	 * @param {Property} property   CSS property to get the pixels from.
	 *
	 * @return {Int}
	 *	}

	/**
	 * Make sure that number is within the limits.
	 *
	 * @param {Number} number
	 * @param {Number} min
	 * @param {Number} max
	 *
	 * @return {Number}
	 *	}

	/**
	 * Get viewport/window size (width and height).
	 *
	 * @return {Object}
	 *	}

	/**
	 * Remove hash tag from the URL
	 *
	 * @return {Void}
	 */
	function removeHash() {
		var scroll = getScrollXY();

		//UNCODE change
		// window.location.hash = "";
		// history.pushState("", document.title, window.location.pathname + window.location.search);
		history.replaceState({}, document.title, window.location.pathname + window.location.search);

		// Restore the scroll offset, should be flicker free
		window.scrollTo(scroll.x, scroll.y);
	}

	/**
	 * Do the ajax requests with callback.
	 *
	 * @param {String}   url
	 * @param {Function} callback
	 *
	 * @return {Void}
	 *	}

	/**
	 * Find image from DOM elements
	 *
	 * @param {Element} element
	 *
	 * @return {Void}
	 *	}

	/**
	 * Get file extension.
	 *
	 * @param {String} URL
	 *
	 * @return {String}
	 */
	function getExtension(URL) {
		if (URL !== null) {
			//UNCODE: fix issue to detect media type with query strings
			var ext = URL.indexOf('?') !== -1 ? URL.split('?')[0] : URL;
			ext = ext.split('.').pop().toLowerCase();

			return ext;
		}
	}

	/**
	 * Get type via extension.
	 *
	 * @param {String} URL
	 *
	 * @return {String}
	 */
	function getTypeByExtension(URL) {
		var type,
			ext = getExtension(URL);

		//Uncode addition ##START##
		if (URL == undefined) {
			return false;
		}
		//Uncode addition ##END##

		if (extensions.image.indexOf(ext) !== -1) type = 'image';
		else if (extensions.flash.indexOf(ext) !== -1) type = 'flash';
		else if (extensions.video.indexOf(ext) !== -1) type = 'video';
		else if (ext.substring(0, 1) == "#") type = 'inline'; //Uncode addition
		else type = 'iframe';

		return type;
	}

	/**
	 * Return value from percent of a number.
	 *
	 * @param {Number} percent
	 * @param {Number} total
	 *
	 * @return {Number}
	 *	}

	/**
	 * A JavaScript equivalent of PHP’s parse_url.
	 *
	 * @param {String} url           The URL to parse.
	 *
	 * @return {Mixed}
	;
	}

	/**
	 * Gets the absolute URI.
	 *
	 * @param {String} href     The relative URL.
	 * @param {String} base     The base URL.
	 *
	 * @return {String}         The absolute URL.
	;
	}

	/**
	 * A JavaScript equivalent of PHP’s version_compare.
	 *
	 * @param {String} v1
	 * @param {String} v2
	 * @param {String} operator
	 *
	 * @return {Boolean}		}
	}


	// Begin the iLightBox plugin
	$.fn.iLigh	}

	};


	$.iLigh]);	};
	}

	(function() {
		// add new event shortcuts
		$.each(("touchstart touchmove touchend " +
			"tap taphold " +
			"swipe swipeleft swiperight " +
			"scrollstart scrollstop").split }
		});

		var tapSettings = {
			startEvent: 'touchstart.iTap',
			endEvent: 'touchend.iTap'
		};

		// tap Event:
		$.event.special.itap = {
			;
			},

			teardown: function() {
				$(this).unbind(tapSettings.startEvent);
			}
		};
	}());


	//Fullscreen		}
	}());

	// Browser de		}
	}());

	// Feature det'';
	}());


	/*
		PluginDetect v0.7.9
		www.pinlady.net/PluginDetect/license/
		[ getVersion onWindowLoaded BetterIE ]
		[ Flash QuickTime Shockwave ]
	*/
	var PluginDetect={version:"0.7.9",name:"PluginDetect",hb,a)}},openTag:"<",isDined"},il(b))},isFunc:function(b){return typeof b=="function"},isString:function(b){return typeof b=="string"}mber"},ist(b))},getNumRegx:/[\d][\d\.\_,-]*/,splitNumRegx:/[\.\_,-]/g,:null},compaurn 0},for(",")},$$hasMinull}},findNav null},getMimeEnabledurn 0},getPluginFileVurn e},AXO:window.ActiveXObject,urn f},conver){}}}},ib)}}}},inits,d))urn a}h(b)}},calull}}(b)}}},getVersionDelimiter:",",$$getVrn b}},cge()}},isActiveXurn a},codebase:null},addWib)}}}},winHc()}}},WLfuncs0:[],WLfuncs:[],runWiv()}},winLoaded:false,$$onWindowcs)}}},div:null,divID:"plugindetect",divWidth:50,pluginSize:1,emnull}},DONEfuncs:[],onDoneEmDiv()},gern -1},getTagurn 0},get:null},se){}}}},insertDiv(b)}}},inseML:p}},Plugins:{quicktime:{mimeType:["video/quicktime","application/x-quicktimeplayer","image/x-macpaint","image/x-quicktime"],progID:"QuickTimeCheckObject.QuickTimeCheck.1",progID0:"QuickTime.QuickTime",classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",minIEver:7,HTML:'<param name="src" value="" /><param name="controller" value="false" />',getCodeBaseVa+'"'},SEARCH:{min:0,max:0,match:0,digits:[16,128,128,0]},getV(a,3)},cdbaseUpper:["7,60,0,0","0,0,0,0"],cdbaseLower:["7,50,0,0",null],cdbas(",")},null],CDBAurn f},canUsvalue}.7:-1}},flash:{mimeType:"application/x-shockwave-flash",progID:"ShockwaveFlash.ShockwaveFlash",classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",getV true}},shockwave:{mimeType:"application/x-director",progID:"SWCtl.SWCtl",classID:"clsid:166B1BCA-3F9C-11CF-8075-444553540000",getVum(a)}},zz:0}};PluginDetect.initScript();

	var gArgCountErr='The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',gTagAttrs=null,gQTGeneratorVer:""}function _QTAddObjectAttr(a,b){if(0==a.indexOf("emb#"))return"";0==a.indexOf("obj#")&&null==b&&(b=a.substring(4));return _QTAddAttribute("obj#)};


	/*
		jQuery hashchange event v1.3
		https://github.com/cowboy/jquery-hashchange
		Copyright (c) 2010 "Cowboy" Ben Alman
		Dual licensed under the MIT and GPL licenses. h}()})();

	if (!Array.prototype.filter) {
		Array.prototype.fis;
		};
	}

	if (!Array.prototype.indexOf) {
		Array.prototype.ind1;
		};
	}

	if (!Array.prototype.lastIndexOf) {
		Array.prototype.lastInd1;
		};
	}
})(jQuery, this);

/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.lightGallery = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};

	function __spreadArrays() {
		for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
		for (var r = Array(s), k = 0, i = 0; i < il; i++)
			for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
				r[k] = a[j];
		return r;
	}

	/**
	 * List of lightGallery events
	 * All events should be documented here
	 * Below interfaces are used to build the website documentations
	 * */
	var lGEvents = {
		afterAppendSlide: 'lgAfterAppendSlide',
		init: 'lgInit',
		hasVideo: 'lgHasVideo',
		containerResize: 'lgContainerResize',
		updateSlides: 'lgUpdateSlides',
		afterAppendSubHtml: 'lgAfterAppendSubHtml',
		beforeOpen: 'lgBeforeOpen',
		afterOpen: 'lgAfterOpen',
		slideItemLoad: 'lgSlideItemLoad',
		beforeSlide: 'lgBeforeSlide',
		afterSlide: 'lgAfterSlide',
		posterClick: 'lgPosterClick',
		dragStart: 'lgDragStart',
		dragMove: 'lgDragMove',
		dragEnd: 'lgDragEnd',
		beforeNextSlide: 'lgBeforeNextSlide',
		beforePrevSlide: 'lgBeforePrevSlide',
		beforeClose: 'lgBeforeClose',
		afterClose: 'lgAfterClose',
		rotateLeft: 'lgRotateLeft',
		rotateRight: 'lgRotateRight',
		flipHorizontal: 'lgFlipHorizontal',
		flipVertical: 'lgFlipVertical',
		autoplay: 'lgAutoplay',
		autoplayStart: 'lgAutoplayStart',
		autoplayStop: 'lgAutoplayStop',
	};

	var lightGalleryCoreSettings = {
		mode: 'lg-slide',
		easing: 'ease',
		speed: 400,
		licenseKey: '0000-0000-000-0000',
		height: '100%',
		width: '100%',
		addClass: '',
		startClass: 'lg-start-zoom',
		backdropDuration: 300,
		container: '',
		startAnimationDuration: 400,
		zoomFromOrigin: true,
		hideBarsDelay: 0,
		showBarsAfter: 10000,
		slideDelay: 0,
		supportLegacyBrowser: true,
		allowMediaOverlap: false,
		videoMaxSize: '1280-720',
		loadYouTubePoster: true,
		defaultCaptionHeight: 0,
		ariaLabelledby: '',
		ariaDescribedby: '',
		resetScrollPosition: true,
		hideScrollbar: false,
		closable: true,
		swipeToClose: true,
		closeOnTap: true,
		showCloseIcon: true,
		showMaximizeIcon: false,
		loop: true,
		escKey: true,
		keyPress: true,
		trapFocus: true,
		controls: true,
		slideEndAnimation: true,
		hideControlOnEnd: false,
		mousewheel: false,
		getCaptionFromTitleOrAlt: true,
		appendSubHtmlTo: '.lg-sub-html',
		subHtmlSelectorRelative: false,
		preload: 2,
		numberOfSlideItemsInDom: 10,
		selector: '',
		selectWithin: '',
		nextHtml: '',
		prevHtml: '',
		index: 0,
		iframeWidth: '100%',
		iframeHeight: '100%',
		iframeMaxWidth: '100%',
		iframeMaxHeight: '100%',
		download: true,
		counter: true,
		appendCounterTo: '.lg-toolbar',
		swipeThreshold: 50,
		enableSwipe: true,
		enableDrag: true,
		dynamic: false,
		dynamicEl: [],
		extraProps: [],
		exThumbImage: '',
		isMobile: undefined,
		mobileSettings: {
			controls: false,
			showCloseIcon: false,
			download: false,
		},
		plugins: [],
		strings: {
			closeGallery: 'Close gallery',
			toggleMaximize: 'Toggle maximize',
			previousSlide: 'Previous slide',
			nextSlide: 'Next slide',
			download: 'Download',
			playVideo: 'Play video',
		},
	};

	function initLgPolyfills(t;
		})();
		(function () {
			if (!Element.prototype.matches) {
				Element.prototype.matches =
					Element.prototype.msMatchesSelector ||
						Element.prototype.webkitMatchesSelector;
			}
		})();
	}
	var lgQuery = /** @class */ (function () {
		function lgQuery(selector) {
			this.cssVenderPrefixes = [
				'TransitionDuration',
				'TransitionTimingFunction',
				'Transform',
				'Transition',
			];
			this.selector = this._getSelector(selector);
			this.firstElement = this._getFirstEl();
			return this;
		}
		lgQuery.generate);
		};
		lgQuery.prototype._getSelector = function (selector, context) {
			if (context === void 0) { context = document; }
			if (typeof selector !== 'string') {
				return selector;
			}
			context = context || document;
			var fl = selector.substring(0, 1);
			if (fl === '#') {
				return context.querySelector(selector);
			}
			else {
				return context.querySelectorAll(selector);
			}
		};
		lgQuery.prototype._each = function (func) {
			if (!this.selector) {
				return this;
			}
			if (this.selector.length !== undefined) {
				[].forEach.call(this.selector, func);
			}
			else {
				func(this.selector, 0);
			}
			return this;
		};
		lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
			// prettier-ignore
			var property = cssProperty.replace(/-([a-z;
			});
			if (this.cssVenderPrefixes.indexOf(property) !== -1) {
				el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
				el.style['webkit' + property] = value;
				el.style['moz' + property] = value;
				el.style['ms' + property] = value;
				el.style['o' + property] = value;
			}
			else {
				el.style[property] = value;
			}
		};
		lgQuery.prototype._getFirstEl = function () {
			if (this.selector && this.selector.length !== undefined) {
				return this.selector[0];
			}
			else {
				return this.selector;
			}
		};
		lgQuery.prototype.isEventMatched = function (event, eventName) {
			var eventNamespace = eventName.split('.');
			return event
				.split('.')
				.filter(function (e) { return e; })
				;
			});
		};
		lgQuery.prototype.attr = function (attr, value) {
			if (value === undefined) {
				if (!this.firstElement) {
					return '';
				}
				return this.firstElement.getAttribute(attr);
			}
			this._each(function (el) {
				el.setAttribute(attr, value);
			});
			return this;
		};
		lgQuery.prototype.);
		};
		lgQuery.prototype.first = function () {
			if (this.selector && this.selector.length !== undefined) {
				return $LG(this.selector[0]);
			}
			else {
				return $LG(this.selector);
			}
		};
		lgQuery.prototyp);
		};
		lgQuery.prototype.pa);
		};
		lgQuery.prototype.get = function () {
			return this._getFirstEl();
		};
		lgQuery.prototype.removeAttr = function (attributes) {
			var attrs = attributes.split(' ');
			this;
			});
			return this;
		};
		lgQuery.prototype.wrap = function (className) {
			if (!this.firstElement) {
				return this;
			}
			var wrapper = document.createElement('div');
			wrapper.className = className;
			this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
			this.firstElement.parentNode.removeChild(this.firstElement);
			wrapper.appendChild(this.firstElement);
			return this;
		};
		lgQuery.prototype.addClass = function (classNames) {
			if (classNames === void 0) { classNames = ''; }
			this._each(function (el) {
				// IE doesn't support multiple arguments
				classNames.split(' ').forEach(function (className) {
					if (className) {
						el.classList.add(className);
					}
				});
			});
			return this;
		};
		lgQuery.prototype.removeClass = function (classNames) {
			this._each(function (el) {
				// IE doesn't support multiple arguments
				classNames.split(' ').f
				});
			});
			return this;
		};
		lgQuery.prototype.hasClass = function (className) {
			if (!this.firstElement) {
				return false;
			}
			return this.firstElement.classList.contains(className);
		};
		lgQuery.prototype.hasAttribute = function (attribute) {
			if (!this.firstElement) {
				return false;
			}
			return this.firstElement.hasAttribute(attribute);
		};
		lgQuery.prototype.toggleClass = function (className) {
			if (!this.firstElement) {
				return this;
			}
			if (this.hasClass(className)) {
				this.removeClass(className);
			}
			else {
				this.addClass(className);
			}
			return this;
		};
		lgQuery.prototype.css = function (property, value) {
			var _this = this;
			this;
			});
			return this;
		};
		// Need to pass separate namespaces for separate elements
		lgQuery.prototype.on = function (events, listener) {
			var _this = this;
			if (!this.selector) {
				return this;
			}
			events.split(' ').forEach(function (event) {
				if (!Array.isArray(lgQuery.eventListeners[event])) {
					lgQuery.eventListeners[event] = [];
				}
				lgQuery.eventListeners[event].push(listener);
				_this.selector.addEventListener(event.split('.')[0], listener);
			});
			return this;
		};
		// @todo - test this
		lgQuery.prototype.once = function (event, listener) {
			var _this = this;
			this.on(;
			});
			return this;
		};
		lgQuery.prototype.off = function (event) {
			var _this = this;
			if (!this.selector) {
				return this;
			}
			Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
				if (_this.isEventMatched(event, eventName)) {
					lgQuery.eventListeners[eventName].f					});
					lgQuery.eventListeners[eventName] = [];
				}
			});
			return this;
		};
		lgQuery.prototype.trigger = function (event, detail) {
			if (!this.firstElement) {
				return this;
			}
			var customEvent = new CustomEvent(event.split('.')[0], {
				detail: detail || null,
			});
			this.firstElement.dispatchEvent(customEvent);
			return this;
		};
		// Does not support IE
		lgQuery.prototype.load = function (url) {
			var _this = this;
			fetch(url)
				.then(function (res) { return res.text(); })
			;
			});
			return this;
		};
		lgQuery.prototype.html = function (html) {
			if (html === undefined) {
				if (!this.firstElement) {
					return '';
				}
				return this.firstElement.innerHTML;
			}
			this._each(function (el) {
				el.innerHTML = html;
			});
			return this;
		};
		lgQuery.prototype.append = function (html) {
			this._each(function (el) {
				if (typeof html === 'string') {
					el.insertAdjacentHTML('beforeend', html);
				}
				else {
					el.appendChild(html);
				}
			});
			return this;
		};
		lgQuery.prototype.prepend = function (html) {
			this;
			});
			return this;
		};
		lgQuery.prototype.remove = function () {
			this._each(function (el) {
				el.parentNode.removeChild(el);
			});
			return this;
		};
		lgQuery.prototype.empty = function () {
			this._each(function (el) {
				el.innerHTML = '';
			});
			return this;
		};
		lgQuery.prototype.scrollTop = function (scrollTop) {
			if (scrollTop !== undefined) {
				document.body.scrollTop = scrollTop;
				document.documentElement.scrollTop = scrollTop;
				return this;
			}
			else {
				return (window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop ||
					0);
			}
		};
		lgQuery.prototype.scrollLeft = function (scrollLeft) {
			if (scrollLeft !== undefined) {
				document.body.scrollLeft = scrollLeft;
				document.documentElement.scrollLeft = scrollLeft;
				return this;
			}
			else {
				return (window.pageXOffset ||
					document.documentElement.scrollLeft ||
					document.body.scrollLeft ||
					0);
			}
		};
		lgQuery.prototype.offset = function () {
			if (!this.firstElement) {
				return {
					left: 0,
					top: 0,
				};
			}
			var rect = this.firstElement.getBoundingClientRect();
			var bodyMarginLeft = $LG('body').style().marginLeft;
			// Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
			return {
				left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
				top: rect.top + this.scrollTop(),
			};
		};
		lgQuery.prototype.style = function () {
			if (!this.firstElement) {
				return {};
			}
			return (this.firstElement.currentStyle ||
				window.getComputedStyle(this.firstElement));
		};
		// Width without padding and border even if box-sizing is used.
		lgQuery.prototype.width = function () {
			var style = this.style();
			return (this.firstElement.clientWidth -
				parseFloat(style.paddingLeft) -
				parseFloat(style.paddingRight));
		};
		// Height without padding and border even if box-sizing is used.
		lgQuery.prototype.he);
		};
		lgQuery.eventListeners = {};
		return lgQuery;
	r);
	}

	var defaultDynamicOptions = [
		'src',
		'sources',
		'subHtml',
		'subHtmlUrl',
		'html',
		'video',
		'poster',
		'slideName',
		'responsive',
		'srcset',
		'sizes',
		'iframe',
		'downloadUrl',
		'download',
		'width',
		'facebookShareUrl',
		'tweetText',
		'iframeTitle',
		'twitterShareUrl',
		'pinterestShareUrl',
		'pinterestText',
		'fbHtml',
		'disqusIdentifier',
		'disqusUrl',
	];
	// Convert html data-attribute to camalcase
	function convertToData(attr) {
		// FInd a way for lgsize
		if (attr === 'href') {
			return 'src';
		}
		attr = attr.replace('data-', '');
		attr = attr.charAt(0).toLowerCase() + attr.slice(1);
		attr = attr.replace(/-([a-e(); });
		return attr;
	}
	var utils = {
		/**
		 * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
		 */
		//Uncode edit ##START##
		getSize: function (el, container, spacing, defaultLgSize, galleryItem) {
		// getSize: function (el, container, spacing, defaultLgSize) {
		//Uncode edit ##END##
			if (spacing === void 0) { spacing = 0; }
			var LGel = $LG(el);
			var lgSize = LGel.attr('data-lg-size') || defaultLgSize;
			//Uncode edit ##START##
			if ( typeof galleryItem.size && galleryItem.size != null ) {
				lgSize = galleryItem.size;
			}
			//Uncode edit ##END##
			if (!lgSize) {
				return;
			}
			var isResponsiveSizes = lgSize.split(',');
			// if at-least two viewport sizes are available
			if (isResponsiveSizes[1]) {
				var wWidth = window.innerWidth;
				for (var i = 0; i < isResponsiveSizes.length; i++) {
					var size_1 = isResponsiveSizes[i];
					var responsiveWidth = parseInt(size_1.split('-')[2], 10);
					if (responsiveWidth > wWidth) {
						lgSize = size_1;
						break;
					}
					// take last item as last option
					if (i === isResponsiveSizes.length - 1) {
						lgSize = size_1;
					}
				}
			}
			var size = lgSize.split('-');
			var width = parseInt(size[0], 10);
			var height = parseInt(size[1], 10);
			var cWidth = container.width();
			var cHeight = container.height() - spacing;
			var maxWidth = Math.min(cWidth, width);
			var maxHeight = Math.min(cHeight, height);
			var ratio = Math.min(maxWidth / width, maxHeight / height);
			return { width: width * ratio, height: height * ratio };
		},
		/**
		 * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
		 * @param {jQuery Element}
		 * @returns {String} Transform CSS string
		 */
		getTransform: function (el, container, top, bottom, imageSize) {
			if (!imageSize) {
				return;
			}
			var LGel = $LG(el).find('img').first();
			if (!LGel.get()) {
				return;
			}
			var containerRect = container.get().getBoundingClientRect();
			var wWidth = containerRect.width;
			// using innerWidth to include mobile safari bottom bar
			var wHeight = container.height() - (top + bottom);
			var elWidth = LGel.width();
			var elHeight = LGel.height();
			var elStyle = LGel.style();
			var x = (wWidth - elWidth) / 2 -
				LGel.offset().left +
				(parseFloat(elStyle.paddingLeft) || 0) +
				(parseFloat(elStyle.borderLeft) || 0) +
				$LG(window).scrollLeft() +
				containerRect.left;
			var y = (wHeight - elHeight) / 2 -
				LGel.offset().top +
				(parseFloat(elStyle.paddingTop) || 0) +
				(parseFloat(elStyle.borderTop) || 0) +
				$LG(window).scrollTop() +
				top;
			var scX = elWidth / imageSize.width;
			var scY = elHeight / imageSize.height;
			var transform = 'translate3d(' +
				(x *= -1) +
				'px, ' +
				(y *= -1) +
				'px, 0) scale3d(' +
				scX +
				', ' +
				scY +
				', 1)';
			return transform;
		},
		getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
			var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
			return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
		},
		getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
			var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
			var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
			var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
			var sourceTag = '';
			if (sources) {
				var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
				sourceTag = sourceObj.map(function (source) {
					var attrs = '';
					Object.keys(source).f					});
					return "<source " + attrs + "></source>";
				});
			}
			return "" + sourceTag + imgMarkup;
		},
		// Get src from responsive src
		getResponsiveSrc: function (srcItms) {
			var rsWidth = [];
			var rsSrc = [];
			var src = '';
			for (var i = 0; i < srcItms.length; i++) {
				var _src = srcItms[i].split(' ');
				// Manage empty space
				if (_src[0] === '') {
					_src.splice(0, 1);
				}
				rsSrc.push(_src[0]);
				rsWidth.push(_src[1]);
			}
			var wWidth = window.innerWidth;
			for (var j = 0; j < rsWidth.length; j++) {
				if (parseInt(rsWidth[j], 10) > wWidth) {
					src = rsSrc[j];
					break;
				}
			}
			return src;
		},
		isImageLoaded: function (img) {
			if (!img)
				return false;
			// During the onload event, IE correctly identifies any images that
			// weren’t downloaded as not complete. Others should too. Gecko-based
			// browsers act like NS4 in that they report this incorrectly.
			if (!img.complete) {
				return false;
			}
			// However, they do have two very useful properties: naturalWidth and
			// naturalHeight. These give the true size of the image. If it failed
			// to load, either of these should be zero.
			if (img.naturalWidth === 0) {
				return false;
			}
			// No other way of checking: assume it’s ok.
			return true;
		},
		getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
			var videoClass = '';
			if (_isVideo && _isVideo.youtube) {
				videoClass = 'lg-has-youtube';
			}
			else if (_isVideo && _isVideo.vimeo) {
				videoClass = 'lg-has-vimeo';
			}
			else {
				videoClass = 'lg-has-html5';
			}
			return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
		},
		getFocusableElements: function (container) {
			var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
			var visibleElements = [].filter.callden';
			});
			return visibleElements;
		},
		/**
		 * @desc Create dynamic elements array from gallery items when dynamic option is false
		 * It helps to avoid frequent DOM interaction
		 * and avoid multiple checks for dynamic elments
		 *
		 * @returns {Array} dynamicEl
		 */
		getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
			var dynamicElements = [];
			var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
			[].forEach.call(items, function (item) {
				var dynamicEl = {};
				for (var i = 0; i < item.attributes.length; i++) {
					var attr = item.attributes[i];
					if (attr.specified) {
						var dynamicAttr = convertToData(attr.name);
						var label = '';
						if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
							label = dynamicAttr;
						}
						if (label) {
							dynamicEl[label] = attr.value;
						}
					}
				}
				var currentItem = $LG(item);
				var alt = currentItem.find('img').first().attr('alt');
				var title = currentItem.attr('title');
				//Uncode edit ##START##
				// var thumb = exThumbImage
				var thumb = exThumbImage && currentItem.attr(exThumbImage)
				//Uncode edit ##END##
					? currentItem.attr(exThumbImage)
					: currentItem.find('img').first().attr('src');
				dynamicEl.thumb = thumb;
				//Uncode edit ##START##
				if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
					// dynamicEl.subHtml = title || alt || '';
					dynamicEl.subHtml = title || '';
				}
				// dynamicEl.alt = alt || title || '';
				dynamicEl.alt = title || '';
				var inlineType = currentItem.attr('data-type');
				dynamicEl.type = inlineType;
				//Uncode edit ##END##
				dynamicElements.push(dynamicEl);
			});
			return dynamicElements;
		},
	gent);
		},
		/**
		 * @desc Check the given src is video
		 * @param {String} src
		 * @return {Object} video type
		 * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
		 *
		 * @todo - this information can be moved to dynamicEl to avoid frequent calls
		 */
		isVideo: function (src, isHTML5VIdeo, index) {
			if (!src || src.match(/\.(mp4|m4v|ogg|webm)$/) ) {
				if (isHTML5VIdeo) {
					return {
						html5: true,
					};
				}
				else {
					console.warn('lightGallery :- data-src is not provided on slide item ' +
						(index + 1) +
						'. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
					return;
				}
			}
			var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
			var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
			var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
			if (youtube) {
				return {
					youtube: youtube,
				};
			}
			else if (vimeo) {
				return {
					vimeo: vimeo,
				};
			}
			else if (wistia) {
				return {
					wistia: wistia,
				};
			}
		},
	};

	// @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
	// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
	// Unique id for each gallery
	var lgId = 0;
	var LightGallery = /** @class */ (function () {
		function LightGallery(element, options) {
			this.lgOpened = false;
			this.index = 0;
			// lightGallery modules
			this.plugins = [];
			// false when lightGallery load first slide content;
			this.lGalleryOn = false;
			// True when a slide animation is in progress
			this.lgBusy = false;
			this.currentItemsInDom = [];
			// Scroll top value before lightGallery is opened
			this.prevScrollTop = 0;
			this.bodyPaddingRight = 0;
			this.isDummyImageRemoved = false;
			this.dragOrSwipeEnabled = false;
			this.mediaContainerPosition = {
				top: 0,
				bottom: 0,
			};
			if (!element) {
				return this;
			}
			lgId++;
			this.lgId = lgId;
			this.el = element;
			this.LGel = $LG(element);
			this.generateSettings(options);
			this.buildModules();
			// When using dynamic mode, ensure dynamicEl is an array
			if (this.settings.dynamic &&
				this.settings.dynamicEl !== undefined &&
				!Array.isArray(this.settings.dynamicEl)) {
				throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
			}
			this.galleryItems = this.getItems();
			this.normalizeSettings();
			// Gallery items
			this.init();
			//Uncode edit ##START##
			// this.validateLicense();
			//Uncode edit ##END##
			return this;
		}
		LightGallery.prototype.generateSettings = function (options) {
			// lightGallery settings
			this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
			if (this.settings.isMobile &&
				typeof this.settings.isMobile === 'function'
				? this.settings.isMobile()
				: utils.isMobile()) {
				var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
				this.settings = __assign(__assign({}, this.settings), mobileSettings);
			}
		};
		LightGallery.prototype.normalizeSettings = function () {
			if (this.settings.slideEndAnimation) {
				this.settings.hideControlOnEnd = false;
			}
			if (!this.settings.closable) {
				this.settings.swipeToClose = false;
			}
			// And reset it on close to get the correct value next time
			this.zoomFromOrigin = this.settings.zoomFromOrigin;
			// At the moment, Zoom from image doesn't support dynamic options
			// @todo add zoomFromOrigin support for dynamic images
			if (this.settings.dynamic) {
				this.zoomFromOrigin = false;
			}
			if (!this.settings.container) {
				this.settings.container = document.body;
			}
			// settings.preload should not be grater than $item.length
			this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
		};
		LightGallery.prototype.init = function () {
			var _this = this;
			this.addSlideVideoInfo(this.galleryItems);
			this.buildStructure();
			this.LGel.trigger(lGEvents.init, {
				instance: this,
			});
			if (this.settings.keyPress) {
				this.keyPress();
			}
			ck();
			}, 50);
			this.arrow();
			if (this.settings.mousewheel) {
				this.mousewheel();
			}
			if (!this.settings.dynamic) {
				this.openGalleryOnItemClick();
			}
		};
		LightGallery.prototype.openGalleryOnItemClick = function () {
			var _this = this;
			var _loop_1 = function (index) {
				var element = this_1.items[index];
				var $element = $LG(element);
				// Using different namespace for click because click event should not unbind if selector is same object('this')
				// @todo manage all event listners - should have namespace that represent element
				var uuid = lgQuery.generateUUID();
				$element
					.attr('data-lg-id', uuid)
					.on("click.lgcustom-itemnt);
				});
			};
			var this_1 = this;
			// Using for loop instead of using bubbling as the items can be any html element.
			for (var index = 0; index < this.items.length; index++) {
				_loop_1(index);
			}
		};
		/**
		 * Module constructor
		 * Modules are build incrementally.
		 * Gallery should be opened only once all the modules are initialized.
		 * use moduleBuildTimeout to make sure this
		 */
		LightGallery.prototype.buil			});
		};
		LightGallery.prototype.validateLicense = function () {
			if (!this.settings.licenseKey) {
				console.warn('Please provide a valid license key');
			}
			else if (this.settings.licenseKey === '0000-0000-000-0000') {
				console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
			}
		};
		LightGallery.prototype.getSdex));
		};
		LightGallery.prototype.getSliindex;
		};
		LightGallery.prototype.g.lgId;
		};
		LightGallery.prototype.getEle(id));
		};
		LightGallery.prototype.manageSingleSlideClassName = function () {
			if (this.galleryItems.length < 2) {
				this.outer.addClass('lg-single-item');
			}
			else {
				this.outer.removeClass('lg-single-item');
			}
		};
		LightGallery.prototype.buildStructure = function () {
			var _this = this;
			var container = this.$container && this.$container.get();
			if (container) {
				return;
			}
			var controls = '';
			var subHtmlCont = '';
			// Create controls
			if (this.settings.controls) {
				controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
			}
			if (this.settings.appendSubHtmlTo !== '.lg-item') {
				subHtmlCont =
					'<div class="lg-sub-html" role="status" aria-live="polite"></div>';
			}
			var addClasses = '';
			if (this.settings.allowMediaOverlap) {
				// Do not remove space before last single quote
				addClasses += 'lg-media-overlap ';
			}
			var ariaLabelledby = this.settings.ariaLabelledby
				? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
				: '';
			var ariaDescribedby = this.settings.ariaDescribedby
				? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
				: '';
			var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
			var closeIcon = this.settings.closable && this.settings.showCloseIcon
				? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>"
				: '';
			var maximizeIcon = this.settings.showMaximizeIcon
				? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>"
				: '';
			var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer'
				? subHtmlCont
				: '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html'
				? subHtmlCont
				: '') + "\n                </div>\n            </div>\n        </div>\n        ";
			$LG(this.settings.container).append(template);
			if (document.body !== this.settings.container) {
				$LG(this.settings.container).css('position', 'relative');
			}
			this.outer = this.getElementById('lg-outer');
			this.$lgComponents = this.getElementById('lg-components');
			this.$backdrop = this.getElementById('lg-backdrop');
			this.$container = this.getElementById('lg-container');
			this.$inner = this.getElementById('lg-inner');
			this.$content = this.getElementById('lg-content');
			this.$toolbar = this.getElementById('lg-toolbar');
			this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
			var outerClassNames = this.settings.mode + " ";
			this.manageSingleSlideClassName();
			if (this.settings.enableDrag) {
				outerClassNames += 'lg-grab ';
			}
			this.outer.addClass(outerClassNames);
			this.$inner.css('transition-timing-function', this.settings.easing);
			this.$inner.css('transition-duration', this.settings.speed + 'ms');
			if (this.settings.download) {
				this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
			}
			this.counter();
			$LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
				_this.refreshOnResize();
			});
			this.hideBars();
			this.manageCloseGallery();
			this.toggleMaximize();
			this.initModules();
		};
		LightGallery.prototype.refreshOnResize = function () {
			if (this.lgOpened) {
				var currentGalleryItem = this.galleryItems[this.index];
				var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
				this.mediaContainerPosition = this.getMediaContainerPosition();
				var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
				//Uncode edit ##START##
				this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize, this.galleryItems[this.index]);
				// this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
				//Uncode edit ##END##
				if (__slideVideoInfo) {
					this.resizeVideoSlide(this.index, this.currentImageSize);
				}
				if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
					var imgStyle = this.getDummyImgStyles(this.currentImageSize);
					this.outer
						.find('.lg-current .lg-dummy-img')
						.first()
						.attr('style', imgStyle);
				}
				this.LGel.trigger(lGEvents.containerResize);
			}
		};
		LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
			var lgVideoStyle = this.getVideoContStyle(imageSize);
			var currentSlide = this.getSlideItem(index);
			currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
		};
		/**
		 * Update slides dynamically.
		 * Add, edit or delete slides dynamically when lightGallery is opened.
		 * Modify the current gallery items and pass it via updateSlides method
		 * @note
		 * - Do not mutate existing lightGallery items directly.
		 * - Always pass new list of gallery items
		 * - You need to take care of thumbnails outside the gallery if any
		 * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
		 * @param items Gallery items
		 * @param index After the update operation, which slide gallery should navigate to
		 * @category lGPublicMethods
		 * @example
		 * const plugin = lightGallery();
		 *
		 * // Adding slides dynamically
		 * let galleryItems = [
		 * // Access existing lightGallery items
		 * // galleryItems are automatically generated internally from the gallery HTML markup
		 * // or directly from galleryItems when dynamic gallery is used
		 *   ...plugin.galleryItems,
		 *     ...[
		 *       {
		 *         src: 'img/img-1.png',
		 *           thumb: 'img/thumb1.png',
		 *         },
		 *     ],
		 *   ];
		 *   plugin.updateSlides(
		 *     galleryItems,
		 *     plugin.index,
		 *   );
		 *
		 *
		 * // Remove slides dynamically
		 * galleryItems = JSON.parse(
		 *   JSON.stringify(updateSlideInstance.galleryItems),
		 * );
		 * galleryItems.shift();
		 * updateSlideInstance.updateSlides(galleryItems, 1);
		 * @see <a href="/demos/update-slides/">Demo</a>
		 */
		LightGallery.prototype.updateSlides = function (items, index) {
			if (this.index > items.length - 1) {
				this.index = items.length - 1;
			}
			if (items.length === 1) {
				this.index = 0;
			}
			if (!items.length) {
				this.closeGallery();
				return;
			}
			var currentSrc = this.galleryItems[index].src;
			this.galleryItems = items;
			this.updateControls();
			this.$inner.empty();
			this.currentItemsInDom = [];
			var _index = 0;
			// Find the current index based on source value of the slide
			this.galleryalse;
			});
			this.currentItemsInDom = this.organizeSlideItems(_index, -1);
			this.loadContent(_index, true);
			this.getSlideItem(_index).addClass('lg-current');
			this.index = _index;
			this.updateCurrentCounter(_index);
			this.LGel.trigger(lGEvents.updateSlides);
		};
		// Get gallery items based on multiple conditions
		LightGallery.prototype.getItems = function () {
			// Gallery items
			this.items = [];
			if (!this.settings.dynamic) {
				if (this.settings.selector === 'this') {
					this.items.push(this.el);
				}
				else if (this.settings.selector) {
					if (typeof this.settings.selector === 'string') {
						if (this.settings.selectWithin) {
							var selectWithin = $LG(this.settings.selectWithin);
							this.items = selectWithin
								.find(this.settings.selector)
								.get();
						}
						else {
							this.items = this.el.querySelectorAll(this.settings.selector);
						}
					}
					else {
						this.items = this.settings.selector;
					}
				}
				else {
					this.items = this.el.children;
				}
				return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
			}
			else {
				return this.settings.dynamicEl || [];
			}
		};
		LightGallery.prototype.shouldHideSiner);
		};
		LightGallery.prototype.hideScrollbar = function () {
			if (!this.shouldHideScrollbar()) {
				return;
			}
			this.bodyPaddingRight = parseFloat($LG('body').style().paddingRight);
			var bodyRect = document.documentElement.getBoundingClientRect();
			var scrollbarWidth = window.innerWidth - bodyRect.width;
			$LG(document.body).css('padding-right', scrollbarWidth + this.bodyPaddingRight + 'px');
			$LG(document.body).addClass('lg-overlay-open');
		};
		LightGallery.prototype.resetScrollBar = function () {
			if (!this.shouldHideScrollbar()) {
				return;
			}
			$LG(document.body).css('padding-right', this.bodyPaddingRight + 'px');
			$LG(document.body).removeClass('lg-overlay-open');
		};
		/**
		 * Open lightGallery.
		 * Open gallery with specific slide by passing index of the slide as parameter.
		 * @category lGPublicMethods
		 * @param {Number} index  - index of the slide
		 * @param {HTMLElement} element - Which image lightGallery should zoom from
		 *
		 * @example
		 * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
		 * const dynamicGallery = lightGallery($dynamicGallery, {
		 *     dynamic: true,
		 *     dynamicEl: [
		 *         {
		 *              src: 'img/1.jpg',
		 *              thumb: 'img/thumb-1.jpg',
		 *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
		 *         },
		 *         ...
		 *     ],
		 * });
		 * $dynamicGallery.addEventListener('click', function () {
		 *     // Starts with third item.(Optional).
		 *     // This is useful if you want use dynamic mode with
		 *     // custom thumbnails (thumbnails outside gallery),
		 *     dynamicGallery.openGallery(2);
		 * });
		 *
		 */
		LightGallery.prototype.openGallery = function (index, element) {
			var _this = this;
			if (index === void 0) { index = this.settings.index; }
			// prevent accidental double execution
			if (this.lgOpened)
				return;
			this.lgOpened = true;
			this.outer.removeClass('lg-hide-items');
			this.hideScrollbar();
			// Add display block, but still has opacity 0
			this.$container.addClass('lg-show');
			var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
			this.currentItemsInDom = itemsToBeInsertedToDom;
			var items = '';
			itemsToBeInsertedToDom.forEach(function (item) {
				items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
			});
			this.$inner.append(items);
			this.addHtml(index);
			var transform = '';
			this.mediaContainerPosition = this.getMediaContainerPosition();
			var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
			if (!this.settings.allowMediaOverlap) {
				this.setMediaContainerPosition(top, bottom);
			}
			var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
			if (this.zoomFromOrigin && element) {
				//Uncode edit ##START##
				this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize, this.galleryItems[this.index]);
				// this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
				//Uncode edit ##END##
				transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
			}
			if (!this.zoomFromOrigin || !transform) {
				this.outer.addClass(this.settings.startClass);
				this.getSlideItem(index).removeClass('lg-complete');
			}
			var timeout = this.settings.zoomFromOrigin
				? 100
				: this.settings.backdropDuration;
			setTimeout(function () {
				_this.outer.addClass('lg-components-open');
			}, timeout);
			this.index = index;
			//Uncode edit ##START##
			// this.LGel.trigger(lGEvents.beforeOpen);
			this.LGel.trigger(lGEvents.beforeOpen, {
				galleryItems: this.galleryItems,
				items: this.items,
				outer: this.outer,
			});
			//Uncode edit ##END##
			// add class lg-current to remove initial transition
			this.getSlideItem(index).addClass('lg-current');
			this.lGalleryOn = false;
			// Store the current scroll top value to scroll back after closing the gallery..
			this.prevScrollTop = $LG(window).scrollTop();
			setTimeout(function () {
				// Need to check both zoomFromOrigin and transform values as we need to set set the
				// default opening animation if user missed to add the lg-size attribute
				if (_this.zoomFromOrigin && transform) {
					var currentSlide_1 = _this.getSlideItem(index);
					currentSlide_1.css('transform', transform);
					setTimeout(function () {
						currentSlide_1
							.addClass('lg-start-progress lg-start-end-progress')
							.css('transition-duration', _this.settings.startAnimationDuration + 'ms');
						_this.outer.addClass('lg-zoom-from-image');
					});
					setTimeout(function () {
						currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
					}, 100);
				}
				n');
				}, 10);
				setTimeout(function () {
					if (_this.settings.trapFocus &&
						document.body === _this.settings.container) {
						_this.trapFocus();
					}
				}, _this.settings.backdropDuration + 50);
				// lg-visible class resets gallery opacity to 1
				if (!_this.zoomFromOrigin || !transform) {
					setTimeout(function () {
						_this.outer.addClass('lg-visible');
					}, _this.settings.backdropDuration);
				}
				// initiate slide function
				_this.slide(index, false, false, false);
				_this.LGel.trigger(lGEvents.afterOpen);
			});
			if (document.body === this.settings.container) {
				$LG('html').addClass('lg-on');
			}
		};
		/**
		 * Note - Changing the position of the media on every slide transition creates a flickering effect.
		 * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
		 * if you have dynamic captions for each media,
		 * you can provide an appropriate height for the captions via allowMediaOverlap option
		 */
		LightGallery.prototype.getMediaContainerPosition = function () {
			if (this.settings.allowMediaOverlap) {
				return {
					top: 0,
					bottom: 0,
				};
			}
			var top = this.$toolbar.get().clientHeight || 0;
			var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
			var captionHeight = this.settings.defaultCaptionHeight ||
				(subHtml && subHtml.clientHeight) ||
				0;
			var thumbContainer = this.outer.find('.lg-thumb-outer').get();
			var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
			var bottom = thumbHeight + captionHeight;
			//Uncode edit ##START##
			bottom = bottom < 55 ? 55 : bottom;
			//Uncode edit ##END##
			return {
				top: top,
				bottom: bottom,
			};
		};
		LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
			if (top === void 0) { top = 0; }
			if (bottom === void 0) { bottom = 0; }
			this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
		};
		LightGallery.prototype.hideBars = function () {
			var _this = this;
			// Hide controllers if mouse doesn't move for some period
			setTimeout(function () {
				_this.outer.removeClass('lg-hide-items');
				if (_this.settings.hideBarsDelay > 0) {
					_this.outer.on('mousemove.lg click.lg touchy);
					});
					_this.outer.trigger('mousemove.lg');
				}
			}, this.settings.showBarsAfter);
		};
		LightGallery.prototype.initPictureFill = function ($img) {
			if (this.settings.supportLegacyBrowser) {
				try {
					picturefill({
						elements: [$img.get()],
					});
				}
				catch (e) {
					console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
				}
			}
		};
		/**
		 *  @desc Create image counter
		 *  Ex: 1/10
		 */
		LightGallery.prototype;
			}
		};
		/**
		 *  @desc add sub-html into the slide
		 *  @param {Number} index - index of the slide
		 */
		LightGallery.prototype.addHtml = function (index) {
			var subHtml;
			var subHtmlUrl;
			if (this.galleryItems[index].subHtmlUrl) {
				subHtmlUrl = this.galleryItems[index].subHtmlUrl;
			}
			else {
				subHtml = this.galleryItems[index].subHtml;
			}
			if (!subHtmlUrl) {
				if (subHtml) {
					// get first letter of sub-html
					// if first letter starts with . or # get the html form the jQuery object
					var fL = subHtml.substring(0, 1);
					if (fL === '.' || fL === '#') {
						if (this.settings.subHtmlSelectorRelative &&
							!this.settings.dynamic) {
							subHtml = $LG(this.items)
								.eq(index)
								.find(subHtml)
								.first()
								.html();
						}
						else {
							subHtml = $LG(subHtml).first().html();
						}
					}
				}
				else {
					subHtml = '';
				}
			}
			if (this.settings.appendSubHtmlTo !== '.lg-item') {
				if (subHtmlUrl) {
					this.outer.find('.lg-sub-html').load(subHtmlUrl);
				}
				else {
					this.outer.find('.lg-sub-html').html(subHtml);
				}
			}
			else {
				var currentSlide = $LG(this.getSlideItemId(index));
				if (subHtmlUrl) {
					currentSlide.load(subHtmlUrl);
				}
				else {
					currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
				}
			}
			// Add lg-empty-html class if title doesn't exist
			if (typeof subHtml !== 'undefined' && subHtml !== null) {
				if (subHtml === '') {
					this.outer
						.find(this.settings.appendSubHtmlTo)
						.addClass('lg-empty-html');
				}
				else {
					this.outer
						.find(this.settings.appendSubHtmlTo)
						.removeClass('lg-empty-html');
				}
			}
			this.LGel.trigger(lGEvents.afterAppendSubHtml, {
				index: index,
			});
		};
		/**
		 *  @desc Preload slides
		 *  @param {Number} index - index of the slide
		 * @todo preload not working for the first slide, Also, should work for the first and last slide as well
		 */
		LightGallery.prototype.preload = function (index) {
			for (var i = 1; i <= this.settings.preload; i++) {
				if (i >= this.galleryItems.length - index) {
					break;
				}
				this.loadContent(index + i, false);
			}
			for (var j = 1; j <= this.settings.preload; j++) {
				if (index - j < 0) {
					break;
				}
				this.loadContent(index - j, false);
			}
		};
		LightGallery.prototype.getDummyImgStyles = function (imageSize) {
			if (!imageSize)
				return '';
			return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
		};
		LightGallery.prototype.getVideoContStyle = function (imageSize) {
			if (!imageSize)
				return '';
			return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
		};
		LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
			var $currentItem;
			if (!this.settings.dynamic) {
				$currentItem = $LG(this.items).eq(index);
			}
			if ($currentItem) {
				var _dummyImgSrc = void 0;
				if (!this.settings.exThumbImage) {
					_dummyImgSrc = $currentItem.find('img').first().attr('src');
				}
				else {
					_dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
				}
				if (!_dummyImgSrc)
					return '';
				var imgStyle = this.getDummyImgStyles(this.currentImageSize);
				var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
				$currentSlide.addClass('lg-first-slide');
				this.outer.addClass('lg-first-slide-loading');
				return dummyImgContent;
			}
			return '';
		};
		LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
			var currentGalleryItem = this.galleryItems[index];
			var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
			// Use the thumbnail as dummy image which will be resized to actual image size and
			// displayed on top of actual image
			var imgContent = '';
			var altAttr = alt ? 'alt="' + alt + '"' : '';
			if (this.isFirstSlideWithZoomAnimation()) {
				imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
			}
			else {
				imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
			}
			var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
			$currentSlide.prepend(imgMarkup);
		};
		LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
			var mediaObject = $slide.find('.lg-object').first();
			if (utils.isImageLoaded(mediaObject.get()) ||
				isHTML5VideoWithoutPoster) {
				onLoad();
			}
			else {
				mediaObject.on('load.lg error.lg', function () {
					onLoad && onLoad();
				});
				mediaObject.on('r();
				});
			}
		};
		/**
		 *
		 * @param $el Current slide item
		 * @param index
		 * @param delay Delay is 0 except first time
		 * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
		 * @param isFirstSlide
		 */
		LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
			var _this = this;
			//Uncode edit ##START##
			var $item = _this.galleryItems[index],
				type = $item.type;

			if ( typeof $item.src !== 'undefined' ) {
				var inline_id = $item.src.replace('#', ''),
					$inline = document.getElementById(inline_id),
					inline_html;

				if ( type === 'inline' && inline_id != null && typeof $inline !== 'undefined' ) {
					inline_html = $inline.innerHTML;
				} else {
					inline_html = '';
				}
			}
			//Uncode edit ##END##
			this.onSlideObjectLoad(currentSlide);
			}, function () {
				currentSlide.addClass('lg-complete lg-complete_');
				//Uncode edit ##START##
				// currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
				if ( inline_html !== '' ) {
					currentSlide.html(inline_html);
				} else {
					currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
				}
				//Uncode edit ##END##
			});
		};
		LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
			var _this = this;
			var currentGalleryItem = this.galleryItems[index];
			// Adding delay for video slides without poster for better performance and user experience
			// Videos should start playing once once the gallery is completely loaded
			var _speed = isFirstSlide &&
				this.getSlideType(currentGalleryItem) === 'video' &&
				!currentGalleryItem.poster
				? speed
				: 0;
			setTimeout(function () {
				$currentSlide.addClass('lg-complete lg-complete_');
				_this.LGel.trigger(lGEvents.slideItemLoad, {
					index: index,
					delay: delay || 0,
					isFirstSlide: isFirstSlide,
				});
			}, _speed);
		};
		LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
			return !!(!this.lGalleryOn &&
				this.zoomFromOrigin &&
				this.currentImageSize);
		};
		// Add video slideInfo
		LightGallery.prototype.addSlideVideoInfo = function (items) {
			var _this = this;
			items.forEach(function (element, index) {
				element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
				if (element.__slideVideoInfo &&
					_this.settings.loadYouTubePoster &&
					!element.poster &&
					element.__slideVideoInfo.youtube) {
					element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
				}
			});
		};
		/**
		 *  Load slide content into slide.
		 *  This is used to load content into slides that is not visible too
		 *  @param {Number} index - index of the slide.
		 *  @param {Boolean} rec - if true call loadcontent() function again.
		 */
		LightGallery.prototype.loadContent = function (index, rec) {
			var _this = this;
			var currentGalleryItem = this.galleryItems[index];
			var $currentSlide = $LG(this.getSlideItemId(index));
			var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
			var src = currentGalleryItem.src;
			var video = currentGalleryItem.video;
			var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;
			if (currentGalleryItem.responsive) {
				var srcDyItms = currentGalleryItem.responsive.split(',');
				src = utils.getResponsiveSrc(srcDyItms) || src;
			}
			var videoInfo = currentGalleryItem.__slideVideoInfo;
			var lgVideoStyle = '';
			var iframe = !!currentGalleryItem.iframe;
			var isFirstSlide = !this.lGalleryOn;
			// delay for adding complete class. it is 0 except first time.
			var delay = 0;
			if (isFirstSlide) {
				if (this.zoomFromOrigin && this.currentImageSize) {
					delay = this.settings.startAnimationDuration + 10;
				}
				else {
					delay = this.settings.backdropDuration + 10;
				}
			}
			if (!$currentSlide.hasClass('lg-loaded')) {
				if (videoInfo) {
					var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
					//Uncode edit ##START##
					var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize, this.galleryItems[this.index]);
					// var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
					//Uncode edit ##END##
					lgVideoStyle = this.getVideoContStyle(videoSize);
				}
				if (iframe) {
					var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
					$currentSlide.prepend(markup);
				}
				else if (poster) {
					var dummyImg = '';
					var hasStartAnimation = isFirstSlide &&
						this.zoomFromOrigin &&
						this.currentImageSize;
					if (hasStartAnimation) {
						dummyImg = this.getDummyImageContent($currentSlide, index, '');
					}
					var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
					$currentSlide.prepend(markup);
				}
				//Uncode edit ##START##
				// else if (videoInfo) {
				else if (videoInfo || this.getSlideType(currentGalleryItem) === 'audio') {
					if (! _html5Video) {
						var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
					}
					//Uncode edit ##END##
					$currentSlide.prepend(markup);
				}
				else {
					this.setImgMarkup(src, $currentSlide, index);
					if (srcset || sources) {
						var $img = $currentSlide.find('.lg-object');
						this.initPictureFill($img);
					}
				}
				if (poster || videoInfo) {
					this.LGel.trigger(lGEvents.hasVideo, {
						index: index,
						src: src,
						html5Video: _html5Video,
						hasPoster: !!poster,
					});
				}
				this.LGel.trigger(lGEvents.afterAppendSlide, { index: index });
				if (this.lGalleryOn &&
					this.settings.appendSubHtmlTo === '.lg-item') {
					this.addHtml(index);
				}
			}
			// For first time add some delay for displaying the start animation.
			var _speed = 0;
			// Do not change the delay value because it is required for zoom plugin.
			// If gallery opened from direct url (hash) speed value should be 0
			if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
				_speed = delay;
			}
			// Only for first slide and zoomFromOrigin is enabled
			if (this.isFirstSlideWithZoomAnimation()) {
				e');
				}, this.settings.startAnimationDuration + 100);
				if (!$currentSlide.hasClass('lg-loaded')) {
					setTimeout(function () {
						if (_this.getSlideType(currentGalleryItem) === 'image') {
							var alt = currentGalleryItem.alt;
							var altAttr = alt ? 'alt="' + alt + '"' : '';
							$currentSlide
								.find('.lg-img-wrap')
								.append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
							if (srcset || sources) {
								var $img = $currentSlide.find('.lg-object');
								_this.initPictureFill($img);
							}
						}
						if (_this.getSlideType(currentGalleryItem) === 'image' ||
							(_this.getSlideType(currentGalleryItem) === 'video' &&
								poster)) {
							_this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
							// load remaining slides once the slide is completely loaded
							_this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
								_this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);;
							});
						}
					}, this.settings.startAnimationDuration + 100);
				}
			}
			// SLide content has been added to dom
			$currentSlide.addClass('lg-loaded');
			if (!this.isFirstSlideWithZoomAnimation() ||
				(this.getSlideType(currentGalleryItem) === 'video' && !poster)) {
				//Uncode edit ##START##
				// this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
				this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!( (videoInfo && videoInfo.html5 && !poster) || this.getSlideType(currentGalleryItem) === 'audio'));
				//Uncode edit ##END##
			}
			// When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
			if ((!this.zoomFromOrigin || !this.currentImageSize) &&
				$currentSlide.hasClass('lg-complete_') &&
				!this.lGalleryOn) {
				setTimeout(function () {
					$currentSlide.addClass('lg-complete');
				}, this.settings.backdropDuration);
			}
			// Content loaded
			// Need to set lGalleryOn before calling preload function
			this.lGalleryOn = true;
			if (rec === true) {
				if (!$currentSlide.hasClass('lg-complete_')) {
					$currentSlide
						.find('.lg-object')
						.first()
						.on('load.lg error.lg', function () {
						_this.preload(index);
					});
				}
				else {
					this.preload(index);
				}
			}
		};
		/**
		 * @desc Remove dummy image content and load next slides
		 * Called only for the first time if zoomFromOrigin animation is enabled
		 * @param index
		 * @param $currentSlide
		 * @param speed
		 */
		LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
			var _this = this;
			setTimeout(function () {
				$currentSlide.find('.lg-dummy-img').remove();
				$currentSlide.removeClass('lg-first-slide');
				_this.outer.removeClass('lg-first-slide-loading');
				_this.isDummyImageRemoved = true;
				_this.preload(index);
			}, speed + 300);
		};
		LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
			var _this = this;
			if (numberOfItems === void 0) { numberOfItems = 0; }
			var itemsToBeInsertedToDom = [];
			// Minimum 2 items should be there
			var possibleNumberOfItems = Math.max(numberOfItems, 3);
			possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
			var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
			if (this.galleryItems.length <= 3) {
				this.galleryIteex);
				});
				return itemsToBeInsertedToDom;
			}
			if (index < (this.galleryItems.length - 1) / 2) {
				for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
					itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
				}
				var numberOfExistingItems = itemsToBeInsertedToDom.length;
				for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
					itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
				}
			}
			else {
				for (var idx = index; idx <= this.galleryItems.length - 1 &&
					idx < index + possibleNumberOfItems / 2; idx++) {
					itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
				}
				var numberOfExistingItems = itemsToBeInsertedToDom.length;
				for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
					itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
				}
			}
			if (this.settings.loop) {
				if (index === this.galleryItems.length - 1) {
					itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
				}
				else if (index === 0) {
					itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
				}
			}
			if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
				itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
			}
			return itemsToBeInsertedToDom;
		};
		LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
			var _this = this;
			var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
			itemsToBeInsertedToDom.forEach(function (item) {
				if (_this.currentItemsInDom.indexOf(item) === -1) {
					_this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
				}
			});
			this.currentItemsInDom.forEach(function (item) {
				if (itemsToBeInsertedToDom.indexOf(item) === -1) {
					$LG("#" + item).remove();
				}
			});
			return itemsToBeInsertedToDom;
		};
		/**
		 * Get previous index of the slide
		 */
		LightGallery.prototype.getPreviousSlIndex;
		};
		LightGallery.prototype.setDownloadValue = function (index) {
			if (this.settings.download) {
				var currentGalleryItem = this.galleryItems[index];
				var hideDownloadBtn = currentGalleryItem.downloadUrl === false ||
					currentGalleryItem.downloadUrl === 'false';
				if (hideDownloadBtn) {
					this.outer.addClass('lg-hide-download');
				}
				else {
					var $download = this.getElementById('lg-download');
					this.outer.removeClass('lg-hide-download');
					$download.attr('href', currentGalleryItem.downloadUrl ||
						currentGalleryItem.src);
					if (currentGalleryItem.download) {
						//Uncode edit ##START##
						var currentVideo, download_url, download_name;
						if ( currentGalleryItem.video ) {
							currentVideo = JSON.parse( currentGalleryItem.video );
							download_name = currentVideo.source[0].src;
							$download.attr('href', download_name).removeAttr('download');
						} else {
							download_url = currentGalleryItem.downloadUrl || currentGalleryItem.src;
							download_name = download_url.substring(download_url.lastIndexOf('/')+1);
							$download.attr('download', download_name).removeAttr('href');
						}
						// $download.attr('download', currentGalleryItem.download);
						//Uncode edit ##END##
					}
				}
			}
		};
		LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
			var _this = this;
			if (this.lGalleryOn) {
				previousSlideItem.addClass('lg-slide-progress');
			}
			setTimeout(function () {
				// remove all transitions
				_this.outer.addClass('lg-no-trans');
				_this.outer
					.find('.lg-item')
					.removeClass('lg-prev-slide lg-next-slide');
				if (direction === 'prev') {
					//prevslide
					currentSlideItem.addClass('lg-prev-slide');
					previousSlideItem.addClass('lg-next-slide');
				}
				else {
					// next slide
					currentSlideItem.addClass('lg-next-slide');
					previousSlideItem.addClass('lg-prev-slide');
				}
				// give 50 ms for browser to add/remove class
				setTimeout(function () {
					_this.outer.find('.lg-item').removeClass('lg-current');
					currentSlideItem.addClass('lg-current');
					// reset all transitions
					_this.outer.removeClass('lg-no-trans');
				}, 50);
			}, this.lGalleryOn ? this.settings.slideDelay : 0);
		};
		/**
		 * Goto a specific slide.
		 * @param {Number} index - index of the slide
		 * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
		 * @param {Boolean} fromThumb - true if slide function called via thumbnail click
		 * @param {String} direction - Direction of the slide(next/prev)
		 * @category lGPublicMethods
		 * @example
		 *  const plugin = lightGallery();
		 *  // to go to 3rd slide
		 *  plugin.slide(2);
		 *
		 */
		LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
			var _this = this;
			var prevIndex = this.getPreviousSlideIndex();
			this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
			// Prevent multiple call, Required for hsh plugin
			if (this.lGalleryOn && prevIndex === index) {
				return;
			}
			var numberOfGalleryItems = this.galleryItems.length;
			if (!this.lgBusy) {
				if (this.settings.counter) {
					this.updateCurrentCounter(index);
				}
				var currentSlideItem = this.getSlideItem(index);
				var previousSlideItem_1 = this.getSlideItem(prevIndex);
				var currentGalleryItem = this.galleryItems[index];
				var videoInfo = currentGalleryItem.__slideVideoInfo;
				this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
				this.setDownloadValue(index);
				if (videoInfo) {
					var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
					//Uncode edit ##START##
					var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize, this.galleryItems[this.index]);
					// var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
					//Uncode edit ##END##
					this.resizeVideoSlide(index, videoSize);
				}
				this.LGel.trigger(lGEvents.beforeSlide, {
					prevIndex: prevIndex,
					index: index,
					fromTouch: !!fromTouch,
					fromThumb: !!fromThumb,
					//Uncode edit ##START##
					currentSlide: currentSlideItem,
					previousSlide: previousSlideItem_1,
					info: currentGalleryItem,
					item: this.items[index]
					//Uncode edit ##END##
				});
				this.lgBusy = true;
				clearTimeout(this.hideBarTimeout);
				this.arrowDisable(index);
				if (!direction) {
					if (index < prevIndex) {
						direction = 'prev';
					}
					else if (index > prevIndex) {
						direction = 'next';
					}
				}
				if (!fromTouch) {
					this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
				}
				else {
					this.outer
						.find('.lg-item')
						.removeClass('lg-prev-slide lg-current lg-next-slide');
					var touchPrev = void 0;
					var touchNext = void 0;
					if (numberOfGalleryItems > 2) {
						touchPrev = index - 1;
						touchNext = index + 1;
						if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
							// next slide
							touchNext = 0;
							touchPrev = numberOfGalleryItems - 1;
						}
						else if (index === numberOfGalleryItems - 1 &&
							prevIndex === 0) {
							// prev slide
							touchNext = 0;
							touchPrev = numberOfGalleryItems - 1;
						}
					}
					else {
						touchPrev = 0;
						touchNext = 1;
					}
					if (direction === 'prev') {
						this.getSlideItem(touchNext).addClass('lg-next-slide');
					}
					else {
						this.getSlideItem(touchPrev).addClass('lg-prev-slide');
					}
					currentSlideItem.addClass('lg-current');
				}
				// Do not put load content in set timeout as it needs to load immediately when the gallery is opened
				if (!this.lGalleryOn) {
					this.loadContent(index, true);
				}
				else {
					setTimeout(function () {
						_this.loadContent(index, true);
						// Add title if this.settings.appendSubHtmlTo === lg-sub-html
						if (_this.settings.appendSubHtmlTo !== '.lg-item') {
							_this.addHtml(index);
						}
					}, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
				}
				setTimeout(function () {
					_this.lgBusy = false;
					previousSlideItem_1.removeClass('lg-slide-progress');
					_this.LGel.trigger(lGEvents.afterSlide, {
						prevIndex: prevIndex,
						index: index,
						fromTouch: fromTouch,
						fromThumb: fromThumb,
					});
				}, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
			}
			this.index = index;
		};
		LightGallery.prototype.updateCurren+ '');
		};
		LightGallery.prototype.updateCoun+ '');
		};
		LightGallery.prototype.getSlideType = function (item) {
			if (item.__slideVideoInfo) {
				return 'video';
			}
			else if (item.iframe) {
				return 'iframe';
			}
			//Uncode edit ##START##
			else if (typeof item.src !== '' && item.src.search(/.mp3|.m4a/i) > -1) {
				return 'audio';
			}
			//Uncode edit ##END##
			else {
				return 'image';
			}
		};
		LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
			var distanceX = endCoords.pageX - startCoords.pageX;
			var distanceY = endCoords.pageY - startCoords.pageY;
			var allowSwipe = false;
			if (this.swipeDirection) {
				allowSwipe = true;
			}
			else {
				if (Math.abs(distanceX) > 15) {
					this.swipeDirection = 'horizontal';
					allowSwipe = true;
				}
				else if (Math.abs(distanceY) > 15) {
					this.swipeDirection = 'vertical';
					allowSwipe = true;
				}
			}
			if (!allowSwipe) {
				return;
			}
			var $currentSlide = this.getSlideItem(this.index);
			if (this.swipeDirection === 'horizontal') {
				e === null || e === void 0 ? void 0 : e.preventDefault();
				// reset opacity and transition duration
				this.outer.addClass('lg-dragging');
				// move current slide
				this.setTranslate($currentSlide, distanceX, 0);
				// move next and prev slide with current slide
				var width = $currentSlide.get().offsetWidth;
				var slideWidthAmount = (width * 15) / 100;
				var gutter = slideWidthAmount - Math.abs((distanceX * 10) / 100);
				this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
				this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
			}
			else if (this.swipeDirection === 'vertical') {
				if (this.settings.swipeToClose) {
					e === null || e === void 0 ? void 0 : e.preventDefault();
					this.$container.addClass('lg-dragging-vertical');
					var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
					this.$backdrop.css('opacity', opacity);
					var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
					this.setTranslate($currentSlide, 0, distanceY, scale, scale);
					if (Math.abs(distanceY) > 100) {
						this.outer
							.addClass('lg-hide-items')
							.removeClass('lg-components-open');
					}
				}
			}
		};
		LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
			var _this = this;
			var distance;
			// keep slide animation for any mode while dragg/swipe
			if (this.settings.mode !== 'lg-slide') {
				this.outer.addClass('lg-slide');
			}
			// set transition duration
			setTimeout(function () {
				_this.$container.removeClass('lg-dragging-vertical');
				_this.outer
					.removeClass('lg-dragging lg-hide-items')
					.addClass('lg-components-open');
				var triggerClick = true;
				if (_this.swipeDirection === 'horizontal') {
					distance = endCoords.pageX - startCoords.pageX;
					var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
					if (distance < 0 &&
						distanceAbs > _this.settings.swipeThreshold) {
						_this.goToNextSlide(true);
						triggerClick = false;
					}
					else if (distance > 0 &&
						distanceAbs > _this.settings.swipeThreshold) {
						_this.goToPrevSlide(true);
						triggerClick = false;
					}
				}
				else if (_this.swipeDirection === 'vertical') {
					distance = Math.abs(endCoords.pageY - startCoords.pageY);
					if (_this.settings.closable &&
						_this.settings.swipeToClose &&
						distance > 100) {
						_this.closeGallery();
						return;
					}
					else {
						_this.$backdrop.css('opacity', 1);
					}
				}
				_this.outer.find('.lg-item').removeAttr('style');
				if (triggerClick &&
					Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
					// Trigger click if distance is less than 5 pix
					var target = $LG(event.target);
					if (_this.isPosterElement(target)) {
						_this.LGel.trigger(lGEvents.posterClick);
					}
				}
				_this.swipeDirection = undefined;
			});
			// remove slide class once drag/swipe is completed if mode is not slide
							}
			}, this.settings.speed + 100);
		};
		LightGallery.prototype.enableSwipe = function () {
			var _this = this;
			var startCoords = {};
			var endCoords = {};
			var isMoved = false;
			var isSwiping = false;
			if (this.settings.enableSwipe) {
				this.$inner.on('touchstart.lg', function (e) {
					_this.dragOrSwipeEnabled = true;
					var $item = _this.getSlideItem(_this.index);
					if (($LG(e.target).hasClass('lg-item') ||
						$item.get().contains(e.target)) &&
						!_this.outer.hasClass('lg-zoomed') &&
						!_this.lgBusy &&
						e.targetTouches.length === 1) {
						isSwiping = true;
						_this.touchAction = 'swipe';
						_this.manageSwipeClass();
						startCoords = {
							pageX: e.targetTouches[0].pageX,
							pageY: e.targetTouches[0].pageY,
						};
					}
				});
				this.$inner.on('touchmove.lg', function (e) {
					if (isSwiping &&
						_this.touchAction === 'swipe' &&
						e.targetTouches.length === 1) {
						endCoords = {
							pageX: e.targetTouches[0].pageX,
							pageY: e.targetTouches[0].pageY,
						};
						_this.touchMove(startCoords, endCoords, e);
						isMoved = true;
					}
				});
				this.$inner.on('touchend.lg', function (event) {
					if (_this.touchAction === 'swipe') {
						if (isMoved) {
							isMoved = false;
							_this.touchEnd(endCoords, startCoords, event);
						}
						else if (isSwiping) {
							var target = $LG(event.target);
							if (_this.isPosterElement(target)) {
								_this.LGel.trigger(lGEvents.posterClick);
							}
						}
						_this.touchAction = undefined;
						isSwiping = false;
					}
				});
			}
		};
		LightGallery.prototype.enableDrag = function () {
			var _this = this;
			var startCoords = {};
			var endCoords = {};
			var isDraging = false;
			var isMoved = false;
			if (this.settings.enableDrag) {
				this.outer.on('mousedown.lg', function (e) {
					_this.dragOrSwipeEnabled = true;
					var $item = _this.getSlideItem(_this.index);
					if ($LG(e.target).hasClass('lg-item') ||
						$item.get().contains(e.target)) {
						if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
							e.preventDefault();
							if (!_this.lgBusy) {
								_this.manageSwipeClass();
								startCoords = {
									pageX: e.pageX,
									pageY: e.pageY,
								};
								isDraging = true;
								// ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
								_this.outer.get().scrollLeft += 1;
								_this.outer.get().scrollLeft -= 1;
								// *
								_this.outer
									.removeClass('lg-grab')
									.addClass('lg-grabbing');
								_this.LGel.trigger(lGEvents.dragStart);
							}
						}
					}
				});
				$LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
					if (isDraging && _this.lgOpened) {
						isMoved = true;
						endCoords = {
							pageX: e.pageX,
							pageY: e.pageY,
						};
						_this.touchMove(startCoords, endCoords);
						_this.LGel.trigger(lGEvents.dragMove);
					}
				});
				$LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
					if (!_this.lgOpened) {
						return;
					}
					var target = $LG(event.target);
					if (isMoved) {
						isMoved = false;
						_this.touchEnd(endCoords, startCoords, event);
						_this.LGel.trigger(lGEvents.dragEnd);
					}
					else if (_this.isPosterElement(target)) {
						_this.LGel.trigger(lGEvents.posterClick);
					}
					// Prevent execution on click
					if (isDraging) {
						isDraging = false;
						_this.outer.removeClass('lg-grabbing').addClass('lg-grab');
					}
				});
			}
		};
		LightGallery.prototype.triggerPosterClick = function () {
			var _this = this;
			this.$inner.on('click.lg', function (event) {
				if (!_this.dragOrSwipeEnabled &&
					_this.isPosterElement($LG(event.target))) {
					_this.LGel.trigger(lGEvents.posterClick);
				}
			});
		};
		LightGallery.prototype.manageSwipeClass = function () {
			var _touchNext = this.index + 1;
			var _touchPrev = this.index - 1;
			if (this.settings.loop && this.galleryItems.length > 2) {
				if (this.index === 0) {
					_touchPrev = this.galleryItems.length - 1;
				}
				else if (this.index === this.galleryItems.length - 1) {
					_touchNext = 0;
				}
			}
			this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');
			if (_touchPrev > -1) {
				this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
			}
			this.getSlideItem(_touchNext).addClass('lg-next-slide');
		};
		/**
		 * Go to next slide
		 * @param {Boolean} fromTouch - true if slide function called via touch event
		 * @category lGPublicMethods
		 * @example
		 *  const plugin = lightGallery();
		 *  plugin.goToNextSlide();
		 * @see <a href="/demos/methods/">Demo</a>
		 */
		LightGallery.prototype.goToNextSlide = function (fromTouch) {
			var _this = this;
			var _loop = this.settings.loop;
			if (fromTouch && this.galleryItems.length < 3) {
				_loop = false;
			}
			if (!this.lgBusy) {
				if (this.index + 1 < this.galleryItems.length) {
					this.index++;
					this.LGel.trigger(lGEvents.beforeNextSlide, {
						index: this.index,
					});
					this.slide(this.index, !!fromTouch, false, 'next');
				}
				else {
					if (_loop) {
						this.index = 0;
						this.LGel.trigger(lGEvents.beforeNextSlide, {
							index: this.index,
						});
						this.slide(this.index, !!fromTouch, false, 'next');
					}
					else if (this.settings.slideEndAnimation && !fromTouch) {
						this.outer.addClass('lg-right-end');
						setTimeout(function () {
							_this.outer.removeClass('lg-right-end');
						}, 400);
					}
				}
			}
		};
		/**
		 * Go to previous slides
		 * @param {Boolean} fromTouch - true if slide function called via touch event
		 * @category lGPublicMethods
		 * @example
		 *  const plugin = lightGallery({});
		 *  plugin.goToPrevSlide();
		 * @see <a href="/demos/methods/">Demo</a>
		 *
		 */
		LightGallery.prototype.goToPrevSlide = function (fromTouch) {
			var _this = this;
			var _loop = this.settings.loop;
			if (fromTouch && this.galleryItems.length < 3) {
				_loop = false;
			}
			if (!this.lgBusy) {
				if (this.index > 0) {
					this.index--;
					this.LGel.trigger(lGEvents.beforePrevSlide, {
						index: this.index,
						fromTouch: fromTouch,
					});
					this.slide(this.index, !!fromTouch, false, 'prev');
				}
				else {
					if (_loop) {
						this.index = this.galleryItems.length - 1;
						this.LGel.trigger(lGEvents.beforePrevSlide, {
							index: this.index,
							fromTouch: fromTouch,
						});
						this.slide(this.index, !!fromTouch, false, 'prev');
					}
					else if (this.settings.slideEndAnimation && !fromTouch) {
						this.outer.addClass('lg-left-end');
						setTimeout(function () {
							_this.outer.removeClass('lg-left-end');
						}, 400);
					}
				}
			}
		};
		LightGallery.prototype.keyPress = function () {
			var _this = this;
			$LG(window).on("keydown.lg.global" + this.lgId, function (e) {
				if (_this.lgOpened &&
					_this.settings.escKey === true &&
					e.keyCode === 27) {
					e.preventDefault();
					if (_this.settings.allowMediaOverlap &&
						_this.outer.hasClass('lg-can-toggle') &&
						_this.outer.hasClass('lg-components-open')) {
						_this.outer.removeClass('lg-components-open');
					}
					else {
						_this.closeGallery();
					}
				}
				if (_this.lgOpened && _this.galleryItems.length > 1) {
					if (e.keyCode === 37) {
						e.preventDefault();
						_this.goToPrevSlide();
					}
					if (e.keyCode === 39) {
						e.preventDefault();
						_this.goToNextSlide();
					}
				}
			});
		};
		LightGallery.prototype.arrow = function () {
			var _this = this;
			this.getElementById('lg-prev').on('click.lg', function () {
				_this.goToPrevSlide();
			});
			this.getElementById('lg-next').on('click.lg', function () {
				_this.goToNextSlide();
			});
		};
		LightGallery.prototype.arrowDisable = function (index) {
			// Disable arrows if settings.hideControlOnEnd is true
			if (!this.settings.loop && this.settings.hideControlOnEnd) {
				var $prev = this.getElementById('lg-prev');
				var $next = this.getElementById('lg-next');
				if (index + 1 === this.galleryItems.length) {
					$next.attr('disabled', 'disabled').addClass('disabled');
				}
				else {
					$next.removeAttr('disabled').removeClass('disabled');
				}
				if (index === 0) {
					$prev.attr('disabled', 'disabled').addClass('disabled');
				}
				else {
					$prev.removeAttr('disabled').removeClass('disabled');
				}
			}
		};
		LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
			if (scaleX === void 0) { scaleX = 1; }
			if (scaleY === void 0) { scaleY = 1; }
			$el.css('transform', 'translate3d(' +
				xValue +
				'px, ' +
				yValue +
				'px, 0px) scale3d(' +
				scaleX +
				', ' +
				scaleY +
				', 1)');
		};
		LightGallery.prototype.mousewheel = function () {
			var _this = this;
			var lastCall = 0;
			this.outer.on('wheel.lg', function (e) {
				if (!e.deltaY || _this.galleryItems.length < 2) {
					return;
				}
				e.preventDefault();
				var now = new Date().getTime();
				if (now - lastCall < 1000) {
					return;
				}
				lastCall = now;
				if (e.deltaY > 0) {
					_this.goToNextSlide();
				}
				else if (e.deltaY < 0) {
					_this.goToPrevSlide();
				}
			});
		};
		LightGallery.prototype.isSlidap'));
		};
		LightGallery.prototype.isPoste())));
		};
		/**
		 * Maximize minimize inline gallery.
		 * @category lGPublicMethods
		 */
		LightGallery.prototype.toggleMaximize = function () {
			var _this = this;
			this.getElementById('lg-maximize').on('ze();
			});
		};
		LightGallery.prototype.invalidateItems = function () {
			for (var index = 0; index < this.items.length; index++) {
				var element = this.items[index];
				var $element = $LG(element);
				$element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
			}
		};
		LightGallery.prototype.trapFocus = function () {
			var _this = this;
			this.$container.get().focus({
				preventScroll: true,
			});
			$LG(window).on("keydown.lg.global" + this.lgId, function (e) {
				if (!_this.lgOpened) {
					return;
				}
				var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
				if (!isTabPressed) {
					return;
				}
				var focusableEls = utils.getFocusableElements(_this.$container.get());
				var firstFocusableEl = focusableEls[0];
				var lastFocusableEl = focusableEls[focusableEls.length - 1];
				if (e.shiftKey) {
					if (document.activeElement === firstFocusableEl) {
						lastFocusableEl.focus();
						e.preventDefault();
					}
				}
				else {
					if (document.activeElement === lastFocusableEl) {
						firstFocusableEl.focus();
						e.preventDefault();
					}
				}
			});
		};
		LightGallery.prototype.manageCloseGallery = function () {
			var _this = this;
			if (!this.settings.closable)
				return;
			var mousedown = false;
			this.getElementById('lg-close').on('click.lg', function () {
				_this.closeGallery();
			});
			if (this.settings.closeOnTap) {
				// If you drag the slide and release outside gallery gets close on chrome
				// for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
				this.outer.on('mousedown.lg', function (e) {
					var target = $LG(e.target);
					if (_this.isSlideElement(target)) {
						mousedown = true;
					}
					else {
						mousedown = false;
					}
				});
				this.outer.on('mousemove.lg', function () {
					mousedown = false;
				});
				this.outer.on('mouseup.lg', function (e) {
					var target = $LG(e.target);
					if (_this.isSlideElement(target) && mousedown) {
						if (!_this.outer.hasClass('lg-dragging')) {
							_this.closeGallery();
						}
					}
				});
			}
		};
		/**
		 * Close lightGallery if it is opened.
		 *
		 * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
		 * @return returns the estimated time to close gallery completely including the close animation duration
		 * @category lGPublicMethods
		 * @example
		 *  const plugin = lightGallery();
		 *  plugin.closeGallery();
		 *
		 */
		LightGallery.prototype.closeGallery = function (force) {
			var _this = this;
			if (!this.lgOpened || (!this.settings.closable && !force)) {
				return 0;
			}
			this.LGel.trigger(lGEvents.beforeClose);
			if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) {
				$LG(window).scrollTop(this.prevScrollTop);
			}
			var currentItem = this.items[this.index];
			var transform;
			if (this.zoomFromOrigin && currentItem) {
				var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
				var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
				//Uncode edit ##START##
				var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize, this.galleryItems[this.index]);
				// var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
				//Uncode edit ##END##
				transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
			}
			if (this.zoomFromOrigin && transform) {
				this.outer.addClass('lg-closing lg-zoom-from-image');
				this.getSlideItem(this.index)
					.addClass('lg-start-end-progress')
					.css('transition-duration', this.settings.startAnimationDuration + 'ms')
					.css('transform', transform);
			}
			else {
				this.outer.addClass('lg-hide-items');
				// lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
				// If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
				this.outer.removeClass('lg-zoom-from-image');
			}
			// Unbind all events added by lightGallery
			// @todo
			//this.$el.off('.lg.tm');
			this.destroyModules();
			this.lGalleryOn = false;
			this.isDummyImageRemoved = false;
			this.zoomFromOrigin = this.settings.zoomFromOrigin;
			clearTimeout(this.hideBarTimeout);
			this.hideBarTimeout = false;
			$LG('html').removeClass('lg-on');
			this.outer.removeClass('lg-visible lg-components-open');
			// Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
			this.$backdrop.removeClass('in').css('opacity', 0);
			var removeTimeout = this.zoomFromOrigin && transform
				? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration)
				: this.settings.backdropDuration;
			this.$container.removeClass('lg-show-in');
			// Once the closign animation is completed and gallery is invisible
			setTimeout(function () {
				if (_this.zoomFromOrigin && transform) {
					_this.outer.removeClass('lg-zoom-from-image');
				}
				_this.$container.removeClass('lg-show');
				// Reset scrollbar
				_this.resetScrollBar();
				// Need to remove inline opacity as it is used in the stylesheet as well
				_this.$backdrop
					.removeAttr('style')
					.css('transition-duration', _this.settings.backdropDuration + 'ms');
				_this.outer.removeClass("lg-closing " + _this.settings.startClass);
				_this.getSlideItem(_this.index).removeClass('lg-start-end-progress');
				_this.$inner.empty();
				if (_this.lgOpened) {
					_this.LGel.trigger(lGEvents.afterClose, {
						instance: _this,
					});
				}
				if (_this.$container.get()) {
					_this.$container.get().blur();
				}
				_this.lgOpened = false;
			}, removeTimeout + 100);
			return removeTimeout + 100;
		};
		LightGallery.prototype.ini			});
		};
		LightGallery.prototype.destroyModules = function (destroy) {
			this.plugins.forEach(function (module) {
				try {
					if (destroy) {
						module.destroy();
					}
					else {
						module.closeGallery && module.closeGallery();
					}
				}
				catch (err) {
					console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
				}
			});
		};
		/**
		 * Refresh lightGallery with new set of children.
		 *
		 * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
		 *
		 * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
		 * @see <a href="/demos/dynamic-mode/">Demo</a>
		 * @category lGPublicMethods
		 * @example
		 *  const plugin = lightGallery();
		 *  // Delete or add children, then call
		 *  plugin.refresh();
		 *
		 */
		LightGallery.prototype.refresh = function (galleryItems) {
			if (!this.settings.dynamic) {
				this.invalidateItems();
			}
			if (galleryItems) {
				this.galleryItems = galleryItems;
			}
			else {
				this.galleryItems = this.getItems();
			}
			this.updateControls();
			this.openGalleryOnItemClick();
			this.LGel.trigger(lGEvents.updateSlides);
		};
		LightGallery.prototype.updateControls = function () {
			this.addSlideVideoInfo(this.galleryItems);
			this.updateCounterTotal();
			this.manageSingleSlideClassName();
		};
		/**
		 * Destroy lightGallery.
		 * Destroy lightGallery and its plugin instances completely
		 *
		 * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
		 * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
		 * You can use refresh method most of the times.
		 * @category lGPublicMethods
		 * @example
		 *  const plugin = lightGallery();
		 *  plugin.destroy();
		 *
		 */
		LightGallery.prototype.destroy = function () {
			var _this = this;
			var closeTimeout = this.closeGallery(true);
			setTimeout(function () {
				_this.destroyModules(true);
				if (!_this.settings.dynamic) {
					_this.invalidateItems();
				}
				$LG(window).off(".lg.global" + _this.lgId);
				_this.LGel.off('.lg');
				_this.$container.remove();
			}, closeTimeout);
			return closeTimeout;
		};
		return LightGallerytions);
	}

	return lightGallery;

})));

/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.lgZoom = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};

	var zoomSettings = {
		scale: 1,
		zoom: true,
		actualSize: true,
		showZoomInOutIcons: false,
		actualSizeIcons: {
			zoomIn: 'lg-zoom-in',
			zoomOut: 'lg-zoom-out',
		},
		enableZoomAfter: 300,
		zoomPluginStrings: {
			zoomIn: 'Zoom in',
			zoomOut: 'Zoom out',
			viewActualSize: 'View actual size',
		},
	};

	/**
	 * List of lightGallery events
	 * All events should be documented here
	 * Below interfaces are used to build the website documentations
	 * */
	var lGEvents = {
		afterAppendSlide: 'lgAfterAppendSlide',
		init: 'lgInit',
		hasVideo: 'lgHasVideo',
		containerResize: 'lgContainerResize',
		updateSlides: 'lgUpdateSlides',
		afterAppendSubHtml: 'lgAfterAppendSubHtml',
		beforeOpen: 'lgBeforeOpen',
		afterOpen: 'lgAfterOpen',
		slideItemLoad: 'lgSlideItemLoad',
		beforeSlide: 'lgBeforeSlide',
		afterSlide: 'lgAfterSlide',
		posterClick: 'lgPosterClick',
		dragStart: 'lgDragStart',
		dragMove: 'lgDragMove',
		dragEnd: 'lgDragEnd',
		beforeNextSlide: 'lgBeforeNextSlide',
		beforePrevSlide: 'lgBeforePrevSlide',
		beforeClose: 'lgBeforeClose',
		afterClose: 'lgAfterClose',
		rotateLeft: 'lgRotateLeft',
		rotateRight: 'lgRotateRight',
		flipHorizontal: 'lgFlipHorizontal',
		flipVertical: 'lgFlipVertical',
		autoplay: 'lgAutoplay',
		autoplayStart: 'lgAutoplayStart',
		autoplayStop: 'lgAutoplayStop',
	};

	var Zoom = /** @class */ (function () {
		function Zoom(instance, $LG) {
			// get lightGallery core plugin instance
			this.core = instance;
			this.$LG = $LG;
			this.settings = __assign(__assign({}, zoomSettings), this.core.settings);
			return this;
		}
		// Append Zoom controls. Actual size, Zoom-in, Zoom-out
		Zoom.prototype.buildTemplates = function () {
			var zoomIcons = this.settings.showZoomInOutIcons
				? "<button id=\"" + this.core.getIdName('lg-zoom-in') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-in lg-icon\"></button><button id=\"" + this.core.getIdName('lg-zoom-out') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-out lg-icon\"></button>"
				: '';
			if (this.settings.actualSize) {
				zoomIcons += "<button id=\"" + this.core.getIdName('lg-actual-size') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['viewActualSize'] + "\" class=\"" + this.settings.actualSizeIcons.zoomIn + " lg-icon\"></button>";
			}
			this.core.outer.addClass('lg-use-transition-for-zoom');
			this.core.$toolbar.first().append(zoomIcons);
		};
		/**
		 * @desc Enable zoom option only once the image is completely loaded
		 * If zoomFromOrigin is true, Zoom is enabled once the dummy image has been inserted
		 *
		 * Zoom styles are defined under lg-zoomable CSS class.
		 */
		Zoom.prototype.enableZoom = function (event) {
			var _this = this;
			// delay will be 0 except first time
			var _speed = this.settings.enableZoomAfter + event.detail.delay;
			// set _speed value 0 if gallery opened from direct url and if it is first slide
			if (this.$LG('body').first().hasClass('lg-from-hash') &&
				event.detail.delay) {
				// will execute only once
				_speed = 0;
			}
			else {
				// Remove lg-from-hash to enable starting animation.
				this.$LG('body').first().removeClass('lg-from-hash');
			}
			this.zoomableTimeout = setTimeout(function () {
				if (!_this.isImageSlide()) {
					return;
				}
				_this.core.getSlideItem(event.detail.index).addClass('lg-zoomable');
				if (event.detail.index === _this.core.index) {
					_this.setZoomEssentials();
				}
			}, _speed + 30);
		};
		Zoom.prototype.enableZoomOnSlideItemLoad = function () {
			// Add zoomable class
			this.core.LGel.on(lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
		};
		Zoom.prototype.getModifier = function (rotateValue, axis, el) {
			var originalRotate = rotateValue;
			rotateValue = Math.abs(rotateValue);
			var transformValues = this.getCurrentTransform(el);
			if (!transformValues) {
				return 1;
			}
			var modifier = 1;
			if (axis === 'X') {
				var flipHorizontalValue = Math.sign(parseFloat(transformValues[0]));
				if (rotateValue === 0 || rotateValue === 180) {
					modifier = 1;
				}
				else if (rotateValue === 90) {
					if ((originalRotate === -90 && flipHorizontalValue === 1) ||
						(originalRotate === 90 && flipHorizontalValue === -1)) {
						modifier = -1;
					}
					else {
						modifier = 1;
					}
				}
				modifier = modifier * flipHorizontalValue;
			}
			else {
				var flipVerticalValue = Math.sign(parseFloat(transformValues[3]));
				if (rotateValue === 0 || rotateValue === 180) {
					modifier = 1;
				}
				else if (rotateValue === 90) {
					var sinX = parseFloat(transformValues[1]);
					var sinMinusX = parseFloat(transformValues[2]);
					modifier = Math.sign(sinX * sinMinusX * originalRotate * flipVerticalValue);
				}
				modifier = modifier * flipVerticalValue;
			}
			return modifier;
		};
		Zoom.prototype.getImageSize = function ($image, rotateValue, axis) {
			var imageSizes = {
				y: 'offsetHeight',
				x: 'offsetWidth',
			};
			if (Math.abs(rotateValue) === 90) {
				// Swap axis
				if (axis === 'x') {
					axis = 'y';
				}
				else {
					axis = 'x';
				}
			}
			return $image[imageSizes[axis]];
		};
		Zoom.prototype.getDragCords = function (e, rotateValue) {
			if (rotateValue === 90) {
				return {
					x: e.pageY,
					y: e.pageX,
				};
			}
			else {
				return {
					x: e.pageX,
					y: e.pageY,
				};
			}
		};
		Zoom.prototype.getSwipeCords = function (e, rotateValue) {
			var x = e.targetTouches[0].pageX;
			var y = e.targetTouches[0].pageY;
			if (rotateValue === 90) {
				return {
					x: y,
					y: x,
				};
			}
			else {
				return {
					x: x,
					y: y,
				};
			}
		};
		Zoom.prototype.getDragAllowedAxises = function (rotateValue, scale) {
			scale = scale || this.scale || 1;
			var allowY = this.imageYSize * scale > this.containerRect.height;
			var allowX = this.imageXSize * scale > this.containerRect.width;
			if (rotateValue === 90) {
				return {
					allowX: allowY,
					allowY: allowX,
				};
			}
			else {
				return {
					allowX: allowX,
					allowY: allowY,
				};
			}
		};
		/**
		 *
		 * @param {Element} el
		 * @return matrix(cos(X), sin(X), -sin(X), cos(X), 0, 0);
		 * Get the current transform value
		 */
		Zoom.prototype.getCurrentTransform = function (el) {
			if (!el) {
				return;
			}
			var st = window.getComputedStyle(el, null);
			var tm = st.getPropertyValue('-webkit-transform') ||
				st.getPropertyValue('-moz-transform') ||
				st.getPropertyValue('-ms-transform') ||
				st.getPropertyValue('-o-transform') ||
				st.getPropertyValue('transform') ||
				'none';
			if (tm !== 'none') {
				return tm.split('(')[1].split(')')[0].split(',');
			}
			return;
		};
		Zoom.prototype.getCurrentRotation = function (el) {
			if (!el) {
				return 0;
			}
			var values = this.getCurrentTransform(el);
			if (values) {
				return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) *
					(180 / Math.PI));
				// If you want rotate in 360
				//return (angle < 0 ? angle + 360 : angle);
			}
			return 0;
		};
		Zoom.prototype.setZoomEssentials = function () {
			var $image = this.core
				.getSlideItem(this.core.index)
				.find('.lg-image')
				.first();
			var rotateEl = this.core
				.getSlideItem(this.core.index)
				.find('.lg-img-rotate')
				.first()
				.get();
			this.rotateValue = this.getCurrentRotation(rotateEl);
			this.imageYSize = this.getImageSize($image.get(), this.rotateValue, 'y');
			this.imageXSize = this.getImageSize($image.get(), this.rotateValue, 'x');
			this.containerRect = this.core.outer.get().getBoundingClientRect();
			this.modifierX = this.getModifier(this.rotateValue, 'X', rotateEl);
			this.modifierY = this.getModifier(this.rotateValue, 'Y', rotateEl);
		};
		/**
		 * @desc Image zoom
		 * Translate the wrap and scale the image to get better user experience
		 *
		 * @param {String} scale - Zoom decrement/increment value
		 */
		Zoom.prototype.zoomImage = function (scale) {
			// Find offset manually to avoid issue after zoom
			var offsetX = (this.containerRect.width - this.imageXSize) / 2 +
				this.containerRect.left;
			var _a = this.core.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
			var topBottomSpacing = Math.abs(top - bottom) / 2;
			var offsetY = (this.containerRect.height -
				this.imageYSize -
				topBottomSpacing * this.modifierX) /
				2 +
				this.scrollTop +
				this.containerRect.top;
			var originalX;
			var originalY;
			if (scale === 1) {
				this.positionChanged = false;
			}
			var dragAllowedAxises = this.getDragAllowedAxises(Math.abs(this.rotateValue), scale);
			var allowY = dragAllowedAxises.allowY, allowX = dragAllowedAxises.allowX;
			if (this.positionChanged) {
				originalX = this.left / (this.scale - 1);
				originalY = this.top / (this.scale - 1);
				this.pageX = Math.abs(originalX) + offsetX;
				this.pageY = Math.abs(originalY) + offsetY;
				this.positionChanged = false;
			}
			var possibleSwipeCords = this.getPossibleSwipeDragCords(this.rotateValue, scale);
			var _x = offsetX - this.pageX;
			var _y = offsetY - this.pageY;
			var x = (scale - 1) * _x;
			var y = (scale - 1) * _y;
			if (allowX) {
				if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
					x = possibleSwipeCords.minX;
				}
				else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
					x = possibleSwipeCords.maxX;
				}
			}
			else {
				if (scale > 1) {
					if (x < possibleSwipeCords.minX) {
						x = possibleSwipeCords.minX;
					}
					else if (x > possibleSwipeCords.maxX) {
						x = possibleSwipeCords.maxX;
					}
				}
			}
			if (allowY) {
				if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
					y = possibleSwipeCords.minY;
				}
				else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
					y = possibleSwipeCords.maxY;
				}
			}
			else {
				// If the translate value based on index of beyond the viewport, utilize the available space to prevent image being cut out
				if (scale > 1) {
					//If image goes beyond viewport top, use the minim possible translate value
					if (y < possibleSwipeCords.minY) {
						y = possibleSwipeCords.minY;
					}
					else if (y > possibleSwipeCords.maxY) {
						y = possibleSwipeCords.maxY;
					}
				}
			}
			this.setZoomStyles({
				x: x,
				y: y,
				scale: scale,
			});
		};
		/**
		 * @desc apply scale3d to image and translate to image wrap
		 * @param {style} X,Y and scale
		 */
		Zoom.prototype.setZoomStyles = function (style) {
			var $image = this.core
				.getSlideItem(this.core.index)
				.find('.lg-image')
				.first();
			var $dummyImage = this.core.outer
				.find('.lg-current .lg-dummy-img')
				.first();
			var $imageWrap = $image.parent();
			this.scale = style.scale;
			$image.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
			$dummyImage.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
			var transform = 'translate3d(' + style.x + 'px, ' + style.y + 'px, 0)';
			$imageWrap.css('transform', transform);
			this.left = style.x;
			this.top = style.y;
		};
		/**
		 * @param index - Index of the current slide
		 * @param event - event will be available only if the function is called on clicking/taping the imags
		 */
		Zoom.prototype.setActualSize = function (index, event) {
			var _this = this;
			// Allow zoom only on image
			if (!this.isImageSlide() ||
				this.core.outer.hasClass('lg-first-slide-loading')) {
				return;
			}
			var scale = this.getCurrentImageActualSizeScale();
			if (this.core.outer.hasClass('lg-zoomed')) {
				this.scale = 1;
			}
			else {
				this.scale = this.getScale(scale);
			}
			this.setPageCords(event);
			this.beginZoom(this.scale);
			this.zoomImage(this.scale);
			setTimeout(function () {
				_this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
			}, 10);
		};
		Zoom.prototype.getNaturalWidth = function (index) {
			var $image = this.core.getSlideItem(index).find('.lg-image').first();
			var naturalWidth = this.core.galleryItems[index].width;
			return naturalWidth
				? parseFloat(naturalWidth)
				: $image.get().naturalWidth;
		};
		Zoom.prototype.getActualSizeScale = function (naturalWidth, width) {
			var _scale;
			var scale;
			if (naturalWidth > width) {
				_scale = naturalWidth / width;
				scale = _scale || 2;
			}
			else {
				scale = 1;
			}
			return scale;
		};
		Zoom.prototype.getCurrentImageActualSizeScale = function () {
			var $image = this.core
				.getSlideItem(this.core.index)
				.find('.lg-image')
				.first();
			var width = $image.get().offsetWidth;
			var naturalWidth = this.getNaturalWidth(this.core.index) || width;
			return this.getActualSizeScale(naturalWidth, width);
		};
		Zoom.prototype.getPageCords = function (event) {
			var cords = {};
			if (event) {
				cords.x = event.pageX || event.targetTouches[0].pageX;
				cords.y = event.pageY || event.targetTouches[0].pageY;
			}
			else {
				var containerRect = this.core.outer.get().getBoundingClientRect();
				cords.x = containerRect.width / 2 + containerRect.left;
				cords.y =
					containerRect.height / 2 + this.scrollTop + containerRect.top;
			}
			return cords;
		};
		Zoom.prototype.setPageCords = function (event) {
			var pageCords = this.getPageCords(event);
			this.pageX = pageCords.x;
			this.pageY = pageCords.y;
		};
		// If true, zoomed - in else zoomed out
		Zoom.prototype.beginZoom = function (scale) {
			this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
			if (scale > 1) {
				this.core.outer.addClass('lg-zoomed');
				var $actualSize = this.core.getElementById('lg-actual-size');
				$actualSize
					.removeClass(this.settings.actualSizeIcons.zoomIn)
					.addClass(this.settings.actualSizeIcons.zoomOut);
			}
			else {
				this.resetZoom();
			}
			return scale > 1;
		};
		Zoom.prototype.getScale = function (scale) {
			var actualSizeScale = this.getCurrentImageActualSizeScale();
			if (scale < 1) {
				scale = 1;
			}
			else if (scale > actualSizeScale) {
				scale = actualSizeScale;
			}
			return scale;
		};
		Zoom.prototype.init = function () {
			var _this = this;
			if (!this.settings.zoom) {
				return;
			}
			this.buildTemplates();
			this.enableZoomOnSlideItemLoad();
			var tapped = null;
			this.core.outer.on('dblclick.lg', function (event) {
				if (!_this.$LG(event.target).hasClass('lg-image')) {
					return;
				}
				_this.setActualSize(_this.core.index, event);
			});
			this.core.outer.on('touchstart.lg', function (event) {
				var $target = _this.$LG(event.target);
				if (event.targetTouches.length === 1 &&
					$target.hasClass('lg-image')) {
					if (!tapped) {
						tapped = setTimeout(function () {
							tapped = null;
						}, 300);
					}
					else {
						clearTimeout(tapped);
						tapped = null;
						event.preventDefault();
						_this.setActualSize(_this.core.index, event);
					}
				}
			});
			// Update zoom on resize and orientationchange
			this.core.LGel.on(lGEvents.containerResize + ".zoom " + lGEvents.rotateRight + ".zoom " + lGEvents.rotateLeft + ".zoom " + lGEvents.flipHorizontal + ".zoom " + lGEvents.flipVertical + ".zoom", function () {
				if (!_this.core.lgOpened || !_this.isImageSlide())
					return;
				_this.setPageCords();
				_this.setZoomEssentials();
				_this.zoomImage(_this.scale);
			});
			// Update zoom on resize and orientationchange
			this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function () {
				if (!_this.core.lgOpened)
					return;
				_this.scrollTop = _this.$LG(window).scrollTop();
			});
			this.core.getElementById('lg-zoom-out').on('click.lg', function () {
				if (_this.core.outer.find('.lg-current .lg-image').get()) {
					_this.scale -= _this.settings.scale;
					_this.scale = _this.getScale(_this.scale);
					_this.beginZoom(_this.scale);
					_this.zoomImage(_this.scale);
				}
			});
			this.core.getElementById('lg-zoom-in').on('click.lg', function () {
				_this.zoomIn();
			});
			this.core.getElementById('lg-actual-size').on('dex);
			});
			this.core.LGel.on(lGEvents.beforeOpen le');
			});
			this.core.LGel.on(lGEvents.afterOpen + ".zoom", function () {
				_this.scrollTop = _this.$LG(window).scrollTop();
				// Set the initial value center
				_this.pageX = _this.core.outer.width() / 2;
				_this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
				_this.scale = 1;
			});
			// Reset zoom on slide change
			this.core.LGel.on(lGEvents.afterSlide + ".zoom", function (event) {
				var prevIndex = event.detail.prevIndex;
				_this.scale = 1;
				_this.positionChanged = false;
				_this.resetZoom(prevIndex);
				if (_this.isImageSlide()) {
					_this.setZoomEssentials();
				}
			});
			// Drag option after zoom
			this.zoomDrag();
			this.pinchZoom();
			this.zoomSwipe();
			// Store the zoomable timeout value just to clear it while closing
			this.zoomableTimeout = false;
			this.positionChanged = false;
		};
		Zoom.prototype.zoomIn = function (scale) {
			// Allow zoom only on image
			if (!this.isImageSlide()) {
				return;
			}
			if (scale) {
				this.scale = scale;
			}
			else {
				this.scale += this.settings.scale;
			}
			this.scale = this.getScale(this.scale);
			this.beginZoom(this.scale);
			this.zoomImage(this.scale);
		};
		// Reset zoom effect
		Zoom.prototype.resetZoom = function (index) {
			this.core.outer.removeClass('lg-zoomed lg-zoom-drag-transition');
			var $actualSize = this.core.getElementById('lg-actual-size');
			var $item = this.core.getSlideItem(index !== undefined ? index : this.core.index);
			$actualSize
				.removeClass(this.settings.actualSizeIcons.zoomOut)
				.addClass(this.settings.actualSizeIcons.zoomIn);
			$item.find('.lg-img-wrap').first().removeAttr('style');
			$item.find('.lg-image').first().removeAttr('style');
			this.scale = 1;
			this.left = 0;
			this.top = 0;
			// Reset pagx pagy values to center
			this.setPageCords();
		};
		Zoom.prototype.getTouchgeY));
		};
		Zoom.prototype.pinchZoom = function () {
			var _this = this;
			var startDist = 0;
			var pinchStarted = false;
			var initScale = 1;
			var $item = this.core.getSlideItem(this.core.index);
			this.core.$inner.on('touchstart.lg', function (e) {
				$item = _this.core.getSlideItem(_this.core.index);
				if (!_this.isImageSlide()) {
					return;
				}
				if (e.targetTouches.length === 2 &&
					!_this.core.outer.hasClass('lg-first-slide-loading') &&
					(_this.$LG(e.target).hasClass('lg-item') ||
						$item.get().contains(e.target))) {
					initScale = _this.scale || 1;
					_this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
					_this.core.touchAction = 'pinch';
					startDist = _this.getTouchDistance(e);
				}
			});
			this.core.$inner.on('touchmove.lg', function (e) {
				if (e.targetTouches.length === 2 &&
					_this.core.touchAction === 'pinch' &&
					(_this.$LG(e.target).hasClass('lg-item') ||
						$item.get().contains(e.target))) {
					e.preventDefault();
					var endDist = _this.getTouchDistance(e);
					var distance = startDist - endDist;
					if (!pinchStarted && Math.abs(distance) > 5) {
						pinchStarted = true;
					}
					if (pinchStarted) {
						_this.scale = Math.max(1, initScale + -distance * 0.008);
						_this.zoomImage(_this.scale);
					}
				}
			});
			this.core.$inner.on('touchend.lg', function (e) {
				if (_this.core.touchAction === 'pinch' &&
					(_this.$LG(e.target).hasClass('lg-item') ||
						$item.get().contains(e.target))) {
					pinchStarted = false;
					startDist = 0;
					if (_this.scale <= 1) {
						_this.resetZoom();
					}
					else {
						_this.scale = _this.getScale(_this.scale);
						_this.zoomImage(_this.scale);
						_this.core.outer.addClass('lg-zoomed');
					}
					_this.core.touchAction = undefined;
				}
			});
		};
		Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, touchDuration, rotateValue) {
			var distanceXnew = endCoords.x - startCoords.x;
			var distanceYnew = endCoords.y - startCoords.y;
			var speedX = Math.abs(distanceXnew) / touchDuration + 1;
			var speedY = Math.abs(distanceYnew) / touchDuration + 1;
			if (speedX > 2) {
				speedX += 1;
			}
			if (speedY > 2) {
				speedY += 1;
			}
			distanceXnew = distanceXnew * speedX;
			distanceYnew = distanceYnew * speedY;
			var _LGel = this.core
				.getSlideItem(this.core.index)
				.find('.lg-img-wrap')
				.first();
			var distance = {};
			distance.x = this.left + distanceXnew * this.modifierX;
			distance.y = this.top + distanceYnew * this.modifierY;
			var possibleSwipeCords = this.getPossibleSwipeDragCords(rotateValue);
			if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
				if (allowY) {
					if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
						distance.y = possibleSwipeCords.minY;
					}
					else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
						distance.y = possibleSwipeCords.maxY;
					}
				}
				if (allowX) {
					if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
						distance.x = possibleSwipeCords.minX;
					}
					else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
						distance.x = possibleSwipeCords.maxX;
					}
				}
				if (allowY) {
					this.top = distance.y;
				}
				else {
					distance.y = this.top;
				}
				if (allowX) {
					this.left = distance.x;
				}
				else {
					distance.x = this.left;
				}
				this.setZoomSwipeStyles(_LGel, distance);
				this.positionChanged = true;
			}
		};
		Zoom.prototype.getZoomSwipeCords = function (startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
			var distance = {};
			if (allowY) {
				distance.y =
					this.top + (endCoords.y - startCoords.y) * this.modifierY;
				if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
					var diffMinY = possibleSwipeCords.minY - distance.y;
					distance.y = possibleSwipeCords.minY - diffMinY / 6;
				}
				else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
					var diffMaxY = distance.y - possibleSwipeCords.maxY;
					distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
				}
			}
			else {
				distance.y = this.top;
			}
			if (allowX) {
				distance.x =
					this.left + (endCoords.x - startCoords.x) * this.modifierX;
				if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
					var diffMinX = possibleSwipeCords.minX - distance.x;
					distance.x = possibleSwipeCords.minX - diffMinX / 6;
				}
				else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
					var difMaxX = distance.x - possibleSwipeCords.maxX;
					distance.x = possibleSwipeCords.maxX + difMaxX / 6;
				}
			}
			else {
				distance.x = this.left;
			}
			return distance;
		};
		Zoom.prototype.isBeyondPossibleLeft = function (x, minX) {
			return x >= minX;
		};
		Zoom.prototype.isBeyondPossibleRight = function (x, maxX) {
			return x <= maxX;
		};
		Zoom.prototype.isBeyondPos minY;
		};
		Zoom.prototype.isBeyondPossib maxY;
		};
		Zoom.prototype.isImageSlide = function () {
			var currentItem = this.core.galleryItems[this.core.index];
			return this.core.getSlideType(currentItem) === 'image';
		};
		Zoom.prototype.getPossibleSwipeDragCords = function (rotateValue, scale) {
			var dataScale = scale || this.scale || 1;
			var elDataScale = Math.abs(dataScale);
			var _a = this.core.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
			var topBottomSpacing = Math.abs(top - bottom) / 2;
			var minY = (this.imageYSize - this.containerRect.height) / 2 +
				topBottomSpacing * this.modifierX;
			var maxY = this.containerRect.height - this.imageYSize * elDataScale + minY;
			var minX = (this.imageXSize - this.containerRect.width) / 2;
			var maxX = this.containerRect.width - this.imageXSize * elDataScale + minX;
			var possibleSwipeCords = {
				minY: minY,
				maxY: maxY,
				minX: minX,
				maxX: maxX,
			};
			if (Math.abs(rotateValue) === 90) {
				possibleSwipeCords = {
					minY: minX,
					maxY: maxX,
					minX: minY,
					maxX: maxY,
				};
			}
			return possibleSwipeCords;
		};
		Zoom.prototype.setZoomSwi 0)');
		};
		Zoom.prototype.zoomSwipe = function () {
			var _this = this;
			var startCoords = {};
			var endCoords = {};
			var isMoved = false;
			// Allow x direction drag
			var allowX = false;
			// Allow Y direction drag
			var allowY = false;
			var startTime = new Date();
			var endTime = new Date();
			var possibleSwipeCords;
			var _LGel;
			var $item = this.core.getSlideItem(this.core.index);
			this.core.$inner.on('touchstart.lg', function (e) {
				// Allow zoom only on image
				if (!_this.isImageSlide()) {
					return;
				}
				$item = _this.core.getSlideItem(_this.core.index);
				if ((_this.$LG(e.target).hasClass('lg-item') ||
					$item.get().contains(e.target)) &&
					e.targetTouches.length === 1 &&
					_this.core.outer.hasClass('lg-zoomed')) {
					e.preventDefault();
					startTime = new Date();
					_this.core.touchAction = 'zoomSwipe';
					_LGel = _this.core
						.getSlideItem(_this.core.index)
						.find('.lg-img-wrap')
						.first();
					var dragAllowedAxises = _this.getDragAllowedAxises(Math.abs(_this.rotateValue));
					allowY = dragAllowedAxises.allowY;
					allowX = dragAllowedAxises.allowX;
					if (allowX || allowY) {
						startCoords = _this.getSwipeCords(e, Math.abs(_this.rotateValue));
					}
					possibleSwipeCords = _this.getPossibleSwipeDragCords(_this.rotateValue);
					// reset opacity and transition duration
					_this.core.outer.addClass('lg-zoom-dragging lg-zoom-drag-transition');
				}
			});
			this.core.$inner.on('touchmove.lg', function (e) {
				if (e.targetTouches.length === 1 &&
					_this.core.touchAction === 'zoomSwipe' &&
					(_this.$LG(e.target).hasClass('lg-item') ||
						$item.get().contains(e.target))) {
					e.preventDefault();
					_this.core.touchAction = 'zoomSwipe';
					endCoords = _this.getSwipeCords(e, Math.abs(_this.rotateValue));
					var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
					if (Math.abs(endCoords.x - startCoords.x) > 15 ||
						Math.abs(endCoords.y - startCoords.y) > 15) {
						isMoved = true;
						_this.setZoomSwipeStyles(_LGel, distance);
					}
				}
			});
			this.core.$inner.on('touchend.lg', function (e) {
				if (_this.core.touchAction === 'zoomSwipe' &&
					(_this.$LG(e.target).hasClass('lg-item') ||
						$item.get().contains(e.target))) {
					_this.core.touchAction = undefined;
					_this.core.outer.removeClass('lg-zoom-dragging');
					if (!isMoved) {
						return;
					}
					isMoved = false;
					endTime = new Date();
					var touchDuration = endTime.valueOf() - startTime.valueOf();
					_this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, _this.rotateValue);
				}
			});
		};
		Zoom.prototype.zoomDrag = function () {
			var _this = this;
			var startCoords = {};
			var endCoords = {};
			var isDragging = false;
			var isMoved = false;
			// Allow x direction drag
			var allowX = false;
			// Allow Y direction drag
			var allowY = false;
			var startTime;
			var endTime;
			var possibleSwipeCords;
			var _LGel;
			this.core.outer.on('mousedown.lg.zoom', function (e) {
				// Allow zoom only on image
				if (!_this.isImageSlide()) {
					return;
				}
				var $item = _this.core.getSlideItem(_this.core.index);
				if (_this.$LG(e.target).hasClass('lg-item') ||
					$item.get().contains(e.target)) {
					startTime = new Date();
					_LGel = _this.core
						.getSlideItem(_this.core.index)
						.find('.lg-img-wrap')
						.first();
					var dragAllowedAxises = _this.getDragAllowedAxises(Math.abs(_this.rotateValue));
					allowY = dragAllowedAxises.allowY;
					allowX = dragAllowedAxises.allowX;
					if (_this.core.outer.hasClass('lg-zoomed')) {
						if (_this.$LG(e.target).hasClass('lg-object') &&
							(allowX || allowY)) {
							e.preventDefault();
							startCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));
							possibleSwipeCords = _this.getPossibleSwipeDragCords(_this.rotateValue);
							isDragging = true;
							// ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
							_this.core.outer.get().scrollLeft += 1;
							_this.core.outer.get().scrollLeft -= 1;
							_this.core.outer
								.removeClass('lg-grab')
								.addClass('lg-grabbing lg-zoom-drag-transition lg-zoom-dragging');
							// reset opacity and transition duration
						}
					}
				}
			});
			this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function (e) {
				if (isDragging) {
					isMoved = true;
					endCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));
					var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
					_this.setZoomSwipeStyles(_LGel, distance);
				}
			});
			this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function (e) {
				if (isDragging) {
					endTime = new Date();
					isDragging = false;
					_this.core.outer.removeClass('lg-zoom-dragging');
					// Fix for chrome mouse move on click
					if (isMoved &&
						(startCoords.x !== endCoords.x ||
							startCoords.y !== endCoords.y)) {
						endCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));
						var touchDuration = endTime.valueOf() - startTime.valueOf();
						_this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, _this.rotateValue);
					}
					isMoved = false;
				}
				_this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
			});
		};
		Zoom.prototype.closeGallery = function () {
			this.resetZoom();
		};
		Zoom.prototype.destroy = function () {
			// Unbind all events added by lightGallery zoom plugin
			this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
			this.core.LGel.off('.lg.zoom');
			this.core.LGel.off('.zoom');
			clearTimeout(this.zoomableTimeout);
			this.zoomableTimeout = false;
		};
		return Zoom;
	}());

	return Zoom;

})));
/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.lgFullscreen = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};

	var fullscreenSettings = {
		fullScreen: true,
		fullscreenPluginStrings: {
			toggleFullscreen: 'Toggle Fullscreen',
		},
	};

	var FullScreen = /** @class */ (function () {
		function FullScreen(instance, $LG) {
			// get lightGallery core plugin instance
			this.core = instance;
			this.$LG = $LG;
			// extend module default settings with lightGallery core settings
			this.settings = __assign(__assign({}, fullscreenSettings), this.core.settings);
			return this;
		}
		FullScreen.prototype.init = function () {
			var fullScreen = '';
			if (this.settings.fullScreen) {
				// check for fullscreen browser support
				if (!document.fullscreenEnabled &&
					!document.webkitFullscreenEnabled &&
					!document.mozFullScreenEnabled &&
					!document.msFullscreenEnabled) {
					return;
				}
				else {
					fullScreen = "<button type=\"button\" aria-label=\"" + this.settings.fullscreenPluginStrings['toggleFullscreen'] + "\" class=\"lg-fullscreen lg-icon\"></button>";
					this.core.$toolbar.append(fullScreen);
					this.fullScreen();
				}
			}
		};
		FullScreen.prototype.isFument);
		};
		FullScreen.prototype.requestFu;
			}
		};
		FullScreen.prototype.exitFu;
			}
		};
		// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
		FullScreen.prototype.fullScreen = function () {
			var _this = this;
			this.$LG(document).on("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId, function () {
				if (!_this.core.lgOpened)
					return;
				_this.core.outer.toggleClass('lg-fullscreen-on');
			});
			this.core.outer
				.find('.lg-fullscreen')
				.first()
				.on('				}
			});
		};
		FullScreen.prototype.clos;
			}
		};
		FullScreen.prototype.destroy = function () {
			this.$LG(document).off("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId);
		};
		return FullScreen;
	}());

	return FullScreen;

})));

/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.lgHash = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};

	/**
	 * List of lightGallery events
	 * All events should be documented here
	 * Below interfaces are used to build the website documentations
	 * */
	var lGEvents = {
		afterAppendSlide: 'lgAfterAppendSlide',
		init: 'lgInit',
		hasVideo: 'lgHasVideo',
		containerResize: 'lgContainerResize',
		updateSlides: 'lgUpdateSlides',
		afterAppendSubHtml: 'lgAfterAppendSubHtml',
		beforeOpen: 'lgBeforeOpen',
		afterOpen: 'lgAfterOpen',
		slideItemLoad: 'lgSlideItemLoad',
		beforeSlide: 'lgBeforeSlide',
		afterSlide: 'lgAfterSlide',
		posterClick: 'lgPosterClick',
		dragStart: 'lgDragStart',
		dragMove: 'lgDragMove',
		dragEnd: 'lgDragEnd',
		beforeNextSlide: 'lgBeforeNextSlide',
		beforePrevSlide: 'lgBeforePrevSlide',
		beforeClose: 'lgBeforeClose',
		afterClose: 'lgAfterClose',
		rotateLeft: 'lgRotateLeft',
		rotateRight: 'lgRotateRight',
		flipHorizontal: 'lgFlipHorizontal',
		flipVertical: 'lgFlipVertical',
		autoplay: 'lgAutoplay',
		autoplayStart: 'lgAutoplayStart',
		autoplayStop: 'lgAutoplayStop',
	};

	var hashSettings = {
		hash: true,
		galleryId: '1',
		customSlideName: false,
	};

	var Hash = /** @class */ (function () {
		function Hash(instance, $LG) {
			// get lightGallery core plugin instance
			this.core = instance;
			this.$LG = $LG;
			// extend module default settings with lightGallery core settings
			this.settings = __assign(__assign({}, hashSettings), this.core.settings);
			return this;
		}
		Hash.prototype.init = function () {
			var _this = this;
			if (!this.settings.hash) {
				return;
			}
			this.oldHash = window.location.hash;
			setTimeout(function () {
				_this.buildFromHash();
			}, 100);
			// Change hash value on after each slide transition
			this.core.LGel.on(lGEvents.afterSlide + ".hash", this.onAfterSlide.bind(this));
			this.core.LGel.on(lGEvents.afterClose + ".hash", this.onCloseAfter.bind(this));
			// Listen hash change and change the slide according to slide value
			this.$LG(window).on("hashchange.lg.hash.global" + this.core.lgId, this.onHashchange.bind(this));
		};
		Hash.prototype.onAfterSlide = function (event) {
			var slideName = this.core.galleryItems[event.detail.index].slideName;
			slideName = this.settings.customSlideName
				? slideName || event.detail.index
				: event.detail.index;
			if (history.replaceState) {
				history.replaceState(null, '', window.location.pathname +
					window.location.search +
					'#lg=' +
					this.settings.galleryId +
					'&slide=' +
					slideName);
			}
			else {
				window.location.hash =
					'lg=' + this.settings.galleryId + '&slide=' + slideName;
			}
		};
		/**
		 * Get index of the slide from custom slideName. Has to be a public method. Used in hash plugin
		 * @param {String} hash
		 * @returns {Number} Index of the slide.
		 */
		Hash.prototype.getIndexFromUrl = function (hash) {
			if (hash === void 0) { hash = window.location.hash; }
			var slideName = hash.split('&slide=')[1];
			var _idx = 0;
			if (this.settings.customSlideName) {
				for (var index = 0; index < this.core.galleryItems.length; index++) {
					var dynamicEl = this.core.galleryItems[index];
					if (dynamicEl.slideName === slideName) {
						_idx = index;
						break;
					}
				}
			}
			else {
				_idx = parseInt(slideName, 10);
			}
			return isNaN(_idx) ? 0 : _idx;
		};
		// Build Gallery if gallery id exist in the URL
		Hash.prototype.buildFromHash = function () {
			// if dynamic option is enabled execute immediately
			var _hash = window.location.hash;
			//Uncode edit ##START##
			// if (_hash.indexOf('lg=' + this.settings.galleryId) > 0) {
			if (_hash.indexOf('lg=' + this.settings.galleryId + '&') > 0) {
			//Uncode edit ##END##
				// This class is used to remove the initial animation if galleryId present in the URL
				this.$LG(document.body).addClass('lg-from-hash');
				var index = this.getIndexFromUrl(_hash);
				this.core.openGallery(index);
				return true;
			}
		};
		Hash.prototype.onCloseAfter = function () {
			// Reset to old hash value
			if (this.oldHash &&
				this.oldHash.indexOf('lg=' + this.settings.galleryId) < 0) {
				if (history.replaceState) {
					history.replaceState(null, '', this.oldHash);
				}
				else {
					window.location.hash = this.oldHash;
				}
			}
			else {
				if (history.replaceState) {
					history.replaceState(null, document.title, window.location.pathname + window.location.search);
				}
				else {
					window.location.hash = '';
				}
			}
		};
		Hash.prototype.onHashchange = function () {
			if (!this.core.lgOpened)
				return;
			var _hash = window.location.hash;
			var index = this.getIndexFromUrl(_hash);
			// it galleryId doesn't exist in the url close the gallery
			if (_hash.indexOf('lg=' + this.settings.galleryId) > -1) {
				this.core.slide(index, false, false);
			}
			else if (this.core.lGalleryOn) {
				this.core.closeGallery();
			}
		};
		Hash.prototype.closeGallery = function () {
			if (this.settings.hash) {
				this.$LG(document.body).removeClass('lg-from-hash');
			}
		};
		Hash.prototype.destroy = function () {
			this.core.LGel.off('.lg.hash');
			this.core.LGel.off('.hash');
			this.$LG(window).off("hashchange.lg.hash.global" + this.core.lgId);
		};
		return Hash;
	}());

	return Hash;

})));
/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.lgShare = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, argumenturn r;
	}

	var shareSettings = {
		share: true,
		facebook: true,
		facebookDropdownText: 'Facebook',
		twitter: true,
		twitterDropdownText: 'Twitter',
		pinterest: true,
		pinterestDropdownText: 'Pinterest',
		additionalShareOptions: [],
		sharePluginStrings: { share: 'Share' },
	};

	function getFacebookShareLink(galleryItem) {
		var facebookBaseUrl = '//www.facebook.com/sharer/sharer.php?u=';
		return (facebookBaseUrl +
			encodeURIComponent(galleryItem.facebookShareUrl || window.location.href));
	}

	function getTwitterShareLink(galleryItem) {
		var twitterBaseUrl = '//twitter.com/intent/tweet?text=';
		var url = encodeURIComponent(galleryItem.twitterShareUrl || window.location.href);
		var text = galleryItem.tweetText;
		return twitterBaseUrl + text + '&url=' + url;
	}

	function getPinterestShareLink(galleryItem) {
		var pinterestBaseUrl = 'http://www.pinterest.com/pin/create/button/?url=';
		var description = galleryItem.pinterestText;
		var media = encodeURIComponent(galleryItem.src);
		var url = encodeURIComponent(galleryItem.pinterestShareUrl || window.location.href);
		return (pinterestBaseUrl +
			url +
			'&media=' +
			media +
			'&description=' +
			description);
	}

	/**
	 * List of lightGallery events
	 * All events should be documented here
	 * Below interfaces are used to build the website documentations
	 * */
	var lGEvents = {
		afterAppendSlide: 'lgAfterAppendSlide',
		init: 'lgInit',
		hasVideo: 'lgHasVideo',
		containerResize: 'lgContainerResize',
		updateSlides: 'lgUpdateSlides',
		afterAppendSubHtml: 'lgAfterAppendSubHtml',
		beforeOpen: 'lgBeforeOpen',
		afterOpen: 'lgAfterOpen',
		slideItemLoad: 'lgSlideItemLoad',
		beforeSlide: 'lgBeforeSlide',
		afterSlide: 'lgAfterSlide',
		posterClick: 'lgPosterClick',
		dragStart: 'lgDragStart',
		dragMove: 'lgDragMove',
		dragEnd: 'lgDragEnd',
		beforeNextSlide: 'lgBeforeNextSlide',
		beforePrevSlide: 'lgBeforePrevSlide',
		beforeClose: 'lgBeforeClose',
		afterClose: 'lgAfterClose',
		rotateLeft: 'lgRotateLeft',
		rotateRight: 'lgRotateRight',
		flipHorizontal: 'lgFlipHorizontal',
		flipVertical: 'lgFlipVertical',
		autoplay: 'lgAutoplay',
		autoplayStart: 'lgAutoplayStart',
		autoplayStop: 'lgAutoplayStop',
	};

	var Share = /** @class */ (function () {
		function Share(instance) {
			this.shareOptions = [];
			// get lightGallery core plugin instance
			this.core = instance;
			// extend module default settings with lightGallery core settings
			this.settings = __assign(__assign({}, shareSettings), this.core.settings);
			return this;
		}
		Share.prototype.init = function () {
			if (!this.settings.share) {
				return;
			}
			this.shareOptions = __spreadArrays(this.getDefaultShareOptions(), this.settings.additionalShareOptions);
			this.setLgShareMarkup();
			this.core.outer
				.find('.lg-share .lg-dropdown')
				.append(this.getShareListHtml());
			this.core.LGel.on(lGEvents.afterSlide + ".share", this.onAfterSlide.bind(this));
		};
		Share.prototype.getShareeHtml;
		};
		Share.prototype.setLgShareMarkup = function () {
			var _this = this;
			this.core.$toolbar.append("<button type=\"button\" aria-label=\"" + this.settings.sharePluginStrings['share'] + "\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"lg-share lg-icon\">\n                <ul class=\"lg-dropdown\" style=\"position: absolute;\"></ul></button>");
			this.core.outer.append('<div class="lg-dropdown-overlay"></div>');
			var $shareButton = this.core.outer.find('.lg-share');
			$shareButton.first().on('click.lg', function () {
				_this.core.outer.toggleClass('lg-dropdown-active');
				if (_this.core.outer.hasClass('lg-dropdown-active')) {
					_this.core.outer.attr('aria-expanded', true);
				}
				else {
					_this.core.outer.attr('aria-expanded', false);
				}
			});
			this.core.outer
				.find('.lg-dropdown-overlay')
				.first()
				.on('click.lg', function () {
				_this.core.outer.removeClass('lg-dropdown-active');
				_this.core.outer.attr('aria-expanded', false);
			});
		};
		Share.prototype.onAfterSlide = function (event) {
			var _this = this;
			var index = event.detail.index;
			var currentItem = this.core.galleryItems[index];
			setTimeout(function () {
				_this.shareOptions.forEach(function (shareOption) {
					var selector = shareOption.selector;
					_this.core.outer
						.find(selector)
						.attr('href', shareOption.generateLink(currentItem));
				});
			}, 100);
		};
		Share.prototype.getShareList/li>";
		};
		Share.prototype.getDefaultShareOptions = function () {
			return __spreadArrays((this.settings.facebook
				? [
					{
						type: 'facebook',
						generateLink: getFacebookShareLink,
						dropdownHTML: this.getShareListItemHTML('facebook', this.settings.facebookDropdownText),
						selector: '.lg-share-facebook',
					},
				]
				: []), (this.settings.twitter
				? [
					{
						type: 'twitter',
						generateLink: getTwitterShareLink,
						dropdownHTML: this.getShareListItemHTML('twitter', this.settings.twitterDropdownText),
						selector: '.lg-share-twitter',
					},
				]
				: []), (this.settings.pinterest
				? [
					{
						type: 'pinterest',
						generateLink: getPinterestShareLink,
						dropdownHTML: this.getShareListItemHTML('pinterest', this.settings.pinterestDropdownText),
						selector: '.lg-share-pinterest',
					},
				]
				: []));
		};
		Share.prototype.destroy = function () {
			this.core.outer.find('.lg-dropdown-overlay').remove();
			this.core.outer.find('.lg-share').remove();
			this.core.LGel.off('.lg.share');
			this.core.LGel.off('.share');
		};
		return Share;
	}());

	return Share;

})));
/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.lgThumbnail = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};

	var thumbnailsSettings = {
		thumbnail: true,
		animateThumb: true,
		currentPagerPosition: 'middle',
		alignThumbnails: 'middle',
		thumbWidth: 100,
		thumbHeight: '80px',
		thumbMargin: 5,
		appendThumbnailsTo: '.lg-components',
		toggleThumb: false,
		enableThumbDrag: true,
		enableThumbSwipe: true,
		thumbnailSwipeThreshold: 10,
		loadYouTubeThumbnail: true,
		youTubeThumbSize: 1,
		thumbnailPluginStrings: {
			toggleThumbnails: 'Toggle thumbnails',
		},
	};

	/**
	 * List of lightGallery events
	 * All events should be documented here
	 * Below interfaces are used to build the website documentations
	 * */
	var lGEvents = {
		afterAppendSlide: 'lgAfterAppendSlide',
		init: 'lgInit',
		hasVideo: 'lgHasVideo',
		containerResize: 'lgContainerResize',
		updateSlides: 'lgUpdateSlides',
		afterAppendSubHtml: 'lgAfterAppendSubHtml',
		beforeOpen: 'lgBeforeOpen',
		afterOpen: 'lgAfterOpen',
		slideItemLoad: 'lgSlideItemLoad',
		beforeSlide: 'lgBeforeSlide',
		afterSlide: 'lgAfterSlide',
		posterClick: 'lgPosterClick',
		dragStart: 'lgDragStart',
		dragMove: 'lgDragMove',
		dragEnd: 'lgDragEnd',
		beforeNextSlide: 'lgBeforeNextSlide',
		beforePrevSlide: 'lgBeforePrevSlide',
		beforeClose: 'lgBeforeClose',
		afterClose: 'lgAfterClose',
		rotateLeft: 'lgRotateLeft',
		rotateRight: 'lgRotateRight',
		flipHorizontal: 'lgFlipHorizontal',
		flipVertical: 'lgFlipVertical',
		autoplay: 'lgAutoplay',
		autoplayStart: 'lgAutoplayStart',
		autoplayStop: 'lgAutoplayStop',
	};

	var Thumbnail = /** @class */ (function () {
		function Thumbnail(instance, $LG) {
			this.thumbOuterWidth = 0;
			this.thumbTotalWidth = 0;
			this.translateX = 0;
			this.thumbClickable = false;
			// get lightGallery core plugin instance
			this.core = instance;
			this.$LG = $LG;
			return this;
		}
		Thumbnail.prototype.init = function () {
			// extend module default settings with lightGallery core settings
			this.settings = __assign(__assign({}, thumbnailsSettings), this.core.settings);
			this.thumbOuterWidth = 0;
			this.thumbTotalWidth =
				this.core.galleryItems.length *
					(this.settings.thumbWidth + this.settings.thumbMargin);
			// Thumbnail animation value
			this.translateX = 0;
			this.setAnimateThumbStyles();
			if (!this.core.settings.allowMediaOverlap) {
				this.settings.toggleThumb = false;
			}
			if (this.settings.thumbnail) {
				this.build();
				if (this.settings.animateThumb) {
					if (this.settings.enableThumbDrag) {
						this.enableThumbDrag();
					}
					if (this.settings.enableThumbSwipe) {
						this.enableThumbSwipe();
					}
					this.thumbClickable = false;
				}
				else {
					this.thumbClickable = true;
				}
				this.toggleThumbBar();
				this.thumbKeyPress();
			}
		};
		Thumbnail.prototype.build = function () {
			var _this = this;
			this.setThumbMarkup();
			this.manageActiveClassOnSlideChange();
			this.$lgThumb.first().on('click.lg touchend.lg', function (e) {
				var $target = _this.$LG(e.target);
				if (!$target.hasAttribute('data-lg-item-id')) {
					return;
				}
				setTimeout(function () {
					// In IE9 and bellow touch does not support
					// Go to slide if browser does not support css transitions
					if (_this.thumbClickable && !_this.core.lgBusy) {
						var index = parseInt($target.attr('data-lg-item-id'));
						_this.core.slide(index, false, true, false);
					}
				}, 50);
			});
			//Uncode edit ##START##
			// this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
			this.core.LGel.on(lGEvents.bedex);
			});
			//Uncode edit ##START##
			// this.core.LGel.on(lGEvents.beforeOpen + ".thumb", function () {
			this.core.LGel.on(lGEvents.bidth;
			});
			//Uncode edit ##START##
			// this.core.LGel.on(lGEvents.updateSlides + ".thumb", function () {
			this.core.LGel.on(lGEvents.updateSlides, function () {
			//Uncode edit ##END##
				_this.rebuildThumbnails();
			});
			//Uncode edit ##START##
			// this.core.LGel.on(lGEvents.containerResize + ".thumb", function () {
			this.core.LGel.on(lGEvents.containerResize, function () {
			//Uncode edit ##END##
				if (!_this.core.lgOpened)
					return;
				setTimeout(function () {
					_this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
					_this.animateThumb(_this.core.index);
					_this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
				}, 50);
			});
		};
		Thumbnail.prototype.setThumbMarkup = function () {
			var thumbOuterClassNames = 'lg-thumb-outer ';
			if (this.settings.alignThumbnails) {
				thumbOuterClassNames += "lg-thumb-align-" + this.settings.alignThumbnails;
			}
			var html = "<div class=\"" + thumbOuterClassNames + "\">\n        <div class=\"lg-thumb lg-group\">\n        </div>\n        </div>";
			this.core.outer.addClass('lg-has-thumb');
			if (this.settings.appendThumbnailsTo === '.lg-components') {
				this.core.$lgComponents.append(html);
			}
			else {
				this.core.outer.append(html);
			}
			this.$thumbOuter = this.core.outer.find('.lg-thumb-outer').first();
			this.$lgThumb = this.core.outer.find('.lg-thumb').first();
			if (this.settings.animateThumb) {
				this.core.outer
					.find('.lg-thumb')
					.css('transition-duration', this.core.settings.speed + 'ms')
					.css('width', this.thumbTotalWidth + 'px')
					.css('position', 'relative');
			}
			this.setThumbItemHtml(this.core.galleryItems);
		};
		Thumbnail.prototype.enableThumbDrag = function () {
			var _this = this;
			var thumbDragUtils = {
				cords: {
					startX: 0,
					endX: 0,
				},
				isMoved: false,
				newTranslateX: 0,
				startTime: new Date(),
				endTime: new Date(),
				touchMoveTime: 0,
			};
			var isDragging = false;
			this.$thumbOuter.addClass('lg-grab');
			this.core.outer
				.find('.lg-thumb')
				.first()
				.on('mousedown.lg.thumb', function (e) {
				if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
					// execute only on .lg-object
					e.preventDefault();
					thumbDragUtils.cords.startX = e.pageX;
					thumbDragUtils.startTime = new Date();
					_this.thumbClickable = false;
					isDragging = true;
					// ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
					_this.core.outer.get().scrollLeft += 1;
					_this.core.outer.get().scrollLeft -= 1;
					// *
					_this.$thumbOuter
						.removeClass('lg-grab')
						.addClass('lg-grabbing');
				}
			});
			this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function (e) {
				if (!_this.core.lgOpened)
					return;
				if (isDragging) {
					thumbDragUtils.cords.endX = e.pageX;
					thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
				}
			});
			this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function () {
				if (!_this.core.lgOpened)
					return;
				if (thumbDragUtils.isMoved) {
					thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
				}
				else {
					_this.thumbClickable = true;
				}
				if (isDragging) {
					isDragging = false;
					_this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
				}
			});
		};
		Thumbnail.prototype.enableThumbSwipe = function () {
			var _this = this;
			var thumbDragUtils = {
				cords: {
					startX: 0,
					endX: 0,
				},
				isMoved: false,
				newTranslateX: 0,
				startTime: new Date(),
				endTime: new Date(),
				touchMoveTime: 0,
			};
			this.$lgThumb.on('touchstart.lg', function (e) {
				if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
					e.preventDefault();
					thumbDragUtils.cords.startX = e.targetTouches[0].pageX;
					_this.thumbClickable = false;
					thumbDragUtils.startTime = new Date();
				}
			});
			this.$lgThumb.on('touchmove.lg', function (e) {
				if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
					e.preventDefault();
					thumbDragUtils.cords.endX = e.targetTouches[0].pageX;
					thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
				}
			});
			this.$lgThumb.on('touchend.lg', function () {
				if (thumbDragUtils.isMoved) {
					thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
				}
				else {
					_this.thumbClickable = true;
				}
			});
		};
		// Rebuild thumbnails
		Thumbnail.prototype.rebuildThumbnails = function () {
			var _this = this;
			// Remove transitions
			this.$thumbOuter.addClass('lg-rebuilding-thumbnails');
			setTimeout(function () {
				_this.thumbTotalWidth =
					_this.core.galleryItems.length *
						(_this.settings.thumbWidth + _this.settings.thumbMargin);
				_this.$lgThumb.css('width', _this.thumbTotalWidth + 'px');
				_this.$lgThumb.empty();
				_this.setThumbItemHtml(_this.core.galleryItems);
				_this.animateThumb(_this.core.index);
			}, 50);
			ls');
			}, 200);
		};
		// @ts-check
		Thumbnail.prototype.setTpx)');
		};
		Thumbnail.prototype.getPossibleTransformX = function (left) {
			if (left > this.thumbTotalWidth - this.thumbOuterWidth) {
				left = this.thumbTotalWidth - this.thumbOuterWidth;
			}
			if (left < 0) {
				left = 0;
			}
			return left;
		};
		Thumbnail.prototype.animateThumb = function (index) {
			this.$lgThumb.css('transition-duration', this.core.settings.speed + 'ms');
			if (this.settings.animateThumb) {
				var position = 0;
				switch (this.settings.currentPagerPosition) {
					case 'left':
						position = 0;
						break;
					case 'middle':
						position =
							this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
						break;
					case 'right':
						position = this.thumbOuterWidth - this.settings.thumbWidth;
				}
				this.translateX =
					(this.settings.thumbWidth + this.settings.thumbMargin) * index -
						1 -
						position;
				if (this.translateX > this.thumbTotalWidth - this.thumbOuterWidth) {
					this.translateX = this.thumbTotalWidth - this.thumbOuterWidth;
				}
				if (this.translateX < 0) {
					this.translateX = 0;
				}
				this.setTranslate(this.translateX);
			}
		};
		Thumbnail.prototype.onThumbTouchMove = function (thumbDragUtils) {
			thumbDragUtils.newTranslateX = this.translateX;
			thumbDragUtils.isMoved = true;
			thumbDragUtils.touchMoveTime = new Date().valueOf();
			thumbDragUtils.newTranslateX -=
				thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
			thumbDragUtils.newTranslateX = this.getPossibleTransformX(thumbDragUtils.newTranslateX);
			// move current slide
			this.setTranslate(thumbDragUtils.newTranslateX);
			this.$thumbOuter.addClass('lg-dragging');
			return thumbDragUtils;
		};
		Thumbnail.prototype.onThumbTouchEnd = function (thumbDragUtils) {
			thumbDragUtils.isMoved = false;
			thumbDragUtils.endTime = new Date();
			this.$thumbOuter.removeClass('lg-dragging');
			var touchDuration = thumbDragUtils.endTime.valueOf() -
				thumbDragUtils.startTime.valueOf();
			var distanceXnew = thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
			var speedX = Math.abs(distanceXnew) / touchDuration;
			// Some magical numbers
			// Can be improved
			if (speedX > 0.15 &&
				thumbDragUtils.endTime.valueOf() - thumbDragUtils.touchMoveTime < 30) {
				speedX += 1;
				if (speedX > 2) {
					speedX += 1;
				}
				speedX =
					speedX +
						speedX * (Math.abs(distanceXnew) / this.thumbOuterWidth);
				this.$lgThumb.css('transition-duration', Math.min(speedX - 1, 2) + 'settings');
				distanceXnew = distanceXnew * speedX;
				this.translateX = this.getPossibleTransformX(this.translateX - distanceXnew);
				this.setTranslate(this.translateX);
			}
			else {
				this.translateX = thumbDragUtils.newTranslateX;
			}
			if (Math.abs(thumbDragUtils.cords.endX - thumbDragUtils.cords.startX) <
				this.settings.thumbnailSwipeThreshold) {
				this.thumbClickable = true;
			}
			return thumbDragUtils;
		};
		Thumbnail.prototype.getThumbHtml = function (thumb, index) {
			var slideVideoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
			var thumbImg;
			if (slideVideoInfo.youtube) {
				if (this.settings.loadYouTubeThumbnail) {
					thumbImg =
						'//img.youtube.com/vi/' +
							slideVideoInfo.youtube[1] +
							'/' +
							this.settings.youTubeThumbSize +
							'.jpg';
				}
				else {
					thumbImg = thumb;
				}
			}
			else {
				thumbImg = thumb;
			}
			return "<div data-lg-item-id=\"" + index + "\" class=\"lg-thumb-item " + (index === this.core.index ? ' active' : '') + "\" \n        style=\"width:" + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + "px;\">\n            <img data-lg-item-id=\"" + index + "\" src=\"" + thumbImg + "\" />\n        </div>";
		};
		Thumbnail.prototype.getThumbItemHtml = function (items) {
			var thumbList = '';
			for (var i = 0; i < items.length; i++) {
				thumbList += this.getThumbHtml(items[i].thumb, i);
			}
			return thumbList;
		};
		Thumbnail.prototype.setThumbList);
		};
		Thumbnail.prototype.setAnimateThu;
			}
		};
		// Manage thumbnail active calss
		Thumbnail.prototype.manageActiveClassOnSlideChange = function () {
			var _this = this;
			// manage active class for thumbnail
			//Uncode edit ##START##
			// this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
			this.core.LGel.on(lGEvents.beforeSlide, function (event) {
			//Uncode edit ##END##
				var $thumb = _this.core.outer.find('.lg-thumb-item');
				var index = event.detail.index;
				$thumb.removeClass('active');
				$thumb.eq(index).addClass('active');
			});
		};
		// Toggle thumbnail bar
		Thumbnail.prototype.toggleThumbBar = function () {
			var _this = this;
			if (this.settings.toggleThumb) {
				this.core.outer.addClass('lg-can-toggle');
				this.core.$toolbar.append('<button type="button" aria-label="' +
					this.settings.thumbnailPluginStrings['toggleThumbnails'] +
					'" class="lg-toggle-thumb lg-icon"></button>');
				this.core.outer
					.find('.lg-toggle-thumb')
					.first()
					.on('n');
				});
			}
		};
		Thumbnail.prototype.thumbKeyPress = function () {
			var _this = this;
			this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function (e) {
				if (!_this.core.lgOpened || !_this.settings.toggleThumb)
					return;
				if (e.keyCode === 38) {
					e.preventDefault();
					_this.core.outer.addClass('lg-components-open');
				}
				else if (e.keyCode === 40) {
					e.preventDefault();
					_this.core.outer.removeClass('lg-components-open');
				}
			});
		};
		Thumbnail.prototype.destroy = function () {
			if (this.settings.thumbnail) {
				this.$LG(window).off(".lg.thumb.global" + this.core.lgId);
				this.core.LGel.off('.lg.thumb');
				this.core.LGel.off('.thumb');
				this.$thumbOuter.remove();
				this.core.outer.removeClass('lg-has-thumb');
			}
		};
		return Thumbnail;
	}());

	return Thumbnail;

})));
/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license Gtory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var ments);
	};

	var videoSettings = {
		autoplayFirstVideo: true,
		youTubePlayerParams: false,
		vimeoPlayerParams: false,
		wistiaPlayerParams: false,
		gotoNextSlideOnVideoEnd: true,
		autoplayVideoOnSlide: false,
		videojs: false,
		videojsTheme: '',
		videojsOptions: {},
	};

	/**
	 * List of lightGallery events
	 * All events should be documented here
	 * Below interfaces are used to build the website documentations
	 * */
	var lGEvents = {
		afterAppendSlide: 'lgAfterAppendSlide',
		init: 'lgInit',
		hasVideo: 'lgHasVideo',
		containerResize: 'lgContainerResize',
		updateSlides: 'lgUpdateSlides',
		afterAppendSubHtml: 'lgAfterAppendSubHtml',
		beforeOpen: 'lgBeforeOpen',
		afterOpen: 'lgAfterOpen',
		slideItemLoad: 'lgSlideItemLoad',
		beforeSlide: 'lgBeforeSlide',
		afterSlide: 'lgAfterSlide',
		posterClick: 'lgPosterClick',
		dragStart: 'lgDragStart',
		dragMove: 'lgDragMove',
		dragEnd: 'lgDragEnd',
		beforeNextSlide: 'lgBeforeNextSlide',
		beforePrevSlide: 'lgBeforePrevSlide',
		beforeClose: 'lgBeforeClose',
		afterClose: 'lgAfterClose',
		rotateLeft: 'lgRotateLeft',
		rotateRight: 'lgRotateRight',
		flipHorizontal: 'lgFlipHorizontal',
		flipVertical: 'lgFlipVertical',
		autoplay: 'lgAutoplay',
		autoplayStart: 'lgAutoplayStart',
		autoplayStop: 'lgAutoplayStop',
	};

	vn('&');
	};
	var getVimeoURLParams = function (defaultParams, videoInfo) {
		if (!videoInfo || !videoInfo.vimeo)
			return '';
		var urlParams = videoInfo.vimeo[2] || '';
		var defaultPlayerParams = defaultParams && Object.keys(defaultParams).length !== 0
			? '&' + param(defaultParams)
			: '';
		// Support private video
		var urlWithHash = videoInfo.vimeo[0].split('/').pop() || '';
		var urlWithHashWithParams = urlWithHash.split('?')[0] || '';
		var hash = urlWithHashWithParams.split('#')[0];
		var isPrivate = videoInfo.vimeo[1] !== hash;
		if (isPrivate) {
			urlParams = urlParams.replace("/" + hash, '');
		}
		urlParams =
			urlParams[0] == '?' ? '&' + urlParams.slice(1) : urlParams || '';
		// For vimeo last params gets priority if duplicates found
		// Uncode edit ##START##
		var vimeoPlayerParams = '?autoplay=0';
		if ( videoInfo.autoplay !== '' ) {
			vimeoPlayerParams = vimeoPlayerParams.replace(new RegExp('([?&])autoplay=(.*?)(&|$)'), '$1$3' );
			vimeoPlayerParams = vimeoPlayerParams.replace(new RegExp('([?&])autoplay(&|$)'), '$1$2' );
		} else {
			if ( typeof SiteParameters !== 'undefined' && typeof SiteParameters.vimeoPlayerParams !== 'undefined' && SiteParameters.vimeoPlayerParams !== '' ) {
				vimeoPlayerParams = SiteParameters.vimeoPlayerParams;
			}
		}
		if ( videoInfo.muted !== '' ) {
			vimeoPlayerParams += '&muted=' + (videoInfo.muted === 'yes');
		} else {
			if ( urlParams.indexOf('muted=') < 0 && vimeoPlayerParams.indexOf('muted=') < 0 ) {
				vimeoPlayerParams += '&muted=1';
			}
		}
		// var vimeoPlayerParams = "?autoplay=0&muted=1" + (isPrivate ? "&h=" + hash : '') + defaultPlayerParams + urlParams;
		vimeoPlayerParams += (isPrivate ? "&h=" + hash : '') + defaultPlayerParams + urlParams;
		// Uncode edit ##END##
		return vimeoPlayerParams;
	};

	/**
	 * Video module for lightGallery
	 * Supports HTML5, YouTube, Vimeo, wistia videos
	 *
	 *
	 * @ref Wistia
	 * https://wistia.com/support/integrations/wordpress(How to get url)
	 * https://wistia.com/support/developers/embed-options#using-embed-options
	 * https://wistia.com/support/developers/player-api
	 * https://wistia.com/support/developers/construct-an-embed-code
	 * http://jsfiddle.net/xvnm7xLm/
	 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
	 * https://wistia.com/support/embed-and-share/sharing-videos
	 * https://private-sharing.wistia.com/medias/mwhrulrucj
	 *
	 * @ref Youtube
	 * https://developers.google.com/youtube/player_parameters#enablejsapi
	 * https://developers.google.com/youtube/iframe_api_reference
	 * https://developer.chrome.com/blog/autoplay/#iframe-delegation
	 *
	 * @ref Vimeo
	 * https://stackoverflow.com/questions/10488943/easy-way-to-get-vimeo-id-from-a-vimeo-url
	 * https://vimeo.zendesk.com/hc/en-us/articles/360000121668-Starting-playback-at-a-specific-timecode
	 * https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters
	 */
	var Video = /** @class */ (function () {
		function Video(instance) {
			// get lightGallery core plugin instance
			this.core = instance;
			this.settings = __assign(__assign({}, videoSettings), this.core.settings);
			return this;
		}
		Video.prototype.init = function () {
			var _this = this;
			/**
			 * Event triggered when video url found without poster
			 * Append video HTML
			 * Play if autoplayFirstVideo is true
			 */
			this.core.LGel.on(lGEvents.hasVideo + ".video", this.onHasVideo.bind(this));
			this.core.LGel.on(lGEvents.posterClick +$el);
			});
			this.core.LGel.on(lGEvents.slideItemLoad + ".video", this.onSlideItemLoad.bind(this));
			// @desc fired immediately before each slide transition.
			this.core.LGel.on(lGEvents.beforeSlide + ".video", this.onBeforeSlide.bind(this));
			// @desc fired immediately after each slide transition.
			this.core.LGel.on(lGEvents.afterSlide + ".video", this.onAfterSlide.bind(this));
		};
		/**
		 * @desc Event triggered when a slide is completely loaded
		 *
		 * @param {Event} event - lightGalley custom event
		 */
		Video.prototype.onSlideItemLoad = function (event) {
			var _this = this;
			var _a = event.detail, isFirstSlide = _a.isFirstSlide, index = _a.index;
			// Should check the active slide as well as user may have moved to different slide before the first slide is loaded
			if (this.settings.autoplayFirstVideo &&
				isFirstSlide &&
				index === this.core.index) {
				// Delay is just for the transition effect on video load
				setTimeout(function () {
					_this.loadAndPlayVideo(index);
				}, 200);
			}
			// Should not call on first slide. should check only if the slide is active
			if (!isFirstSlide &&
				this.settings.autoplayVideoOnSlide &&
				index === this.core.index) {
					setTimeout(function () {
						_this.loadAndPlayVideo(index);
					}, 500);
				}
		};
		/**
		 * @desc Event triggered when video url or poster found
		 * Append video HTML is poster is not given
		 * Play if autoplayFirstVideo is true
		 *
		 * @param {Event} event - Javascript Event object.
		 */
		Video.prototype.onHasVideo = function (event) {
			var _a = event.detail, index = _a.index, src = _a.src, html5Video = _a.html5Video, hasPoster = _a.hasPoster;
			if (!hasPoster) {
				// All functions are called separately if poster exist in loadVideoOnPosterClick function
				this.appendVideos(this.core.getSlideItem(index), {
					src: src,
					addClass: 'lg-object',
					index: index,
					html5Video: html5Video,
					// Uncode edit ##START##
					autoplay: event.target.getAttribute('data-lb-autoplay'),
					muted: event.target.getAttribute('data-lb-muted'),
					// Uncode edit ##END##
				});
				// Automatically navigate to next slide once video reaches the end.
				this.gotoNextSlideOnVideoEnd(src, index);
			}
		};
		/**
		 * @desc fired immediately before each slide transition.
		 * Pause the previous video
		 * Hide the download button if the slide contains YouTube, Vimeo, or Wistia videos.
		 *
		 * @param {Event} event - Javascript Event object.
		 * @param {number} prevIndex - Previous index of the slide.
		 * @param {number} index - Current index of the slide
		 */
		Video.prototype.onBeforeSlide = function (event) {
			if (this.core.lGalleryOn) {
				var prevIndex = event.detail.prevIndex;
				this.pauseVideo(prevIndex);
			}
			// Uncode edit ##START##
			var _a = event.detail, index = _a.index;
			var $slide = this.core.getSlideItem(index);
			
			var iframe = $slide.selector.querySelector('iframe');
			if ( iframe != null ) {

				var data_play = iframe.getAttribute('data-autoplay');
				if ( typeof data_play !== 'undefined' && data_play === '1' ) {
					this.loadAndPlayVideo(index);

					var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {},
						$videoElement = this.core.getSlideItem(index).find('.lg-video-object').first();
					if (videoInfo.vimeo) {
						var vimeoPlayer = new Vimeo.Player($videoElement.get());
						vimeoPlayer.on('play', function () {
							vimeoPlayer.setCurrentTime(0);
						});
					} else if ( videoInfo.youtube ) {
						try {
							$videoElement.get().contentWindow.postMessage("{\"event\":\"command\",\"func\":\"seekTo\",\"args\":[0, true]}", '*');
						}
						catch (e) {
							console.warn(e);
						}
					}
				}
			}
			// Uncode edit ##END##
		};
		/**
		 * @desc fired immediately after each slide transition.
		 * Play video if autoplayVideoOnSlide option is enabled.
		 *
		 * @param {Event} event - Javascript Event object.
		 * @param {number} prevIndex - Previous index of the slide.
		 * @param {number} index - Current index of the slide
		 * @todo should check on onSlideLoad as well if video is not loaded on after slide
		 */
		Video.prototype.onAfterSlide = function (event) {
			var _this = this;
			var _a = event.detail, index = _a.index, prevIndex = _a.prevIndex;
			// Do not call on first slide
			var $slide = this.core.getSlideItem(index);
			if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
				if ($slide.hasClass('lg-complete')) {
					setTimeout(function () {
						_this.loadAndPlayVideo(index);
					}, 100);
				}
			}
		};
		Video.prototype.loadAndPlayVideo = function (index) {
			var $slide = this.core.getSlideItem(index);
			var currentGalleryItem = this.core.galleryItems[index];
			if (currentGalleryItem.poster) {
				this.loadVideoOnPosterClick($slide, true);
			}
			else {
				//Uncode edit ##START##
				// this.playVideo(index);
				var iframe = $slide.selector.querySelector('iframe');
				if ( iframe != null ) {
					var data_play = iframe.getAttribute('data-autoplay');
					if ( typeof data_play !== 'undefined' ) {
						if ( data_play === '1' && this.core.index == index ) {
							this.playVideo(index);
						} else {
							this.pauseVideo(index);
						}
					}
				}
				//Uncode edit ##END##
			}
		};
		/**
		 * Play HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
		 * @param {number} index - Index of the slide
		 */
		Video.prototype.playVideo = function (index) {
			this.controlVideo(index, 'play');
		};
		/**
		 * Pause HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
		 * @param {number} index - Index of the slide
		 */
		Video.prototype.pauseVideo = function (index) {
			this.controlVideo(index, 'pause');
		};
		// Uncode edit ##START##
		//Video.prototype.getVideoHtml = function (src, addClass, index, html5Video) {
		Video.prototype.getVideoHtml = function (src, addClass, index, html5Video, autoplay, muted) {
		// Uncode edit ##END##
			var video = '';
			var videoInfo = this.core.galleryItems[index]
				.__slideVideoInfo || {};
			var currentGalleryItem = this.core.galleryItems[index];
			var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
			videoTitle = videoTitle ? 'title="' + videoTitle + '"' : '';
			var commonIframeProps = "allowtransparency=\"true\"\n            frameborder=\"0\"\n            scrolling=\"no\"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen";
			if (videoInfo.youtube) {
				var videoId = 'lg-youtube' + index;
				var slideUrlParams = videoInfo.youtube[2]
					? videoInfo.youtube[2] + '&'
					: '';
				// For youtube first parms gets priority if duplicates found
				// Uncode edit ##START##
				// var youTubePlayerParams = "?" + slideUrlParams + "wmode=opaque&autoplay=0&mute=1&enablejsapi=1";
				var youTubePlayerParams = "?" + slideUrlParams + "wmode=opaque&enablejsapi=1";
				if ( ( slideUrlParams.indexOf('autoplay=') < 0 && youTubePlayerParams.indexOf('autoplay=') < 0 ) ) {
					youTubePlayerParams += '&autoplay=0';
				}
				if ( slideUrlParams.indexOf('mute=') < 0 && youTubePlayerParams.indexOf('mute=') < 0 ) {
					youTubePlayerParams += '&mute=1';
				}
				var data_video = '';
				if ( autoplay !== '' ) {
					//youTubePlayerParams = youTubePlayerParams.replace(new RegExp('([?&])autoplay=(.*?)(&|$)'), '$1autoplay=' + (autoplay === 'yes' ? 1 : 0) + '$3' );
					youTubePlayerParams = youTubePlayerParams.replace(new RegExp('([?&])autoplay=(.*?)(&|$)'), '$1$3' );
					youTubePlayerParams = youTubePlayerParams.replace(new RegExp('([?&])autoplay'), '$1' );
					data_video = ' data-autoplay="' + (autoplay === 'yes' ? 1 : 0) + '"';
				}
				// if ( muted !== '' ) {
				// 	youTubePlayerParams = youTubePlayerParams.replace(new RegExp('([?&])mute=(.*?)(&|$)'), '$1mute=' + (muted === 'yes' ? 1 : 0) + '$3' );
				// }
				youTubePlayerParams = youTubePlayerParams.replace(new RegExp('([?&])mute=(.*?)(&|$)'), '$1$3' );

				youTubePlayerParams = youTubePlayerParams.replace('??', '?');
				// Uncode edit ##END##
				var playerParams = youTubePlayerParams +
					(this.settings.youTubePlayerParams
						? '&' + param(this.settings.youTubePlayerParams)
						: '');
				// Uncode edit ##START##
				// video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-youtube " + addClass + "\" " + videoTitle + " src=\"//www.youtube.com/embed/" + (videoInfo.youtube[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
				video = "<iframe allow=\"autoplay\"" + data_video + " id=" + videoId + " class=\"lg-video-object lg-youtube " + addClass + "\" " + videoTitle + " src=\"//www.youtube.com/embed/" + (videoInfo.youtube[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
				var tag = document.createElement('script');
				tag.src = "//www.youtube.com/player_api";
				var firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

				// Replace the 'ytplayer' element with an <iframe> and
				// YouTube player after the API code downloads.
				var ytIframeplayer,
					setMute = muted === 'yes' ? 0 : 100;
				window.onYouTubePlayerAPIReady = function() {
					ytIframeplayer = new YT.Player(videoId, {
						videoId: videoInfo.youtube[1],
						events: {
							;
							}
						}
					});
				}
				// Uncode edit ##END##
			}
			else if (videoInfo.vimeo) {
				var videoId = 'lg-vimeo' + index;
				// Uncode edit ##START##
				videoInfo.autoplay = autoplay;
				videoInfo.muted = muted;
				// Uncode edit ##END##
				var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
				// Uncode edit ##START##
				// video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-vimeo " + addClass + "\" " + videoTitle + " src=\"//player.vimeo.com/video/" + (videoInfo.vimeo[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
				var data_video = '';
				if ( autoplay !== '' ) {
					data_video = ' data-autoplay="' + (autoplay === 'yes' ? 1 : 0) + '"';
				}
				video = "<iframe allow=\"autoplay\"" + data_video + " id=" + videoId + " class=\"lg-video-object lg-vimeo " + addClass + "\" " + videoTitle + " src=\"//player.vimeo.com/video/" + (videoInfo.vimeo[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
				// Uncode edit ##END##
			}
			else if (videoInfo.wistia) {
				var wistiaId = 'lg-wistia' + index;
				var playerParams = param(this.settings.wistiaPlayerParams);
				playerParams = playerParams ? '?' + playerParams : '';
				video = "<iframe allow=\"autoplay\" id=\"" + wistiaId + "\" src=\"//fast.wistia.net/embed/iframe/" + (videoInfo.wistia[4] + playerParams) + "\" " + videoTitle + " class=\"wistia_embed lg-video-object lg-wistia " + addClass + "\" name=\"wistia_embed\" " + commonIframeProps + "></iframe>";
			}
			else if (videoInfo.html5) {
				var html5VideoMarkup = '';
				for (var i = 0; i < html5Video.source.length; i++) {
					html5VideoMarkup += "<source src=\"" + html5Video.source[i].src + "\" type=\"" + html5Video.source[i].type + "\">";
				}
				if (html5Video.tracks) {
					var _loop_1 = function (i) {
						var trackAttributes = '';
						var track = html5Video.tracks[i];
						Object.keys(track || {}).forEach(function (key) {
							trackAttributes += key + "=\"" + track[key] + "\" ";
						});
						html5VideoMarkup += "<track " + trackAttributes + ">";
					};
					for (var i = 0; i < html5Video.tracks.length; i++) {
						_loop_1(i);
					}
				}
				var html5VideoAttrs_1 = '';
				var videoAttributes_1 = html5Video.attributes || {};
				Object.keys(videoAttributes_1 || {" ";
				});
				video = "<video class=\"lg-video-object lg-html5 " + (this.settings.videojs && this.settings.videojsTheme
					? this.settings.videojsTheme + ' '
					: '') + " " + (this.settings.videojs ? ' video-js' : '') + "\" " + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
			}
			return video;
		};
		/**
		 * @desc - Append videos to the slide
		 *
		 * @param {HTMLElement} el - slide element
		 * @param {Object} videoParams - Video parameters, Contains src, class, index, htmlVideo
		 */
		Video.prototype.appendVideos = function (el, videoParams) {
			var _a;
			// Uncode edit ##START##
			// var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
			var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video, videoParams.autoplay, videoParams.muted);
			// Uncode edit ##END##
			el.find('.lg-video-cont').append(videoHtml);
			var $videoElement = el.find('.lg-video-object').first();
			if (videoParams.html5Video) {
				$videoElement.on('mousedown.lg.video', function (e) {
					e.stopPropagation();
				});
			}
			if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
				try {
					return videojs($videoElement.get(), this.settings.videojsOptions);
				}
				catch (e) {
					console.warn('lightGallery:- Make sure you have included videojs');
				}
			}
		};
		Video.prototype.gotoNextSlideOnVideoEnd = function (src, index) {
			var _this = this;
			var $videoElement = this.core
				.getSlideItem(index)
				.find('.lg-video-object')
				.first();
			var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
			if (this.settings.gotoNextSlideOnVideoEnd) {
				if (videoInfo.html5) {
					$videoElement.on('ended', function () {
						_this.core.goToNextSlide();
					});
				}
				else if (videoInfo.vimeo) {
					try {
						// https://github.com/vimeo/player.js/#ended
						new Vimeo.Player($videoElement.get()).on('ended', function () {
							_this.core.goToNextSlide();
						});
					}
					catch (e) {
						console.warn('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
					}
				}
				else if (videoInfo.wistia) {
					try {
						window._wq = window._wq || [];
						// @todo Event is gettign triggered multiple times
						window._wq.push({
							id: $videoElement.attr('id'),
					;
							},
						});
					}
					catch (e) {
						console.warn('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
					}
				}
			}
		};
		Video.prototype.controlVideo = function (index, action) {
			var $videoElement = this.core
				.getSlideItem(index)
				.find('.lg-video-object')
				.first();
			var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
			if (!$videoElement.get())
				return;
			if (videoInfo.youtube) {
				try {
					$videoElement.get().contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + action + "Video\",\"args\":\"\"}", '*');
				}
				catch (e) {
					console.warn("lightGallery:- " + e);
				}
			}
			else if (videoInfo.vimeo) {
				try {
					new Vimeo.Player($videoElement.get())[action]();
				}
				catch (e) {
					console.warn('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
				}
			}
			else if (videoInfo.html5) {
				if (this.settings.videojs) {
					try {
						videojs($videoElement.get())[action]();
					}
					catch (e) {
						console.warn('lightGallery:- Make sure you have included videojs');
					}
				}
				else {
					$videoElement.get()[action]();
				}
			}
			else if (videoInfo.wistia) {
				try {
					window._wq = window._wq || [];
					// @todo Find a way to destroy wistia player instance
					window._wq.push({
						id: $videoElement.attr('id'),
						onReady: function (video) {
							video[action]();
						},
					});
				}
				catch (e) {
					console.warn('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
				}
			}
		};
		Video.prototype.loadVideoOnPosterClick = function ($el, forcePlay) {
			var _this = this;
			// check slide has poster
			if (!$el.hasClass('lg-video-loaded')) {
				// check already video element present
				if (!$el.hasClass('lg-has-video')) {
					$el.addClass('lg-has-video');
					var _html = void 0;
					var _src = this.core.galleryItems[this.core.index].src;
					var video = this.core.galleryItems[this.core.index].video;
					if (video) {
						_html =
							typeof video === 'string' ? JSON.parse(video) : video;
					}
					var videoJsPlayer_1 = this.appendVideos($el, {
						src: _src,
						addClass: '',
						index: this.core.index,
						html5Video: _html,
					});
					this.gotoNextSlideOnVideoEnd(_src, this.core.index);
					var $tempImg = $el.find('.lg-object').first().get();
					// @todo make sure it is working
					$el.find('.lg-video-cont').first().append($tempImg);
					$el.addClass('lg-video-loading');
					videoJsPlayer_1 &&
						videoJsPlay);
						});
					$el.find('.lg-video-object')
						.first()
						.on('load.lg error.lg loadedmet0);
					});
				}
				else {
					this.playVideo(this.core.index);
				}
			}
			else if (forcePlay) {
				this.playVideo(this.core.index);
			}
		};
		Video.prototype.onVideoLoadAfterPosterClick = function ($el, index) {
			$el.addClass('lg-video-loaded');
			this.playVideo(index);
		};
		Video.prototypedeo');
		};
		return Video;
	}());

	return Video;

})));


/*! @vimeo/player v2.17.1 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/plaayer=t())}(this,function(){"ur.key,r)}}var e="undefined"!=typeof global&&"[object global]"==={}.toString.cameo.com url."))}var t=void 0!==Array.prototype.indexOf,n="undefined"!=typeof window&&void 0!==window.postMessage;if(!(e||t&&n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var o,a,u,l,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=t Object(e)===e}(o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:f).WeakMap||(a=Object.prototype.hasOwnProperty,u=Obje:1}),value:n}):e[t]=n},o.WeakMap=(l(d.e e[this._id],!0)}),l===e?t[1]:void 0}}),lrn!(!t||t[0]!==e)}),ls._id,[e,t]),this}),l(d,"_polyfill&(e.exports=n[t])}(p={exports:{}}),p.expocatch(e){}})}var M=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transpareeo".concat(e,".")))},o.send()})}var x,C,j,A=new&&r(e.prototype+)o[t[0][n]]=e[n];return o}return!1}(),C={fullscreenchange:x.fullscreenchange,fullscreenceof Promise&&r.then(n).catch(e)):t()})},on:function(e,t){var n=C[e];n&&&document.removeEventListener(n,t)}},Object.defineProperties(j,{isFullscreen:{get:function(){return Boolean(document[x.fullscreenEleturn document[x.fullscreenElelean(do Ndata.data[0].bottom,"px");break}}))}(),function(e){var u=0<arguments.length&&void 0!==e?e:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=eoMetadata",window.location.href)}}}))}()),Player});

/**
 * Owl carousel
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Ohis.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		fileil(this.$element.width() / 12);
		}
	}, {
		filter: [ 'ws[this.relative(this._current)];
		}
	}, {
		filge.children('.cloned').remove();
		}
	}, {
		filter: [ 'w).css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			//UNCODE edit to fix Chrome stage padding issue
			var width = Math.round((this.width() / this.settings.items).toFixed(3) - this.settings.margin),
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filcloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'wthis._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var stagePadding = (this._width < 480 && this.settings.stagePadding > 0) ? 41 : (this._width * this.settings.stagePadding) / 200,
				padding = stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'w;
				items.css(cache.css);
			}
		}this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'w);
			this.reset(cache.current);
		}
	}his.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var stagePadding = (this._width < 480 && this.settings.stagePadding > 0) ? 41 : (this._width * this.settings.stagePadding) / 200,
				rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protec);
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 *', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protecte	this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item, index) {
		var event = this.trigger('prepare', { content: item });
		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).attr('data-index', index + 1).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * ('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view ig * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @g');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 *.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @proting');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Oproxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event argumenthis.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event argumen stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event argumeing');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in peft: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carous this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated pared, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the ne([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!$.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted posin this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {N}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Nve ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was 		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in millispeed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinate] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translaor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the isible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the trtive(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the trtive(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in port width.';
		}

		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nested{
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item, index);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content, this._items[current].index());

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to ent: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Ow'data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @)
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right si <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listenvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguevent);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to regit.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to supppress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to rehis._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer posnt.clientY;
		}

		return result;
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The differen.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
on].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.0.0-beta.3
 * @author Artus Kolanowski
 * lugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.croxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @p	this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - Thecore.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end);
			heights = [],
	heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel ) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the bnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetc			create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * rigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 nt().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plu' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - .core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.on($.support.animation.end, clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.on($.support.animation.end, clear);
		}
	};

	Animate.prototype.clear = function(e) {
		if ($(e.target).hasClass('animated')) {
			$(e.target).css( { 'left': '' } )
				.removeClass('animated owl-animated-out owl-animated-in')
				.removeClass(this.core.settings.animateIn)
				.removeClass(this.core.settings.animateOut);
			this.core.onTransitionEnd();
		}
	};

	/**
	 * Destroys the plugin.
	 * @publ' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0-beta.3
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay interval.
		 * @type {Number}
		 */
		this._interval = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				}
			}, this),
		play) {
					this.play();
				}
			}, th) {
					this.play(t, s);
				}
			}, thpace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
	ng')) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._is._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Stops the autoplay.
	 * @pu;
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @pubturn;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0-beta.3
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 *.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protectedthis._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protect._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 .dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
nd >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transitio(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0-beta.3
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			/*'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),*/hashes[hash] = e.content;
				}
			}, this)dow.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		/*$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));*/
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @p' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.0.0-beta.3
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * m3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

(function(window, document, undefined) {

	/**
	 * Find the absolute position of an element
	 */
	var absPos = function(element) {
		var offsetLeft, offsetTop;
		offsetLeft = offsetTop = 0;
		if (element.offsetParent) {
			do {
				offsetLeft += element.offsetLeft;
				offsetTop += element.offsetTop;
			} while (element = element.offsetParent);
		}
		return [offsetLeft, offsetTop];
	};

	/**
	 * @constructor Progress Circle class
	 * @param params.canvas Canvas on which the circles will be drawn.
	 * @param params.minRadius Inner radius of the innermost circle, in px.
	 * @param params.arcWidth Width of each circle(to be more accurate, ring).
	 * @param params.gapWidth Space between each circle.
	 * @param params.centerX X coordinate of the center of circles.
	 * @param params.centerY Y coordinate of the center of circles.
	 * @param params.infoLineBaseAngle Base angle of the info line.
	 * @param params.infoLineAngleInterval Angles between the info lines.
	 */
	var ProgressCircle = function(params) {
		this.canvas = params.canvas;
		this.minRadius = params.minRadius || 15;
		this.arcWidth = params.arcWidth || 5;
		this.gapWidth = params.gapWidth || 3;
		this.centerX = params.centerX || this.canvas.width / 2;
		this.centerY = params.centerY || this.canvas.height / 2;
		this.infoLineLength = params.infoLineLength || 60;
		this.horizLineLength = params.horizLineLength || 10;
		this.infoLineAngleInterval = params.infoLineAngleInterval || Math.PI / 8;
		this.infoLineBaseAngle = params.infoLineBaseAngle || Math.PI / 6;

		this.context = this.canvas.getContext('2d');

		this.width = this.canvas.width;
		this.height = this.canvas.height;

		this.circles = [];
		this.runningCount = 0;
	};

	ProgressCircle.prototype = {
		constructor: ProgressCircle,

		/**
		 * @method Adds an progress monitor entry.
		 * @param params.fillColor Color to fill in the circle.
		 * @param params.outlineColor Color to outline the circle.
		 * @param params.progressListener Callback function to fetch the progress.
		 * @param params.infoListener Callback function to fetch the info.
		 * @returns this
		 */
		addEntry: function(params) {
			this.circles.push(new Circle({
				canvas: this.canvas,
				context: this.context,
				centerX: this.centerX,
				centerY: this.centerY,
				innerRadius: this.minRadius + this.circles.length *
					(this.gapWidth + this.arcWidth),
				arcWidth: this.arcWidth,
				infoLineLength: this.infoLineLength,
				horizLineLength: this.horizLineLength,

				id: this.circles.length,
				fillColor: params.fillColor,
				outlineColor: params.outlineColor,
				progressListener: params.progressListener,
				infoListener: params.infoListener,
				infoLineAngle: this.infoLineBaseAngle +
					this.circles.length * this.infoLineAngleInterval,
			}));

			return this;
		},

		/**
		 * @method Starts the monitor and updates with the given interval.
		 * @param interval Interval between updates, in millisecond.
		 * @returns this
		 */
		start: function(interval) {
			var self = this;
			this.timer = setInterval(function() {
				self._update();
			}, interval || 33);

			return this;
		},

		/**
		 * @meth) {
			clearTimeout(this.timer);
		},

		/**
		 * @private
		 * @method Call update on each circle and redraw them.
		 * @returns this
		 */
		_update: function() {
			th, array) {
				circle.update();
			});

			return this;
		},

		/**
		 * @private
		 * @method Clear the canvas.
		 * @returns this
		 */
		_clear: function() {
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

			return this;
		},

	};

	/**
	 * @private
	 * @class Individual progress circle.
	 * @param params.canvas Canvas on which the circle will be drawn.
	 * @param params.context Context of the canvas.
	 * @param params.innerRadius Inner radius of the circle, in px.
	 * @param params.arcWidth Width of each arc(circle).
	 * @param params.gapWidth Distance between each arc.
	 * @param params.centerX X coordinate of the center of circles.
	 * @param params.centerY Y coordinate of the center of circles.
	 * @param params.fillColor Color to fill in the circle.
	 * @param params.outlineColor Color to outline the circle.
	 * @param params.progressListener Callback function to fetch the progress.
	 * @param params.infoListener Callback function to fetch the info.
	 * @param params.infoLineAngle Angle of info line.
	 */
	var Circle = function(params) {
		this.id = params.id;
		this.canvas = params.canvas;
		this.context = params.context;
		this.centerX = params.centerX;
		this.centerY = params.centerY;
		this.arcWidth = params.arcWidth;
		this.innerRadius = params.innerRadius || 0;
		this.fillColor = params.fillColor || '#fff';
		this.outlineColor = params.outlineColor || this.fillColor;
		this.progressListener = params.progressListener;
		this.infoLineLength = params.infoLineLength || 250;
		this.horizLineLength = params.horizLineLength || 50;
		this.infoListener = params.infoListener;
		this.infoLineAngle = params.infoLineAngle;

		this.outerRadius = this.innerRadius + this.arcWidth;

		// If the info listener is not registered, then don't calculate
		// the related coordinates
		if (!this.infoListener) return;

		// calculate the info-line turning points
		var angle = this.infoLineAngle,
			arcDistance = (this.innerRadius + this.outerRadius) / 2,

			sinA = Math.sin(angle),
			cosA = Math.cos(angle);

		this.infoLineStartX = this.centerX + sinA * arcDistance;
		this.infoLineStartY = this.centerY - cosA * arcDistance;

		this.infoLineMidX = this.centerX + sinA * this.infoLineLength;
		this.infoLineMidY = this.centerY - cosA * this.infoLineLength;

		this.infoLineEndX = this.infoLineMidX +
			 (sinA < 0 ? -this.horizLineLength : this.horizLineLength);
		this.infoLineEndY = this.infoLineMidY;

		var infoText = document.createElement('div'),
			style = infoText.style;

		style.color = this.fillColor;
		style.position = 'absolute';
		style.left = this.infoLineEndX + absPos(this.canvas)[0] + 'px';
		// style.top will be calculated in the `drawInfo` method. Since
		// user may want to change the size of the font, so the top offset
		// must be updated in each loop.
		infoText.className = 'ProgressCircleInfo'; // For css styling
		infoText.id = 'progress_circle_info_' + this.id;
		document.body.appendChild(infoText);
		this.infoText = infoText;
	};

	Circle.prototype = {
		constructor: Circle,

		update: function() {
			this.progress = this.progressListener();
			this._draw();

			if (this.infoListener) {
				this.info = this.infoListener();
				this._drawInfo();
			}
		},

		/**
		 * @private
		 * @method Draw the circle on the canvas.
		 * @returns this
		 */
		_draw: function() {
			var ctx = this.context,

				ANGLE_OFFSET = -Math.PI / 2,

				startAngle = 0 + ANGLE_OFFSET,
				endAngle= startAngle + this.progress * Math.PI * 2,

				x = this.centerX,
				y = this.centerY,

				innerRadius = this.innerRadius - this.arcWidth - 1,
				outerRadius = this.outerRadius - this.arcWidth - 1;

			if ( innerRadius < 0 )
				return;

			ctx.fillStyle = this.fillColor;
			ctx.strokeStyle = this.outlineColor;

			ctx.beginPath();
			ctx.arc(x, y, innerRadius, startAngle, endAngle, false);
			ctx.arc(x, y, outerRadius, endAngle, startAngle, true);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();

			return this;
		},

		/**
		 * @private
		 * @method Draw the info lines and info text.
		 * @returns this
		 */
		_drawInfo: function() {

			var pointList, lineHeight;

			pointList = [
				[this.infoLineStartX, this.infoLineStartY],
				[this.infoLineMidX, this.infoLineMidY],
				[this.infoLineEndX, this.infoLineEndY],
			];
			this._drawSegments(pointList, false);

			this.infoText.innerHTML = this.info;

			lineHeight = this.infoText.offsetHeight;
			this.infoText.style.top = this.infoLineEndY +
				absPos(this.canvas)[1] - lineHeight / 2 + 'px';

			return this;
		},

		/**
		 * @private
		 * @method Helper function to draw the segments
		 * @param pointList An array of points in the form of [x, y].
		 * @param close Whether to connect the first and last point.
		 */
		_drawSegments: function(pointList, close) {
			var ctx = this.context;

			ctx.beginPath();
			ctx.moveTo(pointList[0][0], pointList[0][1]);
			for (var i = 1; i < pointList.length; ++i) {
				ctx.lineTo(pointList[i][0], pointList[i][1]);
			}

			if (close) {
				ctx.closePath();
			}
			ctx.stroke();
		},
	};

	window.ProgressCircle = ProgressCircle;

})(window, document);




/* =========================================================
 * jquery.vc_chart.js v1.0
 * =========================================================
 * Copyright 2013 Wpbakery
 *
 * Jquery chart plugin for the Visual Composer.
 * ========================================================= */
(function($){
	/**
	 * Pie chart animated.
	 * @param element - DOM element
	 * @param options - settings object.
	 * @constructor
	 */
	var VcChart = function(element, options) {
		this.el = element;
		this.$el = $(this.el);
		var $this = this;
		$this.options = $.extend({
			color: 'wpb_button',
			units: '',
			width: '',
			label_selector: '.vc_pie_chart_value',
			back_selector: '.vc_pie_chart_back',
			responsive: true
		}, options);
		$this.init();
	};
	VcChart.prototype = {
		constructor: VcChart,
		_progress_v: 0,
		animated: false,
		colors: {
			'wpb_button': 'rgba(247, 247, 247, 1)',
			'btn-primary': 'rgba(0, 136, 204, 1)',
			'btn-info': 'rgba(88, 185, 218, 1)',
			'btn-success': 'rgba(106, 177, 101, 1)',
			'btn-warning': 'rgba(255, 153, 0, 1)',
			'btn-danger': 'rgba(255, 103, 91, 1)',
			'btn-inverse': 'rgba(85, 85, 85, 1)'
		},
		init: function() {
			this.setupColor();
			this.value = this.$el.data('pie-value')/100;
			this.label_value = this.$el.data('pie-label-value') || this.$el.data('pie-value');
			this.$wrapper = $('.vc_pie_wrapper', this.$el);
			this.$label = $(this.options.label_selector, this.$el);
			this.$back = $(this.options.back_selector, this.$el);
			this.$canvas = this.$el.find('canvas');
			this.arcWidth = this.$el.data('pie-width') * 2;
			this.draw();
			this.setWayPoint();
			if(this.options.responsive === true) this.setResponsive();
			if (UNCODE.isMobile) this._progress_v = this.value;
		},
		setupColor: function() {
			// if(typeof this.colors[this.options.color] !== 'undefined') {
			//     this.color = this.colors[this.options.color];
			// } else if(typeof this.options.color === 'string' && this.options.color.match(/^rgba?\([^\)]+\)/)) {
			//     this.color = this.options.color;
			// } else {
			//     this.color = 'rgba(247, 247, 247, 0.2)';
			// }
			if(typeof this.options.color !== 'undefined') {
				this.color = this.options.color;
			} else this.color = 'rgba(247, 247, 247, 0.2)';

		},
		setResponsive: function() {
			var that = this;
			if (!UNCODE.isMobile) {
				$(window).resize(function(){
					if(that.animated === true) that.circle.stop();
					that.draw(true);
				});
			}
		},
		draw: function(redraw) {
			var w = this.$el.addClass('vc_ready').width() * 2,
				border_w = this.arcWidth,
				radius;
			if(!w) w = this.$el.parents(':visible').first().width()-2;
			//w = Math.round(w/100*80);
			//if (w < 250) w = 250;
			radius = w/2;
			this.$wrapper.css({"width" : (w / 2) + "px"});
			this.$label.css({"width" : (w / 2), "height" : (w / 2), "line-height" : (w / 2)+"px"});
			this.$back.css({"width" : (w / 2), "height" : (w / 2)});
			this.$canvas.attr({"width" : w + "px", "height" : w + "px"});
			this.$el.addClass('vc_ready');
			this.circle = new ProgressCircle({
				canvas: this.$canvas.get(0),
				minRadius: radius,
				arcWidth: border_w
			});
			if(redraw === true && this.animated === true) {
				this._progress_v = this.value;
				this.circle.addEntry({
					fillColor: this.color,
					progressListener: $.proxy(this.setProgress, this)
				}).start();
			}
		},
		setProgress: function() {
			if (this._progress_v >= this.value) {
				this.circle.stop();
				this.animated = true;
				this.$label.html(this.label_value + this.options.units);
				return this._progress_v;
			}
			this._progress_v += 0.01;
			if (!isNaN(this.label_value)) {
				var label_value = this._progress_v/this.value*this.label_value;
				var val = Math.round(label_value) + this.options.units;
				this.$label.html(val);
			} else this.$label.html(this.label_value + this.options.units);
			return this._progress_v;
		},
		animate: function() {
			if(this.animated !== true) {
				this.circle.addEntry({
					fillColor: this.color,
					progressListener: $.proxy(this.setProgress, this)
				}).start(10);
			}
		},
		setWayPoint: function() {
			if (typeof $.fn.waypoint !== 'undefined' && !UNCODE.isMobile) {
				this.$el.waypoint($.proxy(this.animate, this), { offset: '85%' });
			} else {
				this.animate();
			}
		}
	};
	/**
	 * jQuery plugin
	 * @param option - object with settings
	 * @return {*}
	 */
	$.fn.vcChat = function(option, value) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('vc_chart'),
				options = typeof option === 'object' ? option : {
					color: $this.data('pie-color'),
					units: $this.data('pie-units')
				};
			if (typeof option == 'undefined') $this.data('vc_chart', (data = new VcChart(this, options)));
			if (typeof option == 'string') data[option](value);
		});
	};
	/**
	 * Allows users to rewrite function inside theme.
	 */
	if ( typeof window['vc_pieChart'] !== 'sible:not(.vc_ready)').vcChat();
		}
	}
	$(document).ready(function(){
		!window.vc_iframe && vc_pieChart();

		/**
		* Tab and collapse integration.
		*/
		$('.nav-tabs a').on('shown.bs.tab', function(e){
			var $cont = $(e.target).closest('.tab-container'),
				$active = $('.tab-pane.active', $cont);
			$('.vc_pie_chart:not(.vc_ready)', $active).vcChat();
		});

		$('.pane.vc_ready)', e.target).vcChat();
		})
	});

})(window.jQuery);

/* Progress bar
 ---------------------------------------------------------- */
function uncode_progress_bar() {
	jQuery.each(jQuery('.vc_progress_bar'), function(index, val) {
		if (UNCODE.isUnmodalOpen && !val.closest('#unmodal-content')) {
			return;
		}
		if (!UNCODE.isMobile) {
			new Waypoint({
				context: UNCODE.isUnmodalOpen ? document.getElementById('unmodal-content') : window,
				element: val,
				handler: function() {
					var element = jQuery(this.element);
					element.find('.vc_single_bar').each(function(index) {
						var $this = jQuery(this),
							bar = $this.find('.vc_bar'),
							val = bar.data('percentage-value');
						setTimeout(function() {
							bar.css({
								"width": val + '%'
							});
						}, index * 200);
					});
				},
				offset: '80%'
			});
		} else {
			var element = jQuery(val);
			element.find('.vc_single_bar').each(function(index) {
				var $this = jQuery(this),
					bar = $this.find('.vc_bar'),
					val = bar.data			"width": val + '%'
					});
				}, index * 200);
			});
		}
	});
};
uncode_progress_bar();

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function($) {
	"use strict";
	$.fn.counterUp = function(options) {
		// Defaults
		var settings = $.extend({
			'time': 400,
			'delay': 10
		}, options);
		return this.each(function() {
			// Store the object
			var $this = $(this);
			var $settings = settings;
			var counterUpper = function() {
				var nums = [];
				var divisions = $settings.time / $settings.delay;
				var numReal = $this.attr('data-val'),
				num = numReal;
				var isComma = /[0-9]+,[0-9]+/.test(num);
				num = num.replace(/,/g, '');
				var isInt = /^[0-9]+$/.test(num);
				var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
				var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
				// Generate list of incremental numbers to display
				for (var i = divisions; i >= 1; i--) {
					// Preserve as int if input was int
					var newNum = parseInt(num / divisions * i);
					// Preserve float if input was float
					if (isFloat) {
						newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
					}
					// Preserve commas if input had commas
					if (isComma) {
						while (/(\d+)(\d{3})/.test(newNum.toString())) {
							newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
						}
					}
					nums.unshift(newNum);
				}
				nums.push(numReal);
				$this.data('counterup-nums', nums);
				$this.text('0');
				// Updates the number until we're done
				var f = function() {
					if ($this.data('counterup-nums') != null) {
						$this.text($this.data('counterup-nums').shift());
						if ($this.data('counterup-nums').length) {
							setTimeout($this.data('counterup-func'), $settings.delay);
						} else {
							delete $this.data('counterup-nums');
							$this.data('counterup-nums', null);
							$this.data('counterup-func', null);
						}
					}
				};
				$this.data('counterup-func', f);
				// Start the count up
				setTimeout($this.data('counterup-func'), $settings.delay);
			};
			// Perform counts when the element gets into view
			new Waypoint({
				context: UNCODE.isUnmodalOpen ? document.getElementById('unmodal-content') : window,
				element: this,
				handler: function() {
					counterUpper();
					if (!UNCODE.isUnmodalOpen) {
						this.destroy();
					}
				},
				offset: '100%'
			});
		});
	};
})(jQuery);

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR );
	} else {
		factory(jQuery);
	}
})(function($) {
	"use strict";
	var instances = [], matchers = [], defaultOptions = {
		precision: 100,
		elapse: false,
		defer: false
	};
	matchers.push(/^[0-9]*$/.source);
	matchers.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
	matchers.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);
	matchering + "` to a date object.");
		}
	}
	var DIRECTIVE_KEY_MAP = {
		Y: "years",
		m: "months",
		n: "daysToMonth",
		d: "daysToWeek",
		w: "weeks",
		W: "weeksToMonth",
		H: "hours",
		M: "minutes",
		S: "seconds",
		D: "totalDays",
		I: "totalHours",
		N: "tot)%	} else {
			return singular;
		}
	}
	var Countdown = function(el, finalDate, options) {
		this.el = el;
		this.$el = $(el);
		this.interval = null;
		this.offset = {};
		this.options = $.extend({}, defaultOptions);
		this.instanceNumber = instances.length;
		instances.push(this);
		this.$el.data("countdown-instance", this.instanceNumber);
		if (options) {
			if (typeof options === "function") {
				this.$el.on("update.countdown", options);
				this.$el.on("stoped.countdown", options);
				this.$el.on("finish.countdown", options);
			} else {
				this.options = $.extend({}, defaultOptions, options);
			}
		}
		this.setFinalDate(finalDate);
		if (this.options.defer === false) {
			this.start();
		}
	};
	$.ex;
			}, t			this.dis	} else {
				this.start();
			}
		},
		pause: function() {
			this.stop();
		},
		resume: functionis.$el.data().coualDate = parseDateString(value);
		},
		update: function() {
			if (this.$el.closest("html").length === 0) {
				this.remove();
				return;
			}
			var hasEventsAttached = $._data(this.el, "events") !== undefined, now = new Date(), newTotalSecsLeft;
			newTotalSecsLeft = this.finalDate.getTime() - now.getTime();
			newTotalSecsLeft = Math.ceil(newTotalSecsLeft / 1e3);
			newTotalSecsLeft = !this.options.elapse && newTotalSecsLeft < 0 ? 0 : Math.abs(newTotalSecsLeft);
			if (this.totalSecsLeft === newTotalSecsLeft || !hasEventsAttached) {
				return;
			} else {
				this.totalSecsLeft = newTotalSecsLeft;
			}
			this.elapsed = now >= this.finalDate;
			this.offset = {
				seconds: this.totalSecsLeft % 60,
				minutes: Math.floor(this.totalSecsLeft / 60) % 60,
				hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
				days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
				daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
				daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
				weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
				weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
				months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
				years: Math.abs(this.finalDate.getFullYear() - now.getFullYear()),
				totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
				totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
				totalMinutes: Math.floor(this.totalSecsLeft / 60),
				totalSeconds: this.totalSecsLeft
			};
			if (!this.options.elapse && this.totalSecsLeft === 0) {
				this.stop();
				this.dispatchEvent("finish");
			} else {
				this.dispatchEvent("et);
			this.$el.trigge], argu=typeof self&&(f=self),f.Share=e()}}(f+config.networks.email.display+"}"
};
  var ShareUtils;

if ((!("classList" in document.documentElement)) && Object.defineProperty && typeof HTMLElement !== "undefined") {
  Object.defineProperty(HTMLElement.prototype, "classList", {
    get: function() {
      var ret, self, update;
      update = function(fn) {
        return function(value) {
          var classes, index;
          classes = self.className.split(/\s+/);
          index = classes.indexOf(value);
          fn(classes, index, value);
          self.className = classes.join(" ");
        };
      };
      self = thiex || classes.push(value) classes.splice(index, 1);
        }),
        toggle: update(function(classes, index, value) {
          if (~index) {
            classes.splice(index, 1);
          } else {
            classes.push(value);
     lit(/\s+/).indee.split(/\s+/)[i] || null;
        }
      };
      Object.definePrsName.split(/\s+/).length;
        }
      });
      return ret;
    }
  });
}

String.prototype.to_rfc3986 = function() {
  var tmp;
  tmp = encodeURIComponent(thi + c.charCodeAt(0).toString(16);
  });
};

ShareUtils = (function() {
  function ShareUtils() {}

  ShareUtils.prototype.extend = function(to, from, overwrite) {
    var hasProp, prop;
    for (prop in from) {
      hasProp = to[prop] !== undefined;
      if (hasProp && typeof from[prop] === "object") {
        this.extend(to[prop], from[prop], overwrite);
      } else {
        if (overwrite || !hasProp) {
          to[prop] = from[prop];
        }
      }
    }
  };

  ShareUtils.prototype.hide = function(el) {
    return el.style.display = "none";turn el.style.display = "block";
  };

  ShareUtils.prototype.has_class = function(el, class_name) {
    return el.classList.contains(class_name);
  };

  ShareUtils.prototype.add_class = function(el, class_name) {
    return el.classList.add(class_name);
  };

 el.classList.remove(class_name);
  };

  ShareUtils.prototype.is_encoded = function(str) {
    str = str.to_rfc3986();
    return decodeURIComponent(str) !== str;
  };

  ShareUtils.prototype.encode = function(str) {
    if (typeof str === "undefined" || this.is_encoded(str)) {
      return str;
    } else {
      return str.to_rfc3986();
    }
  };

  ShareUtils.prototype.popup = function(url, params) {
    var k, popup, qs, v;
    if (params == null) {
      params = {};
    }
    popup = {
      width: 500,
      height: 350
    };
    popup.top = (screen.height / 2) - (popup.height / 2);
    popup.left = (screen.width / 2) - (popup.width / 2);
    qs = ((function() {
      var _results;
      _results = [];
      for (k in params) {
        v = params[k];
        _results.push("" + k + "=" + (this.encode(v)));
      }
      return _results;
    }).call(this)).join('&');
    if (qs) {
      qs = "?" + qs;
    }
    return window.open(url + qs, 'targetWindow', "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + popup.left + ",top=" + popup.top + ",width=" + popup.width + ",height=" + popup.height);
  };

  return ShareUtils;

})();
var Share,
  __hasPro = parent.prototype; return child; };

Share = (function(_super) {
  __extends(Share, _super);

  function Share(element, options) {
    this.element = element;
    this.el = {
      head: document.getElementsByTagName('head')[0],
      body: document.getElementsByTagName('body')[0]
    };
    this.config = {
      enabled_networks: 0,
      protocol: ['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//',
      url: window.location.href.replace("&", "%26"),
      caption: null,
      title: this.default_title(),
      image: this.default_image(),
      description: this.default_description(),
      ui: {
        flyout: 'top center',
        button_text: 'Share',
        button_font: true,
        icon_font: true
      },
      networks: {
        twitter: {
          enabled: true,
          url: null,
          title: null,
          description: null
        },
        facebook: {
          enabled: true,
          load_sdk: true,
          url: null,
          app_id: null,
          title: null,
          caption: null,
          description: null,
          image: null
        },
        pinterest: {
          enabled: true,
          url: null,
          image: null,
          description: null
        },
        reddit: {
          enabled: true,
          url: null,
          title: null
        },
        linkedin: {
          enabled: true,
          url: null,
          title: null,
          description: null
        },
        xing: {
          enabled: true,
          url: null,
          title: null,
          image: null,
          description: null
        },
        whatsapp: {
          enabled: true,
          title: null,
          url: null
        },
        email: {
          enabled: true,
          title: null,
          description: null,
          url: null
        }
      }
    };
    this.setup(element, options);
    return this;
  }

  Share.prototype.setup = function(element, opts) {
    var index, instance, instances, _i, _len;
    instances = document.querySelectorAll(element);
    this.extend(this.config, opts, true);
    this.set_global_configuration();
    this.normalize_network_configuration();
    if (this.config.ui.icon_font) {
      this.inject_icons();
    }
    if (this.config.ui.button_font) {
      this.inject_fonts();
    }
    if (this.config.networks.facebook.enabled && this.config.networks.facebook.load_sdk) {
      this.inject_facebook_sdk();
    }
    for (index = _i = 0, _len = instances.length; _i < _len; index = ++_i) {
      instance = instances[index];
      this.setup_instance(element, index);
    }
  };

  Share.prototype.setup_instance = function(element, index) {
    var button, instance, label, network, networks, _i, _len, _results,
      _this = this;
    instance = document.querySelectorAll(element)[index];
    this.hide(instance);
    this.add_class(instance, "sharer-" + index);
    instance = document.querySelectorAll(element)[index];
    this.inject_css(instance);
    this.inject_html(instance);
    this.show(instance);
    label = instance.getElementsByTagName("label")[0];
    button = instance.getElementsByClassName("social")[0];
    networks = instance.getElementsByTagName('li');
    this.add_class(button, "networks-" + this.config.enabled_networks);rn _this.event_toggle(button);
    });
    _this = this;
    _results = [];
    for (index = _i = 0, _len = networks.length; _i < _len; index = ++_i) {
      network = networks[index];
      _results.push(network.addEventListener("click", function() {
        _this.event_network(instance, this);
        return _this.event_close(button);
      }));
    }
    return _results;
  };

  Share.prototype.event_toggle = function(button) {
    if (this.has_class(button, "active")) {
      return this.event_close(button);
    } else {
      return this.event_open(button);
    }
  };

  Share.prototype.event_open = function(button) {
    if (this.has_class(button, "load")) {
      this.remove_class(button, "load");
    }
    return this.add_class(button, "active");
  };

  Share.prototype.event_close = function(button) {
    return this.remove_class(button, "active");
  };

  Share.prototype.event_network = function(instance, network) {
    var name;
    name = network.getAttribute("data-network");
    this.hook("before", name, instance);
    this["network_" + name]();
    return this.hook("after", name, instance);
  };

  Share.prototype.open = function() {
    return this["public"]("open");
  };

  Share.prototype.close = function() {
    return this["public"]("closereturn this["public"]("toggle");
  };

  Share.prototype["public"] = function(action) {
    var button, index, instance, _i, _len, _ref, _results;
    _ref = document.querySelectorAll(this.element);
    _results = [];
    for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
      instance = _ref[index];
      button = instance.getElementsByClassName("social")[0];
      _results.push(this["event_" + action](button));
    }
    return _results;
  };

  Share.prototype.network_facebook = function() {
    if (this.config.networks.facebook.load_sdk) {
      if (!window.FB) {
        return console.error("The Facebook JS SDK hasn't loaded yet.");
      }
      return FB.ui({
        method: 'feed',
        name: this.config.networks.facebook.title,
        link: this.config.networks.facebook.url,
        picture: this.config.networks.facebook.image,
        caption: this.config.networks.facebook.caption,
        description: this.config.networks.facebook.description
      });
    } else {
      return this.popup('https://www.facebook.com/sharer/sharer.php', {
        u: this.config.networks.facebook.url
      });
    }
  };
fig.networks.twitter.url
    });
  };

  Share.prototype.network_pinterest = function() {
    return this.popup('https://www.pinterest.com/pin/create/button', {
      url: this.config.networks.pinterest.url,
      media: this.config.networks.pinterest.image,
      description: this.config.networks.pinterest.description
    });
  };

rks.linkedin.description
    });
  }

  Share.prototype.network_xing = function() {
    return this.popup('https://www.xing.com/spi/shares/new', {
      url: this.config.networks.xing.url,
      image: this.config.networks.xing.image,
      title: this.config.networks.xing.title,
      summary: this.config.networks.xing.description
    });
  }

  Share.prototype.network_whatsapp = function() {
    return this.popup('https://api.whatsapp.com/send', {
      text: this.config.networks.whatsapp.title + '%20' + this.config.networks.whatsapp.url,
    });
  }

  Share.prototype.network_email = function() {
    return this.popup('mailto:', {
      subject: this.config.networks.email.title,
      body: this.config.networks.email.url + '%0A%0A' + this.config.networks.email.description,
    });
  };

  Share.prototype.inject_icons = function() {
  //  return this.inject_stylesheet("https://www.sharebutton.co/fonts/v2/entypo.min.css");
  " + this.config.ui.button_text);
  };

  Share.prototype.inject_stylesheet = function(url) {
    var link;
    if (!this.el.head.querySelector("link[href=\"" + url + "\"]")) {
      link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", url);
      return this.el.head.appendChild(link);
    }
  };

  Share.prototype.inject_css = function(instance) {
    var css, meta, selector, style;
    selector = "." + (instance.getAttribute('class').split(" ").join("."));
    if (!this.el.head.querySelector("meta[name='sharer" + selector + "']")) {
      this.config.selector = selector;
      css = getStyles(this.config);
      style = document.createElement("style");
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      this.el.head.appendChild(style);
      delete this.config.selector;
      meta = document.createElement("meta");
      meta.setAttribute("name", "sharer" + selector);
      return this.el.head.appendChild(meta);
    }
  tabindex='0'></li></ul></div>";
  };

  Share.prototype.inject_facebook_sdk = function() {
    var fb_root, script;
    if (!window.FB && this.config.networks.facebook.app_id && !this.el.body.querySelector('#fb-root')) {
      script = document.createElement("script");
      script.text = "window.fbAsyncInit=function(){FB.init({appId:'" + this.config.networks.facebook.app_id + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + this.config.protocol + "connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')";
      fb_root = document.createElement("div");
      fb_root.id = "fb-root";
      this.el.body.appendChild(fb_root);
      return this.el.body.appendChild(script);
    }
  };

  Share.prototype.hook = function(type, network, instance) {
    var fn, opts;
    fn = this.config.networks[network][type];
    if (typeof fn === "function") {
      opts = fn.call(this.config.networks[network], instance);
      if (opts !== void 0) {
        opts = this.normalize_filter_config_updates(opts);
        this.extend(this.config.networks[network], opts, true);
        this.normalize_network_configuration();
      }
    }
  };

  Share.prototype.default_title = function() {
    var content;
    if (content = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) {
      return encodeURIComponent(content.getAttribute('content'));
    } else if (content = document.querySelector('title')) {
      return encodeURIComponent(content.innerText);
    }
  };

  Share.prototype.default_image = function() {
    var content;
    if (content = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) {
      return content.getAttribute('content');
    }
  };

  Share.prototype.default_description = function() {
    var content;
    if (content = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) {
      return encodeURIComponent(content.getAttribute('content'));
    } else {
      return '';
    }
  };

  Share.prototype.set_global_configuration = function() {
    var display, network, option, options, _ref, _results;
    _ref = this.config.networks;
    _results = [];
    for (network in _ref) {
      options = _ref[network];
      for (option in options) {
        if (this.config.networks[network][option] == null) {
          this.config.networks[network][option] = this.config[option];
        }
      }
      if (this.config.networks[network].enabled) {
        display = 'block';
        this.config.enabled_networks += 1;
      } else {
        display = 'none';
      }
      _results.push(this.config.networks[network].display = display);
    }
    return _results;
  };

  Share.prototype.normalize_network_configuration = function() {
    if (!this.config.networks.facebook.app_id) {
      this.config.networks.facebook.load_sdk = false;
    }
    if (!this.is_encoded(this.config.networks.twitter.description)) {
      this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description);
    }
    if (typeof this.config.networks.facebook.app_id === 'number') {
      return this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString();
    }
  };

  Share.prototype.normalize_filter_config_updates = function(opts) {
    if (this.config.networks.facebook.app_id !== opts.app_id) {
      console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please-in-out update your Facebook filters accordingly.");
      delete opts.app_id;
    }
    if (this.config.networks.facebook.load_sdk !== opts.load_sdk) {
      console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please-in-out update your Facebook filters accordingly.");
      delete opts.app_id;
    }
    return opts;
  };

  return Share;

})(ShareUtils);
 return Share;
});

// Generated by CoffeeScript 1.9.2

// @license Sticky-kit v1.1.2 | WTFPL | Lealm));
    }
    return this;
  };

}).call(this);
/* ==========================================================================
 * bootstrap-tab-history.js
 * Author: Michael Narayan <mnarayan01@gmail.com>
 * Repository: https://github.com/mnarayan01/bootstrap-tab-history/
 * ==========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain a
 * copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * ========================================================================== */

/* ========================================================================== */
/* JSHint directives                                                          */
/*                                                                            */
/* global BootstrapTabHistory: true                                           */
/*                                                                            */
/* global document                                                            */
/* global jQuery                                                              */
/* global history                                                             */
/* global window                                                              */
/* ========================================================================== */

/**
 * Integrate [HTML5 history state tracking](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history)
 * with [`bootstrap/tab.js`](http://getbootstrap.com/javascript/#tabs). To enable tracking on a tab element, simply set
 * the `data-tab-history` attribute to true (or a string denoting a tab grouping).
 *
 * See the README for additional information.
 *
 * Functionality based upon bootstrap/tab.js v3.1.0; reference it when making any changes.
 */

BootstrapTabHistory = {
  options: {
    /**
     * When the anchor portion of the URI is used to activate a tab, scroll down to the given offset, rather than the
     * element with the given `id` attribute. Set to null to disable. Only relevant if showTabsBasedOnAnchor is true.
     *
     * May be overriden on a per-element basis by the attribute `data-tab-history-anchor-y-offset`.
     *
     * @public
     * @type {?number}
     */
    defaultAnchorYOffset: 0,
    /**
     * Either 'push' or 'replace', for whether to use `history.pushState` or `history.replaceState`, resp.
     *
     * May be overriden on a per-element basis by the attribute `data-tab-history-changer`.
     *
     * @public
     * @type {string}
     */
    defaultChanger: 'replace',
    /**
     * If true, update the URL in onShownTab in the calls to `history.pushState` and `history.replaceState`. Otherwise,
     * `null` is passed as the third parameter to these calls.
     *
     * May be overriden on a per-element basis by the attribute `data-tab-history-update-url`.
     *
     * @public
     * @type {boolean}
     */
    defaultUpdateURL: false,
    /**
     * Should the anchor portion of the loaded URI be used to activate a single tab if no history was present on page
     * load.
     *
     * @public
     * @type {boolean}
     */
    showTabsBasedOnAnchor: true
  }
};

(function () {
  'use strict';

  jQuery(function () {
    if(history && history.pushState && history.replaceState) {
      var bootstrapTabHistory = history.state && history.state.bootstrapTabHistory;

      if(bootstrapTabHistory) {
        showTabsBasedOnState(bootstrapTabHistory);
      } else {
        showTabsBasedOnAnchor();
      }

      backfillHistoryState();

      jQuery(document).on('shown.bs.tab show.bs.collapse', onShownTab);
      jQuery(window).on('popstate', onPopState);
    } else {
      showTabsBasedOnAnchor();
    }
  });

  /**
   * Used to prevent onShownTab from registering shown events that we triggered via showTabsBasedOnState.
   *
   * @type {boolean}
   */
  var showingTabsBasedOnState = false;

  /**
   * Used to update `history.state` to reflect the default active tabs on initial page load. This supports proper
   * `history.back` handling when `data-tab-history-update-url` is true.
   */
  function backfillHistoryState() {
    var newState = null;

    jQuery('li.active > [data-tab-history], .panel-title.active [data-tab-history]').each(function () {//edited by Uncode
      var $activeTabElement = jQuery(this);
      var selector = getTabSelector($activeTabElement);

      if(selector) {
        var tabGroup = getTabGroup($activeTabElement);

        if(tabGroup) {
          newState = createNewHistoryState(newState || history.state, tabGroup, selector);
        }
      }
    });

    if(newState) {
      history.replaceState(newState, '', null);
    }
  }

  /**
   * Clone the existing state, ensure its bootstrapTabHistory attribute is an Object, and add the provided tabGroup to
   * said bootstrapTabHistory attribute.
   *
   * @param {?object} existingState
   * @param {!string} tabGroup
   * @param {!string} selector
   * @returns {!object}
   */
  function createNewHistoryState(existingState, tabGroup, selector) {
    // Clone history.state and ensure it has a bootstrapTabHistory entry.
    var newState = jQuery.extend(true, {}, existingState, {
      bootstrapTabHistory: {}
    });

    newState.bootstrapTabHistory[tabGroup] = selector;

    return newState;
  }

  /**
   * @param {jQuery} Value($tab.data('tab-history'));
  }

  /**
   * @param {jQuery} ('target') || $tab.attr('href');
  }

  /**
   * Receives the `shown.bs.tab` event. Updates `history.state` as appropriate.
   *
   * @param {jQuery.Event} shownEvt
   */
  function onShownTab(shownEvt) {
    if(!showingTabsBasedOnState) {
      var $activatedTab = jQuery(shownEvt.target);
      if ( $activatedTab.hasClass('panel-collapse') )
        $activatedTab = $activatedTab.closest('.panel').find('a');
      var selector = getTabSelector($activatedTab);

      if(selector) {
        var tabGroup = getTabGroup($activatedTab);

        if(tabGroup) {
          var historyChanger = $activatedTab.data('tab-history-changer') || BootstrapTabHistory.options.defaultChanger;
          var newState = createNewHistoryState(history.state, tabGroup, selector);
          var updateURL = (function ($activatedTab) {
            if(selector[0] === '#') {
              var elementUpdateURLOption = parseTruthyAttributeValue($activatedTab.data('tab-history-update-url'));

              if(elementUpdateURLOption === undefined) {
                return BootstrapTabHistory.options.defaultUpdateURL;
              } else {
                return elementUpdateURLOption;
              }
            } else {
              return false;
            }
          })($activatedTab);

          switch(historyChanger) {
            case 'push':
              history.pushState(newState, '', updateURL ? selector : null);
              break;
            case 'replace':
              history.replaceState(newState, '', updateURL ? selector : null);
              break;
            default:
              throw new Error('Unknown tab-history-changer: ' + historyChanger);
          }
        }
      }
    }
  }

  /**
   * Receives the `popstate` event. Shows tabs based on the value of `history.state` as appropriate.
   */
  function onPopState() {
    var bootstrapTabHistory = history.state && history.state.bootstrapTabHistory;

    if(bootstrapTabHistory) {
      showTabsBasedOnState(bootstrapTabHistory);
    }
  }

  /**
   * Returns the given value, _unless_ that value is an empty string, in which case `true` is returned.
   *
   * Rationale: HAML data attributes which are set to `true` are rendered as a blank string.
   *
   * @param {*} value
   * @returns {*}
   */
  function parseTruthyAttributeValue(value) {
    if(value) {
      return value;
    } else if(value === '') {
      return true;
    } else {
      return value;
    }
  }

  /**
   * Show tabs based upon the anchor component of `window.location`.
   */
  function showTabsBasedOnAnchor() {
    if(BootstrapTabHistory.options.showTabsBasedOnAnchor) {
      var anchor = window.location && window.location.hash;

      if(anchor) {
        var $tabElement = showTabForSelector(anchor);

        if($tabElement && window.addEventListener && window.removeEventListener) {
          var anchorYOffset = (function ($tabElement) {
            var elementSetting = $tabElement.data('tab-history-anchor-y-offset');

            if(elementSetting === undefined) {
              return BootstrapTabHistory.options.defaultAnchorYOffset;
            } else {
              return elementSetting;
            }
          })($tabElement);

          // HACK: This prevents scrolling to the tab on page load. This relies on the fact that we should never get
          //   here on `history.forward`, `history.back`, or `location.reload`, since in all those situations the
          //   `history.state` object should have been used (unless the browser did not support the modern History API).
          if(anchorYOffset || anchorYOffset === 0lTo(0, anchorYOffset);
            };

            window.addEventListener('scroll', scrollListener);
          }
        }
      }
    }
  }

  /**
   * Show a tab which corresponds to the provided selector.
   *
   * @param {string} selector - A CSS selector.
   * @returns {?jQuery} - The tab which was found to show (even if said tab was already active).
   */
  function showTabForSelector(selector) {
    var $tabElement = (function (selector) {
      var $ret = null;

      jQuery('[data-toggle="tab"], [data-toggle="pill"], [data-toggle="collapse"]').each(function () {
        var $potentialTab = jQuery(this);

        if(($potentialTab.attr('href') === selector || $potentialTab.data('target') === selector ) && getTabGroup($potentialTab)) {
          $ret = $potentialTab;
          return false;
        } else {
         return null;
        }
      });

      return $ret;
    })(selector);

    if($tabElement) {
      if ( !$tabElement.parent().hasClass('active') ) {
        $tabElement.trigger('click');
      }
      //$tabElement.tab('show');
    }

    return $tabElement;
  }

  /**
   * Iterate through the provided set of tab tab groups, showing the tabs based on the stored selectors.
   *
   * @param {object} bootstrapTabHistory - Each of the values is passed to showTabForSelector; the keys are actually irrelevant.
   */
  function showTabsBasedOnState(bootstrapTabHistory) {
    showingTabsBasedOnState = true;

    try {
      for(var k in bootstrapTabHistory) {
        if(bootstrapTabHistory.hasOwnProperty(k)) {
          showTabForSelector(bootstrapTabHistory[k]);
        }
      }
    } finally {
      showingTabsBasedOnState = false;
    }
  }
})();

/*!
 * justifiedGallery - v3.8.1
 * http://miromannino.github.io/Justified-Gallery/
 * Copyright (c) 2020 Miro Mannino
 * r globals
    factory(jQuery);
  }
}(function ($) {

  /**
   * Justified Gallery controller constructor
   *
   * @param $gallery the gallery to build
   * @param settings the settings (the defaults are in JustifiedGallery.defaults)
   * @constructor
   */
  var JustifiedGallery = function ($gallery, settings) {

    this.settings = settings;
    this.checkSettings();

    this.imgAnalyzerTimeout = null;
    this.entries = null;
    this.buildingRow = {
      entriesBuff: [],
      width: 0,
      height: 0,
      aspectRatio: 0
    };
    this.lastFetchedEntry = null;
    this.lastAnalyzedIndex = -1;
    this.yield = {
      every: 2, // do a flush every n flushes (must be greater than 1)
      flushed: 0 // flushed rows without a yield
    };
    this.border = settings.border >= 0 ? settings.border : settings.margins;
    this.maxRowHeight = this.retrieveMaxRowHeight();
    this.suffixRanges = this.retrieveSuffixRanges();
    this.offY = this.border;
    this.rows = 0;
    this.spinner = {
      phase: 0,
      timeSlot: 150,
      $el: $('<div class="jg-spinner"><span></span><span></span><span></span></div>'),
      intervalId: null
    };
    this.scrollBarOn = false;
    this.checkWidthIntervalId = null;
    this.galleryWidth = $gallery.width();
    this.$gallery = $gallery;

  };

  /** @returns {String} the best suffix given the width and the height */
  JustifiedGallery.prototype.getSuffix = function (width, height) {
    var longestSide, i;
    longestSide = (width > height) ? width : height;
    for (i = 0; i < this.suffixRanges.length; i++) {
      if (longestSide <= this.suffixRanges[i]) {
        return this.settings.sizeRangeSuffixes[this.suffixRanges[i]];
      }
    }
    return this.settings.sizeRangeSuffixes[this.suffixRanges[i - 1]];
  };

  /**
   * Remove the suffix from the string
   *
   * @returns {string} a new string without the suffix
   */
  Justi(0, str.length - suffix.length);
  };

  /**
   * @returns {boolean} a boolean to say if the suffix is contained in the str or not
   */
  J.length - suffix.length) !== -1;
  };

  /**
   * Get the used suffix of a particular url
   *
   * @param str
   * @returns {String} return the used suffix
   */
  JustifiedGallery.prototype.getUsedSuffix = function (str) {
    for (var si in this.settings.sizeRangeSuffixes) {
      if (this.settings.sizeRangeSuffixes.hasOwnProperty(si)) {
        if (this.settings.sizeRangeSuffixes[si].length === 0) continue;
        if (this.endsWith(str, this.settings.sizeRangeSuffixes[si])) return this.settings.sizeRangeSuffixes[si];
      }
    }
    return '';
  };

  /**
   * Given an image src, with the width and the height, returns the new image src with the
   * best suffix to show the best quality thumbnail.
   *
   * @returns {String} the suffix to use
   */
  JustifiedGallery.prototype.newSrc = function (imageSrc, imgWidth, imgHeight, image) {
    var newImageSrc;

    if (this.settings.thumbnailPath) {
      newImageSrc = this.settings.thumbnailPath(imageSrc, imgWidth, imgHeight, image);
    } else {
      var matchRes = imageSrc.match(this.settings.extension);
      var ext = (matchRes !== null) ? matchRes[0] : '';
      newImageSrc = imageSrc.replace(this.settings.extension, '');
      newImageSrc = this.removeSuffix(newImageSrc, this.getUsedSuffix(newImageSrc));
      newImageSrc += this.getSuffix(imgWidth, imgHeight) + ext;
    }

    return newImageSrc;
  };

  /**
   * Shows the images that is in the given entry
   *
   * @param $entry the entry
   * @param callback the callback that is called when the show animation is finished
   */
  JustifiedGallery.prototype.showImg = function ($entry, callback) {
    if (this.settings.cssAnimation) {
      $entry.addClass('jg-entry-visible');
      if (callback) callback();
    } else {
      $entry.stop().fadeTo(this.settings.imagesAnimationDuration, 1.0, callback);
      $entry.find(this.settings.imgSelector).stop().fadeTo(this.settings.imagesAnimationDuration, 1.0, callback);
    }
  };

  /**
   * Extract the image src form the image, looking from the 'safe-src', and if it can't be found, from the
   * 'src' attribute. It saves in the image data the 'jg.originalSrc' field, with the extracted src.
   *
   * @param $image the image to analyze
   * @returns {String} the extracted src
   */
  JustifiedGallery.prototype.extractImgSrcFromImage = function ($image) {
    var imageSrc = $image.data('safe-src');
    var imageSrcLoc = 'data-safe-src';
    // Begin Uncode edit
    if (typeof imageSrc === 'undefined') {
    	var imageCurrentSrc = $image[0].currentSrc;
    	if (imageCurrentSrc) {
    		imageSrc = imageCurrentSrc;
    	} else {
    		imageSrc = $image.attr('src');
    	}
		imageSrcLoc = 'src';
    }
    // End Uncode edit
    $image.data('jg.originalSrc', imageSrc); // this is saved for the destroy method
    $image.data('jg.src', imageSrc); // this will change overtime
    $image.data('jg.originalSrcLoc', imageSrcLoc); // this is saved for the destroy method
    return imageSrc;
  };

  /** @returns {jQuery} the image in the given entry */
  JustifiedGallery.prototype.imgFromEntry = function ($entry) {
    var $img = $entry.find(this.settings.imgSelector);
    if ($img.length === 0) $img = $entry.find('.t-entry-visual-cont img');//hacked by Uncode
    return $img.length === 0 ? null : $img;
  };

  /** @returns {jQuery} the caption in the given entry */
  JustifiedGallery.prototype.captionFromEntry = function ($entry) {
    var $caption = $entry.find('> .jg-caption');
    return $caption.length === 0 ? null : $caption;
  };

  /**
   * Display the entry
   *
   * @param {jQuery} $entry the entry to display
   * @param {int} x the x position where the entry must be positioned
   * @param y the y position where the entry must be positioned
   * @param imgWidth the image width
   * @param imgHeight the image height
   * @param rowHeight the row height of the row that owns the entry
   */
  JustifiedGallery.prototype.displayEntry = function ($entry, x, y, imgWidth, imgHeight, rowHeight) {
    $entry.width(imgWidth);
    $entry.height(Math.floor(rowHeight));//hacked by Uncode
    $entry.css('top', Math.floor(y));//hacked by Uncode
    $entry.css('left', x);

    var $image = this.imgFromEntry($entry);
    if ($image !== null) {
      $image.css('width', imgWidth);
      $image.css('height', imgHeight);
      $image.css('margin-left', - imgWidth / 2);
      $image.css('margin-top', - imgHeight / 2);

      // Image reloading for an high quality of thumbnails
      var imageSrc = $image.data('jg.src');
      if (imageSrc) {
        imageSrc = this.newSrc(imageSrc, imgWidth, imgHeight, $ima to the original thumbnail
    imageSrc);
          // }
        };

        if ($entry.data('jg.loaded') === 'skipped' && imageSrc) {
          this.onImageEvent(imageSrc, (function() {
            this.showImg($entry, loadNewImage); //load the new image after the fadeIn
            $entry.data('jg.loaded', true);
          }).bind(this));
        } else {
          this.showImg($entry, loadNewImage); //load the new image after the fadeIn
        }

      }

    } else {
      this.showImg($entry);
    }

    this.displayEntryCaption($entry);
  };

  /**
   * Display the entry caption. If the caption element doesn't exists, it creates the caption using the 'alt'
   * or the 'title' attributes.
   *
   * @param {jQuery} $entry the entry to process
   */
  JustifiedGallery.prototype.displayEntryCaption = function ($entry) {
    var $image = this.imgFromEntry($entry);
    if ($image !== null && this.settings.captions) {
      var $imgCaption = this.captionFromEntry($entry);

      // Create it if it doesn't exists
      if ($imgCaption === null) {
        var caption = $image.attr('alt');
        if (!this.isValidCaption(caption)) caption = $entry.attr('title');
        if (this.isValidCaption(caption)) { // Create only we found something
          $imgCaption = $('<div class="jg-caption">' + caption + '</div>');
          $entry.append($imgCaption);
          $entry.data('jg.createdCaption', true);
        }
      }

      // Create events (we check again the $imgCaption because it can be still inexistent)
      if ($imgCaption !== null) {
        if (!this.settings.cssAnimation) $imgCaption.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity);
        this.addCaptionEventsHandlers($entry);
      }
    } else {
      this.removeCaptionEventsHandlers($entry);
    }
  };

  /**
   * Validates the caption
   *
   * @param caption The caption that should be validated
   * @return {boolean} Validation result
   */
  JustifiedGallery.prototype.isValidCaption = function (caption) {
    return (typeof caption !== 'undefined' && caption.length > 0);
  };

  /**
   * The callback for the event 'mouseenter'. It assumes that the event currentTarget is an entry.
   * It shows the caption using jQuery (or using CSS if it is configured so)
   *
   * @param {Event} eventObject the event object
   */
  JustifiedGallery.prototype.onEntryMouseEnterForCaption = function (eventObject) {
    var $caption = this.captionFromEntry($(eventObject.currentTarget));
    if (this.settings.cssAnimation) {
      $caption.addClass('jg-caption-visible').removeClass('jg-caption-hidden');
    } else {
      $caption.stop().fadeTo(this.settings.captionSettings.animationDuration,
        this.settings.captionSettings.visibleOpacity);
    }
  };

  /**
   * The callback for the event 'mouseleave'. It assumes that the event currentTarget is an entry.
   * It hides the caption using jQuery (or using CSS if it is configured so)
   *
   * @param {Event} eventObject the event object
   */
  JustifiedGallery.prototype.onEntryMouseLeaveForCaption = function (eventObject) {
    var $caption = this.captionFromEntry($(eventObject.currentTarget));
    if (this.settings.cssAnimation) {
      $caption.removeClass('jg-caption-visible').removeClass('jg-caption-hidden');
    } else {
      $caption.stop().fadeTo(this.settings.captionSettings.animationDuration,
        this.settings.captionSettings.nonVisibleOpacity);
    }
  };

  /**
   * Add the handlers of the entry for the caption
   *
   * @param $entry the entry to modify
   */
  JustifiedGallery.prototype.addCaptionEventsHandlers = function ($entry) {
    var captionMouseEvents = $entry.data('jg.captionMouseEvents');
    if (typeof captionMouseEvents === 'undefined') {
      captionMouseEvents = {
        mouseenter: $.proxy(this.onEntryMouseEnterForCaption, this),
        mouseleave: $.proxy(this.onEntryMouseLeaveForCaption, this)
      };
      $entry.on('mouseenter', undefined, undefined, captionMouseEvents.mouseenter);
      $entry.on('mouseleave', undefined, undefined, captionMouseEvents.mouseleave);
      $entry.data('jg.captionMouseEvents', captionMouseEvents);
    }
  };

  /**
   * Remove the handlers of the entry for the caption
   *
   * @param $entry the entry to modify
   */
  JustifiedGallery.prototype.removeCaptionEventsHandlers = function ($entry) {
    var captionMouseEvents = $entry.data('jg.captionMouseEvents');
    if (typeof captionMouseEvents !== 'undefined') {
      $entry.off('mouseenter', undefined, captionMouseEvents.mouseenter);
      $entry.off('mouseleave', undefined, captionMouseEvents.mouseleave);
      $entry.removeData('jg.captionMouseEvents');
    }
  };

  /**
   * Clear the building row data to be used for a new row
   */
  JustifiedGallery.prototype.clearBuildingRow = function () {
    this.buildingRow.entriesBuff = [];
    this.buildingRow.aspectRatio = 0;
    this.buildingRow.width = 0;
  };

  /**
   * Justify the building row, preparing it to
   *
   * @param isLastRow
   * @param hiddenRow undefined or false for normal behavior. hiddenRow = true to hide the row.
   * @returns a boolean to know if the row has been justified or not
   */
  JustifiedGallery.prototype.prepareBuildingRow = function (isLastRow, hiddenRow) {
    var i, $entry, imgAspectRatio, newImgW, newImgH, justify = true;
    var minHeight = 0;
    var availableWidth = this.galleryWidth - 2 * this.border - (
      (this.buildingRow.entriesBuff.length - 1) * this.settings.margins);
    var rowHeight = Math.floor( availableWidth / this.buildingRow.aspectRatio );//hacked by Uncode
    var defaultRowHeight = this.settings.rowHeight;
    var justifiable = this.buildingRow.width / availableWidth > this.settings.justifyThreshold;

    //Skip the last row if we can't justify it and the lastRow == 'hide'
    if (hiddenRow || (isLastRow && this.settings.lastRow === 'hide' && !justifiable)) {
      for (i = 0; i < this.buildingRow.entriesBuff.length; i++) {
        $entry = this.buildingRow.entriesBuff[i];
        if (this.settings.cssAnimation)
          $entry.removeClass('jg-entry-visible');
        else {
          $entry.stop().fadeTo(0, 0.1);
          $entry.find('> img, > a > img').fadeTo(0, 0);
        }
      }
      return -1;
    }

    // With lastRow = nojustify, justify if is justificable (the images will not become too big)
    if (isLastRow && !justifiable && this.settings.lastRow !== 'justify' && this.settings.lastRow !== 'hide') {
      justify = false;

      if (this.rows > 0) {
        defaultRowHeight = (this.offY - this.border - this.settings.margins * this.rows) / this.rows;
        justify = defaultRowHeight * this.buildingRow.aspectRatio / availableWidth > this.settings.justifyThreshold;
      }
    }

    for (i = 0; i < this.buildingRow.entriesBuff.length; i++) {
      $entry = this.buildingRow.entriesBuff[i];
      imgAspectRatio = $entry.data('jg.width') / $entry.data('jg.height');

      if (justify) {
        newImgW = (i === this.buildingRow.entriesBuff.length - 1) ? availableWidth : rowHeight * imgAspectRatio;
        newImgH = rowHeight;
      } else {
        newImgW = defaultRowHeight * imgAspectRatio;
        newImgH = defaultRowHeight;
      }

      availableWidth -= Math.round(newImgW);
      $entry.data('jg.jwidth', Math.round(newImgW));
      $entry.data('jg.jheight', Math.ceil(newImgH));
      if (i === 0 || minHeight > newImgH) minHeight = newImgH;
    }

    this.buildingRow.height = minHeight;
    return justify;
  };

  /**
   * Flush a row: justify it, modify the gallery height accordingly to the row height
   *
   * @param isLastRow
   * @param hiddenRow undefined or false for normal behavior. hiddenRow = true to hide the row.
   */
  JustifiedGallery.prototype.flushRow = function (isLastRow, hiddenRow) {
    var settings = this.settings;
    var $entry, buildingRowRes, offX = this.border, i;

    buildingRowRes = this.prepareBuildingRow(isLastRow, hiddenRow);
    if (hiddenRow || (isLastRow && settings.lastRow === 'hide' && buildingRowRes === -1)) {
      this.clearBuildingRow();
      return;
    }

    if (this.maxRowHeight) {
      if (this.maxRowHeight < this.buildingRow.height) this.buildingRow.height = this.maxRowHeight;
    }

    //Align last (unjustified) row
    if (isLastRow && (settings.lastRow === 'center' || settings.lastRow === 'right')) {
      var availableWidth = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * settings.margins;

      for (i = 0; i < this.buildingRow.entriesBuff.length; i++) {
        $entry = this.buildingRow.entriesBuff[i];
        availableWidth -= $entry.data('jg.jwidth');
      }

      if (settings.lastRow === 'center')
        offX += Math.round(availableWidth / 2);
      else if (settings.lastRow === 'right')
        offX += availableWidth;
    }

    var lastEntryIdx = this.buildingRow.entriesBuff.length - 1;
    for (i = 0; i <= lastEntryIdx; i++) {
      $entry = this.buildingRow.entriesBuff[this.settings.rtl ? lastEntryIdx - i : i];
      this.displayEntry($entry, offX, this.offY, $entry.data('jg.jwidth'), $entry.data('jg.jheight'), this.buildingRow.height);
      offX += $entry.data('jg.jwidth') + settings.margins;
    }

    //Gallery Height
    this.galleryHeightToSet = this.offY + this.buildingRow.height + this.border;
    this.setGalleryTempHeight(this.galleryHeightToSet + this.getSpinnerHeight());

    if (!isLastRow || (this.buildingRow.height <= settings.rowHeight && buildingRowRes)) {
      //Ready for a new row
      this.offY += this.buildingRow.height + settings.margins;
      this.rows += 1;
      this.clearBuildingRow();
      this.settings.triggerEvent.call(this, 'jg.rowflush');
    }
  };


  // Scroll position not restoring: https://github.com/miromannino/Justified-Gallery/issues/221
  var galleryPrevStaticHeight = 0;

  JustifiedGallery.prototype.rememberGalleryHeight = function () {
    galleryPrevStaticHeight = this.$gallery.height();
    this.$gallery.height(galleryPrevStaticHeight);
  };

  // grow only
  JustifiedGallery.prototype.setGalleryTempHeight = function (height) {
    galleryPrevStaticHeight = Math.max(height, galleryPrevStaticHeight);
    this.$gallery.height(galleryPrevStaticHeight);
  };

  JustifiedGallery.prototype.setGalleryFinalHeight = function (height) {
    galleryPrevStaticHeight = height;
    this.$gallery.height(height);
  };

  /**
   * Checks the width of the gallery container, to know if a new justification is needed
   */
  JustifiedGallery.prototype.checkWidth = function () {
    this.checkWidthIntervalId = setInterval($.proxy(function () {

      // if the gallery is not currently visible, abort.
      if (!this.$gallery.is(":visible")) return;

      var galleryWidth = parseFloat(this.$gallery.width());
      if (Math.abs(galleryWidth - this.galleryWidth) > this.settings.refreshSensitivity) {
        this.galleryWidth = galleryWidth;
        this.rewind();

        this.rememberGalleryHeight();

        // Restart to analyze
        this.startImgAnalyzer(true);
      }
    }, this), this.settings.refreshTime);
  };

  /**
   * @returns {boolean} a boolean saying if the spinner is active or not
   */
  Justifiehis.spinner.intervalId !== null;
  };

  /**
   * @returns {int} the spinner height
   */
  Justified this.spinner.$el.innerHeight();
  };

  /**
   * Stops the spinner animation and modify the gallery height to exclude the spinner
   */
  JustifiedGallery.prototype.stopLoadingSpinnerAnimation = function () {
    clearInterval(this.spinner.intervalId);
    this.spinner.intervalId = null;
    this.setGalleryTempHeight(this.$gallery.height() - this.getSpinnerHeight());
    this.spinner.$el.detach();
  };

  /**
   * Starts the spinner animation
   */
  JustifiedGallery.prototype.startLoadingSpinnerAnimation = function () {
    var spinnerContext = this.spinner;
    var $spinnerPoints = spinnerContext.$el.find('span');
    clearInterval(spinnerContext.intervalId);
    this.$gallery.append(spinnerContext.$el);
    this.setGalleryTempHeight(this.offY + this.buildingRow.height + this.getSpinnerHeight());
    spinnerContext.intervalId = setInterval(function () {
      if (spinnerContext.phase < $spinnerPoints.length) {
        $spinnerPoints.eq(spinnerContext.phase).fadeTo(spinnerContext.timeSlot, 1);
      } else {
        $spinnerPoints.eq(spinnerContext.phase - $spinnerPoints.length).fadeTo(spinnerContext.timeSlot, 0);
      }
      spinnerContext.phase = (spinnerContext.phase + 1) % ($spinnerPoints.length * 2);
    }, spinnerContext.timeSlot);
  };

  /**
   * Rewind the image analysis to start from the first entry.
   */
  JustifiedGallery.prototype.rewind = function () {
    this.lastFetchedEntry = null;
    this.lastAnalyzedIndex = -1;
    this.offY = this.border;
    this.rows = 0;
    this.clearBuildingRow();
  };

  /**
   * @returns {String} `settings.selector` rejecting spinner element
   */
  JustifiedGallery.pctor + ', div:not(.jg-spinner)';
  };

  /**
   * @returns {Array} all entries matched by `settings.selector`
   */
  Justifry.children(selector).toArray();
  };

  /**
   * Update the entries searching it from the justified gallery HTML element
   *
   * @param norewind if norewind only the new entries will be changed (i.e. randomized, sorted or filtered)
   * @returns {boolean} true if some entries has been founded
   */
  JustifiedGallery.prototype.updateEntries = function (norewind) {
    var newEntries;

    if (norewind && this.lastFetchedEntry != null) {
      var selector = this.getSelectorWithoutSpinner();
      newEntries = $(this.lastFetchedEntry).nextAll(selector).toArray();
    } else {
      this.entries = [];
      newEntries = this.getAllEntries();
    }

    if (newEntries.length > 0) {

      // Sort or randomize
      if ($.isFunction(this.settings.sort)) {
        newEntries = this.sortArray(newEntries);
      } else if (this.settings.randomize) {
        newEntries = this.shuffleArray(newEntries);
      }
      this.lastFetchedEntry = newEntries[newEntries.length - 1];

      // Filter
      if (this.settings.filter) {
        newEntries = this.filterArray(newEntries);
      } else {
        this.resetFilters(newEntries);
      }

    }

    this.entries = this.entries.concat(newEntries);
    return true;
  };

  /**
   * Apply the entries order to the DOM, iterating the entries and appending the images
   *
   * @param entries the entries that has been modified and that must be re-ordered in the DOM
   */
  JustifieappendTo(that.$gallery);
    });
  };

  /**
   * Shuffle the array using the Fisher-Yates shuffle algorithm
   *
   * @param a the array to shuffle
   * @return the shuffled array
   */
  JustifiedGallery.prototype.shuffleArray = function (a) {
    var i, j, temp;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    this.insertToGallery(a);
    return a;
  };

  /**
   * Sort the array using settings.comparator as comparator
   *
   * @param a the array to sort (it is sorted)
   * @return the sorted array
   */
  JustifiedGallery.prototype.sortArray = function (a) {
    a.sort(this.settings.sort);
    this.insertToGallery(a);
    return a;
  };

  /**
   * Reset the filters removing the 'jg-filtered' class from all the entries
   *
   * @param a the array to reset
   */
  Justi[i]).removeClass('jg-filtered');
  };

  /**
   * Filter the entries considering theirs classes (if a string has been passed) or using a function for filtering.
   *
   * @param a the array to filter
   * @return the filtered array
   */
  JustifiedGallery.prototype.filterArray = function (a) {
    var settings = this.settings;
    if ($.type(settings.filter) === 'string') {
      // Filter only keeping the entries passed in the string
      return a.filter(function (el) {
        var $el = $(el);
        if ($el.is(settings.filter)) {
          $el.removeClass('jg-filtered');
          return true;
        } else {
          $el.addClass('jg-filtered').removeClass('jg-visible');
          return false;
        }
      });
    } else if ($.isFunction(settings.filter)) {
      // Filter using the passed function
      var filteredArr = a.filter(settings.filter);
      for (var i = 0; i < a.length; i++) {
        if (filteredArr.indexOf(a[i]) === -1) {
          $(a[i]).addClass('jg-filtered').removeClass('jg-visible');
        } else {
          $(a[i]).removeClass('jg-filtered');
        }
      }
      return filteredArr;
    }
  };

  /**
   * Revert the image src to the default value.
   */
  JustifiedGallery.prototype.resetImgSrc = function ($img) {
    if ($img.data('jg.originalSrcLoc') === 'src') {
      $img.attr('src', $img.data('jg.originalSrc'));
    } else {
      $img.attr('src', '');
    }
  };

  /**
   * Destroy the Justified Gallery instance.
   *
   * It clears all the css properties added in the style attributes. We doesn't backup the original
   * values for those css attributes, because it costs (performance) and because in general one
   * shouldn't use the style attribute for an uniform set of images (where we suppose the use of
   * classes). Creating a backup is also difficult because JG could be called multiple times and
   * with different style attributes.
   */
  JustifiedGallery.prototype.destroy = function () {
    clearInterval(this.checkWidthIntervalId);
    this.stopImgAnalyzerStarter();

    // Get fresh entries list since filtered entries are absent in `this.entries`
    $.each(this.getAllEntries(), $.proxy(function (_, entry) {
      var $entry = $(entry);

      // Reset entry style
      $entry.css('width', '');
      $entry.css('height', '');
      $entry.css('top', '');
      $entry.css('left', '');
      $entry.data('jg.loaded', undefined);
      $entry.removeClass('jg-entry jg-filtered jg-entry-visible');

      // Reset image style
      var $img = this.imgFromEntry($entry);
      if ($img) {
        $img.css('width', '');
        $img.css('height', '');
        $img.css('margin-left', '');
        $img.css('margin-top', '');
        this.resetImgSrc($img);
        $img.data('jg.originalSrc', undefined);
        $img.data('jg.originalSrcLoc', undefined);
        $img.data('jg.src', undefined);
      }

      // Remove caption
      this.removeCaptionEventsHandlers($entry);
      var $caption = this.captionFromEntry($entry);
      if ($entry.data('jg.createdCaption')) {
        // remove also the caption element (if created by jg)
        $entry.data('jg.createdCaption', undefined);
        if ($caption !== null) $caption.remove();
      } else {
        if ($caption !== null) $caption.fadeTo(0, 1);
      }

    }, this));

    this.$gallery.css('height', '');
    this.$gallery.removeClass('justified-gallery');
    this.$gallery.data('jg.controller', undefined);
    this.settings.triggerEvent.call(this, 'jg.destroy');
  };

  /**
   * Analyze the images and builds the rows. It returns if it found an image that is not loaded.
   *
   * @param isForResize if the image analyzer is called for resizing or not, to call a different callback at the end
   */
  JustifiedGallery.prototype.analyzeImages = function (isForResize) {
    for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
      var $entry = $(this.entries[i]);
      if ($entry.data('jg.loaded') === true || $entry.data('jg.loaded') === 'skipped') {
        var availableWidth = this.galleryWidth - 2 * this.border - (
          (this.buildingRow.entriesBuff.length - 1) * this.settings.margins);
        var imgAspectRatio = $entry.data('jg.width') / $entry.data('jg.height');

        this.buildingRow.entriesBuff.push($entry);
        this.buildingRow.aspectRatio += imgAspectRatio;
        this.buildingRow.width += imgAspectRatio * this.settings.rowHeight;
        this.lastAnalyzedIndex = i;

        if (availableWidth / (this.buildingRow.aspectRatio + imgAspectRatio) < this.settings.rowHeight) {
          this.flushRow(false, this.settings.maxRowsCount > 0 && this.rows === this.settings.maxRowsCount);

          if (++this.yield.flushed >= this.yield.every) {
            this.startImgAnalyzer(isForResize);
            return;
          }
        }
      } else if ($entry.data('jg.loaded') !== 'error') {
        return;
      }
    }

    // Last row flush (the row is not full)
    if (this.buildingRow.entriesBuff.length > 0) {
      this.flushRow(true, this.settings.maxRowsCount > 0 && this.rows === this.settings.maxRowsCount);
    }

    if (this.isSpinnerActive()) {
      this.stopLoadingSpinnerAnimation();
    }

    /* Stop, if there is, the timeout to start the analyzeImages.
     This is because an image can be set loaded, and the timeout can be set,
     but this image can be analyzed yet.
     */
    this.stopImgAnalyzerStarter();

    this.setGalleryFinalHeight(this.galleryHeightToSet);

    //On complete callback
    this.settings.triggerEvent.call(this, isForResize ? 'jg.resize' : 'jg.complete');
  };

  /**
   * Stops any ImgAnalyzer starter (that has an assigned timeout)
   */
  JustifiedGallery.prototype.stopImgAnalyzerStarter = function () {
    this.yield.flushed = 0;
    if (this.imgAnalyzerTimeout !== null) {
      clearTimeout(this.imgAnalyzerTimeout);
      this.imgAnalyzerTimeout = null;
    }
  };

  /**
   * Starts the image analyzer. It is not immediately called to let the browser to update the view
   *
   * @param isForResize specifies if the image analyzer must be called for resizing or not
   */
  JustifiedGallery.prototype.startImgAnalyzer = function (isForResize) {
    var that = this;
    this.stopImgAnalyzerStarter();
    at.analyzeImages(isForResize);
    }, 0.001); // we can't start it immediately due to a IE different behaviour
  };

  /**
   * Checks if the image is loaded or not using another image object. We cannot use the 'complete' image property,
   * because some browsers, with a 404 set complete = true.
   *
   * @param imageSrc the image src to load
   * @param onLoad callback that is called when the image has been loaded
   * @param onError callback that is called in case of an error
   */
  JustifiedGallery.prototype.onImageEvent = function (imageSrc, onLoad, onError) {
    if (!onLoad && !onError) return;

    var memImage = new Image();
    var $memImage = $(memImage);
    if (onLoad) {
      $memImage.one('load', function () {
        $memImage.off('load error');
        onLoad(memImage);
      });
    }
    if (onE;
        onError(memImage);
      });
    }
    memImage.src = imageSrc;
  };

  /**
   * Init of Justified Gallery controlled
   * It analyzes all the entries starting theirs loading and calling the image analyzer (that works with loaded images)
   */
  JustifiedGallery.prototype.init = function () {
    var imagesToLoad = false, skippedImages = false, that = this;
    $.each(this.entries, function (index, entry) {
      var $entry = $(entry);
      var $image = that.imgFromEntry($entry);

      $entry.addClass('jg-entry');

      if ($entry.data('jg.loaded') !== true && $entry.data('jg.loaded') !== 'skipped') {

        // Link Rel global overwrite
        if (that.settings.rel !== null) $entry.attr('rel', that.settings.rel);

        // Link Target global overwrite
        if (that.settings.target !== null) $entry.attr('target', that.settings.target);

        if ($image !== null) {

          // Image src
          var imageSrc = that.extractImgSrcFromImage($image);

          /* If we have the height and the width, we don't wait that the image is loaded,
             but we start directly with the justification */
          if (that.settings.waitThumbnailsLoad === false || !imageSrc) {
            var width = parseFloat($image.attr('width'));
            var height = parseFloat($image.attr('height'));
            if ($image.prop('tagName') === 'svg') {
              width = parseFloat($image[0].getBBox().width);
              height = parseFloat($image[0].getBBox().height);
            }
            if (!isNaN(width) && !isNaN(height)) {
              $entry.data('jg.width', width);
              $entry.data('jg.height', height);
              $entry.data('jg.loaded', 'skipped');
              skippedImages = true;
              that.startImgAnalyzer(false);
              return true; // continue
            }
          }

          $entry.data('jg.loaded', false);
          imagesToLoad = true;

          // Spinner start
          if (!that.isSpinnerActive()) that.startLoadingSpinnerAnimation();

          that.onImageEvent(imageSrc, function (loadImg) { // image loaded
            $entry.data('jg.width', loadImg.width);
            $entry.data('jg.height', loadImg.height);
            $entry.data('jg.loaded', true);
            that.sstartImgAnalyzer(false);
          });

        } else {
          $entry.data('jg.loaded', true);
          $entry.data('jg.width', $entry.width() | parseFloat($entry.css('width')) | 1);
          $entry.data('jg.height', $entry.height() | parseFloat($entry.css('height')) | 1);
        }

      }

    });

    if (!imagesToLoad && !skippedImages) this.startImgAnalyzer(false);
    this.checkWidth();
  };

  /**
   * Checks that it is a valid number. If a string is passed it is converted to a number
   *
   * @param settingContainer the object that contains the setting (to allow the conversion)
   * @param settingName the setting name
   */
  JustifiedGallery.prototype.checkOrConvertNumber = function (settingContainer, settingName) {
    if ($.type(settingContainer[settingName]) === 'string') {
      settingContainer[settingName] = parseFloat(settingContainer[settingName]);
    }

    if ($.type(settingContainer[settingName]) === 'number') {
      if (isNaN(settingContainer[settingName])) throw 'invalid number for ' + settingName;
    } else {
      throw settingName + ' must be a number';
    }
  };

  /**
   * Checks the sizeRangeSuffixes and, if necessary, converts
   * its keys from string (e.g. old settings with 'lt100') to int.
   */
  JustifiedGallery.prototype.checkSizeRangesSuffixes = function () {
    if ($.type(this.settings.sizeRangeSuffixes) !== 'object') {
      throw 'sizeRangeSuffixes must be defined and must be an object';
    }

    var suffixRanges = [];
    for (var rangeIdx in this.settings.sizeRangeSuffixes) {
      if (this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx)) suffixRanges.push(rangeIdx);
    }

    var newSizeRngSuffixes = { 0: '' };
    for (var i = 0; i < suffixRanges.length; i++) {
      if ($.type(suffixRanges[i]) === 'string') {
        try {
          var numIdx = parseInt(suffixRanges[i].replace(/^[a-z]+/, ''), 10);
          newSizeRngSuffixes[numIdx] = this.settings.sizeRangeSuffixes[suffixRanges[i]];
        } catch (e) {
          throw 'sizeRangeSuffixes keys must contains correct numbers (' + e + ')';
        }
      } else {
        newSizeRngSuffixes[suffixRanges[i]] = this.settings.sizeRangeSuffixes[suffixRanges[i]];
      }
    }

    this.settings.sizeRangeSuffixes = newSizeRngSuffixes;
  };

  /**
   * check and convert the maxRowHeight setting
   * requires rowHeight to be already set
   * TODO: should be always called when only rowHeight is changed
   * @return number or null
   */
  JustifiedGallery.prototype.retrieveMaxRowHeight = function () {
    var newMaxRowHeight = null;
    var rowHeight = this.settings.rowHeight;

    if ($.type(this.settings.maxRowHeight) === 'string') {
      if (this.settings.maxRowHeight.match(/^[0-9]+%$/)) {
        newMaxRowHeight = rowHeight * parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100;
      } else {
        newMaxRowHeight = parseFloat(this.settings.maxRowHeight);
      }
    } else if ($.type(this.settings.maxRowHeight) === 'number') {
      newMaxRowHeight = this.settings.maxRowHeight;
    } else if (this.settings.maxRowHeight === false || this.settings.maxRowHeight == null) {
      return null;
    } else {
      throw 'maxRowHeight must be a number or a percentage';
    }

    // check if the converted value is not a number
    if (isNaN(newMaxRowHeight)) throw 'invalid number for maxRowHeight';

    // check values, maxRowHeight must be >= rowHeight
    if (newMaxRowHeight < rowHeight) newMaxRowHeight = rowHeight;

    return newMaxRowHeight;
  };

  /**
   * Checks the settings
   */
  JustifiedGallery.prototype.checkSettings = function () {
    this.checkSizeRangesSuffixes();

    this.checkOrConvertNumber(this.settings, 'rowHeight');
    this.checkOrConvertNumber(this.settings, 'margins');
    this.checkOrConvertNumber(this.settings, 'border');
    this.checkOrConvertNumber(this.settings, 'maxRowsCount');

    var lastRowModes = [
      'justify',
      'nojustify',
      'left',
      'center',
      'right',
      'hide'
    ];
    if (lastRowModes.indexOf(this.settings.lastRow) === -1) {
      throw 'lastRow must be one of: ' + lastRowModes.join(', ');
    }

    this.checkOrConvertNumber(this.settings, 'justifyThreshold');
    if (this.settings.justifyThreshold < 0 || this.settings.justifyThreshold > 1) {
      throw 'justifyThreshold must be in the interval [0,1]';
    }
    if ($.type(this.settings.cssAnimation) !== 'boolean') {
      throw 'cssAnimation must be a boolean';
    }

    if ($.type(this.settings.captions) !== 'boolean') throw 'captions must be a boolean';
    this.checkOrConvertNumber(this.settings.captionSettings, 'animationDuration');

    this.checkOrConvertNumber(this.settings.captionSettings, 'visibleOpacity');
    if (this.settings.captionSettings.visibleOpacity < 0 ||
      this.settings.captionSettings.visibleOpacity > 1) {
      throw 'captionSettings.visibleOpacity must be in the interval [0, 1]';
    }

    this.checkOrConvertNumber(this.settings.captionSettings, 'nonVisibleOpacity');
    if (this.settings.captionSettings.nonVisibleOpacity < 0 ||
      this.settings.captionSettings.nonVisibleOpacity > 1) {
      throw 'captionSettings.nonVisibleOpacity must be in the interval [0, 1]';
    }

    this.checkOrConvertNumber(this.settings, 'imagesAnimationDuration');
    this.checkOrConvertNumber(this.settings, 'refreshTime');
    this.checkOrConvertNumber(this.settings, 'refreshSensitivity');
    if ($.type(this.settings.randomize) !== 'boolean') throw 'randomize must be a boolean';
    if ($.type(this.settings.selector) !== 'string') throw 'selector must be a string';

    if (this.settings.sort !== false && !$.isFunction(this.settings.sort)) {
      throw 'sort must be false or a comparison function';
    }

    if (this.settings.filter !== false && !$.isFunction(this.settings.filter) &&
      $.type(this.settings.filter) !== 'string') {
      throw 'filter must be false, a string or a filter function';
    }
  };

  /**
   * It brings all the indexes from the sizeRangeSuffixes and it orders them. They are then sorted and returned.
   * @returns {Array} sorted suffix ranges
   */
  JustifiedGallery.prototype.retrieveSuffixRanges = function () {
    var suffixRanges = [];
    for (var rangeIdx in this.settings.sizeRangeSuffixes) {
      if (this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx)) suffixRanges.push(parseInt(rangeIdreturn a > b ? 1 : a < b ? -1 : 0; });
    return suffixRanges;
  };

  /**
   * Update the existing settings only changing some of them
   *
   * @param newSettings the new settings (or a subgroup of them)
   */
  JustifiedGallery.prototype.updateSettings = function (newSettings) {
    // In this case Justified Gallery has been called again changing only some options
    this.settings = $.extend({}, this.settings, newSettings);
    this.checkSettings();

    // As reported in the settings: negative value = same as margins, 0 = disabled
    this.border = this.settings.border >= 0 ? this.settings.border : this.settings.margins;

    this.maxRowHeight = this.retrieveMaxRowHeight();
    this.suffixRanges = this.retrieveSuffixRanges();
  };

  JustifiedGallery.prototype.defaults = {
    sizeRangeSuffixes: {}, /* e.g. Flickr configuration
        {
          100: '_t',  // used when longest is less than 100px
          240: '_m',  // used when longest is between 101px and 240px
          320: '_n',  // ...
          500: '',
          640: '_z',
          1024: '_b'  // used as else case because it is the last
        }
    */
    thumbnailPath: undefined, /* If defined, sizeRangeSuffixes is not used, and this function is used to determine the
    path relative to a specific thumbnail size. The function should accept respectively three arguments:
    current path, width and height */
    rowHeight: 120, // required? required to be > 0?
    maxRowHeight: false, // false or negative value to deactivate. Positive number to express the value in pixels,
    // A string '[0-9]+%' to express in percentage (e.g. 300% means that the row height
    // can't exceed 3 * rowHeight)
    maxRowsCount: 0, // maximum number of rows to be displayed (0 = disabled)
    margins: 1,
    border: -1, // negative value = same as margins, 0 = disabled, any other value to set the border

    lastRow: 'nojustify', // … which is the same as 'left', or can be 'justify', 'center', 'right' or 'hide'

    justifyThreshold: 0.90, /* if row width / available space > 0.90 it will be always justified
                             * (i.e. lastRow setting is not considered) */
    waitThumbnailsLoad: true,
    captions: true,
    cssAnimation: true,
    imagesAnimationDuration: 500, // ignored with css animations
    captionSettings: { // ignored with css animations
      animationDuration: 500,
      visibleOpacity: 0.7,
      nonVisibleOpacity: 0.0
    },
    rel: null, // rewrite the rel of each analyzed links
    target: null, // rewrite the target of all links
    extension: /\.[^.\\/]+$/, // regexp to capture the extension of an image
    refreshTime: 200, // time interval (in ms) to check if the page changes its width
    refreshSensitivity: 0, // change in width allowed (in px) without re-building the gallery
    randomize: false,
    rtl: false, // right-to-left mode
    sort: false, /*
      - false: to do not sort
      - function: to sort them using the function as comparator (see Array.prototype.sort())
    */
    filter: false, /*
      - false, null or undefined: for a disabled filter
      - a string: an entry is kept if entry.is(filter string) returns true
                  see jQuery's .is() function for further information
      - a function: invoked with arguments (entry, index, array). Return true to keep the entry, false otherwise.
                    It follows the specifications of the Array.prototype.filter() function of JavaScript.
    */
    selector: 'a', // The selector that is used to know what are the entries of the gallery
    imgSelector: '> img, > a > img, > svg, > a > svg', // The selector that is used to know what are the stifiedGallery object, so it can
    }                                // access to fields such as $gallery, useful to trigger events with jQuery.
  };


  /**
   * Justified Gallery plugin for jQuery
   *
   * Events
   *  - jg.complete : called when all the gallery has been created
   *  - jg.resize : called when the gallery has been resized
   *  - jg.rowflush : when a new row appears
   *
   * @param arg the action (or the settings) passed when the plugin is called
   * @returns {*} the object itself
   */
  $.fn.justifiedGallery = function (arg) {
    return this.each(function (index, gallery) {

      var $gallery = $(gallery);
      $gallery.addClass('justified-gallery');

      var controller = $gallery.data('jg.controller');
      if (typeof controller === 'undefined') {
        // Create controller and assign it to the object data
        if (typeof arg !== 'undefined' && arg !== null && $.type(arg) !== 'object') {
          if (arg === 'destroy') return; // Just a call to an unexisting object
          throw 'The argument must be an object';
        }
        controller = new JustifiedGallery($gallery, $.extend({}, JustifiedGallery.prototype.defaults, arg));
        $gallery.data('jg.controller', controller);
      } else if (arg === 'norewind') {
        // In this case we don't rewind: we analyze only the latest images (e.g. to complete the last unfinished row
        // ... left to be more readable
      } else if (arg === 'destroy') {
        controller.destroy();
        return;
      } else {
        // In this case Justified Gallery has been called again changing only some options
        controller.updateSettings(arg);
        controller.rewind();
      }

      // Update the entries list
      if (!controller.updateEntries(arg === 'norewind')) return;

      // Init justified gallery
      controller.init();

    });
  };

}));

/*!
* Customized version of iScroll.js 0.0.1
* It fixes bugs affecting its integration with fullpage.js
*/
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    winddow.setTimeout(callback, 1000 / 60); };

var utils = (function () {
    var me = {};

    var _elementStyle = document.createEl        }toUpperCase() + style.substr(1me () { return new   target[i] = obj[i];
        }
    };

    me.addEvent = function (el, type, fn, capture) {
        el.addEventListener(type, fn, !!ntListener(type, fn, !!capturetr(8):
            p   duration: duration
        };
    };

    var _transform = _prefixStyle('transform');

    me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
        hasTransition: _prefixStyle('transition') in _elementStyle
    });

    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36          return false;
        }
    })();

    me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transf    return re.test(e.className = newclass.j = e.className.rep
            top: top
        };
          }

        return false;
    };

    me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,

        mousedown: 2,
        mousemove: 2,
        mouseup: 2,

        pointerdown: 3,
        pointermove: 3,
        pointerup: 3,

        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3
    });

    me.extend(me.ease = {}, {
        quadratic: {
            style: 'cubic-bezier(0.2   return k * ( 2 - k );
            }
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',   // Not properly "circular" but this looks better, it should be (sqrt( 1 - ( --k * k ) );
            }
        },
        back: {
            style: 'cubic-bezier(0.175,( b + 1 ) * k + b ) + 1;
            }
        },
        bounce: {
84375;
                }
            }
        },
        elastic: {
* Math.PI ) / f ) + 1 );
            e.target.disget.dispatchEvent(ev);
.options.startY);
    this.enable();
}

IScroll.prototype      }

// INS     this._execEvent('xecEvent('scro_execEvent('b    }

/* RE   this._execEv }, this.options.resiceEasing);

        return true;
    },

    disable: function () {
        this.enabled = false;
    },

    enable: function () {
        thin();

// IN    this._eype].splice(index,e.call(argumentsis.scrollTo(x, y, y, time, easing.fn);
os.left, pos.top, time,/ INSERT POINT: _transitionTime

OINT: _transitionTimingFunction

    },

    _translate: function (x, y) {
        //Uncode addition
        if ( (" " + this.wrapper.className + " ").replace(/[\n\t]/g, " ").indexOf(" no-scrolloverflow ") > -1 )
            return false;

        if ( this.options.useTransform ) {

/* REPLACE START: _translate */

            this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

        } else {
            x = Math.round(x);
            y = Math.round(y);
            this.scrollerStyle.left = x + 'px';
            this.scrollerStyle.top = y + 'px';
        }

        this.x = x;
        this.y = y;


        if ( this.indicators ) {
            for ( var i = this.indicators.length; i--; ) {
                this.indicators[i].updatePosition();
            }
        }

        //Uncode addition
        var uncodevent = new CustomEvent('fp-slide-scroll');
        window.dispatchEvent(uncodevent);

// INSERT POINToller, 'MSTransitionEnd', t

        return { x: ete this.indicatorMouseScroll', this);
        });
    },

    _wheel: function (e) {
        if ( !this.enabled ) {
            return;
        }

        var wheelDeltaX, wheelDeltaY,
            newX, newY,
            that = this;

        if ( this.wheelTimeout === undefined ) {
            that._execEvent('scrollStart');
        }

        // Execute the scrollEnd event after 400ms the wheel stopped scrolling
        clearTimeout(this.wheelTimeout);
at.wheelTimeout = undefined;
        }, 400);

        if ( 'deltaX' in e ) {
            if (e.deltaMode === 1) {
                wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
            } else {
                wheelDeltaX = -e.deltaX;
                wheelDeltaY = -e.deltaY;
            }
        } else if ( 'wheelDeltaX' in e ) {
            wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
            wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
        } else if ( 'wheelDelta' in e ) {
            wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
        } else if ( 'detail' in e ) {
            wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
        } else {
            return;
        }

        wheelDeltaX *= this.options.invertWheelDirection;
        wheelDeltaY *= this.options.invertWheelDirection;

        if ( !this.hasVerticalScroll ) {
            wheelDeltaX = wheelDeltaY;
            wheelDeltaY = 0;
        }

        if ( this.options.snap ) {
            newX = this.currentPage.pageX;
            newY = this.currentPage.pageY;

            if ( wheelDeltaX > 0 ) {
                newX--;
            } else if ( wheelDeltaX < 0 ) {
                newX++;
            }

            if ( wheelDeltaY > 0 ) {
                newY--;
            } else if ( wheelDeltaY < 0 ) {
                newY++;
            }

            this.goToPage(newX, newY);

            return;
        }

        newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
        newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

        this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
        this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

        if ( newX > 0 ) {
            newX = 0;
        } else if ( newX < this.maxScrollX ) {
            newX = this.maxScrollX;
        }

        if ( newY > 0 ) {
            newY = 0;
        } else if ( newY < this.maxScrollY ) {
            newY = this.maxScrollY;
        }

        this.scrollTo(newX, newY, 0);

// INSER time
            );
            pagollTo(posX, is.goToPage(is.goToPage(x, y,w, 'keydown'0);

        thinimating = true;
    dis.wrapperStyle.opacity = '0';
    }
}

In               veChild(this.w_execEvent('b();
        xecEvent('scrollEnd');     }
            });
        }nsitionTimingFu

        this.updatePrStyle.top =   this.scro     }).bind(this, val), delay);
    }
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
    module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
    window.IScroll = IScroll;
}

})(window, document, Math);
/*!
 * fullPage 2.9.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && deobal.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL =     SECTION_SEL + ':first';
    var SECTION_LAST_SEL =      SECTION_SEL + ':last';
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.fp-auto-height';
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.fp-normal-scroll';

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    // Default options for iScroll.js used when using scrollOverflow
    var iscrollOptions = {
        scrollbars: true,
        mouseWheel: true,
        hideScrollbars: false,
        fadeScrollbars: false,
        disableMouse: true,
        interactiveScrollbars: true,
        bounce: false,
    };

    $.fn.fullpage = function(options) {
        //only once my friend!
        if($('html').hasClass(ENABLED)){ displayWarnings(); return; }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Creating some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: iscrollHandler,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = $.extend(true,{}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };

        //cheks for passive event support
        //added by Uncode from new fullPage updates
        var g_supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function() {
              g_supportsPassive = true;
            }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
        } catch (e) {}

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        //Uncode addition
        var $masthead = $('#masthead');
        var hideMenu = !$('body').hasClass('vmenu') && $('body').hasClass('uncode-fp-menu-hide') ? true : false;
        var menuHeight = $masthead.hasClass('menu-transparent') || hideMenu ? 0 : UNCODE.menuHeight;
        var bodyBorder = UNCODE.bodyBorder;
        var adminBarHeight = UNCODE.adminBarHeight;

        displayWarnings();

        //fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783
        iscrollOptions.click = isTouch; // see #2035

        //extending iScroll options with the user custom ones
        iscrollOptions = $.extend(iscrollOptions, options.scrollOverflowOptions);

        //easeInOutCubic animation included in the plugin
      + b;return c/2*((t-=2)*t*t + 2) + b;}});

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if(options.autoScrolling && !options.scrollBar){
                $htmlBody.css({
                    'overflow' : 'hidden !important',
                    'height' : '100%'
                });

                //Uncode addition
                //setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element.length){
                    //moving the container up
                    silentScroll(element.position().top);
                }

            }else{
                $htmlBody.css({
                    'overflow' : 'visible !important',
                    'height' : 'initial'
                });

                //Uncode addition
                //setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        fitToSection', value, type);
        }

        /**
       options.lockAnchors = value;
        }

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                $.each(directions, function (index, direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else if(value){
                setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(','ue, direction, 'k');
                });
            }else{
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next.length &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL).first();
            }

            if(next.length){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions canscrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny.length > 0){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Option moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(container.hasClass(DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height();  //updating globaSEL));
                }
            });

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            // Uncode change
            // $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container);
            $.isFunction( options.afterResize ) && resizing && options.afterResize.call(container, getTableHeight());
            $.isFunction( options.afterReBuild ) && !resizing && options.afterReBuild.call(container);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = $body.hasClass(RESPONSIVE);

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction( options.afterResponsive ) && options.afterResponsive.call( container, active);
            }
        }

        if($(this).length){
            //public functions
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.destroy = destroy;

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            //Uncode addition
            // if(document.readyState === 'complete'){
            //     scrollToAnchor();
            // }
            // $window.on('load', scrollToAnchor);
        }

        function bindEvents(){
            $window
                //when scrolling...
                //.on('scroll', scrollHandler)

                //detecting any change on the URL to scroll to the given anchor link
                //(a way to detect back history button as we play with the hashes on the URL)
                .on('hashchange', hashChangeHandler)

                //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
                .blur(blurHandler)

                //when resizing the site, we adjust the heights of the sections, slimScroll...
                .resize(resizeHandler);

            $document
                //Sliding with arrow keys, both, vertical and horizontal
                .keydown(keydownHandler)

                //to prevent scrolling while zooming
                .keyup(keyUpHandler)

                //Scrolls to the section when clicking the navigation bullet
                .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

                //Scrolls the slider to the given slide destination for the given section
                .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler)

                .on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                $document.on('mouseenter', options.normalScrollElements, function () {
                    setMouseWheelScrolling(false);
                });

                $document.on('mouseleave', options.normalScrollElements, function(){
                    setMouseWheelScrolling(true);
                });
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                options.anchors = sections.filter('[data-anchor]').map(function(){
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                options.navigationTooltips =ooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

             //styling the sections / slides      }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                if(document.readyState === 'complete'){
                    createScrollBarHandler();
                }
                //after DOM and images are loaded
                $window.on('load', createScrollBarHandler);
            }else{
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
his));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide.length &&  ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL);

            section.css('height', windowsHeight + 'px');

            if(options.paddingTop){
                section.css('padding-top', options.paddingTop);
            }

            if(options.paddingBottom){
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activatpendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            container.find(options.sectionSelector).addClass(SECTION);
            container.find(options.slideSelector).addClass(SLIDE);
        }

        /**
        * Creates the control arrows foV_SEL).hide();
            }
        }

        /**
        * Creates a verti.find('a').addClass(ACTIVE);
        }

        /**
        * Creates the slim scroll scrollbar for the sections and        afterRenderActions();
        }

        /*
        * Enables the Youtube videos API so we can control theirlejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src`gn(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @ret/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            if(options.scrollOverflowHandler.afterRender){
                options.scrollOverflowHandler.afterRender(section);
            }
            lazyLoad(section);
            playMedia(section);
            options.scrollOverflowHandler.afterLoad();

            if(isDestinyTheStartingSection()){
                $.isFunction( options.afterLoad ) && options.afterLoad.call(section, section.data('anchor'), (section.index(SECTION_SEL) + 1));
            }

            // Uncode change
            // $.isFunction( options.afterRender ) && options.afterRender.call(container);
            $.isFunction( options.afterRender ) && options.afterRender.call(container, getTableHeight());
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var anchors =  window.location.hash.replace('#', '').split('/');
            var destinationSection = getSectionByAnchor(decodeURIComponent(anchors[0]));

            return !destinationSection.length || destinationSection.length && destinationSection.index() === startingSection.index();
        }


        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + ($window.height() / 2.0);
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections =  document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)){
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!currentSection.hasClass(ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
                    var slideIndex;
                    var slideAnchorLink;

                    if(activeSlide.length){
                        slideAnchorLink = activeSlide.data('anchor');
                        slideIndex = activeSlide.index();
                    }

                    if(canScroll){
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction( options.onLeave ) && options.onLeave.call( leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction( options.afterLoad ) && options.afterLoad.call( currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                   }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL));
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen i top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired b           return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable){
            if (!isScrollAllowed.m[type]){
                return;
            }
            var check = (type === 'down') ? 'bottom' : 'top';
            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(scrollable.length > 0 ){
                //is the scrollbar at the start/end of the scroll?
                if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                    scrollSection();
                }else{
                    return true;
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(event){
            var e = event.originalEvent;
            if(!checkParentForNormalScrollElement(event.target) && options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up){
                //preventing the easing on iOS devices
                event.preventDefault();
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event){
            var e = event.originalEvent;
            var activeSection = $(e.target).closest(SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);
                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > ($window.outerWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > ($window.height() / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down', scrollable);
                        } else if (touchEndY > touchStartY) {
                            scrolling('up', scrollable);
                        }
                    }
                }
            }
        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.noarent, ++hop);
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event wh|| e.pointerType != 'mouse';
        }

        /**
        * Handler for thetouchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements eturn Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var premlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if(direction === 'left'){
                destiny = currentSlide.prev(SLIDE_SEL);
            }else{
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(!destiny.length){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if(direction === 'left'){
                    destiny = currentSlide.siblings(':last');
                }else{
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown =  elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //Uncode addition
            var containerH = container.outerHeight();
            var containerPosition = container.offset();

            //########### Commented by Uncode - START ###########
            //is the destination element bigger than the viewport?
            // if(element.outerHeight() > windowsHeight){
            //     //scrolling up?
            //     if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
            //         position = sectionBottom;
            //     }
            // }

            // //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            // else if(isScrollingDown || (isResizing && element.is(':last-child')) ){
            //     //The bottom of the destination will be at the bottom of the viewport
            //     position = sectionBottom;
            // }
            //########### Commented by Uncode - END ###########

            //Uncode addition
            if ( !$masthead.hasClass('menu-transparent') && $('body').hasClass('uncode-fp-menu-shrink') && !element.is(':first-child') )
                position += 18;
            if ( ( containerH + menuHeight + bodyBorder + adminBarHeight - windowsHeight ) < position || ( isResizing && element.is(':last-child') ) ) {
                position = sectionBottom + menuHeight + bodyBorder*2 + adminBarHeight;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(typeof element === 'undefined'){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection.is(element) && !isResizing) || (options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT) )){ return; }

            if(v.activeSlide.length){
                slideAnchorLink = v.activeSlide.data('anchor');
                slideIndex = v.activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if($.isFunction(options.onLeave) && !v.localIsResizing){
                if(options.onLeave.call(v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.yMovement) === false){
                    return;
                }
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            options.scrollOverflowHandler.beforeLeave();
            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);
            options.scrollOverflowHandler.onLeave();


            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else{
                var scrollSettings = getScrollSettings(v);

                $(scrollSettings.element).animate(
                    scrollSettings.options,
                options.scrollin                   }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin a

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create tent);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes       keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, (v.sectionIndex + 1));
            options.scrollOverflowHandler.afterLoad();

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  veAttr('data-' + attribute);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);
            var element;

            panel.find('img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                element = $(this);

                $.each(['src', 'srcset'], function(index, type){
                    var attribute = element.attr('data-' + type);
                    if(typeof attribute !== 'undefined' && attribute){
                        setSrc(element, type);
                    }
                });

                if(element.is('source')){
                    element.closest('video').get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
     lay();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to                    }
                };
            });
        }

        /**
        * PllayVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
     use();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function(){
                var element = $(this).get(0);

                if( /youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')){
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) fo
            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            //getting the anchor link in the URL and deleting the `#`
            var value =  window.location.hash.replace('#', '').split('/');
            var sectionAnchor = decodeURIComponent(value[0]);
            var slideAnchor = decodeURIComponent(value[1]);

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var value =  window.location.hash.replace('#', '').split('/');
                var sectionAnchor = decodeURIComponent(value[0]);
                var slideAnchor = decodeURIComponent(value[1]);

                    //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                    var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                    var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);


                if(sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slideAnchor ))  {
                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //Sliding with arrow keys,       },is).prev().trigger('click');
        }

        //to pd = e.ctrlKey;
            }
        }

        //binding the mousemove when the moueMoveHandler);
            }
        }

        //unbinding the mousemove when the mou('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won'     controlPressed = false;
        }

        //Scrolls to the section when e($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide descapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.which) < 0){
                return;
            }

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed && isScrollAllowed.k.up){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = slides.closest(SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: destiny.position(),
                slideIndex: destiny.index(),
                section: section,
                sectionIndex: section.index(SECTION_SEL),
                anchorLink: section.data('anchor'),
                slidesNav: section.find(SLIDES_NAV_SEL),
                slideAnchor:  getAnchor(destiny),
                prevSlide: section.find(SLIDE_ACTIVE_SEL),
                prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
            v.direction = v.direction ? v.direction : v.xMovement;

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if($.isFunction( options.onSlideLeave )){
                        if(options.onSlideLeave.call( v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.xMovement, v.slideIndex ) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(section.hasClass(ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                $.isFunction( options.afterSlideLoad ) && options.afterSlideLoad.call( v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex);

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d), v);

                afterSlideLoadsId = setTimeout(function(){
                    fireCallback && afterSlideLoads(v);
                }, options.scrollingSpeed, options.easing);
            }else{
                slides.animate({
                    scrollLeft : Math.round(destinyPos.left)
                }, o afterSlideLoads(v);
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);
      reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(container, element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            container.removeClass(NO_TRANSITION);
            return container.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations foent.addClass(NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to th             }
            }
        }

        /**
        * Activating the website main menu elements according to thClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and ivateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from t}
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from
            return 'right';
        }

        /**
        * Checks if the element needs scrollbar and if the user wants to apply it.
        * If so it creates it.
        *
        * @param {Object} element   jQuery object of the section or slide
        */
        function createScrollBar(element){
            //User doesn't want scrollbar here? Sayonara baby!
            if(element.hasClass('fp-noscroll')) return;

            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            var scrollOverflowHandler = options.scrollOverflowHandler;
            var wrap = scrollOverflowHandler.wrapContent();
            //in case element is a slide
            var section = element.closest(SECTION_SEL);
            var scrollable = scrollOverflowHandler.scrollable(element);
            var contentHeight;

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if(scrollable.length){
                contentHeight = scrollOverflowHandler.scrollHeight(element);
            }else{
                contentHeight = element.get(0).scrollHeight;
                if(options.verticalCentered){
                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if ( contentHeight > scrollHeight) {
                //did we already have an scrollbar ? Updating it
                if(scrollable.length){
                    scrollOverflowHandler.update(element, scrollHeight);
                }
                //creating the scrolling
                else{
                    if(options.verticalCentered){
                        element.find(TABLE_CELL_SEL).wrapInner(wrap);
                    }else{
                        element.wrapInner(wrap);
                    }
                    scrollOverflowHandler.create(element, scrollHeight);
                }
            }
            //removing the scrolling when it is not necessary anymore
            else{
                scrollOverflowHandler.remove(element);
            }

            //undo
            element.css('overflow', '');
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!element.hasClass(TABLE)){
                element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;"        return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on NSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            if(!sectionAnchor) return [];

            var section = container.find(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]');
            if(!section.length){
                section = $(SECTION_SEL).eq( sectionAnchor -1);
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by}

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide){
            var section = getSectionByAnchor(destiny);

            //do nothing if there's no section with the given anchor name
            if(!section.length) return;

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(section, slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination fo             }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for .find('a').addClass(ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and upda
            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            //Uncode addition
            if ( typeof SiteParameters.slide_footer != 'undefined' && url == SiteParameters.slide_footer )
                return false;

            if(options.recordHistory){
                location.hash = url;
            }else{
                //Uncode addition
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                // if(isTouchDevice || isTouch){
                //     window.history.replaceState(undefined, undefined, '#' + url);
                // }else{
                //     var baseUrl = window.location.href.split('#')[0];
                //     window.location.replace( baseUrl + '#' + url );
                // }
                return false;
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be us

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide.length){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-th > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scrolr); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

             // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
            var passiveEvent = g_supportsPassive ? {passive: false }: false;


            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, passiveEvent);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container
                .on('mousedown', mouseDownHandler)
                .on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.off(events.touchmove).on(events.touchmove, preventBouncing);
                }

                $(WRAPPER_SEL)
                    .off(events.touchstart).on(events.touchstart, touchStartHandler)
                    .off(events.touchmove).on(events.touchmove, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                $(WRAPPER_SEL)
                    .off(events.touchstart)
                    .off(events.touchmove);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn3
            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#is

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed (0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                container.css('top', -roundedTop);
            }
            else{
                $htmlBody.scrollTop(roundedTop);
            }
        }

        /**
        * Returns the cross-browse: translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            switch (direction){
                case 'up': isScrollAllowed[type].up = value; break;
                case 'down': isScrollAllowed[type].down = value; break;
                case 'left': isScrollAllowed[type].left = value; break;
                case 'right': isScrollAllowed[type].right = value; break;
                case 'all':
                    if(type == 'm'){
                        setAllowScrolling(value);
                    }else{
                        setKeyboardScrolling(value);
                    }
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window
                .off('scroll', scrollHandler)
                .off('hashchange', hashChangeHandler)
                .off('resize', resizeHandler);

            $document
                .off('click touchstart', SECTION_NAV_SEL + ' a')
                .off('mouseenter', SECTION_NAV_SEL + ' li')
                .off('mouseleave', SECTION_NAV_SEL + ' li')
                .off('click touchstart', SLIDES_NAV_LINK_SEL)
                .off('mouseover', options.normalScrollElements)
                .off('mouseout', options.normalScrollElements);

            $(SECTION_SEL)
                .off('click touchstart', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function(){
                setSrc($(this), 'src');
            });

            ctSrc($(this), 'srcset');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css( {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            $(SLIDE_SEL).css( {
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.eacName);
                }
            });

            //removing added classes
            s(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINERceWith(this.childNodes);
            });

            //removing the applied transition from the fullpage wrapper
            container.css({
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINlue).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally chaable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax'];
            //UNCODE.addition
            // if($('html').hasClass(ENABLED)){
            //     showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
            //     return;
            // }

            // Disable mutually exclusive settings
            //UNCODE.addition
            // if (options.continuousVertical &&
            //     (options.loopTop || options.loopBottom)) {
            //     options.continuousVertical = false;
            //     showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            // }

            // if(options.scrollBar && options.scrollOverflow){
            //     showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            // }

            // if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
            //     options.continuousVertical = false;
            //     showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            // }

            //using extensions? Wrong file!
            $.each(extensions, function(index, extension){
                //is the option set to true?
                if(options[extension]){
                    showError('warn', 'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NArty');
                }
            });
        }

        /**
        * Shows a message in the console[type]('fullPage: ' + text);
        }

    }; //end of $.fn.fullpage

    if(typeof IScroll !== 'undefined'){
        /*
        * Turns iScroll `mousewheel` option off dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener('wheel', this);
            this.wrapper.addEventListener('mousewheel', this);
            this.wrapper.addEventListener('DOMMouseScroll', this);
        };

        /*
        * Turns iScroll `mousewheel` option on dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        *ner('DOMMouseScroll', this);
        };
    }

    /**
     * An object to handle overflow scrolling.
     * This uses jquery.slimScroll to accomplish overflow scrolling.
     * It is possible to pass in an alternate scrollOverflowHandler
     * to the fullpage.js option that implements the same functions
     * as this handler.
     *
     * @type {Object}
     */
    var iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],

        // Enables or disables the mouse wheel for the active section or all slides in it
        toggleWheel: function(value){
            var scrollable = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL);
            scrollable.each(function(){
                var iScrollInstance = $(this).data('iscrollInstance');
                if(typeof iScrollInstance !== 'undefined' && iScrollInstance){
                    if(value){
                        iScrollInstance.wheelOn();
                    }
                    else{
                        iScrollInstance.wheelOff();
                    }
                }
            });
        },

        /**
        * Turns off iScroll for the destination section.
        * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
        * scroll the destination section/slide before the sections animations ends.
        */
        onLeave: function(){
            iscrollHandler.toggleWheel(false);
        },

        // Turns off iScroll for the leaving section
        beforeLeave: function(){
            iscrollHandler.onLeave()
        },

        // Turns on iScroll on section load
        afterLoad: function(){
            iscrollHandler.toggleWheel(true);
        },

        /**
         * Called when overflow scrolling is needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        create: function(element, scrollHeight) {
            var scrollable = element.find(SCROLLABLE_SEL);

            scrollable.height(scrollHeight);
            scrollable.each(function() {
                var $this = $(this);
                var iScrollInstance = $this.data('iscrollInstance');
                if (iScrollInstance) {
                    $this).destroy();
                    });
                }

                iScrollInstance = new IScroll($this.get(0), iscrollOptions);
                iscrollHandler.iScrollInstances.push(iScrollInstance);

                //off by default until the section gets active
                iScrollInstance.wheelOff();

                $this.data('iscrollInstance', iScrollInstance);
            });
        },

        /**
         * Return a boolean depending on whether the scrollable element is a
         * the end or at the start of the scrolling depending on the given type.
         *
         * @param  {String}  type       Either 'top' or 'bottom'
         * @param  {Object}  scrollable jQuery object for the scrollable element
         * @return {Boolean}
         */
        isScrolled: function(type, scrollable) {
            var scroller = scrollable.data('iscrollInstance');

            //no scroller?
            if (!scroller) {
                return true;
            }

            //Uncode addition
            var uncode_body_borders = parseFloat($('.body-borders').attr('data-border')) || 0;
            //End Uncode addition

            if (type === 'top') {
                return scroller.y >= 0 && !scrollable.scrollTop();
            } else if (type === 'bottom') {
                //Uncode change
                // return (0 - scroller.y) + scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
                return (0 - scroller.y) + scrollable.scrollTop() + 1 + ( uncode_body_borders * 2 ) + scrollable.innerHeight() >= scrollable[0].scrollHeight;
                //End Uncode change
            }
        },

        /**
         * Returns the scrollable element for the given section.
         * If there are landscape slides, will only return a scrollable element
         * if it is in the active slide.
         *
         * @param  {Object}  activeSection jQuery object containing current section
         * @return {Boection.find(SCROLLABLE_SEL);
        },

        /**
         * Returns the scroll height of the wrapped content.
         * If this is larger than the window height minus section padding,
         * overflow scrolling is needed.
         *
         * @param  {Object} element jQuery object containing current section
         * @return {Numfirst().get(0).scrollHeight;
        },

        /**
         * Called when overflow scrolling is no longer needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         */
        remove: function(element) {
            var scrollable = element.find(SCROLLABLE_SEL);
            if (scrollable.length) {
                var iScrollInstance = scrollable.data('iscrollInstance');
                iScrollInstance.destroy();

                scrollable.data('iscrollInstance', null);
            }
            element.find(SCROLLABLE_SEL).children().first().children().first().unwrap().unwrap();
        },

        /**
         * Called when overflow scrolling has already been setup but the
         * window height has potentially changed.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        update: function(element, scrollHeight) {
            //using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
            //short period of time.
            //it also comes on handy because iScroll requires the use of timeout when using `refresh`.
            clearTimeout(iscrollHandler.refreshId);
           h();
                });
            }, 150);

            //updating the wrappers height
            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
        },

        /**
         * Called to get any additional elements needed to wrap the section
         * content in order to facilitate overflow scrolling.
         *
         * @return {String|Object} Can be a string containing HTML,
         *                         a DOM element, or jQuery ob"fp-scroller"obal.window = global.window || {}));
}(this, (function (exports) { 'use strict';

	/*!
	 * ScrollTrigger 3.8.0
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2021, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/
	var gsap,
	    _coreInitted,
	    _win,
	    _doc,
	    _docEl,
	    _body,
	    _root,
	    _resizeDelay,
	    _raf,
	    _request,
	    _toArray,
	    _clamp,
	    _time2,
	    _syncInterval,
	    _refreshing,
	    _pointerIsDown,
	    _transformProp,
	    _i,
	    _prevWidth,
	    _prevHeight,
	    _autoRefresh,
	    _sort,
	    _suppressOverwrites,
	    _ignoreResize,
	    _limitCallbacks,
	    _startup = 1,
	    _proxies = [],
	    _scrollers = [],
	    _getTime = Date.now,
	    _time1 = _getTime(),
	    _lastScrollTime = 0,
	    _enabled = 1,
	    _passThrough = function _passThrough(v) {
	  return v;
	},
	    _getTarget = function _getTarget(t) {
	  return _toArray(t)[0] || (_isString(t) ? console.warn("Element not ound(value * 100000) / 100000 || 0;
	},
	    _windowExists = function _windowExists() {
	  return typeof windoap) && gsap.registere) {
	  return !!~_rooes.indexOf(element) + 1][property];
	},
	    _getScrollFunc = function _getScrollFunc(element, _ref) {
	  var s = _ref.s,
	      sc = _ref.sc;

	  var i = _scrollers.indexOf(element),
	      offset = sc === _vertical.sc ? 1 : 2;

	  !~i && (i = _scrollers.push(element) - 1);
	  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(eleme element[s] = value : element[s];
	  }));
	},
	    _getBoundsFunc = function _getBoundsFunc(element) {
	  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
	    _winOffsets.width = _win.innerWidth;
	    _winOffsets.height = _win.innerH
	    return _getBounds(elcroller["client" + d2]) () {
	    return _winOffsets;
	  };
	},
	    _maxScroll = function _maxScroll(element, _ref3) {
	  var s = _ref3.s,
	      d2 = _ref3.d2,
	      d = _ref3.d,
	      a = _ref3.a;
	  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_body[s] || _docEl[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset"[i + 1], _autoRefresh[i + 2]);
	  }
	},
	    _isString = function _isString(value) {
	  return typeof value === "string";
	},
	    _isFunction = function _isFunction(value) {
	  return typeof value === "function";
	},
	    _isNumber = function _isNumber(value) {
	  return typeof va  return typeof value === "object";
	},
	    _callIfFunc = function _callIfFunc(value) {
	  return _isFunction(value) && value();
	},
	    _combineFunc = fun    _callIfFunc(result2);
: 1) && pause && animation.pause();
	},
	    _callback = function _callback(self, func) {
	  var result = func(self);
	  result && result.totalTime && (self.callbackAnimation = result);
	},
	    _abs = Math.abs,
	    _scrollLeft = "scrollLeft",
	    _scrollTop = "scrollTop",
	    _left = "left",
	    _top = "top",
	    _right = "right",
	    _bottom = "bottom",
	    _width = "width",
	    _height = "height",
	    _Right = "Right",
	    _Left = "Left",
	    _Top = "Top",
	    _Bottom = "Bottom",
	    _padding = "padding",
	    _margin = "margin",
	    _Width = "Width",
	    _Height = "Height",
	    _px = "px",
	    _horizontal = {
	  s: _scrollLeft,
	  p: _left,
	  p2: _Left,
	  os: _right,
	  os2: _Right,
	  d: _wLeft] || _body[_scrollLeft] || 0;
	  }
	},
	    _vertical = {
	  s: _scrollTop,
	  p: _top,
	  p2: _Top,
	  os: _bottom,
	  os2: _Bottom,
	  d: _height,
	  d2: _Height,llTop] || _body[_scrollTop] || 0;
	  }
	},
	    _getComputedStyle = function _getComputedStyle(element) {
	  return _win.getComputedStyle(== "fixed" ? position defaults[p]);
	  }ogress(0).kill();d2] || element["client" + d2[p] / duration);
	  }

	 atioArray(animation), value);
	  };
	},
	    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
	  var snap = gsap.utils.snap(snapIncrementOrArray),
	      a = Array.isArray(snapIncrementOrArray)ction (a, b) {
	    return a - b;
	  });
	  return a ? function (value, direction) {
	    var i;

	    if (!direction) {
	      return snap(value);
	    }

	    if (direction > 0) {
	      value -= 1e-4;

	      for (i = 0; i < a.length; i++) {
	        if (a[i] >= value) {
	          return a[i];
	        }
	      }

	      return a[i - 1];
	    } else {
	      i = a.length;
	      value += 1e-4;

	      while (i--) {
	        if (a[i] <= value) {
	          return a[i];
	        }
	      }
	    }

	    return a[0];
	  } : function (value, direction) {
	    var snapped = snap(value);
	    return !direction || Math.abs(snapped - value) < 0.001 || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);eline))(value, st.direcnc(element, type, callback);
	  });
	},
	    _addListener = function _addListener(element, type, func) {
	  return element.addEventListener(type, func, {
	    passive: nt.removeEventListener(type, func);
	},
	    _markerDefaults = {
	  startColor: "green",
	  endColor: "red",
	  indent: 0,
	  fontSize: "16px",
	  fontWeight: "normal"
	},
	    _defaults = {
	  toggleActions: "play",
	  anticipatePin: 0
	},
	    _keywords = {
	  top: 0,
	  left: 0,
	  center: 0.5,
	  bottom:alue) || 0);
	  }

	   direction, isStart);

	 + "px";
	  gsap.set(marker, vars);
	},
	    _triggers = [],
	    _ids = {},
	    _sync = function _sync() {
	  return _getTime() - _lastScrollTime > 20 && _updateAll();
	},
	    _onScroll = function _onScroll() {
	  var time = _getTime();

	  if (_lastScrollTime !== time) {
	    _updateAll();

	    _lastScrollTime || _dispatch("scrollStart");
	    _lastScrollTime = time;
	  } else if (!_request) {
	    _request = _raf(_updateAll);
	  }
	},
	    _onResize = function _onResize() {
	  return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
	},
	    _listeners = {},
	    _emptyArray = [],
	    _media = [],
	    _creatingMedia,
	    _lastMediaTick,
	    _onMediaChange = function _onMediaChange(e) {
	  var tick = gsap.ticker.frame,
	      matches = [],
	      i = 0,
	      index;

	  if (_lastMediaTick !== tick || _startup) {
	    _revertAll();

	    for (; i < _media.length; i += 4) {
	      index = _win.matchMedia(_media[i]).matches;

	      if (index !== _media[i + 3]) {
	        _media[i + 3] = index;
	        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
	      }
	    }

	    _revertRecorded();

	    for (i = 0; i < matches.length; i++) {
	      index = matches[i];
	      _creatingMedia = _media[index];
	      _media[index + 2] = _media[index + 1](e);
	    }

	    _creatingMedia = 0;
	    _coreInitted && _refreshAll(0, 1);
	    _lastMediaTick = tick;

	    _dispatch("matc_softRefresh) || _  return f();
	  }) || _emptyArray;
	},
	    _savedStyles = [],
	    _revertRecorded = function _revertRecorded(media) {
	  for (var i = 0; i < _savedStyles.length; i += 5) {
	    if (!media || _savedStyles[i + 4] === media) {
	      _savedStyles[i].style.cssText = _savedStyles[i + 1];
	      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
	      _savedStyles[i + 3].uncache = 1;
	    }
	  }
	},
	    _revertAll = function _revertAll(kill, media) {
	  var trigger;

	  for (_i = 0; _i < _triggers.length; _i++) {
	    trigger = _triggers[_i];

	    if (!media || trigger.media === media) {
	      if (kill) {
	        trigger.kill(1);
	      } else {
	        trigger.revert();
	      }
	    }
	  }

	  media && _revertRecorded(media);
	  media || _dispatch("revert");
	},
	    _clearScrollMemory = function _clearScrollMemory() {
	  return _scrollers.forEach(function (obj) {
	    return typeof obj === "function" && (obj.rec = 0);
	  });
	},
	    _refreshingAll,
	    _refreshAll = function _refreshAll(force, skipRevert) {
	  if (_lastScrollTime && !force) {
	    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	    return;
	  }

	  _refreshingAll = true;

	  var refreshInits = _dispatch("refreshInit");

	  _sort && ScrollTrigger.sort();
	  skipRevert || _revertAll();

	  _triggers.forEach(function (t) {
	    return t.refrsult.render && result.render(-1);
	  });

	  _clearScrollMemory();

	  _resizeDelay.pause();

	  _refreshingAll = false;

	  _dispatch("refresh");
	},
	    _lastScroll = 0,
	    _direction = 1,
	    _updateAll = function _updateAll() {
	  if (!_refreshingAll) {
	    var l = _triggers.length,
	        time = _getTime(),
	        recordVelocity = time - _time1 >= 50,
	        scroll = l && _triggers[0].scroll();

	    _direction = _lastScroll > scroll ? -1 : 1;
	    _lastScroll = scroll;

	    if (recordVelocity) {
	      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
	        _lastScrollTime = 0;

	        _dispatch("scrollEnd");
	      }

	      _time2 = _time1;
	      _time1 = time;
	    }

	    if (_direction < 0) {
	      _i = l;

	      while (_i-- > 0) {
	        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	      }

	      _direction = 1;
	    } else {
	      for (_i = 0; _i < l; _i++) {
	        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
	      }
	    }

	    _request = 0;
	  }
	},
	    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
	    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
	    _swapPinOut = function _swapPinOut(pin, spacer, state) {
	  _setState(state);

	  var cache = pin._gsap;

	  if (cache.spacerIsNative) {
	    _setState(cache.spacerState);
	  } else if (pin.parentNode === spacer) {
	    var parent = spacer.parentNode;

	    if (parent) {
	      parent.insertBefore(pin, spacer);
	      parent.removeChild(spacer);
	    }
	  }
	},
	    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
	  if (pin.parentNode !== spacer) {
	    var i = _propNamesToCopy.length,
	        spacerStyle = spacer.style,
	        pinStyle = pin.style,
	        p;

	    while (i--) {
	      p = _propNamesToCopy[i];
	      spacerStyle[p] = cs[p];
	    }

	    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
	    cs.display === "inline" && (spacerStyle.display = "inline-block");
	    pinStyle[_bottom] = pinStyle[_right] = "auto";
	    spacerStyle.overflow = "visible";
	    spacerStyle.boxSizing = "border-box";
	    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
	    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
	    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

	    _setState(spacerState);

	    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
	    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
	    pinStyle[_padding] = cs[_padding];
	    pin.parentNode.insertBefore(spacer, pin);
	    spacer.appendChild(pin);
	  }
	},
	    _oLowerCase());
	  state.t = element;
sult.t = state.t;
	  return result;
	},
	    _winOffsets = {
	  left: 0,
	  top: 0
	},
	    _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
	  _isFunction(value) && (value = value(self));

	  if (_isString(value) && value.substr(0, 3) === "max") {
	    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
	  }

	  var time = containerAnimation ? containerAnimation.time() : 0,
	      p1,
	      p2,
	      element;
	  containerAnimation && containerAnimation.seek(0);

	  if (!_isNumber(value)) {
	    _isFunction(trigger) && (trigger = trigger(self));
	    var offsets = value.split(" "),
	        bounds,
	        localOffset,
	        globalOffset,
	        display;
	    element = _getTarget(trigger) || _body;
	    bounds = _getBounds(element) || {};

	    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
	      display = element.style.display;
	      element.style.display = "block";
	      bounds = _getBounds(element);
	      display ? element.style.display = display : element.style.removeProperty("display");
	    }

	    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
	    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
	    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
	    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
	    scrollerSize -= scrollerSize - globalOffset;
	  } else if (markerScroller) {
	    _positionMarker(markerScroller, scrollerSize, direction, true);
	  }

	  if (marker) {
	    var position = value + scrollerSize,
	        isStart = marker._isStart;
	    p1 = "scroll" + direction.d2;

	    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

	    if (useFixedPosition) {
	      scrollerBounds = _getBounds(markerScroller);
	      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
	    }
	  }

	  if (containerAnimation && element) {
	    p1 = _getBounds(element);
	    containerAnimation.seek(scrollerMax);
	    p2 = _getBounds(element);
	    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
	    value = value / containerAnimation._caScrollDist * scrollerMax;
	  }

	  containerAnimation && containerAnimation.seek(time);
	  return containerAnimation ? value : Math.round(value);
	},
	    _prefixExp = /(?:webkit|moz|len  parent.appendChild(element);
	  }
	},
	    _getTweenCreator = function _getTweenCreator(scroller, direction) {
	  var getScroll = _getScrollFunc(scroller, direction),
	      prop = "_scroll" + direction.p2,
	      lastScroll1,
	      lastScroll2,
	      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
	    var tween = getTween.tween,
	        onComplete = vars.onComplete,
	        modifiers = {};
	    tween && tween.kill();
	    lastScroll1 = Math.round(initialValue);
	    vars[prop] = scrollTo;
	    vars.modifiers = modifiers;

	    modifiers[prop] = function (value) {
	      value = _round(getScroll());

	      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
	        tween.kill();
	        getTween.tween = 0;
	      } else {
	        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
	      }

	      lastScroll2 = lastScroll1;
	      return lastScroll1 = _round(vlete && onComplete.call(tween);
	    };

	    tween = getTween.tween = gsap.to(scroller, vars);
	    return tween;
	  };

	  scroller[prop] = getScroll;n.kill() && (getTween.tween = 0);
	  }, {
	    passive: true
	  });
	  return getTween;
	};

	_horizontal.op = _vertical;
	    this.init(vars, animation);
	  }

	  var _proto = ScrollTrigger.prototype;

	  _proto.init = function init(vars, animation) {
	    this.progress = this.start = 0;
	    this.vars && this.kill(1);

	    if (!_enabled) {
	      this.update = this.refresh = this.kill = _passThrough;
	      return;
	    }

	    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
	      trigger: vars
	    } : vars, _defaults);

	    var _vars = vars,
	        onUpdate = _vars.onUpdate,
	        toggleClass = _vars.toggleClass,
	        id = _vars.id,
	        onToggle = _vars.onToggle,
	        onRefresh = _vars.onRefresh,
	        scrub = _vars.scrub,
	        trigger = _vars.trigger,
	        pin = _vars.pin,
	        pinSpacing = _vars.pinSpacing,
	        invalidateOnRefresh = _vars.invalidateOnRefresh,
	        anticipatePin = _vars.anticipatePin,
	        onScrubComplete = _vars.onScrubComplete,
	        onSnapComplete = _vars.onSnapComplete,
	        once = _vars.once,
	        snap = _vars.snap,
	        pinReparent = _vars.pinReparent,
	        pinSpacer = _vars.pinSpacer,
	        containerAnimation = _vars.containerAnimation,
	        fastScrollEnd = _vars.fastScrollEnd,
	        preventOverlaps = _vars.preventOverlaps,
	        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
	        isToggle = !scrub && scrub !== 0,
	        scroller = _getTarget(vars.scroller || _win),
	        scrollerCache = gsap.core.getCache(scroller),
	        isViewport = _isViewport(scroller),
	        useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
	        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
	        toggleActions = isToggle && vars.toggleActions.split(" "),
	        markers = "markers" in vars ? vars.markers : _defaults.markers,
	        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
	        self = this,
	        onRefreshInit = vars.onRefreshInit && function () {
	      return vars.onRefreshInit(self);
	    },
	        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
	        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
	        lastSnap = 0,
	        scrollFunc = _getScrollFunc(scroller, direction),
	        tweenTo,
	        pinCache,
	        snapFunc,
	        scroll1,
	        scroll2,
	        start,
	        end,
	        markerStart,
	        markerEnd,
	        markerStartTrigger,
	        markerEndTrigger,
	        markerVars,
	        change,
	        pinOriginalState,
	        pinActiveState,
	        pinState,
	        spacer,
	        offset,
	        pinGetter,
	        pinSetter,
	        pinStart,
	        pinChange,
	        spacingStart,
	        spacerState,
	        markerStartSetter,
	        markerEndSetter,
	        cs,
	        snap1,
	        snap2,
	        scrubTween,
	        scrubSmooth,
	        snapDurClamp,
	        snapDelayedCall,
	        prevProgress,
	        prevScroll,
	        prevAnimProgress,
	        caMarkerSetter;

	    self.media = _creatingMedia;
	    anticipatePin *= 45;
	    self.scroller = scroller;
	    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
	    scroll1 = scrollFunc();
	    self.vars = vars;
	    animation = animation || vars.animation;
	    "refreshPriority" in vars && (_sort = 1);
	    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
	      top: _getTweenCreator(scroller, _vertical),
	      left: _getTweenCreator(scroller, _horizontal)
	    };
	    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

	    if (animation) {
	      animation.vars.lazy = false;
	      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
	      self.animation = animation.pause();
	      animation.scrollTrigger = self;
	      scrubSmooth = _isNumber(scrub) && scrub;
	      scrubSmooth && (scrubTween = gsap.to(animation, {
	        ease: "power3",
	        duration: scrubSmooth,
	        onComplete: function onComplete() {
	          return onScrubComplete && onScrubComplete(self);
	        }
	      }));
	      snap1 = 0;
	      id || (id = animation.vars.id);
	    }

	    _triggers.push(self);

	    if (snap) {
	      if (!_isObject(snap) || snap.push) {
	        snap = {
	          snapTo: snap
	        };
	      }

	      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
	        scrollBehavior: "auto"
	      });
	      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(anisnapTo)(value, st.direction);
	      } : gsap.utils.snap(snap.snapTo);
	      snapDurClamp = snap.duration || {
	        min: 0.1,
	        max: 2
	      };
	      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
	      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
	        if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown && lastSnap !== scrollFunc()) {
	          var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
	              velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
	              change1 = gsap.utils.clamp(-self.progress, 1 - self.progress, _abs(velocity / 2) * velocity / 0.185),
	              naturalEnd = self.progress + (snap.inertia === false ? 0 : change1),
	              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
	              scroll = scrollFunc(),
	              endScroll = Math.round(start + endValue * change),
	              _snap = snap,
	              onStart = _snap.onStart,
	              _onInterrupt = _snap.onInterrupt,
	              _onComplete = _snap.onComplete,
	              tween = tweenTo.tween;

	          if (scroll <= end && scroll >= start && endScroll !== scroll) {
	            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
	              return;
	            }

	            if (snap.inertia === false) {
	              change1 = endValue - self.progress;
	            }

	            tweenTo(endScroll, {
	              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
	              ease: snap.ease || "power3",
	              data: _abs(endScroll & _onInterrupt(self);
	              },
	              onComplete: function onComplete() {
	                lastSnap = scrollFunc();
	                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
	                onSnapComplete && onSnapComplete(self);
	                _onComplete && _onComplete(self);
	              }
	            }, scroll, change1 * change, endScroll - scroll - change1 * change);
	            onStart && onStart(self, tweenTo.tween);
	          }
	        } else if (self.isActive) {
	          snapDelayedCall.restart(true);
	        }
	      }).pause();
	    }

	    id && (_ids[id] = self);
	    trigger = self.trigger = _getTarget(trigger || pin);
	    pin = pin === true ? trigger : _getTarget(pin);
	    _isString(toggleClass) && (toggleClass = {
	      targets: trigger,
	      className: toggleClass
	    });

	    if (pin) {
	      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
	      self.pin = pin;
	      vars.force3D !== false && gsap.set(pin, {
	        force3D: true
	      });
	      pinCache = gsap.core.getCache(pin);

	      if (!pinCache.spacer) {
	        if (pinSpacer) {
	          pinSpacer = _getTarget(pinSpacer);
	          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
	          pinCache.spacerIsNative = !!pinSpacer;
	          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
	        }

	        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
	        spacer.classList.add("pin-spacer");
	        id && spacer.classList.add("pin-spacer-" + id);
	        pinCache.pinState = pinOriginalState = _getState(pin);
	      } else {
	        pinOriginalState = pinCache.pinState;
	      }

	      self.spacer = spacer = pinCache.spacer;
	      cs = _getComputedStyle(pin);
	      spacingStart = cs[pinSpacing + direction.os2];
	      pinGetter = gsap.getProperty(pin);
	      pinSetter = gsap.quickSetter(pin, direction.a, _px);

	      _swapPinIn(pin, spacer, cs);

	      pinState = _getState(pin);
	    }

	    if (markers) {
	      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
	      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
	      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
	      offset = markerStartTrigger["offset" + direction.op.d2];
	      markerStart = _createMarker("start", id, scroller, direction, markerVars, offset, 0, containerAnimation);
	      markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset, 0, containerAnimation);
	      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

	      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
	        _makePositionable(isViewport ? _body : scroller);

	        gsap.set([markerStartTrigger, markerEndTrigger], {
	          force3D: true
	        });
	        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
	        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
	      }
	    }

	    if (containerAnimation) {
	      var oldOnUpdate = containerAnimation.vars.onUpdate,
	          oldParams = containerAnimation.vars.onUpdateParams;
	      containerAnimation.eventCallback("onUpdate", function () {
	        self.update(0, 0, 1);
	        oldOnUpdate && oldOnUpdate.apply(oldParams || []);
	s[_triggers.indexOfs[_triggers.indexOf(self) + 1];
	    };

	    self.revert = function (revert) {
	      var r = revert !== false || !self.enabled,
	          prevRefreshing = _refreshing;

	      if (r !== self.isReverted) {
	        if (r) {
	          self.scroll.rec || (self.scroll.rec = scrollFunc());
	          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
	          prevProgress = self.progress;
	          prevAnimProgress = animation && animation.progress();
	        }

	        markerStart && [markerStart, markerEnd, markerSlay = r ? "none" : "block";
	        });
	        r && (_refreshing = 1);
	        self.update(r);
	        _refreshing = prevRefreshing;
	        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
	        self.isReverted = r;
	      }
	    };

	    self.refresh = function (soft, force) {
	      if ((_refreshing || !self.enabled) && !force) {
	        return;
	      }

	      if (pin && soft && _lastScrollTime) {
	        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

	        return;
	      }

	      _refreshing = 1;
	      scrubTween && scrubTween.pause();
	      invalidateOnRefresh && animation && animation.progress(0).invalidate();
	      self.isReverted || self.revert();

	      var size = getScrollerSize(),
	          scrollerBounds = getScrollerOffsets(),
	          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
	          offset = 0,
	          otherPinOffset = 0,
	          parsedEnd = vars.end,
	          parsedEndTrigger = vars.endTrigger || trigger,
	          parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
	          pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer),
	          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
	          i = triggerIndex,
	          cs,
	          bounds,
	          scroll,
	          isVertical,
	          override,
	          curTrigger,
	          curPin,
	          oppositeScroll,
	          initted,
	          revertedPins;

	      while (i--) {
	        curTrigger = _triggers[i];
	        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
	        curPin = curTrigger.pin;

	        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
	          revertedPins || (revertedPins = []);
	          revertedPins.unshift(curTrigger);
	          curTrigger.revert();
	        }
	      }

	      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
	      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
	      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

	      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
	        if (~parsedEnd.indexOf(" ")) {
	          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
	        } else {
	          offset = _offsetToPx(parsedEnd.substr(2), size);
	          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
	          parsedEndTrigger = trigger;
	        }
	      }

	      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
	      change = end - start || (start -= 0.01) && 0.001;
	      offset = 0;
	      i = triggerIndex;

	      while (i--) {
	        curTrigger = _triggers[i];
	        curPin = curTrigger.pin;

	        if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation) {
	          cs = curTrigger.end - curTrigger.start;
	          (curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart) && (offset += cs);
	          curPin === pin && (otherPinOffset += cs);
	        }
	      }

	      start += offset;
	      end += offset;
	      self._pinPush = otherPinOffset;

	      if (markerStart && offset) {
	        cs = {};
	        cs[direction.a] = "+=" + offset;
	        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
	        gsap.set([markerStart, markerEnd], cs);
	      }

	      if (pin) {
	        cs = _getComputedStyle(pin);
	        isVertical = direction === _vertical;
	        scroll = scrollFunc();
	        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
	        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");

	        _swapPinIn(pin, spacer, cs);

	        pinState = _getState(pin);
	        bounds = _getBounds(pin, true);
	        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

	        if (pinSpacing) {
	          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
	          spacerState.t = spacer;
	          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
	          i && spacerState.push(direction.d, i + _px);

	          _setState(spacerState);

	          useFixedPosition && scrollFunc(prevScroll);
	        }

	        if (useFixedPosition) {
	          override = {
	            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
	            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
	            boxSizing: "border-box",
	            position: "fixed"
	          };
	          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
	          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
	          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
	          override[_padding] = cs[_padding];
	          override[_padding + _Top] = cs[_padding + _Top];
	          override[_padding + _Right] = cs[_padding + _Right];
	          override[_padding + _Bottom] = cs[_padding + _Bottom];
	          override[_padding + _Left] = cs[_padding + _Left];
	          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
	        }

	        if (animation) {
	          initted = animation._initted;

	          _suppressOverwrites(1);

	          animation.render(animation.duration(), true, true);
	          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
	          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
	          animation.render(0, true, true);
	          initted || animation.invalidate();

	          _suppressOverwrites(0);
	        } else {
	          pinChange = change;
	        }
	      } else if (trigger && scrollFunc() && !containerAnimation) {
	        bounds = trigger.parentNode;

	        while (bounds && bounds !== _body) {
	          if (bounds._pinOffset) {
	            start -= bounds._pinOffset;
	            end -= bounds._pinOffset;
	          }

	          bounds = bounds.parentNode;
	        }
	      }

	      revertedPins && revertedPins.forEach(function (t) {
	        return t.revert(false);
	      });
	      self.start = start;
	      self.end = end;
	      scroll1 = scroll2 = scrollFunc();

	      if (!containerAnimation) {
	        scroll1 < prevScroll && scrollFunc(prevScroll);
	        self.scroll.rec = 0;
	      }

	      self.revert(false);
	      _refreshing = 0;
	      animation && isToggle && animation._initted && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);

	      if (prevProgress !== self.progress) {
	        animation && !isToggle && animation.totalProgress(prevProgress, true);
	        self.progress = prevProgress;
	        self.update(0, 0, 1);
	      }

	      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
	      onRefresh && onRefresh(setTime() - _time2) * 1000 |elf.direction < 0, 1);
	  erlaps === name;
	      }) : a;
	    };

	    self.update = function (reset, recordVelocity, forceFake) {
	      if (containerAnimation && !forceFake && !reset) {
	        return;
	      }

	      var scroll = self.scroll(),
	          p = reset ? 0 : (scroll - start) / change,
	          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
	          prevProgress = self.progress,
	          isActive,
	          wasActive,
	          toggleState,
	          action,
	          stateChanged,
	          toggled,
	          isAtMax,
	          isTakingAction;

	      if (recordVelocity) {
	        scroll2 = scroll1;
	        scroll1 = containerAnimation ? scrollFunc() : scroll;

	        if (snap) {
	          snap2 = snap1;
	          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
	        }
	      }

	      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

	      if (clipped !== prevProgress && self.enabled) {
	        isActive = self.isActive = !!clipped && clipped < 1;
	        wasActive = !!prevProgress && prevProgress < 1;
	        toggled = isActive !== wasActive;
	        stateChanged = toggled || !!clipped !== !!prevProgress;
	        self.direction = clipped > prevProgress ? 1 : -1;
	        self.progress = clipped;

	        if (stateChanged && !_refreshing) {
	          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

	          if (isToggle) {
	            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
	            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
	          }
	        }

	        preventOverlaps && toggled && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
	          return t.endAnimation();
	        }));

	        if (!isToggle) {
	          if (scrubTween && !_refreshing && !_startup) {
	            scrubTween.vars.totalProgress = clipped;
	            scrubTween.invalidate().restart();
	          } else if (animation) {
	            animation.totalProgress(clipped, !!_refreshing);
	          }
	        }

	        if (pin) {
	          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

	          if (!useFixedPosition) {
	            pinSetter(pinStart + pinChange * clipped);
	          } else if (stateChanged) {
	            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

	            if (pinReparent) {
	              if (!reset && (isActive || isAtMax)) {
	                var bounds = _getBounds(pin, true),
	                    _offset = scroll - start;

	                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
	              } else {
	                _reparent(pin, spacer);
	              }
	            }

	            _setState(isActive || isAtMax ? pinActiveState : pinState);

	            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
	          }
	        }

	        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
	        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) &&e"](toggleClass.className);
	        });
	        onUpdate && !isToggle && !reset && onUpdate(self);

	        if (stateChanged && !_refreshing) {
	          if (isToggle) {
	            if (isTakingAction) {
	              if (action === "complete") {
	                animation.pause().totalProgress(1);
	              } else if (action === "reset") {
	                animation.restart(true).pause();
	              } else if (action === "restart") {
	                animation.restart(true);
	              } else {
	                animation[action]();
	              }
	            }

	            onUpdate && onUpdate(self);
	          }

	          if (toggled || !_limitCallbacks) {
	            onToggle && toggled && _callback(self, onToggle);
	            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
	            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

	            if (!toggled) {
	              toggleState = clipped === 1 ? 1 : 3;
	              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
	            }
	          }

	          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
	            _endAnimation(self.callbackAnimation);

	            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
	          }
	        } else if (isToggle && onUpdate && !_refreshing) {
	          onUpdate(self);
	        }
	      }

	      if (markerEndSetter) {
	        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
	        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
	        markerEndSetter(n);
	      }

	      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
	    };

	    self.enable = function (reset, refresh) {
	      if (!self.enabled) {
	        self.enabled = true;

	        _addListener(scroller, "resize", _onResize);

	        _addListener(scroller, "scroll", _onScroll);

	        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

	        if (reset !== false) {
	          self.progress = prevProgress = 0;
	          scroll1 = scroll2 = lastSnap = scrollFunc();
	        }

	        refresh !== false && self.refresh();
o ? tweenTo.tween : scrubTween;
	    };

	    self.disable = function (reset, allowAnimation) {
	      if (self.enabled) {
	        reset !== false && self.revert();
	        self.enabled = self.isActive = false;
	        allowAnimation || scrubTween && scrubTween.pause();
	        prevScroll = 0;
	        pinCache && (pinCache.uncache = 1);
	        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

	        if (snapDelayedCall) {
	          snapDelayedCall.pause();
	          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
	        }

	        if (!isViewport) {
	          var i = _triggers.length;

	          while (i--) {
	            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
	              return;
	            }
	          }

	          _removeListener(scroller, "resize", _onResize);

	          _removeListener(scroller, "scroll", _onScroll);
	        }
	      }
	    };

	    self.kill = function (revert, allowAnimation) {
	      self.disable(revert, allowAnimation);
	      scrubTween && scrubTween.kill();
	      id && delete _ids[id];

	      var i = _triggers.indexOf(self);

	      _triggers.splice(i, 1);

	      i === _i && _direction > 0 && _i--;
	=== self.scroller && (i = 1);
	      });

	      i || (self.scroll.rec = 0);

	      if (animation) {
	        animation.scrollTrigger = null;
	        revert && animation.render(-1);
	        allowAnimation || animation.kill();
	      }

	      markerStart && [markerStart, markerEnd, markerS m.parentNode.removeChild(m);
	      });

	      if (pin) {
	        pinCache && (pinCache.uncache = 1);
	    eturn t.pin === pin && i++;
	        });

	        i || (pinCache.spacer = 0);
	      }
	    };

	    self.enable(false, false);
	    !animation || !animation.add || change ? sstart || end || self.refresh();
	    }) && (change = 0.01) && (start = end = 0);
	  };

	  ScrollTrigger.register = function register(core) {
	    if (!_coreInitted) {
	      gsap = core || _getGSAP();

	      if (_windowExists() && window.document) {
	        _win = window;
	        _doc = document;
	        _docEl = _doc.documentElement;
	        _body = _doc.body;
	      }

	      if (gsap) {
	        _toArray = gsap.utils.toArray;
	        _clamp = gsap.utils.clamp;
	        _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
	        gsap.core.globals("ScrollTrigger", ScrollTrigger);

	        if (_body) {
	          _raf = _win.requestAnimationFrame || function (f) {
	            return setTimeout(f, 16);
	          };

	          _addListener(_win, "wheel", _onScroll);

	          _root = [_win, _doc, _docEl, _body];

	          _addListener(_doc, "scroll", _onScroll);

	          var bodyStyle = _body.style,
	              border = bodyStyle.borderTopStyle,
	              bounds;
	          bodyStyle.borderTopStyle = "solid";
	          bounds = _getBounds(_body);
	          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
	          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
	          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
	          _syncInterval = setInterval(_sync, 200);
	          gsap.delayedCall(0.5, function () {
	            return _startup = 0;
	          });

	          _addListener(_doc, "touchcancel", _passThrough);

	          _addListener(_body, "touchstart", _passThrough);

	          _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
	            return _pointerIsDown = 1;
	          });

	          _multiListener(_addListeneeturn _pointerIsDown = 0;
	          });

	          _transformProp = gsap.utils.checkPrefix("transform");

	          _stateProps.push(_transformProp);

	          _coreInitted = _getTime();
	          _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
	          _aunResize();
	            }
	          }, _doc, "DOMContollTime || _refreshAll();
	          }, _win, "resize", _onResize];

	          _iterateAutoRefresh(_addListener);
	        }
	      }
	    }

	    return _coreInitted;
	  };

	  ScrollTrigger.defaults = function defaults(config) {
	    for (var p in config) {
	      _defaults[p] = config[p];
	    }
	  };

	  ScrollTrigger.kill = function kill() {
	    _enabled
	      return trigger.kill(1);
	    });
	  };

	  ScrollTrigger.config = function config(vars) {
	    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
	    var ms = vars.syncInterval;
	    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);

	    if ("autoRefreshEvents" in vars) {
	      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
	      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
	    }
	  };

	  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
	    var t = _getTarget(target),
	        i = _scrollers.indexOf(t),
	        isViewport = _isViewport(t);

	    if (~i) {
	      _scrollers.splice(i, isViewport ? 6 : 2);
	    }

	    isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
	  };

	  ScrollTrigger.matchMedia = function matchMedia(vars) {
	    var mq, p, i, func, result;

	    for (p in vars) {
	      i = _media.indexOf(p);
	      func = vars[p];
	      _creatingMedia = p;

	      if (p === "all") {
	        func();
	      } else {
	        mq = _win.matchMedia(p);

	        if (mq) {
	          mq.matches && (result = func());

	          if (~i) {
	            _media[i + 1] = _combineFunc(_media[i + 1], func);
	            _media[i + 2] = _combineFunc(_media[i + 2], result);
	          } else {
	            i = _media.length;

	            _media.push(p, func, result);

	            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
	          }

	          _media[i + 3] = mq.matches;
	        }
	      }

	      _creatingMedia = 0;
	    }

	    return _media;
	  };

	  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
	    query || (_media.length = 0);
	    query = _media.indexOf(query);
	    query >= 0 && _media.splice(query, 4);
.top + offset < _win.innerHeight;
	  };
top + offset) / _win.innerHeight;
	  };

	  return ScrollTrigger;
	}();
	ScrollTrigger.version = "3.8.0";

	ScrollTrigger.saveStyles = function (targets) {
	  return targets ? _toArray(targets).forEach(function (target) {
	    if (target && target.style) {
	      var i = _savedStyles.indexOf(target);

	      i >= 0 && _savedStyles.splice(i, 5);

	      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _creatingMedia);
	    }
	  }) : _sav	  return _revertAll(!softnew ScrollTrigger(vars, anir.register()) && _refreshAll(true);
	};

	ScrollTrigger.update = _updateAll;
	ScrollTrigger.clearScrollMemory = _clearScrizontal ? _horizontal : _verticalizontal ? _horizontal : _vertical);
	};

	ScrollTrigger.getById = function (id) {
	  return  () {
	  return _triggers.slicen () {
	  return !!_lastScrollTime;
	};

	ScrollTrigger.snapDirectional = _snapDirectionexOf(callback) || a.push(callback);
	};back);
	  i >= 0 && a.splconfig));
	  });

	  retfreshPriority || 0) * -1e6);
	  });
	};

	_getGSAP() && gsap.registerPlugin(ScrollTrigger);

	exports.ScrollTrigger = ScrollTrigger;
	exports.default = ScrollTrigger;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// COLLAPSE PUBLIC CLASS DEFINITION
	// ===========(this.options.toggle) this.toggle()
	}

	Collapse.DEFAULTS = {
		toggle: treturn hasWidth ? 'width' : 'height'
	}

	Collapse.prototype.show = function () {
		if (this.transitioning || this.$element.hasClass('in')) return

		var startEvent = $.Event('show.bs.collapse')
		this.$element.trigger(startEvent)
		if (startEvent.isDefaultPrevented()) return

		var actives = this.$parent && this.$parent.find('> .panel > .in')

		if (actives && actives.length) {
			var hasData = actives.data('bs.collapse')
			if (hasData && hasData.transitioning) return
			//START UNCODE EDIT
			var parentNoToggle = this.$parent.data('no-toggle')
			if (!parentNoToggle) {
				actives.collapse('hide')
			}
			//END UNCODE EDIT
			hasData || actives.data('bs.collapse', null)
		}

		var dimension = this.dimension()

		this.$element
			.removeClass('collapse')
			.addClass('collapsing')[dimension](0)

		this.transitioning = 1

		var complete = function (e) {
			if (e && e.target != this.$element[0]) return
			this.$element
				.removeClass('collapsing')
				.addClass('collapse in')[dimension]('auto')
			this.transitioning = 0
			this.$element.trigger('shown.bs.collapse')
		}

		if (!$.support.transition) return complete.call(this)

		var scrollSize = $.camelCase(['scroll', dimension].join('-'))

		this.$element
			.one($.support.transition.end, $.proxy(complete, this))
			.emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
	}

	Collapse.prototype.hide = function () {
		if (this.transitioning || !this.$element.hasClass('in')) return

		var startEvent = $.Event('hide.bs.collapse')
		this.$element.trigger(startEvent)
		if (startEvent.isDefaultPrevented()) return

		var dimension = this.dimension()

		this.$element[dimension](this.$element[dimension]())[0].offsetHeight

		this.$element
			.addClass('collapsing')
			.removeClass('collapse')
			.removeClass('in')

		this.transitioning = 1

		var complete = function (e) {
			if (e && e.target != this.$element[0]) return
			this.transitioning = 0
			this.$element
				.trigger('hidden.bs.collapse')
				.removeClass('collapsing')
				.addClass('collapse')
		}

		if (!$.support.transition) return complete.call(this)

		this.$element
			[dimension](0)
			.one($.support.transition.end, $.proxy(complete, this))
			.emulateTransitionEndhasClass('in') ? 'hide' : 'show']()
	}


	// COLLAPSE PLUGIN DEFINITION
	// ==========================

	varon == 'string') data[option]()
		})
	}

	$.fn.collapse.Constructor = Collapse


	// COLLAPSE NO CONFLICT
	// ====================

	$.fn.collapse.noConflict = function () {
		$.fn.collapse = old
		return this
	}


	// COLLAPSE DATA-API
	// =================

	$(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
		var $this   = $(this), href
		var target  = $this.attr('data-target')
				|| e.preventDefault()
				|| (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
		//Edited by Uncode to replace ID in panel [START]
		var _target = href.replace(/^#/, "");
		if ( $('[data-id="' + _target + '"]').length ) {
			var $target = $('[data-id="' + _target + '"]')
		} else {
			var $target = $(target)
		}
		//Edited by Uncode to replace ID in panel [END]
		var data    = $target.data('bs.collapse')
		var option  = data ? 'toggle' : $this.data()
		var parent  = $this.attr('data-parent')
		var $parent = parent && $(parent)

		if (!data || !data.transitioning) {
			if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
			$this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
		}

		$target.collapse(option)
	})

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    //Edited by Uncode to replace ID in panel [START]
    var _target = selector.replace(/^#/, "");
    if ( $('[data-id="' + _target + '"]').length )
      var $target = $('[data-id="' + _target + '"]')
    else
      var $target = $(selector)
    //Edited by Uncode to replace ID in panel [END]

    this.activate($this.parent('li'), $ul)
    threlatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active').add(container.find('> .active > .active'))
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      $active
        .find('.tab-excerpt').slideUp();

      element.addClass('active')
      $('.tab-excerpt', element).slideDown();

      //if (transition) {
        element[0].offsetWidth // reflow for transition
        element.add($active).addClass('in')
      /*} else {
        element.removeClass('fade')
      }*/

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // ===================== 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[datatDefault()
    $(this).tab('show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ==========.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0or: '' })) :
      this.fixTitle()
n () {
    return Tooltip.DEFAULTS
      }
    }

    return options
  }

  = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return
      var that = this;

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo($(document).find(this.options.container)) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.higger('shown.bs.' + that.type)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one($.support.transition.end, complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }rowOffsetPosition], arrowPosition)
  - delta / dimension) + '%') : '')s('fade in top bottom left rhoverState = null

    return the') || '').attr('title', '')
    }on () {
    return this.getTitle()
: 0, left: 0} : $element.offset())
  }

  T2, left: pos.left + pos.width   }

  }

  Tooltiet
      }
    }

    return del[0]) :  o.title)

    returs.$tip || $(this.options.temp this.tip().find('.tooltip-arrowl
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  {
    this.enabled = !this.enaelf.leave(self) : self.enter(seype).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  va== 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ==========$.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ========================================t.transition = transitionEnd()
  })

}(jQuery);


// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------indow)
		root.Rellax = factory();
	}
}(typeof window !== "undefined" ? window : global, function () {
	var Rellax = function(el, options){
		"use strict";

		var self = Object.create(Rellax.prototype);

		var posY = 0;
		var screenY = 0;
		var posX = 0;
		var screenX = 0;
		var blocks = [];
		var pause = true;

		// check what requestAnimationFrame to use, and if
		// it's not supported, use the onscroll event
		var loop = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
urn setTimeout(callback, 1000 / 60); };

		// store the id for later use
		var loopId = null;

		// Test via a getter in the options object to see if the passive property is accessed
		var supportsPassive = false;
		try {
			var opts = Object.de) {
					supportsPassive = true;
				}
			});
			window.addEventListener("testPassive", null, opts);
			window.removeEventListener("testPassive", null, opts);
		} catch (e) {}

		// check what cancelAnimation method to use
		var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;

		// check which transform property to use
		var tr		}
				}
				return 'transform';
			})();

		// Default Settings
		self.options = {
			speed: -2,
			verticalSpeed: null,
			horizontalSpeed: null,
			breakpoints: [576, 768, 1201],
			center: false,
			wrapper: null,
			relativeToWrapper: false,
			round: true,
			vertical: true,
			horizontal: false,
			verticalScrollAxis: "y",
			horizontalScrollAxis: "x",
			callback: function() {},
		};

		// User defined options (might have more in the future)
		if (optself.optioints option. Defaults reverted");
		}

		if (options && options.breakpoints) {
			validateCustomBreakpoints();
		}

		// By default, rellax class
		if (!el) {
			el = '.rellax';
		}

		// check if el is a className or a node
		var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];

		// Now query selector
		if (elements.length > 0) {
			self.elems = elements;
		}

		// The elements don't exist
		else {
			console.warn("Rellax: The elements you're trying to select don't exist.");
			return;
		}

		// Has a wrapper and it exists
		if (self.options.wrapper) {
			if (!self.options.wrapper.nodeType) {
				var wrapper = document.querySelector(self.options.wrapper);

				if (wrapper) {
					self.options.wrapper = wrapper;
				} else {
					console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
					return;
				}
			}
		}

		// set a placeholder for the current breakpoint
		var currentBreakpoint;

		// helper to determine current breakpoint
		var getCurrentBreakpoint = function (w) {
			var bp = self.options.breakpoints;
			if (w < bp[0]) return 'xs';
			if (w >= bp[0] && w < bp[1]) return 'sm';
			if (w >= bp[1] && w < bp[2]) return 'md';
			return 'lg';
		};

		// Get and cache initial positi[i]);
				blocks.push(block);
			}
		};


		// Let's kick this script off
		// Build array for cached element values
		var init = function() {
			for (var i = 0; i < blocks.length; i++){
				self.elems[i].style.cssText = blocks[i].style;
			}

			blocks = [];

			screenY = window.innerHeight;
			screenX = window.innerWidth;
			currentBreakpoint = getCurrentBreakpoint(screenX);

			setPosition();

			cacheBlocks();

			animate();

			// If paused, unpause and set listener for window resizing events
			if (pause) {
				window.addEventListener('resize', init);
				pause = false;
				// Start the loop
				update();
			}
		};

		// We want to cache the parallax blocks'
		// values: base, top, height, speed
		// el: is dom object, return: el cache values
		var createBlock = function(el) {
			var dataPercentage = el.getAttribute( 'data-rellax-percentage' );
			var dataSpeed = el.getAttribute( 'data-rellax-speed' );
			var dataXsSpeed = el.getAttribute( 'data-rellax-xs-speed' );
			var dataMobileSpeed = el.getAttribute( 'data-rellax-mobile-speed' );
			var dataTabletSpeed = el.getAttribute( 'data-rellax-tablet-speed' );
			var dataDesktopSpeed = el.getAttribute( 'data-rellax-desktop-speed' );
			var dataVerticalSpeed = el.getAttribute('data-rellax-vertical-speed');
			var dataHorizontalSpeed = el.getAttribute('data-rellax-horizontal-speed');
			var dataVericalScrollAxis = el.getAttribute('data-rellax-vertical-scroll-axis');
			var dataHorizontalScrollAxis = el.getAttribute('data-rellax-horizontal-scroll-axis');
			var dataZindex = el.getAttribute( 'data-rellax-zindex' ) || 0;
			var dataMin = el.getAttribute( 'data-rellax-min' );
			var dataMax = el.getAttribute( 'data-rellax-max' );
			var dataMinX = el.getAttribute('data-rellax-min-x');
			var dataMaxX = el.getAttribute('data-rellax-max-x');
			var dataMinY = el.getAttribute('data-rellax-min-y');
			var dataMaxY = el.getAttribute('data-rellax-max-y');
			var mapBreakpoints;
			var breakpoints = true;

			if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
				breakpoints = false;
			} else {
				mapBreakpoints = {
					'xs': dataXsSpeed,
					'sm': dataMobileSpeed,
					'md': dataTabletSpeed,
					'lg': dataDesktopSpeed
				};
			}

			// initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
			// ensures elements are positioned based on HTML layout.
			//
			// If the element has the percentage attribute, the posY and posX needs to be
			// the current scroll position's value, so that the elements are still positioned based on HTML layout
			var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
			// If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
			if (self.options.relativeToWrapper) {
				var scrollPosY = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
				wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
			}
			var posY = self.options.vertical ? ( dataPercentage || self.options.center ? wrapperPosY : 0 ) : 0;
			var posX = self.options.horizontal ? ( dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) : 0 ) : 0;

			var blockTop = posY + el.getBoundingClientRect().top;
			var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

			var blockLeft = posX + el.getBoundingClientRect().left;
			var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

			// apparently parallax equation everyone uses
			var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
			var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);
			if(self.options.center){ percentageX = 0.5; percentageY = 0.5; }

			// Optional individual block speed as data attr, otherwise global speed
			var speed = (breakpoints && mapBreakpoints[currentBreakpoint] !== null) ? Number(mapBreakpoints[currentBreakpoint]) : (dataSpeed ? dataSpeed : self.options.speed);
			var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
			var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;

			// Optional individual block movement axis direction as data attr, otherwise global movement direction
			var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
			var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;

			var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);

			// ~~Store non-translate3d transforms~~
			// Store inline styles and extract transforms
			var style = el.style.cssText;
			var transform = '';

			// Check if there's an inline styled transform
			var searchResult = /transform\s*:/i.exec(style);
			if (searchResult) {
				// Get the index of the transform
				var index = searchResult.index;

				// Trim the style to the transform point and get the following semi-colon index
				var trimmedStyle = style.slice(index);
				var delimiter = trimmedStyle.indexOf(';');

				// Remove "transform" string and save the attribute
				if (delimiter) {
					transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g,'');
				} else {
					transform = " " + trimmedStyle.slice(11).replace(/\s/g,'');
				}
			}

			return {
				baseX: bases.x,
				baseY: bases.y,
				top: blockTop,
				left: blockLeft,
				height: blockHeight,
				width: blockWidth,
				speed: speed,
				verticalSpeed: verticalSpeed,
				horizontalSpeed: horizontalSpeed,
				verticalScrollAxis: verticalScrollAxis,
				horizontalScrollAxis: horizontalScrollAxis,
				style: style,
				transform: transform,
				zindex: dataZindex,
				min: dataMin,
				max: dataMax,
				minX: dataMinX,
				maxX: dataMaxX,
				minY: dataMinY,
				maxY: dataMaxY
			};
		};

		// set scroll position (posY, posX)
		// side effect method is not ideal, but okay for now
		// returns true if the scroll changed, false ill did not change
			return false;
		};

		// Ahh a pure function, gets new transform value
		// based on scrollPosition and speed
		// Allow for decimal pixel values
		var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
			var result = {};
			var valueX = ((horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX)));
			var valueY = ((verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY)));

			result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
			result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;

			return result;
		};

		// Remove event listenersop again
			loopId = loop(update);
		};

		// Loop
		var update = function() {
			if (setPosition() && pause === false) {
				animate();

				// loop again
				loopId = loop(update);
			} else {
				loopId = null;

				// Don't animate until we get a position updating event
				window.addEventListener('resize', deferredUpdate);
				window.addEventListener('orientationchange', deferredUpdate);
				(self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? { passive: true } : false);
				(self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? { passive: true } : false);
			}
		};

		// Transform3d on parallax element
		var animate = function() {
			var positions;
			for (var i = 0; i < self.elems.length; i++){
				// Determine relevant movement directions
				var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
				var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
				var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
				var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
				var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
				var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;

				var percentageY = ((verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY));
				var percentageX = ((verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX));

				// Subtracting initialize value, so element stays in same spot as HTML
				positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
				var positionY = positions.y - blocks[i].baseY;
				var positionX = positions.x - blocks[i].baseX;

				// The next two "if" blocks go like this:
				// Check if a limit is defined (first "min", then "max");
				// Check if we need to change the Y or the X
				// (Currently working only if just one of the axes is enabled)
				// Then, check if the new position is inside the allowed limit
				// If so, use new position. If not, set position to limit.

				// Check if a min limit is defined
				if (blocks[i].min !== null) {
					if (self.options.vertical && !self.options.horizontal) {
						positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
					}
					if (self.options.horizontal && !self.options.vertical) {
						positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
					}
				}

				// Check if directional min limits are defined
				if (blocks[i].minY != null) {
						positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
				}
				if (blocks[i].minX != null) {
						positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
				}

				// Check if a max limit is defined
				if (blocks[i].max !== null) {
					if (self.options.vertical && !self.options.horizontal) {
						positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
					}
					if (self.options.horizontal && !self.options.vertical) {
						positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
					}
				}

				// Check if directional max limits are defined
				if (blocks[i].maxY != null) {
						positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
				}
				if (blocks[i].maxX != null) {
						positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
				}

				var zindex = blocks[i].zindex;

				// Move that element
				// (Set the new translation and append initial inline transforms.)
				var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
				self.elems[i].style[transformProp] = translate;
			}
			self.options.callbearLoop(loopId);
			loopId = null;
		};

		// Init
		init();

		// Allow to recalculate the initial values whenever we want
		self.refresh = init;

		return self;
	};
	return Rellax;
}));

/*
 * OKVideo by OKFocus v2.3.2
 * http://okfoc.us
 *
 * Copyright 2014, OKFocus
 * Licensed under the MIT license.
 *
 */
var player, OKEvents, options, videoWidth, videoHeight, YTplayers, youtubePlayers = new Array();
// youtube player ready
function onYouTubeIframeAPIReady() {
	YTplayers = new Array();
	jQuery('.uncode-video-container.video').each(function() {
		var playerY;
		if (jQuery(this).attr('data-provider') == 'youtube') {
			var id = jQuery(this).attr('data-id'),
				start = jQuery(this).attr('data-start'),
				end = jQuery(this).attr('data-end');
			start = typeof start && start !== null ? start : 0;
			end = typeof end && end !== null ? end : 0;
			options = jQuery(window).data('okoptions-' + id);
			if ( typeof options === 'undefined' ) {
				return true;
			}
			options.time = jQuery(this).attr('data-t');
			playerY = new YT.Player('okplayer-' + id, {
				videoId: options.video ? options.video.id : null,
				playerVars: {
					'autohide': 1,
					'autoplay': jQuery(this).hasClass('is-no-control') ? options.autoplay : 0, //options.autoplay,
					'disablekb': 1,
					'cc_load_policy': options.captions,
					'controls': 0,
					'enablejsapi': 1,
					'fs': 0,
					'modestbranding': 1,
					'origin': window.location.origin || (window.location.protocol + '//' + window.location.hostname),
					'iv_load_policy': options.annotations,
					'loop': options.loop,
					'showinfo': 0,
					'rel': 0,
					'wmode': 'opaque',
					'hd': options.hd,
					'mute': 1,
					'start': start,
					'end': end
				},
				events: {
					'onReady': OKEvents.yt.ready,
					'onStateChange': OKEvents.yt.onStateChange,
					'onError': OKEvents.yt.error
				}
			});
			YTplayers[id] = playerY;
			playerY.videoId = id;
		}

	});
}
// vimeo player ready
function vimeoPlayerReady(id) {
	options = jQuery(window).data('okoptions-' + id);
	if ( typeof options === 'undefined' ) {
		return true;
	}
	var jIframe = options.jobject,
		iframe = jIframe[0];

	jIframe.attr('src', jIframe.data('src'));
	var playerV = new Vimeo.Player(iframe);
	// hide player until Vimeo hides controls...
	playerV.on('loaded', function(e) {
		OKEvents.v.onReady(iframe);
		var carouselContainer = jQuery(iframe).closest('.owl-carousel');
		if (carouselContainer.length) {
			UNCODE.owlPlayVideo(carouselContainer);
		}
		// "Do not try to add listeners or call functions before receiving this event."
		if (OKEvents.utils.isMobile()) {
			// mobile devices cannot listen for play event
			OKEvents.v.onPlay(playerV);
		} else {
			playerV.on('play', function(){
				OKEvents.v.onPlay(playerV);
				jQuery(window).trigger('okevents.v.play', [playerV]);
			});
			playerV.on('pause', function(){
				OKEvents.v.onPause;
				jQuery(window).trigger('okevents.v.pause', [playerV]);
			});
			playerV.on('ended', function(){
				OKEvents.v.onFinish
				jQuery(window).trigger('okevents.v.ended', [playerV]);
			});
		}
		if (options.time != null) {
			var optsTimeStr = (options.time).replace('t=', ''),
				timeV = '';

			if ( /[a-zA-Z]/g.test(optsTimeStr) ) {
				var timeArr = optsTimeStr.split(/([^\d.-])/);
				for ( var i = 0; i < timeArr.length; i++ ) {
					if ( timeArr[i] === 'h' ) {
						timeV += parseFloat(timeArr[i-1]) * 3600;
					} else if ( timeArr[i] === 'm' ) {
						timeV += parseFloat(timeArr[i-1]) * 60;
					} else if ( timeArr[i] === 's' ) {
						timeV += parseFloat(timeArr[i-1]);
					}
				}
			} else {
				timeV = optsTimeStr;
			}

			playerV.setCurrentTime(timeV);
		}

		playerV.setVolume(0);
		playerV.play();
		jQuery(iframe).css({
			visibility: 'visible',
			opacity: 1
		});
		jQuery(iframe).closest('.uncode-video-container:not(.t-entry-drop)').css('opacity', '1');
		jQuery(iframe).closest('#page-header').addClass('video-started');
		jQuery(iframe).closest('.background-wrapper').find('.block-bg-blend-mode.not-ie').css('opacity', '1');

		jQuery(window).trigger('okevents.v.loaded', [playerV]);
	});
}
OKEvents = {
	yt: {
		ready: function(event) {
			var id = event.target.videoId,
				$video = jQuery('#okplayer-' + id),
				options = jQuery(window).data('okoptions-' + id);
			if ( typeof options === 'undefined' ) {
				return true;
			}
			youtubePlayers[id] = event.target;
			event.target.setVolume(options.volume);
			if (options.autoplay === 1) {
				if (options.playlist.list) {
					player.loadPlaylist(options.playlist.list, options.playlist.index, options.playlist.startSeconds, options.playlist.suggestedQuality);
				} else {
					var inCarousel = $video.closest('.owl-item');
					if (!inCarousel.length || (inCarousel.length && inCarousel.hasClass('active'))) {
						if (options.time != null) {
							event.target.seekTo(parseInt(options.time));
						}
						event.target.playVideo();
					} else {
						event.target.pauseVideo();
					}
				}
			}
			OKEvents.utils.isFunction(options.onReady) && options.onReady(event.target);

			$video.closest('[data-provider]').on('uncode-resume', function(){
				if (options.time != null) {
					event.target.seekTo(parseInt(options.time)).playVideo();
				} else {
					event.target.seekTo(0).playVideo();
				}
			});

			$video.closest('[data-provider]').on('uncode-pause', function(){
				if (options.time != null) {
					event.target.seekTo(parseInt(options.time)).pauseVideo();
				} else {
					event.target.seekTo(0).pauseVideo();
				}
			});
			jQuery(window).trigger('okevents.y.loaded', [event]);
		},
		onStateChange: function(event) {
			var id = event.target.videoId,
				$video = jQuery('#okplayer-' + id),
				options = jQuery(window).data('okoptions-' + id);
			if ( typeof options === 'undefined' ) {
				return true;
			}
			youtubePlayers[id] = event.target;
			event.target.setVolume(options.volume);
			var $fluid = $video.closest('.fluid-object'),
				$tmb = $video.closest('.tmb'),
				setTime;
			switch (event.data) {
				case -1:
					OKEvents.utils.isFunction(options.unstarted) && options.unstarted();
					break;
				case 0:
					OKEvents.utils.isFunction(options.onFinished) && options.onFinished();
					options.loop && event.target.playVideo();
					break;
				case 1:
					OKEvents.utils.isFunction(options.onPlay) && options.onPlay();
					setTimeout(function() {
						UNCODE.initVideoComponent(document.body, '.uncode-video-container.video:not(.drop-move), .uncode-video-container.self-video:not(.drop-move)');
						jQuery('#okplayer-' + id).closest('.uncode-video-container:not(.t-entry-drop)').css('opacity', '1');
						jQuery('#okplayer-' + id).closest('#page-header').addClass('video-started');
						jQuery('#okplayer-' + id).closest('.background-wrapper').find('.block-bg-blend-mode.not-ie').css('opacity', '1');
					}, 300);
				break;
				case 2:
					OKEvents.utils.isFunction(options.onPause) && options.onPause();
					break;
				case 3:
					OKEvents.utils.isFunction(options.buffering) && options.buffering();
					break;
				case 5:
					OKEvents.utils.isFunction(options.cued) && options.cued();
					break;
				default:
					throw "OKVideo: received invalid data from YT player.";
			}

			jQuery(window).trigger('okeve function(event) {
			throw event;
		}
	},
	v: {
		onReady: function(target) {
			if ( typeof options === 'undefined' ) {
				return true;
			}
			OKEvents.utils.isFunction(options.onReady) && options.onReady(target);
		},
		onPlay: function(player) {
			if ( typeof options === 'undefined' ) {
				return true;
			}
			if (!OKEvents.utils.isMobile()) player.setVolume(options.volume);
			OKEvents.utils.isFunction(options.onPlay) && options.onPlay();
			jQuery(player.element).closest('.uncode-video-container:not(.t-entry-drop)').css('opacity', '1');
			jQuery(player.element).closest('#page-header').addClass('video-started');
			jQuery(player.element).closest('.background-wrapper').find('.block-bg-blend-mode.not-ie').css('opacity', '1');
		},
		onPause: function() {
			if ( typeof options === 'undefined' ) {
				return true;
			}
			OKEvents.utils.isFunction(options.onPause) && options.onPause();
		},
		onFinish: function() {
			if ( typeof options === 'undefined' ) {
				return true;
			}
			OKEvents.utils.isFunction(options.onFinish) && options.onFin			} else {
				} else {
				return false;
			}
		}
	}
};

/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.4
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */

'use strict';

(function () {

  'use strict';

/**
 * Pathformer
 * Beta version
 *
 * Take any SVG version 1.1 and transform
 * child elements to 'path' elements
 *
 * This code is purely forked from
 * https://github.com/Waest/SVGPathConverter
 */

/**
 * Class constructor
 *
 * @param {DOM|String} element  }

  // Start
  this.scan(element);
}

/**
 * List of tags which can be transformed
 * to path elements
 *
 * @type {Array}
 */
Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];

/**
 * List of attribute names which contain
 * data. This array list them to check if
 * they contain bad values, like percentage.
 *
 * @type {Array}
 */
Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];

/**
 * Finds the elements compatible for transform
 * and apply the liked method
 *
 * @param  {object} options Object from the const.replaceChild(pathDom, element);
  }
};


/**
 * Read `line` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Line element to transform
 * @return {object}			 Data for a `path` element x2 + ',' + y2;
  return newElement;
};

/**
 * Read `rect` element to extract and transform
 * data, to make it ready for a `path` object.
 * The radius-border is not taken in charge yet.
 * (your help is more than welcomed)
 *
 * @param  {DOMelement} element Rect element to transform
 * @return {object}             Data for a `path` elementht) + ' Z';
  }
  return newElement;
};

/**
 * Read `polyline` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Polyline element to transform
 * @return {object}             Data for a `path` element
 */ement.d = path;
  return newElement;
};

/**
 * Read `polygon` element to extract and transform
 * data, to make it ready for a `path` object.
 * This method rely on polylineToPath, because the
 * logic is similar. The path created is just closed,
 * so it needs an 'Z' at the end.
 *
 * @param  {DOMelement} element Polygon element to transform
 * @return {object}             Data for a `path` element
 *ement.d += 'Z';
  return newElement;
};

/**
 * Read `ellipse` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element ellipse element to transform
 * @return {object}             Data for a `path` element
 *X + ',' + endY;
  return newElement;
};

/**
 * Read `circle` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Circle element to transform
 * @return {object}             Data for a `path` element
 X + ',' + endY;
  return newElement;
};

/**
 * Create `path` elements form original element
 * and prepared objects
 *
 * @param  {DOMelement} element  Original element to transform
 * @param  {object} pathData     Path data (from `toPath` methods)
 * @return {DOMelement}          Path elemen pathData[i]);
  }
  return pathTag;
};

/**
 * Parse attributes of a DOM element to
 * get an object of attribute => value
 *
 * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
 * @return {object}                  Object of attribute] = attr.value;
  }
  return output;
};

  'use strict';

var setupEnv, requestAnimFrame, cancelAnimFrame, parsePositiveInt;

/**
 * Vivus
 * Beta version
 *
 * Take any SVG and make the animation
 * to give give the impression of live drawing
 *
 * This in more than just inspired from codrops
 * At that point, it's a pure fork.
 */

/**
 * Class constructor
 * option structure
 *   type: 'delayed'|'sync'|'oneByOne'|'script' (to know if the items must be drawn synchronously or not, default: delayed)
 *   duration: <int> (in frames)
 *   start: 'inViewport'|'manual'|'autostart' (start automatically the animation, default: inViewport)
 *   delay: <int> (delay between the drawing of first and last path)
 *   dashGap <integer> whitespace extra margin between dashes
 *   pathTimingFunction <function> timing animation function for each path element of the SVG
 *   animTimingFunction <function> timing animation function for the complete SVG
 *   forceRender <boolean> force the browser to re-render all updated path items
 *   selfDestroy <boolean> removes all extra styling on the SVG, and leaves it as original
 *
 * The attribute 'type' is by default on 'delayed'.
 *  - 'delayed'
 *    all paths are draw at the same time but with a
 *    little delay between them before start
 *  - 'sync'
 *    all path are start and finish at the same time
 *  - 'oneByOne'
 *    only one path is draw at the time
 *    the end of the first one will trigger the draw
 *    of the next one
 *
 * All these values can be overwritten individually
 * for each path item in the SVG
 * The value of frames will always take the advantage of
 * the duration value.
 * If you fail somewhere, an error will be thrown.
 * Good luck.
 *
 * @constructor
 * @this {Vivus}
 * @param {DOM|String}   element  Dom element of the SVG or id of it
 * @param {Object}       options  Options about the animation
 * @param {Function}     callback Calthis.isReady) {
    this.init();
  }
}

/**
 * Timing functions
 **************************************
 *
 * Default functions to help developers.
 * It always take a number as parameter (between 0 to 1) then
 * return a number (between 0 and 1)
 */
Vivus.LINEAR          = function (xurn -Math.cos(x * Math.PIion (x) {return 1 - Math. function (x) {return Maturn (1- rateR) + (progress * rateR);
};


/**
 * Setters
 **************************************
 */

/**
 * Check and set the element in the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param {DOM|String}   element  SVG Dom element or id of it
 */
Vivus.prototype.setElement = function (element, options) {
  var onLoad, self;

  // Basic check
  if (typeof element === 'undefined') {
    throw new Error('Vivus [constructor]: "element" parameter is required');
  }

  // Set the element
  if (element.constructor === String) {
    element = document.getElementById(element);
    if (!element) {
      throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
    }
  }
  this.parentEl = element;

  // Load the SVG with XMLHttpRequest and extract the SVG
  if (options && options.file) {
    var self = this;
    onLoad = function (e) {
      var domSandbox = document.createElement('div');
      domSandbox.innerHTML = this.responseText;

      var svgTag = domSandbox.querySelector('svg');
      if (!svgTag) {
        throw new Error('Vivus [load]: Cannot find the SVG in the loaded file : ' + options.file);
      }

      self.el = svgTag
      self.el.setAttribute('width', '100%');
      self.el.setAttribute('height', '100%');
      self.parentEl.appendChild(self.el)
      self.isReady = true;
      self.init();
      self = null;
    }

    var oReq = new window.XMLHttpRequest();
    oReq.addEventListener('load', onLoad);
    oReq.open('GET', options.file);
    oReq.send();
    return;
  }

  switch (element.constructor) {
  case window.SVGSVGElement:
  case window.SVGElement:
  case window.SVGGElement:
    this.el = element;
    this.isReady = true;
    break;

  case window.HTMLObject();
        self = null;
      }
    };

    if (!onLoad()) {
      element.addEventListener('load', onLoad);
    }
    break;

  default:
    throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
  }
};

/**
 * Set up user option to the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {object} options Object from the constructor
 */
Vivus.prototype.setOptions = function (options) {
  var allowedTypes = ['delayed', 'sync', 'async', 'nsync', 'oneByOne', 'scenario', 'scenario-sync'];
  var allowedStarts =  ['inViewport', 'manual', 'autostart'];

  // Basic check
  if (options !== undefined && options.constructor !== Object) {
    throw new Error('Vivus [constructor]: "options" parameter must be an object');
  }
  else {
    options = options || {};
  }

  // Set the animation type
  if (options.type && allowedTypes.indexOf(options.type) === -1) {
    throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
  }
  else {
    this.type = options.type || allowedTypes[0];
  }

  // Set the start type
  if (options.start && allowedStarts.indexOf(options.start) === -1) {
    throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
  }
  else {
    this.start = options.start || allowedStarts[0];
  }

  this.isIE         = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1 );
  this.duration     = parsePositiveInt(options.duration, 120);
  this.delay        = parsePositiveInt(options.delay, null);
  //Uncode addition
  this.delayStart   = parsePositiveInt(options.delayStart, null);
  //#END
  this.dashGap      = parsePositiveInt(options.dashGap, 1);
  this.forceRender  = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
  this.reverseStack = !!options.reverseStack;
  this.selfDestroy  = !!options.selfDestroy;
  this.onReady      = options.onReady;
  this.map          = [];
  this.frameLength  = this.currentFrame = this.delayUnit = this.speed = this.handle = null;

  this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;

  this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
  this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;

  if (this.delay >= this.duration) {
    throw new Error('Vivus [constructor]: delay must be shorter than duration');
  }
};

/**
 * Set up callback to the instance
 * The method will not return enything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {Function} callback Callback for the animationllback = callback || function () {};
};


/**
 * Core
 **************************************
 */

/**
 * Map the svg, path by path.
 * The method return nothing, it just fill the
 * `map` array. Each item in this array represent
 * a path element from the SVG, with informations for
 * the animation.
 *
 * ```
 * [
 *   {
 *     el: <DOMobj> the path element
 *     length: <number> length of the path line
 *     startAt: <number> time start of the path animation (in frames)
 *     duration: <number> path animation duration (in frames)
 *   },
 *   ...
 * ]
 is.frameLength || this.duration;
  }
};

/**
 * Interval method to draw the SVG from current
 * position of the animation. It update the value of
 * `currentFrame` and re-trace the SVG.
 *
 * It use this.handle to store the requestAnimationFrame
 * and clear it one the animation is stopped. So this
 * attribute can be used to know if the animation is
 * playing.
 *
 * Once the animation at the end, this method will
 * trigger the Vivus cal   this.instanceCallback = null;
  }
};

/**
 * Draw the SVG at the current instant from the
 * `currentFrame` value. Here is where most of the magic is.
 * The trick is to use the `strokeDashoffset` style property.
 *
 * For optimisation reasons, a new property called `progress`
 * is added in each item of `map`. This one contain the current
 * progress of the path element. Only if the new value is different
 * the new value will be applied to the DOM element. This
 * method save a lot of resources to re-render the SVG. And could
 * be improved if the animation couldn't be played f
      this.renderPath(i);
    }
  }
};

/**
 * Method forcing the browser to re-render a path element
 * from it's index in the map. Depending on the `forceRender`
 * value.
 * The trick is to replace the path element by it's clone.
 * This practice is not recommended because it's asking more
 * ressources, too much DOM manupulation..
 * but it's the only way to let the magic happen on IE.
 * By default, this fallback is only applied on IE.
 *
 * @param  {Number} index Path j.el);
    pathObj.el = newPath;
  }
};

/**
 * When the SVG object is loaded and ready,
 * this method will continue the initialisation.
 *
 * This this mainly due to the case of passing an
 * object tag in the constructor. It will wait
 * the end of the loading to iniReady) {
    this.onReady(this);
  }
};

/**
 * Trigger to start of the animation.
 * Depending on the `start` value, a different script
 * will be applied.
 *
 * If the `start` value is not valid, an error will be thrown.
 * Even if technically, this is impossible.
 *
 */
Vivus.prototype.starter = function () {
  switch (this.start) {
  case 'manual':
    return;

  case 'autostart':
    this.play();
    break;

  case 'inViewport':
    var self = this,
    listener = function () {
      if (self.isInViewport(self.parentEl, 1)) {
        self.play();
        window.removeEventListener('scroll', listener);
        //Uncode addition
        window.removeEventListener('fp-slide-changed', listener);
        window.removeEventListener('fp-slide-scroll', listener);
        //#END
      }
    };
    window.addEventListener('scroll', listener);
    //Uncode addition
    window.addEventListener('fp-slide-changed', listener);
    window.addEventListener('fp-slide-scroll', listener);
    //#END
    listener();
    break;
  }
};


/**
 * Controls
 **************************************
 */

/**
 * Get the current status of the animation between
 * three different states: 'start', 'progress', 'end'.
 * @return {string} Instance is.frameLength ? 'end' : 'progress';
};

/**
 * Reset the instance to the initial state : undraw
 * Be careful, it just reset the animation, if you're
 * playing the animation, this won't stop it. But just
 * make it start from start.
 *
 */
Vivus.prototype.reset = function () {
  return this.setFrameProgress(0);
};

/**
 * Set the instance to the final state : drawn
 * Be careful, it just set the animation, if you're
 * playing the animation on rewind, this won't stop it.
 * But just make it start from th{
  return this.setFrameProgress(1);
};

/**
 * Set the level of progress of the drawing.
 *
 * @param {number} progress Level of progress to set
ess);
  this.trace();
  return this;
};

/**
 * Play the animation at the desired speed.
 * Speed must be a valid number (no zero).
 * By default, the speed value is 1.
 * But a negative value is accepted to go forward.
 *
 * And works with float too.
 * But don't forget we are in JavaScript, se be nice
 * with him and give him a 1/2^x value.
 *
 * @param  {number} speed Animation speed [optional]
 */
Vivus.prototype.play = function (speed, callback) {
  this.instanceCallback = null;

  if (speed && typeof speed === 'function') {
    this.instanceCallback = speed; // first parameter is actually the callback function
    speed = null;
  }
  else if (speed && typeof speed !== 'number') {
    throw new Error('Vivus [play]: invalid speed');
  }
  // if the first parameter wasn't the callback, check if the seconds was
  if (callback && typeof(callback) === 'function' && !this.instanceCallback) {
    this.instanceCallback = callback;
  }


  this.speed = speed || 1;
  //Uncode addition
  if (!this.handle) {
    var $this = this,
    delay = (this.delayStart != null) ? this.delayStart : 0;
    setTimeout(function() {
      $this.drawer();
    }, delay);
  }
  //#END
  return this;
};

/**
 * Stop the current animation, if on progress.
 * Should not trigger anis.handle = null;
  }
  return this;
};

/**
 * Destroy the instance.
 * Remove all bad styling attributes on all
 * path = null;
    this.renderPath(i);
  }
};


/**
 * Utils methods
 * include methods from Codrops
 **************************************
 */

/**
 * Method to best guess if a path should added into
 * the animation or not.
 *
 * 1. Use the `data-vivus-ignore` attribute if set
 * 2. Check if the instance must ignore invisible paths
 * 3. Check if the path is visible
 *
 * For now the visibility checking is unstable.
 * It will be used for a beta phase.
 *
 * Other improvments are planned. Like detecting
 * is the path got a stroke or a valid opac;
  }
  else {
    return false;
  }
};

/**
 * Parse attributes of a DOM element to
 * get an object of {attributeName => attributeValue}
 *
 * @param  {object} element DOM element to parse
 * @return {object}         Object of attrtr.value;
    }
  }
  return output;
};

/**
 * Reply if an element is in the page viewport
 *
 * @param  {object} el Element to observe
 * @param  {number} h  Percentage of height
 * @return {boole<= viewed && (elBottom) >= scrolled;
};


/**
 * Get the viewport height in pixels
 *
 * @return {integer} Viewport hei
  }
  else {
    return client;
  }
};

/**
 * Get the page Y offset
 *
 * @return {integer} Page geYOffset || rTimeout(id);
      }
    );
  })();
};

/**
 * Parse string to integer.
 * If the number is not positive or null
 * the method will return the default value
 * or 0 if undefined
 *
 * @param {string} value String to parse
 * @param {*} defaultValue Value to return if the result parsed is invalid
 * @retutput >= 0) ? output : defaultValue;
};


  if (typeof define === 'function' && define.amd) {
    // AMD. Register function() {
      return Vivus;
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = Vivus;
  } else {
    // Browser globals
    window.Vivus = Vivus;
  }

}());
