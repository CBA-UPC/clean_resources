(function() {
  window._satellite = window._satellite || {};
  window._satellite.container = {
  "buildInfo": {
    "buildDate": "2023-11-02T17:08:00Z",
    "turbineBuildDate": "2023-02-22T20:37:26Z",
    "turbineVersion": "27.5.0"
  },
  "environment": {
    "id": "EN8ae8d5bd7f12461f88ff7bc168e61700",
    "stage": "production"
  },
  "dataElements": {
    "Download Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let em = event.message;

/*em.web.webInteraction._medallia.downloads = em.web.webInteraction._medallia.downloads || {}
if(em.web.webInteraction.URL){
em.web.webInteraction._medallia.downloads.type = em.web.webInteraction.URL.split(".").reverse()[0];
}
em.web.webInteraction._medallia.downloads.downloadInstance = {value: 1}; 
em.web.webInteraction._medallia.downloads.URL = em.web.webInteraction.URL; 
em.web.webInteraction.name = "Download" */

_satellite.logger.error( JSON.stringify( em, null, '\t'));
_satellite.logger.error( '[Download Payload]');
let wi, _med;

try{ wi = em.web.webInteraction || {} } catch(e) { wi = {} }
try{ _med = wi._medallia|| {}     } catch(e) { _med = {} }

_med.downloads = _med.downloads || {}
if(wi.URL){ _med.downloads.type = wi.URL.split(".").reverse()[0];}
_med.downloads.downloadInstance = {value: 1}; 
if(wi.URL){ _med.downloads.URL = em.web.webInteraction.URL;}
wi.name = "Download"
wi.type = "download"
return event.message; 
}
      }
    },
    "Form Action Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let em = event.message; 

if(em.web.webInteraction){
  em.web.webInteraction.name = "Form Action"; 
 } else {
   em.web.webInteraction = {name: "Form Action"};
 }

return event.message; 
}
      }
    },
    "Modal Interaction Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let em = event.message; 

em.web.webInteraction.name = "Modal Interaction"; 
em.web.webInteraction._medallia.modal.modalInstances = {value: 1}; 

return event.message; 
}
      }
    },
    "Demandbase eVar 4": {
      "storageDuration": "session",
      "modulePath": "demandbase/dist/lib/dataElements/demandbasedataelement4.js",
      "settings": {
      }
    },
    "Page View Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let   wd = event.fullState.web.webPageDetails,
      medallia = wd._medallia;
const tc = _satellite.getVar( 'Tracking Code' );

wd.URL = location.protocol + "//" + location.hostname + location.pathname;
wd.pageViews = {value: 1};

medallia.websdk = {version: _satellite.buildInfo.turbineVersion};  
medallia.launchBuildDate = _satellite.buildInfo.buildDate;
if( window.location.search ) medallia.queryString = window.location.search; 
medallia.ecid = _satellite.getVar( 'ECID' );

if( tc ) {
    event.fullState.marketing = event.fullState.marketing || {}
    event.fullState.marketing.trackingCode = tc;

  
}

 
  event.fullState._experience = {
    "analytics": {
        "customDimensions" : {
            "eVars" : {
                "eVar46" : localStorage.getItem("Demandbase.AdobeLaunch.demandbaseDataElement1").replace(/[/\,"]/g, '')
            }
        }
    }
}

return event.fullState; 
}
      }
    },
    "Form Submit Value": {
      "modulePath": "gcoe-adobe-client-data-layer/src/lib/dataElements/datalayerComputedState.js",
      "settings": {
        "path": "web.webPageDetails._medallia.form.submits.value"
      }
    },
    "Demandbase eVar 3": {
      "storageDuration": "session",
      "modulePath": "demandbase/dist/lib/dataElements/demandbasedataelement3.js",
      "settings": {
      }
    },
    "Demandbase eVar 5": {
      "storageDuration": "session",
      "modulePath": "demandbase/dist/lib/dataElements/demandbasedataelement5.js",
      "settings": {
      }
    },
    "Social Share Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let em = event.message; 

em.web.webInteraction.name = "Social Share"; 
em.web.webInteraction._medallia.social = em.web.webInteraction._medallia.social || {}
em.web.webInteraction._medallia.social.shareInstances = {value: 1}; 

return event.message; 
}
      }
    },
    "XDM: Target Info": {
      "modulePath": "adobe-alloy/dist/lib/dataElements/xdmObject/index.js",
      "settings": {
        "data": {
          "web": {
            "webInteraction": {
              "name": "Adobe Target",
              "type": "other",
              "linkClicks": {
                "value": 1
              }
            }
          }
        },
        "sandbox": {
          "name": "prod"
        }
      }
    },
    "Video Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let em = event.message;

em.web = em.web || {}
em.web.webInteraction = em.web.webInteraction || {}
em.web.webInteraction.name = 'Video Action';

return event.message; 
}
      }
    },
    "Search Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let em = event.message; 

em.web = em.web || {}; 
em.web.webInteraction = em.web.webInteraction || {}; 
em.web.webInteraction.name = "Site Search";

return event.message; 
}
      }
    },
    "Consent Banner Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
let em = event.message, wi = em.web.webInteraction, md = wi._medallia;; 

wi.name = "Consent Banner"; 
if (md.consentBanner.option == "consent") {
    md.consentBanner.consent = { value: 1 };
} else
    if (md.consentBanner.option == "non-consent") {
        md.consentBanner.nonConsent = { value: 1 };
    }

return event.message; 
}
catch(e){}
}
      }
    },
    "prod Config ID": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var host_name = window.location.hostname;
if(host_name.indexOf("exp-now.medallia.com")>-1){
  return "ffe68146-5082-4cd1-a363-fdcb316d3f17";
}
return "d4ed8fa0-d656-40a6-bd76-1cbe9445fe7c";
}
      }
    },
    "Demandbase eVar 2": {
      "storageDuration": "session",
      "modulePath": "demandbase/dist/lib/dataElements/demandbasedataelement2.js",
      "settings": {
      }
    },
    "Demandbase eVar 1": {
      "storageDuration": "session",
      "modulePath": "demandbase/dist/lib/dataElements/demandbasedataelement1.js",
      "settings": {
      }
    },
    "Demandbase eVar 6": {
      "storageDuration": "session",
      "modulePath": "demandbase/dist/lib/dataElements/demandbasedataelementindustry.js",
      "settings": {
      }
    },
    "Link Click Payload": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let em = event.message, wi = em.web.webInteraction, md = wi._medallia;

wi.type = 'other';
wi.name = md.type; 
wi.linkClicks = { value: 1 }

switch( md.type) { 
  case 'button-cta':  
    md.buttonCtaClick = {value: 1}; 
    break;
  case 'nav-link': 
    md.navClick = {value: 1}; 
    break;
  case 'language': 
    md.languageClick = {value: 1}; 
}

return event.message; 
}
      }
    },
    "Tracking Code": {
      "defaultValue": "",
      "modulePath": "common-web-sdk-plugins/src/lib/dataElements/getqueryparam.js",
      "settings": {
        "delimiter": "|",
        "urlToCheck": "",
        "queryStringParameters": "source,utm_source,utm_medium,utm_campaign,utm_content,utm_term"
      }
    },
    "Dev Config ID": {
      "modulePath": "core/src/lib/dataElements/constant.js",
      "settings": {
        "value": "4c76a73e-1b96-43b7-abf6-9ec20587e4c8"
      }
    },
    "Stage Config ID": {
      "modulePath": "core/src/lib/dataElements/constant.js",
      "settings": {
        "value": "fb9bda5c-15f7-4931-baf4-c37e6c2b1981"
      }
    },
    "edgeDomain": {
      "defaultValue": "edge.adobedc.net",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source":       }
    }
  },
  "extensions": {
    "common-web-sdk-plugins": {
      "displayName": "Common Web SDK Plugins",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP7c98f5d3effa45b580d7f773c185696b/",
      "modules": {
        "common-web-sdk-plugins/src/lib/dataElements/getqueryparam.js": {
          "name": "getqueryparam",
          "displayName": "getQueryParam",
          "script": function(module, exports, require, turbine) {
'use strict';
function getQueryParam(queryStringParameters, delimiter, urlToCheck)
  {
    //return version and set contextData (if available)
    if(queryStringParameters === "-v") return {"plugin": "getQueryParam", "version": "5.0.0"}

    //queryStringParameters is required
    if(!queryStringParameters) return;
      
    //set delimiter equal to nothing if it hasn't been set
    delimiter = delimiter || "";

    //set urlToCheck equal to either the urlToCheck argument (passed into the function), the s.pageURL variable, or location.href
    urlToCheck = (urlToCheck || ("undefined" !== typeof s && s.pageURL) || location.href) + "";
    
    //if the urlToCheck is the function's *second* argument (and the delimiter is the third), then... 
    if((delimiter.length > 4 || delimiter.indexOf("=") > -1) && urlToCheck && urlToCheck.length < 4)
    {
      //...do the ol' switcheroo!  (i.e. exchange the values of the urlToCheck and delimiter parameters).  We do this because the designers of Util.getQueryParam did this without consulting Adobe Consulting first.  Bless their hearts.... 
      var tempURL = delimiter;
        delimiter = urlToCheck, 
        urlToCheck = tempURL;
    }	

    //setup parameterValue and returnValue
    var parameterValue,
      returnValue = "",
      //split up queryStringParameters into an array
      queryStringParameterList = queryStringParameters.split(","),
      qspll = queryStringParameterList.length;	

    //go through the queryStringParameterList
    for(var i = 0; i < qspll; i++)
    {
      //use the findParameterValue function to find the queryStringParameterList item within the urlToCheck and, if it exists, set parameterValue equal to the parameter's value (duh)
      parameterValue = findParameterValue(queryStringParameterList[i], urlToCheck);
          
      //if the parameterValue is a string
      if(typeof parameterValue === "string")
      {
        //if we have a parameterValue with a hash character, take out everything after the hash
        parameterValue = (parameterValue.indexOf("#") > -1 ? parameterValue.substring(0, parameterValue.indexOf("#")) : parameterValue);
        
        //add the parameterValue to the returnValue (with a delimiter, if necessary)
        returnValue += (returnValue ? delimiter + parameterValue : parameterValue);
      }
      
      //if returnValue hasn't been set yet and we don't have a string-based parameterValue, set returnValue to it
      else if(returnValue === "") returnValue = parameterValue;
      
      //if returnValue has been set and we don't have a string-based parameterValue, add a delimiter and the parameterValue
      else returnValue += (delimiter + parameterValue)
    }

    //return returnValue
    return returnValue;
    
    //findParameterValue function
    function findParameterValue(parameterToFind, urlToCheck)
    {
      //change all question marks and hashmarks into ampersands
      urlToCheck = urlToCheck.split("?").join("&");
      urlToCheck = urlToCheck.split("#").join("&");
        
      //set searchStartLocation equal to the location of urlToCheck's first ampersand (most likely the beginning of the querystring)
      var searchStartLocation = urlToCheck.indexOf("&"),
      
        //set returnValue (returns nothing by default)
        returnValue = "",
        fullQueryString,
        splitString;

      //if we have a parameterKey to look for AND a keyvalue pair in the urlToCheck
      if(parameterToFind && (searchStartLocation > -1 || urlToCheck.indexOf("=") > searchStartLocation))
      {
        //set fullQueryString to the full query string (without the beginning ampersand/questionmark)
        fullQueryString = urlToCheck.substring(searchStartLocation + 1);
        //put each individual parameter into an array
        splitString = fullQueryString.split("&");
        //loop through the array
        for(var i=0, ssl=splitString.length, currentKey; i < ssl; i++)
        {
          //get the current parameter and split it up into its keyname and keyvalue
          var currentKeyValuePair = splitString[i].split("="),
          currentKeyName = currentKeyValuePair[0],
          currentKeyValue = currentKeyValuePair[1];
          //if the current keyname matches the parameterToFind return the currentKeyValue (or true if there is no key value)
          if(currentKeyName.toLowerCase() === parameterToFind.toLowerCase()) return decodeURIComponent(currentKeyValue || true);
        }
      }
      //return nothing if nothing is found
      return "";
    };
  }

module.exports = 

          }

        }
      }
    },
    "adobe-analytics": {
      "displayName": "Adobe Analytics",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EPbf7b42aa08bc4f10879b1484195e80d1/",
      "settings": {
        "orgId": "28F958C45FF3799D0A495C47@AdobeOrg",
        "libraryCode": {
          "type": "managed",
          "accounts": {
            "staging": [
              "medalliacomstage"
            ],
            "production": [
              "medalliacomprod"
            ],
            "development": [
              "medalliacomdev"
            ]
          },
          "useActivityMap": true,
          "scopeTrackerGlobally": false
        },
        "trackerProperties": {
          "currencyCode": "USD",
          "trackInlineStats": true,
          "trackDownloadLinks": true,
          "trackExternalLinks": true,
          "linkDownloadFileTypes": [
            "doc",
            "docx",
            "eps",
            "jpg",
            "png",
            "svg",
            "xls",
            "ppt",
            "pptx",
            "pdf",
            "xlsx",
            "tab",
            "csv",
            "zip",
            "txt",
            "vsd",
            "vxd",
            "xml",
            "js",
            "css",
            "rar",
            "exe",
            "wma",
            "mov",
            "avi",
            "wmv",
            "mp3",
            "wav",
            "m4v"
          ]
        }
      },
      "modules": {
        "adobe-analytics/src/lib/actions/sendBeacon.js": {
          "name": "send-beacon",
          "displayName": "Send Beacon",
          "script": function(module, exports, require, turbine) {
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

'use strict';

var getTracker = require('../sharedModules/getTracker');
var getNodeLinkText = require('../helpers/getNodeLinkText');

var isLink = function(element) {
  return element && element.nodeName && element.nodeName.toLowerCase() === 'a';
};

var getLinkName = function(element) {
  if (isLink(element)) {
    return getNodeLinkText(element);
  } else {
    return 'link clicked';
  }
};

var sendBeacon = function(tracker, settings, targetElement) {
  if (settings.type === 'page') {
    turbine.logger.info('Firing page view beacon.');
    tracker.t();
  } else {
    var linkSettings = {
      linkType: settings.linkType || 'o',
      linkName: settings.linkName || getLinkName(targetElement)
    };

    turbine.logger.info(
      'Firing link track beacon using the values: ' +
      JSON.stringify(linkSettings) + '.'
    );

    tracker.tl(
      isLink(targetElement) ? targetElement : 'true',
      linkSettings.linkType,
      linkSettings.linkName
    );
  }
};

module.exports = 

          }

        },
        "adobe-analytics/src/lib/sharedModules/getTracker.js": {
          "script": function(module, exports, require, turbine) {
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

'use strict';

var cookie = require('@adobe/reactor-cookie');
var Promise = require('@adobe/reactor-promise');
var window = require('@adobe/reactor-window');
var settingsHelper = require('../helpers/settingsHelper');
var augmenters = require('../helpers/augmenters');

var applyTrackerVariables = require('../helpers/applyTrackerVariables');
var loadLibrary = require('../helpers/loadLibrary');
var generateVersion = require('../helpers/generateVersion');

var version = generateVersion(turbine.buildInfo.turbineBuildDate);
var BEFORE_SETTINGS_LOAD_PHASE = 'beforeSettings';

var mcidInstance = turbine.getSharedModule('adobe-mcid', 'mcid-instance');

var checkEuCompliance = function(trackingCoookieName) {
  if (!trackingCoookieName) {
    return true;
  }

  var euCookieValue = cookie.get(trackingCoookieName);
  return euCookieValue === 'true';
};

var augmentTracker = 

var linkVisitorId = function(tracker) {
  if (mcidInstance) {
    turbine.logger.info('Setting MCID instance on the tracker.');
    tracker.visitor = mcidInstance;
  }

  return tracker;
};

var updateTrackerVersion = function(tracker) {
  turbine.logger.info('Setting version on tracker: "' + version + '".');

  if (typeof tracker.tagContainerMarker !== 'undefined') {
    tracker.tagContainerMarker = version;
  } else if (typeof tracker.version === 'string'
    && tracker.version.substring(tracker.version.length - 5) !== ('-' + version)) {
    tracker.version += '-' + version;
  }

  return tracker;
};

var updateTrackerVariables = function(trackerProperties, customSetup, tracker) {
  if (customSetup.loadPhase === BEFORE_SETTINGS_LOAD_PHASE && customSetup.source) {
    turbine.logger.info('Calling custom script before settings.');
    customSetup.source.call(window, tracker);
  }

  applyTrackerVariables(tracker, trackerProperties || {});

  if (customSetup.loadPhase !== BEFORE_SETTINGS_LOAD_PHASE && customSetup.source) {
    turbine.logger.info('Calling custom script after settings.');
    customSetup.source.call(window, tracker);
  }

  return tracker;
};

var initializeAudienceManagement = function(settings, tracker) {
  if (settingsHelper.isAudienceManagementEnabled(settings)) {
    tracker.loadModule('AudienceManagement');
    turbine.logger.info('Initializing AudienceManagement module');
    tracker.AudienceManagement.setup(settings.moduleProperties.audienceManager.config);
  }
  return tracker;
};

var initialize = function(settings) {
  if (checkEuCompliance(settings.trackingCookieName)) {
    return loadLibrary(settings)
      .then(augmentTracker)
      .then(linkVisitorId)
      .then(updateTrackerVersion)
      .then(updateTrackerVariables.bind(
        null,
        settings.trackerProperties,
        settings.customSetup || {}
      ))
      .then(initializeAudienceManagement.bind(null, settings));
  } else {
    return Promise.reject('EU compliance was not acknowledged by the user.');
  }
};

var promise = initialize(turbine.getExtensionSettings());
module.exports = function() {
  return promise;
};

          }
,
          "name": "get-tracker",
          "shared": true
        },
        "adobe-analytics/src/lib/sharedModules/augmentTracker.js": {
          "name": "augment-tracker",
          "shared": true,
          "script": 
        },
        "adobe-analytics/src/lib/helpers/getNodeLinkText.js": {
          "script": function(module, exports, require, turbine) {
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

'use strict';

/**
 * Reduces repeated whitespace within a string. Whitespace surrounding the string
 * is trimmed and any occurrence of whitespace within the string is replaced with
 * a single space.
 * @param {string} str String to be formatted.
 * @returns {string} Formatted string.
 */
var truncateWhiteSpace = 

var unsupportedNodeNames = /^(SCRIPT|STYLE|LINK|CANVAS|NOSCRIPT|#COMMENT)$/i;

/**
 * Determines if a node qualifies as a supported link text node.
 * @param {*} node Node to determine support for.
 * @returns {boolean}
 */
var isSupportedTextNode = function(node) {
  if (node && node.nodeName) {
    if (node.nodeName.match(unsupportedNodeNames)) {
      return false;
    }
  }
  return true;
};

/**
 * Orders and returns specified node and its child nodes in arrays of supported
 * and unsupported nodes.
 * @param {*} node The node to extract supported and unsupported nodes from.
 * @returns {{supportedNodes: Array, includesUnsupportedNodes: boolean}} Node support object.
 */
var extractSupportedNodes = function(node) {
  var supportedNodes = [];
  var includesUnsupportedNodes = false;
  if (isSupportedTextNode(node)) {
    supportedNodes.push(node);
    if (node.childNodes) {
      var childNodes = Array.prototype.slice.call(node.childNodes);
      childNodes.forEach(function(childNode) {
        var nodes = extractSupportedNodes(childNode);
        supportedNodes = supportedNodes.concat(nodes.supportedNodes);
        includesUnsupportedNodes = includesUnsupportedNodes || nodes.includesUnsupportedNodes;
      });
    }
  } else {
    includesUnsupportedNodes = true;
  }
  return {
    supportedNodes:supportedNodes,
    includesUnsupportedNodes:includesUnsupportedNodes
  };
};

/**
 * Returns the value of a node attribute.
 * @param {*} node The node holding the attribute.
 * @param {string} attributeName The name of the attribute.
 * @param {string} nodeName Optional node name constraint.
 * @returns {string} Attribute value or undefined.
 */
var getNodeAttributeValue = function(node, attributeName, nodeName) {
  var attributeValue;
  if (!nodeName || nodeName === node.nodeName.toUpperCase()) {
    attributeValue = node.getAttribute(attributeName);
  }
  return attributeValue;
};

/**
 * Extracts a link-name from a given node. This closely mirrors the logic
 * used in ActivityMap to determine link-names.
 *
 * The returned link-name is set to one of the following (in order of priority):
 *
 * 1. Clicked node innerText
 * 2. Clicked node textContent
 * 3. Clicked node and its child nodes nodeValue appended together.
 * 4. Clicked node alt attribute or node descendant alt attribute.
 *    Whichever is found first.
 * 5. Clicked node text attribute or node descendant text attribute.
 *    Whichever is found first.
 * 6. Clicked node INPUT descendant value attribute.
 *    Whichever is found first.
 * 7. Clicked node IMG descendant src attribute.
 *    Whichever is found first.
 *
 * @param {*} node The node to find link text for.
 * @returns {string} link-name or an empty string if not link-name is found.
 */
module.exports = function(node) {
  var nodeText = truncateWhiteSpace(node.innerText || node.textContent);
  var nodes = extractSupportedNodes(node);
  if (!nodeText || nodes.includesUnsupportedNodes) {
    var alt;
    var title;
    var inputValue;
    var imgSrc;
    var texts = [];
    nodes.supportedNodes.forEach(function(supportedNode) {
      if (supportedNode.getAttribute) {
        alt = alt || truncateWhiteSpace(supportedNode.getAttribute('alt'));
        title = title || truncateWhiteSpace(supportedNode.getAttribute('title'));
        inputValue = inputValue || truncateWhiteSpace(
          getNodeAttributeValue(supportedNode, 'value', 'INPUT'));
        imgSrc = imgSrc || truncateWhiteSpace(
          getNodeAttributeValue(supportedNode, 'src', 'IMG'));
      }
      if (supportedNode.nodeValue) {
        texts.push(supportedNode.nodeValue);
      }
    });
    nodeText = truncateWhiteSpace(texts.join(''));
    if (!nodeText) {
      nodeText = truncateWhiteSpace(alt || title || inputValue || imgSrc || '');
    }
  }
  return nodeText;
};

          }

        },
        "adobe-analytics/src/lib/helpers/settingsHelper.js": {
          "script": function(module, exports, require, turbine) {
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

'use strict';

var window = require('@adobe/reactor-window');

var settingsHelper = {
  LIB_TYPES: {
    MANAGED: 'managed',
    PREINSTALLED: 'preinstalled',
    REMOTE: 'remote',
    CUSTOM: 'custom'
  },

  MANAGED_LIB_PATHS: {
    APP_MEASUREMENT: 'AppMeasurement.js',
    ACTIVITY_MAP: 'AppMeasurement_Module_ActivityMap.js',
    AUDIENCE_MANAGEMENT: 'AppMeasurement_Module_AudienceManagement.js',
  },

  getReportSuites: function(reportSuitesData) {
    var reportSuiteValues = reportSuitesData.production;
    if (reportSuitesData[turbine.environment.stage]) {
      reportSuiteValues = reportSuitesData[turbine.environment.stage];
    }

    return reportSuiteValues.join(',');
  },

  isActivityMapEnabled: function(settings) {
    return !(settings.libraryCode &&
      !settings.libraryCode.useActivityMap &&
      settings.libraryCode.useActivityMap === false);
  },

  isAudienceManagementEnabled: function(settings) {
    var isEnabled = false;
    // check if audience management module should be enabled
    if (settings &&
      settings.moduleProperties &&
      settings.moduleProperties.audienceManager &&
      settings.moduleProperties.audienceManager.config &&
      window &&
      window._satellite &&
      window._satellite.company &&
      window._satellite.company.orgId) {
      isEnabled = true;
    }

    return isEnabled;
  }
};

module.exports = settingsHelper;

          }

        },
        "adobe-analytics/src/lib/helpers/augmenters.js": {
          "script": 
        },
        "adobe-analytics/src/lib/helpers/applyTrackerVariables.js": {
          "script": function(module, exports, require, turbine) {
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

'use strict';

var queryString = require('@adobe/reactor-query-string');
var window = require('@adobe/reactor-window');

var eVarRegExp = /eVar([0-9]+)/;
var propRegExp = /prop([0-9]+)/;
var linkTrackVarsKeys = new RegExp('^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|' +
  'channel|server|state|zip|pageType$');

var onlyUnique = 

var buildLinkTrackVars = function(tracker, newTrackerProperties, addEvents) {
  var linkTrackVarsValues = Object.keys(newTrackerProperties)
    .filter(linkTrackVarsKeys.test.bind(linkTrackVarsKeys));

  if (addEvents) {
    linkTrackVarsValues.push('events');
  }

  // Merge with the values already set on tracker.
  linkTrackVarsValues = linkTrackVarsValues.concat((tracker.linkTrackVars || '').split(','));

  return linkTrackVarsValues.filter(function(value, index) {
    return value !== 'None' && value && onlyUnique(value, index, linkTrackVarsValues);
  }).join(',');
};

var buildLinkTrackEvents = function(tracker, eventsData) {
  var linkTrackEventsValues = eventsData.map(function(event) {
    return event.name;
  });

  // Merge with the values already set on tracker.
  linkTrackEventsValues = linkTrackEventsValues.concat((tracker.linkTrackEvents || '').split(','));

  return linkTrackEventsValues.filter(function(value, index) {
    return value !== 'None'  && onlyUnique(value, index, linkTrackEventsValues);
  }).join(',');
};

var commaJoin = 

var variablesTransform = function(store, keyName, trackerProperties) {
  var dynamicVariablePrefix = trackerProperties.dynamicVariablePrefix || 'D=';

  trackerProperties[keyName].forEach(function(variableData) {
    var value;
    if (variableData.type === 'value') {
      value = variableData.value;
    } else {
      var eVarData = eVarRegExp.exec(variableData.value);

      if (eVarData) {
        value = dynamicVariablePrefix + 'v' + eVarData[1];
      } else {
        var propData = propRegExp.exec(variableData.value);

        if (propData) {
          value = dynamicVariablePrefix + 'c' + propData[1];
        }
      }
    }

    store[variableData.name] = value;
  });
};

var transformers = {
  linkDownloadFileTypes: commaJoin,
  linkExternalFilters: commaJoin,
  linkInternalFilters: commaJoin,
  hierarchies: 
  props: variablesTransform,
  eVars: variablesTransform,
  campaign: function(store, keyName, trackerProperties) {
    if (trackerProperties[keyName].type === 'queryParam') {
      var queryParams = queryString.parse(window.location.search);
      store[keyName] = queryParams[trackerProperties[keyName].value];
    } else {
      store[keyName] = trackerProperties[keyName].value;
    }
  },
  events: function(store, keyName, trackerProperties) {
    var events = trackerProperties[keyName].map(function(data) {
      var entry = data.name;
      if (data.id) {
        entry = [entry, data.id].join(':');
      }
      if (data.value) {
        entry = [entry, data.value].join('=');
      }
      return entry;
    });
    store[keyName] = events.join(',');
  }
};

module.exports = function(tracker, trackerProperties) {
  var newProperties = {};
  trackerProperties = trackerProperties || {};

  Object.keys(trackerProperties).forEach(function(propertyName) {
    var transform = transformers[propertyName];
    var value = trackerProperties[propertyName];

    if (transform) {
      transform(newProperties, propertyName, trackerProperties);
    } else {
      newProperties[propertyName] = value;
    }
  });

  // New events are added to existing tracker events
  if (newProperties.events) {
    if (tracker.events && tracker.events.length > 0) {
      newProperties.events = tracker.events + ',' + newProperties.events;
    }
  }

  var hasEvents =
    trackerProperties && trackerProperties.events && trackerProperties.events.length > 0;
  var linkTrackVars = buildLinkTrackVars(tracker, newProperties, hasEvents);
  if (linkTrackVars) {
    newProperties.linkTrackVars = linkTrackVars;
  }

  var linkTrackEvents = buildLinkTrackEvents(tracker, trackerProperties.events || []);
  if (linkTrackEvents) {
    newProperties.linkTrackEvents = linkTrackEvents;
  }

  turbine.logger.info(
    'Applying the following properties on tracker: "' +
    JSON.stringify(newProperties) +
    '".'
  );

  Object.keys(newProperties).forEach(function(propertyName) {
    tracker[propertyName] = newProperties[propertyName];
  });
};

          }

        },
        "adobe-analytics/src/lib/helpers/loadLibrary.js": {
          "script": function(module, exports, require, turbine) {
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

'use strict';

var loadScript = require('@adobe/reactor-load-script');
var window = require('@adobe/reactor-window');
var Promise = require('@adobe/reactor-promise');
var settingsHelper = require('./settingsHelper');
var pollHelper = require('./pollHelper');

var createTracker = function(settings, reportSuites) {
  if (!window.s_gi) {
    throw new Error(
      'Unable to create AppMeasurement tracker, `s_gi` function not found.' + window.AppMeasurement
    );
  }
  turbine.logger.info('Creating AppMeasurement tracker with these report suites: "' +
    reportSuites + '"');
  var tracker = window.s_gi(reportSuites);
  if (settings.libraryCode.scopeTrackerGlobally) {
    turbine.logger.info('Setting the tracker as window.s');
    window.s = tracker;
  }
  return tracker;
};

/**
 * @param settings
 *
 * @return array
 */
var getUrlsToLoad = function(settings) {
  var urls = [];
  switch (settings.libraryCode.type) {
    case settingsHelper.LIB_TYPES.MANAGED:
      // load app measurement
      urls.push(turbine.getHostedLibFileUrl(settingsHelper.MANAGED_LIB_PATHS.APP_MEASUREMENT));
      // check if activity map should be loaded
      if (settingsHelper.isActivityMapEnabled(settings)) {
        urls.push(turbine.getHostedLibFileUrl(settingsHelper.MANAGED_LIB_PATHS.ACTIVITY_MAP));
      }
      break;
    case settingsHelper.LIB_TYPES.CUSTOM:
      urls.push(settings.libraryCode.source);
      break;
    case settingsHelper.LIB_TYPES.REMOTE:
      urls.push(window.location.protocol === 'https:' ?
        settings.libraryCode.httpsUrl : settings.libraryCode.httpUrl);
      break;
  }
  // check if audience management should be loaded
  if (settingsHelper.isAudienceManagementEnabled(settings)) {
    var visitorServiceConfig = {
      namespace: window._satellite.company.orgId
    };
    settings.moduleProperties.audienceManager.config.visitorService = visitorServiceConfig;
    urls.push(turbine.getHostedLibFileUrl(settingsHelper.MANAGED_LIB_PATHS.AUDIENCE_MANAGEMENT));
  }
  return urls;
};

var loadLibraryScripts = function(settings) {
  return Promise.all(getUrlsToLoad(settings).map(function(url) {
    turbine.logger.info("Loading script: " + url);
    return loadScript(url);
  }));
};

var setReportSuitesOnTracker = function(settings, tracker) {
  if (settings.libraryCode.accounts) {
    if (!tracker.sa) {
      turbine.logger.warn('Cannot set report suites on tracker. `sa` method not available.');
    } else {
      var reportSuites = settingsHelper.getReportSuites(settings.libraryCode.accounts);
      turbine.logger.info('Setting the following report suites on the tracker: "' +
        reportSuites + '"');
      tracker.sa(reportSuites);
    }
  }

  return tracker;
};

var getTrackerFromVariable = function(trackerVariableName) {
  if (window[trackerVariableName]) {
    turbine.logger.info('Found tracker located at: "' + trackerVariableName + '".');
    return window[trackerVariableName];
  } else {
    throw new Error('Cannot find the global variable name: "' + trackerVariableName + '".');
  }
};

// returns a promise that resolves with the tracker
module.exports = 

          }

        },
        "adobe-analytics/src/lib/helpers/generateVersion.js": {
          "script": function(module, exports, require, turbine) {
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2016 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

// The Launch code version is a 4 characters string.  The first character will always be L
// followed by year, month, and day codes.
// For example: JS-1.4.3-L53O = JS 1.4.3 code, Launch 2015 March 24th release (revision 1)
// More info: https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=tagmanager&title=DTM+Analytics+Code+Versions

'use strict';

var THIRD_OF_DAY = 8; //hours

var getDayField = 

var getLastChar = 

var getRevision = 

var getMonthField = function(date) {
  var monthNumber = date.getUTCMonth() + 1;
  var revision = getRevision(date);

  var monthField = (monthNumber + revision * 12).toString(36);

  return getLastChar(monthField);
};

var getYearField = 

module.exports = function(dateString) {
  var date = new Date(dateString);

  if (isNaN(date)) {
    throw new Error('Invalid date provided');
  }

  return ('L' + getYearField(date) + getMonthField(date) + getDayField(date)).toUpperCase();
};

          }

        },
        "adobe-analytics/src/lib/helpers/pollHelper.js": {
          "script": function(module, exports, require, turbine) {
/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

'use strict';

var Promise = require('@adobe/reactor-promise');

var MAX_ITERATIONS = 40;
var INTERVAL = 250;

var found = function(resolve, variableName, result) {
  turbine.logger.info('Found property located at: "' + variableName + '"].');
  resolve(result);
};

var getPromise = function(object, variableName) {
  return new Promise(function(resolve, reject) {
    if (object[variableName]) {
      return found(resolve, variableName, object[variableName]);
    }
    var i = 1;
    var intervalId = setInterval(function() {
      if (object[variableName]) {
        found(resolve, variableName, object[variableName]);
        clearInterval(intervalId);
      }
      // give up after 10 seconds
      if (i >= MAX_ITERATIONS) {
        clearInterval(intervalId);
        reject(new Error(
          'Bailing out. Cannot find the variable name: "' + variableName + '"].'));
      }
      i++;
    }, INTERVAL); // every 1/4th second
  });
};

module.exports = {
  poll: function(object, variableName) {
    turbine.logger.info('Waiting for the property to become accessible at: "'
      + variableName + '"].');
    return getPromise(object, variableName);
  }
};

          }

        }
      }
    },
    "6sense": {
      "displayName": "6sense for Analytics & Target",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP3ba872a6abd545ff87b4a69d7c5726cd/",
      "settings": {
        "epsilonToken": "0dd5163487720505d53ada7ded8fc35cd07ae93f"
      },
      "modules": {
      }
    },
    "acronym-gtag.js": {
      "displayName": "Google Global Site Tag (gtag)",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP81069fa771f5458f8c98b5782f82e181/",
      "settings": {
        "accounts": {
        },
        "configCode": 
        "functionName": "",
        "dataLayerName": "",
        "displayFeatures": true
      },
      "modules": {
        "acronym-gtag.js/src/lib/helpers/loadGtag.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/**
 * Configure and load gtag
 *
 * @package acronym-gtag
 */
module.exports = function() {
    var extensionSettings = turbine.getExtensionSettings(),
        dataLayerName     = extensionSettings.dataLayerName || "dataLayer",
        functionName      = extensionSettings.functionName  || "gtag",
        window            = require("@adobe/reactor-window"),
        loadScript        = require("@adobe/reactor-load-script"),
        getAccountId      = require("../helpers/getAccountId"),
        castOptionTypes   = require("../helpers/castOptionTypes"),
        accountId         = "";

    // Setup the gtag( ) function
    if(!window[functionName]) {
        window[dataLayerName] = window[dataLayerName] || [];
        window[functionName]  = function(){ 
            if(Array.isArray(window[dataLayerName])) { 
                window[dataLayerName].push(arguments); 
            } else {
                turbine.logger.error("ACRGTAG-104: Data layer variable '"+dataLayerName+"' malformed", window[dataLayerName]);
            }
        };
        window[functionName]("js", new Date());
    }

    // Check the load library nonce to see if we've already loaded the library
    if(!_satellite.getVar("__acronym_gtag_loaded")) {

        // Set the load library nonce
        _satellite.setVar("__acronym_gtag_loaded", true);

        // If display features is disabled, disable it for ALL accounts
        if((typeof extensionSettings.displayFeatures === "string" && extensionSettings.displayFeatures !== "true") 
        || (typeof extensionSettings.displayFeatures !== "string" && !Boolean(extensionSettings.displayFeatures))) {
            window[functionName]("set", {"allow_ad_personalization_signals": false});
            turbine.logger.log("Display features are disabled");
        }

        // Setup our accounts
        if(typeof extensionSettings["accounts"] === "object" && extensionSettings["accounts"] !== null && Object.keys(extensionSettings["accounts"]).length > 0) {
            for(var accountUID in extensionSettings["accounts"]) {
                if(extensionSettings["accounts"].hasOwnProperty(accountUID)) {
                    var account = extensionSettings["accounts"][accountUID],
                        options = account["settings"] || {};

                    accountId = getAccountId(account);

                    if(typeof account["custom_map"] === "object" && account["custom_map"].length) {
                        options["custom_map"] = options["custom_map"] || {};
                        account["custom_map"].forEach(function(mapping) {
                            options["custom_map"][mapping[0]] = mapping[1];
                        });
                    }

                    (account["options"]||[]).forEach(;

                    // By default, we do not want to send the page view (let the user decide when that happens)
                    options["send_page_view"] = false;

                    options = castOptionTypes(options);
                    window[functionName]("config", accountId, options);
                    turbine.logger.log("account " + accountId + " was loaded with the options:", JSON.stringify(options));
                }
            }

            // Load any custom code
            if(typeof extensionSettings.configCode === "function") {
                try {
                    extensionSettings.configCode(window[functionName], window[dataLayerName]);
                } catch(error) {
                    turbine.logger.error("ACRGTAG-101: Custom config code error:", error);
                }
            }
        } else {
            turbine.logger.warn("ACRGTAG-102: No accounts configured");
        }

        // Load the library
        var g = "gtag.js library";
        turbine.logger.log("loading " + g);
        loadScript("https://www.googletagmanager.com/gtag/js?id=" + accountId + "&l=" + dataLayerName).then( ;
    }

    // Return gtag( )
    return window[functionName];
};
          }
,
          "name": "get-gtag",
          "shared": true
        },
        "acronym-gtag.js/src/lib/helpers/getAccountId.js": {
          "script": function(module, exports, require, turbine) {
'use strict';

/**
 * Grab the account ID for the environment
 *
 * @package acronym-gtag
 * @param account           Account Settings
 * @param environment       Current Environment
 */
module.exports = function(account, environment) {
    var accountId;
    if(!environment) { environment = turbine.environment.stage; }
    if(typeof account.accounts[environment] === "string" && account.accounts[environment] !== "") {
        accountId = account.accounts[environment];
    } else {
        accountId = account.accounts.production;
    }
    return accountId;
};
          }

        },
        "acronym-gtag.js/src/lib/helpers/castOptionTypes.js": {
          "script": function(module, exports, require, turbine) {
'use strict';

/**
 * Cast options object to the proper type
 *
 * @package acronym-gtag
 * @param settings          Action Settings
 */
module.exports = function(options) {
    var cast = {
            // Boolean
            bool: function (value) { return (typeof value === "string") ? value === "true" : Boolean(value); },

            // Integer
            int: function (value) { var int = parseInt(value); return isNaN(int) ? 0 : int; },

            // Float
            float: 

            // Comma separated list
            csv: function(value) { return (typeof value === "string") ? (value === "" ? undefined : value.split(",")) : value; },

            // Custom mapping (CSV with key:value pairs into an object)
            custom_map: function(value) {
                var obj = {};
                if(typeof value === "string") {
                    value.split(",").forEach(function(mapping) {
                        var map = mapping.split(":");
                        if(map.length === 2) {
                            obj[map[0]] = map[1];
                        }
                    });
                } else if(typeof value === "object") {
                    obj = value;
                }
                return obj;
            }
        },
        // Map the key to the type
        mapping = {
            "accept_incoming": cast.bool,
            "allow_ad_personalization_signals": cast.bool,
            "anonymize_ip": cast.bool,
            "checkout_step": cast.int,
            "cookie_expires": cast.int,
            "custom_map": cast.custom_map,
            "event_timeout": cast.int,
            "fatal": cast.bool,
            "levels": cast.int,
            "link_attribution": cast.bool,
            "linker": {
                "domains": cast.csv,
                "accept_incoming": cast.bool,
                "decorate_forms": cast.bool
            },
            "non_interaction": cast.bool,
            "value": cast.float
        };

    Object.keys(options).forEach(function(key) {
        if(typeof mapping[key] === "function") {
            options[key] = mapping[key](options[key]);
        } else if (typeof mapping[key] === "object" && typeof options[key] === "object" && options[key] !== null) {
            Object.keys(options[key]).forEach(function(objKey) {
                if(typeof mapping[key][objKey] === "function") {
                    options[key][objKey] = mapping[key][objKey](options[key][objKey]);
                }
            });
        }
    });
    return options;
};
          }

        }
      }
    },
    "bing-ads-extension": {
      "displayName": "Bing Ads UET Tag",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP05eac6e292f1486a812623da300a51b4/",
      "settings": {
        "qname": "uetq",
        "tagid": "18000367",
        "navTimingApi": true,
        "storeConvTrackCookies": true
      },
      "modules": {
        "bing-ads-extension/src/lib/actions/sendCustomEvent.js": {
          "name": "customevent",
          "displayName": "Custom Event (legacy)",
          "script": function(module, exports, require, turbine) {
'use strict';

module.exports = function(settings) {
  var window = require('@adobe/reactor-window');
  var cleanUpSettings = require('../helpers/cleanUpSettings');
  var extensionSettings = turbine.getExtensionSettings();
  var qname = extensionSettings.qname || 'uetq';
  var conciseSettings;

  conciseSettings = cleanUpSettings(settings);
  if (window[qname]) {
    window[qname].push(conciseSettings);
    turbine.logger.log('Custom event is sent.');
  };
};

          }

        },
        "bing-ads-extension/src/lib/actions/baseTag.js": {
          "name": "basetag",
          "displayName": "Base Tag",
          "script": function(module, exports, require, turbine) {
'use strict';

module.exports = function(settings) {
  var loadBase = require('../helpers/getBatJsBase');

  loadBase().then(function() {
    turbine.logger.log('Base code loaded and a page load event is sent.');
  });
};

          }

        },
        "bing-ads-extension/src/lib/helpers/cleanUpSettings.js": {
          "script": function(module, exports, require, turbine) {
'use strict';

module.exports = function(settings) {
  var newSettings = {};

  for (var p in settings) {
    if (settings.hasOwnProperty(p) && settings[p]) {
      newSettings[p] = settings[p];
      turbine.logger.log(p + ': ' + newSettings[p]);
    }
  }

  return newSettings;
};

          }

        },
        "bing-ads-extension/src/lib/helpers/getBatJsBase.js": {
          "script": function(module, exports, require, turbine) {
'use strict';

module.exports = function () {
  var window = require('@adobe/reactor-window');
  var loadScript = require('@adobe/reactor-load-script');
  var extensionSettings = turbine.getExtensionSettings();
  var qname = extensionSettings.qname || 'uetq';

  window[qname] = window[qname] || [];

  return loadScript('//bat.bing.com/bat.js').then(function () {
      var initData = {
        ti: extensionSettings.tagid,
        navTimingApi: extensionSettings.navTimingApi,
        storeConvTrackCookies: extensionSettings.storeConvTrackCookies,
        tm: 'al001'
      };
      initData.q = window[qname];
      window[qname] = new UET(initData);
      window[qname].push('pageLoad');
      turbine.logger.log('BingAds Base Code successfully loaded.');
    })
    .catch(;
}

          }

        }
      }
    },
    "adobe-alloy": {
      "displayName": "Adobe Experience Platform Web SDK",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP656e9501f1834f349d542eab17593ff2/",
      "settings": {
        "instances": [
          {
            "name": "alloy",
            "edgeDomain": "%edgeDomain%",
            "edgeConfigId": "%prod Config ID%",
            "onBeforeEventSend": function(content) {
  // Modify content.xdm or content.data as necessary. There is no need to wrap the
// code in a function or return a value. For example:
// content.xdm.web.webPageDetails.name = "Checkout";

let wb = content.xdm.web, wd = wb.webPageDetails || {}, wi;

// 1. disable automatic click tracking ("Link Click", "other") but keep automatic "exit" & "download" click tracking
// 2. add the ECID to all Link Click payloads (it's already in the page-view pageloads)
//if( typeof wb.webInteraction === 'object' ) {
if( typeof wd.pageViews !== 'object' ) {
   wi = wb.webInteraction || {};
   console.log( '[onBeforeEventSend, Before]\nwebInteraction = ' + JSON.stringify( wi, null, '\t' ) );
   // if this beacon is NOT a pageView beacon make sure it includes the linkClicks event so AA won't assume it's a pageView
   wi.linkClicks = { value: 1 };
   if(!wi.type){wi.type = 'other';}
    wd._medallia = wd._medallia || {};
    wd._medallia.ecid = _satellite.getVar( 'ECID' );  // ECID was set by the page-view rule, now link click rules can pick it (ECID) up for payload inclusion
    if( wi.name === 'Link Click' && wi.type === 'other' ) { return false }
    else if( wi.type === 'download' ) {
        //wi.name = wi.URL;
        if(wi.URL) {
            wi._medallia.downloads.URL = wi.URL;
            wi._medallia.downloads.type = wi.URL.split(".").reverse()[0];
        }
    }
  else if( wi.type === 'exit' ) {
    wi.name = wi.URL
  }
    console.log('[onBeforeEventSend, After]\nwebInteraction =' + JSON.stringify( wi, null, '\t' ) );
}

// REMOVE before going to production
if (_satellite.environment.stage !== 'production') console.log('[onBeforeEventSend]\\nxdm =' + JSON.stringify(content.xdm, null, '\\t'));

},
            "stagingEdgeConfigId": "%Stage Config ID%",
            "developmentEdgeConfigId": "%Dev Config ID%"
          }
        ]
      },
      "modules": {
        "adobe-alloy/dist/lib/dataElements/xdmObject/index.js": {
          "name": "xdm-object",
          "displayName": "XDM object",
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
module.exports = function (settings) {
  return settings.data;
};
          }

        },
        "adobe-alloy/dist/lib/actions/sendEvent/index.js": {
          "name": "send-event",
          "displayName": "Send event",
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createSendEvent = require("./createSendEvent");

var instanceManager = require("../../instanceManager/index");

var sendEventCallbackStorage = require("../../sendEventCallbackStorage");

module.exports = createSendEvent({
  instanceManager: instanceManager,
  sendEventCallbackStorage: sendEventCallbackStorage
});
          }

        },
        "adobe-alloy/dist/lib/instanceManager/index.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// The Adobe Launch bundler doesn't handle requiring npm packages, but this is
// equivalent to require("@adobe/alloy"). We could run our own bundler to do this,
// but this works. If Alloy changed the location of its cjs entry point we would
// need to change the path here.
var _require = require("../alloy"),
    createInstance = _require.createInstance,
    createEventMergeId = _require.createEventMergeId;

var createInstanceManager = require("./createInstanceManager");

var injectWrapOnBeforeEventSend = require("./injectWrapOnBeforeEventSend");

var version = "2.15.1";
var wrapOnBeforeEventSend = injectWrapOnBeforeEventSend({
  version: version
});
module.exports = createInstanceManager({
  turbine: turbine,
  window: window,
  createInstance: createInstance,
  createEventMergeId: createEventMergeId,
  orgId: _satellite.company.orgId,
  wrapOnBeforeEventSend: wrapOnBeforeEventSend
});
          }

        },
        "adobe-alloy/dist/lib/actions/sendEvent/createSendEvent.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var clone = require("../../utils/clone");

module.exports = function (_ref) {
  var instanceManager = _ref.instanceManager,
      sendEventCallbackStorage = _ref.sendEventCallbackStorage;
  return function (settings) {
    var instanceName = settings.instanceName,
        otherSettings = _objectWithoutProperties(settings, ["instanceName"]);

    var instance = instanceManager.getInstance(instanceName);

    if (!instance) {
      throw new Error("Failed to send event for instance \"".concat(instanceName, "\". No matching instance was configured with this name."));
    } // If the customer modifies the xdm or data object (or anything nested in the object) after this action runs,
    // we want to make sure those modifications are not reflected in the data sent to the server. By cloning the
    // objects here, we ensure we use a snapshot that will remain unchanged during the time period between when
    // sendEvent is called and the network request is made.


    if (otherSettings.xdm) {
      otherSettings.xdm = clone(otherSettings.xdm);
    }

    if (otherSettings.data) {
      otherSettings.data = clone(otherSettings.data);
    }

    return instance("sendEvent", otherSettings).then(function (result) {
      sendEventCallbackStorage.triggerEvent(result);
    });
  };
};
          }

        },
        "adobe-alloy/dist/lib/sendEventCallbackStorage.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var sendEventCompleteTriggers = [];
module.exports = {
  add: function add(trigger) {
    sendEventCompleteTriggers.push(trigger);
  },
  triggerEvent: };
          }

        },
        "adobe-alloy/dist/lib/utils/clone.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Clones a value by serializing then deserializing the value.
 * @param {*} value
 * @returns {any}
 */
module.exports = 
          }

        },
        "adobe-alloy/dist/lib/alloy.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInstance = exports.createEventMergeId = void 0;

var _reactorObjectAssign = _interopRequireDefault(require("@adobe/reactor-object-assign"));

var _reactorCookie = _interopRequireDefault(require("@adobe/reactor-cookie"));

var _reactorQueryString = _interopRequireDefault(require("@adobe/reactor-query-string"));

var _reactorLoadScript = _interopRequireDefault(require("@adobe/reactor-load-script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }




function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }













/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var CHROME = "Chrome";
var EDGE = "Edge";
var EDGE_CHROMIUM = "EdgeChromium";
var FIREFOX = "Firefox";
var IE = "IE";
var SAFARI = "Safari";
var UNKNOWN = "Unknown";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether an array includes a certain value.
 * @param {Array} arr Array to search.
 * @param {*} item The item for which to search.
 * @returns {boolean}
 */

var includes = 
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// we don't know. We also assume "unknown" browsers support third-party cookies,
// though we don't really know that either. We're making best guesses.


var browsersSupportingThirdPartyCookie = [CHROME, EDGE, EDGE_CHROMIUM, IE, UNKNOWN];

var areThirdPartyCookiesSupportedByDefault = function areThirdPartyCookiesSupportedByDefault(browser) {
  return includes(browsersSupportingThirdPartyCookie, browser);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns true when the value is null.
 * @param {*} value
 * @returns {boolean}
 */


var isNil = 
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an object.
 * @param {*} value
 * @returns {boolean}
 */


var isObject = function isObject(value) {
  return !isNil(value) && !Array.isArray(value) && _typeof(value) === "object";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var deepAssignObject = function deepAssignObject(target, source) {
  Object.keys(source).forEach(function (key) {
    if (isObject(target[key]) && isObject(source[key])) {
      deepAssignObject(target[key], source[key]);
      return;
    }

    target[key] = source[key];
  });
};
/**
 * Recursively copy the values of all enumerable own properties from a source item to a target item if the both items are objects
 * @param {Object} target - a target object
 * @param {...Object} source - an array of source objects
 * @example
 * deepAssign({ a: 'a', b: 'b' }, { b: 'B', c: 'c' });
 * // { a: 'a', b: 'B', c: 'c' }
 */


var deepAssign = function deepAssign(target) {
  if (isNil(target)) {
    throw new TypeError('deepAssign "target" cannot be null or undefined');
  }

  var result = Object(target);

  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(;
  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a function that, when passed an object of updates, will merge
 * the updates onto the current value of a payload property.
 * @param {Object} content The base object to modify
 * @param {String } key The property to merge updates into. This
 * can be a dot-notation property path.
 * @returns {Function}
 */


var createMerger = function createMerger(content, key) {
  return function (updates) {
    var propertyPath = key.split(".");
    var hostObjectForUpdates = propertyPath.reduce(function (obj, propertyName) {
      obj[propertyName] = obj[propertyName] || {};
      return obj[propertyName];
    }, content);
    deepAssign(hostObjectForUpdates, updates);
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Allows callbacks to be registered and then later called. When the
 * callbacks are called, their responses are combined into a single promise.
 */


var createCallbackAggregator = function createCallbackAggregator() {
  var callbacks = [];
  return {
    add: function add(callback) {
      callbacks.push(callback);
    },
    call: function call() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // While this utility doesn't necessarily need to be doing the
      // Promise.all, it's currently useful everywhere this is used and
      // reduces repetitive code. We can factor it out later if we want
      // to make this utility more "pure".
      return Promise.all(callbacks.map();
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createLoggingCookieJar = function createLoggingCookieJar(_ref) {
  var logger = _ref.logger,
      cookieJar = _ref.cookieJar;
  return _objectSpread(_objectSpread({}, cookieJar), {}, {
    set: function set(key, value, options) {
      logger.info("Setting cookie", _objectSpread({
        name: key,
        value: value
      }, options));
      cookieJar.set(key, value, options);
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Sequences tasks.
 */


var createTaskQueue = function createTaskQueue() {
  var queueLength = 0;
  var lastPromiseInQueue = Promise.resolve();
  return {
    /**
     * Add a task to the queue. If no task is currenty running,
     * the task will begin immediately.
     * @param {Function} task A function that will be called when
     * the task should be run. If the task it asynchronous, it should
     * return a promise.
     * @returns {Promise} A promise that will be resolved or rejected
     * with whatever value the task resolved or rejects its promise.
     */
    addTask: function addTask(task) {
      queueLength += 1;

      var lastPromiseFulfilledHandler = function lastPromiseFulfilledHandler() {
        return task()["finally"](;
      };

      lastPromiseInQueue = lastPromiseInQueue.then(lastPromiseFulfilledHandler, lastPromiseFulfilledHandler);
      return lastPromiseInQueue;
    },

    /**
     * How many tasks are in the queue. This includes the task
     * that's currently running.
     * @returns {number}
     */
    get length() {
      return queueLength;
    }

  };
};
/* eslint-disable */

/*
crc32 · JavaScript Function to Calculate CRC32 of a String
Description
  Below is a JavaScript function to calculate CRC32 of a string. 
  The string can be either ASCII or Unicode. 
  Unicode strings will be encoded in UTF-8. 
  The polynomial used in calculation is 0xedb88320. 
  This polynomial is used in Ethernet, Gzip, PNG, SATA and many other technologies.
*/


var crc32 = function () {
  var table = [];

  for (var _i = 0; _i < 256; _i++) {
    var c = _i;

    for (var j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
    }

    table.push(c);
  }

  return function (str, crc) {
    str = unescape(encodeURIComponent(str));
    if (!crc) crc = 0;
    crc = crc ^ -1;

    for (var _i2 = 0; _i2 < str.length; _i2++) {
      var y = (crc ^ str.charCodeAt(_i2)) & 0xff;
      crc = crc >>> 8 ^ table[y];
    }

    crc = crc ^ -1;
    return crc >>> 0;
  };
}();
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * A simple utility for managing a promise's state outside of
 * the promise's "executor" (the function passed into the constructor).
 */


var defer =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Whether a string ends with the characters of a specified string
 * @param {String} str The string to search within.
 * @param {String} suffix The string to search for.
 * @returns {boolean}
 */


var endsWith =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns the first item in the array that satisfies the provided testing function.
 * @param {Array} arr The array to search.
 * @param {Function} predicate Function that will be called for each item. Arguments
 * will be the item, the item index, then the array itself.
 * @returns {*}
 */


var find = function find(arr, predicate) {
  for (var _i3 = 0; _i3 < arr.length; _i3 += 1) {
    var item = arr[_i3];

    if (predicate(item, _i3, arr)) {
      return item;
    }
  }

  return undefined;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var appendNode = function appendNode(parent, node) {
  return parent.appendChild(node);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var populateElementProperties = function populateElementProperties(element, props) {
  Object.keys(props).forEach(function (key) {
    // The following is to support setting style properties to avoid CSP errors.
    if (key === "style" && isObject(props[key])) {
      var styleProps = props[key];
      Object.keys(styleProps).forEach);
    } else {
      element[key] = props[key];
    }
  });
};

var createNode = function createNode(tag) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
  var result = doc.createElement(tag);
  Object.keys(attrs).forEach);
  populateElementProperties(result, props);
  children.forEach(function (child) {
    return appendNode(result, child);
  });
  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var BODY = "BODY";
var IFRAME = "IFRAME";
var IMG = "IMG";
var DIV = "DIV";
var STYLE = "STYLE";
var SCRIPT = "SCRIPT";
var HEAD = "HEAD";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Fires an image pixel from the current document's window.
 * @param {object} currentDocument
 * @param {string} src
 * @returns {Promise}
 */

var fireImageInDocument = function fireImageInDocument(_ref2) {
  var src = _ref2.src,
      _ref2$currentDocument = _ref2.currentDocument,
      currentDocument = _ref2$currentDocument === void 0 ? document : _ref2$currentDocument;
  return new Promise(function (resolve, reject) {
    var attrs = {
      src: src
    };
    var props = {
      onload: resolve,
      onerror: reject,
      onabort: reject
    };
    createNode(IMG, attrs, props, [], currentDocument);
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a function.
 * @param {*} value
 * @returns {boolean}
 */


var isFunction = function isFunction(value) {
  return typeof value === "function";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a non-empty array.
 * @param {*} value
 * @returns {boolean}
 */


var isNonEmptyArray =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var toArray = function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (value == null) {
    return [];
  }

  return [].slice.call(value);
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SIBLING_PATTERN = /^\s*>/;

var querySelectorAll = function querySelectorAll(context, selector) {
  if (!SIBLING_PATTERN.test(selector)) {
    return toArray(context.querySelectorAll(selector));
  }

  var tag = "alloy-".concat(Date.now()); // We could use a :scope selector here, but we want to be IE compliant
  // so we add a dummy css class to be able to select the children

  try {
    context.classList.add(tag);
    return toArray(context.querySelectorAll(".".concat(tag, " ").concat(selector)));
  } finally {
    context.classList.remove(tag);
  }
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Whether a string starts with the characters of a specified string
 * @param {String} str The string to search within.
 * @param {String} prefix The string to search for.
 * @returns {boolean}
 */


var startsWith = function startsWith(str, prefix) {
  return str.substr(0, prefix.length) === prefix;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SHADOW_SEPARATOR = ":shadow";
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var splitWithShadow = function splitWithShadow(selector) {
  return selector.split(SHADOW_SEPARATOR);
};

var transformPrefix = function transformPrefix(parent, selector) {
  var result = selector.trim();
  var hasChildCombinatorPrefix = startsWith(result, ">");

  if (!hasChildCombinatorPrefix) {
    return result;
  } // IE doesn't support :scope


  if (window.document.documentMode) {
    return result.substring(1).trim();
  }

  var prefix = parent instanceof Element || parent instanceof HTMLDocument ? ":scope" : ":host"; // see https://bugs.webkit.org/show_bug.cgi?id=233380

  return "".concat(prefix, " ").concat(result);
};

var selectNodesWithShadow = function selectNodesWithShadow(context, selector) {
  // Shadow DOM should be supported
  if (!window.document.documentElement.attachShadow) {
    return querySelectorAll(context, selector.replace(SHADOW_SEPARATOR, ""));
  }

  var parts = splitWithShadow(selector);

  if (parts.length < 2) {
    return querySelectorAll(context, selector);
  } // split the selector into parts separated by :shadow pseudo-selectors
  // find each subselector element based on the previously selected node's shadowRoot


  var parent = context;

  for (var _i4 = 0; _i4 < parts.length; _i4 += 1) {
    var part = transformPrefix(parent, parts[_i4]);
    var partNode = querySelectorAll(parent, part);

    if (partNode.length === 0 || !partNode[0] || !partNode[0].shadowRoot) {
      return partNode;
    }

    parent = partNode[0].shadowRoot;
  }

  return undefined;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var isShadowSelector =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns an array of matched DOM nodes.
 * @param {String} selector
 * @param {Node} [context=document] defaults to document
 * @returns {Array} an array of DOM nodes
 */


var selectNodes = function selectNodes(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (!isShadowSelector(selector)) {
    return querySelectorAll(context, selector);
  }

  return selectNodesWithShadow(context, selector);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var MUTATION_OBSERVER = "MutationObserver";
var RAF = "requestAnimationFrame";
var MUTATION_OBSERVER_CONFIG = {
  childList: true,
  subtree: true
};
var VISIBILITY_STATE = "visibilityState";
var VISIBLE = "visible";
var DELAY = 100;
var MAX_POLLING_TIMEOUT = 5000;

var createError = function createError(selector) {
  return new Error("Could not find: ".concat(selector));
};

var createPromise =;

var canUseMutationObserver =;

var awaitUsingMutationObserver = function awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var mutationObserver = new win[MUTATION_OBSERVER](function () {
      var nodes = selectFunc(selector);

      if (isNonEmptyArray(nodes)) {
        mutationObserver.disconnect();
        resolve(nodes);
      }
    });
    setTimeout(function () {
      mutationObserver.disconnect();
      reject(createError(selector));
    }, timeout);
    mutationObserver.observe(doc, MUTATION_OBSERVER_CONFIG);
  });
};

var canUseRequestAnimationFrame = function canUseRequestAnimationFrame(doc) {
  return doc[VISIBILITY_STATE] === VISIBLE;
};

var awaitUsingRequestAnimation = function awaitUsingRequestAnimation(win, selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var execute = function execute() {
      var nodes = selectFunc(selector);

      if (isNonEmptyArray(nodes)) {
        resolve(nodes);
        return;
      }

      win[RAF](execute);
    };

    execute();
    setTimeout(function () {
      reject(createError(selector));
    }, timeout);
  });
};

var awaitUsingTimer = function awaitUsingTimer(selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var execute = function execute() {
      var nodes = selectFunc(selector);

      if (isNonEmptyArray(nodes)) {
        resolve(nodes);
        return;
      }

      setTimeout(execute, DELAY);
    };

    execute();
    setTimeout, timeout);
  });
};

var awaitSelector = function awaitSelector(selector) {
  var selectFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectNodes;
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_POLLING_TIMEOUT;
  var win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
  var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
  var nodes = selectFunc(selector);

  if (isNonEmptyArray(nodes)) {
    return Promise.resolve(nodes);
  }

  if (canUseMutationObserver(win)) {
    return awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc);
  }

  if (canUseRequestAnimationFrame(doc)) {
    return awaitUsingRequestAnimation(win, selector, timeout, selectFunc);
  }

  return awaitUsingTimer(selector, timeout, selectFunc);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns true if element matches the selector.
 * @param {String} selector
 * @param {Node} [element]
 * @returns {Boolean}
 */


var matchesSelector = function matchesSelector(selector, element) {
  if (element.matches) {
    return element.matches(selector);
  } // Making IE 11 happy


  return element.msMatchesSelector(selector);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var removeNode = function removeNode(node) {
  var parent = node.parentNode;

  if (parent) {
    return parent.removeChild(node);
  }

  return null;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var IFRAME_ATTRS = {
  name: "Adobe Alloy"
};
var IFRAME_PROPS = {
  style: {
    display: "none",
    width: 0,
    height: 0
  }
};

var injectFireReferrerHideableImage = function injectFireReferrerHideableImage() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$appendNode = _ref3.appendNode,
      appendNode$1 = _ref3$appendNode === void 0 ? appendNode : _ref3$appendNode,
      _ref3$awaitSelector = _ref3.awaitSelector,
      awaitSelector$1 = _ref3$awaitSelector === void 0 ? awaitSelector : _ref3$awaitSelector,
      _ref3$createNode = _ref3.createNode,
      createNode$1 = _ref3$createNode === void 0 ? createNode : _ref3$createNode,
      _ref3$fireImage = _ref3.fireImage,
      fireImage = _ref3$fireImage === void 0 ? fireImageInDocument : _ref3$fireImage;

  var fireOnPage = fireImage;
  var hiddenIframe;

  var createIframe = function createIframe() {
    return awaitSelector$1(BODY).then(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
          body = _ref5[0];

      if (hiddenIframe) {
        return hiddenIframe;
      }

      hiddenIframe = createNode$1(IFRAME, IFRAME_ATTRS, IFRAME_PROPS);
      return appendNode$1(body, hiddenIframe);
    });
  };

  var fireInIframe = function fireInIframe(_ref6) {
    var src = _ref6.src;
    return createIframe().then);
  };

  return;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var flatMap = function flatMap(array, mapFunction) {
  return Array.prototype.concat.apply([], array.map(mapFunction));
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var baseNamespace = "com.adobe.alloy.";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns the last N number of items from an array.
 * @param {Array} arr
 * @param {number} itemCount
 * @returns {Array}
 */

var getLastArrayItems = function getLastArrayItems(arr, itemCount) {
  return arr.slice(-itemCount);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var cookieName = "".concat(baseNamespace, "getTld");
/**
 * Of the current web page's hostname, this is the top-most domain that is
 * not a "public suffix" as outlined in https://publicsuffix.org/. In other
 * words, this is top-most domain that is able to accept cookies.
 * @param {Object} window
 * @param {Object} cookieJar
 * @returns {string}
 */

var getApexDomain = function getApexDomain(window, cookieJar) {
  var topLevelCookieDomain = ""; // If hostParts.length === 1, we may be on localhost.

  var hostParts = window.location.hostname.toLowerCase().split(".");
  var i = 1;

  while (i < hostParts.length && !cookieJar.get(cookieName)) {
    i += 1;
    topLevelCookieDomain = getLastArrayItems(hostParts, i).join(".");
    cookieJar.set(cookieName, cookieName, {
      domain: topLevelCookieDomain
    });
  }

  cookieJar.remove(cookieName, {
    domain: topLevelCookieDomain
  });
  return topLevelCookieDomain;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// Remember to also incorporate the org ID wherever cookies are read or written.


var COOKIE_NAME_PREFIX = "kndctr";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var sanitizeOrgIdForCookieName =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getNamespacedCookieName = function getNamespacedCookieName(orgId, key) {
  return "".concat(COOKIE_NAME_PREFIX, "_").concat(sanitizeOrgIdForCookieName(orgId), "_").concat(key);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var IDENTITY = "identity";
var CONSENT = "consent";
var CLUSTER = "cluster";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectDoesIdentityCookieExist = function injectDoesIdentityCookieExist(_ref7) {
  var orgId = _ref7.orgId;
  var identityCookieName = getNamespacedCookieName(orgId, IDENTITY);
  /**
   * Returns whether the identity cookie exists.
   */

  return function () {
    return Boolean(_reactorCookie["default"].get(identityCookieName));
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getStorageByType = function getStorageByType(context, storageType, namespace) {
  // When storage is disabled on Safari, the mere act of referencing
  // window.localStorage or window.sessionStorage throws an error.
  // For this reason, we wrap in a try-catch.
  return {
    /**
     * Reads a value from storage.
     * @param {string} name The name of the item to be read.
     * @returns {string}
     */
    getItem: function getItem(name) {
      try {
        return context[storageType].getItem(namespace + name);
      } catch (e) {
        return null;
      }
    },

    /**
     * Saves a value to storage.
     * @param {string} name The name of the item to be saved.
     * @param {string} value The value of the item to be saved.
     * @returns {boolean} Whether the item was successfully saved to storage.
     */
    setItem: function setItem(name, value) {
      try {
        context[storageType].setItem(namespace + name, value);
        return true;
      } catch (e) {
        return false;
      }
    },

    /**
     * Clear all values in storage that match the namespace.
     */
    clear: function clear() {
      try {
        Object.keys(context[storageType]).forEach(function (key) {
          if (startsWith(key, namespace)) {
            context[storageType].removeItem(key);
          }
        });
        return true;
      } catch (e) {
        return false;
      }
    }
  };
};

var injectStorage = function injectStorage(context) {
  return;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns items that are found within both arrays.
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */


var intersection =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a boolean.
 * @param {*} value
 * @returns {boolean}
 */


var isBoolean = function isBoolean(value) {
  return typeof value === "boolean";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an empty object.
 * @param {*} value
 * @returns {boolean}
 */


var isEmptyObject = function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a number.
 * @param {*} value
 * @returns {boolean}
 */
// eslint-disable-next-line no-restricted-globals


var isNumber = function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an integer.
 * @param {*} value
 * @returns {boolean}
 */


var isInteger = function isInteger(value) {
  var parsed = parseInt(value, 10);
  return isNumber(parsed) && value === parsed;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether a cookie name is namespaced according to the contract
 * defined by the server.
 * @param {String} orgId The org ID configured for the Alloy instance.
 * @param {String} name The cookie name.
 * @returns {boolean}
 */


var isNamespacedCookieName = function isNamespacedCookieName(orgId, name) {
  return name.indexOf("".concat(COOKIE_NAME_PREFIX, "_").concat(sanitizeOrgIdForCookieName(orgId), "_")) === 0;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a string.
 * @param {*} value
 * @returns {boolean}
 */


var isString =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a populated string.
 * @param {*} value
 * @returns {boolean}
 */


var isNonEmptyString =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a function that memoizes the result of `fn`. If `keyResolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key.
 *
 * @param {Function} fn The function to have its output memoized.
 * @param {Function} [keyResolver] The function to resolve the cache key.
 * @returns {Function} The new memoized function.
 */


var memoize = function memoize(fn, keyResolver) {
  var map = new Map();
  return function () {
    var key = keyResolver ? keyResolver.apply(void 0, arguments) : arguments.length <= 0 ? undefined : arguments[0];

    if (map.has(key)) {
      return map.get(key);
    }

    var result = fn.apply(void 0, arguments);
    map.set(key, result);
    return result;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * A function that performs no operations.
 */


var noop =;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


var padStart = function padStart(string, targetLength, padString) {
  var originalString = String(string);
  var repeatedPadString = String(padString);

  if (originalString.length >= targetLength || repeatedPadString.length === 0) {
    return originalString;
  }

  var lengthToAdd = targetLength - originalString.length;

  while (lengthToAdd > repeatedPadString.length) {
    repeatedPadString += repeatedPadString;
  }

  return repeatedPadString.slice(0, lengthToAdd) + originalString;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates and returns a new error using the provided value as a message.
 * If the provided value is already an Error, it will be returned unmodified.
 * @param {*} value
 * @returns {Error}
 */


var toError = function toError(value) {
  return value instanceof Error ? value : new Error(value);
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var updateErrorMessage = function updateErrorMessage(_ref8) {
  var error = _ref8.error,
      message = _ref8.message;

  try {
    error.message = message;
  } catch (e) {// We'll set a new message when we can, but some errors, like DOMException,
    // have a read-only message property, which limits our options.
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Augments an error's message with additional context as it bubbles up the call stack.
 * @param {String} message The message to be added to the error.
 * @param {*} error Optimally, this is an instance of Error. If it is not,
 * this is used as the basis for the message of a newly created Error instance.
 * @returns {*}
 */


var stackError = function stackError(_ref9) {
  var error = _ref9.error,
      message = _ref9.message;
  var errorToStack = toError(error);
  var newMessage = "".concat(message, "\nCaused by: ").concat(errorToStack.message);
  updateErrorMessage({
    error: errorToStack,
    message: newMessage
  });
  return errorToStack;
};

var stringToBoolean = function stringToBoolean(str) {
  return isString(str) && str.toLowerCase() === "true";
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/*
 * coerce `value` to a number or return `defaultValue` if it cannot be.
 *
 * The coersion is attempted if value is a number or string.
 */


var toInteger = function toInteger(value, defaultValue) {
  if (isNumber(value) || isString(value)) {
    var n = Math.round(Number(value)); // eslint-disable-next-line no-restricted-globals

    if (!isNaN(n)) {
      return n;
    }
  }

  return defaultValue;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Formats the date into an ISO date-time string in the local timezone
 * @param {Date} date
 * @returns {string}
 */


var toISOStringLocal = function toISOStringLocal(date) {
  var YYYY = date.getFullYear();
  var MM = padStart(date.getMonth() + 1, 2, "0");
  var DD = padStart(date.getDate(), 2, "0");
  var hh = padStart(date.getHours(), 2, "0");
  var mm = padStart(date.getMinutes(), 2, "0");
  var ss = padStart(date.getSeconds(), 2, "0");
  var mmm = padStart(date.getMilliseconds(), 3, "0"); // The time-zone offset is the difference, in minutes, from local time to UTC. Note that this
  // means that the offset is positive if the local timezone is behind UTC and negative if it is
  // ahead. For example, for time zone UTC+10:00, -600 will be returned.

  var timezoneOffset = toInteger(date.getTimezoneOffset(), 0);
  var ts = timezoneOffset > 0 ? "-" : "+";
  var th = padStart(Math.floor(Math.abs(timezoneOffset) / 60), 2, "0");
  var tm = padStart(Math.abs(timezoneOffset) % 60, 2, "0");
  return "".concat(YYYY, "-").concat(MM, "-").concat(DD, "T").concat(hh, ":").concat(mm, ":").concat(ss, ".").concat(mmm).concat(ts).concat(th, ":").concat(tm);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};


var rngBrowser = createCommonjsModule(function (module) {
  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection
  // getRandomValues needs to be invoked in a context where "this" is a Crypto
  // implementation. Also, find the complete implementation of crypto on IE11.
  var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

  if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

    module.exports =;
  } else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);

    module.exports =;
  }
});
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}


var bytesToUuid_1 = bytesToUuid;


var v4_1 = v4;
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Chains two validators together.
 *
 * Validators are functions of two parameters (value and path) that return the computed value if
 * the input is valid, or throw an exception if the input is invalid. In most cases the returned
 * value is the same as the input value; however, reference createDefaultValidator.js
 * to see an example where the computed value is different from the input. Additionally, if we ever
 * wanted to coerce types (i.e. parse string values into integers) as part of the validation process
 * we could use the computed value to accomplish that.
 *
 * The path parameter is used to generate informative error messages. It is created by the objectOf, and
 * arrayOf validators so that any error message can describe which key within the object or array is
 * invalid.
 *
 * The validators also have methods to chain additional validation logic. For example, when you call
 * `string()` to start a validator chain, it returns a validator function but it also has methods
 * like `required` and `nonEmpty`. In index.js you can see that these methods are actually calling `chain`.
 * Specifically in this function, the leftValidator is called first and then the return value of that is
 * sent to the rightValidator. For example, when calling `string().nonEmpty().required()` the following
 * chain is built up:
 * ```
 *              *
 *            /   \
 *          *     required
 *        /   \
 *      *     nonEmpty
 *    /   \
 * base   string
 * ```
 * Where every * is a call to chain where the two are combined. The individual validators are called from
 * left to right in the above tree. The base validator is simply the identity function `value => value`,
 * representing an optional value.
 *
 * After combining the validators, the new validator function is then augmented with the methods from the
 * leftValidator and from the additionalMethods parameter. For example, when the string() function is called
 * it chains to the base validator, but also adds additional methods like (`regexp`, `domain`, `nonEmpty`,
 * and `unique`). When `nonEmpty` is called, which calls chain again, the additional methods are carried
 * forward because they are already defined on the leftValidator.
 *
 * The base validator also contains the two methods `required` and `default`, so these can be used anywhere
 * after any of the exposed validator functions are called.
 */

var chain = function chain(leftValidator, rightValidator) {
  var additionalMethods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // combine the two validators, calling left first and then right.
  // pass the return value from left into right.
  var combinedValidator =; // add the methods already defined on the left validator, and the additionalMethods
  // to the new combined validator function.


  (0, _reactorObjectAssign["default"])(combinedValidator, leftValidator, additionalMethods);
  return combinedValidator;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * This augments `chain` with a null check done before running the rightValidator.
 * See chain for more info.
 *
 * For most validators, we want the validation to be optional (i.e. allow null or
 * undefined values). To accomplish this, the validator needs to have a check
 * at the begining of the function, short circuiting the validation logic and
 * returning value if value is null or undefined. `default` and `required` do not
 * want this null check though. Indeed, `default` should return the default value
 * if value is null, and `required` should throw an error if value is null.
 *
 * So to keep from having to have a null check in front of most validators, this
 * function allows you to chain a rightValidator that needs to have a null check.
 */


var nullSafeChain = function nullSafeChain(leftValidator, rightValidator, additionalMethods) {
  var rightValidatorWithNullCheck = function rightValidatorWithNullCheck(value, path) {
    return value == null ? value : rightValidator(value, path);
  };

  return chain(leftValidator, rightValidatorWithNullCheck, additionalMethods);
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var assertValid = function assertValid(isValid, value, path, message) {
  if (!isValid) {
    throw new Error("'".concat(path, "': Expected ").concat(message, ", but got ").concat(JSON.stringify(value), "."));
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var booleanValidator = function booleanValidator(value, path) {
  assertValid(isBoolean(value), value, path, "true or false");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var callbackValidator = function callbackValidator(value, path) {
  assertValid(isFunction(value), value, path, "a function");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createArrayOfValidator = function createArrayOfValidator(elementValidator) {
  return function (value, path) {
    assertValid(Array.isArray(value), value, path, "an array");
    var errors = [];
    var validatedArray = value.map(function (subValue, i) {
      try {
        return elementValidator(subValue, "".concat(path, "[").concat(i, "]"));
      } catch (e) {
        errors.push(e.message);
        return undefined;
      }
    });

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return validatedArray;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDefaultValidator = function createDefaultValidator(defaultValue) {
  return function (value) {
    if (value == null) {
      return defaultValue;
    }

    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createLiteralValidator = function createLiteralValidator(literalValue) {
  return function (value, path) {
    assertValid(value === literalValue, value, path, "".concat(literalValue));
    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createMapOfValuesValidator = function createMapOfValuesValidator(valueValidator) {
  return function (value, path) {
    assertValid(isObject(value), value, path, "an object");
    var errors = [];
    var validatedObject = {};
    Object.keys(value).forEach(function (subKey) {
      var subValue = value[subKey];
      var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;

      try {
        var validatedValue = valueValidator(subValue, subPath);

        if (validatedValue !== undefined) {
          validatedObject[subKey] = validatedValue;
        }
      } catch (e) {
        errors.push(e.message);
      }
    });

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return validatedObject;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createMinimumValidator = function createMinimumValidator(typeName, minimum) {
  return function (value, path) {
    assertValid(value >= minimum, value, path, "".concat(typeName, " greater than or equal to ").concat(minimum));
    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createNoUnknownFieldsValidator = function createNoUnknownFieldsValidator(schema) {
  return function (value, path) {
    var errors = [];
    Object.keys(value).forEach);

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return value;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createNonEmptyValidator = function createNonEmptyValidator(message) {
  return function (value, path) {
    if (isObject(value)) {
      assertValid(!isEmptyObject(value), value, path, message);
    } else {
      assertValid(value.length > 0, value, path, message);
    }

    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createObjectOfValidator = function createObjectOfValidator(schema) {
  return function (value, path) {
    assertValid(isObject(value), value, path, "an object");
    var errors = [];
    var validatedObject = {};
    Object.keys(schema).forEach(function (subKey) {
      var subValue = value[subKey];
      var subSchema = schema[subKey];
      var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;

      try {
        var validatedValue = subSchema(subValue, subPath);

        if (validatedValue !== undefined) {
          validatedObject[subKey] = validatedValue;
        }
      } catch (e) {
        errors.push(e.message);
      }
    }); // copy over unknown properties

    Object.keys(value).forEach(function (subKey) {
      if (!Object.prototype.hasOwnProperty.call(validatedObject, subKey)) {
        validatedObject[subKey] = value[subKey];
      }
    });

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return validatedObject;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createAnyOfValidator = function createAnyOfValidator(validators, message) {
  return function (value, path) {
    var valid = find(validators, function (validator) {
      try {
        validator(value, path);
        return true;
      } catch (e) {
        return false;
      }
    });
    assertValid(valid, value, path, message);
    return value;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createUniqueValidator = function createUniqueValidator() {
  var values = [];
  return function (value, path) {
    assertValid(values.indexOf(value) === -1, value, path, "a unique value across instances");
    values.push(value);
    return value;
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether an array contains unique values.
 * @param {*} value
 * @returns {boolean}
 */


var isUnique = function isUnique(values) {
  var storedVals = Object.create(null);

  for (var _i5 = 0; _i5 < values.length; _i5 += 1) {
    var item = values[_i5];

    if (item in storedVals) {
      return false;
    }

    storedVals[item] = true;
  }

  return true;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createUniqueItemsValidator = function createUniqueItemsValidator() {
  return;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DOMAIN_REGEX = /^[a-z0-9.-]{1,}$/i;

var domainValidator = function domainValidator(value, path) {
  assertValid(DOMAIN_REGEX.test(value), value, path, "a valid domain");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var integerValidator = function integerValidator(value, path) {
  assertValid(isInteger(value), value, path, "an integer");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var numberValidator = function numberValidator(value, path) {
  assertValid(isNumber(value), value, path, "a number");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether the value is a valid regular expression.
 * @param {*} value
 * @returns {boolean}
 */


var isValidRegExp = function isValidRegExp(value) {
  try {
    return new RegExp(value) !== null;
  } catch (e) {
    return false;
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var regexpValidator = function regexpValidator(value, path) {
  assertValid(isValidRegExp(value), value, path, "a regular expression");
  return value;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var requiredValidator = function requiredValidator(value, path) {
  if (value == null) {
    throw new Error("'".concat(path, "' is a required option"));
  }

  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var stringValidator = function stringValidator(value, path) {
  assertValid(isString(value), value, path, "a string");
  return value;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var base = function base(value) {
  return value;
}; // The 'default' and 'required' methods are available after any data-type method
// Don't use the nullSafeChain because they need to handle the null or undefined case


base["default"] = function _default(defaultValue) {
  return chain(this, createDefaultValidator(defaultValue));
};

base.required = function required() {
  return chain(this, requiredValidator);
}; // helper validators


var domain = function domain() {
  return nullSafeChain(this, domainValidator);
};

var minimumInteger = function minimumInteger(minValue) {
  return nullSafeChain(this, createMinimumValidator("an integer", minValue));
};

var minimumNumber = function minimumNumber(minValue) {
  return nullSafeChain(this, createMinimumValidator("a number", minValue));
};

var integer =;

var nonEmptyString = function nonEmptyString() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty string"));
};

var nonEmptyArray = function nonEmptyArray() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty array"));
};

var nonEmptyObject = function nonEmptyObject() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty object"));
};

var regexp = function regexp() {
  return nullSafeChain(this, regexpValidator);
};

var unique = function createUnique() {
  return nullSafeChain(this, createUniqueValidator());
};

var uniqueItems = function createUniqueItems() {
  return nullSafeChain(this, createUniqueItemsValidator());
}; // top-level validators.  These are the first functions that are called to create a validator.


var anyOf = function anyOf(validators, message) {
  // use chain here because we don't want to accept null or undefined unless at least
  // one of the validators accept null or undefined.
  return chain(this, createAnyOfValidator(validators, message));
};

var anything = function anything() {
  return nullSafeChain(this, base);
};

var arrayOf = function arrayOf(elementValidator) {
  return nullSafeChain(this, createArrayOfValidator(elementValidator), {
    nonEmpty: nonEmptyArray,
    uniqueItems: uniqueItems
  });
};

var _boolean = function _boolean2() {
  return nullSafeChain(this, booleanValidator);
};

var callback =;

var literal =;

var number = function number() {
  return nullSafeChain(this, numberValidator, {
    minimum: minimumNumber,
    integer: integer,
    unique: unique
  });
};

var mapOfValues = function mapOfValues(valuesValidator) {
  return nullSafeChain(this, createMapOfValuesValidator(valuesValidator), {
    nonEmpty: nonEmptyObject
  });
};

var objectOf = function objectOf(schema) {
  var noUnknownFields =;

  return nullSafeChain(this, createObjectOfValidator(schema), {
    noUnknownFields: noUnknownFields,
    nonEmpty: nonEmptyObject
  });
};

var string = function string() {
  return nullSafeChain(this, stringValidator, {
    regexp: regexp,
    domain: domain,
    nonEmpty: nonEmptyString,
    unique: unique
  });
};

var boundAnyOf = anyOf.bind(base);
var boundAnything = anything.bind(base);
var boundArrayOf = arrayOf.bind(base);

var boundBoolean = _boolean.bind(base);

var boundCallback = callback.bind(base);
var boundLiteral = literal.bind(base);
number.bind(base);
var boundMapOfValues = mapOfValues.bind(base);
var boundObjectOf = objectOf.bind(base);
var boundString = string.bind(base); // compound validators

var boundEnumOf = function boundEnumOf() {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return boundAnyOf(values.map(boundLiteral), "one of these values: [".concat(JSON.stringify(values), "]"));
};

var AMBIGUOUS = "ambiguous";
var AUTHENTICATED = "authenticated";
var LOGGED_OUT = "loggedOut";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var validateIdentityMap = boundMapOfValues(boundArrayOf(boundObjectOf({
  authenticatedState: boundEnumOf(AMBIGUOUS, AUTHENTICATED, LOGGED_OUT),
  id: boundString(),
  namespace: boundObjectOf({
    code: boundString()
  }).noUnknownFields(),
  primary: boundBoolean(),
  xid: boundString()
}).noUnknownFields()).required());
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var debugQueryParam = "alloy_debug";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createLogController = function createLogController(_ref10) {
  var console = _ref10.console,
      locationSearch = _ref10.locationSearch,
      createLogger = _ref10.createLogger,
      instanceName = _ref10.instanceName,
      createNamespacedStorage = _ref10.createNamespacedStorage,
      getMonitors = _ref10.getMonitors;

  var parsedQueryString = _reactorQueryString["default"].parse(locationSearch);

  var storage = createNamespacedStorage("instance.".concat(instanceName, "."));
  var debugSessionValue = storage.session.getItem("debug");
  var debugEnabled = debugSessionValue === "true";
  var debugEnabledWritableFromConfig = debugSessionValue === null;

  var getDebugEnabled = function getDebugEnabled() {
    return debugEnabled;
  };

  var setDebugEnabled = function setDebugEnabled(value, _ref11) {
    var fromConfig = _ref11.fromConfig;

    if (!fromConfig || debugEnabledWritableFromConfig) {
      debugEnabled = value;
    }

    if (!fromConfig) {
      // Web storage only allows strings, so we explicitly convert to string.
      storage.session.setItem("debug", value.toString());
      debugEnabledWritableFromConfig = false;
    }
  };

  if (parsedQueryString[debugQueryParam] !== undefined) {
    setDebugEnabled(stringToBoolean(parsedQueryString[debugQueryParam]), {
      fromConfig: false
    });
  }

  return {
    setDebugEnabled: setDebugEnabled,
    logger: createLogger({
      getDebugEnabled: getDebugEnabled,
      context: {
        instanceName: instanceName
      },
      getMonitors: getMonitors,
      console: console
    }),
    createComponentLogger: function createComponentLogger(componentName) {
      return createLogger({
        getDebugEnabled: getDebugEnabled,
        context: {
          instanceName: instanceName,
          componentName: componentName
        },
        getMonitors: getMonitors,
        console: console
      });
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// TO-DOCUMENT: Lifecycle hooks and their params.


var hookNames = [// Called after all components have been registered.
"onComponentsRegistered", // Called before an event is sent on a data collection request
"onBeforeEvent", // Called before each request is made to the edge.
"onBeforeRequest", // Called after each response is returned from the edge with a successful
// status code
"onResponse", // Called after a network request to the edge fails. Either the request
// didn't make it to the edge, didn't make it to Konductor, or Konductor
// failed to return a regularly-structured response. (In this case { error }
// is passed as the parameter)
// Also called when the respone returns a 400 or 500 error. (In this case
// { response } is passed as the parameter)
"onRequestFailure", // A user clicked on an element.
"onClick"];

var createHook = function createHook(componentRegistry, hookName) {
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return Promise.all(componentRegistry.getLifecycleCallbacks(hookName).map));
  };
};
/**
 * This ensures that if a component's lifecycle method X
 * attempts to execute lifecycle method Y, that all X methods on all components
 * will have been called before any of their Y methods are called. It does
 * this by kicking the call to the Y method to the next JavaScript tick.
 * @returns {function}
 */


var guardHook = function guardHook(fn) {
  return function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return Promise.resolve().then);
  };
};

var createLifecycle = function createLifecycle(componentRegistry) {
  return hookNames.reduce(function (memo, hookName) {
    memo[hookName] = guardHook(createHook(componentRegistry, hookName));
    return memo;
  }, {});
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var wrapForErrorHandling = function wrapForErrorHandling(fn, stackMessage) {
  return function () {
    var result;

    try {
      result = fn.apply(void 0, arguments);
    } catch (error) {
      throw stackError({
        error: error,
        message: stackMessage
      });
    }

    if (result instanceof Promise) {
      result = result["catch"]);
    }

    return result;
  };
}; // TO-DOCUMENT: All public commands and their signatures.


var createComponentRegistry = function createComponentRegistry() {
  var commandsByName = {};
  var lifecycleCallbacksByName = {};

  var registerComponentCommands = function registerComponentCommands(namespace) {
    var componentCommandsByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var conflictingCommandNames = intersection(Object.keys(commandsByName), Object.keys(componentCommandsByName));

    if (conflictingCommandNames.length) {
      throw new Error("[ComponentRegistry] Could not register ".concat(namespace, " ") + "because it has existing command(s): ".concat(conflictingCommandNames.join(",")));
    }

    Object.keys(componentCommandsByName).forEach(function (commandName) {
      var command = componentCommandsByName[commandName];
      command.commandName = commandName;
      command.run = wrapForErrorHandling(command.run, "[".concat(namespace, "] An error occurred while executing the ").concat(commandName, " command."));
      commandsByName[commandName] = command;
    });
  };

  var registerLifecycleCallbacks = function registerLifecycleCallbacks(namespace) {
    var componentLifecycleCallbacksByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(componentLifecycleCallbacksByName).forEach(function (hookName) {
      lifecycleCallbacksByName[hookName] = lifecycleCallbacksByName[hookName] || [];
      lifecycleCallbacksByName[hookName].push(wrapForErrorHandling(componentLifecycleCallbacksByName[hookName], "[".concat(namespace, "] An error occurred while executing the ").concat(hookName, " lifecycle hook.")));
    });
  };

  return {
    register: function register(namespace, component) {
      var commands = component.commands,
          lifecycle = component.lifecycle;
      registerComponentCommands(namespace, commands);
      registerLifecycleCallbacks(namespace, lifecycle);
    },
    getCommand: function getCommand(commandName) {
      return commandsByName[commandName];
    },
    getCommandNames: function getCommandNames() {
      return Object.keys(commandsByName);
    },
    getLifecycleCallbacks:
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendNetworkRequest = function injectSendNetworkRequest(_ref12) {
  var logger = _ref12.logger,
      sendFetchRequest = _ref12.sendFetchRequest,
      sendBeaconRequest = _ref12.sendBeaconRequest,
      isRequestRetryable = _ref12.isRequestRetryable,
      getRequestRetryDelay = _ref12.getRequestRetryDelay;

  /**
   * Send a network request and returns details about the response.
   */
  return function (_ref13) {
    var requestId = _ref13.requestId,
        url = _ref13.url,
        payload = _ref13.payload,
        useSendBeacon = _ref13.useSendBeacon;
    // We want to log raw payload and event data rather than
    // our fancy wrapper objects. Calling payload.toJSON() is
    // insufficient to get all the nested raw data, because it's
    // not recursive (it doesn't call toJSON() on the event objects).
    // Parsing the result of JSON.stringify(), however, gives the
    // fully recursive raw data.
    var stringifiedPayload = JSON.stringify(payload);
    var parsedPayload = JSON.parse(stringifiedPayload);
    logger.logOnBeforeNetworkRequest({
      url: url,
      requestId: requestId,
      payload: parsedPayload
    });

    var executeRequest = function executeRequest() {
      var retriesAttempted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var requestMethod = useSendBeacon ? sendBeaconRequest : sendFetchRequest;
      return requestMethod(url, stringifiedPayload).then(function (response) {
        var requestIsRetryable = isRequestRetryable({
          response: response,
          retriesAttempted: retriesAttempted
        });

        if (requestIsRetryable) {
          var requestRetryDelay = getRequestRetryDelay({
            response: response,
            retriesAttempted: retriesAttempted
          });
          return new Promise);
        }

        var parsedBody;

        try {
          parsedBody = JSON.parse(response.body);
        } catch (e) {// Non-JSON. Something went wrong.
        }

        logger.logOnNetworkResponse(_objectSpread(_objectSpread({
          requestId: requestId,
          url: url,
          payload: parsedPayload
        }, response), {}, {
          parsedBody: parsedBody,
          retriesAttempted: retriesAttempted
        }));
        return {
          statusCode: response.statusCode,
          body: response.body,
          parsedBody: parsedBody,
          getHeader: response.getHeader
        };
      });
    };

    return executeRequest()["catch"](function (error) {
      logger.logOnNetworkError({
        requestId: requestId,
        url: url,
        payload: parsedPayload,
        error: error
      });
      throw stackError({
        error: error,
        message: "Network request failed."
      });
    });
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectExtractEdgeInfo = function injectExtractEdgeInfo(_ref14) {
  var logger = _ref14.logger;
  return function (adobeEdgeHeader) {
    if (adobeEdgeHeader) {
      var headerParts = adobeEdgeHeader.split(";");

      if (headerParts.length >= 2 && headerParts[1].length > 0) {
        try {
          var regionId = parseInt(headerParts[1], 10); // eslint recommends using Number.isNaN instead, but this function is
          // not available in Internet Explorer. Number.isNaN is more robust to
          // non-numeric parameters. Since we already know regionId will be an
          // integer, using isNaN is okay.
          // https://github.com/airbnb/javascript#standard-library--isnan
          // eslint-disable-next-line no-restricted-globals

          if (!isNaN(regionId)) {
            return {
              regionId: regionId
            };
          }
        } catch (e) {// No need to do anything. The log statement below will log an error
        }
      }

      logger.warn("Invalid adobe edge: \"".concat(adobeEdgeHeader, "\""));
    }

    return {};
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var IN = "in";
var OUT = "out";
var PENDING = "pending";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var GENERAL = "general";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var DECLINED_CONSENT_ERROR_CODE = "declinedConsent";
var CONSENT_SOURCE_DEFAULT = "default";
var CONSENT_SOURCE_INITIAL = "initial";
var CONSENT_SOURCE_NEW = "new";

var createDeclinedConsentError = function createDeclinedConsentError(errorMessage) {
  var error = new Error(errorMessage);
  error.code = DECLINED_CONSENT_ERROR_CODE;
  error.message = errorMessage;
  return error;
};

var createConsentStateMachine = function createConsentStateMachine(_ref15) {
  var logger = _ref15.logger;
  var deferreds = [];

  var runAll = function runAll() {
    while (deferreds.length) {
      deferreds.shift().resolve();
    }
  };

  var discardAll = function discardAll() {
    while (deferreds.length) {
      deferreds.shift().reject(createDeclinedConsentError("The user declined consent."));
    }
  };

  var awaitInitial =;

  var awaitInDefault = function awaitInDefault() {
    return Promise.resolve();
  };

  var awaitIn = function awaitIn() {
    return Promise.resolve();
  };

  var awaitOutDefault = function awaitOutDefault() {
    return Promise.reject(createDeclinedConsentError("No consent preferences have been set."));
  };

  var awaitOut =;

  var awaitPending = function awaitPending(returnImmediately) {
    if (returnImmediately) {
      return Promise.reject(new Error("Consent is pending."));
    }

    var deferred = defer();
    deferreds.push(deferred);
    return deferred.promise;
  };

  return {
    "in": function _in(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        this.awaitConsent = awaitInDefault;
      } else {
        if (source === CONSENT_SOURCE_INITIAL) {
          logger.info("Loaded user consent preferences. The user previously consented.");
        } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitIn) {
          logger.info("User consented.");
        }

        runAll();
        this.awaitConsent = awaitIn;
      }
    },
    out: function out(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        logger.warn("User consent preferences not found. Default consent of out will be used.");
        this.awaitConsent = awaitOutDefault;
      } else {
        if (source === CONSENT_SOURCE_INITIAL) {
          logger.warn("Loaded user consent preferences. The user previously declined consent.");
        } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitOut) {
          logger.warn("User declined consent.");
        }

        discardAll();
        this.awaitConsent = awaitOut;
      }
    },
    pending: function pending(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        logger.info("User consent preferences not found. Default consent of pending will be used. Some commands may be delayed.");
      }

      this.awaitConsent = awaitPending;
    },
    awaitConsent: awaitInitial,
    withConsent:
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConsent = function createConsent(_ref16) {
  var generalConsentState = _ref16.generalConsentState,
      logger = _ref16.logger;

  var _setConsent = function setConsent(consentByPurpose, source) {
    switch (consentByPurpose[GENERAL]) {
      case IN:
        generalConsentState["in"](source);
        break;

      case OUT:
        generalConsentState.out(source);
        break;

      case PENDING:
        generalConsentState.pending(source);
        break;

      default:
        logger.warn("Unknown consent value: ".concat(consentByPurpose[GENERAL]));
        break;
    }
  };

  return {
    initializeConsent: function initializeConsent(defaultConsentByPurpose, storedConsentByPurpose) {
      if (storedConsentByPurpose[GENERAL]) {
        _setConsent(storedConsentByPurpose, CONSENT_SOURCE_INITIAL);
      } else {
        _setConsent(defaultConsentByPurpose, CONSENT_SOURCE_DEFAULT);
      }
    },
    setConsent:,
    suspend: function suspend() {
      generalConsentState.pending();
    },
    awaitConsent: function awaitConsent() {
      return generalConsentState.awaitConsent();
    },
    withConsent: function withConsent() {
      return generalConsentState.withConsent();
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createEvent = function createEvent() {
  var content = {};
  var userXdm;
  var userData;
  var _documentMayUnload = false;
  var isFinalized = false;
  var shouldSendEvent = true;

  var throwIfEventFinalized = function throwIfEventFinalized(methodName) {
    if (isFinalized) {
      throw new Error("".concat(methodName, " cannot be called after event is finalized."));
    }
  };

  var event = {
    setUserXdm: function setUserXdm(value) {
      throwIfEventFinalized("setUserXdm");
      userXdm = value;
    },
    setUserData: function setUserData(value) {
      throwIfEventFinalized("setUserData");
      userData = value;
    },
    mergeXdm: function mergeXdm(xdm) {
      throwIfEventFinalized("mergeXdm");

      if (xdm) {
        deepAssign(content, {
          xdm: xdm
        });
      }
    },
    mergeMeta: function mergeMeta(meta) {
      throwIfEventFinalized("mergeMeta");

      if (meta) {
        deepAssign(content, {
          meta: meta
        });
      }
    },
    mergeQuery: function mergeQuery(query) {
      throwIfEventFinalized("mergeQuery");

      if (query) {
        deepAssign(content, {
          query: query
        });
      }
    },
    documentMayUnload: function documentMayUnload() {
      _documentMayUnload = true;
    },
    finalize: function finalize(onBeforeEventSend) {
      if (isFinalized) {
        return;
      }

      if (userXdm) {
        event.mergeXdm(userXdm);
      }

      if (userData) {
        content.data = userData;
      } // the event should already be considered finalized in case onBeforeEventSend throws an error


      isFinalized = true;

      if (onBeforeEventSend) {
        // assume that the onBeforeEventSend callback will fail (in-case of an error)
        shouldSendEvent = false; // this allows the user to replace the xdm and data properties
        // on the object passed to the callback

        var tempContent = {
          xdm: content.xdm || {},
          data: content.data || {}
        };
        var result = onBeforeEventSend(tempContent);
        shouldSendEvent = result !== false;
        content.xdm = tempContent.xdm || {};
        content.data = tempContent.data || {};

        if (isEmptyObject(content.xdm)) {
          delete content.xdm;
        }

        if (isEmptyObject(content.data)) {
          delete content.data;
        }
      }
    },
    getDocumentMayUnload: function getDocumentMayUnload() {
      return _documentMayUnload;
    },
    isEmpty: function isEmpty() {
      return isEmptyObject(content) && (!userXdm || isEmptyObject(userXdm)) && (!userData || isEmptyObject(userData));
    },
    shouldSend: function shouldSend() {
      return shouldSendEvent;
    },
    getViewName: function getViewName() {
      if (!userXdm || !userXdm.web || !userXdm.web.webPageDetails) {
        return undefined;
      }

      return userXdm.web.webPageDetails.viewName;
    },
    toJSON: function toJSON() {
      if (!isFinalized) {
        throw new Error("toJSON called before finalize");
      }

      return content;
    }
  };
  return event;
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var RETRY_AFTER = "Retry-After";
var ADOBE_EDGE = "x-adobe-edge";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a representation of a gateway response with the addition of
 * helper methods.
 * @returns Response
 */

var injectCreateResponse = function injectCreateResponse(_ref17) {
  var extractEdgeInfo = _ref17.extractEdgeInfo;
  return function (_ref18) {
    var _ref18$content = _ref18.content,
        content = _ref18$content === void 0 ? {} : _ref18$content,
        getHeader = _ref18.getHeader;
    var _content$handle = content.handle,
        handle = _content$handle === void 0 ? [] : _content$handle,
        _content$errors = content.errors,
        errors = _content$errors === void 0 ? [] : _content$errors,
        _content$warnings = content.warnings,
        warnings = _content$warnings === void 0 ? [] : _content$warnings;
    /**
     * Response object.
     * @typedef {Object} Response
     */

    return {
      /**
       * Returns matching fragments of the response by type.
       * @param {String} type A string with the current format: <namespace:action>
       *
       * @example
       * getPayloadsByType("identity:persist")
       */
      getPayloadsByType: function getPayloadsByType(type) {
        return flatMap(handle.filter(function (fragment) {
          return fragment.type === type;
        }), function (fragment) {
          return fragment.payload;
        });
      },

      /**
       * Returns all errors.
       */
      getErrors: function getErrors() {
        return errors;
      },

      /**
       * Returns all warnings.
       */
      getWarnings: function getWarnings() {
        return warnings;
      },

      /**
       * Returns an object containing the regionId from the x-adobe-edge header
       */
      getEdge:,
      toJSON: function toJSON() {
        return content;
      }
    };
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var CONFIGURE = "configure";
var SET_DEBUG = "setDebug";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectExecuteCommand = function injectExecuteCommand(_ref19) {
  var logger = _ref19.logger,
      configureCommand = _ref19.configureCommand,
      setDebugCommand = _ref19.setDebugCommand,
      handleError = _ref19.handleError,
      validateCommandOptions = _ref19.validateCommandOptions;
  var configurePromise;

  var getExecutor = function getExecutor(commandName, options) {
    var executor;

    if (commandName === CONFIGURE) {
      if (configurePromise) {
        throw new Error("The library has already been configured and may only be configured once.");
      }

      executor = function executor() {
        configurePromise = configureCommand(options);
        return configurePromise.then(function () {// Don't expose internals to the user.
        });
      };
    } else {
      if (!configurePromise) {
        throw new Error("The library must be configured first. Please do so by executing the configure command.");
      }

      if (commandName === SET_DEBUG) {
        executor = function executor() {
          return setDebugCommand(options);
        };
      } else {
        executor = function executor() {
          return configurePromise.then, function () {
            logger.warn("An error during configuration is preventing the ".concat(commandName, " command from executing.")); // If configuration failed, we prevent the configuration
            // error from bubbling here because we don't want the
            // configuration error to be reported in the console every
            // time any command is executed. Only having it bubble
            // once when the configure command runs is sufficient.
            // Instead, for this command, we'll just return a promise
            // that never gets resolved.

            return new Promise(function () {});
          });
        };
      }
    }

    return executor;
  };

  return function (commandName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve) {
      // We have to wrap the getExecutor() call in the promise so the promise
      // will be rejected if getExecutor() throws errors.
      var executor = getExecutor(commandName, options);
      logger.logOnBeforeCommand({
        commandName: commandName,
        options: options
      });
      resolve(executor());
    })["catch"])["catch"](function (error) {
      logger.logOnCommandRejected({
        commandName: commandName,
        options: options,
        error: error
      });
      throw error;
    }).then(function (rawResult) {
      // We should always be returning an object from every command.
      var result = isObject(rawResult) ? rawResult : {};
      logger.logOnCommandResolved({
        commandName: commandName,
        options: options,
        result: result
      });
      return result;
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var COMMAND_DOC_URI = "https://adobe.ly/3sHgQHb";

var validateCommandOptions = function validateCommandOptions(_ref20) {
  var command = _ref20.command,
      options = _ref20.options;
  var commandName = command.commandName,
      _command$documentatio = command.documentationUri,
      documentationUri = _command$documentatio === void 0 ? COMMAND_DOC_URI : _command$documentatio,
      optionsValidator = command.optionsValidator;
  var validatedOptions = options;

  if (optionsValidator) {
    try {
      validatedOptions = optionsValidator(options);
    } catch (validationError) {
      var invalidOptionsMessage = "Invalid ".concat(commandName, " command options:\n\t - ").concat(validationError, " For command documentation see: ").concat(documentationUri);
      throw new Error(invalidOptionsMessage);
    }
  }

  return validatedOptions;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */


var validateUserEventOptions = function validateUserEventOptions(_ref21) {
  var options = _ref21.options;
  var eventOptionsValidator = boundObjectOf({
    type: boundString(),
    xdm: boundObjectOf({
      eventType: boundString(),
      identityMap: validateIdentityMap
    }),
    data: boundObjectOf({}),
    documentUnloading: boundBoolean(),
    renderDecisions: boundBoolean(),
    decisionScopes: boundArrayOf(boundString()).uniqueItems(),
    personalization: boundObjectOf({
      decisionScopes: boundArrayOf(boundString()).uniqueItems(),
      surfaces: boundArrayOf(boundString()).uniqueItems()
    }),
    datasetId: boundString(),
    mergeId: boundString()
  }).required().noUnknownFields();
  return eventOptionsValidator(options);
};

var validateApplyResponse = function validateApplyResponse(_ref22) {
  var options = _ref22.options;
  var validator = boundObjectOf({
    renderDecisions: boundBoolean(),
    responseHeaders: boundMapOfValues(boundString().required()),
    responseBody: boundObjectOf({
      handle: boundArrayOf(boundObjectOf({
        type: boundString().required(),
        payload: boundAnything().required()
      })).required()
    }).required()
  }).noUnknownFields();
  return validator(options);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDataCollector = function createDataCollector(_ref23) {
  var eventManager = _ref23.eventManager;
  return {
    commands: {
      sendEvent: {
        documentationUri: "https://adobe.ly/3GQ3Q7t",
        optionsValidator: function optionsValidator(options) {
          return validateUserEventOptions({
            options: options
          });
        },
        run: function run(options) {
          var xdm = options.xdm,
              data = options.data,
              _options$documentUnlo = options.documentUnloading,
              documentUnloading = _options$documentUnlo === void 0 ? false : _options$documentUnlo,
              type = options.type,
              mergeId = options.mergeId,
              _options$renderDecisi = options.renderDecisions,
              renderDecisions = _options$renderDecisi === void 0 ? false : _options$renderDecisi,
              _options$decisionScop = options.decisionScopes,
              decisionScopes = _options$decisionScop === void 0 ? [] : _options$decisionScop,
              _options$personalizat = options.personalization,
              personalization = _options$personalizat === void 0 ? {} : _options$personalizat,
              datasetId = options.datasetId;
          var event = eventManager.createEvent();

          if (documentUnloading) {
            event.documentMayUnload();
          }

          event.setUserXdm(xdm);
          event.setUserData(data);

          if (type) {
            event.mergeXdm({
              eventType: type
            });
          }

          if (mergeId) {
            event.mergeXdm({
              eventMergeId: mergeId
            });
          }

          if (datasetId) {
            event.mergeMeta({
              collect: {
                datasetId: datasetId
              }
            });
          }

          return eventManager.sendEvent(event, {
            renderDecisions: renderDecisions,
            decisionScopes: decisionScopes,
            personalization: personalization
          });
        }
      },
      applyResponse: {
        documentationUri: "",
        optionsValidator:,
        run: function run(options) {
          var _options$renderDecisi2 = options.renderDecisions,
              renderDecisions = _options$renderDecisi2 === void 0 ? false : _options$renderDecisi2,
              _options$responseHead = options.responseHeaders,
              responseHeaders = _options$responseHead === void 0 ? {} : _options$responseHead,
              _options$responseBody = options.responseBody,
              responseBody = _options$responseBody === void 0 ? {
            handle: []
          } : _options$responseBody;
          var event = eventManager.createEvent();
          return eventManager.applyResponse(event, {
            renderDecisions: renderDecisions,
            responseHeaders: responseHeaders,
            responseBody: responseBody
          });
        }
      }
    }
  };
};

createDataCollector.namespace = "DataCollector";
createDataCollector.configValidators = {};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createClickHandler = function createClickHandler(_ref24) {
  var eventManager = _ref24.eventManager,
      lifecycle = _ref24.lifecycle,
      handleError = _ref24.handleError;
  return function (clickEvent) {
    // TODO: Consider safeguarding from the same object being clicked multiple times in rapid succession?
    var clickedElement = clickEvent.target;
    var event = eventManager.createEvent(); // this is to make sure a exit link personalization metric use send beacon

    event.documentMayUnload();
    return lifecycle.onClick({
      event: event,
      clickedElement: clickedElement
    }).then(function () {
      if (event.isEmpty()) {
        return Promise.resolve();
      }

      return eventManager.sendEvent(event);
    }) // eventManager.sendEvent() will return a promise resolved to an
    // object and we want to avoid returning any value to the customer
    .then(noop)["catch"](function (error) {
      handleError(error, "click collection");
    });
  };
};

var attachClickActivityCollector = function attachClickActivityCollector(_ref25) {
  var eventManager = _ref25.eventManager,
      lifecycle = _ref25.lifecycle,
      handleError = _ref25.handleError;
  var clickHandler = createClickHandler({
    eventManager: eventManager,
    lifecycle: lifecycle,
    handleError: handleError
  });
  document.addEventListener("click", clickHandler, true);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var configValidators = {
  clickCollectionEnabled: boundBoolean()["default"](true),
  downloadLinkQualifier: boundString().regexp()["default"]("\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$")
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var urlStartsWithScheme = function urlStartsWithScheme(url) {
  return url && /^[a-z0-9]+:\/\//i.test(url);
};

var getAbsoluteUrlFromAnchorElement = function getAbsoluteUrlFromAnchorElement(window, element) {
  var loc = window.location;
  var url = element.href ? element.href : "";
  var protocol = element.protocol,
      host = element.host;

  if (!urlStartsWithScheme(url)) {
    if (!protocol) {
      protocol = loc.protocol ? loc.protocol : "";
    }

    protocol = protocol ? "".concat(protocol, "//") : "";

    if (!host) {
      host = loc.host ? loc.host : "";
    }

    var path = "";

    if (url.substring(0, 1) !== "/") {
      var indx = loc.pathname.lastIndexOf("/");
      indx = indx < 0 ? 0 : indx;
      path = loc.pathname.substring(0, indx);
    }

    url = "".concat(protocol).concat(host).concat(path, "/").concat(url);
  }

  return url;
};

var isSupportedAnchorElement = function isSupportedAnchorElement(element) {
  if (element.href && (element.tagName === "A" || element.tagName === "AREA") && (!element.onclick || !element.protocol || element.protocol.toLowerCase().indexOf("javascript") < 0)) {
    return true;
  }

  return false;
};

var isDownloadLink = function isDownloadLink(downloadLinkQualifier, linkUrl, clickedObj) {
  var re = new RegExp(downloadLinkQualifier);
  return clickedObj.download ? true : re.test(linkUrl.toLowerCase());
};

var isExitLink = function isExitLink(window, linkUrl) {
  var currentHostname = window.location.hostname.toLowerCase();

  if (linkUrl.toLowerCase().indexOf(currentHostname) >= 0) {
    return false;
  }

  return true;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var determineLinkType = function determineLinkType(window, config, linkUrl, clickedObj) {
  var linkType = "other";

  if (isDownloadLink(config.downloadLinkQualifier, linkUrl, clickedObj)) {
    linkType = "download";
  } else if (isExitLink(window, linkUrl)) {
    linkType = "exit";
  }

  return linkType;
};

var findSupportedAnchorElement = function findSupportedAnchorElement(targetElement) {
  var node = targetElement;

  while (node) {
    if (isSupportedAnchorElement(node)) {
      return node;
    }

    node = node.parentNode;
  }

  return null;
};

var createLinkClick = function createLinkClick(window, config) {
  return function (event, targetElement) {
    var clickCollectionEnabled = config.clickCollectionEnabled;

    if (!clickCollectionEnabled) {
      return;
    } // Search parent elements for an anchor element
    // TODO: Replace with generic DOM tool that can fetch configured properties


    var anchorElement = findSupportedAnchorElement(targetElement);

    if (!anchorElement) {
      return;
    }

    var linkUrl = getAbsoluteUrlFromAnchorElement(window, anchorElement);

    if (!linkUrl) {
      return;
    }

    var linkType = determineLinkType(window, config, linkUrl, anchorElement); // TODO: Update link name from the clicked element context

    var linkName = "Link Click";
    event.documentMayUnload();
    event.mergeXdm({
      eventType: "web.webinteraction.linkClicks",
      web: {
        webInteraction: {
          name: linkName,
          type: linkType,
          URL: linkUrl,
          linkClicks: {
            value: 1
          }
        }
      }
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createActivityCollector = function createActivityCollector(_ref26) {
  var config = _ref26.config,
      eventManager = _ref26.eventManager,
      handleError = _ref26.handleError;
  var linkClick = createLinkClick(window, config);
  return {
    lifecycle: {
      onComponentsRegistered: function onComponentsRegistered(tools) {
        var lifecycle = tools.lifecycle;
        attachClickActivityCollector({
          config: config,
          eventManager: eventManager,
          lifecycle: lifecycle,
          handleError: handleError
        }); // TODO: createScrollActivityCollector ...
      },
      onClick:
    }
  };
};

createActivityCollector.namespace = "ActivityCollector";
createActivityCollector.configValidators = configValidators;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createResultLogMessage = function createResultLogMessage(idSync, success) {
  return "ID sync ".concat(success ? "succeeded" : "failed", ": ").concat(idSync.spec.url);
};

var injectProcessIdSyncs = function injectProcessIdSyncs(_ref28) {
  var fireReferrerHideableImage = _ref28.fireReferrerHideableImage,
      logger = _ref28.logger;
  return function (idSyncs) {
    var urlIdSyncs = idSyncs.filter(function (idSync) {
      return idSync.type === "url";
    });

    if (!urlIdSyncs.length) {
      return Promise.resolve();
    }

    return Promise.all(urlIdSyncs.map(function (idSync) {
      return fireReferrerHideableImage(idSync.spec).then(function () {
        logger.info(createResultLogMessage(idSync, true));
      })["catch"](function () {
        // We intentionally do not throw an error if id syncs fail. We
        // consider it a non-critical failure and therefore do not want it to
        // reject the promise handed back to the customer.
        logger.error(createResultLogMessage(idSync, false));
      });
    })).then(noop);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var configValidators$1 = {
  thirdPartyCookiesEnabled: boundBoolean()["default"](true),
  idMigrationEnabled: boundBoolean()["default"](true)
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */

var getIdentityOptionsValidator = function getIdentityOptionsValidator(options) {
  var getIdentityOptionsValidator = boundObjectOf({
    namespaces: boundArrayOf(boundLiteral("ECID")).nonEmpty().uniqueItems()
  }).noUnknownFields();
  getIdentityOptionsValidator(options); // Return default options for now
  // To-Do: Accept namespace from given options

  return {
    namespaces: ["ECID"]
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */


var appendIdentityToUrlOptionsValidator = boundObjectOf({
  url: boundString().required().nonEmpty()
}).required().noUnknownFields();

var createComponent = function createComponent(_ref29) {
  var addEcidQueryToPayload = _ref29.addEcidQueryToPayload,
      addQueryStringIdentityToPayload = _ref29.addQueryStringIdentityToPayload,
      ensureSingleIdentity = _ref29.ensureSingleIdentity,
      setLegacyEcid = _ref29.setLegacyEcid,
      handleResponseForIdSyncs = _ref29.handleResponseForIdSyncs,
      getEcidFromResponse = _ref29.getEcidFromResponse,
      getIdentity = _ref29.getIdentity,
      consent = _ref29.consent,
      appendIdentityToUrl = _ref29.appendIdentityToUrl,
      logger = _ref29.logger;
  var ecid;
  var edge = {};
  return {
    lifecycle: {
      onBeforeRequest: function onBeforeRequest(_ref30) {
        var request = _ref30.request,
            onResponse = _ref30.onResponse,
            onRequestFailure = _ref30.onRequestFailure;
        // Querying the ECID on every request to be able to set the legacy cookie, and make it
        // available for the `getIdentity` command.
        addEcidQueryToPayload(request.getPayload());
        addQueryStringIdentityToPayload(request.getPayload());
        return ensureSingleIdentity({
          request: request,
          onResponse: onResponse,
          onRequestFailure: onRequestFailure
        });
      },
      onResponse: function onResponse(_ref31) {
        var response = _ref31.response;

        if (!ecid) {
          ecid = getEcidFromResponse(response); // Only data collection calls will have an ECID in the response.
          // https://jira.corp.adobe.com/browse/EXEG-1234

          if (ecid) {
            setLegacyEcid(ecid);
          }
        } // For sendBeacon requests, getEdge() will return {}, so we are using assign here
        // so that sendBeacon requests don't override the edge info from before.


        edge = (0, _reactorObjectAssign["default"])(edge, response.getEdge());
        return handleResponseForIdSyncs(response);
      }
    },
    commands: {
      getIdentity: {
        optionsValidator: getIdentityOptionsValidator,
        run: function run(options) {
          return consent.awaitConsent().then(function () {
            return ecid ? undefined : getIdentity(options.namespaces);
          }).then);
        }
      },
      appendIdentityToUrl: {
        optionsValidator: appendIdentityToUrlOptionsValidator,
        run: function run(options) {
          return consent.withConsent().then(function () {
            return ecid ? undefined : getIdentity(options.namespaces);
          }).then)["catch"](function (error) {
            logger.warn("Unable to append identity to url. ".concat(error.message));
            return options;
          });
        }
      }
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Handles migration of ECID to and from Visitor.js.
 */


var createLegacyIdentity = function createLegacyIdentity(_ref32) {
  var config = _ref32.config,
      getEcidFromVisitor = _ref32.getEcidFromVisitor,
      apexDomain = _ref32.apexDomain,
      isPageSsl = _ref32.isPageSsl,
      cookieJar = _ref32.cookieJar;
  var idMigrationEnabled = config.idMigrationEnabled,
      orgId = config.orgId;
  var amcvCookieName = "AMCV_".concat(orgId);

  var getEcidFromLegacyCookies = function getEcidFromLegacyCookies() {
    var ecid = null;
    var secidCookieName = "s_ecid";
    var legacyEcidCookieValue = cookieJar.get(secidCookieName) || cookieJar.get(amcvCookieName);

    if (legacyEcidCookieValue) {
      var reg = /(^|\|)MCMID\|(\d+)($|\|)/;
      var matches = legacyEcidCookieValue.match(reg);

      if (matches) {
        // Destructuring arrays breaks in IE
        ecid = matches[2];
      }
    }

    return ecid;
  };

  return {
    getEcid: function getEcid() {
      if (idMigrationEnabled) {
        var ecid = getEcidFromLegacyCookies();

        if (ecid) {
          return Promise.resolve(ecid);
        }

        return getEcidFromVisitor();
      }

      return Promise.resolve();
    },
    setEcid: function setEcid(ecid) {
      if (idMigrationEnabled && getEcidFromLegacyCookies() !== ecid) {
        var extraOptions = isPageSsl ? {
          sameSite: "none",
          secure: true
        } : {};
        cookieJar.set(amcvCookieName, "MCMID|".concat(ecid), _objectSpread({
          domain: apexDomain,
          // Without `expires` this will be a session cookie.
          expires: 390
        }, extraOptions));
      }
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var awaitVisitorOptIn = function awaitVisitorOptIn(_ref33) {
  var logger = _ref33.logger;
  return new Promise(function (resolve, reject) {
    if (isObject(window.adobe) && isObject(window.adobe.optIn)) {
      var optInOld = window.adobe.optIn;
      logger.info("Delaying request while waiting for legacy opt-in to let Visitor retrieve ECID from server.");
      optInOld.fetchPermissions(function () {
        if (optInOld.isApproved([optInOld.Categories.ECID])) {
          logger.info("Received legacy opt-in approval to let Visitor retrieve ECID from server.");
          resolve();
        } else {
          reject(new Error("Legacy opt-in was declined."));
        }
      }, true);
    } else {
      resolve();
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getVisitor = function getVisitor(window) {
  var Visitor = window.Visitor;
  return isFunction(Visitor) && isFunction(Visitor.getInstance) && Visitor;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectGetEcidFromVisitor = function injectGetEcidFromVisitor(_ref34) {
  var logger = _ref34.logger,
      orgId = _ref34.orgId,
      awaitVisitorOptIn = _ref34.awaitVisitorOptIn;
  return function () {
    var Visitor = getVisitor(window);

    if (Visitor) {
      // Need to explicitly wait for optIn because visitor will call callback
      // with invalid values prior to optIn being approved
      return awaitVisitorOptIn({
        logger: logger
      }).then(function () {
        logger.info("Delaying request while using Visitor to retrieve ECID from server.");
        return new Promise(function (resolve) {
          var visitor = Visitor.getInstance(orgId, {});
          visitor.getMarketingCloudVisitorID, true);
        });
      })["catch"](function (error) {
        // If consent was denied, get the ECID from experience edge. OptIn and AEP Web SDK
        // consent should operate independently, but during id migration AEP Web SDK needs
        // to wait for optIn object consent resolution so that only one ECID is generated.
        if (error) {
          logger.info("".concat(error.message, ", retrieving ECID from experience edge"));
        } else {
          logger.info("An error occurred while obtaining the ECID from Visitor.");
        }
      });
    }

    return Promise.resolve();
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectHandleResponseForIdSyncs = function injectHandleResponseForIdSyncs(_ref35) {
  var processIdSyncs = _ref35.processIdSyncs;
  return;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// TO-DOCUMENT: We queue subsequent requests until we have an identity cookie.


var injectEnsureSingleIdentity = function injectEnsureSingleIdentity(_ref36) {
  var doesIdentityCookieExist = _ref36.doesIdentityCookieExist,
      setDomainForInitialIdentityPayload = _ref36.setDomainForInitialIdentityPayload,
      addLegacyEcidToPayload = _ref36.addLegacyEcidToPayload,
      awaitIdentityCookie = _ref36.awaitIdentityCookie,
      logger = _ref36.logger;
  var obtainedIdentityPromise;

  var allowRequestToGoWithoutIdentity = function allowRequestToGoWithoutIdentity(request) {
    setDomainForInitialIdentityPayload(request);
    return addLegacyEcidToPayload(request.getPayload());
  };
  /**
   * Ensures that if no identity cookie exists, we only let one request at a
   * time without an identity until its response returns. In the meantime,
   * we queue all other requests, otherwise the requests could result in
   * multiple ECIDs being minted for the user. Once we get an identity
   * cookie, we can let the queued requests be sent all at once, since they
   * will have the newly minted ECID.
   *
   * Konductor should make every effort to return an identity, but in
   * certain scenarios it may not. For example, in cases where the
   * request does not match what Konductor is expecting (ie 400s).
   * In cases where Konductor does not set an identity, there should be
   * no events recorded so we don't need to worry about multiple ECIDs
   * being minted for each user.
   *
   * The reason we allow for multiple sequential requests to be sent without
   * an identity is to prevent a single malformed request causing all other
   * requests to never send.
   */


  return function (_ref37) {
    var request = _ref37.request,
        onResponse = _ref37.onResponse,
        onRequestFailure = _ref37.onRequestFailure;

    if (doesIdentityCookieExist()) {
      request.setIsIdentityEstablished();
      return Promise.resolve();
    }

    if (obtainedIdentityPromise) {
      // We don't have an identity cookie, but at least one request has
      // been sent to get it. Konductor may set the identity cookie in the
      // response. We will hold up this request until the last request
      // requiring identity returns and awaitIdentityCookie confirms the
      // identity was set.
      logger.info("Delaying request while retrieving ECID from server.");
      var previousObtainedIdentityPromise = obtainedIdentityPromise; // This promise resolves when we have an identity cookie. Additional
      // requests are chained together so that only one is sent at a time
      // until we have the identity cookie.

      obtainedIdentityPromise = previousObtainedIdentityPromise["catch"]); // When this returned promise resolves, the request will go out.

      return previousObtainedIdentityPromise.then) // If Konductor did not set the identity cookie on the previous
      // request, then awaitIdentityCookie will reject its promise.
      // Catch the rejection here and allow this request to go out.
      ["catch"]);
    } // For Alloy+Konductor communication to be as robust as possible and
    // to ensure we don't mint new ECIDs for requests that would otherwise
    // be sent in parallel, we'll let this request go out to fetch the
    // cookie


    obtainedIdentityPromise = awaitIdentityCookie({
      onResponse: onResponse,
      onRequestFailure: onRequestFailure
    });
    return allowRequestToGoWithoutIdentity(request);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var ecidNamespace = "ECID";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var addEcidQueryToPayload = function addEcidQueryToPayload(payload) {
  payload.mergeQuery({
    identity: {
      fetch: [ecidNamespace]
    }
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var matchUserAgent = function matchUserAgent(regexs) {
  return function (userAgent) {
    var keys = Object.keys(regexs);

    for (var _i6 = 0; _i6 < keys.length; _i6 += 1) {
      var key = keys[_i6];
      var regex = regexs[key];

      if (regex.test(userAgent)) {
        return key;
      }
    }

    return UNKNOWN;
  };
};

var getBrowser = memoize(function (window) {
  var _matchUserAgent;

  return matchUserAgent((_matchUserAgent = {}, _defineProperty(_matchUserAgent, EDGE, /Edge\/([0-9\._]+)/), _defineProperty(_matchUserAgent, EDGE_CHROMIUM, /Edg\/([0-9\.]+)/), _defineProperty(_matchUserAgent, CHROME, /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/), _defineProperty(_matchUserAgent, FIREFOX, /Firefox\/([0-9\.]+)(?:\s|$)/), _defineProperty(_matchUserAgent, IE, /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/), _defineProperty(_matchUserAgent, SAFARI, /Version\/([0-9\._]+).*Safari/), _matchUserAgent))(window.navigator.userAgent);
});
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectSetDomainForInitialIdentityPayload = function injectSetDomainForInitialIdentityPayload(_ref38) {
  var thirdPartyCookiesEnabled = _ref38.thirdPartyCookiesEnabled,
      areThirdPartyCookiesSupportedByDefault = _ref38.areThirdPartyCookiesSupportedByDefault;
  return function (request) {
    if (thirdPartyCookiesEnabled && areThirdPartyCookiesSupportedByDefault(getBrowser(window))) {
      // If third-party cookies are enabled by the customer and
      // supported by the browser, we will send the request to a
      // a third-party identification domain that allows for more accurate
      // identification of the user through use of a third-party cookie.
      // If we have an identity to migrate, we still want to hit the
      // third-party identification domain because the third-party identification
      // domain will use our ECID to set the third-party cookie if the third-party
      // cookie isn't already set, which provides for better cross-domain
      // identification for future requests.
      request.setUseIdThirdPartyDomain();
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectAddLegacyEcidToPayload = function injectAddLegacyEcidToPayload(_ref39) {
  var getLegacyEcid = _ref39.getLegacyEcid,
      addEcidToPayload = _ref39.addEcidToPayload;
  return function (payload) {
    if (payload.hasIdentity(ecidNamespace)) {
      // don't get the legacy identity if we already have the query string identity or if
      // the user specified it in the identity map
      return Promise.resolve();
    }

    return getLegacyEcid().then);
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var queryStringIdentityParam = "adobe_mc"; // Example: adobe_mc=TS%3D1641432103%7CMCMID%3D77094828402023918047117570965393734545%7CMCORGID%3DFAF554945B90342F0A495E2C%40AdobeOrg

var LINK_TTL_SECONDS = 300; // 5 minute link time to live

var injectAddQueryStringIdentityToPayload = function injectAddQueryStringIdentityToPayload(_ref40) {
  var locationSearch = _ref40.locationSearch,
      dateProvider = _ref40.dateProvider,
      orgId = _ref40.orgId,
      logger = _ref40.logger;
  return function (payload) {
    if (payload.hasIdentity(ecidNamespace)) {
      // don't overwrite a user provided ecid identity
      return;
    }

    var parsedQueryString = _reactorQueryString["default"].parse(locationSearch);

    var queryStringValue = parsedQueryString[queryStringIdentityParam];

    if (queryStringValue === undefined) {
      return;
    }

    var properties = queryStringValue.split("|").reduce(function (memo, keyValue) {
      var _keyValue$split = keyValue.split("="),
          _keyValue$split2 = _slicedToArray(_keyValue$split, 2),
          key = _keyValue$split2[0],
          value = _keyValue$split2[1];

      memo[key] = value;
      return memo;
    }, {}); // We are using MCMID and MCORGID to be compatible with Visitor.

    var ts = parseInt(properties.TS, 10);
    var mcmid = properties.MCMID;
    var mcorgid = decodeURIComponent(properties.MCORGID);

    if ( // When TS is not specified or not a number, the following inequality returns false.
    // All inequalities with NaN variables are false.
    dateProvider().getTime() / 1000 <= ts + LINK_TTL_SECONDS && mcorgid === orgId && mcmid) {
      logger.info("Found valid ECID identity ".concat(mcmid, " from the adobe_mc query string parameter."));
      payload.addIdentity(ecidNamespace, {
        id: mcmid
      });
    } else {
      logger.info("Detected invalid or expired adobe_mc query string parameter.");
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var addEcidToPayload =;
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectAwaitIdentityCookie = function injectAwaitIdentityCookie(_ref41) {
  var doesIdentityCookieExist = _ref41.doesIdentityCookieExist,
      orgId = _ref41.orgId;

  /**
   * Returns a promise that will be resolved once an identity cookie exists.
   * If an identity cookie doesn't already exist, it should always exist after
   * the first response.
   */
  return function (_ref42) {
    var onResponse = _ref42.onResponse,
        onRequestFailure = _ref42.onRequestFailure;
    return new Promise(function (resolve, reject) {
      onResponse(function () {
        if (doesIdentityCookieExist()) {
          resolve();
        } else {
          // This logic assumes that the code setting the cookie is working as expected and that
          // the cookie was missing from the response.
          var noIdentityCookieError = new Error("An identity was not set properly. Please verify that the org ID ".concat(orgId, " configured in Alloy matches the org ID specified in the edge configuration.")); // Rejecting the promise will reject commands that were queued
          // by the Identity component while waiting on the response to
          // the initial request.

          reject(noIdentityCookieError); // Throwing an error will reject the event command that initiated
          // the request.

          throw noIdentityCookieError;
        }
      });
      onRequestFailure(function () {
        if (doesIdentityCookieExist()) {
          resolve();
        } else {
          // The error from the request failure will be logged separately. Rejecting this here
          // will tell ensureSingleIdentity to send the next request without identity
          reject(new Error("No identity was set on response."));
        }
      });
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getEcidFromResponse = function getEcidFromResponse(response) {
  var identityResultPayloads = response.getPayloadsByType("identity:result");
  var ecidPayload = find(identityResultPayloads,);
  return ecidPayload ? ecidPayload.id : undefined;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createGetIdentity = function createGetIdentity(_ref43) {
  var sendEdgeNetworkRequest = _ref43.sendEdgeNetworkRequest,
      createIdentityRequestPayload = _ref43.createIdentityRequestPayload,
      createIdentityRequest = _ref43.createIdentityRequest;
  return function (namespaces) {
    var payload = createIdentityRequestPayload(namespaces);
    var request = createIdentityRequest(payload);
    return sendEdgeNetworkRequest({
      request: request
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createAddIdentity = function createAddIdentity(content) {
  return function (namespaceCode, identity) {
    content.xdm = content.xdm || {};
    content.xdm.identityMap = content.xdm.identityMap || {};
    content.xdm.identityMap[namespaceCode] = content.xdm.identityMap[namespaceCode] || [];
    content.xdm.identityMap[namespaceCode].push(identity);
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createRequest = function createRequest(options) {
  var payload = options.payload,
      _getAction = options.getAction,
      _getUseSendBeacon = options.getUseSendBeacon;
  var id = v4_1();
  var shouldUseThirdPartyDomain = false;
  var isIdentityEstablished = false;
  return {
    getId: function getId() {
      return id;
    },
    getPayload: function getPayload() {
      return payload;
    },
    getAction: function getAction() {
      return _getAction({
        isIdentityEstablished: isIdentityEstablished
      });
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return _getUseSendBeacon({
        isIdentityEstablished: isIdentityEstablished
      });
    },
    getUseIdThirdPartyDomain: function getUseIdThirdPartyDomain() {
      return shouldUseThirdPartyDomain;
    },
    setUseIdThirdPartyDomain: function setUseIdThirdPartyDomain() {
      shouldUseThirdPartyDomain = true;
    },
    setIsIdentityEstablished:
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDataCollectionRequest = function createDataCollectionRequest(dataCollectionRequestPayload) {
  var getUseSendBeacon = function getUseSendBeacon(_ref44) {
    var isIdentityEstablished = _ref44.isIdentityEstablished;
    // When the document may be unloading, we still hit the interact endpoint
    // using fetch if an identity has not been established. If we were instead
    // to hit the collect endpoint using sendBeacon in this case, one of three
    // things would occur:
    //
    // 1. The document ultimately isn't unloaded and Alloy receives an empty
    // response back from the collect endpoint, resulting in an error being
    // thrown by Alloy because we weren't able to establish an identity.
    // This is bad.
    // 2. The document is unloaded, but Alloy receives the empty
    // response back from the collect endpoint before navigation is completed,
    // resulting in an error being thrown by Alloy because we weren't able to
    // establish an identity. This is bad.
    // 3. The document is unloaded and Alloy does not receive the empty response
    // back from the collect endpoint before navigation is completed. No error
    // will be thrown, but no identity was established either. This is okay,
    // though no identity was established.
    //
    // By hitting the interact endpoint using fetch, one of the three things
    // would occur:
    //
    // 1. The document ultimately isn't unloaded and Alloy receives a
    // response with an identity back from the interact endpoint. No
    // error will be thrown and an identity is established. This is good.
    // 2. The document is unloaded and Alloy receives a response with an
    // identity back from the interact endpoint before navigation is completed.
    // No error will be thrown and an identity is established. This is good.
    // 3. The document is unloaded and Alloy does not receive the empty response
    // back from the collect endpoint before navigation is completed. In this
    // case, no error is thrown, but no identity was established and it's
    // more likely that the request never makes it to the server because we're
    // using fetch instead of sendBeacon.
    //
    // The second approach seemed preferable.
    return dataCollectionRequestPayload.getDocumentMayUnload() && isIdentityEstablished;
  };

  return createRequest({
    payload: dataCollectionRequestPayload,
    getAction: function getAction(_ref45) {
      var isIdentityEstablished = _ref45.isIdentityEstablished;
      return getUseSendBeacon({
        isIdentityEstablished: isIdentityEstablished
      }) ? "collect" : "interact";
    },
    getUseSendBeacon: getUseSendBeacon
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// request payloads share.


var createRequestPayload = function createRequestPayload(options) {
  var content = options.content,
      addIdentity = options.addIdentity,
      hasIdentity = options.hasIdentity;
  return {
    mergeMeta: createMerger(content, "meta"),
    mergeState: createMerger(content, "meta.state"),
    mergeQuery: createMerger(content, "query"),
    addIdentity: addIdentity,
    hasIdentity: hasIdentity,
    toJSON: function toJSON() {
      return content;
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createHasIdentity = function createHasIdentity(content) {
  return function (namespaceCode) {
    return (content.xdm && content.xdm.identityMap && content.xdm.identityMap[namespaceCode]) !== undefined;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDataCollectionRequestPayload = function createDataCollectionRequestPayload() {
  var content = {};
  var payload = createRequestPayload({
    content: content,
    addIdentity: createAddIdentity(content),
    hasIdentity: createHasIdentity(content)
  });

  payload.addEvent =;

  payload.getDocumentMayUnload =;

  return payload;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var ASSURANCE_VALIDATION_SESSION_URL_PARAM = "adb_validation_sessionid";
var ASSURANCE_VALIDATION_NAMESPACE = "validation.";
var CLIENT_ID = "clientId";

var getOrCreateAssuranceClientId = function getOrCreateAssuranceClientId(storage) {
  var clientId = storage.persistent.getItem(CLIENT_ID);

  if (!clientId) {
    clientId = v4_1();
    storage.persistent.setItem(CLIENT_ID, clientId);
  }

  return clientId;
};

var createGetAssuranceValidationTokenParams = function createGetAssuranceValidationTokenParams(_ref46) {
  var window = _ref46.window,
      createNamespacedStorage = _ref46.createNamespacedStorage;
  var storage = createNamespacedStorage(ASSURANCE_VALIDATION_NAMESPACE);
  return function () {
    var parsedQuery = _reactorQueryString["default"].parse(window.location.search);

    var validationSessionId = parsedQuery[ASSURANCE_VALIDATION_SESSION_URL_PARAM];

    if (!validationSessionId) {
      return "";
    }

    var clientId = getOrCreateAssuranceClientId(storage);
    var validationToken = "".concat(validationSessionId, "|").concat(clientId);
    return "&".concat(_reactorQueryString["default"].stringify({
      adobeAepValidationToken: validationToken
    }));
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createIdentityRequest = function createIdentityRequest(identityRequestPayload) {
  return createRequest({
    payload: identityRequestPayload,
    getAction: function getAction() {
      return "identity/acquire";
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return false;
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createIdentityRequestPayload = function createIdentityRequestPayload(namespaces) {
  var content = {
    query: {
      identity: {
        fetch: namespaces
      }
    }
  };
  return createRequestPayload({
    content: content,
    addIdentity: createAddIdentity(content),
    hasIdentity: createHasIdentity(content)
  });
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var URL_REGEX = /^([^?#]*)(\??[^#]*)(#?.*)$/;

var getSeparator = function getSeparator(queryString) {
  if (queryString === "") {
    return "?";
  }

  if (queryString === "?") {
    return "";
  }

  return "&";
};

var injectAppendIdentityToUrl = function injectAppendIdentityToUrl(_ref47) {
  var dateProvider = _ref47.dateProvider,
      orgId = _ref47.orgId;
  return function (ecid, url) {
    var ts = Math.round(dateProvider().getTime() / 1000);
    var adobemc = encodeURIComponent("TS=".concat(ts, "|MCMID=").concat(ecid, "|MCORGID=").concat(encodeURIComponent(orgId)));

    var _url$match = url.match(URL_REGEX),
        _url$match2 = _slicedToArray(_url$match, 4),
        location = _url$match2[1],
        queryString = _url$match2[2],
        fragment = _url$match2[3];

    var separator = getSeparator(queryString);
    return "".concat(location).concat(queryString).concat(separator, "adobe_mc=").concat(adobemc).concat(fragment);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createIdentity = function createIdentity(_ref48) {
  var config = _ref48.config,
      logger = _ref48.logger,
      consent = _ref48.consent,
      fireReferrerHideableImage = _ref48.fireReferrerHideableImage,
      sendEdgeNetworkRequest = _ref48.sendEdgeNetworkRequest,
      apexDomain = _ref48.apexDomain;
  var orgId = config.orgId,
      thirdPartyCookiesEnabled = config.thirdPartyCookiesEnabled;
  var getEcidFromVisitor = injectGetEcidFromVisitor({
    logger: logger,
    orgId: orgId,
    awaitVisitorOptIn: awaitVisitorOptIn
  });
  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: _reactorCookie["default"]
  });
  var legacyIdentity = createLegacyIdentity({
    config: config,
    getEcidFromVisitor: getEcidFromVisitor,
    apexDomain: apexDomain,
    cookieJar: loggingCookieJar,
    isPageSsl: window.location.protocol === "https:"
  });
  var doesIdentityCookieExist = injectDoesIdentityCookieExist({
    orgId: orgId
  });
  var getIdentity = createGetIdentity({
    sendEdgeNetworkRequest: sendEdgeNetworkRequest,
    createIdentityRequestPayload: createIdentityRequestPayload,
    createIdentityRequest: createIdentityRequest
  });
  var setDomainForInitialIdentityPayload = injectSetDomainForInitialIdentityPayload({
    thirdPartyCookiesEnabled: thirdPartyCookiesEnabled,
    areThirdPartyCookiesSupportedByDefault: areThirdPartyCookiesSupportedByDefault
  });
  var addLegacyEcidToPayload = injectAddLegacyEcidToPayload({
    getLegacyEcid: legacyIdentity.getEcid,
    addEcidToPayload: addEcidToPayload
  });
  var addQueryStringIdentityToPayload = injectAddQueryStringIdentityToPayload({
    locationSearch: window.document.location.search,
    dateProvider: function dateProvider() {
      return new Date();
    },
    orgId: orgId,
    logger: logger
  });
  var awaitIdentityCookie = injectAwaitIdentityCookie({
    doesIdentityCookieExist: doesIdentityCookieExist,
    orgId: orgId
  });
  var ensureSingleIdentity = injectEnsureSingleIdentity({
    doesIdentityCookieExist: doesIdentityCookieExist,
    setDomainForInitialIdentityPayload: setDomainForInitialIdentityPayload,
    addLegacyEcidToPayload: addLegacyEcidToPayload,
    awaitIdentityCookie: awaitIdentityCookie,
    logger: logger
  });
  var processIdSyncs = injectProcessIdSyncs({
    fireReferrerHideableImage: fireReferrerHideableImage,
    logger: logger
  });
  var handleResponseForIdSyncs = injectHandleResponseForIdSyncs({
    processIdSyncs: processIdSyncs
  });
  var appendIdentityToUrl = injectAppendIdentityToUrl({
    dateProvider:,
    orgId: orgId
  });
  return createComponent({
    addEcidQueryToPayload: addEcidQueryToPayload,
    addQueryStringIdentityToPayload: addQueryStringIdentityToPayload,
    ensureSingleIdentity: ensureSingleIdentity,
    setLegacyEcid: legacyIdentity.setEcid,
    handleResponseForIdSyncs: handleResponseForIdSyncs,
    getEcidFromResponse: getEcidFromResponse,
    getIdentity: getIdentity,
    consent: consent,
    appendIdentityToUrl: appendIdentityToUrl,
    logger: logger
  });
};

createIdentity.namespace = "Identity";
createIdentity.configValidators = configValidators$1;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createResultLogMessage$1 = function createResultLogMessage$1(urlDestination, success) {
  return "URL destination ".concat(success ? "succeeded" : "failed", ": ").concat(urlDestination.spec.url);
};

var injectProcessDestinations = function injectProcessDestinations(_ref49) {
  var fireReferrerHideableImage = _ref49.fireReferrerHideableImage,
      logger = _ref49.logger,
      cookieJar = _ref49.cookieJar,
      isPageSsl = _ref49.isPageSsl;
  var extraCookieOptions = isPageSsl ? {
    sameSite: "none",
    secure: true
  } : {};

  var processCookies = function processCookies(destinations) {
    var cookieDestinations = destinations.filter(function (dest) {
      return dest.type === "cookie";
    });
    cookieDestinations.forEach);
  };

  var processUrls = function processUrls(destinations) {
    var urlDestinations = destinations.filter);
    return Promise.all(urlDestinations.map(function (urlDestination) {
      return fireReferrerHideableImage(urlDestination.spec).then(function () {
        logger.info(createResultLogMessage$1(urlDestination, true));
      })["catch"]);
    })).then(noop);
  };

  return;
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectProcessResponse = function injectProcessResponse(_ref50) {
  var processDestinations = _ref50.processDestinations;

  var processPushDestinations = function processPushDestinations(_ref51) {
    var response = _ref51.response;
    var destinations = response.getPayloadsByType("activation:push");
    return processDestinations(destinations);
  };

  var retrievePullDestinations = function retrievePullDestinations(_ref52) {
    var response = _ref52.response;
    return {
      destinations: response.getPayloadsByType("activation:pull")
    };
  };

  return;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createAudiences = function createAudiences(_ref54) {
  var logger = _ref54.logger,
      fireReferrerHideableImage = _ref54.fireReferrerHideableImage;
  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: _reactorCookie["default"]
  });
  var processDestinations = injectProcessDestinations({
    fireReferrerHideableImage: fireReferrerHideableImage,
    logger: logger,
    cookieJar: loggingCookieJar,
    isPageSsl: window.location.protocol === "https:"
  });
  var processResponse = injectProcessResponse({
    processDestinations: processDestinations
  });
  return {
    lifecycle: {
      onResponse: processResponse
    },
    commands: {}
  };
};

createAudiences.namespace = "Audiences";
createAudiences.configValidators = {};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var WEB = "web";
var WEBAPP = "webapp";
var SURFACE_TYPE_DELIMITER = "://";
var FRAGMENT_DELIMITER = "#";
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var SURFACE_REGEX = /^(\w+):\/\/([^/#]+)(\/[^#]*)?(#.*)?$/;
var AUTHORITY_REGEX = /^(?:.*@)?(?:[a-z\d\u00a1-\uffff.-]+|\[[a-f\d:]+])(?::\d+)?$/;
var PATH_REGEX = /^\/(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})*$/;
var FRAGMENT_REGEX = /^#(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})+$/;

var normalizePath = function normalizePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var end = path.length;

  while (end > 0 && "/".indexOf(path.charAt(end - 1)) !== -1) {
    end -= 1;
  }

  return path.substring(0, end) || "/";
};

var getSurfaceType = function getSurfaceType(surfaceTypeMatch) {
  return isNonEmptyString(surfaceTypeMatch) ? surfaceTypeMatch.toLowerCase() : "";
};

var getAuthority = function getAuthority(authorityMatch) {
  return isNonEmptyString(authorityMatch) ? authorityMatch.toLowerCase() : "";
};

var getPath =;

var parseSurface = function parseSurface(surfaceString) {
  var matched = surfaceString.match(SURFACE_REGEX);
  return matched ? {
    surfaceType: getSurfaceType(matched[1]),
    authority: getAuthority(matched[2]),
    path: getPath(matched[3]),
    fragment: matched[4]
  } : null;
};

var stringifySurface = function stringifySurface(surface) {
  return "".concat(surface.surfaceType).concat(SURFACE_TYPE_DELIMITER).concat(surface.authority).concat(surface.path || "").concat(surface.fragment || "");
};

var buildPageSurface = function buildPageSurface(getPageLocation) {
  var location = getPageLocation();
  var host = location.host.toLowerCase();
  var path = location.pathname;
  return WEB + SURFACE_TYPE_DELIMITER + host + normalizePath(path);
};

var expandFragmentSurface = function expandFragmentSurface(surface, getPageLocation) {
  return startsWith(surface, FRAGMENT_DELIMITER) ? buildPageSurface(getPageLocation) + surface : surface;
};

var validateSurface = function validateSurface(surface, getPageLocation, logger) {
  var invalidateSurface =;

  if (!isNonEmptyString(surface)) {
    return invalidateSurface("Invalid surface: ".concat(surface));
  }

  var expanded = expandFragmentSurface(surface, getPageLocation);
  var parsed = parseSurface(expanded);

  if (parsed === null) {
    return invalidateSurface("Invalid surface: ".concat(surface));
  }

  if (!includes([WEB, WEBAPP], parsed.surfaceType)) {
    return invalidateSurface("Unsupported surface type ".concat(parsed.surfaceType, " in surface: ").concat(surface));
  }

  if (!parsed.authority || !AUTHORITY_REGEX.test(parsed.authority)) {
    return invalidateSurface("Invalid authority ".concat(parsed.authority, " in surface: ").concat(surface));
  }

  if (parsed.path && !PATH_REGEX.test(parsed.path)) {
    return invalidateSurface("Invalid path ".concat(parsed.path, " in surface: ").concat(surface));
  }

  if (parsed.fragment && !FRAGMENT_REGEX.test(parsed.fragment)) {
    return invalidateSurface("Invalid fragment ".concat(parsed.fragment, " in surface: ").concat(surface));
  }

  return parsed;
};

var isPageWideSurface = function isPageWideSurface(scope) {
  return !!scope && scope.indexOf(WEB + SURFACE_TYPE_DELIMITER) === 0 && scope.indexOf(FRAGMENT_DELIMITER) === -1;
};

var normalizeSurfaces = function normalizeSurfaces() {
  var surfaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var getPageLocation = arguments.length > 1 ? arguments[1] : undefined;
  var logger = arguments.length > 2 ? arguments[2] : undefined;
  return surfaces.map(function (surface) {
    return validateSurface(surface, getPageLocation, logger);
  }).filter).map(stringifySurface);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var PAGE_WIDE_SCOPE = "__view__";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var DEFAULT_CONTENT_ITEM = "https://ns.adobe.com/personalization/default-content-item";
var DOM_ACTION = "https://ns.adobe.com/personalization/dom-action";
var HTML_CONTENT_ITEM = "https://ns.adobe.com/personalization/html-content-item";
var JSON_CONTENT_ITEM = "https://ns.adobe.com/personalization/json-content-item";
var REDIRECT_ITEM = "https://ns.adobe.com/personalization/redirect-item";
var MEASUREMENT_SCHEMA = "https://ns.adobe.com/personalization/measurement";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var addPageWideScope = function addPageWideScope(scopes) {
  if (!includes(scopes, PAGE_WIDE_SCOPE)) {
    scopes.push(PAGE_WIDE_SCOPE);
  }
};

var addPageSurface = function addPageSurface(surfaces, getPageLocation) {
  var pageSurface = buildPageSurface(getPageLocation);

  if (!includes(surfaces, pageSurface)) {
    surfaces.push(pageSurface);
  }
};

var dedupe = function dedupe(array) {
  return array.filter);
};

var createPersonalizationDetails = function createPersonalizationDetails(_ref55) {
  var getPageLocation = _ref55.getPageLocation,
      renderDecisions = _ref55.renderDecisions,
      decisionScopes = _ref55.decisionScopes,
      personalization = _ref55.personalization,
      event = _ref55.event,
      viewCache = _ref55.viewCache,
      logger = _ref55.logger;
  var viewName = event.getViewName();
  return {
    isRenderDecisions: function isRenderDecisions() {
      return renderDecisions;
    },
    getViewName: function getViewName() {
      return viewName;
    },
    hasScopes: function hasScopes() {
      return decisionScopes.length > 0 || isNonEmptyArray(personalization.decisionScopes);
    },
    hasSurfaces: function hasSurfaces() {
      return isNonEmptyArray(personalization.surfaces);
    },
    hasViewName: function hasViewName() {
      return isNonEmptyString(viewName);
    },
    createQueryDetails: function createQueryDetails() {
      var scopes = _toConsumableArray(decisionScopes);

      if (isNonEmptyArray(personalization.decisionScopes)) {
        scopes.push.apply(scopes, _toConsumableArray(personalization.decisionScopes));
      }

      var eventSurfaces = normalizeSurfaces(personalization.surfaces, getPageLocation, logger);

      if (!this.isCacheInitialized()) {
        addPageWideScope(scopes);
        addPageSurface(eventSurfaces, getPageLocation);
      }

      var schemas = [DEFAULT_CONTENT_ITEM, HTML_CONTENT_ITEM, JSON_CONTENT_ITEM, REDIRECT_ITEM];

      if (includes(scopes, PAGE_WIDE_SCOPE)) {
        schemas.push(DOM_ACTION);
      }

      return {
        schemas: schemas,
        decisionScopes: dedupe(scopes),
        surfaces: dedupe(eventSurfaces)
      };
    },
    isCacheInitialized:,
    shouldFetchData: function shouldFetchData() {
      return this.hasScopes() || this.hasSurfaces() || !this.isCacheInitialized();
    },
    shouldUseCachedData:
  };
};

var AUTHORING_ENABLED = "Rendering is disabled for authoring mode.";
var REDIRECT_EXECUTION_ERROR = "An error occurred while executing the redirect offer.";
var EMPTY_PROPOSITIONS = {
  propositions: []
};

var validateApplyPropositionsOptions = function validateApplyPropositionsOptions(_ref56) {
  var logger = _ref56.logger,
      options = _ref56.options;
  var applyPropositionsOptionsValidator = boundObjectOf({
    propositions: boundArrayOf(boundObjectOf(boundAnything())).nonEmpty(),
    metadata: boundObjectOf(boundAnything())
  }).required();

  try {
    return applyPropositionsOptionsValidator(options);
  } catch (e) {
    logger.warn("Invalid options for applyPropositions. No propositions will be applied.", e);
    return EMPTY_PROPOSITIONS;
  }
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createComponent$1 = function createComponent$1(_ref57) {
  var getPageLocation = _ref57.getPageLocation,
      logger = _ref57.logger,
      fetchDataHandler = _ref57.fetchDataHandler,
      viewChangeHandler = _ref57.viewChangeHandler,
      onClickHandler = _ref57.onClickHandler,
      isAuthoringModeEnabled = _ref57.isAuthoringModeEnabled,
      mergeQuery = _ref57.mergeQuery,
      viewCache = _ref57.viewCache,
      showContainers = _ref57.showContainers,
      applyPropositions = _ref57.applyPropositions,
      setTargetMigration = _ref57.setTargetMigration;
  return {
    lifecycle: {
      onBeforeRequest: function onBeforeRequest(_ref58) {
        var request = _ref58.request;
        setTargetMigration(request);
        return Promise.resolve();
      },
      onBeforeEvent: function onBeforeEvent(_ref59) {
        var event = _ref59.event,
            renderDecisions = _ref59.renderDecisions,
            _ref59$decisionScopes = _ref59.decisionScopes,
            decisionScopes = _ref59$decisionScopes === void 0 ? [] : _ref59$decisionScopes,
            _ref59$personalizatio = _ref59.personalization,
            personalization = _ref59$personalizatio === void 0 ? {} : _ref59$personalizatio,
            _ref59$onResponse = _ref59.onResponse,
            onResponse = _ref59$onResponse === void 0 ? noop : _ref59$onResponse,
            _ref59$onRequestFailu = _ref59.onRequestFailure,
            onRequestFailure = _ref59$onRequestFailu === void 0 ? noop : _ref59$onRequestFailu;
        // Include propositions on all responses, overridden with data as needed
        onResponse);
        onRequestFailure);

        if (isAuthoringModeEnabled()) {
          logger.warn(AUTHORING_ENABLED); // If we are in authoring mode we disable personalization

          mergeQuery(event, {
            enabled: false
          });
          return;
        }

        var personalizationDetails = createPersonalizationDetails({
          getPageLocation: getPageLocation,
          renderDecisions: renderDecisions,
          decisionScopes: decisionScopes,
          personalization: personalization,
          event: event,
          viewCache: viewCache,
          logger: logger
        });

        if (personalizationDetails.shouldFetchData()) {
          var decisionsDeferred = defer();
          viewCache.storeViews(decisionsDeferred.promise);
          onRequestFailure(function () {
            return decisionsDeferred.reject();
          });
          fetchDataHandler({
            decisionsDeferred: decisionsDeferred,
            personalizationDetails: personalizationDetails,
            event: event,
            onResponse: onResponse
          });
          return;
        }

        if (personalizationDetails.shouldUseCachedData()) {
          // eslint-disable-next-line consistent-return
          return viewChangeHandler({
            personalizationDetails: personalizationDetails,
            event: event,
            onResponse: onResponse,
            onRequestFailure: onRequestFailure
          });
        }
      },
      onClick: function onClick(_ref60) {
        var event = _ref60.event,
            clickedElement = _ref60.clickedElement;
        onClickHandler({
          event: event,
          clickedElement: clickedElement
        });
      }
    },
    commands: {
      applyPropositions: {
        optionsValidator:,
        run: applyPropositions
      }
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createFragment = function createFragment(content) {
  return createNode(DIV, {}, {
    innerHTML: content
  });
};

var css_escape = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    {
      // For Node.js.
      module.exports = factory(root);
    }
  })(typeof commonjsGlobal != 'undefined' ? commonjsGlobal : commonjsGlobal, function (root) {
    if (root.CSS && root.CSS.escape) {
      return root.CSS.escape;
    } // https://drafts.csswg.org/cssom/#serialize-an-identifier


    var cssEscape = function cssEscape(value) {
      if (arguments.length == 0) {
        throw new TypeError('`CSS.escape` requires an argument.');
      }

      var string = String(value);
      var length = string.length;
      var index = -1;
      var codeUnit;
      var result = '';
      var firstCodeUnit = string.charCodeAt(0);

      while (++index < length) {
        codeUnit = string.charCodeAt(index); // Note: there’s no need to special-case astral symbols, surrogate
        // pairs, or lone surrogates.
        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
        // (U+FFFD).

        if (codeUnit == 0x0000) {
          result += "\uFFFD";
          continue;
        }

        if ( // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
        // U+007F, […]
        codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F || // If the character is the first character and is in the range [0-9]
        // (U+0030 to U+0039), […]
        index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 || // If the character is the second character and is in the range [0-9]
        // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
        index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D) {
          // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
          result += '\\' + codeUnit.toString(16) + ' ';
          continue;
        }

        if ( // If the character is the first character and is a `-` (U+002D), and
        // there is no second character, […]
        index == 0 && length == 1 && codeUnit == 0x002D) {
          result += '\\' + string.charAt(index);
          continue;
        } // If the character is not handled by one of the above rules and is
        // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
        // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
        // U+005A), or [a-z] (U+0061 to U+007A), […]


        if (codeUnit >= 0x0080 || codeUnit == 0x002D || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
          // the character itself
          result += string.charAt(index);
          continue;
        } // Otherwise, the escaped character.
        // https://drafts.csswg.org/cssom/#escape-a-character


        result += '\\' + string.charAt(index);
      }

      return result;
    };

    if (!root.CSS) {
      root.CSS = {};
    }

    root.CSS.escape = cssEscape;
    return cssEscape;
  });
});
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var EQ_START = ":eq(";
var EQ_PATTERN = /:eq\((\d+)\)/g;

var isNotT) === -1;
};

var styString);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var CSS_IDENTIFIER_PATTERN = /(#|\.)(-?\w+)/g; // Here we use CSS.escape() to make sure we get
// correct values for ID and CSS class
// Please check:  https://www.w3.org/TR/css-syntax-3/#escaping
// CSS.escape() polyfill can be found here: https://github.com/mathiasbynens/CSS.escape

var replaceIdentifier = function replaceIdentifier(_, $1, $2) {
  return "".concat($1).concat(css_escape($2));
};

var escapeIdentifiersentifier);
};

var parseSelector = function parseSelector(rawSelector) {
  var result = [];
  var selector = escapeIdentifiersInSelector(rawSelector.trim());
  var parts = splitWithEq(selector);
  var length = parts.length;
  var i = 0;

  while (i < length) {
    var sel = parts[i];
    var eq = parts[i + 1];

    if (eq) {
      result.push({
        sel: sel,
        eq: Number(eq)
      });
    } else {
      result.push({
        sel: sel
      });
    }

    i += 2;
  }

  return result;
};
/**
 * Returns an array of matched DOM nodes.
 * @param {String} selector that contains Sizzle "eq(...)" pseudo selector
 * @returns {Array} an array of DOM nodes
 */


var selectNodesWithEq = function selectNodesWithEq(selector) {
  var doc = document;

  if (isNotEqSelector(selector)) {
    return selectNodes(selector, doc);
  }

  var parts = parseSelector(selector);
  var length = parts.length;
  var result = [];
  var context = doc;
  var i = 0;

  while (i < length) {
    var _parts$i = parts[i],
        sel = _parts$i.sel,
        eq = _parts$i.eq;
    var nodes = selectNodes(sel, context);
    var nodesCount = nodes.length;

    if (nodesCount === 0) {
      break;
    }

    if (eq != null && eq > nodesCount - 1) {
      break;
    }

    if (i < length - 1) {
      if (eq == null) {
        var _nodes = _slicedToArray(nodes, 1);

        context = _nodes[0];
      } else {
        context = nodes[eq];
      }
    }

    if (i === length - 1) {
      if (eq == null) {
        result = nodes;
      } else {
        result = [nodes[eq]];
      }
    }

    i += 1;
  }

  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns an array of matched DOM nodes.
 * @param {String} id
 * @param {Node} [context=document] defaults to document
 * @returns {HTMLElement} an element of null
 */


var getElementById = function getElementById(id) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return context.getElementById(id);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var see, value);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var geute(name);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var removute(name);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setStyle = function setStyle(element, name, value, priority) {
  var css;

  if (priority) {
    css = "".concat(name, ":").concat(value, " !").concat(priority, ";");
  } else {
    css = "".concat(name, ":").concat(value, ";");
  }

  element.style.cssText += ";".concat(css);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getParent = function getParent(element) {
  return element.parentNode;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getNextSibling = function getNextSibling(element) {
  return element.nextElementSibling;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertAfter = function insertAfter(container, element) {
  if (!container) {
    return;
  }

  var parent = getParent(container);

  if (parent) {
    parent.insertBefore(element, getNextSibling(container));
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertBefore = function insertBefore(container, element) {
  if (!container) {
    return;
  }

  var parent = getParent(container);

  if (parent) {
    parent.insertBefore(element, container);
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getChildren = function getChildren(element) {
  var children = element.children;

  if (children) {
    return toArray(children);
  }

  return [];
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getChildNodes = function getChildNodes(element) {
  var childNodes = element.childNodes;

  if (childNodes) {
    return toArray(childNodes);
  }

  return [];
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getmentChild;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var nonce;
/**
 * Returns the nonce if available.
 * @param {Node} [context=document] defaults to document
 * @returns {(String|undefined)} the nonce or undefined if not available
 */

var getNonce = function getNonce() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  if (nonce === undefined) {
    var n = context.querySelector("[nonce]"); // NOTE: We're keeping n.getAttribute("nonce") until it is safe to remove:
    //   ref: https://github.com/whatwg/html/issues/2369#issuecomment-280853946

    nonce = n && (n.nonce || n.getAttribute("nonce"));
  }

  return nonce;
}; // This function is only used for testing and removed when library is built (tree-shaking)

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var PREHIDING_ID = "alloy-prehiding";
var HIDING_STYLE_DEFINITION = "{ visibility: hidden }"; // Using global is OK since we have a single DOM
// so storing nodes even for multiple Alloy instances is fine

var styleNodes = {};

var hideElements = function hideElements(prehidingSelector) {
  // if we have different events with the same
  // prehiding selector we don't want to recreate
  // the style tag
  if (styleNodes[prehidingSelector]) {
    return;
  }

  var nonce = getNonce();

  var attrs = _objectSpread({}, nonce && {
    nonce: nonce
  });

  var props = {
    textContent: "".concat(prehidingSelector, " ").concat(HIDING_STYLE_DEFINITION)
  };
  var node = createNode(STYLE, attrs, props);
  appendNode(document.head, node);
  styleNodes[prehidingSelector] = node;
};

var showElements = function showElements(prehidingSelector) {
  var node = styleNodes[prehidingSelector];

  if (node) {
    removeNode(node);
    delete styleNodes[prehidingSelector];
  }
};

var hideContainers = function hideContainers(prehidingStyle) {
  if (!prehidingStyle) {
    return;
  } // If containers prehiding style has been added
  // by customer's prehiding snippet we don't
  // want to add the same node


  var node = getElementById(PREHIDING_ID);

  if (node) {
    return;
  }

  var nonce = getNonce();

  var attrs = _objectSpread({
    id: PREHIDING_ID
  }, nonce && {
    nonce: nonce
  });

  var props = {
    textContent: prehidingStyle
  };
  var styleNode = createNode(STYLE, attrs, props);
  appendNode(document.head, styleNode);
};

var showContainers = function showContainers() {
  // If containers prehiding style exists
  // we will remove it
  var node = getElementById(PREHIDING_ID);

  if (!node) {
    return;
  }

  removeNode(node);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


vnt = text;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SRC = "src";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

ve === IMG;
};

var url
  });
};

var loadImages = function loadImages(fragment) {
  var images = selectNodes(IMG, fragment);
  images.forEach(function (image) {
    var url = getAttribute(image, SRC);

    if (url) {
      loadImage(url);
    }
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*= tagName;
};

var isInlineStyleElement = function isInlineStyleElement(element) {
  return is(element, STYLE) && !getAttribute(element, SRC);
};

var addNonceToInlineStyleElements = function addNonceToInlineStyleElements(fragment) {
  var styleNodes = selectNodes(STYLE, fragment);
  var length = styleNodes.length;
  var nonce = getNonce();

  if (!nonce) {
    return;
  }
  /* eslint-disable no-continue */


  for (var _i7 = 0; _i7 < length; _i7 += 1) {
    var element = styleNodes[_i7];

    if (!isInlineStyleElement(element)) {
      continue;
    }

    element.nonce = nonce;
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var is$1 = function is$1(element, tagName) {
  return !!element && element.tagName === tagName;
};

var isInlineScript = function isInlineScript(element) {
  return is$1(element, SCRIPT) && !getAttribute(element, SRC);
};

var isReent, SRC);
};

var getInlineScripts = function getInlineScripts(fragment) {
  var scripts = selectNodes(SCRIPT, fragment);
  var result = [];
  var length = scripts.length;
  var nonce = getNonce();

  var attributes = _objectSpread({}, nonce && {
    nonce: nonce
  });
  /* eslint-disable no-continue */


  for (var _i8 = 0; _i8 < length; _i8 += 1) {
    var element = scripts[_i8];

    if (!isInlineScript(element)) {
      continue;
    }

    var textContent = element.textContent;

    if (!textContent) {
      continue;
    }

    result.push(createNode(SCRIPT, attributes, {
      textContent: textContent
    }));
  }
  /* eslint-enable no-continue */


  return result;
};

var getRemoteScriptsUrls = function getRemoteScriptsUrls(fragment) {
  var scripts = selectNodes(SCRIPT, fragment);
  var result = [];
  var length = scripts.length;
  /* eslint-disable no-continue */

  for (var _i9 = 0; _i9 < length; _i9 += 1) {
    var element = scripts[_i9];

    if (!isRemoteScript(element)) {
      continue;
    }

    var url = getAttribute(element, SRC);

    if (!url) {
      continue;
    }

    result.push(url);
  }
  /* eslint-enable no-continue */


  return result;
};

var executeInlineScripts = function executeInlineScripts(parent, scripts) {
  scrscript);
  });
};

var executeRemoteScripts = function executeRemoteScripts(urls) {
  return Promise.all(urls.map(_reactorLoadScript["default"]));
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var appendHtml = function appendHtml(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    appendNode(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

moveNode);
};

ver, html);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var prependHtml = function prependHtml(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  var length = elements.length;
  var i = length - 1; // We have to proactively load images to avoid flicker

  loadImages(fragment); // We are inserting elements in reverse order

  while (i >= 0) {
    var element = elements[i];
    var firstChild = getFirstChild(container);

    if (firstChild) {
      insertBefore(firstChild, element);
    } else {
      appendNode(container, element);
    }

    i -= 1;
  }

  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertHtmlBefore = function insertHtmlBefore(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    insertBefore(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var replaceHtml = function replaceHtml(container, html) {
  insertHtmlBefore(container, html);
  removeNode(container);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertHtmlAfter = function insertHtmlAfter(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    insertAfter(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setStyles = function setStyles(container, styles) {
  var priority = styles.priority,
      style = _objectWithoutProperties(styles, ["priority"]);

  Object.keys(stiority);
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setAttributes = function setAttributes(container, attributes) {
  Object.keys(attribus[key]);
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var swapImage = function swapImage(container, url) {
  if (!isImage(container)) {
    return;
  } // Start downloading the image


  loadImage(url); // Remove "src" so there is no flicker

  removeAttribute(container, SRC); // Replace the image "src"

  setAttribute(container, SRC, url);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var rearrangeChildren = function rearrangeChildren(container, _ref61) {
  var from = _ref61.from,
      to = _ref61.to;
  var children = getChildren(container);
  var elementFrom = children[from];
  var elementTo = children[to];

  if (!elementFrom || !elementTo) {
    // TODO: We will need to add logging
    // to ease troubleshooting
    return;
  }

  if (from < to) {
    insertAfter(elementTo, elementFrom);
  } else {
    insertBefore(elementTo, elementFrom);
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var _click = function click(settings, store) {
  var selector = settings.selector,
      meta = settings.meta;
  store({
    selector: selector,
    meta: meta
  });
  return Promise.resolve();
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var renderContent = function renderContent(elements, content, renderFunc) {
  var executions = elements.map(function (element) {
    return renderFunc(element, content);
  });
  return Promise.all(executions);
};

var createAction = function createAction(renderFunc) {
  return function (settings) {
    var selector = settings.selector,
        prehidingSelector = settings.prehidingSelector,
        content = settings.content,
        meta = settings.meta;
    hideElements(prehidingSelector);
    return awaitSelector(selector, selectNodesFunc);
    }).then(function () {
      // if everything is OK, show elements
      showElements(prehidingSelector);
      return {
        meta: meta
      };
    }, function (error) {
      // in case of awaiting timing or error, we need to remove the style tag
      // hence showing the pre-hidden elements
      showElements(prehidingSelector);
      return {
        meta: meta,
        error: error
      };
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var initDomActionsModules = function initDomActionsModules(store) {
  return {
    setHtml: createAction(setHtml),
    customCode: createAction(prependHtml),
    setText: createAction(setText),
    setAttribute: createAction(setAttributes),
    setImageSource: createAction(swapImage),
    setStyle: createAction(setStyles),
    move: createAction(setStyles),
    resize: createAction(setStyles),
    rearrange: createAction(rearrangeChildren),
    remove: createAction(removeNode),
    insertAfter: createAction(insertHtmlAfter),
    insertBefore: createAction(insertHtmlBefore),
    replaceHtml: createAction(replaceHtml),
    prependHtml: createAction(prependHtml),
    appendHtml: createAction(appendHtml)tore);
    },
    def   });
    }
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether a string value is blank. Also returns true if the value is not a string.
 * @param {*} value
 * @returns {boolean}
 */


var isBlankString = function isBlankString(value) {
  return isString(value) ? !value.trim() : true;
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var APPEND_HTML = "appendHtml";
var HEAD_TAGS_SELECTOR = "SCRIPT,LINK,STYLE";

var filterHeadContent = function filterHeadContent(content) {
  var container = createFragment(content);
  var headNodes = selectNodes(HEAD_TAGS_SELECTOR, container);
  return hterHTML;
  }).join("");
};

var remapHeadOffers = function remapHeadOffers(action) {
  var result = (0, _reactorObjectAssign["default"])({}, action);
  var content = result.content,
      selector = result.selector;

  if (isBlankString(content)) {
    return result;
  }

  var container = selectNodesWithEq(selector);

  if (!is$1(container[0], HEAD)) {
    return result;
  }

  result.type = APPEND_HTML;
  result.content = filterHeadContent(content);
  return result;
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var ACTION_CUSTOM_CODE = "customCode";
var TARGET_BODY_SELECTOR = "BODY > *:eq(0)";

var remapCustomCodeOffers = function remapCustomCodeOffers(action) {
  var selector = action.selector,
      type = action.type;

  if (type !== ACTION_CUSTOM_CODE) {
    return action;
  }

  if (selector !== TARGET_BODY_SELECTOR) {
    return action;
  }

  return (0, _reactorObjectAssign["default"])({}, action, {
    selector: "BODY"
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var logActionError = function logActionError(logger, action, error) {
  if (logger.enabled) {
    var details = JSON.stringify(action);
    var message = error.message,
        stack = error.stack;
    var errorMessage = "Failed to execute action ".concat(details, ". ").concat(message, " ").concat(stack ? "\n ".concat(stack) : "");
    logger.error(errorMessage);
  }
};

var logActionCompleted = function logActionCompleted(logger, action) {
  if (logger.enabled) {
    var details = JSON.stringify(action);
    logger.info("Action ".concat(details, " executed."));
  }
};

var executeAction = function executeAction(logger, modules, type, args) {
  var execute = modules[type];

  if (!execute) {
    var error = new Error("DOM action \"".concat(type, "\" not found"));
    logActionError(logger, args[0], error);
    throw error;
  }

  return execute.apply(void 0, _toConsumableArray(args));
};

var PREPROCESSORS = [remapHeadOffers, remapCustomCodeOffers];

var preprocess = function preprocess(action) {
  return PREPROCESSORS.reduce(function (processed, fn) {
    return (0, _reactorObjectAssign["default"])(processed, fn(processed));
  }, action);
};

var executeActions = function executeActions(actions, modules, logger) {
  var actionPromises = actions.map(function (action) {
    var processedAction = preprocess(action);
    var type = processedAction.type;
    return executeAction(logger, modules, type, [processedAesult;
    })["catch"](function (error) {
      logActionError(logger, processedAction, error);
      throw error;
    });
  });
  return Promise.all(actionPromises);
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DISPLAY = "decisioning.propositionDisplay";
var INTERACT = "decisioning.propositionInteract";
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var PropositionEventType = {
  DISPLAY: "display",
  INTERACT: "interact"
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createCollect = function createCollect(_ref62) {
  var eventManager = _ref62.eventManager,
      mergeDecisionsMeta = _ref62.mergeDecisionsMeta;
  // Called when a decision is auto-rendered for the __view__ scope or a SPA view(display and empty display notification)
  return function (_ref63) {
    var _ref63$decisionsMeta = _ref63.decisionsMeta,
        decisionsMeta = _ref63$decisionsMeta === void 0 ? [] : _ref63$decisionsMeta,
        _ref63$documentMayUnl = _ref63.documentMayUnload,
        documentMayUnload = _ref63$documentMayUnl === void 0 ? false : _ref63$documentMayUnl,
        viewName = _ref63.viewName;
    var event = eventManager.createEvent();
    var data = {
      eventType: DISPLAY
    };

    if (viewName) {
      data.web = {
        webPageDetails: {
          viewName: viewName
        }
      };
    }

    if (isNonEmptyArray(decisionsMeta)) {
      mergeDecisionsMeta(event, decisionsMeta, PropositionEventType.DISPLAY);
    }

    event.mergeXdm(data);

    if (documentMayUnload) {
      event.documentMayUnload();
    }

    return eventManager.sendEvent(event);
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DEFAULT_ACTION_TYPE = "defaultContent";

vaturn item;
};

var buildActions = function buildActions(decision) {
  var meta = {
    id: decision.id,
    scope: decision.scope,
    scopeDetails: decision.scopeDetails
  };
  return decision.items.map(function (item) {
    return (0, _reactorObjectAssign["default"])({
      type: DEFAULT_ACTION_TYPE
    }, item.data, {
      meta: meta
    });
  });
};

var processMetas = function processMetas(logger, actionResults) {
  var results = flatMap(actionResults, identity);
  var finalMetas = [];
  var set = new Set();
  results.forEach(function (item) {
    // for click actions we don't return an item
    if (!item) {
      return;
    }

    if (item.error) {
      logger.warn(item);
      return;
    }

    var meta = item.meta;

    if (set.has(meta.id)) {
      return;
    }

    set.add(meta.id);
    finalMetas.push(meta);
  });
  return finalMetas;
};

var createExecuteDecisions = function createExecuteDecisions(_ref64) {
  var modules = _ref64.modules,
      logger = _ref64.logger,
      executeActions = _ref64.executeActions;
  return function (decisions) {
    var actionResultsPromises = dgger);
    });
    return Promise.all(actionResultsPrults);
    })["catch"](function (error) {
      logger.error(error);
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createFetchDataHandler = function createFetchDataHandler(_ref65) {
  var prehidingStyle = _ref65.prehidingStyle,
      responseHandler = _ref65.responseHandler,
      hideContainers = _ref65.hideContainers,
      mergeQuery = _ref65.mergeQuery;
  return function (_ref66) {
    var decisionsDeferred = _ref66.decisionsDeferred,
        personalizationDetails = _ref66.personalizationDetails,
        event = _ref66.event,
        onResponse = _ref66.onResponse;

    if (personalizationDetails.isRenderDecisions()) {
      hideContainers(prehidingStyle);
    }

    mergeQuery(event, personalizationDetails.createQueryDetails());
     });
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var matchesSelectorWithEq = function matchesSelectorWithEq(selector, element) {
  if (isNotEqSelector(selector)) {
    return matchesSelector(selector, element);
  } // Using node selection vs matches selector, because of :eq()
  // Find all nodes using document as context


  var nodes = selectNodesWithEq(selector);
  var result = false; // Iterate through all the identified elements
  // and reference compare with element

  for (var _i10 = 0; _i10 < nodes.length; _i10 += 1) {
    if (nodes[_i10] === element) {
      result = true;
      break;
    }
  }

  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getMetasIfMatches = function getMetasIfMatches(clickedElement, selector, getClickMetasBySelector) {
  var _document = document,
      documentElement = _document.documentElement;
  var element = clickedElement;

  while (element && element !== documentElement) {
    if (matchesSelectorWithEq(selector, element)) {
      return getClickMetasBySelector(selector);
    }

    element = element.parentNode;
  }

  return null;
};

var collectClicks = function collectClicks(clickedElement, selectors, getClickMetasBySelector) {
  var result = [];

  for (var _i11 = 0; _i11 < selectors.length; _i11 += 1) {
    var metas = getMetasIfMatches(clickedElement, selectors[_i11], getClickMetasBySelector);

    if (metas) {
      result.push.apply(result, _toConsumableArray(metas));
    }
  }

  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var isAuthoringModeEnabled = function isAuthoringModeEnabled() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return doc.location.href.indexOf("adobe_authoring_enabled") !== -1;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var EVENT_TYPE_TRUE = 1;

var mergeDecisionsMeta = function mergeDecisionsMeta(event, decisionsMeta, eventType) {
  event.mergeXdm({
    _experience: {
      decisioning: {
        propositions: decisionsMeta,
        propositionEventType: _defineProperty({}, eventType, EVENT_TYPE_TRUE)
      }
    }
  });
};

var mergeQuery = function mergeQuery(event, details) {
  event.mergeQuery({
    personalization: _objectSpread({}, details)
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createOnClickHandler = function createOnClickHandler(_ref68) {
  var mergeDecisionsMeta = _ref68.mergeDecisionsMeta,
      collectClicks = _ref68.collectClicks,
      getClickSelectors = _ref68.getClickSelectors,
      getClickMetasBySelector = _ref68.getClickMetasBySelector;
  // Called when an element qualifying for conversion within an offer is clicked.
  return function (_ref69) {
    var event = _ref69.event,
        clickedElement = _ref69.clickedElement;
    var selectors = getClickSelectors();

    if (isNonEmptyArray(selectors)) {
      var decisionsMeta = collectClicks(clickedElement, selectors, getClickMetasBySelector);

      if (isNonEmptyArray(decisionsMeta)) {
        var xdm = {
          eventType: INTERACT
        };
        var scope = decisionsMeta[0].scope;

        if (scope !== PAGE_WIDE_SCOPE) {
          xdm.web = {
            webPageDetails: {
              viewName: scope
            }
          };
        }

        event.mergeXdm(xdm);
        mergeDecisionsMeta(event, decisionsMeta, PropositionEventType.INTERACT);
      }
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createViewCacheManager = function createViewCacheManager() {
  var viewStorage;
  var viewStorageDeferred = defer();

  var storeViews = function storeViews(decisionsPromise) {
    decisionsPromise.then(function (decisions) {
      if (viewStorage === undefined) {
        viewStorage = {};
      }

      (0, _reactorObjectAssign["default"])(viewStorage, decisions);
      viewStorageDeferred.resolve();
    })["catch"](function () {
      if (viewStorage === undefined) {
        viewStorage = {};
      }

      viewStorageDeferred.resolve();
    });
  };

  var getView = function getView(viewName) {
    return viewStorageDeferred.|| [];
    });
  };

  var isIefined);
  };

  return {
    storeViews: storeViews,
    getView: getView,
    isInitialized: isInitialized
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var addRenderAttemptedToDecisions = function addRenderAttemptedToDecisions(_ref70) {
  var decisions = _ref70.decisions,
      renderAttempted = _ref70.renderAttempted;
  return decisions.map(function (decision) {
    return (0, _reactorObjectAssign["default"])({
      renderAttempted: renderAttempted
    }, decision);
  });
};

var composePersonalizationResultingObject = function composePersonalizationResultingObject() {
  var decisions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var renderDecisions = arguments.length > 1 ? arguments[1] : undefined;
  var resultingObject = {
    propositions: addRenderAttemptedToDecisions({
      decisions: decisions,
      renderAttempted: renderDecisions
    })
  };

  if (!renderDecisions) {
    resultingObject.decisions = decisions;
  }

  return resultingObject;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createViewChangeHandler = function createViewChangeHandler(_ref71) {
  var mergeDecisionsMeta = _ref71.mergeDecisionsMeta,
      collect = _ref71.collect,
      executeDecisions = _ref71.executeDecisions,
      viewCache = _ref71.viewCache;
  return function (_ref72) {
    var personalizationDetails = _ref72.personalizationDetails,
        event = _ref72.event,
        onResponse = _ref72.onResponse;
    var viewName = personalizationDetails.getViewName();
    return viewCache.getView(viewName).then(function (viewDecisions) {
      if (personalizationDetails.isRenderDecisions()) {
        return executeDecisions(viewDecisions).then(function (decisionsMeta) {
          // if there are decisions to be rendered we render them and attach the result in experience.decisions.propositions
          if (isNonEmptyArray(decisionsMeta)) {
            mergeDecisionsMeta(event, decisionsMeta, PropositionEventType.DISPLAY);
            onResponse(function () {
              return composePersonalizationResultingObject(viewDecisions, true);
            });
            return;
          } // if there are no decisions in cache for this view, we will send a empty notification


          onResponse(function () {
            collect({
              decisionsMeta: [],
              viewName: viewName
            });
            return composePersonalizationResultingObject(viewDecisions, true);
          });
        });
      }

      onResponse(function () {
        return composePersonalizationResultingObject(viewDecisions, false);
      });
      return {};
    });
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var isPageWideScope = function isPageWideScope(scope) {
  return scope === PAGE_WIDE_SCOPE || isPageWideSurface(scope);
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var VIEW_SCOPE_TYPE = "view";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var splitItems = function splitItems(items, schemas) {
  var matched = [];
  var nonMatched = [];
  items.forEach(function (item) {
    if (includes(schemas, item.schema)) {
      matched.push(item);
    } else {
      nonMatched.push(item);
    }
  });
  return [matched, nonMatched];
};

var createDecision = function createDecision(decision, items) {
  return {
    id: decision.id,
    scope: decision.scope,
    items: items,
    scopeDetails: decision.scopeDetails
  };
};

var splitMergedMetricDecisions = function splitMergedMetricDecisions(decisions) {
  var matchedDecisions = decisions.filter(function (decision) {
    var _decision$items = decision.items,
        items = _decision$items === void 0 ? [] : _decision$items;
    returCHEMA;
    });
  });
  var unmatchedDecisions = decicision);
  });
  return {
    matchedDecisions: matchedDecisions,
    unmatchedDecisions: unmatchedDecisions
  };
};

var splitDecisions = function splitDecisions(decisions) {
  for (var _len6 = arguments.length, schemas = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    schemas[_key6 - 1] = arguments[_key6];
  }

  var matchedDecisions = [];
  var unmatchedDecisions = [];
  decisions.forEach(function (decision) {
    var _decision$items2 = decision.items,
        items = _decision$items2 === void 0 ? [] : _decision$items2;

    var _splitItems = splitItems(items, schemas),
        _splitItems2 = _slicedToArray(_splitItems, 2),
        matchedItems = _splitItems2[0],
        nonMatchedItems = _splitItems2[1];

    if (isNonEmptyArray(matchedItems)) {
      matchedDecisions.push(createDecision(decision, matchedItems));
    }

    if (isNonEmptyArray(nonMatchedItems)) {
      unmatchedDecisions.push(createDecision(decision, nonMatchedItems));
    }
  });
  return {
    matchedDecisions: matchedDecisions,
    unmatchedDecisions: unmatchedDecisions
  };
};

var appendScopeDecision = function appendScopeDecision(scopeDecisions, decision) {
  if (!scopeDecisions[decision.scope]) {
    scopeDecisions[decision.scope] = [];
  }

  scopeDecisions[decision.scope].push(decision);
};

var iCOPE_TYPE;
};

var extractDecisionsByScope = function extractDecisionsByScope(decisions) {
  var pageWideScopeDecisions = [];
  var nonPageWideScopeDecisions = [];
  var viewScopeDecisions = {};

  if (isNonEmptyArray(decisions)) {
    decisions.forEach(function (decision) {
      if (isPageWideScope(decision.scope)) {
        pageWideScopeDecisions.push(decision);
      } else if (isViewScope(decision.scopeDetails)) {
        appendScopeDecision(viewScopeDecisions, decision);
      } else {
        nonPageWideScopeDecisions.push(decision);
      }
    });
  }

  return {
    pageWideScopeDecisions: pageWideScopeDecisions,
    nonPageWideScopeDecisions: nonPageWideScopeDecisions,
    viewScopeDecisions: viewScopeDecisions
  };
};

var groupDecisions = function groupDecisions(unprocessedDecisions) {
  // split redirect decisions
  var decisionsGroupedByRedirectItemSchema = splitDecisions(unprocessedDecisions, REDIRECT_ITEM); // split merged measurement decisions

  var mergedMetricDecisions = splitMergedMetricDecisions(decisionsGroupedByRedirectItemSchema.unmatchedDecisions); // split renderable decisions

  var decisionsGroupedByRenderableSchemas = splitDecisions(mergedMetricDecisions.unmatchedDecisions, DOM_ACTION, DEFAULT_CONTENT_ITEM); // group renderable decisions by scope

  var _extractDecisionsBySc = extractDecisionsByScope(decisionsGroupedByRenderableSchemas.matchedDecisions),
      pageWideScopeDecisions = _extractDecisionsBySc.pageWideScopeDecisions,
      nonPageWideScopeDecisions = _extractDecisionsBySc.nonPageWideScopeDecisions,
      viewScopeDecisions = _extractDecisionsBySc.viewScopeDecisions;

  return {
    redirectDecisions: decisionsGroupedByRedirectItemSchema.matchedDecisions,
    pageWideScopeDecisions: pageWideScopeDecisions,
    viewDecisions: viewScopeDecisions,
    nonAutoRenderableDecisions: [].concat(_toConsumableArray(mergedMetricDecisions.matchedDecisions), _toConsumableArray(decisionsGroupedByRenderableSchemas.unmatchedDecisions), _toConsumableArray(nonPageWideScopeDecisions))
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DECISIONS_HANDLE = "personalization:decisions";

var createOnResponseHandler = function createOnResponseHandler(_ref73) {
  var autoRenderingHandler = _ref73.autoRenderingHandler,
      nonRenderingHandler = _ref73.nonRenderingHandler,
      groupDecisions = _ref73.groupDecisions,
      handleRedirectDecisions = _ref73.handleRedirectDecisions,
      showContainers = _ref73.showContainers;
  return function (_ref74) {
    var decisionsDeferred = _ref74.decisionsDeferred,
        personalizationDetails = _ref74.personalizationDetails,
        response = _ref74.response;
    var unprocessedDecisions = response.getPayloadsByType(DECISIONS_HANDLE);
    var viewName = personalizationDetails.getViewName(); // if personalization payload is empty return empty decisions array

    if (unprocessedDecisions.length === 0) {
      showContainers();
      decisionsDeferred.resolve({});
      return {
        decisions: [],
        propositions: []
      };
    }

    var _groupDecisions = groupDecisions(unprocessedDecisions),
        redirectDecisions = _groupDecisions.redirectDecisions,
        pageWideScopeDecisions = _groupDecisions.pageWideScopeDecisions,
        viewDecisions = _groupDecisions.viewDecisions,
        nonAutoRenderableDecisions = _groupDecisions.nonAutoRenderableDecisions;

    if (personalizationDetails.isRenderDecisions() && isNonEmptyArray(redirectDecisions)) {
      decisionsDeferred.resolve({});
      return handleRedirectDecisions(redirectDecisions);
    } // save decisions for views in local cache


    decisionsDeferred.resolve(viewDecisions);

    if (personalizationDetails.isRenderDecisions()) {
      return autoRenderingHandler({
        viewName: viewName,
        pageWideScopeDecisions: pageWideScopeDecisions,
        nonAutoRenderableDecisions: nonAutoRenderableDecisions
      });
    }

    return nonRenderingHandler({
      viewName: viewName,
      redirectDecisions: redirectDecisions,
      pageWideScopeDecisions: pageWideScopeDecisions,
      nonAutoRenderableDecisions: nonAutoRenderableDecisions
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var metasToArray = function metasToArray(metas) {
  return Object.keys
    };
  });
};

var createClickStorage = function createClickStorage() {
  var clickStorage = {};

  var storeClickMetrics = function storeClickMetrics(value) {
    if (!clickStorage[value.selector]) {
      clickStorage[value.selector] = {};
    }

    clickStorage[value.selector][value.meta.id] = {
      scope: value.meta.scope,
      scopeDetails: value.meta.scopeDetails
    };
  };

  var getClictorage);
  };

  var getClickMetasBySelector = function getClickMetasBySelector(selector) {
    var metas = clickStorage[selector];

    if (!metas) {
      return {};
    }

    return metasToArray(clickStorage[selector]);
  };

  return {
    storeClickMetrics: storeClickMetrics,
    getClickSelectors: getClickSelectors,
    getClickMetasBySelector: getClickMetasBySelector
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getRedirectDetails = function getRedirectDetails(redirectDecisions) {
  var decision = redirectDecisions[0];
  var items = decision.items,
      id = decision.id,
      scope = decision.scope,
      scopeDetails = decision.scopeDetails;
  var content = items[0].data.content;
  return {
    content: content,
    decisions: [{
      id: id,
      scope: scope,
      scopeDetails: scopeDetails
    }]
  };
};

var createRedirectHandler = function createRedirectHandler(_ref75) {
  var collect = _ref75.collect,
      window = _ref75.window,
      logger = _ref75.logger,
      showContainers = _ref75.showContainers;
  return function (redirectDecisions) {
    var _getRedirectDetails = getRedirectDetails(redirectDecisions),
        content = _getRedirectDetails.content,
        decisions = _getRedirectDetails.decisions;

    var documentMayUnload = true;
    return collect({
      decisionsMeta: decisions,
      documentMayUnload: documentMayUnloadtent);
   RROR);
    });
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getPropositions = function getPropositions(_ref76) {
  var viewCache = _ref76.viewCache,
      viewName = _ref76.viewName,
      pageWideScopeDecisions = _ref76.pageWideScopeDecisions;

  if (!viewName) {
    return {
      pageWideScopeDecisions: pageWideScopeDecisions,
      viewPropositions: []
    };
  }

  return viewCache.getView(vis
    };
  });
};

var createAutorenderingHandler = function createAutorenderingHandler(_ref77) {
  var viewCache = _ref77.viewCache,
      executeDecisions = _ref77.executeDecisions,
      showContainers = _ref77.showContainers,
      collect = _ref77.collect;
  return function (_ref78) {
    var viewName = _ref78.viewName,
        pageWideScopeDecisions = _ref78.pageWideScopeDecisions,
        nonAutoRenderableDecisions = _ref78.nonAutoRenderableDecisions;
    return Promise.resolve(pageWideScopeDec   });
    }).then(function (propositions) {
      executeDecisions(propositions.pageWideScopeDecisions).then(function (decisionsMeta) {
        if (isNonEmptyArray(decisionsMeta)) {
          collect({
            decisionsMeta: decisionsMeta
          });
        }
      });

      if (viewName) {
        executeDecisions(propositions.viewPropos);
        });
      }

      showContainers();
      return [].concat(_toConsumableArray(propositions.pageWideScopeDecisions), _toConsumableArray(propositions.viewPropositions));
    }).then(function (renderablePropositions) {
      return {
        decisions: _toConsumableArray(nonAutoRenderableDecisions),
        propositions: [].concat(_toConsumableArray(addRenderAttemptedToDecisions({
          decisions: renderablePropositions,
          renderAttempted: true
        })), _toConsumableArray(addRenderAttemptedToDecisions({
          decisions: nonAutoRenderableDecisions,
          renderAttempted: false
        })))
      };
    });
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getViewPropositions = function getViewPropositions(_ref79) {
  var viewCache = _ref79.viewCache,
      viewName = _ref79.viewName,
      propositions = _ref79.propositions;

  if (!viewName) {
    return propositions;
  }

  return viewCache.getView(vitions));
  });
};

var buildFinalResult = function buildFinalResult(_ref80) {
  var propositions = _ref80.propositions;
  return {
    decisions: propositions,
    propositions: addRenderAttemptedToDecisions({
      decisions: propositions,
      renderAttempted: false
    })
  };
};

var createNonRenderingHandler = function createNonRenderingHandler(_ref81) {
  var viewCache = _ref81.viewCache;
  return function (_ref82) {
    var viewName = _ref82.viewName,
        redirectDecisions = _ref82.redirectDecisions,
        pageWideScopeDecisions = _ref82.pageWideScopeDecisions,
        nonAutoRenderableDecisions = _ref82.nonAutoRenderableDecisions;
    var propositions = [].concat(_toConsumableArray(redirectDecisions), _toConsumableArray(pageWideScopeDecisions), _toConsumableArray(nonAutoRenderableDecisions));
    return Promise.resolve(propos   });
    }).then(function (items) {
      return buildFinalResult({
        propositions: items
      });
    });
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SUPPORTED_SCHEMAS = [DOM_ACTION, HTML_CONTENT_ITEM];

var createApplyPropositions = function createApplyPropositions(_ref83) {
  var executeDecisions = _ref83.executeDecisions;

  var filterItema) > -1;
  };

  var updatePropositionItems = function updatePropositionItems(_ref84) {
    var items = _ref84.items,
        metadataForScope = _ref84.metadataForScope;
    return items.filter(filterItemsPredicate).map(function (item) {
      if (item.schema !== HTML_CONTENT_ITEM) {
        return _objectSpread({}, item);
      }

      if (isObject(metadataForScope)) {
        return _objectSpread(_objectSpread({}, item), {}, {
          data: _objectSpread(_objectSpread({}, item.data), {}, {
            selector: metadataForScope.selector,
            type: metadataForScope.actionType
          })
        });
      }

      return undefined;
  item;
    });
  };

  var filterPropositionsPredicate = function filterPropositionsPredicate(proposition) {
    return !(proposition.scope === PAGE_WIDE_SCOPE && proposition.renderAttempted);
  };

  var preparePropositions = function preparePropositions(_ref85) {
    var propositions = _ref85.propositions,
        metadata = _ref85.metadata;
    return propositions.filter(filterPropositionsPredicate).map(function (proposition) {
      if (isNonEmptyArray(proposition.items)) {
        var id = proposition.id,
            scope = proposition.scope,
            scopeDetails = proposition.scopeDetails;
        return {
          id: id,
          scope: scope,
          scopeDetails: scopeDetails,
          items: updatePropositionItems({
            items: proposition.items,
            metadataForScope: metadata[proposition.scope]
          })
        };
      }

      return proposition;
 tems);
    });
  };

  var applyPropositions = function applyPropositions(_ref86) {
    var propositions = _ref86.propositions,
        metadata = _ref86.metadata;
    var propositionsToExecute = preparePropositions({
      propositions: propositions,
      metadata: metadata
    });
    return executeDecisions(propositionsToEtrue);
    });
  };

  return function (_ref87) {
    var propositions = _ref87.propositions,
        _ref87$metadata = _ref87.metadata,
        metadata = _ref87$metadata === void 0 ? {} : _ref87$metadata;

    if (isNonEmptyArray(propositions)) {
      return applyPropositions({
        propositions: propositions,
        metadata: metadata
      });
    }

    return Promise.resolve(EMPTY_PROPOSITIONS);
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createGetPageLocation = function createGetPageLocation(_ref88) {
  var window = _ref88.windocation;
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createSetTargetMigration = function createSetTargetMigration(_ref89) {
  var targetMigrationEnabled = _ref89.targetMigrationEnabled;

  if (targetMigrationEnabled) {
    return function (request) {
      request.getPayload().mergeMeta({
        target: {
          migration: true
        }
      });
    };
  }

  return noop;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createPersonalization = function createPersonalization(_ref90) {
  var config = _ref90.config,
      logger = _ref90.logger,
      eventManager = _ref90.eventManager;
  var targetMigrationEnabled = config.targetMigrationEnabled,
      prehidingStyle = config.prehidingStyle;
  var collect = createCollect({
    eventManager: eventManager,
    mergeDecisionsMeta: mergeDecisionsMeta
  });

  var _createClickStorage = createClickStorage(),
      getClickMetasBySelector = _createClickStorage.getClickMetasBySelector,
      getClickSelectors = _createClickStorage.getClickSelectors,
      storeClickMetrics = _createClickStorage.storeClickMetrics;

  var getPageLocation = createGetPageLocation({
    window: window
  });
  var viewCache = createViewCacheManager();
  var modules = initDomActionsModules(storeClickMetrics);
  var executeDecisions = createExecuteDecisions({
    modules: modules,
    logger: logger,
    executeActions: executeActions
  });
  var handleRedirectDecisions = createRedirectHandler({
    collect: collect,
    window: window,
    logger: logger,
    showContainers: showContainers
  });
  var autoRenderingHandler = createAutorenderingHandler({
    viewCache: viewCache,
    executeDecisions: executeDecisions,
    showContainers: showContainers,
    collect: collect
  });
  var applyPropositions = createApplyPropositions({
    executeDecisions: executeDecisions
  });
  var nonRenderingHandler = createNonRenderingHandler({
    viewCache: viewCache
  });
  var responseHandler = createOnResponseHandler({
    autoRenderingHandler: autoRenderingHandler,
    nonRenderingHandler: nonRenderingHandler,
    groupDecisions: groupDecisions,
    handleRedirectDecisions: handleRedirectDecisions,
    showContainers: showContainers
  });
  var fetchDataHandler = createFetchDataHandler({
    prehidingStyle: prehidingStyle,
    responseHandler: responseHandler,
    hideContainers: hideContainers,
    mergeQuery: mergeQuery
  });
  var onClickHandler = createOnClickHandler({
    mergeDecisionsMeta: mergeDecisionsMeta,
    collectClicks: collectClicks,
    getClickSelectors: getClickSelectors,
    getClickMetasBySelector: getClickMetasBySelector
  });
  var viewChangeHandler = createViewChangeHandler({
    mergeDecisionsMeta: mergeDecisionsMeta,
    collect: collect,
    executeDecisions: executeDecisions,
    viewCache: viewCache
  });
  var setTargetMigration = createSetTargetMigration({
    targetMigrationEnabled: targetMigrationEnabled
  });
  return createComponent$1({
    getPageLocation: getPageLocation,
    logger: logger,
    fetchDataHandler: fetchDataHandler,
    viewChangeHandler: viewChangeHandler,
    onClickHandler: onClickHandler,
    isAuthoringModeEnabled: isAuthoringModeEnabled,
    mergeQuery: mergeQuery,
    viewCache: viewCache,
    showContainers: showContainers,
    applyPropositions: applyPropositions,
    setTargetMigration: setTargetMigration
  });
};

createPersonalization.namespace = "Personalization";
createPersonalization.configValidators = {
  prehidingStyle: boundString().nonEmpty(),
  targetMigrationEnabled: boundBoolean()["default"](false)
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectWeb = function injectWeb(window
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getScreenOrientationViaProperty = function getScreenOrientationViaProperty(window) {
  var orientation = window.screen.orientation;

  if (orientation == null || orientation.type == null) {
    return null;
  }

  var parts = orientation.type.split("-");

  if (parts.length === 0) {
    return null;
  }

  if (parts[0] !== "portrait" && parts[0] !== "landscape") {
    return null;
  }

  return parts[0];
};

var getScreenOrientationViaMediaQuery = function getScreenOrientationViaMediaQuery(window) {
  if (isFunction(window.matchMedia)) {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return "portrait";
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      return "landscape";
    }
  }

  return null;
};

var injectDevice = function injectDevice(window) {
  return function (xdm) {
    var _window$screen = window.screen,
        width = _window$screen.width,
        height = _window$screen.height;
    var device = {};
    var screenHeight = toInteger(height);

    if (screenHeight >= 0) {
      device.screenHeight = screenHeight;
    }

    var screenWidth = toInteger(width);

    if (screenWidth >= 0) {
      device.screenWidth = screenWidth;
    }

    var orientation = getScreenOrientationViaProperty(window) || getScreenOrientationViaMediaQuery(window);

    if (orientation) {
      device.screenOrientation = orientation;
    }

    if (Object.keys(device).length > 0) {
      deepAssign(xdm, {
        device: device
      });
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectEnvironment = function injectEnvironment(window) {
  return function (xdm) {
    var _window$document$docu = window.document.documentElement;
    _window$document$docu = _window$document$docu === void 0 ? {} : _window$document$docu;
    var clientWidth = _window$document$docu.clientWidth,
        clientHeight = _window$document$docu.clientHeight;
    var environment = {
      type: "browser"
    };
    var viewportWidth = toInteger(clientWidth);

    if (viewportWidth >= 0) {
      environment.browserDetails = {
        viewportWidth: viewportWidth
      };
    }

    var viewportHeight = toInteger(clientHeight);

    if (viewportHeight >= 0) {
      environment.browserDetails = environment.browserDetails || {};
      environment.browserDetails.viewportHeight = viewportHeight;
    }

    deepAssign(xdm, {
      environment: environment
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectPlaceContext = function injectPlaceContext(dateProvider) {
  return function (xdm) {
    var date = dateProvider();
    var placeContext = {};
    var localTimezoneOffset = toInteger(date.getTimezoneOffset());

    if (localTimezoneOffset !== undefined) {
      placeContext.localTimezoneOffset = localTimezoneOffset;
    } // make sure the timezone offset only uses two digits


    if (localTimezoneOffset === undefined || Math.abs(localTimezoneOffset) < 6000) {
      placeContext.localTime = toISOStringLocal(date);
    }

    deepAssign(xdm, {
      placeContext: placeContext
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectTimestamp = function injectTimestamp(dateProvider
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var libraryName = "https://ns.adobe.com/experience/alloy";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// The __VERSION__ keyword will be replace at alloy build time with the package.json version.
// see babel-plugin-version

var libraryVersion = "2.14.0";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var implementationDetails = function implementationDetails(xdm) {
  var implementationDetails = {
    name: libraryName,
    version: libraryVersion,
    environment: "browser"
  };
  deepAssign(xdm, {
    implementationDetails: implementationDetails
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createComponent$2 = function createComponent$2(config, logger, optionalContexts, requiredContexts) {
  var configuredContexts = config.context;
  var contexts = flatMap(configuredContexts, function (context, i) {
    if (optionalContexts[context]) {
      return [optionalContexts[context]];
    }

    logger.warn("Invalid context[".concat(i, "]: '").concat(context, "' is not available."));
    return [];
  }).concat(requiredContexts);
  return {
    namespace: "Context",
    lifecycle: {
      onBeforeEvent: function onBeforeEvent(_ref91) {
        var event = _ref91.event;
        var xdm = {};
        return Promise.all();
    );
        });
      }
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var highEntropyUserAgentHints = [["architecture", "string"], ["bitness", "string"], ["model", "string"], ["platformVersion", "string"], ["wow64", "boolean"]];
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var browserSupportsUserAgentClientHints = function browserSupportsUserAgentClientHints(navigator) {
  return typeof navigator.userAgentData !== "undefined";
};

var injectHighEntropyUserAgentHints = function injectHighEntropyUserAgentHints(navigator) {
  if (!browserSupportsUserAgentClientHints(navigator)) {
    return noop;
  }

  return function (xdm, logger) {
    try {
      return navigator.userAgentData.getHighEntropyValues(highEntropyUserAg[0];
      })).then(function (hints) {
        var userAgentClientHints = {};
        highEntropyUserAgentHints.forEach(function (_ref92) {
          var _ref93 = _slicedToArray(_ref92, 2),
              hintName = _ref93[0],
              hintType = _ref93[1];

          if (Object.prototype.hasOwnProperty.call(hints, hintName) &&
          /* eslint-disable-next-line valid-typeof */
          _typeof(hints[hintName]) === hintType) {
            userAgentClientHints[hintName] = hints[hintName];
          }
        });
        deepAssign(xdm, {
          environment: {
            browserDetails: {
              userAgentClientHints: userAgentClientHints
            }
          }
        });
      });
    } catch (error) {
      logger.warn("Unable to collect user-agent client hints. ".concat(error.message));
      return noop;
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var web = injectWeb(window);
var device = injectDevice(window);
var environment = injectEnvironment(window);
var placeContext = injectPlaceContext(function () {
  return new Date();
});
var timestamp = injew Date();
});
var highEntropyUserAgentHints$1 = injectHighEntropyUserAgentHints(navigator);
var defaultEnabledContexts = {
  web: web,
  device: device,
  environment: environment,
  placeContext: placeContext
};
var defaultDisabledContexts = {
  highEntropyUserAgentHints: highEntropyUserAgentHints$1
};

var optionalContexts = _objectSpread(_objectSpread({}, defaultEnabledContexts), defaultDisabledContexts);

var requiredContexts = [timestamp, implementationDetails];

var createContext = function createContext(_ref94) {
  var config = _ref94.config,
      logger = _ref94.logger;
  return createComponent$2(config, logger, optionalContexts, requiredContexts);
};

createContext.namespace = "Context";
createContext.configValidators = {
  context: boundArrayOf(boundString())["default"](Object.keys(defaultEnabledContexts))
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createComponent$3 = function createComponent$3(_ref95) {
  var storedConsent = _ref95.storedConsent,
      taskQueue = _ref95.taskQueue,
      defaultConsent = _ref95.defaultConsent,
      consent = _ref95.consent,
      sendSetConsentRequest = _ref95.sendSetConsentRequest,
      validateSetConsentOptions = _ref95.validateSetConsentOptions,
      consentHashStore = _ref95.consentHashStore,
      doesIdentityCookieExist = _ref95.doesIdentityCookieExist;

  var defaultConsentByPurpose = _defineProperty({}, GENERAL, defaultConsent);

  var storedConsentByPurpose = storedConsent.read();
  var identityCookieExists = doesIdentityCookieExist();
  var consentCookieExists = storedConsentByPurpose[GENERAL] !== undefined;

  if (!identityCookieExists || !consentCookieExists) {
    consentHashStore.clear();
  } // If the identity cookie is gone, remove the consent cookie because the
  // consent info is tied to the identity.


  if (!identityCookieExists) {
    storedConsent.clear();
    storedConsentByPurpose = {};
  }

  consent.initializeConsent(defaultConsentByPurpose, storedConsentByPurpose);

  var readCookieIfQueueEmpty = function readCookieIfQueueEmpty() {
    if (taskQueue.length === 0) {
      var storedConsentObject = storedConsent.read(); // Only read cookies when there are no outstanding setConsent
      // requests. This helps with race conditions.

      if (storedConsentObject[GENERAL] !== undefined) {
        consent.setConsent(storedConsentObject);
      }
    }
  };

  return {
    commands: {
      setConsent: {
        optionsValidator: validateSetConsentOptions,
        run: function run(_ref96) {
          var consentOptions = _ref96.consent,
              identityMap = _ref96.identityMap;
          consent.suspend();
          var consentHashes = consentHashStore.lookup(consentOptions);
          return taskQueue.addTask(function () {
            if (consentHashes.isNew()) {
              return sendSetConsentRequest({
                consentOptions: consentOptions,
                identityMap: identityMap
              });
            }

            return Promise.resolve();
     
          })["finally"](readCookieIfQueueEmpty);
        }
      }
    },
    lifecycle: {
      // Read the cookie here too because the consent cookie may change on any request
      onResponse: readCookieIfQueueEmpty,
      // Even when we get a failure HTTP status code, the consent cookie can
      // still get updated. This could happen, for example, if the user is
      // opted out in AudienceManager, but no consent cookie exists on the
      // client. The request will be sent and the server will respond with a
      // 403 Forbidden and a consent cookie.
      onRequestFailure: readCookieIfQueueEmpty
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var serialize = function serialize(obj) {
  if (Array.isArray(obj)) {
    reze(i);
    });
  }

  if (_typeof(obj) === "object" && obj !== null) {
    return Object.keys(obj).s memo;
    }, {});
  }

  return obj;
};

var computeCze(obj)));
};

var getKey = function getKey(_ref97) {
  var standard = _ref97.standard,
      version = _ref97.version;
  return "".concat(standard, ".").concat(version);
};

var createConsentHashStore = function createConsentHashStore(_ref98) {
  var storage = _ref98.storage;
  return ear();
    },
    lookup: function lookup(consentObjects) {
      var currentHashes = {};

      var getCurrentHash = function getCurrentHash(consentObject) {
        var key = getKey(consentObject);

        var standard = consentObject.standard,
            version = consentObject.version,
            rest = _objectWithoutProperties(consentObject, ["standard", "version"]);

        if (!currentHashes[key]) {
          currentHashes[key] = computeConsentHash(rest).toString();
        }

        return currentHashes[key];
      };

      return {
        isNew: function isNew() {
          return consentObjects.some(function (consentObject) {
            var key = getKey(consentObject);
            var previousHash = storage.getItem(key);
            return previousHash === null || previousHash !== getCurrentHash(consentObject);
          });
        },
        save: function save() {
          consentObj
          });
        }
      };
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConsentRequestPayload = function createConsentRequestPayload() {
  var content = {};
  var payload = createRequestPayload({
    content: content,
    addIdentity: function addIdentity(namespaceCode, identity) {
      content.identityMap = content.identityMap || {};
      content.identityMap[namespaceCode] = content.identityMap[namespaceCode] || [];
      content.identityMap[namespaceCode].push(identity);
    },
    hasIdentity: function hasIdentity(namespaceCode) {
      return (content.identityMap && content.identityMap[namespaceCode]) !== undefined;
    }
  });

  payload.consent;
  };

  return payload;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConsentRequest = function createConsentRequest(consentRequestPayload) {
  return createRequest({
    payload: consentRequestPayload,
    getAction: function getAction() {
      return "privacy/set-consent";
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return false;
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createStoredConsent = function createStoredConsent(_ref99) {
  var parseConsentCookie = _ref99.parseConsentCookie,
      orgId = _ref99.orgId,
      cookieJar = _ref99.cookieJar;
  var consentCookieName = getNamespacedCookieName(orgId, CONSENT);
  return {
    read: function read() {
      var cookieValue = cookieJar.get(consentCookieName);
      return cookieValue ? parseConsentCookie(cookieValue) : {};
    }Name);
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendSetConsentRequest = function injectSendSetConsentRequest(_ref100) {
  var createConsentRequestPayload = _ref100.createConsentRequestPayload,
      createConsentRequest = _ref100.createConsentRequest,
      sendEdgeNetworkRequest = _ref100.sendEdgeNetworkRequest;
  return function (_ref101) {
    var consentOptions = _ref101.consentOptions,
        identityMap = _ref101.identityMap;
    var payload = createConsentRequestPayload();
    payload.setConsent(consentOptions);

    if (isObject(identityMap)) {
      Object.keys(identity });
      });
    }

    var request = createConsentRequest(payload);
    return sendEdgeNetworkRequest({
      request: request
    }).then(function () {// Don't let response data disseminate beyond this
      // point unless necessary.
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Parses a consent cookie.
 * @param {string} cookieValue Must be in the format a=b;c=d
 * @returns {Object} An object where the keys are purpose names and the values
 * are the consent status for the purpose.
 */


var parseConsentCookie = function parseConsentCookie(cookieValue) {
  var categoryPairs = cookieValue.split(";");
  return categoryPairs.reduce(function (consentByPurpose, categoryPair) {
    var _categoryPair$split = categoryPair.split("="),
        _categoryPair$split2 = _slicedToArray(_categoryPair$split, 2),
        name = _categoryPair$split2[0],
        value = _categoryPair$split2[1];

    consentByPurpose[name] = value;
    return consentByPurpose;
  }, {});
};

var validateSetConsentOptions = boundObjectOf({
  consent: boundArrayOf(boundAnything()).required().nonEmpty(),
  identityMap: validateIdentityMap
}).noUnknownFields().required();
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createPrivacy = function createPrivacy(_ref102) {
  var config = _ref102.config,
      consent = _ref102.consent,
      sendEdgeNetworkRequest = _ref102.sendEdgeNetworkRequest,
      createNamespacedStorage = _ref102.createNamespacedStorage;
  var orgId = config.orgId,
      defaultConsent = config.defaultConsent;
  var storedConsent = createStoredConsent({
    parseConsentCookie: parseConsentCookie,
    orgId: orgId,
    cookieJar: _reactorCookie["default"]
  });
  var taskQueue = createTaskQueue();
  var sendSetConsentRequest = injectSendSetConsentRequest({
    createConsentRequestPayload: createConsentRequestPayload,
    createConsentRequest: createConsentRequest,
    sendEdgeNetworkRequest: sendEdgeNetworkRequest
  });
  var storage = createNamespacedStorage("".concat(sanitizeOrgIdForCookieName(orgId), ".consentHashes."));
  var consentHashStore = createConsentHashStore({
    storage: storage.persistent
  });
  var doesIdentityCookieExist = injectDoesIdentityCookieExist({
    orgId: orgId
  });
  return createComponent$3({
    storedConsent: storedConsent,
    taskQueue: taskQueue,
    defaultConsent: defaultConsent,
    consent: consent,
    sendSetConsentRequest: sendSetConsentRequest,
    validateSetConsentOptions: validateSetConsentOptions,
    consentHashStore: consentHashStore,
    doesIdentityCookieExist: doesIdentityCookieExist
  });
};

createPrivacy.namespace = "Privacy";
/*
Copyright 20219 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createEv4_1()
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


exports.createEventMergeId = createEventMergeId;

var createComponent$4 = function createComponent$4(_ref103) {
  var createEventMergeId = _ref103.createEventMergeId;
  return {
    commands: {
      createEventMergeId: {
        run: createEventMergeId
      }
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var creategeId
  });
};

createEventMerge.namespace = "EventMerge";
createEventMerge.configValidators = {};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var prepareLibraryInfo = function prepareLibraryInfo(_ref104) {
  var config = _ref104.config,
      componentRegistry = _ref104.componentRegistry;
  var allCommands = [].concat(_toConsumableArray(componentRegistry.getCommandNames()), [CONFIGURE, SET_DEBUG]).sort();

  var resultConfig = _objectSpread({}, config);

  Object.keys(config).forEach(function (key) {
    var value = config[key];

    if (typeof value !== "function") {
      return;
    }

    resultConfig[key] = value.toString();
  });
  return {
    version: libraryVersion,
    configs: resultConfig,
    commands: allCommands
  };
};

var createLibraryInfo = function createLibraryInfo(_ref105) {
  var config = _ref105.config,
      componentRegistry = _ref105.componentRegistry;
  var libraryInfo = prepareLibraryInfo({
    config: config,
    componentRegistry: componentRegistry
  });
  return {
    commands: {
      getLibraryInfo: {
};
        }
      }
    }
  };
};

createLibraryInfo.namespace = "LibraryInfo";
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var processResponse = function processResponse(_ref106) {
  var response = _ref106.response;
  return {
    inferences: response.getPayloadsByType("rtml:inferences")
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createMachineLearning = function createMachineLearning() {
  return {
    lifecycle: {
      onResponse: processResponse
    },
    commands: {}
  };
};

createMachineLearning.namespace = "MachineLearning";
createMachineLearning.configValidators = {};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// TODO: Figure out how sub-components will be made available/registered

var componentCreators = [createDataCollector, createActivityCollector, createIdentity, createAudiences, createPersonalization, createContext, createPrivacy, createEventMerge, createLibraryInfo, createMachineLearning];
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var CONFIG_DOC_URI = "https://adobe.ly/3sHh553";

var buildSchema = function buildSchema(coreConfigValidators, componentCreators) {
  var schema = {};
  (0, _reactorObjectAssign["default"])(schema, coreConfigValidators);
  componentCreators.forEach(function (createComponent) {
    var configValidators = createComponent.configValidators;
    (0, _reactorObjectAssign["default"])(schema, configValidators);
  });
  return schema;
};

var transformOptions = function transformOptions(schema, options) {
  try {
    var validator = boundObjectOf(schema).noUnknownFields().required();
    return validator(options);
  } catch (e) {
    throw new Error("Resolve these configuration problems:\n\t - ".concat(e.message.split("\n").join("\n\t - "), "\nFor configuration documentation see: ").concat(CONFIG_DOC_URI));
  }
};

var buildAndValidateConfig = function buildAndValidateConfig(_ref107) {
  var options = _ref107.options,
      componentCreators = _ref107.componentCreators,
      coreConfigValidators = _ref107.coreConfigValidators,
      createConfig = _ref107.createConfig,
      logger = _ref107.logger,
      setDebugEnabled = _ref107.setDebugEnabled;
  var schema = buildSchema(coreConfigValidators, componentCreators);
  var config = createConfig(transformOptions(schema, options));
  setDebugEnabled(config.debugEnabled, {
    fromConfig: true
  });
  logger.logOnInstanceConfigured({
    config: config
  });
  return config;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var initializeComponents = function initializeComponents(_ref108) {
  var componentCreators = _ref108.componentCreators,
      lifecycle = _ref108.lifecycle,
      componentRegistry = _ref108.componentRegistry,
      getImmediatelyAvailableTools = _ref108.getImmediatelyAvailableTools;
  componentCreators.forEach(function (createComponent) {
    var namespace = createComponent.namespace; // TO-DOCUMENT: Helpers that we inject into factories.

    var tools = getImmediatelyAvailableTools(namespace);
    var component;

    try {
      component = createComponent(tools);
    } catch (error) {
      throw stackError({
        error: error,
        message: "[".concat(namespace, "] An error occurred during component creation.")
      });
    }

    componentRegistry.register(namespace, component);
  });
  return lifecycle.onComponentsRegistered({
    lifecycle: lifecycegistry;
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConfig = function createConfig(options) {
  return (0, _reactorObjectAssign["default"])({}, options);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var EDGE$1 = "edge.adobedc.net";
var ID_THIRD_PARTY = "adobedc.demdex.net";
var EDGE_BASE_PATH = "ee";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createCoreConfigs = function createCoreConfigs() {
  return {
    debugEnabled: boundBoolean()["default"](false),
    defaultConsent: boundEnumOf(IN, OUT, PENDING)["default"](IN),
    edgeConfigId: boundString().unique().required(),
    edgeDomain: boundString().domain()["default"](EDGE$1),
    edgeBasePath: boundString().nonEmpty()["default"](EDGE_BASE_PATH),
    orgId: boundString().unique().required(),
    onBeforeEventSend: boundCallback()["default"](noop)
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectHandleError = function injectHandleError(_ref109) {
  var errorPrefix = _ref109.errorPrefix,
      logger = _ref109.logger;
  return function (error, operation) {
    var err = toError(error); // In the case of declined consent, we've opted to not reject the promise
    // returned to the customer, but instead resolve the promise with an
    // empty result object.

    if (err.code === DECLINED_CONSENT_ERROR_CODE) {
      logger.warn("The ".concat(operation, " could not fully complete. ").concat(err.message));
      return {};
    }

    updateErrorMessage({
      error: err,
      message: "".concat(errorPrefix, " ").concat(err.message)
    });
    throw err;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendFetchRequest = function injectSendFetchRequest(_ref110) {
  var fetch = _ref110.fetch;
  return function (url, body) {
    return fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      // To set the cookie header in the request.
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: body
    }).then(function (response) {
      return response.text().then(function (responseBody) {
        return {
          statusCode: response.status,
          // We expose headers through a function instead of creating an object
          // with all the headers up front largely because the native
          // request.getResponseHeader method is case-insensitive but also because it prevents
          // us from having to add header parsing logic when using XHR to make requests.
        
          },
          body: responseBody
        };
      });
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendXhrRequest = function injectSendXhrRequest(_ref111) {
  var XMLHttpRequest = _ref111.XMLHttpRequest;
  return function (url, body) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 0) {
            reject(new Error("Request aborted."));
          } else {
            resolve({
              statusCode: request.status,
              // We expose headers through a function instead of creating an object
              // with all the headers up front because:
              // 1. It avoids having to add header parsing code to get all headers.
              // 2. The native request.getResponseHeader method is case-insensitive.
                       },
              body: request.responseText
            });
          }
        }
      };

      request.oxt";
      };

      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
      request.withCredentials = true;
      request.onerror = reject;
      request.onabort = reject;
      request.send(body);
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendBeaconRequest = function injectSendBeaconRequest(_ref112) {
  var sendBeacon = _ref112.sendBeacon,
      sendFetchRequest = _ref112.sendFetchRequest,
      logger = _ref112.logger;
  return function (url, body) {
    var blob = new Blob([body], {
      type: "text/plain; charset=UTF-8"
    });

    if (!sendBeacon(url, blob)) {
      logger.info("Unable to use `sendBeacon`; falling back to `fetch`.");
      return sendFetchRequest(url, body);
    } // Using sendBeacon, we technically don't get a response back from
    // the server, but we'll resolve the promise with an object to maintain
    // consistency with other network strategies.


    return Promise.resolve({
      statusCode: 204,
    ull;
      },
      body: ""
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createLogger = function createLogger(_ref113) {
  var getDebugEnabled = _ref113.getDebugEnabled,
      console = _ref113.console,
      getMonitors = _ref113.getMonitors,
      context = _ref113.context;
  var prefix = "[".concat(context.instanceName, "]");

  if (context.componentName) {
    prefix += " [".concat(context.componentName, "]");
  }

  var notifyMonitors = function notifyMonitors(method, data) {
    var monitors = getMonitors();

    if (monitors.length > 0) {
      var dataWithContext = (0, _reactorObjectAssign["default"])({}, context, data);
      moni   }
      });
    }
  };

  var log = function log(level) {
    for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      rest[_key7 - 1] = arguments[_key7];
    }

    notifyMonitors("onBeforeLog", {
      level: level,
      arguments: rest
    });

    if (getDebugEnabled()) {
      console[level].apply(console, [prefix].concat(rest));
    }
  };

  return {
  led();
    },

    logOnInstanceCreated: function logOnInstanceCreated(data) {
      notifyMonitors("onInstanceCreated", data);
      log("info", "Instance initialized.");
    },
    logOnInstanceConfigured: function logOnInstanceConfigured(data) {
      notifyMonitors("onInstanceConfigured", data);
      log("info", "Instance configured. Computed configuration:", data.config);
    },
    logOnBeforeCommand: function logOnBeforeCommand(data) {
      notifyMonitors("onBeforeCommand", data);
      log("info", "Executing ".concat(data.commandName, " command. Options:"), data.options);
    },
    logOnCommandResolved: function logOnCommandResolved(data) {
      notifyMonitors("onCommandResolved", data);
      log("info", "".concat(data.commandName, " command resolved. Result:"), data.result);
    },
    logOnCommandRejected: function logOnCommandRejected(data) {
      notifyMonitors("onCommandRejected", data);
      log("error", "".concat(data.commandName, " command was rejected. Error:"), data.error);
    },
    logOnBeforeNetworkRequest: function logOnBeforeNetworkRequest(data) {
      notifyMonitors("onBeforeNetworkRequest", data);
      log("info", "Request ".concat(data.requestId, ": Sending request."), data.payload);
    },
    logOnNetworkResponse: function logOnNetworkResponse(data) {
      notifyMonitors("onNetworkResponse", data);
      var messagesSuffix = data.parsedBody || data.body ? "response body:" : "no response body.";
      log("info", "Request ".concat(data.requestId, ": Received response with status code ").concat(data.statusCode, " and ").concat(messagesSuffix), data.parsedBody || data.body);
    },
    logOnNetworkError: function logOnNetworkError(data) {
      notifyMonitors("onNetworkError", data);
      log("error", "Request ".concat(data.requestId, ": Network request failed."), data.error);
    },

    /**
     * Outputs informational message to the web console. In some
     * browsers a small "i" icon is displayed next to these items
     * in the web console's log.
     * @param {...*} arg Any argument to be logged.
     */
    info: log.bind(null, "info"),

    /**
     * Outputs a warning message to the web console.
     * @param {...*} arg Any argument to be logged.
     */
    warn: log.bind(null, "warn"),

    /**
     * Outputs an error message to the web console.
     * @param {...*} arg Any argument to be logged.
     */
    error: log.bind(null, "error")
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var EVENT_CANCELLATION_MESSAGE = "Event was canceled because the onBeforeEventSend callback returned false.";

var createEventManager = function createEventManager(_ref114) {
  var config = _ref114.config,
      logger = _ref114.logger,
      lifecycle = _ref114.lifecycle,
      consent = _ref114.consent,
      createEvent = _ref114.createEvent,
      createDataCollectionRequestPayload = _ref114.createDataCollectionRequestPayload,
      createDataCollectionRequest = _ref114.createDataCollectionRequest,
      sendEdgeNetworkRequest = _ref114.sendEdgeNetworkRequest,
      _applyResponse = _ref114.applyResponse;
  var onBeforeEventSend = config.onBeforeEventSend;
  return {
    createEvent: createEvent,

    /**
     * Sends an event. This includes running the event and payload through
     * the appropriate lifecycle hooks, sending the request to the server,
     * and handling the response.
     * @param {Object} event This will be JSON stringified and used inside
     * the request payload.
     * @param {Object} [options]
     * @param {boolean} [options.renderDecisions=false]
     * @param {Array} [options.decisionScopes] Note: this option will soon
     * be deprecated, please use *personalization.decisionScopes* instead
     * @param {Object} [options.personalization]
     * @param {Object} [options.serverState]
     * This will be passed to components
     * so they can take appropriate action.
     * @returns {*}
     */
    sendEvent: function sendEvent(event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$renderDecisi3 = options.renderDecisions,
          renderDecisions = _options$renderDecisi3 === void 0 ? false : _options$renderDecisi3,
          decisionScopes = options.decisionScopes,
          personalization = options.personalization;
      var payload = createDataCollectionRequestPayload();
      var request = createDataCollectionRequest(payload);
      var onResponseCallbackAggregator = createCallbackAggregator();
      var onRequestFailureCallbackAggregator = createCallbackAggregator();
      return lifecycle.onBeforeEvent({
        event: event,
        renderDecisions: renderDecisions,
        decisionScopes: decisionScopes,
        personalization: personalization,
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: onRequestFailureCallbackAggregator.add
      }).then(function () {
        payload.addEvent(event);
        return consent.awaitConsent();
      }).then(function () {
        try {
          // NOTE: this calls onBeforeEventSend callback (if configured)
          event.finalize(onBeforeEventSend);
        } catch (error) {
          var 
          };

          onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
          return onRequestFailureCallbackAggregator.call({
            error: error
          }).then(throwError, throwError);
        } // if the callback returns false, the event should not be sent


        if (!event.shouldSend()) {
          onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
          logger.info(EVENT_CANCELLATION_MESSAGE);
          var error = new Error(EVENT_CANCELLATION_MESSAGE);
          return onRequestFailureCallbackAggregator.call({
            error: error
     
          });
        }

        return sendEdgeNetworkRequest({
          request: request,
          runOnResponseCallbacks: onResponseCallbackAggregator.call,
          runOnRequestFailureCallbacks: onRequestFailureCallbackAggregator.call
        });
      });
    },
    applyResponse: function applyResponse(event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$renderDecisi4 = options.renderDecisions,
          renderDecisions = _options$renderDecisi4 === void 0 ? false : _options$renderDecisi4,
          _options$responseHead2 = options.responseHeaders,
          responseHeaders = _options$responseHead2 === void 0 ? {} : _options$responseHead2,
          _options$responseBody2 = options.responseBody,
          responseBody = _options$responseBody2 === void 0 ? {
        handle: []
      } : _options$responseBody2;
      var payload = createDataCollectionRequestPayload();
      var request = createDataCollectionRequest(payload);
      var onResponseCallbackAggregator = createCallbackAggregator();
      return lifecycle.onBeforeEvent({
        event: event,
        renderDecisions: renderDecisions,
        decisionScopes: [PAGE_WIDE_SCOPE],
        personalization: {},
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: noop
      }).then(function () {
        payload.addEvent(event);
        return _applyResponse({
          request: request,
          responseHeaders: responseHeaders,
          responseBody: responseBody,
          runOnResponseCallbacks: onResponseCallbackAggregator.call
        });
      });
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var STATE_STORE_HANDLE_TYPE = "state:store";

var createCookieTransfer = function createCookieTransfer(_ref115) {
  var cookieJar = _ref115.cookieJar,
      shouldTransferCookie = _ref115.shouldTransferCookie,
      apexDomain = _ref115.apexDomain,
      dateProvider = _ref115.dateProvider;
  return {
    /**
     * When sending to a third-party endpoint, the endpoint won't be able to
     * access first-party cookies, therefore we transfer cookies into
     * the request body so they can be read by the server.
     */
    cookiesToPayload: function cookiesToPayload(payload, endpointDomain) {
      var isEndpointFirstParty = endsWith(endpointDomain, apexDomain);
      var state = {
        domain: apexDomain,
        cookiesEnabled: true
      }; // If the endpoint is first-party, there's no need to transfer cookies
      // to the payload since they'll be automatically passed through cookie
      // headers.

      if (!isEndpointFirstParty) {
        var cookies = cookieJar.get();
        var entries = Object.keys(cookies).filter(shouldTransfe};
        });

        if (entries.length) {
          state.entries = entries;
        }
      }

      payload.mergeState(state);
    },

    /**
     * When receiving from a third-party endpoint, the endpoint won't be able to
     * write first-party cookies, therefore we write first-party cookies
     * as directed in the response body.
     */
    responseToCookies: function responseToCookies(response) {
      response.getPayloadsByType(STATE_STORE_HANDLE_TYPE).forEach(function (stateItem) {
        var options = {
          domain: apexDomain
        };
        var sameSite = stateItem.attrs && stateItem.attrs.SameSite && stateItem.attrs.SameSite.toLowerCase();

        if (stateItem.maxAge !== undefined) {
          // cookieJar expects "expires" as a date object
          options.expires = new Date(dateProvider().getTime() + stateItem.maxAge * 1000);
        }

        if (sameSite !== undefined) {
          options.sameSite = sameSite;
        } // When sameSite is set to none, the secure flag must be set.
        // Experience edge will not set the secure flag in these cases.


        if (sameSite === "none") {
          options.secure = true;
        }

        cookieJar.set(stateItem.key, stateItem.value, options);
      });
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var MBOX_EDGE_CLUSTER = "mboxEdgeCluster";
var AT_QA_MODE = "at_qa_mode";
var MBOX = "mbox";
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectShouldTransferCookie = function injectShouldTransferCookie(_ref116) {
  var orgId = _ref116.orgId,
      targetMigrationEnabled = _ref116.targetMigrationEnabl== MBOX;
  };
};

var apiVersion = "v1";

var mergeLifecycleResponses = function mergeLifecycleResponses(returnValues) {
  // Merges all returned objects from all `onResponse` callbacks into
  // a single object that can later be returned to the customer.
  var lifecycleOnResponseReturnValues = returnValues.shift() || [];
  var consumerOnResponseReturnValues = returnValues.shift() || [];
  var lifecycleOnBeforeRequestReturnValues = returnValues;
  return _reactorObjectAssign["default"].apply(void 0, [{}].concat(_toConsumableArray(lifecycleOnResponseReturnValues), _toConsumableArray(consumerOnResponseReturnValues), _toConsumableArray(lifecycleOnBeforeRequestReturnValues)));
};

var handleRequestFailure = function handleRequestFailure(onRequestFailureCallbackAggregator) {
  return function (error) {
    // Regardless of whether the network call failed, an unexpected status
    // code was returned, or the response body was malformed, we want to call
    // the onRequestFailure callbacks, but still throw the exception.
    var throwError = function throwError() {
      throw error;
    };

    return onRequestFailureCallbackAggregator.call({
      error: error
    }).then(throwError, throwError);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendEdgeNetworkRequest = function injectSendEdgeNetworkRequest(_ref117) {
  var config = _ref117.config,
      lifecycle = _ref117.lifecycle,
      cookieTransfer = _ref117.cookieTransfer,
      sendNetworkRequest = _ref117.sendNetworkRequest,
      createResponse = _ref117.createResponse,
      processWarningsAndErrors = _ref117.processWarningsAndErrors,
      getLocationHint = _ref117.getLocationHint,
      getAssuranceValidationTokenParams = _ref117.getAssuranceValidationTokenParams;
  var edgeDomain = config.edgeDomain,
      edgeBasePath = config.edgeBasePath,
      edgeConfigId = config.edgeConfigId;
  /**
   * Sends a network request that is aware of payload interfaces,
   * lifecycle methods, configured edge domains, response structures, etc.
   */

  return function (_ref118) {
    var request = _ref118.request,
        _ref118$runOnResponse = _ref118.runOnResponseCallbacks,
        runOnResponseCallbacks = _ref118$runOnResponse === void 0 ? noop : _ref118$runOnResponse,
        _ref118$runOnRequestF = _ref118.runOnRequestFailureCallbacks,
        runOnRequestFailureCallbacks = _ref118$runOnRequestF === void 0 ? noop : _ref118$runOnRequestF;
    var onResponseCallbackAggregator = createCallbackAggregator();
    onResponseCallbackAggregator.add(lifecycle.onResponse);
    onResponseCallbackAggregator.add(runOnResponseCallbacks);
    var onRequestFailureCallbackAggregator = createCallbackAggregator();
    onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
    onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);
    return lifecycle.onBeforeRequest({
      request: request,
      onResponse: onResponseCallbackAggregator.add,
      onRequestFailure: onRequestFailureCallbackAggregator.add
    }).then(function () {
      var endpointDomain = request.getUseIdThirdPartyDomain() ? ID_THIRD_PARTY : edgeDomain;
      var locationHint = getLocationHint();
      var edgeBasePathWithLocationHint = locationHint ? "".concat(edgeBasePath, "/").concat(locationHint) : edgeBasePath;
      var url = "https://".concat(endpointDomain, "/").concat(edgeBasePathWithLocationHint, "/").concat(apiVersion, "/").concat(request.getAction(), "?configId=").concat(edgeConfigId, "&requestId=").concat(request.getId()).concat(getAssuranceValidationTokenParams());
      cookieTransfer.cookiesToPayload(request.getPayload(), endpointDomain);
      return sendNetworkRequest({
        requestId: request.getId(),
        url: url,
        payload: request.getPayload(),
        useSendBeacon: request.getUseSendBeacon()
      });
    }).then(function (networkResponse) {
      processWarningsAndErrors(networkResponse);
      return networkResponse;
    })["catch"](handleRequestFailure(onRequestFailureCallbackAggregator)).then(function (_ref119) {
      var parsedBody = _ref119.parsedBody,
          getHeader = _ref119.getHeader;
      // Note that networkResponse.parsedBody may be undefined if it was a
      // 204 No Content response. That's fine.
      var response = createResponse({
        content: parsedBody,
        getHeader: getHeader
      });
      cookieTransfer.responseToCookies(response); // Notice we're calling the onResponse lifecycle method even if there are errors
      // inside the response body. This is because the full request didn't actually fail--
      // only portions of it that are considered non-fatal (a specific, non-critical
      // Konductor plugin, for example).

      return onResponseCallbackAggregator.call({
        response: response
      }).then(mergeLifecycleResponses);
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var NO_CONTENT = 204;
var TOO_MANY_REQUESTS = 429;
var BAD_GATEWAY = 502;
var SERVICE_UNAVAILABLE = 503;
var GATEWAY_TIMEOUT = 504;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var MESSAGE_PREFIX = "The server responded with a";

var injectProcessWarningsAndErrors = function injectProcessWarningsAndErrors(_ref120) {
  var logger = _ref120.logger;
  return function (networkResponse) {
    var statusCode = networkResponse.statusCode,
        body = networkResponse.body,
        parsedBody = networkResponse.parsedBody;

    if (statusCode < 200 || statusCode >= 300 || !parsedBody && statusCode !== NO_CONTENT || parsedBody && !Array.isArray(parsedBody.handle)) {
      var bodyToLog = parsedBody ? JSON.stringify(parsedBody, null, 2) : body;
      var messageSuffix = bodyToLog ? "response body:\n".concat(bodyToLog) : "no response body.";
      throw new Error("".concat(MESSAGE_PREFIX, " status code ").concat(statusCode, " and ").concat(messageSuffix));
    }

    if (parsedBody) {
      var _parsedBody$warnings = parsedBody.warnings,
          warnings = _parsedBody$warnings === void 0 ? [] : _parsedBody$warnings,
          _parsedBody$errors = parsedBody.errors,
          errors = _parsedBody$errors === void 0 ? [] : _parsedBody$errors;
      warnings.forEach(function (warning) {
        logger.warn("".concat(MESSAGE_PREFIX, " warning:"), warning);
      });
      eror);
      });
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectGetLocationHint = function injectGetLocationHint(_ref121) {
  var orgId = _ref121.orgId,
      cookieJar = _ref121.cookieJar;
  var clusterCookieName = getNamespacedCookieName(orgId, CLUSTER);

  var fromClusterCookie = function fromClusterCookie() {
    return cookieJar.get(clusterCookieName);
  };

  var fromTarget = function fromTarget() {
    var mboxEdgeCluster = cookieJar.get(MBOX_EDGE_CLUSTER);

    if (mboxEdgeCluster) {
      return "t".concat(mboxEdgeCluster);
    }

    return undefined;
  arget();
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var MAX_RETRIES = 3;
var RETRYABLE_STATUS_CODES = [TOO_MANY_REQUESTS, SERVICE_UNAVAILABLE, BAD_GATEWAY, GATEWAY_TIMEOUT]; // These rules are in accordance with
// https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses

var isRequestRetryable = function isRequestRetryable(_ref122) {
  var response = _ref122.response,
      retriesAttempted = _ref122.retriesAttempted;
  return retriesAttempted < MAX_RETRIES && includes(RETRYABLE_STATUS_CODES, response.statusCode);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var FIRST_DELAY_MILLIS = 1000;
var INCREMENTAL_DELAY_MILLIS = 1000; // When the target delay is randomized, make it within the range of this percentage above or below the target delay.

var MAX_RANDOM_VARIANCE_PERCENTAGE = 0.3;

var calculateRetryDelay = function calculateRetryDelay(retriesAttempted) {
  var targetDelay = FIRST_DELAY_MILLIS + retriesAttempted * INCREMENTAL_DELAY_MILLIS;
  var maxVariance = targetDelay * MAX_RANDOM_VARIANCE_PERCENTAGE;
  var minDelay = targetDelay - maxVariance;
  var maxDelay = targetDelay + maxVariance;
  var randomizedDelayWithinRange = Math.round(minDelay + Math.random() * (maxDelay - minDelay));
  return randomizedDelayWithinRange;
};

var getDelayFromHeader = function getDelayFromHeader(response) {
  // According to the HTTP spec, if the header is defined, its value will be a string that
  // represents either:
  //  * An integer indicating the number of seconds to delay.
  //  * A date after which a retry may occur. The date would be in HTTP-date
  //    format (https://tools.ietf.org/html/rfc7231#section-7.1.1.1). When debugging, it can
  //    be helpful to know that this is the same format that a JavaScript date's
  //    toGMTString() returns.
  var headerValue = response.getHeader(RETRY_AFTER);
  var delayInMillis;

  if (headerValue) {
    var headerValueInt = parseInt(headerValue, 10);

    if (isInteger(headerValueInt)) {
      delayInMillis = headerValueInt * 1000;
    } else {
      delayInMillis = Math.max(0, new Date(headerValue).getTime() - new Date().getTime());
    }
  }

  return delayInMillis;
}; // These rules are in accordance with
// https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses
// For retry delays that don't come from a Retry-After response header, we try to stick with the following best
// practices outlined in https://docs.microsoft.com/en-us/azure/architecture/best-practices/transient-faults:
//  * Incremental retry
//  * Random interval


var getRequestRetryDelay = function getRequestRetryDelay(_ref123) {
  var response = _ref123.response,
      retriesAttempted = _ref123.retriesAttempted;
  // Technically, only 429 or 503 responses should have a Retry-After header, but we'll respect the
  // header if we find it on any response.
  var delayInMillis = getDelayFromHeader(response); // Note that the value of delay may be 0 at this point, which would be a valid delay we want to use
  // and not override, which is why we don't do:
  // if (!delay) { ... }

  if (delayInMillis === undefined) {
    delayInMillis = calculateRetryDelay(retriesAttempted);
  }

  return delayInMillis;
};

var HTTP_STATUS_OK = 200;

var injectApplyResponse = function injectApplyResponse(_ref124) {
  var cookieTransfer = _ref124.cookieTransfer,
      lifecycle = _ref124.lifecycle,
      createResponse = _ref124.createResponse,
      processWarningsAndErrors = _ref124.processWarningsAndErrors;
  return function (_ref125) {
    var request = _ref125.request,
        responseHeaders = _ref125.responseHeaders,
        responseBody = _ref125.responseBody,
        _ref125$runOnResponse = _ref125.runOnResponseCallbacks,
        runOnResponseCallbacks = _ref125$runOnResponse === void 0 ? noop : _ref125$runOnResponse,
        _ref125$runOnRequestF = _ref125.runOnRequestFailureCallbacks,
        runOnRequestFailureCallbacks = _ref125$runOnRequestF === void 0 ? noop : _ref125$runOnRequestF;
    var onResponseCallbackAggregator = createCallbackAggregator();
    onResponseCallbackAggregator.add(lifecycle.onResponse);
    onResponseCallbackAggregator.add(runOnResponseCallbacks);
    var onRequestFailureCallbackAggregator = createCallbackAggregator();
    onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
    onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);

    var getHeader = function getHeader(key) {
      return responseHeaders[key];
    };

    return lifecycle.onBeforeRequest({
      request: request,
      onResponse: onResponseCallbackAggregator.add,
      onRequestFailure: onRequestFailureCallbackAggregator.add   });
    })["catch"](handleRequestFailure(onRequestFailureCallbackAggregator)).then(function () {
      var response = createResponse({
        content: responseBody,
        getHeader: getHeader
      }); // This will clobber any cookies set via HTTP from the server.  So care should be given to remove any state:store handles if that is not desirable

      cookieTransfer.responseToCookies(response);
      return onResponseCallbackAggregator.call({
        response: response
      }).then(mergeLifecycleResponses);
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createNamespacedStorage = injectStorage(window);
var _window = window,
    console = _window.console,
    fetch = _window.fetch,
    navigator$1 = _window.navigator,
    XMLHttpRequest = _window.XMLHttpRequest; // set this up as a function so that monitors can be added at anytime

var coreConfigValidators = createCoreConfigs();
var apexDomain = getApexDomain(window, _reactorCookie["default"]);
var sendFetchRequest = isFunction(fetch) ? injectSendFetchRequest({
  fetch: fetch
}) : injectSendXhrRequest({
  XMLHttpRequest: XMLHttpRequest
});
var fireReferrerHideableImage = injectFireReferrerHideableImage();
var getAssuranceValidationTokenParams = createGetAssuranceValidationTokenParams({
  window: window,
  createNamespacedStorage: createNamespacedStorage
});

var createExecuteCommand = function createExecuteCommand(_ref126) {
  var instanceName = _ref126.instanceName,
      _ref126$logController = _ref126.logController,
      setDebugEnabled = _ref126$logController.setDebugEnabled,
      logger = _ref126$logController.logger,
      createComponentLogger = _ref126$logController.createComponentLogger;
  var componentRegistry = createComponentRegistry();
  var lifecycle = createLifecycle(componentRegistry);

  var setDebugCommand = function setDebugCommand(options) {
    setDebugEnabled(options.enabled, {
      fromConfig: false
    });
  };

  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: _reactorCookie["default"]
  });

  var configureCommand = function configureCommand(options) {
    var config = buildAndValidateConfig({
      options: options,
      componentCreators: componentCreators,
      coreConfigValidators: coreConfigValidators,
      createConfig: createConfig,
      logger: logger,
      setDebugEnabled: setDebugEnabled
    });
    var orgId = config.orgId,
        targetMigrationEnabled = config.targetMigrationEnabled;
    var shouldTransferCookie = injectShouldTransferCookie({
      orgId: orgId,
      targetMigrationEnabled: targetMigrationEnabled
    });
    var cookieTransfer = createCookieTransfer({
      cookieJar: loggingCookieJar,
      shouldTransferCookie: shouldTransferCookie,
      apexDomain: apexDomain,
      dateProvider: function dateProvider() {
        return new Date();
      }
    });
    var sendBeaconRequest = isFunction(navigator$1.sendBeacon) ? injectSendBeaconRequest({
      // Without the bind(), the browser will complain about an
      // illegal invocation.
      sendBeacon: navigator$1.sendBeacon.bind(navigator$1),
      sendFetchRequest: sendFetchRequest,
      logger: logger
    }) : sendFetchRequest;
    var sendNetworkRequest = injectSendNetworkRequest({
      logger: logger,
      sendFetchRequest: sendFetchRequest,
      sendBeaconRequest: sendBeaconRequest,
      isRequestRetryable: isRequestRetryable,
      getRequestRetryDelay: getRequestRetryDelay
    });
    var processWarningsAndErrors = injectProcessWarningsAndErrors({
      logger: logger
    });
    var extractEdgeInfo = injectExtractEdgeInfo({
      logger: logger
    });
    var createResponse = injectCreateResponse({
      extractEdgeInfo: extractEdgeInfo
    });
    var getLocationHint = injectGetLocationHint({
      orgId: orgId,
      cookieJar: _reactorCookie["default"]
    });
    var sendEdgeNetworkRequest = injectSendEdgeNetworkRequest({
      config: config,
      lifecycle: lifecycle,
      cookieTransfer: cookieTransfer,
      sendNetworkRequest: sendNetworkRequest,
      createResponse: createResponse,
      processWarningsAndErrors: processWarningsAndErrors,
      getLocationHint: getLocationHint,
      getAssuranceValidationTokenParams: getAssuranceValidationTokenParams
    });
    var applyResponse = injectApplyResponse({
      lifecycle: lifecycle,
      cookieTransfer: cookieTransfer,
      createResponse: createResponse,
      processWarningsAndErrors: processWarningsAndErrors
    });
    var generalConsentState = createConsentStateMachine({
      logger: logger
    });
    var consent = createConsent({
      generalConsentState: generalConsentState,
      logger: logger
    });
    var eventManager = createEventManager({
      config: config,
      logger: logger,
      lifecycle: lifecycle,
      consent: consent,
      createEvent: createEvent,
      createDataCollectionRequestPayload: createDataCollectionRequestPayload,
      createDataCollectionRequest: createDataCollectionRequest,
      sendEdgeNetworkRequest: sendEdgeNetworkRequest,
      applyResponse: applyResponse
    });
    return initializeComponents({
      componentCreators: componentCreators,
      lifecycle: lifecycle,
      componentRegistry: componentRegistry,
      getImmediatelyAvailableTools: function getImmediatelyAvailableTools(componentName) {
        var componentLogger = createComponentLogger(componentName);
        return {
          config: config,
          componentRegistry: componentRegistry,
          consent: consent,
          eventManager: eventManager,
          fireReferrerHideableImage: fireReferrerHideableImage,
          logger: componentLogger,
          lifecycle: lifecycle,
          sendEdgeNetworkRequest: sendEdgeNetworkRequest,
          handleError: injectHandleError({
            errorPrefix: "[".concat(instanceName, "] [").concat(componentName, "]"),
            logger: componentLogger
          }),
          createNamespacedStorage: createNamespacedStorage,
          apexDomain: apexDomain
        };
      }
    });
  };

  var handleError = injectHandleError({
    errorPrefix: "[".concat(instanceName, "]"),
    logger: logger
  });
  var executeCommand = injectExecuteCommand({
    logger: logger,
    configureCommand: configureCommand,
    setDebugCommand: setDebugCommand,
    handleError: handleError,
    validateCommandOptions: validateCommandOptions
  });
  return executeCommand;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var _window2 = window,
    console$1 = _window2.console;
var createNamespacedStorage$1 = injectStorage(window);

var createInstance = function createInstance() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var eventOptionsValidator = boundObjectOf({
    name: boundString()["default"]("alloy"),
    monitors: boundArrayOf(boundObjectOf({}))["default"]([])
  }).noUnknownFields();

  var _eventOptionsValidato = eventOptionsValidator(options),
      name = _eventOptionsValidato.name,
      monitors = _eventOptionsValidato.monitors; // this is a function so that window.__alloyMonitors can be set or added to at any time
  // eslint-disable-next-line no-underscore-dangle


  var gnitors);
  };

  var logController = createLogController({
    console: console$1,
    locationSearch: window.location.search,
    createLogger: createLogger,
    instanceName: name,
    createNamespacedStorage: createNamespacedStorage$1,
    getMonitors: getMonitors
  });
  var instance = createExecuteCommand({
    instanceName: name,
    logController: logController
  });
  logController.logger.logOnInstanceCreated({
    instance: instance
  });
  return instance;
};

exports.createInstance = createInstance;
          }

        },
        "adobe-alloy/dist/lib/instanceManager/createInstanceManager.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
module.exports = function (_ref) {
  var turbine = _ref.turbine,
      window = _ref.window,
      createInstance = _ref.createInstance,
      _createEventMergeId = _ref.createEventMergeId,
      orgId = _ref.orgId,
      wrapOnBeforeEventSend = _ref.wrapOnBeforeEventSend;

  var _turbine$getExtension = turbine.getExtensionSettings(),
      instancesSettings = _turbine$getExtension.instances;

  var instanceByName = {};
  instancesSettings.forEach(function (_ref2) {
    var name = _ref2.name,
        edgeConfigId = _ref2.edgeConfigId,
        stagingEdgeConfigId = _ref2.stagingEdgeConfigId,
        developmentEdgeConfigId = _ref2.developmentEdgeConfigId,
        onBeforeEventSend = _ref2.onBeforeEventSend,
        options = _objectWithoutProperties(_ref2, ["name", "edgeConfigId", "stagingEdgeConfigId", "developmentEdgeConfigId", "onBeforeEventSend"]);

    var instance = createInstance({
      name: name
    });
    window[name] = instance;
    instanceByName[name] = instance;
    var computedEdgeConfigId = turbine.environment.stage === "development" && developmentEdgeConfigId || turbine.environment.stage === "staging" && stagingEdgeConfigId || edgeConfigId;
    instance("configure", _objectSpread(_objectSpread({}, options), {}, {
      edgeConfigId: computedEdgeConfigId,
      debugEnabled: turbine.debugEnabled,
      orgId: options.orgId || orgId,
      onBeforeEventSend: wrapOnBeforeEventSend(onBeforeEventSend)
    }));
    turbine.on   });
    });
  });
  return {
    /**
     * Returns an instance by name.
     * @param name
     * @returns {Function}
     */
    getInstance: function getInstance(name) {
      return instanceByName[name];
    },

    /**
     * Synchronously creates an event merge ID.
     * @returns {string}
     */
    createEeId();
    }
  };
};
          }

        },
        "adobe-alloy/dist/lib/instanceManager/injectWrapOnBeforeEventSend.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
module.exports = function (_ref) {
  var version = _ref.version;
  return function (onBeforeEventSend) {
    return function (content) {
      content.xdm.implementationDetails.name = "".concat(content.xdm.implementationDetails.name, "/reactor");
      content.xdm.implementationDetails.version = "".concat(content.xdm.implementationDetails.version, "+").concat(version);

      if (onBeforeEventSend) {
        return onBeforeEventSend(content);
      }

      return undefined;
    };
  };
};
          }

        }
      }
    },
    "demandbase": {
      "displayName": "Demandbase",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP9dfd1b7a8a1143469a4eec0ddec371e4/",
      "settings": {
        "apikey": "Q6jxBOtslPmRSMTLkR7lYV2kEjlF1Q0EwCsOoOSA",
        "timeout": "700",
        "targetEnabled": false,
        "demandbaseDataElement1": "demandbase_sid:company_name:industry:sub_industry:employee_range:revenue_range:audience:audience_segment",
        "demandbaseDataElement2": "state:city:country_name:marketing_alias:watch_list_account_type:watch_list_account_status:watch_list_campaign_code:watch_list_account_owner",
        "demandbaseDataElement3": ":::::::",
        "demandbaseDataElement4": ":::::::",
        "demandbaseDataElement5": ":::::::",
        "nonTargetAccountDefault": "(Non-Target Account)",
        "nonCompanyVisitorDefault": "(Non-Company Visitor)",
        "targetAccountEmptyDefault": "(In List No Value)",
        "attributeUnavailableDefault": "(Unavailable)"
      },
      "modules": {
        "demandbase/dist/lib/dataElements/demandbasedataelement4.js": {
          "name": "demandbasedataelement4",
          "displayName": "demandbaseDataElement4",
          "script": function(module, exports, require, turbine) {
'use strict';
var dataElementConfig = require('../config/dataElements');
var localStorageHelper = require('../helpers/localStorage');
// NOTE: See https://developer.adobelaunch.com/guides/extensions/data-elements/
module.exports = function (settings) {
    return localStorageHelper.getItem(dataElementConfig.prefix + '4');
};
//# sourceMappingURL=demandbasedataelement4.js.map
          }

        },
        "demandbase/dist/lib/dataElements/demandbasedataelement3.js": {
          "name": "demandbasedataelement3",
          "displayName": "demandbaseDataElement3",
          "script": function(module, exports, require, turbine) {
'use strict';
var dataElementConfig = require('../config/dataElements');
var localStorageHelper = require('../helpers/localStorage');
// NOTE: See https://developer.adobelaunch.com/guides/extensions/data-elements/
module.exports = function (settings) {
    return localStorageHelper.getItem(dataElementConfig.prefix + '3');
};
//# sourceMappingURL=demandbasedataelement3.js.map
          }

        },
        "demandbase/dist/lib/dataElements/demandbasedataelement5.js": {
          "name": "demandbasedataelement5",
          "displayName": "demandbaseDataElement5",
          "script": function(module, exports, require, turbine) {
'use strict';
var dataElementConfig = require('../config/dataElements');
var localStorageHelper = require('../helpers/localStorage');
// NOTE: See https://developer.adobelaunch.com/guides/extensions/data-elements/
module.exports = function (settings) {
    return localStorageHelper.getItem(dataElementConfig.prefix + '5');
};
//# sourceMappingURL=demandbasedataelement5.js.map
          }

        },
        "demandbase/dist/lib/dataElements/demandbasedataelement2.js": {
          "name": "demandbasedataelement2",
          "displayName": "demandbaseDataElement2",
          "script": function(module, exports, require, turbine) {
'use strict';
var dataElementConfig = require('../config/dataElements');
var localStorageHelper = require('../helpers/localStorage');
// NOTE: See https://developer.adobelaunch.com/guides/extensions/data-elements/
module.exports = function (settings) {
    return localStorageHelper.getItem(dataElementConfig.prefix + '2');
};
//# sourceMappingURL=demandbasedataelement2.js.map
          }

        },
        "demandbase/dist/lib/dataElements/demandbasedataelement1.js": {
          "name": "demandbasedataelement1",
          "displayName": "demandbaseDataElement1",
          "script": function(module, exports, require, turbine) {
'use strict';
var dataElementConfig = require('../config/dataElements');
var localStorageHelper = require('../helpers/localStorage');
// NOTE: See https://developer.adobelaunch.com/guides/extensions/data-elements/
moduix + '1');
};
//# sourceMappingURL=demandbasedataelement1.js.map
          }

        },
        "demandbase/dist/lib/dataElements/demandbasedataelementindustry.js": {
          "name": "demandbasedataelementindustry",
          "displayName": "demandbaseDataElementIndustry",
          "script": function(module, exports, require, turbine) {
'use strict';
var localStorageHelper = require('../helpers/localStorage');
// NOTE: See https://developer.adobelaunch.com/guides/extensions/data-elements/
modundustry');
};
//# sourceMappingURL=demandbasedataelementindustry.js.map
          }

        },
        "demandbase/dist/lib/events/apiCallFinishedSuccessFailOrTimeout.js": {
          "name": "api-call-finished-success-fail-or-timeout",
          "displayName": "API Call Finished (Success, Fail, or Timeout)",
          "script": function(module, exports, require, turbine) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable require-jsdoc */
var window = require("@adobe/reactor-window");
var eventConfig = require('../config/events');
module.exports = function (settings, trigger) {
    function handleEvent() {
        trigger();
        window.removeEventListener(eventConfig.resolveApiCallName, handleEvent);
    }
    window.addEventListener(eventConfig.resolveApiCallName, handleEvent, false);
};
//# sourceMappingURL=apiCallFinishedSuccessFailOrTimeout.js.map
          }

        },
        "demandbase/dist/lib/actions/calldemandbaseipapi.js": {
          "name": "calldemandbaseipapi",
          "displayName": "callDemandbaseIpApi",
          "script": function(module, exports, require, turbine) {
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("@adobe/reactor-promise");
var window = require("@adobe/reactor-window");
var eventConfig = require('../config/events');
var asyncHelper = require('../helpers/async');
var dataElementHelper = require('../helpers/dataElement');
var demandbaseIpApiHelper = require('../helpers/demandbaseIpApi');
var httpHelper = require('../helpers/http');
var localStorageHelper = require('../helpers/localStorage');
var objectHelper = require('../helpers/object');
var errorReporterModule = require('../helpers/errorReporter');
/* eslint-disable */
// CustomEvent polyfill for failing IE >= 9
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
errorReporterModule.wrap(functiEvent;
    })();
});
/* eslint-enable */
module.exports = function (settings) {
    var extensionSettings = turbine.getExtensionSettings();
    errorReporte   });
    }, extensionSettings);
};
/**
 * Makes demandbaseIpApi request and saves the reponse to local storage
 * for dataElements. Returns a promise so that we can wait for the response
 * then fire an event
 * @param  {object} extensionSettings
 * @return {Promise}
 */
function makeRequestAndSave(extensionSettings) {
    var oldProfile = localStorageHelper.getItem('raw') || {};
    var dataElementSets = dataElementHelper.buildSets(extensionSettings);
    // race a timeout based on extensionSettings with the API call. If API call
    // takes too long, the sleep promise wins and no data is set :(
    return Promise.race([
        asyncHelper.sleep(extensionSettings.timeout),
        new Promise(function (resolve) {
            httpHelper
                .get(demandbaseIpApiHelper.buildUrl(extensionSettings.apikey, extensionSettings.targetEnabled))
                .then(function (data) {
                // flatten new IP API response
                var newProfile = objectHelper.flatten(data);
                // save to localStorage if this data is better
                if (shouldOverwriteLocalStorage(oldProfile, newProfile)) {
                    saveToLocalStorage(dataElementSets, newProfile, extensionSettings);
                }
                // resolve promise for adobe analytics
                resolve(newProfile);
            })
                     });
        }),
    ]);
}
/**
 * Checks information_level to see if we need to overwrite the last
 * profile in local storage with a better resolution
 * @param  {object} oldProfile last one from local storage
 * @param  {object} newProfile new one from IP API
 * @return {boolean}
 */
function shouldOverwriteLocalStorage(oldProfile, newProfile) {
    if (oldProfile.information_level !== 'Detailed')
        return true;
    if (newProfile.information_level === 'Detailed')
        return true;
    return false;
}
/**
 * [saveToLocalStorage description]
 * @param  {array} dataElementSets sets of the data elements format to save
 * @param  {object} newProfile     flattened pofile from IP API
 * @param  {object} extensionSettings
 */
function saveToLocalStorage(dataElementSets, newProfile, extensionSettings) {
    localStorageHelper.setItem('raw', newProfile);
    for (var i = 0; i < dataElementSets.length; i++) {
        if (extensionSettings.targetEnabled) {
            configureForTarget(dataElementSets[i], newProfile);
        }
        localStorageHelper.setItem(dataElementSets[i].name, dataElementHelper.buildDelimitedDataString(extensionSettings, newProfile, dataElementSets[i]));
    }
}
/**
 * [configureForTarget description]
 * @param  {array} dataElementSet sets of the data elements format to save
 * @param  {object} newProfile     flattened pofile from IP API
 */
function configureForTarget(dataElementSet, newProfile) {
    for (var i = 0; i < dataElementSet.attributes.length; i++) {
        if (dataElementSet.attributes[i] === 'demandbase_sid') {
            localStorageHelper.setItem('demandbase_sid', newProfile[dataElementSet.attributes[i]]);
        }
        else {
            localStorageHelper.setItem('demandbase_' + dataElementSet.attributes[i], newProfile[dataElementSet.attributes[i]]);
        }
    }
}
module.exports.makeRequestAndSave = makeRequestAndSave;
module.exports.shouldOverwriteLocalStorage = shouldOverwriteLocalStorage;
module.exports.configureForTarget = configureForTarget;
module.exports.saveToLocalStorage = saveToLocalStorage;
//# sourceMappingURL=calldemandbaseipapi.js.map
          }

        },
        "demandbase/dist/lib/config/dataElements.js": {
          "script": function(module, exports, require, turbine) {
module.exports = {
    /**
     * The number of data elements we are writing our data strings to
     * @type {Number}
     */
    quantity: 5,
    /**
     * A string prepend to prepend to data elelent names (must match the
     * extension config settings!)
     * @type {String}
     */
    prefix: 'demandbaseDataElement',
};
//# sourceMappingURL=dataElements.js.map
          }

        },
        "demandbase/dist/lib/helpers/localStorage.js": {
          "script": function(module, exports, require, turbine) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var window = require("@adobe/reactor-window");
var localStoragePrefix = require('../config/localStorage').prefix;
module.exports = {
    /**
     * Prepends the right prefix and stringifies json, then writes to
     * localStorage
     * @param  {string} key                  key to use to access item
     * @param  {ibject|array|string} payload raw payload (gets stringified)
     */
     }
    },
    /**
     * Gets item from localStorage using prefix and JSON.parses it
     * @param  {string} key key to use to access item
     * @return {object|array|string}
     */
     }
    },
};
//# sourceMappingURL=localStorage.js.map
          }

        },
        "demandbase/dist/lib/config/localStorage.js": {
          "script": function(module, exports, require, turbine) {
module.exports = {
    /**
     * String to prepend to the local storage strings to give us a sort of
     * isolated namespace
     * @type {String}
     */
    prefix: 'Demandbase.AdobeLaunch.',
};
//# sourceMappingURL=localStorage.js.map
          }

        },
        "demandbase/dist/lib/config/events.js": {
          "script": function(module, exports, require, turbine) {
module.exports = {
    /**
     * Demandbase API call finished / failed / timed out event name
     * @type {String}
     */
    resolveApiCallName: 'Demandbase.AdobeLaunch.resolveApiCall',
};
//# sourceMappingURL=events.js.map
          }

        },
        "demandbase/dist/lib/helpers/async.js": {
          "script": function(module, exports, require, turbine) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("@adobe/reactor-promise");
exp);
    });
};
//# sourceMappingURL=async.js.map
          }

        },
        "demandbase/dist/lib/helpers/dataElement.js": {
          "script": function(module, exports, require, turbine) {
var dataElementConfig = require('../config/dataElements');
/**
 * [isInvalidAttributeValue description]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function isInvalidAttributeValue(value) {
    if (value === undefined)
        return true;
    if (value === null)
        return true;
    if (value === '')
        return true;
    return false;
}
/**
 * [valueOrDefault description]
 * @param  {[type]} value        [description]
 * @param  {[type]} defaultValue [description]
 * @return {[type]}              [description]
 */
function valueOrDefault(value, defaultValue) {
    if (isInvalidAttributeValue(value))
        return defaultValue;
    return value;
}
module.exports = {
    /**
     * Builds N sets of data elements from the extensionSettings. The sets are
     * just names and an array of IP API attributes as strings
     * @param  {object} extensionSettings
     * @return {array}
     */
    buildSets: function (extensionSettings) {
        var dataElementSets = [];
        for (var i = 0, splitString, name; i < dataElementConfig.quantity; i++) {
            name = dataElementConfig.prefix + (i + 1);
            splitString = extensionSettings[name].split(':');
            dataElementSets.push({
                name: name,
                attributes: splitString[0] === '' ? [] : splitString,
            });
        }
        return dataElementSets;
    },
    /**
     * Converts the provided extension settings, profile, and dataElementSet to
     * a nice little string of data to hand over to evars for adobe analytics
     * later
     * @param  {object} extensionSettings
     * @param  {object} newProfile        IP API response (flattened)
     * @param  {object} dataElementSet    The elementSet to use to build string
     * @return {string}                   String that gets written to localstorage
     */
    buildDelimitedDataString: function (extensionSettings, newProfile, dataElementSet) {
        var nonCompany = extensionSettings.nonCompanyVisitorDefault;
        var nonTargetAccount = extensionSettings.nonTargetAccountDefault;
        var targetAccountEmpty = extensionSettings.targetAccountEmptyDefault;
        var unavailable = extensionSettings.attributeUnavailableDefault;
        return dataElementSet.attributes
            .map(function (attribute) {
            var isDetailed = newProfile.information_level === 'Detailed';
            var isWatchList = attribute.indexOf('watch_list') === 0;
            var value = newProfile[attribute];
            // if we don't have a detailed data set, must not be company
            if (!isDetailed)
                return valueOrDefault(value, nonCompany);
            // must not be an account watch customer
            if (isWatchList && value === undefined)
                return nonTargetAccount;
            // if watch list attribute in API response, return it or default
            if (isWatchList)
                return valueOrDefault(value, targetAccountEmpty);
            // if we've made it this far, we have good data so return it
            return valueOrDefault(value, unavailable);
            return nonCompany;
        })
            .join(':');
    },
};
//# sourceMappingURL=dataElement.js.map
          }

        },
        "demandbase/dist/lib/helpers/demandbaseIpApi.js": {
          "script": function(module, exports, require, turbine) {
var ipApiBaseUrl = require('../config/demandbaseIpApi').baseUrl;
var windowUtils = require('./windowUtils');
module.exports = {
    /**
     * Uses API key to build the IP API URL for a GET request
     * @param  {string} apiKey
     * @param  {boolean} targetEnabled
     * @return {string}
     */
    buildUrl: function (apiKey, targetEnabled) {
        var baseUrl = ipApiBaseUrl + '?key=' + apiKey + this.buildStandardQueryParams();
        if (targetEnabled) {
            return baseUrl + '&src=adobelaunch_target';
        }
        else {
            return baseUrl + '&src=adobelaunch';
        }
    },
    /**
     * Returns a string starting with new query parameters to
     * be added to the IP API call.
     * @return {string}
     */
    buildStandardtle));
    },
    /**
     * Returns the location of the current page that is running as a string
     * The string is not url encoded
     * @return {string}
     */
    getPageLocation: function () {
        var pg = document.location.href;
        // support loading tag in iframe - still passes correct page
        if (windowUtils.detectIFrame()) {
            pg = document.referrer;
        }
        return pg;
    },
};
//# sourceMappingURL=demandbaseIpApi.js.map
          }

        },
        "demandbase/dist/lib/helpers/http.js": {
          "script": function(module, exports, require, turbine) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("@adobe/reactor-promise");
var window = require("@adobe/reactor-window");
module.exports = {
    /**
     * Makes a GET request to the specified URL and returns a promise
     * @param  {string} url
     * @return {Promise}
     */
    get: function (url) {
        return new Promise(function (resolve, reject) {
            var request;
            // attempt to instantiate an HTTP request
            if (window.XMLHttpRequest) {
                request = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                request = new ActiveXObject('Microsoft.XMLHTTP');
            }
            if (!request) {
                turbine.logger.error('Unable to instantiate an HTTP request object');
                reject();
            }
            // make sure to include cookies
            if (request.withCredentials !== 'undefined') {
                request.withCredentials = true;
            }
            // async handler that will resolve our promise
            try {
                request.onreadystatechange = function () {
                    if (this.readyState === 4 && this.status === 200) {
                        resolve(JSON.parse(request.responseText));
                    }
                };
                request.open('GET', url, true);
                request.send();
            }
            catch (error) {
                turbine.logger.error(error);
            }
        });
    },
};
//# sourceMappingURL=http.js.map
          }

        },
        "demandbase/dist/lib/helpers/object.js": {
          "script": function(module, exports, require, turbine) {
module.exports = {
    /**
     * Flattens a nested JS object by using provided delimiter
     * @param  {object} data
     * @param  {string} delimiter
     * @return {object}
     */
    flatten: function (data, delimiter) {
        delimiter = delimiter || '_';
        for (var d in data) {
            if (typeof data[d] == 'object' && data[d] !== null && data.hasOwnProperty(d)) {
                for (var nd in data[d]) {
                    if (data[d].hasOwnProperty(nd)) {
                        data[d + delimiter + nd] = data[d][nd];
                    }
                }
                delete data[d];
            }
        }
        return data;
    },
};
//# sourceMappingURL=object.js.map
          }

        },
        "demandbase/dist/lib/helpers/errorReporter.js": {
          "script": function(module, exports, require, turbine) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorStackParser_1 = require("./errorStackParser");
/**
 * Error interception and processing module for transmitting error information to sentry via API
 * @param {method} method to be processed and called by the error reporter module
 * @return {object}
 */
function ErrorReporter() {
    var that = this;
    var SENTRY_PROJECT_ID = '1894802';
    var SENTRY_PUBLIC_KEY = '79994043fcf443c988b5f68d714cf23b';
    this.sendRequest = function (error, additionalErrorDetails) {
        var sentryXhttp;
        if (window.XMLHttpRequest) {
            sentryXhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            sentryXhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var sentryUrl = "https://sentry.io/api/" + SENTRY_PROJECT_ID + "/store/?sentry_version=7&sentry_key=" + SENTRY_PUBLIC_KEY;
        try {
            sentryXhttp.open('POST', sentryUrl, true);
            sentryXhttp.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
            sentryXhttp.send(that.formatMessage(error, additionalErrorDetails));
        }
        catch (requestError) { }
    };
    this.formatMessage = function (error, additionalErrorDetails) {
        var errorDetails = that.parseError(error);
        var context = that.parseContext();
        var sentryFormattedError = that.formatErrorForSentry(errorDetails);
        return JSON.stringify({
            logger: context.notifier.name,
            platform: 'javascript',
            request: {
                url: context.url,
            },
            contexts: {
                browser: {
                    userAgent: context.userAgent,
                },
            },
            extra: {
                readyState: context.readyState,
                additionalErrorDetails: additionalErrorDetails,
            },
            exception: {
                values: [sentryFormattedError],
            },
        });
    };
    this.formatErrorForSentry = function (errorDetails) {
        var stacktrace = [];
        for (var _i = 0, _a = errorDetails.backtrace; _i < _a.length; _i++) {
            var frame = _a[_i];
            stacktrace.push({
                function: frame.function,
                filename: frame.file,
                lineno: frame.line,
                colno: frame.column,
            });
        }
        return {
            type: errorDetails.type,
            value: errorDetails.message,
            stacktrace: {
                frames: stacktrace,
            },
        };
    };
    this.    };
    };
    this.pa    };
    };
    this.sendError = function (method, additionalErrorDetails) {
        if (typeof method !== 'function') {
            throw new Error("Invalid Function: " + method);
        }
        try {
            if (typeof method !== 'undefined' && typeof method.apply === 'function') {
                return method.apply(this);
            }
        }
        catch (error) {
            that.sendRequest(error, additionalErrorDetails);
        }
    };
    this.wrap = function (method, additionalErrorDetails) {
        that.sendError(method, additionalErrorDetails);
    };
    // Returned mostly for testing
    return this;
}
module.exports = new ErrorReporter();
//# sourceMappingURL=errorReporter.js.map
          }

        },
        "demandbase/dist/lib/config/demandbaseIpApi.js": {
          "script": function(module, exports, require, turbine) {
module.exports = {
    /**
     * URL of the IP API
     * @type {String}
     */
    baseUrl: 'https://api.company-target.com/api/v2/ip.json',
};
//# sourceMappingURL=demandbaseIpApi.js.map
          }

        },
        "demandbase/dist/lib/helpers/windowUtils.js": {
          "script": function(module, exports, require, turbine) {
module.exports = {
    d.self;
    },
};
//# sourceMappingURL=windowUtils.js.map
          }

        },
        "demandbase/dist/lib/helpers/errorStackParser.js": {
          "script": function(module, exports, require, turbine) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://raw.githubusercontent.com/stacktracejs/error-stack-parser/4ea1f3f0c81bda847d175318f35144c93bb2bb2b/dist/error-stack-parser.js
var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
var ErrorStackParser = /** @class */ (function () {
    function ErrorStackParser() {
        var _this = this;
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        this.parse = function (error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return _this.parseOpera(error);
            }
            else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return _this.parseV8OrIE(error);
            }
            else if (error.stack) {
                return _this.parseFFOrSafari(error);
            }
            else {
                throw new Error('Cannot parse given Error object');
            }
        };
        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        this.extractLocation = function (urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }
            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        };
        this._parseInt = function (string) {
            if (!string) {
                return undefined;
            }
            return parseInt(string, 10);
        };
        this.parseV8OrIE = function (error) {
            var filtered = error.stack.split(           }, _this);
            return filtered.map(function (line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line
                    .replace(/^\s+/, '')
                    .replace(/\(eval code/g, '(')
                    .split(/\s+/)
                    .slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
                return {
                    function: functionName,
                    file: fileName,
                    line: this._parseInt(locationParts[1]),
                    column: this._parseInt(locationParts[2]),
                    source: line,
                };
            }, _this);
        };
        this.parseFFOrSafari = function (error) {
            var filtered = error.stack.split(           }, _this);
            return filtered.map(function (line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }
                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return {
                        function: line,
                    };
                }
                else {
                    var tokens = line.split('@');
                    var locationParts = this.extractLocation(tokens.pop());
                    var functionName = tokens.join('@') || undefined;
                    return {
                        function: functionName,
                        file: locationParts[0],
                        line: this._parseInt(locationParts[1]),
                        column: this._parseInt(locationParts[2]),
                        source: line,
                    };
                }
            }, _this);
        };
        this.parseOpera = function (e) {
            if (!e.stacktrace ||
                (e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return _this.parseOpera9(e);
            }
            else if (!e.stack) {
                return _this.parseOpera10(e);
            }
            else {
                return _this.parseOpera11(e);
            }
        };
        this.parseOpera9 = function (e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];
            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push({
                        file: match[2],
                        line: _this._parseInt(match[1]),
                        source: lines[i],
                    });
                }
            }
            return result;
        };
        this.parseOpera10 = function (e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];
            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push({
                        function: match[3] || undefined,
                        file: match[2],
                        line: _this._parseInt(match[1]),
                        source: lines[i],
                    });
                }
            }
            return result;
        };
        // Opera 10.65+ Error.stack very similar to FF/Safari
        this.parseOpera11 = function (error) {
            var filtered = error.stack.split(           }, _this);
            return filtered.map(function (line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || '';
                var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
                return {
                    function: functionName,
                    args: args,
                    file: locationParts[0],
                    line: this._parseInt(locationParts[1]),
                    column: this._parseInt(locationParts[2]),
                    source: line,
                };
            }, _this);
        };
    }
    return ErrorStackParser;
}());
exports.ErrorStackParser = ErrorStackParser;
exports.default = new ErrorStackParser();
//# sourceMappingURL=errorStackParser.js.map
          }

        }
      }
    },
    "gcoe-adobe-client-data-layer": {
      "displayName": "Adobe Client Data Layer",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP6e4c031a8b7640d7ac3fab013fa28b17/",
      "settings": {
        "dataLayerName": "adobeDataLayer",
        "injectLibrary": true
      },
      "modules": {
        "gcoe-adobe-client-data-layer/src/lib/dataElements/datalayerComputedState.js": {
          "name": "datalayer-computed-state",
          "displayName": "Data Layer Computed State",
          "script": function(module, exports, require, turbine) {
'uurn obj[i] }
/**
 * Returns the current computed state of the data layer.
 * @param settings Object containing the settings
 * @returns {Object|undefined}
 */
module.exports = function (settings, event) {
    if (typeof settings !== 'undefined' && settings !== null) {
        var dl = getDataLayer();
        if (typeof dl !== 'undefined') {
            if (settings.path !== '') {
                return dl.getState(settings.path);
            } else {
                return dl.getState();
            }
        }
    }
};

var getDataLayer = require('../util/getDataLayer');
          }

        },
        "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js": {
          "name": "datalayer-push",
          "displayName": "Data Pushed",
          "script": function(module, exports, require, turbine) {
'use strict';

/**
 * Registers on either all data pushes, all events or specific events
 * @param settings Object containing the settings
 * @param trigger Fn to be called once triggered
 */
module.exports = function (settings, trigger) {
    if (typeof settings !== 'undefined' && settings !== null) {
        var method = settings.method;
        var eventKey = settings.eventKey;
        var scope = settings.scope;
        var dl = getDataLayer();


        /**
         * Function to be called by the Adobe Client Data Layer
         * @param event The event object pushed to the data layer that triggered the callback.
         */
        v;
        };

        var options = {};
        if (typeof scope !== 'undefined') {
            options.scope = scope;
        }

        // Register to all data pushes
        if (method === 'allData') {
            dl.push(function (dl) {
                dl.addEventListener("adobeDataLayer:change", handler, options);
            });
        }

        // Register to all event pushes
        else if (method === 'allEvents') {
                  });
        }

        // Only listen to specific events
        else if (method === 'specificEvent' && eventKey !== '') {
                  });
        }
    }
};

var getDataLayer = require('../util/getDataLayer');
          }

        },
        "gcoe-adobe-client-data-layer/src/lib/main.js": {
          "script": function(module, exports, require, turbine) {
var globalSettings = turbine.getExtensionSettings();
var dataLayerName = globalSettings.dataLayerName;
var injectLibrary = globalSettings.injectLibrary;

window.adobeDataLayer = window.adobeDataLayer || [];

/* if adobeDataLayer is not an object - change it */
if ('object' !== typeof (window.adobeDataLayer)) {
    turbine.logger.log('Initializing adobeDataLayer to [] as it isn\'t an object yet.');
    window.adobeDataLayer = [];
}

/* if a new name has been passed, ask adobeDataLayer to use it*/
if ('adobeDataLayer' !== dataLayerName) {
    if(typeof window[dataLayerName] === 'object') {
        turbine.logger.log('Using "' + dataLayerName + '" instead of "adobeDataLayer" as data layer name.');
        window.adobeDataLayer.push(function (dl) {
            // push existing events from window[dataLayerName] to adobeDataLayer
            for (var i = 0; i < window[dataLayerName].length; i++) {
                dl.push(window[dataLayerName][i]);
            }

            // set the reference of the existing data layer object to the new one
            window[dataLayerName] = dl
        });
    } else {
        turbine.logger.warn('Could not use "' + dataLayerName + '" instead of "adobeDataLayer", because the object does not exist!');
    }
}

if(injectLibrary) {
	/* Check if the wrapper ACDL is already loaded or not- check a specific function (getState) - USE CASE : Launch in AEM - AEM already loading ACDL*/
	if ("undefined" === typeof window.adobeDataLayer.getState) {
		turbine.logger.log('Initializing adobeDataLayer as it wasn\'t found during the initialization.');
        "use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]}}return n}}function _arrayWithHoles(t){if(Array.isArrayr?windowALL:"alr[t])}(),a}},{"../custom-lodash":1,"../version.json":14,"./constants":2,"./item":5,"./listener":7,"./listenerManager":8,"./utils/customMee.exports=r},{"./dataLayerMano,index:r}}},{"../custom-lodash":1,"./constants":2,"./itemConstraints":6,"./utils/dataMatchesContraiional:!ath||null}}},{"./const){i(t,e)}}}},{"../custom-lodash":1,"./constants":2,"./utils/indexOfListener":12,"./utils/listenerMa)}return!1}},{"../../custom-lodt}))}(t,a)}},{"../../custom-lod&&(i||u)})}},{"../../custom-lod}}return-1}},{"../../custom-lodi(t,e))),o}},{"../../custom-lodash":1,"../constants":2,"./ancestorRemoon:"2.0.2"}},{}]},{},[4]);
	}
}
          }

        },
        "gcoe-adobe-client-data-layer/src/lib/util/getDataLayer.js": {
       
          }

        }
      }
    },
    "core": {
      "displayName": "Core",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP1fdd2a6ec2ae468fb1d2cac08df65f83/",
      "modules": {
        "core/src/lib/dataElements/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
       
          }

        },
        "core/src/lib/dataElements/constant.js": {
          "name": "constant",
          "displayName": "Constant",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * The cookie data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.value The constant value that should be returned.
 * @returns {string}
 */

module.exports = function (settings) {
  return settings.value;
};

          }

        },
        "core/src/lib/conditions/path.js": {
          "name": "path",
          "displayName": "Path Without Query String",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');
var textMatch = require('../helpers/textMatch');

/**
 * Path condition. Determines if the actual path matches at least one acceptable path.
 * @param {Object} settings Condition settings.
 * @param {Object[]} settings.paths Acceptable paths.
 * @param {string} settings.paths[].value An acceptable path value.
 * @param {boolean} [settings.paths[].valueIsRegex=false] Whether <code>value</code> on the object
 * instance is intended to be a regular expression.
 * @returns {boolean}
 */
module.exports = function (settings) {
  var path = document.location.pathname;
  return settings.paths.some(function (acceptablePath) {
    var acceptableValue = acceptablePath.valueIsRegex
      ? new RegExp(acceptablePath.value, 'i')
      : acceptablePath.value;
    return textMatch(path, acceptableValue);
  });
};

          }

        },
        "core/src/lib/actions/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');
var Promise = require('@adobe/reactor-promise');
var decorateCode = require('./helpers/decorateCode');
var loadCodeSequentially = require('./helpers/loadCodeSequentially');
var postscribe = require('../../../node_modules/postscribe/dist/postscribe');
var unescapeHTMLEntities = require('./helpers/unescapeHtmlCode');
var getTurbineScript = require('../helpers/findPageScript').getTurbine;

var cspNonce;

var postscribeWrite = (function () {
  var write = function (source) {
    postscribe(document.body, source, {
      beforeWriteToken: function (token) {
        var tagName = token.tagName && token.tagName.toLowerCase();

        if (cspNonce && tagName === 'script') {
          token.attrs.nonce = cspNonce;
        }

        // There is an issue in Postscribe where script and style attributes
        // are not unescaped. That causes problems when loading scripts from external
        // sources. See https://jira.corp.adobe.com/browse/DTM-15058.
        if (tagName === 'script' || tagName === 'style') {
          Object.keys(token.attrs ||
          });

          if (token.src) {
            token.src = unescapeHTMLEntities(token.src);
          }
        }

        return token;
      },
sg);
      }
    });
  };

  var queue = [];

  // If the Launch library is loaded asynchronously, it may finish loading before document.body
  // is available. This means the custom code action may be running before document.body is
  // available, in which case can't write the custom code to document.body. We could, in this
  // case, write it to document.head since it will for sure be available, but the user's custom
  // code may have something like an img tag for sending a beacon (this use case was seen in DTM).
  // Adding display elements like an img tag to document.head is against HTML spec, though it
  // does seem like an image request is still made. We opted instead to ensure we comply with
  // HTML spec and wait until we see that document.body is available before writing.
  var flushQueue = function () {
    if (document.body) {
      while (queue.length) {
        write(queue.shift());
      }
    } else {
      // 20 is an arbitrarily small amount of time but not too aggressive.
      setTimeout(flushQueue, 20);
    }
  Queue();
  };
})();

var libraryWasLoadedAsynchronously = (function () {
  // document.currentScript is not supported by IE
  if (document.currentScript) {
    return document.currentScript.async;
  } else {
    var script = getTurbineScript();
    if (script) {
      return script.async;
    }
    // We couldn't find the Launch script, so we'll assume it was loaded asynchronously. This
    // is the safer assumption.
    return true;
  }
})();

/**
 * The custom code action. This loads and executes custom JavaScript or HTML provided by the user.
 * @param {Object} settings Action settings.
 * @params {boolean} settings.isExternal When true, <code>settings.source</code> contains the
 * code itself. When false, <code>settings.source</code> contains a relative path to the file
 * containing the user's code.
 * @param {string} settings.source If <code>settings.external</code> is <code>false</code>,
 * this will be the user's code. Otherwise, it will be a relative path to the file containing
 * the user's code.
 * @param {string} settings.language The language of the user's code. Must be either javascript or
 * html.
 * @param {Object} event The underlying event object that triggered the rule.
 * @param {Object} event.element The element that the rule was targeting.
 * @param {Object} event.target The element on which the event occurred.
 * <code>javascript</code> or <code>html</code>.
 */
module.exports = function (settings, event) {
  // ensure the nonce is up-to-date when the function is used
  cspNonce = turbine.getExtensionSettings().cspNonce;

  var decoratedResult;

  var action = {
    settings: settings,
    event: event
  };

  var source = action.settings.source;
  if (!source) {
    return;
  }

  if (action.settings.isExternal) {
    return loadCodeSequentially(source).then(function (source) {
      if (source) {
        decoratedResult = decorateCode(action, source);
        postscribeWrite(decoratedResult.code);
        return decoratedResult.promise;
      }

      return Promise.resolve();
    });
  } else {
    decoratedResult = decorateCode(action, source);

    // This area has been modified several times, so here are some helpful details:
    // 1. Custom code will be included into the main launch library if it's for a rule that uses the
    //    Library Loaded or Page Bottom event. isExternal will be false. However, keep in mind that
    //    the same rule may have other events that are not Library Loaded or Page Bottom. This means
    //    we could see isExternal = false on the action when the event that fired the rule is
    //    a click, for example.
    // 2. When users load a library synchronously which has a rule using the Library Loaded
    //    or Page Bottom event with a Custom Code action, they expect the custom code to be written
    //    to the document in a blocking fashion (prevent the parser from continuing until their
    //    custom code is executed). In other words, they expect document.write to be used. When
    //    the library is loaded asynchronously, they do not have this expectation. However, note
    //    that if the Library Loaded event is used and the website does not call
    //    _satellite.pageBottom(), page bottom rules will be run when the DOMContentLoaded event
    //    is fired (at which point we can't use document.write or it will wipe out website content).
    // 3. Calls to document.write will be ignored by the browser if the Launch library is loaded
    //    asynchronously, even if the calls are made before DOMContentLoaded.
    // 4. There's a bug in IE 10 where readyState is sometimes set to "interactive" too
    //    early (before DOMContentLoaded has fired). https://bugs.jquery.com/ticket/12282
    //    This may cause Postscribe to be used sometimes when document.write() could have been
    //    used instead, but we have concluded that IE 10 usage is low enough and the risk small
    //    enough that this behavior is tolerable.
    if (!libraryWasLoadedAsynchronously && document.readyState === 'loading') {
      // Document object in XML files is different from the ones in HTML files. Documents served
      // with the `application/xhtml+xml` MIME type don't have the `document.write` method.
      // More info:
      // https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite
      // https://developer.mozilla.org/en-US/docs/Archive/Web/Writing_JavaScript_for_HTML
      // Also, when rule component sequencing is enabled, there is an issue in Edge Legacy
      // where the whole page gets erased: https://jira.corp.adobe.com/browse/DTM-13527.
      // We decided to not use document.write at all when rule component sequencing is enabled.
      if (
        document.write &&
        turbine.propertySettings.ruleComponentSequencingEnabled === false
      ) {
        document.write(decoratedResult.code);
      } else {
        postscribeWrite(decoratedResult.code);
      }
    } else {
      postscribeWrite(decoratedResult.code);
    }

    return decoratedResult.promise;
  }
};

          }

        },
        "core/src/lib/conditions/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
       
          }

        },
        "core/src/lib/events/click.js": {
          "name": "click",
          "displayName": "Click",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var window = require('@adobe/reactor-window');
var bubbly = require('./helpers/createBubbly')();
var WeakMap = require('./helpers/weakMap');
var evaluatedEvents = new WeakMap();
var MIDDLE_MOUSE_BUTTON = 2;
var castToNumberIfString =
  require('../helpers/stringAndNumberUtils').castToNumberIfString;

/**
 * Determines whether an element is a link that would navigate the user's current window to a
 * different URL.
 * @param {MouseEvent} e
 * @returns {boolean}
 */
var getDelayableLink = function (e) {
  // user is modifying click with the keyboard, don't delay the navigation
  if (e.ctrlKey || e.metaKey || e.button === MIDDLE_MOUSE_BUTTON) {
    return undefined;
  }

  var node = e.target;
  while (node) {
    var tagName = node.tagName;

    if (tagName && tagName.toLowerCase() === 'a') {
      var href = node.getAttribute('href');
      var target = node.getAttribute('target');

      if (
        href &&
        (!target ||
          target === '_self' ||
          (target === '_top' && window.top === window) ||
          target === window.name)
      ) {
        return node;
      } else {
        // Found hyperlink conditions in which we don't want to delay navigation
        return undefined;
      }
    }

    node = node.parentNode;
  }
};

document.addEventListener('click', bubbly.evaluateEvent, true);

/**
 * The click event. This event occurs when a user has clicked an element.
 * @param {Object} settings - The event settings object.
 * @param {string} [settings.elementSelector] - The CSS selector the element must match in order for
 * the rule to fire.
 * @param {Object[]} settings.elementProperties - Property values the element must have in order
 * for the rule to fire.
 * @param {string} settings.elementProperties[].name - The property name.
 * @param {string} settings.elementProperties[].value - The property value.
 * @param {number|string} [settings.anchorDelay] - When present and a link is clicked, actual
 * navigation will be postponed for a period of time equal with its value. This is typically used to
 * allow time for scripts within the rule to execute, beacons to be sent to servers, etc.
 * @param {boolean} settings.elementProperties[].valueIsRegex=false - Whether <code>value</code>
 * on the object instance is intended to be a regular expression.
 * @param {boolean} settings.bubbleFireIfParent=true - Whether the rule should fire if
 * the event originated from a descendant element.
 * @param {boolean} settings.bubbleFireIfChildFired=true - Whether the rule should fire
 * if the same event has already triggered a rule targeting a descendant element.
 * @param {boolean} settings.bubbleStop=false - Whether the event should not trigger
 * rules on ancestor elements.
 * @param {function} trigger - The trigger callback.
 */
module.exports = function (settings, trigger) {
  bubbly.addListener(settings, function (syntheticEvent) {
    var nativeEvent = syntheticEvent.nativeEvent;

    // AppMeasurement captures the click events, and tries to detect if the element clicked is an A
    // tag that contains an exit link. When that happens, it stops the initial event, sends a
    // beacon, clones the initial event and fires it again.
    // Reactor detects the click events first, because its listeners are set on the capture phase.
    // We need to ignore the cloned event, otherwise the same rule will fire twice. AppMeasurement
    // sets `s_fe` attribute on the cloned event, and that is the flag we'll use to ignore these
    // fake events.
    // https://git.corp.adobe.com/analytics-platform/appmeasurement/blob/master/bin/js/src/AppMeasurement.js#L3196
    if (nativeEvent.s_fe) {
      return;
    }

    var anchorDelay = castToNumberIfString(settings.anchorDelay);
    if (anchorDelay) {
      if (!evaluatedEvents.has(nativeEvent)) {
        var delayableLink = getDelayableLink(nativeEvent);
        if (delayableLink) {
          nativeEvent.preventDefault();
        
          }, anchorDelay);
        }
        evaluatedEvents.set(nativeEvent, true);
      }
    }

    trigger(syntheticEvent);
  });
};

/**
 * @private
 * Clears all listeners. This should only be used in tests.
 */
module.exports.__reset = bubbly.__reset;

          }

        },
        "core/src/lib/conditions/subdomain.js": {
          "name": "subdomain",
          "displayName": "Subdomain",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');
var textMatch = require('../helpers/textMatch');

/**
 * Subdomain condition. Determines if the actual subdomain matches at least one acceptable
 * subdomain.
 * @param {Object} settings Condition settings.
 * @param {Object[]} settings.subdomains Acceptable subdomains.
 * @param {string} settings.subdomains[].value An acceptable subdomain value.
 * @param {boolean} [settings.subdomains[].valueIsRegex=false] Whether <code>value</code> on the
 * object instance is intended to be a regular expression.
 * @returns {boolean}
 */
moduue);
  });
};

          }

        },
        "core/src/lib/events/elementExists.js": {
          "name": "element-exists",
          "displayName": "Element Exists",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var POLL_INTERVAL = 3000;

var WeakMap = require('./helpers/weakMap');
var seenElements = new WeakMap();
var matchesProperties = require('./helpers/matchesProperties');

var listenersBySelector = {};

setInterval(function () {
  Object.keys(listenersBySelector).forEach(function (selector) {
    var listeners = listenersBySelector[selector];
    var elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      if (!seenElements.has(element)) {
        seenElements.set(element, true);

        // We want to try to execute the rules in the order they were in the turbine container.
        // This is why we try to loop from 0 to N. We do k-- in order to not mess up looping
        // as we splice items from the array.
        for (var k = 0; k < listeners.length; k++) {
          var listener = listeners[k];
          if (matchesProperties(element, listener.settings.elementProperties)) {
            listener.trigger({
              element: element,
              target: element
            });
            listeners.splice(k, 1);
            k--;
          }
        }
      }

      // Listeners are removed from the array as their respective rules are fired.
      // Once we have no more rules corresponding to the selector there is no need to
      // continue scanning elements with the selector.
      if (!listeners.length) {
        delete listenersBySelector[selector];
        break;
      }
    }
  });
}, POLL_INTERVAL);

/**
 * Element exists event. This event occurs when an element has been added to the DOM. The rule
 * should run no more than once.
 * @param {Object} settings The event settings object.
 * @param {string} settings.elementSelector The CSS selector the element must match in order for
 * the rule to fire.
 * @param {Object[]} [settings.elementProperties] Property values the element must have in order
 * for the rule to fire.
 * @param {string} settings.elementProperties[].name The property name.
 * @param {string} settings.elementProperties[].value The property value.
 * @param {boolean} [settings.elementProperties[].valueIsRegex=false] Whether <code>value</code>
 * on the object instance is intended to be a regular expression.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  var listeners = listenersBySelector[settings.elementSelector];

  if (!listeners) {
    listeners = listenersBySelector[settings.elementSelector] = [];
  }

  listeners.push({
    settings: settings,
    trigger: trigger
  });
};

          }

        },
        "core/src/lib/events/libraryLoaded.js": {
          "name": "library-loaded",
          "displayName": "Library Loaded (Page Top)",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

/**
 * Library loaded event. This event occurs as soon as the runtime library is loaded.
 * @param {Object} settings The event settings object.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  pageLifecycleEvents.registerLibraryLoadedTrigger(trigger);
};

          }

        },
        "core/src/lib/events/pageBottom.js": {
          "name": "page-bottom",
          "displayName": "Page Bottom",
       
          }

        },
        "core/src/lib/events/customEvent.js": {
          "name": "custom-event",
          "displayName": "Custom Event",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';
var bubbly = require('./helpers/createBubbly')();

var typesWatched = [];

/**
 * The custom event. When an event is seen with the specified type, the rule will be executed.
 * @param {Object} settings The event settings object.
 * @param {string} settings.type The custom event type.
 * @param {string} [settings.elementSelector] The CSS selector the element must match in order for
 * the rule to fire.
 * @param {Object[]} [settings.elementProperties] Property values the element must have in order
 * for the rule to fire.
 * @param {string} settings.elementProperties[].name The property name.
 * @param {string} settings.elementProperties[].value The property value.
 * @param {boolean} [settings.elementProperties[].valueIsRegex=false] Whether <code>value</code>
 * on the object instance is intended to be a regular expression.
 * @param {boolean} [settings.bubbleFireIfParent=true] Whether the rule should fire if
 * the event originated from a descendant element.
 * @param {boolean} [settings.bubbleFireIfChildFired=true] Whether the rule should fire
 * if the same event has already triggered a rule targeting a descendant element.
 * @param {boolean} [settings.bubbleStop=false] Whether the event should not trigger
 * rules on ancestor elements.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  var type = settings.type;

  if (typesWatched.indexOf(type) === -1) {
    typesWatched.push(type);
    window.addEventListener(type, bubbly.evaluateEvent, true);
  }

  bubbly.addListener(settings, function (event) {
    if (event.nativeEvent.type === type) {
      // Copying detail up to the top-level makes it easier for users to consume and
      // makes it backward-compatible with DTM.
      event.detail = event.nativeEvent.detail;
      trigger(event);
    }
  });
};

          }

        },
        "core/src/lib/helpers/textMatch.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Performs a string match based on another string or a regex.
 * @param {string} str The string to be evaluate.
 * @param {string|RegExp} pattern The pattern to match against.
 * @returns {boolean} Whether the string matches the pattern.
 */
module.exports = function (str, pattern) {
  if (pattern == null) {
    throw new Error('Illegal Argument: Pattern is not present');
  }
  if (str == null) {
    return false;
  }
  if (typeof pattern === 'string') {
    return str === pattern;
  } else if (pattern instanceof RegExp) {
    return pattern.test(str);
  } else {
    return false;
  }
};

          }

        },
        "core/src/lib/actions/helpers/decorateCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

var decorateGlobalJavaScriptCode = require('./decorators/decorateGlobalJavaScriptCode');
var decorateNonGlobalJavaScriptCode = require('./decorators/decorateNonGlobalJavaScriptCode');
var decorateHtmlCode = require('./decorators/decorateHtmlCode');

var decorators = {
 source);
  },
  html: decorateHtmlCode
};

modu, source);
};

          }

        },
        "core/src/lib/actions/helpers/loadCodeSequentially.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var Promise = require('@adobe/reactor-promise');
var getSourceByUrl = require('./getSourceByUrl');

var previousExecuteCodePromise = Promise.resolve();

module.exports = function (sourceUrl) {
  var sequentiallyLoadCodePromise =
    });
  });

  previousExecuteCodePromise = sequentiallyLoadCodePromise;
  return sequentiallyLoadCodePromise;
};

          }

        },
        "core/node_modules/postscribe/dist/postscribe.js": {
          "script": function(module, exports, require, turbine) {
/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digitfactory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _postscribe = __webpack_require__(1);
	
	var _postscribe2 = _interopRequireDefault(_postscribe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	module.exports = _postscribe2['default'];

/***/ },
/});

/***/ },
/am;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file prescribe
	 * @description Tiny, forgiving HTML parser
	 * @version vundefined
	 * @see {@link https://github.com/krux/prescribe/}
	 * @license MIT
	 * @author Derek Brans
	 * @copyright 2016 Krux Digitalactory(*****/ ])
	});
	;

/***/ },
/
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=postscribe.js.map
          }

        },
        "core/src/lib/actions/helpers/unescapeHtmlCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

var document = require('@adobe/reactor-document');
var el = document.createElement('div');

module.exports = function (html) {
  el.innerHTML = html;

  // IE and Firefox differ.
  return el.textContent || el.innerText || html;
};

          }

        },
        "core/src/lib/helpers/findPageScript.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');

var byRegexPattern = function (regexScriptSrcPattern) {
  var scripts = document.querySelectorAll('script');

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    // Find the script that loaded our library. Take into account embed scripts migrated
    // from DTM. We'll also consider that they may have added a querystring for cache-busting
    // or whatever.
    if (regexScriptSrcPattern.test(script.src)) {
      return script;
    }
  }
};

var ?.*)?$/));
};

module.exports = {
  getTurbine: getTurbine,
  byRegexPattern: byRegexPattern
};

          }

        },
        "core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
'use strict';

var Promise = require('@adobe/reactor-promise');

module.exports = function (_, source) {
  // The line break after the source is important in case their last line of code is a comment.
  return {
    code: '<scr' + 'ipt>\n' + source + '\n</scr' + 'ipt>',
    promise: Promise.resolve()
  };
};

          }

        },
        "core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
'use strict';

var Promise = require('@adobe/reactor-promise');
var id = 0;

module.exports = function (action, source) {
  var runScriptFnName = '_runScript' + ++id;

  var promise = new Promise(function (resolve, reject) {
    _satellite[runScriptFnName] = function (fn) {
      delete _satellite[runScriptFnName];

      // Use Promise constructor instead of Promise.resolve() so we can
      // catch errors from custom code.
       );
      }).then(resolve, reject);
    };
  });

  // The line break after the source is important in case their last line of code is a comment.
  var code =
    '<scr' +
    'ipt>_satellite["' +
    runScriptFnName +
    '"](function(event, target, Promise) {\n' +
    source +
    '\n});</scr' +
    'ipt>';

  return {
    code: code,
    promise: promise
  };
};

          }

        },
        "core/src/lib/actions/helpers/decorators/decorateHtmlCode.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var Promise = require('@adobe/reactor-promise');

var callbackId = 0;
var htmlCodePromises = {};

window._satellite = window._satellite || {};

/**
 * Public function intended to be called by the user.
 * @param {number} callbackId The identifier passed to _satellite._onCustomCodeSuccess().
 */
window._satellite._onCustomCodeSuccess = function (callbackId) {
  var promiseHandlers = htmlCodePromises[callbackId];
  if (!promiseHandlers) {
    return;
  }

  delete htmlCodePromises[callbackId];
  promiseHandlers.resolve();
};

/**
 * Public function intended to be called by the user.
 * @param {number} callbackId The identifier passed to _satellite._onCustomCodeSuccess().
 */
window._satellite._onCustomCodeFailure = function (callbackId) {
  var promiseHandlers = htmlCodePromises[callbackId];
  if (!promiseHandlers) {
    return;
  }

  delete htmlCodePromises[callbackId];
  promiseHandlers.reject();
};

var reactorCallbackIdShould') !== -1;
};

var replaceCallbackId);
};

var isSourceLoadsExternal;
};

module.exports = function (action, source) {
  // We need to replace tokens only for sources loaded from external files. The sources from
  // inside the container are automatically taken care by Turbine.
  if (isSourceLoadedFromFile(action)) {
    source = turbine.replaceTokens(source, action.event);
  }

  var promise;

  if (reactorCallbackIdShouldBeReplaced(source)) {
    promise =    };
    });

    source = replaceCallbacksIds(source, callbackId);
    callbackId += 1;
  } else {
    promise = Promise.resolve();
  }

  return {
    code: source,
    promise: promise
  };
};

          }

        },
        "core/src/lib/actions/helpers/getSourceByUrl.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';
var loadScript = require('@adobe/reactor-load-script');
var Promise = require('@adobe/reactor-promise');
var findScriptByRegexPattern =
  require('../../helpers/findPageScript').byRegexPattern;

var codeBySourceUrl = {};
var scriptStore = {};

var loadScritore[url];
};

_satellite.__registerScript = function (scriptGuid, code) {
  var scriptUrl;
  if (document.currentScript) {
    // use getAttribute in case it's a relative url
    scriptUrl = document.currentScript.getAttribute('src');
  } else {
    var pattern = new RegExp('.*' + scriptGuid + '.*');
    // use getAttribute in case it's a relative url
    scriptUrl = findScriptByRegexPattern(pattern).getAttribute('src');
  }
  codeBySourceUrl[scriptUrl] = code;
};

module.exports = function (sourceUrl) {
  if (codeBySourceUrl[sourceUrl]) {
    return Promise.resolve(codeBySourceUrl[sourceUrl]);
  } else {
    return    );
    });
  }
};

          }

        },
        "core/src/lib/events/helpers/createBubbly.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var WeakMap = require('./weakMap');
var matchesProperties = require('./matchesProperties');
var matchesSelector = require('./matchesSelector');

// Note to developers of other extensions:
// This module largely exists to support advanced bubbling options
// that were carried over to Launch from DTM. It is highly unlikely
// that you need to support these options in your own extension.
// As such, please only copy this code if you know why you're doing so
// and feel you have a justifiable reason.

/**
 * Handles logic related to bubbling options provided for many event types.
 */
module.exports = function () {
  var listeners = [];

  // It's important that a new weak map is created for each instance of bubbly in order to store
  // whether this particular bubbly instance has processed the event. More than one instance of
  // bubbly may process an event. No instance of bubbly should process an event more than once.
  var processedEvents = new WeakMap();

  var bubbly = {
    /**
     * Register a config object that should be evaluated for an event to determine if a rule
     * should be executed. If it should be executed, the callback function will be called.
     * @param {Object} settings The event config object.
     * @param {string} [settings.elementSelector] The CSS selector the element must match in order
     * for the rule to fire.
     * @param {Object[]} [settings.elementProperties] Property values the element must have in order
     * for the rule to fire.
     * @param {string} settings.elementProperties[].name The property name.
     * @param {string} settings.elementProperties[].value The property value.
     * @param {number} [settings.anchorDelay] - When present and a link is clicked, actual
     * navigation will be postponed for a period of time equal with its value. This is typically
     * used to allow time for scripts within the rule to execute, beacons to be sent to
     * servers, etc.
     * @param {boolean} [settings.elementProperties[].valueIsRegex=false] Whether <code>value</code>
     * on the object instance is intended to be a regular expression.
     * @param {boolean} [settings.bubbleFireIfParent=true] Whether the rule should fire if the
     * event originated from a descendant element.
     * @param {boolean} [settings.bubbleFireIfChildFired=true] Whether the rule should fire if the
     * same event has already triggered a rule targeting a descendant element.
     * @param {boolean} [settings.bubbleStop=false] Whether the event should not trigger rules on
     * ancestor elements.
     * @param {Function} callback The function to be called when a matching event is seen. If the
     * callback does not end up triggering a rule, the callback should explicitly return false.
     */
       });
    },
    /**
     * Evaluate an event to determine if any rule targeting elements in the event target's DOM
     * hierarchy should be executed. Note that event.type is not inspected. This assumes that
     * all registered listeners care about this particular event type.
     * @param {Event} event The event that has occurred.
     * @param {HTMLElement} event.target The HTML element where the event originated.
     * @param {boolean} [eventIsSynthetic] Whether the event passed in is synthetic (instead of
     * native).
     */
    evaluateEvent: function (event, eventIsSynthetic) {
      if (!listeners.length) {
        return;
      }

      // When an event is handled it is evaluated a single time but checks out which rules are
      // targeting elements starting at the target node and looking all the way up the element
      // hierarchy. This should only happen once regardless of how many listeners exist for the
      // event.
      if (processedEvents.has(event)) {
        return;
      }

      var node = event.target;
      var childHasTriggeredRule = false;

      // Loop through from the event target up through the hierarchy evaluating each node
      // to see if it matches any rules.
      while (node) {
        var preventEvaluationOnAncestors = false;

        var nodeTriggeredRule = false;

        // Just because this could be processed a lot, we'll use a for loop instead of forEach.
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          var elementSelector = listener.settings.elementSelector;
          var elementProperties = listener.settings.elementProperties;

          // bubbleFireIfChildFired should be considered true by default
          if (
            listener.settings.bubbleFireIfChildFired === false &&
            childHasTriggeredRule
          ) {
            continue;
          }

          // bubbleFireIfParent should be considered true by default
          if (
            node !== event.target &&
            listener.settings.bubbleFireIfParent === false
          ) {
            continue;
          }

          // If the user didn't specify elementSelector or elementProperties then they want the
          // rule to run whenever the event occurs on any element. They don't intend for the
          // rule to run for every node in the element hierarchy though.
          if (
            node !== event.target &&
            !elementSelector &&
            (!elementProperties || !Object.keys(elementProperties).length)
          ) {
            continue;
          }

          if (elementSelector && !matchesSelector(node, elementSelector)) {
            continue;
          }

          if (
            elementProperties &&
            !matchesProperties(node, elementProperties)
          ) {
            continue;
          }

          var syntheticEventForCallback = {};

          // We'll attach relevant data depending on whether the passed in event is synthetic
          // or native.
          if (eventIsSynthetic) {
            Object.keys(ev           });
          } else {
            syntheticEventForCallback.nativeEvent = event;
          }

          syntheticEventForCallback.element = node;
          syntheticEventForCallback.target = event.target;

          var callbackResponse = listener.callback(syntheticEventForCallback);

          // The callback should return false if it didn't end up triggering a rule.
          var ruleTriggered = callbackResponse !== false;

          if (ruleTriggered) {
            nodeTriggeredRule = true;

            if (listener.settings.bubbleStop) {
              preventEvaluationOnAncestors = true;
            }
          }
        }

        if (preventEvaluationOnAncestors) {
          break;
        }

        if (nodeTriggeredRule) {
          childHasTriggeredRule = true;
        }

        node = node.parentNode;
      }

      processedEvents.set(event, true);
    }
  };

  /**
   * @private
   * Clears all listeners. This should only be used in tests.
   */
  bubbrs = [];
  };

  return bubbly;
};

          }

        },
        "core/src/lib/events/helpers/weakMap.js": {
          "script": function(module, exports, require, turbine) {
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// This is copied from
// https://github.com/webcomponents/webcomponentsjs/blob/7dc6731eb9c9f9c3fea4419c50c6ee3ca0367544/src/WeakMap/WeakMap.js
// because there's not an npm package that makes it easy to import only WeakMap. We've also
// modified it slightly so that it doesn't ever set window.WeakMap.

'use strict';

var window = require('@adobe/reactor-window');
var WeakMap = window.WeakMap;

if (typeof WeakMap === 'undefined') {
  var defineProperty = Object.defineProperty;
  var counter = Date.now() % 1e9;
+ '__');
  };

  WeakMap.prototype  this;
   fined;
    }, true;
   = key;
    }
  };
}

module.exports = WeakMap;

          }

        },
        "core/src/lib/helpers/stringAndNumberUtils.js": {
          "script": function(module, exports, require, turbine) {
'use strict';

va out NaNs.
};

vaof String;
};

var castToStringIfNumber = function (value) {
  return isNumber(value) ? String(value) : value;
};

var castToNumb) : value;
};

module.exports = {
  isNumber: isNumber,
  isString: isString,
  castToStringIfNumber: castToStringIfNumber,
  castToNumberIfString: castToNumberIfString
};

          }

        },
        "core/src/lib/events/helpers/matchesProperties.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var textMatch = require('./../../helpers/textMatch');

var getElementProperty = function (element, property) {
  if (property === '@text' || property === 'innerText') {
    return element.textContent || element.innerText;
  } else if (property in element) {
    return element[property];
  } else if (element.getAttribute) {
    return element.getAttribute(property);
  }
};

/**
 * Determines whether an element's properties and their values match a set of properties and values.
 * If the element doesn't have the property, the element's attribute with the same name will be
 * evaluated if it exists.
 * @param {HTMLElement} element The element to match against.
 * @param {Object[]} properties The criteria of properties to match again.
 * @param {string} properties.name The property name.
 * @param {string} properties.value The property value.
 * @param {boolean} [properties.valueIsRegex=false] Whether <code>value</code> on the
 * object instance is intended to be a regular expression.
 * @returns {boolean} Whether the element matches the criteria.
 */
module.exports = function (element, properties) {
  if (properties) {
    return properties.every(function (property) {
      var actualValue = getElementProperty(element, property.name);
      var criterionValue = property.valueIsRegex
        ? new RegExp(property.value, 'i')
        : property.value;
      return textMatch(actualValue, criterionValue);
    });
  }
  return true;
};

          }

        },
        "core/src/lib/events/helpers/matchesSelector.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Returns whether an element matches a selector.
 * @param {HTMLElement} element The HTML element being tested.
 * @param {string} selector The CSS selector.
 * @returns {boolean}
 */
module.exports = function (element, selector) {
  var matches = element.matches || element.msMatchesSelector;

  if (matches) {
    try {
      return matches.call(element, selector);
    } catch (error) {
      turbine.logger.warn(
        'Matching element failed. ' + selector + ' is not a valid selector.'
      );
      return false;
    }
  }

  return false;
};

          }

        },
        "core/src/lib/events/helpers/pageLifecycleEvents.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * (c) 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

// We need to be able to fire the rules in a specific order, no matter if the library is loaded
// sync or async. The rules are fired in the following order:
// Library loaded rules -> Page bottom rules -> Dom Ready rules -> Window load rules.

var window = require('@adobe/reactor-window');
var document = require('@adobe/reactor-document');

var isIE10 = window.navigator.appVersion.indexOf('MSIE 10') !== -1;
var WINDOW_LOADED = 'WINDOW_LOADED';
var DOM_READY = 'DOM_READY';
var PAGE_BOTTOM = 'PAGE_BOTTOM';

var lifecycleEventsOrder = [PAGE_BOTTOM, DOM_READY, WINDOW_LOADED];

var createSyntEvent
  };
};

var registry = {};
lifecycleEventsOent] = [];
});

var proce);
    });
};

var detectLifecycleEvent = function () {
  if (document.readyState === 'complete') {
    return WINDOW_LOADED;
  } else if (document.readyState === 'interactive') {
    return !isIE10 ? DOM_READY : null;
  }
};

var getLifecycleEventIndex = function (event) {
  return lifecycleEventsOrder.indexOf(event);
};

var processTriggers = function (nativeEvent, lifecycleEvent) {
  registry[lifecycleEvent].forEach(function (triggerData) {
    processTrigger(nativeEvent, triggerData);
  });
  registry[lifecycleEvent] = [];
};

var processTrigger = function (nativeEvent, triggerData) {
  var trigger = triggerData.trigger;
  var syntheticEventFn = triggerData.syntheticEventFn;

  trigger(syntheticEventFn ? syntheticEventFn(nativeEvent) : null);
};

window._satellite = window._satellite || {};
window._satellite.pageBottom = processRegistry.bind(null, PAGE_BOTTOM);

document.addEventListener(
  'DOMContentLoaded',
  processRegistry.bind(null, DOM_READY),
  true
);
window.addEventListener(
  'load',
  processRegistry.bind(null, WINDOW_LOADED),
  true
);

// Depending on the way the Launch library was loaded, none of the registered listeners that
// execute `processRegistry` may fire . We need to execute the `processRegistry` method at
// least once. If this timeout fires before any of the registered listeners, we auto-detect the
// current lifecycle event and fire all the registered triggers in order. We don't care if the
// `processRegistry` is called multiple times for the same lifecycle event. We fire the registered
// triggers for a lifecycle event only once. We used a `setTimeout` here to make sure all the rules
// using Library Loaded are registered and executed synchronously and before rules using any of the
// other lifecycle event types.
windovent);
  }
}, 0);

module.exports = {
  registerLibraryLoadedTrigger: function (trigger) {
    trigger();
  },
  registerPageBo
    });
  },
  registerDomReadyTrigger: function (trigger) {
    registry[DOM_READY].push({
      trigger: trigger,
      syntheticEventFn: createSyntheticEvent.bind(null, document)
    });
  },
  registerWindowLo
    });
  }
};

          }

        }
      }
    },
    "linkedin": {
      "displayName": "LinkedIn Insight Tag",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP56446adda5514f21aa663f9e3635ddaa/",
      "settings": {
        "insightTagID": "3907252"
      },
      "modules": {
        "linkedin/src/lib/actions/loadInsightTag.js": {
          "name": "load-insight-tag",
          "displayName": "Load Insight Tag",
          "script": function(module, exports, require, turbine) {
'use strict';

/**
 * Adobe Launch sends settings object when this action is triggered.
 * @params {object} settings
 * @property {string} insightTagID
 */
module.exports = function() {
  // fetch extension configuration settings to read the insightTagID.
  var settings = turbine.getExtensionSettings();

  if (settings && settings.insightTagID) {
    // Below code is responsible in loading insight tag javascript which is same as asking customers
    // to copy paste the presented javascript code in Campaign Manager tool.
    // We don't want get this code dynamically by providing a public API because it may slow down our
    // customer's website due to 2 network calls one for loading below code and two for loading
    // insight.min.js.
    window['_linkedin_data_partner_id'] = settings.insightTagID;
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
  }
};

          }

        }
      }
    }
  },
  "company": {
    "orgId": "28F958C45FF3799D0A495C47@AdobeOrg",
    "dynamicCdnEnabled": false
  },
  "property": {
    "name": "Medallia.com",
    "settings": {
      "domains": [
        "medallia.com"
      ],
      "undefinedVarsReturnEmpty": false,
      "ruleComponentSequencingEnabled": true
    },
    "id": "PR1c6a7a1702564415a7057906e7bac9b7"
  },
  "rules": [
    {
      "id": "RL04bf52bb40a04e36af148d92065072e6",
      "name": "Videos",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "video"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Video Payload%",
            "data": "%Video Payload%",
            "type": "media.mediaTimed",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL151c3ea3ecdd44db88e4a0e137b149f3",
      "name": "3P | Go2 Landing Page Conversion (TY)",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "page-view"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/path.js",
          "settings": {
            "paths": [
              {
                "value": "ty",
                "valueIsRegex": true
              }
            ]
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "lead",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC880a5621f010427ea67d3e1230f3401e-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC64d74ac9924149fa913454dc5e5edf52-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCe93cc3e8c2e844c2a6e3893ba34baa56-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC632e3c0f1ad94067b6550138cb3c3c1c-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC6a1135c5435d4ffd883d13cd5b93f99e-source.js',
            "language": "html",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RL19977e33de754b57b7e17c41f61ee48f",
      "name": "adobeDataLayerToConsole",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "allData"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCe9cef4680030475897fdcdf06adcae74-source.js',
            "language": "javascript",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL1b67f0da02834653a21ccad01e780116",
      "name": "Global Page View",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "page-view"
          },
          "ruleOrder": 50.0
        },
        {
          "modulePath": "demandbase/dist/lib/events/apiCallFinishedSuccessFailOrTimeout.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  return !!window.dataLayerPushedCompleted && !!window.demandbaseHasCompleted;
}
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC6e34a71b79604c349392b6da99c97c11-source.js',
            "language": "javascript",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        },
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Page View Payload%",
            "data": "%Page View Payload%",
            "type": "web.webpagedetails.pageViews",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL2465455c9fee4a70912f812760d3874a",
      "name": "3P | Demo Request",
      "events": [
        {
          "modulePath": "core/src/lib/events/click.js",
          "settings": {
            "elementSelector": "a",
            "bubbleFireIfParent": true,
            "bubbleFireIfChildFired": true
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var page_path = window.location.pathname;
let related_resources = /journey-analytics|\/business-case-customer-centric-culture|\/the-customer-experience-tipping-point-an-ipsos-and-medallia-study|\/textanalyticswhitepaper|\/text-analytics-cmos-secret-weapon|\/3-claves-para-transformar-su-empresa-esp|\/winning-customers-omnichannel-world|\/insurance-disrupted-how-customer-experience-can-help-insurers-build-trust-and-earn-loyalty|\/the-cx-tipping-point-banking-brief|\/the-state-of-customer-experience-management-in-b2b|/;
let result1 = related_resources.test(page_path);
//Click to Connect with an NP Expert
if(this.href == 'https://www.medallia.com/net-promoter-score/#main-contact' && page_path.indexOf("/net-promoter-score/")>-1){
  return true;
}
//Clicks to Demo Request Events
else if((this.id == 'demo-request' ||this.id == 'toBottomFormCTA') && (page_path.indexOf('resource|platform')>-1 ||page_path.indexOf('net-promoter-score')>-1)&& result1){
  return true;
}
//pt. and esp. Demo Request Clicks
else if((this.id == 'demo-request'|| this.id == 'mob-demo-request')&& (window.location.hostname == "pt.medallia.com" || window.location.hostname == 'esp.medallia.com')){
  return true;
}
else{return false;}
}
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "contact",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC557764edfc1d4aa7a714ab223ef183d0-source.js',
            "language": "html",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RL2512bc62d6ed47c7b0a5257bebabc979",
      "name": "Modal Interactions",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "modal-click"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Modal Interaction Payload%",
            "data": "%Modal Interaction Payload%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy",
            "renderDecisions": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL29346508997a4e50a64cf4ab308eac19",
      "name": "3P | Just Link",
      "events": [
        {
          "modulePath": "core/src/lib/events/click.js",
          "settings": {
            "anchorDelay": 100,
            "elementSelector": "a",
            "bubbleFireIfParent": true,
            "bubbleFireIfChildFired": true
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var id = this.id;
var className = this.className;
var parentName = this.parentElement.parentElement.className;
console.log("Elements id"+id+":class:"+className+":2xparent:"+parentName);
}
          },
          "timeout": 2000
        },
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var page_path = window.location.href;
console.log("class Name Adobe test"+this.className);
console.log("class Name Adobe test"+this.id);
let related_non_resources = /Medallia-Digital_LP|\/customer-experience|\/experience-management-content|\/medallia-experience-cloud|\/customer-satisfaction|\/Customer-Loyalty_LP|\/CustomerFeedback_LP|\/Customer-Retention|\/federal-employee-experience|\/medallia-experience-cloud|\/Medallia-Digital_LP|\/Financial-Services|\/Financial-Services_LP2|\/ex-covid19|\/Tech-CX_LP|\/medallia-for-servicenow\.html/;
let result1 = related_non_resources.test(page_path);
let related_resources = /journey-analytics|business-case-customer-centric-culture|the-customer-experience-tipping-point-an-ipsos-and-medallia-study|textanalyticswhitepaper|text-analytics-cmos-secret-weapon|3-claves-para-transformar-su-empresa-esp|winning-customers-omnichannel-world|insurance-disrupted-how-customer-experience-can-help-insurers-build-trust-and-earn-loyalty|the-cx-tipping-point-banking-brief|the-state-of-customer-experience-management-in-b2b/;
let result2 = related_resources.test(page_path);
//Content Clicks - Medallia Speech / Voice of the Employee
if(this.id == "ctaone" && (page_path.indexOf("voice-of-the-employee-solutions.html")>-1 ||page_path.indexOf("medallia-speech.html")>-1)){
   return true;
   }
//Content Clicks - NPS Page && Download Now - One Off
else if(this.className == "btn btn-green" && (page_path.indexOf("/net-promoter-score/")>-1||page_path.indexOf("/platform/cx-journeys/")>-1)){
  return true;
}
//CTA Click - Non-Resource Pages && Related Resources Click - Resource Pages && CTA Click - Resource Pages && Related Resources Click - Non-Resource Pages
else if((this.id.indexOf("btn") >-1 || this.parentElement.parentElement.className == "related-resources")&& (result1 || result2)){
  return true;
}
//More Resources Click - One Off
else if(this.href.indexOf("https://www.medallia.com/cx-tipping-point/")>-1 && page_path.indexOf("/resource/the-customer-experience-tipping-point-an-ipsos-and-medallia-study/")>-1){
  return true;
}
else{
  return false;
}


}
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "page_view",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC8d8e8b82d5ff4693b60e5a05ab687a45-source.js',
            "language": "html",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL35f2410571144cddabd7f411b2b91b6e",
      "name": "Link Clicks",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "link-click"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Link Click Payload%",
            "data": "%Link Click Payload%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy",
            "documentUnloading": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL36c78fde0afa4320935bcc5d70cfdf63",
      "name": "3P | Form Submit",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "form-action"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var em = event.message;
if(em.web && em.web.webPageDetails && em.web.webPageDetails._medallia && em.web.webPageDetails._medallia.form && em.web.webPageDetails._medallia.form.submits && em.web.webPageDetails._medallia.form.submits.value){
  return true;
}
}
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCbcead8ddcbee4e8eb6b967391795c1a2-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "lead",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCad6468de8c9741748bf0a6861c1b7feb-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "contact",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        }
      ]
    },
    {
      "id": "RL42344f317fd6450c8aa42e745c029de5",
      "name": "Social Share",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "social-share"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Social Share Payload%",
            "data": "%Social Share Payload%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL436ebbb2d78147d2ad75ea1c7d711714",
      "name": "Site Search",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "search"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Search Payload%",
            "data": "%Search Payload%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL48b241605cdf4b05b91f9860e090a04e",
      "name": "Form Action",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "form-action"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Form Action Payload%",
            "data": "%Form Action Payload%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL5686379d59214f2d9d078cc52ebcb85b",
      "name": "3P | PV - Sub domains Page View",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "page-view"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/subdomain.js",
          "settings": {
            "subdomains": [
              {
                "value": "experience.medallia.com|go.medallia.com|jobs.medallia.com|esp.medallia.com|pt.medallia.com",
                "valueIsRegex": true
              }
            ]
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC18463552ebd842eb96336194dc88302f-source.js',
            "language": "html",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL70cee52017c14a63861db0397f08eed5",
      "name": "Downloads",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "download"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Download Payload%",
            "data": "%Download Payload%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL88620b77f17b4172b9e7f7fbbf150493",
      "name": "3P | Agility New Leads",
      "events": [
        {
          "modulePath": "core/src/lib/events/elementExists.js",
          "settings": {
            "elementSelector": ".l-medallia-form__success"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC7908fe60a09f4c64a08e736254e80ebf-source.js',
            "language": "html",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL91b04f0b7bc0423a90060625a22b1f28",
      "name": "3P | Global Page View",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "page-view"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC2732210b902c47908d450fe3d86937e9-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCe26798678fb046b790d6b47f9f643c24-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "bing-ads-extension/src/lib/actions/baseTag.js",
          "settings": {
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCf2f941308b684a9cb3a02ceb5a468d86-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC516f049159dd4a9c8bd8c8b73c45eeae-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCe482952faee84fbbbec453bbdddd1292-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCc6d66a9d2ca24573a6e08d22b59ae483-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "linkedin/src/lib/actions/loadInsightTag.js",
          "settings": {
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC2b0aa6de9bc5411e8ef7f8964c8ce7d2-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCe93a59a35967458f9942a0801985710e-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC2c18e5f35dd9477dae0c48ce18389bf1-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC061143c278844fbabda3a62247ecabd2-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC6d2d2234069c437ca8fec4286749c000-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC5740328c1e5442769cad4980c22f8ecc-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCc96cc3b7d7454d4fb1e87745aedba4d6-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC376737a3deb341769086288dfa873c38-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCe1529a572f084a4190a5030ccdd4aa38-source.js',
            "language": "html",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RL9ae528d43a9047168cdbfd2f8fdae31d",
      "name": "AT: Global Page View",
      "events": [
        {
          "modulePath": "core/src/lib/events/libraryLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%XDM: Target Info%",
            "data": "%XDM: Target Info%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy",
            "renderDecisions": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL9e204d28fb634546ad1401da55913123",
      "name": "DemandBase Tag",
      "events": [
        {
          "modulePath": "core/src/lib/events/pageBottom.js",
          "settings": {
          },
          "ruleOrder": 100.0
        },
        {
          "modulePath": "demandbase/dist/lib/events/apiCallFinishedSuccessFailOrTimeout.js",
          "settings": {
          },
          "ruleOrder": 5.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  return !!window.pageBottomFired && !!window.demandbaseHasCompleted;

}
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "(function(d,b,a,s,e){ var t = b.createElement(a),\n  fs = b.getElementsByTagName(a)[0]; t.async=1; t.id=e; t.src=s;\n  fs.parentNode.insertBefore(t, fs); })\n(window,document,'script','https://tag.demandbase.com/a508e5fd1748fb8e.min.js','demandbase_js_lib');  \n",
            "language": "javascript"
          },
          "timeout": 2000,
          "delayNext": true
        },
        {
          "modulePath": "adobe-analytics/src/lib/actions/sendBeacon.js",
          "settings": {
            "type": "page"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RLa634fa216fa3455fbcd7cb7ea856802e",
      "name": "Page Load: Fire Demandbase",
      "events": [
        {
          "modulePath": "core/src/lib/events/libraryLoaded.js",
          "settings": {
          },
          "ruleOrder": 1.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "demandbase/dist/lib/actions/calldemandbaseipapi.js",
          "settings": {
          },
          "timeout": 2000,
          "delayNext": true
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "window.demandbaseHasCompleted = false;\n",
            "language": "javascript"
          }
        }
      ]
    },
    {
      "id": "RLd0d36f9df4ef483285298b9c67f9232f",
      "name": "3P | CE - medallia_process_utms",
      "events": [
        {
          "modulePath": "core/src/lib/events/customEvent.js",
          "settings": {
            "type": "medallia_process_utms",
            "bubbleFireIfParent": true,
            "bubbleFireIfChildFired": true
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC144348c0cd974bf9b23fbe54139a3ba4-source.js',
            "language": "html",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RLd6c0bd3a22594b04a00b67abaf8e7e0f",
      "name": "3P | CE Marketo Form - Submitted",
      "events": [
        {
          "modulePath": "core/src/lib/events/customEvent.js",
          "settings": {
            "type": "mkto.form.success",
            "bubbleFireIfParent": true,
            "bubbleFireIfChildFired": true
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC6208a208035a4340a8d8e8e3f1ad31a9-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "lead",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC36c58dba01e74d98aea4802811cc09c1-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCf52cc85cedb2408094048c8ccbf5d887-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCd87c67bebbc2496e9c9bd3b73baf9345-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC6522caa287e14d50bd2a0f01ccfb4e79-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC63f7cb3e2b6e41ccb5b7d88fc5df313c-source.js',
            "language": "html",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RLd85bb73d69de4bb9b96398e30fa1e96e",
      "name": "Demandbase Completed",
      "events": [
        {
          "modulePath": "demandbase/dist/lib/events/apiCallFinishedSuccessFailOrTimeout.js",
          "settings": {
          },
          "ruleOrder": 2.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  window.demandbaseHasCompleted=true;
return window.demandbaseHasCompleted;
}
          },
          "timeout": 2000
        }
      ],
      "actions": [

      ]
    },
    {
      "id": "RLdab84ea626f64164ac3992e4288dea26",
      "name": "3P | CE Marketo Form - Submit",
      "events": [
        {
          "modulePath": "core/src/lib/events/customEvent.js",
          "settings": {
            "type": "marketoFormSubmitted",
            "bubbleFireIfParent": true,
            "bubbleFireIfChildFired": true
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "lead",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC5eb27bd115e04ea3a8f1644d9412c9f4-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCa505ed0d4b20463c9245909668915042-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RCfbf537526103441a9446f99f978ef397-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC52254e9e412c406aa4e5860f010828ba-source.js',
            "language": "html",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC55ff88b577934bb18b7bcff39a397927-source.js',
            "language": "html",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RLdba884fe8e4347ecbbd3e7bf49cb544c",
      "name": "Consent Banner",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "consent-banner"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Consent Banner Payload%",
            "data": "%Consent Banner Payload%",
            "type": "web.webinteraction.linkClicks",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RLde9975efe1a24eaca1203df7cf2ef30a",
      "name": "Demandbase | Data Layer Pushed Completed",
      "events": [

      ],
      "conditions": [

      ],
      "actions": [

      ]
    },
    {
      "id": "RLe384173938ea412aafa006fa66baa970",
      "name": "3P | Navigation",
      "events": [
        {
          "modulePath": "core/src/lib/events/click.js",
          "settings": {
            "elementSelector": "a",
            "bubbleFireIfParent": true,
            "bubbleFireIfChildFired": true
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var page_path = window.location.pathname;
let related_resources = /the-customer-experience-tipping-point-an-ipsos-and-medallia-study|textanalyticswhitepaper|text-analytics-cmos-secret-weapon|3-claves-para-transformar-su-empresa-esp|winning-customers-omnichannel-world|insurance-disrupted-how-customer-experience-can-help-insurers-build-trust-and-earn-loyalty|the-cx-tipping-point-banking-brief|the-state-of-customer-experience-management-in-b2b|business-case-customer-centric-culture/;
let result1 = related_resources.test(page_path);
let special_landing_pages = /forresters-new-wave-employee-experience|Customer-Retention|Medallia-Digital_LP|customer-surveys|launchpad-leading-solution|Digital-VoC-Toolkit-2018|customer-experience|experience-management-content|medallia-experience-cloud|Mobile-SDK-Best-Practices|platform\/journey-analy|customer-satisfaction|the-forrester-wave-cx-platforms-q1-2020|Customer-Loyalty_LP|CustomerFeedback_LP|medallia-for-salesforce|medallia-for-adobe-analytics|medallia-for-servicenow|ex-covid19|medallia-speech|medallia-quickstart|federal-employee-experience/;
let result2 = special_landing_pages.test(page_path);

if((this.parentElement.parentElement.className.indexOf("footer")>-1 || this.href == "https://www.medallia.com/" || this.parentElement.parentElement.className.indexOf("menu")>-1 )&& (page_path.indexOf("/net-promoter-score/")>-1 || (page_path.indexOf("resource")>-1 && result1) || result2)){
  return true;
}
else{
  return false;
}
}
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "bing-ads-extension/src/lib/actions/sendCustomEvent.js",
          "settings": {
            "ea": "",
            "ec": "page_view",
            "el": "",
            "ev": "",
            "gc": "USD",
            "gv": ""
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC03b51bbe9d714cb2b8469b3e89d4ecdf-source.js',
            "language": "html",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RLee10d6c342e34c979ec3a034cb46a5be",
      "name": "3P | CE  Demo Form Submission",
      "events": [
        {
          "modulePath": "core/src/lib/events/customEvent.js",
          "settings": {
            "type": "mkto.form.success",
            "bubbleFireIfParent": true,
            "bubbleFireIfChildFired": true
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  if(window.location.href.indexOf("https://www.medallia.com/demo")>-1){
  return true;
}
}
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/f268920b2ba3/fd16279af52f/4783c17557c5/RC6a7226db549842eda586e78560e1286f-source.js',
            "language": "html",
            "isExternal": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RLf433e5c145af4015a64986791598e151",
      "name": "Demandbase | Data Layer Pushed",
      "events": [
        {
          "modulePath": "gcoe-adobe-client-data-layer/src/lib/events/datalayerPushListener.js",
          "settings": {
            "scope": "all",
            "method": "specificEvent",
            "eventKey": "page-view"
          },
          "ruleOrder": 3.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  window.dataLayerPushedCompleted = true;
return !window.dataLayerPushedCompleted;
}
          },
          "timeout": 2000
        }
      ],
      "actions": [

      ]
    }
  ]
}
})();

var _satellite = (function () {
	'use strict';

	if (!window.atob) { console.warn('Adobe Launch is unsupported in IE 9 and below.'); return; }

	var reactorDocument = document;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEecalse;
		}
	}

	var objectAssign = shouldUseNative() ? Objeturn to;
	};

	var reactorObjectAssign = objectAssign;

	var reactorWindow = window;

	/***************************************************************************************
	 * (c) 2021 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createDynamicHostResolver = function (
	  turbineEmbedCode,
	  dynamicCdnEnabled,
	  cdnAllowList,
	  debugController
	) {
	  // A missing list means that we are not trying to dynamic replace (archives,
	  // sftp, no premium CDN option enabled on the company).
	  // even an empty list is flagging to us that we're trying to enforce dynamic
	  var isDynamicEnforced = Boolean(
	    dynamicCdnEnabled && Array.isArray(cdnAllowList)
	  );
	  var shouldAugment = Boolean(isDynamicEnforced && turbineEmbedCode);

	  // using document.createElement('a') because IE10/11 doesn't support new URL()
	  var turbineUrl = document.createElement('a');
	  if (isDynamicEnforced) {
	    var throwUnavailablrror;
	    };
	    if (turbineEmbedCode) {
	      if (!/^((https?:)?\/\/).+/.test(turbineEmbedCode)) {
	        throwUnavailableEmbedCode();
	      }
	      if (/^\/\/.+/.test(turbineEmbedCode)) {
	        // for IE 10, you must throw on the protocol
	        turbineUrl.href = reactorWindow.location.protocol + turbineEmbedCode;
	      } else {
	        turbineUrl.href = turbineEmbedCode;
	      }
	    }

	    // check URL construction
	    if (!turbineUrl.hostname) {
	      throwUnavailableEmbedCode();
	    }
	    // is this within the allowed list of hosts?
	    if (cdnAllowList.indexOf(turbineUrl.hostname) === -1) {
	      var dynamicDeniedError = new Error(
	        'This library is not authorized for this domain. ' +
	          'Please contact your CSM for more information.'
	      );
	      dynamicDeniedError.code = 'dynamic_host_not_allowed';
	      throw dynamicDeniedError;
	    }
	  }

	  /**
	   * Returns the host of the Turbine embed code, or an empty string if Dynamic Host
	   * is not enabled.
	   * @returns {string}
	   */
	  var memoizedHostResult;
	  var getTurbineHost = function () {
	    if (memoizedHostResult != null) {
	      return memoizedHostResult;
	    }

	    if (shouldAugment) {
	      // be sure we always force https to Adobe managed domains.
	      // IE 10/11 returns the :443 protocol when modern browsers don't, so this replacement
	      // is bringing every browser in line with the same return value
	      var sanitizedHost = turbineUrl.host;
	      if (/:80$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':80', '');
	      } else if (/:80\/$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':80/', '');
	      } else if (/:443$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':443', '');
	      } else if (/:443\/$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':443/', '');
	      }

	      memoizedHostResult = turbineUrl.protocol + '//' + sanitizedHost;
	    } else {
	      memoizedHostResult = '';
	    }

	    return memoizedHostResult;
	  };

	  /**
	   * Returns a url decorated with the host of the Turbine embed code. If Dynamic host
	   * is disabled, the original sourceUrl is returned unmodified.
	   * @param sourceUrl
	   * @returns {string|*}
	   */
	  var decorateWithDynamicHost = function (sourceUrl) {
	    if (shouldAugment && typeof sourceUrl === 'string') {
	      var urlParts = [
	        getTurbineHost(),
	        sourceUrl.charAt(0) === '/' ? sourceUrl.slice(1) : sourceUrl
	      ];

	      return urlParts.join('/');
	    }

	    return sourceUrl;
	  };

	  var dynamicHostResolver = {
	    getTurbineHost: getTurbineHost,
	    decorateWithDynamicHost: decorateWithDynamicHost,
	    get isDynamicEnforced() {
	      return isDynamicEnforced;
	    }
	  };

	  if (reactorWindow) {
	    debugController.onDebugChanged(function (isEnabled) {
	      if (isEnabled) {
	        reactorWindow.dynamicHostResolver = dynamicHostResolver;
	      } else {
	        delete reactorWindow.dynamicHostResolver;
	      }
	    });
	  }

	  return dynamicHostResolver;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Rules can be ordered by users at the event type level. For example, assume both Rule A and Rule B
	 * use the Library Loaded and Window Loaded event types. Rule A can be ordered to come before Rule B
	 * on Library Loaded but after Rule B on Window Loaded.
	 *
	 * Order values are integers and act more as a priority. In other words, multiple rules can have the
	 * same order value. If they have the same order value, their order of execution should be
	 * considered nondetermistic.
	 *
	 * @param {Array} rules
	 * @returns {Array} An ordered array of rule-event pair objects.
	 */
	var buildRuleExecutionOrder = function (rules) {
	  var ruleEventPairs = [];

	  rules.forEach(function (rule) {
	    if (rule.events) {
	      rule.ev});
	      });
	    }
	  });

	  return ruleEveeOrder;
	  });
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var DEBUG_LOCAL_STORAGE_NAME = 'debug';

	var createDebugController = function (localStorage, logger) {
	  var getPersistedDe'true';
	  };

	  var setPersistedDebugEnabled = function (enabled) {
	    localStorage.setItem(DEBUG_LOCAL_STORAGE_NAME, enabled);
	  };

	  var debugChangedCallbacks = [];
	  var onDebugChanged = function (callback) {
	    debugChangedCallbacks.push(callback);
	  };

	  logger.outputEnabled = getPersistedDebugEnabled();

	  return {
	    onDebugChanged: onDebugChanged,
	    getDebugEnabled: getPersistedDebugEnabled,
	    setDebugEnabled: function (enabled) {
	      if (getPersistedDebugEnabled() !== enabled) {
	        setPersistedDebugEnabled(enabled);
	        logger.outputEnabled = enabled;
	        debugChangedCallbacks.forEach(function (callback) {
	          callback(enabled);
	        });
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2018 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var MODULE_NOT_FUNCTION_ERROR = 'Module did not export a function.';

	var createExecuteDelegateModule = function (
	  moduleProvider,
	  replaceTokens,
	  settingsFileTransformer
	) {
	  return function (moduleDescriptor, syntheticEvent, moduleCallParameters) {
	    moduleCallParameters = moduleCallParameters || [];
	    var moduleExports = moduleProvider.getModuleExports(
	      moduleDescriptor.modulePath
	    );

	    if (typeof moduleExports !== 'function') {
	      throw new Error(MODULE_NOT_FUNCTION_ERROR);
	    }

	    // dynamically replace the host on the module settings
	    var moduleDefinition = moduleProvider.getModuleDefinition(
	      moduleDescriptor.modulePath
	    );

	    // We're transforming URLs in-place to ensure that the developer's settings object reference
	    // is the same object reference as moduleDescriptor.settings. Therefore, we must only transform
	    // the settings one time and save a reference saying that we've done that. We're saving this in
	    // the module descriptor of each event, condition, and action so that we aren't modifying the
	    // settings object.
	    var moduleSettings = moduleDescriptor.settings || {};
	    if (
	      !moduleDescriptor.hasTransformedFilePaths &&
	      moduleDefinition.filePaths
	    ) {
	      settingsFileTransformer(
	        moduleSettings,
	        moduleDefinition.filePaths,
	        moduleDescriptor.modulePath
	      );
	      moduleDescriptor.hasTransformedFilePaths = true;
	    }

	    // replace tokens
	    var moduleDescriptorSettings = replaceTokens(
	      moduleSettings,
	      syntheticEvent
	    );
	    return moduleExports
	      .bind(null, moduleDescriptorSettings)
	      .apply(null, moduleCallParameters);
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * "Cleans" text by trimming the string and removing spaces and newlines.
	 * @param {string} str The string to clean.
	 * @returns {string}
	 */
	var cleanText = function (str) {
	  return typeof str === 'string' ? str.replace(/\s+/g, ' ').trim() : str;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Log levels.
	 * @readonly
	 * @enum {string}
	 * @private
	 */
	var levels = {
	  LOG: 'log',
	  INFO: 'info',
	  DEBUG: 'debug',
	  WARN: 'warn',
	  ERROR: 'error'
	};

	/**
	 * Rocket unicode surrogate pair.
	 * @type {string}
	 */
	var ROCKET = '\uD83D\uDE80';

	/**
	 * The user's internet explorer version. If they're not running internet explorer, then it should
	 * be NaN.
	 * @type {Number}
	 */
	var ieVersion = parseInt(
	  (/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]
	);

	/**
	 * Prefix to use on all messages. The rocket unicode doesn't work on IE 10.
	 * @type {string}
	 */
	var launchPrefix = ieVersion === 10 ? '[Launch]' : ROCKET;

	/**
	 * Whether logged messages should be output to the console.
	 * @type {boolean}
	 */
	var outputEnabled = false;

	/**
	 * Processes a log message.
	 * @param {string} level The level of message to log.
	 * @param {...*} arg Any argument to be logged.
	 * @private
	 */
	var process = function (level) {
	  if (outputEnabled && window.console) {
	    var logArguments = Array.prototype.slice.call(arguments, 1);
	    logArguments.unshift(launchPrefix);
	    // window.debug is unsupported in IE 10
	    if (level === levels.DEBUG && !window.console[level]) {
	      level = levels.INFO;
	    }
	    window.console[level].apply(window.console, logArguments);
	  }
	};

	/**
	 * Outputs a message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var log = process.bind(null, levels.LOG);

	/**
	 * Outputs informational message to the web console. In some browsers a small "i" icon is
	 * displayed next to these items in the web console's log.
	 * @param {...*} arg Any argument to be logged.
	 */
	var info = process.bind(null, levels.INFO);

	/**
	 * Outputs debug message to the web console. In browsers that do not support
	 * console.debug, console.info is used instead.
	 * @param {...*} arg Any argument to be logged.
	 */
	var debug = process.bind(null, levels.DEBUG);

	/**
	 * Outputs a warning message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var warn = process.bind(null, levels.WARN);

	/**
	 * Outputs an error message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var error = process.bind(null, levels.ERROR);

	/**
	 * Outputs a warning message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var logDeprecation = function () {
	  var wasEnabled = outputEnabled;
	  outputEnabled = true;

	  process.apply(
	    null,
	    Array.prototype.concat(levels.WARN, Array.prototype.slice.call(arguments))
	  );

	  if (!wasEnabled) {
	    outputEnabled = false;
	  }
	};

	var logger = {
	  log: log,
	  info: info,
	  debug: debug,
	  warn: warn,
	  error: error,
	  deprecation: logDeprecation,
	  /**
	   * Whether logged messages should be output to the console.
	   * @type {boolean}
	   */
	  get outputEnabled() {
	    return outputEnabled;
	  },
	  set  value;
	  },
	  /**
	   * Creates a logging utility that only exposes logging functionality and prefixes all messages
	   * with an identifier.
	   */
	  createPre	    };
	  }
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var NAMESPACE = 'com.adobe.reactor.';

	var getNamespacedStorage = function (storageType, additionalNamespace) {
	  var finalNamespace = NAMESPACE + (additionalNamespace || '');

	  // When storage is disabled on Safari, the mere act of referencing window.localStorage
	  // or window.sessionStorage throws an error. For this reason, we wrap in a try-catch.
	  return {
	    /**
	     * Reads a value from storage.
	     * @param {string} name The name of the item to be read.
	     * @returns {string}
	     */
	    }
	    },
	    /**
	     * Saves a value to storage.
	     * @param {string} name The name of the item to be saved.
	     * @param {string} value The value of the item to be saved.
	     * @returns {boolean} Whether the item was successfully saved to storage.
	     */
	    setItem: function (name, value) {
	      try {
	        reactorWindow[storageType].setItem(finalNamespace + name, value);
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var DATA_ELEMENTS_NAMESPACE = 'dataElements.';

	var dataElementSessionStorage = getNamespacedStorage(
	  'sessionStorage',
	  DATA_ELEMENTS_NAMESPACE
	);
	var dataElementLocalStorage = getNamespacedStorage(
	  'localStorage',
	  DATA_ELEMENTS_NAMESPACE
	);

	var storageDurations = {
	  PAGEVIEW: 'pageview',
	  SESSION: 'session',
	  VISITOR: 'visitor'
	};

	var pageviewCache = {};

	varrialized;
	};

	var setValue = function (key, storageDuration, value) {
	  var serializedValue;

	  switch (storageDuration) {
	    case storageDurations.PAGEVIEW:
	      pageviewCache[key] = value;
	      return;
	    case storageDurations.SESSION:
	      serializedValue = serialize(value);
	      if (serializedValue) {
	        dataElementSessionStorage.setItem(key, serializedValue);
	      }
	      return;
	    case storageDurations.VISITOR:
	      serializedValue = serialize(value);
	      if (serializedValue) {
	        dataElementLocalStorage.setItem(key, serializedValue);
	      }
	      return;
	  }
	};

	var getValue = function (key, storageDuration) {
	  var value;

	  // It should consistently return the same value if no stored item was found. We chose null,
	  // though undefined could be a reasonable value as well.
	  switch (storageDuration) {
	    case storageDurations.PAGEVIEW:
	      return pageviewCache.hasOwnProperty(key) ? pageviewCache[key] : null;
	    case storageDurations.SESSION:
	      value = dataElementSessionStorage.getItem(key);
	      return value === null ? value : JSON.parse(value);
	    case storageDurations.VISITOR:
	      value = dataElementLocalStorage.getItem(key);
	      return value === null ? value : JSON.parse(value);
	  }
	};

	var dataElementSafe = {
	  setValue: setValue,
	  getValue: getValue
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var getEr'')
	  );
	};

	var createGetDataElementValue = function (
	  moduleProvider,
	  getDataElementDefinition,
	  replaceTokens,
	  undefinedVarsReturnEmpty,
	  settingsFileTransformer
	) {
	  return function (name, syntheticEvent) {
	    var dataDef = getDataElementDefinition(name);

	    if (!dataDef) {
	      return undefinedVarsReturnEmpty ? '' : undefined;
	    }

	    var storageDuration = dataDef.storageDuration;
	    var moduleExports;
	    var moduleDefinition;

	    try {
	      moduleExports = moduleProvider.getModuleExports(dataDef.modulePath);
	      moduleDefinition = moduleProvider.getModuleDefinition(dataDef.modulePath);
	    } catch (e) {
	      logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
	      return;
	    }

	    if (typeof moduleExports !== 'function') {
	      logger.error(
	        getErrorMessage(dataDef, name, 'Module did not export a function.')
	      );
	      return;
	    }

	    var value;

	    var dataElementSettings = dataDef.settings || {};
	    if (!dataDef.hasTransformedFilePaths && moduleDefinition.filePaths) {
	      settingsFileTransformer(
	        dataElementSettings,
	        moduleDefinition.filePaths,
	        dataDef.modulePath
	      );
	      dataDef.hasTransformedFilePaths = true;
	    }

	    try {
	      value = moduleExports(
	        replaceTokens(dataElementSettings, syntheticEvent),
	        syntheticEvent
	      );
	    } catch (e) {
	      logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
	      return;
	    }

	    if (storageDuration) {
	      if (value != null) {
	        dataElementSafe.setValue(name, storageDuration, value);
	      } else {
	        value = dataElementSafe.getValue(name, storageDuration);
	      }
	    }

	    if (value == null && dataDef.defaultValue != null) {
	      value = dataDef.defaultValue;
	    }

	    if (typeof value === 'string') {
	      if (dataDef.cleanText) {
	        value = cleanText(value);
	      }

	      if (dataDef.forceLowerCase) {
	        value = value.toLowerCase();
	      }
	    }

	    return value;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var specialPropertyAccessors = {
	  text: function (obj) {
	    return obj.textContent;
	  },
	  cleanText: function (obj) {
	    return cleanText(obj.textContent);
	  }
	};

	/**
	 * This returns the value of a property at a given path. For example, a <code>path<code> of
	 * <code>foo.bar</code> will return the value of <code>obj.foo.bar</code>.
	 *
	 * In addition, if <code>path</code> is <code>foo.bar.getAttribute(unicorn)</code> and
	 * <code>obj.foo.bar</code> has a method named <code>getAttribute</code>, the method will be
	 * called with a value of <code>"unicorn"</code> and the value will be returned.
	 *
	 * Also, if <code>path</code> is <code>foo.bar.@text</code> or other supported properties
	 * beginning with <code>@</code>, a special accessor will be used.
	 *
	 * @param host
	 * @param path
	 * @param supportSpecial
	 * @returns {*}
	 */
	var getObjectProperty = function (host, propChain, supportSpecial) {
	  var value = host;
	  var attrMatch;
	  for (var i = 0, len = propChain.length; i < len; i++) {
	    if (value == null) {
	      return undefined;
	    }
	    var prop = propChain[i];
	    if (supportSpecial && prop.charAt(0) === '@') {
	      var specialProp = prop.slice(1);
	      value = specialPropertyAccessors[specialProp](value);
	      continue;
	    }
	    if (
	      value.getAttribute &&
	      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))
	    ) {
	      var attr = attrMatch[1];
	      value = value.getAttribute(attr);
	      continue;
	    }
	    value = value[prop];
	  }
	  return value;
	};

	/**
	 * Returns the value of a variable.
	 * @param {string} variable
	 * @param {Object} [syntheticEvent] A synthetic event. Only required when using %event... %this...
	 * or %target...
	 * @returns {*}
	 */
	var createGetVar = function (
	  customVars,
	  getDataElementDefinition,
	  getDataElementValue
	) {
	  return function (variable, syntheticEvent) {
	    var value;

	    if (getDataElementDefinition(variable)) {
	      // Accessing nested properties of a data element using dot-notation is unsupported because
	      // users can currently create data elements with periods in the name.
	      value = getDataElementValue(variable, syntheticEvent);
	    } else {
	      var propChain = variable.split('.');
	      var variableHostName = propChain.shift();

	      if (variableHostName === 'this') {
	        if (syntheticEvent) {
	          // I don't know why this is the only one that supports special properties, but that's the
	          // way it was in Satellite.
	          value = getObjectProperty(syntheticEvent.element, propChain, true);
	        }
	      } else if (variableHostName === 'event') {
	        if (syntheticEvent) {
	          value = getObjectProperty(syntheticEvent, propChain);
	        }
	      } else if (variableHostName === 'target') {
	        if (syntheticEvent) {
	          value = getObjectProperty(syntheticEvent.target, propChain);
	        }
	      } else {
	        value = getObjectProperty(customVars[variableHostName], propChain);
	      }
	    }

	    return value;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Determines if the provided name is a valid variable, where the variable
	 * can be a data element, element, event, target, or custom var.
	 * @param variableName
	 * @returns {boolean}
	 */
	var createIsVar = function (customVars, getDataElementDefinition) {
	  return function (variableName) {
	    var nameBeforeDot = variableName.split('.')[0];

	    return Boolean(
	      getDataElementDefinition(variableName) ||
	        nameBeforeDot === 'this' ||
	        nameBeforeDot === 'event' ||
	        nameBeforeDot === 'target' ||
	        customVars.hasOwnProperty(nameBeforeDot)
	    );
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var extractModuleExports = function (script, require, turbine) {
	  var module = {
	    exports: {}
	  };

	  script.call(module.exports, module, module.exports, require, turbine);

	  return module.exports;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createModuleProvider = function () {
	  var moduleByReferencePath = {};

	  var getModule = function (referencePath) {
	    var module = moduleByReferencePath[referencePath];

	    if (!module) {
	      throw new Error('Module ' + referencePath + ' not found.');
	    }

	    return module;
	  };

	  var registerModule = function (
	    referencePath,
	    moduleDefinition,
	    extensionName,
	    require,
	    turbine
	  ) {
	    var module = {
	      definition: moduleDefinition,
	      extensionName: extensionName,
	      require: require,
	      turbine: turbine
	    };
	    module.require = require;
	    moduleByReferencePath[referencePath] = module;
	  };

	  var hy    });
	  };

	  var getModuleExports = function (referencePath) {
	    var module = getModule(referencePath);

	    // Using hasOwnProperty instead of a falsey check because the module could export undefined
	    // in which case we don't want to execute the module each time the exports is requested.
	    if (!module.hasOwnProperty('exports')) {
	      module.exports = extractModuleExports(
	        module.definition.script,
	        module.require,
	        module.turbine
	      );
	    }

	    return module.exports;
	  };

	  var getModuleDefinition = function (referencePath) {
	    return getModule(referencePath).definition;
	  };

	  var getModuleExtonName;
	  };

	  return {
	    registerModule: registerModule,
	    hydrateCache: hydrateCache,
	    getModuleExports: getModuleExports,
	    getModuleDefinition: getModuleDefinition,
	    getModuleExtensionName: getModuleExtensionName
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var warningLogged = false;

	var createNotifyMonitors = function (_satellite) {
	  return function (type, event) {
	    var monitors = _satellite._monitors;

	    if (monitors) {
	      if (!warningLogged) {
	        logger.warn(
	          'The _satellite._monitors API may change at any time and should only ' +
	            'be used for debugging.'
	        );
	        warningLogged = true;
	      }

	      monitors.forEach(function (monitor) {
	        if (monitor[type]) {
	          monitor[type](event);
	        }
	      });
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Replacing any variable tokens (%myDataElement%, %this.foo%, etc.) with their associated values.
	 * A new string, object, or array will be created; the thing being processed will never be
	 * modified.
	 * @param {*} thing Thing potentially containing variable tokens. Objects and arrays will be
	 * deeply processed.
	 * @param {HTMLElement} [element] Associated HTML element. Used for special tokens
	 * (%this.something%).
	 * @param {Object} [event] Associated event. Used for special tokens (%event.something%,
	 * %target.something%)
	 * @returns {*} A processed value.
	 */
	var createReplaceTokens = function (isVar, getVar, undefinedVarsReturnEmpty) {
	  var replaceTokensInString;
	  var replaceTokensInObject;
	  var replaceTokensInArray;
	  var replaceTokens;
	  var variablesBeingRetrieved = [];

	  var getVarValue = function (token, variableName, syntheticEvent) {
	    if (!isVar(variableName)) {
	      return token;
	    }

	    variablesBeingRetrieved.push(variableName);
	    var val = getVar(variableName, syntheticEvent);
	    variablesBeingRetrieved.pop();
	    return val == null && undefinedVarsReturnEmpty ? '' : val;
	  };

	  /**
	   * Perform variable substitutions to a string where tokens are specified in the form %foo%.
	   * If the only content of the string is a single data element token, then the raw data element
	   * value will be returned instead.
	   *
	   * @param str {string} The string potentially containing data element tokens.
	   * @param element {HTMLElement} The element to use for tokens in the form of %this.property%.
	   * @param event {Object} The event object to use for tokens in the form of %target.property%.
	   * @returns {*}
	   */
	  replaceTokensInString = function (str, syntheticEvent) {
	    // Is the string a single data element token and nothing else?
	    var result = /^%([^%]+)%$/.exec(str);

	    if (result) {
	      return getVarValue(str, result[1], syntheticEvent);
	    } else {
	      return str.replacet);
	      });
	    }
	  };

	  replaceTokensInObject = function (obj, syntheticEvent) {
	    var ret = {};
	    var keys = Object.keys(obj);
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      ret[key] = replaceTokens(value, syntheticEvent);
	    }
	    return ret;
	  };

	  replaceTokensInArray = function (arr, syntheticEvent) {
	    var ret = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      ret.push(replaceTokens(arr[i], syntheticEvent));
	    }
	    return ret;
	  };

	  replaceTokens = function (thing, syntheticEvent) {
	    if (typeof thing === 'string') {
	      return replaceTokensInString(thing, syntheticEvent);
	    } else if (Array.isArray(thing)) {
	      return replaceTokensInArray(thing, syntheticEvent);
	    } else if (typeof thing === 'object' && thing !== null) {
	      return replaceTokensInObject(thing, syntheticEvent);
	    }

	    return thing;
	  };

	  return function (thing, syntheticEvent) {
	    // It's possible for a data element to reference another data element. Because of this,
	    // we need to prevent circular dependencies from causing an infinite loop.
	    if (variablesBeingRetrieved.length > 10) {
	      logger.error(
	        'Data element circular reference detected: ' +
	          variablesBeingRetrieved.join(' -> ')
	      );
	      return thing;
	    }

	    return replaceTokens(thing, syntheticEvent);
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var createSetCustomVar = function (customVars) {
	  return function () {
	    if (typeof arguments[0] === 'string') {
	      customVars[arguments[0]] = arguments[1];
	    } else if (arguments[0]) {
	      // assume an object literal
	      var mapping = arguments[0];
	      for (var key in mapping) {
	        customVars[key] = mapping[key];
	      }
	    }
	  };
	};

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? re.exports;
	}

	/**
	 * @this {Pr  }
	  );
	}

	// Store setTimeout reference so promise-polyfill will be unaffected by
	// other code modifying setTimeout (like sinon.useFakeTimers())
	var setTimeoutFunc = sefon noop() {}

	// Polyfill for Function.pros);
	  };
	}

	/**
	 * @constructor
	 * @param {Functin,); eles = null;
	}

	/**
	 * @const promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asyncex);
	  }
	}

	Promise$1.prototypejected);
	};

	Promise$1.proturn prom;
	};

	Promise$1.prototype['finally'] = finallyConstructor;

	Pro }
	  });
	};

	Promise);
	  });
	};

	Promis);
	  });
	};

	Prom }
	  });
	};

	// Use polyfill for setImmediate for performance gains
	Promise$1._immediateFn =
	  // @ts-ignore
	  (typeof setImmediate === 'funct(fn);
	fn, 0);
	  };

	Promise$1._unhandledRsole
	  }
	};

	var src$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': Promise$1
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(src$1);

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	// For building Turbine we are using Rollup. For running the turbine tests we are using
	// Karma + Webpack. You need to specify the default import when using promise-polyfill`
	// with Webpack 2+. We need `require('promise-polyfill').default` for running the tests
	// and `require('promise-polyfill')` for building Turbine.
	var reactorPromise =
	  (typeof window !== 'undefined' && window.Promise) ||
	  (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.Promise) ||
	  require$$0.default ||
	  require$$0;

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createAddActionToQueue = function (
	  executeDelegateModule,
	  normalizeRuleComponentError,
	  logActionError
	) {
	  return function (action, rule, syntheticEvent, lastPromiseInQueue) {
	    return lastPromiseInQueue.then(function () {
	      // This module is used when ruleComponentSequencing is enabled.
	      // action.timeout is always supplied to this module as >= 0 when delayNext is true.

	      var delayNextAction = action.delayNext;
	      var actionTimeoutId;

	      return new reactorPromise(function (resolve, reject) {
	        var moduleResult = executeDelegateModule(action, syntheticEvent, [
	          syntheticEvent
	        ]);

	        if (!delayNextAction) {
	          return resolve();
	        }

	        var promiseTimeoutMs = action.timeout;
	        var timeoutPromise = new reactorPromise(function (resolve, reject) {
	          actionTimeoutId = setTimeout(function () {
	            reject(
	              new Error(
	                'A timeout occurred because the action took longer than ' +
	                  promiseTimeoutMs / 1000 +
	                  ' seconds to complete. '
	              )
	            );
	          }, promiseTimeoutMs);
	        });

	        reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
	      })
	        .catch(function (e) {
	          clearTimeout(actionTimeoutId);
	          e = normalizeRuleComponentError(e);
	          logActionError(action, rule, e);
	          return reactorPromise.reject(e);
	        })
	        .then(function () {
	          clearTimeout(actionTimeoutId);
	        });
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createAddConditionToQueue = function (
	  executeDelegateModule,
	  normalizeRuleComponentError,
	  isConditionMet,
	  logConditionError,
	  logConditionNotMet
	) {
	  return function (condition, rule, syntheticEvent, lastPromiseInQueue) {
	    return lastPromiseInQueue.then(function () {
	      // This module is used when ruleComponentSequencing is enabled.
	      // condition.timeout is always supplied to this module as >= 0.
	      // Conditions always assume delayNext = true because we have to know the
	      // condition result before moving on.
	      var conditionTimeoutId;

	      return new reactorPromise(function (resolve, reject) {
	        var moduleResult = executeDelegateModule(condition, syntheticEvent, [
	          syntheticEvent
	        ]);

	        var promiseTimeoutMs = condition.timeout;
	        var timeoutPromise = new re;
	        });

	        reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
	      })
	        .catch(function (e) {
	          clearTimeout(conditionTimeoutId);
	          e = normalizeRuleComponentError(e);
	          logConditionError(condition, rule, e);
	          return reactorPromise.reject(e);
	        })
	        .then(function (result) {
	          clearTimeout(conditionTimeoutId);
	          if (!isConditionMet(condition, result)) {
	            logConditionNotMet(condition, rule);
	            return reactorPromise.reject();
	          }
	        });
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var lastPromiseInQueue = reactorPromise.resolve();

	var createAddRuleToQueue = function (
	  addConditionToQueue,
	  addActionToQueue,
	  logRuleCompleted
	) {
	  return function (rule, syntheticEvent) {
	    if (rule.conditions) {
	      rule.conditions.forEach(function (condition) {
	        lastPromiseInQueue = addConditionToQueue(
	          condition,
	          rule,
	          syntheticEvent,
	          lastPromiseInQueue
	        );
	      });
	    }

	    if (rule.actions) {
	      rule.act );
	      });
	    }

	    lastPromiseInQueue = lastPromiseule);
	    });

	    // Allows later rules to keep running when an error occurs within this rule.
	    lastPromiseInQueue = lastPromiseInQueue.catch(function () {});

	    return lastPromiseInQueue;
	  };
	};

	var isPromiseLike = function (value) {
	  return Boolean(
	    value && typeof value === 'object' && typeof value.then === 'function'
	  );
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createEvaluateConditions = function (
	  executeDelegateModule,
	  isConditionMet,
	  logConditionNotMet,
	  logConditionError
	) {
	  return function (rule, syntheticEvent) {
	    var condition;

	    if (rule.conditions) {
	      for (var i = 0; i < rule.conditions.length; i++) {
	        condition = rule.conditions[i];

	        try {
	          var result = executeDelegateModule(condition, syntheticEvent, [
	            syntheticEvent
	          ]);

	          // If the result is promise-like, the extension needs to do something asynchronously,
	          // but the customer does not have rule component sequencing enabled on the property.
	          // If we didn't do this, the condition would always pass because the promise is
	          // considered "truthy".
	          if (isPromiseLike(result)) {
	            throw new Error(
	              'Rule component sequencing must be enabled on the property ' +
	                'for this condition to function properly.'
	            );
	          }

	          if (!isConditionMet(condition, result)) {
	            logConditionNotMet(condition, rule);
	            return false;
	          }
	        } catch (e) {
	          logConditionError(condition, rule, e);
	          return false;
	        }
	      }
	    }

	    return true;
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createExecuteRule = function (evaluateConditions, runActions) {
	  return function (rule, normalizedSyntheticEvent) {
	    if (evaluateConditions(rule, normalizedSyntheticEvent)) {
	      runActions(rule, normalizedSyntheticEvent);
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createGetModuleDisplayNameByRul );
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createGetSyntheticEventMeta = function (moduleProvider) {
	  return function (ruleEventPair) {
	    var rule = ruleEventPair.rule;
	    var event = ruleEventPair.event;

	    var moduleName = moduleProvider.getModuleDefinition(event.modulePath).name;
	    var extensionName = moduleProvider.getModuleExtensionName(event.modulePath);

	    return {
	      $type: extensionName + '.' + moduleName,
	      $rule: {
	        id: rule.id,
	        name: rule.name
	      }
	    };
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createInitEventModule = function (
	  triggerRule,
	  executeDelegateModule,
	  normalizeSyntheticEvent,
	  getErrorMessage,
	  getSyntheticEventMeta,
	  logger
	) {
	  return function (guardUntilAllInitialized, ruleEventPair) {
	    var rule = ruleEventPair.rule;
	    var event = ruleEventPair.event;
	    event.settings = event.settings || {};

	    try {
	      var syntheticEventMeta = getSyntheticEventMeta(ruleEventPair);

	      executeDelegateModule(event, null, [
	        /**
	         * This is the callback that executes a particular rule when an event has occurred.
	         * @param {Object} [syntheticEvent] An object that contains detail regarding the event
	         * that occurred.
	        ;
	        }
	      ]);
	    } catch (e) {
	      logger.error(getErrorMessage(event, rule, e));
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogActionError = function (
	  getRuleComponentErrorMessage,
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (action, rule, e) {
	    var actionDisplayName = getModuleDisplayNameByRuleComponent(action);

	    logger.error(getRuleComponentErrorMessage(actionDisplayName, rule.name, e));

	    notifyMonitors('ruleActionFailed', {
	      rule: rule,
	      action: action
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogConditionError = function (
	  getRuleComponentErrorMessage,
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (condition, rule, e) {
	    var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);

	    logger.error(
	      getRuleComponentErrorMessage(conditionDisplayName, rule.name, e)
	    );

	    notifyMonitors('ruleConditionFailed', {
	      rule: rule,
	      condition: condition
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogConditionNotMet = function (
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (condition, rule) {
	    var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);

	    logger.log(
	      'Condition "' +
	        conditionDisplayName +
	        '" for rule "' +
	        rule.name +
	        '" was not met.'
	    );

	    notifyMonitors('ruleConditionFailed', {
	      rule: rule,
	      condition: condition
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogRuleCompleted = function (logger, notifyMonitors) {
	  return function (rule) {
	    logger.log('Rule "' + rule.name + '" fired.');
	    notifyMonitors('ruleCompleted', {
	      rule: rule
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createRunActions = function (
	  executeDelegateModule,
	  logActionError,
	  logRuleCompleted
	) {
	  return function (rule, syntheticEvent) {
	    var action;

	    if (rule.actions) {
	      for (var i = 0; i < rule.actions.length; i++) {
	        action = rule.actions[i];
	        try {
	          executeDelegateModule(action, syntheticEvent, [syntheticEvent]);
	        } catch (e) {
	          logActionError(action, rule, e);
	          return;
	        }
	      }
	    }

	    logRuleCompleted(rule);
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createTriggerRule = function (
	  ruleComponentSequencingEnabled,
	  executeRule,
	  addRuleToQueue,
	  notifyMonitors
	) {
	  return function (normalizedSyntheticEvent, rule) {
	    notifyMonitors('ruleTriggered', {
	      rule: rule
	    });

	    if (ruleComponentSequencingEnabled) {
	      addRuleToQueue(rule, normalizedSyntheticEvent);
	    } else {
	      executeRule(rule, normalizedSyntheticEvent);
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var getRuleComponentEr'')
	  );
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var isCo.negate);
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var triggerCallQueue = [];
	var eventModulesInitialized = false;

	var guardUntilAllInitialized = function (callback) {
	  if (!eventModulesInitialized) {
	    triggerCallQueue.push(callback);
	  } else {
	    callback();
	  }
	};

	var initRules = function (buildRuleExecutionOrder, rules, initEventModule) {
	  buildRuleExecutionOrder(rutPair);
	  });

	  eventModulesInitialized = true;
	  triggerCallQCall();
	  });

	  triggerCallQueue = [];
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var normalizeRuleComponentError = function (e) {
	  if (!e) {
	    e = new Error(
	      'The extension triggered an error, but no error information was provided.'
	    );
	  }

	  if (!(e instanceof Error)) {
	    var stringifiedError =
	      typeof e === 'object' ? JSON.stringify(e) : String(e);
	    e = new Error(stringifiedError);
	  }

	  return e;
	};

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	va== false;
	};

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT LicenObject]';
	}

	var isPurn true;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Normalizes a synthetic event so that it exists and has at least meta.
	 * @param {Object} syntheticEventMeta
	 * @param {Object} [syntheticEvent]
	 * @returns {Object}
	 */
	var normalizeSyntheticEvent = function (syntheticEventMeta, syntheticEvent) {
	  syntheticEvent = syntheticEvent || {};

	  // This ensures that as the user hands us a synthetic event for multiple rules,
	  // we aren't overwriting a new meta into the same object reference.
	  if (isPlainObject(syntheticEvent)) {
	    syntheticEvent = reactorObjectAssign({}, syntheticEvent, syntheticEventMeta);
	  } else {
	    // When syntheticEvent is not an object, there's nothing we can guarantee
	    // about the ability to "copy". Leave it alone.
	    reactorObjectAssign(syntheticEvent, syntheticEventMeta);
	  }

	  // Remove after some arbitrary time period when we think users have had sufficient chance
	  // to move away from event.type
	  if (!syntheticEvent.hasOwnProperty('type')) {
	    Object.defineProperty(syntheticEvent, 'type', {
	      get: function () {
	        logger.deprecation(
	          'Accessing event.type in Adobe Launch has been deprecated and will be ' +
	            'removed soon. Please use event.$type instead.'
	        );
	        return syntheticEvent.$type;
	      }
	    });
	  }

	  return syntheticEvent;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called with an extension name and module name, will return the
	 * exports of the respective shared module.
	 *
	 * @param {Object} extensions
	 * @param {Object} moduleProvider
	 * @returns {Function}
	 */
	var createGetSharedModuleExports = function (extensions, moduleProvider) {
	  return function (extensionName, moduleName) {
	    var extension = extensions[extensionName];

	    if (extension) {
	      var modules = extension.modules;
	      if (modules) {
	        var referencePaths = Object.keys(modules);
	        for (var i = 0; i < referencePaths.length; i++) {
	          var referencePath = referencePaths[i];
	          var module = modules[referencePath];
	          if (module.shared && module.name === moduleName) {
	            return moduleProvider.getModuleExports(referencePath);
	          }
	        }
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called, will return a configuration object with data element
	 * tokens replaced.
	 *
	 * @param {Object} settings
	 * @returns {Function}
	 */
	var createGetExtensi{};
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called, will return the full hosted lib file URL.
	 *
	 * @param {string} hostedLibFilesBaseUrl
	 * @returns {Function}
	 */

	var createGetHostedLibFileUrl = function (
	  decorateWithDynamicHost,
	  hostedLibFilesBaseUrl,
	  minified
	) {
	  return function (file) {
	    if (minified) {
	      var fileParts = file.split('.');
	      fileParts.splice(fileParts.length - 1 || 1, 0, 'min');
	      file = fileParts.join('.');
	    }

	    return decorateWithDynamicHost(hostedLibFilesBaseUrl) + file;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var JS_EXTENSION = '.js';

	/**
	 * @private
	 * Returns the directory of a path. A limited version of path.dirname in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * path has a least one slash
	 * path does not end with a slash
	 * path does not have empty segments (e.g., /src/lib//foo.bar)
	 *
	 * @param {string} path
	 * @returns {string}
	 */
	vOf('/'));
	};

	/**
	 * Determines if a string ends with a certain string.
	 * @param {string} str The string to test.
	 * @param {string} suffix The suffix to look for at the end of str.
	 * @returns {boolean} Whether str ends in suffix.
	 */
	va) !== -1;
	};

	/**
	 * Given a starting path and a path relative to the starting path, returns the final path. A
	 * limited version of path.resolve in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * fromPath has at least one slash
	 * fromPath does not end with a slash.
	 * fromPath does not have empty segments (e.g., /src/lib//foo.bar)
	 * relativePath starts with ./ or ../
	 *
	 * @param {string} fromPath
	 * @param {string} relativePath
	 * @returns {string}
	 */
	var resolveRelativePath = function (fromPath, relativePath) {
	  // Handle the case where the relative path does not end in the .js extension. We auto-append it.
	  if (!endsWith(relativePath, JS_EXTENSION)) {
	    relativePath = relativePath + JS_EXTENSION;
	  }

	  var relativePathSegments = relativePath.split('/');
	  var resolvedPathSegments = dirname(fromPath).split('/');

	  relativePathSegments.forEach(function (relativePathSegment) {
	    if (!relativePathSegment || relativePathSegment === '.') {
	      return;
	    } else if (relativePathSegment === '..') {
	      if (resolvedPathSegments.length) {
	        resolvedPathSegments.pop();
	      }
	    } else {
	      resolvedPathSegments.push(relativePathSegment);
	    }
	  });

	  return resolvedPathSegments.join('/');
	};

	/*!
	 * JavaScript Cookie v2.2.1
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */

	var js_cookie = createCommonjsModule(function (module, exports) {
	(function (factory) {
		var registeredInModuleLoader;
		{
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.rn api;
n () {});
	}));
	});

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	// js-cookie has other methods that we haven't exposed here. By limiting the exposed API,
	// we have a little more flexibility to change the underlying implementation later. If clear
	// use cases come up for needing the other methods js-cookie exposes, we can re-evaluate whether
	// we want to expose them here.
	var reactorCookie = {
	  get: js_cookie.get,
	  set: js_cookie.set,
	  remove: js_cookie.remove
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	var getPromise = function(url, script) {
	  return new reactorPromise(function(resolve, reject) {
	    script.onload = function() {
	      resolve(script);
	    };

	    scrirl));
	    };
	  });
	};

	var reactorLoadScript = function(url) {
	  var script = document.createElement('script');
	  script.src = url;
	  script.async = true;

	  var promise = getPromise(url, script);

	  document.getElementsByTagName('head')[0].appendChild(script);
	  return promise;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/j, prop);
	}

	turn obj;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	var stringif '';
	  }
	};

	ve(obj));
	};

	var querystring = createCo= encode;
	});

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	// We proxy the underlying querystring module so we can limit the API we expose.
	// This allows us to more easily make changes to the underlying implementation later without
	// having to worry about breaking extensions. If extensions demand additional functionality, we
	// can make adjustments as needed.
	var reactorQueryString = {
	  parse: function(string) {
	    //
	    if (typeof string === 'string') {
	      // Remove leading ?, #, & for some leniency so you can pass in location.search or
	      // location.hash directly.
	      string = string.trim().replace(/^[?#&]/, '');
	    }
	    return querystring.parse(string);
	  },
	  stringify: function(object) {
	    return querystring.stringify(object);
	  }
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var CORE_MODULE_PREFIX = '@adobe/reactor-';

	var modules = {
	  cookie: reactorCookie,
	  document: reactorDocument,
	  'load-script': reactorLoadScript,
	  'object-assign': reactorObjectAssign,
	  promise: reactorPromise,
	  'query-string': reactorQueryString,
	  window: reactorWindow
	};

	/**
	 * Creates a function which can be passed as a "require" function to extension modules.
	 *
	 * @param {Function} getModuleExportsByRelativePath
	 * @returns {Function}
	 */
	var createPublicRequire = function (getModuleExportsByRelativePath) {
	  return function (key) {
	    if (key.indexOf(CORE_MODULE_PREFIX) === 0) {
	      var keyWithoutScope = key.substr(CORE_MODULE_PREFIX.length);
	      var module = modules[keyWithoutScope];

	      if (module) {
	        return module;
	      }
	    }

	    if (key.indexOf('./') === 0 || key.indexOf('../') === 0) {
	      return getModuleExportsByRelativePath(key);
	    }

	    throw new Error('Cannot resolve module "' + key + '".');
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateModuleProvider = function (
	  container,
	  moduleProvider,
	  debugController,
	  replaceTokens,
	  getDataElementValue,
	  settingsFileTransformer,
	  decorateWithDynamicHost
	) {
	  var extensions = container.extensions;
	  var buildInfo = container.buildInfo;
	  var environment = container.environment;
	  var propertySettings = container.property.settings;

	  if (extensions) {
	    var getSharedModuleExports = createGetSharedModuleExports(
	      extensions,
	      moduleProvider
	    );

	    Object.keys(extensions).forEach(function (extensionName) {
	      var extension = extensions[extensionName];
	      var extensionSettings = extension.settings;
	      if (Array.isArray(extension.filePaths)) {
	        extensionSettings = settingsFileTransformer(
	          extensionSettings,
	          extension.filePaths
	        );
	      }
	      var getExtensionSettings = createGetExtensionSettings(
	        replaceTokens,
	        extensionSettings
	      );

	      if (extension.modules) {
	        var prefixedLogger = logger.createPrefixedLogger(extension.displayName);
	        var getHostedLibFileUrl = createGetHostedLibFileUrl(
	          decorateWithDynamicHost,
	          extension.hostedLibFilesBaseUrl,
	          buildInfo.minified
	        );
	        var turbine = {
	          buildInfo: buildInfo,
	          environment: environment,
	          property: {
	            name: container.property.name,
	            id: container.property.id
	          },
	          getDataElementValue: getDataElementValue,
	          getExtensionSettings: getExtensionSettings,
	          getHostedLibFileUrl: getHostedLibFileUrl,
	          getSharedModule: getSharedModuleExports,
	          logger: prefixedLogger,
	          propertySettings: propertySettings,
	          replaceTokens: replaceTokens,
	          onDebugChanged: debugController.onDebugChanged,
	          get debugEnabled() {
	            return debugController.getDebugEnabled();
	          }
	        };

	        Object.keys(extension.modules).forEach(function (referencePath) {
	          var module = extension.modules[referencePath];
	          var getModuleExportsByRe	          };
	          var publicRequire = createPublicRequire(
	            getModuleExportsByRelativePath
	          );

	          moduleProvider.registerModule(
	            referencePath,
	            module,
	            extensionName,
	            publicRequire,
	            turbine
	          );
	        });
	      }
	    });

	    // We want to extract the module exports immediately to allow the modules
	    // to run some logic immediately.
	    // We need to do the extraction here in order for the moduleProvider to
	    // have all the modules previously registered. (eg. when moduleA needs moduleB, both modules
	    // must exist inside moduleProvider).
	    moduleProvider.hydrateCache();
	  }
	  return moduleProvider;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateSatelliteObject = function (
	  _satellite,
	  container,
	  setDebugEnabled,
	  getVar,
	  setCustomVar
	) {
	  var customScriptPrefixedLogger = logger.createPrefixedLogger('Custom Script');

	  // Will get replaced by the directCall event delegate from the Core extension. Exists here in
	  // case there are no direct call rules (and therefore the directCall event delegate won't get
	  // included) and our customers are still calling the method. In this case, we don't want an error
	  // to be thrown. This method existed before Reactor.
	  _satel	    );
	  };

	  // Will get replaced by the Marketing Cloud ID extension if installed. Exists here in case
	  // the extension is not installed and our customers are still calling the method. In this case,
	  // we don't want an error to be thrown. This method existed before Reactor.
	  _satellite.gen null;
	  };

	  // container.property also has property settings, but it shouldn't concern the user.
	  // By limiting our API exposure to necessities, we provide more flexibility in the future.
	  _satellite.property = {
	    name: container.property.name,
	    id: container.property.id
	  };

	  _satellite.company = container.company;

	  _satellite.buildInfo = container.buildInfo;

	  _satellite.environment = container.environment;

	  _satellite.logger = customScriptPrefixedLogger;

	  /**
	   * Log a message. We keep this due to legacy baggage.
	   * @param {string} message The message to log.
	   * @param {number} [level] A number that represents the level of logging.
	   * 3=info, 4=warn, 5=error, anything else=log
	   */
	  _satellite.notify = function (message, level) {
	    logger.deprecation(
	      '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
	    );

	    switch (level) {
	      case 3:
	        customScriptPrefixedLogger.info(message);
	        break;
	      case 4:
	        customScriptPrefixedLogger.warn(message);
	        break;
	      case 5:
	        customScriptPrefixedLogger.error(message);
	        break;
	      default:
	        customScriptPrefixedLogger.log(message);
	    }
	  };

	  _satellite.getVar = getVar;
	  _satellite.setVar = setCustomVar;

	  /**
	   * Writes a cookie.
	   * @param {string} name The name of the cookie to save.
	   * @param {string} value The value of the cookie to save.
	   * @param {number} [days] The number of days to store the cookie. If not specified, the cookie
	   * will be stored for the session only.
	   */
	  _satellite.setCookie = function (name, value, days) {
	    var optionsStr = '';
	    var options = {};

	    if (days) {
	      optionsStr = ', { expires: ' + days + ' }';
	      options.expires = days;
	    }

	    var msg =
	      '_satellite.setCookie is deprecated. Please use ' +
	      '_satellite.cookie.set("' +
	      name +
	      '", "' +
	      value +
	      '"' +
	      optionsStr +
	      ').';

	    logger.deprecation(msg);
	    reactorCookie.set(name, value, options);
	  };

	  /**
	   * Reads a cookie value.
	   * @param {string} name The name of the cookie to read.
	   * @returns {string}
	   */
	  _satellite.readCookie = function (name) {
	    logger.deprecation(
	      '_satellite.readCookie is deprecated. ' +
	        'Please use _satellite.cookie.get("' +
	        name +
	        '").'
	    );
	    return reactorCookie.get(name);
	  };

	  /**
	   * Removes a cookie value.
	   * @param name
	   */
	  _satellite.removeCookie = function (name) {
	    logger.deprecation(
	      '_satellite.removeCookie is deprecated. ' +
	        'Please use _satellite.cookie.remove("' +
	        name +
	        '").'
	    );
	    reactorCookie.remove(name);
	  };

	  _satellite.cookie = reactorCookie;

	  // Will get replaced by the pageBottom event delegate from the Core extension. Exists here in
	  // case the customers are not using core (and therefore the pageBottom event delegate won't get
	  // included) and they are still calling the method. In this case, we don't want an error
	  // to be thrown. This method existed before Reactor.
	  _satellite.pageBottom = function () {};

	  _satellite.setDebug = setDebugEnabled;

	  var warningLogged = false;

	  Object.defineProperty(_satellite, '_container', {
	    get: function () {
	      if (!warningLogged) {
	        logger.warn(
	          '_satellite._container may change at any time and should only ' +
	            'be used for debugging.'
	        );
	        warningLogged = true;
	      }

	      return container;
	    }
	  });
	};

	/***************************************************************************************
	 * (c) 2021 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	function isArrayReference(str) {
	  return (
	    typeof str === 'string' &&
	    str.indexOf('[') !== -1 &&
	    str.indexOf(']') !== [')
	  );
	}

	/**
	 * Recursive function to loop through settings and look for the setting to transform,
	 * which is the final entry within the pathSegments array. Alters settings in-place.
	 * @param {Array} pathSegments
	 * @param {Object} settings
	 * @param {Function} decorateWithDynamicHost
	 */
	function traverseIntoSettings(pathSegments, settings, decorateWithDynamicHost) {
	  // nothing to do
	  if (!pathSegments.length || !isPlainObject(settings)) {
	    return;
	  }

	  var currentKey = pathSegments[0];

	  // base case
	  if (pathSegments.length === 1) {
	    if (
	      settings.hasOwnProperty(currentKey) &&
	      typeof settings[currentKey] === 'string'
	    ) {
	      settings[currentKey] = decorateWithDynamicHost(settings[currentKey]);
	    }
	    return;
	  }

	  // still more work to do
	  var remainingPathSegments = pathSegments.slice(1);
	  if (isArrayReference(currentKey)) {
	    // 'someArrayReference[]' --> 'someArrayReference'
	    currentKey = sanitizeArrayKey(currentKey);
	    var settingsValue = settings[currentKey];
	    if (Array.isArray(settingsValue)) {
	      settingsValue.forEach(function (arrayEntryObject) {
	        return traverseIntoSettings(
	          remainingPathSegments,
	          arrayEntryObject,
	          decorateWithDynamicHost
	        );
	      });
	    }
	  } else {
	    // object case
	    return traverseIntoSettings(
	      remainingPathSegments,
	      settings[currentKey],
	      decorateWithDynamicHost
	    );
	  }
	}

	/**
	 * Returns a function that when called will attempt to traverse the passed in
	 * settings object to each file path and transform a relative URL to an absolute
	 * URL.
	 *
	 * @param isDynamicEnforced
	 * @param decorateWithDynamicHost
	 * @returns {(function(*=, *=, *=): (*))|*}
	 */
	var createSettingsFileTransformer = function (isDynamicEnforced, decorateWithDynamicHost) {
	  return function (settings, filePaths, moduleReferencePath) {
	    if (
	      !isDynamicEnforced ||
	      !isPlainObject(settings) ||
	      !Object.keys(settings).length ||
	      !Array.isArray(filePaths) ||
	      !filePaths.length
	    ) {
	      return settings;
	    }

	    // pull out the file paths by the module's reference path and loop over each urlPath
	    filePaths.forEach(function (filePathString) {
	      // The custom code action provides the ability to have the source code in the 'source'
	      // variable or to have an external file. Therefore, this module has 2 behaviors.
	      // It also does not provide a value of false for isExternal just as all other extensions
	      // that use fileTransform do not provide an isExternal variable check. Therefore, we need
	      // to treat Adobe's custom code action special, and don't augment the 'source' variable
	      // if isExternal is not also present.
	      var isAdobeCustomCodeAction = Boolean(
	        moduleReferencePath != null &&
	          /^core\/.*actions.*\/customCode\.js$/.test(moduleReferencePath)
	      );
	      if (
	        isAdobeCustomCodeAction &&
	        filePathString === 'source' &&
	        !settings.isExternal
	      ) {
	        return;
	      }

	      // modify the object in place
	      traverseIntoSettings(
	        filePathString.split('.'),
	        settings,
	        decorateWithDynamicHost
	      );
	    });

	    return settings;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	// DYNAMIC URL













































	var _satellite = window._satellite;

	if (_satellite && !window.__satelliteLoaded) {
	  // If a consumer loads the library multiple times, make sure only the first time is effective.
	  window.__satelliteLoaded = true;

	  var container = _satellite.container;

	  // Remove container in public scope ASAP so it can't be manipulated by extension or user code.
	  delete _satellite.container;

	  /*
	    get rid of container.buildInfo decoration once deprecation is finished of
	    buildInfo.environment string
	   */
	  var buildInfo = reactorObjectAssign({}, container.buildInfo);
	  Object.defineProperty(buildInfo, 'environment', {
	    get: function () {
	      logger.deprecation(
	        'container.buildInfo.environment is deprecated.' +
	          'Please use `container.environment.stage` instead'
	      );
	      return container.environment.stage;
	    }
	  });
	  container.buildInfo = buildInfo;

	  var localStorage = getNamespacedStorage('localStorage');
	  var debugController = createDebugController(localStorage, logger);

	  var currentScriptSource = '';
	  if (reactorDocument.currentScript && reactorDocument.currentScript.getAttribute('src')) {
	    currentScriptSource = reactorDocument.currentScript.getAttribute('src');
	  }
	  var dynamicHostResolver;
	  try {
	    dynamicHostResolver = createDynamicHostResolver(
	      currentScriptSource,
	      Boolean(container.company.dynamicCdnEnabled),
	      container.company.cdnAllowList,
	      debugController
	    );
	  } catch (e) {
	    logger.warn('Please review the following error:');
	    throw e; // We don't want to continue allowing Turbine to start up if we detect an error in here
	  }

	  var settingsFileTransformer = createSettingsFileTransformer(
	    dynamicHostResolver.isDynamicEnforced,
	    dynamicHostResolver.decorateWithDynamicHost
	  );

	  var moduleProvider = createModuleProvider();

	  var replaceTokens;

	  var undefinedVarsReturnEmpty =
	    container.property.settings.undefinedVarsReturnEmpty;
	  var ruleComponentSequencingEnabled =
	    container.property.settings.ruleComponentSequencingEnabled;

	  var dataElements = container.dataElements || {};

	  var getDataElementDefinition = function (name) {
	    return dataElements[name];
	  };

	  // We support data elements referencing other data elements. In order to be able to retrieve a
	  // data element value, we need to be able to replace data element tokens inside its settings
	  // object (which is what replaceTokens is for). In order to be able to replace data element
	  // tokens inside a settings object, we need to be able to retrieve data element
	  // values (which is what getDataElementValue is for). This proxy replaceTokens function solves the
	  // chicken-or-the-egg problem by allowing us to provide a replaceTokens function to
	  // getDataElementValue that will stand in place of the real replaceTokens function until it
	  // can be created. This also means that createDataElementValue should not call the proxy
	  // replaceTokens function until after the real replaceTokens has been created.
	  var proxyRepments);
	  };

	  var getDataElementValue = createGetDataElementValue(
	    moduleProvider,
	    getDataElementDefinition,
	    proxyReplaceTokens,
	    undefinedVarsReturnEmpty,
	    settingsFileTransformer
	  );

	  var customVars = {};
	  var setCustomVar = createSetCustomVar(customVars);

	  var isVar = createIsVar(customVars, getDataElementDefinition);

	  var getVar = createGetVar(
	    customVars,
	    getDataElementDefinition,
	    getDataElementValue
	  );

	  replaceTokens = createReplaceTokens(isVar, getVar, undefinedVarsReturnEmpty);

	  // Important to hydrate satellite object before we hydrate the module provider or init rules.
	  // When we hydrate module provider, we also execute extension code which may be
	  // accessing _satellite.
	  hydrateSatelliteObject(
	    _satellite,
	    container,
	    debugController.setDebugEnabled,
	    getVar,
	    setCustomVar
	  );

	  hydrateModuleProvider(
	    container,
	    moduleProvider,
	    debugController,
	    replaceTokens,
	    getDataElementValue,
	    settingsFileTransformer,
	    dynamicHostResolver.decorateWithDynamicHost
	  );

	  var notifyMonitors = createNotifyMonitors(_satellite);
	  var executeDelegateModule = createExecuteDelegateModule(
	    moduleProvider,
	    replaceTokens,
	    settingsFileTransformer
	  );

	  var getModuleDisplayNameByRuleComponent =
	    createGetModuleDisplayNameByRuleComponent(moduleProvider);
	  var logConditionNotMet = createLogConditionNotMet(
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logConditionError = createLogConditionError(
	    getRuleComponentErrorMessage,
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logActionError = createLogActionError(
	    getRuleComponentErrorMessage,
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logRuleCompleted = createLogRuleCompleted(logger, notifyMonitors);

	  var evaluateConditions = createEvaluateConditions(
	    executeDelegateModule,
	    isConditionMet,
	    logConditionNotMet,
	    logConditionError
	  );
	  var runActions = createRunActions(
	    executeDelegateModule,
	    logActionError,
	    logRuleCompleted
	  );
	  var executeRule = createExecuteRule(evaluateConditions, runActions);

	  var addConditionToQueue = createAddConditionToQueue(
	    executeDelegateModule,
	    normalizeRuleComponentError,
	    isConditionMet,
	    logConditionError,
	    logConditionNotMet
	  );
	  var addActionToQueue = createAddActionToQueue(
	    executeDelegateModule,
	    normalizeRuleComponentError,
	    logActionError
	  );
	  var addRuleToQueue = createAddRuleToQueue(
	    addConditionToQueue,
	    addActionToQueue,
	    logRuleCompleted
	  );

	  var triggerRule = createTriggerRule(
	    ruleComponentSequencingEnabled,
	    executeRule,
	    addRuleToQueue,
	    notifyMonitors
	  );

	  var getSyntheticEventMeta = createGetSyntheticEventMeta(moduleProvider);

	  var initEventModule = createInitEventModule(
	    triggerRule,
	    executeDelegateModule,
	    normalizeSyntheticEvent,
	    getRuleComponentErrorMessage,
	    getSyntheticEventMeta,
	    logger
	  );

	  initRules(buildRuleExecutionOrder, container.rules || [], initEventModule);
	}

	// Rollup's iife option always sets a global with whatever is exported, so we'll set the
	// _satellite global with the same object it already is (we've only modified it).
	var src = _satellite;

	return src;

})();


