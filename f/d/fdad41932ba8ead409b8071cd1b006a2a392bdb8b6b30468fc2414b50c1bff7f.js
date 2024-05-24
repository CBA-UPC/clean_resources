/******/ (
/************************************************************************/
/******/ ({

/***/ "./config/events/ad/game-banner/cleanup.js":
/*!*************************************************!*\
  !*** ./config/events/ad/game-banner/cleanup.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Malte Bjarki Mohrmann <malte.mohrmann@softgames.de> on 2020-08-19.
 * Copyright © Softgames 2020 - present
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][GAME-BANNER-CLEANUP]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    adContainerId: {
      isMandatory: true,
      rule: 'adContainerId must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    callback: {
      isMandatory: false,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
      try {
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }, {
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        console.log('triggering window.SG.trigger');
        window.SG.trigger({
          type: 'gameBanner.cleanup',
          adContainerId: data.adContainerId,
          callback: data.callback
        });
      } catch (err) {
        console.log('failed to execute window.SG.trigger', err);
      }
    }
  }, {
    env: () => true,
    action: data => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
      try {
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/ad/game-banner/display.js":
/*!*************************************************!*\
  !*** ./config/events/ad/game-banner/display.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Malte Bjarki Mohrmann <malte.mohrmann@softgames.de> on 2020-08-19.
 * Copyright © Softgames 2020 - present
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][GAME-BANNER-DISPLAY]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    adContainerId: {
      isMandatory: true,
      rule: 'adContainerId must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    callback: {
      isMandatory: false,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
      try {
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }, {
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        console.log('triggering window.SG.trigger');
        window.SG.trigger({
          type: 'gameBanner.display',
          adContainerId: data.adContainerId,
          callback: data.callback
        });
      } catch (err) {
        console.log('failed to execute window.SG.trigger', err);
      }
    }
  }, {
    env: () => true,
    action: data => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
      try {
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/ad/interstitial/display.js":
/*!**************************************************!*\
  !*** ./config/events/ad/interstitial/display.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 27/11/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][INTERSTITIAL]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    ad: {
      isMandatory: true,
      rule: 'ad must be a rewarded ad instance',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject]
    },
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      try {
        console.log('Ad starts');
        setTimeout(() => {
          console.log('Ad watched');
          data.callback();
        }, 1000);
      } catch (err) {
        console.error('failed to show ad', err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/ad/interstitial/load.js":
/*!***********************************************!*\
  !*** ./config/events/ad/interstitial/load.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 27/11/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][INTERSTITIAL]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    placementId: {
      isMandatory: true,
      rule: 'placementId must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      try {
        const ad = Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])() ? 'localhost' : 'sandbox';
        console.log("Loading ad for ".concat(ad));
        setTimeout(() => {
          console.log("Loaded ad for ".concat(ad));
          data.callback(undefined, ad);
        }, 1000);
      } catch (err) {
        console.error('failed to load ad', err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/ad/rewarded/display.js":
/*!**********************************************!*\
  !*** ./config/events/ad/rewarded/display.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][REWARDED]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    ad: {
      isMandatory: true,
      rule: 'ad must be a rewarded ad instance',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject]
    },
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      try {
        console.log('Ad starts');
        setTim   }, 1000);
      } catch (err) {
        console.error('failed to show ad', err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/ad/rewarded/load.js":
/*!*******************************************!*\
  !*** ./config/events/ad/rewarded/load.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][REWARDED]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    placementId: {
      isMandatory: true,
      rule: 'placementId must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      try {
        const ad = Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])() ? 'localhost' : 'sandbox';
        console.log("Loading ad for ".concat(ad));
        setTimeout(() => {
          console.log("Loaded ad for ".concat(ad));
          data.callback(undefined, ad);
        }, 1000);
      } catch (err) {
        console.error('failed to load ad', err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/before-home.js":
/*!**************************************!*\
  !*** ./config/events/before-home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/before-level-map.js":
/*!*******************************************!*\
  !*** ./config/events/before-level-map.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/before-main-menu.js":
/*!*******************************************!*\
  !*** ./config/events/before-main-menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/before-match-pause.js":
/*!*********************************************!*\
  !*** ./config/events/before-match-pause.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/before-match-result.js":
/*!**********************************************!*\
  !*** ./config/events/before-match-result.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/before-new-highscore.js":
/*!***********************************************!*\
  !*** ./config/events/before-new-highscore.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/before-play-button-display.js":
/*!*****************************************************!*\
  !*** ./config/events/before-play-button-display.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');

/* global SG */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    slotKey: {
      isMandatory: false,
      rule: 'slotKey must be a string (IN_GAME | INCENTIVISE)',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___defaultINCENTIVISE']
    },
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        console.log('beforePlayButtonDisplay: dispatching SG.EVENT_BEFORE_PLAY_BUTTON_DISPLAY');
        SG.dispatchEvent(SG.EVENT_BEFORE_PLAY_BUTTON_DISPLAY, null, data.callback);
      } catch (err) {
        console.log(err);
        data.callback(false);
      }
    }
  }, {
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      try {
        console.log('beforePlayButtonDisplay: waiting for 1 seconds...');
        setTimeout(() => {
          data.callback(true);
        }, 1000);
      } catch (err) {
        console.log(err);
        data.callback(false);
      }
    }
  }],
  invalidInputSamples: [{
    callback: false
  }, {}],
  validInputSample: {
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/before-shop.js":
/*!**************************************!*\
  !*** ./config/events/before-shop.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/command/go-to-level.js":
/*!**********************************************!*\
  !*** ./config/events/command/go-to-level.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by René Simon <rene.simon@softgames.de> on 07.11.17.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    level: {
      isMandatory: true,
      rule: 'level must be an integer > 0',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___defaber, n => n > 0]
    }
  },
  logic: [{
    env: () => !Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"])(),
    action: (data, developerData, gameConfig, on, trigger) => {
      try {
        const {
          goToLevel
        } = developerData;
        const {
          level
        } = data;
        if (!goToLevel || typeof goToLevel !== 'function') {
          throw new Error('gotToLevel command not supported');
        }
        console.log('Executing level up command');
        goToLevel(level);
      } catch (err) {
        console.error(err);
      }
    }
  }],
  invalidInputSamples: [' ', {
    a: 1
  }, {
    level: '1'
  }, {}],
  validInputSample: {
    level: 1
  }
});

/***/ }),

/***/ "./config/events/command/pause-game.js":
/*!*********************************************!*\
  !*** ./config/events/command/pause-game.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 11/07/2017.
 * Copyright © Softgames 2017
 */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  logic: [{
    env: () => true,
    action: (data, developerData) => {
      try {
        console.log('triggering freezeGame', developerData.freezeGame);
        developerData.freezeGame();
      } catch (err) {
        console.error(err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/command/scoreboard-ad-failed.js":
/*!*******************************************************!*\
  !*** ./config/events/command/scoreboard-ad-failed.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Created by Malte Bjarki Mohrmann <malte.mohrmann@softgames.de> on 2021-04-19.
 * Copyright © Softgames 2021 - present
 */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  logic: [{
    env: () => true,
    action: (data, developerData) => {
      try {
        if (typeof developerData.scoreboardAdFailed === 'function') {
          developerData.scoreboardAdFailed();
        }
      } catch (err) {
        console.error(err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/command/unpause-game.js":
/*!***********************************************!*\
  !*** ./config/events/command/unpause-game.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 11/07/2017.
 * Copyright © Softgames 2017
 */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  logic: [{
    env: () => true,
    action: (data, developerData) => {
      try {
        console.log('triggering unfreezeGame', developerData.unfreezeGame);
        developerData.unfreezeGame();
      } catch (err) {
        console.error(err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/config-ready.js":
/*!***************************************!*\
  !*** ./config/events/config-ready.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    config: {
      isMandatory: true,
      rule: 'config must be an object',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject]
    }
  },
  invalidInputSamples: [{
    config: 1
  }],
  validInputSample: {
    config: {
      a: 1
    }
  }
});

/***/ }),

/***/ "./config/events/game-over.js":
/*!************************************!*\
  !*** ./config/events/game-over.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    appVariant: {
      isMandatory: false,
      rule: 'appVariant must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    score: {
      isMandatory: true,
      rule: 'score must be a number (>= 0)',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber, n => n >= 0]
    },
    shareText: {
      isMandatory: false,
      rule: 'shareText must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    newHighscore: {
      isMandatory: false,
      rule: 'newHighscore must be a boolean',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isBoolean]
    },
    shareImage: {
      isMandatory: false,
      rule: 'shareImage must be a valid base64 image string',
      validators: [n => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(n) && /^data:image\/[^;]+;base64,/.test(n)]
    },
    customMessage: {
      isMandatory: false,
      rule: 'customMessage must be an object',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject]
    },
    scoreboardAdContainerId: {
      isMandatory: false,
      rule: 'scoreboardAdContainerId must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    callback: {
      isMandatory: false,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        console.log('triggering window.SG.trigger');
        // window.SG_Hooks.levelFinished(1, data.score)
        window.SG.trigger({
          type: 'levelFinished',
          level: 1,
          score: data.score
        });
        console.log('triggering window.SG.trigger');
        // window.SG_Hooks.gameOver(1, data.score, data.callback)
        window.SG.trigger({
          type: 'gameOver',
          score: data.score,
          level: 1
        }, data.callback);
      } catch (err) {
        console.log('failed to execute window.SG.trigger', err);
      }
    }
  }, {
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgames"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesLegacy"])(),
    action: (data, developerData, gameConfig, on, trigger) => {
      try {
        trigger('private.playStop', {
          level: 1,
          score: data.score,
          scoreboardAdContainerId: data.scoreboardAdContainerId
        });
        if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
        try {
          data.callback();
        } catch (err) {
          data.callback(err);
        }
      } catch (err) {
        console.log('failed to execute private.playStop', err);
      }
    }
  }, {
    env: () => true,
    action: data => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
      try {
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }],
  invalidInputSamples: [{}, {
    score: -10
  }],
  validInputSample: {
    score: 1,
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/game-start.js":
/*!*************************************!*\
  !*** ./config/events/game-start.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][GAME-START]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  logic: [{
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_0__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        window.SG_Hooks.levelStarted(1);
      } catch (err) {
        console.log('failed to execute window.SG_Hooks levelStarted', err);
      }
    }
  }, {
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_0__["isSoftgames"],
    action: (data, developerData, gameConfig, on, trigger) => {
      try {
        trigger('private.playStart', {
          level: 1
        });
      } catch (err) {
        console.log('failed to execute private.playStart', err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/game-tracking.js":
/*!****************************************!*\
  !*** ./config/events/game-tracking.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Nada on 13/06/2017.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][GAME-TRACKING]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    event: {
      isMandatory: true,
      rule: 'event name must be a string & first character must be Capital',
      validators: [n => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(n) && n.charAt(0) === n.charAt(0).toUpperCase()]
    },
    dimension1: {
      isMandatory: true,
      rule: 'dimension1 must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    dimension2: {
      isMandatory: false,
      rule: 'dimension2 must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    dimension3: {
      isMandatory: false,
      rule: 'dimension3 must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    value: {
      isMandatory: false,
      rule: 'value must be a string or a numbe_default.a.isNumber(n)]
    }
  },
  logic: [{
    env: () => true,
    action: () => {}
  }],
  invalidInputSamples: [{
    event: 1,
    dimension1: 'DIM1',
    dimension2: 'DIM2',
    dimension3: 'DIM3'
  }, {
    event: 'Source',
    dimension1: 'DIM1',
    dimension2: 'DIM2',
    dimension3: 25,
    value: '10'
  }, {
    event: 'Start',
    value: '25'
  }, {
    event: 'SOURCE',
    dimension1: 12,
    dimension2: 'DIM2',
    dimension3: 'DIM3'
  }, {
    event: 'source',
    dimension1: 'DIM1',
    dimension2: 'DIM2',
    dimension3: 'DIM3'
  }],
  validInputSample: {
    event: 'Source',
    dimension1: 'DIM1',
    dimension2: 'DIM2',
    dimension3: 'DIM3'
  },
  executionLimit: 30,
  executionLimitResetAfterMs: 3000
});

/***/ }),

/***/ "./config/events/get-game-mode.js":
/*!****************************************!*\
  !*** ./config/events/get-game-mode.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 15/08/2017.
 * Copyright © Softgames 2017
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => true,
    // all environments
    action: data => {
      try {
        data.callback(null, 'SOLO');
      } catch (err) {
        data.callback(err);
      }
    }
  }],
  invalidInputSamples: [{
    callback: false
  }, {}],
  validInputSample: {
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/index.js":
/*!********************************!*\
  !*** ./config/events/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_lib_consts_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/lib/consts/events */ "./src/lib/consts/events.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: __webpack_require__(/*! ./initialize */ "./config/events/initialize/index.js").default,
  start: __webpack_require__(/*! ./start */ "./config/events/start.js").default,
  'private.configReady': __webpack_require__(/*! ./config-ready */ "./config/events/config-ready.js").default,
  'private.platformReady': __webpack_require__(/*! ./platform-ready */ "./config/events/platform-ready.js").default,
  'private.signalRunGame': __webpack_require__(/*! ./signal-run-game */ "./config/events/signal-run-game.js").default,
  'private.playerScoreStored': __webpack_require__(/*! ./player-score-stored */ "./config/events/player-score-stored.js").default,
  ["".concat(_src_lib_consts_events__WEBPACK_IMPORTED_MODULE_0__["default"].COMMAND_PREFIX, "goToLevel")]: __webpack_require__(/*! ./command/go-to-level */ "./config/events/command/go-to-level.js").default,
  ["".concat(_src_lib_consts_events__WEBPACK_IMPORTED_MODULE_0__["default"].COMMAND_PREFIX, "pauseGame")]: __webpack_require__(/*! ./command/pause-game */ "./config/events/command/pause-game.js").default,
  ["".concat(_src_lib_consts_events__WEBPACK_IMPORTED_MODULE_0__["default"].COMMAND_PREFIX, "unpauseGame")]: __webpack_require__(/*! ./command/unpause-game */ "./config/events/command/unpause-game.js").default,
  'private.scoreboardAdFailed': __webpack_require__(/*! ./command/scoreboard-ad-failed */ "./config/events/command/scoreboard-ad-failed.js").default,
  'private.pauseGame': __webpack_require__(/*! ./command/pause-game */ "./config/events/command/pause-game.js").default,
  // [RS] keep old event name for legacy support
  'private.unpauseGame': __webpack_require__(/*! ./command/unpause-game */ "./config/events/command/unpause-game.js").default,
  // [RS] keep old event name for legacy support

  'private.playStart': __webpack_require__(/*! ./play-start */ "./config/events/play-start.js").default,
  'private.playStop': __webpack_require__(/*! ./play-stop */ "./config/events/play-stop.js").default,
  levelStart: __webpack_require__(/*! ./level-start */ "./config/events/level-start.js").default,
  levelFinish: __webpack_require__(/*! ./level-finish */ "./config/events/level-finish.js").default,
  save: __webpack_require__(/*! ./save */ "./config/events/save.js").default,
  restore: __webpack_require__(/*! ./restore */ "./config/events/restore.js").default,
  triggerWalkthrough: __webpack_require__(/*! ./trigger-walkthrough */ "./config/events/trigger-walkthrough.js").default,
  // track: require('./track').default,
  rewardedAd: __webpack_require__(/*! ./rewarded-ad */ "./config/events/rewarded-ad.js").default,
  getGameMode: __webpack_require__(/*! ./get-game-mode */ "./config/events/get-game-mode.js").default,
  'loading.update': __webpack_require__(/*! ./loading/update */ "./config/events/loading/update.js").default,
  'loading.completed': __webpack_require__(/*! ./loading/completed */ "./config/events/loading/completed.js").default,
  'private.runGameCalled': __webpack_require__(/*! ./run-game-called */ "./config/events/run-game-called.js").default,
  beforePlayButtonDisplay: __webpack_require__(/*! ./before-play-button-display */ "./config/events/before-play-button-display.js").default,
  playButtonPressed: __webpack_require__(/*! ./play-button-pressed */ "./config/events/play-button-pressed.js").default,
  playButtonSkipped: __webpack_require__(/*! ./play-button-skipped */ "./config/events/play-button-skipped.js").default,
  pageDisplay: __webpack_require__(/*! ./page-display */ "./config/events/page-display.js").default,
  tutorialFinish: __webpack_require__(/*! ./tutorial-finish */ "./config/events/tutorial-finish.js").default,
  moreGames: __webpack_require__(/*! ./more-games */ "./config/events/more-games.js").default,
  beforeHome: __webpack_require__(/*! ./before-home */ "./config/events/before-home.js").default,
  beforeMainMenu: __webpack_require__(/*! ./before-main-menu */ "./config/events/before-main-menu.js").default,
  beforeLevelMap: __webpack_require__(/*! ./before-level-map */ "./config/events/before-level-map.js").default,
  beforeMatchResult: __webpack_require__(/*! ./before-match-result */ "./config/events/before-match-result.js").default,
  beforeNewHighscore: __webpack_require__(/*! ./before-new-highscore */ "./config/events/before-new-highscore.js").default,
  beforeMatchPause: __webpack_require__(/*! ./before-match-pause */ "./config/events/before-match-pause.js").default,
  beforeShop: __webpack_require__(/*! ./before-shop */ "./config/events/before-shop.js").default,
  gameOver: __webpack_require__(/*! ./game-over */ "./config/events/game-over.js").default,
  gameStart: __webpack_require__(/*! ./game-start */ "./config/events/game-start.js").default,
  'ad.rewarded.load': __webpack_require__(/*! ./ad/rewarded/load */ "./config/events/ad/rewarded/load.js").default,
  'ad.rewarded.display': __webpack_require__(/*! ./ad/rewarded/display */ "./config/events/ad/rewarded/display.js").default,
  'ad.interstitial.load': __webpack_require__(/*! ./ad/interstitial/load */ "./config/events/ad/interstitial/load.js").default,
  'ad.interstitial.display': __webpack_require__(/*! ./ad/interstitial/display */ "./config/events/ad/interstitial/display.js").default,
  'ad.gameBanner.display': __webpack_require__(/*! ./ad/game-banner/display */ "./config/events/ad/game-banner/display.js").default,
  'ad.gameBanner.cleanup': __webpack_require__(/*! ./ad/game-banner/cleanup */ "./config/events/ad/game-banner/cleanup.js").default,
  gameTracking: __webpack_require__(/*! ./game-tracking */ "./config/events/game-tracking.js").default
});

/***/ }),

/***/ "./config/events/initialize/commands.js":
/*!**********************************************!*\
  !*** ./config/events/initialize/commands.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 04.04.17.
 * Copyright © Softgames 2017
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  freezeGame: {
    isMandatory: null,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  unfreezeGame: {
    isMandatory: null,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  startGame: {
    isMandatory: null,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  addCurrency: {
    isMandatory: null,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  deductCurrency: {
    isMandatory: null,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  addBooster: {
    isMandatory: null,
    // will be set based on selected module
    eventFollowing: 'addBooster',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  deductBooster: {
    isMandatory: null,
    // will be set based on selected module
    eventFollowing: 'deductBooster',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  unlockBooster: {
    isMandatory: null,
    // will be set based on selected module
    eventFollowing: 'unlockBooster',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  addItem: {
    isMandatory: null,
    // will be set based on selected module
    eventFollowing: 'addItem',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  deductItem: {
    isMandatory: null,
    // will be set based on selected module
    eventFollowing: 'deductItem',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  unlockItem: {
    isMandatory: null,
    // will be set based on selected module
    eventFollowing: 'unlockItem',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  runGame: {
    isMandatory: null,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  goToLevel: {
    isMandatory: null,
    // will be set based on selected module
    eventFollowing: 'levelStart',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  scoreboardAdFailed: {
    isMandatory: false,
    eventFollowing: 'scoreboardAdFailed',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  startOver: {
    isMandatory: null,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  custom: {
    isMandatory: false,
    // will be set based on selected module
    validators: []
  },
  getScore: {
    isMandatory: false,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  changeLocale: {
    isMandatory: false,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  },
  setEntryPointData: {
    isMandatory: false,
    // will be set based on selected module
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
  }
});

/***/ }),

/***/ "./config/events/initialize/data.js":
/*!******************************************!*\
  !*** ./config/events/initialize/data.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./config/events/initialize/modules.js");
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */



/* harmony default export */ __webpack_exports__["default"] = ({
  id: {
    isMandatory: true,
    rule: 'id has to be a string',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
  },
  build: {
    isMandatory: true,
    rule: 'build has to be a string [major].[minor].[patch], e.g.  /^\d+(\.\d+){2}$/.test(n)]
  },
  supportedLanguages: {
    isMandatory: true,
    rule: 'supportedLanguages has to be an array of strings of 2 characters',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray, n => n.length && n.length === lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(n, (c, i) => c + (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(i) && i.length === 2), 0)]
  },
  modules: {
    isMandatory: true,
    rule: 'modules has to be an array of one or more strings of this list ' + "[".concat(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(_modules__WEBPACK_IMPORTED_MODULE_1__["default"]), k => "\"".concat(k, "\"")).join(', '), "]"),
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray, n => n.length && n.length === lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(n, (c, i) => c + (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(i) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(_modules__WEBPACK_IMPORTED_MODULE_1__["default"]), i)), 0)]
  },
  boosters: {
    isMandatory: false,
    rule: 'boosters has to be an array of strings',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray, n => n.length && n.length === lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(n, (c, i) => c + lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(i), 0)]
  },
  items: {
    isMandatory: false,
    rule: 'items has to be an array of strings',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray, n => n.length && n.length === lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(n, (c, i) => c + lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(i), 0)]
  },
  gameAnalyticsKey: {
    isMandatory: false,
    rule: 'gameAnalyticsKey has to be a string',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
  },
  gameAnalyticsSecret: {
    isMandatory: false,
    rule: 'gameAnalyticsSecret has to be a string',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
  },
  gameAnalyticsResourceCurrencies: {
    isMandatory: false,
    rule: 'gameAnalyticsResourceCurrencies has to be an array',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray]
  },
  gameAnalyticsResourceItemTypes: {
    isMandatory: false,
    rule: 'gameAnalyticsResourceItemTypes has to be an array',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray]
  },
  gameAnalyticsCustomDimensions1: {
    isMandatory: false,
    rule: 'gameAnalyticsCustomDimensions1 has to be an array',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray]
  },
  gameAnalyticsCustomDimensions2: {
    isMandatory: false,
    rule: 'gameAnalyticsCustomDimensions2 has to be an array',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray]
  },
  gameAnalyticsCustomDimensions3: {
    isMandatory: false,
    rule: 'gameAnalyticsCustomDimensions3 has to be an array',
    validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray]
  }
});

/***/ }),

/***/ "./config/events/initialize/index.js":
/*!*******************************************!*\
  !*** ./config/events/initialize/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./config/events/initialize/modules.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./config/events/initialize/data.js");
/* harmony import */ var _valid_input_sample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./valid-input-sample */ "./config/events/initialize/valid-input-sample.js");
/* harmony import */ var _invalid_input_samples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invalid-input-samples */ "./config/events/initialize/invalid-input-samples.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright �' has to be a function");
}
const commands = __webpack_require__(/*! ./commands */ "./config/events/initialize/commands.js").default;
lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(commands, (entry, key) => {
  if (entry.rule) {
    return undefined;
  }
  entry.rule = generateRule(key);
  return entry.rule;
});
/* harmony default export */ __webpack_exports__["default"] = ({
  modules: _modules__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, _data__WEBPACK_IMPORTED_MODULE_3__["default"], commands),
  invalidInputSamples: _invalid_input_samples__WEBPACK_IMPORTED_MODULE_5__["default"],
  validInputSample: _valid_input_sample__WEBPACK_IMPORTED_MODULE_4__["default"],
  executionLimit: 1
});

/***/ }),

/***/ "./config/events/initialize/invalid-input-samples.js":
/*!***********************************************************!*\
  !*** ./config/events/initialize/invalid-input-samples.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ([{
  disableSound: () => {},
  enableSound: () => {},
  pauseGame: 1,
  unpauseGame: () => {},
  startGame: () => {},
  startPractice: () => {},
  startTutorial: () => {},
  addCurrency: () => {},
  deductCurrency: () => {},
  addBooster: () => {},
  addLives: () => {},
  goto: () => {},
  startOffer: () => {},
  unlockItem: () => {},
  unlockBooster: () => {},
  runGame: () => {},
  rtmAction: () => {}
}, {
  enableSound: () => {},
  pauseGame: () => {},
  unpauseGame: () => {},
  startGame: () => {},
  startPractice: () => {},
  startTutorial: () => {},
  addCurrency: () => {},
  deductCurrency: () => {},
  addBooster: () => {},
  addLives: () => {},
  goto: () => {},
  startOffer: () => {},
  unlockItem: () => {},
  unlockBooster: () => {},
  runGame: () => {},
  rtmAction: () => {}
}]);

/***/ }),

/***/ "./config/events/initialize/modules.js":
/*!*********************************************!*\
  !*** ./config/events/initialize/modules.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  basic: {
    commands: ['freezeGame', 'unfreezeGame', 'runGame'],
    events: ['initialize', 'gameTracking', 'beforePlayButtonDisplay', 'playButtonPressed', 'playButtonSkipped', 'save', 'restore', 'start', 'rewardedAd', 'private.playStart', 'private.playStop', 'ad.rewarded.load', 'ad.rewarded.display', 'ad.interstitial.load', 'ad.interstitial.display', 'ad.gameBanner.display', 'ad.gameBanner.cleanup', 'pageDisplay', 'tutorialFinish', 'triggerWalkthrough', 'moreGames', 'private.platformReady', 'private.pauseGame', 'private.unpauseGame', 'private.signalRunGame', 'private.configReady', 'private.playerScoreStored', 'loading.update', 'loading.completed', 'private.runGameCalled', 'private.scoreboardAdFailed']
  },
  levelGame: {
    commands: ['goToLevel'],
    events: ['levelStart', 'levelFinish'],
    dependencies: ['basic']
  },
  scoreGame: {
    commands: ['startOver', 'getScore'],
    events: ['gameStart', 'gameOver'],
    dependencies: ['basic']
  }
});

/***/ }),

/***/ "./config/events/initialize/valid-input-sample.js":
/*!********************************************************!*\
  !*** ./config/events/initialize/valid-input-sample.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  modules: ['basic', '3rdParty', 'social', 'pvp'],
  enableSound: () => {},
  disableSound: () => {},
  pauseGame: () => {},
  unpauseGame: () => {},
  startPractice: () => {},
  addCurrency: () => {},
  deductCurrency: () => {},
  addBooster: () => {},
  deductBooster: () => {},
  unlockBooster: () => {},
  goTo: () => {},
  addItem: () => {},
  deductItem: () => {},
  unlockItem: () => {},
  runGame: () => {},
  startMatch: () => {},
  rtmAction: () => {},
  goToLevel: () => {},
  scoreboardAdFailed: () => {}
});

/***/ }),

/***/ "./config/events/level-finish.js":
/*!***************************************!*\
  !*** ./config/events/level-finish.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    appVariant: {
      isMandatory: false,
      rule: 'appVariant must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    state: {
      isMandatory: true,
      rule: 'state must be a string: "win" or "lose"',
      validators: [lodash__WEBPACK_IMPORTED.a.includes(['win', 'lose'], n)]
    },
    level: {
      isMandatory: true,
      rule: 'level must be a number (>= 0)',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber, n => n >= 0]
    },
    score: {
      isMandatory: true,
      rule: 'score must be a number (>= 0)',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber, n => n >= 0]
    },
    shareText: {
      isMandatory: false,
      rule: 'shareText must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    shareImage: {
      isMandatory: false,
      rule: 'shareImage must be a valid base64 image string',
      validators: [n => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(n) && /^data:image\/[^;]+;base64,/.test(n)]
    },
    customMessage: {
      isMandatory: false,
      rule: 'customMessage must be an object',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject]
    },
    scoreboardAdContainerId: {
      isMandatory: false,
      rule: 'scoreboardAdContainerId must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    callback: {
      isMandatory: false,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
      try {
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }, {
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        console.log('triggering window.SG.trigger');
        // window.SG_Hooks.levelFinished(data.level, data.score)
        window.SG.trigger({
          type: 'levelFinished',
          level: data.level,
          score: data.score
        });
        if (data.state === 'lose') {
          console.log('triggering window.SG.trigger');
          // window.SG_Hooks.gameOver(data.level, data.score, data.callback)
          window.SG.trigger({
            type: 'gameOver',
            score: data.score,
            level: data.level
          }, data.callback);
        } else {
          console.log('triggering window.SG.trigger');
          // window.SG_Hooks.levelUp(data.level, data.score, data.callback)
          window.SG.trigger({
            type: 'levelUp',
            level: data.level,
            lastLevelScore: data.score
          }, data.callback);
        }
      } catch (err) {
        console.log('failed to execute window.SG.trigger', err);
      }
    }
  }, {
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgames"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesLegacy"])(),
    action: (data, developerData, gameConfig, on, trigger) => {
      try {
        trigger('private.playStop', {
          level: data.level,
          score: data.score,
          scoreboardAdContainerId: data.scoreboardAdContainerId
        });
        if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
        try {
          data.callback();
        } catch (err) {
          data.callback(err);
        }
      } catch (err) {
        console.log('failed to execute private.playStop', err);
      }
    }
  }, {
    env: () => true,
    action: data => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) return;
      try {
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }],
  invalidInputSamples: [{
    level: -1,
    score: 1
  }, {
    level: 1
  }, {
    score: 1
  }],
  validInputSample: {
    level: 1,
    score: 1,
    state: 'win'
  }
});

/***/ }),

/***/ "./config/events/level-start.js":
/*!**************************************!*\
  !*** ./config/events/level-start.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][levelStart]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    level: {
      isMandatory: true,
      rule: 'level must be a number (>= 0)',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber, n => n >= 0]
    }
  },
  logic: [{
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        // window.SG_Hooks.levelStarted(data.level)
        window.SG.trigger({
          type: 'levelStarted',
          level: data.level
        });
      } catch (err) {
        console.log('failed to execute window.SG.trigger', err);
      }
    }
  }, {
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgames"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesLegacy"])(),
    action: (data, developerData, gameConfig, on, trigger) => {
      try {
        trigger('private.playStart', {
          level: data.level
        });
      } catch (err) {
        console.log('failed to execute private.playStart', err);
      }
    }
  }],
  invalidInputSamples: [{
    level: -1
  }, {
    level: 'level-1'
  }, {}],
  validInputSample: {
    level: 1
  }
});

/***/ }),

/***/ "./config/events/loading/completed.js":
/*!********************************************!*\
  !*** ./config/events/loading/completed.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var raw_loader_raw_avatarImage_b64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!../../../raw/avatarImage.b64 */ "./node_modules/raw-loader/dist/cjs.js!./raw/avatarImage.b64");
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */

/* eslint max-len:off */


// eslint-disable-next-line import/no-webpack-loader-syntax


const AVATAR_URL = 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/p320x320/19961406_1396199877127973_8196076691094883342_n.jpg?oh=3dc0282fbff3db77a716ff5a9d95a08b&oe=5ADCB151';
// const console = require('minilog')(
//   '[SG-GAME-DEV][SG-SDK][loading.completed]: ',
// );

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    callback: {
      isMandatory: false,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_2__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_2__["isLocalhost"])(),
    action: (data, developerData) => {
      try {
        const demoUser = {
          avatar: AVATAR_URL,
          avatarBase64: raw_loader_raw_avatarImage_b64__WEBPACK_IMPORTED_MODULE_1__["default"],
          name: 'Bartosz',
          userId: '1368643399874034'
        };
        try {
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) {
            data.callback(undefined, demoUser);
          }
        } catch (err) {
          console.log('callback execution failed', err);
        }
        developerData.runGame();
      } catch (err) {
        console.error(err);
      }
    }
  }, {
    env: () => true,
    // all environments
    action: (data, developerData, gameConfig, on, trigger) => {
      try {
        try {
          window.SG.trigger({
            type: 'loaded'
          });
          window.SG.hideLoadScrn();
        } catch (err) {
          // silence is golden
        }
        developerData.custom = developerData.custom || {};
        developerData.custom.loadingCompleted = true;
        console.log('zxcv developerData.custom.loadingCompleted to true');
        try {
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) {
            data.callback(undefined, gameConfig.user);
          }
        } catch (err) {
          console.log('callback execution failed', err);
        }
        if (Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_2__["isSoftgamesOldPlatform"])() || developerData.custom.signalRunGame) {
          developerData.runGame();
          trigger('private.runGameCalled');
        } else {
          console.log('waiting for signalRunGame to start the game');
        }
      } catch (err) {
        console.error(err);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(data.callback)) {
          data.callback(err);
        }
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {},
  executionLimit: 1
});

/***/ }),

/***/ "./config/events/loading/update.js":
/*!*****************************************!*\
  !*** ./config/events/loading/update.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 21/07/2017.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');

/* global window */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    progressPercentage: {
      isMandatory: false,
      rule: 'progressPercentage must be a number between 1 and 100',
      validators: [n => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(n) && n <= 100 && n >= 0]
    }
  },
  logic: [() => true,
    action: data => {}
  }],
  invalidInputSamples: [{
    progressPercentage: '1'
  }, {
    progressPercentage: -10
  }, {
    progressPercentage: 200
  }, {}],
  validInputSample: {
    progressPercentage: 50
  }
});

/***/ }),

/***/ "./config/events/more-games.js":
/*!*************************************!*\
  !*** ./config/events/more-games.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][moreGames]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  logic: [{
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_0__["isSoftgamesOldPlatform"],
    action: () => {
      try {
        window.SG.redirectToPortal();
      } catch (err) {
        console.log('failed to execute SG.redirectToPortal()', err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/page-display.js":
/*!***************************************!*\
  !*** ./config/events/page-display.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


const pickupList = ['welcome-screen', 'mode-selection', 'main-menu', 'ready-for-match', 'pause', 'game-over', 'levels-map', 'shop'];
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    pageName: {
      isMandatory: true,
      pickupList,
      rule: () => "pageName must be a string of the following list (".concat(pickupL___default.a.includes(pickupList, n)]
    }
  },
  invalidInputSamples: [{}, {
    pageName: 1
  }, {
    pageName: 'DEMO_NAME'
  }],
  validInputSample: {
    pageName: 'mode-selection'
  }
});

/***/ }),

/***/ "./config/events/platform-ready.js":
/*!*****************************************!*\
  !*** ./config/events/platform-ready.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    config: {
      isMandatory: true,
      rule: 'config must be an object',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject]
    }
  },
  logic: [{
    env: () => true,
    // all environments
    action: (data, developerData) => {
      try {
        developerData.custom = developerData.custom || {};
        developerData.custom.platformReady = true;
        developerData.custom.gameConfig = data.config;
      } catch (err) {
        console.error(err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/play-button-pressed.js":
/*!**********************************************!*\
  !*** ./config/events/play-button-pressed.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        console.log('beforePlayButtonDisplay: dispatching SG.EVENT_PLAY_BUTTON_PRESSED');
        const sg = window.SG;
        if (!sg) {
          throw new Error('No SG object found');
        }
        sg.dispatchEvent(sg.EVENT_PLAY_BUTTON_PRESSED, null, data.callback);
      } catch (err) {
        console.log(err);
        data.callback(false);
      }
    }
  }],
  invalidInputSamples: [{
    callback: false
  }, {}],
  validInputSample: {
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/play-button-skipped.js":
/*!**********************************************!*\
  !*** ./config/events/play-button-skipped.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 03/11/2017.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => true,
    // all environments
    action: () => {
      console.log('skipPlayButton has been triggered...');
    }
  }],
  invalidInputSamples: [{
    callback: false
  }, {}],
  validInputSample: {
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/play-start.js":
/*!*************************************!*\
  !*** ./config/events/play-start.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 21/11/2017.
 * Copyright © Softgames 2017
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    level: {
      isMandatory: true,
      rule: 'level must be a number (>= 0)',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber, n => n >= 0]
    }
  },
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/play-stop.js":
/*!************************************!*\
  !*** ./config/events/play-stop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 21/11/2017.
 * Copyright © Softgames 2017
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    level: {
      isMandatory: true,
      rule: 'level must be a number (>= 0)',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber, n => n >= 0]
    },
    score: {
      isMandatory: true,
      rule: 'score must be a number (>= 0)',
      validators: [lodash__WEBPACODULE_0___default.a.isNumber, n => n >= 0]
    },
    scoreboardAdContainerId: {
      isMandatory: false,
      rule: 'scoreboardAdContainerId must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    }
  },
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/player-score-stored.js":
/*!**********************************************!*\
  !*** ./config/events/player-score-stored.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 14/08/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/restore.js":
/*!**********************************!*\
  !*** ./config/events/restore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_tools_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/tools/storage */ "./src/lib/tools/storage.js");
/* harmony import */ var _src_lib_tools_aeria_parent_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/lib/tools/aeria-parent-storage */ "./src/lib/tools/aeria-parent-storage.js");
/* harmony import */ var _src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/lib/tools/game-config-handler */ "./src/lib/tools/game-config-handler.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    prefix: {
      isMandatory: false,
      rule: 'prefix must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    key: {
      isMandatory: true,
      rule: 'key must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => true,
    action: async (data, developerData, gameConfig) => {
      try {
        let prefix = '';
        if (data.prefix) {
          prefix = data.prefix;
        } else if (developerData.id) {
          prefix = "".concat(developerData.id, "_");
        } else {
          prefix = 'sg_';
        }
        const key = prefix + data.key;
        let value = null;
        if (!Object(_src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_3__["isAeria"])(gameConfig)) {
          value = Object(_src_lib_tools_storage__WEBPACK_IMPORTED_MODULE_1__["getItem"])(key);
        } else {
          const extKey = "a_".concat(key);
          value = await Object(_src_lib_tools_aeria_parent_storage__WEBPACK_IMPORTED_MODULE_2__["getParentItem"])(extKey, Object(_src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_3__["getGameSlug"])(gameConfig));
          if (!value) {
            value = Object(_src_lib_tools_storage__WEBPACK_IMPORTED_MODULE_1__["getItem"])(key);
            if (!value) {
              value = await Object(_src_lib_tools_aeria_parent_storage__WEBPACK_IMPORTED_MODULE_2__["getParentItem"])(key, Object(_src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_3__["getGameSlug"])(gameConfig));
            }
            if (value) {
              await Object(_src_lib_tools_aeria_parent_storage__WEBPACK_IMPORTED_MODULE_2__["setParentItem"])(extKey, value, Object(_src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_3__["getGameSlug"])(gameConfig));
            }
          }
        }
        data.callback(undefined, value);
      } catch (err) {
        data.callback(err);
      }
    }
  }],
  invalidInputSamples: [{
    key: 'DEMO_KEY'
  }, {
    key: 'DEMO_SLUG',
    callback: 10
  }, {
    key: 1,
    callback: () => {}
  }],
  validInputSample: {
    key: 'DEMO_KEY',
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/rewarded-ad.js":
/*!**************************************!*\
  !*** ./config/events/rewarded-ad.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    callback: {
      isMandatory: true,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSandbox"])() || Object(_src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isLocalhost"])(),
    action: data => {
      try {
        console.log('rewardedAd: waiting for 1 seconds...');
        setTimeout(() => {
          data.callback(true);
        }, 1000);
      } catch (err) {
        console.error('failed to execute rewardedAd logic', err);
        data.callback(false);
      }
    }
  }, {
    env: _src_lib_env_detector__WEBPACK_IMPORTED_MODULE_1__["isSoftgamesOldPlatform"],
    action: data => {
      try {
        window.softgames.trigger({
          type: window.softgames.eventIncentiviseTriggered
        }, data.callback);
      } catch (err) {
        console.log(err);
        data.callback(false);
      }
    }
  }],
  invalidInputSamples: [{
    callback: false
  }, {}],
  validInputSample: {
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/run-game-called.js":
/*!******************************************!*\
  !*** ./config/events/run-game-called.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/save.js":
/*!*******************************!*\
  !*** ./config/events/save.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_lib_tools_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/lib/tools/storage */ "./src/lib/tools/storage.js");
/* harmony import */ var _src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/lib/tools/game-config-handler */ "./src/lib/tools/game-config-handler.js");
/* harmony import */ var _src_lib_tools_aeria_parent_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/lib/tools/aeria-parent-storage */ "./src/lib/tools/aeria-parent-storage.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    prefix: {
      isMandatory: false,
      rule: 'prefix must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    key: {
      isMandatory: true,
      rule: 'key must be a string',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString]
    },
    value: {
      isMandatory: true,
      rule: 'value musWEBPACK_IMPORTED_MODULE_0___default.a.isNumber]
    },
    callback: {
      isMandatory: false,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  logic: [{
    env: () => true,
    action: async (data, developerData, gameConfig) => {
      try {
        let prefix = '';
        if (data.prefix) {
          prefix = data.prefix;
        } else if (developerData.id) {
          prefix = "".concat(developerData.id, "_");
        } else {
          prefix = 'sg_';
        }
        const key = prefix + data.key;
        const {
          value
        } = data;
        if (!Object(_src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_2__["isAeria"])(gameConfig)) {
          Object(_src_lib_tools_storage__WEBPACK_IMPORTED_MODULE_1__["setItem"])(key, value);
        } else {
          const extKey = "a_".concat(key);
          await Object(_src_lib_tools_aeria_parent_storage__WEBPACK_IMPORTED_MODULE_3__["setParentItem"])(extKey, value, Object(_src_lib_tools_game_config_handler__WEBPACK_IMPORTED_MODULE_2__["getGameSlug"])(gameConfig));
        }
        data.callback();
      } catch (err) {
        data.callback(err);
      }
    }
  }],
  invalidInputSamples: [{
    key: 'DEMO_KEY',
    value: 1
  }, {
    key: 'DEMO_SLUG',
    value: 'DEMO_VAL',
    callback: false
  }, {
    key: 1,
    value: 'DEMO_VAL',
    callback: () => {}
  }],
  validInputSample: {
    key: 'DEMO_KEY',
    value: 'DEMO_VAL',
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/signal-run-game.js":
/*!******************************************!*\
  !*** ./config/events/signal-run-game.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__[" ({
  data: {},
  logic: [{
    env: () => true,
    // all environments
    action: (data, developerData, gameConfig, on, trigger) => {
      try {
        developerData.custom = developerData.custom || {};
        developerData.custom.signalRunGame = true;
        if (developerData.custom.loadingCompleted) {
          console.log('loadingCompleted is true. calling runGame', developerData.runGame);
          developerData.runGame();
          developerData.unfreezeGame();
        } else {
          console.log('waiting for loading.completed to start the game');
        }
      } catch (err) {
        console.error(err);
      }
    }
  }],
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/start.js":
/*!********************************!*\
  !*** ./config/events/start.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 20/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./config/events/trigger-walkthrough.js":
/*!**********************************************!*\
  !*** ./config/events/trigger-walkthrough.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    callback: {
      isMandatory: false,
      rule: 'callback must be a function',
      validators: [lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction]
    }
  },
  invalidInputSamples: [{}, {
    callback }],
  validInputSample: {
    callback: () => {}
  }
});

/***/ }),

/***/ "./config/events/tutorial-finish.js":
/*!******************************************!*\
  !*** ./config/events/tutorial-finish.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {},
  invalidInputSamples: [{
    a: 1
  }],
  validInputSample: {}
});

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \****************************************_global["default"]._babelPolyfill = true;

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \*********************************************modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/abab/index.js":
/*!************************************!*\
  !*** ./node_modules/abab/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const atob = __webpack_require__(/*! ./lib/atob */ "./node_modules/abab/lib/atob.js");
const btoa = __webpack_require__(/*! ./lib/btoa */ "./node_modules/abab/lib/btoa.js");
module.exports = {
  atob,
  btoa
};

/***/ }),

/***/ "./node_modules/abab/lib/atob.js":
/*!***************************************!*\
  !*** ./node_modules/abab/lib/atob.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Implementation of atob() according to the HTML and Infra specs, except that
 * instead of throwing INVALID_CHARACTER_ERR we return null.
 */
function atob(data) {
  // Web IDL requires DOMStrings to just be converted using ECMAScript
  // ToString, which in our case amounts to using a template literal.
  data = "".concat(data);
  // "Remove all ASCII whitespace from data."
  data = data.replace(/[ \t\n\f\r]/g, "");
  // "If data's length divides by 4 leaving no remainder, then: if data ends
  // with one or two U+003D (=) code points, then remove them from data."
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }
  // "If data's length divides by 4 leaving a remainder of 1, then return
  // failure."
  //
  // "If data contains a code point that is not one of
  //
  // U+002B (+)
  // U+002F (/)
  // ASCII alphanumeric
  //
  // then return failure."
  if (data.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(data)) {
    return null;
  }
  // "Let output be an empty byte sequence."
  let output = "";
  // "Let buffer be an empty buffer that can have bits appended to it."
  //
  // We append bits via left-shift and or.  accumulatedBits is used to track
  // when we've gotten to 24 bits.
  let buffer = 0;
  let accumulatedBits = 0;
  // "Let position be a position variable for data, initially pointing at the
  // start of data."
  //
  // "While position does not point past the end of data:"
  for (let i = 0; i < data.length; i++) {
    // "Find the code point pointed to by position in the second column of
    // Table 1: The Base 64 Alphabet of RFC 4648. Let n be the number given in
    // the first cell of the same row.
    //
    // "Append to buffer the six bits corresponding to n, most significant bit
    // first."
    //
    // atobLookup() implements the table from RFC 4648.
    buffer <<= 6;
    buffer |= atobLookup(data[i]);
    accumulatedBits += 6;
    // "If buffer has accumulated 24 bits, interpret them as three 8-bit
    // big-endian numbers. Append three bytes with values equal to those
    // numbers to output, in the same order, and then empty buffer."
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 0xff0000) >> 16);
      output += String.fromCharCode((buffer & 0xff00) >> 8);
      output += String.fromCharCode(buffer & 0xff);
      buffer = accumulatedBits = 0;
    }
    // "Advance position by 1."
  }
  // "If buffer is not empty, it contains either 12 or 18 bits. If it contains
  // 12 bits, then discard the last four and interpret the remaining eight as
  // an 8-bit big-endian number. If it contains 18 bits, then discard the last
  // two and interpret the remaining 16 as two 8-bit big-endian numbers. Append
  // the one or two bytes with values equal to those one or two numbers to
  // output, in the same order."
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 0xff00) >> 8);
    output += String.fromCharCode(buffer & 0xff);
  }
  // "Return output."
  return output;
}
/**
 * A lookup table for atob(), which converts an ASCII character to the
 * corresponding six-bit number.
 */
function atobLookup(chr) {
  if (/[A-Z]/.test(chr)) {
    return chr.charCodeAt(0) - "A".charCodeAt(0);
  }
  if (/[a-z]/.test(chr)) {
    return chr.charCodeAt(0) - "a".charCodeAt(0) + 26;
  }
  if (/[0-9]/.test(chr)) {
    return chr.charCodeAt(0) - "0".charCodeAt(0) + 52;
  }
  if (chr === "+") {
    return 62;
  }
  if (chr === "/") {
    return 63;
  }
  // Throw exception; should not be hit in tests
  return undefined;
}
module.exports = atob;

/***/ }),

/***/ "./node_modules/abab/lib/btoa.js":
/*!***************************************!*\
  !*** ./node_modules/abab/lib/btoa.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * btoa() as defined by the HTML and Infra specs, which mostly just references
 * RFC 4648.
 */
function btoa(s) {
  let i;
  // String conversion as required by Web IDL.
  s = "".concat(s);
  // "The btoa() method must throw an "InvalidCharacterError" DOMException if
  // data contains any character whose code point is greater than U+00FF."
  for (i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 255) {
      return null;
    }
  }
  let out = "";
  for (i = 0; i < s.length; i += 3) {
    const groupsOfSix = [undefined, undefined, undefined, undefined];
    groupsOfSix[0] = s.charCodeAt(i) >> 2;
    groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;
    if (s.length > i + 1) {
      groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
      groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
    }
    if (s.length > i + 2) {
      groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
      groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
    }
    for (let j = 0; j < groupsOfSix.length; j++) {
      if (typeof groupsOfSix[j] === "undefined") {
        out += "=";
      } else {
        out += btoaLookup(groupsOfSix[j]);
      }
    }
  }
  return out;
}

/**
 * Lookup table for btoa(), which converts a six-bit number into the
 * corresponding ASCII character.
 */
function btoaLookup(idx) {
  if (idx < 26) {
    return String.fromCharCode(idx + "A".charCodeAt(0));
  }
  if (idx < 52) {
    return String.fromCharCode(idx - 26 + "a".charCodeAt(0));
  }
  if (idx < 62) {
    return String.fromCharCode(idx - 52 + "0".charCodeAt(0));
  }
  if (idx === 62) {
    return "+";
  }
  if (idx === 63) {
    return "/";
  }
  // Throw INVALID_CHARACTER_ERR exception here -- won't be hit in the tests.
  return undefined;
}
module.exports = btoa;

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \********************************/node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \*****************************************js/modules/_core.js").Promise['finally'];

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \*******************************************re-js/modules/_core.js").String.trimLeft;

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \***********************************************modules/_wks-ext.js").f('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \****************************************ore-js/library/modules/_core.js").global;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.12'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \**********************************************d for `library`
module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \*************************************************/core-js/library/modules/_global.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \******************************************+ ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \**********************************************') throw TypeError(msg);
  return +it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \**************************************************  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \****************************************************+ (unicode ? at(S, index).length : 1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \*******************************************orrect invocation!');
  }
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \***************************************** + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************* inc;
    from += inc;
  }
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \******************************************index) O[index++] = value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \********************************************** }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************* || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \********************************************[index], index, O);
  }
  return memo;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \*********************************************************
  return C === undefined ? Array : C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \****************************************************speciesConstructor(original))(length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \************************************totype = fn.prototype;
  return bound;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \***************************************allee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \***********************************return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \*************************************************.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \***********************************************t;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \******************************************etStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \************************************e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \***********************************************0, value));else object[index] = value;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \***********************************return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \**************************************************m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \*************************************************itive(anObject(this), hint != NUMBER);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \*************************************** call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************* {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \****************************************** is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \*********************************************ocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \*****************************************result.push(key);
  }
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \**************************************d for `library`
module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \***********************************************h (f) {/* empty */}
  }
  return true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \*************************************;
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \******************************************n rxfn.call(string, this);
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \*************************************ticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \**************************************************dex;
}
module.exports = flattenIntoArray;

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \**************************************s.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \**************************************************-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \**************************************= global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \***********************************  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \************************************ object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \************************************s = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \********************************************** {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \***************************************************ototypeOf(that, P);
  }
  return that;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \**************************************]);
  }
  return fn.apply(that, args);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \*************************************** 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \*********************************************== it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \****************************************y(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \******************************************) && isFinite(it) && floor(it) === it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \*****************************************t !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \*****************************************d ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \*****************************************(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \*******************************************gTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************* NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \*******************************************catch (e) {/* empty */}
  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \*****************************************   value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \*****************************************(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \***************************************dule, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \****************************************** x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \*******************************************n * Infinity;
  return $sign * result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \******************************************e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \*****************************************) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \************************************getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \***************************************** notify();
    }
    last = task;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \******************************************************) {
  return new PromiseCapability(C);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \*********************************************[key];
    }
  }
  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \*********************************************ed ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \*****************************************) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \******************************************keys[i++], Properties[P]);
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \*******************************************n createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \***********************************************WindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \*******************************************es(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \*******************************************exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \******************************************nstanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \****************************************************result.push(key);
  }
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \*******************************************s(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \******************************************) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \****************************************** () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \***********************************************
      }
    }
    return result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \**************************************** ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \*******************************************0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \*****************************************.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \***************************************{
      e: true,
      v: e
    };
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \***********************************************);
  return promiseCapability.promise;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \*********************************************: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \********************************************key, src[key], safe);
  return target;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \****************************************&& this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \****************************************************;
  }
  return builtinExec.call(R, S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \*******************************************tch;
  };
}
module.exports = patchedExec;

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \******************************************|| 1 / x === 1 / y : x != x && y != y;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \*****************************************}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \*******************************************on () {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*************************************************nfigurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \******************************************ared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \**************************************© 2020 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************CIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************mpty */}, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************0 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************gex!");
  return String(defined(that));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************it('"').length > 3;
  }), 'String', O);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \***************************************** ? stringFiller + S : S + stringFiller;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************)) if (n & 1) res += str;
  return res;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************turn string;
};
module.exports = exporter;

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \*********************************** = {
  set: setTask,
  clear: clearTask
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************ndex + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************rror('Wrong length!');
  return length;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************+it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************n (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************on (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************'t convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************odule.exports = function () {/* empty */};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************rayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************R: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************: key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \***************************************** = navigator && navigator.userAgent || '';

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \************************************************** ' + TYPE + ' required!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************bol.' + name));
};
$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.P, 'Array', {
  copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js")
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************/modules/_add-to-unscopables.js")('fill');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************h(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************length = index;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************his, searchElement, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Array', {
  isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************es('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \******************************************** === undefined ? ',' : separator);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \***************************************************** return index || 0;
    return -1;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************.length = aLen;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");
$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************ents.length, arguments[1], false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************his[start + i];
    return cloned;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************e(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************ject(this), aFunction(comparefn));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************{
    return new Date().getTime();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************, 'Date', {
  toISOString: toISOString
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************nite(pv) ? null : O.toISOString();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************/core-js/modules/_date-to-primitive.js"));

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************oString.call(this) : INVALID_DATE;
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.P, 'Function', {
  bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \******************************************************* O) return true;
    return false;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************catch (e) {
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \******************************************** - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************sinh(0) > 0), 'Math', {
  asinh: asinh
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************: Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************h.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************eturn (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************Math.expm1), 'Math', {
  expm1: $expm1
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \******************************************** ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \****************************************** (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \******************************************   return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*****************************************{
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Math', {
  sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \***************************************** - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*****************************************? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \******************************************t > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \**************************************************s/_redefine.js")(global, NUMBER, $Number);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \********************************************** 'Number', {
  EPSILON: Math.pow(2, -52)
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \************************************************eof it == 'number' && _isFinite(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Number', {
  isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \*********************************************compare
    return number != number;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \****************************************************** && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*******************************************************, {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \******************************************************* {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \************************************************eInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \***********************************************      m = s + m;
    }
    return m;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*************************************************** $toPrecision.call(that, precision);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \*********************************************ules/core-js/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {
  create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \********************************************************modules/core-js/modules/_object-dps.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \******************************************************odules/core-js/modules/_object-dp.js").f
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \******************************************************************ertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \*************************************************************core-js/modules/_object-gopn-ext.js").f;
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \************************************************led ? $isSealed(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', {
  is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*******************************************) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*******************************************sObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*******************************************************ules/core-js/modules/_set-proto.js").set
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \************************************************bject ' + classof(this) + ']';
  }, true);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*****************************************t != $parseInt), {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \***************************************t.v);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \*********************************************) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \*************************************************sObject(result) ? result : instance;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*******************************************************atch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \******************************************************* false : delete target[propertyKey];
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \************************************************* {
    return new Enumerate(target);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*******************************************************************PD.f(anObject(target), propertyKey);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \********************************************************  return getProto(anObject(target));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*******************************************xport($export.S, 'Reflect', {
  get: get
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \******************************************* {
    return propertyKey in target;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*****************************************************ible ? $isExtensible(target) : true;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Reflect', {
  ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \**********************************************************atch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \********************************************************atch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*******************************************xport($export.S, 'Reflect', {
  set: set
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \**************************************************core-js/modules/_set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*******************************************xec !== /./.exec
}, {
  exec: regexpExec
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \********************************************node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \********************************************  }
    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \**********************************************== undefined ? '' : capture;
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \*********************************************sult === null ? -1 : result.index;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \******************************************** A.push(S.slice(p));
    return A;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \************************************************) {
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \***********************************e === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \****************************************************At(pos) {
    return $at(this, pos);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \************************************************nd - search.length, end) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \******************************************************00));
    }
    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \***********************************************gth > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \***********************************************{
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*******************************************createHTML(this, 'a', 'href', url);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \******************************************i]));
    }
    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \*********************************************ules/core-js/modules/_string-repeat.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \**************************************************, index + search.length) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \******************************************rn createHTML(this, 'sup', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*******************************************trim() {
    return $trim(this, 3);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \**************************************]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \**************************************************-js/modules/_set-species.js")(ARRAY_BUFFER);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \***********************************************e-js/modules/_typed-buffer.js").DataView
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \*************************************************it(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \*********************************************************s, data, byteOffset, length);
  };
}, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \****************************************urn method.call(this, a, b);
    });
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \****************************************T), value, true);
  }
}, weak, false, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \**********************************************modules/_add-to-unscopables.js")('flatMap');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \**********************************************odules/_add-to-unscopables.js")('includes');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);
$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*******************************************************************key, desc);
    }
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \*********************************************values(it) {
    return $values(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \***********************************************row e;
      });
    } : onFinally);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \************************************************1 ? arguments[1] : undefined, true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \*************************************************  return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*****************************************************s/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \********************************************ne(proto, key, $iterators[key], true);
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*****************************************$task.set,
  clearImmediate: $task.clear
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \**************************************
  setInterval: wrap(global.setInterval)
});

/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \***************************** "./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectAction.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else iet).concat(Object.getOwnPrope {
if (console && console.warn) consoton EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helpe Function. Received type ' + typeof listener);
  }
}
Object.defineProperty(EventEmitteret: func arg + '.');
    }
    dis._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero fo r.defaultMaxListeners;
  return that._maxetMaxListeners() {
  return _geA  ProcessEmitWarning(w);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.
stener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return e, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removettener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, ers(type) {
  return _listener{
    return listenerCount.call(emitter, type);
  }
};
    return evlistener.length;
    }
vt[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),

/***/ "./node_modules/gameanalytics/dist/GameAnalytics.node.js":
/*!***************************************************************!*\
  !*** ./node_modules/gameanalytics/dist/GameAnalytics.node.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p  };
   Helper(f)finalize(this._oKey.clone().concat(f));
    }
  });
})();

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights rUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
})();
var gameanalytics;
(function (gameanalytics) {
  var EGAErrorSeverity;
  (function (EGAErrorSeverity) {
    EGAErrorSeverity[EGAErrorSeverity["Undefined"] = 0] = "Undefined";
    EGAErrorSeverity[EGAErrorSeverity["Debug"] = 1] = "Debug";
    EGAErrorSeverity[EGAErrorSeverity["Info"] = 2] = "Info";
    EGAErrorSeverity[EGAErrorSeverity["Warning"] = 3] = "Warning";
    EGAErrorSeverity[EGAErrorSeverity["Error"] = 4] = "Error";
    EGAErrorSeverity[EGAErrorSeverity["Critical"] = 5] = "Critical";
  })(EGAErrorSeverity = gameanalytics.EGAErrorSeverity || (gameanalytics.EGAErrorSeverity = {}));
  var EGAProgressionStatus;
  (function (EGAProgressionStatus) {
    EGAProgressionStatus[EGAProgressionStatus["Undefined"] = 0] = "Undefined";
    EGAProgressionStatus[EGAProgressionStatus["Start"] = 1] = "Start";
    EGAProgressionStatus[EGAProgressionStatus["Complete"] = 2] = "Complete";
    EGAProgressionStatus[EGAProgressionStatus["Fail"] = 3] = "Fail";
  })(EGAProgressionStatus = gameanalytics.EGAProgressionStatus || (gameanalytics.EGAProgressionStatus = {}));
  var EGAResourceFlowType;
  (function (EGAResourceFlowType) {
    EGAResourceFlowType[EGAResourceFlowType["Undefined"] = 0] = "Undefined";
    EGAResourceFlowType[EGAResourceFlowType["Source"] = 1] = "Source";
    EGAResourceFlowType[EGAResourceFlowType["Sink"] = 2] = "Sink";
  })(EGAResourceFlowType = gameanalytics.EGAResourceFlowType || (gameanalytics.EGAResourceFlowType = {}));
  var http;
GAHTTPApiResponse["Created"] = 10] = "Created";
    })(EGAHTTPApiResponse = http.EGAHTTPApiResponse || (http.EGAHTTPApiResponse = {}));
  })(http = gameanalytics.http || (gameanalytics.http = {}));
  var events;
  (gory[EGASdkErrorCategory["Json"] = 5] = "Json";
    })(EGASdkErrorCategory = events.EGASdkErrorCategory || (events.EGAS"AddEventsToStore"] = 12] = "AddEventsToStore";
    })(EGASdkErrorArea = events.EGASdkErrorArea || (events.EGASdkErrorArea = {}));
    var EGASdkErrorAction;
    (function (EGASdkErrorAction) {
      EGASdkErrorAction[EGASdkErrorAction["Undefined"] = 0] = "Undefined";
      EGASdkErrorAction[EGASdkErrorAction["InvalidCurrency"] = 1] = "InvalidCurrency";
      EGASdkErrorAction[EGASdkErrorAction["InvalidShortString"] = 2] = "InvalidShortString";
      EGASdkErrorAction[EGASdkErrorAction["InvalidEventPartLength"] = 3] = "InvalidEventPartLength";
      EGASdkErrorAction[EGASdkErrorAction["InvalidEventPartCharacters"] = 4] = "InvalidEventPartCharacters";
      EGASdkErrorAction[EGASdkErrorAction["InvalidStore"] = 5] = "InvalidStore";
      EGASdkErrorAction[EGASdkErrorAction["InvalidFlowType"] = 6] = "InvalidFlowType";
      EGASdkErrorAction[EGASdkErrorAction["StringEmptyOrNull"] = 7] = "StringEmptyOrNull";
      EGASdkErrorAction[EGASdkErrorAction["NotFoundInAvailableCurrencies"] = 8] = "NotFoundInAvailableCurrencies";
      EGASdkErrorAction[EGASdkErrorAction["InvalidAmount"] = 9] = "InvalidAmount";
      EGASdkErrorAction[EGASdkErrorAction["NotFoundInAvailableItemTypes"] = 10] = "NotFoundInAvailableItemTypes";
      EGASdkErrorAction[EGASdkErrorAction["WrongProgressionOrder"] = 11] = "WrongProgressionOrder";
      EGASdkErrorAction[EGASdkErrorAction["InvalidEventIdLength"] = 12] = "InvalidEventIdLength";
      EGASdkErrorAction[EGASdkErrorAction["InvalidEventIdCharacters"] = 13] = "InvalidEventIdCharacters";
      EGASdkErrorAction[EGASdkErrorAction["InvalidProgressionStatus"] = 15] = "InvalidProgressionStatus";
      EGASdkErrorAction[EGASdkErrorAction["InvalidSeverity"] = 16] = "InvalidSeverity";
      EGASdkErrorAction[EGASdkErrorAction["InvalidLongString"] = 17] = "InvalidLongString";
      EGASdkErrorAction[EGASdkErrorAction["DatabaseTooLarge"] = 18] = "DatabaseTooLarge";
      EGASdkErrorAction[EGASdkErrorAction["DatabaseOpenOrCreate"] = 19] = "DatabaseOpenOrCreate";
      EGASdkErrorAction[EGASdkErrorAction["JsonError"] = 25] = "JsonError";
      EGASdkErrorAction[EGASdkErrorAction["FailHttpJsonDecode"] = 29] = "FailHttpJsonDecode";
      EGASdkErrorAction[EGASdkErrorAction["FailHttpJsonEncode"] = 30] = "FailHttpJsonEncode";
    })(EGASdkErrorAction = events.EGASdkErrorAction || (events.EGASdkESdkErrorParameter["Message"] = 14] = "Message";
    })(EGASdkErrorParameter = events.EGASdkErrorParameter || (events.EGASdkErrorParameter = {}));
  })(events = gameanalytics.events || (gameanalytics.events = {}));
})(gameanalytics || (gameanalytics = {}));
var EGAErrorSeverity = gameanalytics.EGAErrorSeverity;
var EGAProgressionStatus = gameanalytics.EGAProgressionStatus;
var EGAResourceFlowType = gameanalytics.EGAResourceFlowType;
var gameanalytics;
(function (gameanalytics) {
  var logging;
  (fue[EGALoggerMessageType["Debug"] = 3] = "Debug";
    })(EGALoggerMessageType || (EGALoggerMessaer() {
        GALogger.debugEnabled = false;
      }
      GALogger.setInfoLog = function (value) {
        GALogger.instance.infoLogEnabled = value;
      };
      GALogger.setVerboseLog = function (value) {
        GALogger.instance.infoLogVerboseEnabled = value;
      };
      GALogger.i = function (format) {
        if (!GALogger.instance.infoLogEnabled) {
          return;
        }
        var message = "Info/" + GALogger.Tag + ": " + format;
        GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Info);
      };
      GALogger.w = function (format) {
        var message = "Warning/" + GALogger.Tag + ": " + format;
        GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Warning);
      };
      GALogger.e = function (format) {
        var message = "Error/" + GALogger.Tag + ": " + format;
        GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Error);
      };
      GALogger.ii = function (format) {
        if (!GALogger.instance.infoLogVerboseEnabled) {
          return;
        }
        var message = "Verbose/" + GALogger.Tag + ": " + format;
        GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Info);
      };
      GALogger.d = function (format) {
        if (!GALogger.debugEnabled) {
          return;
        }
        var message = "Debug/" + GALogger.Tag + ": " + format;
        GALogger.instance.sendNotificationMessage(message, EGALoggerMessageType.Debug);
      };
      GALogger.prototype.sendNotificationMessage = function (message, type) {
        switch (type) {
          case EGALoggerMessageType.Error:
            {
              console.error(message);
            }
            break;
          case EGALoggerMessageType.Warning:
            {
              console.warn(message);
            }
            break;
          case EGALoggerMessageType.Debug:
            {
              if (typeof console.debug === "function") {
                console.debug(message);
              } else {
                console.log(message);
              }
            }
            break;
          case EGALoggerMessageType.Info:
            {
              console.log(message);
            }
            break;
        }
      };
      GALogger.instance = new GALogger();
      GALogger.Tag = "GameAnalytics";
      return GALogger;
    }();
    logging.GALogger = GALogger;
  })(logging = gameanalytics.logging || (gameanalytics.logging = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var utilities;
  (function (utilities) {
    var GALogger = gameanalytics.logging.GALogger;
    var GAUtilities = function () {
      function GAUtilities() {}
      GAUtilities.getHmac = function (key, data) {
        var encryptedMessage = CryptoJS.HmacSHA256(data, key);
        return CryptoJS.enc.Base64.stringify(encryptedMessage);
      };
      GAUtilities.stringMatch = function (s, pattern) {
        if (!s || !pattern) {
          return false;
        }
        return pattern.test(s);
      };
      GAUtilities.joinStringArray = function (v, delimiter) {
        var result = "";
        for (var i = 0, il = v.length; i < il; i++) {
          if (i > 0) {
            result += delimiter;
          }
          result += v[i];
        }
        return result;
      };
      GAUtilities.stringArrayContainsString = function (array, search) {
        if (array.length === 0) {
          return false;
        }
        for (var s in array) {
          if (array[s] === search) {
            return true;
          }
        }
        return false;
      };
      GAUtilities.encode64 = function (input) {
        input = encodeURI(input);
        var output = "";
        var chr1,
          chr2,
          chr3 = 0;
        var enc1,
          enc2,
          enc3,
          enc4 = 0;
        var i = 0;
        do {
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = (chr1 & 3) << 4 | chr2 >> 4;
          enc3 = (chr2 & 15) << 2 | chr3 >> 6;
          enc4 = chr3 & 63;
          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }
          output = output + GAUtilities.keyStr.charAt(enc1) + GAUtilities.keyStr.charAt(enc2) + GAUtilities.keyStr.charAt(enc3) + GAUtilities.keyStr.charAt(enc4);
          chr1 = chr2 = chr3 = 0;
          enc1 = enc2 = enc3 = enc4 = 0;
        } while (i < input.length);
        return output;
      };
      GAUtilities.decode64 = function (input) {
        var output = "";
        var chr1,
          chr2,
          chr3 = 0;
        var enc1,
          enc2,
          enc3,
          enc4 = 0;
        var i = 0;
        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
          GALogger.w("There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding.");
        }
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
          enc1 = GAUtilities.keyStr.indexOf(input.charAt(i++));
          enc2 = GAUtilities.keyStr.indexOf(input.charAt(i++));
          enc3 = GAUtilities.keyStr.indexOf(input.charAt(i++));
          enc4 = GAUtilities.keyStr.indexOf(input.charAt(i++));
          chr1 = enc1 << 2 | enc2 >> 4;
          chr2 = (enc2 & 15) << 4 | enc3 >> 2;
          chr3 = (enc3 & 3) << 6 | enc4;
          output = output + String.fromCharCode(chr1);
          if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
          }
          chr1 = chr2 = chr3 = 0;
          enc1 = enc2 = enc3 = enc4 = 0;
        } while (i < input.length);
        return decodeURI(output    return Math.round(date.getTime() / 1000);
      };
      GAUtilities.createGuid = function () {
        return (GAUtilities.s4() + GAUtilities.s4() + "-" + GAUtilities.s4() + "-4" + GAUtilities.s4().substr(0, 3) + "-" + GAUtilities.s4() + "-" + GAUtilities.s4() + GAUtilities.s4() + GAUtilities()) * 0x10000 | 0).toString(16).substring(1);
      };
      GAUtilities.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      return GAUtilities;
    }();
    utilities.GAUtilities = GAUtilities;
  })(utilities = gameanalytics.utilities || (gameanalytics.utilities = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var validators;
  (function (validators) {
    var GALogger = gameanalytics.logging.GALogger;
    var GAUtilities = gameanalytics.utilities.GAUtilities;
    var EGASdkErrorCategory = gameanalytics.events.EGASdkErrorCategory;
    var EGASdkErrorArea = gameanalytics.events.EGASdkErrorArea;
    var EGASdkErrorAction = gameanalytics.events.EGASdkErrorAction;
    var EGASdkErrorParameter = gameanalytics.ev reason;
      }
      return ValidationResult;
    }();
    validators.ValidationResult = ValidationResult;
    var GAValidator = function () {
      function GAValidator() {}
      GAValidator.validateBusinessEvent = function (currency, amount, cartType, itemType, itemId) {
        if (!GAValidator.validateCurrency(currency)) {
          GALogger.w("Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " + currency);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidCurrency, EGASdkErrorParameter.Currency, currency);
        }
        if (amount < 0) {
          GALogger.w("Validation fail - business event - amount. Cannot be less than 0. Failed amount: " + amount);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidAmount, EGASdkErrorParameter.Amount, amount + "");
        }
        if (!GAValidator.validateShortString(cartType, true)) {
          GALogger.w("Validation fail - business event - cartType. Cannot be above 32 length. String: " + cartType);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidShortString, EGASdkErrorParameter.CartType, cartType);
        }
        if (!GAValidator.validateEventPartLength(itemType, false)) {
          GALogger.w("Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " + itemType);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemType, itemType);
        }
        if (!GAValidator.validateEventPartCharacters(itemType)) {
          GALogger.w("Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemType);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemType, itemType);
        }
        if (!GAValidator.validateEventPartLength(itemId, false)) {
          GALogger.w("Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " + itemId);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemId, itemId);
        }
        if (!GAValidator.validateEventPartCharacters(itemId)) {
          GALogger.w("Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemId);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.BusinessEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemId, itemId);
        }
        return null;
      };
      GAValidator.validateResourceEvent = function (flowType, currency, amount, itemType, itemId, availableCurrencies, availableItemTypes) {
        if (flowType == gameanalytics.EGAResourceFlowType.Undefined) {
          GALogger.w("Validation fail - resource event - flowType: Invalid flow type.");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidFlowType, EGASdkErrorParameter.FlowType, "");
        }
        if (!currency) {
          GALogger.w("Validation fail - resource event - currency: Cannot be (null)");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.StringEmptyOrNull, EGASdkErrorParameter.Currency, "");
        }
        if (!GAUtilities.stringArrayContainsString(availableCurrencies, currency)) {
          GALogger.w("Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " + currency);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.NotFoundInAvailableCurrencies, EGASdkErrorParameter.Currency, currency);
        }
        if (!(amount > 0)) {
          GALogger.w("Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " + amount);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidAmount, EGASdkErrorParameter.Amount, amount + "");
        }
        if (!itemType) {
          GALogger.w("Validation fail - resource event - itemType: Cannot be (null)");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.StringEmptyOrNull, EGASdkErrorParameter.ItemType, "");
        }
        if (!GAValidator.validateEventPartLength(itemType, false)) {
          GALogger.w("Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " + itemType);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemType, itemType);
        }
        if (!GAValidator.validateEventPartCharacters(itemType)) {
          GALogger.w("Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemType);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemType, itemType);
        }
        if (!GAUtilities.stringArrayContainsString(availableItemTypes, itemType)) {
          GALogger.w("Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " + itemType);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.NotFoundInAvailableItemTypes, EGASdkErrorParameter.ItemType, itemType);
        }
        if (!GAValidator.validateEventPartLength(itemId, false)) {
          GALogger.w("Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " + itemId);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.ItemId, itemId);
        }
        if (!GAValidator.validateEventPartCharacters(itemId)) {
          GALogger.w("Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + itemId);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ResourceEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.ItemId, itemId);
        }
        return null;
      };
      GAValidator.validateProgressionEvent = function (progressionStatus, progression01, progression02, progression03) {
        if (progressionStatus == gameanalytics.EGAProgressionStatus.Undefined) {
          GALogger.w("Validation fail - progression event: Invalid progression status.");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidProgressionStatus, EGASdkErrorParameter.ProgressionStatus, "");
        }
        if (progression03 && !(progression02 || !progression01)) {
          GALogger.w("Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03.");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.WrongProgressionOrder, EGASdkErrorParameter.Undefined, progression01 + ":" + progression02 + ":" + progression03);
        } else if (progression02 && !progression01) {
          GALogger.w("Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.WrongProgressionOrder, EGASdkErrorParameter.Undefined, progression01 + ":" + progression02 + ":" + progression03);
        } else if (!progression01) {
          GALogger.w("Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.WrongProgressionOrder, EGASdkErrorParameter.Undefined, (progression01 ? progression01 : "") + ":" + (progression02 ? progression02 : "") + ":" + (progression03 ? progression03 : ""));
        }
        if (!GAValidator.validateEventPartLength(progression01, false)) {
          GALogger.w("Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " + progression01);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.Progression01, progression01);
        }
        if (!GAValidator.validateEventPartCharacters(progression01)) {
          GALogger.w("Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression01);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.Progression01, progression01);
        }
        if (progression02) {
          if (!GAValidator.validateEventPartLength(progression02, true)) {
            GALogger.w("Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " + progression02);
            return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.Progression02, progression02);
          }
          if (!GAValidator.validateEventPartCharacters(progression02)) {
            GALogger.w("Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression02);
            return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.Progression02, progression02);
          }
        }
        if (progression03) {
          if (!GAValidator.validateEventPartLength(progression03, true)) {
            GALogger.w("Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " + progression03);
            return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartLength, EGASdkErrorParameter.Progression03, progression03);
          }
          if (!GAValidator.validateEventPartCharacters(progression03)) {
            GALogger.w("Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + progression03);
            return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ProgressionEvent, EGASdkErrorAction.InvalidEventPartCharacters, EGASdkErrorParameter.Progression03, progression03);
          }
        }
        return null;
      };
      GAValidator.validateDesignEvent = function (eventId) {
        if (!GAValidator.validateEventIdLength(eventId)) {
          GALogger.w("Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 32 characters or less. String: " + eventId);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.DesignEvent, EGASdkErrorAction.InvalidEventIdLength, EGASdkErrorParameter.EventId, eventId);
        }
        if (!GAValidator.validateEventIdCharacters(eventId)) {
          GALogger.w("Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " + eventId);
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.DesignEvent, EGASdkErrorAction.InvalidEventIdCharacters, EGASdkErrorParameter.EventId, eventId);
        }
        return null;
      };
      GAValidator.validateErrorEvent = function (severity, message) {
        if (severity == gameanalytics.EGAErrorSeverity.Undefined) {
          GALogger.w("Validation fail - error event - severity: Severity was unsupported value.");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ErrorEvent, EGASdkErrorAction.InvalidSeverity, EGASdkErrorParameter.Severity, "");
        }
        if (!GAValidator.validateLongString(message, true)) {
          GALogger.w("Validation fail - error event - message: Message cannot be above 8192 characters.");
          return new ValidationResult(EGASdkErrorCategory.EventValidation, EGASdkErrorArea.ErrorEvent, EGASdkErrorAction.InvalidLongString, EGASdkErrorParameter.Message, message);
        }
        return null;
      };
      GAValidator.validateSdkErrorEvent = function (gameKey, gameSecret, category, area, action) {
        if (!GAValidator.validateKeys(gameKey, gameSecret)) {
          return false;
        }
        if (category === EGASdkErrorCategory.Undefined) {
          GALogger.w("Validation fail - sdk error event - type: Category was unsupported value.");
          return false;
        }
        if (area === EGASdkErrorArea.Undefined) {
          GALogger.w("Validation fail - sdk error event - type: Area was unsupported value.");
          return false;
        }
        if (action === EGASdkErrorAction.Undefined) {
          GALogger.w("Validation fail - sdk error event - type: Action was unsupported value.");
          return false;
        }
        return true;
      };
      GAValidator.validateKeys = function (gameKey, gameSecret) {
        if (GAUtilities.stringMatch(gameKey, /^[A-z0-9]{32}$/)) {
          if (GAUtilities.stringMatch(gameSecret, /^[A-z0-9]{40}$/)) {
            return true;
          }
        }
        return false;
      };
      GAValidator.validateCurrency = function (currency) {
        if (!currency) {
          return false;
        }
        if (!GAUtilities.stringMatch(currency, /^[A-Z]{3}$/)) {
          return false;
        }
        return true;
      };
      GAValidator.validateEventPartLength = function (eventPart, allowNull) {
        if (allowNull && !eventPart) {
          return true;
        }
        if (!eventPart) {
          return false;
        }
        if (eventPart.length > 64) {
          return false;
        }
        return true;
      };
      GAValidator.validateEventPartCharacters = function (eventPart) {
        if (!GAUtilities.stringMatch(eventPart, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/)) {
          return false;
        }
        return true;
      };
      GAValidator.validateEventIdLength = function (eventId) {
        if (!eventId) {
          return false;
        }
        if (!GAUtilities.stringMatch(eventId, /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/)) {
          return false;
        }
        return true;
      };
      GAValidator.validateEventIdCharacters = function (eventId) {
        if (!eventId) {
          return false;
        }
        if (!GAUtilities.stringMatch(eventId, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/)) {
          return false;
        }
        return true;
      };
      GAValidator.validateAndCleanInitRequestResponse = function (initResponse, configsCreated) {
        if (initResponse == null) {
          GALogger.w("validateInitRequestResponse failed - no response dictionary.");
          return null;
        }
        var validatedDict = {};
        try {
          var serverTsNumber = initResponse["server_ts"];
          if (serverTsNumber > 0) {
            validatedDict["server_ts"] = serverTsNumber;
          } else {
            GALogger.w("validateInitRequestResponse failed - invalid value in 'server_ts' field.");
            return null;
          }
        } catch (e) {
          GALogger.w("validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" + typeof initResponse["server_ts"] + ", value=" + initResponse["server_ts"] + ", " + e);
          return null;
        }
        if (configsCreated) {
          try {
            var configurations = initResponse["configs"];
            validatedDict["configs"] = configurations;
          } catch (e) {
            GALogger.w("validateInitRequestResponse failed - invalid type in 'configs' field. type=" + typeof initResponse["configs"] + ", value=" + initResponse["configs"] + ", " + e);
            return null;
          }
          try {
            var configs_hash = initResponse["configs_hash"];
            validatedDict["configs_hash"] = configs_hash;
          } catch (e) {
            GALogger.w("validateInitRequestResponse failed - invalid type in 'configs_hash' field. type=" + typeof initResponse["configs_hash"] + ", value=" + initResponse["configs_hash"] + ", " + e);
            return null;
          }
          try {
            var ab_id = initResponse["ab_id"];
            validatedDict["ab_id"] = ab_id;
          } catch (e) {
            GALogger.w("validateInitRequestResponse failed - invalid type in 'ab_id' field. type=" + typeof initResponse["ab_id"] + ", value=" + initResponse["ab_id"] + ", " + e);
            return null;
          }
          try {
            var ab_variant_id = initResponse["ab_variant_id"];
            validatedDict["ab_variant_id"] = ab_variant_id;
          } catch (e) {
            GALogger.w("validateInitRequestResponse failed - invalid type in 'ab_variant_id' field. type=" + typeof initResponse["ab_variant_id"] + ", value=" + initResponse["ab_variant_id"] + ", " + e);
            return null;
          }
        }
        return validatedDict;
      };
      GAValidator.validateBuild = function (build) {
        if (!GAValidator.validateShortString(build, false)) {
          return false;
        }
        return true;
      };
      GAValidator.validateSdkWrapperVersion = function (wrapperVersion) {
        if (!GAUtilities.stringMatch(wrapperVersion, /^(unity|unreal|gamemaker|cocos2d|construct|defold) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)) {
          return false;
        }
        return true;
      };
      GAValidator.validateEngineVersion = function (engineVersion) {
        if (!engineVersion || !GAUtilities.stringMatch(engineVersion, /^(unity|unreal|gamemaker|cocos2d|construct|defold) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)) {
          return false;
        }
        return true;
      };
      GAValidator.validateUserId = function (uId) {
        if (!GAValidator.validateString(uId, false)) {
          GALogger.w("Validation fail - user id: id cannot be (null), empty or above 64 characters.");
          return false;
        }
        return true;
      };
      GAValidator.validateShortString = function (shortString, canBeEmpty) {
        if (canBeEmpty && !shortString) {
          return true;
        }
        if (!shortString || shortString.length > 32) {
          return false;
        }
        return true;
      };
      GAValidator.validateString = function (s, canBeEmpty) {
        if (canBeEmpty && !s) {
          return true;
        }
        if (!s || s.length > 64) {
          return false;
        }
        return true;
      };
      GAValidator.validateLongString = function (longString, canBeEmpty) {
        if (canBeEmpty && !longString) {
          return true;
        }
        if (!longString || longString.length > 8192) {
          return false;
        }
        return trueconnectionType, /^(wwan|wifi|lan|offline)$/);
      };
      GAValidator.validateCustomDimensions = function (customDimensions) {
        return GAValidator.validateArrayOfStrings(20, 32, false, "custom dimensions", customDimensions);
      };
      GAValidator.validateResourceCurrencies = function (resourceCurrencies) {
        if (!GAValidator.validateArrayOfStrings(20, 64, false, "resource currencies", resourceCurrencies)) {
          return false;
        }
        for (var i = 0; i < resourceCurrencies.length; ++i) {
          if (!GAUtilities.stringMatch(resourceCurrencies[i], /^[A-Za-z]+$/)) {
            GALogger.w("resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " + resourceCurrencies[i]);
            return false;
          }
        }
        return true;
      };
      GAValidator.validateResourceItemTypes = function (resourceItemTypes) {
        if (!GAValidator.validateArrayOfStrings(20, 32, false, "resource item types", resourceItemTypes)) {
          return false;
        }
        for (var i = 0; i < resourceItemTypes.length; ++i) {
          if (!GAValidator.validateEventPartCharacters(resourceItemTypes[i])) {
            GALogger.w("resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " + resourceItemTypes[i]);
            return false;
          }
        }
        return true;
      };
      GAValidator.validateDimension01 = function (dimension01, availableDimensions) {
        if (!dimension01) {
          return true;
        }
        if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension01)) {
          return false;
        }
        return true;
      };
      GAValidator.validateDimension02 = function (dimension02, availableDimensions) {
        if (!dimension02) {
          return true;
        }
        if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension02)) {
          return false;
        }
        return true;
      };
      GAValidator.validateDimension03 = function (dimension03, availableDimensions) {
        if (!dimension03) {
          return true;
        }
        if (!GAUtilities.stringArrayContainsString(availableDimensions, dimension03)) {
          return false;
        }
        return true;
      };
      GAValidator.validateArrayOfStrings = function (maxCount, maxStringLength, allowNoValues, logTag, arrayOfStrings) {
        var arrayTag = logTag;
        if (!arrayTag) {
          arrayTag = "Array";
        }
        if (!arrayOfStrings) {
          GALogger.w(arrayTag + " validation failed: array cannot be null. ");
          return false;
        }
        if (allowNoValues == false && arrayOfStrings.length == 0) {
          GALogger.w(arrayTag + " validation failed: array cannot be empty. ");
          return false;
        }
        if (maxCount > 0 && arrayOfStrings.length > maxCount) {
          GALogger.w(arrayTag + " validation failed: array cannot exceed " + maxCount + " values. It has " + arrayOfStrings.length + " values.");
          return false;
        }
        for (var i = 0; i < arrayOfStrings.length; ++i) {
          var stringLength = !arrayOfStrings[i] ? 0 : arrayOfStrings[i].length;
          if (stringLength === 0) {
            GALogger.w(arrayTag + " validation failed: contained an empty string. Array=" + JSON.stringify(arrayOfStrings));
            return false;
          }
          if (maxStringLength > 0 && stringLength > maxStringLength) {
            GALogger.w(arrayTag + " validation failed: a string exceeded max allowed length (which is: " + maxStringLength + "). String was: " + arrayOfStrings[i]);
            return false;
          }
        }
        return true;
      };
      GAValidator.validateClientTs = function (clientTs) {
        if (clientTs < -4294967295 + 1 || clientTs > 4294967295 - 1) {
          return false;
        }
        return true;
      };
      return GAValidator;
    }();
    validators.GAValidator = GAValidator;
  })(validators = gameanalytics.validators || (gameanalytics.validators = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var deviversion;
      }
      return NameValueVersion;
    }();
    device.NameVon = version;
      }
      return NameVersion;
    }();
    device.NameVersion = NameVersion;
    var GADevice = function () {
      function GADevice() {}
      GADevice.touch = function () {};
      GADevice.getRelevantSdkVersion = function () {
        if (GADevice.sdkGameEngineVersion) {
          return GADevice.sdkGameEngineVersion;
        }
        return GADevice.sdkWrapperVersion;
      };
      GADevice.getConnectionType = function () {
        return GADevice.connectionType;
      };
      GADevice.updateConnectionType = function () {
        if (navigator.onLine) {
          if (GADevice.buildPlatform === "ios" || GADevice.buildPlatform === "android") {
            GADevice.connectionType = "wwan";
          } else {
            GADevice.connectionType = "lan";
          }
        } else {
          GADevice.connectionType = "offline";
 tform + " " + GADevice.osVersionPair.version;
      };
      GADevice.runtimePlatformToString = function () {
        return GADevice.osVersionPair.name;
      };
      GADevice.getBrowserVersionString = function () {
        var ua = navigator.userAgent;
        var tem;
        var M = ua.match(/(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i) || [];
        if (M.length == 0) {
          if (GADevice.buildPlatform === "ios") {
            return "webkit_" + GADevice.osVersion;
          }
        }
        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
          tem = ua.match(/\b(OPR|Edge|UBrowser)\/(\d+)/);
          if (tem != null) {
            return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('UBrowser', 'UC').toLowerCase();
          }
        }
        if (M[1] && M[1].toLowerCase() === 'fbav') {
          M[1] = "facebook";
          if (M[2]) {
            return "facebook " + M[2];
          }
        }
        var MString = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
          MString.splice(1, 1, tem[1]);
        }
        return MString.join(' ').toLowerCase();
      };
      GADevice.getDeviceModel = function () {
        var result = "unknown";
        return rear result = "unknown";
        return result;
      };
      GADevice.matchItem = function (agent, data) {
        var result = new NameVersion("unknown", "0.0.0");
        var i = 0;
        var j = 0;
        var regex;
        var regexv;
        var match;
        var matches;
        var mathcesResult;
        var version;
        for (i = 0; i < data.length; i += 1) {
          regex = new RegExp(data[i].value, 'i');
          match = regex.test(agent);
          if (match) {
            regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
            matches = agent.match(regexv);
            version = '';
            if (matches) {
              if (matches[1]) {
                mathcesResult = matches[1];
              }
            }
            if (mathcesResult) {
              var matchesArray = mathcesResult.split(/[._]+/);
              for (j = 0; j < Math.min(matchesArray.length, 3); j += 1) {
                version += matchesArray[j] + (j < Math.min(matchesArray.length, 3) - 1 ? '.' : '');
              }
            } else {
              version = '0.0.0';
            }
            result.name = data[i].name;
            result.version = version;
            return result;
          }
        }
        return result;
      };
      GADevice.sdkWrapperVersion = "javascript 4.0.10";
      GADevice.osVersionPair = GADevice.matchItem([navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor].join(' '), [new NameValueVersion("windows_phone", "Windows Phone", "OS"), new NameValueVersion("windows", "Win", "NT"), new NameValueVersion("ios", "iPhone", "OS"), new NameValueVersion("ios", "iPad", "OS"), new NameValueVersion("ios", "iPod", "OS"), new NameValueVersion("android", "Android", "Android"), new NameValueVersion("blackBerry", "BlackBerry", "/"), new NameValueVersion("mac_osx", "Mac", "OS X"), new NameValueVersion("tizen", "Tizen", "Tizen"), new NameValueVersion("linux", "Linux", "rv")]);
      GADevice.buildPlatform = GADevice.runtimePlatformToString();
      GADevice.deviceModel = GADevice.getDeviceModel();
      GADevice.deviceManufacturer = GADevice.getDeviceManufacturer();
      GADevice.osVersion = GADevice.getOSVersionString();
      GADevice.browserVersion = GADevice.getBrowserVersionString();
      return GADevice;
    }();
    device.GADevice = GADevice;
  })(device = gameanalytics.device || (gameanalytics.device = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var threading;
  (function (threading) {
    var TimedBlock = function () {
      function TimedBlock(deadline) {
        this.deadline = deadline;
        this.ignore = false;
        this.async = false;
        this.running = false;
        this.id = ++TimedBlock.idCounter;
      }
      TimedBlock.idCounter = 0;
      return TimedBlock;
    }();
    threading.TimedBlock = TimedBlock;
  })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var threading;
  (function (thrubQueues = {};
        this._sortedKeys = [];
      }
      PriorityQueue.prototype.enqueue = function (priority, item) {
        if (this._sortedKeys.indexOf(priority) === -1) {
          this.addQueueOfPriority(priority);
        }
        this._subQueues[priority].push(item);
      };
      PriorityQueue.prototype.addQueueOfPriority = function (priority) {
        var _this = this;
        this._sor       return _this.comparer.compare(x, y);
        });
        this._subQueues[priority] = [];
      };
      PriorityQueue.prototype.peek = function () {
        if (this.hasItems()) {
          return this._subQueues[this._sortedKeys[0]][0];
        } else {
          throw new Error("The queue is empty");
      {
        return this._sortedKeys.length > 0;
      };
      PriorityQueue.prototype.dequeue = function () {
        if (this.hasItems()) {
          return this.dequeueFromHighPriorityQueue();
        } else {
          throw new Error("The queue is empty");
        }
      };
      PriorityQueue.prototype.dequeueFromHighPriorityQueue = function () {
        var firstKey = this._sortedKeys[0];
        var nextItem = this._subQueues[firstKey].shift();
        if (this._subQueues[firstKey].length === 0) {
          this._sortedKeys.shift();
          delete this._subQueues[firstKey];
        }
        return nextItem;
      };
      return PriorityQueue;
    }();
    threading.PriorityQueue = PriorityQueue;
  })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var store;
  (function (store_1) {
    var GALogger = gameanalytics.logging.GALogger;
    var EGAStoreArgsOperator;
    (function (EGAStoreArgsOperator) {
      EGAStoreArgsOperator[EGAStoreArgsOperator["Equal"] = 0] = "Equal";
      EGAStoreArgsOperator[EGAStoreArgsOperator["LessOrEqual"] = 1] = "LessOrEqual";
      EGAStoreArgsOperator[EGAStoreArgsOperator["NotEqual"] = 2] = "NotEqual";
    })(EGAStoreArgsOperator = store_1.EGAStoreArgsOperator || (store_e[EGAStore["Progression"] = 2] = "Progression";
    })(EGAStore = store_1.EGAStore || (store_1.EGAStore = {}));
    var GAStore = function () {
      function GAStore() {
        this.eventsStore = [];
        this.sessionsStore = [];
        this.progressionStore = [];
        this.storeItems = {};
        try {
          if (typeof localStorage === 'object') {
            localStorage.setItem('testingLocalStorage', 'yes');
            localStorage.removeItem('testingLocalStorage');
            GAStore.storageAvailable = true;
          } else {
            GAStore.storageAvailable = false;
          }
        } catch (e) {}
      }
      GAStore.isStorageAvailable = function () {
        return GAStore.storageAvailable;
      };
      GAStore.isStoreTooLargeForEvents = function () {
        return GAStore.instance.eventsStore.length + GAStore.instance.sessionsStore.length > GAStore.MaxNumberOfEntries;
      };
      GAStore.select = function (store, args, sort, maxCount) {
        if (args === void 0) {
          args = [];
        }
        if (sort === void 0) {
          sort = false;
        }
        if (maxCount === void 0) {
          maxCount = 0;
        }
        var currentStore = GAStore.getStore(store);
        if (!currentStore) {
          return null;
        }
        var result = [];
        for (var i = 0; i < currentStore.length; ++i) {
          var entry = currentStore[i];
          var add = true;
          for (var j = 0; j < args.length; ++j) {
            var argsEntry = args[j];
            if (entry[argsEntry[0]]) {
              switch (argsEntry[1]) {
                case EGAStoreArgsOperator.Equal:
                  {
                    add = entry[argsEntry[0]] == argsEntry[2];
                  }
                  break;
                case EGAStoreArgsOperator.LessOrEqual:
                  {
                    add = entry[argsEntry[0]] <= argsEntry[2];
                  }
                  break;
                case EGAStoreArgsOperator.NotEqual:
                  {
                    add = entry[argsEntry[0]] != argsEntry[2];
                  }
                  break;
                default:
                  {
                    add = false;
                  }
                  break;
              }
            } else {
              add = false;
            }
            if (!add) {
              break;
            }
          }
          if (add) {
            result.push(entry);
            return a["client_ts"] - b["client_ts"];
          });
        }
        if (maxCount > 0 && result.length > maxCount) {
          result = result.slice(0, maxCount + 1);
        }
        return result;
      };
      GAStore.update = function (store, setArgs, whereArgs) {
        if (whereArgs === void 0) {
          whereArgs = [];
        }
        var currentStore = GAStore.getStore(store);
        if (!currentStore) {
          return false;
        }
        for (var i = 0; i < currentStore.length; ++i) {
          var entry = currentStore[i];
          var update = true;
          for (var j = 0; j < whereArgs.length; ++j) {
            var argsEntry = whereArgs[j];
            if (entry[argsEntry[0]]) {
              switch (argsEntry[1]) {
                case EGAStoreArgsOperator.Equal:
                  {
                    update = entry[argsEntry[0]] == argsEntry[2];
                  }
                  break;
                case EGAStoreArgsOperator.LessOrEqual:
                  {
                    update = entry[argsEntry[0]] <= argsEntry[2];
                  }
                  break;
                case EGAStoreArgsOperator.NotEqual:
                  {
                    update = entry[argsEntry[0]] != argsEntry[2];
                  }
                  break;
                default:
                  {
                    update = false;
                  }
                  break;
              }
            } else {
              update = false;
            }
            if (!update) {
              break;
            }
          }
          if (update) {
            for (var j = 0; j < setArgs.length; ++j) {
              var setArgsEntry = setArgs[j];
              entry[setArgsEntry[0]] = setArgsEntry[1];
            }
          }
        }
        return true;
      };
      GAStore["delete"] = function (store, args) {
        var currentStore = GAStore.getStore(store);
        if (!currentStore) {
          return;
        }
        for (var i = 0; i < currentStore.length; ++i) {
          var entry = currentStore[i];
          var del = true;
          for (var j = 0; j < args.length; ++j) {
            var argsEntry = args[j];
            if (entry[argsEntry[0]]) {
              switch (argsEntry[1]) {
                case EGAStoreArgsOperator.Equal:
                  {
                    del = entry[argsEntry[0]] == argsEntry[2];
                  }
                  break;
                case EGAStoreArgsOperator.LessOrEqual:
                  {
                    del = entry[argsEntry[0]] <= argsEntry[2];
                  }
                  break;
                case EGAStoreArgsOperator.NotEqual:
                  {
                    del = entry[argsEntry[0]] != argsEntry[2];
                  }
                  break;
                default:
                  {
                    del = false;
                  }
                  break;
              }
            } else {
              del = false;
            }
            if (!del) {
              break;
            }
          }
          if (del) {
            currentStore.splice(i, 1);
            --i;
          }
        }
      };
      GAStore.insert = function (store, newEntry, replace, replaceKey) {
        if (replace === void 0) {
          replace = false;
        }
        if (replaceKey === void 0) {
          replaceKey = null;
        }
        var currentStore = GAStore.getStore(store);
        if (!currentStore) {
          return;
        }
        if (replace) {
          if (!replaceKey) {
            return;
          }
          var replaced = false;
          for (var i = 0; i < currentStore.length; ++i) {
            var entry = currentStore[i];
            if (entry[replaceKey] == newEntry[replaceKey]) {
              for (var s in newEntry) {
                entry[s] = newEntry[s];
              }
              replaced = true;
              break;
            }
          }
          if (!replaced) {
            currentStore.push(newEntry);
          }
        } else {
          currentStore.push(newEntry);
        }
      };
      GAStore.save = function (gameKey) {
        if (!GAStore.isStorageAvailable()) {
          GALogger.w("Storage is not available, cannot save.");
          return;
        }
        localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.EventsStoreKey), JSON.stringify(GAStore.instance.eventsStore));
        localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.SessionsStoreKey), JSON.stringify(GAStore.instance.sessionsStore));
        localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ProgressionStoreKey), JSON.stringify(GAStore.instance.progressionStore));
        localStorage.setItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ItemsStoreKey), JSON.stringify(GAStore.instance.storeItems));
      };
      GAStore.load = function (gameKey) {
        if (!GAStore.isStorageAvailable()) {
          GALogger.w("Storage is not available, cannot load.");
          return;
        }
        try {
          GAStore.instance.eventsStore = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.EventsStoreKey)));
          if (!GAStore.instance.eventsStore) {
            GAStore.instance.eventsStore = [];
          }
        } catch (e) {
          GALogger.w("Load failed for 'events' store. Using empty store.");
          GAStore.instance.eventsStore = [];
        }
        try {
          GAStore.instance.sessionsStore = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.SessionsStoreKey)));
          if (!GAStore.instance.sessionsStore) {
            GAStore.instance.sessionsStore = [];
          }
        } catch (e) {
          GALogger.w("Load failed for 'sessions' store. Using empty store.");
          GAStore.instance.sessionsStore = [];
        }
        try {
          GAStore.instance.progressionStore = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ProgressionStoreKey)));
          if (!GAStore.instance.progressionStore) {
            GAStore.instance.progressionStore = [];
          }
        } catch (e) {
          GALogger.w("Load failed for 'progression' store. Using empty store.");
          GAStore.instance.progressionStore = [];
        }
        try {
          GAStore.instance.storeItems = JSON.parse(localStorage.getItem(GAStore.StringFormat(GAStore.KeyFormat, gameKey, GAStore.ItemsStoreKey)));
          if (!GAStore.instance.storeItems) {
            GAStore.instance.storeItems = {};
          }
        } catch (e) {
          GALogger.w("Load failed for 'items' store. Using empty store.");
          GAStore.instance.progressionStore = [];
        }
      };
      GAStore.setItem = function (gameKey, key, value) {
        var keyWithPrefix = GAStore.StringFormat(GAStore.KeyFormat, gameKey, key);
        if (!value) {
          if (keyWithPrefix in GAStore.instance.storeItems) {
            delete GAStore.instance.storeItems[keyWithPrefix];
          }
        } else {
          GAStore.instance.storeItems[keyWithPrefix] = value;
        }
      };
      GAStore.getItem = function (gameKey, key) {
        var keyWithPrefix = GAStore.StringFormat(GAStore.KeyFormat, gameKey, key);
        if (keyWithPrefix in GAStore.instance.storeItems) {
          return GAStore.instance.storeItems[keyWithPrefix];
        } else {
          return null;
        }
      };
      GAStore.getStore = function (store) {
        switch (store) {
          case EGAStore.Events:
            {
              return GAStore.instance.eventsStore;
            }
          case EGAStore.Sessions:
            {
              return GAStore.instance.sessionsStore;
            }
          case EGAStore.Progression:
            {
              return GAStore.instance.progressionStore;
            }
          default:
            {
              GALogger.w("GAStore.getStore(): Cannot find store: " + store);
              return null;
            }
        }
      };
      GAStore.instance = new GAStore();
      GAStore.MaxNumberOfEntries = 2000;
      GAStore.StringFormat = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[ndex) {
          return args[index] || '';
        });
      };
      GAStore.KeyFormat = "GA::{0}::{1}";
      GAStore.EventsStoreKey = "ga_event";
      GAStore.SessionsStoreKey = "ga_session";
      GAStore.ProgressionStoreKey = "ga_progression";
      GAStore.ItemsStoreKey = "ga_items";
      return GAStore;
    }();
    store_1.GAStore = GAStore;
  })(store = gameanalytics.store || (gameanalytics.store = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var state;
  (function (state) {
    var GAValidator = gameanalytics.validators.GAValidator;
    var GAUtilities = gameanalytics.utilities.GAUtilities;
    var GALogger = gameanalytics.logging.GALogger;
    var GAStore = gameanalytics.store.GAStore;
    var GADevice = gameanalytics.device.GADevice;
    var EGAStore = gameanalytics.store.EGAStore;
    var EGAStoreArgsOperator = gameanalytics.store.EGAStoreArgsOperator;
    var GAState = function () {
      function GAState() {
        this.availableCustomDimensions01 = [];
        this.availableCustomDimensions02 = [];
        this.availableCustomDimensions03 = [];
        this.availableResourceCurrencies = [];
        this.availableResourceItemTypes = [];
        this.configurations = {};
        this.remoteConfigsListeners = [];
        this.sdkConfigDefault = {};
        this.sdkConfig = {};
        this.progressionTries = {};
        this._isEventSubmis = userId;
        GAState.cacheIdentifier();
      };
      GAState.getIdentifier = function () {
        return GAState.instance.identifier;
      };
      GAState.isInitialized = function () {
        return GAState.instance.initialized;
      };
      GAState.setInitialized = function (value) {
        GAState.instance.initialized = value;
      };
      GAState.getSessionStart = function () {
        return GAState.instance.sessionStart;
      };
      GAState.getSessionNum = function () {
        return GAState.instance.sessionNum;
      };
      GAState.getTransactionNum = function () {
        return GAState.instance.transactionNum;
      };
      GAState.getSessionId = function () {
        return GAState.instance.sessionId;
      };
      GAState.getCurrentCustomDimension01 = function () {
        return GAState.instance.currentCustomDimension01;
      };
      GAState.getCurrentCustomDimension02 = function () {
        return GAState.instance.currentCustomDimension02;
      };
      GAState.getCurrentCustomDimension03 = function () {
        return GAState.instance.currentCustomDimension03;
      };
      GAState.getGameKey = function () {
        return GAState.instance.gameKey;
      };
      GAState.getGameSecret = function () {
        return GAState.instance.gameSecret;
      };
      GAState.getAvailableCustomDimensions01 = function () {
        return GAState.instance.availableCustomDimensions01;
      };
      GAState.setAvailableCustomDimensions01 = function (value) {
        if (!GAValidator.validateCustomDimensions(value)) {
          return;
        }
        GAState.instance.availableCustomDimensions01 = value;
        GAState.validateAndFixCurrentDimensions();
        GALogger.i("Set available custom01 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
      };
      GAState.getAvailableCustomDimensions02 = function () {
        return GAState.instance.availableCustomDimensions02;
      };
      GAState.setAvailableCustomDimensions02 = function (value) {
        if (!GAValidator.validateCustomDimensions(value)) {
          return;
        }
        GAState.instance.availableCustomDimensions02 = value;
        GAState.validateAndFixCurrentDimensions();
        GALogger.i("Set available custom02 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
      };
      GAState.getAvailableCustomDimensions03 = function () {
        return GAState.instance.availableCustomDimensions03;
      };
      GAState.setAvailableCustomDimensions03 = function (value) {
        if (!GAValidator.validateCustomDimensions(value)) {
          return;
        }
        GAState.instance.availableCustomDimensions03 = value;
        GAState.validateAndFixCurrentDimensions();
        GALogger.i("Set available custom03 dimension values: (" + GAUtilities.joinStringArray(value, ", ") + ")");
      };
      GAState.getAvailableResourceCurrencies = function () {
        return GAState.instance.availableResourceCurrencies;
      };
      GAState.setAvailableResourceCurrencies = function (value) {
        if (!GAValidator.validateResourceCurrencies(value)) {
          return;
        }
        GAState.instance.availableResourceCurrencies = value;
        GALogger.i("Set available resource currencies: (" + GAUtilities.joinStringArray(value, ", ") + ")");
      };
      GAState.getAvailableResourceItemTypes = function () {
        return GAState.instance.availableResourceItemTypes;
      };
      GAState.setAvailableResourceItemTypes = function (value) {
        if (!GAValidator.validateResourceItemTypes(value)) {
          return;
        }
        GAState.instance.availableResourceItemTypes = value;
        GALogger.i("Set available resource item types: (" + GAUtilities.joinStringArray(value, ", ") + ")");
      };
      GAState.getBuild = function () {
        return GAState.instance.build;
      };
      GAState.setBuild = function (value) {
        GAState.instance.build = value;
        GALogger.i("Set build version: " + value);
      };
      GAState.getUseManualSessionHandling = function () {
        return GAState.instance.useManualSessionHandling;
      };
      GAState.isEventSubmissionEnabled = function () {
        return GAState.instance._isEventSubmissionEnabled;
      };
      GAState.getABTestingId = function () {
        return GAState.instance.abId;
      };
      GAState.getABTestingVariantId = function () {
        return GAState.instance.abVariantId;
      };
      GAState.prototype.setDefaultId = function (value) {
        this.defaultUserId = !value ? "" : value;
        GAState.cacheIdentifier();
      };
      GAState.getDefaultId = function () {
        return GAState.instance.defaultUserId;
      };
      GAState.getSdkConfig = function () {
        {
          var first;
          var count = 0;
          for (var json in GAState.instance.sdkConfig) {
            if (count === 0) {
              first = json;
            }
            ++count;
          }
          if (first && count > 0) {
            return GAState.instance.sdkConfig;
          }
        }
        {
          var first;
          var count = 0;
          for (var json in GAState.instance.sdkConfigCached) {
            if (count === 0) {
              first = json;
            }
            ++count;
          }
          if (first && count > 0) {
            return GAState.instance.sdkConfigCached;
          }
        }
        return GAState.instance.sdkConfigDefault;
      };
      GAState.isEnabled = function () {
        if (!GAState.instance.initAuthorized) {
          return false;
        } else {
          return true;
        }
      };
      GAState.setCustomDimension01 = function (dimension) {
        GAState.instance.currentCustomDimension01 = dimension;
        GAStore.setItem(GAState.getGameKey(), GAState.Dimension01Key, dimension);
        GALogger.i("Set custom01 dimension value: " + dimension);
      };
      GAState.setCustomDimension02 = function (dimension) {
        GAState.instance.currentCustomDimension02 = dimension;
        GAStore.setItem(GAState.getGameKey(), GAState.Dimension02Key, dimension);
        GALogger.i("Set custom02 dimension value: " + dimension);
      };
      GAState.setCustomDimension03 = function (dimension) {
        GAState.instance.currentCustomDimension03 = dimension;
        GAStore.setItem(GAState.getGameKey(), GAState.Dimension03Key, dimension);
        GALogger.i("Set custom03 dimension value: " + dimension);
      };
      GAState.incrementSessionNum = function () {
        var sessionNumInt = GAState.getSessionNum() + 1;
        GAState.instance.sessionNum = sessionNumInt;
      };
      GAState.incrementTransactionNum = function () {
        var transactionNumInt = GAState.getTransactionNum() + 1;
        GAState.instance.transactionNum = transactionNumInt;
      };
      GAState.incrementProgressionTries = function (progression) {
        var tries = GAState.getProgressionTries(progression) + 1;
        GAState.instance.progressionTries[progression] = tries;
        var values = {};
        values["progression"] = progression;
        values["tries"] = tries;
        GAStore.insert(EGAStore.Progression, values, true, "progression");
      };
      GAState.getProgressionTries = function (progression) {
        if (progression in GAState.instance.progressionTries) {
          return GAState.instance.progressionTries[progression];
        } else {
          return 0;
        }
      };
      GAState.clearProgressionTries = function (progression) {
        if (progression in GAState.instance.progressionTries) {
          delete GAState.instance.progressionTries[progression];
        }
        var parms = [];
        parms.push(["progression", EGAStoreArgsOperator.Equal, progression]);
        GAStore["delete"](EGAStore.    GAState.instance.gameSecret = gameSecret;
      };
      GAState.setManualSessionHandling = function (flag) {
        GAState.instance.useManualSessionHandling = flag;
        GALogger.i("Use manual session handling: " + flagte.instance._isEventSubmissionEnabled = flag;
      };
      GAState.getEventAnnotations = function () {
        var annotations = {};
        annotations["v"] = 2;
        annotations["user_id"] = GAState.instance.identifier;
        annotations["client_ts"] = GAState.getClientTsAdjusted();
        annotations["sdk_version"] = GADevice.getRelevantSdkVersion();
        annotations["os_version"] = GADevice.osVersion;
        annotations["manufacturer"] = GADevice.deviceManufacturer;
        annotations["device"] = GADevice.deviceModel;
        annotations["browser_version"] = GADevice.browserVersion;
        annotations["platform"] = GADevice.buildPlatform;
        annotations["session_id"] = GAState.instance.sessionId;
        annotations[GAState.SessionNumKey] = GAState.instance.sessionNum;
        var connection_type = GADevice.getConnectionType();
        if (GAValidator.validateConnectionType(connection_type)) {
          annotations["connection_type"] = connection_type;
        }
        if (GADevice.gameEngineVersion) {
          annotations["engine_version"] = GADevice.gameEngineVersion;
        }
        if (GAState.instance.configurations) {
          var count = 0;
          for (var _ in GAState.instance.configurations) {
            count++;
            break;
          }
          if (count > 0) {
            annotations["configurations"] = GAState.instance.configurations;
          }
        }
        if (GAState.instance.abId) {
          annotations["ab_id"] = GAState.instance.abId;
        }
        if (GAState.instance.abVariantId) {
          annotations["ab_variant_id"] = GAState.instance.abVariantId;
        }
        if (GAState.instance.build) {
          annotations["build"] = GAState.instance.build;
        }
        return annotations;
      };
      GAState.getSdkErrorEventAnnotations = function () {
        var annotations = {};
        annotations["v"] = 2;
        annotations["category"] = GAState.CategorySdkError;
        annotations["sdk_version"] = GADevice.getRelevantSdkVersion();
        annotations["os_version"] = GADevice.osVersion;
        annotations["manufacturer"] = GADevice.deviceManufacturer;
        annotations["device"] = GADevice.deviceModel;
        annotations["platform"] = GADevice.buildPlatform;
        var connection_type = GADevice.getConnectionType();
        if (GAValidator.validateConnectionType(connection_type)) {
          annotations["connection_type"] = connection_type;
        }
        if (GADevice.gameEngineVersion) {
          annotations["engine_version"] = GADevice.gameEngineVersion;
        }
        return annotations;
      };
      GAState.getInitAnnotations = function () {
        var initAnnotations = {};
        if (!GAState.getIdentifier()) {
          GAState.cacheIdentifier();
        }
        initAnnotations["user_id"] = GAState.getIdentifier();
        initAnnotations["sdk_version"] = GADevice.getRelevantSdkVersion();
        initAnnotations["os_version"] = GADevice.osVersion;
        initAnnotations["platform"] = GADevice.buildPlatform;
        if (GAState.getBuild()) {
          initAnnotations["build"] = GAState.getBuild();
        } else {
          initAnnotations["build"] = null;
        }
        initAnnotations["session_num"] = GAState.getSessionNum();
        initAnnotations["random_salt"] = GAState.getSessionNum();
        return initAnnotations;
      };
      GAState.getClientTsAdjusted = function () {
        var clientTs = GAUtilities.timeIntervalSince1970();
        var clientTsAdjustedInteger = clientTs + GAState.instance.clientServerTimeOffset;
        if (GAValidator.validateClientTs(clientTsAdjustedInteger)) {
          return clientTsAdjustedInteger;
        } else {
          return clientTs   return GAState.instance.sessionStart != 0;
      };
      GAState.cacheIdentifier = function () {
        if (GAState.instance.userId) {
          GAState.instance.identifier = GAState.instance.userId;
        } else if (GAState.instance.defaultUserId) {
          GAState.instance.identifier = GAState.instance.defaultUserId;
        }
      };
      GAState.ensurePersistedStates = function () {
        if (GAStore.isStorageAvailable()) {
          GAStore.load(GAState.getGameKey());
        }
        var instance = GAState.instance;
        instance.setDefaultId(GAStore.getItem(GAState.getGameKey(), GAState.DefaultUserIdKey) != null ? GAStore.getItem(GAState.getGameKey(), GAState.DefaultUserIdKey) : GAUtilities.createGuid());
        instance.sessionNum = GAStore.getItem(GAState.getGameKey(), GAState.SessionNumKey) != null ? Number(GAStore.getItem(GAState.getGameKey(), GAState.SessionNumKey)) : 0.0;
        instance.transactionNum = GAStore.getItem(GAState.getGameKey(), GAState.TransactionNumKey) != null ? Number(GAStore.getItem(GAState.getGameKey(), GAState.TransactionNumKey)) : 0.0;
        if (instance.currentCustomDimension01) {
          GAStore.setItem(GAState.getGameKey(), GAState.Dimension01Key, instance.currentCustomDimension01);
        } else {
          instance.currentCustomDimension01 = GAStore.getItem(GAState.getGameKey(), GAState.Dimension01Key) != null ? GAStore.getItem(GAState.getGameKey(), GAState.Dimension01Key) : "";
          if (instance.currentCustomDimension01) {}
        }
        if (instance.currentCustomDimension02) {
          GAStore.setItem(GAState.getGameKey(), GAState.Dimension02Key, instance.currentCustomDimension02);
        } else {
          instance.currentCustomDimension02 = GAStore.getItem(GAState.getGameKey(), GAState.Dimension02Key) != null ? GAStore.getItem(GAState.getGameKey(), GAState.Dimension02Key) : "";
          if (instance.currentCustomDimension02) {}
        }
        if (instance.currentCustomDimension03) {
          GAStore.setItem(GAState.getGameKey(), GAState.Dimension03Key, instance.currentCustomDimension03);
        } else {
          instance.currentCustomDimension03 = GAStore.getItem(GAState.getGameKey(), GAState.Dimension03Key) != null ? GAStore.getItem(GAState.getGameKey(), GAState.Dimension03Key) : "";
          if (instance.currentCustomDimension03) {}
        }
        var sdkConfigCachedString = GAStore.getItem(GAState.getGameKey(), GAState.SdkConfigCachedKey) != null ? GAStore.getItem(GAState.getGameKey(), GAState.SdkConfigCachedKey) : "";
        if (sdkConfigCachedString) {
          var sdkConfigCached = JSON.parse(GAUtilities.decode64(sdkConfigCachedString));
          if (sdkConfigCached) {
            instance.sdkConfigCached = sdkConfigCached;
          }
        }
        {
          var currentSdkConfig = GAState.getSdkConfig();
          instance.configsHash = currentSdkConfig["configs_hash"] ? currentSdkConfig["configs_hash"] : "";
          instance.abId = currentSdkConfig["ab_id"] ? currentSdkConfig["ab_id"] : "";
          instance.abVariantId = currentSdkConfig["ab_variant_id"] ? currentSdkConfig["ab_variant_id"] : "";
        }
        var results_ga_progression = GAStore.select(EGAStore.Progression);
        if (results_ga_progression) {
          for (var i = 0; i < results_ga_progression.length; ++i) {
            var result = results_ga_progression[i];
            if (result) {
              instance.progressionTries[result["progression"]] = result["tries"];
            }
          }
        }
      };
      GAState.calculateServerTimeOffset = function (serverTs) {
        var clientTs = GAUtilities.timeIntervalSince1970();
        return serverTs - clientTs;
      };
      GAState.validateAndCleanCustomFields = function (fields) {
        var result = {};
        if (fields) {
          var count = 0;
          for (var key in fields) {
            var value = fields[key];
            if (!key || !value) {
              GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its key or value is null");
            } else if (count < GAState.MAX_CUSTOM_FIELDS_COUNT) {
              var regex = new RegExp("^[a-zA-Z0-9_]{1," + GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH + "}$");
              if (GAUtilities.stringMatch(key, regex)) {
                var type = typeof value;
                if (type === "string" || value instanceof String) {
                  var valueAsString = value;
                  if (valueAsString.length <= GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH && valueAsString.length > 0) {
                    result[key] = valueAsString;
                    ++count;
                  } else {
                    GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its value is an empty string or exceeds the max number of characters (" + GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH + ")");
                  }
                } else if (type === "number" || value instanceof Number) {
                  var valueAsNumber = value;
                  result[key] = valueAsNumber;
                  ++count;
                } else {
                  GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its value is not a string or number");
                }
              } else {
                GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" + GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH + ")");
              }
            } else {
              GALogger.w("validateAndCleanCustomFields: entry with key=" + key + ", value=" + value + " has been omitted because it exceeds the max number of custom fields (" + GAState.MAX_CUSTOM_FIELDS_COUNT + ")");
            }
          }
        }
        return result;
      };
      GAState.validateAndFixCurrentDimensions = function () {
        if (!GAValidator.validateDimension01(GAState.getCurrentCustomDimension01(), GAState.getAvailableCustomDimensions01())) {
          GAState.setCustomDimension01("");
        }
        if (!GAValidator.validateDimension02(GAState.getCurrentCustomDimension02(), GAState.getAvailableCustomDimensions02())) {
          GAState.setCustomDimension02("");
        }
        if (!GAValidator.validateDimension03(GAState.getCurrentCustomDimension03(), GAState.getAvailableCustomDimensions03())) {
          GAState.setCustomDimension03("");
        }
      };
      GAState.getConfigurationStringValue = function (key, defaultValue) {
        if (GAState.instance.configurations[key]) {
          return GAState.instance.configurations[key].toString();
        } else {
          return defaultValue;
  return GAState.instance.remoteConfigsIsReady;
      };
      GAState.addRemoteConfigsListener = function (listener) {
        if (GAState.instance.remoteConfigsListeners.indexOf(listener) < 0) {
          GAState.instance.remoteConfigsListeners.push(listener);
        }
      };
      GAState.removeRemoteConfigsListener = function (listener) {
        var index = GAState.instance.remoteConfigsListeners.indexOf(listener);
        if (index > -1) {
          GAState.instance.remoteConfigsListeners.splice(index, 1);
        }
   N.stringify(GAState.instance.configurations);
      };
      GAState.populateConfigurations = function (sdkConfig) {
        var configurations = sdkConfig["configs"];
        if (configurations) {
          GAState.instance.configurations = {};
          for (var i = 0; i < configurations.length; ++i) {
            var configuration = configurations[i];
            if (configuration) {
              var key = configuration["key"];
              var value = configuration["value"];
              var start_ts = configuration["start_ts"] ? configuration["start_ts"] : Number.MIN_VALUE;
              var end_ts = configuration["end_ts"] ? configuration["end_ts"] : Number.MAX_VALUE;
              var client_ts_adjusted = GAState.getClientTsAdjusted();
              if (key && value && client_ts_adjusted > start_ts && client_ts_adjusted < end_ts) {
                GAState.instance.configurations[key] = value;
              }
            }
          }
        }
        GAState.instance.remoteConfigsIsReady = true;
        var listeners = GAState.instance.remoteConfigsListeners;
        for (var i = 0; i < listeners.length; ++i) {
          if (listeners[i]) {
            listeners[i].onRemoteConfigsUpdated();
          }
        }
      };
      GAState.CategorySdkError = "sdk_error";
      GAState.MAX_CUSTOM_FIELDS_COUNT = 50;
      GAState.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64;
      GAState.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256;
      GAState.instance = new GAState();
      GAState.DefaultUserIdKey = "default_user_id";
      GAState.SessionNumKey = "session_num";
      GAState.TransactionNumKey = "transaction_num";
      GAState.Dimension01Key = "dimension01";
      GAState.Dimension02Key = "dimension02";
      GAState.Dimension03Key = "dimension03";
      GAState.SdkConfigCachedKey = "sdk_config_cached";
      return GAState;
    }();
    state.GAState = GAState;
  })(state = gameanalytics.state || (gameanalytics.state = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var tasks;
  (function (tasks) {
    var GAUtilities = gameanalytics.utilities.GAUtilities;
    var GALogger = gameanalytics.logging.GALogger;
    var SdkErrorTask = function () {
      function SdkErrorTask() {}
      SdkErrorTask.execute = function (url, type, payloadData, secretKey) {
        var now = new Date();
        if (!SdkErrorTask.timestampMap[type]) {
          SdkErrorTask.timestampMap[type] = now;
        }
        if (!SdkErrorTask.countMap[type]) {
          SdkErrorTask.countMap[type] = 0;
        }
        var diff = now.getTime() - SdkErrorTask.timestampMap[type].getTime();
        var diffSeconds = diff / 1000;
        if (diffSeconds >= 3600) {
          SdkErrorTask.timestampMap[type] = now;
          SdkErrorTask.countMap[type] = 0;
        }
        if (SdkErrorTask.countMap[type] >= SdkErrorTask.MaxCount) {
          return;
        }
        var hashHmac = GAUtilities.getHmac(secretKey, payloadData);
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            if (!request.responseText) {
              return;
            }
            if (request.status != 200) {
              GALogger.w("sdk error failed. response code not 200. status code: " + request.status + ", description: " + request.statusText + ", body: " + request.responseText);
              return;
            } else {
              SdkErrorTask.countMap[type] = SdkErrorTask.countMap[type] + 1;
            }
          }
        };
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", hashHmac);
        try {
          request.send(payloadData);
        } catch (e) {
          console.error(e);
        }
      };
      SdkErrorTask.MaxCount = 10;
      SdkErrorTask.countMap = {};
      SdkErrorTask.timestampMap = {};
      return SdkErrorTask;
    }();
    tasks.SdkErrorTask = SdkErrorTask;
  })(tasks = gameanalytics.tasks || (gameanalytics.tasks = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var http;
  (function (http) {
    var GAState = gameanalytics.state.GAState;
    var GALogger = gameanalytics.logging.GALogger;
    var GAUtilities = gameanalytics.utilities.GAUtilities;
    var GAValidator = gameanalytics.validators.GAValidator;
    var SdkErrorTask = gameanalytics.tasks.SdkErrorTask;
    var EGASdkErrorCategory = gameanalytics.events.EGASdkErrorCategory;
    var EGASdkErrorArea = gameanalytics.events.EGASdkErrorArea;
    var EGASdkErrorAction = gameanalytics.events.EGASdkErrorAction;
    var EGASdkErrorParameter = gameanalytics.events.EGASdkErrorParameter;
    var GAHTTPApi = function () {
      function GAHTTPApi() {
        this.protocol = "https";
        this.hostName = "api.gameanalytics.com";
        this.version = "v2";
        this.remoteConfigsVersion = "v1";
        this.baseUrl = this.protocol + "://" + this.hostName + "/" + this.version;
        this.remoteConfigsBaseUrl = this.protocol + "://" + this.hostName + "/remote_configs/" + this.remoteConfigsVersion;
        this.initializeUrlPath = "init";
        this.eventsUrlPath = "events";
        this.useGzip = false;
      }
      GAHTTPApi.prototype.requestInit = function (configsHash, callback) {
        var gameKey = GAState.getGameKey();
        var url = this.remoteConfigsBaseUrl + "/" + this.initializeUrlPath + "?game_key=" + gameKey + "&interval_seconds=0&configs_hash=" + configsHash;
        var initAnnotations = GAState.getInitAnnotations();
        var JSONstring = JSON.stringify(initAnnotations);
        if (!JSONstring) {
          callback(http.EGAHTTPApiResponse.JsonEncodeFailed, null);
          return;
        }
        var payloadData = this.createPayloadData(JSONstring, this.useGzip);
        var extraArgs = [];
        extraArgs.push(JSONstring);
        GAHTTPApi.sendRequest(url, payloadData, extraArgs, this.useGzip, GAHTTPApi.initRequestCallback, callback);
      };
      GAHTTPApi.prototype.sendEventsInArray = function (eventArray, requestId, callback) {
        if (eventArray.length == 0) {
          return;
        }
        var gameKey = GAState.getGameKey();
        var url = this.baseUrl + "/" + gameKey + "/" + this.eventsUrlPath;
        var JSONstring = JSON.stringify(eventArray);
        if (!JSONstring) {
          callback(http.EGAHTTPApiResponse.JsonEncodeFailed, null, requestId, eventArray.length);
          return;
        }
        var payloadData = this.createPayloadData(JSONstring, this.useGzip);
        var extraArgs = [];
        extraArgs.push(JSONstring);
        extraArgs.push(requestId);
        extraArgs.push(eventArray.length.toString());
        GAHTTPApi.sendRequest(url, payloadData, extraArgs, this.useGzip, GAHTTPApi.sendEventInArrayRequestCallback, callback);
      };
      GAHTTPApi.prototype.sendSdkErrorEvent = function (category, area, action, parameter, reason, gameKey, secretKey) {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        if (!GAValidator.validateSdkErrorEvent(gameKey, secretKey, category, area, action)) {
          return;
        }
        var url = this.baseUrl + "/" + gameKey + "/" + this.eventsUrlPath;
        var payloadJSONString = "";
        var errorType = "";
        var json = GAState.getSdkErrorEventAnnotations();
        var categoryString = GAHTTPApi.sdkErrorCategoryString(category);
        json["error_category"] = categoryString;
        errorType += categoryString;
        var areaString = GAHTTPApi.sdkErrorAreaString(area);
        json["error_area"] = areaString;
        errorType += ":" + areaString;
        var actionString = GAHTTPApi.sdkErrorActionString(action);
        json["error_action"] = actionString;
        var parameterString = GAHTTPApi.sdkErrorParameterString(parameter);
        if (parameterString.length > 0) {
          json["error_parameter"] = parameterString;
        }
        if (reason.length > 0) {
          var reasonTrimmed = reason;
          if (reason.length > GAHTTPApi.MAX_ERROR_MESSAGE_LENGTH) {
            var reasonTrimmed = reason.substring(0, GAHTTPApi.MAX_ERROR_MESSAGE_LENGTH);
          }
          json["reason"] = reasonTrimmed;
        }
        var eventArray = [];
        eventArray.push(json);
        payloadJSONString = JSON.stringify(eventArray);
        if (!payloadJSONString) {
          GALogger.w("sendSdkErrorEvent: JSON encoding failed.");
          return;
        }
        SdkErrorTask.execute(url, errorType, payloadJSONString, secretKey);
      };
      GAHTTPApi.sendEventInArrayRequestCallback = function (request, url, callback, extra) {
        if (extra === void 0) {
          extra = null;
        }
        var authorization = extra[0];
        var JSONstring = extra[1];
        var requestId = extra[2];
        var eventCount = parseInt(extra[3]);
        var body = "";
        var responseCode = 0;
        body = request.responseText;
        responseCode = request.status;
        var requestResponseEnum = GAHTTPApi.instance.processRequestResponse(responseCode, request.statusText, body, "Events");
        if (requestResponseEnum != http.EGAHTTPApiResponse.Ok && requestResponseEnum != http.EGAHTTPApiResponse.Created && requestResponseEnum != http.EGAHTTPApiResponse.BadRequest) {
          callback(requestResponseEnum, null, requestId, eventCount);
          return;
        }
        var requestJsonDict = body ? JSON.parse(body) : {};
        if (requestJsonDict == null) {
          callback(http.EGAHTTPApiResponse.JsonDecodeFailed, null, requestId, eventCount);
          GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorCategory.Http, EGASdkErrorArea.EventsHttp, EGASdkErrorAction.FailHttpJsonDecode, EGASdkErrorParameter.Undefined, body, GAState.getGameKey(), GAState.getGameSecret());
          return;
        }
        if (requestResponseEnum == http.EGAHTTPApiResponse.BadRequest) {}
        callback(requestResponseEnum, requestJsonDict, requestId, eventCount);
      };
      GAHTTPApi.sendRequest = function (url, payloadData, extraArgs, gzip, callback, callback2) {
        var request = new XMLHttpRequest();
        var key = GAState.getGameSecret();
        var authorization = GAUtilities.getHmac(key, payloadData);
        var args = [];
        args.push(authorization);
        for (var s in extraArgs) {
          args.push(extraArgs[s]);
        }
        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            callback(request, url, callback2, args);
          }
        };
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", authorization);
        if (gzip) {
          throw new Error("gzip not supported");
        }
        try {
          request.send(payloadData);
        } catch (e) {
          console.error(e.stack);
        }
      };
      GAHTTPApi.initRequestCallback = function (request, url, callback, extra) {
        if (extra === void 0) {
          extra = null;
        }
        var authorization = extra[0];
        var JSONstring = extra[1];
        var body = "";
        var responseCode = 0;
        body = request.responseText;
        responseCode = request.status;
        var requestJsonDict = body ? JSON.parse(body) : {};
        var requestResponseEnum = GAHTTPApi.instance.processRequestResponse(responseCode, request.statusText, body, "Init");
        if (requestResponseEnum != http.EGAHTTPApiResponse.Ok && requestResponseEnum != http.EGAHTTPApiResponse.Created && requestResponseEnum != http.EGAHTTPApiResponse.BadRequest) {
          callback(requestResponseEnum, null, "", 0);
          return;
        }
        if (requestJsonDict == null) {
          callback(http.EGAHTTPApiResponse.JsonDecodeFailed, null, "", 0);
          GAHTTPApi.instance.sendSdkErrorEvent(EGASdkErrorCategory.Http, EGASdkErrorArea.InitHttp, EGASdkErrorAction.FailHttpJsonDecode, EGASdkErrorParameter.Undefined, body, GAState.getGameKey(), GAState.getGameSecret());
          return;
        }
        if (requestResponseEnum === http.EGAHTTPApiResponse.BadRequest) {
          callback(requestResponseEnum, null, "", 0);
          return;
        }
        var validatedInitValues = GAValidator.validateAndCleanInitRequestResponse(requestJsonDict, requestResponseEnum === http.EGAHTTPApiResponse.Created);
        if (!validatedInitValues) {
          callback(http.EGAHTTPApiResponse.BadResponse, null, "", 0);
          return;
        }
        callback(requestResponseEnum, validatedInitValues, "", 0);
      };
      GAHTTPApi.prototype.createPayloadData = function (payload, gzip) {
        var payloadData;
        if (gzip) {
          throw new Error("gzip not supported");
        } else {
          payloadData = payload;
        }
        return payloadData;
      };
      GAHTTPApi.prototype.processRequestResponse = function (responseCode, responseMessage, body, requestId) {
        if (!body) {
          return http.EGAHTTPApiResponse.NoResponse;
        }
        if (responseCode === 200) {
          return http.EGAHTTPApiResponse.Ok;
        }
        if (responseCode === 201) {
          return http.EGAHTTPApiResponse.Created;
        }
        if (responseCode === 0 || responseCode === 401) {
          return http.EGAHTTPApiResponse.Unauthorized;
        }
        if (responseCode === 400) {
          return http.EGAHTTPApiResponse.BadRequest;
        }
        if (responseCode === 500) {
          return http.EGAHTTPApiResponse.InternalServerError;
        }
        return http.EGAHTTPApiResponse.UnknownResponseCode;
      };
      GAHTTPApi.sdkErrorCategoryString = function (value) {
        switch (value) {
          case EGASdkErrorCategory.EventValidation:
            return "event_validation";
          case EGASdkErrorCategory.Database:
            return "db";
          case EGASdkErrorCategory.Init:
            return "init";
          case EGASdkErrorCategory.Http:
            return "http";
          case EGASdkErrorCategory.Json:
            return "json";
          default:
            break;
        }
        return "";
      };
      GAHTTPApi.sdkErrorAreaString = function (value) {
        switch (value) {
          case EGASdkErrorArea.BusinessEvent:
            return "business";
          case EGASdkErrorArea.ResourceEvent:
            return "resource";
          case EGASdkErrorArea.ProgressionEvent:
            return "progression";
          case EGASdkErrorArea.DesignEvent:
            return "design";
          case EGASdkErrorArea.ErrorEvent:
            return "error";
          case EGASdkErrorArea.InitHttp:
            return "init_http";
          case EGASdkErrorArea.EventsHttp:
            return "events_http";
          case EGASdkErrorArea.ProcessEvents:
            return "process_events";
          case EGASdkErrorArea.AddEventsToStore:
            return "add_events_to_store";
          default:
            break;
        }
        return "";
      };
      GAHTTPApi.sdkErrorActionString = function (value) {
        switch (value) {
          case EGASdkErrorAction.InvalidCurrency:
            return "invalid_currency";
          case EGASdkErrorAction.InvalidShortString:
            return "invalid_short_string";
          case EGASdkErrorAction.InvalidEventPartLength:
            return "invalid_event_part_length";
          case EGASdkErrorAction.InvalidEventPartCharacters:
            return "invalid_event_part_characters";
          case EGASdkErrorAction.InvalidStore:
            return "invalid_store";
          case EGASdkErrorAction.InvalidFlowType:
            return "invalid_flow_type";
          case EGASdkErrorAction.StringEmptyOrNull:
            return "string_empty_or_null";
          case EGASdkErrorAction.NotFoundInAvailableCurrencies:
            return "not_found_in_available_currencies";
          case EGASdkErrorAction.InvalidAmount:
            return "invalid_amount";
          case EGASdkErrorAction.NotFoundInAvailableItemTypes:
            return "not_found_in_available_item_types";
          case EGASdkErrorAction.WrongProgressionOrder:
            return "wrong_progression_order";
          case EGASdkErrorAction.InvalidEventIdLength:
            return "invalid_event_id_length";
          case EGASdkErrorAction.InvalidEventIdCharacters:
            return "invalid_event_id_characters";
          case EGASdkErrorAction.InvalidProgressionStatus:
            return "invalid_progression_status";
          case EGASdkErrorAction.InvalidSeverity:
            return "invalid_severity";
          case EGASdkErrorAction.InvalidLongString:
            return "invalid_long_string";
          case EGASdkErrorAction.DatabaseTooLarge:
            return "db_too_large";
          case EGASdkErrorAction.DatabaseOpenOrCreate:
            return "db_open_or_create";
          case EGASdkErrorAction.JsonError:
            return "json_error";
          case EGASdkErrorAction.FailHttpJsonDecode:
            return "fail_http_json_decode";
          case EGASdkErrorAction.FailHttpJsonEncode:
            return "fail_http_json_encode";
          default:
            break;
        }
        return "";
      };
      GAHTTPApi.sdkErrorParameterString = function (value) {
        switch (value) {
          case EGASdkErrorParameter.Currency:
            return "currency";
          case EGASdkErrorParameter.CartType:
            return "cart_type";
          case EGASdkErrorParameter.ItemType:
            return "item_type";
          case EGASdkErrorParameter.ItemId:
            return "item_id";
          case EGASdkErrorParameter.Store:
            return "store";
          case EGASdkErrorParameter.FlowType:
            return "flow_type";
          case EGASdkErrorParameter.Amount:
            return "amount";
          case EGASdkErrorParameter.Progression01:
            return "progression01";
          case EGASdkErrorParameter.Progression02:
            return "progression02";
          case EGASdkErrorParameter.Progression03:
            return "progression03";
          case EGASdkErrorParameter.EventId:
            return "event_id";
          case EGASdkErrorParameter.ProgressionStatus:
            return "progression_status";
          case EGASdkErrorParameter.Severity:
            return "severity";
          case EGASdkErrorParameter.Message:
            return "message";
          default:
            break;
        }
        return "";
      };
      GAHTTPApi.instance = new GAHTTPApi();
      GAHTTPApi.MAX_ERROR_MESSAGE_LENGTH = 256;
      return GAHTTPApi;
    }();
    http.GAHTTPApi = GAHTTPApi;
  })(http = gameanalytics.http || (gameanalytics.http = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var events;
  (function (events_1) {
    var GAStore = gameanalytics.store.GAStore;
    var EGAStore = gameanalytics.store.EGAStore;
    var EGAStoreArgsOperator = gameanalytics.store.EGAStoreArgsOperator;
    var GAState = gameanalytics.state.GAState;
    var GALogger = gameanalytics.logging.GALogger;
    var GAUtilities = gameanalytics.utilities.GAUtilities;
    var EGAHTTPApiResponse = gameanalytics.http.EGAHTTPApiResponse;
    var GAHTTPApi = gameanalytics.http.GAHTTPApi;
    var GAValidator = gameanalytics.validators.GAValidator;
    var GAEvents = function () {
      function GAEvents() {}
      GAEvents.addSessionStartEvent = function () {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var eventDict = {};
        eventDict["category"] = GAEvents.CategorySessionStart;
        GAState.incrementSessionNum();
        GAStore.setItem(GAState.getGameKey(), GAState.SessionNumKey, GAState.getSessionNum().toString());
        GAEvents.addDimensionsToEvent(eventDict);
        GAEvents.addEventToStore(eventDict);
        GALogger.i("Add SESSION START event");
        GAEvents.processEvents(GAEvents.CategorySessionStart, false);
      };
      GAEvents.addSessionEndEvent = function () {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var session_start_ts = GAState.getSessionStart();
        var client_ts_adjusted = GAState.getClientTsAdjusted();
        var sessionLength = client_ts_adjusted - session_start_ts;
        if (sessionLength < 0) {
          GALogger.w("Session length was calculated to be less then 0. Should not be possible. Resetting to 0.");
          sessionLength = 0;
        }
        var eventDict = {};
        eventDict["category"] = GAEvents.CategorySessionEnd;
        eventDict["length"] = sessionLength;
        GAEvents.addDimensionsToEvent(eventDict);
        GAEvents.addEventToStore(eventDict);
        GALogger.i("Add SESSION END event.");
        GAEvents.processEvents("", false);
      };
      GAEvents.addBusinessEvent = function (currency, amount, itemType, itemId, cartType, fields) {
        if (cartType === void 0) {
          cartType = null;
        }
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var validationResult = GAValidator.validateBusinessEvent(currency, amount, cartType, itemType, itemId);
        if (validationResult != null) {
          GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
          return;
        }
        var eventDict = {};
        GAState.incrementTransactionNum();
        GAStore.setItem(GAState.getGameKey(), GAState.TransactionNumKey, GAState.getTransactionNum().toString());
        eventDict["event_id"] = itemType + ":" + itemId;
        eventDict["category"] = GAEvents.CategoryBusiness;
        eventDict["currency"] = currency;
        eventDict["amount"] = amount;
        eventDict[GAState.TransactionNumKey] = GAState.getTransactionNum();
        if (cartType) {
          eventDict["cart_type"] = cartType;
        }
        GAEvents.addDimensionsToEvent(eventDict);
        GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
        GALogger.i("Add BUSINESS event: {currency:" + currency + ", amount:" + amount + ", itemType:" + itemType + ", itemId:" + itemId + ", cartType:" + cartType + "}");
        GAEvents.addEventToStore(eventDict);
      };
      GAEvents.addResourceEvent = function (flowType, currency, amount, itemType, itemId, fields) {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var validationResult = GAValidator.validateResourceEvent(flowType, currency, amount, itemType, itemId, GAState.getAvailableResourceCurrencies(), GAState.getAvailableResourceItemTypes());
        if (validationResult != null) {
          GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
          return;
        }
        if (flowType === gameanalytics.EGAResourceFlowType.Sink) {
          amount *= -1;
        }
        var eventDict = {};
        var flowTypeString = GAEvents.resourceFlowTypeToString(flowType);
        eventDict["event_id"] = flowTypeString + ":" + currency + ":" + itemType + ":" + itemId;
        eventDict["category"] = GAEvents.CategoryResource;
        eventDict["amount"] = amount;
        GAEvents.addDimensionsToEvent(eventDict);
        GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
        GALogger.i("Add RESOURCE event: {currency:" + currency + ", amount:" + amount + ", itemType:" + itemType + ", itemId:" + itemId + "}");
        GAEvents.addEventToStore(eventDict);
      };
      GAEvents.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03, score, sendScore, fields) {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var progressionStatusString = GAEvents.progressionStatusToString(progressionStatus);
        var validationResult = GAValidator.validateProgressionEvent(progressionStatus, progression01, progression02, progression03);
        if (validationResult != null) {
          GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
          return;
        }
        var eventDict = {};
        var progressionIdentifier;
        if (!progression02) {
          progressionIdentifier = progression01;
        } else if (!progression03) {
          progressionIdentifier = progression01 + ":" + progression02;
        } else {
          progressionIdentifier = progression01 + ":" + progression02 + ":" + progression03;
        }
        eventDict["category"] = GAEvents.CategoryProgression;
        eventDict["event_id"] = progressionStatusString + ":" + progressionIdentifier;
        var attempt_num = 0;
        if (sendScore && progressionStatus != gameanalytics.EGAProgressionStatus.Start) {
          eventDict["score"] = score;
        }
        if (progressionStatus === gameanalytics.EGAProgressionStatus.Fail) {
          GAState.incrementProgressionTries(progressionIdentifier);
        }
        if (progressionStatus === gameanalytics.EGAProgressionStatus.Complete) {
          GAState.incrementProgressionTries(progressionIdentifier);
          attempt_num = GAState.getProgressionTries(progressionIdentifier);
          eventDict["attempt_num"] = attempt_num;
          GAState.clearProgressionTries(progressionIdentifier);
        }
        GAEvents.addDimensionsToEvent(eventDict);
        GAEvents.addFieldsToEvent(eventDict, GAState.validateAndCleanCustomFields(fields));
        GALogger.i("Add PROGRESSION event: {status:" + progressionStatusString + ", progression01:" + progression01 + ", progression02:" + progression02 + ", progression03:" + progression03 + ", score:" + score + ", attempt:" + attempt_num + "}");
        GAEvents.addEventToStore(eventDict);
      };
      GAEvents.addDesignEvent = function (eventId, value, sendValue, fields) {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var validationResult = GAValidator.validateDesignEvent(eventId);
        if (validationResult != null) {
          GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
          return;
        }
        var eventData = {};
        eventData["category"] = GAEvents.CategoryDesign;
        eventData["event_id"] = eventId;
        if (sendValue) {
          eventData["value"] = value;
        }
        GAEvents.addDimensionsToEvent(eventData);
        GAEvents.addFieldsToEvent(eventData, GAState.validateAndCleanCustomFields(fields));
        GALogger.i("Add DESIGN event: {eventId:" + eventId + ", value:" + value + "}");
        GAEvents.addEventToStore(eventData);
      };
      GAEvents.addErrorEvent = function (severity, message, fields) {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var severityString = GAEvents.errorSeverityToString(severity);
        var validationResult = GAValidator.validateErrorEvent(severity, message);
        if (validationResult != null) {
          GAHTTPApi.instance.sendSdkErrorEvent(validationResult.category, validationResult.area, validationResult.action, validationResult.parameter, validationResult.reason, GAState.getGameKey(), GAState.getGameSecret());
          return;
        }
        var eventData = {};
        eventData["category"] = GAEvents.CategoryError;
        eventData["severity"] = severityString;
        eventData["message"] = message;
        GAEvents.addDimensionsToEvent(eventData);
        GAEvents.addFieldsToEvent(eventData, GAState.validateAndCleanCustomFields(fields));
        GALogger.i("Add ERROR event: {severity:" + severityString + ", message:" + message + "}");
        GAEvents.addEventToStore(eventData);
      };
      GAEvents.processEvents = function (category, performCleanUp) {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        try {
          var requestIdentifier = GAUtilities.createGuid();
          if (performCleanUp) {
            GAEvents.cleanupEvents();
            GAEvents.fixMissingSessionEndEvents();
          }
          var selectArgs = [];
          selectArgs.push(["status", EGAStoreArgsOperator.Equal, "new"]);
          var updateWhereArgs = [];
          updateWhereArgs.push(["status", EGAStoreArgsOperator.Equal, "new"]);
          if (category) {
            selectArgs.push(["category", EGAStoreArgsOperator.Equal, category]);
            updateWhereArgs.push(["category", EGAStoreArgsOperator.Equal, category]);
          }
          var updateSetArgs = [];
          updateSetArgs.push(["status", requestIdentifier]);
          var events = GAStore.select(EGAStore.Events, selectArgs);
          if (!events || events.length == 0) {
            GALogger.i("Event queue: No events to send");
            GAEvents.updateSessionStore();
            return;
          }
          if (events.length > GAEvents.MaxEventCount) {
            events = GAStore.select(EGAStore.Events, selectArgs, true, GAEvents.MaxEventCount);
            if (!events) {
              return;
            }
            var lastItem = events[events.length - 1];
            var lastTimestamp = lastItem["client_ts"];
            selectArgs.push(["client_ts", EGAStoreArgsOperator.LessOrEqual, lastTimestamp]);
            events = GAStore.select(EGAStore.Events, selectArgs);
            if (!events) {
              return;
            }
            updateWhereArgs.push(["client_ts", EGAStoreArgsOperator.LessOrEqual, lastTimestamp]);
          }
          GALogger.i("Event queue: Sending " + events.length + " events.");
          if (!GAStore.update(EGAStore.Events, updateSetArgs, updateWhereArgs)) {
            return;
          }
          var payloadArray = [];
          for (var i = 0; i < events.length; ++i) {
            var ev = events[i];
            var eventDict = JSON.parse(GAUtilities.decode64(ev["event"]));
            if (eventDict.length != 0) {
              payloadArray.push(eventDict);
            }
          }
          GAHTTPApi.instance.sendEventsInArray(payloadArray, requestIdentifier, GAEvents.processEventsCallback);
        } catch (e) {
          GALogger.e("Error during ProcessEvents(): " + e.stack);
          GAHTTPApi.instance.sendSdkErrorEvent(events_1.EGASdkErrorCategory.Json, events_1.EGASdkErrorArea.ProcessEvents, events_1.EGASdkErrorAction.JsonError, events_1.EGASdkErrorParameter.Undefined, e.stack, GAState.getGameKey(), GAState.getGameSecret());
        }
      };
      GAEvents.processEventsCallback = function (responseEnum, dataDict, requestId, eventCount) {
        var requestIdWhereArgs = [];
        requestIdWhereArgs.push(["status", EGAStoreArgsOperator.Equal, requestId]);
        if (responseEnum === EGAHTTPApiResponse.Ok) {
          GAStore["delete"](EGAStore.Events, requestIdWhereArgs);
          GALogger.i("Event queue: " + eventCount + " events sent.");
        } else {
          if (responseEnum === EGAHTTPApiResponse.NoResponse) {
            var setArgs = [];
            setArgs.push(["status", "new"]);
            GALogger.w("Event queue: Failed to send events to collector - Retrying next time");
            GAStore.update(EGAStore.Events, setArgs, requestIdWhereArgs);
          } else {
            if (dataDict) {
              var json;
              var count = 0;
              for (var j in dataDict) {
                if (count == 0) {
                  json = dataDict[j];
                }
                ++count;
              }
              if (responseEnum === EGAHTTPApiResponse.BadRequest && json.constructor === Array) {
                GALogger.w("Event queue: " + eventCount + " events sent. " + count + " events failed GA server validation.");
              } else {
                GALogger.w("Event queue: Failed to send events.");
              }
            } else {
              GALogger.w("Event queue: Failed to send events.");
            }
            GAStore["delete"](EGAStore.Events, requestIdWhereArgs);
          }
        }
      };
      GAEvents.cleanupEvents = function () {
        GAStore.update(EGAStore.Events, [["status", "new"]]);
      };
      GAEvents.fixMissingSessionEndEvents = function () {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        var args = [];
        args.push(["session_id", EGAStoreArgsOperator.NotEqual, GAState.getSessionId()]);
        var sessions = GAStore.select(EGAStore.Sessions, args);
        if (!sessions || sessions.length == 0) {
          return;
        }
        GALogger.i(sessions.length + " session(s) located with missing session_end event.");
        for (var i = 0; i < sessions.length; ++i) {
          var sessionEndEvent = JSON.parse(GAUtilities.decode64(sessions[i]["event"]));
          var event_ts = sessionEndEvent["client_ts"];
          var start_ts = sessions[i]["timestamp"];
          var length = event_ts - start_ts;
          length = Math.max(0, length);
          sessionEndEvent["category"] = GAEvents.CategorySessionEnd;
          sessionEndEvent["length"] = length;
          GAEvents.addEventToStore(sessionEndEvent);
        }
      };
      GAEvents.addEventToStore = function (eventData) {
        if (!GAState.isEventSubmissionEnabled()) {
          return;
        }
        if (!GAState.isInitialized()) {
          GALogger.w("Could not add event: SDK is not initialized");
          return;
        }
        try {
          if (GAStore.isStoreTooLargeForEvents() && !GAUtilities.stringMatch(eventData["category"], /^(user|session_end|business)$/)) {
            GALogger.w("Database too large. Event has been blocked.");
            GAHTTPApi.instance.sendSdkErrorEvent(events_1.EGASdkErrorCategory.Database, events_1.EGASdkErrorArea.AddEventsToStore, events_1.EGASdkErrorAction.DatabaseTooLarge, events_1.EGASdkErrorParameter.Undefined, "", GAState.getGameKey(), GAState.getGameSecret());
            return;
          }
          var ev = GAState.getEventAnnotations();
          var jsonDefaults = GAUtilities.encode64(JSON.stringify(ev));
          for (var e in eventData) {
            ev[e] = eventData[e];
          }
          var json = JSON.stringify(ev);
          GALogger.ii("Event added to queue: " + json);
          var values = {};
          values["status"] = "new";
          values["category"] = ev["category"];
          values["session_id"] = ev["session_id"];
          values["client_ts"] = ev["client_ts"];
          values["event"] = GAUtilities.encode64(JSON.stringify(ev));
          GAStore.insert(EGAStore.Events, values);
          if (eventData["category"] == GAEvents.CategorySessionEnd) {
            GAStore["delete"](EGAStore.Sessions, [["session_id", EGAStoreArgsOperator.Equal, ev["session_id"]]]);
          } else {
            values = {};
            values["session_id"] = ev["session_id"];
            values["timestamp"] = GAState.getSessionStart();
            values["event"] = jsonDefaults;
            GAStore.insert(EGAStore.Sessions, values, true, "session_id");
          }
          if (GAStore.isStorageAvailable()) {
            GAStore.save(GAState.getGameKey());
          }
        } catch (e) {
          GALogger.e("addEventToStore: error");
          GALogger.e(e.stack);
          GAHTTPApi.instance.sendSdkErrorEvent(events_1.EGASdkErrorCategory.Database, events_1.EGASdkErrorArea.AddEventsToStore, events_1.EGASdkErrorAction.DatabaseTooLarge, events_1.EGASdkErrorParameter.Undefined, e.stack, GAState.getGameKey(), GAState.getGameSecret());
        }
      };
      GAEvents.updateSessionStore = function () {
        if (GAState.sessionIsStarted()) {
          var values = {};
          values["session_id"] = GAState.instance.sessionId;
          values["timestamp"] = GAState.getSessionStart();
          values["event"] = GAUtilities.encode64(JSON.stringify(GAState.getEventAnnotations()));
          GAStore.insert(EGAStore.Sessions, values, true, "session_id");
          if (GAStore.isStorageAvailable()) {
            GAStore.save(GAState.getGameKey());
          }
        }
      };
      GAEvents.addDimensionsToEvent = function (eventData) {
        if (!eventData) {
          return;
        }
        if (GAState.getCurrentCustomDimension01()) {
          eventData["custom_01"] = GAState.getCurrentCustomDimension01();
        }
        if (GAState.getCurrentCustomDimension02()) {
          eventData["custom_02"] = GAState.getCurrentCustomDimension02();
        }
        if (GAState.getCurrentCustomDimension03()) {
          eventData["custom_03"] = GAState.getCurrentCustomDimension03();
        }
      };
      GAEvents.addFieldsToEvent = function (eventData, fields) {
        if (!eventData) {
          return;
        }
        if (fields && Object.keys(fields).length > 0) {
          eventData["custom_fields"] = fields;
        }
      };
      GAEvents.resourceFlowTypeToString = function (value) {
        if (value == gameanalytics.EGAResourceFlowType.Source || value == gameanalytics.EGAResourceFlowType[gameanalytics.EGAResourceFlowType.Source]) {
          return "Source";
        } else if (value == gameanalytics.EGAResourceFlowType.Sink || value == gameanalytics.EGAResourceFlowType[gameanalytics.EGAResourceFlowType.Sink]) {
          return "Sink";
        } else {
          return "";
        }
      };
      GAEvents.progressionStatusToString = function (value) {
        if (value == gameanalytics.EGAProgressionStatus.Start || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Start]) {
          return "Start";
        } else if (value == gameanalytics.EGAProgressionStatus.Complete || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Complete]) {
          return "Complete";
        } else if (value == gameanalytics.EGAProgressionStatus.Fail || value == gameanalytics.EGAProgressionStatus[gameanalytics.EGAProgressionStatus.Fail]) {
          return "Fail";
        } else {
          return "";
        }
      };
      GAEvents.errorSeverityToString = function (value) {
        if (value == gameanalytics.EGAErrorSeverity.Debug || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Debug]) {
          return "debug";
        } else if (value == gameanalytics.EGAErrorSeverity.Info || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Info]) {
          return "info";
        } else if (value == gameanalytics.EGAErrorSeverity.Warning || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Warning]) {
          return "warning";
        } else if (value == gameanalytics.EGAErrorSeverity.Error || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Error]) {
          return "error";
        } else if (value == gameanalytics.EGAErrorSeverity.Critical || value == gameanalytics.EGAErrorSeverity[gameanalytics.EGAErrorSeverity.Critical]) {
          return "critical";
        } else {
          return "";
        }
      };
      GAEvents.CategorySessionStart = "user";
      GAEvents.CategorySessionEnd = "session_end";
      GAEvents.CategoryDesign = "design";
      GAEvents.CategoryBusiness = "business";
      GAEvents.CategoryProgression = "progression";
      GAEvents.CategoryResource = "resource";
      GAEvents.CategoryError = "error";
      GAEvents.MaxEventCount = 500;
      return GAEvents;
    }();
    events_1.GAEvents = GAEvents;
  })(events = gameanalytics.events || (gameanalytics.events = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var threading;
  (function (threading) {
    var GALogger = gameanalytics.logging.GALogger;
    var GAState = gameanalytics.state.GAState;
    var GAEvents = gameanalytics.events.GAEvents;
    var GAThreading = function () {
      function GAThreading() {
        this.blocnction (x, y) {
            return x - y;
          }
        });
        this.id2TimedBlockMap = {};
        GAThreading.startThread();
      }
      GAThreading.createTimedBlock = function (delayInSeconds) {
        if (delayInSeconds === void 0) {
          delayInSeconds = 0;
        }
        var time = new Date();
        time.setSeconds(time.getSeconds() + delayInSeconds);
        var timedBlock = new threading.TimedBlock(time);
        return timedBlock;
      };
      GAThreading.performTaskOnGAThread = function (taskBlock, delayInSeconds) {
        if (delayInSeconds === void 0) {
          delayInSeconds = 0;
        }
        var time = new Date();
        time.setSeconds(time.getSeconds() + delayInSeconds);
        var timedBlock = new threading.TimedBlock(time);
        timedBlock.block = taskBlock;
        GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
        GAThreading.instance.addTimedBlock(timedBlock);
      };
      GAThreading.performTimedBlockOnGAThread = function (timedBlock) {
        GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
        GAThreading.instance.addTimedBlock(timedBlock);
      };
      GAThreading.scheduleTimer = function (interval, callback) {
        var time = new Date();
        time.setSeconds(time.getSeconds() + interval);
        var timedBlock = new threading.TimedBlock(time);
        timedBlock.block = callback;
        GAThreading.instance.id2TimedBlockMap[timedBlock.id] = timedBlock;
        GAThreading.instance.addTimedBlock(timedBlock);
        return timedBlo    } else {
          return null;
        }
      };
      GAThreading.ensureEventQueueIsRunning = function () {
        GAThreading.instance.keepRunning = true;
        if (!GAThreading.instance.isRunning) {
          GAThreading.instance.isRunning = true;
          GAThreading.scheduleTimer(GAThreading.ProcessEventsIntervalInSeconds, GAThreading.processEventQueue);
        }
      };
      GAThreading.endSessionAndStopQueue = function () {
        if (GAState.isInitialized()) {
          GALogger.i("Ending session.");
          GAThreading.stopEventQueue();
          if (GAState.isEnabled() && GAState.sessionIsStarted()) {
            GAEvents.addSessionEndEvent();
            GAState.instance.sessionStart = 0;
          }
    GAThreading.instance.keepRunning = false;
      };
      GAThreading.ignoreTimer = function (blockIdentifier) {
        if (blockIdentifier in GAThreading.instance.id2TimedBlockMap) {
          GAThreading.instance.id2TimedBlockMap[blockIdentifier].ignore = true;
        }
      };
      GAThreading.setEventProcessInterval = function (interval) {
        if (interval > 0) {
          GAThreading.ProcessEventsIntervalInSeconds = interval;
        }
      };
      GAThreading.prototype.addTimedBlock = function (timedBlock) {
        this.blocks.enqueue(timedBlock.deadline.getTime(), timedBlock);
      };
      GAThreading.run = function () {
        clearTimeout(GAThreading.runTimeoutId);
        try {
          var timedBlock;
          while (timedBlock = GAThreading.getNextBlock()) {
            if (!timedBlock.ignore) {
              if (timedBlock.async) {
                if (!timedBlock.running) {
                  timedBlock.running = true;
                  timedBlock.block();
                  break;
                }
              } else {
                timedBlock.block();
              }
            }
          }
          GAThreading.runTimeoutId = setTimeout(GAThreading.run, GAThreading.ThreadWaitTimeInMs);
          return;
        } catch (e) {
          GALogger.e("Error on GA thread");
          GALogger.e(e.stackunTimeoutId = setTimeout(GAThreading.run, 0);
      };
      GAThreading.getNextBlock = function () {
        var now = new Date();
        if (GAThreading.instance.blocks.hasItems() && GAThreading.instance.blocks.peek().deadline.getTime() <= now.getTime()) {
          if (GAThreading.instance.blocks.peek().async) {
            if (GAThreading.instance.blocks.peek().running) {
              return GAThreading.instance.blocks.peek();
            } else {
              return GAThreading.instance.blocks.dequeue();
            }
          } else {
            return GAThreading.instance.blocks.dequeue();
          }
        }
        return null;
      };
      GAThreading.processEventQueue = function () {
        GAEvents.processEvents("", true);
        if (GAThreading.instance.keepRunning) {
          GAThreading.scheduleTimer(GAThreading.ProcessEventsIntervalInSeconds, GAThreading.processEventQueue);
        } else {
          GAThreading.instance.isRunning = false;
        }
      };
      GAThreading.instance = new GAThreading();
      GAThreading.ThreadWaitTimeInMs = 1000;
      GAThreading.ProcessEventsIntervalInSeconds = 8.0;
      return GAThreading;
    }();
    threading.GAThreading = GAThreading;
  })(threading = gameanalytics.threading || (gameanalytics.threading = {}));
})(gameanalytics || (gameanalytics = {}));
var gameanalytics;
(function (gameanalytics) {
  var GAThreading = gameanalytics.threading.GAThreading;
  var GALogger = gameanalytics.logging.GALogger;
  var GAStore = gameanalytics.store.GAStore;
  var GAState = gameanalytics.state.GAState;
  var GAHTTPApi = gameanalytics.http.GAHTTPApi;
  var GADevice = gameanalytics.device.GADevice;
  var GAValidator = gameanalytics.validators.GAValidator;
  var EGAHTTPApiResponse = gameanalytics.http.EGAHTTPApiResponse;
  var GAUtilities = gameanalytics.utilities.GAUtilities;
  var GAEvents = gameanalytics.events.GAEvents;
  var GameAnalytics = function () {
    function GameAnalytics() {}
    GameAnalytics.init = function () {
      GADevice.touch();
      GameAnalytics.methodMap['configureAvailableCustomDimensions01'] = GameAnalytics.configureAvailableCustomDimensions01;
      GameAnalytics.methodMap['configureAvailableCustomDimensions02'] = GameAnalytics.configureAvailableCustomDimensions02;
      GameAnalytics.methodMap['configureAvailableCustomDimensions03'] = GameAnalytics.configureAvailableCustomDimensions03;
      GameAnalytics.methodMap['configureAvailableResourceCurrencies'] = GameAnalytics.configureAvailableResourceCurrencies;
      GameAnalytics.methodMap['configureAvailableResourceItemTypes'] = GameAnalytics.configureAvailableResourceItemTypes;
      GameAnalytics.methodMap['configureBuild'] = GameAnalytics.configureBuild;
      GameAnalytics.methodMap['configureSdkGameEngineVersion'] = GameAnalytics.configureSdkGameEngineVersion;
      GameAnalytics.methodMap['configureGameEngineVersion'] = GameAnalytics.configureGameEngineVersion;
      GameAnalytics.methodMap['configureUserId'] = GameAnalytics.configureUserId;
      GameAnalytics.methodMap['initialize'] = GameAnalytics.initialize;
      GameAnalytics.methodMap['addBusinessEvent'] = GameAnalytics.addBusinessEvent;
      GameAnalytics.methodMap['addResourceEvent'] = GameAnalytics.addResourceEvent;
      GameAnalytics.methodMap['addProgressionEvent'] = GameAnalytics.addProgressionEvent;
      GameAnalytics.methodMap['addDesignEvent'] = GameAnalytics.addDesignEvent;
      GameAnalytics.methodMap['addErrorEvent'] = GameAnalytics.addErrorEvent;
      GameAnalytics.methodMap['addErrorEvent'] = GameAnalytics.addErrorEvent;
      GameAnalytics.methodMap['setEnabledInfoLog'] = GameAnalytics.setEnabledInfoLog;
      GameAnalytics.methodMap['setEnabledVerboseLog'] = GameAnalytics.setEnabledVerboseLog;
      GameAnalytics.methodMap['setEnabledManualSessionHandling'] = GameAnalytics.setEnabledManualSessionHandling;
      GameAnalytics.methodMap['setEnabledEventSubmission'] = GameAnalytics.setEnabledEventSubmission;
      GameAnalytics.methodMap['setCustomDimension01'] = GameAnalytics.setCustomDimension01;
      GameAnalytics.methodMap['setCustomDimension02'] = GameAnalytics.setCustomDimension02;
      GameAnalytics.methodMap['setCustomDimension03'] = GameAnalytics.setCustomDimension03;
      GameAnalytics.methodMap['setEventProcessInterval'] = GameAnalytics.setEventProcessInterval;
      GameAnalytics.methodMap['startSession'] = GameAnalytics.startSession;
      GameAnalytics.methodMap['endSession'] = GameAnalytics.endSession;
      GameAnalytics.methodMap['onStop'] = GameAnalytics.onStop;
      GameAnalytics.methodMap['onResume'] = GameAnalytics.onResume;
      GameAnalytics.methodMap['addRemoteConfigsListener'] = GameAnalytics.addRemoteConfigsListener;
      GameAnalytics.methodMap['removeRemoteConfigsListener'] = GameAnalytics.removeRemoteConfigsListener;
      GameAnalytics.methodMap['getRemoteConfigsValueAsString'] = GameAnalytics.getRemoteConfigsValueAsString;
      GameAnalytics.methodMap['isRemoteConfigsReady'] = GameAnalytics.isRemoteConfigsReady;
      GameAnalytics.methodMap['getRemoteConfigsContentAsString'] = GameAnalytics.getRemoteConfigsContentAsString;
      if (typeof window !== 'undefined' && typeof window['GameAnalytics'] !== 'undefined' && typeof window['GameAnalytics']['q'] !== 'undefined') {
        var q = window['GameAnalytics']['q'];
        for (var i in q) {
          GameAnalytics.gaCommand.apply(null, q[i]);
        }
      }
    };
    GameAnalytics.gaCommand = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (args.length > 0) {
        if (args[0] in gameanalytics.GameAnalytics.methodMap) {
          if (args.length > 1) {
            gameanalytics.GameAnalytics.methodMap[args[0]].apply(null, Array.prototype.slice.call(args, 1));
          } else {
            gameanalytics.GameAnalytics.methodMap[args[0]]();
          }
        }
      }
    };
    GameAnalytics.configureAvailableCustomDimensions01 = function (customDimensions) {
      if (customDimensions === void 0) {
        customDimensions = [];
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("Available custom dimensions must be set before SDK is initialized");
          return;
        }
        GAState.setAvailableCustomDimensions01(customDimensions);
      });
    };
    GameAnalytics.configureAvailableCustomDimensions02 = function (customDimensions) {
      if (customDimensions === void 0) {
        customDimensions = [];
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("Available custom dimensions must be set before SDK is initialized");
          return;
        }
        GAState.setAvailableCustomDimensions02(customDimensions);
      });
    };
    GameAnalytics.configureAvailableCustomDimensions03 = function (customDimensions) {
      if (customDimensions === void 0) {
        customDimensions = [];
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("Available custom dimensions must be set before SDK is initialized");
          return;
        }
        GAState.setAvailableCustomDimensions03(customDimensions);
      });
    };
    GameAnalytics.configureAvailableResourceCurrencies = function (resourceCurrencies) {
      if (resourceCurrencies === void 0) {
        resourceCurrencies = [];
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("Available resource currencies must be set before SDK is initialized");
          return;
        }
        GAState.setAvailableResourceCurrencies(resourceCurrencies);
      });
    };
    GameAnalytics.configureAvailableResourceItemTypes = function (resourceItemTypes) {
      if (resourceItemTypes === void 0) {
        resourceItemTypes = [];
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("Available resource item types must be set before SDK is initialized");
          return;
        }
        GAState.setAvailableResourceItemTypes(resourceItemTypes);
      });
    };
    GameAnalytics.configureBuild = function (build) {
      if (build === void 0) {
        build = "";
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("Build version must be set before SDK is initialized.");
          return;
        }
        if (!GAValidator.validateBuild(build)) {
          GALogger.i("Validation fail - configure build: Cannot be null, empty or above 32 length. String: " + build);
          return;
        }
        GAState.setBuild(build);
      });
    };
    GameAnalytics.configureSdkGameEngineVersion = function (sdkGameEngineVersion) {
      if (sdkGameEngineVersion === void 0) {
        sdkGameEngineVersion = "";
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          return;
        }
        if (!GAValidator.validateSdkWrapperVersion(sdkGameEngineVersion)) {
          GALogger.i("Validation fail - configure sdk version: Sdk version not supported. String: " + sdkGameEngineVersion);
          return;
        }
        GADevice.sdkGameEngineVersion = sdkGameEngineVersion;
      });
    };
    GameAnalytics.configureGameEngineVersion = function (gameEngineVersion) {
      if (gameEngineVersion === void 0) {
        gameEngineVersion = "";
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          return;
        }
        if (!GAValidator.validateEngineVersion(gameEngineVersion)) {
          GALogger.i("Validation fail - configure game engine version: Game engine version not supported. String: " + gameEngineVersion);
          return;
        }
        GADevice.gameEngineVersion = gameEngineVersion;
      });
    };
    GameAnalytics.configureUserId = function (uId) {
      if (uId === void 0) {
        uId = "";
      }
      GAThreading.performTaskOnGAThread(function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("A custom user id must be set before SDK is initialized.");
          return;
        }
        if (!GAValidator.validateUserId(uId)) {
          GALogger.i("Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " + uId);
          return;
        }
        GAState.setUserId(uId);
      });
    };
    GameAnalytics.initialize = function (gameKey, gameSecret) {
      if (gameKey === void 0) {
        gameKey = "";
      }
      if (gameSecret === void 0) {
        gameSecret = "";
      }
      GADevice.updateConnectionType();
      var timedBlock = GAThreading.createTimedBlock();
      timedBlock.async = true;
      GameAnalytics.initTimedBlockId = timedBlock.id;
      timedBlock.block = function () {
        if (GameAnalytics.isSdkReady(true, false)) {
          GALogger.w("SDK already initialized. Can only be called once.");
          return;
        }
        if (!GAValidator.validateKeys(gameKey, gameSecret)) {
          GALogger.w("SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " + gameKey + ", secretKey: " + gameSecret);
          return;
        }
        GAState.setKeys(gameKey, gameSecret);
        GameAnalytics.internalInitialize();
      };
      GAThreading.performTimedBlockOnGAThread(timedBlock);
    };
    GameAnalytics.addBusinessEvent = function (currency, amount, itemType, itemId, cartType) {
      if (currency === void 0) {
        currency = "";
      }
      if (amount === void 0) {
        amount = 0;
      }
      if (itemType === void 0) {
        itemType = "";
      }
      if (itemId === void 0) {
        itemId = "";
      }
      if (cartType === void 0) {
        cartType = "";
      }
      GADevice.updateConnectionType();
      GAThreading.performTaskOnGAThread(function () {
        if (!GameAnalytics.isSdkReady(true, true, "Could not add business event")) {
          return;
        }
        GAEvents.addBusinessEvent(currency, amount, itemType, itemId, cartType, {});
      });
    };
    GameAnalytics.addResourceEvent = function (flowType, currency, amount, itemType, itemId) {
      if (flowType === void 0) {
        flowType = gameanalytics.EGAResourceFlowType.Undefined;
      }
      if (currency === void 0) {
        currency = "";
      }
      if (amount === void 0) {
        amount = 0;
      }
      if (itemType === void 0) {
        itemType = "";
      }
      if (itemId === void 0) {
        itemId = "";
      }
      GADevice.updateConnectionType();
      GAThreading.performTaskOnGAThread(function () {
        if (!GameAnalytics.isSdkReady(true, true, "Could not add resource event")) {
          return;
        }
        GAEvents.addResourceEvent(flowType, currency, amount, itemType, itemId, {});
      });
    };
    GameAnalytics.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03, score) {
      if (progressionStatus === void 0) {
        progressionStatus = gameanalytics.EGAProgressionStatus.Undefined;
      }
      if (progression01 === void 0) {
        progression01 = "";
      }
      if (progression02 === void 0) {
        progression02 = "";
      }
      if (progression03 === void 0) {
        progression03 = "";
      }
      GADevice.updateConnectionType();
      GAThreading.performTaskOnGAThread(function () {
        if (!GameAnalytics.isSdkReady(true, true, "Could not add progression event")) {
          return;
        }
        var sendScore = typeof score === "number";
        GAEvents.addProgressionEvent(progressionStatus, progression01, progression02, progression03, sendScore ? score : 0, sendScore, {});
      });
    };
    GameAnalytics.addDesignEvent = function (eventId, value) {
      GADevice.updateConnectionType();
      GAThreading.performTaskOnGAThread(function () {
        if (!GameAnalytics.isSdkReady(true, true, "Could not add design event")) {
          return;
        }
        var sendValue = typeof value === "number";
        GAEvents.addDesignEvent(eventId, sendValue ? value : 0, sendValue, {});
      });
    };
    GameAnalytics.addErrorEvent = function (severity, message) {
      if (severity === void 0) {
        severity = gameanalytics.EGAErrorSeverity.Undefined;
      }
      if (message === void 0) {
        message = "";
      }
      GADevice.updateConnectionType();
      GAThreading.performTaskOnGAThread(function () {
        if (!GameAnalytics.isSdkReady(true, true, "Could not add error event")) {
          return;
        }
        GAEvents.addErrorEvent(severity, message, {});
      });
    };
    GameAnalytics.setEnabledInfoLog = function (flag) {
      if (flag === void 0) {
        flag = false;
      }
      GAThreading.performTaskOnGAThread(function () {
        if (flag) {
          GALogger.setInfoLog(flag);
          GALogger.i("Info logging enabled");
        } else {
          GALogger.i("Info logging disabled");
          GALogger.setInfoLog(flag);
        }
      });
    };
    GameAnalytics.setEnabledVerboseLog = function (flag) {
      if (flag === void 0) {
        flag = false;
      }
      GAThreading.performTaskOnGAThread(function () {
        if (flag) {
          GALogger.setVerboseLog(flag);
          GALogger.i("Verbose logging enabled");
        } else {
          GALogger.i("Verbose logging disabled");
          GALogger.setVerboseLog(flag);
        }
      });
    };
    GameAnalytics.setEnabledManualSessionHandling = function (flag) {
      if (flag === void 0) {
        flag = false;
      }
      GAThreading.performTaskOnGAThread(function () {
        GAState.setManualSessionHandling(flag);
      });
    };
    GameAnalytics.setEnabledEventSubmission = function (flag) {
      if (flag === void 0) {
        flag = false;
      }
      GAThreading.performTaskOnGAThread(function () {
        if (flag) {
          GAState.setEnabledEventSubmission(flag);
          GALogger.i("Event submission enabled");
        } else {
          GALogger.i("Event submission disabled");
          GAState.setEnabledEventSubmission(flag);
        }
      });
    };
    GameAnalytics.setCustomDimension01 = function (dimension) {
      if (dimension === void 0) {
        dimension = "";
      }
      GAThreading.performTaskOnGAThread(function () {
        if (!GAValidator.validateDimension01(dimension, GAState.getAvailableCustomDimensions01())) {
          GALogger.w("Could not set custom01 dimension value to '" + dimension + "'. Value not found in available custom01 dimension values");
          return;
        }
        GAState.setCustomDimension01(dimension);
      });
    };
    GameAnalytics.setCustomDimension02 = function (dimension) {
      if (dimension === void 0) {
        dimension = "";
      }
      GAThreading.performTaskOnGAThread(function () {
        if (!GAValidator.validateDimension02(dimension, GAState.getAvailableCustomDimensions02())) {
          GALogger.w("Could not set custom02 dimension value to '" + dimension + "'. Value not found in available custom02 dimension values");
          return;
        }
        GAState.setCustomDimension02(dimension);
      });
    };
    GameAnalytics.setCustomDimension03 = function (dimension) {
      if (dimension === void 0) {
        dimension = "";
      }
      GAThreading.performTaskOnGAThread(function () {
        if (!GAValidator.validateDimension03(dimension, GAState.getAvailableCustomDimensions03())) {
          GALogger.w("Could not set custom03 dimension value to '" + dimension + "'. Value not found in available custom03 dimension values");
          return;
        }
        GAState.setCustomDimension03(dimension);
      }ntProcessInterval(intervalInSeconds);
      });
    };
    GameAnalytics.startSession = function () {
      {
        if (!GAState.isInitialized()) {
          return;
        }
        var timedBlock = GAThreading.createTimedBlock();
        timedBlock.async = true;
        GameAnalytics.initTimedBlockId = timedBlock.id;
        timedBlock.block = function () {
          if (GAState.isEnabled() && GAState.sessionIsStarted()) {
            GAThreading.endSessionAndStopQueue();
          }
          GameAnalytics.resumeSessionAndStartQueue();
        };
        GAThreading.performTimedBlockOnGAThread(timedBlock);
      }
    };
    GameAnalytics.endSession = function () {
      {
        GameAnalytics.onStop();
      }
    };
    GameAnalytics.onStop = ndStopQueue();
        } catch (Exception) {}
      });
    };
    GameAnalytics.onResume = function () {
      var timedBlock = GAThreading.createTimedBlock();
      timedBlock.async = true;
      GameAnalytics.initT  GameAnalytics.resumeSessionAndStartQueue();
      };
      GAThreading.performTimedBlockOnGAThread(timedBlock);
    };
    GameAnalytics.getRemoteConfigsValueAsString = function (key, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }
      return GAState.getConfigurationStringValue(key, defaultValue);
    };
    GameAnalytics.isRemoteConfigsReady = function () {
      return GAState.isRemoteConfigsReady();
    };
    GameAnalytics.addRemoteConfigsListener = function (listener) {
      GAState.addRemoteConfigsListener(listener);
    };
    GameAnalytics.removeRemoteConfigsListener = function (listener) {
      GAState.removeRemoteConfigsListener(listener);
    };
    GameAnalytics.getRemoteConfigsContentAsString = function () {
      return GAState.getRemoteConfigsContentAsString();
    };
    GameAnalytics.getABTestingId = function () {
      return GAState.getABTestingI{
      return GAState.getABTestingVariantId();
    };
    GameAnalytics.internalInitialize = function () {
      GAState.ensurePersistedStates();
      GAStore.setItem(GAState.getGameKey(), GAState.DefaultUserIdKey, GAState.getDefaultId());
      GAState.setInitialized(true);
      GameAnalytics.newSession();
      if (GAState.isEnabled()) {
        GAThreading.ensureEventQueueIsRunning();
      }
    };
    GameAnalytics.newSession = function () {
      GALogger.i("Starting a new session.");
      GAState.validateAndFixCurrentDimensions();
      GAHTTPApi.instance.requestInit(GAState.instance.configsHash, GameAnalytics.startNewSessionCallback);
    };
    GameAnalytics.startNewSessionCallback = function (initResponse, initResponseDict) {
      if ((initResponse === EGAHTTPApiResponse.Ok || initResponse === EGAHTTPApiResponse.Created) && initResponseDict) {
        var timeOffsetSeconds = 0;
        if (initResponseDict["server_ts"]) {
          var serverTs = initResponseDict["server_ts"];
          timeOffsetSeconds = GAState.calculateServerTimeOffset(serverTs);
        }
        initResponseDict["time_offset"] = timeOffsetSeconds;
        if (initResponse != EGAHTTPApiResponse.Created) {
          var currentSdkConfig = GAState.getSdkConfig();
          if (currentSdkConfig["configs"]) {
            initResponseDict["configs"] = currentSdkConfig["configs"];
          }
          if (currentSdkConfig["configs_hash"]) {
            initResponseDict["configs_hash"] = currentSdkConfig["configs_hash"];
          }
          if (currentSdkConfig["ab_id"]) {
            initResponseDict["ab_id"] = currentSdkConfig["ab_id"];
          }
          if (currentSdkConfig["ab_variant_id"]) {
            initResponseDict["ab_variant_id"] = currentSdkConfig["ab_variant_id"];
          }
        }
        GAState.instance.configsHash = initResponseDict["configs_hash"] ? initResponseDict["configs_hash"] : "";
        GAState.instance.abId = initResponseDict["ab_id"] ? initResponseDict["ab_id"] : "";
        GAState.instance.abVariantId = initResponseDict["ab_variant_id"] ? initResponseDict["ab_variant_id"] : "";
        GAStore.setItem(GAState.getGameKey(), GAState.SdkConfigCachedKey, GAUtilities.encode64(JSON.stringify(initResponseDict)));
        GAState.instance.sdkConfigCached = initResponseDict;
        GAState.instance.sdkConfig = initResponseDict;
        GAState.instance.initAuthorized = true;
      } else if (initResponse == EGAHTTPApiResponse.Unauthorized) {
        GALogger.w("Initialize SDK failed - Unauthorized");
        GAState.instance.initAuthorized = false;
      } else {
        if (initResponse === EGAHTTPApiResponse.NoResponse || initResponse === EGAHTTPApiResponse.RequestTimeout) {
          GALogger.i("Init call (session start) failed - no response. Could be offline or timeout.");
        } else if (initResponse === EGAHTTPApiResponse.BadResponse || initResponse === EGAHTTPApiResponse.JsonEncodeFailed || initResponse === EGAHTTPApiResponse.JsonDecodeFailed) {
          GALogger.i("Init call (session start) failed - bad response. Could be bad response from proxy or GA servers.");
        } else if (initResponse === EGAHTTPApiResponse.BadRequest || initResponse === EGAHTTPApiResponse.UnknownResponseCode) {
          GALogger.i("Init call (session start) failed - bad request or unknown response.");
        }
        if (GAState.instance.sdkConfig == null) {
          if (GAState.instance.sdkConfigCached != null) {
            GALogger.i("Init call (session start) failed - using cached init values.");
            GAState.instance.sdkConfig = GAState.instance.sdkConfigCached;
          } else {
            GALogger.i("Init call (session start) failed - using default init values.");
            GAState.instance.sdkConfig = GAState.instance.sdkConfigDefault;
          }
        } else {
          GALogger.i("Init call (session start) failed - using cached init values.");
        }
        GAState.instance.initAuthorized = true;
      }
      GAState.instance.clientServerTimeOffset = GAState.getSdkConfig()["time_offset"] ? GAState.getSdkConfig()["time_offset"] : 0;
      GAState.populateConfigurations(GAState.getSdkConfig());
      if (!GAState.isEnabled()) {
        GALogger.w("Could not start session: SDK is disabled.");
        GAThreading.stopEventQueue();
        return;
      } else {
        GAThreading.ensureEventQueueIsRunning();
      }
      var newSessionId = GAUtilities.createGuid();
      GAState.instance.sessionId = newSessionId;
      GAState.instance.sessionStart = GAState.getClientTsAdjusted();
      GAEvents.addSessionStartEvent();
      var timedBlock = GAThreading.getTimedBlockById(GameAnalytics.initTimedBlockId);
      if (timedBlock != null) {
        timedBlock.running = false;
      }
      GameAnalytics.initTimedBlockId = -1;
    };
    GameAnalytics.resumeSessionAndStartQueue = function () {
      if (!GAState.isInitialized()) {
        return;
      }
      GALogger.i("Resuming session.");
      if (!GAState.sessionIsStarted()) {
        GameAnalytics.newSession();
      }
    };
    GameAnalytics.isSdkReady = function (needsInitialized, warn, message) {
      if (warn === void 0) {
        warn = true;
      }
      if (message === void 0) {
        message = "";
      }
      if (message) {
        message = message + ": ";
      }
      if (needsInitialized && !GAState.isInitialized()) {
        if (warn) {
          GALogger.w(message + "SDK is not initialized");
        }
        return false;
      }
      if (needsInitialized && !GAState.isEnabled()) {
        if (warn) {
          GALogger.w(message + "SDK is disabled");
        }
        return false;
      }
      if (needsInitialized && !GAState.sessionIsStarted()) {
        if (warn) {
          GALogger.w(message + "Session has not started yet");
        }
        return false;
      }
      return true;
    };
    GameAnalytics.initTimedBlockId = -1;
    GameAnalytics.methodMap = {};
    return GameAnalytics;
  }();
  gameanalytics.GameAnalytics = GameAnalytics;
})(gameanalytics || (gameanalytics = {}));
gameanalytics.GameAnalytics.init();
var GameAnalytics = gameanalytics.GameAnalytics.gaCommand;
module.exports = gameanalytics;

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.17.15';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f',reComboHalfMarksRange='\\ufe20-\\ufe2f',rsComboSymbolsRange='\\u20d0-\\u20ff',rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',rsOrdUpper='\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
'\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010a':'C','\u010c':'C','\u0107':'c','\u0109':'c','\u010b':'c','\u010d':'c','\u010e':'D','\u0110':'D','\u010f':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011a':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011b':'e','\u011c':'G','\u011e':'G','\u0120':'G','\u0122':'G','\u011d':'g','\u011f':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012a':'I','\u012c':'I','\u012e':'I','\u0130':'I','\u0129':'i','\u012b':'i','\u012d':'i','\u012f':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013b':'L','\u013d':'L','\u013f':'L','\u0141':'L','\u013a':'l','\u013c':'l','\u013e':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014a':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014b':'n','\u014c':'O','\u014e':'O','\u0150':'O','\u014d':'o','\u014f':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015a':'S','\u015c':'S','\u015e':'S','\u0160':'S','\u015b':'s','\u015d':'s','\u015f':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016a':'U','\u016c':'U','\u016e':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016b':'u','\u016d':'u','\u016f':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017b':'Z','\u017d':'Z','\u017a':'z','\u017c':'z','\u017e':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017f':'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=typeof global=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=typeof exports=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&typeof module=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** ess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*/ /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.],args[1],args[2]);}return func.apply(thisArg,args);}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.or,value,iteratee(value),array);}return accumulator;}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iy[index],index,array)===false){break;}}return array;}/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per ilength],length,array)===false){break;}}return array;}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elemenray[index],index,array)){return false;}}return true;}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * ex,array)){result[resIndex++]=value;}}return result;}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Reength;return!!length&&baseIndexOf(array,value,0)>-1;}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Retor(value,array[index])){return true;}}return false;}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   ]=iteratee(array[index],index,array);}return result;}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values tth){array[offset+index]=values[index];}return array;}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
lator,array[index],index,array);}return accumulator;}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
tor,array[length],length,array);}return accumulator;}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any elementray[index],index,array)){return true;}}return false;}/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var asciiSize=baseProperty('length');/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
  nction asciiToArray(string){return string.split('');}/**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returnslection)){result=key;return false;}});return result;}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Re(array[index],index,array)){return index;}}return-1;}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} RefromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Rearator(array[index],value)){return index;}}return-1;}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} R   */function baseIsNaN(value){return value!==value;}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteth;return length?baseSum(array,iteratee)/length:NAN;}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returon(key){return object==null?undefined:object[key];};}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
lator,value,index,collection);});return accumulator;}/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define so--){array[length]=array[length].value;}return array;}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per it===undefined?current:result+current;}}return result;}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   dex<n){result[index]=iteratee(index);}return result;}/**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   yMap(props,function(key){return[key,object[key]];});}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @rety(func){return function(value){return func(value);};}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @return arrayMap(props,function(key){return object[key];});}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `t/function cacheHas(cache,key){return cache.has(key);}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returnsf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returnf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * ray[length]===placeholder){++result;}}return result;}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var deburrLetter=basePropertyOf(deburredLetters);/**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to geject,key){return object==null?undefined:object[key];}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function hasUnicode(string){return reHasUnicode.test(string);}/**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
  ext()).done){result.push(data.value);}return result;}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
  e,key){result[++index]=[key,value];});return result;}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
  {return function(arg){return func(transform(arg));};}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {ArraLACEHOLDER;result[resIndex++]=index;}}return result;}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to coction(value){result[++index]=value;});return result;}/**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   *lue){result[++index]=[value,value];});return result;}/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Reh){if(array[index]===value){return index;}}return-1;}/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Ref(array[index]===value){return index;}}return index;}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.ile(reUnicode.test(string)){++result;}return result;}/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   *ords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*/ /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to deys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined,symIterator=Symbol?Symbol.iterator:undefined,symToStringTag=SineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     *apperClone(value);}}return new LodashWrapper(value);}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {object();object.prototype=undefined;return result;};}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function baseLodash(){// No operation performed.
}/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chachainAll;this.__index__=0;this.__values__=undefined;}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */lodash.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'escape':reEscape,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'evaluate':reEvaluate,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */'interpolate':reInterpolate,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */'variable':'',/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */'imports':{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*/ /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @construcis.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Obt.__views__=copyArray(this.__views__);return result;}/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} sult=this.clone();result.__dir__*=-1;}return result;}/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
  ak outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*/ /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the hash.
     *
     * @prta__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns s.__data__[key];this.size-=result?1:0;return result;}/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to getn hasOwnProperty.call(data,key)?data[key]:undefined;}/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `trudata[key]!==undefined:hasOwnProperty.call(data,key);}/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     &value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*/ /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the list cache.
     *
     * @privatection listCacheClear(){this.__data__=[];this.size=0;}/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns {splice.call(data,index,1);}--this.size;return true;}/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to getf(data,key);return index<0?undefined:data[index][1];}/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `trueHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @retkey,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*/ /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {r entry=entries[index];this.set(entry[0],entry[1]);}}/**
     * Removes all key-value entries from the map.
     *
     * @privat(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns ['delete'](key);this.size-=result?1:0;return result;}/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `trupCacheHas(key){return getMapData(this,key).has(key);}/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @rey,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*/ /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     he();while(++index<length){this.add(values[index]);}}/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     *this.__data__.set(value,HASH_UNDEFINED);return this;}/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*/ /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {__data__=new ListCache(entries);this.size=data.size;}/**
     * Removes all key-value entries from the stack.
     *
     * @prickClear(){this.__data__=new ListCache();this.size=0;}/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns ta['delete'](key);this.size=data.size;return result;}/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function stackGet(key){return this.__data__.get(key);}/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `truunction stackHas(key){return this.__data__.has(key);}/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @retudata.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*/ /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returndex(key,length)))){result.push(key);}}return result;}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
 turn length?array[baseRandom(0,length-1)]:undefined;}/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     *eSelf(copyArray(array),baseClamp(n,0,array.length));}/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign(key in object)){baseAssignValue(object,key,value);}}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign(key in object)){baseAssignValue(object,key,value);}}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Retu(eq(array[length][0],key)){return length;}}return-1;}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
   e,iteratee(value),collection);});return accumulator;}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source objern object&&copyObject(source,keysIn(source),object);}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assigne':value,'writable':true});}else{object[key]=value;}}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     *p?undefined:get(object,paths[index]);}return result;}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     *){number=number>=lower?number:lower;}}return number;}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.tmask,customizer,key,value,stack));});return result;}/**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @retbject){return baseConformsTo(object,source,props);};}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Retuect)||!predicate(value)){return false;}}return true;}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Omeout(function(){func.apply(undefined,args);},wait);}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Arted,comparator)){result.push(value);}}return result;}/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEach=createBaseEach(baseForOwn);/**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements ue,index,collection);return result;});return result;}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
 ){var computed=current,result=value;}}return result;}/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end posiwhile(start<end){array[start++]=value;}return array;}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @rx,collection)){result.push(value);}});return result;}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @reStrict){result[result.length]=value;}}return result;}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseFor=createBaseFor();/**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var baseForRight=createBaseFor(true);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iterati){return object&&baseForRight(object,iteratee,keys);}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     ops,function(key){return isFunction(object[key]);});}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
 ++])];}return index&&index==length?object:undefined;}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Rebject)?result:arrayPush(result,symbolsFunc(object));}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     bject(value)?getRawTag(value):objectToString(value);}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value`   */function baseGt(value,other){return value>other;}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean}eturn object!=null&&hasOwnProperty.call(object,key);}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean}ect,key){return object!=null&&key in Object(object);}/**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `tr>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
   r,iteratee(value),key,object);});return accumulator;}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returnsreturn func==null?undefined:apply(func,object,args);}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `trup(value,other,bitmask,customizer,baseIsEqual,stack);}/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `truets(object,other,bitmask,customizer,equalFunc,stack);}/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returntomizer,stack):result)){return false;}}}return true;}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value:reIsHostCtor;return pattern.test(toSource(value));}/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `tr(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
  alue[1]):baseMatches(value);}return property(value);}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returney!='constructor'){result.push(key);}}return result;}/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returnall(object,key)))){result.push(key);}}return result;}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `valu  */function baseLt(value,other){return value<other;}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * ex]=iteratee(value,key,collection);});return result;}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @retct===source||baseIsMatch(object,source,matchData);};}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @retalue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed sourcee;}assignMergeValue(object,key,newValue);}},keysIn);}/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source'](srcValue);}assignMergeValue(object,key,newValue);}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @rength:0;return isIndex(n,length)?array[n]:undefined;}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * her){return compareMultiple(object,other,orders);});}/**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
  s,function(value,path){return hasIn(object,path);});}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
  result,castPath(path,object),value);}}return result;}/**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returnsturn function(object){return baseGet(object,path);};}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per elex,1);}splice.call(array,fromIndex,1);}}return array;}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to redex,1);}else{baseUnset(array,index);}}}return array;}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     n lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * ht?length:++index]=start;start+=step;}return result;}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * (n/2);if(n){string+=string;}}while(n);return result;}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * setToString(overRest(func,start,identity),func+'');}/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function baseSample(collection){return arraySample(values(collection));}/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     *turn shuffleSelf(array,baseClamp(n,0,array.length));}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creatited,key,newValue);nested=nested[key];}return object;}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Retction(func,data){metaMap.set(func,data);return func;};/**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`e':false,'value':constant(string),'writable':true});};/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @r(collection){return shuffleSelf(values(collection));}/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * th){result[index]=array[index+start];}return result;}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element pase,index,collection);return!result;});return!!result;}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `v baseSortedIndexBy(array,value,identity,retHighest);}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `ve{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returnsesult[resIndex++]=value===0?0:value;}}return result;}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to processvalue;}if(isSymbol(value)){return NAN;}return+value;}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process;return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns.push(computed);}result.push(value);}}return result;}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `tturn object==null||delete object[toKey(last(path))];}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creatiject,path,updater(baseGet(object,path)),customizer);}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * e(array,fromRight?index+1:0,fromRight?length:index);}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
 .thisArg,arrayPush([result],action.args));},result);}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @rebaseUniq(baseFlatten(result,1),iteratee,comparator);}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
  ssignFunc(result,props[index],value);}return result;}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Arrect(value){return isArrayLikeObject(value)?value:[];}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
   lue){return typeof value=='function'?value:identity;}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returnsvalue,object)?[value]:stringToPath(toString(value));}/**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */var castRest=baseRest;/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
 start&&end>=length?array:baseSlice(array,start,end);}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     nstructor(length);buffer.copy(result);return result;}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns ult).set(new Uint8Array(arrayBuffer));return result;}/**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     p));result.lastIndex=regexp.lastIndex;return result;}/**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @retusymbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @retor(buffer,typedArray.byteOffset,typedArray.length);}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number}alIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} 0 for more details.
return object.index-other.index;}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Arrayesult[leftIndex++]=args[argsIndex++];}return result;}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Arrayrs[holdersIndex]]=args[argsIndex++];}}return result;}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy valueex<length){array[index]=source[index];}return array;}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied valuse{assignValue(object,key,newValue);}}return object;}/**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols turn copyObject(source,getSymbolsIn(source),object);}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {ction,setter,getIteratee(iteratee,2),accumulator);};}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns(object,source,index,customizer);}}return object;});}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @retndex,iterable)===false){break;}}return collection;};}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @retkey],key,iterable)===false){break;}}return object;};}/**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returnpply(isBind?thisArg:this,arguments);}return wrapper;}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @retstring.slice(1);return chr[methodName]()+trailing;};}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {s(deburr(string).replace(reApos,'')),callback,'');};}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returntails.
return isObject(result)?result:thisBinding;};}/**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returntor:func;return apply(fn,this,args);}return wrapper;}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @retrable[iteratee?collection[index]:index]:undefined;};}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @ret=funcs[index].call(this,result);}return result;};});}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @return;}return fn.apply(thisBinding,args);}return wrapper;}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returnsseInverter(object,setter,toIteratee(iteratee),{});};}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Reher);}result=operator(value,other);}return result;};}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @retratee){return apply(iteratee,thisArg,args);});});});}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @retuy(result),0,length).join(''):result.slice(0,length);}/**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @retu(step);return baseRange(start,end,step,fromRight);};}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} her=toNumber(other);}return operator(value,other);};}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returneholder;return setWrapToString(result,func,bitmask);}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @retu0]+'e'+(+pair[1]-precision));}return func(number);};}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var createSet=!INITY)?noop:function(values){return new Set(values);};/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @retuect);}return baseToPairs(object,keysFunc(object));};}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returnetWrapToString(setter(result,newData),func,bitmask);}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
  .call(object,key)){return srcValue;}return objValue;}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
  e,stack);stack['delete'](srcValue);}return objValue;}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or (value){return isPlainObject(value)?undefined:value;}/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `truelete'](array);stack['delete'](other);return result;}/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `truel(object)==symbolValueOf.call(other);}}return false;}/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `truelete'](object);stack['delete'](other);return result;}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     *tToString(overRest(func,undefined,flatten),func+'');}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Re){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the etaMap?noop:function(func){return metaMap.get(func);};/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     ||otherFunc==func){return data.name;}}return result;}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
    placeholder')?lodash:func;return object.placeholder;}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Functints.length?result(arguments[0],arguments[1]):result;}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference data[typeof key=='string'?'string':'hash']:data.map;}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returkey,value,isStrictComparable(value)];}return result;}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns ect,key);return baseIsNative(value)?value:undefined;}/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @r;}else{delete value[symToStringTag];}}return result;}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbo{return propertyIsEnumerable.call(object,symbol);});};/**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbolsobject));object=getPrototype(object);}return result;};/**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTaweakMapCtorString:return weakMapTag;}}return result;};}/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `st,end-size);break;}}return{'start':start,'end':end};}/**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     *ils);return match?match[1].split(reSplitDetails):[];}/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} key,length)&&(isArray(object)||isArguments(object));}/**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @array.index;result.input=array.input;}return result;}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @rototype(object)?baseCreate(getPrototype(object)):{};}/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @rw Ctor();case symbolTag:return cloneSymbol(object);}}/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * rapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `trnt.test(value))&&value>-1&&value%1==0&&value<length;}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments arbject){return eq(object[index],value);}return false;}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true.test(value)||object!=null&&value in Object(object);}/**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Return'||type=='boolean'?value!=='__proto__':value===null;}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func`ar data=getData(other);return!!data&&func===data[0];}/**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} RetMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var isMaskable=coreJsData?isFunction:stubFalse;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `'&&Ctor.prototype||objectProto;return value===proto;}/**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strirable(value){return value===value&&!isObject(value);}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @retue&&(srcValue!==undefined||key in Object(object));};}/**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns}return key;});var cache=result.cache;return result;}/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source mets.
data[0]=source[0];data[1]=newBitmask;return data;}/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returnin Object(object)){result.push(key);}}return result;}/**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @ring(value){return nativeObjectToString.call(value);}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     *ransform(array);return apply(func,this,otherArgs);};}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.ength<2?object:baseGet(object,baseSlice(path,0,-1));}/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array ind,arrLength)?oldArray[index]:undefined;}return array;}/**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
 rn;}if(key=='__proto__'){return;}return object[key];}/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var setData=shortOut(baseSetData);/**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id ornction(func,wait){return root.setTimeout(func,wait);};/**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */var setToString=shortOut(baseSetToString);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.updateWrapDetails(getWrapDetails(source),bitmask)));}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns e{count=0;}return func.apply(undefined,arguments);};}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `ar;array[index]=value;}array.length=size;return array;}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the prope(reEscapeChar,'$1'):number||match);});return result;});/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
  ;return result=='0'&&1/value==-INFINITY?'-0':result;}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
   ;}catch(e){}try{return func+'';}catch(e){}}return'';}/**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more detailue)){details.push(value);}});return details.sort();}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     *;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*/ /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', ']=baseSlice(array,index,index+=size);}return result;}/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0;if(value){result[resIndex++]=value;}}return result;}/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
    rray)?copyArray(array):[array],baseFlatten(args,1));}/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2,ay,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{,1,isArrayLikeObject,true),undefined,comparator):[];});/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * /h?baseWhile(array,getIteratee(predicate,3),true):[];}/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 1;end=length;}return baseFill(array,value,start,end);}/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     baseFindIndex(array,getIteratee(predicate,3),index);}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.indIndex(array,getIteratee(predicate,3),index,true);}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3:array.length;return length?baseFlatten(array,1):[];}/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2length;return length?baseFlatten(array,INFINITY):[];}/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenD?1:toInteger(depth);return baseFlatten(array,depth);}/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1pairs[index];result[pair[0]]=pair[1];}return result;}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
  rray){return array&&array.length?array[0]:undefined;}/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     *gth+index,0);}return baseIndexOf(array,value,index);}/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
  array.length;return length?baseSlice(array,0,-1):[];}/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ '0]?baseIntersection(mapped,undefined,comparator):[];});/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.journ array==null?'':nativeJoin.call(array,separator);}/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
 rray.length;return length?array[length-1]:undefined;}/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lue,index):baseFindIndex(array,baseIsNaN,index,true);}/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
   &array.length?baseNth(array,toInteger(n)):undefined;}/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var pull=baseRest(pullAll);/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
    lues&&values.length?basePullAll(array,values):array;}/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     *PullAll(array,values,getIteratee(iteratee,2)):array;}/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * asePullAll(array,values,undefined,comparator):array;}/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulledndex:index;}).sort(compareAscending));return result;});/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
sh(index);}}basePullAt(array,indexes);return result;}/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
   {return array==null?array:nativeReverse.call(array);}/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * h:toInteger(end);}return baseSlice(array,start,end);}/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndeSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sorth&&eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sorteray,value){return baseSortedIndex(array,value,true);}/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedL;if(eq(array[index],value)){return index;}}return-1;}/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *y.length;return length?baseSlice(array,1,length):[];}/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     ed?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
   );n=length-n;return baseSlice(array,n<0?0:n,length);}/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.taWhile(array,getIteratee(predicate,3),false,true):[];}/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [eUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // =>,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1ays,1,isArrayLikeObject,true),undefined,comparator);});/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *rray){return array&&array.length?baseUniq(array):[];}/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }y.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * rray.length?baseUniq(array,undefined,comparator):[];}/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
  ndex){return arrayMap(array,baseProperty(index));});}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipon(group){return apply(iteratee,undefined,group);});}/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3]ayLikeObject(array)?baseDifference(array,values):[];});/**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1],turn baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y':ter(arrays,isArrayLikeObject),undefined,comparator);});/**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */var zip=baseRest(unzip);/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * //{return baseZipObject(props||[],values||[],baseSet);}/**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * })eratee):undefined;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*/ /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
t=lodash(value);result.__chain__=true;return result;}/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .r(value,interceptor){interceptor(value);return value;}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
   n thru(value,interceptor){return interceptor(value);}/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).valuerray.length){array.push(undefined);}return array;});});/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *}
     */function wrapperChain(){return chain(this);}/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
   turn new LodashWrapper(this.value(),this.__chain__);}/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
   this.__index__++];return{'done':done,'value':value};}/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
  2]
     */function wrapperToIterator(){return this;}/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
    wrapped__;}previous.__wrapped__=value;return result;}/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
   (wrapped,this.__chain__);}return this.thru(reverse);}/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*/ /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => {{++result[key];}else{baseAssignValue(result,key,1);}});/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */var find=createFind(findIndex);/**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */var findLast=createFind(findLastIndex);/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMaptee){return baseFlatten(map(collection,iteratee),1);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeepturn baseFlatten(map(collection,iteratee),INFINITY);}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2];return baseFlatten(map(collection,iteratee),depth);}/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'],h(value);}else{baseAssignValue(result,key,[value]);}});/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
    !length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2',,args):baseInvoke(value,path,args);});return result;});/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(uMap;return func(collection,getIteratee(iteratee,3));}/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36s];}return baseOrderBy(collection,iteratees,orders);}/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barneult[key?0:1].push(value);},function(){return[[],[]];});/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
ee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, n func(collection,negate(getIteratee(predicate,3)));}/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.saSampleSize:baseSampleSize;return func(collection,n);}/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shn)?arrayShuffle:baseShuffle;return func(collection);}/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
 collection.size;}return baseKeys(collection).length;}/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
   d;}return func(collection,getIteratee(predicate,3));}/**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], [baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*/ /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it too*/var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*/ /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done savion(){if(--n<1){return func.apply(this,arguments);}};}/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10']ARY_FLAG,undefined,undefined,undefined,undefined,n);}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // rguments);}if(n<=1){func=undefined;}return result;};}/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hn createWrap(func,bitmask,thisArg,partials,holders);});/**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
urn createWrap(key,bitmask,object,partials,holders);});/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
    lt.placeholder=curryRight.placeholder;return result;}/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQancel=cancel;debounced.flush=flush;return debounced;}/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'defert(function(func,args){return baseDelay(func,1,args);});/**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logargs){return baseDelay(func,toNumber(wait)||0,args);});/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5,gs[1],args[2]);}return!predicate.apply(this,args);};}/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
  ce
     */function once(func){return before(2,func);}/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5)(this,args[index]);}return apply(func,this,args);});});/**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined,partials,holders);});/**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     WRAP_PARTIAL_RIGHT_FLAG,undefined,partials,holders);});/**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
 P_REARG_FLAG,undefined,undefined,undefined,indexes);});/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles')?start:toInteger(start);return baseRest(func,start);}/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return xerArgs,array);}return apply(func,this,otherArgs);});}/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQading':leading,'maxWait':wait,'trailing':trailing});}/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10' 10]
     */function unary(func){return ary(func,1);}/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
   rapper){return partial(castFunction(wrapper),value);}/*------------------------------------------------------------------------*/ /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.ue=arguments[0];return isArray(value)?value:[value];}/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * conturn baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.lbaseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * consalue,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': functie==null||baseConformsTo(object,source,keys(source));}/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
 {return value===other||value!==value&&other!==other;}/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var gt=createRelationalOperation(baseGt);/**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     *Operation(function(value,other){return value>=other;});/**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */var isArguments=baseIsArgumallee')&&!propertyIsEnumerable.call(value,'callee');};/**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */var isArray=Array.isArray;/**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
  e!=null&&isLength(value.length)&&!isFunction(value);}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _lue){return isObjectLike(value)&&isArrayLike(value);}/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     se||isObjectLike(value)&&baseGetTag(value)==boolTag;}/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var isBuffer=nativeIsBuffer||stubFalse;/**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
  e(value)&&value.nodeType===1&&!isPlainObject(value);}/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
  roperty.call(value,key)){return false;}}return true;}/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
    sEqual(value,other){return baseIsEqual(value,other);}/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWiteIsEqual(value,other,undefined,customizer):!!result;}/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
    &typeof value.name=='string'&&!isPlainObject(value);}/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
   eturn typeof value=='number'&&nativeIsFinite(value);}/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
=funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
    urn typeof value=='number'&&value==toInteger(value);}/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
   ber'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
    urn value!=null&&(type=='object'||type=='function');}/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
 e(value){return value!=null&&typeof value=='object';}/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.ice||baseIsMatch(object,source,getMatchData(source));}/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(atch(object,source,getMatchData(source),customizer);}/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *bjects in IE.
return isNumber(value)&&value!=+value;}/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
  Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
    e
     */function isNull(value){return value===null;}/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
lse
     */function isNil(value){return value==null;}/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag;}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlaineof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
 &&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
 &&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     ||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
unction isUndefined(value){return value===undefined;}/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
  isObjectLike(value)&&baseGetTag(value)==weakSetTag;}/**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */var lt=createRelationalOperation(baseLt);/**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     *Operation(function(value,other){return value<=other;});/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
ay:tag==setTag?setToArray:values;return func(value);}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
   turn sign*MAX_INTEGER;}return value===value?value:0;}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
  result===result?remainder?result-remainder:result:0;}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
 ue?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
   (2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new bject(value){return copyObject(value,keysIn(value));}/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *AX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0;}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
    ng(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*/ /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // =(source,key)){assignValue(object,key,source[key]);}}});/**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2ct,source){copyObject(source,keysIn(source),object);});/**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { ){copyObject(source,keys(source),object,customizer);});/**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */var at=flatRest(baseAt);/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
   operties==null?result:baseAssign(result,properties);}/**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * ject,key)){object[key]=source[key];}}}return object;});/**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': faultsMerge);return apply(mergeWith,undefined,args);});/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLaey(object,getIteratee(predicate,3),baseForOwnRight);}/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' tct&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(objecpath);return result===undefined?defaultValue:result;}/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
 return object!=null&&hasPath(object,path,baseHasIn);}/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { nativeObjectToString.call(value);}result[value]=key;},constant(identity));/**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'],{result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */var invoke=baseRest(baseInvoke);/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     Like(object)?arrayLikeKeys(object):baseKeys(object);}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a',ject)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value,iteratee(value,key,object),value);});return result;}/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'peblt,key,iteratee(value,key,object));});return result;}/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, ,source,srcIndex){baseMerge(object,source,srcIndex);});/**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, mizer){baseMerge(object,source,srcIndex,customizer);});/**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']h--){baseUnset(result,paths[length]);}return result;});/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(eturn pickBy(object,negate(getIteratee(predicate)));}/**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
   aths){return object==null?{}:basePick(object,paths);});/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(objecttion(value,path){return predicate(value,path[0]);});}/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', tion(value)?value.call(object):value;}return object;}/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     turn object==null?object:baseSet(object,path,value);}/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a==null?object:baseSet(object,path,value,customizer);}/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var toPairs=createToPairs(keys);/**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */var toPairsIn=createToPairs(keysIn);/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {})cumulator,value,index,object);});return accumulator;}/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.logth){return object==null?true:baseUnset(object,path);}/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     bject:baseUpdate(object,path,castFunction(updater));}/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'pdate(object,path,castFunction(updater),customizer);}/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function values(object){return object==null?[]:baseValues(object,keys(object));}/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // =>n object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*/ /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
  r:0;}return baseClamp(toNumber(number),lower,upper);}/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
 Number(number);return baseInRange(number,start,end);}/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // .length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*/ /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     *rCase();return result+(index?capitalize(word):word);});/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
  ){return upperFirst(toString(string).toLowerCase());}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
    replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
   eturn position>=0&&string.slice(position,end)==target;}/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
 st(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */var lowerFirst=createCaseFirst('toLowerCase');/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
 d),chars)+string+createPadding(nativeCeil(mid),chars);}/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
    h?string+createPadding(length-strLength,chars):string;}/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *h?createPadding(length-strLength,chars)+string:string;}/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', 'nt(toString(string).replace(reTrimStart,''),radix||0);}/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
 n=toInteger(n);}return baseRepeat(toString(string),n);}/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fr args.length<3?string:string.replace(args[1],args[2]);}/**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _ring),0,limit);}}return string.split(separator,limit);}/**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     ,index){return result+(index?' ':'')+upperFirst(word);});/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     string.slice(position,position+target.length)==target;}/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.templaource;if(isError(result)){throw result;}return result;}/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function toLower(value){return toString(value).toLowerCase();}/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.ton toUpper(value){return toString(value).toUpperCase();}/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', ls)+1;return castSlice(strSymbols,start,end).join('');}/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.tchars))+1;return castSlice(strSymbols,0,end).join('');}/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.triy(chars));return castSlice(strSymbols,start).join('');}/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * }result=result.slice(0,index);}}return result+omission;}/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pstring.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     ndex){return result+(index?' ':'')+word.toUpperCase();});/**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */var upperFirst=createCaseFirst('toUpperCase');/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);:asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*/ /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     ned,args);}catch(e){return isError(e)?e:new Error(e);}});/**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'object,key,bind(object[key],object));});return object;});/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func(r[0],this,args)){return apply(pair[1],this,args);}}});}/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.ltion constant(value){return function(){return value;};}/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
  {return value==null||value!==value?defaultValue:value;}/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var flow=createFlow();/**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */var flowRight=createFlow(true);/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_ => true
     */function identity(value){return value;}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.fiunc=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('hesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(obj function(path){return baseInvoke(object,path,args);};});/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false }ayPush([this.value()],arguments));};}});return object;}/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @exflict(){if(root._===this){root._=oldDash;}return this;}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.timesed]
     */function noop(){// No operation performed.
}/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
 urn baseRest(function(args){return baseNth(args,n);});}/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var over=createOver(arrayMap);/**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */var overEvery=createOver(arrayEvery);/**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */var overSome=createOver(arraySome);/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.prath)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '{return object==null?undefined:baseGet(object,path);};}/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var range=createRange();/**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */var rangeRight=createRange(true);/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.   * // => false
     */function stubArray(){return[];}/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function stubFalse(){return false;}/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.lo  * // => false
     */function stubObject(){return{};}/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function stubString(){return'';}/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _> [true, true]
     */function stubTrue(){return true;}/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.tiatee);while(++index<n){iteratee(index);}return result;}/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPatlue)?[value]:copyArray(stringToPath(toString(value)));}/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*/ /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6,peration(function(augend,addend){return augend+addend;},0);/**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */var ceil=createRound('ceil');/**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);on(function(dividend,divisor){return dividend/divisor;},1);/**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */var floor=createRound('floor');/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     remum(array,getIteratee(iteratee,2),baseGt):undefined;}/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
  /function mean(array){return baseMean(array,identity);}/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthanratee){return baseMean(array,getIteratee(iteratee,2));}/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2.length?baseExtremum(array,identity,baseLt):undefined;}/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}/**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
ltiplier,multiplicand){return multiplier*multiplicand;},1);/**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */var round=createRound('round');/**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
  {return array&&array.length?baseSum(array,identity):0;}/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthanarray.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/ // Add methods that return wrapped values in chain sequences.
lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
mixin(lodash,lodash);/*------------------------------------------------------------------------*/ // Add methods that return unwrapped values in chain sequences.
lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
lodash.each=forEach;lodasethodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*/ /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */lodash.VERSION=VERSION;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_n(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `tered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methoame]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for_filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){rection(predicate){return this.fition(predicate){return this.reverse().finfunction(value){return baseInve){return this.filter(negatedropRight(-end):result.take(end-start{return this.reverse().takeWhitoArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods ped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
arr{return func.apply(isArray(value)?value:[],args);});};});// Map minified method namemes[key].push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/ // Export lodash.
var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
root._=_;// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
define(function(){return _;});}// Check for `exports` after `define` in case a build optimizer adds it.
else if(freeModule){// Export for Node.js.
(freeModule.exports=_)._=_;// Export for CommonJS support.
freeExports._=_;}else{// Export to the global object.
root._=_;}}).call(this);

/***/ }),

/***/ "./node_modules/merge-json/index.js":
/*!******************************************!*\
  !*** ./node_modules/merge-json/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// JSON Konstruktor für die Überprüfung ob ein Objekt JSON ist
var jsonC = {}.constructor;
var isJSON = function (json) {
  if (json && json.constructor === jsonC) {
    return true;
  } else {
    return false;
  }
};
exports.isJSON = isJSON;
var mergeJSON = function (json1, json2) {
  var result = null;
  if (isJSON(json2)) {
    result = {};
    if (isJSON(json1)) {
      for (var key in json1) {
        result[key] = json1[key];
      }
    }
    for (var key in json2) {
      if (typeof result[key] === "object" && typeof json2 === "object") {
        result[key] = mergeJSON(result[key], json2[key]);
      } else {
        result[key] = json2[key];
      }
    }
  } else if (Array.isArray(json1) && Array.isArray(json2)) {
    result = json1;
    for (var i = 0; i < json2.length; i++) {
      if (result.indexOf(json2[i]) === -1) {
        result[result.length] = json2[i];
      }
    }
  } else {
    result = json2;
  }
  return result;
};
exports.merge = mergeJSON;

/***/ }),

/***/ "./node_modules/microee/index.js":
/*!***************************************!*\
  !*** ./node_modules/microee/index.js ***!
  \***************************************/
/*! no s(module, exports) {

function M() {
  this._events = {};
}
M.prototype = {
  on: function (ev, cb) {
    this._events || (this._events = {});
    var e = this._events;
    (e[ev] || (e[ev] = [])).push(cb);
    return this;
  },
  removeListener: function (ev, cb) {
    var e = this._events[ev] || [],
      i;
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      if (e[i] === cb || e[i].cb === cb) {
        e.splice(i, 1);
      }
    }
  },
  removeAllListeners: function (ev) {
    if (!ev) {
      this._events = {};
    } else {
      this._events[ev] && (this._events[ev] = []);
    }
  },
  listeners: function (ev) {
    return this._events ? this._events[ev] || [] : [];
  },
  emit: function (ev) {
    this._events || (this._events = {});
    var args = Array.prototype.slice.call(arguments, 1),
      i,
      e = this._events[ev] || [];
    for (i = e.length - 1; i >= 0 && e[i]; i--) {
      eunction (ev, cb) {
    return this.once(ev, cb, true);
  },
  once: function (ev, cb, when) {
    if (!cb) return this;
    function c() {
      if (!when) this.removeListener(ev, c);
      if (cb.apply(this, arguments) && when) this.removeListener(ev, c);
    }
    c.cb = cb;
    this.on(ev, c);
    return this;
  }
};
M.mixin = function (dest) {
  var o = M.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = M;

/***/ }),

/***/ "./node_modules/minilog/lib/common/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/minilog/lib/common/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// default filter
var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js");
var levelMap = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};
function Filter() {
  this.enabled = true;
  this.defaultResult = true;
  this.clear();
}
Transform.mixin(Filter);

// allow all matching, with level >= given level
Filter.prototype.allow = function (name, level) {
  this._white.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};

// deny all matching, with level <= given level
Filter.prototype.deny = function (name, level) {
  this._black.push({
    n: name,
    l: levelMap[level]
  });
  return this;
};
Filter.prototype.clear = function () {
  this._white = [];
  this._black = [];
  return this;
};
function test(rule, name) {
  // use .test for RegExps
  return rule.n.test ? rule.n.test(name) : rule.n == name;
}
;
Filter.prototype.test = function (name, level) {
  var i,
    len = Math.max(this._white.length, this._black.length);
  for (i = 0; i < len; i++) {
    if (this._white[i] && test(this._white[i], name) && levelMap[level] >= this._white[i].l) {
      return true;
    }
    if (this._black[i] && test(this._black[i], name) && levelMap[level] <= this._black[i].l) {
      return false;
    }
  }
  return this.defaultResult;
};
Filter.prototype.write = function (name, level, args) {
  if (!this.enabled || this.test(name, level)) {
    return this.emit('item', name, level, args);
  }
};
module.exports = Filter;

/***/ }),

/***/ "./node_modules/minilog/lib/common/minilog.js":
/*!****************************************************!*\
  !*** ./node_modules/minilog/lib/common/minilog.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ./transform.js */ "./node_modules/minilog/lib/common/transform.js"),
  Filter = __webpack_require__(/*! ./filter.js */ "./node_modules/minilog/lib/common/filter.js");
var log = new Transform(),
  slice = Array.prototype.slice;
exports = module.exports = function create(name) {
  var o = function () {
    log.write(name, undefined, slice.call(arguments));
    return o;
  };
  o.debug = function () {
    log.write(name, 'debug', slice.call(arguments));
    return o;
  };
  o.info = function () {
    log.write(name, 'info', slice.call(arguments));
    return o;
  };
  o.warn = function () {
    log.write(name, 'warn', slice.call(arguments));
    return o;
  };
  o.error = function () {
    log.write(name, 'error', slice.call(arguments));
    return o;
  };
  o.log = o.debug; // for interface compliance with Node and browser consoles
  o.suggest = exports.suggest;
  o.format = log.format;
  return o;
};

// filled in separately
exports.defaultBackend = exports.defaultFormatter = null;
exports.pipe = function (dest) {
  return log.pipe(dest);
};
exports.end = exports.unpipe = exports.disable = function (from) {
  return log.unpipe(from);
};
exports.Transform = Transform;
exports.Filter = Filter;
// this is the default filter that's applied when .enable() is called normally
// you can bypass it completely and set up your own pipes
exports.suggest = new Filter();
exports.enable = function () {
  if (exports.defaultFormatter) {
    return log.pipe(exports.suggest) // filter
    .pipe(exports.defaultFormatter) // formatter
    .pipe(exports.defaultBackend); // backend
  }

  return log.pipe(exports.suggest) // filter
  .pipe(exports.defaultBackend); // formatter
};

/***/ }),

/***/ "./node_modules/minilog/lib/common/transform.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/common/transform.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var microee = __webpack_require__(/*! microee */ "./node_modules/microee/index.js");

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}
microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, p, level, args) {
  this.emion () {
  this.emit('end');
  this.removeAllListeners();
};
Transform.prototype.pipe = function (dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);
  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() {
    !dest._isStdio && dest.end();
  }
  s.on('item', onItem);
  s.on('end', onEnd);
  s.when('unpipe', function (from) {
    var match = from === dest || typeof from == 'undefined';
    if (match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return mion (from) {
  this.emit('unpipe', from);
  return this;
};
Transform.prototype.format = function (dest) {
  throw new Error(['Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:', 'var Minilog = require(\'minilog\');', 'Minilog', '  .pipe(Minilog.backends.console.formatClean)', '  .pipe(Minilog.backends.console);'].join('\n'));
};
Transform.mixin = function (dest) {
  var o = Transform.prototype,
    k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};
module.exports = Transform;

/***/ }),

/***/ "./node_modules/minilog/lib/web/array.js":
/*!***********************************************!*\
  !*** ./node_modules/minilog/lib/web/array.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
(name, level, args) {
  cache.push([name, level, args]);
};

// utility functions
lourn cache;
};
logger.empty = function () {
  cache = [];
};
module.exports = logger;

/***/ }),

/***/ "./node_modules/minilog/lib/web/console.js":
/*!*************************************************!*\
  !*** ./node_modules/minilog/lib/web/console.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");
var newlines = /\n+$/,
  logger = new Transform();
logger.write = function (name, level, args) {
  var i = args.length - 1;
  if (typeof console === 'undefined' || !console.log) {
    return;
  }
  if (console.log.apply) {
    return console.log.apply(console, [name, level].concat(args));
  } else if (JSON && JSON.stringify) {
    // console.log.apply is undefined in IE8 and IE9
    // for IE8/9: make console.log at least a bit less awful
    if (args[i] && typeof args[i] == 'string') {
      args[i] = args[i].replace(newlines, '');
    }
    try {
      for (i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
      }
    } catch (e) {}
    console.log(args.join(' '));
  }
};
logger.formatters = ['color', 'minilog'];
logger.color = __webpack_require__(/*! ./formatters/color.js */ "./node_modules/minilog/lib/web/formatters/color.js");
logger.minilog = __webpack_require__(/*! ./formatters/minilog.js */ "./node_modules/minilog/lib/web/formatters/minilog.js");
module.exports = logger;

/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
  color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js");
var colors = {
    debug: ['cyan'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger = new Transform();
logger.write = function (name, level, args) {
  var fn = console.log;
  if (console[level] && console[level].apply) {
    fn = console[level];
    fn.apply(console, ['%c' + name + ' %c' + level, color('gray'), color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function () {};
module.exports = logger;

/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/minilog.js":
/*!************************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/minilog.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
  color = __webpack_require__(/*! ./util.js */ "./node_modules/minilog/lib/web/formatters/util.js"),
  colors = {
    debug: ['gray'],
    info: ['purple'],
    warn: ['yellow', true],
    error: ['red', true]
  },
  logger = new Transform();
logger.write = function (name, level, args) {
  var fn = console.log;
  if (level != 'debug' && console[level]) {
    fn = console[level];
  }
  var subset = [],
    i = 0;
  if (level != 'info') {
    for (; i < args.length; i++) {
      if (typeof args[i] != 'string') break;
    }
    fn.apply(console, ['%c' + name + ' ' + args.slice(0, i).join(' '), color.apply(color, colors[level])].concat(args.slice(i)));
  } else {
    fn.apply(console, ['%c' + name, color.apply(color, colors[level])].concat(args));
  }
};

// NOP, because piping the formatted logs can only cause trouble.
logger.pipe = function () {};
module.exports = logger;

/***/ }),

/***/ "./node_modules/minilog/lib/web/formatters/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/minilog/lib/web/formatters/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue: '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color(fg, isInverse) {
  if (isInverse) {
    return 'color: #fff; background: ' + hex[fg] + ';';
  } else {
    return 'color: ' + hex[fg] + ';';
  }
}
module.exports = color;

/***/ }),

/***/ "./node_modules/minilog/lib/web/index.js":
/*!***********************************************!*\
  !*** ./node_modules/minilog/lib/web/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Minilog = __webpack_require__(/*! ../common/minilog.js */ "./node_modules/minilog/lib/common/minilog.js");
var oldEnable = Minilog.enable,
  oldDisable = Minilog.disable,
  isChrome = typeof navigator != 'undefined' && /chrome/i.test(navigator.userAgent),
  console = __webpack_require__(/*! ./console.js */ "./node_modules/minilog/lib/web/console.js");

// Use a more capable logging backend if on Chrome
Minilog.defaultBackend = isChrome ? console.minilog : console;

// apply enable inputs from localStorage and from the URL
if (typeof window != 'undefined') {
  try {
    Minilog.enable(JSON.parse(window.localStorage['minilogSettings']));
  } catch (e) {}
  if (window.location && window.location.search) {
    var match = RegExp('[?&]minilog=([^&]*)').exec(window.location.search);
    match && Minilog.enable(decodeURIComponent(match[1]));
  }
}

// Make enable also add to localStorage
Minilog.enable = function () {
  oldEnable.call(Minilog, true);
  try {
    window.localStorage['minilogSettings'] = JSON.stringify(true);
  } catch (e) {}
  return this;
};
Minilog.disable = function () {
  oldDisable.call(Minilog);
  try {
    delete window.localStorage.minilogSettings;
  } catch (e) {}
  return this;
};
exports = module.exports = Minilog;
exports.backends = {
  array: __webpack_require__(/*! ./array.js */ "./node_modules/minilog/lib/web/array.js"),
  browser: Minilog.defaultBackend,
  localStorage: __webpack_require__(/*! ./localstorage.js */ "./node_modules/minilog/lib/web/localstorage.js"),
  jQuery: __webpack_require__(/*! ./jquery_simple.js */ "./node_modules/minilog/lib/web/jquery_simple.js")
};

/***/ }),

/***/ "./node_modules/minilog/lib/web/jquery_simple.js":
/*!*******************************************************!*\
  !*** ./node_modules/minilog/lib/web/jquery_simple.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js");
var cid = new Date().valueOf().toString(36);
function AjaxLogger(options) {
  this.url = options.url || '';
  this.cache = [];
  this.timer = null;
  this.interval = options.interval || 30 * 1000;
  this.enabled = true;
  this.jQuery = window.jQuery;
  this.extras = {};
}
Transform.mixin(AjaxLogger);
AjaxLogger.prototype.write = function (name, level, args) {
  if (!this.timer) {
    this.init();
  }
  this.cache.push([name, level].concat(args));
};
AjaxLogger.prototype.init = function () {
  if (!this.enabled || !this.jQuery) return;
  var self = this;
  this.timer = setTimeout(function () {
    var i,
      logs = [],
      ajaxData,
      url = self.url;
    if (self.cache.length == 0) return self.init();
    // Test each log line and only log the ones that are valid (e.g. don't have circular references).
    // Slight performance hit but benefit is we log all valid lines.
    for (i = 0; i < self.cache.length; i++) {
      try {
        JSON.stringify(self.cache[i]);
        logs.push(self.cache[i]);
      } catch (e) {}
    }
    if (self.jQuery.isEmptyObject(self.extras)) {
      ajaxData = JSON.stringify({
        logs: logs
      });
      url = self.url + '?client_id=' + cid;
    } else {
      ajaxData = JSON.stringify(self.jQuery.extend({
        logs: logs
      }, self.extras));
    }
    self.jQuery.ajax(url, {
      type: 'POST',
      cache: false,
      processData: false,
      data: ajaxData,
      contentType: 'application/json',
      timeout: 10000
    }).success(function (data, status, jqxhr) {
      if (data.interval) {
        self.inte }).error(function () {
      self.interval = 30000;
    }).always(function () {
      self.init();
    });
    self.cache = [];
  }, this.interval);
};
AjaxLogger.prototype.end = function () {};

// wait until jQuery is defined. Useful if you don't control the load order.
AjaxLogger.jQueryWait = function (onDone) {
  if (typeof window !== 'undefined' && (window.jQuery || window.$)) {
    return onDone(window.jQuery || window.$);
  } else if (typeof window !== 'undefined') {
    setTimeout(function () {
      AjaxLogger.jQueryWait(onDone);
    }, 200);
  }
};
module.exports = AjaxLogger;

/***/ }),

/***/ "./node_modules/minilog/lib/web/localstorage.js":
/*!******************************************************!*\
  !*** ./node_modules/minilog/lib/web/localstorage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Transform = __webpack_require__(/*! ../common/transform.js */ "./node_modules/minilog/lib/common/transform.js"),
  cache = false;
var logger = new Transform();
logger.write = function (name, level, args) {
  if (typeof window == 'undefined' || typeof JSON == 'undefined' || !JSON.stringify || !JSON.parse) return;
  try {
    if (!cache) {
      cache = window.localStorage.minilog ? JSON.parse(window.localStorage.minilog) : [];
    }
    cache.push([new Date().toString(), name, level, args]);
    window.localStorage.minilog = JSON.stringify(cache);
  } catch (e) {}
};
module.exports = logger;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \**************************[i]];
        }
      }
    }
  }
  return to;
};

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./raw/avatarImage.b64":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./raw/avatarImage.b64 ***!
  \**************************************************Vge03o+gYA+H8FaRxJbRPM6QAAAABJRU5ErkJggg==\\n\";");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var tokeMethod(innerFn, self, context);
    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  /      return this._invoke(methodsplayName || ctor.genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the  fu(see defineIteratorMethods).
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // ret      context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting con   context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };
  Gp.toStte";sList.forEach(pusctith no values.
    return {
  return {
      value: undefined,
      done: true
    };
  }
 this[name] throw rootRecord.arg;
 hout catch oreSentinel;
    ext = afterLo;
          reblock.
      throw nrg = undefined;
      }
      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;
}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./node_modules/simple-load-script/simpleLoadScript.js":
/*!*************************************************************!*\
  !*** ./node_modules/simple-load-script/simpleLoadScript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.simpleLoadSame];
    } catch (e) {
      window[name] = null;
    }
  }
  function getScript(url, options) {
    return new Promise(function (resolve, reject) {
      if (typeof url === 'object') {
        options = url;
        url = options.url;
      }
      if (!options) options = {};
      if (!url) {
        reject('Error: no script url');
        return;
      }
      var script = document.createElement('script');
      var where = function () {
        if (options.insertInto) {
          return document.querySelector(options.insertInto);
        }
        return options.inBody ? document.body : document.head;
      }();
      if (!where) {
        reject('Error: no DOM element to append script');
        return;
      }
      var attrs = options.attrs;
      var removeScript = options.removeScript;
      var callBackName = options.callBackName;
      for (var attr in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, attr)) {
          script.setAttribute(attr, attrs[attr]);
        }
      }
      if (!callBackName) {
        script.addEventListener('load', function () {
          if (removeScript) where.removeChild(script);
          resolve(removeScript ? undef : script);
        });
      } else {
        window[callBackName] = function (res) {
          if (!res) res = removeScript ? undef : script;
          if (!options.dontRemoveCallBack) deleteFromGlobal(callBackName);
          if (removeScript) where.removeChild(script);
          resolve(res || removeScript ? undef : scriptld(script);
        reject('Error: loading script');
      });
      script.src = url;
      where.appendChild(script);
    });
  }

  // array of urls or array of objects
  function all() {
    if (!arguments.length) return Promise.reject(new Error('No files or no file configs'));
    .isArray(e) ? getScript.apply(null, e) : getScript(e);
    }));
  }
  getScript.deleteFromGlobal = deleteFromGlobal;
  getScript.all = all;
  return getScript;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/polyfill */ "./src/lib/polyfill.js");
/* harmony import */ var _lib_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sg_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sg-sdk */ "./src/sg-sdk.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */
/* global window, global _ */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
__webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js").enable();
function preparePageControllerConnector() {
  const mockedSdk = window.sgSdk || {};
  _sg_sdk__WEBPACK_IMPORTED_MODULE_1__["default"].inject(window);
  if (Array.isArray(mockedSdk.pageControllerConnector)) {
    console.log('pageControllerConnector is an array. Executing pushed function...');
  Connector.filter(connector => typeof connector === 'function');
    const {
      length
    } = connectors;
    if (length !== mockedSdk.pageControllerConnector.length) {
      console.error('Not a function given as connector');
      return;
    }
    if (length < 1) {
      console.log('pageControllerConnector is empty');
      return;
    }
    if (length > 1) {
      console.error('Stop boy :( First come, only serve');
    }
    const {
      on,
      off,
      trigger
    } = _sg_sdk__WEBPACK_IMPORTED_MODULE_1__["default"];
    try {
      connectors[0]({
        on,
        off,
        trigger
      });
    } catch (err) {
      console.error('The connector threw an error. Which indicates the someone else but me fucked up!', err);
    }
  }
}
try {
  try {
    _.noConflict();
  } catch (err) {
    // silence is golden
  }
  preparePageControllerConnector();
} catch (err) {
  console.error(err);
}

/***/ }),

/***/ "./src/lib/consts/events.js":
/*!**********************************!*\
  !*** ./src/lib/consts/events.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by René Simon <rene.simon@softgames.de> on 07.11.17.
 * Copyright © Softgames 2017
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  COMMAND_PREFIX: 'private.command.'
});

/***/ }),

/***/ "./src/lib/crossword-handler.js":
/*!**************************************!*\
  !*** ./src/lib/crossword-handler.js ***!
  \**************************************/
/*! exports provided: changeId, getCrosswordConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeId", function() { return changeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCrosswordConfig", function() { return getCrosswordConfig; });
/* harmony import */ var _tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/metadata-handler */ "./src/lib/tools/metadata-handler.js");
/* harmony import */ var _tools_path_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/path-parser */ "./src/lib/tools/path-parser.js");
/**
 * Created by Malte Bjarki Mohrmann <malte.mohrmann@softgames.de> on 2020-09-23.
 * Copyright © Softgames 2020 - present
 */



let config = {};
function isCrossword() {
  return !!Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordFeedSlug');
}
function changeId(currentId) {
  if (!isCrossword()) {
    return currentId;
  }
  const newId = Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('game-slug');
  return newId || currentId;
}
function getCrosswordConfig() {
  if (!isCrossword()) {
    return {};
  }
  if (Object.keys(config).length) {
    return config;
  }
  config = {
    startingDate: getCurrentDate(Object(_tools_path_parser__WEBPACK_IMPORTED_MODULE_1__["getQueryParam"])('date')),
    feedSlug: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordFeedSlug'),
    metaDataServiceBaseUrl: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('metaDataServiceBaseUrl'),
    startingDateFeedUrl: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('feedUrl'),
    s: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordS'),
    customisation: {
      mainUIColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordMainUIColor'),
      selectedSquareHighlightColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordSelectedSquareHighlightColor'),
      buttonBackgroundColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordButtonBackgroundColor'),
      buttonTextColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordButtonTextColor'),
      fontUrl: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordFontUrl'),
      fontFamily: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordFontFamily'),
      scrollBarBackgroundColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordScrollBarBackgroundColor'),
      secondClueColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordSecondClueColor'),
      cellRevealedFontColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordCellRevealedFontColor'),
      cellCorrectFontColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordCellCorrectFontColor'),
      scrollBarHeadColor: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordScrollBarHeadColor'),
      copyright: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordCopyright'),
      disablePrint: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordDisablePrint') === 'true',
      disableCalendar: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordDisableCalendar') === 'true',
      disableHelp: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordDisableHelp') === 'true',
      disableTimer: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordDisableTimer') === 'true',
      disableAutocheck: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordDisableAutocheck') === 'true',
      useGISNameOnWelcomeScreen: Object(_tools_metadata_handler__WEBPACK_IMPORTED_MODULE_0__["getFromMetadata"])('crosswordUseGISNameOnWelcomeScreen') === 'true'
    }
  };
  removeFromMeta();
  return config;
}
function getCurrentDate(date) {
  let now = new Date(date);
  if (!(date instanceof Date && !isNaN(date.valueOf()))) {
    now = new Date();
  }
  const month = now.getMonth() + 1 < 10 ? "0".concat(now.getMonth() + 1) : now.getMonth() + 1;
  const day = now.getDate() < 10 ? "0".concat(now.getDate()) : now.getDate();
  return "".concat(now.getFullYear(), "-").concat(month, "-").concat(day);
}
function removeFromMeta() {
  var _document$querySelect, _document$querySelect2, _document$querySelect3, _document$querySelect4, _document$querySelect5, _document$querySelect6, _document$querySelect7, _document$querySelect8, _document$querySelect9, _document$querySelect10, _document$querySelect11, _document$querySelect12, _document$querySelect13, _document$querySelect14, _document$querySelect15, _document$querySelect16, _document$querySelect17, _document$querySelect18, _document$querySelect19, _document$querySelect20, _document$querySelect21;
  /* eslint-disable no-unused-expressions */
  (_document$querySelect = document.querySelector("[name='metaDataServiceBaseUrl']")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
  (_document$querySelect2 = document.querySelector("[name='feedUrl']")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.remove();
  (_document$querySelect3 = document.querySelector("[name='crosswordMainUIColor']")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.remove();
  (_document$querySelect4 = document.querySelector("[name='crosswordSelectedSquareHighlightColor']")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.remove();
  (_document$querySelect5 = document.querySelector("[name='crosswordS']")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.remove();
  (_document$querySelect6 = document.querySelector("[name='crosswordButtonBackgroundColor']")) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.remove();
  (_document$querySelect7 = document.querySelector("[name='crosswordButtonTextColor']")) === null || _document$querySelect7 === void 0 ? void 0 : _document$querySelect7.remove();
  (_document$querySelect8 = document.querySelector("[name='crosswordFontUrl']")) === null || _document$querySelect8 === void 0 ? void 0 : _document$querySelect8.remove();
  (_document$querySelect9 = document.querySelector("[name='crosswordFontFamily']")) === null || _document$querySelect9 === void 0 ? void 0 : _document$querySelect9.remove();
  (_document$querySelect10 = document.querySelector("[name='crosswordDisablePrint']")) === null || _document$querySelect10 === void 0 ? void 0 : _document$querySelect10.remove();
  (_document$querySelect11 = document.querySelector("[name='crosswordDisableCalendar']")) === null || _document$querySelect11 === void 0 ? void 0 : _document$querySelect11.remove();
  (_document$querySelect12 = document.querySelector("[name='crosswordDisableAutocheck']")) === null || _document$querySelect12 === void 0 ? void 0 : _document$querySelect12.remove();
  (_document$querySelect13 = document.querySelector("[name='crosswordDisableHelp']")) === null || _document$querySelect13 === void 0 ? void 0 : _document$querySelect13.remove();
  (_document$querySelect14 = document.querySelector("[name='crosswordDisableTimer']")) === null || _document$querySelect14 === void 0 ? void 0 : _document$querySelect14.remove();
  (_document$querySelect15 = document.querySelector("[name='crosswordScrollBarBackgroundColor']")) === null || _document$querySelect15 === void 0 ? void 0 : _document$querySelect15.remove();
  (_document$querySelect16 = document.querySelector("[name='crosswordSecondClueColor']")) === null || _document$querySelect16 === void 0 ? void 0 : _document$querySelect16.remove();
  (_document$querySelect17 = document.querySelector("[name='crosswordCellRevealedFontColor']")) === null || _document$querySelect17 === void 0 ? void 0 : _document$querySelect17.remove();
  (_document$querySelect18 = document.querySelector("[name='crosswordCellCorrectFontColor']")) === null || _document$querySelect18 === void 0 ? void 0 : _document$querySelect18.remove();
  (_document$querySelect19 = document.querySelector("[name='crosswordScrollBarHeadColor']")) === null || _document$querySelect19 === void 0 ? void 0 : _document$querySelect19.remove();
  (_document$querySelect20 = document.querySelector("[name='crosswordCopyright']")) === null || _document$querySelect20 === void 0 ? void 0 : _document$querySelect20.remove();
  (_document$querySelect21 = document.querySelector("[name='crosswordUseGISNameOnWelcomeScreen']")) === null || _document$querySelect21 === void 0 ? void 0 : _document$querySelect21.remove();
  /* eslint-enable no-unused-expressions */
}



/***/ }),

/***/ "./src/lib/env-detector.js":
/*!*********************************!*\
  !*** ./src/lib/env-detector.js ***!
  \*********************************/
/*! exports provided: isScriptLoaded, getPlatform, isSoftgames, isSoftgamesOldPlatform, isSandbox, isSoftgamesLegacy, isLocalhost, isTestMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScriptLoaded", function() { return isScriptLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlatform", function() { return getPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSoftgames", function() { return isSoftgames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSoftgamesOldPlatform", function() { return isSoftgamesOldPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSandbox", function() { return isSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSoftgamesLegacy", function() { return isSoftgamesLegacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocalhost", function() { return isLocalhost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTestMode", function() { return isTestMode; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 19.06.17.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');

/* global window */

const platformParam = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.getURLParameter('platform');
const environments = ['softgamesLegacy', 'softgamesOldPlatform', 'sandbox', 'localhost'];
function getPlatformFromUrl() {
  if (platformParam && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(environments, platformParam)) {
    return platformParam;
  }
  return false;
}
function isScriptLoaded(url) {
  const scripts = document.getElementsByTagName('script');
  for (let i = scripts.length; i--;) {
    if (scripts[i].src.indexOf(url) !== -1) return true;
  }
  return false;
}
function oldPlatformMetaTagExists() {
  const metas = document.getElementsByTagName('meta');
  for (let i = metas.length; i--;) {
    if (metas[i].name === 'supported-platform' && metas[i].content === 'p1') return true;
  }
  return false;
}
function getPlatform() {
  const urlPlatform = getPlatformFromUrl();
  if (urlPlatform) {
    return urlPlatform;
  }
  if (isLocalhost()) {
    return 'localhost';
  }
  if (isSoftgamesOldPlatform()) {
    return 'softgamesOldPlatform';
  }
  if (isTestMode() || window.isSgSandbox) {
    return 'sandbox';
  }
  if (isSoftgamesLegacy()) {
    return 'softgamesLegacy';
  }
  return 'softgames';
}
function isSoftgames() {
  return getPlatform() === 'softgames' ? 'isSoftgames' : false;
}
function isSoftgamesOldPlatform() {
  try {
    if (isScriptLoaded('legacy/js/sg-pc.js') || isScriptLoaded('voyager.js') || isScriptLoaded('sg-loader.js') || isScriptLoaded('sg-loader-loader.js') || oldPlatformMetaTagExists()) {
      return 'isSoftgamesOldPlatform';
eturn getPlatformFromUrl() === 'sandbox' ? 'isSandbox' : false;
}
function isSoftgamesLegacy() {
  try {
    const isLegacyEnv = window.gameLangs && window.gameJS;
    if (isLegacyEnv && !window.gameOnLoadScript) {
      console.log('no gameOnLoadScript for this game!!!');
    }
    return isLegacyEnv ? 'isSoftgamesLegacy' : false;
  } catch (err) {
    return false;
  }
}
function isLocalhost() {
  try {
    return document.getElementById('sg-sdk').getAttribute('data-test-mode') === 'local';
  } catch (err) {
    return false;
  }
}
function isTestMode() {
  try {
    return document.getElementById('sg-sdk').getAttribute('data-test-mode') === 'true';
  } catch (err) {
    return false;
  }
}

/***/ }),

/***/ "./src/lib/exceptions.js":
/*!*******************************!*\
  !*** ./src/lib/exceptions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */


const exceptions = {
  BAD_EVENT_NAME: 'Event is not supported',
  BAD_EVENT_HANDLER: 'Event handler must be a function',
  BAD_EVENT_DATA: 'Event data must be an object',
  DATA_VALIDATION_FAILED: 'Data passed to event is not valid',
  DATA_MISSING: 'Data is missing',
  NO_INJECTABLE_OBJECT: 'No injectable object passed (e.g. window)',
  EXECUTION_LIMIT_EXCEEDED: 'Execution limit exceeded for event',
  UNNECESSARY_DATA_PASSED: 'Unnecessary data passed while event triggering',
  UNSUPPORTED_MODULE_DEPENDENCY: 'Unsupported command dependency',
  SDK_NOT_INITIALIZED: "You must initialize the SDK by calling sgSdk.trigger('initialize', { /*OPTIONS*/ })",
  VIRTUAL_GOODS_REQUIRED: 'Items / Boosters require "virtualGood" module to be included',
  UNSUPPORTED_ENVIRONMENT: 'Unsupported environment'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  throw: (exception, optionalMessage) => {
    let exceptionMessage = exception || 'Unknown error';
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(optionalMessage)) {
      exceptionMessage += ": ".concat(optionalMessage);
    }
    throw new Error(exceptionMessage);
  },
  sins: exceptions
});

/***/ }),

/***/ "./src/lib/pcl-messages-handler.js":
/*!*****************************************!*\
  !*** ./src/lib/pcl-messages-handler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMessageHandler; });
/**
 * Created by Heidar on 22.11.17.
 */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][PCL-MESSAGES-HANDLER]: ');
function createMessageHandler(initializationLogic, modules, commands, callback) {
  window.addEventListener('message', event => {
    event = event || {};
    const data = event.data || {};
    if (data.system === 'PCL') {
      switch (data.action) {
        case 'platformReady':
          try {
            initializationLogic(modules, commands, callback);
          } catch (err) {
            console.log('failed to execute initializationLogic', err);
          }
          break;
        case 'pauseGame':
          try {
            commands.freezeGame();
          } catch (err) {
            console.log('failed to execute commands.freezeGame', err);
          }
          break;
        case 'unpauseGame':
          try {
            commands.unfreezeGame();
          } catch (err) {
            console.log('failed to execute commands.unfreezeGame', err);
          }
          break;
        default:
          console.log("unknown action: ".concat(data.action));
          break;
      }
    }
  });
}

/***/ }),

/***/ "./src/lib/polyfill.js":
/*!*****************************!*\
  !*** ./src/lib/polyfill.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Malte Bjarki Mohrmann <malte.mohrmann@softgames.de> on 2020-06-24.
 * Copyright © Softgames 2020 - present
 */

// eslint-disable-next-line
if (!window._babelPolyfill && !undefined) {
  __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
}

/***/ }),

/***/ "./src/lib/tools/aeria-parent-storage.js":
/*!***********************************************!*\
  !*** ./src/lib/tools/aeria-parent-storage.js ***!
  \***********************************************/
/*! exports provided: setParentItem, getParentItem, removeParentItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setParentItem", function() { return setParentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentItem", function() { return getParentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeParentItem", function() { return removeParentItem; });
/**
 * Created by René Simon <rene.simon@softgames.de> on 04.04.18.
 * Copyright © Softgames 2018 - present
 */

/* global window */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][AeriaParentStorage]: ');
async function setParentItem(key, value, gameId) {
  try {
    const store = getStorage(gameId);
    await store.setItem(key, value);
  } catch (error) {
    console.error("Failed to store data for key \"".concat(key, "\""), error);
  }
}
async function getParentItem(key, gameId) {
  try {
    const store = getStorage(gameId);
    return await store.getItem(key);
  } catch (error) {
    console.error("Failed to fetch stored data for key \"".concat(key, "\""), error);
  }
  return null;
}
async function removeParentItem(key, gameId) {
  try {
    const store = getStorage(gameId);
    await store.setItem(key, null);
  } catch (error) {
    console.error("Failed to remove stored data for key \"".concat(key, "\""), error);
  }
  return null;
}
function getStorage(gameId) {
  const {
    parent
  } = window;
  if (!parent) {
    throw new Error('Could not store value in parent, since there was no parent. Probably not in iframe.');
  }
  return {
    getItem: async key => {
      const extendedKey = extendKey(gameId, key);
      return new Promise((resolve, reject) => {
        let responseHandler = null;
        let timeout = null;
        const callback = (error, value) => {
          try {
            if (responseHandler) {
              window.removeEventListener('message', responseHandler);
            }
            if (timeout) {
              clearTimeout(timeout);
              timeout = undefined;
            }
          } catch (callbackError) {
            console.error('Failed to cleanup after data fetch', callbackError);
          }
          if (error) {
            reject(error);
          } else {
            resolve(value);
          }
        };
        try {
          responseHandler = event => {
            const {
              data: {
                system,
                action,
                data
              } = {}
            } = event || {};
            if (system !== 'aeriaExternalHostsConnector' || action !== 'deliverData') {
              return;
            }
            const {
              key: responseKey,
              value
            } = getData(data) || {};
            if (responseKey !== extendedKey) {
              return;
            }
            callback(null, value);
          };
          window.addEven Waiting for data response timed out after 2 seconds")));
          }, 2000);
          parent.postMessage({
            system: 'Softgames',
            action: 'getData',
            env: 'production',
            data: {
              gameId,
              key: extendedKey
            }
          }, '*');
        } catch (error) {
          callback(error);
        }
      });
    },
    setItem: async (key, value) => {
      const extendedKey = extendKey(gameId, key);
      parent.postMessage({
        system: 'Softgames',
        action: 'setData',
        env: 'production',
        data: {
          gameId,
          key: extendedKey,
          value: JSON.stringify({
            key: extendedKey,
            value
          }) // [RS]rn JSON.parse(dataString);
  } catch (error) {
    return null;
  }
}

/***/ }),

/***/ "./src/lib/tools/game-config-handler.js":
/*!**********************************************!*\
  !*** ./src/lib/tools/game-config-handler.js ***!
  \**********************************************/
/*! exports provided: getGameSlug, getPublisherId, isAeria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameSlug", function() { return getGameSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPublisherId", function() { return getPublisherId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAeria", function() { return isAeria; });
/**
 * Created by René Simon <rene.simon@softgames.de> on 2019-09-23.
 * Copyright © Softgames 2019 - present
 */

function getGameSlug(gameConfig) {
  const slug = gameConfig && gameConfig.game && String(gameConfig.game.slug);
  if (!slug) {
    throw new Error('Could not retrieve game slug');
  }
  return slug;
}
function getPublisherId(gameConfig) {
  const id = gameConfig && gameConfig.publisher && Number(gameConfig.publisher.id);
  if (!id) {
   n isAeria(gameConfig) {
  return getPublisherId(gameConfig) === 4217;
}

/***/ }),

/***/ "./src/lib/tools/metadata-handler.js":
/*!*******************************************!*\
  !*** ./src/lib/tools/metadata-handler.js ***!
  \*******************************************/
/*! exports provided: getFromMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromMetadata", function() { return getFromMetadata; });
/**
 * Created by Malte Bjarki Mohrmann <malte.mohrmann@softgames.de> on 2020-09-23.
 * Copyright © Softgames 2020 - present
 */

function getFromMetadata(key) {
  try {
    const meta = document.head.querySelector("[name~=".concat(key, "][content]"));
    if (meta) {
      return meta.content;
    }
    return null;
  } catch (e) {
    return null; // we don't really care
  }
}



/***/ }),

/***/ "./src/lib/tools/path-parser.js":
/*!**************************************!*\
  !*** ./src/lib/tools/path-parser.js ***!
  \**************************************/
/*! exports provided: getQueryParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParam", function() { return getQueryParam; });
let urlParams = [];
function getQueryParam(key) {
  if (urlParams.length) {
    return urlParams[key];
  }
  let match;
  const pl = /\+/g; // Regex for replacing addition symbol with a space
  const search = /([^&=]+)=?([^&]*)/g;
  const decode = s => {
    return decodeURIComponent(s.replace(pl, ' '));
  };
  const query = window.location.search.substring(1);
  urlParams = {};
  while (match) {
    match = search.exec(query);
    urlParams[decode(match[1])] = decode(match[2]);
  }
  return urlParams[key];
}


/***/ }),

/***/ "./src/lib/tools/storage.js":
/*!**********************************!*\
  !*** ./src/lib/tools/storage.js ***!
  \**********************************/
/*! exports provided: setItem, getItem, removeItem, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/**
 * Created by René Simon <rene.simon@softgames.de> on 04.04.18.
 * Copyright © Softgames 2018 - present
 */

/* global window */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][Storage]: ');
function setItem(key, value) {
  try {
    const store = getStorage();
    if (!store) {
      return;
    }
    store.setItem(key, value);
  } catch (error) {
    console.error("Failed to store data for key \"".concat(key, "\""), error);
  }
}
function getItem(key) {
  try {
    const store = getStorage();
    if (!store) {
      return null;
    }
    return store.getItem(key);
  } catch (error) {
    console.error("Failed to fetch stored data for key \"".concat(key, "\""), error);
  }
  return null;
}
function removeItem(key) {
  try {
    const store = getStorage();
    if (!store) {
      return null;
    }
    store.removeItem(key);
  } catch (error) {
    console.error("Failed to remove stored data for key \"".concat(key, "\""), erro= {
  data: ];
  },
  setIt value;
  },
  removeItem: function (key) {
    delete this.data[key];
  }
};
let getLocalStorageFailed = false;
function getStorage() {
  try {
    if (getLocalStorageFailed) return fakeLocalStorage;
    return window.localStorage;
  } catch (err) {
    getLocalStorageFailed = true;
    return fakeLocalStorage;
  }
}
const data = fakeLocalStorage.data;


/***/ }),

/***/ "./src/lib/underscore-extension.js":
/*!*****************************************!*\
  !*** ./src/lib/underscore-extension.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by heidar on 29.06.17.
 * Copyright © Softgames 2017
 */


lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]".concat(name, "=([^&;]+?)(&|#|;|$)")).exec(window.location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  }
});
lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
  toDataURL(src, outputFormat) {
    return new Promise((resolve, reject) => {
      try {
        const {
          Image
        } = window;
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function imageLoadCallback() {
          const canvas = document.createElement('CANVAS');
          const ctx = canvas.getContext('2d');
          canvas.height = this.naturalHeight;
          canvas.width = this.naturalWidth;
          ctx.drawImage(this, 0, 0);
          resolve(canvas.toDataURL(outputFormat));
        };
        img.src = src;
        if (img.complete || img.complete === undefined) {
          img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
          img.src = src;
        }
      } catch (err) {
        reject(err);
      }
    });
  }
});

/***/ }),

/***/ "./src/lib/validator.js":
/*!******************************!*\
  !*** ./src/lib/validator.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exceptions */ "./src/lib/exceptions.js");
/* harmony import */ var _config_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/events */ "./config/events/index.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */




function validateEventName(eventName) {
  if (!eventName || typeof eventName !== 'string') {
    _exceptions__WEBPACK_IMPORTED_MODULE_1__["default"].throw(_exceptions__WEBPACK_IMPORTED_MODULE_1__["default"].sins.BAD_EVENT_NAME, eventName);
  }
  eventName = eventName.indexOf('super.') === 0 ? eventName.replace('super.', '') : eventName;
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(_config_events__WEBPACK_IMPORTED_MODULE_2__["default"]), eventName)) {
    _exceptions__WEBPACK_IMPORTED_MODULE_1__["default"].throw(_exceptions__WEBPACK_IMPORTED_MODULE_1__["default"].sins.BAD_EVENT_NAME, eventName);
  }
}
function validateGoodsDependencies() {}
function validateEventHandler(eventHandler, eventName) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(eventHandler)) {
    _exceptions__WEBPACK_IMPORTED_MODULE_1__["default"].throw(_exceptions__WEBPdateEventName(eventName);
  validateEventHandler(eventHandler, eventName);
}
function isAttrExists(data, key) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(data) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(data[key]);
}
function executeValidators(attr, data, attrName) {
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(attr.validators, validator => {
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(data) || !validator(data[attrName])) {
      _exceptions__WEBPACK_IMPORTED_MODULE_1__["default"].throw(_exceptions__WEBPACK_IMPORTED_MODULE_1__["default"].sins.DATA_VALIDATION_FAILED, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(attr.rule) ? attr.rule() : attr.rule);
    }
  });
}
function validateEventData(data) {
  retteBuildNumber(buildNumber) {
  return /^\d+(\.\d+){2}$/.test(buildNumber);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  validateEventName,
  validateEventHandler,
  validateEvent,
  isAttrExists,
  executeValidators,
  validateEventData,
  validateBuildNumber,
  validateGoodsDependencies
});

/***/ }),

/***/ "./src/listeners/game-analytics.js":
/*!*****************************************!*\
  !*** ./src/listeners/game-analytics.js ***!
  \*****************************************/
/*! exports provided: initializeGameAnalytics, gameAnalyticsListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeGameAnalytics", function() { return initializeGameAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameAnalyticsListener", function() { return gameAnalyticsListener; });
/* harmony import */ var gameanalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gameanalytics */ "./node_modules/gameanalytics/dist/GameAnalytics.node.js");
/* harmony import */ var gameanalytics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gameanalytics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Created by Heidar on 19.05.17.
 * Copyright © Softgames 2017
 */

/**
 * gameanalytics to be moved
 * to Voyager or PageController
 * in the future
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][GAME-ANALYTICS]: ');
function initializeGameAnalytics(gameKey, secretKey, build, userId, resourceCurrencies, resourceItemTypes, customDimensions1, customDimensions2, customDimensions3) {
  try {
    console.log('Initializing GameAnalytics');
    if (userId) {
      gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.configureUserId("user".concat(userId));
    }
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.setEnabledInfoLog(true);
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.setEnabledVerboseLog(true);
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.configureBuild(build);
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.configureAvailableResourceCurrencies(resourceCurrencies);
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.configureAvailableResourceItemTypes(resourceItemTypes);
    if (customDimensions1) {
      gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.configureAvailableCustomDimensions01(customDimensions1);
    }
    if (customDimensions2) {
      gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.configureAvailableCustomDimensions02(customDimensions2);
    }
    if (customDimensions3) {
      gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.configureAvailableCustomDimensions03(customDimensions3);
    }
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.initialize(gameKey, secretKey); // initialize GameAnalytics
    console.log('GameAnalytics initialization Completed');
  } catch (err) {
    console.log('GameAnalytics initialization failed', err);
  }
}
function gameAnalyticsListener(on) {
  try {
    on('gameTracking', data => {
      console.log('gameTracking event has been triggered', data);
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(['Source', 'Sink'], data.event)) {
        handleResourceEvent(data);
      } else if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(['Start', 'Fail', 'Complete'], data.event)) {
        handleProgressionEvent(data);
      } else {
        handleDesignEvent(data);
      }
    });
  } catch (err) {
    console.log('GameAnalytics Listener failed', err);
  }
}
function handleResourceEvent(data) {
  /**
   * addResourceEvent(flowType, currency, amount, itemType, itemId)
   * flowType = (GA.EGAResourceFlowType.Source|GA.EGAResourceFlowType.Sink)
   */

  console.log('gameTracking handleResourceEvent event has been triggered', data);
  try {
    const flowType = data.event === 'Source' ? gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.EGAResourceFlowType.Source : gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.EGAResourceFlowType.Sink;
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.addResourceEvent(flowType, data.dimension1, data.value, data.dimension2, data.dimension3);
  } catch (err) {
    console.log('gameTracking handleResourceEvent failed', err);
  }
}
function handleProgressionEvent(data) {
  /**
   * addProgressionEvent(ProgressionStatus, progression01, progression02, progression03, score)
   * progression02, progression03 & score are not required.
   * ProgressionStatus = (
   *  GA.EGAProgressionStatus.Start |
   *  GA.EGAProgressionStatus.Fail |
   *  GA.EGAProgressionStatus.Complete
   * )
   */

  console.log('gameTracking handleProgressionEvent event has been triggered', data);
  try {
    let progressionStatus;
    if (data.event === 'Start') progressionStatus = gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.EGAProgressionStatus.Start;else if (data.event === 'Fail') progressionStatus = gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.EGAProgressionStatus.Fail;else progressionStatus = gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.EGAProgressionStatus.Complete;
    gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.addProgressionEvent(progressionStatus, data.dimension1, data.dimension2, data.dimension3, data.value);
  } catch (err) {
    console.log('gameTracking handleProgressionEvent failed', err);
  }
}
function handleDesignEvent(data) {
  /**
   * addDesignEvent(eventId, value)
   */

  console.log('gameTracking handleDesignEvent event has been triggered', data);
  try {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isUndefined(data.value)) {
      gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.addDesignEvent(data.dimension1);
    } else {
      gameanalytics__WEBPACK_IMPORTED_MODULE_0___default.a.GameAnalytics.addDesignEvent(data.dimension1, data.value);
    }
  } catch (err) {
    console.log('gameTracking handleDesignEvent failed', err);
  }
}

/***/ }),

/***/ "./src/platforms/localhost/game-config.js":
/*!************************************************!*\
  !*** ./src/platforms/localhost/game-config.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLocalhostGameConfig; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */


function getLocalhostGameConfig() {
  return {
    game: {
      id: 20200320154300,
      slug: 'localhost-test-game'
    },
    publisher: {
      id: 345102300202,
      name: 'localhost-test-partner'
    },
    env: {
      locale: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.getURLParameter('language') || 'en',
      anotherTab: false
    },
    crossPromotion: {
      enabled: false,
      link: null
    },
    moreGames: {
      displayButton: false
    },
    bannerUrl: {
      logo: null
    },
    abTesting: {},
    user: {
      userId: 18091983,
      authToken: 'abcd',
      name: 'John Smith II',
      known: true,
      avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
      validEmail: false
    },
    rewarded: {
      enabled: true
    }
  };
}

/***/ }),

/***/ "./src/platforms/localhost/index.js":
/*!******************************************!*\
  !*** ./src/platforms/localhost/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initLocalhost; });
/* harmony import */ var _game_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-config */ "./src/platforms/localhost/game-config.js");

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');

/* global window */

function initLocalhost(developerData, required, on) {
  return new Promise((resolve, reject) => {
    try {
      console.log('inside localhost/index.js', developerData);
      resolve(Object(_game_config__WEBPACK_IMPORTED_MODULE_0__["default"])());
    } catch (err) {
      reject(err);
    }
  });
}

/***/ }),

/***/ "./src/platforms/sandbox/game-config.js":
/*!**********************************************!*\
  !*** ./src/platforms/sandbox/game-config.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSandboxGameConfig; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */


function getSandboxGameConfig() {
  return {
    game: {
      id: 111222333444555,
      slug: 'sandbox-test-game-2'
    },
    publisher: {
      id: 666444333222111,
      name: 'sandbox-test-partner-2'
    },
    env: {
      locale: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.getURLParameter('language') || 'en',
      anotherTab: false
    },
    crossPromotion: {
      enabled: false,
      link: null
    },
    moreGames: {
      displayButton: false
    },
    bannerUrl: {
      logo: null
    },
    abTesting: {},
    user: {
      userId: 123,
      authToken: 'abc',
      name: 'John Smith',
      known: true,
      avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
      validEmail: false
    },
    rewarded: {
      enabled: true
    }
  };
}

/***/ }),

/***/ "./src/platforms/sandbox/index.js":
/*!****************************************!*\
  !*** ./src/platforms/sandbox/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initSandbox; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-config */ "./src/platforms/sandbox/game-config.js");
/* harmony import */ var _lib_tools_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../lib/tools/storage */ "./src/lib/tools/storage.js");
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');


/* global window */

//const { localStorage = {} } = window;

const localStorage = _lib_tools_storage__WEBPACK_IMPORTED_MODULE_2__["default"];
function receiveMessage(event) {
  try {
    const cmd = event.data;
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(cmd)) {
      return;
    }
    if (cmd === 'get-localstorage-keys') {
      console.log('received get-localstorage-keys');
      const localStorageKeys = Object.keys(_lib_tools_storage__WEBPACK_IMPORTED_MODULE_2__["default"].data);
      sendMessage("".concat(prefix, "localstorageKeys###").concat(window.JSON.stringify(localStorageKeys, null, 4)));
    }
    if (cmd.indexOf('sandbox-trigger-') !== -1) {
      console.info('stored function execution requested', cmd);
      const f = window.sgSdkSandboxFunctions[cmd.split('sandbox-trigger-')[1]];
      if (f && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(f)) {
        const args = [];
        const paramNames = getParamNames(f);
        paramNames.forEach((pName, i) => {
          pName = pName || "arg ".concat(i + 1);
          // eslint-disable-next-line no-alert
          let argVal = window.prompt("Enter ".concat(pName));

          // check if argVal is an object
          try {
            argVal = window.JSON.parse(argVal);
          } catch (err) {
            // silence is golden
          }
          if (!Number.isNaN(argVal)) {
            argVal = Number(argVal);
          }
          args.push(argVal);
        });
        try {
          console.debug(f);
          f(...args);
          window.focus();
        } catch (err) {
          console.error('failed to execute stored function', err);
        }
      }
    }
  } catch (err) {
    // silence is golden
  }
}
function getParamNames(func) {
  const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
  const ARGUMENT_NAMES = /([^\s,]+)/g;
  const fnStr = func.toString().replace(STRIP_COMMENTS, '');
  const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if (result === null) {
    return [];
  }
  return result;
}
function sendMessage(msg) {
  console.info("message is being sent to parent: ".concat(msg));
  window.parent.postMessage(msg, '*' /* ,TODO: add domain restriction */);
}

const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
const evt = window[eventMethod];
const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
const prefix = 'sgSdk-';
evt(messageEvent, receiveMessage, false);
function initSandbox(developerData, required, on) {
  return new Promise((resolve, reject) => {
    try {
      console.log('inside sandbox/index.js', developerData);
      required.requiredEvents.forEach(event => {
        on(event, data => {
          console.info("listened to ".concat(event, " event"), data);
          const stringifiedData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(data);
          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(stringifiedData, (e, k) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(e)) {
              window.sgSdkSandboxFunctions = window.sgSdkSandboxFunctions || {};
              window.sgSdkSandboxFunctions["".concat(k)] = e;
              stringifiedData[k] = e.toString();
            }
          });
          let messageData = stringifiedData;
          let message = "".concat(prefix).concat(event);
          if (event === 'initialize') {
            messageData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.omit(stringifiedData, 'modulesData');
            message = "".concat(prefix).concat(event, "---").concat(data.modules.join(','));
          }
          sendMessage("".concat(message, "###").concat(window.JSON.stringify(messageData, null, 4)));
        });
      });
      resolve(Object(_game_config__WEBPACK_IMPORTED_MODULE_1__["default"])());
    } catch (err) {
      reject(err);
    }
  });
}

/***/ }),

/***/ "./src/platforms/softgames-legacy/index.js":
/*!*************************************************!*\
  !*** ./src/platforms/softgames-legacy/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initSoftgamesLegacy; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./src/platforms/softgames-legacy/lib.js");
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
function initSoftgamesLegacy(developerData, required, on) {
  console.log('initialize softgames legacy');
  return new Promise((resolve, reject) => {
    try {
      developerData.custom = developerData.custom || {};
      if (developerData.custom.gameConfig) {
        // gameConfig already available
        resolve(developerData.custom.gameConfig);
        return;
      }
      console.log('listening to private.platformReady');
      on('private.platformReady', data => {
        console.log('platformReady triggered (sg-sdk side)', data);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(data.config)) {
          resolve(data.config);
        } else {
          reject(new Error('Corrupted game config passed from softgames platform'));
        }
      });
      Object(_lib__WEBPACK_IMPORTED_MODULE_1__["triggerConfigReadyTest"])(); // todo: delete me
    } catch (err) {
      reject(err);
    }
  });
}

/***/ }),

/***/ "./src/platforms/softgames-legacy/lib.js":
/*!***********************************************!*\
  !*** ./src/platforms/softgames-legacy/lib.js ***!
  \***********************************************/
/*! exports provided: loadLegacyGameScripts, getLegacyGameStartFunc, transformGameConfigToLegacy, triggerConfigReadyTest, triggerPlatformReadyTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLegacyGameScripts", function() { return loadLegacyGameScripts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegacyGameStartFunc", function() { return getLegacyGameStartFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformGameConfigToLegacy", function() { return transformGameConfigToLegacy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerConfigReadyTest", function() { return triggerConfigReadyTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerPlatformReadyTest", function() { return triggerPlatformReadyTest; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simple_load_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-load-script */ "./node_modules/simple-load-script/simpleLoadScript.js");
/* harmony import */ var simple_load_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_load_script__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Created by Heidar on 05.07.17.
 * Copyright © Softgames 2017
 */



const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
function loadLegacyGameScripts() {
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(window.gameJS) || !window.gameJS.length) {
    return Promise.resolve();
  }
  let promise = simple_load_script__WEBPACK_IMPORTED_MODULE_1___default()(window.gameJS[0]);
  for (let i = 1; i < window.gameJS.length; ++i) {
    promise = promise.then(() => simple_load_script__WEBPACK_IMPORTED_MODULE_1___default()(window.gameJS[i]));
  }
  return promise;
  // return Promise.all(_.map(window.gameJS, s => loadScript(s)));
}

function getLegacyGameStartFunc() {
  let func = window;
  let funcParent = window;
  let args = [];
  if (!window.gameOnLoadScript) {
    return () => {
      console.log('stub gameOnLoadScript function called');
    };
  }
  const funcPath = window.gameOnLoadScript.replace(/\(\s*\)/, '').replace(/\s/g, '').replace(';', '').split('.');
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(funcPath, e => {
    funcParent = func;
    if (/\(.*\)/.test(e)) {
      const argsString = e.match(/\((.*?)\)/i, '')[1];
      if (argsString) {
        args = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(argsString.split(','), arg => {
          if (/^['"].*['"]$/.test(arg)) {
            return arg.match(/^['"](.*?)['"]$/)[1];
          }
          if (!Number.isNaN(arg)) {
            return Number(arg);
          }
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(['true', 'false'], arg)) {
            return arg === 'true';
          }
          return window[arg]; // if non of the above, check for global existence
        });
      }

      func = func[e.replace(/\(.*\)/, '')];
    } else {
      func = func[e];
    }
  });
  console.log('extracted arguments', args);
  console.log('extracted function', func);
  return func.bind(funcParent, ...args);
}
function transformGameConfigToLegacy(cfg) {
  return window.btoa(window.JSON.stringify(cfg)); // later!
}

function triggerConfigReadyTest() {
  // todo: delete me!
  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.getURLParameter('triggerPlatformEvents') === '1') {
    setTimeout(() => {
      const {
        CustomEvent
      } = window;
      window.dispatchEvent(new CustomEvent('sdkConfigReady', {
        detail: {
          game: {
            id: 123,
            slug: '2020-slug'
          },
          env: {
            locale: 'en',
            anotherTab: false
          },
          crossPromotion: {
            enabled: true,
            link: null
          },
          moreGames: {
            displayButton: true / false
          },
          bannerUrl: {
            logo: 'http://user-to-banner.png'
          },
          abTesting: {},
          user: {
            userId: 156631976,
            externalId: 156631976,
            authToken: 'prykqpRsLiao4gniBpoX',
            name: 'Polly Ester',
            known: true,
            avatar: 'https://pp.userapi.com/c637723/v637723624/219b3/fBIVubd_FmE.jpg',
            validEmail: false,
            extUserId: '407589785'
          },
          rewarded: {
            enabled: true
          }
        }
      }));
    }, 1000);
  }
}
function triggerPlatformReadyTest() {
  // todo: delete me!
  if (lodash__WEBPACK_IMPORTED_MODUL
    setTimeout(() => {
      window.sgSdk.trigger('private.platformReady');
    }, 2000);
  }
}

/***/ }),

/***/ "./src/platforms/softgames-legacy/sg-hooks-middleware.js":
/*!***************************************************************!*\
  !*** ./src/platforms/softgames-legacy/sg-hooks-middleware.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initSgHooksMiddleware; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var merge_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merge-json */ "./node_modules/merge-json/index.js");
/* harmony import */ var merge_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(merge_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var abab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abab */ "./node_modules/abab/index.js");
/* harmony import */ var abab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(abab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_tools_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/tools/storage */ "./src/lib/tools/storage.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib */ "./src/platforms/softgames-legacy/lib.js");
/* harmony import */ var _lib_env_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/env-detector */ "./src/lib/env-detector.js");
/**
 * Created by Heidar on 03.07.17.
 * Copyright © Softgames 2017
 */

/* eslint prefer-rest-params:off */







const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK][LEGACY]: ');
const DEFAULT_LANG = 'en';
let observer;
let pauseGame;
let unpauseGame;
let scoreboardAdFailed;
let orientationHandler;
let resizeHandler;
if (Object(_lib_env_detector__WEBPACK_IMPORTED_MODULE_5__["isSoftgamesLegacy"])()) {
  console.log('injecting mocked SG and softgames objects');
  window.SG_Hooks = window.SG_Hooks || {};
  window.softgames = {};
  window.SG = {
    lang: 'en',
    redirectToPortal: () => {
      console.log('[SG]: redirectToPortal(dummy)');
    }
  };
}
function initializeSdk(initialize) {
  return new Promise((resolve, reject) => {
    try {
      initialize(['ghost'], {
        supportedLanguages: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(window.gameLangs) && window.gameLangs.length ? window.gameLangs : ['en'],
        runGame: () => {
          try {
            console.log('calling observer with action: runGame');
            if (observer) {
              observer({
                action: 'runGame'
              });
            }
          } catch (err) {
            console.log('failed to execute observer with action: runGame', err);
          }
        },
        goToLevel: level => {
          try {
            console.log("calling observer with action: startGame and level: ".concat(level));
            if (observer) {
              observer({
                action: 'startGame',
                data: {
                  level
                }
              });
            }
          } catch (err) {
            console.log("failed to execute observer with action: startGame and level: ".concat(level), err);
          }
        },
        setResize: () => {
          try {
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(resizeHandler)) {
              resizeHandler();
            }
          } catch (err) {
            console.log('failed to execute game resize handler', err);
          }
        },
        setOrientation: () => {
          try {
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(orientationHandler)) {
              orientationHandler();
            }
          } catch (err) {
            console.log('failed to execute game set orientation handler', err);
          }
        },
        freezeGame: () => {
          try {
            console.log('calling observer with action: pauseGame');
            if (observer) {
              observer({
                action: 'pauseGame'
              });
            }
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(pauseGame)) {
              pauseGame();
            }
          } catch (err) {
            console.log('failed to execute game pause handler', err);
          }
        },
        unfreezeGame: () => {
          try {
            console.log('calling observer with action: unpauseGame');
            if (observer) {
              observer({
                action: 'unpauseGame'
              });
            }
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(unpauseGame)) {
              unpauseGame();
            }
          } catch (err) {
            console.log('failed to execute game pause handler', err);
          }
        },
        scoreboardAdFailed: () => {
          try {
            console.log('calling observer with action: scoreboardAdFailed');
            if (observer) {
              observer({
                action: 'scoreboardAdFailed'
              });
            }
            if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(scoreboardAdFailed)) {
              scoreboardAdFailed();
            }
          } catch (err) {
            console.log('failed to execute scoreboard ad failed handler', err);
          }
        }
      }, (err, settings, sdkHandler) => {
        console.log('initialize callback triggered', sdkHandler, settings);
        if (err) {
          reject(err);
          return;
        }
        window.sgCommands = settings.commands; // todo: just for testing, remove later!
        window.sgSdk = sdkHandler; // todo: just for testing, remove later!

        console.log('resolving cfg and sdk');
        resolve({
          sdk: sdkHandler,
          settings
        });
      });
    } catch (err) {
      reject(err);
    }
  });
}
function initSgHooksMiddleware(initialize) {
  window.SG_Hooks.registerObserver = callback => {
    console.log('[HOOK]: registerObserver', arguments);
    observer = callback;
  };
  window.SG_Hooks.setPauseHandler = f => {
    console.log('[HOOK]: setPauseHandler', arguments);
    pauseGame = f;
  };
  window.SG_Hooks.setUnpauseHandler = f => {
    console.log('[HOOK]: setUnpauseHandler', arguments);
    unpauseGame = f;
  };
  window.SG_Hooks.setOrientationHandler = f => {
    console.log('[HOOK]: setOrientationHandler', arguments);
    orientationHandler = f;
  };
  window.SG_Hooks.setResizeHandler = f => {
    console.log('[HOOK]: setResizeHandler', arguments);
    resizeHandler = f;
  };
  window.SG_Hooks.setScoreboardAdFailedHandler = f => {
    console.log('[HOOK]: setScoreboardAdFailedHandler', arguments);
    scoreboardAdFailed = f;
  };
  return initializeSdk(initialize).then(data => {
    const {
      sdk
    } = data;
    const {
      settings
    } = data;
    const gameConfig = settings.config;
    const SG = {
      lang: gameConfig.env.locale,
      redirectToPortal: () => {
        console.log('[SG]: redirectToPortal', arguments);
        sdk.trigger('moreGames');
      }
    };
    window.SG = SG;
    const sgHooks = merge_json__WEBPACK_IMPORTED_MODULE_1___default.a.merge({
      debug: !!window.console,
      PAGE_WELCOME_SCREEN: 'welcome-screen',
      PAGE_MODE_SELECTION: 'mode-selection',
      PAGE_MAIN_MENU: 'main-menu',
      PAGE_READY_FOR_MATCH: 'ready-for-match',
      PAGE_PAUSE: 'pause',
      PAGE_GAME_OVRE: 'game-over',
      PAGE_LEVELS_MAP: 'levels-map',
      PAGE_SHOP: 'shop',
      PAGE_DAILY_GIFT: 'daily-gift',
      OFFER_TYPE_BOOSTER: 'booster',
      OFFER_TYPE_ITEM: 'item',
      OFFER_TYPE_LIFE: 'life',
      skipPlayButton(callback) {
        console.log('[HOOK]: skipPlayButton', arguments);
        sdk.trigger('playButtonSkipped', {
          callback
        });
      },
      beforeIncentivisePlayButtonDisplay(callback) {
        console.log('[HOOK]: beforeIncentivisePlayButtonDisplay', arguments);
        sdk.trigger('beforePlayButtonDisplay', {
          slotKey: 'INCENTIVISE',
          callback
        });
      },
      getLanguage(supportedLanguages) {
        console.log('[HOOK]: getLanguage', arguments);
        const lang = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.getURLParameter('locale') || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.getURLParameter('locale') || DEFAULT_LANG;
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(supportedLanguages) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(supportedLanguages, lang) ? lang : DEFAULT_LANG;
      },
      getGameConfig() {
        console.log('[HOOK]: getGameConfig', arguments);
        return Object(_lib__WEBPACK_IMPORTED_MODULE_4__["transformGameConfigToLegacy"])(gameConfig);
      },
      isEnabledIncentiviseButton() {
        console.log('[HOOK]: isEnabledIncentiviseButton', arguments);
        return gameConfig.rewarded.enabled;
      },
      loaded() {
        // SG.trigger({ type: 'loaded' })
        console.log('[HOOK]: loaded', arguments);
        sdk.trigger('loading.completed');
      },
      start(status) {
        console.log('[HOOK]: start', arguments);
        // sdk.trigger('gameStart')
        // SG.trigger({ type: 'start', status: status })
      },

      readyForMatch() {
        console.log('[HOOK]: readyForMatch', arguments);
        // SG.trigger({ type: 'readyForMatch' })
      },

      levelStarted(level) {
        console.log('[HOOK]: levelStarted', arguments);
        // SG.trigger({ type: 'levelStarted', level: level })
        sdk.trigger('levelStart', {
          level
        });
      },
      levelFinished(level, score, opponentScore, gameRecord) {
        console.log('[HOOK]: levelFinished', arguments);
        sdk.trigger('levelFinish', {
          level,
          score
        });
      },
      tutorialFinished() {
        console.log('[HOOK]: tutorialFinished', arguments);
        // sdk.trigger('tutorialFinish')
      },

      levelUp(level, score, callback) {
        console.log('[HOOK]: levelUp', arguments);
        // SG.trigger({ type: 'levelUp', level: level, lastLevelScore: score }, callback)
        sdk.trigger('levelFinish', {
          state: 'win',
          level,
          score,
          callback
        });
      },
      gameOver(level, score, callback) {
        console.log('[HOOK]: gameOver', arguments);
        // SG.trigger({ type: 'gameOver', score: score, level: level }, callback)
        sdk.trigger('levelFinish', {
          state: 'lose',
          level,
          score,
          callback
        });
      },
      gameCompleted(score, callback) {
        console.log('[HOOK]: gameCompleted', arguments);
        // SG.trigger({ type: 'gameCompleted', score: score }, callback)
      },

      gamePause(state, callback) {
        // state: on|off
        console.log('[HOOK]: gamePause', arguments);
        // SG.trigger({ type: 'gamePause', state: state }, callback)
      },

      gameRestart(callback) {
        console.log('[HOOK]: gameRestart', arguments);
        // SG.trigger({ type: 'gameRestart' }, callback)
      },

      selectMainMenu(callback) {
        console.log('[HOOK]: selectMainMenu', arguments);
        // SG.trigger({ type: 'selectMainMenu' }, callback)
      },

      selectLevel(level, callback) {
        console.log('[HOOK]: selectLevel', arguments);
        // SG.trigger({ type: 'selectLevel', level: level }, callback)
      },

      setSound(state, callback) {
        // state: on|off
        console.log('[HOOK]: setSound', arguments);
        // SG.trigger({ type: 'gameCompleted', state: state }, callback)
      },

      triggerIncentivise(callback) {
        console.log('[HOOK]: triggerIncentivise', arguments);
        sdk.trigger('rewardedAd', {
          callback
        });
        // SG.trigger({ type: 'incentiviseTriggered' }, callback)
      },

      triggerLogin(callback) {
        console.log('[HOOK]: triggerLoginuments);
        sdk.trigger('moreGames');
        // SG.redirectToPortal()
      },

      getLoginButton(options, callback) {
        console.log('[HOOK]: getLoginButton', arguments);
        // return SG.getLoginButton(options, callback)
      },

      isLoginButtonEnabled(callback) {
        console.log('[HOOK]: isLoginButtonEnabled', arguments);
        // SG.isLoginButtonEnabled(callback)
      },

      getHighscoresPerLevel(level, callback) {
        console.log('[HOOK]: getHighscoresPerLevel', arguments);
        SG.getHighscoresPerLevel(level, callback);
      },
      getOffers(section, callback) {
        console.log('[HOOK]: getOffers'[HOOK]: startOffer', arguments);
        SG.startOffer(offerId, callback);
      },
      offerCompleted(offerId, successful) {
        console.log('[HOOK]: offerCompleted', arguments);
        // SG.dispatchEvent(SG.EVENT_OFFER_COMPLETED, { offerId: offerId, successful: successful })
      },

      getUserExperienceLevel() {
        console.log('[HOOK]: getUserExperienceLevel', arguments);
        // return SG.getUserExperienceLevel()
      },

      getIngameCurrency() {
        console.log('[HOOK]: getIngameCurrency', arguments);
        // return SG.getIngameCurrency()
      },

      addIngameCurrency(amount) {
        console.log('[HOOK]: addIngameCurrency', arguments);
        // return SG.addIngameCurrency(amount)
      },

      deductIngameCurrency(amount) {
        console.log('[HOOK]: deductIngameCurrency', arguments);
        // return SG.deductIngameCurrency(amount)
      },

      getUnlockedBoosters() {
        console.log('[HOOK]: getUnlockedBoosters', arguments);
        // return SG.getUnlockedBoosters()
      },

      addBooster(boosterSlug, amount) {
        console.log('[HOOK]: addBooster', arguments);
        // return SG.addBooster(boosterSlug, amount)
      },

      deductBooster(boosterSlug, amount) {
        console.log('[HOOK]: deductBooster', arguments);
        // return SG.deductBooster(boosterSlug, amount)
      },

      getUnlockedItems() {
        console.log('[HOOK]: getUnlockedItems', arguments);
        // return SG.getUnlockedItems()
      },

      addItem(itemSlug, amount) {
        console.log('[HOOK]: addItem', arguments);
        // return SG.addItem(itemSlug, amount)
      },

      deductItem(itemSlug, amount) {
        console.log('[HOOK]: deductItem', arguments);
        // return SG.deductItem(itemSlug, amount)
      },

      getNativeAds(amount, callback) {
        console.log('[HOOK]: getNativeAds', arguments);
        // SG.getNativeAds(amount, callback)
      },

      startNativeAd(adId, callback) {
        console.log('[HOOK]: startNativeAd', arguments);
        // SG.startNativeAd(adId, callback)
      },

      buildKey(key) {
        console.log('[HOOK]: buildKey', arguments);
        try {
          let prefix = gameConfig.game.id;
          if (!prefix) {
            prefix = gameConfig.game.slug;
          }
          return "".concat(prefix, ".").concat(key);
        } catch (err) {
          console.error("could'nt build key", err);
          return key;
        }
      },
      startMultiplayerMode(callback) {
        console.log('[HOOK]: startMultiplayerMode', arguments);
        // SG.switchToMode('multi', callback)
      },

      startSingleplayerMode(callback) {
        console.log('[HOOK]: startSingleplayerMode', arguments);
        // SG.switchToMode('single', callback)
      },

      registerGameDataReceiver(callback) {
        console.log('[HOOK]: registerGameDataReceiver', arguments);
        // SG.registerGameDataReceiver(callback)
      },

      triggerWalkthrough(callback) {
        console.log('[HOOK]: triggerWalkthrough', arguments);
        sdk.trigger('triggerWalkthrough', {
          callback
        });
        // SG.trigger({ type: 'triggerWalktrough' }, callback)
      },

      triggerGift(giftType, callback) {
        console.log('[HOOK]: triggerGift', arguments);
        // console.log(giftType)
        callback();
      },
      triggerDailyTask(callback) {
        console.log('[HOOK]: triggerle.log('[HOOK]: getAmountOfDailyTasksTodo', arguments);
        callback();
      },
      pageDisplayed(page) {
        console.log('[HOOK]: pageDisplayed', arguments);
        // SG.trigger({ type: 'pageDisplayed', page: page })
        sdk.trigger('pageDisplay', {
          pageName: page
        });
      },
      beforePlayButtonDisplay(callback) {
        console.log('[HOOK]: beforePlayButtonDisplay', arguments);
        // SG.dispatchEvent(SG.EVENT_BEFORE_PLAY_BUTTON_DISPLAY, null, callback)
        sdk.trigger('beforePlayButtonDisplay', {
          slotKey: 'IN_GAME',
          callback
        });
      },
      playButtonPressed(callback) {
        console.log('[HOOK]: playButtonPressed', arguments);
        // SG.dispatchEvent(SG.EVENT_PLAY_BUTTON_PRESSED, null, callback)
        sdk.trigger('playButtonPressed', {
          callback
        });
      },
      sendRtmAction() {
        console.log('[HOOK]: sendRtmAction', arguments);
        // SG.dispatchEvent(SG.EVENT_RTM_ACTION, { eventName: eventName, eventData: data })
      },

      track() {
        console.log('[HOOK]: track', arguments);
        // SG.track(eventName, data)
      },

      assignPlayMatchCallback(callback) {
        console.log('[HOOK]: assignPlayMatchCallback', arguments);
        // SG.assignPlayMatchCallback(callback)
      },

      getStorageItem(key) {
        console.log('[HOOK]: getStorageItem', arguments);
        let value = null;
        try {
          value = Object(_lib_tools_storage__WEBPACK_IMPORTED_MODULE_3__["getItem"])(sgHooks.buildKey(key));
        } catch (error) {
          return undefined;
        }
        if (value !== undefined && value !== null) {
          value = Object(abab__WEBPACK_IMPORTED_MODULE_2__["atob"])(value);
        }
        return value;
      },
      getStorageItemAsync(key, callback, noEncoding) {
        try {
          console.log('[HOOK]: getStorageItemAsync', arguments);
n') {
            callback = err => {
              console.log(err);
            };
            throw new Error('callback is not a valid function');
          }
          if (!key || typeof key !== 'string') {
            throw new Error('key is not a valid string');
          }
          let value = Object(_lib_tools_storage__WEBPACK_IMPORTED_MODULE_3__["getItem"])(sgHooks.buildKey(key));
          if (value !== undefined && value !== null && !noEncoding) {
            value = Object(abab__WEBPACK_IMPORTED_MODULE_2__["atob"])(value);
          }
          callback(undefined, value);
        } catch (error) {
          callback(error);
        }
      },
      setStorageItem(key, value) {
        console.log('[HOOK]: setStorageItem', arguments);
        let v = value;
        if (v !== undefined && v !== null) {
          v = Object(abab__WEBPACK_IMPORTED_MODULE_2__["btoa"])(v);
        }
        try {
          Object(_lib_tools_storage__WEBPACK_IMPORTED_MODULE_3__["setItem"])(sgHooks.buildKey(key), v);
          return value;
        } catch (error) {
          return undefined;
        }
      },
      social: {
        getConfig() {
          console.log('[HOOK]: getConfig', arguments);
          // return SG.social.getConfig()
        },

        friends: {
          displayInvite() {
            console.log('[HOOK]: friends', arguments);
          },
          getList(callback) {
            console.log('[HOOK]: getList', arguments);
            // SG.social.friends.getList(callback)
          }
        },

        gameRequests: {
          displayGameRequest(text, params, callback) {
            console.log('[HOOK]: displayGameRequest', arguments);
            // SG.social.gameRequests.displayGameRequest(text, params, callback)
          },

          sendGameRequest(externalUserId, params, callback) {
            console.log('[HOOK]: sendGameRequest', arguments);
            // SG.social.gameRequests.sendGaents);
            // SG.social.gameRequests.registerCallback(callback)
          }
        },

        highscores: {
          sendScore(score, callback) {
            console.log('[HOOK]: sendScore', arguments);
          nts);
            // SG.social.highscores.getList(pa          // SG.social.messages.postOnWall(message, ima', arguments);
            iggerPurchase(itemName, itemDescription, itemSlug, itemPrice, callback)
          }
        }
      },

      setStorageItemAsync(key, value, callback, noEncoding) {
        try {
          console.log('[HOOK]: setStorageItemAsync', arguments);
          if (!callback || typeof callback !== 'function') {
            callback = err => {
              if (err) {
                console.log("failed to store item: ".concat(key), err);
              } else {
                console.log("successfully stored item: ".concat(key));
              }
            };
          }
          if (!key || typeof key !== 'string') {
            throw new Error('key is not a valid string');
          }
          if (!value || typeof value !== 'string') {
            throw new Error('value is not a valid string');
          }
          if (value !== undefined && value !== null && !noEncoding) {
            value = Object(abab__WEBPACK_IMPORTED_MODULE_2__["btoa"])(value);
          }
          callback();
        } catch (error) {
          callback(error);
 }).then(() => Object(_lib__WEBPACK_IMPORTED_MODULE_4__["loadLegacyGameScripts"])()).then(() => {
    Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getLegacyGameStartFunc"])()();
    Object(_lib__WEBPACK_IMPORTED_MODULE_4__["triggerPlatformReadyTest"])();
  });
}

/***/ }),

/***/ "./src/platforms/softgames-old-platform/index.js":
/*!*******************************************************!*\
  !*** ./src/platforms/softgames-old-platform/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */

const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
/* harmony default export */ __webpack_exports__["default"] = ((developerData, required, on) => {
  console.log('initialize softgames old platform');
  return new Promise((resolve, reject) => {
    try {
      if (developerData.custom && developerData.custom.gameConfig) {
        resolve(developerData.custom.gameConfig);
        return;
      }
      console.log('listening to private.configReady...');
      on('private.configReady', data => {
        console.log('private.configReady has been executed');
        resolve(data.config);
      });
    } catch (err) {
      reject(err);
    }
  });
});

/***/ }),

/***/ "./src/platforms/softgames/index.js":
/*!******************************************!*\
  !*** ./src/platforms/softgames/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initSoftgames; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Created by Heidar on 26.06.17.
 * Copyright © Softgames 2017
 */


const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
function initSoftgames(developerData, required, on) {
  console.log('initialize softgames');
  return new Promise((resolve, reject) => {
    try {
      developerData.custom = developerData.custom || {};
      if (developerData.custom.gameConfig) {
        // gameConfig already available
        resolve(developerData.custom.gameConfig);
        return;
      }
      console.log('listening to private.platformReady');
      on('private.platformReady', data => {
        console.log('platformReady triggered (sg-sdk side)', data);
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(data.config)) {
          resolve(data.config);
        } else {
          reject(new Error('Corrupted game config passed from softgames platform'));
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

/***/ }),

/***/ "./src/sg-sdk.js":
/*!***********************!*\
  !*** ./src/sg-sdk.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merge-json */ "./node_modules/merge-json/index.js");
/* harmony import */ var merge_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(merge_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gameanalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gameanalytics */ "./node_modules/gameanalytics/dist/GameAnalytics.node.js");
/* harmony import */ var gameanalytics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gameanalytics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_underscore_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/underscore-extension */ "./src/lib/underscore-extension.js");
/* harmony import */ var _config_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/events */ "./config/events/index.js");
/* harmony import */ var _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/exceptions */ "./src/lib/exceptions.js");
/* harmony import */ var _lib_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/validator */ "./src/lib/validator.js");
/* harmony import */ var _config_events_initialize_commands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/events/initialize/commands */ "./config/events/initialize/commands.js");
/* harmony import */ var _listeners_game_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listeners/game-analytics */ "./src/listeners/game-analytics.js");
/* harmony import */ var _platforms_softgames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./platforms/softgames */ "./src/platforms/softgames/index.js");
/* harmony import */ var _platforms_softgames_legacy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./platforms/softgames-legacy */ "./src/platforms/softgames-legacy/index.js");
/* harmony import */ var _platforms_softgames_legacy_sg_hooks_middleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platforms/softgames-legacy/sg-hooks-middleware */ "./src/platforms/softgames-legacy/sg-hooks-middleware.js");
/* harmony import */ var _platforms_softgames_old_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./platforms/softgames-old-platform */ "./src/platforms/softgames-old-platform/index.js");
/* harmony import */ var _platforms_sandbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./platforms/sandbox */ "./src/platforms/sandbox/index.js");
/* harmony import */ var _platforms_localhost__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./platforms/localhost */ "./src/platforms/localhost/index.js");
/* harmony import */ var _lib_env_detector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/env-detector */ "./src/lib/env-detector.js");
/* harmony import */ var _lib_pcl_messages_handler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/pcl-messages-handler */ "./src/lib/pcl-messages-handler.js");
/* harmony import */ var _lib_crossword_handler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/crossword-handler */ "./src/lib/crossword-handler.js");
/**
 * Created by Heidar on 13/03/2017.
 * Copyright © Softgames 2017
 */

/* global window */




















const initializers = {
  localhost: _platforms_localhost__WEBPACK_IMPORTED_MODULE_15__["default"],
  softgames: _platforms_softgames__WEBPACK_IMPORTED_MODULE_10__["default"],
  softgamesLegacy: _platforms_softgames_legacy__WEBPACK_IMPORTED_MODULE_11__["default"],
  softgamesOldPlatform: _platforms_softgames_old_platform__WEBPACK_IMPORTED_MODULE_13__["default"],
  sandbox: _platforms_sandbox__WEBPACK_IMPORTED_MODULE_14__["default"]
};
const console = __webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js")('[SG-GAME-DEV][SG-SDK]: ');
__webpack_require__(/*! minilog */ "./node_modules/minilog/lib/web/index.js").enable();
const ee = new events__WEBPACK_IMPORTED_MODULE_0___default.a.EventEmitter();
let isInitialized = false;
let ghost = false;
let pageControllerConnected = false;
let developerData = {};
let gameConfig;
const pageControllerConnector = {
  push: connector => {
    try {
      console.log("executing what's being passed to the push function directly...");
      if (pageControllerConnected) {
        console.error('Stop boy :( First come, only serve');
        return;
      }
      pageControllerConnected = true;
      console.log('calling initHandler with sdk controllers...');
    } catch (err) {
      console.error('Hmmmm, I failed while connecting, strange', err);
    }
    try {
      connector({
        on,
        off,
        trigger
      });
    } catch (err) {
      console.error('The connector threw an error. Which indicates the someone else but me fucked up!', err);
    }
  },
  gd: {
    on,
    off,
    trigger
  }
};
console.log("current sdk environment: ".concat(Object(_lib_env_detector__WEBPACK_IMPORTED_MODULE_16__["getPlatform"])()));
if (Object(_lib_env_detector__WEBPACK_IMPORTED_MODULE_16__["getPlatform"])() === 'softgamesLegacy') {
  console.log('softgamesLegacy detected', initialize);
  Object(_platforms_softgamesult"])(pleted');
  }).catch(err => {
    console.log('softgamesLegacy init failed', err);
  });
  console.log('softgames legacy environment detected');
}
function on(eventName, eventHandler) {
  _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].validateEvent(eventName, eventHandler);
  ee.on(eventName, eventHandler);
}
function off(eventName, eventHandler) {
  _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].validateEvent(eventName, eventHandler);
  ee.removeListener(eventName, eventHandler);
}
function getData(obj, key) {
  try {
    return obj[key];
  } catch (err) {
    return undefined;
  }
}
function prepareInitializePrerequisites(data) {
  let requiredCommands;
  let requiredEvents;

  // include items events and commands if items array is provided
  if (data.items) {
    _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules.virtualGoods.commands.push(...['addItem', 'deductItem', 'unlockItem']);
    _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules.virtualGoods.events.push(...['addItem', 'deductItem', 'unlockItem']);
  }

  // include boosters events and commands if boosters array is provided
  if (data.boosters) {
    _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules.virtualGoods.commands.push(...['addBooster', 'deductBooster', 'unlockBooster']);
    _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules.virtualGoods.events.push(...['addBooster', 'deductBooster', 'unlockBooster']);
  }
  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(data.modules, 'ghost')) {
    // ghost can initialize with no commands and is allowed to trigger all events
    ghost = true;
    requiredCommands = [];
    requiredEvents = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.keys(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"]));
  } else {
    _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].executeValidators(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.data.modules, data, 'modules');
    const required = getRequired(data.modules);
    requiredCommands = required.requiredCommands;
    requiredEvents = required.requiredEvents;
  }
  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(requiredCommands, commandName => {
    try {
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNull(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.data[commandName].isMandatory)) {
        _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.data[commandName].isMandatory = true;
      }
    } catch (err) {
      _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.UNSUPPORTED_MODULE_DEPENDENCY, commandName);
    }
  });

  // delete commands validators that are not associated with the selected modules
  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.data, (d, key) => {
    if (d.isMandatory === null) {
      delete _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.data[key];
    }
  });

  // delete events that are not associated with the selected modules
  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"], (e, key) => {
    if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(requiredEvents, key)) {
      delete _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][key];
    }
  });

  // throw error if developer provided items or boosters array without including virtualGoods module
  if ((data.items || data.boosters) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(data.modules, 'virtualGoods')) {
    _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.VIRTUAL_GOODS_REQUIRED);
  }

  // throw exception if there is event set as dependency for the current module(s) and it's not implemented
  const unsupportedEvents = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.difference(requiredEvents, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.keys(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"]));
  if (unsupportedEvents.length) {
    _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.UNSUPPORTED_MODULE_DEPENWEBPACK_IMPORTED_MODULE_1___default.a.map(unsupportedEvents, k => "\"".concat(k, "\"")).join(', '), "]"));
  }
  isInitialized = true;
}
function trigger(eventName, data, context) {
  // validate inputs
  _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].validateEventName(eventName);
  _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].validateEventData(data);
  const isSuper = eventName.indexOf('super.') === 0; // super events can be triggered before initialize (for testing)
  const isPrivate = eventName.indexOf('private.') === 0; // private events are only for the platform/internal systems to trigger

  console.debug('isPrivate', isPrivate);
  if (eventName !== 'initialize' && !isInitialized && !isSuper && !isPrivate) {
    _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.SDK_NOT_INITIALIZED);
  }
  if (isSuper) {
    eventName = eventName.replace('super.', '');
  }

  // save execution time if it's not saved before
  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isUndefined(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].originalExecutionLimit)) {
    _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].originalExecutionLimit = _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimit;
  }

  // throw exception if execution limit exceeded
  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNumber(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimit) && _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimit === 0) {
    _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.EXECUTION_LIMIT_EXCEEDED, eventName);
  }

  // reset execution time if it's configured
  let resetTimer;
  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNumber(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimitResetAfterMs) && !resetTimer) {
    resetTimer = setTimeout(() => {
      _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimit = _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].originalExecutionLimit;
      resetTimer = undefined;
    }, _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimitResetAfterMs);
  }
  if (eventName === 'initialize') {
    prepareInitializePrerequisites(data);
  }

  // validate event data
  if (!ghost) {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isObject(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].data)) {
      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].data, (attr, attrName) => {
        if (attr.isMandatory || _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].isAttrExists(data, attrName)) {
          _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].executeValidators(attr, data, attrName);
        }
      });
      const unnecessaryData = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.difference(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.keys(data), lodash__WEBPACK_IMPORTED_MODULE_1___default.a.keys(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].data));
      if (unnecessaryData.length) {
        _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.UNNECESSARY_DATA_PASSED, "( ".concat(unnecessaryData.join(), " )"));
      }
    } else if (data) {
      _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.UNNECESSARY_DATA_PASSED);
    }
  }
  bindContextToFunctions(data, context);
  preventMultipleCallbackCalls(data, context, eventName);

  // check if event has configured logic
  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].logic)) {
    console.log("Event ".concat(eventName, " has a configured logic. Checking for environment..."));
    _config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].logic.every(l => {
      const currentEnv = l.env();
      if (currentEnv) {
        console.log("Current environment ".concat(currentEnv, " matched configurations. Executing corresponding action..."));
        l.action(data, developerData, gameConfig, on, trigger);
        return false;
      }
      return true;
    });
  }

  // all good, emit the event
  if (eventName === 'initialize') {
    data.modulesData = _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules;
  }
  ee.emit(eventName, data);

  // decrement the execution limit
  if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNumber(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimit) && (eventName !== 'initialize' || !ghost)) {
    --_config_events__WEBPACK_IMPORTED_MODULE_5__["default"][eventName].executionLimit;
  }
}
function bindContextToFunctions() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let context = arguments.length > 1 ? arguments[1] : undefined;
  if (!context) {
    return;
  }
  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(data, (e, k) => {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(e)) {
      data[k] = e.bind(context);
    }
  });
}
function preventMultipleCallbackCalls() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let context = arguments.length > 1 ? arguments[1] : undefined;
  let eventName = arguments.length > 2 ? arguments[2] : undefined;
  try {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(data.callback)) {
      const cb = data.callback.bind(context);
      data.callback = (() => {
        let executed = false;
        return function () {
          if (!executed) {
            executed = true;
            for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
              rest[_key] = arguments[_key];
            }
            console.log("preventMultipleCallbackCalls: Executing event callback for event ".concat(eventName, "..."), rest);
            cb.apply(context, rest);
          } else {
            console.log("preventMultipleCallbackCalls: Multiple callback execution attempt for event ".concat(eventName, ". Preventing..."));
          }
        };
      })();
    }
  } catch (err) {
    console.log("preventMultipleCallbackCalls: Couldn't prevent multiple callback calls for event ".concat(eventName), err);
  }
}
function inject(obj) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isObject(obj)) {
    _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.NO_INJECTABLE_OBJECT);
  }
  obj.sgSdk = {
    initialize,
    pageControllerConnector,
    passGameConfig
  };
}
function getRequired(modules) {
  let requiredCommands = [];
  let requiredEvents = [];
  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(modules, moduleName => {
    if (moduleName === 'ghost') {
      requiredEvents = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.union(requiredEvents, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.keys(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"])));
    } else {
      requiredCommands = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.union(requiredCommands, _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules[moduleName].commands);
      requiredEvents = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.union(requiredEvents, _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules[moduleName].events);
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isArray(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules[moduleName].dependencies)) {
        lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules[moduleName].dependencies, dep => {
          if (_config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules[dep]) {
            requiredCommands = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.union(requiredCommands, _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules[dep].commands);
            requiredEvents = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.union(requiredEvents, _config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules[dep].events);
          }
        });
      }
    }
  });
  return {
    requiredCommands,
    requiredEvents
  };
}
function passGameConfig(config) {
  config.crossword = Object(_lib_crossword_handler__WEBPACK_IMPORTED_MODULE_18__["getCrosswordConfig"])();
  console.log('getGameConfig triggered, triggering private.configReady', config);
  gameConfig = config;
  developerData.custom = developerData.custom || {};
  developerData.custom.gameConfig = config;
  trigger('super.private.configReady', {
    config
  });
}
function initializationLogic(modules, commands, callback) {
  try {
    console.log('start of initialize logic');
    commands.id = Object(_lib_crossword_handler__WEBPACK_IMPORTED_MODULE_18__["changeId"])(commands.id);
    developerData = merge_json__WEBPACK_IMPORTED_MODULE_2___default.a.merge(commands, developerData);
    developerData.modules = modules;
    const platform = Object(_lib_env_detector__WEBPACK_IMPORTED_MODULE_16__["getPlatform"])();
    if (!platform || !initializers[platform]) {
      _lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].throw(_lib_exceptions__WEBPACK_IMPORTED_MODULE_6__["default"].sins.UNSUPPORTED_ENVIRONMENT);
    }
    console.log("initializing environment for platform ".concat(platform));
    initializers[platform](developerData, getRequired(modules), on).then(gc => {
      gameConfig = gc;
      console.log("initializing environment for ".concat(platform, " completed successfully"), {
        gameConfig: gc
      });
      trigger('initialize', developerData);
      return gameConfig;
    }).then(config => {
      const devUserTestInverval = setInterval(() => {
        try {
          if (developerData.id === 'bubble-shooter-hd' && ['1528825020547211', '1771203056277911'].indexOf(config.user.userId) !== -1) {
            console.log('K1 - start creating test-buttons');
            const div = document.createElement('div');
            div.setAttribute('style', "\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t");
            const things = __webpack_require__(/*! ./testing/testingFunctions */ "./src/testing/testingFunctions.js");
            const body = document.getElementsByTagName('body')[0];
            body.appendChild(div);
            lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(things, thing => {
              const button = document.createElement('button');
              button.innerHTML = thing.actionName;
              button.setAttribute('style', "\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\theight: 50px;\n\t\t\t\t\t\t\t\t");
              console.log('test-btn appending');
              button.addEventListener('click', thing.func);
              div.appendChild(button);
            });
          }
          console.log(developerData.id === 'bubble-shooter-hd' && ['1368643399874034'].indexOf(config.user.userId) !== -1);
          clearInterval(devUserTestInverval);
        } catch (err) {
          // silence is golden
        }
      }, 200);
      const gameAnalyticsData = getData(config, 'gameAnalytics');
      const gameKey = getData(gameAnalyticsData, 'key') || developerData.gameAnalyticsKey;
      const secretKey = getData(gameAnalyticsData, 'secret') || developerData.gameAnalyticsSecret;
      const userId = getData(getData(config, 'user'), 'userId');
      const resourceCurrencies = getData(gameAnalyticsData, 'resource_currencies') || developerData.gameAnalyticsResourceCurrencies;
      const resourceItemTypes = getData(gameAnalyticsData, 'resource_item_types') || developerData.gameAnalyticsResourceItemTypes;
      const customDimensions1 = getData(gameAnalyticsData, 'custom_dimensions_1') || developerData.gameAnalyticsCustomDimensions1;
      const customDimensions2 = getData(gameAnalyticsData, 'custom_dimensions_2') || developerData.gameAnalyticsCustomDimensions2;
      const customDimensions3 = getData(gameAnalyticsData, 'custom_dimensions_3') || developerData.gameAnalyticsCustomDimensions3;
      const build = _lib_validator__WEBPACK_IMPORTED_MODULE_7__["default"].validateBuildNumber(developerData.build) ? developerData.build : '1.0.0';
      if (gameKey && secretKey) {
        Object(_listeners_game_analytics__WEBPACK_IMPORTED_MODULE_9__["initializeGameAnalytics"])(gameKey, secretKey, build, userId, resourceCurrencies, resourceItemTypes, customDimensions1, customDimensions2, customDimensions3);
        Object(_listeners_game_analytics__WEBPACK_IMPORTED_MODULE_9__["gameAnalyticsListener"])(on);
      } else {
        console.log('no configuration available for gameAnalytics');
      }
    }).then(() => {
      // triggering initialize callback;
      console.log('all done, triggering initialize callback');
      const sdkCore = {
        on,
        off,
        trigger,
        GA: (gameanalytics__WEBPACK_IMPORTED_MODULE_3___default())
      };
      gameConfig.crossword = Object(_lib_crossword_handler__WEBPACK_IMPORTED_MODULE_18__["getCrosswordConfig"])();
      callback(undefined, {
        commands,
        config: gameConfig
      }, sdkCore);
    }).catch(err => {
      console.log("initializing ".concat(platform, " failed"), err);
      callback(err);
    });
  } catch (err) {
    callback(err);
  }
}
function initialize(modules, commands, callback) {
  try {
    callback = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isFunction(callback) ? callback : function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      console.log('default callback executed', args);
    };
    if (Object(_lib_env_detector__WEBPACK_IMPORTED_MODULE_16__["getPlatform"])() === 'isSoftgamesOldPlatform') {
      Object(_lib_pcl_messages_handler__WEBPACK_IMPORTED_MODULE_17__["default"])(initializationLogic, modules, commands, callback);
    } else {
      initializati);
  }
}
function getEvents(modules) {
  return getRequired(modules).requiredEvents;
}
function getCommands(modules) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(getRequired(modules).requiredCommands, c => {
    if (_config_events_initialize_commands__WEBPACK_IMPORTED_MODULE_8__["default"][c] && _config_events_initialize_commands__WEBPACK_IMPORTED_MODULE_8__["default"][c].eventFollowing) {
      return {
        command: c,
        eventFollowing: _config_events_initialize_commands__WEBPACK_IMPORTED_MODULE_8__["default"][c].eventFollowing
      };
    }
    return {
      command: c
    };
  });
}
function isBasicEvent(event) {
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.includes(_config_events__WEBPACK_IMPORTED_MODULE_5__["default"].initialize.modules.basic.events, event);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getEvents,
  getCommands,
  isBasicEvent,
  inject,
  on,
  off,
  trigger,
  initialize
});

/***/ }),

/***/ "./src/testing/testingFunctions.js":
/*!*****************************************!*\
  !*** ./src/testing/testingFunctions.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by Tibor Helmig on 27.02.18.
 * (c) Tibor Helmig
 */

/* eslint no-console:off */

const leaderboardName = 'K1_test_leaderboard';
module.exports = [{
  // switch game cross promo
  actionName: 'switch game',
  func() {
    const action = 'switch-game';
    console.log("k1 button ".concat(action));
    window.sdkHandler.trigger('switch-game.cross-promo.load', {
      // gameId: 'cookie-crush',
      // gameId: 'cookie-crush-2',
      gameId: '1920856321568946',
      // gameId: '142373822885578',
      // gameId: '1866012530383498',
      callback: (err, ad) => {
        if (err) {
          console.error("K1 - ".concat(action), err);
          return;
        }
        console.log("K1 ".concat(action, "- Alles GEIL ALTER!!"));
      }
    });
  }
}, {
  // load leader board for bubble-shooter-hd
  actionName: 'show my leaderboard entry',
  func() {
    const action = 'leaderboard.facebook.get-me';
    window.sdkHandler.trigger('leaderboard.facebook.get-me', {
      leaderBoardId: leaderboardName,
      callback: (err, leaderboard) => {
        if (err) {
          console.error("K1 - ".concat(action), err);
          return;
        }
        console.log("K1 ".concat(action, "- Alles GEIL ALTER!! leaderboard: ").concat(leaderboard));
      }
    });
  }
}, {
  // load leader board for bubble-shooter-hd
  actionName: 'show full leaderboard entries',
  func() {
    const action = 'leaderboard.facebook.get-board';
    window.sdkHandler.trigger('leaderboard.facebook.get-board', {
      leaderBoardId: leaderboardName,
      // count: 2,
      // offset: 1,
      callback: (err, leaderboard) => {
        if (err) {
          console.error("K1 - ".concat(action), err);
          return;
        }
        console.log("K1 ".concat(action, "- Alles GEIL ALTER!! leaderboard: ").concat(leaderboard));
      }
    });
  }
}, {
  // save leader board entry for bubble-shooter-hd
  actionName: 'save me in leaderboard score 10 lvl 1',
  func() {
    const action = 'leaderboard.facebook.set-score';
    window.sdkHandler.trigger('leaderboard.facebook.set-score', {
      leaderBoardId: leaderboardName,
      score: 10,
      level: 1,
      callback: (err, leaderboard) => {
        if (err) {
          console.error("K1 - ".concat(action), err);
          return;
        }
        console.log("K1 ".concat(action, "- Alles GEIL ALTER!! saved in leaderboard: ").concat(leaderboard));
      }
    });
  }
}, {
  // create shortcut
  actionName: 'create shortcut',
  func() {
    const action = 'social.createShortcut';
    window.sdkHandler.trigger('social.createShortcut', {
      callback: (err, res) => {
        if (err) {
          console.error("K1 - ".concat(action), err);
          return;
        }
        console.log("K1 ".concat(action, "- Alles GEIL ALTER!! createShortcut: ").concat(res));
      }
    });
  }
}, {
  // subscribe bot
  actionName: 'subscribe bot',
  func() {
    const action = 'social.subscribeBot';
    window.sdkHandler.trigger('social.subscribeBot', {
      callback: (err, res) => {
        if (err) {
          console.error("K1 - ".concat(action), err);
          return;
        }
        console.log("K1 ".concat(action, "- Alles GEIL ALTER!! subscribeBot: ").concat(res));
      }
    });
  }
}];

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./srmodule.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=sg-sdk.js.map