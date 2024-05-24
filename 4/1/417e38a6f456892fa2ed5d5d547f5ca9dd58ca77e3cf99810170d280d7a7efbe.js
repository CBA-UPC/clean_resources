/**
 * Add polyfills for new Ecmascript syntax here to provide full
 * functionality in older browsers like IE11
 */


(function (sp) {

  /*ES6 'startsWith' polyfill*/
  if (!sp.startsWith) {
    sp.startsWith = function (str) {
      return !!(str && this) && !this.lastIndexOf(str, 0);
    };
  }

  /*'forEach' polyfill in IE11*/
  if (typeof NodeList.prototype.forEach === "function") {
    return false;
  }
  NodeList.prototype.forEach = Array.prototype.forEach;

})(String.prototype);


if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value:   });
}
