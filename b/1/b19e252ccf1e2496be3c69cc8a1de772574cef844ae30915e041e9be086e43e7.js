/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 9483:
/***/ (,

/***/ 6077:
/***/ (,

/***/ 1223:
/***/ (,

/***/ 1530:
/***/ (,

/***/ 5787:
/***/ (,

/***/ 9670:
/***/ (,

/***/ 3013:
/***/ (,

/***/ 7556:
/***/ (,

/***/ 260:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_ARRAY_BUFFER = __webpack_require__(3013);
var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var hasOwn = __webpack_require__(2597);
var classof = __webpack_require__(648);
var tryToString = __webpack_require__(6330);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineBuiltInAccessor = __webpack_require__(7045);
var isPrototypeOf = __webpack_require__(7976);
var getPrototypeOf = __webpack_require__(9518);
var setPrototypeOf = __webpack_require__(7674);
var wellKnownSymbol = __webpack_require__(5112);
var uid = __webpack_require__(9711);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError = global.TypeError;

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = 

var getTypedArrayConstructor = 

var isTypedArray = 

var aTypedArray = 

var aTypedArrayConstructor = 

var exportTypedArrayMethod = 

var exportTypedArrayStaticMethod = 

for (NAME in TypedArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = 
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !hasOwn(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor(TypedArrayPrototype, TO_STRING_TAG, {
    configurable: true,
    get:   });
  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};


/***/ }),

/***/ 3331:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var DESCRIPTORS = __webpack_require__(9781);
var NATIVE_ARRAY_BUFFER = __webpack_require__(3013);
var FunctionName = __webpack_require__(6530);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltInAccessor = __webpack_require__(7045);
var defineBuiltIns = __webpack_require__(9190);
var fails = __webpack_require__(7293);
var anInstance = __webpack_require__(5787);
var toIntegerOrInfinity = __webpack_require__(9303);
var toLength = __webpack_require__(7466);
var toIndex = __webpack_require__(7067);
var IEEE754 = __webpack_require__(1179);
var getPrototypeOf = __webpack_require__(9518);
var setPrototypeOf = __webpack_require__(7674);
var getOwnPropertyNames = (__webpack_require__(8006).f);
var arrayFill = __webpack_require__(1285);
var arraySlice = __webpack_require__(1589);
var setToStringTag = __webpack_require__(8003);
var InternalStateModule = __webpack_require__(9909);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var getInternalArrayBufferState = InternalStateModule.getterFor(ARRAY_BUFFER);
var getInternalDataViewState = InternalStateModule.getterFor(DATA_VIEW);
var setInternalState = InternalStateModule.set;
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = global.Array;
var RangeError = global.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = 

var packInt16 = 

var packInt32 = 

var unpackInt32 = 

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = 

var addGetter = 

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalDataViewState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return isLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalDataViewState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = store.bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = 

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferState = getInternalArrayBufferState(buffer);
    var bufferLength = bufferState.byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      type: DATA_VIEW,
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset,
      bytes: bufferState.bytes
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
    addGetter($DataView, 'buffer', getInternalDataViewState);
    addGetter($DataView, 'byteLength', getInternalDataViewState);
    addGetter($DataView, 'byteOffset', getInternalDataViewState);
  }

  defineBuiltIns(DataViewPrototype, {
    getInt8: 
    getUint8: 
    getInt16: 
    getUint16: 
    getInt32: 
    getUint32: 
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: 
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: 
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64:   });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = 

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8:   }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ 1048:
/***/ (,

/***/ 1285:
/***/ (,

/***/ 8533:
/***/ (,

/***/ 7745:
/***/ (,

/***/ 8457:
/***/ (,

/***/ 1318:
/***/ (,

/***/ 2092:
/***/ (,

/***/ 6583:
/***/ (,

/***/ 1194:
/***/ (,

/***/ 9341:
/***/ (,

/***/ 3671:
/***/ (,

/***/ 3658:
/***/ (,

/***/ 1589:
/***/ (,

/***/ 206:
/***/ (,

/***/ 4362:
/***/ (,

/***/ 7475:
/***/ (,

/***/ 5417:
/***/ (,

/***/ 3411:
/***/ (,

/***/ 7072:
/***/ (,

/***/ 4326:
/***/ (,

/***/ 648:
/***/ (,

/***/ 5631:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var defineBuiltInAccessor = __webpack_require__(7045);
var defineBuiltIns = __webpack_require__(9190);
var bind = __webpack_require__(9974);
var anInstance = __webpack_require__(5787);
var isNullOrUndefined = __webpack_require__(8554);
var iterate = __webpack_require__(408);
var defineIterator = __webpack_require__(1656);
var createIterResultObject = __webpack_require__(6178);
var setSpecies = __webpack_require__(6340);
var DESCRIPTORS = __webpack_require__(9781);
var fastKey = (__webpack_require__(2423).fastKey);
var InternalStateModule = __webpack_require__(9909);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(;

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = 

    var getEntry = 

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: 
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': 
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: 
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has:     });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: 
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set:     } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add:     });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: };


/***/ }),

/***/ 7710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isForced = __webpack_require__(4705);
var defineBuiltIn = __webpack_require__(8052);
var InternalMetadataModule = __webpack_require__(2423);
var iterate = __webpack_require__(408);
var anInstance = __webpack_require__(5787);
var isCallable = __webpack_require__(614);
var isNullOrUndefined = __webpack_require__(8554);
var isObject = __webpack_require__(111);
var fails = __webpack_require__(7293);
var checkCorrectnessOfIteration = __webpack_require__(7072);
var setToStringTag = __webpack_require__(8003);
var inheritIfRequired = __webpack_require__(9587);

module.exports = 


/***/ }),

/***/ 9920:
/***/ (,

/***/ 4964:
/***/ (,

/***/ 8544:
/***/ (,

/***/ 4230:
/***/ (,

/***/ 6178:
/***/ (,

/***/ 8880:
/***/ (,

/***/ 9114:
/***/ (,

/***/ 6135:
/***/ (,

/***/ 8709:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9670);
var ordinaryToPrimitive = __webpack_require__(2140);

var $TypeError = TypeError;

// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = 


/***/ }),

/***/ 7045:
/***/ (,

/***/ 8052:
/***/ (,

/***/ 9190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__(8052);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 3072:
/***/ (,

/***/ 5117:
/***/ (,

/***/ 9781:
/***/ (,

/***/ 4154:
/***/ (,

/***/ 317:
/***/ (,

/***/ 7207:
/***/ (,

/***/ 8324:
/***/ (,

/***/ 8509:
/***/ (,

/***/ 8886:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ 7871:
/***/ (,

/***/ 9363:
/***/ (function(module) {

/* global Bun -- Deno case */
module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';


/***/ }),

/***/ 3823:
/***/ (,

/***/ 256:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var UA = __webpack_require__(8113);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ 1528:
/***/ (,

/***/ 6833:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 5268:
/***/ (,

/***/ 1036:
/***/ (,

/***/ 8113:
/***/ (,

/***/ 7392:
/***/ (,

/***/ 8008:
/***/ (,

/***/ 748:
/***/ (,

/***/ 2109:
/***/ (,

/***/ 7293:
/***/ (,

/***/ 7007:
/***/ (,

/***/ 6677:
/***/ (,

/***/ 2104:
/***/ (,

/***/ 9974:
/***/ (,

/***/ 4374:
/***/ (,

/***/ 7065:
/***/ (,

/***/ 6916:
/***/ (,

/***/ 6530:
/***/ (,

/***/ 5668:
/***/ (,

/***/ 1470:
/***/ (,

/***/ 1702:
/***/ (,

/***/ 5005:
/***/ (,

/***/ 1246:
/***/ (,

/***/ 4121:
/***/ (,

/***/ 8044:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isArray = __webpack_require__(3157);
var isCallable = __webpack_require__(614);
var classof = __webpack_require__(4326);
var toString = __webpack_require__(1340);

var push = uncurryThis([].push);

module.exports = 


/***/ }),

/***/ 8173:
/***/ (,

/***/ 647:
/***/ (,

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = 

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (,

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 842:
/***/ (,

/***/ 490:
/***/ (,

/***/ 4664:
/***/ (,

/***/ 1179:
/***/ (function(module) {

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = 

var unpack = 

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ 8361:
/***/ (,

/***/ 9587:
/***/ (,

/***/ 2788:
/***/ (,

/***/ 2423:
/***/ (,

/***/ 9909:
/***/ (,

/***/ 7659:
/***/ (,

/***/ 3157:
/***/ (,

/***/ 4067:
/***/ (,

/***/ 614:
/***/ (,

/***/ 4411:
/***/ (,

/***/ 5032:
/***/ (,

/***/ 4705:
/***/ (,

/***/ 5988:
/***/ (,

/***/ 8554:
/***/ (,

/***/ 111:
/***/ (,

/***/ 1913:
/***/ (,

/***/ 7850:
/***/ (,

/***/ 2190:
/***/ (,

/***/ 408:
/***/ (,

/***/ 9212:
/***/ (,

/***/ 3061:
/***/ (,

/***/ 1656:
/***/ (,

/***/ 3383:
/***/ (,

/***/ 7497:
/***/ (,

/***/ 6244:
/***/ (,

/***/ 6339:
/***/ (,

/***/ 4758:
/***/ (,

/***/ 5948:
/***/ (,

/***/ 8523:
/***/ (,

/***/ 3929:
/***/ (,

/***/ 2814:
/***/ (,

/***/ 3009:
/***/ (,

/***/ 1574:
/***/ (,

/***/ 30:
/***/ (,

/***/ 6048:
/***/ (,

/***/ 3070:
/***/ (,

/***/ 1236:
/***/ (,

/***/ 1156:
/***/ (,

/***/ 8006:
/***/ (,

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 9518:
/***/ (,

/***/ 2050:
/***/ (,

/***/ 7976:
/***/ (,

/***/ 6324:
/***/ (,

/***/ 1956:
/***/ (,

/***/ 5296:
/***/ (,

/***/ 7674:
/***/ (,

/***/ 4699:
/***/ (,

/***/ 288:
/***/ (,

/***/ 2140:
/***/ (,

/***/ 3887:
/***/ (,

/***/ 857:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

module.exports = global;


/***/ }),

/***/ 2534:
/***/ (,

/***/ 3702:
/***/ (,

/***/ 2492:
/***/ (,

/***/ 9478:
/***/ (,

/***/ 612:
/***/ (,

/***/ 8572:
/***/ (,

/***/ 7651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var anObject = __webpack_require__(9670);
var isCallable = __webpack_require__(614);
var classof = __webpack_require__(4326);
var regexpExec = __webpack_require__(2261);

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = 


/***/ }),

/***/ 2261:
/***/ (,

/***/ 7066:
/***/ (,

/***/ 4706:
/***/ (,

/***/ 2999:
/***/ (,

/***/ 9441:
/***/ (,

/***/ 7168:
/***/ (,

/***/ 4488:
/***/ (,

/***/ 1150:
/***/ (,

/***/ 7152:
/***/ (,

/***/ 6340:
/***/ (,

/***/ 8003:
/***/ (,

/***/ 6200:
/***/ (,

/***/ 5465:
/***/ (,

/***/ 2309:
/***/ (),

/***/ 6707:
/***/ ),

/***/ 3429:
/***/ ),

/***/ 8710:
/***/ ),

/***/ 3111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var requireObjectCoercible = __webpack_require__(4488);
var toString = __webpack_require__(1340);
var whitespaces = __webpack_require__(1361);

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod =;

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 6293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails);


/***/ }),

/***/ 6532:
/***/ ),

/***/ 2015:
/***/ ),

/***/ 261:
/***/ ),

/***/ 863:
/***/ ),

/***/ 1400:
/***/ ),

/***/ 4599:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports =;


/***/ }),

/***/ 7067:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);
var toLength = __webpack_require__(7466);

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports =;


/***/ }),

/***/ 5656:
/***/ ),

/***/ 9303:
/***/ ),

/***/ 7466:
/***/ ),

/***/ 7908:
/***/ ),

/***/ 4590:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(3002);

var $RangeError = RangeError;

module.exports =;


/***/ }),

/***/ 3002:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var $RangeError = RangeError;

module.exports =;


/***/ }),

/***/ 7593:
/***/ ),

/***/ 4948:
/***/ ),

/***/ 1694:
/***/ ),

/***/ 1340:
/***/ ),

/***/ 6330:
/***/ ),

/***/ 9843:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var DESCRIPTORS = __webpack_require__(9781);
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(3832);
var ArrayBufferViewCore = __webpack_require__(260);
var ArrayBufferModule = __webpack_require__(3331);
var anInstance = __webpack_require__(5787);
var createPropertyDescriptor = __webpack_require__(9114);
var createNonEnumerableProperty = __webpack_require__(8880);
var isIntegralNumber = __webpack_require__(5988);
var toLength = __webpack_require__(7466);
var toIndex = __webpack_require__(7067);
var toOffset = __webpack_require__(4590);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var classof = __webpack_require__(648);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var create = __webpack_require__(30);
var isPrototypeOf = __webpack_require__(7976);
var setPrototypeOf = __webpack_require__(7674);
var getOwnPropertyNames = (__webpack_require__(8006).f);
var typedArrayFrom = __webpack_require__(7321);
var forEach = (__webpack_require__(2092).forEach);
var setSpecies = __webpack_require__(6340);
var defineBuiltInAccessor = __webpack_require__(7045);
var definePropertyModule = __webpack_require__(3070);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var InternalStateModule = __webpack_require__(9909);
var inheritIfRequired = __webpack_require__(9587);

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList =;

var addGetter =;

var isArrayBuffer =;

var isTypedArrayIndex =;

var wrappedGetOwnPropertyDescriptor =;

var wrappedDefineProperty =;

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter =;

    var setter =;

    var addElement =;

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper);

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper);

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor),);
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ 3832:
/***/ ),

/***/ 3074:
/***/ ),

/***/ 7321:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(9974);
var call = __webpack_require__(6916);
var aConstructor = __webpack_require__(9483);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var getIterator = __webpack_require__(4121);
var getIteratorMethod = __webpack_require__(1246);
var isArrayIteratorMethod = __webpack_require__(7659);
var isBigIntArray = __webpack_require__(4067);
var aTypedArrayConstructor = (__webpack_require__(260).aTypedArrayConstructor);
var toBigInt = __webpack_require__(4599);

module.exports =;


/***/ }),

/***/ 6304:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__(260);
var speciesConstructor = __webpack_require__(6707);

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports =;


/***/ }),

/***/ 9711:
/***/ ),

/***/ 5143:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var DESCRIPTORS = __webpack_require__(9781);
var IS_PURE = __webpack_require__(1913);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach);
  return (IS_PURE && !url.toJSON)
    || (!searchParams.size && (IS_PURE || !DESCRIPTORS))
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ 3307:
/**/ }),

/***/ 3353:
/**/ }),

/***/ 8053:
/**/ }),

/***/ 4811:
/**/ }),

/***/ 6800:
/**/ }),

/***/ 6061:
/**/ }),

/***/ 5112:
/**/ }),

/***/ 1361:
/**/ }),

/***/ 9575:
/**/ }),

/***/ 2222:
/**/ }),

/***/ 7327:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $filter = (__webpack_require__(2092).filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 4553:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $findIndex = (__webpack_require__(2092).findIndex);
var addToUnscopables = __webpack_require__(1223);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-findindex -- testing
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 9826:
/**/ }),

/***/ 9554:
/**/ }),

/***/ 1038:
/**/ }),

/***/ 6699:
/**/ }),

/***/ 2772:
/**/ }),

/***/ 9753:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var isArray = __webpack_require__(3157);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ 6992:
/**/ }),

/***/ 9600:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var uncurryThis = __webpack_require__(1702);
var IndexedObject = __webpack_require__(8361);
var toIndexedObject = __webpack_require__(5656);
var arrayMethodIsStrict = __webpack_require__(9341);

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  ;
  }
});


/***/ }),

/***/ 1249:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $map = (__webpack_require__(2092).map);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 5827:
/**/ }),

/***/ 7042:
/**/ }),

/***/ 5212:
/**/ }),

/***/ 2707:
/**/ }),

/***/ 561:
/**/ }),

/***/ 6078:
/**/ }),

/***/ 3710:
/**/ }),

/***/ 4812:
/**/ }),

/***/ 8309:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var FUNCTION_NAME_EXISTS = (__webpack_require__(6530).EXISTS);
var uncurryThis = __webpack_require__(1702);
var defineBuiltInAccessor = __webpack_require__(7045);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
       }
  });
}


/***/ }),

/***/ 8862:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var getBuiltIn = __webpack_require__(5005);
var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var isSymbol = __webpack_require__(2190);
var arraySlice = __webpack_require__(206);
var getReplacerFunction = __webpack_require__(8044);
var NATIVE_SYMBOL = __webpack_require__(6293);

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || }';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = "';
});

var stringifyWithSymbolss);
};

var fixIllForch;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    strin    }
  });
}


/***/ }),

/***/ 9098:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(7710);
var collectionStrong = __webpack_require__(5631);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 1532:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(9098);


/***/ }),

/***/ 9653:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var IS_PURE = __webpack_require__(1913);
var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var path = __webpack_require__(857);
var uncurryThis = __webpack_require__(1702);
var isForced = __webpack_require__(4705);
var hasOwn = __webpack_require__(2597);
var inheritIfRequired = __webpack_require__(9587);
var isPrototypeOf = __webpack_require__(7976);
var isSymbol = __webpack_require__(2190);
var toPrimitive = __webpack_require__(7593);
var fails = __webpack_require__(7293);
var getOwnPropertyNames = (__webpack_require__(8006).f);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var defineProperty = (__webpack_require__(3070).f);
var thisNumberValue = __webpack_require__(863);
var trim = (__webpack_require__(3111).trim);

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumee);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumit;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWith});
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrap n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorPropert  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);


/***/ }),

/***/ 9601:
/**/ }),

/***/ 8011:
/**/ }),

/***/ 3321:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var defineProperties = (__webpack_require__(6048).f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ 9070:
/**/ }),

/***/ 9720:
/**/ }),

/***/ 5003:
/**/ }),

/***/ 9337:
/**/ }),

/***/ 9660:
/**/ }),

/***/ 489:
/**/ }),

/***/ 7941:
/**/ }),

/***/ 8304:
/**/ }),

/***/ 1539:
/**/ }),

/***/ 4678:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var $parseFloat = __webpack_require__(2814);

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ }),

/***/ 1058:
/**/ }),

/***/ 821:
/**/ }),

/***/ 4164:
/**/ }),

/***/ 3401:
/**/ }),

/***/ 8674:
/**/ }),

/***/ 6027:
/**/ }),

/***/ 683:
/**/ }),

/***/ 6294:
/**/ }),

/***/ 2419:
/**/ }),

/***/ 4819:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var anObject = __webpack_require__(9670);
var isDataDescriptor = __webpack_require__(5032);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var getPrototypeOf = __webpack_require__(9518);

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflecr);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 4916:
/**/ }),

/***/ 9714:
/**/ }),

/***/ 7227:
/**/ }),

/***/ 189:
/**/ }),

/***/ 2023:
/**/ }),

/***/ 8783:
/**/ }),

/***/ 4723:
/**/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var fails = __webpack_require__(7293);
var anObject = __webpack_require__(9670);
var isCallable = __webpack_require__(614);
var isNullOrUndefined = __webpack_require__(8554);
var toIntegerOrInfinity = __webpack_require__(9303);
var toLength = __webpack_require__(7466);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);
var advanceStringIndex = __webpack_require__(1530);
var getMethod = __webpack_require__(8173);
var getSubstitution = __webpack_require__(647);
var regExpExec = __webpack_require__(7651);
var wellKnownSymbol = __webpack_require__(5112);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToStrt);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTUse;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replac    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replac    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 4765:
/**/ }),

/***/ 6755:
/**/ }),

/***/ 86:
/**/ }),

/***/ 4032:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var IS_PURE = __webpack_require__(1913);
var DESCRIPTORS = __webpack_require__(9781);
var NATIVE_SYMBOL = __webpack_require__(6293);
var fails = __webpack_require__(7293);
var hasOwn = __webpack_require__(2597);
var isPrototypeOf = __webpack_require__(7976);
var anObject = __webpack_require__(9670);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var $toString = __webpack_require__(1340);
var createPropertyDescriptor = __webpack_require__(9114);
var nativeObjectCreate = __webpack_require__(30);
var objectKeys = __webpack_require__(1956);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertyNamesExternal = __webpack_require__(1156);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);
var definePropertiesModule = __webpack_require__(6048);
var propertyIsEnumerableModule = __webpack_require__(5296);
var defineBuiltIn = __webpack_require__(8052);
var defineBuiltInAccessor = __webpack_require__(7045);
var shared = __webpack_require__(2309);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);
var uid = __webpack_require__(9711);
var wellKnownSymbol = __webpack_require__(5112);
var wrappedWellKnownSymbolModule = __webpack_require__(6061);
var defineWellKnownSymbol = __webpack_require__(6800);
var defineSymbolToPrimitive = __webpack_require__(6532);
var setToStringTag = __webpack_require__(8003);
var InternalStateModule = __webpack_require__(9909);
var $forEach = (__webpack_require__(2092).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS &&  7;  }
} : nativeDefineProperty;

var wol;
};

var $definePropes);
};

var $definePropert O;
};

var $cres);
};

var $propertyIsEnumeraue;
};

var $getOwnPropertyDescripor;
};

var $getOwnPropertyNalt;
};

var $getOwnPropertySymblt;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Sym;
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModul;
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
         }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSise; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 1817:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var toString = __webpack_require__(1340);
var defineBuiltInAccessor = __webpack_require__(7045);
var copyConstructorProperties = __webpack_require__(9920);

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrap;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineBuiltInAccessor(SymbolPrototype, 'description', {
    configurable: true,
       }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 763:
/**/ }),

/***/ 2165:
/**/ }),

/***/ 2526:
/**/ }),

/***/ 6620:
/**/ }),

/***/ 6649:
/**/ }),

/***/ 2990:
/**/ }),

/***/ 8927:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $every = (__webpack_require__(2092).every);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 3105:
/**/ }),

/***/ 5035:
/**/ }),

/***/ 7174:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $findIndex = (__webpack_require__(2092).findIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 4345:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $find = (__webpack_require__(2092).find);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 2846:
/**/ }),

/***/ 8145:
/**/ }),

/***/ 4731:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $includes = (__webpack_require__(1318).includes);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 7209:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $indexOf = (__webpack_require__(1318).indexOf);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 6319:
/**/ }),

/***/ 8867:
/**/ }),

/***/ 7789:
/**/ }),

/***/ 3739:
/**/ }),

/***/ 4483:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(260);
var $reduceRight = (__webpack_require__(3671).right);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ 9368:
/**/ }),

/***/ 2056:
/**/ }),

/***/ 3462:
/**/ }),

/***/ 678:
/**/ }),

/***/ 7462:
/**/ }),

/***/ 3824:
/**/ }),

/***/ 5021:
/**/ }),

/***/ 2974:
/**/ }),

/***/ 5016:
/**/ }),

/***/ 8255:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(9843);

// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uin };
});


/***/ }),

/***/ 2472:
/**/ }),

/***/ 4747:
/**/ }),

/***/ 3948:
/**/ }),

/***/ 6815:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var schedulersFix = __webpack_require__(7152);

var setInterval = schedulersFix(global.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ 8417:
/**/ }),

/***/ 2564:
/**/ }),

/***/ 5556:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(6992);
var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var DESCRIPTORS = __webpack_require__(9781);
var USE_NATIVE_URL = __webpack_require__(5143);
var defineBuiltIn = __webpack_require__(8052);
var defineBuiltInAccessor = __webpack_require__(7045);
var defineBuiltIns = __webpack_require__(9190);
var setToStringTag = __webpack_require__(8003);
var createIteratorConstructor = __webpack_require__(3061);
var InternalStateModule = __webpack_require__(9909);
var anInstance = __webpack_require__(5787);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var bind = __webpack_require__(9974);
var classof = __webpack_require__(648);
var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var $toString = __webpack_require__(1340);
var create = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(9114);
var getIterator = __webpack_require__(4121);
var getIteratorMethod = __webpack_require__(1246);
var validateArgumentsLength = __webpack_require__(8053);
var wellKnownSymbol = __webpack_require__(5112);
var arraySort = __webpack_require__(4362);

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuilue;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp = global.RegExp;
var TypeError = global.TypeError;
var decodeURIComponent = global.decodeURIComponent;
var encodeURIComponent = global.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSeque));
};

var percentDec  }
};

var deserial  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialr);
};

var URLSearchParamsIterator = createIteratorConstr});
}, 'Iteraep;
}, true);

var URLSearchParamsSt  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bin;
  },
  parseOb}
  },
  parseQ}
  },
  seria;
  },
  up;
  },
  updat;
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructh;
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    if (!DESCRIPTORS) this.length++;
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    if (!DESCRIPTORS) this.length = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
 ;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  ge;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
 ;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    if (!DESCRIPTORS) this.length = entries.length;
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  ;
  },
  // `URLSearchParams.prototype.forEach` method
  for}
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  ent;
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn(URLSearchParamsPrototype, 'toStr();
}, { enumerable: true });

// `URLSearchParams.prototype.size` getter
// https://github.com/whatwg/url/pull/734
if (DESCRIPTORS) defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
 ;
  },
  configurable: true,
  enumerable: true
});

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOpti;
  };

  if (isCallable(nativeFetch)) {
    $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      f    }
    });
  }

  if (isCallable(NativeRequest)) {
    var RequestConstruc    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ 1637:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(5556);


/***/ }),

/***/ 2722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vjs-dynamicoverlay {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    padding-right: 2px;\n    font-size: 2vh;\n    font-weight: 400;\n    z-index: 2147483646;\n}\n.vjs-dinamicoverlay-visible {\n    display: block;\n}\n.vjs-dinamicoverlay-hidden {\n    display: none;\n}\n.vjs-dynamicoverlay .vjs-dynamicoverlay-label {\n    padding-right: 5px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Skipped minification because the original files appears to be already minified.\n * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files\n */\n.video-js .vjs-overlay{color:#fff;position:absolute;text-align:center}.video-js .vjs-overlay-no-background{max-width:33%}.video-js .vjs-overlay-background{background-color:#646464;background-color:rgba(255,255,255,0.4);border-radius:3px;padding:10px;width:33%}.video-js .vjs-overlay-top-left{top:5px;left:5px}.video-js .vjs-overlay-top{left:50%;margin-left:-16.5%;top:5px}.video-js .vjs-overlay-top-right{right:5px;top:5px}.video-js .vjs-overlay-right{right:5px;top:50%;transform:translateY(-50%)}.video-js .vjs-overlay-bottom-right{bottom:3.5em;right:5px}.video-js .vjs-overlay-bottom{bottom:3.5em;left:50%;margin-left:-16.5%}.video-js .vjs-overlay-bottom-left{bottom:3.5em;left:5px}.video-js .vjs-overlay-left{left:5px;top:50%;transform:translateY(-50%)}.video-js .vjs-overlay-center{left:50%;margin-left:-16.5%;top:50%;transform:translateY(-50%)}.video-js .vjs-no-flex .vjs-overlay-left,.video-js .vjs-no-flex .vjs-overlay-center,.video-js .vjs-no-flex .vjs-overlay-right{margin-top:-15px}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".videojs-top-mutetoggle {\n    position: absolute !important;\n    font-size: 20px !important;\n    width: 50px !important;\n    height: 50px !important;\n    top: 0px !important;\n    right: 0px !important;\n    background: transparent !important;\n    z-index: 2147483647;\n}\n\n.videojs-top-mutetoggle:hover {\n    background: rgba(29, 29, 29, 0.5) !important;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(2018), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-modal-dialog,.vjs-button>.vjs-icon-placeholder:before,.vjs-modal-dialog .vjs-modal-dialog-content{position:absolute;top:0;left:0;width:100%;height:100%}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.vjs-button>.vjs-icon-placeholder:before{text-align:center}@font-face{font-family:VideoJS;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");font-weight:400;font-style:normal}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder,.vjs-icon-play{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-big-play-button .vjs-icon-placeholder:before,.video-js .vjs-play-control .vjs-icon-placeholder:before,.vjs-icon-play:before{content:\"\\f101\"}.vjs-icon-play-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-play-circle:before{content:\"\\f102\"}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder,.vjs-icon-pause{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before,.vjs-icon-pause:before{content:\"\\f103\"}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder,.vjs-icon-volume-mute{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before,.vjs-icon-volume-mute:before{content:\"\\f104\"}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder,.vjs-icon-volume-low{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before,.vjs-icon-volume-low:before{content:\"\\f105\"}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder,.vjs-icon-volume-mid{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before,.vjs-icon-volume-mid:before{content:\"\\f106\"}.video-js .vjs-mute-control .vjs-icon-placeholder,.vjs-icon-volume-high{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-mute-control .vjs-icon-placeholder:before,.vjs-icon-volume-high:before{content:\"\\f107\"}.video-js .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-enter{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-enter:before{content:\"\\f108\"}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder,.vjs-icon-fullscreen-exit{font-family:VideoJS;font-weight:400;font-style:normal}.video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before,.vjs-icon-fullscreen-exit:before{content:\"\\f109\"}.vjs-icon-square{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-square:before{content:\"\\f10a\"}.vjs-icon-spinner{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-spinner:before{content:\"\\f10b\"}.video-js .vjs-subs-caps-button .vjs-icon-placeholder,.video-js .vjs-subtitles-button .vjs-icon-placeholder,.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder,.vjs-icon-subtitles{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js .vjs-subtitles-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before,.vjs-icon-subtitles:before{content:\"\\f10c\"}.video-js .vjs-captions-button .vjs-icon-placeholder,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder,.vjs-icon-captions{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-captions-button .vjs-icon-placeholder:before,.video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before,.vjs-icon-captions:before{content:\"\\f10d\"}.video-js .vjs-chapters-button .vjs-icon-placeholder,.vjs-icon-chapters{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-chapters-button .vjs-icon-placeholder:before,.vjs-icon-chapters:before{content:\"\\f10e\"}.vjs-icon-share{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-share:before{content:\"\\f10f\"}.vjs-icon-cog{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-cog:before{content:\"\\f110\"}.video-js .vjs-play-progress,.video-js .vjs-volume-level,.vjs-icon-circle,.vjs-seek-to-live-control .vjs-icon-placeholder{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before,.vjs-icon-circle:before,.vjs-seek-to-live-control .vjs-icon-placeholder:before{content:\"\\f111\"}.vjs-icon-circle-outline{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-circle-outline:before{content:\"\\f112\"}.vjs-icon-circle-inner-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-circle-inner-circle:before{content:\"\\f113\"}.vjs-icon-hd{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-hd:before{content:\"\\f114\"}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder,.vjs-icon-cancel{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{content:\"\\f115\"}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder,.vjs-icon-replay{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before,.vjs-icon-replay:before{content:\"\\f116\"}.vjs-icon-facebook{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-facebook:before{content:\"\\f117\"}.vjs-icon-gplus{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-gplus:before{content:\"\\f118\"}.vjs-icon-linkedin{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-linkedin:before{content:\"\\f119\"}.vjs-icon-twitter{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-twitter:before{content:\"\\f11a\"}.vjs-icon-tumblr{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-tumblr:before{content:\"\\f11b\"}.vjs-icon-pinterest{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-pinterest:before{content:\"\\f11c\"}.video-js .vjs-descriptions-button .vjs-icon-placeholder,.vjs-icon-audio-description{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-descriptions-button .vjs-icon-placeholder:before,.vjs-icon-audio-description:before{content:\"\\f11d\"}.video-js .vjs-audio-button .vjs-icon-placeholder,.vjs-icon-audio{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-audio-button .vjs-icon-placeholder:before,.vjs-icon-audio:before{content:\"\\f11e\"}.vjs-icon-next-item{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-next-item:before{content:\"\\f11f\"}.vjs-icon-previous-item{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-previous-item:before{content:\"\\f120\"}.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-enter{font-family:VideoJS;font-weight:400;font-style:normal}.video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-enter:before{content:\"\\f121\"}.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder,.vjs-icon-picture-in-picture-exit{font-family:VideoJS;font-weight:400;font-style:normal}.video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before,.vjs-icon-picture-in-picture-exit:before{content:\"\\f122\"}.video-js{display:block;vertical-align:top;box-sizing:border-box;color:#fff;background-color:#000;position:relative;padding:0;font-size:10px;line-height:1;font-weight:400;font-style:normal;font-family:Arial,Helvetica,sans-serif;word-break:initial}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js[tabindex=\"-1\"]{outline:0}.video-js *,.video-js :after,.video-js :before{box-sizing:inherit}.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;list-style-position:outside;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.video-js.vjs-1-1,.video-js.vjs-16-9,.video-js.vjs-4-3,.video-js.vjs-9-16,.video-js.vjs-fluid{width:100%;max-width:100%;height:0}.video-js.vjs-16-9{padding-top:56.25%}.video-js.vjs-4-3{padding-top:75%}.video-js.vjs-9-16{padding-top:177.7777777778%}.video-js.vjs-1-1{padding-top:100%}.video-js.vjs-fill{width:100%;height:100%}.video-js .vjs-tech{position:absolute;top:0;left:0;width:100%;height:100%}body.vjs-full-window{padding:0;margin:0;height:100%}.vjs-full-window .video-js.vjs-fullscreen{position:fixed;overflow:hidden;z-index:1000;left:0;top:0;bottom:0;right:0}.video-js.vjs-fullscreen:not(.vjs-ios-native-fs){width:100%!important;height:100%!important;padding-top:0!important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-hidden{display:none!important}.vjs-disabled{opacity:.5;cursor:default}.video-js .vjs-offscreen{height:1px;left:-9999px;position:absolute;top:0;width:1px}.vjs-lock-showing{display:block!important;opacity:1!important;visibility:visible!important}.vjs-no-js{padding:20px;color:#fff;background-color:#000;font-size:18px;font-family:Arial,Helvetica,sans-serif;text-align:center;width:300px;height:150px;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#66a8cc}.video-js .vjs-big-play-button{font-size:3em;line-height:1.5em;height:1.63332em;width:3em;display:block;position:absolute;top:10px;left:10px;padding:0;cursor:pointer;opacity:1;border:.06666em solid #fff;background-color:#2b333f;background-color:rgba(43,51,63,.7);border-radius:.3em;transition:all .4s}.vjs-big-play-centered .vjs-big-play-button{top:50%;left:50%;margin-top:-.81666em;margin-left:-1.5em}.video-js .vjs-big-play-button:focus,.video-js:hover .vjs-big-play-button{border-color:#fff;background-color:#73859f;background-color:rgba(115,133,159,.5);transition:all 0s}.vjs-controls-disabled .vjs-big-play-button,.vjs-error .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button{display:none}.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button{display:block}.video-js button{background:0 0;border:none;color:inherit;display:inline-block;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.vjs-control .vjs-button{width:100%;height:100%}.video-js .vjs-control.vjs-close-button{cursor:pointer;height:3em;position:absolute;right:0;top:.5em;z-index:2}.video-js .vjs-modal-dialog{background:rgba(0,0,0,.8);background:linear-gradient(180deg,rgba(0,0,0,.8),rgba(255,255,255,0));overflow:auto}.video-js .vjs-modal-dialog>*{box-sizing:border-box}.vjs-modal-dialog .vjs-modal-dialog-content{font-size:1.2em;line-height:1.5;padding:20px 24px;z-index:1}.vjs-menu-button{cursor:pointer}.vjs-menu-button.vjs-disabled{cursor:default}.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu{display:none}.vjs-menu .vjs-menu-content{display:block;padding:0;margin:0;font-family:Arial,Helvetica,sans-serif;overflow:auto}.vjs-menu .vjs-menu-content>*{box-sizing:border-box}.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu{display:none}.vjs-menu li{list-style:none;margin:0;padding:.2em 0;line-height:1.4em;font-size:1.2em;text-align:center;text-transform:lowercase}.js-focus-visible .vjs-menu li.vjs-menu-item:hover,.vjs-menu li.vjs-menu-item:focus,.vjs-menu li.vjs-menu-item:hover{background-color:#73859f;background-color:rgba(115,133,159,.5)}.js-focus-visible .vjs-menu li.vjs-selected:hover,.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover{background-color:#fff;color:#2b333f}.js-focus-visible .vjs-menu :not(.vjs-selected):focus:not(.focus-visible),.video-js .vjs-menu :not(.vjs-selected):focus:not(:focus-visible){background:0 0}.vjs-menu li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em 0;font-weight:700;cursor:default}.vjs-menu-button-popup .vjs-menu{display:none;position:absolute;bottom:0;width:10em;left:-3em;height:0;margin-bottom:1.5em;border-top-color:rgba(43,51,63,.7)}.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:#2b333f;background-color:rgba(43,51,63,.7);position:absolute;width:100%;bottom:1.5em;max-height:15em}.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:5em}.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:10em}.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:14em}.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content{max-height:25em}.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu{display:block}.video-js .vjs-menu-button-inline{transition:all .4s;overflow:hidden}.video-js .vjs-menu-button-inline:before{width:2.222222222em}.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline{width:12em}.vjs-menu-button-inline .vjs-menu{opacity:0;height:100%;width:auto;position:absolute;left:4em;top:0;padding:0;margin:0;transition:all .4s}.vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline:hover .vjs-menu{display:block;opacity:1}.vjs-no-flex .vjs-menu-button-inline .vjs-menu{display:block;opacity:1;position:relative;width:auto}.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu{width:auto}.vjs-menu-button-inline .vjs-menu-content{width:auto;height:100%;margin:0;overflow:hidden}.video-js .vjs-control-bar{display:none;width:100%;position:absolute;bottom:0;left:0;right:0;height:3em;background-color:#2b333f;background-color:rgba(43,51,63,.7)}.vjs-has-started .vjs-control-bar{display:flex;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:visible;opacity:0;pointer-events:none;transition:visibility 1s,opacity 1s}.vjs-controls-disabled .vjs-control-bar,.vjs-error .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar{display:none!important}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}.vjs-has-started.vjs-no-flex .vjs-control-bar{display:table}.video-js .vjs-control{position:relative;text-align:center;margin:0;padding:0;height:100%;width:4em;flex:none}.vjs-button>.vjs-icon-placeholder:before{font-size:1.8em;line-height:1.67}.vjs-button>.vjs-icon-placeholder{display:block}.video-js .vjs-control:focus,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before{text-shadow:0 0 1em #fff}.video-js .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.video-js .vjs-custom-control-spacer{display:none}.video-js .vjs-progress-control{cursor:pointer;flex:auto;display:flex;align-items:center;min-width:4em;touch-action:none}.video-js .vjs-progress-control.disabled{cursor:default}.vjs-live .vjs-progress-control{display:none}.vjs-liveui .vjs-progress-control{display:flex;align-items:center}.vjs-no-flex .vjs-progress-control{width:auto}.video-js .vjs-progress-holder{flex:auto;transition:all .2s;height:.3em}.video-js .vjs-progress-control .vjs-progress-holder{margin:0 10px}.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.6666666667em}.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled{font-size:1em}.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div,.video-js .vjs-progress-holder .vjs-play-progress{position:absolute;display:block;height:100%;margin:0;padding:0;width:0}.video-js .vjs-play-progress{background-color:#fff}.video-js .vjs-play-progress:before{font-size:.9em;position:absolute;right:-.5em;top:-.3333333333em;z-index:1}.video-js .vjs-load-progress{background:rgba(115,133,159,.5)}.video-js .vjs-load-progress div{background:rgba(115,133,159,.75)}.video-js .vjs-time-tooltip{background-color:#fff;background-color:rgba(255,255,255,.8);border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px 8px;pointer-events:none;position:absolute;top:-3.4em;visibility:hidden;z-index:1}.video-js .vjs-progress-holder:focus .vjs-time-tooltip{display:none}.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip,.video-js .vjs-progress-control:hover .vjs-time-tooltip{display:block;font-size:.6em;visibility:visible}.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip{font-size:1em}.video-js .vjs-progress-control .vjs-mouse-display{display:none;position:absolute;width:1px;height:100%;background-color:#000;z-index:1}.vjs-no-flex .vjs-progress-control .vjs-mouse-display{z-index:0}.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display{visibility:hidden;opacity:0;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display{display:none}.vjs-mouse-display .vjs-time-tooltip{color:#fff;background-color:#000;background-color:rgba(0,0,0,.8)}.video-js .vjs-slider{position:relative;cursor:pointer;padding:0;margin:0 .45em 0 .45em;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#73859f;background-color:rgba(115,133,159,.5)}.video-js .vjs-slider.disabled{cursor:default}.video-js .vjs-slider:focus{text-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.video-js .vjs-mute-control{cursor:pointer;flex:none}.video-js .vjs-volume-control{cursor:pointer;margin-right:1em;display:flex}.video-js .vjs-volume-control.vjs-volume-horizontal{width:5em}.video-js .vjs-volume-panel .vjs-volume-control{visibility:visible;opacity:0;width:1px;height:1px;margin-left:-1px}.video-js .vjs-volume-panel{transition:width 1s}.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active,.video-js .vjs-volume-panel .vjs-volume-control:active,.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control,.video-js .vjs-volume-panel:active .vjs-volume-control,.video-js .vjs-volume-panel:focus .vjs-volume-control{visibility:visible;opacity:1;position:relative;transition:visibility .1s,opacity .1s,height .1s,width .1s,left 0s,top 0s}.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal{width:5em;height:3em;margin-right:0}.video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical,.video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-hover .vjs-mute-control~.vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,.video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical{left:-3.5em;transition:left 0s}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active{width:10em;transition:width .1s}.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only{width:4em}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{height:8em;width:3em;left:-3000em;transition:visibility 1s,opacity 1s,height 1s 1s,width 1s 1s,left 1s 1s,top 1s 1s}.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{transition:visibility 1s,opacity 1s,height 1s 1s,width 1s,left 1s 1s,top 1s 1s}.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal{width:5em;height:3em;visibility:visible;opacity:1;position:relative;transition:none}.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical{position:absolute;bottom:3em;left:.5em}.video-js .vjs-volume-panel{display:flex}.video-js .vjs-volume-bar{margin:1.35em .45em}.vjs-volume-bar.vjs-slider-horizontal{width:5em;height:.3em}.vjs-volume-bar.vjs-slider-vertical{width:.3em;height:5em;margin:1.35em auto}.video-js .vjs-volume-level{position:absolute;bottom:0;left:0;background-color:#fff}.video-js .vjs-volume-level:before{position:absolute;font-size:.9em;z-index:1}.vjs-slider-vertical .vjs-volume-level{width:.3em}.vjs-slider-vertical .vjs-volume-level:before{top:-.5em;left:-.3em;z-index:1}.vjs-slider-horizontal .vjs-volume-level{height:.3em}.vjs-slider-horizontal .vjs-volume-level:before{top:-.3em;right:-.5em}.video-js .vjs-volume-panel.vjs-volume-panel-vertical{width:4em}.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}.video-js .vjs-volume-vertical{width:3em;height:8em;bottom:8em;background-color:#2b333f;background-color:rgba(43,51,63,.7)}.video-js .vjs-volume-horizontal .vjs-menu{left:-2em}.video-js .vjs-volume-tooltip{background-color:#fff;background-color:rgba(255,255,255,.8);border-radius:.3em;color:#000;float:right;font-family:Arial,Helvetica,sans-serif;font-size:1em;padding:6px 8px 8px 8px;pointer-events:none;position:absolute;top:-3.4em;visibility:hidden;z-index:1}.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip,.video-js .vjs-volume-control:hover .vjs-volume-tooltip{display:block;font-size:1em;visibility:visible}.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip,.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip{left:1em;top:-12px}.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip{font-size:1em}.video-js .vjs-volume-control .vjs-mouse-display{display:none;position:absolute;width:100%;height:1px;background-color:#000;z-index:1}.video-js .vjs-volume-horizontal .vjs-mouse-display{width:1px;height:100%}.vjs-no-flex .vjs-volume-control .vjs-mouse-display{z-index:0}.video-js .vjs-volume-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display{visibility:hidden;opacity:0;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-volume-control .vjs-mouse-display{display:none}.vjs-mouse-display .vjs-volume-tooltip{color:#fff;background-color:#000;background-color:rgba(0,0,0,.8)}.vjs-poster{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-position:50% 50%;background-size:contain;background-color:#000;cursor:pointer;margin:0;padding:0;position:absolute;top:0;right:0;bottom:0;left:0;height:100%}.vjs-has-started .vjs-poster{display:none}.vjs-audio.vjs-has-started .vjs-poster{display:block}.vjs-using-native-controls .vjs-poster{display:none}.video-js .vjs-live-control{display:flex;align-items:flex-start;flex:auto;font-size:1em;line-height:3em}.vjs-no-flex .vjs-live-control{display:table-cell;width:auto;text-align:left}.video-js.vjs-liveui .vjs-live-control,.video-js:not(.vjs-live) .vjs-live-control{display:none}.video-js .vjs-seek-to-live-control{align-items:center;cursor:pointer;flex:none;display:inline-flex;height:100%;padding-left:.5em;padding-right:.5em;font-size:1em;line-height:3em;width:auto;min-width:4em}.vjs-no-flex .vjs-seek-to-live-control{display:table-cell;width:auto;text-align:left}.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,.video-js:not(.vjs-live) .vjs-seek-to-live-control{display:none}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge{cursor:auto}.vjs-seek-to-live-control .vjs-icon-placeholder{margin-right:.5em;color:#888}.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder{color:red}.video-js .vjs-time-control{flex:none;font-size:1em;line-height:3em;min-width:2em;width:auto;padding-left:1em;padding-right:1em}.vjs-live .vjs-time-control{display:none}.video-js .vjs-current-time,.vjs-no-flex .vjs-current-time{display:none}.video-js .vjs-duration,.vjs-no-flex .vjs-duration{display:none}.vjs-time-divider{display:none;line-height:3em}.vjs-live .vjs-time-divider{display:none}.video-js .vjs-play-control{cursor:pointer}.video-js .vjs-play-control .vjs-icon-placeholder{flex:none}.vjs-text-track-display{position:absolute;bottom:3em;left:0;right:0;top:0;pointer-events:none}.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}.video-js .vjs-text-track{font-size:1.4em;text-align:center;margin-bottom:.1em}.vjs-subtitles{color:#fff}.vjs-captions{color:#fc6}.vjs-tt-cue{display:block}video::-webkit-media-text-track-display{transform:translateY(-3em)}.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{transform:translateY(-1.5em)}.video-js .vjs-picture-in-picture-control{cursor:pointer;flex:none}.video-js .vjs-fullscreen-control{cursor:pointer;flex:none}.vjs-playback-rate .vjs-playback-rate-value,.vjs-playback-rate>.vjs-menu-button{position:absolute;top:0;left:0;width:100%;height:100%}.vjs-playback-rate .vjs-playback-rate-value{pointer-events:none;font-size:1.5em;line-height:2;text-align:center}.vjs-playback-rate .vjs-menu{width:4em;left:0}.vjs-error .vjs-error-display .vjs-modal-dialog-content{font-size:1.4em;text-align:center}.vjs-error .vjs-error-display:before{color:#fff;content:\"X\";font-family:Arial,Helvetica,sans-serif;font-size:4em;left:0;line-height:1;margin-top:-.5em;position:absolute;text-shadow:.05em .05em .1em #000;text-align:center;top:50%;vertical-align:middle;width:100%}.vjs-loading-spinner{display:none;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;opacity:.85;text-align:left;border:6px solid rgba(43,51,63,.7);box-sizing:border-box;background-clip:padding-box;width:50px;height:50px;border-radius:25px;visibility:hidden}.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{display:block;-webkit-animation:vjs-spinner-show 0s linear .3s forwards;animation:vjs-spinner-show 0s linear .3s forwards}.vjs-loading-spinner:after,.vjs-loading-spinner:before{content:\"\";position:absolute;margin:-6px;box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:transparent;border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite}.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{border-top-color:#fff;-webkit-animation-delay:.44s;animation-delay:.44s}@keyframes vjs-spinner-show{to{visibility:visible}}@-webkit-keyframes vjs-spinner-show{to{visibility:visible}}@keyframes vjs-spinner-spin{100%{transform:rotate(360deg)}}@-webkit-keyframes vjs-spinner-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}100%{border-top-color:#73859f}}@-webkit-keyframes vjs-spinner-fade{0%{border-top-color:#73859f}20%{border-top-color:#73859f}35%{border-top-color:#fff}60%{border-top-color:#73859f}100%{border-top-color:#73859f}}.vjs-chapters-button .vjs-menu ul{width:24em}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;display:inline-block;margin-bottom:-.1em}.video-js .vjs-subs-caps-button+.vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{font-family:VideoJS;content:\"\";font-size:1.5em;line-height:inherit}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder{vertical-align:middle;display:inline-block;margin-bottom:-.1em}.video-js .vjs-audio-button+.vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before{font-family:VideoJS;content:\" \";font-size:1.5em;line-height:inherit}.video-js.vjs-layout-small .vjs-audio-button,.video-js.vjs-layout-small .vjs-captions-button,.video-js.vjs-layout-small .vjs-chapters-button,.video-js.vjs-layout-small .vjs-current-time,.video-js.vjs-layout-small .vjs-descriptions-button,.video-js.vjs-layout-small .vjs-duration,.video-js.vjs-layout-small .vjs-playback-rate,.video-js.vjs-layout-small .vjs-remaining-time,.video-js.vjs-layout-small .vjs-subtitles-button,.video-js.vjs-layout-small .vjs-time-divider,.video-js.vjs-layout-small .vjs-volume-control,.video-js.vjs-layout-tiny .vjs-audio-button,.video-js.vjs-layout-tiny .vjs-captions-button,.video-js.vjs-layout-tiny .vjs-chapters-button,.video-js.vjs-layout-tiny .vjs-current-time,.video-js.vjs-layout-tiny .vjs-descriptions-button,.video-js.vjs-layout-tiny .vjs-duration,.video-js.vjs-layout-tiny .vjs-playback-rate,.video-js.vjs-layout-tiny .vjs-remaining-time,.video-js.vjs-layout-tiny .vjs-subtitles-button,.video-js.vjs-layout-tiny .vjs-time-divider,.video-js.vjs-layout-tiny .vjs-volume-control,.video-js.vjs-layout-x-small .vjs-audio-button,.video-js.vjs-layout-x-small .vjs-captions-button,.video-js.vjs-layout-x-small .vjs-chapters-button,.video-js.vjs-layout-x-small .vjs-current-time,.video-js.vjs-layout-x-small .vjs-descriptions-button,.video-js.vjs-layout-x-small .vjs-duration,.video-js.vjs-layout-x-small .vjs-playback-rate,.video-js.vjs-layout-x-small .vjs-remaining-time,.video-js.vjs-layout-x-small .vjs-subtitles-button,.video-js.vjs-layout-x-small .vjs-time-divider,.video-js.vjs-layout-x-small .vjs-volume-control{display:none!important}.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active,.video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover{width:auto;width:initial}.video-js.vjs-layout-tiny .vjs-subs-caps-button,.video-js.vjs-layout-x-small:not(.vjs-live) .vjs-subs-caps-button,.video-js.vjs-layout-x-small:not(.vjs-liveui) .vjs-subs-caps-button{display:none}.video-js.vjs-layout-tiny .vjs-custom-control-spacer,.video-js.vjs-layout-x-small.vjs-liveui .vjs-custom-control-spacer{flex:auto;display:block}.video-js.vjs-layout-tiny.vjs-no-flex .vjs-custom-control-spacer,.video-js.vjs-layout-x-small.vjs-liveui.vjs-no-flex .vjs-custom-control-spacer{width:auto}.video-js.vjs-layout-tiny .vjs-progress-control,.video-js.vjs-layout-x-small.vjs-liveui .vjs-progress-control{display:none}.vjs-modal-dialog.vjs-text-track-settings{background-color:#2b333f;background-color:rgba(43,51,63,.75);color:#fff;height:70%}.vjs-text-track-settings .vjs-modal-dialog-content{display:table}.vjs-text-track-settings .vjs-track-settings-colors,.vjs-text-track-settings .vjs-track-settings-controls,.vjs-text-track-settings .vjs-track-settings-font{display:table-cell}.vjs-text-track-settings .vjs-track-settings-controls{text-align:right;vertical-align:bottom}@supports (display:grid){.vjs-text-track-settings .vjs-modal-dialog-content{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;padding:20px 24px 0 24px}.vjs-track-settings-controls .vjs-default-button{margin-bottom:20px}.vjs-text-track-settings .vjs-track-settings-controls{grid-column:1/-1}.vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content,.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content{grid-template-columns:1fr}}.vjs-track-setting>select{margin-right:1em;margin-bottom:.5em}.vjs-text-track-settings fieldset{margin:5px;padding:3px;border:none}.vjs-text-track-settings fieldset span{display:inline-block}.vjs-text-track-settings fieldset span>select{max-width:7.3em}.vjs-text-track-settings legend{color:#fff;margin:0 0 5px 0}.vjs-text-track-settings .vjs-label{position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);display:block;margin:0 0 5px 0;padding:0;border:0;height:1px;width:1px;overflow:hidden}.vjs-track-settings-controls button:active,.vjs-track-settings-controls button:focus{outline-style:solid;outline-width:medium;background-image:linear-gradient(0deg,#fff 88%,#73859f 100%)}.vjs-track-settings-controls button:hover{color:rgba(43,51,63,.75)}.vjs-track-settings-controls button{background-color:#fff;background-image:linear-gradient(-180deg,#fff 88%,#73859f 100%);color:#2b333f;cursor:pointer;border-radius:2px}.vjs-track-settings-controls .vjs-default-button{margin-right:1em}@media print{.video-js>:not(.vjs-tech):not(.vjs-poster){visibility:hidden}}.vjs-resize-manager{position:absolute;top:0;left:0;width:100%;height:100%;border:none;z-index:-1000}.js-focus-visible .video-js :focus:not(.focus-visible){outline:0}.video-js :focus:not(:focus-visible){outline:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.n list;
};

/***/ }),

/***/ 1667:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 808

/***/ }),

/***/ 3379:
/***/ (function(module) {

"use strict";


var stylesInpdater;
}
module.s;
  };
};

/***/ }),

/***/ 569:
/***/ (function(module) {

"use strict";


var memo = {};

/* istanbul ignorearget];
}

/* istanbul ignorestyle);
}
module.exports = insertBySelector;

/***/ }),

/***/ 9216:
/***/ (function(module) {

"use strict";


/* istanbul ignorelement;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignoree);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7795:
/***/ (function(module) {

"use strict";


/* istanbul ignoreement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 4589:
/***/ (function(module) {

"use strict";


/* istanbul ignore));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 3785:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.definl.value)};$jscomp.getGlobal=function(k){return"undefined"!=typeof window&&window===k?k:"undefined"!=typeof __webpack_require__.g&&null!=__webpack_require__.g?__webpack_require__.g:k};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.i.Symbol)};$jsco"")+k++}}();
$jscomp.initSymbotion(){}};$jscomp.arrane:!0}})};
$jscomp.iteratorreturn k};$jscomp.makrator(k)};$jscomp.arrayFroreturn l};$jscomp.arrayFroator(k))};
$jscomp.iteratorreturn a};
$jscomplue:m})}};$jscomp.polyfill("Array.prototurn k})}},"es6","es3");
$jscomp.polyfill("O&&l!==l}},"es6","es3");$jscomp.polyfill("Array.prototype.eturn!1}},"es7","es3");
$jscomp.checkSurn k+""};$jscomp.polyfill("String.prototype.k,l||0)}},"es6","es3");$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill(return b},"es6","es3");$jscomp.owns=function(k,m){return Object.prototype.hasOwnProperty.call(k,m)};
$jscomp.polyfill("Objeceturn l}},"es8","es3");$jscomp.polyfill("String.prototype.strn d>=c}},"es6","es3");
$jscomp.polyfill("Objeceturn k}},"es6","es3");
(function(){var k="SDK_"+"6.60.0-cf7e8a0d-202312012030".replace(/[^\w]/g,"_"),m="undefined"!=typeof window?window:"undefined"!=typeof GLOBAL?GLOBAL:this;m.tv=m.tv||{};m.tv.freewheel=m.tv.freewheel||{};m.tv.freewheel[k]=function(k){var a={version:"js-6.60.0-cf7e8a0d-202312012030"};"undefined"!==typeof window&&(window._fw_admanager=window._fw_admanager||{},window._fw_admanager.version=a.version);a.LOG_LEVEL_QUIET=0;a.LOG_LEVEL_INFO=1;a.LOG_LEVEL_DEBUG=2;a.setLogLevel=function(b){a.warn=a.log=a.debug=
function(){};if("undefined"!==typeof console){try{window.localStorage&&window.localStorage.getItem("fwLogLevel")&&-1<window.localStorage.getItem("fwLogLevel")&&(b=window.localStorage.getItem("fwLogLevel"))}catch(c){console.warn(">FW Common.setLogLevel "+c.name+": "+c.message)}b>a.LOG_LEVEL_QUIET&&(a.log=function(){console.log(">FW "+(new Date).toISOString().substr(14,9)+" "+Array.prototype.slice.call(arguments).join(" "))},a.warn=function(){console.warn(">FW "+(new Date).toISOString().substr(14,9)+
" "+Array.prototype.slice.call(arguments).join(" "))},b>a.LOG_LEVEL_INFO&in(" "))}))}};a.setLogLevel(a.LOG_LEVEL_INFO);a.log("FreeWheel Integration Runtime",a.version);a.proxyUrl=null;a.creativesProxyUrl=null;a.proxyAuthenticationParameter=null;a.setProxy=function(b){a.debug("setProxy: "+b);a.Util.isValidProxyUrl(b)&&(a.proxyUrl="/"!==b.charAt(b.length-1)?b+"/":b)};a.setCreatib+"/":b)};a.setProxyAuthentication""}:null};a.check_CHROME)};a.checkUserAgent(navigator.userAgent.toLowerCase());a.PLATFORM_EVENT_CLICK=a.PLATFORM_IS_MOBILE?"touchend":"click";a.MOBILE_EVENT_DRAG="touchmove";a.PLATFORM_SEND_REQUEST_BY_FORM=!1;a.PLATFORM_SEND_REQUEST_BY_JS=!1;a.PLATFORM_AUTO_SEEK_AFTER_MIDROLL=a.PLATFORM_IS_IPAD;
a.PLATFORM_NOT_SUPPORT_OVERLAY_AD=a.PLATFORM_IS_IPHONE_IPOD||a.PLATFORM_IS_WINDOWSPHONE;a.PLATFORM_NOT_SUPPORT_MIDROLL_AD=9<=a.PLATFORM_IE_MOBILE_VERSION;a.PLATFORM_NOT_SUPPORT_CLICK_FOR_VIDEO=a.PLATFORM_IS_IPHONE_IPOD&&10>a.PLATFORM_IOS_VERSION||a.PLATFORM_IS_WINDOWSPHONE||a.PLATFORM_IS_CHROMECAST;a.PLATFORM_NOT_FIRE_CLICK_WHEN_AD_VIDEO_PAUSED=3.1<=a.PLATFORM_ANDROID_VERSION||10<=a.PLATFORM_IOS_VERSION;a.PLATFORM_VIDEO_DOESNOT_SUPPORT_TIMEUPDATE=9<=a.PLATFORM_IE_MOBILE_VERSION;a.PLATFORM_PLAY_DUMMY_VIDEO_FOR_PREROLL=
0<a.PLATFORM_IOS_VERSION&&4.2>a.PLATFORM_IOS_VERSION&&4<=a.PLATFORM_IOS_VERSION;a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT=0===a.PLATFORM_IOS_VERSION||4<=a.PLATFORM_IOS_VERSION&&4.2>a.PLATFORM_IOS_VERSION;a.PLATFORM_BLOCKS_AUTOPLAY=a.PLATFORM_IS_MOBILE||a.PLATFORM_IS_SAFARI||a.PLATFORM_IS_CHROME&&(0<a.PLATFORM_ANDROID_VERSION||64<=a.PLATFORM_BROWSER_VERSION)||a.PLATFORM_IS_FIREFOX&&66<=a.PLATFORM_BROWSER_VERSION;a.PLATFORM_NOT_SUPPORT_DASH=0<a.PLATFORM_IOS_VERSION;a.PLATFORM_HLSJS_MIN_VERSION=
"0.11.0";a.PLATFORM_DASHJS_SUPPORTED_VERSION="3.0.3";a.CONTEXT_REQUEST_TIMEOUT=5;a.RENDERER_STATE_INIT=1;a.RENDERER_STATE_STARTING=2;a.RENDERER_STATE_STARTED=3;a.RENDERER_STATE_COMPLETING=4;a.RENDERER_STATE_COMPLETED=5;a.RENDERER_STATE_FAILED=6;a.TRANSLATOR_STATE_INIT=a.RENDERER_STATE_INIT;a.TRANSLATOR_STATE_STARTING=a.RENDERER_STATE_STARTING;a.TRANSLATOR_STATE_STARTED=a.RENDERER_STATE_STARTED;a.TRANSLATOR_STATE_COMPLETING=a.RENDERER_STATE_COMPLETING;a.TRANSLATOR_STATE_COMPLETED=a.RENDERER_STATE_COMPLETED;
a.TRANSLATOR_STATE_FAILED=a.RENDERER_STATE_FAILED;a.EVENT_AD="adEvent";a.EVENT_AD_BUFFERING_START="adBufferingStart";a.EVENT_AD_BUFFERING_END="adBufferingEnd";a.EVENT_SLOT_IMPRESSION="slotImpression";a.EVENT_SLOT_END="slotEnd";a.EVENT_AD_INITIATED="adInitiated";a.EVENT_AD_PREINIT="preInit";a.EVENT_AD_IMPRESSION="defaultImpression";a.EVENT_AD_IMPRESSION_END="adEnd";a.EVENT_AD_QUARTILE="quartile";a.EVENT_AD_FIRST_QUARTILE="firstQuartile";a.EVENT_AD_MIDPOINT="midPoint";a.EVENT_AD_THIRD_QUARTILE="thirdQuartile";
a.EVENT_AD_SKIPPED="adSkipped";a.EVENT_AD_PROGRESS="progress";a.EVENT_AD_COMPLETE="complete";a.EVENT_AD_CLICK="defaultClick";a.EVENT_AD_MUTE="_mute";a.EVENT_AD_UNMUTE="_un-mute";a.EVENT_AD_COLLAPSE="_collapse";a.EVENT_AD_EXPAND="_expand";a.EVENT_AD_PAUSE="_pause";a.EVENT_AD_RESUME="_resume";a.EVENT_AD_REWIND="_rewind";a.EVENT_AD_ACCEPT_INVITATION="_accept-invitation";a.EVENT_AD_CLOSE="_close";a.EVENT_AD_MINIMIZE="_minimize";a.EVENT_ERROR="_e_unknown";a.EVENT_RESELLER_NO_AD="resellerNoAd";a.EVENT_AD_MEASUREMENT=
"concreteEvent";a.EVENT_EXTENSION_LOADED="extensionLoaded";a.EVENT_AD_VOLUME_CHANGE="adVolumeChange";a.EVENT_AD_AUTO_PLAY_BLOCKED="videoAutoPlayBlocked";a.EVENT_AD_SKIPPABLE_STATE_CHANGED="skippableStateChanged";a.EVENT_VIDEO_DISPLAY_BASE_CHANGED="videoDisplayBaseChanged";a.INFO_KEY_CUSTOM_ID="customId";a.INFO_KEY_MODULE_TYPE="moduleType";a.INFO_KEY_AD_SKIPPABLE_STATE="skippableState";a.MODULE_TYPE_EXTENSION="extension";a.MODULE_TYPE_RENDERER="renderer";a.MODULE_TYPE_TRANSLATOR="translator";a.INFO_KEY_START_TIME_POSITION=
"startTimePosition";a.INFO_KEY_ERROR_CODE="errorCode";a.INFO_KEY_ERROR_INFO="errorInfo";a.INFO_KEY_ERROR_MODULE="errorModule";a.INFO_KEY_VAST_ERROR_CODE="vastErrorCode";a.ERROR_IO="_e_io";a.ERROR_TIMEOUT="_e_timeout";a.ERROR_NULL_ASSET="_e_null-asset";a.ERROR_ADINSTANCE_UNAVAILABLE="_e_adinst-unavail";a.ERROR_UNKNOWN="_e_unknown";a.ERROR_MISSING_PARAMETER="_e_missing-param";a.ERROR_NO_AD_AVAILABLE="_e_no-ad";a.ERROR_PARSE="_e_parse";a.ERROR_INVALID_VALUE="_e_invalid-value";a.ERROR_INVALID_SLOT="_e_invalid-slot";
a.ERROR_NO_RENDERER="_e_no-renderer";a.ERROR_DEVICE_LIMIT="_e_device-limit";a.ERROR_3P_COMPONENT="_e_3p-comp";a.ERROR_UNSUPPORTED_3P_FEATURE="_e_unsupp-3p-feature";a.ERROR_SECURITY="_e_security";a.ERROR_UNMATCHED_SLOT_SIZE="_e_slot-size-unmatch";a.ERROR_DASHJS="_e_dashjs";a.ERROR_HLSJS="_e_hlsjs";a.ERROR_CUSTOM_PLAYER="_e_custom_player";a.INFO_KEY_URL="url";a.INFO_KEY_SHOW_BROWSER="showBrowser";a.INFO_KEY_CUSTOM_EVENT_NAME="customEventName";a.INFO_KEY_NEED_EMPTY_CT="needEmptyCT";a.INFO_KEY_CONCRETE_EVENT_ID=
"concreteEventId";a.EVENT_TYPE_CLICK_TRACKING="CLICKTRACKING";a.EVENT_TYPE_IMPRESSION="IMPRESSION";a.EVENT_TYPE_CLICK="CLICK";a.EVENT_TYPE_STANDARD="STANDARD";a.EVENT_TYPE_GENERIC="GENERIC";a.EVENT_TYPE_ERROR="ERROR";a.EVENT_VIDEO_VIEW="videoView";a.SHORT_EVENT_TYPE_IMPRESSION="i";a.SHORT_EVENT_TYPE_CLICK="c";a.SHORT_EVENT_TYPE_STANDARD="s";a.SHORT_EVENT_TYPE_ERROR="e";a.INIT_VALUE_ZERO="0";a.INIT_VALUE_ONE="1";a.INIT_VALUE_TWO="2";a.INFO_KEY_PARAMETERS="parameters";a.URL_PARAMETER_KEY_ET="et";a.URL_PARAMETER_KEY_CN=
"cn";a.URL_PARAMETER_KEY_INIT="init";a.URL_PARAMETER_KEY_CT="ct";a.URL_PARAMETER_KEY_METR="metr";a.URL_PARAMETER_KEY_CR="cr";a.URL_PARAMETER_KEY_KEY_VALUE="kv";a.URL_PARAMETER_KEY_ERROR_INFO="additional";a.URL_PARAMETER_KEY_ERROR_MODULE="renderer";a.URL_PARAMETER_KEY_CREATIVE_RENDITION_ID="reid";a.URL_PARAMETER_KEY_CONCRETE_EVENT_ID="creid";a.URL_PARAMETER_START_TIME_POSITION="stpos";a.URL_PARAMETER_KEY_AUTO_PLAY_BLOCKED="f";a.URL_PARAMETER_KEY_AUTO_PLAY_BLOCKED_VALUE="16777216";a.CAPABILITY_SLOT_TEMPLATE=
"sltp";a.CAPABILITY_DISPLAY_REFRESH="rfnt";a.CAPABILITY_MULTIPLE_CREATIVE_RENDITIONS="emcr";a.CAPABILITY_RECORD_VIDEO_VIEW="exvt";a.CAPABILITY_CHECK_COMPANION="cmpn";a.CAPABILITY_CHECK_TARGETING="targ";a.CAPABILITY_RESET_EXCLUSIVITY="rste";a.CAPABILITY_FALLBACK_UNKNOWN_ASSET="unka";a.CAPABILITY_FALLBACK_UNKNOWN_SITE_SECTION="unks";a.CAPABILITY_FALLBACK_ADS="fbad";a.CAPABILITY_SLOT_CALLBACK="slcb";a.CAPABILITY_NULL_CREATIVE="nucr";a.CAPABILITY_AUTO_EVENT_TRACKING="aeti";a.CAPABILITY_RENDERER_MANIFEST=
"rema";a.CAPABILITY_REQUIRE_VIDEO_CALLBACK="vicb";a.CAPABILITY_SKIP_AD_SELECTION="skas";a.CAPABILITY_REQUIRE_ADVANCED_CALLBACK="amcb";a.CAPABILITY_REQUIRE_QUARTILE_CALLBACK="qtcb";a.CAPABILITY_REQUIRE_COMPLETE_CALLBACK="cpcb";a.SLOT_TYPE_TEMPORAL="temporal";a.SLOT_TYPE_VIDEOPLAYER_NONTEMPORAL="videoPlayerNonTemporal";a.SLOT_TYPE_SITESECTION_NONTEMPORAL="siteSectionNonTemporal";a.TIME_POSITION_CLASS_PREROLL="PREROLL";a.TIME_POSITION_CLASS_MIDROLL="MIDROLL";a.TIME_POSITION_CLASS_POSTROLL="POSTROLL";
a.TIME_POSITION_CLASS_OVERLAY="OVERLAY";a.TIME_POSITION_CLASS_DISPLAY="DISPLAY";a.TIME_POSITION_CLASS_PAUSE_MIDROLL="PAUSE_MIDROLL";a.EVENT_REQUEST_INITIATED="onRequestInitiated";a.EVENT_REQUEST_COMPLETE="onRequestComplete";a.EVENT_SLOT_STARTED="onSlotStarted";a.EVENT_SLOT_ENDED="onSlotEnded";a.EVENT_CONTENT_VIDEO_PAUSED="contentVideoPaused";a.EVENT_CONTENT_VIDEO_RESUMED="contentVideoResumed";a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST="contentVideoPauseRequest";a.EVENT_CONTENT_VIDEO_RESUME_REQUEST="contentVideoResumeRequest";
a.EVENT_USER_ACTION_NOTIFIED="userActionNotified";a.EVENT_USER_ACTION_PAUSE_BUTTON_CLICKED="pauseButtonClicked";a.EVENT_USER_ACTION_RESUME_BUTTON_CLICKED="resumeButtonClicked";a.CAPABILITY_STATUS_OFF=0;a.CAPABILITY_STATUS_ON=1;a.PARAMETER_LEVEL_PROFILE=0;a.PARAMETER_LEVEL_GLOBAL=1;a.PARAMETER_LEVEL_OVERRIDE=5;a.PARAMETER_ENABLE_COUNTING_REPLAY_CALLBACK="enableCountingReplayCallback";a.PARAMETER_ENABLE_FORM_TRANSPORT="sdk.enableFormTransport";a.PARAMETER_ENABLE_JS_TRANSPORT="sdk.enableJSTransport";
a.PARAMETER_DESIRED_BITRATE="desiredBitrate";a.PARAMETER_PAGE_SLOT_CONTENT_TYPE="sdk.pageSlotContentType";a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT="extension.ad.control.clickElement";a.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED="extension.contentVideo.enabled";a.PARAMETER_EXTENSION_CONTENT_VIDEO_RESPOND_PAUSE_RESUME="extension.contentVideo.respondPauseResume";a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SEEK_BACK="extension.contentVideo.autoSeekBack";a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE=
"extension.contentVideo.autoSourceRestore";a.PARAMETER_EXTENSION_PAUSE_AD_ENABLE="extension.pausead.enable";a.PARAMETER_EXTENSION_OMSDK_ENABLED="extension.omsdk.enabled";a.PARAMETER_EXTENSION_VIDEO_STATE_ENABLED="extension.videoState.enabled";a.PARAMETER_EXTENSION_SKIPPABLE_AD_ENABLED="extension.skippableAd.enabled";a.PARAMETER_EXTENSION_SKIPPABLE_AD_BUTTON_TEXT="extension.skippableAd.buttonText";a.PARAMETER_EXTENSION_SKIPPABLE_AD_BUTTON_CLASS="extension.skippableAd.buttonClass";a.PARAMETER_EXTENSION_SKIPPABLE_AD_CONTROL_CLICK_ELEMENT=
"extension.skippableAd.control.clickElement";a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT="renderer.video.startDetectTimeout";a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT="renderer.video.progressDetectTimeout";a.PARAMETER_RENDERER_VIDEO_ANDROID_DELAY="renderer.video.android.delay";a.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE="renderer.video.displayControlsWhenPause";a.PARAMETER_RENDERER_VIDEO_CLICK_DETECTION="renderer.video.clickDetection";a.PARAMETER_RENDERER_VIDEO_PLAY_AFTER_STALLED=
"renderer.video.playAfterStalled";a.PARAMETER_EXTENSION_SURVEY_ENABLED="extension.survey.enabled";a.PARAMETER_AUTO_PAUSE_AD_ONVISIBILITYCHANGE="autoPauseAdOnVisibilityChange";a.PARAMETER_DISABLE_CORS_ENFORCEMENT="disableCORSEnforcement";a.PARAMETER_ENABLE_ACCESS_CONTROL_ALLOW_CREDENTIALS="enableAccessControlAllowCredentials";a.PARAMETER_RENDERER_DISPLAY_COAD_SCRIPT_NAME="renderer.html.coadScriptName";a.PARAMETER_RENDERER_HTML_SHOULD_BACKGROUND_TRANSPARENT="renderer.html.isBackgroundTransparent";a.PARAMETER_RENDERER_HTML_SHOULD_END_AFTER_DURATION=
"renderer.html.shouldEndAfterDuration";a.PARAMETER_RENDERER_HTML_AD_LOAD_TIMEOUT="renderer.html.adLoadTimeout";a.PARAMETER_RENDERER_HTML_RENDER_IMAGE_WITHOUT_IFRAME="renderer.html.renderImageWithoutIFrame";a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE="renderer.html.placementType";a.PARAMETER_RENDERER_HTML_BOOTSTRAP="renderer.html.bootstrap";a.PARAMETER_RENDERER_HTML_PRIMARY_ANCHOR="renderer.html.primaryAnchor";a.PARAMETER_RENDERER_HTML_MARGIN_WIDTH="renderer.html.marginWidth";a.PARAMETER_RENDERER_HTML_MARGIN_HEIGHT=
"renderer.html.marginHeight";a.PARAMETER_VPAID_CREATIVE_TIMEOUT_DELAY="renderer.vpaid.creativeTimeoutDelay";a.PARAMETER_VAST_TIMEOUT_IN_MILLISECONDS="translator.vast.timeoutInMilliseconds";a.PARAMETER_VAST_MAX_WRAPPER_COUNT="translator.vast.maxWrapperCount";a.VAST_DEFAULT_MAX_WRAPPER_COUNT=5;a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INTERSTITIAL="interstitial";a.PARAMETER_RENDERER_HTML_BASEUNIT_INTERSTITIAL="app-interstitial";a.PARAMETER_CONSENT_RETRIEVAL_TIMEOUT="consent_retrieval_timeout";a.PARAMETER_USE_GDPR_TCFAPI=
"useGDPR_TCFAPI";a.PARAMETER_USE_CCPA_USPAPI="useCCPA_USPAPI";a.PARAMETER_USE_GPP="useGPP";a.CMP_GPP_VERSION=1;a.GDPR_TCFAPI_VERSION=2;a.CCPA_USPAPI_VERSION=1;a.ID_TYPE_FW=1;a.ID_TYPE_CUSTOM=2;a.ID_TYPE_GROUP=3;a.VIDEO_STATE_PLAYING=1;a.VIDEO_STATE_PAUSED=2;a.VIDEO_STATE_STOPPED=3;a.VIDEO_STATE_COMPLETED=4;a.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED=1;a.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED=2;a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE=3;a.VIDEO_ASSET_AUTO_PLAY_TYPE_CLICK_TO_PLAY=4;a.VIDEO_ASSET_DURATION_TYPE_EXACT=
"exact";a.VIDEO_ASSET_DURATION_TYPE_VARIABLE="variable";a.ADUNIT_PREROLL="preroll";a.ADUNIT_MIDROLL="midroll";a.ADUNIT_POSTROLL="postroll";a.ADUNIT_OVERLAY="overlay";a.ADUNIT_STREAM_PREROLL="stream_preroll";a.ADUNIT_STREAM_POSTROLL="stream_postroll";a.ADUNIT_PAUSE_MIDROLL="pause_midroll";a.SLOT_LOCATION_PLAYER="player";a.SLOT_LOCATION_EXTERNAL="external";a.SLOT_OPTION_INITIAL_AD_STAND_ALONE=0;a.SLOT_OPTION_INITIAL_AD_KEEP_ORIGINAL=1;a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_ONLY=2;a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_STAND_ALONE=
3;a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_THEN_STAND_ALONE=4;a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE=5;a.SLOT_OPTION_INITIAL_AD_NO_STAND_ALONE=6;a.SLOT_OPTION_INITIAL_AD_NO_STAND_ALONE_IF_TEMPORAL=7;a.SLOT_OPTION_INITIAL_AD_FIRST_COMPANION_OR_NO_STAND_ALONE_IF_TEMPORAL=8;a.REQUEST_MODE_ON_DEMAND="on-demand";a.REQUEST_MODE_LIVE="live";a.MINIMUM_VAST_VERSION_SUPPORTED=2;a.MAXIMUM_VAST_VERSION_SUPPORTED=4;a.ERROR_VAST_XML_PARSING="100";a.ERROR_VAST_SCHEMA_VALIDATION="101";a.ERROR_VAST_VERSION_NOT_SUPPORTED=
"102";a.ERROR_VAST_TRACKING_ERROR="200";a.ERROR_VAST_LINEARITY_NOT_MATCH="201";a.ERROR_VAST_NO_AD="303";a.ERROR_VAST_WRAPPER_LIMIT_REACH="302";a.ERROR_VAST_URI_TIMEOUT="301";a.ERROR_VAST_GENERAL_LINEAR_ERROR="400";a.ERROR_VAST_NON_LINEAR_GENERAL_ERROR="500";a.ERROR_VAST_COMPANION_GENERAL_ERROR="600";a.ERROR_VAST_GENERAL_VPAID_ERROR="901";a.AD_VIDEO_PAUSED_BY_RENDERER=1;a.AD_VIDEO_PAUSED_BY_TAB_SWITCH=2;a.AD_VIDEO_UNPAUSED=3;a.AD_VIDEO_HLS_PAUSED_BY_RENDERER_AFTER_TAB_SWITCH=4;a.OMSDK_LIBRARY_VERSION=
"1.4.7";a.OMSDK_PARTNER_NAME="Freewheeltv";a.OMSDK_SERVICE_SCRIPT_URL="https://mssl.fwmrm.net/libs/omsdk/"+a.OMSDK_LIBRARY_VERSION+"/omweb-v1.js";a.OMSDK_SESSION_SCRIPT_URL="https://mssl.fwmrm.net/libs/omsdk/"+a.OMSDK_LIBRARY_VERSION+"/omid-session-client-v1.js";a.OMSDK_ACCESS_MODE="full";a.OMSDK_CREATIVE_TYPE_VIDEO="video";a.OMSDK_IMPRESSION_TYPE_BEGIN_TO_RENDER="beginToRender";a.AD_VERIFICATION_EVENT_NOT_EXECUTED="verificationNotExecuted";a.VERIFICATION_RESOURCE_REJECTED="1";a.VERIFICATION_NOT_SUPPORTED=
"2";a.VERIFICATION_RESOURCE_LOAD_ERROR="3";a.IAB_API_FRAMEWORKS_VPAID_2=2;a.IAB_API_FRAMEWORKS_MRAID_1=3;a.IAB_API_FRAMEWORKS_OMID_1=7;a.PARAMETER_SIMID_FULL_SCREEN_ALLOWED="renderer.simid.fullScreenAllowed";a.PARAMETER_SIMID_CREATIVE_TIMEOUT_DELAY="renderer.simid.creativeTimeoutDelay";a.SimidProtocolMessage={CREATE_SESSION:"createSession",RESOLVE:"resolve",REJECT:"reject"};a.SimidMediaMessage={DURATION_CHANGE:"Media:durationchange",ENDED:"Media:ended",ERROR:"Media:error",PAUSE:"Media:pause",PLAY:"Media:play",
PLAYING:"Media:playing",SEEKED:"Media:seeked",SEEKING:"Media:seeking",STALLED:"Media:stalled",TIME_UPDATE:"Media:timeupdate",VOLUME_CHANGE:"Media:volumechange"};a.SimidPlayerMessage={RESIZE:"Player:resize",INIT:"Player:init",LOG:"Player:log",START_CREATIVE:"Player:startCreative",AD_SKIPPED:"Player:adSkipped",AD_STOPPED:"Player:adStopped",FATAL_ERROR:"Player:fatalError"};a.SimidCreativeMessage={REQUEST_PAUSE:"Creative:requestPause",REQUEST_PLAY:"Creative:requestPlay",FATAL_ERROR:"Creative:fatalError",
GET_MEDIA_STATE:"Creative:getMediaState",LOG:"Creative:log",REQUEST_FULL_SCREEN:"Creative:requestFullScreen",REQUEST_EXIT_FULL_SCREEN:"Creative:requestExitFullScreen",REQUEST_SKIP:"Creative:requestSkip",REQUEST_STOP:"Creative:requestStop",REQUEST_RESIZE:"Creative:requestResize",REQUEST_VOLUME:"Creative:requestVolume",REQUEST_TRACKING:"Creative:reportTracking",REQUEST_CHANGE_AD_DURATION:"Creative:requestChangeAdDuration"};a.SimidStopCode={UNSPECIFIED:0,USER_INITIATED:1,MEDIA_PLAYBACK_COMPLETE:2,PLAYER_INITATED:3,
CREATIVE_INITIATED:4,NON_LINEAR_DURATION_COMPLETE:5};a.SimidPlayerErrorCode={UNSPECIFIED:1200,WRONG_VERSION:1201,UNSUPPORTED_TIME:1202,UNSUPPORTED_FUNCTIONALITY_REQUEST:1203,UNSUPPORTED_ACTIONS:1204,POSTMESSAGE_CHANNEL_OVERLOADED:1205,VIDEO_COULD_NOT_LOAD:1206,VIDEO_TIME_OUT:1207,RESPONSE_TIMEOUT:1208,MEDIA_NOT_SUPPORTED:1209,SPEC_NOT_FOLLOWED_ON_INIT:1210,SPEC_NOT_FOLLOWED_ON_MESSAGES:1211,SESSION_NOT_CREATED:1223};a.SimidCreativeErrorCode={UNSPECIFIED:1100,CANNOT_LOAD_RESOURCE:1101,PLAYBACK_AREA_UNUSABLE:1102,
INCORRECT_VERSION:1103,TECHNICAL_ERROR:1104,EXPAND_NOT_POSSIBLE:1105,PAUSE_NOT_HONORED:1106,PLAYMODE_NOT_ADEQUATE:1107,CREATIVE_INTERNAL_ERROR:1108,DEVICE_NOT_SUPPORTED:1109,MESSAGES_NOT_FOLLOWING_SPEC:1110,PLAYER_RESPONSE_TIMEOUT:1111};a.SimidEventsThatRequireResponse=[a.SimidCreativeMessage.GET_MEDIA_STATE,a.SimidCreativeMessage.REQUEST_VIDEO_LOCATION,a.SimidCreativeMessage.READY,a.SimidCreativeMessage.CLICK_THRU,a.SimidCreativeMessage.REQUEST_SKIP,a.SimidCreativeMessage.REQUEST_STOP,a.SimidCreativeMessage.REQUEST_PAUSE,
a.SimidCreativeMessage.REQUEST_PLAY,a.SimidCreativeMessage.REQUEST_FULL_SCREEN,a.SimidCreativeMessage.REQUEST_VOLUME,a.SimidCreativeMessage.REQUEST_RESIZE,a.SimidCreativeMessage.REQUEST_CHANGE_AD_DURATION,a.SimidCreativeMessage.REPORT_TRACKING,a.SimidPlayerMessage.INIT,a.SimidPlayerMessage.START_CREATIVE,a.SimidPlayerMessage.AD_SKIPPED,a.SimidPlayerMessage.AD_STOPPED,a.SimidPlayerMessage.FATAL_ERROR,a.SimidProtocolMessage.CREATE_SESSION];a.Util={sontext=b},getParameterAccessControlAllowCr2bool(b)},canPlay-"))):!1},isMiurl"===a}|"1"=+$/g,"").trim(b)},enreturn b},forEa,a)}d+returin({}ents)))}},return c},transforeturn b},
transformUrlToProxy:function(b){return this.transformToProxy(b,a.proxyUrl)},transformCreativeUroxyUrl)},pingURLProxy(b)},pingURhild(f))},pingURLWChild(d)},pingURLWithXMLHTTPRequest:function(b){var c=new XMLHttpRequest,d=a.Util.transformUrlToProxy(b).status)};gify(b))};c.ontimeout=
function(){a.warn("Timeout ocurred while trying to send pingback:"+d)};c.timeout=1E3*a.CONTEXT_REQUEST_TIMEOUT;c.open("GET",d,!0);c.withCredentials=a.Util.getParameterAccessControlAllowCredentials();c.send()},extractAdResponseJSONFromXMLHte),null}},sendAdRequestWithXMLHTc.send()mage(b))}RL(b[c])},setParam0]+"?"+g},getParamurn null},isParamreturn!1},return c},lazyJavaSstChild)},gerollTop}},getAbturn d+c},seclice(-2)},getFixedDigitRan10,a-1))},getDateStringIng():null},getTopMreturn a},getCreturn b},getFramreturn d},isValitypeof a},compagth?-1:0},valion:"+b)},arra"+b},"")},validateCusction"))},getBoolean2bool(a)},offsetStringToSecond:function(b,c){if("string"!==typeof b||this.isBlank(b))return-1;var d=/(\d+)(.(\d+))%|(\d+)%/.exec(b);if(d)return b=d[0].substr(0,d[0].length-1),0<c?c*Number(b)/100|0:-1;if(c=/(\d+):(\d+):(\d+)(.(\d+))?/.exec(b))return 3600*c[1]+60*c[2]+1*c[3];a.warn('offset is malformatted with value "',b,' ", the expected format is either HH:MM:SS(:mmm) or percentage%.');
return-1},offsetStringToPercentage:function(a){return"string"!==typeof a||this.isBlank(a)?-1:(a=/(\d+)(.(\d+))%|(\d+)%/.exec(a))?a[0].substr(0,a[0].length-1):-1},fireVolumeEvents:function(b,c,d){c!==b&&d.processEvent({name:a.EVENT_AD_VOLUME_CHANGE});0===b&&0!==c?d.processEvent({name:a.EVENT_AD_UNMUTE}):0!==b&&0===c&&d.processEvent({name:a.EVENT_AD_MUTE})}};a.MediaState=function(){};a.MediaState.prototype={};a.MediaState.prototype.constructor=a.MediaState;a.Util.mixin(a.MediaState.prototype,{play:function(b){a.debug(this._name+
" play("+b+")")},pause:function(b){a.debug(this._name+" pause("+b+")")}"+b+")")}});a.MediaInitState=function(){this._name="MediaInitState"};a.MediaInitState.prototype=new a.MediaState;a.MediaInitState.prototype.constructor=a.MediaInitState;a.Util.mixin(a.MediaInitState.prototype,{play:function(b){a.debug(this._name+" play("+b+")");b.setMediaState(a.MediaPlayingState.instance);if("function"===typeof b.onStartPlaying)b.onStartPlaying()}});a.MediaInitState.instance=
new a.MediaInitState;a.MediaPlayingState=function(){this._name="MediaPlayingState"};a.MediaPlayingState.prototype=new a.MediaState;a.MediaPlayingState.prototype.constructor=a.MediaPlayingState;a.Util.mixin(a.MediaPlayingState.prototype,{pause:function(b){a.debug(this._name+" pause("+b+")");b.setMediaState(a.MediaPausedState.instance);if("function"===typeof b.onPausePlaying)b.onPausePlaying()},complete:function(b){a.debug(this._name+" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===
typeof b.onCompletePlaying)b.onCompletePlaying()}});a.MediaPlayingState.instance=new a.MediaPlayingState;a.MediaPausedState=function(){this._name="MediaPausedState"};a.MediaPausedState.prototype=new a.MediaState;a.MediaPausedState.prototype.constructor=a.MediaPausedState;a.Util.mixin(a.MediaPausedState.prototype,{play:function(b){a.debug(this._name+" play("+b+")");b.setMediaState(a.MediaPlayingState.instance);if("function"===typeof b.onResumePlaying)b.onResumePlaying()},complete:function(b){a.debug(this._name+
" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===typeof b.onCompletePlaying)b.onCompletePlaying()}});a.MediaPausedState.instance=new a.MediaPausedState;a.MediaReplayingState=function(){this._name="MediaReplayingState"};a.MediaReplayingState.prototype=new a.MediaState;a.MediaReplayingState.prototype.constructor=a.MediaReplayingState;a.Util.mixin(a.MediaReplayingState.prototype,{pause:function(b){a.debug(this._name+" pause("+b+")");b.setMediaState(a.MediaReplayPausedState.instance);
if("function"===typeof b.onPausePlaying)b.onPausePlaying()},complete:function(b){a.debug(this._name+" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===typeof b.onCompleteReplaying)b.onCompleteReplaying()}});a.MediaReplayingState.instance=new a.MediaReplayingState;a.MediaReplayPausedState=function(){this._name="MediaReplayPausedState"};a.MediaReplayPausedState.prototype=new a.MediaState;a.MediaReplayPausedState.prototype.constructor=a.MediaReplayPausedState;a.Util.mixin(a.MediaReplayPausedState.prototype,
{play:function(b){a.debug(this._name+" play("+b+")");b.setMediaState(a.MediaReplayingState.instance);if("function"===typeof b.onResumePlaying)b.onResumePlaying()},complete:function(b){a.debug(this._name+" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===typeof b.onCompleteReplaying)b.onCompleteReplaying()}});a.MediaReplayPausedState.instance=new a.MediaReplayPausedState;a.MediaEndState=function(){this._name="MediaEndState"};a.MediaEndState.prototype=new a.MediaState;a.MediaEndState.prototype.constructor=
a.MediaEndState;a.Util.mixin(a.MediaEndState.prototlaying()}});a.MediaEndState.instance=new a.MediaEndState;a.RendererState=function(){};a.RendererState.prototype={};a.RendererState.prototype.constructor=a.RendererState;a.Util.mixin(a.RendererState.prototype,{start:function(b){a.debug(this._name+" start() rendererController = "+b)},notifyStarted:function(b){a.debug(this._name+
" notifyStarted() rendererController = "+b)},stop:function(b){a.debug(this._name+" stop() rendererController = "+b)},complete:function(b){a.debug(this._name+" complete() rendererController = "+b)},notifyr = "mplete()}});a.RendererInitState=function(){this._name="RendererInitState"};
a.RendererInitState.prototype=new a.RendererState;a.RendererInitState.prototype.constructor=a.RendererInitState;a.RendererInitState.instance=new a.RendererInitState;a.Util.mixin(a.RendererInitState.prototype,{start:function(b){a.debug(this._name+" start()");b.setRendererState(a.RendererStartingState.instance);b.getRenderer().startleted(b)}});a.RendererStartingState=
function(){this._name="RendererStartingState"};a.RendererStartingState.prototype=new a.RendererState;a.RendererStartingState.prototype.constructor=a.RendererStartingState;a.RendererStartingState.instance=new a.RendererStartingState;a.Util.mixin(a.RendererStartingState.prototype,{notifyStarted:function(b){a.debug(this._name+" notifyStarted()");b.setRendererState(a.RendererStartedState.instance);b.getAdInstance().pla.stop())}});a.RendererStartedState=function(){this._name="RendererStartedState"};a.RendererStartedState.prototype=new a.RendererState;a.RendererStartedState.prototype.constructor=a.RendererStartedState;a.RendererStartedState.instance=new a.RendererStartedState;a.Util.mixin(a.RendererStartedState.prototype,nstanplete())}});a.RendererCompletingState=function(){this._name="RendererCompletingState"};a.RendererCompletingState.prototype=new a.RendererState;a.RendererCompletingState.prototype.constructor=a.RendererCompletingState;a.RendererCompletingState.instance=new a.RendererCompletingState;a.Util.mixin(a.RendererCompletingState.prototype,{notifymplete()}});a.RendererCompletedState=function(){this._name="RendererCompletedState"};a.RendererCompletedState.prototype=new a.RendererState;a.RendererCompletedState.prototype.constructor=a.RendererCompletedState;a.RendererCompletedState.instance=new a.RendererCompletedState;a.RendererFailedState=function(){this._name="RendererFailedState"};a.RendererFailedState.prototype=new a.RendererState;a.RendererFailedState.prototype.constructor=
a.RendererFailedState;a.RendererFailedState.instance=new a.RendererFailedState;a.HTMnd(this)};a.HTMLRenderer.prototy empty")},_onVisibilnge,!1))},pause:function(){this.log("pause");this.shouldEndAfterDuration&&this.timer&&this.timer.pause(.star._stopreturn!lay ad")}ange(!1)},_setupParameters:function(){var b=this._rendererController.getAdInstance(),
c=b.getSlot().getTimePositionClass();this._tpc=c;var d=b.getActiveCreativeRendition();b=d.getBaseUnit();d=d.getCreativeApi();var e;if(a.PLATFORM_NOT_SUPPORT_OVERLAY_AD&&c===a.TIME_POSITION_CLASS_OVERLAY)return this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"Overlay not supported on this device."),!1;if(a.PLATFORM_NOT_SUPPORT_MIDROLL_AD&&(c===a.TIME_POSITION_CLASS_MIDROLL||c===a.TIME_POSITION_CLASS_PAUSE_MIDROLL))return this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"Midroll, pause_midroll not supported on this device."),
!1;if(a.PLATFORM_IS_IPHONE_IPOD)switch(c){case a.TIME_POSITION_CLASS_MIDROLL:case a.TIME_POSITION_CLASS_PAUSE_MIDROLL:case a.TIME_POSITION_CLASS_OVERLAY:return this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"Midroll, pause_midroll and overlay ads are not supported on iPod, iPhone."),!1;case a.TIME_POSITION_CLASS_PREROLL:case a.TIME_POSITION_CLASS_POSTROLL:this._rendererController.setCapability(a.EVENT_AD_CLICK,a.CAPABILITY_STATUS_OFF)}this.adLoadTimeout=5;if(e=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_AD_LOAD_TIMEOUT))this.adLoadTimeout=
0<Number(e)?Number(e):this.adLoadTimeout;this.shouldKeepInterstitial=!1;(e=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE))?this.shouldKeepInterstitial=e===a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INTERSTITIAL:"string"===typeof b&&(this.shouldKeepInterstitial=b.toLowerCase()===a.PARAMETER_RENDERER_HTML_BASEUNIT_INTERSTITIAL);this.isInterstitialNow=this.shouldKeepInterstitial;this.shouldPauseContentWhenStart=!1;this.shouldPauseContentWhenExpandOrClick=!this.shouldKeepInterstitial&&
(c===a.TIME_POSITION_CLASS_DISPLAY||c===a.TIME_POSITION_CLASS_OVERLAY);this.shouldBackgroundTransparent=!1;e=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_SHOULD_BACKGROUND_TRANSPARENT);"undefined"!==typeof e&&null!=e&&(this.shouldBackgroundTransparent=a.Util.str2bool(e));this.shouldEndAfterDuration=c!==a.TIME_POSITION_CLASS_DISPLAY||this.shouldKeepInterstitial;e=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_SHOULD_END_AFTER_DURATION);"undefined"!==typeof e&&null!=
e&&(this.shouldEndAfterDuration=a.Util.str2bool(e));this.coadScriptName=this._rendererController.getParameter(a.PARAMETER_RENDERER_DISPLAY_COAD_SCRIPT_NAME);this.coadScriptName||(this.coadScriptName=this._rendererController.getParameter("coad_script_name"));this.primaryAnchor=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_PRIMARY_ANCHOR)||"bc";this.marginWidth=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_MARGIN_WIDTH)||0;this.marginHeight=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_MARGIN_HEIGHT)||
0;this.bootstrap=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_BOOTSTRAP);this.shouldRenderImagesWithoutIFrame=this._rendererController.getParameter(a.PARAMETER_RENDERER_HTML_RENDER_IMAGE_WITHOUT_IFRAME);b=a.Util.getViewport();this.defaultExpandWidth=b.width;this.defaultExpandHeight=b.height;this.isMRAIDAd="MRAID-1.0"===d;this.warn(a)}}(this);this.onLoadFunc=a.Util..start()});this.touchMoveDisabler=function(a){a.preventDefault()};this.log("setting parameters, adLoadTimeout: "+this.adLoadTimeout+", isMRAIDAd: "+this.isMRAIDAd+", shouldKeepInterstitial: "+this.shouldKeepInterstitial+", shouldEndAfterDuration: "+this.shouldEndAfterDuration+", shouldPauseContentWhenStart: "+this.shouldPauseContentWhenStart+", shouldPauseContentWhenExpandOrClick: "+this.shouldPauseContentWhenExpandOrClick+
", shouldBackgroundTransparent: "+this.shouldBackgroundTransparent+", defaultExpandWidth: "+this.defaultExpandWidth+", defaultExpandHeight: "+this.defaultExpandHeight+", coadScriptName: "+this.coadScriptName+", primaryAnchor: "+this.primaryAnchor+", marginWidth: "+this.marginWidth+", marginHeight: "+this.marginHeight+", bootstrap: "+this.bootstrap,"shouldRenderImagesWithoutIFrame: "+this.shouldRenderImagesWithoutIFrame);if(!this.shouldKeepInterstitial)!this.isMRAIDAd||a.PLATFORM_IS_IPHONE_IPOD&&c!==
a.TIME_POSITION_CLASS_DISPLAY||(this._rendererController.setCapability(a.EVENT_AD_ACCEPT_INVITATION,a.CAPABILITY_STATUS_ON),this._rendererController.setCapability(a.EVENT_AD_CLOSE,a.CAPABILITY_STATUS_ON),this._rendererController.setCapability(a.EVENT_AD_COLLAPSE,a.CAPABILITY_STATUS_ON),this._rendererController.setCapability(a.EVENT_AD_EXPAND,a.CAPABILITY_STATUS_ON));else if(c===a.TIME_POSITION_CLASS_OVERLAY)return this._onRendererFailed(a.ERROR_INVALID_SLOT,"Interstitial ad is not supported in overlay slot."),
!1;return!0},_render:function(){this.log("_render");var b=this._rendererController.getAdInstance(),c=b.getSlot(),d=c.getTimePositionClass(),e=c.getBase(),f=b.getActiveCreativeRendition(),h=f.getDuration(),g=f.getPrimaryCreativeRenditionAsset(),n=g.getProxiedUrl(),k=g.getContent(),L=f.getContentType();d===a.TIME_POSITION_CLASS_DISPLAY&&(e.innerHTML="");this.timer=new a.Timer(h,a.Util.bind(this,this._stop));if(this.coadScriptName&&"function"===typeof window[this.coadScriptName])this.defaultAdElement=
window[this.coadScriptName](k,n,f.getHeight(),f.getWidth(),g.getMimeType(),c.getCustomId()),this.timer&&this.shouldEndAfterDuration&&this.timer.start();else if(f=document.createElement("span"),f.id="_fw_ad_container_html_"+c.getCustomId()+"_","relative"===window.getComputedStyle(e).position?f.style.position="absolute":f.style.position="relative",f.style.display="inline-block",f.style.margin="0px",f.style.padding="0px",f.style.width=e.style.width||"100%",f.style.height=e.style.height||"100%",f.style.top=
f.style.left="0px",e.appendChild(f),this.defaultAdElementContainer=f,n||k){if("text/html_lit_nowrapper"===L||"text/html_lit_js_wc_nw"===L){if(this.isMRAIDAd||this.isInterstitialNow){this._onRendererFailed(a.ERROR_INVALID_VALUE,"");this._stop();return}if(!k){this._onRendererFailed(a.ERROR_NULL_ASSET,"Empty content");this._stop();return}this.defaultAdElement=f;this.defaultAdElement.innerHTML=k;n=this.defaultAdElement.getElementsByTagName("script");var z=document.getElementsByTagName("head")[0];for(c=
0;c<n.length;++c)if(n[c].src){var l=document.createElement("script");l.src=n[c].src;n[c].charset&&(l.charset=n[c].charset);n[c].innerHTML&&(l.innerHTML=n[c].innerHTML);l.onload=l.onreadystChild(l)};z.appendChild(l)}else l=n[c].innerHTML,eval(l);this.presentInline();this.onLoadFunc();return}if(this.shouldRenderImagesWithoutIFrame&&L.includes("image/")){this.defaultAdElement=f;c=b.getEventCallback(a.EVENT_AD_CLICK,
a.EVENT_TYPE_CLICK)._url?b.getEventCallback(a.EVENT_AD_CLICK,a.EVENT_TYPE_CLICK)._url:null;n=a.HTMLAdGenerator.generateImageHTML(n,c);this.defaultAdElement.innerHTML=n;return}b=document.createElement("iframe");b.id="_fw_ad_container_iframe_"+c.getCustomId()+"_"+Math.random();b.attachEvent?b.attachEvent("onload",this.onLoadFunc):b.onload=this.onLoadFunc;this.defaultAdElement=b;this.defaultAdElementContainer.appendChild(b);this._fillAdNode(b,n,k);this.isMRAIDAd&&(this.adLoadTimeoutTimer=new a.Timer(this.adLoadTimeout,
a.Util.._stop()})),this.adLoadTimeoutTimer.start())}else{this._onRendererFailed(a.ERROR_NULL_ASSET,"Empty URL and empty content");this._stop();return}this.defaultAdElement||(n=e.getElementsByTagName("iframe"))&&0<n.length&&(this.defaultAdElement=n[n.length-1]);this.defaultAdElement?(this.defaultAdElement.frameBorder=
"0",this.shouldBackgroundTransparent&&(this.defaultAdElement.allowTransparency="true",this.defaultAdElement.style["background-color"]="rgba(255,255,255,0)"),this.isInterstitialNow?(this.expandedAdElement=this.defaultAdElement,this.presentInterstitial()):this.presentInline(),this.messageHandlerFunc=a.Util.bind(this,this._onWindowMessageReceived),this.viewportChangeFunc=a.Util.ll),200)}),window.addEventListener?(window.addEventListener("message",this.messageHandlerFunc,!1),window.addEventListener("resize",this.viewportChangeFunc,!1),window.addEventListener("scroll",this.viewportChangeFunc,!1)):window.attachEvent&&(window.attachEvent("onmessage",this.messageHandlerFunc),window.attachEvent("onresize",this.viewportChangeFunc),window.attachEvent("onscroll",this.viewportChangeFunc))):this.isMRAIDAd&&(this._onRendererFailed(a.ERROR_UNKNOWN,
"Failed to find iframe in slotBase for MRAID ad"),this._stop())},_layoutb)+"px"}},_freturn!0},presd+"px"}}},presentInterstitial:function(){this.log("presentInterstitial, defaultExpandWidth: "+this.defaultExpandWidth+", defaultExpandHeight: "+this.defaultExpandHeight+", this.mraid.expandWidth: "+this.mraid.expandWidth+", this.mraid.expandHeight: "+this.mraid.expandHeight+", (Math.max(0, this.defaultExpandWidth - this.mraid.expandWidth) / 2) = "+
Math.max(0,this.defaultExpandWidth-this.mraid.expandWidth)/2+", (Math.max(0, this.defaultExpandHeight - this.mraid.expandHeight) / 2) = "+Math.max(0,this.defaultExpandHeight-this.mraid.expandHeight)/2);if(this.expandedAdElement){this.isInterstitialNow=!0;document.addEventListener&&(document.removeEventListener("touchmove",this.touchMoveDisabler,!1),document.addEventListener("touchmove",this.touchMoveDisabler,!1));var b=this.expandedAdElement.parentNode;this.expandedLightbox||(this.expandedLightbox=
document.createElement("div"),this.expandedLightbox.style.background="black",this.expandedLightbox.style.opacity=.8,this.expandedLightbox.style.position="fixed",this.expandedLightbox.style.top="0px",this.expandedLightbox.style.left="0px",this.expandedLightbox.style.zIndex=this.expandedLightbox.style["z-index"]=9999,b.appendChild(this.expandedLightbox));this.expandedLightbox.style.width=this.defaultExpandWidth+"px";this.expandedLightbox.style.height=this.defaultExpandHeight+"px";this.expandedAdElement.frameBorder=
"0";this.expandedAdElement.scrolling="no";this.expandedAdElement.style.position="fixed";this.expandedAdElement.style.overflow="hidden";this.expandedAdElement.style.top=this.expandedAdElement.top=Math.max(0,this.defaultExpandHeight-this.mraid.expandHeight)/2+"px";this.expandedAdElement.style.left=this.expandedAdElement.left=Math.max(0,this.defaultExpandWidth-this.mraid.expandWidth)/2+"px";this.expandedAdElement.style.width=this.expandedAdElement.width=this.mraid.expandWidth+"px";this.expandedAdElement.style.height=
this.expandedAdElement.height=this.mraid.expandHeight+"px";this.expandedAdElement.style.zIndex=this.expandedAdElement.style["z-index"]=1E4;this.log("presentInterstitial, expanded ad element size: (top, left, width, height) = ("+this.expandedAdElement.top+", "+this.expandedAdElement.left+", "+this.expandedAdElement.width+", "+this.expandedAdElement.height+")");if(this.isMRAIDAd){var c=this.expandedAdElement._fw_closeButton;c||(c=document.createElement("div"),c.addEventListener?c.addEventListener("click",
a.Util.bind(this,function(){this._mraidClose()})):c.attachEvent&&c.attachEvent("onclick",a.Util.bind(this,function(){this._mraidClose()})),c.style.position="fixed",c.style.margin="0px",c.style.padding="0px",c.style.width="25px",c.style.height="25px",c.style.zIndex=c.style["z-index"]=10001,b.appendChild(c),this.expandedAdElement._fw_closeButton=c);c.style.top=this.expandedAdElement.style.top;c.style.left=Math.max(0,this.defaultExpandWidth-this.mraid.expandWidth)/2+this.mraid.expandWidth-25+"px";c.innerHTML=
this.mraid.useCustomClose?0<a.PLATFORM_ANDROID_VERSION?"   ":"":'<img style="width:25px; height:25px; border:0" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiM2NjY2NjYiIGN4PSIyMDAuMTM5IiBjeT0iMTk5Ljg2IiByPSIxOTcuODYiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBzdHJva2U9IiNGMEYwRjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTExNC44NjUsMzAzLjY0NGMtNi4yMjYsNi4yMjctMTUuMzYzLDcuMTg2LTIwLjQwNywyLjE0NGwtMC41MjItMC41MjJjLTUuMDQzLTUuMDQzLTQuMDgzLTE0LjE4LDIuMTQ0LTIwLjQwN0wyODQuODYsOTYuMDc4YzYuMjI2LTYuMjI3LDE1LjM2Mi03LjE4NiwyMC40MDUtMi4xNDRsMC41MjIsMC41MjFjNS4wNDMsNS4wNDIsNC4wODMsMTQuMTc5LTIuMTQ0LDIwLjQwOEwxMTQuODY1LDMwMy42NDR6Ii8+PHBhdGggZmlsbD0iI0YwRjBGMCIgc3Ryb2tlPSIjRjBGMEYwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0zMDcuODE5LDI4OC42NjZjNS4xNTMsNS4xNTgsNS4wNDgsMTMuNjI0LTAuMjQxLDE4LjkxMWwwLDBjLTUuMjg4LDUuMjg5LTEzLjc1Miw1LjM5My0xOC45MDksMC4yNEw5MS45MDYsMTExLjA1NWMtNS4xNTYtNS4xNTYtNS4wNDgtMTMuNjIzLDAuMjQtMTguOTFsMCwwYzUuMjktNS4yODksMTMuNzU1LTUuMzk2LDE4LjkxMS0wLjI0MUwzMDcuODE5LDI4OC42NjZ6Ii8+PC9zdmc+">'}this.isMRAIDAd||
this._rendererController.requestContentStateChange(!0)}},_onWindowMessagstop()}}},_mraam:"+c)}},_r open")},_m state")},_mr state")},_onViewportRestitial()},log:function(b){var c=this._rendererController.getAdInstance().getSlot();a.log("HTMLRenderer["+
c+"]\t""]\t"+b)},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlayheadTime:function(){return this.timer?this.timer.getPlayheadTime():-1},getDuration:function(){return this.timer?this.timer.getDuration():-1},_onRendeAILED,e)}};a.HTMLRenderer.prototype.constructor=a.HTMLRenderer;a.TCFConsentManager=function(a){this._consentManager=a;this._fwGDPRConsent=this._fwGDPR=
null;this._isExecuted=!1;this._tcfapiImpl=this._listenerId=null;this._tcfapiCallback=this._tcfapiCallback.bind(this);this._fetchGDPRData()};a.TCFConsentManager.prototype._fetcssage()}};a.TCFConsentManager.prototype._getGdprConsentData=
function(){a.debug("TCFConsentManager.getGdprConsentData");"function"==typeof this._tcfapiImpl?this._addEventListenerForTCData():(this._isExecuted=!0,a.warn("TCFAPI function cannot be found. _fw_gdpr: "+this._fwGDPR+", _fw_gdpr_consent: "+this._fwGDPRConsent))};a.TCFConsentManager.prototype._retrieveGDPRWithPostMessage=function(){a.debug("TCFConsentManager.retrieveGDPRWithPostMessage");this._consentManager.setupConsentPostMessage("__tcfapi");this._tcfapiImpl=window.__tcfapi;this._getGdprConsentData()};
a.TCFConsentManager.prototype._tcfapiCallback=function(b,c){c?this._onTCFSuccess(b):(this._isExecuted=!0,a.warn("TCFAPI call failed."))};a.TCFConsentManager.prototype._onTCFSuccess=function(b){a.debug("TCFConsentManager._onTCFSuccess with event status ",b.eventStatus);this._getTCStringFromTCData(b);b.listenerId&&(this._listenerId=b.listenerId);"tcloaded"==b.eventStatus||"useractioncomplete"==b.eventStatus?this._isExecuted=!0:"cmpuishown"!==b.eventStatus&&(this._fwGDPRConsent=this._fwGDPR="",this._isExecuted=
!0,a.warn("VendorConsentData's event status is missing or not valid."))};a.TCFConsentManager.prototype._getTCStringFssing.")};a.TCFConsentManager.prototype._addEventListenerForTCData=function(){a.debug("TCFConsentManager._addEventListenerForTCData");try{this._tcfapiImpl("addEventListener",a.GDPR_TCFAPI_VERSION,this._tcfapiCallback)}catch(b){this._isExecuted=!0,a.warn("TCFConsentManager._addEventListenerForTCData failed with err: "+b.name+": "+b.message)}};a.TCFConsentManager.prototype._removeEventListenerForTCData=function(){a.debug("TCFConsentManager._removeEventListenerForTCData");
if(this._listenerId){try{this._tcfapiImpl("removeEventListener",a.GDPR_TCFAPailed.")},this._listenerId)}catch(b){a.warn("TCFConsentManager._removeEventListenerForTCData failed with err: "+b.name+": "+b.message)}this._listenerId=null}};a.TCFConsentManager.prototype.isExecuted=function(){return this._isExecuted};a.TCFConsentManager.prototype.getGDPRValues=function(){return{string:(this._fwGDPR||"").toString(),
consentParam:this._fwGDPRConsent||""}};a.TCFConsentManager.prototypger=null};a.PauseAdEvent=!1};a.PauseAdExtension.protototified)xt=null)}};a.PauseAdExtension.prototype.constructor=a.PauseAdExtension;a.CustomPlayerRenderer=function(){this._adListener=this._customPlayer=this._rendererController=null;this._quartileSent=0;this._isPaused=this._isStarted=!1;this._timeoutTracker=null;this._lastPlayheadTime=0;this._timeUpdatePollingIntervalInMs=
250;this._volume=1};a.CustomPlayerRenderer.prototype={pause:function(){this._isPaused=!0;this._rendererController&&this._rendererController.processEvent({name:a.EVENT_AD_PAUSE});this._customPlayer&&this._customPlayer.playPause(!0ause(!1)},start:function(b){this._rendererController=b;if(this._customPlayer=this._rendererController.getCustomPlayer()){b=
this._rendererController.getAdInstance();var c=b.getSlot();a.log("CustomPlayerRenderer.start",c.getTimePositionClass(),b);var d=c.getVideoDisplaySize().width,e=c.getVideoDisplaySize().height;c=b.getRenderableCreativeRenditions();if((e=(d=(new a.RenditionSelector(this._rendererController.getParameter(a.PARAMETER_DESIRED_BITRATE)||1E3,this._rendererController.getParameter("arWeight")||1,this._rendererController.getParameter("pxWeight")||1,.2)).getCustomPlayerBestFitRendition(c,d,e))?d.getPrimaryCreativeRenditionAsset():
null)&&c.length)if(c=e.getProxiedUrl()){b.setActiveCreativeRendition(d);a.log("CustomPlayerRenderer.start selected rendition is:",c);this._rendererController.setCapability(a.EVENT_AD_QUARTILE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_MUTE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_PAUSE,a.CAPABILITY_STATUS_ON);b=this._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_CLICK_DETECTION);if(null===b||"undefined"===typeof b)b="false";
!1===a.Util.str2bool(b)?this._rendererController.setCapability(a.EVENT_AD_CLICK,a.CAPABILITY_STATUS_OFF):this._rendererController.setCapability(a.EVENT_AD_CLICK,a.CAPABILITY_STATUS_ON);this._volume=this._rendererController.getContext().getAdVolume();this._adListener=new a.AdListener(this);b=this._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT)||5E3;this._progressTimeoutInMs=this._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT)||
8E3;this._onTimeout=a.Util.bind(this,function(a){this._adListener.onError(a)});this._timeoutTracker=setTimeout(this._onTimeout,b,b+" ms custom player timeout before playing");this._quartileTimerId=setInterval(a.Util.bind(this,this._pollForAdVideoTimeUpdate),this._timeUpdatePollingIntervalInMs);a.log("CustomPlayerRenderer will play video ad: "+c);this._customPlayer.open(d,this._adListener)}else this._onRendererFailed(a.ERROR_NULL_ASSET);else this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"no compatible asset")}else this._onRendererFailed(a.ERROR_UNKNOWN,
"custom player was null")},_pollForAdVideoTimeUpdate:function(){var b=this._customPlayer.getPlayheadTime(),c=this._customPlayer.getDuration();"number"===typeof b&&"number"===typeof c&&(0>=b||0>=c?a.debug("CustomPlayerRenderer._pollForAdVideoTimeUpdate currentTime or duration is less than or 0"):(this._isStarted||(this._isStarted=!0,this._rendererController.getAdInstance().adjustOffsetAndProgressWithRendererDuration(c),this._rendererController.handleStateTransition(a.RENDERER_STATE_STARTED)),this._rendererController&&
(this._rendererController.checkProgress(b),this._rendererController.checkForSkippableStateChange()),b>this._lastPlayheadTime&&(this._clearTimeoutTracker(),this._lastPlayheadTime=b,this._isPaused||(this._timeoutTracker=setTimeout(this._onTimeout,this._progressTimeoutInMs,this._progressTimeoutInMs+" ms custom player timeout when playing"))),this._sendQuartiles(b/c)))},_sendQuartiles:function(b){a.debug("CustomPlayerRenderer._sendQuartiles");.25<=b&&1>this._quartileSent&&(this._quartileSent=1,this._rendererController.processEvent({name:a.EVENT_AD_FIRST_QUARTILE}));
.5<=b&&2>this._quartileSent&&(this._quartileSent=2,this._rendererController.processEvent({name:a.EVENT_AD_MIDPOINT}));.75<=b&&3>this._quartileSent&&(this._quartileSent=3,this._rendererController.processEvent({name:a.EVENT_AD_THIRD_QUARTILE}));.99<=b&&4>this._quartileSent&&(this._rendererController.checkProgress(this._customPlayer.getDuration()),this._quartileSent=4,this._rendererController.processEvent({name:a.EVENT_AD_COMPLETE}))},_sendMissingtiles(1)},_onEnded:function(b){a.debug("CustomPlayerRenderer._onEnded");this._pollForAdVideoTimeUpdate();if(b){var c=a.ERROR_CUSTOM_PLAYER;b.includes("timeout")&&(c=a.ERROR_TIMEOUT);this._onRendererFailed(c,b)}else this._sendMissingQuartiles(),this._rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED);this._dispose()},_dispose:function(){a.debug("CustomPlayerRenderer._dispose");this._clearTimeoutTracker();this._clearQuartileTimer();this._customPlayer=null;this._rendererController=
this._adListener=this._adListener._customPlayerRenderer=null},stop:function(){a.debug("CustomPlayerRenderer.stop");this._customPlayer&&this._customPlayer.playPause(!0);this._rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED);this._dispose()},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlayheadTime:function(){return this._customPlayer?this._customPlayer.getPlayheadTime():-1},geion():-1},setVolume:function(b){a.warn("CustomPlayerRenderer.setVolume("+
b+")");a.Util.fireVolumeEvents(this._volume,b,this._rendererController);this._volume=b},_getClickThingUrls)},_clearTimeoutTracker:function(){this._timeoutTracker&&(clearTimeout(this._timeoutTracker),this._timeoutTracker=null)},_clearQuarId=null)},
_onRendererFailed:function(b,c){var d={};d[a.INFO_KEY_ERROR_MODULE]="CustomPlayerRenderer";d[a.INFO_KEY_ERROR_CODE]=b;c&&(d[a.INFO_KEY_ERROR_INFO]=c);this._rendererController.handleStateTransition(a.RENDERER_STATE_FAILED,d)}};a.CustomPlayerRenderer.prototype.constructor=a.CustomPlayerRenderer;a.AdListener=function(a){this._customPlayerRenderer=a};a.AdListener.prototype={onEnded:function(){a.debug("AdListener.onEnded");this._customPlayerRenderer._onEnded()Ended(b)},getClickThroughUrls:function(){return this._customPlayerRenderer._getClickThroughUrls()}};a.AdListener.prototype.constructor=a.AdListenestate=-1};a.Timer.prototype={};a.Timer.prototype.constructor=a.Timer;a.Util.mixin(a.Timer.prototreturn()},c)eadTiheadTime},getPlaheadTime},gamp)/1E3},getDuration:function(){return this._duration}});a.RendererController=
function(b,c){var d=null,e=null,f={},h=a.RendererInitState.instance,g={},n=[],C=0,l=!1,z=!1,m=[];return{getAdInstance:function(){return c},getContext:function(){return b},getRendererState:function(){return h},pronfo,f)}}},checshift())},checkForSkippableStANGED}))},handleStateTved",b)}},setCapability:function(a,b){c.setMetr(a,b)},getVersion:function(){return b._adManager.getVersion()},get[a]:null},getCompareturn a},createNullDrivingAreturn a},scheduleAdreturn d},commitAleted.")},
isRenderer:function(){return d&&a.MODULE_TYPE_RENDERER===d.info()[a.INFO_KEY_MODULE_TYPE]},isTLE_TYPE]}instaninstalPlay(b)},
_afound"})},dispent(a,c)},requestContentSttSlot())},
getRenderer:function(){return d},setRenderer:function(a){d=a},setRendererState:function(a){h=a},getContentVideoElement:function(){return b.getContentVideoElement()},getCustomPlayer:function(){return b.getCustomPlayer()},_restorePlaceholders&&(n=[])},rende(b)):!0},_matchRendererClassName:fureturn c}var g=d.getPrimaryCreativeRenditionAsset().getContentType(),h=d.getContentType(),n=d.getWrapperType(),u=d.getCreativeApi(),l=d.getBaseUnit(),
z=c.getSoAdUnit(),L=c.getSlot(),m=L.getType();L=L.getTimePositionClass();a.debug("match renderer for creativeRendition:"+d.getId());a.debug("slot type:"+m);if(a.Util.isBlank(h)&&a.Util.isBlank(n))return a.warn("renderer not match due to both contentType and wrapperType are empty"),null;var v=b._rendererManifest["*"];v||(v=b._rendererManifest[n]);v||(v=b._rendererManifest[h]);if(!v){m=b._overriddenAdRenderers.concat(b._adResponse._adRenderers);for(var J=0;J<m.length;J++){var t=m[J],x=!t.contentType;
x||(n?x=e(n,t.contentType,!0):(g&&(x=e(g,t.contentType,!0)),x||(x=e(h,t.contentType,!0))));if(x)if((x=!t.creativeApi)||(x=e(u,t.creativeApi)),x)if(t.baseUnit&&!e(l,t.baseUnit))a.debug("can't match renderer "+t.url+" due to baseUnit not match for creativeRendition:"+d.getId());else if(t.soAdUnit&&!e(z,t.soAdUnit))a.debug("can't match renderer "+t.url+" due to soAdUnit not match for creativeRendition:"+d.getId());else if(t.slotType&&!e(L.toUpperCase(),t.slotType.toUpperCase()))a.debug("can't match renderer "+
t.url+" due to slotType not match for creativeRendition:"+d.getId());else if("class://DashRenderer"===t.url&&void 0===window.tv.freewheel.Dashjs)a.debug("can't match renderer "+t.url+" due to missing tv.freewheel.Dash.js for creativeRendition:"+d.getId());else if("class://VideoRenderer"===t.url&&null==this.getContentVideoElement())a.warn("VideoRenderer could not find reference to the video element, should call context.registerVideoDisplayBase() or context.setContentVideoElement()");else if("class://CustomPlayerRenderer"===
t.url&&null==this.getCustomPlayer())a.warn("CustomPlayerRenderer could not find reference to the custom player, should call context.regusterCustomPlayer()");else if("class://VPAIDRenderer"===t.url&&null==this.getContentVideoElement())a.warn("VPAIDRenderer could not find reference to the video element, should call context.registerVideoDisplayBase() or context.setContentVideoElement()");else if("class://DashRenderer"===t.url&&null==this.getContentVideoElement())a.warn("DashRenderer could not find reference to the video element, should call context.registerVideoDisplayBase() or context.setContentVideoElement()");
else{if(a.debug("renderer "+t.url+" matched for creativeRendition:"+d.getId()),t.url){v=t.url;d=v.indexOf("?");-1!==d&&(v=v.substring(0,d));d=v.lastIndexOf("/");-1!==d&&(v=v.substring(d+1));d=v.lastIndexOf(".js");-1!==d&&(v=v.substring(0,d));var w={};if(t.parameter)for(d=[].concat(t.parameter),g=0;g<d.length;g++)if(d[g].hasOwnProperty("name"))w[d[g].name]=d[g].value;else for(var F in d[g])d[g].hasOwnProperty(F)&&(w[F]=d[g][F]);a.Util.getObject(k+"."+v)&&(v=k+"."+v);if(a.Util.getObject(v))f=w,C=0;
else{if(0<C)break;var A=this;F=1*this.getContext().getParameter("moduleLoadTimeout")||6E4;C=window.s+t.url})},F);a.Util.lazyJavaScriptLPlay(v))})}break}}else a.debug("can't match renderer "+
t.url+" due to creative api not match for creativeRendition:"+d.getId());else a.debug("can't match renderer "+t.url+" due to contentType not match for creativeRendition:"+d.getId())}}return v?v:a.Util.isBlank(n)?"null/null"===h?k+".NullRenderer":null:null},_inferRIC:null},pause:function(){a.log("RendererController.pause");d&&"function"===typeof d.pause?d.pause():a.log("Renderer.pause() is not implemented."entedop(this)}}};a.VideoStateExtension=function(){};a.VideoStateExtension.prototype=
2boolabled.")ext=null}};a.VideoStateExtension.prototype.constructor=a.VideoStateExtension;a.AdResponse=function(a){this._context=a};a.AdResponse.prototype={};a.AdResponse.prototype.constructor=
a.AdResponse;a.Util.mixin(a.AdResponse.prototyparse(b)},ge(c):nuurn null},getTemporalSlots:function(){return this._temporalSlots},getSiteSectionNonTemporalSlots:function(){return this._siteSectionNonTemporalSlots},getVideoPlayerNonTemporalSlots:function(){return this._videoPlayerNonTemporalSlots},
getSiteSectionCustomId:function(){return this._siteSectionCustomId},getSlotBurn null},_inireturn c}});a.Slot=function(b){var c=
"",d=null,e=null,f=null,h=null,g=[],n=[],k={},l=null,z=a.MediaInitState.instance,m=0,u=null,p,r,B,M,O,P,R,S=0,T=0,v=[],I=null,t=0,x=!1,w=!1,F=!0,A=[],D,K,H=!1;return{getAutoPlayBlocked:function(){return H},setAutoPlayBlocked:function(a){H=a},getSlotProfile:function(){return e},setSlotProfile:function(a){e=a},setMediaState:function(a){z=a},set]:k[a]=b},geturn k[a]},getAdCount:function(){return g.length},setCustomId:function(a){c=
a},getCustomId:function(){return c},setAdUnit:function(a){P=a},getAdUnit:function(){return P},setType:function(a){d=a},getType:function(){return d},setTimePosition:function(a){r=a},getTimePosition:function(){return r},getEndTimePosition:function(){return B},setTimePosierCase()},getTimePositionClass:function(){return u},setWidth:function(a){M=a},getWidth:function(){return u!==a.TIME_POSITION_CLASS_DISPLAY?M?M:b.getVideoDisplaySize().width:M},){O=
1*a},height:O},setBase:function(a){p=a},getBase:function(){return p},setCuepointSequence:function(a){R=1*a?1*a:0},getCuepointSequence:function(){return R},getVideoDisplaySize:function(){return b.getVideoDisplaySize()},setMaxDuration:function(a){S=1*a?1*a:0},getMaxDuration:function(){return S},setMinDuration:function(a){T=1*a?1*a:0},getMinDuration:function(){return T},setAcceptCotrim())}},se)&&(I=a)},getSignalId:function(){return I},*a?1*a:0},getMaxAds:function(){return t},getAcceptContentType:function(){return v.join(",")},parse:function(d){if(d){c=d.customId;r=1*d.timePosition;u=d.timePositionClass&&d.timePositionClass.toUpperCase()||u;var e=1*d.endTimePosition||-1;B=e>=r?e:-1;P=d.adUnit;0<=d.maxDuration&&(S=d.maxDuration);I=d.signalId;if(void 0===I||null===I)I=
d.outSignalId;for(var f=0,h=d.eventCallbacks||[];f<h.length;f++){e=h[f];var k=a.EventCallback.newEventCallback(b,e.name,e.type);k&&(k._slot=this,k.parse(e),n.push(k))}f=0;for(h=d.selectedAds||[];f<h.length;f++)e=h[f],d=[],k=new a.AdInstance(b),d.push(k),k._slot=this,k._slotCustomId=c,k._parentAdInstancesGroup=d,k.parse(e),g.push(d)}},getCurrentAdInstance:function(){return f},is_MIDRnt:c}gnore"))},pause:function(){a.log("Slot.pause");u!==a.TIME_POSITION_CLASS_DISPLAY?f&&f.pause():a.log("Not a temporal slot. Ignore."gnore.")},skipignore")},
srgumenay(this)},onStartPlaying:function(){this._onStartPlaying()},onStartReplaying:function(){this._onStartPlaying()},onCompletePlaying:function(){this._onCompletePlaying()},onCompleteReplaying:function(){this._onCompletePlaying()},playNextAte(this)},scheduleAlation()},_clearScheduledAdInstance:function(){h=null},_onStastance()},dispatcht:this})},_onCompleot(this)},_playNextAreturn!0},_commitScheduledAh=null)}},_nextPlayableAurn null}"+
c+"]"},getAdreturn a},getPlareturn a},getTotaturn m=b},playComs.play()},getState:function(){return z},setAcceptCompanion:function(a){D=a},getAcceptCompanion:function(){return D},setInitialAdOption:function(a){K=a},getInitialAdOption:function(){return K}}};a.SurveyExtension=function(){this._surveyPingedIds=[]};a.SurveyExtension.prototStarted)ted=null},_getPreturn b}};a.SurveyExtension.prototype.constructor=a.SurveyExtension;a.ExtensionManager=function(b){this._extensions={};this._context=b;this._surveyExtension=new a.SurveyExtension;this._surveyExtension.init(b);this._videoStateExtension=new a.VideoStateExtension;this._videoStateExtension.init(b);this._displayRefreshExtension=new a.DisplayRefreshExtension;this._displayRefreshExtension.init(b);this._contentVideoExtension=new a.ContentVideoExtension;this._contentVideoExtension.init(b);this._pauseAdExtension=
new a.PauseAdExtension;this._pauseAdExtension.init(b);this._omsdkExtension=new a.OMSDKExtension;this._omsdkExtension.init(b);this._skippableAdExtension=new a.SkippableAdExtension;this._skippableAdExtension.init(b)};a.ExtensionManager.prototype={_scrrted"))}},_getExtensionNa[1]:null},Name: empty")},dispose:function(){this._extensions=null;this._surveyExtension.dispose();this._surveyExtension=null;this._displayRefreshExtension.dispose();this._displayRefreshExtension=null;this._pauseAdExtension.dispose();this._pauseAdExtension=null;this._omsdkExtension.dispose();this._omsdkExtension=
null;this._videoStateExtension.dispose();this._videoStateExtension=null;this._contentVideoExtension.dispose();this._contentVideoExtension=null;this._skippableAdExtension.dispose();this._context=this._skippableAdExtension=null}};a.ExtensionManager.prototype.constructor=a.ExtensionManager;a.Evenontext=a};a.EventCallback.prototype={};a.EventCallback.prototype.constructor=
a.EventCallback;a.EventCallback.getEvenurn null};a.EventCallback.newEvenreturn b};a.EventCallback.getreturn c};a.Util.mixin(a.EventCallback.prototy.valureturn return c},getTrareturn d}tUrl(b))},_processTraUrls(b))},_shouldSkipSendingTrackingAndExtreturn!1},_nereturn c},_getAdPlareturn a},_getCreativeAssereturn a},_getmeter(a)},_replacereturn b},_replaceMacrosInUrl:function(b,c){if(a.Util.isBlank(b))return b;c&&c[a.INFO_KEY_VAST_ERROR_CODE]&&(b=this._replaceVASTMacro(b,"ERRORCODE",c[a.INFO_KEY_VAST_ERROR_CODE]));this._getCreativeAssetLocation()&&(b=this._replaceVASTMacro(b,"ASSETURI",this._getCreativeAssetLocation()));var d=this._context._getContentPlayheadTime();if(this._adInstance){c=null!=d&&0<=Number(d)?a.Util.secondsToHms(d):
"";b=this._replaceVASTMacro(b,"CONTENTPLAYHEAD",c);b=this._replaceVASTMacro(b,"CACHEBUSTING",a.Util.getFixedDigitRandomNumber(8));b=this._replaceVASTMacro(b,"TIMESTAMP",a.Util.getDateStringInISOFormat(new Date));b=this._replaceVASTMacro(b,"PAGEURL",a.Util.getContentURL());b=this._replaceVASTMacro(b,"OMIDPARTNER",a.OMSDK_PARTNER_NAME+"/"+this._context._adManager.getOMSDKPartnerVersion());c=[];if(this._context._overriddenAdRenderers&&null!=this._context._overriddenAdRenderers){var e=[];this._context._adResponse&&
this._context._adResponse._adRenderers&&(e=this._context._overriddenAdRenderers.concat(this._context._adResponse._adRenderers));for(var f=0;f<e.length;f++){var h=e[f].creativeApi||"";h.includes("VPAID")?c.push(a.IAB_API_FRAMEWORKS_VPAID_2):h.includes("MRAID")&&c.push(a.IAB_API_FRAMEWORKS_MRAID_1)}}this._context.getParameter(a.PARAMETER_EXTENSION_OMSDK_ENABLED)&&c.push(a.IAB_API_FRAMEWORKS_OMID_1);c=c.sort!=c[b-1]});b=this._replaceVASTMacro(b,"APIFRAMEWORKS",c.toString())}b=
b.replace(/#(ce?)\{([^\}]+)\}/g,a.Util.ent(c):c}));c="";try{c=a.Util.getParameterInURL(b,
a.URL_PARAMETER_KEY_CR)}catch(g){return a.warn(g),b}a.Util.isBlank(c)||(b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_CR,this._replaceMacrosInUrl(c)));return b}});a.AdClickEventCallback=function(b){a.EventCallback.call(this,b)};a.AdClickEventCallback.prototype=new a.EventCallback;a.AdClickEventCallback.prototype.constructor=a.AdClickEventCallback;a.Util.mixin(a.AdClickEventCallback.prototypreturn c(this,b)}});a.AdImpressionEventCallback=function(b){a.EventCallback.call(this,
b)};a.AdImpressionEventCallback.prototype=new a.EventCallback;a.AdImpressionEventCallback.prototype.constructor=a.AdImpressionEventCallback;a.Util.mixin(a.AdImpressionEventCallback.prototype,{_shouldSkipSendingTrackingAndExternalUrls:function(){return this._getInitValue()!==a.INIT_VALUE_ONE},_getInitValue:function(){return this._adInstance.getSlot().isPauseSlot()||!this._processed?a.INIT_VALUE_ONE:a.INIT_VALUE_TWO},_getStartTimePosition:function(){return this._adInstance.getStartTimePosition()},_getAutoPllocked()},
getUrl:function(b){var c=a.EventCallback.prototype.getUrl.call(this,b);c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_METR,this._adInstance._metr);if(this._name!==a.EVENT_AD_IMPRESSION)c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_CT,this._needEmptyCT(b)?"":this._adInstance._timer.tick());else if(-1<this._getStartTimePosition()&&(c=a.Util.setParameterInURL(c,a.URL_PARAMETER_START_TIME_POSITION,this._getStartTimePosition())),this._getAutoPlayBlocked()){b="";try{b=a.Util.getParameterInURL(c,a.URL_PARAMETER_KEY_AUTO_PLAY_BLOCKED)}catch(d){return a.warn(d),
c}c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_AUTO_PLAY_BLOCKED,b|a.URL_PARAMETER_KEY_AUTO_PLAY_BLOCKED_VALUE)}return c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_INIT,this._getInitValue())ssed=!0)}});a.AdQuartileEventCallback=function(b){a.EventCallback.call(this,b)};a.AdQuartileEventCallback.prototype=
new a.EventCallback;a.AdQuartileEventCallback.prototype.constructor=a.AdQuartileEventCallback;a.Util.mixin(a.AdQuartileEventCallback.prototype,{_getALUE_TWreturn cessed=!0}});a.AdStandardEventCallback=function(b){a.EventCallback.call(this,b)};a.AdStandardEventCallback.prototype=new a.EventCallback;a.AdStandardEventCallback.prototype.constructor=a.AdStandardEventCallback;a.AdProgressEventCallback=function(b){a.EventCallback.call(this,b)};a.AdProgressEventCallback.prototype=new a.EventCallback;a.AdProgressEventCallback.prototype.constructor=a.AdProgressEventCallback;a.Util.mixin(a.AdProgressEventCallback.prototype,
{getTrareturn bgUrls())}});a.ErrorEventCallback=function(b){a.EventCallback.call(this,b)};a.ErrorEventCallback.prototype=new a.EventCallback;a.ErrorEventCallback.prototype.constructor=a.ErrorEventCallback;a.Util.mixin(a.ErrorEventCallback.prototypnent(e))}});a.ResellerNoAdEventCallback=
function(b){a.EventCallback.call(this,b)};a.ResellerNoAdEventCallback.prototype=new a.EventCallback;a.ResellerNoAdEventCallback.prototype.constructor=a.ResellerNoAdEventCallback;a.Util.mixin(a.ResellerNoAdEventCallback.prototype,{});a.SlotImpressionEventCallback=function(b){a.EventCallback.call(this,b)};a.SlotImpressionEventCallback.prototype=new a.EventCallback;a.SlotImpressionEventCallback.prototype.constructor=a.SlotImpressionEventCallback;a.Util.mixin(a.SlotImpressionEventCallback.prototype,{_shouldSkipSendingTrackingAndExtALUE_ONE},_getALUE_TWValue())},process:function(b){a.EventCallback.prototype.process.call(this,b);this._processed=!0}});a.VideoViewEven(this,b)};a.VideoViewEventCallback.prototype=new a.EventCallback;a.VideoViewEventCallback.prototype.constructor=
a.VideoViewEventCallback;a.Util.mixin(a.VideoViewEventCallback.prototype,{_getALUE_ONE},_gTime():Value())},_shouldSkipSendingTrackingAndExternalUrls:function(){return this._processed}essed=!0}});a.VideoRenderer=function(a){this._adVideo=null;this._duration=this._playheadTime=-1;this._dragging=this._stopInvoked=this._isEnded=!1;this._volume=1;this._rendererController=null;this._isBuffering=!1;this._autoPauseAdOnVisibilityChange=!0;this._hls=null;this._adVideoPauseState="";this._isSimid=void 0===a?!1:a};a.VideoRenderer.prototyRENDEREUNPAUSED},start:function(b){this._rendererController=b;var c=this._rendererController.getAdInstance(),
d=c.getSlot(),e=this,f=!1,h=!1;this._autoPauseAdOnVisibilityChange=this._rendererController.getParameter(a.PARAMETER_AUTO_PAUSE_AD_ONVISIBILITYCHANGE);if(a.PLATFORM_NOT_SUPPORT_MIDROLL_AD&&d.getTimePositionClass()===a.TIME_POSITION_CLASS_MIDROLL)this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"midroll");else{a.log("VideoRenderer.start",d.getTimePositionClass(),c);var g=this._rendererController.getContentVideoElement();a.debug("VideoRenderer","use content video element");g.controls=!1;this._adVideo=g;
var n=null,k=null,l=null,z=null,m=d.getVideoDisplaySize().width,u=d.getVideoDisplaySize().height;b=c.getRenderableCreativeRenditions();var p=(m=(new a.RenditionSelector(this._rendererController.getParameter(a.PARAMETER_DESIRED_BITRATE)||1E3,this._rendererController.getParameter("arWeight")||1,this._rendererController.getParameter("pxWeight")||1,.2)).getBestFitRendition(b,m,u))?m.getPrimaryCreativeRenditionAsset():null;if(p&&b.length)if(b=p.getProxiedUrl()){c.setActiveCreativeRendition(m);a.log("VideoRenderer.start selected rendition is:",
b);b=p.getMimeType();var r=a.Util.isMimeTypeHls(b);this._rendererController.setCapability(a.EVENT_AD_QUARTILE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_MUTE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_PAUSE,a.CAPABILITY_STATUS_ON);var B=!a.PLATFORM_NOT_SUPPORT_CLICK_FOR_VIDEO;B||this._rendererController.setCapability(a.EVENT_AD_CLICK,a.CAPABILITY_STATUS_OFF);var M=a.PLATFORM_EVENT_CLICK,O=a.MOBILE_EVENT_DRAG;this._volume=this._rendererController.getContext().getAdVolume();
this._adVideo.volume=this._volume;this._adVideo.muted=0===this._volume;var P=function(b){a.debug("VideoRenderer.checkTimeUpdate timeout");U(b)},R=function(){k&&(clearTimeout(k),k=null)},S=a.Util.bind(this,function(b){a.debug("onAdVideoBufferEmpty(): Ad video event "+b.type);b=this._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_PLAY_AFTER_STALLED);null!==b&&"undefined"!==typeof b&&!1!==a.Util.str2bool(b)&&(a.debug("play the ad immediately after the stalled event"),g&&g._fw_videoAdPlaying&&
g.play())}),T=function(b){e._isBuffering||(e._isBuffering=!0,e._rendererController.processEvent({name:a.EVENT_AD_BUFFERING_START}),a.debug("onAdVideoBufferingStarted(): Ad video event "+b.type))},v=function(b){e._isBuffering&&(e._isBuffering=!1,e._rendererController.processEvent({name:a.EVENT_AD_BUFFERING_END}),a.debug("onAdVideoBufferingEnded(): Ad video event "+b.type))};b=this._rendererController.getParameter(a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT);var I=null;b&&(I=document.getElementById(b));
I||(I=g);var t=a.Util.ick."))}}),x=a.Util.bind(this,function(b){a.debug("Ad video event "+b.type);this._dragging==!trols=!1},D=0,K=function(b){a.debug("Ad video event "+b.type);0>=g.currentTime?a.debug("VideoRenderer.onAdVideoTimeUpdate currentTime is less than or 0"):(R(),g.paused||(b=e._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT)||8E3,k=setTimeout(P,b,b+"ms timeout when playing")),h||(h=!0,e._playheadTime=g.currentTime,0>e._playheadTime&&(e._playheadTime=0),n&&(clearTimeout(n),n=null),e._quartileTimerId=setInterval(function(){var b=g.currentTime,c=g.duration;
0<b&&(e._playheadTime=b);"number"!==typeof b||"number"!==typeof c||l||(e._rendererController&&(e._rendererController.checkProgress(b),e._rendererController.checkForSkippableStateChange()),b>=.25*c&&1>D&&(e._rendererController.processEvent({name:a.EVENT_AD_FIRST_QUARTILE}),D=1),b>=.5*c&&2>D&&(e._rendererController.processEvent({name:a.EVENT_AD_MIDPOINT}),D=2),b>=.75*c&&3>D&&(clearInterval(e._quartileTimerId),e._quartileTimerId=null,e._rendererController.processEvent({name:a.EVENT_AD_THIRD_QUARTILE}),
D=3))},1E3),0<g.duration&&(e._duration=g.duration,c.adjustOffsetAndProgressWithRendererDuration(e._duration)),e._rendererController.handleStateTransition(a.RENDERER_STATE_STARTED),e._rendererController.checkForSkippableStateChange()))};this.dispose=a.Util.bind(this,function(){H()});var H=function(b){e.playAdAfterStartDelay&&(clearTimeout(e.playAdAfterStartDelay),e.playAdAfterStartDelay=null);var c=l;b&&b.type&&(a.debug("Ad video event "+b.type),"error"===b.type&&(a.warn(b.target.src),a.warn(b.target.currentSrc),
v(b)));R();n&&(clearTimeout(n),n=null);B&&(I.removeEventListener(M,t,!1),I.removeEventListener(O,x,!1));w&&(clearTimeout(w),w=null);Q&&e._autoPauseAdOnVisibilityChange&&(document.removeEventListener("visibilitychange",Q,!1),Q=null);g.removeEventListener("ended",H,!1);g.removeEventListener("error",H,!0);g.removeEventListener("pause",F,!1);g.removeEventListener("playing",A,!1);g.removeEventListener("timeupdate",K,!1);g.removeEventListener("stalled",S,!1);g.removeEventListener("waiting",T,!1);g.removeEventListener("canplay",
v,!1);g.paused||(a.debug("try pausing video before complete"),g.pause());b&&"error"===b.type&&(c="video error",(b=g.error||b.target.error)&&(c="error:"+b+",code:"+b.code));c||(e._isEnded=!0);a.log("VideoRenderer.complete");f?e._rendererController.checkProgress(g.duration):(f=!0,delete g._fw_videoAdPlaying,e._adVideo=null,e._quartileTimerId&&(clearInterval(e._quartileTimerId),e._quartileTimerId=null),c?e._onRendererFailed(z,c):(e._stopInvoked||(g.currentTime>=.25*g.duration&&1>D&&(e._rendererController.processEvent({name:a.EVENT_AD_FIRST_QUARTILE}),
D=1),g.currentTime>=.5*g.duration&&2>D&&(e._rendererController.processEvent({name:a.EVENT_AD_MIDPOINT}),D=2),g.currentTime>=.75*g.duration&&3>D&&(e._rendererController.processEvent({name:a.EVENT_AD_THIRD_QUARTILE}),D=3),g.currentTime>=g.duration-.5&&4>D&&(e._rendererController.checkProgress(g.duration),e._rendererController.processEvent({name:a.EVENT_AD_COMPLETE}),D=4)),e._stopInvoked=!1,e._isSimid||e._rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED)));e._rendererController=null;
e._hls&&e._hls.destroy()};var U=function(b){l=b;z=a.ERROR_TIMEOUT;a.warn(l);H()},Q=function(b){a.log("onVisibilityChange:"+(document.hidden?"invisible":"visible"));document.hidden?e._adVideoPauseState!==a.AD_VIDEO_PAUSED_BY_RENDERER&&(g&&!g.paused&&g.pause(),e._adVideoPauseState=a.AD_VIDEO_PAUSED_BY_TAB_SWITCH,e._rendererController&&e._rendererController.processEvent({name:a.EVENT_AD_PAUSE}),n&&(clearTimeout(n),n=null)):e._adVideoPauseState===a.AD_VIDEO_PAUSED_BY_TAB_SWITCH?(e.resume(),h||!g._fw_fromVideoPool&&
!a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT||(b=e._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT)||5E3,n=setTimeout(U,b,b+"ms timeout before playing"))):e._adVideoPauseState===a.AD_VIDEO_HLS_PAUSED_BY_RENDERER_AFTER_TAB_SWITCH&&e._rendererController&&!g.paused&&(console.log("VideoRenderer _onVisibilityChange: ad already resumed, fire resume event"),e._rendererController.processEvent({name:a.EVENT_AD_RESUME}))};g._fw_videoAdPlaying=!0;var E=!1,N=function(){if(!E){E=
!0;B&&(I.addEventListener(M,t,!1),I.addEventListener(O,x,!1));g.addEventListener("ended",H,!1);g.addEventListener("error",H,!0);g.addEventListener("pause",F,!1);g.addEventListener("playing",A,!1);g.addEventListener("timeupdate",K,!1);g.addEventListener("stalled",S,!1);g.addEventListener("waiting",T,!1);g.addEventListener("canplay",v,!1);if(r)if("undefined"!==typeof Hls){if(Hls.isSupported()){var b=Hls.version;b=b.replace("-beta","");0<=a.Util.compareVersion(b,a.PLATFORM_HLSJS_MIN_VERSION)?(a.log("VideoRenderer loading hls rendition using hls.js version",
b),e._hls=new window.Hls,e._hls.on(Hls.Evels.js.")}),e._hls.attachMedia(g),e._hls.on(Hls.Events.MEDIAevel")})})):0>a.Util.compareVersion(b,a.PLATFORM_HLSJS_MIN_VERSION)?a.warn("Found hls.js version is too old and incompatible. Please upgrade to v0.11.0 or higher. Current version:",
b):a.warn("Unable to find successful hls support.")}}else g.src=p.getProxiedUrl(),a.debug("VideoRenderer loading hls rendition on Safari "+g.src),g.load();else g.src=p.getProxiedUrl(),a.debug("VideoRenderer loading video ad "+g.src),g.load();if(g._fw_fromVideoPool||a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT)b=e._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT)||5E3,n=setTimeout(U,b,b+"ms timeout before playing");a.PLATFORM_VIDEO_DOESNOT_SUPPORT_TIMEUPDATE&&e._rendererController.handleStateTransition(a.RENDERER_STATE_STARTED);
b=100;0<a.PLATFORM_ANDROID_VERSION&&(b=e._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_ANDROID_DELAY)||100);e.playAdAfterStartDelay=setTimeout(function(){e.playAdAfterStartDelay=null;var b=g.play();b&&a.PLATFORM_BLOCKS_AUTOPLAYly:!0}})});document.hidden&&g&&e._autoPauseAdOnVisibilityChange&&(a.log("VideoRenderer pause ad when tab is invisible."),g&&!g.paused&&(g.pause(),e._adVideoPauseState=a.AD_VIDEO_PAUSED_BY_TAB_SWITCH,e._rendererController&&e._rendererController.processEvent({name:a.EVENT_AD_PAUSE})),n&&(clearTimeout(n),n=null));e._autoPauseAdOnVisibilityChange&&document.addEventListener("visibilitychange",Q,!1)},b)}};a.VideoRenderer._fw_playedDummyVideo||d.getTimePositionClass()!==a.TIME_POSITION_CLASS_PREROLL||
!a.PLATFORM_PLAY_DUMMY_VIDEO_FOR_PREROLL||/\.webm$/.test(p.getProxiedUrl())?N():(a.VideoRenderer._fw_playedDummyVideo=!0,a.debug("play dummy video for iOS 3.2-4.1"),g.src="http://127.0.0.1:1/404.mp4",g.load(),g.play(),g._fw_videoAdPlaying=!0,g.addEventListene,!0);N()},!0),setTimeout(N,5E3))}else this._onRendererFailed(a.ERROR_NULL_ASSET);else this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"no compatible asset")}},stop:function(){a.debug("VideoRenderer stop");
this._stopInvoked=!0;this._adVideo&&(this._adVideo._fw_videoAdPlaying=!1,this._adVideo.pause(),this.dispose());this._rendererController=null},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlaheadTime},getDuration:function(){return this._duration},setVolume:function(b){a.debug("VideoRenderer setVolume("+b+")");this._adVideo?
(this._adVideo.volume=b,this._adVideo.muted=0===b,a.Util.fireVolumeEvents(this._volume,b,this._rendererController),this._volume=b):a.debug("VideoRenderer ad video is null, ignore.")},_onRendererFailed:function(b,c,d){var e={};e[a.INFO_KEY_ERROR_MODULE]="VideoRenderer";e[a.INFO_KEY_ERROR_CODE]=b;d||(d=a.ERROR_VAST_GENERAL_LINEAR_ERROR);e[a.INFO_KEY_VAST_ERROR_CODE]=d;c&&(e[a.INFO_KEY_ERROR_INFO]=c);this._rendererController.handleStateTransition(a.RENDERER_STATE_FAILED,e)}};a.VideoRenderer.prototype.constructor=
a.VideoRenderer;a.mInfo=""};a.AdRequest.prototype={setCity(a,c)},adpush(b))},ce(d,1)}},srofile=b},setVideoDisplayCompatquired")},setSiquired")},sress=c))},setRem()+
1))},setRequesation=b)},addCa.push(b)},addTempush(C)}},setSubsessionToken:function(a){this._subsessionToken=a},scanPageSlots:function(){this._slotScanner.scanPageSlots()},generateTypeBR c+"?"+b},generateVideoViewRequestUrlWithDummyContextIreturn c},parsn(";"))}},generateGlobalParametersQueryStr:function(){a.debug("AdRequest.generateGlobalParametersQueryStr");var b=this._context.getParameter("wrapperVersion");b=[["prof",this._playerProfile,"string"],["nw",this._context._adManager._networkId,"number"],["caid",this._context._videoAsset._customId,"string"],["asid",this._context._videoAsset._id,"string"],["vdur",this._context._videoAsset._duration,"number"],["asnw",this._context._videoAsset._networkId,"number"],["asml",this._context._videoAsset._location,
"string"],["vprn",this._context._videoAsset._viewRandom,"number"],["afid",this._context._videoAsset._fallbackId,"string"],["vdty",this._context._videoAsset._durationType,"string"],["vtpo",this._context._videoAsset._currentTpos,"number"],["csid",this._siteSectionCustomId,"string"],["ssid",this._siteSectionId,"string"],["ssnw",this._siteSectionNetworkId,"number"],["pvrn",this._siteSectionViewRandom,"number"],["sfid",this._siteSectionFallbackId,"string"],["vcid",this._visitorCustomId,"string"],["mode",
this._requestMode,"string"],["vrdu",this._requestDuration,"number"],["ssto",this._subsessionToken,"number"],["cd",this._compatibleDimensions||this.detectScreenDimension(),"string"],["vclr",a.version+(b?","+b:""),"string"],["resp",a.PLATFORM_SEND_REQUEST_BY_FORM?"json2":"json","string"],["orig",window.location.protocol+"//"+window.location.host,"string"],["cbfn","tv.freewheel.SDK._instanceQueue['Context_"+this._context._instanceId+"'].requestComplete","string"],["vip",this._visitorIpV4Address,"string"],
["cana",this._candidateAdIds.join(","),"string"],["aist",this._context._airingStartTime,"number"],["bksq",this._context._breakSequence,"number"]];for(var c=0;c<b.length;c++){var d=b[c];switch(d[2]){case "string":a.Util.isBlank(d[1])||(this._urlParams[d[0]]=encodeURIComponent(d[1]));break;case "number":0<d[1]&&(this._urlParams[d[0]]=d[1])}}b="";for(var e in this._urlParams)this._urlParams.hasOwnProperty(e)&&(b+=e+"="+this._urlParams[e]+"&");b=b.substring(0,b.length-1);0<this._slotScanner._candidateAds.length&&
(null==this._capabilities._capabilities[a.CAPABILITY_CHECK_COMPANION]&&this._capabilities.setCapability(a.CAPABILITY_CHECK_COMPANION,a.CAPABILITY_STATUS_ON),null==this._capabilities._capabilities[a.CAPABILITY_CHECK_TARGETING]&&this._capabilities.setCapability(a.CAPABILITY_CHECK_TARGETING,a.CAPABILITY_STATUS_OFF));this._context._videoAsset._eventCallback||this._context._videoAsset._requestedVideoViewUrl||!this._context._videoAsset._id&&!this._context._videoAsset._customId||this._context.setCapability(a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,
a.CAPABILITY_STATUS_ON);this._capabilities._capabilities[a.CAPABILITY_DISPLAY_REFRESH]&&this._context.setCapability(a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,a.CAPABILITY_STATUS_OFF);b=this._capabilities.parseCapabilities(b);this._context.setCapability(a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,a.CAPABILITY_STATUS_UNSET);switch(this._context._videoAsset._autoPlayType){case a.VIDEO_ASSET_AUTO_PLAY_TYPE_CLICK_TO_PLAY:e="+cltp";break;case a.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED:e="+play+uapl";break;case a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE:e=
"-play";break;default:e="+play-uapl"}return b=b.replace(/flag=/,"flag="+encodeURIComponent(e))},generateKeyValuesStr:function(){a.debug("AdRequest.generateKeyValuesStr");this.addBrowserParams();this.addOmidValues();for(var b=this._keyValues.concat(["_fw_dpr="+(void 0===window.devicePixelRatio?"1":window.devicePixelRatio.toFixed(2).toString())]),c=0;c<this._urlKeyValues.length;c++){var d=this._urlKeyValues[c];0>b.indexOf(d)&&b.push(d)}(c=this._context._adManager._location)&&b.push("ltlg="+encodeURIComponent(Math.round(1E4*
c.coords.latitude)/1E4+","+Math.round(1E4*c.coords.longitude)/1E4));return b.join("&")},generateSlotpeBStr()},
detectScreenn.height},useTCFAPI:function(b){var c=b.string;b=b.consentParam;a.debug("AdRequest.useTCFAPI");this.removeKey("_fw_gdpr");this.removeKey("_fw_gdpr_consent");this.addKeyValue("_fw_gdpr",c);this.addKeyValue("_fw_gdpr_consent",b)},useUSPAPI:function(b){""!=b&&(a.debug("AdRequest.useUSPAPI"),this.removeKey("_fw_us_privacy"),this.addKeyValue("_fw_us_privacy",b))},useGPP:function(b){var c=
b.gppString;b=b.sectionId;a.debug("AdRequest.useGPP");this.removeKey("gpp");this.removeKey("gpp_sid");this.addKeyValue("gpp",c);this.addKeyValue("gpp_sid",b)},addBrowserParams:function(){this.addKeyValue("_fw_br_lg",(navigator.languages?navigator.languages.length:0).toString());this.addKeyValue("_fw_br_prm",this._context._adManager._permissionsCheck.toString());this.addKeyValue("_fw_br_wd",this._checkPresence(navigator.webdriver));this.addKeyValue("_fw_br_ch",this._checkPresence(window.chrome));this.addKeyValue("_fw_br_nt",
this._checkPresence(window.netscape));this.addKeyValue("_fw_br_sf",this._checkSafari())},addOmidValues:function(){this.removeKey("_fw_omidpn");this.removeKey("_fw_omidpv");this.addKeyValue("_fw_omidpn",a.OMSDK_PARTNER_NAME);this.addKeyValue("_fw_omidpv",this._context._adManager.getOMSDKPartnerVersion())},_checkPresence:function(a){return(a?1:0).toString()},_ch?"1":"0"}};a.AdInstance=function(b){this._context=b;this._creativeRenditionId=this._creativeId=
this._soAdUnit=this._adId=this._slot=null;this._universalAdIdRegistry=this._universalAdId=this._action=this._marketUnifiedAdId=this._openExchangeId=this._dealId=this._replicaId="";this._primaryCreativeRendition=this._creative=null;this._creativeRenditions=[];this._noLoad=!1;this._companionAdInstances=[];this._eventCallbacks=[];this._externalEventCallbackUrlsDictionary={};this._rendererController=new a.RendererController(b,this);this._timer=new a.Timer;this._metr=0;this._state=a.MediaInitState.instance;
this._isStartSuccessfully=this._translated=this._isImpressionSent=this._isInitiatedSent=!1;this._lastDurationFromRenderer=-1;this._slotCustomId=this._parentAdInstancesGroup=null;this._isSkipped=!1;this._wrapperCount=0;this._startTimePosition=-1;this._adVerifications=[];this._skipOffset=-1;this._progressEventCallbackUrlsDict={};this._progressPercentageEventCallbackUrlsDict={};this._skipOffsetPercentage=-1};a.AdInstance.prototype={};a.AdInstance.prototype.constructor=a.AdInstance;a.METR_MASK_QUARTILE=
0;a.METR_MASK_MIDPOINT=1;a.METR_MASK_COMPLETE=2;a.METR_MASK_VOLUME=3;a.METR_MASK_SIZE=4;a.METR_MASK_CONTROL=5;a.METR_MASK_REWIND=6;a.METR_MASK_ACCEPT_INVITATION=7;a.METR_MASK_CLOSE=8;a.METR_MASK_MINIMIZE=9;a.METR_MASK_CLICK=10;a.AdInstance._metrDictionary={};a.AdInstance._metrDictionary[a.EVENT_AD_FIRST_QUARTILE]=a.AdInstance._metrDictionary[a.EVENT_AD_THIRD_QUARTILE]=a.AdInstance._metrDictionary[a.EVENT_AD_QUARTILE]=1<<a.METR_MASK_QUARTILE|1<<a.METR_MASK_MIDPOINT|1<<a.METR_MASK_COMPLETE;a.AdInstance._metrDictionary[a.EVENT_AD_MIDPOINT]=
1<<a.METR_MASK_MIDPOINT|1<<a.METR_MASK_COMPLETE;a.AdInstance._metrDictionary[a.EVENT_AD_COMPLETE]=1<<a.METR_MASK_COMPLETE;a.AdInstance._metrDictionary[a.EVENT_AD_MUTE]=1<<a.METR_MASK_VOLUME;a.AdInstance._metrDictionary[a.EVENT_AD_UNMUTE]=1<<a.METR_MASK_VOLUME;a.AdInstance._metrDictionary[a.EVENT_AD_COLLAPSE]=1<<a.METR_MASK_SIZE;a.AdInstance._metrDictionary[a.EVENT_AD_EXPAND]=1<<a.METR_MASK_SIZE;a.AdInstance._metrDictionary[a.EVENT_AD_PAUSE]=1<<a.METR_MASK_CONTROL;a.AdInstance._metrDictionary[a.EVENT_AD_RESUME]=
1<<a.METR_MASK_CONTROL;a.AdInstance._metrDictionary[a.EVENT_AD_REWIND]=1<<a.METR_MASK_REWIND;a.AdInstance._metrDictionary[a.EVENT_AD_ACCEPT_INVITATION]=1<<a.METR_MASK_ACCEPT_INVITATION;a.AdInstance._metrDictionary[a.EVENT_AD_CLOSE]=1<<a.METR_MASK_CLOSE;a.AdInstance._metrDictionary[a.EVENT_AD_MINIMIZE]=1<<a.METR_MASK_MINIMIZE;a.AdInstance._metrDictionary[a.EVENT_AD_CLICK]=1<<a.METR_MASK_CLICK;a.Util.mixin(a.AdInstance.prototype,{getAdId:function(){return this._adId},getUnivd():null},getSoAdUnit:function(){return this._soAdUnit},getreturn b},addProgressEventCallbackUrls:function(a,c){this._progressEventCallbackUrlsDict.hasOwnProperty(a)?(c=this._progressEventCallbackUrlsDict[a].concat(c),this._progressEventCallbackUrlsDict[a]=c):this._progressEventCallbackUrlsDict[a]=c||[]},addPercentageProgressEventCala]=c||[]},adjustOffsetAndProgressWithRendererDuration:function(b){-1!==this._skipOffsetPercentage&&(this._skipOffset=a.Util.offsetStringToSecond(this._skipOffsetPercentage+"%",b));if(0!==Object.keys(this._progressPercentageEventCallbackUrlsDict).length){this._progressEventCallbackUrlsDict={};for(var c in this._progressPercentageEventCallbackUrlsDict){var d=a.Util.offsetStringToSecond(c+"%",b);this._progressEventCallbackUrlsDict[d]=this._progressEventCallbackUrlsDict[d]?
this._progressEventCallbackUrlsDict[d].concat(this._progressPercentageEventCallbackUrlsDict[c]):[].concat($jscomp.arrayFromIterable(this._progressPercentageEventCallbackUrlsDict[c]))}}},getAdSkippOffset()},getEventCalreturn d},addEventCalncat(d))},setClickTwser=!0)},addAdVerificationsh(a[b])},addCreativereturn b},getRendererController:function(){return this._rendererControlleris._slot},getCompareturn a},getActiveCreativeRendition:function(){return this._primaryCreativeRendition},setActiveCreatives null")},getAllCreativeRreturn a},getRenderableCreativeRreturn a},getPlayheadTime:function(){var b=-1;if(this._rendererController.getRenderer()&&"function"===
typeof this._rendererController.getRenderer().getPlayheadTime)try{b=this._rendererController.getRenderer().getPlayheadTime()}catch(c){a.warn("AdInstance.getPlayheadTime "+c.name+": "+c.message)}return b},gereturn a},parse:function(b){if(b){this._adId=b.adId||null;this._creativeId=b.creativeId||null;this._creativeRenditionId=b.creativeRenditionId||null;this._replicaId=b.hasOwnProperty("replicaId")?b.replicaId:"";this._dealId=b.hasOwnProperty("dealId")?b.dealId:"";this._openExchangeId=b.hasOwnProperty("openExchangeId")?b.openExchangeId:"";this._marketUnifiedAdId=b.hasOwnProperty("marketUnifiedAdId")?b.marketUnifiedAdId:"";this._action=b.hasOwnProperty("action")?
b.action:"";this._universalAdId=b.hasOwnProperty("universalAdId")?b.universalAdId:"";this._universalAdIdRegistry=b.hasOwnProperty("universalAdIdRegistry")?b.universalAdIdRegistry:"";this._noLoad=this._context._adResponse.getAd(this._adId).getNoLoad();this._soAdUnit=this._context._adResponse.getAd(this._adId).getSoAdUnit();this._creative=this._context._adResponse.getCreative(this._adId,this._creativeId);this._creativeRenditions=this._creative.getEligibleCreativeRenditionsForAdInstance(this);var c,
d;var e=0;for(c=b.eventCallbacks||[];e<c.length;e++){var f=c[e];if(d=a.EventCallback.newEventCallback(this._context,f.name,f.type))d._adInstance=this,d.parse(f),this._eventCallbacks.push(d)}e=0;for(c=b.companionAds||[];e<c.length;++e)(f=c[e])&&f.adSlotCustomId&&(d=new a.AdInstance(this._context),d._slotCustomId=f.adSlotCustomId,d.parse(f),this._companionAdInstances.push(d));e=0;for(c=b.fallbackAds||[];e<c.length;++e)f=c[e],d=new a.AdInstance(this._context),this._parentAdInstancesGroup.push(d),d._slot=
this._slot,d._parentAdInstancesGroup=this._parentAdInstancesGroup,d.parse(f);e=0;for(c=b.extensions||[];e<c.length;++e)if((f=c[e])&&"adVerifications"==f.type)for(j=0,arr1=f.adVerifications||[];j<arr1.length;++j)b=new a.AdVerification,b.parseFromJSON(arr1[j]),this._adVerifications.push(b);0<this._creativeRenditions.length&&(this._primaryCreativeRendition=this._creativeRenditions[0nces[b])},
pause:function(){a.log("AdInstance.pause "+this._slotCustomId);this._isStartSuccessfully?this._rendererController&&this._rendererController.pause():a.log("Ad hasn't started yet. Ignore."gnoreptSkip()},_processTANDAr.stop()},faktance())}stance()},isStarted:function(){return this._isStartSuccessfully},onStalated=!0},onCompletePlaying:function(){},onStartReplaying:function(){},onCompleteReplaying:function(){},getEvencks,b,c)},proreturn f},processProgrocess()},
olume(b)metr&~d)},getExternalEventCal.slicereset()}},cloneForTranslation:function(){var b=new a.AdInstance(this._context);b._adId=this._adId;b._creativeId=this._creativeId;b._creative=this._creative.cloneForTranslation();b._creativeRenditionId=this._creativeRenditionId;b._isInitiatedSent=this._isInitiatedSent;b._noLoad=this._noLoad;b._slot=
this.getSlot();b._soAdUnit=this.getSoAdUnit();b._replicaId=this._replicaId;b._dealId=this._dealId;b._openExchangeId=this._openExchangeId;b._marketUnifiedAdId=this._marketUnifiedAdId;b._action=this._action;b._universalAdId=this._universalAdId;b._universalAdIdRegistry=this._universalAdIdRegistry;b._wrapperCount=this._wrapperCount;b._adVerifications=this._adVerifications;b._skipOffset=this._skipOffset;b._skipOffsetPercentage=this._skipOffsetPercentage;for(var c=0;c<this._eventCallbacks.length;c++){var d=
this._eventCallbacks[c].copy();d._adInstance=b;b._eventCallbacks.push(d)}b._externalEventCallbackUrlsDictionary=a.Util.copy(this._externalEventCallbackUrlsDictionary);b._progressEventCallbackUrlsDict=a.Util.copy(this._progressEventCallbackUrlsDict);b._progressPercentageEventCallbackUrlsDict=a.Util.copy(this._progressPercentageEventCallbackUrlsDict);for(c=0;c<this._companionAdInstances.length;c++)this._companionAdInstances[c].isPlaceholder()?b._companionAdInstances.push(this._companionAdInstances[c].cloneForTranslation()):
b._companionAdInstances.push(this._companionAdInstances[c]);return b},isPlaceholder:function(){return this._noLoad},setMediaState:function(a){this._state=a},_isValidEventNaNT_ERROR},ireturn b}adId+"]"},getCompanionAdreturn a},isRequiToShow()},incrementWrarCount++},
getWrapperCount:function(){return this._wrapperCount},getDealId:function(){return this._dealId},getOpenExchangeId:function(){return this._openExchangeId},getMarketUnifiedAdId:function(){return this._marketUnifiedAdId},getAction:function(){return this._action},setStartTimsition")},getStartTimePosition:function(){return this._startTimePosition},
getSkipOffset:function(){return this._skipOffset},_setSkipOffset:function(b){this._skipOffset=a.Util.offsetStringToSecond(b,this.getDuration())},_setSkipOffsetPntage(b)}});a.EventDeners={}};a.EventDispatcher.prototype={addEven.push(c)},disptype,f)}},removeEvenbreak}}}}};a.EventDispatcher.prototype.constructor=a.EventDispatcher;a.ConsentManager=
function(){this._tcfConsentManager=new a.TCFConsentManager(this);this._uspConsentManager=new a.USPConsentManager(this);this._gppConsentManager=new a.GPPConsentManager(this)};a.ConsentManager.prototype.setupConsentPostMessage=function(b){a.debug("ConsentManager.setupConsentPostMessage");var c=b+"Locator",d=b+"Call",e=b+"Return",f=a.Util.getFrameAncestor(c);if(f){var h={};window[b]=function(c){for(var e=[],g=0;g<arguments.length;++g)e[g-0]=arguments[g];var k=e[0],l=e[1];g=e[2];e=e[3];a.debug("ConsentManager.setupConsentPostMessage: "+
b+" postMessage arguments. command: "+k+", version: "+l+", callback: "+g+", parameter: "+e);try{var m=new Uint32Array(1);crypto.getRandomValues(m);var u=""+m[0]}catch(p){u=""+Math.random()}m={};k=(m[d]={command:k,parameter:e,callId:u,version:l},m);h[u]=g;f.postMessage(k,"*")};window.addEventListener("message",function(c){c=c.data;try{var d="string"===typeof c?JSON.parse(c):c;if(d[e]){var f=d[e];"function"===typeof h[f.callId]&&(h[f.callId](f.returnValue,f.success),delete h[f.callId])}}catch(L){a.warn(b+
" postMessage listener error: "+L)}},!1)}else a.warn("ConsentManager.setupConsentPostMessage: "+c+" not found")};a.ConsentManager.prototype.isTCFAPIExecuted=function(){return this._tcfConsentManager.isExecuted()};a.ConsentManager.prototype.getGDPRValues=function(){return this._tcfConsentManager.getGDPRValues()};a.ConsentManager.prototype.isUSPAPIExecuted=function(){return this._uspConsentManager.isExecuted()};a.ConsentManager.prototype.isGPPExecuted=function(){return this._gppConsentManager.isExecuted()};
a.ConsentManager.prototype.getUSPString=function(){return this._uspConsentManager.getUSPString()};a.ConsentManager.prototype.getGPPValues=function(){return this._gppConsentManager.getGPPValues()};a.ConsentManager.prototypger=null};a.DasState=""};a.DashRenderer.prototyRENDEREUNPAUSED},start:function(b){this._rendererController=b;var c=this._rendererController.getAdInstance(),d=c.getSlot(),e=this,f=!1,h=!1;this._autoPauseAdOnVisibilityChange=this._rendererController.getParameter(a.PARAMETER_AUTO_PAUSE_AD_ONVISIBILITYCHANGE);if(a.PLATFORM_NOT_SUPPORT_MIDROLL_AD&&d.getTimePositionClass()===a.TIME_POSITION_CLASS_MIDROLL)this._onRendererFailed(a.ERROR_DEVICE_LIMIT,
"midroll");else if(a.PLATFORM_NOT_SUPPORT_DASH)this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"MPEG-DASH playback not supported on this platform");else{a.log("DashRenderer.start",d.getTimePositionClass(),c);var g=this._rendererController.getContentVideoElement(),n=d.getVideoDisplaySize().width,k=d.getVideoDisplaySize().height,l=c.getRenderableCreativeRenditions();b=(b=this._rendererController.getParameter(a.PARAMETER_DESIRED_BITRATE))&&0<Number(b)?Number(b):null;if((n=(k=(new a.RenditionSelector(b||
1E3,this._rendererController.getParameter("arWeight")||1,this._rendererController.getParameter("pxWeight")||1,.2)).getBestDashRendition(l,n,k))?k.getPrimaryCreativeRenditionAsset():null)&&l.length)if(n.getProxiedUrl()){c.setActiveCreativeRendition(k);a.log("DashRenderer.start selected rendition is:",n.getUrl());this._rendererController.setCapability(a.EVENT_AD_QUARTILE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_MUTE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_PAUSE,
a.CAPABILITY_STATUS_ON);var m=!a.PLATFORM_NOT_SUPPORT_CLICK_FOR_VIDEO;m||this._rendererController.setCapability(a.EVENT_AD_CLICK,a.CAPABILITY_STATUS_OFF);var J=a.PLATFORM_EVENT_CLICK,u=a.MOBILE_EVENT_DRAG;a.debug("DashRenderer","use content video element");g.controls=!1;var p=this._dashjs.MediaPlayer().create();p.initialize();l=p.getVersion();a.debug("dash.js -v "+p.getVersion()+" loaded");if(0!==a.Util.compareVersion(l,a.PLATFORM_DASHJS_SUPPORTED_VERSION))this._onRendererFailed(a.ERROR_DEVICE_LIMIT,
"Unsupported tv.freewheel.Dash.js version");else{p.setAutoPlay(!1);p.attachView(g);b&&p.updateSettings({streaming:{abr:{initialBitrate:{video:b}}}});p.attachSource(n.getUrl());p.preload();this._fwDashPlayer=p;var r=null,B=null,M=null;this._volume=this._rendererController.getContext().getAdVolume();p.setVolume(this._volume);p.setMute(0===this._volut",B=null)},R=a.Util..plb.b.type))};b=this._rendererController.getParameter(a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT);var v=null;b&&(v=document.getElementById(b));v||(v=g);var I=a.Util.ick."))}}),t=a.Util.gging=!derer=!1},A=0,D=function(b){a.debug("Ad video event "+b.type);0>=p.time()?a.debug("DashRenderer.onAdVideoTimeUpdate currentTime is less than or 0"):(P(),p.isPaused()||(b=e._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT)||8E3,B=setTimeout(O,b,b+"ms timeout when playing")),h||(h=!0,e._playheadTime=p.time(),0>e._playheadTime&&(e._playheadTime=0),r&&(clearTimeout(r),r=null),e._quartileTimerId=
setInterval(function(){var b=p.time(),c=p.duration();0<b&&(e._playheadTime=b);"number"!==typeof b||"number"!==typeof c||M||(e._rendererController&&(e._rendererController.checkProgress(b),e._rendererController.checkForSkippableStateChange()),b>=.25*c&&1>A&&(e._rendererController.processEvent({name:a.EVENT_AD_FIRST_QUARTILE}),A=1),b>=.5*c&&2>A&&(e._rendererController.processEvent({name:a.EVENT_AD_MIDPOINT}),A=2),b>=.75*c&&3>A&&(e._rendererController.processEvent({name:a.EVENT_AD_THIRD_QUARTILE}),A=
3),b>=c-.5&&4>A&&(clearInterval(e._quartileTimerId),e._quartileTimerId=null,e._rendererController.processEvent({name:a.EVENT_AD_COMPLETE}),A=4))},500),0<p.duration()&&(e._duration=p.duration(),c.adjustOffsetAndProgressWithRendererDuration(e._duration)),e._rendererController.handleStateTransition(a.RENDERER_STATE_STARTED),e._rendererController.checkForSkippableStateChange()))};this.dispose=a.Util.on(){K(er=
null};var H=function(b){M=b;a.warn(yily:!0}})};p._fw_videoAdPlaying=!0;var E=!1;(function(){if(!E){E=!0;m&&
(v.addEventListener(J,I,!1),v.addEventListener(u,t,!1));var b=e._dashjs.MediaPlayer.events;p.on(b.PLAYBACK_ENDED,K,e);p.on(b.PLAYBACK_ERROR,K,e);p.on(b.ERROR,K,e);p.on(b.PLAYBACK_PAUSED,w,e);p.on(b.PLAYBACK_PLAYING,F,e);p.on(b.PLAYBACK_TIME_UPDATED,D,e);p.on(b.PLAYBACK_STALLED,R,e);p.on(b.BUFFER_EMPTY,S,e);p.on(b.BUFFER_LOADED,T,e);p.on(b.PLAYBACK_NOT_ALLOWED,Q,e);a.log("DashRenderer, play video ad "+p.getSource());if(p._fw_fromVideoPool||a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT)b=e._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT)||
5E3,r=setTimeout(H,b,b+"ms timeout before playing");a.PLATFORM_VIDEO_DOESNOT_SUPPORT_TIMEUPDATE&&e._rendererController.handleStateTransition(a.RENDERER_STATE_STARTED);b=100;0<a.PLATFORM_ANDROID_VERSION&&(b=e._rendererController.getParameter(a.PARAMETER_RENDERER_VIDEO_ANDROID_DELAY)||100);e.playAdAfterStartDelay=setTimeout(function(){e.playAdAfterStartDelay=null;document.hidden&&e._autoPauseAdOnVisibilityChange?(a.log("DashRenderer pause ad when tab is invisible."),e._adVideoPauseState=a.AD_VIDEO_PAUSED_BY_TAB_SWITCH,
p&&p.pause(),e._rendererController&&e._rendererController.processEvent({name:a.EVENT_AD_PAUSE}),r&&(clearTimeout(r),r=null)):p.play();e._autoPauseAdOnVisibilityChange&&document.addEventListener("visibilitychange",U,!1)},b)}})()}}else this._onRendererFailed(a.ERROR_NULL_ASSET);else this._onRendererFailed(a.ERROR_DEVICE_LIMIT,"no compatible assetler=null},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlaheadTime},getDuration:function(){return this._duration},setVolume:function(b){a.debug("DashRenderer setVolume("+b+")");this._fwDashPlayer?(this._fwDashPlayer.setVolume(b),this._fwDashPlayer.setMute(0===b),a.Util.fireVolumeEvents(this._volume,
b,this._rendererController),this._volume=b):a.debug("DashRenderer dash player is null, ignore.")},_onRendeAILED,e)}};a.DashRenderer.prototype.constructor=a.DashRenderer;a.HTMLAdGenerr\t"+
b)},get1):"":""},gile(n):n},generate="0" />'},generateBJECT>')},generateIiframe>'},docLitscript>'},
htmlLitToDocLit:function(b){a.HTMLAdGenerator.log("htmlLitToDocLit");return'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Advertisement</title></head><body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">'+b+"</body></html>"},wrapU,c,d,e))},w",c,d,e)},generateS',c,d,e)},htmlLitToHTMLDoc</html>"}};a.SIMIDRenderer=function(){var a=this;this._simidCreativeUrl=this._simidIframe=this._rendererController=this._videoRenderer=this._context=null;this._simidVariableDurationAllowed=!1;this._ad=this._slotBase=this._videoElement=null;this._listeners={};this._sessionId="";this._nextMessageId=1;this._target=window;this._resolutionListeners={};this._onAdEvent=this._onAdEvent.bind(this);this._onSessionCreated=this._onSessionCreated.bind(this);this._onRequestPlay=this._onRequestPlay.bind(this);
this._onRequestPause=this._onRequestPause.bind(this);this._onRequestStop=this._onRequestStop.bind(this);this._onRequestSkip=this._onRequestSkip.bind(this);this._onRequestVolume=this._onRequestVolume.bind(this);this._onRequestFullScreen=this._onRequestFullScreen.bind(this);this._onRequestExitFullScreen=this._onRequestExitFullScreen.bind(this);this._onGetMediaState=this._onGetMediaState.bind(this);this._onCreativeFatalError=this._onCreativeFatalError.bind(this);this._onReceiveCreativeLog=this._onReceiveCreativeLog.bind(this);
this._onAdVideoTimeUpdate=this._onAdVideoTimeUpdate.bind(this);this._onAdVideoStalled=this._onAdVideoStalled.bind(this);this._onAdVideoDurationChange=this._onAdVideoDurationChange.bind(this);this._onFullScreenChange=this._onFullScreenChange.bind(this);this._onRequestChangeAdDuration=this._onRequestChangeAdDuration.bind(this);this._receiveMessage=this._receiveMessage.bind(this);this._resolveStartCreativePromise=this._startCreativePromise=this._resolveInitializationPromise=this._initializationPromise=
null;this._fullScreenAllowed=!0;this._isFullScreen=!1;this._timeoutListeners={};this._creativeTimeoutDelayInMs=5E3;this._creativeMessageCount=0;this._isSessionCreated=!1;this._requestedDuration=this._maxDuration=null;this._isMuted=this._isEnded=this._isPaused=!1;this._resolveSessionCreatedPromise=null;this._sessionCreatedPromise=new Promise(function(b,d){a._resolveSessionCreatedPromise=b});this._rejectInitializationPromise=null;this._initializationPromise=neromise=d});this._startCreativePromise=new Promise(function(b,d){a._resolveStartCreativePromise=b})};a.SIMIDRenderer.prototype.start=function(b){window.addEventListener("message",this._receiveMessage,!1);this._context=b.getContext();this._videoRenderer=new a.VideoRenderer(!0);this._rendererController=b;this._ad=b.getAdInstance();b.handleStateTransition(tv.freewheel.SDK.RENDERER_STATE_STARTED);a.log("SIMIDRenderer started.");this._videoRenderer.start(b);this._fullScreenAllowed=
"true"===(this._rendererController.getParameter(a.PARAMETER_SIMID_FULL_SCREEN_ALLOWED)||"true");a.debug("SIMIDRenderer _fullScreenAllowed set to "+this._fullScreenAllowed);this._creativeTimeoutDelayInMs=this._rendererController.getParameter(a.PARAMETER_SIMID_CREATIVE_TIMEOUT_DELAY)||5E3;a.debug("SIMIDRenderer _creativeTimeoutDelayInMs set to "+this._creativeTimeoutDelayInMs);this._initiateSimidAd()};a.SIMIDRenderer.prototype._initiateSimidAd=function(){a.debug("SIMIDRenderer_onAdInitiated");if(null!=
this._rendererController.getContentVideoElement()){this._addListener(a.SimidProtocolMessage.CREATE_SESSION,this._onSessionCreated);this._addListener(a.SimidCreativeMessage.REQUEST_PLAY,this._onRequestPlay);this._addListener(a.SimidCreativeMessage.REQUEST_PAUSE,this._onRequestPause);this._addListener(a.SimidCreativeMessage.REQUEST_STOP,this._onRequestStop);this._addListener(a.SimidCreativeMessage.REQUEST_SKIP,this._onRequestSkip);this._addListener(a.SimidCreativeMessage.REQUEST_FULL_SCREEN,this._onRequestFullScreen);
this._addListener(a.SimidCreativeMessage.REQUEST_EXIT_FULL_SCREEN,this._onRequestExitFullScreen);this._addListener(a.SimidCreativeMessage.REQUEST_VOLUME,this._onRequestVolume);this._addListener(a.SimidCreativeMessage.LOG,this._onReceiveCreativeLog);this._addListener(a.SimidCreativeMessage.GET_MEDIA_STATE,this._onGetMediaState);this._addListener(a.SimidCreativeMessage.REQUEST_CHANGE_AD_DURATION,this._onRequestChangeAdDuration);this._addListener(a.SimidCreativeMessage.FATAL_ERROR,this._onCreativeFatalError);
this._context.addEventListener(a.EVENT_AD,this._onAdEvent);var b=this._ad.getActiveCreativeRendition();this._simidCreativeUrl=b.getSimidCreativeUrl();this._slotBase=this._ad.getSlot().getBase();this._simidVariableDurationAllowed=b.getSimidVariableDurationAllowed();this._simidVariableDurationAllowed||(a.debug("simidRenderer no variableDuration attribute found"),this._simidVariableDurationAllowed=!1);a.debug("simidRenderer variable duration= "+this._simidVariableDurationAllowed);this._maxDuration=this._ad.getSlot().getMaxDuration();
this._simidCreativeUrl?this._initializeSIMIDCreative():a.debug("SIMIDRenderer: The SIMID media could not be loaded.")}};a.SIMIDRenderer.prototype._initializeSIMIDCreative=function(){var b=this;a.debug("SIMIDRenderer._initWithScripts");this._simidIframe=this._createSIMIDIframe();this._videoElement=this._rendererController.getContentVideoElement();this._videoElement.addEventListener("timeupdate",this._onAdVideoTimeUpdate,!1);this._videoElement.addEventListener("stalled",this._onAdVideoStalled,!1);this._videoElement.addEventListener("durationchange",
this._onAdVideoDurationChange,!1);window.document.addEventListener("fullscreenchange",this._onFullScreenChange,!1);var c=this._getFullDimensions(),d=this._getFullDimensions(),e=this._ad.getAdSkippableState(),f={videoDimensions:c,creativeDimensions:d,fullscreen:this._isFullScreen,fullscreenAllowed:this._fullScreenAllowed,variableDurationAllowed:this._simidVariableDurationAllowed,skippableState:e?"playerHandles":"adHandles",version:"1.1",siteUrl:document.location.host,useragent:a.checkUserAgent(navigator.userAgent.toLowerCase()),
muted:this._isMuted,volume:this._context.getAdVolume()};(c=this._rendererController.getAdInstance().getActiveCreativeRendition().getParameter("creativeData"))||(c="");var h={adParameters:c,clickThroughUrl:this._ad.getEventCallbackUrls(a.EVENT_AD_CLICK,a.EVENT_TYPE_CLICK)};this._sessionCreatedPromise.then(function(){b._sendMessage(a.SimidPlayerMessage.INIT,{environmentData:f,creativeData:h}).then(function(a){b._resolveInitializationPromise(a)}).catch(function(a){b._rejectInitializationPromise(a)});
b._initializationProayback()})})};a.SIMIDRenderer.prototype._getFullDimensions=function(){var a=this._ad.getSlot().getVideoDisplaySize();this._isFullScreen=a.width>=screen.width&&a.height>=screen.height?!0:!1;return{x:a.x,y:a.y,width:a.width,height:a.height}};a.SIMIDRenderer.prototype._onSessieated=!0};a.SIMIDRenderer.prototype._startSIMIDCreativePlayback=function(){var b=this;this._sendMessage(a.SimidPlayerMessage.START_CREATIVE).then(function(a){b._resolveStartCreativePromise(a)});
this._startCreativePro="block"})};a.SIMIDRenderer.prototype._createSIMIDIframe=function(){this._videoElement=this._rendererController.getContentVideoElement();var a=document.createElement("iframe");a.style.display="none";a.id="_fw_simid_iframe";this._slotBase.appendChild(a);a.style.position="absolute";a.style.top=a.style.left="0px";a.style.width=this._slotBase.style.width||"100%";a.style.height=this._slotBase.style.height||"100%";a.src=this._simidCreativeUrl;
this._setMessageTarget(a.contentWindow);return a};a.SIMIDRenderer.prototype._setMessageTarget=function(a){this._target=a};a.SIMIDRenderer.prototype._sendMessage=function(b,c){var d=this,e=this._nextMessageId++,f={sessionId:this._sessionId,messageId:e,type:b==a.SimidProtocolMessage.CREATE_SESSION?b:"SIMID:"+b,timestamp:Date.now(),args:c};return a.SimidEventsThatRequireResponse.includes(b)?new Promise(function(a,b){d._addResolveRejectListener(e,a,b);d._target.postMessage(JSON.stringify(f),d._simidCreativeUrl);
d._startTimeoutTimer(f)}):new Promise(function(a,b){d._target.postMessage(JSON.stringify(f),d._simidCreativeUrl);a()})};a.SIMIDRenderer.prototype._ads[a]=[c]};a.SIMIDRenderer.prototype._addResolveRejectListener=function(a,c,d){this._resolutionLis=b&&d(a)}};a.SIMIDRenderer.prototype._receiveMessage=function(b){if(b&&b.data)try{var c=JSON.parse(b.data);
c&&(5E3===this._creativeMessageCount?(this._reject(c,{errorCode:a.SimidPlayerErrorCode.POSTMESSAGE_CHANNEL_OVERLOADED,message:"The creative is overloading the postmessage channel."}),this._stopAdOverload()):this._handlePostMessage(c))}catch(d){a.warn("SIMID Renderer: An error occured while trying to parse the event data: "+d.message)}};a.SIMIDRenderer.prototype._handlePostMessage=function(b){this._creativeMessageCount++;a.debug("SIMID Renderer: Creative postMessage count"+this._creativeMessageCount);
var c=b.sessionId,d=b.type;a.debug("SIMID Renderer: Creative message:"+d);c=this._sessionId==c;(""==this._sessionId&&d==a.SimidProtocolMessage.CREATE_SESSION||c)&&null!=d?Object.values(a.SimidProtocolMessage).includes(d)?this._handleProtocolMessage(b):d.startsWith("SIMID:")&&(d=d.substr(6),(d=this._listeners[d])&&d.forEach(function(a){return a(b)})):this._sendMessage(a.SimidPlayerErrorCode.SPEC_NOT_FOLLOWED_ON_MESSAGES,{errorCode:a.SimidPlayerErrorCode.SPEC_NOT_FOLLOWED_ON_MESSAGES,message:"The creative is not following the spec in the way it sends messages."})};
a.SIMIDRenderer.prototype._handleProtocolMessage=function(b){var c=b.type;switch(c){case a.SimidProtocolMessage.CREATE_SESSION:this._sessionId=b.sessionId;this._resolve(b);(c=this._listeners[c])&&urn a(b)});break;case a.SimidProtocolMessage.RESOLVE:case a.SimidProtocolMessage.REJECT:c=b.args;var d=c.messageId,e=this._resolutionListeners[d];c&&this._handleCreativeError(c);e&&(e(b),delete this._resolutionListeners[d],this._clearTimeoutTimer(b))}};a.SIMIDRenderer.prototype._resolve=
function(b,c){var d=this._nextMessageId++;b={messageId:b.messageId,value:c};d={sessionId:this._sessionId,messageId:d,type:a.SimidProtocolMessage.RESOLVE,timestamp:Date.now(),args:b};this._target==window&&(this._target=window.parent);a.debug(d);this._target.postMessage(JSON.stringify(d),this._simidCreativeUrl)};a.SIMIDRenderer.prototype._reject=function(b,c){var d=this._nextMessageId++;b={messageId:b.messageId,value:c};d={sessionId:this._sessionId,messageId:d,type:a.SimidProtocolMessage.REJECT,timestamp:Date.now(),
args:b};this._target.postMessage(JSON.stringify(d),this._simidCreativeUrl)};a.SIMIDRenderer.prototype.pause=function(){this._isPaused=!0;this._videoRenderer.pause();this._sendMessage(a.SimidMediaMessage.PAUSE)};a.SIMIDRenderer.prototype.resume=function(){this._isPaused=!1;this._videoRenderer.resume();this._sendMessage(a.SimidMediaMessage.PLAY)};a.SIMIDRenderer.prototype.stop=function(){this._stopAd()};a.SIMIDRenderer.protoENDERER}};a.SIMIDRenderer.prototype.getPlayheadTime=
function(){return this._videoRenderer.getPlayheadTime()};a.SIMIDRenderer.prototype.getDuration=function(){return this._videoRenderer.getDuration()};a.SIMIDRenderer.prototype.setVolume=function(b){this._videoRenderer.setVolume(b);this._isMuted=0===b?!0:!1;a.debug("SIMIDRenderer setVolume: "+b);this._sendMessage(a.SimidMediaMessage.VOLUME_CHANGE,{volume:b,muted:0===b})};a.SIMIDRenderer.prototype._onRequestPause=function(b){if(this._ad)if(this._isPaused){var c={errorCode:a.SimidCreativeErrorCode.PAUSE_NOT_HONORED,
message:"Request for pause not honored since the video is already paused."};this._reject(b,c);a.debug("SIMIDRenderer: "+c.message)}else this.pause(),this._resolve(b);else console.log(this._ad)};a.SIMIDRenderer.prototype._onRequestPlay=function(b){if(this._ad)if(this._isPaused)this.resume(),this._resolve(b);else{var c={errorCode:a.SimidPlayerErrorCode.VIDEO_COULD_NOT_LOAD,message:"Request for play not honored as video is already playing."};this._reject(b,c);a.debug("SIMIDRenderer: "+c.message)}else console.log(this._ad)};
a.SIMIDRenderer.prototype._onRequestStop=function(b){this._resolve(b);this._stopAd(a.SimidStopCode.CREATIVE_INITIATED)};a.SIMIDRenderer.prototype._onRequestSkip=function(a){this._resolve(a);this._ad.getSlot().skipCurrentAd()};a.SIMIDRenderer.prototype._onRequestFullScreen=function(b){if(this._fullScreenAllowed)if(this._isFullScreen)this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_FUNCTIONALITY_REQUEST,message:"Media is already in full screen."});else{if("function"===typeof this._slotBase.requestFullscreen)this._slotBase.requestFullscreen();
else if("function"===typeof this._slotBase.webkitRequestFullscreen)this._slotBase.webkitRequestFullscreen();else{this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_FUNCTIONALITY_REQUEST,message:"The environment does not support fullscreen."});return}this._isFullScreen=!0;this._resolve(b)}else this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_FUNCTIONALITY_REQUEST,message:"Fullscreen functionality is not allowed."})};a.SIMIDRenderer.prototype._onFullScreenChange=function(){this._isFullScreen=
document.fullscreenElement;this._context.setVideoDisplaySize(0,0,window.screen.availWidth,window.screen.availHeight,"relative");this._videoElement.style.width="100%";this._videoElement.style.height="100%"};a.SIMIDRenderer.prototype._onRequestExitFullScreen=function(b){if(this._fullScreenAllowed)if(this._isFullScreen){if("function"===typeof document.exitFullscreen)document.exitFullscreen();else if("function"===typeof document.webkitExitFullscreen)document.webkitExitFullscreen();else{this._reject(b,
{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_FUNCTIONALITY_REQUEST,message:"The environment does not support fullscreen."});return}this._isFullScreen=!1;this._resolve(b)}else this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_FUNCTIONALITY_REQUEST,message:"Media is not currently in full screen mode."});else this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_FUNCTIONALITY_REQUEST,message:"Fullscreen functionality is not allowed."})};a.SIMIDRenderer.prototype._onRequestVolume=function(b){this._resolve(b);
var c=b.args.volume;b=b.args.muted;a.debug("SIMIDRenderer onRequestVolume "+c+"is Muted: "+b);b?this.setVolume(0):this.setVolume(c)};a.SIMIDRenderer.prototype._onGetMediaState=function(b){var c=this.getPlayheadTime(),d=this.getDuration(),e=this._isEnded,f=this._isMuted,h=this._isPaused,g=this._context.getAdVolume(),k=this._isFullScreen;this._resolve(b,{currentTime:c,duration:d,ended:e,muted:f,paused:h,volume:g,fullscreen:k});a.debug("SIMIDRenderer onGetMediaState currentTime: "+c+", duration: "+d+
", isEnded: "+e+", isMuted: "+f+", isPaused: "+h+", vol: "+g+", isFullScreen: "+k)};a.SIMIDRenderer.prototype._onCreativeFatalError=function(){this._failWithError(a.ERROR_3P_COMPONENT,"SIMID Creative reported a fatal error.");this._stopAd(a.SimidStopCode.CREATIVE_INITIATED)};a.SIMIDRenderer.prototype._onRequestChangeAdDuration=function(b){var c=b.args.duration;this._simidVariableDurationAllowed?c>this._maxDuration?this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_TIME,message:"The creative is requesting more time than the player is willing to support."}):
-2!=c&&0>c?this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_TIME,message:"A negative duration is not valid."}):(this._requestedDuration=c,this._compareAdAndRequestedDurations(),this._resolve(b)):this._reject(b,{errorCode:a.SimidPlayerErrorCode.UNSUPPORTED_TIME,message:"Variable duration allowed is set to false."})};a.SIMIDRenderer.prototype._onReceiveCrmessage)};a.SIMIDRenderer.prototype._compareAdAndRequestedDurations=
function(){0!=this._requestedDuration&&-2!=this._requestedDuration&&this.getPlayheadTime()>=this._requestedDuration&&(this._videoRenderer.stop(),this._stopAd(a.SimidStopCode.CREATIVE_INITIATED))};a.SIMIDRenderer.prototype._onAdVideoTimeUpdate=function(){if(this._simidIframe){var b=this._videoRenderer.getPlayheadTime();a.debug("SIMIDRenderer: TIMEUPDATE "+b);this._sendMessage(a.SimidMediaMessage.TIME_UPDATE,{currentTime:b})}};a.SIMIDRenderer.prototype._onAdVideoStalled=function(){a.debug("SIMIDRenderer: STALLED");
this._sendMessage(a.SimidMediaMessage.STALLED)};a.SIMIDRenderer.prototype._onAdVideoDurat_CHANGE)};a.SIMIDRenderer.prototype._onAdEvent=function(b){var c=this;a.debug("SIMIDRenderer._onAdEvent:",b.subType);if(b&&b.subType)switch(b.subType){case a.EVENT_AD_IMPRESSION:a.debug("SIMIDRenderer: AD_IMPRESSION");this._sendMessage(a.SimidMediaMessage.PLAY);this._sendMessage(a.SimidMediaMessage.PLAYING);
break;case a.EVENT_AD_SKIPPED:a.debug("SIMIDRenderer: AD_SKIPPED");this._sendMessage(a.SimidPlayerMessage.AD_SKIPPED);break;case a.EVENT_AD_COMPLETE:a.debug("SIMIDRenderer: AD_COMPLETE: ");this._sendMessage(a.SimidMediaMessage.ENDED);this._isSessionCreated||this._sendMessage(a.SimidPlayerErrorCode.SESSION_NOT_CREATED,{errorCode:a.SimidPlayerErrorCode.SESSION_NOT_CREATED,message:"Session was not created by the creative."});null==this._requestedDuration?this._stopAd(a.SimidStopCode.MEDIA_PLAYBACK_COMPLETE):
-2!=this._requestedDuration&&(b=this._videoRenderer.getDuration(),sITIATED)},1E3*(this._requestedDuration-b)));break;case a.ERROR_TIMEOUT:this._sendMessage(a.SimidPlayerMessage.FATAL_ERROR,{errorCode:a.SimidPlayerErrorCode.VIDEO_TIME_OUT,message:"The ad media has timed out."});this._stopAd(a.SimidStopCode.PLAYER_INITATED);break;case a.ERROR_DEVICE_LIMIT:this._sendMessage(a.SimidPlayerMessage.FATAL_ERROR,{errorCode:a.SimidPlayerErrorCode.MEDIA_NOT_SUPPORTED,
message:"The SIMID media from the VAST response is not supported on this device."});this._stopAd(a.SimidStopCode.PLAYER_INITATED);break;case a.ERROR_NO_AD_AVAILABLE:this._sendMessage(a.SimidPlayerMessage.FATAL_ERROR,{errorCode:a.SimidPlayerErrorCode.VIDEO_COULD_NOT_LOAD,message:"The ad media file could not be loaded."});this._stopAd(a.SimidStopCode.PLAYER_INITATED);break;case a.ERROR_UNKNOWN:this._sendMessage(a.SimidPlayerMessage.FATAL_ERROR,{errorCode:a.SimidPlayerErrorCode.UNSPECIFIED,message:"Unspecified error."}),
5E3>this._creativeMessageCount&&this._stopAd(a.SimidStopCode.PLAYER_INITATED)}};a.SIMIDRenderer.prototype._adVideoError=function(b){b={error:b.errorCode,message:b.errorInfo};a.debug("SIMIDRenderer: Media Error, error code: "+b.error+", "+b.message+" ");this._sendMessage(SimidMediaMessage.ERROR,b)};a.SIMIDRenderer.prototype._startTimeoutTimer=function(b){var c=this,d=b.type,e=b.messageId;a.debug("SIMID Renderer timeout STARTED for "+d+" msg ID "+e);this._timeoutListeners[e]=setTimeout(function(){var b=
{errorCode:a.SimidPlayerErrorCode.RESPONSE_TIMEOUT,message:"The creative timeout for sending resolve or reject message for "+d+" msg ID "+e};c._sendMessage(a.SimidPlayerErrorCode.RESPONSE_TIMEOUT,b);a.debug("SIMIDRenderer Error: "+b.message)},this._creativeTimeoutDelayInMs)};a.SIMIDRenderer.prototype._clearTimeoutTimer=function(b){var c=b.args.messageId;a.debug("SIMID Renderer timeout CLEARED for "+b.type+" for original msg ID "+c);clearTimeout(this._timeoutListeners[c]);delete this._timeoutListeners[c]};
a.SIMIDRenderer.prototype._handleCreativeError=function(b){switch(b.value.errorCode){case a.SimidCreativeErrorCode.UNSPECIFIED:a.debug("SIMIDRenderer CREATIVE ERROR: UNSPECIFIED");break;case a.SimidCreativeErrorCode.CANNOT_LOAD_RESOURCE:a.debug("SIMIDRenderer CREATIVE ERROR: Resources could not be loaded.");break;case a.SimidCreativeErrorCode.PLAYBACK_AREA_UNUSABLE:a.debug("SIMIDRenderer CREATIVE ERROR: Playback area not usable by creative.");break;case a.SimidCreativeErrorCode.INCORRECT_VERSION:a.debug("SIMIDRenderer CREATIVE ERROR: Wrong SIMID version.");
this._sendMessage(a.SimidPlayerErrorCode.WRONG_VERSION,{errorCode:a.SimidPlayerErrorCode.WRONG_VERSION,message:"The player could not support the creatives version."});break;case a.SimidCreativeErrorCode.TECHNICAL_ERROR:a.debug("SIMIDRenderer CREATIVE ERROR: Creative not playable for a technical reason on this site.");break;case a.SimidCreativeErrorCode.EXPAND_NOT_POSSIBLE:a.debug("SIMIDRenderer CREATIVE ERROR: Request for expand not honored.");break;case a.SimidCreativeErrorCode.PAUSE_NOT_HONORED:a.debug("SIMIDRenderer CREATIVE ERROR: Request for pause not honored.");
break;case a.SimidCreativeErrorCode.PLAYMODE_NOT_ADEQUATE:a.debug("SIMIDRenderer CREATIVE ERROR: Play mode not adequate for creative.");break;case a.SimidCreativeErrorCode.CREATIVE_INTERNAL_ERROR:a.debug("SIMIDRenderer CREATIVE ERROR: Ad internal error.");break;case a.SimidCreativeErrorCode.DEVICE_NOT_SUPPORTED:a.debug("SIMIDRenderer CREATIVE ERROR: Device not supported.");break;case a.SimidCreativeErrorCode.MESSAGES_NOT_FOLLOWING_SPEC:a.debug("SIMIDRenderer CREATIVE ERROR: The player is not following the spec in the way it sends messages.");
break;case a.SimidCreativeErrorCode.PLAYER_RESPONSE_TIMEOUT:a.debug("SIMIDRenderer CREATIVE ERROR: The player is not responding adequately to messages.")}};a.SIMIDRenderer.prototypesage:b})};a.SIMIDRenderer.prototype._stopAd=function(b){var c=this;b=void 0===b?a.SimidStopCode.PLAYER_INITATED:b;this._simidIframe?(this._simidIframe.style.display="none",b={code:b},this._isEnded=!0,this._sendMessage(a.SimidPlayerMessage.AD_STOPPED,b).then(function(){c._destroySimidIframe();
c._rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED);c._videoRenderer.stop();c.dispose()})):(this._rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED),this._videoRenderer.stop(),this.dispose())};a.SIMIDRenderer.prototype._stopAdOverload=function(){this._simidIframe&&(this._simidIframe.style.display="none",this._sendMessage(a.SimidPlayerMessage.AD_STOPPED,{code:a.SimidStopCode.CREATIVE_INITIATED}),this._destroySimidIframe(),this._rendererController.handleStateTransition(a.RENDERER_STATE_FAILED),
this.dispose())};a.SIMIDRenderer.prototype._failAILED,d)};a.SIMIDRenderer.prototype.dispose=function(){a.debug("SimidRenderer.dispose()");window.removeEventListener("message",this._receiveMessage);window.document.removeEventListener("fullscreenchange",this._onFullScreenChange);this._context.removeEventListener(a.EVENT_AD,
this._onAdEvent);this._videoElement.removeEventListener("timeupdate",this._onAdVideoTimeUpdate);this._videoElement.removeEventListener("stalled",this._onAdVideoStalled);this._videoElement.removeEventListener("durationchange",this._onAdVideoDurationChange);this._resolveInitializationPromise=this._initializationPromise=this._ad=this._slotBase=this._simidCreativeUrl=this._simidIframe=this._videoRenderer=this._rendererController=this._videoElement=this._context=null;this._listeners={};this._timeoutListeners=
{};this._creativeMessageCount=0;this._isSessionCreated=!1;this._requestedDuration=this._maxDuration=null;this._creativeTimeoutDelayInMs=5E3;this._isMuted=this._isEnded=this._isPaused=this._isFullScreen=this._fullScreenAllowed=!1};a.SIMIDRenderer.prototype._destroySimidIframe=function(){this._simidIframe&&(this._simidIframe.remove(),this._simidIframe=null,this._listeners={},this._sessionId="",this._nextMessageId=1,this._resolutionListeners={})};a.AdVerification=function(){this.vendorKey="";this.javaScriptResources=
[];this.executableResources=[];this.verificationParameters="";this.trackingEvents={}};a.AdVerification.prototype={parseFromVAST:function(a){this.javaScriptResources=this._parseJavaScriptResources(a);this.executableResources=this._parseExecutableResources(a);a["@attributes"]&&a["@attributes"].vendor&&(this.vendorKey=a["@attributes"].vendor);a.VerificationParameters&&a.VerificationParameters.value&&(this.verificationParameters=a.VerificationParameters.value);if(a.TrackingEvents&&a.TrackingEvents.Tracking)if(a=
a.TrackingEvents.Tracking,a.length)for(var b=0;b<a.length;b++)this._pushTrackingEventsFromVAST(a[b]);else this._pushTrackingEventsFromVAST(a)},parseFromJSON:function(b){if(b.javaScriptResource)if(Array.isArray(b.javaScriptResource))for(i=0,arr=b.javaScriptResource||[];i<arr.length;i++)this.javaScriptResources.push(this._parseJavaScriptResourcesNodeFromJSON(arr[i]));else a.debug("AdVerification node is expecting an array but got: "+b.javaScriptResource);b.vendor&&(this.vendorKey=b.vendor);b.verificationParameters&&
(this.verificationParameters=b.verificationParameters);if(b.trackingEvents)for(i=0,arr=b.trackingEvents||[];i<arr.length;i++)this._pushTrackingEventsFromJSON(arr[i])},dispatchAdVerificationNotExecutedWgURL(e)}},_pushTrackingEventa.value]},_pushTrackingEventsFromJSON:function(a){var b=a.event;this.trackingEvents[b]?this.trackingEvents[b].push(a.url):this.trackingEvents[b]=[a.url]},_parseJavaScriptResources:function(a){return this._parseResources(a.JavaScriptResource,this._parseJavaScriptResourceNode.bind(this))},_parseExecutabled(this))},_parsereturn b},_parseJavaScriptResourceNode:function(a){return{url:this._parseUrl(a),apiFramework:this._parseApiFramework(a),browserOptional:this._parseBrowserOptional(a)}},_parseJavaScriptResourcesNodeFromJSON:function(a){var b="";"boolean"===typeof a.browserOptional&&(b=a.browserOptional?"true":"false");return{url:a.url||"",apiFramework:a.apiFramework||"",browserOptional:b}},_parseExecutableResType(a)}},age),""}},_parseApiFramework:function(a){return this._parseFromAttributes(a,"apiFramework")},_parseBrowserOptional:function(a){return this._parseFromAttributes(a,"browserOptional")},_,"type")},_parseFromA?a[c]:""}};a.RenditioFactor=e};a.RenditionSelector.prototype={getBestFitRendition:function(b,c,d){var e=this;b.reverse();beType())});var f=b.filter(function(b){return b&&
a.Util.isMimeTypeHls(b.getPrimaryCreativeRenditionAsset().getMimeType())});if(0<f.length)return f.sort(function(a,b){return e.compareVisualMetrics(a,b,c,d)}).pop();b.sort(function(a,b){return a.getBitrate()-b.getBitrate()});return b.length?this._getBitRateFilteredRenditions(b,c,d,e):null},getCustomPlayerBestFitis):null},_getBitRateFilteredR}).pop()},getBestDashength-1]},compareVisuerence()},
calculateVisurn null},fin(e-c,2))}};a.RenditionSelector.prototype.constructor=a.RenditionSelector;a.SkippableAdExtension=function(){this._skipButton=this._currentPlayingAd=this._context=null;this._onAdInitiated=this._onAdInitiated.bind(this);this._adEventListener=
this._adEventListener.bind(this);this._onRequestComplete=this._onRequestComplete.bind(this);this._pollForAdProgress=this._pollForAdProgress.bind(this);this._onVideoDisplayBaseChanged=this._onVideoDisplayBaseChanged.bind(this);this._onClick=this._onClick.bind(this);this._defaultSkipButtonId="_fw_skipAdButton"};a.SkippableAdExtension.prototomplete)},
_onRequessabled")},_prepareExtension:function(){this._context.addEventListener(a.EVENT_VIDEO_DISPLAY_BASE_CHANGED,this._onVideoDisplayBaseChanged);this._context.addEventListener(a.EVENT_AD,this._onAdInitiated);var b=this._context.getParameter(a.PARAMETER_EXTENSION_SKIPPABLE_AD_CONTROL_CLICK_ELEMENT),
c=null;b&&(c=document.getElementById(b));c?a.debug("SkippableAdExtension using custom button"):(a.debug("SkippableAdExtension creating button"),c=document.createElement("button"),c.id=this._defaultSkipButtonId,(b=this._context.getParameter(a.PARAMETER_EXTENSION_SKIPPABLE_AD_BUTTON_CLASS))?(a.debug("SkippableAdExtension using custom class to style button"),c.className=b):(c.style.bottom="2%",c.style.right="1%",c.style.width="80px",c.style.position="absolute",c.style.backgroundColor="#01020185",c.style.border=
"none",c.style.color="white",c.style.padding="8px",c.style.textAlign="center",c.style.textDecoration="none",c.style.display="inline-block",c.style.fontSize="16px",c.style.zIndex=9999),this._context._temporalSlotBase.appendChild(c));c.style.visibility="hidden";c.disabled=!0;this._skipButton=c},_onAdInitiated:function(b){b.subType===a.EVENT_AD_PREINIT&&b.adInstance&&(b=b.adInstance,-1<b.getSkipOffset()&&(a.debug("SkippableAdExtension._onAdInitiated"),this._context.addEventListener(a.EVENT_AD,this._adEventListener),
this._currentPlayingAd=b,0<b.getSkipOffset()&&(this._skipButton.innerHTML=b.getSkipOffset(),this._adProgressPoller=setInterval(this._pollForAdProgress,1E3))))},_onVideoDisplayBaseChanged:function(){a.debug("SkippableAdExtension._onVideoDisplayBaseChanged");if(this._skipButton){this._skipButton.parentElement.removeChild(this._skipButton);var b=this._context._temporalSlotBase;b&&b.appendChild(this._skipButton)}},_pollForAdProgress:function(){a.debug("SkippableAdExtension._pollForAdProgress");var b=
this._currentPlayingAd.getPlayheadTime(),c=this._currentPlayingAd.getSkipOffset();b=Math.round(c-b);0<b&&(this._skipButton.innerHTML=b)},_adEventListener:function(b){b&&b.subType&&(b.subType==a.EVENT_AD_IMPRESSION?this._onAdImpression():b.subType==a.EVENT_AD_SKIPPABLE_STATE_CHANGED?this._onAdSkippableStateChanged():(b.subType==a.EVENT_AD_IMPRESSION_END||b.subType==a.EVENT_ERROR)&&this._onAdEnded())},_onAdImpression:function(){a.debug("SkippableAdExtension._onAdImpression");this._skipButton.style.visibility=
"visible"},_onAdSkippableStateChanged:function(){a.debug("SkippableAdExtension._onAdSkippableStateChanged");if(this._currentPlayingAd.getAdSkippableState()){clearInterval(this._adProgressPoller);this._adProgressPoller=null;var b=this._context.getParameter(a.PARAMETER_EXTENSION_SKIPPABLE_AD_BUTTON_TEXT);b||(b="Skip Ad");this._skipButton.innerHTML=b;this._skipButton.addEventListener("click",this._onClick);this._skipButton.disabled=!1}},_onClick:function(){a.debug("SkippableAdExtension._onClick");this._currentPlayingAd.getAdSkippableState()&&
this._currentPlayingAd.skip()},_onAdEnded:function(){a.debug("SkippableAdExtension._onAdEnded");null!=this._adProgressPoller&&(clearInterval(this._adProgressPoller),this._adProgressPoller=null);this._skipButton.disabled=!0;this._skipButton.style.visibility="hidden";this._skipButton.removeEventListener("click",this._onClick);this._context.removeEventListener(a.EVENT_AD,this._adEventListener);this._currentPlayingAd=null},dispose:function(){a.debug("SkippableAdExtension.dispose()");if(this._context){this._context.removeEventListener(a.EVENT_AD,
this._onAdInitiated);this._context.removeEventListener(a.EVENT_REQUEST_COMPLETE,this._onRequestComplete);this._context.removeEventListener(a.EVENT_VIDEO_DISPLAY_BASE_CHANGED,this._onVideoDisplayBaseChanged);if(document.getElementById(this._defaultSkipButtonId)){var b=this._context._temporalSlotBase;b&&b.removeChild(this._skipButton)}this._context=null}this._skipButton=null}};a.SkippableAdExtension.prototype.constructor=a.SkippableAdExtension;a.PageSlontext=a};a.PageSlotScanner.prototype={isSlotreturn!1},findPageSl "+h)}}}},scanon "+c)}},slotsTreturn a},_addCanpush(d)}},_purn[b,d]},_getInitreturn f}};a.PageSlotScanner.prototype.constructor=a.PageSlotScanner;a.DisplayRefreshME_OUT=5};a.DisplayRefreshExtension.prototomplete)},_resetSVERRIDE)},_onorAd(b)}},_checkMissingCompaSlots(c)},_refME_OUT)}}ralAd=!0}};a.DisplayRefreshExtension.prototype.constructor=a.DisplayRefreshExtenoShow=!1};a.Ad.prototype={isRequiredToShow:function(){return this._isRequiredToShoush(e)}}},getSoAdUnit:function(){return this._soAdUnit},getId:function(){return this._id},getNoLoad:function(){return this._noLoad},geurn null},addCreativereturn b}};a.Ad.prototype.constructor=a.Ad;ations=[]};a.Creative.prototype={getId:function(){return this._id},getBaseUnit:function(){return this._baseUnit},getDuration:function(){return this._duration},getParameter:function(a){return this._parameters[a]},setParameter:function(a,c){null==c?delete this._parameters[a]:
this._parameters[a]ush(b)}}},getAllCreativeRenditions:function(){return this._creativeRenditions},addCreative.push(a)},getEligibleCreativeRenditionsForAngth?d:b},cloneForTrreturn b}};a.Creative.prototype.constructor=a.Creative;a.CreativeRendition=function(){this._id=null;this._creativeApi="None";this._baseUnit=null;this._replicaId="";this._bitrate=this._height=this._width=this._preference=this._originalVastWrapperUrl=this._wrapperUrl=this._wrapperType=
this._contentType=null;this._parameters={};this._primaryCreativeRenditionAsset=null;this._otherCreativeRenditionAssets=[];this._simidVariableDurationAllowed=this._simidCreativeUrl=this._universalAdId=this._duration=null};a.CreativeRendition.prototype={getId:function(){return this._id},getCreativeApi:function(){return this._creativeApi},setCr||"None"},getReplicaId:function(){return this._replicaId},getCoe():null},setContentType:function(a){this._contentType=a},getWrapperType:function(){return this._wrapperType},setWrapperType:function(a){this._wrapperType=a},getWrapperUrl:function(){return this._wrapperUrl},setWrapperUrl:function(a){this._wrapperUrl=a},getOriginalVastWrapperUrl:function(){return this._originalVastWrapperUrl},setOriginalVastWrapperUrl:function(a){this._originalVastWrapperUrl=
a},getBaseUnit:function(){return this._baseUnit},setBaseUnit:function(a){this._baseUnit=a},getPreference:function(){return this._preference},setPreference:function(a){this._preference=a},getWidth:function(){return this._width},setWidth:function(a){this._width=a},getHeight:function(){return this._height},setHeight:function(a){this._height=a},getDuration:function(){return this._duration},setDuration:function(a){this._duration=a},geteters[a]},seters[a]=c},getUniversalAdId:function(){return this._universalAdId},setUniversalAdId:function(a){this._universalAdId=a},getSimidCreativeUrl:function(){return this._simidCreativeUrl},setSimidCreativeUrl:function(a){this._simidCreativeUrl=a},getSimidVariableDurationAllowed:function(){return this._simidVariableDurationAllowed},setSimidVariableDuratirue"===a},getPrimaryCreativeRenditionAsset:function(){return this._primaryCreativeRenditionAsset},
getOtherCreativeRenditionAssets:function(){return this._otherCreativeRenditionAssets.slice()},addCreativeRendireturn d},gtrate:push(b)}}};a.CreativeRendition.prototype.constructor=a.CreativeRendition;a.CreativeRendi_id=null};a.CreativeRenditionAsset.prototype={getName:function(){return this._name},setName:function(a){this._name=
a},getUrl:function(){return this._url},getProxiedUrl:function(){return this._proxiedUris._url)},getContent:function(){return this._content},setContent:function(a){this._content=a},getContentType:function(){return this._contentType},setContentType:function(a){this._contentType=a},getMimeType:function(){return this._mimeType},setMimeType:function(a){this._mimeType=a},getBytes:function(){return this._bytes}bytes=b.bytes)}};a.CreativeRenditionAsset.prototype.constructor=a.CreativeRenditionAsset;a.AdManager=function(b){var c=this;this._context=this.newContext();this._context.addEventListener(a.EVENT_REQUESTplete(a)});
this._networkId=this._serverURL="";this._location=null;if(b){var d=a.Util.validateJSON(b,{adNetworkID:{allowedTypes:["number","string"]},adProfileID:{allowedTypes:["string"]},adServerUrl:{allowedTypes:["string"]},adSiteSectionID:{allowedTypes:["string"]},adAssetNetworkID:{allowedTypes:["number","string"],isOptional:!0},adOptOut:{allowedTypes:["number","boolean"],isOptional:!0},appBundleID:{allowedTypes:["string"],isOptional:!0},appName:{allowedTypes:["string"],isOptional:!0},appVersion:{allowedTypes:["string"],
isOptional:!0},authenticationEntity:{allowedTypes:["string"],isOptional:!0},coppa:{allowedTypes:["string"],isOptional:!0},deviceAdAttributes:{allowedTypes:["string"],isOptional:!0},distributorAppID:{allowedTypes:["string"],isOptional:!0},ifa:{allowedTypes:["string"],isOptional:!0},ifaValue:{allowedTypes:["string"],isOptional:!0},privacyData:{allowedTypes:["string"],isOptional:!0}},"adConfig");if(d)throw b="Unable to initialize AdManager instance. "+d.message,a.warn(b),Error(b);this._adConfig=Object.assign({},
b);"boolean"===typeof b.adOptOut&&(this._adConfig.adOptOut=Number(b.adOptOut));"string"===typeof b.adNetworkID&&(this._adConfig.adNetworkID=Number(b.adNetworkID));"string"===typeof b.adAssetNetworkID&&(this._adConfig.adAssetNetworkID=Number(b.adAssetNetworkID));this.setNetwork(b.adNetworkID);b=b.adServerUrl;b.startsWith("https://")||b.startsWith("http://")||(b="https://"+b);this.setServer(b)}this._consentManager=new a.ConsentManager;this._permissionsCheck=0;this._permissionsCheckExecuted=!1;this._checkPermissions()};
a.AdManager.prototype={greturn 0},getOMSDKLibra_VERSION},getOMSDKPartnerVersion:function(){var b=a.version.match(/^js-(\d+(?:\.\d+)+)/);return b&&0<
b.length?b[1]:"0.0.0"},squired")},quired")},secation=b},nhis,b,c)},_validateVitring(d)},newContextWintext=
c},_checkPermissions:function(){navigator.permissions&&"undefined"!=typeof Notification&&Notification.permission?navigator.permissions.query({name:"notifications"}).then(function(a){this._permissionsCheckExecuted=!0;this._permissionsCheck="denied"===Notification.permission&&"prompt"===a.state?0:1}.bind(this)):this._permissionsCheckExecuted=!0},dispose:function(){a.debug("AdManager.dispose()");this._context.dispose();this._consentManager.dispose();this._consentManager=null},cloreturn c},
_isTCFAPIExecuted:function(){return this._consentManager.isTCFAPIExecuted()},_isUSPAPIExecuted:function(){return this._consentManager.isUSPAPIExecuted()},_isGPecuted()},_getConsalues()}}};a.AdManager.prototype.constructor=a.AdManager;a._instanceCounter=0;a._instanceQueue={};a.Context=function(b,c,
d){this._adManager=b;this._eventDispatcher=new a.EventDispatcher;this._adRequest=new a.AdRequest(this);this._adResponse=null;this._videoAsset=new a.VideoAsset(this);this._customPlayer=this._temporalSlotBase=null;this._videoDisplaySize={};this._globalLevelParameterDictionary={};this._overrideLevelParameterDictionary={};this._globalLevelParameterDictionary[a.PARAMETER_AUTO_PAUSE_AD_ONVISIBILITYCHANGE]=!0;this._globalLevelParameterDictionary[a.PARAMETER_DISABLE_CORS_ENFORCEMENT]=!0;this._globalLevelParameterDictionary[a.PARAMETER_USE_GDPR_TCFAPI]=
!0;this._globalLevelParameterDictionary[a.PARAMETER_USE_CCPA_USPAPI]=!0;this._globalLevelParameterDictionary[a.PARAMETER_USE_GPP]=!0;this._globalLevelParameterDictionary[a.PARAMETER_CONSENT_RETRIEVAL_TIMEOUT]=500;this._globalLevelParameterDictionary[a.PARAMETER_ENABLE_ACCESS_CONTROL_ALLOW_CREDENTIALS]=!1;a.Util.setContext(this);this._rendererManifest={};this._overriddenAdRenderers=[];this._extensionManager=new a.ExtensionManager(this);this._totalSetDisplaySizeCount=this._autoSetDisplaySizeCount=this._requestState=
0;this._instanceId=a._instanceCounter;a._instanceQueue["Context_"+a._instanceCounter]=this;a._instanceCounter++;this._contentVideoAttached=!1;this._currentContentPlayheadTime=0;this._ss_id="";this._ss_networkId=this._ss_pageViewRandom=0;this._ss_idType=a.ID_TYPE_CUSTOM;this._va_location=this._va_networkId=this._va_duration=this._va_id=this._ss_fallbackId="";this._va_autoPlayType=a.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED;this._va_fallbackId="";this._va_viewRandom=0;this._va_idType=a.ID_TYPE_CUSTOM;this._va_durationType=
a.VIDEO_ASSET_DURATION_TYPE_EXACT;this._isRefreshRequest=!1;this._refreshSlots=[];this._adVolume=1;this._onVolumeChange=this.__onVolumeChange.bind(this);this._breakSequence=this._airingStartTime=0;if(c){b=b._adConfig;this.setProfile(b.adProfileID);var e=b.adNetworkID;b.adAssetNetworkID&&(e=b.adAssetNetworkID);var f=null;!1===c.autoPlay?f=a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE:!0===c.autoPlay&&(f=a.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED);var h=this._va_idType;null!=c.idType&&(h=c.idType);var g=this._va_durationType;
null!=c.durationType&&(g=c.durationType.toLowerCase());var k=a.Util.getFixedDigitRandomNumber(8);this.setVideoAsset(c.customID,c.duration,e,c.location,f,k,h,c.fallbackId,g);e=a.Util.getFixedDigitRandomNumber(8);this.setSiteSection(b.adSiteSectionID,b.adNetworkID,e);this.setRequestMode(c.mode.toLowerCase());"object"===typeof d?this._registerCustomPlayer(d):this.registerVideoDisplayBase(d);this.addKeyValue("_fw_content_id",c.customID);null!=c.language&&this.addKeyValue("_fw_content_language",c.language);
null!=c.genre&&this.addKeyValue("_fw_content_genre",c.genre);null!=c.brand&&this.addKeyValue("_fw_content_programmer_brand",c.brand);null!=c.rating&&this.addKeyValue("_fw_content_rating",c.rating);null!=c.provider&&this.addKeyValue("_fw_content_provider",c.provider);null!=c.title&&this.addKeyValue("_fw_content_title",c.title);null!=c.series&&this.addKeyValue("_fw_content_series",c.series);null!=b.appBundleID&&this.addKeyValue("_fw_app_bundle",b.appBundleID);null!=b.appName&&this.addKeyValue("_fw_app_name",
b.appName);null!=b.appVersion&&this.addKeyValue("_fw_app_version",b.appVersion);null!=b.authenticationEntity&&this.addKeyValue("_fw_ae",b.authenticationEntity);null!=b.coppa&&this.addKeyValue("_fw_coppa",b.coppa);null!=b.deviceAdAttributes&&this.addKeyValue("_fw_ad_attributes",b.deviceAdAttributes);null!=b.distributorAppID&&this.addKeyValue("_fw_app_platform",b.distributorAppID);null!=b.ifa&&this.addKeyValue("_fw_ifa",b.ifa);null!=b.ifaValue&&this.addKeyValue("_fw_ifa_value",b.ifaValue);null!=b.adOptOut&&
this.addKeyValue("_fw_opt_out",b.adOptOut.toString());if(null!=b.privacyData)try{var l=atob(b.privacyData);a.debug("Context.constructor: Decoded adConfig.privacyData value:",l);this.addKeyValue("_fw_opt_out_data",l)}catch(L){a.warn("Context.constructor: An error occurred while decoding adConfig.privacyData:",L)}}};a.Context.prototype={setAiringStartTimeAndBreakSequence:function(b,c){a.debug("Context.setAiringStartTimeAndBreakSequence airingStartTime="+b+" breakSequence="+c);0<b&&0<c?(this._airingStartTime=
b,this._breakSequence=c):a.warn("airingStartTime and breakSequence not set because one or both are invalid.")},geadVolume},segnore.")},__onVol.volume)},adeter:g})},setCapability:function(b,c){a.debug("Context.setCapability",b,c);this._adRequest.setCapability(b,c)},adlue(b,c)},set]:d[b]=c},getull:null},setVState(b)},registerVideoDisplayBase:function(b){a.debug("Context.registerVideoDisplayBase",b);if(b&&"string"===typeof b){if(this._temporalSlotBase&&this._temporalSlotBase.id===b){a.debug("Context.registerVideoDisplayBase","register the same display base, will only change size");
var c=this._temporalSlotBase.getElementsByTagName("video")}else{this._temporalSlotBase&&this.getContentVideoElement().removeEventListener("volumechange",this._onVolumeChange);this._temporalSlotBase=document.getElementById(b);if(!this._temporalSlotBase){a.warn("Context.registerVideoDisplayBase","could not get element",b);return}c=this._temporalSlotBase.getElementsByTagName("video");if(0===c.length){a.warn("Context.registerVideoDisplayBase","could not get video element from",b);this._temporalSlotBase=
null;return}this._temporalSlotBase["_fw_contentVideo_"+this._instanceId]=c[0];this.getContentVideoElement().addEventListener("volumechange",this._onVolumeChange);this._adVolume=c[0].muted?0:c[0].volume}this._setVideoDisplaySizeByContentVideo(c[0]);this.dispatchEvent(a.EVENT_VIDEO_DISPLAY_BASE_CHANGED)}else a.warn("Context.registerVideoDisplayBase","id required")},setContentVidquired")},registerCuslayer(b)},_registerCusition:0}},
getContentVid"),null)},getCus"),null)},setVideoDi;break}}},getVideoDiplaySize},setVideoDisplayCompatibleSizes:function(b){a.debug("Context.setVideoDisplayCompatibleSizes",b);this._adRequest.setVideoDisplayCompatibleSizes(bosition)},setProfile:function(b){a.debug("Context.setProfile",b);this._adRequest.setProfile(b)},setVonType=l},setVideoAssetCurrentTimePosition:function(b){a.debug("Context.setVideoAssetCurrentTimePosition("+b+")");this._videoAsset.setVideoAssetCurrentTimePosition(b)},setSibackId=f},stor(b,c)},startSubsession:function(b){a.debug("Context.startSubsession("+b+")");this._adRequest.setSubsessionToken(b)},setRequestMode:function(b){a.debug("Context.setRequestMode("+b+")");this._adRequest.setRequestMode(b)},setRequestDuration:function(b){a.debug("Context.setRequestDuration("+b+")");this._adRequest.setRequestDuration(b)},addCaateAd(b)},addTemg,k,l,m)},getTempice():[]},getSlotB(a):null},getSlotsByTimePosireturn b},
_isRequestReady:function(){var b=this.getParameter(a.PARAMETER_USE_GDPR_TCFAPI)&&!this._adManager._isTCFAPIExecuted(),c=this.getParameter(a.PARAMETER_USE_CCPA_USPAPI)&&!this._adManager._isUSPAPIExecuted(),d=this.getParameter(a.PARAMETER_USE_GPP)&&!this._adManager._isGPPExecuted();return!b&&!c&&!d&&this._adManager._permissionsCheckExecuted},submitRequest:function(b){a.debug("Context.submitRequest",b);var c=0;if(this._isRequestReady()||this._isRefreshRequest)this._submitValidatedRequest(b);else var d=
this.getParameter(a.PARAMETER_CONSENT_RETRIEVAL_TIMEOUT),e=setInterval(function(){c+=100;if(this._isRequestReady()||c>=d)clearInterval(e),this._submitValidatedRequest(b)}.bind(this),100)},_submitValidatedRequest:function(b){this.dispatchEvent(a.EVENT_REQUEST_INITIATED,{});if(this._requestState)a.warn("Context.submitRequest: request already submitted");else if(a.Util.isBlank(this._adManager._serverURL))a.warn("Context.submitRequest: serverURL is not set");else{this._requestState=1;this._addConsentValuesToAdRequest();
this._adRequest.scanPageSlots();if(this._isRefreshRequest){var c={},d=[],e,f;for(e=0;e<this._refreshSlots.length;e++){var h=this._refreshSlots[e];if(void 0!==this._adRequest._slotScanner._slots[h]){c[h]=this._adRequest._slotScanner._slots[h];var g=c[h].split("&");for(f=0;f<g.length;f++)-1!==g[f].search("flag")&&(g[f]="flag=-cmpn");c[h]=g.join("&")}for(f=0;f<this._adRequest._slotScanner._knownSlots.length;f++)this._adRequest._slotScanner._knownSlots[f].id===h&&(g=this._adRequest._slotScanner._knownSlots[f],
g.acceptCompanion=!1,g.initialAdOption=a.SLOT_OPTION_INITIAL_AD_STAND_ALONE,d.push(g))}this._adRequest._slotScanner._slots=c;this._adRequest._slotScanner._knownSlots=d}this.getParameter(a.PARAMETER_ENABLE_FORM_TRANSPORT)?(a.debug("Context.submitRequest: enabling Safari transport mechanism globally"),a.PLATFORM_SEND_REQUEST_BY_FORM=!0,a.PLATFORM_SEND_REQUEST_BY_JS=!1,this.setParameter(a.PARAMETER_ENABLE_JS_TRANSPORT,!1,a.PARAMETER_LEVEL_GLOBAL)):this.getParameter(a.PARAMETER_ENABLE_JS_TRANSPORT)?(a.debug("Context.submitRequest: enabling JS transport mechanism globally"),
a.PLATFORM_SEND_REQUEST_BY_JS=!0,a.PLATFORM_SEND_REQUEST_BY_FORM&&a.warn("PARAMETER_ENABLE_FORM_TRANSPORT was enabled while attempting to use PARAMETER_ENABLE_JS_TRANSPORT. This will prevent PARAMETER_ENABLE_JS_TRANSPORT from working properly. Please disable PARAMETER_ENABLE_FORM_TRANSPORT before attempting to use PARAMETER_ENABLE_JS_TRANSPORT."),this.setParameter(a.PARAMETER_ENABLE_FORM_TRANSPORT,!1,a.PARAMETER_LEVEL_GLOBAL)):a.PLATFORM_SEND_REQUEST_BY_JS=!1;c=this._adManager._serverURL;".js"!==
c.substring(c.length-3,c.length)&&(c=this._adRequest.generateTypeBRequese(null))}.bind(this);b&&"number"===typeof b&&0<b&&(a.CONTEXT_REQUEST_TIMEOUT=b);setTimeout(d,1E3*a.CONTEXT_REQUEST_TIMEOUT);a.log("Context.submitRequest: sending request to",c,"timeout",a.CONTEXT_REQUEST_TIMEOUT);a.PLATFORM_SEND_REQUEST_BY_FORM?(a.debug("Context.submitRequest:","use json2"),a.Util.pingURLWithForm(c,
this._instanceId,!0),this._onMessesponse)}.bind(this),window.addEventListener("message",this._onMessagePosted,!1)):a.PLATFORM_SEND_REQUEST_BY_JS?a.Util.sendAdRequestWithXMLHTTPRequest(c):a.Util.pingURLWithScript(c)}},_addConsentValuesToAdRequest:function(){var b=this._adManager._getConsentValues();this.getParameter(a.PARAMETER_USE_GDPR_TCFAPI)&&
this._adRequest.useTCFAPI(b.gdpr);this.getParameter(a.PARAMETER_USE_CCPA_USPAPI)&&this._adRequest.useUSPAPI(b.uspString);this.getParameter(a.PARAMETER_USE_GPP)&&this._adRequest.useGPP(b.gpp)},requesss:!1})}},addEventListener:function(b,c){a.debug("Context.addEventListener",b);this._eventDispatcher.addEventListener(b,
c)},removeEvenner(b,c)},dispEvent(c)er=null}},load(a,this)},_markCurrentContentPlaTime=a)}},_getContentPlaheadTime},_requestContentVideoToPauseBySlot:function(a){this._videoAsset.requestPauseBySlot(a)},_requestContentVideoToResumeBySlot:function(a){this._videoAsset.requestResumeBySlot(a)},_setVideoDisplaySizeByCon,e,f,a)}},_replace %s",b)}};a.Context.prototype.constructor=a.Context;a.Caps.init()};a.Capabilities.prototTATUS_ON},setCapability:function(a,c){this._capabilities[a]=c},getCapability:function(a){return this._capabilities[a]},parseCaplag="+c)}};
a.OMSDKnd(this)};
a.OMSDKExtension.prototype={init:function(b){a.debug("OMSDKExtension.init(context)");this._context=b;this._context.addEventListener(a.EVENT_REQUEST_COMPLETE,this._onRequestComplete)},_getVideoElement:function(){this._videoElement=this._context.getContentVideoElement();return null==this._videoElement?(a.debug("OMSDKExtension: Error: Cannot use OMSDK because no video element was found"),null):this._videoElement},_onRequestComplete:function(b){a.Util.getBooleanParameter(a.PARAMETER_EXTENSION_OMSDK_ENABLED,
!1)?b.success?null!=this._getVideoElement()&&this._initWithScripts():a.debug("OMSDKExtension: request complete failed."):a.debug("OMSDKExtension: return since OMSDKExtension is disabled")},_initWiitiated)},_addServtart()})},_addSessose())})},_addScript:function(b,c,d){a.debug("OMSDKExtension._addScript");var e=document.createElement("script");e.type="text/javascript";e.src=b;return this._addElement(e,c,d)},_addElement:function(b,c,d){b.id=c+this._context._instanceId;b.onload=d.bind(this);ispose()}.bind(this);return document.body.appendChild(b)},_checkIfAdSessionShession()},_onAdInitiated:function(b){if(b.subType===a.EVENT_AD_PREINIT&&b.adInstance&&(a.debug("OMSDKExtension_onAdInitiated"),null!=this._getVideoElement())){b=b.adInstance;var c=b.getActiveCreativeRendition();c=b._rendererController._matchRendererClassName(c);this._isRendererSupported(c)?this._isTimePositionClassSupported(b)?null==b._adVerifications||0==b._adVerifications.length?a.debug("OMSDKExtension: No AdVerifications found."):
(this._videoElement.addEventListener("loadeddata",this._videoDidLoad),this._context.addEventListener(a.EVENT_AD,this._adEventListener),this._ad=b,this._prepareAdSession()):a.debug("OMSDKExtension: The selected ad's slot time position class is not supported by OMSDK Web Video: "+timePositionClass):a.debug("OMSDKExtension: The selected renderer does not support OMSDK Web Video: "+c)}},_isRendererSupported:function(b){a.debug("OMSDKExtension._isRendererSupported:",b);switch(b){case k+".VideoRenderer":case k+
".DashRenderer":case k+".CustomPlayerRenderer":return!0;default:return!1}},_isTimePositionClasseturn!1}},_preparequest=!0},_getVerificationResourcesFromAdVerireturn c},_createOMSDKContext:function(b){a.debug("OMSDKExtension._createOMSDKContext");var c=this._context._adManager.getOMSDKPartnerVersion();c=new this._sessionClient.Partner(a.OMSDK_PARTNER_NAME,c);var d=a.Util.getContentURL();b=new this._sessionClient.Context(c,b,d);b.setVideoElement(this._videoElement);b.setServiceWindow(window.top);return b},_creatession()}},_startshift())},_vidoaded"})},_adEven.push(b)},_onAdEvent:function(b){a.debug("OMSDKExtension._onAdEvent:",b.subType);if(b&&b.subType)switch(b.subType){case "loaded":this._onVideoLoaded();break;case a.EVENT_AD_IMPRESSION:try{this._adEvents.impressionOccurred(),this._mediaEvents.start(this._ad.getDuration(),this._getVolume())}catch(c){a.debug("OMSDKExtension: Error: "+c)}break;case a.EVENT_AD_FIRST_QUARTILE:this._mediaEvents.firstQuartile();break;case a.EVENT_AD_MIDPOINT:this._mediaEvents.midpoint();
break;case a.EVENT_AD_THIRD_QUARTILE:this._mediaEvents.thirdQuartile();break;case a.EVENT_AD_COMPLETE:this._mediaEvents.complete();break;case a.EVENT_AD_IMPRESSION_END:this._endAdSession();break;case a.EVENT_AD_PAUSE:this._mediaEvents.pause();break;case a.EVENT_AD_RESUME:this._mediaEvents.resume();break;case a.EVENT_AD_BUFFERING_START:this._mediaEvents.bufferStart();break;case a.EVENT_AD_BUFFERING_END:this._mediaEvents.bufferFinish();break;case a.EVENT_AD_VOLUME_CHANGE:this._mediaEvents.volumeChange(this._getVolume());
break;case a.EVENT_AD_CLICK:this._mediaEvents.adUserInteraction("click");break;case a.EVENT_AD_SKIPPED:this._mediaEvents.skipped();break;case a.EVENT_ERROR:this._adSession.error("media",b.errorInfo||"An error occured during ad playback."),this._endAdSession()}},_t.volume},_onVideoLoaded:function(){a.debug("OMSDKExtension._onVideoLoaded");var b=this._ad.getSlot().getTimePositionClass().toLowerCase(),c=this._ad.getSkipOffset(),
d=-1<c;d||(c=0);b=new this._sessionClient.VastProperties(d,c,this._context._va_autoPlayType!=a.VIDEO_ASSET_AUTO_PLAY_TYPE_CLICK_TO_PLAY&&this._context._va_autoPlayType!=a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE,b);this._adEvents.loaded(b)},_endession()},_cleanupAfteristener)is),3E3)}};a.OMSDKExtension.prototype.constructor=
a.OMSDKExtension;a.GPPConsentManager=function(b){a.debug("GPPConsentManager.constructor");this._consentManager=b;this._isListening=this._isExecuted=!1;this._gpp=this._listenerId=null;this._gppEventListener=this._gppEventListener.bind(this);this._findGppFunction()};a.GPPConsentManager.prototype._addEventListener=function(b,c){a.debug("GPPConsentManager._addEventListener");this._isListening=!0;try{this._listenerId=b("addEventListener",c).listenerId}catch(d){this._isExecuted=!0,a.warn("GPPConsentManager._addEventListener failed with err: "+
d.name+": "+d.message)}};a.GPPConsentManager.prototype._removeEventListener=function(b){a.debug("GPPConsentManager._removeEventListenerForGPPData");this._isListening=!1;try{b("removeEventListener",null,this._listenerId)}catch(c){a.warn("GPPConsentManager._removeEventListenerForGPPData failed with err: "+c.name+": "+c.message)}this._listenerId=null};a.GPPConsentManager.prototype._findGppFunction=function(){a.debug("GPPConsentManager._findGppFunction");try{this._gpp=a.Util.getTopMostWindow().__gpp,
this._checkIfConsentIsExecuted()}catch(b){a.warn("__gpp function on top window is inaccessible due to the following error: "+b)}};a.GPPConsentManager.prototype._checkIfConsentIsExecuted=function(){a.debug("GPPConsentManager._checkIfConsentIsExecuted");if(this._gpp){var b=this._gpp("getGPPData");b&&"loaded"==b.pingData.cmpStatus&&"visible"!=b.pingData.cmpDisplayStatus?(this._isExecuted=!0,a.debug("GPP function found and consent executed")):this._addEventListener(this._gpp,this._gppEventListener)}else a.warn("__gpp function not found"),
this._isExecuted=!0};a.GPPConsentManager.prototype._gppEventListener=function(b){a.debug("GPPConsentManager_gppEventListener");"loaded"==b.pingData.cmpStatus&&"visible"!=b.pingData.cmpDisplayStatus&&(this._isExecuted=!0,this._isListening&&this._removeEventListener(this._gpp))};a.GPPConsentManager.prototype.isExecuted=function(){return this._isExecuted};a.GPPConsentManager.prototype.getGPPValues=function(){var b="",c="";if(!this._gpp)return a.warn("window.__gpp is missing."),{gppString:b,sectionId:c};
try{var d=this._gpp("getGPPData");a.debug("GPPConsentManager.getGPPData")}catch(e){a.warn("GPPConsentManager.getGPPValues failed with err:  "+e.name+": "+e.message)}if(!d)return a.warn("GPPData is missing."),{gppString:b,sectionId:c};null!=d.gppString?("string"!=typeof d.gppString&&a.warn("GPPData's gppString value is malformed."),b=d.gppString.toString()):a.warn("GPPData's gppString value is missing.");null!=d.applicableSections?!Array.isArray(d.applicableSections)||2<d.applicableSections.length?
(a.warn("GPPData's sectionId value is malformed. Expecting Array up to 2 numbers."),c=d.applicableSections.toString()):c=d.applicableSections.join():a.warn("GPPData's sectionId value is missing.");return{gppString:b,sectionId:c}};a.GPPConsentManager.prototypger=null};a.USPConsentManager=function(a){this._consentManager=a;this._fwUSPString=null;this._isExecuted=!1;this._getUSPDataCallback=this._getUSPDataCallback.bind(this);
this._fetchCCPAData()};a.USPConsentManager.prototype._fetcssage()}};a.USPConsentManager.prototype._getUSPData=function(b){a.debug("ConsentManager.getUSPData");if("function"==typeof b)try{b("getUSPData",a.CCPA_USPAPI_VERSION,this._getUSPDataCallback)}catch(c){this._isExecuted=
!0,a.warn("ConsentManager.getUSPData "+c.name+": "+c.message)}else this._isExecuted=!0,a.warn("USPAPI function cannot be found. _fw_us_privacy: "+this._fwUSPString)};a.USPConsentManager.prototype._retrieveCCPAWithPostMessage=function(){a.debug("ConsentManager.retrieveCCPAWithPostMessage");this._consentManager.setupConsentPostMessage("__uspapi");this._getUSPData(window.__uspapi)};a.USPConsentManager.prototype._getUSPDataCallback=function(b,c){c?(b=b.uspString,null!=b?"string"==typeof b?this._fwUSPString=
b:(this._fwUSPString=b.toString(),a.warn("USPData's uspString value is malformed.")):a.warn("USPData's uspString value is missing.")):a.warn("Cannot retrieve CCPA params from USPAPI.");this._isExecuted=!0};a.USPConsentManager.prototype.isExecuted=function(){return this._isExecuted};a.USPConsentManager.prototype.getring||""};a.USPConsentManager.prototype.dispose=function(){this._consentManager=null};a.VntTpos=0};a.VideoAsset.prototype={setVuired.")},setVideoAssetCurrentTimntTpos=b},setV_state=b}start())},getPlafloortick()))},pause:function(){this._internalState.pause(this)}te(this)},onStartPlaying:function(){this.callback()},onStartReplaying:function(){this.callback()},onPau.pause()},onResumePlaying:function(){this._callbackTimer.start()},onCompleewUrl=!1},onCompleteReplaying:function(){this.onCompletePlaying()},setMediaState:function(a){this._internalState=a},requestPauseBySlot:function(b){a.debug("requestPauseBySlot");this._internalState===a.MediaPlayingState.instance||this._internalState===a.MediaReplayingState.instance?this._context.dispatchEvent(a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST,{slot:b}):a.debug("Not sending content pause request because content video state is",
JSON.stringify(this._internalState))},requestReslState))},requestForVideoViecript(b)},requesk url.break}}}}};a.NullRenderer=function(){this._rendererController=null};a.NullRenderer.prototypMPLETED)},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlayheadTime:function(){return-1},getDuration:function(){return-1}};a.NullRenderer.prototype.constructor=a.NullRenderer;a.VPAabled=!0};a.VPAIDWrapper.prototype={_isCreativeFunctioneof a:!1},checkVPAIDreturn b},loadCrea.send()}},setCallbacksFo[b],b,c)},removeCallbacksFo(a[b],b)},handsharsion(bd,e,f,h)itch=!0topAd())},isCreativeeState")},getAdSkippeState()},
skipAd:function(){a.log("VPAID Creative: skipAd()");this._creative.skipAd()},canPauseAd:function(){return this._isCreativeFunctionInvokable("pauseAd")},canResumeAd:function(){return this._isCreativeFunctionInvokable("resumeAd")},canResizeAd:function(){return this._isCreativeFunctionInvokable("resizeAd")},pauseAd:function(){this.canPauseAd()&&(a.log("VPAID Creative: pauseAd()"),this._creative.pauseAd())}umeAd())},resize")},getAdVolume:function(){return this._isCreativeFunctionInvokable("getAdVolume")?this._creative.getAdVolume():-1},seolume(a)},getAded():!1},getAdRemainingTime:function(){return this._isCreativeFunctionInvokable("getAdRemainingTime")?
this._creative.getAdRemainingTime():-1},getAion():-1},getAdLinear:function(){return this._creative.getAdLinear()},getAdCons():""},setTimeoutValueInMs:function(a){this._timeoutInMs=a},cancelTim)},500)}},addEventListener:function(a,c){this._eventHandlers[a]=c},removeEven[a]=null},_waitFutInMs)}},getTimeoutOperation:function(){return this._timeoutOperation}};a.VPAIDWrapper.prototype.constructor=a.VPAIDWrapper;a.VPAIERSION=2};a.VPAIDRenderer.prototype={};a.VPAIDRenderer.prototype.constructor=a.VPAIDRenderer;a.VPAIDRenderer.VastCompanion=function(a,c,d,e){this._width=a;this._height=c;this._apiFramework=
d;this._xmlNode=e};a.VPAIDRenderer.VastCompanion.prototype={getWidth:function(){return this._width},getHeight:function(){return this._height},_isVali&c.value},hasValidreturn!1},translateToAtent())}}};a.VPAIDRenderer.VastCompanion.prototype.constructor=
a.VPAIDRenderer.VastCompanion;a.VPAIDRenderer.VastAdSelect=function(){};a.VPAIDRenderer.VastAdSelect.prototype={_getDeadSreturn f},matchAdsreturn e}};a.VPAIDRenderer.VastAdSelect.prototype.constructor=a.VPAIDRenderer.VastAdSelect;
a.Util.mixin(a.VPAIDRenderer.prototype,{_iBitrate)},_failispose()},onCreativeror(b,c)},onCreatiimeout")},olume(b)},onAdVolHANGE}))},onAdExpanLLAPSE})},
onAdDuratation())},onAdEvent(c)},onCreativeAssetLoaded:function(){a.log("VPAIDRenderer: onCreativeAssetLoaded()");this.vpaidCreative.cancelTimeoutEvent();varve"c.passed}()&&c()){b.creativeEventCallbacks={AdStarted:b.onAdStarted,AdStopped:b.onAdStopped,AdSkipped:b.onAdSkipped,AdLoaded:b.onAdLoaded,AdLinearChange:b.onAdLinearChange,AdSizeChange:b.onAdSizeChange,
AdExpandedChange:b.onAdExpandedChange,AdDurationChange:b.onAdDurationChange,AdVolumeChange:b.onAdVolumeChange,AdImpression:b.onAdImpression,AdClickThru:b.onAdClickThru,AdSkippableStateChange:b.onAdSkippableStateChange,AdVideoFirstQuartile:b.onAdVideoFirstQuartile,AdVideoMidpoint:b.onAdVideoMidpoint,AdVideoThirdQuartile:b.onAdVideoThirdQuartile,AdVideoComplete:b.onAdVideoComplete,AdUserAcceptInvitation:b.onAdUserAcceptInvitation,AdUserMinimize:b.onAdUserMinimize,AdUserClose:b.onAdUserClose,AdPaused:b.onAdPaused,
AdPlaying:b.onAdResumed,AdError:b.onAdError,AdLog:b.onAdLog};b.vpaidCreative.setCallbacksForCreative(b.creativeEventCallbacks,b);this._rendererController.setCapability(a.EVENT_AD_QUARTILE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_MUTE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_EXPAND,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_PAUSE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_CLOSE,
a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_MINIMIZE,a.CAPABILITY_STATUS_ON);this._rendererController.setCapability(a.EVENT_AD_ACCEPT_INVITATION,a.CAPABILITY_STATUS_ON);(c=this.rendition?this.rendition.getParameter("creativeData"):null)||(c=this.rendition?this.rendition.getParameter("VPAID_creativeData"):null);c&&(c=a.Util.trim(c));c={AdParameters:c};var d=this._rendererController.getAdInstance().getSlot();this.videoBase.style.width="0px";this.videoBase.style.height=
"0px";this.videoBase.style.zIndex="100000";this.videoBase.style.position="absolute";this.videoBase.style.left=this._rendererController.getContentVideoElement().style.left;this.videoBase.style.top=this._rendererController.getContentVideoElement().style.top;this.videoBase.className="fw_vpaid_slot";this.videoParent=d.getBase();var e=this._rendererController.getContentVideoElement();if("nodeType"in e&&0<e.nodeType)try{this.videoParent.insertBefore(this.videoBase,this._rendererController.getContentVideoElement())}catch(h){this.videoParent.insertBefore(this.videoBase,
this.videoParent.firstChild)}else this.videoParent.insertBefore(this.videoBase,this.videoParent.firstChild);e={slot:this.videoBase,videoSlot:this._rendererController.getContentVideoElement(),videoSlotCanAutoPlay:!0};var f=d.getWidth();d=d.getHeight();f&&d||!this.rendition||(f=this.rendition.getWidth(),d=this.rendition.getHeight());this.vpaidViewmode=f>=screen.width&&d>=screen.height?"fullscreen":"normal";a.log("VPAIDRenderer ad init videoMode: "+this.vpaidViewmode);this.vpaidCreative.initAd(f,d,this.vpaidViewmode,
this.vpaidDesiredBitrate,c,e)}},otartAd()},onVisibilitch=!1)},oner,!1)))},oneturn.")},onAdITARTED)}},onAdLinhange(b)},onAdSizeChange:function(){a.log("VPAIDRenderer: onAdSizeChange()")},onAdPaused:function(){a.log("VPAIDRenderer: onAdPaused()");
"playing"===this.adPlaybackState&&this._rendererController.processEvent({name:a.EVENT_AD_PAUSE});this.adPlaybackState="paused"},onplaying"},atPLETED))},onAdSkippableStateChange:function(){a.log("VPAIDRenderer: onAdSkippableStateChange()");this._rendererController.processEvent({name:a.EVENT_AD_SKIPPABLE_STATE_CHANGED});this.vpaidCreative.getAdSkippableState()&&
this._isAttemptSkipCalled?(this._isAttemptSkipCalled=!1,this.vpaidCreative.skipAd()):a.log("VPAIDRenderer: creative adSkippableState is false, unable to skip")},onMPLETED)},onAdVideoFirstQuartile:function(){a.log("VPAIDRenderer: onAdVideoFirstQuartile()");this._rendererController.processEvent({name:a.EVENT_AD_FIRST_QUARTILE})},
onAdVideoMidpoint:function(){a.log("VPAIDRenderer: onAdVideoMidpoint()");this._rendererController.processEvent({name:a.EVENT_AD_MIDPOINT})},onAdVideoThirdQuartile:function(){a.log("VPAIDRenderer: onAdVideoThirdQuartile()");this._rendererController.processEvent({name:a.EVENT_AD_THIRD_QUARTILE})},onAdVideoComplete:function(){a.log("VPAIDRenderer: onAdVideoComplete");this._rendererController.processEvent({name:a.EVENT_AD_COMPLETE})},onAdUserAcceptInvitation:function(){a.log("VPAIDRenderer: onAdUserAcceptInvitation()");
this._rendererController.processEvent({name:a.EVENT_AD_ACCEPT_INVITATION})},onAdUserClose:function(){a.log("VPAIDRenderer: onAdUserClose()");this._rendererController.processEvent({name:a.EVENT_AD_CLOSE})},onAdUseNIMIZE})},onAdLog:function(b){a.log("VPAIDRenderer: onAdLog: "+b)},ent:"+e nulispose()},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},
getPlaheadTime},ge<=a?a:-1},pause:function(){a.log("VPAIDRenderer pause()");this._rendererController.processEvent({name:a.EVENT_AD_PAUSE});this.vpaidCreative.canPauseAd()?"playing"===this.adPlaybackState&&(this.adPlaybackState="pausing",
this.vpaidCreative.pauseAd()):a.log("The creative is not able to pause"resume")ve=null)},resize:function(){a.log("VPAIDAdRenderer resize()");
var b=this._rendererController.getAdInstance().getSlot(),c=b.getWidth();b=b.getHeight();a.log("VPAIDRenderer new size width:"+c+" height:"+b);this.vpaidViewmode=c>=screen.width&&b>=screen.height?"fullscreen":"normal";a.log("VPAIDRenderer videoMode: "+this.vpaidViewmode);this.vpaidCreative.resizeAd(c,b,this.vpaidViewmode)},getAdSkippableState:function(){return this.vpaidCreative.getAdSkippableState()}});a.VastTest=null};a.VastTranslator.prototype=
{start:function(b){function c(b){a.log("VastTranslanull}function l(b,c){if(b&&b.length)for(var d=0;d<b.length;d++)l(b[d],c);else if(b.AdVerifications&&b.AdVerifications.Verification)if(b=b.AdVerifications.Verification,b.length)for(d=0;d<b.length;d++){var e=new a.AdVerification;e.parseFromVAST(b[d]);c.adVerifications.push(e)}else e=new a.AdVerification,e.parseFromVAST(b),c.adVerificationata=null}function L(){this.creativeView=[];this.start=[];this.firstQuartile=[];this.midpoint=[];this.thirdQuartile=[];this.complete=[];this.mute=[];this.unmute=[];this.pause=[];this.rewind=[];this.resume=[];this.replay=[];this.fullscreen=[];this.expand=[];this.collapse=[];this.acceptInvitation=[];this.stop=[];this.skip=[];this.progress={};this.percentageProgress={}}function z(a){this._impressions=[];this.clickThrough=
null;this.clickTrackings=[];this.customClicks=[];this.creativeData=null;this.sequence=-1;this.universalAdId=null;this.vastRenditions=[];this.duration=NaN;this.adp=a;this.isDrivingAd=!1;this.simidUrl=null;this.simidVariableDurationAllowed=!1;this.simidCreativeApi=this.simidContentType=null}function J(a){z.call(this,a)}function u(a){z.cal(this,a)}funcckings)}function O(b,d){c("initTrackingEvents()");if(d&&b){B(b,a.EVENT_AD_IMPRESSION,a.EVENT_TYPE_IMPRESSION,d.creativeView);B(b,a.EVENT_AD_IMPRESSION,a.EVENT_TYPE_IMPRESSION,d.start);B(b,a.EVENT_AD_FIRST_QUARTILE,a.EVENT_TYPE_IMPRESSION,
d.firstQuartile);B(b,a.EVENT_AD_MIDPOINT,a.EVENT_TYPE_IMPRESSION,d.midpoint);B(b,a.EVENT_AD_THIRD_QUARTILE,a.EVENT_TYPE_IMPRESSION,d.thirdQuartile);B(b,a.EVENT_AD_COMPLETE,a.EVENT_TYPE_IMPRESSION,d.complete);B(b,a.EVENT_AD_MUTE,a.EVENT_TYPE_STANDARD,d.mute);B(b,a.EVENT_AD_UNMUTE,a.EVENT_TYPE_STANDARD,d.unmute);B(b,a.EVENT_AD_PAUSE,a.EVENT_TYPE_STANDARD,d.pause);B(b,a.EVENT_AD_RESUME,a.EVENT_TYPE_STANDARD,d.resume);B(b,a.EVENT_AD_REWIND,a.EVENT_TYPE_STANDARD,d.rewind);B(b,a.EVENT_AD_EXPAND,a.EVENT_TYPE_STANDARD,
d.fullscreen);B(b,a.EVENT_AD_COLLAPSE,a.EVENT_TYPE_STANDARD,d.collapse);B(b,a.EVENT_AD_EXPAND,a.EVENT_TYPE_STANDARD,d.expand);B(b,a.EVENT_AD_CLOSE,a.EVENT_TYPE_STANDARD,d.stop);B(b,a.EVENT_AD_ACCEPT_INVITATION,a.EVENT_TYPE_STANDARD,d.acceptInvitation);B(b,a.EVENT_AD_SKIPPED,a.EVENT_TYPE_STANDARD,d.skip);for(var e=Object.keys(d.progress),f=0;f<e.length;f++){var q=e[f];b.addProgressEventCallbackUrls(q,d.progress[q])}e=Object.keys(d.percentageProgress);for(f=0;f<e.length;f++)q=e[f],b.addPercentageProgressEventCallbackUrls(q,
d.percentageProgSION,g)}}function R(a,b){c("initTemporalAdInstance");a||d("initTemporalAdInstance: Invalid adInstance");if(b.selectedDrivingAd){b.surveyUrl&&a._creative.setParameter("_fw_survey_url",
b.surveyUrl);var e=b.selectedDrivingAd,f=b.selectedDrivingRenditions;c("vastRenditions:"+f);for(var q=4===A,g=0;g<f.length;g++){var h=a.addCreativeRendition();var y=h.addCreativeRenditionAsset("VAST_CRA",!0);var l=f[g];a:{var m=l.creativeType;switch(m){case "video/mp4":m="video/mp4-h264";break a;case "video/3gp":m="video/3gpp"}}c("initTemporalAdInstance() set rendition/asset [vastRd.creativeApi,vastAd.duration,vastRd.width,vastRd.height,vastRd.url,assetContentType,vastRd.creativeType] =  "+[l.creativeApi,
e.duration,l.width,l.height,l.url,m,l.creativeType]);h.setCreativeApi(l.creativeApi);isNaN(e.duration)||h.setDuration(e.duration);l.width&&!isNaN(l.width)&&h.setWidth(l.width);l.height&&!isNaN(l.height)&&h.setHeight(l.height);e.universalAdId&&h.setUniversalAdId(e.universalAdId);e.simidUrl&&h.setSimidCreativeUrl(e.simidUrl);e.simidCreativeApi&&h.setCreativeApi(e.simidCreativeApi);e.simidContentType&&h.setContentType(e.simidContentType);e.simidVariableDurationAllowed&&h.setSimidVariableDurationAllowed(e.simidVariableDurationAllowed);
l.url&&y.setUrl(l.url);l.code&&y.setContent(l.code);y.setMimeType(l.creativeType);"static"===l.resourceType&&"text/html"===l.creativeType?y.setContentType("text/html_doc_ref"):"application/x-javascript"===l.creativeType||"application/javascript"===l.creativeType?y.setContentType("text/js_ref"):"iframe"===l.resourceType?y.setContentType("text/html_doc_ref"):"text/html"===l.creativeType||"text/html_doc_ref"===l.creativeType?y.setContentType("text/html_doc_ref"):"text/html_doc_lit_mobile"===l.creativeType?
y.setContentType("text/html_doc_lit_mobile"):q||k(m)?(y.setContentType("text/html_doc_lit_mobile"),y.setUrl(null),y.setContent(S(a,F.getCustomId(),e,l,"text/html_doc_lit_mobile"))):y.setContentType(m);e.creativeData&&0!==e.creativeData.length&&(c("initTemporalAdInstance(), set asset parameter creativeData:"+e.creativeData),h.setParameter("creativeData",e.creativeData));q||k(m)||(l=l.bitrate,!isNaN(l)&&0<l&&y.setBytes(1E3*l*e.duration/8));m=K;y=H;l=!1;if(h.getContentType()&&m){var p=h.getContentType().toLowerCase(),
n=m.toLowerCase();if(p===n)l=!0;else if(0===p.indexOf("video/mp4")&&0===n.indexOf("video/mp4")||"application/javascript"===n&&"text/js_ref"===p)h.setContentType(m),l=!0}m=!1;h.getCreativeApi()&&y&&(p=h.getCreativeApi().toLowerCase(),n=y.toLowerCase(),p===n?m=!0:0===p.indexOf("mraid")&&0===n.indexOf("mraid")&&(m=!0,h.setCreativeApi(y)));l&&m?h.setPreference(10):m?h.setPreference(6):l?h.setPreference(5):h.setPreference(0);c("adjustMatchedRendition "+h.getId()+", contentType "+h.getContentType()+", creativeAPI "+
h.getCreativeApi()+", preference "+h.getPreference())}O(a,e.trackingEvents);M(a,b);P(a,q?f[0].clickThrough:e.clickThrough,e.clickTrackings,e.customClicks,e.impressions);a.addAdVerificationsFromVast(b.adVerifications)}else h=a.addCreativeRendition(),h.setContentType("null/null"),y=h.addCreativeRenditionAsset("VAST_CRA",!0),y.setContentType("nussions)}function v(b){if(200<=b.status&&400>b.status)if(b.responseXML){var d=(new r).parseAdData(b.responseXML);if(d){c("scheduleVastAds");if(d&&0!==d.length)if(b=d[0].selectedPackage,d=d[0].redirectPackage,!b&&!d)if(c("scheduleVastAds(), no ads from vast response!!!"),
t)if(4!==A)w.onTranslatorFailed(a.ERROR_NO_AD_AVAILABLE,"Expecting linear ad but returned non-linear ad",a.ERROR_VAST_LINEARITY_NOT_MATCH);else w.onTranslatorFailed(a.ERROR_NO_AD_AVAILABLE,"Expecting non-linear ad but returned linear ad",a.ERROR_VAST_LINEARITY_NOT_MATCH);else w.onTranslatorFailed(a.ERROR_NO_AD_AVAILABLE,"wrapperUrl="+E);else if(!b&&d){c("scheduleVastAds(), no ads scheduled, redirect to downstream Secondary Ad Server");c("scheduleRedirect");b=[];var e=[];b.push(F);e.push({});for(var f=
D,g=d.selectedCompanionAds,q=0;q<f.length;q++){var h=f[q];g&&g[h.getCustomId()]&&(b.push(h),e.push(g[h.getCustomId()]))}(f=w._rendererController.scheduleAdInstances(b))&&0<f.length&&(g=f[0],q=g.addCreativeRendition(),q.setWrapperUrl(a.Util.transformUrlToProxy(d.tagUrl)),q.setOriginalVastWrapperUrl(x.getActiveCreativeRendition().getOriginalVastWrapperUrl()),q.setWrapperType(U),q.setContentType(K),q.setCreativeApi(H),O(g,d.getTrackingEventsOfWrapper()),M(g,d),P(g,d.getClickThroughOfWrapper(),d.getClickTrackingsOfWrapper(),
d.getCustomClicksOfWrapper(),d.getImpressionOfWrapper()),g.addAdVerificationsFromVast(d.adVerifications));c("scheduleRedirect, schedule companion for redirect ad "+d);for(q=1;q<f.length;q++)if(g=f[q])h=e[q],h instanceof p&&T(b[q],g,h,d)}else{if(b){c("scheduleVastAds(), ads returned from vast response, going to schedule them");b.selectedDrivingAd?(c("scheduleVastAds(), ads returned from vast response, going to schedule them with driving ad"),b.selectedDrivingAd.isDrivingAd=!0):c("scheduleVastAds(), ads returned from vast response, going to schedule them without driving ad");
c("scheduleAdPackage()");d=[];e=[];d.push(F);b.selectedDrivingAd&&e.push(b.selectedDrivingAd);f=D;g=b.selectedCompanionAds;for(q=0;q<f.length;q++)h=f[q],g&&g[h.getCustomId()]&&(d.push(h),e.push(g[h.getCustomId()]));g=w._rendererController.scheduleAdInstances(d);if(0<g.length){c("scheduleAdPackage, scheduled "+g.length+" ads"+b.selectedDrivingAd?"":0);b.selectedDrivingAd||c("Driving ad is not selected, will create a dummy null ad.");b.selectedDrivingAd||
(d.shift(),R(g.shift(),b));for(q=0;q<g.length;q++)if(h=g[q]){var k=e[q];k instanceof p?T(d[q],h,k,b):R(h,b)}!b.selectedDrivingAd&&0<f.length&&0<b.companionAds.length&&0===e.length&&(c("found empty companion slots and companion ads in package, but none of them matches slot size"),w.onTranslatorFailed(a.ERROR_UNMATCHED_SLOT_SIZE))}else c("scheduleAdPackage, no ad scheduled.")}}else c("no ads for scheduleVastAds");w._request=null;w._rendererController.handleStateTransition(a.TRANSLATOR_STATE_STARTED);
w._rendererController.handleStateTransition(a.TRANSLATOR_STATE_COMPLETED)}}else w.onTranslatorFailed(a.ERROR_PARSE,"wrapperUrl="+E,a.ERROR_VAST_XML_PARSING);else if(0!=b.status)w.onTranslatorFailed(a.ERROR_IO,"wrapperUrl="+E)}this._rendererController=b;var I="image/gif image/jpeg image/png text/html text/javascript text/html_doc_ref text/html_doc_lit_mobile application/x-javascript application/javascript".split(" "),t=!1,x=this._rendererController.getAdInstance(),w=this,F=x.geeturn 1}}(),D=this._rendererController.getCompanionSlotseturn!0}});c("Checking CompanionSlots, length = "+D.length+", this._rendererController.getCompanionSlots().length = "+this._rendererController.getCompanionSlots().length+", AdInstance.getCompanionSlots.length = "+x.getCompanionSlots().length);var K=x.getActiveCreativeRendition().getContentType(),H=x.getActiveCreativeRendition().getCreativeApi()||"None";this.log("ExpectedDrivingContentType:"+K+", ExpectedDrivingAPI:"+H);var U=x.getActiveCreativeRendition().getWrapperType();m.prototype={init:function(a,
b,c,d,e,f,g,h){this.log("init("+[].slice.call(arguments,0).join(",")+")");this.url=a;this.width=1*b;this.height=1*c;this.creativeType=d;this.resourceType=e;this.bitrate=f;var q;if((q=g)&&0!==q.length)switch(q.toLowerCase()){case "flashvar":case "flashvars":q="clickTag";break;case "vpaid":q="VPAID";break;case "mraid":q="MRAID-1.0";break;case "simid":q="SIMID"}else q="None";this.creativeApi=q;this.code=h||null},log:function(b){a.log("VastTranslator.VastRendition\t"+b)}oin(",")}};m.prototype.constructor=m;z.prototype={parse:function(b){this.log("parse()");b["@attributes"]&&b["@attributes"].hasOwnProperty("skipoffset")&&(x._setSkipOffset(b["@attributes"].skipoffset),x._setSkipOffsetPercentage(b["@attributes"].skipoffset));if(b.Duration)if(b.Duration.value){var c=/(\d+):(\d+):(\d+)/.exec(b.Duration.value);c?this.duration=3600*c[1]+60*c[2]+1*c[3]:this.warn("Failed to parse duration value for creative "+
b)}else this.warn("No duration value set for creative "+b);b.VideoClicks&&(b.VideoClicks=[].concat(b.VideoClicks),a.Util.forEachOnArray(b.Viurl:b})}},this));b.MediaFiles&&b.MediaFiles.MediaFile&&(b.MediaFiles.MediaFile=[].concat(b.MediaFiles.MediaFile),a.Util.forEachOnArray(b.MediaFiles.[b,c,d])},this));b.MediaFiles&&b.MediaFiles.InteractiveCreativeFile&&(this.simidUrl=g(b.MediaFiles.InteractiveCreativeFile.value),this.simidVariableDurationAllowed=b.MediaFiles.InteractiveCreativeFile["@attributes"].variableDuration,
this.simidContentType=b.MediaFiles.InteractiveCreativeFile["@attributes"].type,this.simidCreativeApi=b.MediaFiles.InteractiveCreativeFile["@attributes"].apiFramework,this.log("parsing SIMID data, SIMID url: "+this.simidUrl+", SIMID variable duration allowed: "+this.simidVariableDurationAllowed+", SIMID content type: "+this.simidContentType+", SIMID creative api: "+this.simidCreativeApi));b.TrackingEvents&&this.parseTrackingEvents(b.TrackingEvents,this.setTrackingEvents());b.AdParameters&&(this.log("parse() got AdParameters:"+
b.AdParameters.value),this.creativeData=b.AdParameters.value);b.Companion&&(b.Companion=[].concat(b.Companion),a.Util.forEachOnArray(b..push(y)},this));b.NonLinear&&(b.NonLinear=[].concat(b.NonLinear),a.Util.forEachOnArray(b..push(y)},this))},parseLinears:function(a){2!==A?(this.log("TargetAdType != TARGET_LINEAR, skipping parse"),t=!0):this.parse(a)},parseNparse(a)},parseCompanionAds:function(a){this.parse(a)},setTrackngEvents},parseTrackingEvents:function(b,c){this.log("parseTrackingEvents");b.Tracking&&(b.Tracking=[].concat(b.Tracking),a.Util.forEachOnArray(b.Tracking,function(b){var d=b["@attributes"].event,e=g(b.value);if(e)switch(d){case "creativeView":case "start":case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":case "mute":case "unmute":case "pause":case "resume":case "rewind":case "replay":case "fullscreen":case "expand":case "collapse":case "acceptInvitation":case "stop":case "skip":c[d].push(e);
break;case "progress":d=a.Util.offsetStringToSecond(b["@attributes"].offset,this.duration);-1!=d&&(c.progress[d]||(c.progress[d]=[]),c.progress[d].push(e));b=a.Util.offsetStringToPercentage(b["@attributes"].offset);-1!=b&&(c.percentageProgress[b]||(c.percentageProgress[b]=[]),c.percentageProgress[b].push(e));break;case "close":c.stop.push(e)}},this),a.debug("********** events:",c))}nditions},log:function(b){a.log("VastTranslator."+
this.constructor.name+"\t"+"\t"+b)}};b=Object.defineProperty||function(a,b,c){c.get&&a.__defineGetter__(b,c.get);c.set&&a.__defineSetter__(b,c.set)};b(z.prototype,"trackingEvents:null}});b(z.prototype,"impressions",{set:function(a){this._impressioressions}});z.prototype.constructor=z;J.prototype=new z;J.prototype.constructor=J;u.prototype=new z;u.prototype.constructor=u;p.prototype=new z;p.prototype.getPrimary0]||null};b(p.prototype,"impressiressions}});p.prototype.constructotions=[]};Q.prototyackage")},testAndUpdatePackageForTemreturn b},testAndUpdatePackageForreturn b},
renditionFght():!1},calcDeadSight():1},matchAreturn c},getAllRenditions:function(a){return a.vastRenditions},findRenditionGroupByCoreturn c},formalase():""},
getAdsByTreturn a},getImpressionreturn b},getTrackingEventsreturn b},getClickThroughreturn b},getClickTrackingsOfWrapper:function(){this.log("getClickTrackingsOfWrapper");
for(var a=this.getAdsByTargetType(),b=null,c=0;c<a.length;c++){var d=a[c];if(d){d.clickTrackings&&0<d.clickTrackings.length&&(b=d.clickTrackings);d=d.vastRenditions;for(var e=0;e<d.length;e++){var f=d[e];if(f.clickTrackings&&0<f.clickTrackings.length){b=f.clickTrackings;break}}if(b)break}}return b},getCustomClicksreturn b},testWrapperFol.length},log:function(b){a.log("VastTranslator.VastAdPackage\t"+b)},warn:function(b){a.warn("VastTranslator.VastAdPackage\t"+b)}};Q.prototype.constructor=Q;r.prototype={getVant(a):-1},parseAdData:function(b){this.log("parseAdData()");var c={},d;c.selectedPackage=null;c.redirectPackage=null;var e=a.Util.xmlToJson(b);if(e)if(e.VAST&&e.VAST["@attributes"])if(this.getVastVersion(e.VAST["@attributes"].version)<a.MINIMUM_VAST_VERSION_SUPPORTED||this.getVastVersion(e.VAST["@attributes"].version)>a.MAXIMUM_VAST_VERSION_SUPPORTED)w.onTranslatorFailed(a.ERROR_PARSE,"wrapperUrl="+E,a.ERROR_VAST_VERSION_NOT_SUPPORTED);
else{if(e.VAST.Ad){e.VAST.Ad=[].concat(e.VAST.Ad);var f=[];b=[];for(d=0;d<e.VAST.Ad.length;d++){var g=new Q;g.isWrapper=!!e.VAST.Ad[d].Wrapper;g.isWrapper?(g.parse(e.VAST.Ad[d].Wrapper),b.push(g)):(g.parse(e.VAST.Ad[d].InLine),f.push(g))}e=!1;if(0===f.length&&0===b.length)return this.log("parseAdData(): no ads from vast response!!!"),[c];this.log("parseAdData(): "+f.length+"inline ads, "+b.length+" wrapper ads.");g=null;for(d=0;d<f.length;d++)if(this.selectUsableAdsForDrivingSlot(f[d])){this.log("parseAdData(): package for driving slot is found!!!");
g=f[d];break}d=0<D.length&&x.getSlot().getTimePositionClass()!==a.TIME_POSITION_CLASS_DISPLAY;if(g)d&&this.selectUsableAdsCompanionSlots(g)&&this.log("parseAdData(): companion ads are found for companion slots, with driving slot"),c.selectedPackage=g;else if(d){d=!1;for(var h=0;h<f.length;h++)g=f[h],this.selectUsableAdsCompanionSlots(g)&&(this.log("parseAdData(): companion ads are found for companion slots,without driving slot"),c.selectedPackage=g,d=!0);d||(this.log("parseAdData(): companion ads are not found for companion slots,without driving slot"),
e=!0)}else this.log("parseAdData(): no usable ads found in vast response!!!"),e=!0;if(e&&0<b.length)for(f=0;f<b.length;f++)if(this.testWrapperForRedirect(b[f])){c.redirectPackage=b[f];0==x.getWrapperCount()&&x.getActiveCreativeRendition().setOriginalVastWrapperUrl(E);x.incrementWrapperCount();this.selectUsableAdsCompanionSlots(b[f])&&this.log("parseAdData(): companion ads are found for wrapper ad");break}return[c]}e.VAST.Error&&B(x,a.EVENT_ERROR,a.EVENT_TYPE_ERROR,e.VAST.Error.value);w.onTranslatorFailed(a.ERROR_NO_AD_AVAILABLE,
"wrapperUrl="+E,a.ERROR_VAST_NO_AD)}else w.onTranslatorFailed(a.ERROR_PARSE,"wrapperUrl="+E,a.ERROR_VAST_SCHEMA_VALIDATION);else w.onTranslatorFailed(a.ERROR_PARSE,"wrapperUrl="+E,a.ERROR_VAST_XML_PARSING)},selectUsableAdsForDrreturn a},
selectUsableAdsCompats(a,!0)},testAndUpdatePackageForTemporalSlot:function(a,b){this.log("testAndUpdatePackageForTemporalSlot(pk,isLinear), isLinear = "+b);return a.testAndUpdatePackageForTemporalSlot(b)},testAndUpdatePackageForSlots(b)},testWrapperFodirect()},log:function(b){a.log("VastTranslator.VastParser\t"+b)},warn:function(b){a.warn("VastTranslator.VastParser\t"+b)}};var E=x.getActiveCreativeRendition().getWrapperUrl();b=x.getActiveCreativeRendition().getWrapperType();c("AdInstance.getActiveCreativeRendition().getWrapperUrl()="+E+", getWrapperType()="+b);if(0!==b.indexOf("external/vast-"))w.onTranslatorFailed(a.ERROR_NO_RENDERER,"wrapperType="+b+";wrapperUrl="+E,a.ERROR_VAST_TRACKING_ERROR);else if(E&&0!==E.length){var N=
a.VAST_DEFAULT_MAX_WRAPPER_COUNT;(b=this._rendererController.getParameter(a.PARAMETER_VAST_MAX_WRAPPER_COUNT))&&0<Number(b)&&(N=Number(b));b=x.getWrapperCount();if(b>=N)N=x.getActiveCreativeRendition().getOriginalVastWrapperUrl(),w.onTranslatorFailed(a.ERROR_IO,"maximum wrapper limit is reached: "+b+" wrapperUrl="+N,a.ERROR_VAST_WRAPPER_LIMIT_REACH);else{N=this._rendererController.getParameter("translator.vast.asyncLoad");N=!0===a.Util.str2bool(N);c("will load vast xml, asyncAjax:"+N);var W=this._rendererController.getParameter("translator.vast.loadWithCookie");
W=!0===a.Util.str2bool(W);var G=null,V=5E3;(b=this._rendererController.getParameter(a.PARAMETER_VAST_TIMEOUT_IN_MILLISECONDS))&&0<Number(b)&&(V=Number(b));try{window.XDomainRequest?(G=new XDomainRequest,N=!0):(G=new XMLHttpRequest,G.withCredentials=W),w._request=G,N?(G.open("GET",E),window.XDomainRequest200;v(G)}:(G.timeout=V,G.onreadyste&&
v(G)}),G.TIMEOUT)},usText))},G.send()):(G.open("GET",E,!1),G.send(),v(G))}catch(q){b=!1;if(!window.XMLHttpRequestException)q.code===DOMException.NETWORK_ERR&&
(d("CORS in IE10"),b=!0);else if(q instanceof XMLHttpRequestException)switch(q.code){case XMLHttpRequestException.NETWORK_ERR:b=!0}b?(d("CORS error:"+q),w.onTranslatorFailed(a.ERROR_SECURITY,"wrapperUrl="+E)):(d("exception:"+q),w.onTranslatorFailed(a.ERROR_UNKNOWN,"wrapperUrl="+E+";exception="+q))}}}else w.onTranslatorFailed(a.ERROR_NULL_ASSET,"wrapperUrl="+E,a.ERROR_VAST_TRACKING_ERROR)},info:function(){return{moduleType:a.MODULE_TYPE_TRANSLATOR}},log:function(b){a.log("VastTranslator\t"+b)},warn:function(b){a.warn("VastTranslator\t"+
b)},getPlayheadTime:function(){return-1},gereturMPLETED)},onTranslaAILED,e)}};a.VastTranslator.prototype.constructor=a.VastTranslator;a.ContentVideoSrc=null};a.ContentVideoExtension.prototype={_lemennDetach)},_respondPauseResume:function(){return a.Util.getBooleanParameter(a.PARAMETER_EXTENSION_CONTENT_VIDEO_RESPOND_PAUSE_RESUME,!0)},_autoSourTORE,!0)xt=null)}};a.ContentVideoExtension.prototype.constructor=a.ContentVideoExtension;return a};m.tv.freewheel.SDK||(m.tv.freewheel.SDK=m.tv.freewheel[k]("tv.freewheel.SDK"));return m})();


/***/ }),

/***/ 9531:
/***/ (function(mots=t():0}(window,functionnxports=s},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(4);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SonicItem=function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._properties=[],Object.keys(t.push(e)}),function(e){e.images&&e.images.forEach(function(t){e["_"+t.kind]=t})}(this),["show","video"].includes(this.type)&&(function(e){var t=null;switch(e.type){case"show":t=["primaryChannel"];break;case"video":t=["primaryChannel","show"]}t.forEach(function(t){t in e&&e[t].constructor===Array&&(e[t]=e[t].length>0?e[t][0]:void 0)})}(this),function(e){e.ratings&&(e.ratings.forEach(function(t,n){!t.code&&e.contentRatings[n]&&e.contentRatings[n].code&&(t.code=e.contentRatings[n].code),!t.contentRatingSystem&&e.contentRatings[n]&&e.contentRatings[n].system&&(t.contentRatingSystem={system:e.contentRatings[n].system,type:"contentRatingSystem"})}),e.contentRatings=e.ratings,delete e.ratings),e.ratingDescriptors&&(e.contentDescriptors=e.ratingDescriptors,delete e.ratingDescriptors)}(this)),this.tags&&function(e){["channel","show","video"].includes(e.type)&&e.tags&&(e.labels=[],e.tags.forEach(function(t){if((t=t.name)&&t.startsWith("label")){var n=t.split(":").slice(1),r={name:n[0],type:"automatic"};3==n.length&&(r=Object.assign({},r,{bgcolor:n[1],fgcolor:n[2],type:"manual"})),e.labels.push(r)}}))}(this),!this.packages&&this.contentPackages&&(this.packages=this.contentPackages.map(function(e){return e.name})),this.packages&&function(e){e.isFree=function(){return!e.packages.includes("Registered")&&!e.packages.includes("Premium")},e.isRemium"))},e.remium")}}(this),this.getPath=function(){if(["channel","show","video"].includes(n.type)){var e="",t="",r=["/",n.alternateId].join("");return n.primaryChannel&&(e=["/",n.primaryChannel.alternateId].join("")),n.show&&(t=["/",n.show.alternateId].join("")),[e,t,r,"/"].joi0991):0}},function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},function(e,t,n){e.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return ength>c;)s.call(e,a=u[c++])&&t.push(a);return t}},function(ction(){return function(e,t){return o(r(e),t)}})},function(e,t,n){var r=n(11),o=n(36);n(22)("getPrototypeOf"getOwnPropertyNames",function(){return n(93).f})},function(e,t,n){var r=n(4),o=n(28).onFreeze;n(22)("freeze",function(e){return function(t){return e&&r(t)?e(o(t)):t}})},function(e,t,n){var r=n(4),o=n(28).onFreeze;n(22)("seal",function(e){return function(t){return e&&r(t)?e(o(t)):t}})},function(e,t,n){var r=n(4);n(22)("isFrozen",functionn){var r=n(0);r(r.S+r.F,"Object",{assign:n(94)})},functng",function(){return"[object "+r(this)+"]"},!0)},function(o(e);)if(this.prototype===e)return!0;return!1}})},function(e,t,n){var r=n(te:function(e){return"number"==typeof e&&o(e)}})},function(e,t,S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(e,t,n){var r=n(0),o=n(99);r(r.S+r.F(71);r(r.S+r.F*(o!=Math.expm1),"Math",{expm1:o})},function10:function(e){return Math.log(e)*Math.LOG10E}})},functio{log2:function(e){return Math.log(e)/Math.LN2}})},functurn a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},function(e,t,n){"use strict";n(13)("anchor",function(e){return function(t){return e(this,"a","name",t)}})},function(e,t,n){"use strict";n(13)("big",function(e){return function(){return e(this,"big","","")}})},function(e,t,n){"use strict";n(13)("blink",function(e){return function(){return e(this,"blink","","")}})},function(e,t,n){"use strict";n(13)("bold",function(e){return function(){return e(this,"b","","")}})},function(e,t,n){"use strict";n(13)("fixed",function(e){return function(){return e(this,"tt","","")}})},function(e,t,n){"use strict";n(13)("fontcolor",function(e){return function(t){return e(this,"font","color",t)}})},function(e,t,n){"use strict";n(13)("fontsize",function(e){return function(t){return e(this,"font","size",t)}})},function(e,t,n){"use strict";n(13)("italics",function(eturn function(t){return e(this,"a","href",t)}})},function(e,t,n){"use strict";n(13)("small",function(e){return function(){return e(this,"small","","")}})},function(e,t,{re{return function(){return e(this,"sub","","")}})},function(e,t,n){"use strict";n(13)("sup",function(e)"Incorrect hint");return o(r(this),"number"!=e)}},function(null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},function(e,t,n){"use strict";var r=n(0),o=n(23)(1);r(r.P+r.F*!n(17)([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},function(e,t,n){"use strict";var r=n(0),o=n(23)(2);r(r.P+r.F*!n(17)([].filter,!0),"Array",{filter:function(e){return o(this,e,arguments[1])}})},function(e,t,n){"use strict";var r=n(0),o=n(23)(3);r(r.P+r.F*!n(17)([].some,!0),"Array",{sery:function(e){return o(this,e,arguments[1])}})},function(e,t,n){"use strict";var r=n(0),o=n(106);r(r.P+r.F*!n(17)([].reduce,!0),"Array",{reduce:function(e){retu;r--)if(r in t&&t[r]===e)return r||0;return-1}})},function(e,t,n){var r=n(0);r(r.P,uments.length>1?arguments[1]:voi.G+r.W+r.F*!n(60).ABV,{DataView:n(85).DataView})},function(e,t,n){n(26)("Int8",1,function(e){return function(t,n,r){return e(this,t,n,r)}})},function(e,t,n){n(26)("Uint8",1,function(eeturn function(t,n,r){return e(this,t,n,r)}},!0)},function(e,t,n){n(26)("Int16",2,function(e){return function(t,n,r){return e(this,t,n,r)}})},function(e,t,n){n(26)("Uint16",2,function(e){return function(t,n,r){return e(this,t,n,r)}})},function(e,t,n){n(26)("Int32",4,function(e){return function(t,n,r){return e(this,t,n,r)}})},function(e,t,n){n(26)("Uint32",4,function(e){return function(t,n,r){return e(this,t,n,r)}})},function(e,t,n){n(26)("Float32",4,function(eisExtensible:function(e){return o(e),!i||i(e)}})},function(e,t);try{return o.set(e,t),!0}catch(e){return!1}}})},funcngth>1?arguments[1]:void 0)}}),n(37)("includes")},fun40991)throw TypeError();t[g]=v}g++}y++}return g}},function(e,t,n){n(274),e.exports=n(8).String.padStart},function(e,t,n){"use strict";var r=n(0),o=n(118),i=n(58),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*a,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},fun,e,arguments.length>1?arguments[1]:void 0,!1)}})},function(e,t,n){n(278),e.exports=n(8).String.trimLeft},function(e,t,n){"use strict";n(40)("trimLeft",function(e){return function(){return e(this,1)}},"trimStart")},functierator")},function(e,t,n){n(90)("asyncIterator")},function(e,t,n){n(284)void 0!==(n=s(r,t=c[f++]))&&u(l,t,n);return l}})},function(e,t,n){n(286),e.exports=n(8).Object.values},function(e,t,n){var r=n(0),o=n(119)(!1);r4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,n){var r=n(300);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(302),o=n(307);e.exports=n(88)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(303),o=n(304),i=n(306),a=Object.defineProperty;t.f=n(88)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not shrow TypeError(e+" is not an object!");return e}},function(e,t,n){e.exports=!n(88)&&!n(121)(function(){return 7!=Object.defineProperty(n(305)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(87),o=n(86).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(87);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnPropion(e,t,n){"use strict";e.exports=n(310).default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(311),o=n(313);t.default=function e(t){var n=this,i=t.endpoint,a=t.realm,u=t.xhr,s=void 0===u?void 0:u,c=t.clientId,l=void 0===c?void 0:c,f=t.discoParams,d=void 0===f?void 0:f,h=t.deviceInfo,v=void 0===h?void 0:h,p=t.token,g=void 0===p?void 0:p,y=t.initToken,m=void 0===y||y,b=t.xhrTimeout,_=void 0===b?0:b,S=t.handler,w=void 0===S?"events":S;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{var I="undefined"!=typeof StoneSyndication&&null!==StoneSyndication?StoneSyndication:void 0;this._Server=new r.Server({endpoint:i,realm:a,xhr:s,clientId:l,discoParams:d,deviceInfo:v,token:g,syndication:I,initToken:m,xhrTimeout:_}),this._resultsHandler=w}catch(e){throw e}this._sonicTypes={channel:"channel",show:"show",video:"video",image:"image",link:"link",genre:"genre",collection:"collection",collectionItem:"collectionItem",page:"page",pageItem:"pageItem",route:"route",season:"season",package:"package",tag:"tag",videoView:"videoView",videoPlaybackInfo:"videoPlaybackInfo",channelPlaybackInfo:"channelPlaybackInfo",user:"user",profile:"profile",linkingCode:"linkingCode",config:"config",notification:"notification","favorites-list":"favorites-list",tvlisting:"tvlisting",consent:"consent",term:"term",termKind:"termKind",product:"product",pricePlan:"pricePlan",rawContent:"rawContent",serverTime:"serverTime",error:"error"},this._resultsEventEmitter=function(e){var t=e.eventName,n=e.result,r=e.meta,o=e.callback,i=void 0===o?null:o,a=e.isError,u={detail:{result:n,isError:void 0!==a&&a}};if(r&&(u.detail.meta=r),i)i(u);else{var s=new CustomEvent(t,u);window.document.dispatchEvent(s)}},this._handleResults=function(e){var t=e.eventName,r=e.result,i=e.callback,a=void 0===i?null:i,u=e.parsed,s=void 0!==u&&u,c=e.resultType,l=void 0===c?"array":c,f=e.handleErrors,d=void 0!==f&&f,h=void 0;switch(d?(n.JsonParser=new o.JsonParser(r,!0),r=n.JsonParser.getSonicErrors()):s||(n.JsonParser=new o.JsonParser(r),r.meta&&(h=r.meta),r=n.JsonParser.getSonicItems(l)),n._resultsHandler){case"events":n._resultsEventEmitter({eventName:"StoneJS."+t,result:r,meta:h,callback:a,isError:d})}},this.getSonicTypes=function(){return n._sonicTypes},this.updateToken=function(e){n._Server.setToken(e)},this.getToken=function(){return n._Server.getCurrentToken()},this.retrieveToken=function(){return n._Server.getToken()},this.sonicQuery=function(e,t){var r=e.url,o=e.pageNumber,i=void 0===o?1:o,a=e.pageSize,u=void 0===a?100:a,s=e.limit,c=void 0===s?100:s,l={eventName:"sonicQuery",callback:t,result:null};n._Server.sonicQuery({url:r,pageNumber:i,pageSize:u,limit:c}).then(function(e){l.result=e}).catch(function(e){l.result=e,l.handleErrors=!0}).finally(function(){n._handleResults(l)})},this.getServerTime=function(e){var t={eventName:"getServerTime",resultType:"object",callback:e,result:null};n._Server.getServerTime().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getChannels=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.filters,u=void 0===a?null:a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d,v=arguments[1],p={eventName:"getChannels",callback:v,result:null};n._Server.getChannels({decorators:r,query:i,filters:u,pageNumber:c,pageSize:f,limit:h}).then(function(e){p.result=e}).catch(function(e){p.result=e,p.handleErrors=!0}).finally(function(){n._handleResults(p)})},this.getChannelById=function(e,t){var r=e.channelId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getChannelById",resultType:"object",callback:t,result:null};n._Server.getChannelById({channelId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getChannelByAlternateId=function(e,t){var r=e.channelAlternateId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getChannelByAlternateId",resultType:"object",callback:t,result:null};n._Server.getChannelByAlternateId({channelAlternateId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getChannelsByQuery=function(e,t){var r=e.query,o=e.limit,i=void 0===o?100:o,a={eventName:"getChannelsByQuery",callback:t,result:null};n._Server.getChannelsByQuery({query:r,limit:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getShows=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.sort,u=void 0===a?"name":a,s=e.filters,c=void 0===s?null:s,l=e.pageNumber,f=void 0===l?1:l,d=e.pageSize,h=void 0===d?100:d,v=e.limit,p=void 0===v?100:v,g=arguments[1],y={eventName:"getShows",callback:g,result:null};n._Server.getShows({decorators:r,query:i,sort:u,filters:c,pageNumber:f,pageSize:h,limit:p}).then(function(e){y.result=e}).catch(function(e){y.result=e,y.handleErrors=!0}).finally(function(){n._handleResults(y)})},this.getMostPopularShows=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.sort,u=void 0===a?"views.lastWeek":a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d,v=arguments[1],p={eventName:"getMostPopularShows",callback:v,result:null};n._Server.getMostPopularShows({decorators:r,sort:u,query:i,pageNumber:c,pageSize:f,limit:h}).then(function(e){p.result=e}).catch(function(e){p.result=e,p.handleErrors=!0}).finally(function(){n._handleResults(p)})},this.getLastAddedShows=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.pageNumber,u=void 0===a?1:a,s=e.pageSize,c=void 0===s?100:s,l=e.limit,f=void 0===l?100:l,d=arguments[1],h={eventName:"getLastAddedShows",callback:d,result:null};n._Server.getLastAddedShows({decorators:r,query:i,pageNumber:u,pageSize:c,limit:f}).then(function(e){h.result=e}).catch(function(e){h.result=e,h.handleErrors=!0}).finally(function(){n._handleResults(h)})},this.getShowsByChannelId=function(e,t){var r=e.channelId,o=e.decorators,i=void 0===o?null:o,a=e.pageNumber,u=void 0===a?1:a,s=e.pageSize,c=void 0===s?100:s,l=e.limit,f=void 0===l?100:l,d={eventName:"getShowsByChannelId",callback:t,result:null};n._Server.getShowsByChannelId({channelId:r,decorators:i,pageNumber:u,pageSize:c,limit:f}).then(function(e){d.result=e}).catch(function(e){d.result=e,d.handleErrors=!0}).finally(function(){n._handleResults(d)})},this.getMostPopularShowsByChannelId=function(e,t){var r=e.channelId,o=e.sort,i=void 0===o?"views.lastWeek":o,a=e.decorators,u=void 0===a?null:a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d,v={eventName:"getMostPopularShowsByChannelId",callback:t,result:null};n._Server.getMostPopularShowsByChannelId({channelId:r,sort:i,decorators:u,pageNumber:c,pageSize:f,limit:h}).then(function(e){v.result=e}).catch(function(e){v.result=e,v.handleErrors=!0}).finally(function(){n._handleResults(v)})},this.getShowsByGenreId=function(e,t){var r=e.genreId,o=e.decorators,i=void 0===o?null:o,a=e.pageNumber,u=void 0===a?1:a,s=e.pageSize,c=void 0===s?100:s,l=e.limit,f=void 0===l?100:l,d={eventName:"getShowsByGenreId",callback:t,result:null};n._Server.getShowsByGenreId({genreId:r,decorators:i,pageNumber:u,pageSize:c,limit:f}).then(function(e){d.result=e}).catch(function(e){d.result=e,d.handleErrors=!0}).finally(function(){n._handleResults(d)})},this.getMostPopularShowsByGenreId=function(e,t){var r=e.genreId,o=e.sort,i=void 0===o?"views.lastWeek":o,a=e.decorators,u=void 0===a?null:a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d,v={eventName:"getMostPopularShowsByGenreId",callback:t,result:null};n._Server.getMostPopularShowsByGenreId({genreId:r,sort:i,decorators:u,pageNumber:c,pageSize:f,limit:h}).then(function(e){v.result=e}).catch(function(e){v.result=e,v.handleErrors=!0}).finally(function(){n._handleResults(v)})},this.getShowById=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getShowById",resultType:"object",callback:t,result:null};n._Server.getShowById({showId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getShowByAlternateId=function(e,t){var r=e.showAlternateId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getShowByAlternateId",resultType:"object",callback:t,result:null};n._Server.getShowByAlternateId({showAlternateId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getShowsByQuery=function(e,t){var r=e.query,o=e.limit,i=void 0===o?100:o,a={eventName:"getShowsByQuery",callback:t,result:null};n._Server.getShowsByQuery({query:r,limit:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getVideos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.sort,u=void 0===a?"name":a,s=e.filters,c=void 0===s?null:s,l=e.pageNumber,f=void 0===l?1:l,d=e.pageSize,h=void 0===d?100:d,v=e.limit,p=void 0===v?100:v,g=arguments[1],y={eventName:"getVideos",callback:g,result:null};n._Server.getVideos({decorators:r,query:i,sort:u,filters:c,pageNumber:f,pageSize:h,limit:p}).then(function(e){y.result=e}).catch(function(e){y.result=e,y.handleErrors=!0}).finally(function(){n._handleResults(y)})},this.getLastAddedVideos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.filters,u=void 0===a?null:a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d,v=arguments[1],p={eventName:"getLastAddedVideos",callback:v,result:null};n._Server.getLastAddedVideos({decorators:r,query:i,filters:u,pageNumber:c,pageSize:f,limit:h}).then(function(e){p.result=e}).catch(function(e){p.result=e,p.handleErrors=!0}).finally(function(){n._handleResults(p)})},this.getEpisodesByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"-seasonNumber,-episodeNumber":s,l=e.filters,f=void 0===l?null:l,d=e.bingeWatching,h=void 0!==d&&d,v=e.pageNumber,p=void 0===v?1:v,g=e.pageSize,y=void 0===g?100:g,m=e.limit,b=void 0===m?100:m,_={eventName:"getEpisodesByShowId",callback:t,result:null};h&&(c="-seasonNumber,episodeNumber"),n._Server.getEpisodesByShowId({showId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:p,pageSize:y,limit:b}).then(function(e){_.result=e}).catch(function(e){_.result=e,_.handleErrors=!0}).finally(function(){n._handleResults(_)})},this.getTrailersByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"-seasonNumber,-episodeNumber":s,l=e.filters,f=void 0===l?null:l,d=e.bingeWatching,h=void 0!==d&&d,v=e.pageNumber,p=void 0===v?1:v,g=e.pageSize,y=void 0===g?100:g,m=e.limit,b=void 0===m?100:m,_={eventName:"getTrailersByShowId",callback:t,result:null};h&&(c="-seasonNumber,episodeNumber"),n._Server.getTrailersByShowId({showId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:p,pageSize:y,limit:b}).then(function(e){_.result=e}).catch(function(e){_.result=e,_.handleErrors=!0}).finally(function(){n._handleResults(_)})},this.getClipsByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"-seasonNumber,episodeNumber":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getClipsByShowId",callback:t,result:null};n._Server.getClipsByShowId({showId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getLivesByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"-seasonNumber,episodeNumber":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getLivesByShowId",callback:t,result:null};n._Server.getLivesByShowId({showId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getVideosByVideoType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.videoType,r=void 0===t?"EPISODE":t,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"name":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m=arguments[1],b={eventName:"getVideosByVideoType",callback:m,result:null};n._Server.getVideosByVideoType({videoType:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){b.result=e}).catch(function(e){b.result=e,b.handleErrors=!0}).finally(function(){n._handleResults(b)})},this.getVideosByChannelId=function(e,t){var r=e.channelId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"name":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getVideosByChannelId",callback:t,result:null};n._Server.getVideosByChannelId({channelId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getMostPopularVideosByChannelId=function(e,t){var r=e.channelId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"views.lastWeek":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getMostPopularVideosByChannelId",callback:t,result:null};n._Server.getMostPopularVideosByChannelId({channelId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getLastAddedVideosByChannelId=function(e,t){var r=e.channelId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"-publishStart":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getLastAddedVideosByChannelId",callback:t,result:null};n._Server.getLastAddedVideosByChannelId({channelId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getVideosByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"name":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getVideosByShowId",callback:t,result:null};n._Server.getVideosByShowId({showId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getMostPopularVideosByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"views.lastWeek":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getMostPopularVideosByShowId",callback:t,result:null};n._Server.getMostPopularVideosByShowId({showId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getLastAddedVideosByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"-publishStart":s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={eventName:"getLastAddedVideosByShowId",callback:t,result:null};n._Server.getLastAddedVideosByShowId({showId:r,decorators:i,query:u,filters:f,sort:c,pageNumber:h,pageSize:p,limit:y}).then(function(e){m.result=e}).catch(function(e){m.result=e,m.handleErrors=!0}).finally(function(){n._handleResults(m)})},this.getVideosByGenreId=function(e,t){var r=e.genreId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"name":s,l=e.pageNumber,f=void 0===l?1:l,d=e.pageSize,h=void 0===d?100:d,v=e.limit,p=void 0===v?100:v,g={eventName:"getVideosByGenreId",callback:t,result:null};n._Server.getVideosByGenreId({genreId:r,decorators:i,query:u,sort:c,pageNumber:f,pageSize:h,limit:p}).then(function(e){g.result=e}).catch(function(e){g.result=e,g.handleErrors=!0}).finally(function(){n._handleResults(g)})},this.getMostPopularVideosByGenreId=function(e,t){var r=e.genreId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"views.lastWeek":s,l=e.pageNumber,f=void 0===l?1:l,d=e.pageSize,h=void 0===d?100:d,v=e.limit,p=void 0===v?100:v,g={eventName:"getMostPopularVideosByGenreId",callback:t,result:null};n._Server.getMostPopularVideosByGenreId({genreId:r,decorators:i,query:u,sort:c,pageNumber:f,pageSize:h,limit:p}).then(function(e){g.result=e}).catch(function(e){g.result=e,g.handleErrors=!0}).finally(function(){n._handleResults(g)})},this.getLastAddedVideosByGenreId=function(e,t){var r=e.genreId,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.sort,c=void 0===s?"-publishStart":s,l=e.pageNumber,f=void 0===l?1:l,d=e.pageSize,h=void 0===d?100:d,v=e.limit,p=void 0===v?100:v,g={eventName:"getLastAddedVideosByGenreId",callback:t,result:null};n._Server.getLastAddedVideosByGenreId({genreId:r,decorators:i,query:u,sort:c,pageNumber:f,pageSize:h,limit:p}).then(function(e){g.result=e}).catch(function(e){g.result=e,g.handleErrors=!0}).finally(function(){n._handleResults(g)})},this.getVideoById=function(e,t){var r=e.videoId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getVideoById",resultType:"object",callback:t,result:null};n._Server.getVideoById({videoId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getVideoByShowSlugVideoSlug=function(e,t){var r=e.showSlug,o=e.videoSlug,i=e.decorators,a=void 0===i?null:i,u={eventName:"getVideoByShowSlugVideoSlug",resultType:"object",callback:t,result:null};n._Server.getVideoByShowSlugVideoSlug({showSlug:r,videoSlug:o,decorators:a}).then(function(e){u.result=e}).catch(function(e){u.result=e,u.handleErrors=!0}).finally(function(){n._handleResults(u)})},this.getVideosByQuery=function(e,t){var r=e.query,o=e.limit,i=void 0===o?100:o,a={eventName:"getVideosByQuery",callback:t,result:null};n._Server.getVideosByQuery({query:r,limit:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getGenres=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=void 0===t?null:t,o=e.filters,i=void 0===o?null:o,a=e.pageNumber,u=void 0===a?1:a,s=e.pageSize,c=void 0===s?100:s,l=e.limit,f=void 0===l?100:l,d=arguments[1],h={eventName:"getGenres",callback:d,result:null};n._Server.getGenres({query:r,filters:i,pageNumber:u,pageSize:c,limit:f}).then(function(e){h.result=e}).catch(function(e){h.result=e,h.handleErrors=!0}).finally(function(){n._handleResults(h)})},this.getGenreById=function(e,t){var r=e.genreId,o={eventName:"getGenreById",resultType:"object",callback:t,result:null};n._Server.getGenreById({genreId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getGenreByAlternateId=function(e,t){var r=e.genreAlternateId,o={eventName:"getGenreByAlternateId",resultType:"object",callback:t,result:null};n._Server.getGenreByAlternateId({genreAlternateId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getGenresByQuery=function(e,t){var r=e.query,o=e.limit,i=void 0===o?100:o,a={eventName:"getGenresByQuery",callback:t,result:null};n._Server.getGenresByQuery({query:r,limit:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getNextEpisode=function(e,t){var r=e.videoId,o={eventName:"getNextEpisode",resultType:"object",callback:t,result:null};n._Server.getNextEpisode({videoId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getNextClip=function(e,t){var r=e.videoId,o={eventName:"getNextClip",resultType:"object",callback:t,result:null};n._Server.getNextClip({videoId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function()his.getNextPlaylistVideo=function(e,t){e.videoId},this.getImagesUrls=function(e){var t=e.images,r=e.w,o=void 0===r?null:r,i=e.h,a=void 0===i?null:i,u=e.cc,s=void 0===u?null:u,c=e.cs,l=void 0===c?null:c,f=e.q,d=void 0===f?75:f,h=e.p,v=void 0===h||h,p=e.f,g=void 0===p?"jpg":p,y=e.blurFactor,m=void 0===y?null:y,b=e.overlay,_=void 0===b?null:b;return n._Server.getImagesUrls({images:t,w:o,h:a,cc:s,cs:l,q:d,p:v,f:g,blurFactor:m,overlay:_})},this.getConfigById=function(e,t){var r=e.configId,o={eventName:"getConfigById",resultType:"object",callback:t,result:null};n._Server.getConfigById({configId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getConfigByAlias=function(e,t){var r=e.configAlias,o={eventName:"getConfigByAlias",resultType:"object",callback:t,result:null};n._Server.getConfigByAlias({configAlias:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getCollectionById=function(e,t){var r=e.collectionId,o=e.decorators,i=void 0===o?null:o,a=e.itemsPageNumber,u=void 0===a?null:a,s=e.itemsPageSize,c=void 0===s?null:s,l={eventName:"getCollectionById",resultType:"object",callback:t,result:null};n._Server.getCollectionById({collectionId:r,decorators:i,itemsPageNumber:u,itemsPageSize:c}).then(function(e){l.result=e}).catch(function(e){l.result=e,l.handleErrors=!0}).finally(function(){n._handleResults(l)})},this.getCollectionByAlternateId=function(e,t){var r=e.collectionAlternateId,o=e.decorators,i=void 0===o?null:o,a=e.itemsPageNumber,u=void 0===a?null:a,s=e.itemsPageSize,c=void 0===s?null:s,l={eventName:"getCollectionByAlternateId",resultType:"object",callback:t,result:null};n._Server.getCollectionByAlternateId({collectionAlternateId:r,decorators:i,itemsPageNumber:u,itemsPageSize:c}).then(function(e){l.result=e}).catch(function(e){l.result=e,l.handleErrors=!0}).finally(function(){n._handleResults(l)})},this.getCollectionsByChannelId=function(e,t){var r=e.channelId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getCollectionsByChannelId",callback:t,result:null};n._Server.getCollectionsByChannelId({channelId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getCollectionsByShowId=function(e,t){var r=e.showId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getCollectionsByShowId",callback:t,result:null};n._Server.getCollectionsByShowId({showId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getCollectionsByVideoId=function(e,t){var r=e.videoId,o=e.decorators,i=void 0===o?null:o,a={eventName:"getCollectionsByVideoId",callback:t,result:null};n._Server.getCollectionsByVideoId({videoId:r,decorators:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getCollectionsByQuery=function(e,t){var r=e.query,o=e.hints,i=void 0===o?[]:o,a=e.decorators,u=void 0===a?null:a,s={eventName:"getCollectionsByQuery",callback:t,result:null};n._Server.getCollectionsByQuery({query:r,hints:i,decorators:u}).then(function(e){s.result=e}).catch(function(e){s.result=e,s.handleErrors=!0}).finally(function(){n._handleResults(s)})},this.getPageById=function(e,t){var r=e.pageId,o={eventName:"getPageById",resultType:"object",callback:t,result:null};n._Server.getPageById({pageId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getPageByAlternateId=function(e,t){var r=e.pageAlternateId,o={eventName:"getPageByAlternateId",resultType:"object",callback:t,result:null};n._Server.getPageByAlternateId({pageAlternateId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getLinkById=function(e,t){var r=e.linkId,o={eventName:"getLinkById",resultType:"object",callback:t,result:null};n._Server.getLinkById({linkId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getLinkByAlternateId=function(e,t){var r=e.linkAlternateId,o={eventName:"getLinkByAlternateId",resultType:"object",callback:t,result:null};n._Server.getLinkByAlternateId({linkAlternateId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getLinksByChannelId=function(e,t){var r=e.channelId,o={eventName:"getLinksByChannelId",callback:t,result:null};n._Server.getLinksByChannelId({channelId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getLinksByShowId=function(e,t){var r=e.showId,o={eventName:"getLinksByShowId",callback:t,result:null};n._Server.getLinksByShowId({showId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getLinksByVideoId=function(e,t){var r=e.videoId,o={eventName:"getLinksByVideoId",callback:t,result:null};n._Server.getLinksByVideoId({videoId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getLinksByQuery=function(e,t){var r=e.query,o=e.hints,i=void 0===o?[]:o,a={eventName:"getLinksByQuery",callback:t,result:null};n._Server.getLinksByQuery({query:r,hints:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getArticleById=function(e,t){var r=e.articleId,o=e.hints,i=void 0===o?[]:o,a={eventName:"getArticleById",resultType:"object",callback:t,result:null};n._Server.getArticleById({articleId:r,hints:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getArticleByAlternateId=function(e,t){var r=e.articleAlternateId,o=e.hints,i=void 0===o?[]:o,a={eventName:"getArticleByAlternateId",resultType:"object",callback:t,result:null};n._Server.getArticleByAlternateId({articleAlternateId:r,hints:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getRouteByPath=function(e,t){var r=e.routePath,o=e.decorators,i=void 0===o?null:o,a=e.itemsPageNumber,u=void 0===a?null:a,s=e.itemsPageSize,c=void 0===s?null:s,l={eventName:"getRouteByPath",resultType:"object",callback:t,result:null};n._Server.getRouteByPath({routePath:r,decorators:i,itemsPageNumber:u,itemsPageSize:c}).then(function(e){l.result=e}).catch(function(e){l.result=e,l.handleErrors=!0}).finally(function(){n._handleResults(l)})},this.getVideoPlaybackInfo=function(e,t){var r=e.videoId,o=e.apiVersion,i=void 0===o?"v2":o,a=e.deviceInfo,u=void 0===a?void 0:a,s=e.wisteriaProperties,c=void 0===s?void 0:s,l={eventName:"getVideoPlaybackInfo",resultType:"object",callback:t,result:null};n._Server.getVideoPlaybackInfo({videoId:r,apiVersion:i,deviceInfo:u,wisteriaProperties:c}).then(function(e){l.result=e}).catch(function(e){l.result=e,l.handleErrors=!0}).finally(function(){n._handleResults(l)})},this.getChannelPlaybackInfo=function(e,t){var r=e.channelId,o=e.apiVersion,i=void 0===o?"v2":o,a=e.deviceInfo,u=void 0===a?void 0:a,s=e.wisteriaProperties,c=void 0===s?void 0:s,l={eventName:"getChannelPlaybackInfo",resultType:"object",callback:t,result:null};n._Server.getChannelPlaybackInfo({channelId:r,apiVersion:i,deviceInfo:u,wisteriaProperties:c}).then(function(e){l.result=e}).catch(function(e){l.result=e,l.handleErrors=!0}).finally(function(){n._handleResults(l)})},this.getUserPlaybackHistory=function(e){var t={eventName:"getUserPlaybackHistory",callback:e,result:null};n._Server.getUserPlaybackHistory().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.deleteUserPlaybackHistory=function(e){var t={eventName:"deleteUserPlaybackHistory",resultType:"object",callback:e,result:null};n._Server.deleteUserPlaybackHistory().then(function(){t.result={historyDelete:!0},t.parsed=!0}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getVideoDownloadInfo=function(e,t){var r=e.videoId,o={eventName:"getVideoDownloadInfo",resultType:"object",callback:t,result:null};n._Server.getVideoDownloadInfo({videoId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.sendVideoPlaybackReport=function(e,t){var r=e.videoId,o=e.ms,i=void 0===o?null:o,a=e.method,u=void 0===a?"POST":a,s={eventName:"sendVideoPlaybackReport",callback:t,result:null};n._Server.sendVideoPlaybackReport({videoId:r,ms:i,method:u}).then(function(e){s.result=e}).catch(function(e){s.result=e,s.handleErrors=!0}).finally(function(){n._handleResults(s)})},this.sendChannelPlaybackReport=function(e,t){var r=e.channelId,o=e.method,i=void 0===o?"POST":o,a={eventName:"sendChannelPlaybackReport",callback:t,result:null};n._Server.sendChannelPlaybackReport({channelId:r,method:i}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.getUser=function(e){var t={eventName:"getUser",resultType:"object",callback:e,result:null};n._Server.getUser().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.updateUser=function(e,t){var r=e.selectedProfileId,o=void 0===r?null:r,i=e.newsletterPreference,a=void 0===i?null:i,u=e.firstName,s=void 0===u?null:u,c=e.lastName,l=void 0===c?null:c,f={eventName:"updateUser",callback:t,result:null};n._Server.updateUser({selectedProfileId:o,newsletterPreference:a,firstName:s,lastName:l}).then(function(e){f.result=e}).catch(function(e){f.result=e,f.handleErrors=!0}).finally(function(){n._handleResults(f)})},this.deleteUser=function(e){var t={eventName:"deleteUser",callback:e,result:null};n._Server.deleteUser().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getUserDetails=function(e){var t={eventName:"getUserDetails",resultType:"object",callback:e,result:null};n._Server.getUserDetails().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getUserProfileById=function(e,t){var r=e.profileId,o={eventName:"getUserProfileById",resultType:"object",callback:t,result:null};n._Server.getUserProfileById({profileId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getUserProfiles=function(e){var t={eventName:"getUserProfiles",callback:e,result:null};n._Server.getUserProfiles().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.addUserFavorite=function(e,t){var r=e.favoriteId,o=e.objectType,i={eventName:"addUserFavorite",callback:t,result:null};n._Server.addUserFavorite({favoriteId:r,objectType:o}).then(function(e){i.result=e}).catch(function(e){i.result=e,i.handleErrors=!0}).finally(function(){n._handleResults(i)})},this.removeUserFavorite=function(e,t){var r=e.favoriteId,o=e.objectType,i={eventName:"removeUserFavorite",callback:t,result:null};n._Server.removeUserFavorite({favoriteId:r,objectType:o}).then(function(e){i.result=e,i.parsed=!0}).catch(function(e){i.result=e,i.handleErrors=!0}).finally(function(){n._handleResults(i)})},this.getUserFavorites=function(e){var t={eventName:"getUserFavorites",callback:e,result:null};n._Server.getUserFavorites().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.addUserCustomAttributes=function(e,t){var r=e.customAttributesId,o=e.customAttributesObject,i={eventName:"addUserCustomAttributes",callback:t,result:null};n._Server.addUserCustomAttributes({customAttributesId:r,customAttributesObject:o}).then(function(e){i.result=e}).catch(function(e){i.result=e,i.handleErrors=!0}).finally(function(){n._handleResults(i)})},this.removeUserCustomAttributes=function(e,t){var r=e.customAttributesId,o={eventName:"removeUserCustomAttributes",callback:t,result:null};n._Server.removeUserCustomAttributes({customAttributesId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getUserCustomAttributes=function(e,t){var r=e.customAttributesId,o={eventName:"getUserCustomAttributes",callback:t,result:null};n._Server.getUserCustomAttributes({customAttributesId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.readUserNotification=function(e,t){var r=e.notificationId,o={eventName:"readUserNotification",callback:t,result:null};n._Server.readUserNotification({notificationId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.deleteUserNotification=function(e,t){var r=e.notificationId,o={eventName:"deleteUserNotification",callback:t,result:null};n._Server.deleteUserNotification({notificationId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getUserNotifications=function(e){var t={eventName:"getUserNotifications",callback:e,result:null};n._Server.getUserNotifications().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.exportUserData=function(e){var t={eventName:"exportUserData",callback:e,result:null};n._Server.exportUserData().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this._setAuthenticatedUser=function(e){n.JsonParser=new o.JsonParser(e);var t=n.JsonParser.getSonicItems("object");n.updateToken(t.token)},this.facebookUserLogin=function(e,t){var r=e.accessToken,o=e.implicitRegistration,i=void 0!==o&&o,a={eventName:"facebookUserLogin",resultType:"object",callback:t,result:null};n._Server.facebookUserLogin({accessToken:r,implicitRegistration:i}).then(function(e){return n._setAuthenticatedUser(e),n._Server.getUser()}).then(function(e){a.result=e}).catch(function(e){a.result=e,a.handleErrors=!0}).finally(function(){n._handleResults(a)})},this.credentialsUserLogin=function(e,t){var r=e.username,o=e.password,i={eventName:"credentialsUserLogin",resultType:"object",callback:t,result:null};n._Server.credentialsUserLogin({username:r,password:o}).then(function(e){return n._setAuthenticatedUser(e),n._Server.getUser()}).then(function(e){i.result=e}).catch(function(e){i.result=e,i.handleErrors=!0}).finally(function(){n._handleResults(i)})},this.logoutUser=function(e){var t={eventName:"logoutUser",resultType:"object",callback:e,result:null};n._Server.logoutUser().then(function(e){return n._setAuthenticatedUser(e),n._Server.getUser()}).then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.logoutEverywhereUser=function(e){var t={eventName:"logoutEverywhereUser",resultType:"object",callback:e,result:null};n._Server.logoutEverywhereUser().then(function(e){return n._setAuthenticatedUser(e),n._Server.getUser()}).then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.initiateUserCredentialsRegistration=function(e,t){var r=e.username,o={eventName:"initiateUserCredentialsRegistration",callback:t,result:null};n._Server.initiateUserCredentialsRegistration({username:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.sendUserValidationMail=function(e){var t={eventName:"sendUserValidationMail",callback:e,result:null};n._Server.sendUserValidationMail().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.validateUserEmail=function(e,t){var r=e.validationToken,o={eventName:"validateUserEmail",callback:t,result:null};n._Server.validateUserEmail({validationToken:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.setUserPassword=function(e,t){var r=e.password,o=e.validationToken,i={eventName:"setUserPassword",callback:t,result:null};n._Server.setUserPassword({password:r,validationToken:o}).then(function(e){i.result=e}).catch(function(e){i.result=e,i.handleErrors=!0}).finally(function(){n._handleResults(i)})},this.requestUserPasswordReset=function(e,t){var r=e.username,o={eventName:"requestUserPasswordReset",callback:t,result:null};n._Server.requestUserPasswordReset({username:r}).then(function(e){o.result=e,o.parsed=!0}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.changeUserPassword=function(e,t){var r=e.newPassword,o=e.currentPassword,i={eventName:"changeUserPassword",callback:t,result:null};n._Server.changeUserPassword({newPassword:r,currentPassword:o}).then(function(e){i.result=e}).catch(function(e){i.result=e,i.handleErrors=!0}).finally(function(){n._handleResults(i)})},this.resetUserPassword=function(e,t){var r=e.newPassword,o=e.passwordResetToken,i={eventName:"resetUserPassword",callback:t,result:null};n._Server.resetUserPassword({newPassword:r,passwordResetToken:o}).then(function(e){i.result=e}).catch(function(e){i.result=e,i.handleErrors=!0}).finally(function(){n._handleResults(i)})},this.validateUserPasswordResetToken=function(e,t){var r=e.passwordResetToken,o={eventName:"validateUserPasswordResetToken",callback:t,result:null};n._Server.validateUserPasswordResetToken({passwordResetToken:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.deviceLinkingInitiate=function(e){var t={eventName:"deviceLinkingInitiate",resultType:"object",callback:e,result:null};n._Server.deviceLinkingInitiate().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.deviceLinkingConnect=function(e,t){var r=e.linkingCode,o={eventName:"deviceLinkingConnect",resultType:"object",callback:t,result:null};n._Server.deviceLinkingConnect({linkingCode:r}).then(function(e){o.result=e,o.parsed=!0}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.deviceLinkingLogin=function(e){var t={eventName:"deviceLinkingLogin",resultType:"object",callback:e,result:null};n._Server.deviceLinkingLogin().then(function(e){var r="status"in e&&"statusCode"in e&&204==e.statusCode;r||n._setAuthenticatedUser(e),t.result={continuePolling:r,authenticated:!r},t.parsed=!0}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.campaignCode,r=void 0===t?null:t,o=e.filters,i=void 0===o?null:o,a=arguments[1],u={eventName:"getProducts",callback:a,result:null};n._Server.getProducts({campaignCode:r,filters:i}).then(function(e){u.result=e}).catch(function(e){u.result=e,u.handleErrors=!0}).finally(function(){n._handleResults(u)})},this.getProductById=function(e,t){var r=e.productId,o=e.campaignCode,i=void 0===o?null:o,a=e.filters,u=void 0===a?null:a,s={eventName:"getProductById",resultType:"object",callback:t,result:null};n._Server.getProductById({productId:r,campaignCode:i,filters:u}).then(function(e){s.result=e}).catch(function(e){s.result=e,s.handleErrors=!0}).finally(function(){n._handleResults(s)})},this.getPricePlan=function(e,t){var r=e.pricePlanId,o={eventName:"getPricePlan",resultType:"object",callback:t,result:null};n._Server.getPricePlan({pricePlanId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getCampaigns=function(e,t){var r=e.campaignCode,o={eventName:"getCampaigns",callback:t,result:null};n._Server.getCampaigns({campaignCode:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getSubscriptions=function(e){var t={eventName:"getSubscriptions",callback:e,result:null};n._Server.getSubscriptions().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.cancelSubscription=function(e,t){var r=e.subscriptionId,o={eventName:"cancelSubscription",callback:t,result:null};n._Server.cancelSubscription({subscriptionId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.resumeSubscription=function(e,t){var r=e.subscriptionId,o={eventName:"resumeSubscription",callback:t,result:null};n._Server.resumeSubscription({subscriptionId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getSubscriptionUpgrades=function(e,t){var r=e.subscriptionId,o={eventName:"getSubscriptionUpgrades",callback:t,result:null};n._Server.getSubscriptionUpgrades({subscriptionId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getPaymentMethods=function(e){var t={eventName:"getPaymentMethods",callback:e,result:null};n._Server.getPaymentMethods().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getPaymentMethodById=function(e,t){var r=e.paymentMethodId,o={eventName:"getPaymentMethodById",resultType:"object",callback:t,result:null};n._Server.getPaymentMethodById({paymentMethodId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.addPaymentMethod=function(e,t){var r=e.paymentMethodData,o={eventName:"addPaymentMethod",resultType:"object",callback:t,result:null};n._Server.addPaymentMethod({paymentMethodData:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getPackages=function(e){var t={eventName:"getPackages",callback:e,result:null};n._Server.getPackages().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getTvListings=function(e,t){var r=e.channelId,o=e.startDate,i=void 0===o?"now":o,a=e.endDate,u=void 0===a?"now":a,s={eventName:"getTvListings",callback:t,result:null};n._Server.getTvListings({channelId:r,startDate:i,endDate:u}).then(function(e){s.result=e}).catch(function(e){s.result=e,s.handleErrors=!0}).finally(function(){n._handleResults(s)})},this.getShowIdEpisodeIdByTvListing=function(e,t){var r=e.channelId,i=e.mediaId,a=e.startDate,u=void 0===a?null:a,s=e.endDate,c=void 0===s?null:s,l={eventName:"getShowIdEpisodeIdByTvListing",resultType:"object",callback:t,result:null},f={showId:void 0,videoId:void 0},d=u,h=c;if(!d||!h){var v=new Date;d=new Date(v),h=new Date(v),d.setHours(v.getHours()-6),h.setHours(v.getHours()+6)}n._Server.getTvListings({channelId:r,startDate:u||d.toISOString(),endDate:c||h.toISOString()}).then(function(e){n.JsonParser=new o.JsonParser)||[]).find(function(e){return e.epgReference==i});t&&(f.showId=t.shovoid 0)}).then(function(){l.result=f,l.parsed=!0}).catch(function(e){l.result=e,l.handleErrors=!0}).finally(function(){n._handleResults(l)})},this.getTerms=function(e){var t={eventName:"getTerms",callback:e,result:null};n._Server.getTerms().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getTermsByKind=function(e,t){var r=e.termKind,o={eventName:"getTermsByKind",callback:t,result:null};n._Server.getTermsByKind({termKind:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getTermById=function(e,t){var r=e.termId,o={eventName:"getTermById",resultType:"object",callback:t,result:null};n._Server.getTermById({termId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getTermKinds=function(e){var t={eventName:"getTermKinds",callback:e,result:null};n._Server.getTermKinds().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getConsents=function(e){var t={eventName:"getConsents",callback:e,result:null};n._Server.getConsents().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.getConsentsByTermKind=function(e,t){var r=e.termKind,o={eventName:"getConsentsByTermKind",callback:t,result:null};n._Server.getConsentsByTermKind({termKind:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getConsentById=function(e,t){var r=e.consentId,o={eventName:"getConsentById",resultType:"object",callback:t,result:null};n._Server.getConsentById({consentId:r}).then(function(e){o.result=e}).catch(function(e){o.result=e,o.handleErrors=!0}).finally(function(){n._handleResults(o)})},this.getPendingTerms=function(e){var t={eventName:"getPendingTerms",callback:e,result:null};n._Server.getPendingTerms().then(function(e){t.result=e}).catch(function(e){t.result=e,t.handleErrors=!0}).finally(function(){n._handleResults(t)})},this.updateUserConsent=function(e,t){var r=e.termId,o=e.options,i=void 0===o?[]:o,a={eventName:"updateUserConsent",resultType:"object",callback:t,result:null};n._Server.updateUserConsent({termId:).catch(frors=!0}).finally(function(){n._handleResults(a)})},this.search=function(e,t){var r=e.query,i=e.limit,a=void 0===i?100:i,u={eventName:"search",resultType:"object",callback:t,result:null},s={results:{},errors:{}};n._Server.getChannelsByQuery({query:r,limit:a}).then(function(e){n.JsonParser=new o.JsonParser(e);var t=n.JsonParser.getSonicItems()||[];s.results.channels=t.constructor===Array?t:[t]}).catch(function(e){n.JsonParser=new o.JsonParser(e,!0);var t=n.JsonParser.getSonicErrors();s.errors.channels=t}).finally(function(){n._Server.getShowsByQuery({query:r,limit:a,sort:""}).then(function(e){n.JsonParser=new o.JsonParser(e);var t=n.JsonParser.getSonicItems()||[];s.results.shows=t.constructor===Array?t:[t]}).catch(function(e){n.JsonParser=new o.JsonParser(e,!0);var t=n.JsonParser.getSonicErrors();s.errors.shows=t}).finally(function(){n._Server.getVideosByQuery({query:r,limit:a,sort:""}).then(function(e){n.JsonParser=new o.JsonParser(e);var t=n.JsonParser.getSonicItems()||[];s.results.videos=t.constructor===Array?t:[t]}).catch(function(e){n.JsonParser=new o.JsonParser(e,!0);var t=n.JsonParser.getSonicErrors();s.errors.videos=t}).then(function(){n._Server.getGenresByQuery({query:r,limit:a,sort:""}).then(function(e){n.JsonParser=new o.JsonParser(e);var t=n.JsonParser.getSonicItems()||[];s.results.genres=t.constructor===Array?t:[t]}).catch(function(e){n.JsonParser=new o.JsonParser(e,!0);var t=n.JsonParser.getSonicErrors();s.errors.genres=t}).finally(function(){n._Server.getCollectionsByQuery({query:r,limit:a}).then(function(e){n.JsonParser=new o.JsonParser(e);var t=n.JsonParser.getSonicItems()||[];s.results.collections=t.constructor===Array?t:[t]}).catch(function(e){n.JsonParser=new o.JsonParser(e,!0);var t=n.JsonParser.getSonicErrors();s.errors.collections=t}).finally(function(){u.result=s,u.parsed=!0,n._handleResults(u)})})})})})},this.getListeners=function(){var e=[];return Object.keys(n).forEach(function(t){t.startsWith("_")||"fue,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Server=function e(t){var n=this,r=t.endpoint,o=t.realm,i=t.xhr,a=void 0===i?void 0:i,u=t.clientId,s=void 0===u?void 0:u,c=t.discoParams,l=void 0===c?void 0:c,f=t.deviceInfo,d=void 0===f?void 0:f,h=t.token,v=void 0===h?void 0:h,p=t.syndication,g=void 0===p?void 0:p,y=t.initToken,m=void 0===y||y,b=t.xhrTimeout,_=void 0===b?0:b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var S=null;if(this.token=v,this.initToken=m,this.xhrTimeout=_,this.requestingToken=!1,this.appName="STONEJS",this.appVersion="1",this.deviceInfo=this.appName+"/"+this.appVersion+" ("+(d||"Unknown/Unknown; Unknown/Unknown; Unknown")+")",r&&r.constructor===String?this.endpoint=r:S="endpoint is undefined or type of endpoint is not string",o&&o.constructor===String?this.realm=o:S="realm is undefined or type of realm is not string",S)throw new Error(S);this.discoParams=l||"realm="+this.realm,this.clientId=s&&s.constructor===String?s:"WEB:UNKNOWN:"+this.appName+":"+this.appVersion,this._tokenRetry=0,this._syndication=g,this.XMLHttpRequest=a||XMLHttpRequest,this._buildurl=function(e){return e.constructor===String&&(e=e.split()),e.unshift(n.endpoint),e.join("")},this._updateParamsObject=function(e){var t=null;return e.constructor===Array?t=e.join():e.constructor===Object&&(t={},Object.keys(e).forEach(function(n){t[n]=e[n]})),t},this._buildQueryString=ft.keys(e).forEach(function(n){t.push(n+"="+e[n])}),"?"+(t=t.join("&"))},this._updateIncluded=function(e,t){var n=[];return t.forEach(function(t){var r=[t.type,t.id].join("#");e.includes(r)se=function(e){console.html(e),window.response=e},this._makeRequest=function(e){var t={data:[],included:[]},r=[],o=e.limit;e.pageSize=o<e.pageSize?o:e.pageSize;var i=e.pageSize,a=0,u=null;return o<=100?n._request(e,o):n._request(e).then(function(s){var c=o-i,l=[],f=s.included;for(a=s.meta.totalPages,t.data.push.apply(t.data,s.data),t.included.push.apply(t.included,n._updateIncluded(l,f)),e.pageNumber++;c>0&&e.pageNumber<=a;)c<=i&&(u=c),r.push(n._request(e,u)),e.pageNumber++,c-=i;return Promise.all(r).then(function(e){return e.forEach(function(e){t.data.push.apply(t.data,e.data),f=e.included,t.included.push.apply(t.included,n._updateIncluded(l,f))}),t}).then(function(e){return new Promise(function(t,n){t(e)})})}).catch(function(e){console.error("WE ARE FAILING")})},this._request=function(e,t){return n.token||n.requestingToken?new Promise(function(r,o){var i=new n.XMLHttpRequest;i.timeout=n.xhrTimeout;var a=e.body?JSON.stringify(e.body):null,u=e.method||"GET",s=Array.from(e.url);e.pageNumber&&e.pageSize&&s.push("&page[number]="+e.pageNumber,"&page[size]="+e.pageSize),i.open(u,n._buildurl(s)),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("X-disco-client",n.clientId),i.setRequestHeader("X-disco-params",n.discoParams),i.setRequestHeader("X-Device-Info",n.deviceInfo),n.token&&i.setRequestHeader("Authorization","Bearer "+n.token),i.onload=function(){if([200,201,204].includes(i.status)){var a=204==i.status?{status:"ok",statusCode:i.status}:JSON.parse(i.responseText);t&&t.constructor===Number&&a.data.constructor===Array&&(a.data=a.data.slice(0,t)),r(a)}else if([400,401,403,404,405,406,409].includes(i.status)){var u=JSON.parse(i.response);if("errors"in u&&u.errors.length>0){var s=u.errors[0];if("400"==s.status&&"invalid.token"==s.code&&n._tokenRetry<3)return n._handleTokenRetry().then(function(e){n.token=e.data.attributes.token,n._tokenRetry=0}).then(function(){r(n._request(e,t))});o(u.errors)}}else o(JSON.parse(i.response))},i.onerror=function(){var e=[{code:"net.error",detail:"generic network error",id:Math.random(),status:"500",type:"error"}];o(e)},i.ontimeout=function(e){var t=[{code:"net.error",detail:"network timeout error",id:Math.random(),status:"500",type:"error"}];o(t)},i.send(a)}):(n.requestingToken=!0,new Promise(function(r,o){return n.getToken().then(function(e){n.token=e.ingToken=!1}).then(function(){r(n._request(e,t))})}))},this._handleTokenRetry=function(){return n._tokenRetry++,n.token=null,n.getToken()},this.getToken=function(){var e=["/token?realm=",n.realm];return n._request({url:e})},this.getCurrentToken=function(){return n.token},this.setToken=function(e){e?n.updateToken(e):!n.token&&n.initToken&&(n.requestingToken=!0,n.getToken().then(function(e){n.token=e.data.attributes.token,n.requestingToken=!1}).catch(function(e){console.log(e)}))},this.updateToken=function(e){return!!e&&(n.token=e,!0)},this.sonicQuery=function(e){var t=e.url,r=e.pageNumber,o=void 0===r?1:r,i=e.pageSize,a=void 0===i?100:i,u=e.limit,s=void 0===u?100:u;return n._makeRequest({url:t,limit:s,pageNumber:o,pageSize:a})},this.getServerTime=function(){return n._request({url:"/content/serverTime/"})},this._handleChannels=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=void 0===t?"":t,o=e.channelAlternateId,i=void 0===o?"":o,a=e.sort,u=void 0===a?"name":a,s=e.decorators,c=void 0===s?null:s,l=e.query,f=void 0===l?null:l,d=e.filters,h=void 0===d?null:d,v=e.pageNumber,p=void 0===v?1:v,g=e.pageSize,y=void 0===g?100:g,m=e.limit,b=void 0===m?100:m,_={include:"images,contentPackages",decorators:"isFavourite,playbackAllowed"};u&&(_.sort=u),c&&(_.decorators=n._updateParamsObject(c)),h&&Object.assign(_,n._updateParamsObject(h)),f&&(_.query=f),n._syndication&&"/content/channels/"in n._syndication&&Object.assign(_,n._syndication["/content/channels/"]);var S=["/content/channels/",r||i,n._buildQueryString(_)];return n._makeRequest({url:S,limit:b,pageNumber:p,pageSize:y})},this.getChannels=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.filters,u=void 0===a?null:a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d;return n._handleChannels({decorators:r,query:i,filters:u,pageNumber:c,pageSize:f,limit:h})},this.getChannelById=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=e.decorators,o=void 0===r?null:r;return n._handleChannels({channelId:t,decorators:o})},this.getChannelByAlternateId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelAlternateId,r=e.decorators,o=void 0===r?null:r;return n._handleChannels({channelAlternateId:t,decorators:o})},this.getChannelsByQuery=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=e.limit,o=void 0===r?100:r,i=e.sort,a=void 0===i?"name":i;return n._handleChannels({query:t,limit:o,sort:a})},this._handleShows=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=void 0===t?"":t,o=e.showAlternateId,i=void 0===o?"":o,a=e.decorators,u=void 0===a?null:a,s=e.query,c=void 0===s?null:s,l=e.sort,f=void 0===l?"name":l,d=e.filters,h=void 0===d?null:d,v=e.pageNumber,p=void 0===v?1:v,g=e.pageSize,y=void 0===g?100:g,m=e.limit,b=void 0===m?100:m,_={include:"primaryChannel,primaryChannel.images,alternateChannels,genres,images,contentPackages,seasons,taxonomyNodes,taxonomyNodes.images,ratings,ratings.images,ratingDescriptors,ratingDescriptors.images",decorators:"isFavourite"};f&&(_.sort=f),u&&(_.decorators=n._updateParamsObject(u)),h&&Object.assign(_,n._updateParamsObject(h)),c&&(_.query=c),n._syndication&&"/content/shows/"in n._syndication&&Object.assign(_,n._syndication["/content/shows/"]);var S=["/content/shows/",r||i,n._buildQueryString(_)];return n._makeRequest({url:S,limit:b,pageNumber:p,pageSize:y})},this.getShows=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.sort,u=void 0===a?"name":a,s=e.filters,c=void 0===s?null:s,l=e.pageNumber,f=void 0===l?1:l,d=e.pageSize,h=void 0===d?100:d,v=e.limit,p=void 0===v?100:v;return n._handleShows({decorators:r,query:i,sort:u,filters:c,pageNumber:f,pageSize:h,limit:p})},this.getMostPopularShows=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.sort,i=void 0===o?"views.lastWeek":o,a=e.query,u=void 0===a?null:a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d;return n._handleShows({decorators:r,query:u,sort:i,pageNumber:c,pageSize:f,limit:h})},this.getLastAddedShows=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.pageNumber,u=void 0===a?1:a,s=e.pageSize,c=void 0===s?100:s,l=e.limit,f=void 0===l?100:l;return n._handleShows({decorators:r,query:i,sort:"-publishStart",pageNumber:u,pageSize:c,limit:f})},this._getShowsByChannel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=e.sort,o=void 0===r?"name":r,i=e.decorators,a=void 0===i?null:i,u=e.pageNumber,s=void 0===u?1:u,c=e.pageSize,l=void 0===c?100:c,f=e.limit,d=void 0===f?100:f;return n._handleShows({filters:{"filter[primaryChannel.id]":t},sort:o,decorators:a,pageNumber:s,pageSize:l,limit:d})},this.getShowsByChannelId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=e.decorators,o=void 0===r?null:r,i=e.pageNumber,a=void 0===i?1:i,u=e.pageSize,s=void 0===u?100:u,c=e.limit,l=void 0===c?100:c;return n._getShowsByChannel({channelId:t,decorators:o,pageNumber:a,pageSize:s,limit:l})},this.getMostPopularShowsByChannelId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=e.sort,o=void 0===r?"views.lastWeek":r,i=e.decorators,a=void 0===i?null:i,u=e.pageNumber,s=void 0===u?1:u,c=e.pageSize,l=void 0===c?100:c,f=e.limit,d=void 0===f?100:f;return n._getShowsByChannel({channelId:t,sort:o,decorators:a,pageNumber:s,pageSize:l,limit:d})},this._getShowsByGenre=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=e.sort,o=void 0===r?"name":r,i=e.decorators,a=void 0===i?null:i,u=e.pageNumber,s=void 0===u?1:u,c=e.pageSize,l=void 0===c?100:c,f=e.limit,d=void 0===f?100:f;return n._handleShows({filters:{"filter[genre.id]":t},sort:o,decorators:a,pageNumber:s,pageSize:l,limit:d})},this.getShowsByGenreId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=e.decorators,o=void 0===r?null:r,i=e.pageNumber,a=void 0===i?1:i,u=e.pageSize,s=void 0===u?100:u,c=e.limit,l=void 0===c?100:c;return n._getShowsByGenre({genreId:t,decorators:o,pageNumber:a,pageSize:s,limit:l})},this.getMostPopularShowsByGenreId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=e.sort,o=void 0===r?"views.lastWeek":r,i=e.decorators,a=void 0===i?null:i,u=e.pageNumber,s=void 0===u?1:u,c=e.pageSize,l=void 0===c?100:c,f=e.limit,d=void 0===f?100:f;return n._getShowsByGenre({genreId:t,sort:o,decorators:a,pageNumber:s,pageSize:l,limit:d})},this.getShowById=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r;return n._handleShows({showId:t,decorators:o})},this.getShowByAlternateId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showAlternateId,r=e.decorators,o=void 0===r?null:r;return n._handleShows({showAlternateId:t,decorators:o})},this.getShowsByQuery=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=e.limit,o=void 0===r?100:r,i=e.sort,a=void 0===i?"name":i;return n._handleShows({query:t,limit:o,sort:a})},this._handleVideos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.videoId,r=void 0===t?"":t,o=e.showSlug,i=void 0===o?"":o,a=e.videoSlug,u=void 0===a?"":a,s=e.decorators,c=void 0===s?null:s,l=e.query,f=void 0===l?null:l,d=e.sort,h=void 0===d?"name":d,v=e.filters,p=void 0===v?null:v,g=e.pageNumber,y=void 0===g?1:g,m=e.pageSize,b=void 0===m?100:m,_=e.limit,S=void 0===_?100:_,w={include:"primaryChannel,primaryChannel.images,alternateChannels,show,show.images,show.seasons,show.taxonomyNodes,show.taxonomyNodes.images,genres,images,contentPackages,season,taxonomyNodes,taxonomyNodes.images,parent,ratings,ratings.images,ratingDescriptors,ratingDescriptors.images",decorators:"viewingHistory,isFavorite,playbackAllowed"};h&&(w.sort=h),c&&(w.decorators=n._updateParamsObject(c)),p&&Object.assign(w,n._updateParamsObject(p)),f&&(w.query=f);var I=i&&u?[i,"/",u].join(""):"",P=r||I;n._syndication&&"/content/videos/"in n._syndication&&Object.assign(w,n._syndication["/content/videos/"]);var E=["/content/videos/",P,n._buildQueryString(w)];return n._makeRequest({url:E,limit:S,pageNumber:y,pageSize:b})},this.getVideos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.sort,u=void 0===a?"name":a,s=e.filters,c=void 0===s?null:s,l=e.pageNumber,f=void 0===l?1:l,d=e.pageSize,h=void 0===d?100:d,v=e.limit,p=void 0===v?100:v;return n._handleVideos({decorators:r,query:i,sort:u,filters:c,pageNumber:f,pageSize:h,limit:p})},this.getLastAddedVideos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decorators,r=void 0===t?null:t,o=e.query,i=void 0===o?null:o,a=e.filters,u=void 0===a?{}:a,s=e.pageNumber,c=void 0===s?1:s,l=e.pageSize,f=void 0===l?100:l,d=e.limit,h=void 0===d?100:d,v={"filter[videoType]":"EPISODE,CLIP"};return n._handleVideos({decorators:r,query:i,sort:"-publishStart",filters:Object.assign(v,u),pageNumber:c,pageSize:f,limit:h})},this.getEpisodesByShowId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"-seasonNumber,episodeNumber":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[show.id]":t,"filter[videoType]":"EPISODE"};return n._handleVideos({decorators:o,filters:Object.assign(y,s),query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getTrailersByShowId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"-seasonNumber,episodeNumber":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[show.id]":t,"filter[videoType]":"TRAILER"};return n._handleVideos({decorators:o,filters:Object.assign(y,s),query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getClipsByShowId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"-seasonNumber,episodeNumber":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[show.id]":t,"filter[videoType]":"CLIP"};return n._handleVideos({decorators:o,filters:Object.assign(y,s),query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getLivesByShowId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"-seasonNumber,episodeNumber":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[show.id]":t,"filter[videoType]":"LIVE"};return n._handleVideos({decorators:o,filters:Object.assign(y,s),query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getVideosByVideoType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.videoType,r=void 0===t?"EPISODE":t,o=e.decorators,i=void 0===o?null:o,a=e.query,u=void 0===a?null:a,s=e.filters,c=void 0===s?{}:s,l=e.sort,f=void 0===l?"name":l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={"filter[videoType]":r};return n._handleVideos({filters:Object.assign(m,c),decorators:i,query:u,sort:f,pageNumber:h,pageSize:p,limit:y})},this.getVideosByChannelId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"name":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[primaryChannel.id]":t};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getMostPopularVideosByChannelId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"views.lastWeek":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[primaryChannel.id]":t,"filter[videoType]":"EPISODE,CLIP,STANDALONE"};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getLastAddedVideosByChannelId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.channelId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"-publishStart":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[primaryChannel.id]":t,"filter[videoType]":"EPISODE,CLIP,STANDALONE"};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getVideosByShowId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"name":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[show.id]":t};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getMostPopularVideosByShowId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"views.lastWeek":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[show.id]":t,"filter[videoType]":"EPISODE,CLIP,STANDALONE"};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getLastAddedVideosByShowId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"-publishStart":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[show.id]":t,"filter[videoType]":"EPISODE,CLIP,STANDALONE"};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getVideosByGenreId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"name":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[genre.id]":t};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getMostPopularVideosByGenreId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.filters,s=void 0===u?{}:u,c=e.sort,l=void 0===c?"views.lastWeek":c,f=e.pageNumber,d=void 0===f?1:f,h=e.pageSize,v=void 0===h?100:h,p=e.limit,g=void 0===p?100:p,y={"filter[genre.id]":t,"filter[videoType]":"EPISODE,CLIP,STANDALONE"};return n._handleVideos({filters:Object.assign(y,s),decorators:o,query:a,sort:l,pageNumber:d,pageSize:v,limit:g})},this.getLastAddedVideosByGenreId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=e.decorators,o=void 0===r?null:r,i=e.query,a=void 0===i?null:i,u=e.sort,s=void 0===u?"-publishStart":u,c=e.pageNumber,l=void 0===c?1:c,f=e.pageSize,d=void 0===f?100:f,h=e.limit,v=void 0===h?100:h,p={"filter[genre.id]":t,"filter[videoType]":"EPISODE,CLIP,STANDALONE"};return n._handleVideos({filters:Object.assign(p,filters),decorators:o,query:a,sort:s,pageNumber:l,pageSize:d,limit:v})},this.getVideoById=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.videoId,r=e.decorators,o=void 0===r?null:r;return n._handleVideos({videoId:t,decorators:o})},this.getVideoByShowSlugVideoSlug=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showSlug,r=e.videoSlug,o=e.decorators,i=void 0===o?null:o;return n._handleVideos({showSlug:t,videoSlug:r,decorators:i})},this.getVideosByQuery=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=e.limit,o=void 0===r?100:r,i=e.sort,a=void 0===i?"name":i;return n._handleVideos({query:t,limit:o,sort:a})},this._getNextVideo=function(e){var t=e.videoId,r=e.videoType,o=void 0===r?"EPISODE":r,i="EPISODE"==o?1:100,a="EPISODE"==o?null:1,u={include:"primaryChannel,primaryChannel.images,alternateChannels,show,show.images,show.seasons,genres,tags,images,contentPackages,season,taxonomyNodes,taxonomyNodes.images,parent",decorators:"isFavorite,playbackAllowed",algorithm:"EPISODE"==o?"naturalOrder":"publishOrder"},s=["/content/videos/",t,"/next",n._buildQueryString(u)];return n._request({url:s,pageNumber:1,pageSize:i},a)},this.getNextEpisode=function(e){var t=e.videoId;return n._getNextVideo({videoId:t})},this.getNextClip=function(e){var t=e.videoId;return n._getNextVideo({videoINextPlaylistVideo=function(e){e.videoId;return!1},this._handleGenres=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=void 0===t?"":t,o=e.genreAlternateId,i=void 0===o?"":o,a=e.sort,u=void 0===a?"name":a,s=e.query,c=void 0===s?null:s,l=e.filters,f=void 0===l?null:l,d=e.pageNumber,h=void 0===d?1:d,v=e.pageSize,p=void 0===v?100:v,g=e.limit,y=void 0===g?100:g,m={include:"images"};u&&(m.sort=u),f&&f.forEach(function(e){Object.assign(m,e)}),c&&(m.query=c),n._syndication&&"/content/genres/"in n._syndication&&Object.assign(m,n._syndication["/content/genres/"]);var b=["/content/genres/",r||i,n._buildQueryString(m)];return n._makeRequest({url:b,limit:y,pageNumber:h,pageSize:p})},this.getGenreById=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreId,r=void 0===t?"":t;return n._handleGenres({genreId:r})},this.getGenreByAlternateId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.genreAlternateId,r=void 0===t?"":t;return n._handleGenres({genreAlternateId:r})},this.getGenres=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=void 0===t?null:t,o=e.filters,i=void 0===o?null:o,a=e.pageNumber,u=void 0===a?1:a,s=e.pageSize,c=void 0===s?100:s,l=e.limit,f=void 0===l?100:l;return n._handleGenres({query:r,filters:i,pageNumber:u,pageSize:c,limit:f})},this.getGenresByQuery=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,r=e.limit,o=void 0===r?100:r,i=e.sort,a=void 0===i?"name":i;return n._handleGenres({query:t,limit:o,sort:a})},this._handleImagesUrls=function(e){var t=e.images,r=void 0===t?[]:t,o=e.w,i=void 0===o?null:o,a=e.h,u=void 0===a?null:a,s=e.cc,c=void 0===s?null:s,l=e.cs,f=void 0===l?null:l,d=e.q,h=void 0===d?75:d,v=e.p,p=void 0===v||v,g=e.f,y=void 0===g?"jpg":g,m=e.blurFactor,b=void 0===m?null:m,_=e.overlay,S=void 0===_?null:_;if(r.constructor!==Array||r.length<1)throw new Error("Param {array} images is required and shoud have at least one image");var w=[],I={q:h,f:y};return i?I.w=i:u&&(I.h=u),"png"!==y&&(I.p=p),c&&f&&(I.cc=c,I.cs=f),b&&(I.bf=b),S&&S.url&&S.position&&(S.width||S.heigth)&&(I.ourl=S.url,I.opos=S.position,S.width?I.ow=S.width:S.height&&(I.oh=S.height)),r.forEach(function(e){w.push([e,n._buildQueryString(I)].join(""))}),w},this.getImagesUrls=function(e){var t=e.images,r=void 0===t?[]:t,o=e.w,i=void 0===o?null:o,a=e.h,u=void 0===a?null:a,s=e.cc,c=void 0===s?null:s,l=e.cs,f=void 0===l?null:l,d=e.q,h=void 0===d?75:d,v=e.p,p=void 0===v||v,g=e.f,y=void 0===g?"jpg":g,m=e.blurFactor,b=void 0===m?null:m,_=e.overlay,S=void 0===_?null:_;return n._handleImagesUrls({images:r,w:i,h:u,cc:c,cs:f,q:h,p:p,f:y,blurFactor:b,overlay:S})},this._handleConfigs=function(e){var t=e.configId,r=void 0===t?"":t,o=e.configAlias,i=["/cms/configs/",r||(void 0===o?"":o)];return n._request({url:i})},this.getConfigById=function(e){var t=e.configId;return n._handleConfigs({configId:t})},this.getConfigByAlias=function(e){var t=e.configAlias;return n._handleConfigs({configAlias:t})},this._handleCollections=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collectionId,r=void 0===t?"":t,o=e.collectionAlternateId,i=void 0===o?"":o,a=e.collectionByContent,u=void 0===a?null:a,s=e.query,c=void 0===s?null:s,l=e.hints,f=void 0===l?[]:l,d=e.decorators,h=void 0===d?null:d,v=e.itemsPageNumber,p=void 0===v?null:v,g=e.itemsPageSize,y=void 0===g?null:g,m={include:"default",decorators:"isFavorite"};h&&(m.decorators=n._updateParamsObject(h)),c&&(m.query=c),f&&f.constructor===Array&&f.length>0&&(m["filter[hint]"]=f.join()),p&&y&&(m["page[items.number]"]=p,m["page[items.size]"]=y),n._syndication&&"/cms/collections/"in n._syndication&&Object.assign(m,n._syndication["/cms/collections/"]);var b=u&&u.contentType&&u.contentId?[u.contentType,"/",u.contentId].join(""):r||i,_=["/cms/collections/",b,n._buildQueryString(m)];return n._request({url:_})},this.getCollectionById=function(e){var t=e.collectionId,r=e.decorators,o=void 0===r?null:r,i=e.itemsPageNumber,a=void 0===i?null:i,u=e.itemsPageSize,s=void 0===u?null:u;return n._handleCollections({collectionId:t,decorators:o,itemsPageNumber:a,itemsPageSize:s})},this.getCollectionByAlternateId=function(e){var t=e.collectionAlternateId,r=e.decorators,o=void 0===r?null:r,i=e.itemsPageNumber,a=void 0===i?null:i,u=e.itemsPageSize,s=void 0===u?null:u;return n._handleCollections({collectionAlternateId:t,decorators:o,itemsPageNumber:a,itemsPageSize:s})},this.getCollectionsByChannelId=function(e){var t=e.channelId,r=e.decorators,o=void 0===r?null:r;return n._handleCollections({collectionByContent:{contentType:"channel",contentId:t},decorators:o})},this.getCollectionsByShowId=function(e){var t=e.showId,r=e.decorators,o=void 0===r?null:r;return n._handleCollections({collectionByContent:{contentType:"show",contentId:t},decorators:o})},this.getCollectionsByVideoId=function(e){var t=e.videoId,r=e.decorators,o=void 0===r?null:r;return n._handleCollections({collectionByContent:{contentType:"video",contentId:t},decorators:o})},this.getCollectionsByQuery=function(e){var t=e.query,r=e.hints,o=void 0===r?[]:r,i=e.decorators,a=void 0===i?null:i;return n._handleCollections({query:t,hints:o,decorators:a})},this._handleLinks=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.linkId,r=void 0===t?"":t,o=e.linkAlternateId,i=void 0===o?"":o,a=e.linkByContent,u=void 0===a?null:a,s=e.query,c=void 0===s?null:s,l=e.hints,f=void 0===l?[]:l,d={include:"default",decorators:"isFavorite"};c&&(d.query=c),f&&f.constructor===Array&&f.length>0&&(d["filter[hint]"]=f.join());var h=u&&u.contentType&&u.contentId?[u.contentType,"/",u.contentId].join(""):r||i,v=["/cms/links/",h,n._buildQueryString(d)];return n._request({url:v})},this.getLinkById=function(e){var t=e.linkId;return n._handleLinks({linkId:t})},this.getLinkByAlternateId=function(e){var t=e.linkAlternateId;return n._handleLinks({linkAlternateId:t})},this.getLinksByChannelId=function(e){var t=e.channelId;return n._handleLinks({linkByContent:{contentType:"channel",contentId:t}})},this.getLinksByShowId=function(e){var t=e.showId;return n._handleLinks({linkByContent:{contentType:"show",contentId:t}})},this.getLinksByVideoId=function(e){var t=e.videoId;return n._handleLinks({linkByContent:{contentType:"video",contentId:t}})},this.getLinksByQuery=function(e){var t=e.query,r=e.hints,o=void 0===r?[]:r;return n._handleLinks({query:t,hints:o})},this._handlePages=function(e){var t=e.pageId,r=void 0===t?"":t,o=e.pageAlternateId,i=["/cms/pages/",r||(void 0===o?"":o),n._buildQueryString({include:"default"})];return n._request({url:i})},this.getPageById=function(e){var t=e.pageId;return n._handlePages({pageId:t})},this.getPageByAlternateId=function(e){var t=e.pageAlternateId;return n._handlePages({pageAlternateId:t})},this._handleArticles=function(e){var t=e.articleId,r=void 0===t?"":t,o=e.articleAlternateId,i=void 0===o?"":o,a=e.hints,u=void 0===a?[]:a,s={include:"default",decorators:"articleBodyRichText.richTextHtml"};u&&u.constructor===Array&&u.length>0&&(s["filter[hint]"]=u.join());var c=["/cms/articles/",r||i,,n._buildQueryString(s)];return n._request({url:c})},this.getArticleById=function(e){var t=e.articleId,r=e.hints,o=void 0===r?[]:r;return n._handleArticles({articleId:t,hints:o})},this.getArticleByAlternateId=function(e){var t=e.articleAlternateId,r=e.hints,o=void 0===r?[]:r;return n._handleArticles({articleAlternateId:t,hints:o})},this._handleRoutes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.routePath,r=void 0===t?"":t,o=e.decorators,i=void 0===o?null:o,a=e.itemsPageNumber,u=void 0===a?null:a,s=e.itemsPageSize,c=void 0===s?null:s,l={include:"default",decorators:"isFavorite,viewingHistory,playbackAllowed"};i&&(l.decorators=n._updateParamsObject(i)),u&&c&&(l["page[items.number]"]=u,l["page[items.size]"]=c);var f=["/cms/routes/",r="/"==r[0]?r.slice(1):r,n._buildQueryString(l)];return n._request({url:f})},this.getRouteByPath=function(e){var t=e.routePath,r=e.decorators,o=void 0===r?null:r,i=e.itemsPageNumber,a=void 0===i?null:i,u=e.itemsPageSize,s=void 0===u?null:u;return n._handleRoutes({routePath:t,decorators:o,itemsPageNumber:a,itemsPageSize:s})},this._handlePlaybackInfo=function(e){var t=e.contentId,r=e.playbackInfoType,o=e.apiVersion,i=void 0===o?"v2":o,a=e.deviceInfo,u=void 0===a?{adBlocker:!1,drmSupported:!0}:a,s=e.wisteriaProperties,c=void 0===s?{}:s;if(!t||!r)throw new Error("Params {number} contentId and {string} playbackInfoType are both required");if(!["v2","v3"].includes(i))throw new Error("Param apiVersion must be v2 (default) or v3");var l={url:void 0,method:"v3"==i?"POST":"GET"};return"v3"==i?(l.url=["/playback/v3/",r],l.body={deviceInfo:u,wisteriaProperties:c},"videoPlaybackInfo"==r?l.body.videoId=t.toString():l.body.channelId=t.toString()):l.url=["/playback/",r,"/",t,"?usePreAuth=true"],n._request(l)},this.getVideoPlaybackInfo=function(e){var t=e.videoId,r=e.apiVersion,o=void 0===r?"v2":r,i=e.deviceInfo,a=void 0===i?void 0:i,u=e.wisteriaProperties,s=void 0===u?void 0:u;return n._handlePlaybackInfo({contentId:t,playbackInfoType:"videoPlaybackInfo",apiVersion:o,deviceInfo:a,wisteriaProperties:s})},this.getChannelPlaybackInfo=function(e){var t=e.channelId,r=e.apiVersion,o=void 0===r?"v2":r,i=e.deviceInfo,a=void 0===i?void 0:i,u=e.wisteriaProperties,s=void 0===u?void 0:u;return n._handlePlaybackInfo({contentId:t,playbackInfoType:"channelPlaybackInfo",apiVersion:o,deviceInfo:a,wisteriaProperties:s})},this._handleUserPlaybackHistory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.method,r=void 0===t?"GET":t,o=e.helperfunction,i=void 0===o?null:o,a=["/playback/history"];return n._request({url:a,method:r}).then(function(e){if(i){var t=[];return e.data.forEach(function(e){var n=e.relationships.video.data.id;t.push(n)}),i({decorators:["viewingHis.error("UNABLE TO HANDLE USER serPlaybackHistory({helperfunction:n.getVideos})},this.deleteUserPlaybackHistory=function(){return n._handleUserPlaybackHistory({method:"DELETE"})},this.getVideoDownloadInfo=function(e){var t=["playback/videoDownloadInfo/",e.videoId];return n._request({url:t})},this._handlePlaybackReport=function(e){var t=e.contentId,r=e.contentType,o=e.ms,i=void 0===o?null:o,a=e.method,u=void 0===a?"POST":a;if(!t||!r)throw new Error("Params {number} contentId and {string} contentType are both required");var s=["/playback/report/",r,"/",t];return null!=i&&s.push("?position="+i),n._request({url:s,method:u})},this.sendVideoPlaybackReport=function(e){var t=e.videoId,r=e.ms,o=void 0===r?null:r,i=e.method,a=void 0===i?"POST":i;return n._handlePlaybackReport({contentId:t,contentType:"video",ms:o,method:a})},this.sendChannelPlaybackReport=function(e){var t=e.channelId,r=e.method,o=void 0===r?"POST":r;return n._handlePlaybackReport({contentId:t,contentType:"channel",method:o})},this._handleUser=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.userData,r=void 0===t?null:t,o=e.method,i=void 0===o?"GET":o,a=["/users/me"],u=r||null;return i=i||"GET",n._request({url:a,method:i,body:u})},this.getUser=function(){return n._handleUser()},this.updateUser=function(e){var t=e.selectedProfileId,r=void 0===t?null:t,o=e.newsletterPreference,i=void 0===o?null:o,a=e.firstName,u=void 0===a?null:a,s=e.lastName,c=void 0===s?null:s,l={};return r&&(l.selectedProfileId=r),i&&(l.newsletterPreference=i),u&&(l.firstName=u),c&&(l.lastName=c),n._handleUser({userData:l,method:"PATCH"})},this.deleteUser=function(){return n._handleUser({method:"DELETE"})},this.getUserDetails=function(){return n._request({url:["/users/me/details"]})},this._handleUserProfiles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.profileId,r=void 0===t?"":t,o=["/users/me/profiles/",r];return n._request({url:o})},this.getUserProfileById=function(e){var t=e.profileId;return n._handleUserProfiles({profileId:t})},this.getUserProfiles=function(){return n._handleUserProfiles()},this._handleUserFavorites=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.favoriteId,r=void 0===t?null:t,o=e.objectType,i=void 0===o?null:o,a=e.method,u=void 0===a?"GET":a;if("GET"!=u&&!r)throw new Error("Param {string} favoriteId is required");if("GET"!=u&&!i)throw new Error("Param {string} objectType is required");var s=["/users/me/favorites/"];if("GET"==u){var c={include:"default"};s.push(n._buildQueryString(c))}else s.push(i,"/",r);return n._request({url:s,method:u})},this.addUserFavorite=function(e){var t=e.favoriteId,r=e.objectType;return n._handleUserFavorites({favoriteId:t,objectType:r,method:"POST"})},this.removeUserFavorite=function(e){var t=e.favoriteId,r=e.objectType;return n._handleUserFavorites({favoriteId:t,objectType:r,method:"DELETE"})},this.getUserFavorites=function(){return n._handleUserFavorites()},this._handleUserCustomAttributes=function(e){var t=e.customAttributesId,r=e.customAttributesObject,o=void 0===r?null:r,i=e.method,a=void 0===i?"GET":i;if(!t)throw new Error("Param {string} customAttributesId is required");if("PUT"==a&&o.constructor!==Object)throw new Error("Params customAttributes must be an Object");var u=["/users/me/customAttributes/",t];return n._request({url:u,method:a,body:o})},this.addUserCustomAttributes=function(e){var t=e.customAttributesId,r=e.customAttributesObject;return n._handleUserCustomAttributes({customAttributesId:t,customAttributesObject:r,method:"PUT"})},this.removeUserCustomAttributes=function(e){var t=e.customAttributesId;return n._handleUserCustomAttributes({customAttributesId:t,method:"DELETE"})},this.getUserCustomAttributes=function(e){var t=e.customAttributesId;return n._handleUserCustomAttributes({customAttributesId:t})},this._handleUserNotifications=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.notificationId,r=void 0===t?null:t,o=e.method,i=void 0===o?"GET":o;if("GET"!=i&&!r)throw new Error("Param {string} notificationId is required");var a=["/users/me/notifications/"],u=null;return"GET"!=i&&(a.push(r),"PATCH"==i&&(u={data:{id:r,type:"notification",attributes:{read:!0}}})),n._request({url:a,method:i,body:u})},this.readUserNotification=function(e){var t=e.notificationId;return n._handleUserNotifications({notificationId:t,method:"PATCH"})},this.deleteUserNotification=function(e){var t=e.notificationId;return n._handleUserNotifications({notificationId:t,method:"DELETE"})},this.getUserNotifications=function(){return n._handleUserNotifications()},this.exportUserData=function(){return n._request({url:["/users/me/allData"]})},this._handleUserLogin=function(e){var t=e.userData;if(!t)throw new Error("Param {Object} userData required");return n._request({url:["/login"],method:"POST",body:t})},this.facebookUserLogin=function(e){var t=e.accessToken,r=e.implicitRegistration,o={implicitRegistration:void 0!==r&&r,credentials:{accessToken:t}};return n._handleUserLogin({userData:o})},this.credentialsUserLogin=function(e){var t={credentials:{username:e.username,password:e.password}};return n._handleUserLogin({userData:t})},this._handleUserLogout=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.logoutType,r=void 0===t?"logout":t,o=["/",r];return n._request({url:o,method:"POST"})},this.logoutUser=function(){returnandleUserLogout({logoutType:"logoutEverywhere"})},this.initiateUserCredentialsRegistration=function(e){var t={username:e.username,addProvider:!1};return n._request({url:["/users/registration/initiate"],method:"POST",body:t})},this.sendUserValidationMail=function(){return n._request({url:["/users/registration/sendValidationEmail"],method:"POST"})},this.validateUserEmail=function(e){var t={"email-validation-string":e.validationToken},r=["/users/registration/validateEmailVerificationString",n._buildQueryString(t)];return n._request({url:r})},this.setUserPassword=function(e){var t={password:e.password,emailValidationString:e.validationToken};return n._request({url:["/users/registration/setPasswordAndLogin"],method:"POST",body:t})},this.requestUserPasswordReset=function(e){var t={username:e.username};return n._request({url:["/users/registration/resetPassword"],method:"POST",body:t})},this._handleUserPasswordChange=function(e){var t=e.newPassword,r=e.passwordResetToken,o=void 0===r?null:r,i=e.currentPassword,a=void 0===i?null:i,u={password:t};return o?u.passwordResetToken=o:a&&(u.currentPassword=a),n._request({url:["/users/registration/changePassword"],method:"POST",body:u})},this.changeUserPassword=function(e){var t=e.newPassword,r=e.currentPassword;return n._handleUserPasswordChange({passwasswordChange({password:t,passwordResetToken:r})},this.validateUserPasswordResetToken=function(e){var t={"reset-password-token":e.passwordResetToken},r=["/users/registration/validateResetPasswordToken",n._buildQueryString(t)];return n._request({url:r})},this.deviceLinkingInitiate=function(){return n._request({url:["/authentication/linkDevice/initiate"],method:"POST"})},this.deviceLinkingConnect=function(e){var t={linkingCode:e.linkingCode};return n._request({url:["/authentication/linkDevice/connect"uthentication/linkDevice/login"],method:"POST"})},this._handleProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.productId,r=void 0===t?"":t,o=e.campaignCode,i=void 0===o?null:o,a=e.filters,u=void 0===a?null:a,s={include:"package,pricePlan.campaign,pricePlan,pricePlan.parentPricePlan,pricePlan.body",decorators:"articleBodyRichText.richTextHtml"};i&&(s.campaignCode=i),u&&Object.assign(s,n._updateParamsObject(u));var c=["/monetization/products/",r,n._buildQueryString(s)];return n._request({url:c})},this.getProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.campaignCode,r=void 0===t?null:t,o=e.filters,i=void 0===o?null:o;return n._handleProducts({campaignCode:r,filters:i})},this.getProductById=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.productId,r=e.campaignCode,o=void 0===r?null:r,i=e.filters,a=void 0===i?null:i;return n._handleProducts({productId:t,campaignCode:o,filters:a})},this.getPricePlan=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pricePlanId,r={include:"product,campaign"},o=["/monetization/priceplans/",t,n._buildQueryString(r)];return n._request({url:o})},this.getCampaigns=function(e){var t={campaignCode:e.campaignCode},r=["/monetization/campaigns",n._buildQueryString(t)];return n._request({url:r})},this._handleSubcriptions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.subscriptionId,r=void 0===t?null:t,o=e.action,i=void 0===o?null:o,a=["/monetization/subscriptions"],u="GET";if(r||i)if(a.push("/",r,"/",i),"listUpgrades"==i){var s={include:"pricePlan,pricePlan.campaign"};a.push(n._buildQueryString(s))}else metod="POST";else{var c={include:"paymentMethod,pricePlan,product,externalVoucher"};a.push(n._buildQueryString(c))}return n._request({url:a,method:u})},this.getSubscriptions=function(){return n._handleSubcriptions()},this.cancelSubscription=function(e){var t=e.subscriptionId;return n._handleSubcriptions({subscriptionId:t,action:"cancel"})},this.resumeSubscription=function(e){var t=e.subscriptionId;return n._handleSubcriptions({subscriptionId:t,action:"resume"})},this.getSubscriptionUpgrades=function(e){var t=e.subscriptionId;return n._handleSubcriptions({subscriptionId:t,action:"listUpgrades"})},this._handlePaymentMethods=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.paymentMethodId,r=void 0===t?"":t,o=e.paymentMethodData,i=void 0===o?null:o,a=e.method,u=void 0===a?"GET":a,s=["/monetization/paymentMethods"],c=i||null;return u=u||"GET",r&&s.push("/",r),n._request({url:s,method:u,body:c})},this.getPaymentMethods=function(){return n._handlePaymentMethods()},this.getPaymentMethodById=function(e){var t=e.paymentMethodId;return n._handlePaymentMethods({paymentMethodId:t})},this.addPaymentMethod=function(e){var t=e.paymentMethodData;return n._handlePaymentMethods({paymentMethodData:t,method:"POST"})},this.getPackages=function(){return n._request({url:["/packages"]})},this.getTvListings=function(e){var t=e.channelId,r=e.startDate,o=void 0===r?"now":r,i=e.endDate,a={startDate:o,endDate:void 0===i?"now":i},u=["/tvlistings/v2/channels/",t,n._buildQueryString(a)];return n._request({url:u})},this.getPendingTerms=function(){var e=["/legal/pendingTerms",n._buildQueryString({decorators:"body.richTextHtml",include:"kind"})];return n._request({url:e})},this._handleTerms=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.termId,r=void 0===t?"":t,o=e.termKind,i=void 0===o?"":o,a={decorators:"body.richTextHtml",include:"kind,consent"};i&&(a["filter[kind.alias]"]=i);var u=["/legal/terms/",r,n._buildQueryString(a)];return n._request({url:u})},this.getTerms=function(){return n._handleTerms()},this.getTermsByKind=function(e){var t=e.termKind;return n._handleTerms({termKind:t})},this.getTermById=function(e){var t=e.termId;ret){return n._request({url:["/legal/termKinds/"]})},this._handleConsents=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.consentId,r=void 0===t?"":t,o=e.termKind,i=void 0===o?"":o,a={include:"term,term.kind"};i&&(a["filter[term.kind.alias]"]=i);var u=["/legal/consents/",r,n._buildQueryString(a)];return n._request({url:u})},this.getConsents=function(){return n._handleConsents()},this.getConsentsByTermKind=function(e){var t=e.termKind;return n._onsentId;return n._handleConsents({consentId:t})},this.updateUserConsent=function(e){var t=e.termId,r=e.options,o={data:{type:"consent",attributes:{consentOptions:void 0===r?[]:r},relationships:{term:{data:{id:t,type:"term"}}}}};return n._request({url:["/legal/consents/"],method:"POST",body:o})},this.setToken(this.token)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(314);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JsonParser=void 0;var r=n(315);function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.JsonParser=function e(t){var n=this,u=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(a(this,e),!t)throw new Error("JsonParser requires json data to parse");this.jsonData=u?null:t,this.jsonErrors=u?t:null,this.typeMappings={channel:{class:r.Channel},show:{class:r.Show},video:{class:r.Video},taxonomyNode:{class:r.TaxonomyNode},image:{class:r.Image},link:{class:r.Link},genre:{class:r.Genre},collection:{class:r.Collection},collectionItem:{class:r.CollectionItem},page:{class:r.Page},pageItem:{class:r.PageItem},article:{class:r.Article},route:{class:r.Route},season:{class:r.Season},package:{class:r.Package},tag:{class:r.Tag},videoView:{class:r.VideoView},videoPlaybackInfo:{class:r.VideoPlaybackInfo},channelPlaybackInfo:{class:r.ChannelPlaybackInfo},user:{class:r.User},profile:{class:r.Profile},linkingCode:{class:r.LinkingCode},config:{class:r.Config},notification:{class:function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,r.SonicItem),t}()},"favorites-list":{class:function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,r.SonicItem),t}()},tvlisting:{class:r.TvListing},consent:{class:r.Consent},term:{class:r.Term},termKind:{class:r.TermKind},product:{class:r.Product},pricePlan:{class:r.Priceplan},contentRating:{class:r.ContentRating},contentDescriptor:{class:r.ContentDescriptor},contentRatingSystem:{class:r.ContentRatingSystem},rawContent:{class:function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,r.SonicItem),t}()},serverTime:{class:function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,argumapply(this,arguments))}return i(t,r.SonicItem),t}()}},this.sonicErrors=[],this.sonicItems=[],this.includedItems={},this._mapToModel=function(e,t){return e=t in n.typeMappings?new n.typeMappings[t].class(ationships=function(e){return"relationships"in e},this._getItemKey=function(e,t){return[t,e.id].join("#")},this._getRelationshipsKeys=function(e){var t=[];return Object.keys(e).forEach(function(r){(e[r].data.cEach(function(e){t.push(n._getItemKey(e,e.type))})}),t},this._inIncludedItems=function(e,t){return t in n.includedItems&&e.id in n.includedItems[t]},this._addToIncludedItems=function(e,t){n.includedItems[t][e.id]=n._mapToModel(e,t)},this._getIncludedItem=function(e,t){return n._inIncludedItems(e,t)?n.includedItems[t][e.id]:n._mapToModel(e,t)},this._extractRelationships=function(e){var t={};return Object.keys(e).forEach(function(r){var o=e[r].data,i=o.constructor===Array?o.reduce(function(e,t){return e.push(n._getIncludedItem(t,t.type)),e},[]):n._getIncludedItem(o,o.type);t[r]=i}),t},this._extractIncludedItem=function(e,t,r){var o=e.type,i=e.id;o in n.includedItems||(n.includedItems[o]={});var a={id:i,type:o},u="attributes"in e?e.attributes:{};Object.assign(a,u),t&&Object.assign(a,t),n._addToIncludedItems(a,o),r.delete(n._getItemKey(e,o))},this._buildObjects=function(){if(n.jsonErrors)(n.jsonErrors.constructor===Array?n.jsonErrors:[n.jsonErrors]).forEach(function(e){e.type="error",e=new n.typeMappings.error.class(e),n.sonicErrors.push(e)});else if(n.jsonData){n.jsonData.included&&function(){window.inclu=n.includedItems;for(var e=n.jsonData.included,t=new Set(e.reduce(function(e,t){return e.push(n._getItemKey(t,t.type)),e},[]));e.length;){var r=e[0];if(n._itemHasRelationships(r))if(n._getRelationshipsKeys(r.relationships).some(function(e){return t.has(e)}))e.push(e.shift());else{var o=n._extractRelationships(r.relationships);n._extractIncludedItem(r,o,t),e.shift()}else n._extractIncludedItem(r,void 0,t),e.shift()}}();var e="";"data"in n.jsonData?e="data":"meta"in n.jsonData&&(e="meta"),(n.jsonData[e].constructor===Array?n.jsonData[e]:[n.jsonData[e]]).forEach(function(t){var r="data"==e?{id:t.id,type:t.type}:{id:null,type:"meta"};"attributes"in t&&Object.assign(r,t.attributes),"relationships"in t&&t.relationships&&Object.assign(r,n._extractRelationships(t.relationships)),r=n._mapToModel(r,t.type),n.sonicItems.push(r)})}},this.getSonicItems=function(e){return"array"==e?n.sonicItems:"object"==e?n.sonicItems[0]:n.sonicItems.length>1?etSonicErrors=function(){return n.sonicErrors[0]},this._buildObjects()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=n(316);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=n(317);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=n(318);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var u=n(319);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var s=n(320);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var c=n(321);Object.keys(c).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})});var l=n(322);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var f=n(323);Object.keys(f).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})});var d=n(324);Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})});var h=n(325);Object.keys(h).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return h[e]}})});var v=n(326);Object.keys(v).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return v[e]}})});var p=n(327);Object.keys(p).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})});var g=n(328);Object.keys(g).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return g[e]}})});var y=n(329);Object.keys(y).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})});var m=n(330);Object.keys(m).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return m[e]}})});var b=n(331);Object.keys(b).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return b[e]}})});var _=n(332);Object.keys(_).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return _[e]}})});var S=n(333);Object.keys(S).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return S[e]}})});var w=n(334);Object.keys(w).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return w[e]}})});var I=n(335);Object.keys(I).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return I[e]}})});var P=n(336);Object.keys(P).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return P[e]}})});var E=n(337);Object.keys(E).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return E[e]}})});var O=n(338);Object.keys(O).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return O[e]}})});var k=n(339);Object.keys(k).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return k[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Channel=void 0;var r=n(5);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getPoster=function(){return{src:n._poster&&n._poster.src?n._poster.src:n._default.src}},n.getThumbnail=function(){return{src:n._thumbnail&&n._thumbnail.src?n._thumbnail.src:null}},n.getLogo=function(){return{src:n._logo&&n._logo.src?n._logo.src:null}},n}return a(t,r.SonicItem),t}();!function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}a(t,r.SonicItem)}();t.Channel=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Show=void 0;var r=n(5);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getLandscapeThumbnail=function(){var e={src:n._default?n._default.src:null,printShowTitle:!0};return n._thumbnailWithLogolandscape?(e.src=n._thumbnailWithLogoLandscape.src,e.printShowTitle=!1):n._thumbnailLandscape?e.src=n._thumbnailLandscape.src:n._posterLandscape&&(e.src=n._posterLandscape.src),e},n.getPortraitThumbnail=function(){var e={src:n._default?n._default.src:null,printShowTitle:!0};return n._thumbnailWithLogoPortrait?(e.src=n._thumbnailWithLogoPortrait.src,e.printShowTitle=!1):n._thumbnailPortrait&&(e.src=n._thumbnailPortrait.src),e},n.getPoster=function(){var e={};return n._posterLandscape?(e.src=n._posterLandscape.src,e.useLogo=!!n._logo,e.printShowTitle=!n._logo):(e.src=n._default?n._default.src:null,e.useLogo=!!n._logo,e.printShowTitle=!n._logo),e},n.getLogo=function(){return{src:n._logo&&n._logo.src?n._logo.src:null}},n.isBingeWatching=function(){return!!n.tags&&n.tags.some(function(e){return"template:binge_watching"==e.name})},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Show=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Video=void 0;var r=n(5);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._hasParentShow=function(){return n.show.constructor==Array&&n.show.length>0},n._hasParentChannel=function(){return n.primaryChannel.constructor==Array&&n.primaryChannel.length>0},n._hasIdentifier=function(e){return n.identifiers.constructor==Object&&e in n.identifiers?n.identifiers[e]:null},n._checkVideoType=function(e){return n.videoType==e},n.hasDRM=function(){return n.drmEnabled},n.isLiveStream=function(){return n._checkVideoType("LIVE")},n.isTrailer=function(){return n._checkVideoType("TRAILER")},n.isEpisode=function(){return n._checkVideoType("EPISODE")},n.isClip=function(){return n._checkVideoType("CLIP")},n.parentShowId=function(){return n._hasParentShow()?n.show[0].id:null},n.parentShowName=function(){return n._hasParentShow()?n.show[0].name:null},n.parentChannelId=function(){return n._hasParentChannel()?n.primaryChannel[0].id:null},n.parentChannelName=function(){return n._hasParentChannel()?n.primaryChannel[0].name:null},n.freewheelId=function(){return n._hasIdentifier("freewheel")},n.analyticsId=function(){return n._hasIdentifier("analyticsId")},n.originalMediaId=function(){return n._hasIdentifier("originalMediaId")},n.getPoster=function(){return{src:n._default&&n._default.src?n._default.src:null}},n.getVideoPlayableWi{return t.package.toLowerCase()==e.toLowerCase()});if(!t)return!1;var r=new Date,o=new Date(t.playableStart),i=t.playableEnd?new Date(t.playableEnd):void 0;return{canPlay:i?r>=o&&r<=i:r>=o,playableStart:o,playableEnd:i}},n.isPlayable==n.getVideoPlayableWindow(e);return t&&t.canPlay})},n.isComiels.some(function(e){return"coming_soon"==e.name})},n.getLiveDescriptor=function(){if(n._checkVideoType("LIVE")){var e=void 0;return["Premium","Registered","Free"].forEach(function(t){var r=n.getVideoPlayableWindow(t);if(r&&!e){if((e=r).canPlay)return void(e.status="LIVE_NOW");var o=new Date;!e.playableStart||!e.playableEnd||o>=e.playableEnd?e.status="LIVE_ENDED":e.status=n.isComingSoon()?"LIVE_COMING_SOON":"LIVE_SCHEDULED"}}),e}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Video=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Image=void 0;var r=n(5);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Image=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Link=void 0;var r=n(5);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Link=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0;var r=n(5);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getValue=function(e){if(!e)return n.config;var t=e.split(".").reverse(),r=n.config[t.pop()];if(!r)return r;for(;t.length>0;){var o=t.pop();if(!(o.length>0))return;if(!(r=r[o]))return r}return r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Config=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Genre=void 0;var r=n(5);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getDefaultImage=function(){return{src:n._default&&n._default.src?n._default.src:null}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Genre=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CollectionItem=t.Collection=void 0;var r=n(5);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOu=function(e){!e.title&&e.name&&(e.title=e.name)},s=function(e,t){var n=t in e?e[t]:void 0;if(!n)return null;var r=function(e){return"type"!==e&&"id"!==e&&e!==t&&!e.startsWith("_")};for(var o in e){if(r(o))if("title"===o)n.name=e[o];else e[o]instanceof Function||(n[o]=e[o])}return n},c=function(e){var t=null;e.hints&&(e.hints.includes("episode-carousel")||e.hints.includes("playlist")?t="video":e.hints.includes("show-carousel")?t="show":(e.hints.includes("related-collection-container")||e.hints.includes("playlist-carousel"))&&(t="collection")),function(e,t){var n=[],r=[],o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;e&&t.push(e)},i=["channel","show","video","collection","link","image","rawContent","page","route","taxonomyNode"];e.items.forEach(function(e){if(t){if(t in e&&e[t].length>0){var n=s(e,t);o(n)}else if("image"in e&&e.image.length>0){var a=s(e,"image");o(a,r)}}else{var u=i.find(function(t){return t in e}),c=s(e,u);o(c)}}),e.items=n,e.images=r}(e,t)},l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.images=[],u(n),n.items?c(n):n.items=[],n}return a(t,r.SonicItem),t}(),f=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return u(n),n}return a(t,r.SonicItem),t}();t.Collection=l,t.CollectionItem=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageItem=t.Page=void 0;var r=n(5);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){var t=[],n=["collection","channel","show","video","collection","link",nction(e){var r=n.find(function(t){return t in e});!function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;e&&n.push(e)}(function(e,t){var n=t in e?e[t]:void 0;if(!n)return null;var r=function(e){return"type"!==e&&"id"!==e&&e!==t&&!e.startsWith("_")};for(var o in e)r(o)&&("title"===o?n.name=e[o]:n[o]=e[o]);return n}(e,r))}),e.items=t},s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.items&&u(n),n}return a(t,r.SonicItem),t}(),c=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,r.SonicItem),t}();t.Page=s,t.PageItem=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esMo.target&&e.target.length&&(e.target=e.target[0])},i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o(n),n.getTarget=function(){return n.target},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Route=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Article=void 0;var r=n(5);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getHtmlBody=function(){return n.body&&n.body.length>0&&n.body[0].richTextHtml?n.body[0].richTextHtml:void 0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Article=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Season=void 0;var r=n(5);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Season=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Package=void 0;var r=n(5);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Package=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tag=void 0;var r=n(5);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Tag=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VideoView=void 0;var r=n(5);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.VideoView=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TvListing=void 0;var r=n(5);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.localeStart=void 0,n.localeEnd=void 0,n.utcStart&&(n.localeStart=new Date(n.utcStart),n.duration&&(n.localeEnd=new Date(n.utcStart),n.localeEnd.setSeconds(n.localeEnd.getSeconds()+n.duration))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.TvListing=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Consent=t.TermBody=t.TermKind=t.Term=void 0;var r=n(5);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,r.SonicItem),t}(),s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.kind&&n.kind.constructor==Array&&1==n.kind.length&&(n.kind=n.kind[0]),n.body&&n.body.constructor==Array&&1==n.body.length&&(n.body=new c(n.body[0])),n}return a(t,r.SonicItem),t}(),c=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,r.SonicItem),t}(),l=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,r.SonicItem),t}();t.Term=s,t.TermKind=l,t.TermBody=c,t.Consent=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Profile=t.User=void 0;var r=n(5);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,r.SonicItem),t}(),s=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,r.SonicItem),t}();t.User=u,t.Profile=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Product=void 0;var r=n(5);var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Product=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.Priceplan=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkingCode=void 0;var r=n(5);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getCode=function(){return n.linkingCode},n.getTargetUrl=function(){return n.targetUrl},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.LinkingCode=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TaxonomyNode=vw TypeError("C!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getPoster=function(){return{src:n._default&&n._default.src?n._default.src:null}},n.getLogo=function(){return{srctypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.SonicItem),t}();t.TaxonomyNode=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContentRatingSystem=t.ContentDescriptor=t.ContentRating=void 0;var r=n(5);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getIcon=function(){return{src:n._default&&n._default.src?n._default.src:null}},n}return a(t,r.SonicItem),t}(),s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getIcon=function(){return{src:n._default&&n._default.src?n._default.src:null}},n}return a(t,r.SonicItem),t}(),c=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,r.SonicItem),t}();t.ContentRating=u,t.ContentDescriptor=s,t.ContentRatingSystem=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VideoPlapeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(e){e.protection=e.streaming.reduce(function(e,t){return{clearkeyEnabled:e.clearkeyEnabled||t.protection.clearkeyEnabled,drmEnabled:e.drmEnabled||t.protection.drmEnabled,drmToken:e.drmToken||t.protection.drmToken,schemes:e.schemse||t.protection.schemes}},{clearkeyEnabled:!1,drmEnabled:!1,drmTokuce(function(e,t){return e[t.type]={url:t.url},e},{})},s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Array.isArray(n.streaming)&&u(n),n}return a(t,r.SonicItem),t}(),c=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(tproto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,s),t}();t.ChannelPlaybackInfo=c,t.VideoPlaybackInfo=l}])});

/***/ }),

/***/ 8718:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*! @name videojs-contrib-eme @version 3.5.4 @license Apache-2.0 */
!function(e,t){ true?t(exports,__webpack_require__(6862),__webpack_require__(4450),__webpack_require__(7279)):0}(this,function(e,t,n,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,r(n UforEach(function(t){null===e[t]&&delete e[t]}),e},o=function(e,t,i,s){var o=function(e){var t=(new r.DOMParser).parseFromString(String.fromCharCode.apply(null,new Uint16Array(e)),"application/xml"),n=t.getElementsByTagName("HttpHeaders")[0],i={};if(n)for(var s=n.getElementsByTagName("name"),a=n.getElementsByTagName("value"),o=0;o<s.length;o++)i[s[o].childNodes[0].nodeValue]=a[o].childNodes[0].nodeValue;var c,u=t.getElementsByTagName("Challenge")[0];return u&&(c=r.atob(u.childNodes[0].nodeValue)),{headers:i,message:c}}(t),c=o.message,u=a(o.headers,i.emeHeaders,e.licenseHeaders);n.xhr({uri:e.url,method:"post",headers:u,body:c,responseType:"arraybuffer"},function(e,t,n){e?s(e):s(null,n)})},c=function(e){var t=e.mediaKeys,r=e.initDataType,i=e.initData,s=e.options,a=e.getLicense,o=e.removeSession,c=e.eventBus,u=t.createSession();return new Promise(function(e,t){u.addEventL){a(s,n.message).then(function(t){e(u.update(t))}).catch(function(e){t(e)})},!1),u.addEventListener("keystatusescugh details to know if this error is fatal.',e)}}),t&&u.close().then(function(){o(i)})},!1),u.generateRequest(r,i).catch(function(){t("Ungger("licenserequestattempted"),e?s(e):i(n)})})}},y=function(e,t){if("string"==typeof t&&(t={url:t}),!t.url&&!t.getLicense)throw new Error("Neither URL nor getLicense function provided to get license");return t.url&&!t.getLice?function(e){return function(t,n,r){o(e,n,t,r)}}(t):function(e){return function(t,r,i){var s=a({"Content-type":"application/octet-stream"},t.emeHeaders,e.licenseHeaders);n.xhr({uri:e.url,method:"POST",responseType:"arraybuffer",body:r,headers:s},function(e,t,n){e?i(e):i(null,n)})}}(t)),t},d=function(e){var t,n,r=e.video,i=e.initDataType,s=e.initData,a=e.keySystemAccess,o=e.options,d=e.removeSession,f=e.eventBus,m=Promise.resolve();void 0===r.mediaKeysObject&&(r.mediaKeystificate(o,function(n,r){n?i(n):(t=r,e())}):e(a)}).then(function(){return a.createMediaKeys()}).then(function(e){return function(e){var t=e.video,n=e.certificate,r=e.createdMediaKeys,i=e.options,s=e.getLicense,a=e.removeSession,o=e.eventBus;t.mediaKeysObject=r;var u=[];n&&u.push(r.setServerCertificate(n));for(var y=0;y<t.pendingSessionData.length;y++){var d=t.pendingSessionData[y];u.push(c({mediaKeys:t.mediaKeysObject,initDataType:d.initDataType,initData:d.initData,options:i,getLicense:s,removeSession:a,eventBus:o}))}return t.pendingSessionData=[],u.push(t.setMediaKeys(r)),Promise.all(u)}({video:r,certificate:t,createdMediaKeys:e,options:o,getLicense:u(n.ged to create and initialize a MediaKeys object")}));return m.then(function(){return function(e){var t=e.video,n=e.initDataType,r=e.initData,i=e.options,s=e.getLicense,a=e.removeSession,o=e.eventBus;return t.mediaKeysObject?c({mediaKeys:t.mediaKeysObject,initDataType:n,initData:r,options:i,getLicense:s,removeSession:a,eventBus:o}):(t.pendingSessionData.push({initDataType:n,initData:r}),Promise.resolve())}({video:r,initDataType:i,initData:s,options:o,getLicense:r.keySystem?u(y(r.keySystem,o.keySystems[r.keySystem]).geteLength).set(r),new Uint8Array(s,0,s.byteLength)},m=function(e,n){return s=n,r=String.fromCharCode.apply(null,new Uint16Array(s.buffer)),(i=t.createElement("a")).href=r,i.hostname;var r,i,s},l=function(e){var t=e.video,i=e.initData,s=e.options,o=e.eventBus,c=s.keySystems["com.apple.fps.1_0"],u=c.getCertificate||function(e){return function(t,r){var i=a(t.emeHeaders,e.certificateHeaders);n.xhr({uri:e.certificateUri,responseType:"arraybuffer",headers:i},function(e,t,n){e?r(e):r(null,new Uint8Array(n))})}}(c),y=c.getContentId||m,d=c.getLicense||function(e){return function(t,r,i,s){var o=a({"Content-type":"application/octet-stream"},t.emeHeaders,e.licenseHeaders);n.xhr({uri:e.licenseUri,method:"POST",responseType:"arraybuffer",body:i,headers:o},function(se(function(e,t){u(s,function(n,r){n?t(n):e(r)})}).then(function(e){return function(e){var t=e.video,n=e.contentId,i=e.initData,s=e.cert,a=e.options,o=e.getLicense,c=e.eventBus;return new Promise(function(e,u){if(!t.webkitKeys)try{t.webkitSetMediaKeys(new r.WebKitMediaKeys("com.apple.fps.1_0"))}catch(e){return void u("Could not create MediaKeys")}var y;try{y=t.webkitKeys.createSession("video/mp4",f({id:n,initData:i,cert:s}))}catch(e){return void u("Could not create key session")}y.attempted"),e?u(e):y.update(new Uint8Array(t))})}),y.addEventListener("webkitkeyadded",funror: code "+e.code+", systemCode "+e.systemCode)})})}({video:t,cert:e,initData:i,getLicense:d,options:s,contentId:y(s,i),eventBus:o})})},p=function(e,t,n,r){var i=e.msKeys.createSession("video/mp4",t);if(!i)throw new Error("Could not create key session.");i.addEventListener("mskeymessage",function(e){!function(e,t,n,r){var i=e.keySystems["com.microsoft.playready"];if("function"!=typeof i.getKey){"string"==typeof i?i={url:i}:"boolean"==typeo,type:"mskeyerror"}):t.update(new Uint8Array(n))};i.getLicense?i.getLicense(e,n.message.buffer,s):o(i,n.message.buffer,e,s)}ey: "+e,target:t,type:"mskeyerror"}):t.update+i.error.systemCode,target:i,typencti[n+)if(e[n].initData===t)return void e.splice(n,1)},h=function(e,t,n,i){if(!t||!t.keySystems)return Promise.resolve();var s,a,o=e.initData;return(s=t.keySystems,Object.keys(s).forEach(function(e){var t={},n=s[e].audioContentType,i=s[e].videoContentType;n&&(t.audioCapabilities=[{contentType:n}]),i&&(tn r.navigator.requestMediaKeySystemAccess(e,[t])}):r.navigons:t,removeSession:v.bind(null,n),eventBus:i}))})},k=function(e,t,n){return t.keySystems&&t.keySystems["com.apple.fps.1_0"]&&e.initData?l({video:e.target,initData:e.initData,options:t,eventBus:n}):Promise.resolve()},S=function(e,t,n,i){if(t.keySystems&&t]&&!n.reduce(function(e,t){return e||t.playready},!1)){var s=e.initData;t.keySystems["com.microsoft.playready"]&&t.keySystems["com.microsoft.playready"].pssh&&(s=t.keySystems["com.microsoft.playready"].pssh),s&&(n.push({playready:!0,initData:s}),function(e){var t=e.video,n=e.initData,i=e.options,s=e.eventBus;t.msKeys&&delete t.msKeys;try{t.msSetMediaKeys(new r.MSMediaKeys("com.microsoft.playready"))}catch(e){throw new Error("Unable to create media keys for PlayReady key system. Error: "+e.message)}p(t,n,i,s)}({vide nactiveSrc&&(e.eme.activeSrc=t,e.eme.sessions=[])},D=function(e){return function(t){var n=t?t.message||t:null;e.error({code:5,message:n})}},L=function(e){void 0===e&&(e={});var t=this,i=D(t);t.ready(function(){return function(e,t){"video"===e.$(".vjs-tech").tagName.toLowerCase()&&(w(e),r.WebKitMediakey",function(n){w(e),k(n,b(e),e.tech_).catch(t)}):r.M){w(e),h(n,b(e),e.eme.sessions,e.tech_).catch(t)}):r.MSMed{S(n,b(e),e.eme.sessions,e.tech_)}catch(e){"dispose",function(){e.tech_.off("msked",u),t.tech_.off("mskeyerror",u),s(e),a||i(e)}}},options:e}};(n.registerPlugin||n.plugin)("eme",L),e.hasSession=g,e.removeSession=v,e.handleEncryptedEvent=h,e.handleWebKitNeedKeyEvent=k,e.handleMsNeedKeyEvent=S,e.getOptions=b,e.setupSessions=w,e.emeErrorHandler=D,e.default=L,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ 3564:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! @name videojs-overlay @version 2.1.4 @license Apache-2.0 */
!function(t,e){ true?module.exports=e(__webpack_require__(4450),__webpack_retialised - super() hasn't been called");return t}t=t&&t.hasOwnProperty("default")?t.default:t,e=e&&e.hasOwnProperty("default")?e.default:e;var r={align:"top-left",class:"",content:"This overlay will show up while the video is playing",debug:!1,showBackground:!0,attachToControlBar:!1,overlays:[{start:"playing",end:"paused"}]},i=t.getComponent("Compgiion(t){return"string"==typeof t&&/^\S+$/.test(t)},d=function(r){var i,s;function d(t,e){var i;returnalid "start" option; expected number or string')}),["endListenction(e){return d.prototype[t].call(n(n(i)),e)}}),"timeupdate"===i.startEvent_&&i.on(t,"timeupdate",i.rewindListener_),i.debug('created, listening to "'+i.startEvent_+'" for "start" and "'+(i.endEvent_||"nothing")+'" for "end"'),i.hide(),i}s=r,(i=d).prototype=Object.create(s.prototype),i.prototype.constructor=i,i.__proto__=s;var l=d.prototype;return l.createEl=function(){var t=this.options_,n=t.content,r=t.showBackground?"vjs-overlay-background":"vjs-overlay-no-background",i=o.createEl("div",{className:"\n        vjs-overlay\n        vjs-overlay-"+t.align+"\n        "+t.class+"\n        "+r+"\n        vjs-hidden\n      "});return"string"==typeof n?i.innerHTML=n:n instanceof e.DocumentFragment?i.appendChild(n):o.appendContent(i,n),i},l.debug=function(){if(this.options_.debug){for(var e=t.log,n=e,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];e.hasOwnProperty(i[0])&&"function"==typeof e[i[0]]&&(n=e[i.shift()]),n.apply(void yer(),this.sta){var nplayer(),this.r(t)===n:(this.hasShownSinceSeek_=!0,t>=n):n===e},l.startListener_=function(t){var e=this.player().currentTime();this.sntTime();this.shouSinceSeek_=!1,this.hide())),this.previousTime_=e},d}(i);t.registerComponent("Overlay",d);var l=function(e){var n=this,i=t.mergeOptions(r,e);ArratrolBar&&n.controlBar.removeChild(t),t.dispose()});var o=i.overlays;delete i.overlays,this.overlays_=o.map(function(e){var r=t.mergeOptions(i,e),o="string"==typeof r.attachToControlBar||!0===r.attachToControlBar;if(!n.controls()||!n.controlBar)return n.addChild("overlay",r);if(o&&-1!==r.align.indexOf("bottom")){var s=n.controlBar.children()[0];if(void 0!==n.controlBar.getChild(r.attachToControlBar)&&(s=n.controlBar.getChild(r.attachToControlBar)),s){var a=n.controlBar.addChild("overlay",r);return n.controlBar.el().insertBefore(a.el(),s.el()),a}}var h=n.addChild("overlay",r);return n.el().insertBefore(h.el(),n.controlBar.el()),h})};return l.VERSION="2.1.4",s("overlay",l),l});


/***/ }),

/***/ 1465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * @license
 * Video.js 7.20.3 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/main/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/main/LICENSE>
 */
!function(e,t){ true?module.exports=t():0}(this,futu(t<=-1)&&(i[e]=i[e].slice(),i[e].splice(t,1),!0)},l={prefixed:!0},t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror","fullscreen"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"]],r=t[0],s=0;s<t.length;s++)if(t[s][1]in document){e=t[s];break}if(e){for(var o=0;o<e.length;oay.isAe;i++)t[i]=arguments[i];return a("debug",r,t)},n}("VIDEOJS"),p=h.createLogger,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__web,t){ret])}return e},t.apply(this,argum(function(e){e&&_(e,function(e,t){i[t]=e})eturn""}return i?i.getPropertyValue(t)||i[t]:""}var E=window.navigator&&window.navigator.userAgent||"",k=/AppleWebKit\/([\d.]+)/i.exec(E),C=k?parseFloat(k.pop()):null,I=/iPod/i.test(E),x=(jt=E.match(/OS (\]);return t&&i?parseFloat(e[1]+"."+e[2]):t||null}(),L=A&&P<5&&C<537,D=/Firefox/i.test(E),O=/Edg/i.test(E),R=!O&&(/Chrome/i.test(E)||/CriOS/i.test(E)),M=(zt=E.match(/(Chrome|CriOS)\/(\d+)/))&&zt[2]?parseFloat(zt[2]):null,N=Xt=!(Xt=(Xt=/MSIE\s(\d+)\.\d/.exec(E))&&parseFloat(Xt[1]))&&/Trident\/7.0/i.test(E)&&/rv:11.0/.test(E)?11:Xt,U=/Safari/i.test(E)&&!R&&!A&&!O,B=/Windows/i.test(E),F=Boolean(X()&&("ontouchstart"in window||window.navigator.maxTouchPoints||window.DocumentTouch&&window.document instanceof window.DocumentTouch)),j=/iPad/i.test(E)||U&&F&&!/iPhone/i.test(E),H=/iPhone/i.test(E)&&!j,q=H||j||I,V=(U||q)&&!R,W=Object.freeze({__proto__:null,IS_IPOD:I,IOS_VERSION:x,IS_ANDROID:A,ANDROID_VERSION:P,IS_NATIVE_ANDROID:L,IS_FIREFOX:D,IS_EDGE:O,IS_CHROME:R,CHROME_VERSION:M,IE_VERSION:N,IS_SAFARI:U,IS_WINDOWS:B,TOUCH_ENABLED:Ffunction X(){return document===window.d.button&&1===e.buttons))}var be,Te=Q("querySelector"),we=Q("querySelectorAll"),Se=Object.freeze({__proto__:null,isReal:X,isEl:K,isInFrame:Y,createEl:$,textContent:J,prependTo:Z,hasClass:ee,addClass:te,removeClass:ie,toggleClass:ne,setAttributes:re,getAttributes:ae,getAttribute:se,setAttribute:oe,removeAttribute:ue,blockTextSelection:le,unblockTextSelection:de,getBoundingClientRect:ce,findPosition:he,getPointerPosition:pe,isTextNode:fe,emptyEl:me,normalizeContent:ge,appendContent:ye,insertConte(){Ee=!0,window.removeEventListener("load",Ie)}X()&&("complete"===document.reyleSheet?e.styleSheet.cssTet&&(delete this.data[t],delete e[this.vdata].butventListener("test",null,e)}cael=function(){s.clearTimeout(o),o=null},e}function ze(){}var Xe,Ke=Object.freeze({__proto__:null,fixEvent:Me,on:Be,off:Fe,trigger:je,one:He,any:qe});ze.prototype.allowedEvents_={},ze.prototype.addEventListener=ze.prototype.on=function(e,t){var i=this.addEventListener;this.addEventListener=function(){},Be(this,e,t),this.addEventListener=i},ener=ze.prototype.off=function(e,t){Fe(this,e,t)},ze.prototype.one=function(e,t){var i=this.addEventListener;this.addEventListener=function(){},He(thunction(){},qe(this,e,t),this.addEventListener=its_[t]&&this["on"+t]&&thisvery(fut(this,"on","dispose",r),tt(o,"on","dispose",s))},one:function(){for(var r=this,e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var n=et(this,t,"one"),a=n.isTargetingSelf,s=n.target,o=n.type,u=n.listener;a?tt(s,"one",o,u):((a=function e(){r.off(s,o,e);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];u.];u.ose",i))lsetTimeout(function(){e.e&(e)&&e.on("statechanged",e.handleStateChanged),e}function ot(e){return"string"!=typeof e?e:e.replace(/./,function(e){return e.toLowerCase()})}function ut(e){return"string"!=typeof e?e:ew(i[t])||(i[t]={}) i in this.map_)e,t){formes=t.title={};for(a in n)o[n[a]]=a;for(s in r)n[s]=r[nction(e){if(e&&s.components_)return s.components_[e]},s}();pt.prototype.supportsRaf_="function"==typeof window.requestAnimationFrame&&"function"==typeof window.cancelAbeen inge||(this.message=bt.defaultMessages[this.code]||"")}bt.prototype.code=0,bt.prototype.message="",bt.prototype.status=null,bt.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],bt.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Tt=0;Tt<bt.errorTypes.length;Tt++)bt[bt.erre.sttTrorEach(function(e){returnbute("tabindex")||e.hasAttribute("contenteditable")})},e}(pt);At.prototype.options_={pauseOnOpen:!0,tempon;i++){var r=this[i];if(r.id===e){t=r;break}}return t},e}(ze);for(Pt in Lt.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack",labelchange:"labelchange"},Lt.prototype.allowedEvents_)Lt.prototype["on"+Pt]=null;function Dt(e,t){for(var i=0;i<e.length;i++)Ob))abledchtedchaer("modents_n;i++){var r=this[i];if(r.id===e){t=r;break}}return t},t}(),qt={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Vt={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},Wt={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Gt=&(r=e,this.trigger("labelchange"))}}),i}return mt(e,a),e}(ze),zt=Object.freeze({__proto__:null,parseUrl:Rt,getAbsoluteURL:Mt,getFileExtension:Nt,isCrossOrigin:Ut}),Xt="undefined"!=typeof window?window:"undefine===window.alert||e===window.confirm||e===wiply(null,new Uint8Array(i));n({cause:e})}else n(null,i)}};
/**
   * @license
   * slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
   * Copyright (c) 2014 David Björklund
   * Available under the MIT license
   * <https://githubn[i]=t:Arra=typeof n.beforeSend&&n.beforeSend(l),l.send(h||null),l}ei.XMLHttpRequest=Kt.XMLHttpRequest||function(){},ei.XDomainRequest="withCredentials"innRequest,function(e,t){for(var i=0;i<e.length(e,t,i){returnload,es_.splice(t,1),this.cues.setCues_(this.cues_);break}}},eed&&(}),t..trigger({type:"load",target:ft(i)})}),i}return mt(e,r),e}(ze);j.prototype.allowedEvents_={load:"load"},j.NONE=0,j.LOADING=1,j.LOADED=2,j.ERROR=3;var ai={audio:{ListClass:Bt,TrackClass:x,capitalName:"Audio"},video:{ListClass:Ft,TrackClass:U,capitalName:"Video"},text:{ListClass:k,ai[e].getterName=e+"Tracks",ai[e].privateName=e+"Tracks_"});var si={remoteText:{ListClass:k,TrackClass:ri,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:jt,TrackClass:j,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},oi=g({},ai,si);si.names=Object.keys(si),ai.names=Object.keys(ai),oi.names=[].concat(si.names).concat(ai.names);var ui="undefined"!=typeof f?f:"undefined"!=typeof window?window:{},li="undefined"!=typeof document?document:(li=ui["__GLOBAL_DOCUMENT_CACHE@4"])||(unly accepts onemiddle:"center",end:"end",right:"end"},t.align)}(t,e)}((hi.prototype=di(Error.prototype)).constructor=hi).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{set:s.hathis(var n=0nction(e)?%$/)&&0<=(t=parseFloat(t))&&t<=100)&&(this.set(e,t),!0)}};var yi=Xt.createElement&&Xt.createElement("textarea"),vi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},_i={white:"rgba(255,255,255,1)",lime:"rgba(0,255,0,1)",cyan:"rgba(0,255,255,1)",red:"rgba(255,0,0,1)",yellow:"rgba(255,255,0,1)",magenta:"rgba(255,0,255,1)",blue:"rgba(0,0,255,1)",black:str(2).replace(">","")&&(f.pop(),p=p.parentNode);return h}var Si=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,=i[1])return 1 Ii(n)}return i||n}(n,s);t.move(n.toCin t=t||this.div,e)e.hasOki.prototype.formatStyle=function(e,t){return 0===e?0:e+t},(Ci.prthis.bottom+=t;break;c&&this.right>e.left&&this0;t<e.length;t++)if(.bottom<=e.bottom&&this.left>=e.leturn this.top<e.top;case"-y":retuottom)-Math.max(this.top,e.top)t:e.right-this.right,height||t,bottom:e.bata.");return decodeURIonvertCueToDOMTr(var t=0;this.decoder=i||new TextDecoder(f hi))tate=".reportOrThrowError(e)}return t.onflush&&t.onflush(),this}};var Pi=Ai,Li={"":1,lr:1,rl:1},Di={start:1,center:1");g=e,this.hasBeenResetion(){return WebVTT.convert!Ni[e.tunction(){Kt.VTTCue=n,Kt.VTTRegion=r},Kt..registerTech(name, tthis[t.privateName]||new t.ListClass,this[t.privateName]}}),ji.prototype.featuresVolumeControl=!0,ji.prototype.featuresMuteControl=!0,ji.prototype.featuresFullscreenResize=!1,ji.prototype.featuresPlaybackRate=!1,ji.prototype.featuresProgressEvents=!1,ji.prototype.featuresSourceset=!1,ji.prototype.featuresTimeupdateEvents=!1,ji.prototype.featuresNativeTextTracks=!1,ji.pro&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},pt.registerComponent("Tech",ji),ji.registerTecngth-1;0<=r;r--){var a=e[r];a[t]&&a[t](n,i)}}(e,i,r,n),r}var zi={buffered:1,currentTime:1,duration:1,muted:1,played:1,paused:1,seekable:1,volume:1,ended:1},Xi={se"string"==typeof e.src&&e.src&&e.src.trim()?[en(e)]:[]}var Zi={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",m4a:"audio/mp4",mp3:"audio/mpeg",aac:"audio/aac",caf:"audio/x-caf",flac:"audio/flac",oga:"audio/ogg",wav:"audio/wav",m3u8:"application/x-mpegURL",mpd:"application/dash+xml",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/goported()){e.loadTech_(s);break}}return i}retigger("click")):n.prototype.handleKeyDown.call(this,e)},e}(pt);pt.registerComponent(paused()?Et(this.player_.play()):this.player_.pause())},e}(C));var tn="#222",nn={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps")"}function an(e,t,i){try{e.style[t]=layer_.textTrackSettings&&this.updateDisplaloading-spinopPropagation():t.prototype.handleKeyDows,e)},t.handleMouseDown=function(e){this.mouseused_=!0},e}(sn);Bt.prototype.controlText_="Play Video",pt.registerComponigger("clayer_,"seeked",function(e){return t.handleSeeked(e)})},e}(sn);Ft.prototype":"")+(n=}ndChild(t.textNode_)))}))},t.updateContent=function(e){},e}(pt);k.prototype.labelText_="Time",k.prototype.cTime:this.player_.currentTime();this.updateTextNode_(t)},t}(k);jt.prototype.labelText_="Current Time",jt.prototype.controlText_="Cu){var t=this.player_.duration();this.updateTextNode_(t)},e}(k);j.prototype.labelText_="Duration",j.prototype.controlText_="Duration",pt.registerComponontent:):this.player_.remainingTime(),this.updateTextNode_(t))},e}(k);f.prototype.labelText_="Remaining Time",f.prototype.controlText_="Remaining Time",pt.registerComponent("){this.pndler_),this.textEl_=null,n.prototype.dispose.call(this)},e}(sn);ui.prototype.controlText_="Seek to live, c,islider-vertical"):this.addClass("vjs-si);function cn(e,t){return dn(e/t*100,length;u--)l.el_.removeChild(n[u-1]);n.l-r*e)<1?rentTime:this.player_.currentTime(),n.updateTime(e,t,i))},e}(pt);Xt.prototype.options_={children:[]},q||A||Xt.prototype.options_.children.pusheTime(e,t,n,function(){i.el_.style.left=e.width*t+"px"})},e}(pt);I.prototype.options_={children:["",this.toggleVisibility_),a.prototype.dispose.call(this)},e}(li);Bt.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},q||A||Bt.prototype.options_.children.splice(1p(e),this.removeListenersAddedOnMousedownAndTouchstart()},e}(pt);Ft.prototype.options_={childreictureInPicture():this.player_.requestPictureInPicture()},e}(sn);jt.prototype.controlText_="Picture-in-layer_.exitFullscreen():this.player_.requestFullscreen()},e}(sn);j.prototype.controlText_="Fullscreen",pt.registerComponteEl.call(this,"span",{className:"vjs-control-tVolume"bottom=e.height*t+"px":n.el_.style.left=e.width*t+"px"})},e}(pt);k.prototype.options_={children:["volumeLevelToion(){0===e.player_.volume()&&e.player_.lastVolume_(t)})},e}(li);f.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},q||A||f.prototype.options_.children.splice(0,0,"mouseVolumeLevelDisplay"),f.prototype.playeeMouseMove=function(e){this.volumeBar.handleMouseMove(e)},e}(pt);ui.prototype.options_={childremute":"Mute";this.controlText()!==e&&this.controlText(e)},e}(sn);Xt.prototypeunction(e){ht.isEventKey(e,"Esc")&&this.handleMouseOut()},e}(pt);I.prototype.options_={children:["muteToggle","vgth&&(e=t.length-1),t[this.focusedChildis.removeClass("vjs-disabled"),this.menuButtoi.removeEventListener("labelchange",n)}),t}return mt(e,r),e}(Bt);pt.registerComponent("TrackBuked","false"),this.controlText(""),this.isSeleunction(){this.track=null,u.prototype.dispose.call(this)}}i&&(this.player_.cache_.selectedLanguage={enabled:!1addClass("vjs-"+s.kind+"-menu-item"),e.push(a))}retur.call(this),this.player_.currentTime(this.cue.startTimeis.player_,{track:this.track_,cue:r});e.push(r)}return e},e}(j);k.prototype.kind_="chapters",k.prototype.controlons-button "+a.prototype.buildWrapperCSSClass.call(this)},e}(j);li.prototype.kind_="descriptions",li.prototype.controlText_="Dles-button "+n.prototype.buildWrapperCSSClass.call(this)},e}(j);f.prototype.kind_="subtitles",f.prototype.controlText_=on(e){this.player().getChild("textTrackSettings").open()},.hideThreshold_+=1),n.prototype.createItems.call(this,e)},e}(j);ui.prototype.kind_="captions",ui.prototype.controlText_ol-text",textContent:" "+this.localize("Captions")}Threshold_+=1),e=i.prototype.createItems.call(this,e,vn)},e}(j);Xt.prototype.kinds_=["captions","subtitles"],Xt.prototype.controlText_=acksChange=function(e){this.selected(this.track.enabr_,{track:n,selectable:!0,multiSelectable:!1}))}return e},e}(Ft);I.prototype.controlText_="Au{this.selected(this.player().playbackRate()===this.rate)},e}(jt);bn.prototype.contentElTyps.labelEl_.textContent=this.player().playbackRate()+"x")},e}(Bt);C.prototype.controlText_="Playbs.buildCSSClass()),n.prototype.createEl.call(this,e,t,i)},e}(pt);pt.registerComp,"div",.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},t}(pt);li.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","seekToLive","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},"exitPictureInPicture"in document&&li.prototype.options_.children.splice(li.prototype.options_.children.length-1,0,"pichis.player().error();return e?this.localize(e.message):""},e}(At);f.prototype.options_=g({},At.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),pt.registerComponent("ErrorDisplay",f);var Tn="vjs-text-track-settings",ui=["#000","Black"],j=["#00F","Blue"],Xt=["#0FF","Cyan"],Ft=["#0F0","Green"],I=["#F0F","Magenta"],jt=["#F00","Red"],Bt=["#FFF","White"],C=["#FF0","Yellow"],k=["1","Opaque"],li=["0.5","Semi-Transparent"],f=["0","Transparent"],wn={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[ui,Bt,jt,Ft,j,C,I,Xt]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[k,li,f]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Bt,ui,jt,Ft,j,C,I,Xt]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.default:2,parser:function(e){return"1.00"===e?null:Number(e)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[k,li]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captioi,k]}};function Sn(e,t){if((e=t?t(e):e)&&"none"!==e)return e}wn.windowColor.options=wn.bacCapsButton,e=e&&e.captionsButton;t?t.focusll,this.loadListener_=null,a.prototype.dispose.call(this)},e}(pt));var En={trackingThreange_void 0===e?!0:e)&&(a.set=r),Object.definePropernerHow.Element.prototype.appendChild.call(thit(win winw.Date.now()-window.pptions",t.srclan(e){return!1}reOn.canPlayType=fuOn.canPlaySource=funmeControl=e!==On.n.TEST_VID,"muted"),e!==OnkRate=e/2+.1,e!==On.TEST_udio"),"innerHTML",{get:e,seurn!0},On.supportsNativeTextTracks=function(){return V||q&&R},On.supportsNativeVideoTracks=function(){return!(!On.TESTs=function(){return!(!On.TEST_VID||!On.TEST_VID.audioTracks)},On.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],[["featuresMuteControl","canMuteVolume"],["featuresPlaybackRate","canControlPlaybackRate"],["featuresSourceset","canOverrideAttributes"],["featuresNativeTextTracks","supportsNativeTextTracks"],["featuresNativeVideoTracks","supportsNativeVideoTracks"],["feae[0],i=e[1];An(On.prototype,t,function(){return On[i]()},!0)}),On.prototype.featuresVolumeControl=On.canControlVolume(),On.prototype.movingMediaElementInDOM=!q,On.prototype.featuresFullscreenResize=!0,On.prototype.featuresProgressEvents=!0,On.prototype.featuresTimeupdateEvents=!0,On.prototype.featuresVideoFrameCallback=!(!On.TEST_VID:x-|vnd\.apple\.)mpeguurn Pn&&(On.TEST_VID.constructor.prototype.cation"==typeof e.load&tion"==typeof e.load&&function(){try{e.load()}catch(e){}}()}},["muted","defa[e]=function(){return this.el_[e]||this.el_.hasAttribute(e)}}),["m]=e)?this.el_.setAttribute(t,t):this.el_.removeAttribute(t)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","disablePictureInPicture","played","networkState","h(function(e){On.prototype[e]=function(){return this.el_[e]}}),["volume","src","poster","preload","playbackRate","defaultPtion(t){On.prototype["set"+ut(t)]function(e){On.prototype[e]=function(){return this.el_[e]()}}),ji.withSourceHandlers(On)(e){try{return On.TEST_VID.canPlayType(turn On.nativeSourceHandler.canPlayTveSourceHandler.handleSource=function(e,t,i){t.setSrc(e.src)},On.nativeSourceHandler.dispose=function(){},On.registerSourceHandler(On.nativeSourceHandler),ji.registerTech("Html5",On);var Rn=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],Mn={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},Nn=["tiny","xsmalx"===e.charAt(0)?"x-"+e.substring(1):e;Un[e]="vjs-layout-"+t});var Bn={tiny:210,xsmallche_.playbackRates=e,]=this[t.privateName]||new t.ListClass,this[t.privateName])}}),Fn.prototype.crossorigin=Fn.prototype.crossOrigin,Fn.players={};k=window.navigator;Fn.prototype.options_={techOrder:ji.defaultTechOrder_,html5:{},inactivityTimeout:2e3,playbackRates:[],liveui:!1,children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","liveTracker","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:k&&(k.languages&&k.languages[0]||k.userLanguage||k.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media.",normalizeAutoplay:!1,fullscreen:{options:{navigationUI:"hide"}},breakpoints:{},responsive:!1,audioOnlyMode:!1,audioPosterMode:!1},["endction(e){Fn.e["handleTech"+ut(e)+"_"]=function(){return Of||function(e,t){return e.__proto__=t,e},n(thiflect i&&jn(n,i.prototype),n},r.apply(null,arguPluPluginVersion=function(e){e=qn(e);return e&&e.VERSION||""},i}();Jn.getPlugin=qn,Jn.BASE_PLUe.usingPlugin=function(his[Yn]nstn,t,i);return a("setup").forEae(r)}),r}tr.urn function e(){return n(i,e),t.apply(void 0,arguments)}}))},tr.removeHook=n,!0!==window.VIDEOJS_NO_DYNAMIC_STYLE&&X()&&((rr=Te(".vjs-styles-defaults"))||(rr=xe("vjs-styles-defaults"),(k=Te("head"))&&k.insertBefore(rr,k.firstChild),Ae(rr,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid:not(.vjs-audio-only-mode) {\n        padding-top: 56.25%\n      }\n    "))),Ce(1,tr),tr.VERSION=u,tr.options=Fn.prototype.opti;if(K(i)){e=i.players).map(function(e){return Fn.players[e]}).filter(Boolean)},tr.players=FnregisterTech(name, tech)"),pt.registerComponent.call(pt,e,t)}isterTech,tr.use=function(e,t){Hi[e]=Hi[e]||[],Hi[e].push(t)},Object.defineProperty(tr,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(tr.middleware,"TERMINATOR",{value:Vi,writeableer_=e),r)r.hasOwnProperty(i)&&(n.prototype[i]=r[i]);return n},tr.mergeOptions=lt,tr.bind=Ve,tr.registerPlugin=Jn.regse videojs.registerPlugin() instead"),Jn.registerPlugin(e,t)},tr.getPlugins=Jn.getPlugins,tr.getPlugin=Jn.getr.options.languages,((i={})[e]=t,i)),tr.options.languages[e]},tr.log=h,tr.createLogger=p,tr.createTimeRange=tr.createTimeRanges=vt,tr.formatatTime=function(e){un=e},tr.resetFormatTime=function(){un=on},tr.parseUrl=Rt,tr.isCrossOrigin=Ut,tr.EventTarget=ze,tr.on=Be,tr.one=He,tr.off=Fe,tr.trigger=je,tr.xhr=Jt,tr.TextTrack=ri,tr.AudioTrack=x,tr.VideoTrack=U,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAe videojs.dom."+e+"() instead"),Se[e].apply(null,arguments)}}),tr.computedStyle=S,tr.dom=Se,tr.url=zt,tr.defineLazyProperty=An,tr.adme+e.netLoc+e.path+e.params+e.query+e.fragment}},e.exports=s}),nr="http://example.com",rr=function(){function e(){this.listeners={}}var t=e.prototype;return t.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},t.off=function(e,t){if(!this.listeners[e])return!1;t=this.listeners[e].indexOf(t);return this.listeners[e]=this.listeners[e].slice(0),this.listeners[e].splice(t,1),-1<t},t.trigger=function(e){var t=this.listeners[e];if(t)if(2===arguments.length)for(var i=t.length,n=0;n<i;++n)t[n].call(this,arguments[1]);else for(var r=Array.prototype.slice.call(arguments,1),a=t.length,s=0;s<a;++s)t[s].apply(this,r)},t.dispose=function(){this.listeners={}},t.pipngth):i.href}return ir.buildAbsoluteURL(e,t)}
/*! @er.substring(0,t)),this.buffer=thhis.tagaddTagMapper=function(e){this.parseStream.addTagMapper(e)},e}(rr),Ir={mp4:/^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,webm:/^(vp0?[89]|av0?1|opus|vorbis)/,ogg:/^(vp0?[89]|theora|flac|opus|vorbis)/,video:/^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,audio:/^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,text:/^(stpp.ttml.im1t)/,muxerVideo:/^(avc0?1)/,muxerAudio:/^(mp4a)/,muxerText:/a^/},xr=["video","audio","text"],Ar=["Video","Audio","Text"],Pr="mp4a.40.2",Lr=/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i,Dr=/^application\/dash\+xml/i,Or=yr,Rr=window.BigInt||Number,Mr=[Rr("0x1"),Rr("0x100"),Rr("0x10000"),Rr("0x1000000"),Rr("0x100000000"),Rr("0x10000000000"),Rr("0x1000000000000"),Rr("0x1000000 0===t?Object:t)&&"function"==typeof t.freeze?t.freeze(e):e}var Fr=Br({HTML:"text/html",isHTML:function(e){return e===Fr.HTML},XML_APPLICATION:"application/xml",XML_TEXT:"text/xml",XML_XHTML_APPLICATION:"application/xhtml+xml",XML_SVG_IMAGE:"imagewww.w3.org/1999/xhtml",isHTML:function(e){return e===jr.HTML},SVG:"http://www.w3.org/2000/svg",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlnsf\r ]+/).filter(Vr):[];return Object.ke=new i),e.prototype=n=i),n.constructor!=e&&(n.constructor=e)}var W={},Kr=W.ELEMENT_NODE=1,Yr=W.ATTRIBUTE_NODE=2,Qr=W.TEXT_NODE=3,$r=W.CDATA_SECTION_NODE=4,Jr=W.ENTITY_REFERENCE_NODE=5,Zr=(W.ENTITY_NODE=6,W.PROCESSING_INSTRUCTION_NODE=7),ea=W.COMMENT_NODE=8,ta=W.DOCUMENT_NODE=9,ia=W.DOCUMENT_TYPE_NODE=10,na=W.DOCUMENT_FRAGMENT_NODE=11,x=(W.NOTATION_NODE=12,{}),ra={};x.INDEX_SIZE_ERR=(ra[1]="Index size error",1),x.DOMSTRING_SIZE_ERR=(ra[2]="DOMString size error",2);x.HIERARCHY_REQUEST_ERR=(ra[3]="Hierarchy request error",3);x.WRONG_DOCUMENT_ERR=(ra[4]="Wrong document",4),x.INVALID_CHARACTER_ERR=(ra[5]="Invalid character",5),x.NO_DATA_ALLOWED_ERR=(ra[6]="No data allowed",6),x.NO_MODIFICATION_ALLOWED_ERR=(ra[7]="No modification allowed",7);x.NOT_FOUND_ERR=(ra[8]="Not found",8);x.NOT_SUPPORTED_ERR=(ra[9]="Not supported",9e(this,sa)),i._refresh(e._na,!e||(r=e.ownerDocument)&&=e.firstChildt||e,e),t.nodeType==na&&(t.firstChild=t.lastChild=null),t}function Sa(){this._nsMap={}}function Ea(){}function ka(){}function Ca(){}function Ia(){}function xa(){}function Aa(){}function Pa(){}function La()fault:t.push("??",e.nodeName)}}function ja(e,t,i){e[t]=i}x.INVALID_STATE_ERR=(ra[11]="Invalid state",11),x.SYNTAX_ERR=(ra[12]="Syntax error",12),x.INVALID_MODIFICATION_ERR=(ra[13]="Invalid modification",13),x.NAMESPACE_ERR=(ra[14]="Invalid namespace",14),x.INVALID_ACCESS_ERR=(ra[15]="Invalid access",15),sa.poa.protot[],n=0;n<this.lengt("")}},ua.prototype.item=function(e){return la(this),this[e]},Xr(ua,ot=this.lengthmedItem(e.nodeN.namespaceURI,e.=this.getNamedItems.getNamedItemNi];if(n.localName==t&&n.naeturn null}},faendChild(i),t&&(t=nrn n.name=e,n.nodeName=e,n.publicId=t||"",n.systemId=i||"",n}},ma.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:nocalName:null:function(e,t){this.insertBefore(e,t),t&&this.removeChild(t)},removeChild:function(e){return Ta(this,e)},appendChilnull)},has),c=c.nextis.removeChi,t){return thit)},hasAttrib n;t=t.nodeType==Yre];t=t.nodeType==YrfaultNamespace:function(e){return null==this.lookupPrefix(e)}},zr(W,ma),zr(W,ma.prototype),va.prototype={nodeName:"#document",node;i;){var n=is.documentE)r.appendChild(if(e.nodeType==Kr&&e.gection(e){retur=e,t.childNodes=new oa,r e=new Oa;return e.ownerDocument=this,e.childNodes=new oa,e},createTextNode:function(e){var t=new Ca;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new Ia;retu){var t=new xa;return t.ownenerDocument=thisnt=this,t.name=e,t.nodn(e){var t=new Drefix=n[0],i.local2==n.length?(i.prefix=n[0],i.localName=n[1]):i.localName=t,i}},Xr(va,ma),va.prototypesAttribute:fufunction(e){e=this.getAttributeNode(e);return e&&e.value||""},getAttributeNode:funtribute(e);e.value=e.nodeValue=""+t,this.setAttributeNode(e)},removeAttribute:function(e){e=this.geirstChild=t,e.lastChild=t,ba(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){nction(e){return t=this.getAttribteNS:function(eon(e,t){t=this.uteNS(e,t);t.value=eNS:function(e,t){ret===t||e.nodeType!=Kr||"e.namespaceURI!==n||"*"!==r&&e.localName!=r||i.push(e)}),i})}}).getElementsByTagName,va.prototype.getElementsByTagNameNS=Sa.prototype.getElementsByTagNameNS,Xr(Sa,ma),Ea.prototubstringDat=this.data+h=e.length},eData(e,0,tor(ra[3])},dg(e+t);this.nodeValue=this.data=i=n+i+t,this.length=i.length}},XrentNode&&this.parentNode.insertBefore(t,this.nextSibling),t}},Xr(Ca,ka),Ia.prototype={nodeName:"#comment",nodeType:ea},Xr(Ia,ka),xa.prototype={nodeName:"#cdata-section",nodeType:$r},Xr(xa,ka),Aa.prototype.nodeType=ia,Xr(Aa,ma),Pa.prototype.nodeType=12,Xr(Pa,ma),La.prototype.nodeType=6,Xr(La,ma),Da.prototype.nodeType=Jr,Xr(Da,ma),Oa.prototype.nodeName="#document-fragment",Oa.prototype.nodeType=na,Xr(Oa,ma),Ra.ptype.serializeToString=function(e,t,i){return Na.call(e,=t.nextSibling;return i.join("");default:return totype,"length",{get:function(){return la(this),this.$$ley(mae));b.value=e,this.nodeValue=e}}}),ja=function(e,t,i){e["$$"+t]=i})}catch(e){}var U={DocumentType:Aa,DOMException:sa,DOMImplementadquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",euro:"€",trade:"™",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"}),t.entityMap=t.HTML_ENTITIES});Ha.XML_ENTITIES,Ha.HTML_ENTITIES,Ha.entity\u2070-\u218F\=qa.XML),"xmlns"!==l&&(s.uri=i[l||""]));var d,c=0<(d=nn,r){if(/^(?:script|textar(e))returrror("element parse error: "+e),v=-1}f<v?f=v:t(Math.max(y,f)+1)}}(e,t,i,n,this.errorHandler),n.endDocument()}},ns.prototype={setTagName:function(e){if(!Va.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,i){if(!Va.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[ttor:{}}}function ls(){t{},s=n instanceof Function;function(){}}rr&&(this.dor.createElementNS(eh;ps(this,a),this.currentElement=a,this.locator&&ds(tteNS(e,i);this.locatr(o),l),l.veateProcessingInstruction(e,t);this.locator&&ds(this.locator,t),ps(this,t)},ignorableWhitesp{var n;(ment?this.currentElement.appendChild(n):/^\s*$/.test(e)&&this.doc.appendChild(n),ber=0)},comment:function(e,t,i){e=hs.apply(this,argumator&&ds(this.locator,e),ps(this,e)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,i){var n=this.doc.implementation;n&&n.createaS:"subs",RESOLUTION:{width:t.width,height:t.height},CODECS:t.codecs,BANDWIDTH:t.bandwidth})[";)Tr(e.subarray(i,i+3),Po)&&(t.push(i+2),i++),i++;if(0===t.length)return e;for(var n=e.length-t.length,r=new Uint8Array(n),a=0,i=0;i<n;a++,i++)a===t[0]&&(a++,t.shift()),r[i]=e[a];return r}(e.subarray(r,a));var u=void 0;"h264"===t?u=31&e[a+o]:"h265"===t&&(u=eID_NUMBEclientOffset,n=e.availabilityStartTime,r=e.timescale,a=void 0===r?1:r,s=e.duration,o=e.periodStart,u=void 0===o?0:o,r=Number),i=(t+i)/1e3,u=n+u,o=Math.ceil((i+o-u)*a/s),r=Math.floor((i-u-r)*a/s),s=Math.floor((i-u)*a/s);return{start:Math.max(0,r),end:"number"==typeof e?e:Math.min(o,s)}}},vo=["AUDIO","SUBTITLES"],_o=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,bo={mediaPresentationDuration:zs,availabilityStartTime:function(e){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e=e)&&(e+="Z"),Date.parse(e)/1e3},minimumUpdatePeriod:},timeShiftBufferDepth:zs,start:zs,width:function(e){return parseInt(e,10)},e,10)},bandwidth:function(e){return parseInt(e,10)},startNumber:function(e){return parseInt(e,10)},timescale:function(e){return parseInt(e,10)},presentationTimeOffset:function(e){return parseInt(e,10)},duration:function(e){var t=parseInt(e,10);return isNaN(t)?zs(e):t},d:function(e){return parseInt(e,10)},t:function(e){return parseInt(e,10)},r:function(e){return parseInt(e,10)},DEFAULT:function(e){return e}},To={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcdt32(n+4),n+=8):(i.earliestPresentationTime=So(e.subarray(n)),i.firstOffset=So(e.subarray(n+8)),n+=16);var r=t.getUint16(n+=2);for(n+=2;0<r;n+=12,r--)i.references.push({referenceType:(128&e[n])>>>7,referencedSize:2147483647&t.getUint32(n),subsegmentDuration:t.getUint32(n+4),startsWithSap:!!(128&e[n+8]),sapType:(112&e[n+8])>>>4,sapDeltaTime:268435455&t.getUint32(n+8)});return i},ko=vr([73,68,51]),Co={EBML:vr([26,69,223,163]),DocType:vr([66,130]),Segment:vr([24,83,128,103]),SegmentInfo:vr([21,73,169,102]),Tracks:vr([22,84,174,107]),Track:vr([174]),TrackNumber:vr([215]),DefaultDuration:vr([35,227,131]),TrackEntry:vr([174]),TrackType:vr([131]),FlagDefault:vr([136]),CodecID:vr([134]),CodecPrivate:vr([99,162]),VideoTrack:vr([224]),AudioTrack:vr([225]),Cluster:vr([31,67,182,117]),Timestamp:vr([231]),TimestampScale:vr([42,215,177]),BlockGroup:vr([160]),BlockDuration:vr([155]),Block:vr([161]),SimpleBlock:vr([163])},Io=[128,64,32,16,8,4,2,1],xo=vr([0,0,0,1]),Ao=vr([0,0,1]),Po=vr([0,0,3]),Lo={webm:vr([119,101,98,109]),matroska:vr([109,97,116,114,111,115,107,97]),flac:vr([170,70]),avi:vr([65,86,73]),wav:vr([87,65,86,69]),"3gp":vr([102,116,121,112,102,e){vk:[255ype])[0];return Tr(e,Lo.webm)},mkv:function(e){e=oo(e,[Co.EBML,||(!(id 0))},mov:function(e){return Tr(e,Lo.mov,{offset:4})},"3gp":function(e){return Tr(e,Lo["3gp"],{offset::t})})retuf(71===e[t]&&71===e[t+188]);return Tr(e,Lo.flac,{offset:t})},ogg:fun.RL,n=/L(e,window.location|[0].segmentIndex||0,startTime:i};l=0}for(var m=l;m<u.length;m++){var g=u[m];if(o-=g.duration,s){if(0<o)continueTime:a+$o({defaultDuration:t.targetDurationx:u[u.length-1].partIndex,startTime:i}},isEnabled:tu,isDisabled:function(e){return e.disabled},isBlacklisted:Zo,isIncompatible:eu,playlist;this.master=(i=ou(0,t=r),(n={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:window.location.href,resolvedUri:window.locativedUri:t,atylistObject:e,url:r,id:this.master.playlisisMaster_&&this.handleMaster_();var i=this.masterPlaylistLoader_.master.playlists,n=!this.media_||this.media_!==i[e];n?this.media_=i[e]:this.trigger("playlistunchanged"),this.mediaUpdateTimeout||function e(){t.media().endList||(t.mediaUpdateTimeout=window.setTimeout(function(){t.trigger("mediaupdatetimeouetriURL(i.getBlob())}}(n),t=Duff=function(e,t){length;++t)n.push(arguments[t]);for(i=r.length,t=0;t<i;++t)r[t].apply(this,n)}},this.dispose=function(){a={}}}};e.prototype.pipe=function(t){return this.on("data",function(e){t.push(e)}),this.on("done",function(e){t.flush(e)}),this.on("partialdone",function(e){t.partialFlush(e)}),this.on("endedtimeline",function(e){t.endTimeline(e)}),this.on("reset",function(e){t.reset(e)}),t},e.prototype.push=function(e){this.t.trigger("endedtimeline",e)},e=newayt8seenqun(4&sam&e([f,the),025 U.p,00&,0&r.tOna,ne8),[368),[1368shal.byoun],o=0;o<e.length;o++)for(n=e[o],i=0;i<n.length;i++)r=n[i],a+=(r=W(r,a)).s=fua,sound=new DataView(l.buffe=0;t<n.length;t++)for(r=n[t],i=0;i<r.lenbyt:e-d<1ts-min(t.min+)te.l,voSeg=Steturn 181!==e.payload[0]||49!=(e.payload[1]<<8|e.payload[2])||"GA94"!==String.fromCharCode(e.payload[3],e.payload[4],e.payload[5],e.payload[6])||3!==e.payload[7]?null:e.payload.subarray(8,e.payload.length-1)},Ee=function(e,t){var i,n,r,a,s=[];if(!(64on(e){e.on("data",this.triad&&t.payloadType===Ce&&(i=SreNextEqualDts_)return th=function(e){this.captionPackets_.length&&(this.captionPackets_.forEach(function(e,t){e.presortIndex=t}),this.captionPackets_.sort(function(e,t){return e.pts===tis.captionPackets_.length=0),this.unction(e){e.reset()})},Ie.prototype.dispatchCea608Packet=function(e){this.setsTextOrXDSActive(e)?this.actinel1Active(e)?this.activeCea608Chthis.activeCea608Channel_[e.type]&etsChannel2Active=function(e){return 6144==(30720&e.ccData)},Ie.prototype.setsTextOrXDSActive=function(e){return 256==(28928&e.ccData)||4138==(30974&e.ccData)||6186==(30974&e.ccData)},Ie.prototype.dispatchCea708Packet=function(e){this.parse708captions_&&this.cc708Stream_.push(e)};function xe(e){refunction(){this.cleartr={},this.penAttr={},tle=0,this.rowLock=0,txt=function(){return x=0},Ae.prototype.newthis.virtualRowCount&&".rows.length&&""=is.rows[this.rowIdx],this.rowsLe(e,t,i){this.serviceNum=e,thiw=this.ed with "+t+" encoding. "+e})}};var De=functich(function(e){i=r[e],/^S708Packet)&&n.new708Packet(e){var t=e.ccData,i=t>>>8,t=25hideWindows(r,s):139===n?r=thi=this.setPenColor(r,=n?s.currentWindow.backspText(e,t,{isExtended:!0}xt=function(e,t,i){var n,r=i&&i.=[u,i],e++):n=[u],t.textDecode));return s.pendingNewLinentWindow(7&n);t=t.currentWindow,npacity=(192&n)>>6,t.fillRed=rap=(64&n)>>6,t.printDireushDisplayed=function(e,t){for(var i=[],n=0;n<8;n++)t.windows[n].visible&&!t.windows[n].isEmpty()&&i.push(t.windows[n].getText());t.endPts=e,t.text=i.join("\n\n"),this.pushCaption(t),t.startPts=e},De.prototype.s=e.endPts)},De.prototype.d1);return e},De.prototype.hideWindows=function(e,t){var i=this.current708Packet.data[++e],n=this.getPts(e);this.flushDisplayed(n,t);for(var r=0;r<8;r++)i&1<<r&&(t.windows[r].visible=0);return e},De.prototype.tole^=1);return e},De.prototype.a[++e],n=this.getPts(e);tpe=(56&n)>>3,t.fontStyle=7&n,t.fgGreen=(12&n)>>Packet.data,n=i[e],r=t.currentWindow.penLoc;return t.currentWindow.pendingNewLine=!0,n=i[++e],r.row=15&n,n=i[++e],r.column=63&n,e},De.prototype.reset=function(e,t){var i=this.getPts(e);return this.flushDisplayed(i,t),this.initService(t.serviceNum,e)};function Oe(e){return null===e?"":(e=Me[e]||e,String.fromCharCode(e))}function Re(){for(var e=[],t=15;t--;)e.push("");return e}var Me={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,57ts,r)),r!==this.row_&&(this.clearFormatting(e.pode_=null}};Ue.prot at index "+t+"."}),""}},ts.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38URN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.EN_DISPLAYED_MEMORY_turn e===this.EXT_&&48<=,t){return(e===this.EXT_+1Ue.prototype.isMidRowCo&&e<=127},Ue.prototype.setRs.displayed_=Re()),void 0!==t.topRow_=t-this.rollUpRows_+1},Ue.prototype.addFormatting=function(e,t){this.formatting_=this.formatting_.concat(t);t=t.reduce(function(e,t){return e+"<"+t+">"},"");this[this.mode_](e,t)},Ue.prototype.clearFormatting=function(e){vahis.nonDisplayed_[thiRow_;e++)this.displayed_[e]="";for(e=this.row_+1;e<15;e++)this.displayed_[e]="";for(e=this.topRow_;e<this.row_;e++)this.displayesh=function(e){"sh){n=i,this.trigger("done")},this.endTimeline=function(){this.flush(),this.ti;r++<7|e[.leni+3]),data:t.data.subarray(i+10,i+n+10)}).k):t=e;n<t.byteLength;)7id 0===this.programMapTable?this.packetsWaitingForPmt.p"timed-metadata")},this.flush=function(){var e;!r&&t&&(e={type:"metadata",tracks:[]},null!==t.video&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.video,codec:"avc",type:"video"}),null!==t.audio&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.audio,codec:"adts",type:"audio"}),c.trigger("data",e)),r=!1,this.flushStreams_(),this.trigger("done")}}).prototype=new j;var Qe,$e={(60&l[o+2])>>>2],samplingfrequencyindeb=fse 1:if(0!==r[n-1]||0!==r[n-2]){n+=3;break}this.trigger("data",r.subarray(a+3,n-2)),a=n-2,n+=3;break;default:k;case 11:d=[15,1urn{profileIdc:h,levelIdc:f,profileCompatibility:p,width:16*(e+1)-2*s-2*o,height:(2-n)*(i+1)*16-2*u-2*l,sarRatio:d}}}).prototype=new j;function ot(e,t){var i=0<=(i=e[t+6]<<21|e[t+7]<<="I".charCodeAt(0)||e[t+1]!=="D".(e){returnata:function(e){sSize:function(e,t)fors:s,dts:s},this.trit)}function ft(e,t){for(var i=Object.keys(t),n=0;n<i.length;n++){var r=i[n];"headOfPipeline"!==r&&t[r].on&&t[r].on("log",pt.bind(e,r))}}function mt(e,t){var i;if(e.length===t.length){for(i=0;i<e.length;i++)if(e[i]!==t[i])return;retn=Math.ceil(1024*kt/a.sh-1&&(a=r),r--)}if(!s_t.prototype.init.call(this),this.puis.videoTrack=null,this.pendingBoxes.length=0,this.pending},this.flush=func{var t=31&e[1];return t<<=8,t|=e[2]}function At(e){return!!(64&e[1])}function Pt(e){var t=0;return 1<(48&e[3])>>>4&&(t+=e[4]+1),t}fun 5:bsp";casmCharCode(e[1]),t+=Stribart={c),,s=16&i.flags[2],o=32&i.flags[2],u=65536&i.flags[0],l=131072&i.flags[0],e=8;return n&&(e+=4,i.baseDataOffset=t.getUint32(12),e+=4),r&&(i.sampleDescriptionIndex=t.getUint32(e),e+=4),a&&(i.defaultSampleDuration=t.getUint32(e),e+=4),s&&(i.defaultSampleSize=t.getUint32(e),e+=4),o&&(i.defaultSampleFlags=t.tions=fu]},this.resetCaptiononER?vacodec+=".",t.codec+=Xt(r[9]),t.codec+=Xtst(t.codec+="."+Xt(e,t){e=xt(e);return 0===e?"pat":e===t?"pmt":t?ar r=3+((15&e(!At(e))return null;var t=4+!==n-2&&"sllse{if(n=e.s=J(e.appendStart)))=functi:(tmes.currentTransmux=e.transmuxQueue.shift(),"function"==typeof e.currentTact={custom:t.custoeloadSourceOnErr,"awit}}}{vae+"n(ee){ "+",eemok"})},t.dispose=function(){var t=this;this.trigger("dist(e),,i.parse(n),i.flush()},tap,n=r.MPEGTS/pl-r.LOCAL+t.ma{var l=o[t.endList||0urn a}},{name:"Segment",runtinuity",run:function(+){vaies[s]||this.discon.lastTimelineChange=function(e){var t=e.type,i=e.from,e=e.to;return"number"==typeof i&&"number"==typeof e&&(this.lastTimelineChanges_[t]={type:t,from:i,to:e},delete this.pendingTimelineChanges_[t],this.trigger("timeypeof grted inePrn nslice(0),this.listeners[e].splice(t,1),-1<t},t.trigger=function(e){var t=this.=t[1n e()uttype.slice.call(t)),e=new Uint8Array(e.byteLength),l=new Int32Array(e.buffer),d=i[0],c=i[1],h=i[2],p=i[3],f=0;f<o.length;f+=4)n=g(o[f]),r=g(o[f+1]),a=g(o[f+2]),s=g(o[f+3]),u.decrypt(n,r,a,s,l,f),l[f]=g(l[f]^d),l[f+1]=g(l[f+1]^c),l[f+2]=g(l[f+2]^h),l[f+3]=g(l[f+3]^p),00"),e("0x1000byteLength:i.bist;Gl(e,tracks)t.traactiveTract.on("erroreOptions({)return;m=new El(faptionServirgeOptionseamId,kind:"captions",default:l.default,language:l.language,label:l.label},!1).track,s[o]=l))}}},_d={AUDIO:function(i,n){return function(){var e,t=n.mediaTypeH);return Math.min(t+e*i,n)},t.bufferLowWaterLine=function(){var e=thip"}),this.tech_.trigger({type:"uh<2)return tr.createTimeRanges();for(var t=[],i=1;i<e.length;i++){var n=e.end(i-1),r=e.start(i);t.pu:30,getSource:function(e){return e(this.tech({IWillNotUsindow.devicePixelRatio||1;return i<0&&(i=this.systemBaResolution:function(e,t){var i,n;r}what you are doing"),kl[t]},set:function(e){tr.log.warn("using Vhs."+t+" is UNSAFE be sure you know what you are doing"),"number"!=typeof e||e< e[r]&&(o[r].url=epportsNativeHls=function(){if(!document||!document.createElement)return!1;var t=document.createElement("video");if(!tr.getTech("Html5").isSupported())return!1;return["application/vnd.apple.mpegurl","audio/mpegurl"ation/mpegurl"].some(function(e){return/maybe|probably/i.test(t.canPlayType(e))})}(),kd.supportsNativeDash=!!(document&&documentose.call(this)},t.convertToProgramTime=function(e,t){return Cu({playlist:this.masterPlaylistContr=!0),void 0==d 0===t?{}:t().vhs instead."),t.vhs},configurable:!0}),t.vhs.xhr=vu(),t.vhs.src(e.src,e.type),t.vhs},canPlayType:function(e,t){var i=tr.mergeOptions(tr.options,t=void 0===t?{}:t),t=i.vhs,t=(t=void 0===t?{}:t).overrideNative,t=void 0===t?!tr.browser.IS_ANY_SAFARI:t,i=i.hls,i=(i=void 0===i?{}:i).overrideNative,i=void 0!==i&&i,e=gr(e);return e&&(!kd.supportsTypeNatively(e)||i||t)?"maybe":""}};return fr("avc1.4d400d,mp4a.40.2")&&tr.getTech("Html5").registerSourceHandler(Dd,0),tr.VhsHandler=Ld,Object.defineProperty(tr,"HlsHandleandler instead."),Ld},configurable:!0}),tr.VhsSourceHandler=Dd,Object.defineProperty(tr,"HlsSourceHandler",{get:function(){return tr.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."),Dd},configurable:!0}),tr.Vhs=kd,Object.{get:function(){return tr.log.warn("vi80C3+ajgCKKDY6cegP59TYBzukAL+z1Zsq8ctaJTTKPrsUQLbXQQI0EXKXroY4AbDDHCGBNMcYsZ7nCPB8yxwCOe8IwXvOIN7/jAJ76wxHfUqWX+OzgumWAjJMV17i0Ndlr6irLKO+qftdT7i6y4uFSUvCknay+lFYZIZaQcmfH/xIFdYn98bqhra1aKTM/6lWMnyaYirx1rFUQZFBkb2zJUtoXeJCeg0BOisoQHNDFDeZnqKDy9hRNawN7Vh727hFzcJ5c8TILrKZfH7tIPxAFP0BpLeJPA==";

/***/ }),

/***/ 6862:
/***/ (function(module) {

"use strict";
module.exports = window["document"];

/***/ }),

/***/ 4450:
/***/ (function(module) {

duleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the modtExport function for compatibility with non-harmony modules
/******/ 		__webpack_ons for harmony exports
/******/ 		__webpack_require__.d = funct**/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_reqw Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof nction() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.d/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/base uri */
/******/ 	!function() {
/******/ 		__webpack_require__.b = undefined;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/common/libs/stone.min.js
var stone_min = __webpack_require__(9531);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(9554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.sub.js
var es_string_sub = __webpack_require__(86);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(8304);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.bind.js
var es_function_bind = __webpack_require__(4812);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(2772);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(9714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(2419);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(1532);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.create.js
var es_object_create = __webpack_require__(8011);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(9070);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-primitive.js
var es_symbol_to_primitive = __webpack_require__(6649);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-primitive.js
var es_date_to_primitive = __webpack_require__(6078);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(5827);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.slice.js
var es_array_buffer_slice = __webpack_require__(9575);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__(2472);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
var es_typed_array_copy_within = __webpack_require__(2990);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
var es_typed_array_every = __webpack_require__(8927);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
var es_typed_array_fill = __webpack_require__(3105);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
var es_typed_array_filter = __webpack_require__(5035);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
var es_typed_array_find = __webpack_require__(4345);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
var es_typed_array_find_index = __webpack_require__(7174);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
var es_typed_array_for_each = __webpack_require__(2846);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
var es_typed_array_index_of = __webpack_require__(7209);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
var es_typed_array_iterator = __webpack_require__(6319);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
var es_typed_array_join = __webpack_require__(8867);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
var es_typed_array_last_index_of = __webpack_require__(7789);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
var es_typed_array_map = __webpack_require__(3739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
var es_typed_array_reduce = __webpack_require__(9368);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
var es_typed_array_reduce_right = __webpack_require__(4483);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
var es_typed_array_reverse = __webpack_require__(2056);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__(3462);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
var es_typed_array_slice = __webpack_require__(678);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
var es_typed_array_some = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__(3824);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.subarray.js
var es_typed_array_subarray = __webpack_require__(5021);
// EXTERNALtyped_array_to_locale_string = __webpack_require__(2974);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__(5016);
;// CONCATENATED MODULE: ./src/common/utils/utils.js

































var capitalize = function capitareturn obj.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var UUID4 = function UUID4() {
  try {
    return crypto.randomUUID();
  } catch (error) {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
      return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
  }
};
var isSmartphone = window.matchMedia('(max-width: 414px)');
var isTablet = window.matchMedia('(min-width: 415px) and (max-width: 1023px)');

;// CONCATENATED MODULE: ./src/common/components/seasonselectorcomponent.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SeasonSelectorComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SeasonSelectorComponent, _HTMLElement);
  var _super = _createSuper(SeasonSelectorComponent);
  function SeasonSelectorComponent() {
    var _this;
    _classCallCheck(this, SeasonSelectorComponent);
    _this = _super.call(this);
    _this._$select = null;
    _this._$div = null;
    _this.currentSeason = null;
    _this.setHyogaManager = function (hyogaPlayerReference) {
      _this.hyogaManager = document.getElementById(hyogaPlayerReference).getHyogaManager();
    };
    _this.notifySeasonChange = function (hyogaPlayerReference, e) {
      _this.currentSeason = e.target.value;
      _this.hyogaManager.pub('hyoga', hyogaPlayerReference, 'hyoga-seasonselector-change', {
        selectedSeason: _this.currentSeason
      });
    };
    _this.eventsHandler = function (event, data) {
      var i18n = data.i18n;
      _this.currentSeason = data.selectedSeason;
      switch (event) {
        case 'hyoga-seasonselector-init':
          data.seasons.forEach(function (seasonNumber) {
            var selected = _this.currentSeason == seasonNumber ? ' selected' : '';
            var season = "<option value='".concat(seasonNumber, "'").concat(selected, ">").concat(capitalize(i18n.season), " ").concat(seasonNumber, "</option>");
            _this._$select.innerHTML += season;
          });
          _this._$div.classList.remove('hyoga-hidden-selector');
          break;
      }
    };
    return _this;
  }
  _createClass(SeasonSelectorComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      this.innerHTML = "\n        <style>\n        .hyoga-hidden-selector {\n            display: none !important;\n        }\n        </style>\n        <div class=\"select-seasons select-s hyoga-hidden-selector\">\n            <select></select>\n        </div>";
      this._$select = this.querySelector('select');
      this._$div = this.querySelector('div');
      var hyogaPlayerReference = this.getAttribute('hyogamanager');
      if (hyogaPlayerReference) {
        this.setHyogaManager(hyogaPlayerReference);
        this.hyogaManager.sub('hyoga', hyogaPlayerReference, 'hyoga-seasonselector-init', this.eventsHandler);
        this.hyogaManager.pub('hyoga', hyogaPlayerReference, 'hyoga-seasonselector-ready', {});
      }
      this._$select.addEventListener('change', function (e) {
        _this2.notifySeasonChange(hyogaPlayerReference, e);
      });
    }
  }]);
  return SeasonSelectorComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(1058);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(7941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(9720);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__(9753);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(1038);
;// CONCATENATED MODULE: ./src/common/components/carouselcomponent.js
function ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, carouselcomponent_typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.construi) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

































function carouselcomponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function carouselcomponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, carouselcomponent_toPropertyKey(descriptor.key), descriptor); } }
function carouselcomponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) carouselcomponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) carouselcomponent_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function carouselcomponent_toPropertyKey(arg) { var key = carouselcomponent_toPrimitive(arg, "string"); return carouselcomponent_typeof(key) === "symbol" ? key : String(key); }
function carouselcomponent_toPrimitive(input, hint) { if (carouselcomponent_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (carouselcomponent_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function carouselcomponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) carouselcomponent_setPrototypeOf(subClass, superClass); }
function carouselcomponent_createSuper(Derived) { var hasNativeReflectConstruct = carouselcomponent_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = carouselcomponent_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = carouselcomponent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return carouselcomponent_possibleConstructorReturn(this, result); }; }
function carouselcomponent_possibleConstructorReturn(self, call) { if (call && (carouselcomponent_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return carouselcomponent_assertThisInitialized(self); }
function carouselcomponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function carouselcomponent_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; carouselcomponent_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !carouselcomponent_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return carouselcomponent_construct(Class, arguments, carouselcomponent_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return carouselcomponent_setPrototypeOf(Wrapper, Class); }; return carouselcomponent_wrapNativeSuper(Class); }
function carouselcomponent_construct(Parent, args, Class) { if (carouselcomponent_isNativeReflectConstruct()) { carouselcomponent_construct = Reflect.construct.bind(); } else { carouselcomponent_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) carouselcomponent_setPrototypeOf(instance, Class.prototype); return instance; }; } return carouselcomponent_construct.apply(null, arguments); }
function carouselcomponent_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function carouselcomponent_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function carouselcomponent_setPrototypeOf(o, p) { carouselcomponent_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return carouselcomponent_setPrototypeOf(o, p); }
function carouselcomponent_getPrototypeOf(o) { carouselcomponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return carouselcomponent_getPrototypeOf(o); }
var CarouselItemComponent = /*#__PURE__*/function (_HTMLElement) {
  carouselcomponent_inherits(CarouselItemComponent, _HTMLElement);
  var _super = carouselcomponent_createSuper(CarouselItemComponent);
  function CarouselItemComponent() {
    var _this;
    carouselcomponent_classCallCheck(this, CarouselItemComponent);
    _this = _super.call(this);
    _this.events = ['hyoga-carouselitem-trigger-click'];
    _this.hyogaPlayerReference = undefined;
    _this.setHyogaManager = function (hyogaPlayerReference) {
      _this.hyogaManager = document.getElementById(hyogaPlayerReference).getHyogaManager();
    };
    _this.notifyVideoChange = function (hyogaPlayerReference, e) {
      _this.hyogaManager.pub('hyoga', hyogaPlayerReference, 'hyoga-carouselitem-click', {
        assetId: _this.id,
        title: _this.name
      });
    };
    _this.eventsHandler = function (event, data) {
      switch (event) {
        case 'hyoga-carouselitem-trigger-click':
          if (_this.id == data.nextvideoId) {
            _this.notifyVideoChange(_this.hyogaPlayerReference);
          }
          break;
      }
    };
    return _this;
  }
  carouselcomponent_createClass(CarouselItemComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      this.id = this.getAttribute('id');
      this.name = this.getAttribute('name');
      this.showName = this.getAttribute('showName');
      this.duration = Math.max(1, Math.floor(parseInt(this.getAttribute('duration')) / 60000)); // this grants clips <1min appearing 1min
      this.poster = this.getAttribute('poster');
      this.description = this.getAttribute('description');
      this.seasonNumber = this.getAttribute('seasonnumber');
      this.seasonAbbr = this.getAttribute('seasonAbbr');
      this.episodeNumber = this.getAttribute('episodenumber');
      this.episodeAbbr = this.getAttribute('episodeAbbr');
      this.videoType = this.getAttribute('videotype');
      this.ageRating = this.getAttribute('ageRating');
      this.minAbbr = this.getAttribute('minAbbr');
      this.playerType = this.getAttribute('playerType');
      this.hyogaPlayerReference = this.getAttribute('hyogamanager');
      if (this.hyogaPlayerReference) {
        this.setHyogaManager(this.hyogaPlayerReference);
        this.hyogaManager.sub('hyoga', this.hyogaPlayerReference, this.events, this.eventsHandler);
      }
      this.setAttribute('class', 'card swiper-slide swiper-lazy video');
      this.setAttribute('data-background', "".concat(this.poster, "?w=480&f=jpg&q=75"));
      var seasonLabel = this.videoType == 'EPISODE' ? "".concat(this.seasonAbbr).concat(this.seasonNumber, ":").concat(this.episodeAbbr).concat(this.episodeNumber) : '';
      var title = null;
      var description = null;
      var ageRating = parseInt(this.ageRating);
      var ageRatingClass = '';
      if (isNaN(ageRating) || ![0, 6, 12, 16, 18].includes(ageRating)) {
        ageRating = '';
      } else {
        ageRatingClass = "agerating age-".concat(ageRating);
      }
      if (this.playerType == 'showPlayer') {
        title = this.name;
        description = this.description;
      } else if (this.playerType == 'collectionPlayer') {
        title = this.showName;
        description = this.name;
      }
      this.innerHTML = "\n            <div class=\"swiper-lazy-preloader\"></div>\n            <span class=\"card-ico left ".concat(ageRatingClass, "\">").concat(ageRating, "</span>\n            <span class=\"card-ico\"></span>\n            <div class=\"card-desc\">").concat(description, "</p>\n                <p class=\"card-season\">").concat(seasonLabel, "</p>\n                <p class=\"card-duration\">").concat(this.duration, " ").concat(this.minAbbr, "</p>\n            </div>\n        ");
      this.addEventListener('click', function (e) {
        _this2.notifyVideoChange(_this2.hyogaPlayerReference, e);
      });
    }
  }]);
  return CarouselItemComponent;
}( /*#__PURE__*/carouselcomponent_wrapNativeSuper(HTMLElement));
var CarouselComponent = /*#__PURE__*/function (_HTMLElement2) {
  carouselcomponent_inherits(CarouselComponent, _HTMLElement2);
  var _super2 = carouselcomponent_createSuper(CarouselComponent);
  function CarouselComponent() {
    var _this3;
    carouselcomponent_classCallCheck(this, CarouselComponent);
    _this3 = _super2.call(this);
    _this3.events = ['hyoga-carousel-init', 'hyoga-carousel-update', 'hyoga-carousel-title-update', 'hyoga-carousel-trigger-nextvideo'];
    _this3.hyogaPlayerReference = undefined;
    _this3._$titleParagraph = null;
    _this3._$swiperwrapper = null;
    _this3.videoItems = [];
    _this3.videoItemsGraph = new Map([]);
    _this3.swiper = undefined;
    _this3.setHyogaManager = function (hyogaPlayerReference) {
      _this3.hyogaManager = document.getElementById(hyogaPlayerReference).getHyogaManager();
    };
    _this3.buildCarouselItem = function (data) {
      var item = document.createElement('hyoga-carouselitem');
      Object.keys(data).forEach(function (key) {
        item.setAttribute(key, data[key]);
      });
      item.setAttribute('episodeAbbr', _this3.i18n.episodeAbbr);
      item.setAttribute('seasonAbbr', _this3.i18n.seasonAbbr);
      item.setAttribute('minAbbr', _this3.i18n.minAbbr);
      item.setAttribute('hyogamanager', _this3.hyogaPlayerReference);
      return item;
    };
    _this3.buildCarousel = function (season) {
      Object.entries(_this3.videoItems).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          seasonId = _ref2[0],
          seasonVideos = _ref2[1];
        seasonVideos.forEach(function (video) {
          if (parseInt(seasonId) === parseInt(season)) {
            _this3._$swiperwrapper.appendChild(_this3.buildCarouselItem(video));
          }
          if (!_this3.videoItemsGraph.has(video.id)) {
            _this3.videoItemsGraph.set(video.id, video.nextVideoId);
          }
        });
      });
    };
    _this3.launchSwiper = function (selector, action) {
      switch (action) {
        case 'init':
          _this3.swiper = new Swiper(selector, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            watchSlidesVisibility: true,
            autoplay: false,
            setWrapperSize: true,
            centeredSlides: false,
            freeMode: true,
            freeModeMomentumRatio: 0.3,
            freeModeSticky: true,
            calculateHeight: true,
            pagination: false,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            updateOnWindowResize: true,
            preloadImages: false,
            lazy: true,
            observer: true,
            observeParents: true
          });
          break;
        case 'update':
          _this3.swiper.update();
          _this3.swiper.slideTo(0);
          _this3.swiper.lazy.load();
          break;
      }
    };
    _this3.eventsHandler = function (event, data) {
      switch (event) {
        case 'hyoga-carousel-init':
          _this3.uid = "hyogacarousel-".concat(data.uid);
          _this3.i18n = data.i18n;
          _this3.innerHTML = "\n                    <h2 class=\"currentplayer header\">\n                        <p class=\"episodeTitle\">".concat(data.videoTitle, "</p>\n                    </h2>\n                    <div class=\"swiper-container movie-episode collection block-video ott ").concat(_this3.uid, " player-carousel swiper-container-initialized swiper-container-horizontal\">\n                        <div class=\"swiper-wrapper\"></div>\n                        <div class=\"swiper-pagination\"></div>\n                        <div class=\"swiper-button-prev\"><span class=\"ico-arrow-left\"></div>\n                        <div class=\"swiper-button-next\"><span class=\"ico-arrow-right\"></span></div>\n                    </div>\n                    ");
          _this3._$titleParagraph = _this3.querySelector('h2 .episodeTitle');
          _this3._$swiperwrapper = _this3.querySelector(".".concat(_this3.uid, " .swiper-wrapper"));
          _this3.videoItems = data.videos;
          _this3.buildCarousel(data.selectedSeason);
          if (data.hideplaylistthumbnails) {
            _this3.querySelector(".".concat(_this3.uid)).style.display = 'none';
          } else {
            _this3.launchSwiper(".".concat(_this3.uid), 'init');
          }
          break;
        case 'hyoga-carousel-update':
          _this3._$titleParagraph.innerText = _this3.videoItems[data.selectedSeason][0].name;
          _this3.swiper.removeAllSlides();
          _this3.buildCarousel(data.selectedSeason);
          _this3.launchSwiper(".".concat(_this3.uid), 'update');
          break;
        case 'hyoga-carousel-title-update':
          _this3._$titleParagraph.innerText = data.title;
          break;
        case 'hyoga-carousel-trigger-nextvideo':
          var nextvideoId = _this3.videoItemsGraph.get(data.currentVideo);
          if (nextvideoId) {
            _this3.hyogaManager.pub('hyoga', _this3.hyogaPlayerReference, 'hyoga-carouselitem-trigger-click', {
              currentVideo: data.currentVideo,
              nextvideoId: nextvideoId
            });
          }
          break;
      }
    };
    return _this3;
  }
  carouselcomponent_createClass(CarouselComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.hyogaPlayerReference = this.getAttribute('hyogamanager');
      if (this.hyogaPlayerReference) {
        this.setHyogaManager(this.hyogaPlayerReference);
        this.hyogaManager.sub('hyoga', this.hyogaPlayerReference, this.events, this.eventsHandler);
        this.hyogaManager.pub('hyoga', this.hyogaPlayerReference, 'hyoga-carousel-ready', {});
      }
    }
  }]);
  return CarouselComponent;
}( /*#__PURE__*/carouselcomponent_wrapNativeSuper(HTMLElement));

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(2564);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(6755);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint16-array.js
var es_typed_array_uint16_array = __webpack_require__(8255);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.from.js
var es_typed_array_from = __webpack_require__(8145);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(9826);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__(5212);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(9600);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(5003);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(9337);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__(3321);
// EXTERNAL MODULE: ./src/videojs/lib/videojs.min.js
var videojs_min = __webpack_require__(1465);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-float.js
var es_parse_float = __webpack_require__(4678);
;// CONCATENATED MODULE: ./src/common/trackers/videodebugger.js
function videodebugger_typeof(obj) { "@babel/helpers - typeof"; return videodebugger_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, videodebugger_typeof(obj); }












function videodebugger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, videodebugger_toPropertyKey(descriptor.key), descriptor); } }
function videodebugger_createClass(Constructor, protoProps, staticProps) { if (protoProps) videodebugger_defineProperties(Constructor.prototype, protoProps); if (staticProps) videodebugger_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function videodebugger_toPropertyKey(arg) { var key = videodebugger_toPrimitive(arg, "string"); return videodebugger_typeof(key) === "symbol" ? key : String(key); }
function videodebugger_toPrimitive(input, hint) { if (videodebugger_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (videodebugger_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function videodebugger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var VideoDebugger = /*#__PURE__*/videodebugger_createClass(function VideoDebugger(metaData, playerReference, events, eventsManager) {
  videodebugger_classCallCheck(this, VideoDebugger);
  this.metaData = metaData;
  this.playerReference = playerReference;
  this.events = events;
  this.eventsManager = eventsManager;
  this.handler = function (event, data) {
    console.warn('** VIDEO DEBUGGER ** ');
    console.warn("Event: ".concat(event));
    console.warn(data);
  };
  this.eventsManager.sub('video', this.playerReference, this.events, this.handler);
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(2023);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(4765);
;// CONCATENATED MODULE: ./src/common/trackers/adobe.js
function adobe_typeof(obj) { "@babel/helpers - typeof"; return adobe_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, adobe_typeof(obj); }



















function adobe_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, adobe_toPropertyKey(descriptor.key), descriptor); } }
function adobe_createClass(Constructor, protoProps, staticProps) { if (protoProps) adobe_defineProperties(Constructor.prototype, protoProps); if (staticProps) adobe_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function adobe_toPropertyKey(arg) { var key = adobe_toPrimitive(arg, "string"); return adobe_typeof(key) === "symbol" ? key : String(key); }
function adobe_toPrimitive(input, hint) { if (adobe_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (adobe_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function adobe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var AdobeAnalytics = /*#__PURE__*/adobe_createClass(function AdobeAnalytics(metaData, playerReference, events) {
  var _this = this;
  var eventsManager = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : lomaEventsManager;
  adobe_classCallCheck(this, AdobeAnalytics);
  this.metaData = metaData;
  this.playerReference = playerReference;
  this.events = events;
  this.eventsManager = eventsManager;
  this.initialized = false;
  this.trackingStarted = false;
  this.secondsViewed = 0;
  this.firstPlay = false;
  this.mediaHeartbeat = null;
  this.heartbeatInstance = null;
  this.mediaheartbeatConfig = null;
  this.mediaheartbeatDelegate = null;
  this.appMeasurement = null;
  this.paused = false;
  this.mediaDelegate = {
    getCurrentPlaybackTime: function getCurrentPlaybackTime() {
      return parseInt(_this.secondsViewed);
    }
  };
  this.getMediaHeartbeatConfig = function () {
    var mediaHeartbeatConfig = new window.ADB.va.MediaHeartbeatConfig();
    mediaHeartbeatConfig.trackingServer = _this.adobeConfiguration.hbTrackingServer;
    mediaHeartbeatConfig.playerName = _this.metaData.playerName;
    mediaHeartbeatConfig.channel = _this.metaData.contentChannel;
    mediaHeartbeatConfig.debugLogging = window.location.search.includes('&debug');
    mediaHeartbeatConfig.ssl = window.location.protocol === 'https:';
    mediaHeartbeatConfig.ovp = 'Sonic VMS';
    return mediaHeartbeatConfig;
  };
  this.getMediaHeartbeatDelegate = function () {
    var mediaHeartbeatDelegate = new window.ADB.va.MediaHeartbeatDelegate();
    if (_this.mediaDelegate.getCurrentPlaybackTime) {
      mediaHeartbeatDelegate.getCurrentPlaybackTime = _this.mediaDelegate.getCurrentPlaybackTime;
    }
    return mediaHeartbeatDelegate;
  };
  this.getAppMeasurement = function () {
    var visitor = new window.Visitor(_this.adobeConfiguration.marketingCloudOrgId);
    visitor.trackingServer = _this.adobeConfiguration.scTrackingServer;
    var appMeasurement = new window.AppMbeConfiguration.scTrackingServer;
    appMeasurement.account = _this.adobeConfiguration.reportSuiteId;
    appMeasurement.charSet = 'UTF8';
    appMeasurement.pageName = document.title;
    return appMeasurement;
  };
  this.getMediaHeartbeat = function () {
    return new _this.mediaHeartbeat(_this.mediaheartbeatDelegate, _this.mediaheartbeatConfig, _this.appMeasurement);
  };
  this.updateContextDataRandomVideoId = function () {
    _this.contextData.randomVideoId = Math.random().toString(36).substr(2);
  };
  this.createMediaObject = function (data) {
    var mediaObject = _this.mediaHeartbeat.createMediaObject(data.content.contentTitle, data.content.analyticsId, data.content.videoDuration, data.content.videoType == 'LIVE' ? _this.mediaHeartbeat.StreamType.LIVE : _this.mediaHeartbeat.StreamType.VOD);
    if (data.currentPosition > 0) {
      mediaObject.setValue(_this.mediaHeartbeat.MediaObjectKey.VideoResumed, true);
    }
    var contextData = {};
    if (data.content.contentShowTitle) {
      contextData[_this.mediaHeartbeat.VideoMetadataKeys.SHOW] = data.content.contentShowTitle;
    }
    if (data.content.contentSeasonNumber) {
      contextData[_this.mediaHeartbeat.VideoMetadataKeys.SEASON] = data.content.contentSeasonNumber;
    }
    if (data.content.contentEpisodeNumber) {
      contextData[_this.mediaHeartbeat.VideoMetadataKeys.EPISODE] = data.content.contentEpisodeNumber;
    }
    switch (data.content.videoType) {
      case 'EPISODE':
        contextData[_this.mediaHeartbeat.VideoMetadataKeys.SHOW_TYPE] = 0;
        break;
      case 'TRAILER':
        contextData[_this.mediaHeartbeat.VideoMetadataKeys.SHOW_TYPE] = 1;
        break;
      case 'CLIP':
        contextData[_this.mediaHeartbeat.VideoMetadataKeys.SHOW_TYPE] = 2;
        break;
      default:
        contextData[_this.mediaHeartbeat.VideoMetadataKeys.SHOW_TYPE] = 3;
        break;
    }
    mediaObject.setValue(_this.mediaHeartbeat.MediaObjectKey.StandardVideoMetadata, contextData);
    return mediaObject;
  };
  this.init = function () {
    if (window._satellite && window.ADB && window.digitalData && 'environment' in window.digitalData) {
      _this.contextData = {
        'digitalData.environment.siteId': window.digitalData.environment.siteId,
        'digitalData.environment.appType': window.digitalData.environment.appType
      };
      _this.eventsManager.sub('video', _this.playerReference, _this.events, _this.handler);
      _this.initAdobeEnv();
    }
  };
  this.initAdobeEnv = function () {
    try {
      if (window._satellite && window._satellite.initialized && window.ADB.va.MediaHeartbeat && !_this.initialized) {
        _this.adobeConfiguration = window.adobeConfiguration;
        _this.mediaHeartbeat = window.ADB.va.MediaHeartbeat;
        _this.mediaheartbeatConfig = _this.getMediaHeartbeatConfig();
        _this.mediaheartbeatDelegate = _this.getMediaHeartbeatDelegate();
        _this.appMeasurement = _this.getAppMeasurement();
        _this.initialized = true;
      }
    } catch (err) {
      //pass
    }
  };
  this.endHeartbeatTracking = function () {
    if (_this.heartbeatInstance) {
      _this.heartbeatInstance.trackComplete();
      _this.heartbeatInstance.trackSessionEnd();
      _this.heartbeatInstance = null;
      _this.trackingStarted = false;
    }
  };
  this.initHeartbeatInstance = function (data) {
    _this.updateContextDataRandomVideoId();
    _this.mediaObject = _this.createMediaObject(data);
    _this.heartbeatInstance = _this.getMediaHeartbeat();
  };
  this.initHeartbeatTracking = function () {
    if (_this.heartbeatInstance && !_this.trackingStarted) {
      _this.trackingStarted = true;
      _this.heartbeatInstance.trackSessionStart(_this.mediaObject, _this.contextData);
    }
  };
  this.handler = function (event, data) {
    switch (event) {
      case 'sourceloaded':
        _this.initAdobeEnv();
        _this.endHeartbeatTracking();
        _this.initHeartbeatInstance(data);
        break;
      case 'play-request':
        _this.initHeartbeatTracking();
        break;
      case 'play':
        _this.initHeartbeatTracking();
        if (_this.adTracking) {
          if (_this.heartbeatInstance) {
            _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.AdComplete);
            _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.AdBreakComplete);
          }
          _this.adTracking = false;
        }
        if (_this.heartbeatInstance && (_this.paused || !_this.firstPlay)) {
          _this.heartbeatInstance.trackPlay();
          _this.paused = false;
          _this.firstPlay = true;
        }
        break;
      case 'pause':
        if (!_this.adTracking && _this.heartbeatInstance) {
          _this.paused = true;
          _this.heartbeatInstance.trackPause();
        }
        break;
      case 'seeking':
        if (!_this.adTracking && _this.heartbeatInstance && _this.paused) {
          _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.SeekStart);
        }
        break;
      case 'seeked':
        if (!_this.adTracking && _this.heartbeatInstance && _this.paused) {
          _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.SeekComplete);
        }
        break;
      case 'ended':
        if (!_this.adTracking) {
          _this.endHeartbeatTracking();
        }
        break;
      case 'ads-endedpostrolls':
        _this.endHeartbeatTracking();
        break;
      case 'timeupdate':
        _this.secondsViewed = data.content.currentTime;
        break;
      case 'ads-ad-started':
        _this.firstPlay = true;
        _this.adTracking = true;
        var adData = data.ads.ad;
        var adName = adData.id.toString() + ': ' + adData.type.toString();
        var adBreakObj = _this.mediaHeartbeat.createAdBreakObject(adName, adData.index, adData.currentTime);
        var adObj = _this.mediaHeartbeat.createAdObject(adName, adData.id, adData.index, adData.duration);
        if (_this.heartbeatInstance) {
          _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.AdBreakStart, adBreakObj);
          _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.AdStart, adObj);
        }
        break;
      case 'ads-ad-ended':
        if (_this.heartbeatInstance) {
          _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.AdComplete);
          _this.heartbeatInstance.trackEvent(_this.mediaHeartbeat.Event.AdBreakComplete);
        }
        _this.adTracking = false;
        break;
    }
  };
  this.init();
});

;// CONCATENATED MODULE: ./src/common/trackers/google.js
function google_typeof(obj) { "@babel/helpers - typeof"; return google_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, google_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = google_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























function google_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, google_toPropertyKey(descriptor.key), descriptor); } }
function google_createClass(Constructor, protoProps, staticProps) { if (protoProps) google_defineProperties(Constructor.prototype, protoProps); if (staticProps) google_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function google_toPropertyKey(arg) { var key = google_toPrimitive(arg, "string"); return google_typeof(key) === "symbol" ? key : String(key); }
function google_toPrimitive(input, hint) { if (google_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (google_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function google_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleAnalytics = /*#__PURE__*/google_createClass(function GoogleAnalytics(metaData, playerReference, events) {
  var _this = this;
  var eventsManager = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : lomaEventsManager;
  google_classCallCheck(this, GoogleAnalytics);
  this.metaData = metaData;
  this.playerReference = playerReference;
  this.events = events;
  this.eventsManager = eventsManager;
  this.currentTime = 0;
  this.lastReportTime = 0;
  this.contentPlayDelta = 2;
  this.validStreamDelta = 0.3;
  this.validStreamReported = false;
  this.videoViewDelta = 1;
  this.videoViewReported = false;
  this.firstPlay = true;
  this.paused = true;
  this.playbackSession = undefined;
  this.adSession = undefined;
  this.isHbbtv = Array.from(document.getElementsByTagName('meta')).find(function (metaTag) {
    return metaTag.content && metaTag.content.indexOf('hbbtv') > -1 && true || false;
  });
  this.handler = function (event, data) {
    var eventPrefix = 'player_';
    var eventName = undefined;
    var eventValue = undefined;
    var reportTimeUpdateEvent = function reportTimeUpdateEvent(currentTime, lastReportTime, interval) {
      return currentTime - lastReportTime >= interval;
    };
    switch (event) {
      case 'sourceloaded':
        _this.playbackSession = UUID4();
        _this.adSession = undefined;
        eventName = "".concat(eventPrefix, "impression");
        eventValue = 1;
        break;
      case 'play':
        _this.adSession = undefined;
        if (_this.firstPlay) {
          _this.firstPlay = false;
          eventName = "".concat(eventPrefix, "content_play");
        } else {
          eventName = "".concat(eventPrefix, "content_resume");
        }
        eventValue = 1;
        break;
      case 'pause':
        eventName = "".concat(eventPrefix, "content_pause");
        eventValue = 1;
        break;
      case 'seeked':
        eventName = "".concat(eventPrefix, "content_seek");
        eventValue = 1;
        break;
      case 'ended':
        eventName = "".concat(eventPrefix, "content_ended");
        eventValue = 1;
        break;
      case 'ads-load':
        eventName = "".concat(eventPrefix, "ads_load");
        eventValue = 1;
        break;
      case 'ads-request-success':
        eventName = "".concat(eventPrefix, "ads_request_success");
        eventValue = 1;
        break;
      case 'ads-request-error':
        eventName = "".concat(eventPrefix, "ads_request_error");
        eventValue = 1;
        break;
      case 'ads-no-preroll':
        eventName = "".concat(eventPrefix, "ads_no_preroll");
        eventValue = 1;
        break;
      case 'ads-has-preroll':
        eventName = "".concat(eventPrefix, "ads_has_preroll");
        eventValue = 1;
        break;
      case 'ads-playprerolls':
        eventName = "".concat(eventPrefix, "ads_playprerolls");
        eventValue = 1;
        break;
      case 'ads-endedprerolls':
        eventName = "".concat(eventPrefix, "ads_endedprerolls");
        eventValue = 1;
        break;
      case 'ads-no-midroll':
        eventName = "".concat(eventPrefix, "ads_no_midroll");
        eventValue = 1;
        break;
      case 'ads-has-midroll':
        eventName = "".concat(eventPrefix, "ads_has_midroll");
        eventValue = 1;
        break;
      case 'ads-playmidrolls':
        eventName = "".concat(eventPrefix, "ads_playmidrolls");
        eventValue = 1;
        break;
      case 'ads-endedmidrolls':
        eventName = "".concat(eventPrefix, "ads_endedmidrolls");
        eventValue = 1;
        break;
      case 'ads-no-postroll':
        eventName = "".concat(eventPrefix, "ads_no_postroll");
        eventValue = 1;
        break;
      case 'ads-has-postroll':
        eventName = "".concat(eventPrefix, "ads_has_postroll");
        eventValue = 1;
        break;
      case 'ads-playpostrolls':
        eventName = "".concat(eventPrefix, "ads_playpostrolls");
        eventValue = 1;
        break;
      case 'ads-endedpostrolls':
        eventName = "".concat(eventPrefix, "ads_endedpostrolls");
        eventValue = 1;
        break;
      case 'ads-pod-started':
        eventName = "".concat(eventPrefix, "ads_pod_start");
        eventValue = 1;
        break;
      case 'ads-pod-ended':
        _this.adSession = undefined;
        eventName = "".concat(eventPrefix, "ads_pod_end");
        eventValue = 1;
        break;
      case 'ads-ad-started':
        _this.adSession = UUID4();
        eventName = "".concat(eventPrefix, "adv_start");
        eventValue = 1;
        break;
      case 'ads-first-quartile':
        eventName = "".concat(eventPrefix, "adv_firstquartile");
        eventValue = 1;
        break;
      case 'ads-midpoint':
        eventName = "".concat(eventPrefix, "adv_midpoint");
        eventValue = 1;
        break;
      case 'ads-third-quartile':
        eventName = "".concat(eventPrefix, "adv_thirdquartile");
        eventValue = 1;
        break;
      case 'ads-ad-ended':
        eventName = "".concat(eventPrefix, "adv_end");
        eventValue = 1;
        break;
      case 'ads-click':
        eventName = "".concat(eventPrefix, "adv_click");
        eventValue = 1;
        break;
      case 'ads-mute':
        eventName = "".concat(eventPrefix, "adv_muted");
        eventValue = 1;
        break;
      case 'timeupdate':
        _this.currentTime = data.content.currentTime;
        if (!_this.validStreamReported && reportTimeUpdateEvent(_this.currentTime, _this.lastReportTime, _this.validStreamDelta)) {
          _this.validStreamReported = true;
          eventName = "".concat(eventPrefix, "video_valid_stream");
          eventValue = 1;
        }
        if (!_this.videoViewReported && reportTimeUpdateEvent(_this.currentTime, _this.lastReportTime, _this.videoViewDelta)) {
          _this.videoViewReported = true;
          eventName = "".concat(eventPrefix, "video_view");
          eventValue = 1;
        }
        if (reportTimeUpdateEvent(_this.currentTime, _this.lastReportTime, _this.contentPlayDelta)) {
          _this.lastReportTime = _this.currentTime;
          eventName = "".concat(eventPrefix, "seconds_viewed");
          eventValue = _this.contentPlayDelta;
        }
        break;
      case 'networkError':
        eventName = "".concat(eventPrefix, "network_error");
        eventValue = 1;
        break;
      case 'mediaError':
        eventName = "".concat(eventPrefix, "media_error");
        eventValue = 1;
        break;
    }
    if (eventName !== undefined && eventValue !== undefined && window.gtag !== undefined) {
      var payload = {
        'event_category': 'Video',
        'event_label': window.location.pathname,
        'value': eventValue,
        'player_show_name': data.content.contentShowTitle,
        'player_video_name': data.content.contentTitle
      };
      if (_this.isHbbtv) {
        Object.assign(payload, {
          'error_details': data.content.error || '',
          'error_fatal': data.content.fatal || '',
          'hbbtv_ua': navigator.userAgent || '',
          'player_channel_name': window.currentChannel.name
        });
      } else {
        Object.assign(payload, {
          'playback_session': _this.playbackSession
        });
      }
      if (data.ads && data.ads.ad && _this.adSession) {
        payload = _objectSpread(_objectSpread({}, payload), {
          'ad_id': data.ads.ad.id,
          'ad_duration': parseInt(data.ads.ad.duration),
          'ad_session': _this.adSession
        });
      }
      window.gtag('event', eventName, payload);
    }
  };
  this.eventsManager.sub('video', this.playerReference, this.events, this.handler);
});

;// CONCATENATED MODULE: ./src/common/trackers/comscore.js
function comscore_typeof(obj) { "@babel/helpers - typeof"; return comscore_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, comscore_typeof(obj); }















function comscore_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, comscore_toPropertyKey(descriptor.key), descriptor); } }
function comscore_createClass(Constructor, protoProps, staticProps) { if (protoProps) comscore_defineProperties(Constructor.prototype, protoProps); if (staticProps) comscore_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function comscore_toPropertyKey(arg) { var key = comscore_toPrimitive(arg, "string"); return comscore_typeof(key) === "symbol" ? key : String(key); }
function comscore_toPrimitive(input, hint) { if (comscore_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (comscore_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function comscore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var ComscoreAnalytics = /*#__PURE__*/comscore_createClass(function ComscoreAnalytics(metaData, playerReference, events) {
  var _this = this;
  var eventsManager = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : lomaEventsManager;
  comscore_classCallCheck(this, ComscoreAnalytics);
  this.metaData = metaData;
  this.playerReference = playerReference;
  this.events = events;
  this.eventsManager = eventsManager;
  this.comscorePublisherId = '20043547';
  this.streamingAnalytics = undefined;
  this.comscoreInstance = undefined;
  this.contentMetaData = undefined;
  this.channelsMappings = {
    'nove': '6513',
    'nove-it': '6513',
    'dmax': '6433',
    'dmax-it': '6433',
    'real-time': '6119',
    'realtime': '6119',
    'realtime-it': '6119',
    'giallo': '7739',
    'motor-trend': '8465',
    'motortrend': '8465',
    'motortrend-it': '8465',
    'frisbee': '6368',
    'k2': '6305',
    'animal-planet': '6120',
    'dplay-original': '3026',
    'walter-presents': '3027',
    'food-network': '6659',
    'foodnetwork': '6659',
    'foodnetwork-it': 'foodnetwork-it',
    'home-and-garden-tv': '6278',
    'hgtv': '6278',
    'hgtv-it': '6278',
    'discovery-channel': '6038',
    'discovery-science': '6115',
    'investigation-discovery': '8285',
    'warnertv': '9515',
    'wbdtv-italy': '9515',
    'wbtv-italy': '9515',
    'warner-tv': '9515'
  };
  this.currentTime = 0;
  this.firstPlay = true;
  this.buffering = false;
  this.seeking = false;
  this.paused = true;
  this.playingAds = false;
  this.position = 0;
  this.sessionStarted = false;
  this.sourceChanged = false;
  this.init = function () {
    if (window.ns_ && window.ns_.analytics) {
      var analytics = window.ns_.analytics;
      analytics.PlatformApi.setPlatformAPI(analytics.PlatformApi.PlatformApis.WebBrowser);
      var publisherConfig = new analytics.configuration.PublisherConfiguration({
        'publisherId': _this.comscorePublisherId
      });
      analytics.configuration.addClient(publisherConfig);
      analytics.configuration.enableImplementationValidationMode();
      analytics.start();
      window.ns_.analytics.PlatformApi.PlatformApis.WebBrowser;
      _this.streamingAnalytics = analytics.StreamingAnalytics;
      _this.comscoreInstance = new _this.streamingAnalytics();
      _this.comscoreInstance.setProjectId('kwp-it');
      _this.comscoreInstance.setMediaPlayerName('Hyoga');
      _this.eventsManager.sub('video', _this.playerReference, _this.events, _this.handler);
    }
  };
  this.grantNewPlaybackSession = function () {
    if (!_this.sessionStarted) {
      _this.comscoreInstance.createPlaybackSession();
      _this.sessionStarted = true;
    }
  };
  this.handler = function (event, data) {
    var video = data.content;
    switch (event) {
      case 'dispose':
        if (_this.sessionStarted) {
          _this.comscoreInstance.notifyEnd();
          _this.sessionStarted = false;
        }
        break;
      case 'sourceloaded':
        if (_this.sessionStarted) {
          _this.comscoreInstance.notifyEnd();
          _this.sessionStarted = false;
        }
        _this.sourceChanged = true;
        _this.grantNewPlaybackSession();
        var contentMediaFormat = undefined;
        var contentMediaType = undefined;
        var episodeNumber = video.contentEpisodeNumber || '*null';
        var seasonNumber = video.contentSeasonNumber || '*null';
        var genres = video.contentGenres || '*null';
        switch (video.videoType) {
          case 'EPISODE':
            /* This is the right contentMediaFormat, but we use the generic FULL_CONTENT_GENERIC
            contentMediaFormat = this.streamingAnalytics.ContentMetadata.ContentMediaFormat.FULL_CONTENT_EPISODE;
            */
            contentMediaFormat = _this.streamingAnalytics.ContentMetadata.ContentMediaFormat.FULL_CONTENT_GENERIC;
            contentMediaType = _this.streamingAnalytics.ContentMetadata.ContentType.LONG_FORM_ON_DEMAND;
            break;
          case 'CLIP':
          case 'TRAILER':
            /* This is the right contentMediaFormat, but we use the generic FULL_CONTENT_GENERIC
            contentMediaFormat = this.streamingAnalytics.contentMetaData.contentMediaFormat.PARTIAL_CONTENT_GENERIC;
            */
            contentMediaFormat = _this.streamingAnalytics.ContentMetadata.ContentMediaFormat.FULL_CONTENT_GENERIC;
            contentMediaType = _this.streamingAnalytics.ContentMetadata.ContentType.SHORT_FORM_ON_DEMAND;
            break;
          case 'LIVE':
            contentMediaFormat = '*null';
            contentMediaType = _this.streamingAnalytics.ContentMetadata.ContentType.LIVE;
            break;
        }
        var contentDuration = video.videoType == 'LIVE' ? 0 : parseInt(video.videoDuration * 1000);
        _this.contentMetaData = new _this.streamingAnalytics.ContentMetadata();
        window.con = _this.contentMetaData;
        var c3Param = video.videoType == 'LIVE' ? 'live' : 'vod';
        var c4Param = video.videoType.charAt(0).toUpperCase() + video.videoType.slice(1).toLowerCase();
        var c6Param = "Dplus Web Verticali ".concat(c4Param.toUpperCase());
        _this.contentMetaData.setDictionaryClassificationC3(c3Param);
        _this.contentMetaData.setDictionaryClassificationC4(c4Param);
        _this.contentMetaData.setDictionaryClassificationC6(c6Param);
        _this.contentMetaData.addCustomLabels({
          'oce_bpf': 'Dplus Web Verticali',
          'oce_odt': video.videoType == 'LIVE' ? '*null' : 'vod',
          'oce_ctl': video.contentTitle || '*null'
        });
        _this.contentMetaData.setStationCode(_this.channelsMappings[video.contentChannelName]);
        _this.contentMetaData.setStationTitle(video.contentChannelTitle);
        _this.contentMetaData.setPublisherName('Discovery');
        _this.contentMetaData.setDistributionModel(_this.streamingAnalytics.ContentMetadata.ContentDistributionModel.TV_AND_ONLINE);
        _this.contentMetaData.setMediaFormat(contentMediaFormat);
        _this.contentMetaData.setMediaType(contentMediaType);
        _this.contentMetaData.setLength(contentDuration);
        _this.contentMetaData.setEpisodeTitle(video.contentTitle);
        video.originalMediaId && _this.contentMetaData.setUniqueId(video.originalMediaId);
        if (video.videoType == 'LIVE') {
          _this.contentMetaData.setProgramId('*null');
          _this.contentMetaData.setEpisodeId('*null');
        } else {
          video.contentTitle && _this.contentMetaData.setProgramId(video.contentShowId);
          video.contentTitle && _this.contentMetaData.setEpisodeId(video.contentTitle);
        }
        video.contentShowTitle && _this.contentMetaData.setProgramTitle(video.contentShowTitle);
        _this.contentMetaData.setEpisodeNumber(episodeNumber);
        _this.contentMetaData.setEpisodeSeasonNumber(seasonNumber);
        _this.contentMetaData.setGenreName(genres);
        if (video.airDate) {
          var airDate = new Date(video.airDate);
          _this.contentMetaData.setDateOfTvAiring(airDate.getFullYear(), airDate.getMonth(), airDate.getDay());
          _this.contentMetaData.setTimeOfTvAiring(airDate.getHours(), airDate.getMinutes());
        }
        if (video.publishStart) {
          var publishDate = new Date(video.publishStart);
          _this.contentMetaData.setDateOfDigitalAiring(publishDate.getFullYear(), publishDate.getMonth(), publishDate.getDay());
          _this.contentMetaData.setTimeOfDigitalAiring(publishDate.getHours(), publishDate.getMinutes());
        }
        if (video.videoType == 'EPISODE') {
          _this.contentMetaData.classifyAsCompleteEpisode(true);
        }
        _this.comscoreInstance.setMetadata(_this.contentMetaData);
        break;
      case 'timeupdate':
        _this.position = parseInt(data.content.currentTime * 1000);
        break;
      case 'playing':
        _this.grantNewPlaybackSession();
        if (!_this.sourceChanged && _this.contentMetaData) {
          _this.sourceChanged = true;
          _this.comscoreInstance.setMetadata(_this.contentMetaData);
        }
        if (_this.playingAds) {
          _this.playingAds = false;
          _this.comscoreInstance.setMetadata(_this.contentMetaData);
        }
        _this.paused = false;
        if (_this.firstPlay) {
          _this.firstPlay = false;
        }
        if (_this.buffering) {
          _this.buffering = false;
          _this.comscoreInstance.notifyBufferStop();
        }
        if (_this.seeking) {
          _this.seeking = false;
          _this.comscoreInstance.startFromPosition(_this.position);
        }
        _this.comscoreInstance.notifyPlay();
        break;
      case 'waiting':
        _this.grantNewPlaybackSession();
        if (!_this.buffering && !_this.seeking && !_this.playingAds) {
          _this.buffering = true;
          _this.comscoreInstance.notifyBufferStart();
        }
        break;
      case 'pause':
        _this.paused = true;
        _this.comscoreInstance.notifyPause();
        break;
      case 'ended':
        _this.comscoreInstance.notifyEnd();
        _this.sessionStarted = false;
        _this.sourceChanged = false;
        break;
      case 'seeking':
        _this.grantNewPlaybackSession();
        if (!_this.seeking) {
          _this.seeking = true;
          _this.comscoreInstance.notifySeekStart();
        }
        break;
      case 'ads-pod-started':
        _this.grantNewPlaybackSession();
        _this.playingAds = true;
        break;
      case 'ads-pod-ended':
        _this.playingAds = false;
        _this.comscoreInstance.setMetadata(_this.contentMetaData);
        break;
      case 'ads-ad-started':
        _this.grantNewPlaybackSession();
        var ad = data.ads.ad;
        var adMediaType = undefined;
        var adUniqueId = ad.customId || ad.universalId || ad.id || '-1';
        if (video.videoType == 'LIVE') {
          adMediaType = _this.streamingAnalytics.AdvertisementMetadata.AdvertisementType.LIVE;
        } else {
          switch (ad.type) {
            case 'PREROLL':
              adMediaType = _this.streamingAnalytics.AdvertisementMetadata.AdvertisementType.ON_DEMAND_PRE_ROLL;
              break;
            case 'MIDROLL':
              adMediaType = _this.streamingAnalytics.AdvertisementMetadata.AdvertisementType.ON_DEMAND_MID_ROLL;
              break;
            case 'POSTROLL':
              adMediaType = _this.streamingAnalytics.AdvertisementMetadata.AdvertisementType.ON_DEMAND_POST_ROLL;
              break;
            default:
              adMediaType = _this.streamingAnalytics.AdvertisementMetadata.AdvertisementType.OTHER;
              break;
          }
        }
        var adMeta = new _this.streamingAnalytics.AdvertisementMetadata();
        adMeta.setMediaType(adMediaType);
        adMeta.setUniqueId(adUniqueId);
        adMeta.setLength(parseInt(ad.duration * 1000));
        adMeta.setRelatedContentMetadata(_this.contentMetaData);
        _this.comscoreInstance.setMetadata(adMeta);
        _this.comscoreInstance.notifyPlay();
        break;
      case 'ads-pause':
        _this.comscoreInstance.notifyPause();
        break;
      case 'ads-click':
        _this.comscoreInstance.notifyPause();
        break;
      case 'ads-play':
        _this.comscoreInstance.notifyPlay();
        break;
      case 'ads-ad-ended':
        _this.comscoreInstance.notifyEnd();
        break;
    }
  };
  this.init();
});

;// CONCATENATED MODULE: ./src/common/trackers/enhanced.js
function enhanced_typeof(obj) { "@babel/helpers - typeof"; return enhanced_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, enhanced_typeof(obj); }
function enhanced_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function enhanced_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? enhanced_ownKeys(Object(source), !0).forEach(function (key) { enhanced_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : enhanced_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function enhanced_defineProperty(obj, key, value) { key = enhanced_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function enhanced_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, enhanced_toPropertyKey(descriptor.key), descriptor); } }
function enhanced_createClass(Constructor, protoProps, staticProps) { if (protoProps) enhanced_defineProperties(Constructor.prototype, protoProps); if (staticProps) enhanced_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function enhanced_toPropertyKey(arg) { var key = enhanced_toPrimitive(arg, "string"); return enhanced_typeof(key) === "symbol" ? key : String(key); }
function enhanced_toPrimitive(input, hint) { if (enhanced_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (enhanced_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function enhanced_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnhancedAnalytics = /*#__PURE__*/enhanced_createClass(function EnhancedAnalytics(metaData, playerReference, events) {
  var _this = this;
  var eventsManager = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : lomaEventsManager;
  enhanced_classCallCheck(this, EnhancedAnalytics);
  this.metaData = metaData;
  this.playerReference = playerReference;
  this.events = events;
  this.eventsManager = eventsManager;
  this.currentTime = 0;
  this.lastReportTime = 0;
  this.contentPlayDelta = 30;
  this.validStreamDelta = 0.3;
  this.validStreamReported = false;
  this.videoViewDelta = 1;
  this.videoViewReported = false;
  this.firstPlay = true;
  this.paused = true;
  this.playbackSession = undefined;
  this.adSession = undefined;
  this.eventSequenceNumber = -1;
  this.handler = function (event, data) {
    var eventPrefix = 'player_';
    var eventName = undefined;
    var reportTimeUpdateEvent = function reportTimeUpdateEvent(currentTime, lastReportTime, interval) {
      return currentTime - lastReportTime >= interval;
    };
    switch (event) {
      case 'sourceloaded':
        _this.playbackSession = UUID4();
        _this.adSession = undefined;
        eventName = "".concat(eventPrefix, "impression");
        break;
      case 'play':
        _this.adSession = undefined;
        if (_this.firstPlay) {
          _this.firstPlay = false;
          eventName = "".concat(eventPrefix, "content_play");
        } else {
          eventName = "".concat(eventPrefix, "content_resume");
        }
        break;
      case 'pause':
        eventName = "".concat(eventPrefix, "content_pause");
        break;
      case 'seeked':
        eventName = "".concat(eventPrefix, "content_seek");
        break;
      case 'ended':
        eventName = "".concat(eventPrefix, "content_ended");
        break;
      case 'ads-load':
        eventName = "".concat(eventPrefix, "ads_load");
        break;
      case 'ads-request-success':
        eventName = "".concat(eventPrefix, "ads_request_success");
        break;
      case 'ads-request-error':
        eventName = "".concat(eventPrefix, "ads_request_error");
        break;
      case 'ads-no-preroll':
        eventName = "".concat(eventPrefix, "ads_no_preroll");
        break;
      case 'ads-has-preroll':
        eventName = "".concat(eventPrefix, "ads_has_preroll");
        break;
      case 'ads-playprerolls':
        eventName = "".concat(eventPrefix, "ads_playprerolls");
        break;
      case 'ads-endedprerolls':
        eventName = "".concat(eventPrefix, "ads_endedprerolls");
        break;
      case 'ads-no-midroll':
        eventName = "".concat(eventPrefix, "ads_no_midroll");
        break;
      case 'ads-has-midroll':
        eventName = "".concat(eventPrefix, "ads_has_midroll");
        break;
      case 'ads-playmidrolls':
        eventName = "".concat(eventPrefix, "ads_playmidrolls");
        break;
      case 'ads-endedmidrolls':
        eventName = "".concat(eventPrefix, "ads_endedmidrolls");
        break;
      case 'ads-no-postroll':
        eventName = "".concat(eventPrefix, "ads_no_postroll");
        break;
      case 'ads-has-postroll':
        eventName = "".concat(eventPrefix, "ads_has_postroll");
        break;
      case 'ads-playpostrolls':
        eventName = "".concat(eventPrefix, "ads_playpostrolls");
        break;
      case 'ads-endedpostrolls':
        eventName = "".concat(eventPrefix, "ads_endedpostrolls");
        break;
      case 'ads-pod-started':
        eventName = "".concat(eventPrefix, "ads_pod_start");
        break;
      case 'ads-pod-ended':
        _this.adSession = undefined;
        eventName = "".concat(eventPrefix, "ads_pod_end");
        break;
      case 'ads-ad-started':
        _this.adSession = UUID4();
        eventName = "".concat(eventPrefix, "adv_start");
        break;
      case 'ads-first-quartile':
        eventName = "".concat(eventPrefix, "adv_firstquartile");
        break;
      case 'ads-midpoint':
        eventName = "".concat(eventPrefix, "adv_midpoint");
        break;
      case 'ads-third-quartile':
        eventName = "".concat(eventPrefix, "adv_thirdquartile");
        break;
      case 'ads-ad-ended':
        eventName = "".concat(eventPrefix, "adv_end");
        break;
      case 'ads-click':
        eventName = "".concat(eventPrefix, "adv_click");
        break;
      case 'ads-mute':
        eventName = "".concat(eventPrefix, "adv_muted");
        break;
      case 'timeupdate':
        _this.currentTime = data.content.currentTime;
        if (!_this.validStreamReported && reportTimeUpdateEvent(_this.currentTime, _this.lastReportTime, _this.validStreamDelta)) {
          _this.validStreamReported = true;
          eventName = "".concat(eventPrefix, "video_valid_stream");
        }
        if (!_this.videoViewReported && reportTimeUpdateEvent(_this.currentTime, _this.lastReportTime, _this.videoViewDelta)) {
          _this.videoViewReported = true;
          eventName = "".concat(eventPrefix, "video_view");
        }
        if (reportTimeUpdateEvent(_this.currentTime, _this.lastReportTime, _this.contentPlayDelta)) {
          _this.lastReportTime = _this.currentTime;
          eventName = "".concat(eventPrefix, "seconds_viewed");
        }
        break;
    }
    if (eventName !== undefined) {
      _this.eventSequenceNumber++;
      if (window.entag !== undefined) {
        var payload = {
          'category': 'Video',
          'name': eventName,
          'position': parseInt(_this.currentTime),
          'sequenceNumber': _this.eventSequenceNumber,
          'location': window.locations.current,
          'playerShowName': data.content.contentShowTitle,
          'playerVideoName': data.content.contentTitle,
          'playbackSession': _this.playbackSession
        };
        if (data.ads && data.ads.ad && _this.adSession) {
          payload = enhanced_objectSpread(enhanced_objectSpread({}, payload), {
            'adId': data.ads.ad.id,
            'adDuration': parseInt(data.ads.ad.duration),
            'adSession': _this.adSession
          });
        }
        window.entag('event', payload);
      }
    }
  };
  this.eventsManager.sub('video', this.playerReference, this.events, this.handler);
});

;// CONCATENATED MODULE: ./src/common/trackers/index.js





;// CONCATENATED MODULE: ./src/common/genericplayer-core.js
function genericplayer_core_typeof(obj) { "@babel/helpers - typeof"; return genericplayer_core_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, genericplayer_core_typeof(obj); }
























function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || genericplayer_core_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function genericplayer_core_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return genericplayer_core_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return genericplayer_core_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return genericplayer_core_arrayLikeToArray(arr); }
function genericplayer_core_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function genericplayer_core_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, genericplayer_core_toPropertyKey(descriptor.key), descriptor); } }
function genericplayer_core_createClass(Constructor, protoProps, staticProps) { if (protoProps) genericplayer_core_defineProperties(Constructor.prototype, protoProps); if (staticProps) genericplayer_core_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function genericplayer_core_toPropertyKey(arg) { var key = genericplayer_core_toPrimitive(arg, "string"); return genericplayer_core_typeof(key) === "symbol" ? key : String(key); }
function genericplayer_core_toPrimitive(input, hint) { if (genericplayer_core_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (genericplayer_core_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function genericplayer_core_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoTrackers = {
  VideoDebugger: VideoDebugger,
  AdobeAnalytics: AdobeAnalytics,
  GoogleAnalytics: GoogleAnalytics,
  ComscoreAnalytics: ComscoreAnalytics,
  EnhancedAnalytics: EnhancedAnalytics
};
var GenericContentPlayer = /*#__PURE__*/genericplayer_core_createClass(function GenericContentPlayer(_ref) {
  var _this = this;
  var _ref$videoId = _ref.videoId,
    videoId = _ref$videoId === void 0 ? undefined : _ref$videoId,
    _ref$hyogaManagerId = _ref.hyogaManagerId,
    hyogaManagerId = _ref$hyogaManagerId === void 0 ? undefined : _ref$hyogaManagerId,
    _ref$playerSelector = _ref.playerSelector,
    playerSelector = _ref$playerSelector === void 0 ? undefined : _ref$playerSelector,
    _ref$representationsM = _ref.representationsMax,
    representationsMax = _ref$representationsM === void 0 ? undefined : _ref$representationsM,
    _ref$representationsM2 = _ref.representationsMin,
    representationsMin = _ref$representationsM2 === void 0 ? undefined : _ref$representationsM2,
    _ref$autoplay = _ref.autoplay,
    autoplay = _ref$autoplay === void 0 ? false : _ref$autoplay,
    _ref$muted = _ref.muted,
    muted = _ref$muted === void 0 ? false : _ref$muted,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? true : _ref$controls,
    _ref$nextepisode = _ref.nextepisode,
    nextepisode = _ref$nextepisode === void 0 ? false : _ref$nextepisode,
    _ref$disableobserver = _ref.disableobserver,
    disableobserver = _ref$disableobserver === void 0 ? false : _ref$disableobserver,
    _ref$disablepip = _ref.disablepip,
    disablepip = _ref$disablepip === void 0 ? false : _ref$disablepip,
    _ref$liveui = _ref.liveui,
    liveui = _ref$liveui === void 0 ? false : _ref$liveui,
    _ref$stoneInstance = _ref.stoneInstance,
    stoneInstance = _ref$stoneInstance === void 0 ? undefined : _ref$stoneInstance,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 0 : _ref$position,
    _ref$playbackUrl = _ref.playbackUrl,
    playbackUrl = _ref$playbackUrl === void 0 ? undefined : _ref$playbackUrl,
    _ref$streamType = _ref.streamType,
    streamType = _ref$streamType === void 0 ? 'hls' : _ref$streamType,
    _ref$keySystems = _ref.keySystems,
    keySystems = _ref$keySystems === void 0 ? undefined : _ref$keySystems,
    _ref$videoPoster = _ref.videoPoster,
    videoPoster = _ref$videoPoster === void 0 ? undefined : _ref$videoPoster,
    _ref$fwReference = _ref.fwReference,
    fwReference = _ref$fwReference === void 0 ? undefined : _ref$fwReference,
    _ref$fwMeta = _ref.fwMeta,
    fwMeta = _ref$fwMeta === void 0 ? undefined : _ref$fwMeta,
    _ref$metaData = _ref.metaData,
    metaData = _ref$metaData === void 0 ? {} : _ref$metaData,
    _ref$playerOverlays = _ref.playerOverlays,
    playerOverlays = _ref$playerOverlays === void 0 ? undefined : _ref$playerOverlays,
    _ref$eventsManager = _ref.eventsManager,
    eventsManager = _ref$eventsManager === void 0 ? undefined : _ref$eventsManager,
    _ref$globalEventsMana = _ref.globalEventsManager,
    globalEventsManager = _ref$globalEventsMana === void 0 ? undefined : _ref$globalEventsMana,
    _ref$globalEventsMana2 = _ref.globalEventsManagerId,
    globalEventsManagerId = _ref$globalEventsMana2 === void 0 ? undefined : _ref$globalEventsMana2,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? undefined : _ref$status,
    _ref$adSystem = _ref.adSystem,
    adSystem = _ref$adSystem === void 0 ? undefined : _ref$adSystem,
    _ref$adTagUrl = _ref.adTagUrl,
    adTagUrl = _ref$adTagUrl === void 0 ? undefined : _ref$adTagUrl,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? undefined : _ref$error,
    _ref$i18n = _ref.i18n,
    i18n = _ref$i18n === void 0 ? {} : _ref$i18n,
    _ref$langCodes = _ref.langCodes,
    langCodes = _ref$langCodes === void 0 ? [] : _ref$langCodes;
  genericplayer_core_classCallCheck(this, GenericContentPlayer);
  this.nativeVideoEvents = ['loadstart', 'loadedmetadata', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'timeupdate', 'progress', 'seeking', 'seeked', 'waiting', 'durationchange', 'volumechange', 'ended'];
  this.playerEvents = [].concat(_toConsumableArray(this.nativeVideoEvents), ['dispose', 'sourceset', 'play-request', 'ads-load', 'ads-request-init', 'ads-request-success', 'ads-request-error', 'ads-has-linearslots', 'ads-no-linearslots', 'ads-has-preroll', 'ads-no-preroll', 'ads-has-midroll', 'ads-no-midroll', 'ads-has-postroll', 'ads-no-postroll', 'ads-has-overlay', 'ads-no-overlay', 'ads-playprerolls', 'ads-endedprerolls', 'ads-playmidrolls', 'ads-endedmidrolls', 'ads-playpostrolls', 'ads-endedpostrolls', 'ads-playoverlays', 'ads-endedoverlays', 'ads-pod-started', 'ads-pod-ended', 'ads-ad-started', 'ads-first-quartile', 'ads-midpoint', 'ads-third-quartile', 'ads-ad-ended', 'ads-play', 'ads-pause', 'ads-click', 'ads-error']);
  this.player = undefined;
  this.firstPlay = false;
  this.eventsTrackers = window.eventsVideoTrackers ? JSON.parse(JSON.stringify(window.eventsVideoTrackers)) : [];
  this.videoId = videoId;
  this.hyogaManagerId = hyogaManagerId;
  this.playerSelector = playerSelector;
  this.playerVideoElement = document.getElementById(this.playerSelector);
  this.representationsMax = representationsMax;
  this.representationsMin = representationsMin;
  this.autoplay = autoplay;
  this.muted = muted;
  this.controls = controls;
  this.loop = !controls;
  this.nextepisode = nextepisode;
  this.disableobserver = disableobserver;
  this.disablepip = disablepip;
  this.liveui = liveui;
  this.stoneInstance = stoneInstance;
  this.position = position;
  this.playbackUrl = playbackUrl;
  this.streamType = streamType;
  this.keySystems = keySystems;
  this.videoPoster = videoPoster;
  this.fwReference = fwReference;
  this.fwMeta = fwMeta;
  this.metaData = metaData;
  this.playerOverlays = playerOverlays;
  this.eventsManager = eventsManager;
  this.globalEventsManager = globalEventsManager;
  this.globalEventsManagerId = globalEventsManagerId, this.status = status;
  this.adSystem = adSystem;
  this.adTagUrl = adTagUrl;
  this.error = error;
  this.i18n = i18n;
  this.langCodes = langCodes;
  this.defaultAudioLanguage = undefined;
  this.settingDefaultAudio = false;
  this.playerInitialized = false;
  this.playbackReady = false;
  this.adsInitialized = false;
  this.emeInitialized = false;
  this.videoNativeEventsListeners = [];
  this.playActions = this.muted && this.autoplay ? -1 : 0;
  this.initVideoLis.createSyntheticEvent = function (eventObject) {
    var eventProperties = ['isTrusted', 'bubbles', 'cancelBubble', 'cancelable', 'composed', 'currentTarget', 'defaultPrevented', 'eventPhase', 'returnValue', 'srcElement', 'target', 'timeStamp'];
    var syntheticEvent = eventProperties.reduce(function (item, key) {
eturn syntheticEvent;
  };
  this.getPlayerContentDuration = function () {
    return 0;
  };
  this.getPlayerContentCurrentTime = function () {
    return 0;
  };
  this.addVideoNativeEventsProxy = function (callback) {
    _this.nativeVideoEvents.his.videoNativeEventsListeners.push({
        eventType: nativeVideoEvent,
        listener: listener
      });
    });
  };
  this.removeVideoNativeEventsProxy = function () {
    _this.videoNativeEventsListeners.forEach(function (nativeEventListener) {
      _this.playerVideoElement.removeEventListener(nativeEventListener.eventType, nativeEventListener.listener);
    });
  };
  this.proxyNativeVideo = function (_ref2) {
    var _ref2$videoNativeEven = _ref2.videoNativeEventsProxy,
      videoNativeEventsProxy = _ref2$videoNativeEven === void 0 ? undefined : _ref2$videoNativeEven;
    if (videoNativeEventsProxy) {
     (!_this.player.id) {
      _this.player.id = function () {
        return _this.playerVideoElement.id;
      };
    }
    if (!_this.player.play) {
      _this.player.play = function () {
        return _this.playerVideoElement.play();
      };
    }
    if (!_this.player.pause) {
      _this.player.pause = function () {
        return _thid) {
      _this.player.paused = function () {
        return _this.playerVideoElement.paused;
      };
    }
    if (!_this.player.ended) {
      _this.player.ended = function () {
        return _this.playerVideoElement.ended;
      };
    }
    if (!_this.player.duration) {
      _this.player.duration = function () {
        return _this.playerVideoElement.duration;
      };
    }
    if (!_this.player.currentTime) {
      _this.player.currentTime = function (position) {
        if (!isNaN(position)) {
          _this.playerVideoElement.currentTime = position >= 0 ? position : 0;
        } else {
          return _this.playerVideoElement.currentTime;
        }
      };
    }
    if (!_this.player.remainingTime) {
      _this.player.remainingTime = function () {
        return _this.player.duration() - _this.player.currentTime();
      };
    }
    if (!_this.player.currentWidth || !_this.player.currentHeight) {
      _this.player.currentDimension = function (dimensionType) {
        ifmputedStyle ? parseFloat(computedStyle.getPropertyValue(dimensionType) || computedStyle[dimensionType]) : '';
        } catch (error) {
          re {
        return {
          width: _this.player.currentDimension('width'),
          height: _this.player.currentDimension('height')
        };
      };
      _this.player.currentWidth = function () {
        return _this.player.currentDimension('width');
      };
      _this.player.currentHeight = function () {
        return _this.player.currentDimension('height');
      };
    }
    if (!_this.player.poster) {
      _this.player.poster = function (posterImage) {
        if (posterImage && _this.playerVideoElement.poster != posterImage) {
          _this.playerVideoElement.poster = posterImage;
        }
      };
    }
  };
  this.initTrackers = function (metaData) {
    _this.eventsTrackers.forEach(function (tracker, i) {
      var trackerClass = window.eventsVideoTrackers[i]["class"];
      if (typeof trackerClass == 'string') {
        trackerClass = VideoTrackers[trackerClass];
      }
      tracker.instance = new trackerClass(Object.assign(metaData, {
        playerName: _this.playerSelector
      }), _this.playerSelector, tracker.events, _this.eventsManager);
    });
  };
  this.notifyEvents = function (e, metaData) {
    metaData.videoDuration = _this.getPlayerContentDuration();
    var eventType = e.type;
    var dataPayload = {
      playerId: _this.getPlayerId(),
      playerRefId: _this.getPlayerId(),
      eventType: eventType,
      content: Object.assign(metaData, {
        currentTime: _this.getPlayerContentCurrentTime() || 0
      }),
      ads: {}
    };
    if (eventType.startsWith('ads') && 'ad' in _this.player.ads && _this.player.ads.ad) {
      if ('ad' in _this.player.ads && Object.keys(_this.player.ads.ad).length > 0) {
        dataPayload.ads.ad = {
          id: _this.player.ads.ad.id,
          index: _this.player.ads.ad.index,
          type: _this.player.ads.ad.type,
          currentTime: _this.player.ads.ad.currentTime(),
          duration: _this.player.ads.ad.duration
        };
      }
      if ('pod' in _this.player.ads && Object.keys(_this.player.ads.pod).length > 0) {
        dataPayload.ads.pod = {
          id: _this.player.ads.pod.id,
          adCount: _this.player.ads.pod.adCount,
          currentTime: _this.player.ads.pod.currentTime(),
          duration: _this.player.ads.pod.duration
        };
      }
    }
    _this.eventsManager.pub('video', _this.playerSelector, eventType, dataPayload);
  };
  this.setContentProtection = function (_ref3) {
    var protectionType = _ref3.protectionType,
      _ref3$licenseUrl = _ref3.licenseUrl,
      licenseUrl = _ref3$licenseUrl === void 0 ? undefined : _ref3$licenseUrl,
      _ref3$certificateUrl = _ref3.certificateUrl,
      certificateUrl = _ref3$certificateUrl === void 0 ? undefined : _ref3$certificateUrl,
      _ref3$licenseHeaders = _ref3.licenseHeaders,
      licenseHeaders = _ref3$licenseHeaders === void 0 ? undefined : _ref3$licenseHeaders;
    var keySystemData = {};
    var systemsMappings = {
      fairplay: 'com.apple.fps.1_0',
      playready: 'com.microsoft.playready',
      widevine: 'com.widevine.alpha',
      clearkey: 'org.w3.clearkey'
    };
    var keySystem = systemsMappings[protectionType];
    switch (protectionType) {
      case 'fairplay':
        keySystemData[keySystem] = {
          certificateUri: certificateUrl,
          licenseUri: licenseUrl
        };
        break;
      case 'playready':
      case 'widevine':
      case 'clearkey':
        keySystemData[keySystem] = {
          url: licenseUrl
        };
        break;
    }
    keySystemData[keySystem].licenseHeaders = licenseHeaders;
    return keySystemData;
  };
  this.setPlayerSource = function (_ref4) {
    var playbackUrl = _ref4.playbackUrl,
      _ref4$streamType = _ref4.streamType,
      streamType = _ref4$streamType === void 0 ? 'hls' : _ref4$streamType,
      _ref4$keySystems = _ref4.keySystems,
      keySystems = _ref4$keySystems === void 0 ? undefined : _ref4$keySystems;
    var videoContentTypes = {
      'hls': 'application/x-mpegURL',
      'dash': 'application/dash+xml',
      'mp4': 'video/mp4',
      'webm': 'video/webm'
    };
    var drmSystems = {
      'hls': 'fairplay',
      'dash': 'widevine'
    };
    var playerOptions = {
      type: videoContentTypes[streamType],
      src: playbackUrl
    };
    if (typeof keySystems !== 'undefined') {
      playerOptions.keySystems = _this.setContentProtection({
        protectionType: drmSystems[streamType],
        licenseUrl: keySystems.schema.licenseUrl,
        certificateUrl: keySteUrl,
        licenseHeaders: {
          'PreAuthorization': keySystems.drmToken
        }
      });
      _this.player.eme();
    }
    _this.player.src(playerOptions);
  };
  this.setPlayerPoster = function (videoPoster) {};
  this.setPlayerOverlays = function (overlays) {};
  this.setPlayerOverlay = function (metaData) {};
  this.setPlayerPosition = function (position) {};
  this.initPlayer = function () {
    _this.metaData = metaData;
    _this.player.ready(function () {
      if (!_this.playerInitialized) {
        _this.playerInitialized = true;
        _this.player.on(_this.playerEvents, function (e) {
          _this.notifyEvents(e, _this.metaData);
        });
      }
      if (typeof playerOverlays !== 'undefined') {
        _this.setPlayerOverlays(playerOverlays);
      }
      if (videoPoster) {
        _this.setPlayerPoster(videoPoster);
      }
      _this.setPlayerSource({
        playbackUrl: playbackUrl,
        streamType: streamType,
        keySystems: keySystems
      });
      if (position > 0) {
        _this.setPlayerPosition(position);
      }
    });
  };
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(2707);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(4553);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(561);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.get.js
var es_reflect_get = __webpack_require__(4819);
;// CONCATENATED MODULE: ./src/videojs/lib/plugins/videojs-freewheel.js
function videojs_freewheel_typeof(obj) { "@babel/helpers - typeof"; return videojs_freewheel_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, videojs_freewheel_typeof(obj); }





































function videojs_freewheel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function videojs_freewheel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, videojs_freewheel_toPropertyKey(descriptor.key), descriptor); } }
function videojs_freewheel_createClass(Constructor, protoProps, staticProps) { if (protoProps) videojs_freewheel_defineProperties(Constructor.prototype, protoProps); if (staticProps) videojs_freewheel_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function videojs_freewheel_toPropertyKey(arg) { var key = videojs_freewheel_toPrimitive(arg, "string"); return videojs_freewheel_typeof(key) === "symbol" ? key : String(key); }
function videojs_freewheel_toPrimitive(input, hint) { if (videojs_freewheel_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (videojs_freewheel_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = videojs_freewheel_getPrototypeOf(object); if (object === null) break; } return object; }
function videojs_freewheel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) videojs_freewheel_setPrototypeOf(subClass, superClass); }
function videojs_freewheel_setPrototypeOf(o, p) { videojs_freewheel_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return videojs_freewheel_setPrototypeOf(o, p); }
function videojs_freewheel_createSuper(Derived) { var hasNativeReflectConstruct = videojs_freewheel_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = videojs_freewheel_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = videojs_freewheel_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return videojs_freewheel_possibleConstructorReturn(this, result); }; }
function videojs_freewheel_possibleConstructorReturn(self, call) { if (call && (videojs_freewheel_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return videojs_freewheel_assertThisInitialized(self); }
function videojs_freewheel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function videojs_freewheel_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function videojs_freewheel_getPrototypeOf(o) { videojs_freewheel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return videojs_freewheel_getPrototypeOf(o); }

var FWDirectVersion = "0.0.1";
var VideojsPlugin = videojs_min.getPlugin('plugin');
var hyogaVideojsFreeWheel = /*#__PURE__*/function (_VideojsPlugin) {
  videojs_freewheel_inherits(hyogaVideojsFreeWheel, _VideojsPlugin);
  var _super = videojs_freewheel_createSuper(hyogaVideojsFreeWheel);
  function hyogaVideojsFreeWheel(player, options) {
    var _this;
    videojs_freewheel_classCallCheck(this, hyogaVideojsFreeWheel);
    _this = _super.call(this, player, options);
    _this.player = player;
    _this.settings = {
      content: {},
      videoContainer: options.videoContainer,
      videoAssetId: options.videoAssetId,
      videoDuration: options.videoDuration,
      advSlots: {}
    };
    _this.adsPlaying = false;
    _this.contentResuming = false;
    _this.hasPendingPrerolls = false;
    _this.hasPendingPostrolls = false;
    _this.hasPendingMidrolls = false;
    _this.hasPendingOverlays = false;
    _this.pluginUpdating = false;
    _this.adManager = undefined;
    _this.adContext = undefined;
    _this.adsRequested = false;
    _this.nextLinearSlotType = undefined;
    // Default Freewheel values
    _this.networkId = options.networkId || 48747;
    _this.serverUrl = options.serverUrl || 'https://be6b.v.fwmrm.net/ad/g/1';
    _this.profileId = options.profileId || '48747:DiscoveryIntl_BrightcoveJS_secure';
    _this.prerollAutoplay = options.autoplay || false;
    _this.extraOptions = options.extraOptions;
    _this.isLive = options.isLive;
    _this.helpers = options.helpers;
    _this.videoId = options.videoId;
    _this.sitePrefix = _this.extraOptions.sitePrefix || undefined;
    _this.fallbackSiteId = _this.extraOptions.fallbackSiteId || undefined;
    _this.pageMatch = _this.extraOptions.pageMatch || {};
    _this.metaData = _this.extraOptions.metaData || {};
    _this.player.ads = {
      isPlayingAds: _this.isPlayingAds(),
      pod: {},
      ad: {}
    };
    var proxyEvents = ['loadstart', 'loadedmetadata', 'loadeddata', 'suspend', 'abort', 'play', 'observerplay', 'pause', 'observerpause', 'waiting', 'seeking', 'seeked', 'ended', 'playing', 'durationchange', 'timeupdate', 'progress', 'volumechange', 'canplay', 'canplaythrough'];
    _this.mapAdEvents();
    _this.on(_this.player, 'durationchange', _this.initAdsSystem.bind(videojs_freewheel_assertThisInitialized(_this)));
    _this.on(_this.player, 'ads-playprerolls', _this.playLinearSlot.bind(videojs_freewheel_assertThisInitialized(_this)));
    _this.on(_this.player, 'ads-try-playmidrolls', _this.playLinearSlot.bind(videojs_freewheel_assertThisInitialized(_this)));
    _this.on(_this.player, 'ads-playpostrolls', _this.playLinearSlot.bind(videojs_freewheel_assertThisInitialized(_this)));
    _this.on(_this.player, 'ads-playoverlays', _this.playOverlaySlot.bind(videojs_freewheel_assertThisInitialized(_this)));
    _this.on(_this.player, proxyEvents, _this.playerEventsHandler.bind(videojs_freewheel_assertThisInitialized(_this)));
    _this.on(_this.player, 'dispose', _this.destroyAdmanager.bind(videojs_freewheel_assertThisInitialized(_this)));
    _this.player.controlBar.playToggle.on('click', _this.triggerPlayToggle.bind(videojs_freewheel_assertThisInitialized(_this)));
    return _this;
  }
  videojs_freewheel_createClass(hyogaVideojsFreeWheel, [{
    key: "dispose",
    value: function dispose() {
      _get(videojs_freewheel_getPrototypeOf(hyogaVideojsFreeWheel.prototype), "dispose", this).call(this);
    }
  }, {
    key: "triggerPlayToggle",
    value: function triggerPlayToggle() {
      this.playerEventsHandler({
        type: this.player.paused() ? 'clickpause' : 'clickplay'
      });
    }
  }, {
    key: "playerEventsHandler",
    value: function playerEventsHandler(event) {
      var _this2 = this;
      var cancelEvent = function cancelEvent(event) {
        event.cancelBubble = true;
        event.isImmediatePropagationStopped = function () {
          return true;
        };
        event.isPropagationStopped = function () {
          return true;
        };
      };
      var prefixEvent = function prefixEvent(event) {
        cancelEvent(event);
        _this2.player.trigger({
          type: "ads-".concat(event.type)
        });
      };
      if (this.isPlayingAds() && !this.isContentResuming()) {
        if (['play', 'pause'].includes(event.type)) {
          cancelEvent(event);
        } else if (['clickplay', 'observerplay', 'clickpause', 'observerpause'].includes(event.type)) {
          event.type = event.type.replace('click', '').replace('observer', '');
          prefixEvent(event);
        } else {
          prefixEvent(event);
        }
      } else {
        if (this.pluginUpdating && event.type == 'play') {
          cancelEvent(event);
          this.player.pause();
        }
        if (this.hasPendingPrerolls && event.type == 'play') {
          cancelEvent(event);
          this.hasPendingPrerolls = false;
          this.player.pause();
          this.player.trigger('play-request');
          this.player.trigger('ads-playprerolls', {
            slotType: tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL
          });
        } else if (this.hasPendingMidrolls && event.type == 'timeupdate' && this.getNextLinearSlotType() == tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL) {
          this.player.trigger('ads-try-playmidrolls', {
            slotType: tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL
          });
        } else if (this.hasPendingPostrolls && event.type == 'ended') {
          cancelEvent(event);
          this.hasPendingPostrolls = false;
          this.adContext.setVideoState(tv.freewheel.SDK.VIDEO_STATE_COMPLETED);
          this.player.trigger('ads-playpostrolls', {
            slotType: tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL
          });
        } else if (this.adContext && event.type == 'playing') {
          this.adContext.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PLAYING);
        } else if (this.adContext && event.type == 'pause') {
          this.adContext.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PAUSED);
        }
        if (this.hasPendingOverlays && event.type == 'timeupdate') {
          this.player.trigger('ads-playoverlays', {
            slotType: tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY
          });
     ateMetaData(metadata) {
      this.metaData = metadata;
    }
  }, {
    key: "getSiteSectionId",
    value: function getSiteSectionId() {
      var pagePath = window.customSiteSection ? window.customSiteSection : window.location.pathname;
      var customSection = Object.entries(this.pageMatch).filter(function (pageMatch) {
        return pagePath.match(pageMatch[1]);
      })[0];
      if (customSection) {
        return "".concat(this.sitePrefix, "_").concat(customSection[0].replace(/( )|(-)/g, '_').toUpperCase());
      } else {
        return "".concat(this.sitePrefix, "_DEFAULT");
      }
    }
  }, {
    key: "setKeyValuesTargeting",
    value: function setKeyValuesTargeting() {
      var _this3 = this;
      if (this.metaData && this.adContext) {
        Object.entries(this.metaData).forEach(function (metaData) {
          if (metaData[1].length) {
            _this3.adContext.addKeyValue(metaData[0], metaData[1]);
          }
        });
      }
      this.adContext.addKeyValue('_fw_fss', "".concat(this.sitePrefix, "_DEFAULT"));
      this.adContext.addKeyValue('inskin_yes', String(screen.width >= 1230));
      this.adContext.addKeyValue('_fw_player_width', this.player.currentWidth().toString());
      this.adContext.addKeyValue('_fw_player_height', this.player.currentHeight().toString());
    }
  }, {
    key: "handlePlayerResize",
    value: function handlePlayerResize() {
      if (this.adContext && this.isPlayingAds()) {
        this.adContext.registerVideoDisplayBase(this.settings.videoContainer);
        this.adContext.resize(this.player.currentWidth(), this.player.currentHeight());
      }
    }
  }, {
    key: "mapAdEvents",
    value: function mapAdEvents() {
      this.adEvents = {};
      this.adEvents[tv.freewheel.SDK.EVENT_REQUEST_COMPLETE] = 'ads-load';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_IMPRESSION] = 'ads-ad-started';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_IMPRESSION_END] = 'ads-ad-ended';
      this.adEvents[tv.freewheel.SDK.EVENT_SLOT_STARTED] = 'ads-pod-started';
      this.adEvents[tv.freewheel.SDK.EVENT_SLOT_ENDED] = 'ads-pod-ended';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_FIRST_QUARTILE] = 'ads-first-quartile';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_MIDPOINT] = 'ads-midpoint';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_THIRD_QUARTILE] = 'ads-third-quartile';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_CLICK] = 'ads-click'E] = 'ads-mute';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_PAUSE] = 'ads-pause';
      this.adEvents[tv.freewheel.SDK.EVENT_AD_RESUME] = 'ads-play';
    }
  }, {
    key: "hasPendingSlots",
    value: function hasPendingSlots() {
      return [this.hasPendingPrerolls, this.hasPendingMidrolls, this.hasPendingPostrolls].some(function (status) {
        return status;
      });
    }
  }, {
    key: "isPlayingAds",
    value: function isPlayingAds(status) {
      if (typeof status !== 'undefined') {
        this.adsPlaying = status;
      } else {
        return this.adsPlaying;
      }
    }
  }, {
    key: "isContentResuming",
    value: function isContentResuming(status) {
      if (typeof status !== 'undefined') {
        this.contentResuming = status;
      } else {
        return this.contentResumin    return [tv.freewheel.SDK.TIME_POSITION_CLASS_PRpe);
      } else {
        return false;
      }
    }
  }, {
    key: "isVpaid",
    value: function isVpaid(adInstance) {
      return adInstance.getActiveCreativeRendition().getCreativeApi() === 'VPAID';
    }
  }, {
    key: "cleanPlayerListeners",
    value: function cleanPlayerListeners() {
      this.player.off('playerresize', this.handlePlayerResize.bind(this));
    }
  }, {
    key: "getCurrentVideoAssedId",
    value: function getCurrentVideoAssedId() {
      ction setCurrentVideoAssetId(assetId) {
      this.settings.videoAssetId = assetId;
    }
  }, {
    key: "getCurrentVideoDuration",
    value: function getCurrentVideoDuration() {
      return this.settings.videoDuration;
    }
  }, {
    key: "setCurrentVideoDuration",
    value: function setCurrentVideoDuration(duration) {
      this.settings.videoDuration = duration;
    }
  }, {
    key: "destroyAdmanager",
    value: function destroyAdmanager() {
      if (this.adManager !== undefined) {
        this.adManager = undefined;
      }
      if (this.adContext !== undefined) {
        this.adContext.removeEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, this.onAdsRequestComplete);
        this.adContext.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED, this.onAdsAdEvent);
        this.adContext.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED, this.onAdsAdEvent);
        this.adContext.removeEventListener(tv.freewheel.SDK.EVENT_AD, this.onAdsAdEvent);
        this.adContext.dispose();
        this.adContext = undefined;
      }
    }
  }, {
    key: "updatePlugin",
    value: function updatePlugin(fwMeta, fwReference, videoDuration) {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        try {
          _this4.adsRequested = false;
          _this4.updateMetaData(fwMeta);
          _this4.setCurrentVideoAssetId(fwReference);
          _this4.setCurrentVideoDuration(videoDuration);
          _this4.isPlayingAds(false);
          _this4.isContentResuming(false);
          _this4.hasPendingPrerolls = false;
          _this4.hasPendingPostrolls = false;
          _this4.hasPendingMidrolls = false;
          _this4.hasPendingOverlays =  && _this4.isVpaid(_this4.currentAdInstance) && _this4.currentAdInstance.getRendererController().getRenderer().dispose();
          _this4.destroyAdmanager();
          resolve(null);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: "updatePlayerAds",
    value: function updatePlayerAds(type, data) {
      this.player.ads[type] = data;
    }
  }, {
    key: "savePlayerStatus",
    value: function savePlayerStatus() {
      this.settings.content = {
        ended: this.player.ended(),
        source: this.player.currentSource(),
        currentTime: this.player.currentTime()
      };
      this.player.resetCache_();
    }
  }, {
    key: "restorePlayerStatus",
    value: function restorePlayerStatus(playerStatus) {
      var _this5 = this;
      this.isContentResuming(true);
      document.getElementById(this.settings.videoContainer).getElementsByTagName('video')[0].removeAttribute("style");
      this.player.controlBar.progressControl.enable();
      this.player.src(p          if (_this5.isLive) {
            _this5.player.liveTracker.seekToLiveEdge();
          } else {
            _this5.player.currentTime(playerStatus.currentTime);
          }
        });
      } else {
        this.player.pause();
      }
      this.player.one('playing', function (e) {
        _this5.isPlayingAds(false);
        _this5.isContentResuming(false);
      });
    }
  }, {
    key: "getNextLinearSlotType",
    value: function getNextLinearSlotType() {
      if (this.settings.advSlots.prerollSlots.length) {
        return tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL;
      } else if (this.settings.advSlots.midrollSlots.length) {
        return tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL;
      } else if (this.settings.advSlots.postrollSlots.length) {
        return tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL;
      } else {
        return undefined;
      }
    }
  }, {
    key: "getSlotsBySlotType",
    value: function getSlotsBySlotType(slotType) {
      var slots;
      switch (slotType) {
        case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
          slots = this.settings.advSlots.prerollSlots;
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
          slots = this.settings.advSlots.midrollSlots;
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
          slots = this.settings.advSlots.postrollSlots;
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:
          slots = this.settings.advSlots.overlaySlots;
          break;
        default:
          slots = undefined;
      }
      return slots;
    }
  }, {
    key: "triggerSlotEmpty",
    value: function triggerSlotEmpty(slotType) {
      var trigger = undefined;
      switch (slotType) {
        case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
          trigger = 'ads-endedprerolls';
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
          trigger = 'ads-endedmidrolls';
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
         v.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:
          trigger = 'ads-endedoverlays';
          break;
      }
      if (trigger !== undefined) {
        this.player.trigger(trigger);
      }
    }
  }, {
    key: "slotTypehasAds",
    value: function slotTypehasAds(slotTypeArray) {
      return slotTypeArray.some(function (slot) {
        return slot.getAdCount() > 0;
      });
    }
  }, {
    key: "createAdManagerInstance",
    value: function createAdManagerInstance() {
      this.adManager = new tv.freewheel.SDK.AdManager();
      this.adManager.setNetwork(this.networkId);
      this.adManager.setServer(this.serverUrl);
    }
  }, {
    key: "initAdsSystem",
    value: function initAdsSystem() {
      if (!this.isPlayingAds() && !this.adsRequested) {
        this.requestAds();
      }
    }
  }, {
    key: "requestAds",
    value: function requestAds() {
      this.adsRequested = true;
      this.cleanPlayerListeners();
      this.adsPlaying = false;
      this.createAdManagerInstance();
      this.settings.advSlots = {};
      this.adContext = this.adManager.newContext();
      // Disable US CCPA, not required
      this.adContext.setParameter(tv.freewheel.SDK.PARAMETER_USE_CCPA_USPAPI, false, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
      this.adContext.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE, false, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
      // Increase the maximum number of VAST 302 redirects, required for Google Programatic
      this.adContext.setParameter(tv.freewheel.SDK.PARAMETER_VAST_MAX_WRAPPER_COUNT, 7, tv.freewheel.SDK.PARAMETER_LEVEL_OVERRIDE);
      this.adContext.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_OMSDK_ENABLED, true, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
      this.adContext.setProfile(this.profileId);
      this.adContext.setVideoAsset(this.getCurrentVideoAssedId(), this.getCurrentVideoDuration(), this.networkId, null, tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED, Math.round(Math.random() * 10000), tv.freewheel.SDK.ID_TYPE_CUSTOM, '0', tv.freewheel.SDK.VIDEO_ASSET_DURATION_TYPE_EXACT);
      this.adContext.setSiteSection(this.getSiteSectionId(), this.networkId, Math.round(Math.random() * 10000), tv.freewheel.SDK.ID_TYPE_CUSTOM, this.fallbackSiteId);
      this.setKeyValuesTargeting();
      this.adContext.registerVideoDisplayBase(this.settings.videoContainer);
      this.adContext.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, this.onAdsRequestComplete.bind(this));
      this.player.on('playerresize', this.handlePlayerResize.bind(this));
      this.adContext.submitRequest();
    }
  }, {
    key: "onAdsRequestComplete",
    value: function onAdsRequestComplete(event) {
      this.player.trigger(this.adEvents[tv.freewheel.SDK.EVENT_REQUEST_COMPLETE]);
      var sortedSlots = function sortedSlots(array) {
        return array.sort(function (a, b) {
          return a.getTimePosition() - b.getTimePosition();
        });
      };
      if (event.success) {
        this.adContext.addEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED, this.onAdsAdEvent.bind(this));
        this.adContext.addEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED, this.onAdsAdEvent.bind(this));
        this.adContext.addEventListener(tv.freewheel.SDK.EVENT_AD, this.onAdsAdEvent.bind(this));
        var prerollSlots = this.adContext.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL);
        var midrollSlots = this.adContext.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL);
        var postrollSlots = this.adContext.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL);
        var overlaySlots = this.adContext.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY);
        this.settings.advSlots = {
          prerollSlots: sortedSlots(prerollSlots),
          midrollSlots: sortedSlots(midrollSlots),
          postrollSlots: sortedSlots(postrollSlots),
          overlaySlots: sortedSlots(overlaySlots)
        };
        if (prerollSlots.length || midrollSlots.length || postrollSlots.length) {
          this.player.trigger('ads-has-linearslots');
        } else {
          this.player.trigger('ads-no-linearslots');
        }
        if (prerollSlots.length) {
          this.hasPendingPrerolls = true;
          this.player.trigger('ads-has-preroll');
        } else {
          this.player.trigger('ads-no-preroll');
        }
        if (midrollSlots.length) {
          this.hasPendingMidrolls = true;
          this.player.trigger('ads-has-midroll');
        } else {
          this.player.trigger('ads-no-midroll');
        }
        if (postrollSlots.length) {
          this.hasPendingPostrolls = true;
          this.player.trigger('ads-has-postroll');
        } else {
          this.player.trigger('ads-no-postroll');
        }
        if (overlaySlots.length) {
          this.hasPendingOverlays = true;
          this.player.trigger('ads-has-overlay');
        } else {
          this.player.trigger('ads-no-overlay');
        }
        this.nextLinearSlotType = this.getNextLinearSlotType();
        this.player.trigger('ads-request-success');
        if (this.hasPendingPrerolls && this.pluginUpdating) {
          this.player.play();
        }
        this.pluginUpdating = false;
      } else {
        this.player.trigger('ads-request-error');
        this.player.play();
      }
      this.adContext.removeEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, this.onAdsRequestComplete);
    }
  }, {
    key: "forceAdEnded",
    value: function forceAdEnded() {
      var _this6 = this;
      setTimeout(function () {
        var vpaidContainer = document.getElementById(_this6.context.settings.videoContainer).querySelector('.fw_vpaid_slot');
        if (vpaidContainer && _this6.context.currentAdInstance.getAdId() == _this6.lastAdId) {
          vpaidContainer.remove();
          _this6.context.player.trigger('ads-ad-ended');
          _this6.context.currentAdInstance.complete();
        }
      }, 1000);
    }
  }, {
    key: "onAdsAdEvent",
    value: function onAdsAdEvent(event) {
      var _this7 = this;
      var adEventType = event.subType || event.type;
      var slot = event.slot;
      var adInstance = event.adInstance;
      var currentSlot = slot ? slot : adInstance ? adInstance.getSlot() : undefined;
      var currentSlotType = currentSlot.getTimePositionClass();
      var isLinearSlot = this.isLinearSlot(currentSlotType);
      if (adEventType == tv.freewheel.SDK.EVENT_ERROR) {
        this.player.trigger('ads-error');
        return;
      }
      if (adEventType == tv.freewheel.SDK.EVENT_AD_IMPRESSION) {
        this.adContext.registerVideoDisplayBase(this.settings.videoContainer);
        if (this.isVpaid(adInstance)) {
          if (isLinearSlot) {
            var currentContext = {
              context: this,
              lastAdId: adInstance.getAdId()
            };
            this.player.one('ads-ended', this.forceAdEnded.bind(currentContext));
          }
          var vpaidContainer = document.getElementById(this.settings.videoContainer);
          var vpaidDiv = vpaidContainer.querySelector('.fw_vpaid_slot');
          vpaidDiv.style.width = '100%';
          vpaidDiv.style.height = '100%';
          vpaidDiv.style.top = '0';
        }
      }
      var data = undefined;
      if (isLinearSlot) {
        if (adInstance) {
          this.player.cache_.duration = adInstance.getDuration();
          this.currentAdInstance = adInstance;
        }
        if (adEventType == tv.freewheel.SDK.EVENT_SLOT_STARTED) {
          data = {
            id: slot.getCustomId(),
            duration: slot.getTotalDuration(),
            currentTime: function currentTime() {
              return slot.getPlayheadTime();
            },
            adCount: slot.getAdInstances if (adEventType == tv.freewheel.SDK.EVENT_AD_INITIATED) {
          var adId = adInstance.getAdId();
          var universalId = adInstance.getUniversalAdId();
          var customId = adInstance.getParameter('_fw_4AID');
          var adIndex = adInstance.getSlot().getAdInstances().findIndex(function (adInstance) {
            return adInstance.getAdId() == adId;
          });
          data = {
            id: adId,
            universalId: universalId || undefined,
            customId: customId.length ? customId[0] : undefined,
            type: currentSlotType,
            duration: adInstance.getDuration(),
            currentTime: function currentTime() {
              return adInstance.getPlayheadTime();
            },
            index: adIndex >= 0 ? adIndex + 1 : 0
          };
          this.updatePlayerAds('ad', data);
        }
        if (adEventType in this.adEvents) {
          this.player.trigger(this.adEvents[adEventType]);
        }
        switch (adEventType) {
          case tv.freewheel.SDK.EVENT_SLOT_STARTED:
            this.player.tech().disposeSourceHandler();
            this.player.el().classList.add('vjs-ads');
            this.player.el().querySelectorAll('.vjs-overlay').forEach(function (el) {
              el.classList.add('vjs-hidden');
            });
            this.savePlayerStatus();
            this.isPlayingAds(true);
            break;
          case tv.freewheel.SDK.EVENT_SLOT_ENDED:
            this.player.el_.getElementsByTagName('video')[0].removeAttribute('src');
            this.player.el().classList.remove('vjs-ads');
            var slotTypehasitems = this.getSlotsBySlotType(currentSlotType).length;
            if (!slotTypehasitems) {
              this.triggerSlotEmpty(currentSlotType);
            }
            var autoPlaySlots = [tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL, tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL];
            if (autoPlaySlots.includes(currentSlotType) && slotTypehasitems) {
              this.isPlayingAds(true);
              var playerTrigger = currentSlotType == tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL ? 'ads-playprerolls' : 'ads-playpostrolls';
              this.player.trigger(playerTrigger, {
                slotType: currentSlotType
              });
            } else {
              if (!this.pluginUpdating) {
                if (this.isLive) {
                  this.helpers.stoneInstance.getChannelPlaybackInfo({
                    channelId: this.videoId
                  }, function (e) {
                    var playbackData = e.detail.result;
                    if (playbackData && playbackData.streaming) {
                      var currentStreamType = _this7.settings.content.source.type.indexOf('dash') > 0 ? 'dash' : 'hls';
                      _this7.settings.content.source.src = playbackData.streaming[currentStreamType].url;
                      if (playbackData.protection.drmEnabled || playbackData.protection.clearkeyEnabled && streamType == 'dash') {
                        _this7.settings.content.keySystems = _this7.helpers.setContentProtection({
                          schemes: playbackData.protection.schemes,
                          drmEnabled: playbackData.protection.drmEnabled,
                          drmToken: playbackData.protection.drmToken,
                          clearkeyEnabled: playbackData.protection.clearkeyEnabled
                        });
                      }
                      _this7.restorePlayerStatus(_this7.settings.content);
                    }
                  });
                } else {
                  this.restorePlayerStatus(this.settings.content);
                }
              }
            }
            break;
          case tv.freewheel.SDK.EVENT_AD_INITIATED:
            this.isPlayingAds(true);
            if (this.player.controlBar.progressControl.enabled()) {
              this.player.controlBar.progressControl.disable();
            }
            break;
          case tv.freewheel.SDK.EVENT_AD_COMPLETE:
            if (!this.player.controlBar.progressControl.enabled()) {
              this.player.controlBar.progressControl.enable();
            }
            break;
        }
      }
    }
  }, {
    key: "getClosestSlotIndex",
    value: function getClosestSlotIndex(slots) {
      if (slots !== undefined && slots.length > 0) {
        var currentContentTime = Math.floor(this.player.currentTime());
        var timeRange = 0.5;
        var rangeMin = currentContentTime - timeRange;
        var rangeMax = currentContentTime + timeRange;
        var closest = slots.findIndex(function (slot) {
          var slotTimePosition = slot.getTimePosition();
          return slotTimePosition == currentContentTime || slotTimePosition <= rangeMax && slotTimePosition >= rangeMin || currentContentTime > slotTimePosition;
        });
        return closest;
      } else {
        return -1;
      }
    }
  }, {
    key: "playLinearSlot",
    value: function playLinearSlot(event, hash) {
      var slots, slot, slotType;
      slotType = hash ? hash.slotType : this.nextLinearSlotType;
      slots = this.getSlotsBySlotType(slotType);
      if (slotType == tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL) {
        var slotIndex = this.getClosestSlotIndex(slots);
        if (slotIndex > -1) {
          slot = slots.splice(slotIndex, 1)[0];
          this.hasPendingMidrolls = slots.length > 0;
          if (slot) {
            this.player.trigger('ads-playmidrolls');
          }
        }
      } else {
        slot = slots.shift();
      }
      this.nextLinearSlotType = this.getNextLinearSlotType();
      if (slot) {
        this.isPlayingAds(true);
        slot.play();
      }
    }
  }, {
    key: "playOverlaySlot",
    value: function playOverlaySlot(event, hash) {
      var slots = this.getSlotsBySlotType(tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY);
      var slotIndex = this.getClosestSlotIndex(slots);
      if (slotIndex > -1) {
        var slot = slots.splice(slotIndex, 1)[0];
        this.hasPendingOverlays = slots.length > 0;
        if (slot) {
          slot.play();
        }
      }
    }
  }]);
  return hyogaVideojsFreeWheel;
}(VideojsPlugin);
hyogaVideojsFreeWheel.VERSION = FWDirectVersion;

;// CONCATENATED MODULE: ./src/videojs/lib/plugins/videojs-dynamicoverlay.js
function videojs_dynamicoverlay_typeof(obj) { "@babel/helpers - typeof"; return videojs_dynamicoverlay_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, videojs_dynamicoverlay_typeof(obj); }




















function videojs_dynamicoverlay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function videojs_dynamicoverlay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, videojs_dynamicoverlay_toPropertyKey(descriptor.key), descriptor); } }
function videojs_dynamicoverlay_createClass(Constructor, protoProps, staticProps) { if (protoProps) videojs_dynamicoverlay_defineProperties(Constructor.prototype, protoProps); if (staticProps) videojs_dynamicoverlay_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function videojs_dynamicoverlay_toPropertyKey(arg) { var key = videojs_dynamicoverlay_toPrimitive(arg, "string"); return videojs_dynamicoverlay_typeof(key) === "symbol" ? key : String(key); }
function videojs_dynamicoverlay_toPrimitive(input, hint) { if (videon desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return videojs_dynamicoverlay_get.apply(this, arguments); }
function videojs_dynamicoverlay_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = videojs_dynamicoverlay_getPrototypeOf(object); if (object === null) break; } return object; }
function videojs_dynamicoverlay_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) videojs_dynamicoverlay_setPrototypeOf(subClass, superClass); }
function videojs_dynamicoverlay_setPrototypeOf(o, p) { videojs_dynamicoverlay_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return videojs_dynamicoverlay_setPrototypeOf(o, p); }
function videojs_dynamicoverlay_createSuper(Derived) { var hasNativeReflectConstruct = videojs_dynamicoverlay_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = videojs_dynamicoverlay_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = videojs_dynamicoverlay_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return videojs_dynamicoverlay_possibleConstructorReturn(this, result); }; }
function videojs_dynamicoverlay_possibleConstructorReturn(self, call) { if (call && (videojs_dynamicoverlay_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return videojs_dynamicoverlay_assertThisInitialized(self); }
function videojs_dynamicoverlay_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function videojs_dynamicoverlay_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function videojs_dynamicoverlay_getPrototypeOf(o) { videojs_dynamicoverlay_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return videojs_dynamicoverlay_getPrototypeOf(o); }

var version = "0.0.1";
var videojs_dynamicoverlay_VideojsPlugin = videojs_min.getPlugin('plugin');
var videojs_dynamicoverlay_dom = videojs_min.dom;
var videojsDynamicOverlay = /*#__PURE__*/function (_VideojsPlugin) {
  videojs_dynamicoverlay_inherits(videojsDynamicOverlay, _VideojsPlugin);
  var _super = videojs_dynamicoverlay_createSuper(videojsDynamicOverlay);
  function videojsDynamicOverlay(player, options) {
    var _this;
    videojs_dynamicoverlay_classCallCheck(this, videojsDynamicOverlay);
    _this = _super.call(this, player, options);
    _this.options = options;
    _this.counterEnabled = true;
    _this.createOverlay();
    return _this;
  }
  videojs_dynamicoverlay_createClass(videojsDynamicOverlay, [{
    key: "dispose",
    value: function dispose() {
      this.destroyOverlay();
      videojs_dynamicoverlay_get(videojs_dynamicoverlay_getPrototypeOf(videojsDynamicOverlay.prototype), "dispose", this).call(this);
    }
  }, {
    key: "createOverlay",
    value: function createOverlay() {
      this.overlayDiv = videojs_dynamicoverlay_dom.createEl('div', {
        className: 'vjs-dynamicoverlay vjs-dinamicoverlay-hidden'
      });
      var label = videojs_dynamicoverlay_dom.createEl('span', {
        className: 'vjs-dynamicoverlay-label'
      });
      label.innerHTML = this.options.label;
      this.dymanictext = videojs_dynamicoverlay_dom.createEl('span', {
        className: 'vjs-dynamicoverlay-dynamictext'
      });
      this.overlayDiv.appendChild(label);
      this.overlayDiv.appendChild(this.dymanictext);
      this.player.el().appendChild(this.overlayDiv);
    }
  }, {
    key: "initUpdateOverlayText",
    value: function initUpdateOverlayText(advDuration) {
      var _this2 = this;
      var interval = 250;
      var remainingTime = advDuration;
      var overlayUpdate = setInterval(function () {
        if (_this2.counterEn   _this2.dymanictext.innerHTML = "".concat(remainingTimeText, "s");
          remainingTime -= interval / 1000;
          if (remainingTime < 0.5) {
            clearInterval(overlayUpdate);
          }
        }
      }, interval, remainingTime);
    }
  }, {
    key: "setcounterEnabled",
    value: function setcounterEnabled(state) {
      this.counterEnabled = state;
    }
  }, {
    key: "handleStateChanged",
    value: function handleStateChanged(data) {
      if (data.changes) {
        if (data.changes.advDuration) {
          this.initUpdateOverlayText(data.changes.advDuration.to);
        }
        if (data.changes.displayOverlayDiv) {
          if (data.changes.displayOverlayDiv.to == true) {
            this.counterEnabled = true;
            this.dymanictext.innerHTML = "".concat(this.player.ads.ad.index, "/").concat(this.player.ads.pod.adCount);
            this.overlayDiv.classList.remove('vjs-dinamicoverlay-hidden');
            this.overlayDiv.classLerlayDiv.to == false) {
            this.overlayDiv.classList.remove('vjs-dinamicoverlay-visible');
            this.overlayDiv.classList.add('vjs-dinamicoverlay-hidden');
            this.counterEnabled = true;
          }
        }
      }
    }
  }, {
    key: "destroyOverlay",
    value: function destroyOverlay() {
      this.player.el().removeChild(this.overlayDiv);
    }
  }]);
  return videojsDynamicOverlay;
}(videojs_dynamicoverlay_VideojsPlugin);
videojsDynamicOverlay.VERSION = version;

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/videojs/lib/videojs.min.css
var lib_videojs_min = __webpack_require__(1245);
;// CONCATENATED MODULE: ./src/videojs/lib/videojs.min.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(lib_videojs_min/* default */.Z, options);




       /* harmony default export */ var videojs_lib_videojs_min = (lib_videojs_min/* default */.Z && lib_videojs_min/* default */.Z.locals ? lib_videojs_min/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/videojs/lib/videojs-extra.css
var videojs_extra = __webpack_require__(8448);
;// CONCATENATED MODULE: ./src/videojs/lib/videojs-extra.css

      
      
      
      
      
      
      
      
      

var videojs_extra_options = {};

videojs_extra_options.styleTagTransform = (styleTagTransform_default());
videojs_extra_options.setAttributes = (setAttributesWithoutAttributes_default());

      videojs_extra_options.insert = insertBySelector_default().bind(null, "head");
    
videojs_extra_options.domAPI = (styleDomAPI_default());
videojs_extra_options.insertStyleElement = (insertStyleElement_default());

var videojs_extra_update = injectStylesIntoStyleTag_default()(videojs_extra/* default */.Z, videojs_extra_options);




       /* harmony default export */ var lib_videojs_extra = (videojs_extra/* default */.Z && videojs_extra/* default */.Z.locals ? videojs_extra/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/videojs/lib/plugins/videojs-overlay.min.css
var videojs_overlay_min = __webpack_require__(199);
;// CONCATENATED MODULE: ./src/videojs/lib/plugins/videojs-overlay.min.css

      
      
      
      
      
      
      
      
      

var videojs_overlay_min_options = {};

videojs_overlay_min_options.styleTagTransform = (styleTagTransform_default());
videojs_overlay_min_options.setAttributes = (setAttributesWithoutAttributes_default());

      videojs_overlay_min_options.insert = insertBySelector_default().bind(null, "head");
    
videojs_overlay_min_options.domAPI = (styleDomAPI_default());
videojs_overlay_min_options.insertStyleElement = (insertStyleElement_default());

var videojs_overlay_min_update = injectStylesIntoStyleTag_default()(videojs_overlay_min/* default */.Z, videojs_overlay_min_options);




       /* harmony default export */ var plugins_videojs_overlay_min = (videojs_overlay_min/* default */.Z && videojs_overlay_min/* default */.Z.locals ? videojs_overlay_min/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/videojs/lib/plugins/videojs-dynamicoverlay.css
var videojs_dynamicoverlay = __webpack_require__(2722);
;// CONCATENATED MODULE: ./src/videojs/lib/plugins/videojs-dynamicoverlay.css

      
      
      
      
      
      
      
      
      

var videojs_dynamicoverlay_options = {};

videojs_dynamicoverlay_options.styleTagTransform = (styleTagTransform_default());
videojs_dynamicoverlay_options.setAttributes = (setAttributesWithoutAttributes_default());

      videojs_dynamicoverlay_options.insert = insertBySelector_default().bind(null, "head");
    
videojs_dynamicoverlay_options.domAPI = (styleDomAPI_default());
videojs_dynamicoverlay_options.insertStyleElement = (insertStyleElement_default());

var videojs_dynamicoverlay_update = injectStylesIntoStyleTag_default()(videojs_dynamicoverlay/* default */.Z, videojs_dynamicoverlay_options);




       /* harmony default export */ var plugins_videojs_dynamicoverlay = (videojs_dynamicoverlay/* default */.Z && videojs_dynamicoverlay/* default */.Z.locals ? videojs_dynamicoverlay/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/videojs/player-core.js
function player_core_typeof(obj) { "@babel/helpers - typeof"; return player_core_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, player_core_typeof(obj); }
function player_core_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function player_core_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? player_core_ownKeys(Object(source), !0).forEach(function (key) { player_core_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : player_core_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function player_core_defineProperty(obj, key, value) { key = player_core_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




































































function player_core_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, player_core_toPropertyKey(descriptor.key), descriptor); } }
function player_core_createClass(Constructor, protoProps, staticProps) { if (protoProps) player_core_defineProperties(Constructor.prototype, protoProps); if (staticProps) player_core_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function player_core_toPropertyKey(arg) { var key = player_core_toPrimitive(arg, "string"); return player_core_typeof(key) === "symbol" ? key : String(key); }
function player_core_toPrimitive(input, hint) { if (player_core_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (player_core_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function player_core_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function player_core_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) player_core_setPrototypeOf(subClass, superClass); }
function player_core_setPrototypeOf(o, p) { player_core_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return player_core_setPrototypeOf(o, p); }
function player_core_createSuper(Derived) { var hasNativeReflectConstruct = player_core_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = player_core_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = player_core_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return player_core_possibleConstructorReturn(this, result); }; }
function player_core_possibleConstructorReturn(self, call) { if (call && (player_core_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return player_core_assertThisInitialized(self); }
function player_core_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function player_core_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function player_core_getPrototypeOf(o) { player_core_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return player_core_getPrototypeOf(o); }

window.videojs = videojs_min;



videojs_min.registerPlugin('hyogaVideojsFreeWheel', hyogaVideojsFreeWheel);
videojs_min.registerPlugin('DynamicOverlay', videojsDynamicOverlay);
var videojsEme = __webpack_require__(8718);
var videojsOverlay = __webpack_require__(3564);




var VideojsContentPlayer = /*#__PURE__*/function (_GenericContentPlayer) {
  player_core_inherits(VideojsContentPlayer, _GenericContentPlayer);
  var _super = player_core_createSuper(VideojsContentPlayer);
  function VideojsContentPlayer(_ref) {
    var _this;
    var _ref$videoId = _ref.videoId,
      videoId = _ref$videoId === void 0 ? undefined : _ref$videoId,
      _ref$hyogaManagerId = _ref.hyogaManagerId,
      hyogaManagerId = _ref$hyogaManagerId === void 0 ? undefined : _ref$hyogaManagerId,
      _ref$playerSelector = _ref.playerSelector,
      playerSelector = _ref$playerSelector === void 0 ? undefined : _ref$playerSelector,
      _ref$representationsM = _ref.representationsMax,
      representationsMax = _ref$representationsM === void 0 ? undefined : _ref$representationsM,
      _ref$representationsM2 = _ref.representationsMin,
      representationsMin = _ref$representationsM2 === void 0 ? undefined : _ref$representationsM2,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? false : _ref$autoplay,
      _ref$muted = _ref.muted,
      muted = _ref$muted === void 0 ? false : _ref$muted,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? true : _ref$controls,
      _ref$nextepisode = _ref.nextepisode,
      nextepisode = _ref$nextepisode === void 0 ? false : _ref$nextepisode,
      _ref$disableobserver = _ref.disableobserver,
      disableobserver = _ref$disableobserver === void 0 ? false : _ref$disableobserver,
      _ref$disablepip = _ref.disablepip,
      disablepip = _ref$disablepip === void 0 ? false : _ref$disablepip,
      _ref$liveui = _ref.liveui,
      liveui = _ref$liveui === void 0 ? false : _ref$liveui,
      _ref$stoneInstance = _ref.stoneInstance,
      stoneInstance = _ref$stoneInstance === void 0 ? undefined : _ref$stoneInstance,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 0 : _ref$position,
      _ref$playbackUrl = _ref.playbackUrl,
      playbackUrl = _ref$playbackUrl === void 0 ? undefined : _ref$playbackUrl,
      _ref$streamType = _ref.streamType,
      streamType = _ref$streamType === void 0 ? 'hls' : _ref$streamType,
      _ref$keySystems = _ref.keySystems,
      keySystems = _ref$keySystems === void 0 ? undefined : _ref$keySystems,
      _ref$videoPoster = _ref.videoPoster,
      videoPoster = _ref$videoPoster === void 0 ? undefined : _ref$videoPoster,
      _ref$fwReference = _ref.fwReference,
      fwReference = _ref$fwReference === void 0 ? undefined : _ref$fwReference,
      _ref$fwMeta = _ref.fwMeta,
      fwMeta = _ref$fwMeta === void 0 ? undefined : _ref$fwMeta,
      _ref$metaData = _ref.metaData,
      metaData = _ref$metaData === void 0 ? {} : _ref$metaData,
      _ref$playerOverlays = _ref.playerOverlays,
      playerOverlays = _ref$playerOverlays === void 0 ? undefined : _ref$playerOverlays,
      _ref$eventsManager = _ref.eventsManager,
      eventsManager = _ref$eventsManager === void 0 ? undefined : _ref$eventsManager,
      _ref$globalEventsMana = _ref.globalEventsManager,
      globalEventsManager = _ref$globalEventsMana === void 0 ? undefined : _ref$globalEventsMana,
      _ref$globalEventsMana2 = _ref.globalEventsManagerId,
      globalEventsManagerId = _ref$globalEventsMana2 === void 0 ? undefined : _ref$globalEventsMana2,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? undefined : _ref$status,
      _ref$adSystem = _ref.adSystem,
      adSystem = _ref$adSystem === void 0 ? 'fw' : _ref$adSystem,
      _ref$adTagUrl = _ref.adTagUrl,
      adTagUrl = _ref$adTagUrl === void 0 ? undefined : _ref$adTagUrl,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? undefined : _ref$error,
      _ref$i18n = _ref.i18n,
      i18n = _ref$i18n === void 0 ? {} : _ref$i18n,
      _ref$langCodes = _ref.langCodes,
      langCodes = _ref$langCodes === void 0 ? [] : _ref$langCodes;
    player_core_classCallCheck(this, VideojsContentPlayer);
    _this = _super.call(this, {
      videoId: videoId,
      hyogaManagerId: hyogaManagerId,
      playerSelector: playerSelector,
      representationsMax: representationsMax,
      representationsMin: representationsMin,
      autoplay: autoplay,
      muted: muted,
      controls: controls,
      nextepisode: nextepisode,
      disableobserver: disableobserver,
      disablepip: disablepip,
      liveui: liveui,
      stoneInstance: stoneInstance,
      position: position,
      playbackUrl: playbackUrl,
      streamType: streamType,
      keySystems: keySystems,
      videoPoster: videoPoster,
      fwReference: fwReference,
      fwMeta: fwMeta,
      metaData: metaData,
      playerOverlays: playerOverlays,
      eventsManager: eventsManager,
      globalEventsManager: globalEventsManager,
      globalEventsManagerId: globalEventsManagerId,
      status: status,
      adSystem: adSystem,
      adTagUrl: adTagUrl,
      error: error,
      i18n: i18n,
      langCodes: langCodes
    });
    _this.initPlayer = function (_ref2) {
      var _ref2$videoId = _ref2.videoId,
        videoId = _ref2$videoId === void 0 ? _this.videoId : _ref2$videoId,
        _ref2$videoPoster = _ref2.videoPoster,
        videoPoster = _ref2$videoPoster === void 0 ? _this.videoPoster : _ref2$videoPoster,
        _ref2$position = _ref2.position,
        position = _ref2$position === void 0 ? _this.position : _ref2$position,
        _ref2$playbackUrl = _ref2.playbackUrl,
        playbackUrl = _ref2$playbackUrl === void 0 ? _this.playbackUrl : _ref2$playbackUrl,
        _ref2$streamType = _ref2.streamType,
        streamType = _ref2$streamType === void 0 ? _this.streamType : _ref2$streamType,
        _ref2$keySystems = _ref2.keySystems,
        keySystems = _ref2$keySystems === void 0 ? _this.keySystems : _ref2$keySystems,
        _ref2$fwReference = _ref2.fwReference,
        fwReference = _ref2$fwReference === void 0 ? _this.fwReference : _ref2$fwReference,
        _ref2$fwMeta = _ref2.fwMeta,
        fwMeta = _ref2$fwMeta === void 0 ? _this.fwMeta : _ref2$fwMeta,
        _ref2$metaData = _ref2.metaData,
        metaData = _ref2$metaData === void 0 ? _this.metaData : _ref2$metaData,
        _ref2$playerOverlays = _ref2.playerOverlays,
        playerOverlays = _ref2$playerOverlays === void 0 ? _this.playerOverlays : _ref2$playerOverlays,
        _ref2$status = _ref2.status,
        status = _ref2$status === void 0 ? _this.status : _ref2$status,
        _ref2$error = _ref2.error,
        error = _ref2$error === void 0 ? _this.error : _ref2$error,
        _ref2$adSystem = _ref2.adSystem,
        adSystem = _ref2$adSystem === void 0 ? _this.adSystem : _ref2$adSystem,
        _ref2$adTagUrl = _ref2.adTagUrl,
        adTagUrl = _ref2$adTagUrl === void 0 ? _this.adTagUrl : _ref2$adTagUrl,
        _ref2$initAds = _ref2.initAds,
        initAds = _ref2$initAds === void 0 ? typeof _this.fwReference !== 'undefined' && typeof _this.fwMeta !== 'undefined' : _ref2$initAds,
        _ref2$forcePlay = _ref2.forcePlay,
        forcePlay = _ref2$forcePlay === void 0 ? false : _ref2$forcePlay;
      _this.player.autoplay(false);
      _this.metaData = metaData;
      _this.videoId = videoId;
      _this.stopNextEpisode = false;
      _this.player.ready(function () {
        _this.player.on('loadeddata', function () AudioLan;
            _this.setPlayerAudioTrack((_this$defaultAudioLan = _this.defaultAudioLanguage) !== null && _this$defaultAudioLan !== void 0 ? _this$defaultAudioLan : _this.langCodes);
          }
        });
        _this.player.tech().audioTracks().addEventListener('change', function () {
          !_this.settingDefaultAudio && _this.setDefaultAudioLanguage();
        });
        if (_this.representationsMax || _this.representationsMin) {
          _this.player.one('loadedmetadata', function () {
            _this.player.tech().vhs.representations().forEach(function (rep) {
              if (_this.representationsMax) {
                if (rep.height <= _this.representationsMax) {
                  rep.enabled(true);
                } else {
                  rep.enabled(false);
                }
              } else {
                if (rep.height >= _this.representationsMin) {
                  rep.enabled(true);
                } else {
                  rep.enabled(false);
                }
              }
            });
          });
        }
        if (videoPoster) {
          _this.setPlayerPoster(videoPoster);
        }
        if (status == 200) {
          if (adSystem == 'fw' && fwReference && window.fwConfigOpts && !_this.isAdBlockEnabled) {
            _this.requestingAds = true;
            _this.initVideoAdvFreeWheelNative(fwReference, fwMeta, initAds, _this.liveui, videoId, {
              stoneInstance: stoneInstance,
              setContentProtection: _this.setContentProtection
            });
          } else {
            _this.initIntersectionObserver();
          }
          _this.eventsManager.pub('video', _this.playerSelector, 'sourceloaded', {
            content: _this.metaData
          });
          if (_this.globalEventsManager && _this.globalEventsManagerId) {
            _this.globalEventsManager.pub('video', _this.globalEventsManagerId, 'sourceloaded', {
              con
            playbackUrl: playbackUrl,
            streamType: streamType,
            keySystems: keySystems
          });
          _this.handleAdvertisingBug();
          if (!_this.playerInitialized) {
            _this.playerInitialized = true;
            _this.player.on(_this.playerEvents, function (e) {
              _this.notifyEvents(e, _this.metaData);
            });
            _this.player.on('playing', function () {
              _this.playActions++;
              _this.playActions > 0 && _this.dispatchHyogaDomEvent('ReadyForModal');
            });
            _this.player.on('play', function () {
              _this.dispatchHyogaDomEvent('ContentPlay');
            });
            _this.player.on('pause', function () {
              _this.dispatchHyogaDomEvent('ContentPause');
            });
            _this.player.on('end', function () {
              _this.dispatchHyogaDomEvent('ContentEnd');
  rOverlays) {
            _this.setPlayerOverlays(playerOverlays);
 s.setPlayerPosition(position);
          }
          if (forcePlay && _this.isPlaying) {
            _this.player.one('loadedmetadata', function () {
              _this.player.play();
            });
          }
          _this.player.one(['play', 'play-request'], function () {
            if (!_this.firstPlay) {
              _this.firstPlay = true;
            }
          });
          _this.player.one('playing', function () {
            _this.dispatchHyogaDomEvent('ContentStart');
          });
          if (_this.liveui) {
            _this.player.trigger('durationchange');
          }
          if (!_this.requestingAds) {
            _this.dispatchHyogaDomEvent('Ready');
          }
        } else {
          _this.openErrorModal();
        }
      });
    };
    _this.buildEventPayload = function () {
      return {
        detail: {
          hyogaManagerId: _this.hyogaManagerId,
          playerSelector: _this.playerSelector,
          timestamp: new Date().getTime()
        }
      };
    };
    _this.dispatchHyogaDomEvent = function (eventName) {
      eventName = "Hyoga.".concat(eventName);
      var HyogaEvent = new CustomEvent(eventName, _this.buildEventPayload());
      window.document.dispatchEvent(HyogaEvent);
    };
    _this.openErrorModal = function () {
      var modalContent = document.createElement('div');
      modalContent.classList = 'video-error-overlay';
      var errorText = "Error Code: ".concat(error.code, "<br/>Error Detail: ").concat(error.detail);
      if (error.code == 'access.denied.geoblocked') {
        errorText = _this.i18n.geoblocked;
      }
      modalContent.innerHTML = errorText;
      var ModalDialog = videojs_min.getComponent('ModalDialog');
      var modal = new ModalDialog(_this.player, {
        temporary: false,
        uncloseable: true,
        content: modalContent
      });
      _this.player.addChild(modal);
      modal.open();
    };
    _this.addTopMuteToggle = function () {
      if (!_this.muteToggleEnabled) {
        var videojsMuteToggle = videojs_min.getComponent('MuteToggle');
        var topMuteToggle = new videojsMuteToggle(_this.player);
        topMuteToggle.addClass('vjs-vol-0');
        topMuteToggle.addClass('videojs-top-mutetoggle');
        _this.player.addChild(topMuteToggle);
        _this.muteToggleEnabled = true;
      }
    };
    _this.notifyEvents = function (e, metaData) {
      var eventType = e.type;
      var dataPayload = {
        playerId: _this.player.id(),
        playerRefId: _this.player.id(),
        eventType: eventType,
        content: Object.assign(metaData, {
          currentTime: _this.player.currentTime() || 0
        }),
        ads: {}
      };
      if (eventType.startsWith('ads') && 'ad' in _this.player.ads && _this.player.ads.ad) {
        if ('ad' in _this.player.ads && Object.keys(_this.player.ads.ad).length > 0) {
          dataPayload.ads.ad = {
            id: _this.player.ads.ad.id,
            universalId: _this.player.ads.ad.universalId,
            customId: _this.player.ads.ad.customId,
            type: _this.player.ads.ad.type,
            currentTime: _this.player.ads.ad.currentTime,
            duration: _this.player.ads.ad.duration,
            index: _this.player.ads.ad.index
          };
        }
        if ('pod' in _this.player.ads && Object.keys(_this.player.ads.pod).length > 0) {
          dataPayload.ads.pod = {
            id: _this.player.ads.pod.id,
            duration: _this.player.ads.pod.duration,
            currentTime: _this.player.ads.pod.currentTime,
            adCount: _this.player.ads.pod.adCount
          };
        }
      }
      _this.eventsManager.pub('video', _this.playerSelector, eventType, dataPayload);
      if (_this.globalEventsManager && _this.globalEventsManagerId) {
        _this.globalEventsManager.pub('loma', _this.globalEventsManagerId, eventType, dataPayload);
      }
    };
    _this.setContentProtection = function (keySystems) {
      /*
          systemsMappings = {
              fairplay: 'com.apple.fps.1_0',
              playready: 'com.microsoft.playready',
              widevine: 'com.widevine.alpha',
              clearkey: 'org.w3.clearkey'
          }
      */
      var licenseHeaders = {
        PreAuthorization: keySystems.drmToken
      };
      var clearkey = {};
      var widevine = {};
      var fairplay = {};
      if (keySystems.schemes.clearkey) {
        clearkey = {
          'org.w3.clearkey': {
            getLicense: function getLicense(emeOptions, keyMessage, callback) {
              videojs_min.xhr({
                uri: keySystems.schemes.clearkey.licenseUrl,
                method: 'POST',
                responseType: 'arraybuffer',
                body: keyMessage
              }, function (err, response, responseBody) {
                if (err) {
                  callback(err);
                  return;
                } else {
                  callback(null, responseBody);
                }
              });
            }
          }
        };
      }
      if (keySystems.schemes.widevine) {
        widevine = {
          'com.widevine.alpha': {
            url: keySystems.schemes.widevine.licenseUrl,
            licenseHeaders: licenseHeaders
          }
        };
      }
      if (keySystems.schemes.fairplay) {
        fairplay = {
          'com.apple.fps.1_0': {
            certificateUri: keySystems.schemes.fairplay.certificateUrl,
            licenseUri: keySystems.schemes.fairplay.licenseUrl,
            getContentId: function getContentId(emeOptions, initData) {
              var allowedFields = ['Contenson = JSON.parse(content_data);
              var contentId = Object.keys(content_data_json).filter(function (key) {
                return allowedFields.includes(key);
              }).reduce(function (obj, key) {
                return player_core_objectSpread(player_core_objectSpread({}, obj), {}, player_core_defineProperty({}, key, content_data_json[key]));
              }, {});
              return JSON.stringify(contentId);
            },
            getLicense: function getLicense(emeOptions, contentId, keyMessage, callback) {
              videojs_min.xhr({
                uri: keySystems.schemes.fairplay.licenseUrl,
                method: 'POST',
                responseType: 'text',
                body: keyMessage,
                headers: {
                  'PreAuthorization': licenseHeaders.PreAuthorization,
                  'Content-Type': 'application/octet-stream'
                }
              }, function (err, response, responseBody) {
                if (err) {
                  callback(err);
                  return;
                } else {
                  var ckc_message = JSON.parse(responseBody).CkcMessage;
                  callback(null, Uint8Array.from(atob(ckc_message), function (c) {
                    return c.charCodeAt(0);
                  }));
                }
              });
            }
          }
        };
      }
      var keySystemData = {};
      if (keySystems.clearkeyEnabled) {
        keySystemData = player_core_objectSpread({}, clearkey);
      } else if (keySystems.drmEnabled) {
        keySystemData = player_core_objectSpread(player_core_objectSpread({}, widevine), fairplay);
      }
      return keySystemData;
    };
    _this.setPlayerSource = function (_ref3) {
      var playbackUrl = _ref3.playbackUrl,
        _ref3$streamType = _ref3.streamType,
        streamType = _ref3$streamType === void 0 ? 'hls' : _ref3$streamType,
        _ref3$keySystems = _ref3.keySystems,
        keySystems = _ref3$keySystems === void 0 ? undefined : _ref3$keySystems;
      var videoContentTypes = {
        'hls': 'application/x-mpegURL',
        'dash': 'application/dash+xml',
        'mp4': 'video/mp4',
        'webm': 'video/webm'
      };
      var playerOptions = {
        type: videoContentTypes[streamType],
        src: playbackUrl
      };
      if (typeof keySystems !== 'undefined') {
        playerOptions.keySystems = _this.setContentProtection(keySystems);
        if (!_this.emeInitialized) {
          _this.player.eme();
          _this.emeInitialized = true;
        }
      }
      _this.player.src(playerOptions);
    };
    _this.setDefaultAudioLanguage = function (language) {
      if (!language) {
        var audioTracks = _this.player.tech().audioTracks().tracks_;
        if (audioTracks.length) {
          var audioTrack = audioTracks.find(function (audioTrack) {
            return audioTrack.enabled;
          });
          language = audioTrack.language;
        }
      }
      _this.defaultAudioLanguage = language;
    };
    _this.setPlayerAudioTrack = function (langIdentifiers) {
      _this.settingDefaultAudio = true;
      if (!Array.isArray(langIdentaudioTracks().tracks_;
      if (audioTracks.length) {
        var audioTrack = undefined;
        if (audioTracks.length == 1) {
          audioTrack = audioTracks[0];
        } else {
          audioTracks.forEach(function (track) {
            if (langIdentifiers.some(function (langIdentifier) {
              return track.language.indexOf(langIdentifier) > -1;
            })) {
              audioTrack = track;
              track.enabled = true;
            } else {
              track.enabled = false;
            }
          });
        }
        _this.setDefaultAudioLanguage(audioTrack.language);
      }
      _this.settingDefaultAudio = false;
    };
    _this.setPlayerPoster = function (videoPoster) {
      _this.player.poster(videoPoster);
    };
    _this.handleNextVideo = function () {
      if (!_this.handleNextVideoEnabled) {
        _this.player.on(['ended', 'ads-endedpostrolls'], function () {
          /*
              When getting at content playback end,
              sometimes we have current time being a little smaller
          */
          if (!_this.stopNextEpisode && _this.nextepisode) {
            _this.eventsManager.pub('hyoga', _this.hyogaManagerId, 'hyoga-carousel-trigger-nextvideo', {
              currentVideo: _this.videoId
            });
          }
        });
        _this.handleNextVideoEnabled = true;
      }
    };
    _this.setPlayerOverlays = function (overlays) {
      overlays = overlays || [];
      if (_this.nextepisode) {
        var nextVideoDiv = videojs_min.dom.createEl('div', {
          className: 'vjs-nextvideo'
        });
        var nextVideolabel = videojs_min.dom.createEl('span', {
          className: 'vjs-nextevideo-label'
        });
        var nextVideoDismiss = dom.createEl('button', {
          className: 'vjs-nextvideo-dismiss',
          innerHTML: 'X'
        });
        nextVideoDismiss.addEventListener('click', function (e) {
          _this.disableNextEpisode();
          e.target.closest('.vjs-overlay').classList.add('vjs-hidden');
        });
        nextVideoDiv.appendChild(nextVideolabel);
        nextVideoDiv.appendChild(nextVideoDismiss);
        _this.player.on('timeupdate', function () {
          var overlayContainer = nextVideoDiv.closest('.vjs-overlay');
          if (_this.player.el().classList.contains('vjs-ads')) {
            overlayContainer.classList.add('vjs-hidden');
          } else {
            var remainingTime = Math.round(_this.metaData.videoDuration - _this.player.currentTime());
            if (remainingTime <= 10 && remainingTime > 0) {
              nextVideolabel.innerHTML = _this.i18n.nextVideo.replace('{seconds}', remainingTime);
              overlayContainer.classList.remove('vjs-hidden');
            }
          }
        });
        overlays.push({
          align: 'top-right',
          content: js-nextvideo-container',
          start: Math.round(_this.metaData.videoDuration - 10),
          end: Math.round(_this.metaData.videoDuration)
        });
        _this.handleNextVideo();
      }
      _this.player.on('seeking', function () {
        _this.player.el().querySelectorAll('.vjs-overlay').forEach(function (el) {
          el.classList.add('vjs-hidden');
        });
      });
      _this.player.overlay({
        content: ' ',
        overlays: overlays
      });
    };
    _this.setPlayerPosition = function (position) {
      _this.player.currentTime(position / 1000);
    };
    _this.disableNextEpisode = function () {
      _this.stopNextEpisode = true;
    };
    _this.initVideoAdvFreeWheelNative = function (fwReference, fwMeta, initAds, isLive, videoId, helpers) {
      if (window.fwMetaOverride) {
        fwMeta = player_core_objectSpread(player_core_objectSpread({}, fwMeta), window.fwMetaOverride);
      }
      var videoDuration = parseInt(_this.metaData.videoDuration);
      if (initAds || !_this.adsInitialized) {
        _this.player.hyogaVideojsFreeWheel({
          videoContainer: "playerContainer-".concat(_this.playerSelector),
          autoplay: _this.autoplay && _this.muted,
          videoAssetId: fwReference,
          videoDuration: videoDuration,
          networkId: window.fwConfigOpts.networkId || undefined,
          serverUrl: window.fwConfigOpts.server || undefined,
          profileId: window.fwConfigOpts.profile || undefined,
          extraOptions: {
            sitePrefix: window.fwConfigOpts.sitePrefix,
            fallbackSiteId: window.fwConfigOpts.fallbackSiteId,
            pageMatch: window.fwelpers,
          videoId: videoId
        });
        _this.adsInitialized = true;
      } else {
        _this.player.hyogaVideojsFreeWheel().updatePlugin(fwMeta, fwReference, videoDuration);
      }
      _this.player.on(['ads-request-success', 'ads-request-error'], function () {
        _this.initIntersectionObserver();
        _this.dispatchHyogaDomEvent('Ready');
      });
      _this.player.on(['ads-ad-started'], function () {
        _this.dispatchHyogaDomEvent('AdvStart');
      });
      _this.player.on(['ads-ad-ended'], function () {
        _this.dispatchHyogaDomEvent('AdvEnd');
      });
    };
    _this.initVideoAdvGoogle = function (imaServer, initAds) {
      if (initAds || !_this.adsInitialized) {
        try {
          var adMetaKeys = [];
          var adMeta = window.adMeta || {};
          Object.entries(adMeta).forEach(function (entry) {
            var key = entry[0];
            var value = Array.isArray(entry[1]) ? entry[1].join(',') : entry[1];
            adMetaKeys.push("".concat(key, "=").concat(value));
          });
          if (adMetaKeys.length > 0) {
            imaServer += '&cust_params=' + escape(adMetaKeys.join('&'));
          }
          var imaOptions = {
            serverUrl: imaServer
          };
          _this.player.ima3(imaOptions);
          _this.adsInitialized = true;
        } catch (e) {
          console.info('IMA init failed');
        }
      }
    };
    _this.handleAdvertisingBug = function () {
      if (_this.AdvertisingBugInitialized) {
        _this.player.DynamicOverlay().dispose();
      }
      _this.AdvertisingBugInitialized = true;
      var selfPromo = function selfPromo() {
        return _this.player.ads.ad.customId == 'selfpromo';
      };
      _this.player.DynamicOverlay({
        label: _this.i18n.advertisingLabel
      });
      _this.player.on('ads-ad-started', function () {
        if (!selfPromo()) {
          _this.player.DynamicOverlay().setState({
            displayOverlayDiv: true
          });
        }
      });
      _this.player.on('ads-ad-ended', function () {
        if (!selfPromo()) {
          _this.player.DynamicOverlay().setState({
            displayOverlayDiv: false
          });
        }
      });
    };
    _this.initPlaybackObserver = function () {
      _this.isPlaying = false;
      /*
          d setting a wrong isPlaying value
          HTML5 video events have a pause event before ended so we check remaining time (0 on last pause before ended)
      */
      _this.player.on('pause', function () {
        _this.isPlaying = _this.player.remainingTime() >= 1 ? false : true;
      });
      _this.player.on('playing', function () {
        _this.isPlaying = true;
      });
    };
    _this.initIntersectionObserver = function () {
      if (!_this.playerObserver) {
        _this.videoEl = document.querySelector("#".concat(_this.playerSelector));
        var observerCallback = function observerCallback(entries) {
          entries.forEach(function (entry) {
            var isInAdMode = _this.player.ads && _this.player.ads.isInAdMode !== undefined ? _this.player.ads.isInAdMode() : false;
            if (!entry.isIntersecting && !_this.loop) {
              if (!_this.player.paused() && !_this.disableobserver) {
                _this.player.trigger('observerpause');
                _this.player.pause();
              }
            } else {
              if (_this.muted && _this.autoplay || _this.firstPlay) {
                if (_this.player.paused() && (_this.player.id().indexOf('simulcast') > -1 || !window.simulcastBlocker)) {
                  _this.player.trigger('observerplay');
                  _this.player.play();
                }
              }
            }
          });
        };
        _this.playerObserver = new IntersectionObserver(observerCallback, {
          threshold: 0.75
        });
        _this.playerObserver.observe(_this.videoEl);
      }
    };
    _this.adBlockCheck = function () {
      var ad = window.document.createElement('ins');
      ad.className = 'AdSense';
      ad.style.display = 'block';
      ad.style.position = 'absolute';
      ad.style.top = '-1px';
      ad.style.height = '1px';
      window.document.body.appendChild(ad);
      _this.isAdBlockEnabled = !ad.clientHeight ? true : false;
      window.document.body.removeChild(ad);
    };
    _this.init = function () {
      _this.adBlockCheck();
      videojs_min.log.level('error');
      if (!_this.playbackReady) {
        _this.playbackReady = true;
        window.simulcastBlocker = window.simulcastBlocker || false;
        var pipToggle = true;
        if (_this.disablepip) {
          pipToggle = false;
        } else {
          pipToggle = !_this.liveui || _this.playerSelector.indexOf('simulcast') < 0;
        }
        var videojsOptions = {
          html5: {
            vhs: {
              overrideNative: !videojs_min.browser.IS_SAFARI,
              enableLowInitialPlaylist: true,
              limitRenditionByPlayerDimensions: false,
              experimentalBufferBasedABR: false,
              handlePartialData: true
            },
            nativeCaptions: false,
            nativeAudioTracks: videojs_min.browser.IS_SAFARI,
            nativeVideoTracks: false
          },
          enableSourceset: true,
          loadingSpinner: _this.controls,
          loop: _this.loop,
          liveui: _this.liveui,
          controlBar: {
            pictureInPictureToggle: pipToggle
          },
          userActions: {
            doubleClick: false,
            hotkeys: function hotkeys(event) {
              if ([32, 38, 40, 70, 55, 77].includes(event.which)) {
                event.preventDefault();
                event.stopPropagation();
              }
              switch (event.which) {
                case 32:
                case 75:
                  if (this.paused()) {
                    this.play();
                  } else {
                    this.pause();
                  }
                  break;
                case 38:
                  this.volume(Math.min(1, this.volume() + 0.05));
                  break;
                case 40:
                  this.volume(Math.max(0, this.volume() - 0.05));
                  break;
                case 70:
                  if (!this.isFullscreen()) {
                    this.requestFullscreen();
                  } else {
                    this.exitFullscreen();
                  }
                  break;
                case 77:
                  this.muted(!this.muted());
                  break;
              }
            }
          }
        };
        if (_this.liveui) {
          videojsOptions.preload = 'none';
        }
        _this.player = videojs_min(_this.playerSelector, videojsOptions);
        _this.player.on('play', function () {
          window.simulcastBlocker = _this.player.id().indexOf('simulcast') > -1;
          videojs_min.getAllPlayers().filter(function (player) {
            return !player.paused          return player.pause();
          });
        });
        _this.player.on('pause', function () {
          if (_this.player.id().indexOf('simulcast') > -1) {
            window.simulcastBlocker = false;
          }
        });
        window.document.addEventListener('Loma.TriggerBigPlay', function (e) {
          _this.player.bigPlayButton.trigger('click');
        }, {
          once: true
        });
        _this.initPlaybackObserver();
        _this.initTrackers(_this.metaData);
        _this.initPlayer({});
        var playerActionsHandler = function playerActionsHandler(event, data) {
          if (data && data.action) {
            var currentTime = _this.player.currentTime();
            switch (data.action) {
              case 'play':
                _this.player.paused() && _this.player.play();
                break;
              case 'pause':
                !_this.player.paused() && _this.player.pause();
                break;
              case 'ffw':
                if (data.timeDelta) {
                  _this.player.currentTime(currentTime + data.timeDelta);
                  if (data.forcePlay) {
                    _this.player.play();
                  }
                }
                break;
              case 'rwd':
                if (data.timeDelta) {
                  var newPosition = currentTime - data.timeDelta;
                  newPosition >= 0 && _this.player.currentTime(currentTime - data.timeDelta);
                  if (data.forcePlay) {
                    _this.player.play();
                  }
                }
                break;
              case 'restart':
                _this.player.currentTime(0);
                if (data.forcePlay) {
                  _this.player.play();
                }
                break;
            }
          }
        };
        if (_this.globalEventsManager && _this.globalEventsManagerId) {
          _this.globalEventsManager.sub('loma', _this.globalEventsManagerId, ['trigger-player-action'], playerActionsHandler);
        }
      }
    };
    if (_this.playerSelector && _this.streamType) {
      if (window.useGTM) {
        var playbackReadyMaxRetries = window.playbackReadyMaxRetries || 8;
        var checkPlaybackReadyRetry = 0;
        var checkPlaybackReady = setInterval(function () {
          if (window.playbackReady) {
            _this.init();
            clearInterval(checkPlaybackReady);
          } else {
            checkPlaybackReadyRetry++;
            if (checkPlaybackReadyRetry >= playbackReadyMaxRetries) {
              _this.init();
              clearInterval(checkPlaybackReady);
            }
          }
        }, 250, checkPlaybackReadyRetry);
        if (!window.playbackReady) {
          window.document.addEventListener('GTM.ReadyForPlayback', function (e) {
            _this.init();
          }, {
            once: true
          });
        }
      } else {
        _this.init();
      }
    }
    return _this;
  }
  return player_core_createClass(VideojsContentPlayer);
}(GenericContentPlayer);
/* harmony default export */ var player_core = ({
  library: VideojsContentPlayer
});
;// CONCATENATED MODULE: ./src/common/components/playercomponent.js
function playercomponent_typeof(obj) { "@babel/helpers - typeof"; return playercomponent_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, playercomponent_typeof(obj); }

























function playercomponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function playercomponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, playercomponent_toPropertyKey(descriptor.key), descriptor); } }
function playercomponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) playercomponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) playercomponent_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function playercomponent_toPropertyKey(arg) { var key = playercomponent_toPrimitive(arg, "string"); return playercomponent_typeof(key) === "symbol" ? key : String(key); }
function playercomponent_toPrimitive(input, hint) { if (playercomponent_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (playercomponent_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function playercomponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) playercomponent_setPrototypeOf(subClass, superClass); }
function playercomponent_createSuper(Derived) { var hasNativeReflectConstruct = playercomponent_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = playercomponent_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = playercomponent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return playercomponent_possibleConstructorReturn(this, result); }; }
function playercomponent_possibleConstructorReturn(self, call) { if (call && (playercomponent_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return playercomponent_assertThisInitialized(self); }
function playercomponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function playercomponent_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; playercomponent_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !playercomponent_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return playercomponent_construct(Class, arguments, playercomponent_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return playercomponent_setPrototypeOf(Wrapper, Class); }; return playercomponent_wrapNativeSuper(Class); }
function playercomponent_construct(Parent, args, Class) { if (playercomponent_isNativeReflectConstruct()) { playercomponent_construct = Reflect.construct.bind(); } else { playercomponent_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) playercomponent_setPrototypeOf(instance, Class.prototype); return instance; }; } return playercomponent_construct.apply(null, arguments); }
function playercomponent_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function playercomponent_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function playercomponent_setPrototypeOf(o, p) { playercomponent_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return playercomponent_setPrototypeOf(o, p); }
function playercomponent_getPrototypeOf(o) { playercomponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return playercomponent_getPrototypeOf(o); }

var VideoPlayerComponent = /*#__PURE__*/function (_HTMLElement) {
  playercomponent_inherits(VideoPlayerComponent, _HTMLElement);
  var _super = playercomponent_createSuper(VideoPlayerComponent);
  function VideoPlayerComponent() {
    var _this;
    playercomponent_classCallCheck(this, VideoPlayerComponent);
    _this = _super.call(this);
    _this.events = ['hyoga-initplayer', 'hyoga-updateplayer'];
    _this.videoLibraryType = undefined;
    _this.videoPlayer = undefined;
    _this.videoPlayerInitialized = false;
    _this.setHyogaManager = function (hyogaPlayerReference) {
      _this.hyogaManager = document.getElementById(hyogaPlayerReference).getHyogaManager();
    };
    _this.eventsHandler = function (event, data) {
      switch (event) {
        case 'hyoga-initplayer':
          if (!_this.videoPlayerInitialized) {
            var videoHTML = null;
            var videoLibrary = null;
            var playerSelector = data.params.playerSelector;
            var playerPoster = data.params.videoPoster;
            var playerMuted = data.params.muted ? 'muted' : '';
            var playerControls = data.params.controls ? 'controls' : '';
            var textBanner = data.params.i18n.advertisingLabel;
            _this.videoLibraryType = data.videolibrary;
            switch (_this.videoLibraryType) {
              case 'videojs':
                videoHTML = "<div id=\"playerContainer-".concat(playerSelector, "\" style=\"position: relative;\"><video-js id=\"").concat(playerSelector, "\" poster=\"").concat(playerPoster, "\" class=\"video-js vjs-16-9\" ").concat(playerMuted, " playsinline ").concat(playerControls, " style=\"background: url('").concat(playerPoster, "') no-repeat; background-size:contain;\"></video-js></div>");
                break;
              case 'hlsjs':
                playerPoster = playerPoster.replace(/&/g, '&amp;'); // replace & with &amp; to avoid XML format error in HTML
                videoHTML = "<div id=\"playerContainer-".concat(playerSelector, "\" style=\"position: relative;\">\n                                    <div id=\"banner-adv\" style=\"visibility:hidden; background-color:white; color: black;z-index: 1;position:absolute;top:0px;font-size:25px;right:0px\">").concat(textBanner, "</div>\n                                    <video id=\"").concat(playerSelector, "\" poster=\"").concat(playerPoster, "\" height=\"100%\" width=\"100%\"></video>\n                                    </div>");
                break;
              case 'dashjs':
                videoHTML = "<div id=\"playerContainer-".concat(playerSelector, "\" style=\"position: relative;\">\n                                    <div id=\"banner-adv\" style= \"visibility:hidden; background-color:white; color: black;z-index: 1;position:absolute;top:0px;font-size:25px;right:0px\">").concat(textBanner, "</div>\n                                    <video id=\"").concat(playerSelector, "\" poster=\"").concat(playerPoster, "\" height=\"100%\" width=\"100%\" playsinline ").concat(playerControls, "></video>\n                                    </div>");
                break;
            }
            videoLibrary = player_core.library;
            _this.innerHTML = videoHTML;
            data.params.hyogaManagerId = ue;
          }
          break;
        case 'hyoga-updateplayer':
          if (_this.videoPlayerInitialized) {
            _this.videoPlayer.initPlayer(data.params);
          }
          break;
      }
    };
    _this.emitHyogaDestroyed = function () {
      var HyogaDestroyed = new CustomEvent('Hyoga.Destroyed');
      window.document.dispatchEvent(HyogaDestroyed);
    };
    return _this;
  }
  playercomponent_createClass(VideoPlayerComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.attached = true;
      this.hyogaPlayerReference = this.getAttribute('hyogamanager');
      if (this.hyogaPlayerReference && !this.videoPlayerInitialized) {
        this.setHyogaManager(this.hyogaPlayerReference);
        this.hyogaManager.sub('hyoga', this.hyogaPlayerReference, this.events, this.eventsHandler);
        this.hyogaManager.pub('hyoga', this.hyogaPlayerReference, 'hyoga-videoplayer-ready', {});
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;
      this.attached = false;
      this.videoPlayer.attached = false;
      setTimeout(function () {
        if (!_this2.attached) {
          switch (_this2.videoLibraryType) {
            case 'videojs':
              _this2.videoPlayer.player.one('dispose', _this2.emitHyogaDestroyed);
              break;
            case 'hlsjs':
              _this2.videoPlayer.player.once('dispose', _this2.emitHyogaDestroyed);
              break;
            case 'dashjs':
              _this2.videoPlayer.player.once('dispose', _this2.emitHyogaDestroyed);
              break;
          }
          _this2.videoPlayer.playerObserver && _this2.videoPlayer.playerObserver.disconnect();
          _this2.videoPlayer.player.dispose();
        }
      }, 1000);
    }
  }]);
  return VideoPlayerComponent;
}( /*#__PURE__*/playercomponent_wrapNativeSuper(HTMLElement));

;// CONCATENATED MODULE: ./src/common/components/index.js



// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(189);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(1637);
;// CONCATENATED MODULE: ./src/common/locale/locale.js
var i18n = {
  de: {
    langCodes: ['de', 'deu', 'ger'],
    episode: 'folge',
    season: 'staffel',
    episodeAbbr: 'F',
    seasonAbbr: 'S',
    minAbbr: 'min',
    ageRatingFrom: 'Ab ',
    advertisingLabel: 'Werbung',
    nextVideo: 'Nächstes Video in {seconds} Sekunden',
    geoblocked: 'Dieser Inhalt ist in Deinem Land leider nicht verfügbar.<br/>Apologies, but this content is not available in your country.'
  },
  it: {
    langCodes: ['it', 'ita'],
    episode: 'episodio',
    season: 'stagione',
    episodeAbbr: 'E',
    seasonAbbr: 'S',
    minAbbr: 'min',
    ageRatingFrom: '',
    advertisingLabel: 'Pubblicità',
    nextVideo: 'Il prossimo video inizierà tra {seconds} secondi',
    geoblocked: 'Ci dispiace, questo contenuto non è disponibile in questo paese.<br/>This content is not available in your country.'
  },
  en: {
    langCodes: ['en', 'eng'],
    episode: 'episode',
    season: 'season',
    episodeAbbr: 'E',
    seasonAbbr: 'S',
    minAbbr: 'min',
    ageRatingFrom: '',
    advertisingLabel: 'Advertising',
    nextVideo: 'Next video will start in {seconds} seconds',
    geoblocked: 'This content is not available in your country.'
  },
  es: {
    langCodes: ['es', 'spa'],
    episode: 'episodio',
    season: 'temporada',
    episodeAbbr: 'E',
    seasonAbbr: 'T',
    minAbbr: 'min',
    ageRatingFrom: '',
    advertisingLabel: 'Publicidad',
    nextVideo: 'El próximo video comenzará en {seconds} segundos',
    geoblocked: 'Este video no está disponible en tu país.'
  }
};

;// CONCATENATED MODULE: ./src/common/eventsmanager/eventsmanager.js
function eventsmanager_typeof(obj) { "@babel/helpers - typeof"; return eventsmanager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, eventsmanager_typeof(obj); }














function eventsmanager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, eventsmanager_toPropertyKey(descriptor.key), descriptor); } }
function eventsmanager_createClass(Constructor, protoProps, staticProps) { if (protoProps) eventsmanager_defineProperties(Constructor.prototype, protoProps); if (staticProps) eventsmanager_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function eventsmanager_toPropertyKey(arg) { var key = eventsmanager_toPrimitive(arg, "string"); return eventsmanager_typeof(key) === "symbol" ? key : String(key); }
function eventsmanager_toPrimitive(input, hint) { if (eventsmanager_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (eventsmanager_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function eventsmanager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var EventsManager = /*#__PURE__*/eventsmanager_createClass(function EventsManager() {
  var _this = this;
  var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    video: {},
    common: {}
  };
  eventsmanager_classCallCheck(this, EventsManager);
  this.events = events;
  this.sub = function (category, player, events, callback) {
    if (category in _this.events) {
      if (events.constructor !== Array) {
        events = [events];
      }
      if (!(player in _this.events[category])) {
        _this.events[category][player] = {};
      }
      events.forEach(function (event) {
        if (!_this.events[category][player][event]) {
          _this.events[category][r][event].push(callback);
      });
    }
  };
  this.pub = function (category, player, event, data) {
    if (category in _this.events && player in _this.events[category] && event in _this.events[category][player] && _this.events[category][player][event].length > 0) forEach(function (key) { Object.definePropereOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hyogaplayer_setPrototypeOf(o, p); }
function hyogaplayer_getPrototypeOf(o) { hyogaplayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hyogaplayer_getPrototypeOf(o); }



var HyogaPlayer = /*#__PURE__*/function (_HTMLElement) {
  hyogaplayer_inherits(HyogaPlayer, _HTMLElement);
  var _super = hyogaplayer_createSuper(HyogaPlayer);
  function HyogaPlayer() {
    var _this;
    hyogaplayer_classCallCheck(this, HyogaPlayer);
    _this = _super.call(this);
    _this.events = ['hyoga-videoplayer-ready', 'hyoga-seasonselector-ready', 'hyoga-seasonselector-change', 'hyoga-carousel-ready', 'hyoga-carouselitem-click'];
    _this.stoneInstance = undefined;
    _this.hyogaEventsManager = undefined;
    _this.globalEventsManager = undefined;
    _this.contentMeta = undefined;
    _this.fwMeta = undefined;
    _this.fwReference = undefined;
    /*
        IMPORTANT: We store full video items, video objects passed to Carousel
        will only have required render data (Id, Title, Description, Duration, Season and Episode Number)
        so we avoid writing again something like setVideoData. HyogaPlayer itself will trigger Video Component
        with the new video object and source!
    */
    _this.videoItems = undefined;
    _this.browser = bowser.getParser(window.navigator.userAgent);
    _this.updatePlaybackInfo = function (playbackData) {
      if (playbackData && playbackData.streaming) {
        var streamType = undefined;
        var playbackUrl = undefined;
        if (_this.streamType) {
          streamType = _this.streamType;
        } else {
          switch (_this.videoLibrary) {
            case 'hlsjs':
              streamType = 'hls';
              break;
            case 'dashjs':
              streamType = 'dash';
              break;
            default:
              streamType = videojs.browser.IS_SAFARI || videojs.browser.IS_IOS ? 'hls' : 'dash';
              break;
          }
        }
        if (streamType == 'dash' && playbackData.streaming.dash) {
          playbackUrl = playbackData.streaming.dash.url;
        } else {
          playbackUrl = playbackData.streaming.hls.url;
          streamType = 'hls';
        }
        var keySystems = undefined;
        if (playbackData.protection.drmEnabled || playbackData.protection.clearkeyEnabled && streamType == 'dash') {
          keySystems = {
            schemes: playbackData.protection.schemes,
            drmEnabled: playbackData.protection.drmEnabled,
            drmToken: playbackData.protection.drmToken,
            clearkeyEnabled: playbackData.protection.clearkeyEnabled
          };
        }
        return {
          streamType: streamType,
          playbackUrl: playbackUrl,
          keySystems: keySystems
        };
      } else {
        return {};
      }
    };
    _this.getVideo = function (videoId) {
      return _this.videoItems.find(function (video) {
        return video.id == videoId;
      }) || _this.videoItems[0];
    };
    _this.getContentRating = function (video) {
      var addRating = function addRating(container, element) {
        var ratingMappings = {
          AL: 0,
          TP: 0
        };
        if (typeof element != 'undefined') {
          element.code = element.code.replace(/\s/g, '');
          if (element.code.toLowerCase().indexOf('all') > -1 && element.system == 'spainfta') {
            element.code = 'TP';
          }
          if (typeof ratingMappings[element.code] != 'undefined') {
            element.code = ratingMappings[element.code];
          }
          element.code = element.code.toString().replace(/[^0-9]/g, '');
          container.push(element);
        }
      };
      var ratings = [];
      var contentRatingSystems = ['medietilsynet', 'viisi', 'nicam', 'blm', 'spainfta'];
      var videoContentRatings = Array.isArray(video.contentRatings) && video.contentRatings.length ? video.contentRatings : undefined;
      if (!videoContentRatings) {
        videoContentRatings = video.show && Array.isArray(video.show.contentRatings) && video.show.contentRatings.length ? video.show.contentRatings : undefined;
      }
      if (videoContentRatings) {
        var validContentRatings = videoContentRatings.filter(function (contentRating) {
          return contentRatingSystems.includes(contentRating.contentRatingSystem.system.replace(/\s/g, '').toLowerCase());
        });
        if (validContentRatings.length) {
          addRating(ratings, {
            code: validContentRatings[0].code,
            system: validContentRatings[0].contentRatingSystem.system.replace(/\s/g, '').toLowerCase()
          });
        }
      }
      var response = ratings.length ? ratings[0] : undefined;
      return response;
    };
    _this.buildSmallOverlay = function (video) {
      var showName = video.showName || video.show && video.show.name || '';
      return showName;
    };
    _this.buildOverlays = function (video) {
      var overlaysData = [];
      var showName = video.showName || video.show && video.show.name || '';
      var contentSeparatorHtml = '<span class="video-overlay-content-separator"></span>';
      overlaysData.push("<span class='video-overlay-show-title'>".concat(showName, "</span>"));
      overlaysData.push("<span class='video-overlay-video-title'>".concat(video.name, "</span>"));
      overlaysData.push('<span class="video-overlay-content-descriptors">');
      if (video.seasonNumber || video.episodeNumber) {
        var videoSeasonEpisodeData = [];
        if (video.seasonNumber) {
          videoSeasonEpisodeData.push("<span class='video-overlay-season'>".concat(capitalize(_this.i18n.seasonAbbr)).concat(video.seasonNumber, "</span>"));
        }
        if (video.episodeNumber) {
          videoSeasonEpisodeData.length && videoSeasonEpisodeData.push('<span class="video-overlay-season-separator"></span>');
          videoSeasonEpisodeData.push("<span class='video-overlay-episode'>".concat(capitalize(_this.i18n.episodeAbbr)).concat(video.episodeNumber, "</span>"));
        }
        videoSeasonEpisodeData.push(contentSeparatorHtml);
        overlaysData.push.apply(overlaysData, videoSeasonEpisodeData);
      }
      overlaysData.push("<span class='video-overlay-duration'>".concat(Math.round(video.videoDuration / (1000 * 60)) || 1, "&nbsp;").concat(_this.i18n.minAbbr, "</span>"));
      if (video.contentDescriptors && video.contentDescriptors.length) {
        overlaysData.push(contentSeparatorHtml);
        overlaysData.push('<span class="video-overlay-descriptors">');
        video.contentDescriptors.forEach(function (contentDescriptor) {
          var contentDescriptorImage = contentDescriptor.getIcon();
          contentDescriptorImage && contentDescriptorImage.src && overlaysData.push("<img src=\"".concat(contentDescriptorImage.src, "\"/>"));
        });
        overlaysData.push('</span>');
      }
      var ageRating = _this.getContentRating(video);
      if (typeof ageRating != 'undefined') {
        overlaysData.push(contentSeparatorHtml);
        overlaysData.push("<span class=\"video-overlay-agerating\"><span class=\"video-overlay-agerating-".concat(ageRating.system, "-").concat(ageRating.code, "\"></span></span>"));
      }
      overlaysData.push('</span>');
      overlaysData.push("<span class='video-overlay-video-description'>".concat(video.description || '', "</span>"));
      var overlayContent = overlaysData.join('');
      var overlays = [{
        align: 'top-left',
        content: overlayContent,
        "class": 'vjs-contentinfo vjs-contentinfo-init',
        start: 'loadeddata',
        end: 'playing'
      }, {
        align: 'top-left',
        content: overlayContent,
        "class": 'vjs-contentinfo vjs-contentinfo-recurring',
        start: 'pause',
        end: 'playing'
      }];
      return overlays;
    };
    _this.getLightVideoItems = function (playerType) {
      return _this.videoItems.map(function (videoItem, videoIndex) {
        return {
          id: videoItem.id,
          nextVideoId: _this.videoItems[videoIndex + 1] !== undefined ? _this.videoItems[videoIndex + 1].id : undefined,
          name: videoItem.name,
          showName: videoItem.show.name,
          duration: videoItem.videoDuration,
          poster: videoItem.getPoster().src,
          description: videoItem.description,
          seasonNumber: videoItem.seasonNumber,
          episodeNumber: videoItem.episodeNumber,
          ageRating: _this.getContentRating(videoItem),
          videoType: videoItem.videoType,
          playerType: playerType
        };
      });
    };
    _this.getHyogaManager = function () {
      return _this.hyogaEventsManager;
    };
    _this.setVideoData = function (video) {
      var _video$show;
      _this.fwReference = video.identifiers && video.identifiers.freewheel ? video.identifiers.freewheel : '';
      var videoShow = (_video$show = video.show) !== null && _video$show !== void 0 ? _video$show : {};
      var genre = '';
      if (video.genres && video.genres[0]) {
        genre = video.genres[0].alternateId;
      } else if (video.taxonomy) {
        genre = video.taxonomy;
      }
      _this.fwMeta = {
        primary: video.name || '',
        show: videoShow.name || '',
        genre: genre,
        season: video.seasonNumber || '',
        pagetype: video.videoType == 'LIVE' ? 'live-video' : 'vod-video'
      };
      var channel = video.primaryChannel || videoShow.primaryChannel;
      _this.contentMeta = {
        videoId: video.id,
        videoType: video.videoType,
        videoDuration: video.videoDuration / 1000,
        originalMediaId: video.originalMediaId() || '',
        analyticsId: video.analyticsId() || '',
        contentTitle: video.name || '',
        ageRating: _this.sourceType == 'sonic' ? _this.getContentRating(video) : undefined,
        airDate: video.airDate || null,
        publishDate: video.publishStart || null,
        contentChannelName: channel ? channel.alternateId : '',
        contentChannelTitle: channel ? channel.name : '',
        contentShowId: videoShow.analyticsId || videoShow.id || '',
        contentShowTitle: videoShow.name || '',
        contentSeasonNumber: video.seasonNumber || null,
        contentEpisodeNumber: video.episodeNumber || null,
        contentGenres: video.genres && video.genres.length ? video.genres.join(',') : ''
      };
      if (_this.sourceType != 'direct') {
        _this.playerPoster = "".concat(video.getPoster()['src'], "?w=1024&f=jpg&q=75");
      }
    };
    _this.initSeasonSelector = function (seasons, selected) {
      _this.hyogaEventsManager.pub('hyoga', _this.hyogaManagerId, 'hyoga-seasonselector-init', {
        seasons: seasons,
        selectedSeason: selected,
        i18n: _this.i18n
      });
    };
    _this.setPlayerData = function (eventName, payload) {
      if (eventName == 'hyoga-initplayer') {
        payload.params.i18n = _this.i18n;
        payload.params.langCodes = _this.i18n.langCodes;
      }
      _this.hyogaEventsManager.pub('hyoga', _this.hyogaManagerId, eventName, payload);
    };
    _this.eventsHandler = function (event, data) {
      switch (event) {
        case 'hyoga-videoplayer-ready':
          _this.loadData({
            sourceType: _this.sourceType,
            playerType: _this.playerType,
            playbackType: _this.playbackType,
            assetId: _this.assetId,
            showId: _this.showId,
            collectionId: _this.collectionId,
            contentPosition: _this.contentPosition
          });
          break;
        case 'hyoga-seasonselector-ready':
          break;
        case 'hyoga-seasonselector-change':
          _this.hyogaEventsManager.pub('hyoga', _this.hyogaManagerId, 'hyoga-carousel-update', data);
          break;
        case 'hyoga-carousel-ready':
          break;
        case 'hyoga-carouselitem-click':
          var video = _this.getVideo(data.assetId);
          if (video.show) {
            var storage = _this.getStorage('hyoga');
            storage[video.show.id] = data.assetId;
            _this.saveStorage('hyoga', storage);
          }
          _this.setVideoData(video);
          _this.getVideoPlaybackData(video.id, 'video', function (playbackData) {
            _this.hyogaEventsManager.pub('hyoga', _this.hyogaManagerId, 'hyoga-carousel-title-update', data);
            var status = playbackData.streaming ? 200 : parseInt(playbackData.status);
            if (document.getElementById('networkContentContainer')) {
              document.getElementById('networkContentContainer').innerText = _this.buildSmallOverlay(video);
            }
            var params = {
              videoId: video.id,
              position: 0,
              playerOverlays: _this.hideoverlay ? [] : _this.buildOverlays(video),
              videoPoster: _this.playerPoster,
              fwReference: _this.fwReference,
              fwMeta: _this.fwMeta,
              metaData: _this.contentMeta,
              status: status,
              initAds: false,
              forcePlay: true,
              liveui: false
            };
            params = hyogaplayer_objectSpread(hyogaplayer_objectSpread({}, params), _this.updatePlaybackInfo(playbackData));
            if (status != 200 && playbackData.code) {
              params.error = {
                code: playbackData.code,
                detail: playbackData.detail
              };
            }
            _this.setPlayerData('hyoga-updateplayer', {
              params: params
            });
          });
          break;
        case 'loma-update-content':
          var endpoint = data.endpoint;
          var realm = data.realm;
          var assetId = data.assetId;
          var playbackType = data.playbackType;
          if (endpoint && realm && assetId && playbackType) {
            _this.initStone(endpoint, realm, _this.clientId, null);
            _this.getVideoObject(assetId, playbackType, function (video) {
              if (video) {
                var _realm = _this.stoneInstance._Server.realm;
                if ([null, 'null'].includes(localStorage.getItem("hyoga-".concat(_realm)))) {
                  localStorage.setItem("hyoga-".concat(_realm), _this.stoneInstance.getToken());
                }
                _this.setVideoData(video);
                _this.getVideoPlaybackData(video.id, 'video', function (playbackData) {
                  var status = playbackData.streaming ? 200 : parseInt(playbackData.status);
                  var params = {
                    videoId: video.id,
                    position: 0,
                    playerOverlays: _this.hideoverlay ? [] : _this.buildOverlays(video),
                    videoPoster: _this.playerPoster,
                    fwReference: _this.fwReference,
                    fwMeta: _this.fwMeta,
                    metaData: _this.contentMeta,
                    status: status,
                    initAds: false,
                    forcePlay: true,
                    liveui: false
                  };
                  params = hyogaplayer_objectSpread(hyogaplayer_objectSpread({}, params), _this.updatePlaybackInfo(playbackData));
                  if (status != 200 && playbackData.code) {
                    params.error = {
                      code: playbackData.code,
                      detail: playbackData.detail
                    };
                  }
                  _this.setPlayerData('hyoga-updateplayer', {
                    params: params
                  });
                });
              }
            });
          }
          break;
      }
    };
    _this.initStone = function (endpoint, realm, clientId, discoParams) {
      var token = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var storageToken = localStorage.getItem("hyoga-".concat(realm));
      if (typeof _this.stoneInstance !== 'undefined' && _this.stoneInstance._Server.realm != realm && _this.stoneInstance._Server.endpoint != endpoint) {
        _this.stoneInstance = undefined;
      }
      if (storageToken !== 'null') {
        token = storageToken;
      }
      _this.stoneInstance = _this.stoneInstance || new StoneJS({
        endpoint: endpoint,
        realm: realm,
        clientId: clientId,
        discoParams: discoParams,
        token: token,
        initToken: false
      });
    };
    _this.getVideoPlaybackData = function (assetId, playbackType, callback) {
      var wisteriaProperties = {};
      var deviceInfo = {
        "adBlocker": false,
        "drmSupported": true,
        "hdrCapabilities": ["SDR"],
        "hwDecodingCapabilities": [],
        "soundCapabilities": ["STEREO"]
      };
      if (_this.clientId.toLowerCase().indexOf('hbbtv') > -1 && _this.videoLibrary == 'dashjs') {
        deviceInfo.drmSupported = false;
        wisteriaProperties = {
          device: {
            browser: {
              name: 'chrome',
              version: '38'
            },
            type: 'hbbtv'
          },
          platform: 'hbbtv'
        };
      }
      if (playbackType == 'video') {
        _this.s,
          apiVersion: 'v3',
          deviceInfo: deviceInfo,
          wisteriaProperties: wisteriaProperties
        }, function (e) {
          callback(e.detail.result);
        });
      } else if (playbackType == 'channel') {
        _this.stoneInstance.getChannelPlaybackInfo({
          channelId: assetId
        }, function (e) {
          callback(e.detail.result);
        });
      }
    };
    _this.getVideoObject = function (assetId, playbackType, callback) {
      if (playbackType == 'video') {
        _this.stoneInstance.getVideoById({
          videoId: assetId
        }, function (e) {
          var video = e.detail.result;
          _this.setVideoData(video);
          callback(video);
        });
      } else if (playbackType == 'channel') {
        _this.stoneInstance.getChannelById({
          channelId: assetId
        }, function (e) {
          _this.fwReference = "LINEAR_CHANNEL_".concat(assetId);
          var channel = e.detail.result;
          _this.fwMeta = {
            primary: channel.name,
            show: '',
            genre: '',
            season: '',
            pagetype: 'channel-live-video'
          };
          _this.contentMeta = {
            videoType: 'LIVE',
            videoDuration: 1,
            contentTitle: channel.name,
            contentChannelName: channel.alternateId,
            contentChannelTitle: channel.name
          };
          _this.playerPoster = "".concat(channel.getPoster()['src'], "?w=1024&f=jpg&q=75");
          callback();
        });
      }
    };
    _this.get getting more then 100 items only, default Sonic max page size
      var sort = "".concat(_this.seasonSorting, "seasonNumber,").concat(_this.episodeSorting, "episodeNumber");
      _this.stoneInstance.getEpisodesByShowId({
        showId: showId,
      var episodes = e.detail.result;
        callback(episodes);
      });
    };
    _this.getCollectionVideos = function (collectionId, callback) {
      _this.stoneInstance.getCollectionByAlternateId({
        collectionAlternateId: collectionId
      }, function (e) {
        var videos = e.detail.result.items.filter(function (item) {
          return item.type == 'video';
        });
        callback(videos);
      });
    };
    _this.filterVideos = function (videos) {
      if (!_this.maxAgeRating) {
        return videoRating(video);
        if (!ageRating || ageRating <= _this.maxAgeRating) {
          return video;
        }
      });
    };
    _this.getStorage = function (key) {
      var storage = window.localStorage.getItem(key);
      return JSON.parse(storage) || {};
    };
    _this.saveStorage = function (key, payload) {
      window.localStorage.setItem(key, JSON.stringify(payload));
    };
    _this.getShowInitVideo = function (showId, assetId) {
      var storage = _this.getStorage('hyoga');
      var video = undefined;
      var videoId = storage[showId] || assetId;
      if (!videoId) {
        video = _this.videoItems[0];
        videoId = video.id;
      } else {
        video = _this.getVideo(videoId);
      }
      storage[showId] = video.id;
      _this.saveStorage('hyoga', storage);
      return video;
    };
    _this.loadData = function (_ref) {
      var _ref$sourceType = _ref.sourceType,
        sourceType = _ref$sourceType === void 0 ? 'sonic' : _ref$sourceType,
        _ref$playerType = _ref.playerType,
        playerType = _ref$playerType === void 0 ? null : _ref$playerType,
        _ref$playbackType = _ref.playbackType,
        playbackType = _ref$playbackType === void 0 ? null : _ref$playbackType,
        _ref$assetId = _ref.assetId,
        assetId = _ref$assetId === void 0 ? null : _ref$assetId,
        _ref$showId = _ref.showId,
        showId = _ref$showId === void 0 ? null : _ref$showId,
        _ref$collectionId = _ref.collectionId,
        collectionId = _ref$collectionId === void 0 ? null : _ref$collectionId,
        _ref$contentPosition = _ref.contentPosition,
        contentPosition = _ref$contentPosition === void 0 ? null : _ref$contentPosition;
      switch (playerType) {
        case 'videoPlayer':
          if (sourceType == 'sonic') {
            _this.getVideoObject(assetId, playbackType, function (video) {
              if (document.getElementById('networkContentContainer')) {
                document.getElementById('networkContentContainer').innerText = _this.buildSmallOverlay(video);
              }
              var realm = _this.stoneInstance._Server.realm;
              if ([null, 'null'].includes(localStorage.getItem("hyoga-".concat(realm)))) {
                localStorage.setItem("hyoga-".concat(realm), _this.stoneInstance.getToken());
              }
              _this.getVideoPlaybackData(assetId, playbackType, function (playbackData) {
                var status = playbackData.streaming ? 200 : parseInt(playbackData.status);
                var params = {
                  videoId: assetId,
                  playerSelector: _this.playerSelector,
                  representationsMax: _this.representationsMax,
                  representationsMin: _this.representationsMin,
                  position: contentPosition,
                  playerOverlays: _this.hideoverlay || playbackType == 'channel' ? [] : _this.buildOverlays(video),
                  videoPoster: _this.playerPoster,
                  fwReference: _this.fwReference,
                  fwMeta: _this.fwMeta,
                  metaData: _this.contentMeta,
                  eventsManager: _this.hyogaEventsManager,
                  globalEventsManager: _this.globalEventsManager,
                  globalEventsManagerId: _this.globalEventsManagerId,
                  status: status,
                  adSystem: _this.adSystem,
                  adTagUrl: _this.adTagUrl,
                  autoplay: _this.autoplay,
                  muted: _this.muted,
                  controls: _this.controls,
                  nextepisode: false,
                  disableobserver: _this.disableobserver,
                  disablepip: _this.disablepip,
                  liveui: playbackType == 'channel',
                  stoneInstance: playbackType == 'channel' ? _this.stoneInstance : undefined
                };
                params = hyogaplayer_objectSpread(hyogaplayer_objectSpread({}, params), _this.updatePlaybackInfo(playbackData));
                if (status != 200 && playbackData.code) {
                  params.error = {
                    code: playbackData.code,
                    detail: playbackData.detail
                  };
                }
                _this.setPlayerData('hyoga-initplayer', {
                  videolibrary: _this.videoLibrary,
                  params: params
                });
              });
            });
          } else if (sourceType == 'direct') {
            var video = {
              name: _this.videoTitle,
              show: '',
              genre: '',
              season: '',
              videoType: 'CLIP'
            };
            _this.setVideoData(video);
            var params = {
              videoId: undefined,
              playerSelector: _this.playerSelector,
              position: 0,
              streamType: _this.srcType,
              playbackUrl: _this.src,
              keySystems: undefined,
              videoPoster: _this.playerPoster,
              fwReference: _this.fwReference,
              fwMeta: _this.fwMeta,
              metaData: _this.contentMeta,
              eventsManager: _this.hyogaEventsManager,
              status: 200,
              adSystem: _this.adSystem,
              adTagUrl: _this.adTagUrl,
              autoplay: _this.autoplay,
              muted: _this.muted,
              controls: _this.controls,
              nextepisode: false,
              liveui: false,
              stoneInstance: undefined
            };
            _this.setPlayerData('hyoga-initplayer', {
              videolibrary: _this.videoLibrary,
              params: params
            });
          }
          break;
        case 'showPlayer':
          _this.getShowEpisodes(showId, function (episodes) {
            if (episodes.length > 0) {
              _this.videoItems = _this.filterVideos(episodes);
              if (_this.videoItems.length) {
                var _video = _this.getShowInitVideo(showId, assetId);
                _this.setVideoData(_video);
                _this.getVideoPlaybackData(_video.id, playbackType, function (playbackData) {
                  var status = playbackData.streaming ? 200 : parseInt(playbackData.status);
                  var params = {
                    videoId: _video.id,
                    playerSelector: _this.playerSelector,
                    representationsMax: _this.representationsMax,
                    representationsMin: _this.representationsMin,
                    position: contentPosition,
                    playerOverlays: _this.buildOverlays(_video),
                    videoPoster: _this.playerPoster,
                    fwReference: _this.fwReference,
                    fwMeta: _this.fwMeta,
                    metaData: _this.contentMeta,
                    eventsManager: _this.hyogaEventsManager,
                    globalEventsManager: _this.globalEventsManager,
                    globalEventsManagerId: _this.globalEventsManagerId,
                    status: status,
                    adSystem: _this.adSystem,
                    adTagUrl: _this.adTagUrl,
                    autoplay: _this.autoplay,
                    muted: _this.muted,
                    controls: _this.controls,
                    nextepisode: _this.nextepisode,
                    disableobserver: _this.disableobserver,
                    disablepip: _this.disablepip,
                    liveui: false,
                    stoneInstance: undefined
                  };
                  params = hyogaplayer_objectSpread(hyogaplayer_objectSpread({}, params), _this.updatePlaybackInfo(playbackData));
                  if (status != 200 && playbackData.code) {
                    params.error = {
                      code: playbackData.code,
                      detail: playbackData.detail
                    };
                  }
                  _this.setPlayerData('hyoga-initplayer', {
                    videolibrary: _this.videoLibrary,
                    params: params
                  });
                });
                var seasonNumbers = hyogaplayer_toConsumableArray(new Set(episodes.map(function (episode) {
                  return episode.seasonNumber;
                })));
                _this.initSeasonSelector(seasonNumbers, _video.seasonNumber);
                _this.hyogaEventsManager.pub('hyoga', _this.hyogaManagerId, 'hyoga-carousel-init', {
                  uid: _this.uid,
                  selectedSeason: _video.seasonNumber,
                  videoTitle: _video.name,
                  videos: groupBy(_this.getLightVideoItems('showPlayer'), 'seasonNumber'),
                  i18n: _this.i18n
                });
              }
            }
          });
          break;
        case 'collectionPlayer':
          _this.getCollectionVideos(collectionId, function (videos) {
            if (videos.length > 0) {
              _this.videoItems = _this.filterVideos(videos);
              if (_this.videoItems.length) {
                var _video2 = assetId ? _this.getVideo(assetId) : _this.videoItems[0];
                _this.setVideoData(_video2);
                if (document.getElementById('networkContentContainer')) {
                  document.getElementById('networkContentContainer').innerText = _this.buildSmallOverlay(_video2);
                }
                _this.getVideoPlaybackData(_video2.id, playbackType, function (playbackData) {
                  var status = playbackData.streaming ? 200 : parseInt(playbackData.status);
                  var params = {
                    videoId: _video2.id,
                    playerSelector: _this.playerSelector,
                    representationsMax: _this.representationsMax,
                    representationsMin: _this.representationsMin,
                    position: contentPosition,
                    playerOverlays: _this.hideoverlay ? [] : _this.buildOverlays(_video2),
                    videoPoster: _this.playerPoster,
                    fwReference: _this.fwReference,
                    fwMeta: _this.fwMeta,
                    metaData: _this.contentMeta,
                    eventsManager: _this.hyogaEventsManager,
                    globalEventsManager: _this.globalEventsManager,
                    globalEventsManagerId: _this.globalEventsManagerId,
                    status: status,
                    adSystem: _this.adSystem,
                    adTagUrl: _this.adTagUrl,
                    autoplay: _this.autoplay,
                    muted: _this.muted,
                    controls: _this.controls,
                    nextepisode: _this.nextepisode,
                    disableobserver: _this.disableobserver,
                    disablepip: _this.disablepip,
                    liveui: false,
                    stoneInstance: undefined
                  };
                  params = hyogaplayer_objectSpread(hyogaplayer_objectSpread({}, params), _this.updatePlaybackInfo(playbackData));
                  if (status != 200 && playbackData.code) {
                    params.error = {
                      code: playbackData.code,
                      detail: playbackData.detail
                    };
                  }
                  _this.setPlayerData('hyoga-initplayer', {
                    videolibrary: _this.videoLibrary,
                    params: params
                  });
                });
                _this.hyogaEventsManager.pub('hyoga', _this.hyogaManagerId, 'hyoga-carousel-init', {
                  uid: _this.uid,
                  selectedSeason: 0,
                  hideplaylistthumbnails: _this.hideplaylistthumbnails,
                  videoTitle: _video2.name,
                  videos: {
                    '0': _this.getLightVideoItems('collectionPlayer')
                  },
                  i18n: _this.i18n
                });
              }
            }
          });
          break;
      }
    };
    return _this;
  }
  hyogaplayer_createClass(HyogaPlayer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var urlParams = new URLSearchParams(window.location.search);
      this.sourceType = this.getAttribute('sourcetype') || 'sonic'; // Currently is 'sonic' or 'direct';
      this.adSystem = this.getAttribute('adsystem') || 'fw'; // Freewheel advertising is our default, alternative is ima
      this.adTagUrl = this.getAttribute('adtagurl') || undefined; // Mainly used for ima tag url
      this.videoTitle = this.getAttribute('title') || undefined;
      this.videoDescription = this.getAttribute('description') || undefined;
      this.playerPoster = this.getAttribute('poster') || undefined;
      this.src = this.getAttribute('src') || undefined;
      this.srcType = this.getAttribute('srctype') || undefined;
      this.maxAgeRating = parseInt(this.getAttribute('maxagerating')) || undefined;
      this.seasonSorting = this.getAttribute('seasonsorting') == 'ascending' ? '' : '-';
      this.episodeSorting = this.getAttribute('episodesorting') == 'ascending' ? '' : '-';
      this.representationsMax = parseInt(this.getAttribute('representationsMax')) || undefined;
      this.representationsMin = parseInt(this.getAttribute('representationsMin')) || undefined;
      this.autoplay = this.getAttribute('autoplay') == 'true' ? true : false;
      this.muted = this.getAttribute('muted') == 'true' ? true : false;
      this.streamType = this.getAttribute('streamtype') || undefined;
      this.hideoverlay = this.getAttribute('hideoverlay') == 'true' ? true : false;
      this.nextepisode = this.getAttribute('nextepisode') == 'true' ? true : false;
      this.controls = this.getAttribute('controls') == 'false' ? false : true;
      this.disableobserver = this.getAttribute('disableobserver') == 'true' ? true : false;
      this.hideplaylistthumbnails = this.getAttribute('hideplaylistthumbnails') == 'true' ? true : false;
      this.disablepip = window.disablepip ? window.disablepip : this.getAttribute('disablepip') == 'true' ? true : false;
      this.uid = this.getAttribute('uid'); //Must be unique inside page!
      this.videoLibrary = this.getAttribute('videolibrary');
      var locale = this.getAttribute('locale') || 'en'; // Desired 2 letters locale, default to English
      this.i18n = locale in i18n ? i18n[locale] : i18n['en'];
      this.playerType = this.getAttribute('playertype') || 'videoPlayer'; // videoPlayer || showPlayer || collectionPlayer
      this.playbackType = this.getAttribute('playbacktype') || 'video'; // video || channel
      this.hyogaManagerId = this.getAttribute('id'); // Must be unique inside page!
      // Create a custom EventsManager with common video events and Hyoga custom events
      if (!this.hyogaEventsManager) {
        this.hyogaEventsManager = new EventsManager({
          video: {},
          hyoga: {}
        });
        this.hyogaEventsManager.sub('hyoga', this.hyogaManagerId, this.events, this.eventsHandler);
      }
      // Add reference to page global EventsManager if exists - maybe usefull for future implementations
      this.globalEventsManager = this.getAttribute('globaleventsmanager') || undefined;
      this.globalEventsManagerId = undefined;
      this.playerSelector = this.getAttribute('playerselector') || "hyogaPlayer-".concat(this.uid);
      var endpoint = this.getAttribute('endpoint'); // Sonic Endpoint url
      var realm = this.getAttribute('realm'); // Sonic Realm
      this.clientId = this.getAttribute('clientid') || 'Alps:HyogaPlayer:0.0.0'; // Passed to Sonic
      this.discoParams = this.getAttribute('discoparams') || ''; // Passed to Sonic
      var token = this.getAttribute('token') || undefined;
      // Init Hyoga Player StoneJS instance
      if (this.sourceType == 'sonic' && endpoint && realm && this.clientId) {
        this.initStone(endpoint, realm, this.clientId, this.discoParams, token);
        if (typeof this.stoneInstance !== 'undefined') {
          this.showId = urlParams.get('showid') || this.getAttribute('showid'); // Sonic Show Id or alternateId
          this.collectionId = urlParams.get('collectionid') || this.getAttribute('collectionid'); // Sonic Collection Alias
          this.assetId = urlParams.get('assetid') || this.getAttribute('assetid'); // Sonic Video ID
          this.contentPosition = this.getAttribute('position') || null; // contentPosition is milliseconds
        }
      }

      if (!this.globalEventsManagerInitialized && this.globalEventsManager && hyogaplayer_typeof(this.globalEventsManager) != 'object') {
        var eventsManagerAttrs = this.globalEventsManager.split('@');
        this.globalEventsManagerId = eventsManagerAttrs[0];
        if (window[eventsManagerAttrs[1]]) {
          window[eventsManagerAttrs[1]].destroy(this.globalEventsManagerId, ['video', 'loma']);
        }
        window[eventsManagerAttrs[1]] = window[eventsManagerAttrs[1]] || new EventsManager({
          video: {},
          loma: {}
        });
        this.globalEventsManager = window[eventsManagerAttrs[1]];
        this.globalEventsManager.sub('loma', this.globalEventsManagerId, ['loma-update-content'], this.eventsHandler);
        this.globalEventsManagerInitialized = true;
      }
      this.attached = true;
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;
      this.attached = false;
      setTimeout(function () {
        !_this2.attached && _this2.hyogaEventsManager.destroy(_this2.hyogaManagerId, ['hyoga']);
      }, 1000);
    }
  }]);
  return HyogaPlayer;
}( /*#__PURE__*/hyogaplayer_wrapNativeSuper(HTMLElement));

;// CONCATENATED MODULE: ./src/index.js
var AdManagerImport = __webpack_require__(3785);

window.StoneJS = stone_min;




customElements.define('hyoga-seasonselector', SeasonSelectorComponent);
customElements.define('hyoga-carouselitem', CarouselItemComponent);
customElements.define('hyoga-carousel', CarouselComponent);
customElements.define('hyoga-videoplayer', VideoPlayerComponent);
customElements.define('hyoga-player', HyogaPlayer);
}();
window.HyogaPlayer = __webpack_exports__;
/******/ })()
;