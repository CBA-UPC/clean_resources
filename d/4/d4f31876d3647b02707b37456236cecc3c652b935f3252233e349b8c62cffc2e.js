(()({1:[function(require,module,exports){
"use strict";

var _gamemonkeySdk = require("./gamemonkey-sdk");

window.GamedockSDK = _gamemonkeySdk.GameMonkeySdk;
window.GameMonkeySdk = _gamemonkeySdk.GameMonkeySdk;
window.GameMonkeyEnv = _gamemonkeySdk.Env;
},{"./gamemonkey-sdk":4}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSending = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _responseEvent = require("./response-event");

var DataSending = /*#__PURE__*/function () {
  function DataSending(url) {
    (0, _classCallCheck2.default)(this, DataSending);
    (0, _defineProperty2.default)(this, "_url", null);
    this._url = url;
  }

  (0, _createClass2.default)(DataSending, [{
    key: "error",
    value: function error(event, xmlHttp) {
      var jsonResponse = {},
          strResponse = xmlHttp.responseText;

      try {
        jsonResponse = JSON.parse(xmlHttp.responseText);
      } catch (e) {
        console.log("Error response is not a json string");
      } finally {
        if (jsonResponse["errors"]) {
          console.error("The request had an error", jsonResponse["errors"]);
        }

        if (jsonResponse["details"]) {
          strResponse = jsonResponse["details"];
        }
      }

      return Error("Event ".concat(event.name, " failed to be sent with status ").concat(xmlHttp.status, " and reason \"").concat(strResponse, "\""));
    }
  }, {
    key: "url",
    get:   }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(event) {
        var _this = this;

        var final_url;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(`Sending event ${event.name} with params `, event.data);
                final_url = this.url + event.name;
                console.log('sending:', event);
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  var xmlHttp = new XMLHttpRequest();
                  xmlHttp.open("POST", final_url, true);

                  xmlHttp.onload = function () {
                    if (xmlHttp.readyState === 4 && (xmlHttp.status === 200 || xmlHttp.status === 204)) {
                      // console.log(`Event ${event.name} sent successfully, params:`, JSON.stringify(event.data));
                      var responseEvent = new _responseEvent.ResponseEvent(xmlHttp.responseText);
                      resolve(responseEvent);
                    } else {
                      reject(_this.error(event, xmlHttp));
                    }
                  };

                  xmlHttp.onerror = function () {
                    reject(_this.error(event, xmlHttp));
                  };

                  xmlHttp.onabort = function () {
                    reject(_this.error(event, xmlHttp));
                  };

                  xmlHttp.ontimeout = 

                  xmlHttp.send(JSON.stringify(event.data));
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      
      return send;
    }()
  }]);
  return DataSending;
}();

exports.DataSending = DataSending;
},{"./response-event":5,"@babel/runtime/helpers/asyncToGenerator":10,"@babel/runtime/helpers/classCallCheck":11,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/defineProperty":13,"@babel/runtime/helpers/interopRequireDefault":14,"@babel/runtime/regenerator":19}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Event = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Event = /*#__PURE__*/function () {
  function Event(name, data) {
    (0, _classCallCheck2.default)(this, Event);
    (0, _defineProperty2.default)(this, "name", "");
    (0, _defineProperty2.default)(this, "data", {});
    this.name = name;
    this.addCustomParameters(data);
  }

  (0, _createClass2.default)(Event, [{
    key: "addCustomParameter",
    value:   }, {
    key: "addCustomParameters",
    value: function addCustomParameters(parameters) {
      for (var _i = 0, _Object$entries = Object.entries(parameters); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0, _slicedToArray2.default)(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        this.data[key] = value;
      }

      return this;
    }
  }]);
  return Event;
}();

exports.Event = Event;
},{"@babel/runtime/helpers/classCallCheck":11,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/defineProperty":13,"@babel/runtime/helpers/interopRequireDefault":14,"@babel/runtime/helpers/slicedToArray":17}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameMonkeySdk = exports.Env = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _visitor = require("./visitor");

var _tracking = require("./tracking");

var _dataSending = require("./data-sending");

var documentationUrl = "https://tracker.gamedock.io/v1/events-tracker/track_config/";
var GcpEnv;

(function (GcpEnv) {
  GcpEnv[GcpEnv["https://tracker-stg.gamedock.io/v1/events-tracker/track/"] = 0] = "https://tracker-stg.gamedock.io/v1/events-tracker/track/";
  GcpEnv[GcpEnv["https://tracker.gamedock.io/v1/events-tracker/track/"] = 1] = "https://tracker.gamedock.io/v1/events-tracker/track/";
})(GcpEnv || (GcpEnv = {}));

var AwsEnv;

(function (AwsEnv) {
  AwsEnv[AwsEnv["https://tracker-stg.gamemonkey.org/v1/gamemonkey/track/"] = 0] = "https://tracker-stg.gamemonkey.org/v1/gamemonkey/track/";
  AwsEnv[AwsEnv["https://tracker.gamemonkey.org/v1/gamemonkey/track/"] = 1] = "https://tracker.gamemonkey.org/v1/gamemonkey/track/";
})(AwsEnv || (AwsEnv = {}));

var Env;
exports.Env = Env;

((Env || (exports.Env = Env = {}));

var GameMonkeySdk = /*#__PURE__*/function () {
  /**
   *
   * @param orgId String the Organization id
   * @param domainId String The domain Id
   * @param environment ('STG'|'PRD') The environment
   */
  function GameMonkeySdk(orgId, domainId) {
    var environment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Env.PRD;
    (0, _classCallCheck2.default)(this, GameMonkeySdk);
    (0, _defineProperty2.default)(this, "environment", Env.PRD);
    this.visitor = new _visitor.Visitor(orgId);
    this.orgId = orgId;
    this.domainId = domainId;
    this.tracking = new _tracking.Tracking([new _dataSending.DataSending(AwsEnv[environment] + this.orgId + '/')], this.visitor, this.domainId);
  }

  (0, _createClass2.default)(GameMonkeySdk, [{
    key: "documentation",
    value: function documentation() {
      window.open(documentationUrl + this.orgId);
    }
  }], [{
    key: "initialize",
    value: function initialize(orgId, domainId, environment) {
      var instanceKey = {
        orgId: orgId,
        domainId: domainId
      };

      if (!GameMonkeySdk.instances.has(instanceKey)) {
        GameMonkeySdk.instances.set(instanceKey, new GameMonkeySdk(orgId, domainId, environment));
      }

      return GameMonkeySdk.instances.get(instanceKey);
    }
  }]);
  return GameMonkeySdk;
}();

exports.GameMonkeySdk = GameMonkeySdk;
(0, _defineProperty2.default)(GameMonkeySdk, "instances", new WeakMap());
},{"./data-sending":2,"./tracking":6,"./visitor":7,"@babel/runtime/helpers/classCallCheck":11,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/defineProperty":13,"@babel/runtime/helpers/interopRequireDefault":14}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponseEvent = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var ResponseEvent = /*#__PURE__*/(0, _createClass2.default)(function ResponseEvent(rawData) {
  (0, _classCallCheck2.default)(this, ResponseEvent);
  (0, _defineProperty2.default)(this, "rawData", null);
  this.rawData = rawData;
});
exports.ResponseEvent = ResponseEvent;
},{"@babel/runtime/helpers/classCallCheck":11,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/defineProperty":13,"@babel/runtime/helpers/interopRequireDefault":14}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tracking = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _event = require("./event");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Tracking = /*#__PURE__*/function () {
  function Tracking(dispatchers, visitor, domainId) {
    (0, _classCallCheck2.default)(this, Tracking);
    (0, _defineProperty2.default)(this, "dispatchers", null);
    (0, _defineProperty2.default)(this, "visitor", null);
    (0, _defineProperty2.default)(this, "heartBeatData", null);
    (0, _defineProperty2.default)(this, "timeOutId", -1);
    (0, _defineProperty2.default)(this, "timeoutIterator", 0);
    (0, _defineProperty2.default)(this, "heartbeatConfig", [1 * 60 * 1000, // First heartbeat after 1 minute
    4 * 60 * 1000, // Second after 5 minutes
    5 * 60 * 1000, // then after 10 minutes
    5 * 60 * 1000, // and after 15 minutes
    5 * 60 * 1000, // and after 20 minutes
    10 * 60 * 1000 // The remainder of the session we'll use a 10 minute interval
    ]);
    (0, _defineProperty2.default)(this, "defaultData", {
      domainId: null
    });
    this.dispatchers = dispatchers;
    this.visitor = visitor;
    this.defaultData.domainId = domainId;
    console.log(dispatchers);
  }

  (0, _createClass2.default)(Tracking, [{
    key: "getEventData",
    value: function getEventData(eventData) {
      return _objectSpread(_objectSpread(_objectSpread({}, this.visitor.visitorData), {}, {
        timeOnPage: this.visitor.timeOnPage
      }, this.defaultData), eventData);
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this = this;

      if (null === this.heartBeatData) {
        return;
      }

      this.timeOutId = setTimeout( this.heartbeatConfig[Math.min(this.timeoutIterator, this.heartbeatConfig.length - 1)]);
      this.timeoutIterator++;
    }
  }, {
    key: "enableHeartBeatForPage",
    value: function enableHeartBeatForPage(data, heartBeatConfig) {
      //We don't want to enable twice, so let's clear everything and start a new one;
      clearTimeout(this.timeOutId);
      this.timeoutIterator = 0;
      this.heartBeatData = data; // Let's make sure every item in the config is a number, if it is; overwrite the default

      if (heartBeatConfig.every() {
        this.heartbeatConfig = heartBeatConfig;
      }

      this.tick();
    }
  }, {
    key: "trackEvent",
    value: function () {
      var _trackEvent = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(eventName, data) {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", Promise.all(this.dispatchers.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(dispatcher) {
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", dispatcher.send(new _event.Event(eventName, _this2.getEventData(data))));

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return 
                }())));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      
      return trackEvent;
    }()
  }]);
  return Tracking;
}();

exports.Tracking = Tracking;
},{"./event":3,"@babel/runtime/helpers/asyncToGenerator":10,"@babel/runtime/helpers/classCallCheck":11,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/defineProperty":13,"@babel/runtime/helpers/interopRequireDefault":14,"@babel/runtime/regenerator":19}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visitor = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));



var storageName = '_gdwt';
var sessionDuration = 30 * 60 * 1000; // 30 minutes

var Visitor = /*#__PURE__*/function () {
  function Visitor(orgId) {
    (0, _classCallCheck2.default)(this, Visitor);
    (0, _defineProperty2.default)(this, "focusStart", 0);
    (0, _defineProperty2.default)(this, "orgId", '');
    (0, _defineProperty2.default)(this, "_timeOnPage", 0);
    this.orgId = orgId;
    var data = localStorage.getItem(this.storageName),
        visitorData = {},
        startNewSession = false;

    try {
      visitorData = JSON.parse(data) || {};
    } catch (e) {}

    if (!visitorData.hasOwnProperty('visitorId')) {
      visitorData.visitorId = Visitor.generateUUID();
    }

    if (visitorData.hasOwnProperty('sessionEnd') && visitorData.sessionEnd) {
      startNewSession = Date.now() - visitorData.sessionEnd > sessionDuration;
    }

    if (!visitorData.hasOwnProperty('sessionStart')) {
      visitorData.sessionStart = Date.now();
    }

    if (!visitorData.hasOwnProperty('sessionId') || startNewSession) {
      visitorData.sessionId = Visitor.generateUUID();
      visitorData.sessionStart = Date.now();
      visitorData.pageInSession = 0;
    }

    visitorData.pageInSession += 1;
    this.visitorData = visitorData;
    this.focusStart = Date.now();
    this.save();
    window.addEventListener('beforeunload', this.unload.bind(this));
    document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this), false);
  }

  (0, _createClass2.default)(Visitor, [{
    key: "storageName",
    get:   }, {
    key: "timeOnPage",
    get: function get() {
      return Math.floor((this._timeOnPage + (Date.now() - this.focusStart)) / 1000);
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(_objectSpread({}, this.visitorData));
    }
  }, {
    key: "unload",
    value:   }, {
    key: "save",
    value:   }, {
    key: "focusOut",
    value: function focusOut() {
      this._timeOnPage += Date.now() - this.focusStart;
    }
  }, {
    key: "focusIn",
    value:   }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      if (document.hidden) {
        this.focusOut();
      } else {
        this.focusIn();
      }
    }
  }], [{
    key: "generateUUID",
    value: function generateUUID() {
      var crypto = window.crypto || window.msCrypto;

      if (crypto === undefined) {
        return this.generateUUIDWithoutCrypto();
      } // @ts-ignore


      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, ;
    }
  }, {
    key: "generateUUIDWithoutCrypto",
    value: function generateUUIDWithoutCrypto() {
      var d = new Date().getTime(),
          d2 = performance && performance.now && performance.now() * 1000 || 0;
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, ;
    }
  }]);
  return Visitor;
}();

exports.Visitor = Visitor;
},{"@babel/runtime/helpers/classCallCheck":11,"@babel/runtime/helpers/createClass":12,"@babel/runtime/helpers/defineProperty":13,"@babel/runtime/helpers/interopRequireDefault":14}],8:[function(require,module,exports){

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],9:[function(require,module,exports){

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],10:[{}],11:[{}],12:[{}],13:[function(require,module,exports){

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],14:[{}],15:[function(require,module,exports){

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],16:[function(require,module,exports){

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],17:[{"./arrayWithHoles.js":9,"./iterableToArrayLimit.js":15,"./nonIterableRest.js":16,"./unsupportedIterableToArray.js":18}],18:[{"./arrayLikeToArray.js":8}],19:[{"regenerator-runtime":20}],20:[{}]},{},[1]);
