/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = (function () {
  'use strict';

  var OFI = 'bfred-it:object-fit-images';
  var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
  var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
  var supportsObjectFit = 'object-fit' in testImg.style;
  var supportsObjectPosition = 'object-position' in testImg.style;
  var supportsOFI = 'background-size' in testImg.style;
  var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
  var nativeGetAttribute = testImg.getAttribute;
  var nativeSetAttribute = testImg.setAttribute;
  var autoModeEnabled = false;

  
  
  
  
  
  
  
  
  
  fix.supportsObjectFit = supportsObjectFit;
  fix.supportsObjectPosition = supportsObjectPosition;

  hijackAttributes();

  return fix;

  }());