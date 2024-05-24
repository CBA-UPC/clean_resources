/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2019 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

((this, function() {
return /******/ (
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pdfjsVersion = '2.2.228';
var pdfjsBuild = 'd7afb74a';

var pdfjsSharedUtil = __w_pdfjs_require__(1);

var pdfjsDisplayAPI = __w_pdfjs_require__(147);

var pdfjsDisplayTextLayer = __w_pdfjs_require__(162);

var pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(163);

var pdfjsDisplayDisplayUtils = __w_pdfjs_require__(151);

var pdfjsDisplaySVG = __w_pdfjs_require__(164);

var pdfjsDisplayWorkerOptions = __w_pdfjs_require__(156);

var pdfjsDisplayAPICompatibility = __w_pdfjs_require__(153);

{
  var isNodeJS = __w_pdfjs_require__(4);

  if (isNodeJS()) {
    var PDFNodeStream = __w_pdfjs_require__(165).PDFNodeStream;

    pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
      return new PDFNodeStream(params);
    });
  } else {
    var PDFNetworkStream = __w_pdfjs_require__(168).PDFNetworkStream;

    var PDFFetchStream;

    if (pdfjsDisplayDisplayUtils.isFetchSupported()) {
      PDFFetchStream = __w_pdfjs_require__(169).PDFFetchStream;
    }

    pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
      if (PDFFetchStream && pdfjsDisplayDisplayUtils.isValidFetchUrl(params.url)) {
        return new PDFFetchStream(params);
      }

      return new PDFNetworkStream(params);
    });
  }
}
exports.build = pdfjsDisplayAPI.build;
exports.version = pdfjsDisplayAPI.version;
exports.getDocument = pdfjsDisplayAPI.getDocument;
exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
exports.CMapCompressionType = pdfjsSharedUtil.CMapCompressionType;
exports.PermissionFlag = pdfjsSharedUtil.PermissionFlag;
exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
exports.OPS = pdfjsSharedUtil.OPS;
exports.VerbosityLevel = pdfjsSharedUtil.VerbosityLevel;
exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
exports.shadow = pdfjsSharedUtil.shadow;
exports.Util = pdfjsSharedUtil.Util;
exports.ReadableStream = pdfjsSharedUtil.ReadableStream;
exports.URL = pdfjsSharedUtil.URL;
exports.RenderingCancelledException = pdfjsDisplayDisplayUtils.RenderingCancelledException;
exports.getFilenameFromUrl = pdfjsDisplayDisplayUtils.getFilenameFromUrl;
exports.LinkTarget = pdfjsDisplayDisplayUtils.LinkTarget;
exports.addLinkAttributes = pdfjsDisplayDisplayUtils.addLinkAttributes;
exports.loadScript = pdfjsDisplayDisplayUtils.loadScript;
exports.PDFDateString = pdfjsDisplayDisplayUtils.PDFDateString;
exports.GlobalWorkerOptions = pdfjsDisplayWorkerOptions.GlobalWorkerOptions;
exports.apiCompatibilityParams = pdfjsDisplayAPICompatibility.apiCompatibilityParams;

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createPromiseCapability = createPromiseCapability;
exports.getVerbosityLevel = getVerbosityLevel;
exports.info = info;
exports.isArrayBuffer = isArrayBuffer;
exports.isArrayEqual = isArrayEqual;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isSameOrigin = isSameOrigin;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
exports.unreachable = unreachable;
Object.defineProperty(exports, "ReadableStream", {
  enumerable: true,
  get: function get() {
    return _streams_polyfill.ReadableStream;
  }
});
Object.defineProperty(exports, "URL", {
  enumerable: true,
  get: function get() {
    return _url_polyfill.URL;
  }
});
exports.createObjectURL = exports.FormatError = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.NativeImageDecoding = exports.MissingPDFException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = void 0;

__w_pdfjs_require__(2);

var _streams_polyfill = __w_pdfjs_require__(143);

var _url_polyfill = __w_pdfjs_require__(145);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
var NativeImageDecoding = {
  NONE: 'none',
  DECODE: 'decode',
  DISPLAY: 'display'
};
exports.NativeImageDecoding = NativeImageDecoding;
var PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
exports.PermissionFlag = PermissionFlag;
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
exports.TextRenderingMode = TextRenderingMode;
var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
exports.ImageKind = ImageKind;
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
exports.AnnotationType = AnnotationType;
var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
exports.AnnotationFlag = AnnotationFlag;
var AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
exports.AnnotationFieldFlag = AnnotationFieldFlag;
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
var StreamType = {
  UNKNOWN: 0,
  FLATE: 1,
  LZW: 2,
  DCT: 3,
  JPX: 4,
  JBIG: 5,
  A85: 6,
  AHX: 7,
  CCF: 8,
  RL: 9
};
exports.StreamType = StreamType;
var FontType = {
  UNKNOWN: 0,
  TYPE1: 1,
  TYPE1C: 2,
  CIDFONTTYPE0: 3,
  CIDFONTTYPE0C: 4,
  TRUETYPE: 5,
  CIDFONTTYPE2: 6,
  TYPE3: 7,
  OPENTYPE: 8,
  TYPE0: 9,
  MMTYPE1: 10
};
exports.FontType = FontType;
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
exports.VerbosityLevel = VerbosityLevel;
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
exports.CMapCompressionType = CMapCompressionType;
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
exports.OPS = OPS;
var UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font'
};
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
exports.PasswordResponses = PasswordResponses;
var verbosity = VerbosityLevel.WARNINGS;



function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log('Info: ' + msg);
  }
}




function isSameOrigin(baseUrl, otherUrl) {
  try {
    var base = new _url_polyfill.URL(baseUrl);

    if (!base.origin || base.origin === 'null') {
      return false;
    }
  } catch (e) {
    return false;
  }

  var other = new _url_polyfill.URL(otherUrl, base);
  return base.origin === other.origin;
}


function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }

  try {
    var absoluteUrl = baseUrl ? new _url_polyfill.URL(url, baseUrl) : new _url_polyfill.URL(url);

    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}

  return null;
}


var PasswordException = function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }

  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;
  return PasswordException;
}();

exports.PasswordException = PasswordException;

var UnknownErrorException = function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }

  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;
  return UnknownErrorException;
}();

exports.UnknownErrorException = UnknownErrorException;

var InvalidPDFException = function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }

  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;
  return InvalidPDFException;
}();

exports.InvalidPDFException = InvalidPDFException;

var MissingPDFException = function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }

  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;
  return MissingPDFException;
}();

exports.MissingPDFException = MissingPDFException;

var UnexpectedResponseException = );

exports.UnexpectedResponseException = UnexpectedResponseException;

var FormatError = );

exports.FormatError = FormatError;

var AbortException = );

exports.AbortException = AbortException;
var NullCharactersRegExp = /\x00/g;


function bytesToString(bytes) {
  assert(bytes !== null && _typeof(bytes) === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;

  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }

  var strBuf = [];

  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }

  return strBuf.join('');
}











var Util = function UtilClosure() {
  function Util() {}

  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];

  Util.makeCssRgb = 

  Util.transform = 

  Util.applyTransform = 

  Util.applyInverseTransform = 

  Util.getAxialAlignedBoundingBox = 

  Util.inverseTransform = 

  Util.apply3dTransform = 

  Util.singularValueDecompose2dScale = 

  Util.normalizeRect = 

  Util.intersect = 

  return Util;
}();

exports.Util = Util;
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];


function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}



function isBool(v) {
  return typeof v === 'boolean';
}

function isNum(v) {
  return typeof v === 'number';
}



function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(;
}



var createObjectURL = );

exports.createObjectURL = createObjectURL;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var globalScope = __w_pdfjs_require__(3);

if (!globalScope._pdfjsCompatibilityChecked) {
  globalScope._pdfjsCompatibilityChecked = true;

  var isNodeJS = __w_pdfjs_require__(4);

  var hasDOM = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object';

  (function checkNodeBtoa() {
    if (globalScope.btoa || !isNodeJS()) {
      return;
    }

    globalScope.btoa = function (chars) {
      return Buffer.from(chars, 'binary').toString('base64');
    };
  })();

  (function checkNodeAtob() {
    if (globalScope.atob || !isNodeJS()) {
      return;
    }

    globalScope.atob = 
  })();

  (();

  (function checkDOMTokenListAddRemove() {
    if (!hasDOM || isNodeJS()) {
      return;
    }

    var div = document.createElement('div');
    div.classList.add('testOne', 'testTwo');

    if (div.classList.contains('testOne') === true && div.classList.contains('testTwo') === true) {
      return;
    }

    var OriginalDOMTokenListAdd = DOMTokenList.prototype.add;
    var OriginalDOMTokenListRemove = DOMTokenList.prototype.remove;

    DOMTokenList.prototype.add = function () {
      for (var _len = arguments.length, tokens = new Array(_len), _key = 0; _key < _len; _key++) {
        tokens[_key] = arguments[_key];
      }

      for (var _i = 0, _tokens = tokens; _i < _tokens.length; _i++) {
        var token = _tokens[_i];
        OriginalDOMTokenListAdd.call(this, token);
      }
    };

    DOMTokenList.prototype.remove = function () {
      for (var _len2 = arguments.length, tokens = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        tokens[_key2] = arguments[_key2];
      }

      for (var _i2 = 0, _tokens2 = tokens; _i2 < _tokens2.length; _i2++) {
        var token = _tokens2[_i2];
        OriginalDOMTokenListRemove.call(this, token);
      }
    };
  })();

  (function checkDOMTokenListToggle() {
    if (!hasDOM || isNodeJS()) {
      return;
    }

    var div = document.createElement('div');

    if (div.classList.toggle('test', 0) === false) {
      return;
    }

    DOMTokenList.prototype.toggle = 
  })();

  (function checkStringStartsWith() {
    if (String.prototype.startsWith) {
      return;
    }

    __w_pdfjs_require__(5);
  })();

  (function checkStringEndsWith() {
    if (String.prototype.endsWith) {
      return;
    }

    __w_pdfjs_require__(36);
  })();

  (function checkStringIncludes() {
    if (String.prototype.includes) {
      return;
    }

    __w_pdfjs_require__(38);
  })();

  (function checkArrayIncludes() {
    if (Array.prototype.includes) {
      return;
    }

    __w_pdfjs_require__(40);
  })();

  (function checkArrayFrom() {
    if (Array.from) {
      return;
    }

    __w_pdfjs_require__(47);
  })();

  (function checkObjectAssign() {
    if (Object.assign) {
      return;
    }

    __w_pdfjs_require__(70);
  })();

  (function checkMathLog2() {
    if (Math.log2) {
      return;
    }

    Math.log2 = __w_pdfjs_require__(75);
  })();

  (function checkNumberIsNaN() {
    if (Number.isNaN) {
      return;
    }

    Number.isNaN = __w_pdfjs_require__(77);
  })();

  (function checkNumberIsInteger() {
    if (Number.isInteger) {
      return;
    }

    Number.isInteger = __w_pdfjs_require__(79);
  })();

  (function checkPromise() {
    if (globalScope.Promise && globalScope.Promise.prototype && globalScope.Promise.prototype["finally"]) {
      return;
    }

    globalScope.Promise = __w_pdfjs_require__(82);
  })();

  (function checkWeakMap() {
    if (globalScope.WeakMap) {
      return;
    }

    globalScope.WeakMap = __w_pdfjs_require__(102);
  })();

  (function checkWeakSet() {
    if (globalScope.WeakSet) {
      return;
    }

    globalScope.WeakSet = __w_pdfjs_require__(119);
  })();

  (function checkStringCodePointAt() {
    if (String.codePointAt) {
      return;
    }

    String.codePointAt = __w_pdfjs_require__(123);
  })();

  (function checkStringFromCodePoint() {
    if (String.fromCodePoint) {
      return;
    }

    String.fromCodePoint = __w_pdfjs_require__(125);
  })();

  (();

  (function checkStringPadStart() {
    if (String.prototype.padStart) {
      return;
    }

    __w_pdfjs_require__(134);
  })();

  (();

  (function checkObjectValues() {
    if (Object.values) {
      return;
    }

    Object.values = __w_pdfjs_require__(140);
  })();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function isNodeJS() {
  return (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process + '' === '[object process]' && !process.versions['nw'] && !process.versions['electron'];
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(6);

module.exports = __w_pdfjs_require__(9).String.startsWith;

/***/ }),
/* 6 */
/***/ (,
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);

var core = __w_pdfjs_require__(9);

var hide = __w_pdfjs_require__(10);

var redefine = __w_pdfjs_require__(20);

var ctx = __w_pdfjs_require__(26);

var PROTOTYPE = 'prototype';

var $export = 

global.core = core;
$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
module.exports = $export;

/***/ }),
/* 8 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global;

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = module.exports = {
  version: '2.6.9'
};
if (typeof __e == 'number') __e = core;

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(11);

var createDesc = __w_pdfjs_require__(19);

module.exports = __w_pdfjs_require__(15) ? : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);

var IE8_DOM_DEFINE = __w_pdfjs_require__(14);

var toPrimitive = __w_pdfjs_require__(18);

var dP = Object.defineProperty;
exports.f = __w_pdfjs_require__(15) ? Object.defineProperty : 

/***/ }),
/* 12 */
/***/ (,
/* 13 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = 

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(15) && !__w_pdfjs_require__(16)(;

/***/ }),
/* 15 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(16)(;

/***/ }),
/* 16 */
/***/ (,
/* 17 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);

var document = __w_pdfjs_require__(8).document;

var is = isObject(document) && isObject(document.createElement);

module.exports = 

/***/ }),
/* 18 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);

module.exports = 

/***/ }),
/* 19 */
/***/ (,
/* 20 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);

var hide = __w_pdfjs_require__(10);

var has = __w_pdfjs_require__(21);

var SRC = __w_pdfjs_require__(22)('src');

var $toString = __w_pdfjs_require__(23);

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__w_pdfjs_require__(9).inspectSource = 

(module.exports = (Function.prototype, TO_STRING, ;

/***/ }),
/* 21 */
/***/ (,
/* 22 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var id = 0;
var px = Math.random();

module.exports = 

/***/ }),
/* 23 */
/***/ (,
/* 24 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = __w_pdfjs_require__(9);

var global = __w_pdfjs_require__(8);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = ('versions', []).push({
  version: core.version,
  mode: __w_pdfjs_require__(25) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 25 */
/***/ ),
/* 26 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var aFunction = __w_pdfjs_require__(27);

module.exports =;

/***/ }),
/* 27 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports =;

/***/ }),
/* 28 */
/***/ ),
/* 29 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;

module.exports =;

/***/ }),
/* 30 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isRegExp = __w_pdfjs_require__(31);

var defined = __w_pdfjs_require__(34);

module.exports =;

/***/ }),
/* 31 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);

var cof = __w_pdfjs_require__(32);

var MATCH = __w_pdfjs_require__(33)('match');

module.exports =;

/***/ }),
/* 32 */
/***/ ),
/* 33 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var store = __w_pdfjs_require__(24)('wks');

var uid = __w_pdfjs_require__(22);

var _Symbol = __w_pdfjs_require__(8).Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports =;

$exports.store = store;

/***/ }),
/* 34 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports =;

/***/ }),
/* 35 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var MATCH = __w_pdfjs_require__(33)('match');

module.exports =;

/***/ }),
/* 36 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(37);

module.exports = __w_pdfjs_require__(9).String.endsWith;

/***/ }),
/* 37 */
/***/ ),
/* 38 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(39);

module.exports = __w_pdfjs_require__(9).String.includes;

/***/ }),
/* 39 */
/***/ ),
/* 40 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(41);

module.exports = __w_pdfjs_require__(9).Array.includes;

/***/ }),
/* 41 */
/***/ ),
/* 42 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toIObject = __w_pdfjs_require__(43);

var toLength = __w_pdfjs_require__(28);

var toAbsoluteIndex = __w_pdfjs_require__(45);

module.exports =;

/***/ }),
/* 43 */
/***/ ),
/* 44 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(32);

module.exports = Object('z').propertyIsEnumerable(0) ? Object :;

/***/ }),
/* 45 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(29);

var max = Math.max;
var min = Math.min;

module.exports =;

/***/ }),
/* 46 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var UNSCOPABLES = __w_pdfjs_require__(33)('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __w_pdfjs_require__(10)(ArrayProto, UNSCOPABLES, {});

module.exports =;

/***/ }),
/* 47 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(48);

__w_pdfjs_require__(63);

module.exports = __w_pdfjs_require__(9).Array.from;

/***/ }),
/* 48 */
/***/ ),
/* 49 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(29);

var defined = __w_pdfjs_require__(34);

module.exports =;

/***/ }),
/* 50 */
/***/ ),
/* 51 */
/***/ ),
/* 52 */
/***/ ),
/* 53 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);

var dPs = __w_pdfjs_require__(54);

var enumBugKeys = __w_pdfjs_require__(58);

var IE_PROTO = __w_pdfjs_require__(57)('IE_PROTO');

var Empty = function Empty() {};

var PROTOTYPE = 'prototype';

var _createDict =;

module.exports = Object.create ||;

/***/ }),
/* 54 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(11);

var anObject = __w_pdfjs_require__(12);

var getKeys = __w_pdfjs_require__(55);

module.exports = __w_pdfjs_require__(15) ? Object.defineProperties :;

/***/ }),
/* 55 */
/***/ ),
/* 56 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(21);

var toIObject = __w_pdfjs_require__(43);

var arrayIndexOf = __w_pdfjs_require__(42)(false);

var IE_PROTO = __w_pdfjs_require__(57)('IE_PROTO');

module.exports =;

/***/ }),
/* 57 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var shared = __w_pdfjs_require__(24)('keys');

var uid = __w_pdfjs_require__(22);

module.exports =;

/***/ }),
/* 58 */
/***/ ),
/* 59 */
/***/ ),
/* 60 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var def = __w_pdfjs_require__(11).f;

var has = __w_pdfjs_require__(21);

var TAG = __w_pdfjs_require__(33)('toStringTag');

module.exports =;

/***/ }),
/* 61 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(21);

var toObject = __w_pdfjs_require__(62);

var IE_PROTO = __w_pdfjs_require__(57)('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf ||;

/***/ }),
/* 62 */
/***/ ),
/* 63 */
/***/ ),
/* 64 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);

module.exports =;

/***/ }),
/* 65 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var Iterators = __w_pdfjs_require__(51);

var ITERATOR = __w_pdfjs_require__(33)('iterator');

var ArrayProto = Array.prototype;

module.exports =;

/***/ }),
/* 66 */
/***/ ),
/* 67 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var classof = __w_pdfjs_require__(68);

var ITERATOR = __w_pdfjs_require__(33)('iterator');

var Iterators = __w_pdfjs_require__(51);

module.exports = __w_pdfjs_require__(9).getIteratorMethod =;

/***/ }),
/* 68 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(32);

var TAG = __w_pdfjs_require__(33)('toStringTag');

var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

var tryGet =;

module.exports =;

/***/ }),
/* 69 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ITERATOR = __w_pdfjs_require__(33)('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] =;

  Array.from(riter,);
} catch (e) {}

module.exports =;

/***/ }),
/* 70 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(71);

module.exports = __w_pdfjs_require__(9).Object.assign;

/***/ }),
/* 71 */
/***/ ),
/* 72 */
/***/ ),
/* 73 */
/***/ ),
/* 74 */
/***/ ),
/* 75 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(76);

module.exports = __w_pdfjs_require__(9).Math.log2;

/***/ }),
/* 76 */
/***/ ),
/* 77 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(78);

module.exports = __w_pdfjs_require__(9).Number.isNaN;

/***/ }),
/* 78 */
/***/ ),
/* 79 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(80);

module.exports = __w_pdfjs_require__(9).Number.isInteger;

/***/ }),
/* 80 */
/***/ ),
/* 81 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);

var floor = Math.floor;

module.exports =;

/***/ }),
/* 82 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(83);

__w_pdfjs_require__(48);

__w_pdfjs_require__(84);

__w_pdfjs_require__(87);

__w_pdfjs_require__(100);

__w_pdfjs_require__(101);

module.exports = __w_pdfjs_require__(9).Promise;

/***/ }),
/* 83 */
/***/ ),
/* 84 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $iterators = __w_pdfjs_require__(85);

var getKeys = __w_pdfjs_require__(55);

var redefine = __w_pdfjs_require__(20);

var global = __w_pdfjs_require__(8);

var hide = __w_pdfjs_require__(10);

var Iterators = __w_pdfjs_require__(51);

var wks = __w_pdfjs_require__(33);

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 85 */
/***/ ),
/* 86 */
/***/ ),
/* 87 */
/***/ ),
/* 88 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports =;

/***/ }),
/* 89 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(26);

var call = __w_pdfjs_require__(64);

var isArrayIter = __w_pdfjs_require__(65);

var anObject = __w_pdfjs_require__(12);

var toLength = __w_pdfjs_require__(28);

var getIterFn = __w_pdfjs_require__(67);

var BREAK = {};
var RETURN = {};

var _exports = module.exports =;

_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 90 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(12);

var aFunction = __w_pdfjs_require__(27);

var SPECIES = __w_pdfjs_require__(33)('species');

module.exports =;

/***/ }),
/* 91 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(26);

var invoke = __w_pdfjs_require__(92);

var html = __w_pdfjs_require__(59);

var cel = __w_pdfjs_require__(17);

var global = __w_pdfjs_require__(8);

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run =;

var listener =;

if (!setTask || !clearTask) {
  setTask =;

  clearTask =;

  if (__w_pdfjs_require__(32)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
  } else if (Dispatch && Dispatch.now) {
    defer =;
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer =;

    global.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer =;
  } else {
    defer =;
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports =;

/***/ }),
/* 93 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);

var macrotask = __w_pdfjs_require__(91).set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __w_pdfjs_require__(32)(process) == 'process';

module.exports =;

/***/ }),
/* 94 */
/***/ ),
/* 95 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports =;

/***/ }),
/* 96 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 97 */
/***/ ),
/* 98 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var redefine = __w_pdfjs_require__(20);

module.exports =;

/***/ }),
/* 99 */
/***/ ),
/* 100 */
/***/ ),
/* 101 */
/***/ ),
/* 102 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(83);

__w_pdfjs_require__(84);

__w_pdfjs_require__(103);

__w_pdfjs_require__(115);

__w_pdfjs_require__(117);

module.exports = __w_pdfjs_require__(9).WeakMap;

/***/ }),
/* 103 */
/***/ ),
/* 104 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(26);

var IObject = __w_pdfjs_require__(44);

var toObject = __w_pdfjs_require__(62);

var toLength = __w_pdfjs_require__(28);

var asc = __w_pdfjs_require__(105);

module.exports =;

/***/ }),
/* 105 */
/***/ ),
/* 106 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);

var isArray = __w_pdfjs_require__(107);

var SPECIES = __w_pdfjs_require__(33)('species');

module.exports =;

/***/ }),
/* 107 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(32);

module.exports = Array.isArray ||;

/***/ }),
/* 108 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __w_pdfjs_require__(22)('meta');

var isObject = __w_pdfjs_require__(13);

var has = __w_pdfjs_require__(21);

var setDesc = __w_pdfjs_require__(11).f;

var id = 0;

var isExtensible = Object.isExtensible ||;

var FREEZE = !__w_pdfjs_require__(16));

var setMeta =;

var fastKey =;

var getWeak =;

var onFreeze =;

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 109 */
/***/ ),
/* 110 */
/***/ ),
/* 111 */
/***/ ),
/* 112 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);

var setPrototypeOf = __w_pdfjs_require__(113).set;

module.exports =;

/***/ }),
/* 113 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(13);

var anObject = __w_pdfjs_require__(12);

var check =;

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ?({}, false) : undefined),
  check: check
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pIE = __w_pdfjs_require__(74);

var createDesc = __w_pdfjs_require__(19);

var toIObject = __w_pdfjs_require__(43);

var toPrimitive = __w_pdfjs_require__(18);

var has = __w_pdfjs_require__(21);

var IE8_DOM_DEFINE = __w_pdfjs_require__(14);

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __w_pdfjs_require__(15) ? gOPD :;

/***/ }),
/* 115 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(116)('WeakMap');

/***/ }),
/* 116 */
/***/ ),
/* 117 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(118)('WeakMap');

/***/ }),
/* 118 */
/***/ ),
/* 119 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(83);

__w_pdfjs_require__(84);

__w_pdfjs_require__(120);

__w_pdfjs_require__(121);

__w_pdfjs_require__(122);

module.exports = __w_pdfjs_require__(9).WeakSet;

/***/ }),
/* 120 */
/***/ ),
/* 121 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(116)('WeakSet');

/***/ }),
/* 122 */
/***/ ),
/* 123 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(124);

module.exports = __w_pdfjs_require__(9).String.codePointAt;

/***/ }),
/* 124 */
/***/ ),
/* 125 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(126);

module.exports = __w_pdfjs_require__(9).String.fromCodePoint;

/***/ }),
/* 126 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);

var toAbsoluteIndex = __w_pdfjs_require__(45);

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  fromCodePoint:
});

/***/ }),
/* 127 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(128);

__w_pdfjs_require__(83);

module.exports = __w_pdfjs_require__(9).Symbol;

/***/ }),
/* 128 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __w_pdfjs_require__(8);

var has = __w_pdfjs_require__(21);

var DESCRIPTORS = __w_pdfjs_require__(15);

var $export = __w_pdfjs_require__(7);

var redefine = __w_pdfjs_require__(20);

var META = __w_pdfjs_require__(108).KEY;

var $fails = __w_pdfjs_require__(16);

var shared = __w_pdfjs_require__(24);

var setToStringTag = __w_pdfjs_require__(60);

var uid = __w_pdfjs_require__(22);

var wks = __w_pdfjs_require__(33);

var wksExt = __w_pdfjs_require__(129);

var wksDefine = __w_pdfjs_require__(130);

var enumKeys = __w_pdfjs_require__(131);

var isArray = __w_pdfjs_require__(107);

var anObject = __w_pdfjs_require__(12);

var isObject = __w_pdfjs_require__(13);

var toObject = __w_pdfjs_require__(62);

var toIObject = __w_pdfjs_require__(43);

var toPrimitive = __w_pdfjs_require__(18);

var createDesc = __w_pdfjs_require__(19);

var _create = __w_pdfjs_require__(53);

var gOPNExt = __w_pdfjs_require__(132);

var $GOPD = __w_pdfjs_require__(114);

var $GOPS = __w_pdfjs_require__(73);

var $DP = __w_pdfjs_require__(11);

var $keys = __w_pdfjs_require__(55);

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
var setSymbolDesc = DESCRIPTORS && $fails) ? : dP;

var wrap =;

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? :;

var $defineProperty =;

var $defineProperties =;

var $create =;

var $propertyIsEnumerable =;

var $getOwnPropertyDescriptor =;

var $getOwnPropertyNames =;

var $getOwnPropertySymbols =;

if (!USE_NATIVE) {
  $Symbol =;

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __w_pdfjs_require__(133).f = gOPNExt.f = $getOwnPropertyNames;
  __w_pdfjs_require__(74).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__w_pdfjs_require__(25)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f =;
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  'for':,
  keyFor:,
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple:
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  create: $create,
  defineProperty: $defineProperty,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols
});
var FAILS_ON_PRIMITIVES = $fails);
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols:
});
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails)), 'JSON', {
  stringify:
});
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __w_pdfjs_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
setToStringTag($Symbol, 'Symbol');
setToStringTag(Math, 'Math', true);
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 129 */
/***/ ),
/* 130 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(8);

var core = __w_pdfjs_require__(9);

var LIBRARY = __w_pdfjs_require__(25);

var wksExt = __w_pdfjs_require__(129);

var defineProperty = __w_pdfjs_require__(11).f;

module.exports =;

/***/ }),
/* 131 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(55);

var gOPS = __w_pdfjs_require__(73);

var pIE = __w_pdfjs_require__(74);

module.exports =;

/***/ }),
/* 132 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var toIObject = __w_pdfjs_require__(43);

var gOPN = __w_pdfjs_require__(133).f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames =;

module.exports.f =;

/***/ }),
/* 133 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $keys = __w_pdfjs_require__(56);

var hiddenKeys = __w_pdfjs_require__(58).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames ||;

/***/ }),
/* 134 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(135);

module.exports = __w_pdfjs_require__(9).String.padStart;

/***/ }),
/* 135 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);

var $pad = __w_pdfjs_require__(136);

var userAgent = __w_pdfjs_require__(96);

var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toLength = __w_pdfjs_require__(28);

var repeat = __w_pdfjs_require__(137);

var defined = __w_pdfjs_require__(34);

module.exports =;

/***/ }),
/* 137 */
/***/ ),
/* 138 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(139);

module.exports = __w_pdfjs_require__(9).String.padEnd;

/***/ }),
/* 139 */
/***/ ),
/* 140 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(141);

module.exports = __w_pdfjs_require__(9).Object.values;

/***/ }),
/* 141 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(7);

var $values = __w_pdfjs_require__(142)(false);

$export($export.S, 'Object', {
  values:
});

/***/ }),
/* 142 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var DESCRIPTORS = __w_pdfjs_require__(15);

var getKeys = __w_pdfjs_require__(55);

var toIObject = __w_pdfjs_require__(43);

var isEnum = __w_pdfjs_require__(74).f;

module.exports =;

/***/ }),
/* 143 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


{
  var isReadableStreamSupported = false;

  if (typeof ReadableStream !== 'undefined') {
    try {
      new ReadableStream({
        start:
      });
      isReadableStreamSupported = true;
    } catch (e) {}
  }

  if (isReadableStreamSupported) {
    exports.ReadableStream = ReadableStream;
  } else {
    exports.ReadableStream = __w_pdfjs_require__(144).ReadableStream;
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

)(exports,([function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? :;

  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;

 

  exports.typeIsObject =;

  exports.createDataProperty =;

  exports.createArrayFromList = function (elements) {
    return elements.slice();
  };

  exports.ArrayBufferCopy =;

  exports.CreateIterResultObject =;

  exports.IsFiniteNonNegativeNumber = function (v) {
    if (Number.isNaN(v)) {
      return false;
    }

    if (v === Infinity) {
      return false;
    }

    if (v < 0) {
      return false;
    }

    return true;
  };

  function Call(F, V, args) {
    if (typeof F !== 'function') {
      throw new TypeError('Argument is not a function');
    }

    return Function.prototype.apply.call(F, V, args);
  }

  exports.InvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    var method = O[P];

    if (method === undefined) {
      return undefined;
    }

    return Call(method, O, args);
  };

  exports.PromiseInvokeOrNoop =;

  exports.PromiseInvokeOrPerformFallback = function (O, P, args, F, argsF) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    assert(Array.isArray(argsF));
    var method = void 0;

    try {
      method = O[P];
    } catch (methodE) {
      return Promise.reject(methodE);
    }

    if (method === undefined) {
      return F.apply(null, argsF);
    }

    try {
      return Promise.resolve(Call(method, O, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  exports.TransferArrayBuffer =;

  exports.ValidateAndNormalizeHighWaterMark = function (highWaterMark) {
    highWaterMark = Number(highWaterMark);

    if (Number.isNaN(highWaterMark) || highWaterMark < 0) {
      throw new RangeError('highWaterMark property of a queuing strategy must be non-negative and non-NaN');
    }

    return highWaterMark;
  };

  exports.ValidateAndNormalizeQueuingStrategy = function (size, highWaterMark) {
    if (size !== undefined && typeof size !== 'function') {
      throw new TypeError('size property of a queuing strategy must be a function');
    }

    highWaterMark = exports.ValidateAndNormalizeHighWaterMark(highWaterMark);
    return {
      size: size,
      highWaterMark: highWaterMark
    };
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  function rethrowAssertionErrorRejection(e) {
    if (e && e.constructor === AssertionError) {
      setTimeout, 0);
    }
  }

 

  AssertionError.prototype = Object.create(Error.prototype);
  AssertionError.prototype.constructor = AssertionError;

 

  module.exports = {
    rethrowAssertionErrorRejection: rethrowAssertionErrorRejection,
    AssertionError: AssertionError,
    assert: assert
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _require = __w_pdfjs_require__(0),
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      typeIsObject = _require.typeIsObject;

  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert,
      rethrowAssertionErrorRejection = _require2.rethrowAssertionErrorRejection;

  var _require3 = __w_pdfjs_require__(3),
      DequeueValue = _require3.DequeueValue,
      EnqueueValueWithSize = _require3.EnqueueValueWithSize,
      PeekQueueValue = _require3.PeekQueueValue,
      ResetQueue = _require3.ResetQueue;

  var WritableStream = function () {
    function WritableStream() {
      var underlyingSink = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          _ref$highWaterMark = _ref.highWaterMark,
          highWaterMark = _ref$highWaterMark === undefined ? 1 : _ref$highWaterMark;

      _classCallCheck(this, WritableStream);

      this._state = 'writable';
      this._storedError = undefined;
      this._writer = undefined;
      this._writableStreamController = undefined;
      this._writeRequests = [];
      this._inFlightWriteRequest = undefined;
      this._closeRequest = undefined;
      this._inFlightCloseRequest = undefined;
      this._pendingAbortRequest = undefined;
      this._backpressure = false;
      var type = underlyingSink.type;

      if (type !== undefined) {
        throw new RangeError('Invalid type is specified');
      }

      this._writableStreamController = new WritableStreamDefaultController(this, underlyingSink, size, highWaterMark);

      this._writableStreamController.__startSteps();
    }

    _createClass(WritableStream, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('abort'));
        }

        if (IsWritableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot abort a stream that already has a writer'));
        }

        return WritableStreamAbort(this, reason);
      }
    }, {
      key: 'getWriter',
      value: function getWriter() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('getWriter');
        }

        return AcquireWritableStreamDefaultWriter(this);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }

        return IsWritableStreamLocked(this);
      }
    }]);

    return WritableStream;
  }();

  module.exports = {
    AcquireWritableStreamDefaultWriter: AcquireWritableStreamDefaultWriter,
    IsWritableStream: IsWritableStream,
    IsWritableStreamLocked: IsWritableStreamLocked,
    WritableStream: WritableStream,
    WritableStreamAbort: WritableStreamAbort,
    WritableStreamDefaultControllerError: WritableStreamDefaultControllerError,
    WritableStreamDefaultWriterCloseWithErrorPropagation: WritableStreamDefaultWriterCloseWithErrorPropagation,
    WritableStreamDefaultWriterRelease: WritableStreamDefaultWriterRelease,
    WritableStreamDefaultWriterWrite: WritableStreamDefaultWriterWrite,
    WritableStreamCloseQueuedOrInFlight: WritableStreamCloseQueuedOrInFlight
  };

  function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
  }

  function IsWritableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
      return false;
    }

    return true;
  }

  function IsWritableStreamLocked(stream) {
    assert(IsWritableStream(stream) === true, 'IsWritableStreamLocked should only be used on known writable streams');

    if (stream._writer === undefined) {
      return false;
    }

    return true;
  }

  function WritableStreamAbort(stream, reason) {
    var state = stream._state;

    if (state === 'closed') {
      return Promise.resolve(undefined);
    }

    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    var error = new TypeError('Requested to abort');

    if (stream._pendingAbortRequest !== undefined) {
      return Promise.reject(error);
    }

    assert(state === 'writable' || state === 'erroring', 'state must be writable or erroring');
    var wasAlreadyErroring = false;

    if (state === 'erroring') {
      wasAlreadyErroring = true;
      reason = undefined;
    }

    var promise = new Promise);

    if (wasAlreadyErroring === false) {
      WritableStreamStartErroring(stream, error);
    }

    return promise;
  }

 

 

  function WritableStreamStartErroring(stream, reason) {
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
    assert(stream._state === 'writable', 'state must be writable');
    var controller = stream._writableStreamController;
    assert(controller !== undefined, 'controller must not be undefined');
    stream._state = 'erroring';
    stream._storedError = reason;
    var writer = stream._writer;

    if (writer !== undefined) {
      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }

    if (WritableStreamHasOperationMarkedInFlight(stream) === false && controller._started === true) {
      WritableStreamFinishErroring(stream);
    }
  }

 

 

 

  function WritableStreamFinishInFlightClose(stream) {
    assert(stream._inFlightCloseRequest !== undefined);

    stream._inFlightCloseRequest._resolve(undefined);

    stream._inFlightCloseRequest = undefined;
    var state = stream._state;
    assert(state === 'writable' || state === 'erroring');

    if (state === 'erroring') {
      stream._storedError = undefined;

      if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._resolve();

        stream._pendingAbortRequest = undefined;
      }
    }

    stream._state = 'closed';
    var writer = stream._writer;

    if (writer !== undefined) {
      defaultWriterClosedPromiseResolve(writer);
    }

    assert(stream._pendingAbortRequest === undefined, 'stream._pendingAbortRequest === undefined');
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
  }

 

  function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }

    return true;
  }

  function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }

    return true;
  }

 

 

  function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    assert(stream._state === 'errored', '_stream_.[[state]] is `"errored"`');

    if (stream._closeRequest !== undefined) {
      assert(stream._inFlightCloseRequest === undefined);

      stream._closeRequest._reject(stream._storedError);

      stream._closeRequest = undefined;
    }

    var writer = stream._writer;

    if (writer !== undefined) {
      defaultWriterClosedPromiseReject(writer, stream._storedError);

      writer._closedPromise["catch"](function () {});
    }
  }

  function WritableStreamUpdateBackpressure(stream, backpressure) {
    assert(stream._state === 'writable');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var writer = stream._writer;

    if (writer !== undefined && backpressure !== stream._backpressure) {
      if (backpressure === true) {
        defaultWriterReadyPromiseReset(writer);
      } else {
        assert(backpressure === false);
        defaultWriterReadyPromiseResolve(writer);
      }
    }

    stream._backpressure = backpressure;
  }

  var WritableStreamDefaultWriter = function () {
    function WritableStreamDefaultWriter(stream) {
      _classCallCheck(this, WritableStreamDefaultWriter);

      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultWriter can only be constructed with a WritableStream instance');
      }

      if (IsWritableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive writing by another writer');
      }

      this._ownerWritableStream = stream;
      stream._writer = this;
      var state = stream._state;

      if (state === 'writable') {
        if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._backpressure === true) {
          defaultWriterReadyPromiseInitialize(this);
        } else {
          defaultWriterReadyPromiseInitializeAsResolved(this);
        }

        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'erroring') {
        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);

        this._readyPromise["catch"](function () {});

        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'closed') {
        defaultWriterReadyPromiseInitializeAsResolved(this);
        defaultWriterClosedPromiseInitializeAsResolved(this);
      } else {
        assert(state === 'errored', 'state must be errored');
        var storedError = stream._storedError;
        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);

        this._readyPromise["catch"](function () {});

        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);

        this._closedPromise["catch"](function () {});
      }
    }

    _createClass(WritableStreamDefaultWriter, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('abort'));
        }

        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('abort'));
        }

        return WritableStreamDefaultWriterAbort(this, reason);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('close'));
        }

        var stream = this._ownerWritableStream;

        if (stream === undefined) {
          return Promise.reject(defaultWriterLockException('close'));
        }

        if (WritableStreamCloseQueuedOrInFlight(stream) === true) {
          return Promise.reject(new TypeError('cannot close an already-closing stream'));
        }

        return WritableStreamDefaultWriterClose(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('releaseLock');
        }

        var stream = this._ownerWritableStream;

        if (stream === undefined) {
          return;
        }

        assert(stream._writer !== undefined);
        WritableStreamDefaultWriterRelease(this);
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('write'));
        }

        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('write to'));
        }

        return WritableStreamDefaultWriterWrite(this, chunk);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('closed'));
        }

        return this._closedPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('desiredSize');
        }

        if (this._ownerWritableStream === undefined) {
          throw defaultWriterLockException('desiredSize');
        }

        return WritableStreamDefaultWriterGetDesiredSize(this);
      }
    }, {
      key: 'ready',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('ready'));
        }

        return this._readyPromise;
      }
    }]);

    return WritableStreamDefaultWriter;
  }();

  function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
      return false;
    }

    return true;
  }

  function WritableStreamDefaultWriterAbort(writer, reason) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    return WritableStreamAbort(stream, reason);
  }

  function WritableStreamDefaultWriterClose(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;

    if (state === 'closed' || state === 'errored') {
      return Promise.reject(new TypeError('The stream (in ' + state + ' state) is not in the writable state and cannot be closed'));
    }

    assert(state === 'writable' || state === 'erroring');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var promise = new Promise);

    if (stream._backpressure === true && state === 'writable') {
      defaultWriterReadyPromiseResolve(writer);
    }

    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
  }

  function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;

    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.resolve();
    }

    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    assert(state === 'writable' || state === 'erroring');
    return WritableStreamDefaultWriterClose(writer);
  }

  function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
      defaultWriterClosedPromiseReject(writer, error);
    } else {
      defaultWriterClosedPromiseResetToRejected(writer, error);
    }

    writer._closedPromise["catch"](function () {});
  }

  function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
      defaultWriterReadyPromiseReject(writer, error);
    } else {
      defaultWriterReadyPromiseResetToRejected(writer, error);
    }

    writer._readyPromise["catch"](function () {});
  }

  function WritableStreamDefaultWriterGetDesiredSize(writer) {
    var stream = writer._ownerWritableStream;
    var state = stream._state;

    if (state === 'errored' || state === 'erroring') {
      return null;
    }

    if (state === 'closed') {
      return 0;
    }

    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
  }

 

  function WritableStreamDefaultWriterWrite(writer, chunk) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var controller = stream._writableStreamController;
    var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);

    if (stream !== writer._ownerWritableStream) {
      return Promise.reject(defaultWriterLockException('write to'));
    }

    var state = stream._state;

    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.reject(new TypeError('The stream is closing or closed and cannot be written to'));
    }

    if (state === 'erroring') {
      return Promise.reject(stream._storedError);
    }

    assert(state === 'writable');
    var promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
  }

  var WritableStreamDefaultController = function () {
    function WritableStreamDefaultController(stream, underlyingSink, size, highWaterMark) {
      _classCallCheck(this, WritableStreamDefaultController);

      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultController can only be constructed with a WritableStream instance');
      }

      if (stream._writableStreamController !== undefined) {
        throw new TypeError('WritableStreamDefaultController instances can only be created by the WritableStream constructor');
      }

      this._controlledWritableStream = stream;
      this._underlyingSink = underlyingSink;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var backpressure = WritableStreamDefaultControllerGetBackpressure(this);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }

    _createClass(WritableStreamDefaultController, [{
      key: 'error',
      value: function error(e) {
        if (IsWritableStreamDefaultController(this) === false) {
          throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
        }

        var state = this._controlledWritableStream._state;

        if (state !== 'writable') {
          return;
        }

        WritableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__abortSteps',
      value:
    }, {
      key: '__errorSteps',
      value:
    }, {
      key: '__startSteps',
      value: function __startSteps() {
        var _this = this;

        var startResult = InvokeOrNoop(this._underlyingSink, 'start', [this]);
        var stream = this._controlledWritableStream;
        Promise.resolve(startResult).then,)["catch"](rethrowAssertionErrorRejection);
      }
    }]);

    return WritableStreamDefaultController;
  }();

 

  function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    var strategySize = controller._strategySize;

    if (strategySize === undefined) {
      return 1;
    }

    try {
      return strategySize(chunk);
    } catch (chunkSizeE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
      return 1;
    }
  }

 

 

  function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSink')) {
      return false;
    }

    return true;
  }

  function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    var stream = controller._controlledWritableStream;

    if (controller._started === false) {
      return;
    }

    if (stream._inFlightWriteRequest !== undefined) {
      return;
    }

    var state = stream._state;

    if (state === 'closed' || state === 'errored') {
      return;
    }

    if (state === 'erroring') {
      WritableStreamFinishErroring(stream);
      return;
    }

    if (controller._queue.length === 0) {
      return;
    }

    var writeRecord = PeekQueueValue(controller);

    if (writeRecord === 'close') {
      WritableStreamDefaultControllerProcessClose(controller);
    } else {
      WritableStreamDefaultControllerProcessWrite(controller, writeRecord.chunk);
    }
  }

  function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
      WritableStreamDefaultControllerError(controller, error);
    }
  }

  function WritableStreamDefaultControllerProcessClose(controller) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    assert(controller._queue.length === 0, 'queue must be empty once the final write record is dequeued');
    var sinkClosePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'close', []);
    sinkClosePromise.then, function (reason) {
      WritableStreamFinishInFlightCloseWithError(stream, reason);
    })["catch"](rethrowAssertionErrorRejection);
  }

  function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    var sinkWritePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'write', [chunk, controller]);
    sinkWritePromise.then, function (reason) {
      WritableStreamFinishInFlightWriteWithError(stream, reason);
    })["catch"](rethrowAssertionErrorRejection);
  }

 

 

  function streamBrandCheckException(name) {
    return new TypeError('WritableStream.prototype.' + name + ' can only be used on a WritableStream');
  }

  function defaultWriterBrandCheckException(name) {
    return new TypeError('WritableStreamDefaultWriter.prototype.' + name + ' can only be used on a WritableStreamDefaultWriter');
  }

  function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
  }

 

  function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }

  function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    writer._closedPromise = Promise.resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }

 

 

 

 

 

 

 

 

 

 
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _require = __w_pdfjs_require__(0),
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber;

  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert;

  exports.DequeueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never dequeue from an empty queue.');

    var pair = container._queue.shift();

    container._queueTotalSize -= pair.size;

    if (container._queueTotalSize < 0) {
      container._queueTotalSize = 0;
    }

    return pair.value;
  };

  exports.EnqueueValueWithSize = function (container, value, size) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and ' + '[[queueTotalSize]].');
    size = Number(size);

    if (!IsFiniteNonNegativeNumber(size)) {
      throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }

    container._queue.push({
      value: value,
      size: size
    });

    container._queueTotalSize += size;
  };

  exports.PeekQueueValue =;

  exports.ResetQueue =;
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _require = __w_pdfjs_require__(0),
      ArrayBufferCopy = _require.ArrayBufferCopy,
      CreateIterResultObject = _require.CreateIterResultObject,
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber,
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      TransferArrayBuffer = _require.TransferArrayBuffer,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      ValidateAndNormalizeHighWaterMark = _require.ValidateAndNormalizeHighWaterMark;

  var _require2 = __w_pdfjs_require__(0),
      createArrayFromList = _require2.createArrayFromList,
      createDataProperty = _require2.createDataProperty,
      typeIsObject = _require2.typeIsObject;

  var _require3 = __w_pdfjs_require__(1),
      assert = _require3.assert,
      rethrowAssertionErrorRejection = _require3.rethrowAssertionErrorRejection;

  var _require4 = __w_pdfjs_require__(3),
      DequeueValue = _require4.DequeueValue,
      EnqueueValueWithSize = _require4.EnqueueValueWithSize,
      ResetQueue = _require4.ResetQueue;

  var _require5 = __w_pdfjs_require__(2),
      AcquireWritableStreamDefaultWriter = _require5.AcquireWritableStreamDefaultWriter,
      IsWritableStream = _require5.IsWritableStream,
      IsWritableStreamLocked = _require5.IsWritableStreamLocked,
      WritableStreamAbort = _require5.WritableStreamAbort,
      WritableStreamDefaultWriterCloseWithErrorPropagation = _require5.WritableStreamDefaultWriterCloseWithErrorPropagation,
      WritableStreamDefaultWriterRelease = _require5.WritableStreamDefaultWriterRelease,
      WritableStreamDefaultWriterWrite = _require5.WritableStreamDefaultWriterWrite,
      WritableStreamCloseQueuedOrInFlight = _require5.WritableStreamCloseQueuedOrInFlight;

  var ReadableStream = function () {
    function ReadableStream() {
      var underlyingSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          highWaterMark = _ref.highWaterMark;

      _classCallCheck(this, ReadableStream);

      this._state = 'readable';
      this._reader = undefined;
      this._storedError = undefined;
      this._disturbed = false;
      this._readableStreamController = undefined;
      var type = underlyingSource.type;
      var typeString = String(type);

      if (typeString === 'bytes') {
        if (highWaterMark === undefined) {
          highWaterMark = 0;
        }

        this._readableStreamController = new ReadableByteStreamController(this, underlyingSource, highWaterMark);
      } else if (type === undefined) {
        if (highWaterMark === undefined) {
          highWaterMark = 1;
        }

        this._readableStreamController = new ReadableStreamDefaultController(this, underlyingSource, size, highWaterMark);
      } else {
        throw new RangeError('Invalid type is specified');
      }
    }

    _createClass(ReadableStream, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('cancel'));
        }

        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot cancel a stream that already has a reader'));
        }

        return ReadableStreamCancel(this, reason);
      }
    }, {
      key: 'getReader',
      value: function getReader() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            mode = _ref2.mode;

        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('getReader');
        }

        if (mode === undefined) {
          return AcquireReadableStreamDefaultReader(this);
        }

        mode = String(mode);

        if (mode === 'byob') {
          return AcquireReadableStreamBYOBReader(this);
        }

        throw new RangeError('Invalid mode is specified');
      }
    }, {
      key: 'pipeThrough',
      value:
    }, {
      key: 'pipeTo',
      value: function pipeTo(dest) {
        var _this = this;

        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            preventClose = _ref4.preventClose,
            preventAbort = _ref4.preventAbort,
            preventCancel = _ref4.preventCancel;

        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('pipeTo'));
        }

        if (IsWritableStream(dest) === false) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo\'s first argument must be a WritableStream'));
        }

        preventClose = Boolean(preventClose);
        preventAbort = Boolean(preventAbort);
        preventCancel = Boolean(preventCancel);

        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }

        if (IsWritableStreamLocked(dest) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }

        var reader = AcquireReadableStreamDefaultReader(this);
        var writer = AcquireWritableStreamDefaultWriter(dest);
        var shuttingDown = false;
        var currentWrite = Promise.resolve();
        return new Promise(function (resolve, reject) {
          function pipeLoop() {
            currentWrite = Promise.resolve();

            if (shuttingDown === true) {
              return Promise.resolve();
            }

            return writer._readyPromise.then(function () {
              return ReadableStreamDefaultReaderRead(reader).then(function (_ref5) {
                var value = _ref5.value,
                    done = _ref5.done;

                if (done === true) {
                  return;
                }

                currentWrite = WritableStreamDefaultWriterWrite(writer, value)["catch"](function () {});
              });
            }).then(pipeLoop);
          }

          isOrBecomesErrored(_this, reader._closedPromise, function (storedError) {
            if (preventAbort === false) {
              shutdownWithAction(function () {
                return WritableStreamAbort(dest, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(_this, reader._closedPromise, function () {
            if (preventClose === false) {
              shutdownWithAction(function () {
                return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
              });
            } else {
              shutdown();
            }
          });

          if (WritableStreamCloseQueuedOrInFlight(dest) === true || dest._state === 'closed') {
            var destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');

            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, destClosed);
              }, true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }

          pipeLoop()["catch"]);

         

          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
              action(stream._storedError);
            } else {
              promise["catch"](action)["catch"](rethrowAssertionErrorRejection);
            }
          }

          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
              action();
            } else {
              promise.then(action)["catch"](rethrowAssertionErrorRejection);
            }
          }

          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown === true) {
              return;
            }

            shuttingDown = true;

            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(doTheRest);
            } else {
              doTheRest();
            }

            function doTheRest() {
              action().then(function () {
                return finalize(originalIsError, originalError);
              },)["catch"](rethrowAssertionErrorRejection);
            }
          }

          function shutdown(isError, error) {
            if (shuttingDown === true) {
              return;
            }

            shuttingDown = true;

            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then)["catch"](rethrowAssertionErrorRejection);
            } else {
              finalize(isError, error);
            }
          }

          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);

            if (isError) {
              reject(error);
            } else {
              resolve(undefined);
            }
          }
        });
      }
    }, {
      key: 'tee',
      value: function tee() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('tee');
        }

        var branches = ReadableStreamTee(this, false);
        return createArrayFromList(branches);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }

        return IsReadableStreamLocked(this);
      }
    }]);

    return ReadableStream;
  }();

  module.exports = {
    ReadableStream: ReadableStream,
    IsReadableStreamDisturbed: IsReadableStreamDisturbed,
    ReadableStreamDefaultControllerClose: ReadableStreamDefaultControllerClose,
    ReadableStreamDefaultControllerEnqueue: ReadableStreamDefaultControllerEnqueue,
    ReadableStreamDefaultControllerError: ReadableStreamDefaultControllerError,
    ReadableStreamDefaultControllerGetDesiredSize: ReadableStreamDefaultControllerGetDesiredSize
  };

  function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
  }

 

  function IsReadableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
      return false;
    }

    return true;
  }

 

  function IsReadableStreamLocked(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamLocked should only be used on known readable streams');

    if (stream._reader === undefined) {
      return false;
    }

    return true;
  }

  function ReadableStreamTee(stream, cloneForBranch2) {
    assert(IsReadableStream(stream) === true);
    assert(typeof cloneForBranch2 === 'boolean');
    var reader = AcquireReadableStreamDefaultReader(stream);
    var teeState = {
      closedOrErrored: false,
      canceled1: false,
      canceled2: false,
      reason1: undefined,
      reason2: undefined
    };
    teeState.promise = new Promise(function (resolve) {
      teeState._resolve = resolve;
    });
    var pull = create_ReadableStreamTeePullFunction();
    pull._reader = reader;
    pull._teeState = teeState;
    pull._cloneForBranch2 = cloneForBranch2;
    var cancel1 = create_ReadableStreamTeeBranch1CancelFunction();
    cancel1._stream = stream;
    cancel1._teeState = teeState;
    var cancel2 = create_ReadableStreamTeeBranch2CancelFunction();
    cancel2._stream = stream;
    cancel2._teeState = teeState;
    var underlyingSource1 = Object.create(Object.prototype);
    createDataProperty(underlyingSource1, 'pull', pull);
    createDataProperty(underlyingSource1, 'cancel', cancel1);
    var branch1Stream = new ReadableStream(underlyingSource1);
    var underlyingSource2 = Object.create(Object.prototype);
    createDataProperty(underlyingSource2, 'pull', pull);
    createDataProperty(underlyingSource2, 'cancel', cancel2);
    var branch2Stream = new ReadableStream(underlyingSource2);
    pull._branch1 = branch1Stream._readableStreamController;
    pull._branch2 = branch2Stream._readableStreamController;

    reader._closedPromise["catch"](function (r) {
      if (teeState.closedOrErrored === true) {
        return;
      }

      ReadableStreamDefaultControllerError(pull._branch1, r);
      ReadableStreamDefaultControllerError(pull._branch2, r);
      teeState.closedOrErrored = true;
    });

    return [branch1Stream, branch2Stream];
  }

  function create_ReadableStreamTeePullFunction() {
    function f() {
      var reader = f._reader,
          branch1 = f._branch1,
          branch2 = f._branch2,
          teeState = f._teeState;
      return ReadableStreamDefaultReaderRead(reader).then(function (result) {
        assert(typeIsObject(result));
        var value = result.value;
        var done = result.done;
        assert(typeof done === 'boolean');

        if (done === true && teeState.closedOrErrored === false) {
          if (teeState.canceled1 === false) {
            ReadableStreamDefaultControllerClose(branch1);
          }

          if (teeState.canceled2 === false) {
            ReadableStreamDefaultControllerClose(branch2);
          }

          teeState.closedOrErrored = true;
        }

        if (teeState.closedOrErrored === true) {
          return;
        }

        var value1 = value;
        var value2 = value;

        if (teeState.canceled1 === false) {
          ReadableStreamDefaultControllerEnqueue(branch1, value1);
        }

        if (teeState.canceled2 === false) {
          ReadableStreamDefaultControllerEnqueue(branch2, value2);
        }
      });
    }

    return f;
  }

  function create_ReadableStreamTeeBranch1CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled1 = true;
      teeState.reason1 = reason;

      if (teeState.canceled2 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);

        teeState._resolve(cancelResult);
      }

      return teeState.promise;
    }

    return f;
  }

 

 

 

  function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;

    if (stream._state === 'closed') {
      return Promise.resolve(undefined);
    }

    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    ReadableStreamClose(stream);

    var sourceCancelPromise = stream._readableStreamController.__cancelSteps(reason);

    return sourceCancelPromise.then);
  }

  function ReadableStreamClose(stream) {
    assert(stream._state === 'readable');
    stream._state = 'closed';
    var reader = stream._reader;

    if (reader === undefined) {
      return undefined;
    }

    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var _resolve = reader._readRequests[i]._resolve;

        _resolve(CreateIterResultObject(undefined, true));
      }

      reader._readRequests = [];
    }

    defaultReaderClosedPromiseResolve(reader);
    return undefined;
  }

  function ReadableStreamError(stream, e) {
    assert(IsReadableStream(stream) === true, 'stream must be ReadableStream');
    assert(stream._state === 'readable', 'state must be readable');
    stream._state = 'errored';
    stream._storedError = e;
    var reader = stream._reader;

    if (reader === undefined) {
      return undefined;
    }

    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var readRequest = reader._readRequests[i];

        readRequest._reject(e);
      }

      reader._readRequests = [];
    } else {
      assert(IsReadableStreamBYOBReader(reader), 'reader must be ReadableStreamBYOBReader');

      for (var _i = 0; _i < reader._readIntoRequests.length; _i++) {
        var readIntoRequest = reader._readIntoRequests[_i];

        readIntoRequest._reject(e);
      }

      reader._readIntoRequests = [];
    }

    defaultReaderClosedPromiseReject(reader, e);

    reader._closedPromise["catch"](function () {});
  }

  function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readIntoRequests.length > 0);

    var readIntoRequest = reader._readIntoRequests.shift();

    readIntoRequest._resolve(CreateIterResultObject(chunk, done));
  }

 

  function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
  }

 

  function ReadableStreamHasBYOBReader(stream) {
    var reader = stream._reader;

    if (reader === undefined) {
      return false;
    }

    if (IsReadableStreamBYOBReader(reader) === false) {
      return false;
    }

    return true;
  }

  function ReadableStreamHasDefaultReader(stream) {
    var reader = stream._reader;

    if (reader === undefined) {
      return false;
    }

    if (IsReadableStreamDefaultReader(reader) === false) {
      return false;
    }

    return true;
  }

  var ReadableStreamDefaultReader = function () {
    function ReadableStreamDefaultReader(stream) {
      _classCallCheck(this, ReadableStreamDefaultReader);

      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultReader can only be constructed with a ReadableStream instance');
      }

      if (IsReadableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }

      ReadableStreamReaderGenericInitialize(this, stream);
      this._readRequests = [];
    }

    _createClass(ReadableStreamDefaultReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('cancel'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }

        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('read'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }

        return ReadableStreamDefaultReaderRead(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsReadableStreamDefaultReader(this) === false) {
          throw defaultReaderBrandCheckException('releaseLock');
        }

        if (this._ownerReadableStream === undefined) {
          return;
        }

        if (this._readRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }

        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('closed'));
        }

        return this._closedPromise;
      }
    }]);

    return ReadableStreamDefaultReader;
  }();

  var ReadableStreamBYOBReader = function () {
    function ReadableStreamBYOBReader(stream) {
      _classCallCheck(this, ReadableStreamBYOBReader);

      if (!IsReadableStream(stream)) {
        throw new TypeError('ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a ' + 'byte source');
      }

      if (IsReadableByteStreamController(stream._readableStreamController) === false) {
        throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
      }

      if (IsReadableStreamLocked(stream)) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }

      ReadableStreamReaderGenericInitialize(this, stream);
      this._readIntoRequests = [];
    }

    _createClass(ReadableStreamBYOBReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('cancel'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }

        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('read'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }

        if (!ArrayBuffer.isView(view)) {
          return Promise.reject(new TypeError('view must be an array buffer view'));
        }

        if (view.byteLength === 0) {
          return Promise.reject(new TypeError('view must have non-zero byteLength'));
        }

        return ReadableStreamBYOBReaderRead(this, view);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
          throw byobReaderBrandCheckException('releaseLock');
        }

        if (this._ownerReadableStream === undefined) {
          return;
        }

        if (this._readIntoRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }

        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('closed'));
        }

        return this._closedPromise;
      }
    }]);

    return ReadableStreamBYOBReader;
  }();

  function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
      return false;
    }

    return true;
  }

  function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
      return false;
    }

    return true;
  }

  function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;

    if (stream._state === 'readable') {
      defaultReaderClosedPromiseInitialize(reader);
    } else if (stream._state === 'closed') {
      defaultReaderClosedPromiseInitializeAsResolved(reader);
    } else {
      assert(stream._state === 'errored', 'state must be errored');
      defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);

      reader._closedPromise["catch"](function () {});
    }
  }

 

  function ReadableStreamReaderGenericRelease(reader) {
    assert(reader._ownerReadableStream !== undefined);
    assert(reader._ownerReadableStream._reader === reader);

    if (reader._ownerReadableStream._state === 'readable') {
      defaultReaderClosedPromiseReject(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    } else {
      defaultReaderClosedPromiseResetToRejected(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    }

    reader._closedPromise["catch"](function () {});

    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
  }

  function ReadableStreamBYOBReaderRead(reader, view) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;

    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    return ReadableByteStreamControllerPullInto(stream._readableStreamController, view);
  }

  function ReadableStreamDefaultReaderRead(reader) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;

    if (stream._state === 'closed') {
      return Promise.resolve(CreateIterResultObject(undefined, true));
    }

    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    assert(stream._state === 'readable');
    return stream._readableStreamController.__pullSteps();
  }

  var ReadableStreamDefaultController = function () {
    function ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark) {
      _classCallCheck(this, ReadableStreamDefaultController);

      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultController can only be constructed with a ReadableStream instance');
      }

      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableStreamDefaultController instances can only be created by the ReadableStream constructor');
      }

      this._controlledReadableStream = stream;
      this._underlyingSource = underlyingSource;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      this._closeRequested = false;
      this._pullAgain = false;
      this._pulling = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var controller = this;
      var startResult = InvokeOrNoop(underlyingSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }, function (r) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, r);
      })["catch"](rethrowAssertionErrorRejection);
    }

    _createClass(ReadableStreamDefaultController, [{
      key: 'close',
      value: function close() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }

        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }

        ReadableStreamDefaultControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }

        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }

        return ReadableStreamDefaultControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }

        var stream = this._controlledReadableStream;

        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }

        ReadableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value:
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;

        if (this._queue.length > 0) {
          var chunk = DequeueValue(this);

          if (this._closeRequested === true && this._queue.length === 0) {
            ReadableStreamClose(stream);
          } else {
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }

          return Promise.resolve(CreateIterResultObject(chunk, false));
        }

        var pendingPromise = ReadableStreamAddReadRequest(stream);
        ReadableStreamDefaultControllerCallPullIfNeeded(this);
        return pendingPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }

        return ReadableStreamDefaultControllerGetDesiredSize(this);
      }
    }]);

    return ReadableStreamDefaultController;
  }();

  function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSource')) {
      return false;
    }

    return true;
  }

  function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);

    if (shouldPull === false) {
      return undefined;
    }

    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }

    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingSource, 'pull', [controller]);
    pullPromise.then,)["catch"](rethrowAssertionErrorRejection);
    return undefined;
  }

  function ReadableStreamDefaultControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;

    if (stream._state === 'closed' || stream._state === 'errored') {
      return false;
    }

    if (controller._closeRequested === true) {
      return false;
    }

    if (controller._started === false) {
      return false;
    }

    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }

    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);

    if (desiredSize > 0) {
      return true;
    }

    return false;
  }

  function ReadableStreamDefaultControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    controller._closeRequested = true;

    if (controller._queue.length === 0) {
      ReadableStreamClose(stream);
    }
  }

  function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');

    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      ReadableStreamFulfillReadRequest(stream, chunk, false);
    } else {
      var chunkSize = 1;

      if (controller._strategySize !== undefined) {
        var strategySize = controller._strategySize;

        try {
          chunkSize = strategySize(chunk);
        } catch (chunkSizeE) {
          ReadableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          throw chunkSizeE;
        }
      }

      try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
      } catch (enqueueE) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        throw enqueueE;
      }
    }

    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    return undefined;
  }

 

  function ReadableStreamDefaultControllerErrorIfNeeded(controller, e) {
    if (controller._controlledReadableStream._state === 'readable') {
      ReadableStreamDefaultControllerError(controller, e);
    }
  }

  function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;

    if (state === 'errored') {
      return null;
    }

    if (state === 'closed') {
      return 0;
    }

    return controller._strategyHWM - controller._queueTotalSize;
  }

  var ReadableStreamBYOBRequest = function () {
    function ReadableStreamBYOBRequest(controller, view) {
      _classCallCheck(this, ReadableStreamBYOBRequest);

      this._associatedReadableByteStreamController = controller;
      this._view = view;
    }

    _createClass(ReadableStreamBYOBRequest, [{
      key: 'respond',
      value: function respond(bytesWritten) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }

        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }

        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
      }
    }, {
      key: 'respondWithNewView',
      value: function respondWithNewView(view) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }

        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }

        if (!ArrayBuffer.isView(view)) {
          throw new TypeError('You can only respond with array buffer views');
        }

        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
      }
    }, {
      key: 'view',
      get: function get() {
        return this._view;
      }
    }]);

    return ReadableStreamBYOBRequest;
  }();

  var ReadableByteStreamController = function () {
    function ReadableByteStreamController(stream, underlyingByteSource, highWaterMark) {
      _classCallCheck(this, ReadableByteStreamController);

      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableByteStreamController can only be constructed with a ReadableStream instance given ' + 'a byte source');
      }

      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte ' + 'source');
      }

      this._controlledReadableStream = stream;
      this._underlyingByteSource = underlyingByteSource;
      this._pullAgain = false;
      this._pulling = false;
      ReadableByteStreamControllerClearPendingPullIntos(this);
      this._queue = this._queueTotalSize = undefined;
      ResetQueue(this);
      this._closeRequested = false;
      this._started = false;
      this._strategyHWM = ValidateAndNormalizeHighWaterMark(highWaterMark);
      var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;

      if (autoAllocateChunkSize !== undefined) {
        if (Number.isInteger(autoAllocateChunkSize) === false || autoAllocateChunkSize <= 0) {
          throw new RangeError('autoAllocateChunkSize must be a positive integer');
        }
      }

      this._autoAllocateChunkSize = autoAllocateChunkSize;
      this._pendingPullIntos = [];
      var controller = this;
      var startResult = InvokeOrNoop(underlyingByteSource, 'start', [this]);
      Promise.resolve(startResult).then,)["catch"](rethrowAssertionErrorRejection);
    }

    _createClass(ReadableByteStreamController, [{
      key: 'close',
      value: function close() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('close');
        }

        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }

        ReadableByteStreamControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('enqueue');
        }

        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }

        if (!ArrayBuffer.isView(chunk)) {
          throw new TypeError('You can only enqueue array buffer views when using a ReadableByteStreamController');
        }

        ReadableByteStreamControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('error');
        }

        var stream = this._controlledReadableStream;

        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }

        ReadableByteStreamControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value:
    }, {
      key: '__pullSteps',
      value:
    }, {
      key: 'byobRequest',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('byobRequest');
        }

        if (this._byobRequest === undefined && this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          this._byobRequest = new ReadableStreamBYOBRequest(this, view);
        }

        return this._byobRequest;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('desiredSize');
        }

        return ReadableByteStreamControllerGetDesiredSize(this);
      }
    }]);

    return ReadableByteStreamController;
  }();

  function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingByteSource')) {
      return false;
    }

    return true;
  }

  function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
      return false;
    }

    return true;
  }

  function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);

    if (shouldPull === false) {
      return undefined;
    }

    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }

    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingByteSource, 'pull', [controller]);
    pullPromise.then,)["catch"](rethrowAssertionErrorRejection);
    return undefined;
  }

 

  function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    assert(stream._state !== 'errored', 'state must not be errored');
    var done = false;

    if (stream._state === 'closed') {
      assert(pullIntoDescriptor.bytesFilled === 0);
      done = true;
    }

    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);

    if (pullIntoDescriptor.readerType === 'default') {
      ReadableStreamFulfillReadRequest(stream, filledView, done);
    } else {
      assert(pullIntoDescriptor.readerType === 'byob');
      ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
  }

 

 

  function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    var elementSize = pullIntoDescriptor.elementSize;
    var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    var totalBytesToCopyRemaining = maxBytesToCopy;
    var ready = false;

    if (maxAlignedBytes > currentAlignedBytes) {
      totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
      ready = true;
    }

    var queue = controller._queue;

    while (totalBytesToCopyRemaining > 0) {
      var headOfQueue = queue[0];
      var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
      var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      ArrayBufferCopy(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);

      if (headOfQueue.byteLength === bytesToCopy) {
        queue.shift();
      } else {
        headOfQueue.byteOffset += bytesToCopy;
        headOfQueue.byteLength -= bytesToCopy;
      }

      controller._queueTotalSize -= bytesToCopy;
      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
      totalBytesToCopyRemaining -= bytesToCopy;
    }

    if (ready === false) {
      assert(controller._queueTotalSize === 0, 'queue must be empty');
      assert(pullIntoDescriptor.bytesFilled > 0);
      assert(pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize);
    }

    return ready;
  }

 

  function ReadableByteStreamControllerHandleQueueDrain(controller) {
    assert(controller._controlledReadableStream._state === 'readable');

    if (controller._queueTotalSize === 0 && controller._closeRequested === true) {
      ReadableStreamClose(controller._controlledReadableStream);
    } else {
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }

  function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === undefined) {
      return;
    }

    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = undefined;
    controller._byobRequest = undefined;
  }

  function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    assert(controller._closeRequested === false);

    while (controller._pendingPullIntos.length > 0) {
      if (controller._queueTotalSize === 0) {
        return;
      }

      var pullIntoDescriptor = controller._pendingPullIntos[0];

      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
      }
    }
  }

  function ReadableByteStreamControllerPullInto(controller, view) {
    var stream = controller._controlledReadableStream;
    var elementSize = 1;

    if (view.constructor !== DataView) {
      elementSize = view.constructor.BYTES_PER_ELEMENT;
    }

    var ctor = view.constructor;
    var pullIntoDescriptor = {
      buffer: view.buffer,
      byteOffset: view.byteOffset,
      byteLength: view.byteLength,
      bytesFilled: 0,
      elementSize: elementSize,
      ctor: ctor,
      readerType: 'byob'
    };

    if (controller._pendingPullIntos.length > 0) {
      pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);

      controller._pendingPullIntos.push(pullIntoDescriptor);

      return ReadableStreamAddReadIntoRequest(stream);
    }

    if (stream._state === 'closed') {
      var emptyView = new view.constructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
      return Promise.resolve(CreateIterResultObject(emptyView, true));
    }

    if (controller._queueTotalSize > 0) {
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        ReadableByteStreamControllerHandleQueueDrain(controller);
        return Promise.resolve(CreateIterResultObject(filledView, false));
      }

      if (controller._closeRequested === true) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        return Promise.reject(e);
      }
    }

    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);

    controller._pendingPullIntos.push(pullIntoDescriptor);

    var promise = ReadableStreamAddReadIntoRequest(stream);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
    return promise;
  }

  function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    assert(firstDescriptor.bytesFilled === 0, 'bytesFilled must be 0');
    var stream = controller._controlledReadableStream;

    if (ReadableStreamHasBYOBReader(stream) === true) {
      while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
      }
    }
  }

  function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
      throw new RangeError('bytesWritten out of range');
    }

    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);

    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
      return;
    }

    ReadableByteStreamControllerShiftPendingPullInto(controller);
    var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;

    if (remainderSize > 0) {
      var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      var remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }

    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  }

  function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    var firstDescriptor = controller._pendingPullIntos[0];
    var stream = controller._controlledReadableStream;

    if (stream._state === 'closed') {
      if (bytesWritten !== 0) {
        throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
      }

      ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
    } else {
      assert(stream._state === 'readable');
      ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
  }

 

  function ReadableByteStreamControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;

    if (stream._state !== 'readable') {
      return false;
    }

    if (controller._closeRequested === true) {
      return false;
    }

    if (controller._started === false) {
      return false;
    }

    if (ReadableStreamHasDefaultReader(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }

    if (ReadableStreamHasBYOBReader(stream) === true && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      return true;
    }

    if (ReadableByteStreamControllerGetDesiredSize(controller) > 0) {
      return true;
    }

    return false;
  }

 

  function ReadableByteStreamControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    var buffer = chunk.buffer;
    var byteOffset = chunk.byteOffset;
    var byteLength = chunk.byteLength;
    var transferredBuffer = TransferArrayBuffer(buffer);

    if (ReadableStreamHasDefaultReader(stream) === true) {
      if (ReadableStreamGetNumReadRequests(stream) === 0) {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      } else {
        assert(controller._queue.length === 0);
        var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
        ReadableStreamFulfillReadRequest(stream, transferredView, false);
      }
    } else if (ReadableStreamHasBYOBReader(stream) === true) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    } else {
      assert(IsReadableStreamLocked(stream) === false, 'stream must not be locked');
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
  }

 

  function ReadableByteStreamControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;

    if (state === 'errored') {
      return null;
    }

    if (state === 'closed') {
      return 0;
    }

    return controller._strategyHWM - controller._queueTotalSize;
  }

  function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    bytesWritten = Number(bytesWritten);

    if (IsFiniteNonNegativeNumber(bytesWritten) === false) {
      throw new RangeError('bytesWritten must be a finite');
    }

    assert(controller._pendingPullIntos.length > 0);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
  }

  function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    assert(controller._pendingPullIntos.length > 0);
    var firstDescriptor = controller._pendingPullIntos[0];

    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
      throw new RangeError('The region specified by view does not match byobRequest');
    }

    if (firstDescriptor.byteLength !== view.byteLength) {
      throw new RangeError('The buffer of view has different capacity than byobRequest');
    }

    firstDescriptor.buffer = view.buffer;
    ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
  }

  function streamBrandCheckException(name) {
    return new TypeError('ReadableStream.prototype.' + name + ' can only be used on a ReadableStream');
  }

  function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
  }

  function defaultReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultReader.prototype.' + name + ' can only be used on a ReadableStreamDefaultReader');
  }

 

 

 

 

 

 

  function byobReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBReader.prototype.' + name + ' can only be used on a ReadableStreamBYOBReader');
  }

  function defaultControllerBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultController.prototype.' + name + ' can only be used on a ReadableStreamDefaultController');
  }

  function byobRequestBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBRequest.prototype.' + name + ' can only be used on a ReadableStreamBYOBRequest');
  }

  function byteStreamControllerBrandCheckException(name) {
    return new TypeError('ReadableByteStreamController.prototype.' + name + ' can only be used on a ReadableByteStreamController');
  }

 
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var transformStream = __w_pdfjs_require__(6);

  var readableStream = __w_pdfjs_require__(4);

  var writableStream = __w_pdfjs_require__(2);

  exports.TransformStream = transformStream.TransformStream;
  exports.ReadableStream = readableStream.ReadableStream;
  exports.IsReadableStreamDisturbed = readableStream.IsReadableStreamDisturbed;
  exports.ReadableStreamDefaultControllerClose = readableStream.ReadableStreamDefaultControllerClose;
  exports.ReadableStreamDefaultControllerEnqueue = readableStream.ReadableStreamDefaultControllerEnqueue;
  exports.ReadableStreamDefaultControllerError = readableStream.ReadableStreamDefaultControllerError;
  exports.ReadableStreamDefaultControllerGetDesiredSize = readableStream.ReadableStreamDefaultControllerGetDesiredSize;
  exports.AcquireWritableStreamDefaultWriter = writableStream.AcquireWritableStreamDefaultWriter;
  exports.IsWritableStream = writableStream.IsWritableStream;
  exports.IsWritableStreamLocked = writableStream.IsWritableStreamLocked;
  exports.WritableStream = writableStream.WritableStream;
  exports.WritableStreamAbort = writableStream.WritableStreamAbort;
  exports.WritableStreamDefaultControllerError = writableStream.WritableStreamDefaultControllerError;
  exports.WritableStreamDefaultWriterCloseWithErrorPropagation = writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation;
  exports.WritableStreamDefaultWriterRelease = writableStream.WritableStreamDefaultWriterRelease;
  exports.WritableStreamDefaultWriterWrite = writableStream.WritableStreamDefaultWriterWrite;
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass =();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;

  var _require2 = __w_pdfjs_require__(0),
      InvokeOrNoop = _require2.InvokeOrNoop,
      PromiseInvokeOrPerformFallback = _require2.PromiseInvokeOrPerformFallback,
      PromiseInvokeOrNoop = _require2.PromiseInvokeOrNoop,
      typeIsObject = _require2.typeIsObject;

  var _require3 = __w_pdfjs_require__(4),
      ReadableStream = _require3.ReadableStream,
      ReadableStreamDefaultControllerClose = _require3.ReadableStreamDefaultControllerClose,
      ReadableStreamDefaultControllerEnqueue = _require3.ReadableStreamDefaultControllerEnqueue,
      ReadableStreamDefaultControllerError = _require3.ReadableStreamDefaultControllerError,
      ReadableStreamDefaultControllerGetDesiredSize = _require3.ReadableStreamDefaultControllerGetDesiredSize;

  var _require4 = __w_pdfjs_require__(2),
      WritableStream = _require4.WritableStream,
      WritableStreamDefaultControllerError = _require4.WritableStreamDefaultControllerError;

  function TransformStreamCloseReadable(transformStream) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }

    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }

    TransformStreamCloseReadableInternal(transformStream);
  }

  function TransformStreamEnqueueToReadable(transformStream, chunk) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }

    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }

    var controller = transformStream._readableController;

    try {
      ReadableStreamDefaultControllerEnqueue(controller, chunk);
    } catch (e) {
      transformStream._readableClosed = true;
      TransformStreamErrorIfNeeded(transformStream, e);
      throw transformStream._storedError;
    }

    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    var maybeBackpressure = desiredSize <= 0;

    if (maybeBackpressure === true && transformStream._backpressure === false) {
      TransformStreamSetBackpressure(transformStream, true);
    }
  }

  function TransformStreamError(transformStream, e) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }

    TransformStreamErrorInternal(transformStream, e);
  }

 

  function TransformStreamErrorIfNeeded(transformStream, e) {
    if (transformStream._errored === false) {
      TransformStreamErrorInternal(transformStream, e);
    }
  }

  function TransformStreamErrorInternal(transformStream, e) {
    assert(transformStream._errored === false);
    transformStream._errored = true;
    transformStream._storedError = e;

    if (transformStream._writableDone === false) {
      WritableStreamDefaultControllerError(transformStream._writableController, e);
    }

    if (transformStream._readableClosed === false) {
      ReadableStreamDefaultControllerError(transformStream._readableController, e);
    }
  }

  function TransformStreamReadableReadyPromise(transformStream) {
    assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');

    if (transformStream._backpressure === false) {
      return Promise.resolve();
    }

    assert(transformStream._backpressure === true, '_backpressure should have been initialized');
    return transformStream._backpressureChangePromise;
  }

  function TransformStreamSetBackpressure(transformStream, backpressure) {
    assert(transformStream._backpressure !== backpressure, 'TransformStreamSetBackpressure() should be called only when backpressure is changed');

    if (transformStream._backpressureChangePromise !== undefined) {
      transformStream._backpressureChangePromise_resolve(backpressure);
    }

    transformStream._backpressureChangePromise = new Promise);

    transformStream._backpressureChangePromise.then);

    transformStream._backpressure = backpressure;
  }

 

 

  function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
      return false;
    }

    return true;
  }

  function IsTransformStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
      return false;
    }

    return true;
  }

  var TransformStreamSink = function () {
    function TransformStreamSink(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSink);

      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }

    _createClass(TransformStreamSink, [{
      key: 'start',
      value:
    }, {
      key: 'write',
      value:
    }, {
      key: 'abort',
      value: function abort() {
        var transformStream = this._transformStream;
        transformStream._writableDone = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Writable side aborted'));
      }
    }, {
      key: 'close',
      value: function close() {
        var transformStream = this._transformStream;
        assert(transformStream._transforming === false);
        transformStream._writableDone = true;
        var flushPromise = PromiseInvokeOrNoop(transformStream._transformer, 'flush', [transformStream._transformStreamController]);
        return flushPromise.then(function () {
          if (transformStream._errored === true) {
            return Promise.reject(transformStream._storedError);
          }

          if (transformStream._readableClosed === false) {
            TransformStreamCloseReadableInternal(transformStream);
          }

          return Promise.resolve();
        })["catch"]);
      }
    }]);

    return TransformStreamSink;
  }();

  var TransformStreamSource = function () {
    function TransformStreamSource(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSource);

      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }

    _createClass(TransformStreamSource, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._readableController = c;
        return this._startPromise.then(function () {
          assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');

          if (transformStream._backpressure === true) {
            return Promise.resolve();
          }

          assert(transformStream._backpressure === false, '_backpressure should have been initialized');
          return transformStream._backpressureChangePromise;
        });
      }
    }, {
      key: 'pull',
      value:
    }, {
      key: 'cancel',
      value:
    }]);

    return TransformStreamSource;
  }();

  var TransformStreamDefaultController = function () {
    function TransformStreamDefaultController(transformStream) {
      _classCallCheck(this, TransformStreamDefaultController);

      if (IsTransformStream(transformStream) === false) {
        throw new TypeError('TransformStreamDefaultController can only be ' + 'constructed with a TransformStream instance');
      }

      if (transformStream._transformStreamController !== undefined) {
        throw new TypeError('TransformStreamDefaultController instances can ' + 'only be created by the TransformStream constructor');
      }

      this._controlledTransformStream = transformStream;
    }

    _createClass(TransformStreamDefaultController, [{
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }

        TransformStreamEnqueueToReadable(this._controlledTransformStream, chunk);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }

        TransformStreamCloseReadable(this._controlledTransformStream);
      }
    }, {
      key: 'error',
      value: function error(reason) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }

        TransformStreamError(this._controlledTransformStream, reason);
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }

        var transformStream = this._controlledTransformStream;
        var readableController = transformStream._readableController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
      }
    }]);

    return TransformStreamDefaultController;
  }();

  var TransformStream = function () {
    function TransformStream() {
      var transformer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, TransformStream);

      this._transformer = transformer;
      var readableStrategy = transformer.readableStrategy,
          writableStrategy = transformer.writableStrategy;
      this._transforming = false;
      this._errored = false;
      this._storedError = undefined;
      this._writableController = undefined;
      this._readableController = undefined;
      this._transformStreamController = undefined;
      this._writableDone = false;
      this._readableClosed = false;
      this._backpressure = undefined;
      this._backpressureChangePromise = undefined;
      this._backpressureChangePromise_resolve = undefined;
      this._transformStreamController = new TransformStreamDefaultController(this);
      var startPromise_resolve = void 0;
      var startPromise = new Promise);
      var source = new TransformStreamSource(this, startPromise);
      this._readable = new ReadableStream(source, readableStrategy);
      var sink = new TransformStreamSink(this, startPromise);
      this._writable = new WritableStream(sink, writableStrategy);
      assert(this._writableController !== undefined);
      assert(this._readableController !== undefined);
      var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(this._readableController);
      TransformStreamSetBackpressure(this, desiredSize <= 0);
      var transformStream = this;
      var startResult = InvokeOrNoop(transformer, 'start', [transformStream._transformStreamController]);
      startPromise_resolve(startResult);
      startPromise["catch"]);
    }

    _createClass(TransformStream, [{
      key: 'readable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('readable');
        }

        return this._readable;
      }
    }, {
      key: 'writable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('writable');
        }

        return this._writable;
      }
    }]);

    return TransformStream;
  }();

  module.exports = {
    TransformStream: TransformStream
  };

  function defaultControllerBrandCheckException(name) {
    return new TypeError('TransformStreamDefaultController.prototype.' + name + ' can only be used on a TransformStreamDefaultController');
  }

 
},]));

/***/ }),
/* 145 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

{
  var isURLSupported = false;

  try {
    if (typeof URL === 'function' && _typeof(URL.prototype) === 'object' && 'origin' in URL.prototype) {
      var u = new URL('b', 'http://a');
      u.pathname = 'c%20d';
      isURLSupported = u.href === 'http://a/c%20d';
    }
  } catch (ex) {}

  if (isURLSupported) {
    exports.URL = URL;
  } else {
    var PolyfillURL = __w_pdfjs_require__(146).URL;

    var OriginalURL = __w_pdfjs_require__(3).URL;

    if (OriginalURL) {
      PolyfillURL.createObjectURL =;

      PolyfillURL.revokeObjectURL = function (url) {
        OriginalURL.revokeObjectURL(url);
      };
    }

    exports.URL = PolyfillURL;
  }
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


(function URLConstructorClosure() {
  'use strict';

  var relative = Object.create(null);
  relative['ftp'] = 21;
  relative['file'] = 0;
  relative['gopher'] = 70;
  relative['http'] = 80;
  relative['https'] = 443;
  relative['ws'] = 80;
  relative['wss'] = 443;
  var relativePathDotMapping = Object.create(null);
  relativePathDotMapping['%2e'] = '.';
  relativePathDotMapping['.%2e'] = '..';
  relativePathDotMapping['%2e.'] = '..';
  relativePathDotMapping['%2e%2e'] = '..';

 

 

 

 

 

  var EOF,
      ALPHA = /[a-zA-Z]/,
      ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;

  function parse(input, stateOverride, base) {
   

    var state = stateOverride || 'scheme start',
        cursor = 0,
        buffer = '',
        seenAt = false,
        seenBracket = false,
        errors = [];

    loop: while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
      var c = input[cursor];

      switch (state) {
        case 'scheme start':
          if (c && ALPHA.test(c)) {
            buffer += c.toLowerCase();
            state = 'scheme';
          } else if (!stateOverride) {
            buffer = '';
            state = 'no scheme';
            continue;
          } else {
            err('Invalid scheme.');
            break loop;
          }

          break;

        case 'scheme':
          if (c && ALPHANUMERIC.test(c)) {
            buffer += c.toLowerCase();
          } else if (c === ':') {
            this._scheme = buffer;
            buffer = '';

            if (stateOverride) {
              break loop;
            }

            if (isRelativeScheme(this._scheme)) {
              this._isRelative = true;
            }

            if (this._scheme === 'file') {
              state = 'relative';
            } else if (this._isRelative && base && base._scheme === this._scheme) {
              state = 'relative or authority';
            } else if (this._isRelative) {
              state = 'authority first slash';
            } else {
              state = 'scheme data';
            }
          } else if (!stateOverride) {
            buffer = '';
            cursor = 0;
            state = 'no scheme';
            continue;
          } else if (c === EOF) {
            break loop;
          } else {
            err('Code point not allowed in scheme: ' + c);
            break loop;
          }

          break;

        case 'scheme data':
          if (c === '?') {
            this._query = '?';
            state = 'query';
          } else if (c === '#') {
            this._fragment = '#';
            state = 'fragment';
          } else {
            if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
              this._schemeData += percentEscape(c);
            }
          }

          break;

        case 'no scheme':
          if (!base || !isRelativeScheme(base._scheme)) {
            err('Missing scheme.');
            invalid.call(this);
          } else {
            state = 'relative';
            continue;
          }

          break;

        case 'relative or authority':
          if (c === '/' && input[cursor + 1] === '/') {
            state = 'authority ignore slashes';
          } else {
            err('Expected /, got: ' + c);
            state = 'relative';
            continue;
          }

          break;

        case 'relative':
          this._isRelative = true;

          if (this._scheme !== 'file') {
            this._scheme = base._scheme;
          }

          if (c === EOF) {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._username = base._username;
            this._password = base._password;
            break loop;
          } else if (c === '/' || c === '\\') {
            if (c === '\\') {
              err('\\ is an invalid code point.');
            }

            state = 'relative slash';
          } else if (c === '?') {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = '?';
            this._username = base._username;
            this._password = base._password;
            state = 'query';
          } else if (c === '#') {
            this._host = base._host;
            this._port = base._port;
            this._path = base._path.slice();
            this._query = base._query;
            this._fragment = '#';
            this._username = base._username;
            this._password = base._password;
            state = 'fragment';
          } else {
            var nextC = input[cursor + 1];
            var nextNextC = input[cursor + 2];

            if (this._scheme !== 'file' || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || nextNextC !== EOF && nextNextC !== '/' && nextNextC !== '\\' && nextNextC !== '?' && nextNextC !== '#') {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
              this._path = base._path.slice();

              this._path.pop();
            }

            state = 'relative path';
            continue;
          }

          break;

        case 'relative slash':
          if (c === '/' || c === '\\') {
            if (c === '\\') {
              err('\\ is an invalid code point.');
            }

            if (this._scheme === 'file') {
              state = 'file host';
            } else {
              state = 'authority ignore slashes';
            }
          } else {
            if (this._scheme !== 'file') {
              this._host = base._host;
              this._port = base._port;
              this._username = base._username;
              this._password = base._password;
            }

            state = 'relative path';
            continue;
          }

          break;

        case 'authority first slash':
          if (c === '/') {
            state = 'authority second slash';
          } else {
            err('Expected \'/\', got: ' + c);
            state = 'authority ignore slashes';
            continue;
          }

          break;

        case 'authority second slash':
          state = 'authority ignore slashes';

          if (c !== '/') {
            err('Expected \'/\', got: ' + c);
            continue;
          }

          break;

        case 'authority ignore slashes':
          if (c !== '/' && c !== '\\') {
            state = 'authority';
            continue;
          } else {
            err('Expected authority, got: ' + c);
          }

          break;

        case 'authority':
          if (c === '@') {
            if (seenAt) {
              err('@ already seen.');
              buffer += '%40';
            }

            seenAt = true;

            for (var i = 0; i < buffer.length; i++) {
              var cp = buffer[i];

              if (cp === '\t' || cp === '\n' || cp === '\r') {
                err('Invalid whitespace in authority.');
                continue;
              }

              if (cp === ':' && this._password === null) {
                this._password = '';
                continue;
              }

              var tempC = percentEscape(cp);

              if (this._password !== null) {
                this._password += tempC;
              } else {
                this._username += tempC;
              }
            }

            buffer = '';
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            cursor -= buffer.length;
            buffer = '';
            state = 'host';
            continue;
          } else {
            buffer += c;
          }

          break;

        case 'file host':
          if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
              state = 'relative path';
            } else if (buffer.length === 0) {
              state = 'relative path start';
            } else {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'relative path start';
            }

            continue;
          } else if (c === '\t' || c === '\n' || c === '\r') {
            err('Invalid whitespace in file host.');
          } else {
            buffer += c;
          }

          break;

        case 'host':
        case 'hostname':
          if (c === ':' && !seenBracket) {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'port';

            if (stateOverride === 'hostname') {
              break loop;
            }
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = '';
            state = 'relative path start';

            if (stateOverride) {
              break loop;
            }

            continue;
          } else if (c !== '\t' && c !== '\n' && c !== '\r') {
            if (c === '[') {
              seenBracket = true;
            } else if (c === ']') {
              seenBracket = false;
            }

            buffer += c;
          } else {
            err('Invalid code point in host/hostname: ' + c);
          }

          break;

        case 'port':
          if (/[0-9]/.test(c)) {
            buffer += c;
          } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
            if (buffer !== '') {
              var temp = parseInt(buffer, 10);

              if (temp !== relative[this._scheme]) {
                this._port = temp + '';
              }

              buffer = '';
            }

            if (stateOverride) {
              break loop;
            }

            state = 'relative path start';
            continue;
          } else if (c === '\t' || c === '\n' || c === '\r') {
            err('Invalid code point in port: ' + c);
          } else {
            invalid.call(this);
          }

          break;

        case 'relative path start':
          if (c === '\\') {
            err('\'\\\' not allowed in path.');
          }

          state = 'relative path';

          if (c !== '/' && c !== '\\') {
            continue;
          }

          break;

        case 'relative path':
          if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
            if (c === '\\') {
              err('\\ not allowed in relative path.');
            }

            var tmp;

            if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
              buffer = tmp;
            }

            if (buffer === '..') {
              this._path.pop();

              if (c !== '/' && c !== '\\') {
                this._path.push('');
              }
            } else if (buffer === '.' && c !== '/' && c !== '\\') {
              this._path.push('');
            } else if (buffer !== '.') {
              if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
                buffer = buffer[0] + ':';
              }

              this._path.push(buffer);
            }

            buffer = '';

            if (c === '?') {
              this._query = '?';
              state = 'query';
            } else if (c === '#') {
              this._fragment = '#';
              state = 'fragment';
            }
          } else if (c !== '\t' && c !== '\n' && c !== '\r') {
            buffer += percentEscape(c);
          }

          break;

        case 'query':
          if (!stateOverride && c === '#') {
            this._fragment = '#';
            state = 'fragment';
          } else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
            this._query += percentEscapeQuery(c);
          }

          break;

        case 'fragment':
          if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
            this._fragment += c;
          }

          break;
      }

      cursor++;
    }
  }

 

 

  JURL.prototype = {
    toString: function toString() {
      return this.href;
    },

    get href() {
      if (this._isInvalid) {
        return this._url;
      }

      var authority = '';

      if (this._username !== '' || this._password !== null) {
        authority = this._username + (this._password !== null ? ':' + this._password : '') + '@';
      }

      return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
    },

    set hre,

    get protoco,

    set protoco,

    get hos,

    set host(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }

      parse.call(this, value, 'host');
    },

    get hostname() {
      return this._host;
    },

    set hostname(value) {
      if (this._isInvalid || !this._isRelative) {
        return;
      }

      parse.call(this, value, 'hostname');
    },

    get por,

    set por,

    get pathnam,

    set pathnam,

    get search() {
      return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
    },

    set searc,

    get has,

    set has,

    get origin() {
      var host;

      if (this._isInvalid || !this._scheme) {
        return '';
      }

      switch (this._scheme) {
        case 'data':
        case 'file':
        case 'javascript':
        case 'mailto':
          return 'null';

        case 'blob':
          try {
            return new JURL(this._schemeData).origin || 'null';
          } catch (_) {}

          return 'null';
      }

      host = this.host;

      if (!host) {
        return '';
      }

      return this._scheme + '://' + host;
    }

  };
  exports.URL = JURL;
})();

/***/ }),
/* 147 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocument = getDocument;
exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
exports.build = exports.version = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFWorker = exports.PDFDataRangeTransport = exports.LoopbackPort = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

var _display_utils = __w_pdfjs_require__(151);

var _font_loader = __w_pdfjs_require__(152);

var _api_compatibility = __w_pdfjs_require__(153);

var _canvas = __w_pdfjs_require__(154);

var _global_scope = _interopRequireDefault(__w_pdfjs_require__(3));

var _worker_options = __w_pdfjs_require__(156);

var _message_handler = __w_pdfjs_require__(157);

var _metadata = __w_pdfjs_require__(158);

var _transport_stream = __w_pdfjs_require__(160);

var _webgl = __w_pdfjs_require__(161);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var isWorkerDisabled = false;
var fallbackWorkerSrc;
var fakeWorkerFilesLoader = null;
{
  var useRequireEnsure = false;

  if (typeof window === 'undefined') {
    isWorkerDisabled = true;

    if (typeof require.ensure === 'undefined') {
      require.ensure = require('node-ensure');
    }

    useRequireEnsure = true;
  } else if (typeof require !== 'undefined' && typeof require.ensure === 'function') {
    useRequireEnsure = true;
  }

  if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
    fallbackWorkerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
  }

  var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
  fakeWorkerFilesLoader = useRequireEnsure ? function () {
    return new Promise(function (resolve, reject) {
      require.ensure([], function () {
        try {
          var worker;
          worker = require('./pdf.worker.js');
          resolve(worker.WorkerMessageHandler);
        } catch (ex) {
          reject(ex);
        }
      }, reject, 'pdfjsWorker');
    });
  } : dynamicLoaderSupported ? : null;

  if (!fallbackWorkerSrc && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && 'currentScript' in document) {
    var pdfjsFilePath = document.currentScript && document.currentScript.src;

    if (pdfjsFilePath) {
      fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, '.worker$1$2');
    }
  }
}
var createPDFNetworkStream;


function getDocument(src) {
  var task = new PDFDocumentLoadingTask();
  var source;

  if (typeof src === 'string') {
    source = {
      url: src
    };
  } else if ((0, _util.isArrayBuffer)(src)) {
    source = {
      data: src
    };
  } else if (src instanceof PDFDataRangeTransport) {
    source = {
      range: src
    };
  } else {
    if (_typeof(src) !== 'object') {
      throw new Error('Invalid parameter in getDocument, ' + 'need either Uint8Array, string or a parameter object');
    }

    if (!src.url && !src.data && !src.range) {
      throw new Error('Invalid parameter object: need either .data, .range or .url');
    }

    source = src;
  }

  var params = Object.create(null);
  var rangeTransport = null,
      worker = null;

  for (var key in source) {
    if (key === 'url' && typeof window !== 'undefined') {
      params[key] = new _util.URL(source[key], window.location).href;
      continue;
    } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
    } else if (key === 'worker') {
      worker = source[key];
      continue;
    } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      var pdfBytes = source[key];

      if (typeof pdfBytes === 'string') {
        params[key] = (0, _util.stringToBytes)(pdfBytes);
      } else if (_typeof(pdfBytes) === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
        params[key] = new Uint8Array(pdfBytes);
      } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
        params[key] = new Uint8Array(pdfBytes);
      } else {
        throw new Error('Invalid PDF binary data: either typed array, ' + 'string or array-like object is expected in the ' + 'data property.');
      }

      continue;
    }

    params[key] = source[key];
  }

  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
  params.CMapReaderFactory = params.CMapReaderFactory || _display_utils.DOMCMapReaderFactory;
  params.ignoreErrors = params.stopAtErrors !== true;
  params.pdfBug = params.pdfBug === true;
  var NativeImageDecoderValues = Object.values(_util.NativeImageDecoding);

  if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
    params.nativeImageDecoderSupport = _api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport || _util.NativeImageDecoding.DECODE;
  }

  if (!Number.isInteger(params.maxImageSize)) {
    params.maxImageSize = -1;
  }

  if (typeof params.isEvalSupported !== 'boolean') {
    params.isEvalSupported = true;
  }

  if (typeof params.disableFontFace !== 'boolean') {
    params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
  }

  if (typeof params.disableRange !== 'boolean') {
    params.disableRange = false;
  }

  if (typeof params.disableStream !== 'boolean') {
    params.disableStream = false;
  }

  if (typeof params.disableAutoFetch !== 'boolean') {
    params.disableAutoFetch = false;
  }

  if (typeof params.disableCreateObjectURL !== 'boolean') {
    params.disableCreateObjectURL = _api_compatibility.apiCompatibilityParams.disableCreateObjectURL || false;
  }

  (0, _util.setVerbosityLevel)(params.verbosity);

  if (!worker) {
    var workerParams = {
      postMessageTransfers: params.postMessageTransfers,
      verbosity: params.verbosity,
      port: _worker_options.GlobalWorkerOptions.workerPort
    };
    worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
    task._worker = worker;
  }

  var docId = task.docId;
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error('Loading aborted');
    }

    return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
      if (task.destroyed) {
        throw new Error('Loading aborted');
      }

      var networkStream;

      if (rangeTransport) {
        networkStream = new _transport_stream.PDFDataTransportStream({
          length: params.length,
          initialData: params.initialData,
          progressiveDone: params.progressiveDone,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        }, rangeTransport);
      } else if (!params.data) {
        networkStream = createPDFNetworkStream({
          url: params.url,
          length: params.length,
          httpHeaders: params.httpHeaders,
          withCredentials: params.withCredentials,
          rangeChunkSize: params.rangeChunkSize,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        });
      }

      var messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
      messageHandler.postMessageTransfers = worker.postMessageTransfers;
      var transport = new WorkerTransport(messageHandler, task, networkStream, params);
      task._transport = transport;
      messageHandler.send('Ready', null);
    });
  })["catch"](task._capability.reject);
  return task;
}

function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
  if (worker.destroyed) {
    return Promise.reject(new Error('Worker was destroyed'));
  }

  if (pdfDataRangeTransport) {
    source.length = pdfDataRangeTransport.length;
    source.initialData = pdfDataRangeTransport.initialData;
    source.progressiveDone = pdfDataRangeTransport.progressiveDone;
  }

  return worker.messageHandler.sendWithPromise('GetDocRequest', {
    docId: docId,
    apiVersion: '2.2.228',
    source: {
      data: source.data,
      url: source.url,
      password: source.password,
      disableAutoFetch: source.disableAutoFetch,
      rangeChunkSize: source.rangeChunkSize,
      length: source.length
    },
    maxImageSize: source.maxImageSize,
    disableFontFace: source.disableFontFace,
    disableCreateObjectURL: source.disableCreateObjectURL,
    postMessageTransfers: worker.postMessageTransfers,
    docBaseUrl: source.docBaseUrl,
    nativeImageDecoderSupport: source.nativeImageDecoderSupport,
    ignoreErrors: source.ignoreErrors,
    isEvalSupported: source.isEvalSupported
  }).then);
}

var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
  var nextDocumentId = 0;

  var PDFDocumentLoadingTask =
  /*#__PURE__*/
  function () {
    function PDFDocumentLoadingTask() {
      _classCallCheck(this, PDFDocumentLoadingTask);

      this._capability = (0, _util.createPromiseCapability)();
      this._transport = null;
      this._worker = null;
      this.docId = 'd' + nextDocumentId++;
      this.destroyed = false;
      this.onPassword = null;
      this.onProgress = null;
      this.onUnsupportedFeature = null;
    }

    _createClass(PDFDocumentLoadingTask, [{
      key: "destroy",
      value: function destroy() {
        var _this = this;

        this.destroyed = true;
        var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
        return transportDestroyed.then(function () {
          _this._transport = null;

          if (_this._worker) {
            _this._worker.destroy();

            _this._worker = null;
          }
        });
      }
    }, {
      key: "then",
      value: function then(onFulfilled, onRejected) {
        (0, _display_utils.deprecated)('PDFDocumentLoadingTask.then method, ' + 'use the `promise` getter instead.');
        return this.promise.then.apply(this.promise, arguments);
      }
    }, {
      key: "promise",
      get: function get() {
        return this._capability.promise;
      }
    }]);

    return PDFDocumentLoadingTask;
  }();

  return PDFDocumentLoadingTask;
}();

var PDFDataRangeTransport =
/*#__PURE__*/
function () {
  function PDFDataRangeTransport(length, initialData) {
    var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, PDFDataRangeTransport);

    this.length = length;
    this.initialData = initialData;
    this.progressiveDone = progressiveDone;
    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._progressiveDoneListeners = [];
    this._readyCapability = (0, _util.createPromiseCapability)();
  }

  _createClass(PDFDataRangeTransport, [{
    key: "addRangeListener",
    value: function addRangeListener(listener) {
      this._rangeListeners.push(listener);
    }
  }, {
    key: "addProgressListener",
    value: function addProgressListener(listener) {
      this._progressListeners.push(listener);
    }
  }, {
    key: "addProgressiveReadListener",
    value: function addProgressiveReadListener(listener) {
      this._progressiveReadListeners.push(listener);
    }
  }, {
    key: "addProgressiveDoneListener",
    value:
  }, {
    key: "onDataRange",
    value: function onDataRange(begin, chunk) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._rangeListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var listener = _step.value;
          listener(begin, chunk);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "onDataProgress",
    value: function onDataProgress(loaded, total) {
      var _this2 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this2._progressListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var listener = _step2.value;
            listener(loaded, total);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
    }
  }, {
    key: "onDataProgressiveRead",
    value: function onDataProgressiveRead(chunk) {
      var _this3 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this3._progressiveReadListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var listener = _step3.value;
            listener(chunk);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      });
    }
  }, {
    key: "onDataProgressiveDone",
    value: function onDataProgressiveDone() {
      var _this4 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _this4._progressiveDoneListeners[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var listener = _step4.value;
            listener();
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      });
    }
  }, {
    key: "transportReady",
    value:
  }, {
    key: "requestDataRange",
    value:
  }, {
    key: "abort",
    value:
  }]);

  return PDFDataRangeTransport;
}();

exports.PDFDataRangeTransport = PDFDataRangeTransport;

var PDFDocumentProxy =
/*#__PURE__*/
function () {
 

  _createClass(PDFDocumentProxy, [{
    key: "getPage",
    value: function getPage(pageNumber) {
      return this._transport.getPage(pageNumber);
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex(ref) {
      return this._transport.getPageIndex(ref);
    }
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this._transport.getDestinations();
    }
  }, {
    key: "getDestination",
    value:
  }, {
    key: "getPageLabels",
    value: function getPageLabels() {
      return this._transport.getPageLabels();
    }
  }, {
    key: "getPageLayout",
    value: function getPageLayout() {
      return this._transport.getPageLayout();
    }
  }, {
    key: "getPageMode",
    value: function getPageMode() {
      return this._transport.getPageMode();
    }
  }, {
    key: "getViewerPreferences",
    value: function getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
  }, {
    key: "getOpenActionDestination",
    value: function getOpenActionDestination() {
      return this._transport.getOpenActionDestination();
    }
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this._transport.getAttachments();
    }
  }, {
    key: "getJavaScript",
    value: function getJavaScript() {
      return this._transport.getJavaScript();
    }
  }, {
    key: "getOutline",
    value:
  }, {
    key: "getPermissions",
    value: function getPermissions() {
      return this._transport.getPermissions();
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this._transport.getMetadata();
    }
  }, {
    key: "getData",
    value: function getData() {
      return this._transport.getData();
    }
  }, {
    key: "getDownloadInfo",
    value: function getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this._transport.getStats();
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this._transport.startCleanup();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return this.loadingTask.destroy();
    }
  }, {
    key: "numPages",
    get: function get() {
      return this._pdfInfo.numPages;
    }
  }, {
    key: "fingerprint",
    get: function get() {
      return this._pdfInfo.fingerprint;
    }
  }, {
    key: "loadingParams",
    get: function get() {
      return this._transport.loadingParams;
    }
  }, {
    key: "loadingTask",
    get: function get() {
      return this._transport.loadingTask;
    }
  }]);

  return PDFDocumentProxy;
}();

exports.PDFDocumentProxy = PDFDocumentProxy;

var PDFPageProxy =
/*#__PURE__*/
function () {
  function PDFPageProxy(pageIndex, pageInfo, transport) {
    var pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, PDFPageProxy);

    this.pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = transport;
    this._stats = pdfBug ? new _display_utils.StatTimer() : _display_utils.DummyStatTimer;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this.cleanupAfterRender = false;
    this.pendingCleanup = false;
    this.intentStates = Object.create(null);
    this.destroyed = false;
  }

  _createClass(PDFPageProxy, [{
    key: "getViewport",
    value: function getViewport() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          scale = _ref.scale,
          _ref$rotation = _ref.rotation,
          rotation = _ref$rotation === void 0 ? this.rotate : _ref$rotation,
          _ref$dontFlip = _ref.dontFlip,
          dontFlip = _ref$dontFlip === void 0 ? false : _ref$dontFlip;

      if (arguments.length > 1 || typeof arguments[0] === 'number') {
        (0, _display_utils.deprecated)('getViewport is called with obsolete arguments.');
        scale = arguments[0];
        rotation = typeof arguments[1] === 'number' ? arguments[1] : this.rotate;
        dontFlip = typeof arguments[2] === 'boolean' ? arguments[2] : false;
      }

      return new _display_utils.PageViewport({
        viewBox: this.view,
        scale: scale,
        rotation: rotation,
        dontFlip: dontFlip
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$intent = _ref2.intent,
          intent = _ref2$intent === void 0 ? null : _ref2$intent;

      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
        this.annotationsPromise = this._transport.getAnnotations(this.pageIndex, intent);
        this.annotationsIntent = intent;
      }

      return this.annotationsPromise;
    }
  }, {
    key: "render",
    value: function render(_ref3) {
      var _this5 = this;

      var canvasContext = _ref3.canvasContext,
          viewport = _ref3.viewport,
          _ref3$intent = _ref3.intent,
          intent = _ref3$intent === void 0 ? 'display' : _ref3$intent,
          _ref3$enableWebGL = _ref3.enableWebGL,
          enableWebGL = _ref3$enableWebGL === void 0 ? false : _ref3$enableWebGL,
          _ref3$renderInteracti = _ref3.renderInteractiveForms,
          renderInteractiveForms = _ref3$renderInteracti === void 0 ? false : _ref3$renderInteracti,
          _ref3$transform = _ref3.transform,
          transform = _ref3$transform === void 0 ? null : _ref3$transform,
          _ref3$imageLayer = _ref3.imageLayer,
          imageLayer = _ref3$imageLayer === void 0 ? null : _ref3$imageLayer,
          _ref3$canvasFactory = _ref3.canvasFactory,
          canvasFactory = _ref3$canvasFactory === void 0 ? null : _ref3$canvasFactory,
          _ref3$background = _ref3.background,
          background = _ref3$background === void 0 ? null : _ref3$background;
      var stats = this._stats;
      stats.time('Overall');
      this.pendingCleanup = false;
      var renderingIntent = intent === 'print' ? 'print' : 'display';
      var canvasFactoryInstance = canvasFactory || new _display_utils.DOMCanvasFactory();
      var webGLContext = new _webgl.WebGLContext({
        enable: enableWebGL
      });

      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }

      var intentState = this.intentStates[renderingIntent];

      if (!intentState.displayReadyCapability) {
        intentState.receivingOperatorList = true;
        intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        stats.time('Page Request');

        this._transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageNumber - 1,
          intent: renderingIntent,
          renderInteractiveForms: renderInteractiveForms === true
        });
      }

      var complete = function complete(error) {
        var i = intentState.renderTasks.indexOf(internalRenderTask);

        if (i >= 0) {
          intentState.renderTasks.splice(i, 1);
        }

        if (_this5.cleanupAfterRender || renderingIntent === 'print') {
          _this5.pendingCleanup = true;
        }

        _this5._tryCleanup();

        if (error) {
          internalRenderTask.capability.reject(error);
        } else {
          internalRenderTask.capability.resolve();
        }

        stats.timeEnd('Rendering');
        stats.timeEnd('Overall');
      };

      var internalRenderTask = new InternalRenderTask({
        callback: complete,
        params: {
          canvasContext: canvasContext,
          viewport: viewport,
          transform: transform,
          imageLayer: imageLayer,
          background: background
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        operatorList: intentState.operatorList,
        pageNumber: this.pageNumber,
        canvasFactory: canvasFactoryInstance,
        webGLContext: webGLContext,
        useRequestAnimationFrame: renderingIntent !== 'print',
        pdfBug: this._pdfBug
      });

      if (!intentState.renderTasks) {
        intentState.renderTasks = [];
      }

      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;
      intentState.displayReadyCapability.promise.then(function (transparency) {
        if (_this5.pendingCleanup) {
          complete();
          return;
        }

        stats.time('Rendering');
        internalRenderTask.initializeGraphics(transparency);
        internalRenderTask.operatorListChanged();
      })["catch"](complete);
      return renderTask;
    }
  }, {
    key: "getOperatorList",
    value: function getOperatorList() {
     

      var renderingIntent = 'oplist';

      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }

      var intentState = this.intentStates[renderingIntent];
      var opListTask;

      if (!intentState.opListReadCapability) {
        opListTask = {};
        opListTask.operatorListChanged = operatorListChanged;
        intentState.receivingOperatorList = true;
        intentState.opListReadCapability = (0, _util.createPromiseCapability)();
        intentState.renderTasks = [];
        intentState.renderTasks.push(opListTask);
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };

        this._stats.time('Page Request');

        this._transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageIndex,
          intent: renderingIntent
        });
      }

      return intentState.opListReadCapability.promise;
    }
  }, {
    key: "streamTextContent",
    value: function streamTextContent() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$normalizeWhites = _ref4.normalizeWhitespace,
          normalizeWhitespace = _ref4$normalizeWhites === void 0 ? false : _ref4$normalizeWhites,
          _ref4$disableCombineT = _ref4.disableCombineTextItems,
          disableCombineTextItems = _ref4$disableCombineT === void 0 ? false : _ref4$disableCombineT;

      var TEXT_CONTENT_CHUNK_SIZE = 100;
      return this._transport.messageHandler.sendWithStream('GetTextContent', {
        pageIndex: this.pageNumber - 1,
        normalizeWhitespace: normalizeWhitespace === true,
        combineTextItems: disableCombineTextItems !== true
      }, {
        highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
        size:
      });
    }
  }, {
    key: "getTextContent",
    value: function getTextContent() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var readableStream = this.streamTextContent(params);
      return new Promise(function (resolve, reject) {
        function pump() {
          reader.read().then(function (_ref5) {
            var _textContent$items;

            var value = _ref5.value,
                done = _ref5.done;

            if (done) {
              resolve(textContent);
              return;
            }

            Object.assign(textContent.styles, value.styles);

            (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));

            pump();
          }, reject);
        }

        var reader = readableStream.getReader();
        var textContent = {
          items: [],
          styles: Object.create(null)
        };
        pump();
      });
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      this.destroyed = true;
      this._transport.pageCache[this.pageIndex] = null;
      var waitOn = [];
      Object.keys(this.intentStates).forEach(function (intent) {
        if (intent === 'oplist') {
          return;
        }

        var intentState = this.intentStates[intent];
        intentState.renderTasks.forEach(function (renderTask) {
          var renderCompleted = renderTask.capability.promise["catch"](function () {});
          waitOn.push(renderCompleted);
          renderTask.cancel();
        });
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.pendingCleanup = true;

      this._tryCleanup(resetStats);
    }
  }, {
    key: "_tryCleanup",
    value: function _tryCleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.pendingCleanup || Object.keys(this.intentStates).some, this)) {
        return;
      }

      Object.keys(this.intentStates).forEach, this);
      this.objs.clear();
      this.annotationsPromise = null;

      if (resetStats && this._stats instanceof _display_utils.StatTimer) {
        this._stats = new _display_utils.StatTimer();
      }

      this.pendingCleanup = false;
    }
  }, {
    key: "_startRenderPage",
    value:
  }, {
    key: "_renderPageChunk",
    value: function _renderPageChunk(operatorListChunk, intent) {
      var intentState = this.intentStates[intent];

      for (var i = 0, ii = operatorListChunk.length; i < ii; i++) {
        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
        intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
      }

      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

      for (var _i = 0; _i < intentState.renderTasks.length; _i++) {
        intentState.renderTasks[_i].operatorListChanged();
      }

      if (operatorListChunk.lastChunk) {
        intentState.receivingOperatorList = false;

        this._tryCleanup();
      }
    }
  }, {
    key: "pageNumber",
    get:
  }, {
    key: "rotate",
    get: function get() {
      return this._pageInfo.rotate;
    }
  }, {
    key: "ref",
    get: function get() {
      return this._pageInfo.ref;
    }
  }, {
    key: "userUnit",
    get: function get() {
      return this._pageInfo.userUnit;
    }
  }, {
    key: "view",
    get: function get() {
      return this._pageInfo.view;
    }
  }, {
    key: "stats",
    get:
  }]);

  return PDFPageProxy;
}();

exports.PDFPageProxy = PDFPageProxy;

var LoopbackPort =
/*#__PURE__*/
function () {
  function LoopbackPort() {
    var defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, LoopbackPort);

    this._listeners = [];
    this._defer = defer;
    this._deferred = Promise.resolve(undefined);
  }

  _createClass(LoopbackPort, [{
    key: "postMessage",
    value: function postMessage(obj, transfers) {
      var _this6 = this;

      function cloneValue(value) {
        if (_typeof(value) !== 'object' || value === null) {
          return value;
        }

        if (cloned.has(value)) {
          return cloned.get(value);
        }

        var buffer, result;

        if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
          var transferable = transfers && transfers.includes(buffer);

          if (value === buffer) {
            result = value;
          } else if (transferable) {
            result = new value.constructor(buffer, value.byteOffset, value.byteLength);
          } else {
            result = new value.constructor(value);
          }

          cloned.set(value, result);
          return result;
        }

        result = Array.isArray(value) ? [] : {};
        cloned.set(value, result);

        for (var i in value) {
          var desc = void 0,
              p = value;

          while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
            p = Object.getPrototypeOf(p);
          }

          if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
            continue;
          }

          result[i] = cloneValue(desc.value);
        }

        return result;
      }

      if (!this._defer) {
        this._listeners.forEach, this);

        return;
      }

      var cloned = new WeakMap();
      var e = {
        data: cloneValue(obj)
      };

      this._deferred.then);
    }
  }, {
    key: "addEventListener",
    value:
  }, {
    key: "removeEventListener",
    value:
  }, {
    key: "terminate",
    value:
  }]);

  return LoopbackPort;
}();

exports.LoopbackPort = LoopbackPort;

var PDFWorker = function PDFWorkerClosure() {
  var pdfWorkerPorts = new WeakMap();
  var nextFakeWorkerId = 0;
  var fakeWorkerFilesLoadedCapability;

  function _getWorkerSrc() {
    if (_worker_options.GlobalWorkerOptions.workerSrc) {
      return _worker_options.GlobalWorkerOptions.workerSrc;
    }

    if (typeof fallbackWorkerSrc !== 'undefined') {
      return fallbackWorkerSrc;
    }

    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }

  function getMainThreadWorkerMessageHandler() {
    try {
      if (typeof window !== 'undefined') {
        return window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler;
      }
    } catch (ex) {}

    return null;
  }

  function setupFakeWorkerGlobal() {
    if (fakeWorkerFilesLoadedCapability) {
      return fakeWorkerFilesLoadedCapability.promise;
    }

    fakeWorkerFilesLoadedCapability = (0, _util.createPromiseCapability)();
    var mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();

    if (mainWorkerMessageHandler) {
      fakeWorkerFilesLoadedCapability.resolve(mainWorkerMessageHandler);
      return fakeWorkerFilesLoadedCapability.promise;
    }

    var loader = fakeWorkerFilesLoader ||;

    loader().then(fakeWorkerFilesLoadedCapability.resolve, fakeWorkerFilesLoadedCapability.reject);
    return fakeWorkerFilesLoadedCapability.promise;
  }

  function createCDNWrapper(url) {
    var wrapper = 'importScripts(\'' + url + '\');';
    return _util.URL.createObjectURL(new Blob([wrapper]));
  }

  var PDFWorker =
  /*#__PURE__*/
  function () {
    function PDFWorker() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$name = _ref6.name,
          name = _ref6$name === void 0 ? null : _ref6$name,
          _ref6$port = _ref6.port,
          port = _ref6$port === void 0 ? null : _ref6$port,
          _ref6$postMessageTran = _ref6.postMessageTransfers,
          postMessageTransfers = _ref6$postMessageTran === void 0 ? true : _ref6$postMessageTran,
          _ref6$verbosity = _ref6.verbosity,
          verbosity = _ref6$verbosity === void 0 ? (0, _util.getVerbosityLevel)() : _ref6$verbosity;

      _classCallCheck(this, PDFWorker);

      if (port && pdfWorkerPorts.has(port)) {
        throw new Error('Cannot use more than one PDFWorker per port');
      }

      this.name = name;
      this.destroyed = false;
      this.postMessageTransfers = postMessageTransfers !== false;
      this.verbosity = verbosity;
      this._readyCapability = (0, _util.createPromiseCapability)();
      this._port = null;
      this._webWorker = null;
      this._messageHandler = null;

      if (port) {
        pdfWorkerPorts.set(port, this);

        this._initializeFromPort(port);

        return;
      }

      this._initialize();
    }

    _createClass(PDFWorker, [{
      key: "_initializeFromPort",
      value: function _initializeFromPort(port) {
        this._port = port;
        this._messageHandler = new _message_handler.MessageHandler('main', 'worker', port);

        this._messageHandler.on('ready', function () {});

        this._readyCapability.resolve();
      }
    }, {
      key: "_initialize",
      value: function _initialize() {
        var _this7 = this;

        if (typeof Worker !== 'undefined' && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
          var workerSrc = _getWorkerSrc();

          try {
            if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
              workerSrc = createCDNWrapper(new _util.URL(workerSrc, window.location).href);
            }

            var worker = new Worker(workerSrc);
            var messageHandler = new _message_handler.MessageHandler('main', 'worker', worker);

            var terminateEarly = function terminateEarly() {
              worker.removeEventListener('error', onWorkerError);
              messageHandler.destroy();
              worker.terminate();

              if (_this7.destroyed) {
                _this7._readyCapability.reject(new Error('Worker was destroyed'));
              } else {
                _this7._setupFakeWorker();
              }
            };

            var onWorkerError =;

            worker.addEventListener('error', onWorkerError);
            messageHandler.on('test', function (data) {
              worker.removeEventListener('error', onWorkerError);

              if (_this7.destroyed) {
                terminateEarly();
                return;
              }

              if (data && data.supportTypedArray) {
                _this7._messageHandler = messageHandler;
                _this7._port = worker;
                _this7._webWorker = worker;

                if (!data.supportTransfers) {
                  _this7.postMessageTransfers = false;
                }

                _this7._readyCapability.resolve();

                messageHandler.send('configure', {
                  verbosity: _this7.verbosity
                });
              } else {
                _this7._setupFakeWorker();

                messageHandler.destroy();
                worker.terminate();
              }
            });
            messageHandler.on('ready', function (data) {
              worker.removeEventListener('error', onWorkerError);

              if (_this7.destroyed) {
                terminateEarly();
                return;
              }

              try {
                sendTest();
              } catch (e) {
                _this7._setupFakeWorker();
              }
            });

            var sendTest = function sendTest() {
              var testObj = new Uint8Array([_this7.postMessageTransfers ? 255 : 0]);

              try {
                messageHandler.send('test', testObj, [testObj.buffer]);
              } catch (ex) {
                (0, _util.info)('Cannot use postMessage transfers');
                testObj[0] = 0;
                messageHandler.send('test', testObj);
              }
            };

            sendTest();
            return;
          } catch (e) {
            (0, _util.info)('The worker has been disabled.');
          }
        }

        this._setupFakeWorker();
      }
    }, {
      key: "_setupFakeWorker",
      value: function _setupFakeWorker() {
        var _this8 = this;

        if (!isWorkerDisabled) {
          (0, _util.warn)('Setting up fake worker.');
          isWorkerDisabled = true;
        }

        setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
          if (_this8.destroyed) {
            _this8._readyCapability.reject(new Error('Worker was destroyed'));

            return;
          }

          var port = new LoopbackPort();
          _this8._port = port;
          var id = 'fake' + nextFakeWorkerId++;
          var workerHandler = new _message_handler.MessageHandler(id + '_worker', id, port);
          WorkerMessageHandler.setup(workerHandler, port);
          var messageHandler = new _message_handler.MessageHandler(id, id + '_worker', port);
          _this8._messageHandler = messageHandler;

          _this8._readyCapability.resolve();
        })["catch"]);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyed = true;

        if (this._webWorker) {
          this._webWorker.terminate();

          this._webWorker = null;
        }

        pdfWorkerPorts["delete"](this._port);
        this._port = null;

        if (this._messageHandler) {
          this._messageHandler.destroy();

          this._messageHandler = null;
        }
      }
    }, {
      key: "promise",
      get: function get() {
        return this._readyCapability.promise;
      }
    }, {
      key: "port",
      get: function get() {
        return this._port;
      }
    }, {
      key: "messageHandler",
      get: function get() {
        return this._messageHandler;
      }
    }], [{
      key: "fromPort",
      value: function fromPort(params) {
        if (!params || !params.port) {
          throw new Error('PDFWorker.fromPort - invalid method signature.');
        }

        if (pdfWorkerPorts.has(params.port)) {
          return pdfWorkerPorts.get(params.port);
        }

        return new PDFWorker(params);
      }
    }, {
      key: "getWorkerSrc",
      value:
    }]);

    return PDFWorker;
  }();

  return PDFWorker;
}();

exports.PDFWorker = PDFWorker;

var WorkerTransport =
/*#__PURE__*/
function () {
  function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
    _classCallCheck(this, WorkerTransport);

    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new _font_loader.FontLoader({
      docId: loadingTask.docId,
      onUnsupportedFeature: this._onUnsupportedFeature.bind(this)
    });
    this._params = params;
    this.CMapReaderFactory = new params.CMapReaderFactory({
      baseUrl: params.cMapUrl,
      isCompressed: params.cMapPacked
    });
    this.destroyed = false;
    this.destroyCapability = null;
    this._passwordCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.pageCache = [];
    this.pagePromises = [];
    this.downloadInfoCapability = (0, _util.createPromiseCapability)();
    this.setupMessageHandler();
  }

  _createClass(WorkerTransport, [{
    key: "destroy",
    value: function destroy() {
      var _this9 = this;

      if (this.destroyCapability) {
        return this.destroyCapability.promise;
      }

      this.destroyed = true;
      this.destroyCapability = (0, _util.createPromiseCapability)();

      if (this._passwordCapability) {
        this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
      }

      var waitOn = [];
      this.pageCache.forEach);
      this.pageCache.length = 0;
      this.pagePromises.length = 0;
      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
      waitOn.push(terminated);
      Promise.all(waitOn).then(function () {
        _this9.fontLoader.clear();

        if (_this9._networkStream) {
          _this9._networkStream.cancelAllRequests();
        }

        if (_this9.messageHandler) {
          _this9.messageHandler.destroy();

          _this9.messageHandler = null;
        }

        _this9.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    }
  }, {
    key: "setupMessageHandler",
    value: function setupMessageHandler() {
      var messageHandler = this.messageHandler,
          loadingTask = this.loadingTask;
      messageHandler.on('GetReader', function (data, sink) {
        var _this10 = this;

        (0, _util.assert)(this._networkStream);
        this._fullReader = this._networkStream.getFullReader();

        this._fullReader.onProgress =;

        sink.onPull = function () {
          _this10._fullReader.read().then(function (_ref7) {
            var value = _ref7.value,
                done = _ref7.done;

            if (done) {
              sink.close();
              return;
            }

            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };

        sink.onCancel =;
      }, this);
      messageHandler.on('ReaderHeadersReady', function (data) {
        var _this11 = this;

        var headersCapability = (0, _util.createPromiseCapability)();
        var fullReader = this._fullReader;
        fullReader.headersReady.then(function () {
          if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
            if (_this11._lastProgress && loadingTask.onProgress) {
              loadingTask.onProgress(_this11._lastProgress);
            }

            fullReader.onProgress =;
          }

          headersCapability.resolve({
            isStreamingSupported: fullReader.isStreamingSupported,
            isRangeSupported: fullReader.isRangeSupported,
            contentLength: fullReader.contentLength
          });
        }, headersCapability.reject);
        return headersCapability.promise;
      }, this);
      messageHandler.on('GetRangeReader', function (data, sink) {
        (0, _util.assert)(this._networkStream);

        var rangeReader = this._networkStream.getRangeReader(data.begin, data.end);

        if (!rangeReader) {
          sink.close();
          return;
        }

        sink.onPull = function () {
          rangeReader.read().then(function (_ref8) {
            var value = _ref8.value,
                done = _ref8.done;

            if (done) {
              sink.close();
              return;
            }

            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };

        sink.onCancel = function (reason) {
          rangeReader.cancel(reason);
        };
      }, this);
      messageHandler.on('GetDoc', function (_ref9) {
        var pdfInfo = _ref9.pdfInfo;
        this._numPages = pdfInfo.numPages;

        loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
      }, this);
      messageHandler.on('PasswordRequest', function (exception) {
        var _this12 = this;

        this._passwordCapability = (0, _util.createPromiseCapability)();

        if (loadingTask.onPassword) {
          var updatePassword =;

          try {
            loadingTask.onPassword(updatePassword, exception.code);
          } catch (ex) {
            this._passwordCapability.reject(ex);
          }
        } else {
          this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
        }

        return this._passwordCapability.promise;
      }, this);
      messageHandler.on('PasswordException', function (exception) {
        loadingTask._capability.reject(new _util.PasswordException(exception.message, exception.code));
      }, this);
      messageHandler.on('InvalidPDF', function (exception) {
        loadingTask._capability.reject(new _util.InvalidPDFException(exception.message));
      }, this);
      messageHandler.on('MissingPDF',, this);
      messageHandler.on('UnexpectedResponse', function (exception) {
        loadingTask._capability.reject(new _util.UnexpectedResponseException(exception.message, exception.status));
      }, this);
      messageHandler.on('UnknownError',, this);
      messageHandler.on('DataLoaded', function (data) {
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.length,
            total: data.length
          });
        }

        this.downloadInfoCapability.resolve(data);
      }, this);
      messageHandler.on('StartRenderPage', function (data) {
        if (this.destroyed) {
          return;
        }

        var page = this.pageCache[data.pageIndex];

        page._stats.timeEnd('Page Request');

        page._startRenderPage(data.transparency, data.intent);
      }, this);
      messageHandler.on('RenderPageChunk', function (data) {
        if (this.destroyed) {
          return;
        }

        var page = this.pageCache[data.pageIndex];

        page._renderPageChunk(data.operatorList, data.intent);
      }, this);
      messageHandler.on('commonobj', function (data) {
        var _this13 = this;

        if (this.destroyed) {
          return;
        }

        var _data = _slicedToArray(data, 3),
            id = _data[0],
            type = _data[1],
            exportedData = _data[2];

        if (this.commonObjs.has(id)) {
          return;
        }

        switch (type) {
          case 'Font':
            var params = this._params;

            if ('error' in exportedData) {
              var exportedError = exportedData.error;
              (0, _util.warn)("Error during font loading: ".concat(exportedError));
              this.commonObjs.resolve(id, exportedError);
              break;
            }

            var fontRegistry = null;

            if (params.pdfBug && _global_scope["default"].FontInspector && _global_scope["default"].FontInspector.enabled) {
              fontRegistry = {
                registerFont: function registerFont(font, url) {
                  _global_scope["default"]['FontInspector'].fontAdded(font, url);
                }
              };
            }

            var font = new _font_loader.FontFaceObject(exportedData, {
              isEvalSupported: params.isEvalSupported,
              disableFontFace: params.disableFontFace,
              ignoreErrors: params.ignoreErrors,
              onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              fontRegistry: fontRegistry
            });
            this.fontLoader.bind(font).then(function () {
              _this13.commonObjs.resolve(id, font);
            }, function (reason) {
              messageHandler.sendWithPromise('FontFallback', {
                id: id
              })["finally"]);
            });
            break;

          case 'FontPath':
          case 'FontType3Res':
            this.commonObjs.resolve(id, exportedData);
            break;

          default:
            throw new Error("Got unknown common object type ".concat(type));
        }
      }, this);
      messageHandler.on('obj', function (data) {
        if (this.destroyed) {
          return undefined;
        }

        var _data2 = _slicedToArray(data, 4),
            id = _data2[0],
            pageIndex = _data2[1],
            type = _data2[2],
            imageData = _data2[3];

        var pageProxy = this.pageCache[pageIndex];

        if (pageProxy.objs.has(id)) {
          return undefined;
        }

        switch (type) {
          case 'JpegStream':
            return new Promise(function (resolve, reject) {
              var img = new Image();

              img.onload = function () {
                resolve(img);
              };

              img.onerror = function () {
                reject(new Error('Error during JPEG image loading'));
                (0, _display_utils.releaseImageResources)(img);
              };

              img.src = imageData;
            }).then);

          case 'Image':
            pageProxy.objs.resolve(id, imageData);
            var MAX_IMAGE_SIZE_TO_STORE = 8000000;

            if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
              pageProxy.cleanupAfterRender = true;
            }

            break;

          default:
            throw new Error("Got unknown object type ".concat(type));
        }

        return undefined;
      }, this);
      messageHandler.on('DocProgress', function (data) {
        if (this.destroyed) {
          return;
        }

        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.loaded,
            total: data.total
          });
        }
      }, this);
      messageHandler.on('PageError', function (data) {
        if (this.destroyed) {
          return;
        }

        var page = this.pageCache[data.pageIndex];
        var intentState = page.intentStates[data.intent];

        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(new Error(data.error));
        } else {
          throw new Error(data.error);
        }

        if (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;

          for (var i = 0; i < intentState.renderTasks.length; i++) {
            intentState.renderTasks[i].operatorListChanged();
          }
        }
      }, this);
      messageHandler.on('UnsupportedFeature', this._onUnsupportedFeature, this);
      messageHandler.on('JpegDecode', function (data) {
        if (this.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }

        if (typeof document === 'undefined') {
          return Promise.reject(new Error('"document" is not defined.'));
        }

        var _data3 = _slicedToArray(data, 2),
            imageUrl = _data3[0],
            components = _data3[1];

        if (components !== 3 && components !== 1) {
          return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
        }

        return new Promise(function (resolve, reject) {
          var img = new Image();

          img.onload = function () {
            var width = img.width,
                height = img.height;
            var size = width * height;
            var rgbaLength = size * 4;
            var buf = new Uint8ClampedArray(size * components);
            var tmpCanvas = document.createElement('canvas');
            tmpCanvas.width = width;
            tmpCanvas.height = height;
            var tmpCtx = tmpCanvas.getContext('2d');
            tmpCtx.drawImage(img, 0, 0);
            var data = tmpCtx.getImageData(0, 0, width, height).data;

            if (components === 3) {
              for (var i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                buf[j] = data[i];
                buf[j + 1] = data[i + 1];
                buf[j + 2] = data[i + 2];
              }
            } else if (components === 1) {
              for (var _i2 = 0, _j = 0; _i2 < rgbaLength; _i2 += 4, _j++) {
                buf[_j] = data[_i2];
              }
            }

            resolve({
              data: buf,
              width: width,
              height: height
            });
            (0, _display_utils.releaseImageResources)(img);
            tmpCanvas.width = 0;
            tmpCanvas.height = 0;
            tmpCanvas = null;
            tmpCtx = null;
          };

          img.onerror = function () {
            reject(new Error('JpegDecode failed to load image'));
            (0, _display_utils.releaseImageResources)(img);
          };

          img.src = imageUrl;
        });
      }, this);
      messageHandler.on('FetchBuiltInCMap', function (data) {
        if (this.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }

        return this.CMapReaderFactory.fetch({
          name: data.name
        });
      }, this);
    }
  }, {
    key: "_onUnsupportedFeature",
    value: function _onUnsupportedFeature(_ref10) {
      var featureId = _ref10.featureId;

      if (this.destroyed) {
        return;
      }

      if (this.loadingTask.onUnsupportedFeature) {
        this.loadingTask.onUnsupportedFeature(featureId);
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.messageHandler.sendWithPromise('GetData', null);
    }
  }, {
    key: "getPage",
    value: function getPage(pageNumber) {
      var _this14 = this;

      if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
        return Promise.reject(new Error('Invalid page request'));
      }

      var pageIndex = pageNumber - 1;

      if (pageIndex in this.pagePromises) {
        return this.pagePromises[pageIndex];
      }

      var promise = this.messageHandler.sendWithPromise('GetPage', {
        pageIndex: pageIndex
      }).then(function (pageInfo) {
        if (_this14.destroyed) {
          throw new Error('Transport destroyed');
        }

        var page = new PDFPageProxy(pageIndex, pageInfo, _this14, _this14._params.pdfBug);
        _this14.pageCache[pageIndex] = page;
        return page;
      });
      this.pagePromises[pageIndex] = promise;
      return promise;
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex(ref) {
      return this.messageHandler.sendWithPromise('GetPageIndex', {
        ref: ref
      })["catch"]);
    }
  }, {
    key: "getAnnotations",
    value:
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
    }
  }, {
    key: "getDestination",
    value: function getDestination(id) {
      if (typeof id !== 'string') {
        return Promise.reject(new Error('Invalid destination request.'));
      }

      return this.messageHandler.sendWithPromise('GetDestination', {
        id: id
      });
    }
  }, {
    key: "getPageLabels",
    value: function getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
    }
  }, {
    key: "getPageLayout",
    value: function getPageLayout() {
      return this.messageHandler.sendWithPromise('GetPageLayout', null);
    }
  }, {
    key: "getPageMode",
    value: function getPageMode() {
      return this.messageHandler.sendWithPromise('GetPageMode', null);
    }
  }, {
    key: "getViewerPreferences",
    value: function getViewerPreferences() {
      return this.messageHandler.sendWithPromise('GetViewerPreferences', null);
    }
  }, {
    key: "getOpenActionDestination",
    value: function getOpenActionDestination() {
      return this.messageHandler.sendWithPromise('GetOpenActionDestination', null);
    }
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
    }
  }, {
    key: "getJavaScript",
    value: function getJavaScript() {
      return this.messageHandler.sendWithPromise('GetJavaScript', null);
    }
  }, {
    key: "getOutline",
    value: function getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
    }
  }, {
    key: "getPermissions",
    value: function getPermissions() {
      return this.messageHandler.sendWithPromise('GetPermissions', null);
    }
  }, {
    key: "getMetadata",
    value:
  }, {
    key: "getStats",
    value:
  }, {
    key: "startCleanup",
    value: function startCleanup() {
      var _this16 = this;

      this.messageHandler.sendWithPromise('Cleanup', null).then(function () {
        for (var i = 0, ii = _this16.pageCache.length; i < ii; i++) {
          var page = _this16.pageCache[i];

          if (page) {
            page.cleanup();
          }
        }

        _this16.commonObjs.clear();

        _this16.fontLoader.clear();
      });
    }
  }, {
    key: "loadingParams",
    get:
  }]);

  return WorkerTransport;
}();

var PDFObjects =
/*#__PURE__*/
function () {
 

  _createClass(PDFObjects, [{
    key: "_ensureObj",
    value: function _ensureObj(objId) {
      if (this._objs[objId]) {
        return this._objs[objId];
      }

      return this._objs[objId] = {
        capability: (0, _util.createPromiseCapability)(),
        data: null,
        resolved: false
      };
    }
  }, {
    key: "get",
    value: function get(objId) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (callback) {
        this._ensureObj(objId).capability.promise.then(callback);

        return null;
      }

      var obj = this._objs[objId];

      if (!obj || !obj.resolved) {
        throw new Error("Requesting object that isn't resolved yet ".concat(objId, "."));
      }

      return obj.data;
    }
  }, {
    key: "has",
    value:
  }, {
    key: "resolve",
    value:
  }, {
    key: "clear",
    value: function clear() {
      for (var objId in this._objs) {
        var data = this._objs[objId].data;

        if (typeof Image !== 'undefined' && data instanceof Image) {
          (0, _display_utils.releaseImageResources)(data);
        }
      }

      this._objs = Object.create(null);
    }
  }]);

  return PDFObjects;
}();

var RenderTask =
/*#__PURE__*/
function () {
 

  _createClass(RenderTask, [{
    key: "cancel",
    value: function cancel() {
      this._internalRenderTask.cancel();
    }
  }, {
    key: "then",
    value: function then(onFulfilled, onRejected) {
      (0, _display_utils.deprecated)('RenderTask.then method, use the `promise` getter instead.');
      return this.promise.then.apply(this.promise, arguments);
    }
  }, {
    key: "promise",
    get:
  }]);

  return RenderTask;
}();

var InternalRenderTask = function InternalRenderTaskClosure() {
  var canvasInRendering = new WeakSet();

  var InternalRenderTask =
  /*#__PURE__*/
  function () {
    function InternalRenderTask(_ref11) {
      var callback = _ref11.callback,
          params = _ref11.params,
          objs = _ref11.objs,
          commonObjs = _ref11.commonObjs,
          operatorList = _ref11.operatorList,
          pageNumber = _ref11.pageNumber,
          canvasFactory = _ref11.canvasFactory,
          webGLContext = _ref11.webGLContext,
          _ref11$useRequestAnim = _ref11.useRequestAnimationFrame,
          useRequestAnimationFrame = _ref11$useRequestAnim === void 0 ? false : _ref11$useRequestAnim,
          _ref11$pdfBug = _ref11.pdfBug,
          pdfBug = _ref11$pdfBug === void 0 ? false : _ref11$pdfBug;

      _classCallCheck(this, InternalRenderTask);

      this.callback = callback;
      this.params = params;
      this.objs = objs;
      this.commonObjs = commonObjs;
      this.operatorListIdx = null;
      this.operatorList = operatorList;
      this.pageNumber = pageNumber;
      this.canvasFactory = canvasFactory;
      this.webGLContext = webGLContext;
      this._pdfBug = pdfBug;
      this.running = false;
      this.graphicsReadyCallback = null;
      this.graphicsReady = false;
      this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== 'undefined';
      this.cancelled = false;
      this.capability = (0, _util.createPromiseCapability)();
      this.task = new RenderTask(this);
      this._continueBound = this._continue.bind(this);
      this._scheduleNextBound = this._scheduleNext.bind(this);
      this._nextBound = this._next.bind(this);
      this._canvas = params.canvasContext.canvas;
    }

    _createClass(InternalRenderTask, [{
      key: "initializeGraphics",
      value: function initializeGraphics() {
        var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (this.cancelled) {
          return;
        }

        if (this._canvas) {
          if (canvasInRendering.has(this._canvas)) {
            throw new Error('Cannot use the same canvas during multiple render() operations. ' + 'Use different canvas or ensure previous operations were ' + 'cancelled or completed.');
          }

          canvasInRendering.add(this._canvas);
        }

        if (this._pdfBug && _global_scope["default"].StepperManager && _global_scope["default"].StepperManager.enabled) {
          this.stepper = _global_scope["default"].StepperManager.create(this.pageNumber - 1);
          this.stepper.init(this.operatorList);
          this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
        }

        var _this$params = this.params,
            canvasContext = _this$params.canvasContext,
            viewport = _this$params.viewport,
            transform = _this$params.transform,
            imageLayer = _this$params.imageLayer,
            background = _this$params.background;
        this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer);
        this.gfx.beginDrawing({
          transform: transform,
          viewport: viewport,
          transparency: transparency,
          background: background
        });
        this.operatorListIdx = 0;
        this.graphicsReady = true;

        if (this.graphicsReadyCallback) {
          this.graphicsReadyCallback();
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.running = false;
        this.cancelled = true;

        if (this.gfx) {
          this.gfx.endDrawing();
        }

        if (this._canvas) {
          canvasInRendering["delete"](this._canvas);
        }

        this.callback(error || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this.pageNumber), 'canvas'));
      }
    }, {
      key: "operatorListChanged",
      value:
    }, {
      key: "_continue",
      value:
    }, {
      key: "_scheduleNext",
      value: function _scheduleNext() {
        var _this17 = this;

        if (this._useRequestAnimationFrame) {
          window.requestAnimationFrame);
        } else {
          Promise.resolve().then(this._nextBound)["catch"](this.cancel.bind(this));
        }
      }
    }, {
      key: "_next",
      value: function () {
        var _next2 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee() {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!this.cancelled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);

                  if (this.operatorListIdx === this.operatorList.argsArray.length) {
                    this.running = false;

                    if (this.operatorList.lastChunk) {
                      this.gfx.endDrawing();

                      if (this._canvas) {
                        canvasInRendering["delete"](this._canvas);
                      }

                      this.callback();
                    }
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _next() {
          return _next2.apply(this, arguments);
        }

        return _next;
      }()
    }]);

    return InternalRenderTask;
  }();

  return InternalRenderTask;
}();

var version = '2.2.228';
exports.version = version;
var build = 'd7afb74a';
exports.build = build;

/***/ }),
/* 148 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = __w_pdfjs_require__(149);

/***/ }),
/* 149 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

 

  exports.wrap = wrap;

 

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

 

  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

 

  exports.isGeneratorFunction =;

  exports.mark =;

  exports.awrap =;

 

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator;

  exports.async =;

 

 

  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";

  Gp[iteratorSymbol] =;

  Gp.toString = function () {
    return "[object Generator]";
  };

 

 

 

  exports.keys =;

 

  exports.values = values;

 

  Context.prototype = {
    constructor: Context,
    reset:,
    stop:,
    dispatchException:,
    abrupt:,
    complete:,
    finish:,
    "catch":,
    delegateYield:
  };
  return exports;
}(( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __w_pdfjs_require__(150)(module)))

/***/ }),
/* 150 */
/***/ ),
/* 151 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLinkAttributes = addLinkAttributes;
exports.getFilenameFromUrl = getFilenameFromUrl;
exports.isFetchSupported = isFetchSupported;
exports.isValidFetchUrl = isValidFetchUrl;
exports.loadScript = loadScript;
exports.deprecated = deprecated;
exports.releaseImageResources = releaseImageResources;
exports.PDFDateString = exports.DummyStatTimer = exports.StatTimer = exports.DOMSVGFactory = exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.LinkTarget = exports.RenderingCancelledException = exports.PageViewport = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
var SVG_NS = 'http://www.w3.org/2000/svg';

var DOMCanvasFactory =
/*#__PURE__*/
function () {
  function DOMCanvasFactory() {
    _classCallCheck(this, DOMCanvasFactory);
  }

  _createClass(DOMCanvasFactory, [{
    key: "create",
    value: function create(width, height) {
      if (width <= 0 || height <= 0) {
        throw new Error('Invalid canvas size');
      }

      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      return {
        canvas: canvas,
        context: context
      };
    }
  }, {
    key: "reset",
    value: function reset(canvasAndContext, width, height) {
      if (!canvasAndContext.canvas) {
        throw new Error('Canvas is not specified');
      }

      if (width <= 0 || height <= 0) {
        throw new Error('Invalid canvas size');
      }

      canvasAndContext.canvas.width = width;
      canvasAndContext.canvas.height = height;
    }
  }, {
    key: "destroy",
    value: function destroy(canvasAndContext) {
      if (!canvasAndContext.canvas) {
        throw new Error('Canvas is not specified');
      }

      canvasAndContext.canvas.width = 0;
      canvasAndContext.canvas.height = 0;
      canvasAndContext.canvas = null;
      canvasAndContext.context = null;
    }
  }]);

  return DOMCanvasFactory;
}();

exports.DOMCanvasFactory = DOMCanvasFactory;

var DOMCMapReaderFactory =
/*#__PURE__*/
function () {
  function DOMCMapReaderFactory(_ref) {
    var _ref$baseUrl = _ref.baseUrl,
        baseUrl = _ref$baseUrl === void 0 ? null : _ref$baseUrl,
        _ref$isCompressed = _ref.isCompressed,
        isCompressed = _ref$isCompressed === void 0 ? false : _ref$isCompressed;

    _classCallCheck(this, DOMCMapReaderFactory);

    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }

  _createClass(DOMCMapReaderFactory, [{
    key: "fetch",
    value:(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(_ref2) {
        var _this = this;

        var name, url, compressionType;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = _ref2.name;

                if (this.baseUrl) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');

              case 3:
                if (name) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('CMap name must be specified.');

              case 5:
                url = this.baseUrl + name + (this.isCompressed ? '.bcmap' : '');
                compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;

                if (!(isFetchSupported() && isValidFetchUrl(url, document.baseURI))) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", fetch(url).then(
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee(response) {
                    var cMapData;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (response.ok) {
                              _context.next = 2;
                              break;
                            }

                            throw new Error(response.statusText);

                          case 2:
                            if (!_this.isCompressed) {
                              _context.next = 10;
                              break;
                            }

                            _context.t0 = Uint8Array;
                            _context.next = 6;
                            return response.arrayBuffer();

                          case 6:
                            _context.t1 = _context.sent;
                            cMapData = new _context.t0(_context.t1);
                            _context.next = 15;
                            break;

                          case 10:
                            _context.t2 = _util.stringToBytes;
                            _context.next = 13;
                            return response.text();

                          case 13:
                            _context.t3 = _context.sent;
                            cMapData = (0, _context.t2)(_context.t3);

                          case 15:
                            return _context.abrupt("return", {
                              cMapData: cMapData,
                              compressionType: compressionType
                            });

                          case 16:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3) {
                    return _ref4.apply(this, arguments);
                  };
                }())["catch"](function (reason) {
                  throw new Error("Unable to load ".concat(_this.isCompressed ? 'binary ' : '') + "CMap at: ".concat(url));
                }));

              case 9:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var request = new XMLHttpRequest();
                  request.open('GET', url, true);

                  if (_this.isCompressed) {
                    request.responseType = 'arraybuffer';
                  }

                  request.onreadystatechange = function () {
                    if (request.readyState !== XMLHttpRequest.DONE) {
                      return;
                    }

                    if (request.status === 200 || request.status === 0) {
                      var cMapData;

                      if (_this.isCompressed && request.response) {
                        cMapData = new Uint8Array(request.response);
                      } else if (!_this.isCompressed && request.responseText) {
                        cMapData = (0, _util.stringToBytes)(request.responseText);
                      }

                      if (cMapData) {
                        resolve({
                          cMapData: cMapData,
                          compressionType: compressionType
                        });
                        return;
                      }
                    }

                    reject(new Error(request.statusText));
                  };

                  request.send(null);
                })["catch"]));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return;
    }())
  }]);

  return DOMCMapReaderFactory;
}();

exports.DOMCMapReaderFactory = DOMCMapReaderFactory;

var DOMSVGFactory =
/*#__PURE__*/
function () {
  function DOMSVGFactory() {
    _classCallCheck(this, DOMSVGFactory);
  }

  _createClass(DOMSVGFactory, [{
    key: "create",
    value: function create(width, height) {
      (0, _util.assert)(width > 0 && height > 0, 'Invalid SVG dimensions');
      var svg = document.createElementNS(SVG_NS, 'svg:svg');
      svg.setAttribute('version', '1.1');
      svg.setAttribute('width', width + 'px');
      svg.setAttribute('height', height + 'px');
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
      return svg;
    }
  }, {
    key: "createElement",
    value: function createElement(type) {
      (0, _util.assert)(typeof type === 'string', 'Invalid SVG element type');
      return document.createElementNS(SVG_NS, type);
    }
  }]);

  return DOMSVGFactory;
}();

exports.DOMSVGFactory = DOMSVGFactory;

var PageViewport =
/*#__PURE__*/
function () {
  function PageViewport(_ref5) {
    var viewBox = _ref5.viewBox,
        scale = _ref5.scale,
        rotation = _ref5.rotation,
        _ref5$offsetX = _ref5.offsetX,
        offsetX = _ref5$offsetX === void 0 ? 0 : _ref5$offsetX,
        _ref5$offsetY = _ref5.offsetY,
        offsetY = _ref5$offsetY === void 0 ? 0 : _ref5$offsetY,
        _ref5$dontFlip = _ref5.dontFlip,
        dontFlip = _ref5$dontFlip === void 0 ? false : _ref5$dontFlip;

    _classCallCheck(this, PageViewport);

    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var centerX = (viewBox[2] + viewBox[0]) / 2;
    var centerY = (viewBox[3] + viewBox[1]) / 2;
    var rotateA, rotateB, rotateC, rotateD;
    rotation = rotation % 360;
    rotation = rotation < 0 ? rotation + 360 : rotation;

    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;

      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;

      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;

      default:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
    }

    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }

    var offsetCanvasX, offsetCanvasY;
    var width, height;

    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
    }

    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }

  _createClass(PageViewport, [{
    key: "clone",
    value: function clone() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$scale = _ref6.scale,
          scale = _ref6$scale === void 0 ? this.scale : _ref6$scale,
          _ref6$rotation = _ref6.rotation,
          rotation = _ref6$rotation === void 0 ? this.rotation : _ref6$rotation,
          _ref6$dontFlip = _ref6.dontFlip,
          dontFlip = _ref6$dontFlip === void 0 ? false : _ref6$dontFlip;

      return new PageViewport({
        viewBox: this.viewBox.slice(),
        scale: scale,
        rotation: rotation,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        dontFlip: dontFlip
      });
    }
  }, {
    key: "convertToViewportPoint",
    value: function convertToViewportPoint(x, y) {
      return _util.Util.applyTransform([x, y], this.transform);
    }
  }, {
    key: "convertToViewportRectangle",
    value: function convertToViewportRectangle(rect) {
      var topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);

      var bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);

      return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
    }
  }, {
    key: "convertToPdfPoint",
    value:
  }]);

  return PageViewport;
}();

exports.PageViewport = PageViewport;

var RenderingCancelledException =();

exports.RenderingCancelledException = RenderingCancelledException;
var LinkTarget = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
exports.LinkTarget = LinkTarget;
var LinkTargetStringMap = ['', '_self', '_blank', '_parent', '_top'];

function addLinkAttributes(link) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      url = _ref7.url,
      target = _ref7.target,
      rel = _ref7.rel;

  link.href = link.title = url ? (0, _util.removeNullCharacters)(url) : '';

  if (url) {
    var LinkTargetValues = Object.values(LinkTarget);
    var targetIndex = LinkTargetValues.includes(target) ? target : LinkTarget.NONE;
    link.target = LinkTargetStringMap[targetIndex];
    link.rel = typeof rel === 'string' ? rel : DEFAULT_LINK_REL;
  }
}


var StatTimer =
/*#__PURE__*/
function () {
  function StatTimer() {
    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, StatTimer);

    this.enabled = !!enable;
    this.started = Object.create(null);
    this.times = [];
  }

  _createClass(StatTimer, [{
    key: "time",
    value: function time(name) {
      if (!this.enabled) {
        return;
      }

      if (name in this.started) {
        (0, _util.warn)('Timer is already running for ' + name);
      }

      this.started[name] = Date.now();
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(name) {
      if (!this.enabled) {
        return;
      }

      if (!(name in this.started)) {
        (0, _util.warn)('Timer has not been started for ' + name);
      }

      this.times.push({
        'name': name,
        'start': this.started[name],
        'end': Date.now()
      });
      delete this.started[name];
    }
  }, {
    key: "toString",
    value: function toString() {
      var out = '',
          longest = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.times[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var time = _step.value;
          var name = time.name;

          if (name.length > longest) {
            longest = name.length;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.times[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _time = _step2.value;
          var duration = _time.end - _time.start;
          out += "".concat(_time.name.padEnd(longest), " ").concat(duration, "ms\n");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return out;
    }
  }]);

  return StatTimer;
}();

exports.StatTimer = StatTimer;

var DummyStatTimer =
/*#__PURE__*/
function () {
 

  _createClass(DummyStatTimer, null, [{
    key: "time",
    value: function time(name) {}
  }, {
    key: "timeEnd",
    value: function timeEnd(name) {}
  }, {
    key: "toString",
    value: function toString() {
      return '';
    }
  }]);

  return DummyStatTimer;
}();

exports.DummyStatTimer = DummyStatTimer;

function isFetchSupported() {
  return typeof fetch !== 'undefined' && typeof Response !== 'undefined' && 'body' in Response.prototype && typeof ReadableStream !== 'undefined';
}

function isValidFetchUrl(url, baseUrl) {
  try {
    var _ref8 = baseUrl ? new _util.URL(url, baseUrl) : new _util.URL(url),
        protocol = _ref8.protocol;

    return protocol === 'http:' || protocol === 'https:';
  } catch (ex) {
    return false;
  }
}

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = resolve;

    script.onerror =;

    (document.head || document.documentElement).appendChild(script);
  });
}


function releaseImageResources(img) {
  (0, _util.assert)(img instanceof Image, 'Invalid `img` parameter.');
  var url = img.src;

  if (typeof url === 'string' && url.startsWith('blob:') && _util.URL.revokeObjectURL) {
    _util.URL.revokeObjectURL(url);
  }

  img.removeAttribute('src');
}

var pdfDateStringRegex;

var PDFDateString =
/*#__PURE__*/
function () {
  function PDFDateString() {
    _classCallCheck(this, PDFDateString);
  }

  _createClass(PDFDateString, null, [{
    key: "toDateObject",
    value: function toDateObject(input) {
      if (!input || !(0, _util.isString)(input)) {
        return null;
      }

      if (!pdfDateStringRegex) {
        pdfDateStringRegex = new RegExp('^D:' + '(\\d{4})' + '(\\d{2})?' + '(\\d{2})?' + '(\\d{2})?' + '(\\d{2})?' + '(\\d{2})?' + '([Z|+|-])?' + '(\\d{2})?' + '\'?' + '(\\d{2})?' + '\'?');
      }

      var matches = pdfDateStringRegex.exec(input);

      if (!matches) {
        return null;
      }

      var year = parseInt(matches[1], 10);
      var month = parseInt(matches[2], 10);
      month = month >= 1 && month <= 12 ? month - 1 : 0;
      var day = parseInt(matches[3], 10);
      day = day >= 1 && day <= 31 ? day : 1;
      var hour = parseInt(matches[4], 10);
      hour = hour >= 0 && hour <= 23 ? hour : 0;
      var minute = parseInt(matches[5], 10);
      minute = minute >= 0 && minute <= 59 ? minute : 0;
      var second = parseInt(matches[6], 10);
      second = second >= 0 && second <= 59 ? second : 0;
      var universalTimeRelation = matches[7] || 'Z';
      var offsetHour = parseInt(matches[8], 10);
      offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
      var offsetMinute = parseInt(matches[9], 10) || 0;
      offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;

      if (universalTimeRelation === '-') {
        hour += offsetHour;
        minute += offsetMinute;
      } else if (universalTimeRelation === '+') {
        hour -= offsetHour;
        minute -= offsetMinute;
      }

      return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
  }]);

  return PDFDateString;
}();

exports.PDFDateString = PDFDateString;

/***/ }),
/* 152 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontLoader = exports.FontFaceObject = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseFontLoader =
/*#__PURE__*/
function () {
  function BaseFontLoader(_ref) {
    var docId = _ref.docId,
        onUnsupportedFeature = _ref.onUnsupportedFeature;

    _classCallCheck(this, BaseFontLoader);

    if (this.constructor === BaseFontLoader) {
      (0, _util.unreachable)('Cannot initialize BaseFontLoader.');
    }

    this.docId = docId;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this.nativeFontFaces = [];
    this.styleElement = null;
  }

  _createClass(BaseFontLoader, [{
    key: "addNativeFontFace",
    value:
  }, {
    key: "insertRule",
    value: function insertRule(rule) {
      var styleElement = this.styleElement;

      if (!styleElement) {
        styleElement = this.styleElement = document.createElement('style');
        styleElement.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId);
        document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
      }

      var styleSheet = styleElement.sheet;
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.nativeFontFaces.forEach);
      this.nativeFontFaces.length = 0;

      if (this.styleElement) {
        this.styleElement.remove();
        this.styleElement = null;
      }
    }
  }, {
    key: "bind",
    value: function () {
      var _bind = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(font) {
        var _this = this;

        var nativeFontFace, rule;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(font.attached || font.missingFile)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", undefined);

              case 2:
                font.attached = true;

                if (!this.isFontLoadingAPISupported) {
                  _context.next = 19;
                  break;
                }

                nativeFontFace = font.createNativeFontFace();

                if (!nativeFontFace) {
                  _context.next = 18;
                  break;
                }

                this.addNativeFontFace(nativeFontFace);
                _context.prev = 7;
                _context.next = 10;
                return nativeFontFace.loaded;

              case 10:
                _context.next = 18;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](7);

                this._onUnsupportedFeature({
                  featureId: _util.UNSUPPORTED_FEATURES.font
                });

                (0, _util.warn)("Failed to load font '".concat(nativeFontFace.family, "': '").concat(_context.t0, "'."));
                font.disableFontFace = true;
                throw _context.t0;

              case 18:
                return _context.abrupt("return", undefined);

              case 19:
                rule = font.createFontFaceRule();

                if (!rule) {
                  _context.next = 25;
                  break;
                }

                this.insertRule(rule);

                if (!this.isSyncFontLoadingSupported) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("return", undefined);

              case 24:
                return _context.abrupt("return", new Promise));

              case 25:
                return _context.abrupt("return", undefined);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 12]]);
      }));

     

      return bind;
    }()
  }, {
    key: "_queueLoadingCallback",
    value:
  }, {
    key: "_prepareFontLoadEvent",
    value:
  }, {
    key: "isFontLoadingAPISupported",
    get: function get() {
      (0, _util.unreachable)('Abstract method `isFontLoadingAPISupported`.');
    }
  }, {
    key: "isSyncFontLoadingSupported",
    get: function get() {
      (0, _util.unreachable)('Abstract method `isSyncFontLoadingSupported`.');
    }
  }, {
    key: "_loadTestFont",
    get: function get() {
      (0, _util.unreachable)('Abstract method `_loadTestFont`.');
    }
  }]);

  return BaseFontLoader;
}();

var FontLoader;
exports.FontLoader = FontLoader;
{
  exports.FontLoader = FontLoader =
  /*#__PURE__*/
  function (_BaseFontLoader) {
    _inherits(GenericFontLoader, _BaseFontLoader);

    function GenericFontLoader(docId) {
      var _this2;

      _classCallCheck(this, GenericFontLoader);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(GenericFontLoader).call(this, docId));
      _this2.loadingContext = {
        requests: [],
        nextRequestId: 0
      };
      _this2.loadTestFontId = 0;
      return _this2;
    }

    _createClass(GenericFontLoader, [{
      key: "_queueLoadingCallback",
      value: function _queueLoadingCallback(callback) {
        function completeRequest() {
          (0, _util.assert)(!request.done, 'completeRequest() cannot be called twice.');
          request.done = true;

          while (context.requests.length > 0 && context.requests[0].done) {
            var otherRequest = context.requests.shift();
            setTimeout(otherRequest.callback, 0);
          }
        }

        var context = this.loadingContext;
        var request = {
          id: "pdfjs-font-loading-".concat(context.nextRequestId++),
          done: false,
          complete: completeRequest,
          callback: callback
        };
        context.requests.push(request);
        return request;
      }
    }, {
      key: "_prepareFontLoadEvent",
      value: function _prepareFontLoadEvent(rules, fonts, request) {
       

       

        var i, ii;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        var ctx = canvas.getContext('2d');
        var called = 0;

        function isFontReady(name, callback) {
          called++;

          if (called > 30) {
            (0, _util.warn)('Load test font never loaded.');
            callback();
            return;
          }

          ctx.font = '30px ' + name;
          ctx.fillText('.', 0, 20);
          var imageData = ctx.getImageData(0, 0, 1, 1);

          if (imageData.data[3] > 0) {
            callback();
            return;
          }

          setTimeout(isFontReady.bind(null, name, callback));
        }

        var loadTestFontId = "lt".concat(Date.now()).concat(this.loadTestFontId++);
        var data = this._loadTestFont;
        var COMMENT_OFFSET = 976;
        data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
        var CFF_CHECKSUM_OFFSET = 16;
        var XXXX_VALUE = 0x58585858;
        var checksum = int32(data, CFF_CHECKSUM_OFFSET);

        for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
        }

        if (i < loadTestFontId.length) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId + 'XXX', i) | 0;
        }

        data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
        var url = "url(data:font/opentype;base64,".concat(btoa(data), ");");
        var rule = "@font-face {font-family:\"".concat(loadTestFontId, "\";src:").concat(url, "}");
        this.insertRule(rule);
        var names = [];

        for (i = 0, ii = fonts.length; i < ii; i++) {
          names.push(fonts[i].loadedName);
        }

        names.push(loadTestFontId);
        var div = document.createElement('div');
        div.setAttribute('style', 'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;');

        for (i = 0, ii = names.length; i < ii; ++i) {
          var span = document.createElement('span');
          span.textContent = 'Hi';
          span.style.fontFamily = names[i];
          div.appendChild(span);
        }

        document.body.appendChild(div);
        isFontReady(loadTestFontId,);
      }
    }, {
      key: "isFontLoadingAPISupported",
      get: function get() {
        var supported = typeof document !== 'undefined' && !!document.fonts;

        if (supported && typeof navigator !== 'undefined') {
          var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

          if (m && m[1] < 63) {
            supported = false;
          }
        }

        return (0, _util.shadow)(this, 'isFontLoadingAPISupported', supported);
      }
    }, {
      key: "isSyncFontLoadingSupported",
      get: function get() {
        var supported = false;

        if (typeof navigator === 'undefined') {
          supported = true;
        } else {
          var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

          if (m && m[1] >= 14) {
            supported = true;
          }
        }

        return (0, _util.shadow)(this, 'isSyncFontLoadingSupported', supported);
      }
    }, {
      key: "_loadTestFont",
      get: function get() {
        var getLoadTestFont = function getLoadTestFont() {
          return atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA' + 'FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA' + 'ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA' + 'AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1' + 'AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD' + '6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM' + 'AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D' + 'IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA' + 'AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA' + 'AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB' + 'AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY' + 'AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA' + 'AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA' + 'AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC' + 'AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3' + 'Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj' + 'FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==');
        };

        return (0, _util.shadow)(this, '_loadTestFont', getLoadTestFont());
      }
    }]);

    return GenericFontLoader;
  }(BaseFontLoader);
}
var IsEvalSupportedCached = {
  get valu

};

var FontFaceObject =
/*#__PURE__*/
function () {
  function FontFaceObject(translatedData, _ref2) {
    var _ref2$isEvalSupported = _ref2.isEvalSupported,
        isEvalSupported = _ref2$isEvalSupported === void 0 ? true : _ref2$isEvalSupported,
        _ref2$disableFontFace = _ref2.disableFontFace,
        disableFontFace = _ref2$disableFontFace === void 0 ? false : _ref2$disableFontFace,
        _ref2$ignoreErrors = _ref2.ignoreErrors,
        ignoreErrors = _ref2$ignoreErrors === void 0 ? false : _ref2$ignoreErrors,
        _ref2$onUnsupportedFe = _ref2.onUnsupportedFeature,
        onUnsupportedFeature = _ref2$onUnsupportedFe === void 0 ? null : _ref2$onUnsupportedFe,
        _ref2$fontRegistry = _ref2.fontRegistry,
        fontRegistry = _ref2$fontRegistry === void 0 ? null : _ref2$fontRegistry;

    _classCallCheck(this, FontFaceObject);

    this.compiledGlyphs = Object.create(null);

    for (var i in translatedData) {
      this[i] = translatedData[i];
    }

    this.isEvalSupported = isEvalSupported !== false;
    this.disableFontFace = disableFontFace === true;
    this.ignoreErrors = ignoreErrors === true;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this.fontRegistry = fontRegistry;
  }

  _createClass(FontFaceObject, [{
    key: "createNativeFontFace",
    value: function createNativeFontFace() {
      if (!this.data || this.disableFontFace) {
        return null;
      }

      var nativeFontFace = new FontFace(this.loadedName, this.data, {});

      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this);
      }

      return nativeFontFace;
    }
  }, {
    key: "createFontFaceRule",
    value: function createFontFaceRule() {
      if (!this.data || this.disableFontFace) {
        return null;
      }

      var data = (0, _util.bytesToString)(new Uint8Array(this.data));
      var url = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(data), ");");
      var rule = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(url, "}");

      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this, url);
      }

      return rule;
    }
  }, {
    key: "getPathGenerator",
    value: function getPathGenerator(objs, character) {
      if (this.compiledGlyphs[character] !== undefined) {
        return this.compiledGlyphs[character];
      }

      var cmds, current;

      try {
        cmds = objs.get(this.loadedName + '_path_' + character);
      } catch (ex) {
        if (!this.ignoreErrors) {
          throw ex;
        }

        if (this._onUnsupportedFeature) {
          this._onUnsupportedFeature({
            featureId: _util.UNSUPPORTED_FEATURES.font
          });
        }

        (0, _util.warn)("getPathGenerator - ignoring character: \"".concat(ex, "\"."));
        return this.compiledGlyphs[character] = function (c, size) {};
      }

      if (this.isEvalSupported && IsEvalSupportedCached.value) {
        var args,
            js = '';

        for (var i = 0, ii = cmds.length; i < ii; i++) {
          current = cmds[i];

          if (current.args !== undefined) {
            args = current.args.join(',');
          } else {
            args = '';
          }

          js += 'c.' + current.cmd + '(' + args + ');\n';
        }

        return this.compiledGlyphs[character] = new Function('c', 'size', js);
      }

      return this.compiledGlyphs[character] = function (c, size) {
        for (var _i = 0, _ii = cmds.length; _i < _ii; _i++) {
          current = cmds[_i];

          if (current.cmd === 'scale') {
            current.args = [size, -size];
          }

          c[current.cmd].apply(c, current.args);
        }
      };
    }
  }]);

  return FontFaceObject;
}();

exports.FontFaceObject = FontFaceObject;

/***/ }),
/* 153 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var compatibilityParams = Object.create(null);
{
  var isNodeJS = __w_pdfjs_require__(4);

  var userAgent = typeof navigator !== 'undefined' && navigator.userAgent || '';
  var isIE = /Trident/.test(userAgent);
  var isIOSChrome = /CriOS/.test(userAgent);

  )();

  (function checkFontFaceAndImage() {
    if (isNodeJS()) {
      compatibilityParams.disableFontFace = true;
      compatibilityParams.nativeImageDecoderSupport = 'none';
    }
  })();
}
exports.apiCompatibilityParams = Object.freeze(compatibilityParams);

/***/ }),
/* 154 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasGraphics = void 0;

var _util = __w_pdfjs_require__(1);

var _pattern_helper = __w_pdfjs_require__(155);

var MIN_FONT_SIZE = 16;
var MAX_FONT_SIZE = 100;
var MAX_GROUP_SIZE = 4096;
var MIN_WIDTH_FACTOR = 0.65;
var COMPILE_TYPE3_GLYPHS = true;
var MAX_SIZE_TO_COMPILE = 1000;
var FULL_CHUNK_HEIGHT = 16;
var IsLittleEndianCached = {
  get valu

};


var CachedCanvases = function CachedCanvasesClosure() {
 

  CachedCanvases.prototype = {
    getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
      var canvasEntry;

      if (this.cache[id] !== undefined) {
        canvasEntry = this.cache[id];
        this.canvasFactory.reset(canvasEntry, width, height);
        canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        canvasEntry = this.canvasFactory.create(width, height);
        this.cache[id] = canvasEntry;
      }

      if (trackTransform) {
        addContextCurrentTransform(canvasEntry.context);
      }

      return canvasEntry;
    },
    clear: function clear() {
      for (var id in this.cache) {
        var canvasEntry = this.cache[id];
        this.canvasFactory.destroy(canvasEntry);
        delete this.cache[id];
      }
    }
  };
  return CachedCanvases;
}();

function compileType3Glyph(imgData) {
  var POINT_TO_PROCESS_LIMIT = 1000;
  var width = imgData.width,
      height = imgData.height;
  var i,
      j,
      j0,
      width1 = width + 1;
  var points = new Uint8Array(width1 * (height + 1));
  var POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
  var lineSize = width + 7 & ~7,
      data0 = imgData.data;
  var data = new Uint8Array(lineSize * height),
      pos = 0,
      ii;

  for (i = 0, ii = data0.length; i < ii; i++) {
    var mask = 128,
        elem = data0[i];

    while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
    }
  }

  var count = 0;
  pos = 0;

  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }

  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }

    pos++;
  }

  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }

  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;

    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }

    var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);

    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);

      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }

      pos++;
    }

    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }

    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }

  pos = lineSize * (height - 1);
  j0 = i * width1;

  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }

  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }

    pos++;
  }

  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }

  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }

  var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  var outlines = [];

  for (i = 0; count && i <= height; i++) {
    var p = i * width1;
    var end = p + width;

    while (p < end && !points[p]) {
      p++;
    }

    if (p === end) {
      continue;
    }

    var coords = [p % width1, i];
    var type = points[p],
        p0 = p,
        pp;

    do {
      var step = steps[type];

      do {
        p += step;
      } while (!points[p]);

      pp = points[p];

      if (pp !== 5 && pp !== 10) {
        type = pp;
        points[p] = 0;
      } else {
        type = pp & 0x33 * type >> 4;
        points[p] &= type >> 2 | type << 2;
      }

      coords.push(p % width1);
      coords.push(p / width1 | 0);

      if (!points[p]) {
        --count;
      }
    } while (p0 !== p);

    outlines.push(coords);
    --i;
  }

  var drawOutline = function drawOutline(c) {
    c.save();
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.beginPath();

    for (var i = 0, ii = outlines.length; i < ii; i++) {
      var o = outlines[i];
      c.moveTo(o[0], o[1]);

      for (var j = 2, jj = o.length; j < jj; j += 2) {
        c.lineTo(o[j], o[j + 1]);
      }
    }

    c.fill();
    c.beginPath();
    c.restore();
  };

  return drawOutline;
}

var CanvasExtraState = function CanvasExtraStateClosure() {
  function CanvasExtraState() {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = _util.IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    this.leading = 0;
    this.x = 0;
    this.y = 0;
    this.lineX = 0;
    this.lineY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.textRise = 0;
    this.fillColor = '#000000';
    this.strokeColor = '#000000';
    this.patternFill = false;
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.resumeSMaskCtx = null;
  }

  CanvasExtraState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    }
  };
  return CanvasExtraState;
}();

var CanvasGraphics = function CanvasGraphicsClosure() {
  var EXECUTION_TIME = 15;
  var EXECUTION_STEPS = 10;

  function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState();
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.webGLContext = webGLContext;
    this.imageLayer = imageLayer;
    this.groupStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);

    if (canvasCtx) {
      addContextCurrentTransform(canvasCtx);
    }

    this._cachedGetSinglePixelWidth = null;
  }

  function putBinaryImageData(ctx, imgData) {
    if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
    }

    var height = imgData.height,
        width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0,
        destPos;
    var src = imgData.data;
    var dest = chunkImgData.data;
    var i, j, thisChunkHeight, elemsInThisChunk;

    if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
      var srcLength = src.byteLength;
      var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = width + 7 >> 3;
      var white = 0xFFFFFFFF;
      var black = IsLittleEndianCached.value ? 0xFF000000 : 0x000000FF;

      for (i = 0; i < totalChunks; i++) {
        thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
        destPos = 0;

        for (j = 0; j < thisChunkHeight; j++) {
          var srcDiff = srcLength - srcPos;
          var k = 0;
          var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
          var kEndUnrolled = kEnd & ~7;
          var mask = 0;
          var srcByte = 0;

          for (; k < kEndUnrolled; k += 8) {
            srcByte = src[srcPos++];
            dest32[destPos++] = srcByte & 128 ? white : black;
            dest32[destPos++] = srcByte & 64 ? white : black;
            dest32[destPos++] = srcByte & 32 ? white : black;
            dest32[destPos++] = srcByte & 16 ? white : black;
            dest32[destPos++] = srcByte & 8 ? white : black;
            dest32[destPos++] = srcByte & 4 ? white : black;
            dest32[destPos++] = srcByte & 2 ? white : black;
            dest32[destPos++] = srcByte & 1 ? white : black;
          }

          for (; k < kEnd; k++) {
            if (mask === 0) {
              srcByte = src[srcPos++];
              mask = 128;
            }

            dest32[destPos++] = srcByte & mask ? white : black;
            mask >>= 1;
          }
        }

        while (destPos < dest32DataLength) {
          dest32[destPos++] = 0;
        }

        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;

      for (i = 0; i < fullChunks; i++) {
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        srcPos += elemsInThisChunk;
        ctx.putImageData(chunkImgData, 0, j);
        j += FULL_CHUNK_HEIGHT;
      }

      if (i < totalChunks) {
        elemsInThisChunk = width * partialChunkHeight * 4;
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        ctx.putImageData(chunkImgData, 0, j);
      }
    } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;

      for (i = 0; i < totalChunks; i++) {
        if (i >= fullChunks) {
          thisChunkHeight = partialChunkHeight;
          elemsInThisChunk = width * thisChunkHeight;
        }

        destPos = 0;

        for (j = elemsInThisChunk; j--;) {
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = 255;
        }

        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else {
      throw new Error("bad image kind: ".concat(imgData.kind));
    }
  }

 

 

  function resetCtxToDefault(ctx) {
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#000000';
    ctx.fillRule = 'nonzero';
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 10;
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = '10px sans-serif';

    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    }
  }

 

 

 

 

  function composeSMask(ctx, smask, layerCtx, webGLContext) {
    var mask = smask.canvas;
    var maskCtx = smask.context;
    ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
    var backdrop = smask.backdrop || null;

    if (!smask.transferMap && webGLContext.isEnabled) {
      var composed = webGLContext.composeSMask({
        layer: layerCtx.canvas,
        mask: mask,
        properties: {
          subtype: smask.subtype,
          backdrop: backdrop
        }
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
    }

    genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
    ctx.drawImage(mask, 0, 0);
  }

  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
  var NORMAL_CLIP = {};
  var EO_CLIP = {};
  CanvasGraphics.prototype = {
    beginDrawing: function beginDrawing(_ref) {
      var transform = _ref.transform,
          viewport = _ref.viewport,
          _ref$transparency = _ref.transparency,
          transparency = _ref$transparency === void 0 ? false : _ref$transparency,
          _ref$background = _ref.background,
          background = _ref$background === void 0 ? null : _ref$background;
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.ctx.save();
      this.ctx.fillStyle = background || 'rgb(255, 255, 255)';
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();

      if (transparency) {
        var transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
        this.compositeCtx = this.ctx;
        this.transparentCanvas = transparentCanvas.canvas;
        this.ctx = transparentCanvas.context;
        this.ctx.save();
        this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
      }

      this.ctx.save();
      resetCtxToDefault(this.ctx);

      if (transform) {
        this.ctx.transform.apply(this.ctx, transform);
      }

      this.ctx.transform.apply(this.ctx, viewport.transform);
      this.baseTransform = this.ctx.mozCurrentTransform.slice();

      if (this.imageLayer) {
        this.imageLayer.beginLayout();
      }
    },
    executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;

      if (argsArrayLen === i) {
        return i;
      }

      var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;
      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;

      while (true) {
        if (stepper !== undefined && i === stepper.nextBreakPoint) {
          stepper.breakIt(i, continueCallback);
          return i;
        }

        fnId = fnArray[i];

        if (fnId !== _util.OPS.dependency) {
          this[fnId].apply(this, argsArray[i]);
        } else {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = argsArray[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var depObjId = _step.value;
              var objsPool = depObjId.startsWith('g_') ? commonObjs : objs;

              if (!objsPool.has(depObjId)) {
                objsPool.get(depObjId, continueCallback);
                return i;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        i++;

        if (i === argsArrayLen) {
          return i;
        }

        if (chunkOperations && ++steps > EXECUTION_STEPS) {
          if (Date.now() > endTime) {
            continueCallback();
            return i;
          }

          steps = 0;
        }
      }
    },
    endDrawing: function CanvasGraphics_endDrawing() {
      if (this.current.activeSMask !== null) {
        this.endSMaskGroup();
      }

      this.ctx.restore();

      if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.transparentCanvas = null;
      }

      this.cachedCanvases.clear();
      this.webGLContext.clear();

      if (this.imageLayer) {
        this.imageLayer.endLayout();
      }
    },
    setLineWidth:,
    setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
    },
    setDash:,
    setRenderingIntent: function setRenderingIntent(intent) {},
    setFlatness: function setFlatness(flatness) {},
    setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];

        switch (key) {
          case 'LW':
            this.setLineWidth(value);
            break;

          case 'LC':
            this.setLineCap(value);
            break;

          case 'LJ':
            this.setLineJoin(value);
            break;

          case 'ML':
            this.setMiterLimit(value);
            break;

          case 'D':
            this.setDash(value[0], value[1]);
            break;

          case 'RI':
            this.setRenderingIntent(value);
            break;

          case 'FL':
            this.setFlatness(value);
            break;

          case 'Font':
            this.setFont(value[0], value[1]);
            break;

          case 'CA':
            this.current.strokeAlpha = state[1];
            break;

          case 'ca':
            this.current.fillAlpha = state[1];
            this.ctx.globalAlpha = state[1];
            break;

          case 'BM':
            this.ctx.globalCompositeOperation = value;
            break;

          case 'SMask':
            if (this.current.activeSMask) {
              if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                this.suspendSMaskGroup();
              } else {
                this.endSMaskGroup();
              }
            }

            this.current.activeSMask = value ? this.tempSMask : null;

            if (this.current.activeSMask) {
              this.beginSMaskGroup();
            }

            this.tempSMask = null;
            break;
        }
      }
    },
    beginSMaskGroup:,
    suspendSMaskGroup:,
    resumeSMaskGroup:,
    endSMaskGroup:,
    save:,
    restore:,
    transform:,
    constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x,
          y = current.y;

      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
        switch (ops[i] | 0) {
          case _util.OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];

            if (width === 0) {
              width = this.getSinglePixelWidth();
            }

            if (height === 0) {
              height = this.getSinglePixelWidth();
            }

            var xw = x + width;
            var yh = y + height;
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(xw, y);
            this.ctx.lineTo(xw, yh);
            this.ctx.lineTo(x, yh);
            this.ctx.lineTo(x, y);
            this.ctx.closePath();
            break;

          case _util.OPS.moveTo:
            x = args[j++];
            y = args[j++];
            ctx.moveTo(x, y);
            break;

          case _util.OPS.lineTo:
            x = args[j++];
            y = args[j++];
            ctx.lineTo(x, y);
            break;

          case _util.OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
            j += 6;
            break;

          case _util.OPS.curveTo2:
            ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
            x = args[j + 2];
            y = args[j + 3];
            j += 4;
            break;

          case _util.OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
            j += 4;
            break;

          case _util.OPS.closePath:
            ctx.closePath();
            break;
        }
      }

      current.setCurrentPoint(x, y);
    },
    closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
    },
    stroke:,
    closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },
    fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;

      if (isPatternFill) {
        ctx.save();

        if (this.baseTransform) {
          ctx.setTransform.apply(ctx, this.baseTransform);
        }

        ctx.fillStyle = fillColor.getPattern(ctx, this);
        needRestore = true;
      }

      if (this.pendingEOFill) {
        ctx.fill('evenodd');
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }

      if (needRestore) {
        ctx.restore();
      }

      if (consumePath) {
        this.consumePath();
      }
    },
    eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
    },
    fillStroke:,
    eoFillStroke:,
    closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },
    closeEOFillStroke:,
    endPath: function CanvasGraphics_endPath() {
      this.consumePath();
    },
    clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
    },
    eoClip:,
    beginText:,
    endText:,
    setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
    },
    setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
    },
    setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },
    setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },
    setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;

      if (!fontObj) {
        throw new Error("Can't find font for ".concat(fontRefName));
      }

      current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;

      if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
        (0, _util.warn)('Invalid font matrix for font ' + fontRefName);
      }

      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }

      this.current.font = fontObj;
      this.current.fontSize = size;

      if (fontObj.isType3Font) {
        return;
      }

      var name = fontObj.loadedName || 'sans-serif';
      var bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
      var italic = fontObj.italic ? 'italic' : 'normal';
      var typeface = "\"".concat(name, "\", ").concat(fontObj.fallbackName);
      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
      this.current.fontSizeScale = size / browserFontSize;
      this.ctx.font = "".concat(italic, " ").concat(bold, " ").concat(browserFontSize, "px ").concat(typeface);
    },
    setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
    },
    setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
    },
    moveText:,
    setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },
    setTextMatrix:,
    nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },
    paintChar: function paintChar(character, x, y, patternTransform) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
      var patternFill = current.patternFill && font.data;
      var addToPath;

      if (font.disableFontFace || isAddToPathSet || patternFill) {
        addToPath = font.getPathGenerator(this.commonObjs, character);
      }

      if (font.disableFontFace || patternFill) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        addToPath(ctx, fontSize);

        if (patternTransform) {
          ctx.setTransform.apply(ctx, patternTransform);
        }

        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fill();
        }

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.stroke();
        }

        ctx.restore();
      } else {
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fillText(character, x, y);
        }

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.strokeText(character, x, y);
        }
      }

      if (isAddToPathSet) {
        var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
        paths.push({
          transform: ctx.mozCurrentTransform,
          x: x,
          y: y,
          fontSize: fontSize,
          addToPath: addToPath
        });
      }
    },

    get isFontSubpixelAAEnabled() {
      var _this$cachedCanvases$ = this.cachedCanvases.getCanvas('isFontSubpixelAAEnabled', 10, 10),
          ctx = _this$cachedCanvases$.context;

      ctx.scale(1.5, 1);
      ctx.fillText('I', 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;

      for (var i = 3; i < data.length; i += 4) {
        if (data[i] > 0 && data[i] < 255) {
          enabled = true;
          break;
        }
      }

      return (0, _util.shadow)(this, 'isFontSubpixelAAEnabled', enabled);
    },

    showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;

      if (font.isType3Font) {
        return this.showType3Text(glyphs);
      }

      var fontSize = current.fontSize;

      if (fontSize === 0) {
        return undefined;
      }

      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
      ctx.save();
      var patternTransform;

      if (current.patternFill) {
        ctx.save();
        var pattern = current.fillColor.getPattern(ctx, this);
        patternTransform = ctx.mozCurrentTransform;
        ctx.restore();
        ctx.fillStyle = pattern;
      }

      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);

      if (fontDirection > 0) {
        ctx.scale(textHScale, -1);
      } else {
        ctx.scale(textHScale, 1);
      }

      var lineWidth = current.lineWidth;
      var scale = current.textMatrixScale;

      if (scale === 0 || lineWidth === 0) {
        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          this._cachedGetSinglePixelWidth = null;
          lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
        }
      } else {
        lineWidth /= scale;
      }

      if (fontSizeScale !== 1.0) {
        ctx.scale(fontSizeScale, fontSizeScale);
        lineWidth /= fontSizeScale;
      }

      ctx.lineWidth = lineWidth;
      var x = 0,
          i;

      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];

        if ((0, _util.isNum)(glyph)) {
          x += spacingDir * glyph * fontSize / 1000;
          continue;
        }

        var restoreNeeded = false;
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var character = glyph.fontChar;
        var accent = glyph.accent;
        var scaledX, scaledY, scaledAccentX, scaledAccentY;
        var width = glyph.width;

        if (vertical) {
          var vmetric, vx, vy;
          vmetric = glyph.vmetric || defaultVMetrics;
          vx = glyph.vmetric ? vmetric[1] : width * 0.5;
          vx = -vx * widthAdvanceScale;
          vy = vmetric[2] * widthAdvanceScale;
          width = vmetric ? -vmetric[0] : width;
          scaledX = vx / fontSizeScale;
          scaledY = (x + vy) / fontSizeScale;
        } else {
          scaledX = x / fontSizeScale;
          scaledY = 0;
        }

        if (font.remeasure && width > 0) {
          var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;

          if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
            var characterScaleX = width / measuredWidth;
            restoreNeeded = true;
            ctx.save();
            ctx.scale(characterScaleX, 1);
            scaledX /= characterScaleX;
          } else if (width !== measuredWidth) {
            scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
          }
        }

        if (glyph.isInFont || font.missingFile) {
          if (simpleFillText && !accent) {
            ctx.fillText(character, scaledX, scaledY);
          } else {
            this.paintChar(character, scaledX, scaledY, patternTransform);

            if (accent) {
              scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
              scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
              this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
            }
          }
        }

        var charWidth = width * widthAdvanceScale + spacing * fontDirection;
        x += charWidth;

        if (restoreNeeded) {
          ctx.restore();
        }
      }

      if (vertical) {
        current.y -= x * textHScale;
      } else {
        current.x += x * textHScale;
      }

      ctx.restore();
    },
    showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;

      if (isTextInvisible || fontSize === 0) {
        return;
      }

      this._cachedGetSinglePixelWidth = null;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);
      ctx.scale(textHScale, fontDirection);

      for (i = 0; i < glyphsLength; ++i) {
        glyph = glyphs[i];

        if ((0, _util.isNum)(glyph)) {
          spacingLength = spacingDir * glyph * fontSize / 1000;
          this.ctx.translate(spacingLength, 0);
          current.x += spacingLength * textHScale;
          continue;
        }

        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var operatorList = font.charProcOperatorList[glyph.operatorListId];

        if (!operatorList) {
          (0, _util.warn)("Type3 character \"".concat(glyph.operatorListId, "\" is not available."));
          continue;
        }

        this.processingType3 = glyph;
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform.apply(ctx, fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();

        var transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);

        width = transformed[0] * fontSize + spacing;
        ctx.translate(width, 0);
        current.x += width * textHScale;
      }

      ctx.restore();
      this.processingType3 = null;
    },
    setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
    setCharWidthAndBounds:,
    getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var _this = this;

      var pattern;

      if (IR[0] === 'TilingPattern') {
        var color = IR[1];
        var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
        var canvasGraphicsFactory = {
          createCanvasGraphics:
        };
        pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
      } else {
        pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
      }

      return pattern;
    },
    setStrokeColorN:,
    setFillColorN:,
    setStrokeRGBColor:,
    setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = _util.Util.makeCssRgb(r, g, b);

      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
    },
    shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      var ctx = this.ctx;
      this.save();
      var pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);
      var inv = ctx.mozCurrentTransformInverse;

      if (inv) {
        var canvas = ctx.canvas;
        var width = canvas.width;
        var height = canvas.height;

        var bl = _util.Util.applyTransform([0, 0], inv);

        var br = _util.Util.applyTransform([0, height], inv);

        var ul = _util.Util.applyTransform([width, 0], inv);

        var ur = _util.Util.applyTransform([width, height], inv);

        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
        this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }

      this.restore();
    },
    beginInlineImage: function CanvasGraphics_beginInlineImage() {
      (0, _util.unreachable)('Should not call beginInlineImage');
    },
    beginImageData: function CanvasGraphics_beginImageData() {
      (0, _util.unreachable)('Should not call beginImageData');
    },
    paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
      this.save();
      this.baseTransformStack.push(this.baseTransform);

      if (Array.isArray(matrix) && matrix.length === 6) {
        this.transform.apply(this, matrix);
      }

      this.baseTransform = this.ctx.mozCurrentTransform;

      if (bbox) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];
        this.ctx.rect(bbox[0], bbox[1], width, height);
        this.clip();
        this.endPath();
      }
    },
    paintFormXObjectEnd:,
    beginGroup: function CanvasGraphics_beginGroup(group) {
      this.save();
      var currentCtx = this.ctx;

      if (!group.isolated) {
        (0, _util.info)('TODO: Support non-isolated groups.');
      }

      if (group.knockout) {
        (0, _util.warn)('Knockout groups not supported.');
      }

      var currentTransform = currentCtx.mozCurrentTransform;

      if (group.matrix) {
        currentCtx.transform.apply(currentCtx, group.matrix);
      }

      if (!group.bbox) {
        throw new Error('Bounding box is required.');
      }

      var bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);

      var canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
      bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1,
          scaleY = 1;

      if (drawnWidth > MAX_GROUP_SIZE) {
        scaleX = drawnWidth / MAX_GROUP_SIZE;
        drawnWidth = MAX_GROUP_SIZE;
      }

      if (drawnHeight > MAX_GROUP_SIZE) {
        scaleY = drawnHeight / MAX_GROUP_SIZE;
        drawnHeight = MAX_GROUP_SIZE;
      }

      var cacheId = 'groupAt' + this.groupLevel;

      if (group.smask) {
        cacheId += '_smask_' + this.smaskCounter++ % 2;
      }

      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);

      if (group.smask) {
        this.smaskStack.push({
          canvas: scratchCanvas.canvas,
          context: groupCtx,
          offsetX: offsetX,
          offsetY: offsetY,
          scaleX: scaleX,
          scaleY: scaleY,
          subtype: group.smask.subtype,
          backdrop: group.smask.backdrop,
          transferMap: group.smask.transferMap || null,
          startTransformInverse: null
        });
      } else {
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
      }

      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([['BM', 'source-over'], ['ca', 1], ['CA', 1]]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
      this.current.activeSMask = null;
    },
    endGroup:,
    beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();

      if (this.baseTransform) {
        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
    },
    endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
    },
    beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
      this.save();
      resetCtxToDefault(this.ctx);
      this.current = new CanvasExtraState();

      if (Array.isArray(rect) && rect.length === 4) {
        var width = rect[2] - rect[0];
        var height = rect[3] - rect[1];
        this.ctx.rect(rect[0], rect[1], width, height);
        this.clip();
        this.endPath();
      }

      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
    },
    endAnnotation:,
    paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
      var domImage = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

      if (!domImage) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }

      this.save();
      var ctx = this.ctx;
      ctx.scale(1 / w, -1 / h);
      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);

      if (this.imageLayer) {
        var currentTransform = ctx.mozCurrentTransformInverse;
        var position = this.getCanvasPosition(0, 0);
        this.imageLayer.appendImage({
          objId: objId,
          left: position[0],
          top: position[1],
          width: w / currentTransform[0],
          height: h / currentTransform[3]
        });
      }

      this.restore();
    },
    paintImageMaskXObject:,
    paintImageMaskXObjectRepeat:,
    paintImageMaskXObjectGroup:,
    paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

      if (!imgData) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }

      this.paintInlineImageXObject(imgData);
    },
    paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
      var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

      if (!imgData) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }

      var width = imgData.width;
      var height = imgData.height;
      var map = [];

      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        map.push({
          transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
          x: 0,
          y: 0,
          w: width,
          h: height
        });
      }

      this.paintInlineImageXObjectGroup(imgData, map);
    },
    paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;
      this.save();
      ctx.scale(1 / width, -1 / height);
      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0],
          b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2],
          d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
      var imgToPaint, tmpCanvas;

      if (typeof HTMLElement === 'function' && imgData instanceof HTMLElement || !imgData.data) {
        imgToPaint = imgData;
      } else {
        tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
        var tmpCtx = tmpCanvas.context;
        putBinaryImageData(tmpCtx, imgData);
        imgToPaint = tmpCanvas.canvas;
      }

      var paintWidth = width,
          paintHeight = height;
      var tmpCanvasId = 'prescale1';

      while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
        var newWidth = paintWidth,
            newHeight = paintHeight;

        if (widthScale > 2 && paintWidth > 1) {
          newWidth = Math.ceil(paintWidth / 2);
          widthScale /= paintWidth / newWidth;
        }

        if (heightScale > 2 && paintHeight > 1) {
          newHeight = Math.ceil(paintHeight / 2);
          heightScale /= paintHeight / newHeight;
        }

        tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
        tmpCtx = tmpCanvas.context;
        tmpCtx.clearRect(0, 0, newWidth, newHeight);
        tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
        imgToPaint = tmpCanvas.canvas;
        paintWidth = newWidth;
        paintHeight = newHeight;
        tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
      }

      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);

      if (this.imageLayer) {
        var position = this.getCanvasPosition(0, -height);
        this.imageLayer.appendImage({
          imgData: imgData,
          left: position[0],
          top: position[1],
          width: width / currentTransform[0],
          height: height / currentTransform[3]
        });
      }

      this.restore();
    },
    paintInlineImageXObjectGroup:,
    paintSolidColorImageMask:,
    paintXObject: function CanvasGraphics_paintXObject() {
      (0, _util.warn)('Unsupported \'paintXObject\' command.');
    },
    markPoint: function CanvasGraphics_markPoint(tag) {},
    markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
    beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {},
    beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {},
    endMarkedContent: function CanvasGraphics_endMarkedContent() {},
    beginCompat: function CanvasGraphics_beginCompat() {},
    endCompat: function CanvasGraphics_endCompat() {},
    consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;

      if (this.pendingClip) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip('evenodd');
        } else {
          ctx.clip();
        }

        this.pendingClip = null;
      }

      ctx.beginPath();
    },
    getSinglePixelWidth: function getSinglePixelWidth(scale) {
      if (this._cachedGetSinglePixelWidth === null) {
        var inverse = this.ctx.mozCurrentTransformInverse;
        this._cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
      }

      return this._cachedGetSinglePixelWidth;
    },
    getCanvasPosition:
  };

  for (var op in _util.OPS) {
    CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
  }

  return CanvasGraphics;
}();

exports.CanvasGraphics = CanvasGraphics;

/***/ }),
/* 155 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShadingPatternFromIR = getShadingPatternFromIR;
exports.TilingPattern = void 0;

var _util = __w_pdfjs_require__(1);

var ShadingIRs = {};
ShadingIRs.RadialAxial = {
  fromIR:
};

var createMeshCanvas = function createMeshCanvasClosure() {
 

  function drawFigure(data, figure, context) {
    var ps = figure.coords;
    var cs = figure.colors;
    var i, ii;

    switch (figure.type) {
      case 'lattice':
        var verticesPerRow = figure.verticesPerRow;
        var rows = Math.floor(ps.length / verticesPerRow) - 1;
        var cols = verticesPerRow - 1;

        for (i = 0; i < rows; i++) {
          var q = i * verticesPerRow;

          for (var j = 0; j < cols; j++, q++) {
            drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
            drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
          }
        }

        break;

      case 'triangles':
        for (i = 0, ii = ps.length; i < ii; i += 3) {
          drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
        }

        break;

      default:
        throw new Error('illegal figure');
    }
  }

  function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
    var EXPECTED_SCALE = 1.1;
    var MAX_PATTERN_SIZE = 3000;
    var BORDER_SIZE = 2;
    var offsetX = Math.floor(bounds[0]);
    var offsetY = Math.floor(bounds[1]);
    var boundsWidth = Math.ceil(bounds[2]) - offsetX;
    var boundsHeight = Math.ceil(bounds[3]) - offsetY;
    var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var scaleX = boundsWidth / width;
    var scaleY = boundsHeight / height;
    var context = {
      coords: coords,
      colors: colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    var paddedWidth = width + BORDER_SIZE * 2;
    var paddedHeight = height + BORDER_SIZE * 2;
    var canvas, tmpCanvas, i, ii;

    if (webGLContext.isEnabled) {
      canvas = webGLContext.drawFigures({
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        figures: figures,
        context: context
      });
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    } else {
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      var tmpCtx = tmpCanvas.context;
      var data = tmpCtx.createImageData(width, height);

      if (backgroundColor) {
        var bytes = data.data;

        for (i = 0, ii = bytes.length; i < ii; i += 4) {
          bytes[i] = backgroundColor[0];
          bytes[i + 1] = backgroundColor[1];
          bytes[i + 2] = backgroundColor[2];
          bytes[i + 3] = 255;
        }
      }

      for (i = 0; i < figures.length; i++) {
        drawFigure(data, figures[i], context);
      }

      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    }

    return {
      canvas: canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  return createMeshCanvas;
}();

ShadingIRs.Mesh = {
  fromIR: function Mesh_fromIR(raw) {
    var coords = raw[2];
    var colors = raw[3];
    var figures = raw[4];
    var bounds = raw[5];
    var matrix = raw[6];
    var background = raw[8];
    return {
      type: 'Pattern',
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
        var scale;

        if (shadingFill) {
          scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
        } else {
          scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);

          if (matrix) {
            var matrixScale = _util.Util.singularValueDecompose2dScale(matrix);

            scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
          }
        }

        var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);

        if (!shadingFill) {
          ctx.setTransform.apply(ctx, owner.baseTransform);

          if (matrix) {
            ctx.transform.apply(ctx, matrix);
          }
        }

        ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
        ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
        return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
      }
    };
  }
};
ShadingIRs.Dummy = {
  fromIR:
};

function getShadingPatternFromIR(raw) {
  var shadingIR = ShadingIRs[raw[0]];

  if (!shadingIR) {
    throw new Error("Unknown IR type: ".concat(raw[0]));
  }

  return shadingIR.fromIR(raw);
}

var TilingPattern = function TilingPatternClosure() {
  var PaintType = {
    COLORED: 1,
    UNCOLORED: 2
  };
  var MAX_PATTERN_SIZE = 3000;

 

  TilingPattern.prototype = {
    createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;
      (0, _util.info)('TilingType: ' + tilingType);
      var x0 = bbox[0],
          y0 = bbox[1],
          x1 = bbox[2],
          y1 = bbox[3];

      var matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);

      var curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);

      var combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
      var dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
      var dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern', dimx.size, dimy.size, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;
      this.setFillAndStrokeStyleToContext(graphics, paintType, color);
      graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
      graphics.transform(1, 0, 0, 1, -x0, -y0);
      this.clipBbox(graphics, bbox, x0, y0, x1, y1);
      graphics.executeOperatorList(operatorList);
      this.ctx.transform(1, 0, 0, 1, x0, y0);
      this.ctx.scale(1 / dimx.scale, 1 / dimy.scale);
      return tmpCanvas.canvas;
    },
    getSizeAndScale: function TilingPattern_getSizeAndScale(step, realOutputSize, scale) {
      step = Math.abs(step);
      var maxSize = Math.max(MAX_PATTERN_SIZE, realOutputSize);
      var size = Math.ceil(step * scale);

      if (size >= maxSize) {
        size = maxSize;
      } else {
        scale = size / step;
      }

      return {
        scale: scale,
        size: size
      };
    },
    clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (Array.isArray(bbox) && bbox.length === 4) {
        var bboxWidth = x1 - x0;
        var bboxHeight = y1 - y0;
        graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
        graphics.clip();
        graphics.endPath();
      }
    },
    setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
      var context = graphics.ctx,
          current = graphics.current;

      switch (paintType) {
        case PaintType.COLORED:
          var ctx = this.ctx;
          context.fillStyle = ctx.fillStyle;
          context.strokeStyle = ctx.strokeStyle;
          current.fillColor = ctx.fillStyle;
          current.strokeColor = ctx.strokeStyle;
          break;

        case PaintType.UNCOLORED:
          var cssColor = _util.Util.makeCssRgb(color[0], color[1], color[2]);

          context.fillStyle = cssColor;
          context.strokeStyle = cssColor;
          current.fillColor = cssColor;
          current.strokeColor = cssColor;
          break;

        default:
          throw new _util.FormatError("Unsupported paint type: ".concat(paintType));
      }
    },
    getPattern: function TilingPattern_getPattern(ctx, owner) {
      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      var temporaryPatternCanvas = this.createPatternCanvas(owner);
      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
    }
  };
  return TilingPattern;
}();

exports.TilingPattern = TilingPattern;

/***/ }),
/* 156 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalWorkerOptions = void 0;
var GlobalWorkerOptions = Object.create(null);
exports.GlobalWorkerOptions = GlobalWorkerOptions;
GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? '' : GlobalWorkerOptions.workerSrc;

/***/ }),
/* 157 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageHandler = MessageHandler;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function _resolveCall() {
  _resolveCall = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(fn, args) {
    var thisArg,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            thisArg = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;

            if (fn) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", undefined);

          case 3:
            return _context.abrupt("return", fn.apply(thisArg, args));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _resolveCall.apply(this, arguments);
}

function wrapReason(reason) {
  if (_typeof(reason) !== 'object') {
    return reason;
  }

  switch (reason.name) {
    case 'AbortException':
      return new _util.AbortException(reason.message);

    case 'MissingPDFException':
      return new _util.MissingPDFException(reason.message);

    case 'UnexpectedResponseException':
      return new _util.UnexpectedResponseException(reason.message, reason.status);

    default:
      return new _util.UnknownErrorException(reason.message, reason.details);
  }
}

function makeReasonSerializable(reason) {
  if (!(reason instanceof Error) || reason instanceof _util.AbortException || reason instanceof _util.MissingPDFException || reason instanceof _util.UnexpectedResponseException || reason instanceof _util.UnknownErrorException) {
    return reason;
  }

  return new _util.UnknownErrorException(reason.message, reason.toString());
}

function resolveOrReject(capability, success, reason) {
  if (success) {
    capability.resolve();
  } else {
    capability.reject(reason);
  }
}

function finalize(promise) {
  return Promise.resolve(promise)["catch"](function () {});
}

function MessageHandler(sourceName, targetName, comObj) {
  var _this = this;

  this.sourceName = sourceName;
  this.targetName = targetName;
  this.comObj = comObj;
  this.callbackId = 1;
  this.streamId = 1;
  this.postMessageTransfers = true;
  this.streamSinks = Object.create(null);
  this.streamControllers = Object.create(null);
  var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
  var ah = this.actionHandler = Object.create(null);

  this._onComObjOnMessage = function (event) {
    var data = event.data;

    if (data.targetName !== _this.sourceName) {
      return;
    }

    if (data.stream) {
      _this._processStreamMessage(data);
    } else if (data.isReply) {
      var callbackId = data.callbackId;

      if (data.callbackId in callbacksCapabilities) {
        var callback = callbacksCapabilities[callbackId];
        delete callbacksCapabilities[callbackId];

        if ('error' in data) {
          callback.reject(wrapReason(data.error));
        } else {
          callback.resolve(data.data);
        }
      } else {
        throw new Error("Cannot resolve callback ".concat(callbackId));
      }
    } else if (data.action in ah) {
      var action = ah[data.action];

      if (data.callbackId) {
        var _sourceName = _this.sourceName;
        var _targetName = data.sourceName;
        Promise.resolve().then).then,);
      } else if (data.streamId) {
        _this._createStreamSink(data);
      } else {
        action[0].call(action[1], data.data);
      }
    } else {
      throw new Error("Unknown action from worker: ".concat(data.action));
    }
  };

  comObj.addEventListener('message', this._onComObjOnMessage);
}

MessageHandler.prototype = {
  on: function on(actionName, handler, scope) {
    var ah = this.actionHandler;

    if (ah[actionName]) {
      throw new Error("There is already an actionName called \"".concat(actionName, "\""));
    }

    ah[actionName] = [handler, scope];
  },
  send:,
  sendWithPromise:,
  sendWithStream:,
  _createStreamSink: function _createStreamSink(data) {
    var _this3 = this;

    var self = this;
    var action = this.actionHandler[data.action];
    var streamId = data.streamId;
    var desiredSize = data.desiredSize;
    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var capability = (0, _util.createPromiseCapability)();

    var sendStreamRequest =;

    var streamSink = {
      enqueue: function enqueue(chunk) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var transfers = arguments.length > 2 ? arguments[2] : undefined;

        if (this.isCancelled) {
          return;
        }

        var lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;

        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = (0, _util.createPromiseCapability)();
          this.ready = this.sinkCapability.promise;
        }

        sendStreamRequest({
          stream: 'enqueue',
          chunk: chunk,
          transfers: transfers
        });
      },
      close: function close() {
        if (this.isCancelled) {
          return;
        }

        this.isCancelled = true;
        sendStreamRequest({
          stream: 'close'
        });
        delete self.streamSinks[streamId];
      },
      error: function error(reason) {
        if (this.isCancelled) {
          return;
        }

        this.isCancelled = true;
        sendStreamRequest({
          stream: 'error',
          reason: reason
        });
      },
      sinkCapability: capability,
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: desiredSize,
      ready: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    resolveCall(action[0], [data.data, streamSink], action[1]).then(function () {
      sendStreamRequest({
        stream: 'start_complete',
        success: true
      });
    }, function (reason) {
      sendStreamRequest({
        stream: 'start_complete',
        success: false,
        reason: reason
      });
    });
  },
  _processStreamMessage: function _processStreamMessage(data) {
    var _this4 = this;

    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var streamId = data.streamId;

    var sendStreamResponse =;

    var deleteStreamController =;

    switch (data.stream) {
      case 'start_complete':
        resolveOrReject(this.streamControllers[data.streamId].startCall, data.success, wrapReason(data.reason));
        break;

      case 'pull_complete':
        resolveOrReject(this.streamControllers[data.streamId].pullCall, data.success, wrapReason(data.reason));
        break;

      case 'pull':
        if (!this.streamSinks[data.streamId]) {
          sendStreamResponse({
            stream: 'pull_complete',
            success: true
          });
          break;
        }

        if (this.streamSinks[data.streamId].desiredSize <= 0 && data.desiredSize > 0) {
          this.streamSinks[data.streamId].sinkCapability.resolve();
        }

        this.streamSinks[data.streamId].desiredSize = data.desiredSize;
        resolveCall(this.streamSinks[data.streamId].onPull).then(function () {
          sendStreamResponse({
            stream: 'pull_complete',
            success: true
          });
        }, function (reason) {
          sendStreamResponse({
            stream: 'pull_complete',
            success: false,
            reason: reason
          });
        });
        break;

      case 'enqueue':
        (0, _util.assert)(this.streamControllers[data.streamId], 'enqueue should have stream controller');

        if (!this.streamControllers[data.streamId].isClosed) {
          this.streamControllers[data.streamId].controller.enqueue(data.chunk);
        }

        break;

      case 'close':
        (0, _util.assert)(this.streamControllers[data.streamId], 'close should have stream controller');

        if (this.streamControllers[data.streamId].isClosed) {
          break;
        }

        this.streamControllers[data.streamId].isClosed = true;
        this.streamControllers[data.streamId].controller.close();
        deleteStreamController();
        break;

      case 'error':
        (0, _util.assert)(this.streamControllers[data.streamId], 'error should have stream controller');
        this.streamControllers[data.streamId].controller.error(wrapReason(data.reason));
        deleteStreamController();
        break;

      case 'cancel_complete':
        resolveOrReject(this.streamControllers[data.streamId].cancelCall, data.success, wrapReason(data.reason));
        deleteStreamController();
        break;

      case 'cancel':
        if (!this.streamSinks[data.streamId]) {
          break;
        }

        resolveCall(this.streamSinks[data.streamId].onCancel, [wrapReason(data.reason)]).then,);
        this.streamSinks[data.streamId].sinkCapability.reject(wrapReason(data.reason));
        this.streamSinks[data.streamId].isCancelled = true;
        delete this.streamSinks[data.streamId];
        break;

      default:
        throw new Error('Unexpected stream case');
    }
  },
  postMessage: function postMessage(message, transfers) {
    if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
    } else {
      this.comObj.postMessage(message);
    }
  },
  destroy:
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Metadata = void 0;

var _util = __w_pdfjs_require__(1);

var _xml_parser = __w_pdfjs_require__(159);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Metadata =
/*#__PURE__*/
function () {
  function Metadata(data) {
    _classCallCheck(this, Metadata);

    (0, _util.assert)(typeof data === 'string', 'Metadata: input is not a string');
    data = this._repair(data);
    var parser = new _xml_parser.SimpleXMLParser();
    var xmlDocument = parser.parseFromString(data);
    this._metadata = Object.create(null);

    if (xmlDocument) {
      this._parse(xmlDocument);
    }
  }

  _createClass(Metadata, [{
    key: "_repair",
    value: function _repair(data) {
      return data.replace(/^([^<]+)/, '').replace(/>\\376\\377([^<]+)/g, function (all, codes) {
        var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g,).replace(/&(amp|apos|gt|lt|quot);/g,);
        var chars = '';

        for (var i = 0, ii = bytes.length; i < ii; i += 2) {
          var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);

          if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
            chars += String.fromCharCode(code);
          } else {
            chars += '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
          }
        }

        return '>' + chars;
      });
    }
  }, {
    key: "_parse",
    value: function _parse(xmlDocument) {
      var rdf = xmlDocument.documentElement;

      if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
        rdf = rdf.firstChild;

        while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
          rdf = rdf.nextSibling;
        }
      }

      var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;

      if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
        return;
      }

      var children = rdf.childNodes;

      for (var i = 0, ii = children.length; i < ii; i++) {
        var desc = children[i];

        if (desc.nodeName.toLowerCase() !== 'rdf:description') {
          continue;
        }

        for (var j = 0, jj = desc.childNodes.length; j < jj; j++) {
          if (desc.childNodes[j].nodeName.toLowerCase() !== '#text') {
            var entry = desc.childNodes[j];
            var name = entry.nodeName.toLowerCase();
            this._metadata[name] = entry.textContent.trim();
          }
        }
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      var data = this._metadata[name];
      return typeof data !== 'undefined' ? data : null;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this._metadata;
    }
  }, {
    key: "has",
    value:
  }]);

  return Metadata;
}();

exports.Metadata = Metadata;

/***/ }),
/* 159 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleXMLParser = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var XMLParserErrorCode = {
  NoError: 0,
  EndOfDocument: -1,
  UnterminatedCdat: -2,
  UnterminatedXmlDeclaration: -3,
  UnterminatedDoctypeDeclaration: -4,
  UnterminatedComment: -5,
  MalformedElement: -6,
  OutOfMemory: -7,
  UnterminatedAttributeValue: -8,
  UnterminatedElement: -9,
  ElementNeverBegun: -10
};



var XMLParserBase =
/*#__PURE__*/
function () {
  function XMLParserBase() {
    _classCallCheck(this, XMLParserBase);
  }

  _createClass(XMLParserBase, [{
    key: "_resolveEntities",
    value: function _resolveEntities(s) {
      var _this = this;

      return s.replace(/&([^;]+);/g, function (all, entity) {
        if (entity.substring(0, 2) === '#x') {
          return String.fromCharCode(parseInt(entity.substring(2), 16));
        } else if (entity.substring(0, 1) === '#') {
          return String.fromCharCode(parseInt(entity.substring(1), 10));
        }

        switch (entity) {
          case 'lt':
            return '<';

          case 'gt':
            return '>';

          case 'amp':
            return '&';

          case 'quot':
            return '\"';
        }

        return _this.onResolveEntity(entity);
      });
    }
  }, {
    key: "_parseContent",
    value: function _parseContent(s, start) {
      var pos = start,
          name,
          attributes = [];

      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }

      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }

      name = s.substring(start, pos);
      skipWs();

      while (pos < s.length && s[pos] !== '>' && s[pos] !== '/' && s[pos] !== '?') {
        skipWs();
        var attrName = '',
            attrValue = '';

        while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '=') {
          attrName += s[pos];
          ++pos;
        }

        skipWs();

        if (s[pos] !== '=') {
          return null;
        }

        ++pos;
        skipWs();
        var attrEndChar = s[pos];

        if (attrEndChar !== '\"' && attrEndChar !== '\'') {
          return null;
        }

        var attrEndIndex = s.indexOf(attrEndChar, ++pos);

        if (attrEndIndex < 0) {
          return null;
        }

        attrValue = s.substring(pos, attrEndIndex);
        attributes.push({
          name: attrName,
          value: this._resolveEntities(attrValue)
        });
        pos = attrEndIndex + 1;
        skipWs();
      }

      return {
        name: name,
        attributes: attributes,
        parsed: pos - start
      };
    }
  }, {
    key: "_parseProcessingInstruction",
    value: function _parseProcessingInstruction(s, start) {
      var pos = start,
          name,
          value;

     

      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }

      name = s.substring(start, pos);
      skipWs();
      var attrStart = pos;

      while (pos < s.length && (s[pos] !== '?' || s[pos + 1] !== '>')) {
        ++pos;
      }

      value = s.substring(attrStart, pos);
      return {
        name: name,
        value: value,
        parsed: pos - start
      };
    }
  }, {
    key: "parseXml",
    value:
  }, {
    key: "onResolveEntity",
    value:
  }, {
    key: "onPi",
    value:
  }, {
    key: "onComment",
    value: function onComment(text) {}
  }, {
    key: "onCdata",
    value: function onCdata(text) {}
  }, {
    key: "onDoctype",
    value: function onDoctype(doctypeContent) {}
  }, {
    key: "onText",
    value: function onText(text) {}
  }, {
    key: "onBeginElement",
    value:
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {}
  }, {
    key: "onError",
    value: function onError(code) {}
  }]);

  return XMLParserBase;
}();

var SimpleDOMNode =
/*#__PURE__*/
function () {
 

  _createClass(SimpleDOMNode, [{
    key: "hasChildNodes",
    value:
  }, {
    key: "firstChild",
    get:
  }, {
    key: "nextSibling",
    get:
  }, {
    key: "textContent",
    get:
  }]);

  return SimpleDOMNode;
}();

var SimpleXMLParser =
/*#__PURE__*/
function (_XMLParserBase) {
  _inherits(SimpleXMLParser, _XMLParserBase);

  function SimpleXMLParser() {
    var _this2;

    _classCallCheck(this, SimpleXMLParser);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SimpleXMLParser).call(this));
    _this2._currentFragment = null;
    _this2._stack = null;
    _this2._errorCode = XMLParserErrorCode.NoError;
    return _this2;
  }

  _createClass(SimpleXMLParser, [{
    key: "parseFromString",
    value:
  }, {
    key: "onResolveEntity",
    value:
  }, {
    key: "onText",
    value:
  }, {
    key: "onCdata",
    value:
  }, {
    key: "onBeginElement",
    value: function onBeginElement(name, attributes, isEmpty) {
      var node = new SimpleDOMNode(name);
      node.childNodes = [];

      this._currentFragment.push(node);

      if (isEmpty) {
        return;
      }

      this._stack.push(this._currentFragment);

      this._currentFragment = node.childNodes;
    }
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {
      this._currentFragment = this._stack.pop() || [];
      var lastElement = this._currentFragment[this._currentFragment.length - 1];

      if (!lastElement) {
        return;
      }

      for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
        lastElement.childNodes[i].parentNode = lastElement;
      }
    }
  }, {
    key: "onError",
    value: function onError(code) {
      this._errorCode = code;
    }
  }]);

  return SimpleXMLParser;
}(XMLParserBase);

exports.SimpleXMLParser = SimpleXMLParser;

/***/ }),
/* 160 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFDataTransportStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PDFDataTransportStream =
/*#__PURE__*/
function () {
  function PDFDataTransportStream(params, pdfDataRangeTransport) {
    var _this = this;

    _classCallCheck(this, PDFDataTransportStream);

    (0, _util.assert)(pdfDataRangeTransport);
    this._queuedChunks = [];
    this._progressiveDone = params.progressiveDone || false;
    var initialData = params.initialData;

    if (initialData && initialData.length > 0) {
      var buffer = new Uint8Array(initialData).buffer;

      this._queuedChunks.push(buffer);
    }

    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !params.disableStream;
    this._isRangeSupported = !params.disableRange;
    this._contentLength = params.length;
    this._fullRequestReader = null;
    this._rangeReaders = [];

    this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
      _this._onReceiveData({
        begin: begin,
        chunk: chunk
      });
    });

    this._pdfDataRangeTransport.addProgressListener);

    this._pdfDataRangeTransport.addProgressiveReadListener);

    this._pdfDataRangeTransport.addProgressiveDoneListener);

    this._pdfDataRangeTransport.transportReady();
  }

  _createClass(PDFDataTransportStream, [{
    key: "_onReceiveData",
    value: function _onReceiveData(args) {
      var buffer = new Uint8Array(args.chunk).buffer;

      if (args.begin === undefined) {
        if (this._fullRequestReader) {
          this._fullRequestReader._enqueue(buffer);
        } else {
          this._queuedChunks.push(buffer);
        }
      } else {
        var found = this._rangeReaders.some(function (rangeReader) {
          if (rangeReader._begin !== args.begin) {
            return false;
          }

          rangeReader._enqueue(buffer);

          return true;
        });

        (0, _util.assert)(found);
      }
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(evt) {
      if (evt.total === undefined) {
        var firstReader = this._rangeReaders[0];

        if (firstReader && firstReader.onProgress) {
          firstReader.onProgress({
            loaded: evt.loaded
          });
        }
      } else {
        var fullReader = this._fullRequestReader;

        if (fullReader && fullReader.onProgress) {
          fullReader.onProgress({
            loaded: evt.loaded,
            total: evt.total
          });
        }
      }
    }
  }, {
    key: "_onProgressiveDone",
    value:
  }, {
    key: "_removeRangeReader",
    value:
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      var queuedChunks = this._queuedChunks;
      this._queuedChunks = null;
      return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone);
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }

      var reader = new PDFDataTransportStreamRangeReader(this, begin, end);

      this._pdfDataRangeTransport.requestDataRange(begin, end);

      this._rangeReaders.push(reader);

      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }

      var readers = this._rangeReaders.slice(0);

      readers.forEach(function (rangeReader) {
        rangeReader.cancel(reason);
      });

      this._pdfDataRangeTransport.abort();
    }
  }, {
    key: "_progressiveDataLength",
    get: function get() {
      return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
    }
  }]);

  return PDFDataTransportStream;
}();

exports.PDFDataTransportStream = PDFDataTransportStream;

var PDFDataTransportStreamReader =
/*#__PURE__*/
function () {
  function PDFDataTransportStreamReader(stream, queuedChunks) {
    var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, PDFDataTransportStreamReader);

    this._stream = stream;
    this._done = progressiveDone || false;
    this._filename = null;
    this._queuedChunks = queuedChunks || [];
    this._loaded = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._queuedChunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var chunk = _step.value;
        this._loaded += chunk.byteLength;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;
    this.onProgress = null;
  }

  _createClass(PDFDataTransportStreamReader, [{
    key: "_enqueue",
    value: function _enqueue(chunk) {
      if (this._done) {
        return;
      }

      if (this._requests.length > 0) {
        var requestCapability = this._requests.shift();

        requestCapability.resolve({
          value: chunk,
          done: false
        });
      } else {
        this._queuedChunks.push(chunk);
      }

      this._loaded += chunk.byteLength;
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this._queuedChunks.length > 0)) {
                  _context.next = 3;
                  break;
                }

                chunk = this._queuedChunks.shift();
                return _context.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 3:
                if (!this._done) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 5:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context.abrupt("return", requestCapability.promise);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value:
  }, {
    key: "progressiveDone",
    value:
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersReady;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._stream._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._stream._isStreamingSupported;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._stream._contentLength;
    }
  }]);

  return PDFDataTransportStreamReader;
}();

var PDFDataTransportStreamRangeReader =
/*#__PURE__*/
function () {
  function PDFDataTransportStreamRangeReader(stream, begin, end) {
    _classCallCheck(this, PDFDataTransportStreamRangeReader);

    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }

  _createClass(PDFDataTransportStreamRangeReader, [{
    key: "_enqueue",
    value:
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._queuedChunk) {
                  _context2.next = 4;
                  break;
                }

                chunk = this._queuedChunk;
                this._queuedChunk = null;
                return _context2.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 4:
                if (!this._done) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 6:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context2.abrupt("return", requestCapability.promise);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _read2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value:
  }, {
    key: "isStreamingSupported",
    get:
  }]);

  return PDFDataTransportStreamRangeReader;
}();

/***/ }),
/* 161 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGLContext = void 0;

var _util = __w_pdfjs_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WebGLContext =
/*#__PURE__*/
function () {
  function WebGLContext(_ref) {
    var _ref$enable = _ref.enable,
        enable = _ref$enable === void 0 ? false : _ref$enable;

    _classCallCheck(this, WebGLContext);

    this._enabled = enable === true;
  }

  _createClass(WebGLContext, [{
    key: "composeSMask",
    value:
  }, {
    key: "drawFigures",
    value:
  }, {
    key: "clear",
    value:
  }, {
    key: "isEnabled",
    get: function get() {
      var enabled = this._enabled;

      if (enabled) {
        enabled = WebGLUtils.tryInitGL();
      }

      return (0, _util.shadow)(this, 'isEnabled', enabled);
    }
  }]);

  return WebGLContext;
}();

exports.WebGLContext = WebGLContext;

var WebGLUtils = function WebGLUtilsClosure() {
 

  function createVertexShader(gl, code) {
    return loadShader(gl, code, gl.VERTEX_SHADER);
  }

 

 

 

  var currentGL, currentCanvas;

 

  var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
  var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
  var smaskCache = null;

 

 

  var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
  var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
  var figuresCache = null;

 

 

  return {
    tryInitGL: function tryInitGL() {
      try {
        generateGL();
        return !!currentGL;
      } catch (ex) {}

      return false;
    },
    composeSMask: composeSMask,
    drawFigures: drawFigures,
    cleanup: function cleanup() {
      if (smaskCache && smaskCache.canvas) {
        smaskCache.canvas.width = 0;
        smaskCache.canvas.height = 0;
      }

      if (figuresCache && figuresCache.canvas) {
        figuresCache.canvas.width = 0;
        figuresCache.canvas.height = 0;
      }

      smaskCache = null;
      figuresCache = null;
    }
  };
}();

/***/ }),
/* 162 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTextLayer = void 0;

var _util = __w_pdfjs_require__(1);

var _global_scope = _interopRequireDefault(__w_pdfjs_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderTextLayer = function renderTextLayerClosure() {
  var MAX_TEXT_DIVS_TO_RENDER = 100000;
  var NonWhitespaceRegexp = /\S/;

 

  var styleBuf = ['left: ', 0, 'px; top: ', 0, 'px; font-size: ', 0, 'px; font-family: ', '', ';'];

  function appendText(task, geom, styles) {
    var textDiv = document.createElement('span');
    var textDivProperties = {
      style: null,
      angle: 0,
      canvasWidth: 0,
      isWhitespace: false,
      originalTransform: null,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      scale: 1
    };

    task._textDivs.push(textDiv);

    if (isAllWhitespace(geom.str)) {
      textDivProperties.isWhitespace = true;

      task._textDivProperties.set(textDiv, textDivProperties);

      return;
    }

    var tx = _util.Util.transform(task._viewport.transform, geom.transform);

    var angle = Math.atan2(tx[1], tx[0]);
    var style = styles[geom.fontName];

    if (style.vertical) {
      angle += Math.PI / 2;
    }

    var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
    var fontAscent = fontHeight;

    if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
    } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
    }

    var left;
    var top;

    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
    }

    styleBuf[1] = left;
    styleBuf[3] = top;
    styleBuf[5] = fontHeight;
    styleBuf[7] = style.fontFamily;
    textDivProperties.style = styleBuf.join('');
    textDiv.setAttribute('style', textDivProperties.style);
    textDiv.textContent = geom.str;

    if (task._fontInspectorEnabled) {
      textDiv.dataset.fontName = geom.fontName;
    }

    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }

    if (geom.str.length > 1) {
      if (style.vertical) {
        textDivProperties.canvasWidth = geom.height * task._viewport.scale;
      } else {
        textDivProperties.canvasWidth = geom.width * task._viewport.scale;
      }
    }

    task._textDivProperties.set(textDiv, textDivProperties);

    if (task._textContentStream) {
      task._layoutText(textDiv);
    }

    if (task._enhanceTextSelection) {
      var angleCos = 1,
          angleSin = 0;

      if (angle !== 0) {
        angleCos = Math.cos(angle);
        angleSin = Math.sin(angle);
      }

      var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
      var divHeight = fontHeight;
      var m, b;

      if (angle !== 0) {
        m = [angleCos, angleSin, -angleSin, angleCos, left, top];
        b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
      } else {
        b = [left, top, left + divWidth, top + divHeight];
      }

      task._bounds.push({
        left: b[0],
        top: b[1],
        right: b[2],
        bottom: b[3],
        div: textDiv,
        size: [divWidth, divHeight],
        m: m
      });
    }
  }

  function render(task) {
    if (task._canceled) {
      return;
    }

    var textDivs = task._textDivs;
    var capability = task._capability;
    var textDivsLength = textDivs.length;

    if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      task._renderingDone = true;
      capability.resolve();
      return;
    }

    if (!task._textContentStream) {
      for (var i = 0; i < textDivsLength; i++) {
        task._layoutText(textDivs[i]);
      }
    }

    task._renderingDone = true;
    capability.resolve();
  }

  function expand(task) {
    var bounds = task._bounds;
    var viewport = task._viewport;
    var expanded = expandBounds(viewport.width, viewport.height, bounds);

    for (var i = 0; i < expanded.length; i++) {
      var div = bounds[i].div;

      var divProperties = task._textDivProperties.get(div);

      if (divProperties.angle === 0) {
        divProperties.paddingLeft = bounds[i].left - expanded[i].left;
        divProperties.paddingTop = bounds[i].top - expanded[i].top;
        divProperties.paddingRight = expanded[i].right - bounds[i].right;
        divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;

        task._textDivProperties.set(div, divProperties);

        continue;
      }

      var e = expanded[i],
          b = bounds[i];
      var m = b.m,
          c = m[0],
          s = m[1];
      var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
      var ts = new Float64Array(64);
      points.forEach);

      var findPositiveMin = function findPositiveMin(ts, offset, count) {
        var result = 0;

        for (var i = 0; i < count; i++) {
          var t = ts[offset++];

          if (t > 0) {
            result = result ? Math.min(t, result) : t;
          }
        }

        return result;
      };

      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;

      task._textDivProperties.set(div, divProperties);
    }
  }

 

 

  function TextLayerRenderTask(_ref) {
    var _this = this;

    var textContent = _ref.textContent,
        textContentStream = _ref.textContentStream,
        container = _ref.container,
        viewport = _ref.viewport,
        textDivs = _ref.textDivs,
        textContentItemsStr = _ref.textContentItemsStr,
        enhanceTextSelection = _ref.enhanceTextSelection;
    this._textContent = textContent;
    this._textContentStream = textContentStream;
    this._container = container;
    this._viewport = viewport;
    this._textDivs = textDivs || [];
    this._textContentItemsStr = textContentItemsStr || [];
    this._enhanceTextSelection = !!enhanceTextSelection;
    this._fontInspectorEnabled = !!(_global_scope["default"].FontInspector && _global_scope["default"].FontInspector.enabled);
    this._reader = null;
    this._layoutTextLastFontSize = null;
    this._layoutTextLastFontFamily = null;
    this._layoutTextCtx = null;
    this._textDivProperties = new WeakMap();
    this._renderingDone = false;
    this._canceled = false;
    this._capability = (0, _util.createPromiseCapability)();
    this._renderTimer = null;
    this._bounds = [];

    this._capability.promise["finally"](function () {
      if (_this._layoutTextCtx) {
        _this._layoutTextCtx.canvas.width = 0;
        _this._layoutTextCtx.canvas.height = 0;
        _this._layoutTextCtx = null;
      }
    });
  }

  TextLayerRenderTask.prototype = {
    get promis,

    cancel: function TextLayer_cancel() {
      this._canceled = true;

      if (this._reader) {
        this._reader.cancel(new _util.AbortException('TextLayer task cancelled.'));

        this._reader = null;
      }

      if (this._renderTimer !== null) {
        clearTimeout(this._renderTimer);
        this._renderTimer = null;
      }

      this._capability.reject(new Error('TextLayer task cancelled.'));
    },
    _processItems: function _processItems(items, styleCache) {
      for (var i = 0, len = items.length; i < len; i++) {
        this._textContentItemsStr.push(items[i].str);

        appendText(this, items[i], styleCache);
      }
    },
    _layoutText: function _layoutText(textDiv) {
      var textLayerFrag = this._container;

      var textDivProperties = this._textDivProperties.get(textDiv);

      if (textDivProperties.isWhitespace) {
        return;
      }

      var fontSize = textDiv.style.fontSize;
      var fontFamily = textDiv.style.fontFamily;

      if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
        this._layoutTextCtx.font = fontSize + ' ' + fontFamily;
        this._layoutTextLastFontSize = fontSize;
        this._layoutTextLastFontFamily = fontFamily;
      }

      var width = this._layoutTextCtx.measureText(textDiv.textContent).width;

      var transform = '';

      if (textDivProperties.canvasWidth !== 0 && width > 0) {
        textDivProperties.scale = textDivProperties.canvasWidth / width;
        transform = "scaleX(".concat(textDivProperties.scale, ")");
      }

      if (textDivProperties.angle !== 0) {
        transform = "rotate(".concat(textDivProperties.angle, "deg) ").concat(transform);
      }

      if (transform.length > 0) {
        textDivProperties.originalTransform = transform;
        textDiv.style.transform = transform;
      }

      this._textDivProperties.set(textDiv, textDivProperties);

      textLayerFrag.appendChild(textDiv);
    },
    _render: function TextLayer_render(timeout) {
      var _this2 = this;

      var capability = (0, _util.createPromiseCapability)();
      var styleCache = Object.create(null);
      var canvas = document.createElement('canvas');
      canvas.mozOpaque = true;
      this._layoutTextCtx = canvas.getContext('2d', {
        alpha: false
      });

      if (this._textContent) {
        var textItems = this._textContent.items;
        var textStyles = this._textContent.styles;

        this._processItems(textItems, textStyles);

        capability.resolve();
      } else if (this._textContentStream) {
        var pump = function pump() {
          _this2._reader.read().then(function (_ref2) {
            var value = _ref2.value,
                done = _ref2.done;

            if (done) {
              capability.resolve();
              return;
            }

            Object.assign(styleCache, value.styles);

            _this2._processItems(value.items, styleCache);

            pump();
          }, capability.reject);
        };

        this._reader = this._textContentStream.getReader();
        pump();
      } else {
        throw new Error('Neither "textContent" nor "textContentStream"' + ' parameters specified.');
      }

      capability.promise.then(function () {
        styleCache = null;

        if (!timeout) {
          render(_this2);
        } else {
          _this2._renderTimer = setTimeout, timeout);
        }
      }, this._capability.reject);
    },
    expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
      if (!this._enhanceTextSelection || !this._renderingDone) {
        return;
      }

      if (this._bounds !== null) {
        expand(this);
        this._bounds = null;
      }

      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
        var div = this._textDivs[i];

        var divProperties = this._textDivProperties.get(div);

        if (divProperties.isWhitespace) {
          continue;
        }

        if (expandDivs) {
          var transform = '',
              padding = '';

          if (divProperties.scale !== 1) {
            transform = 'scaleX(' + divProperties.scale + ')';
          }

          if (divProperties.angle !== 0) {
            transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
          }

          if (divProperties.paddingLeft !== 0) {
            padding += ' padding-left: ' + divProperties.paddingLeft / divProperties.scale + 'px;';
            transform += ' translateX(' + -divProperties.paddingLeft / divProperties.scale + 'px)';
          }

          if (divProperties.paddingTop !== 0) {
            padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
            transform += ' translateY(' + -divProperties.paddingTop + 'px)';
          }

          if (divProperties.paddingRight !== 0) {
            padding += ' padding-right: ' + divProperties.paddingRight / divProperties.scale + 'px;';
          }

          if (divProperties.paddingBottom !== 0) {
            padding += ' padding-bottom: ' + divProperties.paddingBottom + 'px;';
          }

          if (padding !== '') {
            div.setAttribute('style', divProperties.style + padding);
          }

          if (transform !== '') {
            div.style.transform = transform;
          }
        } else {
          div.style.padding = 0;
          div.style.transform = divProperties.originalTransform || '';
        }
      }
    }
  };

  function renderTextLayer(renderParameters) {
    var task = new TextLayerRenderTask({
      textContent: renderParameters.textContent,
      textContentStream: renderParameters.textContentStream,
      container: renderParameters.container,
      viewport: renderParameters.viewport,
      textDivs: renderParameters.textDivs,
      textContentItemsStr: renderParameters.textContentItemsStr,
      enhanceTextSelection: renderParameters.enhanceTextSelection
    });

    task._render(renderParameters.timeout);

    return task;
  }

  return renderTextLayer;
}();

exports.renderTextLayer = renderTextLayer;

/***/ }),
/* 163 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationLayer = void 0;

var _display_utils = __w_pdfjs_require__(151);

var _util = __w_pdfjs_require__(1);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnnotationElementFactory =
/*#__PURE__*/
function () {
  function AnnotationElementFactory() {
    _classCallCheck(this, AnnotationElementFactory);
  }

  _createClass(AnnotationElementFactory, null, [{
    key: "create",
    value: function create(parameters) {
      var subtype = parameters.data.annotationType;

      switch (subtype) {
        case _util.AnnotationType.LINK:
          return new LinkAnnotationElement(parameters);

        case _util.AnnotationType.TEXT:
          return new TextAnnotationElement(parameters);

        case _util.AnnotationType.WIDGET:
          var fieldType = parameters.data.fieldType;

          switch (fieldType) {
            case 'Tx':
              return new TextWidgetAnnotationElement(parameters);

            case 'Btn':
              if (parameters.data.radioButton) {
                return new RadioButtonWidgetAnnotationElement(parameters);
              } else if (parameters.data.checkBox) {
                return new CheckboxWidgetAnnotationElement(parameters);
              }

              return new PushButtonWidgetAnnotationElement(parameters);

            case 'Ch':
              return new ChoiceWidgetAnnotationElement(parameters);
          }

          return new WidgetAnnotationElement(parameters);

        case _util.AnnotationType.POPUP:
          return new PopupAnnotationElement(parameters);

        case _util.AnnotationType.FREETEXT:
          return new FreeTextAnnotationElement(parameters);

        case _util.AnnotationType.LINE:
          return new LineAnnotationElement(parameters);

        case _util.AnnotationType.SQUARE:
          return new SquareAnnotationElement(parameters);

        case _util.AnnotationType.CIRCLE:
          return new CircleAnnotationElement(parameters);

        case _util.AnnotationType.POLYLINE:
          return new PolylineAnnotationElement(parameters);

        case _util.AnnotationType.CARET:
          return new CaretAnnotationElement(parameters);

        case _util.AnnotationType.INK:
          return new InkAnnotationElement(parameters);

        case _util.AnnotationType.POLYGON:
          return new PolygonAnnotationElement(parameters);

        case _util.AnnotationType.HIGHLIGHT:
          return new HighlightAnnotationElement(parameters);

        case _util.AnnotationType.UNDERLINE:
          return new UnderlineAnnotationElement(parameters);

        case _util.AnnotationType.SQUIGGLY:
          return new SquigglyAnnotationElement(parameters);

        case _util.AnnotationType.STRIKEOUT:
          return new StrikeOutAnnotationElement(parameters);

        case _util.AnnotationType.STAMP:
          return new StampAnnotationElement(parameters);

        case _util.AnnotationType.FILEATTACHMENT:
          return new FileAttachmentAnnotationElement(parameters);

        default:
          return new AnnotationElement(parameters);
      }
    }
  }]);

  return AnnotationElementFactory;
}();

var AnnotationElement =
/*#__PURE__*/
function () {
  function AnnotationElement(parameters) {
    var isRenderable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var ignoreBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, AnnotationElement);

    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.page = parameters.page;
    this.viewport = parameters.viewport;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderInteractiveForms = parameters.renderInteractiveForms;
    this.svgFactory = parameters.svgFactory;

    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
  }

  _createClass(AnnotationElement, [{
    key: "_createContainer",
    value: function _createContainer() {
      var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = this.data,
          page = this.page,
          viewport = this.viewport;
      var container = document.createElement('section');
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      container.setAttribute('data-annotation-id', data.id);

      var rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);

      container.style.transform = 'matrix(' + viewport.transform.join(',') + ')';
      container.style.transformOrigin = -rect[0] + 'px ' + -rect[1] + 'px';

      if (!ignoreBorder && data.borderStyle.width > 0) {
        container.style.borderWidth = data.borderStyle.width + 'px';

        if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
          width = width - 2 * data.borderStyle.width;
          height = height - 2 * data.borderStyle.width;
        }

        var horizontalRadius = data.borderStyle.horizontalCornerRadius;
        var verticalRadius = data.borderStyle.verticalCornerRadius;

        if (horizontalRadius > 0 || verticalRadius > 0) {
          var radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
          container.style.borderRadius = radius;
        }

        switch (data.borderStyle.style) {
          case _util.AnnotationBorderStyleType.SOLID:
            container.style.borderStyle = 'solid';
            break;

          case _util.AnnotationBorderStyleType.DASHED:
            container.style.borderStyle = 'dashed';
            break;

          case _util.AnnotationBorderStyleType.BEVELED:
            (0, _util.warn)('Unimplemented border style: beveled');
            break;

          case _util.AnnotationBorderStyleType.INSET:
            (0, _util.warn)('Unimplemented border style: inset');
            break;

          case _util.AnnotationBorderStyleType.UNDERLINE:
            container.style.borderBottomStyle = 'solid';
            break;

          default:
            break;
        }

        if (data.color) {
          container.style.borderColor = _util.Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
        } else {
          container.style.borderWidth = 0;
        }
      }

      container.style.left = rect[0] + 'px';
      container.style.top = rect[1] + 'px';
      container.style.width = width + 'px';
      container.style.height = height + 'px';
      return container;
    }
  }, {
    key: "_createPopup",
    value: function _createPopup(container, trigger, data) {
      if (!trigger) {
        trigger = document.createElement('div');
        trigger.style.height = container.style.height;
        trigger.style.width = container.style.width;
        container.appendChild(trigger);
      }

      var popupElement = new PopupElement({
        container: container,
        trigger: trigger,
        color: data.color,
        title: data.title,
        modificationDate: data.modificationDate,
        contents: data.contents,
        hideWrapper: true
      });
      var popup = popupElement.render();
      popup.style.left = container.style.width;
      container.appendChild(popup);
    }
  }, {
    key: "render",
    value:
  }]);

  return AnnotationElement;
}();

var LinkAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement) {
  _inherits(LinkAnnotationElement, _AnnotationElement);

  function LinkAnnotationElement(parameters) {
    _classCallCheck(this, LinkAnnotationElement);

    var isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action);
    return _possibleConstructorReturn(this, _getPrototypeOf(LinkAnnotationElement).call(this, parameters, isRenderable));
  }

  _createClass(LinkAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'linkAnnotation';
      var data = this.data,
          linkService = this.linkService;
      var link = document.createElement('a');
      (0, _display_utils.addLinkAttributes)(link, {
        url: data.url,
        target: data.newWindow ? _display_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
        rel: linkService.externalLinkRel
      });

      if (!data.url) {
        if (data.action) {
          this._bindNamedAction(link, data.action);
        } else {
          this._bindLink(link, data.dest);
        }
      }

      this.container.appendChild(link);
      return this.container;
    }
  }, {
    key: "_bindLink",
    value:
  }, {
    key: "_bindNamedAction",
    value:
  }]);

  return LinkAnnotationElement;
}(AnnotationElement);

var TextAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement2) {
  _inherits(TextAnnotationElement, _AnnotationElement2);

 

  _createClass(TextAnnotationElement, [{
    key: "render",
    value:
  }]);

  return TextAnnotationElement;
}(AnnotationElement);

var WidgetAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement3) {
  _inherits(WidgetAnnotationElement, _AnnotationElement3);

  function WidgetAnnotationElement() {
    _classCallCheck(this, WidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(WidgetAnnotationElement).apply(this, arguments));
  }

  _createClass(WidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      return this.container;
    }
  }]);

  return WidgetAnnotationElement;
}(AnnotationElement);

var TextWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem) {
  _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);

 

  _createClass(TextWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var TEXT_ALIGNMENT = ['left', 'center', 'right'];
      this.container.className = 'textWidgetAnnotation';
      var element = null;

      if (this.renderInteractiveForms) {
        if (this.data.multiLine) {
          element = document.createElement('textarea');
          element.textContent = this.data.fieldValue;
        } else {
          element = document.createElement('input');
          element.type = 'text';
          element.setAttribute('value', this.data.fieldValue);
        }

        element.disabled = this.data.readOnly;

        if (this.data.maxLen !== null) {
          element.maxLength = this.data.maxLen;
        }

        if (this.data.comb) {
          var fieldWidth = this.data.rect[2] - this.data.rect[0];
          var combWidth = fieldWidth / this.data.maxLen;
          element.classList.add('comb');
          element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
        }
      } else {
        element = document.createElement('div');
        element.textContent = this.data.fieldValue;
        element.style.verticalAlign = 'middle';
        element.style.display = 'table-cell';
        var font = null;

        if (this.data.fontRefName && this.page.commonObjs.has(this.data.fontRefName)) {
          font = this.page.commonObjs.get(this.data.fontRefName);
        }

        this._setTextStyle(element, font);
      }

      if (this.data.textAlignment !== null) {
        element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
      }

      this.container.appendChild(element);
      return this.container;
    }
  }, {
    key: "_setTextStyle",
    value:
  }]);

  return TextWidgetAnnotationElement;
}(WidgetAnnotationElement);

var CheckboxWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem2) {
  _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);

  function CheckboxWidgetAnnotationElement(parameters) {
    _classCallCheck(this, CheckboxWidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(CheckboxWidgetAnnotationElement, [{
    key: "render",
    value:
  }]);

  return CheckboxWidgetAnnotationElement;
}(WidgetAnnotationElement);

var RadioButtonWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem3) {
  _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);

  function RadioButtonWidgetAnnotationElement(parameters) {
    _classCallCheck(this, RadioButtonWidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioButtonWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(RadioButtonWidgetAnnotationElement, [{
    key: "render",
    value:
  }]);

  return RadioButtonWidgetAnnotationElement;
}(WidgetAnnotationElement);

var PushButtonWidgetAnnotationElement =
/*#__PURE__*/
function (_LinkAnnotationElemen) {
  _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);

 

  _createClass(PushButtonWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var container = _get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype), "render", this).call(this);

      container.className = 'buttonWidgetAnnotation pushButton';
      return container;
    }
  }]);

  return PushButtonWidgetAnnotationElement;
}(LinkAnnotationElement);

var ChoiceWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem4) {
  _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);

  function ChoiceWidgetAnnotationElement(parameters) {
    _classCallCheck(this, ChoiceWidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(ChoiceWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'choiceWidgetAnnotation';
      var selectElement = document.createElement('select');
      selectElement.disabled = this.data.readOnly;

      if (!this.data.combo) {
        selectElement.size = this.data.options.length;

        if (this.data.multiSelect) {
          selectElement.multiple = true;
        }
      }

      for (var i = 0, ii = this.data.options.length; i < ii; i++) {
        var option = this.data.options[i];
        var optionElement = document.createElement('option');
        optionElement.textContent = option.displayValue;
        optionElement.value = option.exportValue;

        if (this.data.fieldValue.includes(option.displayValue)) {
          optionElement.setAttribute('selected', true);
        }

        selectElement.appendChild(optionElement);
      }

      this.container.appendChild(selectElement);
      return this.container;
    }
  }]);

  return ChoiceWidgetAnnotationElement;
}(WidgetAnnotationElement);

var PopupAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement4) {
  _inherits(PopupAnnotationElement, _AnnotationElement4);

 

  _createClass(PopupAnnotationElement, [{
    key: "render",
    value: function render() {
      var IGNORE_TYPES = ['Line', 'Square', 'Circle', 'PolyLine', 'Polygon', 'Ink'];
      this.container.className = 'popupAnnotation';

      if (IGNORE_TYPES.includes(this.data.parentType)) {
        return this.container;
      }

      var selector = '[data-annotation-id="' + this.data.parentId + '"]';
      var parentElement = this.layer.querySelector(selector);

      if (!parentElement) {
        return this.container;
      }

      var popup = new PopupElement({
        container: this.container,
        trigger: parentElement,
        color: this.data.color,
        title: this.data.title,
        modificationDate: this.data.modificationDate,
        contents: this.data.contents
      });
      var parentLeft = parseFloat(parentElement.style.left);
      var parentWidth = parseFloat(parentElement.style.width);
      this.container.style.transformOrigin = -(parentLeft + parentWidth) + 'px -' + parentElement.style.top;
      this.container.style.left = parentLeft + parentWidth + 'px';
      this.container.appendChild(popup.render());
      return this.container;
    }
  }]);

  return PopupAnnotationElement;
}(AnnotationElement);

var PopupElement =
/*#__PURE__*/
function () {
  function PopupElement(parameters) {
    _classCallCheck(this, PopupElement);

    this.container = parameters.container;
    this.trigger = parameters.trigger;
    this.color = parameters.color;
    this.title = parameters.title;
    this.modificationDate = parameters.modificationDate;
    this.contents = parameters.contents;
    this.hideWrapper = parameters.hideWrapper || false;
    this.pinned = false;
  }

  _createClass(PopupElement, [{
    key: "render",
    value: function render() {
      var BACKGROUND_ENLIGHT = 0.7;
      var wrapper = document.createElement('div');
      wrapper.className = 'popupWrapper';
      this.hideElement = this.hideWrapper ? wrapper : this.container;
      this.hideElement.setAttribute('hidden', true);
      var popup = document.createElement('div');
      popup.className = 'popup';
      var color = this.color;

      if (color) {
        var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
        var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
        var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
        popup.style.backgroundColor = _util.Util.makeCssRgb(r | 0, g | 0, b | 0);
      }

      var title = document.createElement('h1');
      title.textContent = this.title;
      popup.appendChild(title);

      var dateObject = _display_utils.PDFDateString.toDateObject(this.modificationDate);

      if (dateObject) {
        var modificationDate = document.createElement('span');
        modificationDate.textContent = '{{date}}, {{time}}';
        modificationDate.dataset.l10nId = 'annotation_date_string';
        modificationDate.dataset.l10nArgs = JSON.stringify({
          date: dateObject.toLocaleDateString(),
          time: dateObject.toLocaleTimeString()
        });
        popup.appendChild(modificationDate);
      }

      var contents = this._formatContents(this.contents);

      popup.appendChild(contents);
      this.trigger.addEventListener('click', this._toggle.bind(this));
      this.trigger.addEventListener('mouseover', this._show.bind(this, false));
      this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
      popup.addEventListener('click', this._hide.bind(this, true));
      wrapper.appendChild(popup);
      return wrapper;
    }
  }, {
    key: "_formatContents",
    value:
  }, {
    key: "_toggle",
    value:
  }, {
    key: "_show",
    value: function _show() {
      var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (pin) {
        this.pinned = true;
      }

      if (this.hideElement.hasAttribute('hidden')) {
        this.hideElement.removeAttribute('hidden');
        this.container.style.zIndex += 1;
      }
    }
  }, {
    key: "_hide",
    value: function _hide() {
      var unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (unpin) {
        this.pinned = false;
      }

      if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
        this.hideElement.setAttribute('hidden', true);
        this.container.style.zIndex -= 1;
      }
    }
  }]);

  return PopupElement;
}();

var FreeTextAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement5) {
  _inherits(FreeTextAnnotationElement, _AnnotationElement5);

  function FreeTextAnnotationElement(parameters) {
    _classCallCheck(this, FreeTextAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(FreeTextAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(FreeTextAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'freeTextAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return FreeTextAnnotationElement;
}(AnnotationElement);

var LineAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement6) {
  _inherits(LineAnnotationElement, _AnnotationElement6);

  function LineAnnotationElement(parameters) {
    _classCallCheck(this, LineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(LineAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(LineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'lineAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var line = this.svgFactory.createElement('svg:line');
      line.setAttribute('x1', data.rect[2] - data.lineCoordinates[0]);
      line.setAttribute('y1', data.rect[3] - data.lineCoordinates[1]);
      line.setAttribute('x2', data.rect[2] - data.lineCoordinates[2]);
      line.setAttribute('y2', data.rect[3] - data.lineCoordinates[3]);
      line.setAttribute('stroke-width', data.borderStyle.width);
      line.setAttribute('stroke', 'transparent');
      svg.appendChild(line);
      this.container.append(svg);

      this._createPopup(this.container, line, data);

      return this.container;
    }
  }]);

  return LineAnnotationElement;
}(AnnotationElement);

var SquareAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement7) {
  _inherits(SquareAnnotationElement, _AnnotationElement7);

  function SquareAnnotationElement(parameters) {
    _classCallCheck(this, SquareAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(SquareAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(SquareAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'squareAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var square = this.svgFactory.createElement('svg:rect');
      square.setAttribute('x', borderWidth / 2);
      square.setAttribute('y', borderWidth / 2);
      square.setAttribute('width', width - borderWidth);
      square.setAttribute('height', height - borderWidth);
      square.setAttribute('stroke-width', borderWidth);
      square.setAttribute('stroke', 'transparent');
      square.setAttribute('fill', 'none');
      svg.appendChild(square);
      this.container.append(svg);

      this._createPopup(this.container, square, data);

      return this.container;
    }
  }]);

  return SquareAnnotationElement;
}(AnnotationElement);

var CircleAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement8) {
  _inherits(CircleAnnotationElement, _AnnotationElement8);

  function CircleAnnotationElement(parameters) {
    _classCallCheck(this, CircleAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(CircleAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(CircleAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'circleAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var circle = this.svgFactory.createElement('svg:ellipse');
      circle.setAttribute('cx', width / 2);
      circle.setAttribute('cy', height / 2);
      circle.setAttribute('rx', width / 2 - borderWidth / 2);
      circle.setAttribute('ry', height / 2 - borderWidth / 2);
      circle.setAttribute('stroke-width', borderWidth);
      circle.setAttribute('stroke', 'transparent');
      circle.setAttribute('fill', 'none');
      svg.appendChild(circle);
      this.container.append(svg);

      this._createPopup(this.container, circle, data);

      return this.container;
    }
  }]);

  return CircleAnnotationElement;
}(AnnotationElement);

var PolylineAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement9) {
  _inherits(PolylineAnnotationElement, _AnnotationElement9);

  function PolylineAnnotationElement(parameters) {
    var _this3;

    _classCallCheck(this, PolylineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PolylineAnnotationElement).call(this, parameters, isRenderable, true));
    _this3.containerClassName = 'polylineAnnotation';
    _this3.svgElementName = 'svg:polyline';
    return _this3;
  }

  _createClass(PolylineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var vertices = data.vertices;
      var points = [];

      for (var i = 0, ii = vertices.length; i < ii; i++) {
        var x = vertices[i].x - data.rect[0];
        var y = data.rect[3] - vertices[i].y;
        points.push(x + ',' + y);
      }

      points = points.join(' ');
      var borderWidth = data.borderStyle.width;
      var polyline = this.svgFactory.createElement(this.svgElementName);
      polyline.setAttribute('points', points);
      polyline.setAttribute('stroke-width', borderWidth);
      polyline.setAttribute('stroke', 'transparent');
      polyline.setAttribute('fill', 'none');
      svg.appendChild(polyline);
      this.container.append(svg);

      this._createPopup(this.container, polyline, data);

      return this.container;
    }
  }]);

  return PolylineAnnotationElement;
}(AnnotationElement);

var PolygonAnnotationElement =
/*#__PURE__*/
function (_PolylineAnnotationEl) {
  _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);

  function PolygonAnnotationElement(parameters) {
    var _this4;

    _classCallCheck(this, PolygonAnnotationElement);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PolygonAnnotationElement).call(this, parameters));
    _this4.containerClassName = 'polygonAnnotation';
    _this4.svgElementName = 'svg:polygon';
    return _this4;
  }

  return PolygonAnnotationElement;
}(PolylineAnnotationElement);

var CaretAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement10) {
  _inherits(CaretAnnotationElement, _AnnotationElement10);

  function CaretAnnotationElement(parameters) {
    _classCallCheck(this, CaretAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(CaretAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(CaretAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'caretAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return CaretAnnotationElement;
}(AnnotationElement);

var InkAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement11) {
  _inherits(InkAnnotationElement, _AnnotationElement11);

  function InkAnnotationElement(parameters) {
    var _this5;

    _classCallCheck(this, InkAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(InkAnnotationElement).call(this, parameters, isRenderable, true));
    _this5.containerClassName = 'inkAnnotation';
    _this5.svgElementName = 'svg:polyline';
    return _this5;
  }

  _createClass(InkAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var inkLists = data.inkLists;

      for (var i = 0, ii = inkLists.length; i < ii; i++) {
        var inkList = inkLists[i];
        var points = [];

        for (var j = 0, jj = inkList.length; j < jj; j++) {
          var x = inkList[j].x - data.rect[0];
          var y = data.rect[3] - inkList[j].y;
          points.push(x + ',' + y);
        }

        points = points.join(' ');
        var borderWidth = data.borderStyle.width;
        var polyline = this.svgFactory.createElement(this.svgElementName);
        polyline.setAttribute('points', points);
        polyline.setAttribute('stroke-width', borderWidth);
        polyline.setAttribute('stroke', 'transparent');
        polyline.setAttribute('fill', 'none');

        this._createPopup(this.container, polyline, data);

        svg.appendChild(polyline);
      }

      this.container.append(svg);
      return this.container;
    }
  }]);

  return InkAnnotationElement;
}(AnnotationElement);

var HighlightAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement12) {
  _inherits(HighlightAnnotationElement, _AnnotationElement12);

  function HighlightAnnotationElement(parameters) {
    _classCallCheck(this, HighlightAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(HighlightAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(HighlightAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'highlightAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return HighlightAnnotationElement;
}(AnnotationElement);

var UnderlineAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement13) {
  _inherits(UnderlineAnnotationElement, _AnnotationElement13);

  function UnderlineAnnotationElement(parameters) {
    _classCallCheck(this, UnderlineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(UnderlineAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(UnderlineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'underlineAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return UnderlineAnnotationElement;
}(AnnotationElement);

var SquigglyAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement14) {
  _inherits(SquigglyAnnotationElement, _AnnotationElement14);

  function SquigglyAnnotationElement(parameters) {
    _classCallCheck(this, SquigglyAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(SquigglyAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(SquigglyAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'squigglyAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return SquigglyAnnotationElement;
}(AnnotationElement);

var StrikeOutAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement15) {
  _inherits(StrikeOutAnnotationElement, _AnnotationElement15);

  function StrikeOutAnnotationElement(parameters) {
    _classCallCheck(this, StrikeOutAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(StrikeOutAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(StrikeOutAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'strikeoutAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return StrikeOutAnnotationElement;
}(AnnotationElement);

var StampAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement16) {
  _inherits(StampAnnotationElement, _AnnotationElement16);

  function StampAnnotationElement(parameters) {
    _classCallCheck(this, StampAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(StampAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(StampAnnotationElement, [{
    key: "render",
    value:
  }]);

  return StampAnnotationElement;
}(AnnotationElement);

var FileAttachmentAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement17) {
  _inherits(FileAttachmentAnnotationElement, _AnnotationElement17);

  function FileAttachmentAnnotationElement(parameters) {
    var _this6;

    _classCallCheck(this, FileAttachmentAnnotationElement);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(FileAttachmentAnnotationElement).call(this, parameters, true));
    var _this6$data$file = _this6.data.file,
        filename = _this6$data$file.filename,
        content = _this6$data$file.content;
    _this6.filename = (0, _display_utils.getFilenameFromUrl)(filename);
    _this6.content = content;

    if (_this6.linkService.eventBus) {
      _this6.linkService.eventBus.dispatch('fileattachmentannotation', {
        source: _assertThisInitialized(_this6),
        id: (0, _util.stringToPDFString)(filename),
        filename: filename,
        content: content
      });
    }

    return _this6;
  }

  _createClass(FileAttachmentAnnotationElement, [{
    key: "render",
    value:
  }, {
    key: "_download",
    value: function _download() {
      if (!this.downloadManager) {
        (0, _util.warn)('Download cannot be started due to unavailable download manager');
        return;
      }

      this.downloadManager.downloadData(this.content, this.filename, '');
    }
  }]);

  return FileAttachmentAnnotationElement;
}(AnnotationElement);

var AnnotationLayer =
/*#__PURE__*/
function () {
 

  _createClass(AnnotationLayer, null, [{
    key: "render",
    value: function render(parameters) {
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
        var data = parameters.annotations[i];

        if (!data) {
          continue;
        }

        var element = AnnotationElementFactory.create({
          data: data,
          layer: parameters.div,
          page: parameters.page,
          viewport: parameters.viewport,
          linkService: parameters.linkService,
          downloadManager: parameters.downloadManager,
          imageResourcesPath: parameters.imageResourcesPath || '',
          renderInteractiveForms: parameters.renderInteractiveForms || false,
          svgFactory: new _display_utils.DOMSVGFactory()
        });

        if (element.isRenderable) {
          parameters.div.appendChild(element.render());
        }
      }
    }
  }, {
    key: "update",
    value: function update(parameters) {
      for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
        var data = parameters.annotations[i];
        var element = parameters.div.querySelector('[data-annotation-id="' + data.id + '"]');

        if (element) {
          element.style.transform = 'matrix(' + parameters.viewport.transform.join(',') + ')';
        }
      }

      parameters.div.removeAttribute('hidden');
    }
  }]);

  return AnnotationLayer;
}();

exports.AnnotationLayer = AnnotationLayer;

/***/ }),
/* 164 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGGraphics = void 0;

var _util = __w_pdfjs_require__(1);

var _display_utils = __w_pdfjs_require__(151);

var _is_node = _interopRequireDefault(__w_pdfjs_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SVGGraphics =;

exports.SVGGraphics = SVGGraphics;
{
  var opListToTree = function opListToTree(opList) {
    var opTree = [];
    var tmp = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = opList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var opListElement = _step.value;

        if (opListElement.fn === 'save') {
          opTree.push({
            'fnId': 92,
            'fn': 'group',
            'items': []
          });
          tmp.push(opTree);
          opTree = opTree[opTree.length - 1].items;
          continue;
        }

        if (opListElement.fn === 'restore') {
          opTree = tmp.pop();
        } else {
          opTree.push(opListElement);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return opTree;
  };

  var pf = function pf(value) {
    if (Number.isInteger(value)) {
      return value.toString();
    }

    var s = value.toFixed(10);
    var i = s.length - 1;

    if (s[i] !== '0') {
      return s;
    }

    do {
      i--;
    } while (s[i] === '0');

    return s.substring(0, s[i] === '.' ? i : i + 1);
  };

  var pm = function pm(m) {
    if (m[4] === 0 && m[5] === 0) {
      if (m[1] === 0 && m[2] === 0) {
        if (m[0] === 1 && m[3] === 1) {
          return '';
        }

        return "scale(".concat(pf(m[0]), " ").concat(pf(m[3]), ")");
      }

      if (m[0] === m[3] && m[1] === -m[2]) {
        var a = Math.acos(m[0]) * 180 / Math.PI;
        return "rotate(".concat(pf(a), ")");
      }
    } else {
      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
        return "translate(".concat(pf(m[4]), " ").concat(pf(m[5]), ")");
      }
    }

    return "matrix(".concat(pf(m[0]), " ").concat(pf(m[1]), " ").concat(pf(m[2]), " ").concat(pf(m[3]), " ").concat(pf(m[4]), " ") + "".concat(pf(m[5]), ")");
  };

  var SVG_DEFAULTS = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fillColor: '#000000'
  };
  var XML_NS = 'http://www.w3.org/XML/1998/namespace';
  var XLINK_NS = 'http://www.w3.org/1999/xlink';
  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];

  var convertImgDataToPng = function () {
    var PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    var CHUNK_WRAPPER_SIZE = 12;
    var crcTable = new Int32Array(256);

    for (var i = 0; i < 256; i++) {
      var c = i;

      for (var h = 0; h < 8; h++) {
        if (c & 1) {
          c = 0xedB88320 ^ c >> 1 & 0x7fffffff;
        } else {
          c = c >> 1 & 0x7fffffff;
        }
      }

      crcTable[i] = c;
    }

   

   

   

    function deflateSync(literals) {
      if (!(0, _is_node["default"])()) {
        return deflateSyncUncompressed(literals);
      }

      try {
        var input;

        if (parseInt(process.versions.node) >= 8) {
          input = literals;
        } else {
          input = new Buffer(literals);
        }

        var output = require('zlib').deflateSync(input, {
          level: 9
        });

        return output instanceof Uint8Array ? output : new Uint8Array(output);
      } catch (e) {
        (0, _util.warn)('Not compressing PNG because zlib.deflateSync is unavailable: ' + e);
      }

      return deflateSyncUncompressed(literals);
    }

    function deflateSyncUncompressed(literals) {
      var len = literals.length;
      var maxBlockLength = 0xFFFF;
      var deflateBlocks = Math.ceil(len / maxBlockLength);
      var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
      var pi = 0;
      idat[pi++] = 0x78;
      idat[pi++] = 0x9c;
      var pos = 0;

      while (len > maxBlockLength) {
        idat[pi++] = 0x00;
        idat[pi++] = 0xff;
        idat[pi++] = 0xff;
        idat[pi++] = 0x00;
        idat[pi++] = 0x00;
        idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
        pi += maxBlockLength;
        pos += maxBlockLength;
        len -= maxBlockLength;
      }

      idat[pi++] = 0x01;
      idat[pi++] = len & 0xff;
      idat[pi++] = len >> 8 & 0xff;
      idat[pi++] = ~len & 0xffff & 0xff;
      idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
      idat.set(literals.subarray(pos), pi);
      pi += literals.length - pos;
      var adler = adler32(literals, 0, literals.length);
      idat[pi++] = adler >> 24 & 0xff;
      idat[pi++] = adler >> 16 & 0xff;
      idat[pi++] = adler >> 8 & 0xff;
      idat[pi++] = adler & 0xff;
      return idat;
    }

    function encode(imgData, kind, forceDataSchema, isMask) {
      var width = imgData.width;
      var height = imgData.height;
      var bitDepth, colorType, lineSize;
      var bytes = imgData.data;

      switch (kind) {
        case _util.ImageKind.GRAYSCALE_1BPP:
          colorType = 0;
          bitDepth = 1;
          lineSize = width + 7 >> 3;
          break;

        case _util.ImageKind.RGB_24BPP:
          colorType = 2;
          bitDepth = 8;
          lineSize = width * 3;
          break;

        case _util.ImageKind.RGBA_32BPP:
          colorType = 6;
          bitDepth = 8;
          lineSize = width * 4;
          break;

        default:
          throw new Error('invalid format');
      }

      var literals = new Uint8Array((1 + lineSize) * height);
      var offsetLiterals = 0,
          offsetBytes = 0;

      for (var y = 0; y < height; ++y) {
        literals[offsetLiterals++] = 0;
        literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
        offsetBytes += lineSize;
        offsetLiterals += lineSize;
      }

      if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
        offsetLiterals = 0;

        for (var _y = 0; _y < height; _y++) {
          offsetLiterals++;

          for (var _i3 = 0; _i3 < lineSize; _i3++) {
            literals[offsetLiterals++] ^= 0xFF;
          }
        }
      }

      var ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
      var idat = deflateSync(literals);
      var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
      var data = new Uint8Array(pngLength);
      var offset = 0;
      data.set(PNG_HEADER, offset);
      offset += PNG_HEADER.length;
      writePngChunk('IHDR', ihdr, data, offset);
      offset += CHUNK_WRAPPER_SIZE + ihdr.length;
      writePngChunk('IDATA', idat, data, offset);
      offset += CHUNK_WRAPPER_SIZE + idat.length;
      writePngChunk('IEND', new Uint8Array(0), data, offset);
      return (0, _util.createObjectURL)(data, 'image/png', forceDataSchema);
    }

    return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
      var kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
      return encode(imgData, kind, forceDataSchema, isMask);
    };
  }();

  var SVGExtraState =
  /*#__PURE__*/
  function () {
    function SVGExtraState() {
      _classCallCheck(this, SVGExtraState);

      this.fontSizeScale = 1;
      this.fontWeight = SVG_DEFAULTS.fontWeight;
      this.fontSize = 0;
      this.textMatrix = _util.IDENTITY_MATRIX;
      this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
      this.leading = 0;
      this.textRenderingMode = _util.TextRenderingMode.FILL;
      this.textMatrixScale = 1;
      this.x = 0;
      this.y = 0;
      this.lineX = 0;
      this.lineY = 0;
      this.charSpacing = 0;
      this.wordSpacing = 0;
      this.textHScale = 1;
      this.textRise = 0;
      this.fillColor = SVG_DEFAULTS.fillColor;
      this.strokeColor = '#000000';
      this.fillAlpha = 1;
      this.strokeAlpha = 1;
      this.lineWidth = 1;
      this.lineJoin = '';
      this.lineCap = '';
      this.miterLimit = 0;
      this.dashArray = [];
      this.dashPhase = 0;
      this.dependencies = [];
      this.activeClipUrl = null;
      this.clipGroup = null;
      this.maskId = '';
    }

    _createClass(SVGExtraState, [{
      key: "clone",
      value:
    }, {
      key: "setCurrentPoint",
      value:
    }]);

    return SVGExtraState;
  }();

  var clipCount = 0;
  var maskCount = 0;
  var shadingCount = 0;

  exports.SVGGraphics = SVGGraphics =
  /*#__PURE__*/
  function () {
    function SVGGraphics(commonObjs, objs, forceDataSchema) {
      _classCallCheck(this, SVGGraphics);

      this.svgFactory = new _display_utils.DOMSVGFactory();
      this.current = new SVGExtraState();
      this.transformMatrix = _util.IDENTITY_MATRIX;
      this.transformStack = [];
      this.extraStack = [];
      this.commonObjs = commonObjs;
      this.objs = objs;
      this.pendingClip = null;
      this.pendingEOFill = false;
      this.embedFonts = false;
      this.embeddedFonts = Object.create(null);
      this.cssStyle = null;
      this.forceDataSchema = !!forceDataSchema;
      this._operatorIdMapping = [];

      for (var op in _util.OPS) {
        this._operatorIdMapping[_util.OPS[op]] = op;
      }
    }

    _createClass(SVGGraphics, [{
      key: "save",
      value:
    }, {
      key: "restore",
      value: function restore() {
        this.transformMatrix = this.transformStack.pop();
        this.current = this.extraStack.pop();
        this.pendingClip = null;
        this.tgrp = null;
      }
    }, {
      key: "group",
      value:
    }, {
      key: "loadDependencies",
      value: function loadDependencies(operatorList) {
        var _this = this;

        var fnArray = operatorList.fnArray;
        var argsArray = operatorList.argsArray;

        for (var i = 0, ii = fnArray.length; i < ii; i++) {
          if (fnArray[i] !== _util.OPS.dependency) {
            continue;
          }

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop = function _loop() {
              var obj = _step2.value;
              var objsPool = obj.startsWith('g_') ? _this.commonObjs : _this.objs;
              var promise = new Promise);

              _this.current.dependencies.push(promise);
            };

            for (var _iterator2 = argsArray[i][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        return Promise.all(this.current.dependencies);
      }
    }, {
      key: "transform",
      value: function transform(a, b, c, d, e, f) {
        var transformMatrix = [a, b, c, d, e, f];
        this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
        this.tgrp = null;
      }
    }, {
      key: "getSVG",
      value: function getSVG(operatorList, viewport) {
        var _this2 = this;

        this.viewport = viewport;

        var svgElement = this._initialize(viewport);

        return this.loadDependencies(operatorList).then(function () {
          _this2.transformMatrix = _util.IDENTITY_MATRIX;

          _this2.executeOpTree(_this2.convertOpList(operatorList));

          return svgElement;
        });
      }
    }, {
      key: "convertOpList",
      value: function convertOpList(operatorList) {
        var operatorIdMapping = this._operatorIdMapping;
        var argsArray = operatorList.argsArray;
        var fnArray = operatorList.fnArray;
        var opList = [];

        for (var i = 0, ii = fnArray.length; i < ii; i++) {
          var fnId = fnArray[i];
          opList.push({
            'fnId': fnId,
            'fn': operatorIdMapping[fnId],
            'args': argsArray[i]
          });
        }

        return opListToTree(opList);
      }
    }, {
      key: "executeOpTree",
      value: function executeOpTree(opTree) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = opTree[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var opTreeElement = _step3.value;
            var fn = opTreeElement.fn;
            var fnId = opTreeElement.fnId;
            var args = opTreeElement.args;

            switch (fnId | 0) {
              case _util.OPS.beginText:
                this.beginText();
                break;

              case _util.OPS.dependency:
                break;

              case _util.OPS.setLeading:
                this.setLeading(args);
                break;

              case _util.OPS.setLeadingMoveText:
                this.setLeadingMoveText(args[0], args[1]);
                break;

              case _util.OPS.setFont:
                this.setFont(args);
                break;

              case _util.OPS.showText:
                this.showText(args[0]);
                break;

              case _util.OPS.showSpacedText:
                this.showText(args[0]);
                break;

              case _util.OPS.endText:
                this.endText();
                break;

              case _util.OPS.moveText:
                this.moveText(args[0], args[1]);
                break;

              case _util.OPS.setCharSpacing:
                this.setCharSpacing(args[0]);
                break;

              case _util.OPS.setWordSpacing:
                this.setWordSpacing(args[0]);
                break;

              case _util.OPS.setHScale:
                this.setHScale(args[0]);
                break;

              case _util.OPS.setTextMatrix:
                this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                break;

              case _util.OPS.setTextRise:
                this.setTextRise(args[0]);
                break;

              case _util.OPS.setTextRenderingMode:
                this.setTextRenderingMode(args[0]);
                break;

              case _util.OPS.setLineWidth:
                this.setLineWidth(args[0]);
                break;

              case _util.OPS.setLineJoin:
                this.setLineJoin(args[0]);
                break;

              case _util.OPS.setLineCap:
                this.setLineCap(args[0]);
                break;

              case _util.OPS.setMiterLimit:
                this.setMiterLimit(args[0]);
                break;

              case _util.OPS.setFillRGBColor:
                this.setFillRGBColor(args[0], args[1], args[2]);
                break;

              case _util.OPS.setStrokeRGBColor:
                this.setStrokeRGBColor(args[0], args[1], args[2]);
                break;

              case _util.OPS.setStrokeColorN:
                this.setStrokeColorN(args);
                break;

              case _util.OPS.setFillColorN:
                this.setFillColorN(args);
                break;

              case _util.OPS.shadingFill:
                this.shadingFill(args[0]);
                break;

              case _util.OPS.setDash:
                this.setDash(args[0], args[1]);
                break;

              case _util.OPS.setRenderingIntent:
                this.setRenderingIntent(args[0]);
                break;

              case _util.OPS.setFlatness:
                this.setFlatness(args[0]);
                break;

              case _util.OPS.setGState:
                this.setGState(args[0]);
                break;

              case _util.OPS.fill:
                this.fill();
                break;

              case _util.OPS.eoFill:
                this.eoFill();
                break;

              case _util.OPS.stroke:
                this.stroke();
                break;

              case _util.OPS.fillStroke:
                this.fillStroke();
                break;

              case _util.OPS.eoFillStroke:
                this.eoFillStroke();
                break;

              case _util.OPS.clip:
                this.clip('nonzero');
                break;

              case _util.OPS.eoClip:
                this.clip('evenodd');
                break;

              case _util.OPS.paintSolidColorImageMask:
                this.paintSolidColorImageMask();
                break;

              case _util.OPS.paintJpegXObject:
                this.paintJpegXObject(args[0], args[1], args[2]);
                break;

              case _util.OPS.paintImageXObject:
                this.paintImageXObject(args[0]);
                break;

              case _util.OPS.paintInlineImageXObject:
                this.paintInlineImageXObject(args[0]);
                break;

              case _util.OPS.paintImageMaskXObject:
                this.paintImageMaskXObject(args[0]);
                break;

              case _util.OPS.paintFormXObjectBegin:
                this.paintFormXObjectBegin(args[0], args[1]);
                break;

              case _util.OPS.paintFormXObjectEnd:
                this.paintFormXObjectEnd();
                break;

              case _util.OPS.closePath:
                this.closePath();
                break;

              case _util.OPS.closeStroke:
                this.closeStroke();
                break;

              case _util.OPS.closeFillStroke:
                this.closeFillStroke();
                break;

              case _util.OPS.closeEOFillStroke:
                this.closeEOFillStroke();
                break;

              case _util.OPS.nextLine:
                this.nextLine();
                break;

              case _util.OPS.transform:
                this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                break;

              case _util.OPS.constructPath:
                this.constructPath(args[0], args[1]);
                break;

              case _util.OPS.endPath:
                this.endPath();
                break;

              case 92:
                this.group(opTreeElement.items);
                break;

              default:
                (0, _util.warn)("Unimplemented operator ".concat(fn));
                break;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "setWordSpacing",
      value: function setWordSpacing(wordSpacing) {
        this.current.wordSpacing = wordSpacing;
      }
    }, {
      key: "setCharSpacing",
      value: function setCharSpacing(charSpacing) {
        this.current.charSpacing = charSpacing;
      }
    }, {
      key: "nextLine",
      value:
    }, {
      key: "setTextMatrix",
      value: function setTextMatrix(a, b, c, d, e, f) {
        var current = this.current;
        current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
        current.textMatrixScale = Math.sqrt(a * a + b * b);
        current.x = current.lineX = 0;
        current.y = current.lineY = 0;
        current.xcoords = [];
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', "".concat(pf(current.fontSize), "px"));
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.txtElement = this.svgFactory.createElement('svg:text');
        current.txtElement.appendChild(current.tspan);
      }
    }, {
      key: "beginText",
      value: function beginText() {
        var current = this.current;
        current.x = current.lineX = 0;
        current.y = current.lineY = 0;
        current.textMatrix = _util.IDENTITY_MATRIX;
        current.lineMatrix = _util.IDENTITY_MATRIX;
        current.textMatrixScale = 1;
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.txtElement = this.svgFactory.createElement('svg:text');
        current.txtgrp = this.svgFactory.createElement('svg:g');
        current.xcoords = [];
      }
    }, {
      key: "moveText",
      value: function moveText(x, y) {
        var current = this.current;
        current.x = current.lineX += x;
        current.y = current.lineY += y;
        current.xcoords = [];
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', "".concat(pf(current.fontSize), "px"));
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      }
    }, {
      key: "showText",
      value: function showText(glyphs) {
        var current = this.current;
        var font = current.font;
        var fontSize = current.fontSize;

        if (fontSize === 0) {
          return;
        }

        var charSpacing = current.charSpacing;
        var wordSpacing = current.wordSpacing;
        var fontDirection = current.fontDirection;
        var textHScale = current.textHScale * fontDirection;
        var vertical = font.vertical;
        var widthAdvanceScale = fontSize * current.fontMatrix[0];
        var x = 0;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = glyphs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var glyph = _step4.value;

            if (glyph === null) {
              x += fontDirection * wordSpacing;
              continue;
            } else if ((0, _util.isNum)(glyph)) {
              x += -glyph * fontSize * 0.001;
              continue;
            }

            var width = glyph.width;
            var character = glyph.fontChar;
            var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
            var charWidth = width * widthAdvanceScale + spacing * fontDirection;

            if (!glyph.isInFont && !font.missingFile) {
              x += charWidth;
              continue;
            }

            current.xcoords.push(current.x + x * textHScale);
            current.tspan.textContent += character;
            x += charWidth;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        if (vertical) {
          current.y -= x * textHScale;
        } else {
          current.x += x * textHScale;
        }

        current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', "".concat(pf(current.fontSize), "px"));

        if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
          current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
        }

        if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
          current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
        }

        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          if (current.fillColor !== SVG_DEFAULTS.fillColor) {
            current.tspan.setAttributeNS(null, 'fill', current.fillColor);
          }

          if (current.fillAlpha < 1) {
            current.tspan.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
          }
        } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
          current.tspan.setAttributeNS(null, 'fill', 'transparent');
        } else {
          current.tspan.setAttributeNS(null, 'fill', 'none');
        }

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          var lineWidthScale = 1 / (current.textMatrixScale || 1);

          this._setStrokeAttributes(current.tspan, lineWidthScale);
        }

        var textMatrix = current.textMatrix;

        if (current.textRise !== 0) {
          textMatrix = textMatrix.slice();
          textMatrix[5] += current.textRise;
        }

        current.txtElement.setAttributeNS(null, 'transform', "".concat(pm(textMatrix), " scale(1, -1)"));
        current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
        current.txtElement.appendChild(current.tspan);
        current.txtgrp.appendChild(current.txtElement);

        this._ensureTransformGroup().appendChild(current.txtElement);
      }
    }, {
      key: "setLeadingMoveText",
      value:
    }, {
      key: "addFontStyle",
      value: function addFontStyle(fontObj) {
        if (!this.cssStyle) {
          this.cssStyle = this.svgFactory.createElement('svg:style');
          this.cssStyle.setAttributeNS(null, 'type', 'text/css');
          this.defs.appendChild(this.cssStyle);
        }

        var url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
        this.cssStyle.textContent += "@font-face { font-family: \"".concat(fontObj.loadedName, "\";") + " src: url(".concat(url, "); }\n");
      }
    }, {
      key: "setFont",
      value: function setFont(details) {
        var current = this.current;
        var fontObj = this.commonObjs.get(details[0]);
        var size = details[1];
        current.font = fontObj;

        if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
          this.addFontStyle(fontObj);
          this.embeddedFonts[fontObj.loadedName] = fontObj;
        }

        current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
        var bold = fontObj.black ? fontObj.bold ? 'bolder' : 'bold' : fontObj.bold ? 'bold' : 'normal';
        var italic = fontObj.italic ? 'italic' : 'normal';

        if (size < 0) {
          size = -size;
          current.fontDirection = -1;
        } else {
          current.fontDirection = 1;
        }

        current.fontSize = size;
        current.fontFamily = fontObj.loadedName;
        current.fontWeight = bold;
        current.fontStyle = italic;
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.xcoords = [];
      }
    }, {
      key: "endText",
      value: function endText() {
        var current = this.current;

        if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement && current.txtElement.hasChildNodes()) {
          current.element = current.txtElement;
          this.clip('nonzero');
          this.endPath();
        }
      }
    }, {
      key: "setLineWidth",
      value: function setLineWidth(width) {
        if (width > 0) {
          this.current.lineWidth = width;
        }
      }
    }, {
      key: "setLineCap",
      value: function setLineCap(style) {
        this.current.lineCap = LINE_CAP_STYLES[style];
      }
    }, {
      key: "setLineJoin",
      value:
    }, {
      key: "setMiterLimit",
      value: function setMiterLimit(limit) {
        this.current.miterLimit = limit;
      }
    }, {
      key: "setStrokeAlpha",
      value: function setStrokeAlpha(strokeAlpha) {
        this.current.strokeAlpha = strokeAlpha;
      }
    }, {
      key: "setStrokeRGBColor",
      value:
    }, {
      key: "setFillAlpha",
      value: function setFillAlpha(fillAlpha) {
        this.current.fillAlpha = fillAlpha;
      }
    }, {
      key: "setFillRGBColor",
      value: function setFillRGBColor(r, g, b) {
        this.current.fillColor = _util.Util.makeCssRgb(r, g, b);
        this.current.tspan = this.svgFactory.createElement('svg:tspan');
        this.current.xcoords = [];
      }
    }, {
      key: "setStrokeColorN",
      value: function setStrokeColorN(args) {
        this.current.strokeColor = this._makeColorN_Pattern(args);
      }
    }, {
      key: "setFillColorN",
      value:
    }, {
      key: "shadingFill",
      value: function shadingFill(args) {
        var width = this.viewport.width;
        var height = this.viewport.height;

        var inv = _util.Util.inverseTransform(this.transformMatrix);

        var bl = _util.Util.applyTransform([0, 0], inv);

        var br = _util.Util.applyTransform([0, height], inv);

        var ul = _util.Util.applyTransform([width, 0], inv);

        var ur = _util.Util.applyTransform([width, height], inv);

        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', x0);
        rect.setAttributeNS(null, 'y', y0);
        rect.setAttributeNS(null, 'width', x1 - x0);
        rect.setAttributeNS(null, 'height', y1 - y0);
        rect.setAttributeNS(null, 'fill', this._makeShadingPattern(args));

        this._ensureTransformGroup().appendChild(rect);
      }
    }, {
      key: "_makeColorN_Pattern",
      value: function _makeColorN_Pattern(args) {
        if (args[0] === 'TilingPattern') {
          return this._makeTilingPattern(args);
        }

        return this._makeShadingPattern(args);
      }
    }, {
      key: "_makeTilingPattern",
      value: function _makeTilingPattern(args) {
        var color = args[1];
        var operatorList = args[2];
        var matrix = args[3] || _util.IDENTITY_MATRIX;

        var _args$ = _slicedToArray(args[4], 4),
            x0 = _args$[0],
            y0 = _args$[1],
            x1 = _args$[2],
            y1 = _args$[3];

        var xstep = args[5];
        var ystep = args[6];
        var paintType = args[7];
        var tilingId = "shading".concat(shadingCount++);

        var _Util$applyTransform = _util.Util.applyTransform([x0, y0], matrix),
            _Util$applyTransform2 = _slicedToArray(_Util$applyTransform, 2),
            tx0 = _Util$applyTransform2[0],
            ty0 = _Util$applyTransform2[1];

        var _Util$applyTransform3 = _util.Util.applyTransform([x1, y1], matrix),
            _Util$applyTransform4 = _slicedToArray(_Util$applyTransform3, 2),
            tx1 = _Util$applyTransform4[0],
            ty1 = _Util$applyTransform4[1];

        var _Util$singularValueDe = _util.Util.singularValueDecompose2dScale(matrix),
            _Util$singularValueDe2 = _slicedToArray(_Util$singularValueDe, 2),
            xscale = _Util$singularValueDe2[0],
            yscale = _Util$singularValueDe2[1];

        var txstep = xstep * xscale;
        var tystep = ystep * yscale;
        var tiling = this.svgFactory.createElement('svg:pattern');
        tiling.setAttributeNS(null, 'id', tilingId);
        tiling.setAttributeNS(null, 'patternUnits', 'userSpaceOnUse');
        tiling.setAttributeNS(null, 'width', txstep);
        tiling.setAttributeNS(null, 'height', tystep);
        tiling.setAttributeNS(null, 'x', "".concat(tx0));
        tiling.setAttributeNS(null, 'y', "".concat(ty0));
        var svg = this.svg;
        var transformMatrix = this.transformMatrix;
        var fillColor = this.current.fillColor;
        var strokeColor = this.current.strokeColor;
        var bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
        this.svg = bbox;
        this.transformMatrix = matrix;

        if (paintType === 2) {
          var cssColor = _util.Util.makeCssRgb.apply(_util.Util, _toConsumableArray(color));

          this.current.fillColor = cssColor;
          this.current.strokeColor = cssColor;
        }

        this.executeOpTree(this.convertOpList(operatorList));
        this.svg = svg;
        this.transformMatrix = transformMatrix;
        this.current.fillColor = fillColor;
        this.current.strokeColor = strokeColor;
        tiling.appendChild(bbox.childNodes[0]);
        this.defs.appendChild(tiling);
        return "url(#".concat(tilingId, ")");
      }
    }, {
      key: "_makeShadingPattern",
      value: function _makeShadingPattern(args) {
        switch (args[0]) {
          case 'RadialAxial':
            var shadingId = "shading".concat(shadingCount++);
            var colorStops = args[2];
            var gradient;

            switch (args[1]) {
              case 'axial':
                var point0 = args[3];
                var point1 = args[4];
                gradient = this.svgFactory.createElement('svg:linearGradient');
                gradient.setAttributeNS(null, 'id', shadingId);
                gradient.setAttributeNS(null, 'gradientUnits', 'userSpaceOnUse');
                gradient.setAttributeNS(null, 'x1', point0[0]);
                gradient.setAttributeNS(null, 'y1', point0[1]);
                gradient.setAttributeNS(null, 'x2', point1[0]);
                gradient.setAttributeNS(null, 'y2', point1[1]);
                break;

              case 'radial':
                var focalPoint = args[3];
                var circlePoint = args[4];
                var focalRadius = args[5];
                var circleRadius = args[6];
                gradient = this.svgFactory.createElement('svg:radialGradient');
                gradient.setAttributeNS(null, 'id', shadingId);
                gradient.setAttributeNS(null, 'gradientUnits', 'userSpaceOnUse');
                gradient.setAttributeNS(null, 'cx', circlePoint[0]);
                gradient.setAttributeNS(null, 'cy', circlePoint[1]);
                gradient.setAttributeNS(null, 'r', circleRadius);
                gradient.setAttributeNS(null, 'fx', focalPoint[0]);
                gradient.setAttributeNS(null, 'fy', focalPoint[1]);
                gradient.setAttributeNS(null, 'fr', focalRadius);
                break;

              default:
                throw new Error("Unknown RadialAxial type: ".concat(args[1]));
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = colorStops[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var colorStop = _step5.value;
                var stop = this.svgFactory.createElement('svg:stop');
                stop.setAttributeNS(null, 'offset', colorStop[0]);
                stop.setAttributeNS(null, 'stop-color', colorStop[1]);
                gradient.appendChild(stop);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            this.defs.appendChild(gradient);
            return "url(#".concat(shadingId, ")");

          case 'Mesh':
            (0, _util.warn)('Unimplemented pattern Mesh');
            return null;

          case 'Dummy':
            return 'hotpink';

          default:
            throw new Error("Unknown IR type: ".concat(args[0]));
        }
      }
    }, {
      key: "setDash",
      value:
    }, {
      key: "constructPath",
      value: function constructPath(ops, args) {
        var current = this.current;
        var x = current.x,
            y = current.y;
        var d = [];
        var j = 0;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = ops[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var op = _step6.value;

            switch (op | 0) {
              case _util.OPS.rectangle:
                x = args[j++];
                y = args[j++];
                var width = args[j++];
                var height = args[j++];
                var xw = x + width;
                var yh = y + height;
                d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
                break;

              case _util.OPS.moveTo:
                x = args[j++];
                y = args[j++];
                d.push('M', pf(x), pf(y));
                break;

              case _util.OPS.lineTo:
                x = args[j++];
                y = args[j++];
                d.push('L', pf(x), pf(y));
                break;

              case _util.OPS.curveTo:
                x = args[j + 4];
                y = args[j + 5];
                d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                j += 6;
                break;

              case _util.OPS.curveTo2:
                x = args[j + 2];
                y = args[j + 3];
                d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                j += 4;
                break;

              case _util.OPS.curveTo3:
                x = args[j + 2];
                y = args[j + 3];
                d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                j += 4;
                break;

              case _util.OPS.closePath:
                d.push('Z');
                break;
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        d = d.join(' ');

        if (current.path && ops.length > 0 && ops[0] !== _util.OPS.rectangle && ops[0] !== _util.OPS.moveTo) {
          d = current.path.getAttributeNS(null, 'd') + d;
        } else {
          current.path = this.svgFactory.createElement('svg:path');

          this._ensureTransformGroup().appendChild(current.path);
        }

        current.path.setAttributeNS(null, 'd', d);
        current.path.setAttributeNS(null, 'fill', 'none');
        current.element = current.path;
        current.setCurrentPoint(x, y);
      }
    }, {
      key: "endPath",
      value: function endPath() {
        var current = this.current;
        current.path = null;

        if (!this.pendingClip) {
          return;
        }

        if (!current.element) {
          this.pendingClip = null;
          return;
        }

        var clipId = "clippath".concat(clipCount++);
        var clipPath = this.svgFactory.createElement('svg:clipPath');
        clipPath.setAttributeNS(null, 'id', clipId);
        clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
        var clipElement = current.element.cloneNode(true);

        if (this.pendingClip === 'evenodd') {
          clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
        } else {
          clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
        }

        this.pendingClip = null;
        clipPath.appendChild(clipElement);
        this.defs.appendChild(clipPath);

        if (current.activeClipUrl) {
          current.clipGroup = null;
          this.extraStack.forEach);
          clipPath.setAttributeNS(null, 'clip-path', current.activeClipUrl);
        }

        current.activeClipUrl = "url(#".concat(clipId, ")");
        this.tgrp = null;
      }
    }, {
      key: "clip",
      value:
    }, {
      key: "closePath",
      value:
    }, {
      key: "setLeading",
      value:
    }, {
      key: "setTextRise",
      value: function setTextRise(textRise) {
        this.current.textRise = textRise;
      }
    }, {
      key: "setTextRenderingMode",
      value:
    }, {
      key: "setHScale",
      value:
    }, {
      key: "setRenderingIntent",
      value: function setRenderingIntent(intent) {}
    }, {
      key: "setFlatness",
      value:
    }, {
      key: "setGState",
      value: function setGState(states) {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = states[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _step7$value = _slicedToArray(_step7.value, 2),
                key = _step7$value[0],
                value = _step7$value[1];

            switch (key) {
              case 'LW':
                this.setLineWidth(value);
                break;

              case 'LC':
                this.setLineCap(value);
                break;

              case 'LJ':
                this.setLineJoin(value);
                break;

              case 'ML':
                this.setMiterLimit(value);
                break;

              case 'D':
                this.setDash(value[0], value[1]);
                break;

              case 'RI':
                this.setRenderingIntent(value);
                break;

              case 'FL':
                this.setFlatness(value);
                break;

              case 'Font':
                this.setFont(value);
                break;

              case 'CA':
                this.setStrokeAlpha(value);
                break;

              case 'ca':
                this.setFillAlpha(value);
                break;

              default:
                (0, _util.warn)("Unimplemented graphic state operator ".concat(key));
                break;
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }
    }, {
      key: "fill",
      value: function fill() {
        var current = this.current;

        if (current.element) {
          current.element.setAttributeNS(null, 'fill', current.fillColor);
          current.element.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
          this.endPath();
        }
      }
    }, {
      key: "stroke",
      value: function stroke() {
        var current = this.current;

        if (current.element) {
          this._setStrokeAttributes(current.element);

          current.element.setAttributeNS(null, 'fill', 'none');
          this.endPath();
        }
      }
    }, {
      key: "_setStrokeAttributes",
      value: function _setStrokeAttributes(element) {
        var lineWidthScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var current = this.current;
        var dashArray = current.dashArray;

        if (lineWidthScale !== 1 && dashArray.length > 0) {
          dashArray = dashArray.map);
        }

        element.setAttributeNS(null, 'stroke', current.strokeColor);
        element.setAttributeNS(null, 'stroke-opacity', current.strokeAlpha);
        element.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
        element.setAttributeNS(null, 'stroke-linecap', current.lineCap);
        element.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
        element.setAttributeNS(null, 'stroke-width', pf(lineWidthScale * current.lineWidth) + 'px');
        element.setAttributeNS(null, 'stroke-dasharray', dashArray.map(pf).join(' '));
        element.setAttributeNS(null, 'stroke-dashoffset', pf(lineWidthScale * current.dashPhase) + 'px');
      }
    }, {
      key: "eoFill",
      value: function eoFill() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
        }

        this.fill();
      }
    }, {
      key: "fillStroke",
      value: function fillStroke() {
        this.stroke();
        this.fill();
      }
    }, {
      key: "eoFillStroke",
      value: function eoFillStroke() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
        }

        this.fillStroke();
      }
    }, {
      key: "closeStroke",
      value: function closeStroke() {
        this.closePath();
        this.stroke();
      }
    }, {
      key: "closeFillStroke",
      value: function closeFillStroke() {
        this.closePath();
        this.fillStroke();
      }
    }, {
      key: "closeEOFillStroke",
      value:
    }, {
      key: "paintSolidColorImageMask",
      value: function paintSolidColorImageMask() {
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', '1px');
        rect.setAttributeNS(null, 'height', '1px');
        rect.setAttributeNS(null, 'fill', this.current.fillColor);

        this._ensureTransformGroup().appendChild(rect);
      }
    }, {
      key: "paintJpegXObject",
      value: function paintJpegXObject(objId, w, h) {
        var imgObj = this.objs.get(objId);
        var imgEl = this.svgFactory.createElement('svg:image');
        imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
        imgEl.setAttributeNS(null, 'width', pf(w));
        imgEl.setAttributeNS(null, 'height', pf(h));
        imgEl.setAttributeNS(null, 'x', '0');
        imgEl.setAttributeNS(null, 'y', pf(-h));
        imgEl.setAttributeNS(null, 'transform', "scale(".concat(pf(1 / w), " ").concat(pf(-1 / h), ")"));

        this._ensureTransformGroup().appendChild(imgEl);
      }
    }, {
      key: "paintImageXObject",
      value: function paintImageXObject(objId) {
        var imgData = this.objs.get(objId);

        if (!imgData) {
          (0, _util.warn)("Dependent image with object ID ".concat(objId, " is not ready yet"));
          return;
        }

        this.paintInlineImageXObject(imgData);
      }
    }, {
      key: "paintInlineImageXObject",
      value: function paintInlineImageXObject(imgData, mask) {
        var width = imgData.width;
        var height = imgData.height;
        var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
        var cliprect = this.svgFactory.createElement('svg:rect');
        cliprect.setAttributeNS(null, 'x', '0');
        cliprect.setAttributeNS(null, 'y', '0');
        cliprect.setAttributeNS(null, 'width', pf(width));
        cliprect.setAttributeNS(null, 'height', pf(height));
        this.current.element = cliprect;
        this.clip('nonzero');
        var imgEl = this.svgFactory.createElement('svg:image');
        imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
        imgEl.setAttributeNS(null, 'x', '0');
        imgEl.setAttributeNS(null, 'y', pf(-height));
        imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
        imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
        imgEl.setAttributeNS(null, 'transform', "scale(".concat(pf(1 / width), " ").concat(pf(-1 / height), ")"));

        if (mask) {
          mask.appendChild(imgEl);
        } else {
          this._ensureTransformGroup().appendChild(imgEl);
        }
      }
    }, {
      key: "paintImageMaskXObject",
      value: function paintImageMaskXObject(imgData) {
        var current = this.current;
        var width = imgData.width;
        var height = imgData.height;
        var fillColor = current.fillColor;
        current.maskId = "mask".concat(maskCount++);
        var mask = this.svgFactory.createElement('svg:mask');
        mask.setAttributeNS(null, 'id', current.maskId);
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', pf(width));
        rect.setAttributeNS(null, 'height', pf(height));
        rect.setAttributeNS(null, 'fill', fillColor);
        rect.setAttributeNS(null, 'mask', "url(#".concat(current.maskId, ")"));
        this.defs.appendChild(mask);

        this._ensureTransformGroup().appendChild(rect);

        this.paintInlineImageXObject(imgData, mask);
      }
    }, {
      key: "paintFormXObjectBegin",
      value: function paintFormXObjectBegin(matrix, bbox) {
        if (Array.isArray(matrix) && matrix.length === 6) {
          this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        }

        if (bbox) {
          var width = bbox[2] - bbox[0];
          var height = bbox[3] - bbox[1];
          var cliprect = this.svgFactory.createElement('svg:rect');
          cliprect.setAttributeNS(null, 'x', bbox[0]);
          cliprect.setAttributeNS(null, 'y', bbox[1]);
          cliprect.setAttributeNS(null, 'width', pf(width));
          cliprect.setAttributeNS(null, 'height', pf(height));
          this.current.element = cliprect;
          this.clip('nonzero');
          this.endPath();
        }
      }
    }, {
      key: "paintFormXObjectEnd",
      value: function paintFormXObjectEnd() {}
    }, {
      key: "_initialize",
      value: function _initialize(viewport) {
        var svg = this.svgFactory.create(viewport.width, viewport.height);
        var definitions = this.svgFactory.createElement('svg:defs');
        svg.appendChild(definitions);
        this.defs = definitions;
        var rootGroup = this.svgFactory.createElement('svg:g');
        rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
        svg.appendChild(rootGroup);
        this.svg = rootGroup;
        return svg;
      }
    }, {
      key: "_ensureClipGroup",
      value: function _ensureClipGroup() {
        if (!this.current.clipGroup) {
          var clipGroup = this.svgFactory.createElement('svg:g');
          clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
          this.svg.appendChild(clipGroup);
          this.current.clipGroup = clipGroup;
        }

        return this.current.clipGroup;
      }
    }, {
      key: "_ensureTransformGroup",
      value: function _ensureTransformGroup() {
        if (!this.tgrp) {
          this.tgrp = this.svgFactory.createElement('svg:g');
          this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));

          if (this.current.activeClipUrl) {
            this._ensureClipGroup().appendChild(this.tgrp);
          } else {
            this.svg.appendChild(this.tgrp);
          }
        }

        return this.tgrp;
      }
    }]);

    return SVGGraphics;
  }();
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFNodeStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(166);













var fs = require('fs');

var http = require('http');

var https = require('https');

var url = require('url');

var fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;

function parseUrl(sourceUrl) {
  var parsedUrl = url.parse(sourceUrl);

  if (parsedUrl.protocol === 'file:' || parsedUrl.host) {
    return parsedUrl;
  }

  if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
    return url.parse("file:///".concat(sourceUrl));
  }

  if (!parsedUrl.host) {
    parsedUrl.protocol = 'file:';
  }

  return parsedUrl;
}

var PDFNodeStream =
/*#__PURE__*/
function () {
  function PDFNodeStream(source) {
    _classCallCheck(this, PDFNodeStream);

    this.source = source;
    this.url = parseUrl(source.url);
    this.isHttp = this.url.protocol === 'http:' || this.url.protocol === 'https:';
    this.isFsUrl = this.url.protocol === 'file:';
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFNodeStream, [{
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(start, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }

      var rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);

      this._rangeRequestReaders.push(rangeReader);

      return rangeReader;
    }
  }, {
    key: "cancelAllRequests",
    value:
  }, {
    key: "_progressiveDataLength",
    get:
  }]);

  return PDFNodeStream;
}();

exports.PDFNodeStream = PDFNodeStream;

var BaseFullReader =
/*#__PURE__*/
function () {
  function BaseFullReader(stream) {
    _classCallCheck(this, BaseFullReader);

    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    var source = stream.source;
    this._contentLength = source.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;

    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }

    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._headersCapability = (0, _util.createPromiseCapability)();
  }

  _createClass(BaseFullReader, [{
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var chunk, buffer;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._readCapability.promise;

              case 2:
                if (!this._done) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 4:
                if (!this._storedError) {
                  _context.next = 6;
                  break;
                }

                throw this._storedError;

              case 6:
                chunk = this._readableStream.read();

                if (!(chunk === null)) {
                  _context.next = 10;
                  break;
                }

                this._readCapability = (0, _util.createPromiseCapability)();
                return _context.abrupt("return", this.read());

              case 10:
                this._loaded += chunk.length;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                }

                buffer = new Uint8Array(chunk).buffer;
                return _context.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);

        return;
      }

      this._readableStream.destroy(reason);
    }
  }, {
    key: "_error",
    value: function _error(reason) {
      this._storedError = reason;

      this._readCapability.resolve();
    }
  }, {
    key: "_setReadableStream",
    value: function _setReadableStream(readableStream) {
      var _this = this;

      this._readableStream = readableStream;
      readableStream.on('readable', function () {
        _this._readCapability.resolve();
      });
      readableStream.on('end', function () {
        readableStream.destroy();
        _this._done = true;

        _this._readCapability.resolve();
      });
      readableStream.on('error', function (reason) {
        _this._error(reason);
      });

      if (!this._isStreamingSupported && this._isRangeSupported) {
        this._error(new _util.AbortException('streaming is disabled'));
      }

      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }, {
    key: "headersReady",
    get:
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return BaseFullReader;
}();

var BaseRangeReader =
/*#__PURE__*/
function () {
  function BaseRangeReader(stream) {
    _classCallCheck(this, BaseRangeReader);

    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    var source = stream.source;
    this._isStreamingSupported = !source.disableStream;
  }

  _createClass(BaseRangeReader, [{
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var chunk, buffer;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._readCapability.promise;

              case 2:
                if (!this._done) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 4:
                if (!this._storedError) {
                  _context2.next = 6;
                  break;
                }

                throw this._storedError;

              case 6:
                chunk = this._readableStream.read();

                if (!(chunk === null)) {
                  _context2.next = 10;
                  break;
                }

                this._readCapability = (0, _util.createPromiseCapability)();
                return _context2.abrupt("return", this.read());

              case 10:
                this._loaded += chunk.length;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded
                  });
                }

                buffer = new Uint8Array(chunk).buffer;
                return _context2.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

     

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);

        return;
      }

      this._readableStream.destroy(reason);
    }
  }, {
    key: "_error",
    value:
  }, {
    key: "_setReadableStream",
    value: function _setReadableStream(readableStream) {
      var _this2 = this;

      this._readableStream = readableStream;
      readableStream.on('readable',);
      readableStream.on('end',);
      readableStream.on('error',);

      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }, {
    key: "isStreamingSupported",
    get:
  }]);

  return BaseRangeReader;
}();


var PDFNodeStreamFullReader =
/*#__PURE__*/
function (_BaseFullReader) {
  _inherits(PDFNodeStreamFullReader, _BaseFullReader);

  function PDFNodeStreamFullReader(stream) {
    var _this3;

    _classCallCheck(this, PDFNodeStreamFullReader);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamFullReader).call(this, stream));

    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException("Missing PDF \"".concat(_this3._url, "\"."));
        _this3._storedError = error;

        _this3._headersCapability.reject(error);

        return;
      }

      _this3._headersCapability.resolve();

      _this3._setReadableStream(response);

      var getResponseHeader =;

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: stream.isHttp,
        rangeChunkSize: _this3._rangeChunkSize,
        disableRange: _this3._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      _this3._isRangeSupported = allowRangeRequests;
      _this3._contentLength = suggestedLength || _this3._contentLength;
      _this3._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
    };

    _this3._request = null;

    if (_this3._url.protocol === 'http:') {
      _this3._request = http.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    } else {
      _this3._request = https.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    }

    _this3._request.on('error',);

    _this3._request.end();

    return _this3;
  }

  return PDFNodeStreamFullReader;
}(BaseFullReader);

var PDFNodeStreamRangeReader =
/*#__PURE__*/
function (_BaseRangeReader) {
  _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);

  function PDFNodeStreamRangeReader(stream, start, end) {
    var _this4;

    _classCallCheck(this, PDFNodeStreamRangeReader);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamRangeReader).call(this, stream));
    _this4._httpHeaders = {};

    for (var property in stream.httpHeaders) {
      var value = stream.httpHeaders[property];

      if (typeof value === 'undefined') {
        continue;
      }

      _this4._httpHeaders[property] = value;
    }

    _this4._httpHeaders['Range'] = "bytes=".concat(start, "-").concat(end - 1);

    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException("Missing PDF \"".concat(_this4._url, "\"."));
        _this4._storedError = error;
        return;
      }

      _this4._setReadableStream(response);
    };

    _this4._request = null;

    if (_this4._url.protocol === 'http:') {
      _this4._request = http.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    } else {
      _this4._request = https.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    }

    _this4._request.on('error', function (reason) {
      _this4._storedError = reason;
    });

    _this4._request.end();

    return _this4;
  }

  return PDFNodeStreamRangeReader;
}(BaseRangeReader);

var PDFNodeStreamFsFullReader =
/*#__PURE__*/
function (_BaseFullReader2) {
  _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);

  function PDFNodeStreamFsFullReader(stream) {
    var _this5;

    _classCallCheck(this, PDFNodeStreamFsFullReader);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamFsFullReader).call(this, stream));
    var path = decodeURIComponent(_this5._url.path);

    if (fileUriRegex.test(_this5._url.href)) {
      path = path.replace(/^\//, '');
    }

    fs.lstat(path, function (error, stat) {
      if (error) {
        if (error.code === 'ENOENT') {
          error = new _util.MissingPDFException("Missing PDF \"".concat(path, "\"."));
        }

        _this5._storedError = error;

        _this5._headersCapability.reject(error);

        return;
      }

      _this5._contentLength = stat.size;

      _this5._setReadableStream(fs.createReadStream(path));

      _this5._headersCapability.resolve();
    });
    return _this5;
  }

  return PDFNodeStreamFsFullReader;
}(BaseFullReader);

var PDFNodeStreamFsRangeReader =
/*#__PURE__*/
function (_BaseRangeReader2) {
  _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);

  function PDFNodeStreamFsRangeReader(stream, start, end) {
    var _this6;

    _classCallCheck(this, PDFNodeStreamFsRangeReader);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamFsRangeReader).call(this, stream));
    var path = decodeURIComponent(_this6._url.path);

    if (fileUriRegex.test(_this6._url.href)) {
      path = path.replace(/^\//, '');
    }

    _this6._setReadableStream(fs.createReadStream(path, {
      start: start,
      end: end - 1
    }));

    return _this6;
  }

  return PDFNodeStreamFsRangeReader;
}(BaseRangeReader);

/***/ }),
/* 166 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResponseStatusError = createResponseStatusError;
exports.extractFilenameFromHeader = extractFilenameFromHeader;
exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
exports.validateResponseStatus = validateResponseStatus;

var _util = __w_pdfjs_require__(1);

var _content_disposition = __w_pdfjs_require__(167);

function validateRangeRequestCapabilities(_ref) {
  var getResponseHeader = _ref.getResponseHeader,
      isHttp = _ref.isHttp,
      rangeChunkSize = _ref.rangeChunkSize,
      disableRange = _ref.disableRange;
  (0, _util.assert)(rangeChunkSize > 0, 'Range chunk size must be larger than zero');
  var returnValues = {
    allowRangeRequests: false,
    suggestedLength: undefined
  };
  var length = parseInt(getResponseHeader('Content-Length'), 10);

  if (!Number.isInteger(length)) {
    return returnValues;
  }

  returnValues.suggestedLength = length;

  if (length <= 2 * rangeChunkSize) {
    return returnValues;
  }

  if (disableRange || !isHttp) {
    return returnValues;
  }

  if (getResponseHeader('Accept-Ranges') !== 'bytes') {
    return returnValues;
  }

  var contentEncoding = getResponseHeader('Content-Encoding') || 'identity';

  if (contentEncoding !== 'identity') {
    return returnValues;
  }

  returnValues.allowRangeRequests = true;
  return returnValues;
}

function extractFilenameFromHeader(getResponseHeader) {
  var contentDisposition = getResponseHeader('Content-Disposition');

  if (contentDisposition) {
    var filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);

    if (/\.pdf$/i.test(filename)) {
      return filename;
    }
  }

  return null;
}

function createResponseStatusError(status, url) {
  if (status === 404 || status === 0 && /^file:/.test(url)) {
    return new _util.MissingPDFException('Missing PDF "' + url + '".');
  }

  return new _util.UnexpectedResponseException('Unexpected server response (' + status + ') while retrieving PDF "' + url + '".', status);
}


/***/ }),
/* 167 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getFilenameFromContentDispositionHeader(contentDisposition) {
  var needsEncodingFixup = true;
  var tmp = toParamRegExp('filename\\*', 'i').exec(contentDisposition);

  if (tmp) {
    tmp = tmp[1];
    var filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }

  tmp = rfc2231getparam(contentDisposition);

  if (tmp) {
    var _filename = rfc2047decode(tmp);

    return fixupEncoding(_filename);
  }

  tmp = toParamRegExp('filename', 'i').exec(contentDisposition);

  if (tmp) {
    tmp = tmp[1];

    var _filename2 = rfc2616unquote(tmp);

    _filename2 = rfc2047decode(_filename2);
    return fixupEncoding(_filename2);
  }

  function toParamRegExp(attributePattern, flags) {
    return new RegExp('(?:^|;)\\s*' + attributePattern + '\\s*=\\s*' + '(' + '[^";\\s][^;\\s]*' + '|' + '"(?:[^"\\\\]|\\\\"?)+"?' + ')', flags);
  }

  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }

      try {
        var decoder = new TextDecoder(encoding, {
          fatal: true
        });
        var bytes = Array.from(value,);
        value = decoder.decode(new Uint8Array(bytes));
        needsEncodingFixup = false;
      } catch (e) {
        if (/^utf-?8$/i.test(encoding)) {
          try {
            value = decodeURIComponent(escape(value));
            needsEncodingFixup = false;
          } catch (err) {}
        }
      }
    }

    return value;
  }

  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode('utf-8', value);

      if (needsEncodingFixup) {
        value = textdecode('iso-8859-1', value);
      }
    }

    return value;
  }

  function rfc2231getparam(contentDisposition) {
    var matches = [],
        match;
    var iter = toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');

    while ((match = iter.exec(contentDisposition)) !== null) {
      var _match = match,
          _match2 = _slicedToArray(_match, 4),
          n = _match2[1],
          quot = _match2[2],
          part = _match2[3];

      n = parseInt(n, 10);

      if (n in matches) {
        if (n === 0) {
          break;
        }

        continue;
      }

      matches[n] = [quot, part];
    }

    var parts = [];

    for (var n = 0; n < matches.length; ++n) {
      if (!(n in matches)) {
        break;
      }

      var _matches$n = _slicedToArray(matches[n], 2),
          quot = _matches$n[0],
          part = _matches$n[1];

      part = rfc2616unquote(part);

      if (quot) {
        part = unescape(part);

        if (n === 0) {
          part = rfc5987decode(part);
        }
      }

      parts.push(part);
    }

    return parts.join('');
  }

  function rfc2616unquote(value) {
    if (value.startsWith('"')) {
      var parts = value.slice(1).split('\\"');

      for (var i = 0; i < parts.length; ++i) {
        var quotindex = parts[i].indexOf('"');

        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }

        parts[i] = parts[i].replace(/\\(.)/g, '$1');
      }

      value = parts.join('"');
    }

    return value;
  }

  function rfc5987decode(extvalue) {
    var encodingend = extvalue.indexOf('\'');

    if (encodingend === -1) {
      return extvalue;
    }

    var encoding = extvalue.slice(0, encodingend);
    var langvalue = extvalue.slice(encodingend + 1);
    var value = langvalue.replace(/^[^']*'/, '');
    return textdecode(encoding, value);
  }

  function rfc2047decode(value) {
    if (!value.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }

    return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (_, charset, encoding, text) {
      if (encoding === 'q' || encoding === 'Q') {
        text = text.replace(/_/g, ' ');
        text = text.replace(/=([0-9a-fA-F]{2})/g,);
        return textdecode(charset, text);
      }

      try {
        text = atob(text);
      } catch (e) {}

      return textdecode(charset, text);
    });
  }

  return '';
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFNetworkStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

;
var OK_RESPONSE = 200;
var PARTIAL_CONTENT_RESPONSE = 206;

function getArrayBuffer(xhr) {
  var data = xhr.response;

  if (typeof data !== 'string') {
    return data;
  }

  var array = (0, _util.stringToBytes)(data);
  return array.buffer;
}

var NetworkManager =
/*#__PURE__*/
function () {
  function NetworkManager(url, args) {
    _classCallCheck(this, NetworkManager);

    this.url = url;
    args = args || {};
    this.isHttp = /^https?:/i.test(url);
    this.httpHeaders = this.isHttp && args.httpHeaders || {};
    this.withCredentials = args.withCredentials || false;

    this.getXhr = args.getXhr ||;

    this.currXhrId = 0;
    this.pendingRequests = Object.create(null);
  }

  _createClass(NetworkManager, [{
    key: "requestRange",
    value:
  }, {
    key: "requestFull",
    value:
  }, {
    key: "request",
    value: function request(args) {
      var xhr = this.getXhr();
      var xhrId = this.currXhrId++;
      var pendingRequest = this.pendingRequests[xhrId] = {
        xhr: xhr
      };
      xhr.open('GET', this.url);
      xhr.withCredentials = this.withCredentials;

      for (var property in this.httpHeaders) {
        var value = this.httpHeaders[property];

        if (typeof value === 'undefined') {
          continue;
        }

        xhr.setRequestHeader(property, value);
      }

      if (this.isHttp && 'begin' in args && 'end' in args) {
        xhr.setRequestHeader('Range', "bytes=".concat(args.begin, "-").concat(args.end - 1));
        pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
      } else {
        pendingRequest.expectedStatus = OK_RESPONSE;
      }

      xhr.responseType = 'arraybuffer';

      if (args.onError) {
        xhr.onerror =;
      }

      xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
      xhr.onprogress = this.onProgress.bind(this, xhrId);
      pendingRequest.onHeadersReceived = args.onHeadersReceived;
      pendingRequest.onDone = args.onDone;
      pendingRequest.onError = args.onError;
      pendingRequest.onProgress = args.onProgress;
      xhr.send(null);
      return xhrId;
    }
  }, {
    key: "onProgress",
    value: function onProgress(xhrId, evt) {
      var pendingRequest = this.pendingRequests[xhrId];

      if (!pendingRequest) {
        return;
      }

      if (pendingRequest.onProgress) {
        pendingRequest.onProgress(evt);
      }
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(xhrId, evt) {
      var pendingRequest = this.pendingRequests[xhrId];

      if (!pendingRequest) {
        return;
      }

      var xhr = pendingRequest.xhr;

      if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
        pendingRequest.onHeadersReceived();
        delete pendingRequest.onHeadersReceived;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (!(xhrId in this.pendingRequests)) {
        return;
      }

      delete this.pendingRequests[xhrId];

      if (xhr.status === 0 && this.isHttp) {
        if (pendingRequest.onError) {
          pendingRequest.onError(xhr.status);
        }

        return;
      }

      var xhrStatus = xhr.status || OK_RESPONSE;
      var ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;

      if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
        if (pendingRequest.onError) {
          pendingRequest.onError(xhr.status);
        }

        return;
      }

      var chunk = getArrayBuffer(xhr);

      if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
        var rangeHeader = xhr.getResponseHeader('Content-Range');
        var matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
        pendingRequest.onDone({
          begin: parseInt(matches[1], 10),
          chunk: chunk
        });
      } else if (chunk) {
        pendingRequest.onDone({
          begin: 0,
          chunk: chunk
        });
      } else if (pendingRequest.onError) {
        pendingRequest.onError(xhr.status);
      }
    }
  }, {
    key: "hasPendingRequests",
    value:
  }, {
    key: "getRequestXhr",
    value:
  }, {
    key: "isPendingRequest",
    value:
  }, {
    key: "abortAllRequests",
    value:
  }, {
    key: "abortRequest",
    value:
  }]);

  return NetworkManager;
}();

var PDFNetworkStream =
/*#__PURE__*/
function () {
  function PDFNetworkStream(source) {
    _classCallCheck(this, PDFNetworkStream);

    this._source = source;
    this._manager = new NetworkManager(source.url, {
      httpHeaders: source.httpHeaders,
      withCredentials: source.withCredentials
    });
    this._rangeChunkSize = source.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFNetworkStream, [{
    key: "_onRangeRequestReaderClosed",
    value: function _onRangeRequestReaderClosed(reader) {
      var i = this._rangeRequestReaders.indexOf(reader);

      if (i >= 0) {
        this._rangeRequestReaders.splice(i, 1);
      }
    }
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value:
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }

      var readers = this._rangeRequestReaders.slice(0);

      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }]);

  return PDFNetworkStream;
}();

exports.PDFNetworkStream = PDFNetworkStream;

var PDFNetworkStreamFullRequestReader =
/*#__PURE__*/
function () {
  function PDFNetworkStreamFullRequestReader(manager, source) {
    _classCallCheck(this, PDFNetworkStreamFullRequestReader);

    this._manager = manager;
    var args = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = source.url;
    this._fullRequestId = manager.requestFull(args);
    this._headersReceivedCapability = (0, _util.createPromiseCapability)();
    this._disableRange = source.disableRange || false;
    this._contentLength = source.length;
    this._rangeChunkSize = source.rangeChunkSize;

    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }

    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = undefined;
    this._filename = null;
    this.onProgress = null;
  }

  _createClass(PDFNetworkStreamFullRequestReader, [{
    key: "_onHeadersReceived",
    value: function _onHeadersReceived() {
      var fullRequestXhrId = this._fullRequestId;

      var fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);

      var getResponseHeader =;

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      if (allowRangeRequests) {
        this._isRangeSupported = true;
      }

      this._contentLength = suggestedLength || this._contentLength;
      this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

      if (this._isRangeSupported) {
        this._manager.abortRequest(fullRequestXhrId);
      }

      this._headersReceivedCapability.resolve();
    }
  }, {
    key: "_onDone",
    value: function _onDone(args) {
      if (args) {
        if (this._requests.length > 0) {
          var requestCapability = this._requests.shift();

          requestCapability.resolve({
            value: args.chunk,
            done: false
          });
        } else {
          this._cachedChunks.push(args.chunk);
        }
      }

      this._done = true;

      if (this._cachedChunks.length > 0) {
        return;
      }

      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });

      this._requests = [];
    }
  }, {
    key: "_onError",
    value: function _onError(status) {
      var url = this._url;
      var exception = (0, _network_utils.createResponseStatusError)(status, url);
      this._storedError = exception;

      this._headersReceivedCapability.reject(exception);

      this._requests.forEach(function (requestCapability) {
        requestCapability.reject(exception);
      });

      this._requests = [];
      this._cachedChunks = [];
    }
  }, {
    key: "_onProgress",
    value:
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._storedError) {
                  _context.next = 2;
                  break;
                }

                throw this._storedError;

              case 2:
                if (!(this._cachedChunks.length > 0)) {
                  _context.next = 5;
                  break;
                }

                chunk = this._cachedChunks.shift();
                return _context.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 5:
                if (!this._done) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 7:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context.abrupt("return", requestCapability.promise);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value:
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersReceivedCapability.promise;
    }
  }]);

  return PDFNetworkStreamFullRequestReader;
}();

var PDFNetworkStreamRangeRequestReader =
/*#__PURE__*/
function () {
  function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
    _classCallCheck(this, PDFNetworkStreamRangeRequestReader);

    this._manager = manager;
    var args = {
      onDone: this._onDone.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._requestId = manager.requestRange(begin, end, args);
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this.onProgress = null;
    this.onClosed = null;
  }

  _createClass(PDFNetworkStreamRangeRequestReader, [{
    key: "_close",
    value:
  }, {
    key: "_onDone",
    value:
  }, {
    key: "_onProgress",
    value:
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this._queuedChunk !== null)) {
                  _context2.next = 4;
                  break;
                }

                chunk = this._queuedChunk;
                this._queuedChunk = null;
                return _context2.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 4:
                if (!this._done) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 6:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context2.abrupt("return", requestCapability.promise);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _read2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value:
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return false;
    }
  }]);

  return PDFNetworkStreamRangeRequestReader;
}();

/***/ }),
/* 169 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFFetchStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(148));

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(166);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var PDFFetchStream =
/*#__PURE__*/
function () {
  function PDFFetchStream(source) {
    _classCallCheck(this, PDFFetchStream);

    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFFetchStream, [{
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFFetchStreamReader(this);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }

      var reader = new PDFFetchStreamRangeReader(this, begin, end);

      this._rangeRequestReaders.push(reader);

      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }

      var readers = this._rangeRequestReaders.slice(0);

      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }, {
    key: "_progressiveDataLength",
    get: function get() {
      return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
    }
  }]);

  return PDFFetchStream;
}();

exports.PDFFetchStream = PDFFetchStream;

var PDFFetchStreamReader =
/*#__PURE__*/
function () {
  function PDFFetchStreamReader(stream) {
    var _this = this;

    _classCallCheck(this, PDFFetchStreamReader);

    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    var source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._contentLength = source.length;
    this._headersCapability = (0, _util.createPromiseCapability)();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;

    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }

    if (typeof AbortController !== 'undefined') {
      this._abortController = new AbortController();
    }

    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._headers = new Headers();

    for (var property in this._stream.httpHeaders) {
      var value = this._stream.httpHeaders[property];

      if (typeof value === 'undefined') {
        continue;
      }

      this._headers.append(property, value);
    }

    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }

      _this._reader = response.body.getReader();

      _this._headersCapability.resolve();

      var getResponseHeader =;

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: _this._stream.isHttp,
        rangeChunkSize: _this._rangeChunkSize,
        disableRange: _this._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      _this._isRangeSupported = allowRangeRequests;
      _this._contentLength = suggestedLength || _this._contentLength;
      _this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

      if (!_this._isStreamingSupported && _this._isRangeSupported) {
        _this.cancel(new _util.AbortException('Streaming is disabled.'));
      }
    })["catch"](this._headersCapability.reject);
    this.onProgress = null;
  }

  _createClass(PDFFetchStreamReader, [{
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _ref, value, done, buffer;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._headersCapability.promise;

              case 2:
                _context.next = 4;
                return this._reader.read();

              case 4:
                _ref = _context.sent;
                value = _ref.value;
                done = _ref.done;

                if (!done) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", {
                  value: value,
                  done: done
                });

              case 9:
                this._loaded += value.byteLength;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                }

                buffer = new Uint8Array(value).buffer;
                return _context.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }

      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersCapability.promise;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return PDFFetchStreamReader;
}();

var PDFFetchStreamRangeReader =
/*#__PURE__*/
function () {
  function PDFFetchStreamRangeReader(stream, begin, end) {
    var _this2 = this;

    _classCallCheck(this, PDFFetchStreamRangeReader);

    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    var source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._isStreamingSupported = !source.disableStream;

    if (typeof AbortController !== 'undefined') {
      this._abortController = new AbortController();
    }

    this._headers = new Headers();

    for (var property in this._stream.httpHeaders) {
      var value = this._stream.httpHeaders[property];

      if (typeof value === 'undefined') {
        continue;
      }

      this._headers.append(property, value);
    }

    this._headers.append('Range', "bytes=".concat(begin, "-").concat(end - 1));

    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }

      _this2._readCapability.resolve();

      _this2._reader = response.body.getReader();
    });
    this.onProgress = null;
  }

  _createClass(PDFFetchStreamRangeReader, [{
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _ref2, value, done, buffer;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._readCapability.promise;

              case 2:
                _context2.next = 4;
                return this._reader.read();

              case 4:
                _ref2 = _context2.sent;
                value = _ref2.value;
                done = _ref2.done;

                if (!done) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", {
                  value: value,
                  done: done
                });

              case 9:
                this._loaded += value.byteLength;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded
                  });
                }

                buffer = new Uint8Array(value).buffer;
                return _context2.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _read2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }

      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return PDFFetchStreamRangeReader;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=pdf.js.map