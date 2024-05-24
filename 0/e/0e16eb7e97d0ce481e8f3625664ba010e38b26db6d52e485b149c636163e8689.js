// Create global object if needed.
window.nnl = window.nnl || {}
nnl.appSdkLoaded = new Promise(function (resolve, reject) {
  // If utils is not loaded, load it.
  if (typeof NNLUtils === 'undefined') {
    var script = document.createElement('script')
    script.src = document.querySelector('script[src*="appsdk.js"]').src.replace('appsdk.js', 'utils.js')
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  } else {
    resolve()
  }
})
  .then(
  .then(function () {
    return Promise.all([
      NNLUtils.loadScript('fido-client.js'),
      NNLUtils.loadScript('fido-method-ui.js'),
      NNLUtils.loadScript('oob-ui.js'),
      NNLUtils.loadScript('outcome.js'),
      NNLUtils.loadScript('../otherjs/qrcode.js'),
    ])
  })

/**
 * Exception thrown by App SDK.
 * @param {string} outcome The error code from Outcome object.
 */


/**
 * This interface defines method for showing a UI that suggests users to register authenticator.
 * @interface ISuggestRegisterUI
 */

/**
 * This method implementation should display a UI suggesting users to register and return the user's choice.
 * @method ISuggestRegisterUI#openUI
 * @returns {Promise} A promise that will resolve with {SuggestRegisterUIStatus} indicating user's choice.
 */

/**
 *  Indicates the user's choice on the suggestion UI.
 *  @enum {string}
 */
var SuggestRegisterUIStatus = {
  /**
   * The suggestion is accepted by the user.
   */
  SURE: 'SURE',
  /**
   * The suggestion is declined by the user.
   */
  NO_THANKS: 'NO_THANKS',
  /**
   * The suggestion is declined by the user and user does not want to be reminded again
   */
  NEVER_ASK: 'NEVER_ASK',
}

/**
 * Indicates whether user was asked to register or not when {AppSdk.suggestRegister} fails.
 * @enum {string}
 */
var SuggestionStatus = {
  ASKED: 'ASKED',
  NOT_ASKED: 'NOT_ASKED',
}

/**
 * Default implementation of ISuggestRegisterUI.
 * @implements {ISuggestRegisterUI}
 */
var DefaultSuggestRegisterUI = function () {
  var popup, neverAskCheck, yesButton, noButton
  // Load html resource and store element references.
  var isReady = NNLUtils.loadHTML('suggest-register-ui.html', 'nnl-suggest-register-section').then(function () {
    popup = document.getElementById('nnl-suggest-register-ui')
    neverAskCheck = document.getElementById('nnl-never-suggest-register')
    yesButton = document.getElementById('nnl-suggest-register-yes')
    noButton = document.getElementById('nnl-suggest-register-no')
  })

  // Reference to the "resolve" function of the Promise returned by openUI.
  var returnResult

  // "Sure" button click handler.
  function onYes() {
    hideUI()
    returnResult(SuggestRegisterUIStatus.SURE)
  }

  // "No Thanks" button click handler.
  function onNo() {
    hideUI()
    if (neverAskCheck.checked) {
      returnResult(SuggestRegisterUIStatus.NEVER_ASK)
    } else {
      returnResult(SuggestRegisterUIStatus.NO_THANKS)
    }
  }

  function hideUI() {
    // Hide the UI and remove click handlers.
    popup.style.display = 'none'
    yesButton.removeEventListener('click', onYes)
    noButton.removeEventListener('click', onNo)
  }

  this.openUI = function () {
    return isReady.then(function () {
      // Add click handlers
      yesButton.addEventListener('click', onYes)
      noButton.addEventListener('click', onNo)
      // Reset the checkbox
      neverAskCheck.checked = false
      // Show the UI.
      popup.style.display = 'block'

      // Return a promise that will be resolved when user makes choice.
      return new Promise(function (resolve) {
        returnResult = resolve
      })
    })
  }
}

/**
 * @classdesc A singleton factory class to create and provide {@link ISuggestRegisterUI} implementations.
 * @interface
 */
var ISuggestRegisterFactory = (function () {
  var mInstance = null
  return {
    /**
     * Sets the ISuggestRegisterFactory instance.
     * @param {ISuggestRegisterFactory} instance The new instance.
     * @memberof ISuggestRegisterFactory
     */
    setInstance: 
    /**
     * Returns the ISuggestRegisterFactory instance.
     * If no instance was set using setInstance method, creates and returns DefaultSuggestRegisterFactory instance
     * @returns {ISuggestRegisterFactory} Stored instance of ISuggestRegisterFactory.
     * @memberof ISuggestRegisterFactory
     */
    getInstance: 
  }
})()

/**
 * This method implementation should create and return {@link ISuggestRegisterUI} implementation.
 * @method ISuggestRegisterFactory#createSuggestRegisterUIInstance
 * @returns {ISuggestRegisterUI} The the created instance.
 */

/**
 * @classdesc Default implementation of ISuggestRegisterFactory.
 * @class
 * @implements ISuggestRegisterFactory
 */
var DefaultSuggestRegisterFactory = 
var AppSdk = (function () {
  // Inner _AppSdk encapsulates internal implementation.

  /**
   * @classdesc This class performs UAF, U2F and FIDO2 operations.
   * @class
   * @alias AppSdk
   * @description
   * Creates a new AppSdk instance. Before using the instance should be initialized by calling the [init]{@link AppSdk#init} method with appropriate protocol.
   *
   * NOTE:
   * An AppSdk instance can by initialized by providing FIDO protocol and a [callback]{@link ready_callback} function to constructor.
   * The callback function will be called when the instance is initialized for given protocol and is ready to use.
   * When instance is initialized in this manner, the class methods will not return a Promise. Instead the stateCallback parameter will be mandatory
   * and the specified function will be called also when operation has completed or failed. Methods without stateCallback parameter should be called with
   * a callback function too.
   */
  var _AppSdk = function (protocol, ready_callback) {
    // The flag indicates that this is a Cordova App (in cordova document URL starts with FILE)
    var isCordovaApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1

    /**
     * Callback URL used in mobile app to get back to the browser.
     * Should be the URL of RP page that invokes the app.
     * Used when mode specifies AppSdk.MODE_LINK.
     * @type {string}
     */
    this.srcPage = window.top.location.href

    /**
     * Registration server URL.
     * @type {string}
     */
    this.regEndpoint = null

    /**
     * Authentication server URL.
     * @type {string}
     */
    this.authEndpoint = null

    /**
     * Specifies a base URL used to launch the mobile app or to navigate to the page if the mobile app is not installed.
     * Used only when mode specifies AppSdk.MODE_LINK.
     * @type {string}
     */
    this.linkUrlBase = 'https://app.noknok.com/passport/applink.html'

    /**
     * Domain name (without protocol) for HMS App Linking obtained from Huawei
     * <a href="https://developer.huawei.com/consumer/en/service/josp/agc/index.html" target="_blank">AppGallery Connect</a>.
     *
     * For example: <pre><code>yourapp.drcn.agconnect.link</code></pre>
     * Used only when mode specifies AppSdk.MODE_LINK.
     * @type {string}
     */
    this.hmsDomain = ''

    /**
     * The package name of the Android application that should be opened with the HMS App Link.
     * @type {string}
     */
    this.hmsAndroidPackage = ''

    /**
     * Allows to enable or disable HMS App Linking. By default the HMS App Linking will be enabled on Huawei devices
     * that support HMS but don't support GMS.
     * @type {boolean}
     */
    this.enableHmsAppLink = navigator.userAgent.match('HMSCore') && !navigator.userAgent.match('GMSCore')

    /**
     * Mode - Specifies the mode used by AppSdk methods. The following modes are defined:
     * AppSdk.MODE_OOB    - The FIDO operation is performed on the other (mobile) device. Currently this mode can be used only with PROTOCOL_UAF.
     * AppSdk.MODE_LINK   - The FIDO operation is performed in a native mobile App launched from a mobile browser. This mode works only in a mobile browser and only with PROTOCOL_UAF.
     * AppSdk.MODE_NATIVE - The FIDO operation is performed natively by browser. This mode works only with PROTOCOL_FIDO2 (W3C Web Authentication) or PROTOCOL_U2F.
     * AppSdk.MODE_AUTO   - In this mode, the SDK selects the mode for the protocol as follows:
     * - AppSdk.PROTOCOL_UAF    - AppSdk.MODE_OOB
     * - AppSdk.PROTOCOL_FIDO2  - AppSdk.MODE_NATIVE
     * - AppSdk.PROTOCOL_U2F    - AppSdk.MODE_NATIVE
     * @type {string}
     */
    this.mode = AppSdk.MODE_AUTO

    var refThis = this

    var fidoProtocol
    var applinkTarget = ''

    /**
     * Reference to the promise which will be resolved when AppSdk instance is ready.
     * @private
     */
    var isReady = null

    // This field is used for backward compatibility for a code that uses AppSdkWrapper.appSdk field to set some appSdk properties.
    this.appSdk = this

    // Flag indicating whether the SDK will be used with promised or callbacks.
    var isPromiseSdk = typeof ready_callback !== 'function'

    // OOBMethodUI instance.
    var oobMethodUI = null

    
    function isFIDO2SupportedForCordova() {
      // if Android version is 7 ++ then FIDO2 is supported.
      return isCordovaApp && device.platform === 'Android' && device.version.split('.')[0] >= 7
    }

    /**
     * Sets the FIDO protocol (AppSdk.PROTOCOL_FIDO2, AppSdk.PROTOCOL_UAF or AppSdk.PROTOCOL_U2F).
     * The AppSdk supports three types of FIDO protocol: FIDO2, UAF and U2F.
     * AppSdk.PROTOCOL_FIDO2 - FIDO 2.0 and W3C Web Authentication (see https://www.w3.org/TR/webauthn/)
     * AppSdk.PROTOCOL_UAF - to perform FIDO (UAF) protocol;
     * AppSdk.PROTOCOL_U2F - to perform FIDO universal second factor (U2F) protocol;
     * @param {string} protocol FIDO protocol to use.
     */
    this.setFIDOProtocol = function (protocol) {
      fidoProtocol = validateProtocol(protocol)

      if (fidoProtocol === AppSdk.PROTOCOL_FIDO2 && !isFIDO2CompatibleBrowser() && !isFIDO2SupportedForCordova) {
        throw new AppSdkException(Outcome.NOT_INSTALLED)
      }
    }

    /**
     * Creates a new AppSdk instance for the given protocol
     * and returns a Promise which resolves when the AppSdk instance is ready.
     * @param {string} protocol - Specifies FIDO protocol: "uaf", "u2f" or "fido2".
     * @returns {Promise} A Promise which resolves when AppSdk is ready to use.
     * A Promise can be rejected with {INVALID_ARGUMENT_EXCEPTION} when incorrect arguments are passed-in,
     * or {AppSdkException} when protocol is not supported by Browser.
     */
    this.init = function (protocol) {
      // If init is called first time, create and store the ready Promise
      if (isReady === null) {
        // missing forEach on NodeList for IE11
        if (window.NodeList && !NodeList.prototype.forEach) {
          NodeList.prototype.forEach = Array.prototype.forEach
        }

        // Initialize SDK only after all dependencies are loaded.
        isReady = nnl.appSdkLoaded
          .then(function () {
            refThis.setFIDOProtocol(protocol)
          })
          .then(
      }

      return isReady
    }

    /**
     * @private
     */
    function getMessage(opType, sessionData, extras) {
      var msg = {
        op: opType,
        fidoProtocol: fidoProtocol,
        session: sessionData,
        srcPage: refThis.srcPage,
        extras: extras,
      }

      if (opType === 'AUTH' || opType === 'TRANS') {
        msg.endPoint = refThis.authEndpoint
      } else {
        msg.endPoint = refThis.regEndpoint
      }

      // OOB mode is relevant only for REG, AUTH, TRANS and CANCEL operations.
      if (opType === 'REG' || opType === 'AUTH' || opType === 'TRANS' || opType === 'CANCEL') {
        msg.oobMode = refThis.mode
        if (msg.oobMode === AppSdk.MODE_AUTO) {
          if (fidoProtocol === AppSdk.PROTOCOL_UAF) {
            msg.oobMode = AppSdk.MODE_OOB
          } else {
            msg.oobMode = AppSdk.MODE_NATIVE
          }
        }
      }

      return msg
    }

    /**
     * @private
     */
    function isUafLinkMode() {
      return fidoProtocol === AppSdk.PROTOCOL_UAF && refThis.mode === AppSdk.MODE_LINK
    }

    function openLink(callback, initHandle) {
      if (typeof initHandle !== 'object' || !initHandle) {
        throw new INVALID_ARGUMENT_EXCEPTION('initHandle')
      }

      // In some cases ajax call is being terminated because browser is in background and
      // operation fails when focus is returned to browser again.
      // So don't send FINISH operation to iframe to not trigger status polling at this point,
      // just store callback. onFocus handler will send FINISH and start polling.
      cbMap[initHandle.opID] = callback

      var appLink =
        refThis.linkUrlBase +
        (refThis.linkUrlBase.indexOf('?') === -1 ? '?' : '&') +
        'link_data=' +
        linkDataMap[initHandle.opID]
      delete linkDataMap[initHandle.opID]

      linkOperationOpID = initHandle.opID

      // There is an issue on iOS Safari when opening Applink with target="_self".
      // First time it works as expected, but then, if page is not reloaded and other navigation
      // did not happen, Safari opens the url instead of opening the app. When specifying
      // target="_blank", this issue does not happen. But in case of AppAuth, an SFSafariViewController
      // is used, which fails to open app in case of target="_blank".
      // As a new instance of SFSafariViewController is created on every operation, target="_self"
      // works fine for this case. In summary, specifying target="_self" for the first call,
      // then changing it to "_blank" for iOS Safari on next call covers all issues.
      if (applinkTarget === '') {
        // For the first time use "_self" (works for iOS Safari and SFSafariViewController)
        applinkTarget = '_self'
      } else {
        var isMobileSafari =
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          navigator.userAgent.match('Safari') &&
          !navigator.userAgent.match('CriOS') &&
          !navigator.userAgent.match('FxiOS')
        // On the next call set target to "_blank" for iOS Safari.
        applinkTarget = isMobileSafari ? '_blank' : '_self'
      }

      // If HMS AppLinking is enabled (either explicitly or by default) and configured,
      // wrap the appLink into the HMS appLink.
      if (refThis.enableHmsAppLink && refThis.hmsDomain !== '') {
        appLink = 'https://' + refThis.hmsDomain + '?deeplink=' + encodeURIComponent(appLink)
        if (refThis.hmsAndroidPackage !== '') {
          appLink += '&android_package_name=' + refThis.hmsAndroidPackage
        }
      }

      window.open(appLink, applinkTarget)
    }

    function updateOOBUI(oobState) {
      // Create a method object to use with MethodUI instance.
      var method = {
        type: AdaptiveType.FIDO_OOB,
        state: MethodState.AWAITING_USER_ACTION,
        data: {},
      }

      if (oobState.oob === 'START') {
        // Create MethodUI instance when OOB operation starts.
        oobMethodUI = MethodUIFactory.getInstance().createMethodUI(method.type)
        var opType = oobState.op === 'REG' ? OperationType.REGISTRATION : OperationType.AUTHENTICATION

        // First call getInitData to initialize the instance with operation type.
        oobMethodUI
          .getInitData([method], opType)
          .then(function () {
            // Then create method data structure with available fields and call getUpdateData.
            method.data = {
              modeResult: {
                qrCode: {
                  qrImage: oobState.qr,
                },
                rawData: oobState.rawData,
                push: {
                  status: oobState.pushStatus,
                },
              },
            }
            return oobMethodUI.getUpdateData(method)
          })
          .then(onUIResult)
      } else {
        // On subsequent calls call getUpdateData with available fields.
        method.lifetimeMillis = oobState.millis
        if (oobState.device) {
          method.data = {
            additionalInfo: {
              device: {
                info: oobState.device,
              },
            },
          }
        }

        oobMethodUI.getUpdateData(method).then(onUIResult)
      }

      function onUIResult(uiResult) {
        // If user has cancelled from the UI, cancel the operation and hide UI.
        if (uiResult.state === OperationState.OP_CANCEL) {
          refThis.cancel()
          if (typeof oobMethodUI.finish === 'function') {
            oobMethodUI.finish()
          }
          oobMethodUI = null
        }
      }
    }

    /**
     * Creates a callback for AppSdk methods based on the resolve and reject callbacks of a Promise.
     * @param {function} resolve - Callback that resolves a Promise.
     * @param {function} reject - Callback that rejects a Promise.
     * @param {function} [stateCallback] - Callback that will be called when background fetch state changes.
     * @returns {function} A callback function that will call resolve or reject
     * based on the 'outcome' filed of the response .
     * @private
     */
    function createCallback(resolve, reject, stateCallback) {
      var settled = false
      return function (response) {
        if (response.state) {
          // If a custom state callback is provided, call it, otherwise update OOB UI with received state.
          if (typeof stateCallback === 'function') {
            stateCallback(response)
          } else {
            updateOOBUI(response.state)
          }
          return
        }
        // If callback is called first time, resolve or reject the promise,
        // otherwise call stateCallback (if provided).
        if (!settled) {
          // Hide OOB UI when operation is completed.
          if (oobMethodUI) {
            if (typeof oobMethodUI.finish === 'function') {
              oobMethodUI.finish()
            }
            oobMethodUI = null
          }

          settled = true
          if (response.outcome === Outcome.SUCCESS) {
            resolve(response)
          } else {
            reject(response)
          }
        } else if (typeof stateCallback === 'function') {
          stateCallback(response)
        }
      }
    }

    function convertWebOobArgs(url) {
      if (url.indexOf('#nnl-oobdata=') === -1) {
        throw new INVALID_ARGUMENT_EXCEPTION('oobData')
      }

      var oobData = url.split('#nnl-oobdata=')[1]
      oobData = decodeURI(oobData)
      var s = oobData.split('|')

      if (s.length < 2) {
        throw new INVALID_ARGUMENT_EXCEPTION('oobData')
      }

      var opType = s[1] === 'a' ? 'AUTH' : 'REG'

      return {
        opType: opType,
        oobData,
        oobData,
      }
    }

    /**
     * Parses arguments of interface function.
     * @private
     */
    function parseArguments(opType, args) {
      // Convert JS arguments object into an array.
      args = [].slice.call(args)
      // Object that will contain parsed arguments.
      var result = {}

      // Look for a function in argument list.
      var callbackArg = null
      for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === 'function') {
          // Remove the function from argument list and store as callback.
          callbackArg = args.splice(i, 1)[0]
          break
        }
      }

      if (isPromiseSdk) {
        // If SDK is used with Promises, create a promise, which will be returned to the caller,
        // and a callback function which will resolve or reject the promise.
        result.promise = new Promise(
      } else {
        // Otherwise, use the provided callback argument as callback.
        result.callback = callbackArg
      }

      if (opType === 'WEBOOB') {
        var ret = convertWebOobArgs(args[0])
        result.extras = {
          webOob: true,
          oobData: ret.oobData,
        }

        return {
          opType: ret.opType,
          args: result,
        }
      }

      // First argument is always sessionData. Retrieve it and remove it from array.
      result.sessionData = args.shift()

      // For transaction next argument is transaction id.
      if (opType === 'TRANS') {
        // Get transaction id and remove it from array.
        result.transID = args.shift()
      }

      // For deregistration and update registration next argument is registration handle.
      if (opType === 'DEREG' || opType === 'UPDATE_REG') {
        // Get registration handle and remove it from array.
        result.regHandle = args.shift()
        // For update registration there is also registration data.
        if (opType === 'UPDATE_REG') {
          result.registrationData = args.shift()
        }
      }

      // If present, next argument should be extras.
      if (args.length > 0) {
        // Get extras and remove it from array.
        result.extras = args.shift()
      }

      // If present, next argument should be init handle.
      if (args.length > 0) {
        // Get init handle and remove it from array.
        result.initHandle = args.shift()
      }

      return {
        opType: opType,
        args: result,
      }
    }

    function validateAndCall(method, opType, args) {
      // Parse and validate arguments.
      var ret = parseArguments(opType, args)
      opType = ret.opType
      args = ret.args

      // Session data should be object.
      if (args.sessionData && typeof args.sessionData !== 'object') {
        throw new INVALID_ARGUMENT_EXCEPTION('sessionData')
      }

      // Transaction ID should be string.
      if (args.transID && typeof args.transID !== 'string') {
        throw new INVALID_ARGUMENT_EXCEPTION('transactionID')
      }

      // Registration handle should be string.
      if (args.regHandle && typeof args.regHandle !== 'string') {
        throw new INVALID_ARGUMENT_EXCEPTION('regHandle')
      }

      // Registration data should be object.
      if (args.registrationData && typeof args.registrationData !== 'object') {
        throw new INVALID_ARGUMENT_EXCEPTION('registrationData')
      }

      // Extras should be object.
      if (args.extras && typeof args.extras !== 'object') {
        throw new INVALID_ARGUMENT_EXCEPTION('extras')
      }

      // Callback is mandatory if SDK is used without Promises.
      if (!isPromiseSdk && typeof args.callback !== 'function') {
        throw new INVALID_ARGUMENT_EXCEPTION('stateCallback')
      }

      // Call the method.
      method(opType, args)

      // Return the promise created when the SDK is used with Promises
      return args.promise
    }

    /**
     * Parses and validates arguments and calls the given method.
     * @private
     */
    function checkedCall(method, opType, args) {
      if (isPromiseSdk) {
        // When the SDK is used with Promises, call the desired method after the SDK is ready.
        return isReady.then(function () {
          try {
            return validateAndCall(method, opType, args)
          } catch (e) {
            // Return validation exception in a rejected Promise.
            return Promise.reject({
              outcome: Outcome.FAILURE,
              errorDesc: e,
            })
          }
        })
      } else {
        // When Promises are not in use, call the desired method directly.
        validateAndCall(method, opType, args)
      }
    }

    /**
     * Executes initRegister, initAuthenticate and initTransact operations.
     * @private
     */
    function initOperation(opType, args) {
      validateProtocolAgainstMode(fidoProtocol, refThis.mode)

      if (!isUafLinkMode()) {
        var response = {
          outcome: Outcome.SUCCESS,
          opType: opType,
          fidoProtocol: fidoProtocol,
        }
        args.callback(response)
      } else {
        createAndSendMessage(opType, args)
      }
    }

    /**
     * Executes register, authenticate and transact operations.
     * @private
     */
    function completeOperation(opType, args) {
      validateProtocolAgainstMode(fidoProtocol, refThis.mode)

      if (isUafLinkMode()) {
        if (args.initHandle) {
          openLink(args.callback, args.initHandle)
        } else {
          // If initHandle is not present in link mode
          // Save the callback of current operation to be able to return response to the caller.
          var callback = args.callback
          // Create a new callback for 'initOperation'.
          args.callback = function (response) {
            // Use the saved callback to return result to the caller.
            if (response.outcome === Outcome.SUCCESS) {
              openLink(callback, response.initHandle)
            } else {
              callback(response)
            }
          }

          // Execute 'initOperation' by simply sending message to the iframe.
          createAndSendMessage(opType, args)
        }
      } else {
        createAndSendMessage(opType, args)
      }
    }

    /**
     * Creates a message and sends it to the iframe.
     * @private
     */
    function createAndSendMessage(opType, args) {
      var msg = getMessage(opType, args.sessionData, args.extras)

      if (args.transID) {
        msg.transID = args.transID
      }

      if (args.regHandle) {
        msg.regHandle = args.regHandle
        if (args.registrationData) {
          msg.registrationData = args.registrationData
        }
      }

      if (msg.oobMode !== AppSdk.MODE_NATIVE) {
        msg.oobPollingInterval = AppSdkConfig.oob.pollingInterval
      }

      var promise = Promise.resolve()
      if (
        msg.oobMode === AppSdk.MODE_NATIVE &&
        fidoProtocol !== AppSdk.PROTOCOL_U2F &&
        (opType === 'AUTH' || opType === 'REG' || opType === 'TRANS')
      ) {
        if (args.extras && args.extras.webOob) {
          promise = nnl.FIDOClient.init(args.extras, opType, [fidoProtocol])
        } else {
          promise = nnl.FIDOClient.init(null, opType, [fidoProtocol])
        }
      }

      promise
        .then(function (initMessage) {
          if (initMessage) {
            msg.initMessage = initMessage
          }

          storeMessage(msg)
          sendMessage(msg, args.callback)
        })
        .catch(
    }

    /**
     * Prepares a data for registration operation started in subsequent App SDK register call.
     * When data is about to expire, it will be automatically updated by initiating a new background prefetch.
     * @param {SessionData} sessionData - Session data required for registration operation.
     * If it is not present, the Server will fail registration operation.
     * @param {Extras} [extras] additional data to be passed to Server.
     * @param {stateCallback} [stateCallback] Callback that will be called when background fetch state changes (e.g. subsequent prefetch is failed).
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing initHandle in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure (see {@link Result} object description for initHandle details).
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.initRegister = function () {
      return checkedCall(initOperation, 'REG', arguments)
    }

    /**
     * Initiates FIDO authenticator registration process with the user's account.
     * @param {SessionData} sessionData - Session data containing user name trying to perform registration operation.
     * If it is not present, the Server will fail registration operation.
     * @param {Extras} [extras] additional data to be passed to Server.
     * @param {object} [initHandle] An opaque handle returned in response.initHandle as a result of initRegister call.
     * @param {stateCallback} [stateCallback] Callback that will be periodically called with current OOB state.
     * If not provided, built-in OOB UI will be used.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.register = function () {
      return checkedCall(completeRegOperation, 'REG', arguments)
    }

    /**
     * Prepares a data for authentication operation started in subsequent App SDK authenticate call.
     * When data is about to expire, it will be automatically updated by initiating a new background prefetch.
     * @param {SessionData} sessionData - Session data for the operation.
     * This is an optional parameter, used for step-up authentication.
     * @param {Extras} [extras] additional data to be passed to Server.
     * @param {stateCallback} [stateCallback] Callback that will be called when background fetch state changes (e.g. subsequent prefetch is failed).
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing initHandle in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure (see {@link Result} object description for initHandle details).
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.initAuthenticate = function () {
      return checkedCall(initOperation, 'AUTH', arguments)
    }

    /**
     * Initiate FIDO authentication using a previously registered FIDO authenticator.
     * @param {SessionData} sessionData Session data containing user name trying to perform authentication.
     * This is optional parameter, used for step-up authentication.
     * @param {Extras} [extras] additional data to be passed to Server.
     * @param {object} [initHandle] An opaque handle returned in response.initHandle as a result of initAuthenticate call.
     * @param {stateCallback} [stateCallback] Callback that will be periodically called with current OOB state.
     * If not provided, built-in OOB UI will be used.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION}If incorrect arguments are passed-in.
     */
    this.authenticate = function () {
      return checkedCall(completeOperation, 'AUTH', arguments)
    }

    /**
     * Prepares a data for transaction operation started in subsequent App SDK transact call.
     * When data is about to expire, it will be automatically updated by initiating a new background prefetch.
     * @param {SessionData} sessionData - Session data for the operation.
     * @param {string} transactionID Unique ID that identifies the transaction.
     * @param {Extras} [extras] additional data to be passed to Server.
     * For plain text transaction plug-in implementation, pass transaction text through extras.options.transactionText.
     * @param {stateCallback} [stateCallback] Callback that will be called when background fetch state changes (e.g. subsequent prefetch is failed).
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing initHandle in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure (see {@link Result} object description for initHandle details).
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.initTransact = function () {
      return checkedCall(initOperation, 'TRANS', arguments)
    }

    /**
     * Initiates FIDO transaction confirmation operation using a previously registered FIDO authenticator.
     * @param {SessionData} sessionData Session data containing user name trying to perform transaction.
     * @param {string} transactionID Unique ID that identifies the transaction.
     * @param {Extras} [extras] additional data to be passed to Server.
     * For plain text transaction plug-in implementation, pass transaction text through extras.options.transactionText.
     * @param {object} [initHandle] An opaque handle returned in response.initHandle as a result of initTransact call.
     * @param {stateCallback} [stateCallback] Callback that will be periodically called with current OOB state.
     * If not provided, built-in OOB UI will be used.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.transact = function () {
      return checkedCall(completeOperation, 'TRANS', arguments)
    }

    /**
     * Returns FIDO authenticators registered previously for a user.
     * @param {SessionData} sessionData Session data containing user name.
     * @param {Extras} [extras] additional data to be passed to Server.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.getRegistrations = function () {
      return checkedCall(createAndSendMessage, 'LISTREG', arguments)
    }

    /* Added only for backward compatibility (use getRegistrations instead). */
    this.get_registrations = this.getRegistrations

    /**
     * Delete registered authenticator(s) for a given user from the Server.
     * @param {SessionData} sessionData Session data containing user name.
     * @param {string} regHandle Uniquely identifies a registration for the user.
     * This is provided in the response of the list operation.
     * @param {Extras} [extras] additional data to be passed to Server.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.deregister = function () {
      return checkedCall(createAndSendMessage, 'DEREG', arguments)
    }

    /**
     * Log outs an user.
     * @param {SessionData} sessionData Session data containing user name.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.logout = function () {
      return checkedCall(createAndSendMessage, 'LOGOUT', arguments)
    }

    /**
     * Cancel already started registration/authentication operation
     * @param {object} [initHandle] An opaque handle returned in response.initHandle as a result of [initRegister]{@link AppSdk#initRegister},
     * [initAuthenticate]{@link AppSdk#initAuthenticate} or [initTransact]{@link AppSdk#initTransact} call.
     * @returns {Promise} A promise that will resolve immediately after operation is canceled.
     */
    this.cancel = function (initHandle) {
      var msg = getMessage('CANCEL')
      if (initHandle) {
        msg.opID = initHandle.opID // get operation ID from init handle.
      } else {
        msg.opID = opID // send last operation ID to cancel that operation.
      }

      sendMessage(msg)

      return isReady
    }

    /**
     * Returns Device ID associated with the browser.
     * @returns {Promise} A promise that will be resolved with an object containing deviceID.
     */
    this.getDeviceId = function () {
      // Wait for the utility script to load.
      var promise = nnl.appSdkLoaded.then(AppSdkInfo.getDeviceId).then(

      // If callback is not provided, return the promise with result.
      if (arguments.length === 0 || typeof arguments[0] !== 'function') {
        return promise
      }

      // Otherwise call the provided callback after the promise.
      promise.then(arguments[0])
    }

    /**
     * Fetch user information, such as the active and deleted FIDO authenticators for the specified user.
     * @param {SessionData} sessionData Session data containing user name.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.fetchUserData = function () {
      return checkedCall(createAndSendMessage, 'FETCH_USER_DATA', arguments)
    }

    /**
     * Delete sensitive user information (Personally Identifiable Information)
     * @param {SessionData} sessionData Session data containing user name.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.purgeUserData = function () {
      return checkedCall(createAndSendMessage, 'PURGE_USER_DATA', arguments)
    }

    /**
     * Suggests user to register platform authenticator if it is available and
     * the user has not chose to not be reminded again.
     * @param {SessionData} sessionData Session data containing user name.
     * @param {Extras} [extras] additional data to be passed to Server.
     * Optionally pass a unique identifier through extras.suggestId field which will be used to get and set the state of "never ask" flag.
     * @returns {Promise} A promise that will be resolved with {@link Result} object containing operation result in case of success
     * and rejected with {@link Result} object containing outcome code in case of failure.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If incorrect arguments are passed-in.
     */
    this.suggestRegister = function () {
      return checkedCall(suggestRegisterHandler, 'REG', arguments)
    }

    /**
     * Resets the state of "never ask" flag.
     * @param {string} [suggestId] Unique identifier used to reset the state of "never ask" flag.
     */
    this.resetSuggestRegister = 
    /**
     *
     * @param {SessionData} sessionData Session data containing user name.
     * @param {string} regHandle Uniquely identifies a registration for the user.
     * This is provided in the response of the list operation.
     * @param {object} regData Registration data to update.
     * The following keys are supported:
     *
     * Key               | Description
     * ----------------- | --------------------------
     * authenticatorName | New name for authenticator
     * uvi               | New uvi value
     * uviStatus         | New uvi status
     * uvs               | New uvs value
     *
     * @param {Extras} [extras] additional data to be passed to Server.
     */
    this.updateRegistration = 
    // Returns an object containing methods to get, set and reset the "never ask" flag.
    function neverAskStorage(suggestId) {
      // Global key name.
      var neverAskKey = 'nnl.neveraskforreg'
      // Append identifier if it is provided.
      if (suggestId && typeof suggestId === 'string') {
        neverAskKey += '.' + suggestId
      }

      return {
        set: 
        isSet: 
        reset: 
      }
    }

    function suggestRegisterHandler(opType, args) {
      // Get the never ask flag storage.
      var neverAsk = neverAskStorage(args.extras && args.extras.suggestId)

      isPlatformAuthenticatorAvailable().then(function (available) {
        if (neverAsk.isSet() || !available) {
          // If never ask is set or authenticator is not available return error.
          args.callback({
            outcome: Outcome.CANCELED,
            suggestionStatus: SuggestionStatus.NOT_ASKED,
          })
        } else {
          // Otherwise suggest user to register.
          var suggestRegUI = ISuggestRegisterFactory.getInstance().createSuggestRegisterUIInstance()
          suggestRegUI.openUI().then(function (uiStatus) {
            // If the user accepted the suggestion, proceed with registration.
            if (uiStatus === SuggestRegisterUIStatus.SURE) {
              completeRegOperation(opType, args)
            } else {
              // If user declined the suggestion and checked "never ask", set the flag.
              if (uiStatus === SuggestRegisterUIStatus.NEVER_ASK) {
                neverAsk.set()
              }

              // Return error indicating that the user has declined the suggestion.
              args.callback({
                outcome: Outcome.CANCELED,
                suggestionStatus: SuggestionStatus.ASKED,
              })
            }
          })
        }
      })
    }

    function completeRegOperation(opType, args) {
      // Wrap the callback with new one that will set the "never ask" flag after successful registration.
      var callback = args.callback
      args.callback = function (result) {
        if (result.outcome === Outcome.SUCCESS && !result.state) {
          neverAskStorage(args.extras && args.extras.suggestId).set()
        }
        callback(result)
      }
      completeOperation(opType, args)
    }

    function isPlatformAuthenticatorAvailable() {
      return new Promise(function (resolve) {
        if (isCordovaApp) {
          resolve(true)
        } else if (
          !window.PublicKeyCredential ||
          typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable !== 'function'
        ) {
          // API not available just return false.
          resolve(false)
        } else {
          PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
            .then(resolve)
            .catch(
        }
      })
    }

    /**
     * Allows to override display strings of built-in OOB UI.
     *
     * Available keys are:
     *
     * Key                         | Description
     * --------------------------- | -----------
     * registration_progress_msg   | Indicates ongoing registration operation.
     * authentication_progress_msg | Indicates ongoing authentication operation.
     * push_notification_msg       | Indicates that a push notification was sent. Will not be visible when QR code is displayed.
     * oob_expire_msg              | Indicates the remaining time of current operation. __*{minutes}*__ and __*{seconds}*__ placeholders will be replaced with actual values.
     * additional_info             | Displays additional information about current operation. Visible only when QR code is displayed.
     * scan_qr_button_text         | Text of the QR code fallback button.
     *
     * @param {String} key - The display string key.
     * @param {string} value - New value of the display string.
     */
    this.setUIDisplayString = 
    /**
     * Validates the protocol against the allowed mode.	For FIDO2 and U2F only allowed mode is MODE_NATIVE,
     * For UAF only allowed modes are MODE_OOB and MODE_LINK.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If protocol and mode combination is not valid.
     * @private
     */
    function validateProtocolAgainstMode(protocol, mode) {
      if (
        (protocol !== AppSdk.PROTOCOL_UAF && (mode === AppSdk.MODE_OOB || mode === AppSdk.MODE_LINK)) ||
        (protocol === AppSdk.PROTOCOL_UAF && mode === AppSdk.MODE_NATIVE && !isCordovaApp)
      ) {
        var logMsg = 'unexpected/unsupported mode ( ' + refThis.mode + ') is used for the protocol ' + protocol
        console.log(logMsg)
        throw new INVALID_ARGUMENT_EXCEPTION(logMsg)
      }
    }

    /**
     * Validate FIDO protocol - protocol should be AppSdk.PROTOCOL_UAF, AppSdk.PROTOCOL_U2F or AppSdk.PROTOCOL_FIDO2
     * @param {string} protocol FIDO protocol to use.
     * @throws {INVALID_ARGUMENT_EXCEPTION} If protocol not valid.
     * @private
     */
    function validateProtocol(protocol) {
      if (typeof protocol !== 'string') {
        throw new INVALID_ARGUMENT_EXCEPTION('protocol')
      }

      protocol = protocol.toLowerCase()
      if (protocol !== AppSdk.PROTOCOL_FIDO2 && protocol !== AppSdk.PROTOCOL_U2F && protocol !== AppSdk.PROTOCOL_UAF) {
        throw new INVALID_ARGUMENT_EXCEPTION('protocol')
      }

      return protocol
    }

    /**
     * Invalid argument exception
     * @param {string} argName The invalid argument's name
     */
    function INVALID_ARGUMENT_EXCEPTION(argName) {
      this.name = argName
      this.toString =     }

    function storeMessage(msg) {
      //the message will be stored only on iOS and when oobMode is AppSdk.MODE_LINK
      if (/iP(hone|ad)/.test(navigator.platform) && msg.oobMode === AppSdk.MODE_LINK)
        localStorage.setItem('nnl.message', JSON.stringify(msg))
    }

    this.resume = function (callback) {
      var messageString = localStorage.getItem('nnl.message')
      //the message will be stored only on iOS and when oobMode is AppSdk.MODE_LINK
      if (messageString) {
        //clear the storage
        localStorage.removeItem('nnl.message')

        //now create msg object from string and post it to iframe
        var msg = JSON.parse(messageString)
        resumecb = callback

        msg.op = 'RESUME'

        sendMessage(msg, callback)
      }
    }

    /**
	 The method processes the url for App-less QR OOB Support 
	 */
    this.processOob = function () {
      this.setFIDOProtocol(AppSdk.PROTOCOL_FIDO2)
      history.pushState('', document.title, refThis.srcPage)
      return checkedCall(createAndSendMessage, 'WEBOOB', arguments)
    }

    // If protocol is provided, then non Promised version of AppSdk is being created.
    if (typeof protocol === 'string') {
      // Validate and set protocol before calling the async init method
      // to throw exceptions from constructor if validation fails.
      this.setFIDOProtocol(protocol)

      // Initialize the instance using the init method.
      this.init(protocol).then(
    }
  } // Inner _AppSdk

  var IFRAME_ID = 'nnl_iframe'
  var resumecb = null
  var readyMap = {}
  var cbMap = {}
  var linkDataMap = {}
  var opID = 0

  // Operation ID of the started Applink operation.
  var linkOperationOpID = null

  /**
   * @private
   */
  var sendMessage = function (msg, cb) {
    if (cb !== undefined) {
      opID++
      cbMap[opID] = cb
      msg.opID = opID
    }

    msg.appName = AppSdkInfo.getAppName()
    msg.appDisplayName = AppSdkInfo.getAppDisplayName()
    msg.NNL_SDK_VERSION = AppSdkInfo.getSdkVersion()

    var target = document.getElementById(IFRAME_ID).contentWindow
    var targetOrigin = NNLUtils.getOrigin(msg.endPoint)
    //in case of locally hosted app the target origin should be the target document itself
    if (document.location.protocol === 'file:') {
      targetOrigin = 'file://'
    }

    AppSdkInfo.getDeviceId().then(
  }

  /**
   * Processes messages sent from iframe to main window.
   * @param {object} event - Event object containing data from iframe.
   * @private
   */
  var messageEventHandler = function (event) {
    var nnlIframe = document.getElementById(IFRAME_ID)

    if (
      !(
        event.origin === NNLUtils.getOrigin(nnlIframe.src) &&
        event.data &&
        event.data.iframe_id &&
        IFRAME_ID === event.data.iframe_id
      )
    ) {
      return
    }

    if (
      !(
        AppSdk.PROTOCOL_UAF === event.data.fidoProtocol ||
        AppSdk.PROTOCOL_U2F === event.data.fidoProtocol ||
        AppSdk.PROTOCOL_FIDO2 === event.data.fidoProtocol
      )
    ) {
      return
    }

    console.log('AppSdk.messageEventHandler: ', event.data)

    if (event.data.type === 'nnl.iframeUxFReady') {
      var readyCallback = readyMap[event.data.opID].readyCallback

      delete readyMap[event.data.opID]

      if (typeof readyCallback === 'function') {
        readyCallback()
      }
    } else if (event.data.type === 'nnl.fidoclient') {
      var nnlCallback = function (outcome, response, extras) {
        var message = {
          outcome: outcome,
          type: event.data.type,
          response: response,
          opID: event.data.opID,
          fidoProtocol: event.data.fidoProtocol,
          serverMessage: event.data.serverMessage,
          extras: extras,
        }
        nnlIframe.contentWindow.postMessage(message, NNLUtils.getOrigin(nnlIframe.src))
      }
      if (event.data.fidoProtocol === AppSdk.PROTOCOL_U2F) {
        NNLUtils.loadScript('u2f-client.js')
          .then(
          .catch(
      } else {
        nnl.FIDOClient.process(null, event.data.op, event.data.fidoProtocol, event.data.serverMessage)
          .then(function (response) {
            response = response || {}
            var extras = event.data.extras || {}

            if (event.data.op === 'REG' && !extras.registrationName) {
              if (!response.isPlatformAuthenticator) {
                extras.registrationName = 'Security Key'
              } else {
                var deviceName = (response.device && response.device.info) || 'UnknownDevice'
                var modality = response.modality || 'authenticator'
                extras.registrationName = deviceName + ' ' + modality
              }
            }
            nnlCallback(Outcome.SUCCESS, response.message, extras)
          })
          .catch(
      }
    } else if (event.data.type === 'nnl.linkData') {
      linkDataMap[event.data.opID] = event.data.linkData
    } else if (resumecb && typeof resumecb === 'function') {
      resumecb(event.data)
      resumecb = null
    } else if (event.data.opID && typeof cbMap[event.data.opID] === 'function') {
      // If keepCallback flag is present, this is an init operation and
      // callback should not be removed for corresponding finish operation.
      var keepCallback = event.data.keepCallback
      delete event.data.keepCallback

      // In case of init operation add the handle to the response.
      if (keepCallback) {
        event.data.initHandle = { opID: event.data.opID }
      }

      cbMap[event.data.opID](event.data)
      if (!keepCallback) {
        delete cbMap[event.data.opID]
      }
    }
  }

  /**
   * @private
   */
  var sendInitFrame = function (opID) {
    var msg = {
      op: 'INIT',
      opID: opID,
      fidoProtocol: readyMap[opID].fidoProtocol,
    }
    sendMessage(msg)
  }

  /**
   * @private
   */
  var onhashchange = function () {
    //Check if the hash was changed as a result of coming back from the App
    //(the hash value is hard-coded sessionId string, used when constructed callback url for applink).
    //If so, then remove the hash from location.
    if (location.hash && (location.hash === '#1234' || location.hash.indexOf('%231234') >= 0)) {
      history.pushState('', document.title, location.href.split('#')[0])
    }
  }

  /**
   * Checks applink operation status after browser has gained focus.
   * @private
   */
  var finishLinkOperaion = function () {
    if (linkOperationOpID) {
      var msg = {
        op: 'FINISH',
        opID: linkOperationOpID, // send current operation ID to cancel that operation.
        oobMode: AppSdk.MODE_LINK,
        fidoProtocol: AppSdk.PROTOCOL_UAF, // currently AppSdk.MODE_LINK operation is used only with AppSdk.PROTOCOL_UAF.
      }

      linkOperationOpID = null
      sendMessage(msg)
      console.log('Window gained focus, sending FINISH to start polling.')
    }
  }

  /**
   * @private
   */
  var initInstance = function (fidoProtocol, ready_callback) {
    // During initialization App SDK instance sends INIT event to iframe.
    // The iframe is supposed to reply back with nnl.iframeUxFReady event.
    // Then App SDK will notify the caller that it is ready to be used.
    // However if iframe is not yet ready to receive INIT (no event listener is assigned yet),
    // the INIT event will be lost and no chance to reply back and notify the caller.
    // Thus App SDK keeps fidoProtocol and readyCallback in the readyMap to call sendInitFrame
    // also later when iframe is ready as indicated by nnl.iframeReady event.
    opID++
    readyMap[opID] = { fidoProtocol: fidoProtocol, readyCallback: ready_callback }
    sendInitFrame(opID)
  }

  window.addEventListener('focus', finishLinkOperaion, false)
  // Huawei browser does not fire blur/focus events when an app is opened with applink.
  // Listen for visibilitychange event to handle applink on Huawei devices too.
  document.addEventListener(
    'visibilitychange',
    
    false
  )

  window.addEventListener('hashchange', onhashchange, false)
  window.addEventListener('message', messageEventHandler, false)

  // Return inner _AppSdk
  return _AppSdk
})()

/**
 * Constant for UAF protocol.
 * @constant
 * @type {string}
 */
AppSdk.PROTOCOL_UAF = 'uaf'

/**
 * Constant for U2F protocol.
 * @constant
 * @type {string}
 */
AppSdk.PROTOCOL_U2F = 'u2f'

/**
 * Constant for FIDO2 protocol.
 * @constant
 * @type {string}
 */
AppSdk.PROTOCOL_FIDO2 = 'fido2'

/**
 * Constant specifies the "native" mode.
 * @constant
 * @type {string}
 */
AppSdk.MODE_NATIVE = 'native'

/**
 * Constant specifies the "auto" mode.
 * @constant
 * @type {string}
 */
AppSdk.MODE_AUTO = 'auto'

/**
 * Constant specifies the "OOB" mode.
 * @constant
 * @type {string}
 */
AppSdk.MODE_OOB = 'oob'

/**
 * Constant specifies the "link" mode.
 * @constant
 * @type {string}
 */
AppSdk.MODE_LINK = 'link'

/**
 * Key name for an "options" object in "extras" parameter.
 * The "options" object is passed to MFAS as "optionsData" in the payload.
 * @constant
 * @type {string}
 */
AppSdk.EXTRAS_KEY_OPTIONS = 'options'

/**
 * Key name for the "transactionText" property in "options" object.
 * @constant
 * @type {string}
 */
AppSdk.EXTRAS_KEY_OPTIONS_TRANSACTION_TEXT = 'transactionText'

/**
 * Key name for the "policyType" property in "options" object.
 * @constant
 * @type {string}
 */
AppSdk.EXTRAS_KEY_OPTIONS_POLICY_TYPE = 'policyType'

/**
 * Key name for the "correlationId" property in "extras" parameter.
 * @constant
 * @type {string}
 */
AppSdk.EXTRAS_KEY_CORRELATION_ID = 'correlationId'

/**
 * Key name for the "statusHandle" property in "extras" parameter.
 * @constant
 * @type {string}
 */
AppSdk.EXTRAS_KEY_STATUS_HANDLE = 'statusHandle'

/**
 * Key name for the "registrationName" property in "extras" parameter.
 * @constant
 * @type {string}
 */
AppSdk.EXTRA_KEY_REGISTRATION_NAME = 'registrationName'

/**
 * Key name for the "userDisplayName" property in "extras" parameter.
 * @constant
 * @type {string}
 */
AppSdk.EXTRA_KEY_USER_DISPLAY_NAME = 'userDisplayName'

/**
 * This callback function is provided by RP Webapp to be called when the AppSdk is ready to be used.
 * No AppSdk method should be called until AppSdk is ready.
 * @callback ready_callback
 */

/**
 * This callback function is provided by RP Webapp to be called when the operation state changes.
 * @callback stateCallback
 * @param {Result} result object which includes state property.
 */

/**
 * Result object provided in resolved or rejected JS Promise.
 *
 * @type {object}
 * @name Result
 * @property {string} outcome Result code returned after processing a FIDO request (see {@link Outcome} object for possible values).
 * @property {string} opType FIDO operation: "REG", "AUTH", "TRANS", "LISTREG", "DEREG", "FETCH_USER_DATA" or "PURGE_USER_DATA".
 * @property {string} fidoProtocol type: "uaf", "u2f" or "fido2".
 * @property {object} sessionData Session data returned by the Server.
 * @property {string} sessionData.sessionKey Session information created during user authentication.
 * @property {string} userName Username of the the authenticated user.
 * @property {string} push.pushHandle Push notification handle returned from the authentication server.
 * @property {string} statusCode Status code returned from the authentication server.
 * @property {object} initHandle An opaque handle returned on successful call of initRegister, initAuthenticate and initTransact.
 * The handle should be passed into subsequent register, authenticate and transact calls correspondingly.
 * @property {object} state OOB operation state data.
 * @property {string} state.oob OOB operation state: "START", "STATUS".
 * @property {string} state.op OOB operation name: "REG", "AUTH", "TRANS".
 * @property {boolean} state.push Indicates whether a push message was sent to second device or not. Will be present only when state.oob is "START".
 * @property {number} state.pushStatus Status code of the push operation from the server.
 * @property {string} state.qr Base64 PNG image data of QR code. Will be present only when state.oob is "START".
 * @property {number} state.millis OOB operation expiration time in milliseconds. Will be present only when state.oob is "STATUS".
 * @property {string} state.device Second device information when available. Will be present only when state.oob is "STATUS".
 * @property {object} additionalErrorInfo Additional error information from Server.
 * @property {object} additionalInfo Additional information from Server.
 * @property {Array<object>} registrations A list of user's active registered FIDO authenticators in case of getRegistrations and
 * a list of user's all registered FIDO authenticators in case of fetchUserData.
 * @property {Array<object>} methods A list of user's registered non-FIDO authentication methods.
 * @property {object} stats Deletion counts for the user's information.
 * @property {SuggestionStatus} suggestionStatus Presents when {AppSdk.suggestRegister} fails, indicates whether user was asked to register or not.
 */
