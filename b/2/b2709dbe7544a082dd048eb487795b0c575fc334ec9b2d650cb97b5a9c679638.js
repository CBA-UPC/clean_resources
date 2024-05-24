!function(c,l,a,r,i,t,y){function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://www.clarity.ms/s/0.7.20/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"3xldl8atnn","upload":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":true,"content":true,"dob":1491});ttp://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
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
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
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
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
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

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
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
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

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

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

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

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

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
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
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

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);
fREVGQVVMVA\u003d\u003d\",\"modifyChannelNotificationPreferenceEndpoint\":{\"params\":\"ChhVQ1BDOWx3VkxMWjZZcWcwN1U4Znh2UGcSAggBGAE%3D\"}},\"trackingParams\":\"CAUQmE0iEwjX_J6d-IeEAxWRS0ECHTqODuM\u003d\",\"defaultTooltip\":\"Recibirás una notificación cada vez que haya un vídeo nuevo\",\"toggledTooltip\":\"Ya no recibirás notificaciones cada vez que haya un vídeo nuevo\"}}}},\"subtitle\":{\"runs\":[{\"text\":\"129 suscriptores\"}]},\"trackingParams\":\"CAMQ5KICIhMI1_yenfiHhAMVkUtBAh06jg7j\"}},\"channelThumbnailEndpoint\":{\"clickTrackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"channelThumbnailEndpoint\":{\"urlEndpoint\":{\"clickTrackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"urlEndpoint\":{\"url\":\"/channel/UCPC9lwVLLZ6Yqg07U8fxvPg\"}}}}}},\"shareButton\":{\"buttonRenderer\":{\"style\":\"STYLE_OPACITY\",\"size\":\"SIZE_DEFAULT\",\"isDisabled\":false,\"text\":{\"runs\":[{\"text\":\"Compartir\"}]},\"icon\":{\"iconType\":\"SHARE_ARROW\"},\"navigationEndpoint\":{\"clickTrackingParams\":\"CAIQ-N8BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"shareVideoEndpoint\":{\"videoId\":\"J2p1xkGPm6U\",\"videoShareUrl\":\"https://youtu.be/J2p1xkGPm6U\",\"videoTitle\":\"WhyEdTerps: COE Student Sarah Cooper\"}},\"trackingParams\":\"CAIQ-N8BIhMI1_yenfiHhAMVkUtBAh06jg7j\"}},\"addToWatchLaterButton\":{\"buttonRenderer\":{\"style\":\"STYLE_OPACITY\",\"size\":\"SIZE_DEFAULT\",\"isDisabled\":false,\"text\":{\"runs\":[{\"text\":\"Ver más tarde\"}]},\"serviceEndpoint\":{\"clickTrackingParams\":\"CAEQ-d8BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"playlistEditEndpoint\":{\"playlistId\":\"WL\",\"actions\":[{\"addedVideoId\":\"J2p1xkGPm6U\",\"action\":\"ACTION_ADD_VIDEO\"}]}},\"icon\":{\"iconType\":\"ADD_TO_WATCH_LATER\"},\"accessibility\":{\"label\":\"Guardado en Ver más tarde\"},\"trackingParams\":\"CAEQ-d8BIhMI1_yenfiHhAMVkUtBAh06jg7j\"}},\"videoDurationSeconds\":\"31\",\"webPlayerActionsPorting\":{\"getSharePanelCommand\":{\"clickTrackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"webPlayerShareEntityServiceEndpoint\":{\"serializedShareEntity\":\"CgtKMnAxeGtHUG02VQ%3D%3D\"}},\"subscribeCommand\":{\"clickTrackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"subscribeEndpoint\":{\"channelIds\":[\"UCPC9lwVLLZ6Yqg07U8fxvPg\"],\"params\":\"EgIIBxgA\"}},\"unsubscribeCommand\":{\"clickTrackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"unsubscribeEndpoint\":{\"channelIds\":[\"UCPC9lwVLLZ6Yqg07U8fxvPg\"],\"params\":\"CgIIBxgA\"}},\"addToWatchLaterCommand\":{\"clickTrackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"playlistEditEndpoint\":{\"playlistId\":\"WL\",\"actions\":[{\"addedVideoId\":\"J2p1xkGPm6U\",\"action\":\"ACTION_ADD_VIDEO\"}]}},\"removeFromWatchLaterCommand\":{\"clickTrackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"playlistEditEndpoint\":{\"playlistId\":\"WL\",\"actions\":[{\"action\":\"ACTION_REMOVE_VIDEO_BY_VIDEO_ID\",\"removedVideoId\":\"J2p1xkGPm6U\"}]}}}}},\"trackingParams\":\"CAAQru4BIhMI1_yenfiHhAMVkUtBAh06jg7j\",\"permissions\":{\"allowAdEvents\":false,\"allowImaMonetization\":false,\"allowPfpUnbranded\":false},\"attestation\":{\"playerAttestationRenderer\":{\"challenge\":\"a\u003d6\\u0026a2\u003d1\\u0026c\u003d1706714838\\u0026d\u003d56\\u0026e\u003dJ2p1xkGPm6U\\u0026c1a\u003d1\\u0026c6a\u003d1\\u0026c6b\u003d1\\u0026x4\u003d1\\u0026hh\u003dip4gwZTCLGAJDN6PErPoldDMcAKJrCyKztjHTDNv7QU\",\"botguardData\":{\"program\":\"ECilNSVPF3Lh88GrvvtS67FmH14wFUj6k8WXO49x3bkZzaDapLjV3dVXU41gGgVNEvJyJX3235JM8Fo2OS5q57jhgGkIiBAGr0k0WkGf8b+3wP9OJGuJv1lzrmx/jIzL++89QkzwAnY+u8ytB4isN5teMXpJ237qHVGuzt37VwQG5kcIxvLF7UjVdH6/o2tQal59xhDaZxOpK8r9zK/Q+irWUO3o4rJnTZOehe3BXEotFZt88Rw8pzV5jOd8SVGxlYOV7hGmvk3MjZr8H/iHN0833bejniu0eZfH/Aej3NOp/R7MSb9FkEpxeuBbRnErBgoaGqgu9KGZ//xJXm8zOuSzTAxdjA3bWWGYHHjsDBQWt1ojRcRcNGoYHYS+SE8oA6MOty247FGiqeEOVayFVRHzBhKgSJAkKhrVR0rTif0r45CU0FDrEPCMe0cQqW5G2PKurkalaMzdcgAXwGclHc5mjyOyFvD03bZTu3UCP/po6EOHAh9f2LOczjT9WPFEEs9l5jgNbMpNnu9BHe59OMftsFsCLrF+GPxK/LtaJePu52Gf+KNRB7/BHLQYl9hKZCzVbwZXhSKJKktAxwZXvdTa1qaMBle54LwSBdmy2srT+yJXTitEMGKqLhZ7TBIY4DBWQtDKzNlGB6rAcNUI+I01hRAc29X0qDIFQw6otQtXhAL2YbWdOfhDIYQmruND15XYR6EDhqlJqlPlmwocvaApMmuNaEmSn6OMA566fb65sq+83y1cI9L3IAyO+agA2YrPa3LHhY4+aIfrPKfHuplimIMTB2Mqy9SBUJWgYsD7sB7OWa+wITMjUqjLo4C9rNcsq1XDVOpv/23rsnn/AWbYt0C7Lakhc7rwGOXBh/INSDS76EpzwEm7khz0KkQ0ESCYjCeMxTu7mOkkrPb84cG4/47VmljWW1Eg090XyWxraL63De2PzhM64re/3K6A18sMSazTxjP0RbHBsjkOqSwLUVVG1fSJYuEB9lg0WLn6oWinNZ6ovWkLOQGqP6ZzMi8K1qwTbjjDb98u80Hfk9IMLsdRptksh3S6VHbVuAl+EycVtaYSg7+deEnERnFgi649jcb+5C9h0tyUK4m0ESL0XCJ66rETqifbvj+jSJzd2zd5RHmwm90zRfkn1bpS2SiYslPIHCr6I5RwZs5fA/0CyxA0B/9CR5lrZo8DLleeMckylKx4hGx8Bh13xa1Gsgc9M5DWQ9YUpcyrmCqfGU9yZusHllbm602J1VQG3GFiKDAoD17A6P8DfSKVnzNrpz5uW3tagtkUc77jDb2DEHa0QLt3AeWICqo7IWFF91+EfKH5MqAe7vdgsuSuWlYPNX43MBkusAHm/ogneHrysqFFhno4Et1G6DHZbqf+0xWNsSwORHOP5EYRBWrwkxEbK1QdNtCk6/1nDYcFDqCdw10SUfRgJ4etZ33J04heUw9tR+1So7GGeHJs0o+skciIAOexXvhAfLbogZdo3fG3g8thtQgKpzR3jYBSaQX1ZU1nDp4miJjOtvtz1AYecV7zfiK+1q0trj3rNfUa8fyS23/OOUCXVXDhKM7ighDQsFFUfBmCOS0ZMLXSPMWXXAslzUbSJ3dXuTubLZmpy9Q8aj+/z4NM0VSjgzbguMLh0BpR+t0dbrbaFyZwcDMtGhS+0JVss4TFyDJxcAe2K4EXEvDU9A0ecWhtDIBVeDBvvcezmwOFDEa8xENQNH6dDkuy+dig1tksFvNXZkEVsNtHVrxQPI+O7fmZ1XE4zn1Opeq3OtF7n8N7fyQBVkejPlrmAL6fWPDN4AAJ/ZshoaGIFOPjKIawQbPqSth56SU0LLge65fL7LI41/Loux47rkH43msjFTPVVj8g8RpX/+TRwif2fxJ33oaCJjT6e8wCAINgQKJ4XuI8fVc7hd9BYbC78XO5hXyDy/dtCOizBmDnL8qoghc1m3fIRzmzF/Rfy5vCRuk2/yx68dtgyMOpY3nyz5qlcxWIq8JwzGiU9l5JZJCMuvFjqQ7D9AB+14MxPIeHuZOEp+9jw3OqLuNoQpwcsr4HEakVPVpXuV7KUel3Nx2G+8jrt/vD+GVGP7sjYncqSV0PK4PALrTlpgSr0pHDebnRd7AXIEp+NVULsGHi6h1P23zqBZTslIx+ZGrLph9a0WIX0RPjfAsT2By+PvlXDbbgRjLpFykakdtM7YIYLvMyKsM+YsGuzARH4ccjZyGdA8VhDua/cmxN9fjrWlVTMhpAG2nzYbSoeMfrzcfE023oqXCCYNggtOc6wyd1iNFkmquqaVcw7emPHO3DYXFvKio/9TgCUb0z/C87CMDBlDaZNZ6eDCoNptZe6W9InauUN6d6zTtDwYGTUqGKTYWauBHD3r5RNhGq5eDh9OlIDmSHNIyV+HC89IHjG1WVWj7GZLytxfiaDgjFWJg0OX31WKXuO3U+RGvGsIIyngf8U3jzbRBSdoy5dWI1OHZtI+b309k3ex2jSSVuxmvjcsttYpunCzHas+foG8yegiqkwywhbXyApePbq2k1Gl0NR/l2pmjzYQUIsD1EnKvcODnlS5E97FT8opDKmfGDuFpbs8blOx4ThgNbHfrRzdTJk4Sk4Dt2CwqhAYUOBBKAK35sEa+bJQv+O+cHn3zOlwTdrNCgGwjZ9tsP7Nv5L4lk7JaX3EZ9oRsDNUqFh6H3mwrCc85p/htI6qtTcr/HVKs/lKM5tBtSx4IIYpyn9CHrSFQMoBpnu+Yne48yKyLLyePKoJwyn5RwIy/cY+UG5g0R6cvCjEcclqrKCyO7vov/lhCrSs2FiqlYW+AC6TXOuzerpdcgHSDZ+5oxoiDGKwXxnnwK7lN/kWoux4K6opU3LEBF1AwmPMQuVhkk8PwURNAVVx/6+iXER7ejAq9tSpwDOqkDCmEMdRhSs9Poc1ySibzNgv1oK3xhPMRt+ceknPYsTPtHSLlg0/WywvX6tnAvOoqqtv+uLLc5gB4UrYXxIQaSQJeN+TUaGQLGCmJJnhQv6teuHg7Ie2p4AdfO8aRZpRbqZexujFmNgmIZ3O9C0YVdgc38SHhQ8odsZXmtVjljfo1SOgc5g7qwQ9f8tWZSDK8WMaX6Q+cce1UuXo5YFrxL/7fqH5YHl8ZAHB2CqmjULyjuD6+flKHah4IJXPaZ/z21b5jJxAM3ALmVI0D1U9hiRh41noo8VdNU3WHoEXR044cx52kG9mzMfcR5BETqgtGD/N/D1OxYLN4/lAA92OL+CNMvGEMv6rjX85Joy6PP0usFBtUXChuiTyXsrrPnrXSlVXsooMvP7/Go+6vWu536sm7t7zFOej2j5UwQlgA8HgwzXmu+a8OTtWiMlXCEdeqNcQjP2pW0Hof4J1pLWtLejzyYV7vv2kc56JS+oyD7dMaI0pY+eukmCDYKhNI1GiuvRBz3Y0iMrt+pheYJ2K9dBKUEoS/pqLd33lWRlWvyG5lFtiDgCEdtq4s9pyGvWnkwOZGIROr3rsu7bfsz9PyA80Ts45P91QfkOvfWMpDxnmy490GocYp0I2Yd+OzzlkN3mGlWwlyEDilSayClNHUKU1T4OBSgFce76YsS3hgb3n1DGpXwjTRf5tzWOJJ9mLQtjRfpSDU6dEg/MsW3i9zCK+AjZtAx/2dESKs6dm79QvmrH38urRL6JEag5Kkn40aBEspqGqwt8EK9NRp5owVxCTmdOr9JUQJtq+chOUsHeKjx7VbAEowZ5HEfi0OD/L6Zu0g0Fy5R9kByHw+yMH/GqPZQswKlgyoGwRwLZDy32jDrqS4pObdumDtl2t5A3jAqbZAStEvq9gln1Lw63FSTIgSawVDcqsX49a32+ZatJLS3rwR9gZ570WRcm6Nt17Q1gYDf73lYqRVBaK73+3u3HbewWrU7ROUuaMU0Y26dalVa10zUqnuBUMAlHSXJWgwtc1Sw+ynZoElB5bp4ouMZLLpFLV7jTn+qdRLu8NZSteh07r2tuTclxBMft6iEVVooIBviL7Q5leAKBzJOHr1oeXsQbp/X8xNtvTGvLFIpjJUe0qSZZSvUX/P3X93Q25Ddk50UrObDVkiUxOn7gDKl9RYwfX5qgxwwhvjmrM4yaSX1znlP0AEueohbJC+eqRyZbli2y4hdkCoyQvHCjDQ5P1znI7Qz3k700jY37NGFigdtOkeX82tMA14a1k7hGUQJrwLlvGVEs6/vueJPcnqMAOHb1u3dvPpduQz8eN7yW5PpEZzXw7bGIrp7z/LwujNg+X67Km/WypWoRcrzcO4BrfCZCNPU92kVhut3TeOiDCRb/oEEqD7+M2znjE776B9y795nnWOccho/06DLYm+Qv6N7YxMwCjxk+TJBM5IZegJJ+nSgz2CNa9cPD6TGtUtqtZqoTXDw+nEPPIa1Hx4RjhqrGueSqx1jDNDLGWxMxhkXggUuEukExs3eSX5moD9eOdfjQQEyne55xxPGAdrri2EPJYaDj7SkO3orQQsekVYrohbNVATUXja73069emC5H42BxU58WpMCP2JMAFy08gPfLxGGZzGeb0pQTmXXCggL3wvvWp6MBA9n6atvC8O2gMj2KWsrmj8dfXhJQdk597edptTgXK2M3M/Bnt23GG7HctZ9ltewPWO6upmgCuxIlXPjcarum6USTVd8mJAsDYSvqPAFAhN3FDc0IQ1C2nRsrmQYDhchrGIkwZqdjSzk+UZ4YScNPOEIA0VgJrCrqWdO0guvhvdIQHKut7RZ82dJ1qsN2yQOz7i9CjPBvQuj1J/za/QT+WLv43w4CFgK+Z/XfVPnFEgRM5IweWaR+92uH+zGWFOTgHZlTP/DZQRU82LgM9tPABAmihROCRSBkOLnFS0IaIy4A67mt9BPZWIt3RIZnJ+Zg6wxMLVR9gP70KVUc1+Gx7Uv4berqiSe2ocdoID/2kgzyEFzU6RUPYMNHaM+7XQgQ3SUBZd5cWkO9h7iEpWRD9UWLaLMe2HQSxH4vplJP4GJBsxTAc9Z3cdh0CRVqa1ercv48EXROnTYe+37JMXknbayexJfCJvhp3PkU//6MGAaCAaJvNU0NASuevrW6wh/8YIr8I1VsEyFCOLsjDec+naA/KpmsKkzejhoLnWngMV8Q6gfGzmmkr+kkVfNtfMWMl+Wyoe+8WDzTOq19zqUTjyeI3vzFKBiTbneFMhFsBC0gmQr2CIV53CHvq87kfL9EMO+6HiJ2UUi3SsGnnCjwxYPeW/o5e05IzzpQxnH+SvGap2FGiwpzEuZ0z1AVRsZkF0g7QYvEMukYlhbsswTz0EKSl+2TpvEjHBnYBQZ+siRi4ELt7kDv73NflHAyctXlLTq8hN0wGwxxNfcG9pYFmVmA5VVPmfIM6HfjdmXXaCb2ea/zYcqr06ezlsF1chrx8beIFGSoXOO/XgWv3IDkh1IQDAHmj0ypURzZfKEGNar28sma40NHWBxVvSSZIcUBL5E5+HBKS9h9FdNnYO6G4eZSLoSsKn7VGaT6+gQmbaYV/eVE9n3nqtIQMtrGhusizhXRFVaNqZyxl5ociR85sLDW9N3/X2FBEiNYH9m/LoHzuX2AJswc5qdAyk/bqskpY2lnF65JBt+wmYqSkNIOAmL8atjFD/86psNC8dlPh/XWsAEogocxcG0kCqDO/v9mmOflK+RkJZlpu+RZyQekcUDozRJehKpAW/qk2O34F9sdL5rc/hOiOpvgL/DnmWoMviMFWVhNeZBmE6ygF9jmBgtMFulSXykWtE0Q/1mr7SkPSIYMChex2wTNOfURU6G08Cc6/FEI8Nma/cACnVkl2+hXEbdQzDBU4aagQYvbZSjWcOcI9L9Rt7wrSmYJUOCPPDXBu1L/lShQvTCuSdgVWgL/FuT44P5uzhldudf3mKDfSyc5tp/1tG9BHxQuaL9x/0pAOVYxKROe6oE6ty7RhEL6G+0EvsJD12hHWHYtAbVEMTj3D/n2YBtx0yMgr+sxKVHOFs2Jco45RYaDqLKpUPUMmHA7atLhPYVMpkmF0KqtRrM9ShvUV3PjP7gzhJETB6UpGIx3ivTZ32FCyYTlQ8+ffpPB31YGAhHqgVikQjuvq4183l0ORbIQp0Qrf4MoEf/4vdSJvjE5DOm6T9D3EfD6z6ray/AtGJxJLHaW8a8vvt3jy+XJNlSezrlL8TolcxMYAb0CDCbVWZ5lmsR+HvOR3ADcvEDYn/I8g8bLc4G0FCxNx1vmr7A+PQ4Bxii3VrjMKDcrfliGhnF+h6XD2D8M37Hj213TOzTgbwm1AyHE/t6pHgynAzJ0a/5m8xXSLkpLZY1zoLzt9Rr8zF3imLKnFlnjTn5lMdvPjaNClurD7tAMyLvCtU6eSLrNeEyaH9FAAwd/dLVrOFROoUcpMZ9o33C1IyPw5zLHNV/Os4jhS2VATAridjMsg9OtGKHqHJA7L4U4apmuKk/zpcP9NnTw3S4CQ3QFpyLxEKD0lLQfy02K3u1fFAajQFfgn8HLXZ3vw5RgS3gnkWTJyBD1pw9B2QEVoMlL6m3uVWMYBhIbQ7CKhHQqCQvUhGjTUXvBMvuggcitUNYdyd2Cu+TFYUWvwVRa191DPlcEgouzb38335IVdYPxO9ZPtzg3Ybyv/DI8qQnh147R3VBmE0bNNGNiTMbIXncbny3lAbXxyzRFpFPM7zmEBH5p2+SemXC7N8d62AYVmQCRhWSLTSbt1fvxX3vO0XpaZtX+kfNfQ6C2ZZu503VEgmUkcy06v2JDjsSSfJdiqUf1pGeNlv5t3hcA2GvU5oq7EJcg1Vj3QJYCsyUNK/r24gWY6r9tZBBK17y98NbaQoh5RKsSgJ0mrKgsm2jRImgAgf3Vj8dDty1eoYPtqhWs5Pfb7MEWWVVd3EmmWsIRykySdI7o+OUlxi5pYCBDFF5wUfhKEQyEahESnS4nWlNT7larpzVjgAXUJbzIfG9dbhuebmA9C3TwrNu80x0uxzGJjcTBNl6M8U60vYKWzCLwycxpbyARL40MClKjyrxoMwlrY0VrVaIgyWjbhbI268Ih+RfjT5umZYPw/FUs/T9JtG/4f8mmphM8Ahtxi9Fcuhbb/jN22TEj5kyiejkADKoLBlxjzq6VSkWmX6o8lUIfYoKHawOz8m4Gwbaahzl+BadR2A7EUAx1/u3FkK+f7uUXNEbw3S/W51w8LzPtc2Ro15GqY2WbNY4g1otfauwfFkblEpdWm434tgdFQlGibTXM4bb8T+qjYPHXCmXwrNjh1TCH3YWf7ibiyqs7Hmmmi0Qmx8/aqfXJjdSW+v0iieeh9rsSGoVdcUKdiBTzeJg9Max7YXqnYpWnpMgctAGNrWkhsp0e/GAiXjCrC42WoSlRBs1/GzZegOTAzJcBxpFCgGxmbEXGQ57iw38W5SqZaPRwHXuoJ6p3BRN/S8Ennw2Qx05JmfuFjEGz1ZU9UCqnuzkcig6XxporOz+g2yNQApQmGdSrQi06P9/QkWJFLbOLXnBBHfJdLwSv0BbBZuCUXou/8JIIdRkIJfJlDiR7Z8hdLLRMDfJRZ9UEDtlANxvN+DGnlP2jH5NmsE4nXR9ro7IpyIQLd1NyIkIWnv3wmkJ3QJjCO6iVU04JB9pA7gpHsEX81pHFpfR4yNUTtf/s/b7vB6jKKU5O+EqEc3qCL5OWLdt1XKY3swxxAEiD+7fpMBXIiiev9uEc1FB/jiADpPgeRodsvx6QtzI6iYfIjrZNwtT5apBzyU0zGIUY/Iz2sX9lmzov/sAAzZKct6HwRNhkRLM4g0UBVv0N5RJ5W8CJbiAJtRaK0zUH09HUFqjeMu8bbsLscDQF0aVyUtRGpUJbsBk1t8XVdUUnHYwoc3vaKybKBwz1LimLUatS66ij77Az8a2aev4/CmL4/LR033Sj2oi3UvHKhSlFelz0tX+4gqvqYyWL5LA356kKD14n8g1Xrr78WwYo3zTov5l0Sq7And3o2+Sy0zTYUyendcRZfFXDE/3xK+JDPndKs71TjP81+OvhPbJrg++fRKh+0Y766iXuT6015O4EHQwRQ3hWG3/OHteU/XzC/jZSaBf8uLKQ6muAAyWoy4IE/FxlUyNt4WAKVIq1ZRXGPuHZ2CGVmGhwXO0CDYvmnUQ3CjHMrcLU0KGy+ylykJaBWbmh9uF8Z5vPJVqP8DlnjCOptyETmQw8HksrJwyd4vfmN/42DNnBdbkDRPyqfGuwHnjo2TW/5xX8A++FDmEc6Y9mmzSJO5qZljwq/Lwv4Omu5qOyXARt8PkWtnnvjhPyWEr0CXBBWBYWI+Ukldnpqmj5hgnHovLo6lz76H+WiSON4WJjRxGSmAiN9DXbqYwWxfybO6aNHV+8K1MDlB5rEMy6Ysz0ZXCZsHPnwA7tOb3++nK5mVj3/lV8jM+VaJJhMeRLh8Uny95mTDNw2J8FY2+ZAwMvk/Din6DZ+fj8iGlblMWYVUeN/4cEz/KBhl4Ze1EZr5VIJ8sAk/OGpnDsagXve4G6IqPw7WqVqMhbh8hKbDRVhFzV0ppD5w5b7aQOabM33KIxxfgjpBZcGEYNKFwM4oFL6QjTQv9mODvAv0ejVRzO/u2GbFMER5XZHZuGBdXVKhq6DrFyWjaATQ6a3bwmijmE6LUQYBLUDp6Jm86sRoz0viLUIlot++pCYILjBfeEE77McETzaLIzT6dniwpqDhSUTl/mT7CXQowvfpqIrjUAh2ylgLzJNaDVRxyBTDKR2JvwAq8fAZxsImtK0fSW3TJZEMzVEU//ha4Huz9JiNljUrvowNHhAoVKR/0ofTfhLTzrrw2nwdCYz1Vw6MuP+OY30Zpibh7ZB69iP1pTdBl8Y6uaJLyyil2OgG0xI85M2pQGxVYKBSJUwfMtCnhlb4dYwVNV4qEL2ndJyznT3TQbic3LXgRnfT709Pd50P4rAd49CXRurV5w1FyzGKLX+xo9GYkPPWRP+mJPaOPqlaMhzHlPlKy99mWUbEZieYX9rD/J54Pnff5UbOuMRLw4/eo4BMQkiNg5AwBWg4VfyQ26Ndg00cKRAABxu0ZdeHAv4Vo3xAfVko5v0s0V02HMhmhyuifnktMhAGvhZxMmIqSAotN8HwzTREWzrA1butVSb6aD28yKYjQ/KzKw2euSTtKHpIDwO73m3phKm4HD/ORWVl+2Wny02Mk5euE66wrTAKemrbUzSvCja65+fLGxuGnNoD2wws6aVNRDegXAlxEE5Vd2ydQHAgqr6/a9pf56zDJocSryzv6vMzizajTVy8mXbNCKjhBjmtdeNQ0RdlBL9YSsrkz0Ihy0YR8aopTiF4dhOx4VFVV49hUD8d1z9hyWG2XYE5FOBEZviAmgbgQ31M8/I1i2BuxFrlBS3jwDVPUdmgVLJce3f1Ixync4IpKxMiy8kAyTRiwIYuUx9AOx/uvmqLAldL71is/EVRjVY4ApC8ANJukgTGlv9IDg07io7Af//zoskymW+HAszhK+8vzSuW3Bnhz4KZZQo7LxUhKm1sWcoZDq8iMqxYj9joEIMrw6jAmqHw7y8HinG5lY3XJfOU9FvGx0iv4ia6vlbN5er9h4nEo6D09R01AupBLSHVcB5cTUGw8oxH+z9nRiMMKmXcv4txOz7HZZc+kmFhaS1Uagkwau5OU33512IU8YbNN4hbwWMZ+nxrkhu4g29qbcwSPXefd8dyj9CUU3AjHE4dG9xYZGhzXWASSboAmMTJr/ccpZPQ65Nganh57dfkPQjkWWTSkJAeMu9U40Y33yOZzGMWdRFPiuPj2QTfYKA7jZvXGtPNp9ZwY8TIYIoH5/1qD9TYj4me7udOFPw1gzSBxKiQnvlR0hMZaX4qjfm1/2/qluJVsfAcdMLmSizYxZ+U/9I8UhouTxPlsxITO5oVjySTALcKXHDBFatZOaPW9eKKItywtJxFTARpEY802z6De3jXSxk2TIJkOQZWrzEcVQ7GINBZI5wi3sJaArAdXvbv2SYSMC1zEiE2fsdxCVV40Wn9FIDQxxJmk8DOMx52l8UWxjT6U/ubMf52aWyzsanrZM6fu5Wsl+TBzR7j6L0QbNir1QOmilgUbgZG4rddrM+cKDxijd5abunI8/czcRSXFF3xmDPWPAvwe/KAbBX3VzDbXKIdczEvgwD7EKB9oFbiZsAu8hCzzvZrej1ROdsOf8cetGfyOco0BDIzNlFlSUdTpf0ATndR5y94KtSidq62w17WpyQ4cCkE0OKQtOGyGXrU9pS/JKPyoCNhsSUGb99ES6LqfRnEvmLt8N2NxZCpk9FyOhCHDYKj3pj1201S0J3LNG0eN5o/Tn7cQujJvd/zxMSA5mPUJNi1hzOiHp5HAYD+81piG+ZwY6mTkg2qaogoNOT4jNmKYN0ps623fV8VfvC1q9h0Jr3h+PZ0gHVRBzfJqr+sMVBmSNTwuSnecyWGILL3BRWTrMzPDCMebNeGJ1PYwnt1SVOi559YPAkPQegpc/+oWAfO//9bPUBzJBcVFxvM6+m6rku+m4D9W7xY7Wf0g/IsTSMQvknMozYU4jhQRu5jyaLHlJ7No9EY61gVFMQcqG0O9Dni+4HkQ+YBLG29pzOk6rDDT46XtsniN1PWSTNWghHLTHIEm/WYJwwtzlrPCcmyXoPUHqvrHFmlyF32y603f7vi7Kqyzv/UOZlBd5EbTP6Z23Ze45rL6G/Ht1P/nOoXOmpcYNO6YknGKhTAxeuoWBW1xek6O4+jA39MzXlj2uuWnTMYus9fzvb+8inKzF9lcWJUBwKR2U6dSyCK0x/GGDPLeDFe+Wwy6izARhvLj5K4sfWzzINSjWCeOFGZIEaLpGCXcilG/iC7OPg5yFuj0FZigeb6Yoxh2fqjpY3CI3+zRPDSCoEYeI7smTGRAR6W8Gwua+bHAXRxurgXMTNq7HqeXIFTBAH5K/NlsAGLZzOv1XC5GxNHibhdyFL3r5mo/avqduy3PIQI37wJV1MeyxFmu+GsMArmiUe+plDKcKStvIEhUReO2DRa7I7u1q7XOLE7RL7Qw3epnb0TzoyngxZbImIHAhRDR1ppN31BqpbA4e9pWOP/hw+yzct0Hp7zx5bN+v9F5egaijO+2CgI6l7Yx4aBUQDIyyGDU7FjzPxYDr7ykWdrZJmHn2b77eSY1DiRsy5zgzeWsF3+DQk2c7BqZ2Fhw1dfSRWY8bo+LFlJeaQPtF745D8U9nlklu7mGS154z7EOPueioKOwWqMnCw+gjoPpSjA45m6o/wxjMamaFnBYIqZYq4oo32F9FgY4dc/KGgOTjJK2LN6h1LMOS0CdaAGN4rN2l9C1ghchqs0gcYuDjQlGWqIDXLbbgeNt3nPO8R1IgO+hSiPMKkfu6hyDDUhQ8N28nJ2xZB4IAuYYTFZO+IGEZ4f+jA/nREb7q2W4/Yz5DgE80WwJW3YuU7cXuixNFtbkXMW9Vik5Bnl0ecibnG6k2PU9ZgZwCn857sF1+//LIdyLGvwJAlLCSfuDFZHTl4+0CIj41xcjlJazKmrM9Q4Ze/OTPB3LivpcjcUo1gIn4r85ciqUR/HDjHqQZ9wLsu9IO8Mf4LlZ4rZVvq1cWQEo4HEuOTe07617DSlYNER5X1TjialPsyJD1GJBPGCG1+PArI9ncE9VeLJ3ocHcjnGhpCslqv8NekaTk3YDY3sqWqgEWOjJG0L3nX//xYyYn6YgYKOgJ1myN1rv3CYwsTUP7JtAocfEjE82HxKJAjwOebbI/FWfVw4vTIMW7W2XOq6GUWkzWOsxIyj8PHf9T3KbxH88iyCfHg8WOvTFQhevtynqvbwgl/t3Df2r0vamFknrPUdFFqqN8ePOW/pA1bddqv+FP6YJ8MByPaDVIxGzQjjTtgpxCDjFdKWgWnTAjVJ27TzwJHHJszLFQ6prvd9S9S9XQJ7L2ToB2k+jOZQUBD1ZnFOvWBvRrTC6WdhZh8fLf7+0M1RTodoEc/VNni7Z+YIDsYp/C7N7SaQhvKALkZFtHTEQxRBMK4HqkDWkaK72SOGsff/arkaNqzEg+hsKT3Y4RqfwhLA6DDvfGflTDQ2tGFEPkLXKB4y8vgvkOHGtvCZNIwjdUkDYc1SLVYT/UjsejdnibDrhgKfa315PBF+Q4nDT8xV4sK52KiPB7KdLcga0WKFQFyrZyaSWmesrIRVf8RNXuiBvUY50cugR21laMoVOH6OXkg+eOTXBtl/FglOCzUhiNLcv4+iLeWqgN2yJ1Nq8NiGA4eGhmWrRXG1mmZa3rDqI0AsYZljhCxO2JGcPB4L3WxrvE9anLJ/KjekV5ubHayCVt5Ng1NhKMW/wUD2LV2sxikmrfOS3ct67hSLNpMsmCG1mao5Jzl1iOFFrYMV/3sGupUnvr/zXjqxhYLSTNK6viQNt+7bd2gXcLDafCEFOEn40W4TZRcpGAp6rJPi7WNXVMUe5IsN02eQru0mqt5LxQEima9aUqjWKwArGaVbBzfTQMqSCE0Gw86VM5bYoPFt0L+0cTIXukspFhmksUl+lnP1tM/wvM2fSjytTThvDxXFVyCoTDJWjcqkwute0oQMmMYVrNHiJKGMkvpwH94WmzrrOqBCELaNNN7aKEKxyNCLOIAwTALUFLo6Vtt6VmRaw3vQWuzK6rJirBRrVVxCe+4++1U2C2C/xvs/8VuwvFJuy3Z+xxjSit6fMsOfkAYbRV8bgu6PxhF49e+B69sD01LarG8RhZT8VuiBIW/GdfZsVw9P7MVasCfaSnbbmZvJ1Fnu3tv++6jJA3IbBiwqtcBY/DUI/c2Dj1JuU52HQI1dnmlFVWonBwRO2QyeE7ER6vwXWSyj1T0EDpz+olrS23oviE3jAMmAMxnYOi9E5/W1V75XjODqOSKY1pzQK0FHInGJ0uMdhjjzmNCKvPeGqkOY26bc0j19BauJJT8GewyxdR+m+tq10xTCv2P7zss4UjAn5/nmEkX5YfIkUwT+y1fq5hgJDO7C0VO3UPwcG4R+7d5bRNR/UURmDKOTWnUutoxrP8gLd4ftT4fSMopazT2s+n7EHyFJNB0oRNwE20avpq9/L765MdWfgEatA3riQ909Nce2qrxGrJX8k0Y6su3Q8YNyNve3nca6B9hEqJmCxGsqUcRpvfUZVeeVv+xv1lMY1zD6U4CNzsssECTP0LWJ3SYRulCcF7QjnL5dvGlT9B28TJvtVaGUV31pUItYDtDmXadf6CVxEM+2gGlmn1oyOXH7lZKB1SdjkQZI5rvkWkVnHRY5wWZ3NkhmUKT+ZhOQphmAZdR8EbF3sw4V5NH7e2SlkEfoEW34DSd5/JZnmx+qT6YC48BS3tck+tdekhR0Cao3pQfwHhokEdc2mZp5sYK0A79iooR33WdEisHH6rJwAQGDfJGOpxTpoXuOUbGxtQDZK+uQOBACfcSSq35cR7IsERfEXKacjnEEuuCaBNaJo8KRogVipR0LlNvmeXuC10sjtwiBwPJVekyUgezztkJI74eV2OW1TLuQ3T8SWwdYFjtvDnfZPfmLz34OycRtoK/t6K5E1uraeD3HXokeY7sMNx+C17DHH58kCjwJZPA/Dbqcc9Qb+N+U9Qic39mfvBBULcTxQPU2uYkPdZ1PuDyDzJ99kkiHjWWNqdwWK61mLT210M4EjqbrtPRyjZ8GGhx92vu7YTJu91x7ms64FzOGI2GAK2GvA6HrNdQQSnEm4H8/1IkzBwTlDqL7+jZ0UH/nk0SU3uy2dHrwf3H3gt4lO9oG1OWRgwzx3WwtWwDSqsJgxAkRE48uZ0CS1qgMZ8McqGapbWJa0r2rwYwo+ZeZTCLpCMUh/6X1pShg8XYOVJgOnyXeLyEIAD20NgCEaet/9UL8bsVbd+nk0ffI5dStCORwyRy+oKzQROrP+BBN5iinwcXWpKudZaPkl7L5BAK/OHwUSF9cpJt5MmOgeRyPxAyPYSv6ijEzy5ufTNi1NLOLDRwam4XI2zsoxyC0QhpldSvvmABYutw5FefZRIEKxjUybaZkqPEFgGoKIRGDQqavybNd3pXaThdlfTRRTOkZ5mDEQ0JKslufJotFmQX5gQHmlT0zO53cnGsn6WFftkIPgaIeJzy3tKfWEaQcDBldTW0B/+aVdNcBZZot02sJALnOjvFmpwIRe9oG/Hk+6PfJlmo6yEAymXFwAORBoIKjtdYQ+2cXtx1452/sziSO7rpjoI8nWDIxLRtUW+Yl+YrXZpoymdxKByjHeO4pVlnkuohU5w2KAm6JUqvSVmBIrESvZVZ93CEBoIrMp2ixqGICqki1gMEp6XIYrFnUfyMkcCYganLsqoiT6Q+5EfeYu5IL8XRKjJ3Vsar6aTeKlcofMofm5XSy8uZ6q21X9EKEzvGH2dyHCPLIFqY32nStJGgxGsBXsfkuP6L4UQjVYjz6wjNJowpbddo9i575BXt626/JXXQ8XT8+oQQGJfCMo4E4NOnDEX2kNpHN6vhV/52rrWL89d7eWAnbF5IMismICyujP0hUx0U5tTMwIwvWLFIgOnVuH5lus2lHHM01reCjqcGSPDzNuR7PCMrgV8A8oo7rZSuuNZenfdvGOlaPEP5FGJlAyN+Q8xWSu5oCXKHD06uykm8cJTsapOL68BAyBf7YbkPYemKO6aqTHFXgd73Hksov3+0mSX74VTZ3KMaJgXNFWvjavbfJiMxVXYUYrX6/C8rKy7PBOm5wwIZHGSawW39EJ1Zn174XRtyFEAbqvEy5dyqgkL3528hkaiwdlp/+igREf3lvTN5AtV3lBWxUCVx2P6Zb7KQA1s2Owo1pvZxeEnW2CX4fFzl+nocy3W6wZmjkJ5pQhVBL1ZJZjcnM9O0FH215XSNIyEvuijQbzjDh4/gbRM/cpu1u1LC90K502Uf/iah3U1z3VjmzRJy2v1Us6fw5tFWY7H0VAJKCKaXuF/SYu6m2sMT73f/ncZ20YcPy9lHYSAKjtHvkuJcw9RCa4ajNB2jhL3OzcZy8dEebAMkJgOYSHYikSPuxbKaLEo479+rnUHEMjZJsCFo3h3uuOOIenp2H6iAT606mPW1AT31I8hvYDc3ymXMyBsueQk4+xujQOq2/z21lP1Hkj06jrbLlri+eRWHX3ZXIKupTkzkBJel9u5uchnuso7KyWE7rYZDQPGMPAmT/tKhk1mSo1UWtM865xyLOM7N0R4g15doIweeohTStG6CyCcuTd9kzV7VzNzqwmY2m8UZe3Nenjz8XD2lz6PFEoq8arv0iS06rnwFpBbweSDByDRMyOTvoaVpbOle/uG3LwjlGnC3JiZ8p5lwYTWDjYgbDj4Mtm33xnjlopr96CsumeSYtvgFRWPWiWw/dGm2XBxjhIbm3dIAp1c731qM9L97IFmgvBRpk1uV98wbe8DX8qDF2TaJmUxP6IMSRRJedDMvtEwBW23Ncy+OKnJAALxSqGGkoZaAri4cOEKLiy0QxFE/R0Hv76EFQzd+vwLCoZqAAWDBD7zfmWymAoz45xZcDaumAsBYBL44Rar7vtEApSG03gmjkA3EZjWNvhcCjKamPsMjz4UVg46n6cKAcKnlJ4oBdIsNDUa8WF3jU3wojUbOjjStKm4nYIsBo0pqPgD2QEbaIMbdRa+os20N47+6r7RQ+Gf2akmAo8apzF8QoZDe0QM7Bgl5gWQ/6YsF+MUb+bHDtdwi/w4Cdfk7lb2hSqQRXWjNVlLkS5CdoRUhiT2iJMLg1CBqjfRck1rWnyFEtfw6UVu3vfu6ZoomQxJeXWsfPiZF25c3cdWXElzo3rHWwcz/QYzX0yLJQsAlYQHGMcEYjz5e6pcbzMh0KULLdlOr2Lbdr2mNpmdxMaN0+kX1f87VNGzrrubODsXkj7wNUccVWOjKaC7IgPgNCl3HdCRE81U095y505bc09fB+i+wa/1XxhUnoz7+OlqBpgS6sESAiEelCm1Ax93dF4J1pLF20YGJuhqkXsmwYl8rLFT28EHkHDCwIecOkC13rReDbZ0tdU+DQcJsqTnVzNd65i6hTq+Sc/t51mTqBB/4af8UPtBPk8dQve2I5hsVR5eP9MvGHxkcHIqjcG/etUTNcAQyWW1rgrZ771ljUEZqxEl2b7BKs5JnE2zYZ7hC57eCE8oAFz8LRG8i/NEulUqBGpucFhkAIuDKL+5ZBufdGkY9gze71a4qpM9n/RTdvoKGQmUKTXl9YPlG10N5s5c3nreFg5CfB+giDXiEm1cGhE/Sk+JFFiet4Hqqj53wh2+3zjqGeAU94iYPpqmEFkcNIWmi1dYx7kLo5LakbbhGtEBZkxC/dvqOABytAyo6atUayYbglqHhBc46l8pOxVbFgS8k5PE+pRM05IrB1k6unzk1pbwxBLurCdVHZ1qGHCBusZkJKoIiNZmt0+omsYALpDC+8v5cR2fW9QPjbXDCBbq/QIkOfATlq1YWFtbqY5JBL/qZ/eYezhG3+Zv8xd4yjj/eULXr6s47nrPWSMdHuo1GwYhPqad++FZctjmKbXwNOZaTC3P0eQ/y1jv7cdo8ueNiYO5oLqbqR7ewwY79khq3pnmO5iHNgSlTxEMepWW/FD9rfZmNPCl6uGRTUFEyQCTjHjPvcTpz2SPmG8StYvCSvLf+DBRYwfFE7yzi9sgGO5vWPr+g50HaCVANR2Q+ccm1sZmd7JnWYDvgaoE09RftLo0H6FzjgDdFjiHKKvmV+gQLzGITmf7v5AesxoJKId+T56X/i1XYkhq1dK7EPkYCp0I0gm3S/NdFQwZyhs7yynti6gtSLEcS9mr6W3Qv0RLo3mbVqYOPFNWS6mXE+XUgasgQdI3vSbftRsiswuQbqHNJJCHKc7arrGwiV8GyAs6EJqWJtL63Lq8pr4o7NBx6QR3SORGYbKVeFQ3LzGpJDR2bxAmGLIOd65ggLngXpR+hQk/ot35uw9EDW2qYmmnwIa2pK0zm20ACJerKj6LFP4Bi7Gh3+Iaonmo2dSu1Rc54fgsfbWoLYtQDKtKfhrNh7AMkNw3X1fNNzjeXzv318HIM8l+qJUMt4HPvoBxAWSvZYZeJx/j3SsoEvwgvc6I9EN47xH5+Y4ZiRk/n3dgTX5YEDyLh3fs7DliJYJGg2Xieyd2zxyk9l4HEv2mVpmqYtCLtDl0o4LeHVl3ZsrYB1XzSPO4vA2k5Nfoxu1SFpNuzLh/qp9VkIrkd8d8zCkBSYLD1xSOUDbyEm/lW97KwCyShFG0hCOdO0JSMVJvscmf6KLKvBTdJoXP0GjkUMqLMF0ZN5ipWDVqQIRzsJXeZhSnUpIhgp20oIj2UHdkjVm9o6gNdpH4mmckSfIKz9znzr8o0Nxo4gNTK+0TbogWCGUeVY+rjFteMw2HT1SYSimyNqbg7/jAuPv36JpFEfFdX8srlCOo8VKp1zSCxa8Nh3pYa1BhgUj5FmFZQOLytkfKxvA/P/tFCxzC/0LGq0lC/YBophg1qi/Lm9ypi2PGX6fRhw6H67rSxDzSThN9IyU6bVUBpND0iiISm3rK4sfueyMMGh511c/x8WtC42Gr4Rj9hUp7vPldPUWoMg+7KhV6ymUkL5TCSC8WoqjAaZAWQZ13ueq4122qEmSrxFtNnWBlQPhRtmo/8STQh1YJGw7BMSVyaUfL+/mYtB8/cBBjcT0aJGwhvsFsOp2S5WjIZnoEON618dHwMRSik29fsaebDyDkqVk4miE9xUwopgYQ8QGyFklqLcfAJX/OyfTlURgdW8pkuHUzDdbhmz2zWVn1eA6dB26NCohcQG2sI8WGzu1WyCRUXtaZveUSoPch9opI0j5gU459WApMqNFMSHf9DLSykSST1el1SvoVO1KmqnENbOvie0N0SYzIcYo4altLiP6q2SxPVYIR5Nqp0uRN6vGlCFkvWGVinDykLeZ6S8dcjVJ9bLkNZWFkGd8DXRkBhRKM8Lmbw6a+E9X6zcudwhSHWqR9VDXQxjCsGIG8q58Pc2EVqt2atiOV4nD9lSbJBDCEcJXHCltg6uXVPqANRCwvc8bwamgIcyScnOA8khmLF4ZXurAou8O51TXuzRfE8h56TiGlrIAESEqfhbZgPO2V//lVLfc6Be5olDEtjCQ480GRw6Eg11jDEijCUTRibTCpmSlCFBdEVcFZQQHmHA0D/34DHNWBCK1DXkwNtjM5TLbCyYYgBtDJGKY/J+pjgLcRwDGOVdLuAMMnz+o3GU1UEQZJ7MK+UqNcJOxcqsn6jQvE3IocoBdOVT7nQL8V9lVrImeXLmsG3+iQ76ejJsHihMsk+GpYrg/2FiCnS+YkfR5jHBpr/zcg+wYWlRc1QYCBoCWDHra/omfO3dQ8l74cXCT9fuQ34+ABuFbaThtDn/hvnataAXx+Wkj7Js+sHbRdgRNx/nNxwADcxpry2dQgxyQeEvXXptk09T72fN99e/3/aAWH+KGntIPoAimWPcjIclUptcoMywRhwM98kLaqzNM/hZGeLGNQhdGuVCLSXatdR5dz/K/sGcRdlKV9ogknHIUaUkAZ3D9qMYY0IxujIJ6R0x9K5pFsPUJjkAFU/b0ACEkCEyxicJ5hWAKS5uD9QHSxnAhfrs9umZAgpk7adm7Dl65cXFVT5lBxw8JL3owSuZpGlAWsuEDUy9VwJZ/s3IndSXq3fk0yyT1E/gjAVNhVgzrM/kZZpH6L5RMQIT33ujnZiP8UGwTkBPGgbBgg2TkxvStKZ0y8le0VcBE23+hvdzd4W1+0HWXBrq+PHOjjBBVu/hTc2/L1wV22AIF8nIgmeRgiC98XbCXt4BI/R5fxl6OwurHibHFNfGe3Lk7JZyuXvjOFLYTPiq3QXcAHitBzBmBB4V0xVqNqwEyA9NpExaiQWrl5Fhffg5oXfBiZu0xdpF/4H7B140RFKdLXBJstXdJ6UDI3stbChjdXG7OkkHs1sIwDYTYFDt8ydwpFm2jHeaJBDNyQ6qsrUJtk6qjIiulJEPQWjgMT1AoficdlcpjVmCJF8PJSOX68m11Y85r1HLnWVjZC7C0Lq2otGDyDMmmXpGbEQGIjGxD6TloJ83vndsRQsCZynOPM9KceHKdXPInYlfUgkeepm/u0s/Hbh7uoPgJ7430tuNtfwUGWsaMIO8xeyyYXkl5YfccZztluxpWBejuOstHXFgUtdPcXYnHLxpBegz/VS4waUnsONTqZE5C65nHLe9F3hZt97ru2ciziVrFlZvBbSiO5C099WkUx0Izhz5exz91gd9xr11jakt/pRZfiaBiQLFjTN7yP8F+z9Nmdtqfefoix9m9aGmgbiK59hyVr4D0Q/1La/LlX1KIVZParED7BBSqXLuSNvVCP87AGYtZHIqCy9iI8WFgb0OnlLY2+sqcUFXgKeirpo86pMBNcmPASjlxtJHVDWT0KGSOQhHZ6Tw8QLI+2X3/D7uP4y47oLxOtg2ciEAwsYDLPJWviukG5D821q7YOLKv/PrLPcTY3xJfxjynPUFEc2l1TLM1fJT/LTrEKLIqgch/nmXAnSTYtKm/Y8iO4t7U2Me/yeqaqBby16Tmt+2WLBVUi1ixLcXDO4C2cVlwi/lZWr2mDD+4tcZcUb83bRQJiy3NJa1aj0NCc1XSStA3EbkUZVKRfNVD5joWTPzGK5N2Jeb3unxva9XYuDox8qXLTt9FgDMIO5H31IJT8/6pcV4D915MD6/ql5wMReEkqYNBBVKPytY2PTvU8vBNwDwnf6rYa1EULJyrjxAZbie8Fun998vdVkQJDegfytrPy+YTj4q/+UnTrF9mS7BaZwsuiLDwGdq9t/H/z840iCsg2HwBVWOhixd6uZEwEKO1CIamqCEshH8dHeoh5BufM14pz8KchSrVyotW5iTCT1FXyRYlUHXO3aIxwnCiCFqRZTgPjORC0Q/GdBPVIALRB3+TzNWBzZ1gc61rbCFpApTDROFM+At/gJMsOLQjqii85JsGEpePBWeeb751QgnzJJCsuM3BDMu2grxTWhqewXdW1LxFSwawHfQMhKh2rXMWxciXQy3SoTAt30i/KcSjh1gPKi3BEXNMNGGvGOTzJT5evXtBuxRSz8nwrv8X/TmCj+0mmWv20h1fGmuAa5MbyArrJcMTgNKAnuwU6wKh73caOoapLH+H69IF3eUprS3vhBYIS4vBqjAetOnFNPOyygVkFKEDvHYMeyUX5JLSIVB+CjzWE2lfQGscAh2r6IOqQGmQSWV9AYL0gHnSn+1QyMgwRMNAjlymHPYNgyqTUAKETaTo3hwEQ4Ge8AyZ2Fx0e/uPVV3ryirym7oRGeZDUbaGMFNbC8Swx7L2QfZ1+V5A9ln9OMDx8mA66NhuuHZ2qaeEMLBzL4jK6++trGoPEfYxuQaEFE87/2I/Mt/+Pws1hB0u9hVF2nmeaSz/4z8SsDcyVFkOV1wn1fdYIki8184LVomDVkNVo/86vMs3Arid2tiTH+z8CuwUJfL8xQD1429t4g0Ne8WyoGCzKhS52Jt6uOpLHTrK6LW41SLOmXJRv8Mg86cXlP4dUJV4a2I2ovEJqBFks+8Am2sZm/AViMVBBpCIlE/rJvV3RYcr3z+m6qH8l+MHD+8yULmmMTDg04aNuEklL4kGSGAAazVzWR6zcxKqZYofZh2b8mgrqlorPCdks1To2lK9d0iBuoLqFCwGXvYT3XIT4pgnt3oL+dw6mzfQ4OA0BxFT7ZEl3Qawn+ZjbKCcFTvfOeb7y5oIFAxkHSHtzx2n2t+Y62CyJRkedYQ/AzOODglOYZP7HJ07XjEPEZ0s1qiwSTzrNBHlE6wGK9oxR32VrjmlLbQCqJfZFXh4qy5V2UXM3ZjC4T7r7z+71CZjpEY40+uJY3Goa914uPNUJKNk4WvQuXR/HN1JXyEYig7sn85tV5kjl8zHQBfqhKCrkD96evENL5R23CrTgRyhCd4KfvwV7N/DBiG+PBS/Qq3ABWOX6ZBaYqti28wppJtXKFDUGEjdatwOIVgls0+7zuZFej20ASJb7D6ZrHujVbZ3p/8Xkc06TfP/MsW80vM93l4VsRuAphpRruc6qIA/nwRUHEZ/5pHOWy0fwYAjTy8rBd7WM9JgWtn+mwAi9FRqObpge/WH+LE66QjhWtxMASBko+5C5nBH0SZZS5P+PAVZvSEf3dvJmZAkLbZ5kooaRDP5VvH7lA9mzVabk6DDPt4D7HwgHoWdVH3/TbBaoNZ/EAyHKUlGlt6uBC2cv5L0DfMBKqfYYcGuyrYh13fLfN78152JP75Ok5Hl4iiEh4ysKUFZAxKuY+5vwvugpjB8z2ksX7kFsfjKyl5n7dvJTEZCCDAgV/4f+Kdmm8tuG1leuftuh8zgNNvXwYXXbnToBOmNQNIoqViyBKcsfHdDXeHXhqb3p8aLRk93iKUZuDUfdcbHbx9WLEofYXsOwguU63WpzuDGDk8wRjHsUmHGWM+CjTTUZY1Ul1McB9XH5RTRCxpccZkFYSWbL8bcA9+BG2snDCChZEy73VqT0waE5xfX477LC0O2irblzIJkYIEFtMbq+S99rzjP/fn/892+Ox1y6abyGpb6svA8pS/EhM+QuijWek9Dbyq4sM+rD4/OKDnlmUK6BVoaIsbgNJPGg73CwFiqoT9F/fEdPXxIBhR6uzNayZJZw2t8jJUORx9SSPf7yEhdUT9JSJjjhaQbqTJPyRwmUf10MCt8WbRiFj9CE7kcn0LokL1/OWztkgOKM8BcQ8W3PSKbhTX/r7Cfgmw8Nc8mzursV9knDgPmg46nLtsotMYZGZ8XkBiBAyw5el1WLZiIQ/fKZMhEajACqGTAQ+GjtIZld2ONFQskJyJa4vjDFbGOcZJ3XW/z3nkLxdfpjHDO26+KJlk4rg3OJbxUQPTg6H8S6bLHwJ/V4tWlEkBJT+SXA9ujs2Wd2Okxbmbzu0RwLWXuNuT3Nlmk/ky3icVKSb1kQd6c4KAtPbWaTF1UGQKphFQ/GRsgIy3xZTZIJ4/4UDoiZbnF0mwofO25NiAa64H0NcZE9gZbVbMGNqVcAyLv5Ae2/wcDSRmiq/fj0/y5Pk6fD2WrTIbC/FuDLDS6UVovO/tt7NnmsQZ7eiGbGej+Ul87ckMwFeoNP2QsfzfQ24W3Pe6oE4OmqZkGLtm2JAj0JoDXpMtvzOvVZsxwDG8sji+EtB5ek1UU++YJXZ8tNoSXQ9uwa46mJDboP5Nn6i49lCXvEDxH2hMP1Xe3gjxWNM5bx5uxUCZB86BseX6PO+DKws6JeirF/d46psQzwoxcBascoMWBA9hciIDCQUWMgJVlHhXH5yoQgyvNTWDQ4RkGImoiQ4KPd5tz1WPMr6U6nF4YlTaN27grKjK8WD/kFZxncBsvlKW+dv/56aWMpMPV06cARrox6+9i+MRBgZFCRYIcGoJCXiZwm/s/pBWP8LnPhTBUBOdvm7zgFxptLmSl7YQ1NZ9GGQtO521mNYQoP/UFgFVaIET1p1e/Mc9a/tqrgx2ivCsFgOsX/uYG/fW1I0GKAvK6DyhaXbRmC7m8X778nPMy0yWRdNW8EDhjfQxRs/3fclEZ02Pxcko/SF8yNtOxstMCHCi9AXWVbjrJKYGc8vtma5HDoV8BdZzCnuMVx1Ea+Pp7nGVCZ3yYaJ3gSkRe+xWBl1oc4CDHxusnK5i9gSUuCETDj43hhFGmGREqZVbbvxmkA8ZIrRO2bdjHS2Xm9Ai8+fTAqhMUJdSfrGsSb2Sz3qkMVqck4mbaiBcykNk+ZI4K5uDIN48q2EVGgXWklAAEbPsgrMfOiRBMFdjW+pP2ng2HMouan2aqmTnhaMytvTBm/316nfA85LcY3N8Vgj2fWsT6/TF2wutxbtu4awU81WtiW+WA6UnSWrJJd+BLt8Vx9tEl8tK93zo7lIBP8PqKXmzKo7KVUp5GX4e0hsSLIPbR/6xs8ESeNcBMkyvvQs4pirUIeAWeKGAlAUbkTI+ZM7DpCOXxUNLnxdASM8OyXVEcUoO5CWHkrCARGIu+9s2CFZTEyCtG1Z559DBDn4IJF4zZneuJyze4p/F7HZ7pOYa+VUXejdFypFOrS9tVxiM096KFGdxevmv36mMTk1azwBQa9EOg8kMy8JMZFkwfsKR1TE5LV0WXUFBeFduz9M6dKo+E4nX+fMMcK1vNeuUvUBSf2EVRp5e+FKjZPQjhLj4Gb4Qeqc7ixJztaB3yXVCa2i5sYu6LAsLfkv7E0pEl7PvgZTzGpdTcuq5F2MM9omRvhtiYG/2Erh2TaD0gifGAjJh6TyTQ/aaENctYK88eZcf8t2Y2+hqFxcrwfxjLAc+wFjqgFV9yaqi1T2OBXW4b851G+Uu9gpEyWKkGozVHKdf17Y0bHnWsg1tHKRNBq0BC2pBtS2RvYkzjvaA4jxxZBsVRTisf1VYcFI+xgrzsWerAuqq6CPZgbodTDbqDhxyZPg3O84gGDkCkR1EdgN424Z3K88AYVN6SzlMYYjtktN/6Nj8zXpYSxqZqrThISjtS/D11CNPuhRIiNqFvJR2L6CJpgSZDzkUgg54SYYNMAGzE/HZjkVt66J5SNUsQ28Fx+cnfJs7w0b/on5meVykDPlRNPnMzRztBui1MTUVEwmrwBUa0rhlpKmmoLzoQlfVK1v93KmMmsii6dp8jP+ryqaBPLgDL42AN1wT35pL8aigVcpTrDpBujtXeA9m4ZDD+n5ne9ZvYLkKuBulEz5G/kuhSCee5HK/8U9hrB7CpuoT9l0e2BH1eZBH5TCK+abek2mYQ4YFQtuFYLASNypQmE3zPNDJMsWaJB/9QBH0hMujax2MIJVXeHZDaeu+1TiIVFPeDYtwiuLKuJfDPuSk8d+4Fsxs4wVOxsY2tSmUD1vMh3C7MvcID103O3FkXtzIhcJIprAM+sH2sK9OkLNququLsVnZowrCCc8ecX3f2qPRVJ0JQstCpoqTjzATNp91qDBjOB1o1FqWAeE/IFFkLVTk7X1iKU7KpFoDh7ZlLKSNoNEeaer/X+W0B7HYmr4E5J5SM48vDhzNtRzSP+3/UNFVRePOTBZ3+UKErpvXR6OICj4Bc5AO28UIs+BPru5n9xbHqjVLOKGiK10e9uGBnRC5/cfC1k4J2VAgTdXMeZ1U1yqvVzq9/B9AcskaniWg7nX3vgmtYVS3GOTuMR7QxQLIkXMyAJiqh6wsX6Y1SCCoGDBdIPEQ/muTSYzmn1CjKApwAPLTAptb0A5kspSh8bkr94Zb1/IEuEsBanvxmfg53YEQS0gMQBGerQ+gSFXHx3VShkXwPWQfJlgWIJQ3Qr8Z4RX3Fi5rJcyHCAO7SScOsosS3fKw6x9p4taT1wYvkd5FzXcCokbMOuMxOuPzG+vARj85WAmbXUi1sqD+akvibKF9lYGiZ+Q6EbI4tfyFML1YLiXvM006g49dTHxdxe5x1fHvRPGp67paugzTmQ6c5fPbkqS4PuDiTJXd0SDv6icQTiD0OcNkRTEIWTt47rkY1I6/rRcLfg+Ux6rMdogAZ6Hb7nYyf4Iv2ICSahOFGHiadve+S/NdXPPjKHjHLdZ7onHrMjrUhWxXLT4X9elBkUtfvl9julmf5ZXAIxsRnIqtDAVUEZN5Rie4cjYuch0Bjlo8fDGXAug9LImFdESQ8+T9vl2JVC0DfSG5oLX9RmuqglAhNUjmMYfI3T5f5S6CtLvKwth6UKC48rOU5hkuiyA5QAtB3BNfC5bzdz+vwmsU/i8ha6qyFNluui7DBH0ntQfGiqXM+JlJTLL85zxDcnbIZ7uvF+2rIEAM/JqkYmb5bKE0Gz+v7jwPe0i00+WENophfKYnuibjA2cdIKg6jKzncfCeLJdAWmzDrdnc5rZk9+3J7LdrcJheqX7B6giG/FRO7NVhiaTqkzUB++lnvXbCz039ADcq+pDIu5ScnbC9liFM6inZejhqexTcqyAlzSfgddP3+bpuzhn7qKvf3PoJO8bFmXqUtuVzc3IUJ+Ze3N5XY7zul3YfdYwUr9vMgeca942xLlpg7ZyFaPZalNavJrzYqJnsJQYypU84sRlNr0Fl81z8P+HdD1Maflx0JUOGH3c6rTSJV+tV0uMALa013kd7koWR9maMEJalpEVpZpRenu3YYdGSDr/NN//Cmbj5S+ALk+LWqG+Nd6y2dpGdFE2R2+he16XpirQ388y6ayCZp4S+lJGfoGubbqCihEYFVBjdsQExe4/EzsPXtWVbBSzNj3juNCF/CeaZDaYt6zP6ULuJ8UT9k6UsX5T4S/JkDU/PfEK+Owp2M+198vBWpoozdFwgze4T5+FxW5dFS8skWcW2D3uTG0s/n+5XLHHYQpKGywYOWPCwW02ijcAeeMt+bYpOXwpkwMpnRJ6dcn3tRpF8tNPPzZoodjPYlz1tIhEWD0dvTf3laOZuHwtA7BllDk7SDDMMOymJdy077Yxm51rqriMdsi0468rkldaRTd41cWVVLADOdsUn+9dg3iiPr97Wv8gaCSY7ekkbUKvSv46FgyJ50iAMTJYUYa34/bwQmA+ArMu/Jn10x/xWd93xw6MyiuXKL+IiuEYuWfd+ic6KzCFjNZdtOrdj9oTosdRUL45Gyc0G2YDIoBwOeKra/Bm39PUnoLQ2+6qjI6Jz0iTP2ls2U42R2K0A+J68kIjeb4Nl/PFonvrfL5TixDjcbxDewjkRTzoC4YaWYT3cd0BeUpTqJbDSQyXPqLbm3rpRWg7wt/abne7uanZ8urLl/0nmVdqzdY/uemNDUqxpQN3Sxp4PtnBXOJiOgoVzX6e6uhyuvk+iJjEdy+FJvp21/EonsbKr2g3TwdT3VIcuitRFz1VY3NrlVcmYshDf+suTnf92Ez3NWqHQk4+vCE94hQ4kXe4M3YcYk0J7SOkja5HRJRYHF3XOnu1oEZ5JSB2EjoLaTBNjAiR3Txp6q/Q91QHILJcBQELRm7C/xmW/HqvYwBP/QRf+80BJ6dV8yG+9TtVOFMSxzjD7lN4Mww/QXPpIfZ0M1OdDpWiM3/6sCHtfpixgfkTN7PNXhS3YuCRuAX9/C6UGtbCnaoYpe67kT8vAD3uF75IEHaEzbVjzwDAcpPz9u2aZl7U/mdt9u4M8kXl+/YAowu7Vu8vfWa34gvYEXB+mTtgKy6SVVN/S8MWXOpsCHTsy6rov0oovAR3BqtWGDEH67UyrEJnbwIVTLj9gQG6WcJcQk8GwkbLYbv+6N0D3HpuVL0neHnloFlj8XforAyNwbXW9Q5UhZCvw0alC9R9QEMgCL1EEM/61t+fFxnBR/cwKXjIw10DnSfMrzE5+KCGp9D/tZT4KCKRngz7/49wA+FMAiNyHm5tMv3Bj6IOb5KRiIw/hccbmKHq5dN/yjpNLhrGFbjH17w35sxJhigNcCdviS49hUjw+m/h1APFBVDZx3263zNgvlL1hkdlnjbcedo/zm0gYAorKwInqdRYiiJanHa7jt8qpniuZSCL76cteFMotKnL72v2NqVFTEHWcEStpkegdu2tsHAmYzeKTSrj+kz3mMZ7gDMMhLctJvVcq3Bc7gn43KB/V1SMC6t7RSi/+ikOCxjynZOyuO6EYm9z0sJqVF/bLP2Rpvh5DrVKGLmgzGrYNfJp/XfqfyUbbEugUdXz/w1Oeik7ZnP7lc+CJ60Kwk8GJsqmViq/ZVnX/MPzMsz7UB5CMA/6pgYzbsveCpU1ydQX4Dg7ctG+V9fJTaIUHKwC4kzOyZOo8d4VLUTS5pvnwpNiZshpKwB9G5UpBl5B+L/M9gSEkdWTBPbWeRyT2hk+s5clryLESLYcNtEpqXQk8BpM5Y+13F+Fknyh7iM4vEoKKpZMiyXoRKJf5rSLcwvyedeh6DRfHpz1r0oA19Hfse53ybU6tI2xhIUGdeHTSCFwP3smIpUYE3ZKyw0wkkgpOFJXC9PdrUNVYd1V60AtPQCFZQsNGWTXIOdf/Xg82OUFUd6IuKcPtzyqbZ+WmiW4MidJzemHtg3wc1TwNJiuvPaJYzvB2KgSa9vxNszbb3GZUC7U35u2fCDem2q2Etfg4VNwQRlY0w5r3NO8Ng8QykVci4OHbA9mTT1XK/pEBccdk+VobqmJFlymHNw4Lg4ateEcIROLYR2cD3YTqr5Sev6WmkQLot/nDB7Z/MuZEiwUioXrgNu4rYqe81twCqOJjBTJn4n2G2Vzgsa7hdNhXE34klcrhSsHsRoPGQYBFGJ8ou3mDb5UhN6EG4YGBjog4gu4vD9zw/5o7VPXCip0Q+sAvEVYDLntR9H+7ZuwMw3/WVfAyyfVCC3UEfEbqkV/EJmW7pe32UK1jvDKYp9GEfg/2iACckHknusQTHa/lfnFc2pbL9KLfZHZDhARNJdkBD8Q0LfPJ+nuBr95WU93za/i9S1oMZYWwEiG7cT/7Q0qB6glBtv6eqRuEiwPfNWKgYXXmRcAZaPVWmr+kxnXY8Pr5fmM2P9uyHx/dqsRkeEQ+pvKS/EaM59dFakgpL9bV8368LD8SVcQtrIHMSy3YdSTsoa9w6UOmod4cU8tGugF1ItLxhwI+yh/sIYBr9jEnN5YyxWKvQBnIrh6tSdUWNqY11ExxhlQSCXGVLq8mHku3A0TOklv7XYbo981nsfnqwzsAB8X8f/ZAyCinEhN0rwDHWNHkD4F9vXfRt4XVoz+VJMTjilWP5iyX0zBS7lXzI8UcnflvaL74k9LvYR1DjwxeYawcl6KEggybUkZlHHBntxE3Vb0qT2d8jQS+X3eYE4ozZTneQblbgStH8UQgb4AuGVN5bGuqgQ/Mk2rqbQ9K3JYpjpGXOZoi58YwygDbO09oXMHCbYfFWCHUp++7zDpc4VGeCe39eGk2vo0mJwl2rpEc1u7S3ve6+wCfEMTOLst+mH528XhmLMBN5HawVu875ONqHBsclB9NQbp3rMwvLgYUL7DCcH//THf7FHhcpriEfvCLCCmLJFgTB8E20UiTciTx42YoNdrUIzdwcHwjkEFQk1ZQUzrCRMjqjqtu2UwM0w/ngWoe4qJq8oi9GrNNV52Qsp/0aQBcpY/NJK413gNOy2habxW6xb7swpzlx5UZnhjer4QemAn48A+uantKPZ2xaZmXTpd7mcdHB4StphXiVr9kTTvrpXQDKOyBsGnlxPPKz9D2Zru01IWJ4I0yaVkD9FUpFKWFm8GSi7poVmOnsauH1Un9a0l6pYLpco++79sIok073LZQv77Af+10ZAkxC25+6y+/R28a5G8eZlfHL4679AZLAu2+U64FPgmSFqvQEDCwjvNeuZEuGyhrVPYfipVeZFDehfHKuBHi5xcelvH4DTsGzQ7noQwZ9yL44A\u003d\u003d\",\"interpreterSafeUrl\":{\"privateDoNotAccessOrElseTrustedResourceUrlWrappedValue\":\"//www.google.com/js/th/jz7nBWcXoC6PzFPxSGBK-EbGk4-kUqTnoXZXIXcr3eQ.js\"},\"serverEnvironment\":1}}},\"videoFlags\":{\"playableInEmbed\":true,\"isCrawlable\":true},\"previewPlayabilityStatus\":{\"status\":\"OK\",\"playableInEmbed\":true,\"contextParams\":\"Q0FFU0FnZ0E\u003d\"},\"embeddedPlayerMode\":\"EMBEDDED_PLAYER_MODE_DEFAULT\",\"embeddedPlayerConfig\":{\"embeddedPlayerMode\":\"EMBEDDED_PLAYER_MODE_DEFAULT\"}}","video_id":"J2p1xkGPm6U","feature":"oembed"},"POST_MESSAGE_ORIGIN":"*","VIDEO_ID":"J2p1xkGPm6U","DOMAIN_ADMIN_STATE":""});window.ytcfg.obfuscatedData_ = [];</script><script nonce="g9j5HxmwRdVULIWbsrgBTA">window.yterr=window.yterr||true;window.unhandledErrorMessages={};
window.onerror=function(msg,url,line,opt_columnNumber,opt_error){var err;if(opt_error)err=opt_error;else{err=new Error;err.message=msg;err.fileName=url;err.lineNumber=line;if(!isNaN(opt_columnNumber))err["columnNumber"]=opt_columnNumber}var message=String(err.message);if(!err.message||message in window.unhandledErrorMessages)return;window.unhandledErrorMessages[message]=true;var img=new Image;window.emergencyTimeoutImg=img;img.onload=img.onerror=function(){delete window.emergencyTimeoutImg};var values=
{"client.name":ytcfg.get("INNERTUBE_CONTEXT_CLIENT_NAME"),"client.version":ytcfg.get("INNERTUBE_CONTEXT_CLIENT_VERSION"),"msg":message,"type":"UnhandledWindow"+err.name,"file":err.fileName,"line":err.lineNumber,"stack":(err.stack||"").substr(0,500)};var parts=[ytcfg.get("EMERGENCY_BASE_URL","/error_204?t=jserror&level=ERROR")];var key;for(key in values){var value=values[key];if(value)parts.push(key+"="+encodeURIComponent(value))}img.src=parts.join("&")};
</script><script nonce="g9j5HxmwRdVULIWbsrgBTA">var yterr = yterr || true;</script><link rel="preload" href="/s/player/6ee8f9ce/player_ias.vflset/es_ES/embed.js" name="player/embed" as="script" nonce="g9j5HxmwRdVULIWbsrgBTA"><script data-id="_gd" nonce="g9j5HxmwRdVULIWbsrgBTA">window.WIZ_global_data = {"MuJWjd":false,"nQyAE":{},"oxN3nb":{"1":false}};</script><title>YouTube</title><link rel="canonical" href="https://www.youtube.com/watch?v=J2p1xkGPm6U"></head><body class="date-20240131 es_ES ltr  site-center-aligned site-as-giant-card gecko gecko-45" dir="ltr"><div id="player"></div><script src="/s/player/6ee8f9ce/www-embed-player.vflset/www-embed-player.js" nonce="g9j5HxmwRdVULIWbsrgBTA"></script><script src="/s/player/6ee8f9ce/player_ias.vflset/es_ES/base.js" name="player/base" nonce="g9j5HxmwRdVULIWbsrgBTA"></script><script nonce="g9j5HxmwRdVULIWbsrgBTA">writeEmbed();</script><script nonce="g9j5HxmwRdVULIWbsrgBTA">if (window.ytcsi) {ytcsi.infoGel({serverTimeMs:  91.0 }, '');}</script><noscript><div class="player-unavailable"><h1 class="message">Se ha producido un error.</h1><div class="submessage"><a href="https://www.youtube.com/watch?v=J2p1xkGPm6U" target="_blank">Prueba a ver el vídeo en www.youtube.com</a> o habilita JavaScript si está desactivado en tu navegador.</div></div></noscript></body></html>