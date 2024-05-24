/*jshint browser: true, jquery: true, strict: false, indent: 2, globalstrict: true, curly: false, shadow: true, eqnull: true, sub: true, -W041: false, -W082: false, -W065: false */
// Do not remove the above line. It is used to cue the code linting engine.

//"use strict"; // This forces our programmers to develop better code.

// If jQuery isn't defined yet, set it to null and we'll handle that later:
var jQuery = jQuery || null;
var $ = $ || null;

if (typeof app            === "undefined") var app = "";
if (typeof webContextRoot === "undefined") var webContextRoot = "";

// BEGIN patch to enable indexOf in IE8 (must be done prior to other global var declarations)
(function () {
  if (!Array.prototype.indexOf) { // if the indexOf function does not yet have a prototype...
    Array.prototype.indexOf = function (obj, start) { // create self-invoking anonymous indexOf() function:
      for (var i = (start || 0), j = this.length; i < j; i++) {
        if (this[i] === obj) return i;
      }
      return -1;
    };
  }
})();
// END patch to enable indexOf in IE8

// POLYFILL FOR JSON.PARSE IN UNSUPP BROWSERS:
if (!window.JSON) {
  window.JSON = {
    parse: 
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || 
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = 
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}// if (!window.JSON)

// Define all other global variables:
var windowPos               = 0,
  kalturaVid                = false,
  loadDelay                 = 500,
  videoWidth,
  videoHeight,
  proxyMode                 = false,
  showMsgBox                = false,
  helpToolTimer,
  hoverViewShowing,
  maxConcurrentRequests     = 6, // defaults to 6 concurrent requests, but is updated once the browser is known
  alertClose                = '<button type="button" class="close" data-dismiss="alert">&times;</button>',
  debugMode                 = debugMode || Boolean(window.console && console && (Boolean(window.location.href.indexOf('wwwdvc.gartner')+1)||Boolean(window.location.href.indexOf('developer.gartner')+1))),
  isProd                    = Boolean(window.location.href.indexOf('www.gartner')+1) || Boolean(window.location.href.indexOf('stage.gartner')+1), // Are we in a production environment?
  isLocal                   = Boolean(window.location.href.indexOf('file://')+1),     // Are we loading a local file?
  settings                  = {flashvars: []},
  userIp,
  geoData,
  ieVer                     = navigator.appVersion.substr(navigator.appVersion.indexOf("MSIE") + 5, 1),
  ieAncient                 = (navigator.userAgent.indexOf("MSIE")!=-1 && ieVer < 9 && ieVer > 1),
  ieNine                    = (navigator.userAgent.indexOf("MSIE")!=-1 && ieVer == 9),
  myCurrentYear             = new Date().getFullYear(),                     // The current year (right now)
  userId                    = userId  || -1,                                // G.com user ID
  userMkt                   = userMkt || 'UNKNOWN',                         // G.com user market
  gcHost                    = 'gartner.com',                                // G.com hostname (without prefix)
  jsType                    = 'application/javascript',                     // Type attribute for JavaScript files
  jsAsync                   = true;                                          // Timer to defer the CoreMetrics call by
settings.flashvars['wmode'] = 'opaque'; // Kaltura patch for old versions of Internet Explorer
var advLoaded = false; // this is to save the selection and make only one Ajax call

document.body.className += " js";

if (typeof rank   === "undefined") var rank;
if (typeof srchId === "undefined") var srchId;
if (typeof start  === "undefined") var start;

if (!jQuery || !$) { // This ensures that jQuery is loaded before running document ready code:
  //if (typeof $  === 'function') console.log('There is a conflict between jQuery and another library.');
  loadJquery();
} else { // jQuery was already loaded
  $(document).ready(function(){
    docReady();
  });
}

function loadJquery() {
  getScript('/imagesrv/apps/common/js/jq/jquery-1.9.1.js', function() {
    if (jQuery    === undefined) { // Super failsafe - still somehow failed...
      bindAllHandlers();
      //console.log('Something is seriously breaking jQuery. Seeketh thou a cleric.');
    } else {
      jQuery(document).ready(function(){
        docReady();
      });
    }
  });
  pause(1500);
}

function pause(numberMillis) { 
  var now = new Date(); 
  var exitTime = now.getTime() + numberMillis; 
  while (true) { 
      now = new Date(); 
      if (now.getTime() > exitTime) 
          return; 
  } 
} 

(function($) { // Prototypes a function to parse URL query strings:
  if($){
    $.QueryString = (function(a) {
      if (a === "") return {};
      var b = {};
      for (var i = 0; i < a.length; ++i)
      {
        var p=a[i].split('=');
        if (p.length !== 2) continue;
        try {
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        } catch (excep) { }
      } // for
      return b;
    })(window.location.search.substr(1).split('&'));
  }else{
    loadJquery();
  }
})(jQuery); // End of URL query string parsing function

if (typeof String.prototype.trunc !== "function") {
  String.prototype.trunc = function(n,useWordBoundary) { /* Truncate strings: */
    var tooLong = this.length>n, s_ = tooLong ? trimAll(this.substr(0,n-1)) : this;
    s_ = useWordBoundary && tooLong ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
    if (tooLong) while (/[^A-Z]$/i.test(s_)) { s_ = s_.substr(0,s_.length - 1); }
    return tooLong ? s_ + '...' : s_;
  };
}

if (ieAncient) { // code for Internet Explorer version < 9:
  // Patch for Array.Filter in IE7/8:
  if (typeof [].filter === "undefined") {
    Array.prototype.filter = 
  }
  // End filter patch for IE 7/8

  if (typeof Object.numberOfProperties !== "function") {
    Object.numberOfProperties =  // Object.numberOfProperties
  }

  if (!Array.prototype.find) {
    (function () {
      Array.prototype.find = function(predicate) {
        if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
        if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');

        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          if (i in list) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
              return value;
            }
          }
        }
        return undefined;
      };
    })();
  } // Array.prototype.find()

  if (!Array.prototype.findAll) {
    (function () {
      Array.prototype.findAll = function(predicate) {
        if (this == null) throw new TypeError('Array.prototype.findAll called on null or undefined');
        if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');

        var list = Object(this),
          length = list.length >>> 0,
          thisArg = arguments[1],
          found = [];

        for (var i = 0; i < length; i++) {
          if (i in list && predicate.call(thisArg, list[i], i, list)) found.push(list[i]);
        } // for (var i = 0; i < length; i++)

        if (found.length > 0) return found;
        return undefined;
      }; // value(predicate)
    })();
  } // Array.prototype.findAll()

  
  function jsonStringify(vContent) {
    if (vContent instanceof Object) {
      var sOutput = "";
      if (vContent.constructor === Array) {
        for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
        return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
      } // if (vContent.constructor === Array)
      if (vContent.toString !== Object.prototype.toString) return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\"";
      for (var sProp in vContent) sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp]) + ",";
      return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
    } // if (vContent instanceof Object)
    return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"" : String(vContent);
  } // function jsonStringify(vContent)

  if (!window.JSON) {
    window.JSON = {
      parse: jsonParse,
      stringify: jsonStringify
    };
  } else {
    if (!window.JSON.parse) window.JSON.parse = jsonParse;
    if (!window.JSON.stringify) window.JSON.stringify = jsonStringify;
  }
} else { // code for all modern browsers:
  if (!Object.prototype.numberOfProperties) {
    Object.defineProperty(Object.prototype, "numberOfProperties", {
      value: function numberOfProperties() {
        var numberOfProperties = 0, key, obj = this;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) numberOfProperties++;
        }
        return numberOfProperties;
      },
      enumerable: false,
      configurable: true,
      writable: true
    }); // Object.prototype.numberOfProperties()
  }

  // This never quite worked. Maybe it'll get finished later:
  // Object.defineProperty(Object.prototype, "toJSON", {
  //   value: function toJSON() {
  //     var obj = this;
  //     var out = '\n';
  //     if (typeof obj === "object") {
  //       if (Object.prototype.toString.call(obj) === '[object Array]') out += '[\n';
  //       for (var i in obj) {
  //         if (Object.prototype.toString.call(obj) === '[object Array]') {
  //           out += obj[i];
  //           if (i + 1 < obj.length) out += ',';
  //           out += '\n';
  //         } else out += i + ': {' + obj[i].toJSON() + '}\n';
  //       } // for (var i in obj)
  //       if (Object.prototype.toString.call(obj) === '[object Array]') out += ']';
  //     } else out += obj;
  //     return out;
  //   },
  //   enumerable: false
  // }); // end of toJSON function

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(predicate) {
        if (this == null) {
          throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          if (i in list) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
              return value;
            }
          }
        }
        return undefined;
      }
    });
  } // Array.prototype.find

  if (!Array.prototype.findAll) {
    Object.defineProperty(Array.prototype, 'findAll', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(predicate) {
        if (this == null) throw new TypeError('Array.prototype.findAll called on null or undefined');
        if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');

        var list = Object(this),
          length = list.length >>> 0,
          thisArg = arguments[1],
          found = [];

        for (var i = 0; i < length; i++) {
          if (i in list && predicate.call(thisArg, list[i], i, list)) found.push(list[i]);
        } // for (var i = 0; i < length; i++)

        if (found.length > 0) return found;
        return undefined;
      } // value(predicate)
    }); // Object.defineProperty
  } // Array.prototype.findAll
} // end conditional check for modern browsers

try {// attempted resolution for EC-793:
  if (!window.localStorage) {// Enable local storage for browsers that do not have support for it:
    window.localStorage = {
      getItem: 
      key: 
      setItem: function (sKey, sValue) {
        if(!sKey) { return; }
        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
        this.length = document.cookie.match(/\=/g).length;
      },
      length: 0,
      removeItem: 
      hasOwnProperty:     };
    window.localStorage.length = (document.cookie.match(/\=/g) || window.localStorage).length;
  } // end local storage polyfill
} catch (e) {}

function dump(obj, spaces) {
  if (typeof spaces === 'undefined') var spaces = 0;
  var out = '\n', space = '';
  for (var h = 0; h < spaces; h++) space += ' ';
  for (var i in obj) {
    if (typeof obj[i] === 'object') out += space + i + ': {' + dump(obj[i], spaces + 2) + space + '}\n';
    else out += space + i + ': ' + obj[i] + '\n';
  }
  return out;
} // dump(obj, spaces)

// Projected simpler version:
// function dump(obj, spaces) {
//   if (typeof spaces === 'undefined') var spaces = 0;
//   var out = '\n', space = '';
//   for (var h = 0; h < spaces; h++) space += ' ';
//   if (Object.prototype.toString.call(obj) === '[object Array]') {
//     for (var i = 0; i < obj.length; i++) out += space + i + ': ' + obj[i] + '\n';
//   } else for (var i in obj) out += space + i + ': {' + dump(obj[i], spaces + 2) + space + '}\n';
//   return out;
// } // dump(obj, spaces)

Number.prototype.formatMoney = 

/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number}      The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
} // function decimalAdjust(type, value, exp)

if (!Math.round10) { // Decimal round
  Math.round10 = function(value, exp) {
    return decimalAdjust('round', value, exp);
  };
}

if (!Math.floor10) { // Decimal floor
  Math.floor10 = function(value, exp) {
    return decimalAdjust('floor', value, exp);
  };
}

if (!Math.ceil10) { // Decimal ceil
  Math.ceil10 = 
}

if (typeof getObjects !== "function") {
  function getObjects(obj, key, val, ignore) { // Returns subset of object with matching key and value:
    if (typeof ignore === "undefined") var ignore = [];
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i) || ignore.indexOf(i) !== -1) continue;
      else if (typeof obj[i] == 'object') objects = objects.concat(getObjects(obj[i], key, val, ignore));
      else if (i == key && obj[key] == val) objects.push(obj);
    }
    return objects;
  } // getObjects(obj, key, val, ignore)
}

if (typeof updateObjectById !== "function") {
  function updateObjectById(oldObj, newObj, ignore) { // Updates object model based on ID:
    if (typeof ignore === "undefined") var ignore = [];
    if (!oldObj || !newObj || oldObj.length <= 0 || newObj.length <= 0 || !newObj.id || !Boolean(Math.floor(newObj.id)>0)) return false;
    var objId = newObj.id;
    for (var i in oldObj) {
      if (!oldObj.hasOwnProperty(i) || ignore.indexOf(i) !== -1) continue;
      if (typeof oldObj[i] == 'object') updateObjectById(oldObj[i], newObj, ignore);
      else if (i == 'id' && oldObj['id'] == objId) {
        $.extend(true, oldObj, newObj);
      }
    }
    return true;
  } // updateObjectById(oldObj, newObj, objId, ignore)
}

function keySort(key,val) { // sort object using key values
  return function(a,b) {
    return val ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
  };
} // keySort(key, val)

function getip(json) {
  userIp = json.ip;
  geoData = json;

  /* Commented out until Zippo adds support for JSONP:
  if (json.zipcode=='' && json.country_code!='' && json.region_code!='' && json.city!='') {
    var client    = new XMLHttpRequest(),
      thisCountry = json.country_code.toLowerCase(),
      thisRegion  = json.region_code.toLowerCase(),
      thisCity    = json.city.toLowerCase();
    try { // needed to get around issues with browsers that do not allow CORS requests
      client.open('GET', '//api.zippopotam.us/'+thisCountry+'/'+thisRegion+'/'+thisCity+'/', true);
    } catch (excep) { }
    client.onreadystatechange = function() {
      try { // needed to get around issues with browsers that do not allow CORS requests
        if (client.readyState === 4) geoData.zipcode = JSON.parse(client.responseText).places[0]['post code'];
      } catch (excep) { }
    };
    try { // needed to get around issues with browsers that do not allow CORS requests
      client.send();
    } catch (excep) { }
  } // end conditional
  */
} // getip(json)

function spinnerHTML() {/*
  <div class="spinner">
    <img src="${imageserver}/apps/gproduct/images/spinner.gif" alt="Please wait..." />
  </div>
*/}

function kalturaTopPicks() {/*
  <div id="kaltura_player_1479843559" style="width: 333px; height: 187px;" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
  <span itemprop="name" content="gartner_corporate_video"></span>
  <span itemprop="description" content="Corporate Gartner Video"></span>
  <span itemprop="duration" content="124"></span>
  <span itemprop="thumbnail" content="http://cfvod.kaltura.com/p/585951/sp/58595100/thumbnail/entry_id/1_vxoptsvb/version/100001/acv/131"></span>
  <span itemprop="width" content="333"></span>
  <span itemprop="height" content="187"></span>
  </div>
  <script src="https://cdnapisec.kaltura.com/p/585951/sp/58595100/embedIframeJs/uiconf_id/37324641/partner_id/585951?autoembed=true&entry_id=1_vxoptsvb&playerId=kaltura_player_1479843559&cache_st=1479843559&width=333&height=187&flashvars[streamerType]=auto"></script>
*/}

function kalturaSpecialReportsVideo() {/*
  <div id="kaltura_player_1504634440" style="width: 380px; height: 290px;" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">
  <span itemprop="name" content=""></span>
  <span itemprop="description" content=""></span>
  <span itemprop="duration" content=""></span>
  <span itemprop="thumbnail" content=""></span>
  <span itemprop="width" content="380"></span>
  <span itemprop="height" content="320"></span>
  </div>
  <script src="https://cdnapisec.kaltura.com/p/585951/sp/58595100/embedIframeJs/uiconf_id/40337351/partner_id/585951?autoembed=true&playerId=kaltura_player_1504634440&cache_st=1504634440&width=380&height=320&flashvars[streamerType]=auto&flashvars[playlistAPI.kpl0Id]=1_crsu7heq"></script>
*/};

function kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight) {
  return '<div id="kaltura_player_'+playerId+'" style="margin: 10px; width: '+(vidWidth * 1.02)+'px; height: '+(vidHeight * 1.02)+'px;"></div><script type="text/javascript" src="https://cdnapisec.kaltura.com/p/585951/sp/58595100/embedIframeJs/uiconf_id/'+uiConfId+'/partner_id/585951?entry_id='+entryId+'&playerId=kaltura_player_'+playerId+'&cache_st=1365608730&autoembed=true&width='+vidWidth+'&height='+vidHeight+'"></script>';

  /*return '<div id="kaltura_player_'+playerId+'" style="margin: 10px; width: '+(vidWidth * 1.02)+'px; height: '+(vidHeight * 1.02)+'px;" itemprop="video" itemscope itemtype="http://schema.org/VideoObject"></div>'+
    '<span itemprop="name" content=""></span>'+
    '<span itemprop="description" content=""></span>'+
    '<span itemprop="duration" content=""></span> '+
    '<span itemprop="thumbnail" content=""></span> '+
    '<span itemprop="width" content="'+(vidWidth * 1.02)+'"></span> '+
    '<span itemprop="height" content="'+(vidHeight * 1.02)+'"></span> '+
   '<script src="https://cdnapisec.kaltura.com/p/585951/sp/58595100/embedIframeJs/uiconf_id/'+uiConfId+'/partner_id/585951?autoembed=true&entry_id='+entryId+'&playerId=kaltura_player_'+playerId+'&cache_st=1479915561&width='+(vidWidth * 1.02)+'&height='+(vidHeight * 1.02)+'&flashvars[streamerType]=auto"></script>';
  
  return '<script src="https://cdnapisec.kaltura.com/p/585951/sp/58595100/embedIframeJs/uiconf_id/'+uiConfId+'/partner_id/585951"></script>'+
    '<div id="kaltura_player_'+playerId+'" style="width: '+(vidWidth * 1.02)+'px; height: '+(vidHeight * 1.02)+'px;" itemprop="video" itemscope itemtype="http://schema.org/VideoObject">'+
    '<span itemprop="name" content=""></span>'+
    '<span itemprop="description" content=""></span>'+
    '<span itemprop="duration" content=""></span>'+
    '<span itemprop="thumbnail" content=""></span>'+
    '<span itemprop="width" content="'+(vidWidth * 1.02)+'"></span>'+
    '<span itemprop="height" content="'+(vidHeight * 1.02)+'"></span>'+
    '</div>'+
    '<script>'+
    'kWidget.embed({'+
      '"targetId": "kaltura_player_'+playerId+'",'+
      '"wid": "_585951",'+
      '"uiconf_id": '+uiConfId+','+
      '"flashvars": {"streamerType": "auto"},'+
      '"cache_st": 1479928430,'+
      '"entry_id": "'+entryId+'"'+
    '});'+
    '</script>'*/
 }

function getQueryVars(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if (results === null) return "";
  else return decodeURIComponent(results[1].replace(/\+/g, " "));
} // getQueryVars(name)

function loadPIE() {
  $('.pie, .g-container, .nextGen, .container-fluid, .btn, .active, .flexslider, .modal-footer, .popover, .popover-inner, .popover-title, .popover-content, .searchHistoryResults, .timeline').each(function() {
    PIE.attach(this);
  });
}

function loadPIEdelayed() {
  $('.flexslider').each(;
} // loadPIEdelayed()

function setActiveNav() {
  var currentURL = window.location.href.substring(window.location.href.indexOf('gartner.com')+11).replace('#','');
  if (currentURL.substring(0, 8) === '/explore') $('.navExplore').addClass('active');
  else if (currentURL.substring(0, 6) === '/track') $('.navTrack').addClass('active');
  else if (currentURL.substring(0, 8) === '/connect') $('.navConnect').addClass('active');
  else if (currentURL.substring(0, 8) === '/library') $('.navMyLibrary').addClass('active');
  else if (currentURL.substring(0, 9) === '/activity') $('.navMyActivities').addClass('active');
  else if (
    currentURL.substring(0, 8) === '/profile' ||
    currentURL.substring(0, 5) === '/user'
  ) $('.navMyProfile').addClass('active');
}

function loadMessageBox() {
  "use strict";
  showMsgBox = false;
  var bodyClasses = $('body').attr('class');
  if ( // Returns true if the user does NOT have one of these browsers:
    bodyClasses.indexOf('ie') === -1 &&
    bodyClasses.indexOf('mozilla') === -1 &&
    bodyClasses.indexOf('ios') === -1 &&
    bodyClasses.indexOf('ipad') === -1 &&
    bodyClasses.indexOf('webkit') === -1 &&
    bodyClasses.indexOf('chrome') === -1 &&
    bodyClasses.indexOf('android') === -1 &&
    bodyClasses.indexOf('firefox') === -1
  ) showMsgBox = true;
  else if ( // If the user has IE, but it's not version 8 through 10:
    bodyClasses.indexOf('ie') !== -1 &&
    bodyClasses.indexOf('v-8') === -1 &&
    bodyClasses.indexOf('v-9') === -1 &&
    bodyClasses.indexOf('v-10') === -1
  ) showMsgBox = true;
  else checkForProxy();
  if (showMsgBox === true) $('#message-box').fadeIn(500, "easeOutCirc");
  /*
  else setTimeout(function() {
    $('#message-box').hide();
  }, 1500); */
/*
  if (! // Returns true if the user does NOT have one of these browsers:
    (
      $('body').hasClass('chrome') ||
      $('body').hasClass('mozilla') ||
      $('body').hasClass('ios') ||
      $('body').hasClass('ipad') ||
      $('body').hasClass('android') ||
      $('body').hasClass('webkit') ||
      (
        $('body').hasClass('ie') &&
        (
          $('body').hasClass('v-8') ||
          $('body').hasClass('v-9') ||
          $('body').hasClass('v-10')
        )
      )
    )
  ) $('#message-box').fadeIn(500, "easeOutCirc");
  else console.log($('body').attr('class'));
  */
}// loadMessageBox()
/*****************Advanced Search stuff *******************************/
function createAdvFrom(data) {
  var contypeList = [];
  var industryList = [23];
  $('#termsIn').html('');
  if(data.termsIn !== null){
    $('#termsIn').append('<option value = "">Full Document</option>');
    $.each(data.termsInMap, function(i, item) {
      //if(i == 0) $('#termsIn').append('<option value='+i+' selected = "selected">'+item+'</option>');
      if(parseInt(i) == parseInt(data.termsIn)) $('#termsIn').append('<option value='+i+' selected = "selected">'+item+'</option>');
      else $('#termsIn').append('<option value='+i+' >'+item+'</option>');
    });
  }
  else {
    $('#termsIn').append('<option value = "" selected="selected">Full Document</option>');
    $.each(data.termsInMap, function(i, item) {
      //if(i == 0) $('#termsIn').append('<option value='+i+' selected = "selected">'+item+'</option>');
      $('#termsIn').append('<option value='+i+' >'+item+'</option>');
    });
  }
  $("#termsIn").multiselect({
    multiple: false,
    selectedList: 1,
    header: false
  });
  $('#contentType').html('');
  var j = 0;
  //$('#contentType').append('<option value = "" disabled="disabled" selected="selected">All Content Types</option>');
  if(data.contentType !== null) {
    $.each(data.contentTypeMap,function(item, i) {
      if($.inArray(i, data.contentType) > -1)$('#contentType').append('<option value='+i+' selected="selected">'+item+'</option>');
      else if($.inArray(parseInt(i), contypeList) === -1) $('#contentType').append('<option value='+i+'>'+item+'</option>');
      else $('#contentType').append('<option value='+i+' disabled="disabled"  >'+item+'</option>');
    });
  }
  else {
    $.each(data.contentTypeMap,function(item, i) {
      if($.inArray(parseInt(i), contypeList) === -1) $('#contentType').append('<option value='+i+'>'+item+'</option>');
      else $('#contentType').append('<option value='+i+' disabled="disabled"  >'+item+'</option>');
    });
  }
  $("#contentType").multiselect({
    selectedList: 3,
    header: false,
    noneSelectedText: "All Content Types",
    classes: 'btn bullet pull-right advMultiSelectCheck',
    selectedText: function(numChecked, numTotal, checkedItems){
      if (numChecked < 4)
        return $(checkedItems).map(function(){return $(this).attr('title');}).get().join(', ');
      else
        return numChecked + ' selected';
    }
  });
  $('#ki').html('');
  if(!$.isEmptyObject(data.kiMap)) {
    if(data.ki !== null) {
      $.each(data.kiMap,function(item, i) {
        if($.inArray(i, data.ki) > -1) $('#ki').append('<option value='+i+' selected="selected">'+item+'</option>');
        else $('#ki').append('<option value='+i+'>'+item+'</option>');
      });
    }
    else {
      $.each(data.kiMap, function(item, i) {
        $('#ki').append('<option value='+i+'>'+item+'</option>');
      });
    }
    $("#ki").multiselect({
      selectedList: 3,
      header: false,
      noneSelectedText: "All Initiatives",
      classes: 'btn bullet pull-right advMultiSelectCheck',
      selectedText: function(numChecked, numTotal, checkedItems){
        if (numChecked < 4)
          return $(checkedItems).map(function(){return $(this).attr('title');}).get().join(', ');
        else
          return numChecked + ' selected';
      }
    });
  }
  else {
    $('#ki').closest('fieldset').hide();
  }
  $('#httpki').html('');
  if(!$.isEmptyObject(data.techGoToMarketMap)) {
    if(data.techGoToMarket !== null) {
      $.each(data.techGoToMarketMap,function(item, i) {
        if($.inArray(i, data.techGoToMarket) > -1) $('#httpki').append('<option value='+i+' selected="selected">'+item+'</option>');
        else $('#httpki').append('<option value='+i+'>'+item+'</option>');
      });
    }
    else {
      $.each(data.techGoToMarketMap, function(item, i) {
        $('#httpki').append('<option value='+i+'>'+item+'</option>');
      });
    }
    $("#httpki").multiselect({
      selectedList: 3,
      header: false,
      noneSelectedText: "All Go-to-Market Essentials",
      classes: 'btn bullet pull-right advMultiSelectCheck',
      selectedText: function(numChecked, numTotal, checkedItems){
        if (numChecked < 4)
          return $(checkedItems).map(function(){return $(this).attr('title');}).get().join(', ');
        else
          return numChecked + ' selected';
      }
    });
  }
  else {
    $('#httpki').closest('fieldset').hide();
  }
  $('#industry').html('');
  if(data.industry !== null) {
      $.each(data.industryMap,function(item, i) {
        if($.inArray(i, data.industry) > -1) $('#industry').append('<option value='+i+' selected="selected">'+item+'</option>');
        else if($.inArray(parseInt(i), industryList) === -1) $('#industry').append('<option value='+i+'>'+item+'</option>');
        else $('#industry').append('<option value='+i+' disabled="disabled"  >'+item+'</option>');
      });
    }
    else {
      $.each(data.industryMap, function(item, i) {
         if($.inArray(parseInt(i), industryList) === -1) $('#industry').append('<option value='+i+'>'+item+'</option>');
        else $('#industry').append('<option value='+i+'  disabled="disabled" >'+item+'</option>');
      });
    }
  $("#industry").multiselect({
    selectedList: 3,
    header: false,
    noneSelectedText: "All Industries",
    classes: 'btn bullet pull-right advMultiSelectCheck',
    selectedText: function(numChecked, numTotal, checkedItems){
      if (numChecked < 4)
        return $(checkedItems).map(function(){return $(this).attr('title');}).get().join(', ');
      else
        return numChecked + ' selected';
    }
  });
  // For Consumers 
  $('#consumer').html('');
  if(data.consumer !== null) {
      $.each(data.consumerMap,function(item, i) {
        if($.inArray(i, data.consumer) > -1) $('#consumer').append('<option value='+i+' selected="selected">'+item+'</option>');
        else if($.inArray(parseInt(i), industryList) === -1) $('#consumer').append('<option value='+i+'>'+item+'</option>');
        else $('#consumer').append('<option value='+i+' disabled="disabled"  >'+item+'</option>');
      });
    }
    else {
      $.each(data.consumerMap, function(item, i) {
         if($.inArray(parseInt(i), industryList) === -1) $('#consumer').append('<option value='+i+'>'+item+'</option>');
        else $('#consumer').append('<option value='+i+'  disabled="disabled" >'+item+'</option>');
      });
    }
  $("#consumer").multiselect({
    selectedList: 3,
    header: false,
    noneSelectedText: "All Consumers",
    classes: 'btn bullet pull-right advMultiSelectCheck',
    selectedText: function(numChecked, numTotal, checkedItems){
      if (numChecked < 4)
        return $(checkedItems).map(function(){return $(this).attr('title');}).get().join(', ');
      else
        return numChecked + ' selected';
    }
  });
  $('#region').html('');
  if(data.region !== null) {
    $.each(data.regionMap,function(item, i) {
      if($.inArray(i, data.region) > -1) $('#region').append('<option value='+i+' selected="selected">'+item+'</option>');
      else if(i != 6) $('#region').append('<option value='+i+'>'+item+'</option>');
      else $('#region').append('<option value='+i+' disabled="disabled"  >'+item+'</option>');
    });
  }
  else {
    $.each(data.regionMap, function(item, i) {
      if(i == 6) $('#region').append('<option value='+i+' disabled="disabled" >'+item+'</option>');
      else $('#region').append('<option value='+i+'>'+item+'</option>');
    });
  }
  $("#region").multiselect({
    selectedList: 3,
    header: false,
    noneSelectedText: "All Regions",
    classes: 'btn bullet pull-right advMultiSelectCheck',
    selectedText: function(numChecked, numTotal, checkedItems){
      if (numChecked < 4)
        return $(checkedItems).map(function(){return $(this).attr('title');}).get().join(', ');
      else
        return numChecked + ' selected';
    }
  });
  $('#entSize').html('');
  if(data.entSize !== null) {
    $('#entSize').append('<option value = "">All Sizes</option>');
    $.each(data.entSizeMap, function(i, item) {
      if(i == 2 || i == 1) $('#entSize').append('<option value='+i+' disabled="disabled" >'+item+'</option>');
      else if(parseInt(data.entSize[0]) === parseInt(i)) $('#entSize').append('<option value='+i+' selected = "selected">'+item+'</option>');
      else $('#entSize').append('<option value='+i+'>'+item+'</option>');
    });
  }
  else {
    $('#entSize').append('<option value = "" selected = "selected" >All Sizes</option>');
    $.each(data.entSizeMap, function(i, item) {
      if(i == 2 || i == 1) $('#entSize').append('<option value='+i+' disabled="disabled" >'+item+'</option>');
      else $('#entSize').append('<option value='+i+'>'+item+'</option>');
    });
  }
  $("#entSize").multiselect({
    multiple: false,
    selectedList: 1,
    header: false
  });
  $('#resStatus').html('');
  if(data.resStatus !== null) {
    $('#resStatus').append('<option value = "">All Research</option>');
    $.each(data.resStatusMap, function(i, item) {
      if(parseInt(data.resStatus[0]) === parseInt(i)) $('#resStatus').append('<option value='+i+' selected = "selected">'+item+'</option>');
      else $('#resStatus').append('<option value='+i+'>'+item+'</option>');
    });
  }
  else {
    $('#resStatus').append('<option value = "" selected = "selected">All Research</option>');
    $.each(data.resStatusMap, function(i, item) {
      $('#resStatus').append('<option value='+i+'>'+item+'</option>');
    });
  }
  $("#resStatus").multiselect({
    selectedList: 1,
    header: false,
    multiple: false
  });
  $('#entitlement').html('');
  if(data.entitlement !== null) {
    $('#entitlement').append('<option value = "">All Research</option>');
    $.each(data.entitlementMap, function(i, item) {
      if(parseInt(data.entitlement[0]) === parseInt(i)) $('#entitlement').append('<option value='+i+' selected = "selected">'+item+'</option>');
      else $('#entitlement').append('<option value='+i+'>'+item+'</option>');
    });
  }
  else {
    $('#entitlement').append('<option value = ""  selected = "selected" >All Research</option>');
    $.each(data.entitlementMap, ;
  }
  $("#entitlement").multiselect({
    multiple: false,
    selectedList: 1,
    header: false
  });
  var td ='';
  if(data.toDate !=null ) td= new Date(data.toDate.replace(/-/g,'/'));
  $('#toDate1').datepicker({
    dateFormat: 'dd-MM-yy',
    beforeShow: function(input, inst) {
      inst.dpDiv.addClass('advToDate bullet');
      inst.dpDiv.removeClass('advFromDate ');
    },
    onSelect: function(date) {
      if((new Date($('#toDate1').datepicker('getDate')) == "Invalid Date" && isNaN(new Date($('#toDate1').datepicker('getDate')))) || ($('#toDate1').datepicker('getDate') > 0 && $('#fromDate1').datepicker('getDate') > 0 && $('#fromDate1').datepicker('getDate') > $('#toDate1').datepicker('getDate'))) {
        if($('#searchValidationTip').length > 0) {
          $('#toDate1').tooltip('destroy');
          $('#fromDate1').tooltip('destroy');
        }
        $('#toDate1').tooltip({
            placement: 'top',
            trigger: 'manual',
            html: true,
            viewport: '#AdvNarrowSearch',
            title: '<div class="warning"><span class="icon-warning"></span><p>"To Date" cannot be earlier than "From Date".</p><br class="clearme" /></div>'
          }).tooltip('show');
          $('.warning').closest('.tooltip ').attr('id','searchValidationTip');
          if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
            $('body.explore.initiatives .toppicksflash object').hide();
             // advFormhidden();
          }
          return false;
       }
       else if($('#toDate1').datepicker('getDate') > new Date()) {
         if($('#searchValidationTip').length > 0) {
            $('#toDate1').tooltip('destroy');
            $('#fromDate1').tooltip('destroy');
          }
          $('#toDate1').tooltip({
              placement: 'top',
              trigger: 'manual',
              html: true,
              viewport: '#AdvNarrowSearch',
              title: '<div class="warning"><span class="icon-warning"></span><p>"To Date" cannot be greater than today.</p><br class="clearme" /></div>'
            }).tooltip('show');
            $('.warning').closest('.tooltip ').attr('id','searchValidationTip');
            if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
              $('body.explore.initiatives .toppicksflash object').hide();
               // advFormhidden();
            }
            return false;
       }
       else {
         if($('#searchValidationTip').length > 0) $('#toDate1').tooltip('destroy');
       }
    }
  }).datepicker("setDate", td).addClass('btn');
  var fd = '';
  if(data.fromDate !=null ) fd= new Date(data.fromDate.replace(/-/g,'/'));
  $('#fromDate1').datepicker({
    dateFormat: 'dd-MM-yy',
    beforeShow: 
    onSelect: function(date) {
      if((new Date($('#fromDate1').datepicker('getDate') ) == "Invalid Date" && isNaN(new Date($('#fromDate1').datepicker('getDate') ))) || ($('#toDate1').datepicker('getDate') > 0 && $('#fromDate1').datepicker('getDate') > 0 && $('#fromDate1').datepicker('getDate') > $('#toDate1').datepicker('getDate'))) {
        if($('#searchValidationTip').length > 0) {
          $('#toDate1').tooltip('destroy');
          $('#fromDate1').tooltip('destroy');
        }
         $('#fromDate1').tooltip({
              placement: 'top',
              trigger: 'manual',
              html: true,
              viewport: '#AdvNarrowSearch',
              title: '<div class="warning"><span class="icon-warning"></span><p>"From Date" cannot be greater than "To Date". </p><br class="clearme" /></div>'
            }).tooltip('show');
            $('.warning').closest('.tooltip ').attr('id','searchValidationTip');
            if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
              $('body.explore.initiatives .toppicksflash object').hide();
               // advFormhidden();
            }
            return false;
      }
      else if($('#fromDate1').datepicker('getDate') >  new Date()) {
        if($('#searchValidationTip').length > 0) {
          $('#toDate1').tooltip('destroy');
          $('#fromDate1').tooltip('destroy');
        }
       $('#fromDate1').tooltip({
            placement: 'top',
            trigger: 'manual',
            html: true,
            viewport: '#AdvNarrowSearch',
            title: '<div class="warning"><span class="icon-warning"></span><p>"From Date" cannot be greater than today. </p><br class="clearme" /></div>'
          }).tooltip('show');
          $('.warning').closest('.tooltip ').attr('id','searchValidationTip');
          if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
            $('body.explore.initiatives .toppicksflash object').hide();
             // advFormhidden();
          }
          return false;
      }
       else {
         if($('#searchValidationTip').length > 0) $('#fromDate1').tooltip('destroy');
       }
    }
  }).datepicker("setDate", fd).addClass('btn');
  $('#fromIconCal').click(function(e){
    $(this).prevAll('#fromDate1').datepicker("show");
  });
  $('#toIconCal').click(;
  var advTooltipTimer,advTooltipTimer2;
  $('h5#AdvTooltip1').tooltip();
  $('h5#AdvTooltip2').tooltip();
  $('h5#AdvTooltip1'
  ).off('mouseenter mouseleave'
  ).on('mouseenter', function(e) {
    e.stopPropagation();
    recTarget = $(this);
    clearTimeout(advTooltipTimer);
    advTooltipTimer = setTimeout(function() {
      $(recTarget).tooltip('show');
//        .tooltip({template: '<div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"></div>'})
     // $('.tooltip.fade').attr('id','searchTooltip');
      $('.tooltip.in .tooltip-inner').addClass('sans-serif');
      //if ($('body').hasClass('ie') && $('body').hasClass('v-8')) $('.tooltip.in').css('margin-left', '80px');
      /*
      setTimeout(function() {
        $(recTarget).siblings('.tooltip').animate({marginLeft: '57px'}, 50);
      }, 50); */
     }, 200);
    }).on('mouseleave', function(e) {
      e.stopPropagation();
      recTarget = $(this);
      clearTimeout(advTooltipTimer2);
      advTooltipTimer2 = setTimeout(function() {
        // $(recTarget).siblings('.tooltip').css('margin-left', '');
        $(recTarget).tooltip('destroy');
      }, 50);
    });
    $('h5#AdvTooltip2'
  ).off('mouseenter mouseleave'
  ).on('mouseenter', function(e) {
    e.stopPropagation();
    recTarget = $(this);
    clearTimeout(advTooltipTimer);
    advTooltipTimer = setTimeout( 200);
    }).on('mouseleave', function(e) {
      e.stopPropagation();
      recTarget = $(this);
      clearTimeout(advTooltipTimer2);
      advTooltipTimer2 = setTimeout( 50);
    });
}
function showWarningTooltip() {
  $('#edit-title-text').tooltip({
    placement: 'top',
    trigger: 'manual',
    html: true,
    title: '<div class="warning"><span class="icon-warning"></span><p>This name is already in use.</p><br class="clearme" /></div>'
  }).tooltip('show');
} // showWarningTooltip()



function advOnloadclick() {

  $('#advFormButton').keydown(function(el) {    
    if(el.which == 13) {
      $(this).click();
    }
  });
  $('#advFormButton').click(function(event) {
      event.preventDefault();
      event.stopPropagation();
       // $('#advForm').modal();

      if(!advLoaded) {
        $.ajax({
          type: 'GET',
          dataType: 'json',
          url: '/search/research/adv-form-data',
          cache: false,
          success: function(jData){
            advLoaded = true;
            createAdvFrom(jData);
            if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
              $('body.explore.initiatives .toppicksflash object').hide();
              advFormhidden();
            }
          },
          error: function () {
            //console.log('error');
          }
        });
      }
        $('#advForm').modal('show').css('z-index', '10000').show(0).removeClass('hide').addClass('in');
        if ($('.modal-backdrop.in').length === 0) {
          $('.modal-backdrop').remove();
          $('body').append($('<div class="modal-backdrop in" />'));
        }
        if(($('body').hasClass('library') || $('body').hasClass('activity')) && $( window ).height() < 800) {
          $('.modal .modal-body #AdvNarrowSearch').css('overflow-y', 'auto');
          $('.modal .modal-body #AdvNarrowSearch').css('max-height', $(window).height() * 0.5);
          $('.modal .modal-body #AdvNarrowSearch').css('margin-bottom','20px');
        }
        else if($( window ).height() < 600) {
          $('.modal .modal-body #AdvNarrowSearch').css('overflow-y', 'auto');
          $('.modal .modal-body #AdvNarrowSearch').css('max-height', $(window).height() * 0.4);
          $('.modal .modal-body #AdvNarrowSearch').css('margin-bottom','20px');
        }

        if($('#keywords').val() !== "") {
          $('#AdvsearchKeyword').val($('#keywords').val());
        }

        reportEvent(event,null,"adv.c");

        if($('.advSearchFrame').hasClass('in')) {
          if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
            $('body.explore.initiatives .toppicksflash object').hide();
              advFormhidden();
          }
        }
      });

      $('#advFormSearchButton').off('click').on('click',function(event){
        var evt = event || window.event;
        if (!evt || typeof evt === "undefined") return false;
        if (evt.stopPropagation) {
            evt.stopPropagation();
        } else {
            evt.returnValue = false;
        }
        if (typeof evt.preventDefault === "function") evt.preventDefault();
        else evt.returnValue = false;
        /* format date as per the requirement */
        var nDate = $('#fromDate1').val().length > 0 ? $('#fromDate1').datepicker('getDate') : '';
        var fDate = $.datepicker.formatDate('yy-mm-dd',nDate);
        nDate =  $('#toDate1').val().length > 0 ? $('#toDate1').datepicker('getDate') : '';
        var tDate = $.datepicker.formatDate('yy-mm-dd',nDate);
        if(tDate.length > 0 && fDate.length > 0 &&  fDate > tDate) {
           $('#toDate1').tooltip({
            placement: 'top',
            trigger: 'manual',
            html: true,
            viewport: '#AdvNarrowSearch',
            title: '<div class="warning"><span class="icon-warning"></span><p>"From Date" cannot be greater than "To Date". </p><br class="clearme" /></div>'
          }).tooltip('show');
          if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
            $('body.explore.initiatives .toppicksflash object').hide();
             // advFormhidden();
          }
          $('.warning').closest('.tooltip ').attr('id','searchValidationTip');
          return false;
        }
        else if($('#fromDate1').datepicker('getDate') > new Date()){
          $('#fromDate1').tooltip({
            placement: 'top',
            trigger: 'manual',
            html: true,
            viewport: '#AdvNarrowSearch',
            title: '<div class="warning"><span class="icon-warning"></span><p>"From Date" cannot be greater than today. </p><br class="clearme" /></div>'
          }).tooltip('show');
          $('.warning').closest('.tooltip ').attr('id','searchValidationTip');
          if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
            $('body.explore.initiatives .toppicksflash object').hide();
             // advFormhidden();
          }
          return false;
        }
        else if($('#toDate1').datepicker('getDate') > new Date()){
          $('#toDate1').tooltip({
            placement: 'top',
            trigger: 'manual',
            html: true,
            viewport: '#AdvNarrowSearch',
            title: '<div class="warning"><span class="icon-warning"></span><p>"To Date" cannot be greater than today. </p><br class="clearme" /></div>'
          }).tooltip('show');
          $('.warning').closest('.tooltip ').attr('id','searchValidationTip');
          if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
            $('body.explore.initiatives .toppicksflash object').hide();
             // advFormhidden();
          }
          return false;
        }
        else {
          if($('#searchValidationTip').length > 0) {
            $('#toDate1').tooltip('destroy');
            $('#fromDate1').tooltip('destroy');
          }
        }
        $('#fromDate').val(fDate);
        $('#toDate').val(tDate);
        /* check if all content types are selected then remove all and just send 11 value (which is all) ***/
        if( $("input[name='multiselect_contentType']:checked").length == 20 )
        {
             //$("#contentType").multiselect('uncheckAll');
             //$("#contentType option:disabled").removeAttr('disabled').attr('selected','selected');
        }
        /* check if all industry types are selected then remove all and just send 23 value (which is all) ***/
        if( $("input[name='multiselect_industry']:checked").length == $("input[name='multiselect_industry']").length-1 )
        {
             //$("#industry").multiselect('uncheckAll');
            // $("#industry option:disabled").removeAttr('disabled').attr('selected','selected');
        }
        /* check if all region are selected then remove all and just send 6 value (which is all) ***/
        if( $("input[name='multiselect_region']:checked").length == $("input[name='multiselect_region']").length-1 )
        {
            // $("#region").multiselect('uncheckAll');
            // $("#region option:disabled").removeAttr('disabled').attr('selected','selected');
        }
        /* check if all research are selected then remove all and just send 0 value (which is all) ***/
        /*if( $("input[name='multiselect_resStatus']:checked").val() == 0)
        {
            $("#resStatus").find("[value=0]").removeAttr('selected');
            $("#resStatus").find("[value=1]").attr('selected','selected');
            $("#resStatus").find("[value=2]").attr('selected','selected');
        }*/
         var userUniqueQueryId = CryptoJS.MD5( userId+ new Date().getTime()+'',"SOf06MVaS9m1R0D14EIk66YVN8m5wP3W");
        $('#advqid').val(userUniqueQueryId);
        $('#advancedForm').submit();
      });
      $('#clearFilters').off('click').on('click',function(event){
        var evt = event || window.event;
        if (!evt || typeof evt === "undefined") return false;
        if (evt.stopPropagation) {
            evt.stopPropagation();
        } else {
            evt.returnValue = false;
        }
        if (typeof evt.preventDefault === "function") evt.preventDefault();
        else evt.returnValue = false;
        $('#termsIn').multiselect('uncheckAll');
        $('#termsIn option:eq(0)').attr('selected','selected');
        $('#termsIn').multiselect('refresh');
        $('#contentType').multiselect('uncheckAll');
        if($('.kiFieldset label').is(':visible')) $('#ki').multiselect('uncheckAll');
        if($('.httpkiFieldset label').is(':visible')) $('#httpki').multiselect('uncheckAll');
        $('#industry').multiselect('uncheckAll');
        $('#region').multiselect('uncheckAll');
        $('#consumer').multiselect('uncheckAll');
        $('#entSize').multiselect('uncheckAll');
        $('#entSize option:eq(0)').attr('selected','selected');
        $('#entSize').multiselect('refresh');
        $('#resStatus').multiselect('uncheckAll');
        $('#resStatus option:eq(0)').attr('selected','selected');
        $('#resStatus').multiselect('refresh');
        $('#entitlement').multiselect('uncheckAll');
        $('#entitlement option:eq(1)').attr('selected','selected');
        $('#entitlement').multiselect('refresh');
        $('#toDate1').val('');
        $('#fromDate1').val('');
        if($('#searchValidationTip').length > 0) {
            $('#toDate1').tooltip('destroy');
            $('#fromDate1').tooltip('destroy');
        }
        if(($('body').hasClass('ie v-8') || $('body').hasClass('ie v-9'))) {
          $('body.explore.initiatives .toppicksflash object').hide();
           // advFormhidden();
        }
      });
}



function tbFunction (e) {
 "use strict";
  // pick passed event of global event object
  e = e || event || window.event;
  if (e.keyCode == 9) {
    $('.ui-multiselect-menu').hide();
    var elem;
    if (e.srcElement)  elem = e.srcElement;
    else if (e.target) elem = e.target;
    $(elem).prev('select').multiselect('open');
  }
}
/*****************Advanced Search stuff *******************************/

function bindAllHandlers() {
  bindBodyClick();
  if(typeof(serachEngineType) === 'undefined') bindHeaderSearch(); // Search pages need diferent binding
  bindShowSaveAs();
  bindFontChanger();
  bindReadingHistory();
  bindProfilePop();
  bindAddToLibrary();
  bindSortPopover();
  bindShareDoc();
  bindSharePopup();
  bindHelpClick();
  bindJspDrag();
  bindShareModals();
  bindSaveInitiative();
  bindUndoInitiative();
  bindSaved();
// bindCustomAlert();
// bindRecommendedAlert();
  bindEnterpriseAlert();
  bindToggleModals();
  bindCheckMarks();
  bindDismissModal();
}

function hideSpinner() {
  $('#annotation-spinner').animate({opacity: 0}, 500);
  setTimeout(function() {
    $('#annotation-spinner').remove();
  }, 600);
}

function bindSearchHover() {
  $('.searchResultRow').not('.siteOutSide').off('mouseenter,mouseleave').on('mouseenter',
    function () { // When entering the hit box:
      $(this).find('.viewSummaryLink').show().css('visibility', 'visible');
      $(this).addClass('searchResultRowSelected').removeClass('searchResultRowUnselected');
      $('a.hoverview').off('click').on('click', function (event) {
        event = event || window.event;
        event.preventDefault();
        event.stopPropagation();
        toggleHoverView($(this));
      });
    }
  ).on('mouseleave',
    function () { // When leaving the hit box:
      $(this).find('.viewSummaryLink').hide().css('visibility', 'hidden');
      $(this).removeClass('searchResultRowSelected').addClass('searchResultRowUnselected');
    }
  );
}

function deferNavAndReport(event,thisHref,searchType,docID) {
  var evt = event || window.event;
  if (!evt || typeof evt === "undefined" || !thisHref || typeof thisHref === "undefined") return false;
  if (evt.stopPropagation) {
      evt.stopPropagation();
  } else {
      evt.returnValue = false;
  }
  if (typeof evt.preventDefault === "function") evt.preventDefault();
  else evt.returnValue = false;
  if ((searchType === 'r.nav.pdf' || searchType === 'r.nav.attach') && typeof meterChargeCheck !== 'undefined' && meterChargeCheck ==="cancel")
   $('#doc-meter').find('form').remove();
  reportEvent(evt, thisHref, searchType, docID);
} // deferNavigationAndReport(e, thisHref)


function deferNavAndReport2(event,thisHref,searchType,docID) {
  var evt = event || window.event;
  if (!evt || typeof evt === "undefined" || !thisHref || typeof thisHref === "undefined") return false;
  if (evt.stopPropagation) {
      evt.stopPropagation();
  } else {
      evt.returnValue = false;
  }
  if (typeof evt.preventDefault === "function") evt.preventDefault();
  else evt.returnValue = false;
  if ((searchType === 'r.nav.pdf' || searchType === 'r.nav.attach') && typeof meterChargeCheck !== 'undefined' && meterChargeCheck ==="cancel")
   $('#doc-meter').find('form').remove();
  reportEvent2(evt, thisHref, searchType, docID);
} // deferNavigationAndReport(e, thisHref)

function navigateTo(thisHref) {
  if (thisHref || typeof thisHref === "undefined") return false;
  window.location.href = thisHref;
} // navigateTo(thisHref)


function reportEvent(event, cBack,searchType,docId) { // reports different user interaction events:
  var evt = event || window.event,
    cdData = '',
    originalData = '',
    clickType = '',
    src = "//" + (typeof(gsaDomainGlobal) !== 'undefined' ? gsaDomainGlobal : '') + "/click",
    userUniqueQueryId = '',
    asrQid = '';
   var ind = -1;
   var popUpStopper;
  if (!evt || typeof evt === 'undefined') return false;
  if ($(evt.target).data("cdata")) cdData = $(evt.target).data("cdata");
  if ($(evt.target).data("originalTitle")) originalData = $(evt.target).data("originalTitle");
  if (typeof searchType != 'undefined') clickType = searchType;
  else if ($(evt.target).data("tracktype")) clickType = $(evt.target).data("tracktype");
  else clickType = evt.target.className;
  rank = $(evt.target).attr("data-rank") || '';
  if(corp == "S" && searchType == "nav.lib") rank =  $(".listDoc a[data-resid='"+docId+"']").attr('data-rank');
  if ($(evt.target).hasClass('vivbold'))
    rank = $(evt.target).closest('a').attr('data-rank');
  srchId = srchId || '';
  start = start || '';
  if ( typeof resultsQid !== 'undefined') asrQid = resultsQid;
  else asrQid = getUrlParameters('qid')|| '';
  var altUserId = (typeof window.userId != 'undefined' && window.userId);
  asrusrid = NTPT_PGEXTRA.split('=')[1].split('&')[0] === '-1'? !!altUserId  && altUserId: NTPT_PGEXTRA.split('=')[1].split('&')[0];
  if (searchType == 'nav.syn' || searchType =='nav.spell' || searchType =='nav.km' || searchType =='c.mlt' ||searchType =='c.rlt' || (searchType.indexOf("nav.ta") > -1)) {
    //userUniqueQueryId = CryptoJS.MD5( userId+ new Date().getTime()+'',"SOf06MVaS9m1R0D14EIk66YVN8m5wP3W");
    if(searchType !='nav.km' && searchType != 'nav.ta.analyst' && searchType != 'nav.ta.ki-doc' && searchType !='c.rlt' && searchType != 'nav.ta.conv' && searchType != 'nav.ta.bm' && searchType != 'nav.ta.vendors') cBack = cBack+'&qid='+resultsQid;
    if(searchType == 'nav.ta.analyst' || searchType == 'nav.ta.ki-doc' || searchType == 'nav.ta.vendors' ) cBack = cBack+'?qid='+resultsQid;
    if(searchType =='c.rlt' && typeof(serachEngineType) === 'undefined') cBack = cBack+'&qid='+resultsQid;
    $('#qid').val(resultsQid);
  } // typehead
  if (searchType == 'r.nav.lib' || searchType =='r.nav.print' || searchType =='r.nav.fwd' || searchType =='r.nav.pdf' ||searchType =='r.nav.attach') {
     srchId = (window.location.href.indexOf('refval')>-1)? getUrlParameters('refval') : -1;
     asrQid = getUrlParameters('qid')|| '';
  } //reader
  if(searchType === 'c.solr' || searchType === 'c'|| searchType === 'c.author') {
    asrQid = getUrlParameters('qid')|| '';
  } // all solr results in page
  if(searchType === 'c.vlp.vrating' || searchType === 'c.vlp.swot' || searchType === 'c.vlp.toolkits') {
    srchId = (window.location.href.indexOf('refval')>-1)? getUrlParameters('refval') : -1;
    asrQid = getUrlParameters('qid')|| '';
    if (debugMode) console.log('testing after refresh of page: ' + srchId);
  } // VLP page - Additional resources click events
  if(searchType == 'c.trends.click') {
    srchId = (window.location.href.indexOf('refval')>-1)? getUrlParameters('refval') : -1;
    if (debugMode) console.log('testing trends page: ' + srchId);
  } // Trends click events
  if(searchType.indexOf("nav.ta") > -1) {
    if(typeof(serachEngineType) !== 'undefined') {
     cdData = pageName;
   }
    else {
      cdData = 'default';
    }
  } //which channel user is on in typeahead
  if (searchType == 'c.all.kiProject' || searchType == 'c.all.kiRole') rank = $('a.linkBox').attr('data-rank');
  var asrSesId = asrSessionId ||'';
  var decodeQuery;
  try { 
    decodeQuery = decodeURIComponent(page_query); 
  } catch(e) { 
    decodeQuery = typeof(page_query) !== 'undefined' ? page_query : '';
  }
  var dataSent = {
    'cd' : cdData,
    'corp' : corp,
    'ct' : clickType,
    'ip' : userIp,
    'q' : decodeQuery,
    'r' : rank,
    'sid' : srchId,
    'start' :start,
    'time' : new Date().getTime(),
    'u' : asrusrid,
    'qid' : asrQid,
    'sessionId' : asrSesId,
    'url' : $(location).attr('href')
  };
  if (typeof docId != 'undefined') dataSent['res_id'] = docId;
  if (cBack != null) {
    dataSent['url'] = cBack;
    dataSent['ct'] = searchType || 'siteNav';
    if (searchType.indexOf("nav.ta") > -1)       dataSent['sid'] = -1;
    if (searchType == 'r.nav.pdf' && typeof meterChargeCheck !== 'undefined' && meterChargeCheck === "cancel") {
      $('.file-attachment li').each(function(index){
        if($(this).find('a').attr('href') == cBack)
        ind = index;
      });
    } // metered user for PDF
    if (searchType == 'nav.km'
        || (searchType == 'r.nav.pdf' && typeof attachmentsDocTypes == 'undefined')
        || (searchType == 'r.nav.pdf' && attachmentsDocTypes[ind] === '2' && typeof meterChargeCheck !== 'undefined' &&
            meterChargeCheck === "cancel")
        )
      window.open(cBack, "myNewPage").focus(); // metered user for PDF for new page
    if(searchType == 'c.peerInsight' || searchType == 'c.peerInsight.vendor' || searchType === 'c.peerconv'|| searchType === 'c.all.peerconv' || searchType == 'c.bm' || searchType == 'nav.ta.bm' || searchType == 'c.webinar' || searchType == 'c.analyst' || searchType == 'nav.ta.ki-doc' || searchType =='c.all.kiProject' || searchType =='c.all.kiRole' || searchType == 'c.all.kiProjectRelated') {
        $(evt.target).blur();
        popUpStopper = window.open(cBack,  '_blank').focus();
      } // new tab for clicks (same as below)
    if(searchType == 'c.event'|| searchType === 'c.all.event' || searchType == 'nav.ta.analyst' || searchType === 'c.all.analyst' || searchType === 'c.all.webinar' || searchType === 'c.peer' || searchType === 'c.all.peer' || searchType === 'c.itGlosorry' || searchType === 'c.vendor.PI'|| searchType === 'c.vlp.pi' || searchType === 'c.vlp.pc' || searchType == 'nav.scm.world' || searchType == 'nav.l2.world' || searchType == 'nav.icono.world') {
      $(evt.target).blur();
      popUpStopper = window.open(cBack,  '_blank').focus();
    } // new tab for clicks (same as above)
    if(searchType == 'nav.ta.conv' && !$('body').hasClass('ie')) { // this condition is added to solve the SI-1926.
      $(evt.target).blur();
      popUpStopper = window.open(cBack,  '_blank').focus();
    }

    window.focus();
    if(searchType != 'c.peerInsight' && searchType != 'c.peerInsight.vendor' && searchType != 'c.peerconv' && 
        searchType != 'c.all.peerconv' && searchType != 'c.bm' && searchType != 'nav.ta.bm' && 
        searchType != 'c.webinar' && searchType != 'c.analyst' && searchType != 'c.event' && 
        searchType != 'c.all.event' && searchType != 'nav.ta.analyst' && searchType != 'nav.ta.ki-doc' && 
        searchType != 'c.all.webinar' && searchType != 'c.all.analyst' && searchType != 'c.peer' && 
        searchType != 'c.all.peer' && searchType != 'c.itGlosorry' && searchType != 'c.vendor.PI' && 
        searchType != 'c.vlp.pi' && searchType != 'c.vlp.pc' && searchType !='c.all.kiProject' && 
        searchType !='c.all.kiRole' && searchType != 'c.all.kiProjectRelated'  && searchType != 'c.related' && searchType != 'nav.scm.world' && 
        searchType != 'nav.l2.world' && searchType != 'nav.icono.world'){
      $.ajax({ // to open in same tab if above not equal
        url: src,
        data: dataSent,
        type: 'GET',
        dataType : "jsonp",
        jsonp: false,
        cache: false,
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        complete: function (data) {
          if (searchType == 'nav.ta.title') window.location.href = cBack; // open the document

          else if (searchType == 'nav.ta.analyst') window.location.href = cBack; // open the document
          else if (searchType == 'nav.ta.ki-doc') window.location.href = cBack; // open the document
          else if (searchType == 'nav.ta.vendors') window.location.href = cBack; // open the document
          else if (searchType== 'nav.ta.bm') {}
          else if (searchType == 'nav.ta.conv' && $('body').hasClass('ie')) window.location.href = cBack; // // this condition is added to solve the SI-1926.
          else if (searchType == 'nav.ta.conv') {}
          else if (searchType.indexOf("nav.ta") > -1) submitSearch('gSearchForm','');
          else if (searchType == "r.nav.pdf" &&
                   attachmentsDocTypes[ind] === '2' &&
                    typeof meterChargeCheck !== 'undefined' &&
                     meterChargeCheck ==="cancel"){}
          else if (searchType == 'nav.km') window.open(cBack,"myNewPage").focus();
          //else if (searchType == 'c.dym' || searchType == 'c.bm') {}
          else if (searchType == 'c.dym') {}
          else if (searchType == 'c.bm') window.open(cBack,"myNewPage").focus();
          else window.location.href = cBack;
          window.focus();
        },
        success: function(data) {
         if (searchType == "r.nav.pdf" &&
                   attachmentsDocTypes[ind] === '2' &&
                   typeof meterChargeCheck !== 'undefined' &&
                   meterChargeCheck ==="cancel")
            popUpStopper.location.href = cBack;
          else if (searchType == 'nav.km') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'c.bm') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'nav.ta.vendors') window.location.href = cBack; // open the document
          else if (searchType== 'nav.ta.bm'){
            cBack = cBack.split('&qid')[0];
           window.open(cBack,"myNewPage");
          }
           window.focus();
        },
        error: function (data) {
          if (searchType == "r.nav.pdf" &&
                   attachmentsDocTypes[ind] === '2' &&
                   typeof meterChargeCheck !== 'undefined' &&
                   meterChargeCheck ==="cancel")
            window.open(cBack,"myNewPage");
          else if (searchType == 'nav.km') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'c.bm') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'nav.ta.vendors') window.location.href = cBack; // open the document
          else if (searchType== 'nav.ta.bm'){
            cBack = cBack.split('&qid')[0];
           window.open(cBack,"myNewPage");
          }
           window.focus();
        }
      });
    }
  else {
    $.ajax({
        url: src,
        data: dataSent,
        type: 'GET',
        dataType : "jsonp",
        cache: false,
        async: false,
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: function(data) {
        },
        error: function (data) {
        }
      });
  }

  } else if (cBack == null) {
    $.ajax({
      url: src,
      data: dataSent,
      type: 'GET',
      dataType : "jsonp",
      jsonp: false,
      cache: true,
      crossDomain: true,
      contentType: "application/json; charset=utf-8"
    }); // $.ajax()
  } // end conditional
} // reportEvent(eventObj, cBack)

function reportEvent2(event, cBack,searchType,docId) { // reports different user interaction events:
  var evt = event || window.event,
    cdData = '',
    originalData = '',
    clickType = '',
    src = "//" + (typeof(gsaDomainGlobal) !== 'undefined' ? gsaDomainGlobal : '') + "/click",
    userUniqueQueryId = '',
    asrQid = '';
   var ind = -1;
   var popUpStopper;
  if (!evt || typeof evt === 'undefined') return false;
  if ($(evt.target).data("cdata")) cdData = $(evt.target).data("cdata");
  if ($(evt.target).data("originalTitle")) originalData = $(evt.target).data("originalTitle");
  if (typeof searchType != 'undefined') clickType = searchType;
  else if ($(evt.target).data("tracktype")) clickType = $(evt.target).data("tracktype");
  else clickType = evt.target.className;
  rank = $(evt.target).attr("data-rank") || '';
  if(corp == "S" && searchType == "nav.lib") rank =  $(".listDoc a[data-resid='"+docId+"']").attr('data-rank');
  if ($(evt.target).hasClass('vivbold'))
    rank = $(evt.target).closest('a').attr('data-rank');
  srchId = srchId || '';
  start = start || '';
  if ( typeof resultsQid !== 'undefined') asrQid = resultsQid;
  else asrQid = getUrlParameters('qid')|| '';
  asrusrid = NTPT_PGEXTRA.split('=')[1].split('&')[0] === '-1'? window.userId : NTPT_PGEXTRA.split('=')[1].split('&')[0];
  if (searchType == 'nav.syn' || searchType =='nav.spell' || searchType =='nav.km' || searchType =='c.mlt' ||searchType =='c.rlt' || (searchType.indexOf("nav.ta") > -1)) {
    //userUniqueQueryId = CryptoJS.MD5( userId+ new Date().getTime()+'',"SOf06MVaS9m1R0D14EIk66YVN8m5wP3W");
    if(searchType !='nav.km' && searchType != 'nav.ta.analyst' && searchType != 'nav.ta.ki-doc' && searchType !='c.rlt' && searchType != 'nav.ta.conv' && searchType != 'nav.ta.bm' && searchType != 'nav.ta.vendors') cBack = cBack+'&qid='+resultsQid;
    if(searchType == 'nav.ta.analyst' || searchType == 'nav.ta.ki-doc' || searchType == 'nav.ta.vendors' ) cBack = cBack+'?qid='+resultsQid;
    if(searchType =='c.rlt' && typeof(serachEngineType) === 'undefined') cBack = cBack+'&qid='+resultsQid;
    $('#qid').val(resultsQid);
  } // typehead
  if (searchType == 'r.nav.lib' || searchType =='r.nav.print' || searchType =='r.nav.fwd' || searchType =='r.nav.pdf' ||searchType =='r.nav.attach') {
     srchId = (window.location.href.indexOf('refval')>-1)? getUrlParameters('refval') : -1;
     asrQid = getUrlParameters('qid')|| '';
  } //reader
  if(searchType === 'c.solr' || searchType === 'c'|| searchType === 'c.author') {
    asrQid = getUrlParameters('qid')|| '';
  } // all solr results in page
  if(searchType === 'c.vlp.vrating' || searchType === 'c.vlp.swot' || searchType === 'c.vlp.toolkits') {
    srchId = (window.location.href.indexOf('refval')>-1)? getUrlParameters('refval') : -1;
    asrQid = getUrlParameters('qid')|| '';
    if (debugMode) console.log('testing after refresh of page: ' + srchId);
  } // VLP page - Additional resources click events
  if(searchType == 'c.trends.click') {
    srchId = (window.location.href.indexOf('refval')>-1)? getUrlParameters('refval') : -1;
    if (debugMode) console.log('testing trends page: ' + srchId);
  } // Trends click events
  if(searchType.indexOf("nav.ta") > -1) {
    if(typeof(serachEngineType) !== 'undefined') {
     cdData = pageName;
   }
    else {
      cdData = 'default';
    }
  } //which channel user is on in typeahead
  if (searchType == 'c.all.kiProject' || searchType == 'c.all.kiRole') rank = $('a.linkBox').attr('data-rank');
  var asrSesId = asrSessionId ||'';
  var decodeQuery;
  try { 
    decodeQuery = decodeURIComponent(page_query); 
  } catch(e) { 
    decodeQuery = typeof(page_query) !== 'undefined' ? page_query : '';
  }
  var dataSent = {
    'cd' : cdData,
    'corp' : corp,
    'ct' : clickType,
    'ip' : userIp,
    'q' : decodeQuery,
    'r' : rank,
    'sid' : srchId,
    'start' :start,
    'time' : new Date().getTime(),
    'u' : asrusrid,
    'qid' : asrQid,
    'sessionId' : asrSesId,
    'url' : $(location).attr('href')
  };
  if (typeof docId != 'undefined') dataSent['res_id'] = docId;
  if (cBack != null) {
    dataSent['url'] = cBack;
    dataSent['ct'] = searchType || 'siteNav';
    if (searchType.indexOf("nav.ta") > -1)       dataSent['sid'] = -1;
    if (searchType == 'r.nav.pdf' && typeof meterChargeCheck !== 'undefined' && meterChargeCheck === "cancel") {
      $('.file-attachment li').each(function(index){
        if($(this).find('a').attr('href') == cBack)
        ind = index;
      });
    } // metered user for PDF
    if (searchType == 'nav.km'
        || (searchType == 'r.nav.pdf' && typeof attachmentsDocTypes == 'undefined')
        || (searchType == 'r.nav.pdf' && attachmentsDocTypes[ind] === '2' && typeof meterChargeCheck !== 'undefined' &&
            meterChargeCheck === "cancel")
        )
      window.open(cBack, "myNewPage").focus(); // metered user for PDF for new page
    if(searchType == 'c.peerInsight' || searchType == 'c.peerInsight.vendor' || searchType === 'c.peerconv'|| searchType === 'c.all.peerconv' || searchType == 'c.bm' || searchType == 'nav.ta.bm' || searchType == 'c.webinar' || searchType == 'c.analyst' || searchType == 'nav.ta.ki-doc' || searchType =='c.all.kiProject' || searchType =='c.all.kiRole' || searchType == 'c.all.kiProjectRelated') {
        $(evt.target).blur();
        popUpStopper = window.open(cBack,  '_blank').focus();
      } // new tab for clicks (same as below)
    if(searchType == 'c.event'|| searchType === 'c.all.event' || searchType == 'nav.ta.analyst' || searchType === 'c.all.analyst' || searchType === 'c.all.webinar' || searchType === 'c.peer' || searchType === 'c.all.peer' || searchType === 'c.itGlosorry' || searchType === 'c.vendor.PI'|| searchType === 'c.vlp.pi' || searchType === 'c.vlp.pc' || searchType == 'nav.scm.world' || searchType == 'nav.l2.world' || searchType == 'nav.icono.world') {
      $(evt.target).blur();
      popUpStopper = window.open(cBack,  '_blank').focus();
    } // new tab for clicks (same as above)
    if(searchType == 'nav.ta.conv' && !$('body').hasClass('ie')) { // this condition is added to solve the SI-1926.
      $(evt.target).blur();
      popUpStopper = window.open(cBack,  '_blank').focus();
    }

    window.focus();
    if(searchType != 'c.peerInsight' && searchType != 'c.peerInsight.vendor' && searchType != 'c.peerconv' && 
        searchType != 'c.all.peerconv' && searchType != 'c.bm' && searchType != 'nav.ta.bm' && 
        searchType != 'c.webinar' && searchType != 'c.analyst' && searchType != 'c.event' && 
        searchType != 'c.all.event' && searchType != 'nav.ta.analyst' && searchType != 'nav.ta.ki-doc' && 
        searchType != 'c.all.webinar' && searchType != 'c.all.analyst' && searchType != 'c.peer' && 
        searchType != 'c.all.peer' && searchType != 'c.itGlosorry' && searchType != 'c.vendor.PI' && 
        searchType != 'c.vlp.pi' && searchType != 'c.vlp.pc' && searchType !='c.all.kiProject' && 
        searchType !='c.all.kiRole' && searchType != 'c.all.kiProjectRelated'  && searchType != 'c.related' && searchType != 'nav.scm.world' &&
        searchType != 'nav.l2.world' && searchType != 'nav.icono.world'){
      $.ajax({ // to open in same tab if above not equal
        url: src,
        data: dataSent,
        type: 'GET',
        dataType : "jsonp",
        jsonp: false,
        cache: false,
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        complete: function (data) {
          if (searchType == 'nav.ta.title') window.location.href = cBack; // open the document

          else if (searchType == 'nav.ta.analyst') window.location.href = cBack; // open the document
          else if (searchType == 'nav.ta.ki-doc') window.location.href = cBack; // open the document
          else if (searchType == 'nav.ta.vendors') window.location.href = cBack; // open the document
          else if (searchType== 'nav.ta.bm') {}
          else if (searchType == 'nav.ta.conv' && $('body').hasClass('ie')) window.location.href = cBack; // // this condition is added to solve the SI-1926.
          else if (searchType == 'nav.ta.conv') {}
          else if (searchType== 'r.nav.fwd') {}
          else if (searchType== 'r.nav.print') {}
          else if (searchType== 'r.nav.attach') {}
          else if (searchType== 'r.nav.lib') {}
          else if (searchType== 'r.nav.pdf') {}
          else if (searchType.indexOf("nav.ta") > -1) submitSearch('gSearchForm','');
          else if (searchType == "r.nav.pdf" &&
                   attachmentsDocTypes[ind] === '2' &&
                    typeof meterChargeCheck !== 'undefined' &&
                     meterChargeCheck ==="cancel"){}
          else if (searchType == 'nav.km') window.open(cBack,"myNewPage").focus();
          //else if (searchType == 'c.dym' || searchType == 'c.bm') {}
          else if (searchType == 'c.dym') {}
          else if (searchType == 'c.bm') window.open(cBack,"myNewPage").focus();
          else window.location.href = cBack;
          window.focus();
        },
        success: function(data) {
          if (searchType == "r.nav.pdf")  {}
          else if (searchType == 'nav.km') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'c.bm') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'nav.ta.vendors') window.location.href = cBack; // open the document
          else if (searchType== 'nav.ta.bm'){
            cBack = cBack.split('&qid')[0];
           window.open(cBack,"myNewPage");
          }
           window.focus();
        },
        error: function (data) {
          if (searchType == "r.nav.pdf")  {}
          else if (searchType== 'r.nav.fwd') {}
          else if (searchType== 'r.nav.print') {}
          else if (searchType== 'r.nav.attach') {}
          else if (searchType== 'r.nav.lib') {}
          else if (searchType== 'r.nav.pdf') {}
          else if (searchType == 'nav.km') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'c.bm') window.open(cBack,"myNewPage").focus();
          else if (searchType == 'nav.ta.vendors') window.location.href = cBack; // open the document
          else if (searchType== 'nav.ta.bm'){
            cBack = cBack.split('&qid')[0];
           window.open(cBack,"myNewPage");
          }
           window.focus();
        }
      });
        // since asr is one way call, typeahead and search asr function must be outside of ajax in case of server outage
        // from complete
        // if (searchType == 'nav.ta.title') window.location.href = cBack; // open the document

        // else if (searchType == 'nav.ta.analyst') window.location.href = cBack; // open the document
        // else if (searchType == 'nav.ta.ki-doc') window.location.href = cBack; // open the document
        // else if (searchType == 'nav.ta.conv' && $('body').hasClass('ie')) window.location.href = cBack; // // this condition is added to solve the SI-1926.
        // else if (searchType== 'nav.ta.bm') {}
        // else if (searchType == 'nav.ta.conv') {}
        // else if (searchType.indexOf("nav.ta") > -1) submitSearch('gSearchForm','');
        // else if (searchType == "r.nav.pdf" &&
        //         attachmentsDocTypes[ind] === '2' &&
        //          typeof meterChargeCheck !== 'undefined' &&
        //          meterChargeCheck ==="cancel"){}
        // else if (searchType == 'nav.km') {}
        // else if (searchType == 'c.dym' || searchType == 'c.bm') {}
        // else window.location.href = cBack;

        // if (searchType == "r.nav.pdf" &&
        //           attachmentsDocTypes[ind] === '2' &&
        //          typeof meterChargeCheck !== 'undefined' &&
        //           meterChargeCheck ==="cancel")
        //    popUpStopper.location.href = cBack;
        //  else if (searchType == 'nav.km') window.open(cBack,"myNewPage").focus();
        //  else if (searchType == 'c.bm') window.open(cBack,"myNewPage").focus();
        //  else if (searchType== 'nav.ta.bm'){
        //    cBack = cBack.split('&qid')[0];
        //   window.open(cBack,"myNewPage");
        //  }
        //  window.focus();
    }
  else {
    $.ajax({
        url: src,
        data: dataSent,
        type: 'GET',
        dataType : "jsonp",
        cache: false,
        async: false,
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: function(data) {
        },
        error:       });
  }

  } else if (cBack == null) {
    $.ajax({
      url: src,
      data: dataSent,
      type: 'GET',
      dataType : "jsonp",
      jsonp: false,
      cache: true,
      crossDomain: true,
      contentType: "application/json; charset=utf-8"
    }); // $.ajax()
  } // end conditional
} // reportEvent(eventObj, cBack)

function __post(url,body,cb) {
  $.ajax({
    url: url,
    type:'POST',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(body),
    cache: false,
    success: cb
  })
}

function dwellTimeTrackV2( resId, dwellTime, viewType, scrollPercent, baseURL ) {
  var body = {resId:+resId,docViewTypCd:viewType,platformCd : 1,scrollPercent : scrollPercent}
  __post(baseURL + "/document/usage",body,function(data) {
      console.log(data)
  })
}

function dwellTimeTrack(userInteration,userUniqueId,docId,dwellType,scrollPercent) {
  var documentId = docId|| -1;
  var srchIdR = -1;
  var asrQid = getUrlParameters('qid');
  var asrSesId = asrSessionId ||'';
  var pageQ = '';
  var scrollPage = scrollPercent
  if (window.location.href.indexOf('ref')>-1 && (getUrlParameters('ref') == 'QuickSearch' || getUrlParameters('ref') == 'solrResearch' || getUrlParameters('ref') == 'solrAll') && window.location.href.indexOf('refval')>-1){
    srchIdR = getUrlParameters('refval');
  }
  if (!!asrQid && asrQid == resultsQid) pageQ = (typeof(page_query) !== 'undefined' ? page_query : '');
  var decodeQuery;
  try { 
    decodeQuery = decodeURIComponent(pageQ); 
  } catch(e) { 
    decodeQuery = pageQ;
  }
  
  var dtUserId = NTPT_PGEXTRA.split('=')[1].split('&')[0] === '-1'? window.userId : NTPT_PGEXTRA.split('=')[1].split('&')[0];
  var dataSent = {
    'corp' : corp,
    'ct' : dwellType,
    'ip' : userIp,
    'sid' : srchIdR,
    'cd' : new Date().getTime(),
    'start' :scrollPage,
    'u' : typeof dtUserId != 'undefined'?dtUserId:'-1',
    'url' : $(location).attr('href'),
    'userUnique' : userUniqueId,
    'userInteration' : userInteration,
    'res_id': documentId,
    'qid' : asrQid,
    'sessionId' : asrSesId,
    'q' : decodeQuery
  };
  var src = "//" + window.location.host + "/click";

  makeRequest('POST', src, dataSent)
  .then(
  .catch(;
} //dwellTimeTrack()

function makeRequest (method, url, data) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.withCredentials = true;
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.onload = 
    xhr.onerror = 
    xhr.send(parseObjectToURLSearchParams(data));
  });
}




function getUrlParameters(parameter,  decode){
  var currLocation = window.location.search, returnBool = true;
  if (currLocation.indexOf('?') > -1) {
    var parArr = currLocation.split("?")[1].split("&");
      returnBool = true;

    for (var i = 0; i < parArr.length; i++) {
        parr = parArr[i].split("=");
        if(parr[0] == parameter){
            var par = (decode) ? decodeURIComponent(parr[1]) : parr[1];
            if(par.indexOf('#') > -1)
                par = par.replace('#','');
            return par;
        }else{
            returnBool = false;
        }
    }
  }
  else
    return false;

 if(!returnBool) return false;
}
function limitTextLength(str , n) {
  var shortText ='';
  if (str.length > n) {
    shortText = str.substr(0, n);
    if (/^\S/.test(str.substr(n))) shortText = shortText.replace(/\s+\S*$/, "");
    shortText = shortText + ' ...';
  }
  else shortText = str;
  return shortText;
} //limitTextLength(n)
function bindInteractiveButton() {
  $('#document-hc-button').off('click');
  $('#document-hc-button').on('click', function(e) {
    //alert('clicked');
    e.preventDefault();
    e.stopPropagation();
    if ($('body').hasClass('ie') && $('body').hasClass('v-8')) {
      // For IE8 only, reinstantiate the document HC modal:
      $('#document-hc-modal').remove();
      $('body').append($('<div id="document-hc-modal" class="modal fade hype-cycle in" tabindex="-1" role="dialog" aria-hidden="false" style="display: block;" />'));
      $('#document-hc-modal').html($('#dhcm-content').val()).modal('show');
    } else $('#document-hc-modal').removeClass('hide').removeClass('fade').addClass('in').css('display', 'block').show();
    $('.modal-backdrop').remove();
    $('body').append('<div class="modal-backdrop in"></div>');
    activateHCmodal();
    bindDismissModal();
  });
}

function enumerateHandlers(selector) { // return event handlers for a given jQuery selector:
  var $elem = $(selector), buffer = [];
  for (var i = 0; i < $elem.length; i++) {
    var elemEvents = jQuery._data($elem[i],'events');
    if (!!elemEvents) buffer.push({
      'selector': selector + '['+i+']',
      'events': elemEvents
    });
  } // for (var i = 0; i < $elem.length; i++)
  if (buffer.length > 0) return buffer;
  return false;
} // enumerateHandlers(elem)

function enumerateLocalStorage() { // display the contents of the HTML5 LocalStorage API
  try {// EC-793
    if (debugMode) { // this feature is only for dev purposes and shouldn't be used in production!
      for(var x in localStorage)console.log(x+"="+((localStorage[x].length * 2)/1024/1024).toFixed(2)+" MB");
    } // if (debugMode)
  } catch (e) {}
} // enumerateLocalStorage()

function forceModalClosed() {
  saveAndQuitDHCM();
  $('.modal').removeClass('in').addClass('fade').addClass('hide').hide();
  $('.modal-backdrop').remove();
  $('a[data-toggle=modal]').modal('hide').show();
  $('a[href=#meterFormModal]').modal('hide').show();
  $('#meterFormModal').addClass('hide').removeClass('in').attr('aria-hidden', 'true').hide();
  $('a[href=#document-hc-modal]').modal('hide').show();
  $('#document-hc-modal').addClass('hide').removeClass('in').attr('aria-hidden', 'true').hide();
  $('#doc-body').animate({opacity: 1}, 500);
  $('.top-section').animate({opacity: 1}, 500);
  bindInteractiveButton();
  hideSpinner();
  $('.show-save-as').popover('destroy');
  $('body.explore.initiatives .toppicksflash object').show();
}

function saveAndQuitDHCM() {
  if (($('body').hasClass('reader') || $('body').hasClass('readerV2')) && $('body').hasClass('ie') && $('body').hasClass('v-8')) {
    if ($('#dhcm-content').length == 0 || $('#dhcm-content').val()=='') {
      $('#dhcm-content').remove();
      $('body').append($('<textarea id="dhcm-content"></textarea>'));
      $('#dhcm-content').val($('#document-hc-modal').html()).hide();
    }
    $('#document-hc-modal').remove();
    $('.modal-backdrop').remove();
  }
}

function bindDismissModal() {
  $('[data-dismiss=modal], [data-dismiss=modal] h5').off('click');
  $('[data-dismiss=modal], [data-dismiss=modal] h5').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    forceModalClosed();
  });
}

function bindCheckMarks() {
  $('input[type=checkbox][name=chkBx]').off('click').on('click', function(event) {
    event = event || window.event;
    event.stopPropagation();
    enableDisableButtons();
  });
}

function bindScrollPanel() {
  // does nothing
}

function bindToggleModals() {
  $('a[data-toggle="modal"]').on('click', function(event) {
    event = event || window.event;
    event.stopPropagation();
    $(this).modal('show');
    $($(this).attr('href')).removeClass('hide').removeClass('fade').css('z-index', '3500');
  });
}

function bindSaved() {
  $('.show-save-as .saved').each(function() {
    if (!$(this).parent().hasClass('library-tab') && !$(this).parents('#toolbar').length && !$(this).hasClass('reader-sprite')) $(this).html('<span>&nbsp;</span> Saved');
  });
  $('.show-save-as.saved, .show-save-as .saved').off('click').on('click', function (event) {
    hideAllPopups();

    var linkHandle = $(this);
    event = event || window.event;
    var target = event.target || event.srcElement;
    var tgtElType = target.nodeName.toLowerCase();
    if ($(target).parents('.savetoMyLibrary').length) return false;

    if (!$(target).hasClass('saved')) {
      target = $(target).parents('.saved')[0];
      if ($(target).hasClass('saved')) linkHandle = target;
    }

    if (!$(linkHandle).hasClass('saved')) {
      linkHandle = $(linkHandle).parents('.saved')[0];
      if ($(linkHandle).hasClass('saved')) target = linkHandle;
      else return false;
    }

    event.stopPropagation();
    event.preventDefault();
    var myPlacement = 'top';
    if ($(target).parents('article.span6').length != 0) myPlacement = 'top';
    if ($(target).hasClass('pop-right')) myPlacement = 'right';
    if ($(target).hasClass('pop-left')) myPlacement = 'left';
    if ($(target).hasClass('pop-bottom')) myPlacement = 'bottom';
    if ($(target).parents('#toolbar').length && $('body').hasClass('reader')) myPlacement = 'right';
    if (debugMode) console.log("bind saved!");

    // In which folder the document added to in the Library
    var docResId = $(this).attr('data-resid');
    ajaxRequest(docResId, linkHandle, myPlacement);
    // End $.ajax

  });
} // bindSaved()

function ajaxRequest(docResId, linkHandle, myPlacement){
    $.ajax({
      url: webContextRoot+'/library/getFolderName',
      type: 'GET',
      data: {resid: docResId},
    })
    .done(function(data) {
      var savedFolder = data.folderName;
      //var dataContent = errorMessageMap["library.document.added"] + ' "' + savedFolder + '"';
      var dataContent = errorMessageMap["library.document.added.pre"] + ' ' + savedFolder + ' ' + errorMessageMap["library.document.added.post"];
      $('.show-save-as.saved').popover('destroy');
      $('.show-save-as .saved').popover('destroy');
      showPopUp(linkHandle, myPlacement, dataContent);
    })
    .fail(function() {
    })
    .always(function() {
    });
}

function showPopUp(linkHandle, myPlacement, message) {
  $(linkHandle).attr(
    'data-content', message
  ).popover({
    html : true,
    trigger : 'manual',
    container : 'body',
    placement : myPlacement,
    template: '<div class="popover savedText"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
  }).popover('show');
}

function getScript(url, success, async, defer) {
  var debugMode = debugMode || Boolean(window.console && console && (Boolean(window.location.href.indexOf('wwwdvc.gartner')+1)||Boolean(window.location.href.indexOf('developer.gartner')+1))),
  script = document.createElement('script'),
  async = async || true,
  deferLoadFunc = function() {
    if (typeof defer === 'undefined') defer = false;
    script.src = url;
    script.type = 'text/javascript';
    if (async) script.async = true;
    if (defer) script.defer = true;
    var head = document.getElementsByTagName('head')[0], done = false;

    script.onload = script.onreadystatechange = function() { // Attach handlers for all browsers
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
        done = true;
        if (typeof success === 'function') success();
        script.onload = script.onreadystatechange = null;
        // if (debugMode) {
        //   console.log('Script fully loaded... removing now:');
        //   console.log(script);
        // }
        // document.body.removeChild(script);
      }
    };
    // if (debugMode) {
    //   console.log('Inserting script tag with async=' + async + ' and defer=' + defer + ':');
    //   console.log(script);
    // }
    document.body.appendChild(script);
  }; // deferLoadFunc()

  if (defer) { // Load a call AFTER all page resources are loaded:
    if (window.addEventListener) window.addEventListener('load', deferLoadFunc, false);
    else if (window.attachEvent) window.attachEvent('onload', deferLoadFunc);
    else window.onload = deferLoadFunc;
  } else if (async) setTimeout(deferLoadFunc, 57); // <-- don't defer, but keep it non-blocking
  else deferLoadFunc(); // <-- some calls actually WANT to be loaded sequentially
} // getScript(url, success)

function elementSupportsAttribute(element, attribute) {
  return attribute in document.createElement(element);
} // elementSupportsAttribute(element, attribute)

function stopProp(e) {
  try {
    e.stopPropagation();
    e.preventDefault();
  } catch (excep) { }
}


function hideAllPopups() {
  //if (!$('body').hasClass('ie')) console.log('global.js: hideAllPopups() called');
  hideMostPopups();
  $('#folderDiv').addClass('hidden');
  $("#searchDiv").hide();
  $("#sortFilter").addClass('hidden');
}

function hideMostPopups() {
  //if (!$('body').hasClass('ie')) console.log('global.js: hideMostPopups() called');
  //$('.save-as').each(function(){ $(this).addClass('hidden'); });
  $('.popover').parent().children('a').popover('hide').attr('aria-expanded','false');
  $('[rel="popover"], .pop-right').popover('hide');
  $('.show-save-as').popover('destroy');

  $(".browse-archive #pubDateList").hide("slow");
  bindSaved();
  /*
  $('.show-save-as').each(function () {
    if ($(this).hasClass('saved')) $(this).popover('hide');
    else $(this).popover('destroy');
  });
*/
}


function trimAll(sString) {
  if (typeof(sString)==="undefined"||(!sString)) return '';
  while(sString.substring(0,1) == ' ' || sString.substring(0,1) == '\r' || sString.substring(0,1) == '\n')
  {
    sString = sString.substring(1, sString.length);
  }
  while (sString.substring(sString.length-1, sString.length) == ' ' || sString.substring(sString.length-1, sString.length) == '\r' || sString.substring(sString.length-1, sString.length) == '\n')
  {
    sString = sString.substring(0,sString.length-1);
  }
  return sString;
}

function bindJspDrag() {
  $('.jspDrag').off('click');
  $('.jspDrag').on('click', function(e) {
    e.stopPropagation();
//    if (!$('body').hasClass('ie')) console.log(e.target);
  });
  $('.jspContainer').off('click');
  $('.jspContainer').on('click', function(e) {
    e.stopPropagation();
//    if (!$('body').hasClass('ie')) console.log(e.target);
  });
}

function openOrCloseDiv(objectId) {
  if($('#'+objectId).css('display') == "none" || $('#'+objectId).css('display') == '') {
    $('#'+objectId).css('display', 'block');
    $('#'+objectId).removeClass('hidden');
  } else {
    $('#'+objectId).css('display', 'block');
    $('#'+objectId).toggleClass('hidden');
  }
}

function openDiv(objectId) {
  if (typeof objectId === "undefined") return false;
  var tgtObj = document.getElementById(objectId);
  if (!tgtObj) return false;
  $('#'+objectId).css('display', 'block');
  $('#'+objectId).removeClass('hidden');
  tgtObj.style.display = 'inline-block';
  setTimeout(function () { tgtObj.style.display = 'block'; }, 0); // bug fix for webkit; see: stackoverflow.com/questions/3485365
  return true;
} // openDiv(objectId)

function closeDiv(objectId) {
  if (typeof objectId === "undefined") return false;
  var tgtObj = document.getElementById(objectId);
  if (!tgtObj) return false;
  $('#'+objectId).css('display', 'block');
  $('#'+objectId).addClass('hidden');
  tgtObj.style.display = 'inline-block';
  // tgtObj.offsetHeight;
  setTimeout( 0); // bug fix for webkit; see: stackoverflow.com/questions/3485365
  return true;
} // closeDiv(objectId)

function showDiv(divElement) {
  $('div[id^='+divElement+']').show();
}

function hideDiv(divElem) {
  $('div[id^='+divElem+']').hide();
}

function editContents(divElement) {
  $('div[id^='+divElement+']').show();
  $('div[id^="editContentLink"]').hide();
  $('div[id^="chkBoxDiv_"]').show();
}

function cancel(divElement) {
  $('div[id^='+divElement+']').hide();
}

function isInLibrary(resId) {
  var returnVal = false;
  $.ajax({
    cache: false,
    type: 'GET',
    url: webContextRoot+'/library/resources/isInLibrary',
    data: {resid : resId },
    success: function(isInLibrary) {
      if(isInLibrary){
        $('div[id^="inLibrary"]').show();
        returnVal = true;
      } else $('div[id^="notInLibrary"]').show();
    }
  });
  return returnVal;
}

function markSaved(resId, markId) {
  if (!($('body').hasClass('ie') && $('body').hasClass('v-8'))) {
    $.ajax({
      cache: false,
      type: 'GET',
      async: false,
      url: webContextRoot+'/library/resources/saveToLibrary',
      data: {resid : resId},
      success: function(displayHTML) {
        if (displayHTML.indexOf('already been saved') === -1) {
          $(markId).removeClass('saved');
          $('.show-save-as[data-resid="'+resId+'"]').each(function () {
            if ($(this).find('a[data-resid]')) $(this).find('a[data-resid]').removeClass('saved');
            else if (!$(this).parents('.savetoMyLibrary').length) {
              $(this).removeClass('saved');
              if (!$(this).parent().hasClass('library-tab') && !$(this).parents('#toolbar').length && !$(this).hasClass('reader-sprite')) $(this).html('<span>&nbsp;</span> Add');
            }
          });
        } else {
          $(markId).addClass('saved');
          if (debugMode) console.log("mark saved!");
          $('.show-save-as[data-resid="'+resId+'"]').each(function () {
            if ($(this).find('a[data-resid]')) $(this).find('a[data-resid]').addClass('saved');
            else if (!$(this).parents('.savetoMyLibrary').length) {
              $(this).addClass('saved');
              if (!$(this).parent().hasClass('library-tab') && !$(this).parents('#toolbar').length && !$(this).hasClass('reader-sprite')) $(this).html('<span>&nbsp;</span> Saved');
            }
            $('.share-library-scroll .share-link').removeClass('saved').html('<span>&nbsp;</span> Share');
          });
          $('.reader #toolbar .saved').popover('destroy');
        }
      }
    });
  } // end if body not has class ie && v-8
}

function showMyProfile(el) {
  var link = $(el);
  try {
    if ($('.navMyProfile').length > 0 && (typeof isSiteSearch === "undefined" || !isSiteSearch)) $.ajax(
      {
        type: 'GET',
        cache: false,
        dataType : "html",
        url: webContextRoot + '/nav/profile',        
        success: function(displayHTML) {          
          hideMostPopups();
          link.attr('aria-expanded', 'true', 'rel', 'popover');
          link.attr(
            'data-content', displayHTML
          ).popover('destroy').popover({
            html : true,
            trigger : 'manual',
            animation: true,
            placement : 'bottom',
            template: '<div class="popover profilePop"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
          }).popover('show');
          
          $('.navMyProfile').bind('keydown', function (e) {
            if (e.which == 27) {
              e.stopPropagation();
              e.preventDefault();
              link.popover('hide');
              $(this).focus();
              link.attr('aria-expanded', 'false');
            }
          });
          $('.sign-out').bind('keydown', function(e) {
            if (e.which == 9) {
              e.stopPropagation();
              e.preventDefault();
              $('.navMyProfile > a').focus();
            }
          });
        },
        error:       }
    );
  } catch (excep) { }

}

function toggleCheck(checkbox, divElement){
  if(checkbox.checked){
    document.getElementById(divElement).className='checked';
  } else {
    document.getElementById(divElement).className='';
  }
}

function showLi(divElement){
  $('li[id^='+divElement+']').show();
  $('.save-as').removeClass('hidden');
}

function addToNewFolder(event, resId) {
  event.stopPropagation();
  event.preventDefault();

  addToFolder(resId);

}

function hideNewFolder(event, divElem) {

  event.stopPropagation();
  event.preventDefault();

  $('#'+divElem).css('display','none');

}

function hideLi(event, divElem) {
  $('li[id^='+divElem+']').hide();
  $(divElem).hide();
}

// for "add" to library popover hidden input field
function showDivThatsHidden(divElement){
  $('div[id^='+divElement+']').show();
  $('.save-as').removeClass('hidden');
}


function saveToLib(divId, resId, popAngle, elem) {
  if (typeof "elem" === undefined) {
    var elem;
    if ($('a.id-'+resId).length) elem = $('a.id-'+resId);
    else elem = $('a[data-resId='+resId+']');
  }
  $('.popover.in').remove();
  hideAllPopups();
  if (typeof popAngle === undefined) var popAngle;
  var winPos = $(window).scrollTop();
  //if (popAngle != 'top' && popAngle != 'left' && popAngle != 'bottom') popAngle = 'right';
  var saveAsId="saveAs_"+resId;
  $.ajax({
    cache: false,
    type: 'GET',
    url: webContextRoot+'/library/resources/saveToLibrary',
    data: {resid : resId },
    success: function(displayHTML) {
      //console.log(displayHTML);
        //$('div[id^='+divId+']').removeClass('hidden');
        //$('div[id^='+divId+']').html(displayHTML);
      //console.log(displayHTML);
      if ($(elem).hasClass('pop-top')) popAngle = 'top';
      else if ($(elem).hasClass('pop-left')) popAngle = 'left';
      else if ($(elem).hasClass('pop-bottom')) popAngle = 'bottom';
      else popAngle = 'right';
      if (debugMode) console.log('saveToLib() popover at ' + popAngle);
      
      var popoverOptions = {
        html: true,
        trigger: 'manual',
        content: displayHTML,
        placement: popAngle,
        template: '<div class="popover saveToLib"><div class="arrow"></div><div class="popover-inner"><div class="popover-content" tabindex="0"></div></div></div>'
      };

      if($(elem).hasClass('body-container'))
          popoverOptions.container = 'body';

      $(elem).popover(popoverOptions);
      if ($('.homeslider').length) $('.homeslider').flexslider('pause');
      $(elem).popover('show');
    //  console.log(displayHTML + "  inside of it ");
      $(elem).find('.popover-title').remove();
      //markSaved(resId);

      $(".popover-content").bind('keydown', function (e) {
        if (e.which == 27) {
          $(elem).popover('hide');
          $(elem).focus();
        }
      });

      $(".popover-content").focus();
      bindAddToLibrary();
      $(window).scrollTop(winPos);
      bindNewFolderButton();
      bindJspDrag();
    },

    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("Error: Save To Lib request failed. Please contact your web administrator");
    },


    complete: function(){
      if (
        !$('body').hasClass('explore') &&  // if we are anywhere BUT explore...
        !($('body').hasClass('ie') && $('body').hasClass('v-8')) // ... and NOT on IE8...
      ) { // ... then we can execute jScrollPane without issues:
        $('.popover.in .scroll-pane').jScrollPane();
        bindJspDrag();
      }
      $(window).scrollTop(winPos); // Scroll to top of page (either way)
    }
  });
  $(window).scrollTop(winPos);
}


$('.pop-container li, .pop-container input').click(function(e){
  e.stopPropagation();
  e.preventDefault();
});

$('.save-as li, .save-as a').off('click').on('click', function(e) {
//  if (!$('body').hasClass('ie')) console.log(e.target);
  var resId = $(this).parents('.save-as').attr('data-resId');
  e.stopPropagation();
  e.preventDefault();
  bindNewFolderButton();
});

function setSelectedFolderInfo(folderId,folderName) {
  $("#newFolder").val("");
  $("#selectedFolderId").val(folderId);
  $("#selectedFolderName").val(folderName);
}

function changeColorForList(folderName){
  var checkIEBrowser = navigator.userAgent.toLowerCase().indexOf('msie');

  var list = document.getElementsByTagName('li');

  if(checkIEBrowser > -1){
    for(var i = 0; i < list.length; i++){
      var value = list[i].title;

      if(value == folderName){
        list[i].style.setAttribute("cssText", "font-weight: bold");
      } else {
        list[i].style.setAttribute("cssText", "font-weight: normal");
      }
    }
  } else {
    for(var i = 0; i < list.length; i++){
      var value = list[i].title;

      if(value == folderName){
        list[i].setAttribute("style", "font-weight: bold");
      }else {
        list[i].setAttribute("style", "font-weight: normal");
      }
    }
  }
}

function bindNewFolderButton() {
  $('.new_button').off('click').on('click', function(event) {
    event = event || window.event;
    //reportEvent(event);
    newFolder(event);
  });
}

function newFolder(event) {
  event = event || window.event;
  try {
    event.stopPropagation();
  } catch (excep) { }
  try {
    event.preventDefault();
  } catch (excep) { }
  showLi('newFldDiv');
  showDivThatsHidden('newFldDiv');
  bindNewFolderClicks();
  try {
    $('#reading-history-toggle').blur();
    $('#newFldDiv input').focus();
  } catch (excep) { }
}

function bindHelpClick() {
  $('.navHelp a').off('click');
  $('.navHelp a').on('click', ;
}
// making this a global variable so it can be accessed by addToLibFolder, but also reset in .ftl with spring tag in necessary
// to reset this value, a new value for maximumLibItems will need to be added after global.js is called
var maximumLibItems = "You have reached the maximum number of library items allowed. To save this item to your library, you must delete at least one existing library item.";

function addToFolder(resId) {
  var folderId = $("#selectedFolderId").val();
  var folderName = $("#selectedFolderName").val();
  if ($('body').hasClass('reader') || $('body').hasClass('readerV2') || $('body').hasClass('magicQuadrant')){
    if (typeof docId === 'undefined') docId = resId || $(this).attr('data-resid');
    var event = window.event || arguments.callee.caller.arguments[0];
    //reportEvent(event,null,'r.nav.lib',docId);
  }
  if ($('body').hasClass('search')){
    var event = window.event || arguments.callee.caller.arguments[0];
    reportEvent(event,null,'nav.lib',resId); // Add reporting function here
  }
  if(folderId == "" && folderName == ""){
    var newFolderName = $("#newFolder").val();
    var isNewFolderValid = validateNewFolder(newFolderName);
    if(!isNewFolderValid){
      return false;
    }
    return addToLibFolder(resId, newFolderName, "", true);
    // return addToLibFolder(resId, newFolderName, "", false);
  } else {
    return addToLibFolder(resId, folderName, folderId, false);
  }
}

function addToLibFolder(resId, folderName, folderId, isNewFolder) {
  //folderName = folderName.toLowerCase();

  $('#userFolderList_'+resId).addClass('hidden');

  $.ajax({
    type: 'POST',
    cache: false,
    url: webContextRoot+'/library/resources/addToFolder',
    data: {resid : resId, name : folderName, id : folderId, isnewfolder : isNewFolder},
    success: function(data, textStatus, xhr) {
      $('a[data-resid='+resId+'], .id-'+resId).addClass('saved');
      $('.docOptions .show-save-as[data-resid='+resId+']').addClass('saved').html('<span>&nbsp;</span> SAVED');
      $('.share-library-scroll .save-link a[data-resid='+resId+'], .share-library-scroll a[data-resid='+resId+'].show-save-as').addClass('saved').html('<span>&nbsp;</span> Saved');
      $('.action-section .save-link a[data-resid='+resId+']').addClass('saved').html('<span class="icon-add_to_library"></span> Saved');
      $('.share-library-scroll .share-link').removeClass('saved').html('<span>&nbsp;</span> Share');
      //      markSaved(resId);
      $('.vendorTopic #vendorResults .resultTopic .Docitem a[data-resid='+resId+']').html('<span>&nbsp;</span> ADDED ');
      $('.reader #toolbar .saved').popover('destroy');
      $('.saveToLib').remove();

      bindSaved();
      // test for responseText SyntaxError: JSON.parse: unexpected character - seano 20150107
      //console.log('textStatus = ');
      //console.log(textStatus);
      var jsonResponse = JSON.parse(xhr.responseText);
      //console.log('jsonResponse = ');
     // console.log(jsonResponse);
      if(typeof jsonResponse.error !== 'undefined'){
        var jrErrorText = jsonResponse.error;
        var ntext = jrErrorText.indexOf("maximum library");
        if (jsonResponse.status == "fail") {

          if (ntext == 9){
            alert(maximumLibItems); // maximumLibItems is a js var that can be reset in ftl with spring value (see above)
          } else {
            alert(jsonResponse.error);
          }
        }
      }
    },

    error: 

    complete: function(xhr, textStatus) {
          //$('div[id^="inLibrary"]').show();
          //$('div[id^="notInLibrary"]').hide();
          //$('div[id^="userFolderList_'+resId+'"]').hide();
      
      var libraryWidgets = $('.show-save-as').find('[data-resid="'+resId+'"]');
      libraryWidgets.each(function(library) {
        $(library).find('a').popover('hide');
        if($(library).parent().hasClass('savetoMyLibrary')) {
          $(library).parent().html('<i class="button-selectedLibrary"></i>');
        }
      });

      if ($('body').hasClass('ie') && $('body').hasClass('v-8')) $('#reading-history-content').collapse('hide');
    }
  });
  hideMostPopups();

  return false;
}

function validateNewFolder(newFolderName){
  var isExistingFolder = false;
  var folderName = trim(newFolderName);
  if (!validateFolderName(folderName)) return false;

  isExistingFolder = inExistingFolderList(folderName);

  if(isExistingFolder) {
    alert(errorMessageMap["library.folder.error.name.reserved1"]+folderName + " "+errorMessageMap["library.folder.error.name.reserved2"]);
    return false;
  }
  return true;
}

function validateFolderName(folderName) {
  // check to see if the folder name is empty
  if(folderName == null || trimAll(folderName).length == 0 || trimAll(folderName).toLowerCase() == "+ new folder") {
    //alert("Please select the folder or enter the folder name.");
    alert(errorMessageMap["library.folder.error.name.empty"]);
    return false;
  }

  folderName = folderName.toLowerCase();
  // check to see if the user has mixed folder with ; as well as with ,
  if(folderName.indexOf(";") != -1 || folderName.indexOf(",") != -1)
  {
    alert(errorMessageMap["library.folder.error.name.specchar"]);
    return false;
  }

  if(folderName == 'documents accessed' || folderName == 'all documents' || folderName == 'team library' || folderName == 'purchased' || folderName == 'unfiled' || folderName == 'shared research' || folderName == 'mobile app saves'){
    alert(errorMessageMap["library.folder.error.name.reserved1"]+folderName.toUpperCase() + " "+errorMessageMap["library.folder.error.name.reserved2"]);
    return false;
  }

  if(validate(trimAll(folderName))) return true;
  else {
    alert(errorMessageMap["library.folder.error.name.valid"]);
    return false;
  }
}

function validate(str) {
  if(str == "unfiled") return false;
  var pattern = /^[\sa-zA-Z0-9-_]+$/;
  if (!pattern.test(str)) return false;
  return true;
}

function inExistingFolderList(folderName) {
  folderName = trim(folderName.toUpperCase());
  var list = document.getElementsByTagName('li');
  for(var i = 0; i < list.length; i++){
    var value = list[i].title;
    value = value.toUpperCase();
    if(value == folderName) return true;
  }
  return false;
}

function enableDisableButtons() {
  hideAllPopups();
  if ($('input[type=checkbox][name=chkBx]:checked').length) { // True if anything is checked:
    $('#btn-addTo').addClass("active");
    $('#btn-delete').addClass("active").attr('href', '#deleteModal');
    $('#btn-delete').attr('data-toggle', '').off('click').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      //bindDismissModals();
      deleteDocFromLib();
    });
    //$('#btn-delete').removeAttr("data-toggle");
  } else { // Nothing is checked:
    $('#btn-addTo').removeClass("active");
    $('#btn-delete').removeClass("active").attr('href', '#');
    $('#btn-delete').attr('data-toggle', 'modal').off('click').on('click', function(e) {
      e.stopPropagation();
    });
  }
}

function deleteDocFromLib() {
  var delResourceIds= $(':checkbox[name^="chkBx"]:checked').map(function(){
    return this.value;
  }).get();

  var delSharedResourceIds= $(':checkbox[name^="chkBx"]:checked').map(.get();


  if ($('#fldrNm').text() === "Shared Research") {

    var folderId = $('#fldrNm').attr('data-folder-id');
    // if (folderId === "All Documents") folderId = -1;

    $.ajax({
      type: 'GET',
      cache: false,
      url: app+'library/resources/hasSharedResearchDeleteAccess',
      //data: {delResourceId : delResourceIds.toString(), id : folderId},
      data: {delSharedResourceId : delSharedResourceIds.toString(), id : folderId},
      dataType: "html",
      success: function(htmlVal) {
        //console.log("in");
        //console.log("delSharedResourceId: " + delSharedResourceId);
        //console.log("id: " + id);
        if (htmlVal === 'false') { // if false user doesnt have access to delete doc
          //alert(cantDeleteSharedDoc);
          $('div#deleteModal').hide();
          $('div#accessModal').modal('show').show();
          return false;
        } else {
          // Show delete modal:
          $('#btn-delete').modal('show');
          $('.modal-backdrop').remove();
          $('body').append($('<div class="modal-backdrop" />'));
          $('#deleteModal').addClass('in').removeClass('hidden').show().css('z-index', '3501');
          bindDismissModals();
        }
      }
    });
  } else {
    // Show delete modal:
    $('#btn-delete').modal('show');
    $('.modal-backdrop').remove();
    $('body').append($('<div class="modal-backdrop" />'));
    $('#deleteModal').addClass('in').removeClass('hidden').show().css('z-index', '3501');
    bindDismissModals();
  }
}

function bindEmailOpenIt(){
  $('.modal-footer .btn-link').off('click').on('click', ;
}

function bindBodyClick() {
  $('html').off('click');
  $('html').on('click', function(event){
    event = event || window.event;
    var target = event.target || event.srcElement;
    // DOC CLICK DEBUGGING:
   // if (!$('body').hasClass('ie')) console.log(target);
    var tgtElType = target.nodeName.toLowerCase();
    if (tgtElType != 'a') {
      if (tgtElType != 'li') $('.show-save-as').popover('hide');
      try {
        /* Click boolean debugging:
          console.log('1: ' + !($(target).hasClass('sprite')));
          console.log('2: ' + !$(target).parents().hasClass('popover'));
          console.log('3: ' + !($(target).parents('[rel="popover"]').length));
          console.log('4: ' + !($(target).parents('button').length));
          console.log('5: ' + !($(target).parents('a').length));
        */
        if (
          !($(target).hasClass('sprite')) &&
          !$(target).parents().hasClass('popover') &&
          !($(target).parents('[rel="popover"]').length) &&
          !($(target).parents('button').length) &&
          !($(target).parents('a').length) &&
          tgtElType !== "a" &&
          tgtElType !== "button"
        ) hideMostPopups();
        else { // Not hiding popups:
          if ($(target).parents('[rel="popover"]').length) $(target).parents('[rel="popover"]').popover('show');
        }
      } catch (excep) {
        if ($(target).parents('[rel="popover"]').length) $(target).parents('[rel="popover"]').popover('show');
      }

      if (typeof target.className === "string" && target.className !== "popout" && target.className.indexOf("arrow")==-1) {
        if (!$('#sortFilter').hasClass('hidden')) {
          $("#sortFilter").addClass('hidden'); // sort and search layer
        }
      }

      if (typeof target.className !== "undefined" && target.className !== "btn-search popout" && target.className !=="noclass") {
        if ($('#searchDiv').is(':visible')) {
          $("#searchDiv").hide();
        }
      }
      $("#sortFilter").css('display', 'block');
    } // End if target.nodeName != 'a'
    bindSaved();
  });
}

function showSaveAs(tgt) {

  setTimeout(function () {
    $('.addToMyLibrary').focus();
  }, 0);
  
  var popAngle = 'top';
  if ($(tgt).hasClass('pop-right')) popAngle = 'right';
  if ($(tgt).hasClass('pop-left')) popAngle = 'left';
  if ($(tgt).hasClass('pop-bottom')) popAngle = 'bottom';
  var resId = $(tgt).attr('data-resId');
  var dialogHidden = $('#userFolderList_'+resId).hasClass('hidden');
  if (!($(tgt).hasClass('saved'))) {
    hideAllPopups();
    setTimeout(function() {
      saveToLib('userFolderList_'+resId,resId,popAngle,tgt);
      bindJspDrag();
    }, 50);
  }
  bindNewFolderButton();
  bindNewFolderClicks();
  bindJspDrag();
}

function newFolderKeyUp(event) {
  event = event || window.event;
  try {
    event.stopPropagation();
  } catch(excep) { }
  var resourceId = $('#newFolder').attr('data-resid');
  if (event.keyCode == 13) addToFolder(resourceId);
}

function bindNewFolderClicks() {
  $('#newFolder').off('click').on('click', ;
  $('#newFolder').off('keydown').on('keydown', function(event) {
    event = event || window.event;
    newFolderKeyUp(event);
  });
}

function bindHeaderSearch() {
  $('.iconsearch').off('click');
  $('.iconsearch').on('click', function(e) {
    e.stopPropagation();
    var userUniqueQueryId = CryptoJS.MD5( userId+ new Date().getTime()+'',"SOf06MVaS9m1R0D14EIk66YVN8m5wP3W");
    $('#qid').val(userUniqueQueryId.toString());
    $('#features .searchform').submit();
  });
}

function bindFontChanger() {
  $('.change-font .popover-content a').off('click');
  $('.change-font .popover-content a').on('click', function(e) {
    e.stopPropagation();

  });
}

function bindShowSaveAs() { // Reader Saved to the Library
  $('.show-save-as').off('click');
  $(document).on('click','.show-save-as', function(e) { // Please dont remove this Document.on click action. We need this for the Search page.
    e.stopPropagation();
    e.preventDefault();
    hideAllPopups();
    //reportEvent(e,null,'saveToLib');
    var popPlacement = 'right';
    if ($(this).parents('li').hasClass('library-tab')) popPlacement = 'bottom';
//    if (!$('body').hasClass('ie')) console.log(e.target);
    if (!$(e.target).hasClass('jspDrag')) {
      var tgt;
      if ($(this).children('a').length) tgt = $(this).children('a');
      else tgt = $(this);
      if (($(tgt).hasClass('saved'))) { // Show popover for saved item:
        $(tgt).attr(
          'data-content', errorMessageMap["library.document.added"]
        ).popover({
          html : true,
          trigger : 'manual',
          placement : popPlacement,
          container : 'body',
          template: '<div class="popover showSaveAs"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"></div></div></div>'
        }).popover('show');
        $('.reader .popover.showSaveAs').css('margin-top', '140px');
        $('.popover-content p').css('color', '#ccc');
      } else showSaveAs(tgt);
    }
  });
  
  $('.show-save-as').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    hideAllPopups();
    var popPlacement = 'right';
    if ($(this).parents('li').hasClass('library-tab')) popPlacement = 'bottom';

    if (!$(e.target).hasClass('jspDrag')) {
      var tgt;
      if ($(this).children('a').length) tgt = $(this).children('a');
      else tgt = $(this);
      if (($(tgt).hasClass('saved'))) { // Show popover for saved item:
        var docResId = $(this).attr('data-resid');
        ajaxRequest(docResId, tgt, popPlacement);
      } else showSaveAs(tgt);
    }
    
  });
  

}

function genericSpinner() {/*
<div style="background: none repeat scroll 0 0 transparent; border: none; display: block; height: 40%; left: 0; margin: 0 auto; opacity: 0.72; position: fixed; text-align: center; top: 40%; width: 100%; z-index: 5001;">
  <img src="${imageserver}/apps/gproduct/images/spinner.gif" alt="Please wait..." style="height: 100px; width: 100px;" />
</div>
*/}

// checkForProxy()

function hereDoc(func) {
  return func.toString().split(/\n/).slice(1, -1).join('\n').replace("//imagesrv_dvc.gartner.com/apps", imageServer).replace("${imageserver}", imageServer).replace("apps/apps/", "apps/").replace("< /script>","</script>");
}

function profileContent() {/*
<section class="sans-serif profile-box">
  <img alt="User Profile Picture" src="//imagesrv_dvc.gartner.com/apps/gproduct/images/user/default.gif" />
  <h4 class="condensed bold">Unknown User</h4>
  <h5 class="condensed">Please log out and back in.</h5>
  <aside class="sign-out">
    <a href="/login/logoff.do" title="Click here to sign off from your account.">Sign out <fn class="right-arrow">&nbsp;</fn></a>
  </aside>
</section>
*/}

function bindProfilePop() {
  $('.navMyProfile a').off('click');
  $('.navMyProfile a').on('click', ; // end mouseenter code for 'a' element
}

function bindSortPopover() {
  $('#sortPopover').off('click');
  $('#sortPopover').on('click', ;
  $('#sortPopover i.greyArrowDown').off('click');
  $('#sortPopover i.greyArrowDown').on('click', ;
  $('.sortContent strong').off('click');
  $('.sortContent strong').on('click',function(e) {
    e.stopPropagation();
    $('#sortPopover i.greyArrowDown').parent().popover('show');
  });
}

function bindAddToLibrary() {
  $('.folder, .folder-b').off('click');
  
  var folder = $('.folder');

  folder.bind('keydown', function(e) {
    if (e.which == 13) {
      e.stopPropagation();
      setSelectedFolderInfo($(this).attr('data-folderid'), $(this).attr('data-foldername'));
      addToFolder($(this).attr('data-resid'));
    }
  });

  /* For 508 compliance must "trap" tab function. on last element return to first element in Dialog */
  folder.last().bind('keydown', ;

  folder.on('click', function(e) {
    e.stopPropagation();
    setSelectedFolderInfo($(this).attr('data-folderid'), $(this).attr('data-foldername'));
    //if ($('body').hasClass('reader') && typeof docId === 'undefined') docId = $(this).attr('data-resid');
    //if ($('body').hasClass('reader')) reportEvent(e,null,'r.nav.lib',docId);
    //if ($('body').hasClass('search')) reportEvent(e,null,'nav.lib',$(this).attr('data-resid')); // Add reporting function here
    addToFolder($(this).attr('data-resid'));
  });

  $('.folder-b').on('click', function(e) {
    e.stopPropagation();
    addItems($(this).attr('data-folderid'), $(this).attr('data-foldername'));
    if (($('body').hasClass('reader') || $('body').hasClass('readerV2') || $('body').hasClass('magicQuadrant') )&& typeof docId === 'undefined') docId = $(this).attr('data-resid');
    if ($('body').hasClass('reader') || $('body').hasClass('readerV2') || $('body').hasClass('magicQuadrant')) reportEvent(e,null,'r.nav.lib',docId);
    if ($('body').hasClass('search')) reportEvent(e,null,'nav.lib',$(this).attr('data-resid')); // Add reporting function here
  });

}

function setAnalystProfileRightRailHeight() {
  if ($(window).width() < 780) $('.analystprofile .right.rail').css('height', 'auto');
  else {
    $('.analystprofile .right.rail').css(
      'height', $('#content').height()-30 + 'px'
    ).css(
      'padding-bottom', '0px'
    );
  }
  $(window).resize(function() {
    var contentHeight = $('#content').height();
    if ($(window).width() < 780) $('.analystprofile .right.rail').css('height', 'auto');
    else {
      if ($('.analystprofile .right.rail').height() != (contentHeight - 30)) $('.analystprofile .right.rail').css('height', (contentHeight - 30) + 'px');
    }
  });
}

function applyUserAgentClasses() { // jQuery.browser emulated for jQ 1.9+ support
  jQuery.browser = {};
  jQuery.browser.mozilla = false;
  jQuery.browser.webkit = false;
  jQuery.browser.opera = false;
  jQuery.browser.msie = false;

  var nAgt = navigator.userAgent;
  jQuery.browser.name  = navigator.appName;
  jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
  jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
  var nameOffset,verOffset,ix;

  // As usual, MSIE has to be a unique and special snowflake (IE11 has new UA strings)
  if (
    nAgt.indexOf("Mozilla")!=-1 &&
    nAgt.indexOf("Trident")!=-1 &&
    nAgt.indexOf("rv:11")!=-1 &&
    nAgt.indexOf("like Gecko")!=-1 &&
    nAgt.indexOf("Windows")!=-1
  ) { // This is almost certainly IE11, although it's harder to be certain anymore:
    verOffset = nAgt.indexOf("rv:") + 3;
    jQuery.browser.msie = true;
    jQuery.browser.name = "Microsoft Internet Explorer";
    jQuery.browser.fullVersion = nAgt.substring(verOffset);
    jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, jQuery.browser.fullVersion.indexOf(")"));
    $('body').addClass('windows').addClass('ie').addClass('v-11');
    if (jQuery.browser.fullVersion >= 11) maxConcurrentRequests = 13;
    else if (jQuery.browser.fullVersion >= 10) maxConcurrentRequests = 8;
  }
  // In Opera, the true version is after "Opera" or after "Version"
  else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
    jQuery.browser.opera = true;
    jQuery.browser.name = "Opera";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
      jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
    if (jQuery.browser.fullVersion >= 10) maxConcurrentRequests = 8;
    else maxConcurrentRequests = 4;
  }
  // In MSIE, the true version is after "MSIE" in userAgent
  else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    jQuery.browser.msie = true;
    jQuery.browser.name = "Microsoft Internet Explorer";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
    if (jQuery.browser.fullVersion >= 11) maxConcurrentRequests = 13;
    else if (jQuery.browser.fullVersion >= 10) maxConcurrentRequests = 8;
    else if (jQuery.browser.fullVersion < 8) maxConcurrentRequests = 2;
    else maxConcurrentRequests = 6;
  }
  // In Chrome, the true version is after "Chrome"
  else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    jQuery.browser.webkit = true;
    jQuery.browser.chrome = true;
    jQuery.browser.name = "Chrome";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
  }
  // In Safari, the true version is after "Safari" or after "Version"
  else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    jQuery.browser.webkit = true;
    jQuery.browser.name = "Safari";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
      jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
  }
  // In Firefox, the true version is after "Firefox"
  else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    jQuery.browser.mozilla = true;
    jQuery.browser.name = "Firefox";
    jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
  }
  // In most other browsers, "name/version" is at the end of userAgent
  else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
      (verOffset=nAgt.lastIndexOf('/')) )
  {
    jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
    jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
    if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
      jQuery.browser.name = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
    jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
  if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
    jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

  jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
  if (isNaN(jQuery.browser.majorVersion)) {
    jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
    jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
  }
  jQuery.browser.version = jQuery.browser.majorVersion;

  jQuery.each(jQuery.browser, function(i) {
    if ($.browser.webkit) $('body').addClass('webkit');
    if ($.browser.msie) $('body').addClass('ie');
    if ($.browser.mozilla) $('body').addClass('mozilla');
    if ($.browser.opera) $('body').addClass('opera');
    if ($.browser.chrome) $('body').addClass('chrome');
    else if ($.browser.webkit) { // Safari requires special attention:
      $('body').addClass('safari');
      jQuery.browser.safari = true;
      jQuery.browser.name = "Safari";
      jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
      if ((verOffset=nAgt.indexOf("Version"))!=-1) jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
    }
  });

  $('body').addClass('v-'+jQuery.browser.majorVersion);
  if (navigator.userAgent.match(/iPad/i) != null) $('body').addClass('ipad').addClass('ios');
  if (navigator.userAgent.match(/iPhone/i) != null) $('body').addClass('iphone').addClass('ios');
  if (navigator.userAgent.match(/iPod/i) != null) $('body').addClass('ipod').addClass('ios');
  if (navigator.userAgent.match(/webOS/i) != null) $('body').addClass('web-os');
  if (navigator.userAgent.match(/Android/i) != null) $('body').addClass('android');
  if (navigator.userAgent.match(/Blackberry/i) != null) $('body').addClass('blackberry');
  if (navigator.userAgent.match(/mobile/i) != null) $('body').addClass('mobile');
  if (navigator.userAgent.match(/IEMobile/i) != null) $('body').addClass('ie-mobile');
  if (navigator.userAgent.match(/Jasmine/i) != null) $('body').addClass('jasmine');
  if (navigator.userAgent.match(/Fennec/i) != null) $('body').addClass('fennec');
  if (navigator.userAgent.match(/Blazer/i) != null) $('body').addClass('blazer');
  if (navigator.userAgent.match(/Minimo/i) != null) $('body').addClass('minimo');
  if (navigator.userAgent.match(/MOT-/i) != null) $('body').addClass('mot');
  if (navigator.userAgent.match(/Nokia/i) != null) $('body').addClass('nokia');
  if (navigator.userAgent.match(/SAMSUNG/i) != null) $('body').addClass('samsung');
  if (navigator.userAgent.match(/Polaris/i) != null) $('body').addClass('polaris');
  if (navigator.userAgent.match(/LG-/i) != null) $('body').addClass('lg');
  if (navigator.userAgent.match(/SonyEricsson/i) != null) $('body').addClass('sony-ericsson');
  if (navigator.userAgent.match(/SIE-/i) != null) $('body').addClass('sie');
  if (navigator.userAgent.match(/AUDIOVOX/i) != null) $('body').addClass('audiovox');
  if (navigator.userAgent.match(/Palm Pre/i) != null) $('body').addClass('palm-pre');
  if (navigator.userAgent.match(/OmniWeb/i) != null) $('body').addClass('omniweb');
  if (navigator.userAgent.match(/iCab/i) != null) $('body').addClass('icab');
  if (navigator.userAgent.match(/KDE/i) != null) $('body').addClass('konqueror');
  if (navigator.userAgent.match(/Camino/i) != null) $('body').addClass('camino');
  if (navigator.userAgent.match(/Netscape/i) != null) $('body').addClass('netscape');
  if (navigator.platform.match(/Win/i) != null) $('body').addClass('windows');
  if (navigator.platform.match(/Mac/i) != null) $('body').addClass('mac');
  if (navigator.platform.match(/Linux/i) != null) $('body').addClass('linux');
}

function bindReadingHistory() {
  $('.reading-history-carousel .slides .summary').off('click');
  $('.reading-history-carousel .slides .summary').on('click', function(e) {
    e.stopPropagation();
    window.location.href = $(this).parent().children('a').attr('href');
  });
  $('#reading-history-toggle').off('click').on('click', function (e) {
    e.stopPropagation();
    if ($('#reading-history-content').hasClass('in')) {
      $('#reading-history-content').collapse('hide').find('.title').attr('tabindex', '-1');
      $(this).attr('aria-expanded', 'false');
    }    
    else {
      $('#reading-history-content').collapse('show').find('.title').attr('tabindex', '0');
      $(this).attr('aria-expanded', 'true');
    } 
  });
  /* READING HISTORY HOVER EFFECT
  $('#reading-history-toggle').off('mouseenter').on('mouseenter', function (e) {
    e.stopPropagation();
    if (!$('#reading-history-content').hasClass('in')) $('#reading-history-content').collapse('show');
  }); */
  /*
  if ($('body').hasClass('ie') && $('body').hasClass('v-8')) {
    $('#reading-history-content').collapse('show');
    setTimeout(function() {
      $('#reading-history-content').collapse('hide');
    }, 1000);
  }*/
}

function fetchReadingHistory() {
  try {
    if ($('#reading-history').length > 0 && (typeof isSiteSearch === "undefined" || !isSiteSearch)) $.ajax(
      {
        type: 'GET',
        cache: false,
        url: webContextRoot+'/home/readershipHistory?numResults=10',
        success: function(htmlVal) {
          $('#reading-history-content').html(htmlVal);
          $('.reading-history-carousel').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 240,
            itemMargin: 5,
            minItems: 5,
            maxItems: 5,
            controlNav: false,
            keyboard: true,
            multipleKeyboard: true,
            slideshow: false
          });
          bindReadingHistory();
          $('#reading-history-content .title').each(function () {
            var summaryText = trimAll($(this).text());
            $(this).attr('tabindex','-1');
            try {
              $(this).text(summaryText.trunc(60, true));
            } catch (excep) { }
          });
          $('#reading-history-content .summary').each(function () {
            var summaryText = trimAll($(this).text());
            try {
              $(this).text(summaryText.trunc(110, true));
            } catch (excep) { }
          });
          $('#reading-history-content .flex-direction-nav .flex-next').attr('aria-label', 'Next');
          $('#reading-history-content .flex-direction-nav .flex-prev').attr('aria-label', 'Previous');
        }
      }
    );
  } catch (excep) { }
} // fetchReadingHistory()

function fetchMarketPromo() {
  $.ajax({
    type: 'GET',
    cache: false,
    url: webContextRoot+'/home/marketPromoMessage',
    success: function(htmlVal) {
      if (trimAll(htmlVal)!='' && $('body').hasClass('home')) {
        var msgArray = htmlVal.split('|');
        $('#msgPrefVal').attr('data-last-value', msgArray[0]);
        populateMarketPromo(msgArray[1]);
      }
    }
  });
}

function populateMarketPromo(content) {
  if (!$('#message-box').is(':visible') && ($('body').hasClass('chrome') || $('body').hasClass('mozilla') || !($('body').hasClass('ie') && ($('body').hasClass('v-5') || $('body').hasClass('v-6') || $('body').hasClass('v-7'))))) {
    $('#message-box .alert').html(alertClose + content);
    $('#message-box').fadeIn(500, 'easeOutCirc');
    setTimeout(function() {
      bindMarketPromoClose();
    }, 507);
  }
}

function bindMarketPromoClose() {
  $('#message-box button.close').off('click').on('click', ;
}

function closeMarketPromo() {
  var msgPrefVal = $('#msgPrefVal').attr('data-last-value');
  $.ajax({
    type : 'POST',
    cache: false,
    url: webContextRoot+'/home/clearPromoMessage',
    data: {msgPrefVal : msgPrefVal},
    complete: function() {
      $('#message-box').hide();
    }
  });
}

function bindShareDoc() {
  if ($('body').hasClass('reader') && $('.popover.in').parent().hasClass('share-doc')) {
    $('.popover.in .arrow').css({
      'top': $('#document-share').position().top + 24 + 'px',
      'margin-top': '0'
    });
  }
  $('#populate-document-share').off('click');
  $('#populate-document-share').on('click', function(e) {
    var documentId = $(this).attr('document-id');
    e.stopPropagation();
    e.preventDefault();
    populateShare(documentId);
  });

  $('.share-doc').keyup(;
}

// START - Bind Share Popup function
function bindSharePopup() {

  $('#document-share-popup').last().bind('keydown', ;

  $('#document-share-popup').bind('keydown', function(e) {
    if(e.which == 13) {
      var documentId = $('#populate-document-share').attr('document-id');
      e.stopPropagation();
      e.preventDefault();
      populateShare(documentId);
    }
  });
}
// END - Bind Share Popup function

// START - Document Share functions

function populateShare(documentId) {
  if (typeof documentId === 'undefined' || !documentId || Math.floor(documentId) < 1) {
    if (debugMode) console.log('Share action aborted because of a null docId');
    return;
  }
  showSpinner(true);
  var inputStorage = [];
  $.ajax( {
    cache: false,
    type : 'GET',
    url: webContextRoot+'/document/' + documentId + '/prepareShare',
    data : {},
    success : function(htmlVal) {
      sessionStorage.numberClicked = 0;
      sessionStorage.numberTyped = 0;
      if (debugMode) console.log('Successful share request for doc ID #' + documentId);
      $('#document-share-modal').html(htmlVal);

      $('#document-share-modal [data-dismiss="modal"]').on('click',       });

      $('#document-share-modal').on('click', function(event) {
        event.stopPropagation();
      });
      showSpinner(false);
      $('#standardRadio').on('click', function(e) {
        $('.btn-dangr').attr('id', 'share-document');
        e.stopPropagation();
      });

      $('#keyInsightsRadio').o);
      });
      $('.plus').on('click', function(event) {//this function handles the addition of emails to the "share to" list in the teamshare modal
        /* Count the number of clicks and update the share button with this number */
        var numberClicked = parseInt( sessionStorage.getItem('numberClicked') );
        if ( numberClicked ) {//the number clicked is not zero so increment by one
          numberClicked++;
          sessionStorage.setItem('numberClicked', numberClicked);
          $("#forward-document, #share-keyInsight, #share-document").removeAttr('disabled');
        }
        else {//the number clicked is 0 so make it 1
          numberClicked = 1;
          sessionStorage.setItem('numberClicked', numberClicked);
          $("#forward-document, #share-keyInsight, #share-document").removeAttr('disabled');
        };
        var totalClicked = parseInt( sessionStorage.getItem('numberTyped') )+numberClicked;
        $('#sharedCount').text('('+totalClicked+')');
        /* end number of clicks counting */

        var email = $(this).attr('data-email');
        var arrayIndex = $(this).attr('data-index');
        inputStorage[arrayIndex] = email;
        var filteredArray = inputStorage.filter(Boolean);
        $('#teamEmailStorage').val(filteredArray.join(';'));
        $('#shareForm').validationEngine('hide');
        $(this).hide('fast').next('.minus').show('fast');
      });//end plus button functions
      $('.minus').on('click', function(event) {//this function handles the removal of emails to the "share to" list in the teamshare modal
        var numberClicked = parseInt( sessionStorage.getItem('numberClicked') );
        if ( numberClicked === 0 ) {
          $('#sharedCount').text('');
          $("#forward-document, #share-keyInsight, #share-document").attr('disabled','disabled');
        }
        else {
          numberClicked--;
          sessionStorage.setItem('numberClicked', numberClicked);
          if ( numberClicked === 0 && parseInt( sessionStorage.getItem('numberTyped') ) === 0) {
            $("#forward-document, #share-keyInsight, #share-document").attr('disabled','disabled');
          };
        };
        var totalClicked = parseInt( sessionStorage.getItem('numberTyped') )+numberClicked;
        $('#sharedCount').text( '('+totalClicked+')');
        var arrayIndex = $(this).attr('data-index');
        delete inputStorage[arrayIndex];
        var filteredArray = inputStorage.filter(Boolean);
        $('#teamEmailStorage').val(filteredArray.join(';'));
        $(this).hide('fast').prev('.plus').show('fast');
      });//end minus button functions
      $('#docShareEmails').on('keyup', function(event) {//This provides counting of typed in emails in the teamshare modal taking into account clicked emails (both adding and removing of) as well as other functions related to typing in emails
        var input = $(this).val();
        /* Count the number of typed in emails and update the share button with this number */
        if( input.indexOf(';') >= 1 ){
          var typedInputs = input.split(';').filter(Boolean).length;
          sessionStorage.setItem('numberTyped', typedInputs);
          var totalClicked = parseInt( typedInputs )+parseInt( sessionStorage.getItem('numberClicked') );
          $('#sharedCount').text( '('+totalClicked+')');
          $("#forward-document, #share-keyInsight, #share-document").removeAttr('disabled');
        }
        else {
          if ($('#docShareEmails').val().length > 0) {
            var typedInputs = 1;
            var totalClicked = typedInputs+parseInt( sessionStorage.getItem('numberClicked') );
            sessionStorage.setItem('numberTyped', 1);
            $('#sharedCount').text( '('+totalClicked+')');
            $("#forward-document, #share-keyInsight, #share-document").removeAttr('disabled');
          }
          else {
            var typedInputs = 0;
            var totalClicked = typedInputs+parseInt( sessionStorage.getItem('numberClicked') );
            sessionStorage.setItem('numberTyped', 0);
            $('#sharedCount').text( '('+totalClicked+')');
            if ( parseInt( sessionStorage.getItem('numberClicked') ) === 0) {
              $("#forward-document, #share-keyInsight, #share-document").attr('disabled','disabled');
            };
          };
        };
        /* end number of clicks counting */

      });
      $('.flat-design').parent().addClass('widerBox');
      $('.evenWider').parent().addClass('evenWiderBox');

      $('#document-share-emails').on('focus', function(e) {
        var inputVal = $('#document-share-emails').val();
        if (inputVal == 'Separate multiple addresses with semicolon') {
          $('#document-share-emails').val('');
          $('#document-share-emails').removeClass('default-input-value');
          e.stopPropagation();
          e.preventDefault();
        }
      });

      $('#document-share-emails').on('blur', function(e) {
        var inputVal = $('#document-share-emails').val();
        if (inputVal == '') {
          $('#document-share-emails').val('Separate multiple addresses with semicolon');
          $('#document-share-emails').addClass('default-input-value');
          e.stopPropagation();
          e.preventDefault();
        }
      });

      $('[data-toggle="tooltip"]').tooltip();
      $('#message-box-link').o);
      });

      $("#shareForm").validationEngine();
    },
    error: function(){
      $("#document-share-modal").modal('hide');
      showSpinner(false);
      alert('Something went wrong, please try again.');
    }
  });

  hideMostPopups();
  evenWiderShareBox();
  $("#document-share-modal").modal('show').css('z-index', '3500').show('');
} // populateShare(documentId)
function evenWiderShareBox() {
  var wider = $('#shareForm').hasClass('evenWider');
  if (wider) {
    $('#document-share-modal').addClass('evenWiderBox');
  };
}
function showSpinner(hide){
  if (!hide) {
    $('.spinner').hide();
  } else {
    $('.spinner').show();
  };
};

function shareDocument(documentId, emails, message) {
  $.ajax( {
    cache: false,
    type : 'POST',
    url: webContextRoot+'/document/' + documentId + '/share',
    data : {emails: emails, message: message}
  });
  if ($('#document-share-modal').hasClass('evenWiderBox')) {
    $('#thankYouRemove').hide();
    $('#thankYou').show();
  } else {
    $("#document-share-modal").modal('hide');
  };
} // shareDocument(documentId, emails, message)

//Share Modal that pops up when share button is clicked
function bindShareModals() {
  $('#document-share-modal').off('click');
  $('#document-share-modal').off('click', '**');

  $('#document-share-modal').on('click', '#share-document', function(e) {
    e.stopPropagation();
    e.preventDefault();

    if ($("#shareForm").validationEngine('validate')) {
      var documentId = $(this).attr('document-id'),
        emails,
        message = document.getElementById('document-share-message').value;
      if ($('#document-share-modal').hasClass('evenWiderBox')) {
        var userTypedEmails = $('#docShareEmails').val();
        if ( $('#teamEmailStorage').val().length > 0) {
          emails = $('#teamEmailStorage').val()+';'+userTypedEmails;
        }
        else {
          emails = userTypedEmails;
        };
      }
      else {
        if ($('#document-share-emails').length>0) emails = document.getElementById('document-share-emails').value;
        else emails = document.getElementById('docShareEmails').value;
      };
      //if ($('body').hasClass('reader') || $('body').hasClass('readerV2') || $('body').hasClass('magicQuadrant')) reportEvent(e,null,'r.nav.fwd', documentId);
      shareDocument(documentId, emails, message);
      //deferNavAndReport(e,window.location.href,'r.nav.fwd');
    } // if ($("#shareForm").validationEngine('validate'))
    return false;
  }); // $('#share-document').click()

  $('#document-share-modal').on('click', '#forward-document', function(e) {
    e.stopPropagation();
    e.preventDefault();

    if ($("#shareForm").validationEngine('validate')) {
      var documentId = $(this).attr('document-id'),
        emails,
        message = document.getElementById('document-share-message').value;
      if ($('#document-share-modal').hasClass('evenWiderBox')) {
        var userTypedEmails = $('#docShareEmails').val();
        if ( $('#teamEmailStorage').val().length > 0) {
          emails = $('#teamEmailStorage').val()+';'+userTypedEmails;
        }
        else {
          emails = userTypedEmails;
        };
      }
      else {
        if ($('#document-share-emails').length>0) emails = document.getElementById('document-share-emails').value;
        else emails = document.getElementById('docShareEmails').value;
      };
      forwardDocument(documentId, emails, message);
    } // if ($("#shareForm").validationEngine('validate'))
  }); // $('#forward-document').click()

  $('#document-share-modal').on('click', '#share-keyInsight', function(e) {
    e.stopPropagation();
    e.preventDefault();

    if ($("#shareForm").validationEngine('validate')) {
      var documentId = $(this).attr('document-id'),
        emails,
        message = document.getElementById('document-share-message').value;
      if ($('#document-share-modal').hasClass('evenWiderBox')) {
        var userTypedEmails = $('#docShareEmails').val();
        if ( $('#teamEmailStorage').val().length > 0) {
          emails = $('#teamEmailStorage').val()+';'+userTypedEmails;
        }
        else {
          emails = userTypedEmails;
        };
      }
      else {
        if ($('#document-share-emails').length>0) emails = document.getElementById('document-share-emails').value;
        else emails = document.getElementById('docShareEmails').value;
      };
      shareKeyInsight(documentId, emails, message);
    } // if ($("#shareForm").validationEngine('validate'))
  }); // $('#share-keyInsight').click()
} // bindShareModals()

function forwardDocument(documentId, emails, message) {
  $.ajax( {
    cache: false,
    type : 'POST',
    url: webContextRoot+'/document/' + documentId + '/forward',
    data : {emails: emails, message: message}
  });
  if ($('#document-share-modal').hasClass('evenWiderBox')) {
    $('#thankYouRemove').hide();
    $('#thankYou').show();
  } else {
    $("#document-share-modal").modal('hide');
  };
}

function shareKeyInsight(documentId, emails, message) {
  $.ajax( {
    type : 'POST',
    cache: false,
    url: webContextRoot+'/document/' + documentId + '/shareKeyInsight',
    data : {emails: emails, message: message}
  });
  if ($('#document-share-modal').hasClass('evenWiderBox')) {
    $('#thankYouRemove').hide();
    $('#thankYou').show();
  } else {
    $("#document-share-modal").modal('hide');
  };
}

// END - Document Share functions

//START - Create Track
/*
 * Initiatives - Overlay to display refinement topics and PCAccess.
 */

function togglePCAccess() {
  $('input[name="pcAccess"]').on('click', function(e) {
    if($('input[name="pcAccess"]').val()=='1') {
      //$('#save-initiative').removeClass('disabled');
      $('.modal-footer .close').css('display', 'none');
      $('#save-initiative').css('display', 'inline-block');
      $('#reset-initiative').removeClass('disabled');
    }
    else if (!!$('#track-initiative-modal input[type="checkbox"].kiTopicIds:checked').length) {
      e.stopPropagation();
      return;
    }
    else {
      //$('#save-initiative').addClass('disabled');
      $('#save-initiative').css('display', 'none');
      $('.modal-footer .close').css('display', 'inline-block');
      $('#reset-initiative').addClass('disabled');
    }

  });
}

function toggleSaveInitiativeButton() {
  if (!!$('#track-initiative-modal input[type="checkbox"].kiTopicIds:checked').length){ // if nothing checked in refinements
    //$('#save-initiative').removeClass('disabled');
    $('#save-initiative').css('display', 'inline-block');
    $('#reset-initiative').removeClass('disabled');
  }
  else if($('input[name="pcAccess"]').val()=='1') {
    return;
  }
  else {
    //$('#save-initiative').addClass('disabled');
    $('#save-initiative').css('display', 'none');
    $('#reset-initiative').addClass('disabled');
  }
} // toggleSaveInitiativeButton()

function executeInitiativeModalLogic() {
  //$('#save-initiative').text('Update');
  //$('#save-initiative').addClass('disabled');
  $('#save-initiative').css('display', 'none');
  $('#reset-initiative').addClass('disabled');
  togglePCAccess();
  if (!!$('#track-initiative-modal input[type="checkbox"].kiTopicIds').length) {
    toggleSaveInitiativeButton();
    togglePCAccess();
    $('#track-initiative-modal input[type="checkbox"].kiTopicIds').off('change').on('change',toggleSaveInitiativeButton);
    togglePCAccess();
    $('#save-initiative').on('click mousedown mouseup tap touchstart touchend', function(e) {
      if (!$('#track-initiative-modal input[type="checkbox"].kiTopicIds:checked').length && !!e) {
        if($('input[name="pcAccess"]').val()=='0') {
          if ($('body').hasClass('ie') && $('body').hasClass('v-8')) alert('Please select a refinement before proceeding.');
        e.stopPropagation();
        //
        return false;
        }
      }
    });
    if (!$('#track-initiative-modal .modal-footer .pull-right #reset-initiative').length) {
      $('#track-initiative-modal .modal-footer .pull-right').prepend(
        '<a href="#" class="btn reset disabled" id="reset-initiative">Reset</a>'
      );
      $('#reset-initiative').on('click', function(e) {
        e.stopPropagation();
        if (typeof e.preventDefault === 'function') e.preventDefault();
        $('#track-initiative-modal input[type="checkbox"].kiTopicIds').prop('checked', false);
        $('#track-initiative-modal input[name="pcAccess"]').val('0').prop('checked', false);
        toggleSaveInitiativeButton();
        togglePCAccess();
      });
    }
  } else {
    $('#save-initiative').removeClass('disabled');
    $('#track-initiative-modal .modal-footer .pull-right a.btn.reset').remove();
  }
} // executeInitiativeModalLogic()

function populateInitiativeRefinementTopics(kiNodeId) {
  $('#track-initiative-modal').html(hereDoc(spinnerHTML));
  $.ajax({
    type : 'GET',
    cache: false,
    url: webContextRoot + '/track/setup/initiative/' + kiNodeId,
    success : function(htmlVal) {
      $('#track-initiative-modal').html(htmlVal).show();
      $('input:checkbox.kiTopicI);
      }); // $('input:checkbox.kiTopicIds').click()
      switchTAtoManage();
      bindDismissModals();
      executeInitiativeModalLogic();
      //togglePCAccess();
    }, // success()

    complete: function() {

      // add disable to button until selection is made (in other functions)
        //$('#save-initiative').addClass('disabled');
        $('#save-initiative').css('display', 'none');
        $('#reset-initiative').addClass('disabled');

      $("#"+kiNodeId+"-track").addClass('hidden');
      $('.explore a#'+kiNodeId+'-track').removeClass('hidden');
      $("a#"+kiNodeId+"-manage").css('display', 'block');
      $("a#"+kiNodeId+"-manage").removeClass('hidden');

      // for type-ahead function
      $("a#init-type-ahead-manage").css('display', 'block');
      $('a#init-type-ahead-manage').removeClass('hidden');
      $("#init-type-ahead-track").css('display', 'block');
      $('#init-type-ahead-track').addClass('hidden');

      // hide "update" button if no checkboxes appear
      if (!$("#track-initiative-modal input:checkbox[name=pcAccess]").length && !$('#track-initiative-modal input[type="checkbox"].kiTopicIds').length ) {
        //alert('test');
        $('#save-initiative').addClass('hidden');
      }

      if ($('body').hasClass('readerV2')) {
        $('.suggKI').remove();
        $('.manageKI').removeClass('hidden');
      }

    } // complete()
  }); // $.ajax()

  $("#track-initiative-modal").modal('show').css('z-index', '3500').removeClass('hide').addClass('in').show().attr('aria-hidden', 'false');
  bindSaveInitiative();
  bindUndoInitiative();
  //undoInitiative();
  bindDismissModals();
} // populateInitiativeRefinementTopics(kiNodeId)

function bindDismissModals() {
  $('[data-dismiss="modal"]').off('click').on('click', function (e) {
    e.stopPropagation();
    var modalId = '#' + $(this).parents('.modal').attr('id');
    $(modalId).addClass('hide').removeClass('in').attr('aria-hidden', 'true');
    forceModalClosed();
    $('.modal-backdrop').remove();
  });
}

function fetchPromo(promoId, attachTo, positioning, posRef, promoWidth, promoHeight, nudgeLeft, nudgeTop) {
  if (!promoWidth) var promoWidth = 290;
  if (!promoHeight) var promoHeight = 290;
  if (!nudgeLeft) var nudgeLeft = '+=0';
  if (!nudgeTop) var nudgeTop = '+=0';
  if ($('#promo').length == 0) $('body').append($('<div id="promo" class="hidden">&nbsp;</div>'));

  $.ajax({
    type : 'GET',
    cache: false,
    url: '/promo/serve/' + promoId,
    success : function(resp) {
      if ($('body').hasClass('ie') && ($('body').hasClass('v-8') || $('body').hasClass('v-9'))) $('.MQvideo, .toppicksflash').hide();
      if (trimAll(resp) != '' && trimAll(resp) != '{}' && trimAll(resp) != '{ }') {
        var promo = $.parseJSON(trimAll(resp));
        if (
          trimAll(promo.PromoClickURL) != '' &&
          trimAll(promo.PromoContentURL) != '' &&
          trimAll(promo.PromoCloseURL) != ''
        ) renderPromo(
          promo.PromoClickURL,
          promo.PromoContentURL,
          promo.PromoCloseURL,
          attachTo,
          positioning
        );
        $('#promo').css({width:'',height:''})
        .attr('style',$('#promo').attr('style') +
          'width: ' + promoWidth  + 'px !important;' +
          'height: ' + promoHeight + 'px !important;'
        )
        .animate({
          left : nudgeLeft,
          top : nudgeTop
        });
      }
    romoURL;
}

function closePromo(promoCloseURL) {
  if (trimAll(promoCloseURL)!='') {

    $.ajax({
      type : 'GET',
      cache: false,
      url: promoCloseURL
    });
  }
  $('#promo').dialog('close').remove();
  $('.promo-article').show().removeClass('hidden');
  $('.promo-box').remove();
  if ($('body').hasClass('ie') && ($('body').hasClass('v-8') || $('body').hasClass('v-9'))) $('.MQvideo, .toppicksflash').show();
}

function renderPromo(promoURL, promoImageURL, promoCloseURL, attachTo, positioning, posRef) {
  if (!positioning) positioning = 'center center';
  if (!posRef) posRef = 'center center';
  if (!windowPos) windowPos = 0;
  windowPos = $(window).scrollTop();
  $('#promo').removeClass('hidden').dialog({
    autoOpen: false,
    resizable: false,
    show: {
      effect: 'fade',
      duration: 1000,
      easing: 'easeOutCirc'
    },
    title: 'Gartner Promo',
    appendTo: attachTo,
    buttons: [{
      text: "X",
      click: function() {
        closePromo(promoCloseURL);
      }
    }],
    position: {
      my: posRef,
      at: positioning,
      within: attachTo,
      collision: "fit"
    }
  });

  // Set the promo image:
  $('#promo').css('background', 'url(' + promoImageURL + ') no-repeat scroll top center'
  ).css('cursor', 'pointer').css('background-size', 'cover'
  ).off('click').ooURL);
  });

  setTimeout(function() { // Recalibrates the promo once it has appeared
    windowPos = $(window).scrollTop();
    $('#promo').dialog('option', 'width', $('.promo').width());
    $('#promo').dialog('option', 'height', $('.promo').height() + 50);
    $('#promo').dialog('open');
    $('#promo').position({
      my: 'left top',
      at: 'left top',
      within: attachTo,
      collision: "fit"
    });
    $(window).scrollTop(windowPos);
    setTimeout(function() {
      if (attachTo === '.promo-box') { // Fix for home page only:
        $('.ui-dialog').css(
          {
            'position' : 'relative',
            'top'      : 'auto',
            'left'     : 'auto'
          }
        );
        setTimeout(function() {
          //$('.promo-article').hide();
        }, 1000);
        $('.promo-box').show().removeClass('hidden');
        //.animate({top: '+=50'});
      }
      fixPromoButton();
    }, 100);

    if (!$('body').hasClass('ie') || !$('body').hasClass('v-7')) $(window).resize(function() {
        closePromo(); // No close URL specified: promo WILL show again on future page loads
      }
    );
  }, 3000);
}

function fixPromoButton() {
  $('#promo').parent().css('position', 'absolute');
  $('#promo + .ui-dialog-buttonpane button').position({
    my: 'right top',
    at: 'right-10 top+10',
    of: '#promo'
  });
}

/*
 * Initiatives - Save functionality on the Overlay.
 */
function saveInitiative(topicValues,pcAccess,emailPrefs) {
  var kiId = $('#save-initiative').attr('data-kiId');
  var wfucxId=$('#save-initiative').attr('data-wfucxId');
  var hasPCAccess;

  if (typeof(pcAccess) === "undefined") hasPCAccess = -1;
  else hasPCAccess = pcAccess;

  $.ajax( {
    cache: false,
    type : 'POST',
    //url: app+'/track/setup/initiative?kiNodeId='+kiId +'&refTopics=' +topicValues +'&addToPc='+hasPCAccess ,
    url: webContextRoot+'/track/setup/update/initiative?wfucxId='+wfucxId +'&refTopics=' +topicValues +'&addToPc='+hasPCAccess +'&emailPrefs=' +emailPrefs,

   // data : {kiNodeId: kiId, refTopics: topicValues, addToPc: pcAccess},
    success : function(htmlVal) {
      $('.track-initiative a').addClass('manage').removeClass('hidden').attr('href', '/track/manage').text('Manage Tracking').css('display', 'inline-block');
    }
  });
  $("#track-initiative-modal").modal('hide');
}

function undoInitiative(){
  var kiId = $('#save-initiative').attr('data-kiId');
  var wfucxId=$('#save-initiative').attr('data-wfucxId');

  $.ajax( {
    cache: false,
    type : 'POST',
    url: webContextRoot+'/track/setup/delete/initiative?wfucxId='+ wfucxId,

    complete: function() {
      //$("button#"+kiId+"-track").css('display', 'block');
      $("button#"+kiId+"-track").removeClass('hidden');
      $("#"+kiId+"-manage").css('display', 'block');
      $("#"+kiId+"-manage").addClass('hidden');

        //for type-head function
      $("a#init-type-ahead-manage").css('display', 'block');
      $('a#init-type-ahead-manage').addClass('hidden');
      $("#init-type-ahead-track").css('display', 'block');
      $('#init-type-ahead-track').removeClass('hidden');
    }
  });
  $('.modal.in').modal('hide');
  forceModalClosed();
  $('.modal-backdrop').remove();
 //$('.track-initiative a').removeClass('manage').removeClass('hidden').attr('href', '#').text('Track this Initiative').css('display', 'inline-block');
}

/*
 * Initiatives - On clicking the save button in the overlay.
 */
function bindSaveInitiative() {
  $('#track-initiative-modal').off('click');
  $('#track-initiative-modal').off('click', '**');
  $('#track-initiative-modal').on('click', '#save-initiative', function(e) {
    e.stopPropagation();
    e.preventDefault();

      if ($(this).hasClass('disabled')) {
        //alert('init alert');
        e.stopPropagation();
        e.preventDefault();
        return true;
      } // no update if link disabled

    var kiId      = $('#save-initiative').attr('data-kiId'),
      wfucxId     = $('#save-initiative').attr('data-wfucxId'),
      topicValues = $('input:checkbox:checked.kiTopie;
      }).get(),
      pcAccess    = $('input:checkbox[name="pcAccess"]').val(),
      emailPrefs  = $('input:radio[name=global-email-prefs]:checked').val();
    saveInitiative(topicValues,pcAccess,emailPrefs);
    $('.modal.in').removeClass('in').attr('aria-hidden', 'true');
    $('.modal-backdrop').remove();
    switchTAtoManage();
  }); // $('#save-initiative').click()
} // bindSaveInitiative()

function bindUndoInitiative() {
  $('#track-initiative-modal ').on('click', 'a#undo-iack();
  });
}

function showRecommendedAlertModal(alertId) {
  if (typeof alertId === "undefined") var alertId = $('.reco-alert-track').attr('alert-id');

  $.ajax( {
    type : 'POST',
    cache: false,
    url: webContextRoot+'/track/setup/add/recommendedAlert?alertId='+alertId,
    success : function(htmlVal) {
      $('#track-recommended-alert-modal').remove();
      $('body').append($('<div />').attr('id', 'track-recommended-alert-modal').html(htmlVal));
      $('#track-recommended-alert-modal').addClass('manageBox');
      $("#track-recommended-alert-modal").modal(
        'show'
      ).css(
        'z-index', '3500'
      ).css(
        'position', 'fixed'
      ).css(
        'top', '30%'
      ).css(
        'left', '25%'
      ).css(
        'width', '50%'
      ).css(
        'background', '#fff'
      ).show();
      setTimeout(function () {
        bindAlertUpdate();
        bindAlertUndo();
        switchTAtoManage();
        bindEmailOpenIt();
      }, 500);
    },

    complete: function () { // make function faster
      $("#"+alertId+"-track").addClass('hidden');
      $("#"+alertId+"-manage").removeClass('hidden');
    }
  });
}

function showCustomAlertModal(alertName) {
  if (typeof alertName === "undefined") var alertName = $("#custom-alert-name").val();

  $.ajax({
    type : 'POST',
    cache: false,
    url : webContextRoot+'/track/setup/add/customEnterpriseAlert?alertName='+ encodeURIComponent(alertName) + '&alertType=4',
    success : function(htmlVal) {
      $('#track-custom-alert-modal').remove();
      $('body').append($('<div />').attr('id', 'track-custom-alert-modal').html(htmlVal));
      $('#track-custom-alert-modal').addClass('manageBox');
      $("#track-custom-alert-modal").modal(
        'show'
      ).css(
        'z-index', '3500'
      ).css(
        'position', 'fixed'
      ).css(
        'top', '15%'
      ).css(
        'left', '25%'
      ).css(
        'width', '50%'
      ).css(
        'background', '#fff'
      ).show();
      );
      }, 500);
    },

    complete: function() {
      $('#post-update-custom-alert').html(alertName);
      $(".custom-track-results").removeClass('hidden');
      $('.update-alert').addClass('disabled');
      updateAlertcheckbox();
    }
  }); // $.ajax()
} // showCustomAlertModal(alertName)

function updateAlertcheckbox() {
  $('input:checkbox[name=moreFrequentLessRelevant]').off('click').on('click', function(e) {
    if ($(this).val() =='true') {
      $('.update-alert').removeClass('disabled');
    }
    if ($(this).val() =='false') {
      $('.update-alert').addClass('disabled')
    }
  });
}

function bindAlertUpdate() {
  $('.update-alert').off('click').on('click', function(e) {
    e.stopPropagation();

      if ($(this).hasClass('disabled')) {
        //alert('test global custom alert');
        e.stopPropagation();
        e.preventDefault();
      return true;
      } // no update if link disabled

    var emailPrefs = $('input:radio[name=custom-email-prefs]:checked').val();
    var alertId = $(this).attr('data-alert-id');

    var customAlertName=$('#custom-alert-chg-name').val();
    var customAlertName= encodeURIComponent(customAlertName);
    //alert(customAlertName + " :customAlertName ");
    var moreFrequent = $('input:checkbox[name=moreFrequentLessRelevant]').val();

    var isOwned = $('#isOwned').val();
    if (typeof isOwned == "undefined") isOwned = true;

    var alertType = $(this).attr('data-alert-type');
   // console.log("data-alertType:"+alertType);
    var data;
    if (alertType == 3) data = 'id='+alertId+'&emailPrefs='+emailPrefs+'&alertType='+alertType;
    else if (alertType == 4) data = 'id='+alertId+'&alertName='+customAlertName + '&isQueryParser='+moreFrequent+ '&isOwned='+isOwned+'&emailPrefs='+emailPrefs+'&alertType='+alertType;
    else data = $("form#alert-overlay-binder-form").serialize() +'&id='+alertId+ '&isQueryParser='+moreFrequent+ '&emailPrefs='+emailPrefs+'&alertType='+alertType ;

    var customAlertName = decodeURIComponent(customAlertName);

    $.ajax({
      type : 'POST',
      cache: false,
      data: data,
      url: webContextRoot + '/track/setup/update/alert',
     );
      },

     me
      }
    });
    $('div#track-recommended-alert-modal').modal('hide');
    $("div#track-custom-alert-modal").modal('hide');
    $("div#track-enterprise-alert-modal").modal('hide');
  });
}

function switchTAtoManage() {
  $('.create-track-list + a.btn')
  .addClass('btn-primary')
  .removeClass('btn-success')
  .removeClass('btn-small')
  .html('Manage')
  .attr('href', '/track/manage');
}

function switchTAtoTrack() {
  $('.create-track-list + a.btn')
  .removeClass('btn-primary')
  .addClass('btn-success')
  .addClass('btn-small')
  .html('<i class="track-icon-"></i>')
  .attr('href', '#');
}

function bindAlertUndo() {
  $('.close.undo').off('click').on('click',function(e){
    var id= $(this).attr('data-alert-id');

    $.ajax({
      type : 'POST',
      cache: false,
      url: webContextRoot + '/track/setup/delete/alert?alertId='+id,
     );
      },

      complete: function () {
        $(".custom-track-results").addClass('hidden');
        $("#"+id+"-track").removeClass('hidden');
        $("#"+id+"-manage").css('display', 'block');
        $("#"+id+"-manage").addClass('hidden');
      } // complete()
    }); // $.ajax()
  }); // $('.close.undo').click()
} // bindAlertUndo()

function bindEnterpriseAlert() {
  $('a#enterprise-alert-track').off('click').on('click', function(e) {
    var x=document.forms["e-alert-form"]["some_field"].value;
    if (x==null || x=="") {
      alert("Must be filled out");
      return false;
    } else {
      var alertName = $("#enterprise-alert-name").val();
      var data =  $("form#enterprise-alert-form").serialize() +'&alertName='+alertName + '&alertType=5';
      $.ajax({
        type : 'POST',
        cache: false,
        data : data,
        url : webContextRoot+'/track/setup/add/customEnterpriseAlert',
        success : function(htmlVal) {
          $('#track-enterprise-alert-modal').remove();
          $('body').append($('<div />').attr('id', 'track-enterprise-alert-modal').html(htmlVal));
          $('#track-enterprise-alert-modal').addClass('manageBox');
          $("#track-enterprise-alert-modal").modal('show'
            ).css('z-index', '3500'
            ).css('position', 'fixed'
            ).css('top', '30%'
            ).css('left', '25%'
            ).css('width', '50%'
            ).css('background', '#fff'
          ).show();
                   }, 500);
        }
      });
    }
  });
}


function addVendorResetButton() {
  if (!$('#track-vendor-modal .modal-footer .pull-right #reset-vendor').length) {
    $('#track-vendor-modal .modal-footer .pull-right').prepend('<a href="#" class="btn reset disabled" id="reset-vendor">Reset</a>'
    );
    $('#reset-vendor').on('click', function(e) {
      e.stopPropagation();
      if (typeof e.preventDefault === 'function') e.preventDefault();
      $('#track-vendor-modal .modal-body form[name="vendorForm"] ul > li:first-child input[type="radio"]').click();
        $('#track-vendor-modal #decisionDateSetup').val('');
          $('#track-vendor-modal input:checkbox[name=pcAccess]').val(this.checked ? 1:0).prop('checked', false);
            $('#track-vendor-modal .accordion-body-pc').collapse('hide');
              $('#track-vendor-modal input:text[name=prodName]').val('');
                $('#track-vendor-modal select#recommendPC').val('-1');
                  //$('#reset-vendor').addClass('disabled');
      disableResetandSaveButtons();
    });
  } // if (!$('#track-vendor-modal .modal-footer .pull-right #reset-vendor').length)
} // addVendorResetButton()

function setVendorSelectedTypeAheadValue(ticker,vendorName,enterpriseCode) {
  $.ajax( {
    type : 'POST',
    cache: false,
    url : webContextRoot+'/track/setup/vendors/'+ enterpriseCode +'/exists',
    success : function(vendorExist) {
      vendorExistsCheck(enterpriseCode,vendorName,vendorExist);
      $('#create-track-list').html('');
    }
  });
}

function vendorExistsCheck(enterpriseCode,vendorName,vendorExist){
  var isNew;
  if(vendorExist == 2){ //If vendorExist = true
    isNew = 2;
    existsOptionOverlay(enterpriseCode,vendorName,isNew);
  }
  else if(vendorExist == 3){ //If vendorExist = true and has all topics already
    isNew = 3;
    existsOptionOverlay(enterpriseCode,vendorName,isNew);
  }
  else { //new - show overlay
    isNew = 1;
    showVendorOverlay(enterpriseCode,vendorName,isNew);
    bindModalDismissal();
    bindEmailOpenIt();
  }
}

function existsOptionOverlay(enterpriseCode,vendorName,isNew){
   // alert('test3'+ enterpriseCode);
  if (isNew == 2) {
    $('#track-vendor-alert-modal').remove();
   //$("div#track-vendor-exists-modal .modal-body #vendor-id").val( enterpriseCode );
    $('#track-vendor-exists-modal').addClass('manageBox').removeClass('hide').addClass('in');
    $('#track-vendor-exists-modal').modal('show').show();
    $('.modal-backdrop').remove();
    $('body').append($('<div class="modal-backdrop"></div>'));
    setTimeout(function () {
      bindNewVendor(enterpriseCode,vendorName,isNew);
      bindModalDismissal();
      bindEmailOpenIt();
    }, 500);

  }
  else if (isNew == 3) {
    $('#track-vendor-alert-modal').remove();
    $('#track-vendor-filled-modal').addClass('manageBox').removeClass('hide').addClass('in');
    $('#track-vendor-filled-modal').modal('show').show();
    $('.modal-backdrop').remove();
    $('body').append($('<div class="modal-backdrop"></div>'));
    //$('a#add-new-vendor-segment').css('display','none');
    setTimeout(function () {
      bindNewVendor(enterpriseCode,vendorName,isNew);
      bindModalDismissal();
      bindEmailOpenIt();
    }, 500);
  }

  else showVendorOverlay(enterpriseCode,vendorName,isNew);
}


function bindNewVendor(enterpriseCode,vendorName,isNew) {
  $('#add-new-vendor-segment').off('click').on('click', function(e) {
    e.stopPropagation();
    showVendorOverlay(enterpriseCode,vendorName,isNew);
    bindModalDismissal();
    bindEmailOpenIt();
  });
}

function bindDatePickervalue() {
  if ($('input:text[name=decisionDateSetup]').val().length > 0) {
    $('#vendorErrMsg').addClass('hidden');
    $('#save-vendor').removeClass('deactive');
    $('#reset-vendor').removeClass('disabled');
    //$('#update-vendor').removeClass('disabled');
    $('#update-vendor').text('Update');
  };
}

function disableResetandSaveButtons() {
  if ($("input:radio[name=product-segment]").val() == '-1') {
    if ($('input:text[name=decisionDateSetup]').val() == '') {
      if ($('input:checkbox[name=pcAccess]').not(':checked')) {
        //$('#update-vendor').addClass('disabled');
        $('#update-vendor').text('OK');
        $('#reset-vendor').addClass('disabled');
      }
    }
  }
}

function showVendorOverlay(enterpriseCode,vendorName,isNew){
  var data = "id=" + enterpriseCode + "&isNew=" + isNew;
  $.ajax( {
    type : 'POST',
    data: data,
    cache: false,
    url: webContextRoot + '/track/setup/add/vendor',
    success : function(response) {
      $('#track-vendor-modal').remove();
      $('div#track-vendor-exists-modal').modal('hide');
      $('body').append($('<div />').attr('id', 'track-vendor-modal').html(response));
      $('#track-vendor-modal').addClass('manageBox');
      $("#track-vendor-modal").modal('show'
        ).css('z-index', '3500'
        ).css('position', 'fixed'
        ).css('top', '2%'
        ).css('left', '25%'
        ).css('width', '50%'
        ).css('background', '#fff'
      ).show();
      $('.modal-backdrop').remove();
      $('body').append($('<div class="modal-backdrop"></div>'));
        addVendorResetButton();
        disableResetandSaveButtons();


        $('input:radio[name=product-segment]').on('click', function(e) {
          $('#vendorErrMsg').addClass('hidden');
          $('#save-vendor').removeClass('deactive');
          $('#reset-vendor').removeClass('disabled');
          //$('#update-vendor').removeClass('disabled');
          $('#update-vendor').text('Update');
        });

        $('input:checkbox[name=pcAccess]').o
        });

      setTimeout(function () {
        bindModalDismissal();
        bindVendorUpdate();
        bindVendorUndo();
        bindVendorSave(enterpriseCode);
        bindEmailOpenIt();
        //$('.modal-backdrop').remove();
        //addVendorResetButton();
      }, 500);

      setTimeout(function () {
        $('body').append($('<div class="modal-backdrop"></div>'));
        $('.modal-backdrop').off('click').on('click', function(e) {
         e.stopPropagation();
          dismissModals();
        });
      }, 850);
    },

   n');
    }
  });
}

function bindVendorUpdate() {
  switchTAtoManage();

  $('a#update-vendor').off('click').on('click', function(e) {
    if ($(this).hasClass('disabled')) {
      //alert('test global tech');
      e.stopPropagation();
      e.preventDefault();
    return true;
    } // no update/save if link button is disabled


    if ($("input:radio[name=product-segment]:checked").length == 0) {
      $('#vendorErrMsg').removeClass('hidden');
      $('#update-vendor').addClass('deactive');
      $('#update-vendor').removeClass('btn-warning');
    }

    var validate = false;
    if ($("input#pcAccess-Form:checked").val() == 1) {
      if ($("input:text[name=prodName]").val() == 0) {
        alert('Enter Product/Service Name'); // alert will show if nothing is added in input field
        validate = true;
      }

      if ($('select#recommendPC').val() == -1) {
        alert('Select a Recommendation'); // alert will show if "Select One" is selected
        validate = true;
      }
    } // if ($("input#pcAccess-Form:checked").val() == 1)

    if (!validate) {
      e.stopPropagation();
      var emailPrefs = $('input:radio[name=global-email-prefs]:checked').val();
      var wfucxId = $('#wfucxId').val();
      var segmentId = $('input:radio[name=product-segment]:checked').val();
      var decisionDate = $('input#decisionDateSetup').val();
      var prodName = $('#prodName').val();
      var recommendVal= $('#recommendPC').val();
      var data = 'wfucxId='+wfucxId+'&emailPrefs='+emailPrefs+'&segmentId='+segmentId;

      if (typeof decisionDate !== "undefined") data = data +'&decisionDate='+decisionDate;
      if (typeof prodName !== "undefined") data = data +'&productName='+prodName;
      if (typeof recommendVal !== "undefined") data = data +'&recommendVal='+recommendVal;

      $.ajax({
        type : 'POST',
        data: data,
        cache: false,
        url: webContextRoot+'/track/setup/update/vendor',
        success : function(htmlVal) {
          $('.modal-backdrop').remove();
          $('#vendorErrMsg').addClass('hidden');
          $('#save-vendor').removeClass('deactive');
          $('#save-vendor').addClass('btn-warning');
          $('#update-vendor, #save-vendor').text('Update');
          addVendorResetButton();
          disableResetandSaveButtons();
        }
      });

      $("#track-vendor-modal").modal('hide');
      $('.modal-backdrop').remove();
    } // if (!validate)
  }); // $('a#update-vendor').click()
} // bindVendorUpdate()

function bindVendorUndo() {
  $('a#undo-vendor').off('click').on('click',function(e){
    switchTAtoTrack();
    var id= $('#wfucxId').val();

    $.ajax({
      type : 'POST',
      cache: false,
      url: webContextRoot + '/track/setup/delete/vendor?wfucxId=' + id,
     );
      },

     );
      }
    }); // $.ajax()
  }); // $('a#undo-vendor').click()
} // bindVendorUndo()

function randNum(min, max) {
  return (min + Math.floor(Math.random() * max));
}

function bindVendorSave(enterpriseCode) {
  //if (typeof alertName === "undefined") var alertName = $("#custom-alert-name").val();

  $('a#save-vendor').off('click').on('click', function(e) {
    e.stopPropagation();
    switchTAtoManage();
    var validate = false;

    if ($("input#pcAccess-Form:checked").val() == 1 ) {
      if($("input:text[name=prodName]").val() == 0){
        // alert will show if nothing is added in input field
        alert('Enter Product/Service Name');
        validate = true;
      }
      if($('select#recommendPC').val() == -1 ) {
        // alert will show if "Select One" is selected
        alert('Select a Recommendation');
        validate = true;
      }
    }

    if (!validate) {
      if($("input:radio[name=product-segment]:checked").length == 0) {
        $('#vendorErrMsg').removeClass('hidden');
        $('#save-vendor').addClass('deactive');
      } else {
        var emailPrefs = $('input:radio[name=global-email-prefs]:checked').val();
        var segmentId = $('input:radio[name=product-segment]:checked').val();
        var newWfucx=1;
        var decisionDate = $('input#decisionDateSetup').val();
        var prodName = $('#prodName').val();
        var recommendVal= $('#recommendPC').val();
        var data = 'id='+enterpriseCode+'&isNew='+newWfucx+'&emailPrefs='+emailPrefs+'&segmentId='+segmentId;
        if (typeof decisionDate !== "undefined") data = data +'&decisionDate='+decisionDate;
        if (typeof prodName !== "undefined") data = data +'&productName='+prodName;
        if (typeof recommendVal !== "undefined") data = data +'&recommendVal='+recommendVal;

        $.ajax( {
          type : 'POST',
          data: data,
          url: webContextRoot + '/track/setup/add/vendor',
          cache: false,

                  }
        });

        $("#track-vendor-modal").modal('hide');
        $('.modal-backdrop').remove();
      }
    }
  });
}

function bindModalDismissal() {
  $('[data-dismiss=modal]').o1000);
  });

  $('.delete-track-item').off('click').on('click', function(e) {
    e.stopPropagation();
    deleteTrackItem($(this).attr('data-track-id'), $(this).attr('data-track-type'));
    dismissModals();
  });

  $('.modal-backdrop').off('click').on('click', function(e) {
    e.stopPropagation();
    dismissModals();
  });

  $('button.bull-close').off('click').on('click', function(e) {
    $("#track-initiative-modal").modal('hide').addClass('hide').removelass('in').hide().attr('aria-hidden', 'true');
    e.stopPropagation();
    dismissModals();
    forceModalClosed();
    $('.modal').remove();
  });
}

function dismissModals() {
  var modalId = '#' + $(this).parents('.modal').attr('id');
  $(modalId).addClass('hide').removeClass('in').attr('aria-hidden', 'true');
  forceModalClosed();
  $('.modal-backdrop').remove();
} // dismissModals()

function unloadHelp() {
  $('.help, .modal-backdrop, .tooltip, #help-close, .tooltip-arrow').remove();
  if ($('body').hasClass('gms') && !!btObject && btObject.hasOwnProperty('selectedNodes') && btObject.selectedNodes.length === 0) {
    hideGraphTabs();
  }
} // unloadHelp()

function insertHelpModalBackdrop() {
  $('body').append($('<div class="modal-backdrop">&nbsp;</div>'));
  $('.modal-backdrop').off('click').oove();
  });
}


function loadHelp() {
  $('.help, .modal-backdrop, .tooltip, #help-close, .tooltip-arrow-hack').remove();
  insertHelpModalBackdrop();
  $('body').append($('<img id="help-close" src="/assets/images/gproduct/images/icons/close-help.png" alt="Close Help" />'));
  $('#help-close').off('click').oelp();
  }).css({
    'position' : 'fixed',
    'right'    : '1px',
    'top'      : '1px'
  });
  loadHelpMain();

  if ($('body').hasClass('home')) loadHelpHome();
  else if ($('body').hasClass('gms')) loadHelpGms();
  else if ($('body').hasClass('events-calendar')) loadHelpEvents();
  else if ($('body').hasClass('explore')) loadHelpExplore();
  else if ($('body').hasClass('track')) { // Help for track pages:
    if ($('body').hasClass('activate-dashboard') || $('body').hasClass('activate-inititiaves') || $('body').hasClass('activate-gtm') || $('body').hasClass('activate-vendors')) loadHelpTrackDashboard();
    else if ($('body').hasClass('setup')) loadHelpTrackSetup();
    else if ($('body').hasClass('manage')) loadHelpTrackManage();
  }
  else if ($('body').hasClass('connect')) loadHelpConnect();
  else if ($('body').hasClass('search')) loadHelpSearch();
  else if ($('body').hasClass('library')) loadHelpLibrary();
  else if ($('body').hasClass('activity')) loadHelpActivity();
  else if ($('body').hasClass('profile')) loadHelpProfile();
  else if ($('body').hasClass('reader') || $('body').hasClass('readerV2')) loadHelpReader();
  else if ($('body').hasClass('magicQuadrant')) loadHelpMQ();

  $('.help')
  .off('mouseenter mouseleave click')
//  .on('mouseenter', function() {
  .on('click', function() {
    $('.tooltip.in').remove();
    $('.tooltip-arrow-hack').remove();
    var helpTgt = $(this);
    var helpTgtId = $(this).attr('id');
    clearTimeout(helpToolTimer);
    $('.help').tooltip('destroy');
    $(this).tooltip('show');
    $('.tooltip.in').css('visibility', 'hidden');
    setTimeout(function() {
      /*
      $('.tooltip')
      .off('mouseenter mouseleave')
      .on('mouseenter', function() {
        clearTimeout(helpToolTimer);
      }).on('mouseleave', function() {
        $('.help').tooltip('destroy');
      });
      */
      $('.tooltip').css({
        'opacity'               : '1',
        '-webkit-border-radius' : '4px',
        '-moz-border-radius'    : '4px',
        'border-radius'         : '4px',
        'background'            : '#fff',
        'width'                 : '400px',
        '-webkit-box-shadow'    : '13px 13px 19px rgba(57, 57, 57, 0.69)',
        '-moz-box-shadow'       : '13px 13px 19px rgba(57, 57, 57, 0.69)',
        'box-shadow'            : '13px 13px 19px rgba(57, 57, 57, 0.69)',
        'padding'               : '5px 0 0 0'
      });
      $('.tooltip.top .tooltip-arrow').css({
        'border-top-color' : '#fff',
        'bottom'           : '-5px',
        'margin-left'      : '-98px'
      });
      $('.tooltip.right .tooltip-arrow').css('border-right-color', '#fdd000');
      $('.tooltip.bottom .tooltip-arrow').css({
        'border-bottom-color' : '#fdd000',
        'margin-top'          : '-5px',
        'margin-left'         : '-98px'
      });
      $('.tooltip.left .tooltip-arrow').css('border-left-color', '#fdd000');
      $('.tooltip-inner')
      .css({
        'background-color' : '#fff',
        'color'            : '#333',
        'padding'          : '0'
      });
      $('.tooltip-inner p').css({
        'padding'     : '12px 12px 0 12px',
        'font-size'   : '15px',
        'line-height' : '19px',
        'text-align'  : 'left',
        'width'       : '376px',
        'color'       : '#333',
        'font-family' : 'Arial, Helvetica, sans-serif'
      });
      if ($('body').hasClass('magicQuadrant')) {
        $('.tooltip').css('width', '376px');
        $('.tooltip span object').css('margin', '0');
        $('.tooltip').animate({left: '+=6'}, 0);
      }
      if (helpTgtId === 'help-nav-activity') {
        $('.tooltip').css('margin-left', '-100px');
        if ($('body').hasClass('track')) $('.tooltip-arrow').css('margin-left', '57px');
        else $('.tooltip-arrow').css('margin-left', '1px');
      } else if (helpTgtId === 'help-nav-profile') {
        $('.tooltip').css('margin-left', '-200px');
        if ($('body').hasClass('track')) $('.tooltip-arrow').css('margin-left', '157px');
        else $('.tooltip-arrow').css('margin-left', '101px');
      } else if (helpTgtId === 'help-gms-filter') {
        $('.tooltip').css({
          'margin-left': '-200px',
          'margin-top': '86px'
        });
        $('.tooltip-arrow').css('margin-left', '102px');
      } else if (helpTgtId === 'help-gms-detail-view') {
        $('.tooltip').css({
          'margin-top': '65px',
          'margin-left': '44px'
        });
        $('.tooltip-arrow').css('margin-left', '-138px');
      } else if (helpTgtId === 'help-gms-bubble-tree') {
        $('.tooltip').css('margin-top', '256px');
      } else if (helpTgtId === 'help-gms-graph-tabs') {
        $('.tooltip').css('margin-top', '86px');
      } else if (helpTgtId === 'help-nav-library') {
        $('.tooltip').css('margin-left', '-50px');
        if ($('body').hasClass('track')) $('.tooltip-arrow').css('margin-left', '8px');
        else $('.tooltip-arrow').css('margin-left', '-49px');
      } else if (helpTgtId === 'help-nav-explore') {
        if ($('body').hasClass('track')) $('.tooltip-arrow').animate({marginLeft: '+=55'}, 0);
      } else if (helpTgtId === 'help-nav-track') {
        if ($('body').hasClass('track')) $('.tooltip-arrow').animate({marginLeft: '+=55'}, 0);
      } else if (helpTgtId === 'help-nav-connect') {
        if ($('body').hasClass('track')) $('.tooltip-arrow').animate({marginLeft: '+=55'}, 0);
      } else if (helpTgtId === 'help-nav-search') {
        if ($('body').hasClass('track')) $('.tooltip-arrow').animate({marginLeft: '+=55'}, 0);
      } else if (helpTgtId === 'help-reading-history' && !$('body').hasClass('readerV2')) {
        if ($('body').hasClass('track')) $('.tooltip').animate({top: '+=50', left: '+=50'}, 0);
        else $('.tooltip').animate({top: '+=10'}, 0);
      } else if (helpTgtId === 'help-track-dashboard-documents') {
        $('.tooltip').animate({top: '+=20', left: '+=60'}, 0);
      } else if (helpTgtId === 'help-track-dashboard-add') {
        $('.tooltip').css('margin-left', '-200px');
        $('.tooltip-arrow').css('margin-left', '157px');
      } else if (helpTgtId === 'help-track-dashboard-manage') {
        $('.tooltip').css('margin-left', '-200px');
        $('.tooltip-arrow').css('margin-left', '157px');
      } else if (helpTgtId === 'help-search-connect' || helpTgtId === 'help-search-explore' || helpTgtId === 'help-search-track') {
        $('.tooltip').css('margin-left', '-255px');
        $('.tooltip-arrow').css('margin-left', '157px');
      } else if (helpTgtId === 'help-search-definition') {
        $('.tooltip').css({
          'margin-left' : '26px',
          'margin-top'  : '7px'
        });
        $('.tooltip-arrow').css('margin-left', '-85px');
      } else if (helpTgtId === 'help-profile-definition') {
      } else if ($('body').hasClass('track')) {
        $('.tooltip-arrow').css('margin-left', '-43px');
      }

      // Fixes for tooltip arrows in IE:
      if ($('body').hasClass('ie')) {
        if ($('body').hasClass('v-8')) { // IE8 fix:
          $('.tooltip-arrow').animate({'left' : '+=12'},0);

          // TEMPORARY FIX FOR BOOTSTRAP ISSUE # 4852 / 7170
          $('.tooltip.in').each(function() {
            var direction = 'up',
              located = 'top',
              adjustTop = '+=0',
              adjustLeft = '+=6',
              opposite = 'bottom',
              randomId = 'tooltip-' + randNum(1, 10000);

            if (trimAll($(this).attr('id'))!='') randomId = $(this).attr('id');
            else $(this).attr('id', randomId);

            if ($(this).hasClass('top')) {
              direction = 'down';
              opposite = 'top';
              located = 'bottom';
              adjustTop = '+=0';
              adjustLeft = '+=0';
            }

            var arrowId = randomId + '-arrow';

            $('body').append($('<img class="tooltip-arrow-hack" style="position: fixed; z-index: 5000;" id="'+arrowId+'" src="/assets/images/gproduct/images/help/help-arrow-'+direction+'.png" />'));
            if (helpTgtId === 'help-nav-profile' || helpTgtId === 'help-track-dashboard-manage' || helpTgtId === 'help-track-dashboard-add') {
              adjustLeft = '+=194';
              $('.tooltip').animate({left: '+=13'},0);
            } else if (helpTgtId === 'help-nav-library') adjustLeft = '+=57';
            else if (helpTgtId === 'help-nav-activity') adjustLeft = '+=107';
            else if (helpTgtId === 'help-reading-history' && !$('body').hasClass('readerV2')) {
              if ($('body').hasClass('track')) $('.tooltip').animate({left: '-=39', top: '-=7'},0);
              else if ($('body').hasClass('profile')) {
                $('.tooltip').animate({left: '+=13', top: '+=22'},0);
                adjustTop = '-=2';
              } else $('.tooltip').animate({left: '+=6', top: '+=24'},0);
            } else if (helpTgtId === 'help-home-reco-engine') {
              $('.tooltip').animate({left: '+=57'},0);
              adjustLeft = '-=50';
            }
            $('#'+arrowId).position({
              my: 'center ' + opposite,
              at: 'center ' + located,
              of: '#'+randomId
            }).animate({top: adjustTop, left: adjustLeft}, 0);
            if ($('body').hasClass('track')) $('.tooltip.in').animate({left: '+=12'},0);
            $('.tooltip-arrow').remove();
          }); // end of IE8 fixes
        } else if ($('body').hasClass('v-10')) { // IE10 fix:
          if ($('body').hasClass('track')) $('.tooltip-arrow').animate({'left' : '-=6'},0);
          else $('.tooltip-arrow').animate({'left' : '-=10'},0);
        }
      }

      if ($('body').hasClass('search')) {
        if (
          !(
            $('body').hasClass('ie') && $('body').hasClass('v-8')
          )
        ) { // Search page fixes for all browsers *except* IE8:
          if (
            helpTgtId === 'help-search-track' ||
            helpTgtId === 'help-search-explore' ||
            helpTgtId === 'help-search-connect'
          ) $('.tooltip').animate({left: '+=57'},0);
          else $('.tooltip-arrow').animate({'left' : '+=57'},0);
        } else { // Search page fixes for IE8:
          if (
            helpTgtId === 'help-search-track' ||
            helpTgtId === 'help-search-explore' ||
            helpTgtId === 'help-search-connect'
          ) {
            $('.tooltip').animate({left: '+=157'},0);
            $('.tooltip-arrow-hack').animate({'left' : '+=257'},0);
          }
        }
      }

      // Fix for profile issues:
      if ($('body').hasClass('profile')) {
        $('.tooltip-arrow').animate({'left' : '+=9'},0);
        $('.tooltip-inner').css({
          'background-image' : 'none',
          'box-shadow'       : 'none',
          'border'           : 'none'
        });
      }
      $('.tooltip.in').css('visibility', 'visible');
    }, 50);
  })
  /*
  .on('mouseleave', function() {
    helpToolTimer = setTimeout(function() {
      $('.help').tooltip('destroy');
    }, 300);
  })
  */
  ;
  $(window).resize(function() {
    unloadHelp();
  });
  $(windelp();
  });
  var backdropInterval = setInterval(function() {
    if (!$('.modal-backdrop').length && $('.help').length) insertHelpModalBackdrop();
    else if (!$('.help').length) clearInterval(backdropInterval);
  }, 50);
  rval);
  }, 5000);
}

function loadHelpMain() { // Loads the global help widgets found on all pages
  // Help widget: header navigation - explore button
  $('body').append($('<div class="help" id="help-nav-explore">&nbsp;</div>'));
  $('#help-nav-explore')
  .position({
    my: "center top",
    at: "center center",
    of: ".navExplore"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonNavExploreTitle + '</h5><p>' + helpCommonNavExploreContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  // Help widget: header navigation - track button
  $('body').append($('<div class="help" id="help-nav-track">&nbsp;</div>'));
  $('#help-nav-track')
  .position({
    my: "center top",
    at: "center center",
    of: ".navTrack"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonNavTrackTitle + '</h5><p>' + helpCommonNavTrackContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  // Help widget: header navigation - connect button
  $('body').append($('<div class="help" id="help-nav-connect">&nbsp;</div>'));
  $('#help-nav-connect')
  .position({
    my: "center top",
    at: "center center",
    of: ".navConnect"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonNavConnectTitle + '</h5><p>' + helpCommonNavConnectContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

/*
  // Help widget: header navigation - search button
  $('body').append($('<div class="help" id="help-nav-search">&nbsp;</div>'));
  $('#help-nav-search')
  .position({
    my: "center top",
    at: "center center",
    of: ".no-bg"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonNavSearchTitle + '</h5><p>' + helpCommonNavSearchContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();
*/

  // Help widget: header navigation - library button
  $('body').append($('<div class="help" id="help-nav-library">&nbsp;</div>'));
  $('#help-nav-library')
  .position({
    my: "center top",
    at: "center center",
    of: ".navMyLibrary"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonNavLibraryTitle + '</h5><p>' + helpCommonNavLibraryContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  // Help widget: header navigation - activity button
  $('body').append($('<div class="help" id="help-nav-activity">&nbsp;</div>'));
  $('#help-nav-activity')
  .position({
    my: "center top",
    at: "center center",
    of: ".navMyActivities"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonNavActivityTitle + '</h5><p>' + helpCommonNavActivityContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  // Help widget: header navigation - profile button
  $('body').append($('<div class="help" id="help-nav-profile">&nbsp;</div>'));
  $('#help-nav-profile')
  .position({
    my: "center top",
    at: "center center",
    of: ".navMyProfile"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonNavProfileTitle + '</h5><p>' + helpCommonNavProfileContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  if ($('#reading-history-toggle').length && !$('body').hasClass('readerV2')) {
    $('body').append($('<div class="help" id="help-reading-history">&nbsp;</div>'));
    $('#help-reading-history')
    .position({
      my: "right top",
      at: "right top",
      of: "#reading-history-toggle"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpCommonReadingHistoryTitle + '</h5><p>' + helpCommonReadingHistoryContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'top',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .tooltip();
  } // if ($('#reading-history-toggle').length)
  // End of help widget: reading history
} // end loadHelpMain()

function loadHelpMQ() { // Loads help widgets found on the home page
  // Help widget: MQ video
  $('body').append($('<div class="help star" id="help-mq-video">&nbsp;</div>'));
  var playerId = '1373299780';
  var uiConfId = '14093701';
  var entryId  = '1_tl68f7c2';
  var vidWidth = '370';
  var vidHeight = '208';
  $('#help-mq-video')
  .position({
    my: "left center",
    at: "left center",
    of: ".MagicQuadrant-content h1"
  })
  .attr({
    //'title'          : '<h5 class="help-title sans-serif condensed">' + helpMQDefinitionTitle + '</h5><p>' + helpMQDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpMQDefinitionTitle + '</h5>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '+=360', 'top' : '+=13'}, 0)
  .tooltip();
} // end loadHelpMQ()

function loadHelpHome() { // Loads help widgets found on the home page
  // Help widget: recommendation feed
  $('body').append($('<div class="help star" id="help-home-feed">&nbsp;</div>'));
  var playerId = '1368756989';
  var uiConfId = '14093701';
  var entryId  = '1_cpxxvtrj';
  var vidWidth = '370';
  var vidHeight = '208';
  $('#help-home-feed')
  .position({
    my: "center top",
    at: "center top",
    of: ".homeslider"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpHomeRecoFeedTitle + '</h5><p>' + helpHomeRecoFeedContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();
/*
  // Help widget: recommendation engine
  $('body').append($('<div class="help" id="help-home-reco-engine">&nbsp;</div>'));
  $('#help-home-reco-engine')
  .position({
    my: "left center",
    at: "right center",
    of: "#reco-engine-msg"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpHomeRecoEngineTitle + '</h5><p>' + helpHomeRecoEngineContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();
  */
} // loadHelpHome()

function loadHelpExplore() {

} // loadHelpExplore()

function loadHelpGms() {
  var thisHelpId                = 'help-gms-detail-view',
    thisHelpRefPt             = '#navTree .filter-drawer-label';

  exposeGraphTabs();

  if ($('#' + thisHelpId).length === 0) {
    $('body').append($('<div class="help" id="' + thisHelpId + '">&nbsp;</div>'));
    $('#' + thisHelpId)
    .position({
      my: 'left top',
      at: 'left top',
      of: thisHelpRefPt
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpGmsDetailViewTitle + '</h5><p>' + helpGmsDetailViewContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'top',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .tooltip();
  } // helpGmsDetailView

  thisHelpId    = 'help-gms-filter';
  thisHelpRefPt = '.overlayMenu .filter-drawer-label';
  if ($('#' + thisHelpId).length === 0) {
    $('body').append($('<div class="help" id="' + thisHelpId + '">&nbsp;</div>'));
    $('#' + thisHelpId)
    .position({
      my: 'left top',
      at: 'left top',
      of: thisHelpRefPt
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpGmsFilterTitle + '</h5><p>' + helpGmsFilterContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'top',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    // .animate({'left' : '+=120', 'top' : '+=100'}, 0)
    .tooltip();
  } // helpGmsFilter

  thisHelpId    = 'help-gms-bubble-tree';
  thisHelpRefPt = '#bubbletree';
  if ($('#' + thisHelpId).length === 0) {
    $('body').append($('<div class="help" id="' + thisHelpId + '">&nbsp;</div>'));
    $('#' + thisHelpId)
    .position({
      my: 'center center',
      at: 'center center',
      of: thisHelpRefPt
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpGmsBubbleTreeTitle + '</h5><p>' + helpGmsBubbleTreeContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'top',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    // .animate({'left' : '+=120', 'top' : '+=100'}, 0)
    .tooltip();
  } // helpGmsBubbleTree

  thisHelpId    = 'help-gms-graph-tabs';
  thisHelpRefPt = '.gmsGraphTabs';
  if ($('#' + thisHelpId).length === 0) {
    $('body').append($('<div class="help" id="' + thisHelpId + '">&nbsp;</div>'));
    $('#' + thisHelpId)
    .position({
      my: 'center top',
      at: 'center top',
      of: thisHelpRefPt
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpGmsGraphTabsTitle + '</h5><p>' + helpGmsGraphTabsContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'top',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    }).animate({'top' : '-=100'}, 0).tooltip();
  } // helpGmsGraphTabs
} // loadHelpGms()

function loadHelpEvents() {
  // Help widget: events - definition
  $('body').append($('<div class="help" id="help-events-definition">&nbsp;</div>'));
  $('#help-events-definition')
  .position({
    my: "right center",
    at: "right center",
    of: "#activities > header > h1"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpEventsDefinitionTitle + '</h5><p>' + helpEventsDefinitionContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  // Help widget: events - timeline
  $('body').append($('<div class="help" id="help-events-timeline">&nbsp;</div>'));
  $('#help-events-timeline')
  .position({
    my: "center center",
    at: "center center",
    of: ".timeline"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpEventsSkyscraperTitle + '</h5><p>' + helpEventsSkyscraperContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();
} // end loadHelpEvents()

function loadHelpTrackDashboard() {
  // Help widget: track dashboard definition
  $('body').append($('<div class="help star" id="help-track-dashboard-definition">&nbsp;</div>'));
  var playerId = '1368757259';
  var uiConfId = '14093701';
  //var entryId  = '1_fdfhfn9r';
  var entryId  = '1_nifx4m5p';
  var vidWidth = '370';
  var vidHeight = '208';
  $('#help-track-dashboard-definition')
  .position({
    my: "center center",
    at: "center center",
    of: "h1"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackDashboardDefinitionTitle + '</h5><p>' + helpTrackDashboardDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '-=120'}, 0)
  .tooltip();

  if ($('#help-track-dashboard-documents').length > 0) {
    // Help widget: track dashboard documents
    $('body').append($('<div class="help" id="help-track-dashboard-documents">&nbsp;</div>'));
    $('#help-track-dashboard-documents')
    .position({
      my: "left top",
      at: "left top",
      of: "#track-documents"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackDashboardDocumentsTitle + '</h5><p>' + helpTrackDashboardDocumentsContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'top',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .animate({'left' : '+=120', 'top' : '+=100'}, 0)
    .tooltip();
  }

  // Help widget: track dashboard add
  $('body').append($('<div class="help" id="help-track-dashboard-add">&nbsp;</div>'));
  $('#help-track-dashboard-add')
  .position({
    my: "right center",
    at: "left center",
    of: ".btn-green-link .btn-green .icon-green"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackDashboardAddTitle + '</h5><p>' + helpTrackDashboardAddContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '-=20'}, 0)
  .tooltip();

  // Help widget: track dashboard manage
  $('body').append($('<div class="help" id="help-track-dashboard-manage">&nbsp;</div>'));
  $('#help-track-dashboard-manage')
  .position({
    my: "right center",
    at: "left center",
    of: ".span12 .pull-right small"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackDashboardManageTitle + '</h5><p>' + helpTrackDashboardManageContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '-=20'}, 0)
  .tooltip();
} // end loadHelpTrackDashboard()

function loadHelpTrackSetup() {
  // Help widget: track setup definition
  $('body').append($('<div class="help star" id="help-track-setup-definition">&nbsp;</div>'));
  var playerId = '1368757259';
  var uiConfId = '14093701';
  //var entryId  = '1_fdfhfn9r';
  var entryId  = '1_nifx4m5p';
  var vidWidth = '370';
  var vidHeight = '208';
  $('#help-track-setup-definition')
  .position({
    my: "center center",
    at: "center center",
    of: "h1"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackSetupDefinitionTitle + '</h5><p>' + helpTrackSetupDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '-=120'}, 0)
  .tooltip();

  // Help widget: track setup - search
  $('body').append($('<div class="help" id="help-track-setup-search">&nbsp;</div>'));
  $('#help-track-setup-search')
  .position({
    my: "center center",
    at: "center center",
    of: ".input-create-track"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackSetupSearchTitle + '</h5><p>' + helpTrackSetupSearchContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '-=120'}, 0)
  .tooltip();

  // Help widget: track setup - browse
  $('body').append($('<div class="help" id="help-track-setup-browse">&nbsp;</div>'));
  $('#help-track-setup-browse')
  .position({
    my: "center center",
    at: "center top",
    of: ".Lpad40 > .span12"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackSetupBrowseTitle + '</h5><p>' + helpTrackSetupBrowseContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '-=120'}, 0)
  .tooltip();
} // end loadHelpTrackSetup()

function loadHelpTrackManage() {
  // Help widget: track manage page - definition
  $('body').append($('<div class="help star" id="help-track-manage-definition">&nbsp;</div>'));
  var playerId = '1368757259';
  var uiConfId = '14093701';
  //var entryId  = '1_fdfhfn9r';
  var entryId  = '1_nifx4m5p';
  var vidWidth = '370';
  var vidHeight = '208';
  $('#help-track-manage-definition')
  .position({
    my: "center center",
    at: "center center",
    of: "h1"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpTrackManageDefinitionTitle + '</h5><p>' + helpTrackManageDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .animate({'left' : '-=120'}, 0)
  .tooltip();
} // end loadHelpTracect() {

} // end loadHelpConnect()

function loadHelpSearch() {
  // Help widget: search - definition
  $('body').append($('<div class="help star" id="help-search-definition">&nbsp;</div>'));
  var playerId = '1368756918';
  var uiConfId = '14093701';
//  var entryId  = '1_c4djah6n';
  var entryId  = '1_365z581v';
  var vidWidth = '370';
  var vidHeight = '208';
  /*if(typeof(serachEngineType) === 'undefined') {
    var playerId = '1368756918';
    var uiConfId = '14093701';
  //  var entryId  = '1_c4djah6n';
    var entryId  = '1_365z581v';
    var vidWidth = '370';
    var vidHeight = '208';
    $('#help-search-definition')
    .position({
      my: "left top",
      at: "left top",
      of: "#searchResults"
    })
    .attr({
        'title'          : '<h5 class="help-title sans-serif condensed">' + helpSearchDefinitionTitle + '</h5><p style="padding-top:0px;">' + helpSearchDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight)+'<div style="width:400px;border-top:1px solid #cccccc;">'+
                            '<a href="http://www.gartner.com/imagesrv/pdf/my_gartner_advanced_search_quick_reference_guide.pdf" _target="blank" style="display:inline-block"><div id="DownloadPdfLink"></div></a>'+
                            '<a href="http://www.gartner.com/imagesrv/pdf/my_gartner_advanced_search_quick_reference_guide.pdf" _target="blank"  id="DownloadPdfALink"><span>Search Tips and Tricks </span><span style="font-size:15px;font-weight: normal; color:#4C4C4C;" >(615kb)</span></a></div>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .animate({
      'left' : '+=57',
      'top'  : '+=10'
    }, 0)
    .tooltip();
  }
  else {*/
    var playerId = '1368756918';
    var uiConfId = '14093701';
  //  var entryId  = '1_c4djah6n';
    var entryId  = '1_lrjjdn0c';
    var vidWidth = '370';
    var vidHeight = '208';
    $('#help-search-definition')
    .position({
      my: "left top",
      at: "left top",
      of: "#resultSection"
    })
    .attr({
        'title'          : '<h5 class="help-title sans-serif condensed">' + helpSearchDefinitionTitle + '</h5><p style="padding-top:0px;">' + helpSearchDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight)+'<div style="width:400px;border-top:1px solid #cccccc;">'+
                            '<a href="http://www.gartner.com/imagesrv/pdf/my_gartner_advanced_search_quick_reference_guide.pdf" _target="blank" style="display:inline-block"><div id="DownloadPdfLink"></div></a>'+
                            '<a href="http://www.gartner.com/imagesrv/pdf/my_gartner_advanced_search_quick_reference_guide.pdf" _target="blank"  id="DownloadPdfALink"><span>Search Tips and Tricks </span><span style="font-size:15px;font-weight: normal; color:#4C4C4C;" >(615kb)</span></a></div>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .animate({
      'left' : '+=57',
      'top'   : '+=10'
    }, 0)
    .tooltip();
 // }

  if ($('#track').length) {
    // Help widget: search - track
    $('body').append($('<div class="help" id="help-search-track">&nbsp;</div>'));
    $('#help-search-track')
    .position({
      my: "left top",
      at: "center top",
      of: "#track"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpSearchTrackTitle + '</h5><p>' + helpSearchTrackContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .tooltip();
  }

  if ($('#explore').length) {
    // Help widget: search - explore
    $('body').append($('<div class="help" id="help-search-explore">&nbsp;</div>'));
    $('#help-search-explore')
    .position({
      my: "left top",
      at: "center top",
      of: "#explore"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpSearchExploreTitle + '</h5><p>' + helpSearchExploreContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .tooltip();
  }

  if ($('#connect').length) {
    // Help widget: search - connect
    $('body').append($('<div class="help" id="help-search-connect">&nbsp;</div>'));
    $('#help-search-connect')
    .position({
      my: "left top",
      at: "center top",
      of: "#connect"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpSearchConnectTitle + '</h5><p>' + helpSearchConnectContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .tooltip();
  }
} // end loadHelpSearch()

function loadHelpLibrary() {
  $('div[value="All Documents"]').addClass('all-doc');
  // Help widget: library - definition
  $('body').append($('<div class="help star" id="help-library-definition">&nbsp;</div>'));
  var playerId = '1368757188';
  var uiConfId = '14093701';
  // var entryId  = '1_fruku058';
  var entryId  = '1_dhltiwzq';
  var vidWidth = '370';
  var vidHeight = '208';
  $('#help-library-definition')
  .position({
    my: "right center",
    at: "right center",
    of: ".all-doc"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpLibraryDefinitionTitle + '</h5><p>' + helpLibraryDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  if ($('.team-lib').length) {
    // Help widget: library - definition
    $('body').append($('<div class="help" id="help-library-team-folder">&nbsp;</div>'));
    $('#help-library-team-folder')
    .position({
      my: "right center",
      at: "right center",
      of: ".team-lib"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpLibraryTeamFolderTitle + '</h5><p>' + helpLibraryTeamFolderContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .tooltip();
  }
} // end loadHelpLibrary()

function loadHelpActivity() {
  // Help widget: activity - definition
  $('body').append($('<div class="help star" id="help-activity-definition">&nbsp;</div>'));
  var playerId = '1368757226';
  var uiConfId = '14093701';
  var entryId  = '1_482panyf';
  // var entryId  = '1_33ihqvc9';
  var vidWidth = '370';
  var vidHeight = '208';
  $('#help-activity-definition')
  .position({
    my: "right center",
    at: "right center",
    of: "#activities > header > h1"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpActivityDefinitionTitle + '</h5><p>' + helpActivityDefinitionContent + '</p>' + kalturaVideo(playerId, uiConfId, entryId, vidWidth, vidHeight),
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();

  // Help widget: activity - timeline
  $('body').append($('<div class="help" id="help-activity-timeline">&nbsp;</div>'));
  $('#help-activity-timeline')
  .position({
    my: "center center",
    at: "center center",
    of: ".timeline"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpActivitySkyscraperTitle + '</h5><p>' + helpActivitySkyscraperContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();
} // end loadHelpActivity()

function loadHelpProfile() {
  // Help widget: profile - definition
  $('body').append($('<div class="help" id="help-profile-definition">&nbsp;</div>'));
  $('#help-profile-definition')
  .position({
    my: "right center",
    at: "center center",
    of: "#content > .row-fluid > .span12 > h1"
  })
  .attr({
    'title'          : '<h5 class="help-title sans-serif condensed">' + helpProfileDefinitionTitle + '</h5><p>' + helpProfileDefinitionContent + '</p>',
    'data-html'      : 'true',
    'data-placement' : 'bottom',
    'data-container' : 'body',
    'data-trigger'   : 'manual',
    'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
  })
  .tooltip();
} // end loadHelpProfile()

function loadHelpReader() {
  if ($('.view-interact').length) {
    // Help widget: reader - interactive version button
    $('body').append($('<div class="help" id="help-reader-interactive">&nbsp;</div>'));
    $('#help-reader-interactive')
    .position({
      my: "center center",
      at: "center center",
      of: ".view-interact"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpReaderInteractiveTitle + '</h5><p>' + helpReaderInteractiveContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .animate({'left' : '-=120'}, 0)
    .tooltip();
  }
  else if ($('.view-snapshot').length) {
    // Help widget: reader - snapshot button
    $('body').append($('<div class="help" id="help-reader-snapshot">&nbsp;</div>'));
    $('#help-reader-snapshot')
    .position({
      my: "center center",
      at: "center center",
      of: ".view-snapshot"
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpReaderSnapshotTitle + '</h5><p>' + helpReaderSnapshotContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .animate({'left' : '-=120'}, 0)
    .tooltip();
  }
  else if ($('.on-snapshot').length) {
    // Help widget: when on the snapshot page
    $('body').append($('<div class="help" id="help-reader-snapshot">&nbsp;</div>'));
    $('#help-reader-snapshot')
    .position({
      my: 'center center',
      at: 'center center',
      of: '.on-snapshot'
    })
    .attr({
      'title'          : '<h5 class="help-title sans-serif condensed">' + helpReaderOnSnapshotTitle + '</h5><p>' + helpReaderOnSnapshotContent + '</p>',
      'data-html'      : 'true',
      'data-placement' : 'bottom',
      'data-container' : 'body',
      'data-trigger'   : 'manual',
      'data-template'  : '<div class="tooltip" style="position: fixed; z-index: 4001;"><div class="tooltip-arrow"></div><div class="tooltip-inner sans-serif"> </div></div>'
    })
    .animate({'left' : '-=120'}, 0)
    .tooltip();
  }
} // end loadHelpReader()

function hideHoverView (hoverView) {
  $(hoverView).popover('hide');
  hoverViewShowing = undefined;
}

function toggleHoverView(clickTarget) {
  if (hoverViewShowing == clickTarget) hideHoverView(hoverViewShowing);
  else {
    $('.hoverview').popover('destroy');
    hoverViewShowing = undefined;
    var hoverUrl = $(clickTarget).attr('data-hover-link');

    $.ajax({
      type: 'GET',
      url: hoverUrl,
      dataType: 'html',
      cache: false,
      context: clickTarget,

      success: function(data) {
        $(clickTarget).attr('data-content', data);
        $(clickTarget).popover('show');
        $('.popover.in .scroll-pane').jScrollPane();
        hoverViewShowing = clickTarget;
      }
    });
  }
}

function pageSpecificDocReady() {
  if ($('body').hasClass('home')) homeDocReady();
}

function homeDocReady() {
  $('.side-box .inner p').each(function () {
    var summaryText = trimAll($(this).text());
    $(this).text(summaryText.trunc(64, true));
  });
}

function alternateIPlookup() {
  if (typeof geoData === "undefined" || typeof geoData.ip === "undefined") {
    $('script[src="//freegeoip.net/json?callback=getip"]').remove();
    getScript('//jsonip.appspot.com/?callback=getip', null, false, 'defer');
    setTimeout(finalIPlookup, 1500);
  }
} // alternateIPlookup()

function finalIPlookup() {
  if (typeof geoData === "undefined" || typeof geoData.ip === "undefined") {
    $('script[src="//jsonip.appspot.com/?callback=getip"]').remove();
    getScript('//l2.io/ip.js?var=userIp', null, false, 'defer');
    setTimeout(failWhale, 1500);
  }
} // finalIPlookup()

function failWhale() {
  if (typeof geoData === 'undefined' || typeof geoData.ip === 'undefined') $('script[src="//l2.io/ip.js?var=userIp"]').remove();
} // faturn rv;
} // getIEVersion()





function artificialFormPost(path, params, method) {
  method = method || "post"; // Set method to post by default if not specified.

  var artificialForm = document.createElement("form");
  artificialForm.setAttribute("method", method);
  artificialForm.setAttribute("action", path);

  for(var key in params) {
    if(params.hasOwnProperty(key)) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);

      artificialForm.appendChild(hiddenField);
    }
  }

  document.body.appendChild(artificialForm);
  artificialForm.sn false;
}
function setPermanentCookie(name, value) {
  var expires = 'expires=Fri, 31 Dec 9999 23:59:59 GMT";';
  document.cookie = name + '=' + value + ';' + 1 GMT;';
}
function testCookies() {
  var cookieExists = getAccessCookie('testC00kie');
  if (cookieExists == "true") {
    return true;
  }
  else{
    setAccessCookie('testC00kie', true);
    cookieExists = getAccessCookie('testC00kie');
    if(cookieExists == "true") {
      return true;
    }
    else {
      return false;
    }
  }
}
// Utility Function for Image Beacons to track interactions
function beacon(opts) {
  // Make sure we have a base object for opts
  opts = opts || {};
  // Setup defaults for options
  opts.url = opts.url || null;
  opts.vars = opts.vars || {};
  opts.error = opts.error || function(){};
  opts.success = opts.nction(){};

  // Split up vars object into an array
  var varsArray = [];
  for(var key in opts.vars){ varsArray.push(key+'='+opts.vars[key]); }
  // Build query string
  var qString = varsArray.join('&');

  // Create a beacon if a url is provided
  if( opts.url )
  {
    // Create a brand NEW image object
    var beacon = new Image();
    // Attach the event handlers to the image object
    if( beacon.onerror )
    { beacon.onerror = opts.error; }
    if( beacon.onload )
    { beacon.onload  = opts.success; }

    // Attach the src for the script call
    beacon.src = opts.url + '?' + qString;
  }
}// beacon(opts)

function popWarningMessage(message) {
  var $body = $('body');
  if (// conditional to ensure that this message doesn't show on improper pages
    $body.hasClass('doc-display') ||
    $body.hasClass('research-doc') ||
    $body.hasClass('site-search')
  ) return;// Not for use on the marketing site!

  var message = message || "You are using an older version of your browser. Your experience on Gartner.com may be negatively impacted. If you prefer, you can <a href='/user/profile/preferences/switchSiteAccess'>switch access in preferences</a> to the simplified version of the site.",
      container = "<div class='warning-message'><p>"+message+"</p><div class='warning-dismiss'>X</div></div>";
  $('body').prepend(container);
  $('.warning-message').on('click', '.warning-dismiss', function(event) {
    event.preventDefault();
    try {// EC-793
      localStorage.browserSupportMsg = 'false';
    } catch (e) {}
    $('.warning-message').remove();
  });
}// popWarningMessage(message)

function launchSiteAccessPrefsModal() {
  try {// Site access preferences modal lets the user choose between the normal My Gartner and Gartner Lite:
    var bodyClassesArray = $('body').attr('class').split(' '),
        supportMessage = localStorage.getItem("browserSupportMsg"),
        isImpersonated = window.isImpersonatedDontShowSwitchSiteAccess || false;
    if (bodyClassesArray.indexOf('ie') !== -1) {//browser must be ie as detected by modernizr
      if (bodyClassesArray.indexOf('edge') !== -1) {//browser is IE Edge and that's okay
        $('#preferenceModal p#fullySupported').show();
      }
      else if (bodyClassesArray.indexOf('v-11') !== -1) {//We support IE11
        $('#preferenceModal p#fullySupported').show();
      }
      else {//must be using Old IE
        $('#preferenceModal p#partiallySupported').show();
        if( supportMessage === null || supportMessage === "null"){//set local storage and pop warning message
          localStorage.browserSupportMsg = 'gcom';
          popWarningMessage();
        }
        else if(supportMessage === "gcom") {
          popWarningMessage();
        }
        else if(supportMessage === false) {//The user has chosen to ignore the support message do nothing
        }
      }
    }
    else $('#preferenceModal p#fullySupported').show();//browser is not IE
  } catch (e) {// added to attempt a resolution to EC-793
    $('#preferenceModal p#fullySupported').show();
  }
}// launchSiteAccessPrefsModal()

function bindPrefsModal() {
  $('#preferenceModal').on('click', '.access-button', function(event) {
    var typeClicked = $(this).attr('type'),
        accessFormExists = $('#accessPreference').length,
        hostName = window.location.hostname,
        secureURL = 'https://'+hostName+'/user/profile/preferences/saveSitePreference',
        secureBeaconURL = 'https://'+hostName+'/lite';

    if (typeClicked === "submit") {
      if(accessFormExists > 0){//the form was triggered from the preferences page
        $('#accessPreference').prop( "checked", true );
        beacon({
          url: '/lite',
          vars: {changeSitePrefs: 'y'},
                 }()
        });
      }
      else {//the form was not triggered from the preferences page and we need to create one
        event.stopPropagation();
        beacon({
          url: secureBeaconURL,
          vars: {changeSitePrefs: 'y'},
                 }()
        });
      }
    }
    else {
      $('#preferenceModal').modal('hide');
      $('#accessPreference2').prop('checked', 'true');
    }
  });
}// bindPrefsModal

function docReady() { // Fires on document ready
  $.fn.reverse = [].reverse; // Used for reversing a list of elements
  windowPos = $(window).scrollTop(); // Stores current window scroll position

  if (getIEVersion() > 1 && getIEVersion() < 9) jsType = "text/javascript"; // fix for IE (versions prior to 9)

  bindAllHandlers(); // Event handler bindings for user interactions
  setAnalystProfileRightRailHeight(); // TODO: This should probably NOT be executed on every page!
  // if (!isLocal) { // Don't run metrics or IP tracking if the file is being loaded locally (or bad things happen):
  //   getScript('//freegeoip.net/json/?callback=getip', null, false, 'defer'); // Fetch user's IP
  //   setTimeout(alternateIPlookup, 1500);                                     // Alternate lookup for user IP
  // }
  advOnloadclick(); // Advanced search riggering point

  if (!$('body').hasClass('ie') || (!$('body').hasClass('v-7') && !$('body').hasClass('v-8'))) {
    $(window).scroll(function(){
      if ($('#reading-history-content').hasClass('in')) {
        $('#reading-history-content').collapse('hide').find('.title').attr('tabindex', '-1');
        $('#reading-history #reading-history-toggle').attr('aria-expanded', 'false');
      }
/*
      $('#keywords').on('focus', function(e) {
        $('#keywords').value = $('#keywords').value;
      });
*/
    });
  }

  setTimeout(function() {
    if ($('body').hasClass('ie') && $('body').hasClass('v-8')) $('body').css('min-height', '100%');
  }, 1600);

  pageSpecificDocReady();
  applyUserAgentClasses();
  fetchReadingHistory();
  bindReadingHistory();
  //if ($('body').hasClass('chrome') || $('body').hasClass('mozilla') || !($('body').hasClass('ie') && ($('body').hasClass('v-5') || $('body').hasClass('v-6') || $('body').hasClass('v-7')))) $('#message-box').hide(0);
  checkForProxy();
  /*
  if (window.PIE) {
    loadPIE();
    setTimeout(function() {
      loadPIEdelayed();
    }, 1000);
  }
  */
/* COMMENTED OUT FOR ASSOCIATE RELEASE
  $('.home .show-save-as, .track .show-save-as, .explore .show-save-as').each(function () {
    markSaved($(this).attr('data-resid'));
  });
*/

  if ($('body').hasClass('ie') && $('body').hasClass('v-8')) loadDelay = 1250;

  setTimeout(function() {
    $('body').addClass('loaded');
    if ($('body').hasClass('ie') && $('body').hasClass('v-8')) $(window).scrollTop(0);
    bindSaved();
    /*
    var classList = document.body.className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
       alert(classList[i]);
    } */
    if ($('body').hasClass('ios')) {
      document.ontouchmove = function(event) {
        event.preventDefault();
      };
      document.body.ont);
      };
    }
    $('#keywords').attr('autocomplete', 'off');
  }, loadDelay);

  $('#globalSearch').change(function() {
    changeForm = $('form[name=gSearchForm]');
    changeForm.keywords.value = $('#keywords').val();
    keywordsValue = changeForm.keywords.value;

    if(keywordsValue != '') {
      window.location = this.value + '?tabChg=true&amp;keywords=' + encodeURIComponent(document.getElementById('keywords').value);
     } else {
     // do nothing - wait for the user to enter keywords
     // optional: alert("Please provide keywords for your search");
    }
  });
  loadMessageBox();
  setActiveNav();
  bindPrefsModal();
  $('.linktoSearchQid').off('click');
  $('.linktoSearchQid').on('click',function(event) {
    var evt = event || window.event;
    if (!evt || typeof evt === "undefined") return false;
    if (evt.stopPropagation) evt.stopPropagation();
    else evt.returnValue = false;
    if (typeof evt.preventDefault === "function") evt.preventDefault();
    else evt.returnValue = false;
    var userUniqueQueryId = CryptoJS.MD5( userId+ new Date().getTime()+'',"SOf06MVaS9m1R0D14EIk66YVN8m5wP3W");
    window.location.href = $(this).attr('href')+"&keywords=&qid="+userUniqueQueryId.toString();
  });

  launchSiteAccessPrefsModal();

  
} // End of document ready function
