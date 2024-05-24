window["LaCommons"] =
/******/ (
/************************************************************************/
/******/ ([
/* 0 */
/***/ (,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(5).polyfill();
	__webpack_require__(6);
	__webpack_require__(7);

	var bean = __webpack_require__(8);
	var bonzo = __webpack_require__(9);
	var laCASinoUser = __webpack_require__(10);
	var laClientLogging = __webpack_require__(16);
	var laParty = __webpack_require__(22);
	var preact = __webpack_require__(24);
	var preact8 = __webpack_require__(25);
	var qwery = __webpack_require__(26);
	var whatwgFetch = __webpack_require__(18);
	var config = __webpack_require__(27);

	window.MfCore = __webpack_require__(28);

	module.exports = {
	  bean: bean,
	  bonzo: bonzo,
	  laParty: laParty,
	  laCASinoUser: laCASinoUser,
	  laClientLogging: laClientLogging,
	  preact: preact,
	  preact8: preact8,
	  qwery: qwery,
	  whatwgFetch: whatwgFetch,
	  config: config,
	};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */

	(this, (function () { 'use strict';

	
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = 
	} else {
	  _isArray = Array.isArray;
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;

	var asap = 

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}

	
	// web worker
	
	
	var queue = new Array(1000);
	
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	
	var PROMISE_ID = Math.random().toString(36).substring(16);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var GET_THEN_ERROR = new ErrorObject();

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	
	
	
	
	
	
	
	
	
	function ErrorObject() {
	  this.error = null;
	}

	var TRY_CATCH_ERROR = new ErrorObject();

	
	
	
	var id = 0;
	function nextId() {
	  return id++;
	}

	
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};

	Enumerator.prototype._enumerate = 

	Enumerator.prototype._eachEntry = 

	Enumerator.prototype._settledAt = 

	Enumerator.prototype._willSettleAt = 

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;

	Promise.prototype = {
	  constructor: Promise,

	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,

	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': 	};

	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;

	return Promise;

	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), (function() { return this; }())))

/***/ }),
/* 3 */
/***/ (,
/* 4 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/**
	 * Code refactored from Mozilla Developer Network:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 */

	'use strict';

	
	
	module.exports = {
	  assign: assign,
	  polyfill: polyfill
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license */

	window.matchMedia || (window.matchMedia = ));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. MIT license */
	());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bean - copyright (c) Jacob Thornton 2011-2012
	  * https://github.com/fat/bean
	  * MIT license
	  */
	(function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	})('bean', this, function (name, context) {
	  name    = name    || 'bean'
	  context = context || this

	  var win            = window
	    , old            = context[name]
	    , namespaceRegex = /[^\.]*(?=\..*)\.|.*/
	    , nameRegex      = /\..*/
	    , addEvent       = 'addEventListener'
	    , removeEvent    = 'removeEventListener'
	    , doc            = document || {}
	    , root           = doc.documentElement || {}
	    , W3C_MODEL      = root[addEvent]
	    , eventSupport   = W3C_MODEL ? addEvent : 'attachEvent'
	    , ONE            = {} // singleton for quick matching making add() do one()

	    , slice          = Array.prototype.slice
	    , str2arr        = 	    , isString       = function (o) { return typeof o == 'string' }
	    , isFunction     = 
	      // events that we consider to be 'native', anything not in this list will
	      // be treated as a custom event
	    , standardNativeEvents =
	        'click dblclick mouseup mousedown contextmenu '                  + // mouse buttons
	        'mousewheel mousemultiwheel DOMMouseScroll '                     + // mouse wheel
	        'mouseover mouseout mousemove selectstart selectend '            + // mouse movement
	        'keydown keypress keyup '                                        + // keyboard
	        'orientationchange '                                             + // mobile
	        'focus blur change reset select submit '                         + // form elements
	        'load unload beforeunload resize move DOMContentLoaded '         + // window
	        'readystatechange message '                                      + // window
	        'error abort scroll '                                              // misc
	      // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
	      // that doesn't actually exist, so make sure we only do these on newer browsers
	    , w3cNativeEvents =
	        'show '                                                          + // mouse buttons
	        'input invalid '                                                 + // form elements
	        'touchstart touchmove touchend touchcancel '                     + // touch
	        'gesturestart gesturechange gestureend '                         + // gesture
	        'textinput '                                                     + // TextEvent
	        'readystatechange pageshow pagehide popstate '                   + // window
	        'hashchange offline online '                                     + // window
	        'afterprint beforeprint '                                        + // printing
	        'dragstart dragenter dragover dragleave drag drop dragend '      + // dnd
	        'loadstart progress suspend emptied stalled loadmetadata '       + // media
	        'loadeddata canplay canplaythrough playing waiting seeking '     + // media
	        'seeked ended durationchange timeupdate play pause ratechange '  + // media
	        'volumechange cuechange '                                        + // media
	        'checking noupdate downloading cached updateready obsolete '       // appcache

	      // convert to a hash for quick lookups
	    , nativeEvents = ({}, str2arr(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : ''))))

	      // custom events are events that we *fake*, they are not provided natively but
	      // we can use native events to generate them
	    , customEvents = (function () {
	        var isAncestor = 'compareDocumentPosition' in root
	              ? function (element, container) {
	                  return container.compareDocumentPosition && (container.compareDocumentPosition(element) & 16) === 16
	                }
	              : 'contains' in root
	                ? function (element, container) {
	                    container = container.nodeType === 9 || container === window ? root : container
	                    return container !== element && container.contains(element)
	                  }
	                : 	          , check = function (event) {
	              var related = event.relatedTarget
	              return !related
	                ? related == null
	                : (related !== this && related.prefix !== 'xul' && !/document/.test(this.toString())
	                    && !isAncestor(related, this))
	            }

	        return {
	            mouseenter: { base: 'mouseover', condition: check }
	          , mouseleave: { base: 'mouseout', condition: check }
	          , mousewheel: { base: /Firefox/.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel' }
	        }
	      }())

	      // we provide a consistent Event object across browsers by taking the actual DOM
	      // event object and generating a new one from its properties.
	    , Event = (function () {
	            // a whitelist of properties (for different event types) tells us what to check for and copy
	        var commonProps  = str2arr('altKey attrChange attrName bubbles cancelable ctrlKey currentTarget ' +
	              'detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey '  +
	              'srcElement target timeStamp type view which propertyName')
	          , mouseProps   = commonProps.concat(str2arr('button buttons clientX clientY dataTransfer '      +
	              'fromElement offsetX offsetY pageX pageY screenX screenY toElement'))
	          , mouseWheelProps = mouseProps.concat(str2arr('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ ' +
	              'axis')) // 'axis' is FF specific
	          , keyProps     = commonProps.concat(str2arr('char charCode key keyCode keyIdentifier '          +
	              'keyLocation location'))
	          , textProps    = commonProps.concat(str2arr('data'))
	          , touchProps   = commonProps.concat(str2arr('touches targetTouches changedTouches scale rotation'))
	          , messageProps = commonProps.concat(str2arr('data origin source'))
	          , stateProps   = commonProps.concat(str2arr('state'))
	          , overOutRegex = /over|out/
	            // some event types need special handling and some need special properties, do that all here
	          , typeFixers   = [
	                { // key events
	                    reg: /key/i
	                  , fix: function (event, newEvent) {
	                      newEvent.keyCode = event.keyCode || event.which
	                      return keyProps
	                    }
	                }
	              , { // mouse events
	                    reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i
	                  , fix: function (event, newEvent, type) {
	                      newEvent.rightClick = event.which === 3 || event.button === 2
	                      newEvent.pos = { x: 0, y: 0 }
	                      if (event.pageX || event.pageY) {
	                        newEvent.clientX = event.pageX
	                        newEvent.clientY = event.pageY
	                      } else if (event.clientX || event.clientY) {
	                        newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft
	                        newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
	                      }
	                      if (overOutRegex.test(type)) {
	                        newEvent.relatedTarget = event.relatedTarget
	                          || event[(type == 'mouseover' ? 'from' : 'to') + 'Element']
	                      }
	                      return mouseProps
	                    }
	                }
	              , { // mouse wheel events
	                    reg: /mouse.*(wheel|scroll)/i
	                  , fix: function () { return mouseWheelProps }
	                }
	              , { // TextEvent
	                    reg: /^text/i
	                  , fix: function () { return textProps }
	                }
	              , { // touch and gesture events
	                    reg: /^touch|^gesture/i
	                  , fix: function () { return touchProps }
	                }
	              , { // message events
	                    reg: /^message$/i
	                  , fix: function () { return messageProps }
	                }
	              , { // popstate events
	                    reg: /^popstate$/i
	                  , fix: function () { return stateProps }
	                }
	              , { // everything else
	                    reg: /.*/
	                  , fix: function () { return commonProps }
	                }
	            ]
	          , typeFixerMap = {} // used to map event types to fixer functions (above), a basic cache mechanism

	          , Event = function (event, element, isNative) {
	              if (!arguments.length) return
	              event = event || ((element.ownerDocument || element.document || element).parentWindow || win).event
	              this.originalEvent = event
	              this.isNative       = isNative
	              this.isBean         = true

	              if (!event) return

	              var type   = event.type
	                , target = event.target || event.srcElement
	                , i, l, p, props, fixer

	              this.target = target && target.nodeType === 3 ? target.parentNode : target

	              if (isNative) { // we only need basic augmentation on custom events, the rest expensive & pointless
	                fixer = typeFixerMap[type]
	                if (!fixer) { // haven't encountered this event type before, map a fixer function for it
	                  for (i = 0, l = typeFixers.length; i < l; i++) {
	                    if (typeFixers[i].reg.test(type)) { // guaranteed to match at least one, last is .*
	                      typeFixerMap[type] = fixer = typeFixers[i].fix
	                      break
	                    }
	                  }
	                }

	                props = fixer(event, this, type)
	                for (i = props.length; i--;) {
	                  if (!((p = props[i]) in this) && p in event) this[p] = event[p]
	                }
	              }
	            }

	        // preventDefault() and stopPropagation() are a consistent interface to those functions
	        // on the DOM, stop() is an alias for both of them together
	        Event.prototype.preventDefault = function () {
	          if (this.originalEvent.preventDefault) this.originalEvent.preventDefault()
	          else this.originalEvent.returnValue = false
	        }
	        Event.prototype.stopPropagation = function () {
	          if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation()
	          else this.originalEvent.cancelBubble = true
	        }
	        Event.prototype.stop = 	        // stopImmediatePropagation() has to be handled internally because we manage the event list for
	        // each element
	        // note that originalElement may be a Bean#Event object in some situations
	        Event.prototype.stopImmediatePropagation = function () {
	          if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation()
	          this.isImmediatePropagationStopped = function () { return true }
	        }
	        Event.prototype.isImmediatePropagationStopped = 	        Event.prototype.clone = function (currentTarget) {
	          //TODO: this is ripe for optimisation, new events are *expensive*
	          // improving this will speed up delegated events
	          var ne = new Event(this, this.element, this.isNative)
	          ne.currentTarget = currentTarget
	          return ne
	        }

	        return Event
	      }())

	      // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
	    , targetElement = function (element, isNative) {
	        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
	      }

	      /**
	        * Bean maintains an internal registry for event listeners. We don't touch elements, objects
	        * or functions to identify them, instead we store everything in the registry.
	        * Each event listener has a RegEntry object, we have one 'registry' for the whole instance.
	        */
	    , RegEntry = (function () {
	        // each handler is wrapped so we can handle delegation and custom events
	        var wrappedHandler = function (element, fn, condition, args) {
	            var call = 	              , findTarget = 	              , handler = condition
	                  ? function (event) {
	                      var target = findTarget(event, this) // deleated event
	                      if (condition.apply(target, arguments)) {
	                        if (event) event.currentTarget = target
	                        return call(event, arguments)
	                      }
	                    }
	                  : function (event) {
	                      if (fn.__beanDel) event = event.clone(findTarget(event)) // delegated event, fix the fix
	                      return call(event, arguments)
	                    }
	            handler.__beanDel = fn.__beanDel
	            return handler
	          }

	        , RegEntry = function (element, type, handler, original, namespaces, args, root) {
	            var customType     = customEvents[type]
	              , isNative

	            if (type == 'unload') {
	              // self clean-up
	              handler = once(removeListener, element, type, handler, original)
	            }

	            if (customType) {
	              if (customType.condition) {
	                handler = wrappedHandler(element, handler, customType.condition, args)
	              }
	              type = customType.base || type
	            }

	            this.isNative      = isNative = nativeEvents[type] && !!element[eventSupport]
	            this.customType    = !W3C_MODEL && !isNative && type
	            this.element       = element
	            this.type          = type
	            this.original      = original
	            this.namespaces    = namespaces
	            this.eventType     = W3C_MODEL || isNative ? type : 'propertychange'
	            this.target        = targetElement(element, isNative)
	            this[eventSupport] = !!this.target[eventSupport]
	            this.root          = root
	            this.handler       = wrappedHandler(element, handler, null, args)
	          }

	        // given a list of namespaces, is our entry in any of them?
	        RegEntry.prototype.inNamespaces = function (checkNamespaces) {
	          var i, j, c = 0
	          if (!checkNamespaces) return true
	          if (!this.namespaces) return false
	          for (i = checkNamespaces.length; i--;) {
	            for (j = this.namespaces.length; j--;) {
	              if (checkNamespaces[i] == this.namespaces[j]) c++
	            }
	          }
	          return checkNamespaces.length === c
	        }

	        // match by element, original fn (opt), handler fn (opt)
	        RegEntry.prototype.matches = function (checkElement, checkOriginal, checkHandler) {
	          return this.element === checkElement &&
	            (!checkOriginal || this.original === checkOriginal) &&
	            (!checkHandler || this.handler === checkHandler)
	        }

	        return RegEntry
	      }())

	    , registry = (function () {
	        // our map stores arrays by event type, just because it's better than storing
	        // everything in a single array.
	        // uses '$' as a prefix for the keys for safety and 'r' as a special prefix for
	        // rootListeners so we can look them up fast
	        var map = {}

	          // generic functional search of our registry for matching listeners,
	          // `fn` returns false to break out of the loop
	          , forAll = function (element, type, original, handler, root, fn) {
	              var pfx = root ? 'r' : '$'
	              if (!type || type == '*') {
	                // search the whole registry
	                for (var t in map) {
	                  if (t.charAt(0) == pfx) {
	                    forAll(element, t.substr(1), original, handler, root, fn)
	                  }
	                }
	              } else {
	                var i = 0, l, list = map[pfx + type], all = element == '*'
	                if (!list) return
	                for (l = list.length; i < l; i++) {
	                  if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) return
	                }
	              }
	            }

	          , has = function (element, type, original, root) {
	              // we're not using forAll here simply because it's a bit slower and this
	              // needs to be fast
	              var i, list = map[(root ? 'r' : '$') + type]
	              if (list) {
	                for (i = list.length; i--;) {
	                  if (!list[i].root && list[i].matches(element, original, null)) return true
	                }
	              }
	              return false
	            }

	          , get = function (element, type, original, root) {
	              var entries = []
	              forAll(element, type, original, null, root, function (entry) {
	                return entries.push(entry)
	              })
	              return entries
	            }

	          , put = function (entry) {
	              var has = !entry.root && !this.has(entry.element, entry.type, null, false)
	                , key = (entry.root ? 'r' : '$') + entry.type
	              ;(map[key] || (map[key] = [])).push(entry)
	              return has
	            }

	          , del = function (entry) {
	              forAll(entry.element, entry.type, null, entry.handler, entry.root, function (entry, list, i) {
	                list.splice(i, 1)
	                entry.removed = true
	                if (list.length === 0) delete map[(entry.root ? 'r' : '$') + entry.type]
	                return false
	              })
	            }

	            // dump all entries, used for onunload
	          , entries = function () {
	              var t, entries = []
	              for (t in map) {
	                if (t.charAt(0) == '$') entries = entries.concat(map[t])
	              }
	              return entries
	            }

	        return { has: has, get: get, put: put, del: del, entries: entries }
	      }())

	      // we need a selector engine for delegated events, use querySelectorAll if it exists
	      // but for older browsers we need Qwery, Sizzle or similar
	    , selectorEngine
	    , setSelectorEngine = function (e) {
	        if (!arguments.length) {
	          selectorEngine = doc.querySelectorAll
	            ? 	            : 	        } else {
	          selectorEngine = e
	        }
	      }

	      // we attach this listener to each DOM event that we need to listen to, only once
	      // per event type per DOM element
	    , rootListener = function (event, type) {
	        if (!W3C_MODEL && type && event && event.propertyName != '_on' + type) return

	        var listeners = registry.get(this, type || event.type, null, false)
	          , l = listeners.length
	          , i = 0

	        event = new Event(event, this, true)
	        if (type) event.type = type

	        // iterate through all handlers registered for this type, calling them unless they have
	        // been removed by a previous handler or stopImmediatePropagation() has been called
	        for (; i < l && !event.isImmediatePropagationStopped(); i++) {
	          if (!listeners[i].removed) listeners[i].handler.call(this, event)
	        }
	      }

	      // add and remove listeners to DOM elements
	    , listener = W3C_MODEL
	        ? function (element, type, add) {
	            // new browsers
	            element[add ? addEvent : removeEvent](type, rootListener, false)
	          }
	        : function (element, type, add, custom) {
	            // IE8 and below, use attachEvent/detachEvent and we have to piggy-back propertychange events
	            // to simulate event bubbling etc.
	            var entry
	            if (add) {
	              registry.put(entry = new RegEntry(
	                  element
	                , custom || type
	                , function (event) { // handler
	                    rootListener.call(element, event, custom)
	                  }
	                , rootListener
	                , null
	                , null
	                , true // is root
	              ))
	              if (custom && element['_on' + custom] == null) element['_on' + custom] = 0
	              entry.target.attachEvent('on' + entry.eventType, entry.handler)
	            } else {
	              entry = registry.get(element, custom || type, rootListener, true)[0]
	              if (entry) {
	                entry.target.detachEvent('on' + entry.eventType, entry.handler)
	                registry.del(entry)
	              }
	            }
	          }

	    , once = function (rm, element, type, fn, originalFn) {
	        // wrap the handler in a handler that does a remove as well
	        return 	      }

	    , removeListener = function (element, orgType, handler, namespaces) {
	        var type     = orgType && orgType.replace(nameRegex, '')
	          , handlers = registry.get(element, type, null, false)
	          , removed  = {}
	          , i, l

	        for (i = 0, l = handlers.length; i < l; i++) {
	          if ((!handler || handlers[i].original === handler) && handlers[i].inNamespaces(namespaces)) {
	            // TODO: this is problematic, we have a registry.get() and registry.del() that
	            // both do registry searches so we waste cycles doing this. Needs to be rolled into
	            // a single registry.forAll(fn) that removes while finding, but the catch is that
	            // we'll be splicing the arrays that we're iterating over. Needs extra tests to
	            // make sure we don't screw it up. @rvagg
	            registry.del(handlers[i])
	            if (!removed[handlers[i].eventType] && handlers[i][eventSupport])
	              removed[handlers[i].eventType] = { t: handlers[i].eventType, c: handlers[i].type }
	          }
	        }
	        // check each type/element for removed listeners and remove the rootListener where it's no longer needed
	        for (i in removed) {
	          if (!registry.has(element, removed[i].t, null, false)) {
	            // last listener of this type, remove the rootListener
	            listener(element, removed[i].t, false, removed[i].c)
	          }
	        }
	      }

	      // set up a delegate helper using the given selector, wrap the handler function
	    , delegate = function (selector, fn) {
	        //TODO: findTarget (therefore $) is called twice, once for match and once for
	        // setting e.currentTarget, fix this so it's only needed once
	        var findTarget = function (target, root) {
	              var i, array = isString(selector) ? selectorEngine(selector, root) : selector
	              for (; target && target !== root; target = target.parentNode) {
	                for (i = array.length; i--;) {
	                  if (array[i] === target) return target
	                }
	              }
	            }
	          , handler = function (e) {
	              var match = findTarget(e.target, this)
	              if (match) fn.apply(match, arguments)
	            }

	        // __beanDel isn't pleasant but it's a private function, not exposed outside of Bean
	        handler.__beanDel = {
	            ft       : findTarget // attach it here for customEvents to use too
	          , selector : selector
	        }
	        return handler
	      }

	    , fireListener = W3C_MODEL ? function (isNative, type, element) {
	        // modern browsers, do a proper dispatchEvent()
	        var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents')
	        evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1)
	        element.dispatchEvent(evt)
	      } : function (isNative, type, element) {
	        // old browser use onpropertychange, just increment a custom property to trigger the event
	        element = targetElement(element, isNative)
	        isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++
	      }

	      /**
	        * Public API: off(), on(), add(), (remove()), one(), fire(), clone()
	        */

	      /**
	        * off(element[, eventType(s)[, handler ]])
	        */
	    , off = function (element, typeSpec, fn) {
	        var isTypeStr = isString(typeSpec)
	          , k, type, namespaces, i

	        if (isTypeStr && typeSpec.indexOf(' ') > 0) {
	          // off(el, 't1 t2 t3', fn) or off(el, 't1 t2 t3')
	          typeSpec = str2arr(typeSpec)
	          for (i = typeSpec.length; i--;)
	            off(element, typeSpec[i], fn)
	          return element
	        }

	        type = isTypeStr && typeSpec.replace(nameRegex, '')
	        if (type && customEvents[type]) type = customEvents[type].base

	        if (!typeSpec || isTypeStr) {
	          // off(el) or off(el, t1.ns) or off(el, .ns) or off(el, .ns1.ns2.ns3)
	          if (namespaces = isTypeStr && typeSpec.replace(namespaceRegex, '')) namespaces = str2arr(namespaces, '.')
	          removeListener(element, type, fn, namespaces)
	        } else if (isFunction(typeSpec)) {
	          // off(el, fn)
	          removeListener(element, null, typeSpec)
	        } else {
	          // off(el, { t1: fn1, t2, fn2 })
	          for (k in typeSpec) {
	            if (typeSpec.hasOwnProperty(k)) off(element, k, typeSpec[k])
	          }
	        }

	        return element
	      }

	      /**
	        * on(element, eventType(s)[, selector], handler[, args ])
	        */
	    , on = function(element, events, selector, fn) {
	        var originalFn, type, types, i, args, entry, first

	        //TODO: the undefined check means you can't pass an 'args' argument, fix this perhaps?
	        if (selector === undefined && typeof events == 'object') {
	          //TODO: this can't handle delegated events
	          for (type in events) {
	            if (events.hasOwnProperty(type)) {
	              on.call(this, element, type, events[type])
	            }
	          }
	          return
	        }

	        if (!isFunction(selector)) {
	          // delegated event
	          originalFn = fn
	          args       = slice.call(arguments, 4)
	          fn         = delegate(selector, originalFn, selectorEngine)
	        } else {
	          args       = slice.call(arguments, 3)
	          fn         = originalFn = selector
	        }

	        types = str2arr(events)

	        // special case for one(), wrap in a self-removing handler
	        if (this === ONE) {
	          fn = once(off, element, events, fn, originalFn)
	        }

	        for (i = types.length; i--;) {
	          // add new handler to the registry and check if it's the first for this element/type
	          first = registry.put(entry = new RegEntry(
	              element
	            , types[i].replace(nameRegex, '') // event type
	            , fn
	            , originalFn
	            , str2arr(types[i].replace(namespaceRegex, ''), '.') // namespaces
	            , args
	            , false // not root
	          ))
	          if (entry[eventSupport] && first) {
	            // first event of this type on this element, add root listener
	            listener(element, entry.eventType, true, entry.customType)
	          }
	        }

	        return element
	      }

	      /**
	        * add(element[, selector], eventType(s), handler[, args ])
	        *
	        * Deprecated: kept (for now) for backward-compatibility
	        */
	    , add = function (element, events, fn, delfn) {
	        return on.apply(
	            null
	          , !isString(fn)
	              ? slice.call(arguments)
	              : [ element, fn, events, delfn ].concat(arguments.length > 3 ? slice.call(arguments, 5) : [])
	        )
	      }

	      /**
	        * one(element, eventType(s)[, selector], handler[, args ])
	        */
	    , one = 
	      /**
	        * fire(element, eventType(s)[, args ])
	        *
	        * The optional 'args' argument must be an array, if no 'args' argument is provided
	        * then we can use the browser's DOM event system, otherwise we trigger handlers manually
	        */
	    , fire = function (element, type, args) {
	        var types = str2arr(type)
	          , i, j, l, names, handlers

	        for (i = types.length; i--;) {
	          type = types[i].replace(nameRegex, '')
	          if (names = types[i].replace(namespaceRegex, '')) names = str2arr(names, '.')
	          if (!names && !args && element[eventSupport]) {
	            fireListener(nativeEvents[type], type, element)
	          } else {
	            // non-native event, either because of a namespace, arguments or a non DOM element
	            // iterate over all listeners and manually 'fire'
	            handlers = registry.get(element, type, null, false)
	            args = [false].concat(args)
	            for (j = 0, l = handlers.length; j < l; j++) {
	              if (handlers[j].inNamespaces(names)) {
	                handlers[j].handler.apply(element, args)
	              }
	            }
	          }
	        }
	        return element
	      }

	      /**
	        * clone(dstElement, srcElement[, eventType ])
	        *
	        * TODO: perhaps for consistency we should allow the same flexibility in type specifiers?
	        */
	    , clone = function (element, from, type) {
	        var handlers = registry.get(from, type, null, false)
	          , l = handlers.length
	          , i = 0
	          , args, beanDel

	        for (; i < l; i++) {
	          if (handlers[i].original) {
	            args = [ element, handlers[i].type ]
	            if (beanDel = handlers[i].handler.__beanDel) args.push(beanDel.selector)
	            args.push(handlers[i].original)
	            on.apply(null, args)
	          }
	        }
	        return element
	      }

	    , bean = {
	          'on'                : on
	        , 'add'               : add
	        , 'one'               : one
	        , 'off'               : off
	        , 'remove'            : off
	        , 'clone'             : clone
	        , 'fire'              : fire
	        , 'Event'             : Event
	        , 'setSelectorEngine' : setSelectorEngine
	        , 'noConflict'        : 	      }

	  // for IE, clean up on unload to avoid leaks
	  if (win.attachEvent) {
	    var cleanup = function () {
	      var i, entries = registry.entries()
	      for (i in entries) {
	        if (entries[i].type && entries[i].type !== 'unload') off(entries[i].element, entries[i].type)
	      }
	      win.detachEvent('onunload', cleanup)
	      win.CollectGarbage && win.CollectGarbage()
	    }
	    win.attachEvent('onunload', cleanup)
	  }

	  // initialize selector engine to internal default (qSA or throw Error)
	  setSelectorEngine()

	  return bean
	});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bonzo: DOM Utility (c) Dustin Diaz 2012
	  * https://github.com/ded/bonzo
	  * License MIT
	  */
	(function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	})('bonzo', this, function() {
	  var win = window
	    , doc = win.document
	    , html = doc.documentElement
	    , parentNode = 'parentNode'
	    , specialAttributes = /^(checked|value|selected|disabled)$/i
	      // tags that we have trouble inserting *into*
	    , specialTags = /^(select|fieldset|table|tbody|tfoot|td|tr|colgroup)$/i
	    , simpleScriptTagRe = /\s*<script +src=['"]([^'"]+)['"]>/
	    , table = ['<table>', '</table>', 1]
	    , td = ['<table><tbody><tr>', '</tr></tbody></table>', 3]
	    , option = ['<select>', '</select>', 1]
	    , noscope = ['_', '', 0, 1]
	    , tagMap = { // tags that we have trouble *inserting*
	          thead: table, tbody: table, tfoot: table, colgroup: table, caption: table
	        , tr: ['<table><tbody>', '</tbody></table>', 2]
	        , th: td , td: td
	        , col: ['<table><colgroup>', '</colgroup></table>', 2]
	        , fieldset: ['<form>', '</form>', 1]
	        , legend: ['<form><fieldset>', '</fieldset></form>', 2]
	        , option: option, optgroup: option
	        , script: noscope, style: noscope, link: noscope, param: noscope, base: noscope
	      }
	    , stateAttributes = /^(checked|selected|disabled)$/
	    , hasClass, addClass, removeClass
	    , uidMap = {}
	    , uuids = 0
	    , digit = /^-?[\d\.]+$/
	    , dattr = /^data-(.+)$/
	    , px = 'px'
	    , setAttribute = 'setAttribute'
	    , getAttribute = 'getAttribute'
	    , features = function() {
	        var e = doc.createElement('p')
	        return {
	          transform: function () {
	            var props = ['transform', 'webkitTransform', 'MozTransform', 'OTransform', 'msTransform'], i
	            for (i = 0; i < props.length; i++) {
	              if (props[i] in e.style) return props[i]
	            }
	          }()
	        , classList: 'classList' in e
	        }
	      }()
	    , whitespaceRegex = /\s+/
	    , toString = String.prototype.toString
	    , unitless = { lineHeight: 1, zoom: 1, zIndex: 1, opacity: 1, boxFlex: 1, WebkitBoxFlex: 1, MozBoxFlex: 1 }
	    , query = doc.querySelectorAll && 

	  function getStyle(el, property) {
	    var value = null
	      , computed = doc.defaultView.getComputedStyle(el, '')
	    computed && (value = computed[property])
	    return el.style[property] || value
	  }


	  function isNode(node) {
	    return node && node.nodeName && (node.nodeType == 1 || node.nodeType == 11)
	  }


	  function normalize(node, host, clone) {
	    var i, l, ret
	    if (typeof node == 'string') return bonzo.create(node)
	    if (isNode(node)) node = [ node ]
	    if (clone) {
	      ret = [] // don't change original array
	      for (i = 0, l = node.length; i < l; i++) ret[i] = cloneNode(host, node[i])
	      return ret
	    }
	    return node
	  }

	  /**
	   * @param {string} c a class name to test
	   * @return {boolean}
	   */
	  

	  /**
	   * @param {Bonzo|Array} ar
	   * @param {function(Object, number, (Bonzo|Array))} fn
	   * @param {Object=} opt_scope
	   * @param {boolean=} opt_rev
	   * @return {Bonzo|Array}
	   */
	  function each(ar, fn, opt_scope, opt_rev) {
	    var ind, i = 0, l = ar.length
	    for (; i < l; i++) {
	      ind = opt_rev ? ar.length - i - 1 : i
	      fn.call(opt_scope || ar[ind], ar[ind], ind, ar)
	    }
	    return ar
	  }


	  /**
	   * @param {Bonzo|Array} ar
	   * @param {function(Object, number, (Bonzo|Array))} fn
	   * @param {Object=} opt_scope
	   * @return {Bonzo|Array}
	   */
	  function deepEach(ar, fn, opt_scope) {
	    for (var i = 0, l = ar.length; i < l; i++) {
	      if (isNode(ar[i])) {
	        deepEach(ar[i].childNodes, fn, opt_scope)
	        fn.call(opt_scope || ar[i], ar[i], i, ar)
	      }
	    }
	    return ar
	  }


	  /**
	   * @param {string} s
	   * @return {string}
	   */
	  

	  /**
	   * @param {string} s
	   * @return {string}
	   */
	  

	  /**
	   * @param {Element} el
	   * @return {*}
	   */
	  

	  /**
	   * removes the data associated with an element
	   * @param {Element} el
	   */
	  function clearData(el) {
	    var uid = el[getAttribute]('data-node-uid')
	    if (uid) delete uidMap[uid]
	  }


	  function dataValue(d) {
	    var f
	    try {
	      return (d === null || d === undefined) ? undefined :
	        d === 'true' ? true :
	          d === 'false' ? false :
	            d === 'null' ? null :
	              (f = parseFloat(d)) == d ? f : d;
	    } catch(e) {}
	    return undefined
	  }


	  /**
	   * @param {Bonzo|Array} ar
	   * @param {function(Object, number, (Bonzo|Array))} fn
	   * @param {Object=} opt_scope
	   * @return {boolean} whether `some`thing was found
	   */
	  function some(ar, fn, opt_scope) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (fn.call(opt_scope || null, ar[i], i, ar)) return true
	    return false
	  }


	  /**
	   * this could be a giant enum of CSS properties
	   * but in favor of file size sans-closure deadcode optimizations
	   * we're just asking for any ol string
	   * then it gets transformed into the appropriate style property for JS access
	   * @param {string} p
	   * @return {string}
	   */
	  function styleProperty(p) {
	      (p == 'transform' && (p = features.transform)) ||
	        (/^transform-?[Oo]rigin$/.test(p) && (p = features.transform + 'Origin'))
	      return p ? camelize(p) : null
	  }

	  // this insert method is intense
	  function insert(target, host, fn, rev) {
	    var i = 0, self = host || this, r = []
	      // target nodes could be a css selector if it's a string and a selector engine is present
	      // otherwise, just use target
	      , nodes = query && typeof target == 'string' && target.charAt(0) != '<' ? query(target) : target
	    // normalize each node in case it's still a string and we need to create nodes on the fly
	    each(normalize(nodes),  this, rev)
	    self.length = i
	    each(r,  null, !rev)
	    return self
	  }


	  /**
	   * sets an element to an explicit x/y position on the page
	   * @param {Element} el
	   * @param {?number} x
	   * @param {?number} y
	   */
	  function xy(el, x, y) {
	    var $el = bonzo(el)
	      , style = $el.css('position')
	      , offset = $el.offset()
	      , rel = 'relative'
	      , isRel = style == rel
	      , delta = [parseInt($el.css('left'), 10), parseInt($el.css('top'), 10)]

	    if (style == 'static') {
	      $el.css('position', rel)
	      style = rel
	    }

	    isNaN(delta[0]) && (delta[0] = isRel ? 0 : el.offsetLeft)
	    isNaN(delta[1]) && (delta[1] = isRel ? 0 : el.offsetTop)

	    x != null && (el.style.left = x - offset.left + delta[0] + px)
	    y != null && (el.style.top = y - offset.top + delta[1] + px)

	  }

	  // classList support for class management
	  // altho to be fair, the api sucks because it won't accept multiple classes at once
	  if (features.classList) {
	    hasClass = 	    addClass = function (el, c) {
	      el.classList.add(c)
	    }
	    removeClass = 	  }
	  else {
	    hasClass = 	    addClass = 	    removeClass = 	  }


	  /**
	   * this allows method calling for setting values
	   *
	   * @example
	   * bonzo(elements).css('color', function (el) {
	   *   return el.getAttribute('data-original-color')
	   * })
	   *
	   * @param {Element} el
	   * @param {function (Element)|string} v
	   * @return {string}
	   */
	  function setter(el, v) {
	    return typeof v == 'function' ? v.call(el, el) : v
	  }

	  function scroll(x, y, type) {
	    var el = this[0]
	    if (!el) return this
	    if (x == null && y == null) {
	      return (isBody(el) ? getWindowScroll() : { x: el.scrollLeft, y: el.scrollTop })[type]
	    }
	    if (isBody(el)) {
	      win.scrollTo(x, y)
	    } else {
	      x != null && (el.scrollLeft = x)
	      y != null && (el.scrollTop = y)
	    }
	    return this
	  }

	  /**
	   * @constructor
	   * @param {Array.<Element>|Element|Node|string} elements
	   */
	  function Bonzo(elements) {
	    this.length = 0
	    if (elements) {
	      elements = typeof elements !== 'string' &&
	        !elements.nodeType &&
	        typeof elements.length !== 'undefined' ?
	          elements :
	          [elements]
	      this.length = elements.length
	      for (var i = 0; i < elements.length; i++) this[i] = elements[i]
	    }
	  }

	  Bonzo.prototype = {

	      /**
	       * @param {number} index
	       * @return {Element|Node}
	       */
	      get: 
	      // itetators
	      /**
	       * @param {function(Element|Node)} fn
	       * @param {Object=} opt_scope
	       * @return {Bonzo}
	       */
	    , each: function (fn, opt_scope) {
	        return each(this, fn, opt_scope)
	      }

	      /**
	       * @param {Function} fn
	       * @param {Object=} opt_scope
	       * @return {Bonzo}
	       */
	    , deepEach: 

	      /**
	       * @param {Function} fn
	       * @param {Function=} opt_reject
	       * @return {Array}
	       */
	    , map: function (fn, opt_reject) {
	        var m = [], n, i
	        for (i = 0; i < this.length; i++) {
	          n = fn.call(this, this[i], i)
	          opt_reject ? (opt_reject(n) && m.push(n)) : m.push(n)
	        }
	        return m
	      }

	    // text and html inserters!

	    /**
	     * @param {string} h the HTML to insert
	     * @param {boolean=} opt_text whether to set or get text content
	     * @return {Bonzo|string}
	     */
	    , html: function (h, opt_text) {
	        var method = opt_text
	              ? 'textContent'
	              : 'innerHTML'
	          , that = this
	          , append = function (el, i) {
	              each(normalize(h, that, i), function (node) {
	                el.appendChild(node)
	              })
	            }
	          , updateElement = function (el, i) {
	              try {
	                if (opt_text || (typeof h == 'string' && !specialTags.test(el.tagName))) {
	                  return el[method] = h
	                }
	              } catch (e) {}
	              append(el, i)
	            }
	        return typeof h != 'undefined'
	          ? this.empty().each(updateElement)
	          : this[0] ? this[0][method] : ''
	      }

	      /**
	       * @param {string=} opt_text the text to set, otherwise this is a getter
	       * @return {Bonzo|string}
	       */
	    , text: 
	      // more related insertion methods

	      /**
	       * @param {Bonzo|string|Element|Array} node
	       * @return {Bonzo}
	       */
	    , append: 

	      /**
	       * @param {Bonzo|string|Element|Array} node
	       * @return {Bonzo}
	       */
	    , prepend: 

	      /**
	       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
	       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
	       * @return {Bonzo}
	       */
	    , appendTo: 

	      /**
	       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
	       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
	       * @return {Bonzo}
	       */
	    , prependTo: 

	      /**
	       * @param {Bonzo|string|Element|Array} node
	       * @return {Bonzo}
	       */
	    , before: 

	      /**
	       * @param {Bonzo|string|Element|Array} node
	       * @return {Bonzo}
	       */
	    , after: 

	      /**
	       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
	       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
	       * @return {Bonzo}
	       */
	    , insertBefore: 

	      /**
	       * @param {Bonzo|string|Element|Array} target the location for which you'll insert your new content
	       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
	       * @return {Bonzo}
	       */
	    , insertAfter: 

	      /**
	       * @param {Bonzo|string|Element|Array} node
	       * @return {Bonzo}
	       */
	    , replaceWith: 
	      /**
	       * @param {Object=} opt_host an optional host scope (primarily used when integrated with Ender)
	       * @return {Bonzo}
	       */
	    , clone: function (opt_host) {
	        var ret = [] // don't change original array
	          , l, i
	        for (i = 0, l = this.length; i < l; i++) ret[i] = cloneNode(opt_host || this, this[i])
	        return bonzo(ret)
	      }

	      // class management

	      /**
	       * @param {string} c
	       * @return {Bonzo}
	       */
	    , addClass: function (c) {
	        c = toString.call(c).split(whitespaceRegex)
	        return this.each(function (el) {
	          // we `each` here so you can do $el.addClass('foo bar')
	          each(c, function (c) {
	            if (c && !hasClass(el, setter(el, c)))
	              addClass(el, setter(el, c))
	          })
	        })
	      }


	      /**
	       * @param {string} c
	       * @return {Bonzo}
	       */
	    , removeClass: function (c) {
	        c = toString.call(c).split(whitespaceRegex)
	        return this.each(function (el) {
	          each(c, function (c) {
	            if (c && hasClass(el, setter(el, c)))
	              removeClass(el, setter(el, c))
	          })
	        })
	      }


	      /**
	       * @param {string} c
	       * @return {boolean}
	       */
	    , hasClass: function (c) {
	        c = toString.call(c).split(whitespaceRegex)
	        return some(this, 
	      }


	      /**
	       * @param {string} c classname to toggle
	       * @param {boolean=} opt_condition whether to add or remove the class straight away
	       * @return {Bonzo}
	       */
	    , toggleClass: function (c, opt_condition) {
	        c = toString.call(c).split(whitespaceRegex)
	        return this.each(function (el) {
	          each(c, function (c) {
	            if (c) {
	              typeof opt_condition !== 'undefined' ?
	                opt_condition ? !hasClass(el, c) && addClass(el, c) : removeClass(el, c) :
	                hasClass(el, c) ? removeClass(el, c) : addClass(el, c)
	            }
	          })
	        })
	      }

	      // display togglers

	      /**
	       * @param {string=} opt_type useful to set back to anything other than an empty string
	       * @return {Bonzo}
	       */
	    , show: function (opt_type) {
	        opt_type = typeof opt_type == 'string' ? opt_type : ''
	        return this.each(
	      }


	      /**
	       * @return {Bonzo}
	       */
	    , hide: 

	      /**
	       * @param {Function=} opt_callback
	       * @param {string=} opt_type
	       * @return {Bonzo}
	       */
	    , toggle: function (opt_callback, opt_type) {
	        opt_type = typeof opt_type == 'string' ? opt_type : '';
	        typeof opt_callback != 'function' && (opt_callback = null)
	        return this.each(function (el) {
	          el.style.display = (el.offsetWidth || el.offsetHeight) ? 'none' : opt_type;
	          opt_callback && opt_callback.call(el)
	        })
	      }


	      // DOM Walkers & getters

	      /**
	       * @return {Element|Node}
	       */
	    , first: 

	      /**
	       * @return {Element|Node}
	       */
	    , last: 

	      /**
	       * @return {Element|Node}
	       */
	    , next: function () {
	        return this.related('nextSibling')
	      }


	      /**
	       * @return {Element|Node}
	       */
	    , previous: 

	      /**
	       * @return {Element|Node}
	       */
	    , parent: 

	      /**
	       * @private
	       * @param {string} method the directional DOM method
	       * @return {Element|Node}
	       */
	    , related: function (method) {
	        return bonzo(this.map(
	          function (el) {
	            el = el[method]
	            while (el && el.nodeType !== 1) {
	              el = el[method]
	            }
	            return el || 0
	          },
	          	        ))
	      }


	      /**
	       * @return {Bonzo}
	       */
	    , focus: function () {
	        this.length && this[0].focus()
	        return this
	      }


	      /**
	       * @return {Bonzo}
	       */
	    , blur: function () {
	        this.length && this[0].blur()
	        return this
	      }

	      // style getter setter & related methods

	      /**
	       * @param {Object|string} o
	       * @param {string=} opt_v
	       * @return {Bonzo|string}
	       */
	    , css: function (o, opt_v) {
	        var p, iter = o
	        // is this a request for just getting a style?
	        if (opt_v === undefined && typeof o == 'string') {
	          // repurpose 'v'
	          opt_v = this[0]
	          if (!opt_v) return null
	          if (opt_v === doc || opt_v === win) {
	            p = (opt_v === doc) ? bonzo.doc() : bonzo.viewport()
	            return o == 'width' ? p.width : o == 'height' ? p.height : ''
	          }
	          return (o = styleProperty(o)) ? getStyle(opt_v, o) : null
	        }

	        if (typeof o == 'string') {
	          iter = {}
	          iter[o] = opt_v
	        }

	        function fn(el, p, v) {
	          for (var k in iter) {
	            if (iter.hasOwnProperty(k)) {
	              v = iter[k];
	              // change "5" to "5px" - unless you're line-height, which is allowed
	              (p = styleProperty(k)) && digit.test(v) && !(p in unitless) && (v += px)
	              try { el.style[p] = setter(el, v) } catch(e) {}
	            }
	          }
	        }
	        return this.each(fn)
	      }


	      /**
	       * @param {number=} opt_x
	       * @param {number=} opt_y
	       * @return {Bonzo|number}
	       */
	    , offset: function (opt_x, opt_y) {
	        if (opt_x && typeof opt_x == 'object' && (typeof opt_x.top == 'number' || typeof opt_x.left == 'number')) {
	          return this.each(
	        } else if (typeof opt_x == 'number' || typeof opt_y == 'number') {
	          return this.each(
	        }
	        if (!this[0]) return {
	            top: 0
	          , left: 0
	          , height: 0
	          , width: 0
	        }
	        var el = this[0]
	          , de = el.ownerDocument.documentElement
	          , bcr = el.getBoundingClientRect()
	          , scroll = getWindowScroll()
	          , width = el.offsetWidth
	          , height = el.offsetHeight
	          , top = bcr.top + scroll.y - Math.max(0, de && de.clientTop, doc.body.clientTop)
	          , left = bcr.left + scroll.x - Math.max(0, de && de.clientLeft, doc.body.clientLeft)

	        return {
	            top: top
	          , left: left
	          , height: height
	          , width: width
	        }
	      }


	      /**
	       * @return {number}
	       */
	    , dim: function () {
	        if (!this.length) return { height: 0, width: 0 }
	        var el = this[0]
	          , de = el.nodeType == 9 && el.documentElement // document
	          , orig = !de && !!el.style && !el.offsetWidth && !el.offsetHeight ?
	             // el isn't visible, can't be measured properly, so fix that
	             function (t) {
	               var s = {
	                   position: el.style.position || ''
	                 , visibility: el.style.visibility || ''
	                 , display: el.style.display || ''
	               }
	               t.first().css({
	                   position: 'absolute'
	                 , visibility: 'hidden'
	                 , display: 'block'
	               })
	               return s
	            }(this) : null
	          , width = de
	              ? Math.max(el.body.scrollWidth, el.body.offsetWidth, de.scrollWidth, de.offsetWidth, de.clientWidth)
	              : el.offsetWidth
	          , height = de
	              ? Math.max(el.body.scrollHeight, el.body.offsetHeight, de.scrollHeight, de.offsetHeight, de.clientHeight)
	              : el.offsetHeight

	        orig && this.first().css(orig)
	        return {
	            height: height
	          , width: width
	        }
	      }

	      // attributes are hard. go shopping

	      /**
	       * @param {string} k an attribute to get or set
	       * @param {string=} opt_v the value to set
	       * @return {Bonzo|string}
	       */
	    , attr: function (k, opt_v) {
	        var el = this[0]
	          , n

	        if (typeof k != 'string' && !(k instanceof String)) {
	          for (n in k) {
	            k.hasOwnProperty(n) && this.attr(n, k[n])
	          }
	          return this
	        }

	        return typeof opt_v == 'undefined' ?
	          !el ? null : specialAttributes.test(k) ?
	            stateAttributes.test(k) && typeof el[k] == 'string' ?
	              true : el[k] :  el[getAttribute](k) :
	          this.each(
	      }


	      /**
	       * @param {string} k
	       * @return {Bonzo}
	       */
	    , removeAttr: function (k) {
	        return this.each(function (el) {
	          stateAttributes.test(k) ? (el[k] = false) : el.removeAttribute(k)
	        })
	      }


	      /**
	       * @param {string=} opt_s
	       * @return {Bonzo|string}
	       */
	    , val: function (s) {
	        return (typeof s == 'string' || typeof s == 'number') ?
	          this.attr('value', s) :
	          this.length ? this[0].value : null
	      }

	      // use with care and knowledge. this data() method uses data attributes on the DOM nodes
	      // to do this differently costs a lot more code. c'est la vie
	      /**
	       * @param {string|Object=} opt_k the key for which to get or set data
	       * @param {Object=} opt_v
	       * @return {Bonzo|Object}
	       */
	    , data: function (opt_k, opt_v) {
	        var el = this[0], o, m
	        if (typeof opt_v === 'undefined') {
	          if (!el) return null
	          o = data(el)
	          if (typeof opt_k === 'undefined') {
	            each(el.attributes, 
	            return o
	          } else {
	            if (typeof o[opt_k] === 'undefined')
	              o[opt_k] = dataValue(this.attr('data-' + decamelize(opt_k)))
	            return o[opt_k]
	          }
	        } else {
	          return this.each(
	        }
	      }

	      // DOM detachment & related

	      /**
	       * @return {Bonzo}
	       */
	    , remove: function () {
	        this.deepEach(clearData)
	        return this.detach()
	      }


	      /**
	       * @return {Bonzo}
	       */
	    , empty: function () {
	        return this.each(function (el) {
	          deepEach(el.childNodes, clearData)

	          while (el.firstChild) {
	            el.removeChild(el.firstChild)
	          }
	        })
	      }


	      /**
	       * @return {Bonzo}
	       */
	    , detach: 
	      // who uses a mouse anyway? oh right.

	      /**
	       * @param {number} y
	       */
	    , scrollTop: 

	      /**
	       * @param {number} x
	       */
	    , scrollLeft: 
	  }


	  function cloneNode(host, el) {
	    var c = el.cloneNode(true)
	      , cloneElems
	      , elElems
	      , i

	    // check for existence of an event cloner
	    // preferably https://github.com/fat/bean
	    // otherwise Bonzo won't do this for you
	    if (host.$ && typeof host.cloneEvents == 'function') {
	      host.$(c).cloneEvents(el)

	      // clone events from every child node
	      cloneElems = host.$(c).find('*')
	      elElems = host.$(el).find('*')

	      for (i = 0; i < elElems.length; i++)
	        host.$(cloneElems[i]).cloneEvents(elElems[i])
	    }
	    return c
	  }

	  
	  
	  function createScriptFromHtml(html) {
	    var scriptEl = document.createElement('script')
	      , matches = html.match(simpleScriptTagRe)
	    scriptEl.src = matches[1]
	    return scriptEl
	  }

	  /**
	   * @param {Array.<Element>|Element|Node|string} els
	   * @return {Bonzo}
	   */
	  
	  bonzo.setQueryEngine = function (q) {
	    query = q;
	    delete bonzo.setQueryEngine
	  }

	  bonzo.aug = function (o, target) {
	    // for those standalone bonzo users. this love is for you.
	    for (var k in o) {
	      o.hasOwnProperty(k) && ((target || Bonzo.prototype)[k] = o[k])
	    }
	  }

	  bonzo.create = function (node) {
	    // hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
	    return typeof node == 'string' && node !== '' ?
	      function () {
	        if (simpleScriptTagRe.test(node)) return [createScriptFromHtml(node)]
	        var tag = node.match(/^\s*<([^\s>]+)/)
	          , el = doc.createElement('div')
	          , els = []
	          , p = tag ? tagMap[tag[1].toLowerCase()] : null
	          , dep = p ? p[2] + 1 : 1
	          , ns = p && p[3]
	          , pn = parentNode

	        el.innerHTML = p ? (p[0] + node + p[1]) : node
	        while (dep--) el = el.firstChild
	        // for IE NoScope, we may insert cruft at the begining just to get it to work
	        if (ns && el && el.nodeType !== 1) el = el.nextSibling
	        do {
	          if (!tag || el.nodeType == 1) {
	            els.push(el)
	          }
	        } while (el = el.nextSibling)
	        // IE < 9 gives us a parentNode which messes up insert() check for cloning
	        // `dep` > 1 can also cause problems with the insert() check (must do this last)
	        each(els, 
	        return els
	      }() : isNode(node) ? [node.cloneNode(true)] : []
	  }

	  bonzo.doc = 
	  bonzo.firstChild = function (el) {
	    for (var c = el.childNodes, i = 0, j = (c && c.length) || 0, e; i < j; i++) {
	      if (c[i].nodeType === 1) e = c[j = i]
	    }
	    return e
	  }

	  bonzo.viewport = 
	  bonzo.isAncestor = 'compareDocumentPosition' in html ?
	    :
	    
	  return bonzo
	}); // the only line we care about using a semi-colon. placed here for concatenation tools


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var UserService_1 = __webpack_require__(11);
	var StorageService_1 = __webpack_require__(13);
	var User_1 = __webpack_require__(14);
	exports.User = User_1.User;
	function getUser() {
	    return UserService_1.UserService.instance().getUser();
	}
	exports.getUser = getUser;
		exports.getUserProducts = getUserProducts;
	function isUserLoggedIn() {
	    return UserService_1.UserService.instance().isUserLoggedIn();
	}
	exports.isUserLoggedIn = isUserLoggedIn;
	function isUpdateForced() {
	    return UserService_1.UserService.instance().isUpdateForced();
	}
	exports.isUpdateForced = isUpdateForced;
	function isUserSessionExpired() {
	    return UserService_1.UserService.instance().isUserSessionExpired();
	}
	exports.isUserSessionExpired = isUserSessionExpired;
	function hasCookie(cookiename) {
	    return StorageService_1.StorageService.instance().hasCookie(cookiename);
	}
	exports.hasCookie = hasCookie;
		exports.getCookieValue = getCookieValue;
		exports.getFeatureLoggingState = getFeatureLoggingState;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Logger_1 = __webpack_require__(12);
	var User_1 = __webpack_require__(14);
	var StorageService_1 = __webpack_require__(13);
	var Base64_1 = __webpack_require__(15);
	var UserService = (function () {
	    function UserService() {
	        this.LOG = new Logger_1.Logger("UserService");
	        this.storageService = StorageService_1.StorageService.instance();
	        this.invalidData = false;
	        this.updateWindowBeforeExpiration = 1800 * 1000;
	    }
	    UserService.instance = 
	    UserService.prototype.isUserLoggedIn = function () {
	        var user = this.getUser();
	        return !(user === undefined);
	    };
	    UserService.prototype.hasInvalidSessionData = 
	    UserService.prototype.isUserSessionExpired = function () {
	        var user = this.getUser();
	        var isExpired = false;
	        if (user !== undefined) {
	            isExpired = this.needsSessionUpdateRespectingLocalClockdrift(user.getExpireDate());
	        }
	        return isExpired;
	    };
	    UserService.prototype.getUser = function () {
	        var rawData = this.storageService.getUserSessionData();
	        if (rawData !== undefined) {
	            this.user = this.parseUserFromRawData(rawData);
	        }
	        return this.user;
	    };
	    UserService.prototype.isUpdateForced = 
	    UserService.prototype.needsSessionUpdateRespectingLocalClockdrift = function (sessionExpireDate) {
	        var localClockDrift = this.storageService.getLocalClockDrift();
	        var nowFromServerPerspective = new Date().getTime() + localClockDrift;
	        var sessionExpireTime = sessionExpireDate.getTime();
	        return (nowFromServerPerspective - sessionExpireTime) > 0 - this.updateWindowBeforeExpiration;
	    };
	    UserService.prototype.parseUserFromRawData = function (data) {
	        try {
	            var urlsaveReplaced = data.replace("_", "/").replace("-", "+");
	            var decodedData = Base64_1.Base64.decode(urlsaveReplaced);
	            var userJson = this.extractPayloadJSON(decodedData);
	            return new User_1.User(userJson.id, userJson.fn, userJson.ln, new Date(userJson.exp), userJson.a, userJson.p, data);
	        }
	        catch (e) {
	            this.LOG.error("invalid/unparsable user session information value:", e);
	            this.invalidData = true;
	            return undefined;
	        }
	    };
	    UserService.prototype.extractPayloadJSON = 
	    return UserService;
	}());
	UserService.INSTANCE = new UserService();
	exports.UserService = UserService;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var StorageService_1 = __webpack_require__(13);
	var Logger = (function () {
	    function Logger(name) {
	        this.loggingPrefix = "[casino]";
	        this.storageService = StorageService_1.StorageService.instance();
	        this.name = name;
	        this.logLevel = process && process.pid ? "FATAL" : "DEBUG";
	        this.loggingEnabled = this.storageService.getFeatureLoggingState();
	        this.debug = this.isDebugEnabled() ?
	            console.log.bind(window.console, "[DEBUG]" + this.getLoggerName()) :
	            function () { return; };
	        this.error = this.isErrorEnabled() ?
	            console.error.bind(window.console, "[ERROR]" + this.getLoggerName()) :
	            
	    }
	    Logger.prototype.isDebugEnabled = 
	    Logger.prototype.isErrorEnabled = function () {
	        return (this.logLevel === "DEBUG" || this.logLevel === "ERROR") && this.loggingEnabled === "true";
	    };
	    Logger.prototype.getLoggerName = 
	    return Logger;
	}());
	exports.Logger = Logger;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	var StorageService = (function () {
	    function StorageService() {
	    }
	    StorageService.instance = function () {
	        return StorageService.INSTANCE;
	    };
	    StorageService.prototype.getUserSessionData = function () {
	        if (this.hasCookie(StorageService.SESSION_COOKIE_NAME)) {
	            return this.getCookieValue(StorageService.SESSION_COOKIE_NAME);
	        }
	        return undefined;
	    };
	    StorageService.prototype.getCookieValue = function (cookiename) {
	        var re = new RegExp("[; ]" + cookiename + "=([^\\s;]*)");
	        var sMatch = (" " + document.cookie).match(re);
	        if (cookiename && sMatch) {
	            return decodeURI(sMatch[1]);
	        }
	        return "";
	    };
	    StorageService.prototype.hasCookie = function (cookiename) {
	        return document.cookie.indexOf(cookiename + "=") !== -1;
	    };
	    StorageService.prototype.getLocalClockDrift = function () {
	        if (this.hasCookie(StorageService.CLOCKDRIFT_COOKIE_NAME)) {
	            return parseInt(this.getCookieValue(StorageService.CLOCKDRIFT_COOKIE_NAME), 10);
	        }
	        return 0;
	    };
	    StorageService.prototype.getFeatureLoggingState = 
	    StorageService.prototype.deleteCookie = 
	    StorageService.prototype.getAndResetReauthState = function () {
	        if (this.hasCookie(StorageService.REAUTH_COOKIE_NAME)) {
	            this.deleteCookie(StorageService.REAUTH_COOKIE_NAME);
	            return true;
	        }
	        return false;
	    };
	    return StorageService;
	}());
	StorageService.SESSION_COOKIE_NAME = "userdata";
	StorageService.CLOCKDRIFT_COOKIE_NAME = "lolacd";
	StorageService.REAUTH_COOKIE_NAME = "lolareauth";
	StorageService.FEATURE_LOGGING_COOKIE_NAME = "featureLogging";
	StorageService.INSTANCE = new StorageService();
	exports.StorageService = StorageService;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	var User = (function () {
	    	    User.prototype.getSsoId = function () {
	        return this.id;
	    };
	    User.prototype.getExpireDate = function () {
	        return this.exp;
	    };
	    User.prototype.getFirstName = function () {
	        return this.fn;
	    };
	    User.prototype.getLastName = function () {
	        return this.ln;
	    };
	    User.prototype.isActivated = function () {
	        return this.a;
	    };
	    User.prototype.getProducts = function () {
	        return this.p;
	    };
	    User.prototype.getToken = 
	    return User;
	}());
	exports.User = User;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	var Base64;
	(function (Base64) {
	    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	    function utf8Decode(utftext) {
	        var result = "";
	        var i = 0;
	        var c = 0;
	        var c2 = 0;
	        var c3 = 0;
	        while (i < utftext.length) {
	            c = utftext.charCodeAt(i);
	            if (c < 128) {
	                result += String.fromCharCode(c);
	                i++;
	            }
	            else if ((c > 191) && (c < 224)) {
	                c2 = utftext.charCodeAt(i + 1);
	                result += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
	                i += 2;
	            }
	            else {
	                c2 = utftext.charCodeAt(i + 1);
	                c3 = utftext.charCodeAt(i + 2);
	                result += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
	                i += 3;
	            }
	        }
	        return result;
	    }
	    function decode(input) {
	        var output = "";
	        var chr1;
	        var chr2;
	        var chr3;
	        var enc1;
	        var enc2;
	        var enc3;
	        var enc4;
	        var i = 0;
	        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	        while (i < input.length) {
	            enc1 = keyStr.indexOf(input.charAt(i++));
	            enc2 = keyStr.indexOf(input.charAt(i++));
	            enc3 = keyStr.indexOf(input.charAt(i++));
	            enc4 = keyStr.indexOf(input.charAt(i++));
	            chr1 = (enc1 << 2) | (enc2 >> 4);
	            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	            chr3 = ((enc3 & 3) << 6) | enc4;
	            output = output + String.fromCharCode(chr1);
	            if (enc3 !== 64) {
	                output = output + String.fromCharCode(chr2);
	            }
	            if (enc4 !== 64) {
	                output = output + String.fromCharCode(chr3);
	            }
	        }
	        return utf8Decode(output);
	    }
	    Base64.decode = decode;
	})(Base64 = exports.Base64 || (exports.Base64 = {}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ClientLogger_1 = __webpack_require__(17);
		exports.LoggerFactory = LoggerFactory;
	var ClientLogger_2 = __webpack_require__(17);
	exports.ILogLevel = ClientLogger_2.ILogLevel;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(18);
	var HttpLogger_1 = __webpack_require__(19);
	var LoggerMessageType_1 = __webpack_require__(20);
	var StorageService_1 = __webpack_require__(21);
	var ILogLevel;
	((ILogLevel = exports.ILogLevel || (exports.ILogLevel = {}));
	var ClientLogger = (function () {
	    function ClientLogger(projectName, config) {
	        var _this = this;
	        this.storageService = StorageService_1.StorageService.instance();
	        this.projectName = projectName;
	        this.logLevel =
	            process && process.pid
	                ? "TESTING"
	                : config && config.logLevel
	                    ? config.logLevel
	                    : ILogLevel.error;
	        this.loggingEnabled =
	            (config && config.forceLogConsole) ||
	                this.storageService.getFeatureLoggingState();
	        this.logAggregationEnabled =
	            (config && config.forceLogAggregation) ||
	                this.storageService.getLogAggregationState();
	        if (this.isInfoEnabled()) {
	            if (this.logAggregationEnabled) {
	                this.info = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    HttpLogger_1.HttpLogger.log(LoggerMessageType_1.LoggerMessageType.INFO, message, optionalParams, _this.projectName, _this.getPrefix());
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.log("[INFO]", _this.getPrefix(), message, data);
	                };
	            }
	            else {
	                this.info = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.log("[INFO]", _this.getPrefix(), message, data);
	                };
	            }
	        }
	        if (this.isDebugEnabled()) {
	            if (this.logAggregationEnabled) {
	                this.debug = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    HttpLogger_1.HttpLogger.log(LoggerMessageType_1.LoggerMessageType.DEBUG, message, optionalParams, _this.projectName, _this.getPrefix());
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.log("[DEBUG]", _this.getPrefix(), message, data);
	                };
	            }
	            else {
	                this.debug = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.log("[DEBUG]", _this.getPrefix(), message, data);
	                };
	            }
	        }
	        if (this.isWarningEnabled()) {
	            if (this.logAggregationEnabled) {
	                this.warning = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    HttpLogger_1.HttpLogger.log(LoggerMessageType_1.LoggerMessageType.WARN, message, optionalParams, _this.projectName, _this.getPrefix());
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.log("[WARNING]", _this.getPrefix(), message, data);
	                };
	            }
	            else if (this.loggingEnabled) {
	                this.warning = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.log("[WARNING]", _this.getPrefix(), message, data);
	                };
	            }
	        }
	        if (this.isErrorEnabled()) {
	            if (this.logAggregationEnabled) {
	                this.error = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    HttpLogger_1.HttpLogger.log(LoggerMessageType_1.LoggerMessageType.ERROR, message, optionalParams, _this.projectName, _this.getPrefix());
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.error("[ERROR]", _this.getPrefix(), message, data);
	                };
	            }
	            else if (this.loggingEnabled) {
	                this.error = function (message) {
	                    var optionalParams = [];
	                    for (var _i = 1; _i < arguments.length; _i++) {
	                        optionalParams[_i - 1] = arguments[_i];
	                    }
	                    var data = optionalParams.length ? optionalParams : "";
	                    console.error("[ERROR]", _this.getPrefix(), message, data);
	                };
	            }
	        }
	    }
	    ClientLogger.prototype.debug = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        return;
	    };
	    ClientLogger.prototype.warning = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        return;
	    };
	    ClientLogger.prototype.error = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        return;
	    };
	    ClientLogger.prototype.info = function (message) {
	        var optionalParams = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            optionalParams[_i - 1] = arguments[_i];
	        }
	        return;
	    };
	    ClientLogger.prototype.isInfoEnabled = function () {
	        return this.logLevel === ILogLevel.info && this.loggingEnabled;
	    };
	    ClientLogger.prototype.isDebugEnabled = 
	    ClientLogger.prototype.isWarningEnabled = 
	    ClientLogger.prototype.isErrorEnabled = 
	    ClientLogger.prototype.getPrefix = 
	    ClientLogger.prototype.getProjectPrefix = 
	    ClientLogger.prototype.getClassPrefix = function () {
	        var callFunction = "";
	        var error = new Error();
	        if (error.stack) {
	            var stack = error.stack.replace("Error\n", "");
	            var caller = stack.split("\n")[3];
	            var isThisClass = caller.indexOf(this.constructor.name) < 0;
	            if (isThisClass) {
	                var callerClassName = caller.trim().split(" ")[1];
	                if (callerClassName && callerClassName.length) {
	                    callFunction = "[" + callerClassName + "]";
	                }
	            }
	        }
	        return callFunction;
	    };
	    return ClientLogger;
	}());
	exports.ClientLogger = ClientLogger;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && ((),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]

	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }

	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }

	  
	  
	  // Build a destructive iterator for the value list
	  
	  
	  Headers.prototype.append = 
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = 
	  Headers.prototype.getAll = 
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = 
	  Headers.prototype.forEach = 
	  Headers.prototype.keys = 
	  Headers.prototype.values = 
	  Headers.prototype.entries = 
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  
	  
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }

	  
	  
	  
	  
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body

	    if (typeof input === 'string') {
	      this.url = input
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }

	  
	  
	  Body.call(Request.prototype)

	  
	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = 
	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = 
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = 	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var HttpLogger = (function () {
	    function HttpLogger() {
	    }
	    HttpLogger.log = function (type, msg, data, projectName, loggerName) {
	        var dataMessage = "";
	        if (data !== undefined) {
	            try {
	                dataMessage = JSON.stringify(data);
	            }
	            catch (e) {
	                dataMessage = e.toString();
	            }
	        }
	        var payload = {
	            event: {
	                client: HttpLogger.getClientInfo(),
	                data: dataMessage,
	                logger: loggerName,
	                message: msg,
	                severity: type,
	            },
	            source: projectName + "-frontend",
	            sourcetype: HttpLogger.sourceType,
	            time: (new Date()).getTime(),
	        };
	        var message = JSON.stringify(payload);
	        HttpLogger.sendLoggingEvent(message);
	    };
	    HttpLogger.getClientInfo = function () {
	        var nAgt = navigator.userAgent;
	        var browserName = navigator.appName;
	        var fullVersion = "" + parseFloat(navigator.appVersion);
	        var verOffset;
	        verOffset = nAgt.indexOf("OPR/");
	        if (verOffset != -1) {
	            browserName = "Opera";
	            fullVersion = nAgt.substring(verOffset + 4);
	        }
	        else if (nAgt.indexOf("Opera") != -1) {
	            browserName = "Opera";
	            fullVersion = nAgt.substring(nAgt.indexOf("Opera") + 6);
	            verOffset = nAgt.indexOf("Version");
	            if (verOffset != -1) {
	                fullVersion = nAgt.substring(verOffset + 8);
	            }
	        }
	        else if (nAgt.indexOf("MSIE") != -1) {
	            browserName = "Microsoft Internet Explorer";
	            fullVersion = nAgt.substring(nAgt.indexOf("MSIE") + 5);
	        }
	        else if (nAgt.indexOf("Chrome") != -1) {
	            browserName = "Chrome";
	            fullVersion = nAgt.substring(nAgt.indexOf("Chrome") + 7);
	        }
	        else if (nAgt.indexOf("Safari") != -1) {
	            browserName = "Safari";
	            fullVersion = nAgt.substring(nAgt.indexOf("Safari") + 7);
	            if (nAgt.indexOf("Version") != -1) {
	                fullVersion = nAgt.substring(nAgt.indexOf("Version") + 8);
	            }
	        }
	        else if (nAgt.indexOf("Firefox") != -1) {
	            browserName = "Firefox";
	            fullVersion = nAgt.substring(nAgt.indexOf("Firefox") + 8);
	        }
	        else {
	            browserName = navigator.appName;
	            fullVersion = nAgt.substring(nAgt.lastIndexOf(' ') + 2);
	        }
	        return {
	            browser: browserName,
	            platform: window.navigator.platform,
	            version: fullVersion,
	        };
	    };
	    HttpLogger.sendLoggingEvent = function (message) {
	        window.fetch(HttpLogger.logURL, {
	            body: message,
	            headers: {
	                "Content-Type": "application/json",
	                "X-Api-Key": HttpLogger.loggingApiKey,
	            },
	            method: "POST",
	        });
	    };
	    HttpLogger.loggingApiKey = "3XIscVAiDn5OkLadOg3YniH8GUGa7zR9wVDZTDIb";
	    HttpLogger.logURL = "https://wrm8t4l3ub.execute-api.eu-central-1.amazonaws.com/prod";
	    HttpLogger.sourceType = "application_log";
	    return HttpLogger;
	}());
	exports.HttpLogger = HttpLogger;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var LoggerMessageType;
	((LoggerMessageType = exports.LoggerMessageType || (exports.LoggerMessageType = {}));


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var StorageService = (function () {
	    function StorageService() {
	    }
	    StorageService.instance = function () {
	        return StorageService.INSTANCE;
	    };
	    StorageService.prototype.getCookieValue = function (cookiename) {
	        var re = new RegExp("[; ]" + cookiename + "=([^\\s;]*)");
	        var sMatch = (" " + document.cookie).match(re);
	        if (cookiename && sMatch) {
	            return unescape(sMatch[1]);
	        }
	        return "";
	    };
	    StorageService.prototype.getFeatureLoggingState = function () {
	        return this.getCookieValue(StorageService.FEATURE_LOGGING_COOKIE_NAME) === "true";
	    };
	    StorageService.prototype.getLogAggregationState = function () {
	        var featureToggle = window.LaCommons === undefined ?
	            undefined : window.LaCommons.config.feature.logAggregation;
	        var cookieValue = this.getCookieValue(StorageService.LOG_AGGREGATION_COOKIE_NAME) === "true";
	        return featureToggle || cookieValue;
	    };
	    StorageService.FEATURE_LOGGING_COOKIE_NAME = "featureLogging";
	    StorageService.LOG_AGGREGATION_COOKIE_NAME = "logAggregation";
	    StorageService.INSTANCE = new StorageService();
	    return StorageService;
	}());
	exports.StorageService = StorageService;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var eventemitter2_1 = __webpack_require__(23);
	var EventSystem = (function () {
	    function EventSystem() {
	    }
	    EventSystem.fireEvent = function (eventName) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        this.storeEvent.apply(this, [eventName].concat(args));
	        (_a = this.EMITTER).emit.apply(_a, [eventName].concat(args));
	        var _a;
	    };
	    EventSystem.registerEventListener = function (eventName, handler, options) {
	        if (options === void 0) { options = { replay: true, once: false }; }
	        var safeHandler = this.callSafety(handler);
	        if (options.once) {
	            this.EMITTER.once(eventName, safeHandler);
	        }
	        else {
	            this.EMITTER.on(eventName, safeHandler);
	        }
	        if (options.replay) {
	            this.replayEvents(eventName, safeHandler);
	        }
	    };
	    EventSystem.storeEvent = function (eventName) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var events = this.events[eventName];
	        if (!events) {
	            events = [];
	            this.events[eventName] = events;
	        }
	        // limit size of each bucket to prevent problems
	        if (events.length >= this.MAX_BUCKET_SIZE) {
	            events.shift();
	        }
	        events.push(args);
	    };
	    EventSystem.replayEvents = function (eventName, handler) {
	        var events = this.events[eventName];
	        if (!events) {
	            return;
	        }
	        events.forEach(function (args) { return handler.apply(void 0, args); });
	    };
	    EventSystem.callSafety = function (handler) {
	        var _this = this;
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            try {
	                handler.apply(_this, args);
	            }
	            catch (e) {
	                if (console && console.error) {
	                    console.error("error on executing handler:" + handler, e);
	                }
	            }
	        };
	    };
	    EventSystem.EMITTER = new eventemitter2_1.EventEmitter2();
	    EventSystem.MAX_BUCKET_SIZE = 100;
	    EventSystem.events = {};
	    return EventSystem;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EventSystem;
	//# sourceMappingURL=EventSystem.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	;!function(undefined) {

	  var isArray = Array.isArray ? Array.isArray : 
	  var defaultMaxListeners = 10;

	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }

	  function configure(conf) {
	    if (conf) {

	      this._conf = conf;

	      conf.delimiter && (this.delimiter = conf.delimiter);
	      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);

	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    }
	  }

	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }
	  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
	        typeLength = type.length, currentType = type[i], nextType = type[i+1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }

	    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
	          }
	        }
	        return listeners;
	      } else if(currentType === '**') {
	        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
	        if(endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }

	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if(branch === '*' || branch === '**') {
	              if(tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if(branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }

	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
	    }

	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i+1);
	    }

	    xxTree = tree['**'];
	    if(xxTree) {
	      if(i < typeLength) {
	        if(xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }

	        // Build arrays of matching next branches and others.
	        for(branch in xxTree) {
	          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if(branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i+2);
	            } else if(branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i+1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
	            }
	          }
	        }
	      } else if(xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if(xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }

	    return listeners;
	  }

	  function growListenerTree(type, listener) {

	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for(var i = 0, len = type.length; i+1 < len; i++) {
	      if(type[i] === '**' && type[i+1] === '**') {
	        return;
	      }
	    }

	    var tree = this.listenerTree;
	    var name = type.shift();

	    while (name) {

	      if (!tree[name]) {
	        tree[name] = {};
	      }

	      tree = tree[name];

	      if (type.length === 0) {

	        if (!tree._listeners) {
	          tree._listeners = listener;
	        }
	        else if(typeof tree._listeners === 'function') {
	          tree._listeners = [tree._listeners, listener];
	        }
	        else if (isArray(tree._listeners)) {

	          tree._listeners.push(listener);

	          if (!tree._listeners.warned) {

	            var m = defaultMaxListeners;

	            if (typeof this._events.maxListeners !== 'undefined') {
	              m = this._events.maxListeners;
	            }

	            if (m > 0 && tree._listeners.length > m) {

	              tree._listeners.warned = true;
	              console.error('(node) warning: possible EventEmitter memory ' +
	                            'leak detected. %d listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit.',
	                            tree._listeners.length);
	              if(console.trace){
	                console.trace();
	              }
	            }
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }

	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.

	  EventEmitter.prototype.delimiter = '.';

	  EventEmitter.prototype.setMaxListeners = function(n) {
	    this._events || init.call(this);
	    this._events.maxListeners = n;
	    if (!this._conf) this._conf = {};
	    this._conf.maxListeners = n;
	  };

	  EventEmitter.prototype.event = '';

	  EventEmitter.prototype.once = function(event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };

	  EventEmitter.prototype.many = function(event, ttl, fn) {
	    var self = this;

	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }

	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }

	    listener._origin = fn;

	    this.on(event, listener);

	    return self;
	  };

	  EventEmitter.prototype.emit = function() {

	    this._events || init.call(this);

	    var type = arguments[0];

	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) {
	        return false;
	      }
	    }

	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;

	    if (this._all && this._all.length) {
	      handler = this._all.slice();
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 1; j < al; j++) args[j] = arguments[j];
	      }

	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this, type);
	          break;
	        case 2:
	          handler[i].call(this, type, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, type, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	    }

	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	      if (typeof handler === 'function') {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler.call(this);
	          break;
	        case 2:
	          handler.call(this, arguments[1]);
	          break;
	        case 3:
	          handler.call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          args = new Array(al - 1);
	          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	          handler.apply(this, args);
	        }
	        return true;
	      } else if (handler) {
	        // need to make copy of handlers because list can change in the middle
	        // of emit call
	        handler = handler.slice();
	      }
	    }

	    if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this);
	          break;
	        case 2:
	          handler[i].call(this, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	      return true;
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        throw arguments[1]; // Unhandled 'error' event
	      } else {
	        throw new Error("Uncaught, unspecified 'error' event.");
	      }
	      return false;
	    }

	    return !!this._all;
	  };

	  EventEmitter.prototype.emitAsync = function() {

	    this._events || init.call(this);

	    var type = arguments[0];

	    if (type === 'newListener' && !this.newListener) {
	        if (!this._events.newListener) { return Promise.resolve([false]); }
	    }

	    var promises= [];

	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;

	    if (this._all) {
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 1; j < al; j++) args[j] = arguments[j];
	      }
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(this._all[i].call(this, type));
	          break;
	        case 2:
	          promises.push(this._all[i].call(this, type, arguments[1]));
	          break;
	        case 3:
	          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(this._all[i].apply(this, args));
	        }
	      }
	    }

	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	    }

	    if (typeof handler === 'function') {
	      this.event = type;
	      switch (al) {
	      case 1:
	        promises.push(handler.call(this));
	        break;
	      case 2:
	        promises.push(handler.call(this, arguments[1]));
	        break;
	      case 3:
	        promises.push(handler.call(this, arguments[1], arguments[2]));
	        break;
	      default:
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	        promises.push(handler.apply(this, args));
	      }
	    } else if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(handler[i].call(this));
	          break;
	        case 2:
	          promises.push(handler[i].call(this, arguments[1]));
	          break;
	        case 3:
	          promises.push(handler[i].call(this, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(handler[i].apply(this, args));
	        }
	      }
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        return Promise.reject(arguments[1]); // Unhandled 'error' event
	      } else {
	        return Promise.reject("Uncaught, unspecified 'error' event.");
	      }
	    }

	    return Promise.all(promises);
	  };

	  EventEmitter.prototype.on = function(type, listener) {

	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }

	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);

	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);

	    if(this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }

	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    }
	    else if(typeof this._events[type] === 'function') {
	      // Adding the second element, need to change to array.
	      this._events[type] = [this._events[type], listener];
	    }
	    else if (isArray(this._events[type])) {
	      // If we've already got an array, just append.
	      this._events[type].push(listener);

	      // Check for listener leak
	      if (!this._events[type].warned) {

	        var m = defaultMaxListeners;

	        if (typeof this._events.maxListeners !== 'undefined') {
	          m = this._events.maxListeners;
	        }

	        if (m > 0 && this._events[type].length > m) {

	          this._events[type].warned = true;
	          console.error('(node) warning: possible EventEmitter memory ' +
	                        'leak detected. %d listeners added. ' +
	                        'Use emitter.setMaxListeners() to increase limit.',
	                        this._events[type].length);
	          if(console.trace){
	            console.trace();
	          }
	        }
	      }
	    }
	    return this;
	  };

	  EventEmitter.prototype.onAny = function(fn) {

	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }

	    if(!this._all) {
	      this._all = [];
	    }

	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };

	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	  EventEmitter.prototype.off = function(type, listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }

	    var handlers,leafs=[];

	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    }
	    else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) return this;
	      handlers = this._events[type];
	      leafs.push({_listeners:handlers});
	    }

	    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {

	        var position = -1;

	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener ||
	            (handlers[i].listener && handlers[i].listener === listener) ||
	            (handlers[i]._origin && handlers[i]._origin === listener)) {
	            position = i;
	            break;
	          }
	        }

	        if (position < 0) {
	          continue;
	        }

	        if(this.wildcard) {
	          leaf._listeners.splice(position, 1);
	        }
	        else {
	          this._events[type].splice(position, 1);
	        }

	        if (handlers.length === 0) {
	          if(this.wildcard) {
	            delete leaf._listeners;
	          }
	          else {
	            delete this._events[type];
	          }
	        }

	        this.emit("removeListener", type, listener);

	        return this;
	      }
	      else if (handlers === listener ||
	        (handlers.listener && handlers.listener === listener) ||
	        (handlers._origin && handlers._origin === listener)) {
	        if(this.wildcard) {
	          delete leaf._listeners;
	        }
	        else {
	          delete this._events[type];
	        }

	        this.emit("removeListener", type, listener);
	      }
	    }

	    function recursivelyGarbageCollect(root) {
	      if (root === undefined) {
	        return;
	      }
	      var keys = Object.keys(root);
	      for (var i in keys) {
	        var key = keys[i];
	        var obj = root[key];
	        if ((obj instanceof Function) || (typeof obj !== "object"))
	          continue;
	        if (Object.keys(obj).length > 0) {
	          recursivelyGarbageCollect(root[key]);
	        }
	        if (Object.keys(obj).length === 0) {
	          delete root[key];
	        }
	      }
	    }
	    recursivelyGarbageCollect(this.listenerTree);

	    return this;
	  };

	  EventEmitter.prototype.offAny = function(fn) {
	    var i = 0, l = 0, fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++) {
	        if(fn === fns[i]) {
	          fns.splice(i, 1);
	          this.emit("removeListenerAny", fn);
	          return this;
	        }
	      }
	    } else {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++)
	        this.emit("removeListenerAny", fns[i]);
	      this._all = [];
	    }
	    return this;
	  };

	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

	  EventEmitter.prototype.removeAllListeners = function(type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }

	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

	      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    }
	    else {
	      if (!this._events || !this._events[type]) return this;
	      this._events[type] = null;
	    }
	    return this;
	  };

	  EventEmitter.prototype.listeners = function(type) {
	    if(this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }

	    this._events || init.call(this);

	    if (!this._events[type]) this._events[type] = [];
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };

	  EventEmitter.prototype.listenersAny = function() {

	    if(this._all) {
	      return this._all;
	    }
	    else {
	      return [];
	    }

	  };

	  if (true) {
	     // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // CommonJS
	    module.exports = EventEmitter;
	  }
	  else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	}();


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	!function(global, factory) {
	     true ? factory(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], factory) : factory(global.preact = global.preact || {});
	}(this, function(exports) {
	    function VNode(nodeName, attributes, children) {
	        this.nodeName = nodeName;
	        this.attributes = attributes;
	        this.children = children;
	        this.key = attributes && attributes.key;
	    }
	    function extend(obj, props) {
	        if (props) for (var i in props) if (void 0 !== props[i]) obj[i] = props[i];
	        return obj;
	    }
	    	    function delve(obj, key) {
	        for (var p = key.split('.'), i = 0; i < p.length && obj; i++) obj = obj[p[i]];
	        return obj;
	    }
	    	    function isFunction(obj) {
	        return 'function' == typeof obj;
	    }
	    function isString(obj) {
	        return 'string' == typeof obj;
	    }
	    	    function falsey(value) {
	        return value === !1 || empty(value);
	    }
	    function hashToClassName(c) {
	        var str = '';
	        for (var prop in c) if (c[prop]) {
	            if (str) str += ' ';
	            str += prop;
	        }
	        return str;
	    }
	    function h(nodeName, attributes, firstChild) {
	        var children, arr, lastSimple, len = arguments.length;
	        if (len > 2) {
	            var type = typeof firstChild;
	            if (3 === len && 'object' !== type && 'function' !== type) {
	                if (!falsey(firstChild)) children = [ String(firstChild) ];
	            } else {
	                children = [];
	                for (var i = 2; i < len; i++) {
	                    var _p = arguments[i];
	                    if (!falsey(_p)) {
	                        if (_p.join) arr = _p; else (arr = SHARED_TEMP_ARRAY)[0] = _p;
	                        for (var j = 0; j < arr.length; j++) {
	                            var child = arr[j], simple = !(falsey(child) || isFunction(child) || child instanceof VNode);
	                            if (simple && !isString(child)) child = String(child);
	                            if (simple && lastSimple) children[children.length - 1] += child; else if (!falsey(child)) {
	                                children.push(child);
	                                lastSimple = simple;
	                            }
	                        }
	                    } else ;
	                }
	            }
	        } else if (attributes && attributes.children) return h(nodeName, attributes, attributes.children);
	        if (attributes) {
	            if (attributes.children) delete attributes.children;
	            if (!isFunction(nodeName)) {
	                if ('className' in attributes) {
	                    attributes.class = attributes.className;
	                    delete attributes.className;
	                }
	                lastSimple = attributes.class;
	                if (lastSimple && !isString(lastSimple)) attributes.class = hashToClassName(lastSimple);
	            }
	        }
	        var p = new VNode(nodeName, attributes || void 0, children);
	        if (options.vnode) options.vnode(p);
	        return p;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(clone(vnode.attributes), props), arguments.length > 2 ? toArray(arguments, 2) : vnode.children);
	    }
	    function createLinkedState(component, key, eventPath) {
	        var path = key.split('.'), p0 = path[0];
	        return function(e) {
	            var _component$setState;
	            var v, i, t = e && e.currentTarget || this, s = component.state, obj = s;
	            if (isString(eventPath)) {
	                v = delve(e, eventPath);
	                if (empty(v) && (t = t._component)) v = delve(t, eventPath);
	            } else v = t.nodeName ? (t.nodeName + t.type).match(/^input(check|rad)/i) ? t.checked : t.value : e;
	            if (isFunction(v)) v = v.call(t);
	            if (path.length > 1) {
	                for (i = 0; i < path.length - 1; i++) obj = obj[path[i]] || (obj[path[i]] = {});
	                obj[path[i]] = v;
	                v = s[p0];
	            }
	            component.setState((_component$setState = {}, _component$setState[p0] = v, _component$setState));
	        };
	    }
	    function enqueueRender(component) {
	        if (1 === items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        if (items.length) {
	            var p, currentItems = items;
	            items = itemsOffline;
	            itemsOffline = currentItems;
	            while (p = currentItems.pop()) if (p._dirty) renderComponent(p);
	        }
	    }
	    function isFunctionalComponent(vnode) {
	        var nodeName = vnode && vnode.nodeName;
	        return nodeName && isFunction(nodeName) && !(nodeName.prototype && nodeName.prototype.render);
	    }
	    function buildFunctionalComponent(vnode, context) {
	        return vnode.nodeName(getNodeProps(vnode), context || EMPTY);
	    }
	    function ensureNodeData(node, data) {
	        return node[ATTR_KEY] || (node[ATTR_KEY] = data || {});
	    }
	    function getNodeType(node) {
	        if (node instanceof Text) return 3;
	        if (node instanceof Element) return 1; else return 0;
	    }
	    function removeNode(node) {
	        var p = node.parentNode;
	        if (p) p.removeChild(node);
	    }
	    function setAccessor(node, name, value, old, isSvg) {
	        ensureNodeData(node)[name] = value;
	        if ('key' !== name && 'children' !== name && 'innerHTML' !== name) if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || isString(value) || isString(old)) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if (!isString(old)) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !NON_DIMENSION_PROPS[i] ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html;
	        } else if (name.match(/^on/i)) {
	            var l = node._listeners || (node._listeners = {});
	            name = toLowerCase(name.substring(2));
	            if (value) {
	                if (!l[name]) node.addEventListener(name, eventProxy);
	            } else if (l[name]) node.removeEventListener(name, eventProxy);
	            l[name] = value;
	        } else if ('type' !== name && !isSvg && name in node) {
	            setProperty(node, name, empty(value) ? '' : value);
	            if (falsey(value)) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name.match(/^xlink\:?(.+)/);
	            if (falsey(value)) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1])); else node.removeAttribute(name); else if ('object' != typeof value && !isFunction(value)) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', toLowerCase(ns[1]), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this._listeners[e.type](options.event && options.event(e) || e);
	    }
	    function getRawNodeAttributes(node) {
	        var attrs = {};
	        for (var i = node.attributes.length; i--; ) attrs[node.attributes[i].name] = node.attributes[i].value;
	        return attrs;
	    }
	    function isSameNodeType(node, vnode) {
	        if (isString(vnode)) return 3 === getNodeType(node);
	        if (isString(vnode.nodeName)) return isNamedNode(node, vnode.nodeName);
	        if (isFunction(vnode.nodeName)) return node._componentConstructor === vnode.nodeName || isFunctionalComponent(vnode); else ;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.normalizedNodeName === nodeName || toLowerCase(node.nodeName) === toLowerCase(nodeName);
	    }
	    function getNodeProps(vnode) {
	        var defaultProps = vnode.nodeName.defaultProps, props = clone(defaultProps || vnode.attributes);
	        if (defaultProps) extend(props, vnode.attributes);
	        if (vnode.children) props.children = vnode.children;
	        return props;
	    }
	    function collectNode(node) {
	        cleanNode(node);
	        var name = toLowerCase(node.nodeName), list = nodes[name];
	        if (list) list.push(node); else nodes[name] = [ node ];
	    }
	    function createNode(nodeName, isSvg) {
	        var name = toLowerCase(nodeName), node = nodes[name] && nodes[name].pop() || (isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName));
	        ensureNodeData(node);
	        node.normalizedNodeName = name;
	        return node;
	    }
	    function cleanNode(node) {
	        removeNode(node);
	        if (1 === getNodeType(node)) {
	            ensureNodeData(node, getRawNodeAttributes(node));
	            node._component = node._componentConstructor = null;
	        }
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) if (c.componentDidMount) c.componentDidMount();
	    }
	    function diff(dom, vnode, context, mountAll, parent, rootComponent, nextSibling) {
	        diffLevel++;
	        var ret = idiff(dom, vnode, context, mountAll, rootComponent);
	        if (parent && ret.parentNode !== parent) parent.insertBefore(ret, nextSibling || null);
	        if (!--diffLevel) flushMounts();
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll, rootComponent) {
	        var originalAttributes = vnode && vnode.attributes;
	        while (isFunctionalComponent(vnode)) vnode = buildFunctionalComponent(vnode, context);
	        if (empty(vnode)) {
	            vnode = '';
	            if (rootComponent) {
	                if (dom) {
	                    if (8 === dom.nodeType) return dom;
	                    collectNode(dom);
	                }
	                return document.createComment(vnode);
	            }
	        }
	        if (isString(vnode)) {
	            if (dom) {
	                if (3 === getNodeType(dom) && dom.parentNode) {
	                    dom.nodeValue = vnode;
	                    return dom;
	                }
	                collectNode(dom);
	            }
	            return document.createTextNode(vnode);
	        }
	        var svgMode, out = dom, nodeName = vnode.nodeName;
	        if (isFunction(nodeName)) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        if (!isString(nodeName)) nodeName = String(nodeName);
	        svgMode = 'svg' === toLowerCase(nodeName);
	        if (svgMode) isSvgMode = !0;
	        if (!dom) out = createNode(nodeName, isSvgMode); else if (!isNamedNode(dom, nodeName)) {
	            out = createNode(nodeName, isSvgMode);
	            while (dom.firstChild) out.appendChild(dom.firstChild);
	            recollectNodeTree(dom);
	        }
	        if (vnode.children && 1 === vnode.children.length && 'string' == typeof vnode.children[0] && 1 === out.childNodes.length && out.firstChild instanceof Text) out.firstChild.nodeValue = vnode.children[0]; else if (vnode.children || out.firstChild) innerDiffNode(out, vnode.children, context, mountAll);
	        diffAttributes(out, vnode.attributes);
	        if (originalAttributes && originalAttributes.ref) (out[ATTR_KEY].ref = originalAttributes.ref)(out);
	        if (svgMode) isSvgMode = !1;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren && vchildren.length;
	        if (len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], key = vlen ? (c = _child._component) ? c.__key : (c = _child[ATTR_KEY]) ? c.key : null : null;
	            if (key || 0 === key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else children[childrenLen++] = _child;
	        }
	        if (vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            if (keyedLen && vchild.attributes) {
	                var key = vchild.key;
	                if (!empty(key) && key in keyed) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            }
	            if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) {
	                c = children[j];
	                if (c && isSameNodeType(c, vchild)) {
	                    child = c;
	                    children[j] = void 0;
	                    if (j === childrenLen - 1) childrenLen--;
	                    if (j === min) min++;
	                    break;
	                }
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child !== originalChildren[i]) dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (keyed[i]) children[min = childrenLen++] = keyed[i];
	        if (min < childrenLen) removeOrphanedChildren(children);
	    }
	    function removeOrphanedChildren(children, unmountOnly) {
	        for (var i = children.length; i--; ) {
	            var child = children[i];
	            if (child) recollectNodeTree(child, unmountOnly);
	        }
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component, !unmountOnly); else {
	            if (node[ATTR_KEY] && node[ATTR_KEY].ref) node[ATTR_KEY].ref(null);
	            if (!unmountOnly) collectNode(node);
	            if (node.childNodes && node.childNodes.length) removeOrphanedChildren(node.childNodes, unmountOnly);
	        }
	    }
	    function diffAttributes(dom, attrs) {
	        var old = dom[ATTR_KEY] || getRawNodeAttributes(dom);
	        for (var _name in old) if (!(attrs && _name in attrs)) setAccessor(dom, _name, null, old[_name], isSvgMode);
	        if (attrs) for (var _name2 in attrs) if (!(_name2 in old) || attrs[_name2] != old[_name2] || ('value' === _name2 || 'checked' === _name2) && attrs[_name2] != dom[_name2]) setAccessor(dom, _name2, attrs[_name2], old[_name2], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name, list = components[name];
	        if (list) list.push(component); else components[name] = [ component ];
	    }
	    function createComponent(Ctor, props, context) {
	        var inst = new Ctor(props, context), list = components[Ctor.name];
	        inst.props = props;
	        inst.context = context;
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.nextBase = list[i].nextBase;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function triggerComponentRender(component) {
	        if (!component._dirty) {
	            component._dirty = !0;
	            enqueueRender(component);
	        }
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        var b = component.base;
	        if (!component._disableRendering) {
	            component._disableRendering = !0;
	            if (component.__ref = props.ref) delete props.ref;
	            if (component.__key = props.key) delete props.key;
	            if (empty(b) || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.prevContext) component.prevContext = component.context;
	                component.context = context;
	            }
	            if (!component.prevProps) component.prevProps = component.props;
	            component.props = props;
	            component._disableRendering = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !b) renderComponent(component, 1, mountAll); else triggerComponentRender(component);
	            if (component.__ref) component.__ref(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll) {
	        if (!component._disableRendering) {
	            var skip, rendered, props = component.props, state = component.state, context = component.context, previousProps = component.prevProps || props, previousState = component.prevState || state, previousContext = component.prevContext || context, isUpdate = component.base, initialBase = isUpdate || component.nextBase, baseParent = initialBase && initialBase.parentNode, initialComponent = initialBase && initialBase._component, initialChildComponent = component._component;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	            component._dirty = !1;
	            if (!skip) {
	                if (component.render) rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(clone(context), component.getChildContext());
	                while (isFunctionalComponent(rendered)) rendered = buildFunctionalComponent(rendered, context);
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if (isFunction(childComponent) && childComponent.prototype.render) {
	                    var inst = initialChildComponent, childProps = getNodeProps(rendered);
	                    if (inst && inst.constructor === childComponent) setComponentProps(inst, childProps, 1, context); else {
	                        toUnmount = inst;
	                        inst = createComponent(childComponent, childProps, context);
	                        inst._parentComponent = component;
	                        component._component = inst;
	                        setComponentProps(inst, childProps, 0, context);
	                        renderComponent(inst, 1);
	                    }
	                    base = inst.base;
	                } else {
	                    var cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, baseParent, !0, initialBase && initialBase.nextSibling);
	                    }
	                }
	                if (initialBase && base !== initialBase) if (!toUnmount && initialComponent === component && !initialChildComponent && initialBase.parentNode) {
	                    initialBase._component = null;
	                    recollectNodeTree(initialBase);
	                }
	                if (toUnmount) unmountComponent(toUnmount, !0);
	                component.base = base;
	                if (base) {
	                    var componentRef = component, t = component;
	                    while (t = t._parentComponent) componentRef = t;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) {
	                mounts.unshift(component);
	                if (!diffLevel) flushMounts();
	            } else if (!skip && component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	            var fn, cb = component._renderCallbacks;
	            if (cb) while (fn = cb.pop()) fn.call(component);
	            return rendered;
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c._parentComponent)) isOwner = c.constructor === vnode.nodeName;
	        if (isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (c && !isDirectOwner) {
	                unmountComponent(c, !0);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.nextBase) c.nextBase = dom;
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component, remove) {
	        var base = component.base;
	        component._disableRendering = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner, remove); else if (base) {
	            if (base[ATTR_KEY] && base[ATTR_KEY].ref) base[ATTR_KEY].ref(null);
	            component.nextBase = base;
	            if (remove) {
	                removeNode(base);
	                collectComponent(component);
	            }
	            removeOrphanedChildren(base.childNodes, !remove);
	        }
	        if (component.__ref) component.__ref(null);
	        if (component.componentDidUnmount) component.componentDidUnmount();
	    }
	    function Component(props, context) {
	        this._dirty = !0;
	        this._disableRendering = !1;
	        this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null;
	        this.context = context;
	        this.props = props;
	        this.state = this.getInitialState && this.getInitialState() || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent);
	    }
	    var lcCache = {};
	    var toLowerCase = 
	    var resolved = 'undefined' != typeof Promise && Promise.resolve();
	    var defer = resolved ? function(f) {
	        resolved.then(f);
	    } : setTimeout;
	    var options = {
	        vnode: empty
	    };
	    var SHARED_TEMP_ARRAY = [];
	    var EMPTY = {};
	    var ATTR_KEY = 'undefined' != typeof Symbol ? Symbol.for('preactattr') : '__preactattr_';
	    var NON_DIMENSION_PROPS = {
	        boxFlex: 1,
	        boxFlexGroup: 1,
	        columnCount: 1,
	        fillOpacity: 1,
	        flex: 1,
	        flexGrow: 1,
	        flexPositive: 1,
	        flexShrink: 1,
	        flexNegative: 1,
	        fontWeight: 1,
	        lineClamp: 1,
	        lineHeight: 1,
	        opacity: 1,
	        order: 1,
	        orphans: 1,
	        strokeOpacity: 1,
	        widows: 1,
	        zIndex: 1,
	        zoom: 1
	    };
	    var items = [];
	    var itemsOffline = [];
	    var nodes = {};
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var components = {};
	    extend(Component.prototype, {
	        linkState: function(key, eventPath) {
	            var c = this._linkedStates || (this._linkedStates = {}), cacheKey = key + '|' + eventPath;
	            return c[cacheKey] || (c[cacheKey] = createLinkedState(this, key, eventPath));
	        },
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.prevState) this.prevState = clone(s);
	            extend(s, isFunction(state) ? state(s, this.props) : state);
	            if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
	            triggerComponentRender(this);
	        },
	        forceUpdate: 
	        render: function() {
	            return null;
	        }
	    });
	    exports.h = h;
	    exports.cloneElement = cloneElement;
	    exports.Component = Component;
	    exports.render = render;
	    exports.rerender = rerender;
	    exports.options = options;
	});
	//# sourceMappingURL=preact.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	!function() {
	    'use strict';
	    function VNode() {}
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && null != attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
	            if ('boolean' == typeof child) child = null;
	            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
	            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
	            lastSimple = simple;
	        }
	        var p = new VNode();
	        p.nodeName = nodeName;
	        p.children = children;
	        p.attributes = null == attributes ? void 0 : attributes;
	        p.key = null == attributes ? void 0 : attributes.key;
	        if (void 0 !== options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function enqueueRender(component) {
	        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p.__d) renderComponent(p);
	    }
	    function isSameNodeType(node, vnode, hydrating) {
	        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
	        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	    }
	    function getNodeProps(vnode) {
	        var props = extend({}, vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function createNode(nodeName, isSvg) {
	        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	        node.__n = nodeName;
	        return node;
	    }
	    	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('key' === name) ; else if ('ref' === name) {
	            if (old) old(null);
	            if (value) value(node);
	        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html || '';
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var useCapture = name !== (name = name.replace(/Capture$/, ''));
	            name = name.toLowerCase().substring(2);
	            if (value) {
	                if (!old) node.addEventListener(name, eventProxy, useCapture);
	            } else node.removeEventListener(name, eventProxy, useCapture);
	            (node.__l || (node.__l = {}))[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || !1 === value) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
	            if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this.__l[e.type](options.event && options.event(e) || e);
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
	            hydrating = null != dom && !('__preactattr_' in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll, componentRoot) {
	        var out = dom, prevSvgMode = isSvgMode;
	        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
	        if ('string' == typeof vnode || 'number' == typeof vnode) {
	            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                out = document.createTextNode(vnode);
	                if (dom) {
	                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                    recollectNodeTree(dom, !0);
	                }
	            }
	            out.__preactattr_ = !0;
	            return out;
	        }
	        var vnodeName = vnode.nodeName;
	        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
	        vnodeName = String(vnodeName);
	        if (!dom || !isNamedNode(dom, vnodeName)) {
	            out = createNode(vnodeName, isSvgMode);
	            if (dom) {
	                while (dom.firstChild) out.appendChild(dom.firstChild);
	                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                recollectNodeTree(dom, !0);
	            }
	        }
	        var fc = out.firstChild, props = out.__preactattr_, vchildren = vnode.children;
	        if (null == props) {
	            props = out.__preactattr_ = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
	        diffAttributes(out, vnode.attributes, props);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
	        if (0 !== len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
	        }
	        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && void 0 !== keyed[key]) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
	                child = c;
	                children[j] = void 0;
	                if (j === childrenLen - 1) childrenLen--;
	                if (j === min) min++;
	                break;
	            }
	            child = idiff(child, vchild, context, mountAll);
	            f = originalChildren[i];
	            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
	        }
	        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
	        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component); else {
	            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
	            if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
	            removeChildren(node);
	        }
	    }
	    function removeChildren(node) {
	        node = node.lastChild;
	        while (node) {
	            var next = node.previousSibling;
	            recollectNodeTree(node, !0);
	            node = next;
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        var name;
	        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
	        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name;
	        (components[name] || (components[name] = [])).push(component);
	    }
	    function createComponent(Ctor, props, context) {
	        var inst, list = components[Ctor.name];
	        if (Ctor.prototype && Ctor.prototype.render) {
	            inst = new Ctor(props, context);
	            Component.call(inst, props, context);
	        } else {
	            inst = new Component(props, context);
	            inst.constructor = Ctor;
	            inst.render = doRender;
	        }
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.__b = list[i].__b;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function doRender(props, state, context) {
	        return this.constructor(props, context);
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component.__x) {
	            component.__x = !0;
	            if (component.__r = props.ref) delete props.ref;
	            if (component.__k = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.__c) component.__c = component.context;
	                component.context = context;
	            }
	            if (!component.__p) component.__p = component.props;
	            component.props = props;
	            component.__x = !1;
	            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__r) component.__r(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component.__x) {
	            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.__p = component.__s = component.__c = component.__b = null;
	            component.__d = !1;
	            if (!skip) {
	                rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if ('function' == typeof childComponent) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
	                        toUnmount = inst;
	                        component._component = inst = createComponent(childComponent, childProps, context);
	                        inst.__b = inst.__b || nextBase;
	                        inst.__u = component;
	                        setComponentProps(inst, childProps, 0, context, !1);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase, !1);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t.__u) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (originalComponent && !isDirectOwner) {
	                unmountComponent(originalComponent);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.__b) {
	                c.__b = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom, !1);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component.__x = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner); else if (base) {
	            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
	            component.__b = base;
	            removeNode(base);
	            collectComponent(component);
	            removeChildren(base);
	        }
	        if (component.__r) component.__r(null);
	    }
	    function Component(props, context) {
	        this.__d = !0;
	        this.context = context;
	        this.props = props;
	        this.state = this.state || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent, !1);
	    }
	    var options = {};
	    var stack = [];
	    var EMPTY_CHILDREN = [];
	    var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
	    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
	    var items = [];
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.__s) this.__s = extend({}, s);
	            extend(s, 'function' == typeof state ? state(s, this.props) : state);
	            if (callback) (this.__h = this.__h || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function(callback) {
	            if (callback) (this.__h = this.__h || []).push(callback);
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    var preact = {
	        h: h,
	        createElement: h,
	        cloneElement: cloneElement,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options
	    };
	    if (true) module.exports = preact; else self.preact = preact;
	}();
	//# sourceMappingURL=preact.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * @preserve Qwery - A selector engine
	  * https://github.com/ded/qwery
	  * (c) Dustin Diaz 2014 | License MIT
	  */

	(function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	})('qwery', this, function () {

	  var classOnly = /^\.([\w\-]+)$/
	    , doc = document
	    , win = window
	    , html = doc.documentElement
	    , nodeType = 'nodeType'
	  var isAncestor = 'compareDocumentPosition' in html ?
	    function (element, container) {
	      return (container.compareDocumentPosition(element) & 16) == 16
	    } :
	    function (element, container) {
	      container = container == doc || container == window ? html : container
	      return container !== element && container.contains(element)
	    }

	  
	  function isNode(el) {
	    var t
	    return el && typeof el === 'object' && (t = el.nodeType) && (t == 1 || t == 9)
	  }

	  function arrayLike(o) {
	    return (typeof o === 'object' && isFinite(o.length))
	  }

	  
	  function uniq(ar) {
	    var a = [], i, j
	    label:
	    for (i = 0; i < ar.length; i++) {
	      for (j = 0; j < a.length; j++) {
	        if (a[j] == ar[i]) {
	          continue label
	        }
	      }
	      a[a.length] = ar[i]
	    }
	    return a
	  }


	  function normalizeRoot(root) {
	    if (!root) return doc
	    if (typeof root == 'string') return qwery(root)[0]
	    if (!root[nodeType] && arrayLike(root)) return root[0]
	    return root
	  }

	  /**
	   * @param {string|Array.<Element>|Element|Node} selector
	   * @param {string|Array.<Element>|Element|Node=} opt_root
	   * @return {Array.<Element>}
	   */
	  function qwery(selector, opt_root) {
	    var m, root = normalizeRoot(opt_root)
	    if (!root || !selector) return []
	    if (selector === win || isNode(selector)) {
	      return !opt_root || (selector !== win && isNode(root) && isAncestor(selector, root)) ? [selector] : []
	    }
	    if (selector && arrayLike(selector)) return flatten(selector)


	    if (doc.getElementsByClassName && selector == 'string' && (m = selector.match(classOnly))) {
	      return toArray((root).getElementsByClassName(m[1]))
	    }
	    // using duck typing for 'a' window or 'a' document (not 'the' window || document)
	    if (selector && (selector.document || (selector.nodeType && selector.nodeType == 9))) {
	      return !opt_root ? [selector] : []
	    }
	    return toArray((root).querySelectorAll(selector))
	  }

	  qwery.uniq = uniq

	  return qwery
	}, this);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = {
		"feature": {
			"communityEmergency": false,
			"communityMaintenance": false,
			"casinoEmergency": false,
			"pcpPaymentEmergency": false,
			"pcpSSOEmergency": false,
			"pcpCompleteEmergency": false,
			"creEmergency": false,
			"disableLogin": false,
			"disableOnSiteLoginOnly": true,
			"splunkLogging": true,
			"logAggregation": true,
			"openDoorDay": false,
			"freeArticleLayer": false,
			"communityCaptcha": false,
			"commentsRepliesOnSiteNotifications": true,
			"commentsRepliesEmailNotifications": true,
			"commentLikesUpdates": true,
			"enableRecaptchaForDSGVO": false,
			"enableRecaptchaForOMQ": true,
			"huaEmergency": false
		}
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	!exports,[function(e,t,n){"use strict";function r(){}(e,t,n,r,i){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||i)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var o in n)o in r||(e.style[o]="");for(var o in r)e.style[o]="number"==typeof r[o]&&!1===I.test(o)?r[o]+"px":r[o]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,v,s):e.removeEventListener(t,v,s),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!i&&t in e)y(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=i&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}ion b(e,t,n,r,i){var o,s,a,l,u,f=e.childNodes,h=[],d={},y=0,v=0,_=f.length,m=0,b=t?t.length:0;if(0!==_)for(var E=0;E<_;E++){var x=f[E],T=x.__preactattr_,A=b&&T?x._component?x._component.__key:T.key:null;null!=A?(y++,d[A]=x):(T||(void 0!==x.splitText?!i||x.nodeValue.trim():i))&&(h[m++]=x)}if(0!==b)for(var E=0;E<b;E++){l=t[E],u=null;var A=l.key;if(null!=A)y&&void 0!==d[A]&&(u=d[A],d[A]=void 0,y--);else if(!u&&v<m)for(o=v;o<m;o++)if(void 0!==h[o]&&c(s=h[o],l,i)){u=s,h[o]=void 0,o===m-1&&m--,o===v&&v++;break}u=w(u,l,n,r),a=f[E],u&&u!==e&&u!==a&&(null==a?e.appendChild(u):u===a.nextSibling?p(a):e.insertBefore(u,a))}if(y)for(var E in d)void 0!==d[E]&&g(d[E],!1);for(;v<=m;)void 0!==(u=h[m--])&&g(u,!1)}tion A(e,t,n){var r,i=q[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),k.call(r,t,n)):(r=new k(t,n),r.constructor=e,r.render=C),i)for(var o=i.length;o--;)if(i[o].constructor===e){r.nextBase=i[o].nextBase,i.splice(o,1);break}return r}nction P(e,t,n,r){if(!e._disable){var i,s,a,l=e.props,c=e.state,u=e.context,h=e.prevProps||l,p=e.prevState||c,d=e.prevContext||u,y=e.base,v=e.nextBase,w=y||v,b=e._component,E=!1;if(y&&(e.props=h,e.state=p,e.context=d,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,c,u)?E=!0:e.componentWillUpdate&&e.componentWillUpdate(l,c,u),e.props=l,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!E){i=e.render(l,c,u),e.getChildContext&&(u=o(o({},u),e.getChildContext()));var x,T,C=i&&i.nodeName;if("function"==typeof C){var j=f(i);s=b,s&&s.constructor===C&&j.key==s.__key?L(s,j,1,u,!1):(x=s,e._component=s=A(C,j,u),s.nextBase=s.nextBase||v,s._parentComponent=e,L(s,j,0,u,!1),P(s,1,n,!0)),T=s.base}else a=w,x=b,x&&(a=e._component=null),(w||1===t)&&(a&&(a._component=null),T=m(a,i,u,n||!y,w&&w.parentNode,!0));if(w&&T!==w&&s!==b){var k=w.parentNode;k&&T!==k&&(k.replaceChild(T,w),x||(w._component=null,g(w,!1)))}if(x&&O(x),e.base=T,T&&!r){for(var S=e,M=e;M=M._parentComponent;)(S=M).base=T;T._component=S,T._componentConstructor=S.constructor}}if(!y||n?W.unshift(e):E||(e.componentDidUpdate&&e.componentDidUpdate(h,p,d),B.afterUpdate&&B.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);D||r||_()}}ct.defineProperty(t,"__esModule",{value:!0}),n.d(t,"h",function(){return i}),n.d(t,"createElement",function(){return i}),n.d(t,"cloneElement",function(){return s}),n.d(t,"Component",function(){return k}),n.d(t,"render",function(){return S}),n.d(t,"rerender",function(){return l}),n.d(t,"options",function(){return B});var B={},M=[],U=[],N="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,I=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,R=[],W=[],D=0,F=!1,H=!1,q={};o(k.prototype,{setState:forceUpdate:render:);var V={h:i,createElement:i,cloneElement:s,Component:k,render:S,rerender:l,options:B};t.default=V},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=window.mfEventSystem;i||(i=r.default,window.mfEventSystem=i),t.default=i},function(e,t,n){"use strict";var r=n(6),i=function(){function e(){}return e.fireEvent=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.storeEvent.apply(this,[e].concat(t)),(r=this.EMITTER).emit.apply(r,[e].concat(t));var r},e.registerEventListener=function(e,t,n){void 0===n&&(n={replay:!0,once:!1});var r=this.callSafety(t);n.once?this.EMITTER.once(e,r):this.EMITTER.on(e,r),n.replay&&this.replayEvents(e,r)},e.storeEvent=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=this.events[e];r||(r=[],this.events[e]=r),r.length>=this.MAX_BUCKET_SIZE&&r.shift(),r.push(t)},e.replayEvents=function(e,t){var n=this.events[e];n&&n.forEach(},e.callSafety=function(e){var t=this;return function(){for(var n=[],r=0;r<arguments.length;r++)n[r-0]=arguments[r];try{e.apply(t,n)}catch(t){console&&console.error&&console.error("error on executing handler:"+e,t)}}},e.EMITTER=new r.EventEmitter2,e.MAX_BUCKET_SIZE=100,e.events={},e}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},function(e,t,n){"use strict";unction i(e){return e.text().then(}function o(e,t){var n=e+t+"/info.json";return window.fetch(n).then(i)}function s(e,t){var n=document.createElement("script");n.setAttribute("src",t+e.name+"/"+e.resource),n.addEventListener("load",function(){e.loaded=!0,e.loading=!1,e.repository=t,window.mfWidgetInfo=window.mfWidgetInfo||[],window.mfWidgetInfo[e.name]=e}),document.documentElement.firstChild.appendChild(n)}function a(e,t,n){c.default.fireEvent("render::"+e.name,Object.assign({},{target:t},n?{config:n}:{}))}function l(e,t,n,r){if(void 0!==window.mfWidgetInfo&&window.mfWidgetInfo[t]){var i=window.mfWidgetInfo[t];window.mfWidgetInfo[t].loaded||(window.mfWidgetInfo[t].loading=!0,s(i,e)),a(i,n,r)}else o(e,t).then(}Object.defineProperty(t,"__esModule",{value:!0});var c=n(1);t.loadWidget=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.register=r.register;var i=n(3);t.loadWidget=i.loadWidget;var o=n(7);t.MfWidget=o.MfWidget,n(9).polyfill(),n(10),n(14),n(15),window.mfCommonLibs={laParty:n(2),preact:n(0),whatwgFetch:n(16)}},function(e,t,n){"use strict";function r(e,t){i.default.registerEventListener("render::"+e,}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);t.register=r},function(e,t,n){var r;!function(i){ction l(e,t,n,r){if(!n)return[];var i,o,s,a,c,u,f,h=[],p=t.length,d=t[r],y=t[r+1];if(r===p&&n._listeners){if("function"==typeof n._listeners)return e&&e.push(n._listeners),[n];for(i=0,o=n._listeners.length;i<o;i++)e&&e.push(n._listeners[i]);return[n]}if("*"===d||"**"===d||n[d]){if("*"===d){for(s in n)"_listeners"!==s&&n.hasOwnProperty(s)&&(h=h.concat(l(e,t,n[s],r+1)));return h}if("**"===d){(f=r+1===p||r+2===p&&"*"===y)&&n._listeners&&(h=h.concat(l(e,t,n,p)));for(s in n)"_listeners"!==s&&n.hasOwnProperty(s)&&("*"===s||"**"===s?(n[s]._listeners&&!f&&(h=h.concat(l(e,t,n[s],p))),h=h.concat(l(e,t,n[s],r))):h=s===y?h.concat(l(e,t,n[s],r+2)):h.concat(l(e,t,n[s],r)));return h}h=h.concat(l(e,t,n[d],r+1))}if(a=n["*"],a&&l(e,t,a,r+1),c=n["**"])if(r<p){c._listeners&&l(e,t,c,p);for(s in c)"_listeners"!==s&&c.hasOwnProperty(s)&&(s===y?l(e,t,c[s],r+2):s===d?l(e,t,c[s],r+1):(u={},u[s]=c[s],l(e,t,{"**":u},r+1)))}else c._listeners?l(e,t,c,p):c["*"]&&c["*"]._listeners&&l(e,t,c["*"],p);return h}function c(e,t){e="string"==typeof e?e.split(this.delimiter):e.slice();for(var n=0,r=e.length;n+1<r;n++)if("**"===e[n]&&"**"===e[n+1])return;for(var i=this.listenerTree,o=e.shift();o;){if(i[o]||(i[o]={}),i=i[o],0===e.length){if(i._listeners){if("function"==typeof i._listeners)i._listeners=[i._listeners,t];else if(u(i._listeners)&&(i._listeners.push(t),!i._listeners.warned)){var s=f;void 0!==this._events.maxListeners&&(s=this._events.maxListeners),s>0&&i._listeners.length>s&&(i._listeners.warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",i._listeners.length),console.trace&&console.trace())}}else i._listeners=t;return!0}o=e.shift()}return!0}var u=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},f=10;a.EventEmitter2=a,a.prototype.delimiter=".",a.prototype.setMaxListeners=a.prototype.event="",a.prototype.once=a.prototype.many=function(e,t,n){ar i=this;if("function"!=typeof n)throw new Error("many only accepts instances of Function");return r._origin=n,this.on(e,r),i},a.prototype.emit=a.prototype.emitAsync=function(){this._events||o.call(this);var e=arguments[0];if("newListener"===e&&!this.newListener&&!this._events.newListener)return Promise.resolve([!1]);var t,n,r,i,s,a=[],c=arguments.length;if(this._all){if(c>3)for(t=new Array(c),i=1;i<c;i++)t[i]=arguments[i];for(r=0,n=this._all.length;r<n;r++)switch(this.event=e,c){case 1:a.push(this._all[r].call(this,e));break;case 2:a.push(this._all[r].call(this,e,arguments[1]));break;case 3:a.push(this._all[r].call(this,e,arguments[1],arguments[2]));break;default:a.push(this._all[r].apply(this,t))}}if(this.wildcard){s=[];var u="string"==typeof e?e.split(this.delimiter):e.slice();l.call(this,s,u,this.listenerTree,0)}else s=this._events[e];if("function"==typeof s)switch(this.event=e,c){case 1:a.push(s.call(this));break;case 2:a.push(s.call(this,arguments[1]));break;case 3:a.push(s.call(this,arguments[1],arguments[2]));break;default:for(t=new Array(c-1),i=1;i<c;i++)t[i-1]=arguments[i];a.push(s.apply(this,t))}else if(s&&s.length){if(c>3)for(t=new Array(c-1),i=1;i<c;i++)t[i-1]=arguments[i];for(r=0,n=s.length;r<n;r++)switch(this.event=e,c){case 1:a.push(s[r].call(this));break;case 2:a.push(s[r].call(this,arguments[1]));break;case 3:a.push(s[r].call(this,arguments[1],arguments[2]));break;default:a.push(s[r].apply(this,t))}}else if(!this._all&&"error"===e)return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.");return Promise.all(a)},a.prototype.on=function(e,t){if("function"==typeof e)return this.onAny(e),this;if("function"!=typeof t)throw new Error("on only accepts instances of Function");if(this._events||o.call(this),this.emit("newListener",e,t),this.wildcard)return c.call(this,e,t),this;if(this._events[e]){if("function"==typeof this._events[e])this._events[e]=[this._events[e],t];else if(u(this._events[e])&&(this._events[e].push(t),!this._events[e].warned)){var n=f;void 0!==this._events.maxListeners&&(n=this._events.maxListeners),n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),console.trace&&console.trace())}}else this._events[e]=t;return this},a.prototype.onAny=a.prototype.addListener=a.prototype.on,a.prototype.off=function(e,t){function n(e){if(e!==i){var t=Object.keys(e);for(var r in t){var o=t[r],s=e[o];s instanceof Function||"object"!=typeof s||(Object.keys(s).length>0&&n(e[o]),0===Object.keys(s).length&&delete e[o])}}}if("function"!=typeof t)throw new Error("removeListener only takes instances of Function");var r,o=[];if(this.wildcard){var s="string"==typeof e?e.split(this.delimiter):e.slice();o=l.call(this,null,s,this.listenerTree,0)}else{if(!this._events[e])return this;r=this._events[e],o.push({_listeners:r})}for(var a=0;a<o.length;a++){var c=o[a];if(r=c._listeners,u(r)){for(var f=-1,h=0,p=r.length;h<p;h++)if(r[h]===t||r[h].listener&&r[h].listener===t||r[h]._origin&&r[h]._origin===t){f=h;break}if(f<0)continue;return this.wildcard?c._listeners.splice(f,1):this._events[e].splice(f,1),0===r.length&&(this.wildcard?delete c._listeners:delete this._events[e]),this.emit("removeListener",e,t),this}(r===t||r.listener&&r.listener===t||r._origin&&r._origin===t)&&(this.wildcard?delete c._listeners:delete this._events[e],this.emit("removeListener",e,t))}return n(this.listenerTree),this},a.prototype.offAny=function(e){var t,n=0,r=0;if(e&&this._all&&this._all.length>0){for(t=this._all,n=0,r=t.length;n<r;n++)if(e===t[n])return t.splice(n,1),this.emit("removeListenerAny",e),this}else{for(t=this._all,n=0,r=t.length;n<r;n++)this.emit("removeListenerAny",t[n]);this._all=[]}return this},a.prototype.removeListener=a.prototype.off,a.prototype.removeAllListeners=function(e){if(0===arguments.length)return!this._events||o.call(this),this;if(this.wildcard)for(var t="string"==typeof e?e.split(this.delimiter):e.slice(),n=l.call(this,null,t,this.listenerTree,0),r=0;r<n.length;r++){var i=n[r];i._listeners=null}else{if(!this._events||!this._events[e])return this;this._events[e]=null}return this},a.prototype.listeners=a.prototype.listenersAny=(r=function(){return a}.call(t,n,t,e))!==i&&(e.exports=r)}()},function(e,t,n){"use strict";var r=this&&this.__extends||);Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(8),s=n(3),a=function(e){eturn r(t,e),t.prototype.shouldComponentUpdate=t.prototype.componentDidMount=t.prototype.render=function(){var e=this.props,t=e.widgetName,n=e.id,r=e.config;return o.default.createElement("div",{"data-widget":t,"data-widget-id":n,"data-widget-config":JSON.stringify(r||{})})},t.prototype.renderWidget=function(){var e=this.props,t=e.widgetRepository,n=e.widgetName,r=e.config;s.loadWidget(t,n,this.base,r)},t}(i.Component);t.MfWidget=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={createElement:r.h,__spread:Object.assign}},function(e,t,n){(function(r,i){var o;(function(){"use strict";nction l(e){G=e}on y(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}t=this;return new t(X(e)?}unction R(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function W(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}V;V=Array.isArray?Array.isArray:var z,G,K,X=V,J=0,Y=$="undefined"!=typeof window?window:void 0,Z=$||{},Q=Z.MutationObserver||Z.WebKitMutationObserver,ee="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3);K=ee?):Q?):te?):void 0===$?):f();var re=p,ie=d,oe=Math.random().toString(36).substring(16),se=void 0,ae=1,le=2,ce=new j,ue=new j,fe=0,he=U,pe=N,de=I,ye=D;D.all=he,D.race=pe,D.resolve=ie,D.reject=de,D._setScheduler=l,D._setAsap=c,D._asap=Y,D.prototype={constructor:D,then:re,catch:;var ve=F;F.prototype._enumerate=F.prototype._eachEntry=F.prototype._settledAt=F.prototype._willSettleAt=var _e=q,me={Promise:ye,polyfill:_e};void 0!==(o=function(){return me}.call(t,n,t,e))&&(e.exports=o),_e()}).call(this)}).call(t,n(11),n(12))},function(e,t){window.matchMedia||(window.matchMedia=))},));

/***/ })
/******/ ]);