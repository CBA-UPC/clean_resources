/*
 * cx-custom.js
 * Copyright (C) 2018 Cxense ASA
 *
 * Usage:
 *   0. Initialize custom trackings
 *     window.cXcustom = window.cXcustom || function() {(window.cXcustom.q = window.cXcustom.q || []).push(arguments)};
 *     cXcustom("<command>", args1, args2, args3, ...);
 *     cX.callQueue.push(['invoke', function() {
 *       cX.loadScript("<path>/cx-custom.js");
 *     }]);
 *
 *     ex.
 *     <script type="text/javascript">
 *       window.cXcustom = window.cXcustom || function() {(window.cXcustom.q = window.cXcustom.q || []).push(arguments)};
 *       cX.callQueue.push(['invoke', function() {
 *         var cx_dmp_params = {origin: "xxx-web", persistedQueryId: "XXXXXXXXXXXXXXXXXXXXXXXXXX"};
 *         cXcustom("scrollDepth2", function(pos){cX.sendEvent("scroll", {pos_in_page:String(pos)+'%'}, cx_dmp_params);} , 0, '', 1000);
 *         cXcustom("scrollDepth2", function(pos){cX.sendEvent("scroll", {pos_in_article:String(pos)+'%'}, cx_dmp_params);}, 2, '<selector of body element>', 1000);
 *         cXcustom("clickedTracker", function(func, obj){func("clicked", obj, cx_dmp_params)});
 *         cXcustom("externalLink", function(area, params) {cX.sendEvent("linkclick", {area: area, text: params.text, href: params.href}, cx_dmp_params);});
 *         cX.loadScript("//<PATH>/cx-custom_style.js");
 *       }]);
 *     </script>
 *
 *   1. Scroll depth tracking 2 (selector ver.)
 *     Start scroll depth tracking:
 *       cXcustom("scrollDepth", eventHandler, trackingMethod, selector, baselineDelay);
 *     eventHandler: callback function to be called when scroll depth reaches 25%, 50%, 75%, 100%
 *       Note that 0% will be passed to the function when the tracker is ready
 *     trackingMethod:
 *       0 - measure percentage relative to the entire page
 *       1 - measure percentage of article
 *       2 - measure percentage relative to the end of the article
 *     selector: Selector for the element (N/A for trackingMethod == 0)
 *       if trackingMethod == 1: element encapuslating the article body
 *       if trackingMethod == 2: element at the end of the article
 *     selector: selector of target element
 *     baselineDelay: delay in milliseconds before eventHandler is called for baseline, -1 to disable
 *       'baseline' is the event(s) sent to report initial visibility on first view without requiring the user to scroll
 *
 *   2. Clicked area tracking
 *     Start tracking clicked area and send last clicked area stored in local storage:
 *       cXcustom("clickedArea", eventHandler)
 *     eventHandler: callback function to be called if there's last clicked area data stored in local storage
 */

(function() {
  if(_isRobot()) {
    return;
  }

  /**
   * Setup scroll depth tracking
   */
  function initCxScrollDepth(eventHandler, trackingMethod, selector, baselineDelay) {
    var cxScrollDepth = (function() {
      var cX = window.cX = window.cX || {}; cX.callQueue = cX.callQueue || [];
      var _instance;
      var _eventHandler;
      var _element;
      var _resolution;
      var _prevVal;
      var _calcDepth;
      // setup
      function _init(eventHandler, trackingMethod, selector, baselineDelay) {
        _eventHandler = eventHandler;
        if (trackingMethod != 0) {
          _element = document.querySelector(selector);
          if(!_element) {
            return;
          }
        }
        _resolution = 25;
        _prevVal = 0;
        switch (trackingMethod) {
          case 0:
            _calcDepth = _calcDepth0;
            break;
          case 1:
            _calcDepth = _calcDepth1;
            break;
          default:
            _calcDepth = _calcDepth2;
            break;
        }
        _startScrollDepthTracking(baselineDelay);
      }
      return {
        init:       };
      function _calcDepth0() {
        var pos = cX.getScrollPos();
        var windowSize = cX.getWindowSize();
        var docSize = cX.getDocumentSize();
        var percentage = (pos.top + windowSize.height) / docSize.height * 100;
        percentage = Math.ceil(percentage);
        if (percentage > 100) { percentage = 100; }
        var depth = Math.floor(percentage / _resolution);
        var reportVal = depth * _resolution;
        if (_prevVal < reportVal && reportVal >= _resolution) {
          for (var val = _prevVal + _resolution; val < reportVal; val += _resolution) {
            _eventHandler(val);
          }
          _eventHandler(reportVal);
          _prevVal = reportVal;
        }
      }
      function _calcDepth1() {
        var pos = cX.getScrollPos();
        var windowSize = cX.getWindowSize();
        var bodyElementPos = cX.getElementPosition(_element);
        if (pos.top + windowSize.height > bodyElementPos.top) {
          var percentage = (pos.top + windowSize.height - bodyElementPos.top) / _element.offsetHeight * 100;
          percentage = Math.ceil(percentage);
          if (percentage > 100) { percentage = 100; }
          var depth = Math.floor(percentage / _resolution);
          var reportVal = depth * _resolution;
          if (_prevVal < reportVal && reportVal >= _resolution) {
            for (var val = _prevVal + _resolution; val < reportVal; val += _resolution) {
              _eventHandler(val);
            }
            _eventHandler(reportVal);
            _prevVal = reportVal;
          }
        }
      }
      function _calcDepth2() {
        var pos = cX.getScrollPos();
        var windowSize = cX.getWindowSize();
        var bodyElementPos = cX.getElementPosition(_element);
        var percentage = (pos.top + windowSize.height) / bodyElementPos.top * 100;
        percentage = Math.ceil(percentage);
        if (percentage > 100) { percentage = 100; }
        var depth = Math.floor(percentage / _resolution);
        var reportVal = depth * _resolution;
        if (_prevVal < reportVal && reportVal >= _resolution) {
          for (var val = _prevVal + _resolution; val < reportVal; val += _resolution) {
            _eventHandler(val);
          }
          _eventHandler(reportVal);
          _prevVal = reportVal;
        }
      }
      function _onScroll() {
        if (_prevVal >= 100) return;
        _calcDepth();
      }
      /*
       * Throttle function borrowed from:
       * Underscore.js 1.5.2
       * http://underscorejs.org
       * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       * Underscore may be freely distributed under the MIT license.
       */
            function _startScrollDepthTracking(baselineDelay) {
        _eventHandler(0);
        if (baselineDelay > 0) {
          setTimeout( baselineDelay);
        }
        window.addEventListener("scroll", throttle(_onScroll, 500), false);
      }
    })();
    if (document.readyState === "loading") {
      window.document.addEventListener("DOMContentLoaded", ;
    } else {
      cxScrollDepth.init(eventHandler, trackingMethod, selector, baselineDelay);
    }
  }

  /**
  *  clicked area/link tracking
  */
  var cxClickedAreaTracker = (function(){
    try{
      var _reg = new RegExp("^https?:\/\/" + location.hostname);
      var _areaNameAttribute = "data-cx-area";
      var _eventHandler;
      var _sendCnt = 0;
      function _init(eventHandler) {
        _eventHandler = eventHandler;
        _sendClickedArea(_eventHandler);
        _startTracking();
      }
      function _sendClickedArea(eventHandler) {
        if (typeof localStorage === 'object' && typeof localStorage.getItem === 'function') {
          var keyName = "cx_clickedarea";
          var clickedArea = JSON.parse(localStorage.getItem(keyName));
          if (clickedArea) {
            localStorage.removeItem(keyName);
            var lastClicked = clickedArea["time"] || 0;
            var now = Math.round(new Date().getTime() / 1000);
            if (isFinite(lastClicked) && lastClicked <= now && (lastClicked > now - 30 * 60)) {
              eventHandler(clickedArea.area, clickedArea.url, _createCustomSendEvent(clickedArea.prnd));
            }
          }
        }
      }
      
      function _createCustomSendEvent(prnd) {
        return function(type, customParameters, providedArgs, segmentIds) {
          customParameters = customParameters || {};
          var args = cX.library.combineArgs(cX.library.m_customEventAttributes || {}, providedArgs || {});
          var identities = args.identities || [];
          if (!cX.Array.some(identities, ) {
            identities.push({ id: cX.getUserId(), type: 'cx' });
          }
          var apiFormattedCustomParameters = [];
          cX.Object.forEach(customParameters, function(value, name) {
            apiFormattedCustomParameters.push({ group: name, item: value, type: typeof(value) === 'number' ? 'number' : 'string' });
          });
          var requestObject = {
            events: [{
              type: type,
              rnd: cX.library._randomString(),
              siteId: cX.library.m_siteId,
              prnd: prnd,
              userIds: identities,
              origin: args.origin,
              segmentIds: segmentIds,
              customParameters: apiFormattedCustomParameters
            }]};
          var url = 'https://comcluster.cxense.com/dmp/push?callback={{callback}}' +
            '&persisted=' + encodeURIComponent(args.persistedQueryId) +
            '&json=' + encodeURIComponent(cX.JSON.stringify(requestObject));
          cX.jsonpRequest(url,  { synchronous: args.synchronous });
        };
      }

      function _onClickEvent(event) {
        var ev = event || window.event;
        var href = "";
        var isBlank= false;
        var areaName = "";
        if (ev) {
          var el = ev.target || ev.srcElement;
          for (var i = 0; (i < 15) && (el) && el.nodeName.toLowerCase() !== 'body'; i++) {
            if(!areaName){
              areaName = _getAreaName(el, el.parentNode ? el.parentNode.childNodes : []);
            }
            if (el.nodeType === 1 && el.nodeName.toLowerCase() === 'a' && typeof el.href === 'string') {
              if(_isTargetBlank(el)){
                isBlank = true;
              }
              if(typeof el.href === 'string') {
                href = el.href;
              }
            }
            el = el.parentNode;
          }
          if(isBlank && href && _sendCnt == 0){
            _eventHandler(areaName, href.substr(0,256), _createCustomSendEvent(cX.library.m_rnd));
            _sendCnt++;
          }else if(href && areaName) {
            if (typeof localStorage === 'object' && typeof localStorage.setItem === 'function') {
              var now = Math.round(new Date().getTime() / 1000);
              localStorage.setItem("cx_clickedarea", JSON.stringify({
                "time": now,
                "area": areaName,
                "prnd": cX.library.m_rnd
              }));
            }
          }
        }
        return true;
      }
      function _isTargetBlank(el) {
        return el.getAttribute('target') && el.getAttribute('target').toLowerCase() == "_blank";
      }
      function _getAreaName(el, neighborNodes) {
        var areaName = "";
        if(el.getAttribute(_areaNameAttribute)) {
          areaName = el.getAttribute(_areaNameAttribute);
        }
        return areaName;
      }
      return {
        init:       }
    }catch(e){}

  })();

  function _isRobot() {
    var robot_strings = ["preview", "phantomjs", "spider", "crawl", "cxense", "slurp", "read ahead agent"];
    var re_bot = /\bbot|bot\b/;
    var ua = navigator.userAgent.toLowerCase();
    if(re_bot.test(ua)) {
      return true;
    } else {
      for(var i=0; i<robot_strings.length; i++) {
        if(ua.indexOf(robot_strings[i])!=-1) {
          return true;
        }
      }
    }
    return ua.indexOf("mozilla") == 0 && ua.indexOf(" ") == -1;
  }

  // console.log("cx-custom.js loaded!");
  var _cXcustom = function () { (window.cXcustom.q = window.cXcustom.q || []).push(arguments); _queueExecute(); };
  _cXcustom.q = window.cXcustom && window.cXcustom.q ? window.cXcustom.q : [];
  window.cXcustom = _cXcustom;

  _queueExecute();

  function _queueExecute() {
    while (window.cXcustom.q && window.cXcustom.q.length > 0) {
      var command = window.cXcustom.q.shift();
      try {
        if (command[0] === "scrollDepth") {
          var sl=command[3];
          if(sl) {
            command[4]==true ? sl="."+sl : sl="#"+sl;
          }
          initCxScrollDepth(command[1], command[2], sl, command[5]);
        } else if (command[0] === "scrollDepth2") {
          initCxScrollDepth(command[1], command[2], command[3], command[4]);
        } else if(command[0] === "clickedTracker") {
          cxClickedAreaTracker.init(command[1]);
        }
      } catch (e) {}
    }
  }
})();

/* DMP for Advertising */
(function(d,s,e,t){
  var element = d.createElement(s);
  element.type = 'text/java' + s;
  element.async = 'async';
  element.src = 'https://cdn.cxense.com/track_banners_init.js';
  var tag = d.getElementsByTagName(s)[0];
  tag.parentNode.insertBefore(element, tag);
}(document,'script'));

/* MG Survey for Piano */
function sendMgSurvey(stage, surveyId, email) {
  var stage = stage === "prd" ? "prd" : "dev";
  var x = new XMLHttpRequest();
  x.onreadystatechange = function() {
      if(x.readyState == 4) {
          if(x.status === 200 || x.status === 201) {
              console.log('mgs ok');
          } else {
              console.log('mgs error');
          }
      }
  }
  if(stage === "prd") {
    x.open('POST', 'https://a1w6t6dkt8.execute-api.ap-northeast-1.amazonaws.com/prd/survey/data');
  } else {
    x.open('POST', 'https://a5f3q1bbd7.execute-api.ap-northeast-1.amazonaws.com/dev/survey/data');
  }
  x.setRequestHeader('Content-Type', 'application/json');
  var data = {
      SurveyId: surveyId,
      Email: email
  };
  x.send(JSON.stringify(data));
}