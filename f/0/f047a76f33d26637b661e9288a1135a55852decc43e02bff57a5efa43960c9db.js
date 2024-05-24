/* Source and licensing information for the line(s) below can be found at https://www.egnyte.com/themes/custom/egnyte/js/navMenu.js. */
jQuery(document).ready(function($){$('#burger').on('click',function(){$('#mobile-nav').toggleClass('active')});$("#mobile-nav__close").on("click",function(){$("#mobile-nav").toggleClass("active")});$('.summit-nav__link').on('click',function(){$('#mobile-nav').toggleClass('active')});$(".main-nav__subsection").parent().hide();$(".main-nav__sublink-parent").hover(function(){$(this).addClass("active");$($(this).data("target")).addClass("active");$(this).closest(".main-nav__dropdown-left").addClass("main-nav__dropdown-left--large")},function(){$(this).closest('.main-nav__dropdown-left').removeClass('main-nav__dropdown-left--large');var ths=$(this);ths.removeClass('active');$(ths.data('target')).removeClass('active')});$('.main-nav__subsection').hover(function(){$(this).addClass('hover');$('.main-nav__sublink-parent[data-target="#'+$(this).attr('id')+'"]').addClass('hover');$(this).closest('.main-nav__dropdown-left').addClass('main-nav__dropdown-left--large')},function(){$(this).removeClass('hover');$('.main-nav__sublink-parent[data-target="#'+$(this).attr('id')+'"]').removeClass('hover');$(this).closest('.main-nav__dropdown-left').removeClass('main-nav__dropdown-left--large')});$('.mobile-nav__link--back').on('click',function(evnt){evnt.preventDefault();$(this).parent().removeClass('active');$(this).parent().parent().css('min-height','0')});$('.mobile-nav__link--parent').on('click',function(evnt){evnt.preventDefault();var trgt=$($(this).attr('href')),minHeight=trgt.outerHeight()+30;trgt.parent().css("min-height",minHeight);trgt.addClass('active').siblings().removeClass('active')});$('#search__loop').on('click',function(){$('#main-nav').addClass('main-nav--hidden');$('#search__loop').addClass('search__loop--hidden');$('#search__close').addClass('search__close--visible');$('#edit-search').focus();$('#edit-search').addClass('search__input--visible')});$('#search__close').on('click',function(){$('#main-nav').removeClass('main-nav--hidden');$('#search__loop').removeClass('search__loop--hidden');$('#search__close').removeClass('search__close--visible');$('#edit-search').blur();$('#edit-search').removeClass('search__input--visible')});$('.contact-us__nav-item').on('click',function(event){event.preventDefault();var ths=$(this),trgt=$(ths.attr('href'));ths.addClass('active').siblings().removeClass('active');trgt.addClass('active').siblings().removeClass('active')});$('.contact-us__select select').on('change',function(){var ths=$(this),trgt=$(ths.val());trgt.addClass('active').siblings().removeClass('active')});var body=document.querySelector("body"),isMobileVersion=document.getElementsByClassName("top-message");if(isMobileVersion.length>0)body.classList.add("top_message_active");$(".message-notice-close").on("click",function(){$("body").removeClass("top_message_active")})})
/* Source and licensing information for the above line(s) can be found at https://www.egnyte.com/themes/custom/egnyte/js/navMenu.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.egnyte.com/themes/custom/egnyte/js/main.js. */
/**
 * FAQ box
 */
;
(function ($, window, document, undefined) {
  'use strict';

  /**
   * Returns the loaction hash minus the hash-symbol
   */
  
  /**
   * Use history.replaceState so clicking through accordions
   * does not create dozens of new history entries.
   * Browser back should navigate to the previous page
   * regardless of how many accordions were activated.
   *
   * @param {string} hash
   */
  function setUrlHash(hash) {
    if (history.replaceState) {
      history.replaceState(null, '', '#' + hash);
    } else {
      location.hash = hash;
    }
  }

  /**
   * Create a slug from any string.
   * https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
   *
   * @type {string}
   */
  function slugify(string) {
    var a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    var b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
    var p = new RegExp(a.split('').join('|'), 'g');
    return string.toString().toL   .replace(p, function (c) {
      return b.charAt(a.indexOf(c));
    }) // Replace special characters
    .replace(/&/g, '-') // Replace & with '-'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  }

  /**
   * Create a counter (used a for creation of unique IDs)
   *
   * @type {number}
   */
  window.wfaccordion = window.wfaccordion || {};
  window.wfaccordion.slugs = window.wfaccordion.slugs || [];

  // constructor
  var Accordion = function Accordion(elem, options) {
    this.$elem = $(elem);
    this.options = options;
  };

  // the plugin prototype
  Accordion.prototype = {
    defaults: {
      accordionGroup: '.js-accordion-group',
      accordionRoot: '.js-accordion',
      accordionHeader: '.js-accordion__header',
      accordionTrigger: '.js-accordion__trigger',
      accordionPanel: '.js-accordion__panel'
    },
    init: function init() {
      // Introduce defaults that can be extended either
      // globally or using an object literal.
      this.settings = $.extend({}, this.defaults, this.options);
      var $accordionRoot = this.$elem.find(this.settings.accordionRoot);
      var $accordionHeaders = this.$elem.find(this.settings.accordionHeader);
      var self = this;
      $accordionRoot.each(function (index, root) {
        var $root = $(root);
        var $header = $root.children($accordionHeaders);
        var $triggerPlaceholder = $header.find(self.settings.accordionTrigger);
        var $panel = $root.children(self.settings.accordionPanel);
        var isDisabled = typeof $root.attr('data-wf-accordion-disabled') !== 'undefined';
        var isExpandedOnStartup = typeof $root.attr('data-wf-accordion-expanded') !== 'undefined';
        var $trigger = self.enhanceWithButton($triggerPlaceholder);

        // Enhance triggers and panels with ARIA attributes
        $trigger.attr('aria-expanded', false);
        $panel.attr('aria-hidden', true);

        // Handle initial accordion states
        $trigger.attr('aria-disabled', isDisabled);
        $trigger.attr('aria-expanded', isExpandedOnStartup);
        $panel.attr('aria-hidden', !isExpandedOnStartup);

        // Create unique IDs for use in ARIA relationships
        var headerId, panelId;
        var accordionSlug = $root.attr('id') || slugify($triggg, index) {
          return slug.indexOf(accordionSlug) >= 0;
        }).length;
        if ($.inArray(accordionSlug, window.wfaccordion.slugs) === -1) {
          window.wfaccordion.slugs.push(accordionSlug);
          headerId = accordionSlug;
          panelId = accordionSlug + '-panel';
        } else {
          window.wfaccordion.slugs.push(accordionSlug + '-' + slugOccurence);
          headerId = accordionSlug + '-' + slugOccurence;
          panelId = accordionSlug + '-panel' + '-' + slugOccurence;
        }
        $root.removeAttr('id'); // Prevent duplicated IDs on root and header element

        // Create ARIA relationships between headers and panels
        $trigger.attr('aria-controls', panelId);
        $panel.attr('id', panelId);
        $trigger.attr('id', headerId);
        $panel.attr('aria-labelledby', headerId);

        // Update ARIA states on click/tap
        $trigger.on('click', function (event) {
          var $target = $(event.target);
          var state = $target.attr('aria-expanded') === 'false';
          if (!isDisabled) {
            $target.attr('aria-expanded', state);
            $('#' + $target.attr('aria-controls')).attr('aria-hidden', !state);
          }
          $(this).trigger('wfAccordionClick', {
            target: $target,
            id: $target.attr('id'),
            expanded: $target.attr('aria-expanded')
          });
        });

        // Enable keyboard support
        $trigger.on('keydown', function (event) {
          var $target = $(event.target);
          var key = event.which.toString();
          var $header = $target.parents(self.settings.accordionHeader);

          // 33 = Page Up, 34 = Page Down
          var ctrlModifier = event.ctrlKey && key.match(/33|34/);

          // Support up / down arrows as well as Ctrl + Page Up / Page Down keys
          // 38 = Up, 40 = Down
          if (key.match(/38|40/) || ctrlModifier) {
            var index = $accordionHeaders.index($header);
            var direction = key.match(/34|40/) ? 1 : -1;
            var length = $accordionHeaders.length;
            var newIndex = (index + length + direction) % length;
            $($accordionHeaders[newIndex]).find(self.settings.accordionTrigger).focus();
            event.preventDefault();
          } else if (key.match(/35|36/)) {
            // Support End and Home keys
            // 35 = End, 36 = Home
            switch (key) {
              // Focus the first accordion
              case '36':
                $($accordionHeaders[0]).find(self.settings.accordionTrigger).focus();
                break;
              // Focus the last accordion
              case '35':
                $($accordionHeaders[$accordionHeaders.length - 1]).find(self.settings.accordionTrigger).focus();
                break;
            }
            event.preventDefault();
          }
        });
      });
      return this;
    },
    /**
     * Enhance a given placeholder element with a <button> for better keyboard support
     *
     * @param {jQuery} $placeholder
     * @returns {jQuery}
     */
    enhanceWithButton: function enhanceWithButton($placeholder) {
      // Support the case that the placeholder may already be a button
      if ($placeholder.get('0').nodeName && $placeholder.get('0').nodeName.toLowerCase() === 'button') {
        return $placeholder;
      }
      var $button = $('<button>' + $placeholdlder), function (key, value) {
        $button.attr(key, value);
      });
      $placeholder.html($button);
      this.removeAllAttributes($placeholder);
      return $button;
    },
    /**
     * Return all HTML attributes (and their values) of a given jQuery object
     * @param {jQuery} $node
     * @returns {{}}
     */
    getAttributes: function getAttx, attribute) {
        attrs[attribute.name] = attribute.value;
      });
      return attrs;
    },
    /**
     * Strip all HTML attributes (and their values) from a given jQuery object
     * @param {jQuery} $node
     */
    removeAllAttributes: function removeAllAttributes($node) {
      // Support non-jQuery node objects, just in case…
      var elem = $node instanceof jQuery ? $node.get('0') : $node;
      while (elem.attributes.length > 0) {
        elem.removeAttribute(elem.attributes[0].name);
      }
    }
  };
  Accordion.defaults = Accordion.prototype.defaults;

  // Provide expanding/navigate-to functionality via hash
  $(window).on('wfAccordionClick', function (event, data) {
    var locationWithoutHash = getUrlHash();
    if (data.expanded === 'true' && data.id !== locationWithoutHash) {
      setUrlHash(data.id);
    }
  });
  $(window).on('load', function () {
    // trigger update by ArtVersion
    var locationWithoutHash = getUrlHash();
    if (!locationWithoutHash) return;
    var $trigger = $('#' + locationWithoutHash);
    var isExpandedOnStartup = $trigger.closest('[data-wf-accordion-expanded]').length;
    if (!isExpandedOnStartup) {
      $trigge.each(function () {
      new Accordion(this, options).init();
    });
  };
})(jQuery, window, document);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Media Box Lightbox Video
 */
(function (root, factory) {
  "use strict";

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else {
    root.MediaBox = factory();
  }
})(this, function () {
  "use strict";

  var MediaBox = function MediaBox(element, params) {
    var default_params = {
        autoplay: '1'
      },
      params = params || 0;
    if (!this || !(this instanceof MediaBox)) {
      return new MediaBox(element, params);
    }
    if (!element) {
      return false;
    }
    this.params = Object.assign(default_params, params);
    this.selector = element instanceof NodeList ? element : document.querySelectorAll(element);
    this.root = document.querySelector('body');
    this.run();
  };
  MediaBox.prototype = {
    run: function run() {
      Array.prototype.forEach.call(this.selector, function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          var link = this.parseUrl(el.getAttribute('href'));
          this.render(link);
          this.events();
        }.bind(this), false);
      }.bind(this));
      this.root.addEventListener('keyup', function (e) {
        if ((e.keyCode || e.which) === 27) {
          this.close(this.root.querySelector('.mediabox-wrap'));
        }
      }.bind(this), false);
    },
    template: function template(s, d) {
      var p;
      for (p in d) {
        if (d.hasOwnProperty(p)) {
          s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
        }
      }
      return s;
    },
    parseUrl: function parseUrl(url) {
      var service = {},
        matches;
      if (matches = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) {
        service.provider = "youtube";
        service.id = matches[2];
      } else if (matches = url.match(/https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/)) {
        service.provider = "vimeo";
        service.id = matches[3];
      } else {
        service.provider = "Unknown";
        service.id = '';
      }
      return service;
    },
    render: function render(service) {
      var embedLink, lightbox, urlParams;
      if (service.provider === 'youtube') {
        embedLink = 'https://www.youtube.com/embed/' + service.id;
      } else if (service.provider === 'vimeo') {
        embedLink = 'https://player.vimeo.com/video/' + service.id;
      } else {
        throw new Error("Invalid video URL");
      }
      urlParams = this.serialize(this.params);
      lightbox = this.template('<div class="mediabox-wrap" role="dialog" aria-hidden="false"><div class="mediabox-content" role="document" tabindex="0"><span id="mediabox-esc" class="mediabox-close" aria-label="close" tabindex="1"></span><iframe src="{embed}{params}" frameborder="0" allowfullscreen allow="autoplay"></iframe></div></div>', {
        embed: embedLink,
        params: urlParams
      });
      this.lastFocusElement = document.activeElement;
      this.root.insertAdjacentHTML('beforeend', lightbox);
      document.body.classList.add('stop-scroll');
    },
    events: function events() {
      var wrapper = document.querySelector('.mediabox-wrap');
      var content = document.querySelector('.mediabox-content');
      wrapper.addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === 'SPAN' && e.target.className === 'mediabox-close' || e.target.nodeName === 'DIV' && e.target.className === 'mediabox-wrap' || e.target.className === 'mediabox-content' && e.target.nodeName !== 'IFRAME') {
          this.close(wrapper);
        }
      }.bind(this), false);

      /*
       Comment Code For Focus Event Break on Site
       document.addEventListener('focus', function(e) {
            if (content && !content.contains(e.target)) {
               e.stopPropagation();
               content.focus();
   if (e.keyCode === 13) {
          this.close(wrapper);
        }
      }.bind(this), false);
    },
    close: function close(el) {
      if (el === null) return true;
      var timer = null;
      if (timer) {
        clearTimeout(timer);
      }
      el.classList.add('mediabox-hide');
      timer = setTimeout(function () {
        var el = document.querySelector('.mediabox-wrap');
        if (el !== null) {
          document.body.classList.remove('stop-scroll');
          this.root.removeChild(el);
          this.lastFocusElement.focus();
        }
      }.bind(this), 500);
    },
    seria   a.push(k + '=' + encodeURIComponent(obj[k]));
        return a;
      }, []).join('&');
    }
  };
  return MediaBox;
});

/**
 * Object.assign polyfill for IE support
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
 */
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false,xtKey];
            }
          }
        }
      }
ol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
jQue("click", function () {
    $(this).closest(".message-area").remove();
  });
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
xports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(f  _.registerBreakpoints();
      _.}).find("a, input, button, select").attr({
      tabindexndex", index);
    });
    _.$slidenimate({
        height: targetHeiallback.call();
          }, _.opt     asNavFor = $(asNavFor).no
          target.slideHandler(index,sition);
    } else {
      _.imer = setInterval(_.autoPlayIterat    if (_.autoPlayTimer) {
      clear 1;
          }
        }
      }-disabled": "true",
          tots);
      _.$dots.find("li")tions.draggable === true) {
   ns.slidesPerRow + "%",
        displa_.$slider.trigger("breakpoint", [.trigger("focus");
        break;
          prevNavigable = navigables[    $(window).off("load.slick.slick-" + ;
    _.$list.off("mouseleave.sliveAttr("style");
      _.$slider.e();
      event.stopPropagatiue;
    if (!refresh) {
      _.$slidersition);
    } else {
      _.$
          callback.call();
            opacity: 0,
        zIndex: _.options.zIndex - 2
      });sCache.filter(filter).appendTo(_.$f.is(":focus");
          _.autoPlay();
        }
      }, 0);
    }rentSlide = function () {
    varcroll : _.options.slidesToSho - targetSlide.outerWidth()) / 2;
      }
    }
    return targe = function (option) {
    var _ = this;
ons.slidesToScroll : _.optionsexes;
  };
  Slick.prototype.getSliesTraversed;
    } else {
      return _.options.slide: "index",
        index: .options.autoplay) {
      _.lides.eq(i).removeAttr("tabindex");
 
        _.$nextArrow.on("keydown.s, true)).on("mouseleave.slick", $.pro _.$list.on("mouseleave.slick", $.proxd.slick.slick-" + _.instance& _.slideCount > _.options.slidel === true ? "previous" : "nexlice(_.options.slidesToShow * -1ons.lazyLoad === "progressive") {
      _.progressiveLazyLoad();
    }
  };
  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;
    _.changeSlide({
      data: {
        n () {
    var _ = this;
    _.checkResponsive();
    _.ion () {
    var _ = this;
    _.autoPlayClear();
      _.paused = false;
    _.focus    $currentSlide.attr("tabindex", 0).focus();
       hangeSlide({
      data: {
        message: "previous"
      }
    });
  };
  Slick.prototype.preventDefault = function (event) e;
    } else {
      _.$slidindex",
          index: currentSlide
   
        return _.options.moions.autoplay;
    _.autoPla.unslicked) {
          _.setPosition();
        }
      }, 50)ack.append(_.$slides);
    _ y + ", 0px)";
        _.$slideTrac) _.$slideTrack.children(".slde).css({
      zIndex: _.optioe).outerHeight(true);
      _.$list.css("height", targetHeight);  }
    }
    if (refresh) {
     {
      _.setFade();
    }
  _.options.useTransform && _.animType " || _.options.lazyLoad === "anticiction () {
          $(this).at  if (!toggle) {
      _.autoPlay()er(index, false, true);
      retuanimSlide);
      });
    } els{
      _.$dots.hide();
    }
    _.    } else {
        return "ulideHandler(_.currentSlide);
     eak;
      case "end":
        swipeLeft = null;
      return f !== undefined ? touches.pageY : event.clientY;
    _.dragging = tru
      _.$slidesCache.append-visible slick-current").attr   _.$slider.trigger("unslick", [_eClass("slick-disabled").attr("arentSlide / _.options.slidesToSced = true;
     ;
      if (typeof ret != "undefined") return ret;
    }
    return _;
  };
});

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)
 */

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === "undefined") {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+function ($) {
  "use strict";

  var version = $.fn.jquery.split(" ")[0].split(".");
  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
    throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
  }
}(jQuery);

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === "undrequires jQuery version 1.9.1 or higher, but lower than version 4");
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================
  var Button = function Button(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };
  Button.VERSION = "3.4.1";
  Button.DEFremoveClass(d).removeAttr(d)..hasClass("active"));
      this.$element.toggleClass("active");
    }
  };

  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data("bs.button");
      var options = _typeof(option) == "object" && option;
      if (!data) $this.data("bs.button", data = new Button(this, options));
      if (option == "toggle") data.toggle();else if (option) data.setState(option);
    });
  }
  var old = $.fn.button;
  $.fn.button = Plugin;
  $.fn.button.Constructor = Button;

  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };

  // BUTTON DATA-API
  // ==============n.find("input:visible,button:visible").first().trigger("focus");
    }
  }).on("focet).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================
  var backdrop = ".dropdown-backdrop";
  var toggle = '[data-toggle="dropdown"]';
  var Dropdown = function Dropdown(element) {
    $(element).nu"open").trigger($.Event("hidde($.Event("shown.bs.dropdown", reown
    if (!~index) index = 0;
    $items.eq(index).trigger("focus")      if (typeof option == "string") data[option].call($this);
    });
  }
  var old = $.fn.dropdown;
  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown;

  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  };

  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document).on("click.bs.dropdownn.data-api", ".dropdown form", function (e) {
    e.stopPropagation();
  }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#modals
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  "use strict";

  // MODAL CLASS DEFINITION
  // ======================
  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find(".modal-dialog");
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;
    this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom";
    if (this.options.remote) {
  xy(function () {
        this.$element.trigger("loaded.bs.modal");
      }, this));
    }
  };
  Modal.VERSION = "3.4.1";
  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;
  Modal.DEFAULTS = {
    backdrop) {
    return this.isShowNSITION_DURATION) : that.$)).emulateTransitionEnd(Modal.TRANngth) {
        this.$elemen.isShown) {
      this.$elemte, this));
    } else {
      etScrollbar();
      that.$element.t this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };
  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appeons.backdrop == "static" ? this.$element[0].focus() : this.hide();
      }, this));
      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass("in");
      if (!callback) return;
      doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$back) {
        that.removeBackdrop();
        callback && callback();
      };
      $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = fusOverflowing && !modalIsOverflowing ? s.$element.css({
      paddingLeft:  < fullWindowWidth;
    this.scrolarseFloat(calculatedPadding) + scrol");
      element.style.paddingRight =;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  };

  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data("bs.modal");
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), _typeof(option) == "object" && option);
      if (!data) $this.data("bs.modal", data = new Modal(this, options));
      if (typeof option == "string") data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }
  var old = $.fn.modal;
  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal;

  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  };

  // MODAL DATA-API
  // ==========er("focus");
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  "uset = $(element);
    // jscs:enable requireDollarBeforejQueryAssignment
  };

  Tab. "shown.bs.tab",
        relnEnd(Tab.TRANSITION_DURATION) : next();
    $active.removeCb(this));
      if (typeof option == "string") data[option]();
    });
  }
  var old = $.fn.tab;
  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab;

  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  };

  // TAB DATA-API
  // ============

  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    Plugin.call($(this), "show");
  };
  $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================
  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
    this.transitioning = null;
    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }
    if (this.options.toggle) this.toggle();
  };
  Collapse.VERSION = "3.4.1";
  Collapse.TRANSITION_DURATION = 350;
  Co.$element.hasClass("width");
    return hasWidth ? "width" : "height";
  };
  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass("in")) return;
    var activesData;
    var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
    if (actives && actives.length) {
      activesData = actives.data("bs.collapse");
      if (activesData && activesData.transitioning) return;
    }
    var startEvent = $.Event("show.bs.collapse");
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    if (actives && actives.length) {
      Plugin.call(actives, "hide");
      activesData || actives.data("bs.collapse", null);
    }
    var dimension = this.dimension();
    this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
    this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
    this.transitioning = 1;
    var complete = function complete() {
      this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
      this.transitioning = 0;
      this.$element.trigger("shown.bs.collapse");
    };
    if (!$.support.transition) return complete.call(this);
    var scrollSize = $.camelCase(["scroll", dimension].join("-"));
    this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };
  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass("in")) return;
    var startEvent = $.Event("hide.bs.collapse");
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    var dimension = this.dimension();
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
    this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
    this.$trigger.addClass("collapsed").attr("aria-expanded", false);
    this.transitioning = 1;
    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
    };
    if (!$.support.transition) return complete.call(this);
    this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransction () {
    this[this.$element.dClass(getTargetFromTrigger($element), $element);igg[^\s]+$)/, ""); // strip for ie7

    return $(document).find(target);
  }

  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data("bs.collapse");
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), _typeof(option) == "object" && option);
      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
      if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
      if (typeof option == "string") data[option]();
    });
  }
  var old = $.fn.collapse;
  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse;

  // COe.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };

  // COLLAPSE DATA-API
  // =================

on = data ? "toggle" : $this.data();
    Plugin.call($target, option);
  });
}(jQuery);
Array.prototype.forEach.call(document.getElementsByClassName("ftener();
    if (paramName[0] == param) {
      return paramName[1];
    }
  }
}
jQuery(document).ready(function ($) {
  $("#announcements__carousel").slick({
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3333,
    dotsClass: "announcements__dots",
    customPaging: function customPaging(slider, i) {
      return "";
    }
  });
  var tabContentID = String(getQueryString("tab"));
  if (tabContentID === "undefined" || tabContentID === "getting-started") {
    $("#decrease-it-costs, #improve-collaboration-and-productivity, #increase-control-and-reduce-risk").css({
      display: "none"
    });
  } else if (tabContentID === "decrease-it-costs") {
    $("#decrease-it-costs .graph-totals-container").show();
    $("#getting-started, #improve-collaboration-and-productivity, #increase-control-and-reduce-risk").css({
      display: "none"
    });
    $(".bar-chart .backup-recovery-popup, .bar-chart .management-popup, .bar-chart .support-popup").hide();
    $(".bar-chart .hardware").addClass("hardware-on");
    $(".bar-chart .backup-recovery").addClass("backup-recovery-off");
    $(".bar-chart .management").addClass("management-off");
    $(".bar-chart .support").addClass("support-off");
    $(".bar-chart .hardware-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .backup-recovery-text,.bar-chart .management-text,.bar-chart .support-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  } else if (tabContentID === "improve-collaboration-and-productivity") {
    $("#getting-started, #decrease-it-costs, #increase-control-and-reduce-risk").css({
      display: "none"
    });
    $("#improve-collaboration-and-productivity .graph-totals-container").show();
    $(".bar-chart .business-continuity-popup").show();
    $(".bar-chart .user-productivity-popup").hide();
    $(".bar-chart .business-continuity").addClass("business-continuity-on");
    $(".bar-chart .user-productivity").addClass("user-productivity-off");
    $(".bar-chart .business-continuity-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .user-productivity-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  } else if (tabContentID === "increase-control-and-reduce-risk") {
    $("#getting-started, #decrease-it-costs, #improve-collaboration-and-productivity").css({
      display: "none"
    });
    $("#increase-control-and-reduce-risk .graph-totals-container").show();
    $(".bar-chart .data-minimize-popup").show();
    $(".bar-chart .ransomware-popup, .bar-chart .compliance-popup").hide();
    $(".bar-chart .data-minimize").removeClass("data-minimize-off").addClass("data-minimize-on");
    $(".bar-chart .ransomware").addClass("ransomware-off").removeClass("ransomware-on");
    $(".bar-chart .compliance").addClass("compliance-off").removeClass("compliance-on");
    $(".bar-chart .data-minimize-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .ransomware-text,.bar-chart .compliance-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  }

  // Donut Chart
  $(".chart-container .donut-chart-content .arc-content-red").show();
  $(".chart-container .donut-chart .green,.chart-container .donut-chart .yellow").hide();
  $(".chart-container .donut-chart-content .arc-content-green,.chart-container .donut-chart-content .arc-content-yellow").hide();
  // Yellow Chart Arc
  $(".yellow .red-arc-off").on("click", function () {
    $(".yellow, .green").hide();
    $(".chart-container .donut-chart-content .arc-content-yellow,.chart-container .donut-chart-content .arc-content-green").hide();
    $(".red, .chart-container .donut-chart-content .arc-content-red").show();
  });
  $(".yellow .green-arc-off").on("click", function () {
    $(".yellow,.red").hide();
    $(".chart-container .donut-chart-content .arc-content-yellow,.chart-container .donut-chart-content .arc-content-red").hide();
    $(".green, .chart-container .donut-chart-content .arc-content-green").show();
  });

  // Red Chart Arc
  $(".red .yellow-arc-off").on("click", function () {
    $(".green, .red").hide();
    $(".chart-container .donut-chart-content .arc-content-green,.chart-container .donut-chart-content .arc-content-red").hide();
    $(".yellow,.chart-container .donut-chart-content .arc-content-yellow").show();
  });
  $(".red .green-arc-off").on("click", function () {
    $(".yellow, .red").hide();
    $(".chart-container .donut-chart-content .arc-content-yellow,.chart-container .donut-chart-content .arc-content-red").hide();
    $(".green, .chart-container .donut-chart-content .arc-content-green").show();
  });

  // Green Chart Arc
  $(".green .yellow-arc-off").on("click", function () {
    $(".green, .red").hide();
    $(".chart-container .donut-chart-content .arc-content-green,.chart-container .donut-chart-content .arc-content-red").hide();
    $(".yellow, .chart-container .donut-chart-content ".red,.chart-container .donut-chart-content .arc-content-red").show();
  });

  // Decrease IT Costs Bar Chart
  $(".tab-two").on("click", function () {
    $(".bar-chart .hardware-popup").show();
    $(".bar-chart .backup-recovery-popup, .bar-chart .management-popup, .bar-chart .support-popup").hide();
    $(".bar-chart .hardware").removeClass("hardware-off").addClass("hardware-on");
    $(".bar-chart .backup-recovery").removeClass("backup-recovery-on").addClass("backup-recovery-off");
    $(".bar-chart .management").removeClass("management-on").addClass("management-off");
    $(".bar-chart .support").removeClass("support-on").addClass("support-off");
    $(".bar-chart .hardware-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .backup-recovery-text,.bar-chart .management-text,.bar-chart .support-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
    $("#decrease-it-costs .graph-totals-container").show();
  });
  // Hardware Bar Click
  $(".bar-chart .hardware").on("click", function () {
    $(".bar-chart .hardware").removeClass("hardware-off").addClass("hardware-on");
    $(".bar-chart .backup-recovery").removeClass("backup-recovery-on").addClass("backup-recovery-off");
    $(".bar-chart .management").removeClass("management-on").addClass("management-off");
    $(".bar-chart .support").removeClass("support-on").addClass("support-off");
    $(".bar-chart .hardware-popup").show();
    $(".bar-chart .backup-recovery-popup, .bar-chart .management-popup, .bar-chart .support-popup").hide();
    $(".bar-chart .hardware-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .backup-recovery-text,.bar-chart .management-text,.bar-chart .support-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });
  // Backup Recovery Bar Click
  $(".bar-chart .backup-recovery").on("click", function () {
    $(".bar-chart .hardware").removeClass("hardware-on").addClass("hardware-off");
    $(".bar-chart .backup-recovery").removeClass("backup-recovery-off").addClass("backup-recovery-on");
    $(".bar-chart .management").removeClass("management-on").addClass("management-off");
    $(".bar-chart .support").removeClass("support-on").addClass("support-off");
    $(".bar-chart .backup-recovery-popup").show();
    $(".bar-chart .hardware-popup, .bar-chart .management-popup, .bar-chart .support-popup").hide();
    $(".bar-chart .backup-recovery-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .hardware-text,.bar-chart .management-text,.bar-chart .support-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });
  // Management Bar Click
  $(".bar-chart .management").on("click", function () {
    $(".bar-chart .hardware").removeClass("hardware-on").addClass("hardware-off");
    $(".bar-chart .backup-recovery").removeClass("backup-recovery-on").addClass("backup-recovery-off");
    $(".bar-chart .management").removeClass("management-off").addClass("management-on");
    $(".bar-chart .support").removeClass("support-on").addClass("support-off");
    $(".bar-chart .management-popup").show();
    $(".bar-chart .hardware-popup, .bar-chart .backup-recovery-popup, .bar-chart .support-popup").hide();
    $(".bar-chart .management-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .hardware-text,.bar-chart .backup-recovery-text,.bar-chart .support-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });
  // Support Bar Click
  $(".bar-chart .support").on("click", function () {
    $(".bar-chart .hardware").removeClass("hardware-on").addClass("hardware-off");
    $(".bar-chart .backup-recovery").removeClass("backup-recovery-on").addClass("backup-recovery-off");
    $(".bar-chart .management").removeClass("management-on").addClass("management-off");
    $(".bar-chart .support").removeClass("support-off").addClass("support-on");
    $(".bar-chart .support-popup").show();
    $(".bar-chart .hardware-popup, .bar-chart .backup-recovery-popup, .bar-chart .management-popup").hide();
    $(".bar-chart .support-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .hardware-text,.bar-chart .backup-recovery-text,.bar-chart .management-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });
  // Tab 3 – Improve Collaboration & Productivity Bar Chart
  $(".tab-three").on("click", function () {
    $(".bar-chart .business-continuity-popup").show();
    $(".bar-chart .user-productivity-popup").hide();
    $(".bar-chart .business-continuity").removeClass("business-continuity-off").addClass("business-continuity-on");
    $(".bar-chart .user-productivity").removeClass("user-productivity-on").addClass("user-productivity-off");
    $(".bar-chart .business-continuity-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .user-productivity-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
    $("#improve-collaboration-and-productivity .graph-totals-container").show();
  });
  // Business Continuity Bar Click
  $(".bar-chart .business-continuity").on("click", function () {
    $(".bar-chart .business-continuity").removeClass("business-continuity-off").addClass("business-continuity-on");
    $(".bar-chart .user-productivity").removeClass("user-productivity-on").addClass("user-productivity-off");
    $(".bar-chart .business-continuity-popup").show();
    $(".bar-chart .user-productivity-popup").hide();
    $(".bar-chart .user-productivity-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
    $(".bar-chart .business-continuity-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
  });
  // User Productivity Bar Click
  $(".bar-chart .user-productivity").on("click", function () {
    $(".bar-chart .user-productivity").removeClass("user-productivity-off").addClass("user-productivity-on");
    $(".bar-chart .business-continuity").removeClass("business-continuity-on").addClass("business-continuity-off");
    $(".bar-chart .user-productivity-popup").show();
    $(".bar-chart .business-continuity-popup").hide();
    $(".bar-chart .user-productivity-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .business-continuity-text,.bar-chart .lifecycle-management-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });

  // Increase Control & Reduce Risk Bar Chart
  $(".tab-four").on("click", function () {
    $("#increase-control-and-reduce-risk .graph-totals-container").show();
    $(".bar-chart .data-minimize-popup").show();
    $(".bar-chart .ransomware-popup, .bar-chart .compliance-popup").hide();
    $(".bar-chart .data-minimize").removeClass("data-minimize-off").addClass("data-minimize-on");
    $(".bar-chart .ransomware").removeClass("ransomware-on").addClass("ransomware-off");
    $(".bar-chart .compliance").removeClass("compliance-on").addClass("compliance-off");
    $(".bar-chart .data-minimize-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .ransomware-text,.bar-chart .compliance-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });
  // Data Minimization Bar
  $(".bar-chart .data-minimize").on("click", function () {
    $(".bar-chart .data-minimize-popup").show();
    $(".bar-chart .ransomware-popup, .bar-chart .compliance-popup").hide();
    $(".bar-chart .data-minimize").removeClass("data-minimize-off").addClass("data-minimize-on");
    $(".bar-chart .ransomware").removeClass("ransomware-on").addClass("ransomware-off");
    $(".bar-chart .compliance").removeClass("compliance-on").addClass("compliance-off");
    $(".bar-chart .data-minimize-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .ransomware-text, .bar-chart .compliance-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });
  // Costs of Ransomware Bar
  $(".bar-chart .ransomware").on("click", function () {
    $(".bar-chart .ransomware-popup").show();
    $(".bar-chart .data-minimize-popup, .bar-chart .compliance-popup").hide();
    $(".bar-chart .data-minimize").removeClass("data-minimize-on").addClass("data-minimize-off");
    $(".bar-chart .ransomware").removeClass("ransomware-off").addClass("ransomware-on");
    $(".bar-chart .compliance").removeClass("compliance-on").addClass("compliance-off");
    $(".bar-chart .ransomware");
    $(".bar-chart .ransomware-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .data-minimize-text, .bar-chart .compliance-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });
  // Compliance Costs
  $(".bar-chart .compliance").on("click", function () {
    $(".bar-chart .compliance-popup").show();
    $(".bar-chart .data-minimize-popup, .bar-chart .ransomware-popup").hide();
    $(".bar-chart .data-minimize").removeClass("data-minimize-on").addClass("data-minimize-off");
    $(".bar-chart .ransomware").removeClass("ransomware-on").addClass("ransomware-off");
    $(".bar-chart .compliance").removeClass("compliance-off").addClass("compliance-on");
    $(".bar-chart .compliance-text").removeClass("bar-chart-text-inactive").addClass("bar-chart-text-active");
    $(".bar-chart .data-minimize-text, .bar-chart .ransomware-text").removeClass("bar-chart-text-active").addClass("bar-chart-text-inactive");
  });

  // START OF PLAY VIDEO ON PAGE LOAD
  // VIMEO ID is passed as a query parameter
  // FOR E.G. https://www.egnyte.com/videos/customers?videoid=380596666
  var vimeoVideoId = String(getQueryString("videoid"));
  if (vimeoVideoId !== "undefined") {
    var lightbox = "<div class=\"mediabox-wrap\" role=\"dialog\" aria-hidden=\"false\"><div class=\"mediabox-content\" role=\"document\" tabindex=\"0\"><span id=\"mediabox-esc\" class=\"mediabox-close\" aria-label=\"close\" tabindex=\"1\"></span><iframe src=\"https://player.vimeo.com/video/".concat(vimeoVideoId, "?autoplay=1\" frameborder=\"0\" allowfullscreen=\"\" data-ready=\"true\"></iframe></div></div>");
    document.querySelector("body").insertAdjacentHTML("beforeend", lightbox);
  }
  $(".mediabox-close").on("click", function (e) {
    var el = document.querySelector(".mediabox-wrap");
    document.querySelector("body").removeChild(el);
  });
  // END OF PLAY VIDEO ON PAGE LOAD

  $(".collapse").collapse("toggle");
  $(".btn-pricing-cl").click(function () {
    $(this).toggleClass("collapsed-btn");
  });
  if ($(window).width() <= 991) {
    $(".basic-collapse").hide();
    $(".basic-collapse").removeClass("in");
  }
  $(".insert-after").insertAfter("a.insert-here");
  $(".one-slide").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".slide-gal ul").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".slide-gal-1 ul").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".slide-gal-2 ul").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".slide-gal-3 ul").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".slide-gal-4 ul").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".slide-gal-5 ul").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".slide-gal-6 ul").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".one-slide-text > .wp-block-group__inner-container").slick({
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".one-slide-img-text").slick({
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".one-slide-img-text-2 > .wp-block-group__inner-container").slick({
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".arrow-dots-slider > .wp-block-group__inner-container").slick({
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  var $arrowSlider = $(".arrow-slider > .wp-block-group__inner-container").length ? $(".arrow-slider > .wp-block-group__inner-container") : $(".arrow-slider");
  $arrowSlider.slick({
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".dot-slider > .wp-block-group__inner-container").slick({
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    adaptiveHeight: false,
    focusOnSelect: true,
    accessibility: true
  });
  $(".page-node-type-page #head-reviews__carousel").slick({
    dots: true,
    dotsClass: "head-reviews__dots",
    customPaging: function customPaging(slider, i) {
      return "";
    },
    prevArrow: '<button type="button" class="head-reviews__arrow head-reviews__arrow--prev"></button>',
    nextArrow: '<button type="button" class="head-reviews__arrow head-reviews__arrow--next"></button>'
  });
  $(".heading-search input.form-text, .search-block-form input.form-text").attr("placeholder", "Type your keywords here");
  $(".heading-search").insertAfter(".search-mm a");
  $(".search-mm a").wrapInner("<span class='remove-s'></span>");
  $(".search-mm > a").click(function (e) {
    e.preventDefault();
    $(".we-mega-menu-ul").toggleClass("expand-search");
  });
  $(".header-search-page").insertAfter("header.header");
  $(".page-node-type-success_stories .page-summary").remove();
  $(".footer-cols > h2").click(function () {
    $(this).next().slideToggle(200);
    $(this).next().toggleClass("open");
    $(this).toggleClass("click-rotate");
  });
  $(".modal-link a").attr({
    "data-toggle": "modal",
    "data-target": "#loc-modal"
  });
  $(".uk-block, .us-block, .poland-block, .loc-mv, .loc-emea, .loc-poz, .loc-spo, .loc-ral, .map-mv,  .map-spo, .map-ral, .map-pol, .map-emea").addClass("hide-me");
  $(".mv-link a").click(function () {
    $(".loc-mv, .map-mv, .us-block").addClass("show-me");
    $(".loc-mv, .map-mv, .us-block").removeClass("hide-me");
    $(".uk-block, .poland-block, .loc-emea, .loc-poz, .loc-spo, .loc-ral, .map-spo, .map-ral, .map-pol, .map-emea").removeClass("show-me");
    $(".uk-block, .poland-block, .loc-emea, .loc-poz, .loc-spo, .loc-ral, .map-spo, .map-ral, .map-pol, .map-emea").addClass("hide-me");
  });
  $(".sp-link a").click(function () {
    $(".loc-spo, .map-spo, .us-block").addClass("show-me");
    $(".loc-spo, .map-spo, .us-block").removeClass("hide-me");
    $(".uk-block, .poland-block, .loc-emea, .loc-mv, .loc-poz, .loc-ral, .map-ral, .map-pol, .map-emea, .map-mv").removeClass("show-me");
    $(".uk-block, .poland-block, .loc-emea, .loc-mv, .loc-poz, .loc-ral, .map-ral, .map-pol, .map-emea, .map-mv").addClass("hide-me");
  });
  $(".ra-link a").click(function () {
    $(".loc-ral, .map-ral, .us-block").addClass("show-me");
    $(".loc-ral, .map-ral, .us-block").removeClass("hide-me");
    $(".uk-block, .poland-block, .loc-mv .loc-emea, .loc-poz, .loc-spo, .map-pol, .map-emea, .map-spo, .map-mv").removeClass("show-me");
    $(".uk-block, .poland-block, .loc-mv .loc-emea, .loc-poz, .loc-spo, .map-pol, .map-emea, .map-spo, .map-mv").addClass("hide-me");
  });
  $(".po-link a").click(function () {
    $(".loc-poz, .map-pol, .poland-block").addClass("show-me");
    $(".loc-poz, .map-pol, .poland-block").removeClass("hide-me");
    $(".uk-block, .us-block, .loc-ral, .loc-mv, .loc-emea, .loc-spo, .map-ral, .map-emea, .map-mv, .map-spo").removeClass("show-me");
    $(".uk-block, .us-block, .loc-ral, .loc-mv, .loc-emea, .loc-spo, .map-ral, .map-z, .loc-spo, .map-mv, .map-ral, .map-pol, .map-mv").addClass("hide-me");
  });
  $(".js-accordion-group .wp-block-group__inner-container").wfAccordion({
    accordionGroup: ".js-accordion-group",
    accordionHeader: ".js-accordion__header",
    accordionTrigger: ".js-accordion__trigger",
    accordionPanel: ".js-accordion__panel",
    accordionIsOpenClass: "js-accordion--is-expanded"
  });
  var question = $(".faq-heading");
  var answer = $(".faq-panel");
  $(".js-accordion:first-child .faq-heading").addClass("active");
  $(question).click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle("fast");
  });
  $(".js-accordion:first-child .faq-heading").addClass("active");
  $(".js-accordion:first-child .faq-panel").show();
  $(".js-accordion:not(:first-child) .faq-panel").hide();
  MediaBox(".vimeo-video a");
  $("<button type='button' class='btn-contact slide-form'>Request Demo</button>").insertAfter(".contact-us-mm > a");
  $(".all-collapsed button").prop("disabled", true);
  $(".all-collapsed .collapse").prop("aria-expanded", tr-more").click(function () {
    $(this).toggleClass("active-less-more");
  });
  $(".slide-form").click(function (e) {
    // drift.api.startInteraction({ interactionId: 313098 }); updaing with new ID
    drift.api.startInteraction({
      interactionId: 337595
    });
    e.preventDefault();
  });
  $(".slide-form-partner-msp").click(function (e) {
    // drift.api.startInteraction({ interactionId: 308145 }); updating with new ID
    drift.api.startInteraction({
      interactionId: 349480
    });
    e.preventDefault();
  });
  $(".contact-us-mm1 .slide-form").click(function (e) {
    // drift.api.startInteraction({ interactionId: 313098 }); updating with new ID
    drift.api.startInteraction({
      interactionId: 337595
    });
    e.preventDefault();
  });
  $(".contact-specialist").click(function (e) {
    // drift.api.startInteraction({ interactionId: 313098 }); updating with new ID
    drift.api.startInteraction({
      interactionId: 373384
    });
    e.preventDefault();
  });
  $(".close-form").click(function () {
    $(".slide-form").removeClass("active-form-slide");
    $(".contact-us-mm").removeClass("active-form-li");
    $(".contact-us-mm1").removeClass("active-form-li");
    $(".contact-us-mm .we-mega-menu-submenu").hide();
    $(".contact-us-mm1 .we-mega-menu-submenu").hide();
  });
  $(".newsletter-grid").each(function () {
    $(this).find(".newsletter-h-title-wrap, .newsletter-grid-body-wrap, .grid-hover-wrap, .newsletter-link-wrap, .views-field-field-newsletter-link-addon").wrapAll('<div class="inner-newsletter-hover">');
    $(this).find(".newsletter-title-wrap, .views-field-field-newsletter-date").wrapAll('<div class="inner-newsletter-body wp-block-column">');
    $(this).find(".newsletter-link-wrap, .newsletter-link-addon-wrap").wrapA"body,html").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  if (!$("body").hasClass("page-node-721")) {
    var elements = document.querySelectorAll(".art-modal-toggle");
    Array.prototype.slice.call(elements).forEach(function (toggle, index) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll(".art-modal-box")[index].classList.toggle("is-visible");
      });
    });
    $("#contact-sales .art-modal").remove();
  }
  $(".page-node-721 .art-modal").insertAfter(".modal-mark");
  $(".art-modal-toggle-4").on("click", function (e) {
    e.preventDefault();
    $(".art-m  e.preventDefault();
  $('.art-modal-box [class^="art-modal-close"]').trigger("click");
    }
  });
  $(".solutions-mega > a, .resources-mega > a").attr("href", "javascript:void(0)");
});
(function ($) {
  $.organicTabs = function (el, options) {
    var base = this;
    base.$el = $(el);
    base.$nav = base.$el.find(".tabs");
    base.init = function () {
      base.options = $.extend({}, $.organicTabs.defaultOptions, options);

      // Accessible hiding fix
      $(".hide-tab-content").css({
        position: "relative",
        top: 0,
        left: 0,
        display: "none"
      });
      base.$nav.on("click", "li > a", function () {
        // Figure out current list via CSS class
        var curList = base.$el.find("a.current").attr("href").substring(1),
          // List moving to
          $newList = $(this),
          // Figure out ID of new list
          listID = $newList.attr("href").substring(1),
          // Set outer wrapper height to (static) height of current inner list
          $allListWrap = base.$el.find(".tab-content"),
          curListHeight = "auto";
        // curListHeight = $allListWrap.height();
        $allListWrap.height(curListHeight);
        if (listID != curList && base.$el.find(":animated").length == 0) {
          // Fade out current list
          base.$el.find("#" + curList).fadeOut(base.options.speed, function () {
            // Fade in new list on callback
            base.$el.find("#" + listID).fadeIn(base.options.speed);

            // Adjust outer wrapper to fit new list snuggly
            // var newHeight = base.$el.find("#" + listID).height();
            $allListWrap.animate({
              height: "auto"
            });

            // Remove highlighting - Add to just-clicked tab
            base.$el.find(".tabs li a").removeClass("current");
            $newList.addClass("current");
            if (window.history && history.pushState) {
              // NOTE: doesn't take into account existing params
              history.replaceState("", "", "?" + base.options.param + "=" + listID);
            }
          });
        }

        // Don't behave like a regular link
        // Stop propegation and bubbling
        return false;
      });
      var queryString = {};)?", "g"), function ($0, $1, $2, $3) {
        queryString[$1] = $3;
      });
      if (queryString[base.options.param]) {
        console.log(queryString[base.options.param]);
        var tab = $("a[href='#" + queryString[base.options.param] + "']");
        console.log(tab.closest(".tabs"));
        tab.closest(".tabs").find("a").removeClass("current").end().next(".tab-content").find(".wp-block-group").hide();
        tab.addClass("current");
        $("#" + queryString[base.options.param]).show();
      }
    };
    base.init();
  };
  $.organicTabs.d this.each(function () {
      new $.organicTabs(this, options);
    });
  };
})(jQuery);
jQuery(".tab-container").organicTabs();
jQuery(".life-sciences-advisory-board .resources__item").each(function (i) {
  if (jQuery(".profile-modal-bio p").eq(i).is(":empty")) {
    jQuery(this).closest(".profile-modal-toggle").addClass("disable-profile");
  }
  jQuery(".life-sciences-advisory-board .resources__item").eq(i).on("click", function () {
    jQuery(this).parent().toggleClasse").removeClass("profile-modal-is-visible");
      e.preventDefault();
    });
  });
});
(function ($) {
  if ($(".career-hero").hasss("wow")) {
    window.onload = function () {
      new WOW().init();
    };
  }
})(jQuery);
(function ($) {
  if (jQuery('.js-view-dom-id-ajax-egnyt(context, settings) {
        MediaBox(".vimeo-video-ajax-event a");
      }
    };
  }
  if (jQuery('.summit-register-now').length) {
    var regiterURL = document.getElementsByClassName("summit-register-now");
    var urlParams = window.location.toString().split('?')[1];
    if (typeof urlParams != "undefined") {
      for (var i = 0; i < regiterURL.length; i++) {
        regiterURL[i].href = regiterURL[i].href + '?' + urlParams;
      }
    }
  }
  if (jQuery('.bizzabo-iFrame-registration').length) {
    var urlParams = window.location.toString().split('?')[1];
    if (typeof urlParams != "undefined") {
      jQuery('.bizzabo-iFrame-registration').attr("src", jQuery('.bizzabo-iFrame-registration').attr("src") + '&' + urlParams);
    }
  }
})(jQuery);
(function ($) {
  if ($('#plans-compare__anch').length) {
    function scroll_style() {
      var window_top = $(window).scrollTop();
      var div_top = $('#plans-compare__anch').offset().top;
      var div_bottom = $('#pricing_accordion').offset().top;
      $('#plans-compare').removeClass('fixed');
      if (window_top > div_top) {
        $('#plans-compare').addClass('fixed');
        $('#plans-compare').css('visibility', 'visible');
      }
      if (window_top > Math.floor(div_bottom)) {
ction () {
      $(window).scroll(scroll_style);
      scroll_style();
    });
  }

  /**/
  /* fixing table head */
  /**/
  /*
  var wndwScrll = 0;
  var prcCmpr = $('#plans-compare');
  var prcCmprAnch = $('#plans-compare__anch');
  window.onscroll = function() {
      wndwScrll = document.documentElement.scrollTop;
       if(wndwScrll > prcCmprAnch.offset().top) {
          prcCmpr.addClass('fixed');
      }
      else {
          prcCmpr.removeClass('fixed');
      }
  }
  *
    $(this).toggleClass('opened');
    $(this).next().slideToggle(375);
  });

  /**/
  /* sync horizontal scroll */
  /**/
  var scrllLft = 0;
  $('.plans-compare__head-overflow, .plans-compare__table-overflow').on('scroll', function () {
    if (scrllLft != $(this).scrollLeft()) {
      scrllLft = $(this).scrollLeft();
      $('.plans-compare__table-side').toggleClass('fixed', scrllLft > 4);
      $('.plans-compare__head-overflow, .pn e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}
var Sticky = function () {
  function i() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
      e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, i), this.selector = t, this.elements = [], this.version = "1.2.2", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = {
      wrap: e.wrap || !1,
      marginTop: e.marginTop || 0,
      stickyFor: e.stickyFor || 0,
      stickyClass: e.stickyClass || null,
      stickyContainer: e.stickyContainer || "body"
    }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run();
  }
  return _createClass(i, [{
    key: "run            return e.renderElement(t);
            });
          }
        }, 10);
    }
  }, {
    key: "renderElement",
    value: function value(t) {
      var e = this;
      t.sticky = {}, t.sticky.active = !1, t.sticky.marginTop = parseInt(t.getAttribute("data-margin-top")) || this.options.marginTop, t.sticky.stickyFor = parseInt(t.getAttribute("data-sticky-for")) || this.options.stickyFor, t.sticky.stickyClass = t.getAttribute("data-sticky-class") || this.options.stickyClass, t.sticky.wrap = !!t.hasAttribute("data-sticky-wrap") || this.options.wrap, t.sticky.stickyContainer = this.options.stickyContainer, t.sticky.container = this.getStickyContainer(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rad = function () {
        return t.sticky.rect = e.getRectangle(t);
      }), t.sticky.wrap && this.wrapElement(t), this.activate(t);
    }
  }, {
    key: "wrapElement",
    value: function value(t) {
      t.insertAdjacentHTML("beforebegin", "<span></span>"), t.previousSibling.appendChild(t);
    }
  }, {
    key: "activate",
    value: function value(t) {
      t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active && (t.sticky.active = !0), this.elements.indexOf(t) < 0 && this.elements.push(t), t.sticky.resizeEvent || (this.initResizeEvents(t), t.sticky.resizeEvent = !0), t.sticky.scrollEvent || (this.initScrollEvents(t), t.sticky.scrollEvent = !0), this.setPosition(t);
    }
  }, {
    key: "initResizeEvents",
    value: function value(t) {
      var e = this;
      t.sticky.resizeListener = function () {
        return e.onResizeEvents(t);
      }, window.addEventListener("resize", t.sticky.resizeListener);
    }
  }, {
    key: "destroyResizeEvents",
    value: function value(t) {
      window.removeEventListener("resize", t.sticky.resizeListener);
    }
  }, {
    key: "onResizeEvents",
    value: function value(t) {
      this.vp = this.getViewportSize(), t.sticky.rect = this.getRectangle(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active ? t.sticky.active = !0 : (t.sticky.rect.top + t.sticky.rect.height >= t.sticky.container.rect.top + t.sticky.container.rect.height || t.sticky.stickyFor >= this.vp.width && t.sticky.active) && (t.sticky.active = !1), this.setPosition(t);
    }
  }, {
    key: "initScrollEvents",
    vay.scrollListener = function () {
        return e.onScrollEvents(t);
      }, window.addEventListener("scroll", t.sti{
      window.removeEventListener("scroll", t.sticky.scrollListener);
    }
  }, {
    key: "onScrollEvents",
    value: function value(t) {
      t.sticky.active && this.setPosition(t);
    }
  }, {
    key: "setPosition",
    value: function value(t) {
      this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      }), this.vp.height < t.sticky.rect.height || !t.sticky.active || (t.sticky.rect.width || (t.sticky.rect = this.getRectangle(t)), t.sticky.wrap && this.css(t.parentNode, {
        display: "block",
        width: t.sticky.rect.width + "px",
        height: t.sticky.rect.height + "px"
      }), 0 === t.sticky.rect.top && t.sticky.container === this.body ? this.css(t, {
        position: "fixed",
        top: t.sticky.rect.top + "px",
        left: t.sticky.rect.left + "px",
        width: t.sticky.rect.width + "px"
      }) : this.scrollTop > t.sticky.rect.top - t.sticky.marginTop ? (this.css(t, {
        position: "fixed",
        width: t.sticky.rect.width + "px",
        left: t.sticky.rect.left + "px"
      }), this.scrollTop + t.sticky.rect.height + t.sticky.marginTop > t.sticky.container.rect.top + t.sticky.container.offsetHeight ? (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
        top: t.sticky.container.rect.top + t.sticky.container.offsetHeight - (this.scrollTop + t.sticky.rect.height) + "px"
      })) : (t.sticky.stickyClass && t.classList.add(t.sticky.stickyClass), this.css(t, {
        top: t.sticky.marginTop + "px"
      }))) : (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      }), t.sticky.wrap && this.css(t.parentNode, {
        display: "",
        width: "",
        height: ""
      })));
    }
  }, {
    key: "update",
    vale.getRectangle(t.sticky.container), e.activate(t), e.setPosition(t);
      });
    }
  }, {
    key: "destroy",
    value: function value() {
      var e = this;
      window.removeEventListener("load", this.updateScrollTopPosition), window.removeEventLe.destroyResizeEvents(t), e.destroyScrollEvents(t), delete t.sticky;
      });
    }
  }, {
    key: "getStickyContainer",
    value: function value(t) {
      for (var e = t.parentNode; !e.hasAttribute("data-sticky-container") && !e.parentNode.querySelector(t.sticky.stickyContainer) && e !== this.body;) e = e.parentNode;
      return e;
    }
  }, {
    key: "getRectangle",
    value: function value(t) {
      this.css(t, {
        position: "",
        width: "",
        top: "",
        left: ""
      });
      for (var e = Math.max(t.offsetWidth, t.clientWidth, t.scrollWidth), i = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight), s = 0, n = 0; s += t.offsetTop || 0, n += t.offsetLeft || 0, t = t.offsetParent;);
      return {
        top: s,
        left: n,
        width: e,
        height: i
      };
    }
  }, {
    key: "getViewportSize",
    value: function value() {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      };
    }
  }, {
    key: "updateScrollTopPosition",
    value: function value() {
      this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
    }
  }, {
    key: "forEach",
    value: function value(t, e) {
      for (var i = 0, s = t.length; i < s; i++) e(t[i]);
    }
  }, {
    key: "css",
    value: function value(t, e) {
      for (v& define.amd ? define([], function () {
    return e;
  }) : t.Sticky = e;
}(this, Sticky);
jQuery(document).ready(function ($) {
  if (document.querySelector('.pricing-heading-box-team')) {
    document.querySelector('.pricing-heading-box').setAttribute('data-sticky-class', 'sticky-active');
    document.querySelector('.pricing-heading-box-team').setAttribute('data-sticky-class', 'sticky-active');
    document.querySelector('.pricing-heading-box-business').setAttribute('data-sticky-class', 'sticky-active');
    document.querySelector('.pricing-heading-box-enterprise').setAttribute('data-sticky-class', 'sticky-active');
    document.querySelector('.pricing-heading-box').setAttribute('data-sticky-wrap', 'true');
    document.querySelector('.pricing-heading-box-team').setAttribute('data-sticky-wrap', 'true');
    document.querySelector('.pricing-heading-box-business').setAttribute('data-sticky-wrap', 'true');
    document.querySelector('.pricing-heading-box-enterprise').setAttribute('data-sticky-wrap', 'true');
    document.querySelector('.pricing-heading-box').setAttribute('data-sticky-for', '991');
    document.querySelector('.pricing-heading-box-team').setAttribute('data-sticky-for', '991');
    document.querySelector('.pricing-heading-box-business').setAttribute('data-sticky-for', '991');
    document.querySelector('.pricing-heading-box-enterprise').setAttribute('data-sticky-for', '991');
    var sticky = new Sticky('.full-sticky');
  }
});
window.ss360Config = {
  showErrors: false,
  language: 'en',
  tracking: {
    providers: []
  },
  siteId: "Egnyte.com",
  allowCookies: false,
  suggestions: {
    show: true,
    showImages: false,
    minChars: 1
  },
  style: {
    defaultCss: true,
    searchBox: {
      text: {
        color: "#35364e",
        size: "inherit",
        border: "0px"
      },
      background: {
        color: "#ffffff"
      },
      border: {
        color: "#FFFFFF",
        radius: "0px"
      },
      padding: "8px",
      button: {
        text: '',
        icon: 'magnifier',
        color: '#000000',
        backgroundColor: '#FFFFFF',
        padding: '0px'
      }
    }
  },
  searchBox: {
    selector: ".search-field",
    searchButton: ".ss360SearchButton"
  },
  callbacks: {
    preSearch: function preSearch(query, sort, selectedSearchBox) {
      var searchBoxId = selectedSearchBox ? selectedSearchBox.get()[0].id : "edit-search";
      if (searchBoxId == 'edit-search') {
        if (document.getElementById('searchBox')) {
          document.getElementById('searchBox').value = '';
        }
      } else if (searchBoxId == 'searchBox') {
        if (document.getElementById('edit-search')) {
          document.getElementById('edit-search').value = '';
        }
      }
      return true;
    }
  },
  results: {
    embedConfig: {
      contentBlock: "#ss360-target",
      url: '/search'
    },
    group: false,
    highlightQueryTerms: false,
    showContentGroupHeadings: true,
    linksOpenNewTab: false,
    searchQueryParamName: 'search'
  },
  layout: {
    mobile: {
      showImages: false,
      showUrl: false
    },
    desktop: {
      showImages: false,
      showUrl: false
    },
    navigation: {
      position: 'none',
      type: 'scroll',
      tabTitle: '#NAME# (#COUNT#)',
      showGroupResultCount: true,
      forceTabs: true,
      fallbackToScroll: false,
      showAllResultsTab: true,
      allResultsTabName: 'All Results',
      allResultsTabTitle: 'All Results (#COUNT#)'
    }
  }
};
//check if .search-field is exist or not 
var searchFieldElement = jQuery(".search-field");
if (searchFieldElement.length) {
  var e = document.createElement("script");
  e.async = !0;
  e.src = "https://cdn.sitesearch360.com/v13/sitesearch360-v13.min.js";
  document.getElementsByTagName("body")[0].appendChild(e);
}
jQuery('#promo-stories__carousel > .wp-block-group__inner-container').slick({
  dots: true,
  // slidesToShow: 2,
  infinite: false,
  draggable: false,
  centerMode: true,
  variableWidth: true,
  dotsClass: 'promo-stories__dots',
  customPaging: function customPaging(slider, i) {
    return '';
  },
  prevArrow: '<button type="button" class="promo-stories__arrow promo-stories__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
  nextArrow: '<button type="button" class="promo-stories__arrow promo-stories__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>'
});
jQuery('#awards-accolades__carousel > .wp-block-group__inner-container:first-child').slick({
  slidesToShow: 4,
  prevArrow: '<button type="button" class="awards-accolades__arrow awards-accolades__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
  nextArrow: '<button type="button" class="awards-accolades__arrow awards-accolades__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>',
  responsive: [{
    breakpoint: 1284,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 768,
    settings: {
  ).on('click', function () {
  jQuery(this).parent().toggleClass('active');
});
//For MSP
jQuery('#awards-accolades__carousel__alt').slick({
  slidesToShow: 6,
  prevArrow: '<button type="button" class="awards-accolades__arrow awards-accolades__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
  nextArrow: '<button type="button" class="awards-accolades__arrow awards-accolades__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>',
  responsive: [{
    breakpoint: 1284,
    settings: {
      slidesToShow: 5
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  },, {
    breakpoint: 578,
    settings: {
      slidesToShow: 1
    }
  }]
});
//reviews__carousel
jQuery('#solution-reviews__carousel > .wp-block-group__inner-container:first-child').slick({
  dots: true,
  slidesToShow: 1,
  // infinite: false,
  draggable: false,
  // centerMode: true,
  // variableWidth: true,
  adaptiveHeight: true,
  dotsClass: 'solution-reviews__dots',
  customPaging: function customPaging(slider, i) {
    return '';
  },
  prevArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
  nextArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>'
});
jQuery('#solution-reviews__carousel__block > .wp-block-group__inner-container:first-child').slick({
  dots: true,
  dotsClass: 'solution-reviews__dots',
  customPaging: function customPaging(slider, i) {
    return '';
  },
  prevArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
  nextArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>'
});
//reviews__carousel
jQuery('#solution-reviews__carousel').slick({
  dots: true,
  dotsClass: 'solution-reviews__dots',
  customPaging: function customPaging(slider, i) {
    return '';
  },
  prevArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
  nextArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>'
});

//compliance__tab
var sltnCmplncTmt = setTimeout(function () {
  jQuery('.solution-compliance__tab.active').siblings().trigger('click');
}, 3333);
jQuery('.solution-compliance__tab').on('click', function () {
  var ths = jQuery(this);
  var trgt = jQuery(ths.data('target'));
  ths.addClass('active').siblings().removeClass('active');
  trgt.addClass('active').siblings().remove jQuery('.solution-compliance__tab.active').siblings().trigger('click');
  }, 3333);
});

/* Banner Carousel */
jQuery('#home-reviews__carousel__alt').slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 12000,
  speed: 2000,
  pauseOnHover: false,
  pauseOnFocus: false,
  dots: true
});
jQuery(document).ready(function () {
  var wndwScrll = 0;
  var hdr = jQuery('.header');
  var pltfrmEnbls = jQuery('#platform-enables');
  var pltfrmTbsPlc = jQuery('#platform-tabs-place');

  /**/
  /* platform tabs */
  /**/
  jQuery('.platform-tabs__item').on('click', function (evnt) {
    evnt.preventDefault();
    jQuery(this).addClass('active').siblings().removeClass('active');
    jQuery(jQuery(this).attr('href')).addClass('active').siblings().removeClass('active');
    jQuery('html, body').animate({
      scrollTop: pltfrmTbsPlc.offset().top - hdr.outerHeight() + 1
    }, 375);
  });

  /**/
  /* platform tabs  Guten    jQuery(this).attr('data-tag', '#platform-enables__pane-' + (i + 1));
  });
  jQuery('#platform-tabs .platform-tabs__item').on('click', function (evnt) {
    evnt.preventDefault();
    jQuery(this).addClass('active').siblings().removeClass('active');
    jQuery(jQuery(this).attr('data-tag')).addClass('active').siblings().removeClass('active');
    jQuery('html, body').animate({
      scrollTop: pltfrmTbsPlc.offset().top - hdr.outerHeight() + 1
    }, 375);
  });

  /**/
  /* window scroll */
  /**/
  window.onscroll = function () {
    wndwScrll = document.documentElement.scrollTop;
    if (jQuery("#platform-tabs").length > 0) {
      if (wndwScrll + hdr.outerHeight() + 1 > pltfrmTbsPlc.offset().top) {
        pltfrmTbsPlc.addClass('fixed');
        jQuery('#platform-tabs-wrap').addClass('fixed');
      } else {
        pltfrmTbsPlc.removeClass('fixed');
        jQuery('#platform-tabs-wrap').removeClass('fixed');
      }
      if (wndwScrll + hdr.outerHeight() + 1 > pltfrmEnbls.offset().top + pltfrmEnbls.outerHeight()) {
        jQuery('#platform-tabs-wrap').addClass('hidden');
      } else {
        jQuery('#platform-tabs-wrap').removeClass('hidden');
      }
    }
  };

  // TODO: CREATE NEW JS FILE CALLED slider.js
  // TODO: MOVE THE BELOW FUNCTION IN IT
  jQuery('#platform-reviews__carousel').slick(
    customPaging: function customPaging(slider, i) {
      return '';
    },
    prevArrow: '<button type="button" class="platform-reviews__arrow platform-reviews__arrow--prev"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,23.414L6.293,12.707c-0.391-0.391-0.391-1.023,0-1.414L17,0.586L18.414,2l-10,10l10,10L17,23.414z"></path></svg></button>',
    nextArrow: '<button type="button" class="platform-reviews__arrow platform-reviews__arrow--next"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M7,23.414L5.586,22l10-10l-10-10L7,0.586l10.707,10.707c0.391,0.391,0.391,1.023 (){}
    };
    factory(mod, mod.exports);
    global.WOW = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.definePr {
      throw new TyneProctuloils ievendow.innerHeight;
    }
    return document.documentElement.clientHeight;
  }

  // Minimalistic WeakMas.push(value);
        return this;
      }
    }]);
    return WeakMap;
  }();

  // Dummy MutationObserver, to avoid raising exceptions.
  var MutationObserver = window.MutationObserver || wind      value: function observe() {}
    }]);
    return MutationObserver;
  }(), _class.notSupported = true, _temp);

  // getComputedStyle shim, from http://stacrentStyle != null ? currentStyle[prop] : void 0) || null;
      }
    };
  };
  var WOW = function () {
    function WOW() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      _classCallCheck(this, WOW);
      this.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: window.width > 767 ? 240 : 80,
        mobile: true,
        live: true,
        callback: null,
        scrolreturn function (callback) {
          return callback();
        };
      }();
      this.vendors = ['moz', 'webkit'];
      this.start = this.start.bind(this);
      this.resetAnimation = this.resetAnimation.bind(this);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.scrollCallback = this.scrollCallback.bind(this);
      this.scrolled = true;
      this.config = extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      // Map of elements to animation names:
      this.animationNameCache = new WeakMap();
      this.wowEvent = createEvent(this.confOMContentLoaded', this.start);
        }
   childList: true,
            subtree: tnterval != null) {
          clearIntervaerver.notSupported) {
          this.doSync           }
            this.scrolled = MSAnimationEnd', this.resetAnimation);
        s2.customStyle(box, hidden, duration, delay, iteration);
        });
      }
    }, {
      key: 'resetStyle',
      value: function resetStyle() {
        for (var i = 0; i < this.boxes.length; i++) {
          var box = this.boxes[i];
          //box.style.visibility = 'visible';
        }

        et.className.replace(this.config.animateClass, '').trim();
        }
      }
    }, {
      key: 'customStyle',
      value: function customStyle(box, hidden, duration, delay, iteration) {
        if (hidden) {
          this.cacheAnimationName(box);
        }
        //box.style.visibility = hidden ? 'hidden' : 'visible';

        if (duration) {
          this.vendorSet(box.style, {
            animationDuration: duration
          });
        }
        if (delay) {
          this.vendorSet(box.style, {
            animationDelay: delay
          });
        }
        if (iteration) {
          this.vendorSet(box.style, {
            animationIterationCount: iteration
          });
        }
        this.vendorSet(box.style, {
          animationName: hidden ? 'none' : this.cachedAnimationName(box)
        }ase() + name.substr(1)] = value;
            }lue('-' + vendor + '-' + property);
        }
    efox, unable to get animation name?
        }

           return this.animationNameCache.set(box, this.animationimationName(box) {
        return this.animationN     value: function scrollHandler() {
        this !this.config.live) {
            this.stop();t;
          top += element.offsetTop;
       clientHeight;
        return top <= viewBotto        return !this.config.mobile && isMobile(navigator.userAgent);
      }
    }]);
    return WOW;
  }();
  exports.default = WOW;
  module.exports = exports['default'];
});
/* Source and licensing information for the above line(s) can be found at https://www.egnyte.com/themes/custom/egnyte/js/main.js. */;
/* Source and licensing information for the line(s) below can be found ation(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var n="7bf73c67-438a-49cd-8270-0d20d8abb42c",a="",r="00a4bbaa-d732-4f60-8aca-c49fe6f5dc53",o={GEO_REDIRECTION_ENABLED:!0,DEFAULT_DC:"www-sjc.egnyte.com",DEFAULT_HOST:"egnyte.com",GEO_DC_COOKIE_NAME:"EgnyteGeoDc",PRICING_PAGE_PATH:"/pricing",GEO_LOCATION_API_URL:"https://geo-dc-lookup.egnyte.com/rest/public/geoDcLookup",TARGET_REG_PARAMS:["com_egnyte_target","com.egnyte.target","target"],REG_TARGETS:{TRIAL:"register",BUY:"buy",GDRIVE:"gdrive",PRICING:"plans",TRIAL_PAGE:"/corp/registration/register_trial_2.html",TRIAL_3_PAGE:"/corp/registration/register_trial_3.html",BUY_PAGE:"/corp/registration/register_buy.html"},REDIRECT_TO_DC_GENERIC_LOGIN:!1,LOGIN_PATH:"login",AUTH_SERVICE_URL:"https://avl-egnyte-auth-service.egnyte.com",VALIDATE_DOMAIN_PATH:"rest/public/1.0/domain/name",IDENTITY_LOGIN_PATH:"identityLogin.do",DOMAIN_LOGIN_PATH:"loginDomain.do",SUBDOMAIN_LOGIN_PATH:"subDomainLogin.do",FORGOT_PASS_PATH:"identityForgotPassword.do",SAML_PATH:"samlrequest",SAML_CHECK_QUERY:"action=is_saml_enabled",SAML_DEFAULT_DOMAIN:"saml-auth",SKILLJAR_LOGIN_PATH:"skilljarLogin.do",HELPDESK_COOKIE:"helpdeskReturnTo",RECENT_WG_COOKIE:"recentWg",HELPDESK_AUTH_SSO_PATH:"/helpdesk-sso/auth.do",GOOGLE_RECAPTCHA_SITEKEY:"6Ld5yREUAAAAAB1eDA4Rq5C7zgaPBcTN9Aj9W8-d",GOOGLE_RECAPTCHA_RESET_TIME_MS:5e3,DEFAULT_PROTOCOL:"https://",PLANS:{OFFICE:"office",BUSINESS:"business",ENTERPRISE:"enterprise",TEAM:"team",PLATFORM_TEAM:"platform team",PLATFORM_BUSINESS:"platform business",PLATFORM_ENTERPRISE_LITE:"platform enterprise lite",PLATFORM_ENTERPRISE:"platform enterprise"},DEFAULT_PLAN:"platform business",PVIS:{team:"ee30179f-07b6-4a8f-a519-da672ccdd08f",office:n,business:n,"platform team":a,"platform business":a,"life sciences standard":r,"life sciences professional":r},REG_PAGES:{FREE_TRIAL:"corp/registration/register_trial_2.html",DIRECT_BUY:"corp/registration/register_buy.html",GDRIVE:"corp/registration/register_trial_gdrive.html"},LOGIN_PAGE:"login",REG_TYPES:{FREE_TRIAL:"free-trial",DIRECT_BUY:"direct-buy",GDRIVE:"gdrive",PRICING:"pricing"},PLAN_LINK_SELECTORS:{FREE_TRIAL:".free-trial",DIRECT_BUY:".direct-buy"},PLAN_LINKS_PREFIX:"plan-",PLAN_LINKS_SPACE_ALTERNATE:"+",COOKIE_SET_DOMAIN:!0,VISITOR_COOKIE_NAME:"EGNYTE-MARKETING-COOKIE",MARKETING_COOKIE_NAME:"EgnyteMarketingData",MARKETING_COOKIE_AGE_MINUTES:262800,MARKETING_SEND_DATA_ON_URL:!0,MARKETING_QUERYSTRING_KEYS:{campaign:"utm_campaign",source:"utm_source",term:"utm_term",medium:"utm_medium",content:"utm_content",network:"network",siteTarget:"site_target",ad:"ad"},SFDC_PVI:"1ab826d2-6a31-4f6c-b10d-36009790e08d",SFDC_QUERY_PARAMS:"utm_source=Salesforce",SEARCH_ENGINE_REGEX:/google|bing|yahoo|duckduckgo|ask|aol/gi,EMEA_REGION:\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x5d))*$").test(e)},getQueryString:function(e){return e?e.split("?")[1]:window.location.search.substring(1)},getQueryStringValues:function(e){var t={},i=this.getQueryString(e);i&&i.split("&").forEach((function(e){var i=e.split("=");i.length&&(t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]))}));return t},getCookie:function(e,t){var i=new RegExp(e+"=[^;]+","i");if(document.cookie.match(i)){var n=document.cookie.match(i)[0].split("=")[1];if(n)return t?window.atob(n):n}return null},setCookie:function(e,t,i,n){var a=60*parseInt(i,10);if(e&&t){var r=[e+"="+(n?window.btoa(t):t),"Path=/","Secure","SameSite=Strict"];o.COOKIE_SET_DOMAIN&&r.push("Domain=."+o.DEFAUL;")}},deleteCookie:function(e){e&&(document.cookie=e+"=;Path=/;Max-Age=-1")},generateRandomId:function(){var e=winn(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})).split("-");return[t[0],t[4]].join(".")+"f"},getHostnameFromUrl:function(e){if(e){var t=e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);return t?t[1]:""}return""}},c=window.jQuery,E=s.getQueryString(),_=s.getQueryStringValues(),u={$regionEle:c(".regional-contact-number")},g={geoDc:null,tempMissingPlanParam:null,init:function(){return this.checkRegTarget()||(this.populateGeoDc(this.regionalContactNumber),this.bindRegButtons()),this},bindRegButtons:function(){var e=this,t=[o.PLAN_LINK_SELECTORS.FREE_TRIAL,o.PLAN_LINK_SELECTORS.DIRECT_BUY].join(",");c(t).each((function(t,i){var n="LI"===(i=c(i)).prop("tagName")?i.find("a"):i;n.length&&n.on("click",(function(t){t.preventDefault(),t.stopPropagation();var a=e.getRegDetailsOnElement(i)||e.getRegDetailsOnElement(n);e.navigateToRegPage(a.planName,a.regType)}))}))},checkRegTarget:function(){for(var e=null,t=0;t<o.TARGET_REG_PARAMS.length;t++)if(_[o.TARGET_REG_PARAMS[t]]){e=_[o.TARGET_REG_PARAMS[t]];break}if(!e)return!1;switch(e.indexOf(o.REG_TARGETS.TRIAL_PAGE)>=0&&(this.tempExtractPlanParam(e),e=o.REG_TARGETS.TRIAL_PAGE),e.indexOf(o.REG_TARGETS.TRIAL_3_PAGE)>=0&&(this.tempExtractPlanParam(e),e=o.REG_TARGETS.TRIAL_3_PAGE),e.indexOf(o.REG_TARGETS.BUY_PAGE)>=0&&(this.tempExtractPlanParam(e),e=o.REG_TARGETS.BUY_PAGE),e){case o.REG_TARGETS.PRICING:return this.navigateLocalPage(o.REG_TYPES.PRICING);case o.REG_TARGETS.TRIAL:case o.REG_TARGETS.TRIAL_PAGE:case o.REG_TARGETS.TRIAL_3_PAGE:return this.navigateToRegPage(null,o.REG_TYPES.FREE_TRIAL,!0),!0;case o.REG_TARGETS.BUY:case o.REG_TARGETS.BUY_PAGE:return this.navigateToRegPage(null,o.REG_TYPES.DIRECT_BUY,!0),!0;case o.REG_TARGETS.GDRIVE:return this.navigateToRegPage(null,o.REG_TYPES.GDRIVE,!0),!0}},tempExtractPlanParam:function(e){if(e){var t=e.split("?");this.tempMissingPlanParam=t[1]}},getRegDetailsOnElement:function(e){for(var t=e.prop("class").split(" "),i=o.DEFAULT_PLAN,n=t.indexOf(o.REG_TYPES.DIRECT_BUY)>=0?o.REG_TYPES.DIRECT_BUY:o.REG_TYPES.FREE_TRIAL,a=0;a<t.length;a++)if(0===t[a].indexOf(o.PLAN_LINKS_PREFIX)){i=t[a].substring(o.PLAN_LINKS_PREFIX.length).split(o.PLAN_LINKS_SPACE_ALTERNATE).join(" ");break}return{regType:n,planName:i}},getGeoDc:function(e){var t=this,i=o.GEO_LOCATION_API_URL;return c.get(i,(function(i){t.geoDc=i+"."+o.DEFAULT_HOST,s.setCookie(o.GEO_DC_COOKIE_NAME,t.geoDc),e&&e(t.geoDc)}))},populateGeoDc:function(e){var t=s.getCookie(o.GEO_DC_COOKIE_NAME);t?(this.geoDc=t,e&&e(this.geoDc)):this.getGeoDc(e)},regionalContactNumber:function(e){c(u.$regionEle).length&&e.startsWith(o.EMEA_REGION)&&u.$regionEle.attr("href","tel:".concat(o.EMEA_REGIONAL_CONTACT_NUMBER)).text(o.EMEA_REGIONAL_CONTACT_NUMBER)},navigateLocalPage:function(e){var t=null,i=window.location.pathname;switch(e){case o.REG_TYPES.PRICING:i!==o.PRICING_PAGE_PATH&&(t=o.PRICING_PAGE_PATH)}if(t)return t+=E?"?"+E:"",window.location.href=t,!0},navigateToRegPage:function(e,t,i){var n=this;ooadRegPage(n.geoDc,e,t,i):this.getGeoDc((function(a){n.loadRegPage(a,e,t,i)})):this.loadRegPage(o.DEFAULT_DC,e,t,i)},loadRegPage:function(e,t,i,n){var a=i||o.REG_TYPES.FREE_TRIAL,r=o.REG_PAGES.FREE_TRIAL;switch(a){case o.REG_TYPES.FREE_TRIAL:r=o.REG_PAGES.FREE_TRIAL;break;case o.REG_TYPES.DIRECT_BUY:r=o.REG_PAGES.DIRECT_BUY;break;case o.REG_TYPES.GDRIVE:r=o.REG_PAGES.GDRIVE;break;default:r=o.REG_PAGES.FREE_TRIAL}var s=[e,r],E="";c("#utm_content").length>0&&(E=c("#utm_content").val());var _=[this.getPageQuerystring(t,n),"geo_redirect=true"];E&&_.push("utm_content=".concat(E));var u=o.DEFAULT_PROTOCOL+[s.join("/"),_.join("&")].join("?");console.log("url",u),n?window.location.href=u:window.open(u)},getPageQuerystring:function(e,t){if(t&&E)return E+(this.tempMissingPlanParam?"&"+this.tempMissingPlanParam:"")+this.getAdditionalQuerystringForSFDC();var i=o.PVIS[e]?"pvi="+o.PVIS[e]:"",n=[];return n.push("plan="+encodeURIComponent(e)),i&&n.push(i),E&&n.push(E),o.MARKETING_SEND_DATA_ON_URL&&this.areDomainsDifferent()&&window.EgnyteMarketingTracker&&n.push("marketingData="+encodeURIComponent(c.param(window.EgnyteMarketingTracker.marketingData))),n.join("&")},areDomainsDifferent:function(){return window.location.hostname.indexOf(o.DEFAULT_HOST)<0},getAdditionalQuerystringForSFDC:function(){if(_){var e=_.pvi;if(e&&e===o.SFDC_PVI)return"&"+o.SFDC_QUERY_PARAMS}return""}},l={USERNAME_EMAIL_EMPTY:"Username or Email cannot be empty",PASSWORD_EMPTY:"Password cannot be empty",DOMAIN_EMPTY:"Domain cannot be empty",EMAIL_EMPTY:"Email cannot be empty",EMAIL_VALIDATION:"Invalid Email",DOMAIN_INVALID:"Invalid Domain",CAPTCHA_EMPTY:"Please verify that you are not a robot",SAML_NOT_AVAILABLE:"Invalid domain name or Single Sign-on is not enabled",SERVER_ERRORS:{101:"Invalid email or password please try again",103:"Domain cannot be empty"}},d=window.jQuery,A={GENERIC_LOGIN_CONTAINER:{key:"login",$el:d("#genericLoginContainer")},NOTIFICATION:{key:"notification",$el:d("#errorMessageContainer")},BASIC:{key:"basic",$el:d("#loginContainer")},SSO:{key:"sso",keyOld:"ssoContainer",$el:d("#ssoContainer")},FORGOT_PASS:{key:"forgotpass",$el:d("#forgotPassContainer")}},h={BASIC:d("#frmLogin"),SSO:d("#frmSSO"),FORGOT_PASS:d("#frmForgotPass")},R={$usernameEmail:d("#txtUserNameEmail",h.BASIC),$password:d("#txtPassword",h.BASIC),$fieldDomainBasic:d("#fieldDomainBasic",h.BASIC),$domainBasic:d("#txtDomainBasic",h.BASIC),$domainSSO:d("#txtDomainSSO",h.SSO),$forgotPassEmail:d("#txtForgotPassEmail",h.FORGOT_PASS),$captchaBasic:d("#captchaBasic",h.BASIC),$captchaSSO:d("#captchaSSO",h.SSO),$viewNavLinks:d(".egLoginNav",A.GENERIC_LOGIN_CONTAINER.$el)},T="email",I="domain",S="sso",m=s.getQueryString(),f=s.getQueryStringValues(),O="true"===f.zduser,p=f.return_to||s.getCookie(o.HELPDESK_COOKIE),C=window.location.pathname.substring(1)===o.LOGIN_PATH,P={loginType:T,currentView:A.BASIC,init:function(){if(C){if(this.cleanStaleWindow(),this.checkDcRedirection())return this;if(this.checkSkilljarLogin())return this;this.bindEvents(),this.loadView(),this.loadServerErrorState()}return this},bindEvents:function(){d(window).on("hashchange",this.loadView.bind(this)),R.$usernameEmail.on("change",this.setLoginType.bind(this)),h.BASIC.on("submit",this.handleBasicLoginFormSubmit.bind(this)),h.SSO.on("submit",this.handleSsoLoginFormSubmit.bind(this)),h.FORGOT_PASS.on("submit",this.handleForgotPassFormSubmit.bind(this)),R.$viewNavLinks.on("click",this.clearNotification.bind(this))},_getInputValue:function(e){var t=d.trim(e.val());return t=this._parseDomainName(e,t)},_parseDomainName:function(e,t){var i=e.attr("id");return i===R.$domainBasic.attr("id")||i===R.$domainSSO.attr("id")?t.split(".")[0]:t},cleanStaleWindow:function(){if(window.name)try{window.name=""}catch(e){}},checkSkilljarLogin:function(){if(f.redirectUrl==="/"+o.SKILLJAR_LOGIN_PATH){var e=s.getCookie(o.RECENT_WG_COOKIE);if(e){var t=o.DEFAULT_PROTOCOL+[e+"."+o.DEFAULT_HOST,o.SUBDOMAIN_LOGIN_PATH].join("/"),i=this.getQuerystringWithCorrection();return t=[t],i&&t.push(i),t=t.join("?"),window.location.href=t,!0}}},checkDcRedirection:function(){if(o.REDIRECT_TO_DC_GENERIC_LOGIN){var e=o.DEFAULT_PROTOCOL+[o.DEFAULT_DC,o.LOGIN_PATH].join("/");return m&&(e=[e,m].join("?")),window.location.href=e,!0}},loadView:function(){switch(window.location.hash&&window.location.hash.substring(1).toLowerCase()){case A.BASIC.key:this.showView(A.BASIC),N.setActiveWidget(N.widgets.BASIC);break;case A.SSO.key:case A.SSO.keyOld:this.showView(A.SSO),N.setActiveWidget(N.widgets.SSO);break;case A.FORGOT_PASS.key:this.showView(A.FORGOT_PASS);break;default:this.showView(A.BASIC)}},loadServerErrorState:function(){if(f){var e=l.SERVER_ERRORS[f.errorCode];e&&this.showNotification(e)}},showNotification:function(e,t){A.NOTIFICATION.$el.text(e).show(),t&&t.addClass("egFormError")},clearNotification:function(){A.NOTIFICATION.$el.text("").hide(),d(".egFormError",A.GENERIC_LOGIN_CONTAINER.$el).removeClass("egFormError")},showView:function(e){if(e&&e.$el.length){d("section",A.GENERIC_LOGIN_CONTAINER.$el).hide(),e.$el.show(),this.setLoginType();var t="#"+e.key;window.location.hash!==t&&(window.location.hash=t)}},setLoginType:function(){switch(this.currentView){case A.SSO:this.loginType=S;break;case A.BASIC:var e=this._getInputValue(R.$usernameEmail);this.loginType=e&&!s.validateEmail(e)?I:T;break;default:this.loginType=T}switch(this.loginType){case T:R.$domainBasic.val(""),R.$fieldDomainBasic.show();break;case I:R.$fieldDomainBasic.show()}},validateDomain:function(e,t){var i=o.DEFAULT_PROTOCOL+[o.DEFAULT_DC,o.VALIDATE_DOMAIN_PATH,e].join("/");d.ajax({url:i}).always((function(e,i,n){var a=e?e.status:n.status;t({domainExists:204===a})}))},validateActiveCaptcha:function(e){var t=N.validateCaptcha();return!t&&this.showNotification(l.CAPTCHA_EMPTY,e),t},validateBasicLoginForm:function(){this.clearNotification();var e=this._getInputValue(R.$password),t=this._getInputValue(R.$usernameEmail);if(!t)return this.showNotification(l.USERNAME_EMAIL_EMPTY,R.$usernameEmail),!1;if(!e)return this.showNotification(l.PASSWORD_EMPTY,R.$password),!1;switch(this.loginType){case T:if(!s.validateEmail(t))return this.showNotification(l.EMAIL_VALIDATION,R.$usernameEmail),!1;break;case I:if(!this._getInputValue(R.$domainBasic))return this.showNotification(l.DOMAIN_EMPTY,R.$domainBasic),!1}return!!this.validateActiveCaptcha(R.$captchaBasic)},validateSsoLoginForm:function(){return this.clearNotification(),this._getInputValue(R.$domainSSO)?!!this.validateActiveCaptcha(R.$captchaSSO):(this.showNotification(l.DOMAIN_EMPTY,R.$domainSSO),!1)},validateForgotPassForm:function(){this.clearNotification();var e=this._getInputValue(R.$forgotPassEmail);return e?!!s.validateEmail(e)||(this.showNotification(l.EMAIL_VALIDATION,R.$forgotPassEmail),!1):(this.showNotification(l.EMAIL_EMPTY,R.$forgotPassEmail),!1)},handleBasicLoginFormSubmit:function(e){return e.preventDefault(),this.validateAndSubmitBasicLoginForm(),!1},handleSsoLoginFormSubmit:function(e){return e.preventDtion(e){return e.preventDefault(),this.validateAndSubmitForgotPassForm(),!1},getDomainBaseUrl:function(e){return[o.DEFAULT_PROTOCOL,[e,o.DEFAULT_HOST].join(".")].join("")},submitForm:function(e,t){e.attr("action",t),e.off("submit"),e.submit()},validateAndSubmitBasicLoginForm:function(){var e=this;if(this.validateBasicLoginForm())switch(this.loginType){case T:var t=[o.AUTH_SERVICE_URL,o.IDENTITY_LOGIN_PATH].join("/");t=[t,this.getZDUrlParams()].join("?"),this.submitForm(h.BASIC,t);break;case I:var i=this._getInputValue(R.$domainBasic);this.validateDomain(i,(function(t){if(t.domainExists){var n=[e.getDomainBaseUrl(i),o.DOMAIN_LOGIN_PATH].join("/");n=[n,["gl=1",e.getZDUrlParams()].join("&")].join("?"),e.submitForm(h.BASIC,n)}else e.showNotification(l.DOMAIN_INVALID,R.$domainBasic)}))}},validateAndSubmitSsoLoginForm:function(){var e=this;if(this.validateSsoLoginForm()){var t=this._getInputValue(R.$domainSSO);this.validateDomain(t,(function(i){if(!i.domainExists)return N.resetRecaptcha(),void e.showNotification(l.DOMAIN_INVALID,R.$domainSSO);var n=[e.getDomainBaseUrl(t),o.SAML_PATH,"?"+o.SAML_CHECK_QUERY].join("/");d.ajax({url:n,dataType:"jsonp",headers:{"X-Egnyte-ReCaptcha-Value":N.getCaptchaAnswer()}}).done((function(t){e.openSamlAuthPage(t)}))}))}},validateAndSubmitForgotPassForm:function(){if(this.validateForgotPassForm()){var e=[o.AUTH_SERVICE_URL,o.FORGOT_PASS_PATH].join("/");this.submitForm(h.FORGOT_PASS,e)}},openSamlAuthPage:function(e){if("true"==e.ssoEnabled){var t=this._getInputValue(R.$domainSSO),i=e.isDomainSpecificUrl?t:o.SAML_DEFAULT_DOMAIN,n=[this.getDomainBaseUrl(i),o.SAML_PATH,e.idpName].join("/"),a=["domainName="+t],r=this.getQuerystringWithCorrection();r&&a.push(r);var s="helpdeskSSO=true";O&&r.indexOf(s)<0&&a.push(s),s="redirectUrl="+o.HELPDESK_AUTH_SSO_PATH,p&&r.indexOf(s)<0&&(a.push(s),s="return_to="+p,r.indexOf(s)<0&&a.push(s)),n=[n,a.join("&")].join("?"),window.location.href=n}else N.resetRecaptcha(),this.showNotification(l.SAML_NOT_AVAILABLE,R.$domainSSO)},getQuerystringWithCorrection:function(){var e=m;if((f&&f.redirectUrl)==="/"+o.SKILLJAR_LOGIN_PATH&&f.next){var t=f.next,i="next="+encodeURIComponent(t),n=encodeURIComponent(o.SKILLJAR_LOGIN_PATH+"?"+i);e=e.replace(i,"").replace(o.SKILLJAR_LOGIN_PATH,n)}var a=new RegExp("&?errorCode=[0-9]+","g");return e=e.replace(a,"")},getZDUrlParams:function(){var e=this.getQuerystringWithCorrection(),t=[];e&&t.push(e);var i="helpdeskSSO=true";return O&&e.indexOf(i)<0&&(t.push(i),p&&(i="return_to="+p,e.indexOf(i)<0&&t.push(i))),t.join("&")}},N={widgets:{BASIC:{widgetId:null,container:R.$captchaBasic},SSO:{widgetId:null,container:R.$capt",activeWidget:null,getActiveWidget:function(){return this.activeWidget||{}},setActiveWidget:function(e){-1!==[this.widgets.BASIC,this.widgets.SSO].indexOf(e)&&(this.activeWidget=e,this.loadRecaptcha(e),this.showDefaultState())},getCaptchaAnswer:function(){var e=this.getActiveWidget();return window.grecaptcha&&e&&parseInt(e.widgetId,10)>=0?grecaptcha.getResponse(e.widgetId):null},validateCaptcha:function(){var e=!0,t=this.getCaptchaAnswer();return null!=t&&(this.showDefaultState(),!(e=!!t)&&this.showErrorState()),e},showErrorState:function(){d(this.getActiveWidget().container).addClass(this.containerErrorClass)},showDefaultState:function(){var e=this.getActiveWidget();d(e.container).removeClass(this.containerErrorClass)},onGoogleReCaptchaLoadCallback:function(){switch(window.location.hash&&window.location.hash.substring(1).toLowerCase()){case A.BASIC.key:this.setActiveWidget(this.widgets.BASIC);break;case A.SSO.key:case A.SSO.keyOld:this.setActiveWidget(this.widgets.SSO);break;default:this.setActiveWidget(this.widgets.BASIC)}},loadRecaptcha:function(e){parseInt(e.widgetId,10)>=0&&window.grecaptcha?window.grecaptcha.reset(e.widgetId):o.GOOGLE_RECAPTCHA_SITEKEY&&this.renderReCaptcha(e)},resetRecaptcha:function(){window.grecaptcha&&(window.grecaptcha.reset(this.getActiveWidget().widgetId),this.showDefaultState())},renderReCaptcha:function(e){if(o.GOOGLE_RECAPTCHA_SITEKEY&&window.grecaptcha&&window.grecaptcha.render){var t=d(e.container);t.empty(),e.widgetId=window.grecaptcha.render(t.attr("id"),{sitekey:o.GOOGLE_RECAPTCHA_SITEKEY,callback:this.showDefaultState.bind(this)}),setTimeout((function(){try{window.grecaptcha.getResponse(e.widgetId)&&window.grecaptcha.reset(e.widgetId)}catch(e){}}),o.GOOGLE_RECAPTCHA_RESET_TIME_MS)}}},L={visitorId:null,marketingData:null,init:function(){return window.EgnyteMarketingTracker?window.EgnyteMarketingTracker:(this.QUERY_STRING=s.getQueryString(),this.QUERY_STRING_OBJ=s.getQueryStringValues(),this.REGEX_UTM_SEARCH=new RegExp("(?:&|^)utm"),this.UTM_MEDIUM_DIRECT="direct",this.UTM_MEDIUM_SEO="seo",this.UTM_MEDIUM_REF="referral",this.visitorId=this.getSetVisitorId(),this.marketingData=this.getSetMarketingData(),this)},getSetMarketingData:function(){var e=null,t=s.getCookie(o.MARKETING_COOKIE_NAME,!0);if(t)try{e=JSON.parse(t)}catch(e){}var i=e&&e.visitNumber+1||1,n=this.prepareMarketingData(i);return n.isPaidCampaign?(this.saveMarketingDataCookie(n),n):e&&e.isPaidCampaign||e&&e.medium!==this.UTM_MEDIUM_DIRECT&&n.medium===this.UTM_MEDIUM_DIRECT?e:(this.saveMarketingDataCookie(n),n)},saveMarketingDataCookie:function(e){s.setCookie(o.MARKETING_COOKIE_NAME,JSON.stringify(e),o.MARKETING_COOKIE_AGE_MINUTES,!0)},prepareMarketingData:function(e){var t={visitorId:this.visitorId,visitNumber:e,url:window.location.href,referrer:window.document.referrer,isPaidCampaign:!1};if(this.QUERY_STRING_OBJ)for(var i in o.MARKETING_QUERYSTRING_KEYS){var n=o.MARKETING_QUERYSTRING_KEYS[i],a=this.QUERY_STRING_OBJ[n]||this.QUERY_STRING_OBJ[n.replace(/_/g,"")],r=a&&a.trim();t[i]=r||null}if(t.isPaidCampaign=!!(t.source||t.medium||t.campaign),t.referrer&&!t.source){var c=s.getHostnameFromUrl(t.referrer);c&&(t.source=c)}var E=this.QUERY_STRING&&this.QUERY_STRING.match(this.REGEX_UTM_SEARCH);return!t.referrer||E||t.target||(t.target=t.referrer),t.medium||(t.referrer?this.isReferrerSearchEngine(t.referrer)?t.medium=this.UTM_MEDIUM_SEO:this.isReferrerNonEgnyte(t.referrer)?t.medium=this.UTM_MEDIUM_REF:t.medium=this.UTM_MEDIUM_DIRECT:t.medium=this.UTM_MEDIUM_DIRECT),t},getSetVisitorId:function(){var e=s.getCookie(o.VISITOR_COOKIE_NAME);return e||(e=s.generateRandomId(),s.setCookie(o.VISITOR_COOKIE_NAME,e,o.MARKETING_COOKIE_AGE_MINUTES)),e},isReferrerSearchEngine:function(e){returerrerNonEomUrl(e).match(/egnyte/gi)}},w={init:function(){this.bindMarketoFormReady()},bindMarketoFormReady:function(){window.MktoForms2&&window.EgnyteMarketingTracker&&window.MktoForms2.whenReady((function(e){var t=window.EgnyteMarketingTracker.marketingData;e&&e.vals({UTM_Campaign__c:t.campaign||"NULL",UTM_Source__c:t.source||"NULL",UTM_Medium__c:t.medium||"NULL",UTM_Term__c:t.term||"NULL",UTM_Content__c:t.content||"NULL"})}))}};jQuery((function(e){window.EgnyteMarketingTracker=L.init(),window.EgnyteRegistrationManager=g.init(),window.onGoogleReCaptchaLoadCallback=N.onGoogleReCaptchaLoadCallback.bind(N),window.EgnyteGenericLoginManager=P.init(),window.EgnyteMarketoHelper=w.init(),console.log("Initialized Internal Apps.")}))}]);
/* Source and licensing information for the above line(s) can be found at https://www.egnyte.com/themes/custom/egnyte/js/internalAppsManager.js. */;
/* Source and licensing information for the line(s) below can="undefined"!=typeof globalThis?globa)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}
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
  ***al IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */}const isCEPolyfill="undefined"!=typeof window&&null!=window.customEldes=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},marker=`{{lit-${String(Math.random()).slice(2)}}}`,nodeMarker=`\x3c!--${marker}--\x3e`,ma+}}else s.curronst endsWith=(t,e)=>h-e.length;remplatePartActive=t=>-1!==t.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,walkerNodeFilter=133;function removeNodesFromTemplate(t,e){const{element:{content:r},parts:i}=t,s=document.createTreeWalker(r,walkerNodeFilter,null,!1);let n=nextActiveIndexInTemplateParts(i),a=i[n],o=-1,h=0;const l=[];let p=null;for(;s.nextNode();){o++;const t=s.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(l.push(t),null===p&&(p=t)),null!==p&&h++;void 0!==a&&a.index===o;)a.index=iveIndexInTemplatereateTreeWalker(t,walkerNodeFil1;r<t.length;r++){const e=t[r];if(isTemplatePartActive(e))return r}return-1};function insertNodeIntoTemplate(t,e,r=null){const{element:{content:i},parts:s}=t;if(null==r)return void i.appendChild(e);const n=document.createTreeWalker(i,walkerNodeFilter,null,!1);let a=nextActiveIndexInTemplateParts(s),o=0,h=-1;for(;n.nextNode();){h++;for(n.currentNode===r&&(o=countNodes(e),r.parentNode.insertBefore(e,r));-1!==a&&s[a].index===h;){if(o>0){for(;-1!==a;)s[a].index+=o,a=nextActiveIndexInTemplateParts(s,a);return}a=nextActiveIndexInTemplateParts(s,a)}}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http:/irectives=new WeakMap,isDirective=t=>"function"==typeof t&&directives.has(t),noChange={},nothing={};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additio+;return isCEPolyfill&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.githu t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights gra*/const isPhis.name]=this._getValueEveis.value.call(thptionsSupported?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additiotTemplateElement()),e.keyString.set(i,r)),e.stringsArlateFactory:templateFactory},r))),i.appendInto(e)),i.setValue(t),i.commit()};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additioibuteCommitter(t,e,r).parts}handleTextExpression(t){return new NodePart(t)}}const defaultTemplateProcessor=new DefaultTemplateProcessor;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */"undefined"!=typeof window&&(wconst html=(t,...e)=>new TemplateResult(t,e,"html",defaultTemplateProcessor)
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant /polymer.github.io/PATENTS.txt
   */,getTemplateCacheKey=(t,e)=>`${t}--${e}`;let compatibleShadyCSSVersion=!0;void 0===window.ShadyCSS?compatibleShadyCSSVersion=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponentTemplate(e,r),i.keyString.set(n,s)}return i.stringsArray.selectorAll("style")).forEach(t=>{r.add(t)}),removeNodesFromTemplate(t,r)})})},shadyRenderSet=new Set,prepareTemplateStyles=(t,e,r)=>{shadyRenderSet.add(t);const i=r?r.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let t=0;t<n;t++){const e=s[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}removeStylesFromLitTemplates(t);const o=i.content;r?insertNodeIntoTemplate(r,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const h=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(r){o.insertBefore(a,o.e.appendChild(o),parts.set(e,t)}!s&&n&&window.ShadyCSS.styleElement(e.host)};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http:/github.io/PATENTS.txt
   */
var _a;?"":null;caseull===t?nuse Array:return JSON.parse(t)}return t}},notEqual=(t,e)=>e!==t&&(e==e||t==t),defaultPropertyDeclaration={attribute:!0,type:String,converter:defaultConverter,reflect:!1,hasChanged:notEqual},STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=4,STATE_IS_REFLECTING_TO_ATTRIBUTE=8,STATE_IS_REFLECTING_TOe();return null!=t&&await t,!this._hasRequestedUpdaPDATE_REQUESTED}get hasUpdated(){return this._updateState&STATE_HAS_UPDATED}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(this._updateState&STATE_HAS_UPDATED||(this._updateStatATE_UPDATE_REQUESTED}get updateComplete(){retuibute(e,thflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}_a=finalized,UpdatingElement[_a]=!0;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found    */
const legacyCust=e;return{kind>e=>"function"==tis[e.key]=e.ini,configurable:!0tandardQuery(idQuery=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */,supportsAdoptingStyleSheets="adoptedStyleSheets"in Documet)):this._styleSheet=nus notextFromCSSResult(r)+t[i+1],t[0]);return new CSSResult(r,constructionToken)};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
(window.litElementVersions|ext,this.renderRoot.appendChild(e)}))}render(){return renderNotImplemented}}LitElement.finalized=!0,LitElement.render=render$1;var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof wind"Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var lott,e){module.exports?module.exports=e(t):(t.lottie=e(t),t.bodymovin=t.lottie)}(window||{},(function(window){var svgNS="http://www.w3.org/2000/svg",locationHref="",initialDefaultFrame=-999999,subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),bm_"PI","SQRT1_2","SQRT2"],r=e.length;for(i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function BMEnterFrameEvent(t,e,SegmentStartEvent(t,e,r){this.type=t,this.firstFrame}function BMConfigErrorEventar creatn r[0]+=function(t,e,i){return t<0&&(t=0),e<0&&(e=0),i<0&&(i=0),"#f(this._cbs[t])fo),this._cbs[t].push(i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var createType,{length:t})}function createNS(t){return document.createElementNS(svgNS,t)}function createTag(t){return document.createElement(t)}function Dynamierties.push(t),this.contaamicProperties[t].getValue(),this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var getBlendMode=(blendModeEnums={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difation",14:"color",15:"lentityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();
/*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstrandom=t,r):t})(y,u,"global"is)t,e)}function createunctiddedLength=c,u};function r(t){this.segmentLength=0,this.points==):n+=h,n<0||n>=s-1){if(n===s-1)return r[n];l=!1}return r[n]+n s&&h&&(l[r]=]))/1e3,o[4*l+3]=M*h*t[1]+(o*h*h+h*o*h+h*h*o)*r[1]+(o*o*h+h*o*o+o*atlAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction();function dataFunctionManager(){function t(s,n,a){var o,h,l,c,f,d,u=s.length;for(h=0;h<u;h+=1)if("ks"in(o=s[h])&&!o.completed){if(o.completed=!0,o.tt&&(s[h-1].td=o.tt),o.hasMask){var m=o.masksProperties;for(c=m.length,l=0;l<c;l+=1)if(m[l].pt.k.i)i(m[l].pt.k);else for(d=m[l].pt.k.length,f=0;f<d;f+=1)m[l].pt.k[f].s&&i(m[l].pt.k[f].s[0]),m[l].pt.k[f].e&&i(m[l].pt.k[f].e[0])}0===o.r[0].assets.length;fth,.ass.aers)}}}();function r){e.__complete||(h(e),a(e),o(e),l(e),t(e.layers,e.assets),e.__complete=!0)}};return c.checkColors=h,c.checkChars=o,c.checkShaout(this.setIsLoadnew h(t,e,i,s);return n.effDy=createSizedArray(this._maxLeng(),this.o[r]=point_pool.newElefunction(t){for(;this._maxLength<t;)th,this.o=this.o.concat(createhis.o}(!n[i]||n[i]&&!s)&&(n[i]=pis.setXYAt(t,e,"v",a,o),thisripleAt(e[a][0],e[a][1],i(){return n},getKeyframedConstructorFunction:function(){rdifiers={},ob.rodifiers[t]=e)},ob.getModifier=function(t,e,r){return new modifiers[t](e,r)},ob),ob,modifiers;function ShapeModifier(){}function TrimModifier(){}function RoundCornertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifiepes.push(e),this.addShapeToMoosed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototypece.length||!!this.e.effectsSequence.lengthength},TrimModifier.prototype.addShapeToModr,c=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([p,cgth;for(e=0;e<r;e+=1)segments_length_ddPaths(S,m),S=this.addShapes(u,e.addPaths=function(t,e){var r,i=t0],r[1],"i",n+1),a&&s.setXYAt(t[0],t[1],"v"2],t[6],"i",r+1),i&&e.setXYAt(t[0,u>e.e)break;i<d-1&&(r=shape_pool.newElement(),y=!0,m.push(r),o=0)}return m},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=v[i][0],t.v[i][1],t.o[i][0],t.o[i][1],t.i[i][0],t.i[i][1],g),g+=1);return r},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,n,a,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if((n=this.shapes[r]).shape.paths,a=n.localShapeCollection,n.shape._mdf||this._mdf||t)for(a.releaseShapes(),n.shape._mdf=!0,e=n.shape.paths.shapes,s=n.shape.paths._length,i=0;i<s;i+=1)a.addShape(this.processPath(e[i],h));n.shape.paths=n.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),extendPrototype([ShapeModifier],Pucop(t,e.a,0,null,this),this._isAnimated=!!this])*-r,c=t.i[n][1]+(i[1]-t.i[n][1])*-r,f.setTrip.paths=n.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),extendPrototype([ShapeMtrix,this.sMatrix=new Matrix,this.tMatrix=n,i.a.v[2]),r.scale(n?1/o:o,n?1/hnts.unshift(e[r]);this.dynamicProperties.e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[t.length;var e=JSON.parse(JSON.stringify(t));0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&th-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,n-=1,i+=s},RepeaterModifier.prototype.addShape=function(){},ShapeModifiermaxLength)),this._maxLength*=2),this.shar(t=0;t<this._length;t+=1)shape_ashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([Dyna.o.length/2;r<i;){if(Math.abs(t[4*r]-t[4*e+2=1}else if(!this.comparePoints(this.4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extend(a[0][0],a[0]["svg"===t?this.crator.userAgent)||,t.setAttributtad.k[0].s),this.searchProperty()||this.completh=!1,this._moreOptions.alignment=i(this._ethis.lettersChangedFlag=D.update(Y,H,q,Zhis._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([]&&this.p[12]===n[12]&&this.p[13]===n[13]||(this.p=n,this._mdf.p=!0,a=!0),a},Data=function(t,e){for(var r in e)e.hatData.boxWidth=this.currentData.boxWidtProperty.prototype.searchProperty=func.length>1,this.kf&&this.addEffectfunction(t){this.effectsSequencev=this.currentData,this.lock=!1,this.fraturn this.keysIndex!==r&&(this.keysInd320&&e<=57343?(i.push(t.substr(s,2)),++slLineHeight||1.2*t.finalSize,t.ls=t.ls||0,this.data.d.k[e].s=r,this.recalcula].s;e.__complete=!1,this.keysIndex=0,esize=t,this.recalculate(this.keysIndex),tr(t)||1,this.recalculrtyContainer],irelease:function}}},pooling={double:function,point_pool=pool_factory(8,(function()",pool.release(t.oeAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[ooling.double(i),r*=2);i[e]=t,e+=1}},e=ntor(e=0;e<r;e+=1)bezier_length_pool.reultCurveSegments),lengths:ckElement)),this.viewData.length&&this.element.addRenderableComponent(this)}function HierarchyElement(){}function FrameElement(){}function TransformElement(){}function RenderableElement(){}function RapeGroupData(){this.it=[],teLayers=!!this.elements[e]&&this.ccreateText(t);case 13:return this.createCamera(t)}return this.createNull(t)},BaseRenderer.prototype.createCamera=function(){throw new Error("You're usingayers.length;for(t=0;t<e;t+=1)this.buor(r=0;r<s;){if(this.layers[r].id==t[e].id)rototype.setProjectInterface=func.initItems=function(){this.globalData.progrest,r):t.setHierarchy(r)):(this.buildItem(n),this.addPendingElement(t))),n+=1},BaseRenderer.prototype.addPendingElement=function(t){.initExpressions(),this.globalData.projameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},extendPrototype([BaseRenderer],SVGRenderer),SVGRenderer.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return npe.createSolid=function(t){return new ild(r),this.layers=t.layers,th.destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRendere.setMatte(e[t-1].layerId):(this.buildItem(tf(this.elements[e]===t){t.setMatte=1)(this.completeLayers||this.elements[e]+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRenderer.prototype.hide=fGRenderer.prototype.show=function(){thkElement.prototype.getMaskProperty.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=fut+=" h-"+this.globalData.compSie.c&&(a=t.inv?this.solidPath+nbalData=null,this.maskElement=null,this.dararchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(tthis.data.parent&&this.comp.buildElame:function(){thie(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)rix},this.data.a2],t[3],t[4],ts+=1)n=e[s].mat.applyToPointArray(0,0,0),t=[t[0]-n[0],t[1]-n[1],nRange=!1,this.hidden=!1===this.renderableCompone)&&this.renderableCompo.indexOf(t),1)},prent=!0,this.hide(1!==this.isInRangr(t=0;t<e;t+=1)thame)},sourceRa.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.hement((thi.layerElemennt(),this.renderInnerContent(),this._isFirstFeFrame(tparency()},destroy:function(){this.innerElem=null,thiseDOMElement),SVGStyleData.prototype.rmdf=!1},SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContr.pElem,e),this.setGradientOpacity(e,r),this._isAni===e.ty?"fill":"stroke","url("+locationHref+"#"+r+")")ionHref+"#"+o+")"),this.of=l,this.ms=n,this.ost=p,this.maskId=h,e.msElem=a}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,D:return o;case"sh":case"elData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGBaseElement(){Node=o,this.feMerge=h,erties[t].mode&&Interface(thiis.data.bm);(is.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullEleme=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElemt.prototype={initRendere-path","url("+is.transformedEleme(){this.layerEltroy()},getBaseElement:functa,this,tement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")}},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;forgth;0<e;)if(thisngth)-1;t>=0;t-=1)this.shapeModifiers[t].processShapes(this._isFirstFrame)}},lcEnum:{1:"butt",2:"rounlements,r=0,i=e.leng(r[i-=1].elem(t){this.prepareRenderableFrame(t),tnt(),this.hide(),this.textAnimator.suildNewText(),this.textProperty._isFirsor(r=0;r<s;r+=1)i=e[r].ks.k,n+=buildShapeS.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){ttype.setMinimumFontSize=function(t){this.textProperlate(t.justifyOffset+(t.boxWidth-t+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElonents(),!this.data.xt&&e.progressivis.renderedFrame-this.layers[r].st),this.e+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElemlayers.length;for(t=0;t<e;t+=1)ototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElemen.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},extendPrta.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOM&&!this.globalData.fontManager.chars&&(this]===String.fromCharCode(3)?(i.push(s),ns.length;)this.textSpans[t].style.displaythis.bbox={top:e.y,left:e.x,width:e.width,he.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.x=new Matrix,SVGShapeElement.prototype.bData,this.prevViewData,this.layerElement,0,[]&(a.push(e),o=e._isAnimated||o);a.length>1&&o&Animated=function(t){var e,r=t.length;for(e=0tBlendMode(t.bm)),this.stylesList.push(i),thiute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mos),i=new SVGTransformData(r,r.o,e);return thihapes.push(s),this.addShapeToModifiers(s),this.ants.push({fn:SVGElementsRenderer.createRendngth;for(e=0;e<i;e+=1)this.stylesList[eth,t=0;t<e;t+=1)this.dynamicProperties[ngth,o=0;o<u;o+=1)m[o].closed=!0;for(u=y.lengd),this.stylesList[t].pElem.setAttribulement._isAnimated)&&!0!==e.data&&nction(){this.destroyBaseElement(),tr[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-alues","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 s[2].p.v?"wrap":"duplicate";this.feGaask"),e.setAttribute("stroke","#fff")}gb("+bm_floor(255*d[0])+","+bm_floor(25G.setAttribute("tableValues",n),this.feFun{var r=createNS(t);return r.setAttribute("t=l?d<0?i:s:i+f*Math.pow((n-t)/d,1/r),p[c+r[33].p.v,r[34].p.v,r[35].p.v),this.feFunc(i);this.feOffset.setAttcationHref+"#"+s+")")),this.filters<r;){if(_svgMatteSymbols[e]===t)return _sv"use");o.setAttribute("href","#"+e),i?r.ins("href","#"+r),i.appendChild(a),e.datata.ind===t&&this.setElementAsMask(thiEffect.prototype.renderFrame=funcvar e,r=this.filters.){var t,r=e.leng.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader};igAnimation.bind(this),function(.getNamedItem("bm-prerender").value:""sionsPlugin&&expressionsPlugin.initExprencludeLayers.bind(this),function(){thData.segments||(this.timeCompleted=thpe.imagesLoaded=function(){this.triggereloader.loadAssets(this.animationData.ameModifier(),this.waitForFontsLoaded()}catcoaded?this.checkLoaded():setTimeout(er("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=functio,AnimationItem.prototype.setSubfrarentFrame=this.timeCompleted),this.this.currentFrame+this.firstFrsed&&(this.isPaused=!1,this._i|!1===this.isPaused&&(this.isPaused==function(t){t&&this.name!=t|(),this.playCount=0,this._completedLmeValue(t):this.setCurrentRawFrameVam.prototype.goToAndPlay=function(t,er&&(this.setCurrentRawFrameValue(e),thame=t[0],this.setCurrentRawFrameValme=t,this.timeCompleted=this.totalFra&&e&&this.adjustSegment(this.segments.ush([this.animationData.ip,this.animaturn!!this.segments.length&&(thisthis.onComplete=this.onSegmentStart=this.onDestroy=null,this.renderer=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(em.prototype.setSpeed=function(t){thitDirection=function(t){this.playDirection=ction(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototyp"/")[1]),e=this.assetsPath+r}else e=this.assets.length;e<r;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototyation=function(t){return t?this."===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onFrame);this.trigata.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}},t}();expressionsPlugin=Expressions;var ExpressionManager=function(){var ob={},Math=BMMath,easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function initiateExpression(elem,data,property){var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loopOut,smooth,toWorld,fromWorld,fromComp,toComp,anchorPoint,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,__expression_functions=[],scoped_bm_rt;if(data.xf){var i,len=data.xf.length;for(i=0;i<len;i+=1)__expression_functions[i]=eval("(function(){ return "+data.xf[i]+"}())")}var expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],num*BMMath.random())*h;return l}return this.pv+n[0]+(-e+2*e*BMMath.random())*h}.bind(this);thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty)),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty)),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.extTotal,selectorValue;function seedRandom(t){BMMath.seedrandom(randSeed+t)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,_needsRandom&&seedRandom(randSeed),this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null),transform||(transform=elem.layerInterface("ADBE Transform Group"))&&(anchorPoint=transform.anchorPoint),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,scoped_bm_rt.propType,scoped_bm_rt)}return executeExpression}return ob.initiateExpression,e.length;s+=1)i+=Mgth),r=0;r<i.le._cachingAtTime),this),this._cachingAtTime.value},getStaticValueAtTime:funpressionHelpers.searchExpressions(t,e.ks,n), i={};return this.copyData(i,t),i.t=r.is.searchKeyframes(),e=this.searchExpresslem,this.data.d,this),t.ix},propertyIndex:{vtory=function(t,e)e){var r={_name:t};return s[e];e+=1}}return n.propeperty.currentData.t=void anagerInterface(t,s)},a.re1/t.globalData.frameRate,e.dit.defineProperty(;e+=1}}return e.compositions=ct.defineProperty(h,"nuunction(t){for(i=0;i<n;){if(e.{t.k&&t.getValue();for(var e=0;e<s;e+=1)n[e]=a[e]=t.v[e]*i;return n}}(s):i}}(),TextExpressionSelectorProp,propertyGetTextProp;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)e),this.effectElementsAtTime.bind(this),this.setGroupProperty=expressionHelpers.setGroupProperty}}(),propertyGetTextPrrn 1===e.t?new TextExpressionSelectorProp(t,e,r):propertyGetTextProp(t,e,r)},extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValak;default:i=new NoValueEffect(n[r],e,this)}i&&this.effecbled=t}function loadAnimation(t){return animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;cait("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocationHref,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.__getFactory=getFactory,lottie.version="5.7.1";var renderer="",scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""},queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer");var readyStateCheckInterval=setInterval(checkReady,100);return lottie}))})),jszip=createCommonjsModule((function(t,e){
/*!

  JSZip v3.5.0 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>

  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

  JSZip uses the library pako released under the MIT ltypeOf(t.charAt(l++))),c[p++]=e,64!==o.pipe(new n("compressedSize")).withStreamInfo("compression",e)},e.exports=o},{"./external":6,"./streaker:function(){return new i("STORE decompressio<a;o++)t=t>>>8^n[2ionOptii=null;i="undw h("Deflate",t)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,e,r){var i=t("../utils"),s=t("..e).CntSourceOffset=0,this.entriesCoudata,meta:{currentFile:thme);this.push({data:r.filtBuffer.length;)ththis.zipComment,this.encodeFilious.streamInfo),this.isPauseprepareNextSource()previous||this._sot))return!1;for(vtype.lock.call(this);for(var t=this._sources,e=0;e<t.length;e++)t[e].lock()},e.exports=c},{"../crc32":4,"..dosPermissions}).pipe(n)})),n.entriesCount=a}cn(t,e){return(new i).loadAsync(t,e)},i.external=t("./external"),e.exports=i},{.createFolders})}return i.zipComment.length&&(r.comment=i.zipComment),r}))}},{"./external":6,"./nodejsUtils":is)&&(this._upstreamEnded?this.end():this._stream.herits(s,i),s.prototype._read=function(){ton"==typeof t.on&&"function"==typeof t.pause&&"function"==typeof t.resume}}},{}],15:[function(t,e,r){var i=t("./utf8"),s=t("./utils"),n=t("./stream/GenericWorker"),a=t("./stream/StreamHelper"),o=t("./defaults"),h=t("./compressedObject"),l=t("./zipObject"),p=t("biri e};function his methis.rootctionoot+t];));var .length)=his method has been rem(t){(e=new n("rateAsync:function(ype||(t.type="nodebuffer"),this.generateInternalStream(t).toNodejsStream(e)}};e.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":21,"./utils":32,"./zipzero+this.index,this.zero+this.index+t)t>>25&127),(t>>21&15)zero+this.index,this.zero+this.index+t);returzero+this.index,this.zero+this.index+t)zero+this.index,this.zero+this.index+t); h(i.transformTo("uint8array",t)):new n(i.transformTo("array",t)):new a(t)}},{"../support":30,"../utils":32,"./ArrayReader":CATOR="Ps.push({data:s.transformTo(this.destType,treamInfo.crc32=s(t.data,this.streamInfo.crc32||0),this.ropName]=e+t.data.length}s.prototype.procesh({data:t,meta:{percent:this.max?this.indker "+this.name;return this.previous?this.previous+" -> "+t:t}},e.exports=i},{}],29:[function(t,e,r){var i=t("../utils"),s=t("./ConvertWorker"),n=t("./GenericWorker"),a=t("../base64"),o=t("../support"),h=t("../external"),l=ns(a)),t.lock()}catch(tthiata,t.m,resumme,[],this._wor method");return new l(this,{objectMode:"nodebuffer"!==this._outputType},t)}},e.exports=c},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"}try{r.nodestream=!!t("readat){this.push({data:r.utf8encode(t.data),meta:t.meta})},r.Utf8EncodeWorker=p},{"./nit in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))}))}},{"./base64":1,".eadEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utf8":31,"./utils":32,"./zipEntry":34}],34:[function(t,e,r){var i=t("./reader/readerFor"),s=t("./utils"),n=t("./compressedObject"),a=t("./crc32"),o=t("./utf8"),h=t("./compressions"),l=t("./support");function p(t,e){this.options=t,this.loadOptiorn 1==(1&this.sedSize,this.uncparseZIP64ExtraFieibutes>>16&65535),thi.diskNumberStart),i=t.readD,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(n)}}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789];if(t){var e=i(t.value);return 1!==e.readInt(1)||a(this.fileName)!==e.readInt(4)?null:o.mment)!==e.readInt(4)?null:o.utf8decode(e.readData(t.length-5))}return null}},e.exports=p},{"./compressedObject":2,"./compressions":3,"./crck the upgrade guide.")},c=0;c<l.length;c++)h.prototype[l[c]]=p;e.exports=h},{"./compressedObject":2,"./stream/DataWorker"sGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(t,e,r){var i=t("imme=t(e),r.status="success"}rn r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}te!==h?c(r,this.state===o?t:e,this.outcome):this.queue.push(new p(r,t,e)),r},p.prototype.callFulfilled=function(t){n.resolve(this.promise,t)},p.prototype.otherCallFulfilFulfilled,t)},p.prototype.callp.prototype;for(var=e;for(var},l.resolnew th+o!==r|i||(i=!0,n.resolve(h,("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=i},{"./lib/deflate":3=e||{}).raw=!0,p(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,p(t,e)}},{"./utils/common":41,"./utils/stlate=f,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,f(t,e)},r.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzhs)):(r.Bngth),r=e-1;r>=0&&128e3:r;do{_FIXED:4var n=i,t.avail_in=h,r.wrap=o,0},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utiull,thisl_in=i<s?s-i+5:5-(i-s),t.avail_out=n<o?o-n+257:257-(n-o),r.hold=d,r.bits=u}},{}],49:[function(t,e,r){var i=t("../utils?(i=new.wnext+=n,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=flateReset2=f,r.inflateRese:0)+(20===r.mtate)return-2;var ear r;return t&&t.state?mode&&s(1,e,i,0)!==r.check?-3:v(t,e,i,i)?(r.mode=31,-4):(r.havedict=1,0):-2},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utilsM&y]=A<<24|T<<16|g-p|0}}retu"-4":"insufficient memory","-5":"buffer error","-6"{var i=t("../utils/common");function s(t){for(var e=t.length;--e>=0;)t[e]=0}var n=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],a=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],h=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],l=new Array(576);s(l);var p=new Array(60);s(p);var c=new Array(512);s(c);,i.array _(t.dyn_dtree,m),t.bl_desc=new _(t.bl__code+1,t.d_ltree[2*(f[r8&&(t.pending_buf[t.pending++this.tot){var t=[].slice.apply(arguments);t.splice(1,0,0),setTimeout.apply(null,t)}},{}]},{},[10])(10)}));function _templateObject(){const t=_taggedTemplateLiteral(["\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:host {\n  --lottie-player-toolbar-height: 35px;\n  --lottie-player-toolbar-background-color: transparent;\n  --lottie-player-toolbar-icon-color: #999;\n  --lottie-player-toolbar-icon-hover-color: #222;\n  --lottie-player-toolbar-icon-active-color: #555;\n  --lottie-player-seeker-track-color: #CCC;\n  --lottie-player-seeker-thumb-color: rgba(0, 107, 120, 0.8);\n\n  display: block;\n}\n\n.main {\n  display: grid;\n  grid-auto-columns: auto;\n  grid-template-rows: auto;\n  height: inherit;\n  width: inherit;\n}\n\n.main.controls {\n  grid-template-rows: 1fr var(--lottie-player-toolbar-height);\n}\n\n.animation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n}\n\n.toolbar {\n  display: grid;\n  grid-template-columns: 32px 32px 1fr 32px;\n  align-items: center;\n  justify-items: center;\n  background-color: var(--lottie-player-toolbar-background-color);\n}\n\n.toolbar button {\n  cursor: pointer;\n  fill: var(--lottie-player-toolbar-icon-color);\n  display: flex;\n  background: none;\n  border: 0;\n  padding: 0;\n  outline: none;\n  height: 100%;\n}\n\n.toolbar button:hover {\n  fill: var(--lottie-player-toolbar-icon-hover-color);\n}\n\n.toolbar button.active {\n  fill: var(--lottie-player-toolbar-icon-active-color);\n}\n\n.toolbar button svg {\n}\n\n.toolbar button.disabled svg {\n  display: none;\n}\n\n.toolbar a {\n  filter: grayscale(100%);\n  display: flex;\n  transition: filter .5s, opacity 0.5s;\n  opacity: 0.4;\n  height: 100%;\n  align-items: center;\n}\n\n.toolbar a:hover {\n  filter: none;\n  display: flex;\n  opacity: 1;\n}\n\n.toolbar a svg {\n}\n\n.seeker {\n  -webkit-appearance: none;\n  width: 95%;\n  outline: none;\n}\n\n.seeker::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  background: var(--lottie-player-seeker-track-color);\n  border-radius: 3px;\n}\n.seeker::-webkit-slider-thumb {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: var(--lottie-player-seeker-thumb-color);\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -5px;\n}\n.seeker:focus::-webkit-slider-runnable-track {\n  background: #999;\n}\n.seeker::-moz-range-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  background: var(--lottie-player-seeker-track-color);\n  border-radius: 3px;\n}\n.seeker::-moz-range-thumb {\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: var(--lottie-player-seeker-thumb-color);\n  cursor: pointer;\n}\n.seeker::-ms-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.seeker::-ms-fill-lower {\n  background: var(--lottie-player-seeker-track-color);\n  border-radius: 3px;\n}\n.seeker::-ms-fill-upper {\n  background: var(--lottie-player-seeker-track-color);\n  border-radius: 3px;\n}\n.seeker::-ms-thumb {\n  border: 0;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background: var(--lottie-player-seeker-thumb-color);\n  cursor: pointer;\n}\n.seeker:focus::-ms-fill-lower {\n  background: var(--lottie-player-seeker-track-color);\n}\n.seeker:focus::-ms-fill-upper {\n  background: var(--lottie-player-seeker-track-color);\n}\n\n.error {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  align-items: center;\n}\n"]);return _templateObject=function(){return t},t}var styles=css(_templateObject()),PlayerState,PlayMode,PlayerEvents;function _templateObject5(){const t=_taggedTemplateLiteral(['\n                <div class="erro    ","\n      </div>\n    "]);return _templateObject4=function(){return t},t}function _templateObject3(){const t=_taggedTemplateLiteral(['\n                <svg width="24" height="24"><path d="M8.016 5.016L18.985 12 8.016 18.984V5.01tton>\n      </div>\n    ']);return _templateObject$1=function(){return t},t}function fetchPath(t){return new Promise((e,r)=>{const i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer",i.send(),i.onreadystatechange=function(){4==i.readyState&&200==i.status&&jszip.loadAsync(i.response).then(t=>{t.file("manifest.json").async("string").then(r=>{const i=JSON.parse(r);if(!("animations"in i))throw new Error("Manifest not found");if(0===i.animations.length)throw new Error("No animations listed in the manifest");const s=i.animations[0];t.file("animations/".concat(s.id,".json")).async("string").then(r=>{const i=JSON.parse(r);"assets"in i&&Promise.all(i.assets.map(e=>{if(e.p&&null!=t.file("images/".concat(e.p)))return new Promise(r=>{t.file("images/".consync("base64"{e.p="data:;base64,"+t,e.e=1,r()})})})).then(()=>{e(i)})})})}).catch(t=>{r(t)})}})}PlayerState=exports.PlayerState||(exports.PlayerState={}),PlayerState.Loading="loading",PlayerState.Playing="playing",PlayerState.Paused="paused",PlayerState.Stopped="stopped",PlayerState.Frozen="frozen",PlayerState.Error="error",PlayMode=exports.PlayMode||(exports.PlayMode={}),PlayMode.Normal="normal",PlayMode.Bounce="bounce",PlayerEvents=exports.PlayerEvents||(exports.PlayerEvents={}),PlayerEvents.Load="load",PlayerEvents.Error="error",PlayerEvents.Ready="ready",PlayerEvents.Play="play",PlayerEvents.Pause="pause",PlayerEvents.Stop="stop",PlayerEvents.Freeze="freeze",PlayerEvents.Loop="loop",PlayerEvents.Complete="complete",PlayerEvents.Frame="frame",exports.DotLottiePlayer=class extends LitElement{constructor(){super(...arguments),this.mode=exports.PlayMode.Normal,this.autoplay=!1,this.background="transparent",this.controls=!1,this.direction=1,this.hover=!1,this.loop=!1,this.renderer="svg",this.speed=1,thilue))return;const e=t.target.value/100*this._lottie.totalFrames;this.seek(e)}async load(t){if(!this.shadowRoot)return;const e={container:this.container,loop:!1,autoplay:!1,renderer:this.renderer,rendererSettings:{scaleMode:"noScale",clearCanvas:!1,progressiveLoad:!0,hideOnTransparent:!0}};try{const r=await fetchPath(t);this._lottie&&this._lottie.destroy(),this._lottie=lottie_svg.loadAnimation(Object.assign(Object.assign({},e),{animationData:r}))}catch(t){return this.currentState=exports.PlayerState.Error,void this.dispatchEvent(new CustomEvent(exports.rEvents.Frame,{detail:{frame:this._lottie.rmission)):this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Complete))}),this._lottie.addEventListener("DOMLoaded",()=>{this.dispatchEvent(new CustomEta_ready",()=>{this.dispatchEvent(new CustomEerState.Error,this.dispatchEvent(new CustomEve()=>{this.hover&&this.currentState!==exports.P()=>{this.hover&&this.currentState===exports.PlayerState.Playing&&this.stop()}),this.setSn(this.direction),this.autoplay&&this.play())}getLottie(){return this._lottie}play(){this._lottie&&(this._lottie.play(),this.currentState=exports.Playetate.Stopped,this.dispatchEvent(new CustomEvent(exports.PlayerEvents.Stop)))}seek(t){if(!this._lottie)return;const e=t.toString().match(/^([0-9]+)(%?)$/);if(!e)return;const r="%"===e[2]?this._lottie.totalFrames*Number(e[1])/100:e[1];this.seeker=r,this.currentState===exports.PlayerState.Playing?this._,document.body.appendChild(t),t.click(),document.body.removeChild(t)}return r}freeze(){this._lottie&&(this._lottie.pause(),this.currentState=exports.Playerying?this.pause():this.play()}toggleLooping(){this.setLooping(!this.loop)}static get styles(){return styles}async firsn&&this.play():this.currentState===exports.PlayerState.Playing&&this.freeze()}),this._io.observe(this.container)),void 0!==document.hidden&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange()),this.src&&await this.load(this.src)}disconnectedCallback(){this._io&&(this._iodocument.removeEventListener("visibilitychange",()=>this._onVisibilityChange())}renderControls(){const t=this.currentState===exports.PlayerState.Playing,e=this.currentState===exports.PlayerState.Paused,r=this.currentState===exports.PlayerState.Stopped;return html(_templateObject$1(),this.togglePlay,t||e?"active":"",html(t?_templateObject2():his.freeze()},()=>{this._prevState===exports.PlayerState.Playing&&this.play()},this.toggleLooping,this.loop?"active":"")}render(){const t=this.controls?"controls":"";return html(_templateObject4(),"main "+t,"background:"+this.background,this.currentState===exports.PlayerState.Error?html(_templateObject5()):void 0,this.controls?this.renderControls():void 0)}},__decorate([query(".animation")],exports.DotLottiePlayer.prototype,"container",void 0),__decorate([property()],exports.DotLottiePlayer.prototype,"mode",void 0),__decorate([property({type:Boolean})],exports.DotLottiePlayer.prototype,"autoplay",void 0),__decorate([property({type:String,reflect:!0})],exports.DotLottiePlayer.prototype,"background",void 0),__decorate([property({type:Boolean})],exports.DotLottiePlayer.prototype,"controls",void 0),__decorate([property({type:Number})],exports.DotLottiePlayer.prototype,"count",void 0),__decorate([property({type:Number})],exports.DotLottiePlayer.prototype,"direction",void 0),__decorate([property({type:Boolean})],exports.DotLottiePlayer.prototype,"hover",void 0),__decorate([property({type:Boolean,reflect:!0})],exports.DotLottiePlayer.prototype,"loop",void 0),__decorate([property({type:String})],exports.DotLottiePlayer.prototype,"renderer",void 0),__decorate([property({type:Number})],exports.DotLottiePlayer.prototype,"speed",void 0),__decorate([property({type:String})],exports.DotLottiePlayer.prototype,"src",void 0),__decorate([property({type:String})],exports.DotLottiePlayer.prototype,"currentState",void 0),__decorate([property()],exports.DotLottiePlayer.prototype,"seeker",void 0),__decorate([property()],exports.DotLottiePlayer.prototype,"intermission",void 0),exports.DotLottiePlayer=__decorate([customElement("dotlottie-player")],exports.DotLottiePlayer),exports.fetchPath=fetchPath,Object.defineProperty(exports,"__esModule",{value:!0})}));

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.WOW = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _class, _temp;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function isIn(needle, haystack) {
    return haystack.indexOf(needle) >= 0;
  }

  function extend(custom, defaults) {
    for (var key in defaults) {
      if (custom[key] == null) {
        var value = defaults[key];
        custom[key] = value;
      }
    }
    return custom;
  }

  function isMobile(agent) {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)
    );
  }

  function createEvent(event) {
    var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
    var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

    var customEvent = void 0;
    if (document.createEvent != null) {
      // W3C DOM
      customEvent = document.createEvent('CustomEvent');
      customEvent.initCustomEvent(event, bubble, cancel, detail);
    } else if (document.createEventObject != null) {
      // IE DOM < 9
      customEvent = document.createEventObject();
      customEvent.eventType = event;
    } else {
      customEvent.eventName = event;
    }

    return customEvent;
  }

  function emitEvent(elem, event) {
    if (elem.dispatchEvent != null) {
      // W3C DOM
      elem.dispatchEvent(event);
    } else if (event in (elem != null)) {
      elem[event]();
    } else if ('on' + event in (elem != null)) {
      elem['on' + event]();
    }
  }

  function addEvent(elem, event, fn) {
    if (elem.addEventListener != null) {
      // W3C DOM
      elem.addEventListener(event, fn, false);
    } else if (elem.attachEvent != null) {
      // IE DOM
      elem.attachEvent('on' + event, fn);
    } else {
      // fallback
      elem[event] = fn;
    }
  }

  function removeEvent(elem, event, fn) {
    if (elem.removeEventListener != null) {
      // W3C DOM
      elem.removeEventListener(event, fn, false);
    } else if (elem.detachEvent != null) {
      // IE DOM
      elem.detachEvent('on' + event, fn);
    } else {
      // fallback
      delete elem[event];
    }
  }

  function getInnerHeight() {
    if ('innerHeight' in window) {
      return window.innerHeight;
    }

    return document.documentElement.clientHeight;
  }

  // Minimalistic WeakMap shim, just in case.
  var WeakMap = window.WeakMap || window.MozWeakMap || function () {
    function WeakMap() {
      _classCallCheck(this, WeakMap);

      this.keys = [];
      this.values = [];
    }

    _createClass(WeakMap, [{
      key: 'get',
      value: function get(key) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];
          if (item === key) {
            return this.values[i];
          }
        }
        return undefined;
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        for (var i = 0; i < this.keys.length; i++) {
          var item = this.keys[i];
          if (item === key) {
            this.values[i] = value;
            return this;
          }
        }
        this.keys.push(key);
        this.values.push(value);
        return this;
      }
    }]);

    return WeakMap;
  }();

  // Dummy MutationObserver, to avoid raising exceptions.
  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {
    function MutationObserver() {
      _classCallCheck(this, MutationObserver);

      if (typeof console !== 'undefined' && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    _createClass(MutationObserver, [{
      key: 'observe',
      value: function observe() {}
    }]);

    return MutationObserver;
  }(), _class.notSupported = true, _temp);

  // getComputedStyle shim, from http://stackoverflow.com/a/21797294
  var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
    var getComputedStyleRX = /(\-([a-z]){1})/g;
    return {
      getPropertyValue: function getPropertyValue(prop) {
        if (prop === 'float') {
          prop = 'styleFloat';
        }
        if (getComputedStyleRX.test(prop)) {
          prop.replace(getComputedStyleRX, function (_, _char) {
            return _char.toUpperCase();
          });
        }
        var currentStyle = el.currentStyle;

        return (currentStyle != null ? currentStyle[prop] : void 0) || null;
      }
    };
  };

  var WOW = function () {
    function WOW() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, WOW);

      this.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: (window.width > 767 ? 240 : 80),
        mobile: true,
        live: true,
        callback: null,
        scrollContainer: null,
        resetAnimation: true
      };

      this.animate = function animateFactory() {
        if ('requestAnimationFrame' in window) {
          return function (callback) {
            return window.requestAnimationFrame(callback);
          };
        }
        return function (callback) {
          return callback();
        };
      }();

      this.vendors = ['moz', 'webkit'];

      this.start = this.start.bind(this);
      this.resetAnimation = this.resetAnimation.bind(this);
      this.scrollHandler = this.scrollHandler.bind(this);
      this.scrollCallback = this.scrollCallback.bind(this);
      this.scrolled = true;
      this.config = extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      // Map of elements to animation names:
      this.animationNameCache = new WeakMap();
      this.wowEvent = createEvent(this.config.boxClass);
    }

    _createClass(WOW, [{
      key: 'init',
      value: function init() {
        this.element = window.document.documentElement;
        if (isIn(document.readyState, ['interactive', 'complete'])) {
          this.start();
        } else {
          addEvent(document, 'DOMContentLoaded', this.start);
        }
        this.finished = [];
      }
    }, {
      key: 'start',
      value: function start() {
        var _this = this;

        this.stopped = false;
        this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));
        this.all = this.boxes.slice(0);
        if (this.boxes.length) {
          if (this.disabled()) {
            this.resetStyle();
          } else {
            for (var i = 0; i < this.boxes.length; i++) {
              var box = this.boxes[i];
              this.applyStyle(box, true);
            }
          }
        }
        if (!this.disabled()) {
          addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
          addEvent(window, 'resize', this.scrollHandler);
          this.interval = setInterval(this.scrollCallback, 50);
        }
        if (this.config.live) {
          var mut = new MutationObserver(function (records) {
            for (var j = 0; j < records.length; j++) {
              var record = records[j];
              for (var k = 0; k < record.addedNodes.length; k++) {
                var node = record.addedNodes[k];
                _this.doSync(node);
              }
            }
            return undefined;
          });
          mut.observe(document.body, {
            childList: true,
            subtree: true
          });
        }
      }
    }, {
      key: 'stop',
      value: function stop() {
        this.stopped = true;
        removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        removeEvent(window, 'resize', this.scrollHandler);
        if (this.interval != null) {
          clearInterval(this.interval);
        }
      }
    }, {
      key: 'sync',
      value: function sync() {
        if (MutationObserver.notSupported) {
          this.doSync(this.element);
        }
      }
    }, {
      key: 'doSync',
      value: function doSync(element) {
        if (typeof element === 'undefined' || element === null) {
          element = this.element;
        }
        if (element.nodeType !== 1) {
          return;
        }
        element = element.parentNode || element;
        var iterable = element.querySelectorAll('.' + this.config.boxClass);
        for (var i = 0; i < iterable.length; i++) {
          var box = iterable[i];
          if (!isIn(box, this.all)) {
            this.boxes.push(box);
            this.all.push(box);
            if (this.stopped || this.disabled()) {
              this.resetStyle();
            } else {
              this.applyStyle(box, true);
            }
            this.scrolled = true;
          }
        }
      }
    }, {
      key: 'show',
      value: function show(box) {
        this.applyStyle(box);
        box.className = box.className + ' ' + this.config.animateClass;
        if (this.config.callback != null) {
          this.config.callback(box);
        }
        emitEvent(box, this.wowEvent);

        if (this.config.resetAnimation) {
          addEvent(box, 'animationend', this.resetAnimation);
          addEvent(box, 'oanimationend', this.resetAnimation);
          addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
          addEvent(box, 'MSAnimationEnd', this.resetAnimation);
        }

        return box;
      }
    }, {
      key: 'applyStyle',
      value: function applyStyle(box, hidden) {
        var _this2 = this;

        var duration = box.getAttribute('data-wow-duration');
        var delay = box.getAttribute('data-wow-delay');
        var iteration = box.getAttribute('data-wow-iteration');

        return this.animate(function () {
          return _this2.customStyle(box, hidden, duration, delay, iteration);
        });
      }
    }, {
      key: 'resetStyle',
      value: function resetStyle() {
        for (var i = 0; i < this.boxes.length; i++) {
          var box = this.boxes[i];
          //box.style.visibility = 'visible';
        }
        return undefined;
      }
    }, {
      key: 'resetAnimation',
      value: function resetAnimation(event) {
        if (event.type.toLowerCase().indexOf('animationend') >= 0) {
          var target = event.target || event.srcElement;
          target.className = target.className.replace(this.config.animateClass, '').trim();
        }
      }
    }, {
      key: 'customStyle',
      value: function customStyle(box, hidden, duration, delay, iteration) {
        if (hidden) {
          this.cacheAnimationName(box);
        }
        //box.style.visibility = hidden ? 'hidden' : 'visible';

        if (duration) {
          this.vendorSet(box.style, { animationDuration: duration });
        }
        if (delay) {
          this.vendorSet(box.style, { animationDelay: delay });
        }
        if (iteration) {
          this.vendorSet(box.style, { animationIterationCount: iteration });
        }
        this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });

        return box;
      }
    }, {
      key: 'vendorSet',
      value: function vendorSet(elem, properties) {
        for (var name in properties) {
          if (properties.hasOwnProperty(name)) {
            var value = properties[name];
            elem['' + name] = value;
            for (var i = 0; i < this.vendors.length; i++) {
              var vendor = this.vendors[i];
              elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
            }
          }
        }
      }
    }, {
      key: 'vendorCSS',
      value: function vendorCSS(elem, property) {
        var style = getComputedStyle(elem);
        var result = style.getPropertyCSSValue(property);
        for (var i = 0; i < this.vendors.length; i++) {
          var vendor = this.vendors[i];
          result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);
        }
        return result;
      }
    }, {
      key: 'animationName',
      value: function animationName(box) {
        var aName = void 0;
        try {
          aName = this.vendorCSS(box, 'animation-name').cssText;
        } catch (error) {
          // Opera, fall back to plain property value
          aName = getComputedStyle(box).getPropertyValue('animation-name');
        }

        if (aName === 'none') {
          return ''; // SVG/Firefox, unable to get animation name?
        }

        return aName;
      }
    }, {
      key: 'cacheAnimationName',
      value: function cacheAnimationName(box) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
        // box.dataset is not supported for SVG elements in Firefox
        return this.animationNameCache.set(box, this.animationName(box));
      }
    }, {
      key: 'cachedAnimationName',
      value: function cachedAnimationName(box) {
        return this.animationNameCache.get(box);
      }
    }, {
      key: 'scrollHandler',
      value: function scrollHandler() {
        this.scrolled = true;
      }
    }, {
      key: 'scrollCallback',
      value: function scrollCallback() {
        if (this.scrolled) {
          this.scrolled = false;
          var results = [];
          for (var i = 0; i < this.boxes.length; i++) {
            var box = this.boxes[i];
            if (box) {
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }
              results.push(box);
            }
          }
          this.boxes = results;
          if (!this.boxes.length && !this.config.live) {
            this.stop();
          }
        }
      }
    }, {
      key: 'offsetTop',
      value: function offsetTop(element) {
        // SVG elements don't have an offsetTop in Firefox.
        // This will use their nearest parent that has an offsetTop.
        // Also, using ('offsetTop' of element) causes an exception in Firefox.
        while (element.offsetTop === undefined) {
          element = element.parentNode;
        }
        var top = element.offsetTop;
        while (element.offsetParent) {
          element = element.offsetParent;
          top += element.offsetTop;
        }
        return top;
      }
    }, {
      key: 'isVisible',
      value: function isVisible(box) {
        var offset = box.getAttribute('data-wow-offset') || this.config.offset;
        var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
        var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
        var top = this.offsetTop(box);
        var bottom = top + box.clientHeight;

        return top <= viewBottom && bottom >= viewTop;
      }
    }, {
      key: 'disabled',
      value: function disabled() {
        return !this.config.mobile && isMobile(navigator.userAgent);
      }
    }]);

    return WOW;
  }();

  exports.default = WOW;
  module.exports = exports['default'];
});

jQuery(document).ready(function() {
  //window.onload = function() {
    new WOW().init();
    //document.getElementById("intro__player").play();
    setInterval(function() {
      jQuery(".intro__logos").toggleClass("flipped");
    }, 3333);
  //};

  //Check Tab Session Storage for back button
  var tabid = window.sessionStorage.getItem('tabid');
  if (typeof tabid !== 'undefined' && tabid !== null) {
  }else{
    tabid = "#simplify-secure-ways__pane-1";
  }

    const ths = jQuery("[data-tab-open='" + tabid+"']");
    const trgt = jQuery(ths.data('tab-open'));

    ths.addClass('active').siblings().removeClass('active');
    trgt.addClass('active').siblings().removeClass('active');



  ///////////////////////////////////////
  jQuery('.experience-today__link').on('click', function(event) {
    event.preventDefault();
    jQuery(this).removeClass('faded');
    jQuery(this).next().addClass('active');

    jQuery(this).toggleClass('active').siblings().removeClass('active');
    if (jQuery(this).hasClass('active')) {

      jQuery('.experience-today__link').not(this).addClass('faded');
      jQuery(this).next().addClass('active');
      jQuery('#experience-today__figure').addClass('faded');
    }
    else {
      jQuery(this).next().removeClass('active');
      jQuery('#experience-today__figure').removeClass('faded');
    }
  });
  jQuery('.experience-today__close').on('click', function() {

    // jQuery(this).closest('.experience-today__link.active').removeClass('active');
    jQuery(this).parent().removeClass('active');
    jQuery(this).parent().parent().find('.experience-today__link.active').removeClass('active');
    jQuery(this).parent().parent().find('.experience-today__link.faded').removeClass('faded');
    jQuery('#experience-today__figure').removeClass('faded');

  });
  /**/
  /* tabs */
  /**/
  jQuery('[data-tab-open]').on('click', function (evnt) {
    evnt.preventDefault();
    const ths = jQuery(this);
    const trgt = jQuery(ths.data('tab-open'));
    //Added Session Storage for back button
    window.sessionStorage.setItem('tabid', ths.data('tab-open'));
     ths.addClass('active').siblings().removeClass('active');
    trgt.addClass('active').siblings().removeClass('active');
  });

    let $nav = jQuery('.page_front__alt .header');
    if (jQuery(this).scrollTop() === 0) {
      $nav.css('background-color', 'transparent');
    }
    else {
      $nav.css('background-color', '#0F1D35');
    }
  let removeAnimation = function () {
    var ww = document.body.clientWidth;
    if (ww < 500) {
      jQuery('.intro__logos-home').removeClass('intro__logos');
    } else if (ww >= 500) {
      jQuery('.intro__logos-home').addClass('intro__logos');
    };
  };
  removeAnimation();
});
jQuery(window).resize(function () {
  var ww = document.body.clientWidth;
  if (ww < 500) {
    jQuery('.intro__logos-home').removeClass('intro__logos');
  } else if (ww >= 500) {
    jQuery('.intro__logos-home').addClass('intro__logos');
  };
});
jQuery(function () {
  jQuery(document).scroll(function () {
    let $nav = jQuery('.page_front__alt .header');
    if (jQuery(this).scrollTop() === 0) {
      $nav.css('background-color', 'transparent');
    }
    else {
      $nav.css('background-color', '#0F1D35');
    }
  })
})

/**/
/* New Home Page Card Animation */
/**/

const scrollSlider = document.querySelectorAll('.js-scroll-slider');
if (scrollSlider.length > 0) {
  scrollSlider.forEach(slider => {
    const speed = slider.dataset.autoSpeedRatio ? Number(slider.dataset.autoSpeedRatio) : 0.5;
    const sliderWrap = document.createElement('div');
    sliderWrap.classList.add('js-scroll-slider-wrap');
    slider.after(sliderWrap);
    sliderWrap.append(slider);
    const children = slider.children;
    const childLength = children.length;
    let baseChildren = '';
    for (let i = 0; i < children.length; i++) {
      baseChildren += children[i].outerHTML;
    }
    const firstChild = slider.firstElementChild;
    let sliderWidth, winWidth;
    let countWidth = 0;
    let addCount = 1;
    const initializeSlider = (countWidth, addCount) => {
      const styles = getComputedStyle(firstChild);
      const width = parseFloat(styles.width);
      const marginRight = parseFloat(styles.marginRight);
      sliderWidth = (width + marginRight) * childLength;
      winWidth = window.innerWidth;
      countWidth = sliderWidth * addCount;
      slider.insertAdjacentHTML('beforeend', baseChildren);
      slider.style.marginLeft = '-' + sliderWidth + 'px';
    }

    initializeSlider(countWidth, addCount);
    let requestID;
    let x = 0;
    const isReverse = slider.classList.contains('is-reverse');
    const scrollAnime = () => {
      if (!isReverse && x <= -sliderWidth || isReverse && x >= sliderWidth) {
        x = 0;
      }
      slider.style.transform = 'translateX(' + x + 'px)';
      if (isReverse) {
        x += 1 * speed;

      } else {
        x -= 1 * speed;
      }
      requestID = requestAnimationFrame(scrollAnime);
    }
    const sliderStyles = getComputedStyle(slider);
    let isDown = false;
    let isRightMove = false;
    let startX;
    let sliderX;
    let isIntersecting = false;
    const startFunc = e => {
      if (e.type === 'touchstart') {
        startX = e.changedTouches[0].pageX;
      }
      else {
        startX = e.pageX;
      }
      slider.classList.add('is-drag');
      isDown = true;
      sliderWrap.style.cursor = 'grabbing';
      cancelAnimationFrame(requestID);
      let matrix = new DOMMatrix(sliderStyles.transform);
      sliderX = parseFloat(matrix.m41);
    }
    const moveFunc = e => {
      if (!isDown) {
        return;
      }
      let moveX;
      if (e.type === 'touchmove') {
        moveX = startX - e.changedTouches[0].pageX;
      } else {
        moveX = startX - e.pageX;
      }
      if (moveX < 0) {
        isRightMove = true;
      } else {
        isRightMove = false;
      }
      requestID = requestAnimationFrame(() => {
        x = (sliderX - moveX);
        slider.style.transform = 'translateX(' + x + 'px)';
      });
    }
    const endFunc = e => {
      slider.classList.remove('is-drag');
      isDown = false;
      sliderWrap.style.cursor = 'grab';
      if (!isRightMove && x * -1 >= sliderWidth) {
        x = sliderWidth - (x * -1);
        slider.style.transform = 'translateX(' + x + 'px)';
      } else if (isRightMove && x >= 0) {
        x = -(sliderWidth - x);
        slider.style.transform = 'translateX(' + x + 'px)';
      }
      cancelAnimationFrame(requestID);
      if (isIntersecting) {
        requestID = requestAnimationFrame(scrollAnime);
      }
    }
    sliderWrap.addEventListener('touchstart', startFunc, false);
    sliderWrap.addEventListener('touchmove', moveFunc, false);
    sliderWrap.addEventListener('touchend', endFunc);
    sliderWrap.addEventListener('click', endFunc);
    sliderWrap.addEventListener('mouseleave', endFunc);
    sliderWrap.addEventListener('mouseover', () => {
      cancelAnimationFrame(requestID);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cancelAnimationFrame(requestID);
          requestID = requestAnimationFrame(scrollAnime);
          isIntersecting = true;
        } else {
          cancelAnimationFrame(requestID);
          isIntersecting = false;
        }
      });
    });
    observer.observe(sliderWrap);
    const resizeObserver = new ResizeObserver(() => {
      initializeSlider(countWidth, addCount);
      cancelAnimationFrame(requestID);
      requestID = requestAnimationFrame(scrollAnime);
    });
    resizeObserver.observe(firstChild);
  });
}

/* Source and licensing information for the above line(s) can be found at https://www.egnyte.com/themes/custom/egnyte/js/homePage.js. */;
/* Source and licensing information for the line(s) below can be found at https://www.egnyte.com/themes/custom/egnyte/js/wow.js. */
(function(global,factory){if(typeof define==="function"&&define.amd){define(['module','exports'],factory)}else if(typeof exports!=="undefined"){factory(module,exports)}else{var mod={exports:{}};factory(mod,mod.exports);global.WOW=mod.exports}})(this,function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _class,_temp
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}};return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}()
function isIn(needle,haystack){return haystack.indexOf(needle)>=0}
function extend(custom,defaults){for(var key in defaults)if(custom[key]==null){var value=defaults[key];custom[key]=value};return custom}
function isMobile(agent){return(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent))}
function createEvent(event){var bubble=arguments.length<=1||arguments[1]===undefined?false:arguments[1],cancel=arguments.length<=2||arguments[2]===undefined?false:arguments[2],detail=arguments.length<=3||arguments[3]===undefined?null:arguments[3],customEvent=void(0);if(document.createEvent!=null){customEvent=document.createEvent('CustomEvent');customEvent.initCustomEvent(event,bubble,cancel,detail)}else if(document.createEventObject!=null){customEvent=document.createEventObject();customEvent.eventType=event}else customEvent.eventName=event;return customEvent}
function emitEvent(elem,event){if(elem.dispatchEvent!=null){elem.dispatchEvent(event)}else if(event in(elem!=null)){elem[event]()}else if('on'+event in(elem!=null))elem['on'+event]()}
function addEvent(elem,event,fn){if(elem.addEventListener!=null){elem.addEventListener(event,fn,false)}else if(elem.attachEvent!=null){elem.attachEvent('on'+event,fn)}else elem[event]=fn}
function removeEvent(elem,event,fn){if(elem.removeEventListener!=null){elem.removeEventListener(event,fn,false)}else if(elem.detachEvent!=null){elem.detachEvent('on'+event,fn)}else delete elem[event]}
function getInnerHeight(){if('innerHeight'in window)return window.innerHeight;return document.documentElement.clientHeight};var WeakMap=window.WeakMap||window.MozWeakMap||function(){function WeakMap(){_classCallCheck(this,WeakMap);this.keys=[];this.values=[]};_createClass(WeakMap,[{key:'get',value:function get(key){for(var i=0;i<this.keys.length;i++){var item=this.keys[i];if(item===key)return this.values[i]};return undefined}},{key:'set',value:function set(key,value){for(var i=0;i<this.keys.length;i++){var item=this.keys[i];if(item===key){this.values[i]=value;return this}};this.keys.push(key);this.values.push(value);return this}}]);return WeakMap}(),MutationObserver=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(_temp=_class=function(){function MutationObserver(){_classCallCheck(this,MutationObserver);if(typeof console!=='undefined'&&console!==null){console.warn('MutationObserver is not supported by your browser.');console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.')}};_createClass(MutationObserver,[{key:'observe',value:function observe(){}}]);return MutationObserver}(),_class.notSupported=true,_temp),getComputedStyle=window.getComputedStyle||function getComputedStyle(el){var getComputedStyleRX=/(\-([a-z]){1})/g;return{getPropertyValue:function getPropertyValue(prop){if(prop==='float')prop='styleFloat';if(getComputedStyleRX.test(prop))prop.replace(getComputedStyleRX,function(_,_char){return _char.toUpperCase()});var currentStyle=el.currentStyle;return(currentStyle!=null?currentStyle[prop]:void(0))||null}}},WOW=function(){function WOW(){var options=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,WOW);this.defaults={boxClass:'wow',animateClass:'animated',offset:(window.width>767?240:80),mobile:true,live:true,callback:null,scrollContainer:null,resetAnimation:true};this.animate=function animateFactory(){if('requestAnimationFrame'in window)return function(callback){return window.requestAnimationFrame(callback)};return function(callback){return callback()}}();this.vendors=['moz','webkit'];this.start=this.start.bind(this);this.resetAnimation=this.resetAnimation.bind(this);this.scrollHandler=this.scrollHandler.bind(this);this.scrollCallback=this.scrollCallback.bind(this);this.scrolled=true;this.config=extend(options,this.defaults);if(options.scrollContainer!=null)this.config.scrollContainer=document.querySelector(options.scrollContainer);this.animationNameCache=new WeakMap();this.wowEvent=createEvent(this.config.boxClass)};_createClass(WOW,[{key:'init',value:function init(){this.element=window.document.documentElement;if(isIn(document.readyState,['interactive','complete'])){this.start()}else addEvent(document,'DOMContentLoaded',this.start);this.finished=[]}},{key:'start',value:function start(){var _this=this;this.stopped=false;this.boxes=[].slice.call(this.element.querySelectorAll('.'+this.config.boxClass));this.all=this.boxes.slice(0);if(this.boxes.length)if(this.disabled()){this.resetStyle()}else for(var i=0;i<this.boxes.length;i++){var box=this.boxes[i];this.applyStyle(box,true)};if(!this.disabled()){addEvent(this.config.scrollContainer||window,'scroll',this.scrollHandler);addEvent(window,'resize',this.scrollHandler);this.interval=setInterval(this.scrollCallback,50)};if(this.config.live){var mut=new MutationObserver(function(records){for(var j=0;j<records.length;j++){var record=records[j];for(var k=0;k<record.addedNodes.length;k++){var node=record.addedNodes[k];_this.doSync(node)}};return undefined});mut.observe(document.body,{childList:true,subtree:true})}}},{key:'stop',value:function stop(){this.stopped=true;removeEvent(this.config.scrollContainer||window,'scroll',this.scrollHandler);removeEvent(window,'resize',this.scrollHandler);if(this.interval!=null)clearInterval(this.interval)}},{key:'sync',value:function sync(){if(MutationObserver.notSupported)this.doSync(this.element)}},{key:'doSync',value:function doSync(element){if(typeof element==='undefined'||element===null)element=this.element;if(element.nodeType!==1)return;element=element.parentNode||element;var iterable=element.querySelectorAll('.'+this.config.boxClass);for(var i=0;i<iterable.length;i++){var box=iterable[i];if(!isIn(box,this.all)){this.boxes.push(box);this.all.push(box);if(this.stopped||this.disabled()){this.resetStyle()}else this.applyStyle(box,true);this.scrolled=true}}}},{key:'show',value:function show(box){this.applyStyle(box);box.className=box.className+' '+this.config.animateClass;if(this.config.callback!=null)this.config.callback(box);emitEvent(box,this.wowEvent);if(this.config.resetAnimation){addEvent(box,'animationend',this.resetAnimation);addEvent(box,'oanimationend',this.resetAnimation);addEvent(box,'webkitAnimationEnd',this.resetAnimation);addEvent(box,'MSAnimationEnd',this.resetAnimation)};return box}},{key:'applyStyle',value:function applyStyle(box,hidden){var _this2=this,duration=box.getAttribute('data-wow-duration'),delay=box.getAttribute('data-wow-delay'),iteration=box.getAttribute('data-wow-iteration');return this.animate(function(){return _this2.customStyle(box,hidden,duration,delay,iteration)})}},{key:'resetStyle',value:function resetStyle(){for(var i=0;i<this.boxes.length;i++)var box=this.boxes[i];return undefined}},{key:'resetAnimation',value:function resetAnimation(event){if(event.type.toLowerCase().indexOf('animationend')>=0){var target=event.target||event.srcElement;target.className=target.className.replace(this.config.animateClass,'').trim()}}},{key:'customStyle',value:function customStyle(box,hidden,duration,delay,iteration){if(hidden)this.cacheAnimationName(box);if(duration)this.vendorSet(box.style,{animationDuration:duration});if(delay)this.vendorSet(box.style,{animationDelay:delay});if(iteration)this.vendorSet(box.style,{animationIterationCount:iteration});this.vendorSet(box.style,{animationName:hidden?'none':this.cachedAnimationName(box)});return box}},{key:'vendorSet',value:function vendorSet(elem,properties){for(var name in properties)if(properties.hasOwnProperty(name)){var value=properties[name];elem[''+name]=value;for(var i=0;i<this.vendors.length;i++){var vendor=this.vendors[i];elem[''+vendor+name.charAt(0).toUpperCase()+name.substr(1)]=value}}}},{key:'vendorCSS',value:function vendorCSS(elem,property){var style=getComputedStyle(elem),result=style.getPropertyCSSValue(property);for(var i=0;i<this.vendors.length;i++){var vendor=this.vendors[i];result=result||style.getPropertyCSSValue('-'+vendor+'-'+property)};return result}},{key:'animationName',value:function animationName(box){var aName=void(0);try{aName=this.vendorCSS(box,'animation-name').cssText}catch(error){aName=getComputedStyle(box).getPropertyValue('animation-name')};if(aName==='none')return'';return aName}},{key:'cacheAnimationName',value:function cacheAnimationName(box){return this.animationNameCache.set(box,this.animationName(box))}},{key:'cachedAnimationName',value:function cachedAnimationName(box){return this.animationNameCache.get(box)}},{key:'scrollHandler',value:function scrollHandler(){this.scrolled=true}},{key:'scrollCallback',value:function scrollCallback(){if(this.scrolled){this.scrolled=false;var results=[];for(var i=0;i<this.boxes.length;i++){var box=this.boxes[i];if(box){if(this.isVisible(box)){this.show(box);continue};results.push(box)}};this.boxes=results;if(!this.boxes.length&&!this.config.live)this.stop()}}},{key:'offsetTop',value:function offsetTop(element){while(element.offsetTop===undefined)element=element.parentNode;var top=element.offsetTop;while(element.offsetParent){element=element.offsetParent;top+=element.offsetTop};return top}},{key:'isVisible',value:function isVisible(box){var offset=box.getAttribute('data-wow-offset')||this.config.offset,viewTop=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,viewBottom=viewTop+Math.min(this.element.clientHeight,getInnerHeight())-offset,top=this.offsetTop(box),bottom=top+box.clientHeight;return top<=viewBottom&&bottom>=viewTop}},{key:'disabled',value:function disabled(){return!this.config.mobile&&isMobile(navigator.userAgent)}}]);return WOW}();exports.default=WOW;module.exports=exports['default']})
/* Source and licensing information for the above line(s) can be found at https://www.egnyte.com/themes/custom/egnyte/js/wow.js. */;
