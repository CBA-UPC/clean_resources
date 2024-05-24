_mf__tag = {
	"init": function() {
    var id = 'mf__div';
    var script_parts = this.find_mf__tag();
    var url = script_parts[0];
    if (url.indexOf('//') != 0) url = '//' + url;
    var q_str = script_parts[1];
    var piggy_string = this.build_piggy_query_string(q_str); // for use with piggyback mid
    var query_string = this.build_pix_query_string(q_str);

    var div = this.create_element(document, ['div', 'id', id]);
    if (div) {
      div.style.display = "none";
      var body = document.getElementsByTagName('body')[0].firstChild;
      if(body) body.parentNode.insertBefore(div, body);
      var iframeSrc = url + '/pix/3036?type=pos' + query_string;
      this.create_element(document, ['iframe', 'width', '0', 'height', '0', 'src', iframeSrc ], div);
      this.load_cadence("");
       this.set_timeout(3000); 
    }
	},
  "create_element": function(doc, def, parent) {
  function local_create_element (doc, def, parent) {
    var el = null;
    if (typeof doc.createElementNS != "undefined") el = doc.createElementNS("http://www.w3.org/1999/xhtml", def[0]);
    else if(typeof doc.createElement != "undefined") el = doc.createElement(def[0]);

    if (!el) return false;

    for (var i = 1; i < def.length; i++) el.setAttribute(def[i++], def[i]);

    if (parent) parent.appendChild(el);
    return el;
  };

  var el = local_create_element(doc, def, parent);

  function localLoadScript(src) {
    var el = document.createElement('script');
    if (el) {
      el.setAttribute('type', 'text/javascript');
      el.src = src;
      document.body.appendChild(el);
    }
  };

  if (def[0] === "iframe") {
      function receiveMessage(e) {
        if (e.origin == "http://tags.rd.linksynergy.com" || e.origin == "http://tags.mediaforge.com" ||
            e.origin == "https://tags.rd.linksynergy.com" || e.origin == "https://tags.mediaforge.com" ||
            e.origin == "http://jp-tags.rd.linksynergy.com" || e.origin == "http://jp-tags.mediaforge.com" ||
            e.origin == "https://jp-tags.rd.linksynergy.com" || e.origin == "https://jp-tags.mediaforge.com" ||
            e.origin == "http://ut.rd.linksynergy.com" || e.origin == "https://ut.rd.linksynergy.com"){
          if (e.data.rmvalidation) {
              if (!window._globalMids) { window._globalMids={}; };
              if (!window._globalMids.Pix) { window._globalMids['Pix'] = {}; };
              window._globalMids.Pix[e.data.rmvalidation] = e.data.rmvalidation;
          };
          if (e.data.JSloadScript || (typeof(e.data) == "string" && e.data.indexOf("JSloadScript") != -1)) {
            if (window.addEventListener != undefined) {
              if (e.data.JSloadScript.type == "iframe") {
                // create the new iframe element with the src given to us via the event
                local_create_element(doc, ['iframe', 'width', '0', 'height', '0', 'src', e.data.JSloadScript.value], parent);
              } else {
                localLoadScript(e.data.JSloadScript.value)
              }
            } else if (window.attachEvent != undefined) {
              var items = e.data.split(",");
              for (var i = 0; i < items.length; i++) {
                if (items[i] != "") {
                  var subItems = items[i].split("|");
                  var key = subItems[0];
                  var value = subItems[1];
                  var type = subItems[2];
                  if (key == "JSloadScript") {
                    // create the new iframe element with the src given to us via the event
                    if (type == "iframe") {
                      local_create_element(doc, ['iframe', 'width', '0', 'height', '0', 'src', value], parent);
                    } else {
                      localLoadScript(value);
                    }
                  };
                };
              };
            };
          };
        }  
      }
  if (window.addEventListener != undefined) {
      window.addEventListener('message', receiveMessage);
    } else if (window.attachEvent != undefined) {
      window.attachEvent('onmessage', receiveMessage);
    };
  };
  return el;
}
,
  
  "load_cadence": function(cadence_id) {
  if (cadence_id != "") {
    var cadence_src = "//js.rmtag.com/"+cadence_id+".ct.js";
    this.create_element(document, ['script', 'type', 'text/javascript', 'src', cadence_src], div);
  }
},
  "set_timeout": function(t) {
    this.timeout = setTimeout('timeout__mf()', t ? t : 3000);
  },
  "inner_html": 
  "build_pix_query_string": function(q_str) {
  // query string
  var result = "";
  if (q_str.length > 0) {
    result = "&" + q_str;
    // override rm_fire3p with test "consent" parameter value, if provided
    var scrpt_params = q_str.split('&');
    for (var pindex = 0; pindex < scrpt_params.length; pindex++) {
      var splt_param = scrpt_params[pindex].split('=');
      if (splt_param.length == 2) {
        if (splt_param[0] == "consent") {
          if (splt_param[1] == "true") {
            window._rm_fire3p = true;
          }
          else if (splt_param[1] == "false") {
            window._rm_fire3p = false;
          }
          break;
        }
      }
    }
  }
  result += "&href=" + encodeURIComponent(location.href);
  if (document.referrer.length > 0) result += "&referrer=" + encodeURIComponent(document.referrer);
  result += '&_rm_fire3p=' + window._rm_fire3p;

  // if gdpr in scope then pass iab consent string to pix for cookie sync check
  if (window._gdpr_consent != undefined) {
    result += '&_gdpr_consent=' + window._gdpr_consent;
  }

  return result;
}
,
  "build_piggy_query_string": function(q_str) {
  return "?rmpb=3036" + ((q_str != undefined && q_str.length > 0) ? "&" + q_str : "");
}
,
  "find_mf__tag": function() {
  var query_strings = [];
  var query_string = "";
  var url = "";
  var scripts = document.getElementsByTagName('script');
  for (var script_index = 0; script_index < scripts.length; script_index++) {
    var script_name = scripts[script_index].src;
    if (typeof script_name !== 'undefined' &&
      (script_name.indexOf('rd.linksynergy.com') !== -1 || script_name.indexOf('tags.mediaforge.com') !== -1) &&
      script_name.indexOf('/3036') !== -1) {

      var index = script_name.indexOf("?");
      url = '//' + script_name.split('/')[2];

      if (index > -1) {
        query_strings.push(script_name.substr(index + 1));
      }
    }
  }
  if (query_strings.length > 1) {
    for (var mf_idx = query_strings.length - 1; mf_idx >= 0; mf_idx--) {
      if (query_strings[mf_idx].indexOf("orderNumber") > -1) {
        query_string = query_strings[mf_idx];
        break
      }
    }
    if (query_string.length == 0) query_string = query_strings[query_strings.length-1];
  }
  else if (query_strings.length == 1) query_string = query_strings[0];

  return [url,query_string];
}
,
  "already_loaded": function(mid) {
  var dupFound = false;
  var scripts = document.getElementsByTagName('script');
  for (var script_index = 0; script_index < scripts.length && !dupFound; script_index++) {
    var script_name = scripts[script_index].src;
    if (script_name.indexOf('tags.rd.linksynergy.com/js/' + mid) != -1) {
      dupFound = true;
    }
  }
  return dupFound;
}
,
  "S4": 
  "guid": function() {
    return (this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4());
  },
  "readCookie": function(cookie_name) {
var ca = document.cookie.split(';');
var cookie_value = "";
var max_merchant_keep = 10;
for (var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
  if (c.indexOf(cookie_name) == 0) {
    cookie_value = c.substring(cookie_name.length + 1);
    break
  }
}
return cookie_value;
},
  "createCookie": function(name, value, days) {
if (days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  var expires = "; expires=" + date.toGMTString();
}
else var expires = "";
document.cookie = name + "=" + value + expires + ";path=/;domain=" + document.domain + ";";
}
};


function timeout__mf() {
	var t = _mf__tag.timeout;
	if(t) _mf__tag.inner_html('mf__div', '');
}


// a utility function to retry condition evaluation using setTimeout
function waitForReady(retry, fn, rdyfn) {
	"use strict";
	if (!rdyfn()) {
		if (retry < 1) {
			fn(false);
		} else {
			window.setTimeout( 100);
		}
	} else {
		fn(true);
	}
}

if (window.DataLayer &&
    window.DataLayer.consent &&
    window.DataLayer.consent.gdpr) {
  getConsentStatus(window.DataLayer.consent.gdpr);
} else {
  // the fallback code
  var fallback = function () {
    (function (cmpwUrl, callback, custIds) {
      var gdprApplicable = function () { var a = ["DE", "UK", "GB", "FR", "IT", "ES", "PL", "NL", "RO", "BE", "CZ", "SE", "HU", "EL", "GR", "PT", "AT", "OE", "DK", "FI", "SK", "IE", "BG", "HR", "LT", "LV", "SI", "EE", "CY", "LU", "MT", "150", "039", "151", "154", "155"], n = [].concat(navigator.languages || []); n.push(navigator.userLanguage || navigator.language || ""); for (var r = null, l = 0; l < n.length; l++)for (var e = n[l].split("-"), g = e.length > 6 ? 6 : e.length, t = 1; t < g; t++)if (r = !0, a.indexOf(e[t].toUpperCase()) > -1) return !0; return null == r && null },
        wscr = document.createElement("script"),
        ip = document.getElementsByTagName("script")[0],
        ccb = { "cb": callback },
        ready = function () {
          // returns true when wrapper has been loaded
          return window.___RMCMPW && typeof window.___RMCMPW === "function";
        },
        cont = 
        rtry = 20,
        cmpinit;
      if (custIds) {
        ccb.cids = custIds;
      }
      // the loop to test for wrapper ready
      cmpinit = function () {
        if (!ready()) {
          if (rtry < 1) {
            // retries exhausted, invoke callback with dummy consent object
            ccb.cb({ "status": 3, "isGdpr": gdprApplicable() });
          } else {
            // not ready, try again in 100ms
            rtry -= 1;
            window.setTimeout(cmpinit, 100);
          }
        } else {
          // ready - invoke wrapper
          cont(ccb);
        }
      };
      // load wrapper script
      wscr.setAttribute("src", cmpwUrl);
      ip.parentNode.insertBefore(wscr, ip);

      // initiate timeout loop
      cmpinit();
    }
      ("//intljs.rmtag.com/115557.ct.js",
      );
  },
    // 	the continue process callback
    callback = 

  // 	the main block
    waitForReady(20, // wait 2s for DataLayer consent object to be populated
      
      ;
}

function getConsentStatus(co) {
  window._rm_fire3p = true;

  // Check Consent Object Values
  if (co.productConsents != undefined && co.productConsents.dspTrk != undefined && co.productConsents.rtbRet != undefined) {
    if (co.productConsents.dspTrk == false && co.productConsents.rtbRet == false) return; // exit immediately, no consent provided
    if (co.productConsents.dspTrk == true && co.productConsents.rtbRet == false) window._rm_fire3p = false; // tracking consent only
  } else { // Check Browser Language
    if (co.isGdpr == undefined || co.isGdpr == true) {
      if (impliedConsent() == false) return; // exit immediately, consent cannot be determined
    }
  }

  // if firing 3p and iabConsentString exists then pass it to pix for TTD cookie sync
  if (window._rm_fire3p && co.iabConsentString != undefined) {
     window._gdpr_consent = encodeURIComponent(co.iabConsentString);
  }

  _mf__tag.init();
}

if (!window._globalMids) { window._globalMids={}; }
if (!window._globalMids.Js) { window._globalMids['Js'] = {}; }
window._globalMids.Js[3036] = 3036;

