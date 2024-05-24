/******/ (
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!window,document,jQuery),jQuery),window,document,jQuery),document,jQuery),document,jQuery),document,jQuery),document,jQuery),}(window,document,jQuery}(document,jQuery);

/***/ }),

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol;
;
};

var classCallChec}
};

var createClas;
}();

var _extends = Object.assign;
};

var ge}
};

var inherit;
};

var possibleConstructorRetur;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat(value) {
  return parseFloat(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
s
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
;
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
;
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
;
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBu;
}();

var Glid;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;

        default:
          warn('Invalid direction pattern [' + direction + steps + '] has been used');
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isE  },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffs  }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    s  }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    g  }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
;
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    app  },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remo  }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    g  }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    g  }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    g  }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destro  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
;
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).fil  });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    s  }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    s  }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    g  }
  });

  return Html;;;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = this.slideWidth + 'px';
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapp  },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remo  }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    g  }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    g  }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    g  }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mou  },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeCla  },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClass  }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mou  },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);
      var width = Components.Sizes.slideWidth + 'px';

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remo  }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    g  }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.befor  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinde;
}(;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
;
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modi  }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
;
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
;
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
;
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
;
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    s  },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('mov  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compo  },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    s  },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remo  },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    aft  },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disab  }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    g  }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? { passive: true } : false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    sta  },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    mo  },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    e  },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeSta  },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMo  },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMo  },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeE  },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeE  },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touch  },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    thresho  },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disab  }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.afte  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destro  });

  return Swipe;;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mou  },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bi  },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbi  },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    cli  },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.en  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var capture = supportsPassive$1 ? { passive: true } : false;

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mou  },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (item) {
        item.classList.add(settings.classes.activeNav);

        siblings(item).forE  });
      }
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.activeNav);
      }
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindin  },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bi  },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbi  },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destro  });

  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mou  },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bi  },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbi  },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    pre  }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mou  },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    sta  },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    st  },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bi  },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbi  }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    g  }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
;
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  var points = sortBreakpoints(settings.breakpoints);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    mat  }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throt  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('updat  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destro  });

  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide$;
}(Glide);

/* harmony default export */ __webpack_exports__["default"] = (Glide$1);


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/collapse.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/collapse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap collapse.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  ;
}(this, function ($, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;  }  }  }  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGG  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;

  $.fn[NAME].noConflic  };

  return Collapse;

}));
//# sourceMappingURL=collapse.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap util.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")) :
  undefined;
}(th

}));
//# sourceMappingURL=util.js.map


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \*********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  sl
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var p);
};

var ln;
};

var multip }
};

var divi }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !f);
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.regexp.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var getFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var setInternalState = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").set;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || f';
})));

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapp
  };
  var pro
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.string.anchor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.anchor.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
  anchor: function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;

var maybeToStri);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace   }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/expose-loader/index.js?$!./node_modules/jquery/dist/jquery.js-exposed":
/*!***********************************************************************************!*\
  !*** ./node_modules/expose-loader?$!./node_modules/jquery/dist/jquery.js-exposed ***!
  \***********************************************************************************/
/*! no static exports found */
/**/ }),

/***/ "./node_modules/flickity/dist/flickity.pkgd.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/flickity/dist/flickity.pkgd.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__factory, __WEBPACK_LOCAL_MODULE_2__module;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_LOCAL_MODULE_6__, __WEBPACK_LOCAL_MODULE_6__factory, __WEBPACK_LOCAL_MODULE_6__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_7__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_8__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_9__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_10__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_11__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_12__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_13__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_14__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_15__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_16__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_17__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_19__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

!function(e,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){return i(e,t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(wi),s}),function(t,e){ true?!(__WEBPACK_LOCAL_MODULE_1__factory = (e), (__WEBPACK_LOCAL_MODULE_1__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)) : __WEBPACK_LOCAL_MODULE_1__factory), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports)):undefined}("undefined"!=typeof window?window:},t}),function(t,e){ true?!(__WEBPACK_LOCAL_MODULE_2__factory = (e), (__WEBPACK_LOCAL_MODULE_2__module = { id: "get-size/get-size", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_2__ = (typeof __WEBPACK_LOCAL_MODULE_2__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_2__factory.call(__WEBPACK_LOCAL_MODULE_2__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_2__module.exports, __WEBPACK_LOCAL_MODULE_2__module)) : __WEBPACK_LOCAL_MODULE_2__factory), (__WEBPACK_LOCAL_MODULE_2__module.loaded = true), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__module.exports)):undefined}(win x}),function(t,e){"use strict"; true?!(__WEBPACK_LOCAL_MODULE_3__factory = (e), (__WEBPACK_LOCAL_MODULE_3__module = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_3__ = (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)) : __WEBPACK_LOCAL_MODULE_3__factory), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports)):undefined}(wie)}}),function(e,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_4__ = ((function(t){return i(e,t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wi},c}),function(e,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_2__], __WEBPACK_LOCAL_MODULE_5__ = ((function(t){return i(e,t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wi},i}),function(t,e){ true?!(__WEBPACK_LOCAL_MODULE_6__factory = (e), (__WEBPACK_LOCAL_MODULE_6__module = { id: "flickity/js/slide", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_6__ = (typeof __WEBPACK_LOCAL_MODULE_6__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_6__factory.call(__WEBPACK_LOCAL_MODULE_6__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_6__module.exports, __WEBPACK_LOCAL_MODULE_6__module)) : __WEBPACK_LOCAL_MODULE_6__factory), (__WEBPACK_LOCAL_MODULE_6__module.loaded = true), __WEBPACK_LOCAL_MODULE_6__ === undefined && (__WEBPACK_LOCAL_MODULE_6__ = __WEBPACK_LOCAL_MODULE_6__module.exports)):undefined}(wi},t}),function(e,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_7__,t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(win i}),function(r,a){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_4__,__WEBPACK_LOCAL_MODULE_5__,__WEBPACK_LOCAL_MODULE_6__,__WEBPACK_LOCAL_MODULE_7__], __WEBPACK_LOCAL_MODULE_8__,o)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));else { var t; }}(wir,f}),function(e,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_9__ = ((function(t){return i(e,t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wi},e}),function(e,i){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_9__], __WEBPACK_LOCAL_MODULE_10__ = ((function(t){return i(e,t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wit,e}),function(n,s){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_10__,__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_11__ = ((function(t,e,i){return s(n,t,e,i)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wi},t}),function(n,s){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_9__,__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_12__ = ((function(t,e,i){return s(n,t,e,i)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wio,e}),function(n,s){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_9__,__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_13__,i)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wis,e}),function(t,n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_4__,__WEBPACK_LOCAL_MODULE_8__], __WEBPACK_LOCAL_MODULE_14__,i)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(win,i}),function(i,n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_15__ = ((function(t,e){return n(i,t,e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wi},e}),function(i,n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_16__ = ((function(t,e){return n(i,t,e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}(wis,e}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_8__,__WEBPACK_LOCAL_MODULE_11__,__WEBPACK_LOCAL_MODULE_12__,__WEBPACK_LOCAL_MODULE_13__,__WEBPACK_LOCAL_MODULE_14__,__WEBPACK_LOCAL_MODULE_15__,__WEBPACK_LOCAL_MODULE_16__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_LOCAL_MODULE_17__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):undefined}(window,function(t){return t}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_17__,__WEBPACK_LOCAL_MODULE_4__], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(wi},n}),function(e,i){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_19__ = ((function(t){return i(e,t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):undefined}("undefined"!=typeof window?window:),l}),function(i,n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_17__,__WEBPACK_LOCAL_MODULE_19__], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e){return n(i,t,e)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(wi},e});

/***/ }),

/***/ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js":
/*!*******************************************************************!*\
  !*** ./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/


function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || Object(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(x[0]))
}

/* harmony default export */ __webpack_exports__["default"] = (isDomNodeList);


/***/ }),

/***/ "./node_modules/is-dom-node/dist/is-dom-node.es.js":
/*!*********************************************************!*\
  !*** ./node_modules/is-dom-node/dist/is-dom-node.es.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.g'
}

/* harmony default export */ __webpack_exports__["default"] = (isDomNode);


/***/ }),

/***/ "./node_modules/jquery-countto/jquery.countTo.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery-countto/jquery.countTo.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESUL};
}));


/***/ }),

/***/ "./node_modules/jquery-easing/jquery.easing.1.3.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery-easing/jquery.easing.1.3.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	s);
	},
	easeInb;
	},
	easeOutb;
	},
	easeInOutb;
	},
	easeInCb;
	},
	easeOutCb;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQb;
	},
	easeOutQb;
	},
	easeInOutQb;
	},
	easeInQb;
	},
	easeOutQb;
	},
	easeInOutQb;
	},
	easeInb;
	},
	easeOutb;
	},
	easeInOutb;
	},
	easeInb;
	},
	easeOutb;
	},
	easeInOutb;
	},
	easeInb;
	},
	easeOutb;
	},
	easeInOutb;
	},
	easeInElab;
	},
	easeOutElab;
	},
	easeInOutElab;
	},
	easeInb;
	},
	easeOutb;
	},
	easeInOutb;
	},
	easeInBob;
	},
	easeOutBo	}
	},
	easeInOutBob;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z yet
} )( typeof window !== "undefined" ? window :ery;
} );


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js-exposed":
/*!****************************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js-exposed ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(/*! -!./node_modules/expose-loader?$!./jquery.js */ "./node_modules/expose-loader/index.js?$!./node_modules/jquery/dist/jquery.js-exposed");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
***/ }),

/***/ "./node_modules/lottie-web/build/player/lottie.js":
/*!********************************************************!*\
  !*** ./node_modules/lottie-web/build/player/lottie.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(typeof navigator !== "undefined") && (function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return factory(root);
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}((window || {}), function(window) {
	/* global locationHref:writable, animationManager, subframeEnabled:writable, defaultCurveSegments:writable, roundValues,
expressionsPlugin:writable, PropertyFactory, ShapePropertyFactory, Matrix */
/* exported locationHref, subframeEnabled, expressionsPlugin */

'use strict';

/* exported svgNS, locationHref, initialDefaultFrame */

var svgNS = 'http://www.w3.org/2000/svg';

var locationHref = '';

var initialDefaultFrame = -999999;

/* global createSizedArray */
/* exported subframeEnabled, expressionsPlugin, isSafari, cachedColors, bmPow, bmSqrt, bmFloor, bmMax, bmMin, ProjectInterface,
defaultCurveSegments, degToRads, roundCorner, bmRnd, styleDiv, BMEnterFrameEvent, BMCompleteEvent, BMCompleteLoopEvent,
BMSegmentStartEvent, BMDestroyEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent, BMAnimationConfigErrorEvent, createElementID,
addSaturationToRGB, addBrightnessToRGB, addHueToRGB, rgbToHex */

var subframeEnabled = true;
var expressionsPlugin;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var cachedColors = {};
var bmRnd;
var bmPow = Math.pow;
var bmSqrt = Math.sqrt;
var bmFloor = Math.floor;
var bmMax = Math.max;
var bmMin = Math.min;

var BMMath =  }
}( {}; }

BMMath.random = Math.random;
BMMath.abs = function (val) {
  var tOfVal = typeof val;
  if (tOfVal === 'object' && val.length) {
    var absArr = createSizedArray(val.length);
    var i;
    var len = val.length;
    for (i = 0; i < len; i += 1) {
      absArr[i] = Math.abs(val[i]);
    }
    return absArr;
  }
  return Math.abs(val);
};
var defaultCurveSegments = 150;
var degToRads = Math.PI / 180;
var roundCorner = 0.55  }
}
roundValues(falsd';
}

function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
  this.type = type;
  this.currentTime = currentTime;
  this.totalTime = totalTime;
  this.direction = frameMultiplier < 0 ? -1 : 1; 1; 1;es;
}

function BMDestroyEvent(type, target) {
  this.type = type;
  this.target = target;me;or;
}

function BMAnimationConfigErrorEvent(type, nativeError) {
  this.type = type;
  this.nativeError = nativeError;
}

var createElementID = (function () {
  var _count = 0;
  return function createID() {
    _count += 1;
    return '__lottie_element_' + _count;
  };
}(b]; ];]);]);]);
}

var rgbTo };
}());

function BaseEvent() {}
BaseEvent.prototype = {
  triggerEvent: function (eventName, args) {
    if (this._cbs[eventName]) {
      var len = this._cbs[eventName].length;
      for (var i = 0; i < len; i += 1) {
        this._cbs[eventName][i](args);
      }
    }
  },
  addEventLis;
  },
  removeEventListener: function (eventName, callback) {
    if (!callback) {
      this._cbs[eventName] = null;
    } else if (this._cbs[eventName]) {
      var i = 0;
      var len = this._cbs[eventName].length;
      while (i < len) {
        if (this._cbs[eventName][i] === callback) {
          this._cbs[eventName].splice(i, 1);
          i -= 1;
          len -= 1;
        }
        i += 1;
      }
      if (!this._cbs[eventName].length) {
        this._cbs[eventName] = null;
      }
    }
  },
};

/* exported createTypedArray, createSizedArray */

var createTypedAray;
}(});
}

/* global svgNS */
/* exported createNSe);
}

/* exported createTage);
}

function DynamicPropertyContainer() {}
DynamicPropertyContainer.prototype = {
  addDynamicPro}
  },
  iterateDynamicProperties: function () {
    this._mdf = false;
    var i;
    var len = this.dynamicProperties.length;
    for (i = 0; i < len; i += 1) {
      this.dynamicProperties[i].getValue();
      if (this.dynamicProperties[i]._mdf) {
        this._mdf = true;
      }
    }
  },
  initDynamicPropertyCont;
  },
};

/* exported getBlendMode */

var getBlendM };
}());

/* global createTypedArray */

/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */

/**
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * All values are handled as floating point values.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
 * @constructor
 */

var Matrix = (function () {
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _tan = Math.tan;
  var _rnd = Math.round;
  }

  function rotate(angle) {
    if (angle === 0) {
      return this;
    }
    var mCos = _cos(angle);
    var mSin = _sin(angle);
    return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  }
  /
  }
  function applyToX(x, y, z) {
    return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
  }
  function applyToY(x, y, z) {
    return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  ;
  }

  ;
  };
}());

/* eslint-disable */
/*
 Copyright 2014 David Bau.

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 es.
})(
    [],     // pool: entropy pool starts empty
    BMMath    // math: package containing random, pow, and seedrandom
);
/* eslint-disable */
var BezierFactory = (function () {
  /**
     * BezierEasing - use bezier curve for transition easing function
     * by Gaëtan Renaudeau 2014 - 2015 – MIT License
     *
     * Credits: is based on Firefox's nsSMILKeySpline.cpp
     * Usage:
     * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
     * spline.get(x) => returns the easing value | x must be in [0, 1] range
     *
     */

  var ob = {};
  ob.getBezierEasing = getBezierEasing;
  var beziers =ing;
  }

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = typeof Float32Array === 'functi *  *  * aA1; }

  // Returns x(t) given t, x1, and x2, or y(t) given t, y1, a aT;
  }

  // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, aA1);ntT;ssT;
  }

  /**
     * points is an array of [ mX1, mY1, mX2, mY2 ]
 is);
  }

  BezierEasing.prototype = {
);
    },

    // Private part

    _precompute: function () {
      var mX1 = this._p[0],
        mY1 = this._p[1],
        mX2 = this._p[2],
        mY2 = this._p[3];
      this._precomputed = true;
      if (mX1 !== mY1 || mX2 !== mY2) { this._calcSampleValues(); }
    },

    _calcSamp }
    },

    /**
         * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
         */
    _getTForX: function (aX) {
      var mX1 = this._p[0],
        mX2 = this._p[2],
        mSampleValues = this._mSampleValues;

      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } if (initialSlope === 0.0) {
        return guessForT;
      }
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    },
  };

  return ob;
}());

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) { // eslint-disable-line no-plusplus
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = s
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}());

/* exported extendPrototype, getDescriptor, createProxyFunction */

function extendPrototype(sources, destination) {
  var i;
  var len = sources.length;
  var sourcePrototype;
  for (i = 0; i < len; i += 1) {
    sourcePrototype = sources[i].prototype;
    for (var attr in sourcePrototype) {
      if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
    }
proction;
}

/* global segmentsLengthPool, defaultCurveSegments, createSizedArray, bmPow, bmSqrt, bmFloor, createTypedArray, bezierLengthPool */
/* exported bez */

function bezFunction() {
  var math = M001;001;
  }

  var getBezierLength = (function () {
    return function (pt1, pt2, pt3, pt4) {
      var curveSegments = defaultCurveSegments;
      var k;
      var i;
      var len;
      var ptCoord;
      var perc;
      var addedLength = 0;
      var ptDistance;
      var point = [];
      var lastPoint = [];
      var lengthData = bezierLengthPool.newElement();
      len = pt3.length;
      for (k = 0; k < curveSegments; k += 1) {
        perc = k / (curveSegments - 1);
        ptDistance = 0;
        for (i = 0; i < len; i += 1) {
          ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
          point[i] = ptCoord;
          if (lastPoint[i] !== null) {
            ptDistance += bmPow(point[i] - lastPoint[i], 2);
          }
          lastPoint[i] = point[i];
        }
        if (ptDistance) {
          ptDistance = bmSqrt(ptDistance);
          addedLength += ptDistance;
        }
        lengthData.percents[k] = perc;
        lengthData.lengths[k] = addedLength;
      }
      lengthData.addedLength = addedLength;
      return lengthData;
    };
  }gth;th);
  }

  function PointData(partial, point) {
    this.partialLength = partial;
    this.point = point;
  }

  var buildBezierData = (function () {
    var storedData = {};

    return function (pt1, pt2, pt3, pt4) {
      var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');
      if (!storedData[bezierName]) {
        var curveSegments = defaultCurveSegments;
        var k;
        var i;
        var len;
        var ptCoord;
        var perc;
        var addedLength = 0;
        var ptDistance;
        var point;
        var lastPoint = null;
        if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
          curveSegments = 2;
        }
        var bezierData = new BezierData(curveSegments);
        len = pt3.length;
        for (k = 0; k < curveSegments; k += 1) {
          point = createSizedArray(len);
          perc = k / (curveSegments - 1);
          ptDistance = 0;
          for (i = 0; i < len; i += 1) {
            ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
            point[i] = ptCoord;
            if (lastPoint !== null) {
              ptDistance += bmPow(point[i] - lastPoint[i], 2);
            }
          }
          ptDistance = bmSqrt(ptDistance);
          addedLength += ptDistance;
          bezierData.points[k] = new PointData(ptDistance, point);
          lastPoint = point;
        }
        bezierData.segmentLength = addedLength;
        storedData[bezierName] = bezierData;
      }
      return storedData[bezierName];
    };
  }());

  function getDistancePerc(perc, bezierData) {
    var percents = bezierData.percents;
    var lengths = bezierData.lengths;
    var len = percents.length;
    var initPos = bmFloor((len - 1) * perc);
    var lengthPos = perc * bezierData.addedLength;
    var lPerc = 0;
    if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
      return percents[initPos];
    }
    var dir = lengths[initPos] > lengthPos ? -1 : 1;
    var flag = true;
    while (flag) {
      if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
        lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
        flag = false;
      } else {
        initPos += dir;
      }
      if (initPos < 0 || initPos >= len - 1) {
        // FIX for TypedArrays that don't store floating point values with enough accuracy
        if (initPos === len - 1) {
          return percents[initPos];
        }
        flag = false;
      }
    }
    return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;tY];
  }

  var bezierSegmentPoints = createTypedArray('float32', 8);

  function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
    if (startPerc < 0) {
      startPerc = 0;
    } else if (startPerc > 1) {
      startPerc = 1;
    }
    var t0 = getDistancePerc(startPerc, bezierData);
    endPerc = endPerc > 1 ? 1 : endPerc;
    var t1 = getDistancePerc(endPerc, bezierData);
    var i;
    var len = pt1.length;
    var u0 = 1 - t0;
    var u1 = 1 - t1;
    var u0u0u0 = u0 * u0 * u0;
    var t0u0u0_3 = t0 * u0 * u0 * 3; // eslint-disable-line camelcase
    var t0t0u0_3 = t0 * t0 * u0 * 3; // eslint-disable-line camelcase
    var t0t0t0 = t0 * t0 * t0;
    //
    var u0u0u1 = u0 * u0 * u1;
    var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1; // eslint-disable-line camelcase
    var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1; // eslint-disable-line camelcase
    var t0t0t1 = t0 * t0 * t1;
    //
    var u0u1u1 = u0 * u1 * u1;
    var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1; // eslint-disable-line camelcase
    var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1; // eslint-disable-line camelcase
    var t0t1t1 = t0 * t1 * t1;
    //
    var u1u1u1 = u1 * u1 * u1;
    var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1; // eslint-disable-line camelcase
    var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1; // eslint-disable-line camelcase
    var t1t1t1 = t1 * t1 * t1;
    for (i = 0; i < len; i += 1) {
      bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
    }

    return bezierSegmentPoints;
  }

  return {
    getSegmentsLength: getSegmentsLength,
    getNewSegment: getNewSegment,
    getPointInSegment: getPointInSegment,
    buildBezierData: buildBezierData,
    pointOnLine2D: pointOnLine2D,
    pointOnLine3D: pointOnLine3D,
  };
}

var bez = bezFunction();

/* exported dataManager */

function dataFunctionManager() {
  // var tCanvasHelper = createTag('canvas').getContext('2d');

  function completeLayers(layers, comps, fontManager) {
    var layerData;
    var i;
    var len = layers.length;
    var j;
    var jLen;
    var k;
    var kLen;
    for (i = 0; i < len; i += 1) {
      layerData = layers[i];
      if (('ks' in layerData) && !layerData.completed) {
        layerData.completed = true;
        if (layerData.tt) {
          layers[i - 1].td = layerData.tt;
        }
        if (layerData.hasMask) {
          var maskProps = layerData.masksProperties;
          jLen = maskProps.length;
          for (j = 0; j < jLen; j += 1) {
            if (maskProps[j].pt.k.i) {
              convertPathsToAbsoluteValues(maskProps[j].pt.k);
            } else {
              kLen = maskProps[j].pt.k.length;
              for (k = 0; k < kLen; k += 1) {
                if (maskProps[j].pt.k[k].s) {
                  convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                }
                if (maskProps[j].pt.k[k].e) {
                  convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                }
              }
            }
          }
        }
        if (layerData.ty === 0) {
          layerData.layers = findCompLayers(layerData.refId, comps);
          completeLayers(layerData.layers, comps, fontManager);
        } else if (layerData.ty === 4) {
          completeShapes(layerData.shapes);
        } else if (layerData.ty === 5) {
          completeText(layerData, fontManager);
        }
      }
    }
  }

  function findCompLayers(id, comps) {
    var i = 0;
    var len = comps.length;
    while (i < len) {
      if (comps[i].id === id) {
        if (!comps[i].layers.__used) {
          comps[i].layers.__used = true;
          return comps[i].layers;
        }
        return JSON.parse(JSON.stringify(comps[i].layers));
      }
      i += 1;
    }
    return null;
  }

  function completeShapes(arr) {
    var i;
    var len = arr.length;
    var j;
    var jLen;
    for (i = len - 1; i >= 0; i -= 1) {
      if (arr[i].ty === 'sh') {
        if (arr[i].ks.k.i) {
          convertPathsToAbsoluteValues(arr[i].ks.k);
        } else {
          jLen = arr[i].ks.k.length;
          for (j = 0; j < jLen; j += 1) {
            if (arr[i].ks.k[j].s) {
              convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
            }
            if (arr[i].ks.k[j].e) {
              convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
            }
          }
        }
      } else if (arr[i].ty === 'gr') {
        completeShapes(arr[i].it);
      }
    }   }
  }

  function checkVersion(minimum, animVersionString) {
    var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];
    if (minimum[0] > animVersion[0]) {
      return true;
    } if (animVersion[0] > minimum[0]) {
      return false;
    }
    if (minimum[1] > animVersion[1]) {
      return true;
    } if (animVersion[1] > minimum[1]) {
      return false;
    }
    if (minimum[2] > animVersion[2]) {
      return true;
    } if (animVersion[2] > minimum[2]) {
      return false;
    }
    return null;
  }

  var che  };
  }());

  var checkChars = (function () {
    var minimumVersion = [4, 7, 99];
    return function (animationData) {
      if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
        var i;
        var len = animationData.chars.length;
        var j;
        var jLen;
        var pathData;
        var paths;
        for (i = 0; i < len; i += 1) {
          if (animationData.chars[i].data && animationData.chars[i].data.shapes) {
            paths = animationData.chars[i].data.shapes[0].it;
            jLen = paths.length;

            for (j = 0; j < jLen; j += 1) {
              pathData = paths[j].ks.k;
              if (!pathData.__converted) {
                convertPathsToAbsoluteValues(paths[j].ks.k);
                pathData.__converted = true;
              }
            }
          }
        }
      }
    };
  }());

  var checkColors = (function () {
    var minimumVersion = [4, 1, 9];

    function iterateShapes(shapes) {
      var i;
      var len = shapes.length;
      var j;
      var jLen;
      for (i = 0; i < len; i += 1) {
        if (shapes[i].ty === 'gr') {
          iterateShapes(shapes[i].it);
        } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
          if (shapes[i].c.k && shapes[i].c.k[0].i) {
            jLen = shapes[i].c.k.length;
            for (j = 0; j < jLen; j += 1) {
              if (shapes[i].c.k[j].s) {
                shapes[i].c.k[j].s[0] /= 255;
                shapes[i].c.k[j].s[1] /= 255;
                shapes[i].c.k[j].s[2] /= 255;
                shapes[i].c.k[j].s[3] /= 255;
              }
              if (shapes[i].c.k[j].e) {
                shapes[i].c.k[j].e[0] /= 255;
                shapes[i].c.k[j].e[1] /= 255;
                shapes[i].c.k[j].e[2] /= 255;
                shapes[i].c.k[j].e[3] /= 255;
              }
            }
          } else {
            shapes[i].c.k[0] /= 255;
            shapes[i].c.k[1] /= 255;
            shapes[i].c.k[2] /= 255;
            shapes[i].c.k[3] /= 255;
          }
        }
      }
    }
    }

    return function (animationData) {
      if (checkVersion(minimumVersion, animationData.v)) {
        iterateLayers(animationData.layers);
        if (animationData.assets) {
          var i;
          var len = animationData.assets.length;
          for (i = 0; i < len; i += 1) {
            if (animationData.assets[i].layers) {
              iterateLayers(animationData.assets[i].layers);
            }
          }
        }
      }
    };
  }());

  var checkShapes = (function () {
    var minimumVersion = [4, 4, 18];

    function completeClosingShapes(arr) {
      var i;
      var len = arr.length;
      var j;
      var jLen;
      for (i = len - 1; i >= 0; i -= 1) {
        if (arr[i].ty === 'sh') {
          if (arr[i].ks.k.i) {
            arr[i].ks.k.c = arr[i].closed;
          } else {
            jLen = arr[i].ks.k.length;
            for (j = 0; j < jLen; j += 1) {
              if (arr[i].ks.k[j].s) {
                arr[i].ks.k[j].s[0].c = arr[i].closed;
              }
              if (arr[i].ks.k[j].e) {
                arr[i].ks.k[j].e[0].c = arr[i].closed;
              }
            }
          }
        } else if (arr[i].ty === 'gr') {
          completeClosingShapes(arr[i].it);
        }
      }
    }
    }

  }
    };
  }rue;
  }

  function completeText(data) {
    if (data.t.a.length === 0 && !('m' in data.t.p)) {
      data.singleShape = true;
    }
  }

  var moduleOb = {};
  moduleOb.completeData = completeData;
  moduleOb.checkColors = checkColors;
  moduleOb.checkChars = checkChars;
  moduleOb.checkShapes = checkShapes;
  moduleOb.completeLayers = completeLayers;

  return moduleOb;
}

var dataManager = dataFunctionManager();

/* exported getFontPropert
  };
}

/* global createNS, createTag, getFontProperties */
/* exported FontManager */

var FontManager = (function () {
  var maxWaitingTime = 5000;
  var emptyChar = {
    w: 0,
    size: 0,
    shapes: [],
  };
  var combinedCharacters = [];
  // Hindi characters
  combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366,
    2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
    2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 240,');
  }

  function setUpNode(font, family) {
    var parentNode = createTag('span');
    parentNode.style.fontFamily = family;
    var node = createTag('span');
    // Characters that vary significantly among different fonts
    node.innerText = 'giItT1WQy@!-/#';
    // Visible - so we can measure it - but not on the screen
    parentNode.style.position = 'absolute';
    parentNode.style.left = '-10000px';
    parentNode.style.top = '-10000px';
    // Large font size makes even subtle changes obvious
    parentNode.style.fontSize = '300px';
    // Reset any font properties
    parentNode.style.fontVariant = 'normal';
    parentNode.style.fontStyle = 'normal';
    parentNode.style.fontWeight = 'normal';
    parentNode.style.letterSpacing = '0';
    parentNode.appendChild(node);
    document.body.appendChild(parentNode);

    // Remember width with no applied web font
    var width = node.offsetWidth;
    node.style.fontFamily = trimFontOptions(font) + ', ' + family;
    return { node: node, w: width, parent: parentNode };
  }

  function checkLoadedFonts() {
    var i;
    var len = this.fonts.length;
    var node;
    var w;
    var loadedCount = len;
    for (i = 0; i < len; i += 1) {
      if (this.fonts[i].loaded) {
        loadedCount -= 1;
      } else if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) {
        this.fonts[i].loaded = true;
      } else {
        node = this.fonts[i].monoCase.node;
        w = this.fonts[i].monoCase.w;
        if (node.offsetWidth !== w) {
          loadedCount -= 1;
          this.fonts[i].loaded = true;
        } else {
          node = this.fonts[i].sansCase.node;
          w = this.fonts[i].sansCase.w;
          if (node.offsetWidth !== w) {
            loadedCount -= 1;
            this.fonts[i].loaded = true;
          }
        }
        if (this.fonts[i].loaded) {
          this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
          this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
        }
      }
    }

    if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
      setTimeout(this.checkLoadedFontsBinded, 20);
    } else {
      setTimeout(this.setIsLoadedBinded, 10);
    }
  }

  function createHelper(def, fontData) {
    var tHelper = createNS('text');
    tHelper.style.fontSize = '100px';
    // tHelper.style.fontFamily = fontData.fFamily;

    var fontProps = getFontProperties(fontData);
    tHelper.setAttribute('font-family', fontData.fFamily);
    tHelper.setAttribute('font-style', fontProps.style);
    tHelper.setAttribute('font-weight', fontProps.weight);
    tHelper.textContent = '1';
    if (fontData.fClass) {
      tHelper.style.fontFamily = 'inherit';
      tHelper.setAttribute('class', fontData.fClass);
    } else {
      tHelper.style.fontFamily = fontData.fFamily;
    }
    def.appendChild(tHelper);
    var tCanvasHelper = createTag('canvas').getContext('2d');
    tCanvasHelper.font = fontData.fWeight + ' ' + fontData.fStyle + ' 100px ' + fontData.fFamily;
    // tCanvasHelper.font = ' 100px '+ fontData.fFamily;
    return tHelper;
  }

  function addFonts(fontData, defs) {
    if (!fontData) {
      this.isLoaded = true;
      return;
    }
    if (this.chars) {
      this.isLoaded = true;
      this.fonts = fontData.list;
      return;
    }

    var fontArr = fontData.list;
    var i;
    var len = fontArr.length;
    var _pendingFonts = len;
    for (i = 0; i < len; i += 1) {
      var shouldLoadFont = true;
      var loadedSelector;
      var j;
      fontArr[i].loaded = false;
      fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
      fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');
      if (!fontArr[i].fPath) {
        fontArr[i].loaded = true;
        _pendingFonts -= 1;
      } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
        loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');

        if (loadedSelector.length > 0) {
          shouldLoadFont = false;
        }

        if (shouldLoadFont) {
          var s = createTag('style');
          s.setAttribute('f-forigin', fontArr[i].fOrigin);
          s.setAttribute('f-origin', fontArr[i].origin);
          s.setAttribute('f-family', fontArr[i].fFamily);
          s.type = 'text/css';
          s.innerText = '@font-face {font-family: ' + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
          defs.appendChild(s);
        }
      } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
        loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');

        for (j = 0; j < loadedSelector.length; j += 1) {
          if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
            // Font is already loaded
            shouldLoadFont = false;
          }
        }

        if (shouldLoadFont) {
          var l = createTag('link');
          l.setAttribute('f-forigin', fontArr[i].fOrigin);
          l.setAttribute('f-origin', fontArr[i].origin);
          l.type = 'text/css';
          l.rel = 'stylesheet';
          l.href = fontArr[i].fPath;
          document.body.appendChild(l);
        }
      } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
        loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');

        for (j = 0; j < loadedSelector.length; j += 1) {
          if (fontArr[i].fPath === loadedSelector[j].src) {
            // Font is already loaded
            shouldLoadFont = false;
          }
        }

        if (shouldLoadFont) {
          var sc = createTag('link');
          sc.setAttribute('f-forigin', fontArr[i].fOrigin);
          sc.setAttribute('f-origin', fontArr[i].origin);
          sc.setAttribute('rel', 'stylesheet');
          sc.setAttribute('href', fontArr[i].fPath);
          defs.appendChild(sc);
        }
      }
      fontArr[i].helper = createHelper(defs, fontArr[i]);
      fontArr[i].cache = {};
      this.fonts.push(fontArr[i]);
    }
    if (_pendingFonts === 0) {
      this.isLoaded = true;
    } else {
      // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
      // Adding this timeout seems to fix it
      setTimeout(this.checkLoadedFonts.bind(this), 100);
    }
  }

  function addChars(chars) {
    if (!chars) {
      return;
    }
    if (!this.chars) {
      this.chars = [];
    }
    var i;
    var len = chars.length;
    var j;
    var jLen = this.chars.length;
    var found;
    for (i = 0; i < len; i += 1) {
      j = 0;
      found = false;
      while (j < jLen) {
        if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
          found = true;
        }
        j += 1;
      }
      if (!found) {
        this.chars.push(chars[i]);
        jLen += 1;
      }
    }
  }

  function getCharData(char, style, font) {
    var i = 0;
    var len = this.chars.length;
    while (i < len) {
      if (this.chars[i].ch === char && this.chars[i].style === style && this.chars[i].fFamily === font) {
        return this.chars[i];
      }
      i += 1;
    }
    if (((typeof char === 'string' && char.charCodeAt(0) !== 13) || !char)
            && console
            && console.warn // eslint-disable-line no-console
            && !this._warned
    ) {
      this._warned = true;
      console.warn('Missing character from exported characters list: ', char, style, font); // eslint-disable-line no-console
    }
    return emptyChar;ize;[0];
  }

  function getCombinedCharacterCodes() {
    return combinedCharacters;rue;
  }

  var Font = function () {
    this.fonts = [];
    this.chars = null;
    this.typekitLoaded = 0;
    this.isLoaded = false;
    this._warned = false;
    this.initTime = Date.now();
    this.setIsLoadedBinded = this.setIsLoaded.bind(this);
    this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
  };
    // TODO: for now I'm adding these methods to the Class and not the prototype. Think of a better way to implement it.
  Font.getCombinedCharacterCodes = getCombinedCharacterCodes;

  var fontPrototype = {
    addChars: addChars,
    addFonts: addFonts,
    getCharData: getCharData,
    getFontByName: getFontByName,
    measureText: measureText,
    checkLoadedFonts: checkLoadedFonts,
    setIsLoaded: setIsLoaded,
  };

  Font.prototype = fontPrototype;

  return Font;
}());

/* global initialDefaultFrame, BezierFactory, degToRads, bez, createTypedArray */
/* exported PropertyFactory */

var PropertyFactory = (function () {
  var initFrame = initialDefaultFrame;
  var mathAbs = Math.abs;

  function interpolateValue(frameNum, caching) {
    var offsetTime = this.offsetTime;
    var newValue;
    if (this.propType === 'multidimensional') {
      newValue = createTypedArray('float32', this.pv.length);
    }
    var iterationIndex = caching.lastIndex;
    var i = iterationIndex;
    var len = this.keyframes.length - 1;
    var flag = true;
    var keyData;
    var nextKeyData;

    while (flag) {
      keyData = this.keyframes[i];
      nextKeyData = this.keyframes[i + 1];
      if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
        if (keyData.h) {
          keyData = nextKeyData;
        }
        iterationIndex = 0;
        break;
      }
      if ((nextKeyData.t - offsetTime) > frameNum) {
        iterationIndex = i;
        break;
      }
      if (i < len - 1) {
        i += 1;
      } else {
        iterationIndex = 0;
        flag = false;
      }
    }

    var k;
    var kLen;
    var perc;
    var jLen;
    var j;
    var fnc;
    var nextKeyTime = nextKeyData.t - offsetTime;
    var keyTime = keyData.t - offsetTime;
    var endValue;
    if (keyData.to) {
      if (!keyData.bezierData) {
        keyData.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
      }
      var bezierData = keyData.bezierData;
      if (frameNum >= nextKeyTime || frameNum < keyTime) {
        var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
        kLen = bezierData.points[ind].point.length;
        for (k = 0; k < kLen; k += 1) {
          newValue[k] = bezierData.points[ind].point[k];
        }
        // caching._lastKeyframeIndex = -1;
      } else {
        if (keyData.__fnct) {
          fnc = keyData.__fnct;
        } else {
          fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
          keyData.__fnct = fnc;
        }
        perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
        var distanceInLine = bezierData.segmentLength * perc;

        var segmentPerc;
        var addedLength = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastAddedLength : 0;
        j = (caching.lastFrame < frameNum && caching._lastKeyframeIndex === i) ? caching._lastPoint : 0;
        flag = true;
        jLen = bezierData.points.length;
        while (flag) {
          addedLength += bezierData.points[j].partialLength;
          if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
            kLen = bezierData.points[j].point.length;
            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k];
            }
            break;
          } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
            kLen = bezierData.points[j].point.length;
            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
            }
            break;
          }
          if (j < jLen - 1) {
            j += 1;
          } else {
            flag = false;
          }
        }
        caching._lastPoint = j;
        caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
        caching._lastKeyframeIndex = i;
      }
    } else {
      var outX;
      var outY;
      var inX;
      var inY;
      var keyValue;
      len = keyData.s.length;
      endValue = nextKeyData.s || keyData.e;
      if (this.sh && keyData.h !== 1) {
        if (frameNum >= nextKeyTime) {
          newValue[0] = endValue[0];
          newValue[1] = endValue[1];
          newValue[2] = endValue[2];
        } else if (frameNum <= keyTime) {
          newValue[0] = keyData.s[0];
          newValue[1] = keyData.s[1];
          newValue[2] = keyData.s[2];
        } else {
          var quatStart = createQuaternion(keyData.s);
          var quatEnd = createQuaternion(endValue);
          var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
          quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
        }
      } else {
        for (i = 0; i < len; i += 1) {
          if (keyData.h !== 1) {
            if (frameNum >= nextKeyTime) {
              perc = 1;
            } else if (frameNum < keyTime) {
              perc = 0;
            } else {
              if (keyData.o.x.constructor === Array) {
                if (!keyData.__fnct) {
                  keyData.__fnct = [];
                }
                if (!keyData.__fnct[i]) {
                  outX = (typeof keyData.o.x[i] === 'undefined') ? keyData.o.x[0] : keyData.o.x[i];
                  outY = (typeof keyData.o.y[i] === 'undefined') ? keyData.o.y[0] : keyData.o.y[i];
                  inX = (typeof keyData.i.x[i] === 'undefined') ? keyData.i.x[0] : keyData.i.x[i];
                  inY = (typeof keyData.i.y[i] === 'undefined') ? keyData.i.y[0] : keyData.i.y[i];
                  fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                  keyData.__fnct[i] = fnc;
                } else {
                  fnc = keyData.__fnct[i];
                }
              } else if (!keyData.__fnct) {
                outX = keyData.o.x;
                outY = keyData.o.y;
                inX = keyData.i.x;
                inY = keyData.i.y;
                fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                keyData.__fnct = fnc;
              } else {
                fnc = keyData.__fnct;
              }
              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
            }
          }

          endValue = nextKeyData.s || keyData.e;
          keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;

          if (this.propType === 'multidimensional') {
            newValue[i] = keyValue;
          } else {
            newValue = keyValue;
          }
        }
      }
    }
    caching.lastIndex = iterationIndex;
    return newValue;
  }

  // based on @Toji's https://github.com/toji/gl-mout;ads; w];.pv;   }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
      return;
    }
    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }
    this.lock = true;
    this._mdf = this._isFirstFrame;
    var i;
    var len = this.effectsSequence.length;
    var finalValue = this.kf ? this.pv : this.data.k;
    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }
    this.setVValue(finalValue);
    this._isFirstFrame = false;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  }

  function addEffect(effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.container.addDynamicProperty(this);ect;ect;ect;
  }

  function KeyframedMultidimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    var i;
    var len = data.k.length;
    var s;
    var e;
    var to;
    var ti;
    for (i = 0; i < len - 1; i += 1) {
      if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
        s = data.k[i].s;
        e = data.k[i + 1].s;
        to = data.k[i].to;
        ti = data.k[i].ti;
        if ((s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1])) || (s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2]))) {
          data.k[i].to = null;
          data.k[i].ti = null;
        }
        if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
          if (s.length === 2 || (s[2] === e[2] && to[2] === 0 && ti[2] === 0)) {
            data.k[i].to = null;
            data.k[i].ti = null;
          }
        }
      }
    }
    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.data = data;
    this.keyframes = data.k;
    this.offsetTime = elem.data.st;
    this.k = true;
    this.kf = true;
    this._isFirstFrame = true;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.frameId = -1;
    var arrLen = data.k[0].s.length;
    this.v = createTypedArray('float32', arrLen);
    this.pv = createTypedArray('float32', arrLen);
    for (i = 0; i < arrLen; i += 1) {
      this.v[i] = initFrame;
      this.pv[i] = initFrame;
    }
    this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray('float32', arrLen) };
    this.addEffect = addEffect;
  }

  function getProp(elem, data, type, mult, container) {
    var p;
    if (!data.k.length) {
      p = new ValueProperty(elem, data, mult, container);
    } else if (typeof (data.k[0]) === 'number') {
      p = new MultiDimensionalProperty(elem, data, mult, container);
    } else {
      switch (type) {
        case 0:
          p = new KeyframedValueProperty(elem, data, mult, container);
          break;
        case 1:
          p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
          break;
        default:
          break;
      }
    }
    if (p.effectsSequence.length) {
      container.addDynamicProperty(p);
    }
    return p;
  }

  var ob = {
    getProp: getProp,
  };
  return ob;
}());

/* global Matrix, degToRads, PropertyFactory, extendPrototype, DynamicPropertyContainer */
/* exported TransformPropertyFactory */

var TransformPropertyFactory = (function () {
  var defaultVector = [0,   }
  }
  function processKeys(forceRender) {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    }
    if (this._isDirty) {
      this.precalculateMatrix();
      this._isDirty = false;
    }

    this.iterateDynamicProperties();

    if (this._mdf || forceRender) {
      var frameRate;
      this.v.cloneFromProps(this.pre.props);
      if (this.appliedTransformations < 1) {
        this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      }
      if (this.appliedTransformations < 2) {
        this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      }
      if (this.sk && this.appliedTransformations < 3) {
        this.v.skewFromAxis(-this.sk.v, this.sa.v);
      }
      if (this.r && this.appliedTransformations < 4) {
        this.v.rotate(-this.r.v);
      } else if (!this.r && this.appliedTransformations < 4) {
        this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
          .rotateY(this.or.v[1])
          .rotateX(this.or.v[0]);
      }
      if (this.autoOriented) {
        var v1;
        var v2;
        frameRate = this.elem.globalData.frameRate;
        if (this.p && this.p.keyframes && this.p.getValueAtTime) {
          if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
            v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
            v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
          } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
            v1 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t / frameRate), 0);
            v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
          } else {
            v1 = this.p.pv;
            v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
          }
        } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
          v1 = [];
          v2 = [];
          var px = this.px;
          var py = this.py;
          if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
            v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
            v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
            v2[0] = px.getValueAtTime((px.keyframes[0].t) / frameRate, 0);
            v2[1] = py.getValueAtTime((py.keyframes[0].t) / frameRate, 0);
          } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
            v1[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t / frameRate), 0);
            v1[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t / frameRate), 0);
            v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
            v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
          } else {
            v1 = [px.pv, py.pv];
            v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
            v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
          }
        } else {
          v2 = defaultVector;
          v1 = v2;
        }
        this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
      }
      if (this.data.p && this.data.p.s) {
        if (this.data.p.z) {
          this.v.translate(this.px.v, this.py.v, -this.pz.v);
        } else {
          this.v.translate(this.px.v, this.py.v, 0);
        }
      } else {
        this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
    }
    this.frameId = this.elem.globalData.frameId;
  }

  function precalculateMatrix() {
    if (!this.a.k) {
      this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      this.appliedTransformations = 1;
    } else {
      return;
    }
    if (!this.s.effectsSequence.length) {
      this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      this.appliedTransformations = 2;
    } else {
      return;
    }
    if (this.sk) {
      if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
        this.pre.skewFromAxis(-this.sk.v, this.sa.v);
        this.appliedTransformations = 3;
      } else {
        return;
      }
    }
    if (this.r) {
      if (!this.r.effectsSequence.length) {
        this.pre.rotate(-this.r.v);
        this.appliedTransformations = 4;
      }
    } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
      this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2])
        .rotateY(this.or.v[1])
        .rotateX(this.or.v[0]);
      this.appliedTransformations = 4;
    }
  }

  function autoOrient() {
    //
    // var prevP = this.getValueAtTime();rue;
  }

  function TransformProperty(elem, data, container) {
    this.elem = elem;
    this.frameId = -1;
    this.propType = 'transform';
    this.data = data;
    this.v = new Matrix();
    // Precalculated matrix with non animated properties
    this.pre = new Matrix();
    this.appliedTransformations = 0;
    this.initDynamicPropertyContainer(container || elem);
    if (data.p && data.p.s) {
      this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
      this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);
      if (data.p.z) {
        this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this);
      }
    } else {
      this.p = PropertyFactory.getProp(elem, data.p || { k: [0, 0, 0] }, 1, 0, this);
    }
    if (data.rx) {
      this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
      this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
      this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);
      if (data.or.k[0].ti) {
        var i;
        var len = data.or.k.length;
        for (i = 0; i < len; i += 1) {
          data.or.k[i].to = null;
          data.or.k[i].ti = null;
        }
      }
      this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this);
      // sh Indicates it needs to be capped between -180 and 180
      this.or.sh = true;
    } else {
      this.r = PropertyFactory.getProp(elem, data.r || { k: 0 }, 0, degToRads, this);
    }
    if (data.sk) {
      this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
      this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
    }
    this.a = PropertyFactory.getProp(elem, data.a || { k: [0, 0, 0] }, 1, 0, this);
    this.s = PropertyFactory.getProp(elem, data.s || { k: [100, 100, 100] }, 1, 0.01, this);
    // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
    if (data.o) {
      this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem);
    } else {
      this.o = { _mdf: false, v: 1 };
    }
    this._isDirty = true;
    if (!this.dynamicProperties.length) {
      this.getValue(true);
    }
  }

  TransformProperty.prototype = {
    applyToMatrix: applyToMatrix,
    getValue: processKeys,
    precalculateMatrix: precalculateMatrix,
    autoOrient: autoOrient,
  };

  extendPrototype([DynamicPropertyContainer], TransformProperty);
  TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
  TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

  function getTransformProperty(elem, data, container) {
    return new TransformProperty(elem, data, container);
  }

  return {
    getTransformProperty: getTransformProperty,
  };
}());

/* global createSizedArray, createSizedArray, pointPngth);
}

ShapePath.prototype.setP;
  }
};

ShapePath.prototype.se= len;
};

ShapePath.prototype.doubleArra *= 2;
};

ShapePath.prototype.] = y;
};

ShapePath.prototype.setTlace);
};

ShapePath.prototype.wPath;
};

/* global extendPrototype, roundCorner, BezierFactory, shapePool, degToRads,
  shapeCollectionPool, PropertyFactory, bmMin, DynamicPropertyContainer */
/* exported ShapePropertyFactory */

var ShapePropertyFactory = (function () {
  var initFrame = -999999;

  function interpolateShape(frameNum, previousValue, caching) {
    var iterationIndex = caching.lastIndex;
    var keyPropS;
    var keyPropE;
    var isHold;
    var j;
    var k;
    var jLen;
    var kLen;
    var perc;
    var vertexValue;
    var kf = this.keyframes;
    if (frameNum < kf[0].t - this.offsetTime) {
      keyPropS = kf[0].s[0];
      isHold = true;
      iterationIndex = 0;
    } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
      keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
      /* if(kf[kf.length - 1].s){
                keyPropS = kf[kf.length - 1].s[0];
            }else{
                keyPropS = kf[kf.length - 2].e[0];
            } */
      isHold = true;
    } else {
      var i = iterationIndex;
      var len = kf.length - 1;
      var flag = true;
      var keyData;
      var nextKeyData;
      while (flag) {
        keyData = kf[i];
        nextKeyData = kf[i + 1];
        if ((nextKeyData.t - this.offsetTime) > frameNum) {
          break;
        }
        if (i < len - 1) {
          i += 1;
        } else {
          flag = false;
        }
      }
      isHold = keyData.h === 1;
      iterationIndex = i;
      if (!isHold) {
        if (frameNum >= nextKeyData.t - this.offsetTime) {
          perc = 1;
        } else if (frameNum < keyData.t - this.offsetTime) {
          perc = 0;
        } else {
          var fnc;
          if (keyData.__fnct) {
            fnc = keyData.__fnct;
          } else {
            fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
            keyData.__fnct = fnc;
          }
          perc = fnc((frameNum - (keyData.t - this.offsetTime)) / ((nextKeyData.t - this.offsetTime) - (keyData.t - this.offsetTime)));
        }
        keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
      }
      keyPropS = keyData.s[0];
    }
    jLen = previousValue._length;
    kLen = keyPropS.i[0].length;
    caching.lastIndex = iterationIndex;

    for (j = 0; j < jLen; j += 1) {
      for (k = 0; k < kLen; k += 1) {
        vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
        previousValue.i[j][k] = vertexValue;
        vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
        previousValue.o[j][k] = vertexValue;
        vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
        previousValue.v[j][k] = vertexValue;
      }
    }.pv;ion;
  }

  function shapesEqual(shape1, shape2) {
    if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
      return false;
    }
    var i;
    var len = shape1._length;
    for (i = 0; i < len; i += 1) {
      if (shape1.v[i][0] !== shape2.v[i][0]
            || shape1.v[i][1] !== shape2.v[i][1]
            || shape1.o[i][0] !== shape2.o[i][0]
            || shape1.o[i][1] !== shape2.o[i][1]
            || shape1.i[i][0] !== shape2.i[i][0]
            || shape1.i[i][1] !== shape2.i[i][1]) {
        return false;
      }
    }
    return true;   }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    } if (!this.effectsSequence.length) {
      this._mdf = false;
      return;
    }
    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }
    this.lock = true;
    this._mdf = false;
    var finalValue;
    if (this.kf) {
      finalValue = this.pv;
    } else if (this.data.ks) {
      finalValue = this.data.ks.k;
    } else {
      finalValue = this.data.pt.k;
    }
    var i;
    var len = this.effectsSequence.length;
    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }
    this.setVValue(finalValue);
    this.lock = false;
    this.frameId = this.elem.globalData.frameId; [];is);
  }

  ShapeProperty.prototype.interpolateShape = interpolateShape;
  ShapeProperty.prototype.getValue = processEffectsSequence;
  ShapeProperty.prototype.setVValue = setVValue;
  ShapeProperty.prototype.addEffect = addEffect;

  function KeyframedShapeProperty(elem, data, type) {
    this.propType = 'shape';
    this.comp = elem.comp;
    this.elem = elem;
    this.container = elem;
    this.offsetTime = elem.data.st;
    this.keyframes = type === 3 ? data.pt.k : data.ks.k;
    this.k = true;
    this.kf = true;
    var len = this.keyframes[0].s[0].i.length;
    this.v = shapePool.newElement();
    this.v.setPathData(this.keyframes[0].s[0].c, len);
    this.pv = shapePool.clone(this.v);
    this.localShapeCollection = shapeCollectionPool.newShapeCollection();
    this.paths = this.localShapeCollection;
    this.paths.addShape(this.v);
    this.lastFrame = initFrame;
    this.reset = resetShape;
    this._caching = { lastFrame: initFrame, lastIndex: 0 };
    this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
  }
  KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
  KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
  KeyframedShapeProperty.prototype.setVValue = setVValue;
  KeyframedShapeProperty.prototype.addEffect = addEffect;

  var EllShapeProperty = (function () {
    var cPoint = roundCorne }
    }

    EllShapePropertyFactory.prototype = {
      reset: resetShape,
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();

        if (this._mdf) {
          this.convertEllToPath();
        }
      },
      convertEllToPath: function () {
        var p0 = this.p.v[0];
        var p1 = this.p.v[1];
        var s0 = this.s.v[0] / 2;
        var s1 = this.s.v[1] / 2;
        var _cw = this.d !== 3;
        var _v = this.v;
        _v.v[0][0] = p0;
        _v.v[0][1] = p1 - s1;
        _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.v[1][1] = p1;
        _v.v[2][0] = p0;
        _v.v[2][1] = p1 + s1;
        _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.v[3][1] = p1;
        _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
        _v.i[0][1] = p1 - s1;
        _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.i[1][1] = p1 - s1 * cPoint;
        _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
        _v.i[2][1] = p1 + s1;
        _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.i[3][1] = p1 + s1 * cPoint;
        _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
        _v.o[0][1] = p1 - s1;
        _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
        _v.o[1][1] = p1 + s1 * cPoint;
        _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
        _v.o[2][1] = p1 + s1;
        _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
        _v.o[3][1] = p1 - s1 * cPoint;
      },
    };

    extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);

    return EllShapePropertyFactory;
  }());

  var StarShapeProperty = (function  }
    }

    StarShapePropertyFactory.prototype = {
      reset: resetShape,
      getValue: function () {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        if (this._mdf) {
          this.convertToPath();
        }
      },
      convertStarToPath: function () {
        var numPts = Math.floor(this.pt.v) * 2;
        var angle = (Math.PI * 2) / numPts;
        /* this.v.v.length = numPts;
                this.v.i.length = numPts;
                this.v.o.length = numPts; */
        var longFlag = true;
        var longRad = this.or.v;
        var shortRad = this.ir.v;
        var longRound = this.os.v;
        var shortRound = this.is.v;
        var longPerimSegment = (2 * Math.PI * longRad) / (numPts * 2);
        var shortPerimSegment = (2 * Math.PI * shortRad) / (numPts * 2);
        var i;
        var rad;
        var roundness;
        var perimSegment;
        var currentAng = -Math.PI / 2;
        currentAng += this.r.v;
        var dir = this.data.d === 3 ? -1 : 1;
        this.v._length = 0;
        for (i = 0; i < numPts; i += 1) {
          rad = longFlag ? longRad : shortRad;
          roundness = longFlag ? longRound : shortRound;
          perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
          var x = rad * Math.cos(currentAng);
          var y = rad * Math.sin(currentAng);
          var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
          var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
          x += +this.p.v[0];
          y += +this.p.v[1];
          this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);

          /* this.v.v[i] = [x,y];
                    this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                    this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                    this.v._length = numPts; */
          longFlag = !longFlag;
          currentAng += angle * dir;
        }
      },
      convertPolygonToPath: function () {
        var numPts = Math.floor(this.pt.v);
        var angle = (Math.PI * 2) / numPts;
        var rad = this.or.v;
        var roundness = this.os.v;
        var perimSegment = (2 * Math.PI * rad) / (numPts * 4);
        var i;
        var currentAng = -Math.PI * 0.5;
        var dir = this.data.d === 3 ? -1 : 1;
        currentAng += this.r.v;
        this.v._length = 0;
        for (i = 0; i < numPts; i += 1) {
          var x = rad * Math.cos(currentAng);
          var y = rad * Math.sin(currentAng);
          var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
          var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
          x += +this.p.v[0];
          y += +this.p.v[1];
          this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
          currentAng += angle * dir;
        }
        this.paths.length = 0;
        this.paths[0] = this.v;
      },

    };
    extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);

    return StarShapePropertyFactory;
  }());

  var RectShapeProperty = (function  }
    }

    RectShapePropertyFactory.prototype = {
      convertRectToPath: function () {
        var p0 = this.p.v[0];
        var p1 = this.p.v[1];
        var v0 = this.s.v[0] / 2;
        var v1 = this.s.v[1] / 2;
        var round = bmMin(v0, v1, this.r.v);
        var cPoint = round * (1 - roundCorner);
        this.v._length = 0;

        if (this.d === 2 || this.d === 1) {
          this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
          this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);
          if (round !== 0) {
            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
          } else {
            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
          }
        } else {
          this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);
          if (round !== 0) {
            this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
            this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
            this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
            this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
            this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
            this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
          } else {
            this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
            this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
            this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
          }
        }
      },
      
      },
      reset: resetShape,
    };
    extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);

    return RectShapePropertyFactory;
  }rop;
  }

  function getConstructorFunction() {
    return ShapeProperty;rty;
  }

  var ob = {};
  ob.getShapeProp = getShapeProp;
  ob.getConstructorFunction = getConstructorFunction;
  ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
  return ob;
}());

/* global shapeCollectionPool, initialDefaultFrame, extendPrototype, DynamicPropertyContainer */
/* exported ShapeModifiers */

var ShapeModrn ob;
}());

function ShapeModifier() {}
ShapeModifier.prototype.initModifierProperties = function () {};
ShapeModifier.prototype.addShapeToModifier = function () {};
ShapeModifier.prototype.a}
  }
};
ShapeModifier.prototy;
  }
};
ShapeModifier.prototype.processKeys = function () {
  if (this.elem.globalData.frameId === this.frameId) {
    return;
  }
  this.frameId = this.elem.globalData.frameId;
  this.iterateDynamicProperties();
};

extendPrototype([DynamicPropertyContainer], ShapeModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, segmentsLengthPool, bez, shapePool, ShapeModifiers */

function TrimModifier() {
}
extendPrototype([ShapeModifier], TrimModifier);
TrimModifier.prototype.initModifierProength;
};

TrimModifier.prototype.addShapeToM = [];
};

TrimModifier.prototype.calculateShapeEdges = function (s, e, shapeLength, addedLength, totalModifierLength) {
  var segments = [];
  if (e <= 1) {
    segments.push({
      s: s,
      e: e,
    });
  } else if (s >= 1) {
    segments.push({
      s: s - 1,
      e: e - 1,
    });
  } else {
    segments.push({
      s: s,
      e: 1,
    });
    segments.push({
      s: 0,
      e: e - 1,
    });
  }
  var shapeSegments = [];
  var i;
  var len = segments.length;
  var segmentOb;
  for (i = 0; i < len; i += 1) {
    segmentOb = segments[i];
    if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
      var shapeS;
      var shapeE;
      if (segmentOb.s * totalModifierLength <= addedLength) {
        shapeS = 0;
      } else {
        shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
      }
      if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
        shapeE = 1;
      } else {
        shapeE = ((segmentOb.e * totalModifierLength - addedLength) / shapeLength);
      }
      shapeSegments.push([shapeS, shapeE]);
    }
  }
  if (!shapeSegments.length) {
    shapeSegments.push([0, 0]);
  }
  return shapeSegments;
};

TrimModifier.prototype.releasePasData;
};

TrimModifier.prototype.processShapes = function (_isFirstFrame) {
  var s;
  var e;
  if (this._mdf || _isFirstFrame) {
    var o = (this.o.v % 360) / 360;
    if (o < 0) {
      o += 1;
    }
    if (this.s.v > 1) {
      s = 1 + o;
    } else if (this.s.v < 0) {
      s = 0 + o;
    } else {
      s = this.s.v + o;
    }
    if (this.e.v > 1) {
      e = 1 + o;
    } else if (this.e.v < 0) {
      e = 0 + o;
    } else {
      e = this.e.v + o;
    }

    if (s > e) {
      var _s = s;
      s = e;
      e = _s;
    }
    s = Math.round(s * 10000) * 0.0001;
    e = Math.round(e * 10000) * 0.0001;
    this.sValue = s;
    this.eValue = e;
  } else {
    s = this.sValue;
    e = this.eValue;
  }
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var pathsData;
  var pathData;
  var totalShapeLength;
  var totalModifierLength = 0;

  if (e === s) {
    for (i = 0; i < len; i += 1) {
      this.shapes[i].localShapeCollection.releaseShapes();
      this.shapes[i].shape._mdf = true;
      this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
      if (this._mdf) {
        this.shapes[i].pathsData.length = 0;
      }
    }
  } else if (!((e === 1 && s === 0) || (e === 0 && s === 1))) {
    var segments = [];
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      // if shape hasn't changed and trim properties haven't changed, cached previous path can be used
      if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
        shapeData.shape.paths = shapeData.localShapeCollection;
      } else {
        shapePaths = shapeData.shape.paths;
        jLen = shapePaths._length;
        totalShapeLength = 0;
        if (!shapeData.shape._mdf && shapeData.pathsData.length) {
          totalShapeLength = shapeData.totalShapeLength;
        } else {
          pathsData = this.releasePathsData(shapeData.pathsData);
          for (j = 0; j < jLen; j += 1) {
            pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
            pathsData.push(pathData);
            totalShapeLength += pathData.totalLength;
          }
          shapeData.totalShapeLength = totalShapeLength;
          shapeData.pathsData = pathsData;
        }

        totalModifierLength += totalShapeLength;
        shapeData.shape._mdf = true;
      }
    }
    var shapeS = s;
    var shapeE = e;
    var addedLength = 0;
    var edges;
    for (i = len - 1; i >= 0; i -= 1) {
      shapeData = this.shapes[i];
      if (shapeData.shape._mdf) {
        localShapeCollection = shapeData.localShapeCollection;
        localShapeCollection.releaseShapes();
        // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
        if (this.m === 2 && len > 1) {
          edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
          addedLength += shapeData.totalShapeLength;
        } else {
          edges = [[shapeS, shapeE]];
        }
        jLen = edges.length;
        for (j = 0; j < jLen; j += 1) {
          shapeS = edges[j][0];
          shapeE = edges[j][1];
          segments.length = 0;
          if (shapeE <= 1) {
            segments.push({
              s: shapeData.totalShapeLength * shapeS,
              e: shapeData.totalShapeLength * shapeE,
            });
          } else if (shapeS >= 1) {
            segments.push({
              s: shapeData.totalShapeLength * (shapeS - 1),
              e: shapeData.totalShapeLength * (shapeE - 1),
            });
          } else {
            segments.push({
              s: shapeData.totalShapeLength * shapeS,
              e: shapeData.totalShapeLength,
            });
            segments.push({
              s: 0,
              e: shapeData.totalShapeLength * (shapeE - 1),
            });
          }
          var newShapesData = this.addShapes(shapeData, segments[0]);
          if (segments[0].s !== segments[0].e) {
            if (segments.length > 1) {
              var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
              if (lastShapeInCollection.c) {
                var lastShape = newShapesData.pop();
                this.addPaths(newShapesData, localShapeCollection);
                newShapesData = this.addShapes(shapeData, segments[1], lastShape);
              } else {
                this.addPaths(newShapesData, localShapeCollection);
                newShapesData = this.addShapes(shapeData, segments[1]);
              }
            }
            this.addPaths(newShapesData, localShapeCollection);
          }
        }
        shapeData.shape.paths = localShapeCollection;
      }
    }
  } else if (this._mdf) {
    for (i = 0; i < len; i += 1) {
      // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
      // Don't remove this even if it's losing cached info.
      this.shapes[i].pathsData.length = 0;
      this.shapes[i].shape._mdf = true;
    }
  }
};

TrimModifier.prototype.a;
  }
};

TrimModifier.prototype.add + 1);
};

TrimModifier.prototype.addSegmentFr + 1);
};

TrimModifier.prototype.addShapes = function (shapeData, shapeSegment, shapePath) {
  var pathsData = shapeData.pathsData;
  var shapePaths = shapeData.shape.paths.shapes;
  var i;
  var len = shapeData.shape.paths._length;
  var j;
  var jLen;
  var addedLength = 0;
  var currentLengthData;
  var segmentCount;
  var lengths;
  var segment;
  var shapes = [];
  var initPos;
  var newShape = true;
  if (!shapePath) {
    shapePath = shapePool.newElement();
    segmentCount = 0;
    initPos = 0;
  } else {
    segmentCount = shapePath._length;
    initPos = shapePath._length;
  }
  shapes.push(shapePath);
  for (i = 0; i < len; i += 1) {
    lengths = pathsData[i].lengths;
    shapePath.c = shapePaths[i].c;
    jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
    for (j = 1; j < jLen; j += 1) {
      currentLengthData = lengths[j - 1];
      if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
        addedLength += currentLengthData.addedLength;
        shapePath.c = false;
      } else if (addedLength > shapeSegment.e) {
        shapePath.c = false;
        break;
      } else {
        if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
          this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
          newShape = false;
        } else {
          segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
          this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
          // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
          newShape = false;
          shapePath.c = false;
        }
        addedLength += currentLengthData.addedLength;
        segmentCount += 1;
      }
    }
    if (shapePaths[i].c && lengths.length) {
      currentLengthData = lengths[j - 1];
      if (addedLength <= shapeSegment.e) {
        var segmentLength = lengths[j - 1].addedLength;
        if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
          this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
          newShape = false;
        } else {
          segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
          this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
          // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
          newShape = false;
          shapePath.c = false;
        }
      } else {
        shapePath.c = false;
      }
      addedLength += currentLengthData.addedLength;
      segmentCount += 1;
    }
    if (shapePath._length) {
      shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
      shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1);
    }
    if (addedLength > shapeSegment.e) {
      break;
    }
    if (i < len - 1) {
      shapePath = shapePool.newElement();
      newShape = true;
      shapes.push(shapePath);
      segmentCount = 0;
    }
  }
  return shapes;
};

ShapeModifiers.registerModifier('tm', TrimModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, shapePool, roundCorner, ShapeModifiers */

function RoundCornersModifier() {}
extendPrototype([ShapeModifier], RoundCornersModifier);
RoundCornersModifier.prototype.initModifierProperties = function (elem, data) {
  this.getValue = this.processKeys;
  this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
  this._isAnimated = !!this.rd.effectsSequence.length;
};

RoundCornersModifier.prototype.procdPath;
};

RoundCornersModifier.prototype.processShapes = function (_isFirstFrame) {
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var rd = this.rd.v;

  if (rd !== 0) {
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      localShapeCollection = shapeData.localShapeCollection;
      if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
        localShapeCollection.releaseShapes();
        shapeData.shape._mdf = true;
        shapePaths = shapeData.shape.paths.shapes;
        jLen = shapeData.shape.paths._length;
        for (j = 0; j < jLen; j += 1) {
          localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
        }
      }
      shapeData.shape.paths = shapeData.localShapeCollection;
    }
  }
  if (!this.dynamicProperties.length) {
    this._mdf = false;
  }
};

ShapeModifiers.registerModifier('rd', RoundCornersModifier);

/* global extendPrototype, ShapeModifier, PropertyFactory, shapePool, ShapeModifiers */

function PuckerAndBloatModifier() {}
extendPrototype([ShapeModifier], PuckerAndBloatModifier);
PuckerAndBloatModifier.prototype.initModifierProength;
};

PuckerAndBloatModifier.prototype.procdPath;
};

PuckerAndBloatModifier.prototype.processShapes = function (_isFirstFrame) {
  var shapePaths;
  var i;
  var len = this.shapes.length;
  var j;
  var jLen;
  var amount = this.amount.v;

  if (amount !== 0) {
    var shapeData;
    var localShapeCollection;
    for (i = 0; i < len; i += 1) {
      shapeData = this.shapes[i];
      localShapeCollection = shapeData.localShapeCollection;
      if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
        localShapeCollection.releaseShapes();
        shapeData.shape._mdf = true;
        shapePaths = shapeData.shape.paths.shapes;
        jLen = shapeData.shape.paths._length;
        for (j = 0; j < jLen; j += 1) {
          localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
        }
      }
      shapeData.shape.paths = shapeData.localShapeCollection;
    }
  }
  if (!this.dynamicProperties.length) {
    this._mdf = false;
  }
};
ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);

/* global extendPrototype, ShapeModifier, TransformPropertyFactory, PropertyFactory, Matrix, ShapeModifiers */

function RepeaterModifier() {}
extendPrototype([ShapeModifier], RepeaterModifier);

RepeaterModifier.prototype.initModifierProrix();
};

RepeaterModifier.prototype.applyTrav[2]);
};

RepeaterModifier.prototype.init = function (elem, arr, pos, elemsData) {
  this.elem = elem;
  this.arr = arr;
  this.pos = pos;
  this.elemsData = elemsData;
  this._currentCopies = 0;
  this._elements = [];
  this._groups = [];
  this.frameId = -1;
  this.initDynamicPropertyContainer(elem);
  this.initModifierProperties(elem, arr[pos]);
  while (pos > 0) {
    pos -= 1;
    // this._elements.unshift(arr.splice(pos,1)[0]);
    this._elements.unshift(arr[pos]);
  }
  if (this.dynamicProperties.length) {
    this.k = true;
  } else {
    this.getValue(true);
  }
};

RepeaterModifier.prototype.resetElements = function (elements) {
  var i;
  var len = elements.length;
  for (i = 0; i < len; i += 1) {
    elements[i]._processed = false;
    if (elements[i].ty === 'gr') {
      this.resetElements(elements[i].it);
    }
  }
};

RepeaterModifier.prototype.cloneEments;
};

RepeaterModifier.prototype.changeGrou}
  }
};

RepeaterModifier.prototype.processShapes = function (_isFirstFrame) {
  var items;
  var itemsTransform;
  var i;
  var dir;
  var cont;
  if (this._mdf || _isFirstFrame) {
    var copies = Math.ceil(this.c.v);
    if (this._groups.length < copies) {
      while (this._groups.length < copies) {
        var group = {
          it: this.cloneElements(this._elements),
          ty: 'gr',
        };
        group.it.push({
          a: { a: 0, ix: 1, k: [0, 0] }, nm: 'Transform', o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: 'tr',
        });

        this.arr.splice(0, 0, group);
        this._groups.splice(0, 0, group);
        this._currentCopies += 1;
      }
      this.elem.reloadShapes();
    }
    cont = 0;
    var renderFlag;
    for (i = 0; i <= this._groups.length - 1; i += 1) {
      renderFlag = cont < copies;
      this._groups[i]._render = renderFlag;
      this.changeGroupRender(this._groups[i].it, renderFlag);
      cont += 1;
    }

    this._currentCopies = copies;
    /// /

    var offset = this.o.v;
    var offsetModulo = offset % 1;
    var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
    var pProps = this.pMatrix.props;
    var rProps = this.rMatrix.props;
    var sProps = this.sMatrix.props;
    this.pMatrix.reset();
    this.rMatrix.reset();
    this.sMatrix.reset();
    this.tMatrix.reset();
    this.matrix.reset();
    var iteration = 0;

    if (offset > 0) {
      while (iteration < roundOffset) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
        iteration += 1;
      }
      if (offsetModulo) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
        iteration += offsetModulo;
      }
    } else if (offset < 0) {
      while (iteration > roundOffset) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
        iteration -= 1;
      }
      if (offsetModulo) {
        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
        iteration -= offsetModulo;
      }
    }
    i = this.data.m === 1 ? 0 : this._currentCopies - 1;
    dir = this.data.m === 1 ? 1 : -1;
    cont = this._currentCopies;
    var j;
    var jLen;
    while (cont) {
      items = this.elemsData[i].it;
      itemsTransform = items[items.length - 1].transform.mProps.v.props;
      jLen = itemsTransform.length;
      items[items.length - 1].transform.mProps._mdf = true;
      items[items.length - 1].transform.op._mdf = true;
      items[items.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));
      if (iteration !== 0) {
        if ((i !== 0 && dir === 1) || (i !== this._currentCopies - 1 && dir === -1)) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
        }
        this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
        this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
        this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);

        for (j = 0; j < jLen; j += 1) {
          itemsTransform[j] = this.matrix.props[j];
        }
        this.matrix.reset();
      } else {
        this.matrix.reset();
        for (j = 0; j < jLen; j += 1) {
          itemsTransform[j] = this.matrix.props[j];
        }
      }
      iteration += 1;
      cont -= 1;
      i += dir;
    }
  } else {
    cont = this._currentCopies;
    i = 0;
    dir = 1;
    while (cont) {
      items = this.elemsData[i].it;
      itemsTransform = items[items.length - 1].transform.mProps.v.props;
      items[items.length - 1].transform.mProps._mdf = false;
      items[items.length - 1].transform.op._mdf = false;
      cont -= 1;
      i += dir;
    }
  }
};

RepeaterModifier.prototype.addShape = function () {};

ShapeModifiers.registerModifier('rp', RepeaterModifier);

/* global createSizedArray, shapePngth);
}

ShapeCollection.prototype.a += 1;
};

ShapeCollection.prototype.releash = 0;
};

/* global createSizedArray, createTypedArray, PropertyFactory, extendPrototype, DynamicPropertyContainer */

function DashProperty(elem, data, renderer, container) {
  this.elem = elem;
  this.frameId = -1;
  this.dataProps = createSizedArray(data.length);
  this.renderer = renderer;
  this.k = false;
  this.dashStr = '';
  this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
  this.dashoffset = createTypedArray('float32', 1);
  this.initDynamicPropertyContainer(container);
  var i;
  var len = data.length || 0;
  var prop;
  for (i = 0; i < len; i += 1) {
    prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
    this.k = prop.k || this.k;
    this.dataProps[i] = { n: data[i].n, p: prop };
  }
  if (!this.k) {
    this.getValue(true);
  }
  this._isAnimated = this.k;
}

DashProperty.prototype.g}
  }
};
extendPrototype([DynamicPropertyContainer], DashProperty);

/* global createTypedArray, PropertyFactory, extendPrototype, DynamicPropertyConttrue);
}

GradientProperty.prototype.comparePoints = function (values, points) {
  var i = 0;
  var len = this.o.length / 2;
  var diff;
  while (i < len) {
    diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);
    if (diff > 0.01) {
      return false;
    }
    i += 1;
  }
  return true;
};

GradientProperty.prototype.checkCollapsable = function () {
  if (this.o.length / 2 !== this.c.length / 4) {
    return false;
  }
  if (this.data.k.k[0].s) {
    var i = 0;
    var len = this.data.k.k.length;
    while (i < len) {
      if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
        return false;
      }
      i += 1;
    }
  } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
    return false;
  }
  return true;
};

GradientProperty.prototype.g;
  }
};

extendPrototype([DynamicPropertyContainer], GradientProperty);

/* exported buildShapeString */

var buildShapeString = function (pathNodes, length, closed, mat) {
  if (length === 0) {
    return '';
  }
  var _o = pathNodes.o;
  var _i = pathNodes.i;
  var _v = pathNodes.v;
  var i;
  var shapeString = ' M' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
  for (i = 1; i < length; i += 1) {
    shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[i][0], _i[i][1]) + ' ' + mat.applyToPointStringified(_v[i][0], _v[i][1]);
  }
  if (closed && length) {
    shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[0][0], _i[0][1]) + ' ' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
    shapeString += 'z';
  }
  return shapeString;
};

/* global Howl */
/* exported audioControllerFactory */

var audioControllerFactory = (functiolse;
  }

  AudioController.prototype = {
    addAudio: function (audio) {
      this.audios.push(audio);
    },
    pause: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].pause();
      }
    },
    resume: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].resume();
      }
    },
    setRate: function (rateValue) {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].setRate(rateValue);
      }
    },
    createAudio: function (assetPath) {
      if (this.audioFactory) {
        return this.audioFactory(assetPath);
      } if (Howl) {
        return new Howl({
          src: [assetPath],
        });
      }
      return {
        isPlaying: false,
        play: function () { this.isPlaying = true; },
        seek: function () { this.isPlaying = false; },
        playing: function () {},
        rate: function () {},
        setVolume: function () {},
      };
    },
    setAudioFactory: function (audioFactory) {
      this.audioFactory = audioFactory;
    },
    s);
    },
    mute: function () {
      this._isMuted = true;
      this._updateVolume();
    },
    unmute: function () {
      this._isMuted = false;
      this._updateVolume();
    },
    getVolume: function () {
      return this._volume;
    },
    _updateVolume: function () {
      var i;
      var len = this.audios.length;
      for (i = 0; i < len; i += 1) {
        this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
      }
    },
  };
r();
  };
}());

/* global createTag, createNS, isSafari */
/* exported ImagePreloader */

var ImagePreloader = (function () {
  var proxvas;
  }   }ath;50);
  }

  function createImageData(assetData) {
    var path = getAssetsPath(assetData, this.assetsPath, this.path);
    var img = createNS('image');
    if (isSafari) {
      this.testImageLoaded(img);
    } else {
      img.addEventListener('load', this._imageLoaded, false);
    }
    img.addEventListener('error', function () {
      ob.img = proxyImage;
      this._imageLoaded();
    }.bind(this), false);
    img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
    this._elementHelper.append(img);
    var ob = {
      img: img,
      assetData: assetData,
    };
    return ob; ob;
  }

  function loadAssets(assets, cb) {
    this.imagesLoadedCb = cb;
    var i;
    var len = assets.length;
    for (i = 0; i < len; i += 1) {
      if (!assets[i].layers) {
        this.totalImages += 1;
        this.images.push(this._createImageData(assets[i]));
      }
    }
  }

  function setPath(path) {
    this.path = path || ''; '';ull;= 0;ets;   }
  }

  function ImagePreloaderFactory() {
    this._imageLoaded = imageLoaded.bind(this);
    this.testImageLoaded = testImageLoaded.bind(this);
    this.assetsPath = '';
    this.path = '';
    this.totalImages = 0;
    this.loadedAssets = 0;
    this.imagesLoadedCb = null;
    this.images = [];
  }

  ImagePreloaderFactory.prototype = {
    loadAssets: loadAssets,
    setAssetsPath: setAssetsPath,
    setPath: setPath,
    loaded: loaded,
    destroy: destroy,
    getImage: getImage,
    createImgData: createImgData,
    createImageData: createImageData,
    imageLoaded: imageLoaded,
    setCacheType: setCacheType,
  };

  return ImagePreloaderFactory;
}());

/* exported featureSupport */

var featureSrn ob;
}());

/* global createNS */
/* exported filtersFactory */

var filtersFrn ob;
}());

/* exported assetLoader */

var assetLoader = (function () {
  function formatResponse(xhr) {
    if (xhr.response && typeof xhr.response === 'object') {
      return xhr.response;
    } if (xhr.response && typeof xhr.response === 'string') {
      return JSON.parse(xhr.response);
    } if (xhr.responseText) {
      return JSON.parse(xhr.responseText);
    }
    return null;
  }

  function loadAsset(path, callback, errorCallback) {
    var response;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    // set responseType after calling open or IE will break.
    try {
      // This crashes on Android WebView prior to KitKat
      xhr.responseType = 'json';
    } catch (err) {} // eslint-disable-line no-empty
    xhr.send();
    xhr.onreadystat }
    };
  }
  return {
    load: loadAsset,
  };
}());

/* global createSizedArray, PropertyFactory, TextAnimatorDataProperty, bez, addHueToRGB,
  addSaturationToRGB, addBrightnessToRGB, LetterProps, Matrix, extendPrototype, DynamicPropertyContaielem);
}

TextAnimatorProperty.prototype.searchProperties = function () {
  var i;
  var len = this._textData.a.length;
  var animatorProps;
  var getProp = PropertyFactory.getProp;
  for (i = 0; i < len; i += 1) {
    animatorProps = this._textData.a[i];
    this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
  }
  if (this._textData.p && 'm' in this._textData.p) {
    this._pathData = {
      f: getProp(this._elem, this._textData.p.f, 0, 0, this),
      l: getProp(this._elem, this._textData.p.l, 0, 0, this),
      r: this._textData.p.r,
      m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
    };
    this._hasMaskedPath = true;
  } else {
    this._hasMaskedPath = false;
  }
  this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
};

TextAnimatorProperty.prototype.getMeasures = function (documentData, lettersChangedFlag) {
  this.lettersChangedFlag = lettersChangedFlag;
  if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
    return;
  }
  this._isFirstFrame = false;
  var alignment = this._moreOptions.alignment.v;
  var animators = this._animatorsData;
  var textData = this._textData;
  var matrixHelper = this.mHelper;
  var renderType = this._renderType;
  var renderedLettersCount = this.renderedLetters.length;
  var xPos;
  var yPos;
  var i;
  var len;
  var letters = documentData.l;
  var pathInfo;
  var currentLength;
  var currentPoint;
  var segmentLength;
  var flag;
  var pointInd;
  var segmentInd;
  var prevPoint;
  var points;
  var segments;
  var partialLength;
  var totalLength;
  var perc;
  var tanAngle;
  var mask;
  if (this._hasMaskedPath) {
    mask = this._pathData.m;
    if (!this._pathData.n || this._pathData._mdf) {
      var paths = mask.v;
      if (this._pathData.r) {
        paths = paths.reverse();
      }
      // TODO: release bezier data cached from previous pathInfo: this._pathData.pi
      pathInfo = {
        tLength: 0,
        segments: [],
      };
      len = paths._length - 1;
      var bezierData;
      totalLength = 0;
      for (i = 0; i < len; i += 1) {
        bezierData = bez.buildBezierData(paths.v[i],
          paths.v[i + 1],
          [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
          [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
        pathInfo.tLength += bezierData.segmentLength;
        pathInfo.segments.push(bezierData);
        totalLength += bezierData.segmentLength;
      }
      i = len;
      if (mask.v.c) {
        bezierData = bez.buildBezierData(paths.v[i],
          paths.v[0],
          [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]],
          [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
        pathInfo.tLength += bezierData.segmentLength;
        pathInfo.segments.push(bezierData);
        totalLength += bezierData.segmentLength;
      }
      this._pathData.pi = pathInfo;
    }
    pathInfo = this._pathData.pi;

    currentLength = this._pathData.f.v;
    segmentInd = 0;
    pointInd = 1;
    segmentLength = 0;
    flag = true;
    segments = pathInfo.segments;
    if (currentLength < 0 && mask.v.c) {
      if (pathInfo.tLength < Math.abs(currentLength)) {
        currentLength = -Math.abs(currentLength) % pathInfo.tLength;
      }
      segmentInd = segments.length - 1;
      points = segments[segmentInd].points;
      pointInd = points.length - 1;
      while (currentLength < 0) {
        currentLength += points[pointInd].partialLength;
        pointInd -= 1;
        if (pointInd < 0) {
          segmentInd -= 1;
          points = segments[segmentInd].points;
          pointInd = points.length - 1;
        }
      }
    }
    points = segments[segmentInd].points;
    prevPoint = points[pointInd - 1];
    currentPoint = points[pointInd];
    partialLength = currentPoint.partialLength;
  }

  len = letters.length;
  xPos = 0;
  yPos = 0;
  var yOff = documentData.finalSize * 1.2 * 0.714;
  var firstLine = true;
  var animatorProps;
  var animatorSelector;
  var j;
  var jLen;
  var letterValue;

  jLen = animators.length;

  var mult;
  var ind = -1;
  var offf;
  var xPathPos;
  var yPathPos;
  var initPathPos = currentLength;
  var initSegmentInd = segmentInd;
  var initPointInd = pointInd;
  var currentLine = -1;
  var elemOpacity;
  var sc;
  var sw;
  var fc;
  var k;
  var letterSw;
  var letterSc;
  var letterFc;
  var letterM = '';
  var letterP = this.defaultPropsArray;
  var letterO;

  //
  if (documentData.j === 2 || documentData.j === 1) {
    var animatorJustifyOffset = 0;
    var animatorFirstCharOffset = 0;
    var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
    var lastIndex = 0;
    var isNewLine = true;

    for (i = 0; i < len; i += 1) {
      if (letters[i].n) {
        if (animatorJustifyOffset) {
          animatorJustifyOffset += animatorFirstCharOffset;
        }
        while (lastIndex < i) {
          letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
          lastIndex += 1;
        }
        animatorJustifyOffset = 0;
        isNewLine = true;
      } else {
        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          if (animatorProps.t.propType) {
            if (isNewLine && documentData.j === 2) {
              animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
            }
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
            } else {
              animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
            }
          }
        }
        isNewLine = false;
      }
    }
    if (animatorJustifyOffset) {
      animatorJustifyOffset += animatorFirstCharOffset;
    }
    while (lastIndex < i) {
      letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
      lastIndex += 1;
    }
  }
  //

  for (i = 0; i < len; i += 1) {
    matrixHelper.reset();
    elemOpacity = 1;
    if (letters[i].n) {
      xPos = 0;
      yPos += documentData.yOffset;
      yPos += firstLine ? 1 : 0;
      currentLength = initPathPos;
      firstLine = false;
      if (this._hasMaskedPath) {
        segmentInd = initSegmentInd;
        pointInd = initPointInd;
        points = segments[segmentInd].points;
        prevPoint = points[pointInd - 1];
        currentPoint = points[pointInd];
        partialLength = currentPoint.partialLength;
        segmentLength = 0;
      }
      letterM = '';
      letterFc = '';
      letterSw = '';
      letterO = '';
      letterP = this.defaultPropsArray;
    } else {
      if (this._hasMaskedPath) {
        if (currentLine !== letters[i].line) {
          switch (documentData.j) {
            case 1:
              currentLength += totalLength - documentData.lineWidths[letters[i].line];
              break;
            case 2:
              currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
              break;
            default:
              break;
          }
          currentLine = letters[i].line;
        }
        if (ind !== letters[i].ind) {
          if (letters[ind]) {
            currentLength += letters[ind].extra;
          }
          currentLength += letters[i].an / 2;
          ind = letters[i].ind;
        }
        currentLength += (alignment[0] * letters[i].an) * 0.005;
        var animatorOffset = 0;
        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          if (animatorProps.p.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorOffset += animatorProps.p.v[0] * mult[0];
            } else {
              animatorOffset += animatorProps.p.v[0] * mult;
            }
          }
          if (animatorProps.a.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
            if (mult.length) {
              animatorOffset += animatorProps.a.v[0] * mult[0];
            } else {
              animatorOffset += animatorProps.a.v[0] * mult;
            }
          }
        }
        flag = true;
        while (flag) {
          if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
            perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
            xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
            yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
            matrixHelper.translate((-alignment[0] * letters[i].an) * 0.005, -(alignment[1] * yOff) * 0.01);
            flag = false;
          } else if (points) {
            segmentLength += currentPoint.partialLength;
            pointInd += 1;
            if (pointInd >= points.length) {
              pointInd = 0;
              segmentInd += 1;
              if (!segments[segmentInd]) {
                if (mask.v.c) {
                  pointInd = 0;
                  segmentInd = 0;
                  points = segments[segmentInd].points;
                } else {
                  segmentLength -= currentPoint.partialLength;
                  points = null;
                }
              } else {
                points = segments[segmentInd].points;
              }
            }
            if (points) {
              prevPoint = currentPoint;
              currentPoint = points[pointInd];
              partialLength = currentPoint.partialLength;
            }
          }
        }
        offf = letters[i].an / 2 - letters[i].add;
        matrixHelper.translate(-offf, 0, 0);
      } else {
        offf = letters[i].an / 2 - letters[i].add;
        matrixHelper.translate(-offf, 0, 0);

        // Grouping alignment
        matrixHelper.translate((-alignment[0] * letters[i].an) * 0.005, (-alignment[1] * yOff) * 0.01, 0);
      }

      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.t.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
          if (xPos !== 0 || documentData.j !== 0) {
            if (this._hasMaskedPath) {
              if (mult.length) {
                currentLength += animatorProps.t.v * mult[0];
              } else {
                currentLength += animatorProps.t.v * mult;
              }
            } else if (mult.length) {
              xPos += animatorProps.t.v * mult[0];
            } else {
              xPos += animatorProps.t.v * mult;
            }
          }
        }
      }
      if (documentData.strokeWidthAnim) {
        sw = documentData.sw || 0;
      }
      if (documentData.strokeColorAnim) {
        if (documentData.sc) {
          sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
        } else {
          sc = [0, 0, 0];
        }
      }
      if (documentData.fillColorAnim && documentData.fc) {
        fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.a.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

          if (mult.length) {
            matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
          } else {
            matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
          }
        }
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        if (animatorProps.s.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          if (mult.length) {
            matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult[0]), 1 + ((animatorProps.s.v[1] - 1) * mult[1]), 1);
          } else {
            matrixHelper.scale(1 + ((animatorProps.s.v[0] - 1) * mult), 1 + ((animatorProps.s.v[1] - 1) * mult), 1);
          }
        }
      }
      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;
        animatorSelector = animators[j].s;
        mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
        if (animatorProps.sk.propType) {
          if (mult.length) {
            matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
          } else {
            matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
          }
        }
        if (animatorProps.r.propType) {
          if (mult.length) {
            matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
          } else {
            matrixHelper.rotateZ(-animatorProps.r.v * mult);
          }
        }
        if (animatorProps.ry.propType) {
          if (mult.length) {
            matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
          } else {
            matrixHelper.rotateY(animatorProps.ry.v * mult);
          }
        }
        if (animatorProps.rx.propType) {
          if (mult.length) {
            matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
          } else {
            matrixHelper.rotateX(animatorProps.rx.v * mult);
          }
        }
        if (animatorProps.o.propType) {
          if (mult.length) {
            elemOpacity += ((animatorProps.o.v) * mult[0] - elemOpacity) * mult[0];
          } else {
            elemOpacity += ((animatorProps.o.v) * mult - elemOpacity) * mult;
          }
        }
        if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
          if (mult.length) {
            sw += animatorProps.sw.v * mult[0];
          } else {
            sw += animatorProps.sw.v * mult;
          }
        }
        if (documentData.strokeColorAnim && animatorProps.sc.propType) {
          for (k = 0; k < 3; k += 1) {
            if (mult.length) {
              sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
            } else {
              sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
            }
          }
        }
        if (documentData.fillColorAnim && documentData.fc) {
          if (animatorProps.fc.propType) {
            for (k = 0; k < 3; k += 1) {
              if (mult.length) {
                fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
              } else {
                fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
              }
            }
          }
          if (animatorProps.fh.propType) {
            if (mult.length) {
              fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
            } else {
              fc = addHueToRGB(fc, animatorProps.fh.v * mult);
            }
          }
          if (animatorProps.fs.propType) {
            if (mult.length) {
              fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
            } else {
              fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
            }
          }
          if (animatorProps.fb.propType) {
            if (mult.length) {
              fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
            } else {
              fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
            }
          }
        }
      }

      for (j = 0; j < jLen; j += 1) {
        animatorProps = animators[j].a;

        if (animatorProps.p.propType) {
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
          if (this._hasMaskedPath) {
            if (mult.length) {
              matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
            } else {
              matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
            }
          } else if (mult.length) {
            matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
          } else {
            matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
          }
        }
      }
      if (documentData.strokeWidthAnim) {
        letterSw = sw < 0 ? 0 : sw;
      }
      if (documentData.strokeColorAnim) {
        letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')';
      }
      if (documentData.fillColorAnim && documentData.fc) {
        letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')';
      }

      if (this._hasMaskedPath) {
        matrixHelper.translate(0, -documentData.ls);

        matrixHelper.translate(0, (alignment[1] * yOff) * 0.01 + yPos, 0);
        if (textData.p.p) {
          tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
          var rot = (Math.atan(tanAngle) * 180) / Math.PI;
          if (currentPoint.point[0] < prevPoint.point[0]) {
            rot += 180;
          }
          matrixHelper.rotate((-rot * Math.PI) / 180);
        }
        matrixHelper.translate(xPathPos, yPathPos, 0);
        currentLength -= (alignment[0] * letters[i].an) * 0.005;
        if (letters[i + 1] && ind !== letters[i + 1].ind) {
          currentLength += letters[i].an / 2;
          currentLength += (documentData.tr * 0.001) * documentData.finalSize;
        }
      } else {
        matrixHelper.translate(xPos, yPos, 0);

        if (documentData.ps) {
          // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
          matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
        }
        switch (documentData.j) {
          case 1:
            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
            break;
          case 2:
            matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
            break;
          default:
            break;
        }
        matrixHelper.translate(0, -documentData.ls);
        matrixHelper.translate(offf, 0, 0);
        matrixHelper.translate((alignment[0] * letters[i].an) * 0.005, (alignment[1] * yOff) * 0.01, 0);
        xPos += letters[i].l + (documentData.tr * 0.001) * documentData.finalSize;
      }
      if (renderType === 'html') {
        letterM = matrixHelper.toCSS();
      } else if (renderType === 'svg') {
        letterM = matrixHelper.to2dCSS();
      } else {
        letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
      }
      letterO = elemOpacity;
    }

    if (renderedLettersCount <= i) {
      letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
      this.renderedLetters.push(letterValue);
      renderedLettersCount += 1;
      this.lettersChangedFlag = true;
    } else {
      letterValue = this.renderedLetters[i];
      this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
    }
  }
};

TextAnimatorProperty.prototype.gies();
};

TextAnimatorProperty.prototype.mHelper = new Matrix();
TextAnimatorProperty.prototype.defaultPropsArray = [];
extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

/* global PropertyFactory, degToRads, TextSelectorProp */
/* exported TextAnimatorDataPropes.s
  };
}

LetterProps.prototypedated;
};

/* global FontManager, initialDefaultFrame, getFontProperties */
/* exported TextPrope;
  }
}

TextProperty.prototype.defaultBoxWidth = [0, 0];

TextProperty.prototype.cn obj;
};

TextProperty.prototype.setCurr true;
};

TextProperty.prototype.searchPmes();
};

TextProperty.prototype.searchKeis.kf;
};

TextProperty.prototype.adthis);
};

TextProperty.prototype.getValue = function (_finalValue) {
  if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
    return;
  }
  this.currentData.t = this.data.d.k[this.keysIndex].s.t;
  var currentValue = this.currentData;
  var currentIndex = this.keysIndex;
  if (this.lock) {
    this.setCurrentData(this.currentData);
    return;
  }
  this.lock = true;
  this._mdf = false;
  var i; var
    len = this.effectsSequence.length;
  var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
  for (i = 0; i < len; i += 1) {
    // Checking if index changed to prevent creating a new object every time the expression updates.
    if (currentIndex !== this.keysIndex) {
      finalValue = this.effectsSequence[i](finalValue, finalValue.t);
    } else {
      finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
    }
  }
  if (currentValue !== finalValue) {
    this.setCurrentData(finalValue);
  }
  this.v = this.currentData;
  this.pv = this.v;
  this.lock = false;
  this.frameId = this.elem.globalData.frameId;
};

TextProperty.prototype.getKeyfraex].s;
};

TextProperty.prototype.buildFinalText = function (text) {
  var combinedCharacters = FontManager.getCombinedCharacterCodes();
  var charactersArray = [];
  var i = 0; var
    len = text.length;
  var charCode;
  while (i < len) {
    charCode = text.charCodeAt(i);
    if (combinedCharacters.indexOf(charCode) !== -1) {
      charactersArray[charactersArray.length - 1] += text.charAt(i);
    } else if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      charCode = text.charCodeAt(i + 1);
      if (charCode >= 0xDC00 && charCode <= 0xDFFF) {
        charactersArray.push(text.substr(i, 2));
        i += 1;
      } else {
        charactersArray.push(text.charAt(i));
      }
    } else {
      charactersArray.push(text.charAt(i));
    }
    i += 1;
  }
  return charactersArray;
};

TextProperty.prototype.completeTextData = function (documentData) {
  documentData.__complete = true;
  var fontManager = this.elem.globalData.fontManager;
  var data = this.data;
  var letters = [];
  var i; var
    len;
  var newLineFlag; var index = 0; var
    val;
  var anchorGrouping = data.m.g;
  var currentSize = 0; var currentPos = 0; var currentLine = 0; var
    lineWidths = [];
  var lineWidth = 0;
  var maxLineWidth = 0;
  var j; var
    jLen;
  var fontData = fontManager.getFontByName(documentData.f);
  var charData; var
    cLength = 0;

  var fontProps = getFontProperties(fontData);
  documentData.fWeight = fontProps.weight;
  documentData.fStyle = fontProps.style;
  documentData.finalSize = documentData.s;
  documentData.finalText = this.buildFinalText(documentData.t);
  len = documentData.finalText.length;
  documentData.finalLineHeight = documentData.lh;
  var trackingOffset = (documentData.tr / 1000) * documentData.finalSize;
  var charCode;
  if (documentData.sz) {
    var flag = true;
    var boxWidth = documentData.sz[0];
    var boxHeight = documentData.sz[1];
    var currentHeight; var
      finalText;
    while (flag) {
      finalText = this.buildFinalText(documentData.t);
      currentHeight = 0;
      lineWidth = 0;
      len = finalText.length;
      trackingOffset = (documentData.tr / 1000) * documentData.finalSize;
      var lastSpaceIndex = -1;
      for (i = 0; i < len; i += 1) {
        charCode = finalText[i].charCodeAt(0);
        newLineFlag = false;
        if (finalText[i] === ' ') {
          lastSpaceIndex = i;
        } else if (charCode === 13 || charCode === 3) {
          lineWidth = 0;
          newLineFlag = true;
          currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
        }
        if (fontManager.chars) {
          charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
          cLength = newLineFlag ? 0 : (charData.w * documentData.finalSize) / 100;
        } else {
          // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
          cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
        }
        if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
          if (lastSpaceIndex === -1) {
            len += 1;
          } else {
            i = lastSpaceIndex;
          }
          currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
          finalText.splice(i, lastSpaceIndex === i ? 1 : 0, '\r');
          // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
          lastSpaceIndex = -1;
          lineWidth = 0;
        } else {
          lineWidth += cLength;
          lineWidth += trackingOffset;
        }
      }
      currentHeight += (fontData.ascent * documentData.finalSize) / 100;
      if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
        documentData.finalSize -= 1;
        documentData.finalLineHeight = (documentData.finalSize * documentData.lh) / documentData.s;
      } else {
        documentData.finalText = finalText;
        len = documentData.finalText.length;
        flag = false;
      }
    }
  }
  lineWidth = -trackingOffset;
  cLength = 0;
  var uncollapsedSpaces = 0;
  var currentChar;
  for (i = 0; i < len; i += 1) {
    newLineFlag = false;
    currentChar = documentData.finalText[i];
    charCode = currentChar.charCodeAt(0);
    if (charCode === 13 || charCode === 3) {
      uncollapsedSpaces = 0;
      lineWidths.push(lineWidth);
      maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
      lineWidth = -2 * trackingOffset;
      val = '';
      newLineFlag = true;
      currentLine += 1;
    } else {
      val = currentChar;
    }
    if (fontManager.chars) {
      charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
      cLength = newLineFlag ? 0 : (charData.w * documentData.finalSize) / 100;
    } else {
      // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
      // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
      cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
    }

    //
    if (currentChar === ' ') {
      uncollapsedSpaces += cLength + trackingOffset;
    } else {
      lineWidth += cLength + trackingOffset + uncollapsedSpaces;
      uncollapsedSpaces = 0;
    }
    letters.push({
      l: cLength, an: cLength, add: currentSize, n: newLineFlag, anIndexes: [], val: val, line: currentLine, animatorJustifyOffset: 0,
    });
    if (anchorGrouping == 2) { // eslint-disable-line eqeqeq
      currentSize += cLength;
      if (val === '' || val === ' ' || i === len - 1) {
        if (val === '' || val === ' ') {
          currentSize -= cLength;
        }
        while (currentPos <= i) {
          letters[currentPos].an = currentSize;
          letters[currentPos].ind = index;
          letters[currentPos].extra = cLength;
          currentPos += 1;
        }
        index += 1;
        currentSize = 0;
      }
    } else if (anchorGrouping == 3) { // eslint-disable-line eqeqeq
      currentSize += cLength;
      if (val === '' || i === len - 1) {
        if (val === '') {
          currentSize -= cLength;
        }
        while (currentPos <= i) {
          letters[currentPos].an = currentSize;
          letters[currentPos].ind = index;
          letters[currentPos].extra = cLength;
          currentPos += 1;
        }
        currentSize = 0;
        index += 1;
      }
    } else {
      letters[index].ind = index;
      letters[index].extra = 0;
      index += 1;
    }
  }
  documentData.l = letters;
  maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
  lineWidths.push(lineWidth);
  if (documentData.sz) {
    documentData.boxWidth = documentData.sz[0];
    documentData.justifyOffset = 0;
  } else {
    documentData.boxWidth = maxLineWidth;
    switch (documentData.j) {
      case 1:
        documentData.justifyOffset = -documentData.boxWidth;
        break;
      case 2:
        documentData.justifyOffset = -documentData.boxWidth / 2;
        break;
      default:
        documentData.justifyOffset = 0;
    }
  }
  documentData.lineWidths = lineWidths;

  var animators = data.a; var animatorData; var
    letterData;
  jLen = animators.length;
  var based; var ind; var
    indexes = [];
  for (j = 0; j < jLen; j += 1) {
    animatorData = animators[j];
    if (animatorData.a.sc) {
      documentData.strokeColorAnim = true;
    }
    if (animatorData.a.sw) {
      documentData.strokeWidthAnim = true;
    }
    if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
      documentData.fillColorAnim = true;
    }
    ind = 0;
    based = animatorData.s.b;
    for (i = 0; i < len; i += 1) {
      letterData = letters[i];
      letterData.anIndexes[j] = ind;
      if ((based == 1 && letterData.val !== '') || (based == 2 && letterData.val !== '' && letterData.val !== ' ') || (based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1)) || (based == 4 && (letterData.n || i == len - 1))) { // eslint-disable-line eqeqeq
        if (animatorData.s.rn === 1) {
          indexes.push(ind);
        }
        ind += 1;
      }
    }
    data.a[j].s.totalChars = ind;
    var currentInd = -1; var
      newInd;
    if (animatorData.s.rn === 1) {
      for (i = 0; i < len; i += 1) {
        letterData = letters[i];
        if (currentInd != letterData.anIndexes[j]) { // eslint-disable-line eqeqeq
          currentInd = letterData.anIndexes[j];
          newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
        }
        letterData.anIndexes[j] = newInd;
      }
    }
  }
  documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
  documentData.ls = documentData.ls || 0;
  documentData.ascent = (fontData.ascent * documentData.finalSize) / 100;
};

TextProperty.prototype.updateDocumthis);
};

TextProperty.prototype.recaData);
};

TextProperty.prototype.canResthis);
};

TextProperty.prototype.setMinimumFthis);
};

/* global extendPrototype, BezierFactory, PropertyFactory, DynamicPropertyContainer */
/* exported TextSelectorProp */

var TextSelectorProp = (function () {
  var max = Math.max;
  var min = Math.min;
  var floor = Math.fl   }
  }

  TextSelectorPropFactory.prototype = {
    getMult: function (ind) {
      if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
        this.getValue();
      }
      // var easer = bez.getEasingCurve(this.ne.v/100,0,1-this.xe.v/100,1);
      var x1 = 0;
      var y1 = 0;
      var x2 = 1;
      var y2 = 1;
      if (this.ne.v > 0) {
        x1 = this.ne.v / 100.0;
      } else {
        y1 = -this.ne.v / 100.0;
      }
      if (this.xe.v > 0) {
        x2 = 1.0 - this.xe.v / 100.0;
      } else {
        y2 = 1.0 + this.xe.v / 100.0;
      }
      var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;

      var mult = 0;
      var s = this.finalS;
      var e = this.finalE;
      var type = this.data.sh;
      if (type === 2) {
        if (e === s) {
          mult = ind >= e ? 1 : 0;
        } else {
          mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
        }
        mult = easer(mult);
      } else if (type === 3) {
        if (e === s) {
          mult = ind >= e ? 0 : 1;
        } else {
          mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
        }

        mult = easer(mult);
      } else if (type === 4) {
        if (e === s) {
          mult = 0;
        } else {
          mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
          if (mult < 0.5) {
            mult *= 2;
          } else {
            mult = 1 - 2 * (mult - 0.5);
          }
        }
        mult = easer(mult);
      } else if (type === 5) {
        if (e === s) {
          mult = 0;
        } else {
          var tot = e - s;
          /* ind += 0.5;
                    mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */
          ind = min(max(0, ind + 0.5 - s), e - s);
          var x = -tot / 2 + ind;
          var a = tot / 2;
          mult = Math.sqrt(1 - (x * x) / (a * a));
        }
        mult = easer(mult);
      } else if (type === 6) {
        if (e === s) {
          mult = 0;
        } else {
          ind = min(max(0, ind + 0.5 - s), e - s);
          mult = (1 + (Math.cos((Math.PI + Math.PI * 2 * (ind) / (e - s))))) / 2; // eslint-disable-line
        }
        mult = easer(mult);
      } else {
        if (ind >= floor(s)) {
          if (ind - s < 0) {
            mult = max(0, min(min(e, 1) - (s - ind), 1));
          } else {
            mult = max(0, min(e - ind, 1));
          }
        }
        mult = easer(mult);
      }
      return mult * this.a.v;
    },
    e;
    },
  };
  extendPrototype([DynamicPropertyContainer], TextSelectorPropFactorr);
  }

  return {
    getTextSelectorProp: getTextSelectorProp,
  };
}());

/* global createSizedArray, pooling */
/* exported poolFactory */

var poolFactory = (function () {
  return function (initialLength, _create, _release) {
    var _length = 0;
    var _maxLength = initialLength;
    var pool = createSizedArray(_maxLength);

    var ob = {
      newElement: newElement,
      release: release,
    t;
    }

    function release(element) {
      if (_length === _maxLength) {
        pool = pooling.double(pool);
        _maxLength *= 2;
      }
      if (_release) {
        _release(element);
      }
      pool[_length] = element;
      _length += 1;
    }

    return ob;
  };
}());

/* global createSizedArray */
/* exported pooling */

var p
  };
}());

/* global createTypedArray, poolFactory */
/* exported pointPool */

var poieate);
}());

/* global ShapePath, pointPool, poolFactory */
/* exported shapePool */

var shapePool = (functioh();lse;ned;
  }

  var factory = poolFactory(4, create, release);
  factory.clone = clone;

  return factory;
}());

/* global createSizedArray, ShapeCollection, shapePool, pooling */
/* exported shapeCollectionPool */

var shapeCollectionPool = (function () {
  var ob = {
    newShapeCollection: newShapeCollection,
    release: release,
  };

  var _length = 0;
  var _maxLength = 4;
  var pool = createSizedArray(_maxLengion;
  }

  function release(shapeCollection) {
    var i;
    var len = shapeCollection._length;
    for (i = 0; i < len; i += 1) {
      shapePool.release(shapeCollection.shapes[i]);
    }
    shapeCollection._length = 0;

    if (_length === _maxLength) {
      pool = pooling.double(pool);
      _maxLength *= 2;
    }
    pool[_length] = shapeCollection;
    _length += 1;
  }

  return ob;
}());

/* global poolFactory, bezierLengthPool */
/* exported segmentsLengthPool */

var segmentsLengease);
}());

/* global createTypedArray, defaultCurveSegments, poolFactory */
/* exported bezierLengthPool */

var bezierLengeate);
}());

/* global AudioElement, FontManager */

function BaseRenderer() {}
BaseRenderer.prototype.checkLayers = function (num) {
  var i;
  var len = this.layers.length;
  var data;
  this.completeLayers = true;
  for (i = len - 1; i >= 0; i -= 1) {
    if (!this.elements[i]) {
      data = this.layers[i];
      if (data.ip - data.st <= (num - this.layers[i].st) && data.op - data.st > (num - this.layers[i].st)) {
        this.buildItem(i);
      }
    }
    this.completeLayers = this.elements[i] ? this.completeLayers : false;
  }
  this.checkPendingElements();
};

BaseRenderer.prototype.cre;
  }
};

BaseRenderer.prototype.creater.');
};

BaseRenderer.prototype.createAudio = function (data) {
  return new AudioElement(data, this.globalData, this);
};

BaseRenderer.prototype.buildAnts();
};

BaseRenderer.prototype.includ}
  }
};

BaseRenderer.prototype.setProjectInrface;
};

BaseRenderer.prototype.in;
  }
};
BaseRenderer.prototype.buildElementParenting = function (element, parentName, hierarchy) {
  var elements = this.elements;
  var layers = this.layers;
  var i = 0;
  var len = layers.length;
  while (i < len) {
    if (layers[i].ind == parentName) { // eslint-disable-line eqeqeq
      if (!elements[i] || elements[i] === true) {
        this.buildItem(i);
        this.addPendingElement(element);
      } else {
        hierarchy.push(elements[i]);
        elements[i].setAsParent();
        if (layers[i].parent !== undefined) {
          this.buildElementParenting(element, layers[i].parent, hierarchy);
        } else {
          element.setHierarchy(hierarchy);
        }
      }
    }
    i += 1;
  }
};

BaseRenderer.prototype.addPendingElement = function (element) {
  this.pendingElements.push(element);
};

BaseRenderer.prototype.searchExtraCompo}
  }
};

BaseRenderer.prototype.setupGlo
  };
};

/* global createElementID, extendPrototype, BaseRenderer, NullElement, SVGShapeElement, SVGTextLottieElement,
IImageElement, SVGCompElement, ISolidElement, createNS, locationHref, createSizedArray, expressionsPlugin */

function SVGRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.layers = null;
  this.renderedFrame = -1;
  this.svgElement = createNS('svg');
  var ariaLabel = '';
  if (config && config.title) {
    var titleElement = createNS('title');
    var titleId = createElementID();
    titleElement.setAttribute('id', titleId);
    titleElement.textContent = config.title;
    this.svgElement.appendChild(titleElement);
    ariaLabel += titleId;
  }
  if (config && config.description) {
    var descElement = createNS('desc');
    var descId = createElementID();
    descElement.setAttribute('id', descId);
    descElement.textContent = config.description;
    this.svgElement.appendChild(descElement);
    ariaLabel += ' ' + descId;
  }
  if (ariaLabel) {
    this.svgElement.setAttribute('aria-labelledby', ariaLabel);
  }
  var defs = createNS('defs');
  this.svgElement.appendChild(defs);
  var maskElement = createNS('g');
  this.svgElement.appendChild(maskElement);
  this.layerElement = maskElement;
  this.renderConfig = {
    preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    progressiveLoad: (config && config.progressiveLoad) || false,
    hideOnTransparent: !((config && config.hideOnTransparent === false)),
    viewBoxOnly: (config && config.viewBoxOnly) || false,
    viewBoxSize: (config && config.viewBoxSize) || false,
    className: (config && config.className) || '',
    id: (config && config.id) || '',
    focusable: config && config.focusable,
    filterSize: {
      width: (config && config.filterSize && config.filterSize.width) || '100%',
      height: (config && config.filterSize && config.filterSize.height) || '100%',
      x: (config && config.filterSize && config.filterSize.x) || '0%',
      y: (config && config.filterSize && config.filterSize.y) || '0%',
    },
  };

  this.globalData = {
    _mdf: false,
    frameNum: -1,
    defs: defs,
    renderConfig: this.renderConfig,
  };
  this.elements = [];
  this.pendingElements = [];
  this.destroyed = false;
  this.rendererType = 'svg';
}

extendPrototype([BaseRenderer], SVGRenderer);

SVGRenderer.prototype.createNull = function (data) {
  return new NullElement(data, this.globalData, this);
};

SVGRenderer.prototype.createShape = function (data) {
  return new SVGShapeElement(data, this.globalData, this);
};

SVGRenderer.prototype.createText = function (data) {
  return new SVGTextLottieElement(data, this.globalData, this);
};

SVGRenderer.prototype.createImage = function (data) {
  return new IImageElement(data, this.globalData, this);
};

SVGRenderer.prototype.createComp = function (data) {
  return new SVGCompElement(data, this.globalData, this);
};

SVGRenderer.prototype.createSolid = function (data) {
  return new ISolidElement(data, this.globalData, this);
};

SVGRenderer.prototype.configAnimation = function (animData) {
  this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  if (this.renderConfig.viewBoxSize) {
    this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize);
  } else {
    this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h);
  }

  if (!this.renderConfig.viewBoxOnly) {
    this.svgElement.setAttribute('width', animData.w);
    this.svgElement.setAttribute('height', animData.h);
    this.svgElement.style.width = '100%';
    this.svgElement.style.height = '100%';
    this.svgElement.style.transform = 'translate3d(0,0,0)';
  }
  if (this.renderConfig.className) {
    this.svgElement.setAttribute('class', this.renderConfig.className);
  }
  if (this.renderConfig.id) {
    this.svgElement.setAttribute('id', this.renderConfig.id);
  }
  if (this.renderConfig.focusable !== undefined) {
    this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
  }
  this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio);
  // this.layerElement.style.transform = 'translate3d(0,0,0)';
  // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
  this.animationItem.wrapper.appendChild(this.svgElement);
  // Mask animation
  var defs = this.globalData.defs;

  this.setupGlobalData(animData, defs);
  this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
  this.data = animData;

  var maskElement = createNS('clipPath');
  var rect = createNS('rect');
  rect.setAttribute('width', animData.w);
  rect.setAttribute('height', animData.h);
  rect.setAttribute('x', 0);
  rect.setAttribute('y', 0);
  var maskId = createElementID();
  maskElement.setAttribute('id', maskId);
  maskElement.appendChild(rect);
  this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + maskId + ')');

  defs.appendChild(maskElement);
  this.layers = animData.layers;
  this.elements = createSizedArray(animData.layers.length);
};

SVGRenderer.prototype.destroy = function () {
  if (this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  this.layerElement = null;
  this.globalData.defs = null;
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = 0; i < len; i += 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.elements.length = 0;
  this.destroyed = true;
  this.animationItem = null;
};

SVGRenderer.prototype.updateContainerSize = function () {
};

SVGRenderer.prototype.buildItem = function (pos) {
  var elements = this.elements;
  if (elements[pos] || this.layers[pos].ty === 99) {
    return;
  }
  elements[pos] = true;
  var element = this.createItem(this.layers[pos]);

  elements[pos] = element;
  if (expressionsPlugin) {
    if (this.layers[pos].ty === 0) {
      this.globalData.projectInterface.registerComposition(element);
    }
    element.initExpressions();
  }
  this.appendElementInPos(element, pos);
  if (this.layers[pos].tt) {
    if (!this.elements[pos - 1] || this.elements[pos - 1] === true) {
      this.buildItem(pos - 1);
      this.addPendingElement(element);
    } else {
      element.setMatte(elements[pos - 1].layerId);
    }
  }
};

SVGRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
    if (element.data.tt) {
      var i = 0;
      var len = this.elements.length;
      while (i < len) {
        if (this.elements[i] === element) {
          element.setMatte(this.elements[i - 1].layerId);
          break;
        }
        i += 1;
      }
    }
  }
};

SVGRenderer.prototype.renderFrame = function (num) {
  if (this.renderedFrame === num || this.destroyed) {
    return;
  }
  if (num === null) {
    num = this.renderedFrame;
  } else {
    this.renderedFrame = num;
  }
  // console.log('-------');
  // console.log('FRAME ',num);
  this.globalData.frameNum = num;
  this.globalData.frameId += 1;
  this.globalData.projectInterface.currentFrame = num;
  this.globalData._mdf = false;
  var i;
  var len = this.layers.length;
  if (!this.completeLayers) {
    this.checkLayers(num);
  }
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(num - this.layers[i].st);
    }
  }
  if (this.globalData._mdf) {
    for (i = 0; i < len; i += 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
  }
};

SVGRenderer.prototype.appendEleme;
  }
};

SVGRenderer.prototype.hide = function () {
  this.layerElement.style.display = 'none';
};

SVGRenderer.prototype.show = function () {
  this.layerElement.style.display = 'block';
};

/* global CVContextData, Matrix, extendPrototype, BaseRenderer, CVShapeElement, CVTextElement,
CVImageElement, CVCompElement, CVSolidElement, SVGRenderer, createTag, createSizedArray */

function CanvasRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.renderConfig = {
    clearCanvas: (config && config.clearCanvas !== undefined) ? config.clearCanvas : true,
    context: (config && config.context) || null,
    progressiveLoad: (config && config.progressiveLoad) || false,
    preserveAspectRatio: (config && config.preserveAspectRatio) || 'xMidYMid meet',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    className: (config && config.className) || '',
    id: (config && config.id) || '',
  };
  this.renderConfig.dpr = (config && config.dpr) || 1;
  if (this.animationItem.wrapper) {
    this.renderConfig.dpr = (config && config.dpr) || window.devicePixelRatio || 1;
  }
  this.renderedFrame = -1;
  this.globalData = {
    frameNum: -1,
    _mdf: false,
    renderConfig: this.renderConfig,
    currentGlobalAlpha: -1,
  };
  this.contextData = new CVContextData();
  this.elements = [];
  this.pendingElements = [];
  this.transformMat = new Matrix();
  this.completeLayers = false;
  this.rendererType = 'canvas';
}
extendPrototype([BaseRenderer], CanvasRenderer);

CanvasRenderer.prototype.createShape = function (data) {
  return new CVShapeElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createText = function (data) {
  return new CVTextElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createImage = function (data) {
  return new CVImageElement(data, this.globalData, this);
};

CanvasRenderer.prototype.createComp = function (data) {
  return new CVCompElement(data, this.globalData, this);
};

CanvasRenderer.prototype.creathis);
};

CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

CanvasRenderer.prototype.ctxTr[13]);
};

CanvasRenderer.prototype.ctx;
  }
};

CanvasRenderer.prototypset();
};

CanvasRenderer.prototype.save = function (actionFlag) {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.save();
    return;
  }
  if (actionFlag) {
    this.canvasContext.save();
  }
  var props = this.contextData.cTr.props;
  if (this.contextData._length <= this.contextData.cArrPos) {
    this.contextData.duplicate();
  }
  var i;
  var arr = this.contextData.saved[this.contextData.cArrPos];
  for (i = 0; i < 16; i += 1) {
    arr[i] = props[i];
  }
  this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO;
  this.contextData.cArrPos += 1;
};

CanvasRenderer.prototype.restore = function (actionFlag) {
  if (!this.renderConfig.clearCanvas) {
    this.canvasContext.restore();
    return;
  }
  if (actionFlag) {
    this.canvasContext.restore();
    this.globalData.blendMode = 'source-over';
  }
  this.contextData.cArrPos -= 1;
  var popped = this.contextData.saved[this.contextData.cArrPos];
  var i;
  var arr = this.contextData.cTr.props;
  for (i = 0; i < 16; i += 1) {
    arr[i] = popped[i];
  }
  this.canvasContext.setTransform(popped[0], popped[1], popped[4], popped[5], popped[12], popped[13]);
  popped = this.contextData.savedOp[this.contextData.cArrPos];
  this.contextData.cO = popped;
  if (this.globalData.currentGlobalAlpha !== popped) {
    this.canvasContext.globalAlpha = popped;
    this.globalData.currentGlobalAlpha = popped;
  }
};

CanvasRenderer.prototype.configAnimation = function (animData) {
  if (this.animationItem.wrapper) {
    this.animationItem.container = createTag('canvas');
    var containerStyle = this.animationItem.container.style;
    containerStyle.width = '100%';
    containerStyle.height = '100%';
    var origin = '0px 0px 0px';
    containerStyle.transformOrigin = origin;
    containerStyle.mozTransformOrigin = origin;
    containerStyle.webkitTransformOrigin = origin;
    containerStyle['-webkit-transform'] = origin;
    this.animationItem.wrapper.appendChild(this.animationItem.container);
    this.canvasContext = this.animationItem.container.getContext('2d');
    if (this.renderConfig.className) {
      this.animationItem.container.setAttribute('class', this.renderConfig.className);
    }
    if (this.renderConfig.id) {
      this.animationItem.container.setAttribute('id', this.renderConfig.id);
    }
  } else {
    this.canvasContext = this.renderConfig.context;
  }
  this.data = animData;
  this.layers = animData.layers;
  this.transformCanvas = {
    w: animData.w,
    h: animData.h,
    sx: 0,
    sy: 0,
    tx: 0,
    ty: 0,
  };
  this.setupGlobalData(animData, document.body);
  this.globalData.canvasContext = this.canvasContext;
  this.globalData.renderer = this;
  this.globalData.isDashed = false;
  this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
  this.globalData.transformCanvas = this.transformCanvas;
  this.elements = createSizedArray(animData.layers.length);

  this.updateContainerSize();
};

CanvasRenderer.prototype.updateContainerSize = function () {
  this.reset();
  var elementWidth;
  var elementHeight;
  if (this.animationItem.wrapper && this.animationItem.container) {
    elementWidth = this.animationItem.wrapper.offsetWidth;
    elementHeight = this.animationItem.wrapper.offsetHeight;
    this.animationItem.container.setAttribute('width', elementWidth * this.renderConfig.dpr);
    this.animationItem.container.setAttribute('height', elementHeight * this.renderConfig.dpr);
  } else {
    elementWidth = this.canvasContext.canvas.width * this.renderConfig.dpr;
    elementHeight = this.canvasContext.canvas.height * this.renderConfig.dpr;
  }
  var elementRel;
  var animationRel;
  if (this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1) {
    var par = this.renderConfig.preserveAspectRatio.split(' ');
    var fillType = par[1] || 'meet';
    var pos = par[0] || 'xMidYMid';
    var xPos = pos.substr(0, 4);
    var yPos = pos.substr(4);
    elementRel = elementWidth / elementHeight;
    animationRel = this.transformCanvas.w / this.transformCanvas.h;
    if ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice')) {
      this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
      this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
    } else {
      this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
      this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
    }

    if (xPos === 'xMid' && ((animationRel < elementRel && fillType === 'meet') || (animationRel > elementRel && fillType === 'slice'))) {
      this.transformCanvas.tx = ((elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2) * this.renderConfig.dpr;
    } else if (xPos === 'xMax' && ((animationRel < elementRel && fillType === 'meet') || (animationRel > elementRel && fillType === 'slice'))) {
      this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
    } else {
      this.transformCanvas.tx = 0;
    }
    if (yPos === 'YMid' && ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice'))) {
      this.transformCanvas.ty = ((elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2) * this.renderConfig.dpr;
    } else if (yPos === 'YMax' && ((animationRel > elementRel && fillType === 'meet') || (animationRel < elementRel && fillType === 'slice'))) {
      this.transformCanvas.ty = ((elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w))) * this.renderConfig.dpr;
    } else {
      this.transformCanvas.ty = 0;
    }
  } else if (this.renderConfig.preserveAspectRatio === 'none') {
    this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
    this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
    this.transformCanvas.tx = 0;
    this.transformCanvas.ty = 0;
  } else {
    this.transformCanvas.sx = this.renderConfig.dpr;
    this.transformCanvas.sy = this.renderConfig.dpr;
    this.transformCanvas.tx = 0;
    this.transformCanvas.ty = 0;
  }
  this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
  /* var i, len = this.elements.length;
    for(i=0;i<len;i+=1){
        if(this.elements[i] && this.elements[i].data.ty === 0){
            this.elements[i].resize(this.globalData.transformCanvas);
        }
    } */
  this.ctxTransform(this.transformCanvas.props);
  this.canvasContext.beginPath();
  this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
  this.canvasContext.closePath();
  this.canvasContext.clip();

  this.renderFrame(this.renderedFrame, true);
};

CanvasRenderer.prototype.destroy = function () {
  if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.elements[i]) {
      this.elements[i].destroy();
    }
  }
  this.elements.length = 0;
  this.globalData.canvasContext = null;
  this.animationItem.container = null;
  this.destroyed = true;
};

CanvasRenderer.prototype.renderFrame = function (num, forceRender) {
  if ((this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender) || this.destroyed || num === -1) {
    return;
  }
  this.renderedFrame = num;
  this.globalData.frameNum = num - this.animationItem._isFirstFrame;
  this.globalData.frameId += 1;
  this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
  this.globalData.projectInterface.currentFrame = num;

  // console.log('--------');
  // console.log('NEW: ',num);
  var i;
  var len = this.layers.length;
  if (!this.completeLayers) {
    this.checkLayers(num);
  }

  for (i = 0; i < len; i += 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(num - this.layers[i].st);
    }
  }
  if (this.globalData._mdf) {
    if (this.renderConfig.clearCanvas === true) {
      this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
    } else {
      this.save();
    }
    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
    if (this.renderConfig.clearCanvas !== true) {
      this.restore();
    }
  }
};

CanvasRenderer.prototype.bu  } */
};

CanvasRenderer.prototype.checkPendingElements = function () {
  while (this.pendingElements.length) {
    var element = this.pendingElements.pop();
    element.checkParenting();
  }
};

CanvasRenderer.prototype.hide = function () {
  this.animationItem.container.style.display = 'none';
};

CanvasRenderer.prototylock';
};

/* global extendPrototype, BaseRenderer, SVGRenderer, SVGShapeElement, HShapeElement, SVGTextLottieElement,
HTextElement, HCameraElement, IImageElement, HImageElement, SVGCompElement, HCompElement, ISolidElement,
HSolidElement, styleDiv, createTag, createNS */

function HybridRenderer(animationItem, config) {
  this.animationItem = animationItem;
  this.layers = null;
  this.renderedFrame = -1;
  this.renderConfig = {
    className: (config && config.className) || '',
    imagePreserveAspectRatio: (config && config.imagePreserveAspectRatio) || 'xMidYMid slice',
    hideOnTransparent: !(config && config.hideOnTransparent === false),
    filterSize: {
      width: (config && config.filterSize && config.filterSize.width) || '400%',
      height: (config && config.filterSize && config.filterSize.height) || '400%',
      x: (config && config.filterSize && config.filterSize.x) || '-100%',
      y: (config && config.filterSize && config.filterSize.y) || '-100%',
    },
  };
  this.globalData = {
    _mdf: false,
    frameNum: -1,
    renderConfig: this.renderConfig,
  };
  this.pendingElements = [];
  this.elements = [];
  this.threeDElements = [];
  this.destroyed = false;
  this.camera = null;
  this.supports3d = true;
  this.rendererType = 'html';
}

extendPrototype([BaseRenderer], HybridRenderer);

HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem;

HybridRenderer.prototype.checkPendingE;
  }
};

HybridRenderer.prototype.appendElementInPos = function (element, pos) {
  var newDOMElement = element.getBaseElement();
  if (!newDOMElement) {
    return;
  }
  var layer = this.layers[pos];
  if (!layer.ddd || !this.supports3d) {
    if (this.threeDElements) {
      this.addTo3dContainer(newDOMElement, pos);
    } else {
      var i = 0;
      var nextDOMElement;
      var nextLayer;
      var tmpDOMElement;
      while (i < pos) {
        if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
          nextLayer = this.elements[i];
          tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
          nextDOMElement = tmpDOMElement || nextDOMElement;
        }
        i += 1;
      }
      if (nextDOMElement) {
        if (!layer.ddd || !this.supports3d) {
          this.layerElement.insertBefore(newDOMElement, nextDOMElement);
        }
      } else if (!layer.ddd || !this.supports3d) {
        this.layerElement.appendChild(newDOMElement);
      }
    }
  } else {
    this.addTo3dContainer(newDOMElement, pos);
  }
};

HybridRenderer.prototype.createShape = function (data) {
  if (!this.supports3d) {
    return new SVGShapeElement(data, this.globalData, this);
  }
  return new HShapeElement(data, this.globalData, this);
};

HybridRenderer.prototype.createText = function (data) {
  if (!this.supports3d) {
    return new SVGTextLottieElement(data, this.globalData, this);
  }
  return new HTextElement(data, this.globalData, this);
};

HybridRenderer.prototype.creatamera;
};

HybridRenderer.prototype.createImage = function (data) {
  if (!this.supports3d) {
    return new IImageElement(data, this.globalData, this);
  }
  return new HImageElement(data, this.globalData, this);
};

HybridRenderer.prototype.createComp = function (data) {
  if (!this.supports3d) {
    return new SVGCompElement(data, this.globalData, this);
  }
  return new HCompElement(data, this.globalData, this);
};

HybridRenderer.prototype.creathis);
};

HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull;

HybridRenderer.prototype.getThreeDContain null;
};

HybridRenderer.prototype.createThreeDCorData;
};

HybridRenderer.prototype.build3dCon;
  }
};

HybridRenderer.prototype.addTo3dCo;
  }
};

HybridRenderer.prototype.configAnize();
};

HybridRenderer.prototype.destroy = function () {
  if (this.animationItem.wrapper) {
    this.animationItem.wrapper.innerText = '';
  }
  this.animationItem.container = null;
  this.globalData.defs = null;
  var i;
  var len = this.layers ? this.layers.length : 0;
  for (i = 0; i < len; i += 1) {
    this.elements[i].destroy();
  }
  this.elements.length = 0;
  this.destroyed = true;
  this.animationItem = null;
};

HybridRenderer.prototype.updateContaisform;
};

HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

HybridRenderer.prototype.hide = function () {
  this.resizerElem.style.display = 'none';
};

HybridRenderer.prototylock';
};

HybridRenderer.prototype.in}
  }
};

HybridRenderer.prototype.searchExtraCompo}
  }
};

/* global createSizedArray, createElementID, PropertyFactory, ShapePropertyFactory, createNS, locationHref */

function MaskElement(data, element, globalData) {
  this.data = data;
  this.element = element;
  this.globalData = globalData;
  this.storedData = [];
  this.masksProperties = this.data.masksProperties || [];
  this.maskElement = null;
  var defs = this.globalData.defs;
  var i;
  var len = this.masksProperties ? this.masksProperties.length : 0;
  this.viewData = createSizedArray(len);
  this.solidPath = '';

  var path;
  var properties = this.masksProperties;
  var count = 0;
  var currentMasks = [];
  var j;
  var jLen;
  var layerId = createElementID();
  var rect;
  var expansor;
  var feMorph;
  var x;
  var maskType = 'clipPath';
  var maskRef = 'clip-path';
  for (i = 0; i < len; i += 1) {
    if ((properties[i].mode !== 'a' && properties[i].mode !== 'n') || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
      maskType = 'mask';
      maskRef = 'mask';
    }

    if ((properties[i].mode === 's' || properties[i].mode === 'i') && count === 0) {
      rect = createNS('rect');
      rect.setAttribute('fill', '#ffffff');
      rect.setAttribute('width', this.element.comp.data.w || 0);
      rect.setAttribute('height', this.element.comp.data.h || 0);
      currentMasks.push(rect);
    } else {
      rect = null;
    }

    path = createNS('path');
    if (properties[i].mode === 'n') {
      // TODO move this to a factory or to a constructor
      this.viewData[i] = {
        op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
        prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
        elem: path,
        lastPath: '',
      };
      defs.appendChild(path);
    } else {
      count += 1;

      path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
      path.setAttribute('clip-rule', 'nonzero');
      var filterID;

      if (properties[i].x.k !== 0) {
        maskType = 'mask';
        maskRef = 'mask';
        x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
        filterID = createElementID();
        expansor = createNS('filter');
        expansor.setAttribute('id', filterID);
        feMorph = createNS('feMorphology');
        feMorph.setAttribute('operator', 'erode');
        feMorph.setAttribute('in', 'SourceGraphic');
        feMorph.setAttribute('radius', '0');
        expansor.appendChild(feMorph);
        defs.appendChild(expansor);
        path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff');
      } else {
        feMorph = null;
        x = null;
      }

      // TODO move this to a factory or to a constructor
      this.storedData[i] = {
        elem: path,
        x: x,
        expan: feMorph,
        lastPath: '',
        lastOperator: '',
        filterId: filterID,
        lastRadius: 0,
      };
      if (properties[i].mode === 'i') {
        jLen = currentMasks.length;
        var g = createNS('g');
        for (j = 0; j < jLen; j += 1) {
          g.appendChild(currentMasks[j]);
        }
        var mask = createNS('mask');
        mask.setAttribute('mask-type', 'alpha');
        mask.setAttribute('id', layerId + '_' + count);
        mask.appendChild(path);
        defs.appendChild(mask);
        g.setAttribute('mask', 'url(' + locationHref + '#' + layerId + '_' + count + ')');

        currentMasks.length = 0;
        currentMasks.push(g);
      } else {
        currentMasks.push(path);
      }
      if (properties[i].inv && !this.solidPath) {
        this.solidPath = this.createLayerSolidPath();
      }
      // TODO move this to a factory or to a constructor
      this.viewData[i] = {
        elem: path,
        lastPath: '',
        op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
        prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
        invRect: rect,
      };
      if (!this.viewData[i].prop.k) {
        this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
      }
    }
  }

  this.maskElement = createNS(maskType);

  len = currentMasks.length;
  for (i = 0; i < len; i += 1) {
    this.maskElement.appendChild(currentMasks[i]);
  }

  if (count > 0) {
    this.maskElement.setAttribute('id', layerId);
    this.element.maskedElement.setAttribute(maskRef, 'url(' + locationHref + '#' + layerId + ')');
    defs.appendChild(this.maskElement);
  }
  if (this.viewData.length) {
    this.element.addRenderableComponent(this);
  }
}

MaskElement.prototype.getMaskP.prop;
};

MaskElement.prototype.renderFrame = function (isFirstFrame) {
  var finalMat = this.element.finalTransform.mat;
  var i;
  var len = this.masksProperties.length;
  for (i = 0; i < len; i += 1) {
    if (this.viewData[i].prop._mdf || isFirstFrame) {
      this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
    }
    if (this.viewData[i].op._mdf || isFirstFrame) {
      this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v);
    }
    if (this.masksProperties[i].mode !== 'n') {
      if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
        this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS());
      }
      if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
        var feMorph = this.storedData[i].expan;
        if (this.storedData[i].x.v < 0) {
          if (this.storedData[i].lastOperator !== 'erode') {
            this.storedData[i].lastOperator = 'erode';
            this.storedData[i].elem.setAttribute('filter', 'url(' + locationHref + '#' + this.storedData[i].filterId + ')');
          }
          feMorph.setAttribute('radius', -this.storedData[i].x.v);
        } else {
          if (this.storedData[i].lastOperator !== 'dilate') {
            this.storedData[i].lastOperator = 'dilate';
            this.storedData[i].elem.setAttribute('filter', null);
          }
          this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2);
        }
      }
    }
  }
};

MaskElement.prototype.getMaskelement = function () {
  return this.maskElement;
};

MaskElement.prototype.createLayerSo path;
};

MaskElement.prototype.d;
  }
};

MaskElement.prototype. null;
};

/**
 * @file
 * Handles AE's layer parenting property.
 *
 */

function HierarchyElement() {}

HierarchyElement.prototype = {
  /**
     * @function
     * Initializes hierarchy properties
     *
     */
  initHg();
  },
  /**
     * @function
     * Sets layer's hierarchy.
     * @param {array} hierarch
     * layer's parent list
     *
     */
  setHierarchy: function (hierarchy) {
    this.hierarchy = hierarchy;
  },
  /**
     * @function
     * Sets layer as parent.
     *
     */
  setAsParent: function () {
    this._isParent = true;
  },
  /**
     * @function
     * Searches layer's parenting chain
     *
     */
  checkP   }
  },
};

/**
 * @file
 * Handles element's layer frame update.
 * Checks layer in point and out point
 *
 */

function FrameElement() {}

FrameElement.prototype = {
  /**
     * @function
     * Initializes frame related properties.
     *
     */
  ilse;
  },
  /**
     * @function
     * Calculates all dynamic values
     *
     * @param {number} num
     * current frame number in Layer's time
     * @param {boolean} isVisible
     * if layers is currently in range
     *
     */
  prepareProperties: function (num, isVisible) {
    var i;
    var len = this.dynamicProperties.length;
    for (i = 0; i < len; i += 1) {
      if (isVisible || (this._isParent && this.dynamicProperties[i].propType === 'transform')) {
        this.dynamicProperties[i].getValue();
        if (this.dynamicProperties[i]._mdf) {
          this.globalData._mdf = true;
          this._mdf = true;
        }
      }
    }
  },
  addDynamicProperty: function (prop) {
    if (this.dynamicProperties.indexOf(prop) === -1) {
      this.dynamicProperties.push(prop);
    }
  },
};

/* global TransformPropertyFactory, Matrix */

function TransformElement() {}

TransformElement.prototype = {
  initT   }
  },
  renderTransform: function () {
    this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
    this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

    if (this.hierarchy) {
      var mat;
      var finalMat = this.finalTransform.mat;
      var i = 0;
      var len = this.hierarchy.length;
      // Checking if any of the transformation matrices in the hierarchy chain has changed.
      if (!this.finalTransform._matMdf) {
        while (i < len) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          i += 1;
        }
      }

      if (this.finalTransform._matMdf) {
        mat = this.finalTransform.mProp.v.props;
        finalMat.cloneFromProps(mat);
        for (i = 0; i < len; i += 1) {
          mat = this.hierarchy[i].finalTransform.mProp.v.props;
          finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]);
        }
      }
    }
  },
  globalToLocal: function (pt) {
    var transforms = [];
    transforms.push(this.finalTransform);
    var flag = true;
    var comp = this.comp;
    while (flag) {
      if (comp.finalTransform) {
        if (comp.data.hasMask) {
          transforms.splice(0, 0, comp.finalTransform);
        }
        comp = comp.comp;
      } else {
        flag = false;
      }
    }
    var i;
    var len = transforms.length;
    var ptNew;
    for (i = 0; i < len; i += 1) {
      ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
      // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
      pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
    }
    return pt;
  },
  mHelper: new Matrix(),
};

function RenderableElement() {

}

RenderableElement.prototype = {
  initRe [];
  },
  addRenderableC   }
  },
  removeRenderableC   }
  },
  prepareRenderaum);
  },
  checkTran   }
  },
  /**
     * @function
     * Initializes frame related properties.
     *
     * @param {number} num
     * current frame number in Layer's time
     *
     */
  checkLayerLimits: function (num) {
    if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
      if (this.isInRange !== true) {
        this.globalData._mdf = true;
        this._mdf = true;
        this.isInRange = true;
        this.show();
      }
    } else if (this.isInRange !== false) {
      this.globalData._mdf = true;
      this.isInRange = false;
      this.hide();
    }
  },
  renderRenderable: function () {
    var i;
    var len = this.renderableComponents.length;
    for (i = 0; i < len; i += 1) {
      this.renderableComponents[i].renderFrame(this._isFirstFrame);
    }
    /* this.maskManager.renderFrame(this.finalTransform.mat);
        this.renderableEffectsManager.renderFrame(this._isFirstFrame); */
  },
  sourceRe  };
  },
  getLayerSize: function () {
    if (this.data.ty === 5) {
      return { w: this.data.textData.width, h: this.data.textData.height };
    }
    return { w: this.data.width, h: this.data.height };
  },
};

/* global extendPrototype, RenderableElement, createProxyFunction */

function RenderableDOMElementment);
}());

/* exported ProcessedElemition;
}

/* global creat null;
}

SVGStyleData.prototypfals;
  }
}

SVGShapeData.prototype.setAsAnimated = function () {
  this._isAnimated = true;
};

/* exported SVGTransformDength;
}

/* global DashProperty, PropertyFactory, extendPrototype, DynamicPropertyContaimated;
}

extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

/* global PropertyFactory, extendPrototype, DynamicPropertyContaiyleOb;
}

extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

/* global PropertyFactory, degToRads, GradientProperty, createElementID, createNS, locationHref,
extendPrototype, DynamicPropertyContaileOb);
}

SVGGradientFillStyleData.prototype.initGradimated;
};

SVGGradientFillStyleData.prototype.setGradientData = function (pathElement, data) {
  var gradientId = createElementID();
  var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
  gfill.setAttribute('id', gradientId);
  gfill.setAttribute('spreadMethod', 'pad');
  gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
  var stops = [];
  var stop;
  var j;
  var jLen;
  jLen = data.g.p * 4;
  for (j = 0; j < jLen; j += 4) {
    stop = createNS('stop');
    gfill.appendChild(stop);
    stops.push(stop);
  }
  pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + gradientId + ')');

  this.gf = gfill;
  this.cst = stops;
};

SVGGradientFillStyleData.prototype.setGradientOpacity = function (data, styleOb) {
  if (this.g._hasOpacity && !this.g._collapsable) {
    var stop;
    var j;
    var jLen;
    var mask = createNS('mask');
    var maskElement = createNS('path');
    mask.appendChild(maskElement);
    var opacityId = createElementID();
    var maskId = createElementID();
    mask.setAttribute('id', maskId);
    var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
    opFill.setAttribute('id', opacityId);
    opFill.setAttribute('spreadMethod', 'pad');
    opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
    jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
    var stops = this.stops;
    for (j = data.g.p * 4; j < jLen; j += 2) {
      stop = createNS('stop');
      stop.setAttribute('stop-color', 'rgb(255,255,255)');
      opFill.appendChild(stop);
      stops.push(stop);
    }
    maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + locationHref + '#' + opacityId + ')');
    this.of = opFill;
    this.ms = mask;
    this.ost = stops;
    this.maskId = maskId;
    styleOb.msElem = maskElement;
  }
};

extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

/* global PropertyFactory, DashProperty, extendPrototype, SVGGradientFillStyleData, DynamicPropertyContaimated;
}

extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

/* global createNS */
/* exported ShapeGroupD('g');
}

/* global Matrix, buildShapeString, bmFloor */
/* exported SVGElementsRenderer */

var SVGElementsRenderer = (function () {
  var _identityMatrix = new Matrix();
  var _matrixHelper = new Matrix();

  var ob = {
    createRenderFunction: createRenderFunction,
   }   }
  }

  function renderPath(styleData, itemData, isFirstFrame) {
    var j;
    var jLen;
    var pathStringTransformed;
    var redraw;
    var pathNodes;
    var l;
    var lLen = itemData.styles.length;
    var lvl = itemData.lvl;
    var paths;
    var mat;
    var props;
    var iterations;
    var k;
    for (l = 0; l < lLen; l += 1) {
      redraw = itemData.sh._mdf || isFirstFrame;
      if (itemData.styles[l].lvl < lvl) {
        mat = _matrixHelper.reset();
        iterations = lvl - itemData.styles[l].lvl;
        k = itemData.transformers.length - 1;
        while (!redraw && iterations > 0) {
          redraw = itemData.transformers[k].mProps._mdf || redraw;
          iterations -= 1;
          k -= 1;
        }
        if (redraw) {
          iterations = lvl - itemData.styles[l].lvl;
          k = itemData.transformers.length - 1;
          while (iterations > 0) {
            props = itemData.transformers[k].mProps.v.props;
            mat.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
            iterations -= 1;
            k -= 1;
          }
        }
      } else {
        mat = _identityMatrix;
      }
      paths = itemData.sh.paths;
      jLen = paths._length;
      if (redraw) {
        pathStringTransformed = '';
        for (j = 0; j < jLen; j += 1) {
          pathNodes = paths.shapes[j];
          if (pathNodes && pathNodes._length) {
            pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
          }
        }
        itemData.caches[l] = pathStringTransformed;
      } else {
        pathStringTransformed = itemData.caches[l];
      }
      itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
      itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
    }   }me);
  }

  function renderGradient(styleData, itemData, isFirstFrame) {
    var gfill = itemData.gf;
    var hasOpacity = itemData.g._hasOpacity;
    var pt1 = itemData.s.v;
    var pt2 = itemData.e.v;

    if (itemData.o._mdf || isFirstFrame) {
      var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
      itemData.style.pElem.setAttribute(attr, itemData.o.v);
    }
    if (itemData.s._mdf || isFirstFrame) {
      var attr1 = styleData.t === 1 ? 'x1' : 'cx';
      var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
      gfill.setAttribute(attr1, pt1[0]);
      gfill.setAttribute(attr2, pt1[1]);
      if (hasOpacity && !itemData.g._collapsable) {
        itemData.of.setAttribute(attr1, pt1[0]);
        itemData.of.setAttribute(attr2, pt1[1]);
      }
    }
    var stops;
    var i;
    var len;
    var stop;
    if (itemData.g._cmdf || isFirstFrame) {
      stops = itemData.cst;
      var cValues = itemData.g.c;
      len = stops.length;
      for (i = 0; i < len; i += 1) {
        stop = stops[i];
        stop.setAttribute('offset', cValues[i * 4] + '%');
        stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')');
      }
    }
    if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
      var oValues = itemData.g.o;
      if (itemData.g._collapsable) {
        stops = itemData.cst;
      } else {
        stops = itemData.ost;
      }
      len = stops.length;
      for (i = 0; i < len; i += 1) {
        stop = stops[i];
        if (!itemData.g._collapsable) {
          stop.setAttribute('offset', oValues[i * 2] + '%');
        }
        stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
      }
    }
    if (styleData.t === 1) {
      if (itemData.e._mdf || isFirstFrame) {
        gfill.setAttribute('x2', pt2[0]);
        gfill.setAttribute('y2', pt2[1]);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('x2', pt2[0]);
          itemData.of.setAttribute('y2', pt2[1]);
        }
      }
    } else {
      var rad;
      if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
        rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        gfill.setAttribute('r', rad);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('r', rad);
        }
      }
      if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
        if (!rad) {
          rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        }
        var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

        var percent = itemData.h.v;
        if (percent >= 1) {
          percent = 0.99;
        } else if (percent <= -1) {
          percent = -0.99;
        }
        var dist = rad * percent;
        var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
        var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
        gfill.setAttribute('fx', x);
        gfill.setAttribute('fy', y);
        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute('fx', x);
          itemData.of.setAttribute('fy', y);
        }
      }
      // gfill.setAttribute('fy','200');
    }   }
  }

  return ob;
}());

/* global Matt = 0;
}

ShapeTransformManager.prototype = {
  addTransformSequence: function (transforms) {
    var i;
    var len = transforms.length;
    var key = '_';
    for (i = 0; i < len; i += 1) {
      key += transforms[i].transform.key + '_';
    }
    var sequence = this.sequences[key];
    if (!sequence) {
      sequence = {
        transforms: [].concat(transforms),
        finalTransform: new Matrix(),
        _mdf: false,
      };
      this.sequences[key] = sequence;
      this.sequenceList.push(sequence);
    }
    return sequence;
  },
  processSequence: function (sequence, isFirstFrame) {
    var i = 0;
    var len = sequence.transforms.length;
    var _mdf = isFirstFrame;
    while (i < len && !isFirstFrame) {
      if (sequence.transforms[i].transform.mProps._mdf) {
        _mdf = true;
        break;
      }
      i += 1;
    }
    if (_mdf) {
      var props;
      sequence.finalTransform.reset();
      for (i = len - 1; i >= 0; i -= 1) {
        props = sequence.transforms[i].transform.mProps.v.props;
        sequence.finalTransform.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
      }
    }
    sequence._mdf = _mdf;
  },
  processSequences: function (isFirstFrame) {
    var i;
    var len = this.sequenceList.length;
    for (i = 0; i < len; i += 1) {
      this.processSequence(this.sequenceList[i], isFirstFrame);
    }
  },
  gunt;
  },
};

/* global ShapePropertyFactory, SVGShapeData */

function CVShapeData(element, data, styles, transformsManager) {
  this.styledShapes = [];
  this.tr = [0, 0, 0, 0, 0, 0];
  var ty = 4;
  if (data.ty === 'rc') {
    ty = 5;
  } else if (data.ty === 'el') {
    ty = 6;
  } else if (data.ty === 'sr') {
    ty = 7;
  }
  this.sh = ShapePropertyFactory.getShapeProp(element, data, ty, element);
  var i;
  var len = styles.length;
  var styledShape;
  for (i = 0; i < len; i += 1) {
    if (!styles[i].closed) {
      styledShape = {
        transforms: transformsManager.addTransformSequence(styles[i].transforms),
        trNodes: [],
      };
      this.styledShapes.push(styledShape);
      styles[i].elements.push(styledShape);
    }
  }
}

CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

/* global LayerExpressionInterface, EffectsExpressionInterface, CompExpressionInterface, ShapeExpressionInterface,
TextExpressionInterface, getBlendMode,createElementID, EffectsManager */

function BaseElement() {
}

BaseElement.prototype = {
  checkMasks: function () {
    if (!this.data.hasMask) {
      return false;
    }
    var i = 0;
    var len = this.data.masksProperties.length;
    while (i < len) {
      if ((this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false)) {
        return true;
      }
      i += 1;
    }
    return false;
  },
  initExp   }
  },
  setBlue;
  },
  inites);
  },
  getType: function () {
    return this.type;
  },
  sourceRectAtTime: function () {},
};

/* global extendPrototype, BaseElement, TransformElement, HierarchyElement, FrameElemchy();
}

NullElement.prototype.prepatrue);
};

NullElement.prototype.renderFrame = function () {
};

NullElement.prototype.getBaseElement = function () {
  return null;
};

NullElement.prototype.destroy = function () {
};

NullElement.prototype.sourceRectAtTime = function () {
};

NullElement.prototype.hide = function () {
};

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

/* global filtersFactory, featureSupport, filtersFactory, createElementID, createNS, MaskElement, SVGEffects, locationHref */

function SVGBaseElement() {
}

SVGBaseElement.prototype = {
  initRendereg');
  },
  createContainerElements: function () {
    this.matteElement = createNS('g');
    this.transformedElement = this.layerElement;
    this.maskedElement = this.layerElement;
    this._sizeChanged = false;
    var layerElementParent = null;
    // If this layer acts as a mask for the following layer
    var filId;
    var fil;
    var gg;
    if (this.data.td) {
      if (this.data.td == 3 || this.data.td == 1) { // eslint-disable-line eqeqeq
        var masker = createNS('mask');
        masker.setAttribute('id', this.layerId);
        masker.setAttribute('mask-type', this.data.td == 3 ? 'luminance' : 'alpha'); // eslint-disable-line eqeqeq
        masker.appendChild(this.layerElement);
        layerElementParent = masker;
        this.globalData.defs.appendChild(masker);
        // This is only for IE and Edge when mask if of type alpha
        if (!featureSupport.maskType && this.data.td == 1) { // eslint-disable-line eqeqeq
          masker.setAttribute('mask-type', 'luminance');
          filId = createElementID();
          fil = filtersFactory.createFilter(filId);
          this.globalData.defs.appendChild(fil);
          fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
          gg = createNS('g');
          gg.appendChild(this.layerElement);
          layerElementParent = gg;
          masker.appendChild(gg);
          gg.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
        }
      } else if (this.data.td == 2) { // eslint-disable-line eqeqeq
        var maskGroup = createNS('mask');
        maskGroup.setAttribute('id', this.layerId);
        maskGroup.setAttribute('mask-type', 'alpha');
        var maskGrouper = createNS('g');
        maskGroup.appendChild(maskGrouper);
        filId = createElementID();
        fil = filtersFactory.createFilter(filId);
        /// /

        // This solution doesn't work on Android when meta tag with viewport attribute is set
        /* var feColorMatrix = createNS('feColorMatrix');
                feColorMatrix.setAttribute('type', 'matrix');
                feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
                feColorMatrix.setAttribute('values','1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1');
                fil.appendChild(feColorMatrix); */
        /// /
        var feCTr = createNS('feComponentTransfer');
        feCTr.setAttribute('in', 'SourceGraphic');
        fil.appendChild(feCTr);
        var feFunc = createNS('feFuncA');
        feFunc.setAttribute('type', 'table');
        feFunc.setAttribute('tableValues', '1.0 0.0');
        feCTr.appendChild(feFunc);
        /// /
        this.globalData.defs.appendChild(fil);
        var alphaRect = createNS('rect');
        alphaRect.setAttribute('width', this.comp.data.w);
        alphaRect.setAttribute('height', this.comp.data.h);
        alphaRect.setAttribute('x', '0');
        alphaRect.setAttribute('y', '0');
        alphaRect.setAttribute('fill', '#ffffff');
        alphaRect.setAttribute('opacity', '0');
        maskGrouper.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
        maskGrouper.appendChild(alphaRect);
        maskGrouper.appendChild(this.layerElement);
        layerElementParent = maskGrouper;
        if (!featureSupport.maskType) {
          maskGroup.setAttribute('mask-type', 'luminance');
          fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
          gg = createNS('g');
          maskGrouper.appendChild(alphaRect);
          gg.appendChild(this.layerElement);
          layerElementParent = gg;
          maskGrouper.appendChild(gg);
        }
        this.globalData.defs.appendChild(maskGroup);
      }
    } else if (this.data.tt) {
      this.matteElement.appendChild(this.layerElement);
      layerElementParent = this.matteElement;
      this.baseElement = this.matteElement;
    } else {
      this.baseElement = this.layerElement;
    }
    if (this.data.ln) {
      this.layerElement.setAttribute('id', this.data.ln);
    }
    if (this.data.cl) {
      this.layerElement.setAttribute('class', this.data.cl);
    }
    // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
    if (this.data.ty === 0 && !this.data.hd) {
      var cp = createNS('clipPath');
      var pt = createNS('path');
      pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
      var clipId = createElementID();
      cp.setAttribute('id', clipId);
      cp.appendChild(pt);
      this.globalData.defs.appendChild(cp);

      if (this.checkMasks()) {
        var cpGroup = createNS('g');
        cpGroup.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')');
        cpGroup.appendChild(this.layerElement);
        this.transformedElement = cpGroup;
        if (layerElementParent) {
          layerElementParent.appendChild(this.transformedElement);
        } else {
          this.baseElement = this.transformedElement;
        }
      } else {
        this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + clipId + ')');
      }
    }
    if (this.data.bm !== 0) {
      this.setBlendMode();
    }
  },
  rende   }
  },
  destroyBasy();
  },
  getBasent;
  },
  createRenderableCois);
  },
  )');
  },
};

/* global ProcessedElement */

function IShapeElement() {
}

IShapeElement.prototype = {
  addShapeToM   }
  },
  isShapeInAnimatedModifiers: function (data) {
    var i = 0;
    var len = this.shapeModifiers.length;
    while (i < len) {
      if (this.shapeModifiers[i].isAnimatedWithShape(data)) {
        return true;
      }
    }
    return false;
  },
  renderModifiers: function () {
    if (!this.shapeModifiers.length) {
      return;
    }
    var i;
    var len = this.shapes.length;
    for (i = 0; i < len; i += 1) {
      this.shapes[i].sh.reset();
    }

    len = this.shapeModifiers.length;
    for (i = len - 1; i >= 0; i -= 1) {
      this.shapeModifiers[i].processShapes(this._isFirstFrame);
    }
  },
  lcEnum: {
    1: 'butt',
    2: 'round',
    3: 'square',
  },
  ljEnum: {
    1: 'miter',
    2: 'round',
    3: 'bevel',
  },
  searchProcessedElement: function (elem) {
    var elements = this.processedElements;
    var i = 0;
    var len = elements.length;
    while (i < len) {
      if (elements[i].elem === elem) {
        return elements[i].pos;
      }
      i += 1;
    }
    return 0;
  },
  addProcesses));
  },
  prepge);
  },
};

/* global TextProperty, TextAnimatorProperty, buildShapeString, LetterProps */

function ITextElement() {
}

ITextElement.prototype.initties);
};

ITextElement.prototype.prepa;
  }
};

ITextElement.prototype.createPathShape = function (matrixHelper, shapes) {
  var j;
  var jLen = shapes.length;
  var pathNodes;
  var shapeStr = '';
  for (j = 0; j < jLen; j += 1) {
    pathNodes = shapes[j].ks.k;
    shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
  }
  return shapeStr;
};

ITextElement.prototype.updateDocumndex);
};

ITextElement.prototype.canResizeFont = function (_canResize) {
  this.textProperty.canResizeFont(_canResize);
};

ITextElement.prototype.setMinimumFontSize = function (_fontSize) {
  this.textProperty.setMinimumFontSize(_fontSize);
};

ITextElement.prototype.applyTextPropertiesTs, 0);
};

ITextElement.prototype.bui+ ')';
};

ITextElement.prototype.emptyProp = new LetterProps();

ITextElement.prototype.destroy = function () {

};

/* global extendPrototype, BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElemment() {}

extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

ICompElement.prototype.initide();
};

/* ICompElement.prototype.hide = function(){
    if(!this.hidden){
        this.hideElement();
        var i,len = this.elements.length;
        for( i = 0; i < len; i+=1 ){
            if(this.elements[i]){
                this.elements[i].hide();
            }
        }
    }
}; */

ICompElement.prototype.prepareFrame = function (num) {
  this._mdf = false;
  this.prepareRenderableFrame(num);
  this.prepareProperties(num, this.isInRange);
  if (!this.isInRange && !this.data.xt) {
    return;
  }

  if (!this.tm._placeholder) {
    var timeRemapped = this.tm.v;
    if (timeRemapped === this.data.op) {
      timeRemapped = this.data.op - 1;
    }
    this.renderedFrame = timeRemapped;
  } else {
    this.renderedFrame = num / this.data.sr;
  }
  var i;
  var len = this.elements.length;
  if (!this.completeLayers) {
    this.checkLayers(this.renderedFrame);
  }
  // This iteration needs to be backwards because of how expressions connect between each other
  for (i = len - 1; i >= 0; i -= 1) {
    if (this.completeLayers || this.elements[i]) {
      this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
      if (this.elements[i]._mdf) {
        this._mdf = true;
      }
    }
  }
};

ICompElement.prototype.renderInner}
  }
};

ICompElement.prototype.setEelems;
};

ICompElement.prototype.getElements = function () {
  return this.elements;
};

ICompElement.prototype.destroyE}
  }
};

ICompElement.prototype.ent();
};

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, creat
  };
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);

IImageElement.prototype.createElem);
};

IImageElement.prototype.sourceReceRect;
};

/* global extendPrototype, IImageElement, creatcomp);
}
extendPrototype([IImageElement], ISolidElement);

ISolidElement.prototype.createrect);
};

/* global PropertyFactory, extendPrototype, RenderableElement, BaseElement, FrameElement */

function AudioElement(data, globalData, comp) {
  this.initFrame();
  this.initRenderable();
  this.assetData = globalData.getAssetData(data.refId);
  this.initBaseData(data, globalData, comp);
  this._isPlaying = false;
  this._canPlay = false;
  var assetPath = this.globalData.getAssetsPath(this.assetData);
  this.audio = this.globalData.audioController.createAudio(assetPath);
  this._currentTime = 0;
  this.globalData.audioController.addAudio(this);
  this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : { _placeholder: true };
}

AudioElement.prototype.prepareFrame = function (num) {
  this.prepareRenderableFrame(num, true);
  this.prepareProperties(num, true);
  if (!this.tm._placeholder) {
    var timeRemapped = this.tm.v;
    this._currentTime = timeRemapped;
  } else {
    this._currentTime = num / this.data.sr;
  }
};

extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);

AudioElement.prototype.renderFrame = function () {
  if (this.isInRange && this._canPlay) {
    if (!this._isPlaying) {
      this.audio.play();
      this.audio.seek(this._currentTime / this.globalData.frameRate);
      this._isPlaying = true;
    } else if (!this.audio.playing()
      || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1
    ) {
      this.audio.seek(this._currentTime / this.globalData.frameRate);
    }
  }
};

AudioElement.prototype.show = function () {
  // this.audio.play()
};

AudioElement.prototyfalse;
};

AudioElement.prototypfalse;
};

AudioElement.prototype true;
};

AudioElement.prototype.setRate = function (rateValue) {
  this.audio.rate(rateValue);
};

AudioElement.prototypealue);
};

AudioElement.prototype.getBase null;
};

AudioElement.prototype.destroy = function () {
};

AudioElement.prototype.sourceRectAtTime = function () {
};

AudioElement.prototype.initExpressions = function () {
};

/* global createSizedArray, PropertyFactory, extendPrototype, SVGRenderer, ICompElement, SVGBaseElemrue };
}

extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement);

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, ITextElement, createSizedArray, creatcomp);
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);

SVGTextLottieElement.prototype.create;
  }
};

SVGTextLottieElement.prototype.buildTextCtents;
};

SVGTextLottieElement.prototype.buildNewText = function () {
  var i;
  var len;

  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
  if (documentData.fc) {
    this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
  } else {
    this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
  }
  if (documentData.sc) {
    this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
    this.layerElement.setAttribute('stroke-width', documentData.sw);
  }
  this.layerElement.setAttribute('font-size', documentData.finalSize);
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  if (fontData.fClass) {
    this.layerElement.setAttribute('class', fontData.fClass);
  } else {
    this.layerElement.setAttribute('font-family', fontData.fFamily);
    var fWeight = documentData.fWeight;
    var fStyle = documentData.fStyle;
    this.layerElement.setAttribute('font-style', fStyle);
    this.layerElement.setAttribute('font-weight', fWeight);
  }
  this.layerElement.setAttribute('aria-label', documentData.t);

  var letters = documentData.l || [];
  var usesGlyphs = !!this.globalData.fontManager.chars;
  len = letters.length;

  var tSpan;
  var matrixHelper = this.mHelper;
  var shapes;
  var shapeStr = '';
  var singleShape = this.data.singleShape;
  var xPos = 0;
  var yPos = 0;
  var firstLine = true;
  var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
  if (singleShape && !usesGlyphs && !documentData.sz) {
    var tElement = this.textContainer;
    var justify = 'start';
    switch (documentData.j) {
      case 1:
        justify = 'end';
        break;
      case 2:
        justify = 'middle';
        break;
      default:
        justify = 'start';
        break;
    }
    tElement.setAttribute('text-anchor', justify);
    tElement.setAttribute('letter-spacing', trackingOffset);
    var textContent = this.buildTextContents(documentData.finalText);
    len = textContent.length;
    yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
    for (i = 0; i < len; i += 1) {
      tSpan = this.textSpans[i] || createNS('tspan');
      tSpan.textContent = textContent[i];
      tSpan.setAttribute('x', 0);
      tSpan.setAttribute('y', yPos);
      tSpan.style.display = 'inherit';
      tElement.appendChild(tSpan);
      this.textSpans[i] = tSpan;
      yPos += documentData.finalLineHeight;
    }

    this.layerElement.appendChild(tElement);
  } else {
    var cachedSpansLength = this.textSpans.length;
    var shapeData;
    var charData;
    for (i = 0; i < len; i += 1) {
      if (!usesGlyphs || !singleShape || i === 0) {
        tSpan = cachedSpansLength > i ? this.textSpans[i] : createNS(usesGlyphs ? 'path' : 'text');
        if (cachedSpansLength <= i) {
          tSpan.setAttribute('stroke-linecap', 'butt');
          tSpan.setAttribute('stroke-linejoin', 'round');
          tSpan.setAttribute('stroke-miterlimit', '4');
          this.textSpans[i] = tSpan;
          this.layerElement.appendChild(tSpan);
        }
        tSpan.style.display = 'inherit';
      }

      matrixHelper.reset();
      matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
      if (singleShape) {
        if (letters[i].n) {
          xPos = -trackingOffset;
          yPos += documentData.yOffset;
          yPos += firstLine ? 1 : 0;
          firstLine = false;
        }
        this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
        xPos += letters[i].l || 0;
        // xPos += letters[i].val === ' ' ? 0 : trackingOffset;
        xPos += trackingOffset;
      }
      if (usesGlyphs) {
        charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        shapeData = (charData && charData.data) || {};
        shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
        if (!singleShape) {
          tSpan.setAttribute('d', this.createPathShape(matrixHelper, shapes));
        } else {
          shapeStr += this.createPathShape(matrixHelper, shapes);
        }
      } else {
        if (singleShape) {
          tSpan.setAttribute('transform', 'translate(' + matrixHelper.props[12] + ',' + matrixHelper.props[13] + ')');
        }
        tSpan.textContent = letters[i].val;
        tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
      }
      //
    }
    if (singleShape && tSpan) {
      tSpan.setAttribute('d', shapeStr);
    }
  }
  while (i < this.textSpans.length) {
    this.textSpans[i].style.display = 'none';
    i += 1;
  }

  this._sizeChanged = true;
};

SVGTextLottieElement.prototype.sourceRec.bbox;
};

SVGTextLottieElement.prototype.renderInnerContent = function () {
  if (!this.data.singleShape) {
    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
      this._sizeChanged = true;
      var i;
      var len;
      var renderedLetters = this.textAnimator.renderedLetters;

      var letters = this.textProperty.currentData.l;

      len = letters.length;
      var renderedLetter;
      var textSpan;
      for (i = 0; i < len; i += 1) {
        if (!letters[i].n) {
          renderedLetter = renderedLetters[i];
          textSpan = this.textSpans[i];
          if (renderedLetter._mdf.m) {
            textSpan.setAttribute('transform', renderedLetter.m);
          }
          if (renderedLetter._mdf.o) {
            textSpan.setAttribute('opacity', renderedLetter.o);
          }
          if (renderedLetter._mdf.sw) {
            textSpan.setAttribute('stroke-width', renderedLetter.sw);
          }
          if (renderedLetter._mdf.sc) {
            textSpan.setAttribute('stroke', renderedLetter.sc);
          }
          if (renderedLetter._mdf.fc) {
            textSpan.setAttribute('fill', renderedLetter.fc);
          }
        }
      }
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement,
FrameElement, RenderableDOMElement, Matrix, SVGStyleData, SVGStrokeStyleData, SVGFillStyleData,
SVGGradientFillStyleData, SVGGradientStrokeStyleData, locationHref, getBlendMode, ShapeGroupData,
TransformPropertyFactory, SVGTransformData, ShapePropertyFactory, SVGShapeData, SVGElementsRenderer, ShapeModifirties.
}

extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);

SVGShapeElement.prototype.initSecondaryElement = function () {
};

SVGShapeElement.prototype.identityMatrix = new Matrix();

SVGShapeElement.prototype.buildExpressionInion () {};

SVGShapeElement.prototype.createpes();
};

/*
This method searches for multiple shapes that affect a single element and one of them is animated
*/
SVGShapeElement.prototype.filterUniqueShapes = function () {
  var i;
  var len = this.shapes.length;
  var shape;
  var j;
  var jLen = this.stylesList.length;
  var style;
  var tempShapes = [];
  var areAnimated = false;
  for (j = 0; j < jLen; j += 1) {
    style = this.stylesList[j];
    areAnimated = false;
    tempShapes.length = 0;
    for (i = 0; i < len; i += 1) {
      shape = this.shapes[i];
      if (shape.styles.indexOf(style) !== -1) {
        tempShapes.push(shape);
        areAnimated = shape._isAnimated || areAnimated;
      }
    }
    if (tempShapes.length > 1 && areAnimated) {
      this.setShapesAsAnimated(tempShapes);
    }
  }
};

SVGShapeElement.prototype.setShapesAsA;
  }
};

SVGShapeElement.prototype.createStyletData;
};

SVGShapeElement.prototype.createGrouptData;
};

SVGShapeElement.prototype.createTransformtData;
};

SVGShapeElement.prototype.createShapetData;
};

SVGShapeElement.prototype.addToAnimatedC
  });
};

SVGShapeElement.prototype.setElemen}
  }
};

SVGShapeElement.prototype.reloadShapes = function () {
  this._isFirstFrame = true;
  var i;
  var len = this.itemsData.length;
  for (i = 0; i < len; i += 1) {
    this.prevViewData[i] = this.itemsData[i];
  }
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
  this.filterUniqueShapes();
  len = this.dynamicProperties.length;
  for (i = 0; i < len; i += 1) {
    this.dynamicProperties[i].getValue();
  }
  this.renderModifiers();
};

SVGShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, container, level, transformers, render) {
  var ownTransformers = [].concat(transformers);
  var i;
  var len = arr.length - 1;
  var j;
  var jLen;
  var ownStyles = [];
  var ownModifiers = [];
  var currentTransform;
  var modifier;
  var processedPos;
  for (i = len; i >= 0; i -= 1) {
    processedPos = this.searchProcessedElement(arr[i]);
    if (!processedPos) {
      arr[i]._render = render;
    } else {
      itemsData[i] = prevViewData[processedPos - 1];
    }
    if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
      if (!processedPos) {
        itemsData[i] = this.createStyleElement(arr[i], level);
      } else {
        itemsData[i].style.closed = false;
      }
      if (arr[i]._render) {
        container.appendChild(itemsData[i].style.pElem);
      }
      ownStyles.push(itemsData[i].style);
    } else if (arr[i].ty === 'gr') {
      if (!processedPos) {
        itemsData[i] = this.createGroupElement(arr[i]);
      } else {
        jLen = itemsData[i].it.length;
        for (j = 0; j < jLen; j += 1) {
          itemsData[i].prevViewData[j] = itemsData[i].it[j];
        }
      }
      this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);
      if (arr[i]._render) {
        container.appendChild(itemsData[i].gr);
      }
    } else if (arr[i].ty === 'tr') {
      if (!processedPos) {
        itemsData[i] = this.createTransformElement(arr[i], container);
      }
      currentTransform = itemsData[i].transform;
      ownTransformers.push(currentTransform);
    } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
      if (!processedPos) {
        itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
      }
      this.setElementStyles(itemsData[i]);
    } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'ms' || arr[i].ty === 'pb') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        modifier.init(this, arr[i]);
        itemsData[i] = modifier;
        this.shapeModifiers.push(modifier);
      } else {
        modifier = itemsData[i];
        modifier.closed = false;
      }
      ownModifiers.push(modifier);
    } else if (arr[i].ty === 'rp') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        itemsData[i] = modifier;
        modifier.init(this, arr, i, itemsData);
        this.shapeModifiers.push(modifier);
        render = false;
      } else {
        modifier = itemsData[i];
        modifier.closed = true;
      }
      ownModifiers.push(modifier);
    }
    this.addProcessedElement(arr[i], i + 1);
  }
  len = ownStyles.length;
  for (i = 0; i < len; i += 1) {
    ownStyles[i].closed = true;
  }
  len = ownModifiers.length;
  for (i = 0; i < len; i += 1) {
    ownModifiers[i].closed = true;
  }
};

SVGShapeElement.prototype.renderInner}
  }
};

SVGShapeElement.prototype.renderShape = function () {
  var i;
  var len = this.animatedContents.length;
  var animatedContent;
  for (i = 0; i < len; i += 1) {
    animatedContent = this.animatedContents[i];
    if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
      animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
    }
  }
};

SVGShapeElement.prototype. null;
};

/* global creat;
  }
}

SVGTintFilter.prototype.rend;
  }
};

/* global creatatrix;
}
SVGFillFilter.prototype.rend;
  }
};

/* global creatnBlur;
}

SVGGaussianBlurEffect.prototype.rend;
  }
};

/* global createNS, createElementID, locationHref, bmFl = [];
}

SVGStrokeEffect.prototype.initialize = function () {
  var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
  var path;
  var groupPath;
  var i;
  var len;
  if (this.filterManager.effectElements[1].p.v === 1) {
    len = this.elem.maskManager.masksProperties.length;
    i = 0;
  } else {
    i = this.filterManager.effectElements[0].p.v - 1;
    len = i + 1;
  }
  groupPath = createNS('g');
  groupPath.setAttribute('fill', 'none');
  groupPath.setAttribute('stroke-linecap', 'round');
  groupPath.setAttribute('stroke-dashoffset', 1);
  for (i; i < len; i += 1) {
    path = createNS('path');
    groupPath.appendChild(path);
    this.paths.push({ p: path, m: i });
  }
  if (this.filterManager.effectElements[10].p.v === 3) {
    var mask = createNS('mask');
    var id = createElementID();
    mask.setAttribute('id', id);
    mask.setAttribute('mask-type', 'alpha');
    mask.appendChild(groupPath);
    this.elem.globalData.defs.appendChild(mask);
    var g = createNS('g');
    g.setAttribute('mask', 'url(' + locationHref + '#' + id + ')');
    while (elemChildren[0]) {
      g.appendChild(elemChildren[0]);
    }
    this.elem.layerElement.appendChild(g);
    this.masker = mask;
    groupPath.setAttribute('stroke', '#fff');
  } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
    if (this.filterManager.effectElements[10].p.v === 2) {
      elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      while (elemChildren.length) {
        this.elem.layerElement.removeChild(elemChildren[0]);
      }
    }
    this.elem.layerElement.appendChild(groupPath);
    this.elem.layerElement.removeAttribute('mask');
    groupPath.setAttribute('stroke', '#fff');
  }
  this.initialized = true;
  this.pathMasker = groupPath;
};

SVGStrokeEffect.prototype.rend}
  }
};

/* global creatFuncB;
}

SVGTritoneFilter.prototype.rend;
  }
};

/* global createNS */

function SVGProLevelsFilter(filter, filterManager) {
  this.filterManager = filterManager;
  var effectElements = this.filterManager.effectElements;
  var feComponentTransfer = createNS('feComponentTransfer');

  if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
    this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
  }
  if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
    this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
  }
  if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
    this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
  }
  if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
    this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
  }

  if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    filter.appendChild(feComponentTransfer);
    feComponentTransfer = createNS('feComponentTransfer');
  }

  if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    filter.appendChild(feComponentTransfer);
    this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
    this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
    this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
  }
}

SVGProLevelsFilter.prototype.createFunc;
};

SVGProLevelsFilter.prototype.getTableValue = function (inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
  var cnt = 0;
  var segments = 256;
  var perc;
  var min = Math.min(inputBlack, inputWhite);
  var max = Math.max(inputBlack, inputWhite);
  var table = Array.call(null, { length: segments });
  var colorValue;
  var pos = 0;
  var outputDelta = outputWhite - outputBlack;
  var inputDelta = inputWhite - inputBlack;
  while (cnt <= 256) {
    perc = cnt / 256;
    if (perc <= min) {
      colorValue = inputDelta < 0 ? outputWhite : outputBlack;
    } else if (perc >= max) {
      colorValue = inputDelta < 0 ? outputBlack : outputWhite;
    } else {
      colorValue = (outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma));
    }
    table[pos] = colorValue;
    pos += 1;
    cnt += 256 / (segments - 1);
  }
  return table.join(' ');
};

SVGProLevelsFilter.prototype.rend}
  }
};

/* global createNS, rgbToHex, degToRNode);
}

SVGDropShadowEffect.prototype.rend/
  }
};

/* global createElementID, createNS */

var _svgMatteSymbolsement;
}

SVGMatte3Effect.prototype.fin null;
};

SVGMatte3Effect.prototype.replaceI;
  }
};

SVGMatte3Effect.prototype.setElemenerId);
};

SVGMatte3Effect.prototype.initialize = function () {
  var ind = this.filterManager.effectElements[0].p.v;
  var elements = this.elem.comp.elements;
  var i = 0;
  var len = elements.length;
  while (i < len) {
    if (elements[i] && elements[i].data.ind === ind) {
      this.setElementAsMask(this.elem, elements[i]);
    }
    i += 1;
  }
  this.initialized = true;
};

SVGMatte3Effect.prototype.rend;
  }
};

/* global createElementID, filtersFactory, SVGTintFilter, SVGFillFilter, SVGStrokeEffect, SVGTritoneFilter,
SVGProLevelsFilter, SVGDropShadowEffect, SVGMatte3Effect, SVGGaussianBlurEffect, locationHref */

function SVGEffects(elem) {
  var i;
  var len = elem.data.ef ? elem.data.ef.length : 0;
  var filId = createElementID();
  var fil = filtersFactory.createFilter(filId);
  var count = 0;
  this.filters = [];
  var filterManager;
  for (i = 0; i < len; i += 1) {
    filterManager = null;
    if (elem.data.ef[i].ty === 20) {
      count += 1;
      filterManager = new SVGTintFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 21) {
      count += 1;
      filterManager = new SVGFillFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 22) {
      filterManager = new SVGStrokeEffect(elem, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 23) {
      count += 1;
      filterManager = new SVGTritoneFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 24) {
      count += 1;
      filterManager = new SVGProLevelsFilter(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 25) {
      count += 1;
      filterManager = new SVGDropShadowEffect(fil, elem.effectsManager.effectElements[i]);
    } else if (elem.data.ef[i].ty === 28) {
      // count += 1;
      filterManager = new SVGMatte3Effect(fil, elem.effectsManager.effectElements[i], elem);
    } else if (elem.data.ef[i].ty === 29) {
      count += 1;
      filterManager = new SVGGaussianBlurEffect(fil, elem.effectsManager.effectElements[i]);
    }
    if (filterManager) {
      this.filters.push(filterManager);
    }
  }
  if (count) {
    elem.globalData.defs.appendChild(fil);
    elem.layerElement.setAttribute('filter', 'url(' + locationHref + '#' + filId + ')');
  }
  if (this.filters.length) {
    elem.addRenderableComponent(this);
  }
}

SVGEffects.prototype.renderFrame = function (_isFirstFrame) {
  var i;
  var len = this.filters.length;
  for (i = 0; i < len; i += 1) {
    this.filters[i].renderFrame(_isFirstFrame);
  }
};

/* global Matrix, createTypedArray */

function CVContextData() {
  this.saved = [];
  this.cArrPos = 0;
  this.cTr = new Matrix();
  this.cO = 1;
  var i;
  var len = 15;
  this.savedOp = createTypedArray('float32', len);
  for (i = 0; i < len; i += 1) {
    this.saved[i] = createTypedArray('float32', 16);
  }
  this._length = len;
}

CVContextData.prototype.duength;
};

CVContextData.prototypO = 1;
};

/* global CVEffects, getBlendMode, CVMaskElement, Matrix */

function CVBaseElement() {
}

CVBaseElement.prototype = {
  createElements: function () {},
  initRendererElement: function () {},
  createContaineris);
  },
  createContent: function () {},
  setB   }
  },
  createRenderableCois);
  },
  hid   }
  },
  sho   }
  },
  ren   }
  },
 y();
  },
  mHelper: new Matrix(),
};
CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement,HierarchyElement, FrameElement,
RenderableElement, SVGShapeElement, IImageElement, createcomp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);

CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVImageElement.prototype.create;
  }
};

CVImageElement.prototype.renderInner0, 0);
};

CVImageElement.prototype.destroy = function () {
  this.img = null;
};

/* global createSizedArray, PropertyFactory, extendPrototype, CanvasRenderer, ICompElement, CVBaseElemrue };
}

extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement);

CVCompElement.prototype.renderInner}
  }
};

CVCompElement.prototype. null;
};

/* global createSizedArray, ShapePropertyFactory, MaskElement */

function CVMaskElement(data, element) {
  this.data = data;
  this.element = element;
  this.masksProperties = this.data.masksProperties || [];
  this.viewData = createSizedArray(this.masksProperties.length);
  var i;
  var len = this.masksProperties.length;
  var hasMasks = false;
  for (i = 0; i < len; i += 1) {
    if (this.masksProperties[i].mode !== 'n') {
      hasMasks = true;
    }
    this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
  }
  this.hasMasks = hasMasks;
  if (hasMasks) {
    this.element.addRenderableComponent(this);
  }
}

CVMaskElement.prototype.renderFrame = function () {
  if (!this.hasMasks) {
    return;
  }
  var transform = this.element.finalTransform.mat;
  var ctx = this.element.canvasContext;
  var i;
  var len = this.masksProperties.length;
  var pt;
  var pts;
  var data;
  ctx.beginPath();
  for (i = 0; i < len; i += 1) {
    if (this.masksProperties[i].mode !== 'n') {
      if (this.masksProperties[i].inv) {
        ctx.moveTo(0, 0);
        ctx.lineTo(this.element.globalData.compSize.w, 0);
        ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
        ctx.lineTo(0, this.element.globalData.compSize.h);
        ctx.lineTo(0, 0);
      }
      data = this.viewData[i].v;
      pt = transform.applyToPointArray(data.v[0][0], data.v[0][1], 0);
      ctx.moveTo(pt[0], pt[1]);
      var j;
      var jLen = data._length;
      for (j = 1; j < jLen; j += 1) {
        pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
        ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
      }
      pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
      ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
    }
  }
  this.element.globalData.renderer.save(true);
  ctx.clip();
};

CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

CVMaskElement.prototype.destroy = function () {
  this.element = null;
};

/* global ShapeTransformManager, extendPrototype, BaseElement, TransformElement, CVBaseElement, IShapeElement,
HierarchyElement, FrameElement, RenderableElement, RenderableDOMElement, PropertyFactory, degToRads, GradientProperty,
DashProperty, TransformPropertyFactory, CVShapeData, ShapeModifiers, bmFlcomp);
}

extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);

CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;

CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false };

CVShapeElement.prototype.dashResetter = [];

CVShapeElement.prototype.create, []);
};

CVShapeElement.prototype.createStyleElement = function (data, transforms) {
  var styleElem = {
    data: data,
    type: data.ty,
    preTransforms: this.transformsManager.addTransformSequence(transforms),
    transforms: [],
    elements: [],
    closed: data.hd === true,
  };
  var elementData = {};
  if (data.ty === 'fl' || data.ty === 'st') {
    elementData.c = PropertyFactory.getProp(this, data.c, 1, 255, this);
    if (!elementData.c.k) {
      styleElem.co = 'rgb(' + bmFloor(elementData.c.v[0]) + ',' + bmFloor(elementData.c.v[1]) + ',' + bmFloor(elementData.c.v[2]) + ')';
    }
  } else if (data.ty === 'gf' || data.ty === 'gs') {
    elementData.s = PropertyFactory.getProp(this, data.s, 1, null, this);
    elementData.e = PropertyFactory.getProp(this, data.e, 1, null, this);
    elementData.h = PropertyFactory.getProp(this, data.h || { k: 0 }, 0, 0.01, this);
    elementData.a = PropertyFactory.getProp(this, data.a || { k: 0 }, 0, degToRads, this);
    elementData.g = new GradientProperty(this, data.g, this);
  }
  elementData.o = PropertyFactory.getProp(this, data.o, 0, 0.01, this);
  if (data.ty === 'st' || data.ty === 'gs') {
    styleElem.lc = this.lcEnum[data.lc] || 'round';
    styleElem.lj = this.ljEnum[data.lj] || 'round';
    if (data.lj == 1) { // eslint-disable-line eqeqeq
      styleElem.ml = data.ml;
    }
    elementData.w = PropertyFactory.getProp(this, data.w, 0, null, this);
    if (!elementData.w.k) {
      styleElem.wi = elementData.w.v;
    }
    if (data.d) {
      var d = new DashProperty(this, data.d, 'canvas', this);
      elementData.d = d;
      if (!elementData.d.k) {
        styleElem.da = elementData.d.dashArray;
        styleElem.do = elementData.d.dashoffset[0];
      }
    }
  } else {
    styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
  }
  this.stylesList.push(styleElem);
  elementData.style = styleElem;
  return elementData;
};

CVShapeElement.prototype.createGrouptData;
};

CVShapeElement.prototype.createTransformtData;
};

CVShapeElement.prototype.createShapetData;
};

CVShapeElement.prototype.reloadShapes = function () {
  this._isFirstFrame = true;
  var i;
  var len = this.itemsData.length;
  for (i = 0; i < len; i += 1) {
    this.prevViewData[i] = this.itemsData[i];
  }
  this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
  len = this.dynamicProperties.length;
  for (i = 0; i < len; i += 1) {
    this.dynamicProperties[i].getValue();
  }
  this.renderModifiers();
  this.transformsManager.processSequences(this._isFirstFrame);
};

CVShapeElement.prototype.addTransformToSt}
  }
};

CVShapeElement.prototype.removeTransformFromSt}
  }
};

CVShapeElement.prototype.closeStyles = function (styles) {
  var i;
  var len = styles.length;
  for (i = 0; i < len; i += 1) {
    styles[i].closed = true;
  }
};

CVShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, shouldRender, transforms) {
  var i;
  var len = arr.length - 1;
  var j;
  var jLen;
  var ownStyles = [];
  var ownModifiers = [];
  var processedPos;
  var modifier;
  var currentTransform;
  var ownTransforms = [].concat(transforms);
  for (i = len; i >= 0; i -= 1) {
    processedPos = this.searchProcessedElement(arr[i]);
    if (!processedPos) {
      arr[i]._shouldRender = shouldRender;
    } else {
      itemsData[i] = prevViewData[processedPos - 1];
    }
    if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
      if (!processedPos) {
        itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
      } else {
        itemsData[i].style.closed = false;
      }

      ownStyles.push(itemsData[i].style);
    } else if (arr[i].ty === 'gr') {
      if (!processedPos) {
        itemsData[i] = this.createGroupElement(arr[i]);
      } else {
        jLen = itemsData[i].it.length;
        for (j = 0; j < jLen; j += 1) {
          itemsData[i].prevViewData[j] = itemsData[i].it[j];
        }
      }
      this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
    } else if (arr[i].ty === 'tr') {
      if (!processedPos) {
        currentTransform = this.createTransformElement(arr[i]);
        itemsData[i] = currentTransform;
      }
      ownTransforms.push(itemsData[i]);
      this.addTransformToStyleList(itemsData[i]);
    } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
      if (!processedPos) {
        itemsData[i] = this.createShapeElement(arr[i]);
      }
    } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'pb') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        modifier.init(this, arr[i]);
        itemsData[i] = modifier;
        this.shapeModifiers.push(modifier);
      } else {
        modifier = itemsData[i];
        modifier.closed = false;
      }
      ownModifiers.push(modifier);
    } else if (arr[i].ty === 'rp') {
      if (!processedPos) {
        modifier = ShapeModifiers.getModifier(arr[i].ty);
        itemsData[i] = modifier;
        modifier.init(this, arr, i, itemsData);
        this.shapeModifiers.push(modifier);
        shouldRender = false;
      } else {
        modifier = itemsData[i];
        modifier.closed = true;
      }
      ownModifiers.push(modifier);
    }
    this.addProcessedElement(arr[i], i + 1);
  }
  this.removeTransformFromStyleList();
  this.closeStyles(ownStyles);
  len = ownModifiers.length;
  for (i = 0; i < len; i += 1) {
    ownModifiers[i].closed = true;
  }
};

CVShapeElement.prototype.renderInnertrue);
};

CVShapeElement.prototype.renderShapeTransform = function (parentTransform, groupTransform) {
  if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
    groupTransform.opacity = parentTransform.opacity;
    groupTransform.opacity *= groupTransform.op.v;
    groupTransform._opMdf = true;
  }
};

CVShapeElement.prototype.drawLayer = function () {
  var i;
  var len = this.stylesList.length;
  var j;
  var jLen;
  var k;
  var kLen;
  var elems;
  var nodes;
  var renderer = this.globalData.renderer;
  var ctx = this.globalData.canvasContext;
  var type;
  var currentStyle;
  for (i = 0; i < len; i += 1) {
    currentStyle = this.stylesList[i];
    type = currentStyle.type;

    // Skipping style when
    // Stroke width equals 0
    // style should not be rendered (extra unused repeaters)
    // current opacity equals 0
    // global opacity equals 0
    if (!(((type === 'st' || type === 'gs') && currentStyle.wi === 0) || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
      renderer.save();
      elems = currentStyle.elements;
      if (type === 'st' || type === 'gs') {
        ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;
        ctx.lineWidth = currentStyle.wi;
        ctx.lineCap = currentStyle.lc;
        ctx.lineJoin = currentStyle.lj;
        ctx.miterLimit = currentStyle.ml || 0;
      } else {
        ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
      }
      renderer.ctxOpacity(currentStyle.coOp);
      if (type !== 'st' && type !== 'gs') {
        ctx.beginPath();
      }
      renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);
      jLen = elems.length;
      for (j = 0; j < jLen; j += 1) {
        if (type === 'st' || type === 'gs') {
          ctx.beginPath();
          if (currentStyle.da) {
            ctx.setLineDash(currentStyle.da);
            ctx.lineDashOffset = currentStyle.do;
          }
        }
        nodes = elems[j].trNodes;
        kLen = nodes.length;

        for (k = 0; k < kLen; k += 1) {
          if (nodes[k].t === 'm') {
            ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
          } else if (nodes[k].t === 'c') {
            ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
          } else {
            ctx.closePath();
          }
        }
        if (type === 'st' || type === 'gs') {
          ctx.stroke();
          if (currentStyle.da) {
            ctx.setLineDash(this.dashResetter);
          }
        }
      }
      if (type !== 'st' && type !== 'gs') {
        ctx.fill(currentStyle.r);
      }
      renderer.restore();
    }
  }
};

CVShapeElement.prototype.renderShape = function (parentTransform, items, data, isMain) {
  var i;
  var len = items.length - 1;
  var groupTransform;
  groupTransform = parentTransform;
  for (i = len; i >= 0; i -= 1) {
    if (items[i].ty === 'tr') {
      groupTransform = data[i].transform;
      this.renderShapeTransform(parentTransform, groupTransform);
    } else if (items[i].ty === 'sh' || items[i].ty === 'el' || items[i].ty === 'rc' || items[i].ty === 'sr') {
      this.renderPath(items[i], data[i]);
    } else if (items[i].ty === 'fl') {
      this.renderFill(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'st') {
      this.renderStroke(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'gf' || items[i].ty === 'gs') {
      this.renderGradientFill(items[i], data[i], groupTransform);
    } else if (items[i].ty === 'gr') {
      this.renderShape(groupTransform, items[i].it, data[i].it);
    } else if (items[i].ty === 'tm') {
      //
    }
  }
  if (isMain) {
    this.drawLayer();
  }
};

CVShapeElement.prototype.renderStyl;
  }
};

CVShapeElement.prototype.renderPath = function (pathData, itemData) {
  if (pathData.hd !== true && pathData._shouldRender) {
    var i;
    var len = itemData.styledShapes.length;
    for (i = 0; i < len; i += 1) {
      this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
    }
  }
};

CVShapeElement.prototype.ren;
  }
};

CVShapeElement.prototype.renderGradientFill = function (styleData, itemData, groupTransform) {
  var styleElem = itemData.style;
  var grd;
  if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || (styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf))) {
    var ctx = this.globalData.canvasContext;
    var pt1 = itemData.s.v;
    var pt2 = itemData.e.v;
    if (styleData.t === 1) {
      grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
    } else {
      var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
      var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);

      var percent = itemData.h.v;
      if (percent >= 1) {
        percent = 0.99;
      } else if (percent <= -1) {
        percent = -0.99;
      }
      var dist = rad * percent;
      var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
      var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
      grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
    }

    var i;
    var len = styleData.g.p;
    var cValues = itemData.g.c;
    var opacity = 1;

    for (i = 0; i < len; i += 1) {
      if (itemData.g._hasOpacity && itemData.g._collapsable) {
        opacity = itemData.g.o[i * 2 + 1];
      }
      grd.addColorStop(cValues[i * 4] / 100, 'rgba(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ',' + opacity + ')');
    }
    styleElem.grd = grd;
  }
  styleElem.coOp = itemData.o.v * groupTransform.opacity;
};

CVShapeElement.prototype.rende;
  }
};

CVShapeElement.prototype.h = 0;
};

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement,
SVGShapeElement, IImageElement */

function CVSolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);

CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

CVSolidElement.prototype.renderInner
  //
};

/* global extendPrototype, BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement,
RenderableElement, ITextElement, createTag, createSizedArcomp);
}
extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);

CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

CVTextElement.prototype.buildNewText = function () {
  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);

  var hasFill = false;
  if (documentData.fc) {
    hasFill = true;
    this.values.fill = this.buildColor(documentData.fc);
  } else {
    this.values.fill = 'rgba(0,0,0,0)';
  }
  this.fill = hasFill;
  var hasStroke = false;
  if (documentData.sc) {
    hasStroke = true;
    this.values.stroke = this.buildColor(documentData.sc);
    this.values.sWidth = documentData.sw;
  }
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  var i;
  var len;
  var letters = documentData.l;
  var matrixHelper = this.mHelper;
  this.stroke = hasStroke;
  this.values.fValue = documentData.finalSize + 'px ' + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
  len = documentData.finalText.length;
  // this.tHelper.font = this.values.fValue;
  var charData;
  var shapeData;
  var k;
  var kLen;
  var shapes;
  var j;
  var jLen;
  var pathNodes;
  var commands;
  var pathArr;
  var singleShape = this.data.singleShape;
  var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
  var xPos = 0;
  var yPos = 0;
  var firstLine = true;
  var cnt = 0;
  for (i = 0; i < len; i += 1) {
    charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
    shapeData = (charData && charData.data) || {};
    matrixHelper.reset();
    if (singleShape && letters[i].n) {
      xPos = -trackingOffset;
      yPos += documentData.yOffset;
      yPos += firstLine ? 1 : 0;
      firstLine = false;
    }

    shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
    jLen = shapes.length;
    matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
    if (singleShape) {
      this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
    }
    commands = createSizedArray(jLen);
    for (j = 0; j < jLen; j += 1) {
      kLen = shapes[j].ks.k.i.length;
      pathNodes = shapes[j].ks.k;
      pathArr = [];
      for (k = 1; k < kLen; k += 1) {
        if (k === 1) {
          pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
        }
        pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
      }
      pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
      commands[j] = pathArr;
    }
    if (singleShape) {
      xPos += letters[i].l;
      xPos += trackingOffset;
    }
    if (this.textSpans[cnt]) {
      this.textSpans[cnt].elem = commands;
    } else {
      this.textSpans[cnt] = { elem: commands };
    }
    cnt += 1;
  }
};

CVTextElement.prototype.renderInnerContent = function () {
  var ctx = this.canvasContext;
  ctx.font = this.values.fValue;
  ctx.lineCap = 'butt';
  ctx.lineJoin = 'miter';
  ctx.miterLimit = 4;

  if (!this.data.singleShape) {
    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
  }

  var i;
  var len;
  var j;
  var jLen;
  var k;
  var kLen;
  var renderedLetters = this.textAnimator.renderedLetters;

  var letters = this.textProperty.currentData.l;

  len = letters.length;
  var renderedLetter;
  var lastFill = null;
  var lastStroke = null;
  var lastStrokeW = null;
  var commands;
  var pathArr;
  for (i = 0; i < len; i += 1) {
    if (!letters[i].n) {
      renderedLetter = renderedLetters[i];
      if (renderedLetter) {
        this.globalData.renderer.save();
        this.globalData.renderer.ctxTransform(renderedLetter.p);
        this.globalData.renderer.ctxOpacity(renderedLetter.o);
      }
      if (this.fill) {
        if (renderedLetter && renderedLetter.fc) {
          if (lastFill !== renderedLetter.fc) {
            lastFill = renderedLetter.fc;
            ctx.fillStyle = renderedLetter.fc;
          }
        } else if (lastFill !== this.values.fill) {
          lastFill = this.values.fill;
          ctx.fillStyle = this.values.fill;
        }
        commands = this.textSpans[i].elem;
        jLen = commands.length;
        this.globalData.canvasContext.beginPath();
        for (j = 0; j < jLen; j += 1) {
          pathArr = commands[j];
          kLen = pathArr.length;
          this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
          for (k = 2; k < kLen; k += 6) {
            this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
          }
        }
        this.globalData.canvasContext.closePath();
        this.globalData.canvasContext.fill();
        /// ctx.fillText(this.textSpans[i].val,0,0);
      }
      if (this.stroke) {
        if (renderedLetter && renderedLetter.sw) {
          if (lastStrokeW !== renderedLetter.sw) {
            lastStrokeW = renderedLetter.sw;
            ctx.lineWidth = renderedLetter.sw;
          }
        } else if (lastStrokeW !== this.values.sWidth) {
          lastStrokeW = this.values.sWidth;
          ctx.lineWidth = this.values.sWidth;
        }
        if (renderedLetter && renderedLetter.sc) {
          if (lastStroke !== renderedLetter.sc) {
            lastStroke = renderedLetter.sc;
            ctx.strokeStyle = renderedLetter.sc;
          }
        } else if (lastStroke !== this.values.stroke) {
          lastStroke = this.values.stroke;
          ctx.strokeStyle = this.values.stroke;
        }
        commands = this.textSpans[i].elem;
        jLen = commands.length;
        this.globalData.canvasContext.beginPath();
        for (j = 0; j < jLen; j += 1) {
          pathArr = commands[j];
          kLen = pathArr.length;
          this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
          for (k = 2; k < kLen; k += 6) {
            this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
          }
        }
        this.globalData.canvasContext.closePath();
        this.globalData.canvasContext.stroke();
        /// ctx.strokeText(letters[i].val,0,0);
      }
      if (renderedLetter) {
        this.globalData.renderer.restore();
      }
    }
  }
};

function CVEffects() {

}
CVEffects.prototype.renderFrame = function () {};

/* global createTag, createNS, styleDiv, CVEffects, MaskElement, SVGBaseElement, HybridRenderer */

function HBaseElement() {}
HBaseElement.prototype = {
  checkBlendMode: function () {},
  initRenderent);
  },
  createContainer   }
  },
  renderElement: function () {
    var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};
    if (this.finalTransform._matMdf) {
      var matrixValue = this.finalTransform.mat.toCSS();
      transformedElementStyle.transform = matrixValue;
      transformedElementStyle.webkitTransform = matrixValue;
    }
    if (this.finalTransform._opMdf) {
      transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
    }
  },
  renderFrame: function () {
    // If it is exported as hidden (data.hd === true) no need to render
    // If it is not visible no need to render
    if (this.data.hd || this.hidden) {
      return;
    }
    this.renderTransform();
    this.renderRenderable();
    this.renderElement();
    this.renderInnerContent();
    if (this._isFirstFrame) {
      this._isFirstFrame = false;
    }
  },
    }
  },
  createRenderableCota);
  },
  addEffects: function () {
  },
  setMatte: function () {},
};
HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting;

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, createNS, createTag */

function HSolidElement(data, globalData, comp) {
  this.initElement(data, globalData, comp);
}
extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);

HSolidElement.prototype.createrect);
};

/* global createSizedArray, PropertyFactory, extendPrototype, HybridRenderer, ICompElement, HBaseElemrue };
}

extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement);
HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

HCompElement.prototype.createContainerE;
  }
};

HCompElement.prototype.addTo3dCo;
  }
};

/* global createNS, extendPrototype, BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement,
HierarchyElement, FrameElement, RenderableElement, createNS, bmMin, bmSqrt, bmMin, bmMax, bm
  };
}
extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

HShapeElement.prototype.create cont;
};

HShapeElement.prototype.getTransformpoint;
};

HShapeElement.prototype.calculateShapeBoun;
  }
};

HShapeElement.prototype.checyMax);
};

HShapeElement.prototype.shapeBoundingBox = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

HShapeElement.prototype.tempBoundingBox = {
  x: 0,
  xMax: 0,
  y: 0,
  yMax: 0,
  width: 0,
  height: 0,
};

HShapeElement.prototype.getBoundsOfCurve = function (p0, p1, p2, p3) {
  var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];

  for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) { // eslint-disable-line no-plusplus
    b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
    a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
    c = 3 * p1[i] - 3 * p0[i];

    b |= 0; // eslint-disable-line no-bitwise
    a |= 0; // eslint-disable-line no-bitwise
    c |= 0; // eslint-disable-line no-bitwise

    if (a === 0 && b === 0) {
      //
    } else if (a === 0) {
      t = -c / b;

      if (t > 0 && t < 1) {
        bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
      }
    } else {
      b2ac = b * b - 4 * c * a;

      if (b2ac >= 0) {
        t1 = (-b + bmSqrt(b2ac)) / (2 * a);
        if (t1 > 0 && t1 < 1) bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
        t2 = (-b - bmSqrt(b2ac)) / (2 * a);
        if (t2 > 0 && t2 < 1) bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
      }
    }
  }

  this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
  this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
  this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
  this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
};

HShapeElement.prototype.calp3[i];
};

HShapeElement.prototype.calculateBoundingBox = function (itemsData, boundingBox) {
  var i;
  var len = itemsData.length;
  for (i = 0; i < len; i += 1) {
    if (itemsData[i] && itemsData[i].sh) {
      this.calculateShapeBoundingBox(itemsData[i], boundingBox);
    } else if (itemsData[i] && itemsData[i].it) {
      this.calculateBoundingBox(itemsData[i].it, boundingBox);
    }
  }
};

HShapeElement.prototype.currentBoxCeight;
};

HShapeElement.prototype.renderInnerContent = function () {
  this._renderShapeFrame();

  if (!this.hidden && (this._isFirstFrame || this._mdf)) {
    var tempBoundingBox = this.tempBoundingBox;
    var max = 999999;
    tempBoundingBox.x = max;
    tempBoundingBox.xMax = -max;
    tempBoundingBox.y = max;
    tempBoundingBox.yMax = -max;
    this.calculateBoundingBox(this.itemsData, tempBoundingBox);
    tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
    tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y;
    // var tempBoundingBox = this.shapeCont.getBBox();
    if (this.currentBoxContains(tempBoundingBox)) {
      return;
    }
    var changed = false;
    if (this.currentBBox.w !== tempBoundingBox.width) {
      this.currentBBox.w = tempBoundingBox.width;
      this.shapeCont.setAttribute('width', tempBoundingBox.width);
      changed = true;
    }
    if (this.currentBBox.h !== tempBoundingBox.height) {
      this.currentBBox.h = tempBoundingBox.height;
      this.shapeCont.setAttribute('height', tempBoundingBox.height);
      changed = true;
    }
    if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
      this.currentBBox.w = tempBoundingBox.width;
      this.currentBBox.h = tempBoundingBox.height;
      this.currentBBox.x = tempBoundingBox.x;
      this.currentBBox.y = tempBoundingBox.y;

      this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
      var shapeStyle = this.shapeCont.style;
      var shapeTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
      shapeStyle.transform = shapeTransform;
      shapeStyle.webkitTransform = shapeTransform;
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement,
RenderableDOMElement, ITextElement, createSizedArray, createTag, styleDiv, creatcomp);
}
extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);

HTextElement.prototype.createing();
};

HTextElement.prototype.buildNewText = function () {
  var documentData = this.textProperty.currentData;
  this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
  var innerElemStyle = this.innerElem.style;
  var textColor = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
  innerElemStyle.fill = textColor;
  innerElemStyle.color = textColor;
  if (documentData.sc) {
    innerElemStyle.stroke = this.buildColor(documentData.sc);
    innerElemStyle.strokeWidth = documentData.sw + 'px';
  }
  var fontData = this.globalData.fontManager.getFontByName(documentData.f);
  if (!this.globalData.fontManager.chars) {
    innerElemStyle.fontSize = documentData.finalSize + 'px';
    innerElemStyle.lineHeight = documentData.finalSize + 'px';
    if (fontData.fClass) {
      this.innerElem.className = fontData.fClass;
    } else {
      innerElemStyle.fontFamily = fontData.fFamily;
      var fWeight = documentData.fWeight;
      var fStyle = documentData.fStyle;
      innerElemStyle.fontStyle = fStyle;
      innerElemStyle.fontWeight = fWeight;
    }
  }
  var i;
  var len;

  var letters = documentData.l;
  len = letters.length;
  var tSpan;
  var tParent;
  var tCont;
  var matrixHelper = this.mHelper;
  var shapes;
  var shapeStr = '';
  var cnt = 0;
  for (i = 0; i < len; i += 1) {
    if (this.globalData.fontManager.chars) {
      if (!this.textPaths[cnt]) {
        tSpan = createNS('path');
        tSpan.setAttribute('stroke-linecap', 'butt');
        tSpan.setAttribute('stroke-linejoin', 'round');
        tSpan.setAttribute('stroke-miterlimit', '4');
      } else {
        tSpan = this.textPaths[cnt];
      }
      if (!this.isMasked) {
        if (this.textSpans[cnt]) {
          tParent = this.textSpans[cnt];
          tCont = tParent.children[0];
        } else {
          tParent = createTag('div');
          tParent.style.lineHeight = 0;
          tCont = createNS('svg');
          tCont.appendChild(tSpan);
          styleDiv(tParent);
        }
      }
    } else if (!this.isMasked) {
      if (this.textSpans[cnt]) {
        tParent = this.textSpans[cnt];
        tSpan = this.textPaths[cnt];
      } else {
        tParent = createTag('span');
        styleDiv(tParent);
        tSpan = createTag('span');
        styleDiv(tSpan);
        tParent.appendChild(tSpan);
      }
    } else {
      tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
    }
    // tSpan.setAttribute('visibility', 'hidden');
    if (this.globalData.fontManager.chars) {
      var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
      var shapeData;
      if (charData) {
        shapeData = charData.data;
      } else {
        shapeData = null;
      }
      matrixHelper.reset();
      if (shapeData && shapeData.shapes) {
        shapes = shapeData.shapes[0].it;
        matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
        shapeStr = this.createPathShape(matrixHelper, shapes);
        tSpan.setAttribute('d', shapeStr);
      }
      if (!this.isMasked) {
        this.innerElem.appendChild(tParent);
        if (shapeData && shapeData.shapes) {
          // document.body.appendChild is needed to get exact measure of shape
          document.body.appendChild(tCont);
          var boundingBox = tCont.getBBox();
          tCont.setAttribute('width', boundingBox.width + 2);
          tCont.setAttribute('height', boundingBox.height + 2);
          tCont.setAttribute('viewBox', (boundingBox.x - 1) + ' ' + (boundingBox.y - 1) + ' ' + (boundingBox.width + 2) + ' ' + (boundingBox.height + 2));
          var tContStyle = tCont.style;
          var tContTranslation = 'translate(' + (boundingBox.x - 1) + 'px,' + (boundingBox.y - 1) + 'px)';
          tContStyle.transform = tContTranslation;
          tContStyle.webkitTransform = tContTranslation;

          letters[i].yOffset = boundingBox.y - 1;
        } else {
          tCont.setAttribute('width', 1);
          tCont.setAttribute('height', 1);
        }
        tParent.appendChild(tCont);
      } else {
        this.innerElem.appendChild(tSpan);
      }
    } else {
      tSpan.textContent = letters[i].val;
      tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
      if (!this.isMasked) {
        this.innerElem.appendChild(tParent);
        //
        var tStyle = tSpan.style;
        var tSpanTranslation = 'translate3d(0,' + -documentData.finalSize / 1.2 + 'px,0)';
        tStyle.transform = tSpanTranslation;
        tStyle.webkitTransform = tSpanTranslation;
      } else {
        this.innerElem.appendChild(tSpan);
      }
    }
    //
    if (!this.isMasked) {
      this.textSpans[cnt] = tParent;
    } else {
      this.textSpans[cnt] = tSpan;
    }
    this.textSpans[cnt].style.display = 'block';
    this.textPaths[cnt] = tSpan;
    cnt += 1;
  }
  while (cnt < this.textSpans.length) {
    this.textSpans[cnt].style.display = 'none';
    cnt += 1;
  }
};

HTextElement.prototype.renderInnerContent = function () {
  var svgStyle;
  if (this.data.singleShape) {
    if (!this._isFirstFrame && !this.lettersChangedFlag) {
      return;
    } if (this.isMasked && this.finalTransform._matMdf) {
      // Todo Benchmark if using this is better than getBBox
      this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH);
      svgStyle = this.svgElement.style;
      var translation = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
      svgStyle.transform = translation;
      svgStyle.webkitTransform = translation;
    }
  }

  this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
  if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
    return;
  }
  var i;
  var len;
  var count = 0;
  var renderedLetters = this.textAnimator.renderedLetters;

  var letters = this.textProperty.currentData.l;

  len = letters.length;
  var renderedLetter;
  var textSpan;
  var textPath;
  for (i = 0; i < len; i += 1) {
    if (letters[i].n) {
      count += 1;
    } else {
      textSpan = this.textSpans[i];
      textPath = this.textPaths[i];
      renderedLetter = renderedLetters[count];
      count += 1;
      if (renderedLetter._mdf.m) {
        if (!this.isMasked) {
          textSpan.style.webkitTransform = renderedLetter.m;
          textSpan.style.transform = renderedLetter.m;
        } else {
          textSpan.setAttribute('transform', renderedLetter.m);
        }
      }
      /// /textSpan.setAttribute('opacity',renderedLetter.o);
      textSpan.style.opacity = renderedLetter.o;
      if (renderedLetter.sw && renderedLetter._mdf.sw) {
        textPath.setAttribute('stroke-width', renderedLetter.sw);
      }
      if (renderedLetter.sc && renderedLetter._mdf.sc) {
        textPath.setAttribute('stroke', renderedLetter.sc);
      }
      if (renderedLetter.fc && renderedLetter._mdf.fc) {
        textPath.setAttribute('fill', renderedLetter.fc);
        textPath.style.color = renderedLetter.fc;
      }
    }
  }

  if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
    var boundingBox = this.innerElem.getBBox();

    if (this.currentBBox.w !== boundingBox.width) {
      this.currentBBox.w = boundingBox.width;
      this.svgElement.setAttribute('width', boundingBox.width);
    }
    if (this.currentBBox.h !== boundingBox.height) {
      this.currentBBox.h = boundingBox.height;
      this.svgElement.setAttribute('height', boundingBox.height);
    }

    var margin = 1;
    if (this.currentBBox.w !== (boundingBox.width + margin * 2) || this.currentBBox.h !== (boundingBox.height + margin * 2) || this.currentBBox.x !== (boundingBox.x - margin) || this.currentBBox.y !== (boundingBox.y - margin)) {
      this.currentBBox.w = boundingBox.width + margin * 2;
      this.currentBBox.h = boundingBox.height + margin * 2;
      this.currentBBox.x = boundingBox.x - margin;
      this.currentBBox.y = boundingBox.y - margin;

      this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
      svgStyle = this.svgElement.style;
      var svgTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
      svgStyle.transform = svgTransform;
      svgStyle.webkitTransform = svgTransform;
    }
  }
};

/* global extendPrototype, BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement,
FrameElement, RenderableElement, creatcomp);
}

extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);

HImageElement.prototype.create;
  }
};

/* global PropertyFactory, degToRads, Matrix, extendPrototype, BaseElement, FrameElement, HierarchyElement */

function HCameraElement(data, globalData, comp) {
  this.initFrame();
  this.initBaseData(data, globalData, comp);
  this.initHierarchy();
  var getProp = PropertyFactory.getProp;
  this.pe = getProp(this, data.pe, 0, 0, this);
  if (data.ks.p.s) {
    this.px = getProp(this, data.ks.p.x, 1, 0, this);
    this.py = getProp(this, data.ks.p.y, 1, 0, this);
    this.pz = getProp(this, data.ks.p.z, 1, 0, this);
  } else {
    this.p = getProp(this, data.ks.p, 1, 0, this);
  }
  if (data.ks.a) {
    this.a = getProp(this, data.ks.a, 1, 0, this);
  }
  if (data.ks.or.k.length && data.ks.or.k[0].to) {
    var i;
    var len = data.ks.or.k.length;
    for (i = 0; i < len; i += 1) {
      data.ks.or.k[i].to = null;
      data.ks.or.k[i].ti = null;
    }
  }
  this.or = getProp(this, data.ks.or, 1, degToRads, this);
  this.or.sh = true;
  this.rx = getProp(this, data.ks.rx, 0, degToRads, this);
  this.ry = getProp(this, data.ks.ry, 0, degToRads, this);
  this.rz = getProp(this, data.ks.rz, 0, degToRads, this);
  this.mat = new Matrix();
  this._prevMat = new Matrix();
  this._isFirstFrame = true;

  // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.
  this.finalTransform = {
    mProp: this,
  };
}
extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);

HCameraElement.prototyp}
  }
};

HCameraElement.prototype.createElements = function () {
};

HCameraElement.prototype.hide = function () {
};

HCameraElement.prototype.renderFrame = function () {
  var _mdf = this._isFirstFrame;
  var i;
  var len;
  if (this.hierarchy) {
    len = this.hierarchy.length;
    for (i = 0; i < len; i += 1) {
      _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
    }
  }
  if (_mdf || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
    this.mat.reset();

    if (this.hierarchy) {
      len = this.hierarchy.length - 1;
      for (i = len; i >= 0; i -= 1) {
        var mTransf = this.hierarchy[i].finalTransform.mProp;
        this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
        this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
        this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
        this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
        this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
      }
    }
    if (this.p) {
      this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
    } else {
      this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
    }
    if (this.a) {
      var diffVector;
      if (this.p) {
        diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
      } else {
        diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
      }
      var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2));
      // var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
      var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
      var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
      var mRotationX = (Math.atan2(lookDir[1], lookLengthOnXZ));
      var mRotationY = (Math.atan2(lookDir[0], -lookDir[2]));
      this.mat.rotateY(mRotationY).rotateX(-mRotationX);
    }
    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
    this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
    this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
    this.mat.translate(0, 0, this.pe.v);

    var hasMatrixChanged = !this._prevMat.equals(this.mat);
    if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
      len = this.comp.threeDElements.length;
      var comp;
      var perspectiveStyle;
      var containerStyle;
      for (i = 0; i < len; i += 1) {
        comp = this.comp.threeDElements[i];
        if (comp.type === '3d') {
          if (hasMatrixChanged) {
            var matValue = this.mat.toCSS();
            containerStyle = comp.container.style;
            containerStyle.transform = matValue;
            containerStyle.webkitTransform = matValue;
          }
          if (this.pe._mdf) {
            perspectiveStyle = comp.perspectiveElem.style;
            perspectiveStyle.perspective = this.pe.v + 'px';
            perspectiveStyle.webkitPerspective = this.pe.v + 'px';
          }
        }
      }
      this.mat.clone(this._prevMat);
    }
  }
  this._isFirstFrame = false;
};

HCameraElement.prototype.prepareFrame = function (num) {
  this.prepareProperties(num, true);
};

HCameraElement.prototype.destroy = function () {
};
HCameraElement.prototype.getBaseElement = function () { return null; };

function HEffects() {
}
HEffects.prototype.renderFrame = function () {};

/* global createTag, AnimationItem */
/* exported animationManager */

var animationManager = (function () {
  var moduleOb = {};
  var registeredAnimations = [];
  var initTime = 0;
  var len = 0;
  var playingAnimationsNum = 0;
  var _stopped = true;
  var _isFrozen = fa   }tem;ons;e();= 1;= 1;tem;
  }

  function setSpeed(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setSpeed(val, animation);
    }
  }

  function setDirection(val, animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.setDirection(val, animation);
    }
  }

  function play(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.play(animation);
       }me);
  }

  function pause(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.pause(animation);
    }   }
  }

  function stop(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.stop(animation);
    }
  }

  function togglePause(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.togglePause(animation);
    }   }   }   }   }
  }

  function freeze() {
    _isFrozen = true;e();   }
  }

  function mute(animation) {
    var i;
    for (i = 0; i < len; i += 1) {
      registeredAnimations[i].animation.mute(animation);
    }   }
  }

  moduleOb.registerAnimation = registerAnimation;
  moduleOb.loadAnimation = loadAnimation;
  moduleOb.setSpeed = setSpeed;
  moduleOb.setDirection = setDirection;
  moduleOb.play = play;
  moduleOb.pause = pause;
  moduleOb.stop = stop;
  moduleOb.togglePause = togglePause;
  moduleOb.searchAnimations = searchAnimations;
  moduleOb.resize = resize;
  // moduleOb.start = start;
  moduleOb.goToAndStop = goToAndStop;
  moduleOb.destroy = destroy;
  moduleOb.freeze = freeze;
  moduleOb.unfreeze = unfreeze;
  moduleOb.setVolume = setVolume;
  moduleOb.mute = mute;
  moduleOb.unmute = unmute;
  moduleOb.getRegisteredAnimations = getRegisteredAnimations;
  return moduleOb;
}());

/* global createElementID, subframeEnabled, ProjectInterface, ImagePreloader, audioControllerFactory, extendPrototype, BaseEvent,
CanvasRenderer, SVGRenderer, HybridRenderer, assetLoader, dataManager, expressionsPlugin, BMEnterFrameEvent, BMCompleteLoopEvent,
BMCompleteEvent, BMSegmentStartEvent, BMDestroyEvent, BMEnterFrameEvent, BMCompleteLoopEvent, BMCompleteEvent, BMSegmentStartEvent,
BMDestroyEvent, BMRenderFrameErrorEvent, BMConfigErrorEvent */

var AnimationItem = function () {
  this._cbs = [];
  this.name = '';
  this.path = '';
  this.isLoaded = false;
  this.currentFrame = 0;
  this.currentRawFrame = 0;
  this.firstFrame = 0;
  this.totalFrames = 0;
  this.frameRate = 0;
  this.frameMult = 0;
  this.playSpeed = 1;
  this.playDirection = 1;
  this.playCount = 0;
  this.animationData = {};
  this.assets = [];
  this.isPaused = true;
  this.autoplay = false;
  this.loop = true;
  this.renderer = null;
  this.animationID = createElementID();
  this.assetsPath = '';
  this.timeCompleted = 0;
  this.segmentPos = 0;
  this.isSubframeEnabled = subframeEnabled;
  this.segments = [];
  this._idle = true;
  this._completedLoop = false;
  this.projectInterface = ProjectInterface();
  this.imagePreloader = new ImagePreloader();
  this.audioController = audioControllerFactory();
};

extendPrototype([BaseEvent], AnimationItem);

AnimationItem.prototype.setParams = function (params) {
  if (params.wrapper || params.container) {
    this.wrapper = params.wrapper || params.container;
  }
  var animType = 'svg';
  if (params.animType) {
    animType = params.animType;
  } else if (params.renderer) {
    animType = params.renderer;
  }
  switch (animType) {
    case 'canvas':
      this.renderer = new CanvasRenderer(this, params.rendererSettings);
      break;
    case 'svg':
      this.renderer = new SVGRenderer(this, params.rendererSettings);
      break;
    default:
      this.renderer = new HybridRenderer(this, params.rendererSettings);
      break;
  }
  this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
  this.renderer.setProjectInterface(this.projectInterface);
  this.animType = animType;
  if (params.loop === ''
        || params.loop === null
        || params.loop === undefined
        || params.loop === true) {
    this.loop = true;
  } else if (params.loop === false) {
    this.loop = false;
  } else {
    this.loop = parseInt(params.loop, 10);
  }
  this.autoplay = 'autoplay' in params ? params.autoplay : true;
  this.name = params.name ? params.name : '';
  this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, 'autoloadSegments') ? params.autoloadSegments : true;
  this.assetsPath = params.assetsPath;
  this.initialSegment = params.initialSegment;
  if (params.audioFactory) {
    this.audioController.setAudioFactory(params.audioFactory);
  }
  if (params.animationData) {
    this.configAnimation(params.animationData);
  } else if (params.path) {
    if (params.path.lastIndexOf('\\') !== -1) {
      this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1);
    } else {
      this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1);
    }
    this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
    this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));

    assetLoader.load(params.path, this.configAnimation.bind(this), function () {
      this.trigger('data_failed');
    }.bind(this));
  }
};

AnimationItem.prototype.setData = function (wrapper, animationData) {
  if (animationData) {
    if (typeof animationData !== 'object') {
      animationData = JSON.parse(animationData);
    }
  }
  var params = {
    wrapper: wrapper,
    animationData: animationData,
  };
  var wrapperAttributes = wrapper.attributes;

  params.path = wrapperAttributes.getNamedItem('data-animation-path') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-animation-path').value
    : wrapperAttributes.getNamedItem('data-bm-path') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-path').value
      : wrapperAttributes.getNamedItem('bm-path')
        ? wrapperAttributes.getNamedItem('bm-path').value
        : '';
  params.animType = wrapperAttributes.getNamedItem('data-anim-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-type').value
    : wrapperAttributes.getNamedItem('data-bm-type') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-type').value
      : wrapperAttributes.getNamedItem('bm-type') // eslint-disable-line no-nested-ternary
        ? wrapperAttributes.getNamedItem('bm-type').value
        : wrapperAttributes.getNamedItem('data-bm-renderer') // eslint-disable-line no-nested-ternary
          ? wrapperAttributes.getNamedItem('data-bm-renderer').value
          : wrapperAttributes.getNamedItem('bm-renderer')
            ? wrapperAttributes.getNamedItem('bm-renderer').value
            : 'canvas';

  var loop = wrapperAttributes.getNamedItem('data-anim-loop') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-loop').value
    : wrapperAttributes.getNamedItem('data-bm-loop') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-loop').value
      : wrapperAttributes.getNamedItem('bm-loop')
        ? wrapperAttributes.getNamedItem('bm-loop').value
        : '';
  if (loop === 'false') {
    params.loop = false;
  } else if (loop === 'true') {
    params.loop = true;
  } else if (loop !== '') {
    params.loop = parseInt(loop, 10);
  }
  var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-autoplay').value
    : wrapperAttributes.getNamedItem('data-bm-autoplay') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-autoplay').value
      : wrapperAttributes.getNamedItem('bm-autoplay')
        ? wrapperAttributes.getNamedItem('bm-autoplay').value
        : true;
  params.autoplay = autoplay !== 'false';

  params.name = wrapperAttributes.getNamedItem('data-name') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-name').value
    : wrapperAttributes.getNamedItem('data-bm-name') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-name').value
      : wrapperAttributes.getNamedItem('bm-name')
        ? wrapperAttributes.getNamedItem('bm-name').value
        : '';
  var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-prerender').value
    : wrapperAttributes.getNamedItem('data-bm-prerender') // eslint-disable-line no-nested-ternary
      ? wrapperAttributes.getNamedItem('data-bm-prerender').value
      : wrapperAttributes.getNamedItem('bm-prerender')
        ? wrapperAttributes.getNamedItem('bm-prerender').value
        : '';

  if (prerender === 'false') {
    params.prerender = false;
  }
  this.setParams(params);
};

AnimationItem.prototype.includeLayers = function (data) {
  if (data.op > this.animationData.op) {
    this.animationData.op = data.op;
    this.totalFrames = Math.floor(data.op - this.animationData.ip);
  }
  var layers = this.animationData.layers;
  var i;
  var len = layers.length;
  var newLayers = data.layers;
  var j;
  var jLen = newLayers.length;
  for (j = 0; j < jLen; j += 1) {
    i = 0;
    while (i < len) {
      if (layers[i].id === newLayers[j].id) {
        layers[i] = newLayers[j];
        break;
      }
      i += 1;
    }
  }
  if (data.chars || data.fonts) {
    this.renderer.globalData.fontManager.addChars(data.chars);
    this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
  }
  if (data.assets) {
    len = data.assets.length;
    for (i = 0; i < len; i += 1) {
      this.animationData.assets.push(data.assets[i]);
    }
  }
  this.animationData.__complete = false;
  dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
  this.renderer.includeLayers(data.layers);
  if (expressionsPlugin) {
    expressionsPlugin.initExpressions(this);
  }
  this.loadNextSegment();
};

AnimationItem.prototype.loadNexthis));
};

AnimationItem.prototype.loadSent();
};

AnimationItem.prototype.imageded();
};

AnimationItem.prototype.preloahis));
};

AnimationItem.prototype.configAnimation = function (animData) {
  if (!this.renderer) {
    return;
  }
  try {
    this.animationData = animData;

    if (this.initialSegment) {
      this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
      this.firstFrame = Math.round(this.initialSegment[0]);
    } else {
      this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
      this.firstFrame = Math.round(this.animationData.ip);
    }
    this.renderer.configAnimation(animData);
    if (!animData.assets) {
      animData.assets = [];
    }

    this.assets = this.animationData.assets;
    this.frameRate = this.animationData.fr;
    this.frameMult = this.animationData.fr / 1000;
    this.renderer.searchExtraCompositions(animData.assets);
    this.trigger('config_ready');
    this.preloadImages();
    this.loadSegments();
    this.updaFrameModifier();
    this.waitForFontsLoaded();
    if (this.isPaused) {
      this.audioController.pause();
    }
  } catch (error) {
    this.triggerConfigError(error);
  }
};

AnimationItem.prototype.waitForFont;
  }
};

AnimationItem.prototype.checkLoaded = function () {
  if (!this.isLoaded
        && this.renderer.globalData.fontManager.isLoaded
        && (this.imagePreloader.loaded() || this.renderer.rendererType !== 'canvas')
  ) {
    this.isLoaded = true;
    dataManager.completeData(this.animationData, this.renderer.globalData.fontManager);
    if (expressionsPlugin) {
      expressionsPlugin.initExpressions(this);
    }
    this.renderer.initItems();
    s);
    }.bind(this), 0);
    this.gotoFrame();
    if (this.autoplay) {
      this.play();
    }
  }
};

AnimationItem.prototype.resize = function () {
  this.renderer.updateContainerSize();
};

AnimationItem.prototype.setS!flag;
};

AnimationItem.prototype.goame();
};

AnimationItem.prototype.rend;
  }
};

AnimationItem.prototype.play = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === true) {
    this.isPaused = false;
    this.audioController.resume();
    if (this._idle) {
      this._idle = false;
      this.trigger('_active');
    }
  }
};

AnimationItem.prototype.pause = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === false) {
    this.isPaused = true;
    this._idle = true;
    this.trigger('_idle');
    this.audioController.pause();
  }
};

AnimationItem.prototype.togglePause = function (name) {
  if (name && this.name !== name) {
    return;
  }
  if (this.isPaused === true) {
    this.play();
  } else {
    this.pause();
  }
};

AnimationItem.prototype.stop = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.pause();
  this.playCount = 0;
  this._completedLoop = false;
  this.setCurrentRawFrameValue(0);
};

AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
  if (name && this.name !== name) {
    return;
  }
  if (isFrame) {
    this.setCurrentRawFrameValue(value);
  } else {
    this.setCurrentRawFrameValue(value * this.frameModifier);
  }
  this.pause();
};

AnimationItem.prototype.goTolay();
};

AnimationItem.prototype.adva;
  }
};

AnimationItem.prototype.adjustSegment = function (arr, offset) {
  this.playCount = 0;
  if (arr[1] < arr[0]) {
    if (this.frameModifier > 0) {
      if (this.playSpeed < 0) {
        this.setSpeed(-this.playSpeed);
      } else {
        this.setDirection(-1);
      }
    }
    this.totalFrames = arr[0] - arr[1];
    this.timeCompleted = this.totalFrames;
    this.firstFrame = arr[1];
    this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
  } else if (arr[1] > arr[0]) {
    if (this.frameModifier < 0) {
      if (this.playSpeed < 0) {
        this.setSpeed(-this.playSpeed);
      } else {
        this.setDirection(1);
      }
    }
    this.totalFrames = arr[1] - arr[0];
    this.timeCompleted = this.totalFrames;
    this.firstFrame = arr[0];
    this.setCurrentRawFrameValue(0.001 + offset);
  }
  this.trigger('segmentStart');
};
AnimationItem.prototype.setSegment = function (init, end) {
  var pendingFrame = -1;
  if (this.isPaused) {
    if (this.currentRawFrame + this.firstFrame < init) {
      pendingFrame = init;
    } else if (this.currentRawFrame + this.firstFrame > end) {
      pendingFrame = end - init;
    }
  }

  this.firstFrame = init;
  this.totalFrames = end - init;
  this.timeCompleted = this.totalFrames;
  if (pendingFrame !== -1) {
    this.goToAndStop(pendingFrame, true);
  }
};

AnimationItem.prototype.playSegments = function (arr, forceFlag) {
  if (forceFlag) {
    this.segments.length = 0;
  }
  if (typeof arr[0] === 'object') {
    var i;
    var len = arr.length;
    for (i = 0; i < len; i += 1) {
      this.segments.push(arr[i]);
    }
  } else {
    this.segments.push(arr);
  }
  if (this.segments.length && forceFlag) {
    this.adjustSegment(this.segments.shift(), 0);
  }
  if (this.isPaused) {
    this.play();
  }
};

AnimationItem.prototype.resetS;
  }
};
AnimationItem.prototype.checkSfalse;
};

AnimationItem.prototype. null;
};

AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
  this.currentRawFrame = value;
  this.gotoFrame();
};

AnimationItem.prototype.setSpeed = function (val) {
  this.playSpeed = val;
  this.updaFrameModifier();
};

AnimationItem.prototype.setDiier();
};

AnimationItem.prototype.se(val);
};

AnimationItem.prototype.geume();
};

AnimationItem.prototype.mute = function (name) {
  if (name && this.name !== name) {
    return;
  }
  this.audioController.mute();
};

AnimationItem.prototypeute();
};

AnimationItem.prototype.updaFrameMtion);
};

AnimationItem.prototype.getPath = function () {
  return this.path;
};

AnimationItem.prototype.getAss path;
};

AnimationItem.prototype.getAs null;
};

AnimationItem.prototype.hide = function () {
  this.renderer.hide();
};

AnimationItem.prototyhow();
};

AnimationItem.prototype.getDeRate;
};

AnimationItem.prototype.;
  }
};

AnimationItem.prototype.triggerRenderFrameError = function (nativeError) {
  var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
  this.triggerEvent('error', error);

  if (this.onError) {
    this.onError.call(this, error);
  }
};

AnimationItem.prototype.triggerConf;
  }
};

/* global CompExpressionInterface, expressionsPlugin: writable */
/* exported expressionsPlugin */

var Expressions = (function () {
  var ob = {};
  ob.initExpressions = initExpressirty;
  }
  return ob;
}());

expressionsPlugin = Expressions;

/* eslint-disable camelcase, no-unused-vars */
/* global BMMath, BezierFactory, createTypedArray, degToRads, shapePool */

var ExpressionManager = (function () {
  'use strict';

  var ob = {};
  var Math = BMMath;
  var window = null;
  var document = nray;ber;
  }

  function $bm_neg(a) {
    var tOfA = typeof a;
    if (tOfA === 'number' || tOfA === 'boolean' || a instanceof Number) {
      return -a;
    }
    if ($bm_isInstanceOfArray(a)) {
      var i;
      var lenA = a.length;
      var retArr = [];
      for (i = 0; i < lenA; i += 1) {
        retArr[i] = -a[i];
      }
      return retArr;
    }
    if (a.propType) {
      return a.v;
    }
    return -a;
  }

  var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get;
  var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get;
  var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;

  function sum(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    if (tOfA === 'string' || tOfB === 'string') {
      return a + b;
    }
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a + b;
    }
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      a = a.slice(0);
      a[0] += b;
      return a;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      b = b.slice(0);
      b[0] = a + b[0];
      return b;
    }
    if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
      var i = 0;
      var lenA = a.length;
      var lenB = b.length;
      var retArr = [];
      while (i < lenA || i < lenB) {
        if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
          retArr[i] = a[i] + b[i];
        } else {
          retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
        }
        i += 1;
      }
      return retArr;
    }
    return 0;
  }
  var add = sum;

  function sub(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      if (tOfA === 'string') {
        a = parseInt(a, 10);
      }
      if (tOfB === 'string') {
        b = parseInt(b, 10);
      }
      return a - b;
    }
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      a = a.slice(0);
      a[0] -= b;
      return a;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      b = b.slice(0);
      b[0] = a - b[0];
      return b;
    }
    if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
      var i = 0;
      var lenA = a.length;
      var lenB = b.length;
      var retArr = [];
      while (i < lenA || i < lenB) {
        if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
          retArr[i] = a[i] - b[i];
        } else {
          retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
        }
        i += 1;
      }
      return retArr;
    }
    return 0;
  }

  function mul(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    var arr;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a * b;
    }

    var i;
    var len;
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      len = a.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a[i] * b;
      }
      return arr;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      len = b.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a * b[i];
      }
      return arr;
    }
    return 0;
  }

  function div(a, b) {
    var tOfA = typeof a;
    var tOfB = typeof b;
    var arr;
    if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
      return a / b;
    }
    var i;
    var len;
    if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
      len = a.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a[i] / b;
      }
      return arr;
    }
    if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
      len = b.length;
      arr = createTypedArray('float32', len);
      for (i = 0; i < len; i += 1) {
        arr[i] = a / b[i];
      }
      return arr;
    }
    return 0% b;
  }
  var $bm_sum = sum;
  var $bm_sub = sub;
  var $bm_mul = mul;
  var $bm_div = div;
  var $bm_mod = ax);ads;
  }
  var radians_to_degrees = radiansToDegrads;
  }
  var degrees_to_radians = radiansToDegrees;

  var helperLengthArray = [0, 0, 0, 0, 0,th);c));3]];n p;3]];arrin);ath;
  }

  function initiateExpression(elem, data, property) {
    var val = data.x;
    var needsVelocity = /velocity(?![\w\d])/.test(val);
    var _needsRandom = val.indexOf('random') !== -1;
    var elemType = elem.data.ty;
    var transform;
    var $bm_transform;
    var content;
    var effect;
    var thisProperty = property;
    thisProperty.valueAtTime = thisProperty.getValueAtTime;
    Object.defineProperty(thisProperty, 'value', {
      get: function () {
        return thisProperty.v;
      },
    });
    elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
    elem.comp.displayStartTime = 0;
    var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
    var outPoint = elem.data.op / elem.comp.globalData.frameRate;
    var width = elem.data.sw ? elem.data.sw : 0;
    var height = elem.data.sh ? elem.data.sh : 0;
    var name = elem.data.nm;
    var loopIn;
    var loop_in;
    var loopOut;
    var loop_out;
    var smooth;
    var toWorld;
    var fromWorld;
    var fromComp;
    var toComp;
    var fromCompToSurface;
    var position;
    var rotation;
    var anchorPoint;
    var scale;
    var thisLayer;
    var thisComp;
    var mask;
    var valueAtTime;
    var velocityAtTime;

    var scoped_bm_rt;
    var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]; // eslint-disable-line no-eval
    var numKeys = property.kf ? data.k.length : 0;

    var active = !this.data || this.data.hd !== true;

    varc;
    }.bind(this);

    if (thisProperty.loopIn) {
      loopIn = thisProperty.loopIn.bind(thisProperty);
      loop_in = loopIn;
    }

    if (thisProperty.loopOut) {
      loopOut = thisProperty.loopOut.bind(thisProperty);
      loop_out = loopOut;
    }

    if (thisProperty.smooth) {
      smooth = thisProperty.smooth.bind(thisProperty);
    }

    function loopInDuration(type, duration) {
      return loopIn(type, duration, true);
   );
    }

    if (this.getValueAtTime) {
      valueAtTime = this.getValueAtTime.bind(this);
    }

    if (this.getVelocityAtTime) {
      velocityAtTime = this.getVelocityAtTime.bind(this);
    }

    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface];
    }

    function easeOut(t, tMin, tMax, val1, val2) {
      return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
    }

    function easeIn(t, tMin, tMax, val1, val2) {
      return applyEase(easeInBez, t, tMin, tMax, val1, val2);
   );
    }

    function applyEase(fn, t, tMin, tMax, val1, val2) {
      if (val1 === undefined) {
        val1 = tMin;
        val2 = tMax;
      } else {
        t = (t - tMin) / (tMax - tMin);
      }
      if (t > 1) {
        t = 1;
      } else if (t < 0) {
        t = 0;
      }
      var mult = fn(t);
      if ($bm_isInstanceOfArray(val1)) {
        var iKey;
        var lenKey = val1.length;
        var arr = createTypedArray('float32', lenKey);
        for (iKey = 0; iKey < lenKey; iKey += 1) {
          arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
        }
        return arr;
      }
      return (val2 - val1) * mult + val1;
    }

    function nearestKey(time) {
      var iKey;
      var lenKey = data.k.length;
      var index;
      var keyTime;
      if (!data.k.length || typeof (data.k[0]) === 'number') {
        index = 0;
        keyTime = 0;
      } else {
        index = -1;
        time *= elem.comp.globalData.frameRate;
        if (time < data.k[0].t) {
          index = 1;
          keyTime = data.k[0].t;
        } else {
          for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
            if (time === data.k[iKey].t) {
              index = iKey + 1;
              keyTime = data.k[iKey].t;
              break;
            } else if (time > data.k[iKey].t && time < data.k[iKey + 1].t) {
              if (time - data.k[iKey].t > data.k[iKey + 1].t - time) {
                index = iKey + 2;
                keyTime = data.k[iKey + 1].t;
              } else {
                index = iKey + 1;
                keyTime = data.k[iKey].t;
              }
              break;
            }
          }
          if (index === -1) {
            index = iKey + 1;
            keyTime = data.k[iKey].t;
          }
        }
      }
      var obKey = {};
      obKey.index = index;
      obKey.time = keyTime / elem.comp.globalData.frameRate;
      return obKey;
   y;
   s;
   s;
   );
   );
    }

    function substring(init, end) {
      if (typeof value === 'string') {
        if (end === undefined) {
          return value.substring(init);
        }
        return value.substring(init, end);
      }
      return '';
   ';
   );
    }

    var time;
    var velocity;
    var value;
    var text;
    var textIndex;
    var textTotal;
    var selectorValue;
    var index = elem.data.ind;
    var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
    var parent;
    var randSeed = Math.floor(Math.random() * 1000000);
    var globalData = elem.globalDt;
    }
    return executeExpression;
  }

  ob.initiateExpression = initiateExpression;
  return ob;
}());

/* global ExpressionManager, createTypedArray */
/* exported expressionHelpers */

var expressionH
  };
}());

/* global createTypedArray, Matrix, TransformPropertyFactory, expressionHelpers, PropertyFactory, expressionHelpers,
initialDefaultFrame, shapePool, ShapePropertyFactory, bez, extendPrototype, ExpressionManager, createSizedArray */

(function addPropertyDecorator() {
  function loopOut(type, duration, durationFlag) {
    if (!this.k || !this.keyframes) {
      return this.pv;
    }
    type = type ? type.toLowerCase() : '';
    var currentFrame = this.comp.renderedFrame;
    var keyframes = this.keyframes;
    var lastKeyFrame = keyframes[keyframes.length - 1].t;
    if (currentFrame <= lastKeyFrame) {
      return this.pv;
    }
    var cycleDuration;
    var firstKeyFrame;
    if (!durationFlag) {
      if (!duration || duration > keyframes.length - 1) {
        duration = keyframes.length - 1;
      }
      firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
      cycleDuration = lastKeyFrame - firstKeyFrame;
    } else {
      if (!duration) {
        cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
      } else {
        cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
      }
      firstKeyFrame = lastKeyFrame - cycleDuration;
    }
    var i;
    var len;
    var ret;
    if (type === 'pingpong') {
      var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
      if (iterations % 2 !== 0) {
          return this.getValueAtTime(((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      }
    } else if (type === 'offset') {
      var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
      if (this.pv.length) {
        ret = new Array(initV.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = (endV[i] - initV[i]) * repeats + current[i];
        }
        return ret;
      }
      return (endV - initV) * repeats + current;
    } else if (type === 'continue') {
      var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
      var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        ret = new Array(lastValue.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
            ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 0.0005; // eslint-disable-line
        }
        return ret;
      }
      return lastValue + (lastValue - nextLastValue) * (((currentFrame - lastKeyFrame)) / 0.001);
    }
      return this.getValueAtTime((((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line

  }

  function loopIn(type, duration, durationFlag) {
    if (!this.k) {
      return this.pv;
    }
    type = type ? type.toLowerCase() : '';
    var currentFrame = this.comp.renderedFrame;
    var keyframes = this.keyframes;
    var firstKeyFrame = keyframes[0].t;
    if (currentFrame >= firstKeyFrame) {
      return this.pv;
    }
    var cycleDuration;
    var lastKeyFrame;
    if (!durationFlag) {
      if (!duration || duration > keyframes.length - 1) {
        duration = keyframes.length - 1;
      }
      lastKeyFrame = keyframes[duration].t;
      cycleDuration = lastKeyFrame - firstKeyFrame;
    } else {
      if (!duration) {
        cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
      } else {
        cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
      }
      lastKeyFrame = firstKeyFrame + cycleDuration;
    }
    var i;
    var len;
    var ret;
    if (type === 'pingpong') {
      var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);
      if (iterations % 2 === 0) {
          return this.getValueAtTime((((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
      }
    } else if (type === 'offset') {
      var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
      var current = this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration) + firstKeyFrame) / this.comp.globalData.frameRate, 0);
      var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;
      if (this.pv.length) {
        ret = new Array(initV.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
        }
        return ret;
      }
      return current - (endV - initV) * repeats;
    } else if (type === 'continue') {
      var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
      var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);
      if (this.pv.length) {
        ret = new Array(firstValue.length);
        len = ret.length;
        for (i = 0; i < len; i += 1) {
          ret[i] = firstValue[i] + ((firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame)) / 0.001;
        }
        return ret;
      }
      return firstValue + ((firstValue - nextFirstValue) * (firstKeyFrame - currentFrame)) / 0.001;
    }
      return this.getValueAtTime(((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame))) / this.comp.globalData.frameRate, 0); // eslint-disable-line
lue;
  }

  function getTransformValueAtTime(time) {
    if (!this._transformCachingAtTime) {
      this._transformCachingAtTime = {
        v: new Matrix(),
      };
    }
    /// /
    var matrix = this._transformCachingAtTime.v;
    matrix.cloneFromProps(this.pre.props);
    if (this.appliedTransformations < 1) {
      var anchor = this.a.getValueAtTime(time);
      matrix.translate(
        -anchor[0] * this.a.mult,
        -anchor[1] * this.a.mult,
        anchor[2] * this.a.mult
      );
    }
    if (this.appliedTransformations < 2) {
      var scale = this.s.getValueAtTime(time);
      matrix.scale(
        scale[0] * this.s.mult,
        scale[1] * this.s.mult,
        scale[2] * this.s.mult
      );
    }
    if (this.sk && this.appliedTransformations < 3) {
      var skew = this.sk.getValueAtTime(time);
      var skewAxis = this.sa.getValueAtTime(time);
      matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
    }
    if (this.r && this.appliedTransformations < 4) {
      var rotation = this.r.getValueAtTime(time);
      matrix.rotate(-rotation * this.r.mult);
    } else if (!this.r && this.appliedTransformations < 4) {
      var rotationZ = this.rz.getValueAtTime(time);
      var rotationY = this.ry.getValueAtTime(time);
      var rotationX = this.rx.getValueAtTime(time);
      var orientation = this.or.getValueAtTime(time);
      matrix.rotateZ(-rotationZ * this.rz.mult)
        .rotateY(rotationY * this.ry.mult)
        .rotateX(rotationX * this.rx.mult)
        .rotateZ(-orientation[2] * this.or.mult)
        .rotateY(orientation[1] * this.or.mult)
        .rotateX(orientation[0] * this.or.mult);
    }
    if (this.data.p && this.data.p.s) {
      var positionX = this.px.getValueAtTime(time);
      var positionY = this.py.getValueAtTime(time);
      if (this.data.p.z) {
        var positionZ = this.pz.getValueAtTime(time);
        matrix.translate(
          positionX * this.px.mult,
          positionY * this.py.mult,
          -positionZ * this.pz.mult
        );
      } else {
        matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
      }
    } else {
      var position = this.p.getValueAtTime(time);
      matrix.translate(
        position[0] * this.p.mult,
        position[1] * this.p.mult,
        -position[2] * this.p.mult
      );
    }
    return matrix;
    /// /());
  }

  var getTransformProperty = TransformPropertyFactory.getTransformProperty;
  TransformPropertyFactory.getTransformProp;
  };

  var propertyGetProp = PropertyFactory.getProp;
  PropertyFactory.rop;
lue;
  }

  var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
  var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

  function ShapeExpressions() {}
  ShapeExpressions.prototype = {
    vertices: function (prop, time) {
      if (this.k) {
        this.getValue();
      }
      var shapePath = this.v;
      if (time !== undefined) {
        shapePath = this.getValueAtTime(time, 0);
      }
      var i;
      var len = shapePath._length;
      var vertices = shapePath[prop];
      var points = shapePath.v;
      var arr = createSizedArray(len);
      for (i = 0; i < len; i += 1) {
        if (prop === 'i' || prop === 'o') {
          arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
        } else {
          arr[i] = [vertices[i][0], vertices[i][1]];
        }
      }
      return arr;
    },
    points: function (time) {
      return this.vertices('v', time);
    },
    inTangents: function (time) {
      return this.vertices('i', time);
    },
    out);
    },
    c;
    },
    pointOnPath: function (perc, time) {
      var shapePath = this.v;
      if (time !== undefined) {
        shapePath = this.getValueAtTime(time, 0);
      }
      if (!this._segmentsLength) {
        this._segmentsLength = bez.getSegmentsLength(shapePath);
      }

      var segmentsLength = this._segmentsLength;
      var lengths = segmentsLength.lengths;
      var lengthPos = segmentsLength.totalLength * perc;
      var i = 0;
      var len = lengths.length;
      var accumulatedLength = 0;
      var pt;
      while (i < len) {
        if (accumulatedLength + lengths[i].addedLength > lengthPos) {
          var initIndex = i;
          var endIndex = (shapePath.c && i === len - 1) ? 0 : i + 1;
          var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
          pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
          break;
        } else {
          accumulatedLength += lengths[i].addedLength;
        }
        i += 1;
      }
      if (!pt) {
        pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
      }
      return pt;
    },
    vectorOnPath: function (perc, time, vectorType) {
      // perc doesn't use triple equality because it can be a Number object as well as a primitive.
      if (perc == 1) { // eslint-disable-line eqeqeq
        perc = this.v.c;
      } else if (perc == 0) { // eslint-disable-line eqeqeq
        perc = 0.999;
      }
      var pt1 = this.pointOnPath(perc, time);
      var pt2 = this.pointOnPath(perc + 0.001, time);
      var xLength = pt2[0] - pt1[0];
      var yLength = pt2[1] - pt1[1];
      var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
      if (magnitude === 0) {
        return [0, 0];
      }
      var unitVector = vectorType === 'tangent' ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
      return unitVector;
    },
    tangentOnPath: function (perc, time) {
      return this.vectorOnPath(perc, time, 'tangent');
    },
    norm);
    },
    setGroupProperty: expressionHelpers.setGroupProperty,
    getValueAtTime: expressionHelpers.getStaticValueAtTime,
  };
  extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
  extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
  KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
  KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;

  var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
  ShapePropertyFactory.getShrop;
  };
}());

/* global ExpressionManager, TextProperty */

(function addDecorator() {
  function searchExpressions() {
    if (this.data.d.x) {
      this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
      this.addEffect(this.getExpressionValue.bind(this));
      return true;
    }
    return null;
  }

  TextProperty.prototype.getExpressilue;
  };

  TextProperty.prototype.searchP.kf;
  };

  TextProperty.prototype.searchExpressions = searchExpressions;
}());

/* global propertyGroupFactory, PropertyInterface */
/* exported ShapePathInterface */

var ShapePathInterface = (

  function () {
    return function pathInterfaceFactory(shape, view, propertyGroup) {
      var prop = view.sh;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
      prop.setGroupProperty(PropertyInterface('Path', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        path: {
          get: function () {
            if (prop.k) {
              prop.getValue();
            }
            return prop;
          },
        },
        shape: {
             },
        },
        _name: { value: shape.nm },
        ix: { value: shape.ix },
        propertyIndex: { value: shape.ix },
        mn: { value: shape.mn },
        propertyGroup: { value: propertyGroup },
      });
      return interfaceFunction;
    };
  }()
);

/* exported propertyGroupFactory */

var propertyGroupF
  };
}());

/* exported PropertyInterface */

var PropertyInt
  };
}());

/* global ExpressionPropertyInterface, PropertyInterface, propertyGroupFactory, ShapePathInterface */
/* exported ShapeExpressionInterface */

var ShapeExpressionInterface = (function () {
  function iterateElements(shapes, view, propertyGroup) {
    var arr = [];
    var i;
    var len = shapes ? shapes.length : 0;
    for (i = 0; i < len; i += 1) {
      if (shapes[i].ty === 'gr') {
        arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'fl') {
        arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'st') {
        arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'tm') {
        arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'tr') {
        // arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
      } else if (shapes[i].ty === 'el') {
        arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'sr') {
        arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'sh') {
        arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rc') {
        arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rd') {
        arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
      } else if (shapes[i].ty === 'rp') {
        arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
      }
    }
    return arr;ion;
  }

  function groupInterfaceFactory(shape, view, propertyGroup) {
    var interfaceF }
    };
    interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var content = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
    var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
    interfaceFunction.content = content;
    interfaceFunction.transform = transformInterface;
    Object.defineProperty(interfaceFunction, '_name', {
      get: function () {
        return shape.nm;
      },
    });
    // interfaceFunction.content = interfaceFunction;
    interfaceFunction.numProperties = shape.np;
    interfaceFunction.propertyIndex = shape.ix;
    interfaceFunction.nm = shape.nm;
    interfaceFunction.mn = shape.mn;
    return interfaceFunction;ion;
  }

  function strokeInterfaceFactory(shape, view, propertyGroup) {
    var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
    var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGro);
    }
    var i;
    var len = shape.d ? shape.d.length : 0;
    var dashOb = {};
    for (i = 0; i < len; i += 1) {
      addPropertyToDashOb(i);
      view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
   l;
    }
    Object.defineProperties(interfaceFunction, {
      color: {
        get: ExpressionPropertyInterface(view.c),
      },
      opacity: {
        get: ExpressionPropertyInterface(view.o),
      },
      strokeWidth: {
        get: ExpressionPropertyInterface(view.w),
      },
      dash: {
        get: function () {
          return dashOb;
        },
      },
      _name: { value: shape.nm },
      mn: { value: shape.mn },
    });

    view.c.setGroupProperty(PropertyInterface('Color', _propertyGroup));
    view.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
    view.w.setGroupProperty(PropertyInterface('Stroke Width', _propertyGroup));
    return interfaceFunction;ion;ion;ion;ion;ion;ion;ion;
  }
ion;
  };
}());

/* exported TextExpressionInterface */

var TextExpressionInterface = (function () {
  return function (elem) {
    var _prevValue;
    var _sourceT }
    }
    Object.defineProperty(_thisLayerFunction, 'sourceText', {
      get: function () {
        elem.textProperty.getValue();
        var stringValue = elem.textProperty.currentData.t;
        if (stringValue !== _prevValue) {
          elem.textProperty.currentData.t = _prevValue;
          _sourceText = new String(stringValue); // eslint-disable-line no-new-wrappers
          // If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive
          _sourceText.value = stringValue || new String(stringValue); // eslint-disable-line no-new-wrappers
        }
        return _sourceText;
      },
    });
    return _thisLayerFunction;
  };
}());

/* global Matrix, MaskManagerInterface, TransformExpressionInterface, getDescriptor */
/* exported LayerExpressionInterface */

var LayerExpressionInterface = (functioMat;
  }

  function toWorldVec(arr, time) {
    var toWorldMat = this.getMatrix(time);
    toWorldMat.props[12] = 0;
    toWorldMat.props[13] = 0;
    toWorldMat.props[14] = 0;
    return this.applyPoint(toWorldMat, arr);
  }

  function toWorld(arr, time) {
    var toWorldMat = this.getMatrix(time);
    return this.applyPoint(toWorldMat, arr);rr);rr); 0);rr);rr); 1];
  }

  return function (elem) {
    var transformInterfac);
    }
    function _registerEffectsInterface(effects) {
      _thisLayerFunction.effect = effects;
    }
    }
    _thisLayerFunction.getMatrix = getMatrix;
    _thisLayerFunction.invertPoint = invertPoint;
    _thisLayerFunction.applyPoint = applyPoint;
    _thisLayerFunction.toWorld = toWorld;
    _thisLayerFunction.toWorldVec = toWorldVec;
    _thisLayerFunction.fromWorld = fromWorld;
    _thisLayerFunction.fromWorldVec = fromWorldVec;
    _thisLayerFunction.toComp = toWorld;
    _thisLayerFunction.fromComp = fromComp;
    _thisLayerFunction.sampleImage = sampleImage;
    _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
    _thisLayerFunction._elem = elem;
    transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
    var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
    Object.defineProperties(_thisLayerFunction, {
      hasParent: {
           },
      },
      parent: {
           },
      },
      rotation: getDescriptor(transformInterface, 'rotation'),
      scale: getDescriptor(transformInterface, 'scale'),
      position: getDescriptor(transformInterface, 'position'),
      opacity: getDescriptor(transformInterface, 'opacity'),
      anchorPoint: anchorPointDescriptor,
      anchor_point: anchorPointDescriptor,
      transform: {
        get: function () {
          return transformInterface;
        },
      },
      active: {
        get: function () {
          return elem.isInRange;
        },
      },
    });

    _thisLayerFunction.startTime = elem.data.st;
    _thisLayerFunction.index = elem.data.ind;
    _thisLayerFunction.source = elem.data.refId;
    _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
    _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;
    _thisLayerFunction.inPoint = elem.data.ip / elem.comp.globalData.frameRate;
    _thisLayerFunction.outPoint = elem.data.op / elem.comp.globalData.frameRate;
    _thisLayerFunction._name = elem.data.nm;

    _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
    _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
    return _thisLayerFunction;
  };
}());

/* exported CompExpressionInterface */

var CompExpressionInt
  };
}());

/* global ExpressionPropertyInterface */
/* exported TransformExpressionInterface */

var TransformExpressionInterface = (function () {
  return function (transfor }
    }
    Object.defineProperty(_thisFunction, 'rotation', {
      get: ExpressionPropertyInterface(transform.r || transform.rz),
    });

    Object.defineProperty(_thisFunction, 'zRotation', {
      get: ExpressionPropertyInterface(transform.rz || transform.r),
    });

    Object.defineProperty(_thisFunction, 'xRotation', {
      get: ExpressionPropertyInterface(transform.rx),
    });

    Object.defineProperty(_thisFunction, 'yRotation', {
      get: ExpressionPropertyInterface(transform.ry),
    });
    Object.defineProperty(_thisFunction, 'scale', {
      get: ExpressionPropertyInterface(transform.s),
    });
    var _px;
    var _py;
    var _pz;
    var _transformFactory;
    if (transform.p) {
      _transformFactory = ExpressionPropertyInterface(transform.p);
    } else {
      _px = ExpressionPropertyInterface(transform.px);
      _py = ExpressionPropertyInterface(transform.py);
      if (transform.pz) {
        _pz = ExpressionPropertyInterface(transform.pz);
      }
    }
    Object.defineProperty(_thisFunction, 'position', {
      get: function () {
        if (transform.p) {
          return _transformFactory();
        }
        return [
          _px(),
          _py(),
          _pz ? _pz() : 0];
      },
    });

    Object.defineProperty(_thisFunction, 'xPosition', {
      get: ExpressionPropertyInterface(transform.px),
    });

    Object.defineProperty(_thisFunction, 'yPosition', {
      get: ExpressionPropertyInterface(transform.py),
    });

    Object.defineProperty(_thisFunction, 'zPosition', {
      get: ExpressionPropertyInterface(transform.pz),
    });

    Object.defineProperty(_thisFunction, 'anchorPoint', {
      get: ExpressionPropertyInterface(transform.a),
    });

    Object.defineProperty(_thisFunction, 'opacity', {
      get: ExpressionPropertyInterface(transform.o),
    });

    Object.defineProperty(_thisFunction, 'skew', {
      get: ExpressionPropertyInterface(transform.sk),
    });

    Object.defineProperty(_thisFunction, 'skewAxis', {
      get: ExpressionPropertyInterface(transform.sa),
    });

    Object.defineProperty(_thisFunction, 'orientation', {
      get: ExpressionPropertyInterface(transform.or),
    });

    return _thisFunction;
  };
}());

/* exported ProjectInterface */

var ProjectInt
  };
}());

/* global propertyGroupFactory, ExpressionPropertyInterface, PropertyInterface */
/* exported EffectsExpressionInterface */

var EffectsExpressionInterface = (function () {
  var ob = {
    createEffectsInterface: createEffectsInterface,
  };

  function createEffectsInterface(elem, propertyGroup) {
    if (elem.effectsManager) {
      var effectElements = [];
      var effectsData = elem.data.ef;
      var i;
      var len = elem.effectsManager.effectElements.length;
      for (i = 0; i < len; i += 1) {
        effectElements.push(createGroupInterface(effectsData[i], elem.effectsManager.effectElements[i], propertyGroup, elem));
      }

      var effects = elem.data.ef || [];
      var groupInterface = function (name) {
        i = 0;
        len = effects.length;
        while (i < len) {
          if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
            return effectElements[i];
          }
          i += 1;
        }
        return null;
      };
      Object.defineProperty(groupInterface, 'numProperties', {
        get: function () {
          return effects.length;
        },
      });
      return groupInterface;
    }
    return null;
  }

  function createGroupInterface(data, elements, propertyGroup, ele);
    }
    var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);

    var effectElements = [];
    var i;
    var len = data.ef.length;
    for (i = 0; i < len; i += 1) {
      if (data.ef[i].ty === 5) {
        effectElements.push(createGroupInterface(data.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem));
      } else {
        effectElements.push(createValueInterface(elements.effectElements[i], data.ef[i].ty, elem, _propertyGroup));
      }
    }

    if (data.mn === 'ADBE Color Control') {
      Object.defineProperty(groupInterface, 'color', {
           },
      });
    }
    Object.defineProperties(groupInterface, {
      numProperties: {
        get: function () {
          return data.np;
        },
      },
      _name: { value: data.nm },
      propertyGroup: { value: _propertyGroup },
    });
    groupInterface.enabled = data.en !== 0;
    groupInterface.active = groupInterface.enabled;
    return groupInterface;ion;
  }

  return ob;
}());

/* global createSizedArray */
/* exported MaskManagerInterface */

var MaskManagerInterface = (function () {
  function MaskInterface(mask, data) {
    this._mask = mask;
    this._data = data;
  }
  Object.defineProperty(MaskInterface.prototype, 'maskPath', {p;
    },
  });
  Object.defineProperty(MaskInterface.prototype, 'maskOpacity', {0;
    },
  });

  var MaskManager = function (maskManager) {
    var _masksInterfaces = createSizedArray(maskManager.viewData.length);
    var i;
    var len = maskManager.viewData.length;
    for (i = 0; i < len; i += 1) {
      _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
    }

    var maskFunction = function (name) {
      i = 0;
      while (i < len) {
        if (maskManager.masksProperties[i].nm === name) {
          return _masksInterfaces[i];
        }
        i += 1;
      }
      return null;
    };
    return maskFunction;
  };
  return MaskManager;
}());

/* global createTypedArray */
/* exported ExpressionPropertyInterface */

var ExpressionPropertyInterface = (function () {
  var defaultUnidimensionalValue = { pv: 0, v: 0, mult: 1 };
  var defaultMultidimensionalValue = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };

  function completeProperty(expressionValue, property, type) {
    Object.defineProperty(expressionValue, 'velocity', {
 
      },
    });
    expressionValue.numKeys = property.keyframes ? property.keyframes.length : 0;
    expressionValue.key = function (pos) {
      if (!expressionValue.numKeys) {
        return 0;
      }
      var value = '';
      if ('s' in property.keyframes[pos - 1]) {
        value = property.keyframes[pos - 1].s;
      } else if ('e' in property.keyframes[pos - 2]) {
        value = property.keyframes[pos - 2].e;
      } else {
        value = property.keyframes[pos - 2].s;
      }
      var valueProp = type === 'unidimensional' ? new Number(value) : Object.assign({}, value); // eslint-disable-line no-new-wrappers
      valueProp.time = property.keyframes[pos - 1].t / property.elem.comp.globalData.frameRate;
      valueProp.value = type === 'unidimensional' ? value[0] : value;
      return valueProp;
    };
    expressionValue.valueAtTime = property.getValueAtTime;
    expressionValue.speedAtTime = property.getSpeedAtTime;
    expressionValue.velocityAtTime = property.getVelocityAtTime;
    expressionValue.propertyGroup = property.propertyGroup;  };  };
  }

  // TODO: try to avoid using this getter
  function defaultGetter() {
    return defaultUnidimensionalValue;
  }
ty);
  };
}());

/* global expressionHelpers, TextSelectorProp, ExpressionManager */
/* exported TextExpressionSelectorProp */

(function () {
  var TextExpressionSelect  };
  }());

  var propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
  TextSelectorProp.getTextSelectorProp = function (elem, data, arr) {
    if (data.t === 1) {
      return new TextExpressionSelectorPropFactory(elem, data, arr); // eslint-disable-line no-undef
    }
    return propertyGetTextProp(elem, data, arr);
  };
}());

/* global PropertyFactory */
/* exported SliderEffect, AngleEffect, ColorEffect, PointEffect, LayerIndexEffect, MaskIndexEffect, CheckboxEffect, NoValueEffect */

function SliderEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function AngleEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function ColorEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
}
function PointEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
}
function LayerIndexEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
}
function MaskIndexEffect(data, elem, container) {
  this.p = PropertyFactory.getProp(elem, data.v, 0, 0, contaii = {};
}

/* global extendPrototype, SliderEffect, AngleEffect, ColorEffect, PointEffect, CheckboxEffect, LayerIndexEffect,
MaskIndexEffect, NoValueEffect, DynamicPropertyContai;
ment);
}

extendPrototype([DynamicPropertyContainer], GroupEffect);

GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;

GroupEffect.prototy}
  }
};


var lottie = {};

function setLocationHref(href) {
  locationHref = hr;
 flrams);
}

function setQuality(value) {
  if (typeof value === 'string') {
    switch (value) {
      case 'high':
        defaultCurveSegments = 200;
        break;
      default:
      case 'medium':
        defaultCurveSegments = 50;
        break;
      case 'low':
        defaultCurveSegments = 10;
        break;
    }
  } else if (!isNaN(value) && value > 1) {
    defaultCurveSegments = value;
  }
  if (defaultCurveSegments >= 50) {
    roundValues(false);
  } else {
    roundValues(true);
ine;
;
  }
}

lottie.play = animationManager.play;
lottie.pause = animationManager.pause;
lottie.setLocationHref = setLocationHref;
lottie.togglePause = animationManager.togglePause;
lottie.setSpeed = animationManager.setSpeed;
lottie.setDirection = animationManager.setDirection;
lottie.stop = animationManager.stop;
lottie.searchAnimations = searchAnimations;
lottie.registerAnimation = animationManager.registerAnimation;
lottie.loadAnimation = loadAnimation;
lottie.setSubframeRendering = setSubframeRendering;
lottie.resize = animationManager.resize;
// lottie.start = start;
lottie.goToAndStop = animationManager.goToAndStop;
lottie.destroy = animationManager.destroy;
lottie.setQuality = setQuality;
lottie.inBrowser = inBrowser;
lottie.installPlugin = installPlugin;
lottie.freeze = animationManager.freeze;
lottie.unfreeze = animationManager.unfreeze;
lottie.setVolume = animationManager.setVolume;
lottie.mute = animationManager.mute;
lottie.unmute = animationManager.unmute;
lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
lottie.__getFactory = getFactory;
lottie.version = '5;
 null;
}
var standalone = '__[STANDALONE]__';
var animationData = '__[ANIMATIONDATA]__';
var renderer = '';
var queryString;
if (standalone) {
  var scripts = document.getElementsByTagName('script');
  var index = scripts.length - 1;
  var myScript = scripts[index] || {
    src: '',
  };
  queryString = myScript.src.replace(/^[^\?]+\??/, ''); // eslint-disable-line no-useless-escape
  renderer = getQueryVariable('renderer');
}
var readyStateCheckInterval = setInterval(checkReady, 100);

return lottie;
}));

/***/ }),

/***/ "./node_modules/miniraf/dist/miniraf.es.js":
/*!*************************************************!*\
  !*** ./node_modules/miniraf/dist/miniraf.es.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var po
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/rematrix/dist/rematrix.es.js":
/*!***************************************************!*\
  !*** ./node_modules/rematrix/dist/rematrix.es.js ***!
  \***************************************************/
/*! exports provided: format, identity, inverse, multiply, parse, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, skew, skewX, skewY, toString, translate, translateX, translateY, translateZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleX", function() { return scaleX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleY", function() { return scaleY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleZ", function() { return scaleZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skew", function() { return skew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewX", function() { return skewX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewY", function() { return skewY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateX", function() { return translateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateY", function() { return translateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateZ", function() { return translateZ; });
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {alues.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {a matrix
}

/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function inverse(source) {
	var m = format(source);

	var s0 = m[0] * m[5] - m[4] * m[1];
	var s1 = m[0] * m[6] - m[4] * m[2];
	var s2 = m[0] * m[7] - m[4] * m[3];
	var s3 = m[1] * m[6] - m[5] * m[2];
	var s4 = m[1] * m[7] - m[5] * m[3];
	var s5 = m[2] * m[7] - m[6] * m[3];

	var c5 = m[10] * m[15] - m[14] * m[11];
	var c4 = m[9] * m[15] - m[13] * m[11];
	var c3 = m[9] * m[14] - m[13] * m[10];
	var c2 = m[8] * m[15] - m[12] * m[11];
	var c1 = m[8] * m[14] - m[12] * m[10];
	var c0 = m[8] * m[13] - m[12] * m[9];

	var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

	if (isNaN(determinant) || determinant === Infinity) {
		throw new Error('Inverse determinant attempted to divide by zero.')
	}

	return [
		(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
		(-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
		(m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
		(-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,

		(-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
		(m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
		(-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
		(m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,

		(m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
		(-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
		(m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
		(-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,

		(-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
		(m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
		(-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
		(m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
	]
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return n product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return dentity()
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return eZ(angle)
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return rn matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return rn matrix
}

/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleX(scalar) {
	var matrix = identity();
	matrix[0] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleY(scalar) {
	var matrix = identity();
	matrix[5] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleZ(scalar) {
	var matrix = identity();
	matrix[10] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */
function skew(angleX, angleY) {
	var thetaX = Math.PI / 180 * angleX;
	var matrix = identity();

	matrix[4] = Math.tan(thetaX);

	if (angleY) {
		var thetaY = Math.PI / 180 * angleY;
		matrix[1] = Math.tan(thetaY);
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function skewX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[4] = Math.tan(theta);

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */
function skewY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[1] = Math.tan(theta);

	return matrix
}

/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */
function toString(source) {
	return ("matrix3d(" + (format(source).join(', ')) + ")")
}

/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */
function translate(distanceX, distanceY) {
	var matrix = identity();
	matrix[12] = distanceX;

	if (distanceY) {
		matrix[13] = distanceY;
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return rn matrix
}




/***/ }),

/***/ "./node_modules/scrollreveal/dist/scrollreveal.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollreveal/dist/scrollreveal.es.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tealight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tealight */ "./node_modules/tealight/dist/tealight.es.js");
/* harmony import */ var rematrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rematrix */ "./node_modules/rematrix/dist/rematrix.es.js");
/* harmony import */ var miniraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! miniraf */ "./node_modules/miniraf/dist/miniraf.es.js");
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/




var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveu
		});
	}
}

var mount = { success: success, failure: ei-console
	}
}

function rinse() {
	var this$1 = this;

le: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each(Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])('[dpush(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.st;
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(contai[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.stoe.id);
		}
	});

	each(seques[staleId]; });
}

var getPrefiCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlvisible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: vn m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */
				distance =
					axis === 'Y'
						? (element.node.getBoundingClientRect().height * value) / 100
						: (element.node.getBoundingClientRect().width * value) / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["translateY"])(distance));
		} else {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["translateX"])(distance));
		}
	}

	if (config.rotate.x) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateX"])(config.rotate.x)); }
	if (config.rotate.y) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateY"])(config.rotate.y)); }
	if (config.rotate.z) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateZ"])(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["scale"])(0.0002));
		} else {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["scale"])(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["parse"])(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(rematrix__WEBPACK_IMPORTED_MODULE_1__["multiply"]);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		var hasCustomTransition =
			transition.computed && !transition.computed.match(/all 0s|none 0s/);

		if (hasCustomTransition) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fra composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Sty(':');
		}
	});
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each(Object(tealight__WEBPACK_IMPORTED_MODULE_0__["dents[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.mqtd/i.test(agent)
}

vareturTimt rc	}, seq.interval);
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				applyStyle(element.node, element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 ', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	ontainer.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loatialize.call(thi0) - (x < 0) || +x; };
var mathSign = Ma,:tion === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	Object(miniraf__WEBPACK_IMPORTED_M$1.pristine = false;
	});
}

function isTransformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransition' in style
}

var version = "4.0.9";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrransitionSupported(); };

Object.defineProperty(ScrollReturn dan' ? value : debug); }
});

ScrollReveal();

/* harmony default export */ __webpack_exports__["default"] = (ScrollReveal);


/***/ }),

/***/ "./node_modules/tealight/dist/tealight.es.js":
/*!***************************************************!*\
  !*** ./node_modules/tealight/dist/tealight.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/* harmony import */ var is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-dom-node-list */ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js");
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if ( context === void 0 ) context = document;

  if (target instanceof Array) { return target.filter(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"]); }
  if (Object(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) { return [target]; }
  if (Object(is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (tealight);


/***/ }),

/***/ "./node_modules/waypoints/lib/jquery.waypoints.js":
/*!********************************************************!*\
  !*** ./node_modules/waypoints/lib/jquery.waypoints.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blobow.Waoint.Waypodaptesion(window.Zepto)
  }
}())
;

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no staticcall(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no statice.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no staticurn module;
};


/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/adgallery.js":
/*!***************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/adgallery.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var $iframe = $('iframe[data-ad-gallery]');

  if (!$iframe.length) {
    return;
  }

  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js', function () {
    iFrameResize({
      log: false
    }, $iframe.get(0));
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/brands.js":
/*!************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/brands.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $(function () {
    var brandlist = $('.brands-list'),
        width = brandlist.width();

    if ($(window).width() > 768) {
      brandlist.css('height', width * 0.42041);
    } else {
      brandlist.css('height', width * 2.75);
    }
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/content-carousel.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/content-carousel.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.block-content-carousel').each(function () {
    var $block = $(this);
    var $carousel = $block.find('.carousel');
    $carousel.flickity({
      wrapAround: true,
      cellSelector: '.image',
      cellAlign: 'left',
      pageDots: false
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/home-hero.js":
/*!***************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/home-hero.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  // const homeHero = new Glide('.glide', {
  //     type: 'slider',
  //     focusAt: 'center',
  //     perView: 1,
  //     gap: 0,
  // });
  // const personas = document.querySelectorAll('.audience-item');
  // for (let i = 0; i < personas.length; i++) {
  //     personas[i].addEventListener('click', (e) =>{
  //         e.preventDefault();
  //         homeHero.go('='+i)
  //     });
  // }
  // if (document.body.contains(document.querySelector('.glide'))) {
  //     homeHero.mount();
  // }
  $(function () {
    $('#audience-select').on('change', function () {
      if (this.selectedIndex !== 0) {
        window.location = this.value;
      }
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/image-content.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/image-content.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var animationContainer = document.querySelectorAll('.image-content-animation');
  animationContainer.forEach(function (i) {
    var animation = lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.loadAnimation({
      container: i,
      path: i.dataset.animation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: "Image & Content Animation"
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/image-over-content.js":
/*!************************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/image-over-content.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var animationContainer = document.querySelectorAll('.image-over-content-animation');
  animationContainer.forEach(function (i) {
    var animation = lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.loadAnimation({
      container: i,
      path: i.dataset.animation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: "Image over Content Animation"
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/instagram-feed-carousel.js":
/*!*****************************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/instagram-feed-carousel.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var $carousels = $('.block-instagram-feed-carousel');

  if ($carousels.length) {
    $.get(window.ajaxUrl, {
      action: 'instagram'
    }).then(function (data) {
      var result = '';
      template(each);
      });
      bindCarousels(result);
    });
  }

  var bindCarousels = function bindCarousels(result) {
    $carousels.each(function () {
      var $block = $(this);
      var $carousel = $block.find('.carousel');
      $carousel.find('.spinner').remove();
      $carousel.append(result);
      $carousel.flickity({
        wrapAround: true,
        cellSelector: '.insta-card',
        cellAlign: 'center',
        pageDots: false
      });
      $carousel.find('img').on('load', function () {
        $carousel.flickity('resize');
      });
    });
  };
});

var template = function template(item) {
  return "\n  <div class=\"insta-card\">\n    <a href=\"".concat(item.link, "\" target=\"_blank\" class=\"user\">\n      <img src=\"").concat(item.user.profile_picture, "\" />\n      <span>").concat(item.user.username, "</span>\n      <span>\u2022</span>\n      <span>Follow</span>\n    </a>\n    <figure class=\"image\">\n      <a href=\"").concat(item.link, "\" target=\"_blank\">\n        <img src=\"").concat(item.images.standard_resolution.url, "\" />\n      </a>\n    </figure>\n  </div>\n");
};

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/news-bar.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/news-bar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.block-news-bar').each(function () {
    var $block = $(this);
    var timer = parseInt($block.data('timer'));
    $block.flickity({
      wrapAround: true,
      cellSelector: 'article',
      draggable: false,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: timer ? timer * 1000 : 8000
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/page-form-section.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/page-form-section.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! waypoints/lib/jquery.waypoints */ "./node_modules/waypoints/lib/jquery.waypoints.js");
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_1__);
// import { setMinHeight } from '../minheight';


/* harmony default export */ __webpack_exports__["default"] = (function (s) {// $(window).on('load', function(){
  //   $('.contact-form-landing-page').each(function () {
  //       const $height = $(this);
  //       const $container = $height.parent('.block-form-section');
  //       //setMinHeight($container, $height, 400);
  //       s.window.on('resize', () => _throttle(() => {
  //           if ($(window).width() > 767) {
  //               //setMinHeight($container, $height, 400);
  //           }
  //       }, 250));
  //   });
  // });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/people-slider.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/people-slider.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.block-people-slider').each(function () {
    var $block = $(this);
    var $slider = $block.find('.slider');
    $slider.flickity({
      wrapAround: true,
      cellSelector: 'article'
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/products-grid.js":
/*!*******************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/products-grid.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./wp-content/themes/superawesome/js/utils.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.block-products-grid').each(function () {
    var $block = $(this);
    var $titles = $block.find('article h4');
    var $paragraphs = $block.find('article p');
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setMinHeight"])($titles);
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setMinHeight"])($paragraphs);
    s.window.on('resize', function () {
      return lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setMinHeight"])($titles);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setMinHeight"])($paragraphs);
      }, 250);
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/resources-slider.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/resources-slider.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.block-resources-slider').each(function () {
    var $block = $(this);
    var $slider = $block.find('.block-resources-slider__slider');
    $slider.flickity({
      cellSelector: '.block-resources-slider__slide',
      pageDots: true,
      prevNextButtons: false,
      // fade: true,
      wrapAround: true,
      autoPlay: 5000
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/subscribe-newsletter.js":
/*!**************************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/subscribe-newsletter.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.block-subscribe-newsletter').each(function () {
    var $block = $(this);
    var $btn = $block.find('.btner__code').show();
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/timezone-columns.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/timezone-columns.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var timezones = [];
  var $timezones = $('section.timezone-columns p[data-timezo timezones.push(tz);
  });

  if (!timezones.length) {
    return;
  }

  $.get(window.ajaxUrl, {
    action: 'timezone_info',
    timezones: timezones.join(',')
  }).then(function (data) {
    $timezones.each(function (i) {
      var $tz = $((formattedDate);
      }, 1000);
    });
  });
});

var getFormattedDateWithOffset = function getFormattedDateWithOffset(offsetSeconds) {
  var d = new Date();
  var utc = d.getTime() + d.getTimezoneOffset() * 60 * 1000;
  var localeDate = new Date(utc + offsetSeconds * 1000);
  var hours = localeDate.getHours();
  return padInteger(hours) + ':' + padInteger(localeDate.getMinutes()) + ' ' + (hours < 12 ? 'AM' : 'PM');
};

var padInteger = function padInteger(num) {
  return (num + '').length === 1 ? '0' + num : num;
};

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/vertical-slides.js":
/*!*********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/vertical-slides.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var scrolling = false;
  var contentBlock = $('.block-vertical-slides'),
      verticalNavigation = $('.cd-vertical-nav');
  $(window).on('scroll', checkScroll); //smooth scroll to the selected section

  $.fn.visible = function (partial) {
    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };

  function checkScroll() {
    if (!scrolling) {
      scrolling = true;
      $(contentBlock).each(function (i, el, n) {
        var el = $(el),
            n = $(verticalNavigation);

        if (el.visible(true)) {
          n.addClass("fix-vn");
        } else {
          n.removeClass("fix-vn");
        }
      });
      !window.requestAnimationFrame ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
    }
  }

  function updateSections() {
    scrolling = false;
  }

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: '50%'
    }
  });
  TweenLite.defaultEase = Linear.easeNone;

  if ($(window).width() < 768) {
    controller.enabled(false);
  } // get all slides


  var slides = document.querySelectorAll(".cd-section"); // controller.scrollTo(function (newpos) {
  // 	TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
  // });

  function sm($s) {
    var target = $($s).find(".cd-section-container"),
        tl = new TimelineMax();
    tl.to(target, 0.5, {
      opacity: 0
    }, 0.5);
    new ScrollMagic.Scene({
      triggerElement: $s
    }).setPin($s, {
      pushFollowers: false
    }).setTween(tl) //.addIndicators() // add indicators (requires plugin)
    .addTo(controller).setClassToggle("." + $s.id, "active");
  }

  for (var i = 0; i < slides.length; i++) {
    sm(slides[i]);
  }

  $(window).on('resize', function () {
    return lodash_throttle__WEBPACK_IMPOR    sm(slides[i]);
    }, 250);
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/what-we-do.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/what-we-do.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./wp-content/themes/superawesome/js/utils.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.block-what-we-do').each(function () {
    var $block = $(this);
    var $titles = $block.find('article h4');
    var $paragraphs = $block.find('article p');
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($titles);
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($paragraphs);
    s.window.on('resize', function () {
      return lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(function () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($titles);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($paragraphs);
      }, 250);
    });
  });
  $('.block-what-we-do').each(function () {
    var $block = $(this);
    var $titles = $block.find('article h4');
    var $paragraphs = $block.find('article p');
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($titles);
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($paragraphs);
    s.window.on('resize', function () {
      return lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(function () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($titles);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setMinHeight"])($paragraphs);
      }, 250);
    });
  });
  var scrolling = false;
  var contentBlock = $('.block-what-we-do'),
      contentSections = $('.cd-section'),
      verticalNavigation = $('.cd-vertical-nav'),
      navigationItems = verticalNavigation.find('a');
  $(window).on('scroll', checkScroll); //smooth scroll to the selected smpareTop >= viewTop;
  };

  function checkScroll() {
    if (!scrolling) {
      scrolling = true;
      $(contentBlock).each(function (i, el, n) {
        var el = $(el),
            n = $(verticalNavigation);

        if (el.visible(true)) {
          n.addClass("fix-vn");
        } else {
          n.removeClass("fix-vn");
        }
      });
      !window.requestAnimationFrame ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
    }
  }

  function updateSections() {
    var halfWindowHeight = $(window).height() / 2,
        hWH = $(window).height() / 1.5,
        scrollTop = $(window).scrollTop();
    contentSections.each(function () {
      var section = $(this),
          sectionContent = $('.content-wrapper'),
          sectionId = section.attr('id'),
          navigationItem = navigationItems.filter('[href^="#' + sectionId + '"]');
      navigationItem.closest('.active').removeClass('active');
      section.offset().top - halfWindowHeight < scrollTop && section.offset().top + sectionContent.height() - halfWindowHeight > scrollTop ? navigationItem.addClass('active') : navigationItem.removeClass('active');
    });
    scrolling = false;
  }
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/blocks/who-we-are.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/blocks/who-we-are.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var animationContainer = document.querySelectorAll('.who-we-are-animation');
  animationContainer.forEach(function (i) {
    var animation = lottie_web__WEBPACK_IMPORTED_MODULE_2___default.a.loadAnimation({
      container: i,
      path: i.dataset.animation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: "Demo Animation"
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/blog.js":
/*!**************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/blog.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! waypoints/lib/jquery.waypoints */ "./node_modules/waypoints/lib/jquery.waypoints.js");
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var $target = $('[data-append-posts]').first();

  if (!$target.length) {
    return;
  }

  $target.waypoint({
    handler: function handler() {
      var fetchUrl = $target.data('appendPosts');

      if (fetchUrl) {
        $target.find('.spinner').addClass('spinner--visible');
        fetchPosts(fetchUrl, function ($html, url) {
          $target.data('appendPosts', url);
          $html.insertBefore($target);
          setTimeout(function () {
            Waypoint.refreshAll();
          }, 100);
          $target.find('.spinner').removeClass('spinner--visible');
        });
      }
    },
    offset: 'bottom-in-view'
  });
});
var fetching = 0;

var fetchPosts = function fetchPosts(url, cb) {
  if (url && !fetching) {
    fetching = 1;
    $.get(url, function (html) {
      var $html = $(html);
      var $content = $html.find('[data-posts]').first();
      var next = $html.find('[data-append-posts]').data('appendPosts');
      cb($content, next);
    }).always(function () {
      fetching = 0;
    });
  }
};

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/chart-content.js":
/*!***********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/chart-content.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _minheight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../minheight */ "./wp-content/themes/superawesome/js/minheight.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! waypoints/lib/jquery.waypoints */ "./node_modules/waypoints/lib/jquery.waypoints.js");
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _maxheight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maxheight */ "./wp-content/themes/superawesome/js/maxheight.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(document).ready(function () {
    $('.card-contents-container').each(function () {
      var _this = this;

      var $height = $(this);
      var $container = $height.prev('.card-container');
      Object(_minheight__WEBPACK_IMPORTED_MODULE_1__["setMinHeight"])($container, $height);
      new Waypoint({
        element: $height,
        handler: function handler(direction) {
          if (direction === 'down') {
            var $tar = $(this);
            var $check = $tar.prev('.card-container');
            Object(_minheight__WEBPACK_IMPORTED_MODULE_1__["setMinHeight"])($check, $tar);
          }
        },
        offset: '150%'
      });
      $(window).on('resize', function () {
        return lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          var $target = $(_this);
          var $change = $target.prev('.card-container');
          Object(_minheight__WEBPACK_IMPORTED_MODULE_1__["setMinHeight"])($change, $target);
        }, 250);
      });
    });
    $('.svg-container').each(function () {
      var $svg = $(this);
      var $cheight = $svg.prev('.container').find('.card-contents-container');
      Object(_maxheight__WEBPACK_IMPORTED_MODULE_4__["setMaxHeight"])($svg, $cheight, 45);
    });
    $('#image-7829').each(function () {
      var $svg = $(this);
      var $cheight = $svg.prev('.container').find('.card-contents-container');
      Object(_maxheight__WEBPACK_IMPORTED_MODULE_4__["setMaxHeight"])($svg, $cheight, 70);
    });
    $('.svg-container-inversed').each(function () {
      var $svg = $(this);
      var $cheight = $svg.prev('.container');
      Object(_maxheight__WEBPACK_IMPORTED_MODULE_4__["setMaxHeight"])($svg, $cheight, 100);
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/counter.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/counter.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery_countto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery-countto */ "./node_modules/jquery-countto/jquery.countTo.js");
/* harmony import */ var jquery_countto__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery_countto__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! waypoints/lib/jquery.waypoints */ "./node_modules/waypoints/lib/jquery.waypoints.js");
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('[data-counter]').each(function () {
    var _this = this;

    var inc = parseInt($(this).data('incrementPerSecond')) * 2;
    var fr = parseInt($(this).data('from'));
    var mn = 10000000;
    var to = fr + mn;
    var completesIn = mn / inc * 1000;
    $(this).countTo({
      from: fr,
      to: to,
      speed: completesIn,
      formatter: function formatter(value, options) {
        var all = numberWithCommas(value.toFixed(options.decimals)).split('');
        $(_this).html(all.map(function (i) {
          return "<span class=\"digit ".concat(i === ',' ? 'comma' : '', "\">").concat(i, "</span>");
        }));
      },
      renderWith: 'html'
    });
  });
  $('[data-counter-to]').each(function () {
    var _this2 = this;

    var fr = parseInt($(this).data('from'));
    var to = parseInt($(this).data('to'));
    ;
    var completesIn = 3000;
    var $target = $(this);
    $target.waypoint({
      handler: function handler() {
        $target.countTo({
          from: fr,
          to: to,
          speed: completesIn,
          formatter: function formatter(value, options) {
            var all = numberWithCommas(value.toFixed(options.decimals)).split('');
            $(_this2).html(all.map(function (i) {
              return "<span class=\"digit ".concat(i === ',' ? 'comma' : '', "\">").concat(i, "</span>");
            }));
          },
          renderWith: 'html'
        });
      },
      offset: 'bottom-in-view'
    });
  });
});d{3})+(?!\d))/g, ",");
}; // Experimental
// const launchDate = new Date('June 27 2019');
// const secondsElapsedSinceLaunch = (new Date().getTime() - launchDate.getTime())/1000;

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/faq-search.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/faq-search.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var $accordion = $('#faq-accordion');
  var $search = $('#faq-search');
  var $results = $("#faq-results");

  if (!$accordion.length || !$search.length) {
    return;
  }
(updateResults, 10);
  });

  var updateResults = function updateResults() {
    var value = $search.val();
    var results = -1;

    if (value && value.length > 2) {
      results = 0;
      $accordion.addClass('search-active');
      $accordion.find(".card").each(function () {
        var text = $(this).text();

        if (text.indexOf(value) > 0) {
          $(this).addClass('result-found');
          results++;
        }
      });
    } else {
      $accordion.removeClass('search-active');
      $accordion.find('.card').removeClass('result-found');
    }

    if (results === 0) {
      $accordion.removeClass('search-active');
      $accordion.find('.card').removeClass('result-found');
      $results.show();
    } else {
      $results.hide();
    }
  };

  $results.find('a').click(function (e) {
    e.preventDefault();
    $search.val('').focus();
    updateResults();
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/fullpage.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/fullpage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.anchor */ "./node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_26__);




























var _this = undefined;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  (function (root, window, document, factory, undefined) {
    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
      // AMD. Register as an anonymous module.
      define(function () {
        root.fullpage = factory(window, document);
        return root.fullpage;
      });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
      // Node. Does not work with strict CommonJS.
      module.exports = factory(window, document);
    } else {
      // Browser globals.
      window.fullpage = factory(window, document);
    }
  })(_this, window, document, function (window, document) {
    'use strict'; // keeping central set of classnames and selectors

    var WRAPPER = 'fullpage-wrapper';
    var WRAPPER_SEL = '.' + WRAPPER; // slimscroll

    var SCROLLABLE = 'fp-scrollable';
    var SCROLLABLE_SEL = '.' + SCROLLABLE; // util

    var RESPONSIVE = 'fp-responsive';
    var NO_TRANSITION = 'fp-notransition';
    var DESTROYED = 'fp-destroyed';
    var ENABLED = 'fp-enabled';
    var VIEWING_PREFIX = 'fp-viewing';
    var ACTIVE = 'active';
    var ACTIVE_SEL = '.' + ACTIVE;
    var COMPLETELY = 'fp-completely';
    var COMPLETELY_SEL = '.' + COMPLETELY; // section

    var SECTION_DEFAULT_SEL = '.section';
    var SECTION = 'fp-section';
    var SECTION_SEL = '.' + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL = 'fp-tableCell';
    var TABLE_CELL_SEL = '.' + TABLE_CELL;
    var AUTO_HEIGHT = 'fp-auto-height';
    var AUTO_HEIGHT_SEL = '.' + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL = 'fp-normal-scroll';
    var NORMAL_SCROLL_SEL = '.' + NORMAL_SCROLL; // section nav

    var SECTION_NAV = 'fp-nav';
    var SECTION_NAV_SEL = '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP = 'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; // slide

    var SLIDE_DEFAULT_SEL = '.slide';
    var SLIDE = 'fp-slide';
    var SLIDE_SEL = '.' + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = 'fp-slides';
    var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER = 'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
    var TABLE = 'fp-table'; // slide nav

    var SLIDES_NAV = 'fp-slidesNav';
    var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW = 'fp-controlArrow';
    var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
    var SLIDES_PREV = 'fp-prev';
    var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV = SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT = 'fp-next';
    var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT = SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    function initialise(containerSelector, options) {
      var isOK = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$').test(options['li' + 'cen' + 'seK' + 'e' + 'y']) || document.domain.indexOf('al' + 'varotri' + 'go' + '.' + 'com') > -1; // cache common elements

      var $htmlBody = $('html, body');
      var $html = $('html')[0];
      var $body = $('body')[0]; //only once my friend!

      if (hasClass($html, ENABLED)) {
        displayWarnings();
        return;
      }

      var FP = {}; // Creating some defaults, extending them with any options that were provided

      options = deepExtend({
        //navigation
        menu: false,
        anchors: [],
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
        scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
        scrollOverflowOptions: null,
        touchSensitivity: 5,
        touchWrapper: typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector,
        bigSectionsDestination: null,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        //design
        controlArrows: true,
        controlArrowColor: '#fff',
        verticalCentered: true,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        //backwards compabitility with responsiveWiddth
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
          type: 'reveal',
          percentage: 62,
          property: 'translate'
        },
        cards: false,
        cardsOptions: {
          perspective: 100,
          fadeContent: true,
          fadeBackground: true
        },
        //Custom selectors
        sectionSelector: SECTION_DEFAULT_SEL,
        slideSelector: SLIDE_DEFAULT_SEL,
        //events
        v2compatible: false,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        lazyLoading: true
      }, options); //flag to avoid very fast sliding for landscape sliders

      var slideMoving = false;
      var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
      var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
      var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector;
      var windowsHeight = getWindowHeight();
      var windowsWidth = getWindowWidth();
      var isResizing = false;
      var isWindowFocused = true;
      var lastScrolledDestiny;
      var lastScrolledSlide;
      var canScroll = true;
      var scrollings = [];
      var controlPressed;
      var startingSection;
      var isScrollAllowed = {};
      isScrollAllowed.m = {
        'up': true,
        'down': true,
        'left': true,
        'right': true
      };
      isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
      var MSPointer = getMSPointer();
      var events = {
        touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer.move,
        touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer.down
      };
      var scrollBarHandler; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

      var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; //cheks for passive event support

      var g_supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            g_supportsPassive = true;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
      } catch (e) {} //timeouts


      var resizeId;
      var resizeHandlerId;
      var afterSectionLoadsId;
      var afterSlideLoadsId;
      var scrollId;
      var scrollId2;
      var keydownId;
      var g_doubleCheckHeightId;
      var originals = deepExtend({}, options); //deep copy

      var activeAnimation;
      var g_initialAnchorsInDom = false;
      var g_canFireMouseEnterNormalScroll = true;
      var g_mediaLoadedId;
      var g_transitionLapseId;
      var extensions = ['parallax', 'scrollOverflowReset', 'dragAndMove', 'offsetSections', 'fadingEffect', 'responsiveSlides', 'continuousHorizontal', 'interlockedSlides', 'scrollHorizontally', 'resetSliders', 'cards'];
      displayWarnings(); //easeInOutCubic animation included in the plugin

      window.fp_easings = deepExtend(window.fp_easings, { * t + 2) + b;
        }
      });
      /**
      * Sets the autoScroll option.
      * It changes the scroll bar visibility and the history of the site as a result.
      */

      function setAutoScrolling(value, type) {
        //removing the transformation
        if (!value) {
          silentScroll(0);
        }

        setVariableState('autoScrolling', value, type);
        var element = $(SECTION_ACTIVE_SEL)[0];

        if (options.autoScrolling && !options.scrollBar) {
          css($htmlBody, {
            'overflow': 'hidden',
            'height': '100%'
          });
          setRecordHistory(originals.recordHistory, 'internal'); //for IE touch devices

          css(container, {
            '-ms-touch-action': 'none',
            'touch-action': 'none'
          });

          if (element != null) {
            //moving the container up
            silentScroll(element.offsetTop);
          }
        } else {
          css($htmlBody, {
            'overflow': 'visible',
            'height': 'initial'
          });
          var recordHistory = !options.autoScrolling ? false : originals.recordHistory;
          setRecordHistory(recordHistory, 'internal'); //for IE touch devices

          css(container, {
            '-ms-touch-action': '',
            'touch-action': ''
          }); //scrolling the page to the section with no animation

          if (element != null) {
            var scrollSettings = getScrollSettings(element.offsetTop);
            scrollSettings.element.scrollTo(0, scrollSettings.options);
          }
        }
      }
      /**
      * Defines wheter to record the history for each hash change in the URL.
      */


      function setRecordHistory(value, type) {
        setVariableState('recordHistory', value, type);
      }
      /**
      * Defines the scrolling speed
      */


      function setScrollingSpeed(value, type) {
        setVariableState('scrollingSpeed', value, type);
      }
      /**
      * Sets fitTo', value, type);
      }
      /**
      * Sets lockAnchors = value;
      }
      /**
      * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trler();
        }
      }
      /**
      * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
      * Optionally a second parameter can be used to specify the direction for which the action will be applied.
      *
      * @param directions string containing the direction or directions separated by comma.
      */


      function setAllowScrolling(value, directions) {
        if (typeof directions !== 'undefined') {
          directions = directions.replace(/ /g, '').split(',');
          directions.forEach(function (direction) {
            setIsScrollAllowed(value, direction, 'm');
          });
        } else {
          setIsScrollAllowed(value, 'all', 'm');
        }
      }
      /**
      * Adds or remove the mouse wheel hijacking
      */


      function setMouseHijack(value) {
        if (value) {
          setMouseWheelScrolling(true);
          addTouchHandler();
        } else {
          setMouseWheelScrolling(false);
          removeTouchHandler();
        }
      }
      /**
      * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
      */


      function setKeyboardScrolling(value, directions) {
        if (typeof directions !== 'undefined') {
          directions = directions.replace(/ /g, '').split(',');
    ction, 'k');
          });
        } else {
          setIsScrollAllowed(value, 'all', 'k');
          options.keyboardScrolling = value;
        }
      }
      /**
      * Moves the page up one section.
      */


      function moveSectionUp() {
        var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); //looping to the bottom if there's no more sections above

        if (!prev && (options.loopTop || options.continuousVertical)) {
          prev = last($(SECTION_SEL));
        }

        if (prev != null) {
          scrollPage(prev, null, true);
        }
      }
      /**
      * Moves the page down one section.
      */


      function moveSectionDown() {
        var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); //looping to the top if there's no more sections below

        if (!next && (options.loopBottom || options.continuousVertical)) {
          next = $(SECTION_SEL)[0];
        }

        if (next != null) {
          scrollPage(next, null, false);
        }
      }
      /**
      * Moves the page to the given section and slide with no animation.
      * Anchors or index positions can be used as ed, 'internal');
      }
      /**
      * Moves the page to the given section and slide.
      * Anchors or index positions can be used as params.
      */


      function moveTo(sectionAnchor, slideAnchor) {
        var destiny = getSectionByAnchor(sectionAnchor);

        if (typeof slideAnchor !== 'undefined') {
          scrollPageAndSlide(sectionAnchor, slideAnchor);
        } else if (destiny != null) {
          scrollPage(destiny);
        }
      }
      /**
      * Slides right the slider of the active section.
      * Optional `section` param.
      */


      function moveSlideRight(section) {
        moveSlide('right', section);
      }
      /**
      * Slides left the slider of the active section.
      * Optional `section`left', section);
      }
      /**
       * When resizing is finished, we adjust the slides sizes and positions
       */


      function reBuild(resizing) {
        if (hasClass(container, DESTROYED)) {
          return;
        } //nothing to do if the plugin was destroyed


        isResizing = true; //updating global vars

        windowsHeight = getWindowHeight();
        windowsWidth = getWindowWidth();
        var sections = $(SECTION_SEL);

        for (var i = 0; i < sections.length; ++i) {
          var section = sections[i];
          var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
          var slides = $(SLIDE_SEL, section); //adjusting the height of the table-cell for IE and Firefox

          if (options.verticalCentered) {
            css($(TABLE_CELL_SEL, section), {
              'height': getTableHeight(section) + 'px'
            });
          }

          css(section, {
            'height': windowsHeight + 'px'
          }); //adjusting the position fo the FULL WIDTH slides...

          if (slides.length > 1) {
            landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
          }
        }

        if (options.scrollOverflow) {
          scrollBarHandler.createScrollBarForAll();
        }

        var activeSection = $(SECTION_ACTIVE_SEL)[0];
        var sectionIndex = index(activeSection, SECTION_SEL); //isn't it the first section?

        if (sectionIndex) {
          //adjusting the position for the current section
          silentMoveTo(sectionIndex + 1);
        }

        if (isFunction(options.afterResize) && resizing) {
          options.afterResize.call(container, window.innerWidth, window.innerHeight);
        }

        if (isFunction(options.afterReBuild) && !resizing) {
          options.afterReBuild.call(container);
        }
      }
      /**
      * Determines whether fullpage.js is in responsive mode dy, RESPONSIVE);
      }
      /**
      * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
      * are smaller than the set limit values.
      */


      function setResponsive(active) {
        var isResponsive = isResponsiveMode();

        if (active) {
          if (!isResponsive) {
            setAutoScrolling(false, 'internal');
            setFitToSection(false, 'internal');
            hide($(SECTION_NAV_SEL));
            addClass($body, RESPONSIVE);

            if (isFunction(options.afterResponsive)) {
              options.afterResponsive.call(container, active);
            } //when on page load, we will remove scrolloverflow if necessary


            if (options.scrollOverflow) {
              scrollBarHandler.createScrollBarForAll();
            }
          }
        } else if (isResponsive) {
          setAutoScrolling(originals.autoScrolling, 'internal');
          setFitToSection(originals.autoScrolling, 'internal');
          show($(SECTION_NAV_SEL));
          removeClass($body, RESPONSIVE);

          if (isFunction(options.afterResponsive)) {
            options.afterResponsive.call(container, active);
          }
        }
      }

      if (container) {
        //public functions
        FP.version = '3.1.0';
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

        FP.getFullpageData = function () {
          return options;
        };

        FP.destroy = destroy;
        FP.getActiveSection = getActiveSection;
        FP.getActiveSlide = getActiveSlide;
        FP.test = {
          top: '0px',
          translate3d: 'translate3d(0px, 0px, 0px)',
          translate3dH: function () {
            var a = [];

            for (var i = 0; i < $(options.sectionSelector, container).length; i++) {
              a.push('translate3d(0px, 0px, 0px)');
            }

            return a;
          }(),
          left: function () {
            var a = [];

            for (var i = 0; i < $(options.sectionSelector, container).length; i++) {
              a.push(0);
            }

            return a;
          }(),
          options: options,
          setAutoScrolling: setAutoScrolling
        }; //functions we want to share across files but which are not
        //mean to be used on their own by developers

        FP.shared = {
          afterRenderActions: afterRenderActions,
          isNormalScrollElement: false
        };
        window.fullpage_api = FP; //using jQuery initialization? Creating the $.fn.fullpage object

        if (options.$) {
         ] = FP[key];
          });
        }

        init();
        bindEvents();
      }

      function init() {
        //if css3 is not supported, it will use jQuery animations
        if (options.css3) {
          options.css3 = support3d();
        }

        options.scrollBar = options.scrollBar || options.hybrid;
        setOptionsFromDOM();
        prepareDom();
        setAllowScrolling(true);
        setMouseHijack(true);
        setAutoScrolling(options.autoScrolling, 'internal');
        responsive(); //setting the class for the body element

        setBodyClass();

        if (document.readyState === 'complete') {
          scrollToAnchor();
        }

        window.addEventListener('load', scrollToAnchor); //if we use scrollOverflow we'll fire afterRender in the scrolloverflow file

        if (!options.scrollOverflow) {
          afterRenderActions();
        }

        doubleCheckHeight();
      }

      function bindEvents() {
        //when scrolling...
        window.addEventListener('scroll', scrollHandler); //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)

        window.addEventListener('hashchange', hashChangeHandler); // on window focus

        window.addEventListener('focus', focusHandler); //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.

        window.addEventListener('blur', blurHandler); //when resizing the site, we adjust the heights of the sections, slimScroll...

        window.addEventListener('resize', resizeHandler); //Sliding with arrow keys, both, vertical and horizontal

        document.addEventListener('keydown', keydownHandler); //to prevent scrolling while zooming

        document.addEventListener('keyup', keyUpHandler); //Scrolls to the section when clicking the navigation bullet
        //simulating the jQuery .on('click') event using delegation

        ['click', 'touchstart'].forEach(function (eventName) {
          document.addEventListener(eventName, delegatedEvents);
        });
        /**
        * Applying normalScroll elements.
        * Ignoring the scrolls over the specified selectors.
        */

        if (options.normalScrollElements) {
          ['mouseenter', 'touchstart'].forEach(function (eventName) {
            forMouseLeaveOrTouch(eventName, false);
          });
          ['mouseleave', 'touchend'].forEach(function (eventName) {
            forMouseLeaveOrTouch(eventName, true);
          });
        }
      }

      function delegatedEvents(e) {
        var target = e.target;

        if (target && closest(target, SECTION_NAV_SEL + ' a')) {
          sectionBulletHandler.call(target, e);
        } else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) {
          tooltipTextHandler.call(target);
        } else if (matches(target, SLIDES_ARROW_SEL)) {
          slideArrowHandler.call(target, e);
        } else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) {
          slideBulletHandler.call(target, e);
        } else if (closest(target, options.menu + ' [data-menuanchor]')) {
          menuItemsHandler.call(target, e);
        }
      }

      function forMouseLeaveOrTouch(eventName, allowScrolling) {
        //a way to pass arguments to the onMouseEnterOrLeave function
        document['fp_' + eventName] = allowScrolling;
        document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
      }

      function onMouseEnterOrLeave(e) {
        var type = e.type;
        var isInsideOneNormalScroll = false;
        var isUsingScrollOverflow = options.scrollOverflow; //onMouseLeave will use the destination target, not the one we are moving away from

        var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?

        if (target == document || !target) {
          setMouseHijack(true);

          if (isUsingScrollOverflow) {
            options.scrollOverflowHandler.setIscroll(target, true);
          }

          return;
        }

        if (type === 'touchend') {
          g_canFireMouseEnterNormalScroll = false;
          setTimeout(function () {
            g_canFireMouseEnterNormalScroll = true;
          }, 800);
        } //preventing mouseenter event to do anything when coming from a touchEnd event
        //fixing issue #3576


        if (type === 'mouseenter' && !g_canFireMouseEnterNormalScroll) {
          return;
        }

        var normalSelectors = options.normalScrollElements.split(',');
        normalSelectors.forEach(function (normalSelector) {
          if (!isInsideOneNormalScroll) {
            var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661

            var isNormalScrollChildFocused = closest(target, normalSelector);

            if (isNormalScrollTarget || isNormalScrollChildFocused) {
              if (!FP.shared.isNormalScrollElement) {
                setMouseHijack(false);

                if (isUsingScrollOverflow) {
                  options.scrollOverflowHandler.setIscroll(target, false);
                }
              }

              FP.shared.isNormalScrollElement = true;
              isInsideOneNormalScroll = true;
            }
          }
        }); //not inside a single normal scroll element anymore?

        if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
          setMouseHijack(true);

          if (isUsingScrollOverflow) {
            options.scrollOverflowHandler.setIscroll(target, true);
          }

          FP.shared.isNormalScrollElement = false;
        }
      }
      /**
      * Checks the viewport a few times on a define interval of time to 
      * see if it has changed in any of those. If that's the case, it resizes.
      */


      function doubleCheckHeight() {
        for (var i = 1; i < 4; i++) {
          g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);
        }
      }
      /**
      * Adjusts a section to the viewport if it has changed.
      */


      function adjustToNewViewport() {
        var newWindowHeight = getWindowHeight();
        var newWindowWidth = getWindowWidth();

        if (windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
          windowsHeight = newWindowHeight;
          windowsWidth = newWindowWidth;
          reBuild(true);
        }
      }
      /**
      * Setting options from DOM elements if they are not provided.
      */


      function setOptionsFromDOM() {
        //no anchors option? Checking for them in the DOM attributes
        if (!options.anchors.length) {
          var anchorsAttribute = '[data-anchor]';
          var anchors = $(options.sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);

          if (anchors.length && anchors.length === $(options.sectionSelector, container).length) {
            g_initialAnchorsInDom = true;
            anchors.forEach(function (item) {
              options.anchors.push(item.getAttribute('data-anchor').toString());
            });
          }
        } //no tooltips option? Checking for them in the DOM attributes


        if (!options.navigationTooltips.length) {
          var tooltipsAttribute = '[data-tooltip]';
          var tooltips = $(options.sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);

          if (tooltips.length) {
    String());
            });
          }
        }
      }
      /**
      * Works over the DOM structure to set it up for the current fullpage options.
      */


      function prepareDom() {
        css(container, {
          'height': '100%',
          'position': 'relative'
        }); //adding a class to recognize the container internally in the code

        addClass(container, WRAPPER);
        addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502

        windowsHeight = getWindowHeight();
        removeClass(container, DESTROYED); //in case it was destroyed before initializing it again

        addInternalSelectors();
        var sections = $(SECTION_SEL); //styling the sections / slides / menu

        for (var i = 0; i < sections.length; i++) {
          var sectionIndex = i;
          var section = sections[i];
          var slides = $(SLIDE_SEL, section);
          var numSlides = slides.length; //caching the original styles to add them back on destroy('all')

          section.setAttribute('data-fp-styles', section.getAttribute('style'));
          styleSection(section, sectionIndex);
          styleMenu(section, sectionIndex); // if there's any slide

          if (numSlides > 0) {
            styleSlides(section, slides, numSlides);
          } else {
            if (options.verticalCentered) {
              addTableClass(section);
            }
          }
        } //fixed elements need to be moved out of the plugin container due to problems with CSS3.


        if (options.fixedElements && options.css3) {
          $(options.fixedElements).forEach(function (item) {
            $body.appendChild(item);
          });
        } //vertical centered of the navigation + active bullet


        if (options.navigation) {
          addVerticalNavigation();
        }

        enableYoutubeAPI();

        if (options.scrollOverflow) {
          scrollBarHandler = options.scrollOverflowHandler.init(options);
        }
      }
      /**
      * Styles the horizontal slides for a section.
      */


      function styleSlides(section, slides, numSlides) {
        var sliderWidth = numSlides * 100;
        var slideWidth = 100 / numSlides;
        var slidesWrapper = document.createElement('div');
        slidesWrapper.className = SLIDES_WRAPPER; //fp-slides

        wrapAll(slides, slidesWrapper);
        var slidesContainer = document.createElement('div');
        slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer

        wrapAll(slides, slidesContainer);
        css($(SLIDES_CONTAINER_SEL, section), {
          'width': sliderWidth + '%'
        });

        if (numSlides > 1) {
          if (options.controlArrows) {
            createSlideArrows(section);
          }

          if (options.slidesNavigation) {
            addSlidesNavigation(section, numSlides);
          }
        }

        slides.forEach(function (slide) {
          css(slide, {
            'width': slideWidth + '%'
          });

          if (options.verticalCentered) {
            addTableClass(slide);
          }
        });
        var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0]; //if the slide won't be an starting point, the default will be the first one
        //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

        if (startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0)) {
          silentLandscapeScroll(startingSlide, 'internal');
        } else {
          addClass(slides[0], ACTIVE);
        }
      }
      /**
      * Styling vertical sections
      */


      function styleSection(section, index) {
        //if no active section is defined, the 1st one will be the default one
        if (!index && $(SECTION_ACTIVE_SEL)[0] == null) {
          addClass(section, ACTIVE);
        }

        startingSection = $(SECTION_ACTIVE_SEL)[0];
        css(section, {
          'height': windowsHeight + 'px'
        });

        if (options.paddingTop) {
          css(section, {
            'padding-top': options.paddingTop
          });
        }

        if (options.paddingBottom) {
          css(section, {
            'padding-bottom': options.paddingBottom
          });
        }

        if (typeof options.sectionsColor[index] !== 'undefined') {
          css(section, {
            'background-color': options.sectionsColor[index]
          });
        }

        if (typeof options.anchors[index] !== 'undefined') {
          section.setAttribute('data-anchor', options.anchors[index]);
        }
      }
      /**
      * Sets the data-anchor attributes to the menu elements and activates the current one.
      */


      function styleMenu(section, index) {
        if (typeof options.anchors[index] !== 'undefined') {
          //activating the menu / nav element on load
          if (hasClass(section, ACTIVE)) {
            activateMenuAndNav(options.anchors[index], index);
          }
        } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)


        if (options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null) {
          $(options.menu).forEach(function (menu) {
            $body.appendChild(menu);
          });
        }
      }
      /**
      * Adds internal classes to be able to provide customizable selectors
      * keeping the link with the style sheet.
      */


      function addInternalSelectors() {
        addClass($(options.sectionSelector, container), SECTION);
        addClass($(options.slideSelector, container), SLIDE);
      }
      /**
      * Creates the control arrows for the given section
      */


      function createSlideArrows(section) {
        var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];
        after($(SLIDES_WRAPPER_SEL, section)[0], arrows);

        if (options.controlArrowColor !== '#fff') {
          css($(SLIDES_ARROW_NEXT_SEL, section), {
            'border-color': 'transparent transparent transparent ' + options.controlArrowColor
          });
          css($(SLIDES_ARROW_PREV_SEL, section), {
            'border-color': 'transparent ' + options.controlArrowColor + ' transparent transparent'
          });
        }

        if (!options.loopHorizontal) {
          hide($(SLIDES_ARROW_PREV_SEL, section));
        }
      }
      /**
      * Creates a vertical navigation bar.
      */


      function addVerticalNavigation() {
        var navigation = document.createElement('div');
        navigation.setAttribute('id', SECTION_NAV);
        var divUl = document.createElement('ul');
        navigation.appendChild(divUl);
        appendTo(navigation, $body);
        var nav = $(SECTION_NAV_SEL)[0];
        addClass(nav, 'fp-' + options.navigationPosition);

        if (options.showActiveTooltip) {
          addClass(nav, SHOW_ACTIVE_TOOLTIP);
        }

        var li = '';

        for (var i = 0; i < $(SECTION_SEL).length; i++) {
          var link = '';

          if (options.anchors.length) {
            link = options.anchors[i];
          }

          li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, 'Section') + '</span><span></span></a>'; // Only add tooltip if needed (defined by user)

          var tooltip = options.navigationTooltips[i];

          if (typeof tooltip !== 'undefined' && tooltip !== '') {
            li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>';
          }

          li += '</li>';
        }

        $('ul', nav)[0].innerHTML = li; //activating the current active section

        var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
        addClass($('a', bullet), ACTIVE);
      }
      /**
      * Gets the name for screen readers for a section/slide navigation bullet.
      */


      function getBulletLinkName(i, defaultName, item) {
        var anchor = defaultName === 'Section' ? options.anchors[i] : item.getAttribute('data-anchor');
        return options.navigationTooltips[i] || anchor || defaultName + ' ' + (i + 1);
      }
      /*
      * Enables the Youtube videos API so we can control their flow if necessary.
      */


      function enableYoutubeAPI() {
        $('iframe[src*="youtube.com/embed/"]', container).forEach(function (item) {
          addURLParam(item, 'enablejsapi=1');
        });
      }
      /**
      * Adds a new parameter and its value to the `src` of a given rc) + newParam);
      }
      /*
      * Returns the prefix sign to use for a new parameter in an existen URL.
      *
      * @return {String}rl) ? '?' : '&';
      }
      /**
      * Actions and callbacks to fire afterRender
      */


      function afterRenderActions() {
        var section = $(SECTION_ACTIVE_SEL)[0];
        addClass(section, COMPLETELY);
        lazyLoad(section);
        lazyLoadOthers();
        playMedia(section);

        if (options.scrollOverflow) {
          options.scrollOverflowHandler.afterLoad();
        }

        if (isDestinyTheStartingSection() && isFunction(options.afterLoad)) {
          fireCallback('afterLoad', {
            activeSection: section,
            element: section,
            direction: null,
            //for backwards compatibility callback (to be removed in a future!)
            anchorLink: section.getAttribute('data-anchor'),
            sectionIndex: index(section, SECTION_SEL)
          });
        }

        if (isFunction(options.afterRender)) {
          fireCallback('afterRender');
        }
      }
      /**
      * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
      */


      function isDestinyTheStartingSection() {
        var anchor = getAnchorsURL();
        var destinationSection = getSectionByAnchor(anchor.section);
        return !anchor.section || !destinationSection || typeof destinationSection !== 'undefined' && index(destinationSection) === index(startingSection);
      }

      var isScrolling = false;
      var lastScroll = 0; //when scrolling...

      function scrollHandler() {
        var currentSection;

        if (isResizing) {
          return;
        }

        if (!options.autoScrolling || options.scrollBar) {
          var currentScroll = getScrollTop();
          var scrollDirection = getScrollDirection(currentScroll);
          var visibleSectionIndex = 0;
          var screen_mid = currentScroll + getWindowHeight() / 2.0;
          var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
          var sections = $(SECTION_SEL); //when using `auto-height` for a small last section it won't be centered in the viewport

          if (isAtBottom) {
            visibleSectionIndex = sections.length - 1;
          } //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
          else if (!currentScroll) {
              visibleSectionIndex = 0;
            } //taking the section which is showing more content in the viewport
            else {
                for (var i = 0; i < sections.length; ++i) {
                  var section = sections[i]; // Pick the the last section which passes the middle line of the screen.

                  if (section.offsetTop <= screen_mid) {
                    visibleSectionIndex = i;
                  }
                }
              }

          if (isCompletelyInViewPort(scrollDirection)) {
            if (!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)) {
              addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
              removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
            }
          } //geting the last one, the current one on the screen


          currentSection = sections[visibleSectionIndex]; //setting the visible section as active when manually scrolling
          //executing only once the first time we reach the section

          if (!hasClass(currentSection, ACTIVE)) {
            isScrolling = true;
            var leavingSection = $(SECTION_ACTIVE_SEL)[0];
            var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
            var yMovement = getYmovement(currentSection);
            var anchorLink = currentSection.getAttribute('data-anchor');
            var sectionIndex = index(currentSection, SECTION_SEL) + 1;
            var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
            var slideIndex;
            var slideAnchorLink;
            var callbacksParams = {
              activeSection: leavingSection,
              sectionIndex: sectionIndex - 1,
              anchorLink: anchorLink,
              element: currentSection,
              leavingSection: leavingSectionIndex,
              direction: yMovement
            };

            if (activeSlide) {
              slideAnchorLink = activeSlide.getAttribute('data-anchor');
              slideIndex = index(activeSlide);
            }

            if (canScroll) {
              addClass(currentSection, ACTIVE);
              removeClass(siblings(currentSection), ACTIVE);

              if (isFunction(options.onLeave)) {
                fireCallback('onLeave', callbacksParams);
              }

              if (isFunction(options.afterLoad)) {
                fireCallback('afterLoad', callbacksParams);
              }

              stopMedia(leavingSection);
              lazyLoad(currentSection);
              playMedia(currentSection);
              activateMenuAndNav(anchorLink, sectionIndex - 1);

              if (options.anchors.length) {
                //needed to enter in hashChange event when using the menu with anchor links
                lastScrolledDestiny = anchorLink;
              }

              setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
            } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet


            clearTimeout(scrollId);
            scrollId = setTimeout(function () {
              isScrolling = false;
            }, 100);
          }

          if (options.fitToSection) {
            //for the auto adjust of the viewport to fit a whole section
            clearTimeout(scrollId2);
            scrollId2 = setTimeout(function () {
              //checking it again in case it changed during the delay
              if (options.fitToSection && //is the destination element bigger than the viewport?
              $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight) {
                fitToSection();
              }
            }, options.fitToSectionDelay);
          }
        }
      }
      /**
      * Fits the site to the nearest active section
      */


      function fitToSection() {
        //checking fitToSection again in case it was set to false before the timeout delay
        if (canScroll) {
          //allows to scroll to an active section and
          //if the section is already active, we prevent firing callbacks
          isResizing = true;
          scrollPage($(SECTION_ACTIVE_SEL)[0]);
          isResizing = false;
        }
      }
      /**
      * Determines whether the active section has seen in its whole or not.
      */


      function isCompletelyInViewPort(movement) {
        var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
        var bottom = top + getWindowHeight();

        if (movement == 'up') {
          return bottom >= getScrollTop() + getWindowHeight();
        }

        return top <= getScrollTop();
      }
      /**
      * Determines whether a section is in the viewport or not.
      */


      function isSectionInViewport(el) {
        var rect = el.getBoundingClientRect();
        var top = rect.top;
        var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the 
        //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
        //using this prevents from lazyLoading the section that is not yet visible 
        //(only 1 pixel offset is)

        var pixelOffset = 2;
        var isTopInView = top + pixelOffset < windowsHeight && top > 0;
        var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;
        return isTopInView || isBottomInView;
      }
      /**
      * Gets the directon of the the scrolling fired by the scrolleturn direction;
      }
      /**
      * Determines the way of scrolling up or down:
      * by 'automatically' scrolling a section or by using the default and normal scrolling.
      */


      function scrolling(type) {
        if (!isScrollAllowed.m[type]) {
          return;
        }

        var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

        if (options.scrollOverflow) {
          var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
          var check = type === 'down' ? 'bottom' : 'top';

          if (scrollable != null) {
            //is the scrollbar at the start/end of the scroll?
            if (options.scrollOverflowHandler.isScrolled(check, scrollable)) {
              scrollSection();
            } else {
              return true;
            }
          } else {
            // moved up/down
            scrollSection();
          }
        } else {
          // moved up/down
          scrollSection();
        }
      }
      /*
      * Preventing bouncing in iOS #2285
      */


      function preventBouncing(e) {
        if (options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up) {
          //preventing the easing on iOS devices
          preventDefault(e);
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

      function touchMoveHandler(e) {
        var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];

        if (isReallyTouch(e)) {
          if (options.autoScrolling) {
            //preventing the easing on iOS devices
            preventDefault(e);
          }

          var touchEvents = getEventsPage(e);
          touchEndY = touchEvents.y;
          touchEndX = touchEvents.x; //if movement in the X axys is greater than in the Y and the currect section has slides...

          if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
            //is the movement greater than the minimum resistance to scroll?
            if (!slideMoving && Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * options.touchSensitivity) {
              if (touchStartX > touchEndX) {
                if (isScrollAllowed.m.right) {
                  moveSlideRight(activeSection); //next
                }
              } else {
                if (isScrollAllowed.m.left) {
                  moveSlideLeft(activeSection); //prev
                }
              }
            }
          } //vertical scrolling (only when autoScrolling is enabled)
          else if (options.autoScrolling && canScroll) {
              //is the movement greater than the minimum resistance to scroll?
              if (Math.abs(touchStartY - touchEndY) > window.innerHeight / 100 * options.touchSensitivity) {
                if (touchStartY > touchEndY) {
                  scrolling('down');
                } else if (touchEndY > touchStartY) {
                  scrolling('up');
                }
              }
            }
        }
      }
      /**
      * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
      * this way we make sure that is really a touch event what IE is detType != 'mouse';
      }
      /**
      * Handler for the touch start event.
      */


      function touchStartHandler(e) {
        //stopping the auto scroll to adjust to a section
        if (options.fitToSection) {
          activeAnimation = false;
        }

        if (isReallyTouch(e)) {
          var touchEvents = getEventsPage(e);
          touchStartY = touchEvents.y;
          touchStartX = touchEvents.x;
        }
      }
      /**
      * Gets the average of the last `number` elements of the givenl(sum / number);
      }
      /**
       * Detecting mousewheel scrolling
       *
       * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
       * http://www.sitepoint.com/html5-javascript-mouse-wheel/
       */


      var prevTime = new Date().getTime();

      function MouseWheelHandler(e) {
        var curTime = new Date().getTime();
        var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL); //is scroll allowed?

        if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {
          preventDefault(e);
          return false;
        } //autoscrolling and not zooming?


        if (options.autoScrolling && !controlPressed && !isNormalScroll) {
          // cross-browser wheel delta
          e = e || window.event;
          var value = e.wheelDelta || -e.deltaY || -e.detail;
          var delta = Math.max(-1, Math.min(1, value));
          var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
          var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection; //Limiting the array to 150 (lets not waste memory!)

          if (scrollings.length > 149) {
            scrollings.shift();
          } //keeping record of the previous scrollings


          scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

          if (options.scrollBar) {
            preventDefault(e);
          } //time difference between the last scroll and the current one


          var timeDiff = curTime - prevTime;
          prevTime = curTime; //haven't they scrolled in a while?
          //(enough to be consider a different scrolling action to scroll another section)

          if (timeDiff > 200) {
            //emptying the array, we dont care about old scrollings for our averages
            scrollings = [];
          }

          if (canScroll) {
            var averageEnd = getAverage(scrollings, 10);
            var averageMiddle = getAverage(scrollings, 70);
            var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

            if (isAccelerating && isScrollingVertically) {
              //scrolling down?
              if (delta < 0) {
                scrolling('down'); //scrolling up?
              } else {
                scrolling('up');
              }
            }
          }

          return false;
        }

        if (options.fitToSection) {
          //stopping the auto scroll to adjust to a section
          activeAnimation = false;
        }
      }
      /**
      * Slides a slider to the given direction.
      * Optional `section` param.
      */


      function moveSlide(direction, section) {
        var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;
        var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0]; // more than one slide needed and nothing should be sliding

        if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {
          return;
        }

        var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
        var destiny = null;

        if (direction === 'left') {
          destiny = prevUntil(currentSlide, SLIDE_SEL);
        } else {
          destiny = nextUntil(currentSlide, SLIDE_SEL);
        } //isn't there a next slide in the secuence?


        if (destiny == null) {
          //respect loopHorizontal settin
          if (!options.loopHorizontal) return;
          var slideSiblings = siblings(currentSlide);

          if (direction === 'left') {
            destiny = slideSiblings[slideSiblings.length - 1]; //last
          } else {
            destiny = slideSiblings[0]; //first
          }
        }

        slideMoving =  true && !FP.test.isTesting;
        landscapeScroll(slides, destiny, direction);
      }
      /**
      * Maintains the active slides in the viewport
      * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
      */


      function keepSlidesPosition() {
        var activeSlides = $(SLIDE_ACTIVE_SEL);

        for (var i = 0; i < activeSlides.length; i++) {
          silentLandscapeScroll(activeSlides[i], 'internal');
        }
      }

      var previousDestTop = 0;
      /**
      * Returns the destination Y position based on the scrolling direction and
      * the height of the section.
      */

      function getDestinationPosition(element) {
        var elementHeight = element.offsetHeight;
        var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport

        var position = elementTop;
        var isScrollingDown = elementTop > previousDestTop;
        var sectionBottom = position - windowsHeight + elementHeight;
        var bigSectionsDestination = options.bigSectionsDestination; //is the destination element bigger than the viewport?

        if (elementHeight > windowsHeight) {
          //scrolling up?
          if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
            position = sectionBottom;
          }
        } //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
        else if (isScrollingDown || isResizing && next(element) == null) {
            //The bottom of the destination will be at the bottom of the viewport
            position = sectionBottom;
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


      function scrollPage(element, callback, isMovementUp) {
        if (element == null) {
          return;
        } //there's no element to scroll, leaving the function


        var dtop = getDestinationPosition(element);
        var slideAnchorLink;
        var slideIndex; //local variables

        var v = {
          element: element,
          callback: callback,
          isMovementUp: isMovementUp,
          dtop: dtop,
          yMovement: getYmovement(element),
          anchorLink: element.getAttribute('data-anchor'),
          sectionIndex: index(element, SECTION_SEL),
          activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
          activeSection: $(SECTION_ACTIVE_SEL)[0],
          leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,
          //caching the value of isResizing at the momment the function is called
          //because it will be checked later inside a setTimeout and the value might change
          localIsResizing: isResizing
        }; //quiting when destination scroll is the same as the current one

        if (v.activeSection == element && !isResizing || options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) {
          return;
        }

        if (v.activeSlide != null) {
          slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
          slideIndex = index(v.activeSlide);
        } //callback (onLeave) if the site is not just resizing and readjusting the slides


        if (!v.localIsResizing) {
          var direction = v.yMovement; //required for continousVertical

          if (typeof isMovementUp !== 'undefined') {
            direction = isMovementUp ? 'up' : 'down';
          } //for the callback


          v.direction = direction;

          if (isFunction(options.onLeave)) {
            if (fireCallback('onLeave', v) === false) {
              return;
            }
          }
        } // If continuousVertical && we need to wrap around


        if (options.autoScrolling && options.continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
        v.isMovementUp && v.yMovement == 'down')) {
          // intending to scroll up but about to go down
          v = createInfiniteSections(v);
        } //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)


        if (!v.localIsResizing) {
          stopMedia(v.activeSection);
        }

        if (options.scrollOverflow) {
          options.scrollOverflowHandler.beforeLeave();
        }

        addClass(element, ACTIVE);
        removeClass(siblings(element), ACTIVE);
        lazyLoad(element);

        if (options.scrollOverflow) {
          options.scrollOverflowHandler.onLeave();
        } //preventing from activating the MouseWheelHandler event
        //more than once if the page is scrolling


        canScroll =  false || FP.test.isTesting;
        setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);
        performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links

        lastScrolledDestiny = v.anchorLink; //avoid firing it twice (as it does also on scroll)

        activateMenuAndNav(v.anchorLink, v.sectionIndex);
      }
      /**
      * Dispatch events & callbacks making sure it does it on the right format, depending on
      * whether v2compatible is being used or not.
      */


      function fireCallback(eventName, v) {
        var eventData = getEventData(eventName, v);

        if (!options.v2compatible) {
          trigger(container, eventName, eventData);

          if (options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) {
            return false;
          }
        } else {
          if (options[eventName].apply(eventData[0], eventData.slice(1)) === false) {
            return false;
          }
        }

        return true;
      }
      /**
      * Makes sure to only create a Panel object if the element exist
      */


      function nullOrSection(el) {
        return el ? new Section(ellide(el) : null;
      }
      /**
      * Gets the event's data for the given event on the right format. Depending on whether
      * v2compatible is being used or not.
      */


      function getEventData(eventName, v) {
        var paramsPerEvent;

        if (!options.v2compatible) {
          //using functions to run only the necessary bits within the object
          paramsPerEvent = {
            afterRender: function afterRender() {
              return {
                section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
                slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
              };
                   };
            },
            afterLoad: function afterLoad() {
              return paramsPerEvent.onLeave();
            },
            afterSlideLoad: function afterSlideLoad() {
              return {
                section: nullOrSection(v.section),
                origin: nullOrSlide(v.prevSlide),
                destination: nullOrSlide(v.destiny),
                direction: v.direction
              };
            },
            onSlideLeave: function onSlideLeave() {
              return paramsPerEvent.afterSlideLoad();
            }
          };
        } else {
          paramsPerEvent = {
ontainer];
            },
            onLeave: function onLeave() {
              return [v.activeSection, v.leavingSection, v.sectionIndex + 1, v.direction];
            },
            afterLoad: function afterLoad() {
              return [v.element, v.anchorLink, v.sectionIndex + 1];
            },
            afterSlideLoad: function afterSlideLoad() {
              return [v.destiny, v.anchorLink, v.sectionIndex + 1, v.slideAnchor, v.slideIndex];
            },
            onSlideLeave: function onSlideLeave() {
              return [v.prevSlide, v.anchorLink, v.sectionIndex + 1, v.prevSlideIndex, v.direction, v.slideIndex];
            }
          };
        }

        return paramsPerEvent[eventName]();
      }
      /**
      * Performs the vertical movement (by CSS3 or by jQuery)
      */


      function performMovement(v) {
        var isFastSpeed = options.scrollingSpeed < 700;
        var transitionLapse = isFastSpeed ? 700 : options.scrollingSpeed; // using CSS3 translate functionality

        if (options.css3 && options.autoScrolling && !options.scrollBar) {
          // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
          // that's why we round it to 0.
          var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
          transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
          //scrollingSpeed to change in case of using silentMoveTo();

          if (options.scrollingSpeed) {
            clearTimeout(afterSectionLoadsId);
            afterSectionLoadsId = setTimeout(function () {
              afterSectionLoads(v); //disabling canScroll when using fastSpeed

              canScroll = !isFastSpeed;
            }, options.scrollingSpeed);
          } else {
            afterSectionLoads(v);
          }
        } // using JS to animate
        else {
            var scrollSettings = getScrollSettings(v.dtop);
            FP.test.top = -v.dtop + 'px';
            css($htmlBody, {
              'scroll-behavior': 'unset'
            });
            scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function () {
              if (options.scrollBar) {
                /* Hack!
                The timeout prevents setting the most dominant section in the viewport as "active" when the user
                scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
                     When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                */
                setTimeout(function () {
                  afterSectionLoads(v);
                }, 30);
              } else {
                afterSectionLoads(v); //disabling canScroll when using fastSpeed

                canScroll = !isFastSpeed;
              }
            });
          } // enabling canScroll after the minimum transition laps


        if (isFastSpeed) {
          clearTimeout(g_transitionLapseId);
          g_transitionLapseId = setTimeout(function () {
            canScroll = true;
          }, transitionLapse);
        }
      }
      /**
      * Gets the scrolling settings depending on the plugin autoScrolling option
      */


      function getScrollSettings(top) {
        var scroll = {}; //top property animation

        if (options.autoScrolling && !options.scrollBar) {
          scroll.options = -top;
          scroll.element = $(WRAPPER_SEL)[0];
        } //window real scrolling
        else {
            scroll.options = top;
            scroll.element = window;
          }

        return scroll;
      }
      /**
      * Adds sections before or after the current one to create the infinite effect.
      */


      function createInfiniteSections(v) {
        // Scrolling down
        if (!v.isMovementUp) {
          // Move all previous sections to after the active section
          after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());
        } else {
          // Scrolling up
          // Move all next sections to before the active section
          before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
        } // Maintain the displayed position (now that we changed the element order)


        silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); // Maintain the active slides visible in the viewport

        keepSlidesPosition(); // save for later the elements that still need to be reordered

        v.wrapAroundElements = v.activeSection; // Recalculate animation variables

        v.dtop = v.element.offsetTop;
        v.yMovement = getYmovement(v.element);
        return v;
      }
      /**
      * Fix section order after continuousVertical changes have been animated
      */


      function continuousVerticalFixSectionOrder(v) {
        // If continuousVertical is in effect (and autoScrolling would also be in effect then),
        // finish moving the elements around so the direct navigation will function more simply
        if (v.wrapAroundElements == null) {
          return;
        }

        if (v.isMovementUp) {
          before($(SECTION_SEL)[0], v.wrapAroundElements);
        } else {
          after($(SECTION_SEL)[$(SECTION_SEL).length - 1], v.wrapAroundElements);
        }

        silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); // Maintain the active slides visible in the viewport

        keepSlidesPosition();
      }
      /**
      * Actions to do once the section is loaded.
      */


      function afterSectionLoads(v) {
        continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides

        if (isFunction(options.afterLoad) && !v.localIsResizing) {
          fireCallback('afterLoad', v);
        }

        if (options.scrollOverflow) {
          options.scrollOverflowHandler.afterLoad();
        }

        if (!v.localIsResizing) {
          playMedia(v.element);
        }

        addClass(v.element, COMPLETELY);
        removeClass(siblings(v.element), COMPLETELY);
        lazyLoadOthers();
        canScroll = true;

        if (isFunction(v.callback)) {
          v.callback();
        }
      }
      /**
      * Sets the value for the given attribute from the `data-` attribute with the same suffix
      * ie: data-srcset ==> srcset  |  data-src ==> src
      */


      function setSrc(element, attribute) {
        element.setAttribute(attribute, element.getAttribute('data-' + attribute));
        element.removeAttribute('data-' + attribute);
      }
      /**
      * Makes sure lazyload is done for other sections in the viewport that are not the
      * active one. 
      */


      function lazyLoadOthers() {
        var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply

        if (!options.lazyLoading || !hasAutoHeightSections) {
          return;
        } //making sure to lazy load auto-height sections that are in the viewport


        $(SECTION_SEL + ':not(' + A);
          }
        });
      }
      /**
      * Lazy loads image, video and audio elements.
      */


      function lazyLoad(destiny) {
        if (!options.lazyLoading) {
          return;
        }

        var panel = getSlideOrSection(destiny);
        $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function (element) {
          ['src', 'srcset'].forEach(function (type) {
            var attribute = element.getAttribute('data-' + type);

            if (attribute != null && attribute) {
              setSrc(element, type);
              element.addEventListener('load', function () {
                onMediaLoad(destiny);
              });
            }
          });

          if (matches(element, 'source')) {
            var elementToPlay = closest(element, 'video, audio');

            if (elementToPlay) {
              elementToPlay.load();

              elementToPlay.onloadeddata = function () {
                onMediaLoad(destiny);
              };
            }
          }
        });
      }
      /**
      * Callback firing when a lazy load media element has loaded.
      * Making sure it only fires one per section in normal conditions (if load time is not huge)
      */


      function onMediaLoad(section) {
        if (options.scrollOverflow) {
          clearTimeout(g_mediaLoadedId);
          g_mediaLoadedId = setTimeout(function () {
            if (!hasClass($body, RESPONSIVE)) {
              scrollBarHandler.createScrollBar(section);
            }
          }, 200);
        }
      }
      /**
      * Plays video and audio elements.
      */


      function playMedia(destiny) {
        var panel = getSlideOrSection(destiny); //playing HTML5 media elements

        $('video, audio', panel).forEach(function (element) {
          if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
            element.play();
          }
        }); //youtube videos

        $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
          if (element.hasAttribute('data-autoplay')) {
            playYoutube(element);
          } //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.


             }
          };
        });
      }
      /**
      * Plays a youtubrgs":""}', '*');
      }
      /**
      * Stops video and audio elements.
      */


      function stopMedia(destiny) {
        var panel = getSlideOrSection(destiny); //stopping HTML5 media elements

        $('video, audio', panel).forEach(function (element) {
          if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
            element.pause();
          }
        }); //youtube videos

        $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
          if (/youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')) {
            element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
        });
      }
      /**
      * Gets the active slide (or section) for the given section
      */


      function getSlideOrSection(destiny) {
        var slide = $(SLIDE_ACTIVE_SEL, destiny);

        if (slide.length) {
          destiny = slide[0];
        }

        return destiny;
      }
      /**
      * Scrolls to the anchor in the URL when loading the site
      */


      function scrollToAnchor() {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide;

        if (sectionAnchor) {
          //if theres any #
          if (options.animateAnchor) {
            scrollPageAndSlide(sectionAnchor, slideAnchor);
          } else {
            silentMoveTo(sectionAnchor, slideAnchor);
          }
        }
      }
      /**
      * Detecting any change on the URL to scroll to the given anchor link
      * (a way to detect back history button as we play with the hashes on the URL)
      */


      function hashChangeHandler() {
        if (!isScrolling && !options.lockAnchors) {
          var anchors = getAnchorsURL();
          var sectionAnchor = anchors.section;
          var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

          var isFirstSlideMove = typeof lastScrolledDestiny === 'undefined';
          var isFirstScrollMove = typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving;

          if (sectionAnchor && sectionAnchor.length) {
            /*in order to call scrollpage() only once for each destination at a time
            It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
            event is fired on every scroll too.*/
            if (sectionAnchor && sectionAnchor !== lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !slideMoving && lastScrolledSlide != slideAnchor) {
              scrollPageAndSlide(sectionAnchor, slideAnchor);
            }
          }
        }
      } //gets the URL anchors (section and slide)


      function getAnchorsURL() {
        var section;
        var slide;
        var hash = window.location.hash;

        if (hash.length) {
          //getting the anchor link in the URL and deleting the `#`
          var anchorsParts = hash.replace('#', '').split('/'); //using / for visual reasons and not as a section/slide separator #2803

          var isFunkyAnchor = hash.indexOf('#/') > -1;
          section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
          var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

          if (slideAnchor && slideAnchor.length) {
            slide = decodeURIComponent(slideAnchor);
          }
        }

        return {
          section: section,
          slide: slide
        };
      } //Sliding with arrow keys, both, vertical and horizontal


      function keydownHandler(e) {
        clearTimeout(keydownId);
        var activeElement = document.activeElement;
        var keyCode = e.keyCode; //tab?

        if (keyCode === 9) {
          onTab(e);
        } else if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') && activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' && options.keyboardScrolling && options.autoScrolling) {
          //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
          var keyControls = [40, 38, 32, 33, 34];

          if (keyControls.indexOf(keyCode) > -1) {
            preventDefault(e);
          }

          controlPressed = e.ctrlKey;
          keydownId = setTimeout(function () {
            onkeydown(e);
          }, 150);
this), 'click');
      } //to prevent scrollirlKey;
        }
      } //binding the mousemove when the mouse's middle budler);
        }
      } //unbinding the mousemove when the mouse's middle button is released


      function mouseUpHandler(e) {
        //middle button
        if (e.which == 2) {
          container.removeEventListener('mousemove', mouseMoveHandler);
        }
      }
      /**
      * Makes sure the tab key will only focus elements within the current section/slide
      * preventing this way from breaking the page.
      * Based on "Modals and keyboard traps"
      * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
      */


      function onTab(e) {
        var isShiftPressed = e.shiftKey;
        var activeElement = document.activeElement;
        var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));

        function preventAndFocusFirst(e) {
          preventDefault(e);
          return focusableElements[0] ? focusableElements[0].focus() : null;
        } //outside any section or slide? Let's not hijack the tab!


        if (isFocusOutside(e)) {
          return;
        } //is there an element with focus?


        if (activeElement) {
          if (closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null) {
            activeElement = preventAndFocusFirst(e);
          }
        } //no element if focused? Let's focus the first one of the section/slide
        else {
            preventAndFocusFirst(e);
          } //when reached the first or last focusable element of the section/slide
        //we prevent the tab action to keep it in the last focusable element


        if (!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] || isShiftPressed && activeElement == focusableElements[0]) {
          preventDefault(e);
        }
      }
      /**
      * Gets all the focusable elements inside the passed element.
      */


      function getFocusables(el) {
        return [].slice.call($(focusableElementsString, el)).filter(function (item) {
          return item.getAttribute('tabindex') !== '-1' //are also not hidden elements (or with hidden parents)
          && item.offsetParent !== null;
        });
      }
      /**
      * Determines whether the focus is outside fullpage.js sections/slides or not.
      */


      function isFocusOutside(e) {
        var allFocusables = getFocusables(document);
        var currentFocusIndex = allFocusables.indexOf(document.activeElement);
        var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
        var focusDestination = allFocusables[focusDestinationIndex];
        var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));
        var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));
        return !destinationItemSlide && !destinationItemSection;
      } //Scrolling horizontally when clicking on the slider controls.


      function slideArrowHandler() {
        /*jshint validthis:true */
        var section = closest(this, SECTION_SEL);
        /*jshint validthis:true */

        if (hasClass(this, SLIDES_PREV)) {
          if (isScrollAllowed.m.left) {
            moveSlideLeft(section);
          }
        } else {
          if (isScrollAllowed.m.right) {
            moveSlideRight(section);
          }
        }
      } // changing isWindowFocused to truwFocused = true;
      } //when opening a new tab (ctrl + t), `control` won't be pressed wPressed = false;
      } //Scrolls to the section when clicking the navigation bullet


      function sectionBulletHandler(e) {
        preventDefault(e);
        /*jshint validthis:true */

        var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
        scrollPage($(SECTION_SEL)[indexBullet]);
      } //Scrolls the slider to the given slide destination for the given section


      function slideBulletHandler(e) {
        preventDefault(e);
        /*jshint validthis:true */

        var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
        var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))];
        landscapeScroll(slides, destiny);
      } //Menu item handler when not using anchors or using lockAnchors:true


      function menuItemsHandler(e) {
        if ($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)) {
          preventDefault(e);
          /*jshint validthis:true */

          moveTo(this.getAttribute('data-menuanchor'));
        }
      }
      /**
      * Keydown event
      */


      function onkeydown(e) {
        var shiftPressed = e.shiftKey;
        var activeElement = document.activeElement;
        var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio'); //do nothing if we can not scroll or we are not using horizotnal key arrows.

        if (!canScroll && [37, 39].indexOf(e.keyCode) < 0) {
          return;
        }

        switch (e.keyCode) {
          //up
          case 38:
          case 33:
            if (isScrollAllowed.k.up) {
              moveSectionUp();
            }

            break;
          //down

          case 32:
            //spacebar
            if (shiftPressed && isScrollAllowed.k.up && !isMediaFocused) {
              moveSectionUp();
              break;
            }

          /* falls through */

          case 40:
          case 34:
            if (isScrollAllowed.k.down) {
              // space bar?
              if (e.keyCode !== 32 || !isMediaFocused) {
                moveSectionDown();
              }
            }

            break;
          //Home

          case 36:
            if (isScrollAllowed.k.up) {
              moveTo(1);
            }

            break;
          //End

          case 35:
            if (isScrollAllowed.k.down) {
              moveTo($(SECTION_SEL).length);
            }

            break;
          //left

          case 37:
            if (isScrollAllowed.k.left) {
              moveSlideLeft();
            }

            break;
          //right

          case 39:
            if (isScrollAllowed.k.right) {
              moveSlideRight();
            }

            break;

          default:
            return;
          // exit this handler for other keys
        }
      }
      /**
      * Detecting the direction of the mouse movement.
      * Used only for the middle button of the mouse.
      */


      var oldPageY = 0;

      function mouseMoveHandler(e) {
        if (!options.autoScrolling) {
          return;
        }

        if (canScroll) {
          // moving up
          if (e.pageY < oldPageY && isScrollAllowed.m.up) {
            moveSectionUp();
          } // moving down
          else if (e.pageY > oldPageY && isScrollAllowed.m.down) {
              moveSectionDown();
            }
        }

        oldPageY = e.pageY;
      }
      /**
      * Scrolls horizontal sliders.
      */


      function landscapeScroll(slides, destiny, direction) {
        var section = closest(slides, SECTION_SEL);
        var v = {
          slides: slides,
          destiny: destiny,
          direction: direction,
          destinyPos: {
            left: destiny.offsetLeft
          },
          slideIndex: index(destiny),
          section: section,
          sectionIndex: index(section, SECTION_SEL),
          anchorLink: section.getAttribute('data-anchor'),
          slidesNav: $(SLIDES_NAV_SEL, section)[0],
          slideAnchor: getAnchor(destiny),
          prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
          prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),
          //caching the value of isResizing at the momment the function is called
          //because it will be checked later inside a setTimeout and the value might change
          localIsResizing: isResizing
        };
        v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
        v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing

        if (!v.localIsResizing) {
          //preventing from scrolling to the next/prev section when using scrollHorizontally
          canScroll = false;
        }

        if (options.onSlideLeave) {
          //if the site is not just resizing and readjusting the slides
          if (!v.localIsResizing && v.xMovement !== 'none') {
            if (isFunction(options.onSlideLeave)) {
              if (fireCallback('onSlideLeave', v) === false) {
                slideMoving = false;
                return;
              }
            }
          }
        }

        addClass(destiny, ACTIVE);
        removeClass(siblings(destiny), ACTIVE);

        if (!v.localIsResizing) {
          stopMedia(v.prevSlide);
          lazyLoad(destiny);
        }

        if (!options.loopHorizontal && options.controlArrows) {
          //hidding it for the fist slide, showing for the rest
          toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest

          toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);
        } //only changing the URL if the slides are in the current section (not for resize re-adjusting)


        if (hasClass(section, ACTIVE) && !v.localIsResizing) {
          setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
        }

        performHorizontalMove(slides, v, true);
      }

      function afterSlideLoads(v) {
        activeSlidesNavigation(v.slidesNav, v.slideIndex); //if the site is not just resizing and readjusting the slides

        if (!v.localIsResizing) {
          if (isFunction(options.afterSlideLoad)) {
            fireCallback('afterSlideLoad', v);
          } //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
          //and to prevent double scroll right after a windows resize


          canScroll = true;
          playMedia(v.destiny);
        } //letting them slide again


        slideMoving = false;
      }
      /**
      * Performs the horizontal movement. (CSS3 or jQuery)
      *
      * @param fireCallback {Bool} - determines whether or not to fire the callback
      */


      function performHorizontalMove(slides, v, fireCallback) {
        var destinyPos = v.destinyPos;

        if (options.css3) {
          var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
          FP.test.translate3dH[v.sectionIndex] = translate3d;
          css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
          afterSlideLoadsId = setTimeout(function () {
            if (fireCallback) {
              afterSlideLoads(v);
            }
          }, options.scrollingSpeed);
        } else {
          FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
          scrollTo(slides, Math.round(destinyPos.left),           }
          });
        }
      }
      /**
      * Sets the state for the horizontal bullet navigations.
      */


      function activeSlidesNavigation(slidesNav, slideIndex) {
        if (options.slidesNavigation && slidesNav != null) {
          removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
          addClass($('a', $('li', slidesNav)[slideIndex]), ACTIVE);
        }
      }

      var previousHeight = windowsHeight;
      /*
      * Resize event handler.
      */

      function resizeHandler() {
        clearTimeout(resizeId); //in order to call the functions only when the resize is finished
        //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    

        resizeId = setTimeout(function () {
          //issue #3336 
          //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
          //so we check it 3 times with intervals in that case
          for (var i = 0; i < 4; i++) {
            resizeHandlerId = setTimeout(resizeActions, 200 * i);
          }
        }, 200);
      }
      /**
      * When resizing the site, we adjust the heights of the sections, slimScroll...
      */


      function resizeActions() {
        isResizing = true; //checking if it needs to get responsive

        responsive(); // rebuild immediately on touch devices

        if (isTouchDevice) {
          var activeElement = document.activeElement; //if the keyboard is NOT visible

          if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
            var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

            if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
              reBuild(true);
              previousHeight = currentHeight;
            }
          }
        } else {
          adjustToNewViewport();
        }

        isResizing = false;
      }
      /**
      * Checks if the site needs to get responsive and disables autoScrolling if so.
      * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
      */


      function responsive() {
        var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity

        var heightLimit = options.responsiveHeight; //only calculating what we need. Remember its called on the resize event.

        var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
        var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;

        if (widthLimit && heightLimit) {
          setResponsive(isBreakingPointWidth || isBreakingPointHeight);
        } else if (widthLimit) {
          setResponsive(isBreakingPointWidth);
        } else if (heightLimit) {
          setResponsive(isBreakingPointHeight);
        }
      }
      /**
      * Adds transition animations for the given element
      */


      function addAnimation(element) {
        var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;
        removeClass(element, NO_TRANSITION);
        return css(element, {
          '-webkit-transition': transition,
          'transition': transition
        });
      }
      /**
      * Remove transition animations for the given  NO_TRANSITION);
      }
      /**
      * Activating the vertical navigation bullets according to the given slide name.
      */


      function activateNavDots(name, sectionIndex) {
        if (options.navigation && $(SECTION_NAV_SEL)[0] != null) {
          removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);

          if (name) {
            addClass($('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);
          } else {
            addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
          }
        }
      }
      /**
      * Activating the website main menu elements according to the given slide name.
      */


      function activateMenuElement(name) {
        $(options.menu).forEach(function (menu) {
          if (options.menu && menu != null) {
            removeClass($(ACTIVE_SEL, menu), ACTIVE);
            addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
          }
        });
      }
      /**
      * Sets to active the current menu and vertical nav(anchor, index);
      }
      /**
      * Retuns `up` or `down` depending on the scrolling movement to reach its destination
      * from the current section.
      */


      function getYmovement(destiny) {
        var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
        var toIndex = index(destiny, SECTION_SEL);

        if (fromIndex == toIndex) {
          return 'none';
        }

        if (fromIndex > toIndex) {
          return 'up';
        }

        return 'down';
      }
      /**
      * Retuns `right` or `left` depending on the scrolling movement to reach its destination
      * from the current return 'right';
      }

      function addTableClass(element) {
        //In case we are styling for the 2nd time as in with reponsiveSlides
        if (!hasClass(element, TABLE)) {
          var wrapper = document.createElement('div');
          wrapper.className = TABLE_CELL;
          wrapper.style.height = getTableHeight(element) + 'px';
          addClass(element, TABLE);
          wrapInner(element, wrapper);
        }
      }

      function getTableHeight(element) {
        var sectionHeight = windowsHeight;

        if (options.paddingTop || options.paddingBottom) {
          var section = element;

          if (!hasClass(section, SECTION)) {
            section = closest(element, SECTION_SEL);
          }

          var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']);
          sectionHeight = windowsHeight - paddings;
        }

        return sectionHeight;
      }
      /**
      * Adds a css3 transform property to the container class with or without animation depending on the animated param.
      */


      function transformContainer(translate3d, animated) {
        if (animated) {
          addAnimation(container);
        } else {
          removeAnimation(container);
        }

        css(container, getTransforms(translate3d));
        FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applO_TRANSITION);
        }, 10);
      }
      /**
      * Gets a section by its anchor / index
      */


      function getSectionByAnchor(sectionAnchor) {
        var section = $(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]', container)[0];

        if (!section) {
          var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
          section = $(SECTION_SEL)[sectionIndex];
        }

        return section;
      }
      /**
      * Gets a slide inside a given section by its anchor / index
      */


      function getSlideByAnchor(slideAnchor, section) {
        var slide = $(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]', section)[0];

        if (slide == null) {
          slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
          slide = $(SLIDE_SEL, section)[slideAnchor];
        }

        return slide;
      }
      /**
      * Scrolls to the given section and slide anchors
      */


      function scrollPageAndSlide(sectionAnchor, slideAnchor) {
        var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name

        if (section == null) return;
        var slide = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide

        if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)) {
     ider(slide);
          });
        } //if we were already in the section
        else {
            scrollSlider(slide);
          }
      }
      /**
      * Scrolls the slider to the given slide destination for the given section
      */


      function scrollSlider(slide) {
        if (slide != null) {
          landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
        }
      }
      /**
      * Creates a landscape navigation bar with dots for horizontal sliders.
      */


      function addSlidesNavigation(section, numSlides) {
        appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
        var nav = $(SLIDES_NAV_SEL, section)[0]; //top or bottom

        addClass(nav, 'fp-' + options.slidesNavPosition);

        for (var i = 0; i < numSlides; i++) {
          var slide = $(SLIDE_SEL, section)[i];
          appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, 'Slide', slide) + '</span><span></span></a></li>'), $('ul', nav)[0]);
        } //centering it


        css(nav, {
          'margin-left': '-' + nav.innerWidth / 2 + 'px'
        });
        addClass($('a', $('li', nav)[0]), ACTIVE);
      }
      /**
      * Sets the state of the website depending on the active section/slide.
      * It changes the URL hash when needed and updates the body class.
      */


      function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
        var sectionHash = '';

        if (options.anchors.length && !options.lockAnchors) {
          //isn't it the first slide?
          if (slideIndex) {
            if (anchorLink != null) {
              sectionHash = anchorLink;
            } //slide without anchor link? We take the index instead.


            if (slideAnchor == null) {
              slideAnchor = slideIndex;
            }

            lastScrolledSlide = slideAnchor;
            setUrlHash(sectionHash + '/' + slideAnchor); //first slide won't have slide anchor, just the section one
          } else if (slideIndex != null) {
            lastScrolledSlide = slideAnchor;
            setUrlHash(anchorLink);
          } //section without slides
          else {
              setUrlHash(anchorLink);
            }
        }

        setBodyClass();
      }
      /**
      * Sets the URL hash.
      */


      function setUrlHash(url) {
        if (options.recordHistory) {
          location.hash = url;
        } else {
          //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
          if (isTouchDevice || isTouch) {
            window.history.replaceState(undefined, undefined, '#' + url);
          } else {
            var baseUrl = window.location.href.split('#')[0];
            window.location.replace(baseUrl + '#' + url);
          }
        }
      }
      /**
      * Gets the anchor for the given slide / section. Its index will be used if there's none.
      */


      function getAnchor(element) {
        if (!element) {
          return null;
        }

        var anchor = element.getAttribute('data-anchor');
        var elementIndex = index(element); //Slide without anchor link? We take the index instead.

        if (anchor == null) {
          anchor = elementIndex;
        }

        return anchor;
      }
      /**
      * Sets a class for the body of the page depending on the active section / slide
      */


      function setBodyClass() {
        var section = $(SECTION_ACTIVE_SEL)[0];
        var slide = $(SLIDE_ACTIVE_SEL, section)[0];
        var sectionAnchor = getAnchor(section);
        var slideAnchor = getAnchor(slide);
        var text = String(sectionAnchor);

        if (slide) {
          text = text + '-' + slideAnchor;
        } //changing slash for dash to make it a valid CSS style


        text = text.replace('/', '-').replace('#', ''); //removing previous anchor classes

        var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
        $body.className = $body.className.replace(classRe, ''); //adding the current anchor

        addClass($body, VIEWING_PREFIX + '-' + text);
      }
      /**
      * Checks for translate3d support
      * @return boolean
      * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
      */


      function support3d() {
        var el = document.createElement('p'),
            has3d,
            transforms = {
          'webkitTransform': '-webkit-transform',
          'OTransform': '-o-transform',
          'msTransform': '-ms-transform',
          'MozTransform': '-moz-transform',
          'transform': 'transform'
        }; //preventing the style p:empty{display: none;} from returning the wrong result

        el.style.display = 'block'; // Add it to the body to get the computed style.

        document.body.insertBefore(el, null);

        for (var t in transforms) {
          if (el.style[t] !== undefined) {
            el.style[t] = 'translate3d(1px,1px,1px)';
            has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
          }
        }

        document.body.removeChild(el);
        return has3d !== undefined && has3d.length > 0 && has3d !== 'none';
      }
      /**
      * Removes the auto scrolling action fired by the mouse wheel and trackpad.
      * After this function is called, the mousewheel and trackpad movements won't scroll through se 6/7/8
        }
      }
      /**
      * Adds the auto scrolling action for the mouse wheel and trackpad.
      * After this function is called, the mousewheel and trackpad movements will scroll through sections
      * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
      */


      function addMouseWheelHandler() {
        var prefix = '';

        var _addEventListener;

        if (window.addEventListener) {
          _addEventListener = "addEventListener";
        } else {
          _addEventListener = "attachEvent";
          prefix = 'on';
        } // detect available wheel event


        var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
        document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
        'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

        var passiveEvent = g_supportsPassive ? {
          passive: false
        } : false;

        if (support == 'DOMMouseScroll') {
          document[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
        } //handle MozMousePixelScroll in older Firefox
        else {
            document[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
          }
      }
      /**
      * Binding the mousemove when the mouse's middle button is pressed
      */


      function addMiddleWheelHandler() {
        container.addEventListener('mousedown', mouseDownHandler);
        container.addEventListener('mouseup', mouseUpHandler);
      }
      /**
      * Unbinding the mousemove when the mouse's middle button is rmouseUpHandler);
      }
      /**
      * Adds the possibility to auto scroll through sections on touch devices.
      */


      function addTouchHandler() {
        if (isTouchDevice || isTouch) {
          if (options.autoScrolling) {
            $body.removeEventListener(events.touchmove, preventBouncing, {
              passive: false
            });
            $body.addEventListener(events.touchmove, preventBouncing, {
              passive: false
            });
          }

          var touchWrapper = options.touchWrapper;
          touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
          touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
            passive: false
          });
          touchWrapper.addEventListener(events.touchstart, touchStartHandler);
          touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {
            passive: false
          });
        }
      }
      /**
      * Removes the auto scrolling for touch devices.
      */


      function removeTouchHandler() {
        if (isTouchDevice || isTouch) {
          // normalScrollElements requires it off #2691
          if (options.autoScrolling) {
            $body.removeEventListener(events.touchmove, touchMoveHandler, {
              passive: false
            });
            $body.removeEventListener(events.touchmove, preventBouncing, {
              passive: false
            });
          }

          var touchWrapper = options.touchWrapper;
          touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
          touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
            passive: false
          });
        }
      }
      /*
      * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
      * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.8 return pointer;
      }
      /**
      * Gets the pageX and pageY properties depending on the browser.
      * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
      */


      function getEventsPage(e) {
        var events = [];
        events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
        events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008

        if (isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined') {
          events.y = e.touches[0].pageY;
          events.x = e.touches[0].pageX;
        }

        return events;
      }
      /**
      * Slides silently (with no animation) the active slider to the given slide.
      * @param noCallback {bool} true or defined -> no callbacks
      */


      function silentLandscapeScroll(activeSlide, noCallbacks) {
        setScrollingSpeed(0, 'internal');

        if (typeof noCallbacks !== 'undefined') {
          //preventing firing callbacks afterSlideLoad etc.
          isResizing = true;
        }

        landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

        if (typeof noCallbacks !== 'undefined') {
          isResizing = false;
        }

        setScrollingSpeed(originals.scrollingSpeed, 'internal');
      }
      /**
      * Scrolls silently (with no animation) the page to the given Y position.
      */


      function silentScroll(top) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var roundedTop = Math.round(top);

        if (options.css3 && options.autoScrolling && !options.scrollBar) {
          var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
          transformContainer(translate3d, false);
        } else if (options.autoScrolling && !options.scrollBar) {
          css(container, {
            'top': -roundedTop + 'px'
          });
          FP.test.top = -roundedTop + 'px';
        } else {
          var scrollSettings = getScrollSettings(roundedTop);
          setScrolling(scrollSettings.element, scrollSettings.options);
        }
      }
      /**
      * Returns the cross-browser transform ate3d
        };
      }
      /**
      * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
      * @type  m (mouse) or k (keyboard)
      */


      function setIsScrollAllowed(value, direction, type) {
        //up, down, left, right
        if (direction !== 'all') {
          isScrollAllowed[type][direction] = value;
        } //all directions?
        else {
            Object.keys(isScro] = value;
            });
          }
      }
      /*
      * Destroys fullpage.js plugin events and optinally its html markup and styles
      */


      function destroy(all) {
        setAutoScrolling(false, 'internal');
        setAllowScrolling(true);
        setMouseHijack(false);
        setKeyboardScrolling(false);
        addClass(container, DESTROYED);
        [afterSlideLoadsId, afterSectionLoadsId, resizeId, scrollId, scrollId2, g_doubleCheckHeightId, resizeHandlerId, g_transitionLapseId].forEach(function (timeoutId) {
          clearTimeout(timeoutId);
        });
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('hashchange', hashChangeHandler);
        window.removeEventListener('resize', resizeHandler);
        document.removeEventListener('keydown', keydownHandler);
        document.removeEventListener('keyup', keyUpHandler);
        ['clickegatedEvents);
        });
        ['mouseenter', 'touchstart', 'mouseleae is required!
        }); //lets make a mess!

        if (all) {
          destroyStructure();
        }
      }
      /*
      * Removes inline styles added by fullpage.js
      */


      function destroyStructure() {
        //reseting the `top` or `translate` properties to 0
        silentScroll(0); //loading all the lazy load content

        $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function (item) {
          setSrc(item, 'src');
        });
        $('imem, 'srcset');
        });
        remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL)); //removing inline styles

        css($(SECTION_SEL), {
          'height': '',
          'background-color': '',
          'padding': ''
        });
        css($(SLIDE_SEL), {
          'width': ''
        });
        css(container, {
          'height': '',
          'position': '',
          '-ms-touch-action': '',
          'touch-action': ''
        });
        css($htmlBody, {
          'overflow': '',
          'height': ''
        }); // remove .fp-enabled class

        removeClass($html, ENABLED); // remove .fp-responsive class

        removeClass($body, RESPONSIVE); // remove all of the .fp-viewing- classes

        $body.className.split(/\s+/).forEach(function (className) {
          if (className.indexOf(VIEWING_PREFIX) === 0) {
            removeClass($body, className);
          }
        }); //removing added classes

        $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function (item) {
          if (options.scrollOverflowHandler && options.scrollOverflow) {
            options.scrollOverflowHandler.remove(item);
          }

          removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
          var previousStyles = item.getAttribute('data-fp-styles');

          if (previousStyles) {
            item.setAttribute('style', item.getAttribute('data-fp-styles'));
          } //removing anchors if they were not set using the HTML markup


          if (hasClass(item, SECTION) && !g_initialAnchorsInDom) {
            item.removeAttribute('data-anchor');
          }
        }); //removing the applied transition from the fullpage wrapper

        removeAnimation(container); //Unwrapping content

        [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLI
          });
        }); //removing the applied transition from the fullpage wrapper

        css(container, {
          '-webkit-transition': 'none',
          'transition': 'none'
        }); //scrolling the page to the top with no animation

        window.scrollTo(0, 0); //removing selectors

        var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
      item), item);
        });
      }
      /*
      * Sets the state for a variable with multiple states (original, and temporal)
      * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
      * This function is used to keep track of both states, the original and the temporal one.
      * If type is not 'internal', then we assume the user is globally changing the vavalue;
        }
      }
      /**
      * Displays warnings
      */


      function displayWarnings() {
        var l = options['li' + 'c' + 'enseK' + 'e' + 'y'];
        var msgStyle = 'font-size: 15px;background:yellow;';

        if (!isOK) {
          showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:');
          showError('error', 'https://github.com/alvarotrigo/fullPage.js#options');
        } else if (l && l.length < 20) {
          console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
          console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
        }

        if (hasClass($html, ENABLED)) {
          showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
          return;
        } // Disable mutually exclusive settings


        if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
          options.continuousVertical = false;
          showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
        }

        if (options.scrollOverflow && (options.scrollBar || !options.autoScrolling)) {
          showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
        }

        if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) {
          options.continuousVertical = false;
          showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
        }

        if (options.scrollOverflow && options.scrollOverflowHandler == null) {
          options.scrollOverflow = false;
          showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
        } //using extensions? Wrong file!


        extensions.forEach(function (extension) {
          //is the option set to true?
          if (options[extension]) {
            showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' + extension);
          }
        }); //anchors can not have the same value as any element ID or NAME

        options.anchors.forEach(function (name) {
          //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
          var nameAttr = [].slice.call($('[name]')).filter(function (item) {
            return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase();
          });
          var idAttr = [].slicLowerCase();
          });

          if (idAttr.length || nameAttr.length) {
            showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
            var propertyName = idAttr.length ? 'id' : 'name';

            if (idAttr.length || nameAttr.length) {
              showError('error', '"' + name + '" is is being used by another element `' + propertyName + '` property');
            }
          }
        });
      }
      /**
      * Getting the position of the element to scroll when using jQuery animations
      */


      function getScrolledPosition(element) {
        var position; //is not the window element and is a slide?

        if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
          position = element.scrollLeft;
        } else if (!options.autoScrolling || options.scrollBar) {
          position = getScrollTop();
        } else {
          position = element.offsetTop;
        } //gets the top property of the wrapper


        return position;
      }
      /**
      * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
      * http://stackoverflow.com/a/16136789/1081396
      */


      function scrollTo(element, to, duration, callback) {
        var start = getScrolledPosition(element);
        var change = to - start;
        var currentTime = 0;
        var increment = 20;
        activeAnimation = true;

        var animateScroll = function animateScroll() {
          if (activeAnimation) {
            //in order to stope it from other function whenever we want
            var val = to;
            currentTime += increment;

            if (duration) {
              val = window.fp_easings[options.easing](currentTime, start, change, duration);
            }

            setScrolling(element, val);

            if (currentTime < duration) {
              setTimeout(animateScroll, increment);
            } else if (typeof callback !== 'undefined') {
              callback();
            }
          } else if (currentTime < duration) {
            callback();
          }
        };

        animateScroll();
      }
      /**
      * Scrolls the page / slider the given number of pixels.
      * It will do it one or another way dependiong on the library's config.
      */


      function setScrolling(element, val) {
        if (!options.autoScrolling || options.scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
          //scrolling horizontally through the slides?
          if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
            element.scrollLeft = val;
          } //vertical scroll
          else {
              element.scrollTo(0, val);
            }
        } else {
          element.style.top = val + 'px';
        }
      }
      /**
      * Gets the active slide.
      */


      function getActiveSlide() {
        var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
        return nullOrSlide(activeSlide);
      }
      /**
      * Gets the active section.
      */


      function getActiveSection() {
        return new Section($(SECTION_ACTIVE_SEL)[0]);
      }
      /**
      * Item. Slide or Section objects share the same properties.
      */


      function Item(el, selector) {
        this.anchor = el.getAttribute('data-anchor');
        this.item = el;
        this.index = index(el, selector);
        this.isLast = this.index === el.parentElement.querySelectorAll(selector).length - 1;
        this.isFirst = !this.index;
      }
      /**
      * Section object
      */


      function Section(el) {
        Item.call(this, el, SECTION_SEL);
      }
      /**
      * Slide el, SLIDE_SEL);
      }

      return FP;
    } //end of $.fn.fullpage
    //utils

    /**
    * Shows a message in the console of the llPage: ' + text);
    }
    /**
    * Equivalent of jQuery function $().
    */


    function $(selector, context) {
      context = arguments.length > 1 ? context : document;
      return context ? context.querySelectorAll(selector) : null;
    }
    /**
    * Extends a given Object properties and its childs.
    */


    function deepExtend(out) {
      out = out || {};

      for (var i = 1, len = arguments.length; i < len; ++i) {
        var obj = arguments[i];

        if (!obj) {
          continue;
        }

        for (var key in obj) {
          if (!obj.hasOwnProperty(key)) {
            continue;
          } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


          if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            out[key] = deepExtend(out[key], obj[key]);
            continue;
          }

          out[key] = obj[key];
        }
      }

      return out;
    }
    /**
    * Checks if the passed element contains the passed class.
    */


    function hasClass(el, className) {
      if (el == null) {
        return false;
      }

      if (el.classList) {
        return el.classList.contains(className);
      }

      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
    /**
    * Gets the window height. Crment.offsetHeight;
    }
    /**
    * Gets the wiwindow.innerWidth;
    }
    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement} items
    * @param {Object} props css properties and values.
    */


    function css(items, props) {
      items = getList(items);
      var key;

      for (key in props) {
        if (props.hasOwnProperty(key)) {
          if (key !== null) {
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              item.style[key] = props[key];
            }
          }
        }
      }

      return items;
    }
    /**
    * Generic function to get the previous or next element.
    */


    function until(item, selector, fn) {
      var sibling = item[fn];

      while (sibling && !matches(sibling, selector)) {
        sibling = sibling[fn];
      }

      return sibling;
    }
    /**
    * Gets the previous element to the passed element that matches the passed selector.
    */


    function prevUntil(item, selector) {
      return until(item, selector, 'previousElementSibling');
    }
    /**
    * Gets the next element to the passed element that matches the passed selector.
    */


    function nextUntil(item, selector) {
      return until(item, selector, 'nextElementSibling');
    }
    /**
    * Gets the previous element to the passed element.
    */


    function prev(item) {
      return item.previousElementSibling;
    }
    /**
    * Gets the next element to the passextElementSibling;
    }
    /**
    * Gets the last element from the passed list o[item.length - 1];
    }
    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */


    function index(item, selector) {
      item = isArrayOrList(item) ? item[0] : item;
      var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
      var num = 0;

      for (var i = 0; i < children.length; i++) {
        if (children[i] == item) return num;
        if (children[i].nodeType == 1) num++;
      }

      return -1;
    }
    /**
    * Gets an iterable element for the passed element/s
    */


    function getList(item) {
      return !isArrayOrList(item) ? [item] : item;
    }
    /**
    * Adds the display=none property for the passed element/s
    */


    function hide(el) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'none';
      }

      return el;
    }
    /**
    * Adds the display=block property for the passed element/s
    */


    function show(el) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        el[i].style.display = 'block';
      }

      return el;
    }
    /**
    * Checks if the passed element is an iterable element or not
    */


    function isArrayOrList(el) {
      return Object.prototype.toString.call(el) === '[object Array]' || Object.prototype.toString.call(el) === '[object NodeList]';
    }
    /**
    * Adds the passed class to the passed element/s
    */


    function addClass(el, className) {
      el = getList(el);

      for (var i = 0; i < el.length; i++) {
        var item = el[i];

        if (item.classList) {
          item.classList.add(className);
        } else {
          item.className += ' ' + className;
        }
      }

      return el;
    }
    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */


    function removeClass(el, className) {
      el = getList(el);
      var classNames = className.split(' ');

      for (var a = 0; a < classNames.length; a++) {
        className = classNames[a];

        for (var i = 0; i < el.length; i++) {
          var item = el[i];

          if (item.classList) {
            item.classList.remove(className);
          } else {
            item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
          }
        }
      }

      return el;
    }
    /**
    * Appends the given element ot the git.appendChild(el);
    }
    /**
    Usage:
         var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);
         https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */


    function wrap(toWrap, wrapper, isWrapAll) {
      var newParent;
      wrapper = wrapper || document.createElement('div');

      for (var i = 0; i < toWrap.length; i++) {
        var item = toWrap[i];

        if (isWrapAll && !i || !isWrapAll) {
          newParent = wrapper.cloneNode(true);
          item.parentNode.insertBefore(newParent, item);
        }

        newParent.appendChild(item);
      }

      return toWrap;
    }
    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);
         https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery p, wrapper, true);
    }
    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */


    function wrapInner(parent, wrapper) {
      if (typeof wrapper === "string") {
        wrapper = createElementFromHTML(wrapper);
      }

      parent.appendChild(wrapper);

      while (parent.firstChild !== wrapper) {
        wrapper.appendChild(parent.firstChild);
      }
    }
    /**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */


    function unwrap(wrapper) {
      var wrapperContent = document.createDocumentFragment();

      while (wrapper.firstChild) {
        wrapperContent.appendChild(wrapper.firstChild);
      }

      wrapper.parentNode.replaceChild(wrapperContent, wrapper);
    }
    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */


    function closest(el, selector) {
      if (el && el.nodeType === 1) {
        if (matches(el, selector)) {
          return el;
        }

        return closest(el.parentNode, selector);
      }

      return null;
    }
    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/.nextSibling, el);
    }
    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/e, reference, el);
    }
    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */


    function insertBefore(reference, beforeElement, el) {
      if (!isArrayOrList(el)) {
        if (typeof el == 'string') {
          el = createElementFromHTML(el);
        }

        el = [el];
      }

      for (var i = 0; i < el.length; i++) {
        reference.parentNode.insertBefore(el[i], beforeElement);
      }
    } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-pc.clientTop || 0);
    }
    /**
    * Gets the siblings of the pas !== el;
      });
e = false;
      }
    }
    /**
    * Determines whether the passed item is of function type.
    */


    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }

      var type = Object.prototype.toString(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }
    /**
    * Trigger custom events
    */


    function trigger(el, eventName, data) {
      var event;
      data = typeof data === 'undefined' ? {} : data; // Native

      if (typeof window.CustomEvent === "function") {
        event = new CustomEvent(eventName, {
          detail: data
        });
      } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
      }

      el.dispatchEvent(event);
    }
    /**
    * Polyfill ofall(el, selector);
    }
    /**
    * Toggles the visibility of the passed element el.
    */


    function toggle(el, value) {
      if (typeof value === "boolean") {
        for (var i = 0; i < el.length; i++) {
          el[i].style.display = value ? 'block' : 'none';
        }
      } //we don't use it in other way, so no else :)


      return el;
    }
    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494rn div.firstChild;
    }
    /**
    * Removes the passed item/s from the DOM.
    */


    function remove(items) {
      items = getList(items);

      for (var i = 0; i < items.length; i++) {
        var item = items[i];

        if (item && item.parentElement) {
          item.parentNode.removeChild(item);
        }
      }
    }
    /**
    * Filters an array by the passed filtall(el, filterFn);
    } //https://jsfiddle.net/w1rktecz/


    function untilAll(item, selector, fn) {
      var sibling = item[fn];
      var siblings = [];

      while (sibling) {
        if (matches(sibling, selector) || selector == null) {
          siblings.push(sibling);
        }

        sibling = sibling[fn];
      }

      return siblings;
    }
    /**
    * Gets all next elements matching the passed selector.
    */


    function nextAll(item, selector) {
      return untilAll(item, selector, 'nextElementSibling');
    }
    /**
    * Gets all previous elements matching the passed selector.
    */


    function prevAll(item, selector) {
      return untilAll(item, selector, 'previousElementSibling');
    }
    /**
    * Converts an object tta[key];
      });
    }
    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */


    if (window.NodeList && !NodeList.prototype.forEach) {
      Nodethis);
        }
      };
    } //utils are public, so we can use it wherever we want


    window.fp_utils = {
      $: $,
      deepExtend: deepExtend,
      hasClass: hasClass,
      getWindowHeight: getWindowHeight,
      css: css,
      until: until,
      prevUntil: prevUntil,
      nextUntil: nextUntil,
      prev: prev,
      next: next,
      last: last,
      index: index,
      getList: getList,
      hide: hide,
      show: show,
      isArrayOrList: isArrayOrList,
      addClass: addClass,
      removeClass: removeClass,
      appendTo: appendTo,
      wrap: wrap,
      wrapAll: wrapAll,
      wrapInner: wrapInner,
      unwrap: unwrap,
      closest: closest,
      after: after,
      before: before,
      insertBefore: insertBefore,
      getScrollTop: getScrollTop,
      siblings: siblings,
      preventDefault: preventDefault,
      isFunction: isFunction,
      trigger: trigger,
      matches: matches,
      toggle: toggle,
      createElementFromHTML: createElementFromHTML,
      remove: remove,
      filter: filter,
      untilAll: untilAll,
      nextAll: nextAll,
      prevAll: prevAll,
      showError: showError
    };
    return initialise;
  });
  /**
   * jQuery adapter for fullPage.js 3.0.0
   */


  if (window.jQuery && window.fullpage) {
    (function ($, fullpage) {
      'use strict'; // No jQuery No Go

      if (!$ || !fullpage) {
        window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
        return;
      }

      $.fn.fullpage = function (options) {
        options = $.extend({}, options, {
          '$': $
        });
        var instance = new fullpage(this[0], options);
      };
    })(window.jQuery, window.fullpage);
  } // new fullpage('.what-we-do-sections', {
  //     //options here
  //     autoScrolling:true,
  //     scrollHorizontally: true
  // });
  // //methods
  // fullpage_api.setAllowScrolling(false);
  // $(document).ready(function() {
  //     var myFullpage = new fullpage('.what-we-do-sections', {
  //         //Navigation
  //         menu: '.cd-vertical-nav',
  //         lockAnchors: false,
  //         anchors:['firstPage', 'secondPage'],
  //         navigation: false,
  //         navigationPosition: 'right',
  //         navigationTooltips: ['firstSlide', 'secondSlide'],
  //         showActiveTooltip: false,
  //         slidesNavigation: false,
  //         slidesNavPosition: 'bottom',
  //         //Scrolling
  //         css3: true,
  //         scrollingSpeed: 700,
  //         autoScrolling: true,
  //         fitToSection: true,
  //         fitToSectionDelay: 1000,
  //         scrollBar: false,
  //         easing: 'easeInOutCubic',
  //         easingcss3: 'ease',
  //         loopBottom: false,
  //         loopTop: false,
  //         loopHorizontal: true,
  //         continuousVertical: false,
  //         continuousHorizontal: false,
  //         scrollHorizontally: false,
  //         interlockedSlides: false,
  //         dragAndMove: false,
  //         offsetSections: false,
  //         resetSliders: false,
  //         fadingEffect: false,
  //         normalScrollElements: '#element1, .element2',
  //         scrollOverflow: false,
  //         scrollOverflowReset: false,
  //         scrollOverflowOptions: null,
  //         touchSensitivity: 15,
  //         bigSectionsDestination: null,
  //         //Accessibility
  //         keyboardScrolling: true,
  //         animateAnchor: true,
  //         recordHistory: true,
  //         //Design
  //         controlArrows: true,
  //         verticalCentered: true,
  //         sectionsColor : ['#ccc', '#fff'],
  //         paddingTop: '3em',
  //         paddingBottom: '10px',
  //         fixedElements: '#header, .footer',
  //         responsiveWidth: 0,
  //         responsiveHeight: 0,
  //         responsiveSlides: false,
  //         parallax: false,
  //         parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  //         dropEffect: false,
  //         dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
  //         cards: false,
  //         cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},
  //         //Custom selectors
  //         sectionSelector: '.section',
  //         slideSelector: '.slide',
  //         lazyLoading: true,
  //         //events
  //         onLeave: function(origin, destination, direction){},
  //         afterLoad: function(origin, destination, direction){},
  //         afterRender: function(){},
  //         afterResize: function(width, height){},
  //         afterReBuild: function(){},
  //         afterResponsive: function(isResponsive){},
  //         afterSlideLoad: function(section, origin, destination, direction){},
  //         onSlideLeave: function(section, origin, destination, direction){}
  //     });
  // });

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/header.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/header.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  // Mobile Nav Toggle
  s.mmainNavActiveClass);
  }); // Mobile Nav Accordion

  s.header.find('.header-mobile-bar .main-nav .current-menu-parent').addClass('active').children('ul').slideDown();
  s.header.find('.header-mobile-bar .main-nav').on('click', 'a', function (event) {
    var $this = $(this);
    var $parent_li = $this.parent('li');

    if ($parent_li.hasClass('menu-item-has-children')) {
      event.preventDefault();

      if (!$parent_li.hasClass('active')) {
        $parent_li.addClass('active').children('ul').slideDown();
        $parent_li.siblings('li').removeClass('active').children('ul').slideUp();
      } else {
        $parent_li.removeClass('active').children('ul').slideUp();
      }
    }
  }); // const fixedMainNav = scrollPos => {
  //   if (scrollPos >= 100) {
  //     s.body.addClass(s.mainNavFixedClass);
  //   } else {
  //     s.body.removeClass(s.mainNavFixedClass);
  //   }
  // }
  // fixedMainNav(s.window.scrollTop());
  // s.window.on('scroll', _throttle(() => {
  //   const scrollPos = s.window.scrollTop();
  //   fixedMainNav(scrollPos);
  // }, 50));
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/hero-download-form.js":
/*!****************************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/hero-download-form.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.hero-download-form').each(function () {
    var $form = $(this);
    var $privacyText = $form.find('.privacy-text');
    $form.on('mouseenter', function () {
      return $privacyText.addClass('has-hover');
    });
  lass('has-hover');
    });
    $form.on('focus', '.hs-input', function () {
      $(this).closest('.hs-form-field').addClass('has-focus');
      $privacyText.addClass('has-focus');
    });
    $form.on('blur', '.hs-input', function () {
      var $this = $(this);
      var value = $this.val();

      if (value === '') {
        $this.closest('.hs-form-field').removeClass('has-focus');
      }

      $privacyText.removeClass('has-focus');
    });
  });
  $('.hero-downlddClass('expanded');
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/hubspot.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/hubspot.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var $contactForm = $('[data-contact-form]');
  $contactForm.each(function () {
    var $self = $(this);
    $('#cta-btn').click(function (event) {
      event.preventDefault();
      $(this).remove();
      $self.addClass('displayed');
      setTimeout(function () {
        $self.find('input[type="text"]').first().focus();
      }, 500);
    });
  });

  if ($contactForm.length) {
    // TODO: Move this search expression into a var obtained from twig/acf option
    $('a.btn[href*="/contact-us/"]').on('click', function (event) {
      event.preventDefault();
      $contactForm.addClass('displayed').prev().remove();
      $('html,body').animate({
        scrollTop: $contactForm.offfirst().focus();
      });
    });
  }
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/learn-more-links.js":
/*!**************************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/learn-more-links.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $("a.inline-read-more-link").click(function (event) {
    event.preventDefault();
    var $target = $('#' + $(this).data('id'));
    $target.removeClass('hide-read-more');
    $(this).remove();
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/parallax.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/parallax.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__);


















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

;

(function ($, window, document, undefined) {
  // ------------------------------------------
  // Rellax.js
  // Buttery smooth parallax library
  // Copyright (c) 2016 Moe Amaya (@moeamaya)
  // MIT license
  //
  // Thanks to Paraxify.js and Jaime Cabllero
  // for parallax concepts
  // ------------------------------------------
  (function (root, factory) {
    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
      // AMD. Register as an anonymous module.
      define([], factory);
    } else if (( false ? undefined : _typeof(module)) === 'object' && module.exports) {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory();
    } else {
      // Browser globals (root is window)
      root.Rellax = factory();
    }
  })(typeof window !== "undefined" ? window : global, function () {
    var Rellax = function Rellax(el, options) {
      "use strict";

      var self = Object.create(Rellax.prototype);
      var posY = 0;
      var screenY = 0;
      var posX = 0;
      var screenX = 0;
      var blocks = [];
      var pause = true; // check what requestAnimationFrame to use, and if
      // it's not supported, use the onscroll event

      var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oack, 1000 / 60);
      }; // store the id for later use


      var loopId = null; // Test via a getter in the options object to see if the passive property is accessed

      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'pasive = true;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
      } catch (e) {} // check what cancelAnimation method to use


      var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout; // check which transform property to use

      var transformProp =urn 'transform';
      }(); // Default Settings


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
        horizontalScrollAxis: function callback() {}
      }; // User defined options (might have more in the future)

      if (options) {
        Obje options[key];
  ults reverted");
      }

      if (options && options.breakpoints) {
        validateCustomBreakpoints();
      } // By default, rellax class


      if (!el) {
        el = '.rellax';
      } // check if el is a className or a node


      var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el]; // Now query selector

      if (elements.length > 0) {
        self.elems = elements;
      } // The elements don't exist
      else {
          console.warn("Rellax: The elements you're trying to select don't exist.");
          return;
        } // Has a wrapper and it exists


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
      } // set a placeholder for the current breakpoint


      var currentBreakpoint; // helper to determine current breakpoint

      var getCurrentBreakpoint = function getCurrentBreakpoint(w) {
        var bp = self.options.breakpoints;
        if (w < bp[0]) return 'xs';
        if (w >= bp[0] && w < bp[1]) return 'sm';
        if (w >= bp[1] && w < bp[2]) return 'md';
        return 'lg';
      }; // Get and cache initial position of all elements


      var cacheBlocks = function cacheBlocks() {
        for (var i = 0; i < self.elems.length; i++) {
          var block = createBlock(self.elems[i]);
          blocks.push(block);
        }
      }; // Let's kick this script off
      // Build array for cached element values


      var init = function init() {
        for (var i = 0; i < blocks.length; i++) {
          self.elems[i].style.cssText = blocks[i].style;
        }

        blocks = [];
        screenY = window.innerHeight;
        screenX = window.innerWidth;
        currentBreakpoint = getCurrentBreakpoint(screenX);
        setPosition();
        cacheBlocks();
        animate(); // If paused, unpause and set listener for window resizing events

        if (pause) {
          window.addEventListener('resize', init);
          pause = false; // Start the loop

          update();
        }
      }; // We want to cache the parallax blocks'
      // values: base, top, height, speed
      // el: is dom object, return: el cache values


      var createBlock = function createBlock(el) {
        var dataPercentage = el.getAttribute('data-rellax-percentage');
        var dataSpeed = el.getAttribute('data-rellax-speed');
        var dataXsSpeed = el.getAttribute('data-rellax-xs-speed');
        var dataMobileSpeed = el.getAttribute('data-rellax-mobile-speed');
        var dataTabletSpeed = el.getAttribute('data-rellax-tablet-speed');
        var dataDesktopSpeed = el.getAttribute('data-rellax-desktop-speed');
        var dataVerticalSpeed = el.getAttribute('data-rellax-vertical-speed');
        var dataHorizontalSpeed = el.getAttribute('data-rellax-horizontal-speed');
        var dataVericalScrollAxis = el.getAttribute('data-rellax-vertical-scroll-axis');
        var dataHorizontalScrollAxis = el.getAttribute('data-rellax-horizontal-scroll-axis');
        var dataZindex = el.getAttribute('data-rellax-zindex') || 0;
        var dataMin = el.getAttribute('data-rellax-min');
        var dataMax = el.getAttribute('data-rellax-max');
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
        } // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
        // ensures elements are positioned based on HTML layout.
        //
        // If the element has the percentage attribute, the posY and posX needs to be
        // the current scroll position's value, so that the elements are still positioned based on HTML layout


        var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.

        if (self.options.relativeToWrapper) {
          var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
        }

        var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
        var posX = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
        var blockTop = posY + el.getBoundingClientRect().top;
        var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;
        var blockLeft = posX + el.getBoundingClientRect().left;
        var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth; // apparently parallax equation everyone uses

        var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);
        var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);

        if (self.options.center) {
          percentageX = 0.5;
          percentageY = 0.5;
        } // Optional individual block speed as data attr, otherwise global speed


        var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;
        var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
        var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed; // Optional individual block movement axis direction as data attr, otherwise global movement direction

        var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
        var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;
        var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed); // ~~Store non-translate3d transforms~~
        // Store inline styles and extract transforms

        var style = el.style.cssText;
        var transform = ''; // Check if there's an inline styled transform

        var searchResult = /transform\s*:/i.exec(style);

        if (searchResult) {
          // Get the index of the transform
          var index = searchResult.index; // Trim the style to the transform point and get the following semi-colon index

          var trimmedStyle = style.slice(index);
          var delimiter = trimmedStyle.indexOf(';'); // Remove "transform" string and save the attribute

          if (delimiter) {
            transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, '');
          } else {
            transform = " " + trimmedStyle.slice(11).replace(/\s/g, '');
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
      }; // set scroll position (posY, posX)
      // side effect method is not ideal, but okay for now
      // returns true if the scroll changed, false if nothing happened


      var setPosition = function setPosition() {
        var oldY = posY;
        var oldX = posX;
        posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
        posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset; // If option relativeToWrapper is true, use relative wrapper value instead.

        if (self.options.relativeToWrapper) {
          var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
          posY = scrollPosY - self.options.wrapper.offsetTop;
        }

        if (oldY != posY && self.options.vertical) {
          // scroll changed, return true
          return true;
        }

        if (oldX != posX && self.options.horizontal) {
          // scroll changed, return true
          return true;
        } // scroll did not change


        return false;
      }; // Ahh a pure function, gets new transform value
      // based on scrollPosition and speed
      // Allow for decimal pixel values


      var updatePosition = function updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
        var result = {};
        var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
        var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
        result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
        result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
        return result;
      }; // Remove event listeners and loop again


      var deferredUpdate = function deferredUpdate() {
        window.removeEventListener('resize', deferredUpdate);
        window.removeEventListener('orientationchange', deferredUpdate);
        (self.options.wrapper ? self.options.wrapper : window).removeEventListener('scroll', deferredUpdate);
        (self.options.wrapper ? self.options.wrapper : document).removeEventListener('touchmove', deferredUpdate); // loop again

        loopId = loop(update);
      }; // Loop


      var update = function update() {
        if (setPosition() && pause === false) {
          animate(); // loop again

          loopId = loop(update);
        } else {
          loopId = null; // Don't animate until we get a position updating event

          window.addEventListener('resize', deferredUpdate);
          window.addEventListener('orientationchange', deferredUpdate);
          (self.options.wrapper ? self.options.wrapper : window).addEventListener('scroll', deferredUpdate, supportsPassive ? {
            passive: true
          } : false);
          (self.options.wrapper ? self.options.wrapper : document).addEventListener('touchmove', deferredUpdate, supportsPassive ? {
            passive: true
          } : false);
        }
      }; // Transform3d on parallax element


      var animate = function animate() {
        var positions;

        for (var i = 0; i < self.elems.length; i++) {
          // Determine relevant movement directions
          var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
          var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
          var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
          var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
          var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
          var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
          var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
          var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX); // Subtracting initialize value, so element stays in same spot as HTML

          positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
          var positionY = positions.y - blocks[i].baseY;
          var positionX = positions.x - blocks[i].baseX; // The next two "if" blocks go like this:
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
          } // Check if directional min limits are defined


          if (blocks[i].minY != null) {
            positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
          }

          if (blocks[i].minX != null) {
            positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
          } // Check if a max limit is defined


          if (blocks[i].max !== null) {
            if (self.options.vertical && !self.options.horizontal) {
              positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
            }

            if (self.options.horizontal && !self.options.vertical) {
              positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
            }
          } // Check if directional max limits are defined


          if (blocks[i].maxY != null) {
            positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
          }

          if (blocks[i].maxX != null) {
            positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
          }

          var zindex = blocks[i].zindex; // Move that element
          // (Set the new translation and append initial inline transforms.)

          var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;
          self.elems[i].style[transformProp] = translate;
        }

        self.options.callback(positions);
        loopId = null;
      }; // Init


      init(); // Allow to recalculate the initial values whenever we want

      self.refresh = init;
      return self;
    };

    return Rellax;
  });

  $(document).ready(function () {
    if ($('div').hasClass('parallax__layer')) {
      var rellax = new Rellax('.parallax__layer', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
    }
  });
  $(document).ready(function () {
    if ($('div').hasClass('parallax__header')) {
      window.addEventListener('scroll', function (e) {
        var scrolled = window.pageYOffset;
        var background = document.querySelector('.parallax__header');
        background.style.top = scrolled * 0.2 + 'px';
      });
    }
  });
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/podcast.js":
/*!*****************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/podcast.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  var $loadMore = $('[data-load-more]').first();
  var $append = $('[data-append-posts]').first();
  $loadMore.click(function (event) {
    event.preventDefault();
    $loadMore.addClass('active');
    fetchPosts($loadMore.attr('href'), function (html, nextUrl) {
      $loadMore.removeClass('active').attr('href', nextUrl);

      if (nextUrl === '') {
        $loadMore.remove();
      }

      $append.append(html);
    });
  });
});
var fetching = 0;

var fetchPosts = function fetchPosts(url, cb) {
  if (url && !fetching) {
    fetching = 1;
    $.get(url, function (html) {
      var result = $(html).find('[data-append-posts]').html();
      var nextUrl = $(html).find('[data-load-more]').first().attr('href') || '';
      cb(result, nextUrl);
    }).always(function () {
      fetching = 0;
    });
  }
};

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/scrollreveal.js":
/*!**********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/scrollreveal.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $(function () {
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.scaleup', {
      delay: 250,
      duration: 500,
      origin: 'bottom',
      distance: '10px',
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinright', {
      delay: 250,
      interval: 250,
      duration: 1500,
      origin: 'right',
      distance: '50px'
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinrightlongdelay', {
      delay: 1000,
      interval: 250,
      duration: 1500,
      origin: 'right',
      distance: '150px'
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinleftnodelay', {
      delay: 0,
      interval: 250,
      duration: 1500,
      origin: 'left',
      distance: '50px',
      viewOffset: {
        top: -288
      }
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinleftlongdelay', {
      delay: 1000,
      interval: 250,
      duration: 1500,
      origin: 'left',
      distance: '150px',
      viewOffset: {
        top: -288
      }
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinleft', {
      delay: 250,
      interval: 250,
      duration: 1500,
      origin: 'left',
      distance: '50px'
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinup', {
      delay: 250,
      interval: 250,
      duration: 1500,
      origin: 'top',
      distance: '50px'
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinupnomobile', {
      delay: 250,
      interval: 250,
      duration: 1500,
      origin: 'top',
      distance: '50px',
      mobile: false
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideinup-no-reset', {
      delay: 250,
      interval: 250,
      duration: 1500,
      origin: 'top',
      distance: '50px',
      reset: false
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideindown', {
      delay: 250,
      interval: 250,
      duration: 1500,
      origin: 'bottom',
      distance: '50px'
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slideindownnomobile', {
      delay: 250,
      interval: 250,
      duration: 1500,
      origin: 'bottom',
      distance: '50px',
      mobile: false
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:first-child', {
      delay: 600,
      duration: 500,
      origin: 'right',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(2)', {
      delay: 500,
      duration: 750,
      origin: 'right',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(3)', {
      delay: 400,
      duration: 750,
      origin: 'right',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(4)', {
      delay: 300,
      duration: 750,
      origin: 'right',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(5)', {
      delay: 200,
      duration: 750,
      origin: 'bottom',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(6)', {
      delay: 100,
      duration: 750,
      origin: 'top',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(7)', {
      delay: 200,
      duration: 750,
      origin: 'bottom',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(8)', {
      delay: 300,
      duration: 750,
      origin: 'top',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(9)', {
      delay: 400,
      duration: 750,
      origin: 'bottom',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(10)', {
      delay: 500,
      duration: 750,
      origin: 'left',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(11)', {
      delay: 600,
      duration: 750,
      origin: 'bottom',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.brands-list li:nth-child(12)', {
      delay: 600,
      duration: 750,
      origin: 'left',
      distance: '0',
      reset: true,
      scale: 0
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.cta-shapes-wrapper', {
      delay: 250,
      duration: 2500,
      origin: 'bottom',
      distance: '100px',
      reset: false,
      scale: 0.5
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.block-cta img', {
      delay: 100,
      duration: 1250,
      origin: 'bottom',
      distance: '100px',
      reset: true
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.block-cta h2', {
      delay: 350,
      duration: 1250,
      origin: 'bottom',
      distance: '100px',
      reset: true
    });
    Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.block-cta a', {
      delay: 350,
      duration: 1250,
      origin: 'bottom',
      distance: '100px',
      reset: true
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/slick.js":
/*!***************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/slick.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_} return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  /* global window, document, define, jQuery, setInterval, clearInterval */
  ;

  (function (factory) {
    'use strict';

    if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
      define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
      module.exports = factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed"));
    } else {
      factory(jQuery);
    }
  })(function ($) {
    'use strict';

    var Slick = window.S     return Slick;
    }();

    Slickex': '0'
      });
    };

    Slick.prototype.addSlide = Sl
      _.reinit();
    };

    Slick.pns.speed);
      }
    };

    Slick.
        }
      }
    };

    Slick.  return asNavFor;
    };

    Sl       });
      }
    };

    Slick.proansition);
      }
    };

    SllaySpeed);
      }
    };

    Slick.playTimer);
      }
    };

    Slick.prot(slideTo);
      }
    };

    Slick
        }
      }
    };

    Sli-active');
      }
    };

    Slaggable');
      }
    };

    Sli       });
      }
    };

    Slick.pro
        }
      }
    };

    Slick   return;
      }
    };

    Slick.pr     return index;
    };

    Slick.pd, _.setPosition);
    };

    Slick.prototrrupt, _, false));
    };

    SlickalSlides);
      }
    };

    Slick.Default();
      }
    };

    Soy', [_]);
      }
    };

    Slick.protoansition);
      }
    };

    Sli
        }
      }
    };

    Slick.       });
      }
    };

    Slick.prototype.filterSlides = Slick.reinit();
      }
    };

    Slick.       }
      });
    };

    Slick.prototype.getCurrent = Slick.protorn _.currentSlide;
    };

    Slickturn pagerQty - 1;
    };

    Sreturn targetLeft;
    };

    Slick.prototype.getOption = Slick.pr_.options[option];
    };

    Slick.prototy   return indexes;
    };

    Slick.prototype.getSlick = function () {
      return this;
    };

    Slick.psToScroll;
      }
    };

    Slick.prototype.goTo = Sli  }, dontAnimate);
    };

  utoPlay();
      }
    };

    S  _.activateADA();
    };

    Slick.pro
        }
      }
    };

    Slick.p, false));
      }
    };

    Slick.pro, false));
      }
    };

    Slick.prot $(_.setPosition);
    };

    ts.show();
      }
    };

    Slic
        }
      }
    };

    SloneRange);
      }
    };

    SlicazyLoad();
      }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {
      var _ = this;

      _.changeSlide({
        data: {
          message: 'next'
        }
      });
    };

    Slick.proto  _.setPosition();
    };

    Slick.prototype.pause = Slic  _.paused = true;
    };

    Slick.prototype.play = Sliterrupted = false;
    };

    Sli
        }
      }
    };

    Slick.prototype.prev = Sli       }
      });
    };

    Slick.prototype.preventDefault = function (event) {
      event.preventDefault();
    };

    Slick.prototyed', [_]);
      }
    };

    S}, false);
      }
    };

    Slick.prototy       });
      }
    };

    er('reInit', [_]);
    };

       }, 50);
      }
    };

    Slick.prototype.removeSlide = Slick
      _.reinit();
    };

    
        }
      }
    };

    Slick.pdeWidth - offset);
    };

    Sacity: 1
      });
    };

    SlietHeight);
      }
    };

    Slick.prototype.setOption = Slick.pr.reinit();
      }
    };

    SlicketPosition', [_]);
    };

    SlnimType !== false;
    };

    Slick.proazyLoad();
      }
    };

    Slick.p
        }
      }
    };

    Slierrupted = toggle;
    };

    Slick.pideHandler(index);
    };

    Slick.nimSlide);
      }
    };

    Sli('slick-loading');
    };

    Slick.prreturn 'vertical';
    };

    Sl
        }
      }
    };

    Slick.    break;
      }
    };

    SlitCSS(_.swipeLeft);
    };

    Slic_.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.p.reinit();
      }
    };

    .css('width', '');
    };

    S      _.destroy();
    };

    Slick.
        }
      }
    };

    Slic-active');
      }
    };

    Slic
        }
      }
}

      return _;
    }; // $('.what-we-do-sections').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     vertical: true,
    //     dots: true
    // });

  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/stickybits.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/stickybits.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
















var _this = undefined;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.7.9
  @link https://github.com/yowainwright/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  !function (t, s) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = s() : "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(s) : (t = t || self).stickybits = s();
  }(_this, function () (this, arguments);
    }

    varsh(h);
        }
      }

      var s = t.prototype;
      return s.definePosition = function () {
        var t;
        if (this.props.useFixed) t = "fixed";else {
          for (var s = ["", "-o-", "-webkit-", "-moz-", "-ms-"], e = document.head.style, i = 0; i < s.length; i += 1) {
            e.position = s[i] + "sticky";
          }

          t = e.position ? e.position : "fixed", e.position = "";
        }
        return t;
       return i;
      }, s.getClosestParent = function (t, s) {
        var e = s,
            i = t;
        if (i.parentElement === e) return e;

        for (; i.parentElement !== e;) {
          i = i.parentElement;
        }

        return e;
      }, s.getTopPosition = function (t) {
        if (this.props.useGetBoundingClientRect) return t.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop);

        for (var s = 0; s = t.offsetTop + s, t = t.offsetParent;) {
          ;
        }

        return s;
      }, dow.innerHeight;
  e = n.join(" ");
 r);
        });
      }, s.applyStyle = function (t, s) {
        var e = t.styles,
            i = t.classes,
            n = s.el,
            o = s.props,
            a = n.style,
            l = o.noStyles,
            r = n.className.split(" ");

        for (var c in i) {
          if (i[c]) -1 === r.indexOf(c) && r.push(c);else {
            var p = r.indexOf(c);
            -1 !== p && r.splice(p, 1);
          }
        }

        if (n.className = r.join(" "), e.position && (a.position = e.position), !l) for (var f in e) {
          a[f] = e[f];
        }
      }, s.update = function (e) {
        var i = this;
        return void 0 === e && (e = null), this.instances.forEach(function (t) {
          if (i.computeScrollOffsets(t), e) for (var s in e) {
            t.props[s] = e[s];
          }
        }), this;
    n.parentClas.instances = [];
      },eturn new e(t, s);
    };
  });
  $(function () {// $('.cd-section').each(function(index){
    //     stickybits("#section"+(index+1), { useStickyClasses: true });
    // })
    //stickybits(".cd-section", { useStickyClasses: true });
    // stickybits("#section1", { useStickyClasses: true });
    // stickybits("#section2");
    // stickybits("#section3");
    // stickybits("#section4");
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/tabber.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/tabber.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('.tabber').each(function () {
    var $tabber = $(this);
    var $tabberNav = $tabber.find('.tab-nav');
    var $tabs = $tabber.find('.tab');
    var $select = $tabber.find('select');
    $tabberNav.click(function (event) {
      var $nav = $(this);
      var $tab = $($nav.attr('href'));

      if ($tab.length) {
        event.preventDefault();
        $tab.addClass('active');
        $nav.parent().addClass('active').siblings().removeClass('active');
        $tabs.not($tab).removeClass('active');
      }
    });
    $select.on('change', function () {
      var $tab = $($(this).val());

      if ($tab.length) {
        $tab.addClass('active');
        $tabs.not($tab).removeClass('active');
      }
    });
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/components/workable.js":
/*!******************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/components/workable.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (s) {
  $('body').on('click', function (event) {
    var $target = $(event.target);

    if ($target.is('.whr-description')) {
      $target.addClass('displayed');
    }
  });
});

/***/ }),

/***/ "./wp-content/themes/superawesome/js/main.js":
/*!***************************************************!*\
  !*** ./wp-content/themes/superawesome/js/main.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js-exposed");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_easing_jquery_easing_1_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-easing/jquery.easing.1.3 */ "./node_modules/jquery-easing/jquery.easing.1.3.js");
/* harmony import */ var jquery_easing_jquery_easing_1_3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_easing_jquery_easing_1_3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flickity_dist_flickity_pkgd_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flickity/dist/flickity.pkgd.min */ "./node_modules/flickity/dist/flickity.pkgd.min.js");
/* harmony import */ var flickity_dist_flickity_pkgd_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flickity_dist_flickity_pkgd_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fancyapps_fancybox_dist_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fancyapps/fancybox/dist/jquery.fancybox.min */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js");
/* harmony import */ var _fancyapps_fancybox_dist_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox_dist_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vendor_jquery_fitvids__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor/jquery.fitvids */ "./wp-content/themes/superawesome/js/vendor/jquery.fitvids.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ "./wp-content/themes/superawesome/js/components/header.js");
/* harmony import */ var _blocks_news_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/news-bar */ "./wp-content/themes/superawesome/js/blocks/news-bar.js");
/* harmony import */ var _blocks_what_we_do__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/what-we-do */ "./wp-content/themes/superawesome/js/blocks/what-we-do.js");
/* harmony import */ var _blocks_who_we_are__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/who-we-are */ "./wp-content/themes/superawesome/js/blocks/who-we-are.js");
/* harmony import */ var _blocks_vertical_slides__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/vertical-slides */ "./wp-content/themes/superawesome/js/blocks/vertical-slides.js");
/* harmony import */ var _blocks_image_over_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/image-over-content */ "./wp-content/themes/superawesome/js/blocks/image-over-content.js");
/* harmony import */ var _blocks_image_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/image-content */ "./wp-content/themes/superawesome/js/blocks/image-content.js");
/* harmony import */ var _blocks_content_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/content-carousel */ "./wp-content/themes/superawesome/js/blocks/content-carousel.js");
/* harmony import */ var _blocks_resources_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/resources-slider */ "./wp-content/themes/superawesome/js/blocks/resources-slider.js");
/* harmony import */ var _blocks_people_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/people-slider */ "./wp-content/themes/superawesome/js/blocks/people-slider.js");
/* harmony import */ var _blocks_timezone_columns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/timezone-columns */ "./wp-content/themes/superawesome/js/blocks/timezone-columns.js");
/* harmony import */ var _blocks_products_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/products-grid */ "./wp-content/themes/superawesome/js/blocks/products-grid.js");
/* harmony import */ var _blocks_instagram_feed_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/instagram-feed-carousel */ "./wp-content/themes/superawesome/js/blocks/instagram-feed-carousel.js");
/* harmony import */ var _blocks_subscribe_newsletter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/subscribe-newsletter */ "./wp-content/themes/superawesome/js/blocks/subscribe-newsletter.js");
/* harmony import */ var _blocks_brands__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/brands */ "./wp-content/themes/superawesome/js/blocks/brands.js");
/* harmony import */ var _blocks_home_hero__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/home-hero */ "./wp-content/themes/superawesome/js/blocks/home-hero.js");
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/counter */ "./wp-content/themes/superawesome/js/components/counter.js");
/* harmony import */ var _components_hubspot__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/hubspot */ "./wp-content/themes/superawesome/js/components/hubspot.js");
/* harmony import */ var _components_workable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/workable */ "./wp-content/themes/superawesome/js/components/workable.js");
/* harmony import */ var _components_faq_search__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/faq-search */ "./wp-content/themes/superawesome/js/components/faq-search.js");
/* harmony import */ var _components_blog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/blog */ "./wp-content/themes/superawesome/js/components/blog.js");
/* harmony import */ var _components_podcast__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/podcast */ "./wp-content/themes/superawesome/js/components/podcast.js");
/* harmony import */ var _components_hero_download_form__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/hero-download-form */ "./wp-content/themes/superawesome/js/components/hero-download-form.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _components_tabber__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/tabber */ "./wp-content/themes/superawesome/js/components/tabber.js");
/* harmony import */ var _blocks_adgallery__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/adgallery */ "./wp-content/themes/superawesome/js/blocks/adgallery.js");
/* harmony import */ var _components_learn_more_links__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/learn-more-links */ "./wp-content/themes/superawesome/js/components/learn-more-links.js");
/* harmony import */ var _components_parallax__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/parallax */ "./wp-content/themes/superawesome/js/components/parallax.js");
/* harmony import */ var _components_scrollreveal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/scrollreveal */ "./wp-content/themes/superawesome/js/components/scrollreveal.js");
/* harmony import */ var _components_slick__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/slick */ "./wp-content/themes/superawesome/js/components/slick.js");
/* harmony import */ var _components_stickybits__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/stickybits */ "./wp-content/themes/superawesome/js/components/stickybits.js");
/* harmony import */ var _components_fullpage__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/fullpage */ "./wp-content/themes/superawesome/js/components/fullpage.js");
/* harmony import */ var _components_chart_content__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/chart-content */ "./wp-content/themes/superawesome/js/components/chart-content.js");
/* harmony import */ var _blocks_page_form_section__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/page-form-section */ "./wp-content/themes/superawesome/js/blocks/page-form-section.js");



 // import 'flickity-fade';


 // import _throttle from 'lodash/throttle';



































var Site = {};
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  Site.vars = {
    window: jquery__WEBPACK_IMPORTED_MODULE_1___default()(window),
    document: jquery__WEBPACK_IMPORTED_MODULE_1___default()(document),
    body: jquery__WEBPACK_IMPORTED_MODULE_1___default()('body'),
    htmlBody: jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body'),
    header: jquery__WEBPACK_IMPORTED_MODULE_1___default()('#header'),
    footer: jquery__WEBPACK_IMPORTED_MODULE_1___default()('#footer'),
    mainNavToggle: jquery__WEBPACK_IMPORTED_MODULE_1___default()('.main-nav-toggle'),
    mainNavActiveClass: 'main-nav-open',
    mainNavFixedClass: 'main-nav-fixed',
    siteUrl: window.siteUrl,
    ajaxUrl: window.ajaxUrl,
    themeUrl: window.themeUrl
  };
  var s = Site.vars;
  Object(_components_scrollreveal__WEBPACK_IMPORTED_MODULE_34__["default"])(s);
  ScrollMagic(s);
  Object(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"])(s);
  Object(_components_counter__WEBPACK_IMPORTED_MODULE_22__["default"])(s);
  Object(_blocks_news_bar__WEBPACK_IMPORTED_MODULE_7__["default"])(s);
  Object(_blocks_what_we_do__WEBPACK_IMPORTED_MODULE_8__["default"])(s);
  Object(_blocks_who_we_are__WEBPACK_IMPORTED_MODULE_9__["default"])(s);
  Object(_blocks_vertical_slides__WEBPACK_IMPORTED_MODULE_10__["default"])(s);
  Object(_blocks_image_over_content__WEBPACK_IMPORTED_MODULE_11__["default"])(s);
  Object(_blocks_image_content__WEBPACK_IMPORTED_MODULE_12__["default"])(s);
  Object(_blocks_content_carousel__WEBPACK_IMPORTED_MODULE_13__["default"])(s);
  Object(_blocks_resources_slider__WEBPACK_IMPORTED_MODULE_14__["default"])(s);
  Object(_blocks_people_slider__WEBPACK_IMPORTED_MODULE_15__["default"])(s);
  Object(_blocks_timezone_columns__WEBPACK_IMPORTED_MODULE_16__["default"])(s);
  Object(_blocks_products_grid__WEBPACK_IMPORTED_MODULE_17__["default"])(s);
  Object(_blocks_instagram_feed_carousel__WEBPACK_IMPORTED_MODULE_18__["default"])(s);
  Object(_blocks_subscribe_newsletter__WEBPACK_IMPORTED_MODULE_19__["default"])(s);
  Object(_components_hero_download_form__WEBPACK_IMPORTED_MODULE_28__["default"])(s);
  Object(_blocks_brands__WEBPACK_IMPORTED_MODULE_20__["default"])(s);
  Object(_blocks_home_hero__WEBPACK_IMPORTED_MODULE_21__["default"])(s);
  Object(_components_slick__WEBPACK_IMPORTED_MODULE_35__["default"])(s);
  Object(_components_stickybits__WEBPACK_IMPORTED_MODULE_36__["default"])(s);
  Object(_components_fullpage__WEBPACK_IMPORTED_MODULE_37__["default"])(s);
  Object(_components_chart_content__WEBPACK_IMPORTED_MODULE_38__["default"])(s);
  Object(_blocks_page_form_section__WEBPACK_IMPORTED_MODULE_39__["default"])(s); // Update page views field on blog posts

  if (s.body.hasClass('single-post')) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.post(s.ajaxUrl, {
      action: 'sa_set_post_views',
      id: parseInt(s.body.data('id'))
    });
  }

  if (window.location.hostname === 'localhost') {
    s.body.addClass('wp-debug');
  } // FitVids.js


  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.page-container figure.media').fitVids();
  Object(_components_hubspot__WEBPACK_IMPORTED_MODULE_23__["default"])(s);
  Object(_components_workable__WEBPACK_IMPORTED_MODULE_24__["default"])(s);
  Object(_components_faq_search__WEBPACK_IMPORTED_MODULE_25__["default"])(s);
  Object(_components_blog__WEBPACK_IMPORTED_MODULE_26__["default"])(s);
  Object(_components_podcast__WEBPACK_IMPORTED_MODULE_27__["default"])(s);
  Object(_components_tabber__WEBPACK_IMPORTED_MODULE_30__["default"])(s);
  Object(_blocks_adgallery__WEBPACK_IMPORTED_MODULE_31__["default"])(s);
  Object(_components_learn_more_links__WEBPACK_IMPORTED_MODULE_32__["default"])(s); //Parallax(s);

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() > 992) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.menu-btn a').addClass('btn-primary btn');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Site);

/***/ }),

/***/ "./wp-content/themes/superawesome/js/maxheight.js":
/*!********************************************************!*\
  !*** ./wp-content/themes/superawesome/js/maxheight.js ***!
  \********************************************************/
/*! exports provided: setMaxHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMaxHeight", function() { return setMaxHeight; });
// Set the same height to an array of elements
var setMaxHeight = function setMaxHeight($elements, $height) {
  var $overflow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var maxHeight = 0;
  $elements.css({
    'max-height': ''
  });
  $elements.each(function () {
    var height = $($height).innerHeight();

    if (height > maxHeight) {
      maxHeight = height;
    }
  });
  $elements.css('max-height', 'calc(' + $overflow + '% + ' + maxHeight + 'px)');
};

/***/ }),

/***/ "./wp-content/themes/superawesome/js/minheight.js":
/*!********************************************************!*\
  !*** ./wp-content/themes/superawesome/js/minheight.js ***!
  \********************************************************/
/*! exports provided: setMinHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMinHeight", function() { return setMinHeight; });
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! waypoints/lib/jquery.waypoints */ "./node_modules/waypoints/lib/jquery.waypoints.js");
/* harmony import */ var waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_jquery_waypoints__WEBPACK_IMPORTED_MODULE_0__);
 // Set the same height to an array of elements

var setMinHeight = function setMinHeight($elements, $height) {
  var $offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // let minHeight = 0;
  // $elements.css({ 'min-height': '' });
  // $elements.each(function () {
  //   const height = $($height).innerHeight() - $offset;
  //   if (height > minHeight) {
  //     minHeight = height;
  //   }
  // });
  // $elements.css({ 'min-height': `${minHeight}px` });
  var minHeight = 0;
  $elements.css({
    'min-height': ''
  });
  $elements.each(function () {
    new Waypoint({
      element: $elements,
      handler: function handler(direction) {
        if (direction === 'down') {
          var height = $($height).innerHeight() - $offset;

          if (height > minHeight) {
            minHeight = height;
          }

          $elements.css({
            'min-height': "".concat(minHeight, "px")
          });
        }
      },
      offset: '150%'
    });
  });
};

/***/ }),

/***/ "./wp-content/themes/superawesome/js/utils.js":
/*!****************************************************!*\
  !*** ./wp-content/themes/superawesome/js/utils.js ***!
  \****************************************************/
/*! exports provided: setMinHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMinHeight", function() { return setMinHeight; });
// Set the same height to an array of elements
var setMinHeight = function setMinHeight($elements) {
  var minHeight = 0;
  $elements.css({
    'min-height': 'ight = height;
    }
  });
  $elements.css({
    'min-height': "".concat(minHeight, "px")
  });
};

/***/ }),

/***/ "./wp-content/themes/superawesome/js/vendor/jquery.fitvids.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/superawesome/js/vendor/jquery.fitvids.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);




/*jshint browser:true */

/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sameither jQuery or Zepto
})(window.jQuery || window.Zepto);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map