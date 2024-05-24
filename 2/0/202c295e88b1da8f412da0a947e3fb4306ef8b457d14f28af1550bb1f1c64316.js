/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/classnames/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/classnames/index.js ***!
  \**********************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

());


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/ShoppingCartButton.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/ShoppingCartButton.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".usc-shopping-cart-btn-container {\n  display: block;\n  position: fixed;\n  top: 33%;\n  right: 0;\n  font-size: 0;\n  z-index: 1000;\n  transition: transform 0.3s ease-in 0s; }\n  .usc-shopping-cart-btn-container--top {\n    top: 8px; }\n  .usc-shopping-cart-btn-container--center {\n    top: calc(50% - 25px); }\n    @media only screen and (min-width: 1200px) {\n      .usc-shopping-cart-btn-container--center {\n        top: calc(50% - 30px); } }\n  .usc-shopping-cart-btn-container.is-hidden {\n    transform: translateX(100%);\n    opacity: 0; }\n  .usc-shopping-cart-btn-container.hide-button {\n    display: none; }\n\n.usc-shopping-cart {\n  padding: 0;\n  margin: 0;\n  font-size: 0;\n  border: 0;\n  outline: 0;\n  background: none;\n  cursor: pointer; }\n  .usc-shopping-cart svg {\n    width: 50px;\n    height: 50px; }\n    @media only screen and (min-width: 1200px) {\n      .usc-shopping-cart svg {\n        width: 60px;\n        height: 60px; } }\n\n.usc-shopping-cart-popover {\n  display: block;\n  position: absolute;\n  left: initial;\n  top: 5px;\n  right: 100%;\n  width: 291px;\n  box-sizing: border-box;\n  margin-right: 0.5rem;\n  transform: translate(-5px, calc(-50% + 20px));\n  z-index: 1060;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.1rem;\n  box-shadow: 4px 4px 7px -4px rgba(0, 0, 0, 0.72); }\n  @media only screen and (max-width: 380px) {\n    .usc-shopping-cart-popover {\n      width: 230px; } }\n  @media only screen and (min-width: 1200px) {\n    .usc-shopping-cart-popover {\n      transform: translate(-5px, calc(-50% + 25px)); } }\n  .usc-shopping-cart-popover .usc-shopping-cart-tooltip-arrow {\n    position: absolute;\n    display: block;\n    right: calc(-0.5rem - 1px);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0;\n    top: calc(50% - 9px); }\n    .usc-shopping-cart-popover .usc-shopping-cart-tooltip-arrow:before, .usc-shopping-cart-popover .usc-shopping-cart-tooltip-arrow:after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-width: 0.5rem 0 0.5rem 0.5rem;\n      border-color: transparent;\n      border-style: solid; }\n    .usc-shopping-cart-popover .usc-shopping-cart-tooltip-arrow:before {\n      right: 0;\n      border-left-color: rgba(0, 0, 0, 0.25); }\n    .usc-shopping-cart-popover .usc-shopping-cart-tooltip-arrow:after {\n      right: 1px;\n      border-left-color: #fff; }\n\n.usc-shopping-cart-popover-title {\n  font-family: \"Gotham Book\", sans-serif;\n  font-size: 18px;\n  line-height: 26px;\n  font-family: var(--usc-font-bold), sans-serif;\n  font-weight: var(--usc-font-weight-bold); }\n\n.usc-shopping-cart-popover-body {\n  padding: 20px;\n  color: #4d4d4d;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.usc-shopping-cart-popover-close-btn {\n  padding: 0;\n  margin: 0;\n  font-size: 0;\n  border: 0;\n  outline: 0;\n  background: none;\n  cursor: pointer; }\n  .usc-shopping-cart-popover-close-btn > span {\n    font-size: 0; }\n  .usc-shopping-cart-popover-close-btn svg {\n    width: 12px;\n    height: 12px; }\n", "",{"version":3,"sources":["webpack://./src/components/shopping-cart/ShoppingCartButton.scss","webpack://./../../node_modules/sass-mediaqueries/_media-queries.scss","webpack://./src/styles/variables.scss"],"names":[],"mappings":"AAgBA;EACI,cAAc;EACd,eAAe;EACf,QAAQ;EACR,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,qCAAqC,EAAA;EAErC;IACI,QAAQ,EAAA;EAGZ;IACI,qBAAqB,EAAA;ICF3B;MDCE;QAIQ,qBAAqB,EAAA,EAE5B;EAnBL;IAsBQ,2BAA2B;IAC3B,UAAU,EAAA;EAvBlB;IA2BQ,aAAa,EAAA;;AAIrB;EAvCI,UAAU;EACV,SAAS;EACT,YAAY;EACZ,SAAS;EACT,UAAU;EACV,gBAAgB;EAoChB,eAAe,EAAA;EAFnB;IAIQ,WAAW;IACX,YAAY,EAAA;ICxBlB;MDmBF;QAOY,WAAW;QACX,YAAY,EAAA,EAEnB;;AAGL;EACI,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,WAAW;EACX,YA9DmC;EAoEnC,sBAAsB;EACtB,oBAAoB;EACpB,6CAA6C;EAI7C,aAAa;EACb,qBAAqB;EACrB,sBE/Ec;EFgFd,4BAA4B;EAC5B,oCEhF4B;EFiF5B,qBAAqB;EACrB,gDEjF6B,EAAA;EDyB/B;IDgCF;MASQ,YAhEmC,EAAA,EA0G1C;ECnFC;IDgCF;MAgBQ,6CAA6C,EAAA,EAmCpD;EAnDD;IA0BQ,kBAAkB;IAClB,cAAc;IACd,0BAA0B;IAC1B,aAAa;IACb,YAAY;IACZ,SAAS;IACT,oBAAoB,EAAA;IAhC5B;MAmCY,kBAAkB;MAClB,cAAc;MACd,WAAW;MACX,oCAAoC;MACpC,yBAAyB;MACzB,mBAAmB,EAAA;IAxC/B;MA2CY,QAAQ;MACR,sCEpGqB,EAAA;IFwDjC;MA+CY,UAAU;MACV,uBE3GM,EAAA;;AFgHlB;EACI,sCAAsC;EACtC,eAAe;EACf,iBAAiB;EACjB,6CAA6C;EAC7C,wCAAwC,EAAA;;AAG5C;EACI,aAAa;EACb,cEnHiB;EFoHjB,aAAa;EACb,mBAAmB;EACnB,8BAA8B,EAAA;;AAGlC;EAzHI,UAAU;EACV,SAAS;EACT,YAAY;EACZ,SAAS;EACT,UAAU;EACV,gBAAgB;EAsHhB,eAAe,EAAA;EAFnB;IAKQ,YAAY,EAAA;EALpB;IASQ,WAvI0C;IAwI1C,YAxI0C,EAAA","sourcesContent":["@import \"../../styles/variables\";\n@import \"../../styles/mixins\";\n\n$usc-shopping-cart-tooltip-close-button-size: 12px;\n$usc-shopping-cart-tooltip-width: 291px;\n$usc-shopping-cart-tooltip-width--sm: 230px;\n\n@mixin reset-btn {\n    padding: 0;\n    margin: 0;\n    font-size: 0;\n    border: 0;\n    outline: 0;\n    background: none;\n}\n\n.usc-shopping-cart-btn-container {\n    display: block;\n    position: fixed;\n    top: 33%;\n    right: 0;\n    font-size: 0;\n    z-index: 1000;\n    transition: transform 0.3s ease-in 0s;\n\n    &--top {\n        top: 8px;\n    }\n\n    &--center {\n        top: calc(50% - 25px);\n\n        @include dt() {\n            top: calc(50% - 30px);\n        }\n    }\n\n    &.is-hidden {\n        transform: translateX(100%);\n        opacity: 0;\n    }\n\n    &.hide-button {\n        display: none;\n    }\n}\n\n.usc-shopping-cart {\n    @include reset-btn;\n    cursor: pointer;\n    svg {\n        width: 50px;\n        height: 50px;\n        @include dt() {\n            width: 60px;\n            height: 60px;\n        }\n    }\n}\n\n.usc-shopping-cart-popover {\n    display: block;\n    position: absolute;\n    left: initial;\n    top: 5px;\n    right: 100%;\n    width: $usc-shopping-cart-tooltip-width;\n\n    @include max-screen(380px) {\n        width: $usc-shopping-cart-tooltip-width--sm;\n    }\n\n    box-sizing: border-box;\n    margin-right: 0.5rem;\n    transform: translate(-5px, calc(-50% + 20px));\n    @include dt() {\n        transform: translate(-5px, calc(-50% + 25px));\n    }\n    z-index: 1060;\n    word-wrap: break-word;\n    background-color: $usc-color-2;\n    background-clip: padding-box;\n    border: 1px solid $usc-color-3;\n    border-radius: 0.1rem;\n    box-shadow: 4px 4px 7px -4px $usc-color-4;\n    .usc-shopping-cart-tooltip-arrow {\n        position: absolute;\n        display: block;\n        right: calc(-0.5rem - 1px);\n        width: 0.5rem;\n        height: 1rem;\n        margin: 0;\n        top: calc(50% - 9px);\n        &:before,\n        &:after {\n            position: absolute;\n            display: block;\n            content: \"\";\n            border-width: 0.5rem 0 0.5rem 0.5rem;\n            border-color: transparent;\n            border-style: solid;\n        }\n        &:before {\n            right: 0;\n            border-left-color: $usc-color-5;\n        }\n        &:after {\n            right: 1px;\n            border-left-color: $usc-color-2;\n        }\n    }\n}\n\n.usc-shopping-cart-popover-title {\n    font-family: \"Gotham Book\", sans-serif;\n    font-size: 18px;\n    line-height: 26px;\n    font-family: var(--usc-font-bold), sans-serif;\n    font-weight: var(--usc-font-weight-bold);\n}\n\n.usc-shopping-cart-popover-body {\n    padding: 20px;\n    color: $usc-color-9;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.usc-shopping-cart-popover-close-btn {\n    @include reset-btn;\n    cursor: pointer;\n\n    & > span {\n        font-size: 0;\n    }\n\n    svg {\n        width: $usc-shopping-cart-tooltip-close-button-size;\n        height: $usc-shopping-cart-tooltip-close-button-size;\n    }\n}\n","//  Author: Rafal Bromirski\n//  www: http://rafalbromirski.com/\n//  github: http://github.com/paranoida/sass-mediaqueries\n//\n//  Licensed under a MIT License\n//\n//  Version:\n//  1.6.1\n\n// --- generator ---------------------------------------------------------------\n\n@mixin mq($args...) {\n  $media-type: 'only screen';\n  $media-type-key: 'media-type';\n  $args: keywords($args);\n  $expr: '';\n\n  @if map-has-key($args, $media-type-key) {\n    $media-type: map-get($args, $media-type-key);\n    $args: map-remove($args, $media-type-key);\n  }\n\n  @each $key, $value in $args {\n    @if $value {\n      $expr: \"#{$expr} and (#{$key}: #{$value})\";\n    }\n  }\n\n  @media #{$media-type} #{$expr} {\n    @content;\n  }\n}\n\n// --- screen ------------------------------------------------------------------\n\n@mixin screen($min, $max, $orientation: false) {\n  @include mq($min-width: $min, $max-width: $max, $orientation: $orientation) {\n    @content;\n  }\n}\n\n@mixin max-screen($max) {\n  @include mq($max-width: $max) {\n    @content;\n  }\n}\n\n@mixin min-screen($min) {\n  @include mq($min-width: $min) {\n    @content;\n  }\n}\n\n@mixin screen-height($min, $max, $orientation: false) {\n  @include mq($min-height: $min, $max-height: $max, $orientation: $orientation) {\n    @content;\n  }\n}\n\n@mixin max-screen-height($max) {\n  @include mq($max-height: $max) {\n    @content;\n  }\n}\n\n@mixin min-screen-height($min) {\n  @include mq($min-height: $min) {\n    @content;\n  }\n}\n\n// --- hdpi --------------------------------------------------------------------\n\n@mixin hdpi($ratio: 1.3) {\n  @media only screen and (-webkit-min-device-pixel-ratio: $ratio),\n  only screen and (min-resolution: #{round($ratio*96)}dpi) {\n    @content;\n  }\n}\n\n// --- hdtv --------------------------------------------------------------------\n\n@mixin hdtv($standard: '1080') {\n  $min-width: false;\n  $min-height: false;\n\n  $standards: ('720p', 1280px, 720px)\n              ('1080', 1920px, 1080px)\n              ('2K', 2048px, 1080px)\n              ('4K', 4096px, 2160px);\n\n  @each $s in $standards {\n    @if $standard == nth($s, 1) {\n      $min-width: nth($s, 2);\n      $min-height: nth($s, 3);\n    }\n  }\n\n  @include mq(\n    $min-device-width: $min-width,\n    $min-device-height: $min-height,\n    $min-width: $min-width,\n    $min-height: $min-height\n  ) {\n    @content;\n  }\n}\n\n// --- iphone4 -----------------------------------------------------------------\n\n@mixin iphone4($orientation: false) {\n  $min: 320px;\n  $max: 480px;\n  $pixel-ratio: 2;\n  $aspect-ratio: '2/3';\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $device-aspect-ratio: $aspect-ratio,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- iphone5 -----------------------------------------------------------------\n\n@mixin iphone5($orientation: false) {\n  $min: 320px;\n  $max: 568px;\n  $pixel-ratio: 2;\n  $aspect-ratio: '40/71';\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $device-aspect-ratio: $aspect-ratio,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- iphone6 -----------------------------------------------------------------\n\n@mixin iphone6($orientation: false) {\n  $min: 375px;\n  $max: 667px;\n  $pixel-ratio: 2;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- iphone6 plus ------------------------------------------------------------\n\n@mixin iphone6-plus($orientation: false) {\n  $min: 414px;\n  $max: 736px;\n  $pixel-ratio: 3;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- ipad (all) --------------------------------------------------------------\n\n@mixin ipad($orientation: false) {\n  $min: 768px;\n  $max: 1024px;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation\n  ) {\n    @content;\n  }\n}\n\n// --- ipad-retina -------------------------------------------------------------\n\n@mixin ipad-retina($orientation: false) {\n  $min: 768px;\n  $max: 1024px;\n  $pixel-ratio: 2;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- orientation -------------------------------------------------------------\n\n@mixin landscape() {\n  @include mq($orientation: landscape) {\n    @content;\n  }\n}\n\n@mixin portrait() {\n  @include mq($orientation: portrait) {\n    @content;\n  }\n}\n","$usc-color-1: #0f0e0e;\n$usc-color-2: #fff;\n$usc-color-3: rgba(0, 0, 0, 0.2);\n$usc-color-4: rgba(0, 0, 0, 0.72);\n$usc-color-5: rgba(0, 0, 0, 0.25);\n$usc-color-6: #212529;\n$usc-color-7: rgba(26, 26, 26, 0.5);\n$usc-color-8: rgba(102, 102, 102, 0.1);\n$usc-color-9: #4d4d4d;\n$usc-color-10: #d95339;\n\n$usc-widget-container-fixed-width: 375px;\n\n$usc-screen-xxs: 350px;\n$usc-screen-xs: 768px;\n$usc-screen-lg: 1200px;\n\n$font: \"Gotham Black\", sans-serif;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/icons/CloseIcon.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/icons/CloseIcon.scss ***!
  \************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".close-icon-st0 {\n  fill: none;\n  stroke: #4d4d4d;\n  stroke-width: 0.5;\n  stroke-miterlimit: 10; }\n\n.close-icon-st1 {\n  fill: none;\n  stroke: #000000;\n  stroke-width: 0.25;\n  stroke-miterlimit: 10; }\n", "",{"version":3,"sources":["webpack://./src/components/shopping-cart/icons/CloseIcon.scss"],"names":[],"mappings":"AAAA;EACI,UAAU;EACV,eAAe;EACf,iBAAiB;EACjB,qBAAqB,EAAA;;AAEzB;EACI,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,qBAAqB,EAAA","sourcesContent":[".close-icon-st0 {\n    fill: none;\n    stroke: #4d4d4d;\n    stroke-width: 0.5;\n    stroke-miterlimit: 10;\n}\n.close-icon-st1 {\n    fill: none;\n    stroke: #000000;\n    stroke-width: 0.25;\n    stroke-miterlimit: 10;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/icons/ShoppingCartIcon.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/icons/ShoppingCartIcon.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".shopping-cart-icon-st0 {\n  fill: #1a1a1a; }\n\n.shopping-cart-icon-st1 {\n  fill: #ff0000; }\n\n.shopping-cart-icon-st2 {\n  fill: #ffffff; }\n\n.shopping-cart-icon-st3 {\n  font-family: var(--usc-font-bold), sans-serif;\n  font-weight: var(--usc-font-weight-bold); }\n\n.shopping-cart-icon-st4 {\n  font-size: 8px;\n  font-weight: bold;\n  text-anchor: middle; }\n", "",{"version":3,"sources":["webpack://./src/components/shopping-cart/icons/ShoppingCartIcon.scss"],"names":[],"mappings":"AAEA;EACI,aAAa,EAAA;;AAEjB;EACI,aAAa,EAAA;;AAEjB;EACI,aAAa,EAAA;;AAGjB;EACI,6CAA6C;EAC7C,wCAAwC,EAAA;;AAG5C;EACI,cAAc;EACd,iBAAiB;EACjB,mBAAmB,EAAA","sourcesContent":["@import \"../../../styles/variables\";\n\n.shopping-cart-icon-st0 {\n    fill: #1a1a1a;\n}\n.shopping-cart-icon-st1 {\n    fill: #ff0000;\n}\n.shopping-cart-icon-st2 {\n    fill: #ffffff;\n}\n\n.shopping-cart-icon-st3 {\n    font-family: var(--usc-font-bold), sans-serif;\n    font-weight: var(--usc-font-weight-bold);\n}\n\n.shopping-cart-icon-st4 {\n    font-size: 8px;\n    font-weight: bold;\n    text-anchor: middle;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-outlet/ShoppingOutlet.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-outlet/ShoppingOutlet.scss ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".usc-outlet {\n  display: block;\n  overflow: hidden;\n  background: white;\n  box-shadow: 0 0 4px 4px rgba(102, 102, 102, 0.1);\n  transition: transform 0.3s ease-in 0s;\n  width: 100%;\n  z-index: var(--usc-outlet-z-index);\n  position: fixed;\n  height: 100%;\n  bottom: 0;\n  right: 0; }\n  .usc-outlet.is-hidden {\n    -ms-transform: translateX(100%) translateX(50px);\n    transform: translateX(calc(100% + 50px));\n    opacity: 0; }\n  @media only screen and (min-width: 375px) {\n    .usc-outlet {\n      width: 375px; } }\n  .usc-outlet .usc-root {\n    height: 100%; }\n    @media only screen and (min-width: 375px) {\n      .usc-outlet .usc-root {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        pointer-events: none; } }\n    .usc-outlet .usc-root_hidden {\n      display: none; }\n    .usc-outlet .usc-root:focus {\n      outline: none; }\n\n.usc-outlet-loader {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 11111; }\n  .usc-outlet-loader .lds-ripple {\n    display: block;\n    position: relative;\n    top: 50%;\n    left: 50%;\n    z-index: 1000;\n    width: 80px;\n    height: 80px;\n    margin-left: -40px;\n    margin-top: -40px; }\n  .usc-outlet-loader .lds-ripple div {\n    position: absolute;\n    border: 4px solid #d95339;\n    opacity: 1;\n    border-radius: 50%;\n    animation: lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n    border-color: var(--usc-button-primary-bg); }\n  .usc-outlet-loader .lds-ripple div:nth-child(2) {\n    animation-delay: -0.5s; }\n\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0; } }\n\n* {\n  box-sizing: border-box; }\n", "",{"version":3,"sources":["webpack://./src/components/shopping-outlet/ShoppingOutlet.scss","webpack://./src/styles/variables.scss","webpack://./../../node_modules/sass-mediaqueries/_media-queries.scss"],"names":[],"mappings":"AAKA;EACI,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,gDCFkC;EDGlC,qCAAqC;EACrC,WAAW;EACX,kCAAkC;EAClC,eAAe;EACf,YAAY;EACZ,SAAS;EACT,QAAQ,EAAA;EAXZ;IAcQ,gDAAgD;IAChD,wCAAwC;IACxC,UAAU,EAAA;EEOhB;IFvBF;MAoBQ,YCdgC,EAAA,EDqCvC;EA3CD;IAwBQ,YAAY,EAAA;IEDlB;MFvBF;QA2BY,eAAe;QACf,MAAM;QACN,QAAQ;QACR,SAAS;QACT,OAAO;QACP,oBAAoB,EAAA,EAU3B;IA1CL;MAoCY,aAAa,EAAA;IApCzB;MAwCY,aAAa,EAAA;;AAKzB;EAEI,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,cAAc,EAAA;EAPlB;IAUQ,cAAc;IACd,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,aAAa;IACb,WA9Dc;IA+Dd,YA/Dc;IAgEd,kBAAkC;IAClC,iBAAiC,EAAA;EAlBzC;IAsBQ,kBAAkB;IAClB,yBChEc;IDiEd,UAAU;IACV,kBAAkB;IAClB,8DAA8D;IAC9D,0CAA0C,EAAA;EA3BlD;IA+BQ,sBAAsB,EAAA;;AAG1B;EACI;IACI,SAAS;IACT,UAAU;IACV,QAAQ;IACR,SAAS;IACT,UAAU,EAAA;EAEd;IACI,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU,EAAA,EAAA;;AAKtB;EACI,sBAAsB,EAAA","sourcesContent":["@import \"../../styles/variables\";\n@import \"../../styles/mixins\";\n\n$usc-loader-size: 80px;\n\n.usc-outlet {\n    display: block;\n    overflow: hidden;\n    background: white;\n    box-shadow: 0 0 4px 4px $usc-color-8;\n    transition: transform 0.3s ease-in 0s;\n    width: 100%;\n    z-index: var(--usc-outlet-z-index);\n    position: fixed;\n    height: 100%;\n    bottom: 0;\n    right: 0;\n\n    &.is-hidden {\n        -ms-transform: translateX(100%) translateX(50px);\n        transform: translateX(calc(100% + 50px));\n        opacity: 0;\n    }\n\n    @include sm() {\n        width: $usc-widget-container-fixed-width;\n    }\n\n    .usc-root {\n        height: 100%;\n\n        @include sm() {\n            position: fixed;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            left: 0;\n            pointer-events: none;\n        }\n\n        &_hidden {\n            display: none;\n        }\n\n        &:focus {\n            outline: none;\n        }\n    }\n}\n\n.usc-outlet-loader {\n    // https://loading.io/css/\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 11111;\n\n    .lds-ripple {\n        display: block;\n        position: relative;\n        top: 50%;\n        left: 50%;\n        z-index: 1000;\n        width: $usc-loader-size;\n        height: $usc-loader-size;\n        margin-left: -$usc-loader-size / 2;\n        margin-top: -$usc-loader-size / 2;\n    }\n\n    .lds-ripple div {\n        position: absolute;\n        border: 4px solid $usc-color-10;\n        opacity: 1;\n        border-radius: 50%;\n        animation: lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n        border-color: var(--usc-button-primary-bg);\n    }\n\n    .lds-ripple div:nth-child(2) {\n        animation-delay: -0.5s;\n    }\n\n    @keyframes lds-ripple {\n        0% {\n            top: 36px;\n            left: 36px;\n            width: 0;\n            height: 0;\n            opacity: 1;\n        }\n        100% {\n            top: 0px;\n            left: 0px;\n            width: 72px;\n            height: 72px;\n            opacity: 0;\n        }\n    }\n}\n\n* {\n    box-sizing: border-box;\n}\n","$usc-color-1: #0f0e0e;\n$usc-color-2: #fff;\n$usc-color-3: rgba(0, 0, 0, 0.2);\n$usc-color-4: rgba(0, 0, 0, 0.72);\n$usc-color-5: rgba(0, 0, 0, 0.25);\n$usc-color-6: #212529;\n$usc-color-7: rgba(26, 26, 26, 0.5);\n$usc-color-8: rgba(102, 102, 102, 0.1);\n$usc-color-9: #4d4d4d;\n$usc-color-10: #d95339;\n\n$usc-widget-container-fixed-width: 375px;\n\n$usc-screen-xxs: 350px;\n$usc-screen-xs: 768px;\n$usc-screen-lg: 1200px;\n\n$font: \"Gotham Black\", sans-serif;\n","//  Author: Rafal Bromirski\n//  www: http://rafalbromirski.com/\n//  github: http://github.com/paranoida/sass-mediaqueries\n//\n//  Licensed under a MIT License\n//\n//  Version:\n//  1.6.1\n\n// --- generator ---------------------------------------------------------------\n\n@mixin mq($args...) {\n  $media-type: 'only screen';\n  $media-type-key: 'media-type';\n  $args: keywords($args);\n  $expr: '';\n\n  @if map-has-key($args, $media-type-key) {\n    $media-type: map-get($args, $media-type-key);\n    $args: map-remove($args, $media-type-key);\n  }\n\n  @each $key, $value in $args {\n    @if $value {\n      $expr: \"#{$expr} and (#{$key}: #{$value})\";\n    }\n  }\n\n  @media #{$media-type} #{$expr} {\n    @content;\n  }\n}\n\n// --- screen ------------------------------------------------------------------\n\n@mixin screen($min, $max, $orientation: false) {\n  @include mq($min-width: $min, $max-width: $max, $orientation: $orientation) {\n    @content;\n  }\n}\n\n@mixin max-screen($max) {\n  @include mq($max-width: $max) {\n    @content;\n  }\n}\n\n@mixin min-screen($min) {\n  @include mq($min-width: $min) {\n    @content;\n  }\n}\n\n@mixin screen-height($min, $max, $orientation: false) {\n  @include mq($min-height: $min, $max-height: $max, $orientation: $orientation) {\n    @content;\n  }\n}\n\n@mixin max-screen-height($max) {\n  @include mq($max-height: $max) {\n    @content;\n  }\n}\n\n@mixin min-screen-height($min) {\n  @include mq($min-height: $min) {\n    @content;\n  }\n}\n\n// --- hdpi --------------------------------------------------------------------\n\n@mixin hdpi($ratio: 1.3) {\n  @media only screen and (-webkit-min-device-pixel-ratio: $ratio),\n  only screen and (min-resolution: #{round($ratio*96)}dpi) {\n    @content;\n  }\n}\n\n// --- hdtv --------------------------------------------------------------------\n\n@mixin hdtv($standard: '1080') {\n  $min-width: false;\n  $min-height: false;\n\n  $standards: ('720p', 1280px, 720px)\n              ('1080', 1920px, 1080px)\n              ('2K', 2048px, 1080px)\n              ('4K', 4096px, 2160px);\n\n  @each $s in $standards {\n    @if $standard == nth($s, 1) {\n      $min-width: nth($s, 2);\n      $min-height: nth($s, 3);\n    }\n  }\n\n  @include mq(\n    $min-device-width: $min-width,\n    $min-device-height: $min-height,\n    $min-width: $min-width,\n    $min-height: $min-height\n  ) {\n    @content;\n  }\n}\n\n// --- iphone4 -----------------------------------------------------------------\n\n@mixin iphone4($orientation: false) {\n  $min: 320px;\n  $max: 480px;\n  $pixel-ratio: 2;\n  $aspect-ratio: '2/3';\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $device-aspect-ratio: $aspect-ratio,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- iphone5 -----------------------------------------------------------------\n\n@mixin iphone5($orientation: false) {\n  $min: 320px;\n  $max: 568px;\n  $pixel-ratio: 2;\n  $aspect-ratio: '40/71';\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $device-aspect-ratio: $aspect-ratio,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- iphone6 -----------------------------------------------------------------\n\n@mixin iphone6($orientation: false) {\n  $min: 375px;\n  $max: 667px;\n  $pixel-ratio: 2;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- iphone6 plus ------------------------------------------------------------\n\n@mixin iphone6-plus($orientation: false) {\n  $min: 414px;\n  $max: 736px;\n  $pixel-ratio: 3;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- ipad (all) --------------------------------------------------------------\n\n@mixin ipad($orientation: false) {\n  $min: 768px;\n  $max: 1024px;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation\n  ) {\n    @content;\n  }\n}\n\n// --- ipad-retina -------------------------------------------------------------\n\n@mixin ipad-retina($orientation: false) {\n  $min: 768px;\n  $max: 1024px;\n  $pixel-ratio: 2;\n\n  @include mq(\n    $min-device-width: $min,\n    $max-device-width: $max,\n    $orientation: $orientation,\n    $-webkit-device-pixel-ratio: $pixel-ratio\n  ) {\n    @content;\n  }\n}\n\n// --- orientation -------------------------------------------------------------\n\n@mixin landscape() {\n  @include mq($orientation: landscape) {\n    @content;\n  }\n}\n\n@mixin portrait() {\n  @include mq($orientation: portrait) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/default.css":
/*!*********************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/default.css ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --usc-button-primary-bg: #d95339;\n  --usc-button-primary-text-active: #ffffff;\n  --usc-button-primary-bg-active: #cc4c32;\n  --usc-button-primary-border-color: #cc4c32;\n  --usc-button-primary-bg-disabled: #b2b2b2;\n  --usc-button-primary-text: #ffffff;\n  --usc-button-primary-text-disabled: #ffffff;\n  --usc-button-secondary-bg: #ffffff;\n  --usc-button-secondary-text-active: #0f0e0e;\n  --usc-button-secondary-bg-active: #ffffff;\n  --usc-button-secondary-border-color: #ffffff;\n  --usc-button-secondary-bg-disabled: #b2b2b2;\n  --usc-button-secondary-text: #0f0e0e;\n  --usc-button-secondary-text-disabled: #ffffff;\n  --usc-button-third-bg: #000000;\n  --usc-button-third-text-active: #ffffff;\n  --usc-button-third-bg-active: #2d2d2d;\n  --usc-button-third-border-color: #2d2d2d;\n  --usc-button-third-bg-disabled: #b2b2b2;\n  --usc-button-third-text: #ffffff;\n  --usc-button-third-text-disabled: #ffffff;\n  --usc-footer-bg: #000000;\n  --usc-footer-text: #ffffff;\n  --usc-loading-bg: #d95339;\n  --usc-font-book: sans-serif;\n  --usc-font-light: sans-serif;\n  --usc-font-bold: sans-serif;\n  --usc-button-font: sans-serif;\n  --usc-button-font-weight: 400;\n  --usc-font-weight-book: 400;\n  --usc-font-weight-light: 100;\n  --usc-font-weight-bold: 600; }\n", "",{"version":3,"sources":["webpack://./src/styles/default.css"],"names":[],"mappings":"AAAA;EACI,gCAAwB;EACxB,yCAAiC;EACjC,uCAA+B;EAC/B,0CAAkC;EAClC,yCAAiC;EACjC,kCAA0B;EAC1B,2CAAmC;EAEnC,kCAA0B;EAC1B,2CAAmC;EACnC,yCAAiC;EACjC,4CAAoC;EACpC,2CAAmC;EACnC,oCAA4B;EAC5B,6CAAqC;EAErC,8BAAsB;EACtB,uCAA+B;EAC/B,qCAA6B;EAC7B,wCAAgC;EAChC,uCAA+B;EAC/B,gCAAwB;EACxB,yCAAiC;EAEjC,wBAAgB;EAChB,0BAAkB;EAElB,yBAAiB;EAEjB,2BAAgB;EAChB,4BAAiB;EACjB,2BAAgB;EAChB,6BAAkB;EAClB,6BAAyB;EAEzB,2BAAuB;EACvB,4BAAwB;EACxB,2BAAuB,EAAA","sourcesContent":[":root {\n    --usc-button-primary-bg: #d95339;\n    --usc-button-primary-text-active: #ffffff;\n    --usc-button-primary-bg-active: #cc4c32;\n    --usc-button-primary-border-color: #cc4c32;\n    --usc-button-primary-bg-disabled: #b2b2b2;\n    --usc-button-primary-text: #ffffff;\n    --usc-button-primary-text-disabled: #ffffff;\n\n    --usc-button-secondary-bg: #ffffff;\n    --usc-button-secondary-text-active: #0f0e0e;\n    --usc-button-secondary-bg-active: #ffffff;\n    --usc-button-secondary-border-color: #ffffff;\n    --usc-button-secondary-bg-disabled: #b2b2b2;\n    --usc-button-secondary-text: #0f0e0e;\n    --usc-button-secondary-text-disabled: #ffffff;\n\n    --usc-button-third-bg: #000000;\n    --usc-button-third-text-active: #ffffff;\n    --usc-button-third-bg-active: #2d2d2d;\n    --usc-button-third-border-color: #2d2d2d;\n    --usc-button-third-bg-disabled: #b2b2b2;\n    --usc-button-third-text: #ffffff;\n    --usc-button-third-text-disabled: #ffffff;\n\n    --usc-footer-bg: #000000;\n    --usc-footer-text: #ffffff;\n\n    --usc-loading-bg: #d95339;\n\n    --usc-font-book: sans-serif;\n    --usc-font-light: sans-serif;\n    --usc-font-bold: sans-serif;\n    --usc-button-font: sans-serif;\n    --usc-button-font-weight: 400;\n\n    --usc-font-weight-book: 400;\n    --usc-font-weight-light: 100;\n    --usc-font-weight-bold: 600;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js!./default.css */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/default.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_default_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".usc-widget-is-shown {\n  width: 100%; }\n  .usc-widget-is-shown img {\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-drag: none;\n    -webkit-user-select: none;\n    -ms-user-select: none; }\n\n@media (max-width: 768px) {\n  .usc-widget-is-shown {\n    position: fixed;\n    overflow: hidden; } }\n", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAKA;EACI,WAAW,EAAA;EADf;IAGQ,iBAAiB;IACjB,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB,EAAA;;AAI7B;EACI;IACI,eAAe;IACf,gBAAgB,EAAA,EACnB","sourcesContent":["@import \"~sass-mediaqueries/media-queries\";\n@import \"variables\";\n@import \"mixins\";\n@import \"default.css\";\n\n.usc-widget-is-shown {\n    width: 100%;\n    img {\n        user-select: none;\n        -moz-user-select: none;\n        -webkit-user-drag: none;\n        -webkit-user-select: none;\n        -ms-user-select: none;\n    }\n}\n\n@media (max-width: $usc-screen-xs) {\n    .usc-widget-is-shown {\n        position: fixed;\n        overflow: hidden;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = 

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";








module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(;
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/object-assign/index.js ***!
  \*************************************************/
/***/ (,

/***/ "../../node_modules/object-hash/dist/object_hash.js":
/*!**********************************************************!*\
  !*** ../../node_modules/object-hash/dist/object_hash.js ***!
  \**********************************************************/
/***/ ((module) => {

!function(e){var t; true?module.exports=e():0}(function(){return function r(o,i,u){function s(n,e){if(!i[n]){if(!o[n]){var t=undefined;if(!e&&t)return require(n,!0);if(a)return a(n,!0);throw new Error("Cannot find module '"+n+"'")}e=i[n]={exports:{}};o[n][0].call(e.exports,e,e.exports,r,o,i,u)}return i[n].exports}for(var a=undefined,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(w,b,m){!function(e,n,s,c,d,h,p,g,y){"use strict";var r=w("crypto");function t(e,t){t=u(e,t);var n;return void 0===(n="passthrough"!==t.algorithm?r.createHash(t.algorithm):new l).write&&(n.write=n.update,n.end=n.update),f(t,n).dispatch(e),n.update||n.end(""),n.digest?n.digest("buffer"===t.encoding?void 0:t.encoding):(e=n.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(m=b.exports=t).sha1=function(e){return t(e)},m.keys=m.MD5=m.keysMD5=var o=r.getHashes?r.getHashes().slice():["sha1","md5"],i=(o.push("passthrough"),["buffer","hex","binary","base64"]);nction f(o,t,i){i=i||[];eturn{dispatch:_object:function(t){var n,e=Object.prototype.toString.call(t),r=/\[object (.*)\]/i.exec(e);r=(r=r?r[1]:"unknown:["+e+"]").toLowerCase();if(0<=(e=i.indexOf(t)))return this.dispatch("[CIRCULAR:"+e+"]");if(i.push(t),void 0!==s&&s.isBuffer&&s.isBuffer(t))return u("buffer:"),u(t);if("object"===r||"function"===r||"asyncfunction"===r)return e=Object.keys(t),o.unorderedObjects&&(e=e.sort()),!1===o.respectType||a(t)||e.splice(0,0,"prototype","__proto__","constructor"),o.excludeKeys&&(e=e.filter(),u("object:"+e.length+":"),n=this,e.forEach(;if(!this["_"+r]){if(o.ignoreUnknown)return u("["+r+"]");throw new Error('Unknown object type "'+r+'"')}this["_"+r](t)},_array:_date:function(e){return u("date:"+e.toJSON())},_symbol:function(e){return u("symbol:"+e.toString())},_error:function(e){return u("error:"+e.toString())},_boolean:function(e){return u("bool:"+e.toString())},_string:_function:_number:function(e){return u("number:"+e.toString())},_xml:function(e){return u("xml:"+e.toString())},_null:function(){return u("Null")},_undefined:function(){return u("Undefined")},_regexp:function(e){return u("regex:"+e.toString())},_uint8array:function(e){return u("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return u("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return u("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return u("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return u("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return u("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return u("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return u("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:_arraybuffer:_url:function(e){return u("url:"+e.toString())},_map:function(e){u("map:");e=Array.from(e);return this._array(e,!1!==o.unorderedSets)},_set:_file:_blob:_domwindow:function(){return u("domwindow")},_bigint:_process:function(){return u("process")},_timer:function(){return u("timer")},_pipe:function(){return u("pipe")},_tcp:function(){return u("tcp")},_udp:function(){return u("udp")},_tty:function(){return u("tty")},_statwatcher:function(){return u("statwatcher")},_securecontext:function(){return u("securecontext")},_connection:function(){return u("connection")},_zlib:function(){return u("zlib")},_context:function(){return u("context")},_nodescript:function(){return u("nodescript")},_httpparser:function(){return u("httpparser")},_dataview:function(){return u("dataview")},_signal:function(){return u("signal")},_fsevent:function(){return u("fsevent")},_tlswrap:}.writeToStream=.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){!void 0===f?this.base64js={}:f)}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(O,e,H){!function(e,n,f,r,h,p,g,y,w){var a=O("base64-js"),i=O("ieee754");on _(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=o(e,t,n,!0),32768&r?-1*(65535-r+1):r}function E(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=u(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function I(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+3<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,23,4)}ction B(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"Trying to write beyond buffer length"),F(t,32767,-32768)),e.length<=n||s(e,0<=t?t:65535+t+1,n,r,o)}unction U(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),D(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||i.write(e,t,n,r,23,4)}.Buffer=f,H.SlowBuffer=f,H.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=),f.isEncoding=f.isBuffer=f.byteLength=f.concat=f.prototype.write=f.prototype.toString=function(e,t,n){var r,o,i,u,s=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):s.length)===t)return"";switch(e){case"hex":r=s,t,n);break;case"utf8":case"utf-8":r=s,t,n);break;case"ascii":case"binary":r=v(s,t,n);break;case"base64":o=s,u=n,r=0===(i=t)&&u===o.length?a.fromByteArray(o):a.fromByteArray(o.slice(i,u));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=s,t,n);break;default:throw new Error("Unknown encoding")}return r},f.prototype.toJSON=f.prototype.copy=f.prototype.slice=f.prototype.get=f.prototype.set=f.prototype.readUInt8=f.prototype.readUInt16LE=function(e,t){return o(this,e,!0,t)},f.prototype.readUInt16BE=function(e,t){return o(this,e,!1,t)},f.prototype.readUInt32LE=function(e,t){return u(this,e,!0,t)},f.prototype.readUInt32BE=function(e,t){return u(this,e,!1,t)},f.prototype.readInt8=f.prototype.readInt16LE=function(e,t){return _(this,e,!0,t)},f.prototype.readInt16BE=function(e,t){return _(this,e,!1,t)},f.prototype.readInt32LE=function(e,t){return E(this,e,!0,t)},f.prototype.readInt32BE=function(e,t){return E(this,e,!1,t)},f.prototype.readFloatLE=function(e,t){return I(this,e,!0,t)},f.prototype.readFloatBE=function(e,t){return I(this,e,!1,t)},f.prototype.readDoubleLE=function(e,t){return A(this,e,!0,t)},f.prototype.readDoubleBE=f.prototype.writeUInt8=f.prototype.writeUInt16LE=function(e,t,n){s(this,e,t,!0,n)},f.prototype.writeUInt16BE=function(e,t,n){s(this,e,t,!1,n)},f.prototype.writeUInt32LE=function(e,t,n){l(this,e,t,!0,n)},f.prototype.writeUInt32BE=function(e,t,n){l(this,e,t,!1,n)},f.prototype.writeInt8=f.prototype.writeInt16LE=function(e,t,n){B(this,e,t,!0,n)},f.prototype.writeInt16BE=function(e,t,n){B(this,e,t,!1,n)},f.prototype.writeInt32LE=function(e,t,n){L(this,e,t,!0,n)},f.prototype.writeInt32BE=function(e,t,n){L(this,e,t,!1,n)},f.prototype.writeFloatLE=function(e,t,n){U(this,e,t,!0,n)},f.prototype.writeFloatBE=function(e,t,n){U(this,e,t,!1,n)},f.prototype.writeDoubleLE=function(e,t,n){x(this,e,t,!0,n)},f.prototype.writeDoubleBE=f.prototype.fill=f.prototype.inspect=f.prototype.toArrayBuffer=var t=f.prototype;call(this,O("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(c,d,e){!function(e,t,a,n,r,o,i,u,s){var a=c("buffer").Buffer,f=4,l=new a(f);l.fill(0);d.exports={hash:}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(v,e,_){!function(l,c,u,d,h,p,g,y,w){var u=v("buffer").Buffer,e=v("./sha"),t=v("./sha256"),n=v("./rng"),b={sha1:e,sha256:t,md5:v("./md5")},s=64,a=new u(s);fill(0),_.createHash=function(e){return r(e)},_.createHmac=r,_.randomBytes=var o,f=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],m=for(o in f)m(f[o],o)}.call(this,v("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},v("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(w,b,e){!function(e,r,o,i,u,a,f,l,y){var t=w("./helpers");on g(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}b.exports=.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,l,t){!call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(c,d,e){!function(e,t,n,r,o,s,a,f,l){var i=c("./helpers");unction m(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}.exports=function(e){return i.hash(e,u,20,!0)}}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(c,d,e){!call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[{buffer:3,lYpoI2:11}],11:[function(e,h,t){!call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)});

/***/ }),

/***/ "../../node_modules/preact/dist/preact.module.js":
/*!*******************************************************!*\
  !*** ../../node_modules/preact/dist/preact.module.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ b),
/* harmony export */   Fragment: () => (/* binding */ g),
/* harmony export */   cloneElement: () => (/* binding */ E),
/* harmony export */   createContext: () => (/* binding */ F),
/* harmony export */   createElement: () => (/* binding */ y),
/* harmony export */   createRef: () => (/* binding */ _),
/* harmony export */   h: () => (/* binding */ y),
/* harmony export */   hydrate: () => (/* binding */ B),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ q),
/* harmony export */   toChildArray: () => (/* binding */ $)
/* harmony export */ });
var n,l,u,t,i,o,r,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;otype.setState=b.prototype.forceUpdate=b.prototype.render=g,i=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=x.__r=0,e=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   jsx: () => (/* binding */ u),
/* harmony export */   jsxAttr: () => (/* binding */ l),
/* harmony export */   jsxDEV: () => (/* binding */ u),
/* harmony export */   jsxEscape: () => (/* binding */ _),
/* harmony export */   jsxTemplate: () => (/* binding */ a),
/* harmony export */   jsxs: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.module.js");
var t=/["&<]/;ar o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,f=0,i=Array.isArray;r c={},p=/[A-Z]/g;/# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/*!*********************************************************!*\
  !*** ../../node_modules/react/cjs/react.development.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
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

var _assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

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
  transition: 0
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

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;

{
  ReactDebugCurrentFrame.setExtraStackFrame =  // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = 
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
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
    }

    var argsWithFormat = args.map(; // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
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
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: 

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
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: };

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
 * @protected
 */

Component.prototype.setState = 
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
 * @protected
 */


Component.prototype.forceUpdate = 
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = 

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */


var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value



function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
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
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
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

  return config.ref !== undefined;
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
    get: warnAboutAccessingKey,
    configurable: true
  });
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
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = 
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
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
 * @return {object} Object containing the ordered map of results.
 */
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */



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
 * @param {*} forEachContext Context for forEachContext.
 */
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


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
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */



function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set:       },
      Consumer: {
        get:       },
      displayName: {
        get: 
        set:       }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set:       }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}


function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
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
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
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
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
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
        set:       });

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
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

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
      ReactCurrentDispatcher$1.current = previousDispatcher;
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
    case exports.Suspense:
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

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;


function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
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


var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}



/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
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
exports.PureComponent = PureComponent;
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
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "../../node_modules/react/index.js":
/*!*****************************************!*\
  !*** ../../node_modules/react/index.js ***!
  \*****************************************/
/***/ (,

/***/ "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ ());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (;

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (;

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ ());

var ResizeObserverEntry = /** @class */ ());

var ResizeObserverSPI = /** @class */ ());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ ());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(;

var index = (();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./src/components/shopping-cart/ShoppingCartButton.scss":
/*!**************************************************************!*\
  !*** ./src/components/shopping-cart/ShoppingCartButton.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingCartButton_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./ShoppingCartButton.scss */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/ShoppingCartButton.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingCartButton_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingCartButton_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/shopping-cart/icons/CloseIcon.scss":
/*!***********************************************************!*\
  !*** ./src/components/shopping-cart/icons/CloseIcon.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CloseIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./CloseIcon.scss */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/icons/CloseIcon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CloseIcon_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CloseIcon_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/shopping-cart/icons/ShoppingCartIcon.scss":
/*!******************************************************************!*\
  !*** ./src/components/shopping-cart/icons/ShoppingCartIcon.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingCartIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ShoppingCartIcon.scss */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-cart/icons/ShoppingCartIcon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingCartIcon_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingCartIcon_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/shopping-outlet/ShoppingOutlet.scss":
/*!************************************************************!*\
  !*** ./src/components/shopping-outlet/ShoppingOutlet.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingOutlet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./ShoppingOutlet.scss */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/shopping-outlet/ShoppingOutlet.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingOutlet_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ShoppingOutlet_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = );

var getTarget = );

var stylesInDom = [];




/* istanbul ignore next  */


var replaceText = );



var singleton = null;
var singletonCounter = 0;


module.exports = 

/***/ }),

/***/ "./src/app/App.tsx":
/*!*************************!*\
  !*** ./src/app/App.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.module.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "../../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var common_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/lib/utils */ "../common/lib/utils/index.js");
/* harmony import */ var common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/lib */ "../common/lib/index.js");
/* harmony import */ var _components_shopping_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shopping-cart */ "./src/components/shopping-cart/index.ts");
/* harmony import */ var _components_shopping_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shopping-outlet */ "./src/components/shopping-outlet/index.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/url */ "./src/utils/url.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state */ "./src/app/state.ts");
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/analytics */ "./src/utils/analytics.ts");
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/storage */ "./src/utils/storage.ts");

// eslint-disable-next-line @typescript-eslint/no-unused-vars












const analyticsEnabled = () => !!window.mParticle;
class App extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        var _a;
        super(props);
        this.iframeProducts = [];
        this.isWirewaxEventListenerAttached = false;
        this.handlePageShow = (event) => {
            if (event.persisted) {
                const persistedState = (0,_state__WEBPACK_IMPORTED_MODULE_10__.getPersistedState)(this.storageKey);
                this.setState(;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.handleGetMessage = (event) => {
            var _a, _b, _c, _d, _e;
            if (!event.data.usc)
                return;
            switch ((_a = event.data.usc) === null || _a === void 0 ? void 0 : _a.type) {
                case _utils_url__WEBPACK_IMPORTED_MODULE_7__.IFRAME_MESSAGE_TYPE.product:
                    if ((0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.isMessageExistKeys)(event.data)) {
                        const adDetails = ((_b = event.data.usc.data) === null || _b === void 0 ? void 0 : _b.adDetails)
                            ? JSON.stringify((_c = event.data.usc.data) === null || _c === void 0 ? void 0 : _c.adDetails)
                            : null;
                        const productKey = event.data.usc.data.product.key;
                        const channelKey = event.data.usc.data.channel.key;
                        const productSku = event.data.usc.data.product.sku;
                        const queryProduct = productSku
                            ? `product-sku=${productSku}`
                            : `product-key=${productKey}`;
                        const newLocation = `${_utils_url__WEBPACK_IMPORTED_MODULE_7__.PDP_LOCATION_HASH_PREFIX}?${queryProduct}&channel-key=${channelKey}`;
                        const hash = adDetails
                            ? `${newLocation}&ad=${window.btoa(adDetails)}`
                            : newLocation;
                        window.history.pushState({}, "", hash);
                        window.dispatchEvent(new HashChangeEvent("hashchange"));
                        (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_3__.saveProductKeyStorage)(productKey);
                        (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_11__.analyticsOnProductClicked)({
                            productKey,
                            channelKey
                        });
                    }
                    else {
                        console.error(`USC: ${_utils_url__WEBPACK_IMPORTED_MODULE_7__.INCOMING_MESSAGE_ERRORS.wrongFormat}`);
                    }
                    break;
                case _utils_url__WEBPACK_IMPORTED_MODULE_7__.IFRAME_MESSAGE_TYPE.listOfProducts:
                    {
                        event.source.postMessage({
                            type: _utils_url__WEBPACK_IMPORTED_MODULE_7__.IFRAME_MESSAGE_TYPE.listOfProducts,
                            message: "Received"
                        }, event.origin);
                        const products = (_d = event.data.usc.data) === null || _d === void 0 ? void 0 : _d.map(;
                        this.iframeProducts = products.length > 0 ? products : [];
                        this.rescan();
                    }
                    break;
                case _utils_url__WEBPACK_IMPORTED_MODULE_7__.IFRAME_MESSAGE_TYPE.shoppableContentLoad:
                    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_12__.setContentDataStorage)(event.data.usc.data.content || {});
                    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_11__.analyticsOnShoppableContentLoad)(event.data.usc.data);
                    break;
                case _utils_url__WEBPACK_IMPORTED_MODULE_7__.IFRAME_MESSAGE_TYPE.pageSegmentName:
                    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_12__.setContentDataStorage)(event.data.usc.data.content || {});
                    break;
                case _utils_url__WEBPACK_IMPORTED_MODULE_7__.IFRAME_MESSAGE_TYPE.ccwShoppableContentLoaded: {
                    const { getDefaultContentData, networkBrand } = this.props;
                    (0,_utils_storage__WEBPACK_IMPORTED_MODULE_12__.setContentDataStorage)(event.data.usc.data.content || {});
                    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_11__.analyticsOnShoppableContentLoad)(event.data.usc.data);
                    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_11__.rescanUSCAnalytics)(getDefaultContentData, networkBrand);
                    this.rescan();
                    break;
                }
                default:
                    console.error(`USC: Unknown message type: ${(_e = event.data.usc) === null || _e === void 0 ? void 0 : _e.type}. Please use available types:`, Object.values(_utils_url__WEBPACK_IMPORTED_MODULE_7__.IFRAME_MESSAGE_TYPE).join(", "));
            }
        };
        this.openProductDetailsPage = (event) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const elem = event.target.closest(`[data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.PRODUCT_KEY_ATTRIBUTE}][data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.CHANNEL_KEY_ATTRIBUTE}], [data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.PRODUCT_SKU_ATTRIBUTE}][data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.CHANNEL_KEY_ATTRIBUTE}]`);
            const targetElement = event.target;
            const isSuppressWidgetOpening = ((_a = targetElement.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.SUPPRESS_WIDGET_OPENING}`)) === null || _a === void 0 ? void 0 : _a.value) === "true" ||
                ((_c = (_b = targetElement
                    .closest(`[data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.SUPPRESS_WIDGET_OPENING}]`)) === null || _b === void 0 ? void 0 : _b.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.SUPPRESS_WIDGET_OPENING}`)) === null || _c === void 0 ? void 0 : _c.value) === "true";
            if (isSuppressWidgetOpening) {
                return;
            }
            if (elem) {
                if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.checkIsAnchorTagWithPdpPrefix)(elem)) {
                    return;
                }
                const productKey = ((_d = elem.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.PRODUCT_KEY_ATTRIBUTE}`)) === null || _d === void 0 ? void 0 : _d.value) || "";
                const channelKey = ((_e = elem.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.CHANNEL_KEY_ATTRIBUTE}`)) === null || _e === void 0 ? void 0 : _e.value) || "";
                const productSku = ((_f = elem.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.PRODUCT_SKU_ATTRIBUTE}`)) === null || _f === void 0 ? void 0 : _f.value) || "";
                const merchandisedData = ((_g = elem.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.PRODUCT_MERCHANDISE_ATTRIBUTES}`)) === null || _g === void 0 ? void 0 : _g.value) || "";
                const suppressWidgetOpening = ((_h = elem.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.SUPPRESS_WIDGET_OPENING}`)) === null || _h === void 0 ? void 0 : _h.value) || "";
                const customAttributes = ((_j = elem.attributes.getNamedItem(`data-${_utils_dom__WEBPACK_IMPORTED_MODULE_8__.ANALYTICS_CUSTOM_ATTRIBUTES}`)) === null || _j === void 0 ? void 0 : _j.value) || "";
                if (suppressWidgetOpening === "true") {
                    return;
                }
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.ProductDetails, {
                        productKey,
                        channelKey,
                        productSku,
                        customAttributes,
                        merchandisedData
                    });
                });
            }
        };
        this.onChangeAllShopableLinks = () => {
            if (!this.replaceTargetValue)
                return;
            const shopableLinks = [
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ...document.querySelectorAll(`[href*='${_utils_url__WEBPACK_IMPORTED_MODULE_7__.USC_PREFIX}']`)
            ];
            shopableLinks.forEach(link => {
                const href = link.href.split(_utils_url__WEBPACK_IMPORTED_MODULE_7__.USC_PREFIX)[1];
                // eslint-disable-next-line no-param-reassign
                link.href = `${_utils_url__WEBPACK_IMPORTED_MODULE_7__.USC_PREFIX}${href}`;
                if (link.target === "_blank") {
                    // eslint-disable-next-line no-param-reassign
                    link.target = "_self";
                }
            });
        };
        this.onLocationHashChange = () => {
            var _a;
            (_a = window.usc) === null || _a === void 0 ? void 0 : _a.setPageProducts((0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.getShoppableProducts)(this.iframeProducts));
            if (window.location.hash === _utils_url__WEBPACK_IMPORTED_MODULE_7__.ORDER_LOOKUP_LOCATION_HASH) {
                this.setState({
                    isShoppingCartHidden: true,
                    isHideButton: true
                });
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.OrderLookup);
                });
            }
            else if (window.location.hash === _utils_url__WEBPACK_IMPORTED_MODULE_7__.START_A_RETURN_LOCATION_HASH) {
                this.setState({
                    isShoppingCartHidden: true,
                    isHideButton: true
                });
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.StartReturn);
                });
            }
            else if (window.location.hash.includes(_utils_url__WEBPACK_IMPORTED_MODULE_7__.ORDER_HISTORY_LOCATION_HASH_PREFIX)) {
                this.setState({
                    isShoppingCartHidden: true,
                    isHideButton: true
                });
                const magicLinkHash = window.location.hash.split("=")[1];
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.OrderHistory, {
                        magicLinkHash
                    });
                });
            }
            else if (window.location.hash.includes(_utils_url__WEBPACK_IMPORTED_MODULE_7__.PDP_LOCATION_HASH_PREFIX)) {
                // fix CC-7121 Meta URL Issue
                const decodedHash = decodeURIComponent(window.location.hash.replace(/\+/g, " "));
                const queryString = decodedHash.split(`${_utils_url__WEBPACK_IMPORTED_MODULE_7__.PDP_LOCATION_HASH_PREFIX}?`)[1];
                const params = (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.parseQuery)(queryString);
                const productKey = params["product-key"];
                const channelKey = params["channel-key"];
                const productSku = params["product-sku"];
                const adDetails = params.ad ? window.atob(params.ad) : null;
                if ((!productSku && !productKey) || !channelKey)
                    return;
                this.setState({ isShoppingCartHidden: true });
                this.shoppingOutlet.renderOutlet(() => {
                    if (analyticsEnabled() && adDetails) {
                        const persistedState = (0,_state__WEBPACK_IMPORTED_MODULE_10__.getPersistedState)(this.storageKey);
                        const adDetailsParsed = JSON.parse(adDetails);
                        if (persistedState.adConfig) {
                            persistedState.adConfig[productKey] = adDetailsParsed;
                        }
                        else {
                            persistedState.adConfig = {
                                [productKey]: adDetailsParsed
                            };
                        }
                        (0,_state__WEBPACK_IMPORTED_MODULE_10__.savePersistedState)(this.storageKey, persistedState);
                    }
                    window.usc.openTab(window.usc.tab.ProductDetails, {
                        productKey,
                        channelKey,
                        productSku
                    });
                });
            }
            else if (window.location.hash.includes(_utils_url__WEBPACK_IMPORTED_MODULE_7__.CART_LOCATION_HASH_PREFIX)) {
                const { lang, networkBrand } = this.props;
                const queryString = window.location.search ||
                    window.location.hash.split(`${_utils_url__WEBPACK_IMPORTED_MODULE_7__.CART_LOCATION_HASH_PREFIX}?`)[1];
                const params = (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.parseQuery)(queryString);
                const qs = params.cart;
                const { cartId } = params;
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.Cart, {
                        qs,
                        cartId,
                        locale: lang,
                        networkBrand
                    });
                });
            }
            else if (window.location.hash.includes(_utils_url__WEBPACK_IMPORTED_MODULE_7__.AMAZON_CHECKOUT_HASH_PREFIX)) {
                const { lang, networkBrand } = this.props;
                const queryString = window.location.hash.split(`${_utils_url__WEBPACK_IMPORTED_MODULE_7__.AMAZON_CHECKOUT_HASH_PREFIX}?`)[1];
                const params = (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.parseQuery)(queryString);
                const { qs } = params;
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.ThankYou, {
                        qs,
                        locale: lang,
                        networkBrand
                    });
                });
                window.history.replaceState(null, "", window.location.pathname +
                    window.location.search
                        .replace(_utils_url__WEBPACK_IMPORTED_MODULE_7__.AMAZON_CHECKOUT_REGEXP, "")
                        .replace(/^&/, "?"));
            }
            else if (window.location.search.includes(_utils_url__WEBPACK_IMPORTED_MODULE_7__.AMAZON_CHECKOUT_SESSION_ID_QUERY_PARAM)) {
                const queryString = window.location.search;
                const params = (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.parseQuery)(queryString);
                const amazonCheckoutSessionId = params[_utils_url__WEBPACK_IMPORTED_MODULE_7__.AMAZON_CHECKOUT_SESSION_ID_QUERY_PARAM];
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.Checkout, {
                        amazonCheckoutSessionId
                    });
                });
                window.history.replaceState(null, "", window.location.pathname +
                    window.location.search
                        .replace(_utils_url__WEBPACK_IMPORTED_MODULE_7__.AMAZON_CHECKOUT_REGEXP, "")
                        .replace(/^&/, "?"));
            }
            else if (window.location.hash.includes(_utils_url__WEBPACK_IMPORTED_MODULE_7__.SHOP_ALL_HASH_PREFIX)) {
                this.shoppingOutlet.renderOutlet(;
            }
            else {
                this.setIsShoppingCartHidden();
                this.shoppingOutlet.hideUSCWidget();
            }
        };
        this.handleWaxVidTagClick = (e) => {
            if (e.data.tagData.customNameRef) {
                const customRefParams = (0,_utils_url__WEBPACK_IMPORTED_MODULE_7__.parseQuery)(e.data.tagData.customNameRef);
                const productKey = customRefParams["product-key"];
                const channelKey = customRefParams["channel-key"];
                const productSku = customRefParams["product-sku"];
                if ((productKey || productSku) && channelKey) {
                    this.shoppingOutlet.renderOutlet(() => {
                        window.usc.openTab(window.usc.tab.ProductDetails, {
                            productKey,
                            channelKey,
                            productSku
                        });
                    });
                }
            }
        };
        this.hideShoppingButton = 
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.openWidget = productParams => {
            this.setState({
                isShoppingCartHidden: false
            });
            const isProductParamsExist = productParams && Object.keys(productParams).length > 0;
            if (isProductParamsExist) {
                this.shoppingOutlet.renderOutlet(() => {
                    window.usc.openTab(window.usc.tab.ProductDetails, Object.assign({}, productParams));
                });
            }
            else {
                console.log('USC openWidget: please set valid param in ".open() method"');
            }
        };
        this.storageKey = `persist:usc-bootstrap-state-${"public"}-${props.networkBrand}`;
        const storedState = (0,_state__WEBPACK_IMPORTED_MODULE_10__.getPersistedState)(this.storageKey);
        this.state = {
            cartAmount: (_a = storedState.cartAmount) !== null && _a !== void 0 ? _a : 0,
            isShoppingCartHidden: true,
            isHideButton: false
        };
        this.replaceTargetValue = props.replaceTargetValue;
    }
    componentDidMount() {
        this.rescan();
        window.addEventListener("click", this.openProductDetailsPage, true);
        window.addEventListener("hashchange", this.onLocationHashChange, false);
        window.addEventListener("message", this.handleGetMessage, false);
        window.addEventListener("pageshow", this.handlePageShow);
        this.handleResizeWindow();
        this.onLocationHashChange();
        const watch = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"](() => this.handleResizeWindow());
        watch.observe(document.body);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentDidUpdate(_, prevState) {
        const { cartAmount } = this.state;
        if (prevState.cartAmount === cartAmount)
            return;
        const storedState = (0,_state__WEBPACK_IMPORTED_MODULE_10__.getPersistedState)(this.storageKey);
        this.setState({ cartAmount: storedState.cartAmount });
        this.setIsShoppingCartHidden();
    }
    componentWillUnmount() {
        window.removeEventListener("click", this.openProductDetailsPage);
        window.removeEventListener("hashchange", this.onLocationHashChange);
        window.removeEventListener("message", this.handleGetMessage, false);
        window.removeEventListener("pageshow", this.handlePageShow);
    }
    handleResizeWindow() {
        if (this.resizeTimeout)
            return;
        this.resizeTimeout = setTimeout( 1000);
    }
    setIsShoppingCartHidden() {
        const { cartAmount } = this.state;
        this.setState({
            isShoppingCartHidden: !((0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.hasShoppableElements)(this.iframeProducts) || cartAmount)
        });
    }
    rescan() {
        var _a;
        this.setIsShoppingCartHidden();
        (_a = window.usc) === null || _a === void 0 ? void 0 : _a.setPageProducts((0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.getShoppableProducts)(this.iframeProducts));
        if (window.wirewax) {
            this.attachWirewaxListener();
        }
        else if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.hasWirewaxVideo)()) {
            const script = document.createElement("script");
            script.src =
                "//ww4player.s3.amazonaws.com/ww4release/javascripts/wirewax-iframe-api.js";
            script.onload = () => {
                this.attachWirewaxListener();
            };
            document.body.appendChild(script);
        }
    }
    openShoppingCart() {
        const { cartAmount } = this.state;
        this.hideShoppingButton(true);
        this.shoppingOutlet.renderOutlet(() => {
            if (cartAmount) {
                window.usc.openTab(window.usc.tab.Cart);
            }
            else {
                window.usc.openTab(window.usc.tab.ShopAll);
            }
        });
    }
    attachWirewaxListener() {
        // wirewax doesn't have removeEventListener (https://wirewax.github.io/docs/#/)
        if (!this.isWirewaxEventListenerAttached) {
            window.wirewax.addEventListener(window.wirewax.events.listeners.TAG_CLICK, this.handleWaxVidTagClick);
            this.isWirewaxEventListenerAttached = true;
        }
    }
    render() {
        const { lang, theme, networkBrand, tooltipEnabled, popoverRenewalTimeAmount, popoverRenewalTimeUnit, placement } = this.props;
        const { cartAmount, isShoppingCartHidden, isHideButton } = this.state;
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shopping_outlet__WEBPACK_IMPORTED_MODULE_6__["default"], { ref:  lang: lang, theme: theme, networkBrand: networkBrand, iframeProducts: this.iframeProducts, hideShoppingButton: this.hideShoppingButton, onCartAmountChange: amount => {
                        const perstistedState = (0,_state__WEBPACK_IMPORTED_MODULE_10__.getPersistedState)(this.storageKey);
                        perstistedState.cartAmount = amount;
                        (0,_state__WEBPACK_IMPORTED_MODULE_10__.savePersistedState)(this.storageKey, perstistedState);
                        this.setState({ cartAmount: amount });
                    } }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shopping_cart__WEBPACK_IMPORTED_MODULE_5__["default"], { lang: lang, tooltipEnabled: tooltipEnabled, cartItemsCount: cartAmount, isHidden: isShoppingCartHidden, isHideButton: isHideButton, storageKey: this.storageKey, popoverRenewalTimeUnit: popoverRenewalTimeUnit || common_lib__WEBPACK_IMPORTED_MODULE_4__.RenewalTimeUnit.Days, popoverRenewalTimeAmount: popoverRenewalTimeAmount || 1, openShoppingCartFn:  placement: placement }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})] }));
    }
}


/***/ }),

/***/ "./src/app/state.ts":
/*!**************************!*\
  !*** ./src/app/state.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPersistedState: () => (/* binding */ getPersistedState),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   savePersistedState: () => (/* binding */ savePersistedState)
/* harmony export */ });
const initialState = {
    cartAmount: 0,
    expirationDate: 0,
    isPopoverTouched: false,
    adConfig: undefined
};
const getPersistedState = (storageKey) => {
    try {
        return (JSON.parse(localStorage.getItem(storageKey)) ||
            initialState);
    }
    catch (e) {
        console.log("USC: Cannot get persisted state", e);
        return initialState;
    }
};
const savePersistedState = 


/***/ }),

/***/ "./src/components/shopping-cart/ShoppingCartButton.tsx":
/*!*************************************************************!*\
  !*** ./src/components/shopping-cart/ShoppingCartButton.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShoppingCartButton)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.module.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _utils_expiration_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/expiration-date */ "./src/utils/expiration-date.ts");
/* harmony import */ var _icons_ShoppingCartIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/ShoppingCartIcon */ "./src/components/shopping-cart/icons/ShoppingCartIcon.tsx");
/* harmony import */ var _icons_CloseIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/CloseIcon */ "./src/components/shopping-cart/icons/CloseIcon.tsx");
/* harmony import */ var _utils_shopping_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/shopping-cart */ "./src/utils/shopping-cart.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/state */ "./src/app/state.ts");
/* harmony import */ var _ShoppingCartButton_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShoppingCartButton.scss */ "./src/components/shopping-cart/ShoppingCartButton.scss");

// eslint-disable-next-line @typescript-eslint/no-unused-vars









const POPOVER_CLASS_NAME = "usc-shopping-cart-popover";
class ShoppingCartButton extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        var _a, _b;
        super(props);
        this.handleDocumentClick = (e) => {
            const { isPopoverTouched } = this.state;
            const { isHidden } = this.props;
            const target = e.target;
            const className = String(target.className);
            if (!isPopoverTouched &&
                !isHidden &&
                !className.includes(POPOVER_CLASS_NAME)) {
                this.handlePopoverClose();
                document.removeEventListener("click", this.handleDocumentClick);
            }
        };
        this.handlePopoverClose = () => {
            this.markAsTouched();
        };
        this.markAsTouched = () => {
            const { popoverRenewalTimeUnit, popoverRenewalTimeAmount } = this.props;
            const castedPopoverRenewalTimeUnit = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.toRenewalTimeUnit)(popoverRenewalTimeUnit);
            const expirationDate = (0,_utils_expiration_date__WEBPACK_IMPORTED_MODULE_4__.getExpirationDate)(castedPopoverRenewalTimeUnit, popoverRenewalTimeAmount);
            const isPopoverTouched = true;
            this.saveState(expirationDate, isPopoverTouched);
        };
        this.saveState = (expirationDate, isPopoverTouched) => {
            const { storageKey } = this.props;
            this.setState({
                expirationDate,
                isPopoverTouched
            });
            const persistedState = (0,_app_state__WEBPACK_IMPORTED_MODULE_8__.getPersistedState)(storageKey);
            persistedState.expirationDate = expirationDate;
            persistedState.isPopoverTouched = isPopoverTouched;
            (0,_app_state__WEBPACK_IMPORTED_MODULE_8__.savePersistedState)(storageKey, persistedState);
        };
        this.handleShoppingBtnClick = (e) => {
            const { isPopoverTouched } = this.state;
            const { openShoppingCartFn } = this.props;
            if (!isPopoverTouched) {
                this.markAsTouched();
            }
            e.preventDefault();
            openShoppingCartFn();
        };
        const storedState = (0,_app_state__WEBPACK_IMPORTED_MODULE_8__.getPersistedState)(props.storageKey);
        this.state = {
            expirationDate: (_a = storedState.expirationDate) !== null && _a !== void 0 ? _a : 0,
            isPopoverTouched: (_b = storedState.isPopoverTouched) !== null && _b !== void 0 ? _b : false
        };
    }
    componentDidMount() {
        const { expirationDate } = this.state;
        const { popoverRenewalTimeUnit, popoverRenewalTimeAmount } = this.props;
        const castedPopoverRenewalTimeUnit = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.toRenewalTimeUnit)(popoverRenewalTimeUnit);
        if (Date.now() > expirationDate) {
            const date = (0,_utils_expiration_date__WEBPACK_IMPORTED_MODULE_4__.getExpirationDate)(castedPopoverRenewalTimeUnit, popoverRenewalTimeAmount);
            const isPopoverTouched = false;
            this.saveState(date, isPopoverTouched);
        }
        document.addEventListener("click", this.handleDocumentClick);
    }
        render() {
        const { isHidden, lang, cartItemsCount, isHideButton, placement, tooltipEnabled } = this.props;
        const { isPopoverTouched } = this.state;
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("usc-shopping-cart-btn-container", {
                "usc-shopping-cart-btn-container--top": placement === "top",
                "usc-shopping-cart-btn-container--center": placement === "center",
                "is-hidden": isHidden,
                "hide-button": isHideButton
            }), "aria-hidden": isHidden ? "true" : "false", children: [!isPopoverTouched && !isHidden && tooltipEnabled && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: POPOVER_CLASS_NAME, role: "tooltip", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "usc-shopping-cart-tooltip-arrow" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "usc-shopping-cart-popover-body", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "usc-shopping-cart-popover-title", children: lang.startsWith("es")
                                        ? "Comprar productos destacados"
                                        : "Shop featured products" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: "usc-shopping-cart-popover-close-btn", "aria-label": "Close", onClick: this.handlePopoverClose, children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_6__.CloseIcon, {}) })] })] })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "button", className: "usc-shopping-cart", onClick: this.handleShoppingBtnClick, "aria-label": "Open Universal shopping cart", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_ShoppingCartIcon__WEBPACK_IMPORTED_MODULE_5__.ShoppingCartIcon, { cartItemsCount: (0,_utils_shopping_cart__WEBPACK_IMPORTED_MODULE_7__.formatCartQuantity)(cartItemsCount) }) })] }));
    }
}


/***/ }),

/***/ "./src/components/shopping-cart/icons/CloseIcon.tsx":
/*!**********************************************************!*\
  !*** ./src/components/shopping-cart/icons/CloseIcon.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _CloseIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CloseIcon.scss */ "./src/components/shopping-cart/icons/CloseIcon.scss");


function CloseIcon() {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { x: "0px", y: "0px", viewBox: "0 0 12 12", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", { children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { className: "close-icon-st0", x1: "0.203", y1: "0.203", x2: "11.797", y2: "11.797" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { className: "close-icon-st0", x1: "11.797", y1: "0.203", x2: "0.203", y2: "11.797" })] }) }) }));
}


/***/ }),

/***/ "./src/components/shopping-cart/icons/ShoppingCartIcon.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/shopping-cart/icons/ShoppingCartIcon.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShoppingCartIcon: () => (/* binding */ ShoppingCartIcon)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var _ShoppingCartIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingCartIcon.scss */ "./src/components/shopping-cart/icons/ShoppingCartIcon.scss");


function ShoppingCartIcon({ cartItemsCount }) {
    return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { x: "0px", y: "0px", viewBox: "0 0 50 50", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { className: "shopping-cart-icon-st0", width: "50", height: "50" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { className: "shopping-cart-icon-st1", cx: "35.304", cy: "14.631", r: "8.519" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { x: "35", y: "17.5", className: "shopping-cart-icon-st2 shopping-cart-icon-st3 shopping-cart-icon-st4", children: cartItemsCount })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "shopping-cart-icon-st2", d: "M34.67,24.652l-0.254,0.972H16.362l-2.791-9.894h11.754c-0.042-0.381-0.042-0.719-0.042-1.099\n\t\tc0-0.254,0-0.507,0.042-0.761H13.149c-0.042,0-0.042,0-0.085,0l-1.142-4.059c-0.254-1.057-1.015-1.776-1.903-1.776H7.06\n\t\tc-0.423,0-0.846,0.381-0.888,0.93C6.13,9.6,6.51,10.149,7.018,10.149h3.002c0.127,0,0.254,0.127,0.296,0.296L14.84,26.47\n\t\tc0.169,0.634,0.634,1.057,1.184,1.057c3.805,0,18.604,0,18.604,0c0.507,0,0.972-0.423,1.142-1.015l0.507-1.86\n\t\tc-0.296,0.042-0.634,0.042-0.93,0.042C35.093,24.694,34.881,24.694,34.67,24.652z" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "shopping-cart-icon-st2", d: "M19.237,28.88c-1.522,0-2.748,1.226-2.748,2.748c0,1.522,1.226,2.748,2.748,2.748\n\t\t\tc1.522,0,2.748-1.226,2.748-2.748C21.986,30.106,20.759,28.88,19.237,28.88z M19.237,32.601c-0.55,0-0.972-0.423-0.972-0.972\n\t\t\ts0.423-0.972,0.972-0.972c0.55,0,0.972,0.423,0.972,0.972C20.21,32.136,19.787,32.601,19.237,32.601z" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "shopping-cart-icon-st2", d: "M30.992,28.88c-1.522,0-2.748,1.226-2.748,2.748c0,1.522,1.226,2.748,2.748,2.748s2.748-1.226,2.748-2.748\n\t\t\tC33.74,30.106,32.471,28.88,30.992,28.88z M30.992,32.601c-0.55,0-0.972-0.423-0.972-0.972s0.423-0.972,0.972-0.972\n\t\t\tc0.55,0,0.972,0.423,0.972,0.972C31.922,32.136,31.499,32.601,30.992,32.601z" })] })] }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "shopping-cart-icon-st2", d: "M12.035,43.088l0.739-0.883c0.479,0.377,0.999,0.575,1.554,0.575c0.363,0,0.554-0.123,0.554-0.329v-0.014\n\t\tc0-0.205-0.157-0.308-0.815-0.465c-1.02-0.233-1.807-0.52-1.807-1.499v-0.014c0-0.89,0.705-1.533,1.855-1.533\n\t\tc0.815,0,1.451,0.219,1.971,0.637L15.424,40.5c-0.438-0.315-0.917-0.472-1.342-0.472c-0.322,0-0.479,0.13-0.479,0.308v0.014\n\t\tc0,0.219,0.164,0.315,0.835,0.465c1.095,0.24,1.78,0.596,1.78,1.492v0.014c0,0.979-0.773,1.561-1.937,1.561\n\t\tC13.432,43.882,12.631,43.615,12.035,43.088z" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "shopping-cart-icon-st2", d: "M18.915,39.008h1.328v1.793h1.704v-1.793h1.328V43.8h-1.328v-1.821h-1.704V43.8h-1.328V39.008z" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "shopping-cart-icon-st2", d: "M26.02,41.418v-0.014c0-1.376,1.109-2.492,2.587-2.492s2.574,1.102,2.574,2.478v0.014\n\t\tc0,1.376-1.109,2.492-2.587,2.492S26.02,42.794,26.02,41.418z M29.819,41.418v-0.014c0-0.698-0.493-1.294-1.225-1.294\n\t\ts-1.218,0.589-1.218,1.28v0.014c0,0.691,0.5,1.294,1.232,1.294C29.333,42.698,29.819,42.109,29.819,41.418z" }), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { className: "shopping-cart-icon-st2", d: "M33.919,39.008h2.06c1.205,0,1.985,0.623,1.985,1.677v0.014c0,1.136-0.869,1.732-2.054,1.732h-0.664V43.8\n\t\th-1.328V39.008z M35.884,41.39c0.465,0,0.76-0.253,0.76-0.63v-0.014c0-0.411-0.294-0.623-0.767-0.623h-0.63v1.266H35.884z" })] })] }));
}


/***/ }),

/***/ "./src/components/shopping-cart/index.ts":
/*!***********************************************!*\
  !*** ./src/components/shopping-cart/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShoppingCartButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingCartButton */ "./src/components/shopping-cart/ShoppingCartButton.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ShoppingCartButton__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/shopping-outlet/ShoppingOutlet.tsx":
/*!***********************************************************!*\
  !*** ./src/components/shopping-outlet/ShoppingOutlet.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShoppingOutlet)
/* harmony export */ });
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.module.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_components_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/components.registry */ "./src/constants/components.registry.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/url */ "./src/utils/url.ts");
/* harmony import */ var _utils_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/platform */ "./src/utils/platform.ts");
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/loader */ "./src/utils/loader.ts");
/* harmony import */ var _ShoppingOutlet_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShoppingOutlet.scss */ "./src/components/shopping-outlet/ShoppingOutlet.scss");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars








class ShoppingOutlet extends preact__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            isHidden: true,
            isLoading: true
        };
        this.uscRootRef = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.onOrientationChange = () => {
            // (IPhones only): This thing enforces layout recalculation by resetting fixed position attached with the class
            // eslint-disable-next-line react/destructuring-assignment
            if ((0,_utils_platform__WEBPACK_IMPORTED_MODULE_6__.isIPhone)() && !this.state.isHidden) {
                document.body.classList.remove(_constants_components_registry__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME_FOR_SHOWN_WIDGET_ON_BODY);
                setTimeout( 400);
            }
        };
        this.onClickOutside = (event) => {
            const { isHidden } = this.state;
            if (!(event.target.closest(`[data-${_utils_dom__WEBPACK_IMPORTED_MODULE_4__.PRODUCT_KEY_ATTRIBUTE}][data-${_utils_dom__WEBPACK_IMPORTED_MODULE_4__.CHANNEL_KEY_ATTRIBUTE}]`) ||
                event.target.closest(`#${_constants_components_registry__WEBPACK_IMPORTED_MODULE_3__.SHOPPING_OUTLET}`) ||
                event.target.closest("[href^='#usc-']") ||
                event.target.closest(".usc-modal")) &&
                !isHidden) {
                this.hideUSCWidget();
            }
        };
    }
    componentDidMount() {
        window.addEventListener("click", this.onClickOutside, true);
        window.addEventListener("orientationchange", this.onOrientationChange);
    }
    componentDidUpdate() {
        var _a, _b;
        const { isHidden } = this.state;
        if (!isHidden) {
            (_b = (_a = this.uscRootRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
    }
        hideUSCWidget() {
        const { hideShoppingButton } = this.props;
        this.setState({
            isHidden: true
        });
        (0,_utils_url__WEBPACK_IMPORTED_MODULE_5__.clearLocationHash)();
        hideShoppingButton(false);
    }
    // eslint-disable-next-line react/no-unused-class-component-methods
    renderOutlet(onRenderOutletCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { iframeProducts, lang, networkBrand, onCartAmountChange, theme } = this.props;
                if (!window.usc) {
                    this.setState({
                        isLoading: true,
                        isHidden: false
                    });
                    yield (0,_utils_loader__WEBPACK_IMPORTED_MODULE_7__.loadWidget)(theme, networkBrand);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    window.usc.onWidgetClose = 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    window.usc.onCartAmountChange = 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    window.usc.setPageProducts((0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.getShoppableProducts)(iframeProducts));
                }
                else {
                    this.setState({
                        isHidden: false
                    });
                }
                if (this.uscRootRef.current) {
                    window.usc.unmountWidget(this.uscRootRef.current);
                }
                onRenderOutletCallback();
                if (this.uscRootRef.current) {
                    window.usc.renderWidget(this.uscRootRef.current, {
                        theme,
                        lang
                    });
                }
                this.setState({
                    isLoading: false
                });
            }
            catch (error) {
                // eslint-disable-next-line no-console
                console.log("USC: can not initialize usc", error);
            }
        });
    }
    render() {
        const { isHidden, isLoading } = this.state;
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.updateBodyClassList)(isHidden);
        return ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("usc-outlet", {
                "is-hidden": isHidden
            }), "aria-hidden": isHidden ? "true" : "false", children: [isLoading && ((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "usc-outlet-loader", children: (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "aria-live": "assertive", className: "lds-ripple", children: [(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {}), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})] }) })), (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "aria-label": "Shopping cart available", className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("usc-root", {
                        "usc-root_hidden": isHidden
                    }), id: _constants_components_registry__WEBPACK_IMPORTED_MODULE_3__.SHOPPING_OUTLET_CONTENT, ref: this.uscRootRef, 
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex: 0 })] }));
    }
}


/***/ }),

/***/ "./src/components/shopping-outlet/index.ts":
/*!*************************************************!*\
  !*** ./src/components/shopping-outlet/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShoppingOutlet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShoppingOutlet */ "./src/components/shopping-outlet/ShoppingOutlet.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ShoppingOutlet__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/constants/components.registry.ts":
/*!**********************************************!*\
  !*** ./src/constants/components.registry.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASS_NAME_FOR_SHOWN_WIDGET_ON_BODY: () => (/* binding */ CLASS_NAME_FOR_SHOWN_WIDGET_ON_BODY),
/* harmony export */   CONTEXTUAL_RECOMMENDS_WIDGET_DATA_ATTRIBUTE: () => (/* binding */ CONTEXTUAL_RECOMMENDS_WIDGET_DATA_ATTRIBUTE),
/* harmony export */   CONTEXTUAL_WIDGET_DATA_ATTRIBUTE: () => (/* binding */ CONTEXTUAL_WIDGET_DATA_ATTRIBUTE),
/* harmony export */   EMBEDDABLE_PRODUCTS_WIDGET_DATA_ATTRIBUTE: () => (/* binding */ EMBEDDABLE_PRODUCTS_WIDGET_DATA_ATTRIBUTE),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   SHOPPING_OUTLET: () => (/* binding */ SHOPPING_OUTLET),
/* harmony export */   SHOPPING_OUTLET_CONTENT: () => (/* binding */ SHOPPING_OUTLET_CONTENT)
/* harmony export */ });
const NAMESPACE = "usc";
const SHOPPING_OUTLET = `${NAMESPACE}-outlet`;
const SHOPPING_OUTLET_CONTENT = `${NAMESPACE}-outlet-content`;
const CLASS_NAME_FOR_SHOWN_WIDGET_ON_BODY = "usc-widget-is-shown";
const CONTEXTUAL_WIDGET_DATA_ATTRIBUTE = "data-usc-contextual-widget";
const CONTEXTUAL_RECOMMENDS_WIDGET_DATA_ATTRIBUTE = "data-usc-contextual-recommends-widget";
const EMBEDDABLE_PRODUCTS_WIDGET_DATA_ATTRIBUTE = "data-usc-embeddable-products-widget";


/***/ }),

/***/ "./src/constants/content.ts":
/*!**********************************!*\
  !*** ./src/constants/content.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contextualContentData: () => (/* binding */ contextualContentData),
/* harmony export */   getDefaultContentData: () => (/* binding */ getDefaultContentData),
/* harmony export */   sponsorshipContentData: () => (/* binding */ sponsorshipContentData)
/* harmony export */ });
const DEFAULT_CONTENT_TYPE = "Web Page";
const contextualContentData = {
    contentType: "Contextual Commerce Widget",
    contentName: document.title
};
const sponsorshipContentData = {
    contentType: "sponsorship banner"
};
const getDefaultContentData = (getContentData) => {
    if (getContentData) {
        const { contentName, contentType, sponsorName } = getContentData();
        const contentData = {
            contentName,
            contentType
        };
        if (sponsorName) {
            contentData.sponsorName = sponsorName;
        }
        return contentData;
    }
    return {
        contentName: document.title,
        contentType: DEFAULT_CONTENT_TYPE
    };
};


/***/ }),

/***/ "./src/services/ProductsService.tsx":
/*!******************************************!*\
  !*** ./src/services/ProductsService.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsService: () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/url */ "./src/utils/url.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./src/utils/dom.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ProductsService {
    constructor() {
        this.products = [];
        this.fetchProducts = (elements, networkBrand) => __awaiter(this, void 0, void 0, function* () {
            if (!networkBrand || !(window === null || window === void 0 ? void 0 : window.mParticle)) {
                return;
            }
            let productsData;
            try {
                let shoppableKeyData = [];
                elements.forEach((element) => {
                    if ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.checkIsAnchorTagWithPdpPrefix)(element)) {
                        const shoppableKeyDataItem = this.getShoppableKeyDataFromAnchor(element);
                        if (shoppableKeyDataItem) {
                            shoppableKeyData.push(shoppableKeyDataItem);
                            return;
                        }
                    }
                    if (element.dataset.productKey &&
                        element.dataset.productChannelKey &&
                        !this.isDuplicateProduct(element.dataset.productKey, element.dataset.productChannelKey)) {
                        shoppableKeyData.push({
                            key: element.dataset.productKey,
                            priceChannelKey: element.dataset.productChannelKey
                        });
                    }
                });
                shoppableKeyData = [...new Set(shoppableKeyData)];
                if (!shoppableKeyData.length) {
                    return;
                }
                const response = yield fetch(`${"https://commerce.nbcuni.com/public/api"}/v3/${networkBrand}/products?skipProductsWithEmptyPrices=false`, {
                    method: "POST",
                    body: JSON.stringify(shoppableKeyData)
                });
                const uscProducts = yield response.json();
                productsData = this.formatProductData(uscProducts);
            }
            catch (error) {
                console.error("USC: fetch products failed.", error);
                productsData = [];
            }
            this.products = [...this.products, ...productsData];
        });
        this.resetProducts = 
        this.getProductData = (productKey) => this.products.find(product => productKey === (product === null || product === void 0 ? void 0 : product.productKey));
        this.isDuplicateProduct = (productKey, channelKey) => this.products.find(;
        this.getShoppableKeyDataFromAnchor = (element) => {
            var _a;
            const queryString = (_a = element.href.split(`${_utils_url__WEBPACK_IMPORTED_MODULE_0__.PDP_LOCATION_HASH_PREFIX}?`)[1]) !== null && _a !== void 0 ? _a : "";
            const params = (0,_utils_url__WEBPACK_IMPORTED_MODULE_0__.parseQuery)(queryString);
            const productKey = params["product-key"];
            const productChannelKey = params["channel-key"];
            if (productKey &&
                productChannelKey &&
                !this.isDuplicateProduct(productKey, productChannelKey)) {
                return {
                    key: productKey,
                    priceChannelKey: productChannelKey
                };
            }
            return null;
        };
        // eslint-disable-next-line class-methods-use-this
        this.formatProductData = (products) => {
            if (!Array.isArray(products) || !products.length)
                return [];
            return products.map(product => {
                var _a, _b, _c, _d, _e, _f;
                const masterProduct = (_a = product.variants) === null || _a === void 0 ? void 0 : _a[0];
                return {
                    productKey: product.key,
                    brand: ((_b = masterProduct === null || masterProduct === void 0 ? void 0 : masterProduct.sameAttributes) === null || _b === void 0 ? void 0 : _b.brand) || "",
                    sellerName: (_d = (_c = masterProduct === null || masterProduct === void 0 ? void 0 : masterProduct.offers) === null || _c === void 0 ? void 0 : _c[0].channel) === null || _d === void 0 ? void 0 : _d.name,
                    channelKey: (_f = (_e = masterProduct === null || masterProduct === void 0 ? void 0 : masterProduct.offers) === null || _e === void 0 ? void 0 : _e[0].channel) === null || _f === void 0 ? void 0 : _f.key,
                    name: product.name,
                    categories: product === null || product === void 0 ? void 0 : product.categories,
                    isBackordered: masterProduct === null || masterProduct === void 0 ? void 0 : masterProduct.isBackordered,
                    isDelayedShipping: masterProduct === null || masterProduct === void 0 ? void 0 : masterProduct.isDelayedShipping
                };
            });
        };
    }
}


/***/ }),

/***/ "./src/utils/analytics.ts":
/*!********************************!*\
  !*** ./src/utils/analytics.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addErrorHandlers: () => (/* binding */ addErrorHandlers),
/* harmony export */   analyticsOnProductClicked: () => (/* binding */ analyticsOnProductClicked),
/* harmony export */   analyticsOnShoppableContentLoad: () => (/* binding */ analyticsOnShoppableContentLoad),
/* harmony export */   cleanupUSCAnalytics: () => (/* binding */ cleanupUSCAnalytics),
/* harmony export */   handleIsUscError: () => (/* binding */ handleIsUscError),
/* harmony export */   initUSCAnalytics: () => (/* binding */ initUSCAnalytics),
/* harmony export */   registerShoppableElementsAndLinks: () => (/* binding */ registerShoppableElementsAndLinks),
/* harmony export */   registerSponsorshipElementsAndLinks: () => (/* binding */ registerSponsorshipElementsAndLinks),
/* harmony export */   rescanUSCAnalytics: () => (/* binding */ rescanUSCAnalytics)
/* harmony export */ });
/* harmony import */ var common_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/lib/utils */ "../common/lib/utils/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.ts");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url */ "./src/utils/url.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/utils/storage.ts");
/* harmony import */ var _constants_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/content */ "./src/constants/content.ts");
/* harmony import */ var _services_ProductsService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ProductsService */ "./src/services/ProductsService.tsx");
/* harmony import */ var _eventLogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventLogger */ "./src/utils/eventLogger.ts");
/* harmony import */ var _citrusReporter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./citrusReporter */ "./src/utils/citrusReporter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || 








const eventLogger = new _eventLogger__WEBPACK_IMPORTED_MODULE_6__.EventLogger();
const reportService = new _citrusReporter__WEBPACK_IMPORTED_MODULE_7__.ReportService();
let shoppableElements;
let sponsorshipElements;
let getOverrideContentData;
const productsService = new _services_ProductsService__WEBPACK_IMPORTED_MODULE_5__.ProductsService();
const PROMISE_POLYFILL = "src_promise-polyfill_js";
const analyticsEnabled = () => !!window.mParticle;
const getContentData = (productKey) => {
    var _a;
    const contextualKeys = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getContextualProductsKeyStorage)();
    const contextualProductData = contextualKeys.find(;
    if (contextualProductData) {
        return Object.assign(Object.assign({}, _constants_content__WEBPACK_IMPORTED_MODULE_4__.contextualContentData), { score: (_a = contextualProductData.score) !== null && _a !== void 0 ? _a : null });
    }
    const productKeys = (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getProductsKeyStorage)();
    if (productKeys.includes(productKey)) {
        return (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getContentDataStorage)();
    }
    return (0,_constants_content__WEBPACK_IMPORTED_MODULE_4__.getDefaultContentData)(getOverrideContentData);
};
const getCategoryData = (productCategories) => {
    if (!getOverrideContentData)
        return {};
    const { categories } = getOverrideContentData();
    if (!(categories === null || categories === void 0 ? void 0 : categories.length) || !(productCategories === null || productCategories === void 0 ? void 0 : productCategories.length))
        return {};
    const categoryData = {};
    productCategories.forEach(productCategory => {
        const category = categories.find(;
        if (category === null || category === void 0 ? void 0 : category.entityName) {
            categoryData.entityReference = category.entityName;
        }
        if (category === null || category === void 0 ? void 0 : category.type) {
            categoryData.typeReference = category.type;
        }
    });
    return categoryData;
};
const getShoppableCategoriesData = () => {
    if (!getOverrideContentData)
        return {};
    const { categories } = getOverrideContentData();
    if (!(categories === null || categories === void 0 ? void 0 : categories.length))
        return {};
    const categoryData = {};
    const category = categories.find(({ entityName, type }) => {
        return entityName || type;
    });
    if (category === null || category === void 0 ? void 0 : category.entityName) {
        categoryData.entityReference = category.entityName;
    }
    if (category === null || category === void 0 ? void 0 : category.type) {
        categoryData.typeReference = category.type;
    }
    return categoryData;
};
const getProductAttributes = (productKey, channelKey, analyticsCustomAttributes) => {
    const productData = productsService.getProductData(productKey);
    const content = getContentData(productKey);
    const categoryData = getCategoryData((productData === null || productData === void 0 ? void 0 : productData.categories) || []);
    const utmParams = (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getUtmParams)();
    const miraklCategories = (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getAnalyticsMiraklProductCategoriesAttributes)(productData === null || productData === void 0 ? void 0 : productData.categories);
    if (!productData) {
        return null;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ productId: `${channelKey}:${productKey}`, sellerId: channelKey, sellerName: (productData === null || productData === void 0 ? void 0 : productData.sellerName) || null, brand: (productData === null || productData === void 0 ? void 0 : productData.brand) || null, productName: (productData === null || productData === void 0 ? void 0 : productData.name) || null, isBackordered: productData === null || productData === void 0 ? void 0 : productData.isBackordered, isDelayedShipping: productData === null || productData === void 0 ? void 0 : productData.isDelayedShipping, list: "Editorial", pageSlug: (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getPageSlug)(window.location.pathname) }, miraklCategories), content), categoryData), analyticsCustomAttributes), utmParams), (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getShoppableMomentId)());
};
// previousLocationPath is needed for the cases when usc widget is used on Single Page Applications.
// Whenever SPA calls rescan method previousLocationPath is checked against
// current location pathname. If it differs we assume that analyticsOnPageLoad
// event has to be triggered.
let previousLocationPath = window.location.pathname;
const analyticsOnProductClicked = ({ productKey, channelKey, citrusAdId, analyticsDataAttributes, sourceElement }) => {
    const contentData = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getContentDataStorage)();
    const analyticsCustomAttributes = analyticsDataAttributes
        ? (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.parseAnalyticsCustomAttributes)(analyticsDataAttributes)
        : undefined;
    const attributes = getProductAttributes(productKey, channelKey, Object.assign(Object.assign({}, analyticsCustomAttributes), { isBackInStock: !!window.uscWidget.config.backInStock, sourceElement: sourceElement || contentData.contentName }));
    if (citrusAdId) {
        eventLogger.logSponsorClickedEvent((0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getSponsorEventAttributes)(analyticsCustomAttributes));
    }
    if (attributes) {
        eventLogger.logProductClickedEvent(attributes);
    }
};
const sendShoppableElementClick = (e) => {
    if (!window.mParticle) {
        console.log("USC: [mParticle] Product clicked event not sent.");
        return;
    }
    try {
        const target = e.target;
        const currTarget = e.currentTarget;
        const productKey = currTarget.dataset.productKey || target.dataset.productKey || "";
        const sellerId = currTarget.dataset.productChannelKey ||
            target.dataset.productChannelKey ||
            "";
        const analyticsDataAttributes = currTarget.dataset.analyticsCustomAttributes ||
            target.dataset.analyticsCustomAttributes;
        const citrusAdId = currTarget.dataset.productAdId || target.dataset.productAdId;
        analyticsOnProductClicked({
            productKey,
            channelKey: sellerId,
            citrusAdId,
            analyticsDataAttributes,
            sourceElement: target.nodeName.toLowerCase()
        });
    }
    catch (error) {
        console.error("USC: [mParticle] Product clicked error sending event.", error);
    }
};
const sendSponsorshipElementClick = (e) => {
    if (!window.mParticle) {
        console.log("USC: [mParticle] Sponsor clicked event not sent.");
        return;
    }
    try {
        const target = e.target;
        const currTarget = e.currentTarget;
        const analyticsDataAttributes = currTarget.dataset.analyticsCustomAttributes ||
            target.dataset.analyticsCustomAttributes;
        const analyticsCustomAttributes = analyticsDataAttributes
            ? (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.parseAnalyticsCustomAttributes)(analyticsDataAttributes)
            : undefined;
        eventLogger.logSponsorClickedEvent((0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getSponsorEventAttributes)(analyticsCustomAttributes));
    }
    catch (error) {
        console.error("USC: [mParticle] Sponsor clicked error sending event.", error);
    }
};
const onShoppableElementClick = (e) => {
    sendShoppableElementClick(e);
    reportService.sendClick(e);
};
const sendEventIfInViewport = (entries) => {
    if (!window.mParticle) {
        console.log("USC: [mParticle] Product viewed event not sent.");
        return;
    }
    try {
        entries === null || entries === void 0 ? void 0 : entries.forEach(entry => {
            const element = entry.target;
            let productKey = "";
            let productChannelKey = "";
            const analyticsDataAttributes = element.dataset.analyticsCustomAttributes;
            const citrusAdId = element.dataset.productAdId;
            const hasSponsorshipAttribute = element.hasAttribute(`data-${_dom__WEBPACK_IMPORTED_MODULE_1__.SPONSORSHIP_ATTRIBUTE}`);
            const elementKey = element.dataset.key;
            try {
                if (element.dataset.productKey &&
                    element.dataset.productChannelKey) {
                    productKey = element.dataset.productKey;
                    productChannelKey = element.dataset.productChannelKey;
                }
                else {
                    const queryString = element.href.split(`${_url__WEBPACK_IMPORTED_MODULE_2__.PDP_LOCATION_HASH_PREFIX}?`)[1];
                    const params = (0,_url__WEBPACK_IMPORTED_MODULE_2__.parseQuery)(queryString);
                    productKey = params["product-key"];
                    productChannelKey = params["channel-key"];
                }
            }
            catch (err) {
                productKey = "";
                productChannelKey = "";
            }
            if (entry.isIntersecting) {
                const analyticsCustomAttributes = analyticsDataAttributes
                    ? (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.parseAnalyticsCustomAttributes)(analyticsDataAttributes)
                    : undefined;
                const attributes = getProductAttributes(productKey, productChannelKey, analyticsCustomAttributes);
                if (citrusAdId) {
                    eventLogger.logIABImpressionEvent(Object.assign({ citrusAdId }, (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getSponsorEventAttributes)(analyticsCustomAttributes)));
                }
                if (hasSponsorshipAttribute) {
                    eventLogger.logSponsorViewedEvent(Object.assign({ key: elementKey }, (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getSponsorEventAttributes)(analyticsCustomAttributes)));
                }
                else if (attributes) {
                    eventLogger.logProductViewedEvent(attributes);
                }
            }
        });
    }
    catch (e) {
        console.error("USC: [mParticle] viewPort error sending event.", e);
    }
};
const intersectionObserver = new IntersectionObserver((entries) => {
    sendEventIfInViewport(entries);
    reportService.sendImpression(entries);
}, {
    threshold: 0.5
});
const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        const element = mutation.target;
        const style = getComputedStyle(element);
        if (style.visibility !== "visible") {
            intersectionObserver.unobserve(element);
        }
        else {
            intersectionObserver.observe(element);
        }
    });
});
const getPageAttributes = () => {
    return {
        pageName: document.title,
        domain: window.location.host,
        url: window.location.toString(),
        pageSlug: (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getPageSlug)(window.location.pathname)
    };
};
const logPageLoadEvent = () => {
    const utmParams = (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getUtmParams)();
    const pageAttributes = getPageAttributes();
    const attributes = Object.assign(Object.assign(Object.assign({}, utmParams), (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getShoppableMomentId)()), pageAttributes);
    eventLogger.logPageLoadEvent(attributes);
};
const analyticsOnPageLoad = () => {
    if (!analyticsEnabled()) {
        console.log("USC: [mParticle] Page loaded event not sent.");
        return;
    }
    const shoppableItems = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getShoppableElementsAndLinks)();
    if (shoppableItems.length) {
        logPageLoadEvent();
    }
};
const registerShoppableElementsAndLinks = (networkBrand) => __awaiter(void 0, void 0, void 0, function* () {
    shoppableElements = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getShoppableElementsAndLinks)();
    if (!shoppableElements.length) {
        return;
    }
    yield productsService.fetchProducts(shoppableElements, networkBrand);
    shoppableElements.forEach(element => {
        if (getComputedStyle(element).visibility === "visible") {
            intersectionObserver.observe(element);
        }
        mutationObserver.observe(element, {
            attributes: true
        });
        element.addEventListener("click", onShoppableElementClick);
        if (element.dataset.productKey && element.dataset.productChannelKey) {
            const customAnalyticsAttributesData = element.dataset
                .analyticsCustomAttributes
                ? (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.parseAnalyticsCustomAttributes)(element.dataset.analyticsCustomAttributes)
                : undefined;
            const attributes = getProductAttributes(element.dataset.productKey, element.dataset.productChannelKey, customAnalyticsAttributesData);
            if (attributes) {
                eventLogger.logProductLoadedEvent(attributes);
            }
        }
    });
});
const registerSponsorshipElementsAndLinks = () => __awaiter(void 0, void 0, void 0, function* () {
    sponsorshipElements = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getSponsorshipElementsAndLinks)();
    if (!sponsorshipElements.length) {
        return;
    }
    sponsorshipElements.forEach((element, key) => {
        if (getComputedStyle(element).visibility === "visible") {
            intersectionObserver.observe(element);
            // eslint-disable-next-line no-param-reassign
            element.dataset.key = key.toString();
            const analyticsCustomAttributes = element.dataset
                .analyticsCustomAttributes
                ? (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.parseAnalyticsCustomAttributes)(element.dataset.analyticsCustomAttributes)
                : undefined;
            eventLogger.logSponsorImpressionEvent(Object.assign({ key }, (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getSponsorEventAttributes)(analyticsCustomAttributes)));
        }
        mutationObserver.observe(element, {
            attributes: true
        });
        element.addEventListener("click", sendSponsorshipElementClick);
    });
});
const analyticsOnShoppableContentLoad = (data) => {
    if (!analyticsEnabled()) {
        console.log("USC: [mParticle] shoppableContentLoad not sent.");
        return;
    }
    if (data === null || data === void 0 ? void 0 : data.content) {
        // eslint-disable-next-line no-param-reassign
        delete data.content.products;
        logPageLoadEvent();
        const _a = data.content, { type, name } = _a, restData = __rest(_a, ["type", "name"]);
        const pageAttributes = getPageAttributes();
        const utmParams = (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getUtmParams)();
        const attributes = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pageAttributes), { contentType: type, contentName: name }), restData), data.adDetails), utmParams), (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getShoppableMomentId)());
        eventLogger.logShoppableContentLoadedEvent(attributes);
    }
};
const initUSCAnalytics = (
// eslint-disable-next-line @typescript-eslint/no-shadow
getContentData, networkBrand) => __awaiter(void 0, void 0, void 0, function* () {
    if (!networkBrand) {
        console.error("networkBrand is a required param");
        return;
    }
    try {
        if (!(0,_dom__WEBPACK_IMPORTED_MODULE_1__.hasShoppableElementsAndLinks)() &&
            !(0,_dom__WEBPACK_IMPORTED_MODULE_1__.hasSponsorshipElementsAndLinks)()) {
            return;
        }
        yield registerShoppableElementsAndLinks(networkBrand);
        yield registerSponsorshipElementsAndLinks();
        getOverrideContentData = getContentData;
        const _a = (0,_constants_content__WEBPACK_IMPORTED_MODULE_4__.getDefaultContentData)(getOverrideContentData), { contentName, contentType } = _a, rest = __rest(_a, ["contentName", "contentType"]);
        const categoryData = getShoppableCategoriesData();
        if ((0,_dom__WEBPACK_IMPORTED_MODULE_1__.hasListacleElements)()) {
            analyticsOnShoppableContentLoad({
                content: Object.assign(Object.assign({ name: contentName, type: contentType }, categoryData), rest)
            });
        }
    }
    catch (e) {
        console.error("USC: [mParticle] onClick and onScroll events are not set.", e);
    }
});
const cleanupUSCAnalytics = () => {
    intersectionObserver.disconnect();
    mutationObserver.disconnect();
    shoppableElements === null || shoppableElements === void 0 ? void 0 : shoppableElements.forEach(shoppableElement => {
        shoppableElement.removeEventListener("click", onShoppableElementClick);
    });
    sponsorshipElements === null || sponsorshipElements === void 0 ? void 0 : sponsorshipElements.forEach(sponsorshipElement => {
        sponsorshipElement.removeEventListener("click", sendSponsorshipElementClick);
    });
};
const rescanUSCAnalytics = (
// eslint-disable-next-line @typescript-eslint/no-shadow
getContentData, networkBrand) => __awaiter(void 0, void 0, void 0, function* () {
    if (previousLocationPath !== window.location.pathname) {
        previousLocationPath = window.location.pathname;
        eventLogger.resetSentEvents();
        reportService.resetReports();
        productsService.resetProducts();
        analyticsOnPageLoad();
    }
    cleanupUSCAnalytics();
    yield initUSCAnalytics(getContentData, networkBrand);
});
const handleIsUscError = (error) => error &&
    error.stack &&
    (error.stack.includes("bootstrap.js") ||
        error.stack.includes("usc.bundle.js")) &&
    !error.message.includes(PROMISE_POLYFILL);
const buildErrorObject = (event, source, lineno, colno) => ({
    message: typeof event === "string" ? event : event === null || event === void 0 ? void 0 : event.type,
    name: "Error",
    stack: `${source} at ${lineno}:${colno}`
});
const decorateErrorHandler = (fn) => {
    return function (event, source, lineno, colno, error) {
        try {
            const errorToLog = error || buildErrorObject(event, source, lineno, colno);
            const isUscError = handleIsUscError(errorToLog);
            if (isUscError) {
                (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.analyticsLogError)(errorToLog);
            }
            if (fn) {
                return fn(event, source, lineno, colno, error);
            }
        }
        catch (err) {
            console.log("USC: Can not decorate error handler or build error object", err);
        }
        return () => { };
    };
};
const decorateUnhandledPromiseRejection = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
fn) => {
    return function (event) {
        try {
            const errorToLog = event.reason ? event.reason : null;
            const isUscError = handleIsUscError(errorToLog);
            if (isUscError) {
                (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_0__.analyticsLogError)(new Error(event.reason));
            }
            if (fn)
                return fn(event);
        }
        catch (err) {
            console.log("USC: can't decorate unhandled promice rejection", err);
        }
        return () => { };
    };
};
const addErrorHandlers = () => {
    if (!analyticsEnabled())
        return;
    try {
        window.onerror = decorateErrorHandler(window.onerror);
        window.onunhandledrejection = decorateUnhandledPromiseRejection(window.onunhandledrejection);
    }
    catch (err) {
        console.log("USC: can't catch unhandled error", err);
    }
};


/***/ }),

/***/ "./src/utils/citrusReporter.ts":
/*!*************************************!*\
  !*** ./src/utils/citrusReporter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportService: () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var common_lib_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/lib/service */ "../common/lib/service/index.js");

class ReportService {
    constructor() {
        this.uniqueReportStorage = new Set();
    }
    // eslint-disable-next-line class-methods-use-this
    sendClick(e) {
        var _a;
        try {
            const networkBrand = (_a = window.uscWidget.config) === null || _a === void 0 ? void 0 : _a.networkBrand;
            const target = e.target;
            const currTarget = e.currentTarget;
            const citrusAdId = currTarget.dataset.productAdId || target.dataset.productAdId;
            if (networkBrand && citrusAdId) {
                (0,common_lib_service__WEBPACK_IMPORTED_MODULE_0__.trackCitrusClick)(networkBrand, citrusAdId);
            }
        }
        catch (error) {
            console.error("USC: [Citrus] Click Reporting error.", error);
        }
    }
    sendImpression(entries) {
        var _a;
        try {
            const networkBrand = (_a = window.uscWidget.config) === null || _a === void 0 ? void 0 : _a.networkBrand;
            entries === null || entries === void 0 ? void 0 : entries.forEach(entry => {
                const element = entry.target;
                const citrusAdId = element.dataset.productAdId;
                if (networkBrand &&
                    entry.isIntersecting &&
                    citrusAdId &&
                    !this.uniqueReportStorage.has(citrusAdId)) {
                    (0,common_lib_service__WEBPACK_IMPORTED_MODULE_0__.trackCitrusImpression)(networkBrand, citrusAdId);
                    this.uniqueReportStorage.add(citrusAdId);
                }
            });
        }
        catch (e) {
            console.error("USC: [Citrus] viewPort error tracking impression.", e);
        }
    }
    resetReports() {
        this.uniqueReportStorage.clear();
    }
}


/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANALYTICS_CUSTOM_ATTRIBUTES: () => (/* binding */ ANALYTICS_CUSTOM_ATTRIBUTES),
/* harmony export */   CHANNEL_KEY_ATTRIBUTE: () => (/* binding */ CHANNEL_KEY_ATTRIBUTE),
/* harmony export */   PRODUCT_KEY_ATTRIBUTE: () => (/* binding */ PRODUCT_KEY_ATTRIBUTE),
/* harmony export */   PRODUCT_MERCHANDISE_ATTRIBUTES: () => (/* binding */ PRODUCT_MERCHANDISE_ATTRIBUTES),
/* harmony export */   PRODUCT_SKU_ATTRIBUTE: () => (/* binding */ PRODUCT_SKU_ATTRIBUTE),
/* harmony export */   SPONSORSHIP_ATTRIBUTE: () => (/* binding */ SPONSORSHIP_ATTRIBUTE),
/* harmony export */   SUPPRESS_WIDGET_OPENING: () => (/* binding */ SUPPRESS_WIDGET_OPENING),
/* harmony export */   checkIsAnchorTagWithPdpPrefix: () => (/* binding */ checkIsAnchorTagWithPdpPrefix),
/* harmony export */   getIdentityScriptElements: () => (/* binding */ getIdentityScriptElements),
/* harmony export */   getShoppableAnchors: () => (/* binding */ getShoppableAnchors),
/* harmony export */   getShoppableElements: () => (/* binding */ getShoppableElements),
/* harmony export */   getShoppableElementsAndLinks: () => (/* binding */ getShoppableElementsAndLinks),
/* harmony export */   getShoppableProducts: () => (/* binding */ getShoppableProducts),
/* harmony export */   getSponsorshipElementsAndLinks: () => (/* binding */ getSponsorshipElementsAndLinks),
/* harmony export */   hasListacleElements: () => (/* binding */ hasListacleElements),
/* harmony export */   hasShoppableElements: () => (/* binding */ hasShoppableElements),
/* harmony export */   hasShoppableElementsAndLinks: () => (/* binding */ hasShoppableElementsAndLinks),
/* harmony export */   hasSponsorshipElementsAndLinks: () => (/* binding */ hasSponsorshipElementsAndLinks),
/* harmony export */   hasWirewaxVideo: () => (/* binding */ hasWirewaxVideo),
/* harmony export */   updateBodyClassList: () => (/* binding */ updateBodyClassList)
/* harmony export */ });
/* harmony import */ var common_lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/lib/constants */ "../common/lib/constants/index.js");
/* harmony import */ var _constants_components_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/components.registry */ "./src/constants/components.registry.ts");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url */ "./src/utils/url.ts");



const PRODUCT_KEY_ATTRIBUTE = "product-key";
const CHANNEL_KEY_ATTRIBUTE = "product-channel-key";
const PRODUCT_SKU_ATTRIBUTE = "product-sku";
const SUPPRESS_WIDGET_OPENING = "suppress-widget-opening";
const PRODUCT_MERCHANDISE_ATTRIBUTES = "product-merchandise-attributes";
const SPONSORSHIP_ATTRIBUTE = "nbcu-checkout-sponsor";
const ANALYTICS_CUSTOM_ATTRIBUTES = "analytics-custom-attributes";
function getShoppableElements() {
    return document.querySelectorAll(`[data-${PRODUCT_KEY_ATTRIBUTE}][data-${CHANNEL_KEY_ATTRIBUTE}], [data-${PRODUCT_SKU_ATTRIBUTE}][data-${CHANNEL_KEY_ATTRIBUTE}]`);
}
const getShoppableElementsAndLinks = () => document.querySelectorAll(`[data-${PRODUCT_KEY_ATTRIBUTE}][data-${CHANNEL_KEY_ATTRIBUTE}], [data-${PRODUCT_SKU_ATTRIBUTE}][data-${CHANNEL_KEY_ATTRIBUTE}], [href*='${_url__WEBPACK_IMPORTED_MODULE_2__.PDP_LOCATION_HASH_PREFIX}']`);
const getSponsorshipElementsAndLinks = () => document.querySelectorAll(`[data-${SPONSORSHIP_ATTRIBUTE}]`);
const getIdentityScriptElements = 
const checkIsAnchorTagWithPdpPrefix = (element) => {
    var _a;
    return element.tagName === "A" &&
        Boolean((_a = element.getAttribute("href")) === null || _a === void 0 ? void 0 : _a.includes(_url__WEBPACK_IMPORTED_MODULE_2__.PDP_LOCATION_HASH_PREFIX));
};
function getShoppableProducts(iframeProducts) {
    const shoppableElsMarkedWithDataAttrs = Array.from(getShoppableElements()).map(a => {
        var _a, _b, _c;
        return ({
            productKey: ((_a = a.attributes.getNamedItem(`data-${PRODUCT_KEY_ATTRIBUTE}`)) === null || _a === void 0 ? void 0 : _a.value) ||
                "",
            channelKey: ((_b = a.attributes.getNamedItem(`data-${CHANNEL_KEY_ATTRIBUTE}`)) === null || _b === void 0 ? void 0 : _b.value) ||
                "",
            productSku: ((_c = a.attributes.getNamedItem(`data-${PRODUCT_SKU_ATTRIBUTE}`)) === null || _c === void 0 ? void 0 : _c.value) ||
                ""
        });
    });
    const shoppableAnchors = [];
    Array.from(getShoppableAnchors()).forEach((a) => {
        const queryString = a.href.split(`${_url__WEBPACK_IMPORTED_MODULE_2__.PDP_LOCATION_HASH_PREFIX}?`)[1];
        if (queryString) {
            const metadata = (0,_url__WEBPACK_IMPORTED_MODULE_2__.parseQuery)(queryString);
            if (metadata &&
                metadata["channel-key"] &&
                (metadata["product-key"] || metadata["product-sku"])) {
                shoppableAnchors.push({
                    channelKey: metadata["channel-key"],
                    productKey: metadata["product-key"],
                    productSku: metadata["product-sku"]
                });
            }
        }
    });
    const allShoppableElements = [
        ...shoppableElsMarkedWithDataAttrs,
        ...shoppableAnchors
    ];
    const queryString = window.location.hash.split(`${_url__WEBPACK_IMPORTED_MODULE_2__.PDP_LOCATION_HASH_PREFIX}?`)[1];
    if (queryString && allShoppableElements.length > 0) {
        const metadata = (0,_url__WEBPACK_IMPORTED_MODULE_2__.parseQuery)(queryString);
        if (metadata &&
            metadata["channel-key"] &&
            (metadata["product-key"] || metadata["product-sku"])) {
            allShoppableElements.push({
                channelKey: metadata["channel-key"],
                productKey: metadata["product-key"],
                productSku: metadata["product-sku"]
            });
        }
    }
    return allShoppableElements.concat(iframeProducts || []);
}
const hasShoppableElements = 
const hasShoppableElementsAndLinks = () => !!getShoppableElementsAndLinks().length;
const hasSponsorshipElementsAndLinks = 
const hasListacleElements = () => {
    return Array.from(getShoppableElementsAndLinks()).some(element => {
        const { contentType } = element.dataset;
        return (contentType !== common_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE.CCW && contentType !== common_lib_constants__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE.EPW);
    });
};
const hasWirewaxVideo = () => !!(document.querySelector(`iframe[src*="wirewax.com"]`) ||
    document.querySelector(`iframe[data-src*="wirewax.com"]`));
const updateBodyClassList = (isHidden) => {
    const isMobileScreen = document.body.clientWidth <= 768;
    const contains = document.body.classList.contains(_constants_components_registry__WEBPACK_IMPORTED_MODULE_1__.CLASS_NAME_FOR_SHOWN_WIDGET_ON_BODY);
    if (isHidden && contains) {
        document.body.classList.remove(_constants_components_registry__WEBPACK_IMPORTED_MODULE_1__.CLASS_NAME_FOR_SHOWN_WIDGET_ON_BODY);
        if (isMobileScreen) {
            const scrollY = document.body.style.top;
            document.body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
        }
    }
    if (!isHidden && !contains) {
        if (isMobileScreen) {
            document.body.style.top = `-${window.scrollY}px`;
        }
        document.body.classList.add(_constants_components_registry__WEBPACK_IMPORTED_MODULE_1__.CLASS_NAME_FOR_SHOWN_WIDGET_ON_BODY);
    }
};


/***/ }),

/***/ "./src/utils/eventLogger.ts":
/*!**********************************!*\
  !*** ./src/utils/eventLogger.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventLogger: () => (/* binding */ EventLogger)
/* harmony export */ });
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-hash */ "../../node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/lib/utils */ "../common/lib/utils/index.js");
var __decorate = (undefined && undefined.__decorate) || 
/* eslint-disable class-methods-use-this */


function logOnlyOnce(eventName) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        // eslint-disable-next-line no-param-reassign
        descriptor.value = function (...args) {
            const eventAttributes = Object.assign(Object.assign({}, args[0]), { eventName });
            const hashedAttributes = object_hash__WEBPACK_IMPORTED_MODULE_0___default()(eventAttributes);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (!this.uniqueEventStorage.has(hashedAttributes)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.uniqueEventStorage.add(hashedAttributes);
                originalMethod.apply(this, args);
            }
        };
        return descriptor;
    };
}
class EventLogger {
            logProductViewedEvent(attributes) {
        (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_1__.analyticsLogCustomEvent)("Product viewed" /* MParticleEvents.PRODUCT_VIEWED */, window.mParticle.EventType.Navigation, attributes);
    }
    logProductClickedEvent(attributes) {
        window.mParticle.logEvent("Product clicked" /* MParticleEvents.PRODUCT_CLICKED */, window.mParticle.EventType.UserPreference, attributes);
    }
    logIABImpressionEvent(attributes) {
        // eslint-disable-next-line no-param-reassign
        delete attributes.citrusAdId;
        window.mParticle.logEvent("IAB Impression" /* MParticleEvents.IAB_IMPRESSION */, window.mParticle.EventType.Navigation, attributes);
    }
    logSponsorClickedEvent(attributes) {
        window.mParticle.logEvent("Sponsor Clicked" /* MParticleEvents.SPONSOR_CLICKED */, window.mParticle.EventType.UserPreference, attributes);
    }
    logSponsorViewedEvent(attributes) {
        // eslint-disable-next-line no-param-reassign
        delete attributes.key;
        window.mParticle.logEvent("Sponsor Viewed" /* MParticleEvents.SPONSOR_VIEWED */, window.mParticle.EventType.Navigation, attributes);
    }
    logSponsorImpressionEvent(attributes) {
        // eslint-disable-next-line no-param-reassign
        delete attributes.key;
        window.mParticle.logEvent("Sponsor Impression" /* MParticleEvents.SPONSOR_IMPRESSION */, window.mParticle.EventType.Navigation, attributes);
    }
    logPageLoadEvent(attributes) {
        window.mParticle.logEvent("Shoppable page load" /* MParticleEvents.SHOPPABLE_PAGE_LOAD */, window.mParticle.EventType.Navigation, attributes);
    }
    logShoppableContentLoadedEvent(attributes) {
        window.mParticle.logEvent("Shoppable Content Load" /* MParticleEvents.SHOPPABLE_CONTENT_LOAD */, window.mParticle.EventType.Navigation, attributes);
    }
    logProductLoadedEvent(attributes) {
        (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_1__.analyticsLogCustomEvent)("Product loaded" /* MParticleEvents.PRODUCT_LOADED */, window.mParticle.EventType.Navigation, attributes);
    }
}
__decorate([
    logOnlyOnce("Product viewed" /* MParticleEvents.PRODUCT_VIEWED */)
], EventLogger.prototype, "logProductViewedEvent", null);
__decorate([
    logOnlyOnce("IAB Impression" /* MParticleEvents.IAB_IMPRESSION */)
], EventLogger.prototype, "logIABImpressionEvent", null);
__decorate([
    logOnlyOnce("Sponsor Viewed" /* MParticleEvents.SPONSOR_VIEWED */)
], EventLogger.prototype, "logSponsorViewedEvent", null);
__decorate([
    logOnlyOnce("Sponsor Impression" /* MParticleEvents.SPONSOR_IMPRESSION */)
], EventLogger.prototype, "logSponsorImpressionEvent", null);
__decorate([
    logOnlyOnce("Shoppable page load" /* MParticleEvents.SHOPPABLE_PAGE_LOAD */)
], EventLogger.prototype, "logPageLoadEvent", null);
__decorate([
    logOnlyOnce("Shoppable Content Load" /* MParticleEvents.SHOPPABLE_CONTENT_LOAD */)
], EventLogger.prototype, "logShoppableContentLoadedEvent", null);
__decorate([
    logOnlyOnce("Product loaded" /* MParticleEvents.PRODUCT_LOADED */)
], EventLogger.prototype, "logProductLoadedEvent", null);


/***/ }),

/***/ "./src/utils/expiration-date.ts":
/*!**************************************!*\
  !*** ./src/utils/expiration-date.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpirationDateCalculator: () => (/* binding */ ExpirationDateCalculator),
/* harmony export */   RenewalTimeUnit: () => (/* binding */ RenewalTimeUnit),
/* harmony export */   getExpirationDate: () => (/* binding */ getExpirationDate)
/* harmony export */ });
var RenewalTimeUnit;
(function (RenewalTimeUnit) {
    RenewalTimeUnit["Seconds"] = "seconds";
    RenewalTimeUnit["Minutes"] = "minutes";
    RenewalTimeUnit["Hours"] = "hours";
    RenewalTimeUnit["Days"] = "days";
})(RenewalTimeUnit || (RenewalTimeUnit = {}));
const DEFAULT_TIME_AMOUNT = 60;
const ExpirationDateCalculator = {
    [RenewalTimeUnit.Seconds]: (seconds) => {
        return Date.now() + seconds * 1000;
    },
    [RenewalTimeUnit.Minutes]: (minutes) => {
        return Date.now() + minutes * 1000 * 60;
    },
    [RenewalTimeUnit.Hours]: (hours) => {
        return Date.now() + hours * 1000 * 60 * 60;
    },
    [RenewalTimeUnit.Days]: (days) => {
        return Date.now() + days * 1000 * 60 * 60 * 24;
    }
};
const getExpirationDate = (popoverRenewalTimeUnit = RenewalTimeUnit.Days, popoverRenewalTimeAmount = DEFAULT_TIME_AMOUNT) => ExpirationDateCalculator[popoverRenewalTimeUnit](popoverRenewalTimeAmount);


/***/ }),

/***/ "./src/utils/identity.ts":
/*!*******************************!*\
  !*** ./src/utils/identity.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkInitializeIdentity: () => (/* binding */ checkInitializeIdentity),
/* harmony export */   initializeIdentity: () => (/* binding */ initializeIdentity)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const loadIdentityScript = (sdkUrl) => new Promise((resolve, reject) => {
    const identityScript = document.createElement("script");
    identityScript.setAttribute("src", sdkUrl);
    identityScript.onload = () => resolve(1);
    identityScript.onerror = err => reject(err);
    document.head.appendChild(identityScript);
});
const getIdentityInitializationParams = (configUrl) => {
    const lastSlashIndex = configUrl.lastIndexOf("/");
    const lastDotIndex = configUrl.lastIndexOf(".");
    const configLocationHost = configUrl.substring(0, lastSlashIndex);
    const key = configUrl.substring(lastSlashIndex + 1, lastDotIndex);
    if (!configLocationHost || !key) {
        throw new Error("USC: [Identity] Invalid configUrl param");
    }
    return { configLocationHost, key };
};
const checkInitializeIdentity = (identityConfig) => {
    var _a;
    const identityScriptElements = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getIdentityScriptElements)();
    return !!((identityConfig === null || identityConfig === void 0 ? void 0 : identityConfig.enabled) &&
        (identityConfig === null || identityConfig === void 0 ? void 0 : identityConfig.configUrl) &&
        (identityConfig === null || identityConfig === void 0 ? void 0 : identityConfig.sdkUrl) &&
        (identityConfig === null || identityConfig === void 0 ? void 0 : identityConfig.env) &&
        !((_a = window === null || window === void 0 ? void 0 : window.nbc) === null || _a === void 0 ? void 0 : _a.identity) &&
        !identityScriptElements.length);
};
const initializeIdentity = ({ configUrl, env, sdkUrl }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield loadIdentityScript(sdkUrl);
        const { configLocationHost, key } = getIdentityInitializationParams(configUrl);
        if ((_a = window === null || window === void 0 ? void 0 : window.nbc) === null || _a === void 0 ? void 0 : _a.identity) {
            window.nbc.identity.initialize(key, {
                checkoutEnabled: true,
                configLocationHost,
                env,
                useBaseSdkLocation: true
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});


/***/ }),

/***/ "./src/utils/loader.ts":
/*!*****************************!*\
  !*** ./src/utils/loader.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScriptQueryParams: () => (/* binding */ getScriptQueryParams),
/* harmony export */   loadAmazonPayScript: () => (/* binding */ loadAmazonPayScript),
/* harmony export */   loadCSS: () => (/* binding */ loadCSS),
/* harmony export */   loadContextualRecommendationsWidget: () => (/* binding */ loadContextualRecommendationsWidget),
/* harmony export */   loadContextualWidget: () => (/* binding */ loadContextualWidget),
/* harmony export */   loadDefaultConfig: () => (/* binding */ loadDefaultConfig),
/* harmony export */   loadEmbeddableProductsWidget: () => (/* binding */ loadEmbeddableProductsWidget),
/* harmony export */   loadPromisePolyfill: () => (/* binding */ loadPromisePolyfill),
/* harmony export */   loadWidget: () => (/* binding */ loadWidget)
/* harmony export */ });
/* harmony import */ var _constants_components_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/components.registry */ "./src/constants/components.registry.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const getScriptQueryParams = () => {
    var _a;
    const script = document.querySelector(`script[src*="${"bootstrap"}.js"]`);
    const src = (_a = script === null || script === void 0 ? void 0 : script.src) !== null && _a !== void 0 ? _a : "";
    const index = src.indexOf("?");
    return index !== -1 ? src.substring(index) : "";
};
const loadCSS = (url, id) => __awaiter(void 0, void 0, void 0, function* () {
    const params = getScriptQueryParams();
    return !document.getElementById(id)
        ? new Promise((resolve, reject) => {
            const linkEl = document.createElement("link");
            linkEl.href = `${url}${params}`;
            linkEl.rel = "stylesheet";
            linkEl.type = "text/css";
            linkEl.id = id;
            linkEl.onload = 
            linkEl.onerror = err => reject(err);
            document.head.appendChild(linkEl);
        })
        : Promise.resolve();
});
const loadWidget = (theme, networkBrand) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line import/extensions
        __webpack_require__.e(/*! import() */ "usc-widget_dist_usc_js").then(__webpack_require__.t.bind(__webpack_require__, /*! widget/usc.js */ "../usc-widget/dist/usc.js", 23)),
        loadCSS(`${"https://commerce.nbcuni.com/public/widget/latest"}/widget.css`, "usc-styles"),
        loadCSS(`${"https://commerce.nbcuni.com/public/api"}/v3/${networkBrand}/theme/${theme}`, "usc-theme-styles")
    ]).catch(err => {
        console.log("USC: can not load widget' css/js", err);
    });
});
const loadContextualWidget = (config) => __awaiter(void 0, void 0, void 0, function* () {
    const rootElements = document.querySelectorAll(`[${_constants_components_registry__WEBPACK_IMPORTED_MODULE_0__.CONTEXTUAL_WIDGET_DATA_ATTRIBUTE}]`);
    if (!rootElements.length) {
        return;
    }
    Promise.all([
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line import/extensions
        __webpack_require__.e(/*! import() */ "usc-contextual-widget_dist_uscContextualWidget_js").then(__webpack_require__.t.bind(__webpack_require__, /*! contextualWidget/uscContextualWidget.js */ "../usc-contextual-widget/dist/uscContextualWidget.js", 23)),
        loadCSS(`${"https://commerce.nbcuni.com/public/widget/latest"}/uscContextualWidget.css`, "usc-contextual-styles"),
        loadCSS(`${"https://commerce.nbcuni.com/public/api"}/v3/${config.networkBrand}/theme/${config.theme}`, "usc-theme-styles")
    ])
        .then(() => {
        if (window.uscContextualWidget) {
            window.uscContextualWidget.init(config, rootElements);
        }
    })
        .catch(err => {
        console.log("USC: can not load contextual widget' css/js", err);
    });
});
const loadAmazonPayScript = () => {
    const script = document.createElement("script");
    script.src = "https://static-na.payments-amazon.com/checkout.js";
    document.body.appendChild(script);
};
const loadContextualRecommendationsWidget = (config, recommendProducts, productsCount) => __awaiter(void 0, void 0, void 0, function* () {
    const rootElements = document.querySelectorAll(`[${_constants_components_registry__WEBPACK_IMPORTED_MODULE_0__.CONTEXTUAL_RECOMMENDS_WIDGET_DATA_ATTRIBUTE}]`);
    if (!rootElements.length) {
        return;
    }
    Promise.all([
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line import/extensions
        __webpack_require__.e(/*! import() */ "usc-contextual-widget_dist_uscContextualWidget_js").then(__webpack_require__.t.bind(__webpack_require__, /*! contextualWidget/uscContextualWidget.js */ "../usc-contextual-widget/dist/uscContextualWidget.js", 23)),
        loadCSS(`${"https://commerce.nbcuni.com/public/widget/latest"}/uscContextualWidget.css`, "usc-contextual-styles"),
        loadCSS(`${"https://commerce.nbcuni.com/public/api"}/v3/${config.networkBrand}/theme/${config.theme}`, "usc-theme-styles")
    ])
        .then(() => {
        if (window.uscContextualWidget) {
            const recommendationConfig = Object.assign(Object.assign({}, config), { recommendProducts,
                productsCount });
            window.uscContextualWidget.showRecommendations(recommendationConfig, rootElements);
        }
    })
        .catch(;
});
const loadEmbeddableProductsWidget = (config) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line import/extensions
        __webpack_require__.e(/*! import() */ "usc-embeddable-widget_dist_uscEmbeddableProductsWidget_js").then(__webpack_require__.t.bind(__webpack_require__, /*! embeddableWidget/uscEmbeddableProductsWidget.js */ "../usc-embeddable-widget/dist/uscEmbeddableProductsWidget.js", 23)),
        loadCSS(`${"https://commerce.nbcuni.com/public/widget/latest"}/uscEmbeddableProductsWidget.css`, "usc-embeddable-products-styles"),
        loadCSS(`${"https://commerce.nbcuni.com/public/api"}/v3/${config.networkBrand}/theme/${config.theme}`, "usc-theme-styles")
    ]);
});
const loadPromisePolyfill = () => {
    if (!("onunhandledrejection" in window)) {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            __webpack_require__.e(/*! import() */ "src_promise-polyfill_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ../promise-polyfill */ "./src/promise-polyfill.js", 23));
        }
        catch (e) {
            console.log("USC: can't load promise polyfill", e);
        }
    }
};
const loadDefaultConfig = (networkBrand = "nbcu-trial", theme = "some-name") => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = getScriptQueryParams();
        const response = yield fetch(`${"https://commerce.nbcuni.com/public/api"}/v3/${networkBrand}/theme/${theme}/config${params}`);
        const defaultConfig = yield response.json();
        return defaultConfig || {};
    }
    catch (error) {
        console.error("USC: fetch config failed.", error);
        return {};
    }
});


/***/ }),

/***/ "./src/utils/misc.ts":
/*!***************************!*\
  !*** ./src/utils/misc.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_Z_INDEX: () => (/* binding */ DEFAULT_Z_INDEX),
/* harmony export */   MAX_Z_INDEX: () => (/* binding */ MAX_Z_INDEX),
/* harmony export */   MIN_Z_INDEX: () => (/* binding */ MIN_Z_INDEX),
/* harmony export */   setZIndex: () => (/* binding */ setZIndex),
/* harmony export */   toRenewalTimeUnit: () => (/* binding */ toRenewalTimeUnit),
/* harmony export */   validateConfig: () => (/* binding */ validateConfig),
/* harmony export */   validateZIndex: () => (/* binding */ validateZIndex)
/* harmony export */ });
/* harmony import */ var common_lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/lib/constants */ "../common/lib/constants/index.js");

const MAX_Z_INDEX = 2147483647; // 2 ** 31 - 1;
const MIN_Z_INDEX = -MAX_Z_INDEX;
const DEFAULT_Z_INDEX = 99999999;
const validateZIndex = (zIndex) => {
    if (typeof zIndex !== "number") {
        return DEFAULT_Z_INDEX;
    }
    return Math.min(MAX_Z_INDEX, Math.max(MIN_Z_INDEX, zIndex));
};
const setZIndex = (zIndex) => {
    const css = document.createElement("style");
    css.innerHTML = `:root {--usc-outlet-z-index: ${zIndex};}`;
    document.body.appendChild(css);
};
const validateConfig = (config) => {
    var _a, _b;
    if (!((_a = config === null || config === void 0 ? void 0 : config.lang) === null || _a === void 0 ? void 0 : _a.startsWith("en")) && !((_b = config === null || config === void 0 ? void 0 : config.lang) === null || _b === void 0 ? void 0 : _b.startsWith("es"))) {
        return Object.assign(Object.assign({}, config), { lang: common_lib_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LANG });
    }
    return config;
};


/***/ }),

/***/ "./src/utils/personify.ts":
/*!********************************!*\
  !*** ./src/utils/personify.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SESSION_ID_PREFIX: () => (/* binding */ SESSION_ID_PREFIX),
/* harmony export */   getRecommendations: () => (/* binding */ getRecommendations),
/* harmony export */   getSessionId: () => (/* binding */ getSessionId)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SANDBOX_MODE = "public" !== "public";
const SESSION_ID_PREFIX = "usc_session_id";
const getSessionId = () => {
    var _a;
    if ((_a = window.mParticle) === null || _a === void 0 ? void 0 : _a.sessionManager) {
        return window.mParticle.sessionManager.getSession();
    }
    const randomId = Math.random().toString(36).substring(2);
    return `${SESSION_ID_PREFIX}:${randomId}`;
};
const getRecommendations = (recommendParams, sessionId, personifyApiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const tagsFilter = (_a = recommendParams === null || recommendParams === void 0 ? void 0 : recommendParams.tags) === null || _a === void 0 ? void 0 : _a.map(;
    const pageSize = recommendParams.limit * 2;
    const metaTag = document.querySelector("[name='sailthru.cid']");
    const recommendationBody = {
        sessionid: sessionId,
        pageSize,
        overrides: [
            {
                rule: "ALL",
                type: "limitCategories",
                items: tagsFilter
            }
        ],
        forcedetails: true,
        context: metaTag ? metaTag.getAttribute("content") : undefined,
        contexttype: metaTag ? 1 : undefined,
        test: SANDBOX_MODE,
        includescores: true
    };
    try {
        const request = yield fetch(`${personifyApiUrl}/getrecs`, {
            method: "POST",
            body: JSON.stringify(recommendationBody)
        });
        const response = yield request.json();
        return (response === null || response === void 0 ? void 0 : response.recommendations) || [];
    }
    catch (error) {
        console.error(error);
        return [];
    }
});


/***/ }),

/***/ "./src/utils/platform.ts":
/*!*******************************!*\
  !*** ./src/utils/platform.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIPhone: () => (/* binding */ isIPhone)
/* harmony export */ });
const isIPhone = 


/***/ }),

/***/ "./src/utils/shopping-cart.ts":
/*!************************************!*\
  !*** ./src/utils/shopping-cart.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatCartQuantity: () => (/* binding */ formatCartQuantity)
/* harmony export */ });
const formatCartQuantity = (itemsInCart) => itemsInCart > 99 ? "99+" : `${itemsInCart}`;


/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContentDataStorage: () => (/* binding */ getContentDataStorage),
/* harmony export */   getContextualProductsKeyStorage: () => (/* binding */ getContextualProductsKeyStorage),
/* harmony export */   setContentDataStorage: () => (/* binding */ setContentDataStorage)
/* harmony export */ });
/* harmony import */ var _constants_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/content */ "./src/constants/content.ts");

const USC_DATA_STORAGE_WRAPPER = "usc-data-storage";
const CONTENT_DATA_STORAGE = "contentData";
const PRODUCT_KEYS_STORAGE = "productKeys";
const CCW_PRODUCTS_STORAGE = "contextualProductsStorage";
const SPONSORSHIP_STORAGE = "sponsorshipStorage";
const getUscDataStorage = () => {
    if (typeof window === "undefined") {
        return {};
    }
    try {
        return (JSON.parse(localStorage.getItem(USC_DATA_STORAGE_WRAPPER)) || {});
    }
    catch (error) {
        console.log(error);
        return {};
    }
};
const setContentDataStorage = ({ name = "", type = "", pageSegmentName = "", products }) => {
    const initValue = (0,_constants_content__WEBPACK_IMPORTED_MODULE_0__.getDefaultContentData)();
    const prevUscWidgetData = getUscDataStorage();
    let uscWidgetData;
    switch (type) {
        case _constants_content__WEBPACK_IMPORTED_MODULE_0__.contextualContentData.contentType:
            uscWidgetData = Object.assign(Object.assign({}, prevUscWidgetData), { [CCW_PRODUCTS_STORAGE]: products || [] });
            break;
        case _constants_content__WEBPACK_IMPORTED_MODULE_0__.sponsorshipContentData.contentType:
            uscWidgetData = Object.assign(Object.assign({}, prevUscWidgetData), { [SPONSORSHIP_STORAGE]: {
                    pageSegmentName: pageSegmentName || null
                } });
            break;
        default:
            uscWidgetData = Object.assign(Object.assign({}, prevUscWidgetData), { [CONTENT_DATA_STORAGE]: {
                    contentType: type || initValue.contentType,
                    contentName: name || initValue.contentName
                }, [PRODUCT_KEYS_STORAGE]: [] });
    }
    localStorage.setItem(USC_DATA_STORAGE_WRAPPER, JSON.stringify(uscWidgetData));
};
const getContentDataStorage = () => {
    const initValue = (0,_constants_content__WEBPACK_IMPORTED_MODULE_0__.getDefaultContentData)();
    const uscData = getUscDataStorage();
    return (uscData === null || uscData === void 0 ? void 0 : uscData[CONTENT_DATA_STORAGE])
        ? uscData[CONTENT_DATA_STORAGE]
        : initValue;
};
const getContextualProductsKeyStorage = () => {
    if (typeof window === "undefined") {
        return [];
    }
    try {
        const uscWidgetData = JSON.parse(localStorage.getItem(USC_DATA_STORAGE_WRAPPER));
        return (uscWidgetData === null || uscWidgetData === void 0 ? void 0 : uscWidgetData[CCW_PRODUCTS_STORAGE])
            ? JSON.parse(uscWidgetData === null || uscWidgetData === void 0 ? void 0 : uscWidgetData[CCW_PRODUCTS_STORAGE])
            : [];
    }
    catch (error) {
        console.log(error);
        return [];
    }
};


/***/ }),

/***/ "./src/utils/url.ts":
/*!**************************!*\
  !*** ./src/utils/url.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AMAZON_CHECKOUT_HASH_PREFIX: () => (/* binding */ AMAZON_CHECKOUT_HASH_PREFIX),
/* harmony export */   AMAZON_CHECKOUT_REGEXP: () => (/* binding */ AMAZON_CHECKOUT_REGEXP),
/* harmony export */   AMAZON_CHECKOUT_SESSION_ID_QUERY_PARAM: () => (/* binding */ AMAZON_CHECKOUT_SESSION_ID_QUERY_PARAM),
/* harmony export */   CART_LOCATION_HASH_PREFIX: () => (/* binding */ CART_LOCATION_HASH_PREFIX),
/* harmony export */   IFRAME_MESSAGE_TYPE: () => (/* binding */ IFRAME_MESSAGE_TYPE),
/* harmony export */   INCOMING_MESSAGE_ERRORS: () => (/* binding */ INCOMING_MESSAGE_ERRORS),
/* harmony export */   ORDER_HISTORY_LOCATION_HASH_PREFIX: () => (/* binding */ ORDER_HISTORY_LOCATION_HASH_PREFIX),
/* harmony export */   ORDER_LOOKUP_LOCATION_HASH: () => (/* binding */ ORDER_LOOKUP_LOCATION_HASH),
/* harmony export */   PDP_LOCATION_HASH_PREFIX: () => (/* binding */ PDP_LOCATION_HASH_PREFIX),
/* harmony export */   SHOP_ALL_HASH_PREFIX: () => (/* binding */ SHOP_ALL_HASH_PREFIX),
/* harmony export */   START_A_RETURN_LOCATION_HASH: () => (/* binding */ START_A_RETURN_LOCATION_HASH),
/* harmony export */   USC_PREFIX: () => (/* binding */ USC_PREFIX),
/* harmony export */   clearLocationHash: () => (/* binding */ clearLocationHash),
/* harmony export */   isMessageExistKeys: () => (/* binding */ isMessageExistKeys),
/* harmony export */   parseQuery: () => (/* binding */ parseQuery)
/* harmony export */ });
const ORDER_LOOKUP_LOCATION_HASH = "#usc-order-lookup";
const START_A_RETURN_LOCATION_HASH = "#usc-start-a-return";
const ORDER_HISTORY_LOCATION_HASH_PREFIX = "#usc-order-history";
const PDP_LOCATION_HASH_PREFIX = "#usc-pdp";
const SHOP_ALL_HASH_PREFIX = "#usc-shop-all";
const CART_LOCATION_HASH_PREFIX = "#usc-cart";
const USC_PREFIX = "#usc";
const AMAZON_CHECKOUT_HASH_PREFIX = "#completeCheckout";
const AMAZON_CHECKOUT_SESSION_ID_QUERY_PARAM = "amazonCheckoutSessionId";
const AMAZON_CHECKOUT_REGEXP = new RegExp(`[\\?&]${AMAZON_CHECKOUT_SESSION_ID_QUERY_PARAM}=[^&]+`);
const INCOMING_MESSAGE_ERRORS = {
    wrongFormat: "Wrong data format. Please ensure that it contains following properties: data.product.key, data.channel.key"
};
const IFRAME_MESSAGE_TYPE = {
    product: "product",
    listOfProducts: "list_of_products",
    shoppableContentLoad: "shoppable_content_load",
    ccwShoppableContentLoaded: "ccw_shoppable_content_load",
    pageSegmentName: "page_segment_name_iframe_message_type"
};
function parseQuery(queryString) {
    const query = {};
    const pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
    for (let i = 0; i < pairs.length; i += 1) {
        const pair = pairs[i].split("=");
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
}
const clearLocationHash = () => {
    if (window.location.hash === ORDER_LOOKUP_LOCATION_HASH ||
        window.location.hash === START_A_RETURN_LOCATION_HASH ||
        window.location.hash.includes(ORDER_HISTORY_LOCATION_HASH_PREFIX) ||
        window.location.hash.includes(PDP_LOCATION_HASH_PREFIX) ||
        window.location.hash.includes(SHOP_ALL_HASH_PREFIX)) {
        window.history.pushState({}, "", window.location.pathname + window.location.search);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
};
const isMessageExistKeys = (message) => {
    var _a, _b, _c, _d, _e, _f;
    return (!!((_b = (_a = message.usc.data) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.sku) || !!((_d = (_c = message.usc.data) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.key)) &&
        !!((_f = (_e = message.usc.data) === null || _e === void 0 ? void 0 : _e.channel) === null || _f === void 0 ? void 0 : _f.key);
};


/***/ }),

/***/ "./src/version.ts":
/*!************************!*\
  !*** ./src/version.ts ***!
  \************************/
/***/ (() => {

"use strict";

console.info(`%c Widget version: ${"4cd26f0"}`, "color: green;");
console.info(`%c Widget branch: ${"HEAD"}`, "color: green;");


/***/ }),

/***/ "../common/lib/constants/analytics.js":
/*!********************************************!*\
  !*** ../common/lib/constants/analytics.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANALYTICS_MESSAGES: () => (/* binding */ ANALYTICS_MESSAGES),
/* harmony export */   AnalyticEvents: () => (/* binding */ AnalyticEvents),
/* harmony export */   CONTENT_TYPE: () => (/* binding */ CONTENT_TYPE),
/* harmony export */   CustomEventType: () => (/* binding */ CustomEventType)
/* harmony export */ });
var AnalyticEvents;
(function (AnalyticEvents) {
    AnalyticEvents["SPONSOR_CLICKED"] = "Sponsor Clicked";
    AnalyticEvents["SPONSOR_VIEWED"] = "Sponsor Viewed";
    AnalyticEvents["SPONSOR_IMPRESSION"] = "Sponsor Impression";
    AnalyticEvents["SHOPPABLE_CONTENT_LOAD"] = "Shoppable Content Load";
})(AnalyticEvents || (AnalyticEvents = {}));
const CONTENT_TYPE = {
    EPW: "Embeddable Products Widget",
    CCW: "Contextual Commerce Widget"
};
var CustomEventType;
((CustomEventType || (CustomEventType = {}));
const ANALYTICS_MESSAGES = {
    analyticsLogCustomEvent: {
        info: "USC: [mParticle] analyticsLogCustomEvent not sent.",
        error: "USC: [mParticle] analyticsLogCustomEvent error sending event."
    },
    analyticsLogImpression: {
        info: "USC: [mParticle] analyticsLogImpression not sent.",
        error: "USC: [mParticle] analyticsLogImpression error sending event."
    },
    analyticsLogProductAction: {
        info: "USC: [mParticle] analyticsLogProductAction not sent.",
        error: "USC: [mParticle] analyticsLogProductAction error sending event."
    },
    analyticsLogLineItemAction: {
        info: "USC: [mParticle] analyticsLogLineItemAction not sent.",
        error: "USC: [mParticle] analyticsLogLineItemAction error sending event."
    },
    analyticsLogCheckoutOption: {
        info: "USC: [mParticle] analyticsLogCheckoutOption not sent.",
        error: "USC: [mParticle] analyticsLogCheckoutOption error sending event."
    },
    analyticsLogPurchase: {
        info: "USC: [mParticle] analyticsLogPurchase not sent.",
        error: "USC: [mParticle] analyticsLogPurchase error sending event."
    },
    analyticsModifyIdentity: {
        info: "USC: [mParticle] analyticsModifyIdentity not sent.",
        error: "USC: [mParticle] analyticsModifyIdentity error sending event."
    }
};


/***/ }),

/***/ "../common/lib/constants/config.js":
/*!*****************************************!*\
  !*** ../common/lib/constants/config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenewalTimeUnit: () => (/* binding */ RenewalTimeUnit),
/* harmony export */   Theme: () => (/* binding */ Theme),
/* harmony export */   USCTab: () => (/* binding */ USCTab)
/* harmony export */ });
var USCTab;
((USCTab || (USCTab = {}));
var RenewalTimeUnit;
((RenewalTimeUnit || (RenewalTimeUnit = {}));
var Theme;
((Theme || (Theme = {}));


/***/ }),

/***/ "../common/lib/constants/content.js":
/*!******************************************!*\
  !*** ../common/lib/constants/content.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultContentData: () => (/* binding */ getDefaultContentData)
/* harmony export */ });
const DEFAULT_CONTENT_TYPE = "Web Page";
const getDefaultContentData = () => {
    var _a;
    if ((_a = window.uscWidget.config) === null || _a === void 0 ? void 0 : _a.getDefaultContentData) {
        const { contentName, contentType, sponsorName } = window.uscWidget.config.getDefaultContentData();
        const contentData = {
            contentName,
            contentType
        };
        if (sponsorName) {
            contentData.sponsorName = sponsorName;
        }
        return contentData;
        // eslint-disable-next-line no-else-return
    }
    else {
        return {
            contentName: document.title,
            contentType: DEFAULT_CONTENT_TYPE
        };
    }
};


/***/ }),

/***/ "../common/lib/constants/index.js":
/*!****************************************!*\
  !*** ../common/lib/constants/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANALYTICS_MESSAGES: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.ANALYTICS_MESSAGES),
/* harmony export */   AnalyticEvents: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticEvents),
/* harmony export */   CONTENT_TYPE: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.CONTENT_TYPE),
/* harmony export */   CustomEventType: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.CustomEventType),
/* harmony export */   DEFAULT_LANG: () => (/* binding */ DEFAULT_LANG),
/* harmony export */   MerchandisedDataType: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_2__.MerchandisedDataType),
/* harmony export */   RenewalTimeUnit: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_3__.RenewalTimeUnit),
/* harmony export */   Theme: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_3__.Theme),
/* harmony export */   USCTab: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_3__.USCTab),
/* harmony export */   enTranslations: () => (/* reexport safe */ _translations__WEBPACK_IMPORTED_MODULE_4__.enTranslations),
/* harmony export */   esTranslations: () => (/* reexport safe */ _translations__WEBPACK_IMPORTED_MODULE_4__.esTranslations),
/* harmony export */   getDefaultContentData: () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_1__.getDefaultContentData)
/* harmony export */ });
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "../common/lib/constants/analytics.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "../common/lib/constants/content.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "../common/lib/constants/product.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "../common/lib/constants/config.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations */ "../common/lib/constants/translations/index.js");
const DEFAULT_LANG = "en-us";







/***/ }),

/***/ "../common/lib/constants/product.js":
/*!******************************************!*\
  !*** ../common/lib/constants/product.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MerchandisedDataType: () => (/* binding */ MerchandisedDataType)
/* harmony export */ });
var MerchandisedDataType;
(function (MerchandisedDataType) {
    MerchandisedDataType["VG"] = "VG";
    MerchandisedDataType["S"] = "S";
    MerchandisedDataType["P"] = "P";
})(MerchandisedDataType || (MerchandisedDataType = {}));


/***/ }),

/***/ "../common/lib/constants/translations/en-US/translation.js":
/*!*****************************************************************!*\
  !*** ../common/lib/constants/translations/en-US/translation.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enTranslations: () => (/* binding */ enTranslations)
/* harmony export */ });
const enTranslations = {
    tabs: {
        shop_all: "Shop All",
        product: "Product",
        cart: "Cart",
        checkout: "Checkout",
        order_lookup: "Order Lookup",
        order_history: "My Orders",
        order_details: "Order Details",
        start_a_return: "Start a Return"
    },
    common: {
        final_sale: "Final Sale",
        no_image: "No Image",
        or: "or",
        sold_by: "Sold by"
    },
    errors: {
        out_of_stock: "Out of Stock",
        variant_not_available: "Not Available. Please choose another option.",
        line_item_is_not_available: "Item is not available",
        reduce_qty: "Sorry, only {{qty}} is available. Please reduce your QTY.",
        inventory_alert: "Sorry, an item(s) in your cart is no longer available. Please update the item(s) to proceed.",
        email_required: "Email Address is required",
        email_invalid: "Please enter a valid Email Address",
        first_name_required: "First Name is required",
        last_name_required: "Last Name is required",
        address_required: "Street Address is required",
        city_required: "City is required",
        state_required: "State is required",
        state_is_not_supported: "Continental U.S. only",
        zip_code_required: "Please enter your Zip Code",
        zip_code_invalid: "Please enter a valid Zip Code",
        applepay_zipcode_invalid: "Zip code is invalid",
        applepay_state_invalid: "Sorry, we are only shipping to the 48 continental U.S. States.",
        applepay_country_invalid: "Sorry, we are unable to ship outside the United States.",
        applepay_name_invalid: "Sorry, name must be less than 255 characters.",
        applepay_phone_invalid: "Please enter a valid 10-11 digits Phone Number",
        phone_number_required: "Phone Number is required",
        phone_number_invalid: "Please enter a valid Phone Number",
        card_number_required: "Please enter a valid credit card number",
        card_number_invalid: "Please enter a valid credit card number",
        exp_date_required: "Please enter a valid expiration date",
        exp_date_invalid: "Please enter a valid expiration date",
        cvv_required: "CVV is required",
        cvv_invalid: "Please enter a valid CVV",
        cart_inventory_alert: "Sorry, an item(s) in your cart is no longer available. Please update the item(s) to proceed.",
        generic_alert: "Whoops, looks like something went wrong. Try again",
        invalid_zip_code_alert: "Please enter a valid zip code",
        payment_transaction_declined_alert: "Your payment was declined. Please check your information and try again or contact your financial institution.",
        invalid_state: "Sorry, we are unable to ship to {{state}}. We are only shipping to the 48 continental U.S. States.",
        paypal_place_order: "Your PayPal payment was declined. Please check your information and try again or contact customer service for assistance.",
        price_has_changed: '"{{name}}" product price has been changed. Please remove it from the cart and add it again',
        cart_has_expired: "Sorry your shopping cart has been expired. Click to clear cart and continue shopping. ",
        invalid_address_info: "Billing/Shipping address details are not fully specified.",
        sandbox_mode: "SANDBOX MODE ({{env}})"
    },
    pdp: {
        sold_by: "Sold by",
        quantity: "Quantity",
        qty: "Qty",
        free_standard_shipping: "Free Standard Shipping",
        free_standard_shipping_description: "Free Standard shipping only applies to the 48 continental U.S. States.",
        free_standard_shipping_description_excludes: "Excludes Alaska, Hawaii, American Samoa, U.S. Virgin Islands, Northern Mariana Islands, Guam, and Puerto Rico",
        "30_days_return": "30 Days Return",
        "30_days_return_description_p1": "Items are eligible",
        "30_days_return_description_p2": "for return within 30 days of purchase*",
        "30_days_return_description_p3": "provided they meet the",
        "30_days_return_description_p4": "Guidelines",
        "30_days_return_description_return_policy_ref_text": "Returns Policy",
        final_sale: "Final Sale",
        final_sale_description: "Final sales are NOT eligible for returns or exchanges.",
        final_sale_description_return_policy_ref_text: "View Policy",
        product_description: "Product Description",
        add_to_cart: "Add to Cart",
        back_in_stock: "Notify Me When Back In Stock",
        notify_me: "Notify me",
        please_select: "Please select",
        option: "option",
        select: "Select",
        item_added_to_cart: "Item added to cart.",
        view_checkout: "Checkout",
        view_cart: "View Cart",
        continue_shopping: "Continue Shopping",
        oops: "Oops!",
        not_found: "We can't seem to find the page you're looking for",
        try_smth_else: "We are on it! In the mean time, please feel free to browse other content. Thank you for your patience",
        price: "Price",
        see_more: "Load More",
        custom_attribute_max_length_error: "{{maxLength}} characters max.",
        custom_attribute_valid_characters: "Please use valid characters",
        custom_attribute_empty_error: "Value is required",
        click_to_zoom: "click to zoom",
        pinch_to_zoom: "pinch to zoom"
    },
    cart: {
        empty_cart: "Your cart is empty.",
        empty_cart_description: "Looks like you haven’t added any items to your cart yet.",
        start_shopping: "Start Shopping",
        sku: "SKU",
        subtotal: "Subtotal",
        shipping: "Shipping",
        shipping_description: "Shipping only to the 48 continental U.S. States.",
        shipping_exclude_states: "Excludes Alaska, Hawaii, American Samoa, U.S. Virgin Islands, Northern Mariana Islands, Guam, and Puerto Rico.",
        taxes: "Taxes",
        taxes_estimate: "Estimate",
        zip_code: "Zip code",
        zip_code_input_placeholder: "Enter Zip Code",
        apply_button_text: "apply",
        total: "Total",
        checkout: "Checkout",
        zip_code_required: "Please enter your Zip Code",
        zip_code_invalid: "Please enter a valid Zip Code"
    },
    checkout: {
        shipping_tbd: "TBD",
        shipping_free: "Free",
        order_summary: "Order Summary",
        email: "Email Address",
        subscribe_to_newsletter_first: "Share my email with ",
        subscribe_to_newsletter_retailer: "retailers",
        subscribe_to_newsletter_second: " of items in my cart to receive ",
        subscribe_to_newsletter_third: "promotions & exclusive content ",
        subscribe_to_newsletter_fourth: "from them.",
        shipping_address: "Shipping Address",
        save_as_primary_address: "Save as your primary address?",
        first_name: "First Name",
        last_name: "Last Name",
        address: "Address",
        apt_suite_floor: "Apt/Suite/Floor (Optional)",
        city: "City",
        state: "State",
        zip_code: "Zip Code",
        phone_number: "Phone number",
        shipping_method: "Shipping Method",
        shipment: "Shipment {{index}} of {{total}}",
        save_payment_info: {
            title: "Save Payment Info",
            label: "Save my payment information for a faster checkout"
        },
        update_payment_method: "Update as primary payment method?",
        update_billing_address: "Update as primary billing address?",
        shipped_by: "Shipped by",
        multiple_shipment: "Multiple Shipments",
        shipping_method_std: "Standard Delivery (3-5 days)",
        shipping_method_std_label: "Standard",
        shipping_method_exp: "Express Delivery (1-2 days)",
        shipping_method_exp_label: "Express",
        shipping_method_nex: "Next day delivery (ordered before 5pm EST)",
        shipping_method_nex_label: "Next Day Delivery",
        shipping_method_pro: "Estimated shipment in May 2023",
        shipping_method_pro_label: "Preorder",
        shipping_method_2dy: "2 Day Shipping",
        shipping_method_2dy_label: "Two Day",
        shipping_method_10bd: "Standard delivery (10 business days)",
        shipping_method_10bd_label: "TODAY Deals: Standard",
        shipping_method_std_blue_acorn: "Standard delivery (1-2 weeks)",
        shipping_method_std_blue_acorn_label: "Standard",
        shipping_method_bo_label: "Backorder",
        shipping_method_default: "Description not found",
        shipping_method_default_label: "No label",
        payment: "Payment",
        card_number: "Card Number",
        expiration_date: "Exp:MM/YY",
        cvv: "CVV",
        payment_method: "Payment Method",
        billing_address: "Billing Address",
        use_same_shipping_address: "Use same as shipping address",
        credit_card_security_code: "Credit Card Security Code",
        visa_mastercard_discover: "Visa, Mastercard, Discover",
        cvv_explanation_1: "The last 3-digits printed on the back of the card is the security code.",
        american_express: "American Express",
        cvv_explanation_2: "The 4-digit security code is printed on the front of the card.",
        expiration_date_label: "Exp",
        charged: "Charged",
        summary: "Summary",
        continue: "Continue",
        continue_to_shipping: "Continue To Shipping",
        continue_to_payment: "Continue To Payment",
        place_order: "Place Order",
        placing_order_agree: "By placing your order you agree to the",
        review_order: "Review Order",
        consent_message_checkout_method: "By selecting a method,",
        consent_message_first: "I agree to the",
        consent_message_and: "and",
        consent_message_terms_of_use: "Terms of Use",
        consent_message_privacy_policy: "Privacy Policy",
        sailthru_consent_message: "I accept that NBCUniversal may send me marketing messages.",
        transaction_processing_first: "Please wait while we process your transaction",
        transaction_processing_second: "Do not hit back or refresh",
        customer_information: "Customer Information",
        edit: "Edit",
        remove: "Remove",
        credit_debit_card: "Credit/Debit Card",
        checkout_method: "Checkout Method"
    },
    thank_you: {
        thank_you: "Thank you.",
        your_order_has_been_placed: "Your order has been placed.",
        order_number: "Order Number",
        confirmation_email_description: "A confirmation email has been sent to you. If the email hasn’t arrived within two minutes, please check your spam folder to see if the email was routed there."
    },
    footer: {
        customer_service: "Customer Service",
        track_my_order: "Track My Order",
        shipping_and_returns: "Shipping & Returns",
        start_a_return: "Start a Return",
        faq: "FAQs",
        customer_terms_and_conditions: "Terms & Conditions",
        privacy_policy: "Privacy Policy"
    },
    order_lookup: {
        title: "Order Lookup",
        description: "To begin enter your email address",
        submit_button_text: "Submit",
        check_your_email: "Check your inbox",
        email: "Email",
        post_submit_msg_1: "Your order history has been emailed to you. Click on the link within your email to manage your orders.",
        post_submit_msg_2: "If the email hasn’t arrived within two minutes. Please check your spam folder to see if the email was routed there."
    },
    start_a_return: {
        title: "Start a Return"
    },
    order_history: {
        no_orders_title: "No Orders Found",
        no_orders_description: "We couldn't find any orders under the email you provided",
        no_orders_confirmation: "Please confirm you are entering the right email and try again or contact customer service for assistance.",
        send_another_link: "Send mе another link",
        my_orders_title: "My orders",
        track: "Track",
        return: "Return",
        order_details: "Order details",
        track_message_not_available: "Tracking Number is not available",
        track_message_will_be_available: "Tracking will be available once Shipped",
        order_status_open: "Open",
        order_status_shipped: "Shipped",
        order_status_processing: "Processing",
        order_status_completed: "Completed",
        order_status_cancelled: "Cancelled",
        order_status_refunded: "Refunded",
        expired_link_title: "Your link has expired",
        expired_link_description: "Links are only valid for 2 hrs. If you wish to continue to manage your orders, you can request another link."
    },
    order_details: {
        placed_on: "Placed on"
    },
    identity: {
        log_in: "Log In",
        sign_up: "Sign Up",
        sign_out: "Sign Out",
        go_back: "Return to Checkout"
    },
    epw: {
        buy_now: "Buy Now",
        sold_out: "Sold Out"
    },
    ccw: {
        buy_now: "Shop Now",
        sold_out: "Sold Out"
    }
};


/***/ }),

/***/ "../common/lib/constants/translations/es-US/translation.js":
/*!*****************************************************************!*\
  !*** ../common/lib/constants/translations/es-US/translation.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   esTranslations: () => (/* binding */ esTranslations)
/* harmony export */ });
const esTranslations = {
    tabs: {
        shop_all: "Vistazo",
        product: "Producto",
        cart: "Carrito",
        checkout: "Proceder al pago",
        order_lookup: "Buscar orden",
        order_history: "Mis órdenes",
        order_details: "Detalles",
        start_a_return: "Empezar una Devolución"
    },
    common: {
        final_sale: "Venta final",
        no_image: "Sin imágen",
        or: "o",
        sold_by: "Vendido por"
    },
    errors: {
        out_of_stock: "Agotado",
        variant_not_available: "No está disponible. Porfavor escoja otra opcion.",
        line_item_is_not_available: "Artículo no disponible",
        reduce_qty: "Lo sentimos, solo hay {{qty}} disponible. Por favor, reduce la cantidad",
        inventory_alert: "Lo sentimos, un artículo ya no está disponible. Por favor, elimina el artículo de tu carrito para continuar.",
        email_required: "Se necesita un correo electrónico",
        email_invalid: "Ingresa una dirección de correo electrónico válida",
        first_name_required: "Se necesita un nombre",
        last_name_required: "Se necesita un apellido",
        address_required: "Se necesita una dirección de la calle",
        city_required: "Se necesita una ciudad",
        state_required: "Se necesita un estado",
        state_is_not_supported: "Solo EE. UU. Continental",
        zip_code_required: "Se necesita un código postal",
        zip_code_invalid: "Se necesita un código postal válido",
        applepay_zipcode_invalid: "El código postal no es válido.",
        applepay_state_invalid: "Lo sentimos, solo hacemos envíos a los 48 estados continentales de EE. UU.",
        applepay_country_invalid: "Lo sentimos, no podemos hacer envíos fuera de los Estados Unidos.",
        applepay_name_invalid: "Lo sentimos, el nombre debe tener menos de 255 caracteres.",
        applepay_phone_invalid: "Por favor ingrese un número de teléfono válido de 10-11 dígitos.",
        phone_number_required: "Se necesita un número de teléfono",
        phone_number_invalid: "Ingresa un número de teléfono válido",
        card_number_required: "Se necesita un número de tarjeta",
        card_number_invalid: "Ingresa un número de tarjeta válido",
        exp_date_required: "Ingresa una fecha de vencimiento válida",
        exp_date_invalid: "Ingresa una fecha de vencimiento válida",
        cvv_required: "Se necesita un número de CVV",
        cvv_invalid: "Ingresa un número de CVV válido",
        cart_inventory_alert: "Lo sentimos, un artículo ya no está disponible. Por favor, elimina el artículo de tu carrito para continuar.",
        generic_alert: "Parece que algo salió mal. Por favor, vuelve a intentarlo",
        invalid_zip_code_alert: "Ingresa un código postal válido",
        payment_transaction_declined_alert: "El pago fue rechazado. Por favor, verifique su información e intente nuevamente o contacta a tu institución financiera.",
        invalid_state: "Lo sentimos, no podemos enviar a {{state}}. Solo enviamos a los 48 estados continentales de EE. UU.",
        paypal_place_order: "Tu pago de PayPal fue rechazado. Verifica tu información e intenta nuevamente o comunícate con el servicio al cliente para asistencia.",
        price_has_changed: '"{{name}}" product price has been changed. Please remove it from the cart and add it again',
        cart_has_expired: "Lo sentimos, su tarjeta de compras ha caducado. ",
        invalid_address_info: "Detalles sobre dirección de cobro/envío no están totalmente especificados.",
        sandbox_mode: "MODO SANDBOX ({{env}})"
    },
    pdp: {
        sold_by: "Vendido por",
        quantity: "Cantidad",
        qty: "Cant",
        free_standard_shipping: "Envío estándar gratis",
        free_standard_shipping_description: "El envío estándar gratuito solo se aplica a los 48 estados continentales de EE. UU.",
        free_standard_shipping_description_excludes: "Excluye Alaska, Hawái, Samoa Americana, Islas Vírgenes de EE. UU., Islas Marianas del Norte, Guam y Puerto Rico.",
        "30_days_return": "Devolución en 30 días",
        "30_days_return_description_p1": "Los artículos se pueden devolver dentro de los",
        "30_days_return_description_p2": "30 días de haber realizado la compra*",
        "30_days_return_description_p3": "siempre y cuando cumplan con las",
        "30_days_return_description_p4": "",
        "30_days_return_description_return_policy_ref_text": "reglas de la política de devolución",
        final_sale: "Venta final",
        final_sale_description: "Las ventas finales NO se pueden devolver o cambiar.",
        final_sale_description_return_policy_ref_text: "Ver política",
        product_description: "Descripción del producto",
        add_to_cart: "Agregar al carrito",
        back_in_stock: "Notificarme",
        notify_me: "Notificarme",
        please_select: "Seleccione",
        option: "la opción",
        select: "Seleccione",
        item_added_to_cart: "Artículo agregado al carrito.",
        view_checkout: "Proceder al pago",
        view_cart: "Ver carrito",
        continue_shopping: "Continuar a comprar",
        oops: "¡Uy!",
        not_found: "Parece que no podemos encontrar la página que estás buscando.",
        try_smth_else: "Estamos investigando esto. Mientras tanto, puedes intentar con otro contenido. Gracias por tu paciencia.",
        price: "Precio",
        see_more: "Carga Más",
        click_to_zoom: "",
        pinch_to_zoom: ""
    },
    cart: {
        empty_cart: "Tu carrito está vacío.",
        empty_cart_description: "Parece que todavía no has agregado ningún artículo a tu carrito.",
        start_shopping: "Empezar a comprar",
        sku: "SKU",
        subtotal: "Subtotal",
        shipping: "Envío",
        shipping_description: "Envíos solo a los 48 estados continentales de EE. UU.",
        shipping_exclude_states: "Excluye Alaska, Hawái, Samoa Americana, Islas Vírgenes de los Estados Unidos, Islas Marianas del Norte, Guam y Puerto Rico.",
        taxes: "Impuestos",
        taxes_estimate: "Estimado",
        zip_code: "Código postal",
        zip_code_input_placeholder: "Ingresa el código postal ",
        apply_button_text: "Continuar",
        total: "Total",
        checkout: "Proceder al pago",
        zip_code_required: "Ingresa el código postal",
        zip_code_invalid: "Ingresa un código postal válido"
    },
    checkout: {
        shipping_tbd: "TBD",
        shipping_free: "Gratis",
        order_summary: "Resumen de la orden",
        email: "Correo electrónico",
        subscribe_to_newsletter_first: "Compartir mi email con los ",
        subscribe_to_newsletter_retailer: "minoristas",
        subscribe_to_newsletter_second: " de los artículos en mi carrito para recibir ",
        subscribe_to_newsletter_third: " promociones y contenido exclusivo ",
        subscribe_to_newsletter_fourth: "de ellos.",
        shipping_address: "Dirección de envío",
        first_name: "Nombre",
        last_name: "Apellido",
        address: "Dirección",
        apt_suite_floor: "Apt., suite, unidad, edificio (opcional)",
        city: "Ciudad",
        state: "Estado",
        zip_code: "Código postal",
        phone_number: "Número de teléfono",
        shipping_method: "Método de envío",
        shipment: "Envío {{index}} de {{total}}",
        shipped_by: "Enviado por",
        multiple_shipment: "Envío múltiple",
        shipping_method_std: "(3-5 dias)",
        shipping_method_std_label: "Envío estándar",
        shipping_method_exp: "(1-2 dias)",
        shipping_method_exp_label: "Envío Express",
        shipping_method_nex: "ordenado antes 5 pm EST",
        shipping_method_nex_label: "Entrega al día siguiente",
        shipping_method_pro: "Envío estimado en Mayo 2023",
        shipping_method_pro_label: "Preorder",
        shipping_method_2dy: "envío en 2 días",
        shipping_method_2dy_label: "dos días",
        shipping_method_10bd: "Entrega estándar (10 dias habiles)",
        shipping_method_10bd_label: "TODAY Ofertas: Estándar",
        shipping_method_std_blue_acorn: "(1-2 semanas)",
        shipping_method_std_blue_acorn_label: "Entrega estándar",
        shipping_method_default: "Descripción no encontrada",
        shipping_method_default_label: "Sin etiqueta",
        payment: "Pago",
        card_number: "Número de tarjeta",
        expiration_date: "Exp:MM/YY",
        cvv: "CVV",
        billing_address: "Dirección de facturación",
        use_same_shipping_address: "Utilizar la misma dirección de envío",
        credit_card_security_code: "Código de seguridad de la tarjeta",
        visa_mastercard_discover: "Visa, Mastercard, Discover",
        cvv_explanation_1: "El código de seguridad de 3 dígitos está impreso en la parte de atrás de la tarjeta.",
        american_express: "American Express",
        cvv_explanation_2: "El código de seguridad de 4 dígitos está impreso en el frente de la tarjeta.",
        expiration_date_label: "Vence",
        charged: "Facturado",
        summary: "Resumen",
        continue: "Continuar",
        continue_to_shipping: "Proceder al envío",
        continue_to_payment: "Proceder al Pago",
        place_order: "Finalizar Compra",
        placing_order_agree: "Al realizar su pedido, usted acepta los",
        review_order: "Resumen de Tu Pedido",
        transaction_processing_first: "Por favor espera mientras procesamos tu transacción",
        transaction_processing_second: "No trates de regresar ni refresques la página",
        consent_message_checkout_method: "Al seleccionar un método de pago,",
        consent_message_first: "Acepto los",
        consent_message_and: "y la",
        consent_message_terms_of_use: "términos de uso",
        consent_message_privacy_policy: "política de privacidad",
        sailthru_consent_message: "Acepto que NBCUniversal me mande mensajes de promoción.",
        customer_information: "Información de el cliente",
        edit: "Editar",
        remove: "Remover",
        checkout_method: "Actualizar Carrito",
        credit_debit_card: "Tarjeta de Crédito/Débito"
    },
    thank_you: {
        thank_you: "Gracias.",
        your_order_has_been_placed: "Tu orden ha sido realizada.",
        order_number: "Número de orden",
        confirmation_email_description: "Se te ha enviado un correo electrónico de confirmación. Si el correo electrónico no ha llegado en dos minutos, verifica tu correo no deseado para ver si el correo electrónico está allí."
    },
    footer: {
        customer_service: "Servicio al cliente",
        track_my_order: "Rastrear mi orden",
        shipping_and_returns: "Envíos y devoluciones",
        start_a_return: "Empezar una devolución",
        faq: "Preguntas frecuentes",
        customer_terms_and_conditions: "Términos y condiciones",
        privacy_policy: "Política de privacidad"
    },
    order_lookup: {
        title: "Buscar orden",
        description: "Primero ingresa tu dirección de correo electrónico",
        submit_button_text: "Continuar",
        check_your_email: "Revisa tu correo electrónico",
        email: "Correo electrónico",
        post_submit_msg_1: "Tu historial de órdenes ha sido enviado por correo electrónico. Haz clic en el enlace que te llegó a tu correo electrónico para revisar tus órdenes.",
        post_submit_msg_2: "Si el correo electrónico no te llegó dentro de dos minutos, por favor revisa tu carpeta de spam para ver si el correo electrónico se fue allí."
    },
    start_a_return: {
        title: "Empezar una Devolución"
    },
    order_history: {
        no_orders_title: "No se encontró la orden",
        no_orders_description: "No pudimos encontrar ninguna orden con el correo electrónico que ingresaste",
        no_orders_confirmation: "Por favor, confirma que ingresaste el correo electrónico correcto e intenta de nuevo o comunícate con el servicio al cliente para obtener ayuda.",
        send_another_link: "Envíame otro enlace",
        my_orders_title: "Mis órdenes",
        track: "Rastrear",
        return: "Devolver",
        order_details: "Detalles de la orden",
        track_message_not_available: "El número de rastreo no está disponible",
        track_message_will_be_available: "El rastreo estará disponible una vez que haya sido enviado",
        order_status_open: "ES: Open",
        order_status_shipped: "Enviado",
        order_status_processing: "Procesando",
        order_status_completed: "Realizado",
        order_status_cancelled: "Cancelada",
        order_status_refunded: "Reembolsada",
        expired_link_title: "Tu enlace ha expirado",
        expired_link_description: "Los enlaces solo son válidos por 2 horas. Si deseas continuar revisando tus órdenes, puedes solicitar otro enlace."
    },
    order_details: {
        placed_on: "Realizada el"
    },
    identity: {
        log_in: "Iniciar sesión",
        sign_up: "Inscribirse",
        sign_out: "Desconectar",
        go_back: "Volver a la caja"
    },
    epw: {
        buy_now: "Comprar",
        sold_out: "Agotado"
    },
    ccw: {
        buy_now: "Comprar",
        sold_out: "Agotado"
    }
};


/***/ }),

/***/ "../common/lib/constants/translations/index.js":
/*!**** var _es_US_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es-US/translation */ "../common/lib/constants/translations/es-US/translation.js");




/***/ }),

/***/ Context)
/* harmony export */ });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "../common/lib/contexts/lang.js");



/***/ }),

/***/ "../common/lib/contexts/lang.js":
/*!**************************************!*\
  !*** ../common/lib/contexts/lang.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangContext: () => (/* binding */ LangContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../common/lib/utils/index.js");


const LangContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(_utils__WEBPACK_IMPORTED_MODULE_1__.FALLBACK_LANG);


/***/ }),

/***/ "../common/lib/hooks/index.js":
/*!************************************!*\
  !*** ../common/lib/hooks/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInViewport: () => (/* reexport safe */ _useInViewPort__WEBPACK_IMPORTED_MODULE_0__.useInViewport),
/* harmony export */   useSponsorEvents: () => (/* reexport safe */ _useSponsorEvents__WEBPACK_IMPORTED_MODULE_1__.useSponsorEvents),
/* harmony export */   useTranslation: () => (/* reexport safe */ _useTranslation__WEBPACK_IMPORTED_MODULE_2__.useTranslation)
/* harmony export */ });
/* harmony import */ var _useInViewPort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useInViewPort */ "../common/lib/hooks/useInViewPort.js");
/* harmony import */ var _useSponsorEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSponsorEvents */ "../common/lib/hooks/useSponsorEvents.js");
/* harmony import */ var _useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTranslation */ "../common/lib/hooks/useTranslation.js");





/***/ }),

/***/ "../common/lib/hooks/useInViewPort.js":
/*!********************************************!*\
  !*** ../common/lib/hooks/useInViewPort.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInViewport: () => (/* binding */ useInViewport)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "../../node_modules/lodash-es/noop.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");


const useInViewport = (ref) => {
    const [isInViewport, setIsInViewport] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const observer = (0,react__WEBf (typeof IntersectionObserver === "undefined") {
            return null;
        }
        return new IntersectionObserver(([entry]) => setIsInViewport(entry.isIntersecting));
    }, []);
    const unobserve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (ref.current) {
            setIsInViewport(false);
            observer === null || observer === void 0 ? void 0 : observer.unobserve(ref.current);
        }
    }, [observer, ref]);
    // eslint-disable-next-line consistent-return
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (ref.current) {
            observer === null || observer === void 0 ? void 0 : observer.observe(ref.current);
            return () => {
                observer === null || observer === void 0 ? void 0 : observer.disconnect();
            };
        }
        return lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"];
    }, [ref, observer]);
    return { isInViewport, unobserve };
};


/***/ }),

/***/ "../common/lib/hooks/useSponsorEvents.js":
/*!***********************************************!*\
  !*** ../common/lib/hooks/useSponsorEvents.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSponsorEvents: () => (/* binding */ useSponsorEvents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _useInViewPort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useInViewPort */ "../common/lib/hooks/useInViewPort.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../common/lib/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../common/lib/constants/index.js");




const useSponsorEvents = (ref, analyticsCustomAttributes, isSponsored) => {
    const { isInViewport, unobserve } = (0,_useInViewPort__WEBPACK_IMPORTED_MODULE_1__.useInViewport)(ref);
    const analyticsAttributes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (!analyticsCustomAttributes) {
            return undefined;
        }
        return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseAnalyticsCustomAttributes)(analyticsCustomAttributes);
    }, [analyticsCustomAttributes]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isSponsored) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.analyticsLogCustomEvent)(_constants__WEBPACK_IMPORTED_MODULE_3__.AnalyticEvents.SPONSOR_IMPRESSION, _constants__WEBPACK_IMPORTED_MODULE_3__.CustomEventType.Navigation, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getSponsorEventAttributes)(analyticsAttributes));
        }
    }, [analyticsCustomAttributes, analyticsAttributes, isSponsored]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isSponsored && ref.current && isInViewport) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_2__.analyticsLogCustomEvent)(_constants__WEBPACK_IMPORTED_MODULE_3__.AnalyticEvents.SPONSOR_VIEWED, _constants__WEBPACK_IMPORTED_MODULE_3__.CustomEventType.Navigation, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getSponsorEventAttributes)(analyticsAttributes));
            unobserve();
        }
    }, [
        analyticsCustomAttributes,
        analyticsAttributes,
        isInViewport,
        isSponsored,
        ref,
        unobserve
    ]);
};


/***/ }),

/***/ "../common/lib/hooks/useTranslation.js":
/*!*********************************************!*\
  !*** ../common/lib/hooks/useTranslation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTranslation: () => (/* binding */ useTranslation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "../../node_modules/lodash-es/get.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts */ "../common/lib/contexts/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../common/lib/constants/index.js");




const useTranslation = () => {
    const lang = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.LangContext);
    const getTranslateConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((option = "", params = {}) => {
        let str = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(lang.toLocaleLowerCase().startsWith("es")
            ? _constants__WEBPACK_IMPORTED_MODULE_2__.esTranslations
            : _constants__WEBPACK_IMPORTED_MODULE_2__.enTranslations, option, "");
        Object.keys(params || {}).forEach(key => {
            const regex = new Reg;
        });
        return str;
    }, [lang]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        locale: lang,
        t: getTranslateConfig
    }), [getTranslateConfig, lang]);
};


/***/ }),

/***/ "../common/lib/index.js":
/*!******************************!*\
  !*** ../common/lib/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANALYTICS_MESSAGES: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.ANALYTICS_MESSAGES),
/* harmony export */   AnalyticEvents: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.AnalyticEvents),
/* harmony export */   Analytics: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Analytics),
/* harmony export */   CONTENT_TYPE: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.CONTENT_TYPE),
/* harmony export */   CTImageSize: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.CTImageSize),
/* harmony export */   CustomEventType: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.CustomEventType),
/* harmony export */   DEFAULT_LANG: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_LANG),
/* harmony export */   FALLBACK_LANG: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.FALLBACK_LANG),
/* harmony export */   MerchandisedDataType: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.MerchandisedDataType),
/* harmony export */   OptimizelyEvents: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.OptimizelyEvents),
/* harmony export */   RenewalTimeUnit: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.RenewalTimeUnit),
/* harmony export */   Theme: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.Theme),
/* harmony export */   USCTab: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.USCTab),
/* harmony export */   UTM_CAMPAIGN: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_CAMPAIGN),
/* harmony export */   UTM_CAMPAIGN_UC: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_CAMPAIGN_UC),
/* harmony export */   UTM_CONTENT: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_CONTENT),
/* harmony export */   UTM_CONTENT_UC: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_CONTENT_UC),
/* harmony export */   UTM_MEDIUM: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_MEDIUM),
/* harmony export */   UTM_MEDIUM_UC: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_MEDIUM_UC),
/* harmony export */   UTM_PROGRAM: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_PROGRAM),
/* harmony export */   UTM_SOURCE: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_SOURCE),
/* harmony export */   UTM_SOURCE_UC: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_SOURCE_UC),
/* harmony export */   UTM_TERM: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.UTM_TERM),
/* harmony export */   addOptimizelyEvent: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.addOptimizelyEvent),
/* harmony export */   analyticsEnabled: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.analyticsEnabled),
/* harmony export */   analyticsLogCustomEvent: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.analyticsLogCustomEvent),
/* harmony export */   analyticsLogError: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.analyticsLogError),
/* harmony export */   analyticsOnEPWShoppableContentLoad: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.analyticsOnEPWShoppableContentLoad),
/* harmony export */   enTranslations: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.enTranslations),
/* harmony export */   esTranslations: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.esTranslations),
/* harmony export */   formatPriceValue: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.formatPriceValue),
/* harmony export */   formatProductData: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.formatProductData),
/* harmony export */   getAnalyticsCustomAttributes: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getAnalyticsCustomAttributes),
/* harmony export */   getAnalyticsMiraklProductCategoriesAttributes: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getAnalyticsMiraklProductCategoriesAttributes),
/* harmony export */   getCTImageUrl: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getCTImageUrl),
/* harmony export */   getDefaultContentData: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.getDefaultContentData),
/* harmony export */   getMerchandiseDataAttributes: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getMerchandiseDataAttributes),
/* harmony export */   getObjectFromEntries: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getObjectFromEntries),
/* harmony export */   getPageSlug: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getPageSlug),
/* harmony export */   getProductsKeyStorage: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getProductsKeyStorage),
/* harmony export */   getShoppableMomentId: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getShoppableMomentId),
/* harmony export */   getSponsorEventAttributes: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getSponsorEventAttributes),
/* harmony export */   getSponsorshipDataStorage: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getSponsorshipDataStorage),
/* harmony export */   getUtmParams: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getUtmParams),
/* harmony export */   parseAnalyticsCustomAttributes: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.parseAnalyticsCustomAttributes),
/* harmony export */   saveProductKeyStorage: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.saveProductKeyStorage),
/* harmony export */   useInViewport: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useInViewport),
/* harmony export */   useSponsorEvents: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useSponsorEvents),
/* harmony export */   useTranslation: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.useTranslation)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../common/lib/utils/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "../common/lib/hooks/index.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "../common/lib/interfaces/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../common/lib/constants/index.js");






/***/ }),

/***/ "../common/lib/interfaces/analytics.js":
/*!*********************************************!*\
  !*** ../common/lib/interfaces/analytics.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../common/lib/interfaces/configs.js":
/*!*******************************************!*\
  !*** ../common/lib/interfaces/configs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../common/lib/interfaces/embeddableProductsWidgetApi.js":
/*!***************************************************************!*\
  !*** ../common/lib/interfaces/embeddableProductsWidgetApi.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../common/lib/interfaces/index.js":
/*!*****************************************!*\
  !*** ../common/lib/interfaces/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configs */ "../common/lib/interfaces/configs.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "../common/lib/interfaces/product.js");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics */ "../common/lib/interfaces/analytics.js");
/* harmony import */ var _sponsorship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponsorship */ "../common/lib/interfaces/sponsorship.js");
/* harmony import */ var _embeddableProductsWidgetApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./embeddableProductsWidgetApi */ "../common/lib/interfaces/embeddableProductsWidgetApi.js");







/***/ }),

/***/ "../common/lib/interfaces/product.js":
/*!*******************************************!*\
  !*** ../common/lib/interfaces/product.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../common/lib/interfaces/sponso************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../common/lib/service/axiosConfig.js":
/*!********************************************!*\
  !*** ../common/lib/service/axiosConfig.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../common/node_modules/axios/lib/axios.js");

const apiInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://commerce.nbcuni.com/public/api"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiInstance);


/***/ }),

/***/ "../common/lib/service/citrus/index.js":
/*!*********************************************!*\
  !*** ../common/lib/service/citrus/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trackCitrusClick: () => (/* binding */ trackCitrusClick),
/* harmony export */   trackCitrusImpression: () => (/* binding */ trackCitrusImpression)
/* harmony export */ });
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axiosConfig */ "../common/lib/service/axiosConfig.js");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endpoints */ "../common/lib/service/endpoints.js");


const trackCitrusImpression = (networkBrand, adId) => _axiosConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_endpoints__WEBPACK_IMPORTED_MODULE_1__.DB_ENDPOINTS.Citrus_Impression(networkBrand, adId));
const trackCitrusClick = (networkBrand, adId) => _axiosConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_endpoints__WEBPACK_IMPORTED_MODULE_1__.DB_ENDPOINTS.Citrus_Click(networkBrand, adId));


/***/ }),

/***/ "../common/lib/service/endpoints.js":
/*!******************************************!*\
  !*** ../common/lib/service/endpoints.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DB_ENDPOINTS: () =*/ });
const DB_ENDPOINTS = {
    PRODUCTS_LIST: (networkBrand) => `/v3/${networkBrand}/products/list`,
    PRODUCTS_BY_QUERY: (networkBrand) => `/v3/${networkBrand}/products`,
    MERCHANDISED_PRODUCTS: (networkBrand, collectionKey) => `/v3/${networkBrand}/petworkBrand, adId) => `/v3/${networkBrand}/citrus-ad/report-impression/${adId}`,
    Citrus_Click: (networkBrand, adId) => `/v3/${networkBrand}/citrus-ad/report-click/${adId}`
};


/***/ }),

/***/ "../common/lib/service/index.js":
/*!**************************************!*\
  !*** ../common/lib/service/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMerchandisedProducts: () => (/* reexport safe */ _products__WEBPACK_IMPORTED_MODULE_1__.getMerchandisedProducts),
/* harmony export */   getProductByQuery: () => (/* reexport safe */ _products__WEBPACK_IMPORTED_MODULE_1__.getProductByQuery),
/* harmony export */   getProducts: () => (/* reexport safe */ _products__WEBPACK_IMPORTED_MODULE_1__.getProducts),
/* harmony export */   trackCitrusClick: () => (/* reexport safe */ _citrus__WEBPACK_IMPORTED_MODULE_0__.trackCitrusClick),
/* harmony export */   trackCitrusImpression: () => (/* reexport safe */ _citrus__WEBPACK_IMPORTED_MODULE_0__.trackCitrusImpression)
/* harmony export */ });
/* harmony import */ var _citrus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citrus */ "../common/lib/service/citrus/index.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "../common/lib/service/products/index.js");




/***/ }),

/***/ "../common/lib/service/products/index.js":
/*!***********************************************!*\
  !*** ../common/lib/service/products/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMerchandisedProducts: () => (/* binding */ getMerchandisedProducts),
/* harmony export */   getProductByQuery: () => (/* binding */ getProductByQuery),
/* harmony export */   getProducts: () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../axiosConfig */ "../common/lib/service/axiosConfig.js");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endpoints */ "../common/lib/service/endpoints.js");


const getProducts = (networkBrand, params) => {
    return _axiosConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_endpoints__WEBPACK_IMPORTED_MODULE_1__.DB_ENDPOINTS.PRODUCTS_LIST(networkBrand), {
        params: Object.assign({}, params)
    });
};
const getProductByQuery = (networkBrand, params
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return _axiosConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_endpoints__WEBPACK_IMPORTED_MODULE_1__.DB_ENDPOINTS.PRODUCTS_BY_QUERY(networkBrand), {
        params: Object.assign({}, params)
    });
};
const getMerchandisedProducts = (networkBrand, categoryKey, params, locale = "en-US") => {
    var _a, _b;
    return _axiosConfig__WEBPACK_IMPORTED_MODULE_0__["default"]
        .get(_endpoints__WEBPACK_IMPORTED_MODULE_1__.DB_ENDPOINTS.MERCHANDISED_PRODUCTS(networkBrand, categoryKey), {
        params: Object.assign({ locale, perPage: 300, mParticleSessiondow.mParticle) || _a === void 0 ? void 0 : _a.sessionManager) === null || _b === void 0 ? void 0 : _b.getSession() }, params)
    })
        .then(({ data }) => data)
        .catch(() => []);
};


/***/ }),

/***/ "../common/lib/utils/analytics.js":
/*!****************************************!*\
  !*** ../common/lib/utils/analytics.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizelyEvents: () => (/* binding */ OptimizelyEvents),
/* harmony export */   UTM_CAMPAIGN: () => (/* binding */ UTM_CAMPAIGN),
/* harmony export */   UTM_CAMPAIGN_UC: () => (/* binding */ UTM_CAMPAIGN_UC),
/* harmony export */   UTM_CONTENT: () => (/* binding */ UTM_CONTENT),
/* harmony export */   UTM_CONTENT_UC: () => (/* binding */ UTM_CONTENT_UC),
/* harmony export */   UTM_MEDIUM: () => (/* binding */ UTM_MEDIUM),
/* harmony export */   UTM_MEDIUM_UC: () => (/* binding */ UTM_MEDIUM_UC),
/* harmony export */   UTM_PROGRAM: () => (/* binding */ UTM_PROGRAM),
/* harmony export */   UTM_SOURCE: () => (/* binding */ UTM_SOURCE),
/* harmony export */   UTM_SOURCE_UC: () => (/* binding */ UTM_SOURCE_UC),
/* harmony export */   UTM_TERM: () => (/* binding */ UTM_TERM),
/* harmony export */   addOptimizelyEvent: () => (/* binding */ addOptimizelyEvent),
/* harmony export */   analyticsEnabled: () => (/* binding */ analyticsEnabled),
/* harmony export */   analyticsLogCustomEvent: () => (/* binding */ analyticsLogCustomEvent),
/* harmony export */   analyticsLogError: () => (/* binding */ analyticsLogError),
/* harmony export */   analyticsOnEPWShoppableContentLoad: () => (/* binding */ analyticsOnEPWShoppableContentLoad),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAnalyticsCustomAttributes: () => (/* binding */ getAnalyticsCustomAttributes),
/* harmony export */   getAnalyticsMiraklProductCategoriesAttributes: () => (/* binding */ getAnalyticsMiraklProductCategoriesAttributes),
/* harmony export */   getPageSlug: () => (/* binding */ getPageSlug),
/* harmony export */   getShoppableMomentId: () => (/* binding */ getShoppableMomentId),
/* harmony export */   getSponsorEventAttributes: () => (/* binding */ getSponsorEventAttributes),
/* harmony export */   getUtmParams: () => (/* binding */ getUtmParams),
/* harmony export */   parseAnalyticsCustomAttributes: () => (/* binding */ parseAnalyticsCustomAttributes)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ "../common/lib/utils/general.js");
/* harmony import */ var _constants_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/content */ "../common/lib/constants/content.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../common/lib/constants/index.js");



const UTM_SOURCE = "utm_source";
const UTM_MEDIUM = "utm_medium";
const UTM_CAMPAIGN = "utm_campaign";
const UTM_SOURCE_UC = "utm_source_uc";
const UTM_MEDIUM_UC = "utm_medium_uc";
const UTM_CAMPAIGN_UC = "utm_campaign_uc";
const UTM_PROGRAM = "utm_program_uc";
const UTM_TERM = "utm_term";
const UTM_CONTENT = "utm_content";
const UTM_CONTENT_UC = "utm_content_uc";
const SHOPPABLE_MOMENT_ID = "shoppableMomentId";
var OptimizelyEvents;
(function (OptimizelyEvents) {
    OptimizelyEvents["REVENUE"] = "trackRevenue";
    OptimizelyEvents["ORDERS"] = "orders";
    OptimizelyEvents["ITEMS"] = "items";
})(OptimizelyEvents || (OptimizelyEvents = {}));
function getUtmParams() {
    const urlSearchParams = (0,_general__WEBPACK_IMPORTED_MODULE_0__.getObjectFromEntries)(Array.from(new URLSearchParams(window.location.search).entries()));
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (urlSearchParams[UTM_SOURCE] && {
        [UTM_SOURCE]: urlSearchParams[UTM_SOURCE]
    })), (urlSearchParams[UTM_MEDIUM] && {
        [UTM_MEDIUM]: urlSearchParams[UTM_MEDIUM]
    })), (urlSearchParams[UTM_CAMPAIGN] && {
        [UTM_CAMPAIGN]: urlSearchParams[UTM_CAMPAIGN]
    })), (urlSearchParams[UTM_PROGRAM] && {
        [UTM_PROGRAM]: urlSearchParams[UTM_PROGRAM]
    })), (urlSearchParams[UTM_TERM] && {
        [UTM_TERM]: urlSearchParams[UTM_TERM]
    })), (urlSearchParams[UTM_CONTENT] && {
        [UTM_CONTENT]: urlSearchParams[UTM_CONTENT]
    })), (urlSearchParams[UTM_CAMPAIGN_UC] && {
        [UTM_CAMPAIGN_UC]: urlSearchParams[UTM_CAMPAIGN_UC]
    })), (urlSearchParams[UTM_SOURCE_UC] && {
        [UTM_SOURCE_UC]: urlSearchParams[UTM_SOURCE_UC]
    })), (urlSearchParams[UTM_MEDIUM_UC] && {
        [UTM_MEDIUM_UC]: urlSearchParams[UTM_MEDIUM_UC]
    })), (urlSearchParams[UTM_CONTENT_UC] && {
        [UTM_CONTENT_UC]: urlSearchParams[UTM_CONTENT_UC]
    }));
}
function getShoppableMomentId() {
    var _a;
    const url = new URL(window.location.href);
    const shoppableMomentId = decodeURIComponent((_a = url.searchParams.get(SHOPPABLE_MOMENT_ID)) !== null && _a !== void 0 ? _a :   if (shoppableMomentId) {
        return { shoppableMomentId };
    }
    return {};
}
const getPageSlug = (str) => {
    var _a;
    const arr = str.split("/").filter(e => e);
    return (_a = arr[arr.length - 1]) !== null && _a !== void 0 ? _a : "";
};
const getAnalyticsCustomAttributes = (analyticsData) => Object.entries(analyticsData)
    .map(([key, value]) => `${key}:$n(";");
const parseAnalyticsCustomAttributes = (attributes) => (0,_general__WEBPACK_IMPORTED_MODULE_0__.getObjectFromEntries)(attributes.split(";").map(pair => pair.split(":")));
const getSponsorEventAttributes = (parsedAnalyticsDataAttributes) => {
    const pageSlug = getPageSlug(window.location.pathname);
    const pageName = document.title;
    const domain = window.location.host;
    const url = window.location.toString();
    const { contentName, contentType } = (0,_constants_content__WEBPACK_IMPORTED_MODULE_1__.getDefaultContentData)();
    return Object.assign(Object.assign({ contentName,
        contentType,
        pageSlug,
        pageName,
        domain,
        url }, parsedAnalyticsDataAttributes), getShoppableMomentId());
};
const addOptimizelyEvent = (eventName, value) => {
    window.optimizely = window.optimizely || [];
    const tags = eventName === OptimizelyEvents.REVENUE
        ? {
            revenue: value
        }
        : { value };
    window.optimizely.push({
        type: "event",
        eventName,
        tags
    });
};
const analyticsLogError = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
error, attrs) => {
    if (!window.mParticle) {
        console.log("USC: [mParticle] analyticsLogError not sent.");
        return;
    }
    try {
        // https://docs.mparticle.com/developers/sdk/web/core-apidocs/classes/mParticle%20&%20mParticleInstance.html#method_logError
        window.mParticle.logError(error, Object.assign({ sourceUrl attrs));
    }
    catch (e) {
        console.error("USC: [mParticle] analyticsLogError error sending event.", e);
    }
};
const analyticsEnabled = () => !!window.mParticle;
const analyticsLogCustomEvent = (name, type, attributes) => {
    if (!analyticsEnabled()) {
        console.log(_constants__WEBPACK_IMPORTED_MODULE_2__.ANALYTICS_MESSAGES.analyticsLogCustomEvent.info);
        return;
    }
    const customFlags = {
        "Facebook.EventSourceUrl": window.location.href
    };
    try {
        // https://docs.mparticle.com/developers/sdk/web/core-apidocs/classes/mParticle%20&%20mParticleInstance.html#method_logEvent
        window.mParticle.logEvent(name, type, attributes, customFlags);
    }
    catch (e) {
        console.error(_constants__WEBPACK_IMPORTED_MODULE_2__.ANALYTICS_MESSAGES.analyticsLogCustomEvent.error, e);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getUtmParams,
    getPageSlug,
    analyticsLogError,
    UTM_SOURCE,
    UTM_MEDIUM,
    UTM_CAMPAIGN,
    UTM_PROGRAM
});
const analyticsOnEPWShoppableContentLoad = (contentType) => {
    analyticsLogCustomEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.AnalyticEvents.SHOPPABLE_CONTENT_LOAD, _constants__WEBPACK_IMPORTED_MODULE_2__.CustomEventType.Navigation, Object.assign(Object.assign({}, getSponsorEventAttributes()), { contentType }));
};
const getAnalyticsMiraklProductCategoriesAttributes = (miraklCategories) => {
    var _a;
    const categoriesKeys = ((_a = miraklCategories === null || miraklCategories === void 0 ? void 0 : miraklCategories.find(category => category.miraklCategoriesKeys)) === null || _a === void 0 ? void 0 : _a.miraklCategoriesKeys) || [];
    return categoriesKeys.reduce((prevCategoryKey, categoryKey, index) => (Object.assign(Object.assign({}, prevCategoryKey), { [`L${index + 1}_category`]: categoryKey })), {});
};


/***/ }),

/***/ "../common/lib/utils/general.js":
/*!**************************************!*\
  !*** ../common/lib/utils/general.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getObjectFromEntries: () => (/* binding */ getObjectFromEntries)
/* harmony export */ });
const getObjectFromEntries = (entries) => entries.reduce((obj, [key, value]) => {
    return Object.assign(Object.assign({}, obj), { [key]: value });
}, {});


/***/ }),

/***/ "../common/lib/utils/index.js":
/*!************************************!*\
  !*** ../common/lib/utils/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpackharmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   CTImageSize: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_2__.CTImageSize),
/* harmony export */   FALLBACK_LANG: () => (/* reexport safe */ _lang__WEBPACK_IMPORTED_MODULE_4__.FALLBACK_LANG),
/* harmony export */   OptimizelyEvents: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.OptimizelyEvents),
/* harmony export */   UTM_CAMPAIGN: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_CAMPAIGN),
/* harmony export */   UTM_CAMPAIGN_UC: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_CAMPAIGN_UC),
/* harmony export */   UTM_CONTENT: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_CONTENT),
/* harmony export */   UTM_CONTENT_UC: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_CONTENT_UC),
/* harmony export */   UTM_MEDIUM: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_MEDIUM),
/* harmony export */   UTM_MEDIUM_UC: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_MEDIUM_UC),
/* harmony export */   UTM_PROGRAM: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_PROGRAM),
/* harmony export */   UTM_SOURCE: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_SOURCE),
/* harmony export */   UTM_SOURCE_UC: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_SOURCE_UC),
/* harmony export */   UTM_TERM: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.UTM_TERM),
/* harmony export */   addOptimizelyEvent: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.addOptimizelyEvent),
/* harmony export */   analyticsEnabled: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.analyticsEnabled),
/* harmony export */   analyticsLogCustomEvent: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.analyticsLogCustomEvent),
/* harmony export */   analyticsLogError: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.analyticsLogError),
/* harmony export */   analyticsOnEPWShoppableContentLoad: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.analyticsOnEPWShoppableContentLoad),
/* harmony export */   formatPriceValue: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_2__.formatPriceValue),
/* harmony export */   formatProductData: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_2__.formatProductData),
/* harmony export */   getAnalyticsCustomAttributes: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.getAnalyticsCustomAttributes),
/* harmony export */   getAnalyticsMiraklProductCategoriesAttributes: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.getAnalyticsMiraklProductCategoriesAttributes),
/* harmony export */   getCTImageUrl: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_2__.getCTImageUrl),
/* harmony export */   getMerchandiseDataAttributes: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_2__.getMerchandiseDataAttributes),
/* harmony export */   getObjectFromEntries: () => (/* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_3__.getObjectFromEntries),
/* harmony export */   getPageSlug: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.getPageSlug),
/* harmony export */   getProductsKeyStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_1__.getProductsKeyStorage),
/* harmony export */   getShoppableMomentId: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.getShoppableMomentId),
/* harmony export */   getSponsorEventAttributes: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.getSponsorEventAttributes),
/* harmony export */   getSponsorshipDataStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_1__.getSponsorshipDataStorage),
/* harmony export */   getUtmParams: () => (/* reexport safe */ _analytics__WEBPACK_IMPORTED_MODULE_0__.getUtmParams),
/* harmony export */   pa0__.parseAnalyticsCustomAttributes),
/* harmony export */   saveProductKeyStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_1__.saveProductKeyStorage)
/* harmony export */ });
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "../common/lib/utils/analytics.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "../common/lib/utils/localStorage.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "../common/lib/utils/product.js");
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general */ "../common/lib/utils/general.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lang */ "../common/lib/utils/lang.js");








/***/ }),

/***/ "../common/lib/utils/lang.js":
/*!***********************************!*\
  !*** ../common/lib/utils/lang.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FALLBACK_LANG: () => (/* binding */ FALLBACK_LANG)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../common/lib/constants/index.js");

const FALLBACK_LANG = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LANG;


/***/ }),

/***/ "../common/lib/utils/localStorage.js":
/*!*******************************************!*\
  !*** ../common/lib/utils/localStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProductsKeyStorage: () => (/* binding */ getProductsKeyStorage),
/* harmony export */   getSponsorshipDataStorage: () => (/* binding */ getSponsorshipDataStorage),
/* harmony export */   saveProductKeyStorage: () => (/* binding */ saveProductKeyStorage)
/* harmony export */ });
const USC_DATA_STORAGE_WRAPPER = "usc-data-storage";
const PRODUCT_KEYS_STORAGE = "productKeys";
const SPONSORSHIP_STORAGE = "sponsorshipStorage";
const saveProductKeyStorage = (productKey) => {
    let uscWidgetData;
    try {
        uscWidgetData =
            JSON.parse(localStorage.getItem(USC_DATA_STORAGE_WRAPPER)) || {};
    }
    catch (error) {
        console.log(error);
        uscWidgetData = {};
    }
    let productKeys = (uscWidgetData === null || uscWidgetData === void 0 ? void 0 : uscWidgetData[PRODUCT_KEYS_STORAGE]) || [];
    productKeys = Array.from(new Set([...productKeys, productKey]));
    uscWidgetData[PRODUCT_KEYS_STORAGE] = productKeys;
    localStorage.setItem(USC_DATA_STORAGE_WRAPPER, JSON.stringify(uscWidgetData));
};
const getProductsKeyStorage = () => {
    if (typeof window === "undefined") {
        return [];
    }
    try {
        const uscWidgetData = JSON.parse(localStorage.getItem(USC_DATA_STORAGE_WRAPPER));
        return (uscWidgetData === null || uscWidgetData === void 0 ? void 0 : uscWidgetData[PRODUCT_KEYS_STORAGE])
            ? uscWidgetData === null || uscWidgetData === void 0 ? void 0 : uscWidgetData[PRODUCT_KEYS_STORAGE]
            : [];
    }
    catch (error) {
        console.log(error);
        return [];
    }
};
const getSponsorshipDataStorage = () => {
    const initValue = {
        pageSegmentName: null
    };
    if (typeof window === "undefined") {
        return initValue;
    }
    try {
        const uscData = JSON.parse(localStorage.getItem(USC_DATA_STORAGE_WRAPPER));
        return (uscData === null || uscData === void 0 ? void 0 : uscData[SPONSORSHIP_STORAGE])
            ? uscData[SPONSORSHIP_STORAGE]
            : initValue;
    }
    catch (error) {
        console.log(error);
        return initValue;
    }
};


/***/ }),

/***/ "../common/lib/utils/product.js":
/*!**************************************!*\
  !*** ../common/lib/utils/product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTImageSize: () => (/* binding */ CTImageSize),
/* harmony export */   formatPriceValue: () => (/* binding */ formatPriceValue),
/* harmony export */   formatProductData: () => (/* binding */ formatProductData),
/* harmony export */   getCTImageUrl: () => (/* binding */ getCTImageUrl),
/* harmony export */   getMerchandiseDataAttributes: () => (/* binding */ getMerchandiseDataAttributes)
/* harmony export */ });
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics */ "../common/lib/utils/analytics.js");

const fromCentAmountToDecimal = (centAmount = 0, fractionDigits = 2) => (centAmount / 100).toFixed(fractionDigits);
const formatPriceValue = (price, lang = "en-US") => {
    const cy: "USD"
    });
};
var CTImageSize;
(function (CTImageSize) {
    CTImageSize["Small"] = "small";
    CTImageSize["Medium"] = "medium";
    CTImageSize["Large"] = "large";
})(CTImageSize || (CTImageSize = {}));
const imgExtension = ["jpeg", "jpg", "png", "bmp", "gif"];
const getCTImageUrl = (imgUrl, size) => {
    const indexOfDot = imgUrl.lastIndexOf(".");
    const url = imgUrl.slice(0, indexOfDot);
    const ext = imgUrl.slice(indexOfDot + 1);
    return imgExtension.includes(ext) ? `${url}-${size}.${ext}` : imgUrl;
};
const getDiscount = (originPrice, price) => Math.ceil(((originPrice - price) * 100) / originPrice);
const getMerchandiseDataAttributes = (merchandiseData) => JSON.stringify({
    type: merchandiseData === null || merchandiseData === void 0 ? void 0 : merchandiseData.type,
    groupAttributeName: merchandiseData === null || merchandiseData === void 0 ? void 0 : merchandiseData.groupAttributeName,
    groupAttributeValue: merchandiseData === null || merchandiseData === void 0 ? void 0 : merchandiseData.groupAttributeValue,
    sku: merchandiseData === null || merchandiseData === void 0 ? void 0 : merchandiseData.sku
}).replace(/"/g, "'");
const formatProductData = (products, contentType) => {
    if (!Array.isArray(products) || !products.length)
        return [];
    return products.map((product, key) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const masterProduct = (_a = product.variants) === null || _a === void 0 ? void 0 : _a[0];
        const offer = masterProduct.offers[0];
        const price = (_b = offer === null || offer === void 0 ? void 0 : offer.price) !== null && _b !== void 0 ? _b : 0;
        const originPrice = (_c = offer === null || offer === void 0 ? void 0 : offer.originPrice) !== null && _c !== void 0 ? _c : 0;
        const discount = getDiscount(originPrice, price);
        const merchandiseData = product.merchandiseData
            ? getMerchandiseDataAttributes(product.merchandiseData)
            : undefined;
        const analyticsCustomAttributes = (0,_analytics__WEBPACK_IMPORTED_MODULE_0__.getAnalyticsCustomAttributes)({
            contentType
        });
        const hasDelineator = !product.isSponsored && !((_d = products[key - 1]) === null || _d === void 0 ? void 0 : _d.isSponsored);
        return {
            id: product.id,
            adId: product.adId,
            name: product.name,
            productKey: product.key,
            sku: (_e = product === null || product === void 0 ? void 0 : product.merchandiseData) === null || _e === void 0 ? void 0 : _e.sku,
            description: product.description,
            brandName: (_f = masterProduct === null || masterProduct === void 0 ? void 0 : masterPrs) === null || _f === void 0 ? void 0 : _f.brand,
            images: masterProduct === null || masterProduct === void 0 ? void 0 : masterProduct.images.map(image => image.url),
            channelKey: (_g = offer === null || offer === void 0 ? void 0 : offer.channel) === null || _g === void 0 ? void 0 : _g.key,
            isOnStock: offer === null || offer === void 0 ? void 0 : offer.isOnStock,
            isSponsored: product.isSponsored,
            seller: (_h = offer === null || offer === void 0 ? void 0 : offer.channel) === null || _h === void 0 ? void 0 : _h.name,
            merchandiseData,
            analyticsCustomAttributes,
            discount,
            originPrice,
            price,
            hasDelineator
        };
    });
};


/***/ }),

/***/ "../../node_modules/lodash-es/_Hash.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash-es/_Hash.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "../../node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "../../node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "../../node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "../../node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "../../node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);


/***/ }),

/***/ "../../node_modules/lodash-es/_ListCache.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_ListCache.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "../../node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "../../node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "../../node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "../../node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "../../node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);


/***/ }),

/***/ "../../node_modules/lodash-es/_Map.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash-es/_Map.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../../node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "../../node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ "../../node_modules/lodash-es/_MapCache.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_MapCache.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "../../node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "../../node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "../../node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "../../node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "../../node_modules/lodash-es/_m -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);


/***/ }),

/***/ "../../node_modules/lodash-es/_Stack.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash-es/_Stack.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "../../node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "../../node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "../../node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "../../node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "../../node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "../../node_modules/lodash-es/_svalue pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ }),

/***/ "../../node_modules/lodash-es/_Symbol.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash-es/_Symbol.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../../node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ "../../node_modules/lodash-es/_Uint8Array.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_Uint8Array.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../../node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);


/***/ }),

/***/ "../../node_modules/lodash-es/_apply.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash-es/_apply.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The functi args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apply);


/***/ }),

/***/ "../../node_modules/lodash-es/_arrayLikeKeys.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash-es/_arrayLikeKeys.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ "../../node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "../../node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "../../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ "../../node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ "../../node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ "../../node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);


/***/ }),

/***/ "../../node_modules/lodash-es/_arrayMap.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_arrayMap.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @priva array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayMap);


/***/ }),

/***/ "../../node_modules/lodash-es/_assignMergeValue.js":
/*!*********************************************************!*\
  !*** ../../node_modules/lodash-es/_assignMergeValue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "../../node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "../../node_modules/lodash-es/eq.js");



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !(0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object[key], value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignMergeValue);


/***/ }),

/***/ "../../node_modules/lodash-es/_assignValue.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_assignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "../../node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "../../node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);


/***/ }),

/***/ "../../node_modules/lodash-es/_assocIndexOf.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_assocIndexOf.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "../../node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseAssignValue.js":
/*!********************************************************!*\
  !*** ../../node_modules/lodash-es/_baseAssignValue.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "../../node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseCreate.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_baseCreate.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../../node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * propertiect.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseFor.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_baseFor.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseFor.js */ "../../node_modules/lodash-es/_createBaseFor.js");


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = (0,_createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFor);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseGet.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_baseGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "../../node_modules/lodash-es/_castPath.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ "../../node_modules/lodash-es/_toKey.js");



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0,_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[(0,_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGet);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseGetTag.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_baseGetTag.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../../node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "../../node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "../../node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseIsArguments.js":
/*!********************************************************!*\
  !*** ../../node_modules/lodash-es/_baseIsArguments.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "../../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "../../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseIsNative.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_baseIsNative.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ "../../node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "../../node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../../node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "../../node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseIsTypedArray.js":
/*!*********************************************************!*\
  !*** ../../node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ "../../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "../../node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "../../node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) &&
    (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseKeysIn.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_baseKeysIn.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../../node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "../../node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "../../node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var isProto = (0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeysIn);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseMerge.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_baseMerge.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Stack.js */ "../../node_modules/lodash-es/_Stack.js");
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_assignMergeValue.js */ "../../node_modules/lodash-es/_assignMergeValue.js");
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ "../../node_modules/lodash-es/_baseFor.js");
/* harmony import */ var _baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMergeDeep.js */ "../../node_modules/lodash-es/_baseMergeDeep.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "../../node_modules/lodash-es/isObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keysIn.js */ "../../node_modules/lodash-es/keysIn.js");
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_safeGet.js */ "../../node_modules/lodash-es/_safeGet.js");








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  (0,_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, function(srcValue, key) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue)) {
      (0,_baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer((0,_safeGet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, key, newValue);
    }
  }, _keysIn_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMerge);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseMergeDeep.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash-es/_baseMergeDeep.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignMergeValue.js */ "../../node_modules/lodash-es/_assignMergeValue.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_cloneBuffer.js */ "../../node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "../../node_modules/lodash-es/_cloneTypedArray.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ "../../node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ "../../node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isArguments.js */ "../../node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "../../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArrayLikeObject.js */ "../../node_modules/lodash-es/isArrayLikeObject.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ "../../node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isFunction.js */ "../../node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isObject.js */ "../../node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isPlainObject.js */ "../../node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ "../../node_modules/lodash-es/isTypedArray.js");
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_safeGet.js */ "../../node_modules/lodash-es/_safeGet.js");
/* harmony import */ var _toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toPlainObject.js */ "../../node_modules/lodash-es/toPlainObject.js");
















/**
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
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key),
      srcValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue),
        isBuff = !isArr && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(srcValue),
        isTyped = !isArr && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(objValue)) {
        newValue = objValue;
      }
      else if ((0,_isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__["default"])(objValue)) {
        newValue = (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__["default"])(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if ((0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])(srcValue) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(srcValue)) {
      newValue = objValue;
      if ((0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(objValue)) {
        newValue = (0,_toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__["default"])(objValue);
      }
      else if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_12__["default"])(objValue) || (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_13__["default"])(objValue)) {
        newValue = (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMergeDeep);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseRest.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_baseRest.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "../../node_modules/lodash-es/identity.js");
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ "../../node_modules/lodash-es/_overRest.js");
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_setToString.js */ "../../node_modules/lodash-es/_setToString.js");




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0,_setToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, start, _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"]), func + '');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseRest);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseSetToString.js":
/*!********************************************************!*\
  !*** ../../node_modules/lodash-es/_baseSetToString.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "../../node_modules/lodash-es/constant.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "../../node_modules/lodash-es/_defineProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "../../node_modules/lodash-es/identity.js");




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function(func, string) {
  return (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': (0,_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(string),
    'writable': true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSetToString);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseTimes.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_baseTimes.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @par results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseToString.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_baseToString.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../../node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_arrayMap.js */ "../../node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "../../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "../../node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, baseToString) + '';
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseToString);


/***/ }),

/***/ "../../node_modules/lodash-es/_baseUnary.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_baseUnary.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unaryfunction to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);


/***/ }),

/***/ "../../node_modules/lodash-es/_castPath.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_castPath.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "../../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isKey.js */ "../../node_modules/lodash-es/_isKey.js");
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToPath.js */ "../../node_modules/lodash-es/_stringToPath.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "../../node_modules/lodash-es/toString.js");





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  return (0,_isKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, object) ? [value] : (0,_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (castPath);


/***/ }),

/***/ "../../node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*********************************************************!*\
  !*** ../../node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "../../node_modules/lodash-es/_Uint8Array.js");


/**
 *eLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneArrayBuffer);


/***/ }),

/***/ "../../node_modules/lodash-es/_cloneBuffer.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_cloneBuffer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../../node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneBuffer);


/***/ }),

/***/ "../../node_modules/lodash-es/_cloneTypedArray.js":
/*!********************************************************!*\
  !*** ../../node_modules/lodash-es/_cloneTypedArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "../../node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneTypedArray);


/***/ }),

/***/ "../../node_modules/lodash-es/_copyArray.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_copyArray.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copies the values of `source` to `aray) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyArray);


/***/ }),

/***/ "../../node_modules/lodash-es/_copyObject.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_copyObject.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignValue.js */ "../../node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "../../node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyObject);


/***/ }),

/***/ "../../node_modules/lodash-es/_coreJsData.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_coreJsData.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../../node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);


/***/ }),

/***/ "../../node_modules/lodash-es/_createAssigner.js":
/*!*******************************************************!*\
  !*** ../../node_modules/lodash-es/_createAssigner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "../../node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ "../../node_modules/lodash-es/_isIterateeCall.js");



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAssigner);


/***/ }),

/***/ "../../node_modules/lodash-es/_createBaseFor.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash-es/_createBaseFor.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a base function for method--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBaseFor);


/***/ }),

/***/ "../../node_modules/lodash-es/_defineProperty.js":
/*!*******************************************************!*\
  !*** ../../node_modules/lodash-es/_defineProperty.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../../node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);


/***/ }),

/***/ "../../node_modules/lodash-es/_freeGlobal.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_freeGlobal.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ "../../node_modules/lodash-es/_getMapData.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_getMapData.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "../../node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);


/***/ }),

/***/ "../../node_modules/lodash-es/_getNative.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_getNative.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpackebpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ "../../node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ "../../node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);


/***/ }),

/***/ "../../node_modules/lodash-es/_getPrototype.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_getPrototype.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "../../node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);


/***/ }),

/***/ "../../node_modules/lodash-es/_getRawTag.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_getRawTag.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../../node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized veObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);


/***/ }),

/***/ "../../node_modules/lodash-es/_getValue.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_getValue.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `ring} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);


/***/ }),

/***/ "../../node_modules/lodash-es/_hashClear.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_hashClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../../node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);


/***/ }),

/***/ "../../node_modules/lodash-es/_hashDelete.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_hashDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @he entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);


/***/ }),

/***/ "../../node_modules/lodash-es/_hashGet.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_hashGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../../node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);


/***/ }),

/***/ "../../node_modules/lodash-es/_hashHas.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_hashHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../../node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);


/***/ }),

/***/ "../../node_modules/lodash-es/_hashSet.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_hashSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../../node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);


/***/ }),

/***/ "../../node_modules/lodash-es/_initCloneObject.js":
/*!********************************************************!*\
  !*** ../../node_modules/lodash-es/_initCloneObject.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ "../../node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "../../node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "../../node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object))
    ? (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    : {};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneObject);


/***/ }),

/***/ "../../node_modules/lodash-es/_isIndex.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_isIndex.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The valuTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);


/***/ }),

/***/ "../../node_modules/lodash-es/_isIterateeCall.js":
/*!*******************************************************!*\
  !*** ../../node_modules/lodash-es/_isIterateeCall.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eq.js */ "../../node_modules/lodash-es/eq.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "../../node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex.js */ "../../node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../../node_modules/lodash-es/isObject.js");





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? ((0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) && (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return (0,_eq_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object[index], value);
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIterateeCall);


/***/ }),

/***/ "../../node_modules/lodash-es/_isKey.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash-es/_isKey.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "../../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "../../node_modules/lodash-es/isSymbol.js");



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKey);


/***/ }),

/***/ "../../node_modules/lodash-es/_isKeyable.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/_isKeyable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` ) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);


/***/ }),

/***/ "../../node_modules/lodash-es/_isMasked.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_isMasked.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "../../node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checc The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);


/***/ }),

/***/ "../../node_modules/lodash-es/_isPrototype.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_isPrototype.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks iffunction isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);


/***/ }),

/***/ "../../node_modules/lodash-es/_listCacheClear.js":
/*!*******************************************************!*\
  !*** ../../node_modules/lodash-es/_listCacheClear.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default":emoves all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);


/***/ }),

/***/ "../../node_modules/lodash-es/_listCacheDelete.js":
/*!********************************************************!*\
  !*** ../../node_modules/lodash-es/_listCacheDelete.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../../node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);


/***/ }),

/***/ "../../node_modules/lodash-es/_listCacheGet.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_listCacheGet.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);


/***/ }),

/***/ "../../node_modules/lodash-es/_listCacheHas.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_listCacheHas.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);


/***/ }),

/***/ "../../node_modules/lodash-es/_listCacheSet.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_listCacheSet.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);


/***/ }),

/***/ "../../node_modules/lodash-es/_mapCacheClear.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash-es/_mapCacheClear.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "../../node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ "../../node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "../../node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);


/***/ }),

/***/ "../../node_modules/lodash-es/_mapCacheDelete.js":
/*!*******************************************************!*\
  !*** ../../node_modules/lodash-es/_mapCacheDelete.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../../node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);


/***/ }),

/***/ "../../node_modules/lodash-es/_mapCacheGet.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_mapCacheGet.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../../node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);


/***/ }),

/***/ "../../node_modules/lodash-es/_mapCacheHas.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_mapCacheHas.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../../node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);


/***/ }),

/***/ "../../node_modules/lodash-es/_mapCacheSet.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_mapCacheSet.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../../node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);


/***/ }),

/***/ "../../node_modules/lodash-es/_memoizeCapped.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash-es/_memoizeCapped.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ "../../node_modules/lodash-es/memoize.js");


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoesult = (0,_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeCapped);


/***/ }),

/***/ "../../node_modules/lodash-es/_nativeCreate.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_nativeCreate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../../node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);


/***/ }),

/***/ "../../node_modules/lodash-es/_nativeKeysIn.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_nativeKeysIn.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * exceames.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeysIn);


/***/ }),

/***/ "../../node_modules/lodash-es/_nodeUtil.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_nodeUtil.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "../../node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` froreturn types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);


/***/ }),

/***/ "../../node_modules/lodash-es/_objectToString.js":
/*!*******************************************************!*\
  !*** ../../node_modules/lodash-es/_objectToString.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);


/***/ }),

/***/ "../../node_modules/lodash-es/_overArg.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_overArg.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transfore argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);


/***/ }),

/***/ "../../node_modules/lodash-es/_overRest.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_overRest.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply.js */ "../../node_modules/lodash-es/_apply.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return (0,_apply_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, this, otherArgs);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overRest);


/***/ }),

/***/ "../../node_modules/lodash-es/_root.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash-es/_root.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "../../node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ "../../node_modules/lodash-es/_safeGet.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/_safeGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "conafeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (safeGet);


/***/ }),

/***/ "../../node_modules/lodash-es/_setToString.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_setToString.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSetToString.js */ "../../node_modules/lodash-es/_baseSetToString.js");
/* harmony import */ var _shortOut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shortOut.js */ "../../node_modules/lodash-es/_shortOut.js");



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = (0,_shortOut_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_baseSetToString_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setToString);


/***/ }),

/***/ "../../node_modules/lodash-es/_shortOut.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_shortOut.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT`remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortOut);


/***/ }),

/***/ "../../node_modules/lodash-es/_stackClear.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/_stackClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*k.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);


/***/ }),

/***/ "../../node_modules/lodash-es/_stackDelete.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/_stackDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @prie entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);


/***/ }),

/***/ "../../node_modules/lodash-es/_stackGet.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_stackGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);


/***/ }),

/***/ "../../node_modules/lodash-es/_stackHas.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_stackHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @priThe key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);


/***/ }),

/***/ "../../node_modules/lodash-es/_stackSet.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_stackSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "../../node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "../../node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "../../node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @nn this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);


/***/ }),

/***/ "../../node_modules/lodash-es/_stringToPath.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/_stringToPath.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ "../../node_modules/lodash-es/_memoizeCapped.js");


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {ng.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringToPath);


/***/ }),

/***/ "../../node_modules/lodash-es/_toKey.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash-es/_toKey.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "../../node_modules/lodash-es/isSymbol.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);


/***/ }),

/***/ "../../node_modules/lodash-es/_toSource.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/_toSource.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcurce(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ "../../node_modules/lodash-es/constant.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/constant.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
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
 * s);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constant);


/***/ }),

/***/ "../../node_modules/lodash-es/eq.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash-es/eq.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
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
  _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ "../../node_modules/lodash-es/get.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash-es/get.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "../../node_modules/lodash-es/_baseGet.js");


/**
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
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);


/***/ }),

/***/ "../../node_modules/lodash-es/identity.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/identity.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (identity);


/***/ }),

/***/ "../../node_modules/lodash-es/isArguments.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/isArguments.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "../../node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "../../node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
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
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);


/***/ }),

/***/ "../../node_modules/lodash-es/isArray.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash-es/isArray.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
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
 */
var isArray = Array.isArray;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ "../../node_modules/lodash-es/isArrayLike.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash-es/isArrayLike.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ "../../node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ "../../node_modules/lodash-es/isLength.js");



/**
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
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);


/***/ }),

/***/ "../../node_modules/lodash-es/isArrayLikeObject.js":
/*!*********************************************************!*\
  !*** ../../node_modules/lodash-es/isArrayLikeObject.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "../../node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "../../node_modules/lodash-es/isObjectLike.js");



/**
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
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLikeObject);


/***/ }),

/***/ "../../node_modules/lodash-es/isBuffer.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/isBuffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../../node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "../../node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
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
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);


/***/ }),

/***/ "../../node_modules/lodash-es/isFunction.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash-es/isFunction.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "../../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../../node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
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
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ "../../node_modules/lodash-es/isLength.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/isLength.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
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
 * @exaalse
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);


/***/ }),

/***/ "../../node_modules/lodash-es/isObject.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/isObject.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false` => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ "../../node_modules/lodash-es/isObjectLike.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/isObjectLike.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
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
*
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ "../../node_modules/lodash-es/isPlainObject.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/isPlainObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "../../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ "../../node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "../../node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
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
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObject);


/***/ }),

/***/ "../../node_modules/lodash-es/isSymbol.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/isSymbol.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ "../../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ "../../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
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
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ "../../node_modules/lodash-es/isTypedArray.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash-es/isTypedArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "../../node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "../../node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ "../../node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
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
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);


/***/ }),

/***/ "../../node_modules/lodash-es/keysIn.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash-es/keysIn.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "../../node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeysIn.js */ "../../node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "../../node_modules/lodash-es/isArrayLike.js");




/**
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
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, true) : (0,_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysIn);


/***/ }),

/***/ "../../node_modules/lodash-es/memoize.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash-es/memoize.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "../../node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
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
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function mem if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "../../node_modules/lodash-es/merge.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash-es/merge.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMerge.js */ "../../node_modules/lodash-es/_baseMerge.js");
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ "../../node_modules/lodash-es/_createAssigner.js");



/**
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
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = (0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, source, srcIndex) {
  (0,_baseMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, source, srcIndex);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);


/***/ }),

/***/ "../../node_modules/lodash-es/noop.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash-es/noop.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noop);


/***/ }),

/***/ "../../node_modules/lodash-es/stubFalse.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash-es/stubFalse.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);


/***/ }),

/***/ "../../node_modules/lodash-es/toPlainObject.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash-es/toPlainObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "../../node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "../../node_modules/lodash-es/keysIn.js");



/**
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
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toPlainObject);


/***/ }),

/***/ "../../node_modules/lodash-es/toString.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash-es/toString.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "../../node_modules/lodash-es/_baseToString.js");


/**
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
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0,_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);


/***/ }),

/***/ "../common/node_modules/axios/lib/adapters/adapters.js":
/*!*************************************************************!*\
  !*** ../common/node_modules/axios/lib/adapters/adapters.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "../common/node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "../common/node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "../common/node_modules/axios/lib/core/AxiosError.js");





const knownAdapters = {
  http: _http    Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // esreason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_WEBPACK_IMPORTED_MODULE_3__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "../common/node_modules/axios/lib/adapters/xhr.js":
/*!********************************************************!*\
  !*** ../common/node_modules/axios/lib/adapters/xhr.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/settle.js */ "../common/node_modules/axios/lib/core/settle.js");
/* harmony import */ var _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../helpers/cookies.js */ "../common/node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../helpers/buildURL.js */ "../common/node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/buildFullPath.js */ "../common/node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../helpers/isURLSameOrigin.js */ "../common/node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/transitional.js */ "../common/node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/AxiosError.js */ "../common/node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "../common/node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "../common/node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platform/index.js */ "../common/node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "../common/node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/speedometer.js */ "../common/node_modules/axios/lib/helpers/speedometer.js");
















function progressEveted: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFormData(requestData)) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentTyp    // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = (0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_5__["default"])(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        MPORTED_MODULE_6__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request)         // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onlefault"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORT["default"]('Network Error', _core_AxiosError_jsETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(_platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].hasStandardBrowserEnv) {
      withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && (0,_helpers_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_9__["default"])(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && _helpers_cookies_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentT   _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReduce cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_11__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_12__["default"])(fullPath);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_7__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "../common/node_modules/axios/lib/axios.js":
/*!*************************************************!*\
  !*** ../common/node_modules/axios/lib/axios.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "../common/node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "../common/node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "../common/node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "../common/node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "../common/node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "../common/node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "../common/node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "../common/node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "../common/node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "../common/node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "../common/node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "../common/node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "../common/node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "../common/node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "../common/node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "../common/node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "../common/node_modules/axios/lib/cancel/CancelToken.js":
/*!**************************************************************!*\
  !*** ../common/node_modules/axios/lib/cancel/CancelToken.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "../common/node_modules/axios/lib/cancel/CanceledError.js");




/**
 *   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "../common/node_modules/axios/lib/cancel/CanceledError.js":
/*!****************************************************************!*\
  !*** ../common/node_modules/axios/lib/cancel/CanceledError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "../common/node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "../common/node_modules/axios/lib/cancel/isCancel.js":
/*!***********************************************************!*\
  !*** ../common/node_modules/axios/lib/cancel/isCancel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__wek_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "../common/node_modules/axios/lib/core/Axios.js":
/*!******************************************************!*\
  !*** ../common/node_modules/axios/lib/core/Axios.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "../common/node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "../common/node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "../common/node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "../common/node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "../common/node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "../common/node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "../common/node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/ request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      he_WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders,nousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "../common/node_modules/axios/lib/core/AxiosError.js":
/*!***********************************************************!*\
  !*** ../common/node_modules/axios/lib/core/AxiosError.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config)K_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIREC'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
})de, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "../common/node_modules/axios/lib/core/AxiosHeaders.js":
/*!*************************************************************!*\
  !*** ../common/node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTEaee(null);
  const tokensRE =((t cessorName, {
      value].call(this, header, arg1, arg2, arg3);
      },
      configurable: !key || self[key] === un  const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEULEefautikeynored]ll _[" Obing+ v th] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Acc  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "../common/node_modules/axios/lib/core/InterceptorManager.js":
/*!*******************************************************************!*\
  !*** ../common/node_modules/axios/lib/core/InterceptorManager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harch(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "../common/node_modules/axios/lib/core/buildFullPath.js":
/*!**************************************************************!*\
  !*** ../common/node_modules/axios/lib/core/buildFullPath.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "../common/node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "../common/node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "../common/node_modules/axios/lib/core/dispatchRequest.js":
/*!****************************************************************!*\
  !*** ../common/node_modules/axios/lib/core/dispatchRequest.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "../common/node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "../common/node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "../common/node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "../common/node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "../common/node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "../common/node_modules/axios/lib/adapters/adapters.js");


en.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adaptransformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "../common/node_modules/axios/lib/core/mergeConfig.js":
/*!************************************************************!*\
  !*** ../common/node_modules/axios/lib/core/mergeConfig.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _Axies/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting 1__["default"].merge({}, source);
    } else if (_uMergedValue(a, b, caseless);
    } else if (!_utilsnt-return
  function valueFromConfig2(a, b) {
    i  return getMergedValue(undefined, b);
    } else igeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: doConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDprop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "../common/node_modules/axios/lib/core/settle.js":
/*!*******************************************************!*\
  !*** ../common/node_modules/axios/lib/core/settle.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "../common/node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function s__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "../common/node_modules/axios/lib/core/transformData.js":
/*!**************************************************************!*\
  !*** ../common/node_modules/axios/lib/core/transformData.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "../common/node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "../common/node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 ch(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "../common/node_modules/axios/lib/defaults/index.js":
/*!**********************************************************!*\
  !*** ../common/node_modules/axios/lib/defaults/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "../common/node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "../common/node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "../common/node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "../common/node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "../common/node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "../common/node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string LE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPaylxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platfo_platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/jsoned
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "../common/node_modules/axios/lib/defaults/transitional.js":
/*!*****************************************************************!*\
  !*** ../common/node_modules/axios/lib/defaults/transitional.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "../common/node_modules/axios/lib/env/data.js":
/*!****************************************************!*\
  !*** ../common/node_modules/axios/lib/env/data.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.6.2";

/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!************************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "../common/node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters  '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairsdefault"])(params, thisrn encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!******************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  Va
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/bind.js":
/*!********************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/bind.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(t */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/buildURL.js":
/*!************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/buildURL.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "../common/node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the charamponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url Th"#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/combineURLs.js":
/*!***************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/combineURLs.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a e combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/cookies.js":
/*!***********************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/cookies.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "../common/node_modules/axios/lib/platform/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path) && cookie.push('path=' + path);

      _utils_js__WEBPACK_IMPORTED_MODULE_1,

    read(\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) ate.now() -000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });



/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/formDataToJSON.js":
/*!******************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");




/**
 * It takes a stry z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/*;
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData objeCK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*****************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 *nce of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/isAxiosError.js":
/*!****************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "../common/node_modules/axios/lib/utils.js");




/**
 * Determines whether t Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!*******************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "../common/node_modules/axios/lib/platform/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["delt"].isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.prndard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/null.js":
/*!********************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/null.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/parseHeaders.js":
/*!****************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "../common/node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @pa].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/parseProtocol.js":
/*!*****************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/speedometer.js":
/*!***************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/speedometer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEB - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/spread.js":
/*!**********************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/spread.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 *;
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/toFormData.js":
/*!**************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/toFormData.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "../common/node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "../common/node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParion isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current ken, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

he array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(ar_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<p();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!********************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "../common/node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "../common/node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "../common/node_modules/axios/lib/platform/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFofault"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "../common/node_modules/axios/lib/helpers/validator.js":
/*!*************************************************************!*\
  !*** ../common/node_modules/axios/lib/helpers/validator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "../common/node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "../common/node_moduion', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version(opt, desc) {
    return '[Axios v' + _env_data_js_  ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts)w _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "../common/node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*************************************************************************!*\
  !*** ../common/node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "../common/node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*****************************************************************************!*\
  !*** ../common/node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "../common/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!************************************************************************************!*\
  !*** ../common/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "../common/node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../common/node_modules/axios/lib/platform/browser/index.js":
/*!******************************************************************!*\
  !*** ../common/node_modules/axios/lib/platform/browser/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "../common/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "../common/node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "../common/node_modules/axios/lib/platform/browser/classes/Blob.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "../common/node_modules/axios/lib/platform/common/utils.js":
/*!*****************************************************************!*\
  !*** ../common/node_modules/axios/lib/platform/common/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),
/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * reacr 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();




/***/ }),

/***/ "../common/node_modules/axios/lib/platform/index.js":
/*!**********************************************************!*\
  !*** ../common/node_modules/axios/lib/platform/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "../common/node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "../common/node_modules/axios/lib/platform/common/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "../common/node_modules/axios/lib/utils.js":
/*!*************************************************!*\
  !*** ../common/node_modules/axios/lib/utils.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "../common/node_modules/axios/lib/helpers{getPrototypeOf} = Object;

const kindOf = ache[str] = str.slicte(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = t val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * defined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number'am {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'objeean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * De);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileL
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/== 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim exceto trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 *sbject.keys(obj);
 lint no-undef:0*/
  if (typeofypeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 eturns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into anotheonstructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {ObjectceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends wit  position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matcolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
;

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    f  }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @p if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name      return;
    }

rr.forEach(val     obj[value] = true;
miter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

rns {boolean}
 */
funcucedValue) && (target[key] = reducedValue);
        });

        sta isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});


/***/ })

/******/ 	});
/**********************************/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = **/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_ = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);uire__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, quire__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"usc-widget_dist_usc_js":"3e63107a","usc-contextual-widget_dist_uscContextualWidget_js":"54e60b61","usc-embeddable-widget_dist_uscEmbeddableProductsWidg	return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 	 webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/*****script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.eProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/****bpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/*);
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "https://commerce.nbcuni.com/public/widget/latest/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bootstrap": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installed****/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_requir		error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******d) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkusc_bootstrap"] = self["webpackChunkusc_bootstrap"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoad.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "../../node_modules/preact/dist/preact.module.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ "../../node_modules/lodash-es/merge.js");
/* harmony import */ var common_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/lib/utils */ "../common/lib/utils/index.js");
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/App */ "./src/app/App.tsx");
/* harmony import */ var _constants_components_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/components.registry */ "./src/constants/components.registry.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version */ "./src/version.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/analytics */ "./src/utils/analytics.ts");
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/loader */ "./src/utils/loader.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _utils_personify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/personify */ "./src/utils/personify.ts");
/* harmony import */ varesult.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars











// eslint-disable-next-line @typescript-eslint/no-explicit-any
let appElement;
window.uscWidget = {
    init(cfg) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                (0,_utils_loader__WEBPACK_IMPORTED_MODULE_7__.loadPromisePolyfill)();
                (_a = window.mParticle) === null || _a === void 0 ? void 0 : _a.ready(() => __awaiter(this, void 0, void 0, function* () {
                    yield (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_6__.initUSCAnalytics)(cfg === null || cfg === void 0 ? void 0 : cfg.getDefaultContentData, cfg.networkBrand);
                }));
                (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_6__.addErrorHandlers)();
                const defaultConfig = yield (0,_utils_loader__WEBPACK_IMPORTED_MODULE_7__.loadDefaultConfig)(cfg.networkBrand, cfg === null || cfg === void 0 ? void 0 : cfg.theme);
                const appHTML = document.createElement("div");
                appHTML.setAttribute("id", _constants_components_registry__WEBPACK_IMPORTED_MODULE_4__.SHOPPING_OUTLET);
                appHTML.classList.add(`usc-outlet--theme`);
                document.body.appendChild(appHTML);
                this.config = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.validateConfig)((0,lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"])(defaultConfig, cfg));
                const zIndex = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.validateZIndex)(this.config.zIndex);
                (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.setZIndex)(zIndex);
                if (this.config.ccwEnabled) {
                    (0,_utils_loader__WEBPACK_IMPORTED_MODULE_7__.loadContextualWidget)(this.config);
                }
                if (((_b = this.config) === null || _b === void 0 ? void 0 : _b.identity) &&
                    (0,_utils_identity__WEBPACK_IMPORTED_MODULE_10__.checkInitializeIdentity)((_c = this.config) === null || _c === void 0 ? void 0 : _c.identity)) {
                    yield (0,_utils_identity__WEBPACK_IMPORTED_MODULE_10__.initializeIdentity)(this.config.identity);
                }
                if (this.config.amazonPay && this.config.amazonPay.enabled) {
                    (0,_utils_loader__WEBPACK_IMPORTED_MODULE_7__.loadAmazonPayScript)();
                }
                (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_at-disable-next-line react/jsx-props-no-spreading
                , Object.assign({}, this.config, { ref: el => {
                        appElement = el;
                    } })), appHTML);
            }
            catch (error) {
                (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_2__.analyticsLogError)(error);
            }
        });
    },
    rescan() {
        var _a, _b;
        try {
            if (appElement) {
                appElement.rescan();
            }
            (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_6__.rescanUSCAnalytics)((_a = this.config) === null || _a === void 0 ? void 0 : _a.getDefaultContentData, (_b = this.config) === null || _b === void 0 ? void 0 : _b.networkBrand);
        }
        catch (error) {
            (0,common_lib_utils__WEBPACK_IMPORTED_MODULE_2__.analyticsLogError)(error);
        }
    },
    setTheme(theme, networkBrand) {
        return __awaiter(this, void 0, void 0, function* () {
            this.config = Object.assign(Object.assign({}, this.config), { theme, networkBrand: networkBrand || this.config.networkBrand });
            yield (0,_utils_loadps://commerce.nbcuni.com}`, "usc-theme-styles")
     SC: ${theme} theme not loaded`, err));
        });
    },
    open(productParams) {
        if (appElement) {
            appElement.openWidget(productParams);
        }
    },
    showRecommendations(recommendParams) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!((_a = this.config) === null || _a === void 0 ? void 0 : _a.ccwEnabled) || !((_b = this.config) === null || _b === void 0 ? void 0 : _b.personifyApiUrl)) {
                return null;
            }
            // eslint-disable-next-line no-param-reassign
            recommendParams.limit = (_c = recommendParams.limit) !== null && _c !== void 0 ? _c : 12;
            let productsCount = 0;
            const sessionId = (_d = recommendParams === null || recommendParams === void 0 ? void 0 : recommendParams.sessionId) !== null && _d !== void 0 ? _d : (0,_utils_personify__WEBPACK_IMPORTED_MODULE_9__.getSessionId)();
            if (!sessionId) {
                console.error("CCW: can not start because there is no sessionId");
                return {
                    productsCount
                };
            }
            const recommendationProducts = yield (0,_utils_personify__WEBPACK_IMPORTED_MODULE_9__.getRecommendations)(recommendParams, sessionId, this.config.personifyApiUrl);
            if (recommendationProducts.length >= recommendParams.limit) {
                productsCount = recommendParams.limit;
            }
            else {
                productsCount = recommendationProducts.length;
            }
            if (productsCount) {
                (0,_utils_loader__WEBPACK_IMPORTED_MODULE_7__.loadContextualRecommendationsWidget)(this.config, recommendationProducts, productsCount);
            }
            return {
                productsCount
            };
        });
    },
    showEmbeddableProductsWidget(embedComponents) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const rootElements = document.querySelectorAll(`[${_constants_components_registry__WEBPACK_IMPORTED_MODULE_4__.EMBEDDABLE_PRODUCTS_WIDGET_DATA_ATTRIBUTE}]`);
            if (!rootElements.length || !this.config.networkBrand) {
                console.error("Skipping embeddable widget loading due to conditions:", "rootElements:", !rootElements.length, "networkBrand:", !this.config.networkBrand);
                return;
            }
            try {
                yield (0,_utils_loader__WEBPACK_IMPORTED_MODULE_7__.loadEmbeddableProductsWidget)(this.config);
            }
            catch (err) {
                console.error("Can't load USC Embeddable Widget", err);
            }
            yield ((_a = window.uscEmbeddableWidget) === null || _a === void 0 ? void 0 : _a.init({
                config: this.config,
                rootElements,
                embeddableComponents: embedComponents
            }));
        });
    },
    config: {}
};

})();

/******/ })()
;
//# sourceMappingURL=bootstrap.js.map