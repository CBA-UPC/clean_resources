(self["webpackChunk"] = self["webpackChunk"] || []).push([["react/favoris"],{

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/App/EventFavoris.js":
/*!************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/App/EventFavoris.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventFavoris": function() { return /* binding */ EventFavoris; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BlocFavoris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BlocFavoris */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/BlocFavoris.js");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }



function EventFavoris(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    setFavorisData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // On bind l'update du composant sur la modification du storage
    window.addEventListener('storage',  false);
    refreshEventFavorisInfos();
  }, []);
  var refreshEventFavorisInfos = function refreshEventFavorisInfos() {
    var favoris = FavorisWrapper.getFavoris();
    var programmeInfo = favoris.programmeInfos || {};
    var promise = Promise.resolve();
    if (props.date !== 'NA' && !(props.date in programmeInfo)) {
      promise = fetchFavorisByDate(props.date);
    }
    promise.then(function () {
      setFavorisData(Object.keys(programmeInfo[props.date] || {}));
    });
  };
  var fetchFavorisByDate = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(date) {
      var favorisUrl, result, _programmeInfos$date, cheval, programmeInfos;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ZERouter.generate('zeturf_frontoffice_favoris_fetch', {
              'date': date
            });
          case 2:
            favorisUrl = _context2.sent;
            if (!(favorisUrl === null)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return");
          case 5:
            _context2.next = 7;
            return wrapJsonFetch(fetch(favorisUrl), null, /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var compteUrl;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return ZERouter.generate('zeturf_frontofficecompte_compte_index');
                  case 2:
                    compteUrl = _context.sent;
                    if ($('#favoris-edit').length !== 0 && compteUrl) {
                      window.location.href = compteUrl;
                    }
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
          case 7:
            result = _context2.sent;
            if (result) {
              cheval = result.cheval, programmeInfos = result.programmeInfos; // On initialise la clé au cas où il n'y aurait aucun favori, elle sert de clé de cache pour ne pas
              // refaire l'appel à chaque page de la même date
              (_programmeInfos$date = programmeInfos[date]) !== null && _programmeInfos$date !== void 0 ? _programmeInfos$date : programmeInfos[date] = {};
              FavorisWrapper.updateFavoris(cheval, programmeInfos);
            }
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function fetchFavorisByDate(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_BlocFavoris__WEBPACK_IMPORTED_MODULE_4__.BlocFavoris, {
    date: props.date,
    favorisToShow: props.favorisToShow,
    page: props.page
  });
}
EventFavoris.propTypes = {
  favorisToShow: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
  date: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  page: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/App/FavorisApp.js":
/*!**********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/App/FavorisApp.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavorisApp": function() { return /* binding */ FavorisApp; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Util_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Tabs/Tabs */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/Tabs.js");
/* harmony import */ var _BlocFavoris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BlocFavoris */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/BlocFavoris.js");
/* harmony import */ var _SearchCheval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchCheval */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/SearchCheval.js");







function FavorisApp(props) {
  var labels = {
    'today': ZEturf.text.favoris.today,
    'tomorrow': ZEturf.text.favoris.tomorrow,
    'all': ZEturf.text.favoris.all,
    'search': ZEturf.text.favoris.search,
    'summarySearch': ZEturf.text.favoris.search_summary
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.indexes || []),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    indexes = _useState2[0],
    setIndexes = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(labels.all),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    favorisData = _useState6[0],
    setFavorisData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
    counters = _useState8[0],
    setCounters = _useState8[1];
  var today = moment().format('YYYY-MM-DD'),
    tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // On bind l'update du composant sur la modification du storage
    window.addEventListener('stora   }, false);
    update(true);
  }, []);
  var update = function update() {
    var initTab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var favoris = FavorisWrapper.getFavoris();
    var programmeInfo = favoris.programmeInfos || {};
    var favorisMap = {
      today: Object.keys(programmeInfo[today] || {}),
      tomorrow: Object.keys(programmeInfo[tomorrow] || {})
    };
    var availableIndexes = new Set(props.indexes || []);

    // On calcule l'index alphabétique des chevaux dispo avec l'init et l'index en ztLocalStorage (pour permettre la
    // MAJ live de l'interface de la page)
    for (var _i = 0, _Object$entries = Object.entries(favoris.indexes || {}); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Object$entries[_i], 2),
        letter = _Object$entries$_i[0],
        chevaux = _Object$entries$_i[1];
      if (chevaux.filter(function (c) {
        return c;
      }).length) {
        availableIndexes.add(letter);
      }
    }
    var sortedIndexes = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(availableIndexes).filter(function (lettre) {
      var indexedChevaux = (favoris.indexes || {})[lettre];

      // On renvoi la lettre si les chevaux présents dans le cache est undefined (pas encore chargé par l'app)
      // ou qu'il y a effectivement des chevaux dedans, si le tableau est vide, alors on a supprimé le cheval
      // après le chargement de la page
      return indexedChevaux === undefined || indexedChevaux.length !== 0;
    }).sort();
    setIndexes(sortedIndexes);
    setFavorisData(favorisMap);
    setCounters({
      'today': favorisMap.today.length,
      'tomorrow': favorisMap.tomorrow.length,
      'all': favoris.nbFavoris
    });
    if (initTab) {
      if (favorisMap.today.length || favorisMap.tomorrow.length) {
        setActiveTab(favorisMap.today.length ? labels.today : labels.tomorrow);
      } else {
        setActiveTab(labels.search);
      }
    }
  };
  return favorisData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Util_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__.Tabs, {
    activeTab: activeTab,
    changeActiveTab: function changeActiveTab(activeTab) {
      return setActiveTab(activeTab);
    },
    showMobileVariant: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    label: labels.today,
    displayedCount: counters.today || 0,
    visible: counters.today > 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "chevaux-favoris-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "table-favoris"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("legend", {
    className: "hidden"
  }, labels.today), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_BlocFavoris__WEBPACK_IMPORTED_MODULE_4__.BlocFavoris, {
    date: today,
    favorisToShow: favorisData.today,
    page: props.page
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    label: labels.tomorrow,
    displayedCount: counters.tomorrow || 0,
    visible: counters.tomorrow > 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "chevaux-favoris-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "table-favoris"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("legend", {
    className: "hidden"
  }, labels.tomorrow), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_BlocFavoris__WEBPACK_IMPORTED_MODULE_4__.BlocFavoris, {
    date: tomorrow,
    favorisToShow: favorisData.tomorrow,
    page: props.page
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    label: labels.all,
    displayedCount: counters.all || 0,
    visible: indexes.length > 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "chevaux-favoris-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "table-favoris"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("legend", {
    className: "hidden"
  }, labels.all), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_BlocFavoris__WEBPACK_IMPORTED_MODULE_4__.BlocFavoris, {
    page: props.page,
    indexes: indexes
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    label: labels.search
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "summary-bloc"
  }, labels.summarySearch), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_SearchCheval__WEBPACK_IMPORTED_MODULE_5__.SearchCheval, null)));
}
FavorisApp.propTypes = {
  indexes: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
  page: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/BlocFavoris.js":
/*!*******************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/BlocFavoris.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlocFavoris": function() { return /* binding */ BlocFavoris; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tableau_Tableau__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tableau/Tableau */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/Tableau/Tableau.js");
/* harmony import */ var _IndexFavoris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IndexFavoris */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/IndexFavoris.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




function BlocFavoris(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    favorisDetails = _useState2[0],
    setFavorisDetails = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    index = _useState4[0],
    setIndex = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    withEngagement = _useState6[0],
    setWithEngagement = _useState6[1];
  var favorisContainerEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var prevIndex = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _props$indexes;
    var defaultIndex = (_props$indexes = props.indexes) !== null && _props$indexes !== void 0 && _props$indexes.length ? props.indexes[0] : null;
    if (props.page !== 'course' && !defaultIndex) {
      setWithEngagement(true);
    }
    setIndex(defaultIndex);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.undex;
  }, [index, props]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _favorisContainerEl$c;
    (_favorisContainerEl$c = favorisContainerEl.current) === null || _favorisContainerEl$c === void 0 ? void 0 : _favorisContainerEl$c.closest('.chevaux-favoris-container').classList.toggle('shown', (favorisDetails === null || favorisDetails === void 0 ? void 0 : favorisDetails.length) > 0);
  }, [favorisDetails]);
  var updateFavorisClient = function updateFavorisClient(selectedIndex) {
    if (selectedIndex && prevIndex.current !== selectedIndex) {
      window.FavorisWrapper.fetchFavorisByIndex(selectedIndex).then(function () {
        return refreshFavorisDetails(selectedIndex);
      });
    } else {
      refreshFavorisDetails(selectedIndex);
    }
  };
  var refreshFavorisDetails = function refreshFavorisDetails(selectedIndex) {
    var _props$indexes2;
    var favorisDetails = [],
      favoris = FavorisWrapper.getFavoris();
    var indexedChevauxCount = selectedIndex && favoris.indexes ? (favoris.indexes[selectedIndex] || []).length : 0;
    if (selectedIndex && indexedChevauxCount === 0 && (_props$indexes2 = props.indexes) !== null && _props$indexes2 !== void 0 && _props$indexes2.length) {
      setIndex(props.indexes[0]);
    } else {
      if (selectedIndex) {
        if (indexedChevauxCount > 0) {
          var _iterator = _createForOfIteratorHelper(favoris.indexes[selectedIndex] || []),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var id = _step.value;
              var cheval = favoris.cheval[id] || null;
              if (cheval) {
                favorisDetails.push({
                  id: id,
                  cheval: cheval,
                  programmeInfo: {}
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      } else if (props.favorisToShow) {
        var _iterator2 = _createForOfIteratorHelper(props.favorisToShow),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var partant = _step2.value;
            var _cheval = favoris.cheval[partant] || null;
            if (_cheval) {
              var programmeInfosDate = favoris.programmeInfos[props.date] || {},
                programmeInfoPartant = programmeInfosDate[partant] || {};
              favorisDetails.push({
                id: partant,
                cheval: _cheval,
                programmeInfo: programmeInfoPartant
              });
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      favorisDetails = favorisDetails.sort(function (participant1, participant2) {
        var nomComplet1 = (participant1.programmeInfo.short || '') + participant1.cheval.nom;
        var nomComplet2 = (participant2.programmeInfo.short || '') + participant2.cheval.nom;
        return nomComplet1 < nomComplet2 ? -1 : +1;
      });
      setFavorisDetails(favorisDetails);
    }
  };
  return favorisDetails ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    ref: favorisContainerEl
  }, props.indexes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_IndexFavoris__WEBPACK_IMPORTED_MODULE_3__.IndexFavoris, {
    index: index,
    indexList: props.indexes,
    oe);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Tableau_Tableau__WEBPACK_IMPORTED_MODULE_2__.Tableau, {
    page: props.page,
    withEngagement: withEngagement,
    favoris: favorisDetails
  })) : null;
}
BlocFavoris.propTypes = {
  favorisToShow: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  date: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  page: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  indexes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/IndexFavoris.js":
/*!********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/IndexFavoris.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexFavoris": function() { return /* binding */ IndexFavoris; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function IndexFavoris(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pagination"
  }, props.indexList.map(function (index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: index,
      className: index === props.index ? 'selected' : '',
     ;
      },
      value: index
    }, index);
  }));
}
IndexFavoris.propTypes = {
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  indexList: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onclickfn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/SearchCheval.js":
/*!********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/SearchCheval.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCheval": function() { return /* binding */ SearchCheval; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_FicheCheval_FicheChevalSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Components/FicheCheval/FicheChevalSelector */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalSelector.js");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }



function SearchCheval() {
  var labels = {
    'reset': ZEturf.text.favoris.search_reset
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    nom = _useState4[0],
    setNom = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    ficheChevalData = _useState6[0],
    setFicheChevalData = _useState6[1];
  var handleChange = function handleChange(event) {
    setNom(event.target.value);
    debouncedfetchChevaux(event.target.value);
  };
  var fetchChevaux = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(nom) {
      var rechercheChevalUrl, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(nom.length > 3)) {
              _context.next = 11;
              break;
            }
            _context.next = 3;
            return ZERouter.generate('zeturf_frontoffice_favoris_searchcheval', {
              nom: nom
            });
          case 3:
            rechercheChevalUrl = _context.sent;
            if (!rechercheChevalUrl) {
              _context.next = 9;
              break;
            }
            _context.next = 7;
            return wrapJsonFetch(fetch(rechercheChevalUrl), {});
          case 7:
            result = _context.sent;
            if (result) {
              setList(result);
            }
          case 9:
            _context.next = 12;
            break;
          case 11:
            setList([]);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function fetchChevaux(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var debouncedfetchChevaux = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(debounce(fetchChevaux, 300), []);
  var fetchFicheChevalData = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
      var ficheChevalUrl, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return ZERouter.generate('zeturf_frontoffice_favoris_fichechevalinfo', {
              id: id
            });
          case 2:
            ficheChevalUrl = _context2.sent;
            if (!ficheChevalUrl) {
              _context2.next = 10;
              break;
            }
            _context2.next = 6;
            return wrapJsonFetch(fetch(ficheChevalUrl));
          case 6:
            result = _context2.sent;
            if (result) {
              history.replaceState('', document.title, location.pathname + location.search);
              setFicheChevalData(result);
            }
            _context2.next = 11;
            break;
          case 10:
            setFicheChevalData(null);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function fetchFicheChevalData(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleChevalSelect = function handleChevalSelect(id, nom) {
    setNom(nom);
    setList([]);
    fetchFicheChevalData(id);
  };
  var resetRecherche = function resetRecherche() {
    setNom('');
    setList([]);
    setFicheChevalData(null);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "form-theme-new form-theme-new-classic content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "form-widget"
  }, !ficheChevalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", {
    type: "text",
    value: nom,
    className: "autocomplete-input",
    onChange: handleChange,
    name: "recherche-cheval",
    placeholder: " "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("label", {
    htmlFor: "recherche-cheval"
  }, ZEturf.text.favoris.search_horse_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", {
    className: "autocomplete-result"
  }, nom && list.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
      className: "autocomplete-item",
     ;
      },
      key: index
    }, element.nom);
  }))), ficheChevalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "reset-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "btn-outline-primary autocomplete-reset",
    onClick: function onClick() {
      return resetRecherche();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, labels.reset)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    id: "fichePartant"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    id: "fichecheval"
  }, ficheChevalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Components_FicheCheval_FicheChevalSelector__WEBPACK_IMPORTED_MODULE_4__.FicheChevalSelector, {
    data: ficheChevalData,
    user: ZEturf.userdata,
    inSearch: true
  }))));
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/Tableau/Row.js":
/*!*******************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/Tableau/Row.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": function() { return /* binding */ Row; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Helper_Favori__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Helper/Favori */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Favori.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }



function Row(props) {
  var _props$programmeInfo, _props$programmeInfo$;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)((_props$programmeInfo = props.programmeInfo) === null || _props$programmeInfo === void 0 ? void 0 : (_props$programmeInfo$ = _props$programmeInfo.urls) === null || _props$programmeInfo$ === void 0 ? void 0 : _props$programmeInfo$.partant),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    urlFicheCheval = _useState2[0],
    setUrlFicheCheval = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var _props$programmeInfo2, _props$programmeInfo3;
    setCurrentFicheChevalUrl((_props$programmeInfo2 = props.programmeInfo) === null || _props$programmeInfo2 === void 0 ? void 0 : (_props$programmeInfo3 = _props$programmeInfo2.urls) === null || _props$programmeInfo3 === void 0 ? void 0 : _props$programmeInfo3.partant);
  }, []);
  var hasProgrammeData = function hasProgrammeData() {
    return Object.keys(props.programmeInfo).length !== 0;
  };
  var getEngagementCell = function getEngagementCell() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, props.nbEngagementCol >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
      className: "engagement"
    }, hasProgrammeData() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
      href: props.programmeInfo.urls.course,
      title: props.programmeInfo.long
    }, props.page !== 'reunions' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, props.programmeInfo.reunion), props.programmeInfo.course)), props.nbEngagementCol === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
      className: "engagement-more"
    }, getEngagementMoreContent()));
  };
  var getEngagementMoreContent = function getEngagementMoreContent() {
    var engagementMoreContent = null;
    if (hasProgrammeData()) {
      if (props.page === 'reunions') {
        engagementMoreContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
          className: "course"
        }, props.programmeInfo.courseName);
      } else if (['programmes', 'special-ze5', 'resultats'].includes(props.page)) {
        engagementMoreContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
          className: "hippodrome"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
          href: props.programmeInfo.urls.reunion,
          title: props.programmeInfo.hippodrome
        }, props.programmeInfo.hippodrome));
      }
    }
    return engagementMoreContent;
  };
  var setCurrentFicheChevalUrl = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(urlPartant) {
      var ficheChevalUrl;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!urlPartant) {
              _context.next = 4;
              break;
            }
            _context.t0 = urlPartant;
            _context.next = 7;
            break;
          case 4:
            _context.next = 6;
            return ZERouter.generate('zeturf_frontoffice_favoris_fichechevalredirect', {
              'id': props.cheval.id
            });
          case 6:
            _context.t0 = _context.sent;
          case 7:
            ficheChevalUrl = _context.t0;
            if (ficheChevalUrl) {
              setUrlFicheCheval(ficheChevalUrl);
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
 s);
    };
  }();
  var redirectToFicheCheval = function redirectToFicheCheval(e) {
    var section = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    e.preventDefault();
    var urlFicheChevalWithSection = urlFicheCheval;
    if (section) {
      var _props$programmeInfo4, _props$programmeInfo5;
      urlFicheChevalWithSection += (_props$programmeInfo4 = props.programmeInfo) !== null && _props$programmeInfo4 !== void 0 && (_props$programmeInfo5 = _props$programmeInfo4.urls) !== null && _props$programmeInfo5 !== void 0 && _props$programmeInfo5.partant ? "#".concat(section) : "?section=".concat(section);
    }
    if (Front.isDesktopView()) {
      Modal.openPopupWindow(urlFicheChevalWithSection, 800, 800, "Fiche Partant : ".concat(props.cheval.nom));
    } else {
      window.location = urlFicheChevalWithSection;
    }
  };
  var getNoteContent = function getNoteContent() {
    var virtualNoteTexte = document.createElement('textarea');
    virtualNoteTexte.innerHTML = props.cheval.texte;
    var notOnMobile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "note-container not-on-mobile"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "message-container"
    }, props.cheval.texte && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "message"
    }, virtualNoteTexte.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "mtime"
    }, ZEturf.text.compte_favoris_ajoute_le.replace('%date%', props.cheval.mtime))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
      className: "note-btn-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
      href: urlFicheCheval,
      title: ZEturf.text.compte_favoris_modifier_description,
      onClick: function onClick(e) {
        return redirectToFicheCheval(e, _Helper_Favori__WEBPACK_IMPORTED_MODULE_5__.ongletNotes);
      },
      className: "fichePartant"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fa-solid fa-pen-to-square gray"
    }))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, notOnMobile, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
      className: "ajout-note-mobile only-on-mobile",
      onClick: function onClick(e) {
        return redirectToFicheCheval(e, _Helper_Favori__WEBPACK_IMPORTED_MODULE_5__.ongletNotes);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
      className: "fa-solid fa-pen-to-square gray"
    })));
  };
  var onDeleteAction = function onDeleteAction(e) {
    e.preventDefault();
    return (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_5__.removeFavoriWithConfirm)(_objectSpread(_objectSpread({}, props.cheval), {}, {
      id: props.cheval.id
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("tr", {
    className: "item favoris-details"
  }, getEngagementCell(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    className: "nom-de-cheval"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: urlFicheCheval,
    className: "disabled fichePartant",
   e);
    }
  }, props.cheval.nom, props.cheval.notification && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
    className: "fa-solid fa-bell-on enabled"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "nom-de-jockey"
  }, props.programmeInfo.jockey || null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    className: "derniere-note"
  }, getNoteContent()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("td", {
    className: "effacer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: "#",
    className: "tootip",
    title: ZEturf.text.fiche_cheval.favori.supprimer,
    onClick: onDeleteAction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "fa-solid fa-trash-can gray"
  }))));
}
Row.propTypes = {
  page: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  nbEngagementCol: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),
  cheval: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  programmeInfo: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/Tableau/Tableau.js":
/*!***********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/Tableau/Tableau.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tableau": function() { return /* binding */ Tableau; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/Tableau/Row.js");



function Tableau(props) {
  var nbEngagementCol = 0;
  if (props.withEngagement) {
    nbEngagementCol = ['reunions', 'programmes', 'special-ze5', 'resultats'].includes(props.page) ? 2 : 1;
  }
  var getEngagementHeader = function getEngagementHeader() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, nbEngagementCol >= 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      className: "engagement-titre short"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "not-on-mobile"
    }, ZEturf.text.compte_favoris_course), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "only-on-mobile"
    }, ZEturf.text.course_numero)), nbEngagementCol === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      className: "engagement-more-titre"
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: "bandeau-table fond-jaune-heavy"
  }, props.withEngagement && getEngagementHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "nom-de-cheval-titre"
  }, ZEturf.text.cheval_cheval), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "note-titre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "not-on-mobile"
  }, ZEturf.text.compte_favoris_vos_notes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "effacer-titre"
  }, ZEturf.text.compte_favoris_supprimer))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: "favoris-list"
  }, Object.values(props.favoris).map(function (participant) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_1__.Row, {
      key: participant.id,
      page: props.page,
      nbEngagementCol: nbEngagementCol,
      cheval: participant.cheval,
      programmeInfo: participant.programmeInfo
    });
  })));
}
Tableau.propTypes = {
  page: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  withEngagement: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  favoris: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/ChevalNote.js":
/*!**********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/ChevalNote.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChevalNote": function() { return /* binding */ ChevalNote; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Helper_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Helper/Api */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Api.js"alse; } }



var ChevalNote = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ChevalNote, _React$Component);
  var _super = _createSuper(ChevalNote);
  function ChevalNote() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChevalNote);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      note: null,
      showDelete: false
    });
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChevalNote, [{
    key: "toggleDelete",
 });
    }
  }, {
    key: "processDelete",
    value: function processDelete() {
      var params = {
        idCheval: this.props.favori.cheval.id,
        idNote: this.props.note.id
      };
      (0,_Helper_Api__WEBPACK_IMPORTED_MODULE_8__.callDelete)('zeturf_zeturfapi_mobile_favori_deletenote', params).then(this.props.onRemove);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$note,
        _this2 = this,
        _this$props$note2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "note"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "date"
      }, "Note du ", moment(this.props.note.date).format('DD/MM/YYYY HH:mm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "controls"
      }, ((_this$props$note = this.props.note) === null || _this$props$note === void 0 ? void 0 : _this$props$note.id) && !this.state.showDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("a", {
               }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("span", {
        className: "fa-solid fa-pen-to-square gray"
      })), ((_this$props$note2 = this.props.note) === null || _this$props$note2 === void 0 ? void 0 : _this$props$note2.id) && !this.state.showDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("a", {
        className: "fa-solid fa-trash-can gray",
        onClick: function onClick() {
          return _this2.toggleDelete(true);
        }
      })), this.state.showDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "confirmation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("button", {
        className: "btn",
               }
      }, ZEturf.text.fiche_cheval.notes.bouton.confirmer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("button", {
        className: "btn light",
               }
      }, ZEturf.text.fiche_cheval.notes.bouton.annuler)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
        className: "commentaire"
      }, this.props.note.texte));
    }
  }]);
  return ChevalNote;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(ChevalNote, "propTypes", {
  favori: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  note: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
  editNote: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
});

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/ConnectPrompt.js":
/*!*************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/ConnectPrompt.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectPrompt": function() { return /* binding */ ConnectPrompt; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ConnectPrompt() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "historique-perfs"
  }, ZEturf.text.fiche_cheval.historique.not_logged, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    id: "login-btn",
    href: "/".concat(ZEturf.constant.lang, "/login?callback=").concat(document.location.pathname)
  }, ZEturf.text.fiche_cheval.historique.log_in), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    id: "signup-btn",
    href: "/".concat(ZEturf.constant.lang, "/inscription"),
    target: "_blank",
    rel: "noreferrer"
  }, ZEturf.text.fiche_cheval.historique.sign_up));
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheCheval.js":
/*!***********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheCheval.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheCheval": function() { return /* binding */ FicheCheval; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Util_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util/Tabs/Tabs */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/Tabs.js");
/* harmony import */ var _FicheChevalHisto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FicheChevalHisto */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalHisto.js");
/* harmony import */ var _FicheChevalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FicheChevalInfo */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfo.js");
/* harmony import */ var _FicheChevalNotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FicheChevalNotes */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalNotes.js");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");
/* harmony import */ var _Helper_Favori__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Helper/Favori */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Favori.js");










function FicheCheval(props) {
  var _sectionMapping, _FavorisWrapper$getFa;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    isLoaded = _useState4[0],
    setLoaded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletCarriere),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    activeTab = _useState6[0],
    setActiveTab = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
    infos = _useState8[0],
    setInfos = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
    perfs = _useState10[0],
    setPerfs = _useState10[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_7__.FicheChevalContext),
    favoris = _useContext.favoris,
    currentPartant = _useContext.currentPartant,
    isLoggedIn = _useContext.isLoggedIn,
    badges = _useContext.badges;
  var isInFavoris = (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.isFavori)(currentPartant.cheval.id, favoris);
  var sectionMapping = (_sectionMapping = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sectionMapping, _Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletCarriere, ZEturf.text.fiche_cheval.historique.titre), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sectionMapping, _Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletInfos, ZEturf.text.fiche_cheval.infos.titre), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_sectionMapping, _Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletNotes, !isInFavoris ? ZEturf.text.fiche_cheval.favori.titre : ZEturf.text.fiche_cheval.notes.titre), _sectionMapping);
  var getData = function getData() {
    if (isLoggedIn && badges !== null && badges !== void 0 && badges.zeturf_pro) {
      Spinner.showSpinner();
      setLoaded(false);
      wrapJsonFetch(fetch(props.url)).then(function (result) {
        if (result) {
          setLoaded(true);
          if (!result.info_partant) {
            setError(true);
          } else {
            var _result$info_perf$cou, _result$info_perf;
            setError(null);
            setInfos(result.info_partant.course);
            setPerfs((_result$info_perf$cou = (_result$info_perf = result.info_perf) === null || _result$info_perf === void 0 ? void 0 : _result$info_perf.course) !== null && _result$info_perf$cou !== void 0 ? _result$info_perf$cou : {});
          }
        } else {
          setLoaded(true);
          setError(true);
        }
        Spinner.hideSpinner(true);
      });
    } else {
      setLoaded(true);
      Spinner.hideSpinner(true);
    }
  };
  var changeTab = function changeTab(activeLabel) {
    var newActiveTab = Object.entries(sectionMapping).find(function (_ref) {
      var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        label = _ref2[1];
      return label === activeLabel;
    }).shift();
    setActiveTab(newActiveTab);
    if (document.location.hash !== newActiveTab) {
      document.location.hash = newActiveTab;
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var hash = document.location.hash.replace('#', '');
    if (hash && sectionMapping[hash]) {
      setActiveTab(hash);
    } else if (badges !== null && badges !== void 0 && badges.zeturf_pro) {
      setActiveTab(_Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletCarriere);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    return getData();
  }, [props.url]);
  var historiqueTabContent = '',
    infosTabContent = '';
  if (isLoaded) {
    infosTabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FicheChevalInfo__WEBPACK_IMPORTED_MODULE_5__.FicheChevalInfo, null);

    // Si on a pas d'erreur ou que l'utilisateur n'est pas connecté, on affiche le composant (qui, si besoin
    // affichera les boutons login)
    historiqueTabContent = !error || !isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FicheChevalHisto__WEBPACK_IMPORTED_MODULE_4__.FicheChevalHisto, {
      infos: infos,
      perfs: perfs
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, ZEturf.text.fiche_cheval.historique.histo_indisponible);
  }
  var dateAjoutFavori = isInFavoris ? (_FavorisWrapper$getFa = FavorisWrapper.getFavori(currentPartant.cheval.id)) === null || _FavorisWrapper$getFa === void 0 ? void 0 : _FavorisWrapper$getFa.mtime : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, dateAjoutFavori && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "favori-ajoute-le"
  }, ZEturf.text.compte_favoris_ajoute_le.replace('%date%', dateAjoutFavori)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Util_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__.Tabs, {
    activeTab: sectionMapping[activeTab],
    changeActiveTab: function changeActiveTab(activeLabel) {
      return changeTab(activeLabel);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    label: sectionMapping[_Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletCarriere]
  }, historiqueTabContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    label: sectionMapping[_Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletInfos]
  }, infosTabContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    visible: isLoggedIn,
    label: sectionMapping[_Helper_Favori__WEBPACK_IMPORTED_MODULE_8__.ongletNotes]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FicheChevalNotes__WEBPACK_IMPORTED_MODULE_6__.FicheChevalNotes, null))));
}
FicheCheval.propTypes = {
  url: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js":
/*!******************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalContext": function() { return /* binding */ FicheChevalContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FicheChevalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  course: null,
  currentPartant: null,
  favoris: [],
  currentFavori: null,
  inSearch: null,
  setCurrentPartant: function setCurrentPartant() {},
  toggleFavori: function toggleFavori() {},
  setCurrentFavori: function setCurrentFavori() {}
});

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalForm.js":
/*!***************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalForm.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalForm": function() { return /* binding */ FicheChevalForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_FicheChevalForm_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/FicheChevalForm.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalForm.scss");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



function FicheChevalForm(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    suggestions = _useState2[0],
    setSuggestions = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var filterPropMapping = {
    'hippodrome': 'hippodromes',
    'jockey': 'jockeys',
    'ferrure': 'ferrures',
    'discipline': 'disciplines',
    'distance': 'distances',
    'corde': 'cordes',
    'oeillere': 'oeilleres',
    'typePiste': 'typesPiste',
    // PSF (Piste en sable fibré, sur les courses de galop)
    'psf': 'psfs',
    'depart': 'departs'
  };
  var filterTitles = {
    'hippodrome': ZEturf.text.fiche_cheval.historique.hippodrome,
    'jockey': ZEturf.text.fiche_cheval.historique.jockey_driver,
    'ferrure': ZEturf.text.fiche_cheval.historique.ferrures,
    'discipline': ZEturf.text.fiche_cheval.historique.discipline,
    'distance': ZEturf.text.fiche_cheval.historique.distance,
    'corde': ZEturf.text.fiche_cheval.historique.corde,
    'oeillere': ZEturf.text.fiche_cheval.historique.oeilleres,
    'typePiste': ZEturf.text.fiche_cheval.historique.type_piste,
    'psf': ZEturf.text.fiche_cheval.historique.psf,
    'depart': ZEturf.text.fiche_cheval.historique.depart
  };
  var reset = function reset() {
    props.handleFilterForm({
      hippodrome: null,
      jockey: null,
      ferrure: null,
      discipline: null,
      distance: null,
      corde: null,
      oeillere: null,
      typePiste: null,
      psf: null,
      depart: null
    });
  };
  var getFormattedDisplayInfos = function getFormattedDisplayInfos(filterName, filterValue) {
    var filterDisplayValue = filterValue;
    switch (filterName) {
      case 'typePiste':
        filterValue = parseInt(filterValue);
        filterDisplayValue = ZEturf.text.zeturf_pro.type_piste[filterValue];
        break;
      case 'ferrure':
        filterDisplayValue = filterValue.alt;
        break;
      case 'distance':
        filterValue = parseInt(filterValue);
        filterDisplayValue += 'm';
        break;
      case 'oeillere':
        {
          var ztOeilleres = ZEturf.constant.ZEturfPro.Oeilleres[filterValue];
          if (ztOeilleres && ZEturf.text.enums.Oeilleres[ztOeilleres[0]]) {
            filterDisplayValue = ZEturf.text.enums.Oeilleres[ztOeilleres[0]].label;
          }
          break;
        }
      case 'discipline':
        filterDisplayValue = ZEturf.text.enums.TypeCourse[ZEturf.constant.ZEturfPro.TypeCourse[filterValue]];
        break;
      case 'psf':
        filterDisplayValue = ZEturf.text.zeturf_pro.type_piste[1];
        break;
    }
    return {
      filterValue: filterValue,
      label: "".concat(filterTitles[filterName], ": ").concat(filterDisplayValue)
    };
  };
  var handleSearch = function handleSearch(e) {
    var searchValue = e.target.value;
    var searchRegex = new RegExp(e.target.value, 'i'),
      suggestions = [];
    for (var _i = 0, _Object$entries = Object.entries(filterPropMapping); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Object$entries[_i], 2),
        propFilter = _Object$entries$_i[0],
        valuesKey = _Object$entries$_i[1];
      var _iterator = _createForOfIteratorHelper(props[valuesKey]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var availableValue = _step.value;
          var _getFormattedDisplayI = getFormattedDisplayInfos(propFilter, availableValue),
            filterValue = _getFormattedDisplayI.filterValue,
            label = _getFormattedDisplayI.label;
          if (label.match(searchRegex)) {
            suggestions.push({
              type: propFilter,
              label: label,
              value: filterValue
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setSuggestions(suggestions);
    setSearchValue(searchValue);
  };
  var getCurrentFilters = function getCurrentFilters() {
    var filters = [];
    for (var _i2 = 0, _Object$keys = Object.keys(filterPropMapping); _i2 < _Object$keys.length; _i2++) {
      var type = _Object$keys[_i2];
      if (props[type]) {
        var _getFormattedDisplayI2 = getFormattedDisplayInfos(type, props[type]),
          label = _getFormattedDisplayI2.label;
        filters.push({
          type: type,
          label: label
        });
      }
    }
    return filters;
  };
  var applyFilter = function applyFilter(suggestion) {
    props.handleFilterForm((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, suggestion.type, suggestion.value));
    setSuggestions([]);
    setSearchValue('');
  };
  var removeFilter = function removeFilter(filter) {
    props.handleFilterForm((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filter, null));
  };
  var handleBlur = function handleBlur() {
    if (document.querySelector('ul.suggestions:hover') === null) {
      setSuggestions([]);
    }
  };
  var currentFilters = getCurrentFilters();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    id: "form-perfs",
    className: currentFilters.length ? 'has-filter' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-control-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "field-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    type: "text",
    value: searchValue,
    placeholder: ZEturf.text.fiche_cheval.historique.bouton_filtrer,
    onBlur: function onBlur() {
      return handleBlur();
    },
    onChange: function onChange(e) {
      return handleSearch(e);
    },
    onFocus: function onFocus(e) {
      return handleSearch(e);
    }
  }), currentFilters.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "button",
    className: "reset",
 et();
    }
  }, ZEturf.text.fiche_cheval.historique.reset_form)), suggestions.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", {
    className: "suggestions"
  }, suggestions.map(function (suggestion, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
      key: key,
      onClick: function onClick() {
        return applyFilter(suggestion);
      }
    }, suggestion.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "form-control active-filters"
  }, currentFilters.map(function (filter, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      key: key,
      className: "filter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "label"
    }, filter.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "remove",
      onClick: function onClick() {
        return removeFilter(filter.type);
      }
    }));
  }))));
}
FicheChevalForm.propTypes = {
  availableFilters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  activeFilters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  perfs: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  handleFilterForm: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalHisto.js":
/*!****************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalHisto.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalHisto": function() { return /* binding */ FicheChevalHisto; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FicheChevalForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FicheChevalForm */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalForm.js");
/* harmony import */ var _FicheChevalPerfs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FicheChevalPerfs */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerfs.js");
/* harmony import */ var _styles_FicheChevalHisto_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/FicheChevalHisto.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalHisto.scss");
/* harmony import */ var _FicheChevalInfosCourse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FicheChevalInfosCourse */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfosCourse.js");
/* harmony import */ var _Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helper/TypeDepart */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/TypeDepart.js");
/* harmony import */ var _ConnectPrompt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConnectPrompt */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/ConnectPrompt.js");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









function FicheChevalHisto(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
      hippodromes: [],
      jockeys: [],
      ferrures: [],
      disciplines: [],
      distances: [],
      cordes: [],
      oeilleres: [],
      typesPiste: [],
      psfs: [],
      departs: []
    }),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    availableFilters = _useState2[0],
    setAvailableFilters = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
      hippodrome: null,
      jockey: null,
      ferrure: null,
      discipline: null,
      distance: null,
      corde: null,
      oeillere: null,
      typePiste: null,
      // PSF (Piste en sable fibré, sur les courses de galop)
      psf: null,
      depart: null
    }),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    activeFilters = _useState4[0],
    setActiveFilters = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var hippodromes = [],
      jockeys = [],
      ferrures = [],
      disciplines = [],
      distances = [],
      cordes = [],
      oeilleres = [],
      psfs = [],
      departs = [],
      typesPiste = [];
    for (var _i = 0, _Object$values = Object.values(props.perfs); _i < _Object$values.length; _i++) {
      var course = _Object$values[_i];
      if (course.autostart && departs.length === 0) {
        departs = [_Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_7__.TypeDepart.AUTOSTART, _Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_7__.TypeDepart.VOLTE];
      }
      if (course.psf !== undefined && course.psf && !psfs.includes(course.psf)) {
        psfs.push(course.psf);
      }
      if (course.type_piste !== undefined && course.type_piste && !typesPiste.includes(course.type_piste)) {
        typesPiste.push(course.type_piste);
      }
      if (course.nom_hippo !== undefined && !hippodromes.includes(course.nom_hippo)) {
        hippodromes.push(course.nom_hippo);
      }
      if (course.discipline !== undefined && !disciplines.includes(course.discipline)) {
        disciplines.push(course.discipline);
      }
      if (course.corde !== undefined && !cordes.includes(course.corde)) {
        cordes.push(course.corde);
      }
      for (var _i2 = 0, _Object$values2 = Object.values(course.cheval); _i2 < _Object$values2.length; _i2++) {
        var partant = _Object$values2[_i2];
        if (props.infos.cheval.nom_cheval !== partant.nom_cheval) {
          continue;
        }
        if (partant.nom_jockey !== undefined && !jockeys.includes(partant.nom_jockey)) {
          jockeys.push(partant.nom_jockey);
        }
        if (partant.fer !== undefined && !ferrures.map(function (ferrure) {
          return ferrure.id_fer;
        }).includes(partant.fer.id_fer)) {
          ferrures.push(partant.fer);
        }
        if (partant.distance !== undefined && !distances.includes(partant.distance)) {
          distances.push(partant.distance);
        }
        if (partant.oeil !== undefined && !oeilleres.includes(partant.oeil)) {
          oeilleres.push(partant.oeil);
        }
      }
    }
    setAvailableFilters({
      hippodromes: hippodromes,
      jockeys: jockeys,
      ferrures: ferrures,
      disciplines: disciplines,
      distances: distances,
      cordes: cordes,
      oeilleres: oeilleres,
      typesPiste: typesPiste,
      psfs: psfs,
      departs: departs
    });
  }, []);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_9__.FicheChevalContext),
    isLoggedIn = _useContext.isLoggedIn,
    badges = _useContext.badges;
  var showDepart = Object.values(props.perfs).find(function (c) {
    return c.autostart;
  }) !== undefined;
  if (badges !== null && badges !== void 0 && badges.zeturf_pro) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      id: "historique-perfs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FicheChevalInfosCourse__WEBPACK_IMPORTED_MODULE_6__.FicheChevalInfosCourse, {
      infos: props.infos,
      showDepart: showDepart,
      onFilter: function onFilter(filter, value) {
        return setActiveFilters(_objectSpread(_objectSpread({}, activeFilters), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filter, value)));
      }
    }), Object.values(props.perfs).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FicheChevalForm__WEBPACK_IMPORTED_MODULE_3__.FicheChevalForm, {
      perfs: props.perfs,
      hippodromes: availableFilters.hippodromes,
      jockeys: availableFilters.jockeys,
      ferrures: availableFilters.ferrures,
      disciplines: availableFilters.disciplines,
      distances: availableFilters.distances,
      cordes: availableFilters.cordes,
      oeilleres: availableFilters.oeilleres,
      typesPiste: availableFilters.typesPiste,
      psfs: availableFilters.psfs,
      departs: availableFilters.departs,
      hippodrome: activeFilters.hippodrome || null,
      jockey: activeFilters.jockey || null,
      ferrure: activeFilters.ferrure || null,
      discipline: activeFilters.discipline || null,
      distance: activeFilters.distance || null,
      corde: activeFilters.corde || null,
      oeillere: activeFilters.oeillere || null,
      typePiste: activeFilters.typePiste || null,
      psf: activeFilters.psf || null,
      depart: activeFilters.depart || null,
      handleFilterForm: function handleFilterForm(state) {
        return setActiveFilters(_objectSpread(_objectSpread({}, activeFilters), state));
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_FicheChevalPerfs__WEBPACK_IMPORTED_MODULE_4__.FicheChevalPerfs, {
      cheval: props.infos.cheval,
      perfs: props.perfs,
      hippodrome: activeFilters.hippodrome || null,
      jockey: activeFilters.jockey || null,
      ferrure: activeFilters.ferrure || null,
      discipline: activeFilters.discipline || null,
      distance: activeFilters.distance || null,
      corde: activeFilters.corde || null,
      oeillere: activeFilters.oeillere || null,
      typePiste: activeFilters.typePiste || null,
      psf: activeFilters.psf || null,
      depart: activeFilters.depart || null,
      showDepart: showDepart,
      onFilter: function onFilter(filter, value) {
        return setActiveFilters(_objectSpread(_objectSpread({}, activeFilters), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filter, value)));
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "inedit"
    }, ZEturf.text.fiche_cheval.historique.cheval_inedit));
  }
  if (isLoggedIn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      id: "historique-perfs"
    }, ZEturf.text.fiche_cheval.historique.missing_badge, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      id: "bet-btn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", {
      href: "/".concat(ZEturf.constant.lang)
    }, ZEturf.text.fiche_cheval.historique.bet_now)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ConnectPrompt__WEBPACK_IMPORTED_MODULE_8__.ConnectPrompt, null);
}
FicheChevalHisto.propTypes = {
  infos: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object),
  perfs: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().object)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfo.js":
/*!***************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfo.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalInfo": function() { return /* binding */ FicheChevalInfo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");
/* harmony import */ var _Helper_Partant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helper/Partant */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/Partant.js");



function FicheChevalInfo() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_1__.FicheChevalContext),
    currentPartant = _useContext.currentPartant,
    course = _useContext.course;
  var handicap = '';
  if (currentPartant.deferes) {
    handicap = (0,_Helper_Partant__WEBPACK_IMPORTED_MODULE_2__.getPictoFer)(currentPartant.deferes);
  } else if (currentPartant.oeilleres) {
    handicap = (0,_Helper_Partant__WEBPACK_IMPORTED_MODULE_2__.getPictoOeilleres)(currentPartant.oeilleres);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "infos-partant"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "course-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "course-infos-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "red"
  }, ZEturf.text.fiche_cheval.infos.course.titre)), currentPartant.cheval.casaque && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "casaque",
    src: "/casaque/".concat(currentPartant.cheval.casaque)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "course-infos-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.course.numero_cheval), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.numero)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.course.discipline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ZEturf.text.enums.TypeCourse[course.type])), course.distance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.course.distance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, course.distance, "m")), handicap !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.course.handicap), handicap), currentPartant.cheval.robe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.robe), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.cheval.robe)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "cheval-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "cheval-infos-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "red"
  }, ZEturf.text.fiche_cheval.infos.cheval.titre)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "cheval-infos-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.sexe_age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.cheval.sexe_age)), currentPartant.cheval.origines && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.origines), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.cheval.origines)), currentPartant.cheval.proprietaire && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.proprietaire), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.cheval.proprietaire)), currentPartant.cheval.entraineur && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.entraineur), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.cheval.entraineur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.enums.TypeCourse[course.type] === 'Attelé' ? ZEturf.text.fiche_cheval.infos.cheval.driver : ZEturf.text.fiche_cheval.infos.cheval.jockey), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.jockey)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "carriere-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "carriere-infos-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "red"
  }, ZEturf.text.fiche_cheval.infos.carriere.titre)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "carriere-infos-content"
  }, currentPartant.gains !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.carriere.gains), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    className: "bigtext"
  }, currentPartant.gains, " \u20AC"))), currentPartant.musique && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.carriere.musique), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, currentPartant.musique)))));
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfosCourse.js":
/*!**********************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfosCourse.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalInfosCourse": function() { return /* binding */ FicheChevalInfosCourse; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_FicheChevalInfosCourse_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/FicheChevalInfosCourse.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalInfosCourse.scss");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");
/* harmony import */ var _FicheChevalPerfs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FicheChevalPerfs */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerfs.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





function FicheChevalInfosCourse(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_3__.FicheChevalContext),
    currentPartant = _useContext.currentPartant;

  // Pour reconstruire un tableau de perf a passer au composant au bon format
  var buildCourseDuJourPerfData = function buildCourseDuJourPerfData() {
    var _cheval$fer;
    var perfCmpProps = {
      hippodrome: null,
      jockey: null,
      ferrure: null,
      discipline: null,
      distance: null,
      corde: null,
      oeillere: null,
      typePiste: null,
      psf: null,
      depart: null,
      isCurrentCourse: true,
      onFilter: props.onFilter,
      showDepart: props.showDepart
    };
    var cheval = _objectSpread(_objectSpread({}, props.infos.cheval), {}, {
      distance: props.infos.distance
    });
    if ((_cheval$fer = cheval.fer) !== null && _cheval$fer !== void 0 && _cheval$fer.url) {
      cheval.fer = {
        alt: cheval.fer.nom,
        id_fer: cheval.fer.id_fer,
        img: cheval.fer.url
      };
    }
    perfCmpProps.cheval = cheval;
    perfCmpProps.perfs = {
      1: _objectSpread(_objectSpread({}, props.infos), {}, {
        cheval: {
          1: cheval
        }
      })
    };
    return perfCmpProps;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "current-course-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "title"
  }, ZEturf.text.fiche_cheval.historique.course_du_jour), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "horse-infos"
  }, currentPartant.cheval.casaque && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    className: "casaque",
    src: "/casaque/".concat(currentPartant.cheval.casaque)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "infos"
  }, props.infos.cheval.nom_entraineur && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.entraineur, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.infos.cheval.nom_entraineur)), props.infos.cheval.nom_proprietaire && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.proprietaire, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.infos.cheval.nom_proprietaire)), (props.infos.cheval.sexe || props.infos.cheval.age) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.sexe_age, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, [props.infos.cheval.sexe, props.infos.cheval.age].filter(function (c) {
    return c;
  }).join('/'))), props.infos.cheval.robe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.robe, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.infos.cheval.robe)), props.infos.cheval.parents && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.origines, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.infos.cheval.parents)), props.infos.cheval.gains && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.carriere.gains, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.infos.cheval.gains, " \u20AC")), props.infos.cheval.musique && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.carriere.musique, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.infos.cheval.musique)), props.infos.cheval.record && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.infos.cheval.record, " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, props.infos.cheval.record)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FicheChevalPerfs__WEBPACK_IMPORTED_MODULE_4__.FicheChevalPerfs, buildCourseDuJourPerfData()));
}
FicheChevalInfosCourse.propTypes = {
  onFilter: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  infos: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  showDepart: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfosPartants.js":
/*!************************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfosPartants.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalInfosPartants": function() { return /* binding */ FicheChevalInfosPartants; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_FicheChevalInfosCourse_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/FicheChevalInfosCourse.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalInfosCourse.scss");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");
/* harmony import */ var _Helper_Partant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Helper/Partant */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/Partant.js");
/* harmony import */ var _Helper_TypeCourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helper/TypeCourse */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/TypeCourse.js");






function FicheChevalInfosPartants() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_3__.FicheChevalContext),
    currentPartant = _useContext.currentPartant,
    course = _useContext.course,
    setCurrentPartant = _useContext.setCurrentPartant,
    cotes = _useContext.cotes;
  var hasDistance = course.participants.find(function (c) {
    return c.distance;
  });
  var parsedCotes = {};
  var displayCotes = false;
  for (var _i = 0, _Object$entries = Object.entries(cotes); _i < _Object$entries.length; _i++) {
    var _cotePartant$odds;
    var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
      numero = _Object$entries$_i[0],
      cotePartant = _Object$entries$_i[1];
    var hasCote = (cotePartant === null || cotePartant === void 0 ? void 0 : (_cotePartant$odds = cotePartant.odds) === null || _cotePartant$odds === void 0 ? void 0 : _cotePartant$odds.SG) && cotePartant.odds.SG !== 300;
    displayCotes || (displayCotes = hasCote);
    parsedCotes[numero] = hasCote ? cotePartant.odds.SG : 'NC';
  }
  var getParticipantRow = function getParticipantRow(participant) {
    var _participant$jockey, _participant$jockey2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
      key: participant.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
 ero);
      },
      className: participant.numero === currentPartant.numero ? 'current' : ''
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      className: "center"
    }, participant.numero), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, participant.cheval.nom, (0,_Helper_Partant__WEBPACK_IMPORTED_MODULE_4__.getPictoFer)(participant.deferes), !_Helper_TypeCourse__WEBPACK_IMPORTED_MODULE_5__.TypeCourse.isTrot(course.type) && (0,_Helper_Partant__WEBPACK_IMPORTED_MODULE_4__.getPictoOeilleres)(participant.oeilleres)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      className: "nom_jockey"
    }, (_participant$jockey = participant.jockey) === null || _participant$jockey === void 0 ? void 0 : _participant$jockey.toLowerCase()), displayCotes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      className: "center"
    }, parsedCotes[participant.numero]), hasDistance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, participant.distance, "m")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      className: "detail-mobile"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      colSpan: "4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "nom_jockey"
    }, (_participant$jockey2 = participant.jockey) === null || _participant$jockey2 === void 0 ? void 0 : _participant$jockey2.toLowerCase()))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
    className: "fond-gris-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    className: "center"
  }, ZEturf.text.fiche_cheval.historique.numero), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, ZEturf.text.fiche_cheval.infos.cheval.titre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    className: "nom_jockey"
  }, ZEturf.text.fiche_cheval.historique.jockey_driver), displayCotes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
    className: "center"
  }, ZEturf.text.fiche_cheval.historique.cote), hasDistance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", null, ZEturf.text.fiche_cheval.historique.distance))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, course.participants.map(function (partant) {
    return getParticipantRow(partant);
  })));
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalNotes.js":
/*!****************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalNotes.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalNotes": function() { return /* binding */ FicheChevalNotes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ChevalNote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChevalNote */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/ChevalNote.js");
/* harmony import */ var _styles_FicheChevalNotes_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/FicheChevalNotes.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalNotes.scss");
/* harmony import */ var _NoteForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NoteForm */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/NoteForm.js");
/* harmony import */ var _Helper_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Helper/Api */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Api.js");
/* harmony import */ var _Helper_Favori__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Helper/Favori */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Favori.js");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







function FicheChevalNotes() {
  var _currentFavori$notes;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    editingNote = _useState2[0],
    setEditingNote = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_10__.FicheChevalContext),
    favoris = _useContext.favoris,
    currentFavori = _useContext.currentFavori,
    currentPartant = _useContext.currentPartant,
    setCurrentFavori = _useContext.setCurrentFavori;
  var removeNote = function removeNote(noteId) {
    var _remainingNotes$, _remainingNotes$2;
    var remainingNotes = currentFavori.notes.filter(function (n) {
      return n.id !== noteId;
    });
    setCurrentFavori(_objectSpread(_objectSpread({}, currentFavori), {}, {
      notes: remainingNotes,
      texte: (_remainingNotes$ = remainingNotes[0]) === null || _remainingNotes$ === void 0 ? void 0 : _remainingNotes$.texte
    }));
    if ((editingNote === null || editingNote === void 0 ? void 0 : editingNote.id) === noteId) {
      setEditingNote(null);
    }
    FavorisWrapper.updateFavoriProperties(currentPartant.cheval.id, {
      texte: (_remainingNotes$2 = remainingNotes[0]) === null || _remainingNotes$2 === void 0 ? void 0 : _remainingNotes$2.texte
    });
  };
  var getFavoriData = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chevalId, favoris) {
      var fav;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            fav = null;
            if (!(0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_9__.isFavori)(chevalId, favoris)) {
              _context.next = 7;
              break;
            }
            fav = FavorisWrapper.getFavori(chevalId);
            if (!(fav === null || fav.notes === undefined)) {
              _context.next = 7;
              break;
            }
            _context.next = 6;
            return (0,_Helper_Api__WEBPACK_IMPORTED_MODULE_8__.callGet)('zeturf_zeturfapi_mobile_favori_getfavori', {
              chevalId: chevalId
            });
          case 6:
            fav = _context.sent;
          case 7:
            return _context.abrupt("return", fav);
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })ments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getFavoriData(currentPartant.cheval.id, favoris).then(function (favori) {
      return setCurrentFavori(favori);
    });
  }, [currentPartant]);
  var noteList;
  if (currentFavori !== null && currentFavori !== void 0 && (_currentFavori$notes = currentFavori.notes) !== null && _currentFavori$notes !== void 0 && _currentFavori$notes.length) {
    noteList = currentFavori.notes.map(function (note) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ChevalNote__WEBPACK_IMPORTED_MODULE_5__.ChevalNote, {
        favori: currentFavori,
        onRemove: function onRemove() {
          return removeNote(note.id);
        },
        editNote: function editNote(note) {
          return setEditingNote(note);
        },
        key: note.id || note.tmpId,
        note: note
      });
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    id: "fiche-cheval-notes"
  }, noteList, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_NoteForm__WEBPACK_IMPORTED_MODULE_7__.NoteForm, {
    note: editingNote,
    resetEditingNote: function resetEditingNote() {
      return setEditingNote(null);
    },
    cheval: currentPartant.cheval
  }));
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerf.js":
/*!***************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerf.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalPerf": function() { return /* binding */ FicheChevalPerf; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FicheChevalPerfResultat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FicheChevalPerfResultat */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerfResultat.js");
/* harmony import */ var _Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Helper/ZEturfPro */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/ZEturfPro.js");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");
/* harmony import */ var _FicheChevalInfosPartants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FicheChevalInfosPartants */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalInfosPartants.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






function FicheChevalPerf(props) {
  var filterMapping = {
    nom_hippo: 'hippodrome',
    nom_jockey: 'jockey',
    fer: 'ferrure',
    discipline: 'discipline',
    distance: 'distance',
    corde: 'corde',
    id_oeil: 'oeillere',
    type_piste: 'typePiste',
    psf: 'psf',
    autostart: 'depart'
  };
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_4__.FicheChevalContext),
    course = _useContext.course,
    currentPartant = _useContext.currentPartant;
  var getAdversairesDuJour = function getAdversairesDuJour() {
    var nomsChevaux = Object.values(props.coursheval);
    });
    var currentAdversaires = [];
    var _iterator = _createForOfIteratorHelper(course.participants),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var p = _step.value;
        if (p.cheval.nom !== currentPartant.cheval.nom && nomsChevaux.indexOf(p.cheval.nom) !== -1) {
          currentAdversaires.push({
            nom: p.cheval.nom,
            numero: p.numero
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return currentAdversaires;
  };
  var toggleDetails = function toggleDetails(event) {
    event.preventDefault();
    var detailsNode = event.target.closest('tr').nextElementSibling.nextElementSibling;
    detailsNode.style.display = detailsNode.style.display !== 'table-row' ? 'table-row' : 'none';
    event.target.classList.toggle('expanded');
  };
  var hasAnalyse = props.course.analyse !== undefined || Object.values(props.course.cheval).find(function (c) {
    return c.analyse;
  }) !== undefined;
  var getChevalPropertyData = function getChevalPropertyData() {
    var propertyMapData = {};
    var centered = ['discipline', 'classement', 'nb_partants', 'fer', 'id_oeil', 'corde', 'psf', 'autostart'];
    var _iterator2 = _createForOfIteratorHelper(props.finalFields),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var property = _step2.value;
        var classNames = [property];
        var value = props.perf[property];
        var displayedValue = value;
        var filterField = filterMapping[property];
        if (filterField) {
          classNames.push('filter');
        }
        if (centered.includes(property)) {
          classNames.push('center');
        }
        if (value) {
          switch (property) {
            case 'nom_hippo':
              displayedValue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, value, hasAnalyse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                className: "analyse fa-solid fa-message-dots"
              }));
              break;
            case 'classement':
              displayedValue = (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_3__.formatClassement)(value);
              break;
            case 'fer':
              displayedValue = (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_3__.getPictoFer)(value);
              break;
            case 'discipline':
              displayedValue = ZEturf.text.enums.TypeCourse[ZEturf.constant.ZEturfPro.TypeCourse[value]];
              break;
            case 'type_piste':
              value = parseInt(value);
              displayedValue = ZEturf.text.zeturf_pro.type_piste[value];
              break;
            case 'id_oeil':
              displayedValue = (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_3__.getPictoOeilleres)(value);
              break;
            case 'distance':
              value = parseInt(value);
              displayedValue += 'm';
              break;
            case 'nom_jockey':
              displayedValue = value.toLowerCase();
              break;
          }
        }
        var attributes = {
          className: classNames.join(' ')
        };
        if (filterField) {
          attributes.title = ZEturf.text.fiche_cheval.historique.appliquer_filtre;
        }
        propertyMapData[property] = {
          attributes: attributes,
          displayedValue: displayedValue,
          filterValue: value,
          filterField: filterField
        };
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return propertyMapData;
  };
  var getMobilePerfRow = function getMobilePerfRow(propertyMapData, highlightedClass) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      className: "detail-mobile".concat(highlightedClass)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      colSpan: "11"
    }, ['nom_jockey', 'distance', 'nb_partants', 'corde', 'fer', 'id_oeil', 'type_piste', 'psf'].map(function (prop, key) {
      var _ref = propertyMapData[prop] || {},
        displayedValue = _ref.displayedValue,
        filterField = _ref.filterField,
        filterValue = _ref.filterValue,
        attributes = _ref.attributes;
      return displayedValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
        key: key,
   e);
        }
      }), prop === 'corde' ? " ".concat(ZEturf.text.fiche_cheval.historique.corde, ": ") : '', propertyMapData[prop].displayedValue, prop === 'nb_partants' ? " ".concat(ZEturf.text.fiche_cheval.historique.nb_partants) : '');
    }), hasAnalyse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "analyse fa-solid fa-message-dots"
    })));
  };
  var propertyMapData = getChevalPropertyData();
  var adversairesDuJour = getAdversairesDuJour();
  var highlightedClass = adversairesDuJour.length > 0 ? ' highlighted' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
    className: "item".concat(highlightedClass)
  }, props.finalFields.map(function (field, key) {
    var _propertyMapData$fiel = propertyMapData[field],
      attributes = _propertyMapData$fiel.attributes,
      displayedValue = _propertyMapData$fiel.displayedValue,
      filterValue = _propertyMapData$fiel.filterValue,
      filterField = _propertyMapData$fiel.filterField;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: key
    }, attributes, {
 lue);
      }
    }), displayedValue);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
    className: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    className: "btn btn-plus",
    onClick: function onClick(event) {
      return toggleDetails(event);
    }
  }))), getMobilePerfRow(propertyMapData, highlightedClass), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
    className: "item-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
    colSpan: "11"
  }, !props.isCurrentCourse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FicheChevalPerfResultat__WEBPACK_IMPORTED_MODULE_2__.FicheChevalPerfResultat, {
    adversairesDuJour: adversairesDuJour,
    cheval: props.cheval,
    course: props.course
  }), props.isCurrentCourse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FicheChevalInfosPartants__WEBPACK_IMPORTED_MODULE_5__.FicheChevalInfosPartants, null))));
}
FicheChevalPerf.propTypes = {
  cheval: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  course: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  finalFields: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),
  perf: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  isCurrentCourse: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  onFilter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerfResultat.js":
/*!***********************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerfResultat.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalPerfResultat": function() { return /* binding */ FicheChevalPerfResultat; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helper/ZEturfPro */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/ZEturfPro.js");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");




function FicheChevalPerfResultat(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_2__.FicheChevalContext),
    setCurrentPartant = _useContext.setCurrentPartant;
  var displayDistance = props.course.ecart_arrivee || Object.values(props.course.cheval).find(function (c) {
    return c.distance;
  }) !== undefined;
  var displayTemps = Object.values(props.course.cheval).find(function (c) {
    return c.temps;
  }) !== undefined;
  var displayCorde = Object.values(props.course.cheval).find(function (c) {
    return c.corde;
  }) !== undefined;
  var displayHandicap = Object.values(props.course.cheval).find(function (c) {
    return c.handicap;
  }) !== undefined;
  var displayPoids = Object.values(props.course.cheval).find(function (c) {
    return c.poids;
  }) !== undefined;
  var getCurrentAdversaire = function getCurrentAdversaire(chevalArrive) {
    return props.adversairheval);
    });
  };
  var getResultRow = function getResultRow(partant, chKey) {
    var _props$cheval, _partant$cote;
    var classNames = ['cheval'];
    if (((_props$cheval = props.cheval) === null || _props$cheval === void 0 ? void 0 : _props$cheval.nom_cheval) === (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_1__.normalizeNomCheval)(partant.nom_cheval)) {
      classNames.push('red');
    }
    var distance = displayDistance && partant.distance ? "".concat(partant.distance, "m") : (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_1__.formatDistance)(partant.ecart);
    var cote = partant.cote ? (_partant$cote = partant.cote) === null || _partant$cote === void 0 ? void 0 : _partant$cote.replace('./1', '') : 'nc';
    var currentAdversaire = getCurrentAdversaire(partant);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: chKey
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: currentAdversaire ? 'highlighted' : '',
 null;
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "classement"
    }, (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_1__.formatClassement)(partant.classement)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: classNames.join(' ')
    }, partant.num_cheval, " - ", partant.nom_cheval, (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_1__.getPictoFer)(partant.fer), (0,_Helper_ZEturfPro__WEBPACK_IMPORTED_MODULE_1__.getPictoOeilleres)(partant.id_oeil)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "nom_jockey"
    }, partant.nom_jockey.toLowerCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "cote center"
    }, cote), displayDistance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, distance), displayTemps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, partant.temps), displayPoids && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "center poids"
    }, partant.poids && "".concat(partant.poids, " kg")), displayCorde && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "center corde"
    }, partant.corde), displayHandicap && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "center handicap"
    }, partant.handicap)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      className: "detail-mobile"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: "6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "nom_jockey"
    }, partant.nom_jockey.toLowerCase()), partant.cote && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, ZEturf.text.fiche_cheval.historique.cote, ": ", cote), partant.poids && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, ZEturf.text.fiche_cheval.historique.poids, ": ", partant.poids, " kg"), partant.corde && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, ZEturf.text.fiche_cheval.historique.corde, ": ", partant.corde), partant.handicap && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, ZEturf.text.fiche_cheval.historique.handicap, ": ", partant.handicap))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "extra-infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "infos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, props.course.nom_course)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info separated"
  }, props.course.terrain && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ZEturf.text.fiche_cheval.historique.terrain, " : ", props.course.terrain), props.course.nom_entraineur && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ZEturf.text.fiche_cheval.historique.entraineur, " : ", props.course.nom_entraineur), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.course.nb_partants, " ", ZEturf.text.fiche_cheval.historique.nb_partants), props.course.temps_min && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ZEturf.text.fiche_cheval.historique.temps_course, " : ", props.course.temps_min)), props.course.genre && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info"
  }, props.course.genre))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: "fond-gris-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, ZEturf.text.fiche_cheval.historique.classement), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, ZEturf.text.fiche_cheval.infos.cheval.titre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "nom_jockey"
  }, ZEturf.text.fiche_cheval.historique.jockey_driver), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "cote center"
  }, ZEturf.text.fiche_cheval.historique.cote), displayDistance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, ZEturf.text.fiche_cheval.historique.distance), displayTemps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, ZEturf.text.fiche_cheval.historique.reduction_km), displayPoids && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "center poids"
  }, ZEturf.text.fiche_cheval.historique.poids), displayCorde && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "center corde"
  }, ZEturf.text.fiche_cheval.historique.corde), displayHandicap && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "center handicap"
  }, ZEturf.text.fiche_cheval.historique.handicap))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Object.values(props.course.cheval).map(function (partant, key) {
    return getResultRow(partant, key);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "analyses"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "infos"
  }, Object.values(props.course.cheval).map(function (cheval, key) {
    if (cheval.analyse) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "info analyse",
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "titre"
      }, cheval.nom_cheval, " : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        dangerouslySetInnerHTML: {
          __html: cheval.analyse
        }
      }));
    }
    return null;
  }), props.course.analyse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info analyse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "titre"
  }, ZEturf.text.fiche_cheval.historique.analyse, ": "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: props.course.analyse
    }
  })))));
}
FicheChevalPerfResultat.propTypes = {
  cheval: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  course: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  adversairesDuJour: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerfs.js":
/*!****************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerfs.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalPerfs": function() { return /* binding */ FicheChevalPerfs; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FicheChevalPerf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FicheChevalPerf */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalPerf.js");
/* harmony import */ var _Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helper/TypeDepart */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/TypeDepart.js");




function FicheChevalPerfs(props) {
  var sortedFields = {
    'date_reunion': '',
    'nom_hippo': '',
    'classement': ZEturf.text.fiche_cheval.historique.classement,
    'discipline': '',
    'distance': ZEturf.text.fiche_cheval.historique.distance,
    'nom_jockey': ZEturf.text.fiche_cheval.historique.jockey_driver,
    'id_oeil': '',
    'fer': '',
    'corde': ZEturf.text.fiche_cheval.historique.corde,
    'type_piste': ZEturf.text.fiche_cheval.historique.type_piste,
    'psf': ZEturf.text.fiche_cheval.historique.psf,
    'autostart': ZEturf.text.fiche_cheval.historique.depart
  };
  var deltaFiltreDistance = 100;
  var getChevalInfos = function getChevalInfos(course) {
    return Object.values(course.ccheval;
    }).shift();
  };
  var getFilteredCourses = function getFilteredCourses() {
    return Object.values(props.perfs).filter(function (course) {
      var _cheval$fer;
      var cheval = getChevalInfos(course);
      if (props.depart !== null) {
        var isAutostart = _Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_2__.TypeDepart.isAutostart(course.autostart);
        if (props.depart === _Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_2__.TypeDepart.AUTOSTART && !isAutostart || props.depart === _Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_2__.TypeDepart.VOLTE && isAutostart) {
          return false;
        }
      }
      if (props.psf !== null && course.psf !== 'X') {
        return false;
      }
      if (props.typePiste !== null && parseInt(course.type_piste) !== props.typePiste) {
        return false;
      }
      if (props.hippodrome !== null && course.nom_hippo !== props.hippodrome) {
        return false;
      }
      if (props.discipline !== null && course.discipline !== props.discipline) {
        return false;
      }
      if (props.distance !== null) {
        var currentDistance = parseInt(cheval.distance),
          minDistance = props.distance - deltaFiltreDistance,
          maxDistance = props.distance + deltaFiltreDistance;
        if (currentDistance < minDistance || currentDistance > maxDistance) {
          return false;
        }
      }
      return !(props.jockey !== null && cheval.nom_jockey !== props.jockey || props.ferrure !== null && parseInt((_cheval$fer = cheval.fer) === null || _cheval$fer === void 0 ? void 0 : _cheval$fer.id_fer) !== parseInt(props.ferrure.id_fer) || props.corde !== null && ![cheval.corde, course.corde].includes(props.corde) || props.oeillere !== null && cheval.id_oeil !== props.oeillere);
    });
  };
  var buildPerfsTable = function buildPerfsTable(courses) {
    var perfs = {};
    var courseMap = ['date_reunion', 'nom_hippo', 'discipline', 'distance', 'allocation', 'corde', 'type_piste', 'psf', 'autostart'];
    var chevalMap = ['classement', 'distance', 'nom_jockey', 'id_oeil', 'fer'];
    courses.map(function (course, key) {
      var cheval = getChevalInfos(course);
      var perf = {};
      courseMap.map(function (key) {
        switch (key) {
          case 'autostart':
            if (props.showDepart) {
              perf[key] = _Helper_TypeDepart__WEBPACK_IMPORTED_MODULE_2__.TypeDepart.getLabelFromAutostartValue(course[key]);
            }
            break;
          case 'psf':
            if (course[key]) {
              perf[key] = ZEturf.text.zeturf_pro.type_piste[1];
            }
            break;
          case 'date_reunion':
            perf[key] = course[key].s            }).join('/');
            break;
          default:
            if (course[key]) {
              perf[key] = course[key];
            }
            break;
        }
      });
      chevalMap.map(function (key) {
        if (cheval && cheval[key] !== undefined) {
          perf[key] = key === 'corde' && course[key] ? "".concat(cheval[key], " (").concat(course[key], ")") : cheval[key];
        }
      });
      perfs[key] = perf;
    });
    return perfs;
  };
  var getHeaderCell = function getHeaderCell(key, field) {
    var classNames = [field];
    if (['discipline', 'classement', 'fer', 'id_oeil', 'psf', 'autostart', 'corde'].includes(field)) {
      classNames.push('center');
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      key: key,
      className: classNames.join(' ')
    }, sortedFields[field]);
  };
  var filteredCourses = getFilteredCourses();
  var perfs = buildPerfsTable(filteredCourses);
  var finalFields = Object.keys(sortedFields).filter(function (field) {
    return Object.values(efined;
    }).length !== 0;
  });
  if (finalFields.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, ZEturf.text.fiche_cheval.historique.aucun_resultat);
  }
  var expandCloseAll = function expandCloseAll() {
    var hasUnexpanded = document.querySelector('#perfs-infos table tr .btn-plus:not(.expanded)') !== null;
    var selector = '#perfs-infos table tr .btn-plus';
    selector += hasUnexpanded ? ':not(.expanded)' : '.expanded';
    document.querySelectorAll(selector).forEach(function (el) {
      return el.click();
    });
  };
  var idSuffix = props.isCurrentCourse ? '-today' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "perfs-infos".concat(idSuffix)
  }, !props.isCurrentCourse && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "title title-perf"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, ZEturf.text.fiche_cheval.historique.performances), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "btn",
    onClick: function onClick() {
      return expandCloseAll();
    }
  }, ZEturf.text.fiche_cheval.historique.ouvrirFermerTout))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    id: "perfs-infos-content".concat(idSuffix)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: props.isCurrentCourse ? 'fond-rouge' : 'fond-gris-light'
  }, fi, field);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, filteredCourses.map(function (course, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FicheChevalPerf__WEBPACK_IMPORTED_MODULE_1__.FicheChevalPerf, {
      key: key,
      cheval: getChevalInfos(course),
      course: course,
      finalFields: finalFields,
      perf: perfs[key],
      isCurrentCourse: props.isCurrentCourse,
  lue);
      }
    });
  }))));
}
FicheChevalPerfs.propTypes = {
  cheval: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  perfs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  hippodrome: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  jockey: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  ferrure: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  discipline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  distance: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  corde: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  oeillere: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  typePiste: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  psf: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  depart: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  isCurrentCourse: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onFilter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  showDepart: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalSelector.js":
/*!*******************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalSelector.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FicheChevalSelector": function() { return /* binding */ FicheChevalSelector; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FicheCheval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FicheCheval */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheCheval.js");
/* harmony import */ var _styles_FicheChevalSelector_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/FicheChevalSelector.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalSelector.scss");
/* harmony import */ var _styles_FicheCheval_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/FicheCheval.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheCheval.scss");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");
/* harmony import */ var _Helper_Favori__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Helper/Favori */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Favori.js");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







function FicheChevalSelector(props) {
  var _props$inSearch;
  var isLoggedIn = UserData.isLoggedIn();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    url = _useState2[0],
    setUrl = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
      favoris: [],
      notifications: [],
      currentPartant: null,
      currentFavori: null,
      course: props.data.course,
      cotes: props.data.cotes,
      inSearch: (_props$inSearch = props.inSearch) !== null && _props$inSearch !== void 0 ? _props$inSearch : false,
      badges: UserData.get(UserData.keys.BADGES),
      isLoggedIn: isLoggedIn
    }),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    sharedData = _useState4[0],
    setSharedData = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    initFavoris();
    setCurrentPartant(props.data.routeParams.numP);
    document.querySelector('#fichecheval').classList.add('initialized');
    $('li .tooltip').tooltip({
      track: true
    });
    window.onpopstate = function (e) {
      var _e$state;
      if (e !== null && e !== void 0 && (_e$state = e.state) !== null && _e$state !== void 0 && _e$state.numP) {
        setCurrentPartant(e.state.numP, false);
      }
    };
  }, props.inSearch ? [props.data] : []);
  var initFavoris = function initFavoris() {
    var storedFavoris = FavorisWrapper.getFavoris();
    setSharedData(function (currentState) {
      return _objectSpread(_objectSpread({}, currentState), {}, {
        favoris: Object.keys(storedFavoris.cheval || {}).map(function (id) {
          return parseInt(id);
        }),
        notifications: Object.entries(storedFavoris.cheval || {}).filter(function (_ref) {
          var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref, 2),
            cheval = _ref2[1];
          return cheval.notification;
 ]);
        })
      });
    });
  };
  var setCurrentPartant = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(numero) {
      var pushState,
        routeParams,
        ficheChevalUrl,
        partantUrl,
        currentUrl,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pushState = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
            routeParams = _objectSpread(_objectSpread({}, props.data.routeParams), {}, {
              numP: numero
            });
            _context.next = 4;
            return ZERouter.generate('zeturf_frontoffice_cheval_fiche', routeParams);
          case 4:
            ficheChevalUrl = _context.sent;
            _context.next = 7;
            return ZERouter.generate('zeturf_frontoffice_cheval_partant', routeParams);
          case 7:
            partantUrl = _context.sent;
            if (ficheChevalUrl) {
              setUrl(ficheChevalUrl);
            }
            setSharedData(function (currentSharedData) {
              return _objectSpread(_objectSpread({}, currentSharedData), {}, {
                currentPartant: props.data.course.part            })
              });
            });
            if (partantUrl && pushState && !props.inSearch) {
              currentUrl = partantUrl + document.location.hash;
              if (currentUrl !== document.location.href) {
                history.pushState(routeParams, '', currentUrl);
              }
            }
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function setCurrentPartant(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var setCu;
    });
  };
  var nav = function nav(direction) {
    var numero = direction === 'prev' ? sharedData.currentPartant.numero - 1 : sharedData.currentPartant.numero + 1;
    var numerosDisponibles = props.data.course.participants.map(function (p) {
      return p.numero1 - n2;
    });
    if (!numerosDisponibles.includes(numero)) {
      numero = direction === 'prev' ? numerosDisponibles.pop() : numerosDisponibles.shift();
    }
    setCurrentPartant(numero);
  };
  var requestRemoveFavori = function requestRemoveFavori(cheval) {
    (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_10__.removeFavoriWithConfirm)(cheval).then(function () {
      var favoris = sharedData.favoris.filter(function (id) {
        return id !== cheval.id;
      });
      var notifications = sharedData.notifications.filter(function (id) {
        return id !== cheval.id;
      });
      setSharedData(function (currentSharedData) {
        return _objectSpread(_objectSpread({}, currentSharedData), {}, {
          favoris: favoris,
          notifications: notifications,
          currentFavori: null
        });
      });
    });
  };
  var toggleFavori = function toggleFavori(cheval) {
    if (!isLoggedIn) {
      Modal.displayModalNonConnecte();
      return;
    }
    var favoris = [];
    var promise;
    var notifications = sharedData.notifications;
    if ((0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_10__.isFavori)(cheval.id, sharedData.favoris)) {
      promise = (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_10__.removeFavori)(cheval.id);
      favoris = sharedData.favoris.filter(function (id) {
        return id !== cheval.id;
      });
      notifications = sharedData.notifications.filter(function (id) {
        return id !== cheval.id;
      });
    } else {
      promise = (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_10__.addFavori)(cheval.id);
      favoris = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sharedData.favoris), [cheval.id]);
    }
    return promise.then(function (chevalData) {
        });
      });
    });
  };
  var updateNotification = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cheval, enable, enableConsentement) {
      var notifications, favoris, favorisNotificationUrl, body, jsonResponse, chevalData, programmeInfos, nbFavoris;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (isLoggedIn) {
              _context2.next = 3;
              break;
            }
            Modal.displayModalNonConnecte();
            return _context2.abrupt("return");
          case 3:
            notifications = sharedData.notifications, favoris = sharedData.favoris;
            _context2.next = 6;
            return ZERouter.generate('zeturf_frontoffice_favoris_notification');
          case 6:
            favorisNotificationUrl = _context2.sent;
            if (!favorisNotificationUrl) {
              _context2.next = 16;
              break;
            }
            body = new FormData();
            body.append('cheval', cheval.id);
            body.append('notification', enable);
            if (enableConsentement) {
              body.append('enableConsentement', 1);
            }
            _context2.next = 14;
            return wrapJsonFetch(fetch(favorisNotificationUrl, {
              method: 'POST',
              body: body
            }));
          case 14:
            jsonResponse = _context2.sent;
            if (jsonResponse) {
              if (jsonResponse.status === 'success') {
                chevalData = jsonResponse.chevalData;
                notifications = (chevalData === null || chevalData === void 0 ? void 0 : chevalData.notification) === true ? [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sharedData.notifications), [cheval.id]) : sharedData.notific            });
                if (!sharedData.favoris.includes(cheval.id)) {
                  favoris = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(sharedData.favoris), [cheval.id]);
                }
                programmeInfos = chevalData.programmeInfos;
                delete chevalData.programmeInfos;
                nbFavoris = !(0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_10__.isFavori)(cheval.id, sharedData.favoris) ? FavorisWrapper.getFavoris().nbFavoris + 1 : null;
                FavorisWrapper.updateFavoris((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, cheval.id, chevalData), programmeInfos !== null && programmeInfos !== void 0 ? programmeInfos : {}, null, nbFavoris);
              } else if (jsonResponse.status === 'consentement') {
                Modal.openModalHTML(ZEturf.text.fiche_cheval.notification.consentement.titre, ZEturf.text.fiche_cheval.notification.consentement.description, [_objectSpread(_objectSpread({}, Modal.buttons.confirm), {}, {
                  callback: function callback() {
                    updateNotification(cheval, true, true);
                    Modal.close();
                  }
                }), Modal.buttons.annuler]);
              }
                          });
            }
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })ments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    id: "app-fiche-cheval"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
    id: "fiche-cheval-selector"
  }, !props.inSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("i", {
    className: "nav fa-solid fa-chevron-left",
    onClick: function onClick() {
      return nav('prev');
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("ul", null, props.data.course.participants.map(function (p) {
    var _sharedData$currentPa;
    var liClass = p.numero === ((_sharedData$currentPa = sharedData.currentPartant) === null || _sharedData$currentPa === void 0 ? void 0 : _sharedData$currentPa.numero) ? 'selected' : '';
    var notificationEnabled = (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_10__.hasNotification)(p.cheval.id, sharedData.notifications);
    var notifTitle = !notificationEnabled ? ZEturf.text.fiche_cheval.notification.activer : ZEturf.text.fiche_cheval.notification.desactiver;
    var notificationClass = !notificationEnabled ? 'fa-solid fa-bell' : 'fa-solid fa-bell-on enabled';
    var isInFavoris = (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_10__.isFavori)(p.cheval.id, sharedData.favoris);
    var favoriTitle = ZEturf.text.fiche_cheval.favori.ajouter,
      favoriClass = 'fa-solid fa-star favoris-star';
    if (isInFavoris) {
      favoriTitle = ZEturf.text.fiche_cheval.favori.supprimer;
      favoriClass += ' enabled';
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", {
      className: liClass,
      key: p.numero,
      onClick: function onClick() {
        return setCurrentPartant(p.numero);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "horse-name"
    }, p.numero, ". ", p.cheval.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: "pictos logged-only"
    }, isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: favoriClass,
      title: favoriTitle,
      onClick: function onClick() {
        return isInFavoris ? requestRemoveFavori(p.cheval) : toggleFavori(p.cheval);
      }
    }), isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "".concat(notificationClass, " notification"),
      title: notifTitle,
      onClick: function onClick() {
        return updateNotification(p.cheval, !notificationEnabled);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: "tooltip tuto_callforaction",
      title: ZEturf.text.fiche_cheval.notification.tooltip
    }, "?")));
  })), !props.inSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("i", {
    className: "nav fa-solid fa-chevron-right",next');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_9__.FicheChevalContext.Provider, {
    value: _objectSpread(_objectSpread({}, sharedData), {}, {
      setCurrentPartant: setCurrentPartant,
      setCurrentFavori: setCurrentFavori,
      toggleFavori: toggleFavori
    })
  }, url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_FicheCheval__WEBPACK_IMPORTED_MODULE_6__.FicheCheval, {
    url: url
  })));
}
FicheChevalSelector.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  inSearch: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/NoteForm.js":
/*!********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/NoteForm.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteForm": function() { return /* binding */ NoteForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_FicheChevalNotes_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FicheChevalNotes.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalNotes.scss");
/* harmony import */ var _Helper_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Helper/Api */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Api.js");
/* harmony import */ var _Helper_Favori__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Helper/Favori */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Favori.js");
/* harmony import */ var _FicheChevalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FicheChevalContext */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/FicheChevalContext.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






function NoteForm(props) {
  var _props$note3;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    texte = _useState2[0],
    setTexte = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_FicheChevalContext__WEBPACK_IMPORTED_MODULE_7__.FicheChevalContext),
    favoris = _useContext.favoris,
    currentFavori = _useContext.currentFavori,
    currentPartant = _useContext.currentPartant,
    inSearch = _useContext.inSearch,
    toggleFavori = _useContext.toggleFavori,
    setCurrentFavori = _useContext.setCurrentFavori;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var _props$note;
    if ((_props$note = props.note) !== null && _props$note !== void 0 && _props$note.texte) {
      setTexte(props.note.texte);
    }
    if (!inSearch) {
      var _formRef$current;
      formRef === null || formRef === void 0 ? void 0 : (_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.scrollIntoView();
    }
  }, [props.note]);
  var submit = function submit(e) {
    var _props$note2;
    e.preventDefault();
    if (!texte.trim()) {
      return;
    }
    var routeName = 'zeturf_zeturfapi_mobile_favori_postfavorinote';
    var routeParams = {
      idCheval: props.cheval.id
    };
    var expectedResult = {
      texte: texte
    };
    if ((_props$note2 = props.note) !== null && _props$note2 !== void 0 && _props$note2.id) {
      routeParams.idNote = props.note.id;
      expectedResult.id = props.note.id;
      expectedResult.date = props.note.date;
    } else {
      expectedResult.tmpId = moment().unix();
      expectedResult.date = moment().format();
    }

    // On ajoute d'abord aux favoris pour récupérer les infos du favoris sur programme
    var addFavoriPromise = (0,_Helper_Favori__WEBPACK_IMPORTED_MODULE_6__.isFavori)(props.cheval.id, favoris) ? Promise.resolve() : toggleFavori(props.cheval);
    addFavoriPromise.then(function () {
      (0,_Helper_Api__WEBPACK_IMPORTED_MODULE_5__.callPost)(routeName, routeParams, {
        note: textte('');
      });
    });
  };
  var afterNoteSubmit = function afterNoteSubmit(note) {
    if (note.id) {
      var foundIndex = currentFavori.ote.id;
      });
      if (foundIndex >= 0) {
        var notes = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(currentFavori.notes);
        notes.splice(foundIndex, 1, note);
        setCurrentFavori(_objectSpread(_objectSpread({}, currentFavori), {}, {
          notes: notes,
          texte: note.texte
        }));
        props.resetEditingNote();
      }
    } else {
      var _currentFavori$notes;
      setCurrentFavori(_objectSpread(_objectSpread({}, currentFavori !== null && currentFavori !== void 0 ? currentFavori : {}), {}, {
        texte: note.texte,
        notes: [note].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])((_currentFavori$notes = currentFavori === null || currentFavori === void 0 ? void 0 : currentFavori.notes) !== null && _currentFavori$notes !== void 0 ? _currentFavori$notes : []))
      }));
    }
    FavorisWrapper.updateFavoriProperties(currentPartant.cheval.id, {
      texte: note.texte
    });
  };
  tingNote();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("form", {
    onSubmit: function onSubmit(e) {
      return submit(e);
    },
    ref: formRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("textarea", {
    placeholder: ZEturf.text.fiche_cheval.notes.form.placeholder,
    rows: "10",
    name: "note",
    value: texte,
    onChange: function onChange(e) {
      return setTexte(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "submit",
    className: "btn"
  }, (_props$note3 = props.note) !== null && _props$note3 !== void 0 && _props$note3.id ? ZEturf.text.fiche_cheval.notes.bouton.modifier : ZEturf.text.fiche_cheval.notes.bouton.ajouter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "button",
    className: "btn light",
    onClick: function onClick() {
      return resetForm();
    }
  }, ZEturf.text.fiche_cheval.notes.bouton.annuler));
}
NoteForm.propTypes = {
  cheval: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object),
  resetEditingNote: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),
  note: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/Partant.js":
/*!**************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/Partant.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPictoFer": function() { return /* binding */ getPictoFer; },
/* harmony export */   "getPictoOeilleres": function() { return /* binding */ getPictoOeilleres; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getPictoOeilleres(idOeillere) {
  var oeillereInfos = ZEturf.text.enums.Oeilleres[idOeillere];
  if (oeillereInfos) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "tooltip oeilleres generic-".concat(oeillereInfos.pictoClass),
      title: oeillereInfos.label
    });
  }
  return null;
}
function getPictoFer(ferrures) {
  var defereInfos = ZEturf.text.enums.Deferes[ferrures];
  if (defereInfos) {
    var _defereInfos = ZEturf.text.enums.Deferes[ferrures];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      title: _defereInfos.label,
      className: "picto-fer tooltip deferes generic-".concat(_defereInfos.pictoClass)
    });
  }
  return null;
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/TypeCourse.js":
/*!*****************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/TypeCourse.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeCourse": function() { return /* binding */ TypeCourse; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var TypeCourse = /*#__PURE__*/function () {
  function TypeCourse() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TypeCourse);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TypeCourse, null, [{
    key: "isTrot",
    value: function isTrot(type) {
      return [this.ATTELE, this.MONTE, this.TROT].includes(type);
    }
  }]);
  return TypeCourse;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "ATTELE", 1);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "PLAT", 2);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "MONTE", 3);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "HAIES", 4);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "TROT", 5);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "CROSS_COUNTRY", 6);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "STEEPLE_CHASE", 7);
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeCourse, "OBSTACLES", 8);

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/TypeDepart.js":
/*!*****************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/TypeDepart.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeDepart": function() { return /* binding */ TypeDepart; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var TypeDepart = /*#__PURE__*/ypeDepart);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TypeDepart, null, [{
    key: "getLabelFromAutostartValue",
    value: function getLabelFromAutostartValue(value) {
      return this.isAutostart(value) ? this.AUTOSTART : this.VOLTE;
    }
  }, {
    key: "isAutosta === 'X';
    }
  }]);
  return TypeDepart;
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeDepart, "AUTOSTART", 'A');
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(TypeDepart, "VOLTE", 'V');

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/ZEturfPro.js":
/*!****************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/ZEturfPro.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatClassement": function() { return /* binding */ formatClassement; },
/* harmony export */   "formatDistance": function() { return /* binding */ formatDistance; },
/* harmony export */   "getPictoFer": function() { return /* binding */ getPictoFer; },
/* harmony export */   "getPictoOeilleres": function() { return /* binding */ getPictoOeilleres; },
/* harmony export */   "getZEturfProInfoDeferesFromZEturf": function() { return /* binding */ getZEturfProInfoDeferesFromZEturf; },
/* harmony export */   "getZEturfProOeilleresFromZEturf": function() { return /* binding */ getZEturfProOeilleresFromZEturf; },
/* harmony export */   "normalizeNomCheval": function() { return /* binding */ normalizeNomCheval; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Partant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partant */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Helper/Partant.js");



function getPictoOeilleres(idOeil) {
  var ztOeilleres = ZEturf.constant.ZEturfPro.Oeilleres[idOeil];
  return ztOeilleres ? (0,_Partant__WEBPACK_IMPORTED_MODULE_2__.getPictoOeilleres)(ztOeilleres[0]) : null;
}
function getPictoFer(fer) {
  if (fer !== null && fer !== void 0 && fer.img) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      className: "fers",
      src: "https://pro.zeturf.com/images/zeturf/".concat(fer.img),
      alt: fer.alt,
      title: fer.alt
    });
  }
  return null;
}
function getZEturfProInfoDeferesFromZEturf(ZEturfVal) {
  if (ZEturf.constant.ZEturfPro.Deferes[ZEturfVal]) {
    return {
      id_fer: ZEturf.constant.ZEturfPro.Deferes[ZEturfVal],
      alt: ZEturf.text.enums.Deferes[ZEturfVal].label
    };
  }
  return null;
}
function getZEturfProOeilleresFromZEturf(ZEturfVal) {
  if (ZEturfVal) {
    for (var _i = 0, _Object$entries = Object.entries(ZEturf.constant.ZEturfPro.Oeilleres); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
        zeProVal = _Object$entries$_i[0],
        ztVals = _Object$entries$_i[1];
      if (ztVals.includes(ZEturfVal)) {
        return zeProVal;
      }
    }
  }
  return null;
}
function formatClassement(position) {
  if (position && !isNaN(position)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, parseInt(position) === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
      className: "drapeau-arrivee fa-solid fa-flag-checkered"
    }), " ", position, "e");
  }
  return position;
}
function formatDistance(distance) {
  return distance && distance.toString().match(/\d+/) ? "".concat(distance, " L") : distance !== null && distance !== void 0 ? ds*)+$/g, '');
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/Tab.js":
/*!*************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/Tab.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab": function() { return /* binding */ Tab; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Tab(props) {
  var className = 'tab-menu';
  if (props.activeTab === props.label) {
    className += ' current';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: classNams.label);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "center-elements"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    dangerouslySetInnerHTML: {
      __html: props.label
    }
  }), props.displayedCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge"
  }, props.displayedCount)));
}
Tab.propTypes = {
  displayedCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/Tabs.js":
/*!**************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/Tabs.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": function() { return /* binding */ Tabs; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/Tab.js");
/* harmony import */ var _styles_Tabs_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Tabs.scss */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/styles/Tabs.scss");




function Tabs(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "react-tabs"
  }, props.showMobileVariant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", t.value);
    },
    className: "tabs-menu only-on-mobile"
  }, props.children.map(function (child, key) {
    var _child$props;
    return ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.visible) !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: child.props.label,
      key: key
    }, child.props.label);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: 'tabs-menu' + (props.showMobileVariant ? ' not-on-mobile' : '')
  }, props.children.map(function (child, key) {
    var _child$props2;
    return ((_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.visible) !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tab__WEBPACK_IMPORTED_MODULE_1__.Tab, {
      key: key,
      activeTab: props.activeTab,
      label: child.props.label,
      displayedCount: child.props.displayedCount,label);
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tab-content"
  }, props.children.map(function (child) {
    var _child$props3;
    if (child.props.label !== props.activeTab || ((_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : _child$props3.visible) === false) {
      return undefined;
    }
    return child.props.children;
  })));
}
Tabs.propTypes = {
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  changeActiveTab: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
  showMobileVariant: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Api.js":
/*!***********************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Api.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callDelete": function() { return /* binding */ callDelete; },
/* harmony export */   "callGet": function() { return /* binding */ callGet; },
/* harmony export */   "callPost": function() { return /* binding */ callPost; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function getHeaders() {
  return new Headers({
    'X-Theme': ZEturf.theme,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
}
function handleJsonResponse(response) {
  return respoxtRe, arguments);
}
function _callPost() {
  _callPost = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(routeName, routeData, requestData) {
    var postUrl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return ZERouter.generate(routeName, routeData);
        case 2:
          postUrl = _context.sent;
          if (!(postUrl === null)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", '');
        case 5:
          return _context.abrupt("return", fetch(postUrl, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(requestData)
          }).then(function (resp) {
            return handleJsonResponse(resp);
          }).catch(function (e) {
            JsLogger.logException(e);
          }));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _callPost.apply(this, arguments);
}
function callGet(_x4, _x5) {
  return _callGet.apply(this, arguments);
}
function _callGet() {
  _callGet = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(routeName, routeData) {
    var getUrl;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return ZERouter.generate(routeName, routeData);
        case 2:
          getUrl = _context2.sent;
          if (!(getUrl === null)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", '');
        case 5:
          return _context2.abrupt("return", fetch(getUrl, {
            headers: getHeaders()
          }).then(function (resp) {
            return handleJsonResponse(resp);
          }).catch(function (e) {
            JsLogger.logException(e);
          }));
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _callGet.apply(this, arguments);
}
function _callDelete() {
  _callDelete = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(routeName, routeData) {
    var delUrl;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return ZERouter.generate(routeName, routeData);
        case 2:
          delUrl = _context3.sent;
          if (!(delUrl === null)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", '');
        case 5:
          return _context3.abrupt("return", fetch(delUrl, {
            method: 'DELETE',
            headers: getHeaders()
          }).then(function (resp) {
            return handleJsonResponse(resp);
   e);
          }));
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _callDelete.apply(this, arguments);
}

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Favori.js":
/*!**************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Favori.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFavori": function() { return /* binding */ addFavori; },
/* harmony export */   "hasNotification": function() { return /* binding */ hasNotification; },
/* harmony export */   "isFavori": function() { return /* binding */ isFavori; },
/* harmony export */   "ongletCarriere": function() { return /* binding */ ongletCarriere; },
/* harmony export */   "ongletInfos": function() { return /* binding */ ongletInfos; },
/* harmony export */   "ongletNotes": function() { return /* binding */ ongletNotes; },
/* harmony export */   "removeFavori": function() { return /* binding */ removeFavori; },
/* harmony export */   "removeFavoriWithConfirm": function() { return /* binding */ removeFavoriWithConfirm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Api */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Helper/Api.js");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var isFavori = function isFavori(idCheval, idFavoris) {
  return idFavoris.includes(idCheval);
};
var haes(idCheval);
};
function removeFavori(idCheval) {
  return (0,_Api__WEBPACK_IMPORTED_MODULE_3__.callDelete)('zeturf_zeturfapi_mobile_favori_deletefavori', {
    idCheval: idC(idCheval);
  });
}
function removeFavoriWithConfirm(cheval) {
  return new Promise(function (resolve) {
    Modal.openModalHTML(ZEturf.text.compte_favoris_deletefavori, ZEturf.text.compte_favoris_supprimer_confirmation.replace('%cheval%', cheval.nom), [_objectSpread(_objectSpread({}, Modal.buttons.confirmDeleteFavorite), {}, {
      callback: function callback() {
        removeFavori(ve();
        });
        Modal.close();
      }
    }), Modal.buttons.annuler], 'modalFavorite');
  });
}
function addFavori(idCheval) {
  var body = new FormData();
  body.append('favori[cheval]', idCheval);
  return (0,_Api__WEBPACK_IMPORTED_MODULE_3__.callPost)('zeturf_zeturfapi_mobile_favori_postfavori', {}, {
    cheval: idCheval
  }).then( /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(chevalData) {
      var nbFavoris, _engagementInfos$prog, engagementInfos;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            nbFavoris = FavorisWrapper.getFavoris().nbFavoris + 1;
            if (!(chevalData.status !== 'error')) {
              _context.next = 9;
              break;
            }
            _context.next = 4;
            return (0,_Api__WEBPACK_IMPORTED_MODULE_3__.callGet)('zeturf_frontoffice_favoris_engagement', {
              id: idCheval
            });
          case 4:
            engagementInfos = _context.sent;
            chevalData.cheval.notification = false;
            chevalData.cheval.mtime = engagementInfos.mtime;
            chevalData.cheval.texte = '';
            FavorisWrapper.updateFavoris((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idCheval, chevalData.cheval), (_engagementInfos$prog = engagementInfos.programmeInfos) !== null && _engagementInfos$prog !== void 0 ? _engagementInfos$prog : {}, null, nbFavoris);
          case 9:
            return _context.abrupt("return", chevalData);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    guments);
    };
  }());
}
var ongletCarriere = 'carriere';
var ongletInfos = 'infos';
var ongletNotes = 'notes';

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/favorisWrapper.js":
/*!***************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/favorisWrapper.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _Components_Favoris_App_EventFavoris__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Favoris/App/EventFavoris */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/App/EventFavoris.js");
/* harmony import */ var _Components_Favoris_App_FavorisApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Favoris/App/FavorisApp */ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Favoris/App/Favor return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.de= desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "}), obj[key]; } try { define({}, ""); } catch (keyarg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(Iterarg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resollve, reject); }) : PromiseImpl.resoolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_inthodAn, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGene ctor.name)); },(Gp), genFun; }, await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, r.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp,  return this; }), define( Generator]"; }), !0, next; }; }, exports.values = values, Context.prototype = { constructor: = undefrn this.rval; }, dislyLoc); }lete(recordinueSentiueSentinch attempt"); },inueSentinel; } }, exports; }





/**
 * Favoris
 * Implémentation des composants React qui gère la récupération et l'affichage des favoris sur le front
 * Seulement sur dev et integ en attendant la migration complète de le ficheCheval
 */
window.FavorisWrapper = {
  favorisChangeEvent: null,
  favoris: {},
  init: function init() {
    var _this = this;
    if (UserData.isLoggedIn()) {
      // On dispacht directement le storage pour catcher une modification dans la même page
      this.favorisChangeEvent = document.createEvent('StorageEvent');
      this.favorisChangeEvent.initStorageEvent('storage', false, false, 'com.zeturf.favoris.react', null, null, null, ztLocalStorage instanceof Storage ? ztLocalStorage : null);
      window.addEverisChange(e);
      }, false);

      // Si on vient de se connecter on resynchronise/vide le cache
      if (Cookies.get('justloggedin')) {
        this.flushFavoris();
        this.fetchFavorisProgramme();
      }
      this.showStars(this.getFavoris());

      // On refresh mais on conserve les dates non MAJ pour le pas écraser les infos d'engagement des courses
      // passée (notamment s'il y a y un onglet ouvert en cours)
      if ($('#favoris-edit').length) {
        this.fetchFavorisProgramme(false);
      }
      this.initFavorisAppContainer();
      this.initFavorisBlocContainer();
    }
  },
  initFavorisAppContainer: function initFavorisAppContainer() {
    var favorisAppDomEl = document.querySelector('#favoris-app');
    if (favorisAppDomEl) {
      var page = $('body').attr('id');
      var favorisAppContainer = react_dom_client__WEBPACK_IMPORTED_MODULE_5__.createRoot(favorisAppDomEl);
      var initData = JSON.parse(favorisAppDomEl.dataset.init);
      initData.page = page;
      favorisAppContainer.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Components_Favoris_App_FavorisApp__WEBPACK_IMPORTED_MODULE_7__.FavorisApp, initData));
    }
  },
  initFavorisBlocContainer: function initFavorisBlocContainer() {
    var $favContainer = $('.chevaux-favoris-container').first();
    if ($favContainer) {
      var container = $favContainer.find('.table-favoris').length !== 0 ? react_dom_client__WEBPACK_IMPORTED_MODULE_5__.createRoot($favContainer.find('.table-favoris').get(0)) : null;
      var favorisToShow = this.getFavorisToShowInContainer($favContainer);
      if (container !== null && Object.keys(favorisToShow).length) {
        var page = $('body').attr('id');
        var date = Object.keys(favorisToShow).shift();
        var favorisIds = favorisToShow[date];
        container.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Components_Favoris_App_EventFavoris__WEBPACK_IMPORTED_MODULE_6__.EventFavoris, {
          date: date,
          favorisToShow: favorisIds,
          page: page
        }));
      }
    }
  },
  getFavorisToShowInContainer: function getFavorisToShowInContainer($favContainer) {
    var $dataFavoris = $favContainer.find('[data-favoris]');
    if (!$dataFavoris.length) {
      $dataFavoris = $('[data-favoris]');
    }
    var favorisToShow = {};
    $dataFavoris.each(function () {
      var $element = $(this),
        favorisData = $element.data('favoris'),
        date = favorisData.date || 'NA',
        runners = favorisData.chevaux || [];
      runners.forEach(function (runner) {
        if (!$element.hasClass('favoris-no-details')) {
          favorisToShow[date] || (favorisToShow[date] = []);
          if (!favorisToShow[date].includes(runner)) {
            favorisToShow[date].push(runner);
          }
        }
      });
    });
    return favorisToShow;
  },
  fetchFavorisProgramme: function () {
    var _fetchFavorisProgramme = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var replaceCurrent,
        favorisProgrammeUrl,
        result,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            replaceCurrent = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : true;
            _context2.next = 3;
            return ZERouter.generate('zeturf_frontoffice_favoris_fetchprogramme');
          case 3:
            favorisProgrammeUrl = _context2.sent;
            if (!favorisProgrammeUrl) {
              _context2.next = 9;
              break;
            }
            _context2.next = 7;
            return wrapJsonFetch(fetch(favorisProgrammeUrl), null, /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!($('#favoris-edit').length !== 0)) {
                      _context.next = 4;
                      break;
                    }
                    _context.next = 3;
                    return ZERouter.generate('zeturf_frontofficecompte_compte_index');
                  case 3:
                    window.location = _context.sent;
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
          case 7:
            result = _context2.sent;
            if (replaceCurrent) {
              this.setFavoris(result);
            } else {
              this.updateFavoris(result.cheval, result.programmeInfos, null, result.nbFavoris);
            }
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callethis, arguments);
    }
    return fetchFavorisProgramme;
  }(),
  fetchFavorisByIndex: function () {
    var _fetchFavorisByIndex = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(index) {
      var favorisIndexUrl, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return ZERouter.generate('zeturf_frontoffice_favoris_fetchindex', {
              'index': index
            });
          case 2:
            favorisIndexUrl = _context3.sent;
            if (!favorisIndexUrl) {
              _context3.next = 8;
              break;
            }
            _context3.next = 6;
            return wrapJsonFetch(fetch(favorisIndexUrl));
          case 6:
            result = _context3.sent;
            if (result) {
              this.updateFavoris(result['chevaux'], {}, result['indexes']);
            }
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callethis, arguments);
    }
    return fetchFavorisByIndex;
  }(),
  showStars: function showStars(favoris) {
    $('.favoris-star[data-favoris]').removeClass('fa-solid fa-star');
    var favouriteClasses = 'favoris-star fa-solid fa-star';
    $('[data-favoris]').each(function () {
      var $element = $(this),
        favorisData = $element.data('favoris'),
        runners = favorisData.chevaux || [];
      var addStar = false;
      var _iterator = _createForOfIteratorHelper(runners),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var runner = _step.value;
          if (favoris.cheval && favoris.cheval[runner]) {
            addStar = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (addStar) {
        $element.addClass(favouriteClasses);
      }
    });
  },
  onLocalFavorisChange: function onLocalFavorisChange(event) {
    if (event.key === 'com.zeturf.favoris.react') {
      var favoris = this.getFavoris();
      if (favoris === null) {
        this.fetchFavorisProgramme(true);
      }
      this.showStars(favoris);
    }
  },
  getFavoris: function getFavoris() {
    var _defaultFavoris$nbFav;
    var defaultFavoris = {
      cheval: {},
      programmeInfos: {}
    };
    try {
      return JSON.parse(ztLocalStorage.getItem('com.zeturf.favoris.react')) || defaultFavoris;
    } catch (e) {
      this.flushFavoris();
    }
    (_defaultFavoris$nbFav = defaultFavoris.nbFavoris) !== null && _defaultFavoris$nbFav !== void 0 ? _defaultFavoris$nbFav : defaultFavoris.nbFavoris = 0;
    return defaultFavoris;
  },
  setFavoris: function setFavoris(favoris) {
    ztLocalStorage.setItem('com.zeturf.favoris.react', JSON.stringify(favoris));
    window.dispatchEvent(this.favorisChangeEvent);
  },
  getFavori: function getFavori(chevalId) {
    var _favoris$cheval$cheva;
    var favoris = this.getFavoris();
    return (_favoris$cheval$cheva = favoris.cheval[chevalId]) !== null && _favoris$cheval$cheva !== void 0 ? _favoris$cheval$cheva : null;
  },
  removeFavori: function removeFavori(chevalId) {
    var favoris = this.getFavoris();
    delete favoris.cheval[chevalId];
    for (var date in favoris.programmeInfos) {
      delete favoris.programmeInfos[date][chevalId];
      if (Object.keys(favoris.programmeInfos[date]).length === 0) {
        delete favoris.programmeInfos[date];
      }
    }
    for (var _i = 0, _Object$keys = Object.keys(favoris.indexes || {}); _i < _Object$keys.length; _i++) {
      var index = _Object$keys[_i];
      var pos = favoris.indexes[index].indexOf(chevalId);
      if (pos > -1) {
        favoris.indexes[index].splice(pos, 1);
      }
    }
    favoris.nbFavoris -= 1;
    this.setFavoris(favoris);
  },
  updateFavoris: function updateFavoris(chevaux) {
    var _nbFavoris;
    var programmeInfos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var indexes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var nbFavoris = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var currentFavoris = this.getFavoris();
    (_nbFavoris = nbFavoris) !== null && _nbFavoris !== void 0 ? _nbFavoris : nbFavoris = currentFavoris.nbFavoris;
    var updatedProgrammeInfos = _objectSpread({}, currentFavoris.programmeInfos);
    for (var _i2 = 0, _Object$keys2 = Object.keys(programmeInfos); _i2 < _Object$keys2.length; _i2++) {
      var _updatedProgrammeInfo;
      var date = _Object$keys2[_i2];
      (_updatedProgrammeInfo = updatedProgrammeInfos[date]) !== null && _updatedProgrammeInfo !== void 0 ? _updatedProgrammeInfo : updatedProgrammeInfos[date] = {};
      for (var _i3 = 0, _Object$entries = Object.entries(programmeInfos[date]); _i3 < _Object$entries.length; _i3++) {
        var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Object$entries[_i3], 2),
          chevalId = _Object$entries$_i[0],
          chevalData = _Object$entries$_i[1];
        updatedProgrammeInfos[date][chevalId] = chevalData;
      }
    }

    // S'il s'agit d'un retour d'ajout de favori, on met à jour l'index existant
    if (indexes === null) {
      indexes = currentFavoris.indexes || {};
      for (var _i4 = 0, _Object$values = Object.values(chevaux); _i4 < _Object$values.length; _i4++) {
        var _cheval$id;
        var cheval = _Object$values[_i4];
        var firstLetter = cheval.nom[0];
        if (indexes[firstLetter] === undefined) {
          indexes[firstLetter] = [];
        }
        if (!indexes[firstLetter].includes((_cheval$id = cheval.id) !== null && _cheval$id !== void 0 ? _cheval$id : cheval.id)) {
          var _cheval$id2;
          indexes[firstLetter].push((_cheval$id2 = cheval.id) !== null && _cheval$id2 !== void 0 ? _cheval$id2 : cheval.id);
        }
      }
    } else {
      // Au fetch d'un index en particulier, on écrase avec les données reçues plus fraîches
      indexes = _objectSpread(_objectSpread({}, currentFavoris.indexes || {}), indexes);
    }
    this.setFavoris(_objectSpread(_objectSpread({}, currentFavoris), {}, {
      cheval: _objectSpread(_objectSpread({}, currentFavoris.cheval), chevaux),
      programmeInfos: updatedProgrammeInfos,
      indexes: indexes,
      nbFavoris: nbFavoris
    }));
  },
  updateFavoriProperties: function updateFavoriProperties(chevalId, properties) {
    var currentFavoris = this.getFavoris();
    if (currentFavoris.cheval[chevalId]) {
      currentFavoris.cheval[chevalId] = _objectSpread(_objectSpread({}, currentFavoris.cheval[chevalId]), properties);
      this.setFavoris(currentFavoris);
    }
  },
  flushFavoris: function flushFavoris() {
    ztLocalStorage.removeItem('com.zeturf.favoris.react');
    window.dispatchEvent(this.favorisChangeEvent);
  }
};

/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheCheval.scss":
/*!********************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheCheval.scss ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalForm.scss":
/*!************************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalForm.scss ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalHisto.scss":
/*!*************************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalHisto.scss ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalInfosCourse.scss":
/*!*******************************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalInfosCourse.scss ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalNotes.scss":
/*!*************************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalNotes.scss ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalSelector.scss":
/*!****************************************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/FicheCheval/styles/FicheChevalSelector.scss ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/styles/Tabs.scss":
/*!***********************************************************************************************************!*\
  !*** ../../lib/bundles/FrontofficeBundle/Resources/public/js/React/Components/Util/Tabs/styles/Tabs.scss ***!
  \***************************************************************************************css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*************************	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \******************************* = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

age);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   *return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before t{};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.proretleTuncleTleTleTleTleTleTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatRetdTypesMessage + '.'));
    }
    return createChainableTleT `'leTleT       }

    return false;
  }

  // Equivalent of `typeof` but with special hand  }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `cr  }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "und      return type;
    }
  }

  // Returns class npValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \**********************Access);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*****************************************ctPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \************************e.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Scheduler = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var suppressWarning = false;
function setSuppressWarning(newSuppressWarning) {
  {
    suppressWarning = newSuppressWarning;
  }
} // In DEV, calls to console.warn and console.error get replaced
// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    if (!suppressWarning) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var FunctionComponent = 0;
var ClassComponent = 1;
var IndeterminateComponent = 2; // Before we know whether it is function or class

var HostRoot = 3; // Root of a host tree. Could be nested inside another node.

var HostPortal = 4; // A subtree. Could be an entry point to a different renderer.

var HostComponent = 5;
var HostText = 6;
var Fragment = 7;
var Mode = 8;
var ContextConsumer = 9;
var ContextProvider = 10;
var ForwardRef = 11;
var Profiler = 12;
var SuspenseComponent = 13;
var MemoComponent = 14;
var SimpleMemoComponent = 15;
var LazyComponent = 16;
var IncompleteClassComponent = 17;
var DehydratedFragment = 18;
var SuspenseListComponent = 19;
var ScopeComponent = 21;
var OffscreenComponent = 22;
var LegacyHiddenComponent = 23;
var CacheComponent = 24;
var TracingMarkerComponent = 25;

// -----------------------------------------------------------------------------
var enableClientRenderFallbackOnTextMismatch = true; // Recoil still uses useMutableSource in www, need to delete
// the react-reconciler package.

var enableNewReconciler = false; // Support legacy Primer support on internal FB www

var enableLazyContextPropagation = false; // FB-only usage. The new API has different semantics.

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber

var enableSuspenseAvoidThisFallback = false; // Enables unstable_avoidThisFallback feature in Fizz
// React DOM Chopping Block
//
// Similar to main Chopping Block but only flags related to React DOM. These are
// grouped because we will likely batch all of them into a single major release.
// -----------------------------------------------------------------------------
// Disable support for comment nodes as React DOM containers. Already disabled
// in open source, but www codebase still relies on it. Need to remove.

var disableCommentsAsDOMContainers = true; // Disable javascript: URL strings in href for XSS protection.
// and client rendering, mostly to allow JSX attributes to apply to the custom
// element's object properties instead of only HTML attributes.
// https://github.com/facebook/react/issues/11347

var enableCustomElementPropertySupport = false; // Disables children for <textarea> elements
var warnAboutStringRefs = false; // -----------------------------------------------------------------------------
// Debugging and DevTools
// -----------------------------------------------------------------------------
// Adds user timing marks for e.g. state updates, suspense, and work loop stuff,
// for an experimental timeline tool.

var enableSchedulingProfiler = true; // Helps identify side effects in render-phase lifecycle hooks and setState

var enableProfilerTimer = true; // Record durations for commit and passive effects phases.

var enableProfilerCommitHooks = true; // Phase param passed to onRender callback differentiates between an "update" and a "cascading-update".

var allNativeEvents = new Set();
/**
 * Mapping from registration name to event name
 */


var registrationNameDependencies = {};
/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */

var possibleRegistrationNames =  {} ; // Trust the developer to only use possib.add(dependencies[i]);
  }
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var hasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}

function checkAttributeStringCoercion(value, attributeName) {
  {
    if (willCoercionThrow(value)) {
      error('The provided `%s` attribute is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', attributeName, typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}
function checkPropStringCoercion(value, propName) {
  {
    if (willCoercionThrow(value)) {
      error('The provided `%s` prop is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', propName, typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}
function checkHtmlStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided HTML markup uses a value of unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var illegalAttributeNameCache = {};
var valid?tring = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEq, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]rn token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'ace, // sanitizeURL
  true);
});

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]stringify(url));
    }
  }
}

/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have mulngValue;
      }
    }
  }
}
/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */

function getValueForAttribute(node, name, expected) {
  {
    if (!isAttributeNameSafe(name)) {
      return;
    }

    if (!node.hasAttribute(name)) {
      return expected === undefined ? undefined : null;
    }

    var value = node.getAttribute(name);

    {
      checkAttributeStringCoercion(expected, name);
    }

    if (value === '' + expected) {
      return expected;
    }

    return value;
  }
}
/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} nattributeValue);
    }
  }
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_SCOPE_TYPE = Symbol.for('react.scope');
var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
var REACT_CACHE_TYPE = Symbol.for('react.cache');
var REACT_TRACING_MARKER_TYPE = Symbol.for('react.tracing_marker');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}

function describeClassComponentFrame(ctor, source, ownerFn) {
  {
    return describeNativeComponentFrame(ctor, true);
  }
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        asage + '\n' + x.stack;
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
Name + ")" : wrapperName);
} // Keep in sync with shared/getComponentNameFromType


function getContextName$1(type) {
  return type.reak;

  }

  return null;
}

var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
var current = nu
I  isRendering = false;
  }
}
function setIsRendering(rendering) {
  {
    isRendering = rendering;
  }
}

// Flow does not allow string concatenation of most non-string types. To work
// around this limitation, we use an opaque type that can only be obtained by
// passing the value through getToStringValue first.
function toString(value) {
  // The coercion safety check is performed in getToStringValue().
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function getToStringValue(value) {
  switch (typeof value) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return value;

    case 'object':
      {
        checkFormFieldValueStringCoercion(value);
      }

      return value;

    default:
      // function, symbol are assigned as empty strings
      return '';
  }
}

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  rerbox' || type === 'radio');
}

function getTracker(node) {
  rnalue;
  }

  return value;
}

function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? 'checked' : 'value';
  var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);

  {
    checkFormFieldValueStringCoercion(node[valueField]);
  }

  var currentValue = '' + node[valueField]; // if someone has already defined a value or Safari, then bail
  // and don't track value will cause over reporting of changes,
  // but it's better then a hard failure
  // (needed for certain tests that spyOn input values and Safari)

  if (node.hasOwnProperty(valueField) || typeof descriptor === 'undefined' || typeof descriptor.get !== 'function' || typeof descriptor.set !== 'function') {
    return;
  }

  var get = descriptor.get,
      set = descriptor.set;
  Object.defineProperty(node, valueField, {
    return get.call(this);
    },
    set: function (value) {
      {
        checkFormFieldValueStringCoercion(value);
      }

      currentValue = '' + value;
      set.call(this, value);
    }
  }); // We could've passed this the first time
  // but it triggers a bug in IE11 and Edge 14/15.
  // Calling defineProperty() again should be equivalent.
  // https://github.com/facebook/react/issues/11768

  Object.defineProperty(node, valueField, {
    enumerable: descriptor.enumerable
  });
  var tracker = {
    getValue: function () {
      return currentValue;
    },
    setValue: function (value) {
      {
        checkFormFieldValueStringCoercion(value);
      }

      currentValue = '' + vallete node[valueField];
   t{
    return doc.body;
  }
}

var didWarnValueDefaultValue = false;
var didWarnCheckedDefaultChecked = false;
var didWarnControlledToUncontrolled = false;
var didWarnUncontull : props.value != null;
}
/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/Nde, otherProps);
    }
  }
} // In Chrome, assigning defaultValue to certain input types triggers input validation.
// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/toString(value);
    }
  }
}

var didWarnSelectedSetOnOption = false;
var didWarnInvalidChild = false;
var didWarnInvalidInnerHTML = false;
/**
 * Implements an <option> host component that warns when `selected` is set.
 */

function validateProps(element, props) {
  {
    // If a value is not provided, then the children must be simple.
    if (props.value == null) {
      if (typeof props.children === 'object' && props.children !== null) {
        React.Chiln>.');
          }
        });
      } else if (props.dangerouslySetInnerHTML != null) {
        if (!didWarnInvalidInnerHTML) {
          didWarnInvalidInnerHTML = true;

          error('Pass a `value` prop if you set dangerouslyInnerHTML so React knows ' + 'which value should be selected.');
        }
      }
    } // TODO: Remove support for `selected` in <option>.


    if (props.selected != null && !didWarnSelectedSetOnOption) {
      error('Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.');

      didWarnSelectedSetgValue(props.value)));
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

var didWarnValueDefaultValue$1;

{
  didWarnVal + '`.';
  }

  return '';
}

var valuePropNames = ['value', 'defaultValue'];
/**
 * Validation function for `valnselected = true;
    }
  }
}
/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied valueltiple, value, false);
  }
}

var didWarnValDefaultVal = false;

/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the childrWrapper$1(element, props);
}

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg'; // Assumes th
  return parentNamespace;
}

/* globals MSApp */

/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */
var createMilse {
    return func;
  }
};

var reusableSVGContainer;
/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */

var setInnerHTML = create

  node.innerHTML = html;
});

/**
 * HTML nodeType values that represent the type of the node
 */
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;

/**
 * Set the textContent property of a node. For text updates, it's faster
 * to set the `nodeValue` of the Text node directly instead of using
 * `.textContent` which will remove the existing node and create a new one.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @intern  node.textContent = text;
};

// List derived from Gecko source code:
// https://github.com/mozilla/gecko-dev/blob/4e638efc71/layout/style/test/property_database.js
var shorthandToLonghand = {
  animation: ['animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction'],
  background: ['backgroundAttachment', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundSize'],
  backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
  border: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderTopColor', 'borderTopStyle', 'borderTopWidth'],
  borderBlockEnd: ['borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth'],
  borderBlockStart: ['borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth'],
  borderBottom: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth'],
  borderColor: ['borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor'],
  borderImage: ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
  borderInlineEnd: ['borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth'],
  borderInlineStart: ['borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth'],
  borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
  borderRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
  borderRight: ['borderRightColor', 'borderRightStyle', 'borderRightWidth'],
  borderStyle: ['borderBottomStyle', 'borderLeftStyle', 'borderRightStyle', 'borderTopStyle'],
  borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
  borderWidth: ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth'],
  columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
  columns: ['columnCount', 'columnWidth'],
  flex: ['flexBasis', 'flexGrow', 'flexShrink'],
  flexFlow: ['flexDirection', 'flexWrap'],
  font: ['fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontLanguageOverride', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition', 'fontWeight', 'lineHeight'],
  fontVariant: ['fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition'],
  gap: ['columnGap', 'rowGap'],
  grid: ['gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows'],
  gridArea: ['gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart'],
  gridColumn: ['gridColumnEnd', 'gridColumnStart'],
  gridColumnGap: ['columnGap'],
  gridGap: ['columnGap', 'rowGap'],
  gridRow: ['gridRowEnd', 'gridRowStart'],
  gridRowGap: ['rowGap'],
  gridTemplate: ['gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows'],
  listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
  margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
  marker: ['markerEnd', 'markerMid', 'markerStart'],
  mask: ['maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPositionX', 'maskPositionY', 'maskRepeat', 'maskSize'],
  maskPosition: ['maskPositionX', 'maskPositionY'],
  outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
  overflow: ['overflowX', 'overflowY'],
  padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
  placeContent: ['alignContent', 'justifyContent'],
  placeItems: ['alignItems', 'justifyItems'],
  placeSelf: ['alignSelf', 'justifySelf'],
  textDecoration: ['textDecorationColor', 'textDecorationLine', 'textDecorationStyle'],
  textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
  transition: ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction'],
  wordWrap: ['overflowWrap']
};

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.kenitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value weturn ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * eplace(msPattern, '-ms-');
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValur.toUpperCase();
    });
  };

  ve(msPattern$1, 'ms-')));
  };

  vaCase() + name.slice(1));
  };

  var whSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  vastyle property.', name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

/**
 * Operations for dealing with CSS properties.
 */

/**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in rn serialized || null;
  }
}
/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 *e'boolean' || value === '';
}
/**
 * Given {color: 'red', overflow: 'hidden'} returns {
 *   color: 'color',
 *   overflowX: 'overflow',
 *   overflowY: 'overflow',
 * }. This can be read as "the overflowY property was set by the overflow
 * shorthand". That is, the values are the property that  }
  }

  return expanded;
}
/**
 * When mixing shorthand and longhand property names, we warn during updates if
 * we expect an incorrect result to occur. In particular, we warn for:
 *
 * Updating a shorthand property (longhand gets overwritten):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
 *   becomes .style.font = 'baz'
 * Removing a shorthand property (longhand gets lost too):
 *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
 *   becomes .style.font = ''
 * Removing a longhand property (should revert to shorthand; doesn't):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
 *   becomes .nalKey);
      }
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (props.children != null || props.dangerouslySetInnerHTML != null) {
      throw new Error(tag + " is a void element tag and must neither have `children` nor " + 'use `dangerouslySetInnerHTML`.');
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (props.children != null) {
      throw new Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
    }

    if (typeof props.dangerouslySetInnerHTML !== 'object' || !(HTML in props.dangerouslySetInnerHTML)) {
      throw new Error('`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://reactjs.org/link/dangerously-set-inner-html ' + 'for more information.');
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (props.style != null && typeof props.style !== 'object') {
    throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} whlt:
      return true;
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  imagesizes: 'imageSizes',
  imagesrcset: 'imageSrcSet',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-description': 0,
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + AT
olidARIAProps(type, props);
}

v, type);
      }
    }
  }
}

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}
oppe, props, eventRegistry);
}

var IS_EVENT_HANDLE_NON_MANAGED_NODE = 1;
var IS_NON_DELEGATED = 1 << 1;
var IS_CAPTURE_PHASE = 1 << 2;
// set to LEGACY_FB_SUPPORT. LEGACY_FB_SUPPORT only gets set when
// we call willDeferLaterForLegacyFBSupport, thus not bailing out
// will result in endless cycles like an infinite loop.
// We also don't want to defer during event replaying.

var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS = IS_EVENT_HANDLE_NON_MANAGED_NODE | IS_NON_DELEGATED | IS_CAPTURE_PHASE;

// This exists to avoid circular dependency between ReactDOMEventReplaying
// and DOMPluginEventSystem.
var c=== currentReplayingEvent;
}

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEvarget.parentNode : target;
}

var restoreImpl = null;
var restoreTarget = nulnstance.type, _props);
  }
}

function setRestoreImplementation(impeuedTargets[i]);
    }
  }
}

// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaul
  return fn(bookkeeping);
};

var flushSyncImpl = function () {};

var ise finishEventHandler();
  }
} // Sct:
      return false;
  }
}
/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */


function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;

  if (stateNode === null) {
    // Work in progress (ex: onload events in incremental mode).
    return null;
  }

  var props = getFiberCurrentPropsFromNode(stateNode);

  if (props === null) {
    // Work in progress.
    return null;
  }

  var listener = props[registrationName];

  if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
    return null;
  }

  if (listener && typeof listener !== 'function') {
    throw new Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type.");
  }

  return listener;
}

var passiveBrowserEventsSupported = false; // Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support

if (canUseDOM) {
  try {
    var options = {}; // $FlowFixMe: Ignore Flow complaining about needing a value

    Object.defineProperty(optintsSupported = true;
      }
    });
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (e) {
    passiveBrowserEve  this.onError(error);
  }
}

var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;

{
  // In DEV mode, we swap out invokeGuardedCallback for a special version
  // that plays more nicely with the browser's DevTools. The idea is to preserve
  // "Pause on exceptions" behavior. Because React wraps all user-provided
  // functions in invokeGuardedCallback, and the production version of
  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
  // like caught exceptions, and the DevTools won't pause unless the developer
  // takes the extra step of enabling pause on caught exceptions. This is
  // unintuitive, though, because even though React has caught the error, from
  // the developer's perspective, the error is uncaught.
  //
  // To preserve the expected "Pause on exceptions" behavior, we don't use a
  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
  // DOM node, and call the user-provided callback from inside an event handler
  // for that fake event. If the callback throws, the error is "captured" using
  // a global event handler. But because the error happens in a different
  // event loop context, it does not interrupt the normal program flow.
  // Effectively, this gives us try-catch behavior without actually using
  // try-catch. Neat!
  // Check that the browser supports the APIs we need to implement our special
  // DEV version of invokeGuardedCallback
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');

    invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
      // If document doesn't exist we know for sure we will crash in this method
      // when we call document.createEvent(). However this can cause confusing
      // errors: https://github.com/facebook/create-react-app/issues/3482
      // So we preemptively throw with a better message instead.
      if (typeof document === 'undefined' || document === null) {
        throw new Error('The `document` global was defined when React was initialized, but is not ' + 'defined anymore. This can happen in a test environment if a component ' + 'schedules an update from an asynchronous callback, but the test has already ' + 'finished running. To solve this, you can either unmount the component at ' + 'the end of your test (and ensure that any asynchronous operations get ' + 'canceled in `componentWillUnmount`), or you can change the test itself ' + 'to be asynchronous.');
      }

      var evt = document.createEvent('Event');
      var didCall = false; // Keeps track of whether the user-provided callback threw an error. We
      // set this to true at the beginning, then set it to false right after
      // calling the function. If the function errors, `didError` will never be
      // set to false. This strategy works even if the browser is flaky and
      // fails to call our global error handler, because it doesn't rely on
      // the error event at all.

      var didError = true; // Keeps track of the value of window.event so that we can reset it
      // during the callback to let user code access window.event in the
      // browsers that support it.

      var windowEvent = window.event; // Keeps track of the descriptor of window.event to restore it after event
      // dispatching: https://github.com/facebook/react/issues/13688

      var windowEventDescriptor = Object.getOwnPropertyDescripndowEvent;
        }
      } // Create an event handler for our fake event. We will synchronously
      // dispatch our fake event using `dispatchEvent`. Inside the handler, we
      // call the user-provided callback.


      var funcArgs = Array.prototype.slic   didError = false;
      } // Create a global error event handler. We use this to capture the value
      // that was thrown. It's possible that this error handler will fire more
      // than once; for example, if non-React code also calls `dispatchEvent`
      // and a handler for that event throws. We should be resilient to most of
      // those cases. Even if our error event handler fires more than once, the
      // last error event is always used. If the callback actually does error,
      // we know that the last error event is the correct one, because it's not
      // possible for anything else to have happened in between our callback
      // erroring and the code that follows the `dispatchEvent` call below. If
      // the callback doesn't error, but the error event was fired, we know to
      // ignore it because `didError` will be false, as described above.


      var error; // Use this to track whether the error event is ever called.

      var didSetError = false;
      var isCros         }
        }
      } // Create a fake event type.


      var evtType = "react-" + (name ? name : 'invokeguardedcallback'); // Attach our event handlers

      window.addEventListener('error', handleWindowError);
      fakeNode.addEventListener(evtType, callCallback, false); // Synchronously dispatch our fake event. If the user-provided function
      // errors, it will trigger our global error handler.

      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);

      if (windowEventDescriptor) {
        Object.defineProperty(window, 'event', windowEventDescriptor);
      }

      if (didCall && didError) {
        if (!didSetError) {
          // The callback errored, but the error event never fired.
          // eslint-disable-next-line react-internal/prod-error-codes
          error = new Error('An error was thrown inside one of your components, but React ' + "doesn't know what it was. This is likely due to browser " + 'flakiness. React does its best to preserve the "Pause on ' + 'exceptions" behavior of the DevTools, which requires some ' + "DEV-mode only tricks. It's possible that these don't work in " + 'your browser. Try triggering the error in production mode, ' + 'or switching to a modern browser. If you suspect that this is ' + 'actually an issue with React, please file an issue.');
        } else if (isCrossOriginError) {
          // eslint-disable-next-line react-internal/prod-error-codes
          error = new Error("A cross-origin error was thrown. React doesn't have access to " + 'the actual error object in development. ' + 'See https://reactjs.org/link/crossorigin-error for more information.');
        }

        this.onError(error);
      } // Remove our event listeners


      window.removeEventListener('error', handleWindowError);

      if (!didCall) {
        // Something went really wrong, and our event was not dispatched.
        // https://github.com/facebook/react/issues/16734
        // https://github.com/facebook/react/issues/16585
        // Fall back to the production implementation.
        restoreAfterDispatch();
        return invokeGuardedCallbackProd.apply(this, arguments);
      }
    };
  }
}

var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;

var hasError = false;
var caughtError = null; // Used by event system to capture/rethrow the first error.

var hasRethrowError = false;
var rethrowError = null;    caughtError = error;
  }
};
/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} argspply(reporter, arguments);
}
/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} argsowError = error;
    }
  }
}
/**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the tnull;
    throw error;
  }
}
function hasCaughtErease file an issue.');
  }
}

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actuy._reactInternals = value;
}

// Don't change these two values. They're used by React Dev Tools.
var NoFlags =
/*                      */
0;
var PerformedWork =
/*                */
1; // You can change the rest (and add more).

var Placement =
/*                    */
2;
var Update =
/*                       */
4;
var PlacementAndUpdate =
/*           */
Placement | Update;
var ChildDeletion =
/*                */
16;
var ContentReset =
/*                 */
32;
var Callback =
/*                     */
64;
var DidCapture =
/*                   */
128;
var ForceClientRender =
/*            */
256;
var Ref =
/*                          */
512;
var Snapshot =
/*                     */
1024;
var Passive =
/*                      */
2048;
var Hydrating =
/*                    */
4096;
var HydratingAndUpdate =
/*           */
Hydrating | Update;
var Visibility =
/*                   */
8192;
var StoreConsistency =
/*             */
16384;
var LifecycleEffectMask = Passive | Update | Callback | Ref | Snapshot | StoreConsistency; // Union of all commit flags (flags with the lifetime of a particular commit)

var HostEffectMask =
/*               */
32767; // These are not really side effects, but we still reuse this field.

var Incomplete =
/*                   */
32768;
var ShouldCapture =
/*                */
65536;
var ForceUpdateForLegacySuspense =
/* */
131072;
var Forked =
/*                       */
1048576; // Static tags describe aspects of a fiber that are not specific to a render,
// e.g. a fiber uses a passive effect (even if there are no updates on this particular render).
// This enables us to defer more work in the unmount case,
// since we can defer traversing the tree during layout to look for Passive effects,
// and instead rely on the static flag as a signal that there may be cleanup work.

var RefStatic =
/*                    */
2097152;
var LayoutStatic =
/*                 */
4194304;
var PassiveStatic =
/*                */
8388608; // These flags allow us to traverse to fibers that have effects on mount
// without traversing the entire tree after every commit for
// double invoking

var MountLayoutDev =
/*               */
16777216;
var MountPassiveDev =
/*              */
33554432; // Groups of flags that are used in the commit phase to skip over trees that
// don't contain effects, by checking subtreeFlags.

var BeforeMutationMask = // TODO: Remove Update flag from before mutation phase by re-landing Visibility
// flag logic (see #20043)
Update | Snapshot | ( 0);
var MutationMask = Placement | Update | ChildDeletion | ContentReset | Ref | Hydrating | Visibility;
var LayoutMask = Update | Callback | Ref | Visibility; // TODO: Split into PassiveMountMask and PassiveUnmountMask

var PassiveMask = Passive | ChildDeletion; // Union of tags that don't get reset on clones.
// This allows certain concepts to persist without recalculating them,
// e.g. whether a subtree contains passive effects or portals.

var StaticMask = LayoutStatic | PassiveStatic | RefStatic;

var ReactCurrentOwner = ReactSharedtnnch.


  return alternate;
}
function findCurrentHostFiber(parent) {
  var currentParent = findCurrentFiberUsingSlowPath(parent);
  return currentParent !== null ? findCurrentHostFiberImbmbling;
  }

  return null;
}

// This module only exists as an ESM wrapper around the external CommonJS
var scheduleCallback = Scheduler.unstable_scheduleCallback;
var cancelCallback = Scheduler.unstable_cancelCallback;
var shouldYield = Scheduler.unstable_shouldYield;
var requestPaint = Scheduler.unstable_requestPaint;
var now = Scheduler.unstable_now;
var getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
var NormalPriority = Scheduler.unstable_NormalPriority;
var LowPriority = Scheduler.unstable_LowPriority;
var IdlePriority = Scheduler.unstable_IdlePriority;
// this doesn't actually exist on the scheduler, but it *does*
// on scheduler/unstable_mock, which we'll need for internal testing
var unstable_yieldValue = Scheduler.unstable_yieldValue;
var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;

var rendererID = null;
var injectedHook = null;
var injectedProfilingHooks = null;
var hasLoggedError = false;
var isDevToolsPresent = typeof __REACT_DEVTOOLS_GL       }
      }
    }
  }
}
function onPostCommitRoot(root) {
  if (injectedHook && typeof injectedHook.onPostCommitFiberRoot === 'function') {
    try {
      injectedHook.onPostCommitFiberRoot(rendererID, root);
    } catch (err) {
      {
        if (!hasLoggedError) {
          hasLoggedError = true;

          error('React instrumentation encountered an error: %s', err);
        }
      }
    }
  }
} // Profiler API hooks

function injectProfilingHooks(profilingHooks) {
  injectedProfili    }

    return map;
  }
}

function markCommitStarted(lanes) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markCommitStarted === 'function') {
      injectedProfilingHooks.markCommitStarted(lanes);
    }
  }
}
function markCommitStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markCommitStopped === 'function') {
      injectedProfilingHooks.markCommitStopped();
    }
  }
}
function markComponentRenderStarted(fiber) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentRenderStarted === 'function') {
      injectedProfilingHooks.markComponentRenderStarted(fiber);
    }
  }
}
function markComponentRenderStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentRenderStopped === 'function') {
      injectedProfilingHooks.markComponentRenderStopped();
    }
  }
}
function markComponentPassiveEffectMountStarted(fiber) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted === 'function') {
      injectedProfilingHooks.markComponentPassiveEffectMountStarted(fiber);
    }
  }
}
function markComponentPassiveEffectMountStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped === 'function') {
      injectedProfilingHooks.markComponentPassiveEffectMountStopped();
    }
  }
}
function markComponentPassiveEffectUnmountStarted(fiber) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted === 'function') {
      injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(fiber);
    }
  }
}
function markComponentPassiveEffectUnmountStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped === 'function') {
      injectedProfilingHooks.markComponentPassiveEffectUnmountStopped();
    }
  }
}
function markComponentLayoutEffectMountStarted(fiber) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted === 'function') {
      injectedProfilingHooks.markComponentLayoutEffectMountStarted(fiber);
    }
  }
}
function markComponentLayoutEffectMountStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped === 'function') {
      injectedProfilingHooks.markComponentLayoutEffectMountStopped();
    }
  }
}
function markComponentLayoutEffectUnmountStarted(fiber) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted === 'function') {
      injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(fiber);
    }
  }
}
function markComponentLayoutEffectUnmountStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped === 'function') {
      injectedProfilingHooks.markComponentLayoutEffectUnmountStopped();
    }
  }
}
function markComponentErrored(fiber, thrownValue, lanes) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentErrored === 'function') {
      injectedProfilingHooks.markComponentErrored(fiber, throakeable, lanes);
    }
  }
}
function markLayoutEffectsStarted(lanes) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markLayoutEffectsStarted === 'function') {
      injectedProfilingHooks.markLayoutEffectsStarted(lanes);
    }
  }
}
function markLayoutEffectsStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markLayoutEffectsStopped === 'function') {
      injectedProfilingHooks.markLayoutEffectsStopped();
    }
  }
}
function markPassiveEffectsStarted(lanes) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markPassiveEffectsStarted === 'function') {
      injectedProfilingHooks.markPassiveEffectsStarted(lanes);
    }
  }
}
function markPassiveEffectsStopped() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markPassiveEffectsStopped === 'function') {
      injectedProfilingHooks.markPassiveEffectsStopped();
    }
  }
}
function markRenderStarted(lanes) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderStarted === 'function') {
      injectedProfilingHooks.markRenderStarted(lanes);
    }
  }
}
function markRenderYielded() {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderYielded === 'function') {
      injectedProfilingHooks.markScheduled(lane);
    }
  }
}
function markForceUpdateScheduled(fiber, lane) {
  {
    if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markForceUpdateScheduled === 'function') {
      injectedProfilingHooks.markForceUpdateScheduled(fiber, lane);
    }
  }
}

var NoMode =
/*                         */
0; // TODO: Remove ConcurrentMode by reading from the root tag instead

var ConcurrentMode =
/*                 */
1;
var ProfileMode =
/*                    */
2;
var StrictLegacyMode =
/*               */
8;
var StrictEffectsMode =
/*              */
16;

// TODO: This is pretty well supported by browsers. Maybe we can drop it.
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback; // Count leading zeros.
// Based on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

var log = Maog(asUint) / LN2 | 0) | 0;
}

// If those values are changed that package should be rebuilt and redeployed.

var TotalLanes = 31;
var NoLanes =
/*                        */
0;
var NoLane =
/*                          */
0;
var SyncLane =
/*                        */
1;
var InputContinuousHydrationLane =
/*    */
2;
var InputContinuousLane =
/*            */
4;
var DefaultHydrationLane =
/*            */
8;
var DefaultLane =
/*                    */
16;
var TransitionHydrationLane =
/*                */
32;
var TransitionLanes =
/*                       */
4194240;
var TransitionLane1 =
/*                        */
64;
var TransitionLane2 =
/*                        */
128;
var TransitionLane3 =
/*                        */
256;
var TransitionLane4 =
/*                        */
512;
var TransitionLane5 =
/*                        */
1024;
var TransitionLane6 =
/*                        */
2048;
var TransitionLane7 =
/*                        */
4096;
var TransitionLane8 =
/*                        */
8192;
var TransitionLane9 =
/*                        */
16384;
var TransitionLane10 =
/*                       */
32768;
var TransitionLane11 =
/*                       */
65536;
var TransitionLane12 =
/*                       */
131072;
var TransitionLane13 =
/*                       */
262144;
var TransitionLane14 =
/*                       */
524288;
var TransitionLane15 =
/*                       */
1048576;
var TransitionLane16 =
/*                       */
2097152;
var RetryLanes =
/*                            */
130023424;
var RetryLane1 =
/*                             */
4194304;
var RetryLane2 =
/*                             */
8388608;
var RetryLane3 =
/*                             */
16777216;
var RetryLane4 =
/*                             */
33554432;
var RetryLane5 =
/*                             */
67108864;
var SomeRetryLane = RetryLane1;
var SelectiveHydrationLane =
/*          */
134217728;
var NonIdleLanes =
/*                                 */
268435455;
var IdleHydrationLane =
/*               */
268435456;
var IdleLane =
/*                       */
536870912;
var OffscreenLane =
/*                   */
1073741824; // This function is used for the experimental timeline (react-devtools-timeline)
// It should be kept in sync wurn 'Offscreen';
    }
  }
}
var NoTimestamp = -1;
var nextTransitionLane = TransitionLane1;
var 
e }

    lanes &= ~lane;
  }
} // This returns the highest priority pending lanes regardless of whene;
  }

  return NoLanes;
}
function includesSyncLane(lanes) {
  return (laneNonIdleLanes) !== NoLanes;
}
function includesOnlyRetries(lanes) {
  return (laneexpiredLanes) !== NoLanes;
}
function isTransitionLane(lane) {
  return (lane & TransitionLanes) !== 0;
}
function claimNextTransitionLane() {
  // Cycle through the lanes, assigning each new transition to the next lane.
  // In most cases, this means every transition gets its own lane, until we
  // run out of lanes and cycle back to the beginning.
  var lane = nextTransitionLane;
  nextTransitionLane <<= 1;

  if ((nextTransitionLane & TransitionLanes) === 0) {
    nextTransitionLane = TransitionLane1;
  }

  return lane;
}
function claimNextRetryLane() {
  var lane = nextRetryLane;
  nextRetryLane <<= 1;

  if ((nextRetryLane & RetryLanes) === 0) {
    nextRetryLane = Retry{
  return lanes & -lanes;
}
function pickArbitraryLane(lanes) {
  // This wrapper function gets inlined. Only exists so to communicate that it
  // doesn't matter which bit is selected; you can pick any bit without
  // affecting the algorithms where its used. Here I'm using
  // getHighestPriorityLane because it requires the fewest operations.
  return getHi kes(a, b) {
  return a & b;
} // Seems redundant, but it changes the type from a single lane (used for
// updates) to a group of lanes (used for flushing work).

function laneToLapendedLanes & pingedLanes;
}
function markRootFinished(root, remainingLanes) {
  var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
  root.pendingLanes = remainingLanes; // Let's try everything again

  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.mutableReadLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  var entanglements = root.entanglements;
  var eventTimes = root.eventTimes;
  var expirationTimes = root.expirationTimes; // Clear the lanes that no longer have pending work

  var lanes = noLongerPendingLanes;

  while (lanes > 0) {
    var index = pickArbitraryLaneIndex(lanes);
    var lane = 1 << index;
    entanglements[index] = NoLanes;
    eventTimes[index] = NoTimestamp;
    expirationTimes[index] = NoTimestam}

    lanes &= ~lane;
  }
}

var DiscreteEventPriority = SyncLane;
var ContinuousEventPriority = InputContinuousLane;
var DefaultEventPriority = DefaultLane;
var IdleEventPriority = IdleLane;
var cururn currentUpdatePriority;
}
function setCurrentUpdatePriority(newPriority) {
  currentUpd return IdleEventPriority;
}

// This is imported by the event replaying implementation in React DOM. It's
// in a separate file to break a circular dependency between the rencurrentState.isDehydrated;
}

var _attemptSynchronousHydration;

function setAttemptSynchronousHydration(fn) {
  _attemptnchronousHydration(fiber);
}
var attemptContinuousHydration;
function setAttemptContinuousHydration(fn) {
  attemptContinuousHydration = fn;
}
var attemptHydrationAtCurrentPriority;
function setAttemptHydrationAtCurrentPriority(fn) {
  attemptHydrationAtCurrentPriority = fn;
}
var getCurrentUpdatePriority$1;
function setGetCurrentUpdatePriority(fn) {
  getCurrentUpdatePriority$1 = fn;
}
vartHydrationAtPriority = fn;
} // TODO: Upgrade this definition once we're on a newer version of Flow that
// has this definition built-in.

var hasScheduledReplayAttempt = false; // The queue of discrete events to be replayed.

var queuedDiscreteEvents = []; // Indicates if any continuous event targets are non-null for early bailout.
// if the last target was dehydrated.

var queuedFocus = null;
var queuedDrag = null;
var queuedMouse = null; // For pointer events there can be one latest event per pointerId.

var queuedPointers = new Map();
var queuedPointerCaptures = new Map(); // We could consider replaying selectionchange and touchmoves too.

var queuedExplicitHydrationTargets = [];
var synchronouslyHydratedEvents = ['mousedown', 'mouseup', 'touchcancel', 'touchend', 'touchstart', 'auxclick', 'dblclick', 'pointercancel', 'pointerdown', 'pointerup', 'dragend', 'dragstart', 'drop', 'compositionend', 'compositionstart', 'keydown', 'keypress', 'keyup', 'input', 'textInput', // Intentionally camelCase
'copy', 'cut', 'paste', 'click', 'change', 'contesrs: [targetContainer]
  };
} // Resets the replaying for this type of con e    }
  }

  return false;
} // Check if this target is unblocked. RetuedTarget.blockedOn = null;
}

function queueExplicitHydrationTarget(target) {
  {
    // TODO: This will read the priority if it's dispatched by the React
    // event system but not native events. Should read window.event.type, like
    // we do for updates (getCurrentEventPriority).
    var updatePriority = getCurrentUpdatePriority$1();
    var queuedTarget = {
      blockedOn: null,
      target: target,
      priority: updatePriority
    };
    var i = 0;

    for (; i < queuedExplicitHydrationTargets.length; i++) {
      // Stop once we hit the first target with lower priority than
      if (!isHigherEventPriority(updatePriority, queuedExplicitHydrationTargets[i].priority)) {
        break;
      }
    }

    queuedExplicitHydrationTargets.splice(i, 0, queuedTarget);

    if (i === 0) {
      attemptExplicitHydrationTarget(queuedTarget);
    }
  }
}

function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (queuedEvent.blockedOn !== null) {
    return false;
  }

  var targetContainers = queuedEvent.targetContainers;

  while (targetContainers.length > 0) {
    var targetContainer = targetContainers[0];
    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.domEventName, queuedEvent.eventSystemFlags, targetContainer, queuedEvent.nativeEvent);

    if (nextBlockedOn === null) {
      var nativeEvent = queuedEvent.nativeEvent;
      var nativeEventClone = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
      setReplayingEvent(nativeEventClone);
      nativeEvent.target.dispatchEvent(nativeEventClone);
      resetReplayingEvent();
    } else {
      // We're still blocked. Try again later.
      var _fiber2 = getInstanceFromNode(nextBlockedOn);

      if (_fiber2 !== null) {
        attemptContinuousHydration(_fiber2);
      }

      queuedEvent.blockedOn = nextBlockedOn;
      return false;
    } // This target container was successfully dispatched. Try the next.


    targetContainers.shi{nnshift();
      }
    }
  }
}

var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig; // TODO: emFlags, targetContainer);
}

function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
  var previousPriority = getCurrentUpdatePriority();
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = null;

  try {
    setCurrentUpdatePriority(DiscreteEventPriority);
    dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    setCurrentUpdatePriority(previousPriority);
    ReactCurrentBatchConfig.transittt, null, targetContainer);
}

var return_targetInst = null; // Returns a SuspenseInstance or Container if it's blocked.
// The return_targetInst field above is conceptuall DefaultEventPriority;
  }
}

function addEventBubbleListener(target, eventType, listener) {
  target.addEventListener(eventType, listener, e
  });
  return listener;
}

/**
 * These variables store information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */
var root = null;
var startText = nu  return root.textContent;
}

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} NormalicharCode;
  }

  return 0;
}

function functionThatRetursFalse() {
  return false;
} // This is intentionally a factory so that we have different returned constructors.
// If we had a single constructor, it would be megamorphic and engines would deopt.


function createSyntheticEvent(Interface) {
  /**
   * Synthetic events are dispatched by event plugins, typically in response to a
   * top-level event delegation handler.
   *
   * These systems should generally use pooling to reduce the frequency of garbage
   * collection. The system should check `isPersistent` to determine whether the
   * event should be released into the pool after being dispatched. Users that
   * need a persisted event should invoke `persist`.
   *
   * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
   * normalizing browser quirks. Subclasses do not necessarily have to implement a
   * DOM interface; custom application-specific events cansFalse;
    return this;
  }

  assign(SyntheticBaseEvent.protnctionThatReturnsTrue;nctionThatReturnsTrue;
    },

    /**
     * We release all dispatched `SyntheticEvent`s after each event loop, adding
     * them back into the pool. This allows a way to hold onto a reference that
     * won't be added back into thm doesn't use pooling.
    },

    /**
     * Checks if this event should be released back into the pool.
     *
     * @return {boolean} True if this should not be released, false otherwise.
     */
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */


var EventInterface = {
  eventPhase: 0,
  bubbles: 0,
 timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0
};
var SyntheticEvent = createSyntheticEvent(EventInterface);

var UIEventInterface = assign({}, EventInterface, {
  view: 0,
  detail: 0
});

var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
var lastMovementX;
var lastMovastMouseEvent = event;
  }
}
/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */


var MouseEventInterface = assign({}, UIEventInterface, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: getEventModifierState,
  button: 0,
  buttons: 0,
  relatedTarget: function (event) {
    if (event.relatedTarget === undefined) return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
    return event.relatedTarget;
  },
  movementX: function (event) {
    if ('movementX' in event) {
      return event.movementX;
    }

    updateMouseMovementPolyfillState(event);
    return lastMovementX;
  },
  movementY: function (event) {
    if ('movementY' in event) {
      return event.movementY;
    } // Don't need to call updateMouseMovementPolyfillState() here
    // because it's guaranteed to have already run when movementX
    // was copied.


    return lastMovementY;
  }
});

var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */

var DragEventInterface = assign({}, MouseEventInterface, {
  dataTransfer: 0
});

var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */

var FocusEventInterface = assign({}, UIEventInterface, {
  relatedTarget: 0
});

var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */

var AnimationEventInterface = assign({}, EventInterface, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});

var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */

var ClipboardEventInterface = assign({}, EventI : window.clipboardData;
  }
});

var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */

var CompositionEventInterface = assign({}, EventInterface, {
  data: 0
});

var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
// Happens to share the same list for now.

var SyntheticInputEvent = SyntheticCompositionEvent;
/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */

var normalizeKey = {
  Esc: 'Escape',
  Spacebar: ' ',
  Left: 'ArrowLeft',
  Up: 'ArrowUp',
  Right: 'ArrowRight',
  Down: 'ArrowDown',
  Del: 'Delete',
  Win: 'OS',
  Menu: 'ContextMenu',
  Apps: 'ContextMenu',
  Scroll: 'ScrollLock',
  MozPrintableKey: 'Unidentified'
};
/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */

var translateToKey = {
  '8': 'Backspace',
  '9': 'Tab',
  '12': 'Clear',
  '13': 'Enter',
  '16': 'Shift',
  '17': 'Control',
  '18': 'Alt',
  '19': 'Pause',
  '20': 'CapsLock',
  '27': 'Escape',
  '32': ' ',
  '33': 'PageUp',
  '34': 'PageDown',
  '35': 'End',
  '36': 'Home',
  '37': 'ArrowLeft',
  '38': 'ArrowUp',
  '39': 'ArrowRight',
  '40': 'ArrowDown',
  '45': 'Insert',
  '46': 'Delete',
  '112': 'F1',
  '113': 'F2',
  '114': 'F3',
  '115': 'F4',
  '116': 'F5',
  '117': 'F6',
  '118': 'F7',
  '119': 'F8',
  '120': 'F9',
  '121': 'F10',
  '122': 'F11',
  '123': 'F12',
  '144': 'NumLock',
  '145': 'ScrollLock',
  '224': 'Meta'
};
/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Nortified';
  }

  return '';
}
/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */


var modifierKeyToProp = {
  Alt: 'altKey',
  Control: 'ctrlKey',
  Meta: 'metaKey',
  Shift: 'shiftKey'
}; // Older browsers (Safari <= 10, iOS Safari <= 10.2) do not support
// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lieturn modifierStateGetter;
}
/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */


var KeyboardEventInterface = assign({}, UIEventInterface, {
  key: getEventKey,
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: getEventModifierState,
  // t);
    }

 de;
    }
de;
    }

    return 0;
  }
});

var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
/**
 * @interface PointerEvent
 * @see http://www.w3.org/TR/pointerevents/
 */

var PointerEventInterface = assign({}, MouseEventInterface, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
});

var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */

var TouchEventInterface = assign({}, UIEventInterface, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: getEventModifierState
});

var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */

var TransitionEventInterface = assign({}, EventInterface, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
});

var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */

var WheelEventInterface = assign({}, Mous -event.whe? -event.wheelDelta : 0;
  },
  deltaZ: 0,
  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: 0
});

var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space

var START_KEYCODE = 229;
var canUseCompositionEvent = canUseDOM && 'CompositionEvent' in window;
var documentMode = null;

if (canUseDOM && 'documentMode' in document) {
  documentMode = document.documentMode;
} // Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.


var canUseTextInputEvent = canUseDOM && 'TextEvent' in window && !documentMode; // In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.

var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.f', 'keyup', 'mousedown']);
} // Track whether we've ever handled a keypress on the space key.


var hasSpaceKeypress = false;
/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though noey && nativeEvent.altKey);
}
/**
 * Translate native top level ev'onCompositionUpdate';
  }
}
/**
 * Does our fallback best-guess model think this event signifies that
 * keyCode === START_KEYCODE;
}
/**
 * Does our fallback mode think that this event is tt:
      return false;
  }
}
/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEven.data;
  }

  return null;
}
/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 * @param {object} nativeEventiveEvent.locale === 'ko';
} // Track the current IME composition status, if any.


var isComposing = false;
/**
 * @return {?object} A Syntng.
      return null;
  }
}
/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use folt:
      return null;
  }
}
/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object}    event.data = chars;
  }
}
/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `comEvent, nativeEventTarget);
}

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
 true;
  }

  return false;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0p yers: listeners
    });
  }
}
/**
 * For IE shims
 */


var activeElement = null;
var activeElementInst = null;
/**
 * SECTION'ntInBatch, dispatchQueue);
}

function runEventInBatch(dispatchQueue) {
  processDispatc     return targetInst;
  }
}
/**
 * SECTION: handle `input` event
 */


var isInputEventSupported = false;

if (canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events.
  isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 9);
}
/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 e', handlePropertyChange);
}
/**
 * (For IE <=9) Removes the event listeners from the currently-tracked elem activeElementInst = null;
}
/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the activnchingForValueChange();ed(activeElementInst);
  }
}
/**
 * SECTION|uu'number', node.value);
  }
}
/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * Interout', 'pointerover']);
}
/**
 * For almost every interaction we care about, there will be both a top-level
 * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
 * we do not extract duplicate events. However, moving the mouse into the
 * browser from outside will not fire a `mouseout` event. In this case, we use
 * the `mouse, leave, enter, from, to);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/e-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */

function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    var currentKey = keysA[i];

    if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey])) {
      return false;
    }
  }

  return true;
}

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {Child;
  }

  return node;
}
/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?Dode = node.parentNode;
  }
}
/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offsegetSiblingNode(node));
  }
}

/**
 * @param {DOMElement} outerNo, focusNode, focusOffset);
}
/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exp: start,
    end: end
  };
}
/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * adsnrt);
  }

  return element;
}
/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */

/**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * ann(focusedElem) : null
  };
}
/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resultilTop = info.top;
    }
  }
}
/**
 * @getSelection: Gets the selection bounds of a focused textarea, input or
 * contentEditable node.
 * -@input: Look up selection bounds of this input
 * -@return {start: selectionSt start: 0,
    end: 0
  };
}
/**
 * @setSelection: Sets the selection bounds of a textarea or input and focuses
 * the input.
 * -@input     Set selection bounds of this input or textarea
 * -@offsets   Object of same form thafsets(input, offsets);
  }
}

var skipSelectionChangeEvent = canUseDOM && 'documentMode' in document && deup', 'selectionchange']);
}

var activeElement$1 = null;
var activeElementInst$1 = null;
var lastSelection = null;
var mouseDown = false;
/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will reion.focusOffset
    };
  }
}
/**
 * Get document associated eventTarget.ownerDocument;
}
/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @param {object} nativeEventTarget
 * @reactiveElement$1;
    }
  }
}
/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Ft, nativeEventTarget);
  }
}

/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventNantName;
  return prefixes;
}
/**
 * A list of event names to a configurable list of vendor prefixes.
 */


var vendorPrefixes = {
  animationend: makePrefixMap('Animation', 'AnimationEnd'),
  animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
  animationstart: makePrefixMap('Animation', 'AnimationStart'),
  transitionend: makePrefixMap('Transition', 'TransitionEnd')
};
/**
 * Event names that have already been detected and prefixed (if applicable).
 */

var prefixedEventNames = {};
/**
 * Element to check for prefixes on.
 */

var style = {};
/**
 * Bootstrap if a DOM exists.
 */

if (canUseDOM) {
  style = document.createElement('div').style; // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are usable, and if not remove them from the map.

  if (!('AnimationEvent' in window)) {
    delete vendorPrefixes.animationend.animation;
    delete vendorPrefixes.animationiteration.animation;
    delete vendorPrefixes.animationstart.animation;
  } // Same as above


  if (!('TransitionEvent' in window)) {
    delete vendorPrefixes.transitionend.transition;
  }
}
/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventNam}
  }

  return eventName;
}

var ANIMATION_END = getVendorPrefixedEventName('animationend');
var ANIMATION_ITERATION = getVendorPrefixedEventName('animationiteration');
var ANIMATION_START = getVendorPrefixedEventName('animationstart');
var TRANSITION_END = getVendorPrefixedEventName('transitionend');

var topLevelEventsToReactNames = new Map(); // NOTE: Capitalization is important in this list!
//
// E.g. it needs "pointerDown", not "pointerdown".
// This is because we derive both React name ("onPointerDown")
// and DOM name ("pointerdown") from the same list.
//
// Exceptions that don't match this convention are listed separately.
//
// prettier-ignore

var simpleEventPluginEvents = ['abort', 'auxClick', 'cancel', 'canPlay', 'canPlayThrough', 'click', 'close', 'contextMenu', 'copy', 'cut', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'gotPointerCapture', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'lostPointerCapture', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'pointerCancel', 'pointerDown', 'pointerMove', 'pointerOut', 'pointerOver', 'pointerUp', 'progress', 'rateChange', 'reset', 'resize', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'touchCancel', 'touchEnd', 'touchStart', 'volumeChange', 'scroll', 'toggle', 'toucheNteners
      });
    }
  }
}

// TODO: remove top-level side effect.
registerSimpleEvents();
registerEvents$2();
registerEvents$1();
registerEvt, nativeEventTarget);
  }
} // List of events that need to be individually attached to media elements.


var mediaEventTypes = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'encrypted', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'resize', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting']; // We should not delegate these events to the container, but rather
// set them on the actual target element itself. This is primarily
// because these events do not consistently bubble in the DOM.

var nonDelegatedEvents = new Set(['cancel', 'close', 'invalid', 'load', 'scroll', 'toggle'vn
h, isCapturePhaseListener);
} // This is only used by createEventHandle when the
var listeningMarker = '_reactListening' + Math.rancNtvT;
  }

  return listeners;
} // We should only use this function for:
// - BeforeInputEventPlugin
// - ChangeEventPlugin
// - SelectEventPlugin
// This is because we only process these plugins
// in the bubble phase, so we need to accumulate two
// phase event; inst;
  }

  return null;
}
/**
 * Return the lowest common ancestor of A and B, or null if they are oers: listeners
    });
  }
} // We should only use this function for:
// - EnterLeaveEventPlugin
// This is because we only process this plugin
// in the bubble phase, so we need to accumulate twoe ? 'capture' : 'bubble');
}

var didWarnInvalidHydration = false;
var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
var SUPPRESS_CONTENT_EDITABLE_WARNING = 'suppressContentEditableWarning';
var SUPPRESS_HYDRATION_WARNING = 'suppressHydrationWarning';
var AUTOFOCUS = 'autoFocus';
var CHILDREN = 'children';
var STYLE = 'style';
var HTML$1 = '__html';
var warnedUnknownTags;
var suppressHydrationWarning;
var validatePropertiesInDevelopment;
var warnForPropDifference;
var warnForExtraAttributes;
var warnForInvalidEventListener;
var canDiffStyleForHydrationWarning;
var normalizeHTML;

{
  warnedUnknownTags = {
    // There are working polyfills for <dialog>. Let people use it.
    dialog: true,
    // Electron ships a custom <webview> tag to display external web content in
    // an isolated frame and process.
    // This tag is not present in non Electron environments such as JSDom which
    // is often used for testing purposes.
    // @see https://electronjs.org/docs/api/webview-tag
    webview: true
  };

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, {
      registrationNameDependencies: registrationNameDependencies,
      possibleRegistrationNames: possibleRegistrationNames
    });
  }; // IE 11 parses & normalizes the style attribute as opposed to other
  // browsers. It adds spaces and sorts the properties in some
  // non-alphabetical order. Handling that would require sorting CSS
  // properties in the client & server versions or applying
  // `expectedStyle` to a temporary DOM node to read its `style` attribute
  // normalized. Since it only affects IE, we're skipping style warnings
  // in that browser completely in favor of doing all that work.
  // See https://github.com/facebook/react/issues/11807


  canDiffStyleForHydrationWarning = canUseDOM && !document.documentModenormalizedClientValue));
  };the server: %s', names);
  };

  w typeof listener);
    }
  }; // Parse the HTML and read it back to normalize the HTML string so that it
  // can be used for comn testElement.innerHTML;
  };
} // HTML parsing normalizes CR and CRLF to LF.
// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.


var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
var NORMALIZE_NULL_AND_REPLACEMENNrinerElement.ownerDocument;
}

function noop() {}

function trapClickOnNonInteractiveElement(node) {
  // Mobile Safari does not fire properly bubble click events on
  // non-interactive elements, which means delegated click listeners do not
  // fire. The workaround for this bug involves attaching an empty click
  // listener on the target node.
  // https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
  // Just set it using the onclick property so that we don't have to manage any
  // bookkeeping for it. Not sure if we need to clear it when the listener is
  // removed.
  // TODO: Only do this for the relevant Safaris mayboo
      }

      break;
  }
} // Calculate the di}

  return updatePaawerCasedName] || null;
  }
}

function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement, isConcurrentMode, shouldWarnDev) {
  var isCustomComponentTag;
  var extraAttributeNames;

  {
    suppressHydrationWarning = rawProps[SUPPRESS_HYDRATION_WARNING] === true;
    isCustomComponentTag = isCustomComponent(tag, rawProps);
    validatePropertiesInDevelopment(tag, rawProps);
  } // TODO: Make sure that we check isMounted before firing any of these events.


  switch (tag) {
    case 'dialog':
      listenToNonDelegatedEvent('cancel', domElement);
      listenToNonDelegatedEvent('close', domElement);
      break;

    case 'iframe':
    case 'object':
    case 'embed':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the load event.
      listenToNonDelegatedEvent('load', domElement);
      break;

    case 'video':
    case 'audio':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for all the media events.
      for (var i = 0; i < mediaEventTypes.length; i++) {
        listenToNonDelegatedEvent(mediaEventTypes[i], domElement);
      }

      break;

    case 'source':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the error event.
      listenToNonDelegatedEvent('error', domElement);
      break;

    case 'img':
    case 'image':
    case 'link':
      // We listen to these events in case to ensure emulated bubble
      // listeners still fire for error and load events.
      listenToNonDelegatedEvent('error', domElement);
      listenToNonDelegatedEvent('load', domElement);
      break;

    case 'details':
      // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the toggle event.
      listenToNonDelegatedEvent('toggle', domElement);
      break;

    case 'input':
      initWrapperState(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);
      break;

    case 'option':
      validateProps(domElement, rawProps);
      break;

    case 'select':
      initWrapperState$1(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);
      break;

    case 'textarea':
      initWrapperState$2(domElement, rawProps); // We listen to this event in case to ensure emulated bubble
      // listeners still fire for the invalid event.

      listenToNonDelegatedEvent('invalid', domElement);
      break;
  }

  assertValidProps(tag, rawProps);

  {
    extraAttributeNames = new Set();
    var attributes = domElement.attributes;

    for (var _i = 0; _i < attributes.length; _i++) {
      var name = attributes[_i].name.toLowerCase();

      switch (name) {
        // Controlled attributes are not validated
        // TODO: Only ignore them on controlled tags.
        case 'value':
          break;

        case 'checked':
          break;

        case 'selected':
          break;

        default:
          // Intentionally use the original name.
          // See discussion in https://github.com/facebook/react/pull/10676.
          extraAttributeNames.add(attributes[_i].name);
      }
    }
  }

  var updatePayload = null;

  for (var propKey in rawProps) {
    if (!rawProps.hasOwnProperty(propKey)) {
      continue;
    }

    var nextProp = rawProps[propKey];

    if (propKey === CHILDREN) {
      // For text content children we compare against textContent. This
      // might match additional HTML that is hidden when we read it using
      // textContent. E.g. "foo" will match "f<span>oo</span>" but that still
      // satisfies our requirement. Our requirement is not to produce perfect
      // HTML and attributes. Ideally we should preserve structure but it's
      // ok not to if the visible content is still enough to indicate what
      // even listeners these nodes might be wired up to.
      // TODO: Warn if there is more than a single textNode as a child.
      // TODO: Should we use domElement.firstChild.nodeValue to compare?
      if (typeof nextProp === 'string') {
        if (domElement.textContent !== nextProp) {
          if (!suppressHydrationWarning) {
            checkForUnmatchedText(domElement.textContent, nextProp, isConcurrentMode, shouldWarnDev);
          }

          updatePayload = [CHILDREN, nextProp];
        }
      } else if (typeof nextProp === 'number') {
        if (domElement.textContent !== '' + nextProp) {
          if (!suppressHydrationWarning) {
            checkForUnmatchedText(domElement.textContent, nextProp, isConcurrentMode, shouldWarnDev);
          }

          updatePayload = [CHILDREN, '' + nextProp];
        }
      }
    } else if (registrationNameDependencies.hasOwnProperty(propKey)) {
      if (nextProp != null) {
        if ( typeof nextProp !== 'function') {
          warnForInvalidEventListener(propKey, nextProp);
        }

        if (propKey === 'onScroll') {
          listenToNonDelegatedEvent('scroll', domElement);
        }
      }
    } else if (shouldWarnDev && true && // Convince Flow we've calculated it (it's DEV-only in this method.)
    typeof isCustomComponentTag === 'boolean') {
      // Validate that the properties correspond to their expected values.
      var serverValue = void 0;
      var propertyInfo = isCustomComponentTag && enableCustomElementPropertySupport ? null : getPropertyInfo(propKey);

      if (suppressHydrationWarning) ; else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING || // Controlled attributes are not validated
      // TODO: Only ignore them on controlled tags.
      propKey === 'value' || propKey === 'checked' || propKey === 'selected') ; else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
        var serverHTML = domElement.innerHTML;
        var nextHtml = nextProp ? nextProp[HTML$1] : undefined;

        if (nextHtml != null) {
          var expectedHTML = normalizeHTML(domElement, nextHtml);

          if (expectedHTML !== serverHTML) {
            warnForPropDifference(propKey, serverHTML, expectedHTML);
          }
        }
      } else if (propKey === STYLE) {
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey);

        if (canDiffStyleForHydrationWarning) {
          var expectedStyle = createDangerousStringForStyles(nextProp);
          serverValue = domElement.getAttribute('style');

          if (expectedStyle !== serverValue) {
            warnForPropDifference(propKey, serverValue, expectedStyle);
          }
        }
      } else if (isCustomComponentTag && !enableCustomElementPropertySupport) {
        // $FlowFixMe - Should be inferred as not undefined.
        extraAttributeNames.delete(propKey.toLowerCase());
        serverValue = getValueForAttribute(domElement, propKey, nextProp);

        if (nextProp !== serverValue) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
      } else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
        var isMismatchDueToBadCasing = false;

        if (propertyInfo !== null) {
          // $FlowFixMe - Should be inferred as not undefined.
          extraAttributeNames.delete(propertyInfo.attributeName);
          serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
        } else {
          var ownNamespace = parentNamespace;

          if (ownNamespace === HTML_NAMESPACE) {
            ownNamespace = getIntrinsicNamespace(tag);
          }

          if (ownNamespace === HTML_NAMESPACE) {
            // $FlowFixMe - Should be inferred as not undefined.
            extraAttributeNames.delete(propKey.toLowerCase());
          } else {
            var standardName = getPossibleStandardName(propKey);

            if (standardName !== null && standardName !== propKey) {
              // If an SVG prop is supplied with bad casing, it will
              // be successfully parsed from HTML, but will produce a mismatch
              // (and would be incorrectly rendered on the client).
              // However, we already warn about bad casing elsewhere.
              // So we'll skip the misleading extra mismatch warning in this case.
              isMismatchDueToBadCasing = true; // $FlowFixMe - Should be inferred as not undefined.

              extraAttributeNames.delete(standardName);
            } // $FlowFixMe - Should be inferred as not undefined.


            extraAttributeNames.delete(propKey);
          }

          serverValue = getValueForAttribute(domElement, propKey, nextProp);
        }

        var dontWarnCustomElement = enableCustomElementPropertySupport  ;

        if (!dontWarnCustomElement && nextProp !== serverValue && !isMismatchDueToBadCasing) {
          warnForPropDifference(propKey, serverValue, nextProp);
        }
      }
    }
  }

  {
    if (shouldWarnDev) {
      // $FlowFixMe - Should be inferred as not undefined.
      if (extraAttributeNames.size > 0 && !suppressHydrationWarning) {
        // $FlowFixMe - Should be inferred as not undefined.
        warnForExtraAttributes(extraAttributeNames);
      }
    }
  }

  switch (tag) {
    case 'input':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper(domElement, rawProps, true);
      break;

    case 'textarea':
      // TODO: Make sure we check if this is still unmounted or do any clean
      // up necessary since we never stop tracking anymore.
      track(domElement);
      postMountWrapper$3(domElement);
      break;

    case 'select':
    case 'option':
      // For input and textarea we current always set the value property at
      // post mount to force it to diverge from attributes. However, for
      // option and select we don't quite do the same thing and select
      // is not resilient to the DOM state changing so we don't do that here.
      // TODO: Consider not doing this for input and textarea.
      break;

    default:
      if (typeof rawProps.onClick === 'function') {
        // TODO: This cast may not be sound for SVG, MathML or custom elements.
        trapClickOnNonInteractiveElement(domElement);
      }

      break;
   props);
      return;
  }
}

var validateDOMNesting = function () {};

var updatedAncestorInfo = function () {};

{
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.
  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope

  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope

  var buttonScopeTags = inScopeTags.concat(['button']); // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags

  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
  var emptyAncestorInfo = {
    current: null,
    formTag: null,
    aTagInScope: null,
    buttonTagInScope: null,
    nobrTagInScope: null,
    pTagInButtonScope: null,
    listItemTagAutoclosing: null,
    dlItemTagAutoclosing: null
     return ancestorInfo;
  };
  /**
   * Returns whether
   */



    }

    return true;
  };
  /**
   * Returns whether
   */


  var
    }

    return null;
  };

  var didWarn$1 = {};

  validateDOMNesting = function (childTag, childText, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    if (childText != null) {
      if (childTag != null) {
        error('validateDOMNesting: when childText is passed, childTag should be null');
      }

      childTag = '#text';
    }

    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
    var invalidParentOrAncestor = invalidParent || invalidAncestor;

    if (!invalidParentOrAncestor) {
      return;
    }

    var ancestorTag = invalidParentOrAncestor.tag;
    var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag;

    if (didWarn$1[warnKey]) {
      return;
    }

    didWarn$1[warnKey] = true;
    var tagDisplayName = childTag;
    var whitespaceInfo = '';

    if (childTag === '#text') {
      if (/\S/.test(childText)) {
        tagDisplayName = 'Text nodes';
      } else {
        tagDisplayName = 'Whitespace text nodes';
        whitespaceInfo = " Make sure you don't have any extra whitespace between tags on " + 'each line of your source code.';
      }
    } else {
      tagDisplayName = '<' + childTag + '>';
    }

    if (invalidParent) {
      var info = '';

      if (ancestorTag === 'table' && childTag === 'tr') {
        info += ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by ' + 'the browser.';
      }

      error('validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s', tagDisplayName, ancestorTag, whitespaceInfo, info);
    } else {
      error('validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>.', tagDisplayName, ancestorTag);
    }
  };
}

var SUPPRESS_HYDRATION_WARNING$1;

{
  SUPPRESS_HYDRATION_WARNING$1 = 'suppressHydrationWarning';
}

var SUSPENSE_START_DATA = '$';
var SUSPENSE_END_DATA = '/$';
var SUSPENSE_PENDING_START_DATA = '$?';
var SUSPENSE_FALLBACK_START_DATA = '$!';
var STYLE$1 = 'style';
var o: ancestorInfo
    };
  }
}
function getPublicInstance(instance) {
  return instance;
}
function prepareForCommit(containerInfo) {
  selectionInformation = getSelectionInformation();
  var activeInstance = nullops);
  return domElement;
}
function appendInitialChild(parentInstance, child) {
  parentInt:
      return false;
  }
}
function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
  {
    var hostContextDev = hostContext;

    if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === 'string' || typeof newProps.children === 'number')) {
      var string = '' + newProps.children;
      var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
      validateDOMNesting(null, string, ownAncestorInfo);
    }
  }

  return diffProperties(domElement, type, oldProps, newProps);
}
function shouldSetTextContent(type, props) {
  return type === 'textarea' || type === 'noscript' || typeof props.children === 'string' || typeof props.children === 'number' || typeof props.dangerouslySetInnerHTML === 'object' && props.dangerouslySetInnerHTML !== null && props.dangerouslySeiority(currentEvent.type);
}
// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.

var scheduleTimeout = typeof setTimeout === 'function' ? setTimeout : undefined;
var cancelTimeout = typeof clearTimeout === 'function' ? clearTimeout : undefined;
var noTimeout = -1;
var localPromise = typeof Promise === 'function' ? Promise : undefined; // -------------------
var scheduleMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : typeof loch(handleErrorInNextTick);
} : scheduleTimeout; // TODO: Determ) {
    throw error;
  tance.nodeValue = newText;
}
function appendChild(parentInstance, child) {
  parentInetyle.display = 'none';
  }
}
function hideTextInstance(textInstance) {
  teValue('display', display);
}
function unhideTextInstance(textInstance, text) {
  textInstance.nodeValue = text;
}
function clearContainer(container) {
  if (container.nodeType === ELEMENT_NODE) {
    container.textContent = '';
  } else if (container.nodeType === DOCUMENT_NODE) {
    var body = container.body;

    if (body != null) {
      body.textContent = '';
    }
node.


  return instance;
}
function isSuspenseInstancePending(instance) {
  return instance.data === SUPENSE_FALLBACK_START_DATA;
}
function registerSuspenseInstanceRetry(instance, callback) {
  instance._reactRetry = callback;
}

function getNextHydratable(node) {
  // Skip non-hydratable nodes.
  for (; node != null; node = node.nextSibling) {
    var nodeType = node.nodeType;

    if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) {
      break;
    }

    {
      if (nodeType === COMMENT_NODE) {
        var nodeData = node.data;

        if (nodeData === SUSPENSE_START_DATA || nodeData === SUSPENSE_FALLBACK_START_DATA || nodeData === SUSPENSE_PENDING_START_DATA) {
          break;
        }

        if (nodeData === SUSPENSE_END_DATA) {
          return null;
        }
      }
    }
  }

  return node;
}

function getNextHydratableSibling(instance) {
  return getNextHydratable(instance.nextSibling);
}
function getFirstHydratableChild(parentInstance) {
  return getNextHydratable(parentInstance.firstChild);
}
function getFirstHydratableChildWithinContainer(parentContainer) {
  return getNextHydratable(parentContainer.firstChild);
}
function getFirstHydratableChildWithinSuspenseInstance(parentInstance) {
  return getNextHydratable(padText(textInstance, text);
}
function hydrateSuspenseInstance(suspenseInstance, internalInstanceHandle) {
  precacheFiberNode(internalInstanceboundary.


  return null;
} // Returns the SuspenseInstance if this node is a direct child of a
// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_Sbling;
  }

  return null;
}
function commitHydratedContainer(container) {
  // Retry if any event replaying was blocked on this.
  retryIfBlockedOn(container);
}
function commitHydratedSuspenseInstance(suspenseInstance) {
  // Retry if any event replaying was blocked on this.
  retryIfBlance, instance);
    }
  }
}
function didNotFindHydratableInstanceWithinContainer(parentContainer, type, props) {
  {
    warnForInsertedHydratedElement(pdeName.toLowerCase());
  }
}
function preparePortalMount(portalInstance) {
  listenToAllSupportedEvents(portalInstance);
}

var randomKey = Math.random().toString(36).slice(2);
var internalInstanceKey = '__reactFiber$' + randomKey;
var internalPropsKey = '__reactProps$' + randomKey;
var internalContainerInstanceKey = '__reactContainer$' + randomKey;
var internalEventHandlersKey = '__reactEvents$' + randomKey;
var internalEventHandlerListenersKey = '__reactListeners$' + randomKey;
var internalEventHandlesSetKey = '_ternalEventHandlesSetKey];
}
function precacheFiberNode(hostInst, node) {
  node[internalInstanceKey] = hostInst;
}
function markContainerAsRoot(hostRoot, node) {
  node[internalContainerInstanceKey] = hostRoot;
}
function unmarkContainerAsRoot(node) {
  node[internalConrnalContainerInstanceKey];
} // Given a DOM node, return the closest HostComponent or HostText fiber ancestor.
// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing appltNode;
  }

  return null;
}
/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not 
    }
  }

  return null;
}
/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corance: Invalid argument.');
}
function getFiberCurrentPropsFromNode(node) {
  return node[internalPropsKey] || null;
}
function updateFiberProps(node, props) {
  node[return elementListenerSet;
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var valueStack = [];
var fiberStack;

{
  fiberStacx
  cursor.current = value;
}

var warnedAboutMissingGetChildContext;

{
  warnedAboutMissingGetChildContext = {};
}

var emptyContextObject = {};

{
  Object.freeze(emptyContextObject);
} // A cursor to the current merged context object on the stack.


var contextStackCursor = createCursor(emptyContextObject); // A cursor to a boolean indicating whether the context has changed.

var didPerformWorkStackCursor = createCursor(false); // Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.

var previousCoxn}rxtTypes !== undefined;
  }
}

function popContext(fiber) {
  {
    pop(didPerformWorkStackCursor, fiber);
    pop(contexxooewease file an issue.');
  }
}

var LegacyRoot = 0;
var ConcurrentRoot = 1;

var syncQueue = null;
var includesLegacySyncCallbacks = false;
var isFlushingSyncQueue = false;
function scheduleSyncCallback(callback) {
  // Push this callback into an internal queue. We'll flush these either in
  // the next tick, or earlier if something calls `flushSyncCallbackQueue`.
  if (syncQueue === null) {
    syncQueue = [callback];
  } else {
    // Push onto existing queue. Don't need to schedule a callback because
    // we already scheduled one when we created the queue.
    syn
    }
  }

  return null;
}

var ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConftBatchConfig$1.transition;
}

var ReactStrictModeWarnings = {
  recordUnsafeLifecycleWarnings: function (fiber, instance) {},
  flushPendingUnsafeLifecycleWarnings: function () {},
  recordLegacyContextWarning: function (fiber, instance) {},
  flushLegacyContextWarning: function () {},
  discardPendingWarnings: function () {}
 return maybeStrictRoot;
  }array.sort().join(', ');
  };

  var pendingComponentWillMountWarnings = [];
  var pendingUNSAFE_ComponentWillMountWarnings = [];
  var pendingComponentWillReceivePropsWarnings = [];
  var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
  var pendingComponentWillUpdateWarnings = [];
  var pendingUNSAFE_ComponentWillUpdateWarnings = []; // Tracks components we have already warned about.

  var didWarnAboutUnsafeLifecycles = new Set();

  ReactStrictModeWarnings.recnings.push(fiber);
    }
  };

  ReactStrictModeWarnings.flushPend', _sortedNames5);
    }
  };

  var pendingLegacyContextWarning = new Map(); // Tracks components we have already warned about.

  var didWarnAboutLegacyContext = new Set();

  ReactStrictModeWarnings.rRoot.push(fiber);
    }
  };

  ReactStrictModeWarningsFiber();
      }
    });
  };

  ReactStrictModeWarnitext;
  }

  return baseProps;
}

var valueCursor = createCursor(null);
var rendererSigil;

{
  // Use this to detect multiple renderers using the same context
  rendererSigil = {};
}

var currentlyRenderingFiber = null;
var lastContextDependency = null;
var lastFullyObservedContext = null;
var isDisallotextReadInDEV = false;
  }
}
function enterDisallowedContextReadInDEV() {
  {
    isDisallowedContextReadInDEV = true;
  }
}
function exitDisallowedContextReadInDEV() {
  {
    isDisallowedConc    }
  }

  return value;
}

// An array of all update queues that received updates during the current
// render. When this render exits, either because it finishes or because it is
// interrupted, the interleaved updates will be transferred onto the main part
// of the queue.
var interleavedQueues = null;
function pushInterleavedQueue(queue) {
  if (interleavedQueues === null) {
    interleavedQueues = [queue];
  } else {
    interleaerleavedQueues = null;
  }
}

var UpdateState = 0;
var ReplaceState = 1;
var ForceUpdate = 2;
var CaptureUpdate = 3; // Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.

var hasForceUpdate = false;
var didWarnUpdateInsideUpdate;
var currentlyProcessingQueue;

{
  didWarnUpdateInsideUpdate = false;
  currentnull
  };
  return update;
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;

  if (updateQueue === null) {
    // Only occurs if the fiber has been unmounted.
    return;
  }

  var sharedQueue = updateQueue.shared;

  if (isInterleavedUpdate(fiber)) {
    var interleaved = sharedQueue.interleaved;

    if (interleaved === null) {
      // This is the first update. Create a circular list.
      update.next = update; // At the end of the current render, this queue's interleaved updates will
      // be transferred to the pending queue.

      pushInterleavedQueue(sharedQueue);
    } else {
      update.next = interleaved.next;
      interleaved.next = update;
    }

    sharedQueue.interleaved = update;
  } else {
    var pending = sharedQueue.pending;

    if (pending === null) {
      // This is the first update. Create a circular list.
      update.next = update;
    } else {
      update.next = pending.next;
      pending.next = update;
    }

    sharedQueue.pending = update;
  }

  {
    if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
      error('An update (setState, replaceState, or forceUpdate) was scheduled ' + 'from inside an update function. Update functions should be pure, ' + 'with zero side-effects. Consider using componentDidUpdate or a ' + 'callback.');

      didWarnUpdateInsis}r
  callback.call(context);
}

function resetHasForceUpdateBeforeProcessing() {
  hasForceUpdate = false;
}
function checkHasForceUpdateAfterProcessing() stance);
      }
    }
  }
}

var fakeInternalInstance = {}; // React.Component uses a shared frozen object by default.
// We'll use it to determine whether we need to initialize legacy refs.

var emptyRefsObject = new React.Component().refs;
var didWarnAboutStateAssignmentForComponent;
var didWarnAboutUninitializedState;
var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
var didWarnAboutLegacyLifecyclesAndDerivedState;
var didWarnAboutUndefinedDerivedState;
var warnOnUndefinedDerivedState;
var warnOnInvalidCallback;
var didWarnAboutDirectlyAssigningPropsToState;
var didWarnAboutContextTypeAndContextTypes;
var didWarnAboutInvalidateContextType;

{
  didWarnAboutStateAssignmentForComponent = new Set();
  didWarnAboutUninitializedState = new Set();
  didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
  didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
  didWarnAboutDirectlyAssigningPropsToState = new Set();
  didWarnAboutUndefinedDerivedState = new Set();
  didWarnAboutContextTypeAndContextTypes = new Set();
  didWarnAboutInvalidateContextType = new Set();
  var didWarnOnInvalidCallback = new Set()erName, callback);
    }
  };

  wnentName);
      }
    }
  }; // This is so gross but it's at least non-critical and can be removed if
  // it causes problems. This is meant to give a nicer error message for
  // ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
  // ...)) which otherwise throws a "_processChildContext is not a function"
  // exception.


  Object.defineProperty(fakeInternalInstance, '_processChildContext', {
    enumerable: false,
    value: function () {
      throw new Error('_processChildContext is not available in React 16+. This likely ' + 'means you have multiple copies of React and are attempting to nest ' + 'a React 15 tree inside a React 16 tree using ' + "unstable_renderSubtreeIntoContainer, which isn't supported. Try " + 'to make sure you have only one copy of React (and ideally, switch ' + 'to ReactDOM.createPortal).');
    }
  });
  Object.freeState = memoizedState;
  }
}

var classComponentUpdater = {
  isMounted: isMounted,
  enqueueSetState: function (inst, payload, callback) {
    var fiber = get(inst);
    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    var update = createUpdate(eventTime, lane);
    update.payload = payload;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'setState');
      }

      update.callback = callback;
    }

    enqueueUpdate(fiber, update);
    var root = scheduleUpdateOnFiber(fiber, lane, eventTime);

    if (root !== null) {
      entangleTransitions(root, fiber, lane);
    }

    {
      markStateUpdateScheduled(fiber, lane);
    }
  },
  enqueueReplaceState: function (inst, payload, callback) {
    var fiber = get(inst);
    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    var update = createUpdate(eventTime, lane);
    update.tag = ReplaceState;
    update.payload = payload;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'replaceState');
      }

      update.callback = callback;
    }

    enqueueUpdate(fiber, update);
    var root = scheduleUpdateOnFiber(fiber, lane, eventTime);

    if (root !== null) {
      entangleTransitions(root, fiber, lane);
    }

    {
      markStateUpdateScheduled(fiber, lane);
    }
  },
  enqueueForceUpdate: function (inst, callback) {
    var fiber = get(inst);
    var eventTime = requestEventTime();
    var lane = requestUpdateLane(fiber);
    var update = createUpdate(eventTime, lane);
    update.tag = ForceUpdate;

    if (callback !== undefined && callback !== null) {
      {
        warnOnInvalidCallback(callback, 'forceUpdate');
      }

      update.callback = callback;
    }

    enqueueUpdate(fiber, update);
    var root = scheduleUpdateOnFiber(fiber, lane, eventTime);

    if (root !== null) {
      entangleTransitions(root, fiber, lane);
    }

    {
      markForceUpdateScheduledtt fakeInternalInstance;
  }
}

function constructClassInstance(workInProgress, ctor, props) {
  var isLegacyContextConsumer = false;
  var unmaskedContext = emptyContextObject;
  var context = emptyContextObject;
  var contextType = ctor.contextType;

  {
    if ('contextType' in ctor) {
      var isValid = // Allow null for conditional declaration
      contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

      if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
        didWarnAboutInvalidateContextType.add(ctor);
        var addendum = '';

        if (contextType === undefined) {
          addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
        } else if (typeof contextType !== 'object') {
          addendum = ' However, it is set to a ' + typeof contextType + '.';
        } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
          addendum = ' Did you accidentally pass the Context.Provider instead?';
        } else if (contextType._context !== undefined) {
          // <Context.Consumer>
          addendum = ' Did you accidentally pass the Context.Consumer instead?';
        } else {
          addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
        }

        error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentNameFromType(ctor) || 'Component', addendum);
      }
    }
  }

  if (typeof contextType === 'object' && contextType !== null) {
    context = readContext(contextType);
  } else {
    unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    var contextTypes = ctor.contextTypes;
    isLegacyContextConsumer = contextTypes !== null && contextTypes !== undefined;
    context = isLegacyContextConsumer ? getMaskedContext(workInProgress, unmaskedContext) : emptyContextObject;
  }

  var instance = new ctor(props, context); // Instantiate twice to help detect side-effects.

  {
    if ( workInProgress.mode & StrictLegacyMode) {
      setIsStrictModeForDevtools(true);

      try {
        instance = new ctor(props, context); // eslint-disable-line no-new
      } finally {
        setIsStrictModeForDevtools(false);
      }
    }
  }

  var state = workInProgress.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
  adoptClassInstance(workInProgress, instance);

  {
    if (typeof ctor.getDerivedStateFromProps === 'function' && state === null) {
      var componentName = getComponentNameFromType(ctor) || 'Component';

      if (!didWarnAboutUninitializedState.has(componentName)) {
        didWarnAboutUninitializedState.add(componentName);

        error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, instance.state === null ? 'null' : 'undefined', componentName);
      }
    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Warn about these lifecycles if they are present.
    // Don't warn about react-lifecycles-compat polyfilled methods though.


    if (typeof ctor.getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function') {
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;

      if (typeof instance.componentWillMount === 'function' && instance.componentWillMount.__suppressDeprecationWarning !== true) {
        foundWillMountName = 'componentWillMount';
      } else if (typeof instance.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }

      if (typeof instance.componentWillReceiveProps === 'function' && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof instance.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }

      if (typeof instance.componentWillUpdate === 'function' && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }

      if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var _componentName = getComponentNameFromType(ctor) || 'Component';

        var newApiName = typeof ctor.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';

        if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
          didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);

          error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + '%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n' + 'The above lifecycles should be removed. Learn more about this warning here:\n' + 'https://reactjs.org/link/unsafe-component-lifecycles', _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : '', foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : '', foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : '');
        }
      }
    }
  } // Cache unmasked context so we can avoid recreating masked context unless necessary.
  // ReactFiberContext usually updates this cache but can't for newly-created instances.


  if (isLegacyContextConsumer) {
    cacheContext(workInProgress, unmaskedContext, context)iinstance.state, null);
  }
} // Invokes the mount life-cycles on a previously never rendered instance.


function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  {
    checkClassInstance(workInProgress, ctor, newProps);
  }

  var instance = workInProgress.stateNode;
  instance.props = newProps;
  instance.state = workInProgress.memoizedState;
  instance.refs = emptyRefsObject;
  initializeUpdateQueue(workInProgress);
  var contextType = ctor.contextType;

  if (typeof contextType === 'object' && contextType !== null) {
    instance.context = readContext(contextType);
  } else {
    var unmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    instance.context = getMaskedContext(workInProgress, unmaskedContext);
  }

  {
    if (instance.state === newProps) {
      var componentName = getComponentNameFromType(ctor) || 'Component';

      if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
        didWarnAboutDirectlyAssigningPropsToState.add(componentName);

        error('%s: It is not recommended to assign props directly to state ' + "because updates to props won't be reflected in state. " + 'In most cases, it is better to use props directly.', componentName);
      }
    }

    if (workInProgress.mode & StrictLegacyMode) {
      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, instance);
    }

    {
      ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress, instance);
    }
  }

  instance.state = workInProgress.memoizedState;
  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
    instance.state = workInProgress.memoizedState;
  } // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.


  if (typeof ctor.getDerivedStateFromProps !== 'function' && typeof instance.getSnapshotBeforeUpdate !== 'function' && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
    callComponentWillMount(workInProgress, instance); // If we had additional state updates during this life-cycle, let's
    // process them now.

    processUpdateQueue(workInProgress, newProps, instance, renderLanes);
    instance.state = workInProgress.memoizedState;
  }

  if (typeof instance.componentDidMount === 'function') {
    var fiberFlags = Update;

    {
      fiberFlags |= LayoutStatic;
    }

    if ( (workInProgress.mode & StrictEffectsMode) !== NoMode) {
      fiberFlags |= MountLayoutDev;
    }

    workInProgress.flags |= fiberFlags;
  }
}

function resumeMountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  var oldProps = workInProgress.memoizedProps;
  instance.props = oldProps;
  var oldContext = instance.context;
  var contextType = ctor.contextType;
  var nextContext = emptyContextObject;

  if (typeof contextType === 'object' && contextType !== null) {
    nextContext = readContext(contextType);
  } else {
    var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    nextContext = getMaskedContext(workInProgress, nextLegacyUnmaskedContext);
  }

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.
  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.

  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (oldProps !== newProps || oldContext !== nextContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();
  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  processUpdateQueue(workInProgress, newProps, instance, renderLanes);
  newState = workInProgress.memoizedState;

  if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      var fiberFlags = Update;

      {
        fiberFlags |= LayoutStatic;
      }

      if ( (workInProgress.mode & StrictEffectsMode) !== NoMode) {
        fiberFlags |= MountLayoutDev;
      }

      workInProgress.flags |= fiberFlags;
    }

    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext);

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === 'function' || typeof instance.componentWillMount === 'function')) {
      if (typeof instance.componentWillMount === 'function') {
        instance.componentWillMount();
      }

      if (typeof instance.UNSAFE_componentWillMount === 'function') {
        instance.UNSAFE_componentWillMount();
      }
    }

    if (typeof instance.componentDidMount === 'function') {
      var _fiberFlags = Update;

      {
        _fiberFlags |= LayoutStatic;
      }

      if ( (workInProgress.mode & StrictEffectsMode) !== NoMode) {
        _fiberFlags |= MountLayoutDev;
      }

      workInProgress.flags |= _fiberFlags;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidMount === 'function') {
      var _fiberFlags2 = Update;

      {
        _fiberFlags2 |= LayoutStatic;
      }

      if ( (workInProgress.mode & StrictEffectsMode) !== NoMode) {
        _fiberFlags2 |= MountLayoutDev;
      }

      workInProgress.flags |= _fiberFlags2;
    } // If shouldComponentUpdate returned false, we should still update the
    // memoized state to indicate that this work can be reused.


    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  } // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.


  instance.props = newProps;
  instance.state = newState;
  instance.context = nextContext;
  return shouldUpdate;
} // Invokes the update life-cycles and returns false if it shouldn't rerender.


function updateClassInstance(current, workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  cloneUpdateQueue(current, workInProgress);
  var unresolvedOldProps = workInProgress.memoizedProps;
  var oldProps = workInProgress.type === workInProgress.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress.type, unresolvedOldProps);
  instance.props = oldProps;
  var unresolvedNewProps = workInProgress.pendingProps;
  var oldContext = instance.context;
  var contextType = ctor.contextType;
  var nextContext = emptyContextObject;

  if (typeof contextType === 'object' && contextType !== null) {
    nextContext = readContext(contextType);
  } else {
    var nextUnmaskedContext = getUnmaskedContext(workInProgress, ctor, true);
    nextContext = getMaskedContext(workInProgress, nextUnmaskedContext);
  }

  var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
  var hasNewLifecycles = typeof getDerivedStateFromProps === 'function' || typeof instance.getSnapshotBeforeUpdate === 'function'; // Note: During these life-cycles, instance.props/instance.state are what
  // ever the previously attempted to render - not the "current". However,
  // during componentDidUpdate we pass the "current" props.
  // In order to support react-lifecycles-compat polyfilled components,
  // Unsafe lifecycles should not be invoked for components using the new APIs.

  if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === 'function' || typeof instance.componentWillReceiveProps === 'function')) {
    if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) {
      callComponentWillReceiveProps(workInProgress, instance, newProps, nextContext);
    }
  }

  resetHasForceUpdateBeforeProcessing();
  var oldState = workInProgress.memoizedState;
  var newState = instance.state = oldState;
  processUpdateQueue(workInProgress, newProps, instance, renderLanes);
  newState = workInProgress.memoizedState;

  if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing() && !(enableLazyContextPropagation   )) {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Update;
      }
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Snapshot;
      }
    }

    return false;
  }

  if (typeof getDerivedStateFromProps === 'function') {
    applyDerivedStateFromProps(workInProgress, ctor, getDerivedStateFromProps, newProps);
    newState = workInProgress.memoizedState;
  }

  var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) || // TODO: In some cases, we'll end up checking if context has changed twice,
  // both before and after `shouldComponentUpdate` has been called. Not ideal,
  // but I'm loath to refactor this function. This only happens for memoized
  // components so it's not that common.
  enableLazyContextPropagation   ;

  if (shouldUpdate) {
    // In order to support react-lifecycles-compat polyfilled components,
    // Unsafe lifecycles should not be invoked for components using the new APIs.
    if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === 'function' || typeof instance.componentWillUpdate === 'function')) {
      if (typeof instance.componentWillUpdate === 'function') {
        instance.componentWillUpdate(newProps, newState, nextContext);
      }

      if (typeof instance.UNSAFE_componentWillUpdate === 'function') {
        instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
      }
    }

    if (typeof instance.componentDidUpdate === 'function') {
      workInProgress.flags |= Update;
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      workInProgress.flags |= Snapshot;
    }
  } else {
    // If an update was already in progress, we should schedule an Update
    // effect even though we're bailing out, so that cWU/cDU are called.
    if (typeof instance.componentDidUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Update;
      }
    }

    if (typeof instance.getSnapshotBeforeUpdate === 'function') {
      if (unresolvedOldProps !== current.memoizedProps || oldState !== current.memoizedState) {
        workInProgress.flags |= Snapshot;
      }
    } // If shouldComponentUpdate returned false, we should still update the
    // memoized props/state to indicate that this work can be reused.


    workInProgress.memoizedProps = newProps;
    workInProgress.memoizedState = newState;
  } // Update the existing instance's state, props, and context pointers even
  // if shouldComponentUpdate returns false.


  instance.props = newProps;
  instance.state = newState;
  instance.context = nextContext;
  return shouldUpdate;
}

// TODO: Use the unified fiber stack module instead of this local one?
// Intentionally not using it yet to derisk the initial implementation, because
// the way we push/pop these values is a bit unusual. If there's a mistake, I'd
// rather the ids be wrong than crash the whole reconciler.
var forkStack = [];
var forkStackIndex = 0;
var treeForkProvider = null;
var treeForkCount = 0;
var idStack = [];
var idStackIndex = 0;
var treeContextProvider = null;
var treeContextId = 1;
vmberOfForks, slotIndex);
  }
}

function getBitLength(number) {
 nx ' + 'an issue.');
    }
  }
}

// This may have been an insertion or a hydration.

var hydrationParentFiber = null;
var nextHydratableInstance = null;
var isHydrating = false;
var didSuspend = false; // Hydration errors that were thrown inside this boundaryase file a bug.');
    }
  }
}

function markDidSuspendWhileHydratingDEV() {
  {pontext);
  }

  return true;
}

function warnUnhydratedInstance(returnFiber, instance) {
  {
    switch (returnFiber.tag) {
      case HostRoot:
        didNotHydrateInstanceWithinContainer(returnFiber.stateNode.containerInfo, instance);
        break;

      case HostComponent:
        didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance);
        break;

      case SuspenseComponent:
        var suspenseState = returnFiber.memoizedState;
        if (suspenseState.dehydrated !== null) didNotHydrateInstanceWithinSuspenseInstance(suspenseState.dehydrated, instanceons.push(childToDelete);
  }
}

function warnNonhydratedInstance(returnFiber, fiber) {
  {
    if (didSuspend) {
      // Inside a boundary that already suspended. We're currently rendering the
      // siblings of a suspended node. The mismatch may be due to the missing
      // data, so it's probably a false positive.
      return;
    }

    switch (returnFiber.tag) {
      case HostRoot:
        {
          var parentContainer = returnFiber.stateNode.containerInfo;

          switch (fiber.tag) {
            case HostComponent:
              var type = fiber.type;
              var props = fiber.pendingProps;
              didNotFindHydratableInstanceWithinContainer(parentContainer, type);
              break;

            case HostText:
              var text = fiber.pendingProps;
              didNotFindHydratableTextInstanceWithinContainer(parentContainer, text);
              break;
          }

          break;
        }

      case HostComponent:
        {
          var parentType = returnFiber.type;
          var parentProps = returnFiber.memoizedProps;
          var parentInstance = returnFiber.stateNode;

          switch (fiber.tag) {
            case HostComponent:
              var _type = fiber.type;
              var _props = fiber.pendingProps;
              didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type);
              break;

            case HostText:
              var _text = fiber.pendingProps;
              didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text);
              break;

            case SuspenseComponent:
              didNotFindHydratableSuspenseInstance(parentType, parentProps);
              break;
          }

          break;
        }

      case SuspenseComponent:
        {
          var suspenseState = returnFiber.memoizedState;
          var _parentInstance = suspenseState.dehydrated;
          if (_parentInstance !== null) switch (fiber.tag) {
            case HostComponent:
              var _type2 = fiber.type;
              var _props2 = fiber.pendingProps;
              didNotFindHydratableInstanceWithinSuspenseInstance(_parentInstance, _type2);
              break;

            case HostText:
              var _text2 = fiber.pendingProps;
              didNotFindHydratableTextInstanceWithinSuspenseInstance(_parentInstance, _text2);
              break;
          }
          break;
        }

      defaultnstance(returnFiber, fiber);
}

function tryHydrate(fiber, nextInstance) {
  switch (fiber.tag) {
    case HostComponent:
      {
        var type = fiber.type;
        var props = fiber.pendingProps;
        var instance = canHydrateInstance(nextInstance, type);

        if (instance !== null) {
          fiber.stateNode = instance;
          hydrationParentFiber = fiber;
          nextHydratableInstance = getFirstHydratableChild(instance);
          return true;
        }

        return false;
      }

    case HostText:
      {
        var text = fiber.pendingProps;
        var textInstance = canHydrateTextInstance(nextInstance, text);

        if (textInstance !== null) {
          fiber.stateNode = textInstance;
          hydrationParentFiber = fiber; // Text Instances don't have children so there's nothing to hydrate.

          nextHydratableInstance = null;
          return true;
        }

        return false;
      }

    case SuspenseComponent:
      {
        {
          var suspenseInstance = canHydrateSuspenseInstance(nextInstance);

          if (suspenseInstance !== null) {
            var suspenseState = {
              dehydrated: suspenseInstance,
              treeContext: getSuspendedTreeContext(),
              retryLane: OffscreenLane
            };
            fiber.memoizedState = suspenseState; // Store the dehydrated fragment as a child fiber.
            // This simplifies the code for getHostSibling and deleting nodes,
            // since it doesn't have to consider all Suspense boundaries and
            // check if they're dehydrated ones or not.

            var dehydratedFragment = createFiberFromDehydratedFragment(suspenseInstance);
            dehydratedFragment.return = fiber;
            fiber.child = dehydratedFragment;
            hydrationParentFiber = fiber; // While a Suspense Instance does have children, we won't step into
            // it during the first pass. Instead, we'll reenter it later.

            nextHydratableInstance = null;
            return true;
          }
        }

        return false;
      }

    defaus fn true;
  }

  return false;
}

function prepareToHydrateHostTextInstance(fiber) {

  var textInstance = fiber.stateNode;
  var textContent = fiber.memoizedProps;
  var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);

  if (shouldUpdate) {
    // We assume that prepareToHydrateHostTextInstance is called in a context where the
    // hydration parent is the parent host component of this host text.
    var returnFiber = hydrationParentFiber;

    if (returnFiber !== null) {
      var isConcurrentMode = (returnFiber.mode & ConcurrentMode) !== NoMode;

      switch (returnFiber.tag) {
        case HostRoot:
          {
            var parentContainer = returnFiber.stateNode.containerInfo;
            didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent, // TODO: Delete this argument when we remove the legacy root API.
            isConcurrentMode);
            break;
          }

        case HostComponent:
          {
            var parentType = returnFiber.type;
            var parentProps = returnFiber.memoizedProps;
            var parentInstance = returnFiber.stateNode;
            didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent, // TODO: Delete this argument when we remove the legacy root API.
            isConcurrentMode);
            break;
          }
      }
    }
ced Hlf hydrationErrors = null;
  }
}

function getIsHydratinationErrors.push(error);
  }
}

var didWarnAboutMaps;
var didWarnAboutGenerators;
var didWarnAboutStringRefs;
var ownerHasKeyUseWarning;
var ownerHasFunctionTypeWarning;

var warnForMissingKey = function (child, returnFiber) {};

{
  didWarnAboutMaps = false;
  didWarnAboutGenerators = false;
  didWarnAboutStringRefs = {};
  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */

  ownerHasKeyUseWarning = {};
  ownerHasFunctionTypeWarning = {};

  warnForMissingKey = function (child, returnFiber) {
    if (child === null || typeof child !== 'object') {
      return;
    }

    if (!child._store || child._store.validated || child.key != null) {
      return;
    }

    if (typeof child._store !== 'object') {
      throw new Error('React Component in warnForMissingKey should have a _store. ' + 'This error is likely caused by a bug in React. Please file an issue.');
    }

    child._store.validated = true;
    var componentName = getComponentNameFromFiber(returnFiber) || 'Component';

    if (ownerHasKeyUseWarning[componentName]) {
      return;
    }

    ownerHasKeyUseWarning[componentName] = true;

    error('Each child in a list should have a unique ' + '"key" prop. See https://reactjs.org/link/warning-keys for ' + 'more information.');
  };
}

function coerceRef(returnFiber, current, element) {
  var mixedRef = element.ref;

  if (mixedRef !== null && typeof mixedRef !== 'function' && typeof mixedRef !== 'object') {
    {
      // TODO: Clean this up once we turn on the string ref warning for
      // everyone, because the strict mode case will no longer be relevant
      if ((returnFiber.mode & StrictLegacyMode || warnAboutStringRefs) && // We warn in ReactElement.js if owner and self are equal for string refs
      // because these cannot be automatically converted to an arrow function
      // using a codemod. Therefore, we don't have to warn about string refs again.
      !(element._owner && element._self && element._owner.stateNode !== element._self)) {
        var componentName = getComponentNameFromFiber(returnFiber) || 'Component';

        if (!didWarnAboutStringRefs[componentName]) {
          {
            error('A string ref, "%s", has been found within a strict mode tree. ' + 'String refs are a source of potential bugs and should be avoided. ' + 'We recommend using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', mixedRef);
          }

          didWarnAboutStringRefs[componentName] = true;
        }
      }
    }

    if (element._owner) {
      var owner = element._owner;
      var inst;

      if (owner) {
        var ownerFiber = owner;

        if (ownerFiber.tag !== ClassComponent) {
          throw new Error('Function components cannot have string refs. ' + 'We recommend using useRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref');
        }

        inst = ownerFiber.stateNode;
      }

      if (!inst) {
        throw new Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a " + 'bug in React. Please file an issue.');
      } // Assigning this to a const so Flow knows it won't change in the closure


      var resolvedInst = inst;

      {
        checkPropStringCoercion(mixedRef, 'ref');
      }

      var stringRef = '' + mixedRef; // Check if previous string ref matches new string ref

      if (current !== null && current.ref !== null && typeof current.ref === 'function' && current.ref._stringRef === stringRef) {
        return currentef] = value;
        }
      };

      ref._stringRef = stringRef;
      return ref;
    } else {
      if (typeof mixedRef !== 'string') {
        throw new Error('Expected ref to be a function, a string, an object returned by React.createRef(), or null.');
      }

      if (!element._owner) {
        throw new Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of" + ' the following reasons:\n' + '1. You may be adding a ref to a function component\n' + "2. You may be adding a ref to a component that was not created inside a component's render method\n" + '3. You have multiple copies of React loaded\n' + 'See https://reactjs.org/link/refs-must-have-owner for more information.');
      }
  sanit;
  return init(payload);
} // This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.


function ChildReconcilpusg;
  r = urn       return existing;
    }
  }

  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;

    if (elementType === REACT_FRAGMENT_TYPE) {
      return updateFragment(returnFiber, current, element.props.children, lanes, element.key);
    }

    if (current !== null) {
      if (current.elementType === elementType || ( // Keep this check inline so it only runs on the false path:
       isCompatibleFamilyForHotReloading(current, element) ) || // Lazy types should reconcile their resolved type.
      // We need to do this after the Hot Reloading check above,
      // because hot reloading has different semantics than prod because
      // it doesn't resuspend. So we can't let the call below suspend.
       typeof elementType === 'object' && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type) {
        // Move based on index
        var existing = useFiber(current, element.props);
        existing.ref = coerceRef(returnFiber, current, element);
        existing.return = returnFiber;

        {
          existing._debugSource = element._source;
          existing._debugOwner = element._owner;
        }

        return existing;
      }
    } // Insert


    var created = createFiberFromElement(element, returnFiber.mode, lanes);
    created.ref = coerceRef(returnFiber, current, element);
    created.return = returnFib       return existing;
    }
  }

  function createChild(returnFiber, newChild, lanes) {
    if (typeof newChild === 'string' && newChild !== '' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      var created = createFiberFromText('' + newChild, returnFiber.mode, lanes);
      created.return = returnFiber;
      return created;
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);

            _created.ref = coerceRef(returnFiber, null, newChild);
            _created.return = returnFiber;
            return _created;
          }

        case REACT_PORTAL_TYPE:
          {
            var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);

            _created2.return = returnFiber;
            return _created2;
          }

        case REACT_LAZY_TYPE:
          {
            {
              var payload = newChild._payload;
              var init = newChild._init;
              return createChild(returnFiber, init(payload), lanes);
            }
          }
      }

      if (isArray(newChild) || getIteratorFn(newChild)) {
        var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);

        _created3.return = returnFiber;
        return _created3;
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    }

    return null;
  }

  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    // Update the fiber if the keys match, otherwise return null.
    var key = oldFiber !== null ? oldFiber.key : null;

    if (typeof newChild === 'string' && newChild !== '' || typeof newChild === 'number') {
      // Text nodes don't have keys. If the previous node is implicitly keyed
      // we can continue to replace it without aborting even if it is not a text
      // node.
      if (key !== null) {
        return null;
      }

      return updateTextNode(returnFiber, oldFiber, '' + newChild, lanes);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            if (newChild.key === key) {
              return updateElement(returnFiber, oldFiber, newChild, lanes);
            } else {
              return null;
            }
          }

        case REACT_PORTAL_TYPE:
          {
            if (newChild.key === key) {
              return updatePortal(returnFiber, oldFiber, newChild, lanes);
            } else {
              return null;
            }
          }

        case REACT_LAZY_TYPE:
          {
            {
              var payload = newChild._payload;
              var init = newChild._init;
              return updateSlot(returnFiber, oldFiber, init(payload), lanes);
            }
          }
      }

      if (isArray(newChild) || getIteratorFn(newChild)) {
        if (key !== null) {
          return null;
        }

        return updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    }

    return null;
  }

  function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
    if (typeof newChild === 'string' && newChild !== '' || typeof newChild === 'number') {
      // Text nodes don't have keys, so we neither have to check the old nor
      // new node for the key. If both are text nodes, they match.
      var matchedFiber = existingChildren.get(newIdx) || null;
      return updateTextNode(returnFiber, matchedFiber, '' + newChild, lanes);
    }

    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          {
            var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

            return updateElement(returnFiber, _matchedFiber, newChild, lanes);
          }

        case REACT_PORTAL_TYPE:
          {
            var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;

            return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
          }

        case REACT_LAZY_TYPE:
          {
            var payload = newChild._payload;
            var init = newChild._init;
            return updateFromMap(existingChildren, returnFiber, newIdx, init(payload), lanes);
          }

      }

      if (isArray(newChild) || getIteratorFn(newChild)) {
        var _matchedFiber3 = existingChildren.get(newIdx) || null;

        return updateFragment(returnFiber, _matchedFiber3, newChild, lanes, null);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    }

    return null;
  }
  /**
   * Warns if there is a duplicate or missing key
   */


  function warnOnInvalidKey(child, knownKeys, returnFiber) {
    {
      if (typeof child !== 'object' || child === null) {
        return knownKeys;
      }

      switch (child.$$typeof) {
        case REACT_ELEMENT_TYPE:
        case REACT_PORTAL_TYPE:
          warnForMissingKey(child, returnFiber);
          var key = child.key;

          if (typeof key !== 'string') {
            break;
          }

          if (knownKeys === null) {
            knownKeys = new Set();
            knownKeys.add(key);
            break;
          }

          if (!knownKeys.has(key)) {
            knownKeys.add(key);
            break;
          }

          error('Encountered two children with the same key, `%s`. ' + 'Keys should be unique so that components maintain their identity ' + 'across updates. Non-unique keys may cause children to be ' + 'duplicated and/or omitted — the behavior is unsupported and ' + 'could change in a future version.', key);

          break;

        case REACT_LAZY_TYPE:
          {
            var payload = child._payload;
            var init = child._init;
            warnOnInvalidKey(init(payload), knownKeys, returnFiber);
            break;
          }
      }
    re rernFiber;
    return created;
  }

  function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
    var key = element.key;
    var child = currentFirstChild;

    while (child !== null) {
      // TODO: If key === null and child.key === null, then this only applies to
      // the first item in the list.
      if (child.key === key) {
        var elementType = element.type;

        if (elementType === REACT_FRAGMENT_TYPE) {
          if (child.tag === Fragment) {
            deleteRemainingChildren(returnFiber, child.sibling);
            var existing = useFiber(child, element.props.children);
            existing.return = returnFiber;

            {
              existing._debugSource = element._source;
              existing._debugOwner = element._owner;
            }

            return existing;
          }
        } else {
          if (child.elementType === elementType || ( // Keep this check inline so it only runs on the false path:
           isCompatibleFamilyForHotReloading(child, element) ) || // Lazy types should reconcile their resolved type.
          // We need to do this after the Hot Reloading check above,
          // because hot reloading has different semantics than prod because
          // it doesn't resuspend. So we can't let the call below suspend.
           typeof elementType === 'object' && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === child.type) {
            deleteRemainingChildren(returnFiber, child.sibling);

            var _existing = useFiber(child, element.props);

            _existing.ref = coerceRef(returnFiber, child, element);
            _existing.return = returnFiber;

            {
              _existing._debugSource = element._source;
              _existing._debugOwner = element._owner;
            }

            return _existing;
          }
        } // Didn't match.


        deleteRemainingChildren(returnFiber, child);
        break;
      } else {
        deleteChild(returnFiber, child);
      }

      child = child.sibling;
    }

    if (element.type === REACT_FRAGMENT_TYPE) {
      var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
      created.return = returnFiber;
      return created;
    } else {
      var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);

      _created4.ref = coerceRef(returnFiber, currentFirstChild, element);
      _created4.return = returnFiber;
    rnFiber;
    return created;
  } // This API will tag the children with the side-effect of the reconciliation
  // itself. They will be added to the side-effect list as we pass through the
  // children and the parent.


  function reconcileChildFibers(returnFiber, currentFirstChild, newChild, lanes) {
    // This function is not recursive.
    // If the top level item is an array, we treat it as a set of children,
    // not as a fragment. Nested arrays on the other hand will be treated as
    // fragment nodes. Recursion happens at the normal flow.
    // Handle top level unkeyed fragments as if they were arrays.
    // This leads to an ambiguity between <>{[...]}</> and <>...</>.
    // We treat the ambiguous cases above the same.
    var isUnkeyedTopLevelFragment = typeof newChild === 'object' && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;

    if (isUnkeyedTopLevelFragment) {
      newChild = newChild.props.children;
    } // Handle object types


    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));

        case REACT_PORTAL_TYPE:
          return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));

        case REACT_LAZY_TYPE:
          {
            var payload = newChild._payload;
            var init = newChild._init; // TODO: This function is supposed to be non-recursive.

            return reconcileChildFibers(returnFiber, currentFirstChild, init(payload), lanes);
          }

      }

      if (isArray(newChild)) {
        return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
      }

      if (getIteratorFn(newChild)) {
        return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
      }

      throwOnInvalidObjectType(returnFiber, newChild);
    }

    if (typeof newChild === 'string' && newChild !== '' || typeof newChild === 'number') {
      return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, '' + newChild, lanes));
    }

    {
      if (typeof newChild === 'function') {
        warnOnFunctionType(returnFiber);
      }
    } // Remaining cases are all treated as empty.


    return deleteRemainingChildren(returnFiber, currentFirstChild);
  }

  return reconcileChildFibers;
}

var reconcileChildFibers = ChildReconciler(true);
var mountChild }

  newChild.sibling = null;
} // Reset a workInProgress child set t    child = child.sibling;
  }
}

var NO_CONTEXT = {};
var contextStackCursor$1 = createCursor(NO_CONTEXT);
var contextFiberStackCursor = createCursor(NO_CONTEXT);
var rootInstanceStackCur an issue.');
  }

  return c;
}

function getRootHostContainer() {
  var rootInstance = requiredContext(rootInstanceStackCursor.curoo$CntextFiberStackCursor, fiber);
}

var DefaultSuspenseContext = 0; // The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.

var SubtreeSuspenseContextMask = 1; // Subtree Flags:
// InvisibleParentSuspenseContext indicates that one of our parent Suspense
// boundaries is not currently showing visible main content.
// Either because it is already showing a fallback or is not mounted at all.
// We can use this to determine if it is desirable to trigger a fallback at
// the parent. If not, then we might need to trigger undesirable boundaries
// and/or suspend the commit to avoid hiding the parent content.

var InvisibleParentSuspenseContext = 1; // Shallow Flags:
// ForceSuspenseFallback can be used by SuspenseList to force newly added
// items into their fallback state during one of the render passes.

var ForceSuspenseFallback = 2;
var suspenseStackCursor = createContextMask | shallowContext;
}
function addSubtreeSuspenseContext(parentContext, subtreeContext) {
  return ppe.sibling;
  }

  return null;
}

var NoFlags$1 =
/*   */
0; // Represents whether effect should fire.

var HasEffect =
/* */
1; // Represents the phase in which the effect (not the clean-up) fires.

var Insertion =
/*  */
2;
var Layout =
/*    */
4;
var Passive$1 =
/*   */
8;

// and should be reset before starting a new render.
// This tracks which mutable sources need to be reset after a render.
kInProgressSources.length = 0;
}
// This ensures that the version used for server rendering matches the one
// that is eventually read during hydration.
// If they don't match there's a potential tear and ah(mutableSource, version);
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
    ReactCurrentBatchConfig$2 = ReactSharedInternals.ReactCurrentBatchConfig;
var didWarnAboutMismatchedHooksForComponent;
var didWarnUncachedGetSnapshot;

{
  didWarnAboutMismatchedHooksForComponent = new Set();
}

// These are set right before calling the component.
var renderLanes = NoLanes; // The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.

var currentlyRenderingFiber$1 = null; // Hooks are stored as a linked list on the fiber's memoizedState field. The
// current hook list is the list that belongs to the current fiber. The
// work-in-progress hook list is a new list that will be added to the
// work-in-progress fiber.

var currentHook = null;
var workInProgressHook = null; // Whether an update was scheduled at any point during the render phase. This
// does not get reset if we do another render pass; only when we're completely
// finished evaluating this component. This is an optimization so we know
// whether we need to clear render phase updates after a throw.

var didScheduleRenderPhaseUpdate = false; // Where an update was scheduled only during the current render pass. This
// gets reset after each attempt.
// TODO: Maybe there's some way to consolidate this with
// `didScheduleRenderPhaseUpdate`. Or with `numberOfReRenders`.

var didScheduleRenderPhaseUpdateDuringThisPass = false; // Counts the number of useId hooks in this component.

var localIdCounter = 0; // Used for ids that are generated completely client-side (i.e. not during
// hydration). This counter is global, so client ids are not stable across
// render attempts.

var globalClientIdCounter = 0;
var RE_RENDER_LIMIT = 25; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev = null; // In DEV, this list ensures that hooks are called in the same order between renders.
// The list stores the order of hooks used during the initial render (mount).
// Subsequent renders (updates) reference this list.

var hookTypesDev = null;
var hookTypesUpdateIndexDev = -1; // In DEV, this tracks whether currently rendering component needs to ignore
// the dependencies for Hooks that need them (e.g. useEffect or useMemo).
// When true, such Hooks will always be "remounted". Only used during hot reload.

var ignosv(hookName);
      }
    }
  }
}

function checkDepsAreArrayDev(deps) {
  {
    if (deps !== undefined && deps !== null && !isArray(deps)) {
      // Verify deps, but only on mount to avoid extra checks.
      // It's unlikely their type would change as usually you define them inline.
      error('%s received a final argument that is not an array (instead, received `%s`). When ' + 'specified, the final argument must be an array.', currentHookNameIadu=

tihh  return [newState, dispatch];
}

function mountMutableSource(source, getSnapshot, subscribe) {

   forceStoreRerender(fiber);
  }
}

function subscribeToStore(fiber, inst, subscreStoreRerender(fiber);
    }
  }; // Subscribe to the store and return a clean-up function.


  return (fhook.memoizedState, dispatch];
}

function updateState(initialState) {
  return updateReducer(basicStateReducer);
}

function rerenderState(initialState) {
  return rerendt=; s Passive$1, create, deps);
  }
}

function updateEffect(create, deps) {
  return updateEffectImpl(Passive, Passive$1, create, deps);
}

function mountInsertionEffect(create, deps) {
  return mountEffectImpl(Update, Insertion, create, deps);
}

function updateInsertionEffect(create, deps) {
  return updateEffectImpl(UpdarUect.current = null;
    };
  }
}

function mountImperativeHandle(ref, create, deps) {
  {
    if (typeof create !== 'function') {
      error('Expected useImperativeHandle() second argument to be a function ' + 'that creates a handle. Instead received: %s.', create !== null ? typeof create : 'null');
    }
  } // TODO: If deps are provided, should we skip comparing the ref itself?


  var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
  var fiberFlags = Update;

  {
    fiberFlags |= LayoutStatic;
  }

  if ( (currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) {
    fiberFlags |= MountLayoutDev;
  }

  return mountEffectImpl(fiberFlags, Layout, imperativeHandleEffect.bind(nullan display custom hook values.
}

var upda  nnextDeps];
  return nextValue;
}

function mountDeferredValue(value) {
  var _mountState = mountState(value),
      prevValue = _mountState[0],
      setValue = _mountState[1];

  mountEffect(function () {
    var prevTransition = ReactCurrentBatchConfig$2.transition;
    ReactCurrentBatchConfig$2.transition = {};

    try {
      setValue(value);
    } finally {
      ReactCurrentBatchConfig$2.transition = prevTransition;
    }
  }, [value]);
  return prevValue;
}

function updateDeferredValue(value) {
  var _updateState = updateState(),
      prevValue = _updateState[0],
      setValue = _updateState[1];

  updateEffect(function () {
    var prevTransition = ReactCurrentBatchConfig$2.transition;
    ReactCurrentBatchConfig$2.transition = {};

    try {
      setValue(value);
    } finally {
      ReactCurrentBatchConfig$2.transition = prevTransition;
    }
  }, [value]);
  return prevValue;
}

function rerenderDeferredValue(value) {
  var _rerenderState = rerenderState(),
      prevValue = _rerenderState[0],
      setValue = _rtion = prevTransition;
    }
  }, e;
  return [isPending, start];
}

function updateTransition() {
  var _updateState2 = updateState(),
      isPending = _updateState2[0];

  var hook = updateWorkInProgressHook();
  var start = hook.memoizedState;;
  return [isPending, start];
}

var isUpdatingOgmok.memoizedState;
  return id;
}

function dispatchReducerAction(fiber, queue, action) {
  {
    if (typeof arguments[3] === 'function') {
      error("State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().');
    }
  }

  var lane = requestUpdateLane(fiber);
  var update = {
    lane: lane,
    action: action,
    hasEagerState: false,
    eagerState: null,
    next: null
  };

  if (isRenderPhaseUpdate(fiber)) {
    enqueueRenderPhaseUpdate(queue, update);
  } else {
    enqueueUpdate$1(fiber, queue, update);
    var eventTime = requestEventTime();
    var root = scheduleUpdateOnFiber(fiber, lane, eventTime);

    if (root !== null) {
      entangleTransitionUpdate(root, queue, lane);
    }
  }

  markUpdateInDevTools(fiber, lane);
}

function dispatchSetState(fiber, queue, action) {
  {
    if (typeof arguments[3] === 'function') {
      error("State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().');
    }
  }

  var lane = requestUpdateLane(fiber);
  var update = {
    lane: lane,
    action: action,
    hasEagerState: false,
    eagerState: null,
    next: null
  };

  if (isRenderPhaseUpdate(fiber)) {
    enqueueRenderPhaseUpdate(queue, update);
  } else {
    enqueueUpdate$1(fiber, queue, update);
    var alternate = fiber.alternate;

    if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
      // The queue is currently empty, which means we can eagerly compute the
      // next state before entering the render phase. If the new state is the
      // same as the current state, we may be able to bail out entirely.
      var lastRenderedReducer = queue.lastRenderedReducer;

      if (lastRenderedReducer !== null) {
        var prevDispatcher;

        {
          prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
        }

        try {
          var currentState = queue.lastRenderedState;
          var eagerState = lastRenderedReducer(currentState, action); // Stash the eagerly computed state, and the reducer used to compute
          // it, on the update object. If the reducer hasn't changed by the
          // time we enter the render phase, then the eager state can be used
          // without calling the reducer again.

          update.hasEagerState = true;
          update.eagerState = eagerState;

          if (objectIs(eagerState, currentState)) {
            // Fast path. We can bail out without scheduling React to re-render.
            // It's still possible that we'll need to rebase this update later,
            // if the component re-renders for a different reason and by that
            // time the reducer has changed.
            return;
          }
        } catch (error) {// Suppress the error. It will throw again in the render phase.
        } finally {
          {
            ReactCurrentDispatcher$1.current = prevDispatcher;
          }
        }
      }
    }

    var eventTime = requestEventTime();
    var root = scheduleUpdateOnFiber(fiber, lane, eventTime);

    if (root !== null) {
      entangleTransitionUpdate(root, queue, lane);
    }
  }

  markU=  }

  queue.pending = update;
}

function enqueueUpdate$1(fiber, queue, update, lane) {
  if (isInterleavedUpdate(fiber)) {
    var interleaved = queue.interleaved;

    if (interleaved === null) {
      // This is the first update. Create a circular list.
      update.next = update; // At the end of the current render, this queue's interleaved updates will
      // be transferred to the pending queue.

      pushInterleavedQueue(queue);
    } else {
      update.next = interleaved.next;
      interleaved.next = update;
    }

    queue.interleaved = update;
  } else {
    var pending = queue.pending;

    if (pending === null) {
      // This is the first update. Create a circular list.
      update.next = update;
    } else {
      update.next = pending.next;
      pending.next = update;
    }

  gateScheduled(fiber, lane);
  }
}

var ContextOnlyDispatcher = {
  readContext: readContext,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useMutableSource: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError,
  unstable_isNewReconciler: enableNewReconciler
};

var HooksDispatcherOnMountInDEV = null;
var HooksDispatcherOnMountWithHookTypesInDEV = null;
var HooksDispatcherOnUpdateInDEV = null;
var HooksDispatcherOnRerenderInDEV = null;
var InvalidNestedHooksDispatcherOnMountInDEV = null;
var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
var InvalidNestedHooksDispatcherOnRerenderInDEV = null;

{
  var warnInvalidContextAccess = function () {
    error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
  }s.org/link/rules-of-hooks');
  };

  HooksDispatcherOnMountInDEV = {
    readContext: function (context) {
      return readContext(context);
    },
    useCallback: function (callback, deps) {
      currentHookNameInDev = 'useCallback';
      mountHookTypesDev();
      checkDepsAreArrayDev(deps);
      return mountCallback(callback, deps);
    },
    useContext: function (context) {
      currentHookNameInDev = 'useContext';
      mountHookTypesDev();
      return readContext(context);
    },
    useEffect: function (create, deps) {
      currentHookNameInDev = 'useEffect';
      mountHookTypesDev();
      checkDepsAreArrayDev(deps);
      return mountEffect(create, deps);Handle(ref, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      currentHookNameInDev = 'useInsertionEffect';
      mountHookTypesDev();
      checkDepsAreArrayDev(deps);
      return mountInsertionEffect(create, deayoutEffect(cr = prevDispatcher;
      }
    },
    useReducer: function (reducer, initialArg, init) {
      currentHookNameInDev = 'useReducer';
      mountHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountReducer(reducer, initialArg, init);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useRef: function (initialValue) {
      currentHookNameInDev = 'useRef';
      mountHookTypesDev();
      return mountRef(initialValue);
    },
    useState: function (initialState) {
      currentHookNameInDev = 'useState';
      mountHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountState(initialState);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useDebugValue: function (value, formatterFn) {
      currentHookNameInDev = 'useDebugValue';
      mountHookTypesDev();
      return mountDebugValue();
    },
    useDeferredValue: function (value) {
      currentHookNameInDev = 'useDeferredValue';
      mountHookTypesDev();
      return mountDeferredValue(value);
    },
    useTransition: function () {
      currentHookNameInDev = 'useTransition';
      mountHookTypesDev();
      return mountTransition();
    },
    useMutableSource: function (source, getSnapshot, subscribe) {
      currentHookNameInDev = 'useMutableSource';
      mountHookTypesDev();
      return mountMutableSource();
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      currentHookNameInDev = 'useSyncExternalStore';
      mountHookTypesDev();
      return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    },
    useId: function () {
      currentHookNameInDev = 'useId';
      mountHookTypesDev();
      return mountId();
    },
    unstable_isNewReconciler: enableNewReconciler
  };

  HooksDispatcherOnMountWithHookTypesInDEV = {
    readContext: function (context) {
      return readContext(context);
    },
    useCallback: function (callback, deps) {
      currentHookNameInDev = 'useCallback';
      updateHookTypesDev();
      return mountCallback(callback, deps);
    },
    useContext: function (context) {
      currentHookNameInDev = 'useContext';
      updateHookTypesDev();
      return readContext(context);
    },
    useEffect: function (create, deps) {
      currentHookNameInDev = 'useEffect';
      updateHookTypesDev();
      return mountEffect(create, deps);
    },
    useImperativeHandle: function (ref, create, deps) {
      currentHookNameInDev = 'useImperativeHandle';
      updateHookTypesDev();
      return mountImperativeHandle(ref, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      currentHookNameInDev = 'useInsertionEffect';
      updateHookTypesDev();
      return mountInsertionEffect(create, deps);
    },
    useLayoutEffect: function (create, deps) {
      currentHookNameInDev = 'useLayoutEffect';
      updateHookTypesDev();
      return mountLayoutEffect(create, deps);
    },
    useMemo: function (create, deps) {
      currentHookNameInDev = 'useMemo';
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountMemo(create, deps);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useReducer: function (reducer, initialArg, init) {
      currentHookNameInDev = 'useReducer';
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountReducer(reducer, initialArg, init);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useRef: function (initialValue) {
      currentHookNameInDev = 'useRef';
      updateHookTypesDev();
      return mountRef(initialValue);
    },
    useState: function (initialState) {
      currentHookNameInDev = 'useState';
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountState(initialState);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useDebugValue: function (value, formatterFn) {
      currentHookNameInDev = 'useDebugValue';
      updateHookTypesDev();
      return mountDebugValue();
    },
    useDeferredValue: function (value) {
      currentHookNameInDev = 'useDeferredValue';
      updateHookTypesDev();
      return mountDeferredValue(value);
    },
    useTransition: function () {
      currentHookNameInDev = 'useTransition';
      updateHookTypesDev();
      return mountTransition();
    },
    useMutableSource: function (source, getSnapshot, subscribe) {
      currentHookNameInDev = 'useMutableSource';
      updateHookTypesDev();
      return mountMutableSource();
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      currentHookNameInDev = 'useSyncExternalStore';
      updateHookTypesDev();
      return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    },
    useId: function () {
      currentHookNameInDev = 'useId';
      updateHookTypesDev();
      return mountId();
    },
    unstable_isNewReconciler: enableNewReconciler
  };

  HooksDispatcherOnUpdateInDEV = {
    readContext: function (context) {
      return readContext(context);
    },
    useCallback: function (callback, deps) {
      currentHookNameInDev = 'useCallback';
      updateHookTypesDev();
      return updateCallback(callback, deps);
    },
    useContext: function (context) {
      currentHookNameInDev = 'useContext';
      updateHookTypesDev();
      return readContext(context);
    },
    useEffect: function (create, deps) {
      currentHookNameInDev = 'useEffect';
      updateHookTypesDev();
      return updateEffect(create, deps);
    },
    useImperativeHandle: function (ref, create, deps) {
      currentHookNameInDev = 'useImperativeHandle';
      updateHookTypesDev();
      return updateImperativeHandle(ref, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      currentHookNameInDev = 'useInsertionEffect';
      updateHookTypesDev();
      return updateInsertionEffect(create, deps);
    },
    useLayoutEffect: function (create, deps) {
      currentHookNameInDev = 'useLayoutEffect';
      updateHookTypesDev();
      return updateLayoutEffect(create, deps);
    },
    useMemo: function (create, deps) {
      currentHookNameInDev = 'useMemo';
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

      try {
        return updateMemo(create, deps);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useReducer: function (reducer, initialArg, init) {
      currentHookNameInDev = 'useReducer';
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

      try {
        return updateReducer(reducer, initialArg, init);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useRef: function (initialValue) {
      currentHookNameInDev = 'useRef';
      updateHookTypesDev();
      return updateRef();
    },
    useState: function (initialState) {
      currentHookNameInDev = 'useState';
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

      try {
        return updateState(initialState);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useDebugValue: function (value, formatterFn) {
      currentHookNameInDev = 'useDebugValue';
      updateHookTypesDev();
      return updateDebugValue();
    },
    useDeferredValue: function (value) {
      currentHookNameInDev = 'useDeferredValue';
      updateHookTypesDev();
      return updateDeferredValue(value);
    },
    useTransition: function () {
      currentHookNameInDev = 'useTransition';
      updateHookTypesDev();
      return updateTransition();
    },
    useMutableSource: function (source, getSnapshot, subscribe) {
      currentHookNameInDev = 'useMutableSource';
      updateHookTypesDev();
      return updateMutableSource();
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      currentHookNameInDev = 'useSyncExternalStore';
      updateHookTypesDev();
      return updateSyncExternalStore(subscribe, getSnapshot);
    },
    useId: function () {
      currentHookNameInDev = 'useId';
      updateHookTypesDev();
      return updateId();
    },
    unstable_isNewReconciler: enableNewReconciler
  };

  HooksDispatcherOnRerenderInDEV = {
    readContext: function (context) {
      return readContext(context);
    },
    useCallback: function (callback, deps) {
      currentHookNameInDev = 'useCallback';
      updateHookTypesDev();
      return updateCallback(callback, deps);
    },
    useContext: function (context) {
      currentHookNameInDev = 'useContext';
      updateHookTypesDev();
      return readContext(context);
    },
    useEffect: function (create, deps) {
      currentHookNameInDev = 'useEffect';
      updateHookTypesDev();
      return updateEffect(create, deps);Handle(ref, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      currentHookNameInDev = 'useInsertionEffect';
      updateHookTypesDev();
      return updateInsertionEffect(create, deayoutEffect(cr = prevDispatcher = prevDispat
      return u = prevDispatcher;
 return updateDebugValueenderDeferredValue(value);
    },
    useTransition: function () {
      currentHookNameInDev = 'useTransition';
      updateHookTypesDev();
      return rerenderTransitionurn updateMutableSource();
e(subscribe, getSnapshot);
    },
    useId: function () {
      currentHookNameInDev = 'useId';
      updateHookTypesDev();
      return updateId();
    },
    unstable_isNewReconciler: enableNewReconciler
  };

  InvalidNestedHooksDispatcherOnMountInDEV = {
    readContext: function (context) {
      warnInvalidContextAccess();
      return readContext(context);
    },
    useCallback: function (callback, deps) {
      currentHookNameInDev = 'useCallback';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountCallback(callback, deps);
    },
    useContext: function (context) {
      currentHookNameInDev = 'useContext';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return readContext(context);
    },
    useEffect: function (create, deps) {
      currentHookNameInDev = 'useEffect';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountEffect(create, deps);
    },
    useImperativeHandle: function (ref, create, deps) {
      currentHookNameInDev = 'useImperativeHandle';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountImperativeHandle(ref, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      currentHookNameInDev = 'useInsertionEffect';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountInsertionEffect(create, deps);
    },
    useLayoutEffect: function (create, deps) {
      currentHookNameInDev = 'useLayoutEffect';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountLayoutEffect(create, deps);
    },
    useMemo: function (create, deps) {
      currentHookNameInDev = 'useMemo';
      warnInvalidHookAccess();
      mountHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountMemo(create, deps);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useReducer: function (reducer, initialArg, init) {
      currentHookNameInDev = 'useReducer';
      warnInvalidHookAccess();
      mountHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountReducer(reducer, initialArg, init);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useRef: function (initialValue) {
      currentHookNameInDev = 'useRef';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountRef(initialValue);
    },
    useState: function (initialState) {
      currentHookNameInDev = 'useState';
      warnInvalidHookAccess();
      mountHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;

      try {
        return mountState(initialState);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useDebugValue: function (value, formatterFn) {
      currentHookNameInDev = 'useDebugValue';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountDebugValue();
    },
    useDeferredValue: function (value) {
      currentHookNameInDev = 'useDeferredValue';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountDeferredValue(value);
    },
    useTransition: function () {
      currentHookNameInDev = 'useTransition';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountTransition();
    },
    useMutableSource: function (source, getSnapshot, subscribe) {
      currentHookNameInDev = 'useMutableSource';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountMutableSource();
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      currentHookNameInDev = 'useSyncExternalStore';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    },
    useId: function () {
      currentHookNameInDev = 'useId';
      warnInvalidHookAccess();
      mountHookTypesDev();
      return mountId();
    },
    unstable_isNewReconciler: enableNewReconciler
  };

  InvalidNestedHooksDispatcherOnUpdateInDEV = {
    readContext: function (context) {
      warnInvalidContextAccess();
      return readContext(context);
    },
    useCallback: function (callback, deps) {
      currentHookNameInDev = 'useCallback';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateCallback(callback, deps);
    },
    useContext: function (context) {
      currentHookNameInDev = 'useContext';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return readContext(context);
    },
    useEffect: function (create, deps) {
      currentHookNameInDev = 'useEffect';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateEffect(create, deps);
    },
    useImperativeHandle: function (ref, create, deps) {
      currentHookNameInDev = 'useImperativeHandle';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateImperativeHandle(ref, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      currentHookNameInDev = 'useInsertionEffect';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateInsertionEffect(create, deps);
    },
    useLayoutEffect: function (create, deps) {
      currentHookNameInDev = 'useLayoutEffect';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateLayoutEffect(create, deps);
    },
    useMemo: function (create, deps) {
      currentHookNameInDev = 'useMemo';
      warnInvalidHookAccess();
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

      try {
        return updateMemo(create, deps);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useReducer: function (reducer, initialArg, init) {
      currentHookNameInDev = 'useReducer';
      warnInvalidHookAccess();
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

      try {
        return updateReducer(reducer, initialArg, init);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useRef: function (initialValue) {
      currentHookNameInDev = 'useRef';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateRef();
    },
    useState: function (initialState) {
      currentHookNameInDev = 'useState';
      warnInvalidHookAccess();
      updateHookTypesDev();
      var prevDispatcher = ReactCurrentDispatcher$1.current;
      ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;

      try {
        return updateState(initialState);
      } finally {
        ReactCurrentDispatcher$1.current = prevDispatcher;
      }
    },
    useDebugValue: function (value, formatterFn) {
      currentHookNameInDev = 'useDebugValue';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateDebugValue();
    },
    useDeferredValue: function (value) {
      currentHookNameInDev = 'useDeferredValue';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateDeferredValue(value);
    },
    useTransition: function () {
      currentHookNameInDev = 'useTransition';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateTransition();
    },
    useMutableSource: function (source, getSnapshot, subscribe) {
      currentHookNameInDev = 'useMutableSource';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateMutableSource();
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      currentHookNameInDev = 'useSyncExternalStore';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateSyncExternalStore(subscribe, getSnapshot);
    },
    useId: function () {
      currentHookNameInDev = 'useId';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateId();
    },
    unstable_isNewReconciler: enableNewReconciler
  };

  InvalidNestedHooksDispatcherOnReturn readContext(context);
    },
    useCallback: function (callback, deps) {
      currentHookNameInDev = 'useCallback';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateCallback(callback, deps);
    },
    useContext: function (context) {
      currentHookNameInDev = 'useContext';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return readContext(context);
    },
    useEffect: function (create, deps) {
      currentHookNameInDev = 'useEffect';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateEffect(create, deps);Handle(ref, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      currentHookNameInDev = 'useInsertionEffect';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateInsertionEffect(create, deayoutEffect(cr = prevDispatcher = prevDispat
      return u = prevDispatcher;
 return updateDebugValueenderDeferredValue(value);
    },
    useTransition: function () {
      currentHookNameInDev = 'useTransition';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return rerenderTransitionurn updateMutableSource();
e(subscribe, getSnapshot);
    },
    useId: function () {
      currentHookNameInDev = 'useId';
      warnInvalidHookAccess();
      updateHookTypesDev();
      return updateId();
    },
    unstable_isNewReconciler: enableNewReconciler
  };
}

var now$1 = Scheduler.unstable_now;
var commitTime = 0;
var layoutEffectStartTime = -1;
var profilerStartTime = -1;
var passiveEffectStartTime = -1;
/**
 * Tracks whether the current update was a nested/cascading update (scheduled from a layout effect).
 *
 * The overall sequence is:
 *   1. render
 *   2. commit (and call `onRender`, `onCommit`)
 *   3. check for nested updates
 *   4. flush passive effects (and call `onPostCommit`)
 *
 * Nested updates are identified in step 3 above,
 * but step 4 still applies to the work that was just committed.
 * We use two flags to track nested updates then:
 * one tracks whether the upcoming update is a nested update,
 * and the other tracks whether the current update was a nested update.
 * The first value gets synced to the second at the start of the render phase.
 */

var currentUpdateIsNested = false;
var nestedUpdateScheduled = false;

function isCurrentUpdateNested() {
  teedUpdateScheduled = false;
  }
}

function getCommitTime() {
  return commitTime;
}

function recordCommitTimea)   parentFiber.return;
    }
  }
}

function startLayoutEffectTimer() {

  lays FiberInDevAndProd(source)
  };
}

// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return y, errorInfo) {
  return true;
}

function logCapturedError(boundary, errorInfo) {
  try {
    var logError = showErrorDialog(boundary, errorInfo); // Allow injected showErrorDialog() to prevent default console.error logging.
    // This enables renderers like ReactNative to better manage redbox behavior.

    if (logError === false) {
      return;
    }

    var error = errorInfo.value;

    if (true) {
      var source = errorInfo.source;
      var stack = errorInfo.stack;
      var componentStack = stack !== null ? stack : ''; // Browsers support silencing uncaught errors by calling
      // `preventDefault()` in window `error` handler.
      // We record this information as an expando on the error.

      if (error != null && error._suppressLogging) {
        if (boundary.tag === ClassComponent) {
          // The error is recoverable and was silenced.
          // Ignore it and don't print the stack addendum.
          // This is handy for testing error boundaries without noise.
          return;
        } // The error is fatal. Since the silencing might have
        // been accidental, we'll surface it anyway.
        // However, the browser would have silenced the original error
        // so we'll print it first, and then print the stack addendum.


        console['error'](error); // Don't transform to our wrapper
        // For a more detailed description of this block, see:
        // https://github.com/facebook/react/pull/13384
      }

      var componentName = source ? getComponentNameFromFiber(source) : null;
      var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : 'The above error occurred in one of your React components:';
      var errorBoundaryMessage;

      if (boundary.tag === HostRoot) {
        errorBoundaryMessage = 'Consider adding an error boundary to your tree to customize error handling behavior.\n' + 'Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.';
      } else {
        var errorBoundaryName = getComponentNameFromFiber(boundary) || 'Anonymous';
        errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
      }

      var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage); // In development, we provide our own message with just the component stack.
      // We don't include the original error message and JS stack because the browser
      // has already printed it. Even if the application swallows the error, it is still
      // displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.

      console['error'](combinedMessage); // Don't transform to our wrapper
    } else {}
  } catch (e) {
    // This method must not throw, or React internal state will get messed up.
    // If console.error is overridden, or logCapturedError() shows a dialog that throws,
    // we want to report this error outside of the normal stack as a last resort.
    // https://github.com/facebook/rnction () {
      throw e;
    });
  }
}

var PossiblyWeakMap$1 = typeof WeakMap r}w eode !== null);

  return null;
}

function markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes) {
  // This marks a Suspense boundary so that when we're unwinding the stack,
  // it captures the suspended "exception" and does a second (fallback) pass.
  if ((suspenseBoundary.mode & ConcurrentMode) === NoMode) {
    // Legacy Mode Suspense
    //
    // If the boundary is in legacy mode, we should *not*
    // suspend the commit. Pretend as if the suspended component rendered
    // null and keep rendering. When the Suspense boundary completes,
    // we'll do a second pass to render the fallback.
    if (suspenseBoundary === returnFiber) {
      // Special case where we suspended while reconciling the children of
      // a Suspense boundary's inner Offscreen wrapper fiber. This happens
      // when a React.lazy component is a direct child of a
      // Suspense boundary.
      //
      // Suspense boundaries are implemented as multiple fibers, but they
      // are a single conceptual unit. The legacy mode behavior where we
      // pretend the suspended fiber committed as `null` won't work,
      // because in this case the "suspended" fiber is the inner
      // Offscreen wrapper.
      //
      // Because the contents of the boundary haven't started rendering
      // yet (i.e. nothing in the tree has partially rendered) we can
      // switch to the regular, concurrent mode behavior: mark the
      // boundary with ShouldCapture and enter the unwind phase.
      suspenseBoundary.flags |= ShouldCapture;
    } else {
      suspenseBoundary.flags |= DidCapture;
      sourceFiber.flags |= ForceUpdateForLegacySuspense; // We're going to commit this fiber even though it didn't complete.
      // But we shouldn't call any lifecycle methods or callbacks. Remove
      // all lifecycle effect tags.

      sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);

      if (sourceFiber.tag === ClassComponent) {
        var currentSourceFiber = sourceFiber.alternate;

        if (currentSourceFiber === null) {
          // This is a new mount. Change the tag so it's not mistaken for a
          // completed class component. For example, we should not call
          // componentWillUnmount if it is deleted.
          sourceFiber.tag = IncompleteClassComponent;
        } else {
          // When we try rendering again, we should not reuse the current fiber,
          // since it's known to be in an inconsistent state. Use a force update to
          // prevent a bail out.
          var update = createUpdate(NoTimestamp, SyncLane);
          update.tag = ForceUpdate;
          enqueueUpdate(sourceFiber, update);
        }
      } // The source fiber did not complete. Mark it with Sync priority to
      // indicate that it still has pending work.


      sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
    }

    return suspenseBoundary;
  } // Confirmed that the boundary is in a concurrent mode tree. Continue
  // with the normal suspend path.
  //
  // After this we'll use a set of heuristics to determine whether this
  // render pass will run to completion or restart or "suspend" the commit.
  // The actual logic for this is spread out in different places.
  //
  // This first principle is that if we're going to suspend when we complete
  // a root, then we should also restart if we get an update or ping that
  // might unsuspend it, and vice versa. The only reason to suspend is
  // because you think you might want to restart before committing. However,
  // it doesn't make sense to restart only while in the period we're suspended.
  //
  // Restarting too aggressively is also not good because it starves out any
  // intermediate loading state. So we use heuristics to determine when.
  // Suspense Heuristics
  //
  // If nothing threw a Promise or all the same fallbacks are already showing,
  // then don't suspend/restart.
  //
  // If this is an initial render of a new tree of Suspense boundaries and
  // those trigger a fallback, then don't suspend/restart. We want to ensure
  // that we can show the initial loading state as quickly as possible.
  //
  // If we hit a "Delayed" case, such as when we'd switch from content back into
  // a fallback, then we should always suspend/restart. Transitions apply
  // to this case. If none is defined, JND is used instead.
  //
  // If we're already showing a fallback and it gets "retried", allowing us to show
  // another level, but there's still an inner boundary that would show a fallback,
  // then we suspend/restart for 500ms since the last time we showed a fallback
  // anywhere in the tree. This effectively throttles progressive loading into a
  // consistent train of commits. This also gives us an opportunity to restart to
  // get to the completed state slightly earlier.
  //
  // If there's ambiguity due to batching it's resolved in preference of:
  // 1) "delayed", 2) "initial render", 3) "retry".
  //
  // We want to ensure that a "busy" state doesn't get force committed. We want to
  // ensure that new initial loading states can commit as soon as possible.


  suspenseBoundary.flags |= ShouldCapture; // TODO: I think we can remove this, since we now use `DidCapture` in
  // the begin phase to prevent an early bailout.

  suspenseBoundary.lanes = rootRenderLanes;
  return suspenseBoundary;
}

function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
  // The source fiber did not complete.
  sourceFiber.flags |= Incomplete;

  {
    if (isDevToolsPresent) {
      // If we have pending work still, restore the original updaters
      restorePendingUpdaters(root, rootRenderLanes);
    }
  }

  if (value !== null && typeof value === 'object' && typeof value.then === 'function') {
    // This is a wakeable. The component suspended.
    var wakeable = value;
    resetSuspendedComponent(sourceFiber);


    var suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber);

    if (suspenseBoundary !== null) {
      suspenseBoundary.flags &= ~ForceClientRender;
      markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes); // We only attach ping listeners in concurrent mode. Legacy Suspense always
      // commits fallbacks synchronously, so there are no pings.

      if (suspenseBoundary.mode & ConcurrentMode) {
        attachPingListener(root, wakeable, rootRenderLanes);
      }

      attachRetryListener(suspenseBoundary, root, wakeable);
      return;
    } else {
      // No boundary was found. Unless this is a sync update, this is OK.
      // We can suspend and wait for more data to arrive.
      if (!includesSyncLane(rootRenderLanes)) {
        // This is not a sync update. Suspend. Since we're not activating a
        // Suspense boundary, this will unwind all the way to the root without
        // performing a second pass to render a fallback. (This is arguably how
        // refresh transitions should work, too, since we're not going to commit
        // the fallbacks anyway.)
        //
        // This case also applies to initial hydration.
        attachPingListener(root, wakeable, rootRenderLanes);
        renderDidSuspendDelayIfPossible();
        return;
      } // This is a sync/discrete update. We treat this case like an error
      // because discrete renders are expected to produce a complete tree
      // synchronously to maintain consistency with external state.


      var uncaughtSuspenseError = new Error('A component suspended while responding to synchronous input. This ' + 'will cause the UI to be replaced with a loading indicator. To ' + 'fix, updates that suspend should be wrapped ' + 'with startTransition.'); // If we're outside a transition, fall through to the regular error path.
      // The error will be caught by the nearest suspense boundary.

      value = uncaughtSuspenseError;
    }
  } else {
    // This is a regular error, not a Suspense wakeable.
    if (getIsHydrating() && sourceFiber.mode & ConcurrentMode) {
      markDidSuspendWhileHydratingDEV();

      var _suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber); // If the error was thrown during hydration, we may be able to recover by
      // discarding the dehydrated content and switching to a client render.
      // Instead of surfacing the error, find the nearest Suspense boundary
      // and render it again without hydration.


      if (_suspenseBoundary !== null) {
        if ((_suspenseBoundary.flags & ShouldCapture) === NoFlags) {
          // Set a flag to indicate that we should try rendering the normal
          // children again, not the fallback.
          _suspenseBoundary.flags |= ForceClientRender;
        }

        markSuspenseBoundaryShouldCapture(_suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes); // Even though the user may not be affected by this error, we should
        // still log it so it can be fixed.

        queueHydrationError(value);
        return;
      }
    }
  } // We didn't find a boundary that could handle this type of exception. Start
  // over and traverse parent path again, this time treating the exception
  // as an error.


  renderDidError(value);
  value = createCapturedValue(value, sourceFiber);
  var workInProgress = returnFiber;

  do {
    switch (workInProgress.tag) {
      case HostRoot:
        {
          var _errorInfo = value;
          workInProgress.flags |= ShouldCapture;
          var lane = pickArbitraryLane(rootRenderLanes);
          workInProgress.lanes = mergeLanes(workInProgress.lanes, lane);
          var update = createRootErrorUpdate(workInProgress, _errorInfo, lane);
          enqueueCapturedUpdate(workInProgress, update);
          return;
        }

      case ClassComponent:
        // Capture and retry
        var errorInfo = value;
        var ctor = workInProgress.type;
        var instance = workInProgress.stateNode;

        if ((workInProgress.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === 'function' || instance !== null && typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance))) {
          workInProgress.flags |= ShouldCapture;

          var _lane = pickArbitraryLane(rootRenderLanes);

          workInProgress.lanes = mergeLanes(workInProgress.lanes, _lane); // Schedule the error boundary to re-render using updated state

          var _update = createClassErrorUpdate(workInProgress, errorInfo, _lane);

          enqueueCapturedUpdate(workInProgress, _update);
          return;
        }

        break;
    }

    workInProgress = workInProgress.return;
  } whinoogress.flags |= RefStatic;
  }
}

var appendAllChildren;
var updateHostContainer;
var updateHostComponent;
var updateHostText;

{
  // Mut  node = node.sibling;
   nt, workInProgress) {// Nopdate(workInProgress)pdat ildLanes;
  return didBailout;
}

function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps; // Note: This intentionally doesn't check if we're hydrating because comparing
  // to the current tree provider fiber is just as fast and less error-prone.
  // Ideally we would have a special version of the work loop only
  // for hydration.

  popTreeContext(workInProgress);

  switch (workInProgress.tag) {
    case IndeterminateComponent:
    case LazyComponent:
    case SimpleMemoComponent:
    case FunctionComponent:
    case ForwardRef:
    case Fragment:
    case Mode:
    case Profiler:
    case ContextConsumer:
    case MemoComponent:
      bubbleProperties(workInProgress);
      return null;

    case ClassComponent:
      {
        var Component = workInProgress.type;

        if (isContextProvider(Component)) {
          popContext(workInProgress);
        }

        bubbleProperties(workInProgress);
        return null;
      }

    case HostRoot:
      {
        var fiberRoot = workInProgress.stateNode;

        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        resetWorkInProgressVersions();

        if (fiberRoot.pendingContext) {
          fiberRoot.context = fiberRoot.pendingContext;
          fiberRoot.pendingContext = null;
        }

        if (current === null || current.child === null) {
          // If we hydrated, pop so that we can delete any remaining children
          // that weren't hydrated.
          var wasHydrated = popHydrationState(workInProgress);

          if (wasHydrated) {
            // If we hydrated, then we'll need to schedule an update for
            // the commit side-effects on the root.
            markUpdate(workInProgress);
          } else {
            if (current !== null) {
              var prevState = current.memoizedState;

              if ( // Check if this is a client root
              !prevState.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (workInProgress.flags & ForceClientRender) !== NoFlags) {
                // Schedule an effect to clear this container at the start of the
                // next commit. This handles the case of React rendering into a
                // container with previous children. It's also safe to do for
                // updates too, because current.child would only be null if the
                // previous render was null (so the container would already
                // be empty).
                workInProgress.flags |= Snapshot; // If this was a forced client render, there may have been
                // recoverable errors during first hydration attempt. If so, add
                // them to a queue so we can log them in the commit phase.

                upgradeHydrationErrorsToRecoverable();
              }
            }
          }
        }

        updateHostContainer(current, workInProgress);
        bubbleProperties(workInProgress);
        return null;
      }

    case HostComponent:
      {
        popHostContext(workInProgress);
        var rootContainerInstance = getRootHostContainer();
        var type = workInProgress.type;

        if (current !== null && workInProgress.stateNode != null) {
          updateHostComponent(current, workInProgress, type, newProps, rootContainerInstance);

          if (current.ref !== workInProgress.ref) {
            markRef(workInProgress);
          }
        } else {
          if (!newProps) {
            if (workInProgress.stateNode === null) {
              throw new Error('We must have new props for new mounts. This error is likely ' + 'caused by a bug in React. Please file an issue.');
            } // This can happen when we abort work.


            bubbleProperties(workInProgress);
            return null;
          }

          var currentHostContext = getHostContext(); // TODO: Move createInstance to beginWork and keep it on a context
          // "stack" as the parent. Then append children as we go in beginWork
          // or completeWork depending on whether we want to add them top->down or
          // bottom->up. Top->down is faster in IE11.

          var _wasHydrated = popHydrationState(workInProgress);

          if (_wasHydrated) {
            // TODO: Move this and createInstance step into the beginPhase
            // to consolidate.
            if (prepareToHydrateHostInstance(workInProgress, rootContainerInstance, currentHostContext)) {
              // If changes to the hydrated node need to be applied at the
              // commit-phase we mark this as such.
              markUpdate(workInProgress);
            }
          } else {
            var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress);
            appendAllChildren(instance, workInProgress, false, false);
            workInProgress.stateNode = instance; // Certain renderers require commit-time effects for initial mount.
            // (eg DOM renderer supports auto-focus for certain elements).
            // Make sure such renderers get scheduled for later work.

            if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance)) {
              markUpdate(workInProgress);
            }
          }

          if (workInProgress.ref !== null) {
            // If there is a ref on a host node we need to schedule a callback
            markRef(workInProgress);
          }
        }

        bubbleProperties(workInProgress);
        return null;
      }

    case HostText:
      {
        var newText = newProps;

        if (current && workInProgress.stateNode != null) {
          var oldText = current.memoizedProps; // If we have an alternate, that means this is an update and we need
          // to schedule a side-effect to do the updates.

          updateHostText(current, workInProgress, oldText, newText);
        } else {
          if (typeof newText !== 'string') {
            if (workInProgress.stateNode === null) {
              throw new Error('We must have new props for new mounts. This error is likely ' + 'caused by a bug in React. Please file an issue.');
            } // This can happen when we abort work.

          }

          var _rootContainerInstance = getRootHostContainer();

          var _currentHostContext = getHostContext();

          var _wasHydrated2 = popHydrationState(workInProgress);

          if (_wasHydrated2) {
            if (prepareToHydrateHostTextInstance(workInProgress)) {
              markUpdate(workInProgress);
            }
          } else {
            workInProgress.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress);
          }
        }

        bubbleProperties(workInProgress);
        return null;
      }

    case SuspenseComponent:
      {
        popSuspenseContext(workInProgress);
        var nextState = workInProgress.memoizedState;

        {
          if ( hasUnhydratedTailNodes() && (workInProgress.mode & ConcurrentMode) !== NoMode && (workInProgress.flags & DidCapture) === NoFlags) {
            warnIfUnhydratedTailNodes(workInProgress);
            resetHydrationState();
            workInProgress.flags |= ForceClientRender | Incomplete | ShouldCapture;
            return workInProgress;
          }

          if (nextState !== null && nextState.dehydrated !== null) {
            // We might be inside a hydration state the first time we're picking up this
            // Suspense boundary, and also after we've reentered it for further hydration.
            var _wasHydrated3 = popHydrationState(workInProgress);

            if (current === null) {
              if (!_wasHydrated3) {
                throw new Error('A dehydrated suspense component was completed without a hydrated node. ' + 'This is probably a bug in React.');
              }

              prepareToHydrateHostSuspenseInstance(workInProgress);
              bubbleProperties(workInProgress);

              {
                if ((workInProgress.mode & ProfileMode) !== NoMode) {
                  var isTimedOutSuspense = nextState !== null;

                  if (isTimedOutSuspense) {
                    // Don't count time spent in a timed out Suspense subtree as part of the base duration.
                    var primaryChildFragment = workInProgress.child;

                    if (primaryChildFragment !== null) {
                      // $FlowFixMe Flow doesn't support type casting in combination with the -= operator
                      workInProgress.treeBaseDuration -= primaryChildFragment.treeBaseDuration;
                    }
                  }
                }
              }

              return null;
            } else {
              // We might have reentered this boundary to hydrate it. If so, we need to reset the hydration
              // state since we're now exiting out of it. popHydrationState doesn't do that for us.
              resetHydrationState();

              if ((workInProgress.flags & DidCapture) === NoFlags) {
                // This boundary did not suspend so it's now hydrated and unsuspended.
                workInProgress.memoizedState = null;
              } // If nothing suspended, we need to schedule an effect to mark this boundary
              // as having hydrated so events know that they're free to be invoked.
              // It's also a signal to replay events and the suspense callback.
              // If something suspended, schedule an effect to attach retry listeners.
              // So we might as well always mark this.


              workInProgress.flags |= Update;
              bubbleProperties(workInProgress);

              {
                if ((workInProgress.mode & ProfileMode) !== NoMode) {
                  var _isTimedOutSuspense = nextState !== null;

                  if (_isTimedOutSuspense) {
                    // Don't count time spent in a timed out Suspense subtree as part of the base duration.
                    var _primaryChildFragment = workInProgress.child;

                    if (_primaryChildFragment !== null) {
                      // $FlowFixMe Flow doesn't support type casting in combination with the -= operator
                      workInProgress.treeBaseDuration -= _primaryChildFragment.treeBaseDuration;
                    }
                  }
                }
              }

              return null;
            }
          } // Successfully completed this tree. If this was a forced client render,
          // there may have been recoverable errors during first hydration
          // attempt. If so, add them to a queue so we can log them in the
          // commit phase.


          upgradeHydrationErrorsToRecoverable();
        }

        if ((workInProgress.flags & DidCapture) !== NoFlags) {
          // Something suspended. Re-render with the fallback children.
          workInProgress.lanes = renderLanes; // Do not reset the effect list.

          if ( (workInProgress.mode & ProfileMode) !== NoMode) {
            transferActualDuration(workInProgress);
          } // Don't bubble properties in this case.


          return workInProgress;
        }

        var nextDidTimeout = nextState !== null;
        var prevDidTimeout = false;

        if (current === null) {
          popHydrationState(workInProgress);
        } else {
          var _prevState = current.memoizedState;
          prevDidTimeout = _prevState !== null;
        }
        // an effect to toggle the subtree's visibility. When we switch from
        // fallback -> primary, the inner Offscreen fiber schedules this effect
        // as part of its normal complete phase. But when we switch from
        // primary -> fallback, the inner Offscreen fiber does not have a complete
        // phase. So we need to schedule its effect here.
        //
        // We also use this flag to connect/disconnect the effects, but the same
        // logic applies: when re-connecting, the Offscreen fiber's complete
        // phase will handle scheduling the effect. It's only when the fallback
        // is active that we have to do anything special.


        if (nextDidTimeout && !prevDidTimeout) {
          var _offscreenFiber = workInProgress.child;
          _offscreenFiber.flags |= Visibility; // TODO: This will still suspend a synchronous tree if anything
          // in the concurrent tree already suspended during this render.
          // This is a known bug.

          if ((workInProgress.mode & ConcurrentMode) !== NoMode) {
            // TODO: Move this back to throwException because this is too late
            // if this is a large tree which is common for initial loads. We
            // don't know if we should restart a render or not until we get
            // this marker, and this is too late.
            // If this render already had a ping or lower pri updates,
            // and this is the first time we know we're going to suspend we
            // should be able to immediately restart from within throwException.
            var hasInvisibleChildContext = current === null && (workInProgress.memoizedProps.unstable_avoidThisFallback !== true || !enableSuspenseAvoidThisFallback);

            if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) {
              // If this was in an invisible tree or a new render, then showing
              // this boundary is ok.
              renderDidSuspend();
            } else {
              // Otherwise, we're going to have to hide content so we should
              // suspend for longer if possible.
              renderDidSuspendDelayIfPossible();
            }
          }
        }

        var wakeables = workInProgress.updateQueue;

        if (wakeables !== null) {
          // Schedule an effect to attach a retry listener to the promise.
          // TODO: Move to passive phase
          workInProgress.flags |= Update;
        }

        bubbleProperties(workInProgress);

        {
          if ((workInProgress.mode & ProfileMode) !== NoMode) {
            if (nextDidTimeout) {
              // Don't count time spent in a timed out Suspense subtree as part of the base duration.
              var _primaryChildFragment2 = workInProgress.child;

              if (_primaryChildFragment2 !== null) {
                // $FlowFixMe Flow doesn't support type casting in combination with the -= operator
                workInProgress.treeBaseDuration -= _primaryChildFragment2.treeBaseDuration;
              }
            }
          }
        }

        return null;
      }

    case HostPortal:
      popHostContainer(workInProgress);
      updateHostContainer(current, workInProgress);

      if (current === null) {
        preparePortalMount(workInProgress.stateNode.containerInfo);
      }

      bubbleProperties(workInProgress);
      return null;

    case ContextProvider:
      // Pop provider fiber
      var context = workInProgress.type._context;
      popProvider(context, workInProgress);
      bubbleProperties(workInProgress);
      return null;

    case IncompleteClassComponent:
      {
        // Same as class component case. I put it down here so that the tags are
        // sequential to ensure this switch is compiled to a jump table.
        var _Component = workInProgress.type;

        if (isContextProvider(_Component)) {
          popContext(workInProgress);
        }

        bubbleProperties(workInProgress);
        return null;
      }

    case SuspenseListComponent:
      {
        popSuspenseContext(workInProgress);
        var renderState = workInProgress.memoizedState;

        if (renderState === null) {
          // We're running in the default, "independent" mode.
          // We don't do anything in this mode.
          bubbleProperties(workInProgress);
          return null;
        }

        var didSuspendAlready = (workInProgress.flags & DidCapture) !== NoFlags;
        var renderedTail = renderState.rendering;

        if (renderedTail === null) {
          // We just rendered the head.
          if (!didSuspendAlready) {
            // This is the first pass. We need to figure out if anything is still
            // suspended in the rendered set.
            // If new content unsuspended, but there's still some content that
            // didn't. Then we need to do a second pass that forces everything
            // to keep showing their fallbacks.
            // We might be suspended if something in this render pass suspended, or
            // something in the previous committed pass suspended. Otherwise,
            // there's no chance so we can skip the expensive call to
            // findFirstSuspended.
            var cannotBeSuspended = renderHasNotSuspendedYet() && (current === null || (current.flags & DidCapture) === NoFlags);

            if (!cannotBeSuspended) {
              var row = workInProgress.child;

              while (row !== null) {
                var suspended = findFirstSuspended(row);

                if (suspended !== null) {
                  didSuspendAlready = true;
                  workInProgress.flags |= DidCapture;
                  cutOffTailIfNeeded(renderState, false); // If this is a newly suspended tree, it might not get committed as
                  // part of the second pass. In that case nothing will subscribe to
                  // its thenables. Instead, we'll transfer its thenables to the
                  // SuspenseList so that it can retry if they resolve.
                  // There might be multiple of these in the list but since we're
                  // going to wait for all of them anyway, it doesn't really matter
                  // which ones gets to ping. In theory we could get clever and keep
                  // track of how many dependencies remain but it gets tricky because
                  // in the meantime, we can add/remove/change items and dependencies.
                  // We might bail out of the loop before finding any but that
                  // doesn't matter since that means that the other boundaries that
                  // we did find already has their listeners attached.

                  var newThenables = suspended.updateQueue;

                  if (newThenables !== null) {
                    workInProgress.updateQueue = newThenables;
                    workInProgress.flags |= Update;
                  } // Rerender the whole list, but this time, we'll force fallbacks
                  // to stay in place.
                  // Reset the effect flags before doing the second pass since that's now invalid.
                  // Reset the child fibers to their original state.


                  workInProgress.subtreeFlags = NoFlags;
                  resetChildFibers(workInProgress, renderLanes); // Set up the Suspense Context to force suspense and immediately
                  // rerender the children.

                  pushSuspenseContext(workInProgress, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback)); // Don't bubble properties in this case.

                  return workInProgress.child;
                }

                row = row.sibling;
              }
            }

            if (renderState.tail !== null && now() > getRenderTargetTime()) {
              // We have already passed our CPU deadline but we still have rows
              // left in the tail. We'll just give up further attempts to render
              // the main content and only render fallbacks.
              workInProgress.flags |= DidCapture;
              didSuspendAlready = true;
              cutOffTailIfNeeded(renderState, false); // Since nothing actually suspended, there will nothing to ping this
              // to get it started back up to attempt the next item. While in terms
              // of priority this work has the same priority as this current render,
              // it's not part of the same transition once the transition has
              // committed. If it's sync, we still want to yield so that it can be
              // painted. Conceptually, this is really the same as pinging.
              // We can use any RetryLane even if it's the one currently rendering
              // since we're leaving it behind on this node.

              workInProgress.lanes = SomeRetryLane;
            }
          } else {
            cutOffTailIfNeeded(renderState, false);
          } // Next we're going to render the tail.

        } else {
          // Append the rendered row to the child list.
          if (!didSuspendAlready) {
            var _suspended = findFirstSuspended(renderedTail);

            if (_suspended !== null) {
              workInProgress.flags |= DidCapture;
              didSuspendAlready = true; // Ensure we transfer the update queue to the parent so that it doesn't
              // get lost if this row ends up dropped during a second pass.

              var _newThenables = _suspended.updateQueue;

              if (_newThenables !== null) {
                workInProgress.updateQueue = _newThenables;
                workInProgress.flags |= Update;
              }

              cutOffTailIfNeeded(renderState, true); // This might have been modified.

              if (renderState.tail === null && renderState.tailMode === 'hidden' && !renderedTail.alternate && !getIsHydrating() // We don't cut it if we're hydrating.
              ) {
                  // We're done.
                  bubbleProperties(workInProgress);
                  return null;
                }
            } else if ( // The time it took to render last row is greater than the remaining
            // time we have to render. So rendering one more row would likely
            // exceed it.
            now() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes !== OffscreenLane) {
              // We have now passed our CPU deadline and we'll just give up further
              // attempts to render the main content and only render fallbacks.
              // The assumption is that this is usually faster.
              workInProgress.flags |= DidCapture;
              didSuspendAlready = true;
              cutOffTailIfNeeded(renderState, false); // Since nothing actually suspended, there will nothing to ping this
              // to get it started back up to attempt the next item. While in terms
              // of priority this work has the same priority as this current render,
              // it's not part of the same transition once the transition has
              // committed. If it's sync, we still want to yield so that it can be
              // painted. Conceptually, this is really the same as pinging.
              // We can use any RetryLane even if it's the one currently rendering
              // since we're leaving it behind on this node.

              workInProgress.lanes = SomeRetryLane;
            }
          }

          if (renderState.isBackwards) {
            // The effect list of the backwards tail will have been added
            // to the end. This breaks the guarantee that life-cycles fire in
            // sibling order but that isn't a strong guarantee promised by React.
            // Especially since these might also just pop in during future commits.
            // Append to the beginning of the list.
            renderedTail.sibling = workInProgress.child;
            workInProgress.child = renderedTail;
          } else {
            var previousSibling = renderState.last;

            if (previousSibling !== null) {
              previousSibling.sibling = renderedTail;
            } else {
              workInProgress.child = renderedTail;
            }

            renderState.last = renderedTail;
          }
        }

        if (renderState.tail !== null) {
          // We still have tail rows to render.
          // Pop a row.
          var next = renderState.tail;
          renderState.rendering = next;
          renderState.tail = next.sibling;
          renderState.renderingStartTime = now();
          next.sibling = null; // Restore the context.
          // TODO: We can probably just avoid popping it instead and only
          // setting it the first time we go from not suspended to suspended.

          var suspenseContext = suspenseStackCursor.current;

          if (didSuspendAlready) {
            suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
          } else {
            suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
          }

          pushSuspenseContext(workInProgress, suspenseContext); // Do a pass over the next row.
          // Don't bubble properties in this case.

          return next;
        }

        bubbleProperties(workInProgress);
        return null;
      }

    case ScopeComponent:
      {

        break;
      }

    case OffscreenComponent:
    case LegacyHiddenComponent:
      {
        popRenderLanes(workInProgress);
        var _nextState = workInProgress.memoizedState;
        var nextIsHidden = _nextState !== null;

        if (current !== null) {
          var _prevState2 = current.memoizedState;
          var prevIsHidden = _prevState2 !== null;

          if (prevIsHidden !== nextIsHidden && ( // LegacyHidden doesn't do any hiding — it only pre-renders.
          !enableLegacyHidden )) {
            workInProgress.flags |= Visibility;
          }
        }

        if (!nextIsHidden || (workInProgress.mode & ConcurrentMode) === NoMode) {
          bubbleProperties(workInProgress);
        } else {
          // Don't bubble properties for hidden children unless we're rendering
          // at offscreen priority.
          if (includesSomeLane(subtreeRenderLanes, OffscreenLane)) {
            bubbleProperties(workInProgress);

            {
              // Check if there was an insertion or update in the hidden subtree.
              // If so, we need to hide those nodes in the commit phase, so
              // schedule a visibility effect.
              if ( workInProgress.subtreeFlags & (Placement | Update)) {
                workInProgress.flags |= Visibility;
              }
            }
          }
        }

        return null;
      }

    case CacheComponent:
      {

        return null;
      }

    case TracingMarkerComponent:
      {

        return null;
      }
  }

  throw new Error("Unknown unit of work tag (" + workInProgress.tag + "). This error is likely caused by a bug in " + 'React. Please file an issue.');
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var didReceiveUpdate = false;
var didWarnAboutBadClass;
var didWarnAboutModulePatternComponent;
var didWarnAboutContextTypeOnFunctionComponent;
var didWarnAboutGetDerivedStateOnFunctionComponent;
var didWarnAboutFunctionRefs;
var didWarnAboutReassigningProps;
var didWarnAboutRevealOrder;
var didWarnAboutTailOptions;

{
  didWarnAboutBadClass = {};
  didWarnAboutModulePatternComponent = {};
  didWarnAboutContextTypeOnFunctionComponent = {};
  didWarnAboutGetDerivedStateOnFunctionComponent = {};
  didWarnAboutFunctionRefs = {};
  didWarnAboutReassigningProps = false;
  didWarnAboutRevealOrder = {};
 u;d = newChild;
  return newChild;
}

function updateSimpleMemoComponent(current, workInProgress, Component, nextProps, renderLanes) {
  // TODO: current can be non-null here even if the component
  // hasn't yet mounted. This happens when the inner render suspends.
  // We'll need to figure out if this is fine or can cause issues.
  {
    if (workInProgress.type !== workInProgress.elementType) {
      // Lazy component props can't be validated in createElement
      // because they're only guaranteed to be resolved here.
      var outerMemoType = workInProgress.elementType;

      if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
        // We warn when you define propTypes on lazy()
        // so let's just skip over it to find memo() outer wrapper.
        // Inner props for memo are validated later.
        var lazyComponent = outerMemoType;
        var payload = lazyComponent._payload;
        var init = lazyComponent._init;

        try {
          outerMemoType = init(payload);
        } catch (x) {
          outerMemoType = null;
        } // Inner propTypes will be validated in the function component path.


        var outerPropTypes = outerMemoType && outerMemoType.propTypes;

        if (outerPropTypes) {
          checkPropTypes(outerPropTypes, nextProps, // Resolved (SimpleMemoComponent has no defaultProps)
          'prop', getComponentNameFromType(outerMemoType));
        }
      }
    }
  }

  if (current !== null) {
    var prevProps = current.memoizedProps;

    if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress.ref && ( // Prevent bailout if the implementation changed due to hot reload.
     workInProgress.type === current.type )) {
      didReceiveUpdate = false;

      if (!checkScheduledUpdateOrContext(current, renderLanes)) {
        // The pending lanes were cleared at the beginning of beginWork. We're
        // about to bail out, but there might be other lanes that weren't
        // included in the current render. Usually, the priority level of the
        // remaining updates is accumulated during the evaluation of the
        // component (i.e. when processing the update queue). But since since
        // we're bailing out early *without* evaluating the component, we need
        // to account for it here, too. Reset to the value of the current fiber.
        // NOTE: This only applies to SimpleMemoComponent, not MemoComponent,
        // because a MemoComponent fiber does not have hooks or an update queue;
        // rather, it wraps around an inner component, which may or may not
        // contains hooks.
        // TODO: Move the reset at in beginWork out of the common path so that
        // this is no longer necessary.
        workInProgress.lanes = current.lanes;
        return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
      } else if ((current.flags & ForceUpdateForLegacySuspense) !== NoFlags) {
        // This is a special case that only exists for legacy mode.
        // See https://github.com/facebook/react/pull/19216.
        didReceiveUpdate = true;
      }
    }
  }

  return updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes);
}

function updateOffscreenComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps;
  var nextChildren = nextProps.children;
  var prevState = current !== null ? current.memoizedState : null;

  if (nextProps.mode === 'hidden' || enableLegacyHidden ) {
    // Rendering a hidden tree.
    if ((workInProgress.mode & ConcurrentMode) === NoMode) {
      // In legacy sync mode, don't defer the subtree. Render it now.
      var nextState = {
        baseLanes: NoLanes,
        cachePool: null
      };
      workInProgress.memoizedState = nextState;

      pushRenderLanes(workInProgress, renderLanes);
    } else if (!includesSomeLane(renderLanes, OffscreenLane)) {
      var spawnedCachePool = null; // We're hidden, and we're not rendering at Offscreen. We will bail out
      // and resume this tree later.

      var nextBaseLanes;

      if (prevState !== null) {
        var prevBaseLanes = prevState.baseLanes;
        nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes);
      } else {
        nextBaseLanes = renderLanes;
      } // Schedule this fiber to re-render at offscreen priority. Then bailout.


      workInProgress.lanes = workInProgress.childLanes = laneToLanes(OffscreenLane);
      var _nextState = {
        baseLanes: nextBaseLanes,
        cachePool: spawnedCachePool
      };
      workInProgress.memoizedState = _nextState;
      workInProgress.updateQueue = null;
      // to avoid a push/pop misalignment.


      pushRenderLanes(workInProgress, nextBaseLanes);

      return null;
    } else {
      // This is the second render. The surrounding visible content has already
      // committed. Now we resume rendering the hidden tree.
      // Rendering at offscreen, so we can clear the base lanes.
      var _nextState2 = {
        baseLanes: NoLanes,
        cachePool: null
      };
      workInProgress.memoizedState = _nextState2; // Push the lanes that were skipped when we bailed out.

      var subtreeRenderLanes = prevState !== null ? prevState.baseLanes : renderLanes;

      pushRenderLanes(workInProgress, subtreeRenderLanes);
    }
  } else {
    // Rendering a visible tree.
    var _subtreeRenderLanes;

    if (prevState !== null) {
      // We're going from hidden -> visible.
      _subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes);


      workInProgress.memoizedState = null;
    } else {
      // We weren't previously hidden, and we still aren't, so there's nothing
      // special to do. Need to push to the stack regardless, though, to avoid
      // a push/pop misalignment.
      _subtreeRenderLanes = renderLanes;
    }

    pushRenderLanes(workInProgress, _subtreeRenderLanes);
  }

  {
    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
    r;;;s;
  return workInProgress.child;
}

function updateClassComponent(current, workInProgress, Component, nextProps, renderLanes) {
  {
    // This is used by DevTools to force a boundary to error.
    switch (shouldError(workInProgress)) {
      case false:
        {
          var _instance = workInProgress.stateNode;
          var ctor = workInProgress.type; // TODO This way of resetting the error boundary state is a hack.
          // Is there a better way to do this?

          var tempInstance = new ctor(workInProgress.memoizedProps, _instance.context);
          var state = tempInstance.state;

          _instance.updater.enqueueSetState(_instance, state, null);

          break;
        }

      case true:
        {
          workInProgress.flags |= DidCapture;
          workInProgress.flags |= ShouldCapture; // eslint-disable-next-line react-internal/prod-error-codes

          var error$1 = new Error('Simulated error coming from DevTools');
          var lane = pickArbitraryLane(renderLanes);
          workInProgress.lanes = mergeLanes(workInProgress.lanes, lane); // Schedule the error boundary to re-render using updated state

          var update = createClassErrorUpdate(workInProgress, createCapturedValue(error$1, workInProgress), lane);
          enqueueCapturedUpdate(workInProgress, update);
          break;
        }
    }

    if (workInProgress.type !== workInProgress.elementType) {
      // Lazy component props can't be validated in createElement
      // because they're only guaranteed to be resolved here.
      var innerPropTypes = Component.propTypes;

      if (innerPropTypes) {
        checkPropTypes(innerPropTypes, nextProps, // Resolved props
        'prop', getComponentNameFromType(Component));
      }
    }
  } // Push context providers early to prevent context stack mismatches.
  // During mounting we don't know the child context yet as the instance doesn't exist.
  // We will invalidate the child context in finishClassComponent() right after rendering.


  var hasContext;

  if (isContextProvider(Component)) {
    hasContext = true;
    pushContextProvider(workInProgress);
  } else {
    hasContext = false;
  }

  prepareToReadContext(workInProgress, renderLanes);
  var instance = workInProgress.stateNode;
  var shouldUpdate;

  if (instance === null) {
    if (current !== null) {
      // A class component without an instance only mounts if it suspended
      // inside a non-concurrent tree, in an inconsistent state. We want to
      // treat it like a new mount, even though an empty version of it already
      // committed. Disconnect the alternate pointers.
      current.alternate = null;
      workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

      workInProgress.flags |= Placement;
    } // In the initial pass we might need to construct the instance.


    constructClassInstance(workInProgress, Component, nextProps);
    mountClassInstance(workInProgress, Component, nextProps, renderLanes);
    shouldUpdate = true;
  } else if (current === null) {
    // In a resume, we'll already have an instance we can reuse.
    shouldUpdate = resumeMountClassInstance(workInProgress, Component, nextProps, renderLanes);
  } else {
    shouldUpdate = updateClassInstance(current, workInProgress, Component, nextProps, renderLanes);
  }

  var nextUnitOfWork = finishClassComponent(current, workInProgress, Component, shouldUpdate, hasContext, renderLanes);

  {
    var inst = workInProgress.stateNode;

    if (shouldUpdate && inst.props !== nextProps) {
      if (!didWarnAboutReassigningProps) {
        error('It looks like %s is reassigning its own `this.props` while rendering. ' + 'This is not supported and can lead to confusing bugs.', getComponentNameFromFiber(workInProgress) || 'a component');
      }

      didWarnAboutReassigningProps = true;
    
InProgress, root.containerInfo);
}

function updateHostRoot(current, workInProgress, renderLanes) {
  pushHostRootContext(workInProgress);

  if (current === null) {
    throw new Error('Should have a current fiber. This is a bug in React.');
  }

  var nextProps = workInProgress.pendingProps;
  var prevState = workInProgress.memoizedState;
  var prevChildren = prevState.element;
  cloneUpdateQueue(current, workInProgress);
  processUpdateQueue(workInProgress, nextProps, null, renderLanes);
  var nextState = workInProgress.memoizedState;
  var root = workInProgress.stateNode;
  // being called "element".


  var nextChildren = nextState.element;

  if ( prevState.isDehydrated) {
    // This is a hydration root whose shell has not yet hydrated. We should
    // attempt to hydrate.
    // Flip isDehydrated to false to indicate that when this render
    // finishes, the root will no longer be dehydrated.
    var overrideState = {
      element: nextChildren,
      isDehydrated: false,
      cache: nextState.cache,
      transitions: nextState.transitions
    };
    var updateQueue = workInProgress.updateQueue; // `baseState` can always be the last state because the root doesn't
    // have reducer functions so it doesn't need rebasing.

    updateQueue.baseState = overrideState;
    workInProgress.memoizedState = overrideState;

    if (workInProgress.flags & ForceClientRender) {
      // Something errored during a previous attempt to hydrate the shell, so we
      // forced a client render.
      var recoverableError = new Error('There was an error while hydrating. Because the error happened outside ' + 'of a Suspense boundary, the entire root will switch to ' + 'client rendering.');
      return mountHostRootWithoutHydrating(current, workInProgress, nextChildren, renderLanes, recoverableError);
    } else if (nextChildren !== prevChildren) {
      var _recoverableError = new Error('This root received an early update, before anything was able ' + 'hydrate. Switched the entire root to client rendering.');

      return mountHostRootWithoutHydrating(current, workInProgress, nextChildren, renderLanes, _recoverableError);
    } else {
      // The outermost shell has not hydrated yet. Start hydrating.
      enterHydrationState(workInProgress);

      var child = mountChildFibers(workInProgress, null, nextChildren, renderLanes);
      workInProgress.child = child;
      var node = child;

      while (node) {
        // Mark each child as hydrating. This is a fast path to know whether this
        // tree is part of a hydrating tree. This is used to determine if a child
        // node has fully mounted yet, and for scheduling event replaying.
        // Conceptually this is similar to Placement in that a new subtree is
        // inserted into the React tree here. It just happens to not need DOM
        // mutations because it already exists.
        node.flags = node.flags & ~Placement | Hydrating;
        node = node.sibling;
      }
    }
  } else {
    // Root is not dehydrated. Either this is a client-only root, or it
    // already hydrated.
    resetHydrationState();

    if (nextChildren === prevChildren) {
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
    }

    reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  }
;;ediately after.


  return null;
}

function mountLazyComponent(_current, workInProgress, elementType, renderLanes) {
  if (_current !== null) {
    // A lazy component only mounts if it suspended inside a non-
    // concurrent tree, in an inconsistent state. We want to treat it like
    // a new mount, even though an empty version of it already committed.
    // Disconnect the alternate pointers.
    _current.alternate = null;
    workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

    workInProgress.flags |= Placement;
  }

  var props = workInProgress.pendingProps;
  var lazyComponent = elementType;
  var payload = lazyComponent._payload;
  var init = lazyComponent._init;
  var Component = init(payload); // Store the unwrapped component in the type.

  workInProgress.type = Component;
  var resolvedTag = workInProgress.tag = resolveLazyComponentTag(Component);
  var resolvedProps = resolveDefaultProps(Component, props);
  var child;

  switch (resolvedTag) {
    case FunctionComponent:
      {
        {
          validateFunctionComponentInDev(workInProgress, Component);
          workInProgress.type = Component = resolveFunctionForHotReloading(Component);
        }

        child = updateFunctionComponent(null, workInProgress, Component, resolvedProps, renderLanes);
        return child;
      }

    case ClassComponent:
      {
        {
          workInProgress.type = Component = resolveClassForHotReloading(Component);
        }

        child = updateClassComponent(null, workInProgress, Component, resolvedProps, renderLanes);
        return child;
      }

    case ForwardRef:
      {
        {
          workInProgress.type = Component = resolveForwardRefForHotReloading(Component);
        }

        child = updateForwardRef(null, workInProgress, Component, resolvedProps, renderLanes);
        return child;
      }

    case MemoComponent:
      {
        {
          if (workInProgress.type !== workInProgress.elementType) {
            var outerPropTypes = Component.propTypes;

            if (outerPropTypes) {
              checkPropTypes(outerPropTypes, resolvedProps, // Resolved for outer only
              'prop', getComponentNameFromType(Component));
            }
          }
        }

        child = updateMemoComponent(null, workInProgress, Component, resolveDefaultProps(Component.type, resolvedProps), // The inner type can have defaults too
        renderLanes);
        return child;
      }
  }

  var hint = '';

  {
    if (Component !== null && typeof Component === 'object' && Component.$$typeof === REACT_LAZY_TYPE) {
      hint = ' Did you wrap a component in React.lazy() more than once?';
    }
  } // This message intentionally doesn't mention ForwardRef or MemoComponent
  // because the fact that it's a separate type of work is an
  // implementation detail.


  throw new Error("Element type is invalid. Received a promise that resolves to: " + Component + ". " + ("Lazy element type must resolve to  true, hasContext, renderLanes);
}

function mountIndeterminateComponent(_current, workInProgress, Component, renderLanes) {
  if (_current !== null) {
    // An indeterminate component only mounts if it suspended inside a non-
    // concurrent tree, in an inconsistent state. We want to treat it like
    // a new mount, even though an empty version of it already committed.
    // Disconnect the alternate pointers.
    _current.alternate = null;
    workInProgress.alternate = null; // Since this is conceptually a new fiber, schedule a Placement effect

    workInProgress.flags |= Placement;
  }

  var props = workInProgress.pendingProps;
  var context;

  {
    var unmaskedContext = getUnmaskedContext(workInProgress, Component, false);
    context = getMaskedContext(workInProgress, unmaskedContext);
  }

  prepareToReadContext(workInProgress, renderLanes);
  var value;
  var hasId;

  {
    markComponentRenderStarted(workInProgress);
  }

  {
    if (Component.prototype && typeof Component.prototype.render === 'function') {
      var componentName = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutBadClass[componentName]) {
        error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', componentName, componentName);

        didWarnAboutBadClass[componentName] = true;
      }
    }

    if (workInProgress.mode & StrictLegacyMode) {
      ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress, null);
    }

    setIsRendering(true);
    ReactCurrentOwner$1.current = workInProgress;
    value = renderWithHooks(null, workInProgress, Component, props, context, renderLanes);
    hasId = checkDidRenderIdHook();
    setIsRendering(false);
  }

  {
    markComponentRenderStopped();
  } // React DevTools reads this flag.


  workInProgress.flags |= PerformedWork;

  {
    // Support for module components is deprecated and is removed behind a flag.
    // Whether or not it would crash later, we want to show a good message in DEV first.
    if (typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
      var _componentName = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutModulePatternComponent[_componentName]) {
        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName, _componentName, _componentName);

        didWarnAboutModulePatternComponent[_componentName] = true;
      }
    }
  }

  if ( // Run these checks in production only if the flag is off.
  // Eventually we'll delete this branch altogether.
   typeof value === 'object' && value !== null && typeof value.render === 'function' && value.$$typeof === undefined) {
    {
      var _componentName2 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutModulePatternComponent[_componentName2]) {
        error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName2, _componentName2, _componentName2);

        didWarnAboutModulePatternComponent[_componentName2] = true;
      }
    } // Proceed under the assumption that this is a class instance


    workInProgress.tag = ClassComponent; // Throw out any hooks that were used.

    workInProgress.memoizedState = null;
    workInProgress.updateQueue = null; // Push context providers early to prevent context stack mismatches.
    // During mounting we don't know the child context yet as the instance doesn't exist.
    // We will invalidate the child context in finishClassComponent() right after rendering.

    var hasContext = false;

    if (isContextProvider(Component)) {
      hasContext = true;
      pushContextProvider(workInProgress);
    } else {
      hasContext = false;
    }

    workInProgress.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;
    initializeUpdateQueue(workInProgress);
    adoptClassInstance(workInProgress, value);
    mountClassInstance(workInProgress, Component, props, renderLanes);
    return finishClassComponent(null, workInProgress, Component, true, hasContext, renderLanes);
  } else {
    // Proceed under the assumption that this is a function component
    workInProgress.tag = FunctionComponent;

    {

      if ( workInProgress.mode & StrictLegacyMode) {
        setIsStrictModeForDevtools(true);

        try {
          value = renderWithHooks(null, workInProgress, Component, props, context, renderLanes);
          hasId = checkDidRenderIdHook();
        } finally {
          setIsStrictModeForDevtools(false);
        }
      }
    }

    if (getIsHydrating() && hasId) {
      pushMaterializedTreeId(workInProgress);
    }

    reconcileChildren(null, workInProgress, value, renderLanes);

    {
      validateFunctionComponentInDev(workInProgress, Component);
    }

    return workInProgress.child;
  }
}

function validateFunctionComponentInDev(workInProgress, Component) {
  {
    if (Component) {
      if (Component.childContextTypes) {
        error('%s(...): childContextTypes cannot be defined on a function component.', Component.displayName || Component.name || 'Component');
      }
    }

    if (workInProgress.ref !== null) {
      var info = '';
      var ownerName = getCurrentFiberOwnerNameInDevOrNull();

      if (ownerName) {
        info += '\n\nCheck the render method of `' + ownerName + '`.';
      }

      var warningKey = ownerName || '';
      var debugSource = workInProgress._debugSource;

      if (debugSource) {
        warningKey = debugSource.fileName + ':' + debugSource.lineNumber;
      }

      if (!didWarnAboutFunctionRefs[warningKey]) {
        didWarnAboutFunctionRefs[warningKey] = true;

        error('Function components cannot be given refs. ' + 'Attempts to access this ref will fail. ' + 'Did you mean to use React.forwardRef()?%s', info);
      }
    }

    if (typeof Component.getDerivedStateFromProps === 'function') {
      var _componentName3 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
        error('%s: Function components do not support getDerivedStateFromProps.', _componentName3);

        didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
      }
    }

    if (typeof Component.contextType === 'object' && Component.contextType !== null) {
      var _componentName4 = getComponentNameFromType(Component) || 'Unknown';

      if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
        error('%s: Function components do not support contextType.', _componentName4);

        didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
      }
    }
  }
}

var SUSPENDED_MARKER = {
  dehydrated: null,
  treeConthePool: getSuspendedCache()
  };
}

function updateSuspenseOffscreenState(prevOffscreenState, renderLanes) {
  var cachePool = null;

  return {
    baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes),
    cachePool: cachePool
  };
} // TODO: Current.childLanes, renderLanes);
}

function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps; // This is used by DevTools to force a boundary to suspend.

  {
    if (shouldSuspend(workInProgress)) {
      workInProgress.flags |= DidCapture;
    }
  }

  var suspenseContext = suspenseStackCursor.current;
  var showFallback = false;
  var didSuspend = (workInProgress.flags & DidCapture) !== NoFlags;

  if (didSuspend || shouldRemainOnFallback(suspenseContext, current)) {
    // Something in this boundary's subtree already suspended. Switch to
    // rendering the fallback children.
    showFallback = true;
    workInProgress.flags &= ~DidCapture;
  } else {
    // Attempting the main content
    if (current === null || current.memoizedState !== null) {
      // This is a new mount or this boundary is already showing a fallback state.
      // Mark this subtree context as having at least one invisible parent that could
      // handle the fallback state.
      // Avoided boundaries are not considered since they cannot handle preferred fallback states.
      {
        suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
      }
    }
  }

  suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
  pushSuspenseContext(workInProgress, suspenseContext); // OK, the next part is confusing. We're about to reconcile the Suspense
  // boundary's children. This involves some custom reconciliation logic. Two
  // main reasons this is so complicated.
  //
  // First, Legacy Mode has different semantics for backwards compatibility. The
  // primary tree will commit in an inconsistent state, so when we do the
  // second pass to render the fallback, we do some exceedingly, uh, clever
  // hacks to make that not totally break. Like transferring effects and
  // deletions from hidden tree. In Concurrent Mode, it's much simpler,
  // because we bailout on the primary tree completely and leave it in its old
  // state, no effects. Same as what we do for Offscreen (except that
  // Offscreen doesn't have the first render pass).
  //
  // Second is hydration. During hydration, the Suspense fiber has a slightly
  // different layout, where the child points to a dehydrated fragment, which
  // contains the DOM rendered by the server.
  //
  // Third, even if you set all that aside, Suspense is like error boundaries in
  // that we first we try to render one tree, and if that fails, we render again
  // and switch to a different tree. Like a try/catch block. So we have to track
  // which branch we're currently rendering. Ideally we would model this using
  // a stack.

  if (current === null) {
    // Initial mount
    // If we're currently hydrating, try to hydrate this boundary.
    tryToClaimNextHydratableInstance(workInProgress); // This could've been a dehydrated suspense component.

    {
      var suspenseState = workInProgress.memoizedState;

      if (suspenseState !== null) {
        var dehydrated = suspenseState.dehydrated;

        if (dehydrated !== null) {
          return mountDehydratedSuspenseComponent(workInProgress, dehydrated);
        }
      }
    }

    var nextPrimaryChildren = nextProps.children;
    var nextFallbackChildren = nextProps.fallback;

    if (showFallback) {
      var fallbackFragment = mountSuspenseFallbackChildren(workInProgress, nextPrimaryChildren, nextFallbackChildren, renderLanes);
      var primaryChildFragment = workInProgress.child;
      primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes);
      workInProgress.memoizedState = SUSPENDED_MARKER;
      return fallbackFragment;
    } else {
      return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
    }
  } else {
    // This is an update.
    // If the current fiber has a SuspenseState, that means it's already showing
    // a fallback.
    var prevState = current.memoizedState;

    if (prevState !== null) {
      // The current tree is already showing a fallback
      // Special path for hydration
      {
        var _dehydrated = prevState.dehydrated;

        if (_dehydrated !== null) {
          if (!didSuspend) {
            return updateDehydratedSuspenseComponent(current, workInProgress, _dehydrated, prevState, renderLanes);
          } else if (workInProgress.flags & ForceClientRender) {
            // Something errored during hydration. Try again without hydrating.
            workInProgress.flags &= ~ForceClientRender;
            return retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes, new Error('There was an error while hydrating this Suspense boundary. ' + 'Switched to client rendering.'));
          } else if (workInProgress.memoizedState !== null) {
            // Something suspended and we should still be in dehydrated mode.
            // Leave the existing child in place.
            workInProgress.child = current.child; // The dehydrated completion pass expects this flag to be there
            // but the normal suspense pass doesn't.

            workInProgress.flags |= DidCapture;
            return null;
          } else {
            // Suspended but we should no longer be in dehydrated mode.
            // Therefore we now have to render the fallback.
            var _nextPrimaryChildren = nextProps.children;
            var _nextFallbackChildren = nextProps.fallback;
            var fallbackChildFragment = mountSuspenseFallbackAfterRetryWithoutHydrating(current, workInProgress, _nextPrimaryChildren, _nextFallbackChildren, renderLanes);
            var _primaryChildFragment2 = workInProgress.child;
            _primaryChildFragment2.memoizedState = mountSuspenseOffscreenState(renderLanes);
            workInProgress.memoizedState = SUSPENDED_MARKER;
            return fallbackChildFragment;
          }
        }
      }

      if (showFallback) {
        var _nextFallbackChildren2 = nextProps.fallback;
        var _nextPrimaryChildren2 = nextProps.children;

        var _fallbackChildFragment = updateSuspenseFallbackChildren(current, workInProgress, _nextPrimaryChildren2, _nextFallbackChildren2, renderLanes);

        var _primaryChildFragment3 = workInProgress.child;
        var prevOffscreenState = current.child.memoizedState;
        _primaryChildFragment3.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes);
        _primaryChildFragment3.childLanes = getRemainingWorkInPrimaryTree(current, renderLanes);
        workInProgress.memoizedState = SUSPENDED_MARKER;
        return _fallbackChildFragment;
      } else {
        var _nextPrimaryChildren3 = nextProps.children;

        var _primaryChildFragment4 = updateSuspensePrimaryChildren(current, workInProgress, _nextPrimaryChildren3, renderLanes);

        workInProgress.memoizedState = null;
        return _primaryChildFragment4;
      }
    } else {
      // The current tree is not already showing a fallback.
      if (showFallback) {
        // Timed out.
        var _nextFallbackChildren3 = nextProps.fallback;
        var _nextPrimaryChildren4 = nextProps.children;

        var _fallbackChildFragment2 = updateSuspenseFallbackChildren(current, workInProgress, _nextPrimaryChildren4, _nextFallbackChildren3, renderLanes);

        var _primaryChildFragment5 = workInProgress.child;
        var _prevOffscreenState = current.child.memoizedState;
        _primaryChildFragment5.memoizedState = _prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes) : updateSuspenseOffscreenState(_prevOffscreenState, renderLanes);
        _primaryChildFragment5.childLanes = getRemainingWorkInPrimaryTree(current, renderLanes); // Skip the primary children, and continue working on the
        // fallback children.

        workInProgress.memoizedState = SUSPENDED_MARKER;
        return _fallbackChildFragment2;
      } else {
        // Still haven't timed out. Continue rendering the children, like we
        // normally do.
        var _nextPrimaryChildren5 = nextProps.children;

        var _primaryChildFragment6 = updateSuspensePrimaryChildren(current, workInProgress, _nextPrimaryChildren5, renderLanes);

        workInProgress.memoizedState = null;
        return _primaryCh;
ro;
;
screenLane);
  }

  return null;
}

function updateDehydratedSuspenseComponent(current, workInProgress, suspenseInstance, suspenseState, renderLanes) {
  // We should never be hydrating at this point because it is the first pass,
  // but after we've already committed once.
  warnIfHydrating();

  if ((workInProgress.mode & ConcurrentMode) === NoMode) {
    return retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes, // TODO: When we delete legacy mode, we should make this error argument
    // required — every concurrent mode path that causes hydration to
    // de-opt to client rendering should have an error message.
    null);
  }

  if (isSuspenseInstanceFallback(suspenseInstance)) {
    // This boundary is in a permanent fallback state. In this case, we'll never
    // get an update and we'll never be able to hydrate the final content. Let's just try the
    // client side render instead.
    return retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes, // TODO: The server should serialize the error message so we can log it
    // here on the client. Or, in production, a hash/id that corresponds to
    // the error.
    new Error('The server could not finish this Suspense boundary, likely ' + 'due to an error during server rendering. Switched to ' + 'client rendering.'));
  }
  // any context has changed, we need to treat is as if the input might have changed.


  var hasContextChanged = includesSomeLane(renderLanes, current.childLanes);

  if (didReceiveUpdate || hasContextChanged) {
    // This boundary has changed since the first render. This means that we are now unable to
    // hydrate it. We might still be able to hydrate it using a higher priority lane.
    var root = getWorkInProgressRoot();

    if (root !== null) {
      var attemptHydrationAtLane = getBumpedLaneForHydration(root, renderLanes);

      if (attemptHydrationAtLane !== NoLane && attemptHydrationAtLane !== suspenseState.retryLane) {
        // Intentionally mutating since this render will get interrupted. This
        // is one of the very rare times where we mutate the current tree
        // during the render phase.
        suspenseState.retryLane = attemptHydrationAtLane; // TODO: Ideally this would inherit the event time of the current render

        var eventTime = NoTimestamp;
        scheduleUpdateOnFiber(current, attemptHydrationAtLane, eventTime);
      }
    } // If we have scheduled higher pri work above, this will probably just abort the render
    // since we now have higher priority work, but in case it doesn't, we need to prepare to
    // render something, if we time out. Even if that requires us to delete everything and
    // skip hydration.
    // Delay having to do this as long as the suspense timeout allows us.


    renderDidSuspendDelayIfPossible();
    return retrySuspenseComponentWithoutHydrating(current, workInProgress, renderLanes, new Error('This Suspense boundary received an update before it finished ' + 'hydrating. This caused the boundary to switch to client rendering. ' + 'The usual way to fix this is to wrap the original update ' + 'in startTransition.'));
  } else if (isSuspenseInstancePending(suspenseInstance)) {
    // This component is still pending more data from the server, so we can't hydrate its
    // content. We treat it as if this component suspended itself. It might seem as if
    // we could just try to render it client-side instead. However, this will perform a
    // lot of unnecessary work and is unlikely to complete since it often will suspend
    // on missing data anyway. Additionally, the server might be able to render more
    // than we can on the client yet. In that case we'd end up with more fallback states
    // on the client than if we just leave it alone. If the server times out or errors
    // these should update this boundary to the permanent Fallback state instead.
    // Mark it as having captured (i.e. suspended).
    workInProgress.flags |= DidCapture; // Leave the child in place. I.e. the dehydrated fragment.

    workInProgress.child = current.child; // Register a callback to retry this boundary once the server has sent the result.

    var retry = retryDehydratedSuspenseBoundary.bind(null, current);
    registerSuspenseInstanceRetry(suspenseInstance, retry);
    return null;
  } else {
    // This is the first attempt.
    reenterHydrationStateFromDehydratedSuspenseInstance(workInProgress, suspenseInstance, suspenseState.treeContext);
    var nextProps = workInProgress.pendingProps;
    var primaryChildren = nextProps.children;
    var primaryChildFragment = mountSuspensePrimaryChildren(workInProgress, primaryChildren); // Mark the children as hydrating. This is a fast path to know whether this
    // tree is part of a hydrating tree. This is used to determine if a child
    // node has fully mounted yet, and for scheduling event replaying.
    // Conceptually this is similar to Placement in that a new subtree is
    // inserted into the React tree here. It just happens to not need DOM
    // mutations because it already exists.

    primaryChildFragment.flags |= Hydrating;
   rti'snrnderState.tailMode = tailMode;
  }
} // This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phas  }

  return workInProgress.child;
}

var hasWarnedAboutUsingNos);
  return workInProgress.child;
}

var hasWarnedAsas
d lazily, we need

  return false;
}

function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress, renderLanes) {
  // This fiber does not have any pending work. Bailout without entering
  // the begin phase. There's still some bookkeeping we that needs to be done
  // in this optimized path, mostly pushing stuff onto the stack.
  switch (workInProgress.tag) {
    case HostRoot:
      pushHostRootContext(workInProgress);
      var root = workInProgress.stateNode;

      resetHydrationState();
      break;

    case HostComponent:
      pushHostContext(workInProgress);
      break;

    case ClassComponent:
      {
        var Component = workInProgress.type;

        if (isContextProvider(Component)) {
          pushContextProvider(workInProgress);
        }

        break;
      }

    case HostPortal:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;

    case ContextProvider:
      {
        var newValue = workInProgress.memoizedProps.value;
        var context = workInProgress.type._context;
        pushProvider(workInProgress, context, newValue);
        break;
      }

    case Profiler:
      {
        // Profiler should only call onRender when one of its descendants actually rendered.
        var hasChildWork = includesSomeLane(renderLanes, workInProgress.childLanes);

        if (hasChildWork) {
          workInProgress.flags |= Update;
        }

        {
          // Reset effect durations for the next eventual effect phase.
          // These are reset during render to allow the DevTools commit hook a chance to read them,
          var stateNode = workInProgress.stateNode;
          stateNode.effectDuration = 0;
          stateNode.passiveEffectDuration = 0;
        }
      }

      break;

    case SuspenseComponent:
      {
        var state = workInProgress.memoizedState;

        if (state !== null) {
          {
            if (state.dehydrated !== null) {
              pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current)); // We know that this component will suspend again because if it has
              // been unsuspended it has committed as a resolved Suspense component.
              // If it needs to be retried, it should have work scheduled on it.

              workInProgress.flags |= DidCapture; // We should never render the children of a dehydrated boundary until we
              // upgrade it. We return null instead of bailoutOnAlreadyFinishedWork.

              return null;
            }
          } // If this boundary is currently timed out, we need to decide
          // whether to retry the primary children, or to skip over it and
          // go straight to the fallback. Check the priority of the primary
          // child fragment.


          var primaryChildFragment = workInProgress.child;
          var primaryChildLanes = primaryChildFragment.childLanes;

          if (includesSomeLane(renderLanes, primaryChildLanes)) {
            // The primary children have pending work. Use the normal path
            // to attempt to render the primary children again.
            return updateSuspenseComponent(current, workInProgress, renderLanes);
          } else {
            // The primary child fragment does not have pending work marked
            // on it
            pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current)); // The primary children do not have pending work with sufficient
            // priority. Bailout.

            var child = bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);

            if (child !== null) {
              // The fallback children have pending work. Skip over the
              // primary children and work on the fallback.
              return child.sibling;
            } else {
              // Note: We can return `null` here because we already checked
              // whether there were nested context consumers, via the call to
              // `bailoutOnAlreadyFinishedWork` above.
              return null;
            }
          }
        } else {
          pushSuspenseContext(workInProgress, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
        }

        break;
      }

    case SuspenseListComponent:
      {
        var didSuspendBefore = (current.flags & DidCapture) !== NoFlags;

        var _hasChildWork = includesSomeLane(renderLanes, workInProgress.childLanes);

        if (didSuspendBefore) {
          if (_hasChildWork) {
            // If something was in fallback state last time, and we have all the
            // same children then we're still in progressive loading state.
            // Something might get unblocked by state updates or retries in the
            // tree which will affect the tail. So we need to use the normal
            // path to compute the correct tail.
            return updateSuspenseListComponent(current, workInProgress, renderLanes);
          } // If none of the children had any work, that means that none of
          // them got retried so they'll still be blocked in the same way
          // as before. We can fast bail out.


          workInProgress.flags |= DidCapture;
        } // If nothing suspended before and we're rendering the same children,
        // then the tail doesn't matter. Anything new that suspends will work
        // in the "together" mode, so we can continue from the state we had.


        var renderState = workInProgress.memoizedState;

        if (renderState !== null) {
          // Reset to the "together" mode in case we've started a different
          // update in the past but didn't complete it.
          renderState.rendering = null;
          renderState.tail = null;
          renderState.lastEffect = null;
        }

        pushSuspenseContext(workInProgress, suspenseStackCursor.current);

        if (_hasChildWork) {
          break;
        } else {
          // If none of the children had any work, that means that none of
          // them got retried so they'll still be blocked in the same way
          // as before. We can fast bail out.
          return null;
        }
      }

    case OffscreenComponent:
    case LegacyHiddenComponent:
      {
        // Need to check if the tree still needs to be deferred. This is
        // almost identical to the logic used in the normal update path,
        // so we'll just enter that. The only difference is we'll bail out
        // at the next level instead of this one, because the child props
        // have not changed. Which is fine.
        // TODO: Probably should refactor `beginWork` to split the bailout
        // path from the normal path. I'm tempted to do a labeled break here
        // but I won't :)
        workInProgress.lanes = NoLanes;
        return updateOffscreenComponent(current, workInProgress, renderLanes);
      }
  }

  return bailoutOnAlreadyFinishedWork(curre+ 'React. Please file an issue.');
}

function unwindWork(current, workInProgress, renderLanes) {
  // Note: This intentionally doesn't check if we're hydrating because comparing
  // to the current tree provider fiber is just as fast and less error-prone.
  // Ideally we would have a special version of the work loop only
  // for hydration.
  popTreeContext(workInProgress);

  switch (workInProgress.tag) {
    case ClassComponent:
      {
        var Component = workInProgress.type;

        if (isContextProvider(Component)) {
          popContext(workInProgress);
        }

        var flags = workInProgress.flags;

        if (flags & ShouldCapture) {
          workInProgress.flags = flags & ~ShouldCapture | DidCapture;

          if ( (workInProgress.mode & ProfileMode) !== NoMode) {
            transferActualDuration(workInProgress);
          }

          return workInProgress;
        }

        return null;
      }

    case HostRoot:
      {

        popHostContainer(workInProgress);
        popTopLevelContextObject(workInProgress);
        resetWorkInProgressVersions();
        var _flags = workInProgress.flags;

        if ((_flags & ShouldCapture) !== NoFlags && (_flags & DidCapture) === NoFlags) {
          // There was an error during render that wasn't captured by a suspense
          // boundary. Do a second pass on the root to unmount the children.
          workInProgress.flags = _flags & ~ShouldCapture | DidCapture;
          return workInProgress;
        } // We unwound to the root without completing it. Exit.


        return null;
      }

    case HostComponent:
      {
        // TODO: popHydrationState
        popHostContext(workInProgress);
        return null;
      }

    case SuspenseComponent:
      {
        popSuspenseContext(workInProgress);

        {
          var suspenseState = workInProgress.memoizedState;

          if (suspenseState !== null && suspenseState.dehydrated !== null) {
            if (workInProgress.alternate === null) {
              throw new Error('Threw in newly mounted dehydrated component. This is likely a bug in ' + 'React. Please file an issue.');
            }

            resetHydrationState();
          }
        }

        var _flags2 = workInProgress.flags;

        if (_flags2 & ShouldCapture) {
          workInProgress.flags = _flags2 & ~ShouldCapture | DidCapture; // Captured a suspense effect. Re-render the boundary.

          if ( (workInProgress.mode & ProfileMode) !== NoMode) {
            transferActualDuration(workInProgress);
          }

          return workInProgress;
        }

        return null;
      }

    case SuspenseListComponent:
      {
        popSuspenseContext(workInProgress); // SuspenseList doesn't actually catch anything. It should've been
        // caught by a nested boundary. If not, it should bubble through.

        return null;
      }

    case HostPortal:
      popHostContainer(workInProgress);
      return null;

    case ContextProvider:
      var context = workInProgress.type._context;
      popProvider(context, workInProgress);
      return null;

    case OffscreenComponent:
    case LegacyHiddenComponent:
      popRenderLanes(workInProgress);

      return null;

    case CacheComponent:

      return null;

    default:
      return null;
  }
}

function unwindInterruptedWork(current, interruptedWork, renderLanes) {
  // Note: This intentionally doesn't check if we're hydrating because comparing
  // to the current tree provider fiber is just as fast and less error-prone.
  // Ideally we would have a special version of the work loop only
  // for hydration.
  popTreeContext(interruptedWork);

  switch (interruptedWork.tag) {
    case ClassComponent:
      {
        var childContextTypes = interruptedWork.type.childContextTypes;

        if (childContextTypes !== null && childContextTypes !== undefined) {
          popContext(interruptedWork);
        }

        break;
      }

    case HostRoot:
      {

        popHostContainer(interruptedWork);
        popTopLevelContextObject(interruptedWork);
        resetWorkInProgressVersions();
        break;
      }

    case HostComponent:
      {
        popHostContext(interruptedWork);
        break;
      }

    case HostPortal:
      popHostContainer(interruptedWork);
      break;

    case SuspenseComponent:
      popSuspenseContext(interruptedWork);
      break;

    case SuspenseListComponent:
      popSuspenseContext(interruptedWork);
      break;

    case ContextProvider:
      var context = interruptedWork.type._context;
      popProvider(context, interruptedWork);
      break;

    case OffscreenComponent:
    case LegacyHiddenComponent:
      popRenderLanes(interruptedWork);

      break;
  }
}

var didWarnAboutUndefinedSnapshotBeforeUpdate = null;

{
  didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
} // Used during the commit phase to track the state of the Offscreen component stack.
// Allows us to avoid traversing the return path to find the nearest Offscreen ancestor.
// Only used when enableSuspenseLayoutEffectSemantics is enabled.


var offscreenSubtreeIsHidden = false;
var offscreenSubtreeWasHidden = false;
var PossiblyWeakSet = typeof WeakSet === 'function' ? WeakSet : Set;
var nextEffect = null; // Used for Profiling builds to track updaters.

var inProgressLanes   });
    clearCaughtError();
  }
}

var callComponentWillUnmountWithTimer = function (current, instance) {
  instance.props = current.memoizedProps;
  instance.state = current.memoizedState;

  if ( current.mode & ProfileMode) {
    try {
      startLayoutEffectTimer();
      instance.componentWillUnmount();
    } finally {
      recordLayoutEffectDuration(current);
    }
  } else {
    instance.componentWillUnmount();
  }
}; // Capture errors so they don't interrupt mounting.


function safelyCallCommitHookLayoutEffectListMount(current, nearestMountedAncestor) {
  try {
    commitHookEffectListMount(Layout, current);
  } catch (error) {
    reportUncaughtErrorInDEV(error);
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
} // Capture errors so they don't interrupt unmounting.


function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
  try {
    callComponentWillUnmountWithTimer(current, instance);
  } catch (error) {
    reportUncaughtErrorInDEV(error);
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
} // Capture errors so they don't interrupt mounting.


function safelyCallComponentDidMount(current, nearestMountedAncestor, instance) {
  try {
    instance.componentDidMount();
  } catch (error) {
    reportUncaughtErrorInDEV(error);
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
} // Capture errors so they don't interrupt mounting.


function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    commitAttachRef(current);
  } catch (error) {
    reportUncaughtErrorInDEV(error);
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}

function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref;

  if (ref !== null) {
    if (typeof ref === 'function') {
      var retVal;

      try {
        if (enableProfilerTimer && enableProfilerCommitHooks && current.mode & ProfileMode) {
          try {
            startLayoutEffectTimer();
            retVal = ref(null);
          } finally {
            recordLayoutEffectDuration(current);
          }
        } else {
          retVal = ref(null);
        }
      } catch (error) {
        reportUncaughtErrorInDEV(error);
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }

      {
        if (typeof retVal === 'function') {
          error('Unexpected return value from a callback ref in %s. ' + 'A callback ref should not return a function.', getComponentNameFromFiber(current));
        }
      }
    } else {
      ref.current = null;
    }
  }
}

function safelyCallDestroy(current, nearestMountedAncestor, destroy) {
  try {
    destroy();
  } catch (error) {
    reportUncaughtErrorInDEV(error);
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}

var focusedInstanceHandle = null;
var shouldandle = null;
  return shouldFire;
}

function commitBeforeMutationEffects_begin() {
  while (nextEffect !== null) {
    var fiber = nextEffect; // This phase is only used for beforeActiveInstanceBlur.

    var child = fiber.child;

    if ((fiber.subtreeFlags & BeforeMutationMask) !== NoFlags && child !== null) {
      ensureCorrectReturnPointer(child, fiber);
      nextEffect = child;
    } else {
      commitBeforeMutationEffects_complete();
    }
  }
}

function commitBeforeMutationEffects_complete() {
  while (nextEffect !== null) {
    var fiber = nextEffect;
    setCurrentFiber(fiber);

    try {
      commitBeforeMutationEffectsOnFiber(fiber);
    } catch (error) {
      reportUncaughtErrorInDEV(error);
      captureCommitPhaseError(fiber, fiber.return, error);
    }

    resetCurrentFiber();
    var sibling = fiber.sibling;

    if (sibling !== null) {
      ensureCorrectReturnPointer(sibling, fiber.return);
      nextEffect = sibling;
      return;
    }

    }

    resetCurrentFiber();
  }
}

function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor) {
  var updateQueue = finishedWork.updateQueue;
  var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

  if (lastEffect !== null) {
    var firstEffect = lastEffect.next;
    var effect = firstEffect;

    do {
      if ((effect.tag & flags) === flags) {
        // Unmount
        var destroy = effect.destroy;
        effect.destroy = undefined;

        if (destroy !== undefined) {
          {
            if ((flags & Passive$1) !== NoFlags$1) {
              markComponentPassiveEffectUnmountStarted(finishedWork);
            } else if ((flags & Layout) !== NoFlags$1) {
              markComponentLayoutEffectUnmountStarted(finishedWork);
            }
          }

          safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy);

          {
            if ((flags & Passive$1) !== NoFlags$1) {
              markComponentPassiveEffectUnmountStopped();
            } else if ((flags & Layout) !== NoFlags$1) {
              markComponentLayoutEffectUnmountStopped();
            }
          }
        }
      }

      effect = effect.next;
    } while (effect !== firstEffect);
  }
}

function commitHookEffectListMount(flags, finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;

  if (lastEffect !== null) {
    var firstEffect = lastEffect.next;
    var effect = firstEffect;

    do {
      if ((effect.tag & flags) === flags) {
        {
          if ((flags & Passive$1) !== NoFlags$1) {
            markComponentPassiveEffectMountStarted(finishedWork);
          } else if ((flags & Layout) !== NoFlags$1) {
            markComponentLayoutEffectMountStarted(finishedWork);
          }
        } // Mount


        var create = effect.create;
        effect.destroy = create();

        {
          if ((flags & Passive$1) !== NoFlags$1) {
            markComponentPassiveEffectMountStopped();
          } else if ((flags & Layout) !== NoFlags$1) {
            markComponentLayoutEffectMountStopped();
          }
        }

        {
          var destroy = effect.destroy;

          if (destroy !== undefined && typeof destroy !== 'function') {
            var hookName = void 0;

            if ((effect.tag & Layout) !== NoFlags) {
              hookName = 'useLayoutEffect';
            } else if ((effect.tag & Insertion) !== NoFlags) {
              hookName = 'useInsertionEffect';
            } else {
              hookName = 'useEffect';
            }

            var addendum = void 0;

            if (destroy === null) {
              addendum = ' You returned null. If your effect does not require clean ' + 'up, return undefined (or nothing).';
            } else if (typeof destroy.then === 'function') {
              addendum = '\n\nIt looks like you wrote ' + hookName + '(async () => ...) or returned a Promise. ' + 'Instead, write the async function inside your effect ' + 'and call it immediately:\n\n' + hookName + '(() => {\n' + '  async function fetchData() {\n' + '    // You can await here\n' + '    const response = await MyAPI.getData(someId);\n' + '    // ...\n' + '  }\n' + '  fetchData();\n' + "}, [someId]); // Or [] if effect doesn't need props or state\n\n" + 'Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching';
            } else {
              addendum = ' You returned: ' + destroy;
            }

            error('%s must not return anything besides a function, ' + 'which is used for clean-up.%s', hookName, addendum);
          }
        }
      }

      effect = effect.next;
    } wheak;
          }
      }
    }
  }
}

function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork, committedLanes) {
  if ((finishedWork.flags & LayoutMask) !== NoFlags) {
    switch (finishedWork.tag) {
      case FunctionComponent:
      case ForwardRef:
      case SimpleMemoComponent:
        {
          if ( !offscreenSubtreeWasHidden) {
            // At this point layout effects have already been destroyed (during mutation phase).
            // This is done to prevent sibling component effects from interfering with each other,
            // e.g. a destroy function in one component should never override a ref set
            // by a create function in another component during the same commit.
            if ( finishedWork.mode & ProfileMode) {
              try {
                startLayoutEffectTimer();
                commitHookEffectListMount(Layout | HasEffect, finishedWork);
              } finally {
                recordLayoutEffectDuration(finishedWork);
              }
            } else {
              commitHookEffectListMount(Layout | HasEffect, finishedWork);
            }
          }

          break;
        }

      case ClassComponent:
        {
          var instance = finishedWork.stateNode;

          if (finishedWork.flags & Update) {
            if (!offscreenSubtreeWasHidden) {
              if (current === null) {
                // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.
                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    if (instance.props !== finishedWork.memoizedProps) {
                      error('Expected %s props to match memoized props before ' + 'componentDidMount. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentNameFromFiber(finishedWork) || 'instance');
                    }

                    if (instance.state !== finishedWork.memoizedState) {
                      error('Expected %s state to match memoized state before ' + 'componentDidMount. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.state`. ' + 'Please file an issue.', getComponentNameFromFiber(finishedWork) || 'instance');
                    }
                  }
                }

                if ( finishedWork.mode & ProfileMode) {
                  try {
                    startLayoutEffectTimer();
                    instance.componentDidMount();
                  } finally {
                    recordLayoutEffectDuration(finishedWork);
                  }
                } else {
                  instance.componentDidMount();
                }
              } else {
                var prevProps = finishedWork.elementType === finishedWork.type ? current.memoizedProps : resolveDefaultProps(finishedWork.type, current.memoizedProps);
                var prevState = current.memoizedState; // We could update instance props and state here,
                // but instead we rely on them being set during last render.
                // TODO: revisit this when we implement resuming.

                {
                  if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                    if (instance.props !== finishedWork.memoizedProps) {
                      error('Expected %s props to match memoized props before ' + 'componentDidUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentNameFromFiber(finishedWork) || 'instance');
                    }

                    if (instance.state !== finishedWork.memoizedState) {
                      error('Expected %s state to match memoized state before ' + 'componentDidUpdate. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.state`. ' + 'Please file an issue.', getComponentNameFromFiber(finishedWork) || 'instance');
                    }
                  }
                }

                if ( finishedWork.mode & ProfileMode) {
                  try {
                    startLayoutEffectTimer();
                    instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    recordLayoutEffectDuration(finishedWork);
                  }
                } else {
                  instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
                }
              }
            }
          } // TODO: I think this is now always non-null by the time it reaches the
          // commit phase. Consider removing the type check.


          var updateQueue = finishedWork.updateQueue;

          if (updateQueue !== null) {
            {
              if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
                if (instance.props !== finishedWork.memoizedProps) {
                  error('Expected %s props to match memoized props before ' + 'processing the update queue. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.props`. ' + 'Please file an issue.', getComponentNameFromFiber(finishedWork) || 'instance');
                }

                if (instance.state !== finishedWork.memoizedState) {
                  error('Expected %s state to match memoized state before ' + 'processing the update queue. ' + 'This might either be because of a bug in React, or because ' + 'a component reassigns its own `this.state`. ' + 'Please file an issue.', getComponentNameFromFiber(finishedWork) || 'instance');
                }
              }
            } // We could update instance props and state here,
            // but instead we rely on them being set during last render.
            // TODO: revisit this when we implement resuming.


            commitUpdateQueue(finishedWork, updateQueue, instance);
          }

          break;
        }

      case HostRoot:
        {
          // TODO: I think this is now always non-null by the time it reaches the
          // commit phase. Consider removing the type check.
          var _updateQueue = finishedWork.updateQueue;

          if (_updateQueue !== null) {
            var _instance = null;

            if (finishedWork.child !== null) {
              switch (finishedWork.child.tag) {
                case HostComponent:
                  _instance = getPublicInstance(finishedWork.child.stateNode);
                  break;

                case ClassComponent:
                  _instance = finishedWork.child.stateNode;
                  break;
              }
            }

            commitUpdateQueue(finishedWork, _updateQueue, _instance);
          }

          break;
        }

      case HostComponent:
        {
          var _instance2 = finishedWork.stateNode; // Renderers may schedule work to be done after host components are mounted
          // (eg DOM renderer may schedule auto-focus for inputs and form controls).
          // These effects should only be committed when components are first mounted,
          // aka when there is no current/alternate.

          if (current === null && finishedWork.flags & Update) {
            var type = finishedWork.type;
            var props = finishedWork.memoizedProps;
            commitMount(_instance2, type, props);
          }

          break;
        }

      case HostText:
        {
          // We have no life-cycles associated with text.
          break;
        }

      case HostPortal:
        {
          // We have no life-cycles associated with portals.
          break;
        }

      case Profiler:
        {
          {
            var _finishedWork$memoize2 = finishedWork.memoizedProps,
                onCommit = _finishedWork$memoize2.onCommit,
                onRender = _finishedWork$memoize2.onRender;
            var effectDuration = finishedWork.stateNode.effectDuration;
            var commitTime = getCommitTime();
            var phase = current === null ? 'mount' : 'update';

            {
              if (isCurrentUpdateNested()) {
                phase = 'nested-update';
              }
            }

            if (typeof onRender === 'function') {
              onRender(finishedWork.memoizedProps.id, phase, finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime);
            }

            {
              if (typeof onCommit === 'function') {
                onCommit(finishedWork.memoizedProps.id, phase, effectDuration, commitTime);
              } // Schedule a passive effect for this Profiler to call onPostCommit hooks.
              // This effect should be scheduled even if there is no onPostCommit callback for this Profiler,
              // because the effect is also where times bubble to parent Profilers.


              enqueuePendingPassiveProfilerEffect(finishedWork); // Propagate layout effect durations to the next nearest Profiler ancestor.
              // Do not reset these values until the next render so DevTools has a chance to read them first.

              var parentFiber = finishedWork.return;

              outer: while (parentFiber !== null) {
                switch (parentFiber.tag) {
                  case HostRoot:
                    var root = parentFiber.stateNode;
                    root.effectDuration += effectDuration;
                    break outer;

                  case Profiler:
                    var parentStateNode = parentFiber.stateNode;
                    parentStateNode.effectDuration += effectDuration;
                    break outer;
                }

                parentFiber = parentFiber.return;
              }
            }
          }

          break;
        }

      case SuspenseComponent:
        {
          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
          break;
        }

      case SuspenseListComponent:
      case IncompleteClassComponent:
      case ScopeComponent:
      case OffscreenComponent:
      case LegacyHiddenComponent:
        {
          break;
        }

      default:
        throw new Error('This unit of work tag should not have side-effects. This error is ' + 'likely caused by a bug in React. Please file an issue.');
    }
  }

  if ( !offscreenSubtreeWasHidden) {
    {
      if (finishedWork.flags & Ref) {
        commitAttachRefeturn);
        break;
      }
  }
}

function hideOrUnhideAllChildren(finishedWork, isHidden) {
  // Only hide or unhide the top-most host nodes.
  var hostSubtreeRoot = null;

  {
    // We only have the top Fiber that was inserted but we need to recurse down its
    // children to find all the terminal nodes.
    var node = finishedWork;

    while (true) {
      if (node.tag === HostComponent) {
        if (hostSubtreeRoot === null) {
          hostSubtreeRoot = node;
          var instance = node.stateNode;

          if (isHidden) {
            hideInstance(instance);
          } else {
            unhideInstance(node.stateNode, node.memoizedProps);
          }
        }
      } else if (node.tag === HostText) {
        if (hostSubtreeRoot === null) {
          var _instance3 = node.stateNode;

          if (isHidden) {
            hideTextInstance(_instance3);
          } else {
            unhideTextInstance(_instance3, node.memoizedProps);
          }
        }
      } else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork) ; else if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === finishedWork) {
        return;
      }

      while (node.sibling === null) {
        if (node.return === null || node.return === finishedWork) {
          return;
        }

        if (hostSubtreeRoot === node) {
          hostSubtreeRoot = null;
        }

        node = node.return;
      }

      if (hostSubtreeRoot === node) {
        hostSubtreeRoot = null;
      }

      node.sibling.return = node.return;
   current = instanceToUse;
    }
  }
}

function commitDetachRef(current) {
  var currentRef = current.ref;

  if (currentRef !== null) {
    if (typeof currentRef === 'function') {
      if ( current.mode & ProfileMode) {
        try {
          startLayoutEffectTimer();
          currentRef(null);
        } finally {
          recordLayoutEffectDuration(current);
        }
      } else {
        currentRef(null);
      }
    } else {
      currentRef.current = null;
    }
  }
} // User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay


function commitUnmount(finishedRoot, current, nearestMountedAncestor) {
  onCommitUnmount(current);

  switch (current.tag) {
    case FunctionComponent:
    case ForwardRef:
    case MemoComponent:
    case SimpleMemoComponent:
      {
        var updateQueue = current.updateQueue;

        if (updateQueue !== null) {
          var lastEffect = updateQueue.lastEffect;

          if (lastEffect !== null) {
            var firstEffect = lastEffect.next;
            var effect = firstEffect;

            do {
              var _effect = effect,
                  destroy = _effect.destroy,
                  tag = _effect.tag;

              if (destroy !== undefined) {
                if ((tag & Insertion) !== NoFlags$1) {
                  safelyCallDestroy(current, nearestMountedAncestor, destroy);
                } else if ((tag & Layout) !== NoFlags$1) {
                  {
                    markComponentLayoutEffectUnmountStarted(current);
                  }

                  if ( current.mode & ProfileMode) {
                    startLayoutEffectTimer();
                    safelyCallDestroy(current, nearestMountedAncestor, destroy);
                    recordLayoutEffectDuration(current);
                  } else {
                    safelyCallDestroy(current, nearestMountedAncestor, destroy);
                  }

                  {
                    markComponentLayoutEffectUnmountStopped();
                  }
                }
              }

              effect = effect.next;
            } while (effect !== firstEffect);
          }
        }

        return;
      }

    case ClassComponent:
      {
        safelyDetachRef(current, nearestMountedAncestor);
        var instance = current.stateNode;

        if (typeof instance.componentWillUnmount === 'function') {
          safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance);
        }

        return;
      }

    case HostComponent:
      {
        safelyDetachRef(current, nearestMountedAncestor);
        return;
      }

    case HostPortal:
      {
        // TODO: this is recursive.
        // We are also not using this parent because
        // the portal will get pushed immediately.
        {
          unmountHostComponents(finishedRoot, current, nearestMountedAncestor);
        }

        return;
      }

    case DehydratedFragment:
      {

        return;
      }

    case ScopeComponent:
      {

        return;
      }
  }
}

function commitNestedUnmounts(finishedRoot, root, nearestMountedAncestor) {
  // While we're inside a removed host node we don't want to call
  // removeChild on the inner nodes because they're removed by the top
  // call anyway. We also want to call componentWillUnmount on all
  // composites before this host node is removed from the tree. Therefore
  // we do an inner loop while we're still inside the host node.
  var node = root;

  while (true) {
    commitUnmount(finishedRoot, node, nearestMountedAncestor); // Visit children because they may contain more composite or host nodes.
    // Skip portals because commitUnmount() currently visits them recursively.

    if (node.child !== null && ( // If we use mutation we drill down into portals using commitUnmount above.
    // If we don't use mutation we drill down into portals here instead.
     node.tag !== HostPortal)) {
      node.child.return = node;
      node = node.child;
      continue;
    }

    if (node === root) {
      return;
    }

    while (node.sibling === null) {
      if (node.return === null || node.return === root) {
        return;
      }

      node = node.return;
    }

    node.sibling.return = node.ret   o  React. Please file an issue.');
  }
}

function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  var isHost = tag === HostComponent || tag === HostText;

  if (isHost) {
    var stateNode = node.stateNode;

    if (before) {
      insertInContainerBefore(parent, stateNode, before);
    } else {
      appendChildToContainer(parent, stateNode);
    }
  } else if (tag === HostPortal) ; else {
    var child = node.child;

    if (child !== null) {
      insertOrAppendPlacementNodeIntoContainer(child, before, parent);
      var sibling = child.sibling;

      while (sibling !== null) {
        insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
        sibling == sibling.sibling;
      }
    }
  }
}

function unmountHostComponents(finishedRoot, current, nearestMountedAncestor) {
  // We only have the top Fiber that was deleted but we need to recurse down its
  // children to find all the terminal nodes.
  var node = current; // Each iteration, currentParent is populated with node's host parent if not
  // currentParentIsValid.

  var currentParentIsValid = false; // Note: these two variables *must* always be updated together.

  var currentParent;
  var currentParentIsContainer;

  while (true) {
    if (!currentParentIsValid) {
      var parent = node.return;

      findParent: while (true) {
        if (parent === null) {
          throw new Error('Expected to find a host parent. This error is likely caused by ' + 'a bug in React. Please file an issue.');
        }

        var parentStateNode = parent.stateNode;

        switch (parent.tag) {
          case HostComponent:
            currentParent = parentStateNode;
            currentParentIsContainer = false;
            break findParent;

          case HostRoot:
            currentParent = parentStateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;

          case HostPortal:
            currentParent = parentStateNode.containerInfo;
            currentParentIsContainer = true;
            break findParent;
        }

        parent = parent.return;
      }

      currentParentIsValid = true;
    }

    if (node.tag === HostComponent || node.tag === HostText) {
      commitNestedUnmounts(finishedRoot, node, nearestMountedAncestor); // After all the children have unmounted, it is now safe to remove the
      // node from the tree.

      if (currentParentIsContainer) {
        removeChildFromContainer(currentParent, node.stateNode);
      } else {
        removeChild(currentParent, node.stateNode);
      } // Don't visit children because we already visited them.

    } else if ( node.tag === DehydratedFragment) {


      if (currentParentIsContainer) {
        clearSuspenseBoundaryFromContainer(currentParent, node.stateNode);
      } else {
        clearSuspenseBoundary(currentParent, node.stateNode);
      }
    } else if (node.tag === HostPortal) {
      if (node.child !== null) {
        // When we go into a portal, it becomes the parent to remove from.
        // We will reassign it back when we pop the portal on the way up.
        currentParent = node.stateNode.containerInfo;
        currentParentIsContainer = true; // Visit children because portals might contain host components.

        node.child.return = node;
        node = node.child;
        continue;
      }
    } else {
      commitUnmount(finishedRoot, node, nearestMountedAncestor); // Visit children because we may find more host components below.

      if (node.child !== null) {
        node.child.return = node;
        node = node.child;
        continue;
      }
    }

    if (node === current) {
      return;
    }

    while (node.sibling === null) {
      if (node.return === null || node.return === current) {
        return;
      }

      node = node.return;

      if (node.tag === HostPortal) {
        // When we go out of the portal, we need to restore the parent.
        // Since we don't keep a stack of them, we will search for it.
        currentParentIsValid = false;
      }
    }

    node.sibling.return = node.return;
    node = node.sibling;
  }
}

function commitDeletion(finishedRoot, current, nearestMountedAncestor) {
  {
    // Recursively delete all host nodes from the parent.
    // Detach refs and call componentWillUnmount() on the whole subtree.
    unmountHostComponents(finishedRoot, current, nearestMountedAncestor);
  }

  detachFiberMutation(current);
}

function commitWork(current, finishedWork) {

  switch (finishedWork.tag) {
    case FunctionComponent:
    case ForwardRef:
    case MemoComponent:
    case SimpleMemoComponent:
      {
        commitHookEffectListUnmount(Insertion | HasEffect, finishedWork, finishedWork.return);
        commitHookEffectListMount(Insertion | HasEffect, finishedWork); // Layout effects are destroyed during the mutation phase so that all
        // destroy functions for all fibers are called before any create functions.
        // This prevents sibling component effects from interfering with each other,
        // e.g. a destroy function in one component should never override a ref set
        // by a create function in another component during the same commit.

        if ( finishedWork.mode & ProfileMode) {
          try {
            startLayoutEffectTimer();
            commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
          } finally {
            recordLayoutEffectDuration(finishedWork);
          }
        } else {
          commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
        }

        return;
      }

    case ClassComponent:
      {
        return;
      }

    case HostComponent:
      {
        var instance = finishedWork.stateNode;

        if (instance != null) {
          // Commit the work prepared earlier.
          var newProps = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
          // as the newProps. The updatePayload will contain the real change in
          // this case.

          var oldProps = current !== null ? current.memoizedProps : newProps;
          var type = finishedWork.type; // TODO: Type the updateQueue to be specific to host components.

          var updatePayload = finishedWork.updateQueue;
          finishedWork.updateQueue = null;

          if (updatePayload !== null) {
            commitUpdate(instance, updatePayload, type, oldProps, newProps);
          }
        }

        return;
      }

    case HostText:
      {
        if (finishedWork.stateNode === null) {
          throw new Error('This should have a text node initialized. This error is likely ' + 'caused by a bug in React. Please file an issue.');
        }

        var textInstance = finishedWork.stateNode;
        var newText = finishedWork.memoizedProps; // For hydration we reuse the update path but we treat the oldProps
        // as the newProps. The updatePayload will contain the real change in
        // this case.

        var oldText = current !== null ? current.memoizedProps : newText;
        commitTextUpdate(textInstance, oldText, newText);
        return;
      }

    case HostRoot:
      {
        {
          if (current !== null) {
            var _prevRootState = current.memoizedState;

            if (_prevRootState.isDehydrated) {
              var _root = finishedWork.stateNode;
              commitHydratedContainer(_root.containerInfo);
            }
          }
        }

        return;
      }

    case Profiler:
      {
        return;
      }

    case SuspenseComponent:
      {
        commitSuspenseCallback(finishedWork);
        attachSuspenseRetryListeners(finishedWork);
        return;
      }

    case SuspenseListComponent:
      {
        attachSuspenseRetryListeners(finishedWork);
        return;
      }

    case IncompleteClassComponent:
      {
        return;
      }
  }

  throw new Error('This unit of work tag should not have side-effects. This error is ' + 'likely caused by a bugwsn(retry, retry);
      }
    });
  }
} // This function detects when a Suspense resetTextContent(current.stateNode);
}

function commitMutationEffects(root, firstChild, committedLanes) {
  inProgressLanes = committedLanes;
  inProgressRoot = root;
  nextEffect = firstChild;
  commitMutationEffects_begin(root, committedLanes);
  inProgressLanes = null;
  inProgressRoot = null;
}

function commitMutationEffects_begin(root, lanes) {
  while (nextEffect !== null) {
    var fiber = nextEffect; // TODO: Should wrap this in flags check, too, as optimization

    var deletions = fiber.deletions;

    if (deletions !== null) {
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];

        try {
          commitDeletion(root, childToDelete, fiber);
        } catch (error) {
          reportUncaughtErrorInDEV(error);
          captureCommitPhaseError(childToDelete, fiber, error);
        }
      }
    }

    var child = fiber.child;

    if ((fiber.subtreeFlags & MutationMask) !== NoFlags && child !== null) {
      ensureCorrectReturnPointer(child, fiber);
      nextEffect = child;
    } else {
      commitMutationEffects_complete(root, lanes);
    }
  }
}

function commitMutationEffects_complete(root, lanes) {
  while (nextEffect !== null) {
    var fiber = nextEffect;
    setCurrentFiber(fiber);

    try {
      commitMutationEffectsOnFiber(fiber, root, lanes);
    } catch (error) {
      reportUncaughtErrorInDEV(error);
      captureCommitPhaseError(fiber, fiber.return, error);
    }

    resetCurrentFiber();
    var sibling = fiber.sibling;

    if (sibling !== null) {
      ensureCorrectReturnPointer(sibling, fiber.return);
      nextEffect = sibling;
      return;
    }

    nextEffect = fiber.return;
  }
}

function commitMutationEffectsOnFiber(finishedWork, root, lanes) {
  // TODO: The factoring of this phase could probably be improved. Consider
  // switching on the type of work before checking the flags. That's what
  // we do in all the other phases. I think this one is only different
  // because of the shared reconciliation logic below.
  var flags = finishedWork.flags;

  if (flags & ContentReset) {
    commitResetTextContent(finishedWork);
  }

  if (flags & Ref) {
    var current = finishedWork.alternate;

    if (current !== null) {
      commitDetachRef(current);
    }
  }

  if (flags & Visibility) {
    switch (finishedWork.tag) {
      case SuspenseComponent:
        {
          var newState = finishedWork.memoizedState;
          var isHidden = newState !== null;

          if (isHidden) {
            var _current = finishedWork.alternate;
            var wasHidden = _current !== null && _current.memoizedState !== null;

            if (!wasHidden) {
              // TODO: Move to passive phase
              markCommitTimeOfFallback();
            }
          }

          break;
        }

      case OffscreenComponent:
        {
          var _newState = finishedWork.memoizedState;

          var _isHidden = _newState !== null;

          var _current2 = finishedWork.alternate;

          var _wasHidden = _current2 !== null && _current2.memoizedState !== null;

          var offscreenBoundary = finishedWork;

          {
            // TODO: This needs to run whenever there's an insertion or update
            // inside a hidden Offscreen tree.
            hideOrUnhideAllChildren(offscreenBoundary, _isHidden);
          }

          {
            if (_isHidden) {
              if (!_wasHidden) {
                if ((offscreenBoundary.mode & ConcurrentMode) !== NoMode) {
                  nextEffect = offscreenBoundary;
                  var offscreenChild = offscreenBoundary.child;

                  while (offscreenChild !== null) {
                    nextEffect = offscreenChild;
                    disappearLayoutEffects_begin(offscreenChild);
                    offscreenChild = offscreenChild.sibling;
                  }
                }
              }
            }

            break;
          }
        }
    }
  } // The following switch statement is only concerned about placement,
  // updates, and deletions. To avoid needing to add a case for every possible
  // bitmap value, we remove the secondary effects from the effect tag and
  // switch on that value.


  var primaryFlags = flags & (Placement | Update | Hydrating);

   switch (primaryFlags) {
    case Placement:
      {
        commitPlacement(finishedWork); // Clear the "placement" from effect tag so that we know that this is
        // inserted, before any life-cycles like componentDidMount gets called.
        // TODO: findDOMNode doesn't rely on this any more but isMounted does
        // and isMounted is deprecated anyway so we should be able to kill this.

        finishedWork.flags &= ~Placement;
        break;
      }

    case PlacementAndUpdate:
      {
        // Placement
        commitPlacement(finishedWork); // Clear the "placement" from effect tag so that we know that this is
        // inserted, before any life-cycles like componentDidMount gets called.

        finishedWork.flags &= ~Placement; // Update

        var _current3 = finishedWork.alternate;
        commitWork(_current3, finishedWork);
        break;
      }

    case Hydrating:
      {
        finishedWork.flags &= ~Hydrating;
        break;
      }

    case HydratingAndUpdate:
      {
        finishedWork.flags &= ~Hydrating; // Update

        var _current4 = finishedWork.alternate;
        commitWork(_current4, finishedWork);
        break;
      }

    case Update:
      {
        var _current5 = finishedWork.alternate;
        commitWork(_current5, finishnes = null;
  inProgressRoot = null;
}

function commitLayoutEffects_begin(subtreeRoot, root, committedLanes) {
  // Suspense layout effects semantics don't change for legacy roots.
  var isModernRoot = (subtreeRoot.mode & ConcurrentMode) !== NoMode;

  while (nextEffect !== null) {
    var fiber = nextEffect;
    var firstChild = fiber.child;

    if ( fiber.tag === OffscreenComponent && isModernRoot) {
      // Keep track of the current Offscreen stack's state.
      var isHidden = fiber.memoizedState !== null;
      var newOffscreenSubtreeIsHidden = isHidden || offscreenSubtreeIsHidden;

      if (newOffscreenSubtreeIsHidden) {
        // The Offscreen tree is hidden. Skip over its layout effects.
        commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
        continue;
      } else {
        // TODO (Offscreen) Also check: subtreeFlags & LayoutMask
        var current = fiber.alternate;
        var wasHidden = current !== null && current.memoizedState !== null;
        var newOffscreenSubtreeWasHidden = wasHidden || offscreenSubtreeWasHidden;
        var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden;
        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden; // Traverse the Offscreen subtree with the current Offscreen as the root.

        offscreenSubtreeIsHidden = newOffscreenSubtreeIsHidden;
        offscreenSubtreeWasHidden = newOffscreenSubtreeWasHidden;

        if (offscreenSubtreeWasHidden && !prevOffscreenSubtreeWasHidden) {
          // This is the root of a reappearing boundary. Turn its layout effects
          // back on.
          nextEffect = fiber;
          reappearLayoutEffects_begin(fiber);
        }

        var child = firstChild;

        while (child !== null) {
          nextEffect = child;
          commitLayoutEffects_begin(child, // New root; bubble back up to here and stop.
          root, committedLanes);
          child = child.sibling;
        } // Restore Offscreen state and resume in our-progress traversal.


        nextEffect = fiber;
        offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
        commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
        continue;
      }
    }

    if ((fiber.subtreeFlags & LayoutMask) !== NoFlags && firstChild !== null) {
      ensureCorrectReturnPointer(firstChild, fiber);
      nextEffect = firstChild;
    } else {
      commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes);
    }
  }
}

function commitLayoutMountEffects_complete(subtreeRoot, root, committedLanes) {
  while (nextEffect !== null) {
    var fiber = nextEffect;

    if ((fiber.flags & LayoutMask) !== NoFlags) {
      var current = fiber.alternate;
      setCurrentFiber(fiber);

      try {
        commitLayoutEffectOnFiber(root, current, fiber, committedLanes);
      } catch (error) {
        reportUncaughtErrorInDEV(error);
        captureCommitPhaseError(fiber, fiber.return, error);
      }

      resetCurrentFiber();
    }

    if (fiber === subtreeRoot) {
      nextEffect = null;
      return;
    }

    var sibling = fiber.sibling;

    if (sibling !== null) {
      ensureCorrectReturnPointer(sibling, fiber.return);
      nextEffect = sibling;
      return;
    }
c
cts_complete(subtreeRoot);
    }
  }
}

function reappearLayoutEffects_complete(subtreeRoot) {
  while (nextEffect !== null) {
    var fiber = nextEffect; // TODO (Offscreen) Check: flags & LayoutStatic

    setCurrentFiber(fiber);

    try {
      reappearLayoutEffectsOnFiber(fiber);
    } catch (error) {
      reportUncaughtErrorInDEV(error);
      captureCommitPhaseError(fiber, fiber.return, error);
    }

    resetCurrentFiber();

    if (fiber === subtreeRoot) {
      nextEffect = null;
      return;
    }

    var sibling = fiber.sibling;

    if (sibling !== null) {
      // This node may have been reused from a previous render, so we can't
      // assume its return pointer is correct.
      sibling.return = fiber.return;
      nextEffect = sibling;
      return;
    }
ntEffects_begin(finishedWork, root);
}

function commitPassiveMountEffects_begin(subtreeRoot, root) {
  while (nextEffect !== null) {
    var fiber = nextEffect;
    var firstChild = fiber.child;

    if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && firstChild !== null) {
      ensureCorrectReturnPointer(firstChild, fiber);
      nextEffect = firstChild;
    } else {
      commitPassiveMountEffects_complete(subtreeRoot, root);
    }
  }
}

function commitPassiveMountEffects_complete(subtreeRoot, root) {
  while (nextEffect !== null) {
    var fiber = nextEffect;

    if ((fiber.flags & Passive) !== NoFlags) {
      setCurrentFiber(fiber);

      try {
        commitPassiveMountOnFiber(root, fiber);
      } catch (error) {
        reportUncaughtErrorInDEV(error);
        captureCommitPhaseError(fiber, fiber.return, error);
      }

      resetCurrentFiber();
    }

    if (fiber === subtreeRoot) {
      nextEffect = null;
      return;
    }

    var sibling = fiber.sibling;

    if (sibling !== null) {
      ensureCorrectReturnPointer(sibling, fiber.return);
      nextEffect = sibling;
      return;
    }

    nextEffect = fiber.return;
  }
}

function commitPassiveMountOnFiber(finishedRoot, finishedWork) {
  switch (finishedWork.tag) {
    case FunctionComponent:
    case ForwardRef:
    case SimpleMemoComponent:
      {
        if ( finishedWork.mode & ProfileMode) {
          startPassiveEffectTimer();

          try {
            commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
          } finally {
            recordPassiveEffectDuration(finishedWork);
          }
        } else {
          commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
  commitPassiveUnmountEffects_begin();
}

function commitPassiveUnmountEffects_begin() {
  while (nextEffect !== null) {
    var fiber = nextEffect;
    var child = fiber.child;

    if ((nextEffect.flags & ChildDeletion) !== NoFlags) {
      var deletions = fiber.deletions;

      if (deletions !== null) {
        for (var i = 0; i < deletions.length; i++) {
          var fiberToDelete = deletions[i];
          nextEffect = fiberToDelete;
          commitPassiveUnmountEffectsInsideOfDeletedTree_begin(fiberToDelete, fiber);
        }

        {
          // A fiber was deleted from this parent fiber, but it's still part of
          // the previous (alternate) parent fiber's list of children. Because
          // children are a linked list, an earlier sibling that's still alive
          // will be connected to the deleted fiber via its `alternate`:
          //
          //   live fiber
          //   --alternate--> previous live fiber
          //   --sibling--> deleted fiber
          //
          // We can't disconnect `alternate` on nodes that haven't been deleted
          // yet, but we can disconnect the `sibling` and `child` pointers.
          var previousFiber = fiber.alternate;

          if (previousFiber !== null) {
            var detachedChild = previousFiber.child;

            if (detachedChild !== null) {
              previousFiber.child = null;

              do {
                var detachedSibling = detachedChild.sibling;
                detachedChild.sibling = null;
                detachedChild = detachedSibling;
              } while (detachedChild !== null);
            }
          }
        }

        nextEffect = fiber;
      }
    }

    if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && child !== null) {
      ensureCorrectReturnPointer(child, fiber);
      nextEffect = child;
    } else {
      commitPassiveUnmountEffects_complete();
    }
  }
}

function commitPassiveUnmountEffects_complete() {
  while (nextEffect !== null) {
    var fiber = nextEffect;

    if ((fiber.flags & Passive) !== NoFlags) {
      setCurrentFiber(fiber);
      commitPassiveUnmountOnFiber(fiber);
      resetCurrentFiber();
    }

    var sibling = fiber.sibling;

    if (sibling !== null) {
      ensureCorrectReturnPointer(sibling, fiber.return);
      nextEffect = sibling;
      return;
    }
       }

        break;
      }
  }
}

function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
  while (nextEffect !== null) {
    var fiber = nextEffect; // Deletion effects fire in parent -> child order
    // TODO: Check if fiber has a PassiveStatic flag

    setCurrentFiber(fiber);
    commitPassiveUnmountInsideDeletedTreeOnFiber(fiber, nearestMountedAncestor);
    resetCurrentFiber();
    var child = fiber.child; // TODO: Only traverse subtree if it has a PassiveStatic flag. (But, if we
    // do this, still need to handle `deletedTreeCleanUpLevel` correctly.)

    if (child !== null) {
      ensureCorrectReturnPointer(child, fiber);
      nextEffect = child;
    } else {
      commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot);
    }
  }
}

function commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot) {
  while (nextEffect !== null) {
    var fiber = nextEffect;
    var sibling = fiber.sibling;
    var returnFiber = fiber.return;

    {
      // Recursively traverse the entire deleted tree and clean up fiber fields.
      // This is more aggressive than ideal, and the long term goal is to only
      // have to detach the deleted tree at the root.
      detachFiberAfterEffects(fiber);

      if (fiber === deletedSubtreeRoot) {
        nextEffect = null;
        return;
      }
    }

    if (sibling !== null) {
      ensureCorrectReturnPointer(sibling, returnFiber);
      nextEffect = sibling;
      return;
    }       }

        break;
      }
  }
}

var didWarnWrongReturnPointer = false;

function ensureCorrectReturnPointer(fiber, expectedReturnFiber) {
  {
    if (!didWarnWrongReturnPointer && fiber.return !== expectedReturnFiber) {
      didWarnWrongReturnPointer = true;

      error('Internal React error: Return pointer is inconsistent ' + 'with parent.');
    }
  } // TODO: Remove this assignment once we're confident that it won't break
  // anything, by checking the warning logs for the above invariant


  fiber.return = expectedReturnFiber;
} // TODO: Reuse reappearLayoutEffects traversal here?


function invokeLayoutEffectMountInDEV(fiber) {
  {
    // We don't need to re-check StrictEffectsMode here.
    // This function is only called if that check has already passed.
    switch (fiber.tag) {
      case FunctionComponent:
      case ForwardRef:
      case SimpleMemoComponent:
        {
          try {
            commitHookEffectListMount(Layout | HasEffect, fiber);
          } catch (error) {
            reportUncaughtErrorInDEV(error);
            captureCommitPhaseError(fiber, fiber.return, error);
          }

          break;
        }

      case ClassComponent:
        {
          var instance = fiber.stateNode;

          try {
            instance.componentDidMount();
          } catch (error) {
            reportUncaughtErrorInDEV(error);
            captureCommitPhaseError(fiber, fiber.return, error);
          }

          break;
        }
    }
  }
}

function invokePassiveEffectMountInDEV(fiber) {
  {
    // We don't need to re-check StrictEffectsMode here.
    // This function is only called if that check has already passed.
    switch (fiber.tag) {
      case FunctionComponent:
      case ForwardRef:
      case SimpleMemoComponent:
        {
          try {
            commitHookEffectListMount(Passive$1 | HasEffect, fiber);
          } catch (error) {
            reportUncaughtErrorInDEV(error);
            captureCommitPhaseError(fiber, fiber.return, error);
          }

          break;
        }
    }
  }
}

function invokeLayoutEffectUnmountInDEV(fiber) {
  {
    // We don't need to re-check StrictEffectsMode here.
    // This function is only called if that check has already passed.
    switch (fiber.tag) {
      case FunctionComponent:
      case ForwardRef:
      case SimpleMemoComponent:
        {
          try {
            commitHookEffectListUnmount(Layout | HasEffect, fiber, fiber.return);
          } catch (error) {
            reportUncaughtErrorInDEV(error);
            captureCommitPhaseError(fiber, fiber.return, error);
          }

          break;
        }

      case ClassComponent:
        {
          var instance = fiber.stateNode;

          if (typeof instance.componentWillUnmount === 'function') {
            safelyCallComponentWillUnmount(fiber, fiber.return, instance);
          }

          break;
        }
    }
  }
}

function invokePassiveEffectUnmountInDEV(fiber) {
  {
    // We don't need to re-check StrictEffectsMode here.
    // This function is only called if that check has already passed.
    switch (fiber.tag) {
      case FunctionComponent:
      case ForwardRef:
      case SimpleMemoComponent:
        {
          try {
            commitHookEffectListUnmount(Passive$1 | HasEffect, fiber, fiber.return);
          } catch (error) {
            reportUncaughtErrorInDEV(error);
            captureCommitPhaseError(fiber, fiber.return, error);
          }
        }
    }
  }
}

var COMPONENT_TYPE = 0;
var HAS_PSEUDO_CLASS_TYPE = 1;
var ROLE_TYPE = 2;
var TEST_NAME_TYPE = 3;
var TEXT_TYPE = 4;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  COMPONENT_TYPE = symbolFor('selector.component');
  HAS_PSEUDO_CLASS_TYPE = symbolFor('selector.has_pseudo_class');
  ROLE_TYPE = symbolFor('selector.role');
  TEST_NAME_TYPE = symbolFor('selector.test_id');
  TEXT_TYPE = symbolFor('se    return commitHook();
    });
  }
}

var ReactCurrentActQueue = Reac return isReactActEnvironmentGlobal;
  }
}

var ceil = Math.ceil;
var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher,
    ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner,
    ReactCurrentBatchConfig$3 = ReactSharedInternals.ReactCurrentBatchConfig,
    ReactCurrentActQueue$1 = ReactSharedInternals.ReactCurrentActQueue;
var NoContext =
/*             */
0;
var BatchedContext =
/*               */
1;
var RenderContext =
/*                */
2;
var CommitContext =
/*                */
4;
var RootInProgress = 0;
var RootFatalErrored = 1;
var RootErrored = 2;
var RootSuspended = 3;
var RootSuspendedWithDelay = 4;
var RootCompleted = 5;
var RootDidNotComplete = 6; // Describes where we are in the React execution stack

var executionContext = NoContext; // The root we're working on

var workInProgressRoot = null; // The fiber we're working on

var workInProgress = null; // The lanes we're rendering

var workInProgressRootRenderLanes = NoLanes; // Stack that allows components to change the render lanes for its subtree
// This is a superset of the lanes we started working on at the root. The only
// case where it's different from `workInProgressRootRenderLanes` is when we
// enter a subtree that is hidden and needs to be unhidden: Suspense and
// Offscreen component.
//
// Most things in the work loop should deal with workInProgressRootRenderLanes.
// Most things in begin/complete phases should deal with subtreeRenderLanes.

var subtreeRenderLanes = NoLanes;
var subtreeRenderLanesCursor = createCursor(NoLanes); // Whether to root completed, errored, suspended, etc.

var workInProgressRootExitStatus = RootInProgress; // A fatal error, if one is thrown

var workInProgressRootFatalError = null; // "Included" lanes refer to lanes that were worked on during this render. It's
// slightly different than `renderLanes` because `renderLanes` can change as you
// enter and exit an Offscreen tree. This value is the combination of all render
// lanes for the entire render phase.

var workInProgressRootIncludedLanes = NoLanes; // The work left over by components that were visited during this render. Only
// includes unprocessed updates, not work in bailed out children.

var workInProgressRootSkippedLanes = NoLanes; // Lanes that were updated (in an interleaved event) during this render.

var workInProgressRootInterleavedUpdatedLanes = NoLanes; // Lanes that were updated during the render phase (*not* an interleaved event).

var workInProgressRootPingedLanes = NoLanes; // Errors that are thrown during the render phase.

var workInProgressRootConcurrentErrors = null; // These are errors that we recovered from without surfacing them to the UI.
// We will log them once the tree commits.

var workInProgressRootRecoverableErrors = null; // The most recent time we committed a fallback. This lets us ensure a train
// model where we don't commit new loading states in too quick succession.

var globalMostRecentFallbackTime = 0;
var FALLBACK_THROTTLE_MS = 500; // The absolute time for when we should start giving up on rendering
// more and prefer CPU suspense heuristics instead.

var workInProgressRootRenderTargetTime = Infinity; // How long a render is supposed to take before we start following CPU
// suspense heuristics and opt out of rendering morTargetTime = now() + RENDER_TIMEOUT_MS;
}

function getRenderTargetTime() {
  return workInProgressRootRenderTargetTime;
}
var hasUncaughtError = false;
var firstUncaughtError = null;
var legacyErrorBoundariesThatAlreadyFailed = null; // Only used when enableProfilerNestedUpdateScheduledHook is true;
var rootDoesHavePassiveEffects = false;
var rootWithPendingPassiveEffects = null;
var pendingPassiveEffectsLanes = NoLanes;
var pendingPassiveProfilerEffects = [];

var NESTED_UPDATE_LIMIT = 50;
var nestedUpdateCount = 0;
var rootWithNestedUpdates = null;
var NESTED_PASSIVE_UPDATE_LIMIT = 50;
var nestedPassiveUpdateCount = 0; // If two updates are scheduled within the same event, we should treat their
// event times as simultaneous, even if the actual clock time has advanced
// between the first and second call.

var currentEventTime = NoTimestamp;
var currentEventTransitionLane = NoLanes;
function getWorkInProgrrcLane;
  }

  return claimNextRetryLane();
}

function scheduleUpdateOnFiber(fiber, lane, eventTime) {
  checkForNestedUpdates();
  var root = markUpdateLaneFromFiberToRoot(fiber, lane);

  if (root === null) {
    return null;
  } // Mark that the root has a pending update.


  markRootUpdated(root, lane, eventTime);

  if ((executionContext & RenderContext) !== NoLanes && root === workInProgressRoot) {
    // This update was dispatched during the render phase. This is a mistake
    // if the update originates from user space (with the exception of local
    // hook updates, which are handled differently and don't reach this
    // function), but there are some internal React features that use this as
    // an implementation detail, like selective hydration.
    warnAboutRenderPhaseUpdatesInDEV(fiber); // Track lanes that were updated during the render phase
  } else {
    // This is a normal update, scheduled from outside the render phase. For
    // example, during an input event.
    {
      if (isDevToolsPresent) {
        addFiberToLanesMap(root, fiber, lane);
      }
    }

    warnIfUpdatesNotWrappedWithActDEV(fiber);

    if (root === workInProgressRoot) {
      // TODO: Consolidate with `isInterleavedUpdate` check
      // Received an update to a tree that's in the middle of rendering. Mark
      // that there was an interleaved update work on this root. Unless the
      // `deferRenderPhaseUpdateToNextBatch` flag is off and this is a render
      // phase update. In that case, we don't treat render phase updates as if
      // they were interleaved, for backwards compat reasons.
      if ( (executionContext & RenderContext) === NoContext) {
        workInProgressRootInterleavedUpdatedLanes = mergeLanes(workInProgressRootInterleavedUpdatedLanes, lane);
      }

      if (workInProgressRootExitStatus === RootSuspendedWithDelay) {
        // The root already suspended with a delay, which means this render
        // definitely won't finish. Since we have a new update, let's mark it as
        // suspended now, right before marking the incoming update. This has the
        // effect of interrupting the current render and switching to the update.
        // TODO: Make sure this doesn't override pings that happen while we've
        // already started rendering.
        markRootSuspended$1(root, workInProgressRootRenderLanes);
      }
    }

    ensureRootIsScheduled(root, eventTime);

    if (lane === SyncLane && executionContext === NoContext && (fiber.mode & ConcurrentMode) === NoMode && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
    !( ReactCurrentActQueue$1.isBatchingLegacy)) {
      // Flush the synchronous work now, unless we're already working or inside
      // a batch. This is intentionally inside scheduleUpdateOnFiber instead of
      // scheduleCallbackForFiber to preserve the ability to schedule a callback
      // without immediately flushing it. We only do this for user-initiated
      // updates, to preserve historical behavior of legacy mode.
      resetRenderTimer();
      flushSyncCallbacksOnl
  ensureRootIsScheduled(root, eventTime);
} // This is split into a separate function so we can mark a fiber with pending
// work without treating it as a typical update that originates from an event;
// e.g. retrying a Suspense boundary isn't an updatturn root;
  } else {
    return null;
  }
}

function isInterleavedUpdate(fiber, lane) {
  return (// TODO: Optimize slightly by comparing to root that fiber belongs to.
    // Requires some refactoring. Not a big deal though since it's rare for
    // concurrent apps to have more than a single root.
    workInProgressRoot !== null && (fiber.mode & ConcurrentMode) !== NoMode && ( // If this is a render phase update (i.e. UNSAFE_componentWillReceiveProps),
    // then don't treat this as an interleaved update. This pattern is
    // accompanied by a warning but we haven't fully deprecated it yet. We can
    // remove once the deferRenderPhaseUpdateToNextBatch flag is enabled.
     (executionContext & RenderContext) === NoContext)
  );
} // Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the priority
// of the existing task is the same as the priority of the next level that the
// root has work on. This function is called on every update, and right before
// exiting a task.

function ensureRootIsScheduled(root, currentTime) {
  var existingCallbackNode = root.callbackNode; // Check if any lanes are being starved by other work. If so, mark them as
  // expired so we know to work on those next.

  markStarvedLanesAsExpired(root, currentTime); // Determine the next lanes to work on, and their priority.

  var nextLanes = getNextLanes(root, root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);

  if (nextLanes === NoLanes) {
    // Special case: There's nothing to work on.
    if (existingCallbackNode !== null) {
      cancelCallback$1(existingCallbackNode);
    }

    root.callbackNode = null;
    root.callbackPriority = NoLane;
    return;
  } // We use the highest priority lane to represent the priority of the callback.


  var newCallbackPriority = getHighestPriorityLane(nextLanes); // Check if there's an existing task. We may be able to reuse it.

  var existingCallbackPriority = root.callbackPriority;

  if (existingCallbackPriority === newCallbackPriority && // Special case related to `act`. If the currently scheduled task is a
  // Scheduler task, rather than an `act` task, cancel it and re-scheduled
  // on the `act` queue.
  !( ReactCurrentActQueue$1.current !== null && existingCallbackNode !== fakeActCallbackNode)) {
    {
      // If we're going to re-use an existing task, it needs to exist.
      // Assume that discrete update microtasks are non-cancellable and null.
      // TODO: Temporary until we confirm this warning is not fired.
      if (existingCallbackNode == null && existingCallbackPriority !== SyncLane) {
        error('Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.');
      }
    } // The priority hasn't changed. We can reuse the existing task. Exit.


    return;
  }

  if (existingCallbackNode != null) {
    // Cancel the existing callback. We'll schedule a new one below.
    cancelCallback$1(existingCallbackNode);
  } // Schedule a new callback.


  var newCallbackNode;

  if (newCallbackPriority === SyncLane) {
    // Special case: Sync React callbacks are scheduled on a special
    // internal queue
    if (root.tag === LegacyRoot) {
      if ( ReactCurrentActQueue$1.isBatchingLegacy !== null) {
        ReactCurrentActQueue$1.didScheduleLegacyUpdate = true;
      }

      scheduleLegacySyncCallback(performSyncWorkOnRoot.bind(null, root));
    } else {
      scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root));
    }

    {
      // Flush the queue in a microtask.
      if ( ReactCurrentActQueue$1.current !== null) {
        // Inside `act`, use our internal `act` queue so that these get flushed
        // at the end of the current scope even when using the sync version
        // of `act`.
        ReactCurrentActQueue$1.current.push(flushSyncCallback flushSyncCallbacks();
          }
        });
      }
    }

    newCallbackNode = null;
  } else {
    var schedulerPriorityLevel;

    switch (lanesToEventPriority(nextLanes)) {
      case DiscreteEventPriority:
        schedulerPriorityLevel = ImmediatePriority;
        break;

      case ContinuousEventPriority:
        schedulerPriorityLevel = UserBlockingPriority;
        break;

      case DefaultEventPriority:
        schedulerPriorityLevel = NormalPriority;
        break;

      case IdleEventPriority:
        schedulerPriorityLevel = IdlePriority;
        break;

      default:
        schedulerPriorityLevel = NormalPriority;
        break;
    }

    newCallbackNode = scheduleCallback$1(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root));
  }

  root.callbackPriority = newCallbackPriority;
  root.callbackNode = newCallbackNode;
} // This is the entry point for every concurrent task, i.eRdrogressRootRecoverableErrors, errors);
  }
}

function finishConcurrentRender(root, exitStatus, lanes) {
  switch (exitStatus) {
    case RootInProgress:
    case RootFatalErrored:
      {
        throw new Error('Root did not complete. This is a bug in React.');
      }
    // Flow knows about invariant, so it complains if I add a break
    // statement, but eslint doesn't know about invariant, so it complains
    // if I do. eslint-disable-next-line no-fallthrough

    case RootErrored:
      {
        // We should have already attempted to retry this tree. If we reached
        // this point, it errored again. Commit it.
        commitRoot(root, workInProgressRootRecoverableErrors);
        break;
      }

    case RootSuspended:
      {
        markRootSuspended$1(root, lanes); // We have an acceptable loading state. We need to figure out if we
        // should immediately commit it or wait a bit.

        if (includesOnlyRetries(lanes) && // do not delay if we're inside an act() scope
        !shouldForceFlushFallbacksInDEV()) {
          // This render only included retries, no updates. Throttle committing
          // retries so that we don't show too many loading states too quickly.
          var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now(); // Don't bother with a very short suspense time.

          if (msUntilTimeout > 10) {
            var nextLanes = getNextLanes(root, NoLanes);

            if (nextLanes !== NoLanes) {
              // There's additional work on this root.
              break;
            }

            var suspendedLanes = root.suspendedLanes;

            if (!isSubsetOfLanes(suspendedLanes, lanes)) {
              // We should prefer to render the fallback of at the last
              // suspended level. Ping the last suspended level to try
              // rendering it again.
              // FIXME: What if the suspended lanes are Idle? Should not restart.
              var eventTime = requestEventTime();
              markRootPinged(root, suspendedLanes);
              break;
            } // The render is suspended, it hasn't timed out, and there's no
            // lower priority work to do. Instead of committing the fallback
            // immediately, wait for more data to arrive.


            root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root, workInProgressRootRecoverableErrors), msUntilTimeout);
            break;
          }
        } // The work expired. Commit immediately.


        commitRoot(root, workInProgressRootRecoverableErrors);
        break;
      }

    case RootSuspendedWithDelay:
      {
        markRootSuspended$1(root, lanes);

        if (includesOnlyTransitions(lanes)) {
          // This is a transition, so we should exit without committing a
          // placeholder and without scheduling a timeout. Delay indefinitely
          // until we receive more data.
          break;
        }

        if (!shouldForceFlushFallbacksInDEV()) {
          // This is not a transition, but we did trigger an avoided state.
          // Schedule a placeholder to display after a short delay, using the Just
          // Noticeable Difference.
          // TODO: Is the JND optimization worth the added complexity? If this is
          // the only reason we track the event time, then probably not.
          // Consider removing.
          var mostRecentEventTime = getMostRecentEventTime(root, lanes);
          var eventTimeMs = mostRecentEventTime;
          var timeElapsedMs = now() - eventTimeMs;

          var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs; // Don't bother with a very short suspense time.


          if (_msUntilTimeout > 10) {
            // Instead of committing the fallback immediately, wait for more data
            // to arrive.
            root.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root, workInProgressRootRecoverableErrors), _msUntilTimeout);
            break;
          }
        } // Commit the placeholder.


        commitRoot(root, workInProgressRootRecoverableErrors);
        break;
      }

    case RootCompleted:
      {
        // The work completed. Ready to commit.
        commitRoot(root, workInProgressRootRecoverableErrors);
        break;
      }

    default:
      {
        throw new Error(-  markRootSuspended(root, suspendedLanes);
} // This is the entry point for synchronous tasks that don't go
// through Scheduler


function performSyncWorkOnRoot(root) {
  {
    syncNestedUpdateFlag();
  }

  if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
    throw new Error('Should not already be working.');
  }

  flushPassiveEffects();
  var lanes = getNextLanes(root, NoLanes);

  if (!includesSomeLane(lanes, SyncLane)) {
    // There's no remaining sync work left.
    ensureRootIsScheduled(root, now());
    return null;
  }

  var exitStatus = renderRootSync(root, lanes);

  if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
    // If something threw an error, try rendering one more time. We'll render
    // synchronously to block concurrent data mutations, and we'll includes
    // all pending updates are included. If it still fails after the second
    // attempt, we'll give up and commit the resulting tree.
    var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root);

    if (errorRetryLanes !== NoLanes) {
      lanes = errorRetryLanes;
      exitStatus = recoverFromConcurrentError(root, errorRetryLanes);
    }
  }

  if (exitStatus === RootFatalErrored) {
    var fatalError = workInProgressRootFatalError;
    prepareFreshStack(root, NoLanes);
    markRootSuspended$1(root, lanes);
    ensureRootIsScheduled(root, now());
    throw fatalError;
  }

  if (exitStatus === RootDidNotComplete) {
    throw new Error('Root did not complete. This is a bug in React.');
  } // We now have a consistent tree. Because this is a sync render, we
  // will commit it even if something suspended.


  var finishedWork = root.current.alternate;
  root.finishedWork = finishedWork;
  root.finishedLanes = lanes;
  commitRoot(root, workInProgressRootRecoverableErrors); // Before exiting, make sure there's a callback scheduled for the next
  // pending level.

  ensureRooext) {
      resetRenderTimer();
    }
  }
} // Overload the definition to the two valid signatures.
// Warning, this opts-out of checking the function bodtnings();
  }

  return rootWorkInProgress;
}

function handleError(root, thrownValue) {
  do {
    var erroredWork = workInProgress;

    try {
      // Reset module-level state that was set during the render phase.
      resetContextDependencies();
      resetHooksAfterThrow();
      resetCurrentFiber(); // TODO: I found and added this missing line while investigating a
      // separate issue. Write a regression test using string refs.

      ReactCurrentOwner$2.current = null;

      if (erroredWork === null || erroredWork.return === null) {
        // Expected to be working on a non-root fiber. This is a fatal error
        // because there's no ancestor that can handle it; the root is
        // supposed to capture all errors that weren't caught by an error
        // boundary.
        workInProgressRootExitStatus = RootFatalErrored;
        workInProgressRootFatalError = thrownValue; // Set `workInProgress` to null. This represents advancing to the next
        // sibling, or the parent if there are no siblings. But since the root
        // has no siblings nor a parent, we set it to null. Usually this is
        // handled by `completeUnitOfWork` or `unwindWork`, but since we're
        // intentionally not calling those, we need set it here.
        // TODO: Consider calling `unwindWork` to pop the contexts.

        workInProgress = null;
        return;
      }

      if (enableProfilerTimer && erroredWork.mode & ProfileMode) {
        // Record the time spent rendering before an error was thrown. This
        // avoids inaccurate Profiler durations in the case of a
        // suspended render.
        stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
      }

      if (enableSchedulingProfiler) {
        markComponentRenderStopped();

        if (thrownValue !== null && typeof thrownValue === 'object' && typeof thrownValue.then === 'function') {
          var wakeable = thrownValue;
          markComponentSuspended(erroredWork, wakeable, workInProgressRootRenderLanes);
        } else {
          markComponentErrored(erroredWork, thrownValue, workInProgressRootRenderLanes);
        }
      }

      throwException(root, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
      completeUnitOfWork(erroredWork);
    } catch (yetAnotherThrownValue) {
      // Something in the return path also threw.
      thrownValue = yetAnotherThrownValue;

      if (workInProgress === erroredWork && erroredWork !== null) {
        // If this boundary has already errored, then we had trouble processing
        // the error. Bubble it to the next boundary.
        erroredWork = erroredWork.return;
        workInProgress = erroredWork;
      } else {
        erroredWork = workInProgress;
      }

      continue;
    } // Return to the normal w
rentDispatcher$2.current = prevDispatcher;
}

function markCommitTimeOfFallback()gressRootConcurrentErrors.push(error);
  }
} // Called during render to determine if anything has susProgressRootExitStatus === RootInProgress;
}

function renderRootSync(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= RenderContext;
  var prevDispatcher = pushDispatcher(); // If the root or lanes have changed, throw out the existing stack
  // and prepare a fresh one. Otherwise we'll continue where we left off.

  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
    {
      if (isDevToolsPresent) {
        var memoizedUpdaters = root.memoizedUpdaters;

        if (memoizedUpdaters.size > 0) {
          restorePendingUpdaters(root, workInProgressRootRenderLanes);
          memoizedUpdaters.clear();
        } // At this point, move Fibers that scheduled the upcoming work from the Map to the Set.
        // If we bailout on this work, we'll move them back (like above).
        // It's important to move them now in case the work spawns more work at the same priority with different updaters.
        // That way we can keep the current update and future updates separate.


        movePendingFibersToMemoized(root, lanes);
      }
    }
    prepareFreshStack(root, lanes);
  }

  {
    markRenderStarted(lanes);
  }

  do {
    try {
      workLoopSync();
      break;
    } catch (thrownValue) {
      handleError(root, thrownValue);
    }
  } while (true);

  resetContextDependencies();
  executionContext = prevExecutionContext;
  popDispatcher(prevDispatcher);

  if (workInProgress !== null) {
    // This is a sync render, so we should have finished the whole tree.
    throw new Error('Cannot commit an incomplete root. This error is likely caused by a ' + 'bug in React. Please file an issue.');
  }

  {
    markRenderStopped();
  } // Set this to null to indicate there's no in-progress render.


  workInProgressRoot = null;
  workInProgressRootRenderLanes = NoLanes;
  return workInProgressRootExitStatus;
} // The work loop is an extremely hot path. Tell C    performUnitOfWork(workInProgress);
  }
}

function renderRootConcurrent(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= RenderContext;
  var prevDispatcher = pushDispatcher(); // If the root or lanes have changed, throw out the existing stack
  // and prepare a fresh one. Otherwise we'll continue where we left off.

  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
    {
      if (isDevToolsPresent) {
        var memoizedUpdaters = root.memoizedUpdaters;

        if (memoizedUpdaters.size > 0) {
          restorePendingUpdaters(root, workInProgressRootRenderLanes);
          memoizedUpdaters.clear();
        } // At this point, move Fibers that scheduled the upcoming work from the Map to the Set.
        // If we bailout on this work, we'll move them back (like above).
        // It's important to move them now in case the work spawns more work at the same priority with different updaters.
        // That way we can keep the current update and future updates separate.


        movePendingFibersToMemoized(root, lanes);
      }
    }
    resetRenderTimer();
    prepareFreshStack(root, lanes);
  }

  {
    markRenderStarted(lanes);
  }

  do {
    try {
      workLoopConcurrent();
      break;
    } catch (thrownValue) {
      handleError(root, thrownValue);
    }
  } while (true);

  resetContextDependencies();
  popDispatcher(prevDispatcher);
  executionContext = prevExecutionContext;


  if (workInProgress !== null) {
    // Still work remaining.
    {
      markRenderYielded();
    }

    return RootInProgress;
  } else {
    // Completed the tree.
    {
      markRenderStopped();
    } // Set this to null to indicate there's no in-progress render.


    workInProgressRoot = null;
    workInProgressRootRenderLanes = NoLanes; // Return the final exit status.

    return workInProg  rogressRootExitStatus = RootCompleted;
  }
}

function commitRoot(root, recoverableErrors) {
  // TODO: This no longer makes any sense. We already wrap the mutation and
  // layout phases. Should be able to remove.
  var previousUpdateLanePriority = getCurrentUpdatePriority();
  var prevTransition = ReactCurrentBatchConfig$3.transition;

  try {
    ReactCurrentBatchConfig$3.transition = null;
    setCurrentUpdatePriority(DiscreteEventPriority);
    commitRootImpl(root, recoverableErrors, previousUpdateLanePriority);
  } finally {
    ReactCurrentBatchConfig$3.transition = prevTransition;
    setCurrentUpdatePriority(previousUpdateLanePriority);
  }

  return null;
}

function commitRootImpl(root, recoverableErrors, renderPriorityLevel) {
  do {
    // `flushPassiveEffects` will call `flushSyncUpdateQueue` at the end, which
    // means `flushPassiveEffects` will sometimes result in additional
    // passive effects. So we need to keep flushing in a loop until there are
    // no more pending effects.
    // TODO: Might be better if `flushPassiveEffects` did not automatically
    // flush synchronous work at the end, to avoid factoring hazards like this.
    flushPassiveEffects();
  } while (rootWithPendingPassiveEffects !== null);

  flushRenderPhaseStrictModeWarningsInDEV();

  if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
    throw new Error('Should not already be working.');
  }

  var finishedWork = root.finishedWork;
  var lanes = root.finishedLanes;

  {
    markCommitStarted(lanes);
  }

  if (finishedWork === null) {

    {
      markCommitStopped();
    }

    return null;
  } else {
    {
      if (lanes === NoLanes) {
        error('root.finishedLanes should not be empty during a commit. This is a ' + 'bug in React.');
      }
    }
  }

  root.finishedWork = null;
  root.finishedLanes = NoLanes;

  if (finishedWork === root.current) {
    throw new Error('Cannot commit the same tree as before. This error is likely caused by ' + 'a bug in React. Please file an issue.');
  } // commitRoot never returns a continuation; it always finishes synchronously.
  // So we can clear these now to allow a new callback to be scheduled.


  root.callbackNode = null;
  root.callbackPriority = NoLane; // Update the first and last pending times on this root. The new first
  // pending time is whatever is left on the root fiber.

  var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
  markRootFinished(root, remainingLanes);

  if (root === workInProgressRoot) {
    // We can reset these now that they are finished.
    workInProgressRoot = null;
    workInProgress = null;
    workInProgressRootRenderLanes = NoLanes;
  } // If there are pending passive effects, schedule a callback to process them.
  // Do this as early as possible, so it is queued before anything else that
  // might get scheduled in the commit phase. (See #16714.)
  // TODO: Delete all other places that schedule the passive effect callback
  // They're redundant.


  if ((finishedWork.subtreeFlags & PassiveMask) !== NoFlags || (finishedWork.flags & PassiveMask) !== NoFlags) {
    if (!rootDoesHavePassiveEffects) {
      rootDoesHavePassiveEffects = true;
      scheduleCallback$1(NormalPriority, function () {
        flushPassiveEffects(); // This render triggered passive effects: release the root cache pool
        // *after* passive effects fire to avoid freeing a cache pool that may
        // be referenced by a node in the tree (HostRoot, Cache boundary etc)

        return null;
      });
    }
  } // Check if there are any effects in the whole tree.
  // TODO: This is left over from the effect list implementation, where we had
  // to check for the existence of `firstEffect` to satisfy Flow. I think the
  // only other reason this optimization exists is because it affects profiling.
  // Reconsider whether this is necessary.


  var subtreeHasEffects = (finishedWork.subtreeFlags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;
  var rootHasEffect = (finishedWork.flags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;

  if (subtreeHasEffects || rootHasEffect) {
    var prevTransition = ReactCurrentBatchConfig$3.transition;
    ReactCurrentBatchConfig$3.transition = null;
    var previousPriority = getCurrentUpdatePriority();
    setCurrentUpdatePriority(DiscreteEventPriority);
    var prevExecutionContext = executionContext;
    executionContext |= CommitContext; // Reset this to null before calling lifecycles

    ReactCurrentOwner$2.current = null; // The commit phase is broken into several sub-phases. We do a separate pass
    // of the effect list for each phase: all mutation effects come before all
    // layout effects, and so on.
    // The first phase a "before mutation" phase. We use this phase to read the
    // state of the host tree right before we mutate it. This is where
    // getSnapshotBeforeUpdate is called.

    var shouldFireAfterActiveInstanceBlur = commitBeforeMutationEffects(root, finishedWork);

    {
      // Mark the current commit time to be shared by all Profilers in this
      // batch. This enables them to be grouped later.
      recordCommitTime();
    }


    commitMutationEffects(root, finishedWork, lanes);

    resetAfterCommit(root.containerInfo); // The work-in-progress tree is now the current tree. This must come after
    // the mutation phase, so that the previous tree is still current during
    // componentWillUnmount, but before the layout phase, so that the finished
    // work is current during componentDidMount/Update.

    root.current = finishedWork; // The next phase is the layout phase, where we call effects that read

    {
      markLayoutEffectsStarted(lanes);
    }

    commitLayoutEffects(finishedWork, root, lanes);

    {
      markLayoutEffectsStopped();
    }
    // opportunity to paint.


    requestPaint();
    executionContext = prevExecutionContext; // Reset the priority to the previous non-sync value.

    setCurrentUpdatePriority(previousPriority);
    ReactCurrentBatchConfig$3.transition = prevTransition;
  } else {
    // No effects.
    root.current = finishedWork; // Measure these anyway so the flamegraph explicitly shows that there were
    // no effects.
    // TODO: Maybe there's a better way to report this.

    {
      recordCommitTime();
    }
  }

  var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;

  if (rootDoesHavePassiveEffects) {
    // This commit has passive effects. Stash a reference to them. But don't
    // schedule a callback until after flushing layout work.
    rootDoesHavePassiveEffects = false;
    rootWithPendingPassiveEffects = root;
    pendingPassiveEffectsLanes = lanes;
  } // Read this again, since an effect might have updated it


  remainingLanes = root.pendingLanes; // Check if there's remaining work on this root
  // TODO: This is part of the `componentDidCatch` implementation. Its purpose
  // is to detect whether something might have called setState inside
  // `componentDidCatch`. The mechanism is known to be flawed because `setState`
  // inside `componentDidCatch` is itself flawed — that's why we recommend
  // `getDerivedStateFromError` instead. However, it could be improved by
  // checking if remainingLanes includes Sync work, instead of whether there's
  // any work remaining at all (which would also include stuff like Suspense
  // retries or transitions). It's been like this for a while, though, so fixing
  // it probably isn't that urgent.

  if (remainingLanes === NoLanes) {
    // If there's no remaining work, we can clear the set of already failed
    // error boundaries.
    legacyErrorBoundariesThatAlreadyFailed = null;
  }

  {
    if (!rootDidHavePassiveEffects) {
      commitDoubleInvokeEffectsInDEV(root.current, false);
    }
  }

  onCommitRoot(finishedWork.stateNode, renderPriorityLevel);

  {
    if (isDevToolsPresent) {
      root.memoizedUpdaters.clear();
    }
  }

  {
    onCommitRoot$1();
  } // Always call this before exiting `commitRoot`, to ensure that any
  // additional work on this root is scheduled.


  ensureRootIsScheduled(root, now());

  if (recoverableErrors !== null) {
    // There were errors during this render, but recovered from them without
    // needing to surface it to the UI. We log them here.
    var onRecoverableError = root.onRecoverableError;

    for (var i = 0; i < recoverableErrors.length; i++) {
      var recoverableError = recoverableErrors[i];
      onRecoverableError(recoverableError);
    }
  }

  if (hasUncaughtError) {
    hasUncaughtError = false;
    var error$1 = firstUncaughtError;
    firstUncaughtError = null;
    throw error$1;
  } // If the passive effects are the result of a discrete render, flush them
  // synchronously at the end of the current task so that the result is
  // immediately observable. Otherwise, we assume that they are not
  // order-dependent and do not need to be observed by external systems, so we
  // can wait until after paint.
  // TODO: We can optimize this by not scheduling the callback earlier. Since we
  // currently schedule the callback in multiple places, will wait until those
  // are consolidated.


  if (includesSomeLane(pendingPassiveEffectsLanes, SyncLane) && root.tag !== LegacyRoot) {
    flushPassiveEffects();
  } // Read this again, since a passive effect might have updated it


  remainingLanes = root.pendingLanes;

  if (includesSomeLane(remainingLanes, SyncLane)) {
    {
      markNestedUpdateScheduled();
    } // Count the number of times the root synchronously re-renders without
    // finishing. If there are too many, it indicates an infinite update loop.


    if (root === rootWithNestedUpdates) {
      nestedUpdateCount++;
    } else {
      nestedUpdateCount = 0;
      rootWithNestedUpdates = root;
    }
  } else {
    nestedUpdateCount = 0;
  } // If layout work was scheduled, flush it now.


  flushSyncCallbacks();

  {
 ();
        return null;
      });
    }
  }
}

function flushPassiveEffectsImpl() {
  if (rootWithPendingPassiveEffects === null) {
    return false;
  }

  var root = rootWithPendingPassiveEffects;
  var lanes = pendingPassiveEffectsLanes;
  rootWithPendingPassiveEffects = null; // TODO: This is sometimes out of sync with rootWithPendingPassiveEffects.
  // Figure out why and fix it. It's not causing any known issues (probably
  // because it's only used for profiling), but it's a refactor hazard.

  pendingPassiveEffectsLanes = NoLanes;

  if ((executionContext & (RenderContext | CommitContext)) !== NoContext) {
    throw new Error('Cannot flush passive effects while already rendering.');
  }

  {
    markPassiveEffectsStarted(lanes);
  }

  var prevExecutionContext = executionContext;
  executionContext |= CommitContext;
  commitPassiveUnmountEffects(root.current);
  commitPassiveMountEffects(root, root.current); // TODO: Move to commitPassiveMountEffects

  {
    var profilerEffects = pendingPassiveProfilerEffects;
    pendingPassiveProfilerEffects = [];

    for (var i = 0; i < profilerEffects.length; i++) {
      var _fiber = profilerEffects[i];
      commitPassiveEffectDurations(root, _fiber);
    }
  }

  {
    markPassiveEffectsStopped();
  }

  {
    commitDoubleInvokeEffectsInDEV(root.current, true);
  }

  executionContext = prevExecutionContext;
  flushSyncCallbacks(); // If additional passive effects were scheduled, increment a counter. If this
  // exceeds the limit, we'll fire a warning.

  nestedPassiveUpdateCount = rootWithPendingPassiveEffects === null ? 0 : nestedPassiveUpdateCount + 1; // TODO: Move to commitPassiveMountEffects

  onPostCommitRoot(root);

  {
    var stateNode = root.current.stateNode;
    stateNode.effectDuration = 0;
    stateNode.pasu = true;
    firstUncaughtError = error;
  }
}

var onUncaughtError = prepareToThrowUncaughtError;

function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  var errorInfo = createCapturedValue(error, sourceFiber);
  var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
  enqueueUpdate(rootFiber, update);
  var eventTime = requestEventTime();
  var root = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);

  if (root !== null) {
    markRootUpdated(root, SyncLane, eventTime);
    ensureRootIsScheduled(root, eventTime);
  }
}

function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error$1) {
  if (sourceFiber.tag === HostRoot) {
    // Error was thrown at the root. There is no parent, so the root
    // itself should capture it.
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error$1);
    return;
  }

  var fiber = null;

  {
    fiber = nearestMountedAncestor;
  }

  while (fiber !== null) {
    if (fiber.tag === HostRoot) {
      captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error$1);
      return;
    } else if (fiber.tag === ClassComponent) {
      var ctor = fiber.type;
      var instance = fiber.stateNode;

      if (typeof ctor.getDerivedStateFromError === 'function' || typeof instance.componentDidCatch === 'function' && !isAlreadyFailedLegacyErrorBoundary(instance)) {
        var errorInfo = createCapturedValue(error$1, sourceFiber);
        var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
        enqueueUpdate(fiber, update);
        var eventTime = requestEventTime();
        var root = markUpdateLaneFromFiberToRoot(fiber, SyncLane);

        if (root !== null) {
          markRootUpdated(root, SyncLane, eventTime);
          ensureRootIsScheduled(root, eventTime);
        }

        return;
      }
    }

    fiber = fiber.return;
  }

  {
    // TODO: Until we re-land skipUnmountedBoundaries (see #20147), this warning
    // will fire for errors that are thrown by destroy functions inside deleted
    // trees. What it should instead do is propagate the error to the parent of
    // the deleted tree. In the meantime, do not add this warning to the
    // allowlist; this is only for our internal use.
    error('Internal React error: Attempted to capture a commit phase error ' + 'inside a detached tree. This indicates a bug in React. Likely ' + 'causes include deleting the same fiber more than once, committing an ' + 'already-finished tree, or an inconsistent return pointer.\} yTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = NoLane; // Default

  var retryCache;

  {
    switch (boundaryFiber.tag) {
      case SuspenseComponent:
        retryCache = boundaryFiber.stateNode;
        var suspenseState = boundaryFiber.memoizedState;

        if (suspenseState !== null) {
          retryLane = suspenseState.retryLane;
        }

        break;

      case SuspenseListComponent:
        retryCache = boundaryFiber.stateNode;
        break;

      default:
        throw new Error('Pinged unknown suspense boundary type. ' + 'This is probably a bug in React.');
    }
  }

  if (retryCache !== null) {
    // The wakeable resolved, so we no longer need to memoize, because it will
    // never be thrown again.
    retryCache.delete(wakeable);
  }

  retryTimedOutBoundary(boundaryFiber, retryLane);
} // Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates20 ? 4320 : ceil(timeElapsed / 1960) * 1960;
}

function checkForNestedUpdates() {
  if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
    nestedUpdateCount = 0;
    rootWithNestedUpdates = null;
    throw new Error('Maximum update depth exceeded. This can happen when a component ' + 'repeatedly calls setState inside componentWillUpdate or ' + 'componentDidUpdate. React limits the number of nested updates to ' + 'prevent infinite loops.');
  }

  {
    if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
      nestedPassiveUpdateCount = 0;

      error('Maximum update depth exceeded. This can happen when a component ' + "calls setState inside useEffect, but useEffect either doesn't " + 'have a dependency array, or one of the dependenciesht current.return;
        }
      }
    }
  }
}

var didWar      resetCurrentFiber();
      }
    }
  }
}

var beginWork$1;

{
  var dummyFiber = null;

  beginWork$1 = function (current, unitOfWork, lanes) {
    // If a component throws an error, we replay it again in a synchronously
    // dispatched event, so that the debugger will treat it as an uncaught
    // error See ReactErrorUtils for more information.
    // Before entering the begin phase, copy the work-in-progress onto a dummy
    // fiber. If beginWork throws, we'll use this to reset the state.
    var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);

    try {
      return beginWork(current, unitOfWork, lanes);
    } catch (originalError) {
      if (originalError !== null && typeof originalError === 'object' && typeof originalError.then === 'function') {
        // Don't replay promises. Treat everything else like an error.
        throw originalError;
      } // Keep this code in sync with handleError; any changes here must have
      // corresponding changes there.


      resetContextDependencies();
      resetHooksAfterThrow(); // Don't reset current debug fiber, since we're about to work on the
      // same fiber again.
      // Unwind the failed stack frame

      unwindInterruptedWork(current, unitOfWork); // Restore the original properties of the fiber.

      assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);

      if ( unitOfWork.mode & ProfileMode) {
        // Reset the profiler timer.
        startProfilerTimer(unitOfWork);
      } // Run beginWork again.


      invokeGuardedCallback(null, beginWork, null, current, unitOfWork, lanes);

      if (hasCaughtError()) {
        var replayError = clearCaughtError();

        if (typeof replayError === 'object' && replayError !== null && replayError._suppressLogging && typeof originalError === 'object' && originalError !== null && !originalError._suppressLogging) {
          // If suppressed, let the flag carry over to the original error which is the one we'll rethrow.
          originalError._suppressLogging = true;
        }
      } // We always throw the original error in case the second render pass is not idempotent.
      // This can happen if a memoized function or CommonJS module doesn't throw after first invocation.


      throw originalError;
    }
  };
}

var didWarnAboutUpdateInRender = false;
var didWarnAboutUpdateInRenderForAnotherComponent;

{
  didWarnAboutUpd  and a future one (e.g. SuspensCurtjs.org/link/wrap-tests-with-act');
    }
  }
}

/* eslint-disable react-internal/prod-error-codes */
var resolveFamily = null; // $FlowFixMe Flow gets confused by a WeakSet feature check below.

var failedBoundaries = null;
var setRefreshHandler = function (handementation.


    return family.current;
  }
}
function resolveClassForHotReloading(type) {
  // No implementation differences.
  
    }

    failedBounupdatedFamilies, stainer(element, root, null, null);
    });
  }
};

function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
  {
    var alternate = fiber.alternate,
        child = fiber.child,
        sibling = fiber.sibling,
        tag = fiber.tag,
        type = fiber.type;
    var candidateType = null;

    switch (tag) {
      case FunctionComponent:
      case SimpleMemoComponent:
      case ClassComponent:
        candidateType = type;
        break;

      case ForwardRef:
        candidateType = type.render;
        break;
    }

    if (resolveFamily === null) {
      throw new Error('Expected resolveFamily to be set during hot reload.');
    }

    var needsRender = false;
    var needsRemount = false;

    if (candidateType !== null) {
      var family = resolveFamily(candidateType);

      if (family !== undefined) {
        if (staleFamilies.has(family)) {
          needsRemount = true;
        } else if (updatedFamilies.has(family)) {
          if (tag === ClassComponent) {
            needsRemount = true;
          } else {
            needsRender = true;
          }
        }
      }
    }

    if (failedBoundaries !== null) {
      if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) {
        needsRemount = true;
      }
    }

    if (needsRemount) {
      fiber._debugNeedsRemount = true;
    }

    if (needsRemount || needsRender) {
      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    }

    if (child !== null && !needsRemount) {
      scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
    }

    if (sibling !== null) {
      scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
osl e = node.sibling;
    }
  }

  return false;
}

var hasBadMapPolyfill;

{
  hasBadMapPolyfill = false;

  try {
    var nonExtensibleObject = Object.preventExtensions({});
    /* eslint-disable no-new */

    new Map([[nonExtensibleObject, null]]);
    new Set([nonExtensibleObject]);
    /* eslint-enable no-new */
  } catch (e) {
    // TODO: Consider warning about bad    Object.preventExtensions(this);
    }
  }
} // This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implemnew FiberNode(tag, pendingProps, key, mode);
};

function shouldConstruct$1(Component) {
  var prototype = Component.prototype;
  return !
    }
  }

  return IndeterminateComponent;
} // This is use  break;
    }
  }

  return workInProgress;
eturn createFiber(HostRoot, null, null, mode);
}
function createFiberFromTypeAndProps(type, // React$ElementType
key, pendingProps, owner, mode, lanes) {
  var fiberTag = IndeterminateComponent; // The resolved type is set if we know what the final type will be. I.e. it's not lazy.

  var resolvedType = type;

  if (typeof type === 'function') {
    if (shouldConstruct$1(type)) {
      fiberTag = ClassComponent;

      {
        resolvedType = resolveClassForHotReloading(resolvedType);
      }
    } else {
      {
        resolvedType = resolveFunctionForHotReloading(resolvedType);
      }
    }
  } else if (typeof type === 'string') {
    fiberTag = HostComponent;
  } else {
    getTag: switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);

      case REACT_STRICT_MODE_TYPE:
        fiberTag = Mode;
        mode |= StrictLegacyMode;

        if ( (mode & ConcurrentMode) !== NoMode) {
          // Strict effects should never run on legacy roots
          mode |= StrictEffectsMode;
        }

        break;

      case REACT_PROFILER_TYPE:
        return createFiberFromProfiler(pendingProps, mode, lanes, key);

      case REACT_SUSPENSE_TYPE:
        return createFiberFromSuspense(pendingProps, mode, lanes, key);

      case REACT_SUSPENSE_LIST_TYPE:
        return createFiberFromSuspenseList(pendingProps, mode, lanes, key);

      case REACT_OFFSCREEN_TYPE:
        return createFiberFromOffscreen(pendingProps, mode, lanes, key);

      case REACT_LEGACY_HIDDEN_TYPE:

      // eslint-disable-next-line no-fallthrough

      case REACT_SCOPE_TYPE:

      // eslint-disable-next-line no-fallthrough

      case REACT_CACHE_TYPE:

      // eslint-disable-next-line no-fallthrough

      case REACT_TRACING_MARKER_TYPE:

      // eslint-disable-next-line no-fallthrough

      case REACT_DEBUG_TRACING_MODE_TYPE:

      // eslint-disable-next-line no-fallthrough

      default:
        {
          if (typeof type === 'object' && type !== null) {
            switch (type.$$typeof) {
              case REACT_PROVIDER_TYPE:
                fiberTag = ContextProvider;
                break getTag;

              case REACT_CONTEXT_TYPE:
                // This is a consumer
                fiberTag = ContextConsumer;
                break getTag;

              case REACT_FORWARD_REF_TYPE:
                fiberTag = ForwardRef;

                {
                  resolvedType = resolveForwardRefForHotReloading(resolvedType);
                }

                break getTag;

              case REACT_MEMO_TYPE:
                fiberTag = MemoComponent;
                break getTag;

              case REACT_LAZY_TYPE:
                fiberTag = LazyComponent;
                resolvedType = null;
                break getTag;
            }
          }

          var info = '';

          {
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
            }

            var ownerName = owner ? getComponentNameFromFiber(owner) : null;

            if (ownerName) {
              info += '\n\nCheck the render method of `' + ownerName + '`.';
            }
          }

          throw new Error('Element type is invalid: expected a string (for built-in ' + 'components) or a class/function (for composite components) ' + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
    }
  }

  var fiber = createFiber(fiberTag, pendingProps, key, mode);
  fiber.elementType = type;
  fiber.type = resolvedType;
  fiber.lanes = lanes;

  {
    f mode);
  fiber.lanes = lanes;
  return fiber;
}

function createFiberFromProfiler(pendingProps, mode, lanes, key) {
  {
    if (typeof pendingProps.id !== 'string') {
      error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof pendingProps.id);
    }
  }

  var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
  fiber.elementType = REACT_PROFILER_TYPE;
  fiber.lanes = lanes;

  {
    fiber.stateNode = {
      effectDuration: 0,
      passiveEffectDuration: 0
    };
  }

  return fiber;
}

function createFiberFromSuspense(pendingProps, mode, lanes, key) {
  var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
  fiber.elementType = REACT_SUSPENST_TYPE;
  fiber.lanes = lanes;
  return fiber;
}
function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
  var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
  fiber.elementType = REACT_OFFSCREEN_TYPE;
  fiber.lanes = lanes;
  var primaryChildInstance = {};
  fiber.staon: portal.implementation
  };
  return fiber;
} // Used for stashiprate()' : 'render()';
        break;
    }
  }
}

function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, // TODO: We have several of these arguments that are conceptually part of the
// host config, but because they are passed in at runtime, we have to thread
// them through the root constructor. Perhaps we should put them all into a
// single type, like a DynamicHostConfig that is defined by the renderer.
identifierPrefix, onRecoverableError, transitionCallbacks) {
  var root = new FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onRecoverableError);
  // stateNode is any.


  var uninitializedFiber = createHostRootFiber(tag, isStrictMode);
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;

  {
    var _initialState = {
      element: initialChildren,
      isDehydrated: hydrate,
      cache: null,
      // not enabled yet
      transitions: null
    };
    uninitializedFiber.memoizedState = _initialState;
  }

  initializeUpdateQueue(uninitializedFiber);
  return root;
}

rInfo,
    implementation: implementation
  };
}

var didWarnAboutNestedUpdates;
var didWarnAboutFindNodeInStrictMode;

{
  didWarnAboutNestedUpdates = fan erride, identifierPrefix, onRecoverableError);
}
function createHydrationContainer(initialChildren, // TODO: Remove `callback` when we delete legacy mode.
callback, containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
  var hydrate = true;
  var root = createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError); // TODO: Move this to FiberRoot constructor

  root.context = getContextForSubtree(null); // Schedule the initial render. In a hydration root, this is different from
  // a regular update because the initial render must match was was rendered
  // on the server.
  // NOTE: This update intentionally doesn't have a payload. We're only using
  // the update to schedule work on the root fiber (and, for legacy roots, to
  // enqueue the callback if one is provided).

  var current = root.current;
  var eventTime = requestEventTime();
  var lane = requestUpdateLane(current);
  var update = createUpdate(eventTime, lane);
  update.callback = callback !== undefined && callback !== null ? callback : null;
  enqueueUpdate(current, update);
  scheduleInitialHydrationOnRoot(root, lane, eventTime);
  return root;
}
function updateContainer(element, container, parentComponent, callback) {
  {
    onScheduleRoot(container, element);
  }

  var current$1 = container.current;
  var eventTime = requestEventTime();
  var lane = requestUpdateLane(current$1);

  {
    markRenderScheduled(lane);
  }

  var context = getContextForSubtree(parentComponent);

  if (container.context === null) {
    container.context = context;
  } else {
    container.pendingContext = context;
  }

  {
    if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
      didWarnAboutNestedUpdates = true;

      error('Render methods should be a pure function of props and state; ' + 'triggering nested component updates from render is not allowed. ' + 'If necessary, trigger nested updates in componentDidUpdate.\n\n' + 'Check the render method of %s.', getComponentNameFromFiber(current) || 'Unknown');
    }
  }

  var update = createUpdate(eventTime, lane); // Caution: React DevTools currently depends on this property
  // being called "element".

  update.payload = {
    element: element
  };
  callback = callback === undefined ? null : callback;

  if (callback !== null) {
    {
      if (typeof callback !== 'function') {
        error('render(...): Expected the last optional `callback` argument to be a ' + 'function. Instead received: %s.', callback);
      }
    }

    update.callback = callback;
  }

  enqueueUpdate(current$1, update);
  var root = scheduleUpdateOnFiber(current$1, lane, eventTime);

  if (root !== null) {
    entangleTransitio    return containerFiber.child.stateNode;
  }
}
function attemptSynchronousHydration$1(fiber) {
  switch (fiber.tag) {
    case HostRoot:
      var root = fiber.stateNode;

      if (isRootDehydrated(root)) {
        // Flush the first scheduled "update".
        var lanes = getHighestPriorityPendingLanes(root);
        flushRoot(root, lanes);
      }

      break;

    case SuspenseComponent:
      vardateOnFiber(fiber, SyncLane, eventTime);
      }); // If we're still blocked after this, we need to increase
      // the priority of any promises resolving within this
      // boundary so that they next attempt also has higher pri.

      var retryLane = SyncLane;
      markRetryLaneIfNoyLane(suspenseState.retryLane, retryLane);
  }
} // Increases the priority of the  markRetryLaneImpl(alternate, retryLane);
  }
}

function attemptContinuousHydration$1(fiber) {
  if (fiber.tag !== SuspenseComponent) {
    // We ignore HostRoots here because we can't increase
    // their priority and they should not suspend on I/O,
    // since you have to wrap anything that might suspend in
    // Suspense.
    return;
  }

  var eventTime = requestEventTime();
  var lane = SelectiveHydrationLane;
  scheduleUpdateOnFiber(fiber, lane, eventTime);
  markRetryLaneIfNotHydrated(fiber, lane);
}
function attemptHydrationAtCurrentPriority$1(fiber) {
  if (fiber.tag !== SuspenseComponent) {
    // We ignore HostRoots here because we can't increase
    // their priority other than synchronously flush it.
    return;
  }

  var eventTime = requestEventTime();
  var lane = requestUpdateLane(fiber);
  scheduleUpdateOnFiber(fiber, lane, eventTime);
  markRetryLaneIfNotHydrated(fiber, lane);
}
function findHostInstanceWithNoPortals(fiber) {
  var hostFiber = findCurrentHostFiberWithNoPortals(fiber);

  if (hostFiber === null) {
    return null;
  }

  return hostFiber.stateNode;
}

var shouldErrorImpl = function (fiber) {
  return null;
};

function shouldError(fiber) {
  return shouldErrorImpl(fiber);
}

var shouldSuspendImpl = function (fiber) {
  return false;
};

function shouldSuspend(fiber) {
  return shouldSuspendImpl(fiber);
}
var overrideHookState = null;
var overrideHookStateDeletePath = null;
var overrideHookStateRenamePath = null;
var overrideProps = null;
var overridePropsDeletePath = null;
var overridePropsRenamePath = null;
var scheduleUpdate = null;
var setErrorHandler = null;
var setSuspenseHandler = null;

{
  var copyWithDeleteImpl = function (obj, path, index) {
    var key = path[index];
    var updated = isArray(obj) ? obj.slice() : assign({}, obj);

    if (index + 1 === path.length) {
      if (isArray(updated)) {
        updated.splice(key, 1);
      } else {
        delete updated[key];
      }

      return updated;
    } // $FlowFixMe number or string is fine here


    updated[key] = copyWithDeleteImpl(obj[key], path, index + 1);
    return copyWithDeleteImpl(obj, path, 0);
  };

  var copyWithRenameImpl = function (obj, oldPath, newPath, index) {
    var oldKey = oldPath[index];
    var updated = isArray(obj) ? obj.slice() : assign({}, obj);

    if (index + 1 === oldPath.length) {
      var newKey = newPath[index]; // $FlowFixMe number or string is fine here

      updated[newKey] = updated[oldKey];

      if (isArray(updated)) {
        updated.splice(oldKey, 1);
      } else {
        delete updated[oldKey];
      }
    } else {
      // $FlowFixMe number or string is fine here
      updated[oldKey] = copyWithRenameImpl( // $FlowFixMe number or string is fine here
      obj[oldKey], oldPath, newPath, index + 1);
    }

    return updated;
  };

  var copyWithRename = function (obj, oldPath, newPath) {
    if (oldPath.length !== newPath.length) {
      warn('copyWithRename() expects paths of the same length');

      return;
    } else {
      for (var i = 0; i < newPath.length - 1; i++) {
        if (oldPath[i] !== newPath[i]) {
          warn('copyWithRename() expects paths to be the same except for the deepest key');

          return;
        }
      }
    }

    return copyWithRenameImpl(obj, oldPath, newPath, 0);
  };

  var copyWithSetImpl = function (obj, path, index, value) {
    if (index >= path.length) {
      return value;
    }

    var key = path[index];
    var updated = isArray(obj) ? obj.slice() : assign({}, obj); // $FlowFixMe number or string is fine here

    updated[key] = copyWithSetImpl(obj[key], path, index + 1, valuereturn copyWithSetImpl(obj, path, 0, value);
  };

  var findHook = function (fiber, id) {
    // For now, the "id" of stateful hooks is just the stateful hook index.
    // This may change in the future with e.g. nested hooks.
    var currentHook = fiber.memoizedState;

    while (currentHook !== null && id > 0) {
      currentHook = currentHook.next;
      id--;
    }

    return currentHook;
  }; // Support DevTools editable values for useState and useReducer.


  overrideHookState = function (fiber, id, path, value) {
    var hook = findHook(fiber, id);

    if (hook !== null) {
      var newState = copyWithSet(hook.memoizedState, path, value);
      hook.memoizedState = newState;
      hook.baseState = newState; // We aren't actually adding an update to the queue,
      // because there is no update we can add for useReducer hooks that won't trigger an error.
      // (There's no appropriate action type for DevTools overrides.)
      // As a result though, React will see the scheduled update as a noop and bailout.
      // Shallow cloning props works as a workaround for now to bypass the bailout check.

      fiber.memoizedProps = assign({}, fiber.memoizedProps);
      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    }
  };

  overrideHookStateDeletePath = function (fiber, id, path) {
    var hook = findHook(fiber, id);

    if (hook !== null) {
      var newState = copyWithDelete(hook.memoizedState, path);
      hook.memoizedState = newState;
      hook.baseState = newState; // We aren't actually adding an update to the queue,
      // because there is no update we can add for useReducer hooks that won't trigger an error.
      // (There's no appropriate action type for DevTools overrides.)
      // As a result though, React will see the scheduled update as a noop and bailout.
      // Shallow cloning props works as a workaround for now to bypass the bailout check.

      fiber.memoizedProps = assign({}, fiber.memoizedProps);
      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    }
  };

  overrideHookStateRenamePath = function (fiber, id, oldPath, newPath) {
    var hook = findHook(fiber, id);

    if (hook !== null) {
      var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
      hook.memoizedState = newState;
      hook.baseState = newState; // We aren't actually adding an update to the queue,
      // because there is no update we can add for useReducer hooks that won't trigger an error.
      // (There's no appropriate action type for DevTools overrides.)
      // As a result though, React will see the scheduled update as a noop and bailout.
      // Shallow cloning props works as a workaround for now to bypass the bailout check.

      fiber.memoizedProps = assign({}, fiber.memoizedProps);
      scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
    }
  }; // Support DevTools props for function components, forwardRef, memo, host components, etc.


  overrideProps = function (fiber, path, value) {
    fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);

    if (fiber.alternate) {
      fiber.alternate.pendingProps = fiber.pendingProps;
    }

    scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
  };

  overridePropsDeletePath = function (fiber, path) {
    fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);

    if (fiber.alternate) {
      fiber.alternate.pendingProps = fiber.pendingProps;
    }

    scheduleUpdateOnFiber(fiber, SyncLane, NoTimestamp);
  };

  overridePropsRenamePath = function (fiber, oldPath, newPath) {
    fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);

    if (fiber.alternate) {
      fiber.alternate.pendingProps = fiber.pendingProps;
    }

    scheduleUpdateOnFiber(fiber, UpdateOnFiber(fiber, SyncLane, NoTimestamp);
  };

  setErrorHandler = function (newShouldErrorImpl) {
    shouldErrorImpl =    seFiberByHostInstance(instance) {
  return null;
}

function geters.
    reconcilerVersion: ReactVersion
  });
}

/* global reportError */

var defaultOnRecoverableError = typeof reportError === 'function' ? // In modern browsers, reportError will dispatch an error event,
// emula-production-logging
  console['error'](error);
};

function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}

ReactDOMHydrationRoot.pr  updateContainer(children, root, null, null);
};

ReactDOMHydrationRoot.prot });
    unmarkContainerAsRoot(container);
  }
};

function createRoot(container, options) {
  if (!isValidContainer(container)) {
    throw new Error('createRoot(...): Target container is not a DOM element.');
  }

  warnIfReactDOMContainerInDEV(container);
  var isStrictMode = false;
  var concurrentUpdatesByDefaultOverride = false;
  var identifierPrefix = '';
  var onRecoverableError = defaultOnRecoverableError;
  var transitionCallbacks = null;

  if (options !== null && options !== undefined) {
    {
      if (options.hydrate) {
        warn('hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.');
      } else {
        if (typeof options === 'object' && options !== null && options.$$typeof === REACT_ELEMENT_TYPE) {
          error('You passed a JSX element to createRoot. You probably meant to ' + 'call root.render instead. ' + 'Example usage:\n\n' + '  let root = createRoot(domContainer);\n' + '  root.render(<App />);');
        }
      }
    }

    if (options.unstable_strictMode === true) {
      isStrictMode = true;
    }

    if (options.identifierPrefix !== undefined) {
      identifierPrefix = options.identifierPrefix;
    }

    if (options.onRecoverableError !== undefined) {
      onRecoverableError = options.onRecoverableError;
    }

    if (options.transitionCallbacks !== undefined) {
      transitionCallbacks = options.transitionCallbacks;
    }
  }

  var root = createContainer(container, ConcurrentRoot, null, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
  markContainerAsRoot(root.current, container);
  var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
  listenToAllSupportedEvents(rootContaia
    queueExplicitHydrationTarget(target);
  }
}

ReactDOMHydrationRoot.prototypeT_NODE || !disableCommentsAsDOMContainers  ));
} // TODO: Remove this function which also includes comment nodes.
// We only usoif you want to update it.');
      }
    }
  }
}

var ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner;
var topLevelUpdateWarnings;

{
  topLevelUpdateWarnings = function (container) {
    if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
      var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer.current);

      if (hostInstance) {
        if (hostInstance.parentNode !== container) {
          error('render(...): It looks like the React-rendered content of this ' + 'container was removed without using React. This is not ' + 'supported and will cause errors. Instead, call ' + 'ReactDOM.unmountComponentAtNode to empty a container.');
        }
      }
    }

    var isRootRenderedBySomeReact = !!container._reactRootContainer;
    var rootEl = getReactRootElementInContainer(container);
    var hasNonRootReactChild = !!(rootEl && getInstanceFromNode(rootEl));

    if (hasNonRootReactChild && !isRootRenderedBySomeReact) {
      error('render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.');
    }

    if (container.nodeType === ELEMENT_NODE && container.tagName && container.tagName.toUpperCase() === 'BODY') {
      error('render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container ele } else {
    return container.firstChild;
  }
}

function noopOnRecoverableError() {// This isn't reachable because onRecoverableError isn't called in the
  // legacy API.
}

function legacyCreateRootFromDOMContainer(container, initialChildren, parentComponent, callback, isHydrationContainer) {
  if (isHydrationContainer) {
    if (typeof callback === 'function') {
      var originalCallback = callback;

      callback = function () {
        var instance = getPublicRootInstance(root);
        originalCallback.call(instance);
      };
    }

    var root = createHydrationContainer(initialChildren, callback, container, LegacyRoot, null, // hydrationCallbacks
    false, // isStrictMode
    false, // concurrentUpdatesByDefaultOverride,
    '', // identifierPrefix
    noopOnRecoverableError);
    container._reactRootContainer = root;
    markContainerAsRoot(root.current, container);
    var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
    listenToAllSupportedEvents(rootContainerElement);
    flushSync();
    return root;
  } else {
    // First clear any existing content.
    var rootSibling;

    while (rootSibling = container.lastChild) {
      container.removeChild(rootSibling);
    }

    if (typeof callback === 'function') {
      var _originalCallback = callback;

      callback = function () {
        var instance = getPublicRootInstance(_root);

        _originalCallback.call(instance);
      };
    }

    var _root = createContainer(container, LegacyRoot, null, // hydrationCallbacks
    false, // isStrictMode
    false, // concurrentUpdatesByDefaultOverride,
    '', // identifierPrefix
    noopOnRecoverableError);

    container._reactRootContainer = _root;
    markContainerAsRoot(_root.current, container);

    var _rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;

    listenToAllSupportedEvents(_rootContainerElement); // Iniildren, _root, parentComponceived: %s.', callerName, callback);
    }
  }
}

function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
  {
    topLevelUpdateWarnings(container);
    warnOnInvalidCallback$1(callback === undefined ? null : callback, 'render');
  }

  var maybeRoot = container._reactRootContainer;
  var root;

  if (!maybeRoot) {
    // Initial mount
    root = legacyCreateRootFromDOMContainer(container, children, parentComponent, callback, forceHydrate);
  } else {
    root = maybeRoot;

    if (typeof callback === 'function') {
      va        originalCallback.call(instance);
      };
    } // Update


    updateContainer(children, root, parentComponent, callbackarning(componentOrElement, 'findDOMNode');
  }
}
function hydrate(element, container, callback) {
  {
    error('ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot ' + 'instead. Until you switch to the new API, your app will behave as ' + "if it's running React 17. Learn " + 'more: https://reactjs.org/link/switch-to-createroot');
  }

  if (!isValidContainerLegacy(container)) {
    throw new Error('Target container is not a DOM element.');
  }

  {
    var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;

    if (isModernRoot) {
      error('You are calling ReactDOM.hydrate() on a container that was previously ' + 'passed to ReactDOMClient.createRoot(). This is not supported. ' + 'Did you mean to call hydrateRoot(container, element)?');
    }
  } // TODO: throw or warn if we couldn't hydrate?


  return legacyRenderSubtreeIntoContaionent.');
      }
    }

    return false;
  }
}

setAttemptSynchronousHydration(attemptSynchronousHydration$1);
setAttemptContinuousHydration(attemptContinuousHydration$1);
setAttemptHydrationAtCurrentPriority(attemptHydrationAtCurrentPriority$1);
setGetCurrentUpdatePriority(getCurrentUpdatePriority);
setAttemptHydrationAtPriority(runWithPriority);

{
  if (typeof Map !== 'function' || // $FlowIssue Flow incorrectly thinks Map has no prototype
  Map.prototype == null || typeof Map.prototype.forEach !== 'function' || typeof Set !== 'function' || // $FlowIssue Flow incorrectly thinks Set has no prototype
  Set.prototype == null || typeof Set.prototype.clear !== 'function' || typeof Set.prototype.forEach !== 'function') {
    error('React depends on Map and Set built-in types. Make sure that you load a ' + 'polyfill in older browsers. https://reactjs.org/link/react-polyfills');
  }
}

setRestoreImplementation(restoreControlledState$3);
setBatchingImplementation tComponent, element, containerNode, callback);
}

var Internals = {
  usingClientEntryPoint: false,
  // Keep in sync with ReactTestUtils.js.
  // This is an array for better minification.
  Events: [getInstanceFromNode, getNodeFromInstance, getFiberCurrentPropsFromNode, enqueueStateRestore, restoreStateIfNeeded, batchedUpdates$1]
};

function createRoot$1(container, options) {
  {
    if (!Internals.usingClientEntryPoint) {
      error('You are importing createRoot from "react-dom" which is not supported. ' + 'You should instead import it from "react-dom/client".');
    }
  }

  return createRoot(container, options);
}

function hydrateRoot$1(container, initialChildren, options) {
  {
    if (!Internals.usingClientEntryPoint) {
      error('You are importing hydrateRoot from "react-dom" which is not supported. ' + 'You should instead import it from "react-dom/client".');
    }
  }

  return hydrateRoot(container, initialChildren, options);
} // Overload the definition to the two valid signatures.
// Warning, this opts-out of checking the function ro task.');
    }
  }

  return flushSync(fn);
}
var foundDevTools = injectIntoDevTools({
  findFiberByHostInstance: getClosestInstanceFromNode,
  bundleType:  1 ,
  version: ReactVersion,
  rendererPackageName: 'react-dom'
});

{
  if (!foundDevTools && canUseDOM && window.top === window.self) {
    // If we're in Chrome or Firefox, provide a download link if not installed.
    if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
      var protocol = window.location.protocol; // Don't warn in exotic cases like chrome-extension://.

      if (/^(https?|file):$/.test(protocol)) {
        // eslint-disable-next-line react-internal/no-production-logging
        console.info('%cDownload the React DevTools ' + 'for a better development experience: ' + 'https://reactjs.org/link/react-devtools' + (protocol === 'file:' ? '\nYou might need to use a local HTTP server (instead of file://): ' + 'https://reactjs.org/link/react-devtools-faq' : ''), 'font-weight:bold');
      }
    }
  }
}

exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
exports.createPortal = createPortal$1;
exports.createRoot = createRoot$1;
exports.findDOMNode = findDOMNode;
exports.flushSync = flushSync$1;
exports.hydrate = hydrate;
exports.hydrateRoot = hydrateRoot$1;
exports.render = render;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.unstable_batchedUpdates = batchedUpdates$1;
exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \**ClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*-dom/cjs/react-dom.development.js");
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directisValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \ct-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.0.0-fc46dba67-20220329';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.it
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurre {
  {
    currentExtraStackFrame = stack;
  }
}

      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = nuck += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

     p(console[level], console, argsWithFormat);
  }
}

vaeForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwiseunction (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the pub {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 ate(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @peueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues;

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component whis.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

//ject.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe onltructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only  lName + "(" + functionName + ")" : wrapperName;
} // Keep in sync wype) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally pref-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }

    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAbbgRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other in.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reowner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://rt.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} Trull && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be esup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = xt.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manuan'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Ontext, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 ++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*/ Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.ornction (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReeurrentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pu   }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_R
 
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  ();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return disppatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispre(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGed;
var prevGroupEnd;

function disabledg in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactShaframes.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
 nncatch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1etse {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShowndmndum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 *+ parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @par    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @Type);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by therty named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragmedatePropTypes(element);
  }

  return element;
}
ation._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMes };
    }
  }

  return enqueueTaskImpl(task);
}

var a; } else {
      resolve(ret
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var enableSchedulerDebugging = false;
var rhdex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

function markTaskErrored(task, ms) {
}

/* eslint-disable no-var */

var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerftion () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialT {
    return localDate.now() - initialTime;
  };
} // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111


var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.

var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;
var localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom

var isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isteierrorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return new true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var isMessageLoopRunning = false;
var scheduledHostCallback = null;
var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
// thread, like user events. By default, it yields multiple times per frame.
// It does not attempt to align with frame boundaries, since most tasks don't
// need to be frame aligned; for those that do, use requestAnimationFrame.

var frnegligible amount of time. We

ramerate
    frameInterval = frameYieldMs;
  }
}

var performWorkUntilDeadline = function () {
  if (scheduledHostCallback !== null) {
    var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread
    // has been blocked.

    startTime = currentTime;
    var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the
    // error can be observed.
    //
    // Intentionally not using a try-catch, since that makes some debugging
    // techniques harder. Instead, if `scheduledHostCallback` errors, then
    // `hasMoreWork` will remain true, and we'll continue the work loop.

    var hasMoreWork = true;

    try {
      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
    } finally {
      if (hasMoreWork) {
        // If there's more work, schedule the next message event at the end
        // of the preceding one.
        schedulePerformWorkUntilDeadline();
      } else {
        isMessageLoopRunning = false;
        scheduledHostCallback = null;
      }
    }
  } else {
    isMessageLoopRunning = false;
  } // Yielding to the browser will give it a chance to paint, so we can
};

var schedulePerformWorkUntilDeadline;

if (typeof localSetImmediate === 'function') {
  // Node.js and old IE.
  // There's a few reasons for why we prefer setImmediate.
  //
  // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
  // (Even though this is a DOM fork of the Scheduler, you could get here
  // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
  // https://github.com/facebook/react/issues/20756
  //
  // But also, it runs earlier which is the semantic we want.
  // If other browsers ever implement it, it's better to use it.
  // Although both of these would be inferior to native scheduling.
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
} else if (typeof MessageChannel !== 'undefined') {
  // DOM and Worker environments.
  // We prefer MessageChannel because of the 4ms setTimeout clamping.
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUnti = function () {
    port.postMessage(null);
  };
} else {
  // We should only fallback here in non-browser enocale rTimeout(taskTimeoutID);
  taskTimeoutID = -1;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_forceFrameRate = forceFrameRate;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = unstable_wrapCallback;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* bindins(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _aper() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding ;
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* bindinrror("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__   writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /*  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* bindintotypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding *cts must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/rWEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* bindinreturn o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babjs__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babeljs__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /pe ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@bCK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpak_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("../../lib/bundles/FrontofficeBundle/Resources/public/js/React/favorisWrapper.js"));
/******/ }
]);
//# sourceMappingURL=favoris.js.map