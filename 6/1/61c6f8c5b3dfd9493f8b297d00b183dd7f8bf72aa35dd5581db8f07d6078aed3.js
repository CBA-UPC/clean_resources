//
// ClientJS.  An easy to use, simple, and flexible client information library written in JavaScript.
//
//      Version: 0.1.11
//
//      Original Author: Jack Spirou
//      Original Data: 5 Nov 2013

// ClientJS.  Return a JavaScript object containing information collected about a client.
//            Return browser/device fingerprint as a 32 bit integer hash ID.

// BUILT UPON:
//      - https://github.com/Valve/fingerprintjs
//      - http://darkwavetech.com/device_fingerprint.html
//      - detectmobilebrowsers.com JavaScript Mobile Detection Script

// Dependencies Include:
//      - ua-parser.js
//      - fontdetect.js
//      - swfobject.js
//      - murmurhash3.js

// BROWSER FINGERPRINT DATA POINTS
//      - userAgent
//      - screenPrint
//          - colordepth
//          - currentResolution
//          - availableResolution
//          - deviceXDPI
//          - deviceYDPI
//      - plugin list
//      - font list
//      - localStorage
//      - sessionStorage
//      - timezone
//      - language
//      - systemLanguage
//      - cookies
//      - canvasPrint

// METHOD Naming CONVENTION
//      is[MethodName]  = return boolean
//      get[MethodName] = return int|string|object

// METHODS
//
//      var client = new ClientJS();
//
//      client.getSoftwareVersion();
//      client.getBrowserData();
//      client.getFingerPrint();
//      client.getCustomFingerprint(...);
//
//      client.getUserAgent();
//      client.getUserAgentLowerCase();
//
//      client.getBrowser();
//      client.getBrowserVersion();
//      client.getBrowserMajorVersion();
//      client.isIE();
//      client.isChrome();
//      client.isFirefox();
//      client.isSafari();
//      client.isMobileSafari();
//      client.isOpera();
//
//      client.getEngine();
//      client.getEngineVersion();
//
//      client.getOS();
//      client.getOSVersion();
//      client.isWindows();
//      client.isMac();
//      client.isLinux();
//      client.isUbuntu();
//      client.isSolaris();
//
//      client.getDevice();
//      client.getDeviceType();
//      client.getDeviceVendor();
//
//      client.getCPU();
//
//      client.isMobile();
//      client.isMobileMajor();
//      client.isMobileAndroid();
//      client.isMobileOpera();
//      client.isMobileWindows();
//      client.isMobileBlackBerry();
//
//      client.isMobileIOS();
//      client.isIphone();
//      client.isIpad();
//      client.isIpod();
//
//      client.getScreenPrint();
//      client.getColorDepth();
//      client.getCurrentResolution();
//      client.getAvailableResolution();
//      client.getDeviceXDPI();
//      client.getDeviceYDPI();
//
//      client.getPlugins();
//      client.isJava();
//      client.getJavaVersion();
//      client.isFlash();
//      client.getFlashVersion();
//      client.isSilverlight();
//      client.getSilverlightVersion();
//
//      client.getMimeTypes();
//      client.isMimeTypes();
//
//      client.isFont();
//      client.getFonts();
//
//      client.isLocalStorage();
//      client.isSessionStorage();
//      client.isCookie();
//
//      client.getTimeZone();
//
//      client.getLanguage();
//      client.getSystemLanguage();
//
//      client.isCanvas();
//      client.getCanvasPrint();

// Anonymous auto JavaScript function execution.
(function(scope) {
  'use strict';

  var browserData; // Global user agent browser object.
  var fontDetective; // Global font detective object.

  // ClientJS constructor which sets the browserData object and returs the client object.
  var ClientJS = function() {
    var parser = new(window.UAParser || exports.UAParser);
    browserData = parser.getResult();
    fontDetective = new Detector();
    return this;
  };

  // ClientJS prototype which contains all methods.
  ClientJS.prototype = {

    //
    // MAIN METHODS
    //

    // Get Software Version.  Return a string containing this software version number.
    getSoftwareVersion: 

    // Get Browser Data.  Return an object containing browser user agent.
    getBrowserData: 

    // Get Fingerprint.  Return a 32-bit integer representing the browsers fingerprint.
    getFingerprint: function() {
      var bar = '|';

      var userAgent = browserData.ua;
      var screenPrint = this.getScreenPrint();
      var pluginList = this.getPlugins();
      var fontList = this.getFonts();
      var localStorage = this.isLocalStorage();
      var sessionStorage = this.isSessionStorage();
      var timeZone = this.getTimeZone();
      var language = this.getLanguage();
      var systemLanguage = this.getSystemLanguage();
      var cookies = this.isCookie();
      var canvasPrint = this.getCanvasPrint();

      var key = userAgent + bar + screenPrint + bar + pluginList + bar + fontList + bar + localStorage + bar + sessionStorage + bar + timeZone + bar + language + bar + systemLanguage + bar + cookies + bar + canvasPrint;
      var seed = 256;

      return murmurhash3_32_gc(key, seed);
    },

    // Get Custom Fingerprint.  Take a string of datapoints and eturn a 32-bit integer representing the browsers fingerprint.
    getCustomFingerprint: function() {
      var bar = '|';
      var key = "";
      for (var i = 0; i < arguments.length; i++) {
        key += arguments[i] + bar;
      }
      return murmurhash3_32_gc(key, 256);
    },

    //
    // USER AGENT METHODS
    //

    // Get User Agent.  Return a string containing unparsed user agent.
    getUserAgent: function() {
      return browserData.ua;
    },

    // Get User Agent Lower Case.  Return a lowercase string containing the user agent.
    getUserAgentLowerCase: 

    //
    // BROWSER METHODS
    //

    // Get Browser.  Return a string containing the browser name.
    getBrowser: function() {
      return browserData.browser.name;
    },

    // Get Browser Version.  Return a string containing the browser version.
    getBrowserVersion: function() {
      return browserData.browser.version;
    },

    // Get Browser Major Version.  Return a string containing the major browser version.
    getBrowserMajorVersion: function() {
      return browserData.browser.major;
    },

    // Is IE.  Check if the browser is IE.
    isIE: function() {
      return (/IE/i.test(browserData.browser.name));
    },

    // Is Chrome.  Check if the browser is Chrome.
    isChrome: function() {
      return (/Chrome/i.test(browserData.browser.name));
    },

    // Is Firefox.  Check if the browser is Firefox.
    isFirefox: function() {
      return (/Firefox/i.test(browserData.browser.name));
    },

    // Is Safari.  Check if the browser is Safari.
    isSafari: function() {
      return (/Safari/i.test(browserData.browser.name));
    },

    // Is Mobile Safari.  Check if the browser is Safari.
    isMobileSafari: function() {
      return (/Mobile\sSafari/i.test(browserData.browser.name));
    },

    // Is Opera.  Check if the browser is Opera.
    isOpera: function() {
      return (/Opera/i.test(browserData.browser.name));
    },

    //
    // ENGINE METHODS
    //

    // Get Engine.  Return a string containing the browser engine.
    getEngine: function() {
      return browserData.engine.name;
    },

    // Get Engine Version.  Return a string containing the browser engine version.
    getEngineVersion: function() {
      return browserData.engine.version;
    },

    //
    // OS METHODS
    //

    // Get OS.  Return a string containing the OS.
    getOS: function() {
      return browserData.os.name;
    },

    // Get OS Version.  Return a string containing the OS Version.
    getOSVersion: function() {
      return browserData.os.version;
    },

    // Is Windows.  Check if the OS is Windows.
    isWindows: function() {
      return (/Windows/i.test(browserData.os.name));
    },

    // Is Mac.  Check if the OS is Mac.
    isMac: function() {
      return (/Mac/i.test(browserData.os.name));
    },

    // Is Linux.  Check if the OS is Linux.
    isLinux: function() {
      return (/Linux/i.test(browserData.os.name));
    },

    // Is Ubuntu.  Check if the OS is Ubuntu.
    isUbuntu: function() {
      return (/Ubuntu/i.test(browserData.os.name));
    },

    // Is Solaris.  Check if the OS is Solaris.
    isSolaris: 

    //
    // DEVICE METHODS
    //

    // Get Device.  Return a string containing the device.
    getDevice: function() {
      return browserData.device.model;
    },

    // Get Device Type.  Return a string containing the device type.
    getDeviceType: function() {
      return browserData.device.type;
    },

    // Get Device Vendor.  Return a string containing the device vendor.
    getDeviceVendor: function() {
      return browserData.device.vendor;
    },

    //
    // CPU METHODS
    //

    // Get CPU.  Return a string containing the CPU architecture.
    getCPU: 

    //
    // MOBILE METHODS
    //

    // Is Mobile.  Check if the browser is on a mobile device.
    isMobile: 

    // Is Mobile Major.  Check if the browser is on a major mobile device.
    isMobileMajor: 

    // Is Mobile.  Check if the browser is on an android mobile device.
    isMobileAndroid: function() {
      if (browserData.ua.match(/Android/i)) {
        return true;
      }
      return false;
    },

    // Is Mobile Opera.  Check if the browser is on an opera mobile device.
    isMobileOpera: function() {
      if (browserData.ua.match(/Opera Mini/i)) {
        return true;
      }
      return false;
    },

    // Is Mobile Windows.  Check if the browser is on a windows mobile device.
    isMobileWindows: function() {
      if (browserData.ua.match(/IEMobile/i)) {
        return true;
      }
      return false;
    },

    // Is Mobile BlackBerry.  Check if the browser is on a blackberry mobile device.
    isMobileBlackBerry: function() {
      if (browserData.ua.match(/BlackBerry/i)) {
        return true;
      }
      return false;
    },

    //
    // MOBILE APPLE METHODS
    //

    // Is Mobile iOS.  Check if the browser is on an Apple iOS device.
    isMobileIOS: function() {
      if (browserData.ua.match(/iPhone|iPad|iPod/i)) {
        return true;
      }
      return false;
    },

    // Is Iphone.  Check if the browser is on an Apple iPhone.
    isIphone: function() {
      if (browserData.ua.match(/iPhone/i)) {
        return true;
      }
      return false;
    },

    // Is Ipad.  Check if the browser is on an Apple iPad.
    isIpad: function() {
      if (browserData.ua.match(/iPad/i)) {
        return true;
      }
      return false;
    },

    // Is Ipod.  Check if the browser is on an Apple iPod.
    isIpod: function() {
      if (browserData.ua.match(/iPod/i)) {
        return true;
      }
      return false;
    },

    //
    // SCREEN METHODS
    //

    // Get Screen Print.  Return a string containing screen information.
    getScreenPrint: 

    // Get Color Depth.  Return a string containing the color depth.
    getColorDepth: function() {
      return screen.colorDepth;
    },

    // Get Current Resolution.  Return a string containing the current resolution.
    getCurrentResolution: function() {
      return screen.width + "x" + screen.height;
    },

    // Get Available Resolution.  Return a string containing the available resolution.
    getAvailableResolution: 

    // Get Device XPDI.  Return a string containing the device XPDI.
    getDeviceXDPI: function() {
      return screen.deviceXDPI;
    },

    // Get Device YDPI.  Return a string containing the device YDPI.
    getDeviceYDPI: function() {
      return screen.deviceYDPI;
    },

    //
    // PLUGIN METHODS
    //

    // Get Plugins.  Return a string containing a list of installed plugins.
    getPlugins: function() {
      var pluginsList = "";

      for (var i = 0; i < navigator.plugins.length; i++) {
        if (i == navigator.plugins.length - 1) {
          pluginsList += navigator.plugins[i].name;
        } else {
          pluginsList += navigator.plugins[i].name + ", ";
        }
      }
      return pluginsList;
    },

    // Is Java.  Check if Java is installed.
    isJava: 

    // Get Java Version.  Return a string containing the Java Version.
    getJavaVersion: 

    // Is Flash.  Check if Flash is installed.
    isFlash: function() {
      var objPlugin = navigator.plugins["Shockwave Flash"];
      if (objPlugin) {
        return true;
      }
      return false;
    },

    // Get Flash Version.  Return a string containing the Flash Version.
    getFlashVersion: function() {
      if (this.isFlash()) {
        objPlayerVersion = swfobject.getFlashPlayerVersion();
        return objPlayerVersion.major + "." + objPlayerVersion.minor + "." + objPlayerVersion.release;
      }
      return "";
    },

    // Is Silverlight.  Check if Silverlight is installed.
    isSilverlight: function() {
      var objPlugin = navigator.plugins["Silverlight Plug-In"];
      if (objPlugin) {
        return true;
      }
      return false;
    },

    // Get Silverlight Version.  Return a string containing the Silverlight Version.
    getSilverlightVersion: function() {
      if (this.isSilverlight()) {
        var objPlugin = navigator.plugins["Silverlight Plug-In"];
        return objPlugin.description;
      }
      return "";
    },

    //
    // MIME TYPE METHODS
    //

    // Is Mime Types.  Check if a mime type is installed.
    isMimeTypes: function() {
      if (navigator.mimeTypes.length) {
        return true;
      }
      return false;
    },

    // Get Mime Types.  Return a string containing a list of installed mime types.
    getMimeTypes: function() {
      var mimeTypeList = "";

      for (var i = 0; i < navigator.mimeTypes.length; i++) {
        if (i == navigator.mimeTypes.length - 1) {
          mimeTypeList += navigator.mimeTypes[i].description;
        } else {
          mimeTypeList += navigator.mimeTypes[i].description + ", ";
        }
      }
      return mimeTypeList;
    },

    //
    // FONT METHODS
    //

    // Is Font.  Check if a font is installed.
    isFont: 

    // Get Fonts.  Return a string containing a list of installed fonts.
    getFonts: function() {
      var fontArray = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"];
      var fontString = "";

      for (var i = 0; i < fontArray.length; i++) {
        if (fontDetective.detect(fontArray[i])) {
          if (i == fontArray.length - 1) {
            fontString += fontArray[i];
          } else {
            fontString += fontArray[i] + ", ";
          }
        }
      }

      return fontString;
    },

    //
    // STORAGE METHODS
    //

    // Is Local Storage.  Check if local storage is enabled.
    isLocalStorage: function() {
      try {
        return !!scope.localStorage;
      } catch (e) {
        return true; // SecurityError when referencing it means it exists
      }
    },

    // Is Session Storage.  Check if session storage is enabled.
    isSessionStorage: 

    // Is Cookie.  Check if cookies are enabled.
    isCookie: function() {
      return navigator.cookieEnabled;
    },

    //
    // TIME METHODS
    //

    // Get Time Zone.  Return a string containing the time zone.
    getTimeZone: function() {
      var rightNow = new Date();
      return String(String(rightNow).split("(")[1]).split(")")[0];
    },

    //
    // LANGUAGE METHODS
    //

    // Get Language.  Return a string containing the user language.
    getLanguage: function() {
      return navigator.language;
    },

    // Get System Language.  Return a string containing the system language.
    getSystemLanguage: 

    //
    // CANVAS METHODS
    //

    // Is Canvas.  Check if the canvas element is enabled.
    isCanvas: function() {

      // create a canvas element
      var elem = document.createElement('canvas');

      // try/catch for older browsers that don't support the canvas element
      try {

        // check if context and context 2d exists
        return !!(elem.getContext && elem.getContext('2d'));

      } catch (e) {

        // catch if older browser
        return false;
      }
    },

    // Get Canvas Print.  Return a string containing the canvas URI data.
    getCanvasPrint: function() {

      // create a canvas element
      var canvas = document.createElement('canvas');

      // define a context var that will be used for browsers with canvas support
      var ctx;

      // try/catch for older browsers that don't support the canvas element
      try {

        // attempt to give ctx a 2d canvas context value
        ctx = canvas.getContext('2d');

      } catch (e) {

        // return empty string if canvas element not supported
        return "";
      }

      // https://www.browserleaks.com/canvas#how-does-it-work
      // Text with lowercase/uppercase/punctuation symbols
      var txt = 'ClientJS,org <canvas> 1.0';
      ctx.textBaseline = "top";
      // The most common type
      ctx.font = "14px 'Arial'";
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      // Some tricks for color mixing to increase the difference in rendering
      ctx.fillStyle = "#069";
      ctx.fillText(txt, 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
      ctx.fillText(txt, 4, 17);
      return canvas.toDataURL();
    }
  };

  if (typeof module === 'object' && typeof exports !== "undefined") {
    module.exports = ClientJS;
  }
  scope.ClientJS = ClientJS;
})(window);
