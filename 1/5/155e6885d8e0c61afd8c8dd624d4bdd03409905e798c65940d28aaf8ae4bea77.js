
setTimeout(function() {
/**
 * Swiper 8.3.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 6, 2022
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.e0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */

    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend$1(target, src) {
      if (target === void 0) {
        target = {};
      }

      if (src === void 0) {
        src = {};
      }

      Object.keys(src).forEach(key => {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          extend$1(target[key], src[key]);
        }
      });
    }

    const ssrDocument = {
      body: {},

      addEventListener() {},

      removeEventListener() {},

      activeElement: {
        blur() {},

        nodeName: ''
      },

      querySelector() {
        return null;
      },

      querySelectorAll() {
        return [];
      },

      getElementById() {
        return null;
      },

      createEvent() {
        return {
          initEvent() {}

        };
      },

      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},

          setAttribute() {},

          getElementsByTagName() {
            return [];
          }

        };
      },

      createElementNS() {
        return {};
      },

      importNode() {
        return null;
      },

      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };

    function getDocument() {
      const doc = typeof document !== 'undefined' ? document : {};
      extend$1(doc, ssrDocument);
      return doc;
    }

    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState() {},

        pushState() {},

        go() {},

        back() {}

      },
      CustomEvent: function CustomEvent() {
        return this;
      },

      addEventListener() {},

      removeEventListener() {},

      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          }

        };
      },

      Image() {},

      Date() {},

      screen: {},

      setTimeout() {},

      clearTimeout() {},

      matchMedia() {
        return {};
      },

      requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }

        return setTimeout(callback, 0);
      },

      cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }

        clearTimeout(id);
      }

    };

    function getWindow() {
      const win = typeof window !== 'undefined' ? window : {};
      extend$1(win, ssrWindow);
      return win;
    }

    /**
     * Dom7 4.0.4
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2022, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: January 11, 2022
     */
    /* eslint-disable no-proto */

    function makeReactive(obj) {
      const proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get() {
          return proto;
        },

        set(value) {
          proto.__proto__ = value;
        }

      });
    }

    class Dom7 extends Array {
      constructor(items) {
        if (typeof items === 'number') {
          super(items);
        } else {
          super(...(items || []));
          makeReactive(this);
        }
      }

    }

    function arrayFlat(arr) {
      if (arr === void 0) {
        arr = [];
      }

      const res = [];
      arr.forEach(el => {
        if (Array.isArray(el)) {
          res.push(...arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }

    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
      const uniqueArray = [];

      for (let i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }

      return uniqueArray;
    }


    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }

      const a = [];
      const res = context.querySelectorAll(selector);

      for (let i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }

      return a;
    }

    function $(selector, context) {
      const window = getWindow();
      const document = getDocument();
      let arr = [];

      if (!context && selector instanceof Dom7) {
        return selector;
      }

      if (!selector) {
        return new Dom7(arr);
      }

      if (typeof selector === 'string') {
        const html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          const tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;

          for (let i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);

      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }

      return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype; // eslint-disable-next-line

    function addClass() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.add(...classNames);
      });
      return this;
    }

    function removeClass() {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.remove(...classNames);
      });
      return this;
    }

    function toggleClass() {
      for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classes[_key3] = arguments[_key3];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        classNames.forEach(className => {
          el.classList.toggle(className);
        });
      });
    }

    function hasClass() {
      for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        classes[_key4] = arguments[_key4];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      return arrayFilter(this, el => {
        return classNames.filter(className => el.classList.contains(className)).length > 0;
      }).length > 0;
    }

    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs


      for (let i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (const attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    }

    function removeAttr(attr) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    }

    function transform(transform) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }

      return this;
    }

    function transition$1(duration) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
      }

      return this;
    }

    function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;

      function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          const parents = $(target).parents(); // eslint-disable-line

          for (let k = 0; k < parents.length; k += 1) {
            if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
          }
        }
      }

      function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      const events = eventType.split(' ');
      let j;

      for (let i = 0; i < this.length; i += 1) {
        const el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
              listener,
              proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;
      const events = eventType.split(' ');

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          let handlers;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (let k = handlers.length - 1; k >= 0; k -= 1) {
              const handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function trigger() {
      const window = getWindow();

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      const events = args[0].split(' ');
      const eventData = args[1];

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];

          if (window.CustomEvent) {
            const evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }

      return this;
    }

    function transitionEnd$1(callback) {
      const dom = this;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }

      if (callback) {
        dom.on('transitionend', fireCallBack);
      }

      return this;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        const window = getWindow();
        const document = getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }

      return null;
    }

    function styles() {
      const window = getWindow();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }

    function css(props, value) {
      const window = getWindow();
      let i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (const prop in props) {
              this[i].style[prop] = props[prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    }

    function each(callback) {
      if (!callback) return this;
      this.forEach((el, index) => {
        callback.apply(el, [el, index]);
      });
      return this;
    }

    function filter(callback) {
      const result = arrayFilter(this, callback);
      return $(result);
    }

    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    }

    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      const window = getWindow();
      const document = getDocument();
      const el = this[0];
      let compareWith;
      let i;
      if (!el || typeof selector === 'undefined') return false;

      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      if (selector === document) {
        return el === document;
      }

      if (selector === window) {
        return el === window;
      }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      return false;
    }

    function index() {
      let child = this[0];
      let i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }

        return i;
      }

      return undefined;
    }

    function eq(index) {
      if (typeof index === 'undefined') return this;
      const length = this.length;

      if (index > length - 1) {
        return $([]);
      }

      if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }

      return $([this[index]]);
    }

    function append() {
      let newChild;
      const document = getDocument();

      for (let k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

        for (let i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (let j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }

    function prepend(newChild) {
      const document = getDocument();
      let i;
      let j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }

          return $([]);
        }

        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function nextAll(selector) {
      const nextEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.nextElementSibling) {
        const next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);

        el = next;
      }

      return $(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        const el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }

          return $([]);
        }

        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function prevAll(selector) {
      const prevEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.previousElementSibling) {
        const prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);

        el = prev;
      }

      return $(prevEls);
    }

    function parent(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(parents);
    }

    function parents(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        let parent = this[i].parentNode; // eslint-disable-line

        while (parent) {
          if (selector) {
            if ($(parent).is(selector)) parents.push(parent);
          } else {
            parents.push(parent);
          }

          parent = parent.parentNode;
        }
      }

      return $(parents);
    }

    function closest(selector) {
      let closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return $([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      const foundElements = [];

      for (let i = 0; i < this.length; i += 1) {
        const found = this[i].querySelectorAll(selector);

        for (let j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return $(foundElements);
    }

    function children(selector) {
      const children = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        const childNodes = this[i].children;

        for (let j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return $(children);
    }

    function remove() {
      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }

      return this;
    }

    const Methods = {
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      attr,
      removeAttr,
      transform,
      transition: transition$1,
      on,
      off,
      trigger,
      transitionEnd: transitionEnd$1,
      outerWidth,
      outerHeight,
      styles,
      offset,
      css,
      each,
      html,
      text,
      is,
      index,
      eq,
      append,
      prepend,
      next,
      nextAll,
      prev,
      prevAll,
      parent,
      parents,
      closest,
      find,
      children,
      filter,
      remove
    };
    Object.keys(Methods).forEach(methodName => {
      Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });

    function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach(key => {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }

        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }

    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }

      return setTimeout(callback, delay);
    }

    function now() {
      return Date.now();
    }

    function getComputedStyle$1(el) {
      const window = getWindow();
      let style;

      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }

      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }

      if (!style) {
        style = el.style;
      }

      return style;
    }

    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }

      const window = getWindow();
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = getComputedStyle$1(el);

      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }

      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }

      return curTransform || 0;
    }

    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }

      return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend() {
      const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
      const noExtend = ['__proto__', 'constructor', 'prototype'];

      for (let i = 1; i < arguments.length; i += 1) {
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};

                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }

      return to;
    }

    function setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue);
    }

    function animateCSSModeScroll(_ref) {
      let {
        swiper,
        targetPosition,
        side
      } = _ref;
      const window = getWindow();
      const startPosition = -swiper.translate;
      let startTime = null;
      let time;
      const duration = swiper.params.speed;
      swiper.wrapperEl.style.scrollSnapType = 'none';
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      const dir = targetPosition > startPosition ? 'next' : 'prev';

      const isOutOfBound = (current, target) => {
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
      };

      const animate = () => {
        time = new Date().getTime();

        if (startTime === null) {
          startTime = time;
        }

        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

        if (isOutOfBound(currentPosition, targetPosition)) {
          currentPosition = targetPosition;
        }

        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });

        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.scrollSnapType = '';
          setTimeout(() => {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.scrollTo({
              [side]: currentPosition
            });
          });
          window.cancelAnimationFrame(swiper.cssModeFrameID);
          return;
        }

        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
      };

      animate();
    }

    let support;

    function calcSupport() {
      const window = getWindow();
      const document = getDocument();
      return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
          let supportsPassive = false;

          try {
            const opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get() {
                supportsPassive = true;
              }

            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }

    function getSupport() {
      if (!support) {
        support = calcSupport();
      }

      return support;
    }

    let deviceCached;

    function calcDevice(_temp) {
      let {
        userAgent
      } = _temp === void 0 ? {} : _temp;
      const support = getSupport();
      const window = getWindow();
      const platform = window.navigator.platform;
      const ua = userAgent || window.navigator.userAgent;
      const device = {
        ios: false,
        android: false
      };
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const windows = platform === 'Win32';
      let macos = platform === 'MacIntel'; // iPadOs 13 fix

      const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

      if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android


      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object


      return device;
    }

    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }

      if (!deviceCached) {
        deviceCached = calcDevice(overrides);
      }

      return deviceCached;
    }

    let browser;

    function calcBrowser() {
      const window = getWindow();

      function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }

    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }

      return browser;
    }

    function Resize(_ref) {
      let {
        swiper,
        on,
        emit
      } = _ref;
      const window = getWindow();
      let observer = null;
      let animationFrame = null;

      const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
      };

      const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver(entries => {
          animationFrame = window.requestAnimationFrame(() => {
            const {
              width,
              height
            } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(_ref2 => {
              let {
                contentBoxSize,
                contentRect,
                target
              } = _ref2;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              resizeHandler();
            }
          });
        });
        observer.observe(swiper.el);
      };

      const removeObserver = () => {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
        }

        if (observer && observer.unobserve && swiper.el) {
          observer.unobserve(swiper.el);
          observer = null;
        }
      };

      const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
      };

      on('init', () => {
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
          createObserver();
          return;
        }

        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
      });
      on('destroy', () => {
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
      });
    }

    function Observer(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const observers = [];
      const window = getWindow();

      const attach = function (target, options) {
        if (options === void 0) {
          options = {};
        }

        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc(mutations => {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            emit('observerUpdate', mutations[0]);
            return;
          }

          const observerUpdate = function observerUpdate() {
            emit('observerUpdate', mutations[0]);
          };

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
      };

      const init = () => {
        if (!swiper.params.observer) return;

        if (swiper.params.observeParents) {
          const containerParents = swiper.$el.parents();

          for (let i = 0; i < containerParents.length; i += 1) {
            attach(containerParents[i]);
          }
        } // Observe container


        attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper

        attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      };

      const destroy = () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
        observers.splice(0, observers.length);
      };

      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      });
      on('init', init);
      on('destroy', destroy);
    }

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
      on(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(event => {
     var p=[],q=8*n;56>m?c(k,56-m):c(k,64-(m-56));for(var u=63;56<=u;u--)f[u]=q&255,q>>>=8;b(f);for(u=q=0;5>u;u++)for(var v=24;0<=v;v-=8)p[q++]=e[u]>>v&255;return p}for(var e=[],f=[],h=[],k=[128],l=1;64>l;++l)k[l]=0;var m,n;a();return{reset:a,update:c,digest:d,ej:function(){for(var p=d(),q="",u=0;u<p.length;u++)q+="0123456789ABCDEF".charAt(Math.floor(p[u]/16))+"0123456789ABCDEF".charAt(p[u]%16);return q}}},Dv=
window.crypto,Ev=!1,Fv=0,Gv=1,Hv=0,Iv="",Jv=function(a){a=a||window.event;var b=a.screenX+a.clientX<<16;b+=a.screenY+a.clientY;b*=(new Date).getTime()%1E6;Gv=Gv*b%Hv;if(3==++Fv)if(a=window,b=Jv,a.removeEventListener)a.removeEventListener("mousemove",b,!1);else if(a.detachEvent)a.detachEvent("onmousemove",b);else throw Error("Y`mousemove");},Kv=function(a){var b=Cv();b.update(a);return b.ej()};Ev=!!Dv&&"function"==typeof Dv.getRandomValues;
Ev||(Hv=1E6*(screen.width*screen.width+screen.height),Iv=Kv(document.cookie+"|"+document.location+"|"+(new Date).getTime()+"|"+Math.random()),jv(window,"mousemove",Jv));ov=ov||{};ov.s2="ssIFrame_";
_.Lv=function(a,b,c){c=void 0===c?!1:c;this.Ib=a;if(!this.Ib)throw Error("ga");a=_.rv(a,"idpIFrameUrl");if(!a)throw Error("ha");this.sU=a;if(!b)throw Error("ia");this.xn=b;a=this.sU;b=document.createElement("a");b.setAttribute("href",a);a=[b.protocol,"//",b.hostname];"http:"==b.protocol&&""!=b.port&&"0"!=b.port&&"80"!=b.port?(a.push(":"),a.push(b.port)):"https:"==b.protocol&&""!=b.port&&"0"!=b.port&&"443"!=b.port&&(a.push(":"),a.push(b.port));this.GH=a.join("");this.Oda=[location.protocol,"//",location.host].join("");
this.hx=this.FH=this.Qo=!1;this.oU=null;this.MB=[];this.ss=[];this.qk={};this.Ro=void 0;this.bx=c};_.g=_.Lv.prototype;_.g.show=function(){var a=this.Ro;a.style.position="fixed";a.style.width="100%";a.style.height="100%";a.style.left="0px";a.style.top="0px";a.style.right="0px";a.style.bottom="0px";a.style.display="block";a.style.zIndex="9999999";a.style.overflow="hidden";a.setAttribute("aria-hidden","false")};_.g.jc=function(){uv(this.Ro)};
_.g.pB=function(a){if(this.Qo)a&&a(this);else{if(!this.Ro){var b=ov.s2+this.Ib;var c=this.Ib;var d=location.hostname;var e,f=document.cookie.match("(^|;) ?G_ENABLED_IDPS=([^;]*)(;|$)");f&&2<f.length&&(e=f[2]);(f=e&&0<=ev(e.split("|"),c))?Bv(e,d):Bv(e?e+"|"+c:c,d);c=!f;var h=this.sU,k=this.Oda;d=this.xn;e=this.bx;e=void 0===e?!1:e;f=document.createElement("iframe");f.setAttribute("id",b);b=f.setAttribute;var l="allow-scripts allow-same-origin";document.requestStorageAccess&&gv(document.requestStorageAccess)&&
(l+=" allow-storage-access-by-user-activation");b.call(f,"sandbox",l);uv(f);f.setAttribute("frame-border","0");b=[h,"#origin=",encodeURIComponent(k)];b.push("&rpcToken=");b.push(encodeURIComponent(d));c&&b.push("&clearCache=1");_.bv&&b.push("&debug=1");e&&b.push("&supportBlocked3PCookies=1");document.body.appendChild(f);f.setAttribute("src",b.join(""));this.Ro=f}a&&this.MB.push(a)}};_.g.aB=function(){return this.Qo&&this.hx};_.g.Ao=function(){return this.oU};
Mv=function(a){for(var b=0;b<a.MB.length;b++)a.MB[b](a);a.MB=[]};_.Ov=function(a,b,c,d){if(a.Qo){if(a.Qo&&a.FH)throw a="Failed to communicate with IDP IFrame due to unitialization error: "+a.Ao(),cv(a),Error(a);Nv(a,{method:b,params:c},d)}else a.ss.push({Jp:{method:b,params:c},callback:d}),a.pB()};Nv=function(a,b,c){if(c){for(var d=b.id;!d||a.qk[d];)d=(new Date).getMilliseconds()+"-"+(1E6*Math.random()+1);b.id=d;a.qk[d]=c}b.rpcToken=a.xn;a.Ro.contentWindow.postMessage(_.mv.stringify(b),a.GH)};
Pv=function(a){if(a&&0<=a.indexOf("::"))throw Error("ja");};_.Lv.prototype.Jj=function(a,b,c,d,e,f,h,k,l){l=void 0===l?!1:l;Pv(f);b=_.hv(b);_.Ov(this,"getTokenResponse",{clientId:a,loginHint:c,request:b,sessionSelector:d,forceRefresh:h,skipCache:k,id:f,userInteracted:l},e)};_.Lv.prototype.nB=function(a,b,c,d,e){b=_.hv(b);_.Ov(this,"listIdpSessions",{clientId:a,request:b,sessionSelector:c,forceRefresh:e},d)};Qv=function(a,b,c){Pv(b.identifier);_.Ov(a,"getSessionSelector",b,c)};
_.Rv=function(a,b,c,d,e){Pv(b.identifier);_.Ov(a,"setSessionSelector",{domain:b.domain,crossSubDomains:b.crossSubDomains,policy:b.policy,id:b.id,hint:d,disabled:!!c},e)};Sv=function(a,b,c,d,e){b={clientId:b};c&&(b.pluginName=c);d&&(b.ackExtensionDate=d);_.Ov(a,"monitorClient",b,e)};_.Lv.prototype.revoke=_.da(9);_.Lv.prototype.Pt=_.da(11);ov.DA={};ov.GG=function(a){return ov.DA[a]};
ov.pB=function(a,b,c){c=void 0===c?!1:c;var d=ov.GG(a);if(!d){d=String;if(Ev){var e=new window.Uint32Array(1);Dv.getRandomValues(e);e=Number("0."+e[0])}else e=Gv,e+=parseInt(Iv.substr(0,20),16),Iv=Kv(Iv),e/=Hv+Math.pow(16,20);d=new _.Lv(a,d(2147483647*e),c);ov.DA[a]=d}d.pB(b)};ov.Z7=function(a){for(var b in ov.DA){var c=ov.GG(b);if(c&&c.Ro&&c.Ro.contentWindow==a.source&&c.GH==a.origin)return c}};ov.H8=function(a){for(var b in ov.DA){var c=ov.GG(b);if(c&&c.GH==a)return c}};ov=ov||{};
var Uv=function(){var a=[],b;for(b in Tv)a.push(Tv[b]);nv.call(this,a);this.Nm={};cv("EventBus is ready.")};fv(Uv,nv);var Tv={f4:"sessionSelectorChanged",vE:"sessionStateChanged",ZD:"authResult",q1:"displayIFrame"},Wv=function(a,b){var c=Vv;a&&b&&(c.Nm[a]||(c.Nm[a]=[]),0>ev(c.Nm[a],b)&&c.Nm[a].push(b))},Xv=function(a){var b=Vv;a&&(b.Nm[a]||(b.Nm[a]=[]))},Yv=function(a,b,c){return b&&a.Nm[b]&&0<=ev(a.Nm[b],c)};_.g=Uv.prototype;
_.g.Qca=function(a){var b,c=!!a.source&&(a.source===_.tv||a.source.opener===window);if(b=c?ov.H8(a.origin):ov.Z7(a)){try{var d=_.mv.parse(a.data)}catch(e){cv("Bad event, an error happened when parsing data.");return}if(!c){if(!d||!d.rpcToken||d.rpcToken!=b.xn){cv("Bad event, no RPC token.");return}if(d.id&&!d.method){c=d;if(a=b.qk[c.id])delete b.qk[c.id],a(c.result,c.error);return}}"fireIdpEvent"!=d.method?cv("Bad IDP event, method unknown."):(a=d.params)&&a.type&&this.rU[a.type]?(d=this.rU[a.type],
c&&!d.i5?cv("Bad IDP event. Source window cannot be a popup."):d.ht&&!d.ht.call(this,b,a)?cv("Bad IDP event."):d.Uf.call(this,b,a)):cv("Bad IDP event.")}else cv("Bad event, no corresponding Idp Stub.")};_.g.oea=function(a,b){return Yv(this,a.Ib,b.clientId)};_.g.nea=function(a,b){b=b.clientId;return!b||Yv(this,a.Ib,b)};_.g.x5=function(a,b){return Yv(this,a.Ib,b.clientId)};_.g.Uba=function(a,b){a.Qo=!0;a.hx=!!b.cookieDisabled;Mv(a);for(b=0;b<a.ss.length;b++)Nv(a,a.ss[b].Jp,a.ss[b].callback);a.ss=[]};
_.g.Tba=function(a,b){b={error:b.error};a.Qo=!0;a.FH=!0;a.oU=b;a.ss=[];Mv(a)};_.g.mC=function(a,b){b.originIdp=a.Ib;this.dispatchEvent(b)};var Vv=new Uv,Zv=Vv,$v={};$v.idpReady={Uf:Zv.Uba};$v.idpError={Uf:Zv.Tba};$v.sessionStateChanged={Uf:Zv.mC,ht:Zv.oea};$v.sessionSelectorChanged={Uf:Zv.mC,ht:Zv.nea};$v.authResult={Uf:Zv.mC,ht:Zv.x5,i5:!0};$v.displayIFrame={Uf:Zv.mC};Vv.rU=$v||{};jv(window,"message",function(a){Vv.Qca.call(Vv,a)});
_.aw=function(a,b){this.Se=!1;if(!a)throw Error("ka");var c=[],d;for(d in a)c.push(a[d]);nv.call(this,c);this.Kd=[location.protocol,"//",location.host].join("");this.Ge=b.crossSubDomains?b.domain||this.Kd:this.Kd;if(!b)throw Error("la");if(!b.idpId)throw Error("ma");if(!_.rv(b.idpId,"authServerUrl")||!_.rv(b.idpId,"idpIFrameUrl"))throw Error("na`"+b.idpId);this.Ib=b.idpId;this.mc=void 0;this.C6=!!b.disableTokenRefresh;this.w7=!!b.forceTokenRefresh;this.nfa=!!b.skipTokenCache;this.bx=!!b.supportBlocked3PCookies;
b.pluginName&&(this.Fca=b.pluginName);b.ackExtensionDate&&(this.Z4=b.ackExtensionDate);this.setOptions(b);this.Yt=[];this.hx=this.Tk=this.bV=!1;this.Cj=void 0;this.eY();this.Yd=void 0;var e=this,f=function(){cv("Token Manager is ready.");if(e.Yt.length)for(var h=0;h<e.Yt.length;h++)e.Yt[h].call(e);e.bV=!0;e.Yt=[]};ov.pB(this.Ib,function(h){e.Yd=h;h.Qo&&h.FH?(e.Tk=!0,e.Cj=h.Ao(),e.Zr(e.Cj)):(e.hx=h.aB(),e.mc?Sv(e.Yd,e.mc,e.Fca,e.Z4,function(k){var l=!!k.validOrigin,m=!!k.blocked,n=!!k.suppressed;k.invalidExtension?
(e.Cj={error:"Invalid value for ack_extension_date. Please refer to [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."},e.Tk=!0,e.Zr(e.Cj)):l?m?n?(dv("You have created a new client application that uses libraries for user authentication or authorization that are deprecated. New clients must use the new libraries instead. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."),
Wv(e.Ib,e.mc),f()):(e.Cj={error:"You have created a new client application that uses libraries for user authentication or authorization that are deprecated. New clients must use the new libraries instead. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."},e.Tk=!0,e.Zr(e.Cj)):(dv("Your client application uses libraries for user authentication or authorization that are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."),
Wv(e.Ib,e.mc),f()):(e.Cj={error:"Not a valid origin for the client: "+e.Kd+" has not been registered for client ID "+e.mc+". Please go to https://console.developers.google.com/ and register this origin for your project's client ID."},e.Tk=!0,e.Zr(e.Cj))}):(Xv(e.Ib),f()))},this.bx)};fv(_.aw,nv);_.g=_.aw.prototype;_.g.setOptions=function(){};_.g.eY=function(){};_.g.Zr=function(){};_.g.aB=function(){return this.hx};_.g.Ao=function(){return this.Cj};bw=function(a,b,c){return function(){b.apply(a,c)}};
_.cw=function(a,b,c){if(a.bV)b.apply(a,c);else{if(a.Tk)throw a.Cj;a.Yt.push(bw(a,b,c))}};_.aw.prototype.HP=_.da(12);_.aw.prototype.Pt=_.da(10);_.ew=function(a,b){_.aw.call(this,a,b);this.EX=new vv;this.ll=this.wp=null;dw(this)};fv(_.ew,_.aw);_.ew.prototype.setOptions=function(){};
var fw=function(a,b){a.Pe={crossSubDomains:!!b.crossSubDomains,id:b.sessionSelectorId,domain:a.Ge};b.crossSubDomains&&(a.Pe.policy=b.policy)},gw=function(a,b){if(!b.authParameters)throw Error("oa");if(!b.authParameters.scope)throw Error("pa");if(!b.authParameters.response_type)throw Error("qa");a.Gt=b.authParameters;a.Gt.redirect_uri||(a.Gt.redirect_uri=[location.protocol,"//",location.host,location.pathname].join(""));a.Tj=_.hv(b.rpcAuthParameters||a.Gt);if(!a.Tj.scope)throw Error("ra");if(!a.Tj.response_type)throw Error("sa");
a:{var c=a.Tj.response_type.split(" ");for(var d=0,e=c.length;d<e;d++)if(c[d]&&!kv[c[d]]){c=!0;break a}c=!1}if(c)throw Error("ta");b.enableSerialConsent&&(a.Tj.enable_serial_consent=!0);b.authResultIdentifier&&(a.y5=b.authResultIdentifier);b.spec_compliant&&(a.Tj.spec_compliant=b.spec_compliant)};
_.ew.prototype.eY=function(){var a=this;Vv.addEventListener(Tv.f4,function(b){a.Se&&a.Pe&&b.originIdp==a.Ib&&!b.crossSubDomains==!a.Pe.crossSubDomains&&b.domain==a.Pe.domain&&b.id==a.Pe.id&&a.UW(b)});Vv.addEventListener(Tv.vE,function(b){a.Se&&b.originIdp==a.Ib&&b.clientId==a.mc&&a.VW(b)});Vv.addEventListener(Tv.ZD,function(b){_.tv=void 0;a.Se&&b.originIdp==a.Ib&&b.clientId==a.mc&&b.id==a.dl&&(a.wp&&(window.clearTimeout(a.wp),a.wp=null),a.dl=void 0,a.Lv(b))});Vv.addEventListener(Tv.q1,function(b){a.Se&&
b.originIdp==a.Ib&&(b.jc?a.Yd.jc():a.Yd.show())})};_.ew.prototype.UW=function(){};_.ew.prototype.VW=function(){};_.ew.prototype.Lv=function(){};var iw=function(a,b){hw(a);a.C6||(a.ll=pv.u6(function(){a.Jj(!0)},b-3E5),navigator.onLine&&a.ll.start())},hw=function(a){a.ll&&(a.ll.clear(),a.ll=null)},dw=function(a){var b=window;lv()&&(b=document.body);jv(b,"online",function(){a.ll&&a.ll.start()});jv(b,"offline",function(){a.ll&&a.ll.clear()})};_.ew.prototype.Jj=function(){};_.ew.prototype.xW=_.da(13);
_.ew.prototype.Qaa=function(a,b){if(!this.mc)throw Error("xa");this.Yd.nB(this.mc,this.Tj,this.Pe,a,b)};_.ew.prototype.nB=function(a,b){_.cw(this,this.Qaa,[a,b])};_.kw=function(a){this.Le=void 0;this.Uh=!1;this.Ds=void 0;_.ew.call(this,_.jw,a)};fv(_.kw,_.ew);_.jw={cO:"noSessionBound",zt:"userLoggedOut",J0:"activeSessionChanged",vE:"sessionStateChanged",sO:"tokenReady",G4:"tokenFailed",ZD:"authResult",ERROR:"error"};
_.kw.prototype.setOptions=function(a){if(!a.clientId)throw Error("ya");this.mc=a.clientId;this.Ga=a.id;fw(this,a);gw(this,a)};_.kw.prototype.Zr=function(a){this.dispatchEvent({type:_.jw.ERROR,error:"idpiframe_initialization_failed",details:a.error,idpId:this.Ib})};var lw=function(a){hw(a);a.Ds=void 0;a.jB=void 0};_.g=_.kw.prototype;
_.g.UW=function(a){var b=a.newValue||{};if(this.Le!=b.hint||this.Uh!=!!b.disabled){a=this.Le;var c=!this.Le||this.Uh;lw(this);this.Le=b.hint;this.Uh=!!b.disabled;(b=!this.Le||this.Uh)&&!c?this.dispatchEvent({type:_.jw.zt,idpId:this.Ib}):b||(a!=this.Le&&this.dispatchEvent({type:_.jw.J0,idpId:this.Ib}),this.Le&&this.Jj())}};
_.g.VW=function(a){this.Uh||(this.Le?a.user||this.Ds?a.user==this.Le&&(this.Ds?a.sessionState?this.Ds=a.sessionState:(lw(this),this.dispatchEvent({type:_.jw.zt,idpId:this.Ib})):a.sessionState&&(this.Ds=a.sessionState,this.Jj())):this.Jj():this.dispatchEvent({type:_.jw.vE,idpId:this.Ib}))};_.g.Lv=function(a){this.dispatchEvent({type:_.jw.ZD,authResult:a.authResult})};_.g.Eu=_.da(15);_.g.yu=function(a){_.cw(this,this.uG,[a])};_.g.uG=function(a){Qv(this.Yd,this.Pe,a)};
_.g.wD=function(a,b,c,d){d=void 0===d?!1:d;if(!a)throw Error("za");lw(this);this.Le=a;this.Uh=!1;b&&_.Rv(this.Yd,this.Pe,!1,this.Le);this.Se=!0;this.Jj(c,!0,d)};_.g.start=function(){_.cw(this,this.Rw,[])};
_.g.Rw=function(){var a=this.mc==iv("client_id")?iv("login_hint"):void 0;var b=this.mc==iv("client_id")?iv("state"):void 0;this.bJ=b;if(a)window.history.replaceState?window.history.replaceState(null,document.title,window.location.href.split("#")[0]):window.location.href.hash="",this.wD(a,!0,!0,!0);else{var c=this;this.yu(function(d){c.Se=!0;d&&d.hint?(lw(c),c.Le=d.hint,c.Uh=!!d.disabled,c.Uh?c.dispatchEvent({type:_.jw.zt,idpId:c.Ib}):c.wD(d.hint)):(lw(c),c.Le=void 0,c.Uh=!(!d||!d.disabled),c.dispatchEvent({type:_.jw.cO,
autoOpenAuthUrl:!c.Uh,idpId:c.Ib}))})}};_.g.t7=function(){var a=this;this.yu(function(b){b&&b.hint?b.disabled?a.dispatchEvent({type:_.jw.zt,idpId:a.Ib}):a.Jj(!0):a.dispatchEvent({type:_.jw.cO,idpId:a.Ib})})};_.g.kS=function(){_.cw(this,this.t7,[])};
_.g.Jj=function(a,b,c){var d=this;this.Yd.Jj(this.mc,this.Tj,this.Le,this.Pe,function(e,f){(f=f||e.error)?"user_logged_out"==f?(lw(d),d.dispatchEvent({type:_.jw.zt,idpId:d.Ib})):(d.jB=null,d.dispatchEvent({type:_.jw.G4,idpId:d.Ib,error:f})):(d.jB=e,d.Ds=e.session_state,iw(d,e.expires_at),e.idpId=d.Ib,b&&d.bJ&&(e.state=d.bJ,d.bJ=void 0),d.dispatchEvent({type:_.jw.sO,idpId:d.Ib,response:e}))},this.Ga,a,!1,void 0===c?!1:c)};_.g.revoke=_.da(8);_.g.wY=_.da(16);
_.mw=function(a){this.Nn=null;_.ew.call(this,{},a);this.Se=!0};fv(_.mw,_.ew);_.g=_.mw.prototype;_.g.setOptions=function(a){if(!a.clientId)throw Error("ya");this.mc=a.clientId;this.Ga=a.id;fw(this,a);gw(this,a)};_.g.Zr=function(a){this.Nn&&(this.Nn({authResult:{error:"idpiframe_initialization_failed",details:a.error}}),this.Nn=null)};_.g.Lv=function(a){if(this.Nn){var b=this.Nn;this.Nn=null;b(a)}};_.g.Eu=_.da(14);_.g.yu=function(a){this.Tk?a(this.Ao()):_.cw(this,this.uG,[a])};
_.g.uG=function(a){Qv(this.Yd,this.Pe,a)};_.nw=function(a,b,c){a.Tk?c(a.Ao()):_.cw(a,a.jca,[b,c])};_.mw.prototype.jca=function(a,b){this.Yd.Jj(this.mc,this.Tj,a,this.Pe,function(c,d){d?b({error:d}):b(c)},this.Ga,this.w7,this.nfa)};_.mw.prototype.MV=_.da(17);
var ow=function(a){return Array.prototype.concat.apply([],arguments)},pw=function(){try{var a=Array.from((window.crypto||window.msCrypto).getRandomValues(new Uint8Array(64)))}catch(c){a=[];for(var b=0;64>b;b++)a[b]=Math.floor(256*Math.random())}return _.Gi(a,3).substring(0,64)},qw=function(){var a=navigator.userAgent.toLowerCase();return 0>a.indexOf("edge/")&&(-1<a.indexOf("chrome/")||-1<a.indexOf("crios/"))},rw=function(){var a=navigator.userAgent.toLowerCase();return-1<a.indexOf("firefox/")&&0>
a.indexOf("chrome/")&&0>a.indexOf("crios/")&&0>a.indexOf("safari/")},sw=function(a,b,c){if(!a.Se)throw Error("ua");b?_.Rv(a.Yd,a.Pe,!0,void 0,c):_.Rv(a.Yd,a.Pe,!0,a.Le,c)},tw=function(a){if(!a.Se)throw Error("ua");return a.jB},uw,vw,ww,xw,yw,zw,Aw,Bw,Cw,Ew;_.mw.prototype.MV=_.eb(17,function(a,b){var c=this.Yd,d=this.mc,e=this.Pe,f=_.hv(this.Tj);delete f.response_type;_.Ov(c,"getOnlineCode",{clientId:d,loginHint:a,request:f,sessionSelector:e},b)});
_.kw.prototype.wY=_.eb(16,function(a){tw(this)&&tw(this).access_token&&(this.Yd.revoke(this.mc,tw(this).access_token,a),sw(this,!0))});
_.kw.prototype.Eu=_.eb(15,function(){var a=this;return function(b){if(b&&b.authResult&&b.authResult.login_hint)if(a.aB()&&a.bx&&(qw()||rw())){b=b.authResult;var c=Date.now(),d=b.expires_in;b={access_token:b.access_token,token_type:b.token_type,login_hint:b.login_hint,expires_in:d,id_token:b.id_token,scope:b.scope,first_issued_at:c,expires_at:c+1E3*d,idpId:a.Ib};a.jB=b;a.dispatchEvent({type:_.jw.sO,idpId:a.Ib,response:b})}else a.wD(b.authResult.login_hint,a.Uh||b.authResult.login_hint!=a.Le,!0,!0)}});
_.mw.prototype.Eu=_.eb(14,function(a){var b=this;return function(c){c&&c.authResult&&c.authResult.login_hint?b.yu(function(d){_.Rv(b.Yd,b.Pe,d&&d.disabled,c.authResult.login_hint,function(){_.nw(b,c.authResult.login_hint,a)})}):a(c&&c.authResult&&c.authResult.error?c.authResult:c&&c.authResult&&!c.authResult.login_hint?{error:"wrong_response_type"}:{error:"unknown_error"})}});_.ew.prototype.xW=_.eb(13,function(){this.mc&&_.Ov(this.Yd,"startPolling",{clientId:this.mc,origin:this.Kd,id:this.dl})});
_.Lv.prototype.revoke=_.eb(9,function(a,b,c){_.Ov(this,"revoke",{clientId:a,token:b},c)});_.kw.prototype.revoke=_.eb(8,function(a){_.cw(this,this.wY,[a])});uw=function(){var a=navigator.userAgent,b;if(b=!!a&&-1!=a.indexOf("CriOS"))b=-1,(a=a.match(/CriOS\/(\d+)/))&&a[1]&&(b=parseInt(a[1],10)||-1),b=48>b;return b};
vw=function(){var a=navigator.userAgent.toLowerCase();if(!(-1<a.indexOf("safari/")&&0>a.indexOf("chrome/")&&0>a.indexOf("crios/")&&0>a.indexOf("android")))return!1;var b=RegExp("version/(\\d+)\\.(\\d+)[\\.0-9]*").exec(navigator.userAgent.toLowerCase());if(!b||3>b.length)return!1;a=parseInt(b[1],10);b=parseInt(b[2],10);return 12<a||12==a&&1<=b};
ww=function(a,b,c,d,e,f,h){var k=_.rv(a,"authServerUrl");if(!k)throw Error("ea`"+a);a=_.hv(d);a.response_type=h||"permission";a.client_id=c;a.ss_domain=b;if(f&&f.extraQueryParams)for(var l in f.extraQueryParams)a[l]=f.extraQueryParams[l];(b=e)&&!(b=vw())&&(b=navigator.userAgent.toLowerCase(),-1<b.indexOf("ipad;")||-1<b.indexOf("iphone;")?(b=RegExp("os (\\d+)_\\d+(_\\d+)? like mac os x").exec(navigator.userAgent.toLowerCase()),b=!b||2>b.length?!1:14<=parseInt(b[1],10)):b=!1);b&&!a.prompt&&(a.prompt=
"select_account");k+=0>k.indexOf("?")?"?":"&";b=[];for(var m in a)if(a.hasOwnProperty(m)){c=a[m];if(null===c||void 0===c)c="";b.push(encodeURIComponent(m)+"="+encodeURIComponent(c))}return k+b.join("&")};
xw=function(a,b,c,d){if(!a.mc)throw Error("va");a.dl=c||a.y5||"auth"+Math.floor(1E6*Math.random()+1);b=b||{};b.extraQueryParams=b.extraQueryParams||{};if(!b.extraQueryParams.redirect_uri){var e=a.Kd.split("//");c=b.extraQueryParams;var f=e[0],h=f.indexOf(":");0<h&&(f=f.substring(0,h));e=["storagerelay://",f,"/",e[1],"?"];e.push("id="+a.dl);c.redirect_uri=e.join("")}return ww(a.Ib,a.Ge,a.mc,a.Gt,!0,b,d)};yw=function(a,b,c){if(!a.mc)throw Error("va");return ww(a.Ib,a.Ge,a.mc,a.Gt,!1,b,c)};
zw=function(a){if(!a)return"permission token";var b=a.split(" ");if(-1<b.indexOf("token")||-1<b.indexOf("code")||-1<b.indexOf("gsession"))return a;b.push("token");return b.join(" ")};Aw=function(a,b){a.wp&&window.clearTimeout(a.wp);a.wp=window.setTimeout(function(){a.dl==b&&(_.tv=void 0,a.wp=null,a.dl=void 0,a.Lv({authResult:{error:"popup_closed_by_user"}}))},1E3)};
Bw=function(a,b,c){if(!a.mc)throw Error("wa");c=c||{};a.aB()&&a.bx&&(qw()||rw())&&(c.responseType=zw(c.responseType));c=xw(a,c.sessionMeta,c.oneTimeId,c.responseType);(Object.hasOwnProperty.call(window,"ActiveXObject")&&!window.ActiveXObject||uw())&&_.cw(a,a.xW,[]);var d=a.dl;a.EX.open(c,b,function(){a.dl==d&&Aw(a,d)},function(){a.dl=void 0;a.Lv({authResult:{error:"popup_blocked_by_browser"}})})};Cw=function(a,b,c){a.Tk?c(a.Ao()):_.cw(a,a.MV,[b,c])};
_.Dw=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var h=a[c++],k=a[c++];e=((e&7)<<18|(f&63)<<12|(h&63)<<6|k&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],h=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|h&63)}return b.join("")};
Ew=function(a){var b=[];_.Hi(a,function(c){b.push(c)});return b};_.Fw=function(a,b){_.qj[b||"token"]=a};_.Gw=function(a){delete _.qj[a||"token"]};_.mv={parse:function(a){a=_.Rg("["+String(a)+"]");if(!1===a||1!==a.length)throw new SyntaxError("JSON parsing failed.");return a[0]},stringify:function(a){return _.Sg(a)}};_.mw.prototype.gG=function(a,b){_.cw(this,this.j7,[a,b])};_.mw.prototype.j7=function(a,b){this.Yd.gG(this.mc,a,this.Tj,this.Pe,b)};_.Lv.prototype.gG=function(a,b,c,d,e){c=_.hv(c);_.Ov(this,"gsi:fetchLoginHint",{clientId:a,loginHint:b,request:c,sessionSelector:d},e)};var Hw,Iw=["client_id","cookie_policy","scope"],Jw="client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint ux_mode redirect_uri state prompt oidc_spec_compliant nonce enable_serial_consent include_granted_scopes response_type session_selection plugin_name ack_extension_date gsiwebsdk".split(" "),Kw=["authuser","after_redirect","access_type","hl"],Lw=["login_hint","prompt"],Mw={clientid:"client_id",cookiepolicy:"cookie_policy"},Nw=["approval_prompt",
"authuser","login_hint","prompt","hd"],Ow=["login_hint","g-oauth-window","status"],Pw=Math.min(_.Hf("oauth-flow/authWindowWidth",599),screen.width-20),Qw=Math.min(_.Hf("oauth-flow/authWindowHeight",600),screen.height-30);var Rw=function(a){_.fb.call(this,a)};_.A(Rw,_.fb);Rw.prototype.name="gapi.auth2.ExternallyVisibleError";var Sw=function(){};Sw.prototype.select=function(a,b){if(a.sessions&&1==a.sessions.length&&(a=a.sessions[0],a.login_hint)){b(a);return}b()};var Tw=function(){};Tw.prototype.select=function(a,b){if(a.sessions&&a.sessions.length)for(var c=0;c<a.sessions.length;c++){var d=a.sessions[c];if(d.login_hint){b(d);return}}b()};var Uw=function(a){this.z5=a};
Uw.prototype.select=function(a,b){if(a.sessions)for(var c=0;c<a.sessions.length;c++){var d=a.sessions[c];if(d.session_state&&d.session_state.extraQueryParams&&d.session_state.extraQueryParams.authuser==this.z5){d.login_hint?b(d):b();return}}b()};var Vw=function(a){this.Ce=a;this.PC=[]};Vw.prototype.select=function(a){var b=0,c=this,d=function(e){if(e)a(e);else{var f=c.PC[b];f?(b++,c.Ce.nB(function(h){h?f.select(h,d):d()})):a()}};d()};var Ww=function(a){a=new Vw(a);a.PC.push(new Sw);return a},Xw=function(a){a=new Vw(a);a.PC.push(new Tw);return a},Yw=function(a,b){void 0===b||null===b?b=Ww(a):(a=new Vw(a),a.PC.push(new Uw(b)),b=a);return b};var Zw=function(a){this.Uf=a;this.isActive=!0};Zw.prototype.remove=function(){this.isActive=!1};Zw.prototype.trigger=function(){};var $w=function(a){this.remove=function(){a.remove()};this.trigger=function(){a.trigger()}},ax=function(){this.xc=[]};ax.prototype.add=function(a){this.xc.push(a)};ax.prototype.notify=function(a){for(var b=this.xc,c=[],d=0;d<b.length;d++){var e=b[d];e.isActive&&(c.push(e),_.Uk(bx(e.Uf,a)))}this.xc=c};var bx=function(a,b){return function(){a(b)}};var dx=function(a){this.Ba=null;this.kga=new cx(this);this.xc=new ax;void 0!=a&&this.set(a)};dx.prototype.set=function(a){a!=this.Ba&&(this.Ba=a,this.kga.value=a,this.xc.notify(this.Ba))};dx.prototype.get=function(){return this.Ba};dx.prototype.ma=function(a){a=new ex(this,a);this.xc.add(a);return a};dx.prototype.get=dx.prototype.get;var ex=function(a,b){Zw.call(this,b);this.Uaa=a};_.A(ex,Zw);ex.prototype.trigger=function(){var a=this.Uf;a(this.Uaa.get())};
var cx=function(a){this.value=null;this.ma=function(b){return new $w(a.ma(b))}};var fx={Aia:"fetch_basic_profile",Bja:"login_hint",Yka:"prompt",fla:"redirect_uri",xla:"scope",Oma:"ux_mode",hma:"state"},gx=function(a){this.Oa={};if(a&&!_.yi(a))if("function"==typeof a.get)this.Oa=a.get();else for(var b in fx){var c=fx[b];c in a&&(this.Oa[c]=a[c])}};gx.prototype.get=function(){return this.Oa};gx.prototype.vZ=function(a){this.Oa.scope=a;return this};gx.prototype.Nu=function(){return this.Oa.scope};
var hx=function(a,b){var c=a.Oa.scope;b=ow(b.split(" "),c?c.split(" "):[]);_.Jk(b);a.Oa.scope=b.join(" ")};_.g=gx.prototype;_.g.Pea=function(a){this.Oa.prompt=a;return this};_.g.J8=function(){return this.Oa.prompt};_.g.rea=function(){_.Wg.warn("Property app_package_name no longer supported and was not set");return this};_.g.H7=function(){_.Wg.warn("Property app_package_name no longer supported")};_.g.Ef=function(a){this.Oa.state=a};_.g.getState=function(){return this.Oa.state};var ix=function(){return["toolbar=no","location="+(window.opera?"no":"yes"),"directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no","width="+Pw,"height="+Qw,"top="+(screen.height-Qw)/2,"left="+(screen.width-Pw)/2].join()},jx=function(a){a=a&&a.id_token;if(!a||!a.split(".")[1])return null;a=(a.split(".")[1]+"...").replace(/^((....)+).?.?.?$/,"$1");return JSON.parse(_.Dw(Ew(a)))},kx=function(){Hw=_.Hf("auth2/idpValue","google");var a=_.Hf("oauth-flow/authUrl","https://accounts.google.com/o/oauth2/auth"),
b=_.Hf("oauth-flow/idpIframeUrl","https://accounts.google.com/o/oauth2/iframe");_.sv(Hw,{authServerUrl:a,idpIFrameUrl:b})},lx=function(a,b,c){for(var d=0;d<b.length;d++){var e=b[d];if(d===b.length-1){a[e]=c;break}_.Wb(a[e])||(a[e]={});a=a[e]}},mx=function(){var a=window.location.origin;a||(a=window.location.protocol+"//"+window.location.host);return a},ox=function(){var a=nx();a.storage_path&&window.sessionStorage.setItem(a.storage_path,mx()+window.location.pathname);if("enforced"==a.status.toLowerCase())throw new Rw("gapi.auth2 is disabled on this website, but it is still used on page "+
window.location.href);"informational"==a.status.toLowerCase()&&_.Wg.warn("gapi.auth2 is disabled on this website, but it is still used on page "+window.location.href)};var px=function(a){var b=a?(b=jx(a))?b.sub:null:null;this.Ga=b;this.Sc=a?_.Lk(a):null};_.g=px.prototype;_.g.getId=function(){return this.Ga};_.g.DG=function(){var a=jx(this.Sc);return a?a.hd:null};_.g.Jg=function(){return!!this.Sc};_.g.wm=function(a){if(a)return this.Sc;a=qx;var b=_.Lk(this.Sc);!a.QA||a.AH||a.s$||(delete b.access_token,delete b.scope);return b};_.g.bK=function(){return qx.bK()};_.g.Dl=function(){this.Sc=null};_.g.i8=function(){return this.Sc?this.Sc.scope:null};
_.g.update=function(a){this.Ga=a.Ga;this.Sc=a.Sc;this.Sc.id_token?this.my=new rx(this.Sc):this.my&&(this.my=null)};var sx=function(a){return a.Sc&&"object"==typeof a.Sc.session_state?_.Lk(a.Sc.session_state.extraQueryParams||{}):{}};_.g=px.prototype;_.g.sG=function(){var a=sx(this);return a&&void 0!==a.authuser&&null!==a.authuser?a.authuser:null};
_.g.Cl=function(a){var b=qx,c=new gx(a);b.AH=c.Nu()?!0:!1;qx.QA&&hx(c,"openid profile email");return new _.el(function(d,e){var f=sx(this);f.login_hint=this.getId();f.scope=c.Nu();tx(b,d,e,f)},this)};_.g.Pu=function(a){return new _.el(function(b,c){var d=a||{},e=qx;d.login_hint=this.getId();e.Pu(d).then(b,c)},this)};_.g.e9=function(a){return this.Cl(a)};_.g.disconnect=function(){return qx.disconnect()};_.g.J7=function(){return this.my};
_.g.xA=function(a){if(!this.Jg())return!1;var b=this.Sc&&this.Sc.scope?this.Sc.scope.split(" "):"";return _.zc(a?a.split(" "):[],function(c){return _.ib(b,c)})};var rx=function(a){a=jx(a);this.B7=a.sub;this.dg=a.name;this.a9=a.given_name;this.h7=a.family_name;this.xU=a.picture;this.ez=a.email};_.g=rx.prototype;_.g.getId=function(){return this.B7};_.g.Fg=function(){return this.dg};_.g.g8=function(){return this.a9};_.g.b8=function(){return this.h7};_.g.o8=function(){return this.xU};_.g.vo=function(){return this.ez};var nx,ux;nx=function(){var a=_.fj.get("G_AUTH2_MIGRATION");if(!a)return{status:"none"};a=/(enforced|informational)(?::(.*))?/i.exec(a);return a?{status:a[1].toLowerCase(),storage_path:a[2]}:(_.Wg.warn("The G_AUTH2_MIGRATION cookie value is not valid."),{status:"none"})};ux=function(a){var b=location;if(a&&"none"!=a)return"single_host_origin"==a?b.protocol+"//"+b.host:a};
_.vx=function(a){if(!a)throw new Rw("No cookiePolicy");var b=window.location.hostname;"single_host_origin"==a&&(a=window.location.protocol+"//"+b);if("none"==a)return null;var c=/^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);if(!c)throw new Rw("Invalid cookiePolicy");a=c[2];c=c[1];var d={};d.dotValue=a.split(".").length;d.isSecure=-1!=c.indexOf("https");d.domain=a;if(!_.Tj(b,"."+a)&&!_.Tj(b,a))throw new Rw("Invalid cookiePolicy domain");return d};var xx=function(a){var b=a||{},c=wx();_.uc(Jw,function(d){"undefined"===typeof b[d]&&"undefined"!==typeof c[d]&&(b[d]=c[d])});return b},wx=function(){for(var a={},b=document.getElementsByTagName("meta"),c=0;c<b.length;++c)if(b[c].name){var d=b[c].name;if(0==d.indexOf("google-signin-")){d=d.substring(14);var e=b[c].content;Mw[d]&&(d=Mw[d]);_.ib(Jw,d)&&e&&(a[d]="true"==e?!0:"false"==e?!1:e)}}return a},yx=function(a){return String(a).replace(/_([a-z])/g,function(b,c){return c.toUpperCase()})},zx=function(a){_.uc(Jw,
function(b){var c=yx(b);"undefined"!==typeof a[c]&&"undefined"===typeof a[b]&&(a[b]=a[c],delete a[c])})},Ax=function(a){a=xx(a);zx(a);a.cookie_policy||(a.cookie_policy="single_host_origin");var b=Jw+Kw,c;for(c in a)0>b.indexOf(c)&&delete a[c];return a},Bx=function(a,b){if(!a)throw new Rw("Empty initial options.");for(var c=0;c<Iw.length;++c)if(!(b&&"scope"==Iw[c]||a[Iw[c]]))throw new Rw("Missing required parameter '"+Iw[c]+"'");_.vx(a.cookie_policy)},Dx=function(a){var b={authParameters:{redirect_uri:void 0,
response_type:"token id_token",scope:a.scope,"openid.realm":a.openid_realm,include_granted_scopes:!0},clientId:a.client_id,crossSubDomains:!0,domain:ux(a.cookie_policy),disableTokenRefresh:!!a.disable_token_refresh,idpId:Hw};Cx(b,a);_.uc(Lw,function(d){a[d]&&(b.authParameters[d]=a[d])});"boolean"==typeof a.enable_serial_consent&&(b.enableSerialConsent=a.enable_serial_consent);if(a.plugin_name)b.pluginName=a.plugin_name;else{var c=_.Hf("auth2/pluginName");c&&(b.pluginName=c)}a.ack_extension_date&&
(b.authParameters.ack_extension_date=a.ack_extension_date,b.ackExtensionDate=a.ack_extension_date);return b},Cx=function(a,b){var c=b.oidc_spec_compliant;b=b.nonce;c&&(a.spec_compliant=c,b=b||pw());b&&(a.authParameters.nonce=b,a.forceTokenRefresh=!0,a.skipTokenCache=!0)},Ix=function(a){var b=a.client_id,c=a.cookie_policy,d=a.scope,e=a.openid_realm,f=a.hosted_domain,h=a.oidc_spec_compliant,k=a.nonce,l=Ex(a),m={authParameters:{response_type:l,scope:d,"openid.realm":e},rpcAuthParameters:{response_type:l,
scope:d,"openid.realm":e},clientId:b,crossSubDomains:!0,domain:ux(c),idpId:Hw};f&&(m.authParameters.hd=f,m.rpcAuthParameters.hd=f);h&&(m.rpcAuthParameters.spec_compliant=h,k=k||pw());k&&(m.authParameters.nonce=k,m.rpcAuthParameters.nonce=k,m.forceTokenRefresh=!0,m.skipTokenCache=!0);_.uc(Lw.concat(Kw),function(n){a[n]&&(m.authParameters[n]=a[n])});void 0!==a.authuser&&null!==a.authuser&&(m.authParameters.authuser=a.authuser);"boolean"==typeof a.include_granted_scopes&&(b=new Fx(a.response_type||"token"),
Gx(b)&&(m.authParameters.include_granted_scopes=a.include_granted_scopes),Hx(b)&&(m.rpcAuthParameters.include_granted_scopes=a.include_granted_scopes,!1===a.include_granted_scopes&&(m.forceTokenRefresh=!0,m.skipTokenCache=!0)));"boolean"==typeof a.enable_serial_consent&&(m.enableSerialConsent=a.enable_serial_consent);a.plugin_name?m.pluginName=a.plugin_name:(b=_.Hf("auth2/pluginName"))&&(m.pluginName=b);a.ack_extension_date&&(m.authParameters.ack_extension_date=a.ack_extension_date,m.rpcAuthParameters.ack_extension_date=
a.ack_extension_date,m.ackExtensionDate=a.ack_extension_date);return m},Ex=function(a){a=new Fx(a.response_type||"token");var b=[];Hx(a)&&b.push("token");Jx(a,"id_token")&&b.push("id_token");0==b.length&&(b=["token","id_token"]);return b.join(" ")},Kx=["permission","id_token"],Lx=/(^|[^_])token/,Fx=function(a){this.ws=[];this.RH(a)};
Fx.prototype.RH=function(a){a?((0<=a.indexOf("permission")||a.match(Lx))&&this.ws.push("permission"),0<=a.indexOf("id_token")&&this.ws.push("id_token"),0<=a.indexOf("code")&&this.ws.push("code")):this.ws=Kx};var Gx=function(a){return Jx(a,"code")},Hx=function(a){return Jx(a,"permission")};Fx.prototype.toString=function(){return this.ws.join(" ")};var Jx=function(a,b){var c=!1;_.uc(a.ws,function(d){d==b&&(c=!0)});return c};var Nx=function(a,b,c){this.lp=b;this.Iba=a;for(var d in a)a.hasOwnProperty(d)&&Mx(this,d);if(c&&c.length)for(a=0;a<c.length;a++)this[c[a]]=this.lp[c[a]]},Mx=function(a,b){a[b]=function(){return a.Iba[b].apply(a.lp,arguments)}};Nx.prototype.then=function(a,b,c){var d=this;return _.il().then(function(){return Ox(d.lp,a,b,c)})};_.Ok(Nx);var qx,Px,Rx;qx=null;_.Qx=function(){return qx?Px():null};Px=function(){return new Nx(Rx.prototype,qx,["currentUser","isSignedIn"])};
Rx=function(a){delete a.include_granted_scopes;this.Oa=Dx(a);this.r6=a.cookie_policy;this.s$=!!a.scope;(this.QA=!1!==a.fetch_basic_profile)&&(this.Oa.authParameters.scope=Sx(this,"openid profile email"));if(_.cj.GSI_SUPPORT_BLOCKED_3P_COOKIES||"1"===_.fj.get("GSI_ALLOW_3PCD"))this.Oa.supportBlocked3PCookies=!0;this.gv=a.hosted_domain;this.hga=a.ux_mode||"popup";this.Xca=a.redirect_uri||null;this.Uo()};
Rx.prototype.Uo=function(){this.currentUser=new dx(new px(null));this.isSignedIn=new dx(!1);this.Ce=new _.kw(this.Oa);this.WA=this.Gr=null;this.Gaa=new _.el(function(a,b){this.Gr=a;this.WA=b},this);this.LB={};this.tv=!0;Tx(this);this.Ce.start()};
var Tx=function(a){a.Ce.addEventListener("error",function(b){a.tv&&a.Gr&&(a.tv=!1,a.WA({error:b.error,details:b.details}),a.Gr=null,a.WA=null)});a.Ce.addEventListener("authResult",function(b){b&&b.authResult&&a.Mf(b);a.Ce.Eu()(b)});a.Ce.addEventListener("tokenReady",function(b){var c=new px(b.response);if(a.gv&&a.gv!=c.DG())a.Mf({type:"tokenFailed",reason:"Account domain does not match hosted_domain specified by gapi.auth2.init.",accountDomain:c.DG(),expectedDomain:a.gv});else{a.currentUser.get().update(c);
var d=a.currentUser;d.xc.notify(d.Ba);a.isSignedIn.set(!0);c=c.sG();(d=_.vx(a.r6))&&c&&_.fj.set(["G_AUTHUSER_","https:"===window.location.protocol&&d.nf?"S":"H",d.hj].join(""),c,{domain:d.domain,secure:d.isSecure});_.Fw(b.response);a.Mf(b)}});a.Ce.addEventListener("noSessionBound",function(b){a.tv&&b.autoOpenAuthUrl?(a.tv=!1,Ww(a.Ce).select(function(c){if(c&&c.login_hint){var d=a.Ce;_.cw(d,d.wD,[c.login_hint,!0])}else a.currentUser.set(new px(null)),a.isSignedIn.set(!1),_.Gw(),a.Mf(b)})):(a.currentUser.set(new px(null)),
a.isSignedIn.set(!1),_.Gw(),a.Mf(b))});a.Ce.addEventListener("tokenFailed",function(b){a.Mf(b)});a.Ce.addEventListener("userLoggedOut",function(b){a.currentUser.get().Dl();var c=a.currentUser;c.xc.notify(c.Ba);a.isSignedIn.set(!1);_.Gw();a.Mf(b)})},Ox=function(a,b,c,d){return a.Gaa.then(function(e){if(b)return b(e.c9)},c,d)};Rx.prototype.Mf=function(a){if(a){this.tv=!1;var b=a.type||"";if(this.LB[b])this.LB[b](a);this.Gr&&(this.Gr({c9:this}),this.WA=this.Gr=null)}};
var Ux=function(a,b){_.ob(b,function(c,d){a.LB[d]=function(e){a.LB={};c(e)}})},tx=function(a,b,c,d){d=_.Lk(d);a.gv&&(d.hd=a.gv);var e=d.ux_mode||a.hga;delete d.ux_mode;delete d.app_package_name;var f={sessionMeta:{extraQueryParams:d},responseType:"permission id_token"};"redirect"==e?(d.redirect_uri||(d.redirect_uri=a.Xca||mx()+window.location.pathname),Vx(a,f)):(delete d.redirect_uri,Wx(a,f),Ux(a,{authResult:function(h){h.authResult&&h.authResult.error?c(h.authResult):Ux(a,{tokenReady:function(){b(a.currentUser.get())},
tokenFailed:c})}}))};Rx.prototype.Cl=function(a){return new _.el(function(b,c){var d=new gx(a);this.AH=d.Nu()?!0:!1;this.QA?(d.Oa.fetch_basic_profile=!0,hx(d,"email profile openid")):d.Oa.fetch_basic_profile=!1;var e=Sx(this,d.Nu());d.vZ(e);tx(this,b,c,d.get())},this)};
Rx.prototype.Pu=function(a){var b=a||{};this.AH=!!b.scope;a=Sx(this,b.scope);if(""==a)return _.jl({error:"Missing required parameter: scope"});var c={scope:a,access_type:"offline",include_granted_scopes:!0};_.uc(Nw,function(d){null!=b[d]&&(c[d]=b[d])});c.hasOwnProperty("prompt")||c.hasOwnProperty("approval_prompt")||(c.prompt="consent");"postmessage"==b.redirect_uri||void 0==b.redirect_uri?a=Xx(this,c):(c.redirect_uri=b.redirect_uri,Vx(this,{sessionMeta:{extraQueryParams:c},responseType:"code id_token"}),
a=_.il({message:"Redirecting to IDP."}));return a};
var Xx=function(a,b){b.origin=mx();delete b.redirect_uri;Wx(a,{sessionMeta:{extraQueryParams:b},responseType:"code permission id_token"});return new _.el(function(c,d){Ux(this,{authResult:function(e){(e=e&&e.authResult)&&e.code?c({code:e.code}):d(e&&e.error?e:{error:"unknown_error"})}})},a)},Wx=function(a,b){lx(b,["sessionMeta","extraQueryParams","gsiwebsdk"],"2");Bw(a.Ce,ix(),b)},Vx=function(a,b){lx(b,["sessionMeta","extraQueryParams","gsiwebsdk"],"2");b=b||{};window.location.assign(yw(a.Ce,b.sessionMeta,
b.responseType))};Rx.prototype.Dl=function(a){var b=a||!1;return new _.el(function(c){sw(this.Ce,b,function(){c()})},this)};Rx.prototype.QS=function(){return this.Oa.authParameters.scope};var Sx=function(a,b){a=a.QS();b=ow(b?b.split(" "):[],a?a.split(" "):[]);_.Jk(b);return b.join(" ")};Rx.prototype.bK=function(){var a=this;return new _.el(function(b,c){Ux(a,{noSessionBound:c,tokenFailed:c,userLoggedOut:c,tokenReady:function(d){b(d.response)}});a.Ce.kS()})};
Rx.prototype.gP=function(a,b,c,d){if(a="string"===typeof a?document.getElementById(a):a){var e=this;_.nk(a,"click",function(){var f=b;"function"==typeof b&&(f=b());e.Cl(f).then(function(h){c&&c(h)},function(h){d&&d(h)})})}else d&&d({error:"Could not attach click handler to the element. Reason: element not found."})};Rx.prototype.disconnect=function(){return new _.el(function(a){this.Ce.revoke(function(){a()})},this)};Rx.prototype.attachClickHandler=Rx.prototype.gP;var Yx;_.el.prototype["catch"]=_.el.prototype.gx;Yx=null;_.Zx=function(a){ox();a=Ax(a);if(qx){if(_.Kk(a,Yx||{}))return Px();throw new Rw("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");}Bx(a,!1!==a.fetch_basic_profile);kx();Yx=a;qx=new Rx(a);_.zf.ga=1;return Px()};var ay,cy,$x,ey,dy,fy;_.by=function(a,b){ox();kx();a=Ax(a);Bx(a);var c=Ix(a),d=new _.mw(c);"none"==a.prompt?$x(d,a,function(e){e.status=e.error?{signed_in:!1,method:null,google_logged_in:!1}:{signed_in:!0,method:"AUTO",google_logged_in:!0};b(e)}):ay(d,a,function(e){if(e.error)e.status={signed_in:!1,method:null,google_logged_in:!1};else{var f=e.access_token||e.id_token;e.status={signed_in:!!f,method:"PROMPT",google_logged_in:!!f}}e["g-oauth-window"]=d.EX.Ii;b(e)})};
ay=function(a,b,c){var d=new Fx(b.response_type);c=cy(a,d,c);var e={responseType:d.toString()};lx(e,["sessionMeta","extraQueryParams","gsiwebsdk"],b.gsiwebsdk||"2");Gx(d)&&lx(e,["sessionMeta","extraQueryParams","access_type"],b.access_type||"offline");b.redirect_uri&&lx(e,["sessionMeta","extraQueryParams","redirect_uri"],b.redirect_uri);b.state&&lx(e,["sessionMeta","extraQueryParams","state"],b.state);b=ix();a.Tk?c({authResult:{error:"idpiframe_initialization_failed",details:a.Ao().error}}):(a.Nn=
c,Bw(a,b,e))};cy=function(a,b,c){if(Hx(b)){var d=dy(c);return function(e){e&&e.authResult&&!e.authResult.error?a.Eu(function(f){f&&!f.error?(f=_.Lk(f),Gx(b)&&(f.code=e.authResult.code),d(f)):d(f?f:{error:"unknown_error"})})(e):d(e&&e.authResult?e.authResult:{error:"unknown_error"})}}return function(e){e&&e.authResult&&!e.authResult.error?c(_.Lk(e.authResult)):c(e&&e.authResult?e.authResult:{error:"unknown_error"})}};
$x=function(a,b,c){if(Gx(new Fx(b.response_type))&&"offline"==b.access_type)c({error:"immediate_failed",error_subtype:"access_denied"});else{var d=dy(c);b.login_hint?a.gG(b.login_hint,function(e){e?ey(a,b,e,d):c({error:"immediate_failed",error_subtype:"access_denied"})}):void 0!==b.authuser&&null!==b.authuser?Yw(a,b.authuser).select(function(e){e&&e.login_hint?ey(a,b,e.login_hint,d):d({error:"immediate_failed",error_subtype:"access_denied"})}):a.yu(function(e){e&&e.hint?ey(a,b,e.hint,d):e&&e.disabled?
d({error:"immediate_failed",error_subtype:"no_user_bound"}):("first_valid"==b.session_selection?Xw(a):Ww(a)).select(function(f){f&&f.login_hint?ey(a,b,f.login_hint,d):d({error:"immediate_failed",error_subtype:"no_user_bound"})})})}};ey=function(a,b,c,d){b=new Fx(b.response_type);var e=0,f={},h=function(k){!k||k.error?d(k):(e--,_.sb(f,k),0==e&&d(f))};(Hx(b)||Jx(b,"id_token"))&&e++;Gx(b)&&e++;(Hx(b)||Jx(b,"id_token"))&&_.nw(a,c,h);Gx(b)&&Cw(a,c,h)};
dy=function(a){return function(b){if(!b||b.error)_.Gw(),b?a(b):a({error:"unknown_error"});else{if(b.access_token){var c=_.Lk(b);fy(c);delete c.id_token;delete c.code;_.Fw(c)}a(b)}}};fy=function(a){_.uc(Ow,function(b){delete a[b]})};_.r("gapi.auth2.init",_.Zx);_.r("gapi.auth2.authorize",function(a,b){if(null!=qx)throw new Rw("gapi.auth2.authorize cannot be called after GoogleAuth has been initialized (i.e. with a call to gapi.auth2.init, or gapi.client.init when given a 'clientId' and a 'scope' parameters).");_.by(a,function(c){fy(c);b(c)})});_.r("gapi.auth2._gt",function(){return _.rj()});_.r("gapi.auth2.enableDebugLogs",function(a){a=!1!==a;_.bv="0"!=a&&!!a});_.r("gapi.auth2.getAuthInstance",_.Qx);
_.r("gapi.auth2.BasicProfile",rx);_.r("gapi.auth2.BasicProfile.prototype.getId",rx.prototype.getId);_.r("gapi.auth2.BasicProfile.prototype.getName",rx.prototype.Fg);_.r("gapi.auth2.BasicProfile.prototype.getGivenName",rx.prototype.g8);_.r("gapi.auth2.BasicProfile.prototype.getFamilyName",rx.prototype.b8);_.r("gapi.auth2.BasicProfile.prototype.getImageUrl",rx.prototype.o8);_.r("gapi.auth2.BasicProfile.prototype.getEmail",rx.prototype.vo);_.r("gapi.auth2.GoogleAuth",Rx);
_.r("gapi.auth2.GoogleAuth.prototype.attachClickHandler",Rx.prototype.gP);_.r("gapi.auth2.GoogleAuth.prototype.disconnect",Rx.prototype.disconnect);_.r("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess",Rx.prototype.Pu);_.r("gapi.auth2.GoogleAuth.prototype.signIn",Rx.prototype.Cl);_.r("gapi.auth2.GoogleAuth.prototype.signOut",Rx.prototype.Dl);_.r("gapi.auth2.GoogleAuth.prototype.getInitialScopes",Rx.prototype.QS);_.r("gapi.auth2.GoogleUser",px);_.r("gapi.auth2.GoogleUser.prototype.grant",px.prototype.e9);
_.r("gapi.auth2.GoogleUser.prototype.getId",px.prototype.getId);_.r("gapi.auth2.GoogleUser.prototype.isSignedIn",px.prototype.Jg);_.r("gapi.auth2.GoogleUser.prototype.getAuthResponse",px.prototype.wm);_.r("gapi.auth2.GoogleUser.prototype.getBasicProfile",px.prototype.J7);_.r("gapi.auth2.GoogleUser.prototype.getGrantedScopes",px.prototype.i8);_.r("gapi.auth2.GoogleUser.prototype.getHostedDomain",px.prototype.DG);_.r("gapi.auth2.GoogleUser.prototype.grantOfflineAccess",px.prototype.Pu);
_.r("gapi.auth2.GoogleUser.prototype.hasGrantedScopes",px.prototype.xA);_.r("gapi.auth2.GoogleUser.prototype.reloadAuthResponse",px.prototype.bK);_.r("gapi.auth2.LiveValue",dx);_.r("gapi.auth2.LiveValue.prototype.listen",dx.prototype.ma);_.r("gapi.auth2.LiveValue.prototype.get",dx.prototype.get);_.r("gapi.auth2.SigninOptionsBuilder",gx);_.r("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName",gx.prototype.H7);_.r("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName",gx.prototype.rea);
_.r("gapi.auth2.SigninOptionsBuilder.prototype.getScope",gx.prototype.Nu);_.r("gapi.auth2.SigninOptionsBuilder.prototype.setScope",gx.prototype.vZ);_.r("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt",gx.prototype.J8);_.r("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt",gx.prototype.Pea);_.r("gapi.auth2.SigninOptionsBuilder.prototype.get",gx.prototype.get);
_.gg=_.gg||{};
(function(){function a(b){var c="";if(3==b.nodeType||4==b.nodeType)c=b.nodeValue;else if(b.innerText)c=b.innerText;else if(b.innerHTML)c=b.innerHTML;else if(b.firstChild){c=[];for(b=b.firstChild;b;b=b.nextSibling)c.push(a(b));c=c.join("")}return c}_.gg.createElement=function(b){if(!document.body||document.body.namespaceURI)try{var c=document.createElementNS("http://www.w3.org/1999/xhtml",b)}catch(d){}return c||document.createElement(b)};_.gg.eQ=function(b){var c=_.gg.createElement("iframe");try{var d=
["<","iframe"],e=b||{},f;for(f in e)e.hasOwnProperty(f)&&(d.push(" "),d.push(f),d.push('="'),d.push(_.gg.RF(e[f])),d.push('"'));d.push("></");d.push("iframe");d.push(">");var h=_.gg.createElement(d.join(""));h&&(!c||h.tagName==c.tagName&&h.namespaceURI==c.namespaceURI)&&(c=h)}catch(l){}d=c;b=b||{};for(var k in b)b.hasOwnProperty(k)&&(d[k]=b[k]);return c};_.gg.wS=function(){if(document.body)return document.body;try{var b=document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","body");if(b&&
1==b.length)return b[0]}catch(c){}return document.documentElement||document};_.gg.fpa=function(b){return a(b)}})();
_.Hh=window.gapi&&window.gapi.util||{};
_.Hh=_.Hh={};_.Hh.getOrigin=function(a){return _.Jh(a)};
_.Xy=function(a){if(0!==a.indexOf("GCSC"))return null;var b={Hj:!1};a=a.substr(4);if(!a)return b;var c=a.charAt(0);a=a.substr(1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=_.Vy(a.substr(d+1));if(null==e)return b;a=a.substring(0,d);if("_"!==a.charAt(0))return b;d="E"===c&&e.nf;return!d&&("U"!==c||e.nf)||d&&!_.Wy?b:{Hj:!0,nf:d,f6:a.substr(1),domain:e.domain,hj:e.hj}};_.Yy=function(a,b){this.dg=a;a=b||{};this.mba=Number(a.maxAge)||0;this.Ge=a.domain;this.mn=a.path;this.cea=!!a.secure};_.Yy.prototype.read=function(){for(var a=this.dg+"=",b=document.cookie.split(/;\s*/),c=0;c<b.length;++c){var d=b[c];if(0==d.indexOf(a))return d.substr(a.length)}};
_.Yy.prototype.write=function(a,b){if(!Zy.test(this.dg))throw"Invalid cookie name";if(!$y.test(a))throw"Invalid cookie value";a=this.dg+"="+a;this.Ge&&(a+=";domain="+this.Ge);this.mn&&(a+=";path="+this.mn);b="number"===typeof b?b:this.mba;if(0<=b){var c=new Date;c.setSeconds(c.getSeconds()+b);a+=";expires="+c.toUTCString()}this.cea&&(a+=";secure");document.cookie=a;return!0};_.Yy.prototype.clear=function(){this.write("",0)};var $y=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Zy=/^[A-Z_][A-Z0-9_]{0,63}$/;
_.Yy.iterate=function(a){for(var b=document.cookie.split(/;\s*/),c=0;c<b.length;++c){var d=b[c].split("="),e=d.shift();a(e,d.join("="))}};_.az=function(a){this.Zd=a};_.az.prototype.read=function(){if(bz.hasOwnProperty(this.Zd))return bz[this.Zd]};_.az.prototype.write=function(a){bz[this.Zd]=a;return!0};_.az.prototype.clear=function(){delete bz[this.Zd]};var bz={};_.az.iterate=function(a){for(var b in bz)bz.hasOwnProperty(b)&&a(b,bz[b])};var cz=function(){this.Ba=null;this.key=function(){return null};this.getItem=function(){return this.Ba};this.setItem=function(a,b){this.Ba=b;this.length=1};this.removeItem=function(){this.clear()};this.clear=function(){this.Ba=null;this.length=0};this.length=0},dz=function(a){try{var b=a||window.sessionStorage;if(!b)return!1;b.setItem("gapi.sessionStorageTest","gapi.sessionStorageTest"+b.length);b.removeItem("gapi.sessionStorageTest");return!0}catch(c){return!1}},ez=function(a,b){this.dg=a;this.SM=
dz(b)?b||window.sessionStorage:new cz};ez.prototype.read=function(){return this.SM.getItem(this.dg)};ez.prototype.write=function(a){try{this.SM.setItem(this.dg,a)}catch(b){return!1}return!0};ez.prototype.clear=function(){this.SM.removeItem(this.dg)};ez.iterate=function(a){if(dz())for(var b=0,c=window.sessionStorage.length;b<c;++b){var d=window.sessionStorage.key(b);a(d,window.sessionStorage[d])}};_.Wy="https:"===window.location.protocol;_.fz=_.Wy||"http:"===window.location.protocol?_.Yy:_.az;_.Vy=function(a){var b=a.substr(1),c="",d=window.location.hostname;if(""!==b){c=parseInt(b,10);if(isNaN(c))return null;b=d.split(".");if(b.length<c-1)return null;b.length==c-1&&(d="."+d)}else d="";return{nf:"S"==a.charAt(0),domain:d,hj:c}};var gz,hz,kz,lz;gz=_.of();hz=_.of();_.iz=_.of();_.jz=_.of();kz="state code cookie_policy g_user_cookie_policy authuser prompt g-oauth-window status".split(" ");lz=function(a){this.yX=a;this.HI=null};
lz.prototype.write=function(a){var b=_.of(),c=_.of(),d=window.decodeURIComponent?decodeURIComponent:unescape,e;for(e in a)if(_.pf(a,e)){var f=a[e];f=f.replace(/\+/g," ");c[e]=d(f);b[e]=a[e]}d=kz.length;for(e=0;e<d;++e)delete c[kz[e]];a=String(a.authuser||0);d=_.of();d[a]=c;c=_.Sg(d);this.yX.write(c);this.HI=b};lz.prototype.read=function(){return this.HI};lz.prototype.clear=function(){this.yX.clear();this.HI=_.of()};_.mz=function(a){return a?{domain:a.domain,path:"/",secure:a.nf}:null};
ez.iterate(function(a){var b=_.Xy(a);b&&b.Hj&&(gz[a]=new lz(new ez(a)))});_.fz.iterate(function(a){gz[a]&&(hz[a]=new _.fz(a,_.mz(_.Xy(a))))});
_.gj=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}function b(p){for(var q=h,u=0;64>u;u+=4)q[u/4]=p[u]<<24|p[u+1]<<16|p[u+2]<<8|p[u+3];for(u=16;80>u;u++)p=q[u-3]^q[u-8]^q[u-14]^q[u-16],q[u]=(p<<1|p>>>31)&4294967295;p=e[0];var v=e[1],t=e[2],w=e[3],x=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var G=w^v&(t^w);var B=1518500249}else G=v^t^w,B=1859775393;else 60>u?(G=v&t|w&(v|t),B=2400959708):(G=v^t^w,B=3395469782);G=((p<<5|p>>>27)&4294967295)+
G+x+B+q[u]&4294967295;x=w;w=t;t=(v<<30|v>>>2)&4294967295;v=p;p=G}e[0]=e[0]+p&4294967295;e[1]=e[1]+v&4294967295;e[2]=e[2]+t&4294967295;e[3]=e[3]+w&4294967295;e[4]=e[4]+x&4294967295}function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var u=[],v=0,t=p.length;v<t;++v)u.push(p.charCodeAt(v));p=u}q||(q=p.length);u=0;if(0==m)for(;u+64<q;)b(p.slice(u,u+64)),u+=64,n+=64;for(;u<q;)if(f[m++]=p[u++],n++,64==m)for(m=0,b(f);u+64<q;)b(p.slice(u,u+64)),u+=64,n+=64}function d(){var p=[],
q=8*n;56>m?c(k,56-m):c(k,64-(m-56));for(var u=63;56<=u;u--)f[u]=q&255,q>>>=8;b(f);for(u=q=0;5>u;u++)for(var v=24;0<=v;v-=8)p[q++]=e[u]>>v&255;return p}for(var e=[],f=[],h=[],k=[128],l=1;64>l;++l)k[l]=0;var m,n;a();return{reset:a,update:c,digest:d,ej:function(){for(var p=d(),q="",u=0;u<p.length;u++)q+="0123456789ABCDEF".charAt(Math.floor(p[u]/16))+"0123456789ABCDEF".charAt(p[u]%16);return q}}};var ij=function(a,b,c){var d=String(_.Ua.location.href);return d&&a&&b?[b,hj(_.Jh(d),a,c||null)].join(" "):null},hj=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],_.uc(d,function(k){e.push(k)}),jj(e.join(" "));var f=[],h=[];_.uc(c,function(k){h.push(k.key);f.push(k.value)});c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];_.uc(d,function(k){e.push(k)});a=jj(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")},jj=function(a){var b=
_.gj();b.update(a);return b.ej().toLowerCase()};var mj;_.kj=function(a){return!!_.cj.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)};_.lj=function(a){a=void 0===a?!1:a;var b=_.Ua.__SAPISID||_.Ua.__APISID||_.Ua.__3PSAPISID||_.Ua.__OVERRIDE_SID;_.kj(a)&&(b=b||_.Ua.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new _.dj(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");_.kj(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b};
mj=function(a,b,c,d){(a=_.Ua[a])||"undefined"===typeof document||(a=(new _.dj(document)).get(b));return a?ij(a,c,d):null};
_.nj=function(a,b){b=void 0===b?!1:b;var c=_.Jh(String(_.Ua.location.href)),d=[];if(_.lj(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?_.Ua.__SAPISID:_.Ua.__APISID;e||"undefined"===typeof document||(e=new _.dj(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ij(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&_.kj(b)&&((b=mj("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=mj("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")};
_.oj=function(a,b){var c={SAPISIDHASH:!0,SAPISID3PHASH:!0,APISIDHASH:!0};_.kj(void 0===b?!1:b)&&(c.SAPISID1PHASH=!0);return a&&(a.OriginToken||a.Authorization&&c[String(a.Authorization).split(" ")[0]])?!0:!1};_.pj={TT:_.oj,Daa:_.lj,TS:function(){var a=null;_.lj()&&(a=window.__PVT,null==a&&(a=(new _.dj(document)).get("BEAT")));return a},uS:_.nj};
_.$r=function(){return _.yb&&_.zb?_.zb.mobile:!_.Zr()&&(_.Db("iPod")||_.Db("iPhone")||_.Db("Android")||_.Db("IEMobile"))};_.Zr=function(){return _.yb&&_.zb?!_.zb.mobile&&(_.Db("iPad")||_.Db("Android")||_.Db("Silk")):_.Db("iPad")||_.Db("Android")&&!_.Db("Mobile")||_.Db("Silk")};
var Gs,Hs;_.ys=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};_.zs=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};_.g=_.zs.prototype;_.g.clone=function(){return new _.zs(this.x,this.y)};_.g.equals=function(a){return a instanceof _.zs&&_.ys(this,a)};_.g.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};_.g.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
_.g.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};_.g.translate=function(a,b){a instanceof _.zs?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),"number"===typeof b&&(this.y+=b));return this};_.g.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};_.As=function(a){return a.scrollingElement?a.scrollingElement:!_.Gd&&_.qe(a)?a.documentElement:a.body||a.documentElement};
_.Bs=function(a){var b=_.As(a);a=a.parentWindow||a.defaultView;return _.Bd&&a.pageYOffset!=b.scrollTop?new _.zs(b.scrollLeft,b.scrollTop):new _.zs(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};_.Cs=function(a,b,c,d){return _.le(a.Gb,b,c,d)};_.Ds=function(a){if(a instanceof _.ed&&a.constructor===_.ed)return a.PJ;_.$b(a);return"type_error:SafeStyle"};_.Es=function(a){if(a instanceof _.ld&&a.constructor===_.ld)return a.OJ;_.$b(a);return"type_error:SafeStyleSheet"};
_.Fs=function(a){return Number(_.Yd)>=a};Gs=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};Hs=function(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})};_.Is=function(a,b,c){return _.ue(document,arguments)};_.Js=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};_.g=_.Js.prototype;_.g.Wb=function(){return this.right-this.left};_.g.Uc=function(){return this.bottom-this.top};_.g.clone=function(){return new _.Js(this.top,this.right,this.bottom,this.left)};_.g.contains=function(a){return this&&a?a instanceof _.Js?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
_.g.expand=function(a,b,c,d){_.Wb(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};_.g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
_.g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};_.g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
_.g.translate=function(a,b){a instanceof _.zs?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,"number"===typeof b&&(this.top+=b,this.bottom+=b));return this};_.g.scale=function(a,b){b="number"===typeof b?b:a;this.left*=a;this.right*=a;this.top*=b;this.bottom*=b;return this};var Ms,Ks,Rs,Us,ft,Ts;_.Ls=function(a,b,c){if("string"===typeof b)(b=Ks(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ks(c,d);f&&(c.style[f]=e)}};Ms={};Ks=function(a,b){var c=Ms[b];if(!c){var d=Gs(b);c=d;void 0===a.style[d]&&(d=(_.Gd?"Webkit":_.Fd?"Moz":_.Bd?"ms":null)+Hs(d),void 0!==a.style[d]&&(c=d));Ms[b]=c}return c};_.Ns=function(a,b){var c=a.style[Gs(b)];return"undefined"!==typeof c?c:a.style[Ks(a,b)]||""};
_.Os=function(a,b){var c=_.je(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""};_.Ps=function(a,b){return a.currentStyle?a.currentStyle[b]:null};_.Qs=function(a,b){return _.Os(a,b)||_.Ps(a,b)||a.style&&a.style[b]};Rs=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};
_.Vs=function(a,b){b=b||_.As(document);var c=b||_.As(document);var d=_.Ss(a),e=_.Ss(c);if(_.Bd&&!_.Fs(9)){var f=Ts(c,"borderLeft");var h=Ts(c,"borderRight");var k=Ts(c,"borderTop"),l=Ts(c,"borderBottom");h=new _.Js(k,h,l,f)}else f=_.Os(c,"borderLeftWidth"),h=_.Os(c,"borderRightWidth"),k=_.Os(c,"borderTopWidth"),l=_.Os(c,"borderBottomWidth"),h=new _.Js(parseFloat(k),parseFloat(h),parseFloat(l),parseFloat(f));c==_.As(document)?(f=d.x-c.scrollLeft,d=d.y-c.scrollTop,_.Bd&&!_.Fs(10)&&(f+=h.left,d+=h.top)):
(f=d.x-e.x-h.left,d=d.y-e.y-h.top);a=Us(a);e=c.clientHeight-a.height;h=c.scrollLeft;k=c.scrollTop;h+=Math.min(f,Math.max(f-(c.clientWidth-a.width),0));k+=Math.min(d,Math.max(d-e,0));c=new _.zs(h,k);b.scrollLeft=c.x;b.scrollTop=c.y};_.Ss=function(a){var b=_.je(a),c=new _.zs(0,0);var d=b?_.je(b):document;d=!_.Bd||_.Fs(9)||_.qe(_.ke(d).Gb)?d.documentElement:d.body;if(a==d)return c;a=Rs(a);b=_.Bs(_.ke(b).Gb);c.x=a.left+b.x;c.y=a.top+b.y;return c};
_.Xs=function(a,b){var c=new _.zs(0,0),d=_.re(_.je(a));if(!_.zd(d,"parent"))return c;do{var e=d==b?_.Ss(a):_.Ws(a);c.x+=e.x;c.y+=e.y}while(d&&d!=b&&d!=d.parent&&(a=d.frameElement)&&(d=d.parent));return c};_.Ws=function(a){a=Rs(a);return new _.zs(a.left,a.top)};_.Zs=function(a,b,c){if(b instanceof _.ee)c=b.height,b=b.width;else if(void 0==c)throw Error("R");a.style.width=_.Ys(b,!0);a.style.height=_.Ys(c,!0)};_.Ys=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
_.$s=function(a){var b=Us;if("none"!=_.Qs(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};Us=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=_.Gd&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Rs(a),new _.ee(a.right-a.left,a.bottom-a.top)):new _.ee(b,c)};_.at=function(a,b){a.style.display=b?"":"none"};
_.ct=function(a){var b=_.ke(void 0),c=b.ub();if(_.Bd&&c.createStyleSheet)b=c.createStyleSheet(),_.bt(b,a);else{c=_.Cs(b,"HEAD")[0];if(!c){var d=_.Cs(b,"BODY")[0];c=b.va("HEAD");d.parentNode.insertBefore(c,d)}d=b.va("STYLE");var e;(e=_.de('style[nonce],link[rel="stylesheet"][nonce]'))&&d.setAttribute("nonce",e);_.bt(d,a);b.appendChild(c,d)}};_.bt=function(a,b){b=_.Es(b);_.Bd&&void 0!==a.cssText?a.cssText=b:_.Ua.trustedTypes?_.Fe(a,b):a.innerHTML=b};
_.dt=_.Fd?"MozUserSelect":_.Gd||_.Dd?"WebkitUserSelect":null;_.et=function(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+b};ft={thin:2,medium:4,thick:6};Ts=function(a,b){if("none"==_.Ps(a,b+"Style"))return 0;b=_.Ps(a,b+"Width");return b in ft?ft[b]:_.et(a,b)};
_.ty=function(a,b){_.xk.call(this);this.Um=a||1;this.kx=b||_.Ua;this.rP=(0,_.z)(this.Kfa,this);this.DV=_.ec()};_.Za(_.ty,_.xk);_.g=_.ty.prototype;_.g.enabled=!1;_.g.Rc=null;_.g.setInterval=function(a){this.Um=a;this.Rc&&this.enabled?(this.stop(),this.start()):this.Rc&&this.stop()};
_.g.Kfa=function(){if(this.enabled){var a=_.ec()-this.DV;0<a&&a<.8*this.Um?this.Rc=this.kx.setTimeout(this.rP,this.Um-a):(this.Rc&&(this.kx.clearTimeout(this.Rc),this.Rc=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};_.g.start=function(){this.enabled=!0;this.Rc||(this.Rc=this.kx.setTimeout(this.rP,this.Um),this.DV=_.ec())};_.g.stop=function(){this.enabled=!1;this.Rc&&(this.kx.clearTimeout(this.Rc),this.Rc=null)};_.g.ua=function(){_.ty.N.ua.call(this);this.stop();delete this.kx};
_.uy=function(a,b,c){if("function"===typeof a)c&&(a=(0,_.z)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,_.z)(a.handleEvent,a);else throw Error("Ca");return 2147483647<Number(b)?-1:_.Ua.setTimeout(a,b||0)};_.vy=function(a){_.Ua.clearTimeout(a)};
_.nz=function(a){_.Lj.call(this);this.Zd=1;this.dC=[];this.iC=0;this.kg=[];this.ek={};this.t5=!!a};_.Za(_.nz,_.Lj);_.g=_.nz.prototype;_.g.subscribe=function(a,b,c){var d=this.ek[a];d||(d=this.ek[a]=[]);var e=this.Zd;this.kg[e]=a;this.kg[e+1]=b;this.kg[e+2]=c;this.Zd=e+3;d.push(e);return e};_.g.Uw=_.da(19);_.g.unsubscribe=function(a,b,c){if(a=this.ek[a]){var d=this.kg;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Kl(a)}return!1};
_.g.Kl=function(a){var b=this.kg[a];if(b){var c=this.ek[b];0!=this.iC?(this.dC.push(a),this.kg[a+1]=function(){}):(c&&_.lb(c,a),delete this.kg[a],delete this.kg[a+1],delete this.kg[a+2])}return!!b};
_.g.Dp=function(a,b){var c=this.ek[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.t5)for(e=0;e<c.length;e++){var h=c[e];oz(this.kg[h+1],this.kg[h+2],d)}else{this.iC++;try{for(e=0,f=c.length;e<f&&!this.isDisposed();e++)h=c[e],this.kg[h+1].apply(this.kg[h+2],d)}finally{if(this.iC--,0<this.dC.length&&0==this.iC)for(;c=this.dC.pop();)this.Kl(c)}}return 0!=e}return!1};var oz=function(a,b,c){_.bl(function(){a.apply(b,c)})};
_.nz.prototype.clear=function(a){if(a){var b=this.ek[a];b&&(b.forEach(this.Kl,this),delete this.ek[a])}else this.kg.length=0,this.ek={}};_.nz.prototype.Sb=function(a){if(a){var b=this.ek[a];return b?b.length:0}a=0;for(b in this.ek)a+=this.Sb(b);return a};_.nz.prototype.ua=function(){_.nz.N.ua.call(this);this.clear();this.dC.length=0};
_.pz=function(a){this.Nfa=a};_.pz.prototype.toString=function(){return this.Nfa};_.qz=function(a){_.Lj.call(this);this.ze=new _.nz(a);_.Nj(this,this.ze)};_.Za(_.qz,_.Lj);_.g=_.qz.prototype;_.g.subscribe=function(a,b,c){return this.ze.subscribe(a.toString(),b,c)};_.g.Uw=_.da(18);_.g.unsubscribe=function(a,b,c){return this.ze.unsubscribe(a.toString(),b,c)};_.g.Kl=function(a){return this.ze.Kl(a)};_.g.Dp=function(a,b){return this.ze.Dp(a.toString(),b)};_.g.clear=function(a){this.ze.clear(void 0!==a?a.toString():void 0)};
_.g.Sb=function(a){return this.ze.Sb(void 0!==a?a.toString():void 0)};
var rz=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");_.fb.call(this,c+a[d])},sz=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b},tz=function(a){return a.replace(_.id,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,k,l){f=k;return l});b=(_.Zc(d)||_.cd).ih();return c+f+b+f+e})},vz=function(a){if(a instanceof
_.Tc)return'url("'+_.Uc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof _.kc)a=_.mc(a);else{a=String(a);var b=a.replace(_.jd,"$1").replace(_.jd,"$1").replace(_.id,"url");if(_.hd.test(b)){if(b=!uz.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&sz(a)}a=b?tz(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new rz("Value does not allow [{;}], got: %s.",[a]);return a},wz,uz,yz,zz,Az,Cz;_.Za(rz,_.fb);
rz.prototype.name="AssertionError";wz={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};uz=/\/\*/;_.xz=function(a){var b="",c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("m`"+c);var d=a[c];null!=d&&(d=Array.isArray(d)?d.map(vz).join(" "):vz(d),b+=c+":"+d+";")}return b?new _.ed(b,_.dd):_.gd};yz=/^[a-zA-Z0-9-]+$/;
zz={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0};Az=function(a){var b=_.ud(_.vd),c=[],d=function(e){Array.isArray(e)?e.forEach(d):(e=_.ud(e),c.push(_.sd(e).toString()))};a.forEach(d);return _.td(c.join(_.sd(b).toString()))};_.Bz=function(a){return Az(Array.prototype.slice.call(arguments))};Cz={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0};
_.Dz=function(a,b){Array.isArray(b)||(b=[b]);b=b.map(function(c){return"string"===typeof c?c:c.Cp+" "+c.duration+"s "+c.timing+" "+c.delay+"s"});_.Ls(a,"transition",b.join(","))};
_.Ez=_.sc(function(){if(_.Bd)return!0;var a=_.ve("DIV"),b=_.Gd?"-webkit":_.Fd?"-moz":_.Bd?"-ms":null,c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");c={style:c};if(!yz.test("div"))throw Error("q");if("DIV"in zz)throw Error("q");b=void 0;var d="";if(c)for(h in c)if(Object.prototype.hasOwnProperty.call(c,h)){if(!yz.test(h))throw Error("q");var e=c[h];if(null!=e){var f=h;if(e instanceof _.kc)e=_.mc(e);else if("style"==f.toLowerCase()){if(!_.Wb(e))throw Error("q");e instanceof
_.ed||(e=_.xz(e));e=_.Ds(e)}else{if(/^on/i.test(f))throw Error("q");if(f.toLowerCase()in Cz)if(e instanceof _.oc)e=_.pc(e).toString();else if(e instanceof _.Tc)e=_.Uc(e);else if("string"===typeof e)e=(_.Zc(e)||_.cd).ih();else throw Error("q");}e.Aj&&(e=e.ih());f=f+'="'+_.Qc(String(e))+'"';d+=" "+f}}var h="<div"+d;null==b?b=[]:Array.isArray(b)||(b=[b]);!0===wz.div?h+=">":(b=_.Bz(b),h+=">"+_.sd(b).toString()+"</div>");h=_.td(h);_.be(a,h);return""!=_.Ns(a.firstChild,"transition")});
_.Gz=function(){_.Fz="oauth2relay"+String(2147483647*(0,_.Ph)()|0)};_.Hz=new _.qz;_.Iz=new _.pz("oauth");_.Gz();_.Hf("oauth-flow/client_id");var Jz=String(_.Hf("oauth-flow/redirectUri"));if(Jz)Jz.replace(/[#][\s\S]*/,"");else{var Kz=_.Hh.getOrigin(window.location.href);_.Hf("oauth-flow/callbackUrl");encodeURIComponent(Kz)}_.Hh.getOrigin(window.location.href);
var Mz,Nz,Oz,Pz,Qz,Rz,Sz,Tz,Uz,Vz,Wz,Yz,Zz,$z,aA,bA,cA,dA,eA,fA,gA,hA,iA,jA,kA,lA,mA,nA,oA,pA,qA,rA,sA,tA,uA,vA,wA,xA,yA,zA,CA,BA,DA,EA,FA,GA,HA,IA,JA,KA,LA,NA;_.Lz=function(a,b){if(_.Ei&&!b)return _.Ua.atob(a);var c="";_.Hi(a,function(d){c+=String.fromCharCode(d)});return c};Mz=function(a){var b=String(a("immediate")||"");a=String(a("prompt")||"");return"true"===b||"none"===a};Nz=function(a){return _.Yi("enableMultilogin")&&a("cookie_policy")&&!Mz(a)?!0:!1};
Qz=function(){var a,b=null;_.fz.iterate(function(c,d){0===c.indexOf("G_AUTHUSER_")&&(c=_.Vy(c.substring(11)),!a||c.nf&&!a.nf||c.nf==a.nf&&c.hj>a.hj)&&(a=c,b=d)});return{G5:a,authuser:b}};Rz=[".APPS.GOOGLEUSERCONTENT.COM","@DEVELOPER.GSERVICEACCOUNT.COM"];Sz=function(a){a=a.toUpperCase();for(var b=0,c=Rz.length;b<c;++b){var d=a.split(Rz[b]);2==d.length&&""===d[1]&&(a=d[0])}a=a.replace(/-/g,"_").toUpperCase();40<a.length&&(b=new _.Oh,b.xx(a),a=b.ej().toUpperCase());return a};
Tz=function(a){if(!a)return[];a=a.split("=");return a[1]?a[1].split("|"):[]};Uz=function(a){a=a.split(":");return{clientId:a[0].split("=")[1],pea:Tz(a[1]),Upa:Tz(a[2]),Ooa:Tz(a[3])}};Vz=function(a){var b=Qz(),c=b.G5;b=b.authuser;var d=a&&Sz(a);if(null!==b){var e;_.fz.iterate(function(h,k){(h=_.Xy(h))&&h.Hj&&(d&&h.f6!=d||h.nf==c.nf&&h.hj==c.hj&&(e=k))});if(e){var f=Uz(e);a=f&&f.pea[Number(b)];f=f&&f.clientId;if(a)return{authuser:b,Tqa:a,clientId:f}}}return null};
Wz=function(a,b){a=_.rj(a);if(!a||!b&&a.error)return null;b=Math.floor((new Date).getTime()/1E3);return a.expires_at&&b>a.expires_at?null:a};_.Xz=function(a,b){if(b){var c=b;var d=a}else"string"===typeof a?d=a:c=a;c?_.Fw(c,d):_.Gw(d)};
Yz=function(a){if(!a)return null;"single_host_origin"!==a&&(a=_.Jh(a));var b=window.location.hostname,c=b,d=_.Wy;if("single_host_origin"!==a){c=a.split("://");if(2==c.length)d="https"===c.shift();else return _.Wg.log("WARNING invalid cookie_policy: "+a),null;c=c[0]}if(-1!==c.indexOf(":"))c=b="";else{a="."+c;if(b.lastIndexOf(a)!==b.length-a.length)return _.Wg.log("Invalid cookie_policy domain: "+c),null;c=a;b=c.split(".").length-1}return{domain:c,nf:d,hj:b}};
Zz=function(a){var b=Yz(a);if(!b)return new _.az("G_USERSTATE_");a=["G_USERSTATE_",_.Wy&&b.nf?"S":"H",b.hj].join("");var c=_.jz[a];c||(c={FI:63072E3},_.qf(_.mz(b),c),c=new _.Yy(a,c),_.jz[a]=c,b=c.read(),"undefined"!==typeof b&&null!==b&&(document.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/",c.write(b)));return c};$z=function(a){var b=Zz(a).read();a=_.of();if(b){b=b.split(":");for(var c;c=b.shift();)c=c.split("="),a[c[0]]=c[1]}return a};
aA=function(a,b,c){var d=$z(b),e=d[a];d[a]="0";var f=[];_.un(d,function(k,l){f.push(l+"="+k)});var h=f.join(":");b=Zz(b);h?b.write(h):b.clear();d[a]!==e&&c&&c()};bA=function(a){a=Yz(a.g_user_cookie_policy);if(!a||a.nf&&!_.Wy)a=null;else{var b=["G_AUTHUSER_",_.Wy&&a.nf?"S":"H",a.hj].join(""),c=_.iz[b];c||(c=new _.fz(b,_.mz(a)),_.iz[b]=c);a=c}_.If("googleapis.config/sessionIndex",null);a.clear()};cA=function(a){return Mz(function(b){return a[b]})};dA=0;eA=!1;fA=[];gA={};hA={};iA=null;
jA=function(a){var b=_.Fz;return function(c){if(this.f==b&&this.t==_.ah.to(this.f)&&this.origin==_.ah.Go(this.f))return a.apply(this,arguments)}};kA=function(a){if(a&&!decodeURIComponent(a).startsWith("m;/_/scs/"))throw Error("Ha");};lA=function(a){var b=_.gg.jh,c=b(a).jsh;if(null!=c)return kA(c),a;if(b=String(b().jsh||_.zf.h||""))kA(b),c=(a+"#").indexOf("#"),a=a.substr(0,c)+(-1!==a.substr(0,c).indexOf("?")?"&":"?")+"jsh="+encodeURIComponent(b)+a.substr(c);return a};mA=function(){return!!_.Hf("oauth-flow/usegapi")};
nA=function(a,b){mA()?iA.unregister(a):_.ah.unregister(a+":"+b)};oA=function(a,b,c){mA()?iA.register(a,c,_.Jn):_.ah.register(a+":"+b,jA(c))};pA=function(){Oz.parentNode.removeChild(Oz)};qA=function(a){var b=Oz;_.Dz(b,[{Cp:"-webkit-transform",duration:1,timing:"ease",delay:0}]);_.Dz(b,[{Cp:"transform",duration:1,timing:"ease",delay:0}]);_.uy(function(){b.style.webkitTransform="translate3d(0px,"+a+"px,0px)";b.style.transform="translate3d(0px,"+a+"px,0px)"},0)};rA=function(){var a=Pz+88;qA(a);Pz=a};
sA=function(){var a=Pz-88;qA(a);Pz=a};tA=function(a){var b=a?rA:sA,c=a?sA:rA;a=a?"-":"";Pz=parseInt(a+88,10);Oz.style.webkitTransform="translate3d(0px,"+a+88+"px,0px)";Oz.style.transform="translate3d(0px,"+a+88+"px,0px)";Oz.style.display="";Oz.style.visibility="visible";b();_.uy(c,4E3);_.uy(pA,5E3)};
uA=function(a){var b=_.Hf("oauth-flow/toast/position");"top"!==b&&(b="bottom");var c=document.createElement("div");Oz=c;c.style.cssText="position:fixed;left:0px;z-index:1000;width:100%;";_.Ls(c,"visibility","hidden");_.Ls(c,b,"-40px");_.Ls(c,"height","128px");var d=c;if(!_.$r()&&!_.Zr()){d=document.createElement("div");d.style.cssText="float:left;position:relative;left:50%;";c.appendChild(d);var e=document.createElement("div");e.style.cssText="float:left;position:relative;left:-50%";d.appendChild(e);
d=e}e="top"==b?"-":"";Pz=parseInt(e+88,10);Oz.style.webkitTransform="translate3d(0px,"+e+88+"px,0px)";Oz.style.transform="translate3d(0px,"+e+88+"px,0px)";e=window;try{for(;e.parent!=e&&e.parent.document;)e=e.parent}catch(f){}e=e.document.body;try{e.insertBefore(c,e.firstChild)}catch(f){}_.Gn.openChild({url:":socialhost:/:session_prefix:_/widget/oauthflow/toast",queryParams:{clientId:a.client_id,idToken:a.id_token},where:d,onRestyle:function(){"top"===b?tA(!0):tA(!1)}})};
vA=function(a){var b=_.lp(),c=b&&b.scope;b=a&&a.scope;b="string"===typeof b?b.split(" "):b||[];if(c){c=c.split(" ");for(var d=0;d<c.length;++d){var e=c[d];-1==_.sn.call(b,e)&&b.push(e)}0<b.length&&(a.scope=b.join(" "))}return a};
wA=function(a,b){var c=null;a&&b&&(c=b.client_id=b.client_id||a.client_id,b.scope=b.scope||a.scope,b.g_user_cookie_policy=a.cookie_policy,b.cookie_policy=b.cookie_policy||a.cookie_policy,b.response_type=b.response_type||a.response_type);if(b){b.issued_at||(b.issued_at=String(Math.floor((new Date).getTime()/1E3)));var d=parseInt(b.expires_in,10)||86400;b.error&&(d=_.Hf("oauth-flow/errorMaxAge")||86400);b.expires_in=String(d);b.expires_at||(b.expires_at=String(Math.floor((new Date).getTime()/1E3)+d));
b._aa||b.error||null!=Vz(c)||!cA(a)||(b._aa="1");a=b.status={};a.google_logged_in=!!b.session_state;c=a.signed_in=!!b.access_token;a.method=c?b["g-oauth-window"]?"PROMPT":"AUTO":null}return b};xA=function(a){a=a&&a.id_token;if(!a||!a.split(".")[1])return null;a=(a.split(".")[1]+"...").replace(/^((....)+)\.?\.?\.?$/,"$1");a=_.Rg(_.Lz(a,!0));if(!1===a)throw Error("Ia");return a};yA=function(a){return(a=xA(a))?a.sub:null};
zA=function(a){a&&fA.push(a);a=_.Fz;var b=document.getElementById(a),c=(new Date).getTime();if(b){if(dA&&6E4>c-dA)return;var d=_.ah.to(a);d&&(nA("oauth2relayReady",d),nA("oauth2callback",d));b.parentNode.removeChild(b);if(/Firefox/.test(navigator.userAgent))try{window.frames[a]=void 0}catch(f){}_.Gz();a=_.Fz}dA=c;var e=String(2147483647*(0,_.Ph)()|0);b=_.Hf("oauth-flow/proxyUrl")||_.Hf("oauth-flow/relayUrl");mA()?iA=_.Gn.openChild({where:_.gg.wS(),url:b,id:a,attributes:{style:{width:"1px",height:"1px",
position:"absolute",top:"-100px",display:"none"},"aria-hidden":"true"},dontclear:!0}):(b=[b,"?parent=",encodeURIComponent(_.Hh.getOrigin(window.location.href)),"#rpctoken=",e,"&forcesecure=1"].join(""),c=_.gg.wS(),d=_.gg.eQ({name:a,id:a}),d.src=lA(b),d.style.width="1px",d.style.height="1px",d.style.position="absolute",d.style.top="-100px",d.tabIndex=-1,d.setAttribute("aria-hidden","true"),c.appendChild(d),_.ah.Iw(a));oA("oauth2relayReady",e,function(){nA("oauth2relayReady",e);var f=fA;if(null!==f){fA=
null;for(var h=f.length,k=0;k<h;++k)f[k]()}});oA("oauth2callback",e,function(f){var h=_.gg.jh;h=h(f);var k=h.state;f=k.replace(/\|.*$/,"");f={}.hasOwnProperty.call(hA,f)?hA[f]:null;h.state=f;if(null!=h.state){f=gA[k];delete gA[k];k=f&&f.key||"token";var l=h=wA(f&&f.params,h),m=yA(l);if(m){var n=$z(l.cookie_policy);m="0"==n[m]||"X"==n[m]}else m=!1;!m&&l&&0<=(" "+(l.scope||"")+" ").indexOf(" https://www.googleapis.com/auth/plus.login ")&&_.Hf("isLoggedIn")&&"1"===(l&&l._aa)&&(l._aa="0",eA||(eA=!0,uA(l)));
_.Xz(k,h);h=Wz(k);if(f){k=f.popup;l=f.after_redirect;if(k&&"keep_open"!=l)try{k.close()}catch(p){}f.callback&&(f.callback(h),f.callback=null)}}})};_.AA=function(a){null!==fA?zA(a):a&&a()};CA=function(a,b){var c=BA,d=yA(a);d&&(bA(a),aA(d,b,function(){if(c){var e={error:"user_signed_out"};e.client_id=a.client_id;e.g_user_cookie_policy=a.g_user_cookie_policy;e.scope=a.scope;e.response_type=a.response_type;e.session_state=a.session_state;e=wA(null,e);c(e)}}))};
BA=function(a){a||(a=Wz(void 0,!0));a&&"object"===typeof a||(a={error:"invalid_request",error_description:"no callback data"});var b=a.error_description;b&&window.console&&(window.console.error(a.error),window.console.error(b));a.error||(_.zf.drw=null);_.Xz(a);if(b=a.authuser)_.Hf("googleapis.config/sessionIndex"),_.If("googleapis.config/sessionIndex",b);_.Hz.Dp(_.Iz,a);return a};DA=["client_id","cookie_policy","response_type"];EA="client_id response_type login_hint authuser prompt include_granted_scopes after_redirect access_type hl state".split(" ");
FA=function(a){var b=_.Lk(a);b.session_state&&b.session_state.extraQueryParams&&(b.authuser=b.session_state.extraQueryParams.authuser);b.session_state=null;a.expires_at&&(b.expires_at=parseInt(a.expires_at/1E3).toString());a.expires_in&&(b.expires_in=a.expires_in.toString());a.first_issued_at&&(b.issued_at=parseInt(a.first_issued_at/1E3).toString(),delete b.first_issued_at);_.Fw(b);return b};
GA=function(a){if(void 0===a.include_granted_scopes){var b=_.Hf("include_granted_scopes");a.include_granted_scopes=!!b}};HA=function(a){window.console&&("function"===typeof window.console.warn?window.console.warn(a):"function"===typeof window.console.log&&window.console.log(a))};
IA=function(a){var b=a||{},c={};_.uc(EA,function(d){null!=b[d]&&(c[d]=b[d])});a=_.Hf("googleapis/overrideClientId");null!=a&&(c.client_id=a);GA(c);"string"===typeof b.scope?c.scope=b.scope:Array.isArray(b.scope)&&(c.scope=b.scope.join(" "));null!=b["openid.realm"]&&(c.openid_realm=b["openid.realm"]);null!=b.cookie_policy?c.cookie_policy=b.cookie_policy:null!=b.cookiepolicy&&(c.cookie_policy=b.cookiepolicy);null==c.login_hint&&null!=b.user_id&&(c.login_hint=b.user_id);try{_.vx(c.cookie_policy)}catch(d){c.cookie_policy&&
HA("The cookie_policy configuration: '"+c.cookie_policy+"' is illegal, and thus ignored."),delete c.cookie_policy}null!=b.hd&&(c.hosted_domain=b.hd);null==c.prompt&&(1==b.immediate||"true"==b.immediate?c.prompt="none":"force"==b.approval_prompt&&(c.prompt="consent"));"none"==c.prompt&&(c.session_selection="first_valid");"none"==c.prompt&&"offline"==c.access_type&&delete c.access_type;"undefined"===typeof c.authuser&&(a=_.bj(),null!=a&&(c.authuser=a));a=b.redirect_uri||_.Hf("oauth-flow/redirectUri");
null!=a&&"postmessage"!=a&&(c.redirect_uri=a);c.gsiwebsdk="shim";return c};
JA=function(a,b){var c=IA(a),d=new _.el(function(e,f){_.by(c,function(h){var k=h||{};_.uc(DA,function(l){null==k[l]&&(k[l]=c[l])});!c.include_granted_scopes&&a&&a.scope&&(k.scope=a.scope);a&&null!=a.state&&(k.state=a.state);k.error?("none"==c.prompt&&"user_logged_out"==k.error&&(k.error="immediate_failed_user_logged_out"),f(k)):(h=FA(k),null!=h.authuser&&_.If("googleapis.config/sessionIndex",h.authuser),e(h))})});b&&d.then(b,b);return d};KA=_.pj.uS;LA=null;
_.OA=function(a,b){if("force"!==a.approvalprompt){a=_.MA(a);a.prompt="none";delete a.redirect_uri;delete a.approval_prompt;delete a.immediate;if(b=!b)LA?(a.client_id!==LA.client_id&&window.console&&window.console.log&&window.console.log("Ignoring mismatched page-level auth param client_id="+a.client_id),b=!0):(LA=a,b=!1);b||NA(a)}};
_.MA=function(a){var b=a.redirecturi||"postmessage",c=(0,_.Ic)((a.scope||"").replace(/[\s\xa0]+/g," "));b={client_id:a.clientid,redirect_uri:b,response_type:"code token id_token gsession",scope:c};a.approvalprompt&&(b.approval_prompt=a.approvalprompt);a.state&&(b.state=a.state);a.openidrealm&&(b["openid.realm"]=a.openidrealm);c="offline"==a.accesstype?!0:(c=a.redirecturi)&&"postmessage"!=c;c&&(b.access_type="offline");a.requestvisibleactions&&(b.request_visible_actions=(0,_.Ic)(a.requestvisibleactions.replace(/[\s\xa0]+/g,
" ")));a.after_redirect&&(b.after_redirect=a.after_redirect);a.cookiepolicy&&"none"!==a.cookiepolicy&&(b.cookie_policy=a.cookiepolicy);"undefined"!=typeof a.includegrantedscopes&&(b.include_granted_scopes=a.includegrantedscopes);a.e&&(b.e=a.e);(a=a.authuser||_.Hf("googleapis.config/sessionIndex"))&&(b.authuser=a);(a=_.Hf("useoriginassocialhost"))&&(b.use_origin_as_socialhost=a);return b};NA=function(a){_.Vp("waaf0","signin","0");JA(a,function(b){_.Vp("waaf1","signin","0");BA(b)})};
_.PA=function(a){a=_.MA(a);_.If("oauth-flow/authWindowWidth",445);_.If("oauth-flow/authWindowHeight",615);NA(a)};_.QA=function(a){_.Hz.unsubscribe(_.Iz,a);_.Hz.subscribe(_.Iz,a)};var XA,$A;_.SA=function(a){return a.cookiepolicy?!0:(_.RA("cookiepolicy is a required field.  See https://developers.google.com/+/web/signin/#button_attr_cookiepolicy for more information."),!1)};_.RA=function(a){window.console&&(window.console.error?window.console.error(a):window.console.log&&window.console.log(a))};_.WA=function(a,b){var c=_.lp();_.qf(a,c);c=vA(c);if(_.SA(c)){var d=_.TA();_.UA(c);b?_.yf(b,"click",function(){_.VA(c,d)}):_.VA(c,d)}};
_.TA=function(){var a=new XA;_.QA(function(b){a.GI&&b&&(b.access_token&&_.If("isPlusUser",!0),b["g-oauth-window"]&&(a.GI=!1,_.Wg.warn("OTA app install is no longer supported.")))});return a};XA=function(){this.GI=!1};_.UA=function(a){a=_.YA(a);_.ZA(a.callback);_.AA(function(){_.OA(a)})};_.YA=function(a){$A(a);a.redirecturi&&delete a.redirecturi;Nz(function(b){return a[b]})||(a.authuser=0);return a};$A=function(a){/^\s*$/.test(a.scope||"")&&(a.scope="https://www.googleapis.com/auth/plus.login")};
_.ZA=function(a){if("string"===typeof a)if(window[a])a=window[a];else{_.RA('Callback function named "'+a+'" not found');return}a&&_.QA(a)};_.VA=function(a,b){b.GI=!0;a=_.YA(a);_.PA(a)};_.r("gapi.auth.authorize",JA);_.r("gapi.auth.checkSessionState",function(a,b){var c=_.of();c.client_id=a.client_id;c.session_state=a.session_state;_.AA(function(){mA()?iA.send("check_session_state",c,function(d){b.call(null,d[0])},_.Jn):_.ah.call(_.Fz,"check_session_state",jA(function(d){b.call(null,d)}),c.session_state,c.client_id)})});_.r("gapi.auth.getAuthHeaderValueForFirstParty",KA);_.r("gapi.auth.getToken",Wz);
_.r("gapi.auth.getVersionInfo",function(a,b){_.AA(function(){var c=_.nj()||"",d=null,e=null;c&&(e=c.split(" "),2==e.length&&(d=e[1]));d?mA()?iA.send("get_versioninfo",{xapisidHash:d,sessionIndex:b},function(f){a(f[0])},_.Jn):_.ah.call(_.Fz,"get_versioninfo",jA(function(f){a(f)}),d,b):a()})});_.r("gapi.auth.init",_.AA);_.r("gapi.auth.setToken",_.Xz);_.r("gapi.auth.signIn",function(a){_.WA(a)});_.r("gapi.auth.signOut",function(){var a=Wz();a&&CA(a,a.cookie_policy)});
_.r("gapi.auth.unsafeUnpackIdToken",xA);_.r("gapi.auth._pimf",_.OA);_.r("gapi.auth._oart",uA);_.r("gapi.auth._guss",function(a){return Zz(a).read()});
var aB=_.lp();aB.clientid&&aB.scope&&aB.callback&&!_.Hf("disableRealtimeCallback")&&_.UA(aB);
});
// Google Inc.
:#fff;color:#4c4c4c;border-radius:6px 6px 0 0;padding:7px 25px;font-size:16px;font-weight:600;text-transform:uppercase;position:relative;z-index:1;line-height:1.1}div.chdr{width:100%;display:flex;justify-content:space-between;background-color:#fff;padding:10px;border-radius:6px;box-sizing:border-box}div.chdr .total-data-list{width:20%;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column}.ind-mp_num{font-size:24px;font-weight:600}.ind-mp_txt{display:block;font-size:12px;color:#888;font-weight:500;text-transform:uppercase;margin-top:5px}.confirmed .ind-mp_num{color:#4c4c4c}.confirmed .ind-mp_txt{color:#a2a2a2}.activecase .ind-mp_num{color:#3a81d8}.activecase .ind-mp_txt{color:#81a6d3}.recovered .ind-mp_num{color:#4f9a0b}.recovered .ind-mp_txt{color:#80b74f}.deaths .ind-mp_num{color:#cc362c}.deaths .ind-mp_txt{color:#c9706b}._world-wrapper>div.p{font-size:12px;line-height:1.5;font-weight:400;padding-top:8px;margin:0;box-sizing:border-box}._india-wrapper._world-wrapper > .p span{display:inline-block;margin-right:5px;}._india-wrapper div.p>a{display:inline-block;background-color:#fff;border-radius:20px;padding:2px 12px;margin:5px 5px 0 0;font-size:13px}._world-wrapper._india-wrapper h3{font-size:16px;padding-top:10px}._india-wrapper span.ind-mp_num{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-bottom:15px}._india-wrapper .data-up{color:#c9706b;font-weight:400;background:url(https://c.ndtvimg.com/2020-04/20hape3_red-arrow_120x90_01_April_20.svg) left center no-repeat;position:absolute;padding-left:12px;font-size:12px;margin-left:5px;top:50%;transform:translateY(-50%);font-weight:700}._india-wrapper .data-down-up{color:#4f9a0b;font-weight:400;background:url(https://c.ndtvimg.com/2020-04/qbegkfog_green-arrow_120x90_01_April_20.svg) left center no-repeat;position:absolute;padding-left:12px;font-size:12px;margin-left:5px;top:50%;transform:translateY(-50%);font-weight:700}._india-wrapper .total-data-list span.ind-mp_num .data-down-up,._india-wrapper .total-data-list span.ind-mp_num .data-up{position:absolute;left:50%;top:auto;bottom:2px;transform:translate(-50%,0);width:auto;margin:0;font-weight:700;word-break:keep-all}._india-wrapper ._india-table{width:100%;background-color:#fff;border-radius:6px;padding:10px;margin-top:10px}.table-body tr.table-row:last-child{border-bottom:none}table.rr-tbl tbody tr:nth-last-child(-n+20){display:none}#showRetired~.ldhide{display:none}#showRetired:checked+table.rr-tbl tbody tr:nth-last-child(-n+20){display:table-row}#showRetired:checked~.ldmore{display:none}#showRetired:checked~.ldhide{display:block}.ldhide,.ldmore{margin:0 auto;text-align:center;position:absolute;left:50%;transform:translateX(-50%)}.ldhide label,.ldmore label{background-color:#fff;padding:10px 30px;border-radius:20px;cursor:pointer;box-shadow:0 0 10px rgba(0,0,0,.12);position:relative}.ldhide label:after,.ldhide label:before,.ldmore label:after,.ldmore label:before{content:'';width:9px;height:9px;display:block;position:absolute;left:12px;top:50%;margin-top:-4px;background:url(https://c.ndtvimg.com/2020-04/20hape3_red-arrow_120x90_01_April_20.svg) center center no-repeat;background-size:100%;filter:grayscale(1) opacity(.65);transform:rotate(180deg)}.ldhide label:after,.ldmore label:after{left:auto;right:12px}.ldhide label:after,.ldhide label:before{transform:none}table.rr-tbl tr label{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;line-height:normal}table.rr-tbl tr label::before{content:'';position:absolute;left:0;width:16px;height:16px;border-radius:50%;top:50%;transform:translateY(-50%);background:#ccc url(https://c.ndtvimg.com/2020-04/he1so7ag_plus_120x90_01_April_20.svg) center center no-repeat;background-size:50%;opacity:.7}table.rr-tbl tr input:checked+label:before{content:'';position:absolute;left:0;width:16px;height:16px;border-radius:50%;top:50%;transform:translateY(-50%);background:#ccc url(https://c.ndtvimg.com/2020-04/836ofs2g_minus_120x90_01_April_20.svg) center center no-repeat;background-size:50%;opacity:.7}table.rr-tbl .ddiv{padding:10px;background-color:#fafafa;border-radius:6px;margin:10px}.dist-list{display:flex;align-items:center;justify-content:space-between;padding:6px;border-bottom:solid 1px #eaeaea;font-size:14px;font-weight:400}div.dist-list:first-child span{font-weight:700}.dist-list:last-child{border-bottom:none}table.rr-tbl input+label+div.ddiv{display:none}table.rr-tbl input:checked+label+div.ddiv{display:flex;flex-wrap:wrap;flex-direction:column}:root{--c:#CC362C;--c_b:rgba(162, 162, 162, .38);--a:#3A81D8;--a_b:rgba(129, 166, 211, .38);--r:#4F9A0B;--r_b:rgba(128, 183, 79, .38);--d:#CC362C;--d_b:rgba(201, 112, 107, .38);--con:#4C4C4C;--con_b:rgba(162, 162, 162, .38)}table.rr-tbl{max-width:100%;margin:0 auto;width:100%}table.rr-tbl .table-body tr{border-bottom:solid 1px #ddd}table.rr-tbl td,table.rr-tbl th{border-width:0;padding:10px;text-align:center;vertical-align:middle;font-size:16px;vertical-align:top;position:relative}table.rr-tbl td:first-of-type,table.rr-tbl th:first-of-type{text-align:left}.table.rr-tbl th:nth-of-type(1),table.rr-tbl td:nth-of-type(1){width:40%}.table.rr-tbl th:nth-of-type(2),table.rr-tbl td:nth-of-type(2){width:20%}.table.rr-tbl th:nth-of-type(3),table.rr-tbl td:nth-of-type(3){width:20%}.table.rr-tbl th:nth-of-type(4),table.rr-tbl td:nth-of-type(3){width:20%}table.rr-tbl td:nth-of-type(1) label{cursor:pointer;position:relative;padding-left:25px;display:flex}table.rr-tbl tr{margin:10px}table.rr-tbl .gr,table.rr-tbl .rd{color:var(--c);font-size:12px;padding:2px;margin:0;text-align:left;padding-top:10px}table.rr-tbl .gr{color:var(--r)}table.rr-tbl .c{background-color:var(--con_b);color:var(--con);min-width:82px;}table.rr-tbl .a{background-color:var(--a_b);color:var(--a);min-width:82px;}table.rr-tbl .r{background-color:var(--r_b);color:var(--r);min-width:82px;}table.rr-tbl .d{background-color:var(--d_b);color:var(--d);min-width:82px;}table.rr-tbl thead th{font-size:14px;padding:10px;background-color:rgba(234,234,234,.38);color:#4c4c4c;border-bottom:none;text-align:center;font-size:14px;font-weight:600;text-transform:uppercase;border-left:solid 1px rgba(255,255,255,.25)}table.rr-tbl thead th:first-child{border:none}p.mid-wrap{text-align:right;position:relative;transform:translateX(-50%);display:inline-block;margin:0;line-height:normal}@media only screen and (max-width:760px),(min-device-width:768px) and (max-device-width:1024px){table.rr-tbl .gr{font-size:10px}table.rr-tbl td,table.rr-tbl th{font-size:14px}table.rr-tbl .gr,table.rr-tbl .rd{font-size:10px}}@media only screen and (max-width:500px){._india-wrapper._world-wrapper > .p span{display:block;}._india-wrapper._world-wrapper{padding:15px 10px 0}.ind-mp_num{font-size:18px;letter-spacing:-.3px}._india-wrapper ._india-table{width:calc(100% + 20px);margin-left:-10px;padding:0 0 35px 0;border-radius:0;position:relative;overflow:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch}._world-wrapper>div.p{padding:10px 0 5px 0}table.rr-tbl thead th{text-transform:none;padding:10px 5px}table.rr-tbl td,table.rr-tbl th{padding:10px 0}table.rr-tbl .ddiv{margin:10px 0;padding:0;position:relative}.dist-list{font-size:14px}table.rr-tbl input:checked+label+div.ddiv{width:50vw}._world-wrapper._india-wrapper h3{font-size:14px;padding-top:10px;font-weight:700}}.add__wrp{width: 100%; margin-left: 0;}.crp_lgo {display: block;margin: -5px auto 0;max-width: 83px;line-height: 1;} .crp_lgo-wrp .m-nv_lnk {flex-direction: column; line-height: 1.4;} a.new-tag{position:relative} a.new-tag:after {content: "New"; top: -5px; color: #fff; background-color: #FF2E2E; padding: 1px 2px; font-size: 8px; border-radius: 2px; font-weight: bold; line-height: 1.2; position: absolute; color: #fff; right:-15px}.m-nv_lnk{padding: 16px 14px!important;}        				
				 
		 		 
		 		 
		  		 
		 		 
		 					
        		 
		 		 
		 		         
        
                 		 
				 
		 		 
		 		 
				 
		 		 
		 		 
		 		 		
				 
		 		
				
		 		 
		 		 		 /*miniplayer.css*/.externalVideo>iframe{display:block;}.externalVideo.scrolled>iframe{width:320px!important;position:fixed;bottom:180px;right:10px;z-index:2147483647;pointer-events:none;pointer-events:all;height:242px!important;}/*detailpage.css*/iframe[src*="edata.ndtv.com"]{height: 452px;} /*firework-widget.css*/div.ratio-wrapper {margin: auto;aspect-ratio: 9/16; width: 200px;}.fire-wrk-head{width:100%;position:relative;margin:0;float:left;display:flex;align-items:center}.fire-wrk-ttl{padding:3px 10px;background:#f5f5f5;font-size:14px;font-weight:700;letter-spacing:.5px;line-height:18px;text-align:center;border-radius:6px;text-transform:uppercase;color:#2e2e2e;position:relative;float:left}.fire-wrk-head a{position:absolute;font-size:12px;color:#333;right:0}#sticky-firework1 .ratio-wrapper {width: 300px;height:400px;}#firework1 .ratio-wrapper {width: 300px;height:400px;}.stick_firework {position: fixed;top: 50px;}div#sticky-firework1 {position: relative;z-index: 99999;margin-bottom:20px;} #firework1{ float: left;width: 300px;height: 466px;background-color: #fff;padding: 15px;border-radius: 2px;box-shadow: 0 0 10px rgb(0 0 0 / 12%);box-sizing: border-box;margin: 30px 0 45px; } #firework1 .ratio-wrapper { width: 100%; height: auto; }/*featured-video-widget.css*/.fvotd { width: 100%; background-color:#f1f7fa; padding: 15px; border-radius: 4px; float:left;}.fvotd .ins_instory_dv_caption { font-size: 16px; padding: 15px 0 0 0; } 
		 
		 
        </style><script type="text/javascript" >
            function setCookie(cname, cvalue, exdays, domain) {var d = new Date();d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));var domain = "domain=" + domain + ";"; if(domain == '') {domain = '';} var expires = "expires=" + d.toUTCString()+ ";"; if(exdays == '0') {expires = '';}document.cookie = cname + "=" + cvalue + "; " + expires + domain +" path=/";}
            function getCookie(cname) {var name = cname + "=";var ca = document.cookie.split(';');for (var i = 0; i < ca.length; i++) {var c = ca[i];while (c.charAt(0) == ' ')c = c.substring(1);if (c.indexOf(name) == 0)return c.substring(name.length, c.length);}return "";}
            function generateString(length) {return 'publisherprovidedids' + Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1)) + 'ndtvids';}
        </script><!-- OpwenWrap Script begins here --><script type="text/javascript">
        var PWT = {};
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        var gptRan = false;
        PWT.jsLoaded = function () {
            loadGpt();
        };
        (function () {
            var purl = window.location.href;
            var url = '//ads.pubmatic.com/AdServer/js/pwt/158451/3766';
            var profileVersionId = '';
            if (purl.indexOf('pwtv=') > 0) {
                var regexp = /pwtv=(.*?)(&|$)/g;
                var matches = regexp.exec(purl);
                if (matches.length >= 2 && matches[1].length > 0) {
                    profileVersionId = '/' + matches[1];
                }
            }
             
            var wtads = document.createElement('script');
            wtads.async = true;
            wtads.type = 'text/javascript';
            wtads.src = url + profileVersionId + '/pwt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(wtads, node);
                    })();
        var loadGpt = function () {
            // Check the gptRan flag
             
            if (!gptRan) {
                gptRan = true;
                var gads = document.createElement('script');
                var useSSL = 'https:' == document.location.protocol;
                gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            }
                    }
        // Failsafe to call gpt
        setTimeout(loadGpt, 500);
    </script><!--Wrapper Script ends here --><script type="text/javascript">
        // this function will act as a lock and will call the GPT API
        function initAdserver(forced) {
            if ((forced === true && window.initAdserverFlag !== true) || (PWT.a9_BidsReceived && PWT.ow_BidsReceived)) {
                window.initAdserverFlag = true;
                PWT.a9_BidsReceived = PWT.ow_BidsReceived = false;
                googletag.pubads().refresh();
            }
        }
    </script><script>
		        !function (a9, a, p, s, t, A, g) { if (a[a9]) return; function q(c, r) { a[a9]._Q.push([c, r]) } a[a9] = { init: function () { q("i", arguments) }, fetchBids: function () { q("f", arguments) }, setDisplayBids: function () { }, targetingKeys: function () { return [] }, _Q: [] }; A = p.createElement(s); A.async = !0; A.src = t; g = p.getElementsByTagName(s)[0]; g.parentNode.insertBefore(A, g) }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
        apstag.init({
            pubID: '5d5467fe-bc8c-4335-993a-e0314547592e', //enter your pub ID here as shown above, it must within quotes
            adServer: 'googletag'
        });
        // APS request
        apstag.fetchBids({
			slots: [{"slotID":"adslot728x90ATF","slotName":"\/1068322\/NDTV_ISP_728x90_ATF","sizes":[[728,90],[970,90]]},{"slotID":"adslot300x250ATF","slotName":"\/1068322\/NDTV_ISP_300x250_ATF","sizes":[[300,250]]},{"slotID":"adslot300x250BTF2","slotName":"\/1068322\/ndtv_news_ros_300x250_btf-2","sizes":[[300,250],[300,600]]},{"slotID":"adslot300x250BTF","slotName":"\/1068322\/NDTV_News_ROS_300x250_BTF","sizes":[[300,250]]}],
            timeout: 1000 // Make Sure this timeout is less than or equal to OpenWrap TimeOut

        }, function (bids) {
            googletag.cmd.push(function () {
                apstag.setDisplayBids();
                PWT.a9_BidsReceived = true;
                initAdserver(false);
            });
        });
		    </script><!-- A9 Script End --><script type="text/javascript"> 
		        var utm_campaign = '';                
                googletag.cmd.push(function () {
		
									                        window.slot_1 = googletag.defineSlot('/1068322/NDTV_ISP_728x90_ATF', [[970, 90], [728, 90], 'fluid'], 'adslot728x90ATF').addService(googletag.pubads()).setTargeting('subsection','feature').setTargeting('storyid','4967596').setTargeting('context','14-Year-Old Catches Fire while trying to remove nail polish,14-Year-Old Suffers Third-Degree Burns,nail polish removing near candle');    
						window.slot_2 = googletag.defineSlot('/1068322/NDTV_ISP_300x250_ATF', [[300, 250], [300, 600], 'fluid'], 'adslot300x250ATF').addService(googletag.pubads()).setTargeting('subsection','feature').setTargeting('storyid','4967596').setTargeting('context','14-Year-Old Catches Fire while trying to remove nail polish,14-Year-Old Suffers Third-Degree Burns,nail polish removing near candle');    				
						
											
						window.slot_3 = googletag.defineSlot('/1068322/NDTV_News_ROS_300x250_BTF',[[300,250], 'fluid'],'adslot300x250BTF').addService(googletag.pubads()).setTargeting('subsection','feature').setTargeting('storyid','4967596').setTargeting('context','14-Year-Old Catches Fire while trying to remove nail polish,14-Year-Old Suffers Third-Degree Burns,nail polish removing near candle');
						window.slot_6 = googletag.defineSlot('/1068322/NDTV_ISP_300x100_ATF', [[300, 100], 'fluid'], 'adslot300x100ATF').addService(googletag.pubads()).setTargeting('subsection','feature').setTargeting('storyid','4967596').setTargeting('context','14-Year-Old Catches Fire while trying to remove nail polish,14-Year-Old Suffers Third-Degree Burns,nail polish removing near candle');	 
					
									
				 	
					 						window.slot_4 = googletag.defineSlot('/1068322/ndtv_news_ros_300x250_btf-2', [[300, 250], [300, 600], 'fluid'], 'adslot300x250BTF2').addService(googletag.pubads()).setTargeting('subsection','feature').setTargeting('storyid','4967596').setTargeting('context','14-Year-Old Catches Fire while trying to remove nail polish,14-Year-Old Suffers Third-Degree Burns,nail polish removing near candle');
						//window.slot_7 = googletag.defineSlot('/1068322/NDTV_News_ROS_Native_Outstream', [['fluid'],[1,1]],  'adslotNativeVideo').addService(googletag.pubads()).setTargeting('subsection','feature').setTargeting('storyid','4967596').setTargeting('context','14-Year-Old Catches Fire while trying to remove nail polish,14-Year-Old Suffers Third-Degree Burns,nail polish removing near candle');
						
				 					//window.slot_7 = googletag.defineSlot('/1068322/NDTV_News_ROS_300x400_Temp_BTF', [[250, 250], [300, 400], [300, 300], [300, 250], [300, 200]], 'div-gpt-ad-1680434426304-0').addService(googletag.pubads());
		    		
					
                    if (getCookie('PublisherProvidedIdsNew') === null || getCookie('PublisherProvidedIdsNew') === "" ) {
                        setCookie('PublisherProvidedIdsNew', generateString(9), "180", ".ndtv.com");
                    }
                    googletag.pubads().setPublisherProvidedId(getCookie('PublisherProvidedIdsNew'));
                    googletag.enableServices();
					googletag.pubads().enableLazyLoad({
                       fetchMarginPercent: 100, 
                       renderMarginPercent: 200,
                     });
                     googletag.enableServices();
					 googletag.pubads().enableSingleRequest();
					 googletag.pubads().disableInitialLoad();
 


	 	
     var trTagVal = getCookie('__ngutmtags'); 
     if(utm_campaign != '') {
        googletag.pubads().setTargeting('UTM', [utm_campaign]);
     } else if(trTagVal != '') {
        googletag.pubads().setTargeting('UTM', [trTagVal]);
     }
     var __gdpr = getCookie('__usrloc'); if(__gdpr == 'EU'){googletag.pubads().setRequestNonPersonalizedAds(1);}
 // OpenWrap code START here
            if (typeof PWT.requestBids === 'function') {
                PWT.requestBids(
                    PWT.generateConfForGPT(googletag.pubads().getSlots()),
                    function (adUnitsArray) {
                        console.log("AdUnitsArray", adUnitsArray);
                        if (adUnitsArray[0].bidData.kvp.pwtplt == "video") {
                            var videoUrl = window.PWT.generateDFPURL(adUnitsArray[0], {
                                section: 'blog',
                                anotherKey: 'anotherValue'
                            });
                            invokeVideoPlayer(videoUrl);
                        } else {
                            PWT.addKeyValuePairsToGPTSlots(adUnitsArray);
                            PWT.ow_BidsReceived = true;
                            initAdserver(false);
                        }
                    });
            }
            // No need to handle "else" part as we have A9 wrapper on page
            // OpenWrap code END here
            var FAILSAFE_TIMEOUT = 1000; // this timeout should be more than OpenWrap and A9 timeout
            setTimeout(function () {
                initAdserver(true); // calling this function with forced mode set to true so that GPT API is always executed
            }, FAILSAFE_TIMEOUT);
        });

       

</script><script data-cfasync="false" type="text/javascript">
						setTimeout(function () {
				var w = window;
				var d = document;
				var s = d.createElement('script');
				s.src = '//cdn.adpushup.com/42260/adpushup.js';
				s.crossOrigin = 'anonymous';
				s.type = 'text/javascript';
				s.async = true;
				(d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
				w.adpushup = w.adpushup || { que: [] };
			}, 10000);
					</script><script>
            var isTaboolaBlocked = 'no';
            var disableTaboolaCountries = ['FI','NO','PE','CO','AR'];
            var __usrCntry = getCookie("__usrCntry") || '_NA_';
            isTaboolaBlocked = (disableTaboolaCountries.indexOf(__usrCntry)!== -1) ? 'yes' : 'no';
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'block_toobla': isTaboolaBlocked});
        </script><script type="text/javascript">var canRunAds = false;/*document.domain="ndtv.com";*/</script><script type="text/javascript"> var __pushSite = 'ndtv';var base_url = 'https://www.ndtv.com/';var ndtv_thumb_src = 'https://c.ndtvimg.com/2024-01/6fjg2kho_nail-polish-generic_625x300_31_January_24.jpeg';var ndtv_story_src = 'https://c.ndtvimg.com/2024-01/ns8tc6i8_nail-polish-generic_625x300_31_January_24.jpeg';var ndtv_story_medium_src = 'https://c.ndtvimg.com/2024-01/n1njffbo_nail-polish-generic_625x300_31_January_24.jpeg';var N = 0x29 + 0x921 + 0x3712;var ppids = getCookie('PublisherProvidedIdsNew');</script><script>
        window.dataLayer = window.dataLayer || [];    
        var jsonString =  {"SiteName":"www.ndtv.com","PageType":"story","ContentType":"article","SourceType":"","ContentSource":"NDTV","Platform":"desktop","author":"Anjali Thakur","articlecategory":"feature","articletitle":"14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US","publicationyear":"2024","publicationmonth":"01","publicationdate":"31-01-2024","publicationday":"31","articlelength":4434,"articlepara":12,"language":"english","articletags":"14-Year-Old Catches Fire while trying to remove nail polish|14-Year-Old Suffers Third-Degree Burns|nail polish removing near candle","articleage":"0 day","tvc_article_id":"4967596","postedby":"Anjali Thakur","PPID":""};
		jsonString['PPID'] = ppids;
		window.dataLayer.push(jsonString);        
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N2R2KQQ');
        </script><!-- Google Analytics Starts --><script>
(function (i, s, o, g, r, a, m) {i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {(i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date();a = s.createElement(o),m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    
ga('create', 'UA-2598638-50', 'auto', {'name': 'site'});ga('site.send', 'pageview');
    ga('create', 'UA-11243047-47', 'auto', {'name': 'story'});ga('story.send', 'pageview');
           
 ga('create', 'UA-2598638-73', 'auto', {'name': 'ndtvnewssite'});ga('ndtvnewssite.send', 'pageview');
  
  	
(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = 'https://ssl.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();
</script><!-- Google Analytics Ends --><script type="text/javascript">var _comscore = _comscore || [];_comscore.push({ c1: "2", c2: "9548033" });(function() {var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";el.parentNode.insertBefore(s, el);})();</script><noscript><img src="https://sb.scorecardresearch.com/p?c1=2&c2=9548033&cv=2.0&cj=1" /></noscript><script type="text/javascript">
  (function() {
    var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
    _sf_async_config.uid = 34512;
    _sf_async_config.domain = 'ndtv.com';
    _sf_async_config.flickerControl = false;
    _sf_async_config.useCanonical = true;
    _sf_async_config.useCanonicalDomain = true;
    _sf_async_config.sections = 'feature';
    _sf_async_config.authors = 'Anjali Thakur';
    _sf_async_config.type = 'story';
    function loadChartbeat() {
        var e = document.createElement('script');
        var n = document.getElementsByTagName('script')[0];
        e.type = 'text/javascript';
        e.async = true;
        e.src = '//static.chartbeat.com/js/chartbeat.js';;
        n.parentNode.insertBefore(e, n);
    }
    loadChartbeat();
  })();
</script><script async src="//static.chartbeat.com/js/chartbeat_mab.js"></script><script type="text/javascript">window._rrCode = window._rrCode || [];_rrCode.push(function(){ var currentDate = new Date();var currentTime = new Date(currentDate.valueOf() + currentDate.getTimezoneOffset() * 60000);var pwVersion = currentTime.getFullYear().toString() + (currentTime.getMonth() + 1) + currentTime.getDate() +'.' + currentTime.getHours();!function(e, f, u) { e.async = 1; e.src = u; f.parentNode.insertBefore(e, f); }(document.createElement('script'), document.getElementsByTagName('script')[0], '//cdn.gadgets360.com/pricee/assets/affiliate/js/convergence.min.js?ver=' + pwVersion); });</script>
                              <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="P4S98-FTZ59-DVK4T-C5SG5-AXGYM",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"P4S98-FTZ59-DVK4T-C5SG5-AXGYM",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e=""=="true"?1:0,t="",n="snjyegyccwguizn2rr2q-f-4c79541b5-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"36","ak.cp":"349190","ak.ai":parseInt("216860",10),"ak.ol":"0","ak.cr":54,"ak.ipv":4,"ak.proto":"http/1.1","ak.rid":"8f4133","ak.r":47057,"ak.a2":e,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"147.83.130.0","ak.cport":38524,"ak.gh":"92.123.116.6","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"reno","ak.t":"1706724469","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==j+Dre2+ilH81yKKOZgTimp4pQHE9qN7sjEk943Srynikmzo16N3k6LVokpvNdk4doLuECiAcI5eXqjZjjkwurNp6Tkh+CYTn0lQ1lZsYD/SxoFcgPrvyrV/NaZI/qCwqIM2ThuDAbSJuyh/e6/GT+daUgqc3LGy5WAKNXgTbePcATOoxBPiVpVCd1P4dAxbpfXwfe7p9aZHW9mHha7d8IFHTlfil3dxTcVz7WcTfO6dWq9pN7yJ3Sf3UIDQSHMKl1Ed+AnKVGgiT+JEWFrXGEZDDvAm/2Uusigy99r41X4chbgWqimfKS8ppw4uK/81MCPMfJ1ooT3cSK2IQ2dxPoqodZzPvuSt3k4vm3gq0waLjdND/Fq33za9dO3V5lSXYn+A3N71XZNTSTgzImrrIHKEsJF0/R9GNvHo8JHp8AcA=","ak.pv":"125","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head><body ><!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2R2KQQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) --><!--====== Top Menu, Advertisement & Social share ======--><header class="header clearfix"><div class="t-br"><div class="container"><div class="row"><div class="t-br_modify"><nav class="t-nv_lf"><ul class="t-nv_ul"><li class="t-nv_li"><a class="t-nv_lnk t-nv_act  " href="https://www.ndtv.com/#pfrom=ndtv-globalnav" alt="NDTV">NDTV</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.ndtv.com/world/#pfrom=ndtv-globalnav" alt="World Edition">World Edition</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.ndtvprofit.com/#pfrom=ndtv-globalnav" alt="Profit">Profit</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://ndtv.in/#pfrom=ndtv-globalnav" alt="हिंदी">हिंदी</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://sports.ndtv.com/cricket#pfrom=ndtv-globalnav" alt="Cricket">Cricket</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.ndtv.com/entertainment#pfrom=ndtv-globalnav" alt="MOVIES">MOVIES</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://food.ndtv.com/#pfrom=ndtv-globalnav" alt="FOOD">FOOD</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://swirlster.ndtv.com/#pfrom=ndtv-globalnav" alt="LIFESTYLE">LIFESTYLE</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://doctor.ndtv.com/#pfrom=ndtv-globalnav" alt="HEALTH">HEALTH</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://swachhindia.ndtv.com/#pfrom=ndtv-globalnav" alt="SWASTH">SWASTH</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.gadgets360.com/#pfrom=ndtv-globalnav" alt="TECH">TECH</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.whosthat360.com/#pfrom=ndtv-globalnav" alt="WhosThat360">WhosThat360</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.ndtvgames.com/#pfrom=ndtv-globalnav" alt="Games">Games</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.ndtv.com/big-bonus#pfrom=ndtv-globalnav" alt="Big Bonus">Big Bonus</a></li><li class="t-nv_li"><a class="t-nv_lnk   " href="https://www.ndtv.com/shopping#pfrom=ndtv-globalnav" alt="SHOPPING">SHOPPING</a></li></ul></nav></div></div></div></div></header><nav class="m-nv"><div class="container "><div class="row" ><div class="top-header"><a href="#" class="nav_icn"><span></span><span></span><span></span></a><!-- Logo - Dropdown --><div class="ndtv-logo-wrp dd-ven dd-nav_two dd-nav_hvr fleft logo-"><a class="ndtv-logo" href="https://www.ndtv.com/"><img alt="NDTV News" title="News" class="ndtv-logo-img" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzY1IDY4LjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2NSA2OC45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0VFMDAwMDt9PC9zdHlsZT48ZyBpZD0iWE1MSURfMV8iPjxwYXRoIGlkPSJYTUxJRF8zXyIgZD0iTTAsMC4xYzguNCwwLDE2LjgtMC4xLDI1LjIsMEMzNS4yLDAuNyw0NCw3LjQsNDguOCwxNmM0LjgsOS4xLDksMTguNSwxMy45LDI3LjVjMS42LDMuMiw0LjgsNS40LDguNCw1LjVDNzAuOSwzMi43LDcxLDE2LjQsNzEsMGM3LjQsMC4xLDE0LjcsMCwyMi4xLDBjMCw3LjEsMCwxNC4yLTAuMSwyMS40Yy01LjEsMi05LjQsNi41LTkuNSwxMi4yYy0wLjcsNi4yLDMuOSwxMS44LDkuNSwxMy43YzAuMSw3LjIsMCwxNC4zLDAuMSwyMS41Yy03LjMsMC4xLTE0LjcsMC0yMiwwLjFjLTguNSwwLjQtMTYuOS0zLjUtMjIuMy05LjljLTYtNy4zLTkuMS0xNi41LTEzLjYtMjQuNkMzMi4xLDI4LjYsMjkuOSwyMCwyMiwxOS43YzAsMTYuNC0wLjEsMzIuNywwLjEsNDkuMWMtNy40LDAuMS0xNC43LDAuMS0yMi4xLDBDMC4xLDQ1LjksMC4xLDIzLDAsMC4xeiIvPjxwYXRoIGlkPSJYTUxJRF82XyIgZD0iTTk5LjYsMC4xYzYyLjQsMCwxMjQuNy0wLjIsMTg3LjEsMC4xYzkuMywxNi45LDE4LjgsMzMuNywyOCw1MC42YzkuMi0xNi44LDE3LjctMzQsMjYuOC01MC44YzcuOCwwLjEsMTUuNi0wLjEsMjMuNSwwLjJjLTEuMywxLjktMi42LDMuOC0zLjcsNS44Yy0xMSwyMS0yMi4xLDQxLjktMzMuMiw2Mi44Yy04LjksMC0xNy45LDAtMjYuOCwwYy05LjctMTcuNS0xOS42LTM1LTI5LjItNTIuNWMtOS44LTAuMS0xOS43LDAtMjkuNSwwYzAsMTcuNSwwLjEsMzUsMCw1Mi41Yy03LjEsMC0xNC4xLDAtMjEuMiwwYzAtMTcuNSwwLjEtMzUsMC01Mi42Yy0xMC44LDAuMS0yMS43LDAtMzIuNSwwLjFjMiw3LjUsMS44LDE1LjMsMS41LDIzYy0wLjMsNy44LTIuNCwxNi4yLTguMiwyMS44Yy01LjYsNS44LTE0LDcuOC0yMS44LDcuN2MtMjAuMi0wLjEtNDAuNCwwLjEtNjAuNS0wLjFjMC4xLTcuMiwwLTE0LjMsMC4xLTIxLjRjNC44LTEuOSw4LjktNS44LDkuNC0xMS4yYzEtNi41LTMuNS0xMi42LTkuNC0xNC43Qzk5LjYsMTQuMyw5OS44LDcuMiw5OS42LDAuMSBNMTIxLjEsMTYuNWMwLjIsMTIsMC4xLDIzLjksMC4xLDM1LjljMTIuMSwwLjIsMjQuMiwwLjEsMzYuMiwwLjFjNC43LDAuMiwxMC4zLTIuNCwxMS03LjZjMC40LTYuNywwLjMtMTMuNCwwLjEtMjAuMWMtMC41LTUuNC02LjEtOC40LTExLjEtOC4zQzE0NS4zLDE2LjMsMTMzLjIsMTYuMiwxMjEuMSwxNi41eiIvPjxwYXRoIGlkPSJYTUxJRF83XyIgY2xhc3M9InN0MCIgZD0iTTgzLjUsMzMuNmMwLjEtNS43LDQuNC0xMC4zLDkuNS0xMi4yYzIuMi0wLjIsNC41LTAuMiw2LjcsMGM1LjksMi4yLDEwLjQsOC4yLDkuNCwxNC43Yy0wLjQsNS4zLTQuNiw5LjMtOS40LDExLjJjLTIuMiwwLjItNC41LDAuMi02LjcsMEM4Ny40LDQ1LjQsODIuOCwzOS45LDgzLjUsMzMuNnoiLz48L2c+PC9zdmc+"></a><div itemprop="publisher" itemscope itemtype="https://schema.org/Organization"><div itemprop="logo" content="https://cdn.ndtv.com/static/ndtv_2014/images/ndtvlogo_blk.png" itemscope itemtype="https://schema.org/ImageObject"><meta itemprop="url" content="https://cdn.ndtv.com/static/ndtv_2014/images/ndtvlogo_blk.png"></meta><meta itemprop="width" content="100"></meta><meta itemprop="height" content="30"></meta><div itemprop="inLanguage" itemscope itemtype="https://schema.org/Language"><meta itemprop="name" content="English"/></div></div><meta itemprop="name" content="NDTV"></meta><meta itemprop="url" content="https://www.ndtv.com"></div></div><nav class="m-nv_lf"><ul id="inkmob-nav" class="m-nv_ul"><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="LIVE TV" href="https://www.ndtv.com/video/live/channel/ndtv24x7">LIVE TV </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="LATEST" href="https://www.ndtv.com/latest">LATEST </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="INDIA" href="https://www.ndtv.com/india">INDIA </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="VIDEO" href="https://www.ndtv.com/video">VIDEO </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="Election" href="https://special.ndtv.com/ndtv18kavote-136/">Election </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="OPINION" href="https://www.ndtv.com/opinion">OPINION </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="CITIES" href="https://www.ndtv.com/cities">CITIES </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="Web Stories" href="https://www.ndtv.com/webstories">Web Stories </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="OFFBEAT" href="https://www.ndtv.com/offbeat">OFFBEAT </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="Feature" href="https://www.ndtv.com/feature">Feature </a></li><li class="m-nv_li dd-nav_hvr"><a class="m-nv_lnk m-nv_act" title="TRENDS" href="https://www.ndtv.com/trends">TRENDS </a></li><li class="m-nv_li dd-nav_three-r dd-nav_hvr"><a class="m-nv_lnk" title="Videos" href="javascript:void(0);"><svg class="ndtv-icon"><use xlink:href="#more"></use></svg></a><div class="dd-nav"><ul class="dd-nav_ul col-md-4"><li class="dd-nav_li"><a class="m-nv_lnk" title="EDUCATION" href="https://www.ndtv.com/education">EDUCATION</a></li></ul><ul class="dd-nav_ul col-md-4"><li class="dd-nav_li"><a class="m-nv_lnk" title="SOUTH" href="https://www.ndtv.com/south">SOUTH</a></li><li class="dd-nav_li"><a class="m-nv_lnk" title="PEOPLE" href="https://www.ndtv.com/people">PEOPLE</a></li></ul><ul class="dd-nav_ul col-md-4"><li class="dd-nav_li"><a class="m-nv_lnk" title="Science" href="https://www.ndtv.com/science">Science</a></li><li class="dd-nav_li"><a class="m-nv_lnk" title="Photos" href="https://www.ndtv.com/photos">Photos</a></li></ul><ul class="dd-nav_ul col-md-4"><li class="dd-nav_li"><a class="m-nv_lnk" title="WEATHER" href="https://social.ndtv.com/static/Weather/report/">WEATHER</a></li><li class="dd-nav_li"><a class="m-nv_lnk" title="TV Schedule" href="https://www.ndtv.com/tv-schedule">TV Schedule</a></li></ul><ul class="dd-nav_ul col-md-4"><li class="dd-nav_li"><a class="m-nv_lnk" title="Trains" href="https://www.ndtv.com/indian-railway/">Trains</a></li></ul></div></li></ul></nav><!-- Story Tittle & Social Share Sticky Drop --><div class="stk-t"><div class="stk-t_wr"><div class="stk-ttl txt_trc-one">14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US</div><div class="ss"><a href="javascript:void(0);" class="ss-lk facebook ttp" onclick="shareOpenHead('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&t=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US', 900, 500,'facebook');"><svg class="ndtv-icon"><use xlink:href="#facebook"></use></svg></a><a href="javascript:void(0);" class="ss-lk twitter ttp" onclick="shareOpenHead('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&text=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US&via=ndtv', 650, 420,'twitter');"><svg class="ndtv-icon"><use xlink:href="#twitter"></use></svg></a><a href="javascript:void(0);" class="ss-lk twitter ttp" onclick="shareOpen('https://api.whatsapp.com//send?text=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US-https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596', 900, 600,'whatsapp');"><svg class="ndtv-icon"><use xlink:href="#whatsapp"></use></svg></a><a href="javascript:void(0);" class="ss-lk reddit ttp hid_sml-dvc" onclick="shareOpenHead('https://reddit.com/submit?url=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&title=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US', 900, 600,'reddit');"><svg class="ndtv-icon"><use xlink:href="#reddit"></use></svg></a><a href="javascript:void(0);" class="ss-lk linkedin ttp hid_sml-dvc" onclick="shareOpenHead('https://www.linkedin.com/cws/share?url=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&token=&isFramed=true',550,550,'linkedin');"><svg class="ndtv-icon"><use xlink:href="#linkedin"></use></svg></a><a class="ss-lk mailbox ttp" target="_blank" href="mailto:?subject=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US&amp;body=Check out this link https://www.ndtv.com/feature/14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596" title="Share by Email"><div class="vj_mix"><svg class="ndtv-icon"><use xlink:href="#email"></use></svg></div></a><!--<a class="ss-lk printer ttp" href="javascript:void(0);" onclick="JavaScript:window.print();"><div class="vj_mix"><svg class="ndtv-icon"><use xlink:href="#print"></use></svg></div></a> --><button href="#" class="ss-lk comment vj_mix-comment cmt-ac cmt-dn"><div class="vj_mix"><svg class="ndtv-icon"><use xlink:href="#chat"></use></svg><span class="numb ndtv-cmnt-cnt" style="display:block;"></span></div></button><a class="snapchat-creative-kit-share ss-lk ttp" data-text="false" data-size="large" data-share-url="https://www.ndtv.com/feature/14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596?snapchat=1"><svg class="ndtv-icon"><use xlink:href="#snapchat"></use></svg></a><a href="javascript:void(0);" class="t-icn-nv t-icn-sr ttp control searchBtn"><svg class="ndtv-icon"><use xlink:href="#search"></use></svg></a></div></div></div><script>function shareOpenHead(url, width, height,type) {window.open(url, "", "toolbar=0, status=0, width=" + width + ", height=" + height + "");
dataLayer.push({'event':'social_icon_top',
'eventCategory':'social icon top',
'eventAction':'top icon clicked',
'eventLabel': type,
'PageType':'story',
'SiteName':'www.ndtv.com',
'URL':'https://www.ndtv.com/feature/14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596',
'Article Category':'feature'
});	
	
		
	}
</script><!-- Right Icons Live Tv, Notification and Search --><div class="fright"><!-- Search Icon --><a href="javascript:void(0);" class="t-icn-nv t-icn-sr ttp control"><svg class="ndtv-icon"><use xlink:href="#search"></use></svg></a><!-- Notification Icon --><span id="___ndtvspldiv" class="t-icn-nv t-icn-nt ttp" ></span><!-- Live TV Icon & Dropdown --><div class="t-icn-nv t-icn-ltv m-nv_li dd-nav_ltv-r dd-nav_hvr nw-chanlAd"><svg class="ndtv-icon"><use xlink:href="#livetv"></use></svg><div class="dd-nav live-tv live-tvgrp pt-0"><div class="dd-nav_ul"><div class="dd-nav_li"><a class="m-nv_lnk" href="https://www.ndtv.com/video/live/channel/ndtv24x7"><svg
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.23 100.3"><path fill="currentColor"
                             d="m181.32,55.8h-17.3l-10.4,12.1-10.39-12.1h-17.41l19.11,22.2-8.91,10.34v-13.44h-.09l-10.5.1v-34.9h-20.81l-35.14,21.68c.05-2.83.05-5.62.05-8.48,0-5.3-2.6-9.2-7.61-11.2-3.5-1.4-7.09-1.9-10.8-1.9-9.9-.1-20-.1-29.89,0-4.21,0-8.3.5-12.21,1.9-3.2,1.1-5.69,3.1-7.1,6.3C-.17,52.9.03,57.8.22,62.7h17.11v-1.3c.09-4.1,1.79-6.2,5.79-7.1,1.11-.3,2.4-.4,3.61-.4,6.19,0,12.39-.1,18.6,0,1.5,0,3,.3,4.39.8,2,.6,2.61,1.7,2.61,3.7v1.9c0,1.8-.71,3-2.41,3.5-1.5.5-3.09.9-4.59,1-10.3.9-20.6,1.7-30.9,2.5-3.5.3-6.81,1.2-9.71,3.3-2.69,1.9-4.5,4.5-4.6,7.9-.2,7.2-.09,14.4-.09,21.7h68.79v-11.41l40.11-.59v12.1h16.6v-11.4l10.18-.19-9.89,11.49h17.41l10.39-12.1,10.4,12.1h17.3l-19-22.2,19-22.2Zm-119.49,31.3H17.42c-.5-3.7,1.41-6.3,5.1-6.6,7.1-.7,14.4-1.1,21.6-1.8,4.71-.4,9.41-.8,14-1.5,1.35-.21,2.58-.55,3.71-1.02v10.92Zm46.99-12.1l-34.5.2,34.5-20.8v20.6Zm73.3-34.9v14.8h45.2l-39.8,45.3h22.1l39.61-46.1v-14h-67.11ZM64.32,0v25.3h-.2c-2.2,0-3.59-2.4-4.2-3.5l-5.7-12.5c-2.69-5.7-7.5-9.3-12.8-9.3h-13.59v35.7h11.29V10.4h.3c2.5,0,4.11,2.7,4.41,3.5l6.09,12.5c2.61,5.8,7.7,9.3,13.5,9.3h11.4V0h-10.5Z" /><path fill="currentColor"
                             d="m201.43.6v.2l-13.5,25.9L173.52.8h-94.3v34.9h22.71v-.1h7.29c10.4,0,15.31-6.2,15.31-16.3v-3.9c0-1.1,0-4-.91-6.9h16.61v27h10.5V8.5h15.29l15.1,27h13.5L213.02.6h-11.59Zm-87.31,20.9c0,3.5-1.9,5.4-6.3,5.4h-5.89v.1h-12.21V8.7h12.21v-.1h5.89c4.21,0,6.3,2.1,6.3,5.3v7.6Z" /><path fill="#dc3831"
                             d="m83.53,18.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-3-6.5-6.5,2.9-6.7,6.5-6.7c3.6.1,6.5,3.1,6.5,6.7h0Z" /></svg></a></div><div class="dd-nav_li"><a class="m-nv_lnk" href="https://ndtv.in/videos/live/channel/ndtvindia"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.1 27.5"><path fill="currentColor"
                             d="m18.3,0c.4,0,.8.1,1.2.1.6,0,1.2.1,1.8.4,1,.5,1.6,1.2,2.1,2.1.6,1.2,1.2,2.3,1.8,3.5.1.3.3.6.6.8.2.1.3.2.6.2V.1h3.2v9.8h.9V0h26.6v.1c1.4,2.3,2.7,4.7,4,7.1.1,0,.1.1.1.1.1,0,.1-.1.1-.1,1-1.8,1.9-3.7,2.9-5.5.2-.5.5-.9.8-1.6,1.1,0,2.2,0,3.1.1-.1.3-.2.5-.3.7-1.5,3-3.1,6-4.7,9,0,0,0,.1-.1.1l-1.2,2.3h-6.1v10.5h-3.1v-10.5h-2.8v10.5h-3.3v-2.3q-.4.1-.5.2c-1.2.5-2.6.9-3.9.9-1.2,0-2.4-.2-3.5-.8-1.2-.7-1.9-1.7-2.4-3-.2-.7-.4-1.4-.5-2.1v-.1c.4,0,.7.1,1,.1.8.1,1.6.1,2.3-.1.6-.2,1-.6,1.1-1.2,0-.6-.1-1.1-.5-1.5l-.1-.1c-.27-.25-.56-.4-1-.4-1.4.1-2.7,0-4.1,0h-.3v3.6h-.2c-2.1,0-4.1.1-6.2.1-.3,0-.6.1-.9.2-.3,0-.5.3-.5.6-.1.3.1.5.4.7.5.2,1,.2,1.5.2.9,0,1.9-.1,2.8-.1s1.9,0,2.9.2c.3.1.7.2,1,.4,1.2.6,1.5,1.6,1.4,2.7-.2,1-.8,1.7-1.7,2.2-.8.5-1.7.7-2.7.8-1.8.3-3.5.2-5.3.1-1.1-.1-2.3-.3-3.3-.8-.6-.3-1.3-.8-1.6-1.2l2.4-1.5.16.17c.49.49,1.12.75,1.84.93,1.1.3,2.4.4,3.6.4.8-.1,1.6-.2,2.4-.6.3-.2.6-.4.7-.7.1-.4,0-.6-.3-.8s-.7-.3-1.1-.3c-.7-.1-1.3-.1-1.9-.1h-2.7c-.9-.1-1.8-.2-2.6-.6-1-.5-1.6-1.3-1.5-2.4.1-.7.4-1.2,1-1.6.6-.5,1.4-.7,2.2-.8.8,0,1.6-.1,2.4-.1s1.5-.1,2.3-.1h.2v-1.7h-11.1v12.6h-3.1v-12.6h-3.4v3.6h-.3c-2.2,0-4.4.1-6.6.1-.2,0-.4.1-.6.2-.3.1-.5.3-.5.7,0,.3.2.6.5.7.2.1.4.1.6.1,2,0,4,0,6,.1,1.3,0,2.5.9,2.8,2.1.3,1.1-.1,2.3-1.2,3-.7.5-1.5.8-2.4.9-.7,0-1.3.1-2,.1h-.2c1.4.9,2.3,2.1,3,3.6h-3.4c-.5-1-1-1.9-1.8-2.7-.6-.5-1.2-.9-2-.9-.5,0-.9-.1-1.4-.1-.7-.1-1.4-.2-2.3-.8-.4-.3-.7-.6-.9-1,.9-.4,1.8-.9,2.7-1.3.1-.1.2,0,.2,0,.2.2.4.3.6.5.5.4,1.2.7,1.9.7,1,.1,1.9.1,2.9.1.5,0,1.1-.1,1.7-.3.6-.2,1-.6,1-1.3,0-.4-.2-.6-.5-.8-.2-.1-.5-.2-.7-.2-.8-.2-1.7-.1-2.6-.1-1.1,0-2.2,0-3.3-.1-.8-.1-1.5-.3-2.1-.7-1.3-.9-1.4-3.1.2-3.9.8-.4,1.6-.5,2.5-.5h4.6v-2H.2c-.1,0-.2.1-.2.1v-2.5h16.4V0h1.9Zm28.3,12.2h-4c.6.6,1,1.7.9,2.7s-.5,1.7-1.3,2.2c-.5.3-1,.4-1.5.5-.3,0-.7.1-1.1.1v.1c.3.6.7,1,1.3,1.3.9.4,1.8.4,2.7.2,1.1-.3,2-.9,2.7-1.8l.04-.04s.06-.1.06-.16c0-1.6.1-3.2.2-4.8v-.3ZM20.02,3.1h-.12s0,6.7,0,6.7h1.99c1.14,0,2.22.02,3.31.1-.2-.1-.4-.2-.6-.3-.8-.4-1.4-1.2-1.8-2-.6-1.2-1.1-2.3-1.7-3.5-.1-.3-.2-.6-.5-.8-.14-.14-.29-.18-.47-.2h-.11Zm27.88-.5h-4.6c.1.3.2.6.2.9.1.3.1.5.1.8,0,.6.1,1.3,0,2-.1.9-.3,1.7-.9,2.4-.4.5-1,.9-1.6,1.1h6.9c0-2.6,0-4.8-.1-7.2Zm7.2,0c-1.2,0-2.5.1-3.8.1h-.3v7.1h8.4c-1.3-2.4-2.7-4.7-4-7.1-.1-.1-.2-.1-.3-.1Zm-21.1.1h-.1v4.9h.1c1.6,0,3.2.1,4.8.1h.5c.7-.1,1.2-.6,1.3-1.2v-2.6c0-.5-.4-.9-.9-1.1-.3-.1-.5-.1-.8-.1-1.6-.1-3.3,0-4.9,0Zm-23.7,1.5v2.9h-3.3v-2.9h3.3Z" /><circle fill="#dc3831" cx="30.3" cy="5.1" r="1.5" /></svg></a></div><div class="dd-nav_li"><a class="m-nv_lnk" href="https://mpcg.ndtv.in/livetv-ndtvmpcg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1041.26 362.64"><polygon fill="#ec1d24" points="0 195.31 1041.26 195.31 1041.26 362.64 0 362.64 0 195.31" /><path fill="#ec1d24" d="m955.53,331.28v12.54h12.38v-12.54h-12.38Z" /><path fill="#fff"
                             d="m992.76,295.11c-3.35-2.96-7.67-4.56-12.13-4.5-4.34-.06-8.55,1.48-11.82,4.34-3.27,2.67-5.14,6.7-5.06,10.93-.15,4.02,1.04,7.97,3.37,11.25-1.6,0-3.69-.91-6.27-2.74-7.82-5.46-11.73-11.89-11.73-19.28-.04-3.12,1.21-6.12,3.46-8.28,2.16-2.25,5.16-3.5,8.27-3.46h28.14v-22.5h18.81v-10.13h-247.78c-11.36-24.65-24.01-36.97-37.94-36.97-12,0-18,6.27-18,18.81.1,3.43.75,6.82,1.93,10.04.89,2.94,2.3,5.69,4.17,8.12h-138.8v10.13h11.58c-2.3,2.76-3.6,6.22-3.7,9.81,0,5.25,2.68,9.75,8.04,13.5,1.37,1.08,2.96,1.84,4.66,2.25-5.47,4.29-8.2,9.43-8.2,15.43,0,7.5,2.62,13.48,7.88,17.93,5.25,4.44,11.68,6.67,19.28,6.67,10.08,0,19.83-3.92,29.26-11.74,9.86-8.26,14.79-17.31,14.79-27.17.06-3.72-.88-7.39-2.73-10.61-2.15-3.64-5.09-5.68-8.84-6.11v-9.96h73.88v12.69h-54.31v9.81h15.91c-3,3.96-4.5,7.29-4.5,9.97,0,8.46,5.36,18.54,16.08,30.22,1.48,1.73,3.09,3.34,4.82,4.82l9-7.56c-1.28-.9-2.52-1.86-3.7-2.89-9-7.82-13.5-15.97-13.5-24.43,0-4.72,1.88-8.09,5.63-10.13h24.57v45.34h13.5v-67.84h17.99v67.84h13.5v-67.84h39.04v17.85c0,3.64-1.77,5.46-5.3,5.46s-6.81-4.07-10.13-12.22l-10.13,6.27c8.11,14.53,17.36,28.4,27.65,41.48,2.89,3.64,5.09,6.37,6.59,8.2l10.45-7.56c-1.61-1.82-2.89-3.22-3.86-4.18-6.29-6.83-12.04-14.14-17.2-21.86,3.59-.1,7.09-1.16,10.13-3.06,3.43-2.25,5.14-6,5.14-11.25v-19.13h20.4v22.34h-19.76l7.24,10.13h12.52v35.37h13.5v-67.84h26.35v22.83h-7.24c-3.11.42-4.66,1.87-4.66,4.34,0,1.82,2.92,4.98,8.76,9.48,5.84,4.5,9.78,6.75,11.82,6.75,3.21,0,4.82-1.87,4.82-5.62l-.16-37.78h19.59v67.84h13.5v-67.84h54.32v12.7h-18.81c-5.53-.07-10.83,2.17-14.63,6.18-3.97,3.86-6.17,9.18-6.11,14.71,0,8.79,3.96,16.61,11.9,23.47,7.5,6.54,15.75,9.81,24.75,9.81,6.36.09,12.57-1.98,17.6-5.87,4.94-3.6,7.79-9.4,7.64-15.51.07-4.35-1.86-8.5-5.23-11.25Zm-372.35,19.13c-3.02,1.24-6.23,1.94-9.49,2.09-3.82.06-7.49-1.49-10.12-4.26-2.75-2.75-4.26-6.49-4.18-10.37-.06-3.15.93-6.23,2.81-8.76,1.75-2.46,4.62-3.88,7.64-3.78h5.62l-2.89-9.81c-5.89,0-9.7-.26-11.41-.8-3.97-1.18-5.95-4.02-5.95-8.52,0-3.96,1.13-7.02,3.38-9.16h35.2v9.48c-3.52.68-6.65,2.66-8.76,5.55-2.18,2.89-3.34,6.42-3.3,10.05,0,8.25,3.27,16.02,9.81,23.31-1.4,1.82-4.18,3.48-8.36,4.98Zm22.02-27.17c-.07,4.61-1.65,9.07-4.49,12.7-.37.58-.86,1.08-1.45,1.44-3.97-3-5.95-7.45-5.95-13.34s1.93-8.84,5.79-8.84c4.07,0,6.11,2.68,6.11,8.04h-.01Zm80.54-36.33c-1.33-1.46-2.7-4.03-4.1-7.71-1.72-4.18-2.57-7.4-2.57-9.65,0-6.97,2.78-10.45,8.36-10.45,6.43,0,14.03,9.27,22.82,27.81h-24.51Zm260.79,62.62c-1.07,1.9-2.92,3.22-5.06,3.62-3.32-1.61-4.99-4.88-4.99-9.81,0-1.83.6-3.6,1.69-5.06.98-1.48,2.65-2.36,4.42-2.34,1.69-.01,3.28.8,4.26,2.17,1.11,1.4,1.7,3.13,1.69,4.9-.02,2.32-.72,4.59-2.01,6.52Z" /><path fill="#fff"
                             d="m511.91,250.74h-116.19l-30.51-35.85-9.96,8.04,31.25,27.81h-118.94v10.13h10.12v29.25c-.14,5.7,2.42,11.13,6.92,14.63,3.56,2.94,7.86,4.8,12.4,5.4l-27.08,14.38,6.27,10.28,36.84-24.2v18.1h13.5v-67.84h57.98v9.97h-20.57c-5.1-.06-10.01,1.9-13.66,5.47-3.76,3.4-5.86,8.26-5.79,13.33,0,8.14,3.65,14.41,10.93,18.81,6.38,3.74,13.67,5.63,21.06,5.46,1.94.01,3.88-.15,5.79-.48,1.01-.11,2.04-.11,3.05,0l4.18,16.08,11.9-2.73c-3.54-8.68-5.63-13.93-6.27-15.75,4.61-2.25,6.91-6,6.91-11.26.05-2.47-.98-4.84-2.81-6.51-1.84-1.75-4.29-2.7-6.83-2.65-6.86,0-10.29,3.65-10.29,10.93v1.29c-2.18.32-4.38.48-6.59.48-11.04,0-16.56-4.13-16.56-12.38.04-2.75,1.31-5.35,3.46-7.07,2.54-2.12,5.78-3.21,9.08-3.05h26.52v-19.94h29.84c-2,2.06-3.1,4.84-3.05,7.72-.2,4.73,1.97,9.24,5.78,12.05,3.43,2.68,7.82,4.02,13.18,4.02,2.79,0,6.32-.86,10.61-2.58-.08,3.67-1.58,7.15-4.18,9.73-2.62,2.54-6.16,3.9-9.8,3.78-2.02.06-4.03-.21-5.95-.8l-4.99-4.66-8.51,8.52c5.25,5.35,10.44,10.34,15.59,14.95,6.15,5.68,12.59,11.04,19.29,16.07l7.88-9.81c-6.91-4.79-13.56-9.94-19.94-15.43,2.87-.2,5.7-.85,8.36-1.93,11.15-4.29,16.72-13.29,16.72-27.01.16-5.34-1.68-10.55-5.14-14.62h18.63v67.84h13.5v-67.84h16.08v-10.13Zm-198.88,44.97c-3.3,3.24-7.25,4.86-11.88,4.86-6.75,0-10.12-4.07-10.12-12.21v-27.49h22v34.84Zm132.67-20.22c-5.78,0-8.68-2.57-8.68-7.71-.01-2,.74-3.93,2.09-5.39,1.24-1.48,3.06-2.33,4.99-2.33,2.77-.05,5.45.93,7.55,2.73,2.12,1.78,3.45,4.32,3.7,7.08-1.5,3.75-4.72,5.63-9.65,5.62Z" /><path fill="#fff"
                             d="m145.12,250.74v10.13h20.1c1.39.96,2.68,2.81,3.85,5.55,1.04,2.13,1.64,4.46,1.77,6.83,0,7.39-4.87,11.09-14.63,11.09-1.12.02-2.25-.04-3.37-.16,0,5.97,1.22,11.17,3.65,15.58-6.19,5.58-12.76,8.37-19.7,8.37-3.05.06-6.01-1.03-8.28-3.05-2.25-1.93-3.52-4.76-3.46-7.72,0-7.18,6.16-10.77,18.49-10.77,1.18,0,2.3.05,3.37.16l-4.82-9c-2.46-.11-4.07-.16-4.82-.16-4.93,0-8.36.64-10.29,1.93-4.48-2.08-7.27-6.64-7.07-11.57,0-6.54,2.57-9.81,7.71-9.81,3.54,0,5.31,2.89,5.31,8.68v1.12h10.28c.12-.85.17-1.71.16-2.57.18-4.39-1.55-8.64-4.74-11.65-3.26-2.99-7.56-4.57-11.97-4.42-4.83-.05-9.47,1.87-12.86,5.3-.16.15-.31.29-.46.45v-4.31H31.54v10.13h18.16v23.63c-4.29,0-6.65.05-7.08.16-3,.53-4.5,2.03-4.5,4.5,0,2.25,2.82,5.97,8.44,11.17,5.63,5.2,9.62,7.8,11.98,7.8,2.68,0,4.02-1.71,4.02-5.14v-8.2h21.2v33.92h13.5v-67.84h12.26c-.8,2.02-1.21,4.2-1.19,6.43.02,3.5.96,6.94,2.73,9.96,1.67,3.06,4.18,5.57,7.24,7.24-4.18,3.1-6.27,7.5-6.27,13.18-.07,5.75,2.62,11.19,7.23,14.63,4.45,3.62,10.03,5.55,15.76,5.46,9.43,0,17.36-3,23.79-9v-5.49c.75.97,1.57,1.89,2.47,2.76,5.63,5.46,12.99,8.19,22.1,8.19,4.91-.03,9.74-1.17,14.13-3.31v17.79h13.5v-67.84h16.08v-10.13h-81.97Zm-61.36,33.76h-21.2v-23.63h21.2v23.63Zm98.33,20.25c-3.46.06-6.85-1.01-9.64-3.05-2.74-1.94-4.45-5.01-4.67-8.36,1.77-.08,3.51-.46,5.15-1.13,7.18-2.57,10.77-8.3,10.77-17.19-.09-5.19-1.96-10.18-5.3-14.15h19.11v38.5c-4.37,3.46-9.79,5.36-15.42,5.38Z" /><path fill="#fff"
                             d="m544.02,346.85c-.5,0-.98-.2-1.34-.56-.36-.36-.55-.84-.55-1.34v-131.84c0-1.05.85-1.89,1.89-1.89.5,0,.98.2,1.34.55.36.36.55.84.55,1.34v131.84c0,.5-.2.98-.55,1.34s-.84.56-1.34.56h0Z" /><path fill="currentColor"
                             d="m276.39,0v113.64h-1.57c-10.43,0-16.72-10.88-19.34-15.75l-26.66-56.04C216.25,15.75,193.77,0,168.68,0h-50.68v159.32h49.1V45.68h1.57c11,0,17.76,11.96,19.34,15.75l27.19,55.99c11.52,26.1,33.96,41.86,59.58,41.86h50.19V0h-48.58Z" /><path fill="currentColor"
                             d="m872.25,0l-59.02,118.51L750.59,0h-411.48v159.32h99.9s32.1,0,32.1,0c45.56,0,67.31-27.71,67.31-73.39v-17.44c0-4.87,0-17.93-3.66-30.98h72.46v121.78h46.57V37.5h65.22l64.73,121.77h58.49L922.44,0h-50.19Zm-380.95,96.75c0,16.32-8.3,25.02-26.91,25.02h-78.19V37.5h78.19c18.13,0,26.91,9.79,26.91,24.45v34.8Z" /><ellipse fill="#ec1d24" cx="330.69" cy="80.03" rx="29.2" ry="28.91" /></svg></a></div><div class="dd-nav_li"><a class="m-nv_lnk" href="https://rajasthan.ndtv.in/livetv-ndtvrajasthan"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.06 138"><polygon fill="#00a3fc"
                             points="25.11 74.31 280.68 74.33 280.68 138 25.11 137.98 25.11 74.31" /><path fill="#ec1d24"
                             d="m189.63,90.23v.89h.53c-.16-.3-.34-.6-.53-.89Zm0,0v.89h.53c-.16-.3-.34-.6-.53-.89Z" /><path fill="#fff"
                             d="m266.93,85.26v5.86h-9.31v39.27h-7.81v-22.24h-10.66l.09,6.51c0,1.49-.84,2.23-2.51,2.23-1.36,0-3.4-1.59-6.1-4.79-2.69-3.19-4.04-5.5-4.04-6.93-.02-.89.3-1.75.88-2.42.57-.67,1.4-1.05,2.28-1.02h20.06v-10.61h-29.6v39.27h-7.82v-39.27h-8.24v39.27h-7.81v-9.45c-3.37,2-7.26,3.03-11.23,2.93-5.21,0-9.41-1.69-12.61-5.07-2.31-2.5-3.85-5.58-4.48-8.88h-1.38l-4.19-5.86h12.84v2.63c1.96-.19,3.85-.83,5.54-1.89,2.21-1.5,3.48-4.04,3.35-6.7.05-1.86-.44-3.7-1.4-5.3-.88-1.64-2.61-2.64-4.47-2.61-2.85,0-4.28,1.24-4.28,3.73-.02.93.39,1.83,1.12,2.41.73.62,1.65.95,2.61.94v5.3c-2.59.1-5.14-.66-7.26-2.14-2.13-1.52-3.35-4-3.26-6.61-.02-.93.11-1.84.38-2.7h-5.54v11.07c0,3.04-.99,5.21-2.98,6.52-1.76,1.1-3.78,1.71-5.86,1.76,2.98,4.48,6.31,8.71,9.96,12.66.56.56,1.3,1.36,2.23,2.42l-6.05,4.37c-.86-1.05-2.14-2.64-3.81-4.74-5.96-7.57-11.31-15.6-16.01-24.01l5.87-3.63c1.92,4.71,3.87,7.07,5.86,7.07s3.07-1.05,3.07-3.16v-10.33h-20.43v39.27h-7.82v-24.57h-6.75c1.32,2.06,2.06,4.44,2.14,6.89.03,3.02-1.12,5.94-3.21,8.14-1.98,2.25-4.85,3.53-7.86,3.49-5.15,0-9.74-2.61-13.77-7.82-3.31-4.52-5.62-9.69-6.8-15.17l6.15-3.81v.09c.25,1.85.72,3.66,1.4,5.4,3.41,10.3,7.47,15.45,12.19,15.45,2.97,0,4.46-1.83,4.46-5.49,0-3.35-1.61-7.11-4.84-11.26-.37-.5-.86-1.09-1.48-1.77h18.37v-8.84h-41.23v39.27h-7.82v-39.27h-8.75v11.07c.12,2.62-1.16,5.1-3.35,6.52-2.23,1.36-4.84,1.98-7.45,1.76,1.93,2.92,3.66,5.34,5.21,7.26,3.85,4.65,6.49,7.51,7.91,8.56l-5.58,4.56c-1.12-1.24-2.64-2.97-4.56-5.21-6.44-7.91-12.35-16.24-17.68-24.94l5.95-3.81c.78,1.93,1.95,3.68,3.45,5.12,1.32,1.57,3.25,2.51,5.3,2.6,2.05,0,3.07-1.18,3.07-3.53v-9.96h-21.77v-5.86h130.44v2.96c.44-.52.96-.98,1.53-1.38,2.27-1.64,5.01-2.49,7.81-2.42,3.62-.12,7.11,1.32,9.59,3.96.54.58,1.02,1.2,1.45,1.85v.89h.53c1.21,2.17,1.82,4.64,1.74,7.17.04,3.75-1.64,7.32-4.56,9.67-2.81,2.43-6.34,3.87-10.05,4.1.3,1.85,1.39,3.48,2.98,4.47,1.54,1,3.36,1.52,5.21,1.48,2.83-.08,5.59-.92,8-2.41,1.01-.56,1.96-1.2,2.86-1.91v-22.57h-6.18c-.16-.3-.34-.6-.53-.89v-4.97h77.3Z" /><path fill="currentColor"
                             d="m60.26,0v43.24h-.6c-3.97,0-6.36-4.14-7.35-6l-10.15-21.32C37.38,5.99,28.83,0,19.28,0H0v60.62h18.68V17.38h.6c4.19,0,6.76,4.55,7.36,5.99l10.35,21.3c4.38,9.94,12.91,15.93,22.66,15.93h19.1V0h-18.49Z" /><path fill="currentColor"
                             d="m286.97,0l-22.46,45.09L240.68,0H84.12v60.62h50.23c17.33,0,25.61-10.55,25.61-27.93v-6.64c.06-3.97-.4-7.93-1.4-11.78h27.58v46.33h17.71V14.27h24.81l24.63,46.33h22.26L306.06,0h-19.09Zm-144.94,36.81c0,6.21-3.16,9.52-10.24,9.52h-29.75V14.27h29.75c6.9,0,10.24,3.72,10.24,9.3v13.24Z" /><ellipse fill="#ec1d24" cx="80.92" cy="30.45" rx="11.11" ry="11" /></svg></a></div><div class="dd-nav_li"><a class="m-nv_lnk" href="https://www.ndtv.com/video/live/channel/ndtvprofit"><svg class="ndtv-nprofit" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1791.08 307.96"><defs><style>
      .cls-1 {
        fill: url(#linear-gradient);
      }

      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: url(#linear-gradient-4);
      }

      .cls-3 {
        fill: url(#linear-gradient-2);
      }

      .cls-4 {
        fill: url(#linear-gradient-3);
      }

      .cls-5 {
        fill: url(#linear-gradient-5);
      }

      .cls-7 {
        fill: #ec1d24;
      }
    </style><linearGradient id="linear-gradient" x1="978.98" y1="1344.62" x2="1699.69" y2="1344.62" gradientTransform="translate(0 1500.02) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#026ee0"/><stop offset=".08" stop-color="#0677e3"/><stop offset=".17" stop-color="#1190ec"/><stop offset=".29" stop-color="#24b9fb"/><stop offset=".3" stop-color="#26befd"/><stop offset=".35" stop-color="#3ab6fb"/><stop offset=".44" stop-color="#6ea2f8"/><stop offset=".57" stop-color="#c081f3"/><stop offset=".65" stop-color="#f76df0"/><stop offset=".92" stop-color="#f75ee3"/><stop offset=".97" stop-color="#dd5687"/></linearGradient><linearGradient id="linear-gradient-2" x1="978.98" y1="1316.38" x2="1699.69" y2="1316.38" gradientTransform="translate(0 1500.02) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#026ee0"/><stop offset=".08" stop-color="#0677e3"/><stop offset=".17" stop-color="#1190ec"/><stop offset=".29" stop-color="#24b9fb"/><stop offset=".3" stop-color="#26befd"/><stop offset=".35" stop-color="#3ab6fb"/><stop offset=".44" stop-color="#6ea2f8"/><stop offset=".57" stop-color="#c081f3"/><stop offset=".65" stop-color="#f76df0"/><stop offset=".92" stop-color="#f75ee3"/><stop offset=".97" stop-color="#dd5687"/></linearGradient><linearGradient id="linear-gradient-3" x1="978.98" y1="1314.78" x2="1699.69" y2="1314.78" gradientTransform="translate(0 1500.02) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#026ee0"/><stop offset=".08" stop-color="#0677e3"/><stop offset=".17" stop-color="#1190ec"/><stop offset=".29" stop-color="#24b9fb"/><stop offset=".3" stop-color="#26befd"/><stop offset=".35" stop-color="#3ab6fb"/><stop offset=".44" stop-color="#6ea2f8"/><stop offset=".57" stop-color="#c081f3"/><stop offset=".65" stop-color="#f76df0"/><stop offset=".92" stop-color="#f75ee3"/><stop offset=".97" stop-color="#dd5687"/></linearGradient><linearGradient id="linear-gradient-4" x1="978.98" y1="1352.67" x2="1699.69" y2="1352.67" gradientTransform="translate(0 1500.02) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#026ee0"/><stop offset=".08" stop-color="#0677e3"/><stop offset=".17" stop-color="#1190ec"/><stop offset=".29" stop-color="#24b9fb"/><stop offset=".3" stop-color="#26befd"/><stop offset=".35" stop-color="#3ab6fb"/><stop offset=".44" stop-color="#6ea2f8"/><stop offset=".57" stop-color="#c081f3"/><stop offset=".65" stop-color="#f76df0"/><stop offset=".92" stop-color="#f75ee3"/><stop offset=".97" stop-color="#dd5687"/></linearGradient><linearGradient id="linear-gradient-5" x1="978.98" y1="1334.65" x2="1699.69" y2="1334.65" gradientTransform="translate(0 1500.02) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#026ee0"/><stop offset=".08" stop-color="#0677e3"/><stop offset=".17" stop-color="#1190ec"/><stop offset=".29" stop-color="#24b9fb"/><stop offset=".3" stop-color="#26befd"/><stop offset=".35" stop-color="#3ab6fb"/><stop offset=".44" stop-color="#6ea2f8"/><stop offset=".57" stop-color="#c081f3"/><stop offset=".65" stop-color="#f76df0"/><stop offset=".92" stop-color="#f75ee3"/><stop offset=".97" stop-color="#dd5687"/></linearGradient></defs><g id="Layer_4" data-name="Layer 4"><g><path class="cls-1" d="m1034.98,192.73v78.82h-56V39.25h92.7c17.76,0,33.48,3.27,47.15,9.81s24.25,15.85,31.75,27.92,11.25,25.77,11.25,41.08c0,22.66-8.11,40.76-24.33,54.33-16.22,13.56-38.48,20.34-66.77,20.34h-35.75Zm0-43.24h36.7c10.85,0,19.12-2.71,24.81-8.14,5.69-5.42,8.54-13.08,8.54-22.98,0-10.85-2.93-19.52-8.78-26.01s-13.83-9.78-23.93-9.89h-37.33v67.01h-.01Z"/><path class="cls-3" d="m1293.61,147.58l-17.71-1.28c-16.91,0-27.76,5.32-32.55,15.96v109.29h-53.77V98.92h50.42l1.75,22.18c9.04-16.91,21.64-25.37,37.81-25.37,5.74,0,10.74.64,15,1.92l-.96,49.94h0Z"/><path class="cls-4" d="m1306.21,183.64c0-17.23,3.35-32.57,10.05-46.03,6.7-13.45,16.33-23.8,28.88-31.03,12.55-7.23,27.28-10.85,44.19-10.85,25.85,0,46.21,8,61.11,24.01,14.89,16.01,22.34,37.79,22.34,65.33v1.92c0,26.91-7.47,48.26-22.42,64.06-14.94,15.79-35.18,23.69-60.71,23.69s-44.3-7.36-59.19-22.1c-14.89-14.73-22.92-34.7-24.09-59.91l-.16-9.09Zm53.77,3.35c0,15.95,2.5,27.66,7.5,35.1,5,7.45,12.39,11.17,22.18,11.17,19.15,0,28.93-14.73,29.36-44.19v-5.42c0-30.95-9.89-46.43-29.68-46.43-17.98,0-27.71,13.35-29.2,40.05l-.16,9.73h0Z"/><path class="cls-2" d="m1502.46,271.55v-135.3h-25.05v-37.33h25.05v-5.74c.32-22.97,7.87-40.58,22.66-52.81,14.04-11.49,33.67-17.23,58.87-17.23,15.85,0,34.57,3.09,56.16,9.25l-7.34,42.44-8.93-2.39c-11.59-3.08-23.83-4.63-36.7-4.63-20.53,0-30.79,9.36-30.79,28.08v3.03h33.82v37.33h-33.82v135.3h-53.93,0Zm162.42,0h-54.09V98.92h54.09v172.63Z"/><path class="cls-5" d="m1760.29,56v42.92h28.4v37.33h-28.4v78.98c0,6.49,1.17,11.01,3.51,13.56s6.97,3.83,13.88,3.83c5.32,0,9.78-.32,13.4-.96v38.45c-9.68,3.08-19.78,4.63-30.31,4.63-18.51,0-32.18-4.36-41-13.08-8.83-8.72-13.24-21.96-13.24-39.73v-85.68h-22.02v-37.33h22.02v-42.92h53.77,0Z"/></g></g><path fill="currentColor" d="m224.05,73.29s0,.01,0,.02h-.02l.02-.02Zm539.4.01h50.67c-.15.36-.27.73-.44,1.07-26.74,53.1-53.48,106.2-80.19,159.31-.35.69-.75.89-1.49.89-19.01-.02-38.02-.02-57.03,0-.87,0-1.31-.25-1.72-1.03-21.47-40.44-42.96-80.87-64.44-121.3-.35-.66-.71-.93-1.49-.93-21.29.02-42.58.02-63.87.02h-1.15v123.15h-47.11v-123.07h-73.27c.07.34.12.59.19.83,1.96,7.37,3.06,14.88,3.26,22.49.19,7.59.26,15.19.17,22.79-.07,5.7-.27,11.41-.78,17.08-.77,8.54-2.79,16.82-6.23,24.71-5.68,13.04-14.75,22.84-27.75,28.82-9.23,4.25-19.02,6-29.1,6.39-1.4.05-2.79.12-4.19.19h-133.44c-.06-.35-.17-.69-.17-1.04V74.33c0-.34.11-.68.17-1.02h416.14c.2.37.42.73.61,1.11,20.73,39.21,41.45,78.42,62.18,117.63.2.39.42.77.68,1.24.22-.42.37-.71.51-1,15.39-30.89,30.77-61.79,46.16-92.68,4.37-8.77,8.74-17.54,13.12-26.31Zm-385.62,62.55c0-1.75-.14-3.53-.43-5.25-1.35-7.9-5.57-13.63-13.05-16.8-4.37-1.85-8.97-2.44-13.67-2.44-26.02-.01-52.04,0-78.06,0-.34,0-.69.03-1.05.05v85.22h.01s.98-.01.98-.01h78.35c3.57,0,7.09-.32,10.55-1.22,7.33-1.92,12.53-6.18,14.92-13.53,1.02-3.12,1.45-6.35,1.45-9.63,0-12.13.03-24.26,0-36.39Zm-217.42-62.56c-.01.52-.03,1.04-.03,1.56v113.45c-2.57.24-4.98-.09-7.3-1.05-4.05-1.68-7.05-4.62-9.64-8.05-2.3-3.05-4.08-6.42-5.72-9.87-8.6-18.12-17.17-36.25-25.87-54.32-5.08-10.55-12.02-19.74-21.13-27.19-8.75-7.15-18.65-11.87-29.85-13.65-2.79-.44-5.64-.51-8.46-.76-.32-.03-.64-.07-.96-.11H.19s0,.04,0,.07c-.07.27-.17.55-.17.82v159.65c0,.26-.02.52,0,.78.01.04.12.07.19.1,0,0,0,0,0-.01h49.49c.03-.48.1-.97.1-1.45v-113.55c1.94-.2,3.79-.05,5.62.46,4.11,1.15,7.3,3.67,10.06,6.8,2.04,2.31,3.71,4.88,5.05,7.65,6.06,12.51,12.13,25.02,18.19,37.53,3.95,8.14,7.77,16.35,11.86,24.42,6.72,13.28,16.31,23.9,29.58,30.94,8.86,4.7,18.32,7.05,28.35,7.05h51.05V73.31h-49.11l-.03-.02ZM906.71,5.84c-1.28-3.02-3.65-4.83-6.82-5.62-.21-.06-.41-.15-.62-.22h-7.43c-.52.16-1.04.31-1.56.48-3.94,1.32-6.53,4.76-6.73,8.94-.01.33-.01.65-.01.98,0,95.72.01,191.44-.03,287.16,0,5.19,3.15,8.74,6.77,9.92.52.17,1.04.32,1.56.48h7.43c.43-.13.85-.27,1.28-.39,3.77-1.09,6.57-4.45,6.96-8.34.04-.35.11-.7.17-1.05V9.79h0c-.32-1.32-.46-2.72-.98-3.95Z"/><path fill="#ec1d24" d="m218.82,183.74h-3.72c-1.44-.23-2.9-.39-4.32-.7-15.43-3.45-25.21-17.86-22.66-33.47,2.58-15.83,18.04-28.17,35.55-24.1,14.62,3.4,25.13,17.77,22.64,33.52-1.91,12.11-10.84,21.33-22.89,23.98-1.52.33-3.06.52-4.6.77h0Z"/></svg></a></div></div><div class="clear"></div></div></div></div></div></div><!-- Search Bar --><div class="s-wr"><!-- Search Close Icon --><div class="icon-close cls-btn"><div></div><div></div></div><!-- Search input & button --><div class='search-input'><form id="topic_search_form" action="https://www.ndtv.com/topic/video" name="searchform" method="get" onsubmit="return submit_topic_form('');"><input id="s" name="q" class='input-search' placeholder=' Search for News, Photos and Videos' type='text'><a href="#" onclick="return submit_topic_form('');" class="sc-btn">Search</a></form></div></div><!-- Search Dropdown --><div class="sc-sug cd-search-suggestions"><!-- Search Latest News --><div class="dd-news" id="search_latest"></div><!-- Search Trending Tags and SPONSORED LINKS --><div class="sc-q-lnk" id='trending'></div></div><!-- Nav Sticky Bg --><div class="stk-t_bg"></div></nav><div class="t-md"><div class="container"><div class="row"><div class="add-wrp"><div class="add-img lazyload"><div style="float: left; position: relative;" id="header_leaderboard_adbox"><div id="adslot728x90ATF" style="min-height:90px; min-width:970px;"><script>googletag.cmd.push(function () { googletag.display("adslot728x90ATF"); });</script></div></div></div></div></div></div></div><!--====== Content ( LHS, Main Content and RHS ) ======--><div class="content"><div class="container"><div class=" row js-pro_in stk_wrp "><!--=== Main Content ===--><section class="col-900 mr-60" ><div class="lft-content-area"><div class="t-brd" itemscope itemtype="http://schema.org/BreadcrumbList"><div class="container"><div class="row"><div class="col-md-12"><nav class="brd-nv"><div class="brd-nv_ol"><span class="brd-nv_li visited" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.ndtv.com/" itemprop="item"><span itemprop="name">News</span></a><meta itemprop="position" content="1" /></span><span class="brd-nv_li current " itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.ndtv.com/feature"  title="Feature" itemprop="item"><span itemprop="name">Feature</span></a><meta itemprop="position" content="2" /></span><span class="brd-nv_li current brd-nv_act" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.ndtv.com/feature/14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596"  title="14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US" itemprop="item"><span itemprop="name"><span class=hde>14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US</span></span></a><meta itemprop="position" content="3" /></span></div></nav></div></div></div></div><style>externalVideo>iframe{max-width:100%;} </style><div class="sp-hd"><!-- Story Headline --><div class="sp-ttl-wrp"><h1 class="sp-ttl" itemprop="headline"> 14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US </h1></div><!-- Story description --><h2 class="sp-descp"> The Ohio teenager is sharing a warning after the simple task of removing nail paint left her hospitalised with serious burn injuries. </h2><!-- Post By --><nav class="pst-by"><div class="pst-by_ul"><span class="pst-by_li"><a class="pst-by_lnk" href="https://www.ndtv.com/feature" >Feature</a></span><span class="pst-by_li">Edited by <a  href="https://www.ndtv.com/topic/anjali-thakur"><span itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Anjali Thakur</span><meta itemprop="url" content="https://www.ndtv.com/topic/anjali-thakur"></meta></span></a></span></span><span class="pst-by_li"><span class="pst-by_lnk"><meta name="publish-date" itemprop="datePublished" content="2024-01-31T18:22:37+05:30"><span itemprop="dateModified" content="2024-01-31T18:22:37+05:30">Updated: January 31, 2024 6:22 pm IST</span></span></div></nav><!-- Social Share --></div><div class="row s-lmr"><article class="col-650 ml-auto"><div class="sp-wrp"><div class="sp-hd"><div class="sp-ttl-wrp"><!-- Story Content --><div itemprop="articleBody" class="sp-cn ins_storybody" id="ins_storybody"><!-- <div itemprop="articleBody" class="sp-cn ins_storybody" id="ins_storybody">--><div class="ins_instory_dv"><div class="ins_instory_dv_cont"><img title="14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US" alt="14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US" id="story_image_main" src="https://c.ndtvimg.com/2024-01/ns8tc6i8_nail-polish-generic_625x300_31_January_24.jpeg"  /></div><p class="ins_instory_dv_caption sp_b">Kennedy's parents were at work at the time of the incident</p><div itemprop="image" itemscope itemtype="https://schema.org/ImageObject"><meta itemprop="url" content="https://c.ndtvimg.com/2024-01/ns8tc6i8_nail-polish-generic_625x300_31_January_24.jpeg?im=Resize=(1230,900)"></meta><meta itemprop="width" content="1230"></meta><meta itemprop="height" content="900"></meta></div></div><div class="social_link"></div><p>A 14-year-old girl from Ohio was left covered in third-degree burns after vapour from nail polish remover ignited a dangerous flash fire. Kennedy was removing her nail polish while sitting close to a burning candle, <a href="https://people.com/girl-14-catches-fire-after-using-nail-polish-remover-near-a-candle-exclusive-8553442"><em>People </em></a>reported. The incident took place on January 5.</p><p>The Ohio teenager is sharing a warning after the simple task of removing nail paint left her hospitalised with serious burn injuries. She told People, "I had to take my fingernail polish off because it's not in uniform and as I was taking it off I had a candle near me on my bed."</p><p>She added, "As I was setting the bottle of nail polish remover down on my bed the fumes kind of just mixed and the bottle exploded in my hand. It caught me and everything near me on fire."</p><p><div id ="v-ndtv"></div><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){  (function(v,d,o,ai){ai=d.createElement("script");ai.defer=true;ai.async=true;ai.src=v.location.protocol+o;d.head.appendChild(ai);})(window, document, "//a.vdo.ai/core/v-ndtv/vdo.ai.js"); });</script></p><p>"I was really scared and I was screaming and just trying to do as much as I could to stop me being on fire and just get out," she explains, adding that her bed, clothes, arms, hands and hair caught on fire.</p><p>Kennedy's parents were at work at the time of the incident and she was home alone with her four siblings. As soon as they heard Kennedy's scream, they burst into her bedroom and were able to put out the fire on her body and siblings made it out of the house to call 911 after closing the door to Kennedy's burning bedroom.&nbsp;</p><p>"It's nothing I've ever been through before. I was still in a lot of shock but after the adrenaline wore down, I was in a lot of pain," she says. &nbsp;</p><p>"It was a horrific scene of her being covered in bubbles and welts and her skin being melted away," adds Kennedy's mother, Brandi, 34, who arrived back home at the same time as the ambulance and fire trucks. "It was a wild experience."</p><p>Kennedy was taken to Shriners Children's Hospital in Ohio and she underwent a major procedure to clean her wounds and remove the dead skin.&nbsp;</p><p>On January 17, she underwent a surgical excision and grafting procedure.&nbsp;</p><p>"Kennedy ended up having full-thickness injuries on her abdomen, both thighs and then her right arm. And the other areas she was able to heal without having to have it excised and grafted," Higginson tells PEOPLE. "But she did have pretty extensive injuries to kind of the whole front side of her."</p><div style="clear: both;"></div><div id="jiosaavn-widget" style="margin-bottom:20px;"><p><span id="jads" style="display:none;" class="add__txt">Promoted<span/><div style="position:fixed;top:100%;">Listen to the <a href="https://www.jiosaavn.com/featured/new-music-this-week/Ns2UZo9qDvI" target="_blank">latest songs, only on <a href="https://www.jiosaavn.com" target="_blank">JioSaavn.com</a></div></p></div><script> window._rrCode = window._rrCode || [];_rrCode.push(function(){ (function(d,t){ var s=d.createElement(t); var s1=d.createElement(t); if (d.getElementById('jsw-init')) return; s.setAttribute('id','jsw-init'); s.setAttribute('src','https://www.jiosaavn.com/embed/_s/embed.js?ver='+Date.now()); s.onload=function(){document.getElementById('jads').style.display='block';s1.appendChild(d.createTextNode('JioSaavnEmbedWidget.init({a:"1", q:"1", embed_src:"https://www.jiosaavn.com/embed/playlist/85481065","dfp_medium" : "1",partner_id: "ndtv"});'));d.body.appendChild(s1);}; if (document.readyState === 'complete') { d.body.appendChild(s); } else if (document.readyState === 'loading') { var interval = setInterval(function() { if(document.readyState === 'complete') { d.body.appendChild(s); clearInterval(interval); } }, 100); } else { window.onload = function() { d.body.appendChild(s); }; } })(document,'script'); }); </script><div style="clear: both;"></div><p>"I've been healing well and no big bumps have occurred," Kennedy says, sharing that her hands have healed enough for her to put her cheerleading bow in her hair by herself. "The whole process of the skin grafts healing takes about a year, a little over. So by next year, maybe in March or April, I should be completely done with the healing process."&nbsp;</p><p><br />&nbsp;</p></div><div class="ss ss_pg st-social"><div class="pst_opt"><div class="pst_scl"><a href="javascript:void(0);" class="ss-lk facebook ttp" onclick="shareOpen('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&t=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US', 900, 500,'facebook');"><svg class="ndtv-icon"><use xlink:href="#facebook"></use></svg></a><a href="javascript:void(0);" class="ss-lk twitter ttp" onclick="shareOpen('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&text=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US&via=ndtv', 650, 420,'twitter');"><svg class="ndtv-icon"><use xlink:href="#twitter"></use></svg></a><a href="javascript:void(0);" class="ss-lk twitter ttp" onclick="shareOpen('https://api.whatsapp.com//send?text=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US-https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596', 900, 600,'whatsapp');"><svg class="ndtv-icon"><use xlink:href="#whatsapp"></use></svg></a><a href="javascript:void(0);" class="ss-lk reddit ttp" onclick="shareOpen('https://reddit.com/submit?url=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&title=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US', 900, 600,'reddit');"><svg class="ndtv-icon"><use xlink:href="#reddit"></use></svg></a><a href="javascript:void(0);" class="ss-lk linkedin ttp" onclick="shareOpen('https://www.linkedin.com/cws/share?url=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&token=&isFramed=true',550,550,'linkedin');"><svg class="ndtv-icon"><use xlink:href="#linkedin"></use></svg></a></div><div class="pst_icn-btn"><a class="ss-lk mailbox ttp" target="_blank" href="mailto:?subject=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US&amp;body=Check out this link https://www.ndtv.com/feature/14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596" title="Share by Email"><div class="vj_mix"><svg class="ndtv-icon"><use xlink:href="#email"></use></svg></div></a><!--<a class="ss-lk printer ttp" href="javascript:void(0);" onclick="JavaScript:window.print();"><div class="vj_mix"><svg class="ndtv-icon"><use xlink:href="#print"></use></svg></div></a> --><button href="#" class="ss-lk comment vj_mix-comment cmt-ac"><div class="vj_mix"><svg class="ndtv-icon"><use xlink:href="#chat"></use></svg></div><span class="numb ndtv-cmnt-cnt" style="display:block;"></span></button><a class="ss-lk ttp"  data-id="4967596" onclick="snapChatShare(this);"><svg class="ndtv-icon"><use xlink:href="#snapchat"></use></svg></a></div></div><script>function shareOpen(url, width, height,type) {window.open(url, "", "toolbar=0, status=0, width=" + width + ", height=" + height + "");
dataLayer.push({'event':'social_icon_common',
'eventCategory':'social icon common',
'eventAction':'common icon clicked',
'eventLabel': type,
'PageType':'story',
'SiteName':'www.ndtv.com',
'URL':'https://www.ndtv.com/feature/14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596',
'Article Category':'feature'
});	
	
		
	}

function snapChatShare(e){
                            var tym=Date.now();
                            var id = $(e).data("id");
                            if(id!=""){
                            render = window.open("", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=400,left=400,width=600,height=600");
                            render.document.write("<html><head><link rel='preconnect' crossorigin  href='https://www.snapchat.com/' /><meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'><script src='https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js'><\/script><script src='https://www.gstatic.com/firebasejs/6.0.4/firebase-firestore.js'><\/script></head><body><style>*{box-sizing: border-box;}body{font-family:-apple-system,Arial,Helvetica;color:#343434; font-size:14px}.outrContnr{position:fixed; display: flex; align-items: center; justify-content: center;left:0;right:0;bottom:0;top:0;}.pgLdr{margin:auto;width:280px;border-radius:8px;border:1px solid #f0f0f0;padding:20px;text-align:center;box-shadow:0 0 10px 0 rgba(0,0,0,.09)}.pgLdr .lgContnr{margin-bottom:15px}.pgLdr .lgContnr img{max-width:120px; max-height: 50px;}.pgLdr .ldContnr{height:30px}.pgLdr .loader,.pgLdr .loader:after,.pgLdr .loader:before{background:#ff0505;-webkit-animation:load1 1s infinite ease-in-out;animation:load1 1s infinite ease-in-out;width:1em;height:4em}.pgLdr .loader{color:#ff0505;text-indent:-9999em;margin:20px auto; top:10px; position:relative;font-size:3.5px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.pgLdr .loader:after,.pgLdr .loader:before{position:absolute;top:0;content:''}.pgLdr .loader:before{left:-2em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.pgLdr .loader:after{left:2em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}.pgLdr.railbeeps .loader,.pgLdr.railbeeps .loader:after,.pgLdr.railbeeps .loader:before{background-color: #022E69;}.pgLdr.railbeeps .loader{color: #022E69;}.pgLdr.ureqa .loader,.pgLdr.ureqa .loader:after,.pgLdr.ureqa .loader:before{background-color: #ef4b6e;}.pgLdr.ureqa .loader{color: #ef4b6e;}</style><div class='outrContnr'><div class='pgLdr ureqa'><div class='lgContnr'><img src='https://cdn.ndtv.com/static/ndtv_2014/images/ndtvlogo_blk.png?1'/></div><div class='txtContnr'>Waiting for <strong>response</strong> to load...</div><div class='ldContnr'><div class='loader'>Loading...</div></div></div></div></body></html>");
                            render.focus();
                            api ="https://gen.ndtv.com/screenshot/webscreenshot.aspx?apikey=3cb0166badabscreenshot7bfa6b56b4c82c40b620&siteid=7&width=600&height=600&scale=1&id="+id+"&push=1";
                            $.ajax({
                                     url:api,
                                     dataType:"jsonp",
                                     jsonp:"callback",
                                     timeout:10,
                                     async:!1,
                                        success:function(e){
                                            var n="";
                                            loc = window.location;
                                            loc = loc.href;
                                            loc = loc.replace("#", "");
                                            snapid = e.snapchatid;
                                            render.firebase.initializeApp({projectId:"firestore-realtime-push"});
                                            render.firebase.firestore().collection("snapchat.ndtv.com").doc(snapid).onSnapshot(
                                                function(e){
                                                    var t=e.data();
                                                    imgpath = t.imagepath;
                                                    if(imgpath!=''){n = loc+'?sticker=' + t.imagepath;render.location.href = "https://www.snapchat.com/scan?attachmentUrl=" + n;}

                                                })

                                            },
                                        error:function(){
                                            render.location.href = "https://www.snapchat.com/scan?attachmentUrl=" + n;

                                        }

                                   })
                                  }  

                                }

</script></div><!-- Comments button ( after story ) --><div class="clear"></div><div class="story_footer nw-ChanlLgo"><div class="ft-social"><div class="social-tags"><div class="lftTxt"><!--budget<p class="ft-social--txt">Track <a href="https://www.ndtv.com/budget">Budget 2023</a> and get <a href="https://www.ndtv.com/latest">Latest News</a> Live on NDTV.com.</p>--><p class="ft-social--txt">Track <a href="https://www.ndtv.com/latest">Latest News</a> Live on NDTV.com and get <a href="https://www.ndtv.com">news</a> updates from <a href="https://www.ndtv.com/india">India </a> and around the <a href="https://www.ndtv.com/world-news">world</a>. </p><!--election<p class="ft-social--txt">Track <a href="https://www.ndtv.com/latest">Latest News</a> and <a href="https://www.ndtv.com/elections">Election Results</a> Coverage Live on NDTV.com and get news updates from India and around the world.</p>--><div class="ft-social--wrap"><div class="watch-news"><div class="watch-news_inner"><p class="live_tv">Watch Live News:</p><div class="tv-logos"><span class="lgo-ndtvIndia"><a
                                                                                href="https://ndtv.in/videos/live/channel/ndtvindia"><svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 68.1 27.5"><path fill="currentColor"
                                                                                        d="m18.3,0c.4,0,.8.1,1.2.1.6,0,1.2.1,1.8.4,1,.5,1.6,1.2,2.1,2.1.6,1.2,1.2,2.3,1.8,3.5.1.3.3.6.6.8.2.1.3.2.6.2V.1h3.2v9.8h.9V0h26.6v.1c1.4,2.3,2.7,4.7,4,7.1.1,0,.1.1.1.1.1,0,.1-.1.1-.1,1-1.8,1.9-3.7,2.9-5.5.2-.5.5-.9.8-1.6,1.1,0,2.2,0,3.1.1-.1.3-.2.5-.3.7-1.5,3-3.1,6-4.7,9,0,0,0,.1-.1.1l-1.2,2.3h-6.1v10.5h-3.1v-10.5h-2.8v10.5h-3.3v-2.3q-.4.1-.5.2c-1.2.5-2.6.9-3.9.9-1.2,0-2.4-.2-3.5-.8-1.2-.7-1.9-1.7-2.4-3-.2-.7-.4-1.4-.5-2.1v-.1c.4,0,.7.1,1,.1.8.1,1.6.1,2.3-.1.6-.2,1-.6,1.1-1.2,0-.6-.1-1.1-.5-1.5l-.1-.1c-.27-.25-.56-.4-1-.4-1.4.1-2.7,0-4.1,0h-.3v3.6h-.2c-2.1,0-4.1.1-6.2.1-.3,0-.6.1-.9.2-.3,0-.5.3-.5.6-.1.3.1.5.4.7.5.2,1,.2,1.5.2.9,0,1.9-.1,2.8-.1s1.9,0,2.9.2c.3.1.7.2,1,.4,1.2.6,1.5,1.6,1.4,2.7-.2,1-.8,1.7-1.7,2.2-.8.5-1.7.7-2.7.8-1.8.3-3.5.2-5.3.1-1.1-.1-2.3-.3-3.3-.8-.6-.3-1.3-.8-1.6-1.2l2.4-1.5.16.17c.49.49,1.12.75,1.84.93,1.1.3,2.4.4,3.6.4.8-.1,1.6-.2,2.4-.6.3-.2.6-.4.7-.7.1-.4,0-.6-.3-.8s-.7-.3-1.1-.3c-.7-.1-1.3-.1-1.9-.1h-2.7c-.9-.1-1.8-.2-2.6-.6-1-.5-1.6-1.3-1.5-2.4.1-.7.4-1.2,1-1.6.6-.5,1.4-.7,2.2-.8.8,0,1.6-.1,2.4-.1s1.5-.1,2.3-.1h.2v-1.7h-11.1v12.6h-3.1v-12.6h-3.4v3.6h-.3c-2.2,0-4.4.1-6.6.1-.2,0-.4.1-.6.2-.3.1-.5.3-.5.7,0,.3.2.6.5.7.2.1.4.1.6.1,2,0,4,0,6,.1,1.3,0,2.5.9,2.8,2.1.3,1.1-.1,2.3-1.2,3-.7.5-1.5.8-2.4.9-.7,0-1.3.1-2,.1h-.2c1.4.9,2.3,2.1,3,3.6h-3.4c-.5-1-1-1.9-1.8-2.7-.6-.5-1.2-.9-2-.9-.5,0-.9-.1-1.4-.1-.7-.1-1.4-.2-2.3-.8-.4-.3-.7-.6-.9-1,.9-.4,1.8-.9,2.7-1.3.1-.1.2,0,.2,0,.2.2.4.3.6.5.5.4,1.2.7,1.9.7,1,.1,1.9.1,2.9.1.5,0,1.1-.1,1.7-.3.6-.2,1-.6,1-1.3,0-.4-.2-.6-.5-.8-.2-.1-.5-.2-.7-.2-.8-.2-1.7-.1-2.6-.1-1.1,0-2.2,0-3.3-.1-.8-.1-1.5-.3-2.1-.7-1.3-.9-1.4-3.1.2-3.9.8-.4,1.6-.5,2.5-.5h4.6v-2H.2c-.1,0-.2.1-.2.1v-2.5h16.4V0h1.9Zm28.3,12.2h-4c.6.6,1,1.7.9,2.7s-.5,1.7-1.3,2.2c-.5.3-1,.4-1.5.5-.3,0-.7.1-1.1.1v.1c.3.6.7,1,1.3,1.3.9.4,1.8.4,2.7.2,1.1-.3,2-.9,2.7-1.8l.04-.04s.06-.1.06-.16c0-1.6.1-3.2.2-4.8v-.3ZM20.02,3.1h-.12s0,6.7,0,6.7h1.99c1.14,0,2.22.02,3.31.1-.2-.1-.4-.2-.6-.3-.8-.4-1.4-1.2-1.8-2-.6-1.2-1.1-2.3-1.7-3.5-.1-.3-.2-.6-.5-.8-.14-.14-.29-.18-.47-.2h-.11Zm27.88-.5h-4.6c.1.3.2.6.2.9.1.3.1.5.1.8,0,.6.1,1.3,0,2-.1.9-.3,1.7-.9,2.4-.4.5-1,.9-1.6,1.1h6.9c0-2.6,0-4.8-.1-7.2Zm7.2,0c-1.2,0-2.5.1-3.8.1h-.3v7.1h8.4c-1.3-2.4-2.7-4.7-4-7.1-.1-.1-.2-.1-.3-.1Zm-21.1.1h-.1v4.9h.1c1.6,0,3.2.1,4.8.1h.5c.7-.1,1.2-.6,1.3-1.2v-2.6c0-.5-.4-.9-.9-1.1-.3-.1-.5-.1-.8-.1-1.6-.1-3.3,0-4.9,0Zm-23.7,1.5v2.9h-3.3v-2.9h3.3Z" /><circle fill="#dc3831" cx="30.3"
                                                                                        cy="5.1" r="1.5" /></svg></a></span><span class="lgo-mpcg"><a href="https://mpcg.ndtv.in/livetv-ndtvmpcg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1041.26 362.64"><polygon fill="#ec1d24"
                                                                                        points="0 195.31 1041.26 195.31 1041.26 362.64 0 362.64 0 195.31" /><path fill="#ec1d24"
                                                                                        d="m955.53,331.28v12.54h12.38v-12.54h-12.38Z" /><path fill="#fff"
                                                                                        d="m992.76,295.11c-3.35-2.96-7.67-4.56-12.13-4.5-4.34-.06-8.55,1.48-11.82,4.34-3.27,2.67-5.14,6.7-5.06,10.93-.15,4.02,1.04,7.97,3.37,11.25-1.6,0-3.69-.91-6.27-2.74-7.82-5.46-11.73-11.89-11.73-19.28-.04-3.12,1.21-6.12,3.46-8.28,2.16-2.25,5.16-3.5,8.27-3.46h28.14v-22.5h18.81v-10.13h-247.78c-11.36-24.65-24.01-36.97-37.94-36.97-12,0-18,6.27-18,18.81.1,3.43.75,6.82,1.93,10.04.89,2.94,2.3,5.69,4.17,8.12h-138.8v10.13h11.58c-2.3,2.76-3.6,6.22-3.7,9.81,0,5.25,2.68,9.75,8.04,13.5,1.37,1.08,2.96,1.84,4.66,2.25-5.47,4.29-8.2,9.43-8.2,15.43,0,7.5,2.62,13.48,7.88,17.93,5.25,4.44,11.68,6.67,19.28,6.67,10.08,0,19.83-3.92,29.26-11.74,9.86-8.26,14.79-17.31,14.79-27.17.06-3.72-.88-7.39-2.73-10.61-2.15-3.64-5.09-5.68-8.84-6.11v-9.96h73.88v12.69h-54.31v9.81h15.91c-3,3.96-4.5,7.29-4.5,9.97,0,8.46,5.36,18.54,16.08,30.22,1.48,1.73,3.09,3.34,4.82,4.82l9-7.56c-1.28-.9-2.52-1.86-3.7-2.89-9-7.82-13.5-15.97-13.5-24.43,0-4.72,1.88-8.09,5.63-10.13h24.57v45.34h13.5v-67.84h17.99v67.84h13.5v-67.84h39.04v17.85c0,3.64-1.77,5.46-5.3,5.46s-6.81-4.07-10.13-12.22l-10.13,6.27c8.11,14.53,17.36,28.4,27.65,41.48,2.89,3.64,5.09,6.37,6.59,8.2l10.45-7.56c-1.61-1.82-2.89-3.22-3.86-4.18-6.29-6.83-12.04-14.14-17.2-21.86,3.59-.1,7.09-1.16,10.13-3.06,3.43-2.25,5.14-6,5.14-11.25v-19.13h20.4v22.34h-19.76l7.24,10.13h12.52v35.37h13.5v-67.84h26.35v22.83h-7.24c-3.11.42-4.66,1.87-4.66,4.34,0,1.82,2.92,4.98,8.76,9.48,5.84,4.5,9.78,6.75,11.82,6.75,3.21,0,4.82-1.87,4.82-5.62l-.16-37.78h19.59v67.84h13.5v-67.84h54.32v12.7h-18.81c-5.53-.07-10.83,2.17-14.63,6.18-3.97,3.86-6.17,9.18-6.11,14.71,0,8.79,3.96,16.61,11.9,23.47,7.5,6.54,15.75,9.81,24.75,9.81,6.36.09,12.57-1.98,17.6-5.87,4.94-3.6,7.79-9.4,7.64-15.51.07-4.35-1.86-8.5-5.23-11.25Zm-372.35,19.13c-3.02,1.24-6.23,1.94-9.49,2.09-3.82.06-7.49-1.49-10.12-4.26-2.75-2.75-4.26-6.49-4.18-10.37-.06-3.15.93-6.23,2.81-8.76,1.75-2.46,4.62-3.88,7.64-3.78h5.62l-2.89-9.81c-5.89,0-9.7-.26-11.41-.8-3.97-1.18-5.95-4.02-5.95-8.52,0-3.96,1.13-7.02,3.38-9.16h35.2v9.48c-3.52.68-6.65,2.66-8.76,5.55-2.18,2.89-3.34,6.42-3.3,10.05,0,8.25,3.27,16.02,9.81,23.31-1.4,1.82-4.18,3.48-8.36,4.98Zm22.02-27.17c-.07,4.61-1.65,9.07-4.49,12.7-.37.58-.86,1.08-1.45,1.44-3.97-3-5.95-7.45-5.95-13.34s1.93-8.84,5.79-8.84c4.07,0,6.11,2.68,6.11,8.04h-.01Zm80.54-36.33c-1.33-1.46-2.7-4.03-4.1-7.71-1.72-4.18-2.57-7.4-2.57-9.65,0-6.97,2.78-10.45,8.36-10.45,6.43,0,14.03,9.27,22.82,27.81h-24.51Zm260.79,62.62c-1.07,1.9-2.92,3.22-5.06,3.62-3.32-1.61-4.99-4.88-4.99-9.81,0-1.83.6-3.6,1.69-5.06.98-1.48,2.65-2.36,4.42-2.34,1.69-.01,3.28.8,4.26,2.17,1.11,1.4,1.7,3.13,1.69,4.9-.02,2.32-.72,4.59-2.01,6.52Z" /><path fill="#fff"
                                                                                        d="m511.91,250.74h-116.19l-30.51-35.85-9.96,8.04,31.25,27.81h-118.94v10.13h10.12v29.25c-.14,5.7,2.42,11.13,6.92,14.63,3.56,2.94,7.86,4.8,12.4,5.4l-27.08,14.38,6.27,10.28,36.84-24.2v18.1h13.5v-67.84h57.98v9.97h-20.57c-5.1-.06-10.01,1.9-13.66,5.47-3.76,3.4-5.86,8.26-5.79,13.33,0,8.14,3.65,14.41,10.93,18.81,6.38,3.74,13.67,5.63,21.06,5.46,1.94.01,3.88-.15,5.79-.48,1.01-.11,2.04-.11,3.05,0l4.18,16.08,11.9-2.73c-3.54-8.68-5.63-13.93-6.27-15.75,4.61-2.25,6.91-6,6.91-11.26.05-2.47-.98-4.84-2.81-6.51-1.84-1.75-4.29-2.7-6.83-2.65-6.86,0-10.29,3.65-10.29,10.93v1.29c-2.18.32-4.38.48-6.59.48-11.04,0-16.56-4.13-16.56-12.38.04-2.75,1.31-5.35,3.46-7.07,2.54-2.12,5.78-3.21,9.08-3.05h26.52v-19.94h29.84c-2,2.06-3.1,4.84-3.05,7.72-.2,4.73,1.97,9.24,5.78,12.05,3.43,2.68,7.82,4.02,13.18,4.02,2.79,0,6.32-.86,10.61-2.58-.08,3.67-1.58,7.15-4.18,9.73-2.62,2.54-6.16,3.9-9.8,3.78-2.02.06-4.03-.21-5.95-.8l-4.99-4.66-8.51,8.52c5.25,5.35,10.44,10.34,15.59,14.95,6.15,5.68,12.59,11.04,19.29,16.07l7.88-9.81c-6.91-4.79-13.56-9.94-19.94-15.43,2.87-.2,5.7-.85,8.36-1.93,11.15-4.29,16.72-13.29,16.72-27.01.16-5.34-1.68-10.55-5.14-14.62h18.63v67.84h13.5v-67.84h16.08v-10.13Zm-198.88,44.97c-3.3,3.24-7.25,4.86-11.88,4.86-6.75,0-10.12-4.07-10.12-12.21v-27.49h22v34.84Zm132.67-20.22c-5.78,0-8.68-2.57-8.68-7.71-.01-2,.74-3.93,2.09-5.39,1.24-1.48,3.06-2.33,4.99-2.33,2.77-.05,5.45.93,7.55,2.73,2.12,1.78,3.45,4.32,3.7,7.08-1.5,3.75-4.72,5.63-9.65,5.62Z" /><path fill="#fff"
                                                                                        d="m145.12,250.74v10.13h20.1c1.39.96,2.68,2.81,3.85,5.55,1.04,2.13,1.64,4.46,1.77,6.83,0,7.39-4.87,11.09-14.63,11.09-1.12.02-2.25-.04-3.37-.16,0,5.97,1.22,11.17,3.65,15.58-6.19,5.58-12.76,8.37-19.7,8.37-3.05.06-6.01-1.03-8.28-3.05-2.25-1.93-3.52-4.76-3.46-7.72,0-7.18,6.16-10.77,18.49-10.77,1.18,0,2.3.05,3.37.16l-4.82-9c-2.46-.11-4.07-.16-4.82-.16-4.93,0-8.36.64-10.29,1.93-4.48-2.08-7.27-6.64-7.07-11.57,0-6.54,2.57-9.81,7.71-9.81,3.54,0,5.31,2.89,5.31,8.68v1.12h10.28c.12-.85.17-1.71.16-2.57.18-4.39-1.55-8.64-4.74-11.65-3.26-2.99-7.56-4.57-11.97-4.42-4.83-.05-9.47,1.87-12.86,5.3-.16.15-.31.29-.46.45v-4.31H31.54v10.13h18.16v23.63c-4.29,0-6.65.05-7.08.16-3,.53-4.5,2.03-4.5,4.5,0,2.25,2.82,5.97,8.44,11.17,5.63,5.2,9.62,7.8,11.98,7.8,2.68,0,4.02-1.71,4.02-5.14v-8.2h21.2v33.92h13.5v-67.84h12.26c-.8,2.02-1.21,4.2-1.19,6.43.02,3.5.96,6.94,2.73,9.96,1.67,3.06,4.18,5.57,7.24,7.24-4.18,3.1-6.27,7.5-6.27,13.18-.07,5.75,2.62,11.19,7.23,14.63,4.45,3.62,10.03,5.55,15.76,5.46,9.43,0,17.36-3,23.79-9v-5.49c.75.97,1.57,1.89,2.47,2.76,5.63,5.46,12.99,8.19,22.1,8.19,4.91-.03,9.74-1.17,14.13-3.31v17.79h13.5v-67.84h16.08v-10.13h-81.97Zm-61.36,33.76h-21.2v-23.63h21.2v23.63Zm98.33,20.25c-3.46.06-6.85-1.01-9.64-3.05-2.74-1.94-4.45-5.01-4.67-8.36,1.77-.08,3.51-.46,5.15-1.13,7.18-2.57,10.77-8.3,10.77-17.19-.09-5.19-1.96-10.18-5.3-14.15h19.11v38.5c-4.37,3.46-9.79,5.36-15.42,5.38Z" /><path fill="#fff"
                                                                                        d="m544.02,346.85c-.5,0-.98-.2-1.34-.56-.36-.36-.55-.84-.55-1.34v-131.84c0-1.05.85-1.89,1.89-1.89.5,0,.98.2,1.34.55.36.36.55.84.55,1.34v131.84c0,.5-.2.98-.55,1.34s-.84.56-1.34.56h0Z" /><path fill="currentColor"
                                                                                        d="m276.39,0v113.64h-1.57c-10.43,0-16.72-10.88-19.34-15.75l-26.66-56.04C216.25,15.75,193.77,0,168.68,0h-50.68v159.32h49.1V45.68h1.57c11,0,17.76,11.96,19.34,15.75l27.19,55.99c11.52,26.1,33.96,41.86,59.58,41.86h50.19V0h-48.58Z" /><path fill="currentColor"
                                                                                        d="m872.25,0l-59.02,118.51L750.59,0h-411.48v159.32h99.9s32.1,0,32.1,0c45.56,0,67.31-27.71,67.31-73.39v-17.44c0-4.87,0-17.93-3.66-30.98h72.46v121.78h46.57V37.5h65.22l64.73,121.77h58.49L922.44,0h-50.19Zm-380.95,96.75c0,16.32-8.3,25.02-26.91,25.02h-78.19V37.5h78.19c18.13,0,26.91,9.79,26.91,24.45v34.8Z" /><ellipse fill="#ec1d24" cx="330.69"
                                                                                        cy="80.03" rx="29.2"
                                                                                        ry="28.91" /></svg></a></span><span class="lgo-rajth"><a href="https://rajasthan.ndtv.in/livetv-ndtvrajasthan"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.06 138"><polygon fill="#00a3fc" points="25.11 74.31 280.68 74.33 280.68 138 25.11 137.98 25.11 74.31" /><path fill="#ec1d24" d="m189.63,90.23v.89h.53c-.16-.3-.34-.6-.53-.89Zm0,0v.89h.53c-.16-.3-.34-.6-.53-.89Z" /><path fill="#fff" d="m266.93,85.26v5.86h-9.31v39.27h-7.81v-22.24h-10.66l.09,6.51c0,1.49-.84,2.23-2.51,2.23-1.36,0-3.4-1.59-6.1-4.79-2.69-3.19-4.04-5.5-4.04-6.93-.02-.89.3-1.75.88-2.42.57-.67,1.4-1.05,2.28-1.02h20.06v-10.61h-29.6v39.27h-7.82v-39.27h-8.24v39.27h-7.81v-9.45c-3.37,2-7.26,3.03-11.23,2.93-5.21,0-9.41-1.69-12.61-5.07-2.31-2.5-3.85-5.58-4.48-8.88h-1.38l-4.19-5.86h12.84v2.63c1.96-.19,3.85-.83,5.54-1.89,2.21-1.5,3.48-4.04,3.35-6.7.05-1.86-.44-3.7-1.4-5.3-.88-1.64-2.61-2.64-4.47-2.61-2.85,0-4.28,1.24-4.28,3.73-.02.93.39,1.83,1.12,2.41.73.62,1.65.95,2.61.94v5.3c-2.59.1-5.14-.66-7.26-2.14-2.13-1.52-3.35-4-3.26-6.61-.02-.93.11-1.84.38-2.7h-5.54v11.07c0,3.04-.99,5.21-2.98,6.52-1.76,1.1-3.78,1.71-5.86,1.76,2.98,4.48,6.31,8.71,9.96,12.66.56.56,1.3,1.36,2.23,2.42l-6.05,4.37c-.86-1.05-2.14-2.64-3.81-4.74-5.96-7.57-11.31-15.6-16.01-24.01l5.87-3.63c1.92,4.71,3.87,7.07,5.86,7.07s3.07-1.05,3.07-3.16v-10.33h-20.43v39.27h-7.82v-24.57h-6.75c1.32,2.06,2.06,4.44,2.14,6.89.03,3.02-1.12,5.94-3.21,8.14-1.98,2.25-4.85,3.53-7.86,3.49-5.15,0-9.74-2.61-13.77-7.82-3.31-4.52-5.62-9.69-6.8-15.17l6.15-3.81v.09c.25,1.85.72,3.66,1.4,5.4,3.41,10.3,7.47,15.45,12.19,15.45,2.97,0,4.46-1.83,4.46-5.49,0-3.35-1.61-7.11-4.84-11.26-.37-.5-.86-1.09-1.48-1.77h18.37v-8.84h-41.23v39.27h-7.82v-39.27h-8.75v11.07c.12,2.62-1.16,5.1-3.35,6.52-2.23,1.36-4.84,1.98-7.45,1.76,1.93,2.92,3.66,5.34,5.21,7.26,3.85,4.65,6.49,7.51,7.91,8.56l-5.58,4.56c-1.12-1.24-2.64-2.97-4.56-5.21-6.44-7.91-12.35-16.24-17.68-24.94l5.95-3.81c.78,1.93,1.95,3.68,3.45,5.12,1.32,1.57,3.25,2.51,5.3,2.6,2.05,0,3.07-1.18,3.07-3.53v-9.96h-21.77v-5.86h130.44v2.96c.44-.52.96-.98,1.53-1.38,2.27-1.64,5.01-2.49,7.81-2.42,3.62-.12,7.11,1.32,9.59,3.96.54.58,1.02,1.2,1.45,1.85v.89h.53c1.21,2.17,1.82,4.64,1.74,7.17.04,3.75-1.64,7.32-4.56,9.67-2.81,2.43-6.34,3.87-10.05,4.1.3,1.85,1.39,3.48,2.98,4.47,1.54,1,3.36,1.52,5.21,1.48,2.83-.08,5.59-.92,8-2.41,1.01-.56,1.96-1.2,2.86-1.91v-22.57h-6.18c-.16-.3-.34-.6-.53-.89v-4.97h77.3Z" /><path fill="currentColor" d="m60.26,0v43.24h-.6c-3.97,0-6.36-4.14-7.35-6l-10.15-21.32C37.38,5.99,28.83,0,19.28,0H0v60.62h18.68V17.38h.6c4.19,0,6.76,4.55,7.36,5.99l10.35,21.3c4.38,9.94,12.91,15.93,22.66,15.93h19.1V0h-18.49Z" /><path fill="currentColor" d="m286.97,0l-22.46,45.09L240.68,0H84.12v60.62h50.23c17.33,0,25.61-10.55,25.61-27.93v-6.64c.06-3.97-.4-7.93-1.4-11.78h27.58v46.33h17.71V14.27h24.81l24.63,46.33h22.26L306.06,0h-19.09Zm-144.94,36.81c0,6.21-3.16,9.52-10.24,9.52h-29.75V14.27h29.75c6.9,0,10.24,3.72,10.24,9.3v13.24Z" /><ellipse fill="#ec1d24" cx="80.92" cy="30.45" rx="11.11" ry="11" /></svg></a></span><span class="lgo-ndtv"><a href="https://www.ndtv.com/video/live/channel/ndtv24x7"><svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 249.23 100.3"><path fill="currentColor"
                                                                                        d="m181.32,55.8h-17.3l-10.4,12.1-10.39-12.1h-17.41l19.11,22.2-8.91,10.34v-13.44h-.09l-10.5.1v-34.9h-20.81l-35.14,21.68c.05-2.83.05-5.62.05-8.48,0-5.3-2.6-9.2-7.61-11.2-3.5-1.4-7.09-1.9-10.8-1.9-9.9-.1-20-.1-29.89,0-4.21,0-8.3.5-12.21,1.9-3.2,1.1-5.69,3.1-7.1,6.3C-.17,52.9.03,57.8.22,62.7h17.11v-1.3c.09-4.1,1.79-6.2,5.79-7.1,1.11-.3,2.4-.4,3.61-.4,6.19,0,12.39-.1,18.6,0,1.5,0,3,.3,4.39.8,2,.6,2.61,1.7,2.61,3.7v1.9c0,1.8-.71,3-2.41,3.5-1.5.5-3.09.9-4.59,1-10.3.9-20.6,1.7-30.9,2.5-3.5.3-6.81,1.2-9.71,3.3-2.69,1.9-4.5,4.5-4.6,7.9-.2,7.2-.09,14.4-.09,21.7h68.79v-11.41l40.11-.59v12.1h16.6v-11.4l10.18-.19-9.89,11.49h17.41l10.39-12.1,10.4,12.1h17.3l-19-22.2,19-22.2Zm-119.49,31.3H17.42c-.5-3.7,1.41-6.3,5.1-6.6,7.1-.7,14.4-1.1,21.6-1.8,4.71-.4,9.41-.8,14-1.5,1.35-.21,2.58-.55,3.71-1.02v10.92Zm46.99-12.1l-34.5.2,34.5-20.8v20.6Zm73.3-34.9v14.8h45.2l-39.8,45.3h22.1l39.61-46.1v-14h-67.11ZM64.32,0v25.3h-.2c-2.2,0-3.59-2.4-4.2-3.5l-5.7-12.5c-2.69-5.7-7.5-9.3-12.8-9.3h-13.59v35.7h11.29V10.4h.3c2.5,0,4.11,2.7,4.41,3.5l6.09,12.5c2.61,5.8,7.7,9.3,13.5,9.3h11.4V0h-10.5Z" /><path fill="currentColor"
                                                                                        d="m201.43.6v.2l-13.5,25.9L173.52.8h-94.3v34.9h22.71v-.1h7.29c10.4,0,15.31-6.2,15.31-16.3v-3.9c0-1.1,0-4-.91-6.9h16.61v27h10.5V8.5h15.29l15.1,27h13.5L213.02.6h-11.59Zm-87.31,20.9c0,3.5-1.9,5.4-6.3,5.4h-5.89v.1h-12.21V8.7h12.21v-.1h5.89c4.21,0,6.3,2.1,6.3,5.3v7.6Z" /><path fill="#dc3831"
                                                                                        d="m83.53,18.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-3-6.5-6.5,2.9-6.7,6.5-6.7c3.6.1,6.5,3.1,6.5,6.7h0Z" /></svg></a></span></div></div></div><div class="follow-social"><div class="watch-news_inner"><p>Follow Us:</p><div class="tv-logos"><a href="https://twitter.com/ndtv" target="_blank" class="ss-lk facebook ttp"><svg class="ndtv-icon"><use xlink:href="#twitter"></use></svg></a><a href="https://www.facebook.com/ndtv" target="_blank" class="ss-lk twitter ttp"><svg class="ndtv-icon"><use xlink:href="#facebook"></use></svg></a><a href="https://www.instagram.com/ndtv/" target="_blank" class="ss-lk linkedin ttp"><svg class="ndtv-icon"><use xlink:href="#instagram"></use></svg></a></a><a href="https://www.whatsapp.com/channel/0029Va4lixw7z4kcvZI9JM12" target="_blank" class="ss-lk linkedin ttp"><svg class="ndtv-icon"><use xlink:href="#whatsapp-icn"></use></svg></a><!--<a href="https://www.youtube.com/user/ndtv" target="_blank" class="ss-lk linkedin ttp"><svg class="ndtv-icon"><use xlink:href="#youtube"></use></svg></a> --></div></div></div></div></div><div class="tgs"><div class="tg_wrp"><a class="tg_lk" href="https://www.ndtv.com/topic/14~year~old-catches-fire-while-trying-to-remove-nail-polish">14-Year-Old Catches Fire while trying to remove nail polish</a><a class="tg_lk" href="https://www.ndtv.com/topic/14~year~old-suffers-third~degree-burns">14-Year-Old Suffers Third-Degree Burns</a><a class="tg_lk" href="https://www.ndtv.com/topic/nail-polish-removing-near-candle">nail polish removing near candle</a></div></div></div></div></div><!-- Newsletter --><!-- Tags ( after story ) --></div></div></div></article><aside id="stk_cnt" class="col-200 col-lf-2"><div class="s-lf-wid s-lf-stky"><div class="st-highlihts"></div><div class="trndngWdgt rltdwdgt wthWs"><div class="s-ls"><div class="s-tx"><h3 class="s-ttl">Trending </h3></div><ul class="s-ls_ul s-ls_br"><li class="s-ls_li"><div class="trndImg"><a href="https://www.ndtv.com/india-news/hemant-soren-to-quit-minister-champai-soren-to-meet-governor-to-take-over-4968368#News_Trending"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2024-01/m6si7br8_hemant-soren-_625x300_02_January_24.jpeg" alt="Hemant Soren Arrested, Champai Soren To Take Over As Jharkhand Chief Minister" class="lozad" /></a></div><div class="trndTxt"><div class="s-ls_txt"><a href="https://www.ndtv.com/india-news/hemant-soren-to-quit-minister-champai-soren-to-meet-governor-to-take-over-4968368#News_Trending">Hemant Soren Arrested, Champai Soren To Take Over As Chief Minister</a></div></div></li><li class="s-ls_li"><div class="trndImg"><a href="https://www.ndtv.com/india-news/paytm-payments-bank-faces-rbi-action-cant-offer-services-including-wallet-or-sign-up-new-customers-after-february-29-4967135#News_Trending"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2024-01/faj9ieg8_upi-payments-generic_625x300_31_January_24.jpg?im=FaceCrop,algorithm=dnn,width=240,height=180" alt="Paytm Payments Bank Can&#039;t Offer Services, Including Wallet, After Feb 29: RBI" class="lozad" /></a></div><div class="trndTxt"><div class="s-ls_txt"><a href="https://www.ndtv.com/india-news/paytm-payments-bank-faces-rbi-action-cant-offer-services-including-wallet-or-sign-up-new-customers-after-february-29-4967135#News_Trending">Paytm Payments Bank Can't Offer Services, Including Wallet, After Feb 29: RBI</a></div></div></li><li class="s-ls_li"><div class="trndImg"><a href="https://www.ndtv.com/india-news/kindly-move-out-notice-to-congress-mani-shankar-aiyar-daughter-for-post-on-ram-temple-4965891#News_Trending"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2024-01/bov0peek_mani-shankar-aiyar-ani_625x300_31_January_24.jpeg?im=FeatureCrop,algorithm=cascade,width=240,height=180" alt="&quot;Kindly Move Out&quot;: Mani Shankar Aiyar, Daughter Told After Ram Temple Post" class="lozad" /></a></div><div class="trndTxt"><div class="s-ls_txt"><a href="https://www.ndtv.com/india-news/kindly-move-out-notice-to-congress-mani-shankar-aiyar-daughter-for-post-on-ram-temple-4965891#News_Trending">"Kindly Move Out": Mani Shankar Aiyar, Daughter Told After Ram Temple Post</a></div></div></li><li class="s-ls_li"><div class="trndImg"><a href="https://www.ndtv.com/entertainment/fighter-box-office-collection-day-6-hrithik-roshan-s-film-sees-a-dip-mints-7-75-crore-4964771#News_Trending"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2024-01/i93675k8_-fighter_120x90_31_January_24.jpg" alt="&lt;I&gt;Fighter&lt;/I&gt; Box Office Collection Day 6: Hrithik Roshan-Deepika Padukone&#039;s Film &quot;Shocks India, Rocks Overseas&quot;" class="lozad" /></a></div><div class="trndTxt"><div class="s-ls_txt"><a href="https://www.ndtv.com/entertainment/fighter-box-office-collection-day-6-hrithik-roshan-s-film-sees-a-dip-mints-7-75-crore-4964771#News_Trending">Box Office: Hrithik-Deepika's <I>Fighter</I> "Shocks India, Rocks Overseas"</a></div></div></li><li class="s-ls_li"><div class="trndImg"><a href="https://www.ndtv.com/indians-abroad/murder-in-gujarat-drugs-in-australia-indian-origin-couples-empire-falls-4964422#News_Trending"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://i.ndtvimg.com/i/2018-01/arti-dhir-extradition_240x180_71516684810.jpg" alt="Murder In Gujarat, Drugs In Australia: Indian-Origin Couple&#039;s Empire Falls" class="lozad" /></a></div><div class="trndTxt"><div class="s-ls_txt"><a href="https://www.ndtv.com/indians-abroad/murder-in-gujarat-drugs-in-australia-indian-origin-couples-empire-falls-4964422#News_Trending">Murder In Gujarat, Drugs In Australia: Indian-Origin Couple's Empire Falls</a></div></div></li><li class="s-ls_li"><div class="trndImg"><a href="https://www.ndtv.com/world-news/malaysias-new-king-owns-300-luxury-cars-1-was-gifted-by-adolf-hitler-4965515#News_Trending"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2024-01/8mnm35i8_malaysia-king-_120x90_31_January_24.jpg" alt="300 Cars, Private Army, Jets: Malaysia&#039;s New King&#039;s Incredible Wealth" class="lozad" /></a></div><div class="trndTxt"><div class="s-ls_txt"><a href="https://www.ndtv.com/world-news/malaysias-new-king-owns-300-luxury-cars-1-was-gifted-by-adolf-hitler-4965515#News_Trending">300 Cars, Private Army, Jets: Malaysia's New King's Incredible Wealth</a></div></div></li></ul></div></div><div class="_prwlhs" id="_shopngwgtlhs"><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){window._pricee = window._pricee || []; _pricee.push({container : '_shopngwgtlhs'});});</script></div></div></aside><div class="ads_tb-c  lazyload"><div id="taboola-below-main-column-sc-new-taboola1"></div><div id="taboola-below-main-column-organic-mix"></div><div id="taboola-below-article-thumbnails"></div><script type="text/javascript">
        window._rrCode = window._rrCode || [];_rrCode.push(function(){
		window._taboola = window._taboola || [];
        _taboola.push({
            mode: 'thumbnails-c',
            container: 'taboola-below-article-thumbnails',
            placement: 'Below Article Thumbnails - NDTV',
            target_type: 'mix'
        });
        }); 
    </script><div id="taboola-below-article-thumbnails-2nd"></div><script type="text/javascript">
        window._rrCode = window._rrCode || [];_rrCode.push(function(){
		window._taboola = window._taboola || [];
        _taboola.push({
            mode: 'organic-thumbnails-c',
            container: 'taboola-below-article-thumbnails-2nd',
            placement: 'Below Article Thumbnails 2nd - NDTV',
            target_type: 'mix'
        });
        }); 
    </script>
    
        
    
							.
                        </div></div><div class="new_nextarrow" onmouseover="$('#categnxtstry').show();" onmouseout="$('#categnxtstry').hide();"><div class="arrow"><a href="https://www.ndtv.com/feature/year-ender-2023-coffee-badging-to-rage-applying-top-5-workplace-trends-that-dominated-2023-4709287#ndtv_nextstory"><img class="lozad123" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://cdn.ndtv.com/static/ndtv_2014/images/next_blog_arrow_big_new.png"></a></div><div class="arrowstory" id="categnxtstry" style="display:none;"><a href="https://www.ndtv.com/feature/year-ender-2023-coffee-badging-to-rage-applying-top-5-workplace-trends-that-dominated-2023-4709287#ndtv_nextstory">Coffee Badging To Rage Applying, Top 5 Workplace Trends That Dominated 2023</a></div></div><div class="new_prevarrow" onmouseover="$('#categprvstry').show();" onmouseout="$('#categprvstry').hide();"><div class="arrow"><a href="https://www.ndtv.com/feature/my-last-day-will-be-saturday-dutch-woman-28-shares-final-post-before-being-euthanised-4967129#ndtv_prevstory"><img class="lozad123" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://cdn.ndtv.com/static/ndtv_2014/images/prev_blog_arrow_big_new.png"></a></div><div class="arrowstory" id="categprvstry" style="display:none;"><a href="https://www.ndtv.com/feature/my-last-day-will-be-saturday-dutch-woman-28-shares-final-post-before-being-euthanised-4967129#ndtv_prevstory">"My Last Day Will Be Saturday": Dutch Woman, 28, Shares Final Post Before Being Euthanised</a></div></div><script type="application/ld+json" class="schema">{ "@type": "NewsMediaOrganization", "name": "NDTV",    "url": "https://www.ndtv.com/",    "foundingDate": "1988",    "legalName": "NDTV",  "sameAs":["https:\/\/www.facebook.com\/ndtv","https:\/\/twitter.com\/NDTV","https:\/\/www.youtube.com\/ndtv","https:\/\/instagram.com\/ndtv","https:\/\/linkedin.com\/company/ndtv"],  "founder" : {  "@type": "Person",    "name": "Prannoy Roy, Radhika Roy"  },  "logo" : {  "@type": "ImageObject",    "url": "https://drop.ndtv.com/homepage/images/ndtvlogo23march.png",    "inLanguage": "English",    "caption": "NDTV"  },  "address" : {  "@type": "PostalAddress",    "streetAddress": "Archana Complex, Block B, Greater Kailash I",    "addressLocality": "New Delhi",    "addressRegion": "India",    "postalCode": "110048"  },  "contactPoint" : {  "@type": "ContactPoint",    "alternateName": "011-2644-6666",    "areaServed": "[IN]",    "availableLanguage": "English"}  }  </script><script type="application/ld+json">{"@context": "https://schema.org","@type": "WebSite", "url": "https://www.ndtv.com", "potentialAction": { "@type": "SearchAction","target": "https://www.ndtv.com/search?searchtext={search_term_string}","query-input": "required name=search_term_string"} }</script><script type="application/ld+json">{"@context": "http://schema.org/","@type": "WebPage","name": "14-Year-Old Suffers Third-Degree Burns After Removing Nail Polish Near A Candle In US","description": "The Ohio teenager is sharing a warning after the simple task of removing nail paint left her hospitalised with serious burn injuries.","keywords": "14-Year-Old Catches Fire while trying to remove nail polish,14-Year-Old Suffers Third-Degree Burns,nail polish removing near candle","url": "https://www.ndtv.com/feature/14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596","speakable":{"@type": "SpeakableSpecification","xPath": ["/html/head/title","/html/head/meta[@name='description']/@content"]},"publisher":{"@type": "Organization","name": "NDTV","url": "https://www.ndtv.com"}}</script></section><!--=== LHS sidebar ===--><!--=== RHS sidebar ===--><aside class="col-300"><div class="add-rhs"><section class="add-section"><div class="add__wrp"><div class="add__placeholder ins_adcont lazyload"><span class="add__txt">Advertisement</span><div id="medium_rec_adbox" class="medium_rec_adbox" style="height:auto;"><div id="adslot300x250ATF"><script>googletag.cmd.push(function () { googletag.display("adslot300x250ATF"); });</script></div></div></div></div></section><section class="add-section"><div class="add__wrp"><div class="add__placeholder ins_adcont lazyload"><span class="add__txt">Advertisement</span><div id="small_rec_adbox" class="small_rec_adbox"><div id="adslot300x100ATF" style="height:100px; width:300px;margin:0 auto;"><script>googletag.cmd.push(function () { googletag.display("adslot300x100ATF"); });</script></div></div></div></div></section><div class="ins_adwrap marginb20 lazyload"><div class="ins_adcont"><div id="taboola-right-rail-ad-spot"></div><script type="text/javascript">
                  window._taboola = window._taboola || [];
                  _taboola.push({
                    mode: 'thumbnails-d',
                    container: 'taboola-right-rail-ad-spot',
                    placement: 'Right Rail Ad Spot',
                    target_type: 'mix'
                  });
                </script></div></div><div class="lazyload" style="float: left;margin: 20px 0;width: 100%;"><div id="taboola-right-rail"></div><div id="taboola-rr-mix"></div><div id="taboola-right-rail-thumbnails"></div><script type="text/javascript">
        window._rrCode = window._rrCode || [];_rrCode.push(function(){
		window._taboola = window._taboola || [];
        _taboola.push({
            mode: 'thumbnails-b',
            container: 'taboola-right-rail-thumbnails',
            placement: 'Right Rail Thumbnails - NDTV',
            target_type: 'mix'
        });
        });
    </script><div id="taboola-right-rail-thumbnails-2nd"></div><script type="text/javascript">
        window._rrCode = window._rrCode || [];_rrCode.push(function(){
		window._taboola = window._taboola || [];
        _taboola.push({
            mode: 'organic-thumbnails-b',
            container: 'taboola-right-rail-thumbnails-2nd',
            placement: 'Right Rail Thumbnails 2nd - NDTV',
            target_type: 'mix'
        });
        });
    </script></div><div class="newins_widget"><div class="lazyload"><div id="taboola-right-rail-thumbnails-3rd---ndtv"></div><script type="text/javascript">
		window._taboola = window._taboola || [];
		_taboola.push({
		mode: 'vertical-a',
		container: 'taboola-right-rail-thumbnails-3rd---ndtv',
		placement: 'Right Rail Thumbnails 3rd - NDTV',
		target_type: 'mix'
		});
		</script></div><section class="add-section"><div class="add__wrp"><div class="add__placeholder ins_adcont lazyload"><span class="add__txt">Advertisement</span><div id="vuukle-ad-17" style="max-width: 300px; max-height: 250px;"></div><script>var VUUKLE_CONFIG = {apiKey: 'e6741053-104a-43d2-8bd8-b2536529f5cd',articleId: '1',comments: {enabled: false},emotes: {"enabled": false},powerbar: {"enabled": false},ads:{noDefaults: true}};(function() {var d = document,s = d.createElement('script');s.async = true;s.src = 'https://cdn.vuukle.com/platform.js';(d.head || d.body).appendChild(s);})();</script></div></div></div></section><section class="add-section"><div class="add__wrp"><div class="add__placeholder ins_adcont lazyload"><span class="add__txt">Advertisement</span><div id="adslot300x250BTF" style="height:250px;"><script> googletag.cmd.push(function () { googletag.display("adslot300x250BTF"); }); </script></div></div></div></section><div class="ins_keyword_rhs"><div class="newins_widhead"><span>Quick Links</span></div><a href="https://www.ndtv.com/world-news" title="International News">World News</a><a href="https://www.ndtv.com/indian-railway/pnr-status" title="Check PNR Status">PNR Status</a><a href="https://www.ndtv.com/education" title="Education News India">Education News</a><a href="https://www.ndtv.com/business-news" title="Latest Business News">Business News</a><a href="https://sports.ndtv.com/" title="Latest Sports News">Sports News</a><a href="https://mpcg.ndtv.in" title="Latest MP Chhattisgarh News">MP Chhattisgarh News</a><a href="https://www.ndtvprofit.com/" title="Business News">NDTV Profit</a><a href="https://www.ndtv.com/india-news/hemant-sorens-wife-may-be-named-chief-minister-if-hes-arrested-sources-4962510" title="Cm Hemant Soren">Hemant Soren</a><a href="https://www.ndtv.com/tamil-nadu-news/madras-high-court-to-tamil-nadu-cant-allow-non-hindus-beyond-flagpole-in-temples-4962278" title="Madras High Court">Tamil Nadu Temples</a><a href="https://www.ndtv.com/india-news/parliament-budget-session-live-breaking-news-updates-president-droupadi-murmu-pm-narendra-modi-nirmala-sitharaman-4964301" title="Parliament&#039;s Budget Session Live">Parliament Budget Session</a></div><section class="add-section"><div class="add__wrp"><div class="add__placeholder ins_adcont lazyload"><span class="add__txt">Advertisement</span><div id='div-gpt-ad-1680434426304-0' style='min-width: 250px; min-height: 200px;'><script>googletag.cmd.push(function(){ googletag.display('div-gpt-ad-1680434426304-0'); });</script></div</div></div></section><section class="add-section"><div id="sticky-btf2"></div><div class="add__wrp" id="rhswgt_fix"><div class="add__placeholder ins_adcont lazyload"><span class="add__txt">Advertisement</span><div id="scrolltaboola" class="ins_adwrap marginb20" style="width:auto;text-align: center;"><p>................................ Advertisement ................................</p><div class="ins_adcont" id="adslot300x250BTF2"><script>googletag.cmd.push(function () { googletag.display("adslot300x250BTF2"); });</script></div></div></div></div></section></div></div></div></aside></div></div></div><!--====== Footer ======--><footer><div class="lst_nws_colr"><div class="container"><span class="lst_nws_wrp"><a href="https://www.ndtv.com/latest#pfrom=home-lateststories"><span>Latest News</span></a></span><div class="lst_nws_cnt"><ul class="foot-news"><li class="foot-news--list"><a href="https://www.ndtv.com/delhi-news/man-writes-pro-khalistan-slogans-on-delhi-parks-wall-arrested-4969407"><span class="foot-thumb"><span><img alt="Man Writes Pro-Khalistan Slogans On Delhi Park's Wall, Arrested" title="Man Writes Pro-Khalistan Slogans On Delhi Park's Wall, Arrested" class="imgbrd lozad" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2022-12/h3qjno2o_india-police-generic_120x90_23_December_22.jpg" data-tb-shadow-region-image="0" border="0"></span></span></a><div class="title"><a href="https://www.ndtv.com/delhi-news/man-writes-pro-khalistan-slogans-on-delhi-parks-wall-arrested-4969407">
                                    Man Writes Pro-Khalistan Slogans On Delhi Park's Wall, Arrested                                </a></div></li><li class="foot-news--list"><a href="https://www.ndtv.com/india-news/seats-will-be-allocated-properly-akhilesh-yadav-on-talks-with-congress-4969406"><span class="foot-thumb"><span><img alt=""Seats Will Be Allocated Properly": Akhilesh Yadav On Talks With Congress" title=""Seats Will Be Allocated Properly": Akhilesh Yadav On Talks With Congress" class="imgbrd lozad" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2023-06/he3re53o_akhilesh-yadav-pti_120x90_06_June_23.jpg" data-tb-shadow-region-image="0" border="0"></span></span></a><div class="title"><a href="https://www.ndtv.com/india-news/seats-will-be-allocated-properly-akhilesh-yadav-on-talks-with-congress-4969406">
                                    "Seats Will Be Allocated Properly": Akhilesh Yadav On Talks With Congress                                </a></div></li><li class="foot-news--list"><a href="https://www.ndtv.com/india-news/z-plus-security-withdrawn-from-tejashwi-yadav-given-to-his-successors-4967822"><span class="foot-thumb"><span><img alt="Z-Plus Security Withdrawn From Tejashwi Yadav, Given To His Successors" title="Z-Plus Security Withdrawn From Tejashwi Yadav, Given To His Successors" class="imgbrd lozad" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2023-09/h6ocmg2o_tejashwi-yadav-240_120x90_30_September_23.jpg" data-tb-shadow-region-image="0" border="0"></span></span></a><div class="title"><a href="https://www.ndtv.com/india-news/z-plus-security-withdrawn-from-tejashwi-yadav-given-to-his-successors-4967822">
                                    Z-Plus Security Withdrawn From Tejashwi Yadav, Given To His Successors                                </a></div></li><li class="foot-news--list"><a href="https://www.ndtv.com/india-news/7-killed-as-vehicle-falls-into-gorge-in-jammu-and-kashmir-4969374"><span class="foot-thumb"><span><img alt="7 Killed As Vehicle Falls Into Gorge In Jammu And Kashmir" title="7 Killed As Vehicle Falls Into Gorge In Jammu And Kashmir" class="imgbrd lozad" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2022-08/8gk2u2kc_do-not-cross-police-generic_120x90_23_August_22.jpg" data-tb-shadow-region-image="0" border="0"></span></span></a><div class="title"><a href="https://www.ndtv.com/india-news/7-killed-as-vehicle-falls-into-gorge-in-jammu-and-kashmir-4969374">
                                    7 Killed As Vehicle Falls Into Gorge In Jammu And Kashmir                                </a></div></li><li class="foot-news--list"><a href="https://www.ndtv.com/bhopal-news/man-injured-while-trying-to-flee-from-police-custody-dies-during-treatment-in-madhya-pradesh-4969353"><span class="foot-thumb"><span><img alt="Man Injured While Trying To Flee From Police Custody, Dies During Treatment" title="Man Injured While Trying To Flee From Police Custody, Dies During Treatment" class="imgbrd lozad" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDAgMTA2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNDAgMTA2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6Ny4wMDAwMDBlLTAyO2ZpbGw6I0YxRjNGNzt9Cgkuc3Qxe29wYWNpdHk6MC4zNDtmaWxsOiNBRkFGQUY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cjwvc3R5bGU+CjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTA2Ii8+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAzLjcsNDYuMkw5OC4zLDU3bC01LjktMTAuN0g2My41aC0wLjRoLTguOXY0LjZjMS4yLDAuMywyLDEuNCwyLDIuNmMwLDEuMi0wLjksMi4yLTIsMi42djQuNmg4LjlsMCwwaDMKCWM0LjMsMCw2LjMtMi41LDYuMy02LjZ2LTEuNWMwLTAuNCwwLTEuNi0wLjMtMi44aDYuOHYxMWg0LjN2LTExaDYuMWw2LjEsMTFoNS41bDcuNy0xNC40SDEwMy43eiBNNjgsNTVjMCwxLjQtMC44LDIuMi0yLjYsMi4yaC0yCgloLTAuNGgtNC41di03LjZoNC45bDAsMGgyYzEuNywwLDIuNiwwLjksMi42LDIuMlY1NXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUwLjgsNTMuNGMwLTEuMiwwLjktMi4zLDItMi42di00LjVoLTQuNXYxMC4yaC0wLjJjLTAuOSwwLTEuNS0xLTEuOC0xLjRsLTIuNS01Yy0xLjItMi40LTMuMi0zLjgtNS42LTMuOAoJaC00Ljd2MTQuNGg0LjZWNTAuNGgwLjJjMSwwLDEuNiwxLjEsMS44LDEuNGwyLjYsNWMxLjEsMi40LDMuMiwzLjgsNS41LDMuOGg0LjdWNTZDNTEuNiw1NS43LDUwLjgsNTQuNyw1MC44LDUzLjR6Ii8+Cjwvc3ZnPgo=" data-src="https://c.ndtvimg.com/2022-12/h3qjno2o_india-police-generic_120x90_23_December_22.jpg" data-tb-shadow-region-image="0" border="0"></span></span></a><div class="title"><a href="https://www.ndtv.com/bhopal-news/man-injured-while-trying-to-flee-from-police-custody-dies-during-treatment-in-madhya-pradesh-4969353">
                                    Man Injured While Trying To Flee From Police Custody, Dies During Treatment                                </a></div></li></ul></div></div></div><div class="ft t-center"><div class="container"><nav class="ft-nv"><ul class="ft-nv_ul"><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/corporatepage/index.aspx#pfrom=home-footer" class="item-title">About Us</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/advertise/ndtv_leaderboard.aspx#pfrom=home-footer" class="item-title">Advertise</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/brandamp#pfrom=home-footer" class="item-title">Brand Amp</a></li><li class="ft-nav_li"><a href="https://archives.ndtv.com/#pfrom=home-footer" class="item-title">Archives</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/page/apps#pfrom=home-footer" class="item-title">Apps</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/careers/#pfrom=home-footer" class="item-title">Careers</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/new/dth.aspx#pfrom=home-footer" class="item-title">Channels</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/new/disclaimer.aspx#pfrom=home-footer" class="item-title">Disclaimer</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/new/feedback.aspx#pfrom=home-footer" class="item-title">Feedback</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/corporatepage/investors.aspx#pfrom=home-footer" class="item-title">Investors</a></li></li><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/new/Complaint.aspx#pfrom=home-footer" class="item-title">Redressals</a></li><li class="ft-nav_li"><a href="https://www.ndtv.com/convergence/ndtv/new/termsofusage.aspx#pfrom=home-footer" class="item-title">Service Terms</a></li></ul></nav><div class="ft-cpr"><a href="https://www.ndtv.com/convergence/ndtv/new/codeofethics.aspx">This website follows the DNPA Code of Ethics </a>© COPYRIGHT NDTV CONVERGENCE LIMITED 2024. ALL RIGHTS RESERVED.</div></div></div></footer><div class="ovl"></div><!--====== Comment RHS Slidein ======--><div class="cmt-wrp"><div class="cmt-cnt"><div class="form-wrp"><!-- Close button --><div class="cls-btn"><div></div><div></div></div><!-- Comment Iframe --><iframe name="ndtvSocialCommentForm" id="ndtvSocialCommentFormRhs" src="" scrolling="no" frameborder="0" allowTransparency="true" width="425px" height="98%" frameborder="0"></iframe></div></div></div><!--====== Back to top ======--><div class="back-to-top js-back-to-top js-bkt-out"><svg class="ndtv-icon"><use xlink:href="#arrow"></use></svg></div><!--====== Progress bar ======--><!--<div class="progress-container"><div class="progress-bar" id="progressBar" style="width: 100%;"></div></div>--><svg width="0" height="0" class="hidden"><symbol viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" id="livetv"><title>livetv</title><path
        d="M1.817 0h16.366c1 0 1.817.81 1.817 1.8v10.8c0 .99-.818 1.8-1.818 1.8h-6.364v1.8h1.322a.495.495 0 0 1 .497.492v.816a.497.497 0 0 1-.5.492H6.863a.497.497 0 0 1-.5-.492v-.816a.495.495 0 0 1 .497-.492h1.322v-1.8H1.817c-1 0-1.817-.81-1.817-1.8V1.8C0 .81.819 0 1.817 0zm0 12.6h16.158V1.8H1.817v10.8zm9.603-5.028L8.702 9.865c-.164.139-.307.079-.307-.145V4.905c0-.218.137-.289.307-.145l2.718 2.293a.33.33 0 0 1 0 .519z"
        fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg" id="arrow"><title>arrow</title><path
        d="M8.676 8.792l-6.789 6.88a1.095 1.095 0 0 1-1.563 0 1.131 1.131 0 0 1 0-1.585L6.33 8 .324 1.913a1.131 1.131 0 0 1 0-1.585 1.095 1.095 0 0 1 1.564 0l6.788 6.88C8.892 7.427 9 7.713 9 8c0 .287-.108.573-.324.792z"
        fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" id="print"><title>print</title><path
        d="M4 12.5v-2h8v5H4v-3zm1-1v1h6v-1H5zm0 2v1h6v-1H5zm7-10v2H4v-5h8v3zm2 0c1 0 2 1 2 2v5c0 1-1 2-2 2h-1v-3H3v3H2c-1 0-2-1-2-2v-5c0-1 1-2 2-2h1v3h10v-3h1z"></path></symbol><symbol viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg" id="email"><title>email</title><path
        d="M17.999 11.667c-.002.393-.102.78-.288 1.123l-5.686-6.596 5.624-5.1c.228.37.35.8.351 1.239l-.001 9.334m-9-4.275L16.82.294A2.148 2.148 0 0 0 15.75 0H2.25a2.152 2.152 0 0 0-1.07.294L9 7.392m2.18-.424L9.37 8.612a.55.55 0 0 1-.74 0L6.82 6.968 1.064 13.64A2.17 2.17 0 0 0 2.25 14h13.5c.418 0 .83-.125 1.185-.359L11.18 6.968M.35 1.094c-.227.371-.349.8-.35 1.24v9.335c.002.394.102.78.288 1.123L5.97 6.196.351 1.094"></path></symbol><symbol viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg" id="chat"><title>chat</title><path
        d="M1.9 0h15.2c1.043.014 1.886.869 1.9 1.929v10.606c-.014 1.06-.857 1.915-1.9 1.929H8.056l-3.072 3.431a.314.314 0 0 1-.348.083.322.322 0 0 1-.203-.3v-3.214H1.9C.857 14.45.014 13.594 0 12.535V1.93C.014.869.857.014 1.9 0"
        fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" id="linkedin"><title>linkedin</title><path
        d="M17 9.813V16h-3.645v-5.775c0-1.452-.525-2.438-1.844-2.438a1.994 1.994 0 0 0-1.869 1.311 2.437 2.437 0 0 0-.125.876V16H5.875s.049-9.779 0-10.79h3.641v1.529c0 .012-.016.023-.02.036h.02V6.74a3.632 3.632 0 0 1 3.285-1.788C15.205 4.956 17 6.496 17 9.813M2.064.007A1.91 1.91 0 0 0 .29.876a1.846 1.846 0 0 0-.025 1.95c.364.603 1.04.955 1.75.912h.023a1.91 1.91 0 0 0 1.78-.875A1.847 1.847 0 0 0 3.834.904a1.91 1.91 0 0 0-1.77-.897M.216 16h3.647V5.209H.215V16"></path></symbol><symbol viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" id="reddit"><title>reddit</title><path
        d="M20 7.386c-.002-1.359-1.116-2.46-2.49-2.461a2.476 2.476 0 0 0-1.496.498 10.545 10.545 0 0 0-5.144-1.666l1.042-2.421 3.038.701c.097.889.828 1.58 1.73 1.635a1.855 1.855 0 0 0 1.924-1.407A1.832 1.832 0 0 0 17.528.15a1.87 1.87 0 0 0-2.29.689l-3.55-.824a.627.627 0 0 0-.715.358l-1.44 3.35A10.749 10.749 0 0 0 3.948 5.39a2.515 2.515 0 0 0-2.59-.195A2.46 2.46 0 0 0 0 7.386a2.43 2.43 0 0 0 1.258 2.13c-.01.108-.014.22-.014.331C1.244 13.245 5.152 16 9.956 16c4.805 0 8.712-2.76 8.712-6.153 0-.095 0-.19-.01-.285A2.434 2.434 0 0 0 20 7.386m-3.199-6.153c.345 0 .625.277.625.618 0 .34-.28.617-.625.617a.621.621 0 0 1-.624-.617c0-.341.28-.618.624-.618m-11.2 7.999c0-.683.56-1.236 1.25-1.236S8.1 8.55 8.1 9.232c0 .682-.56 1.235-1.25 1.235S5.6 9.914 5.6 9.232m7.23 4.082a4.939 4.939 0 0 1-5.748 0 .616.616 0 0 1 .08-1.104.63.63 0 0 1 .65.107 3.684 3.684 0 0 0 4.288 0 .63.63 0 0 1 .65-.107.616.616 0 0 1 .08 1.104m.237-2.851a1.253 1.253 0 0 1-1.124-.602 1.224 1.224 0 0 1 0-1.265c.235-.39.666-.62 1.124-.602a1.242 1.242 0 0 1 1.187 1.234c0 .658-.522 1.201-1.187 1.234v.001"></path></symbol><symbol viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" id="whatsapp"><title>WhatsApp</title><path
        d="M8.002 0a7.995 7.995 0 0 0-6.479 12.69l-1 2.973 3.075-.983A7.999 7.999 0 0 0 15.57 5.414 8 8 0 0 0 8.002 0m4.657 11.3a2.258 2.258 0 0 1-1.57 1.129c-.418.089-.963.16-2.8-.602a10.023 10.023 0 0 1-3.987-3.52 4.57 4.57 0 0 1-.954-2.413 2.554 2.554 0 0 1 .818-1.947c.227-.198.522-.3.822-.285.1 0 .189 0 .268.01.236.01.353.024.509.395.192.465.663 1.613.718 1.732.08.13.093.291.034.433a1.39 1.39 0 0 1-.26.367c-.118.136-.23.24-.348.386-.105.127-.23.263-.094.498a7.11 7.11 0 0 0 1.3 1.61 5.872 5.872 0 0 0 1.876 1.16.506.506 0 0 0 .564-.088c.224-.265.433-.541.628-.828a.447.447 0 0 1 .574-.174c.216.076 1.36.64 1.595.758.234.117.39.174.446.273.06.374.012.758-.139 1.106"></path></symbol><symbol viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg" id="facebook"><title>facebook</title><path
        d="M8.656.006H6.498A3.872 3.872 0 0 0 3.57 1.1a3.561 3.561 0 0 0-1.062 2.842v1.815H.339A.333.333 0 0 0 0 6.084v2.629c0 .18.152.326.34.326h2.168v6.635c0 .18.152.326.34.326h2.827c.188 0 .34-.146.34-.326V9.039H8.55c.187 0 .34-.146.34-.326v-2.63a.333.333 0 0 0-.34-.326H6.02V4.218c0-.74.184-1.114 1.186-1.114H8.66a.334.334 0 0 0 .339-.327V.332a.32.32 0 0 0-.1-.232.347.347 0 0 0-.243-.094"
        fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" id="twitter"><title>twitter</title><path d="m16.99,0h3.31l-7.23,8.26,8.5,11.24h-6.66l-5.21-6.82-5.97,6.82H.43l7.73-8.84L0,0h6.83l4.71,6.23L16.99,0Zm-1.16,17.52h1.83L5.83,1.88h-1.97l11.97,15.64Z"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="instagram"><path d="M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"></path><path d="M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"></path><circle cx="393.6" cy="118.4" r="17.056"></circle></symbol><symbol viewBox="0 0 23 5" xmlns="http://www.w3.org/2000/svg" id="more"><title>more</title><path
        d="M5 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m9 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m9 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg" id="notification"><title>notification</title><path
        d="M14.931 13.906l1.033 1.86a.277.277 0 0 1 .036.136c-.001.166-.151.3-.335.298h-5.359c-.147.922-.952 1.646-1.976 1.778-1.274.165-2.454-.63-2.637-1.778H.333a.362.362 0 0 1-.15-.032c-.164-.074-.23-.255-.148-.403l1.034-1.86c.39-.699.595-1.483.598-2.28V7.5c-.01-2.687 2.078-5.01 5-5.564V1.2c0-.663.596-1.2 1.332-1.2.736 0 1.334.537 1.334 1.2v.733c2.917.559 5.003 2.881 4.999 5.567v4.126c.003.798.21 1.581.6 2.28zM1.89 14.72h12.22l-.679-1.222a4.513 4.513 0 0 1-.572-2.187V7.773c.002-2.133-1.71-3.956-4.048-4.31a5.25 5.25 0 0 0-1.619 0c-2.343.348-4.059 2.173-4.05 4.31v3.537a4.518 4.518 0 0 1-.571 2.187l-.682 1.222z"></path></symbol><symbol viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" id="search"><title>search</title><path
        d="M11.84 10.723l6.164 5.882-1.39 1.438-6.338-5.945a6.718 6.718 0 0 1-3.604 1.04C2.987 13.137 0 10.195 0 6.567 0 2.942 2.987 0 6.672 0c3.685 0 6.673 2.94 6.673 6.569a6.48 6.48 0 0 1-1.504 4.154zm-5.147.363c2.551 0 4.62-2.036 4.62-4.548 0-2.511-2.069-4.547-4.62-4.547s-4.62 2.036-4.62 4.547c0 2.512 2.069 4.548 4.62 4.548z"
        fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 1024 1010" xmlns="http://www.w3.org/2000/svg" id="snapchat"><title>snapchat</title><g fill="none"><path d="M992.5 749.3c-4.2-13.9-24.3-23.7-24.3-23.7-1.9-1-3.6-1.9-5-2.6-33.5-16.2-63.2-35.7-88.2-57.8-20.1-17.8-37.3-37.4-51.1-58.2-16.9-25.4-24.8-46.6-28.2-58.1-1.9-7.5-1.6-10.5 0-14.4 1.3-3.3 5.2-6.4 7-7.9 11.3-8 29.5-19.8 40.7-27 9.7-6.3 18-11.7 22.9-15.1 15.7-11 26.5-22.2 32.8-34.3 8.2-15.6 9.2-32.8 2.8-49.7-8.6-22.8-29.9-36.4-57-36.4-6 0-12.2.7-18.4 2-15.5 3.4-30.2 8.9-42.5 13.7-.9.4-1.9-.3-1.8-1.3 1.3-30.5 2.8-71.5-.6-110.4-3-35.2-10.3-64.9-22.1-90.8-11.9-26-27.4-45.2-39.5-59.1-11.5-13.2-31.8-32.7-62.4-50.2-43-24.6-92-37.1-145.6-37.1-53.5 0-102.4 12.5-145.5 37.1-32.4 18.5-53.1 39.4-62.5 50.2-12.1 13.9-27.6 33.1-39.5 59.1-11.9 25.9-19.1 55.5-22.1 90.8-3.4 39.1-2 76.8-.6 110.4 0 1-.9 1.7-1.9 1.3-12.3-4.8-27-10.3-42.5-13.7-6.1-1.3-12.3-2-18.4-2-27 0-48.3 13.6-57 36.4-6.4 16.9-5.4 34.1 2.8 49.7 6.4 12.1 17.1 23.3 32.8 34.3 4.8 3.4 13.2 8.8 22.9 15.1 10.9 7.1 28.6 18.6 40 26.5 1.4 1 6.2 4.6 7.7 8.4 1.6 4 1.9 7-.2 15-3.5 11.6-11.4 32.6-28 57.5-13.8 20.9-31 40.4-51.1 58.2-25 22.1-54.7 41.6-88.2 57.8-1.6.8-3.5 1.7-5.5 2.9 0 0-20 10.2-23.8 23.4-5.6 19.5 9.3 37.8 24.4 47.6 24.8 16 55 24.6 72.5 29.3 4.9 1.3 9.3 2.5 13.3 3.7 2.5.8 8.8 3.2 11.5 6.7 3.4 4.4 3.8 9.8 5 15.9 1.9 10.3 6.2 23 18.9 31.8 14 9.6 31.7 10.3 54.2 11.2 23.5.9 52.7 2 86.2 13.1 15.5 5.1 29.6 13.8 45.8 23.8 34 20.9 76.3 46.9 148.5 46.9 72.3 0 114.9-26.1 149.1-47.1 16.2-9.9 30.1-18.5 45.3-23.5 33.5-11.1 62.7-12.2 86.2-13.1 22.5-.9 40.2-1.5 54.2-11.2 13.6-9.4 17.5-23.4 19.3-33.9 1-5.2 1.6-9.9 4.6-13.7 2.6-3.3 8.4-5.6 11.1-6.5 4.1-1.3 8.7-2.5 13.8-3.9 17.5-4.7 39.5-10.2 66.2-25.3 32.2-18.3 34.4-40.7 31-51.8z"
        fill="#FFF"></path><path d="M1020.3 738.5c-7.1-19.4-20.7-29.7-36.1-38.3-2.9-1.7-5.6-3.1-7.8-4.1-4.6-2.4-9.3-4.7-14-7.1-48.1-25.5-85.7-57.7-111.7-95.8-8.8-12.9-14.9-24.5-19.2-34-2.2-6.4-2.1-10-.5-13.3 1.2-2.5 4.4-5.1 6.2-6.4 8.3-5.5 16.8-11 22.6-14.7 10.3-6.7 18.5-12 23.7-15.6 19.8-13.8 33.6-28.5 42.2-44.9 12.2-23.1 13.7-49.5 4.3-74.3-13-34.4-45.6-55.8-85-55.8-8.2 0-16.5.9-24.7 2.7-2.2.5-4.3 1-6.4 1.5.4-23.4-.2-48.4-2.3-72.8-7.4-86-37.5-131.1-68.9-167-13.1-15-35.9-36.9-70.1-56.5C624.9 14.7 570.9.9 512 .9 453.3.9 399.3 14.7 351.6 42c-34.4 19.6-57.2 41.6-70.2 56.5-31.4 35.9-61.5 81-68.9 167-2.1 24.4-2.6 49.4-2.3 72.8-2.1-.5-4.3-1-6.4-1.5-8.2-1.8-16.6-2.7-24.7-2.7-39.4 0-72 21.4-85 55.8-9.4 24.8-7.9 51.2 4.3 74.3 8.6 16.4 22.5 31.1 42.2 44.9 5.3 3.7 13.4 9 23.7 15.6 5.6 3.6 13.7 8.9 21.7 14.2 1.2.8 5.5 4 7 7 1.7 3.4 1.7 7.1-.8 13.9-4.2 9.3-10.3 20.7-18.9 33.3-25.5 37.3-62 68.9-108.5 94.1-24.7 13.1-50.3 21.8-61.1 51.2-8.2 22.2-2.8 47.5 17.9 68.8C28.4 814.5 37 821 47.8 827c25.4 14 47 20.9 64 25.6 3 .9 9.9 3.1 12.9 5.8 7.6 6.6 6.5 16.6 16.6 31.2 6.1 9.1 13.1 15.3 18.9 19.3 21.1 14.6 44.9 15.5 70.1 16.5 22.7.9 48.5 1.9 77.9 11.6 12.2 4 24.9 11.8 39.5 20.8 35.2 21.7 83.5 51.3 164.2 51.3 80.8 0 129.3-29.8 164.8-51.5 14.6-8.9 27.2-16.7 39-20.6 29.4-9.7 55.2-10.7 77.9-11.6 25.2-1 48.9-1.9 70.1-16.5 6.6-4.6 15-12.1 21.6-23.5 7.2-12.3 7.1-21 13.9-26.9 2.8-2.4 8.9-4.5 12.2-5.5 17.1-4.7 39-11.6 64.9-25.9 11.5-6.3 20.4-13.2 27.5-21.1l.3-.3c19.3-21 24.2-45.5 16.2-67.2zM948.6 777c-43.8 24.2-72.9 21.6-95.5 36.1-19.2 12.4-7.9 39.1-21.8 48.7-17.2 11.9-67.9-.8-133.4 20.8-54 17.9-88.5 69.2-185.8 69.2-97.5 0-131-51.1-185.8-69.2-65.5-21.6-116.3-8.9-133.4-20.8-13.9-9.6-2.6-36.3-21.8-48.7-22.6-14.6-51.7-12-95.5-36.1-27.9-15.4-12.1-24.9-2.8-29.4 158.6-76.7 183.8-195.3 185-204.2 1.4-10.6 2.9-19-8.8-29.9-11.3-10.5-61.6-41.6-75.5-51.3-23.1-16.1-33.2-32.2-25.7-52 5.2-13.7 18-18.8 31.5-18.8 4.2 0 8.5.5 12.6 1.4 25.3 5.5 49.9 18.2 64.1 21.6 2 .5 3.7.7 5.2.7 7.6 0 10.2-3.8 9.7-12.5-1.6-27.7-5.6-81.7-1.2-132.2 6-69.4 28.4-103.8 55-134.3 12.8-14.6 72.8-78 187.5-78 115 0 174.7 63.4 187.5 78 26.6 30.4 49 64.8 55 134.3 4.4 50.5.6 104.5-1.2 132.2-.6 9.1 2.2 12.5 9.7 12.5 1.5 0 3.3-.2 5.2-.7 14.2-3.4 38.8-16.1 64.1-21.6 4.1-.9 8.4-1.4 12.6-1.4 13.5 0 26.3 5.2 31.5 18.8 7.5 19.8-2.7 35.9-25.7 52-13.9 9.7-64.2 40.8-75.5 51.3-11.7 10.8-10.2 19.2-8.8 29.9 1.1 8.9 26.4 127.5 185 204.2 9 4.5 24.9 14-3 29.4z"
        fill="#000"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="calendar"><path d="M452 40h-24V0h-40v40H124V0H84v40H60C26.916 40 0 66.916 0 100v352c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60V100c0-33.084-26.916-60-60-60zm20 412c0 11.028-8.972 20-20 20H60c-11.028 0-20-8.972-20-20V188h432v264zm0-304H40v-48c0-11.028 8.972-20 20-20h24v40h40V80h264v40h40V80h24c11.028 0 20 8.972 20 20v48z"></path><path d="M76 230h40v40H76zm80 0h40v40h-40zm80 0h40v40h-40zm80 0h40v40h-40zm80 0h40v40h-40zM76 310h40v40H76zm80 0h40v40h-40zm80 0h40v40h-40zm80 0h40v40h-40zM76 390h40v40H76zm80 0h40v40h-40zm80 0h40v40h-40zm80 0h40v40h-40zm80-80h40v40h-40z"></path></symbol><symbol id="vj_time" viewBox="0 0 32 32"><path d="M27.315 4.689c-3.021-3.021-7.038-4.685-11.311-4.685s-8.29 1.664-11.311 4.685c-2.988 2.988-4.648 6.951-4.683 11.172-0.006 0.043-0.010 0.086-0.010 0.131s0.004 0.087 0.010 0.129c0.031 4.227 1.691 8.197 4.684 11.189 3.021 3.021 7.038 4.685 11.311 4.685s8.29-1.664 11.311-4.685c3.021-3.021 4.685-7.038 4.685-11.311s-1.664-8.29-4.685-11.311zM26.622 25.309l-1.080-1.040c-0.373-0.359-0.967-0.348-1.326 0.025s-0.348 0.967 0.025 1.326l1.054 1.015c-2.339 2.049-5.249 3.253-8.352 3.455v-3.38c0-0.518-0.42-0.938-0.938-0.938s-0.938 0.42-0.938 0.938v3.38c-2.754-0.179-5.356-1.147-7.541-2.796l0.987-1.025c0.359-0.373 0.348-0.967-0.025-1.326s-0.967-0.348-1.326 0.025l-1.058 1.099c-0.028-0.027-0.056-0.054-0.084-0.082-2.447-2.447-3.884-5.633-4.105-9.055h3.372c0.518 0 0.938-0.42 0.938-0.938s-0.42-0.938-0.938-0.938h-3.371c0.192-2.924 1.273-5.676 3.113-7.94l1.085 1.045c0.182 0.175 0.416 0.262 0.65 0.262 0.246 0 0.492-0.096 0.675-0.287 0.359-0.373 0.348-0.967-0.025-1.326l-1.111-1.070c2.405-2.277 5.475-3.614 8.762-3.828v3.38c0 0.518 0.42 0.938 0.938 0.938s0.938-0.42 0.938-0.938v-3.38c3.282 0.214 6.348 1.547 8.751 3.817l-1.072 1.112c-0.359 0.373-0.348 0.967 0.025 1.326 0.182 0.175 0.416 0.262 0.65 0.262 0.246 0 0.491-0.096 0.675-0.287l0.999-1.038c1.845 2.266 2.929 5.021 3.122 7.95h-3.388c-0.518 0-0.938 0.42-0.938 0.938s0.42 0.938 0.938 0.938h3.389c-0.201 3.115-1.411 6.035-3.472 8.379zM21.967 19.617l-5.025-4.072v-6.854c0-0.518-0.42-0.938-0.938-0.938s-0.938 0.42-0.938 0.938v7.309c0 0.331 0.172 0.621 0.431 0.788l5.289 4.286c0.174 0.141 0.382 0.209 0.59 0.209 0.273 0 0.544-0.119 0.729-0.347 0.326-0.402 0.264-0.993-0.138-1.319z"></path></symbol><symbol id="vj_photos" viewBox="0 0 32 32"><path d="M29.5 6.357h-6.522l-1.396-2.791c-0.324-0.637-0.974-1.066-1.725-1.066h-7.715c-0.751 0-1.401 0.429-1.72 1.055l-0.005 0.011-1.396 2.791h-6.522c-0 0-0.001 0-0.001 0-1.065 0-1.927 0.863-1.927 1.928 0 0 0 0.001 0 0.001v-0 19.286c0 0 0 0.001 0 0.001 0 1.064 0.863 1.927 1.927 1.927 0 0 0.001 0 0.001 0h27c0 0 0.001 0 0.001 0 1.064 0 1.927-0.863 1.927-1.927 0-0 0-0.001 0-0.001v0-19.286c0-0 0-0.001 0-0.001 0-1.064-0.863-1.928-1.927-1.928-0 0-0.001 0-0.001 0h0zM27.571 25.643h-23.143v-15.429h5.786c0.751-0 1.401-0.429 1.72-1.055l0.005-0.011 1.396-2.791h5.33l1.396 2.791c0.324 0.637 0.974 1.066 1.725 1.066h5.786z"></path><path d="M16 13.107c-2.13 0-3.857 1.727-3.857 3.857s1.727 3.857 3.857 3.857c2.13 0 3.857-1.727 3.857-3.857v0c-0.003-2.129-1.728-3.854-3.857-3.857h-0z"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207 301" id="koo"><title>koo</title><path d="M205.85 173.4a65 65 0 00-8.41-26 41.94 41.94 0 00-4.23-6 1.56 1.56 0 00-.79-.49 1.52 1.52 0 00-.92.07 1.46 1.46 0 00-.7.6 1.49 1.49 0 00-.22.9 244.29 244.29 0 01-.05 38.73 148.73 148.73 0 01-2.67 17.82 1.35 1.35 0 000 .77c.079.25.224.475.42.65a1.5 1.5 0 00.69.34c.257.05.524.03.77-.06a25.94 25.94 0 009-5.16c5.75-5.07 8.11-12.53 7.11-22.17zM126.24 28.1a2.86 2.86 0 001.2 0 2.95 2.95 0 001.9-1.38 2.84 2.84 0 00.4-1.13c2.71-17.86-14.87-29.12-18.9-24.51-3.36 3.83 3.7 6.85 4.57 11.3-5.52-3-12.34-4.8-13.48-.61-1 3.88 4.12 5.94 8.83 8.16-3.71.2-8.13.4-10.29 3.77a3 3 0 00-.46 1.65 3 3 0 00.51 1.63 3 3 0 003.03 1.27l1.52-.22a72.56 72.56 0 0121.17.07zm57.77 105.19c-.06-.61-.12-1.22-.17-1.82-.42-4.27-.88-8.35-1.34-12.16-4.35-36.31-15.41-61.55-32.88-75-15-11.59-32.06-12.09-43.74-10.48-20.61 2.85-55.79 17.43-60 83-.3 4.72-.517 9.223-.65 13.51a.77.77 0 00.48.74c2.67 1.16 5.19 3.62 7.35 7.22 6.14 10.2 8.84 28.28 1.73 41.69-6.78 12.78-18.6 17.53-25 19.23h-.13a39.52 39.52 0 01-11.42 1.38h-4.36c-7.64 0-12.38.64-13.73 5.5-.64 2.3.69 8.72 7 17 5.09 6.71 14.69 16.34 31.48 24.18A124.89 124.89 0 0070.28 257l1.15 3.1c.37 1 .75 2.07 1.13 3.15 2.47 6.86 5.11 14.15 5.93 16.33.32.83 0 1.87-1.54 1.87h-9.16s-2.74 6.08 4.72 5.86c20.7-.62 18.45 15.95 25 12.82 6.27-3-5.67-12.85-5.49-12.82 23.85 3 16.23-5.88 16.23-5.88s-12.08.09-16.63 0a6.45 6.45 0 01-5.91-4.2l-4.79-13-1.13-3.07-1.13-3c6.756.77 13.55 1.15 20.35 1.14 7.16.03 14.309-.52 21.38-1.64.28.76.63 1.73 1 2.8.32.87.66 1.81 1 2.77 1.37 3.78 2.79 7.72 2.94 8.18.43 1.32.12 1.83-2.23 1.83h-8.86s-2.56 5.71 7.24 5.71c20 0 15.81 16.78 23.5 12.5 4.91-2.75-4.22-10.49-4.95-11.41-.41-.52-.07-1.26 1-1.1 20.41 3.12 15.4-5.7 15.4-5.7s-14.08.08-20.09.08a2.9 2.9 0 01-2.71-1.84c-.86-2.16-2.33-6.26-3.62-9.87l-1-2.73c-.39-1.08-.74-2-1-2.77a86.79 86.79 0 0011-3.44 65.88 65.88 0 0025.46-17.49c6.94-7.81 12.1-17.41 15.58-29 .18-.61.36-1.23.53-1.85l.51-1.86a135.49 135.49 0 003.68-21.82c1.4-15.31.7-31.3-.58-45.52-.11-.58-.17-1.21-.23-1.86l.05.02zm-78.96-30.89a4.54 4.54 0 01-2.81-.3 4.49 4.49 0 01-2.51-4.7 4.47 4.47 0 013.77-3.76 4.46 4.46 0 015 5.29 4.36 4.36 0 01-1.22 2.28 4.48 4.48 0 01-2.28 1.23l.05-.04zm36.19 14.7l-11.49 7.45a2.31 2.31 0 01-1.42.42c-.503.02-1-.128-1.41-.42l-11.52-7.45a1.84 1.84 0 01-.76-.8 1.93 1.93 0 01.25-2.1 2 2 0 01.92-.6l11.31-4.69a3.43 3.43 0 011.19-.21c.41-.001.815.07 1.2.21l11.3 4.69c.364.101.688.31.93.6.243.283.4.63.45 1a1.92 1.92 0 01-.19 1.08 1.83 1.83 0 01-.75.81l-.01.01zm11-14.71a4.47 4.47 0 113.51-3.51 4.49 4.49 0 01-3.5 3.51h-.01zm-132.9 92.42h.9a36.87 36.87 0 008-1.22l.65-.21a37 37 0 008.95-3.87 32 32 0 004.56-3.29 30.89 30.89 0 007.15-9c5.88-11.1 3.81-27-1.58-35.94a16.12 16.12 0 00-3-3.78c-1-.83-1.9-1.48-2.71-1.36a.88.88 0 00-.2.09 13.53 13.53 0 00-3 2.6 85.1 85.1 0 00-8.82 11.9 188.76 188.76 0 00-14.6 27.62c-2.57 6.16-3.55 9.95-3.88 12.22a3.43 3.43 0 00.6 2.5 3.5 3.5 0 002.16 1.39 24.24 24.24 0 004.81.35h.01z"></path></symbol><symbol id="whatsapp-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m256.1,0c141.1,0,255.9,114.8,255.9,256s-114.8,256-255.9,256c-52.1,0-100.4-15.5-140.8-42.3l-98.4,31.5,31.8-95.2C18,363.9,0,312,0,256,0,114.8,114.8,0,255.9,0h.2Zm-96.5,117.1c-9.8,0-20,2.9-26.2,9.2-7.5,7.7-26.2,25.6-26.2,62.3s26.8,72.3,30.4,77.2c3.8,5,52.2,81.4,127.5,112.6,58.8,24.4,76.3,22.1,89.7,19.3,19.6-4.2,44.1-18.7,50.2-36.1,6.2-17.5,6.2-32.4,4.4-35.5-1.8-3.2-6.8-5-14.3-8.7-3.8-1.9-15.2-7.5-26.4-12.9l-1.3-.6c-10.3-4.9-20.1-9.5-23.3-10.7-6.8-2.6-13.2-1.7-18.4,5.6-7.2,10.1-14.3,20.3-20,26.5-4.5,4.8-11.9,5.4-18,2.8-8.3-3.5-31.5-11.6-60-37-22.1-19.7-37.2-44.3-41.5-51.6-3.7-6.4-1.4-10.5,1.5-14.1l.3-.4c.3-.4.6-.7.9-1.1l.3-.4c3.8-4.7,7.4-8,11.1-12.4,3.8-4.4,5.9-6.6,8.3-11.7,2.6-5,.7-10.1-1.1-13.9-1.1-2.2-6.7-15.9-12.5-29.8l-.6-1.4c-3.8-9.2-7.6-18.3-10-24.1-5-11.9-8.7-12.3-16.3-12.6-2.5-.4-5.3-.5-8.5-.5Z"></path></symbol></svg><script type="text/javascript">
			window._rrCode = window._rrCode || [];_rrCode.push(function(){   
			 window._taboola = window._taboola || [];
            _taboola.push({article: 'auto'});
            _taboola.push({flush: true}); 
			 });   
    </script><script type="text/javascript">var google_conversion_id = 968076326;var google_custom_params = window.google_tag_params;var google_remarketing_only = true;</script><script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script><noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/968076326/?guid=ON&amp;script=0"/></div></noscript><div data-site="ndtv" data-type="bookflip"></div><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){loadJSFile('//cdn.ndtv.com/bookflip/bookflip.js')});</script><div id="ndtvnotify" style="display:none;"><div style="width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 189787356;background: rgba(0,0,0,.8);opacity: 2;filter: alpha(opacity=2);"></div><img style="position: fixed;left: 318px;z-index: 189787357;top: 126px;" src="https://alerts.ndtv.com/images/web.png" height="60" width="211" alt="Please Click on allow"/></div><script> var __pagedesign = '';</script><div id="___ndtvpushdiv"></div><script>  window._rrCode = window._rrCode || [];_rrCode.push(function(){loadJSFile('https://cdn.ndtv.com/static/js/main.js?ver-20240117.06');});</script><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){loadCSSFile('https://cdn.ndtv.com/static/web/css/btf.css?ver-20240117.06')});</script><script src="https://cdn.ndtv.com/static/js/common_script.js?ver-20240117.06"></script><!-- 
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" /><script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
        --><script src="https://cdn.ndtv.com/static/web/js/custom.js?ver-20240117.06"></script><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){
				var loc = "https://social.ndtv.com/static/Comment/Widget/?&key=68a2a311a51a713dad2e777d65ec4db4&link=https%3A%2F%2Fwww.ndtv.com%2Ffeature%2F14-year-old-suffers-third-degree-burns-after-removing-nail-polish-near-a-candle-in-us-4967596&title=14-Year-Old+Suffers+Third-Degree+Burns+After+Removing+Nail+Polish+Near+A+Candle+In+US&ctype=story-news&identifier=story-news-4967596&enableCommentsSubscription=1&ver=1&reply=1&sorted_by=newest&template=slide_new&nodomain=1";
				document.getElementById('ndtvSocialCommentFormRhs').setAttribute('src', loc);
				});
			</script><script>
				window._rrCode = window._rrCode || [];_rrCode.push(function(){
				const observer = lozad('.lozad,.lazyload', { 		
				threshold: 0.25,
				});
				observer.observe();
				});
			</script><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){loadJSFile('//platform.twitter.com/widgets.js')});</script><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){ $("#ins_storybody p:last").prepend('<span class="cmt_btnOut"><span class="cmt_btn"><a class="btn_bm cmt-ac cmt-dn" href="javascript:void(0);"><span class="ndtv-cmnt-cnt" style="display:none;"></span><span class="ndtv-cmnt-txt">Post a comment </span></a></span></span>');let len=$(".ins_storybody p:last").text().length,getHeight=$(".ins_storybody p:last").height(),chatHeight=$(".cmt_btnOut").height(),puHeight=getHeight-chatHeight+5;len>180&&$(".cmt_btnOut").css("margin-top",puHeight); $(".cmt-ac").click(function () {$("body").addClass("js-op-cmt");      setTimeout(function () {$('.nav-trigger').removeClass('js-nav-open');}, 3000); var pos = $(this).offset(); $(".drp-wrp").css({ top: pos.top + "px", right: 0 + "px" }); $(".cmt-cnt").fadeIn(0);  $(".ovl").fadeIn(0).addClass("js-ovl");}); });</script><script src="https://cdn.ndtv.com/static/web/js/swiper.min.js?vvvver-20240117.06"></script><script>window.addEventListener('message',function(event) { if((event.origin == 'https://social.ndtv.com' || event.origin == 'https://static.social.ndtv.com')) {if(event.data.sentinel == '_commentamp' && event.data.commentCount) { $('.ndtv-detailp-comments-count').html(event.data.commentCount+' Comments');$('.ndtv-cmnt-cnt').show();$('.ndtv-cmnt-cnt').html(event.data.commentCount); $('.ndtv-cmnt-txt').html('Comments');}}});</script><script type="text/javascript">var canRunAds = false;/*document.domain="ndtv.com";*/</script><script type="text/javascript"> var __pushSite = 'ndtv';var base_url = 'https://www.ndtv.com/';var ndtv_thumb_src = 'https://c.ndtvimg.com/2024-01/6fjg2kho_nail-polish-generic_625x300_31_January_24.jpeg';var ndtv_story_src = 'https://c.ndtvimg.com/2024-01/ns8tc6i8_nail-polish-generic_625x300_31_January_24.jpeg';var ndtv_story_medium_src = 'https://c.ndtvimg.com/2024-01/n1njffbo_nail-polish-generic_625x300_31_January_24.jpeg';var N = 0x29 + 0x921 + 0x3712;</script><script>  $(document).ready(function () { StartHeader(); })</script><script> $(document).ready(function(){if (canRunAds) { $('.taboola_rhs').css('margin-top', '0px');} else { $('.nbadd300_250').css('height', 'auto');}   $('.sticky_close a').click(function(){$(".sticky_footer").slideToggle();usernotstoped = 0;return false;});});</script><script>
					window._rrCode = window._rrCode || [];
					_rrCode.push(function(){
					(function (d, s, id) {
					 var js, sjs = d.getElementsByTagName(s)[0];
					 if (d.getElementById(id)) return;
					 js = d.createElement(s); js.id = id;
					 js.src = "https://sdk.snapkit.com/js/v1/create.js";
					 sjs.parentNode.insertBefore(js, sjs);
					 }(document, 'script', 'snapkit-creative-kit-sdk'));
					 });
		</script><div class="breaking_alert"  data-widpos="top" data-alert="ndtv" data-type="desktop"   ></div><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){loadJSFile('//www.gstatic.com/firebasejs/6.0.4/firebase-app.js')});</script><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){loadJSFile('//www.gstatic.com/firebasejs/6.0.4/firebase-firestore.js')});</script><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){loadJSFile('//edata.ndtv.com/js/breaking_pushalert_revised.js')});</script><script>
            //GEO code 
            function ajax_get(url, callback) {var xmlhttp = new XMLHttpRequest();xmlhttp.onreadystatechange = function() {if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {try {var data = JSON.parse(xmlhttp.responseText);} catch(err) {return;}callback(data);}};xmlhttp.open("GET", url, true);xmlhttp.send();}
            if(__usrCntry == '_NA_'){ajax_get('https://wapi.ndtv.com/geo.json', function(data) {if(data['country']){setCookie("__usrCntry", data['country'],'1','');}});}
            function gtmClickEventTracking(eventname,eventcategory,eventaction,eventlabel){dataLayer.push({'event': eventname,'eventCategory': eventcategory,'eventAction': eventaction,'eventLabel': eventlabel});}
        </script><!--corona stcky logo--><script>window._rrCode = window._rrCode || [];_rrCode.push(function(){ });</script></body></html>

